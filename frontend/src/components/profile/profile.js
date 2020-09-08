import React from 'react';
import './profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.turnToIterable = this.turnToIterable.bind(this);
        this.averageScore = this.averageScore.bind(this);
        this.highestScore = this.highestScore.bind(this);
        this.strongestCategory = this.strongestCategory.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    turnToIterable(scores) {
        let arr = [];

        for (let category in scores) {
            arr.push([category, scores[category]])
        }

        return arr;
    }

    averageScore(scores) {
        let sum = 0;
        scores.forEach(score => (
            sum += score
        ))

        return sum / (scores.length * 1.0);
    }

    highestScore(scores) {
        return Math.max(...scores);
    }

    strongestCategory() {
        let scores = this.props.user.scores;
        let first = Object.values(scores)[0];
        let highest = this.highestScore(first);
        let best = "";

        for (let category in scores) {
            let next = this.highestScore(scores[category])
            if (next >= highest) best = category;
        }

        return best;
    }

    gameStart() {
        this.props.history.push("/group");
    }

    render() {
        if (Object.values(this.props.users).length === 0) return null;

        return (
          <div className="profile">

            <div className="splash-page">
              <h1 className="splash-page-header">WILK TRIVIA</h1>
            </div>

            <h1>{this.props.user.username}'s Profile Page</h1>

            <div className="stats">
              <div className="previous-game">
                <h3>Previous Game Stats</h3>
              </div>
              
              <div className="career">
                <h3>Career Stats</h3>
                <h4>Average Scores by Category:</h4>
                <ul>
                  {this.turnToIterable(this.props.user.scores).map((score) => (
                    <li>
                      {score[0]}: {this.averageScore(score[1])}
                    </li>
                  ))}
                </ul>

                <h4>Highest Scores by Category:</h4>
                <ul>
                  {this.turnToIterable(this.props.user.scores).map((score) => (
                    <li>
                      {score[0]}: {this.highestScore(score[1])}
                    </li>
                  ))}
                </ul>

                <h4>Best Category:</h4>
                <li>{this.strongestCategory()}</li>
              </div>
            </div>
            <button className="logout" onClick={() => this.props.logout()}>Log Out</button>

            <button className="profile-link" onClick={() => this.gameStart()}>
              Start Game
              </button>
          </div>
        );
    }
}

export default Profile;