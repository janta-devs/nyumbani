var dataCollection_basic = {};
var dataCollection_education = {};
var dataCollection_skill = {};
var x = [[1],]; 		//an array of objects that would be used for maping to create dynamc fields

var FieldSkill = React.createClass({
	render: function() {
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
});
var AddButton = React.createClass({
	render: function() {
		return (
		   <span className="input-group-btn input-group-sm">
		      <button type="button" className="btn btn-fab btn-fab-sm" >
		        <i className="pe-7s-plus pe-va pe-lg" onClick = {this.props.getAction}></i>
		      </button>
		    </span>
		);
	}
});
var Field = React.createClass({
	render: function() {
		var name = "past_job_"+this.props.unique;
		return (
		<div className="form-group label-floating">
			<div className="input-group">
                <label className="control-label" htmlFor="past_job">Past Employment</label>
                <input type="text" id="past_job" name={name} className="form-control form-control-sm" onBlur = {this.props.getValue}/> <br />
			</div>
		</div>
		);
	}
});
var DynamicFields = React.createClass({
	getInitialState: function(){
		return{ count: 1, fields: [] }
	},
	_getAction: function( event ){
		event.preventDefault();
		this.setState({ count: this.state.count += 1});
		x.push( this.state.count );
		this.setState({fields: x });
	},
	render: function(){

		var populate = x.map( x => <Field key = {x} unique = {x} getValue = {this.props.getValue}/> );
		return (
			<div>
				{populate}
				<AddButton getAction = {this._getAction} />
			</div>
		);a
	}
});

var DynamicFieldsSkills = React.createClass({
	getInitialState: function(){
		return{ count: 1, fields: [] }
	},
	_getAction: function( event ){
		event.preventDefault();
		this.setState({ count: this.state.count += 1});
		x.push( this.state.count );
		this.setState({fields: x });
	},
	render: function(){

		var populate = x.map( x => <FieldSkill key = {x} unique = {x} getValue = {this.props.getValue}/> );
		return (
			<div>
				{populate}
				<AddButton getAction = {this._getAction} />
			</div>
		);a
	}
});
var BackComponent = React.createClass({
	render: function() {
		return (
			<div>
			   	<a href='/nyumbani/index.php/timeline/'
			   		//onClick={() => this.props.changeAppMode('search')}
					className='btn btn-raised btn-info margin-bottom-1em' ref = "back">
					Back to Search
				</a>
			</div>
			);
	}
});
var TabComponent = React.createClass({
	render: function() {
		return (
					<ul className="nav nav-tabs" role="tablist">
						<li className="active">
							<a data-toggle="tab" href="#basic" role="tab">
								Basic Details
							</a>
						</li>
						<li>
							<a data-toggle="tab" href="#education" role="tab">
								Education Background
							</a>
						</li>
						<li>
							<a data-toggle="tab" href="#skills" role="tab">
								Skills & Interests
							</a>
						</li>
					</ul>
			
			);
	}
});
var TabContentComponent = React.createClass({
	render: function () {
		return (
					<div className="tab-content">
					</div>
		);
	}
});
var BasicDetailsComponent = React.createClass({
	getInitialState: function(){
		return { 
			data: {}, 
			defaultProfile: "/nyumbani/assets/node_modules/bootstrap/dist/images/anony.jpg", 
		}
	},
	componentWillUpdate: function(x, y){
		
	},
	componentWillMount: function(){
		var self = this;

		$.ajax({
			url: '/nyumbani/index.php/profile/get_user_info',
			type: 'POST',
			dataType: 'json',
		})
		.done(function( dt ) {
			self.setState({ data: dt });
		});
	},
	getValue: function( e ){
		e.preventDefault();
		e.stopPropagation();
		dataCollection_basic[e.target.name] = e.target.value;
	},
	_uploadFile: function( e ){
		e.preventDefault();
		e.stopPropagation();

		var file = e.target.files, form = new FormData(), name = e.target.name;

		$.each(file, function(index, val) {
			form.append(index, val);
		});
		this._sendAttachments( form, name );		
	},
	_sendAttachments: function( file, name ){
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
			dataCollection_basic[ name ] = res['path'];
		});
	},
	onSave: function( e ){
		e.preventDefault();
		e.stopPropagation();

		this.props.populateProfile( dataCollection_basic );
	},
	render: function () {
		return (
						<div className="tab-pane active" id="basic" role="tabpanel">
							<div className="col-md-6">
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="email">E-mail</label>
				                        <input type="text" id="email" name="email" className="form-control form-control-sm" value = {this.state.data.email} onBlur = {this.getValue}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="phone">Phone Number</label>
				                        <input type="tel" id="phone" name="phone" className="form-control form-control-sm" value = {this.state.data.phone} onBlur = {this.getValue}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="email">Profession</label>
				                        <input type="text" id="profession" name="profession" className="form-control form-control-sm" value = {this.state.data.profession} onBlur = {this.getValue}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="firstname">First Name</label>
				                        <input type="text" id="firstname" name="firstname" className="form-control form-control-sm" value = {this.state.data.fname} onBlur = {this.getValue}/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="lastname">Last Name</label>
				                        <input type="text" id="lastname" name="lastname" className="form-control form-control-sm" value = {this.state.data.lname} onBlur = {this.getValue}/>
								</div>
							</div>	
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="surname">Surname</label>
				                        <input type="text" id="surname" name="surname" className="form-control form-control-sm" onBlur = {this.getValue}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="id_pass">ID/Passport</label>
				                        <input type="text" id="id_pass" name="id_pass" className="form-control" onBlur = {this.getValue}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="city">City/Town</label>
				                        <input type="text" id="city" name="city" className="form-control form-control-sm" onBlur = {this.getValue}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="estate">Estate/Locality</label>
				                        <input type="text" id="estate" name="estate" className="form-control form-control-sm" onBlur = {this.getValue}/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
				                        <label className="control-label" htmlFor="dob">DOB</label>
				                        <input type="date" id="dob" name="dob" placeholder="06/25/1980" className="form-control form-control-sm" onBlur = {this.getValue}/>
								</div>
							</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
								    <label htmlFor="t1" className="control-label">Describe yourself here</label>
								    <textarea id="t1" name = "description" className="form-control form-control-sm" rows="3" onBlur = {this.getValue}></textarea>
								</div>
							<div className="form-group">
								<img src={this.state.defaultProfile} width="150" height="150" className="img-circle span5"/>
								<input type="file" id="attach-file" multiple="" name = "profile_photo" onChange = {this._uploadFile}/>
			    				<div className="input-group">
								    <input type="text" readOnly="" className="form-control form-control-sm" placeholder="Upload Profile Photo" />
									    <span className="input-group-btn input-group-sm">
									      <button type="button" className="btn btn-fab">
									        <i className="pe-7s-paperclip pe-va"></i>
									      </button>
									    </span>
								</div>
							</div>
							<div className="col-md-12">
								<button className="btn btn-block btn-raised btn-info" onClick={this.onSave}>Save</button>
							</div>
						</div>
						</div>

		);
	}
});
var EducationBackgroundComponent = React.createClass({
	getValue: function( e ){
		e.preventDefault();
		e.stopPropagation();
		dataCollection_education[e.target.name] = e.target.value;
	},
	onSave: function( e ){
		e.preventDefault();
		e.stopPropagation();

		this.props.populateProfile( dataCollection_education );
	},
	_uploadFile: function( e ){
		e.preventDefault();
		e.stopPropagation();

		var file = e.target.files, form = new FormData(), name = e.target.name;

		$.each(file, function(index, val) {
			form.append(index, val);
		});
		this._sendAttachments( form, name );		
	},
	_sendAttachments: function( file, name ){
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
			dataCollection_education[ name ] = res['path'];
		});
	},
	render: function () {
		return (
						<div className="tab-pane" id="education" role="tabpanel">
							<div className="col-md-6">
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="primary">Prim. Sch./KCPE</label>
					                        <input type="text" id="primary" name="primary_school" className="form-control form-control-sm" onBlur = {this.getValue}/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="grade1">KCPE Grade</label>
					                        <input type="text" id="grade1" name="kcpe_grade" className="form-control form-control-sm" onBlur = {this.getValue}/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
									<input type="file" id="primary_cert" name = "primary_certificate" multiple="" onChange = {this._uploadFile}/>
				    				<div className="input-group">
					                        <input type="text" readOnly="" id="primary_cert" name="primary_cert" className="form-control form-control-sm" placeholder="Attach certificate" onBlur = {this.getValue}/>
					                        <span className="input-group-btn input-group-sm">
										      <button type="button" className="btn btn-fab">
										        <i className="pe-7s-paperclip pe-va pe-lg"></i>
										      </button>
										    </span>
									</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="secondary">High Sch./KCSE</label>
					                        <input type="text" id="secondary" name="secondary_school" className="form-control form-control-sm" onBlur = {this.getValue}/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="grade">KCSE Grade</label>
					                        <input type="text" id="grade" name="secondary_grade" className="form-control form-control-sm" onBlur = {this.getValue}/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
									<input type="file" id="primary_cert" multiple="" name = "secondary_certificate" onChange = {this._uploadFile}/>
				    				<div className="input-group">
					                        <input type="text" readOnly="" id="secondary_cert" name="secondary_cert" className="form-control form-control-sm" placeholder="Attach certificate" />
					                        <span className="input-group-btn input-group-sm">
										      <button type="button" className="btn btn-fab">
										        <i className="pe-7s-paperclip pe-va pe-lg"></i>
										      </button>
										    </span>
									</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="uni">College/Uni</label>
					                        <input type="text" id="uni" name="university" className="form-control form-control-sm" onBlur = {this.getValue}/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="grade2">Honors/GPA</label>
					                        <input type="text" id="grade2" name="university_grade" className="form-control form-control-sm" onBlur = {this.getValue}/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
									<input type="file" id="university_certificate" multiple="" name = "university_certificate" onChange = {this._uploadFile}/>
				    				<div className="input-group">
					                        <input type="text" readOnly="" id="uni_cert" name="uni_cert" className="form-control form-control-sm" placeholder="Attach Degree/Diploma" />
					                        <span className="input-group-btn input-group-sm">
										      <button type="button" className="btn btn-fab">
										        <i className="pe-7s-paperclip pe-va pe-lg"></i>
										      </button>
										    </span>
									</div>
									</div>
								</div>
							</div>
								<div className="col-md-6">
								

								<DynamicFields getValue = {this.getValue}/>


							<div className="col-md-12">
								<button className="btn btn-block btn-raised btn-info" onClick={this.onSave}>Save</button>
							</div>
								</div>
						</div>

		);
	}
});
var SkillsComponent = React.createClass({
	getValue: function( e ){
		e.preventDefault();
		e.stopPropagation();
		var data = {};
		dataCollection_skill[e.target.name] = e.target.value;
	},
	onSave: function( e ){
		e.preventDefault();
		e.stopPropagation();

		this.props.populateProfile( dataCollection_skill );
	},
	render: function () {
		return (
						<div className="tab-pane" id="skills" role="tabpanel">
							<div className="col-md-12">


								<DynamicFieldsSkills getValue = {this.getValue}/>


									<div className="col-md-12">
										<button className="btn btn-block btn-raised btn-info" onClick={this.onSave}>Save</button>
									</div>
									</div>
							</div>
						

		);
	}
});
var ProfileComponent = React.createClass ({
	getInitialState: function() {
		return { }
	},
	componentWillMount: function () {
		
	},
	componentWillUpdate: function () {

	},
	populateProfile: function( data ){
		console.log( data );
	},
	render: function () {
		return (
			<div>
			<form onSubmit={this.onSave}>
				<TabComponent /> 
				<div className="card">
					<div className="tab-content">

					<BasicDetailsComponent populateProfile = {this.populateProfile}/>
					<EducationBackgroundComponent populateProfile = {this.populateProfile}/>
					<SkillsComponent populateProfile = {this.populateProfile}/>

					</div>
				</div>
			</form>
			</div>
		);
	}
});
ReactDOM.render(<ProfileComponent />, document.getElementById('component'));