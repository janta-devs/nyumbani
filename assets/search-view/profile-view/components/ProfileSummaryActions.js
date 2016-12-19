import React, { Component } from 'react';

import DefaultComponent from './Payments/DefaultComponent';
import MPesaComponent from './Payments/MPesaComponent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileSummaryActions  extends Component{
  constructor( context, props ){
    super( context, props );

    this.state = {
      modalIsOpen: false,
      message: 'default'
    };
    
  }
  componentWillMount(){
    ( this.state.modalIsOpen === false ) ? this.setState({ message: 'default'}) : this.state.message;
  }
  componentWillUpdate(){
    ( this.state.modalIsOpen === false ) ? this.setState({ message: 'default'}) : this.state.message;
  }
  toggleModal( e ){
    e.preventDefault();
    e.stopPropagation();
    //toggles the payment view i.e open or closed
    ( this.state.modalIsOpen === true ) ? this.setState({modalIsOpen: false}) : this.setState({modalIsOpen: true});
    //ensuring that the default message view when recommending give user all the payment options
    ( this.state.modalIsOpen === false ) ? this.setState({ message: 'default'}) : this.state.message;
  }
  handleRecommend(){
    var data = {};
    data['employer_login_id'] = this.props.state.AccountUser.login_id;
    data['employee_login_id'] = this.props.userInfo.login_id;

    this.setState({modalIsOpen: true});

    if( data.hasOwnProperty('employee_login_id') && data.hasOwnProperty('employer_login_id')){
      this.props.state.Actions.sendRequest( data );
    }
  }
  ButtonClick( e ){
    e.preventDefault();
    e.stopPropagation();

   // alert(`clicked ${e.target.name}`);

   (this.state.message === 'default') ? this.setState({ message: 'mpesa'}) : this.setState({ message: 'default'});
  }
  render() {
      var defaultView = <DefaultComponent modalIsOpen = {this.state.modalIsOpen} toggleModal = {this.toggleModal.bind(this)} surname = {this.props.userInfo.surname} ButtonClick = {this.ButtonClick.bind(this)}/>
      var mpesaView = <MPesaComponent modalIsOpen = {this.state.modalIsOpen} toggleModal = {this.toggleModal.bind(this)} surname = {this.props.userInfo.surname} ButtonClick = {this.ButtonClick.bind(this)}/>
    return (
                <div className="row">
                  <div className="column d-1-1">
                    <div className="button-group-actions">
                      <div className="button-group">
                        <MuiThemeProvider>
                          <RaisedButton label = {`REQUEST ${this.props.userInfo.surname}`} primary = {true}onTouchTap = {this.handleRecommend.bind(this)}/>
                        </MuiThemeProvider>
                      </div>
                    </div>
                  </div>
                  {(this.state.message === 'default') ? defaultView : mpesaView }
                </div>
      );
  }
}

export default ProfileSummaryActions;