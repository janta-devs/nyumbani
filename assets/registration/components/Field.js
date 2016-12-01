import React, { Component } from 'react';


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
		return (
		<div className="form-group label-floating">
			<div className="input-group">
                <label className="control-label" htmlFor="past_job">Past Employment</label><br />
                <div style={divStyle}>
                <div className="col-md-3">
                Company<br/><input type="text" id="past_job" name={name} className="form-control form-control-sm" onBlur = {this.props.getValue}/> <br />
				</div>
				<div className="col-md-3">
				Job title<br/><input type="text" id="job_title" name={title} className="form-control form-control-sm" onBlur = {this.props.getValue}/> <br />
				</div>
				<div className="col-md-3">
				Start date<br/><input type="date" id="start_date" name={start_date} className="form-control form-control-sm" onBlur = {this.props.getValue}/> <br />
				</div>
				<div className="col-md-3">
				End date<br/><input type="date" id="end_date" name={end_date} className="form-control form-control-sm" onBlur = {this.props.getValue}/> <br />
				</div>
				</div>
			</div>
		</div>
		);
	}
};

export default Field;