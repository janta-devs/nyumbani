import React, { Component } from 'react';

class ProfileSummaryActions  extends Component{
  constructor( context, props ){
      super( context, props );
      this.AccountUser = this.props.state.state.AccountUser;
  }
  handleRecommend(){
    var CurrentOrder = this.props.userInfo;
    this.props.state.state.Actions.AddUserRecommendation(CurrentOrder.order_id,this.AccountUser.login_id,CurrentOrder.login_id );
  }
  render() {
      return (
                <div className="row">
                  <div className="column d-1-1">
                    <div className="button-group-actions">
                      <div className="button-group">
                        <button type="button" data-toggle="popover" data-trigger="hover" data-content="Message" data-placement="top" data-modal="profile-modal-message" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect">
                            <i className="material-icons">message</i>
                        </button>
                        <button type="button" data-toggle="popover" data-trigger="hover" data-content="Recommend" 
                        data-placement="bottom" 
                        className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect" data-state="follow" 
                        data-profile-id="9373ea86-06b3-3a51-90b9-f99cda6577ad" onClick ={this.handleRecommend.bind(this)}>
                          <span><i className="material-icons">thumb_up</i></span>
                        </button>
                        <button type="button" data-toggle="popover" data-trigger="hover" data-content="Show Interest" data-placement="right" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--primary mdl-js-ripple-effect" data-state="follow" data-profile-id="9373ea86-06b3-3a51-90b9-f99cda6577ad"> 
                          <i className="material-icons">remove_red_eye</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
      );
  }
}

export default ProfileSummaryActions;