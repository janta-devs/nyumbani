import React, { Component } from 'react';


class NoResultCell  extends Component{
	render() {
		return (
					<tr>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.result}</td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td></td>
						<td></td>
					</tr>
		);
	}
}

export default NoResultCell;