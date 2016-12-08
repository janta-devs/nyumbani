let MessageReducer  = function( Messages = [], action ){
	switch( action.type ){
		case 'POPULATE_MY_MESSAGES':
			return Messages = Object.assign([], [ ...Messages], [ ...action.data] )
		default:
			return Messages;
	}
}

export default MessageReducer;