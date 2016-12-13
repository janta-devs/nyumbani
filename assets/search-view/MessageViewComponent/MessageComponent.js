import React, { Component } from 'react';

import EmailComponent from './EmailComponent';


class MessageComponent extends Component{
  constructor(context, props){
    super(context, props);
    var message_db_id = this.props.message.id;
    var message_id = this.props.state.params.id;
    this.props.state.Actions.MarkMessageAsRead( message_db_id, message_id );
  }
  render() {
    return (
              <div className="card" id="profile-followers">
                <header className="followers-header">
                  <h2>Reply</h2>
                </header>
                <section className="followers-content">
                    <div className="follower-list with-small-images">
                       <EmailComponent data = {this.props}/>
                    </div>
                </section>
              </div>
    );
  }
}

export default MessageComponent;