import React, { Component } from 'react';


class TopActionComponent extends Component{
	render() {
		return (
			<div className="col-md-1 col-md-offset-11">
			<a onClick = {() => this.props.changeAppMode('jobPosting')}
				className = 'btn btn-raised btn-lg btn-info' > Post Job
			</a>
			</div>	
		);
	}
}

export default TopActionComponent;