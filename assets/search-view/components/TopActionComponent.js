import React, { Component } from 'react';
import { Link } from 'react-router';

class TopActionComponent extends Component{

	render() {
		if(this.props.State.AccountUser.hasOwnProperty('login_id')){
			var firstname = this.props.State.AccountUser.fname;
			var lastname = this.props.State.AccountUser.lname;
		}
		return (
			<div>
			Welcome {firstname} {lastname}!
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