import React, { Component } from 'react';
import { render } from 'react-dom';

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
	    const rowStyle = {
	    	fontSize: '.95rem'
	    }
		return(
			<tbody>
				<tr>
					<td style={rowStyle}>{this.props.order_id}</td>
					<td style={rowStyle}>{this.props.profession}</td>
					<td style={rowStyle}>{this.props.description}</td>
					<td style={rowStyle}>{this.props.location}</td>
					<td style={rowStyle}>{this.props.budget}</td>
					<td>
					<Link to={`/nyumbani/index.php/home/employee_timeline/ordernumber/${this.props.order_id}`}>
						<button style={styleIEButton}	className = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored'>View Job
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