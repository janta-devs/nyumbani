import React, { Component } from 'react';



class DrawerNavMenu extends Component {
	render () {
		return (
        	<nav className="mdl-navigation">
          		<a className="mdl-navigation__link" href="<?php echo site_url();?>"><i className="material-icons">home</i> Home</a>
          		<a className="mdl-navigation__link" href="<?php echo site_url();?>/timeline/profile/"><i className="material-icons">people</i> My Profile</a>
          		<a className="mdl-navigation__link" href="#"><i className="material-icons">account_balance_wallet</i> Wallet</a>
          		<a className="mdl-navigation__link" href="#"><i className="material-icons">settings</i> Settings</a>
          		<a className="mdl-navigation__link" href="#"><i className="material-icons">notifications</i> Notifications</a>
          		<a className="mdl-navigation__link" href="<?php echo site_url();?>/home/logout"><i className="material-icons">power_settings_new</i> Logout</a>
        	</nav>
		);
	}
}
export default DrawerNavMenu;