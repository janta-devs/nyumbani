import React, { Component } from 'react';
import MyOrdersTableCells from './MyOrdersTableCells';

class MyOrdersContainer extends Component{


	render() {
	const tableStyle = {
			width: '80%',
			margin:'auto',
		};

		var populate = this.props.data.map( x => 
		<MyOrdersTableCells key = { x.order_id } order_id = {x.order_id} employer = { x.login_id } description = {x.description} job_title = {x.job_title} location = {x.location} 
		interested_employees = {x.interested_employees} budget = {x.budget}/>);

		return (
			<div>
				<div className="table-responsive-vertical shadow-z-1" style={tableStyle}>
				<h3 className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">MY ORDERS</h3>
					<table className = "table table-hover">
							<thead>
								<tr>
									<th>JOB TITLE</th>
									<th>DESCRIPTION</th>
									<th>LOCATION</th>
									<th>BIDS</th>
									<th>ACTION</th>
								</tr>
							</thead>
								{populate}
							<tfoot>
									<tr>
										<td>_</td>
										<td>_</td>
										<td>&copy; 2016</td>
										<td>_</td>
										<td>_</td>
									</tr>
							</tfoot>
					</table>
				</div>	
			</div>	
		);
	}
}

export default MyOrdersContainer;

