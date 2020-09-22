import React from 'react';
import './category_index.css';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(category) {
    let group = this.props.group;

    const game = { 
      groupId: group._id,
      category: category,
    }

    this.props.fetchQuestions(category)
      .then(action => game.questions = action.questions)
      .then(() => this.props.createGame(game))
      .then(action => group.game = action.game._id)
      .then(() => this.props.updateGroup(group))
      .then(() => this.props.history.push('/question'))

    group.members.forEach(memberId => {
      let user = this.props.users[memberId];
      console.log('cat-idx-user-before')
      console.log(user);
      user.inProgress = true;
      console.log("cat-idx-user-after");
      console.log(user);
      this.props.updateUser(user)
    })
  }

   render() {
      const { categories } = this.props;

      return (
        <div className="category-page">
          <div className="category-page-header">CATEGORIES</div>
          <div className="categories">
            {categories.map((category) => (
              <button 
                className="category-buttons" 
                onClick={() => this.handleClick(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
      );
   }

}

export default CategoryIndex;
