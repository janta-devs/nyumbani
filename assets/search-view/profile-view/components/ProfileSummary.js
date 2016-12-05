import React, { Component } from 'react';


import ProfileSummaryStats from './ProfileSummaryStats';
import ProfileSummaryActions from './ProfileSummaryActions';
import ProfileSummaryBio from './ProfileSummaryBio';



class ProfileSummary extends Component{
	render(){
    var userInfo = this.props.data;
		return (
        		<div className="headline">
                  <div className="with-container">
                    <div className="card-details" id="profile-details">
                      <section className="bio">
                        <div className="summary card">
                          <div className="row">
                              <ProfileSummaryBio userInfo = {userInfo}/>
                            <div className="column d-1-3 m-1-4 s-1-1 xs-1-1 stats-column">
                              <ProfileSummaryStats userInfo = {userInfo}/>
                              <ProfileSummaryActions userInfo = {userInfo} state = {this.props.state}/>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
			);
	}
}

export default ProfileSummary;