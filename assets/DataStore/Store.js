import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from './Reducer';

 import logger from 'redux-logger';
 import thunk from 'redux-thunk';

//adding middleware to do serverRequests 

 let finalCreateStore = compose(
 	applyMiddleware(logger(), thunk)
 )(createStore)


export default function configureStore( initialState = {}, search_results = []){
	return finalCreateStore( Reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}