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

import $ from 'jquery';

class Navbar extends Component{
    constructor( context, props ){
        super( context, props );
        this.state = {
            open: false
        }
        this.store = this.getLocalStorage();
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
    handleClick( e ){
        e.preventDefault();
        var el = e.target;
        var text = $( el ).text();
    }
    getLocalStorage(){
    try
    {
      var localstore = localStorage.getItem('JantaAccountUser');
      return JSON.parse(localstore);
    }
    catch(exception)
    {
      return false;
    }
  }
    render(){
        const profileStyle = {
            height: '70px',
            minWidth: '60px',
            overFlow: 'hidden'
        };
        const NavBarStyle = {
            position: 'fixed',
            zIndex: '100'
        };
        var count = 0;
        if( this.props.Messages.length !== 0 ){
            const arr = this.props.Messages;
            arr.map((value) => {
                return ( value.status === 'unread') ? count = count + 1 : false;
            })
        }
        return(
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" id="nav-bar">
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
                      <img className="demo-avatar" src={(!this.props.AccountUser) ? this.store.profile_photo : this.props.AccountUser.profile_photo} alt ={this.props.AccountUser.profile_photo} 
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
                                    <MenuItem primaryText="Home" containerElement={<Link to={`/nyumbani/index.php/admin/main/`}/>}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);