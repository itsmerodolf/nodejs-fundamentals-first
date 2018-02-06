// var obj = {
//   name: 'Rodolf'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Rodolf", "age": 24}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

/*Working with JSON
const fs = require ('fs');
// use this code to save a new note
var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
//JSON.stringify takes regular object and converts into a string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

//read their note use this code
var noteString = fs.readFileSync('notes.json');
//JSON.parse takes the string JSON converts it back.
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
*/
