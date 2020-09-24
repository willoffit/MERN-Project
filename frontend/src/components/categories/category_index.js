import React from 'react';
import './category_index.css';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    this.updateGroup = this.updateGroup.bind(this);
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
      user.inProgress = true;
      this.props.updateUser(user)
    })
  }

  updateGroup(e) {
    e.preventDefault();
    this.props.history.push(`/group/${group._id}`)
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
          <button className="categories-update-group" onClick={this.updateGroup}>Update Group</button>
        </div>
      );
   }

}

export default CategoryIndex;
