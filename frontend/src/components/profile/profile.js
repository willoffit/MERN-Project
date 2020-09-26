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
        this.handleJoin = this.handleJoin.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchGroups();
        this.props.fetchGames();
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
      if (this.props.user.inProgress) {
        return (<button className="profile-page-join" onClick={() => this.handleJoin()}>
          Join Game
        </button>)
      } else {
        return (<button className="profile-page-start" onClick={() => this.gameStart()}>
          Start Game
        </button>)
      }
    }

    handleJoin() {
      let group = this.props.groups[this.props.user.group];
      let game = this.props.games[group.game];

      this.props.fetchGame(group.game)
        .then(action => this.props.receiveQuestions(action.game.questions))
        .then(() => this.props.history.push("/question"))
    }

    render() {
        if (Object.values(this.props.users).length === 0) return null;
        if (Object.values(this.props.groups).length === 0) return null;
        if (Object.values(this.props.games).length === 0) return null;
        if (!this.props.user) return null;
        
        let user = this.props.user;
        let scores = user.scores;
        let group = !user.group ? { members: [] } : this.props.groups[user.group];
        let game = !group ? "" : this.props.games[group.game];
        let category = !game ? "" : game.category;
        let prev_scores = scores[category];
        let prev_score = !prev_scores ? "" : prev_scores[prev_scores.length - 1];

        return (
          <div className="profile-page">
            <div className="profile-page-header1">WILK TRIVIA</div>
            <div className="profile-page-header2">{user.username}'s Profile Page</div>

            <div className="profile-page-stats">
              <div className="career-stats-section">Career Stats
                <div className="career-stats">

                  <div className="average-scores-stats">
                    <div className="average-scores-stats-title">Average Scores by Category:</div>

                    {this.turnToIterable(scores).map((score) => (
                      <div>{score[0]}: {Math.round(this.averageScore(score[1]))}</div>
                    ))}
                  </div>
                  
                  <div className="highest-scores-stats">
                    <div className="highest-scores-stats-title">Highest Scores by Category:</div>

                    {this.turnToIterable(scores).map((score) => (
                      <div>{score[0]}: {this.highestScore(score[1])}</div>
                    ))}
                  </div>
                  
                  <div className="best-most-played-stats">
                    <div className="best-most-played-stats-title">Best Category:</div>
                    <div className="best-most-played-stats-divide">{this.strongestCategory()}</div>

                    <div className="best-most-played-stats-title">Most Played Category:</div>
                    <div>{this.mostPlayedCategory()}</div>
                  </div>

                </div>
              </div>
              
              <div className="previous-game-stats-section">Previous Game Stats
                
                
                <div className="previous-game-stats">
                 
                  <div className="previous-game-stats1">
                    <div className="previous-game-stats-cat-out">
                      <div className="previous-game-stats-cat">Category: </div>
                      <div className="previous-game-stats-cat2">{category}</div>
                    </div>
                    
                    <div className="previous-game-stats-score-out">
                      <div className="previous-game-stats-score">Score: </div>
                      <div className="previous-game-stats-score2">{prev_score}</div>
                    </div>

                    <div className="previous-game-stats-opp">Opponents:</div>
                    {group.members.map(userId => {
                      let opp = this.props.users[userId];
                      let res = opp.inProgress || category === "" ? ("GAME IN PROGRESS"
                      ) : (
                        opp.scores[category][opp.scores[category].length - 1])
                        
                      if (group.members.length === 1) return <div>SOLO GAME</div>
                      return (
                        <div>{opp.username}: {res}</div>
                      )
                    })}
                  </div>
                </div>

                <div className="previous-game-stats2">
                  {this.renderGameBtn()}

                  <button className="profile-page-logout" onClick={() => this.props.logout()}>
                    Log Out
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
    }
}

export default Profile;