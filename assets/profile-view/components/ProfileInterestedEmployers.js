import React, { Component } from 'react';

import InterestedEmployersList from './InterestedEmployersList';


class ProfileInterestedEmployers extends Component{
  render() {
    return (
              <div className="card" id="profile-followers">
                <header className="followers-header">
                  <h2>Interested Employers (26)</h2>
                </header>
                <section className="followers-content">
                        <div className="follower-list with-small-images">
                        <InterestedEmployersList />
                        </div>
                        <button href="#" id="followers-network" className="mdl-button mdl-js-button mdl-js-ripple-effect"><span>Explore network <i className="material-icons">keyboard_arrow_right</i></span></button>
                </section>
              </div>
    );
  }
};