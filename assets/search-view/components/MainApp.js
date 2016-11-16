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
	changeAppMode(newMode, jobId){
		this.setState ({currentMode: newMode});
		if(jobId !== undefined) 
		{
			this.setState ({jobId: jobId});
		}
	}
	render(){

		var modeComponent = <Search 
		changeAppMode={this.changeAppMode.bind(this)} 
		searchAction = {this.props.Actions.search}
		data = {this.props.search_results}
		/>;

		switch(this.state.currentMode) 
		{
			case 'search':
				break;
			case 'jobPosting':
				modeComponent = <PostJobComponent changeAppMode={this.changeAppMode.bind(this)}/>;
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