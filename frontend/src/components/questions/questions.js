import React from 'react';
import Answer from "./answers";

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = { userChoice: -1 };

        this.renderAnswers = this.renderAnswers.bind(this);
        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.getNextQuestion = this.getNextQuestion.bind(this);
    }

    getNextQuestion(questions) {
        return questions.pop();
    }

    componentDidMount() {
        this.props.fetchQuestions("General")
    }

    renderAnswers(question) {
        let answers = [];
        answers.push(question.correct_answer);
        answers.push(...question.incorrect_answers);
        return answers;
    }

    handleUserSelect(e) {
        e.preventDefault();

        document.getElementById("radio-0").disabled = true;
        document.getElementById("radio-1").disabled = true;
        document.getElementById("radio-2").disabled = true;
        document.getElementById("radio-3").disabled = true;

        const idx = parseInt(e.target.value);
        this.setState({ userChoice: idx });

    }


    afterMounted(questions) {
        let question = this.getNextQuestion(questions);
        let answers = this.renderAnswers(question);

        return (
            <div>
                <Answer 
                     answers={answers}
                     userAns={this.state.userChoice}
                     correctAns={question.correct_answer}
                     incorrectAns={question.incorrect_answers}
                     nextQuestion={() => this.getNextQuestion(questions)}
                 />

                 <p>Category: {question.category}</p>
                 <p>Question: {question.question}</p>
                 <p>Answers: {answers.map((answer, idx) => (
                        <button 
                            id={`radio-${idx}`}
                            key={`answer-${idx}`}
                            type="radio"
                            value={idx}
                            onClick={this.handleUserSelect}
                            className="trivia-q">
                            {answer}
                         </button>
                 ))}</p>
            </div>
        )
    }

    render() {
        let questions = this.props.questions.slice();
        return this.props.questions.length === 0 ? null : this.afterMounted(questions)
    }
}

export default Question