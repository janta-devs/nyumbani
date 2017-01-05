let SentMessageReducer  = function( SentMessages = [], action ){
	switch( action.type ){
		case 'SENT_MESSAGES':
			return SentMessages = Object.assign([], [ ...SentMessages], [ ...action.data] )
			// return SentMessages = SentMessages.concat(...action.data);
		default:
			return SentMessages;
	}
}

export default SentMessageReducer;