
let jobReducer = function( Jobs = [], action ){
	switch( action.type ){
		case 'POPULATE_JOBS':
			return Object.assign([], Jobs, action.data )
		default:
			return Jobs;
	}
}

export default jobReducer;