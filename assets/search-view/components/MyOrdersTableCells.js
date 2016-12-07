import React, { Component } from 'react';
import { render } from 'react-dom';

import { Link, Router } from 'react-router';

class MyOrdersTableCells extends Component{
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
					<td style={rowStyle}>{this.props.job_title}</td>
					<td style={rowStyle}>{this.props.description}</td>
					<td style={rowStyle}>{this.props.location}</td>
					<td style={rowStyle}>
					<Link to={`/nyumbani/index.php/home/timeline/ViewBids/${this.props.order_id}`}>
						{this.props.interested_employees.length}
					</Link>
					</td>
					<td>
					<Link to={`/nyumbani/index.php/home/timeline/ViewBids/${this.props.order_id}`}>
						<button style={styleIEButton}	className = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored'>Status<i className="material-icons">account_box</i>
						</button>
					</Link>
					<button style={styleIEButton}	className = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored'>Delete<i className="material-icons">delete</i></button>
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


export default MyOrdersTableCells;