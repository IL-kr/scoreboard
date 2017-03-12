import React, { Component } from 'react';


class Counter extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	score: 0,
	    };
  	}

	propTypes: {}
	

	render () {
		return (
			<div className="counter">
	          <button className="counter-action decrement">-</button>
	          <div className="counter-score">{this.state.score}</div>
	          <button className="counter-action decrement">-</button>
	        </div>
		);
	}
}


export default Counter;