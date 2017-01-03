import React, { Component } from 'react';

import TopActionComponent from './TopActionComponent';
import ResultTable from './ResultTable';
import SearchBar from './SearchBar';
import NoSearchResult from './NoSearchResult';
import Categories from './Categories';

class Search extends Component
{
	constructor( context, props )
	{
		super( context, props );
		this.state = {
			data: [], 
			search_term: "",
			onFocus: false
		}
	}
	onChange(){
		// (this.state.onFocus === false && this.props.data.length === 0 ) ? this.setState({onFocus: true}) : this.setState({onFocus: false });
		// console.log( this.state.onFocus );
	}
	render() {
		var checker = ( this.props.data.length !== 0 && !this.props.data.hasOwnProperty('message') ) ? 
		<ResultTable data = {this.props.data} State = {this.props.State} /> : (this.props.suggestions.length !== 0 ) ? <NoSearchResult data = {this.props.suggestions} searchAction = {this.props.searchAction}/> : ""; // checks if the array is empty
		return (			
				<div className="mdl-cell mdl-cell--12-col" >
					<section className="content with-container">
            			<TopActionComponent State = {this.props.State} AccountUser = {this.props.AccountUser} /><br />
					</section>
					<section className=	"content with-container" >
						<div id="new-items">
							<div className="row">
								<div className="column l-3-4 recommendations">
									<SearchBar searchAction = {this.props.searchAction} onChange = {this.onChange.bind(this)}/>
									{checker}
								</div>
								 {(this.state.onFocus === false) ? <Categories State = {this.props.State}/> : "" } 							
							</div>
						</div>	
					</section>
				</div>	
		);
	}
}
export default Search;
