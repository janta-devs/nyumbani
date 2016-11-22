import React, { Component } from 'react';
import ButtonList from './ButtonList';



class RightNav extends Component {
	render () {
		return (
            <nav className="mdl-navigation mdl-layout--large-screen-only">
            	<a className="mdl-navigation__link" href="">
            		Notifications <i className="material-icons">notifications</i>
            	</a>
            	<a className="mdl-navigation__link" href="">
            		Messages <i className="material-icons">message</i>
            	</a>
                <button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--icon">
                	<img className="demo-avatar" src="/nyumbani/photo_assets/anony.jpg" /> 
                </button>
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
            </nav>
        );
	}
}
export default RightNav;