import React, { Component } from 'react';


class TopActionComponent extends Component{
	handleAppModeChange(){
		this.props.State.Actions.changeAppMode('jobPosting');
	}
	render() {
		return (
			<div className="col-md-1 col-md-offset-11">
			<a onClick = {this.handleAppModeChange.bind(this)}
				className = 'btn btn-raised btn-lg btn-info' > Post Job
			</a>
			</div>	
		);
	}
}

export default TopActionComponent;