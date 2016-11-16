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
		var checker = ( this.props.data.length !== 0 && !this.props.data.hasOwnProperty('message') ) ? 
		<ResultTable data = {this.props.data}/> : (this.props.data.length !== 0 ) ? <NoSearchResult data = {this.props.data}/> : ""; // checks if the array is empty
		return (
			<div>
            	<TopActionComponent changeAppMode = {this.props.changeAppMode.bind(this)} /><br /><br /><br /><br />
				<SearchBar search = {this.handleSearch.bind(this)} searchAction = {this.props.searchAction}/><br /><br />
				{checker}
			</div>
		);
	}
}

export default Search;