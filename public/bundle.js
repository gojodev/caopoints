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
  document.getElementById("year").innerHTML = (/* @__PURE__ */ new Date()).getFullYear();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaG9tZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vICEgR0xPQkFMXHJcbnZhciBhZGRfMjUgPSAyNTtcclxuLyoqXHJcbiAqIGRldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBhZGRfMjUgdmFyaWFibGVcclxuICogdG9nZ2xlcyBkaXNwbGF5IG9mIHRoZSBidXR0b25cclxuICovXHJcbmZ1bmN0aW9uIGlzX2hsX21hdGhzKCkge1xyXG4gIHZhciBib29sX2hsX21hdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29sX2hsX21hdGhzXCIpO1xyXG4gIHZhciBhZGRpbmdfMjVfdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X3RleHRcIik7XHJcbiAgdmFyIHZhbHVlID0gYm9vbF9obF9tYXRocy52YWx1ZTtcclxuICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgYm9vbF9obF9tYXRocy52YWx1ZSA9IDE7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS50cmFuc2l0aW9uID0gXCIwLjJzXCI7XHJcbiAgICB2YWx1ZSA9IDE7XHJcbiAgICBhZGRfMjUgPSAyNTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGJvb2xfaGxfbWF0aHMudmFsdWUgPSAwO1xyXG4gICAgYWRkaW5nXzI1X3RleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgYWRkXzI1ID0gMDtcclxuICAgIHZhbHVlID0gMDtcclxuICB9XHJcbiAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbn1cclxuaXNfaGxfbWF0aHMoKTtcclxuXHJcbi8vIFwibGlzdGVuc1wiIGZvciBhIGNsaWNrIGZyb20gdGhlIGlzX2hsX21hdGhzIGZ1bmN0aW9uXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vbF9obF9tYXRoc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaXNfaGxfbWF0aHMpO1xyXG5cclxuLyoqXHJcbiAqIGRldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBsY3ZwIHZhcmlhYmxlXHJcbiAqIHRvZ2dsZXMgZGlzcGxheSBvZiB0aGUgYnV0dG9uXHJcbiAqL1xyXG5cclxudmFyIGxjdnA7XHJcbmZ1bmN0aW9uIGlzX2xjdnAoKSB7XHJcbiAgdmFyIGxjdnBfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxjdnBcIik7XHJcbiAgdmFyIHZhbHVlID0gbGN2cF9pbnB1dC52YWx1ZTtcclxuICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgbGN2cCA9IHRydWU7XHJcbiAgICBsY3ZwX2lucHV0LnZhbHVlID0gMTtcclxuICAgIHZhbHVlID0gMDtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHZhbHVlID0gMTtcclxuICAgIGxjdnAgPSBmYWxzZTtcclxuICAgIGxjdnBfaW5wdXQudmFsdWUgPSAwO1xyXG4gIH1cclxuICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICByZXR1cm4gbGN2cDtcclxufVxyXG5cclxuaXNfbGN2cCgpO1xyXG5cclxuLy8gXCJsaXN0ZW5zXCIgZm9yIGEgY2xpY2sgZnJvbSB0aGUgaXNfbGN2cCBmdW5jdGlvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxjdnBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGlzX2xjdnApO1xyXG5cclxuLy8gaGlkZXMgdGhlIFwiQWRkaW5nICsyNVwiIHRleHQgYmVmb3JlIHRoZSBwYWdlIGxvYWRzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X2NvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG52YXIgdGFyZ2V0X251bTtcclxudmFyIGhsX251bTtcclxudmFyIG9sX251bTtcclxuXHJcbi8qKlxyXG4gKiBBZGp1c3RzIHRoZSBncmFkZXMgdGhhdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGluIG9yZGluYXJ5IGxldmVsIGFuZCBoaWdoZXIgbGV2ZWwgZm9yIGNvcnJlY3Qgb3V0cHV0XHJcbiAqIGZvciBleGFtcGxlIGEgSDYgYW5kIE8yIGFyZSBib3RoIHdvcnRoIDQ2IHBvaW50c1xyXG4gKiBAcGFyYW0ge2FycmF5fSBsZXR0ZXJfZ3JhZGVzXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBhZGp1c3RvcihsZXR0ZXJfZ3JhZGVzKSB7XHJcbiAgdmFyIENIQU5HRUFCTEVTID0gW1wiaDVcIiwgXCJoNlwiLCBcImg3XCIsIFwibzFcIiwgXCJvMlwiLCBcIm8zXCJdO1xyXG4gIHZhciBITF9TVUJTID0gW1wiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCIsIFwiaDdcIl07XHJcblxyXG4gIHZhciBjb3VudGVkX2hsID0gMDtcclxuICB2YXIgY291bnRlZF9vbCA9IDA7XHJcblxyXG4gIHZhciBkaWN0X2NoYW5nZWFibGVzID0ge1xyXG4gICAgXCJoNVwiOiBcIm8xXCIsXHJcbiAgICBcImg2XCI6IFwibzJcIixcclxuICAgIFwiaDdcIjogXCJvM1wiLFxyXG4gICAgXCJvMVwiOiBcImg1XCIsXHJcbiAgICBcIm8yXCI6IFwiaDZcIixcclxuICAgIFwibzNcIjogXCJoN1wiLFxyXG4gIH07XHJcblxyXG4gIHZhciBobF9pbmRleF9jaGFuZ2VhYmxlcyA9IFtdO1xyXG4gIHZhciBvbF9pbmRleF9jaGFuZ2VhYmxlcyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjdXJyZW50ID0gbGV0dGVyX2dyYWRlc1tpXTtcclxuICAgIGlmIChjdXJyZW50IGluIGRpY3RfY2hhbmdlYWJsZXMpIHtcclxuICAgICAgaWYgKGN1cnJlbnQgaW4gQ0hBTkdFQUJMRVMpIHtcclxuICAgICAgICBobF9pbmRleF9jaGFuZ2VhYmxlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG9sX2luZGV4X2NoYW5nZWFibGVzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoSExfU1VCUy5pbmNsdWRlcyhjdXJyZW50KSkge1xyXG4gICAgICBjb3VudGVkX2hsICs9IDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY291bnRlZF9vbCArPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG1pc3NfbWF0Y2hpbmdfY291bnRzID0gY291bnRlZF9obCAhPSBobF9udW0gJiYgY291bnRlZF9vbCAhPSBvbF9udW07XHJcblxyXG4gIGlmIChtaXNzX21hdGNoaW5nX2NvdW50cykge1xyXG4gICAgdmFyIG5lZWRlZF9obCA9IGhsX251bSAtIGNvdW50ZWRfaGw7XHJcbiAgICB2YXIgbmVlZGVkX29sID0gb2xfbnVtIC0gY291bnRlZF9vbDtcclxuXHJcbiAgICBpZiAobmVlZGVkX2hsIDwgMCkge1xyXG4gICAgICBuZWVkZWRfaGwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG5lZWRlZF9vbCA8IDApIHtcclxuICAgICAgbmVlZGVkX29sID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hhcmdlc19uZWVkZWQgPSBNYXRoLm1heChuZWVkZWRfaGwsIG5lZWRlZF9vbCk7XHJcbiAgICB2YXIgb2dfZ3JhZGU7XHJcbiAgICB2YXIgY2hhbmdlZF9ncmFkZTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBjaGFyZ2VzX25lZWRlZDsgaSsrKSB7XHJcblxyXG4gICAgICB2YXIgaW5kZXggPSBvbF9pbmRleF9jaGFuZ2VhYmxlc1tpXTtcclxuICAgICAgb2dfZ3JhZGUgPSBsZXR0ZXJfZ3JhZGVzW2luZGV4XTtcclxuXHJcbiAgICAgIGNoYW5nZWRfZ3JhZGUgPSBkaWN0X2NoYW5nZWFibGVzW29nX2dyYWRlXTtcclxuICAgICAgbGV0dGVyX2dyYWRlc1tpbmRleF0gPSBjaGFuZ2VkX2dyYWRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGxjdnApIHtcclxuICAgIHZhciBsY3ZwX21vZHVsZXMgPSB7XHJcbiAgICAgIDY2OiBcIkRpc3RpbmN0aW9uXCIsXHJcbiAgICAgIDQ2OiBcIk1lcml0XCIsXHJcbiAgICAgIDI4OiBcIlBhc3NcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbGN2cF9ncmFkZXMgPSBbXCJoNFwiLCBcImg2XCIsIFwibzJcIiwgXCJvNFwiXTtcclxuXHJcbiAgICB2YXIgbGN2cF9wb2ludHMgPSB7XHJcbiAgICAgIFwiaDRcIjogNjYsXHJcbiAgICAgIFwiaDZcIjogNDYsXHJcbiAgICAgIFwibzJcIjogNDYsXHJcbiAgICAgIFwibzRcIjogMjhcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNvbGxlY3RlZF9sY3ZwX3BvaW50cyA9IFtdO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY3VycmVudCA9IGxldHRlcl9ncmFkZXNbaV07XHJcbiAgICAgIGlmIChsY3ZwX2dyYWRlcy5pbmNsdWRlcyhjdXJyZW50KSkge1xyXG4gICAgICAgIGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5wdXNoKGxjdnBfcG9pbnRzW2N1cnJlbnRdKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb2xsZWN0ZWRfbGN2cF9wb2ludHMucHVzaCg5OTkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgbWluX2xjdnBfcG9pbnQgPSBNYXRoLm1pbiguLi5jb2xsZWN0ZWRfbGN2cF9wb2ludHMpO1xyXG4gICAgdmFyIG1pbl9sY3ZwX2luZGV4ID0gY29sbGVjdGVkX2xjdnBfcG9pbnRzLmluZGV4T2YobWluX2xjdnBfcG9pbnQpO1xyXG4gICAgdmFyIHZhbGlkX2xjdnBfY2hhbmdlID0gbWluX2xjdnBfcG9pbnQgIT0gOTk5O1xyXG5cclxuICAgIGlmICh2YWxpZF9sY3ZwX2NoYW5nZSkge1xyXG4gICAgICBsZXR0ZXJfZ3JhZGVzW21pbl9sY3ZwX2luZGV4XSA9IGxjdnBfbW9kdWxlc1ttaW5fbGN2cF9wb2ludF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGV0dGVyX2dyYWRlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIHllYXJseSBqb2tlIHRoYXQgd2lsbCBiZSBhY3RpdmF0ZWQgaW4gbWF5IGFuZCBqdW5lXHJcbiAqL1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyXCIpLmlubmVySFRNTCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbmZ1bmN0aW9uIG1vdGl2YXRlKCkge1xyXG4gIHNlY29uZHMgKz0gMTtcclxuICBpZiAoNTkgPD0gc2Vjb25kcyAmJiBzZWNvbmRzIDw9IDYwKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pbmZvXCIpLnNyYyA9IFwiaW1hZ2VzL2pva2Uud2VicFwiO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWluZm9cIikuc3JjID0gXCJpbWFnZXMvcG9pbnRzLXN5c3RlbS53ZWJwXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoc2Vjb25kcyA+IDYwKSB7XHJcbiAgICBzZWNvbmRzID0gMDtcclxuICB9XHJcbn1cclxuXHJcbnZhciBzZWNvbmRzID0gMDtcclxudmFyIGR0ID0gbmV3IERhdGUoKTtcclxudmFyIG1vbnRoID0gZHQuZ2V0TW9udGgoKSArIDE7IC8vIGNhdXNlIG9mIDAgaW5kZXhpbmcgb2YgdGhlIDEyIG1vbnRocyBiZWNvbWVzIDAgLSAxMVxyXG5pZiAoWzQsIDVdLmluY2x1ZGVzKG1vbnRoKSkge1xyXG4gIHNldEludGVydmFsKG1vdGl2YXRlLCAxMDAwKTtcclxuICBtb3RpdmF0ZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogZ3JhZGUgYXZlcmFnZSBhbmQgcG9pbnRzIHRvIGdyYWRlcyBhcyBsaXN0IG9mIG51bWJlcnNcclxuICogQHBhcmFtIHthcnJheX0gcG9pbnRzX25lZWRlZCBcclxuICogQHJldHVybnMgYXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIGdhcl9hbmRfcHRnKHBvaW50c19uZWVkZWQpIHtcclxuXHJcbiAgcG9pbnRzX25lZWRlZCA9IHBvaW50c19uZWVkZWQuc29ydCgpO1xyXG5cclxuICB2YXIgbWl4ZWRfcmFua3MgPSB7XHJcbiAgICAxMDA6IFwiaDFcIixcclxuICAgIDg4OiBcImgyXCIsXHJcbiAgICA3NzogXCJoM1wiLFxyXG4gICAgNjY6IFwiaDRcIixcclxuXHJcbiAgICA1NjogXCJoNS9vMVwiLFxyXG4gICAgNDY6IFwiaDYvbzJcIixcclxuICAgIDM3OiBcImg3L28zXCIsXHJcbiAgICAyODogXCJvNFwiLFxyXG4gICAgMjA6IFwibzVcIixcclxuICAgIDEyOiBcIm82XCIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKGhsX251bSA+IDApIHtcclxuICAgIG1peGVkX3JhbmtzWzU2XSA9IFwiaDVcIjtcclxuICAgIG1peGVkX3JhbmtzWzQ2XSA9IFwiaDZcIjtcclxuICAgIG1peGVkX3JhbmtzWzM3XSA9IFwiaDdcIjtcclxuICB9XHJcblxyXG4gIGlmIChvbF9udW0gPiAwKSB7XHJcbiAgICBtaXhlZF9yYW5rc1s1Nl0gPSBcIm8xXCI7XHJcbiAgICBtaXhlZF9yYW5rc1s0Nl0gPSBcIm8yXCI7XHJcbiAgICBtaXhlZF9yYW5rc1szN10gPSBcIm8zXCI7XHJcbiAgfVxyXG5cclxuICB2YXIgcmFua3MgPSB7XHJcbiAgICBcImgxXCI6IDkwLFxyXG4gICAgXCJoMlwiOiA4MCxcclxuICAgIFwiaDNcIjogNzAsXHJcbiAgICBcImg0XCI6IDYwLFxyXG4gICAgXCJoNVwiOiA1NixcclxuICAgIFwiaDZcIjogNDYsXHJcbiAgICBcImg3XCI6IDM3LFxyXG5cclxuICAgIFwiRGlzdGluY3Rpb25cIjogNjYsXHJcbiAgICBcIk1lcml0XCI6IDQ2LFxyXG4gICAgXCJQYXNzXCI6IDI4LFxyXG5cclxuICAgIFwibzFcIjogNTYsXHJcbiAgICBcIm8yXCI6IDQ2LFxyXG4gICAgXCJvM1wiOiAzNyxcclxuICAgIFwibzRcIjogMjgsXHJcbiAgICBcIm81XCI6IDIwLFxyXG4gICAgXCJvNlwiOiAxMixcclxuICB9O1xyXG5cclxuICBpZiAoaGxfbnVtID4gMCkge1xyXG4gICAgcmFua3NbXCJoNS9vMVwiXSA9IDUwO1xyXG4gICAgcmFua3NbXCJoNi9vMlwiXSA9IDQwO1xyXG4gICAgcmFua3NbXCJoNy9vM1wiXSA9IDMwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByYW5rc1tcImg1L28xXCJdID0gOTA7XHJcbiAgICByYW5rc1tcImg2L28yXCJdID0gODA7XHJcbiAgICByYW5rc1tcImg3L28zXCJdID0gNzA7XHJcbiAgfVxyXG5cclxuICB2YXIgZ3JhZGVzX3NvdWx0aW9uID0gW107XHJcbiAgdmFyIHRvdGFsID0gMDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50c19uZWVkZWQubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChwb2ludHNfbmVlZGVkW2ldICE9IDI1KSB7XHJcbiAgICAgIGdyYWRlc19zb3VsdGlvbi5wdXNoKG1peGVkX3JhbmtzW3BvaW50c19uZWVkZWRbaV1dKTtcclxuICAgICAgdG90YWwgKz0gcmFua3NbbWl4ZWRfcmFua3NbcG9pbnRzX25lZWRlZFtpXV1dO1xyXG4gICAgfVxyXG4gIH1cclxuICB0b3RhbCA9IHRvdGFsIC8gKGhsX251bSArIG9sX251bSk7XHJcbiAgdmFyIHBlcmNlbnRhZ2VfYXZnID0gU3RyaW5nKE1hdGgucm91bmQodG90YWwpKSArIFwiJVwiO1xyXG4gIGdyYWRlc19zb3VsdGlvbiA9IGFkanVzdG9yKGdyYWRlc19zb3VsdGlvbik7XHJcblxyXG5cclxuICAvLyBwZXJjZW50YWdlIGFzIGEgc3RyaW5nLCBhbiBhcnJheSBvZiBncmFkZXMgYXMgbnVtYmVyc1xyXG4gIHJldHVybiBbcGVyY2VudGFnZV9hdmcsIGdyYWRlc19zb3VsdGlvbl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlfcGx1c18yNShib29sX2hsX21hdGhzKSB7XHJcbiAgdmFyIGFkZGluZ18yNV9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV9jb250YWluZXJcIik7XHJcbiAgaWYgKGJvb2xfaGxfbWF0aHMpIHtcclxuICAgIGFkZGluZ18yNV9jb250YWluZXIuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRpbmdfMjVfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZF9jb21tYXMoZ3JhZGVzKSB7XHJcbiAgZ3JhZGVzID0gZ3JhZGVzLnRvU3RyaW5nKCk7XHJcbiAgZ3JhZGVzID0gZ3JhZGVzLnJlcGxhY2VBbGwoXCIsXCIsIFwiPHN0cm9uZyBjbGFzcz0ncmVkJz4sPC9zdHJvbmc+XCIpO1xyXG5cclxuICByZXR1cm4gZ3JhZGVzO1xyXG59XHJcblxyXG4vKipcclxuICogaW5jcmVtZW50cyBhIGdyYWRlJ3MgdmFsdWUgdG8gdGhlIG5leHQgb25lXHJcbiAqIGZvciBleGFtcGxlIGluY3JlbWVudCBhIGdyYWRlIHRoYXQgaGFzIHRoZSB2YWx1ZSBvZiA4OCB3aWxsIGJlIGluY3JlYXNlZCB0byAxMDBcclxuICogQHBhcmFtIHthcnJheX0gZ3JhZGVzIFxyXG4gKiBAcGFyYW0ge2ludH0gaW5kZXggXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbWF0aHNfcGx1c18yNSBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVfY2hhbmdlKGdyYWRlcywgaW5kZXgsIG1hdGhzX3BsdXNfMjUpIHtcclxuICBjb25zdCBpc19pbl9kaWN0ID0gWzEyLCAyMCwgMjgsIDM3LCA0NiwgNTYsIDY2LCA3NywgODgsIDEwMF07XHJcbiAgdmFyIGRpY3RfY2hhbmdlYWJsZXMgPSB7XHJcbiAgICAxMjogMjAsXHJcbiAgICAyMDogMjgsXHJcbiAgICAyODogMzcsXHJcbiAgICAzNzogNDYsXHJcbiAgICA0NjogNTYsXHJcbiAgICA1NjogNjYsXHJcbiAgICA2NjogNzcsXHJcbiAgICA3NzogODgsXHJcbiAgICA4ODogMTAwXHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzX2luX2RpY3QuaW5jbHVkZXMoZ3JhZGVzW2luZGV4XSkpIHtcclxuICAgIGdyYWRlc1tpbmRleF0gPSBkaWN0X2NoYW5nZWFibGVzW2dyYWRlc1tpbmRleF1dO1xyXG4gIH1cclxuICBpZiAobWF0aHNfcGx1c18yNSAmJiAoZ3JhZGVzLmluY2x1ZGVzKDI1KSkgPT0gZmFsc2UpIHtcclxuICAgIGdyYWRlcy5wdXNoKDI1KTtcclxuICB9XHJcbiAgcmV0dXJuIGdyYWRlcztcclxufVxyXG5cclxuZnVuY3Rpb24gc3VtKGFycmF5KSB7XHJcbiAgcmV0dXJuIGFycmF5LmZpbHRlcihlbCA9PiArZWwpLnJlZHVjZSgoYWNjLCBjdikgPT4gYWNjICsgY3YsIDApO1xyXG59XHJcblxyXG4vKipcclxuICogZ2VuZXJhdGVzIGEgc3RhcnRpbmcgcG9pbnQgb2YgYW4gYXJyYXkgb2Ygd2hpY2ggaW5kaXZpZHVhbCB2YWx1ZXMgd2lsbCBiZSBpbmNyZWFzZWQgbGF0ZXIgXHJcbiAqIEBwYXJhbSB7aW50fSBobF9zdWJzIFxyXG4gKiBAcGFyYW0ge2ludH0gb2xfc3VicyBcclxuICogQHJldHVybnMgYXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKSB7XHJcbiAgdmFyIGdyYWRlcyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGxfc3ViczsgaSsrKSB7XHJcbiAgICBncmFkZXMucHVzaCgzNyk7XHJcbiAgfVxyXG4gIGZvciAoaSA9IDA7IGkgPCBvbF9zdWJzOyBpKyspIHtcclxuICAgIGdyYWRlcy5wdXNoKDEyKTtcclxuICB9XHJcbiAgcmV0dXJuIGdyYWRlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGVzdF9wb2ludHNfcG9zcyhobF9zdWJzLCBvbF9zdWJzLCBtYXRoc19wbHVzXzI1KSB7XHJcbiAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gIGNvdW50ZXIgKz0gKDEwMCAqIGhsX3N1YnMpICsgKDU2ICogb2xfc3Vicyk7XHJcbiAgaWYgKG1hdGhzX3BsdXNfMjUpIHtcclxuICAgIGNvdW50ZXIgKz0gMjU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY291bnRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIHRoaXMgaXMgd2hvbGUgYWxnb3JvdGhpbSBiZWhpbmQgZ2VuZXJhdGUgY29ycmVjdCBvdXRwdXRcclxuICogaW4gc2hvcnQgaXQgY3JlYXRlcyBhbiBhcnJheSBvZiB2YWx1ZXMgdGhhdCBhcmUgZ3JhZHVhbGx5IGluY3JlYXNlZCB1bnRpbCBpdCdzIG92ZXJhbGwgdmFsdWUgaXMgaW5jcmVhc2VkXHJcbiAqIHVudGlsIGl0IFwicmVhY2hlc1wiIHRoZSBjYW8gcG9pbnRzIHRhcmdldFxyXG4gKiBAcGFyYW0ge3RhcmdldH0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0ge2hsX3N1YnN9IGhsX3N1YnMgXHJcbiAqIEBwYXJhbSB7b2xfc3Vic30gb2xfc3VicyBcclxuICogQHBhcmFtIHttYXRoc19wbHVzXzI1fSBtYXRoc19wbHVzXzI1IFxyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1haW4odGFyZ2V0LCBobF9zdWJzLCBvbF9zdWJzLCBtYXRoc19wbHVzXzI1KSB7XHJcbiAgdmFyIHRvdGFsX3N1YnMgPSBobF9zdWJzICsgb2xfc3VicztcclxuICB2YXIgY3VycmVudF9ncmFkZXMgPSBzdGFydGluZ19ncmFkZXMoaGxfc3Vicywgb2xfc3Vicyk7XHJcbiAgdmFyIGN1cnJlbnRfcG9pbnRzID0gc3VtKGN1cnJlbnRfZ3JhZGVzKTtcclxuICB2YXIgaW5kZXggPSAwO1xyXG4gIHZhciBtYXhfbGltaXQgPSBoaWdoZXN0X3BvaW50c19wb3NzKGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpO1xyXG4gIHZhciB3aXRoaW5fcmFuZ2UgPSBjdXJyZW50X3BvaW50cyA8PSBtYXhfbGltaXQgJiYgdGFyZ2V0IDw9IG1heF9saW1pdCAmJiAoY3VycmVudF9wb2ludHMgPCB0YXJnZXQpO1xyXG5cclxuICB3aGlsZSAod2l0aGluX3JhbmdlKSB7XHJcbiAgICBjdXJyZW50X2dyYWRlcyA9IHNpbmdsZV9jaGFuZ2UoY3VycmVudF9ncmFkZXMsIGluZGV4LCBtYXRoc19wbHVzXzI1KTtcclxuICAgIGN1cnJlbnRfcG9pbnRzID0gc3VtKGN1cnJlbnRfZ3JhZGVzKTtcclxuICAgIHdpdGhpbl9yYW5nZSA9IGN1cnJlbnRfcG9pbnRzIDw9IG1heF9saW1pdCAmJiB0YXJnZXQgPD0gbWF4X2xpbWl0ICYmIChjdXJyZW50X3BvaW50cyA8IHRhcmdldCk7XHJcbiAgICBpbmRleCArPSAxO1xyXG5cclxuICAgIGlmIChpbmRleCA9PSB0b3RhbF9zdWJzKSB7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50X3BvaW50cyA8IHRhcmdldCkge1xyXG4gICAgY3VycmVudF9ncmFkZXMgPSBbXTtcclxuICAgIGN1cnJlbnRfcG9pbnRzID0gW107XHJcbiAgfVxyXG4gIHJldHVybiBbY3VycmVudF9ncmFkZXMsIGN1cnJlbnRfcG9pbnRzXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlX2lucHV0cygpIHtcclxuICB2YXIgdGFyZ2V0X2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRfdGV4dFwiKTtcclxuICB0YXJnZXRfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgaGxfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhsX3N1YnNfdGV4dFwiKTtcclxuICBobF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBvbF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xfc3Vic190ZXh0XCIpO1xyXG4gIG9sX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICB9KTtcclxufVxyXG5cclxudXBkYXRlX2lucHV0cygpO1xyXG5cclxuLy8gdG8gaGlkZSB0aGUgYm94IG9mIG91dHB1dCB3aGVuIHRoZSBwYWdlIGxvYWRlc1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdF9jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZF9pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG5mdW5jdGlvbiBwdWxzZUlucHV0cygpIHtcclxuICBsZXQgaW5wdXRFbGVtZW50ID0gW1widGFyZ2V0X3RleHRcIiwgXCJobF9zdWJzX3RleHRcIiwgXCJvbF9zdWJzX3RleHRcIiwgXCJib29sX2hsX21hdGhzXCIsIFwibGN2cFwiXTtcclxuXHJcbiAgaW5wdXRFbGVtZW50LmZvckVhY2goaWQgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJwdWxzZUFuaW1hdGlvblwiKTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdG9yLWNvbnRhaW5lclwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlucHV0RWxlbWVudC5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5yZW1vdmUoXCJwdWxzZUFuaW1hdGlvblwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5wdWxzZUlucHV0cygpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmluZF9wb2ludHNfbmVlZGVkKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0X2NvbnRhaW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdF9jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcblxyXG4gIHRhcmdldF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRfdGV4dFwiKS52YWx1ZSk7XHJcbiAgaGxfbnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGxfc3Vic190ZXh0XCIpLnZhbHVlKTtcclxuICBvbF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbF9zdWJzX3RleHRcIikudmFsdWUpO1xyXG5cclxuICAvLyBjaGVjayBmb3IgaW52YWxpZCBpbnB1dFxyXG4gIHZhciBpbnZhbGlkX3RhcmdldF9pbnB1dCA9ICh0YXJnZXRfbnVtIDw9IDApIHx8ICh0YXJnZXRfbnVtID4gNjI1KTtcclxuICB2YXIgaW52YWxpZF9zdWJzX2lucHV0ID0gKGhsX251bSA8IDApIHx8IChvbF9udW0gPCAwKTtcclxuICB2YXIgbWF4X3B0cyA9IChobF9udW0gKiAxMDApICsgKG9sX251bSAqIDU2KSArIGFkZF8yNTtcclxuICB2YXIgaW52YWxpZF9yYW5nZSA9IChtYXhfcHRzID49IHRhcmdldF9udW0pID09IGZhbHNlO1xyXG5cclxuICBjb25zdCByYW5nZV9lcnJvcl9tc2cgPSBgSXQncyBpbXBvc3NpYmxlIHRvIGFjaGlldmUgJHt0YXJnZXRfbnVtfSBDQU8gcG9pbnRzIHdpdGggJHtobF9udW19IGhpZ2hlci1sZXZlbCBzdWJqZWN0cyBhbmQgJHtvbF9udW19IG9yZGluYXJ5LWxldmVsIHN1YmplY3RzLmA7XHJcbiAgY29uc3QgcHRzX2Vycm9yX21zZyA9IFwiWW91ciBpbnB1dHRlZCBDQU8gcG9pbnRzIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA2MjUuXCI7XHJcbiAgY29uc3Qgc3ViamVjdHNfZXJyb3JfbXNnID0gXCJZb3UgY2FuJ3QgaGF2ZSBhIG5lZ2F0aXZlIGFtb3V0IG9mIHN1YmplY3RzXCI7XHJcblxyXG4gIHZhciBlcnJvcl9zdGF0dXMgPSBcIlwiO1xyXG5cclxuICBpZiAoaW52YWxpZF9yYW5nZSkge1xyXG4gICAgZXJyb3Jfc3RhdHVzICs9IHJhbmdlX2Vycm9yX21zZyArIFwiXFxuXCI7XHJcbiAgfVxyXG4gIGlmIChpbnZhbGlkX3RhcmdldF9pbnB1dCkge1xyXG4gICAgZXJyb3Jfc3RhdHVzICs9IHB0c19lcnJvcl9tc2cgKyBcIlxcblwiO1xyXG4gIH1cclxuICBpZiAoaW52YWxpZF9zdWJzX2lucHV0KSB7XHJcbiAgICBlcnJvcl9zdGF0dXMgKz0gc3ViamVjdHNfZXJyb3JfbXNnICsgXCJcXG5cIjtcclxuICB9XHJcblxyXG4gIGxldCBpbnZhbGlkX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpO1xyXG4gIGxldCBpbmZvX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb19jb250YWluZXJcIik7XHJcbiAgbGV0IHNvdWx0aW9uX291dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291bHRpb25fb3V0cHV0XCIpO1xyXG5cclxuICBpZiAoZXJyb3Jfc3RhdHVzICE9IFwiXCIpIHtcclxuICAgIGludmFsaWRfaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVJblwiKTtcclxuICAgIGludmFsaWRfaW5wdXQub2Zmc2V0V2lkdGhsO1xyXG4gICAgaW52YWxpZF9pbnB1dC5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG5cclxuICAgIGludmFsaWRfaW5wdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGludmFsaWRfaW5wdXQuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgaW52YWxpZF9pbnB1dC5pbm5lckhUTUwgPSBlcnJvcl9zdGF0dXM7XHJcblxyXG4gICAgaW5mb19jb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgc291bHRpb25fb3V0cHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X2NvbnRhaW5lclwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcblxyXG4gICAgaWYgKHRhcmdldF9udW0gIT0gMCAmJiAoaGxfbnVtICE9IDAgfHwgb2xfbnVtICE9IDApKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0X2NvbnRhaW5lclwiKS5zY3JvbGxJbnRvVmlldygpO1xyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdG9yLWNvbnRhaW5lclwiKS5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVsc2Uge1xyXG4gICAgaW5mb19jb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgaW5mb19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHNvdWx0aW9uX291dHB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHZhciBtYXRoc19wbHVzXzI1O1xyXG4gICAgaWYgKGFkZF8yNSA9PSAyNSkge1xyXG4gICAgICBtYXRoc19wbHVzXzI1ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBtYXRoc19wbHVzXzI1ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgbWF0Y2hlc19pbmZvID0gbWFpbih0YXJnZXRfbnVtLCBobF9udW0sIG9sX251bSwgbWF0aHNfcGx1c18yNSk7XHJcbiAgICB2YXIgcG9pbnRzX2xpc3QgPSBtYXRjaGVzX2luZm9bMF07XHJcbiAgICB2YXIgcG9pbnRzX3JlcSA9IG1hdGNoZXNfaW5mb1sxXTtcclxuXHJcbiAgICBpZiAocG9pbnRzX2xpc3QuaW5jbHVkZXMoMjUpKSB7XHJcbiAgICAgIGRpc3BsYXlfcGx1c18yNSh0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBkaXNwbGF5X3BsdXNfMjUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdmFyIG91dHB1dF9pbmZvID0gZ2FyX2FuZF9wdGcocG9pbnRzX2xpc3QpO1xyXG5cclxuICAgIHZhciBncmFkZV9hdmcgPSBvdXRwdXRfaW5mb1swXTtcclxuICAgIHZhciByZXFfcmVzdWx0cyA9IG91dHB1dF9pbmZvWzFdOyAvLyB0aGVzZSBhcmUgbGV0dGVyIGdyYWRlc1xyXG4gICAgcmVxX3Jlc3VsdHMgPSByZWRfY29tbWFzKHJlcV9yZXN1bHRzKTtcclxuXHJcblxyXG4gICAgbGV0IGVsZW1fcmVxX3Jlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcV9yZXN1bHRzXCIpO1xyXG5cclxuICAgIGlmIChlbGVtX3JlcV9yZXN1bHRzLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2ludHNfcmVxXCIpLmlubmVySFRNTCA9IFN0cmluZyhwb2ludHNfcmVxKTtcclxuICAgICAgZWxlbV9yZXFfcmVzdWx0cy5pbm5lckhUTUwgPSBTdHJpbmcocmVxX3Jlc3VsdHMpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYWRlX2F2Z19yZXFcIikuaW5uZXJIVE1MID0gU3RyaW5nKGdyYWRlX2F2Zyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnb2pvZGV2SWNvbigpIHtcclxuICBsZXQgZ29qb2RldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZml4ZWQtZ29qb2RldlwiKTtcclxuICBsZXQgdGFyZ2V0Qm90dG9tO1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDUwMCkge1xyXG4gICAgdGFyZ2V0Qm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29sX2hsX21hdGhzXCIpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRhcmdldEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZVwiKTtcclxuICB9XHJcblxyXG4gIGdvam9kZXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgbGV0IHdlbGNvbWVSZWN0ID0gdGFyZ2V0Qm90dG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHdlbGNvbWVSZWN0LmJvdHRvbSA8IDApIHtcclxuICAgICAgZ29qb2Rldi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBnb2pvZGV2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGdvam9kZXYuc3R5bGUgPSBcInRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICsxNXB4KTtcIjtcclxuICAgICAgZ29qb2Rldi5zdHlsZS5hbmltYXRpb25EZWxheSA9IFwiMC41c1wiO1xyXG4gICAgICBnb2pvZGV2LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgICAgZ29qb2Rldi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gIGdvam9kZXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICBnb2pvZGV2LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICB9KTtcclxuXHJcbiAgZ29qb2Rldi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgZ29qb2Rldi5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcclxuICB9KVxyXG4gIGhhbmRsZVNjcm9sbCgpO1xyXG59XHJcblxyXG5nb2pvZGV2SWNvbigpO1xyXG5cclxuZnVuY3Rpb24gZ29qb2RldigpIHtcclxuICBsZXQgZW1tYW51ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvam9kZXZcIik7XHJcbiAgbGV0IGluZGV4ID0gMDtcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblxyXG4gICAgZW1tYW51ZWwuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVJblwiKTtcclxuICAgIGVtbWFudWVsLm9mZnNldFdpZHRoO1xyXG4gICAgZW1tYW51ZWwuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICBlbW1hbnVlbC5zcmMgPSBcImltYWdlcy9nb2pvZGV2LndlYnBcIjtcclxuICAgICAgaW5kZXggPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGVtbWFudWVsLnNyYyA9IFwiaW1hZ2VzL2xvZ28ud2VicFwiO1xyXG4gICAgICBpbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgfSwgMzUwMClcclxufVxyXG5cclxuZ29qb2RldigpIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBRUEsTUFBSSxTQUFTO0FBS2IsV0FBUyxjQUFjO0FBQ3JCLFFBQUksZ0JBQWdCLFNBQVMsZUFBZSxlQUFlO0FBQzNELFFBQUksaUJBQWlC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
