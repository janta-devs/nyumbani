import React { Component } from 'react';

//there are props to be added

class SearchBar extends Component{
	render() {
		return (
			<div className="form-group label-floating">
				<form>
					<div className="input-group">
						<label className="control-label" htmlFor="smaple1">Search here</label>
					    <input className="form-control input-lg" type="text" id="sample1" name = "search_term" value={this.props.search_term}/>
					    <p className="help-block">Enter a search term to find professionals near you.</p>
					    <span className="input-group-btn">
					    <button className = "btn btn-fab" onClick = {this.props.search}><i className="pe-7s-search pe-va pe-lg"></i></button>
					    </span>
					</div>
				</form>

			</div>
		);
	}
}


export default SearchBar;
