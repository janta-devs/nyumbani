import React, { Component } from 'react';

class AddButton extends Component {
	render() {
		return (
		   <span className="input-group-btn input-group-sm">
		      <button type="button" className="btn btn-fab btn-fab-sm" >
		        <i className="pe-7s-plus pe-va pe-lg" onClick = {this.props.getAction}>Add Fields</i>
		      </button>
		    </span>
		);
	}
};

export default AddButton;