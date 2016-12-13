import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

//importint the components for the chat view

import BasicDetails from '../MessageViewComponent/BasicDetails';
import MessageComponent from '../MessageViewComponent/MessageComponent';


function mapStateToProps( state ){				
	return {
		Messages: state.Messages,
		SentMessages: state.SentMessages,
		AccountUser: state.AccountUser 
	};								
}

function mapDispatchToProps(dispatch){ 			
	return{
		Actions: bindActionCreators( Actions, dispatch )
	}
}

class MessageView extends Component{
	constructor( context, props ){
		super( context, props );

		var messages = [];
		messages = this.props.Messages.concat(this.props.SentMessages);
		var message_index = this.props.params.id;
		// this.message_content = messages.filter(( value, index ) => {
		//  	return ( value.id === message_id ) ? messages[index] : false;
		//  });
		this.message_content = this.props.Messages[ message_index ];
	} 
	componentWillUpdate(){
		this.props.Actions.getMySentMessages();
		this.props.Actions.getMyMessages();
	}
	render(){
		return(
		<div>
			<div className="with-container content">
	                <div className="column d-4-3 m-10-12 s-1-1 xs-1-1">
	                	<BasicDetails message = {this.message_content}/>
						<MessageComponent message = {this.message_content} state = {this.props}/>
					</div>
			</div>
		</div>
		)	
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageView);