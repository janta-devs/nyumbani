import React, { Component } from 'react';


class InterestedEmployersList extends Component {
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
    return ( 
      <div>
        <div style={styleChat}>
            Chat Pane
        </div>
        <div className="form-group label-floating">
          <form>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"  style={inputWidth} >
                <input className="mdl-textfield__input" type="text" id="sample1" name = "comment" value={this.props.search_term} ref = "comment"
              />
              <label className="mdl-textfield__label" htmlFor="smaple1">Type a message....</label>
            </div>
          </form>
        </div>
      </div>                     
    );
  }
};

export default InterestedEmployersList;