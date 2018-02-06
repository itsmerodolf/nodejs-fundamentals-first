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

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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
