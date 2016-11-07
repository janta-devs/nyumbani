var React = require('react');

var NoResultCell = React.createClass({
	render: function() {
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
});

module.exports = NoResultCell;