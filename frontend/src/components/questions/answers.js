import React from 'react';

class Answer extends React.Component {
    constructor(props) {
        super(props);

        this.total = 0;

        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleCorrect = this.handleCorrect.bind(this);
        this.handleIncorrect = this.handleIncorrect.bind(this);
        this.awardPoints = this.awardPoints.bind(this);
        this.deductPoints = this.deductPoints.bind(this);
        this.finalTotal = this.finalTotal.bind(this);
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

        if (this.props.questions.length === 1) this.finalTotal();

        return result;
    }

    handleCorrect() {
        this.awardPoints();
        return (
          <div>
            <h1>YOU ARE RIGHT!</h1>
            <p>Points: {this.total}</p>
            <p>Correct Answer: {this.props.correctAns}</p>
          </div>
        );
    }

    handleIncorrect() {
        this.deductPoints();
        return (
          <div>
            <h1>
              YOU SUCK! YOU ARE BAD AT THIS!
            </h1>
            <p>Points: {this.total}</p>
            <p>Correct Answer: {this.props.correctAns}</p>
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
        let user = this.props.user;

        user.scores[this.props.category].push(this.total);
        this.props.editUser(user);
    }

    render() {
        return this.props.userAns === -1 ? null : <div>{this.checkAnswer()}</div>;
    }
}

export default Answer;