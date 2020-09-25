import React from 'react';
import { Link } from 'react-router-dom';
import './results.css'

class Results extends React.Component {
   componentDidMount() {
      const user = this.props.user;
      user.inProgress = false;
      this.props.updateUser(user);
   }

   curryScores(numArgs) {
      const category = this.props.category
      let scores = [];

      return function _curry (score) {
         scores.push(score);
         if (Object.values(scores).length < numArgs) {
            return _curry;
         } else {
            return Math.max(...scores)
         }
      }
   }

   winner(high_score) {
      const category = this.props.category;
      let winners = [];

      if (typeof high_score === "function") return null;

      const members = this.props.group.members;
      Object.values(members).map((userId) => {
         let user = this.props.users[userId];
         let scores = user.scores[category];
         let username = user.username;

         if (scores[scores.length - 1] === high_score) winners.push(username);
      });

      return winners;
   }

   render() {
      const group = this.props.group;
      const members = group.members;
      const category = this.props.category;

      if (Object.values(this.props.users).length === 0) return null;
      let curry = this.curryScores(Object.values(members).length)
      let high_score;

      return (
         <div className="results-page">
            <h1 className="results-header">FINAL RESULTS!!!</h1>
            <div className="results-users">
               {Object.values(members).map((userId) => {
                  let user = this.props.users[userId];
                  let scores = user.scores[category];
                  let score = scores[scores.length - 1];

                  if (user.inProgress === false) {
                     high_score = curry(score);
                     return (
                     <div>
                        {user.username}: {score}
                     </div>
                     );
                  } else {
                     return (
                     <div>
                    {user.username}: waiting for player to finish game...
                  </div>
                );
               }
            })}
            </div>
            <h2 className="results-winner">AND THE WINNER IS... {this.winner(high_score)}!!!</h2>
            <div className="results-options">
               <Link to={`/group/${group._id}`} className="results-play-again">Play again?</Link>
               <Link to="/profile" className="results-end-game">End game?</Link>
            </div>
         </div>
      );
   }
   
};

export default Results;
