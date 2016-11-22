import React, { Component } from 'react';
import { render } from 'react-dom';

import Main from '../../profile-view/components/Main';
import { Link, Router } from 'react-router';
class TableCell extends Component{
	componentDidMount(nxtProp, nxtState){
		this.props.State.Actions.pullEmployeeData(this.props.id);
	}
	render() {
    const styleIEButton = {
      lineHeight: '10px',
      padding: '1px 1px 1px 1px',
      textTransform: 'unset',
    };
		return (
			<tbody>
				<tr>
					<td>{this.props.surname}</td>
					<td>{this.props.profession}</td>
					<td>{this.props.city}</td>
					<td>{this.props.id_pass}</td>
					<td>
					<Link to={`/nyumbani/index.php/home/Employee/${this.props.id}`}>
						<button style={styleIEButton}	className = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored'>View Profile <i className="material-icons">account_box</i>
						</button>
					</Link>
					</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		);
	}
}


export default TableCell;