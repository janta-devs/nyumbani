import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class Field extends Component{
	render() {
		const divStyle = {
			marginRight: '2px',
			margin: '1px auto'
		};
		var name = "past_job_"+this.props.unique;
		var title = "title_"+this.props.unique;
		var start_date = "start_date_"+this.props.unique;
		var end_date = "end_date_"+this.props.unique;

		const fieldWidth = {
			width: '100px',
		};
		const TextfieldWidth = {
			width: '150px',
		};
		return (
		<div className="form-group label-floating">
			<div className="input-group">
                <label className="control-label" htmlFor="past_job">Past Employment</label><br />
                <div style={divStyle}>
                <div className="col-md-3">
                Company<br/><TextField id="past_job" name={name} onChange = {this.props.getValue} style={TextfieldWidth}/><br />
				</div>
				<div className="col-md-3">
				Job title<br/><TextField id="job_title" name={title} onChange = {this.props.getValue} style={TextfieldWidth}/><br />
				</div>
				<div className="col-md-3">
				Start date<br/><DatePicker hintText="Started" container="inline" mode="landscape" onChange = {this.props.getStartDate} id={start_date} textFieldStyle={fieldWidth}/>
				</div>
				<div className="col-md-3">
				End date<br/><DatePicker hintText="Ended" container="inline" mode="landscape" onChange = {this.props.getEndDate} id={end_date} textFieldStyle={fieldWidth}/>
				</div>
				</div>
			</div>
		</div>
		);
	}
};

export default Field;