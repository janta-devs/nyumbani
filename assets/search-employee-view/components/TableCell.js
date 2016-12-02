import React, { Component } from 'react';
import { render } from 'react-dom';

import Main from '../../profile-view/components/Main';

import { Link, Router } from 'react-router';
class TableCell extends Component{
	render() 
	{
	    const styleIEButton = 
	    {
	      lineHeight: '10px',
	      padding: '1px 1px 1px 1px',
	      textTransform: 'unset',
	    };
		return(
			<tbody>
				<tr>
					<td>{this.props.order_id}</td>
					<td>{this.props.job_title}</td>
					<td>{this.props.description}</td>
					<td>{this.props.location}</td>
					<td>{this.props.budget}</td>
					<td>
					<Link to={`/nyumbani/index.php/home/employee_timeline/ordernumber/${this.props.order_id}`}>
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