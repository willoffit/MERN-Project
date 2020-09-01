import React from 'react';
import './profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.user = this.props.user;
        this.user = {
            id: 2,
            username: "user2",
            email: "g@b.net",
            scores: [
                { category: "sports", score: 2 }, 
                { category: "geography", score: 0 }, 
                { category: "history", score: 3 }
            ]
        }

    }

    componentDidMount() {
        // this.props.fetchUsers();
        // this.props.fetchCategories();
    }

    averageScore(scores) {
        let sum = 0;
        scores.forEach(score => (
            sum += score
        ))

        return sum / (this.user.scores.length * 1.0);
    }

    highestScore() {
        return Math.max(...this.user.scores);
    }

    strongestCategory() {

    }

    render() {
        // let user = {name: 'Ralph', scores: [1, 2, 3]};
        return (
            <div>
                <h1>{this.user.username}'s Profile Page</h1>
                <div>
                    <h3>Previous Game Stats</h3>
                </div>

                <div>
                    <h3>Career Stats</h3>
                    <h4>Average Scores by Category:</h4>
                    <ul>
                        {Object.values(this.user.scores).map(score => (
                            <li>
                                {score.category}: {this.averageScore(Array.from(score.score))}
                            </li>
                        ))}
                    </ul>
                    <h4>Highest Scores by Category:</h4>
                    <ul>
                        {}
                    </ul>

                    <h4>Best Category:</h4>
                </div>
            </div>
        )
    }
}

export default Profile;