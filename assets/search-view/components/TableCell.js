import React, { Component } from 'react';
import { render } from 'react-dom';

import Main from '../../profile-view/components/Main';

import { Link, Router } from 'react-router';
class TableCell extends Component{
	componentDidMount(nxtProp, nxtState){
		this.props.State.Actions.pullEmployeeData(this.props.id);
	}
	render() {
		return (
				<tr>
					<td className="mdl-data-table__cell--non-numeric">{this.props.surname}</td>
					<td className="mdl-data-table__cell--non-numeric">{this.props.profession}</td>
					<td className="mdl-data-table__cell--non-numeric">{this.props.city}</td>
					<td className="mdl-data-table__cell--non-numeric">{this.props.id_pass}</td>
					<td>
					<span className="input-group-btn">
					<Link to={`/nyumbani/index.php/home/Employee/${this.props.id}`}>
						<button	className = 'btn btn-fab'><i className="pe-7s-id pe-va pe-lg"></i>
						</button>
					</Link>
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