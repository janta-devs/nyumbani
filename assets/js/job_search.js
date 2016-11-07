//post job component starts here
var dataCollection = {};
var NoResultCell = React.createClass({
	render: function() {
		return (
					<tr>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.result}</td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td className="mdl-data-table__cell--non-numeric"></td>
						<td></td>
						<td></td>
					</tr>
		);
	}
});
var NoSearchResult = React.createClass({
	render: function() {
		var popu = this.props.data.message.map( (x,y) => <NoResultCell key = {y} result = {x["suggestion_"+y]} /> );
		return (
			<div>
					<table className = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<thead>
							<tr>
								<th className="mdl-data-table__cell--non-numeric"></th>
								<th className="mdl-data-table__cell--non-numeric"></th>
								<th className="mdl-data-table__cell--non-numeric"></th>
								<th className="mdl-data-table__cell--non-numeric">No results, did you mean?</th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
						{popu}
						</tbody>
						<tfoot>
								<tr>
									<td>_</td>
									<td>_</td>
									<td>_</td>
									<td>&copy; 2016</td>
									<td>_</td>
									<td>_</td>
									<td>_</td>
								</tr>
						</tfoot>
					</table>
			</div>
		)
	}
});
var BackComponent = React.createClass({
	render: function() {
		return (
		<div>
		   	<a onClick={() => this.props.changeAppMode('search')}
				className='btn btn-raised btn-info margin-bottom-1em' ref = "back">
				Back to Search
			</a>
		</div>
		);
	}
});
var PostJobComponent = React.createClass ({
	getInitialState: function () {
		return { finalData: [] };
	},
	componentDidMount: function () {

	},
	componentWillUnMount: function () {
		this.serverRequest.abort();
	},
	getValue: function( e ){
		e.preventDefault();
		e.stopPropagation();
		dataCollection[e.target.name] = e.target.value;
	},
	_uploadFile: function( e ){
		e.preventDefault();
		e.stopPropagation();

		var file = e.target.files, form = new FormData(), node = e.target;

		$.each(file, function(index, val) {
			form.append(index, val);
		});
		this._sendAttachments( form, node );		
	},
	_sendAttachments: function( file, el ){
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
	},
	onSave: function ( e ) {
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
	},
	render: function () {
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
			<BackComponent changeAppMode = {this.props.changeAppMode}/>
			<form onSubmit={this.onSave} method="post" encType = "multipart/form-data" >
				<div className="col-md-6">
					<div className="col-md-12">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="profession">I am Looking For</label>
		                        <input type="text" id="profession" name="profession" className="form-control" onBlur = {this.getValue} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="job_title">Job Title</label>
		                        <input type="text" id="job_title" name="job_title" className="form-control" onBlur = {this.getValue} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="location">Location</label>
		                        <input type="text" id="location" name="location" className="form-control" onBlur = {this.getValue} />
						</div>
					</div>	
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="startDate">Start Date</label>
		                        <input type="date" id="startDate" name="start" className="form-control"  data-dtp="" onBlur = {this.getValue} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="endDate">End Date</label>
		                        <input type="date" id="endDate" name="end" className="form-control"  onBlur = {this.getValue} />
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-group label-floating">
		                        <label className="control-label" htmlFor="budget">Budget/Remuneration</label>
		                        <input type="text" id="budget" name="budget" className="form-control"  onBlur = {this.getValue}/>
						</div>
					</div>
					</div>
					<div className="col-md-6">
						<div className="form-group label-floating">
						    <label htmlFor="t1" className="control-label">Job description goes here</label>
						    <textarea name = "description" id="t1" className="form-control" rows="5" onBlur = {this.getValue} ></textarea>
						</div>
						<div className="form-group">
						<input type="file" id="attach-file" multiple="" onChange = {this._uploadFile}/>
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
					<button className="btn btn-block btn-raised btn-info" onClick={this.onSave}>Submit</button>
				</div>
			</form>
			</div>
		);
	}
});
//component rendering the post job action button and other actions
var TopActionComponent = React.createClass ({
	render: function () {
		return (
			<div className="col-md-1 col-md-offset-11">
			<a onClick = {() => this.props.changeAppMode ('jobPosting')}
				className = 'btn btn-raised btn-lg btn-info' > Edit Profile
			</a>
			</div>	
		);
	}
});
//search bar component starts here
var SearchBar = React.createClass({
	render: function() {
		return (
			<div className="form-group label-floating">
				<form>
					<div className="input-group">
						<label className="control-label" htmlFor="smaple1">Search here</label>
					    <input className="form-control input-lg" type="text" id="sample1" name = "search_term"/>
					    <p className="help-block">Enter a search term to finds professionals near you.</p>
					    <span className="input-group-btn">
					    <button className = "btn btn-fab" onClick = {this.props.search}><i className="pe-7s-search pe-va pe-lg"></i></button>
					    </span>
					</div>
				</form>

			</div>
		);
	}
});

var TableCell = React.createClass({
	render: function() {
		return (
					<tr>
						<td className="mdl-data-table__cell--non-numeric">{this.props.first_name}</td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.last_name}</td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.gender}</td>
						<td className="mdl-data-table__cell--non-numeric">{this.props.location}</td>
						<td>Rating</td>
						<td>Profile</td>
						<td>Contact</td>
					</tr>
		);
	}
});

var ResultTable = React.createClass({
	render: function() {
		var populate = this.props.data.map( x => 
		<TableCell key = { x.id.toString() } first_name = {x.first_name} last_name = {x.last_name} gender = {x.gender} 
		email = {x.email} location = {x.location} ip_address = {x.ip_address.toString()} profession = {x.profession}/>);

		return (
				<table className = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<thead>
							<tr>
								<th className="mdl-data-table__cell--non-numeric">FIRST NAME</th>
								<th className="mdl-data-table__cell--non-numeric">LAST NAME</th>
								<th className="mdl-data-table__cell--non-numeric">GENDER</th>
								<th className="mdl-data-table__cell--non-numeric">LOCATION</th>
								<th>RATING</th>
								<th>PROFILE</th>
								<th>CONTACT</th>
							</tr>
						</thead>
						<tbody>
							{populate}
						</tbody>
						<tfoot>
								<tr>
									<td>_</td>
									<td>_</td>
									<td>_</td>
									<td>&copy; 2016</td>
									<td>_</td>
									<td>_</td>
									<td>_</td>
								</tr>
						</tfoot>
					</table>
		);
	}
});

var Search = React.createClass({
	getInitialState: function(){
		return { data: [], search_term: ""}
	},
	componentWillMount: function(){

	},
	componentWillUpdate: function(nxtProp, nxtState ){
		
	},
	handleSearch: function( e ){
		e.preventDefault();
		e.stopPropagation();

		var n = e.target , $n = $( n ).parent().parent().parent().parent().find('input[type="text"]').val();

		var self = this;
		$.ajax({
			url: '/nyumbani/index.php/Timeline/get_jobs',
			type: 'POST',
			dataType: 'json',
			data: 'search_term='+$n,
		})
		.done(function( res ) {
			( !res.hasOwnProperty('message') ) ? self.setState({ data: res }) : self.setState({data: res});
		})
	},
	render: function() {
		var checker = ( this.state.data.length != 0 && !this.state.data.hasOwnProperty('message')) ? 
		<ResultTable data = {this.state.data}/> : (this.state.data.length != 0 ) ? <NoSearchResult data = {this.state.data}/> : ""; // checks if the array is empty
		return (
			<div>
            	<TopActionComponent changeAppMode = {this.props.changeAppMode} /><br /><br /><br /><br />
				<SearchBar search = {this.handleSearch}/><br /><br />
				{checker}
			</div>
		);
	}
});
//main component for the timeline
var MainApp = React.createClass ({
	getInitialState: function () {
		return {
			currentMode: 'search',
			jobId: null
		};
	},
	changeAppMode: function(newMode, jobId) {
		this.setState ({currentMode: newMode});
		if(jobId !== undefined) {
			this.setState ({jobId: jobId});
		}
	},
	render: function () {
		var modeComponent = 
		<Search changeAppMode={this.changeAppMode}/>;
		switch(this.state.currentMode) {
			case 'search':
				break;
			case 'jobPosting':
				modeComponent = <PostJobComponent changeAppMode={this.changeAppMode}/>;
				break;
			default:
				break;
		}
		return modeComponent;
	}
});
ReactDOM.render(<MainApp />, document.getElementById('component'));