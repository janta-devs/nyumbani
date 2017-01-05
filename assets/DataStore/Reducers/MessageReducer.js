let MessageReducer  = function( Messages = [], action ){
	switch( action.type ){
		case 'MY_MESSAGES':
			return Messages = Object.assign([], [ ...Messages], [ ...action.data] )
		case 'MARK_AS_READ': {
			if( Messages[action.id].status === 'read' ){
				return Messages;
			}
			else
			{
				return [
					Messages.slice(0, action.id), 
					{...Messages[action.id], status: 'read'},
					Messages.slice(action.id + 1)
				]
			}
		}
		default:
			return Messages;
	}
}

export default MessageReducer;