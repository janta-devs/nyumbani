import React, { Component } from 'react';


class ButtonList extends Component {
	render () {
		return (
			<ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" 
			htmlFor="demo-menu-lower-right">
				<li className="mdl-menu__item">
					<a className="" href="/nyumbani/index.php/">
						<i className="material-icons">home</i> Home
					</a>
				</li>
				<li className="mdl-menu__item">
					<a className="" href="/nyumbani/index.php/timeline/profile/">
						<i className="material-icons">people</i> My Profile
					</a>
				</li>
				<li className="mdl-menu__item">
					<a className="" href="#">
						<i className="material-icons">account_balance_wallet</i> Wallet
					</a>
				</li>
				<li className="mdl-menu__item">
					<a className="" href="#">
						<i className="material-icons">settings</i> Settings
					</a>
				</li>
				<li className="mdl-menu__item">
	                <a className="" href="/nyumbani/index.php/home/logout">
	                	<i className="material-icons">power_settings_new</i> Logout 
	                </a>
                </li>
			</ul>
			);
	}
}
export default ButtonList;