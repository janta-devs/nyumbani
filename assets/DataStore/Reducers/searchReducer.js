import $ from 'jquery';

let searchReducer  = function( search_results = [], action ){
	switch( action.type ){
		case 'SEARCH':
			return search_results;
		case 'SET_STATE':
			if( typeof(search_results) === 'object' && search_results.length > 0 ){
				search_results = [];
			}
			let dataArray = $.makeArray( action.data );
			return dataArray.map( (userData) =>{
				return Object.assign({}, search_results, userData)
			})
		case 'CLEAR_STATE':
			return search_results = [];

		default:
			return search_results;
	}
}

export default searchReducer;