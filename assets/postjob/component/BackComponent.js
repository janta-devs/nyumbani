import React, { Component } from 'react';

class BackComponent  extends Component{
	render() {
		return (
		<div className="mdl-cell mdl-cell--12-col">
		   	<a href = "/nyumbani/index.php/home/timeline/"
				className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' ref = "back">
				Back to Search
			</a>
		</div>
		);
	}
}

export default BackComponent;