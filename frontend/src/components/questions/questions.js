import React from 'react';
import Answer from "./answers";
import Results from '../results/results'
import { Link } from 'react-router-dom';

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = { userChoice: -1, done: false };

        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.handleNext = this.handleNext.bind(this);

        this.questions = this.props.questions.slice();
        this.question = this.questions.pop();

        this.answers = [
            this.question.correct_answer, 
            ...this.question.incorrect_answers
        ]
        this.answers = this.shuffle(this.answers);
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    handleUserSelect(e) {
        e.preventDefault();

        document.getElementById("btn-0").setAttribute("disabled", "");
        document.getElementById("btn-1").setAttribute("disabled", "");

        if (this.question.type === "multiple") {
            document.getElementById("btn-2").setAttribute("disabled", "");
            document.getElementById("btn-3").setAttribute("disabled", "");
        }

        const idx = parseInt(e.target.value);
        this.setState({ userChoice: idx, done: false });
    }

    handleNext() {
        document.getElementById("btn-0").removeAttribute("disabled");
        document.getElementById("btn-1").removeAttribute("disabled");

        if (this.question.type === "multiple") {
            document.getElementById("btn-2").removeAttribute("disabled");
            document.getElementById("btn-3").removeAttribute("disabled");
        }

        this.question = this.questions.pop()
        this.answers = this.shuffle([
            this.question.correct_answer,
            ...this.question.incorrect_answers,
        ]);

        this.setState({ userChoice: -1, done: true });
    }

    afterMounted() {
        let klass = "correct";

        return (
            <div>
                <Answer
                    questions={this.questions} 
                    answers={this.answers}
                    userAns={this.state.userChoice}
                    correctAns={this.question.correct_answer}
                    incorrectAns={this.question.incorrect_answers}
                    difficulty={this.question.difficulty}
                    category={this.question.category}
                    user={this.props.user}
                    editUser={this.props.editUser}
                />

                <p>Category: {this.question.category}</p>
                <p>Question: {this.question.question}</p>
                <p>Answers: {this.answers.map((answer, idx) => (
                    <button 
                        id={`btn-${idx}`}
                        key={`answer-${idx}`}
                        type="radio"
                        value={idx}
                        onClick={this.handleUserSelect}
                        className="trivia-q">
                        {answer}
                    </button>
                ))}</p>
                
                <button onClick={() => this.handleNext()}>Next</button>
            </div>
        )
    }

    render() {
        return this.questions.length === 0 ? (
            <Results 
                category={this.question.category}
                users={this.props.users}
                group={this.props.group}
            />
            ) : (
                this.afterMounted(this.questions)
            )
    }
}

export default Question