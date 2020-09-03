import React from 'react';
// import { fetchQuestions } from '../../actions/';

class CategoryIndex extends React.Component {
   // componentDidMount() {
   //    this.props.fetchQuestions();
   // }

   myFunction() {
      document.getElementById("myRadio").disabled = true;
   }

   render() {
      const { categories } = this.props;

      return (
        <div>
          <div>
            {categories.map((category) => (
              <button className="category-buttons">{category}</button>
              // onClick={() => fetchQuestions(category)}
            ))}
          </div>
        </div>
      );
   }
}

export default CategoryIndex;
