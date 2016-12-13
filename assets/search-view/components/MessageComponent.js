import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

import MessageTable from './MessageTable';
import NavbarComponent from './NavbarComponent';

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
			<div>
			<NavbarComponent />
			<div style ={ContainerStyle}>
				<button onClick = {this.handleClick.bind(this)} name = "employee_messages" className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored' ref = "employee_messages">EMPLOYEE MESSAGES</button>
			</div>
			</div>
		)
	}
}

class MessageComponent extends Component{
	constructor( context, props ){
		super( context, props );
		this.state = {
			default: "employee_messages",
		}
	}
	getState( state ){
		this.setState({ default: state });
	}
	render(){
	if( this.state.default === 'employee_messages' ){
		return(
			<div>
				<Chooser getState = {this.getState.bind(this)}/>
				<br /><br />
				<MessageTable  data = {this.props.Messages}></MessageTable>
			</div>
		)
	}
	// else{
	// 	return(
	// 		<div>
	// 			<Chooser getState = {this.getState.bind(this)}/>
	// 			<br /><br />
	// 			<MessageTable  data = {this.props.SentMessages}></MessageTable>
	// 		</div>
	// 	)
	// }

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);