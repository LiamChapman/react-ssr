import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

const App = () => (
    <div className="App">
        <Helmet>
            <title>THIS IS A MUTHA FLIPPIN APP YO!</title>
        </Helmet>
        <h1 className="h1__test">This is my app.</h1>
        <Link to="/test">Test link</Link>
    </div>
);

export default App;