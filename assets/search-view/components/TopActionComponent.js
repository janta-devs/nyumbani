import React, { Component } from 'react';

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