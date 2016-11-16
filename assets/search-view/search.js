import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import $ from 'jquery';

import MainApp from './components/MainApp';
import configureStore from '../DataStore/Store';



render(<MainApp />, document.getElementById('component'));