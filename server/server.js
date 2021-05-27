const path = require('path');
const express = require('express');
var enforce = require('express-sslify');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const proxyUrl = process.env.PROXY_URL || "https://whistlesample-dev.herokuapp.com";
const publicPath = path.join(__dirname,'..', 'build');

const { createProxyMiddleware }  = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware(
    {
        target: proxyUrl,
        changeOrigin: true,
        logLevel: 'debug',
        ws: true
    });

// app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use('/v1', apiProxy);



app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Web Server is running on port ${port}!`);
});
