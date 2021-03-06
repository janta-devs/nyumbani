import React, { Component } from 'react';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

import { Link } from 'react-router';



class NavbarComponent extends Component{
    constructor( context, props ){
        super( context, props );
        this.AccountUser = this.props.Actions.pullAccountUserData();
        this.props.Actions.getEmployeeBids();
        this.props.Actions.pullAccountUserData();
        this.props.Actions.pullJobs();
        this.props.Actions.getEmployeeBids(); 
        this.props.Actions.getMyMessages();
        this.props.Actions.getMySentMessages();
        this.props.Actions.pullSpecificJobs();
    }
    componentWillUpdate(nextState, nextProps){

    }
    render(){
        const profileStyle = {
            height: '70px',
            minWidth: '60px',
        };
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
                    <strong>Welcome, {this.props.AccountUser.fname} {this.props.AccountUser.lname}!</strong>
                <nav className="mdl-navigation">
                 
                    <button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--icon" style={profileStyle}>
                      <img className="demo-avatar" src={this.props.AccountUser.profile_photo} alt ={this.props.AccountUser.profile_photo}/> 
                    </button>
                        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" 
                        htmlFor="demo-menu-lower-right">
                            <li className="mdl-menu__item">
                                <a className="" href="/nyumbani/index.php/home/employee_timeline/">
                                    <i className="material-icons">home</i> Home
                                </a>
                            </li>
                            <li className="mdl-menu__item">
                                <a className="" href="/nyumbani/index.php/home/employee_timeline/">
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
                                <a className="" href="/nyumbani/index.php/home/logout" id = "logout">
                                    <i className="material-icons">power_settings_new</i> Logout 
                                </a>
                            </li>
                        </ul>
                </nav>
                </div>
            </header>
    </div>
        )
    }
}

function mapStateToProps( state ){              
    return {
        AccountUser: state.AccountUser,
        Bids: state.Bids
    }                              
}

function mapDispatchToProps(dispatch){         
    return{
        Actions: bindActionCreators( Actions, dispatch )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);