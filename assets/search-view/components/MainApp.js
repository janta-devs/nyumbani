import React, { Component } from 'react';

import Search from './Search';
import PostJobComponent from './PostJobComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';


class MainApp extends Component
{

	constructor( context, props ){
		super( context, props );

		this.state = {
			currentMode: 'search',
			jobId: null
		}
	}
	componentWillUpdate(nextProps, nextState){

	}
	changeAppMode(newMode){
		this.props.Actions.changeAppMode();
	}
	render(){
		var modeComponent = <Search 
		State = {this.props} 
		searchAction = {this.props.Actions.search}
		data = {this.props.search_results}
		suggestions = {this.props.suggestions}
		/>;

		switch(this.props.currentMode) 
		{
			case 'search':
				break;
			case 'jobPosting':
				modeComponent = <PostJobComponent State = {this.props}/>;
				break;
			default:
				break;
		}
		return modeComponent;
	}

}

function mapStateToProps( state ){	// passes the state object to the APP component 
	return state;	//taking the entire state
}

function mapDispatchToProps(dispatch){ //this function makes it that we do not have to call the dispatch method each time
	return{
		Actions: bindActionCreators( Actions, dispatch )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);