var UserProfileComponent = React.createClass ({
	getInitialState: function () {
		return {
			profession: [],
			selectedProfessionId: -1,
			title: '',
			description: '',
			start: '',
			end: '',
			budget: '',
			successPost: null
		};
	},
	componentDidMount: function () {
		this.serverRequest = $.get("/nyumbani/index.php/timeline/readAllProfessions", function (profession) {
			this.setState ({
				profession: JSON.parse(profession)
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
		$.post("/nyumbani/index.php/timeline/createJob", {
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
		var professionOptions = this.state.profession.map ( function ( profession ) {
			return (
				<option key={profession.id} value={profession.id} > {profession.title} </option>
			);
		});
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
			<a href='#'
			onClick={() => this.props.changeAppMode('search')}
			className='btn btn-raised btn-info margin-bottom-1em'>
			Back to Search
			</a>
			<form onSubmit={this.onSave}>
				<fieldset>
				<legend>Basic Details</legend>
				<div className="col-md-6">
					<div className="col-md-4">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="email">E-mail Address</label>
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
		                        <label className="control-label" htmlFor="dob">DOB</label>
		                        <input type="date" id="dob" name="dob" placeholder="06/25/1980" className="form-control form-control-sm" value={this.state.dob} />
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
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
						    <label htmlFor="t1" className="control-label">Describe yourself here</label>
						    <textarea id="t1" className="form-control form-control-sm" rows="3"></textarea>
						</div>
						<div className="form-group">
						<input type="file" id="attach-file" multiple="" />
	    				<div className="input-group">
						    <input type="text" readOnly="" className="form-control form-control-sm" placeholder="Attach files" />
							    <span className="input-group-btn input-group-sm">
							      <button type="button" className="btn btn-fab">
							        <i className="pe-7s-paperclip pe-va pe-lg"></i>
							      </button>
							    </span>
						 </div>
						</div>
					</div>
				<div className="col-md-6">
					<button className="btn btn-block btn-raised btn-warning" onClick={this.onSave}>Submit</button>
				</div>
				</fieldset>
				<div className="col-md-6">
				<fieldset>
				<legend>Education and Profession Background</legend>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="primary">Primary School/KCSE</label>
		                        <input type="text" id="primary" name="primary" className="form-control form-control-sm" value={this.state.primary} />
						</div>
					</div>
					<div className="col-md-6">
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
				</fieldset>
				</div>
			</form>
			</div>
		);
	}
});
ReactDOM.render(<UserProfileComponent />, document.getElementById('component'));