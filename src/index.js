import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import Client from './client/index.jsx';
import './styles/index.css';

/* Redux */
const preloadedState = window.__PRELOADED_STATE__ = {}; //initial state
delete window.__PRELOADED_STATE__;
const store         = configureStore(preloadedState);
const unsubscribe   = store.subscribe( () => {
    console.log("Store: ", store.getState());
});

/* Render / Hydrate App */
hydrate(
    <Provider store={ store }>
        <BrowserRouter>
            <Client />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);