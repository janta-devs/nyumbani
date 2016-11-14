import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Main from './components/Main.js';

render(
	<Main />,
	document.getElementByid('content')
);