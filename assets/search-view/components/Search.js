import React, { Component } from 'react';

import TopActionComponent from './TopActionComponent';
import ResultTable from './ResultTable';
import SearchBar from './SearchBar';
import NoSearchResult from './NoSearchResult';

import $ from 'jquery';

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
	handleSearch( e ){
		e.preventDefault();
		e.stopPropagation();

		var n = e.target , $n = $( n ).parent().parent().parent().parent().find('input[type="text"]').val();

		var self = this;
		$.ajax({
			url: '/nyumbani/index.php/Timeline/get',
			type: 'POST',
			dataType: 'json',
			data: 'search_term='+$n,
		})
		.done(function( res ) {
			( !res.hasOwnProperty('message') ) ? self.setState({ data: res }) : self.setState({data: res});
		})
	}
	render() {
		var checker = ( this.state.data.length != 0 && !this.state.data.hasOwnProperty('message')) ? 
		<ResultTable data = {this.state.data}/> : (this.state.data.length != 0 ) ? <NoSearchResult data = {this.state.data}/> : ""; // checks if the array is empty
		return (
			<div>
            	<TopActionComponent changeAppMode = {this.props.changeAppMode.bind(this)} /><br /><br /><br /><br />
				<SearchBar search = {this.handleSearch.bind(this)}/><br /><br />
				{checker}
			</div>
		);
	}
}

export default Search;