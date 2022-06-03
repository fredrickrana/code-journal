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

// OKAY OKAY... GAME PLAN
// sooooo... feature two's goal is to allow users to view entries
// according to the example, after typing in information to the title, photoURL, and notes section, and clicking the save button, the data entered will be generated in another tab or page within the app.
// NOW ACTUAL GAME PLAN

// Finish structuring the html and css of the entries section/tab
// view swapping to switch between the [data-view="entry-form"] and [data-view="entries"].
// Probably would have to you and if statement, an addEventListener, and finish brushing up on view-swapping.

// ignore the rest until you finish the first part... but thats what you have to do right now... LETS GO!!!!

// our focus is to generate the li element found in the html file
// the li element contains the list of items that consists of the new entries
// the objective is to use an addEventListener to call the function once the submit button is clicked
// query the DOM to return the entries id

// if entries is clicked, then gets transported to other tab (aka the [view data-view="entries"]) so then addeventlistener

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
