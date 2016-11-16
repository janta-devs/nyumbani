import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from './Reducer';

 import logger from 'redux-logger';
 import thunk from 'redux-thunk';

//adding middleware to do serverRequests 

 let finalCreateStore = compose(
 	applyMiddleware(logger(), thunk)
 )(createStore)


export default function configureStore( initialState = {userInfo: []}){
	return createStore( Reducer, initialState)
}