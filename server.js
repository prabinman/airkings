const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('./webpack.config.js');

const port = process.env.NODE_ENV || 3000;

app.listen(port, () => {
    console.log('Server Started on port ' + port + '!\n');
});