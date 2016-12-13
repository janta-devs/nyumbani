import React, { Component } from 'react';

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
		const inputWidth = {
			width: '100%',
		};
		const tdWidth = {
			width: '800px',
		};
		return (
			<div className="form-group label-floating">
				<form onSubmit = {this.submitHandler.bind(this)}>

					<table  style={inputWidth} >
						<tbody>
								<tr>
									<td style={tdWidth} >
										<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"  style={inputWidth} >
										    <input className="mdl-textfield__input" type="text" id="sample1" name = "search_term" value={this.props.search_term} ref = "search"
											/>
										   	<label className="mdl-textfield__label" htmlFor="smaple1">Search here for more employees</label>
										</div>
									</td>
									<td>
										<button className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
										     onClick = {this.handleClickAction.bind(this)} ><i className="material-icons">search</i>
										</button>
									</td>		    
								</tr>		    
							</tbody>
					</table>
				</form>
			</div>
		);
	}
}


export default SearchBar;
