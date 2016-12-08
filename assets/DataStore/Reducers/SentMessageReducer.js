let SentMessageReducer  = function( SentMessages = [], action ){
	switch( action.type ){
		case 'POPULATE_SENT_MESSAGES':
			return SentMessages = Object.assign([], [ ...SentMessages], [ ...action.data] )
		default:
			return SentMessages;
	}
}

export default SentMessageReducer;