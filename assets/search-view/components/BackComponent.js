import React, { Component } from 'react';
import { Link } from 'react-router';

class BackComponent  extends Component{
	render() {
		return (
		<div>
		   	<Link to={`/nyumbani/index.php/home`}
				className='btn btn-raised btn-info margin-bottom-1em' ref = "back">
				Back to Search
			</Link>
		</div>
		);
	}
}

export default BackComponent;