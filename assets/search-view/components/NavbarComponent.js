import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

//material-ui elements that are essential for the pop-up menu

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class NavbarComponent extends Component{
    constructor( context, props ){
        super( context, props );

        this.props.Actions.pullAccountUserData();
        this.props.Actions.pullCategories();
        this.props.Actions.pullAllEmployees();
        this.props.Actions.getMyOrders();
        this.props.Actions.getMyMessages();
        this.props.Actions.getMyRequests();

        this.state = {
            open: false
        }
    }
    handleTouchTap( e ){
        e.preventDefault();
        (this.state.open === false ) ? this.setState({ open: true, anchorEl: e.currentTarget }) : this.setState({ open: false });
    }
    handleClose(){
        this.setState({ 
            open: false
        });
    }
    render(){
        const profileStyle = {
            height: '70px',
            minWidth: '60px',
            overFlow: 'hidden'
        };
        const NavBarStyle = {
            position: 'fixed'
        };
        var count = 0;
        if( this.props.Messages.length !== 0 ){
            const arr = this.props.Messages;
            arr.map((value) => {
                return ( value.status === 'unread') ? count = count + 1 : false;
            })
        }
        return(
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" id="nav-bar" style={NavBarStyle}>
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title">
                    <div className="logo-home" >
                    </div>
                  </span>
                    <div className="mdl-layout-spacer">
                    </div>
                    <Link
                        to = {`/nyumbani/index.php/home/timeline/MyOrders/`}
                        className = 'mdl-button ' 
                        >My Orders
                    </Link>
                    <Link
                        to = {`/nyumbani/index.php/home/timeline/Messages/`}
                        className = 'mdl-button ' 
                        >Messages{(count === 0) ? "": <div className="material-icons mdl-badge mdl-badge--overlap" data-badge={count}>notifications</div>}
                    </Link>
                <nav className="mdl-navigation">
                    <button className="mdl-button mdl-js-button mdl-button--icon" style={profileStyle}>
                      <img className="demo-avatar" src={this.props.AccountUser.profile_photo} alt ={this.props.AccountUser.profile_photo} 
                      onClick={this.handleTouchTap.bind(this)}
                      /> 
                    </button>
                        <MuiThemeProvider>
                                <Popover
                                  open={this.state.open}
                                  anchorEl={this.state.anchorEl}
                                  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                  onRequestClose={this.handleClose.bind(this)}
                                >
                                  <Menu>
                                   <MenuItem primaryText="Home" containerElement={<Link to={`/nyumbani/index.php/home/timeline`}/>}/>
                                    <MenuItem primaryText="Wallet" containerElement={<Link to={`/nyumbani/index.php/home/timeline/wallet`}/>}/>
                                    <MenuItem primaryText="Profile"  containerElement={<Link to={`/nyumbani/index.php/home/timeline`}/>}/>
                                    <MenuItem primaryText="Sign out" href="/nyumbani/index.php/home/logout" />
                                  </Menu>
                                </Popover>
                        </MuiThemeProvider>
                </nav>
                </div>
            </header>
    </div>
        )
    }
}

function mapStateToProps( state ){              
    return state;                              
}

function mapDispatchToProps(dispatch){         
    return{
        Actions: bindActionCreators( Actions, dispatch )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);