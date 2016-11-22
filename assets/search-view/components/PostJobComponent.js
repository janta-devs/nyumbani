import React, { Component } from 'react';
import BackComponent from './BackComponent';

var dataCollection = {};

import $ from 'jquery';


class PostJobComponent extends Component{

	constructor(context, props){
		super( context, props );
		this.state = {
			finalData: []
		}
	}
	componentDidMount() {
		console.log( this );
	}
	componentWillUnMount() {
		this.serverRequest.abort();
	}
	getValue( e ){

		//create an action that will be collecting the information from the requsite fields
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
	onSave( e ) {
		e.preventDefault();
		e.stopPropagation();
		$.ajax({
			url: '/nyumbani/index.php/timeline/create_order',
			type: 'POST',
			dataType: 'json',
			data: dataCollection,
		})
		.done(function( res ) {
			console.log( res );
		});
	}
	render() {
		return (
			<div>
			{
				this.state.successPost == "true" ?
				<div className='alert alert-success'>
				Job posting was successful.
				</div>
				:null
			}
			{
				this.state.successPost == "false" ?
				<div className='alert alert-danger'>
				Sorry! Job posting failed. Please try again.
				</div>
				: null
			}
			<BackComponent State = {this.props.State}/>
			<form onSubmit={this.onSave} method="post" encType = "multipart/form-data" >
				<div className="col-md-6">
					<div className="col-md-12">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="profession">I am Looking For</label>
		                        <input type="text" id="profession" name="profession" className="form-control" onBlur = {this.getValue.bind(this)} ref = "profession"/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="job_title">Job Title</label>
		                        <input type="text" id="job_title" name="job_title" className="form-control" onBlur = {this.getValue.bind(this)} ref = "job_title"/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="location">Location</label>
		                        <input type="text" id="location" name="location" className="form-control" onBlur = {this.getValue.bind(this)} ref = "location"/>
						</div>
					</div>	
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="startDate">Start Date</label>
		                        <input type="date" id="startDate" name="start" className="form-control"  data-dtp="" onBlur = {this.getValue.bind(this)} ref = "startDate" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="endDate">End Date</label>
		                        <input type="date" id="endDate" name="end" className="form-control"  onBlur = {this.getValue.bind(this)} ref = "endDate"/>
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="budget">Budget/Remuneration</label>
		                        <input type="text" id="budget" name="budget" className="form-control"  onBlur = {this.getValue.bind(this)} ref="budget"/>
						</div>
					</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
						    <label htmlFor="t1" className="control-label">Job description goes here</label>
						    <textarea name = "description" id="t1" className="form-control" rows="5" onBlur = {this.getValue.bind(this)} ref = "description"></textarea>
						</div>
						<div className="form-group">
						<input type="file" id="attach-file" multiple="" onChange = {this.uploadFile.bind(this)}/>
	    				<div className="input-group">
						    <input type="text" readOnly="" className="form-control" placeholder="Attach files" />
							    <span className="input-group-btn input-group-sm">
							      <button type="button" className="btn btn-fab">
							        <i className="pe-7s-paperclip pe-va pe-lg"></i>
							      </button>
							    </span>
						 </div>
						</div>
					</div>
				<div className="col-md-6">
					<button className="btn btn-block btn-raised btn-info" onClick={this.onSave.bind(this)}>Submit</button>
				</div>
			</form>
			</div>
		);
	}
}

export default PostJobComponent;