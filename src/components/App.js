import React, { Component } from 'react';

// my components
import Header from './Header';
import Player from './Player';

import './../css/App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers,
    };
  }
  onScoreChange = (index, delta) => {
    console.log("onScoreChange", index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  render () {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />

        <div className="players">
          {this.state.players.map((player, index) => (
            <Player 
              onScoreChange={delta => this.onScoreChange(index, delta)}
              name={player.name} 
              score={player.score} 
              key={player.id}/>
            )
          )}
        </div>
      </div>
    );
  }
}



App.propTypes= {
  title: React.PropTypes.string,
  initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};

App.defaultProps = {
  title: "Scoreboard"
};

export default App;
