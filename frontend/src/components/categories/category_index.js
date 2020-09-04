import React from 'react';
import './category_index.css';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(category) {
    this.props.fetchQuestions(category)
      .then(() => this.props.history.push('/question'))
  }

   render() {
      const { categories } = this.props;

      return (
        <div className="category-page">
          <div className="category-page-header">CATEGORIES</div>
          <div className="categories">
            {categories.map((category) => (
              <button className="category-buttons" onClick={() => this.handleClick(category)}>{category}</button>
            ))}
          </div>
        </div>
      );
   }

}

export default CategoryIndex;
