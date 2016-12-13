import React, { Component } from 'react';

import '../../../../node_modules/elemental/less/elemental.less';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'elemental';

class MPesaComponent extends Component{
	handleSubmit(e){
		e.preventDefault();
		e.stopPropagation();
		let MPESAcode = this.refs.code.value;
		console.log( MPESAcode );
	}
	handleFocus( e ){
		e.preventDefault();
		e.stopPropagation();
	}
	render(){
		return(
		<Modal isOpen={this.props.modalIsOpen} onClick={this.props.toggleModal} backdropClosesModal>
	          <ModalHeader text="Janta Recommendation Service" />
	            <ModalBody>
	               <h4>Follow Steps Below</h4>
	               <ol>
	               		<li>Go to the MPESA Menu</li>
	               		<li>Select LIPA NA MPESA</li>
	               		<li>SELECT PAYBILL</li>
	               		<li>The Janta PayBill Number is <strong>755755</strong></li>
	               		<li>Enter the amount of Money stipulated for the service <strong>Kshs. 200</strong></li>
	               		<li>Wait for MPESA to reply</li>
	               		<li>Enter the Transaction Code sent by MPESA into the field below</li>
	               </ol>
	       			<form onSubmit = {this.handleSubmit.bind(this)} onClick = {this.handleFocus.bind(this)}>
						   Enter MPESA Code&nbsp;&nbsp;&nbsp;<input type="text" id="MPESAcode" ref = "code" onFocus = {this.handleFocus.bind(this)}/>&nbsp;&nbsp;&nbsp;
	       				 <button onClick = {this.handleSubmit.bind(this)} className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Send</button> 
	       			</form> 
	            </ModalBody>
	              <ModalFooter>
	                <Button type="primary" onClick={this.props.toggleModal}>Close modal</Button>
	              </ModalFooter>
        </Modal>
		)
	}
}

export default MPesaComponent;