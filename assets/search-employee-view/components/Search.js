import React, { Component } from 'react';
import { Link, Match } from 'react-router';

import TopActionComponent from './TopActionComponent';
import ResultTable from './ResultTable';
import SearchBar from './SearchBar';
import NoSearchResult from './NoSearchResult';
import PostJobComponent from './PostJobComponent';



class Search extends Component{

	constructor( context, props ){
		super( context, props );

		this.state = {
			data: [], 
			search_term: ""
		}
	}
	componentWillMount(){
		this.props.State.Actions.pullAccountUserData();
		this.props.State.Actions.pullSpecificJobs();
		this.props.State.Actions.pullJobs();
		this.props.State.Actions.getEmployeeBids();
		this.props.State.Actions.getMyMessages();
		this.props.State.Actions.getMySentMessages();
	}
	render() {
		var checker = ( this.props.data.length !== 0 && !this.props.data.hasOwnProperty('message') ) ? 
		<ResultTable data = {this.props.data} State = {this.props.State} /> : (this.props.suggestions.length !== 0 ) ? <NoSearchResult data = {this.props.suggestions} searchAction = {this.props.searchAction}/> : ""; // checks if the array is empty
		
		var availableJobs = ( this.props.State.JobsAvailable.length !== 0 ) ? <ResultTable data = {this.props.State.JobsAvailable} State = {this.props.State} /> : <div>No Jobs With Regards To Your Profession Are Available At This Time</div>;
		return (			
				<div className="mdl-cell mdl-cell--12-col" >
					<section className="content with-container">
            			<TopActionComponent State = {this.props.State} AccountUser = {this.props.AccountUser} /><br />
					</section>
					<section className=	"content with-container" >
						<div id="new-items">
							<div className="row">
								<div className="column l-3-4 recommendations">
									<SearchBar searchAction = {this.props.searchAction}/>
									{checker}
								</div>
								{(this.props.data.length === 0 ) ? availableJobs : ""}
							</div>
						</div>	
					</section>
				</div>	
		);
	}
}

export default Search;
