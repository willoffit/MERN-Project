import React from 'react';
import { Link } from 'react-router-dom';

class Results extends React.Component {
  //  constructor(props) {
  //     super(props);
  //  }

   componentDidMount() {
      this.props.fetchUsers();
   }
   
   render() {
      const group = this.props.group;
      const members = group.members;
      const category = this.props.category;
      if (Object.values(this.props.users).length === 0) {
         return null;
      };
      return (
         <div>
            <h1>Final Results!</h1>
            <ul>
               {Object.values(members).map(userId => {
                  let user = this.props.users[userId]
                  let category_scores = user.scores[category]
                  
                  if (category_scores.length > 0) {
                     return (
                        <li>
                           {user.username}: {category_scores[category_scores.length - 1]}
                        </li>
                     )
                  } else {
                     return (
                        <div>
                           <div>{user.username}: waiting for player to finish game...</div>
                           <Link to={`/group/${group._id}`}>Play again?</Link>
                           <Link to="/profile">End game?</Link>
                        </div>
                     )
                  }
               })}
            </ul>
         </div>
      )
   }
};

export default Results;
