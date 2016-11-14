import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Main from './components/Main';
import configureStore from './DataStore/Store';

let initialState = {
	userInfo: [{

	}]
}

let store = configureStore( initialState );



render(
	<Provider store = {store}> 
		<Main />
	</Provider>, 
	document.getElementById('component')
);