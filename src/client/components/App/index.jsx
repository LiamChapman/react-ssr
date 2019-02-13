import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Ralph from '../../../images/ralph-1.jpg';

const handleClick = e => alert('waddup')

const App = () => {
    console.log(Ralph);
    return(<div className="App">
        <Helmet>
            <title>THIS IS A MUTHA FLIPPIN APP YO!</title>
        </Helmet>
        <h1 className="h1__test">This is my app.</h1>
        <img src={Ralph} alt="Ralphie Boy!" />
        <Link to="/test">Test link</Link>
        <button onClick={ handleClick }>waddup</button>
    </div>)
};

export default App;