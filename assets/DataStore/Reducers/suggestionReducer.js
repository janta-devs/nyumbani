import $ from 'jquery';

let suggestionReducer  = function( suggestions = [], action ){
	switch( action.type ){
		case 'GET_SUGGESTIONS':
			if( typeof( suggestions ) === 'object' && suggestions.length > 0 ){
				suggestions = [];
			}
			let dataArray = $.makeArray( action.data.message );
			return dataArray.map( (userData) => {
				return Object.assign({}, suggestions, userData)
			})
		case 'CLEAR_STATE':
			return suggestions = []
		default:
			return suggestions;
	}
}

export default suggestionReducer;