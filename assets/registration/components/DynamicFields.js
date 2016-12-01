import React, { Component } from 'react';
import Field from './Field';
import AddButton from './AddButton';

var x = [1,];

class DynamicFields extends Component{
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
		x.push( this.state.count );
		this.setState({fields: x });
	}
	render(){

		var populate = x.map( x => <Field key = {x} unique = {x} getValue = {this.props.getValue}/> );
		return (
			<div>
				{populate}
				<br />
				<AddButton getAction = {this._getAction.bind(this)} />
			</div>
		);a
	}
};

export default DynamicFields;