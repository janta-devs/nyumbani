import React, { Component } from 'react';
import DynamicFieldsSkills from './DynamicFieldsSkills';

import SuccessAlert from './SuccessAlert';
import DangerAlert from './DangerAlert';
import InformationAlert from './InformationAlert';

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
			this.props.populateProfile( method, dataCollection_skill );	
		}
		else{
			this.setState({alert: false});
		}
		

		//console.log( dataCollection_skill );
	}
	render () {
		return (
				<div className="tab-pane" id="skills" role="tabpanel">
				{(this.state.alert === true) ? <SuccessAlert /> : (this.state.alert === 'default') ? <InformationAlert /> : <DangerAlert />}
					<div className="col-md-8">
						<DynamicFieldsSkills getValue = {this.getValue.bind(this)}/><br /><br /><br />


							<div className="col-md-8">
								<button className="btn btn-info pull-left" onClick={this.onSave.bind(this)}>Save</button>
								<button className="btn btn-warning pull-right" onClick = {this.props.handleNext} name = "skills">Next</button>
							</div>
							</div>
					</div>
		);
	}
};

export default SkillsComponent;