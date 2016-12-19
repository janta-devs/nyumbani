import React, { Component } from 'react';
import DynamicFieldsSkills from './DynamicFieldsSkills';

import SuccessAlert from './SuccessAlert';
import DangerAlert from './DangerAlert';
import InformationAlert from './InformationAlert';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';

var dataCollection_skill = {};

class SkillsComponent extends Component{
	constructor( context, props ){
		super( context, props );

		this.state = {
			alert: 'default'
		}
	
	}
	getValue( e ){
		e.preventDefault();
		e.stopPropagation();
		dataCollection_skill[e.target.name] = e.target.value;
	}
	onSave( e ){
		e.preventDefault();
		e.stopPropagation();
		var method = "sendSkillInformation";
		if( dataCollection_skill.hasOwnProperty('skill1') && dataCollection_skill.hasOwnProperty('mode1')){
			this.setState({alert: true});
			// this.props.populateProfile( method, dataCollection_skill );	
			// window.location.href = "/nyumbani/index.php/home/employee_timeline/"; 
			this.props.handleNext();
		}
		else{
			this.setState({alert: false});
		}
	}
	render () {
		return (
				<div className="tab-pane" id="skills" role="tabpanel">
				{(this.state.alert === true) ? <SuccessAlert /> : (this.state.alert === 'default') ? <InformationAlert /> : <DangerAlert />}
					<div className="col-md-8">
						<DynamicFieldsSkills getValue = {this.getValue.bind(this)}/><br /><br /><br />


							<div className="col-md-8">
							      <FlatButton
						            label="Back"
						            disabled={this.props.stepIndex === 0}
						            onTouchTap={this.props.handlePrev}
						            style={{marginRight: 12}}
						            className = "pull-left"
						          />
						          <RaisedButton
						            label={this.props.stepIndex === 2 ? 'Finish' : 'Next'}
						            primary={true}
						            onTouchTap={this.onSave.bind(this)}
						            className = "pull-right"
						          />
							</div>
							</div>
					</div>
		);
	}
};

export default SkillsComponent;