import React, { Component } from 'react';

import Search from './Search';
import NavbarComponent from './NavbarComponent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';


const MainApp  = (props) => {
	const topStyle = {
		top: '10%',
	};
	return(
		<div>
			<NavbarComponent />
				<main className="mdl-layout__container" style={topStyle}>
			      	<div className="mdl-grid">
						<Search State = {props} searchAction = {props.Actions.search} data = {props.search_results}
						suggestions = {props.suggestions}/>
					</div>
				</main>
		</div>
		);
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