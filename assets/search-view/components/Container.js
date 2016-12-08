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
		    backgroundColor: 'white',
		 	padding: '43px 5px 20px 10px',
		    border:'3px solid black',
		    textAlign: 'center',
		    float: 'left',
		    marginRight: '15px',
		    marginBottom: '10px',
		    lineHeight: '200%',
		    zIndex:'5',
		    color: 'black',
		    fontWeight: 'bold',
		    textTransform: 'uppercase',
		    wordWrap: 'break-word'
	    };
		return(
			<div style ={styleDIV}>
				<Link to={`/nyumbani/index.php/home/timeline/Category/${this.props.category.replace('/','_')}`}>{this.props.category}</Link>
			</div>
		)
	}

}

export default Container;





