var React = require('react');

var TableCell = React.createClass({
	render: function() {
		return (
					<tr>
						<td className="mdl-data-table__cell--non-numeric"><a href = {this.props.client_id}>{this.props.client_id}</a></td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.job_title}</td>
						<td>{this.props.description.substring(0, 30)}</td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.location}</td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.budget}</td>
						<td className="mdl-data-table__cell--non-numeric"><a href = {this.props.attachments}>Attachment</a></td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.profession}</td>
					</tr>
		);
	}
});

module.exports = TableCell;