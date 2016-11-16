import React, { Component } from 'react';
import { render } from 'react-dom';

import Main from '../../profile-view/components/Main';


class TableCell extends Component{
	HandleRawClick( e ){
		e.preventDefault();
		e.stopPropagation();
		console.log( this.props );

		render(<Main changeAppMode = {this.props.changeAppMode.bind(this)}/>, document.getElementById('component'));
	}
	render() {
		return (
					<tr onClick ={this.HandleRawClick.bind(this)}>
						<td className="mdl-data-table__cell--non-numeric">{this.props.first_name}</td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.last_name}</td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.gender}</td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.location}</td>
						<td>
						<span className="input-group-btn">
						<button
							onClick={() => this.props.changeAppMode('readOne', this.props.id)}
							className = 'btn btn-fab'><i className="pe-7s-id pe-va pe-lg"></i>
						</button>
						</span>
						<span className="input-group-btn">
						<button
							onClick={() => this.props.changeAppMode('message', this.props.id)}
							className = 'btn btn-fab'><i className="pe-7s-comment pe-va pe-lg"></i>
						</button>
						</span>
						<span className="input-group-btn">
						<button 
							onClick={() => this.props.changeAppMode('interest', this.props.id)}
							className = 'btn btn-fab'><i className="pe-7s-like2 pe-va pe-lg"></i>
						</button>
						</span>
						</td>
					</tr>
		);
	}
}


export default TableCell;