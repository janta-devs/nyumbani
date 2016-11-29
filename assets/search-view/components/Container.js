import React, { Component } from 'react';
import { Link } from 'react-router';

class Container extends Component{
	render()
	{
		const styleDIV = {
			height: '150px',
			width:'150px',
			borderRadius: '10px',
		    lineHeight: '10px',
		    padding: '1px 1px 1px 1px',
		    backgroundColor: '#e8eaf6',
		 	padding: '43px 5px 20px 14px',
		    border:'1px solid black',
		    textAlign: 'center',
		    float: 'left',
		    marginLeft: '10px',
		    marginBottom: '10px',
		    lineHeight: '200%',
		    zIndex:'5'
	    };
		return(
			<div style ={styleDIV}>
				<Link to={`/nyumbani/index.php/home/Category/${this.props.category}`}>{this.props.category}</Link>
			</div>
		)
	}

}

export default Container;





