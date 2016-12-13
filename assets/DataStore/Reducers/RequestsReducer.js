let RequestsReducer  = function( Requests = [], action ){
	switch( action.type ){
		case 'POPULATE_REQUESTS':
			return Requests = Object.assign([], [ ...Requests], [ ...action.data] )
		default:
			return Requests;
	}
}

export default RequestsReducer;