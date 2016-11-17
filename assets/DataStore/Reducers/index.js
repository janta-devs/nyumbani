import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import suggestionReducer from './suggestionReducer';
import ChangeAppModeReducer from './ChangeAppModeReducer';

const rootReducer = combineReducers({
	search_results: searchReducer,
	suggestions: suggestionReducer,
	currentMode: ChangeAppModeReducer
})

export default rootReducer;