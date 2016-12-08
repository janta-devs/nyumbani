import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

import MessageTable from './MessageTable';

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

class Chooser extends Component{
	handleClick( e ){
		e.preventDefault();
		e.stopPropagation();

		this.props.getState( e.target.name );
	}
	render(){
		const ContainerStyle = {
			width: '80%',
			margin:'auto',
		};
		const sentMessages = {
			float: 'right',	
		};
		return(
			<div style ={ContainerStyle}>
				<button onClick = {this.handleClick.bind(this)} name = "client_messages" className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored' ref = "client_messages">CLIENT MESSAGES</button>
				<button onClick = {this.handleClick.bind(this)} name = "my_messages" style = {sentMessages}className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect' ref = "my_messages">MY SENT MESSAGES</button>
			</div>
		)
	}
}

class MessageComponent extends Component{
	constructor( context, props ){
		super( context, props );
		this.state = {
			default: "client_messages",
		}
	}
	getState( state ){
		this.setState({ default: state });
	}
	render(){
	if( this.state.default === 'client_messages' ){
		return(
			<div>
				<Chooser getState = {this.getState.bind(this)}/>
				<br /><br />
				<MessageTable  data = {this.props.Messages}></MessageTable>
			</div>
		)
	}
	else{
		return(
			<div>
				<Chooser getState = {this.getState.bind(this)}/>
				<br /><br />
				<MessageTable  data = {this.props.SentMessages}></MessageTable>
			</div>
		)
	}

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);