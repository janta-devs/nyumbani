
import React, { Component } from 'react';
import AvatarDropDown from './AvatarDropDown';
import DrawerNavMenu from './DrawerNavMenu';



class DrawerNav extends Component {
	render () {
		return (
			<div className="mdl-layout__drawer md-48 mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 ">
        		<header className="demo-drawer-header">
          			<img src="/nyumbani/photo_assets/anony.jpg" className="demo-avatar" />
          			<AvatarDropDown />
        		</header>
        		<DrawerNavMenu />
      		</div>
			);
	}
}
export default DrawerNav;