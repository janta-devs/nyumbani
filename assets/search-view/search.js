import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import $ from 'jquery';

import {Router, Route, IndexRoute } from 'react-router';


import MainApp from './components/MainApp';
import PostJobComponent from './components/PostJobComponent';
import Main from './profile-view/components/Main';
import CategoryEmployees from './components/CategoryEmployees';

import store, { history } from '../DataStore/Store';


render(
	<Provider store={store}>
		<Router history={history}>
			<Route path = {`/nyumbani/index.php/home/timeline`} component={MainApp}/>
			<Route path = {`/nyumbani/index.php/home/timeline/`} component={MainApp}/>
			<Route path = {`/nyumbani/index.php/home/timeline/Employee/:id`} component={Main}/>
			<Route path = {`/nyumbani/index.php/home/timeline/Category/:option`} component={CategoryEmployees}/>
		</Router>
	</Provider>, 
	document.getElementById('component'));