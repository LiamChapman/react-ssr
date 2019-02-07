import React from 'react';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import Client from './client/index.jsx';

/* Express settings */
const app  = express();
const PORT = process.env.PORT || 3334;
app.use(cors());
app.use(helmet());
app.use(express.static('./dist/assets'));
app.use(handleRender);

/* Handle React Application */
function handleRender(req, res) {
    const context   = {}; 
    const store     = configureStore({});    
    const body      = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <Client />
            </StaticRouter>
        </Provider>
    );
    const head = Helmet.renderStatic();
    console.log("➡️  SSR:", req.url, ", Status:", context.status||200);
    res.status(context.status||200).send(
        `<!DOCTYPE html>
        <html ${head.htmlAttributes.toString()}>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="initial-scale=1,width=device-width,maximum-scale=1,user-scalable=no,minimal-ui" />
                <link href="/styles/main.css" rel="stylesheet"></head>
                ${head.title.toString() || `<title>Default title</title>`}
                ${head.meta.toString()}
                ${head.link.toString()}
                ${head.base.toString()}
            </head>
            <body ${head.bodyAttributes.toString()}>
                ${head.noscript.toString()}
                <div id="root">${body}</div>
                <script type="text/javascript" src="/scripts/main.js"></script>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(store)};
                </script>
            </body>
        </html>`
    );
}

/* Listen for connections */
app.listen(PORT, () => {
    console.log(`💻 😎 Server is running on port ${PORT}`);
});
