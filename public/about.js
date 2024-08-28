document.getElementById("year").innerHTML = new Date().getFullYear();


function about_me() {
  var bday = new Date("06/08/2004");
  var today = new Date();

  // To calculate the time difference of two dates 
  var time_diff = today.getTime() - bday.getTime();
  time_diff = (time_diff / 1000) / 31556952;

  let age = time_diff.toFixed(3);
  document.getElementById("founder-name").innerHTML = `Emmanuel Koledoye (~${age})`;
}

about_me();

var gojodev = document.getElementById('gojodev');
gojodev.addEventListener('mouseover', () => {

  gojodev.classList.remove("fadeIn");
  gojodev.offsetWidth;
  gojodev.classList.add("fadeIn");

  gojodev.src = "images/gojodev.webp";
});

gojodev.addEventListener('mouseout', () => {

  gojodev.classList.remove("fadeIn");
  gojodev.offsetWidth;
  gojodev.classList.add("fadeIn");

  gojodev.src = "images/logo.webp";
});

const DarkReader = require('darkreader');
DarkReader.auto({
  brightness: 100,
  contrast: 100,
  darkSchemeTextColor: 'white',
});