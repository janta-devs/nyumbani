import React, { Component } from 'react';


class BackComponent  extends Component{
	handleAppModeChange(){
		console.log( this.props );
		this.props.State.Actions.changeAppMode('search');
	}
	render() {
		return (
		<div>
		   	<a onClick={this.handleAppModeChange.bind(this)}
				className='btn btn-raised btn-info margin-bottom-1em' ref = "back">
				Back to Search
			</a>
		</div>
		);
	}
}

export default BackComponent;