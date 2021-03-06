import { combineReducers } from 'redux';

//importing the reducer custom made to handle browser history, it will be tracked by the store 
import { routerReducer } from 'react-router-redux';


//importing the varous reducer files that are responsible 
//for protecting the individual pieces of state in their custody

import searchReducer from './searchReducer';
import suggestionReducer from './suggestionReducer';
import AccountUserReducer from './AccountUserReducer';
import EmployeeReducer from './EmployeeReducer';
import BiddedJobsReducer from './BiddedJobsReducer';
import jobReducer from './jobReducer';
import jobAvailableReducer from './jobAvailableReducer';
import allEmployeesReducer from './allEmployeesReducer';
import employeeCategoryReducer from './employeeCategoryReducer';
import MyOrdersReducer from './MyOrdersReducer';
import MessageReducer from './MessageReducer';
import SentMessageReducer from './SentMessageReducer';
import RequestsReducer from './RequestsReducer';


//combining the various Reducers into one single reducer file 
//the store only accepts only one reducer file, in this case{ it is the index.js reducer file}


const rootReducer = combineReducers({
	search_results: searchReducer,
	suggestions: suggestionReducer,
	AccountUser: AccountUserReducer,
	routing: routerReducer,
	EmployeeData: EmployeeReducer,
	Bids: BiddedJobsReducer,
	Jobs: jobReducer,
	JobsAvailable: jobAvailableReducer,
	AllEmployees: allEmployeesReducer,
	EmployeeCategories: employeeCategoryReducer,
	MyOrders: MyOrdersReducer,
	Messages: MessageReducer,
	SentMessages: SentMessageReducer,
	Requests: RequestsReducer,
});



export default rootReducer;