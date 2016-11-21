import React, { Component } from 'react';
import { Link } from 'react-router';

class TopActionComponent extends Component{
	// handleAppModeChange(){
	// 	this.props.State.Actions.changeAppMode('jobPosting');
	// }
	render() {
		let AccountUser = this.props.State.AccountUser[0];
		if( typeof(AccountUser) !== 'undefined' ){
			var Firstname = AccountUser.fname;
			var Secondname = AccountUser.lname;
			var profession = AccountUser.profession;
		} 
		return (
			<div>
			Welcome, {Firstname} {Secondname}!
			<div className="col-md-1 col-md-offset-11">
			<li className = 'btn btn-raised btn-lg btn-info'>
				<Link to={`/nyumbani/index.php/home/PostJob`}>Post Job</Link>
			</li>
			</div>	
			</div>
		);
	}
}

export default TopActionComponent;