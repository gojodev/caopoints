"use strict";
(() => {
  // public/home.js
  var add_25 = 25;
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
  document.getElementById("bool_hl_maths").addEventListener("click", is_hl_maths);
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
  document.getElementById("lcvp").addEventListener("click", is_lcvp);
  document.getElementById("adding_25_container").style.display = "none";
  var target_num;
  var hl_num;
  var ol_num;
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
      "o3": "h7"
    };
    var hl_index_changeables = [];
    var ol_index_changeables = [];
    for (var i = 0; i < letter_grades.length; i++) {
      var current = letter_grades[i];
      if (current in dict_changeables) {
        if (current in CHANGEABLES) {
          hl_index_changeables.push(i);
        } else {
          ol_index_changeables.push(i);
        }
      }
      if (HL_SUBS.includes(current)) {
        counted_hl += 1;
      } else {
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
        } else {
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
  function motivate() {
    seconds += 1;
    if (59 <= seconds && seconds <= 60) {
      document.getElementById("img-info").src = "images/joke.webp";
    } else {
      document.getElementById("img-info").src = "images/points-system.webp";
    }
    if (seconds > 60) {
      seconds = 0;
    }
  }
  var seconds = 0;
  var dt = /* @__PURE__ */ new Date();
  var month = dt.getMonth() + 1;
  if ([4, 5].includes(month)) {
    setInterval(motivate, 1e3);
    motivate();
  }
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
      12: "o6"
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
      "o6": 12
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
      adding_25_container.style = "display: block;";
    } else {
      adding_25_container.style.display = "none";
    }
  }
  function red_commas(grades) {
    grades = grades.toString();
    grades = grades.replaceAll(",", "<strong class='red'>,</strong>");
    return grades;
  }
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
    if (maths_plus_25 && grades.includes(25) == false) {
      grades.push(25);
    }
    return grades;
  }
  function sum(array) {
    return array.filter((el) => +el).reduce((acc, cv) => acc + cv, 0);
  }
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
    counter += 100 * hl_subs + 56 * ol_subs;
    if (maths_plus_25) {
      counter += 25;
    }
    return counter;
  }
  function main(target, hl_subs, ol_subs, maths_plus_25) {
    var total_subs = hl_subs + ol_subs;
    var current_grades = starting_grades(hl_subs, ol_subs);
    var current_points = sum(current_grades);
    var index = 0;
    var max_limit = highest_points_poss(hl_subs, ol_subs, maths_plus_25);
    var within_range = current_points <= max_limit && target <= max_limit && current_points < target;
    while (within_range) {
      current_grades = single_change(current_grades, index, maths_plus_25);
      current_points = sum(current_grades);
      within_range = current_points <= max_limit && target <= max_limit && current_points < target;
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
    target_input.addEventListener("input", () => {
      find_points_needed();
    });
    var hl_input = document.getElementById("hl_subs_text");
    hl_input.addEventListener("input", () => {
      find_points_needed();
    });
    var ol_input = document.getElementById("ol_subs_text");
    ol_input.addEventListener("input", () => {
      find_points_needed();
    });
  }
  update_inputs();
  document.getElementById("result_container").classList.add("hide");
  document.getElementById("invalid_input").style.display = "none";
  function pulseInputs() {
    let inputElement = ["target_text", "hl_subs_text", "ol_subs_text", "bool_hl_maths", "lcvp"];
    inputElement.forEach((id) => {
      document.getElementById(id).classList.add("pulseAnimation");
    });
    document.getElementById("calculator-container").addEventListener("click", () => {
      inputElement.forEach((id) => {
        document.getElementById(id).classList.remove("pulseAnimation");
      });
    });
  }
  pulseInputs();
  async function find_points_needed() {
    document.getElementById("result_container").classList.remove("hide");
    document.getElementById("result_container").classList.add("show");
    target_num = Number(document.getElementById("target_text").value);
    hl_num = Number(document.getElementById("hl_subs_text").value);
    ol_num = Number(document.getElementById("ol_subs_text").value);
    var invalid_target_input = target_num <= 0 || target_num > 625;
    var invalid_subs_input = hl_num < 0 || ol_num < 0;
    var max_pts = hl_num * 100 + ol_num * 56 + add_25;
    var invalid_range = max_pts >= target_num == false;
    const range_error_msg = "It's impossible to achieve ".concat(target_num, " CAO points with ").concat(hl_num, " higher-level subjects and ").concat(ol_num, " ordinary-level subjects.");
    const pts_error_msg = "Your inputted CAO points must be between 1 and 625.";
    const subjects_error_msg = "You can't have a negative amout of subjects";
    var error_status = "";
    if (invalid_range) {
      error_status += range_error_msg + "\n";
    }
    if (invalid_target_input) {
      error_status += pts_error_msg + "\n";
    }
    if (invalid_subs_input) {
      error_status += subjects_error_msg + "\n";
    }
    let invalid_input = document.getElementById("invalid_input");
    let info_container = document.getElementById("info_container");
    let soultion_output = document.getElementById("soultion_output");
    if (error_status != "") {
      invalid_input.classList.remove("fadeIn");
      invalid_input.offsetWidthl;
      invalid_input.classList.add("fadeIn");
      invalid_input.style.display = "block";
      invalid_input.style.color = "red";
      invalid_input.innerHTML = error_status;
      info_container.style.opacity = "1";
      soultion_output.style.display = "none";
      document.getElementById("adding_25_container").style.opacity = "0";
      if (target_num != 0 && (hl_num != 0 || ol_num != 0)) {
        document.getElementById("result_container").scrollIntoView();
        setTimeout(() => {
          document.getElementById("calculator-container").scrollIntoView();
        }, 1500);
      }
    } else {
      info_container.style.opacity = "1";
      info_container.style.display = "block";
      soultion_output.style.display = "block";
      document.getElementById("invalid_input").style.display = "none";
      var maths_plus_25;
      if (add_25 == 25) {
        maths_plus_25 = true;
      } else {
        maths_plus_25 = false;
      }
      var matches_info = main(target_num, hl_num, ol_num, maths_plus_25);
      var points_list = matches_info[0];
      var points_req = matches_info[1];
      if (points_list.includes(25)) {
        display_plus_25(true);
      } else {
        display_plus_25(false);
      }
      var output_info = gar_and_ptg(points_list);
      var grade_avg = output_info[0];
      var req_results = output_info[1];
      req_results = red_commas(req_results);
      let elem_req_results = document.getElementById("req_results");
      if (elem_req_results.value != "") {
        document.getElementById("points_req").innerHTML = String(points_req);
        elem_req_results.innerHTML = String(req_results);
        document.getElementById("grade_avg_req").innerHTML = String(grade_avg);
      }
    }
  }
  function gojodevIcon() {
    let gojodev2 = document.getElementById("fixed-gojodev");
    let targetBottom;
    if (window.innerWidth < 500) {
      targetBottom = document.getElementById("bool_hl_maths");
    } else {
      targetBottom = document.querySelector(".welcome");
    }
    gojodev2.style.display = "block";
    function handleScroll() {
      let welcomeRect = targetBottom.getBoundingClientRect();
      if (welcomeRect.bottom < 0) {
        gojodev2.style.display = "block";
        gojodev2.style.opacity = "0.6";
      } else {
        gojodev2.style = "transform: translate(0, +15px);";
        gojodev2.style.animationDelay = "0.5s";
        gojodev2.style.opacity = "0";
        gojodev2.style.display = "none";
      }
    }
    window.addEventListener("scroll", handleScroll);
    gojodev2.addEventListener("mouseover", () => {
      gojodev2.style.opacity = "1";
    });
    gojodev2.addEventListener("mouseout", () => {
      gojodev2.style.opacity = "0.6";
    });
    handleScroll();
  }
  gojodevIcon();
  function gojodev() {
    let emmanuel = document.getElementById("gojodev");
    let index = 0;
    setInterval(() => {
      emmanuel.classList.remove("fadeIn");
      emmanuel.offsetWidth;
      emmanuel.classList.add("fadeIn");
      if (index == 0) {
        emmanuel.src = "images/gojodev.webp";
        index = 1;
      } else {
        emmanuel.src = "images/logo.webp";
        index = 0;
      }
    }, 3500);
  }
  gojodev();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaG9tZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIERhcmtUaGVtZSgpIHtcclxuICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCdwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaycpKSB7XHJcbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdoaXRlJywgJ2JsYWNrJyk7XHJcbiAgfVxyXG4gIFxyXG4gIGVsc2Uge1xyXG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13aGl0ZScsICd3aGl0ZScpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGFya1RoZW1lKCk7XHJcblxyXG4vLyAhIEdMT0JBTFxyXG52YXIgYWRkXzI1ID0gMjU7XHJcbi8qKlxyXG4gKiBkZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgYWRkXzI1IHZhcmlhYmxlXHJcbiAqIHRvZ2dsZXMgZGlzcGxheSBvZiB0aGUgYnV0dG9uXHJcbiAqL1xyXG5mdW5jdGlvbiBpc19obF9tYXRocygpIHtcclxuICB2YXIgYm9vbF9obF9tYXRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vbF9obF9tYXRoc1wiKTtcclxuICB2YXIgYWRkaW5nXzI1X3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV90ZXh0XCIpO1xyXG4gIHZhciB2YWx1ZSA9IGJvb2xfaGxfbWF0aHMudmFsdWU7XHJcbiAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgIGJvb2xfaGxfbWF0aHMudmFsdWUgPSAxO1xyXG4gICAgYWRkaW5nXzI1X3RleHQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgYWRkaW5nXzI1X3RleHQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMC4yc1wiO1xyXG4gICAgdmFsdWUgPSAxO1xyXG4gICAgYWRkXzI1ID0gMjU7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBib29sX2hsX21hdGhzLnZhbHVlID0gMDtcclxuICAgIGFkZGluZ18yNV90ZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIGFkZF8yNSA9IDA7XHJcbiAgICB2YWx1ZSA9IDA7XHJcbiAgfVxyXG4gIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xyXG59XHJcbmlzX2hsX21hdGhzKCk7XHJcblxyXG4vLyBcImxpc3RlbnNcIiBmb3IgYSBjbGljayBmcm9tIHRoZSBpc19obF9tYXRocyBmdW5jdGlvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2xfaGxfbWF0aHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGlzX2hsX21hdGhzKTtcclxuXHJcbi8qKlxyXG4gKiBkZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgbGN2cCB2YXJpYWJsZVxyXG4gKiB0b2dnbGVzIGRpc3BsYXkgb2YgdGhlIGJ1dHRvblxyXG4gKi9cclxuXHJcbnZhciBsY3ZwO1xyXG5mdW5jdGlvbiBpc19sY3ZwKCkge1xyXG4gIHZhciBsY3ZwX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsY3ZwXCIpO1xyXG4gIHZhciB2YWx1ZSA9IGxjdnBfaW5wdXQudmFsdWU7XHJcbiAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgIGxjdnAgPSB0cnVlO1xyXG4gICAgbGN2cF9pbnB1dC52YWx1ZSA9IDE7XHJcbiAgICB2YWx1ZSA9IDA7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YWx1ZSA9IDE7XHJcbiAgICBsY3ZwID0gZmFsc2U7XHJcbiAgICBsY3ZwX2lucHV0LnZhbHVlID0gMDtcclxuICB9XHJcbiAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgcmV0dXJuIGxjdnA7XHJcbn1cclxuXHJcbmlzX2xjdnAoKTtcclxuXHJcbi8vIFwibGlzdGVuc1wiIGZvciBhIGNsaWNrIGZyb20gdGhlIGlzX2xjdnAgZnVuY3Rpb25cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsY3ZwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpc19sY3ZwKTtcclxuXHJcbi8vIGhpZGVzIHRoZSBcIkFkZGluZyArMjVcIiB0ZXh0IGJlZm9yZSB0aGUgcGFnZSBsb2Fkc1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV9jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxudmFyIHRhcmdldF9udW07XHJcbnZhciBobF9udW07XHJcbnZhciBvbF9udW07XHJcblxyXG4vKipcclxuICogQWRqdXN0cyB0aGUgZ3JhZGVzIHRoYXQgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBpbiBvcmRpbmFyeSBsZXZlbCBhbmQgaGlnaGVyIGxldmVsIGZvciBjb3JyZWN0IG91dHB1dFxyXG4gKiBmb3IgZXhhbXBsZSBhIEg2IGFuZCBPMiBhcmUgYm90aCB3b3J0aCA0NiBwb2ludHNcclxuICogQHBhcmFtIHthcnJheX0gbGV0dGVyX2dyYWRlc1xyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gYWRqdXN0b3IobGV0dGVyX2dyYWRlcykge1xyXG4gIHZhciBDSEFOR0VBQkxFUyA9IFtcImg1XCIsIFwiaDZcIiwgXCJoN1wiLCBcIm8xXCIsIFwibzJcIiwgXCJvM1wiXTtcclxuICB2YXIgSExfU1VCUyA9IFtcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiLCBcImg3XCJdO1xyXG5cclxuICB2YXIgY291bnRlZF9obCA9IDA7XHJcbiAgdmFyIGNvdW50ZWRfb2wgPSAwO1xyXG5cclxuICB2YXIgZGljdF9jaGFuZ2VhYmxlcyA9IHtcclxuICAgIFwiaDVcIjogXCJvMVwiLFxyXG4gICAgXCJoNlwiOiBcIm8yXCIsXHJcbiAgICBcImg3XCI6IFwibzNcIixcclxuICAgIFwibzFcIjogXCJoNVwiLFxyXG4gICAgXCJvMlwiOiBcImg2XCIsXHJcbiAgICBcIm8zXCI6IFwiaDdcIixcclxuICB9O1xyXG5cclxuICB2YXIgaGxfaW5kZXhfY2hhbmdlYWJsZXMgPSBbXTtcclxuICB2YXIgb2xfaW5kZXhfY2hhbmdlYWJsZXMgPSBbXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZXR0ZXJfZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgY3VycmVudCA9IGxldHRlcl9ncmFkZXNbaV07XHJcbiAgICBpZiAoY3VycmVudCBpbiBkaWN0X2NoYW5nZWFibGVzKSB7XHJcbiAgICAgIGlmIChjdXJyZW50IGluIENIQU5HRUFCTEVTKSB7XHJcbiAgICAgICAgaGxfaW5kZXhfY2hhbmdlYWJsZXMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBvbF9pbmRleF9jaGFuZ2VhYmxlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEhMX1NVQlMuaW5jbHVkZXMoY3VycmVudCkpIHtcclxuICAgICAgY291bnRlZF9obCArPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvdW50ZWRfb2wgKz0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBtaXNzX21hdGNoaW5nX2NvdW50cyA9IGNvdW50ZWRfaGwgIT0gaGxfbnVtICYmIGNvdW50ZWRfb2wgIT0gb2xfbnVtO1xyXG5cclxuICBpZiAobWlzc19tYXRjaGluZ19jb3VudHMpIHtcclxuICAgIHZhciBuZWVkZWRfaGwgPSBobF9udW0gLSBjb3VudGVkX2hsO1xyXG4gICAgdmFyIG5lZWRlZF9vbCA9IG9sX251bSAtIGNvdW50ZWRfb2w7XHJcblxyXG4gICAgaWYgKG5lZWRlZF9obCA8IDApIHtcclxuICAgICAgbmVlZGVkX2hsID0gMDtcclxuICAgIH1cclxuICAgIGlmIChuZWVkZWRfb2wgPCAwKSB7XHJcbiAgICAgIG5lZWRlZF9vbCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNoYXJnZXNfbmVlZGVkID0gTWF0aC5tYXgobmVlZGVkX2hsLCBuZWVkZWRfb2wpO1xyXG4gICAgdmFyIG9nX2dyYWRlO1xyXG4gICAgdmFyIGNoYW5nZWRfZ3JhZGU7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2hhcmdlc19uZWVkZWQ7IGkrKykge1xyXG5cclxuICAgICAgdmFyIGluZGV4ID0gb2xfaW5kZXhfY2hhbmdlYWJsZXNbaV07XHJcbiAgICAgIG9nX2dyYWRlID0gbGV0dGVyX2dyYWRlc1tpbmRleF07XHJcblxyXG4gICAgICBjaGFuZ2VkX2dyYWRlID0gZGljdF9jaGFuZ2VhYmxlc1tvZ19ncmFkZV07XHJcbiAgICAgIGxldHRlcl9ncmFkZXNbaW5kZXhdID0gY2hhbmdlZF9ncmFkZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsY3ZwKSB7XHJcbiAgICB2YXIgbGN2cF9tb2R1bGVzID0ge1xyXG4gICAgICA2NjogXCJEaXN0aW5jdGlvblwiLFxyXG4gICAgICA0NjogXCJNZXJpdFwiLFxyXG4gICAgICAyODogXCJQYXNzXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGxjdnBfZ3JhZGVzID0gW1wiaDRcIiwgXCJoNlwiLCBcIm8yXCIsIFwibzRcIl07XHJcblxyXG4gICAgdmFyIGxjdnBfcG9pbnRzID0ge1xyXG4gICAgICBcImg0XCI6IDY2LFxyXG4gICAgICBcImg2XCI6IDQ2LFxyXG4gICAgICBcIm8yXCI6IDQ2LFxyXG4gICAgICBcIm80XCI6IDI4XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjb2xsZWN0ZWRfbGN2cF9wb2ludHMgPSBbXTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBsZXR0ZXJfZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBsZXR0ZXJfZ3JhZGVzW2ldO1xyXG4gICAgICBpZiAobGN2cF9ncmFkZXMuaW5jbHVkZXMoY3VycmVudCkpIHtcclxuICAgICAgICBjb2xsZWN0ZWRfbGN2cF9wb2ludHMucHVzaChsY3ZwX3BvaW50c1tjdXJyZW50XSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29sbGVjdGVkX2xjdnBfcG9pbnRzLnB1c2goOTk5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIG1pbl9sY3ZwX3BvaW50ID0gTWF0aC5taW4oLi4uY29sbGVjdGVkX2xjdnBfcG9pbnRzKTtcclxuICAgIHZhciBtaW5fbGN2cF9pbmRleCA9IGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5pbmRleE9mKG1pbl9sY3ZwX3BvaW50KTtcclxuICAgIHZhciB2YWxpZF9sY3ZwX2NoYW5nZSA9IG1pbl9sY3ZwX3BvaW50ICE9IDk5OTtcclxuXHJcbiAgICBpZiAodmFsaWRfbGN2cF9jaGFuZ2UpIHtcclxuICAgICAgbGV0dGVyX2dyYWRlc1ttaW5fbGN2cF9pbmRleF0gPSBsY3ZwX21vZHVsZXNbbWluX2xjdnBfcG9pbnRdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxldHRlcl9ncmFkZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB5ZWFybHkgam9rZSB0aGF0IHdpbGwgYmUgYWN0aXZhdGVkIGluIG1heSBhbmQganVuZVxyXG4gKi9cclxuZnVuY3Rpb24gbW90aXZhdGUoKSB7XHJcbiAgc2Vjb25kcyArPSAxO1xyXG4gIGlmICg1OSA8PSBzZWNvbmRzICYmIHNlY29uZHMgPD0gNjApIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWluZm9cIikuc3JjID0gXCJpbWFnZXMvam9rZS53ZWJwXCI7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctaW5mb1wiKS5zcmMgPSBcImltYWdlcy9wb2ludHMtc3lzdGVtLndlYnBcIjtcclxuICB9XHJcblxyXG4gIGlmIChzZWNvbmRzID4gNjApIHtcclxuICAgIHNlY29uZHMgPSAwO1xyXG4gIH1cclxufVxyXG5cclxudmFyIHNlY29uZHMgPSAwO1xyXG52YXIgZHQgPSBuZXcgRGF0ZSgpO1xyXG52YXIgbW9udGggPSBkdC5nZXRNb250aCgpICsgMTsgLy8gY2F1c2Ugb2YgMCBpbmRleGluZyBvZiB0aGUgMTIgbW9udGhzIGJlY29tZXMgMCAtIDExXHJcbmlmIChbNCwgNV0uaW5jbHVkZXMobW9udGgpKSB7XHJcbiAgc2V0SW50ZXJ2YWwobW90aXZhdGUsIDEwMDApO1xyXG4gIG1vdGl2YXRlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBncmFkZSBhdmVyYWdlIGFuZCBwb2ludHMgdG8gZ3JhZGVzIGFzIGxpc3Qgb2YgbnVtYmVyc1xyXG4gKiBAcGFyYW0ge2FycmF5fSBwb2ludHNfbmVlZGVkIFxyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gZ2FyX2FuZF9wdGcocG9pbnRzX25lZWRlZCkge1xyXG5cclxuICBwb2ludHNfbmVlZGVkID0gcG9pbnRzX25lZWRlZC5zb3J0KCk7XHJcblxyXG4gIHZhciBtaXhlZF9yYW5rcyA9IHtcclxuICAgIDEwMDogXCJoMVwiLFxyXG4gICAgODg6IFwiaDJcIixcclxuICAgIDc3OiBcImgzXCIsXHJcbiAgICA2NjogXCJoNFwiLFxyXG5cclxuICAgIDU2OiBcImg1L28xXCIsXHJcbiAgICA0NjogXCJoNi9vMlwiLFxyXG4gICAgMzc6IFwiaDcvbzNcIixcclxuICAgIDI4OiBcIm80XCIsXHJcbiAgICAyMDogXCJvNVwiLFxyXG4gICAgMTI6IFwibzZcIixcclxuICB9O1xyXG5cclxuICBpZiAoaGxfbnVtID4gMCkge1xyXG4gICAgbWl4ZWRfcmFua3NbNTZdID0gXCJoNVwiO1xyXG4gICAgbWl4ZWRfcmFua3NbNDZdID0gXCJoNlwiO1xyXG4gICAgbWl4ZWRfcmFua3NbMzddID0gXCJoN1wiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9sX251bSA+IDApIHtcclxuICAgIG1peGVkX3JhbmtzWzU2XSA9IFwibzFcIjtcclxuICAgIG1peGVkX3JhbmtzWzQ2XSA9IFwibzJcIjtcclxuICAgIG1peGVkX3JhbmtzWzM3XSA9IFwibzNcIjtcclxuICB9XHJcblxyXG4gIHZhciByYW5rcyA9IHtcclxuICAgIFwiaDFcIjogOTAsXHJcbiAgICBcImgyXCI6IDgwLFxyXG4gICAgXCJoM1wiOiA3MCxcclxuICAgIFwiaDRcIjogNjAsXHJcbiAgICBcImg1XCI6IDU2LFxyXG4gICAgXCJoNlwiOiA0NixcclxuICAgIFwiaDdcIjogMzcsXHJcblxyXG4gICAgXCJEaXN0aW5jdGlvblwiOiA2NixcclxuICAgIFwiTWVyaXRcIjogNDYsXHJcbiAgICBcIlBhc3NcIjogMjgsXHJcblxyXG4gICAgXCJvMVwiOiA1NixcclxuICAgIFwibzJcIjogNDYsXHJcbiAgICBcIm8zXCI6IDM3LFxyXG4gICAgXCJvNFwiOiAyOCxcclxuICAgIFwibzVcIjogMjAsXHJcbiAgICBcIm82XCI6IDEyLFxyXG4gIH07XHJcblxyXG4gIGlmIChobF9udW0gPiAwKSB7XHJcbiAgICByYW5rc1tcImg1L28xXCJdID0gNTA7XHJcbiAgICByYW5rc1tcImg2L28yXCJdID0gNDA7XHJcbiAgICByYW5rc1tcImg3L28zXCJdID0gMzA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJhbmtzW1wiaDUvbzFcIl0gPSA5MDtcclxuICAgIHJhbmtzW1wiaDYvbzJcIl0gPSA4MDtcclxuICAgIHJhbmtzW1wiaDcvbzNcIl0gPSA3MDtcclxuICB9XHJcblxyXG4gIHZhciBncmFkZXNfc291bHRpb24gPSBbXTtcclxuICB2YXIgdG90YWwgPSAwO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzX25lZWRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHBvaW50c19uZWVkZWRbaV0gIT0gMjUpIHtcclxuICAgICAgZ3JhZGVzX3NvdWx0aW9uLnB1c2gobWl4ZWRfcmFua3NbcG9pbnRzX25lZWRlZFtpXV0pO1xyXG4gICAgICB0b3RhbCArPSByYW5rc1ttaXhlZF9yYW5rc1twb2ludHNfbmVlZGVkW2ldXV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRvdGFsID0gdG90YWwgLyAoaGxfbnVtICsgb2xfbnVtKTtcclxuICB2YXIgcGVyY2VudGFnZV9hdmcgPSBTdHJpbmcoTWF0aC5yb3VuZCh0b3RhbCkpICsgXCIlXCI7XHJcbiAgZ3JhZGVzX3NvdWx0aW9uID0gYWRqdXN0b3IoZ3JhZGVzX3NvdWx0aW9uKTtcclxuXHJcblxyXG4gIC8vIHBlcmNlbnRhZ2UgYXMgYSBzdHJpbmcsIGFuIGFycmF5IG9mIGdyYWRlcyBhcyBudW1iZXJzXHJcbiAgcmV0dXJuIFtwZXJjZW50YWdlX2F2ZywgZ3JhZGVzX3NvdWx0aW9uXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheV9wbHVzXzI1KGJvb2xfaGxfbWF0aHMpIHtcclxuICB2YXIgYWRkaW5nXzI1X2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X2NvbnRhaW5lclwiKTtcclxuICBpZiAoYm9vbF9obF9tYXRocykge1xyXG4gICAgYWRkaW5nXzI1X2NvbnRhaW5lci5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFkZGluZ18yNV9jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVkX2NvbW1hcyhncmFkZXMpIHtcclxuICBncmFkZXMgPSBncmFkZXMudG9TdHJpbmcoKTtcclxuICBncmFkZXMgPSBncmFkZXMucmVwbGFjZUFsbChcIixcIiwgXCI8c3Ryb25nIGNsYXNzPSdyZWQnPiw8L3N0cm9uZz5cIik7XHJcblxyXG4gIHJldHVybiBncmFkZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpbmNyZW1lbnRzIGEgZ3JhZGUncyB2YWx1ZSB0byB0aGUgbmV4dCBvbmVcclxuICogZm9yIGV4YW1wbGUgaW5jcmVtZW50IGEgZ3JhZGUgdGhhdCBoYXMgdGhlIHZhbHVlIG9mIDg4IHdpbGwgYmUgaW5jcmVhc2VkIHRvIDEwMFxyXG4gKiBAcGFyYW0ge2FycmF5fSBncmFkZXMgXHJcbiAqIEBwYXJhbSB7aW50fSBpbmRleCBcclxuICogQHBhcmFtIHtib29sZWFufSBtYXRoc19wbHVzXzI1IFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIHNpbmdsZV9jaGFuZ2UoZ3JhZGVzLCBpbmRleCwgbWF0aHNfcGx1c18yNSkge1xyXG4gIGNvbnN0IGlzX2luX2RpY3QgPSBbMTIsIDIwLCAyOCwgMzcsIDQ2LCA1NiwgNjYsIDc3LCA4OCwgMTAwXTtcclxuICB2YXIgZGljdF9jaGFuZ2VhYmxlcyA9IHtcclxuICAgIDEyOiAyMCxcclxuICAgIDIwOiAyOCxcclxuICAgIDI4OiAzNyxcclxuICAgIDM3OiA0NixcclxuICAgIDQ2OiA1NixcclxuICAgIDU2OiA2NixcclxuICAgIDY2OiA3NyxcclxuICAgIDc3OiA4OCxcclxuICAgIDg4OiAxMDBcclxuICB9O1xyXG5cclxuICBpZiAoaXNfaW5fZGljdC5pbmNsdWRlcyhncmFkZXNbaW5kZXhdKSkge1xyXG4gICAgZ3JhZGVzW2luZGV4XSA9IGRpY3RfY2hhbmdlYWJsZXNbZ3JhZGVzW2luZGV4XV07XHJcbiAgfVxyXG4gIGlmIChtYXRoc19wbHVzXzI1ICYmIChncmFkZXMuaW5jbHVkZXMoMjUpKSA9PSBmYWxzZSkge1xyXG4gICAgZ3JhZGVzLnB1c2goMjUpO1xyXG4gIH1cclxuICByZXR1cm4gZ3JhZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdW0oYXJyYXkpIHtcclxuICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsID0+ICtlbCkucmVkdWNlKChhY2MsIGN2KSA9PiBhY2MgKyBjdiwgMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZW5lcmF0ZXMgYSBzdGFydGluZyBwb2ludCBvZiBhbiBhcnJheSBvZiB3aGljaCBpbmRpdmlkdWFsIHZhbHVlcyB3aWxsIGJlIGluY3JlYXNlZCBsYXRlciBcclxuICogQHBhcmFtIHtpbnR9IGhsX3N1YnMgXHJcbiAqIEBwYXJhbSB7aW50fSBvbF9zdWJzIFxyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnRpbmdfZ3JhZGVzKGhsX3N1YnMsIG9sX3N1YnMpIHtcclxuICB2YXIgZ3JhZGVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBobF9zdWJzOyBpKyspIHtcclxuICAgIGdyYWRlcy5wdXNoKDM3KTtcclxuICB9XHJcbiAgZm9yIChpID0gMDsgaSA8IG9sX3N1YnM7IGkrKykge1xyXG4gICAgZ3JhZGVzLnB1c2goMTIpO1xyXG4gIH1cclxuICByZXR1cm4gZ3JhZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdoZXN0X3BvaW50c19wb3NzKGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpIHtcclxuICB2YXIgY291bnRlciA9IDA7XHJcbiAgY291bnRlciArPSAoMTAwICogaGxfc3VicykgKyAoNTYgKiBvbF9zdWJzKTtcclxuICBpZiAobWF0aHNfcGx1c18yNSkge1xyXG4gICAgY291bnRlciArPSAyNTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudGVyO1xyXG59XHJcblxyXG4vKipcclxuICogdGhpcyBpcyB3aG9sZSBhbGdvcm90aGltIGJlaGluZCBnZW5lcmF0ZSBjb3JyZWN0IG91dHB1dFxyXG4gKiBpbiBzaG9ydCBpdCBjcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IGFyZSBncmFkdWFsbHkgaW5jcmVhc2VkIHVudGlsIGl0J3Mgb3ZlcmFsbCB2YWx1ZSBpcyBpbmNyZWFzZWRcclxuICogdW50aWwgaXQgXCJyZWFjaGVzXCIgdGhlIGNhbyBwb2ludHMgdGFyZ2V0XHJcbiAqIEBwYXJhbSB7dGFyZ2V0fSB0YXJnZXQgXHJcbiAqIEBwYXJhbSB7aGxfc3Vic30gaGxfc3VicyBcclxuICogQHBhcmFtIHtvbF9zdWJzfSBvbF9zdWJzIFxyXG4gKiBAcGFyYW0ge21hdGhzX3BsdXNfMjV9IG1hdGhzX3BsdXNfMjUgXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFpbih0YXJnZXQsIGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpIHtcclxuICB2YXIgdG90YWxfc3VicyA9IGhsX3N1YnMgKyBvbF9zdWJzO1xyXG4gIHZhciBjdXJyZW50X2dyYWRlcyA9IHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKTtcclxuICB2YXIgY3VycmVudF9wb2ludHMgPSBzdW0oY3VycmVudF9ncmFkZXMpO1xyXG4gIHZhciBpbmRleCA9IDA7XHJcbiAgdmFyIG1heF9saW1pdCA9IGhpZ2hlc3RfcG9pbnRzX3Bvc3MoaGxfc3Vicywgb2xfc3VicywgbWF0aHNfcGx1c18yNSk7XHJcbiAgdmFyIHdpdGhpbl9yYW5nZSA9IGN1cnJlbnRfcG9pbnRzIDw9IG1heF9saW1pdCAmJiB0YXJnZXQgPD0gbWF4X2xpbWl0ICYmIChjdXJyZW50X3BvaW50cyA8IHRhcmdldCk7XHJcblxyXG4gIHdoaWxlICh3aXRoaW5fcmFuZ2UpIHtcclxuICAgIGN1cnJlbnRfZ3JhZGVzID0gc2luZ2xlX2NoYW5nZShjdXJyZW50X2dyYWRlcywgaW5kZXgsIG1hdGhzX3BsdXNfMjUpO1xyXG4gICAgY3VycmVudF9wb2ludHMgPSBzdW0oY3VycmVudF9ncmFkZXMpO1xyXG4gICAgd2l0aGluX3JhbmdlID0gY3VycmVudF9wb2ludHMgPD0gbWF4X2xpbWl0ICYmIHRhcmdldCA8PSBtYXhfbGltaXQgJiYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KTtcclxuICAgIGluZGV4ICs9IDE7XHJcblxyXG4gICAgaWYgKGluZGV4ID09IHRvdGFsX3N1YnMpIHtcclxuICAgICAgaW5kZXggPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KSB7XHJcbiAgICBjdXJyZW50X2dyYWRlcyA9IFtdO1xyXG4gICAgY3VycmVudF9wb2ludHMgPSBbXTtcclxuICB9XHJcbiAgcmV0dXJuIFtjdXJyZW50X2dyYWRlcywgY3VycmVudF9wb2ludHNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVfaW5wdXRzKCkge1xyXG4gIHZhciB0YXJnZXRfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldF90ZXh0XCIpO1xyXG4gIHRhcmdldF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBobF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGxfc3Vic190ZXh0XCIpO1xyXG4gIGhsX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICB9KTtcclxuXHJcbiAgdmFyIG9sX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbF9zdWJzX3RleHRcIik7XHJcbiAgb2xfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG51cGRhdGVfaW5wdXRzKCk7XHJcblxyXG4vLyB0byBoaWRlIHRoZSBib3ggb2Ygb3V0cHV0IHdoZW4gdGhlIHBhZ2UgbG9hZGVzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0X2NvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbmZ1bmN0aW9uIHB1bHNlSW5wdXRzKCkge1xyXG4gIGxldCBpbnB1dEVsZW1lbnQgPSBbXCJ0YXJnZXRfdGV4dFwiLCBcImhsX3N1YnNfdGV4dFwiLCBcIm9sX3N1YnNfdGV4dFwiLCBcImJvb2xfaGxfbWF0aHNcIiwgXCJsY3ZwXCJdO1xyXG5cclxuICBpbnB1dEVsZW1lbnQuZm9yRWFjaChpZCA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZChcInB1bHNlQW5pbWF0aW9uXCIpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0b3ItY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaW5wdXRFbGVtZW50LmZvckVhY2goaWQgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LnJlbW92ZShcInB1bHNlQW5pbWF0aW9uXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnB1bHNlSW5wdXRzKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaW5kX3BvaW50c19uZWVkZWQoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRfY29udGFpbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0X2NvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuXHJcbiAgdGFyZ2V0X251bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldF90ZXh0XCIpLnZhbHVlKTtcclxuICBobF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJobF9zdWJzX3RleHRcIikudmFsdWUpO1xyXG4gIG9sX251bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sX3N1YnNfdGV4dFwiKS52YWx1ZSk7XHJcblxyXG4gIC8vIGNoZWNrIGZvciBpbnZhbGlkIGlucHV0XHJcbiAgdmFyIGludmFsaWRfdGFyZ2V0X2lucHV0ID0gKHRhcmdldF9udW0gPD0gMCkgfHwgKHRhcmdldF9udW0gPiA2MjUpO1xyXG4gIHZhciBpbnZhbGlkX3N1YnNfaW5wdXQgPSAoaGxfbnVtIDwgMCkgfHwgKG9sX251bSA8IDApO1xyXG4gIHZhciBtYXhfcHRzID0gKGhsX251bSAqIDEwMCkgKyAob2xfbnVtICogNTYpICsgYWRkXzI1O1xyXG4gIHZhciBpbnZhbGlkX3JhbmdlID0gKG1heF9wdHMgPj0gdGFyZ2V0X251bSkgPT0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IHJhbmdlX2Vycm9yX21zZyA9IGBJdCdzIGltcG9zc2libGUgdG8gYWNoaWV2ZSAke3RhcmdldF9udW19IENBTyBwb2ludHMgd2l0aCAke2hsX251bX0gaGlnaGVyLWxldmVsIHN1YmplY3RzIGFuZCAke29sX251bX0gb3JkaW5hcnktbGV2ZWwgc3ViamVjdHMuYDtcclxuICBjb25zdCBwdHNfZXJyb3JfbXNnID0gXCJZb3VyIGlucHV0dGVkIENBTyBwb2ludHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDYyNS5cIjtcclxuICBjb25zdCBzdWJqZWN0c19lcnJvcl9tc2cgPSBcIllvdSBjYW4ndCBoYXZlIGEgbmVnYXRpdmUgYW1vdXQgb2Ygc3ViamVjdHNcIjtcclxuXHJcbiAgdmFyIGVycm9yX3N0YXR1cyA9IFwiXCI7XHJcblxyXG4gIGlmIChpbnZhbGlkX3JhbmdlKSB7XHJcbiAgICBlcnJvcl9zdGF0dXMgKz0gcmFuZ2VfZXJyb3JfbXNnICsgXCJcXG5cIjtcclxuICB9XHJcbiAgaWYgKGludmFsaWRfdGFyZ2V0X2lucHV0KSB7XHJcbiAgICBlcnJvcl9zdGF0dXMgKz0gcHRzX2Vycm9yX21zZyArIFwiXFxuXCI7XHJcbiAgfVxyXG4gIGlmIChpbnZhbGlkX3N1YnNfaW5wdXQpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSBzdWJqZWN0c19lcnJvcl9tc2cgKyBcIlxcblwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IGludmFsaWRfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIik7XHJcbiAgbGV0IGluZm9fY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX2NvbnRhaW5lclwiKTtcclxuICBsZXQgc291bHRpb25fb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VsdGlvbl9vdXRwdXRcIik7XHJcblxyXG4gIGlmIChlcnJvcl9zdGF0dXMgIT0gXCJcIikge1xyXG4gICAgaW52YWxpZF9pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZUluXCIpO1xyXG4gICAgaW52YWxpZF9pbnB1dC5vZmZzZXRXaWR0aGw7XHJcbiAgICBpbnZhbGlkX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJmYWRlSW5cIik7XHJcblxyXG4gICAgaW52YWxpZF9pbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaW52YWxpZF9pbnB1dC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICBpbnZhbGlkX2lucHV0LmlubmVySFRNTCA9IGVycm9yX3N0YXR1cztcclxuXHJcbiAgICBpbmZvX2NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBzb3VsdGlvbl9vdXRwdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpbmdfMjVfY29udGFpbmVyXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgICBpZiAodGFyZ2V0X251bSAhPSAwICYmIChobF9udW0gIT0gMCB8fCBvbF9udW0gIT0gMCkpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRfY29udGFpbmVyXCIpLnNjcm9sbEludG9WaWV3KCk7XHJcblxyXG5cclxuICAgICAgLy8gdG9kbzogb25seSBzY3JvbGwgdXAgaWYgdGhlIHVzZXIgZG9lc24ndCBzY3JvbGxcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdG9yLWNvbnRhaW5lclwiKS5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVsc2Uge1xyXG4gICAgaW5mb19jb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgaW5mb19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHNvdWx0aW9uX291dHB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhciBtYXRoc19wbHVzXzI1O1xyXG4gICAgaWYgKGFkZF8yNSA9PSAyNSkge1xyXG4gICAgICBtYXRoc19wbHVzXzI1ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBtYXRoc19wbHVzXzI1ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgbWF0Y2hlc19pbmZvID0gbWFpbih0YXJnZXRfbnVtLCBobF9udW0sIG9sX251bSwgbWF0aHNfcGx1c18yNSk7XHJcbiAgICB2YXIgcG9pbnRzX2xpc3QgPSBtYXRjaGVzX2luZm9bMF07XHJcbiAgICB2YXIgcG9pbnRzX3JlcSA9IG1hdGNoZXNfaW5mb1sxXTtcclxuXHJcbiAgICBpZiAocG9pbnRzX2xpc3QuaW5jbHVkZXMoMjUpKSB7XHJcbiAgICAgIGRpc3BsYXlfcGx1c18yNSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBkaXNwbGF5X3BsdXNfMjUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdmFyIG91dHB1dF9pbmZvID0gZ2FyX2FuZF9wdGcocG9pbnRzX2xpc3QpO1xyXG5cclxuICAgIHZhciBncmFkZV9hdmcgPSBvdXRwdXRfaW5mb1swXTtcclxuICAgIHZhciByZXFfcmVzdWx0cyA9IG91dHB1dF9pbmZvWzFdOyAvLyB0aGVzZSBhcmUgbGV0dGVyIGdyYWRlc1xyXG4gICAgcmVxX3Jlc3VsdHMgPSByZWRfY29tbWFzKHJlcV9yZXN1bHRzKTtcclxuXHJcblxyXG4gICAgbGV0IGVsZW1fcmVxX3Jlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcV9yZXN1bHRzXCIpO1xyXG5cclxuICAgIGlmIChlbGVtX3JlcV9yZXN1bHRzLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2ludHNfcmVxXCIpLmlubmVySFRNTCA9IFN0cmluZyhwb2ludHNfcmVxKTtcclxuICAgICAgZWxlbV9yZXFfcmVzdWx0cy5pbm5lckhUTUwgPSBTdHJpbmcocmVxX3Jlc3VsdHMpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYWRlX2F2Z19yZXFcIikuaW5uZXJIVE1MID0gU3RyaW5nKGdyYWRlX2F2Zyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnb2pvZGV2SWNvbigpIHtcclxuICBsZXQgZ29qb2RldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml4ZWQtZ29qb2RldlwiKTtcclxuICBsZXQgdGFyZ2V0Qm90dG9tO1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCkge1xyXG4gICAgdGFyZ2V0Qm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29sX2hsX21hdGhzXCIpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRhcmdldEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZVwiKTtcclxuICB9XHJcblxyXG4gIGdvam9kZXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgbGV0IHdlbGNvbWVSZWN0ID0gdGFyZ2V0Qm90dG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHdlbGNvbWVSZWN0LmJvdHRvbSA8IDApIHtcclxuICAgICAgZ29qb2Rldi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBnb2pvZGV2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGdvam9kZXYuc3R5bGUgPSBcInRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICsxNXB4KTtcIjtcclxuICAgICAgZ29qb2Rldi5zdHlsZS5hbmltYXRpb25EZWxheSA9IFwiMC41c1wiO1xyXG4gICAgICBnb2pvZGV2LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgZ29qb2Rldi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gIGdvam9kZXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICBnb2pvZGV2LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICB9KTtcclxuXHJcbiAgZ29qb2Rldi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgZ29qb2Rldi5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcclxuICB9KVxyXG4gIGhhbmRsZVNjcm9sbCgpO1xyXG59XHJcblxyXG5nb2pvZGV2SWNvbigpO1xyXG5cclxuZnVuY3Rpb24gZ29qb2RldigpIHtcclxuICBsZXQgZW1tYW51ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvam9kZXZcIik7XHJcbiAgbGV0IGluZGV4ID0gMDtcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblxyXG4gICAgZW1tYW51ZWwuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVJblwiKTtcclxuICAgIGVtbWFudWVsLm9mZnNldFdpZHRoO1xyXG4gICAgZW1tYW51ZWwuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICBlbW1hbnVlbC5zcmMgPSBcImltYWdlcy9nb2pvZGV2LndlYnBcIjtcclxuICAgICAgaW5kZXggPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGVtbWFudWVsLnNyYyA9IFwiaW1hZ2VzL2xvZ28ud2VicFwiO1xyXG4gICAgICBpbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgfSwgMzUwMClcclxufVxyXG5cclxuZ29qb2RldigpXHJcblxyXG4vKipcclxuICogdG9kbzogYWRkIGluIGZlYXR1cmUgdG8gc2hvdyB3aGF0IGNvdXJzZXMgdGhleSBjYW4gZG8gd2l0aCB0aGUgcG9pbnRzIGFuZCBncmFkZXMgb3V0cHV0IGFuZCBsZXQgdGhlbSBmaWx0ZXIgYnkgbG9jYXRpb25hIGFuZCBjb3Vyc2UgbmFtZVxyXG4gKiB0b2RvOiBhbGxvdyB1c2VycyB0byBlbnRlciBmb3IgbW9yZSB0aGFuIDYgc3ViamVjdHNcclxuICogdG9kbzogd2hlbiB0aGUgdXNlciBjYXVzZXMgYW4gZXJyb3Igc2Nyb2xsIHVwIHRvIHRoZSBjYXVzZSBvZiB0aGUgZXJyb3JzIGFuZCBzaG93IHRoZW0gd2hhdCB0aGV5IGNhbiBnZXRcclxuICovIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBZUEsTUFBSSxTQUFTO0FBS2IsV0FBUyxjQUFjO0FBQ3JCLFFBQUksZ0JBQWdCLFNBQVMsZUFBZSxlQUFlO0FBQzNELFFBQUksaUJBQWlCLFNBQVMsZUFBZSxnQkFBZ0I7QUFDN0QsUUFBSSxRQUFRLGNBQWM7QUFDMUIsUUFBSSxTQUFTLEdBQUc7QUFDZCxvQkFBYyxRQUFRO0FBQ3RCLHFCQUFlLE1BQU0sVUFBVTtBQUMvQixxQkFBZSxNQUFNLGFBQWE7QUFDbEMsY0FBUTtBQUNSLGVBQVM7QUFBQSxJQUVYLE9BQU87QUFDTCxvQkFBYyxRQUFRO0FBQ3RCLHFCQUFlLE1BQU0sVUFBVTtBQUMvQixlQUFTO0FBQ1QsY0FBUTtBQUFBLElBQ1Y7QUFDQSx1QkFBbUI7QUFBQSxFQUNyQjtBQUNBLGNBQVk7QUFHWixXQUFTLGVBQWUsZUFBZSxFQUFFLGlCQUFp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
