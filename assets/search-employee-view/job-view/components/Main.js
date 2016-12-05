import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from '../../../DataStore/Store';
import Actions from '../../../DataStore/Actions';

import ProfileSummary from './ProfileSummary';
import ProfileInterests from './ProfileInterests';
import ProfileInterestedEmployers from './ProfileInterestedEmployers';
import ProfileInterestedIn from './ProfileInterestedIn';
import ProfessionalExperience from './ProfessionalExperience';
import EducationBackground from './EducationBackground';
import Skills from './Skills';
import BasicDetails from './BasicDetails';
import ContactDetails from './ContactDetails';

import BackComponent from '../../components/BackComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      var jobs = (this.props.state.Jobs.length === 0 || this.props.state.Jobs.length === undefined ) 
      ? this.getLocalStorage() : this.props.state.Jobs; //checking if the Jobs reducer has data, if it doesn't, it switches to localstorage

      var option = this.props.state.params.option;

      var data = jobs.filter( (value, index) => {
         return (value.order_id === option ) ? jobs[index] : false;
      });
      return data;
    }
    render(){
      //I removed the contact component so as to ensure the employer cannot view the employee's contact information
        return(
            <div>
              <BackComponent />
              <ProfileSummary data = {this.data[0]} state = {this.props}/>
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
function mapStateToProps( state ){       
  return state;               
}
function mapDispatchToProps(dispatch){   
  return{
    Actions: bindActionCreators( Actions, dispatch )
  }
}

class Main extends Component{
  render() {
    return (
      <MainComponent state = {this.props}/>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);;