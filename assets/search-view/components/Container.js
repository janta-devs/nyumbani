import React, { Component } from 'react';
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Container extends Component{
	constructor( context, props ){
		super( context, props );

		this.state = {
			worker_avator: "/nyumbani/photo_assets/work.png",
		}
	}
	handleClick( e ){
		e.preventDefault();
		window.location = `/nyumbani/index.php/home/timeline/Category/${this.props.category.replace('/','_')}`;
	}
	render()
	{
		const styleDIV = {
			height: '150px',
			width:'150px',
		    lineHeight: '5px',
		    padding: '1px 1px 1px 1px',
		    backgroundColor: 'white',
		 	padding: '43px 5px 20px 10px',
		    border:'3px',
		    textAlign: 'center',
		    float: 'left',
		    marginRight: '16px',
		    marginBottom: '16px',
		    lineHeight: '100%',
		    zIndex:'5',
		    color: 'black',
		    fontWeight: 'bold',
		    textTransform: 'uppercase',
		    wordWrap: 'break-word',
		    cursor:'pointer',
		    color: 'blue'

	    };
	    const style = {
			height: '200px',
			width: '200px',
			textAlign: 'center',
			diaplay: 'inline-block'
		}
		return(
		<MuiThemeProvider>
			<Paper style={styleDIV} zDepth={5} onTouchTap = {this.handleClick.bind(this)}>
				<img src ={this.state.worker_avator} height = "50" width = "50"/><br/>
				{this.props.category}
			</Paper>
		</MuiThemeProvider>
		)
	}

}

export default Container;





