import React, { Component } from 'react';
import SearchBarTop from './SearchBarTop';
import RightNav from './RightNav';
import AvatarDropDown from './AvatarDropDown';
import DrawerNavMenu from './DrawerNavMenu';
import Material from 'material-design-lite';


class HeaderComponent extends Component {
    componentDidMount() {
        componentHandler.upgradeDom();
    }
	render () {
		return (
			<div>
	        	<header className="mdl-layout__header">
	            	<div className="mdl-layout__header-row">
	            		<span className="mdl-layout-title">
	            			<div className="logo-home" >
	            			</div>
	            		</span>
	              		<div className="mdl-layout-spacer">
	              		</div>
		            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
		            	<label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
		                  <i className="material-icons">search</i>
		                </label>
		                <div className="mdl-textfield__expandable-holder">
		                  <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
		                </div>
		            </div>
		            <nav className="mdl-navigation">
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
	            	</div>
	        	</header>
	        </div>
		);
	}
    componentDidUpdate() {
        componentHandler.upgradeDom();
    }
}

export default HeaderComponent;