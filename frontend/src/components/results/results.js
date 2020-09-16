import React from 'react';
import { Link } from 'react-router-dom';

class Results extends React.Component {
  //  constructor(props) {
  //     super(props);
  //  }

   componentDidMount() {
      // this.props.fetchUsers()

      const user = this.props.user;
      user.inProgress = false;
      this.props.updateUser(user);
   }

   curryScores(fcn, numArgs) {
      const category = this.props.category
      // let scores = {};
      let scores = [];
      console.log(numArgs);
   
      return function _curry (score) {
         // let category_scores = user.scores[category]
         // scores[user._id] = category_scores[category_scores - 1];
         scores.push(score);
         console.log(scores);

         if (Object.values(scores).length < numArgs) {
            return _curry;
         } else {
            return fcn(...scores)
         }
      }
   }

   winner(high_score) {
      const category = this.props.category;
      let winners = [];

      if (typeof high_score === "function") return null;

      const members = this.props.group.members;
      Object.values(members).map((userId) => {
         let scores = this.props.users[userId].scores[category];
         if (scores[scores.length - 1] === high_score) winners.push(userId);
      });

      return winners;
   }

   render() {
      const group = this.props.group;
      const members = group.members;
      const category = this.props.category;

      if (Object.values(this.props.users).length === 0) return null;
      let curry = this.curryScores(Math.max, Object.values(members).length)

      return (
        <div>
         <h1>Final Results!</h1>
         <ul>
            {Object.values(members).map((userId) => {
              let user = this.props.users[userId];
              let scores = user.scores[category];
              let score = scores[scores.length - 1];

              if (user.inProgress === false) {
                curry(score);
                return (
                  <div>
                    {user.username}: {score}
                  </div>
                );
               } else {
                  return (
                     <div>
                    {user.username}: waiting for player to finish game...
                    <Link to={`/group/${group._id}`}>Play again?</Link>
                    <Link to="/profile">End game?</Link>
                  </div>
                );
              }
            })}
         </ul>

         {console.log(curry)}
         <h2>AND THE WINNER IS....: {this.winner(curry)}</h2>
         

        </div>
      );
   }
   
};

export default Results;

// render() {
//    const group = this.props.group;
//    const members = group.members;
//    const category = this.props.category;
//    if (Object.values(this.props.users).length === 0) {
//       return null;
//    };
//    return (
//       <div>
//          <h1>Final Results!</h1>
//          <ul>
//             {Object.values(members).map(userId => {
//                let user = this.props.users[userId]
//                let category_scores = user.scores[category]
               
//                if (category_scores.length > 0) {
//                   return (
//                      <li>
//                         {user.username}: {category_scores[category_scores.length - 1]}
//                      </li>
//                   )
//                } else {
//                   return (
//                      <div>
//                         <div>{user.username}: waiting for player to finish game...</div>
//                      </div>
//                   )
//                }
//             })}
//             <Link to={`/group/${group._id}`}>Play again?</Link>
//             <Link to="/profile">End game?</Link>
//          </ul>
//       </div>
//    )
// }