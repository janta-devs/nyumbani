import React, { Component } from 'react';
import { Link } from 'react-router';

class TopActionComponent extends Component{

	handleClick( e ){
		e.preventDefault();

		console.log('clicked');
		console.log( this )
	}
	render() {
		const floatStlye = {
			float: 'right',
		};
		return (
			<div>
				<div className="mdl-cell mdl-cell--12-col">
				</div>
			</div>
			);
	}
}

export default TopActionComponent;