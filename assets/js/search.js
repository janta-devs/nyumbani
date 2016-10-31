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
					    <button className = "btn btn-raised btn-warning" onClick = {this.props.search}><i className="pe-7s-search pe-va pe-3x"></i></button>
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
						<td>{this.props.first_name}</td>
						<td>{this.props.last_name}</td>
						<td>{this.props.gender}</td>
						<td>{this.props.email}</td>
						<td>{this.props.location}</td>
						<td>{this.props.ip_address}</td>
						<td>{this.props.profession}</td>
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
				<table className = "table table-striped table-hover">
						<thead>
							<tr>
								<td>First Name</td>
								<td>Last Name</td>
								<td>Gender</td>
								<td>Email</td>
								<td>Location</td>
								<td>IP Address</td>
								<td>Profession</td>
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
			url: '/nyumbani/index.php/Timeline/get',
			type: 'POST',
			dataType: 'json',
			data: 'search_term='+$n,
		})
		.done(function( res ) {
			
			self.setState({ data: res });
		})
	},
	render: function() {
		return (
			<div>
				<SearchBar search = {this.handleSearch}/><br /><br />
				<ResultTable data = {this.state.data}/>
			</div>
		);
	}
});

ReactDOM.render(<Search />, document.getElementById('component'));