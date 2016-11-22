import React, { Component } from 'react';

import TableCell from './TableCell';


class ResultTable extends Component{
	componentWillUpdate(nxtProp, nxtState){

	}
	render() {
		var populate = this.props.data.map( x => 
		<TableCell key = { x.login_id } id = { x.login_id } surname = {x.surname} id_pass = {x.id_pass} city = {x.city} 
		profession = {x.profession} State = {this.props.State} />);

		return (
				<table className = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<thead>
							<tr>
								<th className="mdl-data-table__cell--non-numeric">SURNAME</th>
								<th className="mdl-data-table__cell--non-numeric">IDENTIFICATION No.</th>
								<th className="mdl-data-table__cell--non-numeric">PROFESSION</th>
								<th className="mdl-data-table__cell--non-numeric">CITY</th>
								<th className="mdl-data-table__cell--non-numeric">ACTIONS</th>
							</tr>
						</thead>
						<tbody>
							{populate}
						</tbody>
						<tfoot>
								<tr>
									<td>_</td>
									<td>_</td>
									<td>_</td>
									<td>&copy; 2016</td>
									<td>_</td>
								</tr>
						</tfoot>
					</table>
		);
	}
}

export default ResultTable;
