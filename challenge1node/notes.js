console.log('Starting notes.js');

module.exports.addNote = function () {
  console.log('addNote');
  return 'New note';
};

// defining utility function in notes.js
module.exports.add = (a, b) => {
  return a + b;
};
