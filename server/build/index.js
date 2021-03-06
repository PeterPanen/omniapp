'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instantiate application.
var app = (0, _express2.default)();
var PORT = 3000;

// Mount middleware.
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

// Mount routes.
app.use(_routes2.default);

// Start listening for connections.
app.listen(PORT);