import React, { Component } from 'react';

import EmailComponent from './EmailComponent';


class MessageComponent extends Component{
  render() {
    return (
              <div className="card" id="profile-followers">
                <header className="followers-header">
                  <h2>Message Pane</h2>
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