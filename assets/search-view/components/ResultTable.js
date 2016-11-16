import React, { Component } from 'react';

import TableCell from './TableCell';

class ResultTable extends Component{
	render() {
		var populate = this.props.data.map( x => 
		<TableCell key = { x.id.toString() } first_name = {x.first_name} last_name = {x.last_name} gender = {x.gender} 
		email = {x.email} location = {x.location} ip_address = {x.ip_address.toString()} profession = {x.profession}/>);

		return (
				<table className = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<thead>
							<tr>
								<th className="mdl-data-table__cell--non-numeric">FIRST NAME</th>
								<th className="mdl-data-table__cell--non-numeric">LAST NAME</th>
								<th className="mdl-data-table__cell--non-numeric">GENDER</th>
								<th className="mdl-data-table__cell--non-numeric">LOCATION</th>
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
