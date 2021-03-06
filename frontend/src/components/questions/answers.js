import React from 'react';
import './questions.css';

class Answer extends React.Component {
    constructor(props) {
        super(props);

        this.total = 0;
        this.user = this.props.user;

        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleCorrect = this.handleCorrect.bind(this);
        this.handleIncorrect = this.handleIncorrect.bind(this);
        this.awardPoints = this.awardPoints.bind(this);
        this.deductPoints = this.deductPoints.bind(this);
        this.finalTotal = this.finalTotal.bind(this);
    }

    componentWillUnmount() {
        this.props.editUser(this.user);
    }

    checkAnswer() {
        let result;
        
        if (
            this.props.userAns === this.props.answers.indexOf(this.props.correctAns)
            ) {
                result = this.handleCorrect();
            } else {
                result = this.handleIncorrect();
            }

        if (this.props.questions.length === 0) this.finalTotal();

        return result;
    }

    handleCorrect() {
        this.awardPoints();
        return (
            <div className="answers-two">
                <div>YOU ARE RIGHT!</div>
                <div>Total Points: {this.total}</div>
                <div className="answers-last-div">
                    Correct Answer: {this.props.decodeString(this.props.correctAns)}
                </div>
            </div>
        );
    }

    handleIncorrect() {
        this.deductPoints();
        return (
            <div className="answers-two">
                <div>YOU ARE BAD AT THIS!</div>
                <div>Total Points: {this.total}</div>
                <div className="answers-last-div">
                    Correct Answer: {this.props.decodeString(this.props.correctAns)}
                </div>
            </div>
        );
    }

    update(pts) {
        this.total += pts;
    }

    awardPoints() {
        let points;

        switch (this.props.difficulty) {
            case "easy":
                points = 200;
                break;
            case "medium":
                points = 400;
                break;
            case "hard":
                points = 600;
                break;
            default:
                break;
        }

        this.update(points);
    }

    deductPoints() {
        this.update(-100);
    }

    finalTotal() {
        let user = this.user;
        user.scores[this.props.category].push(this.total);
    }

    render() {
        return this.props.userAns === -1 ? null : <div className="answer-footer">{this.checkAnswer()}</div>;
    }
}

export default Answer;
