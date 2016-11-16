import React, { Component } from 'react';

import TopActionComponent from './TopActionComponent';
import ResultTable from './ResultTable';
import SearchBar from './SearchBar';
import NoSearchResult from './NoSearchResult';

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

	}
	componentWillUpdate(nxtProp, nxtState ){
		
	}
	render() {
		var checker = ( this.props.data.length !== 0 && !this.props.data.hasOwnProperty('message') ) ? 
		<ResultTable data = {this.props.data} changeAppMode = {this.props.changeAppMode.bind(this)}/> : (this.props.suggestions.length !== 0 ) ? <NoSearchResult data = {this.props.suggestions}/> : ""; // checks if the array is empty
		return (
			<div>
            	<TopActionComponent changeAppMode = {this.props.changeAppMode.bind(this)} /><br /><br /><br /><br />
				<SearchBar searchAction = {this.props.searchAction}/><br /><br />
				{checker}
			</div>
		);
	}
}

export default Search;