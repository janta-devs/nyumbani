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
		//changing the AppMode (It is simpler using Actions as the data is always synchronized)
		return{
			type: 'CHANGE_APP_MODE',
			newMode: newMode,
		}
	},
	accountUserInformation: function( res ){
		//setting up data of the person who has been logged into the system
		return{
			type: 'ACCOUNT_USER_INFORMATION',
			data: res
		}
	},
	pullAccountUserData: function(){
		return(  dispatch ) =>{
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/profile/getProfileData',
				type: 'POST',
				dataType: 'json',
			})
			.done(function( res ) {
				self( Actions.accountUserInformation( res ))
			});
			
		}
	},
	IncrementRecommendation: function( id ){
		return{
			type: 'RECOMMEND',
			data: id
		}
	},
	AddUserRecommendation: function( id ){
			return( dispatch ) => {
				var self = dispatch;
				$.ajax({
				url: 'http://localhost/nyumbani/index.php/profile/getRecommendations',
				type: 'POST',
				dataType: 'json',
				data: id,
			})
			.done(function( response ) {
				console.log( response );
				self( Actions.IncrementRecommendation( res ))
			});
		}
	}

}


export default Actions;