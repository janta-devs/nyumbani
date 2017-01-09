import React, { Component } from 'react';
import BackComponent from './BackComponent';

import DangerAlert from './DangerAlert';
import InformationAlert from './InformationAlert';
import SuccessAlert from './SuccessAlert';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../../DataStore/Actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import injectTapEventPlugin from 'react-tap-event-plugin';
 injectTapEventPlugin();



var dataCollection = {};

import $ from 'jquery';


class PostJobComponent extends Component{

	constructor(context, props){
		super( context, props );
		this.state = {
			finalData: [],
			alert: 'default'
		}
	}
	componentDidMount() {
		
	}
	componentWillUnMount() {
		this.serverRequest.abort();
	}
	getValue( e ){
		e.preventDefault();
		e.stopPropagation();
		dataCollection[e.target.name] = e.target.value;
	}
	uploadFile( e ){
		e.preventDefault();
		e.stopPropagation();

		var file = e.target.files, form = new FormData(), node = e.target;

		$.each(file, function(index, val) {
			form.append(index, val);
		});

		this.sendAttachments( form, node );		
	}
	sendAttachments( file, el ){
		$.ajax({
			url: '/nyumbani/index.php/timeline/uploadAttachment',
			type: 'POST',
			dataType: 'json',
			cache: false, 
			contentType: false, 
			processData: false,
			data: file,
		})
		.done(function( res ) {
			$( el ).val( res['order_attachment_path']);
			dataCollection['order_attachment_path'] = res['path'];
		});
	}
	_send( data ){
		$.ajax({
			url: '/nyumbani/index.php/timeline/create_order',
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function( res ) {
			console.log( res );
		});
	}
	getStartDate( event, value ){
		let date = this.formatDate( value )
		dataCollection['startDate'] = date;
	}
	getEndDate( event, value ){
		let date = this.formatDate( value )
		dataCollection['startDate'] = date;
	}
	formatDate(date){
		return ( date.getFullYear() + "-" + (Number(date.getMonth())+1) + "-" + date.getDate() );
	}
	onSave( e ) {
		e.preventDefault();
		e.stopPropagation();

		if( dataCollection.hasOwnProperty('job_title') 
			&& dataCollection.hasOwnProperty('profession') 
			&& dataCollection.hasOwnProperty('start')
			&& dataCollection.hasOwnProperty('end')
			&& dataCollection.hasOwnProperty('description')
			&& dataCollection.hasOwnProperty('budget')
			&& dataCollection.hasOwnProperty('location'))
			{
				this.setState({ alert: true });
				this._send( dataCollection );
				window.location.href = "/nyumbani/index.php/home/timeline/";
			}
		else
			{
				this.setState({ alert: false });
			}
	}
	render() {
		const fieldWidth = {
			width: '200px',
		};
		const TextAreaWidth = {
			width: '200px'
		};
		const formStyle = {
			height: "500px",
		    width: "90%",
		    border: "1px solid white",
		    borderRadius: "5px",
		    marginLeft: "5%",
		    paddingTop: "2%",
		    zIndex: '5',
		    boxShadow: '5px 10px 41px #888789',
		};
		const headerStyle = {
			color: 'blue',
			textAlign: 'center',
			textDecoration: 'underline',
		};
		return (
			<div>
			{(this.state.alert === true) ? <SuccessAlert /> : (this.state.alert === 'default') ? <InformationAlert /> : <DangerAlert />}
			<BackComponent State = {this.props.State}/>
			<MuiThemeProvider>
			<form onSubmit={this.onSave} method="post" encType = "multipart/form-data" style={formStyle}>
				<h4 style={headerStyle}>CREATE AN ORDER</h4><br /><br/>
				<div className="col-md-6">
					<div className="col-md-12">
						<div className="form-group label-floating">
	                        <label className="control-label" htmlFor="profession">I am Looking For</label>
							<TextField name = "profession" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
						</div>
					</div><br /><br /><br /><br />
					<div className="col-md-6">
						<div className="form-group label-floating">
		                    <label className="control-label" htmlFor="job_title">Job Title</label>
							<TextField name = "job_title" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                    <label className="control-label" htmlFor="location">Location</label>   
							<TextField name = "location" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
						</div>
					</div>	<br /><br /><br /><br />
					<div className="col-md-6">
						<div className="form-group label-floating">
		                     <label className="control-label" htmlFor="startDate">Start Date</label>
							 <DatePicker hintText="Select date" 
		                        container="inline" mode="landscape" 
		                        formatDate={this.formatDate}
		                        onChange = {this.getStartDate.bind(this)} 
		                        name = "dob"
		                        locale ="en-US"
				               />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="endDate">End Date</label>
		                        <DatePicker hintText="Select date" 
			                        container="inline" mode="landscape" 
			                        formatDate={this.formatDate}
			                        onChange = {this.getEndDate.bind(this)} 
			                        name = "dob"
			                        locale ="en-US"
				               />
						</div>
					</div><br /><br /><br /><br /><br /><br />
					<div className="col-md-12">
						<div className="form-group label-floating">
		                    <label className="control-label" htmlFor="budget">Budget in KSh.</label>
							<TextField name = "budget" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
						</div>
					</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
						    <label htmlFor="t1" className="control-label">Job description goes here</label><br /><br />
						    		<TextField name = "description" onChange = {this.getValue.bind(this)}
						    		hintText="Enter Project description here.."
									  multiLine={true}
								      rows={3}
								      rowsMax={4}
								      textareaStyle={TextAreaWidth}
									/>
						</div><br /><br />
						<div className="form-group">
						 	<label htmlFor="t1" className="control-label">File Attachments Upload</label><br /><br />
							<input type="file" id="attach-file" multiple="" onChange = {this.uploadFile.bind(this)}/>
						</div>
					</div><br /><br /><br /><br /><br /><br />
				<div className="col-md-6">
					      <RaisedButton
						            label="Save"
						            primary={true}
						            onTouchTap={this.onSave.bind(this)}
						            className = "pull-right"
						  />
					
				</div>
				
			</form>
			</MuiThemeProvider>
			</div>
		);
	}
}


function mapStateToProps( state ){              
    return state;                              
}

function mapDispatchToProps(dispatch){         
    return{
        Actions: bindActionCreators( Actions, dispatch )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PostJobComponent);