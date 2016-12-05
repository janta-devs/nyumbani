
let employeeCategoryReducer = ( EmployeeCategories = [], action ) => {
	switch( action.type ){
		case 'POPULATE_EMPLOYEE_CATEGORIES':
			return Object.assign([], EmployeeCategories, action.data )
		default:
			return EmployeeCategories;
	}
}

export default employeeCategoryReducer;