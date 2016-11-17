let ChangeAppModeReducer  = function( currentMode = 'search', action ){
	switch( action.type ){
		case 'CHANGE_APP_MODE':
			return currentMode = action.newMode;
		default:
			return currentMode;
	}
}

export default ChangeAppModeReducer;