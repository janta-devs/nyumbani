var React = require('react');
var TableCell = require('./TableCell.jsx');


var ResultTable = React.createClass({
	render: function() {
		var populate = this.props.data.map( x => 
		<TableCell key = { x.order_id } client_id = {x.login_id} job_title = {x.job_title} description = {x.description} 
		location = {x.location} budget = {x.budget} profession = {x.profession} attachments = {x.order_attachment_path}/>);

		return (
				<table className = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<thead>
							<tr>
								<th className="mdl-data-table__cell--non-numeric">CLIENT ID</th>
								<th className="mdl-data-table__cell--non-numeric">JOB TITLE</th>
								<th className="mdl-data-table__cell--non-numeric">DESCRIPTION</th>
								<th className="mdl-data-table__cell--non-numeric">LOCATION</th>
								<th className="mdl-data-table__cell--non-numeric">PRICE</th>
								<th className="mdl-data-table__cell--non-numeric">ATTACHMENT(S)</th>
								<th className="mdl-data-table__cell--non-numeric">PROFESSION</th>
							</tr>
						</thead>
						<tbody>
							{populate}
						</tbody>
						<tfoot>
								<tr>
									<td className="mdl-data-table__cell--non-numeric">_</td>
									<td className="mdl-data-table__cell--non-numeric">_</td>
									<td className="mdl-data-table__cell--non-numeric">_</td>
									<td className="mdl-data-table__cell--non-numeric">&copy; 2016</td>
									<td className="mdl-data-table__cell--non-numeric">_</td>
									<td className="mdl-data-table__cell--non-numeric">_</td>
									<td className="mdl-data-table__cell--non-numeric">_</td>
								</tr>
						</tfoot>
					</table>
		);
	}
});

module.exports = ResultTable;