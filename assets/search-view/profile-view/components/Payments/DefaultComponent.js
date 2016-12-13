import React, { Component } from 'react';

import '../../../../node_modules/elemental/less/elemental.less';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'elemental';

class DefaultComponent extends Component
{
	handleFocus( e ){
		e.preventDefault();
		e.stopPropagation();
	}
  	render(){
    return(
    <div>
        <Modal isOpen={this.props.modalIsOpen} onClick={this.props.toggleModal} backdropClosesModal onClick = {this.handleFocus.bind(this)}>
          <ModalHeader text="Janta Recommendation Service"/>
            <ModalBody>
               Thank you for <strong>recommending {this.props.surname}</strong>. For the linking service, Janta 
               would be charging a standard fee of <strong>Ksh. 200</strong>, this ensures that the client is notified and 
              given the appropriate information with regard to the type of work they are being requested for.
              <p>
              <strong>The payment options we offer are:</strong><br /><br />
                <Button type="primary" name = "mpesa" onClick = {this.props.ButtonClick}>MPESA</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;<Button type="success" name = "paypal" onClick = {this.props.ButtonClick}>PAYPAL</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;<Button type="warning" name = "visa" onClick = {this.props.ButtonClick}>VISA</Button> 
                &nbsp;&nbsp;&nbsp;&nbsp;<Button type="danger" name = "mastercard" onClick = {this.props.ButtonClick}>MASTERCARD</Button> 
              </p>
            </ModalBody>
              <ModalFooter>
                <Button type="primary" onClick={this.props.toggleModal}>Close modal</Button>
              </ModalFooter>
        </Modal>
    </div>
    )
  }
}

export default DefaultComponent;