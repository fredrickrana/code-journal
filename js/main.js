
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

var $url = document.getElementById('photo-url');
var $image = document.querySelector('.image-blank');
$url.addEventListener('input', photoURL);

function photoURL(event) {
  $image.setAttribute('src', $url.value);
}
