import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // tldr; there"s prob no need to tell me that my apikey is exposed (not that i don"t like feedback or fan interaction..) 
  apiKey: "AIzaSyBnpE-YlKKvHwE9pi3CwhKf1Tq7nthPycE", // you there! even js obfuscation can"t fully hide this key and the client side needs access to this to correctly run and just having this key isn"t enough to cause any kind of damage because an imposter would need more than just the key to do anything of damage in my particular case or to be able to access any kind of sensitive information
  authDomain: "caopoints-info.firebaseapp.com",
  databaseURL: "https://caopoints-info-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "caopoints-info",
  storageBucket: "caopoints-info.appspot.com",
  messagingSenderId: "615159418744",
  appId: "1:615159418744:web:35978469f92b90b5c9828d",
  measurementId: "G-08383DC9PC"
};

var app = initializeApp(firebaseConfig);
var storage = getStorage();

getPerformance(app);
getAnalytics(app);

function hide_rows() {
  "use strict";
  for (var i = 0; i < 3; i++) {
    var row = "row" + String(i + 1);
    document.getElementById(row).style.display = "none";
  }

  document.getElementById("invalid_input").style.display = "inline";
}

// hide the rows when the page loads
hide_rows();

function set_sys_theme() {
  "use strict";
  var r = document.querySelector(":root");

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    r.style.setProperty("--white", "black");
    r.style.setProperty("--black", "white");
  }
  else {
    r.style.setProperty("--white", "white");
    r.style.setProperty("--black", "black");
  }
}

set_sys_theme();

document.getElementById("bool_hl_maths").addEventListener("click", is_hl_maths);
var bool_hl_maths = true;
var add_25 = 25;
var counter = 1;
function is_hl_maths() {
  "use strict";
  if (counter == 0) {
    document.getElementById("bool_hl_maths").innerHTML = "Yes";
    document.getElementById("adding_25_text").style.opacity = "1";
    document.getElementById("adding_25_text").style.transition = "0.2s";
    bool_hl_maths = true;
    add_25 = 25;
    counter = 1;
  } else {
    document.getElementById("bool_hl_maths").innerHTML = "No";
    document.getElementById("adding_25_text").style.opacity = "0";
    bool_hl_maths = false;
    add_25 = 0;
    counter = 0;
  }
}

document.getElementById("lcvp").addEventListener("click", is_lcvp);
var lcvp = false;
var lcvp_counter = 0;
function is_lcvp() {
  "use strict";
  if (lcvp_counter == 0) {
    document.getElementById("lcvp").innerHTML = "Yes";
    document.getElementById("lcvp_text").innerHTML = "Doing LCVP modules";
    document.getElementById("lcvp_text").style.opacity = "1";
    document.getElementById("lcvp_text").style.transition = "0.2s";
    lcvp = true;
    lcvp_counter = 1;
  } else {
    document.getElementById("lcvp").innerHTML = "No";
    document.getElementById("lcvp_text").style.opacity = "0";
    lcvp = false;
    lcvp_counter = 0;
  }
}

var target_num = 0;
var hl_num = 0;
var ol_num = 0;

document.getElementById("adding_25_container").style.display = "none";

function count(array, element) {
  "use strict";
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    if (element == current) {
      counter += 1;
    }
  }

  return counter;
}

function adjustor(letter_grades) {
  "use strict";
  var CHANGEABLES = ["h5", "h6", "h7", "o1", "o2", "o3", "h8", "o7"];
  var HL_SUBS = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"];

  var counted_hl = 0;
  var counted_ol = 0;

  var dict_changeables = {
    "h5": "o1",
    "h6": "o2",
    "h7": "o3",
    "h8": "o7",

    "o1": "h5",
    "o2": "h6",
    "o3": "h7",
    "o7": "h8",
  };

  var hl_index_changeables = [];
  var ol_index_changeables = [];

  for (var i = 0; i < letter_grades.length; i++) {
    var current = letter_grades[i];
    if (current in dict_changeables) {
      if (current in CHANGEABLES) {
        hl_index_changeables.push(i);
      }
      else {
        ol_index_changeables.push(i);
      }
    }

    if (current != "h8" && current != "o7") {
      if (HL_SUBS.includes(current)) {
        counted_hl += 1;
      }
      else {
        counted_ol += 1;
      }
    }


  }

  var miss_matching_counts = counted_hl != hl_num && counted_ol != ol_num;

  // always assume it to be true unless a lcvp sub is being done
  var valid_lcvp_sub = true;
  if (lcvp) {
    var distinction_count = count(letter_grades, "Distinction");
    var Merit_cOunt = count(letter_grades, "Merit");
    var Pass_counT = count(letter_grades, "Pass");

    var summed_lcvp_subs = distinction_count + Merit_cOunt + Pass_counT;
    if (summed_lcvp_subs == 1) {
      valid_lcvp_sub = true;
    }
    else {
      valid_lcvp_sub = false;
    }
  }
  console.log(miss_matching_counts && valid_lcvp_sub);
  if (miss_matching_counts && valid_lcvp_sub) {
    for (i = 0; i < ol_index_changeables.length; i++) {
      var index = ol_index_changeables[i];
      var og_grade = letter_grades[index];

      if (og_grade != "h8" && og_grade != "o7") {
        var changed_grade = dict_changeables[og_grade];
        letter_grades[index] = changed_grade;
      }
    }

  }

  //  add validation to not output anything if the conts dont match
  return letter_grades;
}

// grade average and points to grades as list of numbers
function gar_and_ptg(points_needed) {
  "use strict";
  points_needed = points_needed.sort();
  var mixed_ranks = {
    100: "h1",
    88: "h2",
    77: "h3",
    66: "h4",

    56: "h5/o1",
    46: "h6/o2",
    37: "h7/o3",
    28: "o4",
    20: "o5",
    12: "o6",
    0: "o7",
  };

  if (hl_num > 0) {
    mixed_ranks[56] = "h5";
    mixed_ranks[46] = "h6";
    mixed_ranks[37] = "h7";
    mixed_ranks[0] = "h8";
  }

  if (ol_num > 0) {
    mixed_ranks[56] = "o1";
    mixed_ranks[46] = "o2";
    mixed_ranks[37] = "o3";
    mixed_ranks[0] = "o7";
  }

  if (lcvp) {
    mixed_ranks[66] = "Distinction";
    mixed_ranks[46] = "Merit";
    mixed_ranks[28] = "Pass";
  }

  var ranks = {
    "h1": 90,
    "h2": 80,
    "h3": 70,
    "h4": 60,
    "h5": 56,
    "h6": 46,
    "h7": 37,
    "h8": 0,

    "Distinction": 66,
    "Merit": 46,
    "Pass": 28,

    "o1": 56,
    "o2": 46,
    "o3": 37,
    "o4": 28,
    "o5": 20,
    "o6": 12,
    "o7": 0,
  };

  if (hl_num > 0) {
    ranks["h5/o1"] = 50;
    ranks["h6/o2"] = 40;
    ranks["h7/o3"] = 30;
  } else {
    ranks["h5/o1"] = 90;
    ranks["h6/o2"] = 80;
    ranks["h7/o3"] = 70;
  }

  var total = 0;
  for (var i = 0; i < points_needed.length; i++) {
    total += points_needed[i];
  }

  var total_subjects = hl_num + ol_num;
  total = total / total_subjects;
  var percentage_avg = String(Math.round(total)) + "%";

  var grades_soultion = [];
  for (i = 0; i < points_needed.length; i++) {
    if (points_needed[i] != 25) {
      grades_soultion.push(mixed_ranks[points_needed[i]]);
    }
  }
  var sum_total = summed_total(points_needed);

  grades_soultion = adjustor(grades_soultion);

  return [percentage_avg, grades_soultion, sum_total];
}

function is_25_in_grades(grade) {
  "use strict";
  var hl_sub = grade in [46, 56, 66, 77, 88, 100];

  if ((hl_sub == true)) {
    return true;
  } else {
    return false;
  }
}

var matches;
function plus_25(grade) {
  "use strict";
  var output = grade;
  var hl_sub = (grade.includes(46)) || (grade.includes(56)) || (grade.includes(66)) || (grade.includes(77)) || (grade.includes(88)) || (grade.includes(100));

  if ((hl_sub == true) && (hl_sub != 25)) {
    output.push(25);
    return output;
  } else {
    return output;
  }
}

function grades_to_points(grades) {
  "use strict";
  var points = [];
  var ranks = {
    "h1": 100,
    "h2": 88,
    "h3": 77,
    "h4": 66,
    "h5": 56,
    "h6": 46,
    "h7": 37,
    "h8": 0,

    "Distinction": 66,
    "Merit": 46,
    "Pass": 28,

    "o1": 56,
    "o2": 46,
    "o3": 37,
    "o4": 28,
    "o5": 20,
    "o6": 12,
    "o7": 0,
  };

  for (var i = 0; i < grades.length; i++) {
    points.push(ranks[grades[i]]);
  }

  return points;
}

function summed_total(array) {
  "use strict";
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    counter += Number(array[i]);
  }
  return counter;
}

function display_plus_25(matches) {
  "use strict";
  var boolen_bank = [];
  for (var i = 0; i < matches.length; i++) {
    var current = matches[i];
    if (is_25_in_grades(current) == true) {
      boolen_bank.push(true);
    }
  }

  if (bool_hl_maths == true && valid_inputs == true && hl_num > 0) {
    document.getElementById("adding_25_container").style.display = "inline";
  } else {
    document.getElementById("adding_25_container").style.display = "none";
  }
}

function red_commas(grades) {
  "use strict";
  grades = grades.toString();

  if (grades.includes("h8")) {
    grades = grades.replaceAll("h8", "<strong class=\"ideal\">h8</strong>");
  }

  if (grades.includes("o7")) {
    grades = grades.replaceAll("o7", "<strong class=\"ideal\">o7</strong>");
  }

  grades = grades.replaceAll(",", "<strong class=\"important-red\">,</strong>");

  return grades;
}

function show_loader() {
  "use strict";
  document.getElementById("loader_container").style.display = "inline-block";
}

function hide_loader() {
  "use strict";
  document.getElementById("loader_container").style.display = "none";
}

hide_loader();

function error_function(error_msg) {
  "use strict";
  document.getElementById("invalid_input").innerHTML = error_msg;
  document.getElementById("invalid_input").style.color = "red";
  document.getElementById("adding_25_container").style.display = "none";
  document.getElementById("invalid_input").style.display = "inline";
  hide_rows();
  hide_loader();
}

function final_output_checker(letter_grades) {
  "use strict";
  // to double check that the cao points target is correct
  var grades_to_points = {
    "h1": 100,
    "h2": 88,
    "h3": 77,
    "h4": 66,
    "h5": 56,
    "h6": 46,
    "h7": 37,
    "h8": 0,

    "Distinction": 66,
    "Merit": 46,
    "Pass": 28,

    "o1": 56,
    "o2": 46,
    "o3": 37,
    "o4": 28,
    "o5": 20,
    "o6": 12,
    "o7": 0,
  };


  var list_points = [];
  for (var i = 0; i < letter_grades.length; i++) {
    if (letter_grades[i] in grades_to_points) {
      var current_point = grades_to_points[letter_grades[i]];
      list_points.push(current_point);
    }
  }

  if (bool_hl_maths) {
    list_points = plus_25(list_points);
  }

  var total = summed_total(list_points);
  return total;
}


var valid_inputs;
document.getElementById("output-button").addEventListener("click", find_points_needed);
async function find_points_needed() {
  "use strict";
  document.getElementById("info_container").scrollIntoView();
  document.getElementById("info_container").style = "border: 5px solid red";
  show_loader();
  target_num = Number(document.getElementById("target_text").value);
  hl_num = Number(document.getElementById("hl_subs_text").value);
  ol_num = Number(document.getElementById("ol_subs_text").value);

  // check for invalid input
  var invalid_target_input = (target_num <= 0) || (target_num > 625);
  var invalid_subs_input = (hl_num < 0) || (ol_num < 0) || (hl_num > 6) || (ol_num > 6) || (hl_num + ol_num > 6);
  var max_pts = (hl_num * 100) + (ol_num * 56) + add_25;
  var invalid_range = (max_pts >= target_num) == false;

  valid_inputs = (invalid_target_input == false) && (invalid_subs_input == false) && (invalid_range == false);

  var range_error_msg = `It"s impossible to achieve ${target_num} CAO points with ${hl_num} higher-level subjects and ${ol_num} ordinary-level subjects.`;
  var pts_error_msg = "Your inputted CAO points must be between 1 and 625.";
  var subs_error_msh = "This calculator will not allow for more than 6 subjects in total as inputs.";

  if (invalid_range) {
    error_function(range_error_msg);
  } else if (invalid_target_input) {
    error_function(pts_error_msg);
  } else if (invalid_subs_input) {
    error_function(subs_error_msh);
  } else {
    document.getElementById("invalid_input").style.display = "none";

    // -----------------------------
    var base_grades_info = String(bool_hl_maths) + "_grades/[" + String(hl_num) + ", " + String(ol_num) + "].txt";
    var base_points_info = String(bool_hl_maths) + "_points/[" + String(hl_num) + ", " + String(ol_num) + "]_points.txt";

    var grade_ref_text = ref(storage, base_grades_info);
    var grade_url = await Promise.resolve(getDownloadURL(grade_ref_text));
    var grade_response = await fetch(grade_url, { mode: "cors" });

    var grades = JSON.parse(await grade_response.text());

    var point_ref_text = ref(storage, base_points_info);
    var point_url = await Promise.resolve(getDownloadURL(point_ref_text));
    var point_response = await fetch(point_url, { mode: "cors" });

    var points = JSON.parse(await point_response.text());
    // ----------------

    // change the target_num if nessecary
    var target_less_than_625 = target_num <= 625;
    var ref_target_num = Math.floor(target_num / 10) * 10; // the target number rounded down to the nearest hundredth
    var end_index;
    var start_index;
    // the target_num is greater than 100
    if (ref_target_num != 0) {
      while (points.includes(ref_target_num) == false || ref_target_num < target_num && target_less_than_625) {
        ref_target_num += 1;
      }

      start_index = points.indexOf(ref_target_num);
      if (points.includes(max_pts)) {
        end_index = points.indexOf(max_pts);
      }
      else {
        end_index = points.indexOf(points.length - 1);
        max_pts = points[points.length - 1];
        console.log("max pts not in db: ", max_pts);
      }

      grades = grades.splice(start_index, end_index);
      points = points.splice(start_index, end_index);

      console.log("max_pts: ", max_pts);
      console.log("start_index: ", start_index, "end_index: ", end_index);
      console.log("grades.length: ", grades.length);
      console.log("ref num: ", ref_target_num);
      console.log("max_pts: ", max_pts);
    }
    // the target_num is less than 100
    else {
      ref_target_num = Math.floor(target_num / 10) * 10;
      while (points.includes(target_num) == false && target_less_than_625 && ref_target_num < target_num) {
        target_num += 1;
      }
    }
    matches = [];
    // finding the easiest ranked soultion which will be pushed the "matches" array
    // -------------------------------------------------------------------------------
    var possible_soultion = [];
    for (var i = 0; i < points.length; i++) {
      var current_point = points[i];
      var current_grade = grades[i];
      var reminader = current_point - target_num;
      if (reminader >= 0) {
        var grade_soultion = current_grade[0];
        var letter_soultions = gar_and_ptg(grade_soultion)[1];
        var h1_or_ol_counts = count(letter_soultions, "h1") + count(letter_soultions, "o1");
        var output = [h1_or_ol_counts, letter_soultions];
        possible_soultion.push(output);
      }
    }

    possible_soultion = possible_soultion.sort(); // sort from smallest to largest cause you want the fewest h1s and o1s as possible
    possible_soultion = possible_soultion.splice(0, 3);

    for (i = 0; i < possible_soultion.length; i++) {
      var soultion = possible_soultion[i][1];
      matches.push(soultion);
    }
    // -------------------------------------------------------------------------------

    // then display output ------------------
    var points_req;
    var req_results;

    for (i = 0; i < matches.length; i++) {
      var row = "row" + String(i + 1);
      document.getElementById(row).style.display = "inline";

      var current = grades_to_points(matches[i]);
      current = gar_and_ptg(current);

      var grade_avg_req = current[0];
      req_results = current[1];
      points_req = final_output_checker(current[1]); // this was set to index 1 on purpose so the letter grades can be checked

      if ((matches[i].includes(25)) && (Number(document.getElementById("hl_subs_text").value) == 0 || bool_hl_maths == false)) {
        points_req -= 25;
      }

      var id_points_req = "points_req" + String(i + 1);
      var id_req_results = "req_results" + String(i + 1);
      var id_grade_avg_req = "grade_avg_req" + String(i + 1);
      req_results = red_commas(req_results);

      document.getElementById(id_points_req).innerHTML = String(points_req);
      document.getElementById(id_req_results).innerHTML = String(req_results);
      document.getElementById(id_grade_avg_req).innerHTML = String(grade_avg_req);
    }

    // hide the rows that aren"t used
    if ((matches.length > 0) && (matches.length != 3)) {
      for (i = 0; i < 3 - matches.length; i++) {
        row = "row" + String(3 - (i + 1) + 1);
        document.getElementById(row).style.display = "none";
      }

      document.getElementById("invalid_input").style.color = "red";
      document.getElementById("invalid_input").innerHTML = "INVALID INPUT";
      document.getElementById("invalid_input").style.display = "none";

      document.getElementById("adding_25_container").style.display = "none";
    }

    display_plus_25(matches);
    document.getElementById("info_container").style = "border: 5px solid blue";
    hide_loader();
  }
}

function enterkey_pressed() {
  var target_input = document.getElementById("target_text");
  target_input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      find_points_needed();
    }
  });

  var hl_input = document.getElementById("hl_subs_text");
  hl_input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      find_points_needed();
    }
  });

  var ol_input = document.getElementById("hl_subs_text");
  ol_input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      find_points_needed();
    }
  });
}

enterkey_pressed();

document.getElementById("drop1-title").addEventListener("click", func_drop1);
var drop1_counter = 0;
function func_drop1() {
  "use strict";
  if (drop1_counter == 0) {
    document.getElementById("drop1-title").style = "border: 5px solid red";
    document.getElementById("drop1-content1").style.display = "block";
    document.getElementById("drop1-content2").style.display = "block";
    document.getElementById("drop1-content1").scrollIntoView();
    document.getElementById("drop1_status").style.opacity = "0";
    document.getElementById("drop2_status").style.transition = "0.2s";
    drop1_counter = 1;
  } else {
    document.getElementById("drop1-title").style = "border: 5px solid black";
    document.getElementById("drop1-content1").style.display = "none";
    document.getElementById("drop1-content2").style.display = "none";
    document.getElementById("drop1_status").style.opacity = "1";
    document.getElementById("drop1_status").style.transition = "0.2s";
    drop1_counter = 0;
  }
}

document.getElementById("drop2-title").addEventListener("click", func_drop2);
var drop2_counter = 0;
function func_drop2() {
  "use strict";
  if (drop2_counter == 0) {
    document.getElementById("drop2-title").style = "border: 5px solid red";
    document.getElementById("drop2-content").style.display = "block";
    document.getElementById("drop2-content").scrollIntoView();
    document.getElementById("drop2_status").style.opacity = "0";
    drop2_counter = 1;
  } else {
    document.getElementById("drop2-title").style = "border: 5px solid black";
    document.getElementById("drop2-content").style.display = "none";
    document.getElementById("drop2_status").style.opacity = "1";
    document.getElementById("drop2_status").style.transition = "0.2s";
    drop2_counter = 0;
  }
}

function input_test(target, hl_subs, ol_subs) {
  "use strict";
  document.getElementById("target_text").value = target;
  document.getElementById("hl_subs_text").value = hl_subs;
  document.getElementById("ol_subs_text").value = ol_subs;

  find_points_needed();
}

input_test(21, 3, 1);