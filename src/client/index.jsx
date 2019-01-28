import React from 'react';
import { 
    Switch, 
    Route
} from 'react-router-dom';
import App from './components/App/index.jsx';
import NotFound from './NotFound.jsx';

const Test = () => (
    <h1>Test!</h1>
);

const Bruh = () => (
    <h1>Bruh!</h1>
);

const Client = () => (
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="/test" exact component={Test} />
        <Route path="/bruh" exact component={Bruh} />
        <Route component={NotFound} />
    </Switch>
);

export default Client;