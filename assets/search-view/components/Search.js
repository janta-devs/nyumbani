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
		this.props.State.Actions.accountUserInformation();
	}
	componentWillUpdate(nxtProp, nxtState ){
		
	}
	render() {
		var checker = ( this.props.data.length !== 0 && !this.props.data.hasOwnProperty('message') ) ? 
		<ResultTable data = {this.props.data} State = {this.props.State} /> : (this.props.suggestions.length !== 0 ) ? <NoSearchResult data = {this.props.suggestions} searchAction = {this.props.searchAction}/> : ""; // checks if the array is empty
		return (
				<section className=	"content with-container">
					<div id="new-items">
						<div className="row">
            				<TopActionComponent State = {this.props.State} AccountUser = {this.props.AccountUser}/><br /><br /><br /><br />
            				<SuggestedEmployees />
							<SearchBar searchAction = {this.props.searchAction}/><br /><br />
							{checker}
							<StatusUpdate />
						</div>
					</div>	
				</section>
		);
	}
}

export default Search;