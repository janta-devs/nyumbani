import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import $ from 'jquery';

import {Router, Route, IndexRoute } from 'react-router';


import MainApp from './components/MainApp';
import PostJobComponent from './components/PostJobComponent';
import Main from './job-view/components/Main';
import CategoryEmployees from './components/CategoryEmployees';
import MyBids from './components/MyBids';
import MessageComponent from './components/MessageComponent';
import MessageView from './components/MessageView';

import store, { history } from '../DataStore/Store';



render(
	<Provider store={store}>
		<Router history={history}>
			<Route path = {`/nyumbani/index.php/home/employee_timeline`} component={MainApp}/>
			<Route path = {`/nyumbani/index.php/home/employee_timeline/`} component={MainApp}/>
			<Route path = {`/nyumbani/index.php/home/employee_timeline/ordernumber/:option`} component={Main}/>
			<Route path = {`/nyumbani/index.php/home/employee_timeline/Order/:option`} component={CategoryEmployees}/>
			<Route path = {`/nyumbani/index.php/home/employee_timeline/MyBids/`} component={MyBids}/>
			<Route path = {`/nyumbani/index.php/home/employee_timeline/Messages/`} component={MessageComponent}/>
			<Route path = {`/nyumbani/index.php/home/employee_timeline/Messages/Message/:id`} component={MessageView}/>

		</Router>
	</Provider>, 
	document.getElementById('component'));