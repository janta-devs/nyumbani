import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

import MessageTable from './MessageTable';
import NavbarWithOutUpdate from './NavbarWithOutUpdate';

function mapStateToProps( state ){				
	return {
		Messages: state.Messages, 
	};								
}

function mapDispatchToProps(dispatch){ 			
	return{
		Actions: bindActionCreators( Actions, dispatch )
	}
}

class MessageComponent extends Component{
	constructor( context, props ){
		super( context, props );

	}
	render(){
		return(
			<div>
				<NavbarWithOutUpdate />
				<MessageTable  data = {this.props.Messages}></MessageTable>
			</div>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);