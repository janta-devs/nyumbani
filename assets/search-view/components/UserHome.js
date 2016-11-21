import React, { Component } from 'react';
import SuggestedEmployees from './SuggestedEmployees';
import StatusUpdate from './StatusUpdate';
import SearchBar from './SearchBar'
class UserHome extends Component {
	constructor( context, props){
		super(context, props);
	}
	componentWillMount(){

	}
	render () {
		return (
				<section className=	"content with-container">
					<div id="new-items">
						<div className="row">
						<SuggestedEmployees />
						<SearchBar />
						<StatusUpdate />
						</div>
					</div>	
				</section>
		);
	}
}
export default UserHome;
