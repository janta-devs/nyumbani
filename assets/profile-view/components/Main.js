import React, { Component } from 'react';
import { render } from 'react-dom';

import ProfileSummary from './ProfileSummary';
import ProfileInterests from './ProfileInterests';
import ProfileInterestedEmployers from './ProfileInterestedEmployers';
import ProfileInterestedIn from './ProfileInterestedIn';
import ProfessionalExperience from './ProfessionalExperience';
import EducationBackground from './EducationBackground';
import Skills from './Skills';
import BasicDetails from './BasicDetails';
import ContactDetails from './ContactDetails';

import BackComponent from '../../search-view/components/BackComponent';


class Main extends Component{
  componentWillUpdate(nxtProps, nxtState){

  }
  render() {
    return (
                <div>
                  <BackComponent State = {this.props.State}/>
                  <ProfileSummary userInfo = {this.props.userInfo}/>
                  <div className="with-container content">
                    <div className="row">
                      <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
                        <ProfileInterests />
                        <ProfileInterestedEmployers />
                        <ProfileInterestedIn />
                      </div>
                      <div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
                          
                        <BasicDetails userInfo = {this.props.userInfo}/>
                        <ContactDetails userInfo = {this.props.userInfo}/>
                        <Skills />
                        <ProfessionalExperience/>
                        <EducationBackground />

                      </div>
                    </div>
                  </div>
                </div>
    );
  }
}


export default Main;