/* global data */

var $url = document.getElementById('photourl');
var image = document.querySelector('.image-blank');
var form = document.querySelector('form');
var $titleInfo = document.querySelector('input');
var $photoURL = document.querySelector('input[id="photourl"]');
var $notes = document.querySelector('textarea');
var $ul = document.querySelector('ul');
var $newButton = document.querySelector('.button-new');
var $entryPage = document.querySelector('form[data-view="entry-form"]');
var $entriesPage = document.querySelector('div[data-view="entries"]');
var $entriesButton = document.querySelector('a[href="#entries"]');
var $noEntriesTxt = document.querySelector('.no-entries');

function photoURL(event) {
  image.setAttribute('src', $url.value);
}
$url.addEventListener('input', photoURL);

function getDataEntry(event) {
  event.preventDefault();
  var objectData = {
    title: $titleInfo.value,
    photourl: $photoURL.value,
    notes: $notes.value,
    entryId: data.nextEntryId++
  };
  data.entries.unshift(objectData);
  image.setAttribute('src', 'images/placeholder-image-square.jpg');
  form.reset();
  $ul.prepend(newDataEntry(data.entries[0]));
  $entryPage.className = 'hidden';
  $entriesPage.className = 'current-entries';
  $noEntriesTxt.className = 'hidden no-entries column-full';
  $ul.className = 'new-entries';
}
form.addEventListener('submit', getDataEntry);

function newDataEntry(entry) {
  var newLi = document.createElement('li');
  newLi.className = 'row';
  newLi.setAttribute('entry-id', entry.entryId);
  var newDi = document.createElement('div');
  newDi.className = 'column-half';
  newLi.appendChild(newDi);
  var newImg = document.createElement('img');
  newImg.className = 'image-blank';
  newImg.setAttribute('src', entry.photourl);
  newDi.appendChild(newImg);
  var newDa = document.createElement('div');
  newDa.setAttribute('class', 'column-half');
  newLi.appendChild(newDa);
  var newHe = document.createElement('h3');
  newHe.textContent = entry.title;
  newDa.appendChild(newHe);
  var newDb = document.createElement('div');
  newDa.appendChild(newDb);
  var newDc = document.createElement('p');
  newDc.textContent = entry.notes;
  newDb.appendChild(newDc);
  return newLi;
}

function newEntry(event) {
  $entryPage.className = 'view';
  $entriesPage.className = 'current-entries hidden';
  $ul.className = 'hidden new-entries';
}
$newButton.addEventListener('click', newEntry);

function goToEntries(event) {
  $entryPage.className = 'hidden';
  $entriesPage.className = 'current-entries';
}
$entriesButton.addEventListener('click', goToEntries);

// var $liEntries = document.querySelectorAll('li');
// for (var i = 0; i < $liEntries.length; i++) {
//   if (data.entryId === +$liEntries[i].getAttribute('entry-id')) {
//     $liEntries[i].replaceWith(newDataEntry(data.editing));
//   }
// }

// function DOMContentLoaded(event) {
//   for (var i = 0; i < data.entries.length; i++) {
//     var $dataEntries = (data.entries[i]);
//     $ul.append($dataEntries);
//   }
// }
// $ul.addEventListener('change', DOMContentLoaded);

//   var allEntriesID = event.target.getAttribute('class');
//   for (var i = 0; i < data.entries.length; i++) {
//     if (data.entries[i].allEntries === allEntriesID) {
//       data.entries[i].isCompleted = event.target.checked;
//     }
//   }
// }
