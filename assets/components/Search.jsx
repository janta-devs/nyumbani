var $ = require('jquery');
var React = require('react');
var TopActionComponent = require('./TopActionComponent.jsx');
var SearchBar = require('./SearchBar.jsx');
var ResultTable = require('./ResultTable.jsx');
var NoSearchResult = require('./NoSearchResult.jsx');

var Search = React.createClass({

	getInitialState: function(){
		return { data: [], search_term: ""}
	},
	componentWillMount: function(){

	},
	componentWillUpdate: function(nxtProp, nxtState ){
		
	},
	handleSearch: function( e ){
		e.preventDefault();
		e.stopPropagation();

		var n = e.target , $n = $( n ).parent().parent().parent().parent().find('input[type="text"]').val();

		var self = this;
		$.ajax({
			url: '/nyumbani/index.php/Timeline/get_jobs',
			type: 'POST',
			dataType: 'json',
			data: 'search_term='+$n,
		})
		.done(function( res ) {
			console.log( res );
			( !res.hasOwnProperty('message') ) ? self.setState({ data: res }) : self.setState({data: res});
		})
	},
	render: function() {
		var checker = ( this.state.data.length != 0 && !this.state.data.hasOwnProperty('message')) ? 
		<ResultTable data = {this.state.data}/> : (this.state.data.length != 0 ) ? <NoSearchResult data = {this.state.data}/> : ""; // checks if the array is empty
		return (
			<div>
            	<TopActionComponent changeAppMode = {this.props.changeAppMode} /><br /><br /><br /><br />
				<SearchBar search = {this.handleSearch}/><br /><br />
				{checker}
			</div>
		);
	}
});

module.exports = Search;