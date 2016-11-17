import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import suggestionReducer from './suggestionReducer';
import ChangeAppModeReducer from './ChangeAppModeReducer';
import AccountUserReducer from './AccountUserReducer';

const rootReducer = combineReducers({
	search_results: searchReducer,
	suggestions: suggestionReducer,
	currentMode: ChangeAppModeReducer,
	AccountUser: AccountUserReducer
})

export default rootReducer;