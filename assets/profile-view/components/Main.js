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

import BackComponent from '../../search-view/components/BackComponent';

class MainComponent  extends Component{
    render(){

      //I am using this in the meantime to ensure that data is flowing
      //I will eventually figure out how to connect the state and actions together 
      //just like in the MainApp js file using the connect function from redux
      
        var state  = this.props.store.getState();
        const SearchResults = state.search_results;

       const selected_employee = this.props.routing.routeParams;

       var data = SearchResults.filter( (userInfo) =>{
          return( userInfo.id === selected_employee.id );
       });

     return(
          <div>
              <BackComponent />
              <ProfileSummary data = {data}/>
              <div className="with-container content">
                <div className="row">
                  <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
                    <ProfileInterests />
                    <ProfileInterestedEmployers/>
                    <ProfileInterestedIn />
                  </div>
                  <div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
                      
                    <BasicDetails/>
                    <ContactDetails data = {data}/>
                    <Skills />
                    <ProfessionalExperience/>
                    <EducationBackground/>
                  </div>
                </div>
              </div>
            </div>
        )
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