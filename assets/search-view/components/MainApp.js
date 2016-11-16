import React, { Component } from 'react';

import Search from './Search';
import PostJobComponent from './PostJobComponent';


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

		var modeComponent = <Search changeAppMode={this.changeAppMode.bind(this)}/>;

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

export default MainApp;