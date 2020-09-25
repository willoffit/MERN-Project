import React from 'react';
import './category_index.css';
import { Link } from 'react-router-dom';

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
      user.inProgress = true;
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
          <Link className="categories-update-group" to={`/group/${this.props.group._id}`}>
            <i class="fas fa-arrow-left"></i> Return to Update Group
          </Link>
        </div>
      );
   }

}

export default CategoryIndex;
