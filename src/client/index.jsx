import React from 'react';
import { 
    Switch, 
    Route
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import App from './components/App/index.jsx';
import NotFound from './NotFound.jsx';


const Test = () => (
    <div>
        <Helmet>
            <title>This is a test!</title>
        </Helmet>
        <h1>Test!</h1>
    </div>
);

const Bruh = () => (
    <div>
        <Helmet>
            <title>BRUUUUUUH</title>
        </Helmet>
        <h1>Bruh!</h1>
    </div>
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