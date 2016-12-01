import React, { Component } from 'react';


import BasicDetailsComponent from './BasicDetailsComponent';
import EducationBackgroundComponent from './EducationBackgroundComponent';
import SkillsComponent from './SkillsComponent';



class TabComponent extends Component{
	render() {
		return (
				<div className="tab-content">
					<div id="basic" className="tab-pane fade in active" ref = "basic">
					    <BasicDetailsComponent populateProfile = {this.props.populateProfile} handleNext = {this.props.handleNext}/>
					</div>

					<div id="education" className="tab-pane fade" ref = "education">
					    <EducationBackgroundComponent populateProfile = {this.props.populateProfile} handleNext = {this.props.handleNext}/>
					</div>

					<div id="skills" className="tab-pane fade" ref = "skills">
					    <SkillsComponent populateProfile = {this.props.populateProfile} handleNext = {this.props.handleNext}/>
					</div>
				</div>
			
			);
	}
};

export default TabComponent;