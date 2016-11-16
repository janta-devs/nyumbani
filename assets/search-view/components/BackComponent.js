import React { Component } from 'react';


class BackComponent  extends Component{
	render() {
		return (
		<div>
		   	<a onClick={() => this.props.changeAppMode('search')}
				className='btn btn-raised btn-info margin-bottom-1em' ref = "back">
				Back to Search
			</a>
		</div>
		);
	}
}

export default BackComponent;