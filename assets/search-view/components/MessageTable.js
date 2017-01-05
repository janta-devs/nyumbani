import React, { Component } from 'react';
import { Link } from 'react-router';

class MessageTable extends Component{
	render() {
		const tableStyle = {
			width: '80%',
			margin:'auto',
		};

		var populate = this.props.data.map( (x, y) => {
			return(<TableCell key = { x.id } id = {x.id} number = { y+1 } title = {x.message_title} timeposted = {x.timestamp} status = {x.status}/>);
		});

		return (
			<div className="table-responsive-vertical shadow-z-1" style={tableStyle}>
				<table className = "table table-hover table-mc-light-blue ">
						<thead>
							<tr>
								<th>MESSAGE NO.</th>
								<th>TITLE</th>
								<th>TIME</th>
								<th>STATUS</th>
								<th>ACTIONS</th>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>	
								<td></td>				
							</tr>
						</thead>
							{populate}
						<tfoot>
								<tr>
									<td>_</td>
									<td>_</td>
									<td>&copy; 2016</td>
									<td>_</td>
									<td>_</td>
								</tr>
						</tfoot>
				</table>
			</div>		
		);
	}
}

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
	    var date = new Date( Date.parse(this.props.timeposted) );
		return(
			<tbody>
				<tr>
					<td style={rowStyle}>{this.props.number}</td>
					<td style={rowStyle}>{this.props.title}</td>
					<td style={rowStyle}>{date.toString()}</td>
					<td style={rowStyle}>{this.props.status}</td>
					<td>
					<Link to={`/nyumbani/index.php/home/timeline/Messages/Message/${this.props.number - 1}`}>
						<button style={styleIEButton}	className = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored'>View Message <i className="material-icons">account_box</i>
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




export default MessageTable;
