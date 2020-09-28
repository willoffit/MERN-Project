import React from 'react';
import Answer from "./answers";
// import { Link } from 'react-router-dom';
import Results from '../results/results';
import './questions.css';

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = { userChoice: -1, done: false, numQuestions: 1 };

        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.handleNext = this.handleNext.bind(this);

        this.group = this.props.group;
        this.category = this.props.games[this.group.game].category;

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

    grabEntities() {
        // go through and find Entities, keep track of indexes
        // swap out Entity with helper function results
    }

    handleEntities(entity) {
        // convert Entity to its equivalent
        // return equivalent value
        
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

        
        if (this.questions.length === 0) {
            this.question = "";
        } else {
            this.question = this.questions.pop()
            this.answers = this.shuffle([
                this.question.correct_answer,
                ...this.question.incorrect_answers,
            ]);
        }

        this.state.numQuestions = this.state.numQuestions + 1;

        this.setState({ userChoice: -1, done: true });
    }

    decodeString(str) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = str;
        return textArea.value;
    }

    afterMounted() {
        let klass = "correct";

        return (
            <div className="questions">
                <p className="questions-category">
                    <div>
                        Category:
                </div>
                    <div className="questions-category-selected">
                        {this.category}
                    </div>
                </p>

                <p className="questions-question">
                    <div>
                        Question {this.state.numQuestions} / 10:
                    </div>
                    <div className="questions-question-selected">
                        {this.decodeString(this.question.question)}
                    </div>
                </p>
                <p className="questions-answer">{this.answers.map((answer, idx) => (
                    <button 
                    id={`btn-${idx}`}
                    key={`answer-${idx}`}
                    type="radio"
                    value={idx}
                    onClick={this.handleUserSelect}
                    className="trivia-q">
                        {this.decodeString(answer)}
                    </button>
                ))}</p>
                <div className="questions-footer">
                    <Answer
                        questions={this.questions} 
                        answers={this.answers}
                        userAns={this.state.userChoice}
                        correctAns={this.question.correct_answer}
                        incorrectAns={this.question.incorrect_answers}
                        difficulty={this.question.difficulty}
                        category={this.category}
                        user={this.props.user}
                        editUser={this.props.editUser}
                        decodeString={this.decodeString}
                    />
                    
                    <button className="next-button" onClick={() => this.handleNext()}>Next <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        )
    }

    render() {
        return this.question === "" ? (
            <Results
                category={this.category}
                users={this.props.users}
                user={this.props.user}
                group={this.group}
                fetchUsers={this.props.fetchUsers}
                updateUser={this.props.editUser}
            />
            ) : (
                this.afterMounted(this.questions)
            )
    }
}

export default Question