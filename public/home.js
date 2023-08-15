"use strict";
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { add_25, main, gar_and_ptg, red_commas, display_plus_25, set_sys_theme } from "./dom-support";

const _0x5f589a = _0x5e58; (function (_0x2d3e4c, _0x449b7d) { const _0x339dd0 = _0x5e58, _0x1fb684 = _0x2d3e4c(); while (!![]) { try { const _0x347b24 = -parseInt(_0x339dd0(0x1d8)) / (0x18de * 0x1 + 0x737 * -0x1 + -0x11a6) * (-parseInt(_0x339dd0(0x1dd)) / (-0x1d6f + -0x2 * 0x581 + -0x13 * -0x221)) + parseInt(_0x339dd0(0x1e6)) / (-0x3 * 0x21d + 0xb12 + -0x4b8) + parseInt(_0x339dd0(0x1dc)) / (0x4df + 0x1055 + 0x1530 * -0x1) * (parseInt(_0x339dd0(0x1e2)) / (-0x1 * 0x1f0d + -0x11f1 + -0x3103 * -0x1)) + -parseInt(_0x339dd0(0x1db)) / (-0x1 * -0xde9 + 0x13d2 + 0x1 * -0x21b5) + parseInt(_0x339dd0(0x1e8)) / (-0x1a6b + 0x3 * -0x2aa + -0x26 * -0xe8) * (-parseInt(_0x339dd0(0x1e4)) / (-0x409 * 0x1 + 0x8e * -0x26 + 0x1925)) + -parseInt(_0x339dd0(0x1d9)) / (0x182a + -0xcc6 + -0xb5b) + parseInt(_0x339dd0(0x1ea)) / (-0x2e * -0xc4 + 0xab2 + -0x2de0); if (_0x347b24 === _0x449b7d) break; else _0x1fb684['push'](_0x1fb684['shift']()); } catch (_0x4b6491) { _0x1fb684['push'](_0x1fb684['shift']()); } } }(_0x1957, 0x14b * 0x947 + 0x6fd * 0x35b + -0x1760ff)); const firebaseConfig = { 'apiKey': _0x5f589a(0x1f3) + _0x5f589a(0x1e1) + _0x5f589a(0x1f0) + _0x5f589a(0x1f2), 'databaseURL': _0x5f589a(0x1ef) + _0x5f589a(0x1e0) + _0x5f589a(0x1de) + _0x5f589a(0x1df) + _0x5f589a(0x1f1) + _0x5f589a(0x1d5) + _0x5f589a(0x1e9), 'projectId': _0x5f589a(0x1ec) + _0x5f589a(0x1e3), 'storageBucket': _0x5f589a(0x1ec) + _0x5f589a(0x1e5) + _0x5f589a(0x1eb), 'messagingSenderId': _0x5f589a(0x1ed) + '44', 'appId': _0x5f589a(0x1e7) + _0x5f589a(0x1d7) + _0x5f589a(0x1ee) + _0x5f589a(0x1d6) + 'd', 'measurementId': _0x5f589a(0x1da) + 'PC' }, app = initializeApp(firebaseConfig); function _0x5e58(_0x1e7c5d, _0x461881) { const _0x241db2 = _0x1957(); return _0x5e58 = function (_0x98959b, _0x493178) { _0x98959b = _0x98959b - (0xa3 + 0x7 * -0x2b3 + 0x1417); let _0x5caa97 = _0x241db2[_0x98959b]; return _0x5caa97; }, _0x5e58(_0x1e7c5d, _0x461881); } function _0x1957() { const _0x260c6c = ['1750192kjZaVg', 'info.appsp', '1466817SSRBDH', '1:61515941', '42jGCdyq', 'abase.app', '9509900EvFZju', 'ot.com', 'caopoints-', '6151594187', '5978469f92', 'https://ca', 'pi3CwhKf1T', 'pe-west1.f', 'q7nthPycE', 'AIzaSyBnpE', 'irebasedat', 'b90b5c9828', '8744:web:3', '1ZrJQxm', '13073373vyjZzQ', 'G-08383DC9', '2416944OycgbT', '2054016stsZjP', '2983690RAamvo', 'fo-default', '-rtdb.euro', 'opoints-in', '-YlKKvHwE9', '10OXelNS', 'info']; _0x1957 = function () { return _0x260c6c; }; return _0x1957(); } getPerformance(app);

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