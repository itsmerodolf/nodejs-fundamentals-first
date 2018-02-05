console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

//applying add function in app.js
console.log('Results', notes.add(7, 10));
