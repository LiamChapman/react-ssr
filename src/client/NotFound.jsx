import React from 'react';

export default ({ staticContext = {} }) => {
    staticContext.status = 404;
    return( 
        <div>
            <h1>404 Error</h1>
            <h2>Page not found.</h2>
        </div>        
    );
}