import React, { Component } from 'react';

class Fieldskill extends Component{
	render(){
		var skill = "skill"+this.props.unique;
		var mode = "mode"+this.props.unique;
		return (
		<div>
		<div className="col-md-6">
			<div className="form-group label-floating">
                    <label className="control-label" htmlFor="skill">Add Skill</label>
                    <input type="text" id="skill" name={skill} className="form-control form-control-sm" onBlur = {this.props.getValue}/>
			</div>
		</div>


		<div className="col-md-6">
			<div className="form-group label-floating">
				<div className="input-group">

                    <label className="control-label" htmlFor="mode">Acquisition Mode</label>
                    <input type="text" id="mode" name={mode} className="form-control form-control-sm" onBlur = {this.props.getValue}/>    
				</div>
			</div>
		</div>
		</div>

		);
	}
};

export default Fieldskill;