import React, { Component } from 'react';
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Container extends Component{
	render()
	{
		const styleDIV = {
			height: '150px',
			width:'150px',
		    lineHeight: '10px',
		    padding: '1px 1px 1px 1px',
		    backgroundColor: 'white',
		 	padding: '43px 5px 20px 10px',
		    border:'3px',
		    textAlign: 'center',
		    float: 'left',
		    marginRight: '16px',
		    marginBottom: '16px',
		    lineHeight: '200%',
		    zIndex:'5',
		    color: 'black',
		    fontWeight: 'bold',
		    textTransform: 'uppercase',
		    wordWrap: 'break-word'
	    };
	    const style = {
			height: '200px',
			width: '200px',
			textAlign: 'center',
			diaplay: 'inline-block'
		}
		return(
		<MuiThemeProvider>
			<Paper style={styleDIV} zDepth={5}>
					<Link to={`/nyumbani/index.php/home/timeline/Category/${this.props.category.replace('/','_')}`}>{this.props.category}</Link>
			</Paper>
		</MuiThemeProvider>
		)
	}

}

export default Container;





