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
		const floatStlye = {
			float: 'right',
		};
		return (
			<div>
				<div className="mdl-cell mdl-cell--12-col">
				Welcome, {Firstname} {Secondname}!
				<div style={floatStlye} >
					<button className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored'>
						<Link to={`/nyumbani/index.php/home/PostJob`}>Post Job</Link>
					</button>
				</div>	
				</div>
			</div>
		);
	}
}

export default TopActionComponent;