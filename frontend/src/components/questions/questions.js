import React from 'react';
import Answer from "./answers";

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.renderAnswers = this.renderAnswers.bind(this);
        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.getNextQuestion = this.getNextQuestion.bind(this);
    }

    getNextQuestion(questions) {
        this.setState(questions.pop())
    }

    componentDidMount() {
        this.props.fetchQuestions("General");
    }

    renderAnswers() {
        let answers = [];
        answers.push(this.state.correct_answer);
        answers.push(...this.state.incorrect_answers);
        return answers;
    }

    handleUserSelect(e) {
        e.preventDefault();

        const idx = parseInt(e.target.value);
        this.setState({ userChoice: idx });
        // Object.freeze(this.state)
    }


    afterMounted() {
        // let questions = this.props.questions.slice();
        // this.getNextQuestion(questions);
        // let answers = this.renderAnswers();
        // return Object.values(this.state)
        // return (
        //     <div>
        //         <Answer 
        //             answers={answers}
        //             userAns={this.state.userChoice}
        //             correctAns={this.state.correct_answer}
        //             incorrectAns={this.state.incorrect_answers}
        //             nextQuestion={this.props.questions.pop()}
        //         />

        //         <p>Category: {this.state.category}</p>
        //         <p>Question: {this.state.question}</p>
        //         <p>Answers: {answers.map((answer, idx) => (
        //                 <button 
        //                     type="radio"
        //                     value={idx}
        //                     onClick={this.handleUserSelect}
        //                     className="trivia-q">
        //                     {answer}
        //                 </button>
        //         ))}</p>
        //     </div>
        // )
    }

    render() {
        return <h1>Component</h1>
        // return this.props.questions.length === 0 ? null : this.afterMounted()
    }
}

export default Question