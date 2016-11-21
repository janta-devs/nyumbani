import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import $ from 'jquery';

import {Router, Route, IndexRoute } from 'react-router';


import HeaderComponent from './components/HeaderComponent';

import store, { history } from '../DataStore/Store';


render(
	<Provider store={store}>
		<HeaderComponent />
	</Provider>, 
	document.getElementById('nav-bar'));