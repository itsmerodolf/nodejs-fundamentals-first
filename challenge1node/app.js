console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

/*applying add function in app.js
console.log('Results', notes.add(7, 10));
*/

/* Applying 3rd party modules. Lodash package installed.
console.log(_.isString(true));
console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Rodolf', 1, 'Rodolf', 2, 3, 4]);
console.log(filteredArray);
*/

// Getting input from user
 const argv = yargs.argv;
 var command = process.argv[2];
 console.log('Command:', command);
 //console.log('Process', process.argv);
 console.log('Yargs', argv);
 //console.log(process.argv);

 if (command === 'add') {
   //console.log('Adding new Note');
   var note = notes.addNote(argv.title, argv.body);
      if (note) {
        console.log('Note Created');
        notes.logNote(note);
      } else {
        console.log('Note title taken');
      }
 } else if (command === 'list') {
   //console.log('Listing all notes');
   notes.getAll();
 } else if (command === 'read') {
   //console.log('Reading note');
   var note = notes.getNote(argv.title);
      if (note) {
        console.log('Note Found');
        notes.logNote(note);
      } else {
        console.log('Note not found');
      }

 } else if (command === 'remove') {
   //console.log('Removing note');
   var noteRemove = notes.removeNote(argv.title);
   var message = noteRemove ? 'Note was removed' : 'Note not found';
   console.log(message);
 }else {
   console.log('Command not recognized');
 }
