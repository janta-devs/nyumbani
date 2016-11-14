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
    return (
                <div>
                  <ProfileSummary />
                  <div className="with-container content">
                    <div className="row">
                      <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
                        <ProfileInterests />
                        <ProfileInterestedEmployers />
                        <ProfileInterestedIn />
                      </div>
                      <div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
                          
                        <BasicDetails />
                        <ContactDetails />
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