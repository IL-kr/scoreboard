import React from 'react';

const Counter = (props) =>{
	return (
		<div className="counter">
          <button className="counter-action decrement" onClick={() => props.onChange(-1)}>-</button>
          <div className="counter-score">{props.score}</div>
          <button className="counter-action increment" onClick={() => props.onChange(1)}>+</button>
        </div>
	);
}

Counter.propTypes = {
	score: React.PropTypes.number.isRequired,
	onChange: React.PropTypes.func.isRequired,
}


export default Counter;