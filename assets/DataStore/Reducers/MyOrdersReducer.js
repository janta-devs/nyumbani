
let MyOrdersReducer  = function( MyOrders = [], action ){
	switch( action.type ){
		case 'POPULATE_MY_ORDERS':
			return MyOrders = Object.assign([], [ ...MyOrders], [ ...action.data] )
		default:
			return MyOrders;
	}
}

export default MyOrdersReducer;