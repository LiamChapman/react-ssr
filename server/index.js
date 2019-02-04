import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import cors from 'cors';
import configureStore from '../src/redux/store/configureStore';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Client from '../src/client/index.jsx';

/* Express settings */
const app  = express();
const PORT = process.env.PORT || 3334;
app.disable('x-powered-by');
app.use(cors());
app.use(express.static('./dist/assets'));
app.use(handleRender);

/* Handle React Application */
function handleRender(req, res) {    
    console.log(">>>> RENDER!");
    const context   = {}; 
    const store     = configureStore({});
    const indexFile = path.resolve('./dist/index.html');
    const html      = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <Client />
            </StaticRouter>
        </Provider>
    );
    console.log("URL: ", req.url); 
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
        }        
        res.status(context.status||200).send( 
            data.replace(
                '<div id="root"></div>',
                `
                <div id="root">${html}</div>
                <script>                
                    window.__PRELOADED_STATE__ = ${JSON.stringify(store)}
                </script>
                `
            )
        );
    });    
}

/* Listen for connections */
app.listen(PORT, () => {
    console.log(`💻 😎 Server is running on port ${PORT}`);
});
