
let jobCategoryReducer = ( Categories = [], action ) => {
	switch( action.type ){
		case 'JOBS_CATEGORIES':
			return Object.assign([], Categories, action.data )
		default:
			return Categories;
	}
}

export default jobCategoryReducer;