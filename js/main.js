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
  data.entries.unshift(objectData);
  image.setAttribute('src', 'images/placeholder-image-square.jpg');
  form.reset();
}

// ^ END OF FEATURE #1

// ____________________________________________________________________________

// var entriesLink = document.querySelector('[href="#entries"]');
// var newButton = document.querySelector('.button-new');
// var dataView = event.target.getAttribute('data-view');

// entriesLink.addEventListener('click', goToEntries);

// function goToEntries(event) {
//   if (event.target.matches('[href="#entries"]') === entriesLink) {
//     console.log('anchor element was clicked!');
//   }
// }

// newButton.addEventListener('click', newEntries);

// function newEntries(event) {

// }

// var container = document.querySelector('.container');
// var view = document.querySelector('.view');

// container.addEventListener('click', changeView);

// function changeView(event) {
//   if (event.target.matches())

//   var attribute = event.target.getAttribute('data-view');
//   for (var i = 0; i < view.length; i++) {
//     if (view[i].getAttribute('data-view') !== attribute) {
//         view[i].className = 'hidden';
//       } else {
//         view[i].className = 'view';
//       }
//     }
//   }
// }

// function generateEntries(event) {
//   var newDi = document.createElement('div');
//   newDi.setAttribute('class', 'column-half');
//   var newDa = document.createElement('div');
//   newDa.setAttribute('class', 'column-half');
//   newDi.appendChild(newDa);
//   var Db = document.createElement('img');
//   newDb.setAttribute('src', 'photourl');
//   newDa.appendChild(newDb);
//   var newDc = document.createElement('div');
//   newDc.setAttribute('class', 'column-half');

// }

// var newEntries = document.querySelector('.row');
// for (var i = 0; i < data.entries.length; i++) {
//   var generateLi =
// }
