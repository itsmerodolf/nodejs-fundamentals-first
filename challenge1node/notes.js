console.log('Starting notes.js');

/*module.exports.addNote = function () {
  console.log('addNote');
  return 'New note';
}; */

/* defining utility function in notes.js
module.exports.add = (a, b) => {
  return a + b;
};
*/

/* Adding and saving Notes
const fs = require('fs');

var addNote = (title, body) => {
    //console.log('Adding note', title, body);
    var notes = [];
    var note = {
      title,
      body
    };

    try {
      var notesString = fs.readFileSync('notes-data.json');
      notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
      notes.push(note);
      fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting Note', title);
}

var removeNote = (title) => {
  console.log('Removing Note', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
*/
