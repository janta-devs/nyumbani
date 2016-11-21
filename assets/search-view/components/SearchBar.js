import React, { Component } from 'react';

//there are props to be added

//onClick = {this.props.search}

class SearchBar extends Component{
	handleClickAction( e ){
		e.preventDefault();
		e.stopPropagation();
		this.props.searchAction( this.refs.search.value );
	}
	submitHandler( e ){
		e.preventDefault();
		e.stopPropagation();
		this.props.searchAction( this.refs.search.value );
	}
	render() {
		return (
			<div className="form-group label-floating">
				<form onSubmit = {this.submitHandler.bind(this)}>
					<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					    <input className="mdl-textfield__input" type="text" id="sample1" name = "search_term" value={this.props.search_term} ref = "search"
						/>
					   	<label className="mdl-textfield__label" htmlFor="smaple1">Search here</label>
					    <button className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick = {this.handleClickAction.bind(this)}><i className="material-icons">search</i></button>
					   
					</div>
				</form>

			</div>
		);
	}
}


export default SearchBar;
