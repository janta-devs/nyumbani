
let BiddedJobsReducer  = function( Bids = [], action ){
	switch( action.type ){
		case 'RECOMMEND':
		console.log( [...action.data] );
			return Bids = Object.assign([], [ ...Bids], [ ...action.data] )
		default:
			return Bids;
	}
}

export default BiddedJobsReducer;