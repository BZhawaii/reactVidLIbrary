import ReactDOM from 'react-dom';
import React from 'react';
import { Router } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import routes from './routes';

// export const history = createBrowserHistory();
const store = configureStore();

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
    // <h1>Hello World</h1>,
    <Provider store={store}>
       <Router routes={routes} />
     </Provider>, document.getElementById('root')
);
