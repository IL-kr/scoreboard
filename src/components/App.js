import React, { Component } from 'react';

const nextId = 5;

// my components
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


import './../css/App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers,
    };
  }
  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }
  onPlayerAdd = (name) => {
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId,
    });
    this.setState(this.state);
    nextId += 1;
  }
  onRemovePlayer = (index) => {
    this.state.players.splice(index,1);
    this.setState(this.state);
  }
  render () {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players}/>

        <div className="players">
          {this.state.players.map((player, index) => (
            <Player 
              onScoreChange={delta => this.onScoreChange(index, delta)}
              onRemove={() => {this.onRemovePlayer(index)}}
              name={player.name} 
              score={player.score} 
              key={player.id}/>
            )
          )}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd}/>
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
