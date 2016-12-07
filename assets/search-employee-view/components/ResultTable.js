import React, { Component } from 'react';

import TableCell from './TableCell';


class ResultTable extends Component{
	render() {
		const tableStyle = {
			width: '80%',
			margin:'auto',
		};

		var populate = this.props.data.map( x => 
		<TableCell key = { x.order_id } order_id = {x.order_id} employer = { x.login_id } description = {x.description} job_title = {x.job_title} location = {x.location} 
		profession = {x.profession} budget = {x.budget}/>);

		return (
			<div className="table-responsive-vertical shadow-z-1" style={tableStyle}>
				<table className = "table table-hover table-mc-light-blue ">
						<thead>
							<tr>
								<th>ORDER NO.</th>
								<th>JOB TITLE</th>
								<th>DESCRIPTION</th>
								<th>LOCATION</th>
								<th className="mdl-data-table__header--sorted-ascending">BUDGET</th>
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
