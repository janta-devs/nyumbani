import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import $ from 'jquery';

import {Router, Route, IndexRoute } from 'react-router';


import MainApp from './components/MainApp';
import PostJobComponent from './components/PostJobComponent';
import Main from '../profile-view/components/Main';

import store, { history } from '../DataStore/Store';


render(
	<Provider store={store}>
		<Router history={history}>
			<Route path = {`/nyumbani/index.php/home`} component={MainApp}/>
			<Route path = {`/nyumbani/index.php/home/`} component={MainApp}/>
			<Route path = {`/nyumbani/index.php/home/PostJob`} component={PostJobComponent}/>
			<Route path = {`/nyumbani/index.php/home/Employee/:id`} component={Main}/>
		</Router>
	</Provider>, 
	document.getElementById('component'));