import React, { Component } from 'react';
import './../css/App.css';

const App = (props) => {
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="players">
        <div className="player">
          <div className="player-name">
            William I Olojede
          </div>
  
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <div className="counter-score">23</div>
              <button className="counter-action decrement">-</button>
            </div>
          </div>
        </div>
        <div className="player">
          <div className="player-name">
            Anjola L Adesina
          </div>
  
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <div className="counter-score">35</div>
              <button className="counter-action decrement">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
