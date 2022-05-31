
// review @media pokemon assignment to change the flex-basis when expanding the screen.
// use addEventListener for 'input' events on the

// document.addEventListener('submit', newEntry);

// function newEntry(event) {
// var newData = {};
// var
// }

// // add a form for creating a journal entry to the div[data-view]='entry-form'

// // edit the form so it looks nice on mobile phone and monitors

// // Use className to change src attribute for the photoURL
// // Use getAttribute src attribute

// The goal is to update the src attribute when a url is placed into the photoUrl.
// We would have to listen for any 'input'events (when the input value changes).
// assign a variable with the following: a document method that (in this case since we're using labels) takes the ID of the photo-url.

// USE var url = document.getElementByID('photo-url');

// url.addEventListener('input', funtion name)
// create a function that sets the attribute (updates src) of the img element when the input id='photo-url' changes value
// in order to do that, we have to take the img src (class=image-blank) and utilize DOM query and assign to a variable

// USE var image = document.querySelector('.image-blank');

// in a function it would be...
// function photoURL(event) {
//  image.setAttribute('src', url.value);
// }

var url = document.getElementById('photo-url');
var image = document.querySelector('.image-blank');
url.addEventListener('input', photoURL);

function photoURL(event) {
  image.setAttribute('src', url.value);
}
