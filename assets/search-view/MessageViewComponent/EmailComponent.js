import React, { Component } from 'react';
var MessageInfo = {};

const Confirmation = () => {
  return(
    <div>
        Message Sent!
    </div>
  )
}

class Form extends Component{
  takeInput( e ){
    e.preventDefault();
    e.stopPropagation();
    MessageInfo['to_id'] = this.refs.employer_id.value.replace(/Employee ID :/, "").trim();
    MessageInfo['message_title'] = this.refs.title.value;
    MessageInfo['message_body'] = this.refs.message_body.value;
  }
  render(){
    const styleIEButton = {
      lineHeight: '10px',
      padding: '1px 1px 1px 1px',
      textTransform: 'unset',
    };
    const styleChat = {
      height: '200px',
      width: '250px',
      borderRadius: '10px',
      border:'1px solid black',
      padding: '10px 10px 10px 10px',
      marginBottom: '10px'
    };
    const inputWidth = {
      width: '100%',
    };
    const tdWidth = {
      width: '800px',
    };
    return(
    <div className="form-group label-floating">
          <form onSubmit = {this.props.handleSend}>
          <div className="mdl-textfield mdl-js-textfield">
               <input className="mdl-textfield__input" type="text" id="sample1" name = "employer_id" ref = "employer_id" value ={`Employee ID : ${this.props.userLogin}`} readOnly/>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"  style={inputWidth} >
                <input className="mdl-textfield__input" type="text" id="sample1" name = "title" ref = "title" onBlur = {this.takeInput.bind(this)}/>
              <label className="mdl-textfield__label" htmlFor="smaple1">Type Message Title</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"  style={inputWidth} >
                <textarea cols = "200" rows = "4.52" className="mdl-textfield__input" type="text" id="sample1" name = "message_body" ref = "message_body" onBlur = {this.takeInput.bind(this)}/>
              <label className="mdl-textfield__label" htmlFor="smaple1">Message</label>
            </div>
            <button className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Send Message</button>
          </form>
        </div>
    )
  }
}

class EmailComponent extends Component {
  constructor( context, props ){
    super();
    this.state = {
      MessageSent: false
    }
  }
  handleSend( e ){
    e.preventDefault();
    e.stopPropagation();
    MessageInfo['from_id'] = this.props.data.message.to_id;

    if(  MessageInfo.hasOwnProperty('message_title') 
      && MessageInfo.hasOwnProperty('message_body')
      && MessageInfo.hasOwnProperty('to_id'))
    {
      this.setState({MessageSent: true });
      this.props.data.state.Actions.SendMessage( MessageInfo );
    }
    else
    {
      console.log( MessageInfo );
    }
  }
  render(){
    if(this.state.MessageSent === false ){
      return ( 
          <div>
            <Form handleSend = {this.handleSend.bind(this)} userLogin = {this.props.data.message.from_id}/>
          </div>                     
      );
    }
    else
    {
      return <Confirmation />;
    }
    
  }
};

export default EmailComponent;