import React, { Component } from 'react';

class Stopwatch extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      running: false,
	    };
	  }

	  onStop = () => {
			this.setState({ running: false });
		}
		onStart = () => {
			this.setState({ running: true });
		}
		onReset = () => {

		}
	  
	render () {
		return(
			<div className="stopwatch">
				<h2>Stopwatch</h2>
				<div className="stopwatch-time">0</div>
				{ this.state.running ?
				  <button onClick={this.onStop}>Stop</button>
				  :
				  <button onClick={this.onStart}>Start</button>
				 }
				<button onClick={this.onReset}>Reset</button>
			</div>
		)
	}
}

export default Stopwatch