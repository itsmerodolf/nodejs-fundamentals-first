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

// Adding and saving Notes
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    //console.log('Adding note', title, body);
    var notes = fetchNotes();
    var note = {
      title,
      body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
      notes.push(note);
      saveNotes(notes);
      return note;
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
