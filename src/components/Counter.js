import React, { Component } from 'react';


class Counter extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	score: this.props.initialScore,
	    };
	    // To make incrementScore work use the line below or es6 => function
	    // this.incrementScore = this.incrementScore.bind(this);
  	}

	propTypes: {
		initialScore: React.PropTypes.number.isRequired,
	}

	incrementScore = () => {
		this.setState({
			// To make incrementScore work use the line below or bind function above
			score: (this.state.score + 1),
		})
	}

	decrementScore = () => {
		if(this.state.score > 0){
			this.setState({
				score: (this.state.score - 1),
			})
		};
		
	}
		
	render () {
		return (
			<div className="counter">
	          <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
	          <div className="counter-score">{this.state.score}</div>
	          <button className="counter-action increment" onClick={this.incrementScore}>+</button>
	        </div>
		);
	}
}


export default Counter;