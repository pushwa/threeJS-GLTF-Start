const path = require('path');
const express = require('express');
const app = express();

// Public folder
app.use(express.static(__dirname + '/public'));

// Three engine folder
app.use(
  '/build/',
  express.static(path.join(__dirname, 'node_modules/three/build'))
);

// Three module folder
app.use(
  '/jsm/',
  express.static(path.join(__dirname, 'node_modules/three/examples/jsm'))
);

// Listening
app.listen(3000);
