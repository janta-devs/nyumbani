import React, { Component } from 'react';

import Search from './Search';
import PostJobComponent from './PostJobComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';


const MainApp  = (props) => {
	props.Actions.pullCategories();
	return(<Search State = {props} searchAction = {props.Actions.search} data = {props.search_results}
		suggestions = {props.suggestions}/>);
}

function mapStateToProps( state ){				// passes the state object to the APP component 
	return state;								//taking the entire state
}

function mapDispatchToProps(dispatch){ 			//this function makes it that we do not have to call the dispatch method each time
	return{
		Actions: bindActionCreators( Actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);