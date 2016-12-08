import React, { Component } from 'react';

import Search from './Search';
import PostJobComponent from './PostJobComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';


const MainApp  = (props) => {

	return(<Search State = {props} searchAction = {props.Actions.searchJobs} data = {props.search_results}
		suggestions = {props.suggestions}/>);
}

function mapStateToProps( state ){				
	return{
		AccountUser: state.AccountUser,
		Bids: state.Bids,
		Jobs: state.Jobs,
		Categories: state.Categories,
		search_results: state.search_results,
		suggestions: state.suggestions,
		routing: state.routing,
		Messages: state.Messages,
		SentMessages: state.SentMessages
	}								
}

function mapDispatchToProps(dispatch){ 			//this function makes it that we do not have to call the dispatch method each time
	return{
		Actions: bindActionCreators( Actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);