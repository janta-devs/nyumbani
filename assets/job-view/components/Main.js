import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from '../../DataStore/Store';
import Actions from '../../DataStore/Actions';

import ProfileSummary from './ProfileSummary';
import ProfileInterests from './ProfileInterests';
import ProfileInterestedEmployers from './ProfileInterestedEmployers';
import ProfileInterestedIn from './ProfileInterestedIn';
import ProfessionalExperience from './ProfessionalExperience';
import EducationBackground from './EducationBackground';
import Skills from './Skills';
import BasicDetails from './BasicDetails';
import ContactDetails from './ContactDetails';

import BackComponent from '../../search-employee-view/components/BackComponent';

class MainComponent  extends Component{
    constructor( context, props )
    {
      super( context, props );
      this.state = {
        data: {}
      }
      this.getLocalStorage();
      this.data = this.getUserInformation();
    }
    componentWillMount(){
      this.data = this.getUserInformation();
      this.setState({ data: this.data[0] });
    }
    getLocalStorage(){
      try
      {
        var localstore = localStorage.getItem('JantaUniqueJobs');
        return JSON.parse(localstore);
      }
      catch(exception)
      {
        return false;
      }
    }
    getUserInformation(){
      var jobs = this.getLocalStorage();
      var id = this.props.routing.params.option;
      var data = jobs.filter( (value, index) => {
         return (value.order_id === id ) ? jobs[index] : false;
      });
      return data;
    }
    render(){
      //I removed the contact component so as to ensure the employer cannot view the employee's contact information
        return(
            <div>
              <BackComponent />
              <ProfileSummary data = {this.data[0]}/>
              <div className="with-container content">
                <div className="row">
                  <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
                    <ProfileInterestedEmployers/>
                  </div>
                  <div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
                    <BasicDetails data = {this.data[0]}/>
                  </div>
                </div>
              </div>
            </div>
        );  
    }
}

class Main extends Component{
  componentWillUpdate(nxtProps, nxtState){
      console.log( nxtState );
  }
  render() {
    return (
              <Provider store = {store}>
                <MainComponent store = {store} routing = {this.props} Actions = {Actions}/>
              </Provider>
    );
  }
}


export default Main;