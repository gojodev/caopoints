"use strict";
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { add_25, main, gar_and_ptg, red_commas, display_plus_25, set_sys_theme } from "./dom-support";

const firebaseConfig = {
  // tldr; there"s prob no need to tell me that my apikey is exposed (not that i don't like feedback or fan interaction..) 
  apiKey: "AIzaSyBnpE-YlKKvHwE9pi3CwhKf1Tq7nthPycE", // you there! even js obfuscation can"t fully hide this key and the client side needs access to this to correctly run and just having this key isn"t enough to cause any kind of damage because an imposter would need more than just the key to do anything of damage in my particular case or to be able to access any kind of sensitive information in addition it was been limited on the server side
  authDomain: "caopoints-info.firebaseapp.com",
  databaseURL: "https://caopoints-info-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "caopoints-info",
  storageBucket: "caopoints-info.appspot.com",
  messagingSenderId: "615159418744",
  appId: "1:615159418744:web:35978469f92b90b5c9828d",
  measurementId: "G-08383DC9PC"
};

const app = initializeApp(firebaseConfig);
getPerformance(app);

set_sys_theme();
var target_num;
export var hl_num;
export var ol_num;


function auto_input(target_num, hl_num, ol_num) {
  document.getElementById("target_text").value = target_num;
  document.getElementById("hl_subs_text").value = hl_num;
  document.getElementById("ol_subs_text").value = ol_num;
}

// USE sessionStorage !!!!!!!!!!!!!!
function keep_inputs(target_num, hl_num, ol_num) {
  localStorage.setItem("target_num", target_num);
  localStorage.setItem("hl_num", hl_num);
  localStorage.setItem("ol_num", ol_num);

  target_num = localStorage.getItem("target_num");
  hl_num = localStorage.getItem("hl_num");
  ol_num = localStorage.getItem("ol_num");

  auto_input(target_num, hl_num, ol_num);
}

document.getElementById("invalid_input").style.display = "none";
export async function find_points_needed() {
  target_num = Number(document.getElementById("target_text").value);
  hl_num = Number(document.getElementById("hl_subs_text").value);
  ol_num = Number(document.getElementById("ol_subs_text").value);

  // check for invalid input
  var invalid_target_input = (target_num <= 0) || (target_num > 625);
  var invalid_subs_input = (hl_num < 0) || (ol_num < 0) || (hl_num > 6) || (ol_num > 6) || ((hl_num + ol_num) > 6);
  var max_pts = (hl_num * 100) + (ol_num * 56) + add_25;
  var invalid_range = (max_pts >= target_num) == false;

  const range_error_msg = `It"s impossible to achieve ${target_num} CAO points with ${hl_num} higher-level subjects and ${ol_num} ordinary-level subjects.`;
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
    // if the invalid_input DOM's isn't speficied HTML thinks it doesn't exist ------
    document.getElementById("invalid_input").style.display = "block";
    document.getElementById("invalid_input").style.color = "red";
    document.getElementById("invalid_input").innerHTML = error_status;
    // --------------

    document.getElementById("info_container").style.opacity = "1";
    document.getElementById("soultion_output").style.display = "none";
    document.getElementById("adding_25_container").style.display = "none";
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
    keep_inputs(target_num, hl_num, ol_num);
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