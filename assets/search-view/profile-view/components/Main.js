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

import NavbarWithOutUpdate from '../../components/NavbarWithOutUpdate';
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
        var localstore = localStorage.getItem('JantaUniqueEmployeesInformation');
        return JSON.parse(localstore);
      }
      catch(exception)
      {
        return false;
      }
    }
    getUserInformation(){
      var employees = (this.props.state.AllEmployees.length === 0 || this.props.state.AllEmployees.length === undefined ) 
      ? this.getLocalStorage() : this.props.state.AllEmployees;
     
      var id = this.props.state.params.id;
      var data = employees.filter( (value, index) => {
         return (value.login_id === id ) ? employees[index] : false;
      });
      return data;
    }
    render(){
      //I removed the contact component so as to ensure the employer cannot view the employee's contact information
        return(
            <div>
            <NavbarWithOutUpdate />
              <BackComponent />
              <ProfileSummary data = {this.data[0]} state = {this.props.state}/>
              <div className="with-container content">
                <div className="row">
                  <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
                    <ProfileInterests data = {this.data[0]}/>
                    <ProfileInterestedEmployers />
                  </div>
                  <div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
                      
                    <BasicDetails data = {this.data[0]}/>
                    
                    <Skills />
                    <ProfessionalExperience data = {this.data[0]}/>
                    <EducationBackground data = {this.data[0]}/>
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
    console.log( this.props );
    return (
        <MainComponent state = {this.props}/>
    );
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Main);