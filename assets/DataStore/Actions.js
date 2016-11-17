import $ from 'jquery';

let Actions = 
{
	clearState: function(){
		//clears  the state of the requisite reducer
		return{
			type: 'CLEAR_STATE'
		}
	},
	setState: function( information )
	{
		//loads the reducer with the required results from the search operation
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
	getSuggestions: function( suggestions ){
		//loads suggestion from the server
		return{
			type:'GET_SUGGESTIONS',
			data: suggestions
		}
	},
	search: function( term )
	{

		//collects the search term from the component
		//it calls the clearstate method to clean the reducers
		return( dispatch ) => {
			
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Timeline/get',
				type: 'POST',
				dataType: 'json',
				data: 'search_term='+term,
			})
			.done(function( res ) {
				if( res.hasOwnProperty('message') === true ){
					self( Actions.clearState() )
					self( Actions.getSuggestions( res ))
				}
				else
				{
					self( Actions.clearState() )
					self( Actions.setState( res ))
				}
			})
		}
	},
	changeAppMode: function( newMode ){
		return{
			type: 'CHANGE_APP_MODE',
			newMode: newMode,
		}
	}
}


export default Actions;