import React, { Component } from 'react';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Step,Stepper,StepLabel } from 'material-ui/Stepper';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
 injectTapEventPlugin();

import BasicDetailsComponent from './BasicDetailsComponent';
import EducationBackgroundComponent from './EducationBackgroundComponent';
import SkillsComponent from './SkillsComponent';

class ProfileComponent extends Component{

	constructor(context, props ){
		super(context, props );

		this.state = {
			loading: false,
		    finished: false,
		    stepIndex: 0,
		}
	}
dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    })
  };

handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

 handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
         <BasicDetailsComponent handleNext = {this.handleNext.bind(this)} stepIndex = {this.state.stepIndex}/>
        );
      case 1:
        return (
     		<EducationBackgroundComponent handleNext = {this.handleNext.bind(this)} stepIndex = {this.state.stepIndex}/>
        );
      case 2:
        return (
 			<SkillsComponent handleNext = {this.handleNext.bind(this)} stepIndex = {this.state.stepIndex}/>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }


  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
      </div>
    );
  }
   render() {
    const {loading, stepIndex} = this.state;

    return (
    <MuiThemeProvider>
      <div style={{width: '100%', margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Basic Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Education Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Personal Skills</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    </MuiThemeProvider>
    );
  }
	populateProfile(method, data ){
		$.ajax({
			url: '/nyumbani/index.php/profile/'+method,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function( res ) {
			console.log( res );
		});
	}	
};

export default ProfileComponent;