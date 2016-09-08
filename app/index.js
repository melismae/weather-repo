import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import './styles/index.scss';

import * as reducers from './reducers/index';
import App from './components/index';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducer, compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f))}>
        <App />
    </Provider>,
    document.getElementById('app')
);
