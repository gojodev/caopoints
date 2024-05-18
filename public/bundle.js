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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiaG9tZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vICEgR0xPQkFMXHJcbnZhciBhZGRfMjUgPSAyNTtcclxuLyoqXHJcbiAqIGRldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBhZGRfMjUgdmFyaWFibGVcclxuICogdG9nZ2xlcyBkaXNwbGF5IG9mIHRoZSBidXR0b25cclxuICovXHJcbmZ1bmN0aW9uIGlzX2hsX21hdGhzKCkge1xyXG4gIHZhciBib29sX2hsX21hdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29sX2hsX21hdGhzXCIpO1xyXG4gIHZhciBhZGRpbmdfMjVfdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X3RleHRcIik7XHJcbiAgdmFyIHZhbHVlID0gYm9vbF9obF9tYXRocy52YWx1ZTtcclxuICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgYm9vbF9obF9tYXRocy52YWx1ZSA9IDE7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS50cmFuc2l0aW9uID0gXCIwLjJzXCI7XHJcbiAgICB2YWx1ZSA9IDE7XHJcbiAgICBhZGRfMjUgPSAyNTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIGJvb2xfaGxfbWF0aHMudmFsdWUgPSAwO1xyXG4gICAgYWRkaW5nXzI1X3RleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgYWRkXzI1ID0gMDtcclxuICAgIHZhbHVlID0gMDtcclxuICB9XHJcbiAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbn1cclxuaXNfaGxfbWF0aHMoKTtcclxuXHJcbi8vIFwibGlzdGVuc1wiIGZvciBhIGNsaWNrIGZyb20gdGhlIGlzX2hsX21hdGhzIGZ1bmN0aW9uXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vbF9obF9tYXRoc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaXNfaGxfbWF0aHMpO1xyXG5cclxuLyoqXHJcbiAqIGRldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBsY3ZwIHZhcmlhYmxlXHJcbiAqIHRvZ2dsZXMgZGlzcGxheSBvZiB0aGUgYnV0dG9uXHJcbiAqL1xyXG5cclxudmFyIGxjdnA7XHJcbmZ1bmN0aW9uIGlzX2xjdnAoKSB7XHJcbiAgdmFyIGxjdnBfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxjdnBcIik7XHJcbiAgdmFyIHZhbHVlID0gbGN2cF9pbnB1dC52YWx1ZTtcclxuICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgbGN2cCA9IHRydWU7XHJcbiAgICBsY3ZwX2lucHV0LnZhbHVlID0gMTtcclxuICAgIHZhbHVlID0gMDtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHZhbHVlID0gMTtcclxuICAgIGxjdnAgPSBmYWxzZTtcclxuICAgIGxjdnBfaW5wdXQudmFsdWUgPSAwO1xyXG4gIH1cclxuICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICByZXR1cm4gbGN2cDtcclxufVxyXG5cclxuaXNfbGN2cCgpO1xyXG5cclxuLy8gXCJsaXN0ZW5zXCIgZm9yIGEgY2xpY2sgZnJvbSB0aGUgaXNfbGN2cCBmdW5jdGlvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxjdnBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGlzX2xjdnApO1xyXG5cclxuLy8gaGlkZXMgdGhlIFwiQWRkaW5nICsyNVwiIHRleHQgYmVmb3JlIHRoZSBwYWdlIGxvYWRzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X2NvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG52YXIgdGFyZ2V0X251bTtcclxudmFyIGhsX251bTtcclxudmFyIG9sX251bTtcclxuXHJcbi8qKlxyXG4gKiBBZGp1c3RzIHRoZSBncmFkZXMgdGhhdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGluIG9yZGluYXJ5IGxldmVsIGFuZCBoaWdoZXIgbGV2ZWwgZm9yIGNvcnJlY3Qgb3V0cHV0XHJcbiAqIGZvciBleGFtcGxlIGEgSDYgYW5kIE8yIGFyZSBib3RoIHdvcnRoIDQ2IHBvaW50c1xyXG4gKiBAcGFyYW0ge2FycmF5fSBsZXR0ZXJfZ3JhZGVzXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBhZGp1c3RvcihsZXR0ZXJfZ3JhZGVzKSB7XHJcbiAgdmFyIENIQU5HRUFCTEVTID0gW1wiaDVcIiwgXCJoNlwiLCBcImg3XCIsIFwibzFcIiwgXCJvMlwiLCBcIm8zXCJdO1xyXG4gIHZhciBITF9TVUJTID0gW1wiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCIsIFwiaDdcIl07XHJcblxyXG4gIHZhciBjb3VudGVkX2hsID0gMDtcclxuICB2YXIgY291bnRlZF9vbCA9IDA7XHJcblxyXG4gIHZhciBkaWN0X2NoYW5nZWFibGVzID0ge1xyXG4gICAgXCJoNVwiOiBcIm8xXCIsXHJcbiAgICBcImg2XCI6IFwibzJcIixcclxuICAgIFwiaDdcIjogXCJvM1wiLFxyXG4gICAgXCJvMVwiOiBcImg1XCIsXHJcbiAgICBcIm8yXCI6IFwiaDZcIixcclxuICAgIFwibzNcIjogXCJoN1wiLFxyXG4gIH07XHJcblxyXG4gIHZhciBobF9pbmRleF9jaGFuZ2VhYmxlcyA9IFtdO1xyXG4gIHZhciBvbF9pbmRleF9jaGFuZ2VhYmxlcyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjdXJyZW50ID0gbGV0dGVyX2dyYWRlc1tpXTtcclxuICAgIGlmIChjdXJyZW50IGluIGRpY3RfY2hhbmdlYWJsZXMpIHtcclxuICAgICAgaWYgKGN1cnJlbnQgaW4gQ0hBTkdFQUJMRVMpIHtcclxuICAgICAgICBobF9pbmRleF9jaGFuZ2VhYmxlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG9sX2luZGV4X2NoYW5nZWFibGVzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoSExfU1VCUy5pbmNsdWRlcyhjdXJyZW50KSkge1xyXG4gICAgICBjb3VudGVkX2hsICs9IDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY291bnRlZF9vbCArPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG1pc3NfbWF0Y2hpbmdfY291bnRzID0gY291bnRlZF9obCAhPSBobF9udW0gJiYgY291bnRlZF9vbCAhPSBvbF9udW07XHJcblxyXG4gIGlmIChtaXNzX21hdGNoaW5nX2NvdW50cykge1xyXG4gICAgdmFyIG5lZWRlZF9obCA9IGhsX251bSAtIGNvdW50ZWRfaGw7XHJcbiAgICB2YXIgbmVlZGVkX29sID0gb2xfbnVtIC0gY291bnRlZF9vbDtcclxuXHJcbiAgICBpZiAobmVlZGVkX2hsIDwgMCkge1xyXG4gICAgICBuZWVkZWRfaGwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG5lZWRlZF9vbCA8IDApIHtcclxuICAgICAgbmVlZGVkX29sID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hhcmdlc19uZWVkZWQgPSBNYXRoLm1heChuZWVkZWRfaGwsIG5lZWRlZF9vbCk7XHJcbiAgICB2YXIgb2dfZ3JhZGU7XHJcbiAgICB2YXIgY2hhbmdlZF9ncmFkZTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBjaGFyZ2VzX25lZWRlZDsgaSsrKSB7XHJcblxyXG4gICAgICB2YXIgaW5kZXggPSBvbF9pbmRleF9jaGFuZ2VhYmxlc1tpXTtcclxuICAgICAgb2dfZ3JhZGUgPSBsZXR0ZXJfZ3JhZGVzW2luZGV4XTtcclxuXHJcbiAgICAgIGNoYW5nZWRfZ3JhZGUgPSBkaWN0X2NoYW5nZWFibGVzW29nX2dyYWRlXTtcclxuICAgICAgbGV0dGVyX2dyYWRlc1tpbmRleF0gPSBjaGFuZ2VkX2dyYWRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGxjdnApIHtcclxuICAgIHZhciBsY3ZwX21vZHVsZXMgPSB7XHJcbiAgICAgIDY2OiBcIkRpc3RpbmN0aW9uXCIsXHJcbiAgICAgIDQ2OiBcIk1lcml0XCIsXHJcbiAgICAgIDI4OiBcIlBhc3NcIlxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbGN2cF9ncmFkZXMgPSBbXCJoNFwiLCBcImg2XCIsIFwibzJcIiwgXCJvNFwiXTtcclxuXHJcbiAgICB2YXIgbGN2cF9wb2ludHMgPSB7XHJcbiAgICAgIFwiaDRcIjogNjYsXHJcbiAgICAgIFwiaDZcIjogNDYsXHJcbiAgICAgIFwibzJcIjogNDYsXHJcbiAgICAgIFwibzRcIjogMjhcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNvbGxlY3RlZF9sY3ZwX3BvaW50cyA9IFtdO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY3VycmVudCA9IGxldHRlcl9ncmFkZXNbaV07XHJcbiAgICAgIGlmIChsY3ZwX2dyYWRlcy5pbmNsdWRlcyhjdXJyZW50KSkge1xyXG4gICAgICAgIGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5wdXNoKGxjdnBfcG9pbnRzW2N1cnJlbnRdKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb2xsZWN0ZWRfbGN2cF9wb2ludHMucHVzaCg5OTkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgbWluX2xjdnBfcG9pbnQgPSBNYXRoLm1pbiguLi5jb2xsZWN0ZWRfbGN2cF9wb2ludHMpO1xyXG4gICAgdmFyIG1pbl9sY3ZwX2luZGV4ID0gY29sbGVjdGVkX2xjdnBfcG9pbnRzLmluZGV4T2YobWluX2xjdnBfcG9pbnQpO1xyXG4gICAgdmFyIHZhbGlkX2xjdnBfY2hhbmdlID0gbWluX2xjdnBfcG9pbnQgIT0gOTk5O1xyXG5cclxuICAgIGlmICh2YWxpZF9sY3ZwX2NoYW5nZSkge1xyXG4gICAgICBsZXR0ZXJfZ3JhZGVzW21pbl9sY3ZwX2luZGV4XSA9IGxjdnBfbW9kdWxlc1ttaW5fbGN2cF9wb2ludF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGV0dGVyX2dyYWRlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIHllYXJseSBqb2tlIHRoYXQgd2lsbCBiZSBhY3RpdmF0ZWQgaW4gbWF5IGFuZCBqdW5lXHJcbiAqL1xyXG5mdW5jdGlvbiBtb3RpdmF0ZSgpIHtcclxuICBzZWNvbmRzICs9IDE7XHJcbiAgaWYgKDU5IDw9IHNlY29uZHMgJiYgc2Vjb25kcyA8PSA2MCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctaW5mb1wiKS5zcmMgPSBcImltYWdlcy9qb2tlLndlYnBcIjtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pbmZvXCIpLnNyYyA9IFwiaW1hZ2VzL3BvaW50cy1zeXN0ZW0ud2VicFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNlY29uZHMgPiA2MCkge1xyXG4gICAgc2Vjb25kcyA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgc2Vjb25kcyA9IDA7XHJcbnZhciBkdCA9IG5ldyBEYXRlKCk7XHJcbnZhciBtb250aCA9IGR0LmdldE1vbnRoKCkgKyAxOyAvLyBjYXVzZSBvZiAwIGluZGV4aW5nIG9mIHRoZSAxMiBtb250aHMgYmVjb21lcyAwIC0gMTFcclxuaWYgKFs0LCA1XS5pbmNsdWRlcyhtb250aCkpIHtcclxuICBzZXRJbnRlcnZhbChtb3RpdmF0ZSwgMTAwMCk7XHJcbiAgbW90aXZhdGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdyYWRlIGF2ZXJhZ2UgYW5kIHBvaW50cyB0byBncmFkZXMgYXMgbGlzdCBvZiBudW1iZXJzXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHBvaW50c19uZWVkZWQgXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBnYXJfYW5kX3B0Zyhwb2ludHNfbmVlZGVkKSB7XHJcblxyXG4gIHBvaW50c19uZWVkZWQgPSBwb2ludHNfbmVlZGVkLnNvcnQoKTtcclxuXHJcbiAgdmFyIG1peGVkX3JhbmtzID0ge1xyXG4gICAgMTAwOiBcImgxXCIsXHJcbiAgICA4ODogXCJoMlwiLFxyXG4gICAgNzc6IFwiaDNcIixcclxuICAgIDY2OiBcImg0XCIsXHJcblxyXG4gICAgNTY6IFwiaDUvbzFcIixcclxuICAgIDQ2OiBcImg2L28yXCIsXHJcbiAgICAzNzogXCJoNy9vM1wiLFxyXG4gICAgMjg6IFwibzRcIixcclxuICAgIDIwOiBcIm81XCIsXHJcbiAgICAxMjogXCJvNlwiLFxyXG4gIH07XHJcblxyXG4gIGlmIChobF9udW0gPiAwKSB7XHJcbiAgICBtaXhlZF9yYW5rc1s1Nl0gPSBcImg1XCI7XHJcbiAgICBtaXhlZF9yYW5rc1s0Nl0gPSBcImg2XCI7XHJcbiAgICBtaXhlZF9yYW5rc1szN10gPSBcImg3XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2xfbnVtID4gMCkge1xyXG4gICAgbWl4ZWRfcmFua3NbNTZdID0gXCJvMVwiO1xyXG4gICAgbWl4ZWRfcmFua3NbNDZdID0gXCJvMlwiO1xyXG4gICAgbWl4ZWRfcmFua3NbMzddID0gXCJvM1wiO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJhbmtzID0ge1xyXG4gICAgXCJoMVwiOiA5MCxcclxuICAgIFwiaDJcIjogODAsXHJcbiAgICBcImgzXCI6IDcwLFxyXG4gICAgXCJoNFwiOiA2MCxcclxuICAgIFwiaDVcIjogNTYsXHJcbiAgICBcImg2XCI6IDQ2LFxyXG4gICAgXCJoN1wiOiAzNyxcclxuXHJcbiAgICBcIkRpc3RpbmN0aW9uXCI6IDY2LFxyXG4gICAgXCJNZXJpdFwiOiA0NixcclxuICAgIFwiUGFzc1wiOiAyOCxcclxuXHJcbiAgICBcIm8xXCI6IDU2LFxyXG4gICAgXCJvMlwiOiA0NixcclxuICAgIFwibzNcIjogMzcsXHJcbiAgICBcIm80XCI6IDI4LFxyXG4gICAgXCJvNVwiOiAyMCxcclxuICAgIFwibzZcIjogMTIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKGhsX251bSA+IDApIHtcclxuICAgIHJhbmtzW1wiaDUvbzFcIl0gPSA1MDtcclxuICAgIHJhbmtzW1wiaDYvbzJcIl0gPSA0MDtcclxuICAgIHJhbmtzW1wiaDcvbzNcIl0gPSAzMDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmFua3NbXCJoNS9vMVwiXSA9IDkwO1xyXG4gICAgcmFua3NbXCJoNi9vMlwiXSA9IDgwO1xyXG4gICAgcmFua3NbXCJoNy9vM1wiXSA9IDcwO1xyXG4gIH1cclxuXHJcbiAgdmFyIGdyYWRlc19zb3VsdGlvbiA9IFtdO1xyXG4gIHZhciB0b3RhbCA9IDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHNfbmVlZGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocG9pbnRzX25lZWRlZFtpXSAhPSAyNSkge1xyXG4gICAgICBncmFkZXNfc291bHRpb24ucHVzaChtaXhlZF9yYW5rc1twb2ludHNfbmVlZGVkW2ldXSk7XHJcbiAgICAgIHRvdGFsICs9IHJhbmtzW21peGVkX3JhbmtzW3BvaW50c19uZWVkZWRbaV1dXTtcclxuICAgIH1cclxuICB9XHJcbiAgdG90YWwgPSB0b3RhbCAvIChobF9udW0gKyBvbF9udW0pO1xyXG4gIHZhciBwZXJjZW50YWdlX2F2ZyA9IFN0cmluZyhNYXRoLnJvdW5kKHRvdGFsKSkgKyBcIiVcIjtcclxuICBncmFkZXNfc291bHRpb24gPSBhZGp1c3RvcihncmFkZXNfc291bHRpb24pO1xyXG5cclxuXHJcbiAgLy8gcGVyY2VudGFnZSBhcyBhIHN0cmluZywgYW4gYXJyYXkgb2YgZ3JhZGVzIGFzIG51bWJlcnNcclxuICByZXR1cm4gW3BlcmNlbnRhZ2VfYXZnLCBncmFkZXNfc291bHRpb25dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5X3BsdXNfMjUoYm9vbF9obF9tYXRocykge1xyXG4gIHZhciBhZGRpbmdfMjVfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpbmdfMjVfY29udGFpbmVyXCIpO1xyXG4gIGlmIChib29sX2hsX21hdGhzKSB7XHJcbiAgICBhZGRpbmdfMjVfY29udGFpbmVyLnN0eWxlID0gXCJkaXNwbGF5OiBibG9jaztcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkaW5nXzI1X2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWRfY29tbWFzKGdyYWRlcykge1xyXG4gIGdyYWRlcyA9IGdyYWRlcy50b1N0cmluZygpO1xyXG4gIGdyYWRlcyA9IGdyYWRlcy5yZXBsYWNlQWxsKFwiLFwiLCBcIjxzdHJvbmcgY2xhc3M9J3JlZCc+LDwvc3Ryb25nPlwiKTtcclxuXHJcbiAgcmV0dXJuIGdyYWRlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIGluY3JlbWVudHMgYSBncmFkZSdzIHZhbHVlIHRvIHRoZSBuZXh0IG9uZVxyXG4gKiBmb3IgZXhhbXBsZSBpbmNyZW1lbnQgYSBncmFkZSB0aGF0IGhhcyB0aGUgdmFsdWUgb2YgODggd2lsbCBiZSBpbmNyZWFzZWQgdG8gMTAwXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGdyYWRlcyBcclxuICogQHBhcmFtIHtpbnR9IGluZGV4IFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1hdGhzX3BsdXNfMjUgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gc2luZ2xlX2NoYW5nZShncmFkZXMsIGluZGV4LCBtYXRoc19wbHVzXzI1KSB7XHJcbiAgY29uc3QgaXNfaW5fZGljdCA9IFsxMiwgMjAsIDI4LCAzNywgNDYsIDU2LCA2NiwgNzcsIDg4LCAxMDBdO1xyXG4gIHZhciBkaWN0X2NoYW5nZWFibGVzID0ge1xyXG4gICAgMTI6IDIwLFxyXG4gICAgMjA6IDI4LFxyXG4gICAgMjg6IDM3LFxyXG4gICAgMzc6IDQ2LFxyXG4gICAgNDY6IDU2LFxyXG4gICAgNTY6IDY2LFxyXG4gICAgNjY6IDc3LFxyXG4gICAgNzc6IDg4LFxyXG4gICAgODg6IDEwMFxyXG4gIH07XHJcblxyXG4gIGlmIChpc19pbl9kaWN0LmluY2x1ZGVzKGdyYWRlc1tpbmRleF0pKSB7XHJcbiAgICBncmFkZXNbaW5kZXhdID0gZGljdF9jaGFuZ2VhYmxlc1tncmFkZXNbaW5kZXhdXTtcclxuICB9XHJcbiAgaWYgKG1hdGhzX3BsdXNfMjUgJiYgKGdyYWRlcy5pbmNsdWRlcygyNSkpID09IGZhbHNlKSB7XHJcbiAgICBncmFkZXMucHVzaCgyNSk7XHJcbiAgfVxyXG4gIHJldHVybiBncmFkZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bShhcnJheSkge1xyXG4gIHJldHVybiBhcnJheS5maWx0ZXIoZWwgPT4gK2VsKS5yZWR1Y2UoKGFjYywgY3YpID0+IGFjYyArIGN2LCAwKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdlbmVyYXRlcyBhIHN0YXJ0aW5nIHBvaW50IG9mIGFuIGFycmF5IG9mIHdoaWNoIGluZGl2aWR1YWwgdmFsdWVzIHdpbGwgYmUgaW5jcmVhc2VkIGxhdGVyIFxyXG4gKiBAcGFyYW0ge2ludH0gaGxfc3VicyBcclxuICogQHBhcmFtIHtpbnR9IG9sX3N1YnMgXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBzdGFydGluZ19ncmFkZXMoaGxfc3Vicywgb2xfc3Vicykge1xyXG4gIHZhciBncmFkZXMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhsX3N1YnM7IGkrKykge1xyXG4gICAgZ3JhZGVzLnB1c2goMzcpO1xyXG4gIH1cclxuICBmb3IgKGkgPSAwOyBpIDwgb2xfc3ViczsgaSsrKSB7XHJcbiAgICBncmFkZXMucHVzaCgxMik7XHJcbiAgfVxyXG4gIHJldHVybiBncmFkZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hlc3RfcG9pbnRzX3Bvc3MoaGxfc3Vicywgb2xfc3VicywgbWF0aHNfcGx1c18yNSkge1xyXG4gIHZhciBjb3VudGVyID0gMDtcclxuICBjb3VudGVyICs9ICgxMDAgKiBobF9zdWJzKSArICg1NiAqIG9sX3N1YnMpO1xyXG4gIGlmIChtYXRoc19wbHVzXzI1KSB7XHJcbiAgICBjb3VudGVyICs9IDI1O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvdW50ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB0aGlzIGlzIHdob2xlIGFsZ29yb3RoaW0gYmVoaW5kIGdlbmVyYXRlIGNvcnJlY3Qgb3V0cHV0XHJcbiAqIGluIHNob3J0IGl0IGNyZWF0ZXMgYW4gYXJyYXkgb2YgdmFsdWVzIHRoYXQgYXJlIGdyYWR1YWxseSBpbmNyZWFzZWQgdW50aWwgaXQncyBvdmVyYWxsIHZhbHVlIGlzIGluY3JlYXNlZFxyXG4gKiB1bnRpbCBpdCBcInJlYWNoZXNcIiB0aGUgY2FvIHBvaW50cyB0YXJnZXRcclxuICogQHBhcmFtIHt0YXJnZXR9IHRhcmdldCBcclxuICogQHBhcmFtIHtobF9zdWJzfSBobF9zdWJzIFxyXG4gKiBAcGFyYW0ge29sX3N1YnN9IG9sX3N1YnMgXHJcbiAqIEBwYXJhbSB7bWF0aHNfcGx1c18yNX0gbWF0aHNfcGx1c18yNSBcclxuICogQHJldHVybnMgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWluKHRhcmdldCwgaGxfc3Vicywgb2xfc3VicywgbWF0aHNfcGx1c18yNSkge1xyXG4gIHZhciB0b3RhbF9zdWJzID0gaGxfc3VicyArIG9sX3N1YnM7XHJcbiAgdmFyIGN1cnJlbnRfZ3JhZGVzID0gc3RhcnRpbmdfZ3JhZGVzKGhsX3N1YnMsIG9sX3N1YnMpO1xyXG4gIHZhciBjdXJyZW50X3BvaW50cyA9IHN1bShjdXJyZW50X2dyYWRlcyk7XHJcbiAgdmFyIGluZGV4ID0gMDtcclxuICB2YXIgbWF4X2xpbWl0ID0gaGlnaGVzdF9wb2ludHNfcG9zcyhobF9zdWJzLCBvbF9zdWJzLCBtYXRoc19wbHVzXzI1KTtcclxuICB2YXIgd2l0aGluX3JhbmdlID0gY3VycmVudF9wb2ludHMgPD0gbWF4X2xpbWl0ICYmIHRhcmdldCA8PSBtYXhfbGltaXQgJiYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KTtcclxuXHJcbiAgd2hpbGUgKHdpdGhpbl9yYW5nZSkge1xyXG4gICAgY3VycmVudF9ncmFkZXMgPSBzaW5nbGVfY2hhbmdlKGN1cnJlbnRfZ3JhZGVzLCBpbmRleCwgbWF0aHNfcGx1c18yNSk7XHJcbiAgICBjdXJyZW50X3BvaW50cyA9IHN1bShjdXJyZW50X2dyYWRlcyk7XHJcbiAgICB3aXRoaW5fcmFuZ2UgPSBjdXJyZW50X3BvaW50cyA8PSBtYXhfbGltaXQgJiYgdGFyZ2V0IDw9IG1heF9saW1pdCAmJiAoY3VycmVudF9wb2ludHMgPCB0YXJnZXQpO1xyXG4gICAgaW5kZXggKz0gMTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT0gdG90YWxfc3Vicykge1xyXG4gICAgICBpbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudF9wb2ludHMgPCB0YXJnZXQpIHtcclxuICAgIGN1cnJlbnRfZ3JhZGVzID0gW107XHJcbiAgICBjdXJyZW50X3BvaW50cyA9IFtdO1xyXG4gIH1cclxuICByZXR1cm4gW2N1cnJlbnRfZ3JhZGVzLCBjdXJyZW50X3BvaW50c107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZV9pbnB1dHMoKSB7XHJcbiAgdmFyIHRhcmdldF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0X3RleHRcIik7XHJcbiAgdGFyZ2V0X2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICB9KTtcclxuXHJcbiAgdmFyIGhsX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJobF9zdWJzX3RleHRcIik7XHJcbiAgaGxfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgb2xfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sX3N1YnNfdGV4dFwiKTtcclxuICBvbF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnVwZGF0ZV9pbnB1dHMoKTtcclxuXHJcbi8vIHRvIGhpZGUgdGhlIGJveCBvZiBvdXRwdXQgd2hlbiB0aGUgcGFnZSBsb2FkZXNcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRfY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuZnVuY3Rpb24gcHVsc2VJbnB1dHMoKSB7XHJcbiAgbGV0IGlucHV0RWxlbWVudCA9IFtcInRhcmdldF90ZXh0XCIsIFwiaGxfc3Vic190ZXh0XCIsIFwib2xfc3Vic190ZXh0XCIsIFwiYm9vbF9obF9tYXRoc1wiLCBcImxjdnBcIl07XHJcblxyXG4gIGlucHV0RWxlbWVudC5mb3JFYWNoKGlkID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKFwicHVsc2VBbmltYXRpb25cIik7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsY3VsYXRvci1jb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpbnB1dEVsZW1lbnQuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QucmVtb3ZlKFwicHVsc2VBbmltYXRpb25cIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxucHVsc2VJbnB1dHMoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbmRfcG9pbnRzX25lZWRlZCgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdF9jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRfY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG5cclxuICB0YXJnZXRfbnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0X3RleHRcIikudmFsdWUpO1xyXG4gIGhsX251bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhsX3N1YnNfdGV4dFwiKS52YWx1ZSk7XHJcbiAgb2xfbnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xfc3Vic190ZXh0XCIpLnZhbHVlKTtcclxuXHJcbiAgLy8gY2hlY2sgZm9yIGludmFsaWQgaW5wdXRcclxuICB2YXIgaW52YWxpZF90YXJnZXRfaW5wdXQgPSAodGFyZ2V0X251bSA8PSAwKSB8fCAodGFyZ2V0X251bSA+IDYyNSk7XHJcbiAgdmFyIGludmFsaWRfc3Vic19pbnB1dCA9IChobF9udW0gPCAwKSB8fCAob2xfbnVtIDwgMCk7XHJcbiAgdmFyIG1heF9wdHMgPSAoaGxfbnVtICogMTAwKSArIChvbF9udW0gKiA1NikgKyBhZGRfMjU7XHJcbiAgdmFyIGludmFsaWRfcmFuZ2UgPSAobWF4X3B0cyA+PSB0YXJnZXRfbnVtKSA9PSBmYWxzZTtcclxuXHJcbiAgY29uc3QgcmFuZ2VfZXJyb3JfbXNnID0gYEl0J3MgaW1wb3NzaWJsZSB0byBhY2hpZXZlICR7dGFyZ2V0X251bX0gQ0FPIHBvaW50cyB3aXRoICR7aGxfbnVtfSBoaWdoZXItbGV2ZWwgc3ViamVjdHMgYW5kICR7b2xfbnVtfSBvcmRpbmFyeS1sZXZlbCBzdWJqZWN0cy5gO1xyXG4gIGNvbnN0IHB0c19lcnJvcl9tc2cgPSBcIllvdXIgaW5wdXR0ZWQgQ0FPIHBvaW50cyBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNjI1LlwiO1xyXG4gIGNvbnN0IHN1YmplY3RzX2Vycm9yX21zZyA9IFwiWW91IGNhbid0IGhhdmUgYSBuZWdhdGl2ZSBhbW91dCBvZiBzdWJqZWN0c1wiO1xyXG5cclxuICB2YXIgZXJyb3Jfc3RhdHVzID0gXCJcIjtcclxuXHJcbiAgaWYgKGludmFsaWRfcmFuZ2UpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSByYW5nZV9lcnJvcl9tc2cgKyBcIlxcblwiO1xyXG4gIH1cclxuICBpZiAoaW52YWxpZF90YXJnZXRfaW5wdXQpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSBwdHNfZXJyb3JfbXNnICsgXCJcXG5cIjtcclxuICB9XHJcbiAgaWYgKGludmFsaWRfc3Vic19pbnB1dCkge1xyXG4gICAgZXJyb3Jfc3RhdHVzICs9IHN1YmplY3RzX2Vycm9yX21zZyArIFwiXFxuXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgaW52YWxpZF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZF9pbnB1dFwiKTtcclxuICBsZXQgaW5mb19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fY29udGFpbmVyXCIpO1xyXG4gIGxldCBzb3VsdGlvbl9vdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdWx0aW9uX291dHB1dFwiKTtcclxuXHJcbiAgaWYgKGVycm9yX3N0YXR1cyAhPSBcIlwiKSB7XHJcbiAgICBpbnZhbGlkX2lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlSW5cIik7XHJcbiAgICBpbnZhbGlkX2lucHV0Lm9mZnNldFdpZHRobDtcclxuICAgIGludmFsaWRfaW5wdXQuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuXHJcbiAgICBpbnZhbGlkX2lucHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpbnZhbGlkX2lucHV0LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgIGludmFsaWRfaW5wdXQuaW5uZXJIVE1MID0gZXJyb3Jfc3RhdHVzO1xyXG5cclxuICAgIGluZm9fY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgIHNvdWx0aW9uX291dHB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV9jb250YWluZXJcIikuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG5cclxuICAgIGlmICh0YXJnZXRfbnVtICE9IDAgJiYgKGhsX251bSAhPSAwIHx8IG9sX251bSAhPSAwKSkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdF9jb250YWluZXJcIikuc2Nyb2xsSW50b1ZpZXcoKTtcclxuXHJcblxyXG4gICAgICAvLyB0b2RvOiBvbmx5IHNjcm9sbCB1cCBpZiB0aGUgdXNlciBkb2Vzbid0IHNjcm9sbFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0b3ItY29udGFpbmVyXCIpLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZWxzZSB7XHJcbiAgICBpbmZvX2NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBpbmZvX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgc291bHRpb25fb3V0cHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdmFyIG1hdGhzX3BsdXNfMjU7XHJcbiAgICBpZiAoYWRkXzI1ID09IDI1KSB7XHJcbiAgICAgIG1hdGhzX3BsdXNfMjUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG1hdGhzX3BsdXNfMjUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciBtYXRjaGVzX2luZm8gPSBtYWluKHRhcmdldF9udW0sIGhsX251bSwgb2xfbnVtLCBtYXRoc19wbHVzXzI1KTtcclxuICAgIHZhciBwb2ludHNfbGlzdCA9IG1hdGNoZXNfaW5mb1swXTtcclxuICAgIHZhciBwb2ludHNfcmVxID0gbWF0Y2hlc19pbmZvWzFdO1xyXG5cclxuICAgIGlmIChwb2ludHNfbGlzdC5pbmNsdWRlcygyNSkpIHtcclxuICAgICAgZGlzcGxheV9wbHVzXzI1KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRpc3BsYXlfcGx1c18yNShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgb3V0cHV0X2luZm8gPSBnYXJfYW5kX3B0Zyhwb2ludHNfbGlzdCk7XHJcblxyXG4gICAgdmFyIGdyYWRlX2F2ZyA9IG91dHB1dF9pbmZvWzBdO1xyXG4gICAgdmFyIHJlcV9yZXN1bHRzID0gb3V0cHV0X2luZm9bMV07IC8vIHRoZXNlIGFyZSBsZXR0ZXIgZ3JhZGVzXHJcbiAgICByZXFfcmVzdWx0cyA9IHJlZF9jb21tYXMocmVxX3Jlc3VsdHMpO1xyXG5cclxuXHJcbiAgICBsZXQgZWxlbV9yZXFfcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxX3Jlc3VsdHNcIik7XHJcblxyXG4gICAgaWYgKGVsZW1fcmVxX3Jlc3VsdHMudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvaW50c19yZXFcIikuaW5uZXJIVE1MID0gU3RyaW5nKHBvaW50c19yZXEpO1xyXG4gICAgICBlbGVtX3JlcV9yZXN1bHRzLmlubmVySFRNTCA9IFN0cmluZyhyZXFfcmVzdWx0cyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhZGVfYXZnX3JlcVwiKS5pbm5lckhUTUwgPSBTdHJpbmcoZ3JhZGVfYXZnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvam9kZXZJY29uKCkge1xyXG4gIGxldCBnb2pvZGV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXhlZC1nb2pvZGV2XCIpO1xyXG4gIGxldCB0YXJnZXRCb3R0b207XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNTAwKSB7XHJcbiAgICB0YXJnZXRCb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2xfaGxfbWF0aHNcIik7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgdGFyZ2V0Qm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lXCIpO1xyXG4gIH1cclxuXHJcbiAgZ29qb2Rldi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICBsZXQgd2VsY29tZVJlY3QgPSB0YXJnZXRCb3R0b20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAod2VsY29tZVJlY3QuYm90dG9tIDwgMCkge1xyXG4gICAgICBnb2pvZGV2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGdvam9kZXYuc3R5bGUub3BhY2l0eSA9IFwiMC42XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZ29qb2Rldi5zdHlsZSA9IFwidHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgKzE1cHgpO1wiO1xyXG4gICAgICBnb2pvZGV2LnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gXCIwLjVzXCI7XHJcbiAgICAgIGdvam9kZXYuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICBnb2pvZGV2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgZ29qb2Rldi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgIGdvam9kZXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gIH0pO1xyXG5cclxuICBnb2pvZGV2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICBnb2pvZGV2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xyXG4gIH0pXHJcbiAgaGFuZGxlU2Nyb2xsKCk7XHJcbn1cclxuXHJcbmdvam9kZXZJY29uKCk7XHJcblxyXG5mdW5jdGlvbiBnb2pvZGV2KCkge1xyXG4gIGxldCBlbW1hbnVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29qb2RldlwiKTtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuXHJcbiAgICBlbW1hbnVlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZUluXCIpO1xyXG4gICAgZW1tYW51ZWwub2Zmc2V0V2lkdGg7XHJcbiAgICBlbW1hbnVlbC5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG5cclxuICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgIGVtbWFudWVsLnNyYyA9IFwiaW1hZ2VzL2dvam9kZXYud2VicFwiO1xyXG4gICAgICBpbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZW1tYW51ZWwuc3JjID0gXCJpbWFnZXMvbG9nby53ZWJwXCI7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuICB9LCAzNTAwKVxyXG59XHJcblxyXG5nb2pvZGV2KCkiXSwKICAibWFwcGluZ3MiOiAiOzs7QUFFQSxNQUFJLFNBQVM7QUFLYixXQUFTLGNBQWM7QUFDckIsUUFBSSxnQkFBZ0IsU0FBUyxlQUFlLGVBQWU7QUFDM0QsUUFBSSxpQkFBaUIsU0FBUyxlQUFlLGdCQUFnQjtB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
