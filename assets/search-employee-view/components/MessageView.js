import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

//importint the components for the chat view

import BasicDetails from '../MessageViewComponent/BasicDetails';

import EmailComponent from '../MessageViewComponent/EmailComponent';

import MessageComponent from '../MessageViewComponent/MessageComponent';

import ProfileSummary from '../MessageViewComponent/ProfileSummary';



function mapStateToProps( state ){				
	return {
		Messages: state.Messages,
		SentMessages: state.SentMessages 
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
		var message_id = this.props.params.id;
		var message_content = messages.filter(( value, index ) => {
		 	return ( value.id === message_id ) ? messages[index] : false;
		 });
		console.log( message_content )

	} 
	componentWillUpdate(){
		this.props.Actions.getMySentMessages();
		this.props.Actions.getMyMessages();
	}
	render(){
		return(
		<div>
			<ProfileSummary />
			<div className="with-container content">
	                <div className="column d-1-3 m-5-12 s-1-1 xs-1-1">
						<MessageComponent/>
					</div>
					<div className="column d-2-3 m-7-12 s-1-1 xs-1-1">
						<BasicDetails/>
					</div>
			</div>
		</div>
		)	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageView);