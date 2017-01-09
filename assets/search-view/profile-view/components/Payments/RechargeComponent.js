import React, { Component } from 'react';

import '../../../../node_modules/elemental/less/elemental.less';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'elemental';

class RechargeComponent extends Component
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
               The buttons below indicate the services through which one can recharge their account. Please choose the option that
               you feel comfortable with and follow the outlined steps.<br /><br /><br />
               <strong>**Disclaimer**</strong><br/><br />
               Ensure that you keep your private information safe so as to negate the possibility of anyone hijacking and misusing<br /><br />
               <strong>Yours Truly</strong><br />
               ~ Janta Team
              <p>
              <strong>The payment options we offer are:</strong><br /><br /><br />
                <Button type="primary" name = "mpesa" onClick = {this.props.ButtonClick}>MPESA</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;<Button type="success" name = "paypal" onClick = {this.props.ButtonClick}>PAYPAL</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;<Button type="warning" name = "visa" onClick = {this.props.ButtonClick}>VISA</Button> 
                &nbsp;&nbsp;&nbsp;&nbsp;<Button type="danger" name = "mastercard" onClick = {this.props.ButtonClick}>MASTERCARD</Button> 
              </p>
            </ModalBody>
              <ModalFooter>
                <Button type="primary" onClick={this.props.toggleModal}>Close Window</Button>
              </ModalFooter>
        </Modal>
    </div>
    )
  }
}

export default RechargeComponent;