import React from 'react';

import Stats from './Stats';

const Header = (props) => {
	return (
		<div className="header">
			<Stats players={props.players}/>
        	<h1>{props.title}</h1>
      	</div>
	);
}


Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

export default Header