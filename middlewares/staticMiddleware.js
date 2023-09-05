const express = require('express');
const path = require('path');

const staticMiddleware = express.static(path.resolve('../public'));

module.exports = staticMiddleware;