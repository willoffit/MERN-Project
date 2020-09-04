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
        return Math.max(scores);
    }

    strongestCategory() {
        let scores = this.props.user.scores;
        let highest = Object.values(scores)[0];
        let best = "";

        for (let category in scores) {
            if (scores[category] >= highest) best = category;
        }

        return best;
    }

    render() {
        if (Object.values(this.props.users).length === 0) return null;

        return (
          <div className="profile">
            <h1>{this.props.user.username}'s Profile Page</h1>
            
            <h3>Previous Game Stats</h3>
            
            <div>
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
                <li>
                    {this.strongestCategory()}
                </li>
            </div>
          </div>
        );
    }
}

export default Profile;