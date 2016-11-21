import React, { Component } from 'react';

import NoResultCell from './NoResultCell';


class NoSearchResult extends Component{
	render(){
		var popu = this.props.data.map( (x,y) => <NoResultCell key = {y} result = {x["suggestion_"+y]} searchAction = {this.props.searchAction}/> );
		return (
			<div>
					<table className = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<thead>
							<tr>
								<th className="mdl-data-table__cell--non-numeric"></th>
								<th className="mdl-data-table__cell--non-numeric"></th>
								<th className="mdl-data-table__cell--non-numeric"></th>
								<th className="mdl-data-table__cell--non-numeric">No results, did you mean?</th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
						{popu}
						</tbody>
						<tfoot>
								<tr>
									<td>_</td>
									<td>_</td>
									<td>_</td>
									<td>&copy; 2016</td>
									<td>_</td>
									<td>_</td>
									<td>_</td>
								</tr>
						</tfoot>
					</table>
			</div>
		)
	}

}

export default NoSearchResult;