import $ from 'jquery';

let Reducer  = function( state = "search_results", action ){
	switch( action.type ){
		case 'GET_USER_DATA':
			return Object.assign({}, state, {
					userInfo:[{
						firstname: action.firstname,
						lastname: action.lastname,
						id: action.id,
						profile_picture: action.profile_picture,
						employer: action.employer,
						verified: action.verified
					}, ...state.userInfo]
				});
		case 'SEARCH':
			return state;
		case 'SET_STATE':
			if( typeof(state.search_results) === 'object' && state.search_results.length > 0 ){
				state.search_results = [];
			}
			let dataArray = $.makeArray( action.data );
			let search_results = dataArray.map( (userData) =>{
				return Object.assign({}, state.search_results, userData)
			})
			return { search_results }
		default:
			return state;
	}
}

export default Reducer;