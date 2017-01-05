import React, { Component } from 'react';
import $ from 'jquery';


import TabComponent from './TabComponent';

class ProfileComponent extends Component{

	populateProfile(method, data ){
		$.ajax({
			url: '/nyumbani/index.php/profile/'+method,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function( res ) {
			console.log( res );
		});
	}
	handleNext( e ){
		// e.preventDefault();
		// e.stopPropagation();
		// var el = e.target, elName = $(el).attr('name'), tabs = this.refs.list, linkName = '#'+elName;
		// var link = $(tabs).find('li.active').next().addClass('active').find('a[data-toggle=tab]');

		// $(link[0]).click();
	}	
	render() {
		return (
			<div>
				<ul className="nav nav-tabs" ref = "list">
				  <li className="active"><a data-toggle="tab" href="#basic">Personal Information</a></li>
				</ul>
				<TabComponent handleNext = {this.handleNext.bind(this)} populateProfile = {this.populateProfile.bind(this)}/>
			</div>
		);
	}
};

export default ProfileComponent;