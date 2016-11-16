import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import $ from 'jquery';

import MainApp from './components/MainApp';
import configureStore from '../DataStore/Store';


let InitialState = {
	search_results: []
};

let store = configureStore( InitialState );

render(
	<Provider store={store}>
		<MainApp />
	</Provider>, 
	document.getElementById('component'));