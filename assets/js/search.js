var SearchBar = React.createClass({
	render: function() {
		return (
			<div>
					<form>
					    <input className="mdl-textfield__input" type="text" id="sample1" name = "search_term"/>
					    <button className = "btn btn-primary" onClick = {this.props.search}>Search</button>
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
				<table className = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<thead className = "mdl-data-table__cell--non-numeric">
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

		var n = e.target , $n = $( n ).parent();

		var self = this;

		$.ajax({
			url: '/nyumbani/index.php/welcome/search',
			type: 'POST',
			dataType: 'json',
			data: $n.serialize(),
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