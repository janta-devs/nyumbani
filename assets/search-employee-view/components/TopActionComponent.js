import React, { Component } from 'react';
import { Link } from 'react-router';

class TopActionComponent extends Component{

	handleClick( e ){
		e.preventDefault();

		console.log('clicked');
		console.log( this )
	}
	render() {

		if(this.props.State.AccountUser.hasOwnProperty('login_id')){
			var firstname = this.props.State.AccountUser.fname;
			var lastname = this.props.State.AccountUser.lname;
		}
		const floatStlye = {
			float: 'right',
		};
		return (
			<div>
				<div className="mdl-cell mdl-cell--12-col">
				Welcome {firstname} {lastname}!	
				</div>
			</div>
			);
	}
}

export default TopActionComponent;