
let jobAvailableReducer = ( JobsAvailable = [], action ) => {
	switch( action.type ){
		case 'JOBS_AVAILABLE':
			return Object.assign([], JobsAvailable, action.data )
		default:
			return JobsAvailable;
	}
}

export default jobAvailableReducer;