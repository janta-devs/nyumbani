import React, { Component } from 'react';

import DynamicFields from './DynamicFields';

import SuccessAlert from './SuccessAlert';
import DangerAlert from './DangerAlert';
import InformationAlert from './InformationAlert';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';

import $ from 'jquery';

var datacollection_education = {};

class EducationBackgroundComponent extends Component{
	constructor( context, props ){
		super( context, props );

		this.state = {
			alert: 'default'
		}
	}
	componentWillUpdate(nextState, nextProps ){
		console.log( nextState );
		console.log( nextProps );
	}
	getValue( e ){
		e.preventDefault();
		e.stopPropagation();
		datacollection_education[e.target.name] = e.target.value;
	}	
	getStartDate(){
		let date = this.formatDate( value )
		datacollection_education['start_date'] = date;
	}
	getEndDate(){
		let date = this.formatDate( value )
		datacollection_education['end_date'] = date;
	}
	onSave( e ){
		e.preventDefault();
		e.stopPropagation();
		var method = "sendEducationInformation";

		var primary_history = {};
		var secondary_history = {};
		var university_history = {};

		primary_history['primary_school'] = datacollection_education['primary_school'];
		primary_history['kcpe_grade'] = datacollection_education['kcpe_grade'];
		primary_history['primary_certificate'] = datacollection_education['primary_certificate'];
		datacollection_education['primary_history'] = primary_history;

		secondary_history['secondary_school'] = datacollection_education['secondary_school'];
		secondary_history['kcse_grade'] = datacollection_education['kcse_grade'];
		secondary_history['secondary_certificate'] = datacollection_education['secondary_certificate'];
		datacollection_education['secondary_history'] = secondary_history;

		university_history['university'] = datacollection_education['university'];
		university_history['university_grade'] = datacollection_education['university_grade'];
		university_history['university_certificate'] = datacollection_education['university_certificate'];
		datacollection_education['university_history'] = university_history;


		if( datacollection_education.hasOwnProperty('past_job_1') 
			&& datacollection_education.hasOwnProperty('title_1') 
			&& datacollection_education.hasOwnProperty('start_date_1') 
			&& datacollection_education.hasOwnProperty('end_date_1')
			&& datacollection_education.hasOwnProperty('primary_history') 
			&& datacollection_education.hasOwnProperty('secondary_history') 
			&& datacollection_education.hasOwnProperty('university_history'))
		{
			this.setState({ alert: true });
			//this.props.populateProfile(method, datacollection_education );
			this.props.handleNext();
		}
		else
		{
			this.setState({ alert: false });
		}
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
			datacollection_education[ name ] = res['path'];
		});
	}	
	render(){
		const divStyle = {
			marginRight: '10px',
			margin: '1px auto',
			float:'right',
			marginBottom: '25px'
		};
		const pad = {
			paddingTop: '20px'
		};
		const fieldWidth = {
			width: '200px',
		}
		return(
			<div className="tab-pane" id="education" role="tabpanel">
			{(this.state.alert === true) ? <SuccessAlert /> : (this.state.alert === 'default') ? <InformationAlert /> : <DangerAlert />}
				<div className="col-md-6">
				<div style={divStyle}>
					<div className="col-md-4">
						<div className="form-group label-floating">
	                        <label className="control-label" htmlFor="primary">Prim. Sch./KCPE</label> 
						<TextField name="primary_school" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group label-floating">
	                        <label className="control-label" htmlFor="grade1">KCPE Grade</label>
						<TextField name="kcpe_grade" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
						</div>
					</div>
					<div className="col-md-4" style={pad}>
						<div className="form-group">
						<input type="file" id="primary_cert" name = "primary_certificate" multiple="" onChange = {this._uploadFile.bind(this)}/>
						</div>
					</div>

					</div>

					<div style = {divStyle}>
					<div className="col-md-4">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="secondary">High Sch./KCSE</label> 
						<TextField name="secondary_school" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group label-floating">
			                <label className="control-label" htmlFor="grade">KCSE Grade</label>  
							<TextField name="kcse_grade" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="form-group" style={pad}>
							<input type="file" id="primary_cert" multiple="" name = "secondary_certificate" onChange = {this._uploadFile.bind(this)}/>
						</div>
					</div>
					</div>

					<div style = {divStyle}>
					<div className="col-md-4">
									<div className="form-group label-floating">
						                <label className="control-label" htmlFor="uni">College/Uni</label>
										<TextField name="university" onChange = {this.getValue.bind(this)} style={fieldWidth}/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                    <label className="control-label" htmlFor="grade2">Honors/GPA</label>
										<TextField name="university_grade" onBlur = {this.getValue.bind(this)} style={fieldWidth}/>
									</div>
								</div>
								<div className="col-md-4" style={pad}>
									<div className="form-group">
									<input type="file" id="university_certificate" multiple="" name = "university_certificate" onChange = {this._uploadFile.bind(this)}/>
									</div>
								</div>
						</div>

				</div>	
				<div className="col-md-6">
					<DynamicFields getValue = {this.getValue.bind(this)}/><br /><br /><br />
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
						<br /><br />
					</div>
				</div>		
			</div>
		);
	}
};

export default EducationBackgroundComponent;





				


				



				











					


				