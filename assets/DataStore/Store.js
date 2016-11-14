import { createStore } from 'redux';
import Reducer from './Reducer';

export default function configureStore( initialState = {userInfo: []}){
	return createStore( Reducer, initialState)
}