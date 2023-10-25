function about_me() {
  var bday = new Date("06/08/2004");
  var today = new Date();

  // To calculate the time difference of two dates 
  var Difference_In_Time = today.getTime() - bday.getTime();
  Difference_In_Time = (Difference_In_Time / 1000) / 31556952;

  let age = Difference_In_Time.toFixed(3);
  document.getElementById("founder-name").innerHTML = `Emmanuel Koledoye (~${age})`;
}

about_me();