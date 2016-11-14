
let Reducer  = function( state, action ){
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
		default:
			return state;
	}
}

export default Reducer;