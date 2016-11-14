let Actions = {
	getData: function( userData ){
		return{
			type: 'GET_USER_DATA',
			data: userData
		}
	}
}


export default Actions;