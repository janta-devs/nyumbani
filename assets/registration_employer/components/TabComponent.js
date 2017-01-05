import React, { Component } from 'react';


import BasicDetailsComponent from './BasicDetailsComponent';

class TabComponent extends Component{
	render() {
		return (
				<div className="tab-content">
					<div id="basic" className="tab-pane fade in active" ref = "basic">
					    <BasicDetailsComponent populateProfile = {this.props.populateProfile} handleNext = {this.props.handleNext}/>
					</div>
				</div>
			
			);
	}
};

export default TabComponent;