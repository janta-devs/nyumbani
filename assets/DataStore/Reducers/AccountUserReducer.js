
let AccountUserReducer  = function( AccountUser = {}, action ){
	switch( action.type ){
		case 'ACCOUNT_USER_INFORMATION':
			return Object.assign({}, AccountUser, action.data)
		case 'REQUEST_EMPLOYEE':
			return 
		default:
			return AccountUser;
	}
}

export default AccountUserReducer;