import React from 'react';


class Answer extends React.Component {
    constructor(props) {
        super(props);

        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleCorrect = this.handleCorrect.bind(this);
        this.handleIncorrect = this.handleIncorrect.bind(this);
    }
    
    checkAnswer() {
        if (this.props.userAns === this.props.answers.indexOf(this.props.correctAns)) {
            return this.handleCorrect();
        } else {
            return this.handleIncorrect();
        }
    }

    handleCorrect() {
        return <h1>YOU ARE RIGHT!</h1>;
    }

    handleIncorrect() {
        return <h1>YOU SUCK! YOU ARE BAD AT THIS!</h1>;
    }

    render() {
        return this.props.userAns === -1 ? null : (
            <div>
                {this.checkAnswer()}
            </div>);
    }
}

export default Answer;