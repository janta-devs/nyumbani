import React, { Component } from 'react';
import $ from 'jquery';


class NoResultCell  extends Component{
	handleClick( e ){
		e.preventDefault();
		e.stopPropagation();
		let $value = $(this.refs.suggestion_term).attr('value');
		this.props.searchAction( $value );
	}
	render() {
		return (
					<tr onClick = {this.handleClick.bind(this)} ref = "suggestion_row">
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric" ref = "suggestion_term" value = {this.props.result}>{this.props.result}</td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td></td>
						<td></td>
					</tr>
		);
	}
}

export default NoResultCell;