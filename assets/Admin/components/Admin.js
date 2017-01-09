import React, { Component } from 'react';

//Redux-store functions that are important for navigation and data flow through the system

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';


//importing components for the page

import Navbar from './Navbar';

function mapStateToProps( state ){              
    return state;                              
}

function mapDispatchToProps(dispatch){         
    return{
        Actions: bindActionCreators( Actions, dispatch )
    }
}

class Admin extends Component{
	constructor( context, props ){
		super( context, props );

		console.log( this.props );
	}
	render(){
		return(
			<div>
				<Navbar />
				Welcome to the Admin page!!
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);