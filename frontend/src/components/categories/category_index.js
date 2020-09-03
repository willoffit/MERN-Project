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
            <input type="radio" id="myRadio" value="TEMP1" onClick={this.myFunction} />
            <input type="radio" id="myRadio" value="TEMP1" onClick={this.myFunction} />
            <input type="radio" id="myRadio" value="TEMP1" onClick={this.myFunction} />
            <input type="radio" id="myRadio" value="TEMP1" onClick={this.myFunction} />
            {categories.map((category) => (
              <button onClick={() => this.props.fetchQuestions(category)}>{category}</button>
              // onClick={() => fetchQuestions(category)}
            ))}
          </div>
        </div>
      );
   }
}

export default CategoryIndex;
