
let allEmployeesReducer = function( AllEmployees = [], action ){
	switch( action.type ){
		case 'POPULATE_EMPLOYEES':
			return Object.assign([], AllEmployees, action.data )
		default:
			return AllEmployees;
	}
}

export default allEmployeesReducer;