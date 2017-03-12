import React, { Component } from 'react';

// my components
import Header from './Header';
import Player from './Player';

import './../css/App.css';

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      
      <div className="players">
        <Player name="William I. Olojede" score={23}/>
        <Player name="Anjola L. Adesina" score={35}/>
      </div>
    </div>
  )
}

App.propTypes = {
  title: React.PropTypes.string,
};

App.defaultProps = {
  title: "Scoreboard"
}

export default App;
