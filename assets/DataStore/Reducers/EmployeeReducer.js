let EmployeeReducer  = function( EmployeeData = {}, action ){
	switch( action.type ){
		case 'POPULATE_EMPLOYEE_DATA':
			return Object.assign({}, EmployeeData, action.data)
		case 'RECOMMEND':
			return
		case 'REQUEST_EMPLOYEE':
			return 
		default:
			return EmployeeData;
	}
}

export default EmployeeReducer;