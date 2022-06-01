/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntriesJSON = localStorage.getItem('code-journal-entries');
if (previousEntriesJSON !== null) {
  data = JSON.parse(previousEntriesJSON);
}

function storage(event) {
  var entriesJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-entries', entriesJSON);
}

window.addEventListener('beforeunload', storage);
