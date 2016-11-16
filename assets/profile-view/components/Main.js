import React, { Component } from 'react';

import ProfileSummary from './ProfileSummary';
import ProfileInterests from './ProfileInterests';
import ProfileInterestedEmployers from './ProfileInterestedEmployers';
import ProfileInterestedIn from './ProfileInterestedIn';
import ProfessionalExperience from './ProfessionalExperience';
import EducationBackground from './EducationBackground';
import Skills from './Skills';
import BasicDetails from './BasicDetails';
import ContactDetails from './ContactDetails';


import { connect } from 'react-redux';

class Main extends Component{
  render() {
    console.log( this.props.userInfo[0] );
    return (
                <div>
                  <ProfileSummary userInfo = {this.props.userInfo[0]}/>
                  <div className="with-container content">
                    <div className="row">
                      <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
                        <ProfileInterests userInfo = {this.props.userInfo[0]}/>
                        <ProfileInterestedEmployers />
                        <ProfileInterestedIn />
                      </div>
                      <div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
                          
                        <BasicDetails userInfo = {this.props.userInfo[0]}/>
                        <ContactDetails userInfo = {this.props.userInfo[0]}/>
                        <Skills />
                        <ProfessionalExperience />
                        <EducationBackground />

                      </div>
                    </div>
                  </div>
                </div>
    );
  }
}


function mapStateToProps( state ){
  return state;
}
export default connect(mapStateToProps)(Main);