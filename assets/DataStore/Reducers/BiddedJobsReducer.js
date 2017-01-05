
let BiddedJobsReducer  = function( Bids = [], action ){
	switch( action.type ){
		case 'RECOMMEND':
			return Bids = Object.assign([], [ ...Bids], [ ...action.data] )
		default:
			return Bids;
	}
}

export default BiddedJobsReducer;