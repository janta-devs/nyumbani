import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from '../DataStore/Store';

import Admin from './components/Admin';

render( 
	<Provider store={store}>
		<Router history={history}>
			<Route path = {`/nyumbani/index.php/admin/main`} component={Admin}/>
			<Route path = {`/nyumbani/index.php/admin/main/`} component={Admin}/>
		</Router>
	</Provider>, 
document.getElementById('component'));