import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import suggestionReducer from './suggestionReducer';

const rootReducer = combineReducers({
	search_results: searchReducer,
	suggestions: suggestionReducer
})

export default rootReducer;