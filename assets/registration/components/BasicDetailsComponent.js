import React, { Component } from 'react';

import SuccessAlert from './SuccessAlert';
import DangerAlert from './DangerAlert';
import InformationAlert from './InformationAlert';

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
		e.preventDefault();
		e.stopPropagation();
		datacollection_basic[e.target.name] = e.target.value;
		console.log( datacollection_basic );
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
				this.props.populateProfile(method, datacollection_basic );
				this.setState({ alert: true });
			}
		else{
				this.setState({ alert: false });
			}
		

		//console.log( datacollection_basic );
	}
	render() {
		return (
						<div className="tab-pane active" id="basic" role="tabpanel">
							{(this.state.alert === true) ? <SuccessAlert /> : (this.state.alert === 'default') ? <InformationAlert /> : <DangerAlert />}
							<div className="col-md-6">
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="email">E-mail</label>
				                        <input type="text" id="email" name="email" className="form-control form-control-sm" value = {this.state.data.email} onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="phone">Phone Number</label>
				                        <input type="tel" id="phone" name="phone" className="form-control form-control-sm" value = {this.state.data.phone} onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="email">Profession</label>
				                        <input type="text" id="profession" name="profession" className="form-control form-control-sm" value = {this.state.data.profession} onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="firstname">First Name</label>
				                        <input type="text" id="firstname" name="firstname" className="form-control form-control-sm" value = {this.state.data.fname} onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="lastname">Last Name</label>
				                        <input type="text" id="lastname" name="lastname" className="form-control form-control-sm" value = {this.state.data.lname} onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>	
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="surname">Surname</label>
				                        <input type="text" id="surname" name="surname" className="form-control form-control-sm" onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="id_pass">ID/Passport</label>
				                        <input type="text" id="id_pass" name="id_pass" className="form-control" onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="city">City/Town</label>
				                        <input type="text" id="city" name="city" className="form-control form-control-sm" onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="estate">Estate/Locality</label>
				                        <input type="text" id="estate" name="estate" className="form-control form-control-sm" onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
				                        <label className="control-label" htmlFor="dob">DOB</label>
				                        <input type="date" id="dob" name="dob" placeholder="06/25/1980" className="form-control form-control-sm" onBlur = {this.getValue.bind(this)}/>
								</div>
							</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
								    <label htmlFor="t1" className="control-label">Describe yourself here</label>
								    <textarea id="t1" name = "description" className="form-control form-control-sm" rows="3" onBlur = {this.getValue.bind(this)}></textarea>
								</div>
							<div className="form-group">
								<img src={this.state.defaultProfile} width="150" height="150" className="img-circle span5"/>
								<input type="file" id="attach-file" multiple="" name = "profile_photo" onChange = {this._uploadFile.bind(this)}/>
							</div>
							<div className="col-md-12">
								<button className="btn btn-info pull-left" onClick={this.onSave.bind(this)}>Save</button>
								<button className="btn btn-warning pull-right" onClick = {this.props.handleNext} name = "basic">Next</button>
							</div>
							<br /><br />
						</div>
						</div>

		);
	}
};

export default BasicDetailsComponent;