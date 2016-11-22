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
    constructor( context, props ){
      super( context, props );

      this.state = {
        ComponentState: {}
      }
    }
    componentDidMount(){
      const selected_employee = this.props.routing.routeParams;
      this.props.store.dispatch(this.props.Actions.pullEmployeeData( selected_employee.id ));
    }
    componentWillUpdate(nextProps, nextState){
      let stateNow = nextProps.store.getState();

      console.log( stateNow )
      // this.setState({ComponentState: stateNow });


      // console.log( this.state );
    }
    render(){
        return(
            <div>
              <BackComponent />
              <ProfileSummary data = {this.state.ComponentState}/>
              <div className="with-container content">
                <div className="row">
                  <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
                    <ProfileInterests />
                    <ProfileInterestedEmployers/>
                    <ProfileInterestedIn />
                  </div>
                  <div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
                      
                    <BasicDetails/>
                    <ContactDetails/>
                    <Skills />
                    <ProfessionalExperience/>
                    <EducationBackground/>
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