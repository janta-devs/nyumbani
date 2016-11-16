import $ from 'jquery';

let Actions = 
{
	setState: function( information )
	{
		return{
			type: 'SET_STATE',
			data: information
		}
	},
	getData: function( userData )
	{
		return{
			type: 'GET_USER_DATA',
			data: userData
		}
	},
	search: function( term )
	{
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Timeline/get',
				type: 'POST',
				dataType: 'json',
				data: 'search_term='+term,
			})
			.done(function( res ) {
				self( Actions.setState( res ))
			})
		}
	}
}


export default Actions;