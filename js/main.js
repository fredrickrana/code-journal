/* global data */

var $url = document.getElementById('photourl');
var $image = document.querySelector('.image-blank');
var $form = document.querySelector('form');
var $titleInfo = document.querySelector('input');
var $photoURL = document.querySelector('input[id="photourl"]');
var $notes = document.querySelector('textarea');
var $ul = document.querySelector('ul');
var $newButton = document.querySelector('.button-new');
var $entriesPage = document.querySelector('div[data-view="entries"]');
var $entriesButton = document.querySelector('a[href="#entries"]');
var $empty = document.querySelector('.empty-entries');
var $newPage = document.querySelector('h1[id="new-entry-title"]');
var $editPage = document.querySelector('h1[id="edit-entry-title"]');

function photoURL(event) {
  $image.setAttribute('src', $url.value);
}
$url.addEventListener('input', photoURL);

function getDataEntry(event) {
  event.preventDefault();
  if (data.editing === null) {
    var objectData = {
      title: $titleInfo.value,
      photourl: $photoURL.value,
      notes: $notes.value,
      entryId: data.nextEntryId++
    };
    data.entries.unshift(objectData);
    $ul.prepend(newDataEntry(data.entries[0]));
  } else {
    data.editing.title = $titleInfo.value;
    data.editing.photourl = $photoURL.value;
    data.editing.notes = $notes.value;
    var $liElements = document.querySelectorAll('li');
    for (var i = 0; i < $liElements.length; i++) {
      if (data.editing.entryId === parseInt($liElements[i].getAttribute('data-entry-id'))) {
        $liElements[i].replaceWith(newDataEntry(data.editing));
      }
    }
  }
  $form.reset();
  data.view = 'entries';
  viewSwap();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.editing = null;
}
$form.addEventListener('submit', getDataEntry);

function newDataEntry(entry) {
  var newLi = document.createElement('li');
  newLi.className = 'row';
  newLi.setAttribute('data-entry-id', entry.entryId);
  var newDi = document.createElement('div');
  newDi.className = 'column-half';
  newLi.appendChild(newDi);
  var newImg = document.createElement('img');
  newImg.className = 'image-blank';
  newImg.setAttribute('src', entry.photourl);
  newDi.appendChild(newImg);
  var newDa = document.createElement('div');
  newDa.className = 'column-half';
  newLi.appendChild(newDa);
  var newDd = document.createElement('div');
  newDd.className = 'row';
  newDa.appendChild(newDd);
  var newDe = document.createElement('div');
  newDe.className = 'column-one-fifth';
  newDd.appendChild(newDe);
  var newHe = document.createElement('h2');
  newHe.textContent = entry.title;
  newDe.appendChild(newHe);
  var newDb = document.createElement('div');
  newDb.className = 'column-four-fifth right-text-align';
  newDd.appendChild(newDb);
  var newI = document.createElement('i');
  newI.className = 'fas fa-pencil';
  newDb.appendChild(newI);
  var newDf = document.createElement('div');
  newDa.appendChild(newDf);
  var newDc = document.createElement('p');
  newDc.className = 'entry-notes';
  newDc.textContent = entry.notes;
  newDf.appendChild(newDc);
  emptyEntries();
  newI.addEventListener('click', editIcon);
  return newLi;
}

function editIcon(event) {
  data.view = 'entry-form';
  viewSwap();
  $newPage.className = 'hidden';
  $editPage.className = 'view';
  addPreviousEnties();
  renderEditingEntries();
  photoURL();
}

function addPreviousEnties() {
  if (event.target.matches('i')) {
    var $li = event.target.closest('li');
    var $liEntry = parseInt($li.getAttribute('data-entry-id'));
    for (var i = 0; i < data.entries.length; i++) {
      if ($liEntry === data.entries[i].entryId) {
        data.editing = data.entries[i];
      }
    }
  }
}

function renderEditingEntries() {
  $titleInfo.value = data.editing.title;
  $photoURL.value = data.editing.photourl;
  $notes.value = data.editing.notes;
}

function newEntry(event) {
  data.view = 'entry-form';
  viewSwap();
  $newPage.className = 'view';
  $editPage.className = 'hidden';
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
    $form.className = 'view';
    $entriesPage.className = 'view hidden';
  } else if (data.view === 'entries') {
    $form.className = 'view hidden';
    $entriesPage.className = 'view';
  }
}
