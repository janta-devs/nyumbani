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
	searchJobs: function( term )
	{

		//collects the search term from the component
		//it calls the clearstate method to clean the reducers
		return( dispatch ) => {
			
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Timeline/get_jobs',
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
	MarkAsRead: function( id ){
		return{
			type: 'MARK_AS_READ',
			id: id
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
				url: '/nyumbani/index.php/Profile/getAccountUserData',
				type: 'POST',
				dataType: 'json',
			})
			.done(function( response ) {
				self( Actions.accountUserInformation( response ))
				var data = JSON.stringify( response )
				try{
					localStorage.setItem('JantaAccountUser', data );
					return true;
				}
				catch( exception ){
					return false;
				}
			});
			
		}
	},
	IncrementRecommendation: function( data ){
		return{
			type: 'RECOMMEND',
			data: data
		}
	},
	countJobs: function( data ){
		return{
			type: 'POPULATE_MY_ORDERS',
			data: data
		}
	},
	populateJobs: function( data ){
		return{
			type: 'POPULATE_JOBS',
			data: data
		}
	},
	AddUserRecommendation: function( orderId, employeeId, employer_id ){
			return( dispatch ) => {
				var self = dispatch;
				$.ajax({
				url: '/nyumbani/index.php/Jobs/AddRecommendation',
				type: 'POST',
				dataType: 'json',
				data: {order_id: orderId, employee_login_id: employeeId, employer_login_id: employer_id}
			})
			.done(function( response ) {
				if( response['message'] === true || response['message'] === 'exists'){
					self( Actions.getEmployeeBids() )
					return true;
				}
			});
		}
	},
	SendMessage: function( data ){
			return( dispatch ) => {
				var self = dispatch;
				$.ajax({
				url: '/nyumbani/index.php/Jobs/SendMessage',
				type: 'POST',
				dataType: 'json',
				data: data
			})
			.done(function( response ) {
				if( response['message'] === true ){
					return true;
				}
			});
		}
	},
	populateEmployeeData: function( data ){
		return{
			type:'POPULATE_EMPLOYEE_DATA',
			data: data
		}
	},
	populateJobCategories: function( data ){
		return{
			type: 'JOBS_CATEGORIES',
			data: data
		}
	},
	populateEmployees: function( data ){
		return{
			type: 'POPULATE_EMPLOYEES',
			data: data
		}
	},
	populateEmployeeCategories:function( data ){
		return{
			type:'POPULATE_EMPLOYEE_CATEGORIES',
			data: data
		}
	},
	populateMessages: function( data ){
		return{
			type: 'MY_MESSAGES',
			data: data
		}
	},
	populateSentMessages: function( data ){
		return{
			type: 'SENT_MESSAGES',
			data: data
		}
	},
	populateRequests: function( data ){
		return{
			type: 'POPULATE_REQUESTS',
			data: data
		}
	},
	pullEmployeeData: function( id ){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Profile/getProfileData',
				type: 'POST',
				dataType: 'json',
				data: {'id':id},
			})
			.done(function( response ) {
				self( Actions.populateEmployeeData( response ))
			});
		}
	},
	pullAllEmployees: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Profile/localStoragedata',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){
				var data = JSON.stringify( response )
				self( Actions.populateEmployees( response ));
				try{
					localStorage.setItem('JantaUniqueEmployeesInformation', data )
					return true;
				}
				catch( exception ){
					return false;
				}
			});
		}
	},
	pullCategories: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Timeline/Categories',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){
				self(Actions.populateEmployeeCategories( response ))
				
				var data = JSON.stringify( response )
				try{
					localStorage.setItem('JantaUniqueCategories', data )
					return true;
				}
				catch( exception ){
					return false;
					
				}
			});
		}
	},
	pullJobs: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Profile/getJobs',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){

				self(Actions.populateJobs( response ));	// triggering the action to populate the jobs array

				var data = JSON.stringify( response )
				try{
					localStorage.setItem('JantaUniqueJobs', data )
					return true;
				}
				catch( exception ){
					return false;
				}
			});
		}
	},
	pullJobSpecificCategories: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Timeline/getJobCategories',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){				
				self(Actions.populateJobCategories( response ));				
				var data = JSON.stringify( response )
				try{
					localStorage.setItem('JantaJobCategories', data )
					return true;
				}
				catch( exception ){
					return false;
				}
			});
		}
	},
	getEmployeeBids: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Jobs/GetBids',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){			
				self( Actions.IncrementRecommendation( response ))				
			});
		}
	},
	getMyOrders: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Jobs/GetMyOrders',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){			
				self( Actions.countJobs( response ))				
			});
		}
	},
	getMyMessages: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Jobs/GetMyMessages',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){			
				self( Actions.populateMessages( response ))				
			});
		}
	},
	getMySentMessages: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Jobs/GetMySentMessages',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){			
				self( Actions.populateSentMessages( response ))				
			});
		}
	},
	getMyRequests: function(){
		return( dispatch ) => {
			var self = dispatch;
			$.ajax({
				url: '/nyumbani/index.php/Jobs/MyRequestedEmployee',
				type: 'POST',
				dataType: 'json'
			})
			.done(function( response ){			
				self( Actions.populateRequests( response ))				
			});
		}
	},
	sendRequest: function( data ){
			return( dispatch ) => 
			{
				var self = dispatch;
				$.ajax({
				url: '/nyumbani/index.php/Jobs/SendRequest',
				type: 'POST',
				dataType: 'json',
				data: data
			})
			.done(function( response ) {
				if( response['message'] === true ){
					self( Actions.populateRequests( [] ) )
					return true;
				}
			});
		}
	},
	MarkMessageAsRead: function( db_id, id ){
			return( dispatch ) => 
			{
				var self = dispatch;
				$.ajax({
				url: '/nyumbani/index.php/Jobs/MarkMessageAsRead',
				type: 'POST',
				dataType: 'json',
				data: {id: db_id}
			})
			.done(function( response ){
				if( response['message'] === true )
				{
					//self( Actions.MarkAsRead( id ) );
				}
			});
		}
	},


}


export default Actions;