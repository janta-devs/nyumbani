import React, { Component } from 'react';
import SearchBarTop from './SearchBarTop';
import RightNav from './RightNav';
import AvatarDropDown from './AvatarDropDown';
import DrawerNavMenu from './DrawerNavMenu';


class HeaderComponent extends Component {
    componentDidMount() {
        componentHandler.upgradeDom();
    }
    componentDidUpdate() {
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
	              		<SearchBarTop />
	              		<RightNav />
	            	</div>
	        	</header>
	        </div>
		);
	}
}

export default HeaderComponent;