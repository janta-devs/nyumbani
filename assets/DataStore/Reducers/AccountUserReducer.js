import $ from 'jquery';

let AccountUserReducer  = function( AccountUser = {}, action ){
	switch( action.type ){
		case 'ACCOUNT_USER_INFORMATION':
			if( typeof(AccountUser) === 'object' && AccountUser.length > 0 ){
				AccountUser = {};
			}
			let dataArray = $.makeArray( action.data );
			return dataArray.map( (userData) =>{
				return Object.assign({}, AccountUser, userData)
			})
		case 'RECOMMEND':
			return
		case 'REQUEST_EMPLOYEE':
			return 
		default:
			return AccountUser;
	}
}

export default AccountUserReducer;