/* global data */

var url = document.getElementById('photourl');
var image = document.querySelector('.image-blank');
url.addEventListener('input', photoURL);

function photoURL(event) {
  image.setAttribute('src', url.value);
}

var form = document.querySelector('form');
form.addEventListener('submit', getDataEntry);

function getDataEntry(event) {
  event.preventDefault();
  var $titleInfo = document.querySelector('input').value;
  var $photoURL = document.querySelector('input[id="photourl"]').value;
  var $notes = document.querySelector('textarea').value;
  var objectData = {
    title: $titleInfo,
    photourl: $photoURL,
    notes: $notes,
    entryId: data.nextEntryId++
  };
  data.entries.push(objectData);
  image.setAttribute('src', 'images/placeholder-image-square.jpg');
  form.reset();
}
