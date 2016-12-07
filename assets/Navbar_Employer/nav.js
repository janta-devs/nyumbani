import React from 'react';
import { render } from 'react-dom';



import { Provider } from 'react-redux';

import {Router, Route, IndexRoute } from 'react-router';


import store, { history } from '../DataStore/Store';



import NavbarComponent from './components/NavbarComponent';

render(
	<Provider store={store}>
		<NavbarComponent store = {store}/>
	</Provider>, 
document.getElementById('NavCompoent'));