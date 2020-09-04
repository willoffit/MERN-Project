import React from 'react';

class Results extends React.Component {
  //  constructor(props) {
  //     super(props);
  //  }

   render() {
      const group = this.props.group;
      const members = group.members;
      const category = this.props.category;

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
                        <li>
                           {user.username}: waiting for player to finish game...
                        </li>
                     )
                  }
               })}
            </ul>
         </div>
      )
   }
};

export default Results;
