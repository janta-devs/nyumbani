import React, { Component } from 'react';
import { Link, Match } from 'react-router';

import TopActionComponent from './TopActionComponent';
import SuggestedEmployees from './SuggestedEmployees';
import StatusUpdate from './StatusUpdate';
import ResultTable from './ResultTable';
import SearchBar from './SearchBar';
import NoSearchResult from './NoSearchResult';

import PostJobComponent from './PostJobComponent';

import $ from 'jquery';

//importing 



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
	}
	componentWillUpdate(nxtProp, nxtState ){
		
	}
	render() {
		var checker = ( this.props.data.length !== 0 && !this.props.data.hasOwnProperty('message') ) ? 
		<ResultTable data = {this.props.data} State = {this.props.State} /> : (this.props.suggestions.length !== 0 ) ? <NoSearchResult data = {this.props.suggestions} searchAction = {this.props.searchAction}/> : ""; // checks if the array is empty
		return (			
				<div className="mdl-cell mdl-cell--12-col" >
					<section className="content with-container">
            			<TopActionComponent State = {this.props.State} AccountUser = {this.props.AccountUser} /><br />
					</section>
					<section className=	"content with-container" >
						<div id="new-items">
							<div className="row">
							
								<SuggestedEmployees State = {this.props.State}/>

								<div className="column l-3-4 recommendations">
									<SearchBar searchAction = {this.props.searchAction}/><br /><br />
									{checker}
								</div>
							</div>
						</div>	
					</section>
				</div>	
		);
	}
}

export default Search;
