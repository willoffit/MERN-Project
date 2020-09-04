import React from 'react';

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
      // console.log(this.props.users['5f51c4403e05452d6745ca70'].group)

      return (
        <div>
          <div>
            {categories.map((category) => (
              <button onClick={() => this.handleClick(category)}>{category}</button>
            ))}
          </div>
        </div>
      );
   }
}

export default CategoryIndex;
