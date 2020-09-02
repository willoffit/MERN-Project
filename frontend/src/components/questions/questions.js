import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormLabel from '@material-ui/core/FormLabel';
// import Button from '@material-ui/core/Button';



class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.questions.pop();

        this.renderAnswers = this.renderAnswers.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleCorrect = this.handleCorrect.bind(this);
        this.handleIncorrect = this.handleIncorrect.bind(this);
    }

    componentDidMount() {
        // this.props.fetchQuestions();
    }

    renderAnswers() {
        let answers = [];
        answers.push(this.state.correct_answer);
        answers.push(...this.state.incorrect_answers);
        return answers;
    }

    checkAnswer(e) {
        e.preventDefault();
        this.setState(this.props.questions.pop());

        if (e.target.value === this.state.correct_answer) {
            return this.handleCorrect();
        } else {
            return this.handleIncorrect();
        }
    }

    handleCorrect() {
        return <h1>YOU ARE RIGHT!</h1>
    }

    handleIncorrect() {
        return <h1>YOU SUCK! YOU ARE BAD AT THIS!</h1>
    }

    render() {
        let answers = this.renderAnswers();
        
        return (
            <div>
                <p>Category: {this.state.category}</p>
                <p>Question: {this.state.question}</p>
                <p>Answers: {answers.map(answer => (
                    <label>{answer}
                        <input 
                            type="radio"
                            value={answer}
                            onClick={this.checkAnswer}
                        />
                    </label>
                ))}</p>
            </div>
        )
    }
}

export default Question