import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import {Router, Route, IndexRoute } from 'react-router';


import store, { history } from '../DataStore/Store';




import PostJobComponent from './component/PostJobComponent';



render( 
	<Provider store={store}>
		<PostJobComponent />
	</Provider>, 
	document.getElementById('component'));