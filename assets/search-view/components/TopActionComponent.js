import React, { Component } from 'react';

class TopActionComponent extends Component{
	render() {
		const floatStlye = {
			float: 'right',
		};
		return (
			<div>
				<div className="mdl-cell mdl-cell--12-col">
				<div style={floatStlye} >
						<a 
						className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored' 
						href="/nyumbani/index.php/PostJob/job">Post Job</a>
				</div>	
				</div>
			</div>
			);
	}
}

export default TopActionComponent;