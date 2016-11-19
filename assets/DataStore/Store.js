import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './Reducers/index';

import { browserHistory } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';


//importing middleware to do serverRequests
import logger from 'redux-logger';

import thunk from 'redux-thunk';

 
//implementing middleware for the serverRequests and logging 
 let finalCreateStore = compose(
 	applyMiddleware(logger(), thunk)
 )(createStore)


 //initialState of the application; they are initializing the values of our reducers

let initialState = {

};


const store = finalCreateStore( rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//exporting the history object that will be mapped over the Provider Component from redux
export const history = syncHistoryWithStore(browserHistory, store);

export default store;