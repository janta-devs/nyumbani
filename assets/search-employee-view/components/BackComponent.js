import React, { Component } from 'react';
import { Link } from 'react-router';

class BackComponent  extends Component{
	render() {
		return (
		<div className="mdl-cell mdl-cell--12-col">
		   	<Link to={`/nyumbani/index.php/home`}
				className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' ref = "back">
				Back to Search
			</Link>
		</div>
		);
	}
}

export default BackComponent;