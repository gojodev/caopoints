function about_me() {
  var bday = new Date("06/08/2004");
  var today = new Date();

  // To calculate the time difference of two dates 
  var Difference_In_Time = today.getTime() - bday.getTime();
  Difference_In_Time = (Difference_In_Time / 1000);
  console.log(Difference_In_Time);
  let self_desc = document.getElementById("self_desc");
  self_desc.value;
}

about_me();