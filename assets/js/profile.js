var UserProfileComponent = React.createClass ({
	getInitialState: function () {
		return {
			data: [],
			successPost: null
		};
	},
	componentDidMount: function () {
		this.serverRequest = $.get("", function (profession) {
			this.setState ({
			});
		}.bind(this));
		$('.page-header h1').text('Post A Job');
	},
	componentWillUnMount: function () {
		this.serverRequest.abort();
	},
	onProfessionChange: function ( e ) {
		this.setState ({selectedProfessionId: e.target.value});
	},
	onTitleChange: function ( e ) {
		this.setState ({title: e.target.value});
	},
	onDescriptionChange: function ( e ) {
		this.setState ({
			description: e.target.value
		});
	},
	onStartChange: function ( e ) {
		this.setState ({
			start: e.target.value
		});
	},
	onEndChange: function ( e ) {
		this.setState ({end: e.target.value});
	},
	onBudgetChnage: function ( e ) {
		this.setState ({
			budget: e.target.value
		});
	},
	onSave: function ( e ) {
		$.post("", {
			profession_id: this.state.selectedProfessionId,
			title: this.state.title,
			description: this.state.description,
			start: this.state.start,
			end: this.state.end,
			budget: this.state.budget
		},
		function (res) {
			this.setState ({successPost: res});
			this.setState ({title: ""});
			this.setState ({description: ""});
			this.setState ({start: ""});
			this.setState ({end: ""});
			this.setState ({budget: ""});
			this.setState ({selectedProfessionId: -1});
		}.bind(this));
		e.preventDefault ();
	},
	render: function () {
		// var professionOptions = this.state.profession.map ( function ( profession ) {
		// 	return (
		// 		<option key={profession.id} value={profession.id} > {profession.title} </option>
		// 	);
		// });
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
			<a href='/nyumbani/index.php/timeline/'
			className='btn btn-raised btn-info margin-bottom-1em'>
			Back to Search
			</a>
			<form onSubmit={this.onSave}>
				<div className="card">
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
					<div className="tab-content">
						<div className="tab-pane active" id="basic" role="tabpanel">
							<div className="col-md-6">
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="email">E-mail</label>
				                        <input type="text" id="email" name="email" className="form-control form-control-sm" value={this.state.email_add} />
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="phone">Phone Number</label>
				                        <input type="tel" id="phone" name="phone" className="form-control form-control-sm" value={this.state.phone} />
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="email">Profession</label>
				                        <input type="text" id="profession" name="profession" className="form-control form-control-sm" value={this.state.email_add} />
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="firstname">First Name</label>
				                        <input type="text" id="firstname" name="firstname" className="form-control form-control-sm" value={this.state.firstname} />
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="lastname">Last Name</label>
				                        <input type="text" id="lastname" name="lastname" className="form-control form-control-sm" value={this.state.lastname} />
								</div>
							</div>	
							<div className="col-md-4">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="surname">Surname</label>
				                        <input type="text" id="surname" name="surname" className="form-control form-control-sm" value={this.state.surname} />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="id_pass">ID/Passport</label>
				                        <input type="text" id="id_pass" name="id_pass" className="form-control" value={this.state.id_pass} />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="city">City/Town</label>
				                        <input type="text" id="city" name="city" className="form-control form-control-sm" value={this.state.city} />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
				                        <label className="control-label" htmlFor="estate">Estate/Locality</label>
				                        <input type="text" id="estate" name="estate" className="form-control form-control-sm" value={this.state.estate} />
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
				                        <label className="control-label" htmlFor="dob">DOB</label>
				                        <input type="date" id="dob" name="dob" placeholder="06/25/1980" className="form-control form-control-sm" value={this.state.dob} />
								</div>
							</div>
							</div>
							<div className="col-md-6">
								<div className="form-group label-floating">
								    <label htmlFor="t1" className="control-label">Describe yourself here</label>
								    <textarea id="t1" className="form-control form-control-sm" rows="3"></textarea>
								</div>
							<div className="form-group">
								<img src="http://localhost/nyumbani/assets/node_modules/bootstrap/dist/images/anony.jpg" width="150" height="150" className="img-circle span5"/>
								<input type="file" id="attach-file" multiple="" />
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
						<div className="tab-pane" id="education" role="tabpanel">
							<div className="col-md-6">
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="primary">Prim. Sch./KCPE</label>
					                        <input type="text" id="primary" name="primary" className="form-control form-control-sm" value={this.state.primary} />
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="grade1">KCPE Grade</label>
					                        <input type="text" id="grade1" name="grade1" className="form-control form-control-sm" value={this.state.secondary} />
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
									<input type="file" id="primary_cert" multiple="" />
				    				<div className="input-group">
					                        <input type="text" readOnly="" id="primary_cert" name="primary_cert" className="form-control form-control-sm" value={this.state.primary_cert} placeholder="Attach certificate" />
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
					                        <input type="text" id="secondary" name="secondary" className="form-control form-control-sm" value={this.state.secondary} />
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="grade">KCSE Grade</label>
					                        <input type="text" id="grade" name="grade" className="form-control form-control-sm" value={this.state.secondary} />
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
									<input type="file" id="primary_cert" multiple="" />
				    				<div className="input-group">
					                        <input type="text" readOnly="" id="secondary_cert" name="secondary_cert" className="form-control form-control-sm" value={this.state.secondary_cert} placeholder="Attach certificate" />
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
					                        <input type="text" id="uni" name="uni" className="form-control form-control-sm" value={this.state.uni} />
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="grade2">Honors/GPA</label>
					                        <input type="text" id="grade2" name="grade2" className="form-control form-control-sm" value={this.state.uni} />
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
									<input type="file" id="uni_cert" multiple="" />
				    				<div className="input-group">
					                        <input type="text" readOnly="" id="uni_cert" name="uni_cert" className="form-control form-control-sm" value={this.state.uni_cert} placeholder="Attach Degree/Diploma" />
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
									<div className="form-group label-floating">
										<div className="input-group">
					                        <label className="control-label" htmlFor="past_job">Past Employment</label>
					                        <input type="text" id="past_job" name="past_job" className="form-control form-control-sm" value={this.state.past_job} />
					                        <span className="input-group-btn input-group-sm">
										      <button type="button" className="btn btn-fab btn-fab-sm">
										        <i className="pe-7s-plus pe-va pe-lg"></i>
										      </button>
										    </span>
										    </div>
									</div>
							<div className="col-md-12">
								<button className="btn btn-block btn-raised btn-info" onClick={this.onSave}>Save</button>
							</div>
								</div>
						</div>
						<div className="tab-pane" id="skills" role="tabpanel">
							<div className="col-md-12">
								<div className="col-md-6">
									<div className="form-group label-floating">
					                        <label className="control-label" htmlFor="skill">Add Skill</label>
					                        <input type="text" id="skill" name="skill" className="form-control form-control-sm" value={this.state.past_job} />
									</div>
									</div>
								<div className="col-md-6">
									<div className="form-group label-floating">
										<div className="input-group">
					                        <label className="control-label" htmlFor="mode">Acquisition Mode</label>
					                        <input type="text" id="mode" name="mode" className="form-control form-control-sm" value={this.state.past_job} />
					                        <span className="input-group-btn input-group-sm">
										      <button type="button" className="btn btn-fab btn-fab-sm">
										        <i className="pe-7s-plus pe-va pe-lg"></i>
										      </button>
										    </span>
										    </div>
									</div>
									<div className="col-md-12">
										<button className="btn btn-block btn-raised btn-info" onClick={this.onSave}>Save</button>
									</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</form>
			</div>
		);
	}
});
ReactDOM.render(<UserProfileComponent />, document.getElementById('component'));