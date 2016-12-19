import React, { Component } from 'react';

import SuccessAlert from './SuccessAlert';
import DangerAlert from './DangerAlert';
import InformationAlert from './InformationAlert';
import $ from 'jquery';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';

import DatePicker from 'material-ui/DatePicker';


import '../../node_modules/bootstrap/less/bootstrap.less'; 



var datacollection_basic = {};

class BasicDetailsComponent extends Component{
	constructor( context, props ){
		super( context, props );
		this.state = {
			data: {}, 
			defaultProfile: "/nyumbani/assets/node_modules/bootstrap/dist/images/anony.jpg",
			alert: 'default'
		}
	}
	componentWillUpdate(x, y){
		
	}
	componentWillMount(){
		var self = this;

		$.ajax({
			url: '/nyumbani/index.php/profile/get_user_info',
			type: 'POST',
			dataType: 'json',
		})
		.done(function( dt ) {
			self.setState({ data: dt });
		});
	}
	getValue( e ){
		// e.preventDefault();
		// e.stopPropagation();
		//datacollection_basic[e.target.name] = e.target.value;

		console.log( e.target.value );
	}
	getSpecialValues( event, value ){
		let date = this.formatDate( value )
		datacollection_basic['date'] = date;
	}
	_uploadFile( e ){
		e.preventDefault();
		e.stopPropagation();

		var file = e.target.files, form = new FormData(), name = e.target.name;

		$.each(file, function(index, val) {
			form.append(index, val);
		});
		this._sendAttachments( form, name );		
	}
	_sendAttachments( file, name ){
		var self = this;
		$.ajax({
			url: '/nyumbani/index.php/profile/getUploads',
			type: 'POST',
			dataType: 'json',
			cache: false, 
			contentType: false, 
			processData: false,
			data: file,
		})
		.done(function( res ) {
			self.setState({ defaultProfile: res['path']});
			datacollection_basic[ name ] = res['path'];
		});
	}
	onSave( e ){
		e.preventDefault();
		e.stopPropagation();

		delete datacollection_basic['phone'];
		delete datacollection_basic['email'];
		delete datacollection_basic['firstname'];
		delete datacollection_basic['lastname'];

		var method = "sendBasicInformation";
		if( datacollection_basic.hasOwnProperty('surname') 
			&& datacollection_basic.hasOwnProperty('id_pass') 
			&& datacollection_basic.hasOwnProperty('profession')){
				//this.props.populateProfile(method, datacollection_basic );
				this.setState({ alert: true });
				this.props.handleNext();
			}
		else{
				this.setState({ alert: false });
			}
	}

	formatDate(date){
		return (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
	}

	render() {
		const fieldWidth = {
			width: '200px',
		};
		const TextAreaWidth = {
			width: '200px'
		};
		return (
						<div className="tab-pane active" id="basic" role="tabpanel">
							{(this.state.alert === true) ? <SuccessAlert /> : (this.state.alert === 'default') ? <InformationAlert /> : <DangerAlert />}
							<div className="col-md-6">
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="email">E-mail</label>
									<TextField name = "email" value = {this.state.data.email} onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                    <label className="control-label" htmlFor="phone">Phone Number</label>
									<TextField name="phone" value = {this.state.data.phone} onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="email">Profession</label>
									<TextField name="profession" value = {this.state.data.profession} onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                    <label className="control-label" htmlFor="firstname">First Name</label>
									<TextField name="fname" value = {this.state.data.fname} onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
					                <label className="control-label" htmlFor="lastname">Last Name</label>
									<TextField name="lname" value = {this.state.data.lname} onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>	
							<div className="col-md-4">
								<div className="form-group label-floating">
			                        <label className="control-label" htmlFor="surname">Surname</label>
								<TextField name="surname" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                    <label className="control-label" htmlFor="id_pass">ID/Passport</label> 
				                	<TextField name="id_pass" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
			                        <label className="control-label" htmlFor="city">City/Town</label>
									<TextField name="city" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                    <label className="control-label" htmlFor="estate">Estate/Locality</label> 
									<TextField name="estate" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
				                        <label className="control-label" htmlFor="dob">Date of Birth</label>
				                        <DatePicker hintText="Your Date of Birth" 
				                        container="inline" mode="landscape" 
				                        formatDate={this.formatDate}
				                        onChange = {this.getSpecialValues.bind(this)} 
				                        name = "dob"
				                        onTouchTap={this.getValue.bind(this)}
				                        />
								</div>
							</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
									<label htmlFor="t1" className="control-label">Describe yourself here</label><br />
									<TextField name = "description" onChange = {this.getValue.bind(this)}
									  multiLine={true}
								      rows={3}
								      rowsMax={4}
								      textareaStyle={TextAreaWidth}
									/>
								</div>
							<div className="form-group">
								<img src={this.state.defaultProfile} width="150" height="150" className="img-circle span5"/>
								<input type="file" id="attach-file" multiple="" name = "profile_photo" onChange = {this._uploadFile.bind(this)}/>
							</div>
							<div className="col-md-12">
								  <FlatButton
						            label="Back"
						            disabled={this.props.stepIndex === 0}
						            onTouchTap={this.props.handlePrev}
						            style={{marginRight: 12}}
						            className = "pull-left"
						          />
						          <RaisedButton
						            label={this.props.stepIndex === 2 ? 'Finish' : 'Next'}
						            primary={true}
						            onTouchTap={this.onSave.bind(this)}
						            className = "pull-right"
						          />
							</div>
							<br /><br />
						</div>
						</div>

		);
	}
};

export default BasicDetailsComponent;