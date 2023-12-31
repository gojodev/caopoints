"use strict";
import { firebaseConfig } from "./config.js";

firebaseConfig();

// ! this value is global and will be accessed by other functions
var add_25 = 25;
/**
 * determines the value of the add_25 variable
 * toggles display of the button
 */
function is_hl_maths() {
  var bool_hl_maths = document.getElementById("bool_hl_maths");
  var adding_25_text = document.getElementById("adding_25_text");
  var value = bool_hl_maths.value;
  if (value == 1) {
    bool_hl_maths.value = 1;
    adding_25_text.style.opacity = "1";
    adding_25_text.style.transition = "0.2s";
    value = 1;
    add_25 = 25;

  } else {
    bool_hl_maths.value = 0;
    adding_25_text.style.opacity = "0";
    add_25 = 0;
    value = 0;
  }
  find_points_needed();
}
is_hl_maths();

// "listens" for a click from the is_hl_maths function
document.getElementById("bool_hl_maths").addEventListener("click", is_hl_maths);

/**
 * determines the value of the lcvp variable
 * toggles display of the button
 */

var lcvp;
function is_lcvp() {
  var lcvp_input = document.getElementById("lcvp");
  var value = lcvp_input.value;
  if (value == 1) {
    lcvp = true;
    lcvp_input.value = 1;
    value = 0;

  } else {
    value = 1;
    lcvp = false;
    lcvp_input.value = 0;
  }
  find_points_needed();
  return lcvp;
}

is_lcvp();

// "listens" for a click from the is_lcvp function
document.getElementById("lcvp").addEventListener("click", is_lcvp);

// hides the "Adding +25" text before the page loads
document.getElementById("adding_25_container").style.display = "none";

var target_num;
var hl_num;
var ol_num;

/**
 * Adjusts the grades that have the same value in ordinary level and higher level for correct output
 * for example a H6 and O2 are both worth 46 points
 * @param {array} letter_grades
 * @returns array
 */
function adjustor(letter_grades) {
  var CHANGEABLES = ["h5", "h6", "h7", "o1", "o2", "o3"];
  var HL_SUBS = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"];

  var counted_hl = 0;
  var counted_ol = 0;

  var dict_changeables = {
    "h5": "o1",
    "h6": "o2",
    "h7": "o3",
    "o1": "h5",
    "o2": "h6",
    "o3": "h7",
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

    if (HL_SUBS.includes(current)) {
      counted_hl += 1;
    }
    else {
      counted_ol += 1;
    }
  }

  var miss_matching_counts = counted_hl != hl_num && counted_ol != ol_num;

  if (miss_matching_counts) {
    var needed_hl = hl_num - counted_hl;
    var needed_ol = ol_num - counted_ol;

    if (needed_hl < 0) {
      needed_hl = 0;
    }
    if (needed_ol < 0) {
      needed_ol = 0;
    }

    var charges_needed = Math.max(needed_hl, needed_ol);
    var og_grade;
    var changed_grade;
    for (i = 0; i < charges_needed; i++) {

      var index = ol_index_changeables[i];
      og_grade = letter_grades[index];

      changed_grade = dict_changeables[og_grade];
      letter_grades[index] = changed_grade;
    }
  }

  if (lcvp) {
    var lcvp_modules = {
      66: "Distinction",
      46: "Merit",
      28: "Pass"
    };

    var lcvp_grades = ["h4", "h6", "o2", "o4"];

    var lcvp_points = {
      "h4": 66,
      "h6": 46,
      "o2": 46,
      "o4": 28
    };

    var collected_lcvp_points = [];
    for (i = 0; i < letter_grades.length; i++) {
      current = letter_grades[i];
      if (lcvp_grades.includes(current)) {
        collected_lcvp_points.push(lcvp_points[current]);
      }
      else {
        collected_lcvp_points.push(999);
      }
    }
    var min_lcvp_point = Math.min(...collected_lcvp_points);
    var min_lcvp_index = collected_lcvp_points.indexOf(min_lcvp_point);
    var valid_lcvp_change = min_lcvp_point != 999;

    if (valid_lcvp_change) {
      letter_grades[min_lcvp_index] = lcvp_modules[min_lcvp_point];
    }
  }

  return letter_grades;
}

/**
 * grade average and points to grades as list of numbers
 * @param {array} points_needed 
 * @returns array
 */
function gar_and_ptg(points_needed) {

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
  };

  if (hl_num > 0) {
    mixed_ranks[56] = "h5";
    mixed_ranks[46] = "h6";
    mixed_ranks[37] = "h7";
  }

  if (ol_num > 0) {
    mixed_ranks[56] = "o1";
    mixed_ranks[46] = "o2";
    mixed_ranks[37] = "o3";
  }

  var ranks = {
    "h1": 90,
    "h2": 80,
    "h3": 70,
    "h4": 60,
    "h5": 56,
    "h6": 46,
    "h7": 37,

    "Distinction": 66,
    "Merit": 46,
    "Pass": 28,

    "o1": 56,
    "o2": 46,
    "o3": 37,
    "o4": 28,
    "o5": 20,
    "o6": 12,
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

  var grades_soultion = [];
  var total = 0;
  for (var i = 0; i < points_needed.length; i++) {
    if (points_needed[i] != 25) {
      grades_soultion.push(mixed_ranks[points_needed[i]]);
      total += ranks[mixed_ranks[points_needed[i]]];
    }
  }
  total = total / (hl_num + ol_num);
  var percentage_avg = String(Math.round(total)) + "%";
  grades_soultion = adjustor(grades_soultion);

  return [percentage_avg, grades_soultion];
}

function display_plus_25(bool_hl_maths) {
  var adding_25_container = document.getElementById("adding_25_container");
  if (bool_hl_maths) {
    adding_25_container.style = "display: block;color: #0066ff";
  } else {
    adding_25_container.style.display = "none";
  }
}

function red_commas(grades) {
  grades = grades.toString();
  grades = grades.replaceAll(",", "<strong class='important-red'>,</strong>");

  return grades;
}

/**
 * increments a grade's value to the next one
 * for example increment a grade that has the value of 88 will be increased to 100
 * @param {array} grades 
 * @param {int} index 
 * @param {boolean} maths_plus_25 
 * @returns 
 */
function single_change(grades, index, maths_plus_25) {
  const is_in_dict = [12, 20, 28, 37, 46, 56, 66, 77, 88, 100];
  var dict_changeables = {
    12: 20,
    20: 28,
    28: 37,
    37: 46,
    46: 56,
    56: 66,
    66: 77,
    77: 88,
    88: 100
  };

  if (is_in_dict.includes(grades[index])) {
    grades[index] = dict_changeables[grades[index]];
  }
  if (maths_plus_25 && (grades.includes(25)) == false) {
    grades.push(25);
  }
  return grades;
}

function sum(array) {
  return array.filter(el => +el).reduce((acc, cv) => acc + cv, 0);
}

/**
 * generates a starting point of an array of which individual values will be increased later 
 * @param {int} hl_subs 
 * @param {int} ol_subs 
 * @returns array
 */
function starting_grades(hl_subs, ol_subs) {
  var grades = [];
  for (var i = 0; i < hl_subs; i++) {
    grades.push(37);
  }
  for (i = 0; i < ol_subs; i++) {
    grades.push(12);
  }
  return grades;
}

function highest_points_poss(hl_subs, ol_subs, maths_plus_25) {
  var counter = 0;
  counter += (100 * hl_subs) + (56 * ol_subs);
  if (maths_plus_25) {
    counter += 25;
  }

  return counter;
}

/**
 * this is whole algorothim behind generate correct output
 * in short it creates an array of values that are gradually increased until it's overall value is increased
 * until it "reaches" the cao points target
 * @param {target} target 
 * @param {hl_subs} hl_subs 
 * @param {ol_subs} ol_subs 
 * @param {maths_plus_25} maths_plus_25 
 * @returns array
 */
export function main(target, hl_subs, ol_subs, maths_plus_25) {
  var total_subs = hl_subs + ol_subs;
  var current_grades = starting_grades(hl_subs, ol_subs);
  var current_points = sum(current_grades);
  var index = 0;
  var max_limit = highest_points_poss(hl_subs, ol_subs, maths_plus_25);
  var within_range = current_points <= max_limit && target <= max_limit && (current_points < target);

  while (within_range) {
    current_grades = single_change(current_grades, index, maths_plus_25);
    current_points = sum(current_grades);
    within_range = current_points <= max_limit && target <= max_limit && (current_points < target);
    index += 1;

    if (index == total_subs) {
      index = 0;
    }
  }

  if (current_points < target) {
    current_grades = [];
    current_points = [];
  }
  return [current_grades, current_points];
}

function update_inputs() {
  var target_input = document.getElementById("target_text");
  target_input.addEventListener("input", function () {
    find_points_needed();
  });

  var hl_input = document.getElementById("hl_subs_text");
  hl_input.addEventListener("input", function () {
    find_points_needed();
  });

  var ol_input = document.getElementById("ol_subs_text");
  ol_input.addEventListener("input", function () {
    find_points_needed();
  });
}

update_inputs();

// to hide the box of output when the page loades
document.getElementById("result_container").classList.add("hide");

/**
 * collects the data values from the HTML (target_num, hl_num, ol_num)
 * handles error cases and successfull output
 */
document.getElementById("invalid_input").style.display = "none";
async function find_points_needed() {
  document.getElementById("result_container").classList.add("show");
  document.getElementById("result_container").classList.remove("hide");

  target_num = Number(document.getElementById("target_text").value);
  hl_num = Number(document.getElementById("hl_subs_text").value);
  ol_num = Number(document.getElementById("ol_subs_text").value);

  // check for invalid input
  var invalid_target_input = (target_num <= 0) || (target_num > 625);
  var invalid_subs_input = (hl_num < 0) || (ol_num < 0) || (hl_num > 6) || (ol_num > 6) || ((hl_num + ol_num) > 6);
  var max_pts = (hl_num * 100) + (ol_num * 56) + add_25;
  var invalid_range = (max_pts >= target_num) == false;

  const range_error_msg = `It's impossible to achieve ${target_num} CAO points with ${hl_num} higher-level subjects and ${ol_num} ordinary-level subjects.`;
  const pts_error_msg = "Your inputted CAO points must be between 1 and 625.";
  const subs_error_msh = "This calculator will not allow for more than 6 subjects in total as inputs.";

  var error_status = "";

  if (invalid_range) {
    error_status += range_error_msg + "\n";
  } if (invalid_subs_input) {
    error_status += subs_error_msh + "\n";
  }
  if (invalid_target_input) {
    error_status += pts_error_msg + "\n";
  }

  if (error_status != "") {
    document.getElementById("invalid_input").style.display = "block";
    document.getElementById("invalid_input").style.color = "red";
    document.getElementById("invalid_input").innerHTML = error_status;

    document.getElementById("info_container").style.opacity = "1";
    document.getElementById("soultion_output").style.display = "none";
    document.getElementById("adding_25_container").style.opacity = "0";
  }

  else {
    document.getElementById("info_container").style.opacity = "1";
    document.getElementById("info_container").style.display = "block";
    document.getElementById("soultion_output").style.display = "block";
    document.getElementById("invalid_input").style.display = "none";
    var maths_plus_25;
    if (add_25 == 25) {
      maths_plus_25 = true;
    }
    else {
      maths_plus_25 = false;
    }
    var matches_info = main(target_num, hl_num, ol_num, maths_plus_25);
    var points_list = matches_info[0];
    var points_req = matches_info[1];

    if (points_list.includes(25)) {
      display_plus_25(true);
    }
    else {
      display_plus_25(false);
    }
    var output_info = gar_and_ptg(points_list);

    var grade_avg = output_info[0];
    var req_results = output_info[1]; // these are letter grades

    req_results = red_commas(req_results);

    document.getElementById("points_req").innerHTML = String(points_req);
    document.getElementById("req_results").innerHTML = String(req_results);
    document.getElementById("grade_avg_req").innerHTML = String(grade_avg);
  }
}

/**
 * yearly joke that will be activated in may and june
 */
function motivate() {
  seconds += 1;
  if (59 <= seconds && seconds <= 60) {
    document.getElementById("img-info").src = "images/joke.webp";
  }
  else {
    document.getElementById("img-info").src = "images/points-system.webp";
  }

  if (seconds > 60) {
    seconds = 0;
  }
}

var seconds = 0;
var dt = new Date();
var month = dt.getMonth() + 1; // cause of 0 indexing of the 12 months becomes 0 - 11
if ([3, 4, 5].includes(month)) {
  setInterval(motivate, 1000);
  motivate();
}

// if (location.href != "https://caopoints.com") {
//   location.href = "https://caopoints.com";
// }