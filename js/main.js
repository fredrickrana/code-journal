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
// var $pencil = document.querySelector('.fa-pencil');

function photoURL(event) {
  $image.setAttribute('src', $url.value);
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
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  $ul.prepend(newDataEntry(data.entries[0]));
  data.view = 'entries';
  viewSwap();
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
    $form.className = 'view';
    $entriesPage.className = 'view hidden';
  } else if (data.view === 'entries') {
    $form.className = 'view hidden';
    $entriesPage.className = 'view';
  }
}

// function editEntry(event) {
//   for (var i = 0; i < $pencil.length; i++) {
//     if (event.target === $pencil[i]) {
//       console.log(event.target);
//       $form.className = 'view';
//       $entriesPage.className = 'view hidden';
//     }
//   }
// }

// $form.className = 'view';
// $entriesPage.className = 'view hidden';

// for (var i = 0; i < data.entries.length; i++) {
//   if (event.target === $pencil[i]) {
//     $form.className = 'view';
//     $entriesPage.className = 'view hidden';
//   }
// }
// $pencil.addEventListener('click', editEntry);

// use event.target of the clicked pencil
// create a loop that cycles through each entry until it is the correct event.target
// go to the form with the values of the object
// use replaceWith() to replace text when editing an entry
