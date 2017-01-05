import React, { Component } from 'react';
import AddButton from './AddButton';
import Fieldskill from './Fieldskill';

var y = [[1],];

class DynamicFieldsSkills extends Component{
	constructor( context, props ){
		super( context, props );
		this.state = {
			count: 1, 
			fields: []
		} 
	}
	_getAction( event ){
		event.preventDefault();
		this.setState({ count: this.state.count += 1});
		y.push( this.state.count );
		this.setState({fields: y });
	}
	render(){

		var populate = y.map( y => <Fieldskill key = {y} unique = {y} getValue = {this.props.getValue}/> );
		return (
			<div>
				{populate}
				<br />
				<AddButton getAction = {this._getAction.bind(this)} />
			</div>
		);a
	}
};

export default DynamicFieldsSkills;