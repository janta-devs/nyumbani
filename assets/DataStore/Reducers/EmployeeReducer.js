let EmployeeReducer  = function( EmployeeData = [], action ){
	switch( action.type ){
		case 'POPULATE_EMPLOYEE_DATA':
				return Object.assign({}, EmployeeData, action.data )
		case 'CLEAR_STATE':
			return EmployeeData = []
		default:
			return EmployeeData;
	}
}

export default EmployeeReducer;