import React, { Component } from 'react';

//there are props to be added

//onClick = {this.props.search}

class SearchBar extends Component{
	handleClickAction( e ){
		e.preventDefault();
		e.stopPropagation();
		this.props.searchAction( this.refs.search.value );
	}
	handleKeyPress( e ){
		e.preventDefault();
		e.stopPropagation();
		if( e.keyCode === 13 ){
			this.props.searchAction( this.refs.search.value );
		}
	}
	render() {
		return (
			<div className="form-group label-floating">
				<form>
					<div className="input-group">
					    <input className="form-control input-lg" type="text" id="sample1" name = "search_term" value={this.props.search_term} ref = "search"
						/>
					   	<label className="control-label" htmlFor="smaple1">Search here</label>
					    <p className="help-block">Enter a search term to find professionals near you.</p>
					    <span className="input-group-btn">
					    <button className = "btn btn-fab" onClick = {this.handleClickAction.bind(this)}><i className="pe-7s-search pe-va pe-lg"></i></button>
					    </span>
					</div>
				</form>

			</div>
		);
	}
}


export default SearchBar;
