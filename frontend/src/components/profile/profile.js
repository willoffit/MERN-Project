import React from 'react';
import './profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.turnToIterable = this.turnToIterable.bind(this);
        this.averageScore = this.averageScore.bind(this);
        this.highestScore = this.highestScore.bind(this);
        this.strongestCategory = this.strongestCategory.bind(this);
        this.mostPlayedCategory = this.mostPlayedCategory.bind(this);
        this.renderGameBtn = this.renderGameBtn.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        // this.props.fetchGroups();
        // this.props.fetchGames();
        // this.props.fetchGame(this.props.game._id);
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

    mostPlayedCategory() {
      let scores = this.props.user.scores;
      let longest = Object.keys(scores)[0];

      for (let category in scores) {
        if (scores[category].length > scores[longest].length) longest = category;
      }

      return longest;
    }

    gameStart() {
        this.props.history.push("/group");
    }

    renderGameBtn() {
      // console.log(this.props.user)
      if (this.props.user.inProgress) {
        return (<button className="profile-link" onClick={() => this.history.push("/question")}>
          Join Game
        </button>)
      } else {
        return (<button className="profile-link" onClick={() => this.gameStart()}>
          Start Game
        </button>)
      }
    }

    render() {
        if (Object.values(this.props.users).length === 0) return null;
        // if (Object.values(this.props.groups).length === 0) return null;
        // if (Object.values(this.props.games).length === 0) return null;

        let user = this.props.user;
        let scores = user.scores;
        // let group = this.props.groups[user.group];
        // let game = this.props.games[group.game];
        // let category = game.category;

        return (
          <div className="profile">

            <div className="splash-page">
              <h1 className="splash-page-header">WILK TRIVIA</h1>
            </div>

            <h1>{user.username}'s Profile Page</h1>

            <div className="stats">
              <div className="previous-game">
                <h3>Previous Game Stats</h3>
                {/* <h4>Category: {category}</h4> */}
              </div>
              
              <div className="career">
                <h3>Career Stats</h3>
                <h4>Average Scores by Category:</h4>
                <ul>
                  {this.turnToIterable(scores).map(score => (
                    <li>
                      {score[0]}: {this.averageScore(score[1])}
                    </li>
                  ))}
                </ul>

                <h4>Highest Scores by Category:</h4>
                <ul>
                  {this.turnToIterable(scores).map(score => (
                    <li>
                      {score[0]}: {this.highestScore(score[1])}
                    </li>
                  ))}
                </ul>

                <h4>Best Category:</h4>
                <li>{this.strongestCategory()}</li>
                <h4>Most Played Category:</h4>
                <li>{this.mostPlayedCategory()}</li>
              </div>
            </div>
            <button className="logout" onClick={() => this.props.logout()}>Log Out</button>
            {this.renderGameBtn()}
          </div>
        );
    }
}

export default Profile;