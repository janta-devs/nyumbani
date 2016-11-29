import React, { Component } from 'react';

import TableCell from './TableCell';


class ResultTable extends Component{
	// componentDidMount(){
	// 	var data = [];
	// 	var ids = this.props.data.map( x => {
	// 		data.push(x.id)
	// 	});
	// 	this.props.State.Actions.pullEmployeeData( ids );
	// }
	render() {
		var populate = this.props.data.map( x => 
		<TableCell key = { x.login_id } id = { x.login_id } surname = {x.surname} id_pass = {x.id_pass} city = {x.city} 
		profession = {x.profession} />);

		return (
			<div className="table-responsive-vertical shadow-z-1">
				<table className = "table table-hover table-mc-light-blue ">
						<thead>
							<tr>
								<th>SURNAME</th>
								<th>PROFESSION</th>
								<th>CITY</th>
								<th className="mdl-data-table__header--sorted-ascending">RATING</th>
								<th>ACTIONS</th>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>					
							</tr>
						</thead>
							{populate}
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
			</div>		
		);
	}
}

export default ResultTable;
