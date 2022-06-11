/* global data */

var $url = document.getElementById('photourl');
var image = document.querySelector('.image-blank');
var form = document.querySelector('form');
var $titleInfo = document.querySelector('input');
var $photoURL = document.querySelector('input[id="photourl"]');
var $notes = document.querySelector('textarea');
var $ul = document.querySelector('ul');
var $newButton = document.querySelector('.button-new');
var $entriesPage = document.querySelector('div[data-view="entries"]');
var $entriesButton = document.querySelector('a[href="#entries"]');
var $empty = document.querySelector('.empty-entries');

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
  data.view = 'entries';
  viewSwap();
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
  emptyEntries();
  return newLi;
}

function newEntry(event) {
  data.view = 'entry-form';
  viewSwap();
}
$newButton.addEventListener('click', newEntry);

function goToEntries(event) {
  data.view = 'entries';
  viewSwap();
}
$entriesButton.addEventListener('click', goToEntries);

function contentLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $ul.appendChild(newDataEntry(data.entries[i]));
    emptyEntries();
  }
}
window.addEventListener('DOMContentLoaded', contentLoaded);

function emptyEntries() {
  if (data.entries.length < 1) {
    $empty.className = 'empty-entries';
  } else {
    $empty.className = 'hidden';
  }
}

function viewSwap() {
  if (data.view === 'entry-form') {
    form.className = 'view';
    $entriesPage.className = 'view hidden';
  } else if (data.view === 'entries') {
    form.className = 'view hidden';
    $entriesPage.className = 'view';
  }
}
