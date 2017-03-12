import React from 'react';

// my components
import Header from './Header';
import Player from './Player';

import './../css/App.css';


const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        {props.players.map(player => <Player name={player.name} score={player.score} key={player.id}/>)}
      </div>
    </div>
  )
}

App.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};

App.defaultProps = {
  title: "Scoreboard"
}

export default App;
