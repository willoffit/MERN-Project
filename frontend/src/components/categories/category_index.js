import React from 'react';
import './category_index.css';

class CategoryIndex extends React.Component {

   render() {
      const { categories } = this.props;

      return (
        <div className="category-page">
          <div className="category-page-header">CATEGORIES</div>
          <div className="categories">
            {categories.map((category) => (
              <button
                className="category-buttons"
                onClick={() => this.props.fetchQuestions(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      );
   }

}

export default CategoryIndex;
