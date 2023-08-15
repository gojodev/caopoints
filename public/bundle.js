"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // public/dom-support.js
  function set_sys_theme() {
    var r = document.querySelector(":root");
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      r.style.setProperty("--white", "black");
      r.style.setProperty("--black", "white");
      const cyan_text = document.querySelectorAll("info_output");
      cyan_text.forEach((text) => {
        text.style.color = "cyan";
      });
    } else {
      r.style.setProperty("--white", "white");
      r.style.setProperty("--black", "black");
    }
  }
  document.getElementById("bool_hl_maths").addEventListener("click", is_hl_maths);
  var add_25 = 25;
  var is_hl_maths_counter = 1;
  var counter = 1;
  function is_hl_maths() {
    var bool_hl_maths = document.getElementById("bool_hl_maths");
    var adding_25_text = document.getElementById("adding_25_text");
    if (counter == 0) {
      bool_hl_maths.innerHTML = "Yes";
      adding_25_text.style.opacity = "1";
      adding_25_text.style.transition = "0.2s";
      add_25 = 25;
      counter = 1;
    } else {
      bool_hl_maths.innerHTML = "No";
      adding_25_text.style.opacity = "0";
      add_25 = 0;
      counter = 0;
    }
    find_points_needed();
    if (is_hl_maths_counter > 1) {
      bool_hl_maths.classList.toggle("selected-button");
    }
    is_hl_maths_counter += 1;
  }
  is_hl_maths();
  document.getElementById("lcvp").addEventListener("click", is_lcvp);
  var is_lcvp_counter = 1;
  var lcvp_counter = 1;
  var lcvp;
  function is_lcvp() {
    var lcvp_button_text = document.getElementById("lcvp");
    var lcvp_text = document.getElementById("lcvp_text");
    if (lcvp_counter == 0) {
      lcvp_button_text.innerHTML = "Yes";
      lcvp_text.innerHTML = "Doing LCVP modules";
      lcvp_text.style.opacity = "1";
      lcvp_text.style.transition = "0.2s";
      lcvp_counter = 1;
      lcvp = true;
      lcvp_button_text.classList.toggle("red-borders");
    } else {
      lcvp_button_text.innerHTML = "No";
      lcvp_text.style.opacity = "0";
      lcvp_counter = 0;
      lcvp = false;
    }
    find_points_needed();
    if (is_lcvp_counter > 1) {
      lcvp_button_text.classList.toggle("selected-button");
    }
    is_lcvp_counter += 1;
    return lcvp;
  }
  is_lcvp();
  document.getElementById("adding_25_container").style.display = "none";
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
    var counter2 = 0;
    counter2 += 100 * hl_subs + 56 * ol_subs;
    if (maths_plus_25) {
      counter2 += 25;
    }
    return counter2;
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
    target_input.addEventListener("input", function() {
      find_points_needed();
    });
    var hl_input = document.getElementById("hl_subs_text");
    hl_input.addEventListener("input", function() {
      find_points_needed();
    });
    var ol_input = document.getElementById("ol_subs_text");
    ol_input.addEventListener("input", function() {
      find_points_needed();
    });
  }
  update_inputs();
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
  var dt = new Date();
  var month = dt.getMonth() + 1;
  if ([5, 6].includes(month)) {
    setInterval(motivate, 1e3);
    motivate();
  }

  // public/node_modules/@firebase/util/dist/index.esm2017.js
  var stringToByteArray$1 = function(str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (c < 128) {
        out[p++] = c;
      } else if (c < 2048) {
        out[p++] = c >> 6 | 192;
        out[p++] = c & 63 | 128;
      } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
        c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
        out[p++] = c >> 18 | 240;
        out[p++] = c >> 12 & 63 | 128;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      } else {
        out[p++] = c >> 12 | 224;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      }
    }
    return out;
  };
  var byteArrayToString = function(bytes) {
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
      const c1 = bytes[pos++];
      if (c1 < 128) {
        out[c++] = String.fromCharCode(c1);
      } else if (c1 > 191 && c1 < 224) {
        const c2 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      } else if (c1 > 239 && c1 < 365) {
        const c2 = bytes[pos++];
        const c3 = bytes[pos++];
        const c4 = bytes[pos++];
        const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
        out[c++] = String.fromCharCode(55296 + (u >> 10));
        out[c++] = String.fromCharCode(56320 + (u & 1023));
      } else {
        const c2 = bytes[pos++];
        const c3 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      }
    }
    return out.join("");
  };
  var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === "function",
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
      if (!Array.isArray(input)) {
        throw Error("encodeByteArray takes an array as a parameter");
      }
      this.init_();
      const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
      const output = [];
      for (let i = 0; i < input.length; i += 3) {
        const byte1 = input[i];
        const haveByte2 = i + 1 < input.length;
        const byte2 = haveByte2 ? input[i + 1] : 0;
        const haveByte3 = i + 2 < input.length;
        const byte3 = haveByte3 ? input[i + 2] : 0;
        const outByte1 = byte1 >> 2;
        const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
        let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
        let outByte4 = byte3 & 63;
        if (!haveByte3) {
          outByte4 = 64;
          if (!haveByte2) {
            outByte3 = 64;
          }
        }
        output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
      }
      return output.join("");
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return btoa(input);
      }
      return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return atob(input);
      }
      return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
      this.init_();
      const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
      const output = [];
      for (let i = 0; i < input.length; ) {
        const byte1 = charToByteMap[input.charAt(i++)];
        const haveByte2 = i < input.length;
        const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
        ++i;
        const haveByte3 = i < input.length;
        const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
        ++i;
        const haveByte4 = i < input.length;
        const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
        ++i;
        if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
          throw Error();
        }
        const outByte1 = byte1 << 2 | byte2 >> 4;
        output.push(outByte1);
        if (byte3 !== 64) {
          const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
          output.push(outByte2);
          if (byte4 !== 64) {
            const outByte3 = byte3 << 6 & 192 | byte4;
            output.push(outByte3);
          }
        }
      }
      return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
      if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {};
        this.charToByteMap_ = {};
        this.byteToCharMapWebSafe_ = {};
        this.charToByteMapWebSafe_ = {};
        for (let i = 0; i < this.ENCODED_VALS.length; i++) {
          this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
          this.charToByteMap_[this.byteToCharMap_[i]] = i;
          this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
          this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
          if (i >= this.ENCODED_VALS_BASE.length) {
            this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
          }
        }
      }
    }
  };
  var base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
  };
  var base64urlEncodeWithoutPadding = function(str) {
    return base64Encode(str).replace(/\./g, "");
  };
  var base64Decode = function(str) {
    try {
      return base64.decodeString(str, true);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
  function isIndexedDBAvailable() {
    try {
      return typeof indexedDB === "object";
    } catch (e) {
      return false;
    }
  }
  function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
      try {
        let preExist = true;
        const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
        const request = self.indexedDB.open(DB_CHECK_NAME);
        request.onsuccess = () => {
          request.result.close();
          if (!preExist) {
            self.indexedDB.deleteDatabase(DB_CHECK_NAME);
          }
          resolve(true);
        };
        request.onupgradeneeded = () => {
          preExist = false;
        };
        request.onerror = () => {
          var _a;
          reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  function areCookiesEnabled() {
    if (typeof navigator === "undefined" || !navigator.cookieEnabled) {
      return false;
    }
    return true;
  }
  function getGlobal() {
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    throw new Error("Unable to locate global object.");
  }
  var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
  var getDefaultsFromEnvVariable = () => {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
      return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
      return JSON.parse(defaultsJsonString);
    }
  };
  var getDefaultsFromCookie = () => {
    if (typeof document === "undefined") {
      return;
    }
    let match;
    try {
      match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (e) {
      return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
  };
  var getDefaults = () => {
    try {
      return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  };
  var getDefaultAppConfig = () => {
    var _a;
    return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
  };
  var Deferred = class {
    constructor() {
      this.reject = () => {
      };
      this.resolve = () => {
      };
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
      return (error, value) => {
        if (error) {
          this.reject(error);
        } else {
          this.resolve(value);
        }
        if (typeof callback === "function") {
          this.promise.catch(() => {
          });
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  };
  var ERROR_NAME = "FirebaseError";
  var FirebaseError = class extends Error {
    constructor(code, message, customData) {
      super(message);
      this.code = code;
      this.customData = customData;
      this.name = ERROR_NAME;
      Object.setPrototypeOf(this, FirebaseError.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorFactory.prototype.create);
      }
    }
  };
  var ErrorFactory = class {
    constructor(service, serviceName, errors) {
      this.service = service;
      this.serviceName = serviceName;
      this.errors = errors;
    }
    create(code, ...data) {
      const customData = data[0] || {};
      const fullCode = `${this.service}/${code}`;
      const template = this.errors[code];
      const message = template ? replaceTemplate(template, customData) : "Error";
      const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
      const error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  };
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
      const value = data[key];
      return value != null ? String(value) : `<${key}?>`;
    });
  }
  var PATTERN = /\{\$([^}]+)}/g;
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
      if (!bKeys.includes(k)) {
        return false;
      }
      const aProp = a[k];
      const bProp = b[k];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k of bKeys) {
      if (!aKeys.includes(k)) {
        return false;
      }
    }
    return true;
  }
  function isObject(thing) {
    return thing !== null && typeof thing === "object";
  }
  var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }

  // public/node_modules/@firebase/component/dist/esm/index.esm2017.js
  var Component = class {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name5, instanceFactory, type) {
      this.name = name5;
      this.instanceFactory = instanceFactory;
      this.type = type;
      this.multipleInstances = false;
      this.serviceProps = {};
      this.instantiationMode = "LAZY";
      this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
      this.instantiationMode = mode;
      return this;
    }
    setMultipleInstances(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    }
    setServiceProps(props) {
      this.serviceProps = props;
      return this;
    }
    setInstanceCreatedCallback(callback) {
      this.onInstanceCreated = callback;
      return this;
    }
  };
  var DEFAULT_ENTRY_NAME = "[DEFAULT]";
  var Provider = class {
    constructor(name5, container) {
      this.name = name5;
      this.container = container;
      this.component = null;
      this.instances = /* @__PURE__ */ new Map();
      this.instancesDeferred = /* @__PURE__ */ new Map();
      this.instancesOptions = /* @__PURE__ */ new Map();
      this.onInitCallbacks = /* @__PURE__ */ new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        const deferred = new Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {
          }
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
      var _a;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
      const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        if (optional) {
          return null;
        } else {
          throw Error(`Service ${this.name} is not available`);
        }
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(component) {
      if (component.name !== this.name) {
        throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
      }
      if (this.component) {
        throw Error(`Component for ${this.name} has already been provided`);
      }
      this.component = component;
      if (!this.shouldAutoInitialize()) {
        return;
      }
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
        } catch (e) {
        }
      }
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) {
        }
      }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
      this.instancesDeferred.delete(identifier);
      this.instancesOptions.delete(identifier);
      this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
      const services = Array.from(this.instances.values());
      await Promise.all([
        ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
        ...services.filter((service) => "_delete" in service).map((service) => service._delete())
      ]);
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
      return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
      return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
      const { options = {} } = opts;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
      if (this.isInitialized(normalizedIdentifier)) {
        throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
      }
      if (!this.isComponentSet()) {
        throw Error(`Component ${this.name} has not been registered yet`);
      }
      const instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options
      });
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        if (normalizedIdentifier === normalizedDeferredIdentifier) {
          instanceDeferred.resolve(instance);
        }
      }
      return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
      var _a;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      const existingInstance = this.instances.get(normalizedIdentifier);
      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }
      return () => {
        existingCallbacks.delete(callback);
      };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
      const callbacks = this.onInitCallbacks.get(identifier);
      if (!callbacks) {
        return;
      }
      for (const callback of callbacks) {
        try {
          callback(instance, identifier);
        } catch (_a) {
        }
      }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
      let instance = this.instances.get(instanceIdentifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch (_a) {
          }
        }
      }
      return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier;
      }
    }
    shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT";
    }
  };
  function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
  }
  function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
  }
  var ComponentContainer = class {
    constructor(name5) {
      this.name = name5;
      this.providers = /* @__PURE__ */ new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
      const provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
      }
      provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
      const provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        this.providers.delete(component.name);
      }
      this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name5) {
      if (this.providers.has(name5)) {
        return this.providers.get(name5);
      }
      const provider = new Provider(name5, this);
      this.providers.set(name5, provider);
      return provider;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  };

  // public/node_modules/@firebase/logger/dist/esm/index.esm2017.js
  var instances = [];
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
    LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
    LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
    LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
    LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
    LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
  })(LogLevel || (LogLevel = {}));
  var levelStringToEnum = {
    "debug": LogLevel.DEBUG,
    "verbose": LogLevel.VERBOSE,
    "info": LogLevel.INFO,
    "warn": LogLevel.WARN,
    "error": LogLevel.ERROR,
    "silent": LogLevel.SILENT
  };
  var defaultLogLevel = LogLevel.INFO;
  var ConsoleMethod = {
    [LogLevel.DEBUG]: "log",
    [LogLevel.VERBOSE]: "log",
    [LogLevel.INFO]: "info",
    [LogLevel.WARN]: "warn",
    [LogLevel.ERROR]: "error"
  };
  var defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
      return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
      console[method](`[${now}]  ${instance.name}:`, ...args);
    } else {
      throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
  };
  var Logger = class {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name5) {
      this.name = name5;
      this._logLevel = defaultLogLevel;
      this._logHandler = defaultLogHandler;
      this._userLogHandler = null;
      instances.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(val) {
      if (!(val in LogLevel)) {
        throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
      }
      this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
      this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(val) {
      this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
      this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
      this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
      this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
      this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
      this._logHandler(this, LogLevel.ERROR, ...args);
    }
  };

  // public/node_modules/idb/build/wrap-idb-value.js
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var cursorRequestMap = /* @__PURE__ */ new WeakMap();
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "objectStoreNames") {
          return target.objectStoreNames || transactionStoreNamesMap.get(target);
        }
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);

  // public/node_modules/idb/build/index.js
  function openDB(name5, version4, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name5, version4);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
      });
    }
    if (blocked)
      request.addEventListener("blocked", () => blocked());
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking)
        db.addEventListener("versionchange", () => blocking());
    }).catch(() => {
    });
    return openPromise;
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));

  // public/node_modules/@firebase/app/dist/esm/index.esm2017.js
  var PlatformLoggerServiceImpl = class {
    constructor(container) {
      this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
      const providers = this.container.getProviders();
      return providers.map((provider) => {
        if (isVersionServiceProvider(provider)) {
          const service = provider.getImmediate();
          return `${service.library}/${service.version}`;
        } else {
          return null;
        }
      }).filter((logString) => logString).join(" ");
    }
  };
  function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
  }
  var name$o = "@firebase/app";
  var version$1 = "0.9.0";
  var logger = new Logger("@firebase/app");
  var name$n = "@firebase/app-compat";
  var name$m = "@firebase/analytics-compat";
  var name$l = "@firebase/analytics";
  var name$k = "@firebase/app-check-compat";
  var name$j = "@firebase/app-check";
  var name$i = "@firebase/auth";
  var name$h = "@firebase/auth-compat";
  var name$g = "@firebase/database";
  var name$f = "@firebase/database-compat";
  var name$e = "@firebase/functions";
  var name$d = "@firebase/functions-compat";
  var name$c = "@firebase/installations";
  var name$b = "@firebase/installations-compat";
  var name$a = "@firebase/messaging";
  var name$9 = "@firebase/messaging-compat";
  var name$8 = "@firebase/performance";
  var name$7 = "@firebase/performance-compat";
  var name$6 = "@firebase/remote-config";
  var name$5 = "@firebase/remote-config-compat";
  var name$4 = "@firebase/storage";
  var name$3 = "@firebase/storage-compat";
  var name$2 = "@firebase/firestore";
  var name$1 = "@firebase/firestore-compat";
  var name = "firebase";
  var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
  var PLATFORM_LOG_STRING = {
    [name$o]: "fire-core",
    [name$n]: "fire-core-compat",
    [name$l]: "fire-analytics",
    [name$m]: "fire-analytics-compat",
    [name$j]: "fire-app-check",
    [name$k]: "fire-app-check-compat",
    [name$i]: "fire-auth",
    [name$h]: "fire-auth-compat",
    [name$g]: "fire-rtdb",
    [name$f]: "fire-rtdb-compat",
    [name$e]: "fire-fn",
    [name$d]: "fire-fn-compat",
    [name$c]: "fire-iid",
    [name$b]: "fire-iid-compat",
    [name$a]: "fire-fcm",
    [name$9]: "fire-fcm-compat",
    [name$8]: "fire-perf",
    [name$7]: "fire-perf-compat",
    [name$6]: "fire-rc",
    [name$5]: "fire-rc-compat",
    [name$4]: "fire-gcs",
    [name$3]: "fire-gcs-compat",
    [name$2]: "fire-fst",
    [name$1]: "fire-fst-compat",
    "fire-js": "fire-js",
    [name]: "fire-js-all"
  };
  var _apps = /* @__PURE__ */ new Map();
  var _components = /* @__PURE__ */ new Map();
  function _addComponent(app, component) {
    try {
      app.container.addComponent(component);
    } catch (e) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app of _apps.values()) {
      _addComponent(app, component);
    }
    return true;
  }
  function _getProvider(app, name5) {
    const heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
    if (heartbeatController) {
      void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name5);
  }
  var ERRORS = {
    [
      "no-app"
      /* AppError.NO_APP */
    ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    [
      "bad-app-name"
      /* AppError.BAD_APP_NAME */
    ]: "Illegal App name: '{$appName}",
    [
      "duplicate-app"
      /* AppError.DUPLICATE_APP */
    ]: "Firebase App named '{$appName}' already exists with different options or config",
    [
      "app-deleted"
      /* AppError.APP_DELETED */
    ]: "Firebase App named '{$appName}' already deleted",
    [
      "no-options"
      /* AppError.NO_OPTIONS */
    ]: "Need to provide options, when not being deployed to hosting via source.",
    [
      "invalid-app-argument"
      /* AppError.INVALID_APP_ARGUMENT */
    ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    [
      "invalid-log-argument"
      /* AppError.INVALID_LOG_ARGUMENT */
    ]: "First argument to `onLog` must be null or a function.",
    [
      "idb-open"
      /* AppError.IDB_OPEN */
    ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-get"
      /* AppError.IDB_GET */
    ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-set"
      /* AppError.IDB_WRITE */
    ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-delete"
      /* AppError.IDB_DELETE */
    ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
  };
  var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
  var FirebaseAppImpl = class {
    constructor(options, config, container) {
      this._isDeleted = false;
      this._options = Object.assign({}, options);
      this._config = Object.assign({}, config);
      this._name = config.name;
      this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
      this._container = container;
      this.container.addComponent(new Component(
        "app",
        () => this,
        "PUBLIC"
        /* ComponentType.PUBLIC */
      ));
    }
    get automaticDataCollectionEnabled() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
    get name() {
      this.checkDestroyed();
      return this._name;
    }
    get options() {
      this.checkDestroyed();
      return this._options;
    }
    get config() {
      this.checkDestroyed();
      return this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(val) {
      this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
      }
    }
  };
  function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== "object") {
      const name6 = rawConfig;
      rawConfig = { name: name6 };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
    const name5 = config.name;
    if (typeof name5 !== "string" || !name5) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name5)
      });
    }
    options || (options = getDefaultAppConfig());
    if (!options) {
      throw ERROR_FACTORY.create(
        "no-options"
        /* AppError.NO_OPTIONS */
      );
    }
    const existingApp = _apps.get(name5);
    if (existingApp) {
      if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
        return existingApp;
      } else {
        throw ERROR_FACTORY.create("duplicate-app", { appName: name5 });
      }
    }
    const container = new ComponentContainer(name5);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name5, newApp);
    return newApp;
  }
  function getApp(name5 = DEFAULT_ENTRY_NAME2) {
    const app = _apps.get(name5);
    if (!app && name5 === DEFAULT_ENTRY_NAME2) {
      return initializeApp();
    }
    if (!app) {
      throw ERROR_FACTORY.create("no-app", { appName: name5 });
    }
    return app;
  }
  function registerVersion(libraryKeyOrName, version4, variant) {
    var _a;
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
      library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version4.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        `Unable to register library "${library}" with version "${version4}":`
      ];
      if (libraryMismatch) {
        warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(
      `${library}-version`,
      () => ({ library, version: version4 }),
      "VERSION"
      /* ComponentType.VERSION */
    ));
  }
  var DB_NAME = "firebase-heartbeat-database";
  var DB_VERSION = 1;
  var STORE_NAME = "firebase-heartbeat-store";
  var dbPromise = null;
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade: (db, oldVersion) => {
          switch (oldVersion) {
            case 0:
              db.createObjectStore(STORE_NAME);
          }
        }
      }).catch((e) => {
        throw ERROR_FACTORY.create("idb-open", {
          originalErrorMessage: e.message
        });
      });
    }
    return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app) {
    try {
      const db = await getDbPromise();
      return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app));
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-get", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app));
      return tx.done;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-set", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
  }
  var MAX_HEADER_BYTES = 1024;
  var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
  var HeartbeatServiceImpl = class {
    constructor(container) {
      this.container = container;
      this._heartbeatsCache = null;
      const app = this.container.getProvider("app").getImmediate();
      this._storage = new HeartbeatStorageImpl(app);
      this._heartbeatsCachePromise = this._storage.read().then((result) => {
        this._heartbeatsCache = result;
        return result;
      });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
      const platformLogger = this.container.getProvider("platform-logger").getImmediate();
      const agent = platformLogger.getPlatformInfoString();
      const date = getUTCDateString();
      if (this._heartbeatsCache === null) {
        this._heartbeatsCache = await this._heartbeatsCachePromise;
      }
      if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
        return;
      } else {
        this._heartbeatsCache.heartbeats.push({ date, agent });
      }
      this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
        const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
        const now = Date.now();
        return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
      });
      return this._storage.overwrite(this._heartbeatsCache);
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
      if (this._heartbeatsCache === null) {
        await this._heartbeatsCachePromise;
      }
      if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
        return "";
      }
      const date = getUTCDateString();
      const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
      const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
      this._heartbeatsCache.lastSentHeartbeatDate = date;
      if (unsentEntries.length > 0) {
        this._heartbeatsCache.heartbeats = unsentEntries;
        await this._storage.overwrite(this._heartbeatsCache);
      } else {
        this._heartbeatsCache.heartbeats = [];
        void this._storage.overwrite(this._heartbeatsCache);
      }
      return headerString;
    }
  };
  function getUTCDateString() {
    const today = new Date();
    return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    const heartbeatsToSend = [];
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
      const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
      if (!heartbeatEntry) {
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatsToSend.pop();
          break;
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          break;
        }
      }
      unsentEntries = unsentEntries.slice(1);
    }
    return {
      heartbeatsToSend,
      unsentEntries
    };
  }
  var HeartbeatStorageImpl = class {
    constructor(app) {
      this.app = app;
      this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
      if (!isIndexedDBAvailable()) {
        return false;
      } else {
        return validateIndexedDBOpenable().then(() => true).catch(() => false);
      }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return { heartbeats: [] };
      } else {
        const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
        return idbHeartbeatObject || { heartbeats: [] };
      }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
      var _a;
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: heartbeatsObject.heartbeats
        });
      }
    }
    // add heartbeats
    async add(heartbeatsObject) {
      var _a;
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: [
            ...existingHeartbeatsObject.heartbeats,
            ...heartbeatsObject.heartbeats
          ]
        });
      }
    }
  };
  function countBytes(heartbeatsCache) {
    return base64urlEncodeWithoutPadding(
      // heartbeatsCache wrapper properties
      JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
    ).length;
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component(
      "platform-logger",
      (container) => new PlatformLoggerServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    _registerComponent(new Component(
      "heartbeat",
      (container) => new HeartbeatServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    registerVersion(name$o, version$1, variant);
    registerVersion(name$o, version$1, "esm2017");
    registerVersion("fire-js", "");
  }
  registerCoreComponents("");

  // public/node_modules/firebase/app/dist/esm/index.esm.js
  var name2 = "firebase";
  var version = "9.15.0";
  registerVersion(name2, version, "app");

  // public/node_modules/@firebase/installations/dist/esm/index.esm2017.js
  var name3 = "@firebase/installations";
  var version2 = "0.6.0";
  var PENDING_TIMEOUT_MS = 1e4;
  var PACKAGE_VERSION = `w:${version2}`;
  var INTERNAL_AUTH_VERSION = "FIS_v2";
  var INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
  var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
  var SERVICE = "installations";
  var SERVICE_NAME = "Installations";
  var ERROR_DESCRIPTION_MAP = {
    [
      "missing-app-config-values"
      /* ErrorCode.MISSING_APP_CONFIG_VALUES */
    ]: 'Missing App configuration value: "{$valueName}"',
    [
      "not-registered"
      /* ErrorCode.NOT_REGISTERED */
    ]: "Firebase Installation is not registered.",
    [
      "installation-not-found"
      /* ErrorCode.INSTALLATION_NOT_FOUND */
    ]: "Firebase Installation not found.",
    [
      "request-failed"
      /* ErrorCode.REQUEST_FAILED */
    ]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    [
      "app-offline"
      /* ErrorCode.APP_OFFLINE */
    ]: "Could not process request. Application offline.",
    [
      "delete-pending-registration"
      /* ErrorCode.DELETE_PENDING_REGISTRATION */
    ]: "Can't delete installation while there is a pending registration request."
  };
  var ERROR_FACTORY2 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
  function isServerError(error) {
    return error instanceof FirebaseError && error.code.includes(
      "request-failed"
      /* ErrorCode.REQUEST_FAILED */
    );
  }
  function getInstallationsEndpoint({ projectId }) {
    return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
  }
  function extractAuthTokenInfoFromResponse(response) {
    return {
      token: response.token,
      requestStatus: 2,
      expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
      creationTime: Date.now()
    };
  }
  async function getErrorFromResponse(requestName, response) {
    const responseJson = await response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY2.create("request-failed", {
      requestName,
      serverCode: errorData.code,
      serverMessage: errorData.message,
      serverStatus: errorData.status
    });
  }
  function getHeaders({ apiKey }) {
    return new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-goog-api-key": apiKey
    });
  }
  function getHeadersWithAuth(appConfig, { refreshToken }) {
    const headers = getHeaders(appConfig);
    headers.append("Authorization", getAuthorizationHeader(refreshToken));
    return headers;
  }
  async function retryIfServerError(fn) {
    const result = await fn();
    if (result.status >= 500 && result.status < 600) {
      return fn();
    }
    return result;
  }
  function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    return Number(responseExpiresIn.replace("s", "000"));
  }
  function getAuthorizationHeader(refreshToken) {
    return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
  }
  async function createInstallationRequest({ appConfig, heartbeatServiceProvider }, { fid }) {
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig);
    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });
    if (heartbeatService) {
      const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
      if (heartbeatsHeader) {
        headers.append("x-firebase-client", heartbeatsHeader);
      }
    }
    const body = {
      fid,
      authVersion: INTERNAL_AUTH_VERSION,
      appId: appConfig.appId,
      sdkVersion: PACKAGE_VERSION
    };
    const request = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
      const responseValue = await response.json();
      const registeredInstallationEntry = {
        fid: responseValue.fid || fid,
        registrationStatus: 2,
        refreshToken: responseValue.refreshToken,
        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
      };
      return registeredInstallationEntry;
    } else {
      throw await getErrorFromResponse("Create Installation", response);
    }
  }
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  function bufferToBase64UrlSafe(array) {
    const b64 = btoa(String.fromCharCode(...array));
    return b64.replace(/\+/g, "-").replace(/\//g, "_");
  }
  var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
  var INVALID_FID = "";
  function generateFid() {
    try {
      const fidByteArray = new Uint8Array(17);
      const crypto = self.crypto || self.msCrypto;
      crypto.getRandomValues(fidByteArray);
      fidByteArray[0] = 112 + fidByteArray[0] % 16;
      const fid = encode(fidByteArray);
      return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    } catch (_a) {
      return INVALID_FID;
    }
  }
  function encode(fidByteArray) {
    const b64String = bufferToBase64UrlSafe(fidByteArray);
    return b64String.substr(0, 22);
  }
  function getKey(appConfig) {
    return `${appConfig.appName}!${appConfig.appId}`;
  }
  var fidChangeCallbacks = /* @__PURE__ */ new Map();
  function fidChanged(appConfig, fid) {
    const key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
  }
  function callFidChangeCallbacks(key, fid) {
    const callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      callback(fid);
    }
  }
  function broadcastFidChange(key, fid) {
    const channel = getBroadcastChannel();
    if (channel) {
      channel.postMessage({ key, fid });
    }
    closeBroadcastChannel();
  }
  var broadcastChannel = null;
  function getBroadcastChannel() {
    if (!broadcastChannel && "BroadcastChannel" in self) {
      broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
      broadcastChannel.onmessage = (e) => {
        callFidChangeCallbacks(e.data.key, e.data.fid);
      };
    }
    return broadcastChannel;
  }
  function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
      broadcastChannel.close();
      broadcastChannel = null;
    }
  }
  var DATABASE_NAME = "firebase-installations-database";
  var DATABASE_VERSION = 1;
  var OBJECT_STORE_NAME = "firebase-installations-store";
  var dbPromise2 = null;
  function getDbPromise2() {
    if (!dbPromise2) {
      dbPromise2 = openDB(DATABASE_NAME, DATABASE_VERSION, {
        upgrade: (db, oldVersion) => {
          switch (oldVersion) {
            case 0:
              db.createObjectStore(OBJECT_STORE_NAME);
          }
        }
      });
    }
    return dbPromise2;
  }
  async function set(appConfig, value) {
    const key = getKey(appConfig);
    const db = await getDbPromise2();
    const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await objectStore.get(key);
    await objectStore.put(value, key);
    await tx.done;
    if (!oldValue || oldValue.fid !== value.fid) {
      fidChanged(appConfig, value.fid);
    }
    return value;
  }
  async function remove(appConfig) {
    const key = getKey(appConfig);
    const db = await getDbPromise2();
    const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
    await tx.objectStore(OBJECT_STORE_NAME).delete(key);
    await tx.done;
  }
  async function update(appConfig, updateFn) {
    const key = getKey(appConfig);
    const db = await getDbPromise2();
    const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await store.get(key);
    const newValue = updateFn(oldValue);
    if (newValue === void 0) {
      await store.delete(key);
    } else {
      await store.put(newValue, key);
    }
    await tx.done;
    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
      fidChanged(appConfig, newValue.fid);
    }
    return newValue;
  }
  async function getInstallationEntry(installations) {
    let registrationPromise;
    const installationEntry = await update(installations.appConfig, (oldEntry) => {
      const installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
      const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry2);
      registrationPromise = entryWithPromise.registrationPromise;
      return entryWithPromise.installationEntry;
    });
    if (installationEntry.fid === INVALID_FID) {
      return { installationEntry: await registrationPromise };
    }
    return {
      installationEntry,
      registrationPromise
    };
  }
  function updateOrCreateInstallationEntry(oldEntry) {
    const entry = oldEntry || {
      fid: generateFid(),
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
  }
  function triggerRegistrationIfNecessary(installations, installationEntry) {
    if (installationEntry.registrationStatus === 0) {
      if (!navigator.onLine) {
        const registrationPromiseWithError = Promise.reject(ERROR_FACTORY2.create(
          "app-offline"
          /* ErrorCode.APP_OFFLINE */
        ));
        return {
          installationEntry,
          registrationPromise: registrationPromiseWithError
        };
      }
      const inProgressEntry = {
        fid: installationEntry.fid,
        registrationStatus: 1,
        registrationTime: Date.now()
      };
      const registrationPromise = registerInstallation(installations, inProgressEntry);
      return { installationEntry: inProgressEntry, registrationPromise };
    } else if (installationEntry.registrationStatus === 1) {
      return {
        installationEntry,
        registrationPromise: waitUntilFidRegistration(installations)
      };
    } else {
      return { installationEntry };
    }
  }
  async function registerInstallation(installations, installationEntry) {
    try {
      const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
      return set(installations.appConfig, registeredInstallationEntry);
    } catch (e) {
      if (isServerError(e) && e.customData.serverCode === 409) {
        await remove(installations.appConfig);
      } else {
        await set(installations.appConfig, {
          fid: installationEntry.fid,
          registrationStatus: 0
          /* RequestStatus.NOT_STARTED */
        });
      }
      throw e;
    }
  }
  async function waitUntilFidRegistration(installations) {
    let entry = await updateInstallationRequest(installations.appConfig);
    while (entry.registrationStatus === 1) {
      await sleep(100);
      entry = await updateInstallationRequest(installations.appConfig);
    }
    if (entry.registrationStatus === 0) {
      const { installationEntry, registrationPromise } = await getInstallationEntry(installations);
      if (registrationPromise) {
        return registrationPromise;
      } else {
        return installationEntry;
      }
    }
    return entry;
  }
  function updateInstallationRequest(appConfig) {
    return update(appConfig, (oldEntry) => {
      if (!oldEntry) {
        throw ERROR_FACTORY2.create(
          "installation-not-found"
          /* ErrorCode.INSTALLATION_NOT_FOUND */
        );
      }
      return clearTimedOutRequest(oldEntry);
    });
  }
  function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
      return {
        fid: entry.fid,
        registrationStatus: 0
        /* RequestStatus.NOT_STARTED */
      };
    }
    return entry;
  }
  function hasInstallationRequestTimedOut(installationEntry) {
    return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
  }
  async function generateAuthTokenRequest({ appConfig, heartbeatServiceProvider }, installationEntry) {
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });
    if (heartbeatService) {
      const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
      if (heartbeatsHeader) {
        headers.append("x-firebase-client", heartbeatsHeader);
      }
    }
    const body = {
      installation: {
        sdkVersion: PACKAGE_VERSION,
        appId: appConfig.appId
      }
    };
    const request = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
      const responseValue = await response.json();
      const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
      return completedAuthToken;
    } else {
      throw await getErrorFromResponse("Generate Auth Token", response);
    }
  }
  function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
  }
  async function refreshAuthToken(installations, forceRefresh = false) {
    let tokenPromise;
    const entry = await update(installations.appConfig, (oldEntry) => {
      if (!isEntryRegistered(oldEntry)) {
        throw ERROR_FACTORY2.create(
          "not-registered"
          /* ErrorCode.NOT_REGISTERED */
        );
      }
      const oldAuthToken = oldEntry.authToken;
      if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
        return oldEntry;
      } else if (oldAuthToken.requestStatus === 1) {
        tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
        return oldEntry;
      } else {
        if (!navigator.onLine) {
          throw ERROR_FACTORY2.create(
            "app-offline"
            /* ErrorCode.APP_OFFLINE */
          );
        }
        const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
        tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
        return inProgressEntry;
      }
    });
    const authToken = tokenPromise ? await tokenPromise : entry.authToken;
    return authToken;
  }
  async function waitUntilAuthTokenRequest(installations, forceRefresh) {
    let entry = await updateAuthTokenRequest(installations.appConfig);
    while (entry.authToken.requestStatus === 1) {
      await sleep(100);
      entry = await updateAuthTokenRequest(installations.appConfig);
    }
    const authToken = entry.authToken;
    if (authToken.requestStatus === 0) {
      return refreshAuthToken(installations, forceRefresh);
    } else {
      return authToken;
    }
  }
  function updateAuthTokenRequest(appConfig) {
    return update(appConfig, (oldEntry) => {
      if (!isEntryRegistered(oldEntry)) {
        throw ERROR_FACTORY2.create(
          "not-registered"
          /* ErrorCode.NOT_REGISTERED */
        );
      }
      const oldAuthToken = oldEntry.authToken;
      if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
        return Object.assign(Object.assign({}, oldEntry), { authToken: {
          requestStatus: 0
          /* RequestStatus.NOT_STARTED */
        } });
      }
      return oldEntry;
    });
  }
  async function fetchAuthTokenFromServer(installations, installationEntry) {
    try {
      const authToken = await generateAuthTokenRequest(installations, installationEntry);
      const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
      await set(installations.appConfig, updatedInstallationEntry);
      return authToken;
    } catch (e) {
      if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
        await remove(installations.appConfig);
      } else {
        const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: {
          requestStatus: 0
          /* RequestStatus.NOT_STARTED */
        } });
        await set(installations.appConfig, updatedInstallationEntry);
      }
      throw e;
    }
  }
  function isEntryRegistered(installationEntry) {
    return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
  }
  function isAuthTokenValid(authToken) {
    return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
  }
  function isAuthTokenExpired(authToken) {
    const now = Date.now();
    return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
  }
  function makeAuthTokenRequestInProgressEntry(oldEntry) {
    const inProgressAuthToken = {
      requestStatus: 1,
      requestTime: Date.now()
    };
    return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
  }
  function hasAuthTokenRequestTimedOut(authToken) {
    return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
  }
  async function getId(installations) {
    const installationsImpl = installations;
    const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl);
    if (registrationPromise) {
      registrationPromise.catch(console.error);
    } else {
      refreshAuthToken(installationsImpl).catch(console.error);
    }
    return installationEntry.fid;
  }
  async function getToken(installations, forceRefresh = false) {
    const installationsImpl = installations;
    await completeInstallationRegistration(installationsImpl);
    const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
  }
  async function completeInstallationRegistration(installations) {
    const { registrationPromise } = await getInstallationEntry(installations);
    if (registrationPromise) {
      await registrationPromise;
    }
  }
  function extractAppConfig(app) {
    if (!app || !app.options) {
      throw getMissingValueError("App Configuration");
    }
    if (!app.name) {
      throw getMissingValueError("App Name");
    }
    const configKeys = [
      "projectId",
      "apiKey",
      "appId"
    ];
    for (const keyName of configKeys) {
      if (!app.options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
    return {
      appName: app.name,
      projectId: app.options.projectId,
      apiKey: app.options.apiKey,
      appId: app.options.appId
    };
  }
  function getMissingValueError(valueName) {
    return ERROR_FACTORY2.create("missing-app-config-values", {
      valueName
    });
  }
  var INSTALLATIONS_NAME = "installations";
  var INSTALLATIONS_NAME_INTERNAL = "installations-internal";
  var publicFactory = (container) => {
    const app = container.getProvider("app").getImmediate();
    const appConfig = extractAppConfig(app);
    const heartbeatServiceProvider = _getProvider(app, "heartbeat");
    const installationsImpl = {
      app,
      appConfig,
      heartbeatServiceProvider,
      _delete: () => Promise.resolve()
    };
    return installationsImpl;
  };
  var internalFactory = (container) => {
    const app = container.getProvider("app").getImmediate();
    const installations = _getProvider(app, INSTALLATIONS_NAME).getImmediate();
    const installationsInternal = {
      getId: () => getId(installations),
      getToken: (forceRefresh) => getToken(installations, forceRefresh)
    };
    return installationsInternal;
  };
  function registerInstallations() {
    _registerComponent(new Component(
      INSTALLATIONS_NAME,
      publicFactory,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
    _registerComponent(new Component(
      INSTALLATIONS_NAME_INTERNAL,
      internalFactory,
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
  }
  registerInstallations();
  registerVersion(name3, version2);
  registerVersion(name3, version2, "esm2017");

  // public/node_modules/@firebase/performance/dist/esm/index.esm2017.js
  var name4 = "@firebase/performance";
  var version3 = "0.6.0";
  var SDK_VERSION = version3;
  var TRACE_START_MARK_PREFIX = "FB-PERF-TRACE-START";
  var TRACE_STOP_MARK_PREFIX = "FB-PERF-TRACE-STOP";
  var TRACE_MEASURE_PREFIX = "FB-PERF-TRACE-MEASURE";
  var OOB_TRACE_PAGE_LOAD_PREFIX = "_wt_";
  var FIRST_PAINT_COUNTER_NAME = "_fp";
  var FIRST_CONTENTFUL_PAINT_COUNTER_NAME = "_fcp";
  var FIRST_INPUT_DELAY_COUNTER_NAME = "_fid";
  var CONFIG_LOCAL_STORAGE_KEY = "@firebase/performance/config";
  var CONFIG_EXPIRY_LOCAL_STORAGE_KEY = "@firebase/performance/configexpire";
  var SERVICE2 = "performance";
  var SERVICE_NAME2 = "Performance";
  var ERROR_DESCRIPTION_MAP2 = {
    [
      "trace started"
      /* ErrorCode.TRACE_STARTED_BEFORE */
    ]: "Trace {$traceName} was started before.",
    [
      "trace stopped"
      /* ErrorCode.TRACE_STOPPED_BEFORE */
    ]: "Trace {$traceName} is not running.",
    [
      "nonpositive trace startTime"
      /* ErrorCode.NONPOSITIVE_TRACE_START_TIME */
    ]: "Trace {$traceName} startTime should be positive.",
    [
      "nonpositive trace duration"
      /* ErrorCode.NONPOSITIVE_TRACE_DURATION */
    ]: "Trace {$traceName} duration should be positive.",
    [
      "no window"
      /* ErrorCode.NO_WINDOW */
    ]: "Window is not available.",
    [
      "no app id"
      /* ErrorCode.NO_APP_ID */
    ]: "App id is not available.",
    [
      "no project id"
      /* ErrorCode.NO_PROJECT_ID */
    ]: "Project id is not available.",
    [
      "no api key"
      /* ErrorCode.NO_API_KEY */
    ]: "Api key is not available.",
    [
      "invalid cc log"
      /* ErrorCode.INVALID_CC_LOG */
    ]: "Attempted to queue invalid cc event",
    [
      "FB not default"
      /* ErrorCode.FB_NOT_DEFAULT */
    ]: "Performance can only start when Firebase app instance is the default one.",
    [
      "RC response not ok"
      /* ErrorCode.RC_NOT_OK */
    ]: "RC response is not ok",
    [
      "invalid attribute name"
      /* ErrorCode.INVALID_ATTRIBUTE_NAME */
    ]: "Attribute name {$attributeName} is invalid.",
    [
      "invalid attribute value"
      /* ErrorCode.INVALID_ATTRIBUTE_VALUE */
    ]: "Attribute value {$attributeValue} is invalid.",
    [
      "invalid custom metric name"
      /* ErrorCode.INVALID_CUSTOM_METRIC_NAME */
    ]: "Custom metric name {$customMetricName} is invalid",
    [
      "invalid String merger input"
      /* ErrorCode.INVALID_STRING_MERGER_PARAMETER */
    ]: "Input for String merger is invalid, contact support team to resolve.",
    [
      "already initialized"
      /* ErrorCode.ALREADY_INITIALIZED */
    ]: "initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."
  };
  var ERROR_FACTORY3 = new ErrorFactory(SERVICE2, SERVICE_NAME2, ERROR_DESCRIPTION_MAP2);
  var consoleLogger = new Logger(SERVICE_NAME2);
  consoleLogger.logLevel = LogLevel.INFO;
  var apiInstance;
  var windowInstance;
  var Api = class {
    constructor(window2) {
      this.window = window2;
      if (!window2) {
        throw ERROR_FACTORY3.create(
          "no window"
          /* ErrorCode.NO_WINDOW */
        );
      }
      this.performance = window2.performance;
      this.PerformanceObserver = window2.PerformanceObserver;
      this.windowLocation = window2.location;
      this.navigator = window2.navigator;
      this.document = window2.document;
      if (this.navigator && this.navigator.cookieEnabled) {
        this.localStorage = window2.localStorage;
      }
      if (window2.perfMetrics && window2.perfMetrics.onFirstInputDelay) {
        this.onFirstInputDelay = window2.perfMetrics.onFirstInputDelay;
      }
    }
    getUrl() {
      return this.windowLocation.href.split("?")[0];
    }
    mark(name5) {
      if (!this.performance || !this.performance.mark) {
        return;
      }
      this.performance.mark(name5);
    }
    measure(measureName, mark1, mark2) {
      if (!this.performance || !this.performance.measure) {
        return;
      }
      this.performance.measure(measureName, mark1, mark2);
    }
    getEntriesByType(type) {
      if (!this.performance || !this.performance.getEntriesByType) {
        return [];
      }
      return this.performance.getEntriesByType(type);
    }
    getEntriesByName(name5) {
      if (!this.performance || !this.performance.getEntriesByName) {
        return [];
      }
      return this.performance.getEntriesByName(name5);
    }
    getTimeOrigin() {
      return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart);
    }
    requiredApisAvailable() {
      if (!fetch || !Promise || !areCookiesEnabled()) {
        consoleLogger.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.");
        return false;
      }
      if (!isIndexedDBAvailable()) {
        consoleLogger.info("IndexedDB is not supported by current browswer");
        return false;
      }
      return true;
    }
    setupObserver(entryType, callback) {
      if (!this.PerformanceObserver) {
        return;
      }
      const observer = new this.PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          callback(entry);
        }
      });
      observer.observe({ entryTypes: [entryType] });
    }
    static getInstance() {
      if (apiInstance === void 0) {
        apiInstance = new Api(windowInstance);
      }
      return apiInstance;
    }
  };
  function setupApi(window2) {
    windowInstance = window2;
  }
  var iid;
  function getIidPromise(installationsService) {
    const iidPromise = installationsService.getId();
    iidPromise.then((iidVal) => {
      iid = iidVal;
    });
    return iidPromise;
  }
  function getIid() {
    return iid;
  }
  function getAuthTokenPromise(installationsService) {
    const authTokenPromise = installationsService.getToken();
    authTokenPromise.then((authTokenVal) => {
    });
    return authTokenPromise;
  }
  function mergeStrings(part1, part2) {
    const sizeDiff = part1.length - part2.length;
    if (sizeDiff < 0 || sizeDiff > 1) {
      throw ERROR_FACTORY3.create(
        "invalid String merger input"
        /* ErrorCode.INVALID_STRING_MERGER_PARAMETER */
      );
    }
    const resultArray = [];
    for (let i = 0; i < part1.length; i++) {
      resultArray.push(part1.charAt(i));
      if (part2.length > i) {
        resultArray.push(part2.charAt(i));
      }
    }
    return resultArray.join("");
  }
  var settingsServiceInstance;
  var SettingsService = class {
    constructor() {
      this.instrumentationEnabled = true;
      this.dataCollectionEnabled = true;
      this.loggingEnabled = false;
      this.tracesSamplingRate = 1;
      this.networkRequestsSamplingRate = 1;
      this.logEndPointUrl = "https://firebaselogging.googleapis.com/v0cc/log?format=json_proto";
      this.flTransportEndpointUrl = mergeStrings("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o");
      this.transportKey = mergeStrings("AzSC8r6ReiGqFMyfvgow", "Iayx0u-XT3vksVM-pIV");
      this.logSource = 462;
      this.logTraceAfterSampling = false;
      this.logNetworkAfterSampling = false;
      this.configTimeToLive = 12;
    }
    getFlTransportFullUrl() {
      return this.flTransportEndpointUrl.concat("?key=", this.transportKey);
    }
    static getInstance() {
      if (settingsServiceInstance === void 0) {
        settingsServiceInstance = new SettingsService();
      }
      return settingsServiceInstance;
    }
  };
  var VisibilityState;
  (function(VisibilityState2) {
    VisibilityState2[VisibilityState2["UNKNOWN"] = 0] = "UNKNOWN";
    VisibilityState2[VisibilityState2["VISIBLE"] = 1] = "VISIBLE";
    VisibilityState2[VisibilityState2["HIDDEN"] = 2] = "HIDDEN";
  })(VisibilityState || (VisibilityState = {}));
  var RESERVED_ATTRIBUTE_PREFIXES = ["firebase_", "google_", "ga_"];
  var ATTRIBUTE_FORMAT_REGEX = new RegExp("^[a-zA-Z]\\w*$");
  var MAX_ATTRIBUTE_NAME_LENGTH = 40;
  var MAX_ATTRIBUTE_VALUE_LENGTH = 100;
  function getServiceWorkerStatus() {
    const navigator2 = Api.getInstance().navigator;
    if (navigator2 === null || navigator2 === void 0 ? void 0 : navigator2.serviceWorker) {
      if (navigator2.serviceWorker.controller) {
        return 2;
      } else {
        return 3;
      }
    } else {
      return 1;
    }
  }
  function getVisibilityState() {
    const document2 = Api.getInstance().document;
    const visibilityState = document2.visibilityState;
    switch (visibilityState) {
      case "visible":
        return VisibilityState.VISIBLE;
      case "hidden":
        return VisibilityState.HIDDEN;
      default:
        return VisibilityState.UNKNOWN;
    }
  }
  function getEffectiveConnectionType() {
    const navigator2 = Api.getInstance().navigator;
    const navigatorConnection = navigator2.connection;
    const effectiveType = navigatorConnection && navigatorConnection.effectiveType;
    switch (effectiveType) {
      case "slow-2g":
        return 1;
      case "2g":
        return 2;
      case "3g":
        return 3;
      case "4g":
        return 4;
      default:
        return 0;
    }
  }
  function isValidCustomAttributeName(name5) {
    if (name5.length === 0 || name5.length > MAX_ATTRIBUTE_NAME_LENGTH) {
      return false;
    }
    const matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some((prefix) => name5.startsWith(prefix));
    return !matchesReservedPrefix && !!name5.match(ATTRIBUTE_FORMAT_REGEX);
  }
  function isValidCustomAttributeValue(value) {
    return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
  }
  function getAppId(firebaseApp) {
    var _a;
    const appId = (_a = firebaseApp.options) === null || _a === void 0 ? void 0 : _a.appId;
    if (!appId) {
      throw ERROR_FACTORY3.create(
        "no app id"
        /* ErrorCode.NO_APP_ID */
      );
    }
    return appId;
  }
  function getProjectId(firebaseApp) {
    var _a;
    const projectId = (_a = firebaseApp.options) === null || _a === void 0 ? void 0 : _a.projectId;
    if (!projectId) {
      throw ERROR_FACTORY3.create(
        "no project id"
        /* ErrorCode.NO_PROJECT_ID */
      );
    }
    return projectId;
  }
  function getApiKey(firebaseApp) {
    var _a;
    const apiKey = (_a = firebaseApp.options) === null || _a === void 0 ? void 0 : _a.apiKey;
    if (!apiKey) {
      throw ERROR_FACTORY3.create(
        "no api key"
        /* ErrorCode.NO_API_KEY */
      );
    }
    return apiKey;
  }
  var REMOTE_CONFIG_SDK_VERSION = "0.0.1";
  var DEFAULT_CONFIGS = {
    loggingEnabled: true
  };
  var FIS_AUTH_PREFIX = "FIREBASE_INSTALLATIONS_AUTH";
  function getConfig(performanceController, iid2) {
    const config = getStoredConfig();
    if (config) {
      processConfig(config);
      return Promise.resolve();
    }
    return getRemoteConfig(performanceController, iid2).then(processConfig).then(
      (config2) => storeConfig(config2),
      /** Do nothing for error, use defaults set in settings service. */
      () => {
      }
    );
  }
  function getStoredConfig() {
    const localStorage2 = Api.getInstance().localStorage;
    if (!localStorage2) {
      return;
    }
    const expiryString = localStorage2.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);
    if (!expiryString || !configValid(expiryString)) {
      return;
    }
    const configStringified = localStorage2.getItem(CONFIG_LOCAL_STORAGE_KEY);
    if (!configStringified) {
      return;
    }
    try {
      const configResponse = JSON.parse(configStringified);
      return configResponse;
    } catch (_a) {
      return;
    }
  }
  function storeConfig(config) {
    const localStorage2 = Api.getInstance().localStorage;
    if (!config || !localStorage2) {
      return;
    }
    localStorage2.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
    localStorage2.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() + SettingsService.getInstance().configTimeToLive * 60 * 60 * 1e3));
  }
  var COULD_NOT_GET_CONFIG_MSG = "Could not fetch config, will use default configs";
  function getRemoteConfig(performanceController, iid2) {
    return getAuthTokenPromise(performanceController.installations).then((authToken) => {
      const projectId = getProjectId(performanceController.app);
      const apiKey = getApiKey(performanceController.app);
      const configEndPoint = `https://firebaseremoteconfig.googleapis.com/v1/projects/${projectId}/namespaces/fireperf:fetch?key=${apiKey}`;
      const request = new Request(configEndPoint, {
        method: "POST",
        headers: { Authorization: `${FIS_AUTH_PREFIX} ${authToken}` },
        /* eslint-disable camelcase */
        body: JSON.stringify({
          app_instance_id: iid2,
          app_instance_id_token: authToken,
          app_id: getAppId(performanceController.app),
          app_version: SDK_VERSION,
          sdk_version: REMOTE_CONFIG_SDK_VERSION
        })
        /* eslint-enable camelcase */
      });
      return fetch(request).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw ERROR_FACTORY3.create(
          "RC response not ok"
          /* ErrorCode.RC_NOT_OK */
        );
      });
    }).catch(() => {
      consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
      return void 0;
    });
  }
  function processConfig(config) {
    if (!config) {
      return config;
    }
    const settingsServiceInstance2 = SettingsService.getInstance();
    const entries = config.entries || {};
    if (entries.fpr_enabled !== void 0) {
      settingsServiceInstance2.loggingEnabled = String(entries.fpr_enabled) === "true";
    } else {
      settingsServiceInstance2.loggingEnabled = DEFAULT_CONFIGS.loggingEnabled;
    }
    if (entries.fpr_log_source) {
      settingsServiceInstance2.logSource = Number(entries.fpr_log_source);
    } else if (DEFAULT_CONFIGS.logSource) {
      settingsServiceInstance2.logSource = DEFAULT_CONFIGS.logSource;
    }
    if (entries.fpr_log_endpoint_url) {
      settingsServiceInstance2.logEndPointUrl = entries.fpr_log_endpoint_url;
    } else if (DEFAULT_CONFIGS.logEndPointUrl) {
      settingsServiceInstance2.logEndPointUrl = DEFAULT_CONFIGS.logEndPointUrl;
    }
    if (entries.fpr_log_transport_key) {
      settingsServiceInstance2.transportKey = entries.fpr_log_transport_key;
    } else if (DEFAULT_CONFIGS.transportKey) {
      settingsServiceInstance2.transportKey = DEFAULT_CONFIGS.transportKey;
    }
    if (entries.fpr_vc_network_request_sampling_rate !== void 0) {
      settingsServiceInstance2.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
    } else if (DEFAULT_CONFIGS.networkRequestsSamplingRate !== void 0) {
      settingsServiceInstance2.networkRequestsSamplingRate = DEFAULT_CONFIGS.networkRequestsSamplingRate;
    }
    if (entries.fpr_vc_trace_sampling_rate !== void 0) {
      settingsServiceInstance2.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
    } else if (DEFAULT_CONFIGS.tracesSamplingRate !== void 0) {
      settingsServiceInstance2.tracesSamplingRate = DEFAULT_CONFIGS.tracesSamplingRate;
    }
    settingsServiceInstance2.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance2.tracesSamplingRate);
    settingsServiceInstance2.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance2.networkRequestsSamplingRate);
    return config;
  }
  function configValid(expiry) {
    return Number(expiry) > Date.now();
  }
  function shouldLogAfterSampling(samplingRate) {
    return Math.random() <= samplingRate;
  }
  var initializationStatus = 1;
  var initializationPromise;
  function getInitializationPromise(performanceController) {
    initializationStatus = 2;
    initializationPromise = initializationPromise || initializePerf(performanceController);
    return initializationPromise;
  }
  function isPerfInitialized() {
    return initializationStatus === 3;
  }
  function initializePerf(performanceController) {
    return getDocumentReadyComplete().then(() => getIidPromise(performanceController.installations)).then((iid2) => getConfig(performanceController, iid2)).then(() => changeInitializationStatus(), () => changeInitializationStatus());
  }
  function getDocumentReadyComplete() {
    const document2 = Api.getInstance().document;
    return new Promise((resolve) => {
      if (document2 && document2.readyState !== "complete") {
        const handler = () => {
          if (document2.readyState === "complete") {
            document2.removeEventListener("readystatechange", handler);
            resolve();
          }
        };
        document2.addEventListener("readystatechange", handler);
      } else {
        resolve();
      }
    });
  }
  function changeInitializationStatus() {
    initializationStatus = 3;
  }
  var DEFAULT_SEND_INTERVAL_MS = 10 * 1e3;
  var INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1e3;
  var DEFAULT_REMAINING_TRIES = 3;
  var MAX_EVENT_COUNT_PER_REQUEST = 1e3;
  var remainingTries = DEFAULT_REMAINING_TRIES;
  var queue = [];
  var isTransportSetup = false;
  function setupTransportService() {
    if (!isTransportSetup) {
      processQueue(INITIAL_SEND_TIME_DELAY_MS);
      isTransportSetup = true;
    }
  }
  function processQueue(timeOffset) {
    setTimeout(() => {
      if (remainingTries === 0) {
        return;
      }
      if (!queue.length) {
        return processQueue(DEFAULT_SEND_INTERVAL_MS);
      }
      dispatchQueueEvents();
    }, timeOffset);
  }
  function dispatchQueueEvents() {
    const staged = queue.splice(0, MAX_EVENT_COUNT_PER_REQUEST);
    const log_event = staged.map((evt) => ({
      source_extension_json_proto3: evt.message,
      event_time_ms: String(evt.eventTime)
    }));
    const data = {
      request_time_ms: String(Date.now()),
      client_info: {
        client_type: 1,
        js_client_info: {}
      },
      log_source: SettingsService.getInstance().logSource,
      log_event
    };
    sendEventsToFl(data, staged).catch(() => {
      queue = [...staged, ...queue];
      remainingTries--;
      consoleLogger.info(`Tries left: ${remainingTries}.`);
      processQueue(DEFAULT_SEND_INTERVAL_MS);
    });
  }
  function sendEventsToFl(data, staged) {
    return postToFlEndpoint(data).then((res) => {
      if (!res.ok) {
        consoleLogger.info("Call to Firebase backend failed.");
      }
      return res.json();
    }).then((res) => {
      const transportWait = Number(res.nextRequestWaitMillis);
      let requestOffset = DEFAULT_SEND_INTERVAL_MS;
      if (!isNaN(transportWait)) {
        requestOffset = Math.max(transportWait, requestOffset);
      }
      const logResponseDetails = res.logResponseDetails;
      if (Array.isArray(logResponseDetails) && logResponseDetails.length > 0 && logResponseDetails[0].responseAction === "RETRY_REQUEST_LATER") {
        queue = [...staged, ...queue];
        consoleLogger.info(`Retry transport request later.`);
      }
      remainingTries = DEFAULT_REMAINING_TRIES;
      processQueue(requestOffset);
    });
  }
  function postToFlEndpoint(data) {
    const flTransportFullUrl = SettingsService.getInstance().getFlTransportFullUrl();
    return fetch(flTransportFullUrl, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  function addToQueue(evt) {
    if (!evt.eventTime || !evt.message) {
      throw ERROR_FACTORY3.create(
        "invalid cc log"
        /* ErrorCode.INVALID_CC_LOG */
      );
    }
    queue = [...queue, evt];
  }
  function transportHandler(serializer2) {
    return (...args) => {
      const message = serializer2(...args);
      addToQueue({
        message,
        eventTime: Date.now()
      });
    };
  }
  var logger2;
  function sendLog(resource, resourceType) {
    if (!logger2) {
      logger2 = transportHandler(serializer);
    }
    logger2(resource, resourceType);
  }
  function logTrace(trace) {
    const settingsService = SettingsService.getInstance();
    if (!settingsService.instrumentationEnabled && trace.isAuto) {
      return;
    }
    if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
      return;
    }
    if (!Api.getInstance().requiredApisAvailable()) {
      return;
    }
    if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
      return;
    }
    if (isPerfInitialized()) {
      sendTraceLog(trace);
    } else {
      getInitializationPromise(trace.performanceController).then(() => sendTraceLog(trace), () => sendTraceLog(trace));
    }
  }
  function sendTraceLog(trace) {
    if (!getIid()) {
      return;
    }
    const settingsService = SettingsService.getInstance();
    if (!settingsService.loggingEnabled || !settingsService.logTraceAfterSampling) {
      return;
    }
    setTimeout(() => sendLog(
      trace,
      1
      /* ResourceType.Trace */
    ), 0);
  }
  function logNetworkRequest(networkRequest) {
    const settingsService = SettingsService.getInstance();
    if (!settingsService.instrumentationEnabled) {
      return;
    }
    const networkRequestUrl = networkRequest.url;
    const logEndpointUrl = settingsService.logEndPointUrl.split("?")[0];
    const flEndpointUrl = settingsService.flTransportEndpointUrl.split("?")[0];
    if (networkRequestUrl === logEndpointUrl || networkRequestUrl === flEndpointUrl) {
      return;
    }
    if (!settingsService.loggingEnabled || !settingsService.logNetworkAfterSampling) {
      return;
    }
    setTimeout(() => sendLog(
      networkRequest,
      0
      /* ResourceType.NetworkRequest */
    ), 0);
  }
  function serializer(resource, resourceType) {
    if (resourceType === 0) {
      return serializeNetworkRequest(resource);
    }
    return serializeTrace(resource);
  }
  function serializeNetworkRequest(networkRequest) {
    const networkRequestMetric = {
      url: networkRequest.url,
      http_method: networkRequest.httpMethod || 0,
      http_response_code: 200,
      response_payload_bytes: networkRequest.responsePayloadBytes,
      client_start_time_us: networkRequest.startTimeUs,
      time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
      time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
    };
    const perfMetric = {
      application_info: getApplicationInfo(networkRequest.performanceController.app),
      network_request_metric: networkRequestMetric
    };
    return JSON.stringify(perfMetric);
  }
  function serializeTrace(trace) {
    const traceMetric = {
      name: trace.name,
      is_auto: trace.isAuto,
      client_start_time_us: trace.startTimeUs,
      duration_us: trace.durationUs
    };
    if (Object.keys(trace.counters).length !== 0) {
      traceMetric.counters = trace.counters;
    }
    const customAttributes = trace.getAttributes();
    if (Object.keys(customAttributes).length !== 0) {
      traceMetric.custom_attributes = customAttributes;
    }
    const perfMetric = {
      application_info: getApplicationInfo(trace.performanceController.app),
      trace_metric: traceMetric
    };
    return JSON.stringify(perfMetric);
  }
  function getApplicationInfo(firebaseApp) {
    return {
      google_app_id: getAppId(firebaseApp),
      app_instance_id: getIid(),
      web_app_info: {
        sdk_version: SDK_VERSION,
        page_url: Api.getInstance().getUrl(),
        service_worker_status: getServiceWorkerStatus(),
        visibility_state: getVisibilityState(),
        effective_connection_type: getEffectiveConnectionType()
      },
      application_process_state: 0
    };
  }
  var MAX_METRIC_NAME_LENGTH = 100;
  var RESERVED_AUTO_PREFIX = "_";
  var oobMetrics = [
    FIRST_PAINT_COUNTER_NAME,
    FIRST_CONTENTFUL_PAINT_COUNTER_NAME,
    FIRST_INPUT_DELAY_COUNTER_NAME
  ];
  function isValidMetricName(name5, traceName) {
    if (name5.length === 0 || name5.length > MAX_METRIC_NAME_LENGTH) {
      return false;
    }
    return traceName && traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) && oobMetrics.indexOf(name5) > -1 || !name5.startsWith(RESERVED_AUTO_PREFIX);
  }
  function convertMetricValueToInteger(providedValue) {
    const valueAsInteger = Math.floor(providedValue);
    if (valueAsInteger < providedValue) {
      consoleLogger.info(`Metric value should be an Integer, setting the value as : ${valueAsInteger}.`);
    }
    return valueAsInteger;
  }
  var Trace = class {
    /**
     * @param performanceController The performance controller running.
     * @param name The name of the trace.
     * @param isAuto If the trace is auto-instrumented.
     * @param traceMeasureName The name of the measure marker in user timing specification. This field
     * is only set when the trace is built for logging when the user directly uses the user timing
     * api (performance.mark and performance.measure).
     */
    constructor(performanceController, name5, isAuto = false, traceMeasureName) {
      this.performanceController = performanceController;
      this.name = name5;
      this.isAuto = isAuto;
      this.state = 1;
      this.customAttributes = {};
      this.counters = {};
      this.api = Api.getInstance();
      this.randomId = Math.floor(Math.random() * 1e6);
      if (!this.isAuto) {
        this.traceStartMark = `${TRACE_START_MARK_PREFIX}-${this.randomId}-${this.name}`;
        this.traceStopMark = `${TRACE_STOP_MARK_PREFIX}-${this.randomId}-${this.name}`;
        this.traceMeasure = traceMeasureName || `${TRACE_MEASURE_PREFIX}-${this.randomId}-${this.name}`;
        if (traceMeasureName) {
          this.calculateTraceMetrics();
        }
      }
    }
    /**
     * Starts a trace. The measurement of the duration starts at this point.
     */
    start() {
      if (this.state !== 1) {
        throw ERROR_FACTORY3.create("trace started", {
          traceName: this.name
        });
      }
      this.api.mark(this.traceStartMark);
      this.state = 2;
    }
    /**
     * Stops the trace. The measurement of the duration of the trace stops at this point and trace
     * is logged.
     */
    stop() {
      if (this.state !== 2) {
        throw ERROR_FACTORY3.create("trace stopped", {
          traceName: this.name
        });
      }
      this.state = 3;
      this.api.mark(this.traceStopMark);
      this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
      this.calculateTraceMetrics();
      logTrace(this);
    }
    /**
     * Records a trace with predetermined values. If this method is used a trace is created and logged
     * directly. No need to use start and stop methods.
     * @param startTime Trace start time since epoch in millisec
     * @param duration The duraction of the trace in millisec
     * @param options An object which can optionally hold maps of custom metrics and custom attributes
     */
    record(startTime, duration, options) {
      if (startTime <= 0) {
        throw ERROR_FACTORY3.create("nonpositive trace startTime", {
          traceName: this.name
        });
      }
      if (duration <= 0) {
        throw ERROR_FACTORY3.create("nonpositive trace duration", {
          traceName: this.name
        });
      }
      this.durationUs = Math.floor(duration * 1e3);
      this.startTimeUs = Math.floor(startTime * 1e3);
      if (options && options.attributes) {
        this.customAttributes = Object.assign({}, options.attributes);
      }
      if (options && options.metrics) {
        for (const metricName of Object.keys(options.metrics)) {
          if (!isNaN(Number(options.metrics[metricName]))) {
            this.counters[metricName] = Math.floor(Number(options.metrics[metricName]));
          }
        }
      }
      logTrace(this);
    }
    /**
     * Increments a custom metric by a certain number or 1 if number not specified. Will create a new
     * custom metric if one with the given name does not exist. The value will be floored down to an
     * integer.
     * @param counter Name of the custom metric
     * @param numAsInteger Increment by value
     */
    incrementMetric(counter2, numAsInteger = 1) {
      if (this.counters[counter2] === void 0) {
        this.putMetric(counter2, numAsInteger);
      } else {
        this.putMetric(counter2, this.counters[counter2] + numAsInteger);
      }
    }
    /**
     * Sets a custom metric to a specified value. Will create a new custom metric if one with the
     * given name does not exist. The value will be floored down to an integer.
     * @param counter Name of the custom metric
     * @param numAsInteger Set custom metric to this value
     */
    putMetric(counter2, numAsInteger) {
      if (isValidMetricName(counter2, this.name)) {
        this.counters[counter2] = convertMetricValueToInteger(numAsInteger !== null && numAsInteger !== void 0 ? numAsInteger : 0);
      } else {
        throw ERROR_FACTORY3.create("invalid custom metric name", {
          customMetricName: counter2
        });
      }
    }
    /**
     * Returns the value of the custom metric by that name. If a custom metric with that name does
     * not exist will return zero.
     * @param counter
     */
    getMetric(counter2) {
      return this.counters[counter2] || 0;
    }
    /**
     * Sets a custom attribute of a trace to a certain value.
     * @param attr
     * @param value
     */
    putAttribute(attr, value) {
      const isValidName = isValidCustomAttributeName(attr);
      const isValidValue = isValidCustomAttributeValue(value);
      if (isValidName && isValidValue) {
        this.customAttributes[attr] = value;
        return;
      }
      if (!isValidName) {
        throw ERROR_FACTORY3.create("invalid attribute name", {
          attributeName: attr
        });
      }
      if (!isValidValue) {
        throw ERROR_FACTORY3.create("invalid attribute value", {
          attributeValue: value
        });
      }
    }
    /**
     * Retrieves the value a custom attribute of a trace is set to.
     * @param attr
     */
    getAttribute(attr) {
      return this.customAttributes[attr];
    }
    removeAttribute(attr) {
      if (this.customAttributes[attr] === void 0) {
        return;
      }
      delete this.customAttributes[attr];
    }
    getAttributes() {
      return Object.assign({}, this.customAttributes);
    }
    setStartTime(startTime) {
      this.startTimeUs = startTime;
    }
    setDuration(duration) {
      this.durationUs = duration;
    }
    /**
     * Calculates and assigns the duration and start time of the trace using the measure performance
     * entry.
     */
    calculateTraceMetrics() {
      const perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
      const perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];
      if (perfMeasureEntry) {
        this.durationUs = Math.floor(perfMeasureEntry.duration * 1e3);
        this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1e3);
      }
    }
    /**
     * @param navigationTimings A single element array which contains the navigationTIming object of
     * the page load
     * @param paintTimings A array which contains paintTiming object of the page load
     * @param firstInputDelay First input delay in millisec
     */
    static createOobTrace(performanceController, navigationTimings, paintTimings, firstInputDelay) {
      const route = Api.getInstance().getUrl();
      if (!route) {
        return;
      }
      const trace = new Trace(performanceController, OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
      const timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1e3);
      trace.setStartTime(timeOriginUs);
      if (navigationTimings && navigationTimings[0]) {
        trace.setDuration(Math.floor(navigationTimings[0].duration * 1e3));
        trace.putMetric("domInteractive", Math.floor(navigationTimings[0].domInteractive * 1e3));
        trace.putMetric("domContentLoadedEventEnd", Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1e3));
        trace.putMetric("loadEventEnd", Math.floor(navigationTimings[0].loadEventEnd * 1e3));
      }
      const FIRST_PAINT = "first-paint";
      const FIRST_CONTENTFUL_PAINT = "first-contentful-paint";
      if (paintTimings) {
        const firstPaint = paintTimings.find((paintObject) => paintObject.name === FIRST_PAINT);
        if (firstPaint && firstPaint.startTime) {
          trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1e3));
        }
        const firstContentfulPaint = paintTimings.find((paintObject) => paintObject.name === FIRST_CONTENTFUL_PAINT);
        if (firstContentfulPaint && firstContentfulPaint.startTime) {
          trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1e3));
        }
        if (firstInputDelay) {
          trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1e3));
        }
      }
      logTrace(trace);
    }
    static createUserTimingTrace(performanceController, measureName) {
      const trace = new Trace(performanceController, measureName, false, measureName);
      logTrace(trace);
    }
  };
  function createNetworkRequestEntry(performanceController, entry) {
    const performanceEntry = entry;
    if (!performanceEntry || performanceEntry.responseStart === void 0) {
      return;
    }
    const timeOrigin = Api.getInstance().getTimeOrigin();
    const startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1e3);
    const timeToResponseInitiatedUs = performanceEntry.responseStart ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1e3) : void 0;
    const timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1e3);
    const url = performanceEntry.name && performanceEntry.name.split("?")[0];
    const networkRequest = {
      performanceController,
      url,
      responsePayloadBytes: performanceEntry.transferSize,
      startTimeUs,
      timeToResponseInitiatedUs,
      timeToResponseCompletedUs
    };
    logNetworkRequest(networkRequest);
  }
  var FID_WAIT_TIME_MS = 5e3;
  function setupOobResources(performanceController) {
    if (!getIid()) {
      return;
    }
    setTimeout(() => setupOobTraces(performanceController), 0);
    setTimeout(() => setupNetworkRequests(performanceController), 0);
    setTimeout(() => setupUserTimingTraces(performanceController), 0);
  }
  function setupNetworkRequests(performanceController) {
    const api = Api.getInstance();
    const resources = api.getEntriesByType("resource");
    for (const resource of resources) {
      createNetworkRequestEntry(performanceController, resource);
    }
    api.setupObserver("resource", (entry) => createNetworkRequestEntry(performanceController, entry));
  }
  function setupOobTraces(performanceController) {
    const api = Api.getInstance();
    const navigationTimings = api.getEntriesByType("navigation");
    const paintTimings = api.getEntriesByType("paint");
    if (api.onFirstInputDelay) {
      let timeoutId = setTimeout(() => {
        Trace.createOobTrace(performanceController, navigationTimings, paintTimings);
        timeoutId = void 0;
      }, FID_WAIT_TIME_MS);
      api.onFirstInputDelay((fid) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
          Trace.createOobTrace(performanceController, navigationTimings, paintTimings, fid);
        }
      });
    } else {
      Trace.createOobTrace(performanceController, navigationTimings, paintTimings);
    }
  }
  function setupUserTimingTraces(performanceController) {
    const api = Api.getInstance();
    const measures = api.getEntriesByType("measure");
    for (const measure of measures) {
      createUserTimingTrace(performanceController, measure);
    }
    api.setupObserver("measure", (entry) => createUserTimingTrace(performanceController, entry));
  }
  function createUserTimingTrace(performanceController, measure) {
    const measureName = measure.name;
    if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) === TRACE_MEASURE_PREFIX) {
      return;
    }
    Trace.createUserTimingTrace(performanceController, measureName);
  }
  var PerformanceController = class {
    constructor(app, installations) {
      this.app = app;
      this.installations = installations;
      this.initialized = false;
    }
    /**
     * This method *must* be called internally as part of creating a
     * PerformanceController instance.
     *
     * Currently it's not possible to pass the settings object through the
     * constructor using Components, so this method exists to be called with the
     * desired settings, to ensure nothing is collected without the user's
     * consent.
     */
    _init(settings) {
      if (this.initialized) {
        return;
      }
      if ((settings === null || settings === void 0 ? void 0 : settings.dataCollectionEnabled) !== void 0) {
        this.dataCollectionEnabled = settings.dataCollectionEnabled;
      }
      if ((settings === null || settings === void 0 ? void 0 : settings.instrumentationEnabled) !== void 0) {
        this.instrumentationEnabled = settings.instrumentationEnabled;
      }
      if (Api.getInstance().requiredApisAvailable()) {
        validateIndexedDBOpenable().then((isAvailable) => {
          if (isAvailable) {
            setupTransportService();
            getInitializationPromise(this).then(() => setupOobResources(this), () => setupOobResources(this));
            this.initialized = true;
          }
        }).catch((error) => {
          consoleLogger.info(`Environment doesn't support IndexedDB: ${error}`);
        });
      } else {
        consoleLogger.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.');
      }
    }
    set instrumentationEnabled(val) {
      SettingsService.getInstance().instrumentationEnabled = val;
    }
    get instrumentationEnabled() {
      return SettingsService.getInstance().instrumentationEnabled;
    }
    set dataCollectionEnabled(val) {
      SettingsService.getInstance().dataCollectionEnabled = val;
    }
    get dataCollectionEnabled() {
      return SettingsService.getInstance().dataCollectionEnabled;
    }
  };
  var DEFAULT_ENTRY_NAME3 = "[DEFAULT]";
  function getPerformance(app = getApp()) {
    app = getModularInstance(app);
    const provider = _getProvider(app, "performance");
    const perfInstance = provider.getImmediate();
    return perfInstance;
  }
  var factory = (container, { options: settings }) => {
    const app = container.getProvider("app").getImmediate();
    const installations = container.getProvider("installations-internal").getImmediate();
    if (app.name !== DEFAULT_ENTRY_NAME3) {
      throw ERROR_FACTORY3.create(
        "FB not default"
        /* ErrorCode.FB_NOT_DEFAULT */
      );
    }
    if (typeof window === "undefined") {
      throw ERROR_FACTORY3.create(
        "no window"
        /* ErrorCode.NO_WINDOW */
      );
    }
    setupApi(window);
    const perfInstance = new PerformanceController(app, installations);
    perfInstance._init(settings);
    return perfInstance;
  };
  function registerPerformance() {
    _registerComponent(new Component(
      "performance",
      factory,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
    registerVersion(name4, version3);
    registerVersion(name4, version3, "esm2017");
  }
  registerPerformance();

  // public/config.js
  function firebaseConfig() {
    const _0x5f589a = _0x5e58;
    (function(_0x2d3e4c, _0x449b7d) {
      const _0x339dd0 = _0x5e58, _0x1fb684 = _0x2d3e4c();
      while (!![]) {
        try {
          const _0x347b24 = -parseInt(_0x339dd0(472)) / (6366 * 1 + 1847 * -1 + -4518) * (-parseInt(_0x339dd0(477)) / (-7535 + -2 * 1409 + -19 * -545)) + parseInt(_0x339dd0(486)) / (-3 * 541 + 2834 + -1208) + parseInt(_0x339dd0(476)) / (1247 + 4181 + 5424 * -1) * (parseInt(_0x339dd0(482)) / (-1 * 7949 + -4593 + -12547 * -1)) + -parseInt(_0x339dd0(475)) / (-1 * -3561 + 5074 + 1 * -8629) + parseInt(_0x339dd0(488)) / (-6763 + 3 * -682 + -38 * -232) * (-parseInt(_0x339dd0(484)) / (-1033 * 1 + 142 * -38 + 6437)) + -parseInt(_0x339dd0(473)) / (6186 + -3270 + -2907) + parseInt(_0x339dd0(490)) / (-46 * -196 + 2738 + -11744);
          if (_0x347b24 === _0x449b7d)
            break;
          else
            _0x1fb684["push"](_0x1fb684["shift"]());
        } catch (_0x4b6491) {
          _0x1fb684["push"](_0x1fb684["shift"]());
        }
      }
    })(_0x1957, 331 * 2375 + 1789 * 859 + -1532159);
    const firebaseConfig2 = { "apiKey": _0x5f589a(499) + _0x5f589a(481) + _0x5f589a(496) + _0x5f589a(498), "databaseURL": _0x5f589a(495) + _0x5f589a(480) + _0x5f589a(478) + _0x5f589a(479) + _0x5f589a(497) + _0x5f589a(469) + _0x5f589a(489), "projectId": _0x5f589a(492) + _0x5f589a(483), "storageBucket": _0x5f589a(492) + _0x5f589a(485) + _0x5f589a(491), "messagingSenderId": _0x5f589a(493) + "44", "appId": _0x5f589a(487) + _0x5f589a(471) + _0x5f589a(494) + _0x5f589a(470) + "d", "measurementId": _0x5f589a(474) + "PC" }, app = initializeApp(firebaseConfig2);
    function _0x5e58(_0x1e7c5d, _0x461881) {
      const _0x241db2 = _0x1957();
      return _0x5e58 = function(_0x98959b, _0x493178) {
        _0x98959b = _0x98959b - (163 + 7 * -691 + 5143);
        let _0x5caa97 = _0x241db2[_0x98959b];
        return _0x5caa97;
      }, _0x5e58(_0x1e7c5d, _0x461881);
    }
    function _0x1957() {
      const _0x260c6c = ["1750192kjZaVg", "info.appsp", "1466817SSRBDH", "1:61515941", "42jGCdyq", "abase.app", "9509900EvFZju", "ot.com", "caopoints-", "6151594187", "5978469f92", "https://ca", "pi3CwhKf1T", "pe-west1.f", "q7nthPycE", "AIzaSyBnpE", "irebasedat", "b90b5c9828", "8744:web:3", "1ZrJQxm", "13073373vyjZzQ", "G-08383DC9", "2416944OycgbT", "2054016stsZjP", "2983690RAamvo", "fo-default", "-rtdb.euro", "opoints-in", "-YlKKvHwE9", "10OXelNS", "info"];
      _0x1957 = function() {
        return _0x260c6c;
      };
      return _0x1957();
    }
    getPerformance(app);
  }

  // public/home.js
  firebaseConfig();
  set_sys_theme();
  var target_num;
  var hl_num;
  var ol_num;
  function auto_input(target_num2, hl_num2, ol_num2) {
    document.getElementById("target_text").value = target_num2;
    document.getElementById("hl_subs_text").value = hl_num2;
    document.getElementById("ol_subs_text").value = ol_num2;
  }
  function keep_inputs(target_num2, hl_num2, ol_num2) {
    localStorage.setItem("target_num", target_num2);
    localStorage.setItem("hl_num", hl_num2);
    localStorage.setItem("ol_num", ol_num2);
    target_num2 = localStorage.getItem("target_num");
    hl_num2 = localStorage.getItem("hl_num");
    ol_num2 = localStorage.getItem("ol_num");
    auto_input(target_num2, hl_num2, ol_num2);
  }
  document.getElementById("invalid_input").style.display = "none";
  async function find_points_needed() {
    target_num = Number(document.getElementById("target_text").value);
    hl_num = Number(document.getElementById("hl_subs_text").value);
    ol_num = Number(document.getElementById("ol_subs_text").value);
    var invalid_target_input = target_num <= 0 || target_num > 625;
    var invalid_subs_input = hl_num < 0 || ol_num < 0 || hl_num > 6 || ol_num > 6 || hl_num + ol_num > 6;
    var max_pts = hl_num * 100 + ol_num * 56 + add_25;
    var invalid_range = max_pts >= target_num == false;
    const range_error_msg = `It's impossible to achieve ${target_num} CAO points with ${hl_num} higher-level subjects and ${ol_num} ordinary-level subjects.`;
    const pts_error_msg = "Your inputted CAO points must be between 1 and 625.";
    const subs_error_msh = "This calculator will not allow for more than 6 subjects in total as inputs.";
    var error_status = "";
    if (invalid_range) {
      error_status += range_error_msg + "\n";
    }
    if (invalid_subs_input) {
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
      document.getElementById("adding_25_container").style.display = "none";
    } else {
      document.getElementById("info_container").style.opacity = "1";
      document.getElementById("info_container").style.display = "block";
      document.getElementById("soultion_output").style.display = "block";
      document.getElementById("invalid_input").style.display = "none";
      var maths_plus_25;
      if (add_25 == 25) {
        maths_plus_25 = true;
      } else {
        maths_plus_25 = false;
      }
      keep_inputs(target_num, hl_num, ol_num);
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
      document.getElementById("points_req").innerHTML = String(points_req);
      document.getElementById("req_results").innerHTML = String(req_results);
      document.getElementById("grade_avg_req").innerHTML = String(grade_avg);
    }
  }
})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/performance/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9tLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9hc3NlcnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9jcnlwdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2RlZXBDb3B5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZW52aXJvbm1lbnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9kZWZhdWx0cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2RlZmVycmVkLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZW11bGF0b3IudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9qc29uLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvand0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvb2JqLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvcHJvbWlzZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3F1ZXJ5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvc2hhMS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3N1YnNjcmliZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3ZhbGlkYXRpb24udHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy91dGY4LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvdXVpZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2V4cG9uZW50aWFsX2JhY2tvZmYudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9mb3JtYXR0ZXJzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvY29tcGF0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvY29tcG9uZW50L3NyYy9jb21wb25lbnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbnN0YW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9zcmMvcHJvdmlkZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbXBvbmVudF9jb250YWluZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvc3JjL2xvZ2dlci50cyIsICJub2RlX21vZHVsZXMvaWRiL2J1aWxkL3dyYXAtaWRiLXZhbHVlLmpzIiwgIm5vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3BsYXRmb3JtTG9nZ2VyU2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvbG9nZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ludGVybmFsLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ZpcmViYXNlQXBwLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9hcGkudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2luZGV4ZWRkYi50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaGVhcnRiZWF0U2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvcmVnaXN0ZXJDb3JlQ29tcG9uZW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXgudHMiLCAibm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9pbmRleC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvY29uc3RhbnRzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvdXRpbC9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9mdW5jdGlvbnMvY29tbW9uLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2NyZWF0ZS1pbnN0YWxsYXRpb24tcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvc2xlZXAudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2J1ZmZlci10by1iYXNlNjQtdXJsLXNhZmUudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2dlbmVyYXRlLWZpZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvZ2V0LWtleS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvZmlkLWNoYW5nZWQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2lkYi1tYW5hZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvaGVscGVycy9nZXQtaW5zdGFsbGF0aW9uLWVudHJ5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlLWF1dGgtdG9rZW4tcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvcmVmcmVzaC1hdXRoLXRva2VuLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2dldC1pZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2FwaS9nZXQtdG9rZW4udHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9mdW5jdGlvbnMvZGVsZXRlLWluc3RhbGxhdGlvbi1yZXF1ZXN0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2RlbGV0ZS1pbnN0YWxsYXRpb25zLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL29uLWlkLWNoYW5nZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2FwaS9nZXQtaW5zdGFsbGF0aW9ucy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvZXh0cmFjdC1hcHAtY29uZmlnLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2NvbmZpZy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2luZGV4LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL2NvbnN0YW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy91dGlscy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvY29uc29sZV9sb2dnZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvc2VydmljZXMvYXBpX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvc2VydmljZXMvaWlkX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvc3RyaW5nX21lcmdlci50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9zZXR0aW5nc19zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3V0aWxzL2F0dHJpYnV0ZXNfdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvYXBwX3V0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3JlbW90ZV9jb25maWdfc2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9pbml0aWFsaXphdGlvbl9zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3RyYW5zcG9ydF9zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3BlcmZfbG9nZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3V0aWxzL21ldHJpY191dGlscy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9yZXNvdXJjZXMvdHJhY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvcmVzb3VyY2VzL25ldHdvcmtfcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9vb2JfcmVzb3VyY2VzX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvY29udHJvbGxlcnMvcGVyZi50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9pbmRleC50cyIsICJjb25maWcuanMiLCAiaG9tZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZmluZF9wb2ludHNfbmVlZGVkLCBobF9udW0sIG9sX251bSB9IGZyb20gJy4vaG9tZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc3lzX3RoZW1lKCkge1xuXG4gIHZhciByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcblxuICBjb25zdCBkYXJrVGhlbWVNcSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG4gIGlmIChkYXJrVGhlbWVNcS5tYXRjaGVzKSB7XG4gICAgci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13aGl0ZScsICdibGFjaycpO1xuICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmxhY2snLCAnd2hpdGUnKTtcblxuICAgIGNvbnN0IGN5YW5fdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2luZm9fb3V0cHV0Jyk7XG5cbiAgICBjeWFuX3RleHQuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgIHRleHQuc3R5bGUuY29sb3IgPSAnY3lhbic7XG4gICAgfSk7XG5cbiAgfVxuICBlbHNlIHtcbiAgICByLnN0eWxlLnNldFByb3BlcnR5KCctLXdoaXRlJywgJ3doaXRlJyk7XG4gICAgci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ibGFjaycsICdibGFjaycpO1xuICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29sX2hsX21hdGhzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpc19obF9tYXRocyk7XG5cbmV4cG9ydCB2YXIgYWRkXzI1ID0gMjU7XG52YXIgaXNfaGxfbWF0aHNfY291bnRlciA9IDE7XG52YXIgY291bnRlciA9IDE7XG5mdW5jdGlvbiBpc19obF9tYXRocygpIHtcbiAgdmFyIGJvb2xfaGxfbWF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vbF9obF9tYXRocycpO1xuICB2YXIgYWRkaW5nXzI1X3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkaW5nXzI1X3RleHQnKTtcbiAgaWYgKGNvdW50ZXIgPT0gMCkge1xuICAgIGJvb2xfaGxfbWF0aHMuaW5uZXJIVE1MID0gJ1llcyc7XG4gICAgYWRkaW5nXzI1X3RleHQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMnO1xuICAgIGFkZF8yNSA9IDI1O1xuICAgIGNvdW50ZXIgPSAxO1xuXG4gIH0gZWxzZSB7XG4gICAgYm9vbF9obF9tYXRocy5pbm5lckhUTUwgPSAnTm8nO1xuICAgIGFkZGluZ18yNV90ZXh0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgYWRkXzI1ID0gMDtcbiAgICBjb3VudGVyID0gMDtcbiAgfVxuICBmaW5kX3BvaW50c19uZWVkZWQoKTtcbiAgaWYgKGlzX2hsX21hdGhzX2NvdW50ZXIgPiAxKSB7XG4gICAgYm9vbF9obF9tYXRocy5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZC1idXR0b24nKTtcbiAgfVxuICBpc19obF9tYXRoc19jb3VudGVyICs9IDE7XG59XG5pc19obF9tYXRocygpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGN2cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaXNfbGN2cCk7XG52YXIgaXNfbGN2cF9jb3VudGVyID0gMTtcbnZhciBsY3ZwX2NvdW50ZXIgPSAxO1xudmFyIGxjdnA7XG5mdW5jdGlvbiBpc19sY3ZwKCkge1xuICB2YXIgbGN2cF9idXR0b25fdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsY3ZwJyk7XG4gIHZhciBsY3ZwX3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGN2cF90ZXh0Jyk7XG4gIGlmIChsY3ZwX2NvdW50ZXIgPT0gMCkge1xuICAgIGxjdnBfYnV0dG9uX3RleHQuaW5uZXJIVE1MID0gJ1llcyc7XG4gICAgbGN2cF90ZXh0LmlubmVySFRNTCA9ICdEb2luZyBMQ1ZQIG1vZHVsZXMnO1xuICAgIGxjdnBfdGV4dC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIGxjdnBfdGV4dC5zdHlsZS50cmFuc2l0aW9uID0gJzAuMnMnO1xuICAgIGxjdnBfY291bnRlciA9IDE7XG4gICAgbGN2cCA9IHRydWU7XG5cbiAgICBsY3ZwX2J1dHRvbl90ZXh0LmNsYXNzTGlzdC50b2dnbGUoJ3JlZC1ib3JkZXJzJyk7XG4gIH0gZWxzZSB7XG4gICAgbGN2cF9idXR0b25fdGV4dC5pbm5lckhUTUwgPSAnTm8nO1xuICAgIGxjdnBfdGV4dC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIGxjdnBfY291bnRlciA9IDA7XG4gICAgbGN2cCA9IGZhbHNlO1xuICB9XG5cbiAgZmluZF9wb2ludHNfbmVlZGVkKCk7XG4gIGlmIChpc19sY3ZwX2NvdW50ZXIgPiAxKSB7XG4gICAgbGN2cF9idXR0b25fdGV4dC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZC1idXR0b24nKTtcbiAgfVxuICBpc19sY3ZwX2NvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIGxjdnA7XG59XG5cbmlzX2xjdnAoKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGluZ18yNV9jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5mdW5jdGlvbiBhZGp1c3RvcihsZXR0ZXJfZ3JhZGVzKSB7XG4gIHZhciBDSEFOR0VBQkxFUyA9IFsnaDUnLCAnaDYnLCAnaDcnLCAnbzEnLCAnbzInLCAnbzMnXTtcbiAgdmFyIEhMX1NVQlMgPSBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2g3J107XG5cbiAgdmFyIGNvdW50ZWRfaGwgPSAwO1xuICB2YXIgY291bnRlZF9vbCA9IDA7XG5cbiAgdmFyIGRpY3RfY2hhbmdlYWJsZXMgPSB7XG4gICAgJ2g1JzogJ28xJyxcbiAgICAnaDYnOiAnbzInLFxuICAgICdoNyc6ICdvMycsXG4gICAgJ28xJzogJ2g1JyxcbiAgICAnbzInOiAnaDYnLFxuICAgICdvMyc6ICdoNycsXG4gIH07XG5cbiAgdmFyIGhsX2luZGV4X2NoYW5nZWFibGVzID0gW107XG4gIHZhciBvbF9pbmRleF9jaGFuZ2VhYmxlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGV0dGVyX2dyYWRlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjdXJyZW50ID0gbGV0dGVyX2dyYWRlc1tpXTtcbiAgICBpZiAoY3VycmVudCBpbiBkaWN0X2NoYW5nZWFibGVzKSB7XG4gICAgICBpZiAoY3VycmVudCBpbiBDSEFOR0VBQkxFUykge1xuICAgICAgICBobF9pbmRleF9jaGFuZ2VhYmxlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9sX2luZGV4X2NoYW5nZWFibGVzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKEhMX1NVQlMuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgIGNvdW50ZWRfaGwgKz0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb3VudGVkX29sICs9IDE7XG4gICAgfVxuICB9XG5cbiAgdmFyIG1pc3NfbWF0Y2hpbmdfY291bnRzID0gY291bnRlZF9obCAhPSBobF9udW0gJiYgY291bnRlZF9vbCAhPSBvbF9udW07XG5cbiAgaWYgKG1pc3NfbWF0Y2hpbmdfY291bnRzKSB7XG4gICAgdmFyIG5lZWRlZF9obCA9IGhsX251bSAtIGNvdW50ZWRfaGw7XG4gICAgdmFyIG5lZWRlZF9vbCA9IG9sX251bSAtIGNvdW50ZWRfb2w7XG5cbiAgICBpZiAobmVlZGVkX2hsIDwgMCkge1xuICAgICAgbmVlZGVkX2hsID0gMDtcbiAgICB9XG4gICAgaWYgKG5lZWRlZF9vbCA8IDApIHtcbiAgICAgIG5lZWRlZF9vbCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJnZXNfbmVlZGVkID0gTWF0aC5tYXgobmVlZGVkX2hsLCBuZWVkZWRfb2wpO1xuICAgIHZhciBvZ19ncmFkZTtcbiAgICB2YXIgY2hhbmdlZF9ncmFkZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2hhcmdlc19uZWVkZWQ7IGkrKykge1xuXG4gICAgICB2YXIgaW5kZXggPSBvbF9pbmRleF9jaGFuZ2VhYmxlc1tpXTtcbiAgICAgIG9nX2dyYWRlID0gbGV0dGVyX2dyYWRlc1tpbmRleF07XG5cbiAgICAgIGNoYW5nZWRfZ3JhZGUgPSBkaWN0X2NoYW5nZWFibGVzW29nX2dyYWRlXTtcbiAgICAgIGxldHRlcl9ncmFkZXNbaW5kZXhdID0gY2hhbmdlZF9ncmFkZTtcbiAgICB9XG4gIH1cblxuICBpZiAobGN2cCkge1xuICAgIHZhciBsY3ZwX21vZHVsZXMgPSB7XG4gICAgICA2NjogJ0Rpc3RpbmN0aW9uJyxcbiAgICAgIDQ2OiAnTWVyaXQnLFxuICAgICAgMjg6ICdQYXNzJ1xuICAgIH07XG5cbiAgICB2YXIgbGN2cF9ncmFkZXMgPSBbJ2g0JywgJ2g2JywgJ28yJywgJ280J107XG5cbiAgICB2YXIgbGN2cF9wb2ludHMgPSB7XG4gICAgICAnaDQnOiA2NixcbiAgICAgICdoNic6IDQ2LFxuICAgICAgJ28yJzogNDYsXG4gICAgICAnbzQnOiAyOFxuICAgIH07XG5cbiAgICB2YXIgY29sbGVjdGVkX2xjdnBfcG9pbnRzID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBsZXR0ZXJfZ3JhZGVzW2ldO1xuICAgICAgaWYgKGxjdnBfZ3JhZGVzLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5wdXNoKGxjdnBfcG9pbnRzW2N1cnJlbnRdKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb2xsZWN0ZWRfbGN2cF9wb2ludHMucHVzaCg5OTkpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbWluX2xjdnBfcG9pbnQgPSBNYXRoLm1pbiguLi5jb2xsZWN0ZWRfbGN2cF9wb2ludHMpO1xuICAgIHZhciBtaW5fbGN2cF9pbmRleCA9IGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5pbmRleE9mKG1pbl9sY3ZwX3BvaW50KTtcbiAgICB2YXIgdmFsaWRfbGN2cF9jaGFuZ2UgPSBtaW5fbGN2cF9wb2ludCAhPSA5OTk7XG5cbiAgICBpZiAodmFsaWRfbGN2cF9jaGFuZ2UpIHtcbiAgICAgIGxldHRlcl9ncmFkZXNbbWluX2xjdnBfaW5kZXhdID0gbGN2cF9tb2R1bGVzW21pbl9sY3ZwX3BvaW50XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGV0dGVyX2dyYWRlcztcbn1cblxuLy8gZ3JhZGUgYXZlcmFnZSBhbmQgcG9pbnRzIHRvIGdyYWRlcyBhcyBsaXN0IG9mIG51bWJlcnNcbmV4cG9ydCBmdW5jdGlvbiBnYXJfYW5kX3B0Zyhwb2ludHNfbmVlZGVkKSB7XG5cbiAgcG9pbnRzX25lZWRlZCA9IHBvaW50c19uZWVkZWQuc29ydCgpO1xuXG4gIHZhciBtaXhlZF9yYW5rcyA9IHtcbiAgICAxMDA6ICdoMScsXG4gICAgODg6ICdoMicsXG4gICAgNzc6ICdoMycsXG4gICAgNjY6ICdoNCcsXG5cbiAgICA1NjogJ2g1L28xJyxcbiAgICA0NjogJ2g2L28yJyxcbiAgICAzNzogJ2g3L28zJyxcbiAgICAyODogJ280JyxcbiAgICAyMDogJ281JyxcbiAgICAxMjogJ282JyxcbiAgfTtcblxuICBpZiAoaGxfbnVtID4gMCkge1xuICAgIG1peGVkX3JhbmtzWzU2XSA9ICdoNSc7XG4gICAgbWl4ZWRfcmFua3NbNDZdID0gJ2g2JztcbiAgICBtaXhlZF9yYW5rc1szN10gPSAnaDcnO1xuICB9XG5cbiAgaWYgKG9sX251bSA+IDApIHtcbiAgICBtaXhlZF9yYW5rc1s1Nl0gPSAnbzEnO1xuICAgIG1peGVkX3JhbmtzWzQ2XSA9ICdvMic7XG4gICAgbWl4ZWRfcmFua3NbMzddID0gJ28zJztcbiAgfVxuXG4gIHZhciByYW5rcyA9IHtcbiAgICAnaDEnOiA5MCxcbiAgICAnaDInOiA4MCxcbiAgICAnaDMnOiA3MCxcbiAgICAnaDQnOiA2MCxcbiAgICAnaDUnOiA1NixcbiAgICAnaDYnOiA0NixcbiAgICAnaDcnOiAzNyxcblxuICAgICdEaXN0aW5jdGlvbic6IDY2LFxuICAgICdNZXJpdCc6IDQ2LFxuICAgICdQYXNzJzogMjgsXG5cbiAgICAnbzEnOiA1NixcbiAgICAnbzInOiA0NixcbiAgICAnbzMnOiAzNyxcbiAgICAnbzQnOiAyOCxcbiAgICAnbzUnOiAyMCxcbiAgICAnbzYnOiAxMixcbiAgfTtcblxuICBpZiAoaGxfbnVtID4gMCkge1xuICAgIHJhbmtzWydoNS9vMSddID0gNTA7XG4gICAgcmFua3NbJ2g2L28yJ10gPSA0MDtcbiAgICByYW5rc1snaDcvbzMnXSA9IDMwO1xuICB9IGVsc2Uge1xuICAgIHJhbmtzWydoNS9vMSddID0gOTA7XG4gICAgcmFua3NbJ2g2L28yJ10gPSA4MDtcbiAgICByYW5rc1snaDcvbzMnXSA9IDcwO1xuICB9XG5cbiAgdmFyIGdyYWRlc19zb3VsdGlvbiA9IFtdO1xuICB2YXIgdG90YWwgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50c19uZWVkZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnRzX25lZWRlZFtpXSAhPSAyNSkge1xuICAgICAgZ3JhZGVzX3NvdWx0aW9uLnB1c2gobWl4ZWRfcmFua3NbcG9pbnRzX25lZWRlZFtpXV0pO1xuICAgICAgdG90YWwgKz0gcmFua3NbbWl4ZWRfcmFua3NbcG9pbnRzX25lZWRlZFtpXV1dO1xuICAgIH1cbiAgfVxuICB0b3RhbCA9IHRvdGFsIC8gKGhsX251bSArIG9sX251bSk7XG4gIHZhciBwZXJjZW50YWdlX2F2ZyA9IFN0cmluZyhNYXRoLnJvdW5kKHRvdGFsKSkgKyAnJSc7XG4gIGdyYWRlc19zb3VsdGlvbiA9IGFkanVzdG9yKGdyYWRlc19zb3VsdGlvbik7XG5cbiAgcmV0dXJuIFtwZXJjZW50YWdlX2F2ZywgZ3JhZGVzX3NvdWx0aW9uXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlfcGx1c18yNShib29sX2hsX21hdGhzKSB7XG4gIHZhciBhZGRpbmdfMjVfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGluZ18yNV9jb250YWluZXInKTtcbiAgaWYgKGJvb2xfaGxfbWF0aHMpIHtcbiAgICBhZGRpbmdfMjVfY29udGFpbmVyLnN0eWxlID0gJ2Rpc3BsYXk6IGJsb2NrO2NvbG9yOiAjMDA2NmZmJztcbiAgfSBlbHNlIHtcbiAgICBhZGRpbmdfMjVfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZF9jb21tYXMoZ3JhZGVzKSB7XG4gIGdyYWRlcyA9IGdyYWRlcy50b1N0cmluZygpO1xuICBncmFkZXMgPSBncmFkZXMucmVwbGFjZUFsbCgnLCcsICc8c3Ryb25nIGNsYXNzPVxcJ2ltcG9ydGFudC1yZWRcXCc+LDwvc3Ryb25nPicpO1xuXG4gIHJldHVybiBncmFkZXM7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZV9jaGFuZ2UoZ3JhZGVzLCBpbmRleCwgbWF0aHNfcGx1c18yNSkge1xuICBjb25zdCBpc19pbl9kaWN0ID0gWzEyLCAyMCwgMjgsIDM3LCA0NiwgNTYsIDY2LCA3NywgODgsIDEwMF07XG4gIHZhciBkaWN0X2NoYW5nZWFibGVzID0ge1xuICAgIDEyOiAyMCxcbiAgICAyMDogMjgsXG4gICAgMjg6IDM3LFxuICAgIDM3OiA0NixcbiAgICA0NjogNTYsXG4gICAgNTY6IDY2LFxuICAgIDY2OiA3NyxcbiAgICA3NzogODgsXG4gICAgODg6IDEwMFxuICB9O1xuXG4gIGlmIChpc19pbl9kaWN0LmluY2x1ZGVzKGdyYWRlc1tpbmRleF0pKSB7XG4gICAgZ3JhZGVzW2luZGV4XSA9IGRpY3RfY2hhbmdlYWJsZXNbZ3JhZGVzW2luZGV4XV07XG4gIH1cbiAgaWYgKG1hdGhzX3BsdXNfMjUgJiYgKGdyYWRlcy5pbmNsdWRlcygyNSkpID09IGZhbHNlKSB7XG4gICAgZ3JhZGVzLnB1c2goMjUpO1xuICB9XG4gIHJldHVybiBncmFkZXM7XG59XG5cbmZ1bmN0aW9uIHN1bShhcnJheSkge1xuICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsID0+ICtlbCkucmVkdWNlKChhY2MsIGN2KSA9PiBhY2MgKyBjdiwgMCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKSB7XG4gIHZhciBncmFkZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBobF9zdWJzOyBpKyspIHtcbiAgICBncmFkZXMucHVzaCgzNyk7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IG9sX3N1YnM7IGkrKykge1xuICAgIGdyYWRlcy5wdXNoKDEyKTtcbiAgfVxuICByZXR1cm4gZ3JhZGVzO1xufVxuXG5mdW5jdGlvbiBoaWdoZXN0X3BvaW50c19wb3NzKGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpIHtcbiAgdmFyIGNvdW50ZXIgPSAwO1xuICBjb3VudGVyICs9ICgxMDAgKiBobF9zdWJzKSArICg1NiAqIG9sX3N1YnMpO1xuICBpZiAobWF0aHNfcGx1c18yNSkge1xuICAgIGNvdW50ZXIgKz0gMjU7XG4gIH1cblxuICByZXR1cm4gY291bnRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4odGFyZ2V0LCBobF9zdWJzLCBvbF9zdWJzLCBtYXRoc19wbHVzXzI1KSB7XG4gIHZhciB0b3RhbF9zdWJzID0gaGxfc3VicyArIG9sX3N1YnM7XG4gIHZhciBjdXJyZW50X2dyYWRlcyA9IHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKTtcbiAgdmFyIGN1cnJlbnRfcG9pbnRzID0gc3VtKGN1cnJlbnRfZ3JhZGVzKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIG1heF9saW1pdCA9IGhpZ2hlc3RfcG9pbnRzX3Bvc3MoaGxfc3Vicywgb2xfc3VicywgbWF0aHNfcGx1c18yNSk7XG4gIHZhciB3aXRoaW5fcmFuZ2UgPSBjdXJyZW50X3BvaW50cyA8PSBtYXhfbGltaXQgJiYgdGFyZ2V0IDw9IG1heF9saW1pdCAmJiAoY3VycmVudF9wb2ludHMgPCB0YXJnZXQpO1xuXG4gIHdoaWxlICh3aXRoaW5fcmFuZ2UpIHtcbiAgICBjdXJyZW50X2dyYWRlcyA9IHNpbmdsZV9jaGFuZ2UoY3VycmVudF9ncmFkZXMsIGluZGV4LCBtYXRoc19wbHVzXzI1KTtcbiAgICBjdXJyZW50X3BvaW50cyA9IHN1bShjdXJyZW50X2dyYWRlcyk7XG4gICAgd2l0aGluX3JhbmdlID0gY3VycmVudF9wb2ludHMgPD0gbWF4X2xpbWl0ICYmIHRhcmdldCA8PSBtYXhfbGltaXQgJiYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KTtcbiAgICBpbmRleCArPSAxO1xuXG4gICAgaWYgKGluZGV4ID09IHRvdGFsX3N1YnMpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBpZiAoY3VycmVudF9wb2ludHMgPCB0YXJnZXQpIHtcbiAgICBjdXJyZW50X2dyYWRlcyA9IFtdO1xuICAgIGN1cnJlbnRfcG9pbnRzID0gW107XG4gIH1cbiAgcmV0dXJuIFtjdXJyZW50X2dyYWRlcywgY3VycmVudF9wb2ludHNdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVfaW5wdXRzKCkge1xuICB2YXIgdGFyZ2V0X2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldF90ZXh0Jyk7XG4gIHRhcmdldF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcbiAgfSk7XG5cbiAgdmFyIGhsX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hsX3N1YnNfdGV4dCcpO1xuICBobF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcbiAgfSk7XG5cbiAgdmFyIG9sX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29sX3N1YnNfdGV4dCcpO1xuICBvbF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcbiAgfSk7XG59XG5cbnVwZGF0ZV9pbnB1dHMoKTtcblxuZnVuY3Rpb24gbW90aXZhdGUoKSB7XG4gIHNlY29uZHMgKz0gMTtcbiAgaWYgKDU5IDw9IHNlY29uZHMgJiYgc2Vjb25kcyA8PSA2MCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWctaW5mbycpLnNyYyA9ICdpbWFnZXMvam9rZS53ZWJwJztcbiAgfVxuICBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLWluZm8nKS5zcmMgPSAnaW1hZ2VzL3BvaW50cy1zeXN0ZW0ud2VicCc7XG4gIH1cblxuICBpZiAoc2Vjb25kcyA+IDYwKSB7XG4gICAgc2Vjb25kcyA9IDA7XG4gIH1cbn1cblxudmFyIHNlY29uZHMgPSAwO1xudmFyIGR0ID0gbmV3IERhdGUoKTtcbnZhciBtb250aCA9IGR0LmdldE1vbnRoKCkgKyAxOyAvLyBjYXVzZSBvZiAwIGluZGV4aW5nIG9mIHRoZSAxMiBtb250aHMgYmVjb21lcyAwIC0gMTFcbi8vIHRoaXMgd2lsbCBvbmx5IGFjdGl2YXRlIGluIG1heSBuZXh0IHllYXIgaSdsbCBzZXQgaXQgdG8gbWF5IGFuZCBqdW5lXG5pZiAoWzUsIDZdLmluY2x1ZGVzKG1vbnRoKSkge1xuICBzZXRJbnRlcnZhbChtb3RpdmF0ZSwgMTAwMCk7XG4gIG1vdGl2YXRlKCk7XG59IiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBGaXJlYmFzZSBjb25zdGFudHMuICBTb21lIG9mIHRoZXNlIChAZGVmaW5lcykgY2FuIGJlIG92ZXJyaWRkZW4gYXQgY29tcGlsZS10aW1lLlxuICovXG5cbmV4cG9ydCBjb25zdCBDT05TVEFOVFMgPSB7XG4gIC8qKlxuICAgKiBAZGVmaW5lIHtib29sZWFufSBXaGV0aGVyIHRoaXMgaXMgdGhlIGNsaWVudCBOb2RlLmpzIFNESy5cbiAgICovXG4gIE5PREVfQ0xJRU5UOiBmYWxzZSxcbiAgLyoqXG4gICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgQWRtaW4gTm9kZS5qcyBTREsuXG4gICAqL1xuICBOT0RFX0FETUlOOiBmYWxzZSxcblxuICAvKipcbiAgICogRmlyZWJhc2UgU0RLIFZlcnNpb25cbiAgICovXG4gIFNES19WRVJTSU9OOiAnJHtKU0NPUkVfVkVSU0lPTn0nXG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHByb3ZpZGVkIGFzc2VydGlvbiBpcyBmYWxzeVxuICovXG5leHBvcnQgY29uc3QgYXNzZXJ0ID0gZnVuY3Rpb24gKGFzc2VydGlvbjogdW5rbm93biwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghYXNzZXJ0aW9uKSB7XG4gICAgdGhyb3cgYXNzZXJ0aW9uRXJyb3IobWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBFcnJvciBvYmplY3Qgc3VpdGFibGUgZm9yIHRocm93aW5nLlxuICovXG5leHBvcnQgY29uc3QgYXNzZXJ0aW9uRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZTogc3RyaW5nKTogRXJyb3Ige1xuICByZXR1cm4gbmV3IEVycm9yKFxuICAgICdGaXJlYmFzZSBEYXRhYmFzZSAoJyArXG4gICAgICBDT05TVEFOVFMuU0RLX1ZFUlNJT04gK1xuICAgICAgJykgSU5URVJOQUwgQVNTRVJUIEZBSUxFRDogJyArXG4gICAgICBtZXNzYWdlXG4gICk7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmNvbnN0IHN0cmluZ1RvQnl0ZUFycmF5ID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKTogbnVtYmVyW10ge1xuICAvLyBUT0RPKHVzZXIpOiBVc2UgbmF0aXZlIGltcGxlbWVudGF0aW9ucyBpZi93aGVuIGF2YWlsYWJsZVxuICBjb25zdCBvdXQ6IG51bWJlcltdID0gW107XG4gIGxldCBwID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICBvdXRbcCsrXSA9IGM7XG4gICAgfSBlbHNlIGlmIChjIDwgMjA0OCkge1xuICAgICAgb3V0W3ArK10gPSAoYyA+PiA2KSB8IDE5MjtcbiAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmXG4gICAgICBpICsgMSA8IHN0ci5sZW5ndGggJiZcbiAgICAgIChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDBcbiAgICApIHtcbiAgICAgIC8vIFN1cnJvZ2F0ZSBQYWlyXG4gICAgICBjID0gMHgxMDAwMCArICgoYyAmIDB4MDNmZikgPDwgMTApICsgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweDAzZmYpO1xuICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XG4gICAgICBvdXRbcCsrXSA9ICgoYyA+PiAxMikgJiA2MykgfCAxMjg7XG4gICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dFtwKytdID0gKGMgPj4gMTIpIHwgMjI0O1xuICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XG4gICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBUdXJucyBhbiBhcnJheSBvZiBudW1iZXJzIGludG8gdGhlIHN0cmluZyBnaXZlbiBieSB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGVcbiAqIGNoYXJhY3RlcnMgdG8gd2hpY2ggdGhlIG51bWJlcnMgY29ycmVzcG9uZC5cbiAqIEBwYXJhbSBieXRlcyBBcnJheSBvZiBudW1iZXJzIHJlcHJlc2VudGluZyBjaGFyYWN0ZXJzLlxuICogQHJldHVybiBTdHJpbmdpZmljYXRpb24gb2YgdGhlIGFycmF5LlxuICovXG5jb25zdCBieXRlQXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uIChieXRlczogbnVtYmVyW10pOiBzdHJpbmcge1xuICAvLyBUT0RPKHVzZXIpOiBVc2UgbmF0aXZlIGltcGxlbWVudGF0aW9ucyBpZi93aGVuIGF2YWlsYWJsZVxuICBjb25zdCBvdXQ6IHN0cmluZ1tdID0gW107XG4gIGxldCBwb3MgPSAwLFxuICAgIGMgPSAwO1xuICB3aGlsZSAocG9zIDwgYnl0ZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgYzEgPSBieXRlc1twb3MrK107XG4gICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEpO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAxOTEgJiYgYzEgPCAyMjQpIHtcbiAgICAgIGNvbnN0IGMyID0gYnl0ZXNbcG9zKytdO1xuICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYzEgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xuICAgIH0gZWxzZSBpZiAoYzEgPiAyMzkgJiYgYzEgPCAzNjUpIHtcbiAgICAgIC8vIFN1cnJvZ2F0ZSBQYWlyXG4gICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcbiAgICAgIGNvbnN0IGMzID0gYnl0ZXNbcG9zKytdO1xuICAgICAgY29uc3QgYzQgPSBieXRlc1twb3MrK107XG4gICAgICBjb25zdCB1ID1cbiAgICAgICAgKCgoYzEgJiA3KSA8PCAxOCkgfCAoKGMyICYgNjMpIDw8IDEyKSB8ICgoYzMgJiA2MykgPDwgNikgfCAoYzQgJiA2MykpIC1cbiAgICAgICAgMHgxMDAwMDtcbiAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAodSA+PiAxMCkpO1xuICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZGMwMCArICh1ICYgMTAyMykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcbiAgICAgIGNvbnN0IGMzID0gYnl0ZXNbcG9zKytdO1xuICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgICAoKGMxICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MylcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQuam9pbignJyk7XG59O1xuXG5pbnRlcmZhY2UgQmFzZTY0IHtcbiAgYnl0ZVRvQ2hhck1hcF86IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0gfCBudWxsO1xuICBjaGFyVG9CeXRlTWFwXzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSB8IG51bGw7XG4gIGJ5dGVUb0NoYXJNYXBXZWJTYWZlXzogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSB8IG51bGw7XG4gIGNoYXJUb0J5dGVNYXBXZWJTYWZlXzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSB8IG51bGw7XG4gIEVOQ09ERURfVkFMU19CQVNFOiBzdHJpbmc7XG4gIHJlYWRvbmx5IEVOQ09ERURfVkFMUzogc3RyaW5nO1xuICByZWFkb25seSBFTkNPREVEX1ZBTFNfV0VCU0FGRTogc3RyaW5nO1xuICBIQVNfTkFUSVZFX1NVUFBPUlQ6IGJvb2xlYW47XG4gIGVuY29kZUJ5dGVBcnJheShpbnB1dDogbnVtYmVyW10gfCBVaW50OEFycmF5LCB3ZWJTYWZlPzogYm9vbGVhbik6IHN0cmluZztcbiAgZW5jb2RlU3RyaW5nKGlucHV0OiBzdHJpbmcsIHdlYlNhZmU/OiBib29sZWFuKTogc3RyaW5nO1xuICBkZWNvZGVTdHJpbmcoaW5wdXQ6IHN0cmluZywgd2ViU2FmZTogYm9vbGVhbik6IHN0cmluZztcbiAgZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQ6IHN0cmluZywgd2ViU2FmZTogYm9vbGVhbik6IG51bWJlcltdO1xuICBpbml0XygpOiB2b2lkO1xufVxuXG4vLyBXZSBkZWZpbmUgaXQgYXMgYW4gb2JqZWN0IGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNsYXNzIGJlY2F1c2UgYSBjbGFzcyBjb21waWxlZCBkb3duIHRvIGVzNSBjYW4ndFxuLy8gYmUgdHJlZXNoYWtlZC4gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvaXNzdWVzLzE2OTFcbi8vIFN0YXRpYyBsb29rdXAgbWFwcywgbGF6aWx5IHBvcHVsYXRlZCBieSBpbml0XygpXG5leHBvcnQgY29uc3QgYmFzZTY0OiBCYXNlNjQgPSB7XG4gIC8qKlxuICAgKiBNYXBzIGJ5dGVzIHRvIGNoYXJhY3RlcnMuXG4gICAqL1xuICBieXRlVG9DaGFyTWFwXzogbnVsbCxcblxuICAvKipcbiAgICogTWFwcyBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxuICAgKi9cbiAgY2hhclRvQnl0ZU1hcF86IG51bGwsXG5cbiAgLyoqXG4gICAqIE1hcHMgYnl0ZXMgdG8gd2Vic2FmZSBjaGFyYWN0ZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnl0ZVRvQ2hhck1hcFdlYlNhZmVfOiBudWxsLFxuXG4gIC8qKlxuICAgKiBNYXBzIHdlYnNhZmUgY2hhcmFjdGVycyB0byBieXRlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoYXJUb0J5dGVNYXBXZWJTYWZlXzogbnVsbCxcblxuICAvKipcbiAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQsIHNoYXJlZCBiZXR3ZWVuXG4gICAqIEVOQ09ERURfVkFMUyBhbmQgRU5DT0RFRF9WQUxTX1dFQlNBRkVcbiAgICovXG4gIEVOQ09ERURfVkFMU19CQVNFOlxuICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicgKyAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICsgJzAxMjM0NTY3ODknLFxuXG4gIC8qKlxuICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldC4gVmFsdWUgNjQgKD0pIGlzIHNwZWNpYWw7IGl0IG1lYW5zIFwibm90aGluZy5cIlxuICAgKi9cbiAgZ2V0IEVOQ09ERURfVkFMUygpIHtcbiAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICcrLz0nO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPdXIgd2Vic2FmZSBhbHBoYWJldC5cbiAgICovXG4gIGdldCBFTkNPREVEX1ZBTFNfV0VCU0FGRSgpIHtcbiAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICctXy4nO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyB0aGUgYXRvYiBhbmQgYnRvYSBmdW5jdGlvbnMuIFRoaXMgZXh0ZW5zaW9uXG4gICAqIHN0YXJ0ZWQgYXQgTW96aWxsYSBidXQgaXMgbm93IGltcGxlbWVudGVkIGJ5IG1hbnkgYnJvd3NlcnMuIFdlIHVzZSB0aGVcbiAgICogQVNTVU1FXyogdmFyaWFibGVzIHRvIGF2b2lkIHB1bGxpbmcgaW4gdGhlIGZ1bGwgdXNlcmFnZW50IGRldGVjdGlvbiBsaWJyYXJ5XG4gICAqIGJ1dCBzdGlsbCBhbGxvd2luZyB0aGUgc3RhbmRhcmQgcGVyLWJyb3dzZXIgY29tcGlsYXRpb25zLlxuICAgKlxuICAgKi9cbiAgSEFTX05BVElWRV9TVVBQT1JUOiB0eXBlb2YgYXRvYiA9PT0gJ2Z1bmN0aW9uJyxcblxuICAvKipcbiAgICogQmFzZTY0LWVuY29kZSBhbiBhcnJheSBvZiBieXRlcy5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0IEFuIGFycmF5IG9mIGJ5dGVzIChudW1iZXJzIHdpdGhcbiAgICogICAgIHZhbHVlIGluIFswLCAyNTVdKSB0byBlbmNvZGUuXG4gICAqIEBwYXJhbSB3ZWJTYWZlIEJvb2xlYW4gaW5kaWNhdGluZyB3ZSBzaG91bGQgdXNlIHRoZVxuICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXG4gICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cbiAgICovXG4gIGVuY29kZUJ5dGVBcnJheShpbnB1dDogbnVtYmVyW10gfCBVaW50OEFycmF5LCB3ZWJTYWZlPzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2VuY29kZUJ5dGVBcnJheSB0YWtlcyBhbiBhcnJheSBhcyBhIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdF8oKTtcblxuICAgIGNvbnN0IGJ5dGVUb0NoYXJNYXAgPSB3ZWJTYWZlXG4gICAgICA/IHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfIVxuICAgICAgOiB0aGlzLmJ5dGVUb0NoYXJNYXBfITtcblxuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgY29uc3QgYnl0ZTEgPSBpbnB1dFtpXTtcbiAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgKyAxIDwgaW5wdXQubGVuZ3RoO1xuICAgICAgY29uc3QgYnl0ZTIgPSBoYXZlQnl0ZTIgPyBpbnB1dFtpICsgMV0gOiAwO1xuICAgICAgY29uc3QgaGF2ZUJ5dGUzID0gaSArIDIgPCBpbnB1dC5sZW5ndGg7XG4gICAgICBjb25zdCBieXRlMyA9IGhhdmVCeXRlMyA/IGlucHV0W2kgKyAyXSA6IDA7XG5cbiAgICAgIGNvbnN0IG91dEJ5dGUxID0gYnl0ZTEgPj4gMjtcbiAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMSAmIDB4MDMpIDw8IDQpIHwgKGJ5dGUyID4+IDQpO1xuICAgICAgbGV0IG91dEJ5dGUzID0gKChieXRlMiAmIDB4MGYpIDw8IDIpIHwgKGJ5dGUzID4+IDYpO1xuICAgICAgbGV0IG91dEJ5dGU0ID0gYnl0ZTMgJiAweDNmO1xuXG4gICAgICBpZiAoIWhhdmVCeXRlMykge1xuICAgICAgICBvdXRCeXRlNCA9IDY0O1xuXG4gICAgICAgIGlmICghaGF2ZUJ5dGUyKSB7XG4gICAgICAgICAgb3V0Qnl0ZTMgPSA2NDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvdXRwdXQucHVzaChcbiAgICAgICAgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMV0sXG4gICAgICAgIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTJdLFxuICAgICAgICBieXRlVG9DaGFyTWFwW291dEJ5dGUzXSxcbiAgICAgICAgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlNF1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dC5qb2luKCcnKTtcbiAgfSxcblxuICAvKipcbiAgICogQmFzZTY0LWVuY29kZSBhIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0IEEgc3RyaW5nIHRvIGVuY29kZS5cbiAgICogQHBhcmFtIHdlYlNhZmUgSWYgdHJ1ZSwgd2Ugc2hvdWxkIHVzZSB0aGVcbiAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxuICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gICAqL1xuICBlbmNvZGVTdHJpbmcoaW5wdXQ6IHN0cmluZywgd2ViU2FmZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XG4gICAgLy8gYSBuYXRpdmUgYmFzZTY0IGVuY29kZXIgaW4gdGhlIGZvcm0gb2YgXCJidG9hL2F0b2JcIlxuICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xuICAgICAgcmV0dXJuIGJ0b2EoaW5wdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbmNvZGVCeXRlQXJyYXkoc3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQpLCB3ZWJTYWZlKTtcbiAgfSxcblxuICAvKipcbiAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0IHRvIGRlY29kZS5cbiAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZVxuICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXG4gICAqIEByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cbiAgICovXG4gIGRlY29kZVN0cmluZyhpbnB1dDogc3RyaW5nLCB3ZWJTYWZlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxuICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcbiAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcbiAgICAgIHJldHVybiBhdG9iKGlucHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVBcnJheVRvU3RyaW5nKHRoaXMuZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQsIHdlYlNhZmUpKTtcbiAgfSxcblxuICAvKipcbiAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cbiAgICpcbiAgICogSW4gYmFzZS02NCBkZWNvZGluZywgZ3JvdXBzIG9mIGZvdXIgY2hhcmFjdGVycyBhcmUgY29udmVydGVkIGludG8gdGhyZWVcbiAgICogYnl0ZXMuICBJZiB0aGUgZW5jb2RlciBkaWQgbm90IGFwcGx5IHBhZGRpbmcsIHRoZSBpbnB1dCBsZW5ndGggbWF5IG5vdFxuICAgKiBiZSBhIG11bHRpcGxlIG9mIDQuXG4gICAqXG4gICAqIEluIHRoaXMgY2FzZSwgdGhlIGxhc3QgZ3JvdXAgd2lsbCBoYXZlIGZld2VyIHRoYW4gNCBjaGFyYWN0ZXJzLCBhbmRcbiAgICogcGFkZGluZyB3aWxsIGJlIGluZmVycmVkLiAgSWYgdGhlIGdyb3VwIGhhcyBvbmUgb3IgdHdvIGNoYXJhY3RlcnMsIGl0IGRlY29kZXNcbiAgICogdG8gb25lIGJ5dGUuICBJZiB0aGUgZ3JvdXAgaGFzIHRocmVlIGNoYXJhY3RlcnMsIGl0IGRlY29kZXMgdG8gdHdvIGJ5dGVzLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQgdG8gZGVjb2RlLlxuICAgKiBAcGFyYW0gd2ViU2FmZSBUcnVlIGlmIHdlIHNob3VsZCB1c2UgdGhlIHdlYi1zYWZlIGFscGhhYmV0LlxuICAgKiBAcmV0dXJuIGJ5dGVzIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cbiAgICovXG4gIGRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0OiBzdHJpbmcsIHdlYlNhZmU6IGJvb2xlYW4pOiBudW1iZXJbXSB7XG4gICAgdGhpcy5pbml0XygpO1xuXG4gICAgY29uc3QgY2hhclRvQnl0ZU1hcCA9IHdlYlNhZmVcbiAgICAgID8gdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV8hXG4gICAgICA6IHRoaXMuY2hhclRvQnl0ZU1hcF8hO1xuXG4gICAgY29uc3Qgb3V0cHV0OiBudW1iZXJbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7ICkge1xuICAgICAgY29uc3QgYnl0ZTEgPSBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKyspXTtcblxuICAgICAgY29uc3QgaGF2ZUJ5dGUyID0gaSA8IGlucHV0Lmxlbmd0aDtcbiAgICAgIGNvbnN0IGJ5dGUyID0gaGF2ZUJ5dGUyID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogMDtcbiAgICAgICsraTtcblxuICAgICAgY29uc3QgaGF2ZUJ5dGUzID0gaSA8IGlucHV0Lmxlbmd0aDtcbiAgICAgIGNvbnN0IGJ5dGUzID0gaGF2ZUJ5dGUzID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XG4gICAgICArK2k7XG5cbiAgICAgIGNvbnN0IGhhdmVCeXRlNCA9IGkgPCBpbnB1dC5sZW5ndGg7XG4gICAgICBjb25zdCBieXRlNCA9IGhhdmVCeXRlNCA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xuICAgICAgKytpO1xuXG4gICAgICBpZiAoYnl0ZTEgPT0gbnVsbCB8fCBieXRlMiA9PSBudWxsIHx8IGJ5dGUzID09IG51bGwgfHwgYnl0ZTQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdXRCeXRlMSA9IChieXRlMSA8PCAyKSB8IChieXRlMiA+PiA0KTtcbiAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUxKTtcblxuICAgICAgaWYgKGJ5dGUzICE9PSA2NCkge1xuICAgICAgICBjb25zdCBvdXRCeXRlMiA9ICgoYnl0ZTIgPDwgNCkgJiAweGYwKSB8IChieXRlMyA+PiAyKTtcbiAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTIpO1xuXG4gICAgICAgIGlmIChieXRlNCAhPT0gNjQpIHtcbiAgICAgICAgICBjb25zdCBvdXRCeXRlMyA9ICgoYnl0ZTMgPDwgNikgJiAweGMwKSB8IGJ5dGU0O1xuICAgICAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExhenkgc3RhdGljIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uLiBDYWxsZWQgYmVmb3JlXG4gICAqIGFjY2Vzc2luZyBhbnkgb2YgdGhlIHN0YXRpYyBtYXAgdmFyaWFibGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdF8oKSB7XG4gICAgaWYgKCF0aGlzLmJ5dGVUb0NoYXJNYXBfKSB7XG4gICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBfID0ge307XG4gICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XG4gICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlXyA9IHt9O1xuICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV8gPSB7fTtcblxuICAgICAgLy8gV2Ugd2FudCBxdWljayBtYXBwaW5ncyBiYWNrIGFuZCBmb3J0aCwgc28gd2UgcHJlY29tcHV0ZSB0d28gbWFwcy5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTkNPREVEX1ZBTFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwX1tpXSA9IHRoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKTtcbiAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwX1t0aGlzLmJ5dGVUb0NoYXJNYXBfW2ldXSA9IGk7XG4gICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSk7XG4gICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldXSA9IGk7XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXG4gICAgICAgIGlmIChpID49IHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwX1t0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKV0gPSBpO1xuICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKV0gPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFVSTC1zYWZlIGJhc2U2NCBlbmNvZGluZ1xuICovXG5leHBvcnQgY29uc3QgYmFzZTY0RW5jb2RlID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdXRmOEJ5dGVzID0gc3RyaW5nVG9CeXRlQXJyYXkoc3RyKTtcbiAgcmV0dXJuIGJhc2U2NC5lbmNvZGVCeXRlQXJyYXkodXRmOEJ5dGVzLCB0cnVlKTtcbn07XG5cbi8qKlxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nICh3aXRob3V0IFwiLlwiIHBhZGRpbmcgaW4gdGhlIGVuZCkuXG4gKiBlLmcuIFVzZWQgaW4gSlNPTiBXZWIgVG9rZW4gKEpXVCkgcGFydHMuXG4gKi9cbmV4cG9ydCBjb25zdCBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFVzZSBiYXNlNjR1cmwgZW5jb2RpbmcgYW5kIHJlbW92ZSBwYWRkaW5nIGluIHRoZSBlbmQgKGRvdCBjaGFyYWN0ZXJzKS5cbiAgcmV0dXJuIGJhc2U2NEVuY29kZShzdHIpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG59O1xuXG4vKipcbiAqIFVSTC1zYWZlIGJhc2U2NCBkZWNvZGluZ1xuICpcbiAqIE5PVEU6IERPIE5PVCB1c2UgdGhlIGdsb2JhbCBhdG9iKCkgZnVuY3Rpb24gLSBpdCBkb2VzIE5PVCBzdXBwb3J0IHRoZVxuICogYmFzZTY0VXJsIHZhcmlhbnQgZW5jb2RpbmcuXG4gKlxuICogQHBhcmFtIHN0ciBUbyBiZSBkZWNvZGVkXG4gKiBAcmV0dXJuIERlY29kZWQgcmVzdWx0LCBpZiBwb3NzaWJsZVxuICovXG5leHBvcnQgY29uc3QgYmFzZTY0RGVjb2RlID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGJhc2U2NC5kZWNvZGVTdHJpbmcoc3RyLCB0cnVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Jhc2U2NERlY29kZSBmYWlsZWQ6ICcsIGUpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIERvIGEgZGVlcC1jb3B5IG9mIGJhc2ljIEphdmFTY3JpcHQgT2JqZWN0cyBvciBBcnJheXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weTxUPih2YWx1ZTogVCk6IFQge1xuICByZXR1cm4gZGVlcEV4dGVuZCh1bmRlZmluZWQsIHZhbHVlKSBhcyBUO1xufVxuXG4vKipcbiAqIENvcHkgcHJvcGVydGllcyBmcm9tIHNvdXJjZSB0byB0YXJnZXQgKHJlY3Vyc2l2ZWx5IGFsbG93cyBleHRlbnNpb25cbiAqIG9mIE9iamVjdHMgYW5kIEFycmF5cykuICBTY2FsYXIgdmFsdWVzIGluIHRoZSB0YXJnZXQgYXJlIG92ZXItd3JpdHRlbi5cbiAqIElmIHRhcmdldCBpcyB1bmRlZmluZWQsIGFuIG9iamVjdCBvZiB0aGUgYXBwcm9wcmlhdGUgdHlwZSB3aWxsIGJlIGNyZWF0ZWRcbiAqIChhbmQgcmV0dXJuZWQpLlxuICpcbiAqIFdlIHJlY3Vyc2l2ZWx5IGNvcHkgYWxsIGNoaWxkIHByb3BlcnRpZXMgb2YgcGxhaW4gT2JqZWN0cyBpbiB0aGUgc291cmNlLSBzb1xuICogdGhhdCBuYW1lc3BhY2UtIGxpa2UgZGljdGlvbmFyaWVzIGFyZSBtZXJnZWQuXG4gKlxuICogTm90ZSB0aGF0IHRoZSB0YXJnZXQgY2FuIGJlIGEgZnVuY3Rpb24sIGluIHdoaWNoIGNhc2UgdGhlIHByb3BlcnRpZXMgaW5cbiAqIHRoZSBzb3VyY2UgT2JqZWN0IGFyZSBjb3BpZWQgb250byBpdCBhcyBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGUgRnVuY3Rpb24uXG4gKlxuICogTm90ZTogd2UgZG9uJ3QgbWVyZ2UgX19wcm90b19fIHRvIHByZXZlbnQgcHJvdG90eXBlIHBvbGx1dGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcEV4dGVuZCh0YXJnZXQ6IHVua25vd24sIHNvdXJjZTogdW5rbm93bik6IHVua25vd24ge1xuICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIHN3aXRjaCAoc291cmNlLmNvbnN0cnVjdG9yKSB7XG4gICAgY2FzZSBEYXRlOlxuICAgICAgLy8gVHJlYXQgRGF0ZXMgbGlrZSBzY2FsYXJzOyBpZiB0aGUgdGFyZ2V0IGRhdGUgb2JqZWN0IGhhZCBhbnkgY2hpbGRcbiAgICAgIC8vIHByb3BlcnRpZXMgLSB0aGV5IHdpbGwgYmUgbG9zdCFcbiAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHNvdXJjZSBhcyBEYXRlO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVWYWx1ZS5nZXRUaW1lKCkpO1xuXG4gICAgY2FzZSBPYmplY3Q6XG4gICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFyZ2V0ID0ge307XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFycmF5OlxuICAgICAgLy8gQWx3YXlzIGNvcHkgdGhlIGFycmF5IHNvdXJjZSBhbmQgb3ZlcndyaXRlIHRoZSB0YXJnZXQuXG4gICAgICB0YXJnZXQgPSBbXTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIE5vdCBhIHBsYWluIE9iamVjdCAtIHRyZWF0IGl0IGFzIGEgc2NhbGFyLlxuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIGZvciAoY29uc3QgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAvLyB1c2UgaXNWYWxpZEtleSB0byBndWFyZCBhZ2FpbnN0IHByb3RvdHlwZSBwb2xsdXRpb24uIFNlZSBodHRwczovL3NueWsuaW8vdnVsbi9TTllLLUpTLUxPREFTSC00NTAyMDJcbiAgICBpZiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSB8fCAhaXNWYWxpZEtleShwcm9wKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgICh0YXJnZXQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW3Byb3BdID0gZGVlcEV4dGVuZChcbiAgICAgICh0YXJnZXQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW3Byb3BdLFxuICAgICAgKHNvdXJjZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbcHJvcF1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEtleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4ga2V5ICE9PSAnX19wcm90b19fJztcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogUmV0dXJucyBuYXZpZ2F0b3IudXNlckFnZW50IHN0cmluZyBvciAnJyBpZiBpdCdzIG5vdCBkZWZpbmVkLlxuICogQHJldHVybiB1c2VyIGFnZW50IHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VUEoKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIG5hdmlnYXRvclsndXNlckFnZW50J10gPT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG4vKipcbiAqIERldGVjdCBDb3Jkb3ZhIC8gUGhvbmVHYXAgLyBJb25pYyBmcmFtZXdvcmtzIG9uIGEgbW9iaWxlIGRldmljZS5cbiAqXG4gKiBEZWxpYmVyYXRlbHkgZG9lcyBub3QgcmVseSBvbiBjaGVja2luZyBgZmlsZTovL2AgVVJMcyAoYXMgdGhpcyBmYWlscyBQaG9uZUdhcFxuICogaW4gdGhlIFJpcHBsZSBlbXVsYXRvcikgbm9yIENvcmRvdmEgYG9uRGV2aWNlUmVhZHlgLCB3aGljaCB3b3VsZCBub3JtYWxseVxuICogd2FpdCBmb3IgYSBjYWxsYmFjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlQ29yZG92YSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC8vIEB0cy1pZ25vcmUgU2V0dGluZyB1cCBhbiBicm9hZGx5IGFwcGxpY2FibGUgaW5kZXggc2lnbmF0dXJlIGZvciBXaW5kb3dcbiAgICAvLyBqdXN0IHRvIGRlYWwgd2l0aCB0aGlzIGNhc2Ugd291bGQgcHJvYmFibHkgYmUgYSBiYWQgaWRlYS5cbiAgICAhISh3aW5kb3dbJ2NvcmRvdmEnXSB8fCB3aW5kb3dbJ3Bob25lZ2FwJ10gfHwgd2luZG93WydQaG9uZUdhcCddKSAmJlxuICAgIC9pb3N8aXBob25lfGlwb2R8aXBhZHxhbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGUvaS50ZXN0KGdldFVBKCkpXG4gICk7XG59XG5cbi8qKlxuICogRGV0ZWN0IE5vZGUuanMuXG4gKlxuICogQHJldHVybiB0cnVlIGlmIE5vZGUuanMgZW52aXJvbm1lbnQgaXMgZGV0ZWN0ZWQuXG4gKi9cbi8vIE5vZGUgZGV0ZWN0aW9uIGxvZ2ljIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9pbGlha2FuL2RldGVjdC1ub2RlL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIERldGVjdCBCcm93c2VyIEVudmlyb25tZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXIoKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmO1xufVxuXG4vKipcbiAqIERldGVjdCBicm93c2VyIGV4dGVuc2lvbnMgKENocm9tZSBhbmQgRmlyZWZveCBhdCBsZWFzdCkuXG4gKi9cbmludGVyZmFjZSBCcm93c2VyUnVudGltZSB7XG4gIGlkPzogdW5rbm93bjtcbn1cbmRlY2xhcmUgY29uc3QgY2hyb21lOiB7IHJ1bnRpbWU/OiBCcm93c2VyUnVudGltZSB9O1xuZGVjbGFyZSBjb25zdCBicm93c2VyOiB7IHJ1bnRpbWU/OiBCcm93c2VyUnVudGltZSB9O1xuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlckV4dGVuc2lvbigpOiBib29sZWFuIHtcbiAgY29uc3QgcnVudGltZSA9XG4gICAgdHlwZW9mIGNocm9tZSA9PT0gJ29iamVjdCdcbiAgICAgID8gY2hyb21lLnJ1bnRpbWVcbiAgICAgIDogdHlwZW9mIGJyb3dzZXIgPT09ICdvYmplY3QnXG4gICAgICA/IGJyb3dzZXIucnVudGltZVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIHJldHVybiB0eXBlb2YgcnVudGltZSA9PT0gJ29iamVjdCcgJiYgcnVudGltZS5pZCAhPT0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIERldGVjdCBSZWFjdCBOYXRpdmUuXG4gKlxuICogQHJldHVybiB0cnVlIGlmIFJlYWN0TmF0aXZlIGVudmlyb25tZW50IGlzIGRldGVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFjdE5hdGl2ZSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiBuYXZpZ2F0b3JbJ3Byb2R1Y3QnXSA9PT0gJ1JlYWN0TmF0aXZlJ1xuICApO1xufVxuXG4vKiogRGV0ZWN0cyBFbGVjdHJvbiBhcHBzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlY3Ryb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiBnZXRVQSgpLmluZGV4T2YoJ0VsZWN0cm9uLycpID49IDA7XG59XG5cbi8qKiBEZXRlY3RzIEludGVybmV0IEV4cGxvcmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSUUoKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVhID0gZ2V0VUEoKTtcbiAgcmV0dXJuIHVhLmluZGV4T2YoJ01TSUUgJykgPj0gMCB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpID49IDA7XG59XG5cbi8qKiBEZXRlY3RzIFVuaXZlcnNhbCBXaW5kb3dzIFBsYXRmb3JtIGFwcHMuICovXG5leHBvcnQgZnVuY3Rpb24gaXNVV1AoKTogYm9vbGVhbiB7XG4gIHJldHVybiBnZXRVQSgpLmluZGV4T2YoJ01TQXBwSG9zdC8nKSA+PSAwO1xufVxuXG4vKipcbiAqIERldGVjdCB3aGV0aGVyIHRoZSBjdXJyZW50IFNESyBidWlsZCBpcyB0aGUgTm9kZSB2ZXJzaW9uLlxuICpcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpdCdzIHRoZSBOb2RlIFNESyBidWlsZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVNkaygpOiBib29sZWFuIHtcbiAgcmV0dXJuIENPTlNUQU5UUy5OT0RFX0NMSUVOVCA9PT0gdHJ1ZSB8fCBDT05TVEFOVFMuTk9ERV9BRE1JTiA9PT0gdHJ1ZTtcbn1cblxuLyoqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgcnVubmluZyBpbiBTYWZhcmkuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYWZhcmkoKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgIWlzTm9kZSgpICYmXG4gICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnU2FmYXJpJykgJiZcbiAgICAhbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnQ2hyb21lJylcbiAgKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjaGVja3MgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxuICogQHJldHVybiB0cnVlIGlmIGluZGV4ZWREQiBpcyBzdXBwb3J0ZWQgYnkgY3VycmVudCBicm93c2VyL3NlcnZpY2Ugd29ya2VyIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW5kZXhlZERCQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIHJldHVybiB0eXBlb2YgaW5kZXhlZERCID09PSAnb2JqZWN0JztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHZhbGlkYXRlcyBicm93c2VyL3N3IGNvbnRleHQgZm9yIGluZGV4ZWREQiBieSBvcGVuaW5nIGEgZHVtbXkgaW5kZXhlZERCIGRhdGFiYXNlIGFuZCByZWplY3RcbiAqIGlmIGVycm9ycyBvY2N1ciBkdXJpbmcgdGhlIGRhdGFiYXNlIG9wZW4gb3BlcmF0aW9uLlxuICpcbiAqIEB0aHJvd3MgZXhjZXB0aW9uIGlmIGN1cnJlbnQgYnJvd3Nlci9zdyBjb250ZXh0IGNhbid0IHJ1biBpZGIub3BlbiAoZXg6IFNhZmFyaSBpZnJhbWUsIEZpcmVmb3hcbiAqIHByaXZhdGUgYnJvd3NpbmcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcHJlRXhpc3Q6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgY29uc3QgREJfQ0hFQ0tfTkFNRSA9XG4gICAgICAgICd2YWxpZGF0ZS1icm93c2VyLWNvbnRleHQtZm9yLWluZGV4ZWRkYi1hbmFseXRpY3MtbW9kdWxlJztcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBzZWxmLmluZGV4ZWREQi5vcGVuKERCX0NIRUNLX05BTUUpO1xuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIHJlcXVlc3QucmVzdWx0LmNsb3NlKCk7XG4gICAgICAgIC8vIGRlbGV0ZSBkYXRhYmFzZSBvbmx5IHdoZW4gaXQgZG9lc24ndCBwcmUtZXhpc3RcbiAgICAgICAgaWYgKCFwcmVFeGlzdCkge1xuICAgICAgICAgIHNlbGYuaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKERCX0NIRUNLX05BTUUpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICAgIHByZUV4aXN0ID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yPy5tZXNzYWdlIHx8ICcnKTtcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKlxuICogVGhpcyBtZXRob2QgY2hlY2tzIHdoZXRoZXIgY29va2llIGlzIGVuYWJsZWQgd2l0aGluIGN1cnJlbnQgYnJvd3NlclxuICogQHJldHVybiB0cnVlIGlmIGNvb2tpZSBpcyBlbmFibGVkIHdpdGhpbiBjdXJyZW50IGJyb3dzZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFyZUNvb2tpZXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFBvbHlmaWxsIGZvciBgZ2xvYmFsVGhpc2Agb2JqZWN0LlxuICogQHJldHVybnMgdGhlIGBnbG9iYWxUaGlzYCBvYmplY3QgZm9yIHRoZSBnaXZlbiBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbCgpOiB0eXBlb2YgZ2xvYmFsVGhpcyB7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBnbG9iYWw7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QuJyk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYmFzZTY0RGVjb2RlIH0gZnJvbSAnLi9jcnlwdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWwgfSBmcm9tICcuL2Vudmlyb25tZW50JztcblxuLyoqXG4gKiBLZXlzIGZvciBleHBlcmltZW50YWwgcHJvcGVydGllcyBvbiB0aGUgYEZpcmViYXNlRGVmYXVsdHNgIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IHR5cGUgRXhwZXJpbWVudGFsS2V5ID0gJ2F1dGhUb2tlblN5bmNVUkwnIHwgJ2F1dGhJZFRva2VuTWF4QWdlJztcblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBjYW4gYmUgaW5qZWN0ZWQgaW50byB0aGUgZW52aXJvbm1lbnQgYXMgX19GSVJFQkFTRV9ERUZBVUxUU19fLFxuICogZWl0aGVyIGFzIGEgcHJvcGVydHkgb2YgZ2xvYmFsVGhpcywgYSBzaGVsbCBlbnZpcm9ubWVudCB2YXJpYWJsZSwgb3IgYVxuICogY29va2llLlxuICpcbiAqIFRoaXMgb2JqZWN0IGNhbiBiZSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGFuZCBpbml0aWFsaXplXG4gKiBhIEZpcmViYXNlIGFwcCBhcyB3ZWxsIGFzIGFueSBlbXVsYXRvcnMuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpcmViYXNlRGVmYXVsdHMge1xuICBjb25maWc/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBlbXVsYXRvckhvc3RzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgX2F1dGhUb2tlblN5bmNVUkw/OiBzdHJpbmc7XG4gIF9hdXRoSWRUb2tlbk1heEFnZT86IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBOZWVkIGB2YXJgIGZvciB0aGlzIHRvIHdvcmsuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIF9fRklSRUJBU0VfREVGQVVMVFNfXzogRmlyZWJhc2VEZWZhdWx0cyB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZ2V0RGVmYXVsdHNGcm9tR2xvYmFsID0gKCk6IEZpcmViYXNlRGVmYXVsdHMgfCB1bmRlZmluZWQgPT5cbiAgZ2V0R2xvYmFsKCkuX19GSVJFQkFTRV9ERUZBVUxUU19fO1xuXG4vKipcbiAqIEF0dGVtcHQgdG8gcmVhZCBkZWZhdWx0cyBmcm9tIGEgSlNPTiBzdHJpbmcgcHJvdmlkZWQgdG9cbiAqIHByb2Nlc3MuZW52Ll9fRklSRUJBU0VfREVGQVVMVFNfXyBvciBhIEpTT04gZmlsZSB3aG9zZSBwYXRoIGlzIGluXG4gKiBwcm9jZXNzLmVudi5fX0ZJUkVCQVNFX0RFRkFVTFRTX1BBVEhfX1xuICovXG5jb25zdCBnZXREZWZhdWx0c0Zyb21FbnZWYXJpYWJsZSA9ICgpOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgcHJvY2Vzcy5lbnYgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRlZmF1bHRzSnNvblN0cmluZyA9IHByb2Nlc3MuZW52Ll9fRklSRUJBU0VfREVGQVVMVFNfXztcbiAgaWYgKGRlZmF1bHRzSnNvblN0cmluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlZmF1bHRzSnNvblN0cmluZyk7XG4gIH1cbn07XG5cbmNvbnN0IGdldERlZmF1bHRzRnJvbUNvb2tpZSA9ICgpOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IG1hdGNoO1xuICB0cnkge1xuICAgIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKC9fX0ZJUkVCQVNFX0RFRkFVTFRTX189KFteO10rKS8pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gU29tZSBlbnZpcm9ubWVudHMgc3VjaCBhcyBBbmd1bGFyIFVuaXZlcnNhbCBTU1IgaGF2ZSBhXG4gICAgLy8gYGRvY3VtZW50YCBvYmplY3QgYnV0IGVycm9yIG9uIGFjY2Vzc2luZyBgZG9jdW1lbnQuY29va2llYC5cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGVjb2RlZCA9IG1hdGNoICYmIGJhc2U2NERlY29kZShtYXRjaFsxXSk7XG4gIHJldHVybiBkZWNvZGVkICYmIEpTT04ucGFyc2UoZGVjb2RlZCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdC4gSXQgY2hlY2tzIGluIG9yZGVyOlxuICogKDEpIGlmIHN1Y2ggYW4gb2JqZWN0IGV4aXN0cyBhcyBhIHByb3BlcnR5IG9mIGBnbG9iYWxUaGlzYFxuICogKDIpIGlmIHN1Y2ggYW4gb2JqZWN0IHdhcyBwcm92aWRlZCBvbiBhIHNoZWxsIGVudmlyb25tZW50IHZhcmlhYmxlXG4gKiAoMykgaWYgc3VjaCBhbiBvYmplY3QgZXhpc3RzIGluIGEgY29va2llXG4gKi9cbmNvbnN0IGdldERlZmF1bHRzID0gKCk6IEZpcmViYXNlRGVmYXVsdHMgfCB1bmRlZmluZWQgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBnZXREZWZhdWx0c0Zyb21HbG9iYWwoKSB8fFxuICAgICAgZ2V0RGVmYXVsdHNGcm9tRW52VmFyaWFibGUoKSB8fFxuICAgICAgZ2V0RGVmYXVsdHNGcm9tQ29va2llKClcbiAgICApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLyoqXG4gICAgICogQ2F0Y2gtYWxsIGZvciBiZWluZyB1bmFibGUgdG8gZ2V0IF9fRklSRUJBU0VfREVGQVVMVFNfXyBkdWVcbiAgICAgKiB0byBhbnkgZW52aXJvbm1lbnQgY2FzZSB3ZSBoYXZlIG5vdCBhY2NvdW50ZWQgZm9yLiBMb2cgdG9cbiAgICAgKiBpbmZvIGluc3RlYWQgb2Ygc3dhbGxvd2luZyBzbyB3ZSBjYW4gZmluZCB0aGVzZSB1bmtub3duIGNhc2VzXG4gICAgICogYW5kIGFkZCBwYXRocyBmb3IgdGhlbSBpZiBuZWVkZWQuXG4gICAgICovXG4gICAgY29uc29sZS5pbmZvKGBVbmFibGUgdG8gZ2V0IF9fRklSRUJBU0VfREVGQVVMVFNfXyBkdWUgdG86ICR7ZX1gKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBlbXVsYXRvciBob3N0IHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdFxuICogZm9yIHRoZSBnaXZlbiBwcm9kdWN0LlxuICogQHJldHVybnMgYSBVUkwgaG9zdCBmb3JtYXR0ZWQgbGlrZSBgMTI3LjAuMC4xOjk5OTlgIG9yIGBbOjoxXTo0MDAwYCBpZiBhdmFpbGFibGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRFbXVsYXRvckhvc3QgPSAoXG4gIHByb2R1Y3ROYW1lOiBzdHJpbmdcbik6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiBnZXREZWZhdWx0cygpPy5lbXVsYXRvckhvc3RzPy5bcHJvZHVjdE5hbWVdO1xuXG4vKipcbiAqIFJldHVybnMgZW11bGF0b3IgaG9zdG5hbWUgYW5kIHBvcnQgc3RvcmVkIGluIHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0XG4gKiBmb3IgdGhlIGdpdmVuIHByb2R1Y3QuXG4gKiBAcmV0dXJucyBhIHBhaXIgb2YgaG9zdG5hbWUgYW5kIHBvcnQgbGlrZSBgW1wiOjoxXCIsIDQwMDBdYCBpZiBhdmFpbGFibGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRFbXVsYXRvckhvc3RuYW1lQW5kUG9ydCA9IChcbiAgcHJvZHVjdE5hbWU6IHN0cmluZ1xuKTogW2hvc3RuYW1lOiBzdHJpbmcsIHBvcnQ6IG51bWJlcl0gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBob3N0ID0gZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdChwcm9kdWN0TmFtZSk7XG4gIGlmICghaG9zdCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgY29uc3Qgc2VwYXJhdG9ySW5kZXggPSBob3N0Lmxhc3RJbmRleE9mKCc6Jyk7IC8vIEZpbmRpbmcgdGhlIGxhc3Qgc2luY2UgSVB2NiBhZGRyIGFsc28gaGFzIGNvbG9ucy5cbiAgaWYgKHNlcGFyYXRvckluZGV4IDw9IDAgfHwgc2VwYXJhdG9ySW5kZXggKyAxID09PSBob3N0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBob3N0ICR7aG9zdH0gd2l0aCBubyBzZXBhcmF0ZSBob3N0bmFtZSBhbmQgcG9ydCFgKTtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gIGNvbnN0IHBvcnQgPSBwYXJzZUludChob3N0LnN1YnN0cmluZyhzZXBhcmF0b3JJbmRleCArIDEpLCAxMCk7XG4gIGlmIChob3N0WzBdID09PSAnWycpIHtcbiAgICAvLyBCcmFja2V0LXF1b3RlZCBgW2lwdjZhZGRyXTpwb3J0YCA9PiByZXR1cm4gXCJpcHY2YWRkclwiICh3aXRob3V0IGJyYWNrZXRzKS5cbiAgICByZXR1cm4gW2hvc3Quc3Vic3RyaW5nKDEsIHNlcGFyYXRvckluZGV4IC0gMSksIHBvcnRdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbaG9zdC5zdWJzdHJpbmcoMCwgc2VwYXJhdG9ySW5kZXgpLCBwb3J0XTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIEZpcmViYXNlIGFwcCBjb25maWcgc3RvcmVkIGluIHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEFwcENvbmZpZyA9ICgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgdW5kZWZpbmVkID0+XG4gIGdldERlZmF1bHRzKCk/LmNvbmZpZztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGV4cGVyaW1lbnRhbCBzZXR0aW5nIG9uIHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0IChwcm9wZXJ0aWVzXG4gKiBwcmVmaXhlZCBieSBcIl9cIilcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEV4cGVyaW1lbnRhbFNldHRpbmcgPSA8VCBleHRlbmRzIEV4cGVyaW1lbnRhbEtleT4oXG4gIG5hbWU6IFRcbik6IEZpcmViYXNlRGVmYXVsdHNbYF8ke1R9YF0gPT5cbiAgZ2V0RGVmYXVsdHMoKT8uW2BfJHtuYW1lfWBdIGFzIEZpcmViYXNlRGVmYXVsdHNbYF8ke1R9YF07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGNsYXNzIERlZmVycmVkPFI+IHtcbiAgcHJvbWlzZTogUHJvbWlzZTxSPjtcbiAgcmVqZWN0OiAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHJlc29sdmU6ICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZSBhcyAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkO1xuICAgICAgdGhpcy5yZWplY3QgPSByZWplY3QgYXMgKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdXIgQVBJIGludGVybmFscyBhcmUgbm90IHByb21pc2VpZmllZCBhbmQgY2Fubm90IGJlY2F1c2Ugb3VyIGNhbGxiYWNrIEFQSXMgaGF2ZSBzdWJ0bGUgZXhwZWN0YXRpb25zIGFyb3VuZFxuICAgKiBpbnZva2luZyBwcm9taXNlcyBpbmxpbmUsIHdoaWNoIFByb21pc2VzIGFyZSBmb3JiaWRkZW4gdG8gZG8uIFRoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9uYWwgbm9kZS1zdHlsZSBjYWxsYmFja1xuICAgKiBhbmQgcmV0dXJucyBhIG5vZGUtc3R5bGUgY2FsbGJhY2sgd2hpY2ggd2lsbCByZXNvbHZlIG9yIHJlamVjdCB0aGUgRGVmZXJyZWQncyBwcm9taXNlLlxuICAgKi9cbiAgd3JhcENhbGxiYWNrKFxuICAgIGNhbGxiYWNrPzogKGVycm9yPzogdW5rbm93biwgdmFsdWU/OiB1bmtub3duKSA9PiB2b2lkXG4gICk6IChlcnJvcjogdW5rbm93biwgdmFsdWU/OiB1bmtub3duKSA9PiB2b2lkIHtcbiAgICByZXR1cm4gKGVycm9yLCB2YWx1ZT8pID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aGlzLnJlamVjdChlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBBdHRhY2hpbmcgbm9vcCBoYW5kbGVyIGp1c3QgaW4gY2FzZSBkZXZlbG9wZXIgd2Fzbid0IGV4cGVjdGluZ1xuICAgICAgICAvLyBwcm9taXNlc1xuICAgICAgICB0aGlzLnByb21pc2UuY2F0Y2goKCkgPT4ge30pO1xuXG4gICAgICAgIC8vIFNvbWUgb2Ygb3VyIGNhbGxiYWNrcyBkb24ndCBleHBlY3QgYSB2YWx1ZSBhbmQgb3VyIG93biB0ZXN0c1xuICAgICAgICAvLyBhc3NlcnQgdGhhdCB0aGUgcGFyYW1ldGVyIGxlbmd0aCBpcyAxXG4gICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyB9IGZyb20gJy4vY3J5cHQnO1xuXG4vLyBGaXJlYmFzZSBBdXRoIHRva2VucyBjb250YWluIHNuYWtlX2Nhc2UgY2xhaW1zIGZvbGxvd2luZyB0aGUgSldUIHN0YW5kYXJkIC8gY29udmVudGlvbi5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG5leHBvcnQgdHlwZSBGaXJlYmFzZVNpZ25JblByb3ZpZGVyID1cbiAgfCAnY3VzdG9tJ1xuICB8ICdlbWFpbCdcbiAgfCAncGFzc3dvcmQnXG4gIHwgJ3Bob25lJ1xuICB8ICdhbm9ueW1vdXMnXG4gIHwgJ2dvb2dsZS5jb20nXG4gIHwgJ2ZhY2Vib29rLmNvbSdcbiAgfCAnZ2l0aHViLmNvbSdcbiAgfCAndHdpdHRlci5jb20nXG4gIHwgJ21pY3Jvc29mdC5jb20nXG4gIHwgJ2FwcGxlLmNvbSc7XG5cbmludGVyZmFjZSBGaXJlYmFzZUlkVG9rZW4ge1xuICAvLyBBbHdheXMgc2V0IHRvIGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9QUk9KRUNUX0lEXG4gIGlzczogc3RyaW5nO1xuXG4gIC8vIEFsd2F5cyBzZXQgdG8gUFJPSkVDVF9JRFxuICBhdWQ6IHN0cmluZztcblxuICAvLyBUaGUgdXNlcidzIHVuaXF1ZSBJRFxuICBzdWI6IHN0cmluZztcblxuICAvLyBUaGUgdG9rZW4gaXNzdWUgdGltZSwgaW4gc2Vjb25kcyBzaW5jZSBlcG9jaFxuICBpYXQ6IG51bWJlcjtcblxuICAvLyBUaGUgdG9rZW4gZXhwaXJ5IHRpbWUsIG5vcm1hbGx5ICdpYXQnICsgMzYwMFxuICBleHA6IG51bWJlcjtcblxuICAvLyBUaGUgdXNlcidzIHVuaXF1ZSBJRC4gTXVzdCBiZSBlcXVhbCB0byAnc3ViJ1xuICB1c2VyX2lkOiBzdHJpbmc7XG5cbiAgLy8gVGhlIHRpbWUgdGhlIHVzZXIgYXV0aGVudGljYXRlZCwgbm9ybWFsbHkgJ2lhdCdcbiAgYXV0aF90aW1lOiBudW1iZXI7XG5cbiAgLy8gVGhlIHNpZ24gaW4gcHJvdmlkZXIsIG9ubHkgc2V0IHdoZW4gdGhlIHByb3ZpZGVyIGlzICdhbm9ueW1vdXMnXG4gIHByb3ZpZGVyX2lkPzogJ2Fub255bW91cyc7XG5cbiAgLy8gVGhlIHVzZXIncyBwcmltYXJ5IGVtYWlsXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIC8vIFRoZSB1c2VyJ3MgZW1haWwgdmVyaWZpY2F0aW9uIHN0YXR1c1xuICBlbWFpbF92ZXJpZmllZD86IGJvb2xlYW47XG5cbiAgLy8gVGhlIHVzZXIncyBwcmltYXJ5IHBob25lIG51bWJlclxuICBwaG9uZV9udW1iZXI/OiBzdHJpbmc7XG5cbiAgLy8gVGhlIHVzZXIncyBkaXNwbGF5IG5hbWVcbiAgbmFtZT86IHN0cmluZztcblxuICAvLyBUaGUgdXNlcidzIHByb2ZpbGUgcGhvdG8gVVJMXG4gIHBpY3R1cmU/OiBzdHJpbmc7XG5cbiAgLy8gSW5mb3JtYXRpb24gb24gYWxsIGlkZW50aXRpZXMgbGlua2VkIHRvIHRoaXMgdXNlclxuICBmaXJlYmFzZToge1xuICAgIC8vIFRoZSBwcmltYXJ5IHNpZ24taW4gcHJvdmlkZXJcbiAgICBzaWduX2luX3Byb3ZpZGVyOiBGaXJlYmFzZVNpZ25JblByb3ZpZGVyO1xuXG4gICAgLy8gQSBtYXAgb2YgcHJvdmlkZXJzIHRvIHRoZSB1c2VyJ3MgbGlzdCBvZiB1bmlxdWUgaWRlbnRpZmllcnMgZnJvbVxuICAgIC8vIGVhY2ggcHJvdmlkZXJcbiAgICBpZGVudGl0aWVzPzogeyBbcHJvdmlkZXIgaW4gRmlyZWJhc2VTaWduSW5Qcm92aWRlcl0/OiBzdHJpbmdbXSB9O1xuICB9O1xuXG4gIC8vIEN1c3RvbSBjbGFpbXMgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgW2NsYWltOiBzdHJpbmddOiB1bmtub3duO1xuXG4gIHVpZD86IG5ldmVyOyAvLyBUcnkgdG8gY2F0Y2ggYSBjb21tb24gbWlzdGFrZSBvZiBcInVpZFwiIChzaG91bGQgYmUgXCJzdWJcIiBpbnN0ZWFkKS5cbn1cblxuZXhwb3J0IHR5cGUgRW11bGF0b3JNb2NrVG9rZW5PcHRpb25zID0gKHsgdXNlcl9pZDogc3RyaW5nIH0gfCB7IHN1Yjogc3RyaW5nIH0pICZcbiAgUGFydGlhbDxGaXJlYmFzZUlkVG9rZW4+O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9ja1VzZXJUb2tlbihcbiAgdG9rZW46IEVtdWxhdG9yTW9ja1Rva2VuT3B0aW9ucyxcbiAgcHJvamVjdElkPzogc3RyaW5nXG4pOiBzdHJpbmcge1xuICBpZiAodG9rZW4udWlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1RoZSBcInVpZFwiIGZpZWxkIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYnkgbW9ja1VzZXJUb2tlbi4gUGxlYXNlIHVzZSBcInN1YlwiIGluc3RlYWQgZm9yIEZpcmViYXNlIEF1dGggVXNlciBJRC4nXG4gICAgKTtcbiAgfVxuICAvLyBVbnNlY3VyZWQgSldUcyB1c2UgXCJub25lXCIgYXMgdGhlIGFsZ29yaXRobS5cbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIGFsZzogJ25vbmUnLFxuICAgIHR5cGU6ICdKV1QnXG4gIH07XG5cbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJZCB8fCAnZGVtby1wcm9qZWN0JztcbiAgY29uc3QgaWF0ID0gdG9rZW4uaWF0IHx8IDA7XG4gIGNvbnN0IHN1YiA9IHRva2VuLnN1YiB8fCB0b2tlbi51c2VyX2lkO1xuICBpZiAoIXN1Yikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1vY2tVc2VyVG9rZW4gbXVzdCBjb250YWluICdzdWInIG9yICd1c2VyX2lkJyBmaWVsZCFcIik7XG4gIH1cblxuICBjb25zdCBwYXlsb2FkOiBGaXJlYmFzZUlkVG9rZW4gPSB7XG4gICAgLy8gU2V0IGFsbCByZXF1aXJlZCBmaWVsZHMgdG8gZGVjZW50IGRlZmF1bHRzXG4gICAgaXNzOiBgaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tLyR7cHJvamVjdH1gLFxuICAgIGF1ZDogcHJvamVjdCxcbiAgICBpYXQsXG4gICAgZXhwOiBpYXQgKyAzNjAwLFxuICAgIGF1dGhfdGltZTogaWF0LFxuICAgIHN1YixcbiAgICB1c2VyX2lkOiBzdWIsXG4gICAgZmlyZWJhc2U6IHtcbiAgICAgIHNpZ25faW5fcHJvdmlkZXI6ICdjdXN0b20nLFxuICAgICAgaWRlbnRpdGllczoge31cbiAgICB9LFxuXG4gICAgLy8gT3ZlcnJpZGUgd2l0aCB1c2VyIG9wdGlvbnNcbiAgICAuLi50b2tlblxuICB9O1xuXG4gIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSB0aGUgZW1wdHkgc3RyaW5nIGFzIGEgc2lnbmF0dXJlLlxuICBjb25zdCBzaWduYXR1cmUgPSAnJztcbiAgcmV0dXJuIFtcbiAgICBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhKU09OLnN0cmluZ2lmeShoZWFkZXIpKSxcbiAgICBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhKU09OLnN0cmluZ2lmeShwYXlsb2FkKSksXG4gICAgc2lnbmF0dXJlXG4gIF0uam9pbignLicpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgU3RhbmRhcmRpemVkIEZpcmViYXNlIEVycm9yLlxuICpcbiAqIFVzYWdlOlxuICpcbiAqICAgLy8gVHlwZXNjcmlwdCBzdHJpbmcgbGl0ZXJhbHMgZm9yIHR5cGUtc2FmZSBjb2Rlc1xuICogICB0eXBlIEVyciA9XG4gKiAgICAgJ3Vua25vd24nIHxcbiAqICAgICAnb2JqZWN0LW5vdC1mb3VuZCdcbiAqICAgICA7XG4gKlxuICogICAvLyBDbG9zdXJlIGVudW0gZm9yIHR5cGUtc2FmZSBlcnJvciBjb2Rlc1xuICogICAvLyBhdC1lbnVtIHtzdHJpbmd9XG4gKiAgIHZhciBFcnIgPSB7XG4gKiAgICAgVU5LTk9XTjogJ3Vua25vd24nLFxuICogICAgIE9CSkVDVF9OT1RfRk9VTkQ6ICdvYmplY3Qtbm90LWZvdW5kJyxcbiAqICAgfVxuICpcbiAqICAgbGV0IGVycm9yczogTWFwPEVyciwgc3RyaW5nPiA9IHtcbiAqICAgICAnZ2VuZXJpYy1lcnJvcic6IFwiVW5rbm93biBlcnJvclwiLFxuICogICAgICdmaWxlLW5vdC1mb3VuZCc6IFwiQ291bGQgbm90IGZpbmQgZmlsZTogeyRmaWxlfVwiLFxuICogICB9O1xuICpcbiAqICAgLy8gVHlwZS1zYWZlIGZ1bmN0aW9uIC0gbXVzdCBwYXNzIGEgdmFsaWQgZXJyb3IgY29kZSBhcyBwYXJhbS5cbiAqICAgbGV0IGVycm9yID0gbmV3IEVycm9yRmFjdG9yeTxFcnI+KCdzZXJ2aWNlJywgJ1NlcnZpY2UnLCBlcnJvcnMpO1xuICpcbiAqICAgLi4uXG4gKiAgIHRocm93IGVycm9yLmNyZWF0ZShFcnIuR0VORVJJQyk7XG4gKiAgIC4uLlxuICogICB0aHJvdyBlcnJvci5jcmVhdGUoRXJyLkZJTEVfTk9UX0ZPVU5ELCB7J2ZpbGUnOiBmaWxlTmFtZX0pO1xuICogICAuLi5cbiAqICAgLy8gU2VydmljZTogQ291bGQgbm90IGZpbGUgZmlsZTogZm9vLnR4dCAoc2VydmljZS9maWxlLW5vdC1mb3VuZCkuXG4gKlxuICogICBjYXRjaCAoZSkge1xuICogICAgIGFzc2VydChlLm1lc3NhZ2UgPT09IFwiQ291bGQgbm90IGZpbmQgZmlsZTogZm9vLnR4dC5cIik7XG4gKiAgICAgaWYgKChlIGFzIEZpcmViYXNlRXJyb3IpPy5jb2RlID09PSAnc2VydmljZS9maWxlLW5vdC1mb3VuZCcpIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IHJlYWQgZmlsZTogXCIgKyBlWydmaWxlJ10pO1xuICogICAgIH1cbiAqICAgfVxuICovXG5cbmV4cG9ydCB0eXBlIEVycm9yTWFwPEVycm9yQ29kZSBleHRlbmRzIHN0cmluZz4gPSB7XG4gIHJlYWRvbmx5IFtLIGluIEVycm9yQ29kZV06IHN0cmluZztcbn07XG5cbmNvbnN0IEVSUk9SX05BTUUgPSAnRmlyZWJhc2VFcnJvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nTGlrZSB7XG4gIHRvU3RyaW5nKCk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG4vLyBCYXNlZCBvbiBjb2RlIGZyb206XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvciNDdXN0b21fRXJyb3JfVHlwZXNcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvKiogVGhlIGN1c3RvbSBuYW1lIGZvciBhbGwgRmlyZWJhc2VFcnJvcnMuICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9IEVSUk9SX05BTUU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIFRoZSBlcnJvciBjb2RlIGZvciB0aGlzIGVycm9yLiAqL1xuICAgIHJlYWRvbmx5IGNvZGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgLyoqIEN1c3RvbSBkYXRhIGZvciB0aGlzIGVycm9yLiAqL1xuICAgIHB1YmxpYyBjdXN0b21EYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICAvLyBGaXggRm9yIEVTNVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEZpcmViYXNlRXJyb3IucHJvdG90eXBlKTtcblxuICAgIC8vIE1haW50YWlucyBwcm9wZXIgc3RhY2sgdHJhY2UgZm9yIHdoZXJlIG91ciBlcnJvciB3YXMgdGhyb3duLlxuICAgIC8vIE9ubHkgYXZhaWxhYmxlIG9uIFY4LlxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXJyb3JGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXJyb3JGYWN0b3J5PFxuICBFcnJvckNvZGUgZXh0ZW5kcyBzdHJpbmcsXG4gIEVycm9yUGFyYW1zIGV4dGVuZHMgeyByZWFkb25seSBbSyBpbiBFcnJvckNvZGVdPzogRXJyb3JEYXRhIH0gPSB7fVxuPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZTogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVycm9yczogRXJyb3JNYXA8RXJyb3JDb2RlPlxuICApIHt9XG5cbiAgY3JlYXRlPEsgZXh0ZW5kcyBFcnJvckNvZGU+KFxuICAgIGNvZGU6IEssXG4gICAgLi4uZGF0YTogSyBleHRlbmRzIGtleW9mIEVycm9yUGFyYW1zID8gW0Vycm9yUGFyYW1zW0tdXSA6IFtdXG4gICk6IEZpcmViYXNlRXJyb3Ige1xuICAgIGNvbnN0IGN1c3RvbURhdGEgPSAoZGF0YVswXSBhcyBFcnJvckRhdGEpIHx8IHt9O1xuICAgIGNvbnN0IGZ1bGxDb2RlID0gYCR7dGhpcy5zZXJ2aWNlfS8ke2NvZGV9YDtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZXJyb3JzW2NvZGVdO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IHRlbXBsYXRlID8gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlLCBjdXN0b21EYXRhKSA6ICdFcnJvcic7XG4gICAgLy8gU2VydmljZSBOYW1lOiBFcnJvciBtZXNzYWdlIChzZXJ2aWNlL2NvZGUpLlxuICAgIGNvbnN0IGZ1bGxNZXNzYWdlID0gYCR7dGhpcy5zZXJ2aWNlTmFtZX06ICR7bWVzc2FnZX0gKCR7ZnVsbENvZGV9KS5gO1xuXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRmlyZWJhc2VFcnJvcihmdWxsQ29kZSwgZnVsbE1lc3NhZ2UsIGN1c3RvbURhdGEpO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nLCBkYXRhOiBFcnJvckRhdGEpOiBzdHJpbmcge1xuICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShQQVRURVJOLCAoXywga2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyBTdHJpbmcodmFsdWUpIDogYDwke2tleX0/PmA7XG4gIH0pO1xufVxuXG5jb25zdCBQQVRURVJOID0gL1xce1xcJChbXn1dKyl9L2c7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBFdmFsdWF0ZXMgYSBKU09OIHN0cmluZyBpbnRvIGEgamF2YXNjcmlwdCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBBIHN0cmluZyBjb250YWluaW5nIEpTT04uXG4gKiBAcmV0dXJuIHsqfSBUaGUgamF2YXNjcmlwdCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgSlNPTi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzb25FdmFsKHN0cjogc3RyaW5nKTogdW5rbm93biB7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG59XG5cbi8qKlxuICogUmV0dXJucyBKU09OIHJlcHJlc2VudGluZyBhIGphdmFzY3JpcHQgb2JqZWN0LlxuICogQHBhcmFtIHsqfSBkYXRhIEphdmFzY3JpcHQgb2JqZWN0IHRvIGJlIHN0cmluZ2lmaWVkLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSlNPTiBjb250ZW50cyBvZiB0aGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KGRhdGE6IHVua25vd24pOiBzdHJpbmcge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYmFzZTY0RGVjb2RlIH0gZnJvbSAnLi9jcnlwdCc7XG5pbXBvcnQgeyBqc29uRXZhbCB9IGZyb20gJy4vanNvbic7XG5cbmludGVyZmFjZSBDbGFpbXMge1xuICBba2V5OiBzdHJpbmddOiB7fTtcbn1cblxuaW50ZXJmYWNlIERlY29kZWRUb2tlbiB7XG4gIGhlYWRlcjogb2JqZWN0O1xuICBjbGFpbXM6IENsYWltcztcbiAgZGF0YTogb2JqZWN0O1xuICBzaWduYXR1cmU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gaW50byBjb25zdGl0dWVudCBwYXJ0cy5cbiAqXG4gKiBOb3RlczpcbiAqIC0gTWF5IHJldHVybiB3aXRoIGludmFsaWQgLyBpbmNvbXBsZXRlIGNsYWltcyBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvZGUgPSBmdW5jdGlvbiAodG9rZW46IHN0cmluZyk6IERlY29kZWRUb2tlbiB7XG4gIGxldCBoZWFkZXIgPSB7fSxcbiAgICBjbGFpbXM6IENsYWltcyA9IHt9LFxuICAgIGRhdGEgPSB7fSxcbiAgICBzaWduYXR1cmUgPSAnJztcblxuICB0cnkge1xuICAgIGNvbnN0IHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcbiAgICBoZWFkZXIgPSBqc29uRXZhbChiYXNlNjREZWNvZGUocGFydHNbMF0pIHx8ICcnKSBhcyBvYmplY3Q7XG4gICAgY2xhaW1zID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzFdKSB8fCAnJykgYXMgQ2xhaW1zO1xuICAgIHNpZ25hdHVyZSA9IHBhcnRzWzJdO1xuICAgIGRhdGEgPSBjbGFpbXNbJ2QnXSB8fCB7fTtcbiAgICBkZWxldGUgY2xhaW1zWydkJ107XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXIsXG4gICAgY2xhaW1zLFxuICAgIGRhdGEsXG4gICAgc2lnbmF0dXJlXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgRGVjb2RlZFRva2VuIHtcbiAgaGVhZGVyOiBvYmplY3Q7XG4gIGNsYWltczogQ2xhaW1zO1xuICBkYXRhOiBvYmplY3Q7XG4gIHNpZ25hdHVyZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgdGltZS1iYXNlZCBjbGFpbXMuIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlXG4gKiB0b2tlbiBpcyB3aXRoaW4gdGhlIHRpbWUgd2luZG93IGF1dGhvcml6ZWQgYnkgdGhlICduYmYnIChub3QtYmVmb3JlKSBhbmQgJ2lhdCcgKGlzc3VlZC1hdCkgY2xhaW1zLlxuICpcbiAqIE5vdGVzOlxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZFRpbWVzdGFtcCA9IGZ1bmN0aW9uICh0b2tlbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGNsYWltczogQ2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XG4gIGNvbnN0IG5vdzogbnVtYmVyID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xuICBsZXQgdmFsaWRTaW5jZTogbnVtYmVyID0gMCxcbiAgICB2YWxpZFVudGlsOiBudW1iZXIgPSAwO1xuXG4gIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ25iZicpKSB7XG4gICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWyduYmYnXSBhcyBudW1iZXI7XG4gICAgfSBlbHNlIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XG4gICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWydpYXQnXSBhcyBudW1iZXI7XG4gICAgfVxuXG4gICAgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHtcbiAgICAgIHZhbGlkVW50aWwgPSBjbGFpbXNbJ2V4cCddIGFzIG51bWJlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG9rZW4gd2lsbCBleHBpcmUgYWZ0ZXIgMjRoIGJ5IGRlZmF1bHRcbiAgICAgIHZhbGlkVW50aWwgPSB2YWxpZFNpbmNlICsgODY0MDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAhIW5vdyAmJlxuICAgICEhdmFsaWRTaW5jZSAmJlxuICAgICEhdmFsaWRVbnRpbCAmJlxuICAgIG5vdyA+PSB2YWxpZFNpbmNlICYmXG4gICAgbm93IDw9IHZhbGlkVW50aWxcbiAgKTtcbn07XG5cbi8qKlxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCByZXR1cm5zIGl0cyBpc3N1ZWQgYXQgdGltZSBpZiB2YWxpZCwgbnVsbCBvdGhlcndpc2UuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gbnVsbCBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXG4gKi9cbmV4cG9ydCBjb25zdCBpc3N1ZWRBdFRpbWUgPSBmdW5jdGlvbiAodG9rZW46IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICBjb25zdCBjbGFpbXM6IENsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xuICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xuICAgIHJldHVybiBjbGFpbXNbJ2lhdCddIGFzIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyBmb3JtYXQuIEV4cGVjdHMgYSB2YWxpZCBpc3N1ZWQtYXQgdGltZS5cbiAqXG4gKiBOb3RlczpcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRGb3JtYXQgPSBmdW5jdGlvbiAodG9rZW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBkZWNvZGVkID0gZGVjb2RlKHRva2VuKSxcbiAgICBjbGFpbXMgPSBkZWNvZGVkLmNsYWltcztcblxuICByZXR1cm4gISFjbGFpbXMgJiYgdHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKTtcbn07XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gcGVlciBpbnRvIGFuIGF1dGggdG9rZW4gYW5kIGRldGVybWluZSBpZiBpdCdzIGFuIGFkbWluIGF1dGggdG9rZW4gYnkgbG9va2luZyBhdCB0aGUgY2xhaW1zIHBvcnRpb24uXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0FkbWluID0gZnVuY3Rpb24gKHRva2VuOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgY2xhaW1zOiBDbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcbiAgcmV0dXJuIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltc1snYWRtaW4nXSA9PT0gdHJ1ZTtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zPFQgZXh0ZW5kcyBvYmplY3Q+KG9iajogVCwga2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlR2V0PFQgZXh0ZW5kcyBvYmplY3QsIEsgZXh0ZW5kcyBrZXlvZiBUPihcbiAgb2JqOiBULFxuICBrZXk6IEtcbik6IFRbS10gfCB1bmRlZmluZWQge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajogb2JqZWN0KTogb2JqIGlzIHt9IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXA8SyBleHRlbmRzIHN0cmluZywgViwgVT4oXG4gIG9iajogeyBba2V5IGluIEtdOiBWIH0sXG4gIGZuOiAodmFsdWU6IFYsIGtleTogSywgb2JqOiB7IFtrZXkgaW4gS106IFYgfSkgPT4gVSxcbiAgY29udGV4dE9iaj86IHVua25vd25cbik6IHsgW2tleSBpbiBLXTogVSB9IHtcbiAgY29uc3QgcmVzOiBQYXJ0aWFsPHsgW2tleSBpbiBLXTogVSB9PiA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBmbi5jYWxsKGNvbnRleHRPYmosIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXMgYXMgeyBba2V5IGluIEtdOiBVIH07XG59XG5cbi8qKlxuICogRGVlcCBlcXVhbCB0d28gb2JqZWN0cy4gU3VwcG9ydCBBcnJheXMgYW5kIE9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwoYTogb2JqZWN0LCBiOiBvYmplY3QpOiBib29sZWFuIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gIGZvciAoY29uc3QgayBvZiBhS2V5cykge1xuICAgIGlmICghYktleXMuaW5jbHVkZXMoaykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBhUHJvcCA9IChhIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBjb25zdCBiUHJvcCA9IChiIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrXTtcbiAgICBpZiAoaXNPYmplY3QoYVByb3ApICYmIGlzT2JqZWN0KGJQcm9wKSkge1xuICAgICAgaWYgKCFkZWVwRXF1YWwoYVByb3AsIGJQcm9wKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhUHJvcCAhPT0gYlByb3ApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IGsgb2YgYktleXMpIHtcbiAgICBpZiAoIWFLZXlzLmluY2x1ZGVzKGspKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZzogdW5rbm93bik6IHRoaW5nIGlzIG9iamVjdCB7XG4gIHJldHVybiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IERlZmVycmVkIH0gZnJvbSAnLi9kZWZlcnJlZCc7XG5cbi8qKlxuICogUmVqZWN0cyBpZiB0aGUgZ2l2ZW4gcHJvbWlzZSBkb2Vzbid0IHJlc29sdmUgaW4gdGltZUluTVMgbWlsbGlzZWNvbmRzLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHByb21pc2U6IFByb21pc2U8VD4sXG4gIHRpbWVJbk1TID0gMjAwMFxuKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IGRlZmVycmVkUHJvbWlzZSA9IG5ldyBEZWZlcnJlZDxUPigpO1xuICBzZXRUaW1lb3V0KCgpID0+IGRlZmVycmVkUHJvbWlzZS5yZWplY3QoJ3RpbWVvdXQhJyksIHRpbWVJbk1TKTtcbiAgcHJvbWlzZS50aGVuKGRlZmVycmVkUHJvbWlzZS5yZXNvbHZlLCBkZWZlcnJlZFByb21pc2UucmVqZWN0KTtcbiAgcmV0dXJuIGRlZmVycmVkUHJvbWlzZS5wcm9taXNlO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIHF1ZXJ5c3RyaW5nLWZvcm1hdHRlZCBzdHJpbmcgKGUuZy4gJmFyZz12YWwmYXJnMj12YWwyKSBmcm9tIGFcbiAqIHBhcmFtcyBvYmplY3QgKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXG4gKiBOb3RlOiBZb3UgbXVzdCBwcmVwZW5kIGl0IHdpdGggPyB3aGVuIGFkZGluZyBpdCB0byBhIFVSTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5c3RyaW5nKHF1ZXJ5c3RyaW5nUGFyYW1zOiB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbn0pOiBzdHJpbmcge1xuICBjb25zdCBwYXJhbXMgPSBbXTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocXVlcnlzdHJpbmdQYXJhbXMpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKGFycmF5VmFsID0+IHtcbiAgICAgICAgcGFyYW1zLnB1c2goXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJyYXlWYWwpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPyAnJicgKyBwYXJhbXMuam9pbignJicpIDogJyc7XG59XG5cbi8qKlxuICogRGVjb2RlcyBhIHF1ZXJ5c3RyaW5nIChlLmcuID9hcmc9dmFsJmFyZzI9dmFsMikgaW50byBhIHBhcmFtcyBvYmplY3RcbiAqIChlLmcuIHthcmc6ICd2YWwnLCBhcmcyOiAndmFsMid9KVxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlzdHJpbmdEZWNvZGUocXVlcnlzdHJpbmc6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCBvYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgY29uc3QgdG9rZW5zID0gcXVlcnlzdHJpbmcucmVwbGFjZSgvXlxcPy8sICcnKS5zcGxpdCgnJicpO1xuXG4gIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHRva2VuLnNwbGl0KCc9Jyk7XG4gICAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KGtleSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgdGhlIHF1ZXJ5IHN0cmluZyBwYXJ0IG9mIGEgVVJMLCBpbmNsdWRpbmcgdGhlIGxlYWRpbmcgcXVlc3Rpb24gbWFyayAoaWYgcHJlc2VudCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UXVlcnlzdHJpbmcodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBxdWVyeVN0YXJ0ID0gdXJsLmluZGV4T2YoJz8nKTtcbiAgaWYgKCFxdWVyeVN0YXJ0KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNvbnN0IGZyYWdtZW50U3RhcnQgPSB1cmwuaW5kZXhPZignIycsIHF1ZXJ5U3RhcnQpO1xuICByZXR1cm4gdXJsLnN1YnN0cmluZyhcbiAgICBxdWVyeVN0YXJ0LFxuICAgIGZyYWdtZW50U3RhcnQgPiAwID8gZnJhZ21lbnRTdGFydCA6IHVuZGVmaW5lZFxuICApO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBTSEEtMSBjcnlwdG9ncmFwaGljIGhhc2guXG4gKiBWYXJpYWJsZSBuYW1lcyBmb2xsb3cgdGhlIG5vdGF0aW9uIGluIEZJUFMgUFVCIDE4MC0zOlxuICogaHR0cDovL2NzcmMubmlzdC5nb3YvcHVibGljYXRpb25zL2ZpcHMvZmlwczE4MC0zL2ZpcHMxODAtM19maW5hbC5wZGYuXG4gKlxuICogVXNhZ2U6XG4gKiAgIHZhciBzaGExID0gbmV3IHNoYTEoKTtcbiAqICAgc2hhMS51cGRhdGUoYnl0ZXMpO1xuICogICB2YXIgaGFzaCA9IHNoYTEuZGlnZXN0KCk7XG4gKlxuICogUGVyZm9ybWFuY2U6XG4gKiAgIENocm9tZSAyMzogICB+NDAwIE1iaXQvc1xuICogICBGaXJlZm94IDE2OiAgfjI1MCBNYml0L3NcbiAqXG4gKi9cblxuLyoqXG4gKiBTSEEtMSBjcnlwdG9ncmFwaGljIGhhc2ggY29uc3RydWN0b3IuXG4gKlxuICogVGhlIHByb3BlcnRpZXMgZGVjbGFyZWQgaGVyZSBhcmUgZGlzY3Vzc2VkIGluIHRoZSBhYm92ZSBhbGdvcml0aG0gZG9jdW1lbnQuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBmaW5hbFxuICogQHN0cnVjdFxuICovXG5leHBvcnQgY2xhc3MgU2hhMSB7XG4gIC8qKlxuICAgKiBIb2xkcyB0aGUgcHJldmlvdXMgdmFsdWVzIG9mIGFjY3VtdWxhdGVkIHZhcmlhYmxlcyBhLWUgaW4gdGhlIGNvbXByZXNzX1xuICAgKiBmdW5jdGlvbi5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgY2hhaW5fOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBIGJ1ZmZlciBob2xkaW5nIHRoZSBwYXJ0aWFsbHkgY29tcHV0ZWQgaGFzaCByZXN1bHQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGJ1Zl86IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIDgwIGJ5dGVzLCBlYWNoIGEgcGFydCBvZiB0aGUgbWVzc2FnZSB0byBiZSBoYXNoZWQuICBSZWZlcnJlZCB0b1xuICAgKiBhcyB0aGUgbWVzc2FnZSBzY2hlZHVsZSBpbiB0aGUgZG9jcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgV186IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIGRhdGEgbmVlZGVkIHRvIHBhZCBtZXNzYWdlcyBsZXNzIHRoYW4gNjQgYnl0ZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIHBhZF86IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlIHtudW1iZXJ9XG4gICAqL1xuICBwcml2YXRlIGluYnVmXzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogQHByaXZhdGUge251bWJlcn1cbiAgICovXG4gIHByaXZhdGUgdG90YWxfOiBudW1iZXIgPSAwO1xuXG4gIGJsb2NrU2l6ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmxvY2tTaXplID0gNTEyIC8gODtcblxuICAgIHRoaXMucGFkX1swXSA9IDEyODtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmxvY2tTaXplOyArK2kpIHtcbiAgICAgIHRoaXMucGFkX1tpXSA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFpbl9bMF0gPSAweDY3NDUyMzAxO1xuICAgIHRoaXMuY2hhaW5fWzFdID0gMHhlZmNkYWI4OTtcbiAgICB0aGlzLmNoYWluX1syXSA9IDB4OThiYWRjZmU7XG4gICAgdGhpcy5jaGFpbl9bM10gPSAweDEwMzI1NDc2O1xuICAgIHRoaXMuY2hhaW5fWzRdID0gMHhjM2QyZTFmMDtcblxuICAgIHRoaXMuaW5idWZfID0gMDtcbiAgICB0aGlzLnRvdGFsXyA9IDA7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgY29tcHJlc3MgaGVscGVyIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gYnVmIEJsb2NrIHRvIGNvbXByZXNzLlxuICAgKiBAcGFyYW0gb2Zmc2V0IE9mZnNldCBvZiB0aGUgYmxvY2sgaW4gdGhlIGJ1ZmZlci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbXByZXNzXyhidWY6IG51bWJlcltdIHwgVWludDhBcnJheSB8IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgY29uc3QgVyA9IHRoaXMuV187XG5cbiAgICAvLyBnZXQgMTYgYmlnIGVuZGlhbiB3b3Jkc1xuICAgIGlmICh0eXBlb2YgYnVmID09PSAnc3RyaW5nJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIC8vIFRPRE8odXNlcik6IFtidWcgODE0MDEyMl0gUmVjZW50IHZlcnNpb25zIG9mIFNhZmFyaSBmb3IgTWFjIE9TIGFuZCBpT1NcbiAgICAgICAgLy8gaGF2ZSBhIGJ1ZyB0aGF0IHR1cm5zIHRoZSBwb3N0LWluY3JlbWVudCArKyBvcGVyYXRvciBpbnRvIHByZS1pbmNyZW1lbnRcbiAgICAgICAgLy8gZHVyaW5nIEpJVCBjb21waWxhdGlvbi4gIFdlIGhhdmUgY29kZSB0aGF0IGRlcGVuZHMgaGVhdmlseSBvbiBTSEEtMSBmb3JcbiAgICAgICAgLy8gY29ycmVjdG5lc3MgYW5kIHdoaWNoIGlzIGFmZmVjdGVkIGJ5IHRoaXMgYnVnLCBzbyBJJ3ZlIHJlbW92ZWQgYWxsIHVzZXNcbiAgICAgICAgLy8gb2YgcG9zdC1pbmNyZW1lbnQgKysgaW4gd2hpY2ggdGhlIHJlc3VsdCB2YWx1ZSBpcyB1c2VkLiAgV2UgY2FuIHJldmVydFxuICAgICAgICAvLyB0aGlzIGNoYW5nZSBvbmNlIHRoZSBTYWZhcmkgYnVnXG4gICAgICAgIC8vIChodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA5MDM2KSBoYXMgYmVlbiBmaXhlZCBhbmRcbiAgICAgICAgLy8gbW9zdCBjbGllbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxuICAgICAgICBXW2ldID1cbiAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0KSA8PCAyNCkgfFxuICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQgKyAxKSA8PCAxNikgfFxuICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQgKyAyKSA8PCA4KSB8XG4gICAgICAgICAgYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMyk7XG4gICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgV1tpXSA9XG4gICAgICAgICAgKGJ1ZltvZmZzZXRdIDw8IDI0KSB8XG4gICAgICAgICAgKGJ1ZltvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgICAgIChidWZbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgICAgIGJ1ZltvZmZzZXQgKyAzXTtcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXhwYW5kIHRvIDgwIHdvcmRzXG4gICAgZm9yIChsZXQgaSA9IDE2OyBpIDwgODA7IGkrKykge1xuICAgICAgY29uc3QgdCA9IFdbaSAtIDNdIF4gV1tpIC0gOF0gXiBXW2kgLSAxNF0gXiBXW2kgLSAxNl07XG4gICAgICBXW2ldID0gKCh0IDw8IDEpIHwgKHQgPj4+IDMxKSkgJiAweGZmZmZmZmZmO1xuICAgIH1cblxuICAgIGxldCBhID0gdGhpcy5jaGFpbl9bMF07XG4gICAgbGV0IGIgPSB0aGlzLmNoYWluX1sxXTtcbiAgICBsZXQgYyA9IHRoaXMuY2hhaW5fWzJdO1xuICAgIGxldCBkID0gdGhpcy5jaGFpbl9bM107XG4gICAgbGV0IGUgPSB0aGlzLmNoYWluX1s0XTtcbiAgICBsZXQgZiwgaztcblxuICAgIC8vIFRPRE8odXNlcik6IFRyeSB0byB1bnJvbGwgdGhpcyBsb29wIHRvIHNwZWVkIHVwIHRoZSBjb21wdXRhdGlvbi5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGlmIChpIDwgNDApIHtcbiAgICAgICAgaWYgKGkgPCAyMCkge1xuICAgICAgICAgIGYgPSBkIF4gKGIgJiAoYyBeIGQpKTtcbiAgICAgICAgICBrID0gMHg1YTgyNzk5OTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmID0gYiBeIGMgXiBkO1xuICAgICAgICAgIGsgPSAweDZlZDllYmExO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaSA8IDYwKSB7XG4gICAgICAgICAgZiA9IChiICYgYykgfCAoZCAmIChiIHwgYykpO1xuICAgICAgICAgIGsgPSAweDhmMWJiY2RjO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGYgPSBiIF4gYyBeIGQ7XG4gICAgICAgICAgayA9IDB4Y2E2MmMxZDY7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdCA9ICgoKGEgPDwgNSkgfCAoYSA+Pj4gMjcpKSArIGYgKyBlICsgayArIFdbaV0pICYgMHhmZmZmZmZmZjtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gKChiIDw8IDMwKSB8IChiID4+PiAyKSkgJiAweGZmZmZmZmZmO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gdDtcbiAgICB9XG5cbiAgICB0aGlzLmNoYWluX1swXSA9ICh0aGlzLmNoYWluX1swXSArIGEpICYgMHhmZmZmZmZmZjtcbiAgICB0aGlzLmNoYWluX1sxXSA9ICh0aGlzLmNoYWluX1sxXSArIGIpICYgMHhmZmZmZmZmZjtcbiAgICB0aGlzLmNoYWluX1syXSA9ICh0aGlzLmNoYWluX1syXSArIGMpICYgMHhmZmZmZmZmZjtcbiAgICB0aGlzLmNoYWluX1szXSA9ICh0aGlzLmNoYWluX1szXSArIGQpICYgMHhmZmZmZmZmZjtcbiAgICB0aGlzLmNoYWluX1s0XSA9ICh0aGlzLmNoYWluX1s0XSArIGUpICYgMHhmZmZmZmZmZjtcbiAgfVxuXG4gIHVwZGF0ZShieXRlcz86IG51bWJlcltdIHwgVWludDhBcnJheSB8IHN0cmluZywgbGVuZ3RoPzogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gVE9ETyhqb2hubGVueik6IHRpZ2h0ZW4gdGhlIGZ1bmN0aW9uIHNpZ25hdHVyZSBhbmQgcmVtb3ZlIHRoaXMgY2hlY2tcbiAgICBpZiAoYnl0ZXMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGVuZ3RoID0gYnl0ZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aE1pbnVzQmxvY2sgPSBsZW5ndGggLSB0aGlzLmJsb2NrU2l6ZTtcbiAgICBsZXQgbiA9IDA7XG4gICAgLy8gVXNpbmcgbG9jYWwgaW5zdGVhZCBvZiBtZW1iZXIgdmFyaWFibGVzIGdpdmVzIH41JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYuXG4gICAgY29uc3QgYnVmID0gdGhpcy5idWZfO1xuICAgIGxldCBpbmJ1ZiA9IHRoaXMuaW5idWZfO1xuXG4gICAgLy8gVGhlIG91dGVyIHdoaWxlIGxvb3Agc2hvdWxkIGV4ZWN1dGUgYXQgbW9zdCB0d2ljZS5cbiAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xuICAgICAgLy8gV2hlbiB3ZSBoYXZlIG5vIGRhdGEgaW4gdGhlIGJsb2NrIHRvIHRvcCB1cCwgd2UgY2FuIGRpcmVjdGx5IHByb2Nlc3MgdGhlXG4gICAgICAvLyBpbnB1dCBidWZmZXIgKGFzc3VtaW5nIGl0IGNvbnRhaW5zIHN1ZmZpY2llbnQgZGF0YSkuIFRoaXMgZ2l2ZXMgfjI1JVxuICAgICAgLy8gc3BlZWR1cCBvbiBDaHJvbWUgMjMgYW5kIH4xNSUgc3BlZWR1cCBvbiBGaXJlZm94IDE2LCBidXQgcmVxdWlyZXMgdGhhdFxuICAgICAgLy8gdGhlIGRhdGEgaXMgcHJvdmlkZWQgaW4gbGFyZ2UgY2h1bmtzIChvciBpbiBtdWx0aXBsZXMgb2YgNjQgYnl0ZXMpLlxuICAgICAgaWYgKGluYnVmID09PSAwKSB7XG4gICAgICAgIHdoaWxlIChuIDw9IGxlbmd0aE1pbnVzQmxvY2spIHtcbiAgICAgICAgICB0aGlzLmNvbXByZXNzXyhieXRlcywgbik7XG4gICAgICAgICAgbiArPSB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xuICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlcy5jaGFyQ29kZUF0KG4pO1xuICAgICAgICAgICsraW5idWY7XG4gICAgICAgICAgKytuO1xuICAgICAgICAgIGlmIChpbmJ1ZiA9PT0gdGhpcy5ibG9ja1NpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XG4gICAgICAgICAgICBpbmJ1ZiA9IDA7XG4gICAgICAgICAgICAvLyBKdW1wIHRvIHRoZSBvdXRlciBsb29wIHNvIHdlIHVzZSB0aGUgZnVsbC1ibG9jayBvcHRpbWl6YXRpb24uXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgYnVmW2luYnVmXSA9IGJ5dGVzW25dO1xuICAgICAgICAgICsraW5idWY7XG4gICAgICAgICAgKytuO1xuICAgICAgICAgIGlmIChpbmJ1ZiA9PT0gdGhpcy5ibG9ja1NpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XG4gICAgICAgICAgICBpbmJ1ZiA9IDA7XG4gICAgICAgICAgICAvLyBKdW1wIHRvIHRoZSBvdXRlciBsb29wIHNvIHdlIHVzZSB0aGUgZnVsbC1ibG9jayBvcHRpbWl6YXRpb24uXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmluYnVmXyA9IGluYnVmO1xuICAgIHRoaXMudG90YWxfICs9IGxlbmd0aDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGlnZXN0KCk6IG51bWJlcltdIHtcbiAgICBjb25zdCBkaWdlc3Q6IG51bWJlcltdID0gW107XG4gICAgbGV0IHRvdGFsQml0cyA9IHRoaXMudG90YWxfICogODtcblxuICAgIC8vIEFkZCBwYWQgMHg4MCAweDAwKi5cbiAgICBpZiAodGhpcy5pbmJ1Zl8gPCA1Nikge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCA1NiAtIHRoaXMuaW5idWZfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCB0aGlzLmJsb2NrU2l6ZSAtICh0aGlzLmluYnVmXyAtIDU2KSk7XG4gICAgfVxuXG4gICAgLy8gQWRkICMgYml0cy5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5ibG9ja1NpemUgLSAxOyBpID49IDU2OyBpLS0pIHtcbiAgICAgIHRoaXMuYnVmX1tpXSA9IHRvdGFsQml0cyAmIDI1NTtcbiAgICAgIHRvdGFsQml0cyAvPSAyNTY7IC8vIERvbid0IHVzZSBiaXQtc2hpZnRpbmcgaGVyZSFcbiAgICB9XG5cbiAgICB0aGlzLmNvbXByZXNzXyh0aGlzLmJ1Zl8pO1xuXG4gICAgbGV0IG4gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMjQ7IGogPj0gMDsgaiAtPSA4KSB7XG4gICAgICAgIGRpZ2VzdFtuXSA9ICh0aGlzLmNoYWluX1tpXSA+PiBqKSAmIDI1NTtcbiAgICAgICAgKytuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlnZXN0O1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRGbjxUPiA9ICh2YWx1ZTogVCkgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIEVycm9yRm4gPSAoZXJyb3I6IEVycm9yKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgQ29tcGxldGVGbiA9ICgpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2ZXI8VD4ge1xuICAvLyBDYWxsZWQgb25jZSBmb3IgZWFjaCB2YWx1ZSBpbiBhIHN0cmVhbSBvZiB2YWx1ZXMuXG4gIG5leHQ6IE5leHRGbjxUPjtcblxuICAvLyBBIHN0cmVhbSB0ZXJtaW5hdGVzIGJ5IGEgc2luZ2xlIGNhbGwgdG8gRUlUSEVSIGVycm9yKCkgb3IgY29tcGxldGUoKS5cbiAgZXJyb3I6IEVycm9yRm47XG5cbiAgLy8gTm8gZXZlbnRzIHdpbGwgYmUgc2VudCB0byBuZXh0KCkgb25jZSBjb21wbGV0ZSgpIGlzIGNhbGxlZC5cbiAgY29tcGxldGU6IENvbXBsZXRlRm47XG59XG5cbmV4cG9ydCB0eXBlIFBhcnRpYWxPYnNlcnZlcjxUPiA9IFBhcnRpYWw8T2JzZXJ2ZXI8VD4+O1xuXG4vLyBUT0RPOiBTdXBwb3J0IGFsc28gVW5zdWJzY3JpYmUudW5zdWJzY3JpYmU/XG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZSA9ICgpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhlIFN1YnNjcmliZSBpbnRlcmZhY2UgaGFzIHR3byBmb3JtcyAtIHBhc3NpbmcgdGhlIGlubGluZSBmdW5jdGlvblxuICogY2FsbGJhY2tzLCBvciBhIG9iamVjdCBpbnRlcmZhY2Ugd2l0aCBjYWxsYmFjayBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmliZTxUPiB7XG4gIChuZXh0PzogTmV4dEZuPFQ+LCBlcnJvcj86IEVycm9yRm4sIGNvbXBsZXRlPzogQ29tcGxldGVGbik6IFVuc3Vic2NyaWJlO1xuICAob2JzZXJ2ZXI6IFBhcnRpYWxPYnNlcnZlcjxUPik6IFVuc3Vic2NyaWJlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmFibGU8VD4ge1xuICAvLyBTdWJzY3JpYmUgbWV0aG9kXG4gIHN1YnNjcmliZTogU3Vic2NyaWJlPFQ+O1xufVxuXG5leHBvcnQgdHlwZSBFeGVjdXRvcjxUPiA9IChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHZvaWQ7XG5cbi8qKlxuICogSGVscGVyIHRvIG1ha2UgYSBTdWJzY3JpYmUgZnVuY3Rpb24gKGp1c3QgbGlrZSBQcm9taXNlIGhlbHBzIG1ha2UgYVxuICogVGhlbmFibGUpLlxuICpcbiAqIEBwYXJhbSBleGVjdXRvciBGdW5jdGlvbiB3aGljaCBjYW4gbWFrZSBjYWxscyB0byBhIHNpbmdsZSBPYnNlcnZlclxuICogICAgIGFzIGEgcHJveHkuXG4gKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdWJzY3JpYmU8VD4oXG4gIGV4ZWN1dG9yOiBFeGVjdXRvcjxUPixcbiAgb25Ob09ic2VydmVycz86IEV4ZWN1dG9yPFQ+XG4pOiBTdWJzY3JpYmU8VD4ge1xuICBjb25zdCBwcm94eSA9IG5ldyBPYnNlcnZlclByb3h5PFQ+KGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKTtcbiAgcmV0dXJuIHByb3h5LnN1YnNjcmliZS5iaW5kKHByb3h5KTtcbn1cblxuLyoqXG4gKiBJbXBsZW1lbnQgZmFuLW91dCBmb3IgYW55IG51bWJlciBvZiBPYnNlcnZlcnMgYXR0YWNoZWQgdmlhIGEgc3Vic2NyaWJlXG4gKiBmdW5jdGlvbi5cbiAqL1xuY2xhc3MgT2JzZXJ2ZXJQcm94eTxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+IHtcbiAgcHJpdmF0ZSBvYnNlcnZlcnM6IEFycmF5PE9ic2VydmVyPFQ+PiB8IHVuZGVmaW5lZCA9IFtdO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlczogVW5zdWJzY3JpYmVbXSA9IFtdO1xuICBwcml2YXRlIG9uTm9PYnNlcnZlcnM6IEV4ZWN1dG9yPFQ+IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIG9ic2VydmVyQ291bnQgPSAwO1xuICAvLyBNaWNyby10YXNrIHNjaGVkdWxpbmcgYnkgY2FsbGluZyB0YXNrLnRoZW4oKS5cbiAgcHJpdmF0ZSB0YXNrID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHByaXZhdGUgZmluYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgZmluYWxFcnJvcj86IEVycm9yO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcbiAgICogICAgIGFzIGEgcHJveHkuXG4gICAqIEBwYXJhbSBvbk5vT2JzZXJ2ZXJzIENhbGxiYWNrIHdoZW4gY291bnQgb2YgT2JzZXJ2ZXJzIGdvZXMgdG8gemVyby5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yOiBFeGVjdXRvcjxUPiwgb25Ob09ic2VydmVycz86IEV4ZWN1dG9yPFQ+KSB7XG4gICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gb25Ob09ic2VydmVycztcbiAgICAvLyBDYWxsIHRoZSBleGVjdXRvciBhc3luY2hyb25vdXNseSBzbyBzdWJzY3JpYmVycyB0aGF0IGFyZSBjYWxsZWRcbiAgICAvLyBzeW5jaHJvbm91c2x5IGFmdGVyIHRoZSBjcmVhdGlvbiBvZiB0aGUgc3Vic2NyaWJlIGZ1bmN0aW9uXG4gICAgLy8gY2FuIHN0aWxsIHJlY2VpdmUgdGhlIHZlcnkgZmlyc3QgdmFsdWUgZ2VuZXJhdGVkIGluIHRoZSBleGVjdXRvci5cbiAgICB0aGlzLnRhc2tcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZXhlY3V0b3IodGhpcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICB0aGlzLmVycm9yKGUpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBlcnJvcihlcnJvcjogRXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XG4gICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XG4gICAgfSk7XG4gICAgdGhpcy5jbG9zZShlcnJvcik7XG4gIH1cblxuICBjb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgYW4gT2JzZXJ2ZXIgdG8gdGhlIGZhbi1vdXQgbGlzdC5cbiAgICpcbiAgICogLSBXZSByZXF1aXJlIHRoYXQgbm8gZXZlbnQgaXMgc2VudCB0byBhIHN1YnNjcmliZXIgc3ljaHJvbm91c2x5IHRvIHRoZWlyXG4gICAqICAgY2FsbCB0byBzdWJzY3JpYmUoKS5cbiAgICovXG4gIHN1YnNjcmliZShcbiAgICBuZXh0T3JPYnNlcnZlcj86IE5leHRGbjxUPiB8IFBhcnRpYWxPYnNlcnZlcjxUPixcbiAgICBlcnJvcj86IEVycm9yRm4sXG4gICAgY29tcGxldGU/OiBDb21wbGV0ZUZuXG4gICk6IFVuc3Vic2NyaWJlIHtcbiAgICBsZXQgb2JzZXJ2ZXI6IE9ic2VydmVyPFQ+O1xuXG4gICAgaWYgKFxuICAgICAgbmV4dE9yT2JzZXJ2ZXIgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgZXJyb3IgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgY29tcGxldGUgPT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIE9ic2VydmVyLicpO1xuICAgIH1cblxuICAgIC8vIEFzc2VtYmxlIGFuIE9ic2VydmVyIG9iamVjdCB3aGVuIHBhc3NlZCBhcyBjYWxsYmFjayBmdW5jdGlvbnMuXG4gICAgaWYgKFxuICAgICAgaW1wbGVtZW50c0FueU1ldGhvZHMobmV4dE9yT2JzZXJ2ZXIgYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sIFtcbiAgICAgICAgJ25leHQnLFxuICAgICAgICAnZXJyb3InLFxuICAgICAgICAnY29tcGxldGUnXG4gICAgICBdKVxuICAgICkge1xuICAgICAgb2JzZXJ2ZXIgPSBuZXh0T3JPYnNlcnZlciBhcyBPYnNlcnZlcjxUPjtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JzZXJ2ZXIgPSB7XG4gICAgICAgIG5leHQ6IG5leHRPck9ic2VydmVyIGFzIE5leHRGbjxUPixcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGNvbXBsZXRlXG4gICAgICB9IGFzIE9ic2VydmVyPFQ+O1xuICAgIH1cblxuICAgIGlmIChvYnNlcnZlci5uZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9ic2VydmVyLm5leHQgPSBub29wIGFzIE5leHRGbjxUPjtcbiAgICB9XG4gICAgaWYgKG9ic2VydmVyLmVycm9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9ic2VydmVyLmVycm9yID0gbm9vcCBhcyBFcnJvckZuO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2ZXIuY29tcGxldGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUgPSBub29wIGFzIENvbXBsZXRlRm47XG4gICAgfVxuXG4gICAgY29uc3QgdW5zdWIgPSB0aGlzLnVuc3Vic2NyaWJlT25lLmJpbmQodGhpcywgdGhpcy5vYnNlcnZlcnMhLmxlbmd0aCk7XG5cbiAgICAvLyBBdHRlbXB0IHRvIHN1YnNjcmliZSB0byBhIHRlcm1pbmF0ZWQgT2JzZXJ2YWJsZSAtIHdlXG4gICAgLy8ganVzdCByZXNwb25kIHRvIHRoZSBPYnNlcnZlciB3aXRoIHRoZSBmaW5hbCBlcnJvciBvciBjb21wbGV0ZVxuICAgIC8vIGV2ZW50LlxuICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh0aGlzLmZpbmFsRXJyb3IpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHRoaXMuZmluYWxFcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMub2JzZXJ2ZXJzIS5wdXNoKG9ic2VydmVyIGFzIE9ic2VydmVyPFQ+KTtcblxuICAgIHJldHVybiB1bnN1YjtcbiAgfVxuXG4gIC8vIFVuc3Vic2NyaWJlIGlzIHN5bmNocm9ub3VzIC0gd2UgZ3VhcmFudGVlIHRoYXQgbm8gZXZlbnRzIGFyZSBzZW50IHRvXG4gIC8vIGFueSB1bnN1YnNjcmliZWQgT2JzZXJ2ZXIuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVPbmUoaTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJzID09PSB1bmRlZmluZWQgfHwgdGhpcy5vYnNlcnZlcnNbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tpXTtcblxuICAgIHRoaXMub2JzZXJ2ZXJDb3VudCAtPSAxO1xuICAgIGlmICh0aGlzLm9ic2VydmVyQ291bnQgPT09IDAgJiYgdGhpcy5vbk5vT2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25Ob09ic2VydmVycyh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvckVhY2hPYnNlcnZlcihmbjogKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xuICAgICAgLy8gQWxyZWFkeSBjbG9zZWQgYnkgcHJldmlvdXMgZXZlbnQuLi4uanVzdCBlYXQgdGhlIGFkZGl0aW9uYWwgdmFsdWVzLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIHNlbmRPbmUgY2FsbHMgYXN5bmNocm9ub3VzbHkgLSB0aGVyZSBpcyBubyBjaGFuY2UgdGhhdFxuICAgIC8vIHRoaXMub2JzZXJ2ZXJzIHdpbGwgYmVjb21lIHVuZGVmaW5lZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2JzZXJ2ZXJzIS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zZW5kT25lKGksIGZuKTtcbiAgICB9XG4gIH1cblxuICAvLyBDYWxsIHRoZSBPYnNlcnZlciB2aWEgb25lIG9mIGl0J3MgY2FsbGJhY2sgZnVuY3Rpb24uIFdlIGFyZSBjYXJlZnVsIHRvXG4gIC8vIGNvbmZpcm0gdGhhdCB0aGUgb2JzZXJ2ZSBoYXMgbm90IGJlZW4gdW5zdWJzY3JpYmVkIHNpbmNlIHRoaXMgYXN5bmNocm9ub3VzXG4gIC8vIGZ1bmN0aW9uIGhhZCBiZWVuIHF1ZXVlZC5cbiAgcHJpdmF0ZSBzZW5kT25lKGk6IG51bWJlciwgZm46IChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICAvLyBFeGVjdXRlIHRoZSBjYWxsYmFjayBhc3luY2hyb25vdXNseVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9ic2VydmVyc1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm4odGhpcy5vYnNlcnZlcnNbaV0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gSWdub3JlIGV4Y2VwdGlvbnMgcmFpc2VkIGluIE9ic2VydmVycyBvciBtaXNzaW5nIG1ldGhvZHMgb2YgYW5cbiAgICAgICAgICAvLyBPYnNlcnZlci5cbiAgICAgICAgICAvLyBMb2cgZXJyb3IgdG8gY29uc29sZS4gYi8zMTQwNDgwNlxuICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2UoZXJyPzogRXJyb3IpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maW5hbGl6ZWQgPSB0cnVlO1xuICAgIGlmIChlcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5maW5hbEVycm9yID0gZXJyO1xuICAgIH1cbiAgICAvLyBQcm94eSBpcyBubyBsb25nZXIgbmVlZGVkIC0gZ2FyYmFnZSBjb2xsZWN0IHJlZmVyZW5jZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vYnNlcnZlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm9uTm9PYnNlcnZlcnMgPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqIFR1cm4gc3luY2hyb25vdXMgZnVuY3Rpb24gaW50byBvbmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5LiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBmdW5jdGlvbiBhc3luYyhmbjogRnVuY3Rpb24sIG9uRXJyb3I/OiBFcnJvckZuKTogRnVuY3Rpb24ge1xuICByZXR1cm4gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgIFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgb2JqZWN0IHBhc3NlZCBpbiBpbXBsZW1lbnRzIGFueSBvZiB0aGUgbmFtZWQgbWV0aG9kcy5cbiAqL1xuZnVuY3Rpb24gaW1wbGVtZW50c0FueU1ldGhvZHMoXG4gIG9iajogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sXG4gIG1ldGhvZHM6IHN0cmluZ1tdXG4pOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcbiAgICBpZiAobWV0aG9kIGluIG9iaiAmJiB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpOiB2b2lkIHtcbiAgLy8gZG8gbm90aGluZ1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQ2hlY2sgdG8gbWFrZSBzdXJlIHRoZSBhcHByb3ByaWF0ZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwcm92aWRlZCBmb3IgYSBwdWJsaWMgZnVuY3Rpb24uXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgaXQgZmFpbHMuXG4gKlxuICogQHBhcmFtIGZuTmFtZSBUaGUgZnVuY3Rpb24gbmFtZVxuICogQHBhcmFtIG1pbkNvdW50IFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgdG8gYWxsb3cgZm9yIHRoZSBmdW5jdGlvbiBjYWxsXG4gKiBAcGFyYW0gbWF4Q291bnQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50IHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxuICogQHBhcmFtIGFyZ0NvdW50IFRoZSBhY3R1YWwgbnVtYmVyIG9mIGFyZ3VtZW50cyBwcm92aWRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQXJnQ291bnQgPSBmdW5jdGlvbiAoXG4gIGZuTmFtZTogc3RyaW5nLFxuICBtaW5Db3VudDogbnVtYmVyLFxuICBtYXhDb3VudDogbnVtYmVyLFxuICBhcmdDb3VudDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgbGV0IGFyZ0Vycm9yO1xuICBpZiAoYXJnQ291bnQgPCBtaW5Db3VudCkge1xuICAgIGFyZ0Vycm9yID0gJ2F0IGxlYXN0ICcgKyBtaW5Db3VudDtcbiAgfSBlbHNlIGlmIChhcmdDb3VudCA+IG1heENvdW50KSB7XG4gICAgYXJnRXJyb3IgPSBtYXhDb3VudCA9PT0gMCA/ICdub25lJyA6ICdubyBtb3JlIHRoYW4gJyArIG1heENvdW50O1xuICB9XG4gIGlmIChhcmdFcnJvcikge1xuICAgIGNvbnN0IGVycm9yID1cbiAgICAgIGZuTmFtZSArXG4gICAgICAnIGZhaWxlZDogV2FzIGNhbGxlZCB3aXRoICcgK1xuICAgICAgYXJnQ291bnQgK1xuICAgICAgKGFyZ0NvdW50ID09PSAxID8gJyBhcmd1bWVudC4nIDogJyBhcmd1bWVudHMuJykgK1xuICAgICAgJyBFeHBlY3RzICcgK1xuICAgICAgYXJnRXJyb3IgK1xuICAgICAgJy4nO1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHRvIHByZWZpeCBhbiBlcnJvciBtZXNzYWdlIGFib3V0IGZhaWxlZCBhcmd1bWVudCB2YWxpZGF0aW9uXG4gKlxuICogQHBhcmFtIGZuTmFtZSBUaGUgZnVuY3Rpb24gbmFtZVxuICogQHBhcmFtIGFyZ05hbWUgVGhlIG5hbWUgb2YgdGhlIGFyZ3VtZW50XG4gKiBAcmV0dXJuIFRoZSBwcmVmaXggdG8gYWRkIHRvIHRoZSBlcnJvciB0aHJvd24gZm9yIHZhbGlkYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvclByZWZpeChmbk5hbWU6IHN0cmluZywgYXJnTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2ZuTmFtZX0gZmFpbGVkOiAke2FyZ05hbWV9IGFyZ3VtZW50IGA7XG59XG5cbi8qKlxuICogQHBhcmFtIGZuTmFtZVxuICogQHBhcmFtIGFyZ3VtZW50TnVtYmVyXG4gKiBAcGFyYW0gbmFtZXNwYWNlXG4gKiBAcGFyYW0gb3B0aW9uYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTmFtZXNwYWNlKFxuICBmbk5hbWU6IHN0cmluZyxcbiAgbmFtZXNwYWNlOiBzdHJpbmcsXG4gIG9wdGlvbmFsOiBib29sZWFuXG4pOiB2b2lkIHtcbiAgaWYgKG9wdGlvbmFsICYmICFuYW1lc3BhY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgLy9UT0RPOiBJIHNob3VsZCBkbyBtb3JlIHZhbGlkYXRpb24gaGVyZS4gV2Ugb25seSBhbGxvdyBjZXJ0YWluIGNoYXJzIGluIG5hbWVzcGFjZXMuXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgZXJyb3JQcmVmaXgoZm5OYW1lLCAnbmFtZXNwYWNlJykgKyAnbXVzdCBiZSBhIHZhbGlkIGZpcmViYXNlIG5hbWVzcGFjZS4nXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDYWxsYmFjayhcbiAgZm5OYW1lOiBzdHJpbmcsXG4gIGFyZ3VtZW50TmFtZTogc3RyaW5nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICBjYWxsYmFjazogRnVuY3Rpb24sXG4gIG9wdGlvbmFsOiBib29sZWFuXG4pOiB2b2lkIHtcbiAgaWYgKG9wdGlvbmFsICYmICFjYWxsYmFjaykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE5hbWUpICsgJ211c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi4nXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0T2JqZWN0KFxuICBmbk5hbWU6IHN0cmluZyxcbiAgYXJndW1lbnROYW1lOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHVua25vd24sXG4gIG9wdGlvbmFsOiBib29sZWFuXG4pOiB2b2lkIHtcbiAgaWYgKG9wdGlvbmFsICYmICFjb250ZXh0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgY29udGV4dCAhPT0gJ29iamVjdCcgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgY29udGV4dCBvYmplY3QuJ1xuICAgICk7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL2Fzc2VydCc7XG5cbi8vIENvZGUgb3JpZ2luYWxseSBjYW1lIGZyb20gZ29vZy5jcnlwdC5zdHJpbmdUb1V0ZjhCeXRlQXJyYXksIGJ1dCBmb3Igc29tZSByZWFzb24gdGhleVxuLy8gYXV0b21hdGljYWxseSByZXBsYWNlZCAnXFxyXFxuJyB3aXRoICdcXG4nLCBhbmQgdGhleSBkaWRuJ3QgaGFuZGxlIHN1cnJvZ2F0ZSBwYWlycyxcbi8vIHNvIGl0J3MgYmVlbiBtb2RpZmllZC5cblxuLy8gTm90ZSB0aGF0IG5vdCBhbGwgVW5pY29kZSBjaGFyYWN0ZXJzIGFwcGVhciBhcyBzaW5nbGUgY2hhcmFjdGVycyBpbiBKYXZhU2NyaXB0IHN0cmluZ3MuXG4vLyBmcm9tQ2hhckNvZGUgcmV0dXJucyB0aGUgVVRGLTE2IGVuY29kaW5nIG9mIGEgY2hhcmFjdGVyIC0gc28gc29tZSBVbmljb2RlIGNoYXJhY3RlcnNcbi8vIHVzZSAyIGNoYXJhY3RlcnMgaW4gSmF2YXNjcmlwdC4gIEFsbCA0LWJ5dGUgVVRGLTggY2hhcmFjdGVycyBiZWdpbiB3aXRoIGEgZmlyc3Rcbi8vIGNoYXJhY3RlciBpbiB0aGUgcmFuZ2UgMHhEODAwIC0gMHhEQkZGICh0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc28tY2FsbGVkIHN1cnJvZ2F0ZVxuLy8gcGFpcikuXG4vLyBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTE1LjEuM1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nVG9CeXRlQXJyYXkgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gIGNvbnN0IG91dDogbnVtYmVyW10gPSBbXTtcbiAgbGV0IHAgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAvLyBJcyB0aGlzIHRoZSBsZWFkIHN1cnJvZ2F0ZSBpbiBhIHN1cnJvZ2F0ZSBwYWlyP1xuICAgIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZikge1xuICAgICAgY29uc3QgaGlnaCA9IGMgLSAweGQ4MDA7IC8vIHRoZSBoaWdoIDEwIGJpdHMuXG4gICAgICBpKys7XG4gICAgICBhc3NlcnQoaSA8IHN0ci5sZW5ndGgsICdTdXJyb2dhdGUgcGFpciBtaXNzaW5nIHRyYWlsIHN1cnJvZ2F0ZS4nKTtcbiAgICAgIGNvbnN0IGxvdyA9IHN0ci5jaGFyQ29kZUF0KGkpIC0gMHhkYzAwOyAvLyB0aGUgbG93IDEwIGJpdHMuXG4gICAgICBjID0gMHgxMDAwMCArIChoaWdoIDw8IDEwKSArIGxvdztcbiAgICB9XG5cbiAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgb3V0W3ArK10gPSBjO1xuICAgIH0gZWxzZSBpZiAoYyA8IDIwNDgpIHtcbiAgICAgIG91dFtwKytdID0gKGMgPj4gNikgfCAxOTI7XG4gICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgIH0gZWxzZSBpZiAoYyA8IDY1NTM2KSB7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcbiAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XG4gICAgICBvdXRbcCsrXSA9ICgoYyA+PiAxMikgJiA2MykgfCAxMjg7XG4gICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZSBsZW5ndGggd2l0aG91dCBhY3R1YWxseSBjb252ZXJ0aW5nOyB1c2VmdWwgZm9yIGRvaW5nIGNoZWFwZXIgdmFsaWRhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ0xlbmd0aCA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gIGxldCBwID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgIHArKztcbiAgICB9IGVsc2UgaWYgKGMgPCAyMDQ4KSB7XG4gICAgICBwICs9IDI7XG4gICAgfSBlbHNlIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZikge1xuICAgICAgLy8gTGVhZCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpci4gIFRoZSBwYWlyIHRvZ2V0aGVyIHdpbGwgdGFrZSA0IGJ5dGVzIHRvIHJlcHJlc2VudC5cbiAgICAgIHAgKz0gNDtcbiAgICAgIGkrKzsgLy8gc2tpcCB0cmFpbCBzdXJyb2dhdGUuXG4gICAgfSBlbHNlIHtcbiAgICAgIHAgKz0gMztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHA7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQ29waWVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcbiAqIEdlbmVyYXRlcyBhIG5ldyB1dWlkLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdXVpZHY0ID0gZnVuY3Rpb24gKCk6IHN0cmluZyB7XG4gIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGMgPT4ge1xuICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gIH0pO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGV4cG9uZW50aWFsbHkgaW5jcmVhc2UuXG4gKi9cbmNvbnN0IERFRkFVTFRfSU5URVJWQUxfTUlMTElTID0gMTAwMDtcblxuLyoqXG4gKiBUaGUgZmFjdG9yIHRvIGJhY2tvZmYgYnkuXG4gKiBTaG91bGQgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDEuXG4gKi9cbmNvbnN0IERFRkFVTFRfQkFDS09GRl9GQUNUT1IgPSAyO1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG1pbGxpc2Vjb25kcyB0byBpbmNyZWFzZSB0by5cbiAqXG4gKiA8cD5WaXNpYmxlIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBjb25zdCBNQVhfVkFMVUVfTUlMTElTID0gNCAqIDYwICogNjAgKiAxMDAwOyAvLyBGb3VyIGhvdXJzLCBsaWtlIGlPUyBhbmQgQW5kcm9pZC5cblxuLyoqXG4gKiBUaGUgcGVyY2VudGFnZSBvZiBiYWNrb2ZmIHRpbWUgdG8gcmFuZG9taXplIGJ5LlxuICogU2VlXG4gKiBodHRwOi8vZ28vc2FmZS1jbGllbnQtYmVoYXZpb3Ijc3RlcC0xLWRldGVybWluZS10aGUtYXBwcm9wcmlhdGUtcmV0cnktaW50ZXJ2YWwtdG8taGFuZGxlLXNwaWtlLXRyYWZmaWNcbiAqIGZvciBjb250ZXh0LlxuICpcbiAqIDxwPlZpc2libGUgZm9yIHRlc3RpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IFJBTkRPTV9GQUNUT1IgPSAwLjU7XG5cbi8qKlxuICogQmFzZWQgb24gdGhlIGJhY2tvZmYgbWV0aG9kIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1saWJyYXJ5L2Jsb2IvbWFzdGVyL2Nsb3N1cmUvZ29vZy9tYXRoL2V4cG9uZW50aWFsYmFja29mZi5qcy5cbiAqIEV4dHJhY3RlZCBoZXJlIHNvIHdlIGRvbid0IG5lZWQgdG8gcGFzcyBtZXRhZGF0YSBhbmQgYSBzdGF0ZWZ1bCBFeHBvbmVudGlhbEJhY2tvZmYgb2JqZWN0IGFyb3VuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMoXG4gIGJhY2tvZmZDb3VudDogbnVtYmVyLFxuICBpbnRlcnZhbE1pbGxpczogbnVtYmVyID0gREVGQVVMVF9JTlRFUlZBTF9NSUxMSVMsXG4gIGJhY2tvZmZGYWN0b3I6IG51bWJlciA9IERFRkFVTFRfQkFDS09GRl9GQUNUT1Jcbik6IG51bWJlciB7XG4gIC8vIENhbGN1bGF0ZXMgYW4gZXhwb25lbnRpYWxseSBpbmNyZWFzaW5nIHZhbHVlLlxuICAvLyBEZXZpYXRpb246IGNhbGN1bGF0ZXMgdmFsdWUgZnJvbSBjb3VudCBhbmQgYSBjb25zdGFudCBpbnRlcnZhbCwgc28gd2Ugb25seSBuZWVkIHRvIHNhdmUgdmFsdWVcbiAgLy8gYW5kIGNvdW50IHRvIHJlc3RvcmUgc3RhdGUuXG4gIGNvbnN0IGN1cnJCYXNlVmFsdWUgPSBpbnRlcnZhbE1pbGxpcyAqIE1hdGgucG93KGJhY2tvZmZGYWN0b3IsIGJhY2tvZmZDb3VudCk7XG5cbiAgLy8gQSByYW5kb20gXCJmdXp6XCIgdG8gYXZvaWQgd2F2ZXMgb2YgcmV0cmllcy5cbiAgLy8gRGV2aWF0aW9uOiByYW5kb21GYWN0b3IgaXMgcmVxdWlyZWQuXG4gIGNvbnN0IHJhbmRvbVdhaXQgPSBNYXRoLnJvdW5kKFxuICAgIC8vIEEgZnJhY3Rpb24gb2YgdGhlIGJhY2tvZmYgdmFsdWUgdG8gYWRkL3N1YnRyYWN0LlxuICAgIC8vIERldmlhdGlvbjogY2hhbmdlcyBtdWx0aXBsaWNhdGlvbiBvcmRlciB0byBpbXByb3ZlIHJlYWRhYmlsaXR5LlxuICAgIFJBTkRPTV9GQUNUT1IgKlxuICAgICAgY3VyckJhc2VWYWx1ZSAqXG4gICAgICAvLyBBIHJhbmRvbSBmbG9hdCAocm91bmRlZCB0byBpbnQgYnkgTWF0aC5yb3VuZCBhYm92ZSkgaW4gdGhlIHJhbmdlIFstMSwgMV0uIERldGVybWluZXNcbiAgICAgIC8vIGlmIHdlIGFkZCBvciBzdWJ0cmFjdC5cbiAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqXG4gICAgICAyXG4gICk7XG5cbiAgLy8gTGltaXRzIGJhY2tvZmYgdG8gbWF4IHRvIGF2b2lkIGVmZmVjdGl2ZWx5IHBlcm1hbmVudCBiYWNrb2ZmLlxuICByZXR1cm4gTWF0aC5taW4oTUFYX1ZBTFVFX01JTExJUywgY3VyckJhc2VWYWx1ZSArIHJhbmRvbVdhaXQpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogUHJvdmlkZSBFbmdsaXNoIG9yZGluYWwgbGV0dGVycyBhZnRlciBhIG51bWJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbChpOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShpKSkge1xuICAgIHJldHVybiBgJHtpfWA7XG4gIH1cbiAgcmV0dXJuIGkgKyBpbmRpY2F0b3IoaSk7XG59XG5cbmZ1bmN0aW9uIGluZGljYXRvcihpOiBudW1iZXIpOiBzdHJpbmcge1xuICBpID0gTWF0aC5hYnMoaSk7XG4gIGNvbnN0IGNlbnQgPSBpICUgMTAwO1xuICBpZiAoY2VudCA+PSAxMCAmJiBjZW50IDw9IDIwKSB7XG4gICAgcmV0dXJuICd0aCc7XG4gIH1cbiAgY29uc3QgZGVjID0gaSAlIDEwO1xuICBpZiAoZGVjID09PSAxKSB7XG4gICAgcmV0dXJuICdzdCc7XG4gIH1cbiAgaWYgKGRlYyA9PT0gMikge1xuICAgIHJldHVybiAnbmQnO1xuICB9XG4gIGlmIChkZWMgPT09IDMpIHtcbiAgICByZXR1cm4gJ3JkJztcbiAgfVxuICByZXR1cm4gJ3RoJztcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBhdDxUPiB7XG4gIF9kZWxlZ2F0ZTogVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsYXJJbnN0YW5jZTxFeHBTZXJ2aWNlPihcbiAgc2VydmljZTogQ29tcGF0PEV4cFNlcnZpY2U+IHwgRXhwU2VydmljZVxuKTogRXhwU2VydmljZSB7XG4gIGlmIChzZXJ2aWNlICYmIChzZXJ2aWNlIGFzIENvbXBhdDxFeHBTZXJ2aWNlPikuX2RlbGVnYXRlKSB7XG4gICAgcmV0dXJuIChzZXJ2aWNlIGFzIENvbXBhdDxFeHBTZXJ2aWNlPikuX2RlbGVnYXRlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzZXJ2aWNlIGFzIEV4cFNlcnZpY2U7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtcbiAgSW5zdGFudGlhdGlvbk1vZGUsXG4gIEluc3RhbmNlRmFjdG9yeSxcbiAgQ29tcG9uZW50VHlwZSxcbiAgRGljdGlvbmFyeSxcbiAgTmFtZSxcbiAgb25JbnN0YW5jZUNyZWF0ZWRDYWxsYmFja1xufSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuIGBhdXRoYCwgYGF1dGgtaW50ZXJuYWxgXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQ8VCBleHRlbmRzIE5hbWUgPSBOYW1lPiB7XG4gIG11bHRpcGxlSW5zdGFuY2VzID0gZmFsc2U7XG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIHRvIGJlIGFkZGVkIHRvIHRoZSBzZXJ2aWNlIG5hbWVzcGFjZVxuICAgKi9cbiAgc2VydmljZVByb3BzOiBEaWN0aW9uYXJ5ID0ge307XG5cbiAgaW5zdGFudGlhdGlvbk1vZGUgPSBJbnN0YW50aWF0aW9uTW9kZS5MQVpZO1xuXG4gIG9uSW5zdGFuY2VDcmVhdGVkOiBvbkluc3RhbmNlQ3JlYXRlZENhbGxiYWNrPFQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBwdWJsaWMgc2VydmljZSBuYW1lLCBlLmcuIGFwcCwgYXV0aCwgZmlyZXN0b3JlLCBkYXRhYmFzZVxuICAgKiBAcGFyYW0gaW5zdGFuY2VGYWN0b3J5IFNlcnZpY2UgZmFjdG9yeSByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIHB1YmxpYyBpbnRlcmZhY2VcbiAgICogQHBhcmFtIHR5cGUgd2hldGhlciB0aGUgc2VydmljZSBwcm92aWRlZCBieSB0aGUgY29tcG9uZW50IGlzIHB1YmxpYyBvciBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBuYW1lOiBULFxuICAgIHJlYWRvbmx5IGluc3RhbmNlRmFjdG9yeTogSW5zdGFuY2VGYWN0b3J5PFQ+LFxuICAgIHJlYWRvbmx5IHR5cGU6IENvbXBvbmVudFR5cGVcbiAgKSB7fVxuXG4gIHNldEluc3RhbnRpYXRpb25Nb2RlKG1vZGU6IEluc3RhbnRpYXRpb25Nb2RlKTogdGhpcyB7XG4gICAgdGhpcy5pbnN0YW50aWF0aW9uTW9kZSA9IG1vZGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRNdWx0aXBsZUluc3RhbmNlcyhtdWx0aXBsZUluc3RhbmNlczogYm9vbGVhbik6IHRoaXMge1xuICAgIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgPSBtdWx0aXBsZUluc3RhbmNlcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFNlcnZpY2VQcm9wcyhwcm9wczogRGljdGlvbmFyeSk6IHRoaXMge1xuICAgIHRoaXMuc2VydmljZVByb3BzID0gcHJvcHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRJbnN0YW5jZUNyZWF0ZWRDYWxsYmFjayhjYWxsYmFjazogb25JbnN0YW5jZUNyZWF0ZWRDYWxsYmFjazxUPik6IHRoaXMge1xuICAgIHRoaXMub25JbnN0YW5jZUNyZWF0ZWQgPSBjYWxsYmFjaztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IENvbXBvbmVudENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50X2NvbnRhaW5lcic7XG5pbXBvcnQgeyBERUZBVUxUX0VOVFJZX05BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBJbml0aWFsaXplT3B0aW9ucyxcbiAgSW5zdGFudGlhdGlvbk1vZGUsXG4gIE5hbWUsXG4gIE5hbWVTZXJ2aWNlTWFwcGluZyxcbiAgT25Jbml0Q2FsbEJhY2tcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIGluc3RhbmNlIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiAnYXV0aCcsICdhdXRoLWludGVybmFsJ1xuICogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIGlzIGFuIGFsaWFzIGZvciB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFByb3ZpZGVyPFQgZXh0ZW5kcyBOYW1lPiB7XG4gIHByaXZhdGUgY29tcG9uZW50OiBDb21wb25lbnQ8VD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnN0YW5jZXM6IE1hcDxzdHJpbmcsIE5hbWVTZXJ2aWNlTWFwcGluZ1tUXT4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5zdGFuY2VzRGVmZXJyZWQ6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRGVmZXJyZWQ8TmFtZVNlcnZpY2VNYXBwaW5nW1RdPlxuICA+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IGluc3RhbmNlc09wdGlvbnM6IE1hcDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiA9XG4gICAgbmV3IE1hcCgpO1xuICBwcml2YXRlIG9uSW5pdENhbGxiYWNrczogTWFwPHN0cmluZywgU2V0PE9uSW5pdENhbGxCYWNrPFQ+Pj4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBULFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gaWRlbnRpZmllciBBIHByb3ZpZGVyIGNhbiBwcm92aWRlIG11bGl0cGxlIGluc3RhbmNlcyBvZiBhIHNlcnZpY2VcbiAgICogaWYgdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgaXMgdHJ1ZS5cbiAgICovXG4gIGdldChpZGVudGlmaWVyPzogc3RyaW5nKTogUHJvbWlzZTxOYW1lU2VydmljZU1hcHBpbmdbVF0+IHtcbiAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuaGFzKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xuICAgICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQ8TmFtZVNlcnZpY2VNYXBwaW5nW1RdPigpO1xuICAgICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5zZXQobm9ybWFsaXplZElkZW50aWZpZXIsIGRlZmVycmVkKTtcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpIHx8XG4gICAgICAgIHRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKVxuICAgICAgKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIHNlcnZpY2UgaWYgaXQgY2FuIGJlIGF1dG8taW5pdGlhbGl6ZWRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IHRocm93cyBhbiBleGNlcHRpb24gZHVyaW5nIGdldCgpLCBpdCBzaG91bGQgbm90IGNhdXNlXG4gICAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCByZXR1cm4gdGhlIHVucmVzb2x2ZWQgcHJvbWlzZSBpbiB0aGlzIGNhc2UuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpIS5wcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zLmlkZW50aWZpZXIgQSBwcm92aWRlciBjYW4gcHJvdmlkZSBtdWxpdHBsZSBpbnN0YW5jZXMgb2YgYSBzZXJ2aWNlXG4gICAqIGlmIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzIGlzIHRydWUuXG4gICAqIEBwYXJhbSBvcHRpb25zLm9wdGlvbmFsIElmIG9wdGlvbmFsIGlzIGZhbHNlIG9yIG5vdCBwcm92aWRlZCwgdGhlIG1ldGhvZCB0aHJvd3MgYW4gZXJyb3Igd2hlblxuICAgKiB0aGUgc2VydmljZSBpcyBub3QgaW1tZWRpYXRlbHkgYXZhaWxhYmxlLlxuICAgKiBJZiBvcHRpb25hbCBpcyB0cnVlLCB0aGUgbWV0aG9kIHJldHVybnMgbnVsbCBpZiB0aGUgc2VydmljZSBpcyBub3QgaW1tZWRpYXRlbHkgYXZhaWxhYmxlLlxuICAgKi9cbiAgZ2V0SW1tZWRpYXRlKG9wdGlvbnM6IHtcbiAgICBpZGVudGlmaWVyPzogc3RyaW5nO1xuICAgIG9wdGlvbmFsOiB0cnVlO1xuICB9KTogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIHwgbnVsbDtcbiAgZ2V0SW1tZWRpYXRlKG9wdGlvbnM/OiB7XG4gICAgaWRlbnRpZmllcj86IHN0cmluZztcbiAgICBvcHRpb25hbD86IGZhbHNlO1xuICB9KTogTmFtZVNlcnZpY2VNYXBwaW5nW1RdO1xuICBnZXRJbW1lZGlhdGUob3B0aW9ucz86IHtcbiAgICBpZGVudGlmaWVyPzogc3RyaW5nO1xuICAgIG9wdGlvbmFsPzogYm9vbGVhbjtcbiAgfSk6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSB8IG51bGwge1xuICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXG4gICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihcbiAgICAgIG9wdGlvbnM/LmlkZW50aWZpZXJcbiAgICApO1xuICAgIGNvbnN0IG9wdGlvbmFsID0gb3B0aW9ucz8ub3B0aW9uYWwgPz8gZmFsc2U7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpIHx8XG4gICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKClcbiAgICApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xuICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSW4gY2FzZSBhIGNvbXBvbmVudCBpcyBub3QgaW5pdGlhbGl6ZWQgYW5kIHNob3VsZC9jYW4gbm90IGJlIGF1dG8taW5pdGlhbGl6ZWQgYXQgdGhlIG1vbWVudCwgcmV0dXJuIG51bGwgaWYgdGhlIG9wdGlvbmFsIGZsYWcgaXMgc2V0LCBvciB0aHJvd1xuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYFNlcnZpY2UgJHt0aGlzLm5hbWV9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDb21wb25lbnQoKTogQ29tcG9uZW50PFQ+IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgc2V0Q29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50PFQ+KTogdm9pZCB7XG4gICAgaWYgKGNvbXBvbmVudC5uYW1lICE9PSB0aGlzLm5hbWUpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgTWlzbWF0Y2hpbmcgQ29tcG9uZW50ICR7Y29tcG9uZW50Lm5hbWV9IGZvciBQcm92aWRlciAke3RoaXMubmFtZX0uYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIHRocm93IEVycm9yKGBDb21wb25lbnQgZm9yICR7dGhpcy5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHByb3ZpZGVkYCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cbiAgICAvLyByZXR1cm4gZWFybHkgd2l0aG91dCBhdHRlbXB0aW5nIHRvIGluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBpZiB0aGUgY29tcG9uZW50IHJlcXVpcmVzIGV4cGxpY2l0IGluaXRpYWxpemF0aW9uIChjYWxsaW5nIGBQcm92aWRlci5pbml0aWFsaXplKClgKVxuICAgIGlmICghdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHNlcnZpY2UgaXMgZWFnZXIsIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgaW5zdGFuY2VcbiAgICBpZiAoaXNDb21wb25lbnRFYWdlcihjb21wb25lbnQpKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoeyBpbnN0YW5jZUlkZW50aWZpZXI6IERFRkFVTFRfRU5UUllfTkFNRSB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSBmb3IgYW4gZWFnZXIgQ29tcG9uZW50IHRocm93cyBhbiBleGNlcHRpb24gZHVyaW5nIHRoZSBlYWdlclxuICAgICAgICAvLyBpbml0aWFsaXphdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZSBhIGZhdGFsIGVycm9yLlxuICAgICAgICAvLyBUT0RPOiBJbnZlc3RpZ2F0ZSBpZiB3ZSBuZWVkIHRvIG1ha2UgaXQgY29uZmlndXJhYmxlLCBiZWNhdXNlIHNvbWUgY29tcG9uZW50IG1heSB3YW50IHRvIGNhdXNlXG4gICAgICAgIC8vIGEgZmF0YWwgZXJyb3IgaW4gdGhpcyBjYXNlP1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBzZXJ2aWNlIGluc3RhbmNlcyBmb3IgdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmUgdGhlbVxuICAgIC8vIE5PVEU6IGlmIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgaXMgZmFsc2UsIG9ubHkgdGhlIGRlZmF1bHQgaW5zdGFuY2Ugd2lsbCBiZSBjcmVhdGVkXG4gICAgLy8gYW5kIGFsbCBwcm9taXNlcyB3aXRoIHJlc29sdmUgd2l0aCBpdCByZWdhcmRsZXNzIG9mIHRoZSBpZGVudGlmaWVyLlxuICAgIGZvciAoY29uc3QgW1xuICAgICAgaW5zdGFuY2VJZGVudGlmaWVyLFxuICAgICAgaW5zdGFuY2VEZWZlcnJlZFxuICAgIF0gb2YgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID1cbiAgICAgICAgdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gYGdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoKWAgc2hvdWxkIGFsd2F5cyByZXR1cm4gYSB2YWxpZCBpbnN0YW5jZSBzaW5jZSBhIGNvbXBvbmVudCBpcyBndWFyYW50ZWVkLiB1c2UgISB0byBtYWtlIHR5cGVzY3JpcHQgaGFwcHkuXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcbiAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXG4gICAgICAgIH0pITtcbiAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlXG4gICAgICAgIC8vIGEgZmF0YWwgZXJyb3IuIFdlIGp1c3QgbGVhdmUgdGhlIHByb21pc2UgdW5yZXNvbHZlZC5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckluc3RhbmNlKGlkZW50aWZpZXI6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRSk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZGVsZXRlKGlkZW50aWZpZXIpO1xuICAgIHRoaXMuaW5zdGFuY2VzT3B0aW9ucy5kZWxldGUoaWRlbnRpZmllcik7XG4gICAgdGhpcy5pbnN0YW5jZXMuZGVsZXRlKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgLy8gYXBwLmRlbGV0ZSgpIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBvbiBldmVyeSBwcm92aWRlciB0byBkZWxldGUgdGhlIHNlcnZpY2VzXG4gIC8vIFRPRE86IHNob3VsZCB3ZSBtYXJrIHRoZSBwcm92aWRlciBhcyBkZWxldGVkP1xuICBhc3luYyBkZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VydmljZXMgPSBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzLnZhbHVlcygpKTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIC4uLnNlcnZpY2VzXG4gICAgICAgIC5maWx0ZXIoc2VydmljZSA9PiAnSU5URVJOQUwnIGluIHNlcnZpY2UpIC8vIGxlZ2FjeSBzZXJ2aWNlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAubWFwKHNlcnZpY2UgPT4gKHNlcnZpY2UgYXMgYW55KS5JTlRFUk5BTCEuZGVsZXRlKCkpLFxuICAgICAgLi4uc2VydmljZXNcbiAgICAgICAgLmZpbHRlcihzZXJ2aWNlID0+ICdfZGVsZXRlJyBpbiBzZXJ2aWNlKSAvLyBtb2R1bGFyaXplZCBzZXJ2aWNlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAubWFwKHNlcnZpY2UgPT4gKHNlcnZpY2UgYXMgYW55KS5fZGVsZXRlKCkpXG4gICAgXSk7XG4gIH1cblxuICBpc0NvbXBvbmVudFNldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQgIT0gbnVsbDtcbiAgfVxuXG4gIGlzSW5pdGlhbGl6ZWQoaWRlbnRpZmllcjogc3RyaW5nID0gREVGQVVMVF9FTlRSWV9OQU1FKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmhhcyhpZGVudGlmaWVyKTtcbiAgfVxuXG4gIGdldE9wdGlvbnMoaWRlbnRpZmllcjogc3RyaW5nID0gREVGQVVMVF9FTlRSWV9OQU1FKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc09wdGlvbnMuZ2V0KGlkZW50aWZpZXIpIHx8IHt9O1xuICB9XG5cbiAgaW5pdGlhbGl6ZShvcHRzOiBJbml0aWFsaXplT3B0aW9ucyA9IHt9KTogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgPSB7fSB9ID0gb3B0cztcbiAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKFxuICAgICAgb3B0cy5pbnN0YW5jZUlkZW50aWZpZXJcbiAgICApO1xuICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgYCR7dGhpcy5uYW1lfSgke25vcm1hbGl6ZWRJZGVudGlmaWVyfSkgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZGBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzQ29tcG9uZW50U2V0KCkpIHtcbiAgICAgIHRocm93IEVycm9yKGBDb21wb25lbnQgJHt0aGlzLm5hbWV9IGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHlldGApO1xuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcbiAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXIsXG4gICAgICBvcHRpb25zXG4gICAgfSkhO1xuXG4gICAgLy8gcmVzb2x2ZSBhbnkgcGVuZGluZyBwcm9taXNlIHdhaXRpbmcgZm9yIHRoZSBzZXJ2aWNlIGluc3RhbmNlXG4gICAgZm9yIChjb25zdCBbXG4gICAgICBpbnN0YW5jZUlkZW50aWZpZXIsXG4gICAgICBpbnN0YW5jZURlZmVycmVkXG4gICAgXSBvZiB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmVudHJpZXMoKSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllciA9XG4gICAgICAgIHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGluc3RhbmNlSWRlbnRpZmllcik7XG4gICAgICBpZiAobm9ybWFsaXplZElkZW50aWZpZXIgPT09IG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIpIHtcbiAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIC0gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCAgYWZ0ZXIgdGhlIHByb3ZpZGVyIGhhcyBiZWVuIGluaXRpYWxpemVkIGJ5IGNhbGxpbmcgcHJvdmlkZXIuaW5pdGlhbGl6ZSgpLlxuICAgKiBUaGUgZnVuY3Rpb24gaXMgaW52b2tlZCBTWU5DSFJPTk9VU0xZLCBzbyBpdCBzaG91bGQgbm90IGV4ZWN1dGUgYW55IGxvbmdydW5uaW5nIHRhc2tzIGluIG9yZGVyIHRvIG5vdCBibG9jayB0aGUgcHJvZ3JhbS5cbiAgICpcbiAgICogQHBhcmFtIGlkZW50aWZpZXIgQW4gb3B0aW9uYWwgaW5zdGFuY2UgaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVucmVnaXN0ZXIgdGhlIGNhbGxiYWNrXG4gICAqL1xuICBvbkluaXQoY2FsbGJhY2s6IE9uSW5pdENhbGxCYWNrPFQ+LCBpZGVudGlmaWVyPzogc3RyaW5nKTogKCkgPT4gdm9pZCB7XG4gICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICBjb25zdCBleGlzdGluZ0NhbGxiYWNrcyA9XG4gICAgICB0aGlzLm9uSW5pdENhbGxiYWNrcy5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpID8/XG4gICAgICBuZXcgU2V0PE9uSW5pdENhbGxCYWNrPFQ+PigpO1xuICAgIGV4aXN0aW5nQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgdGhpcy5vbkluaXRDYWxsYmFja3Muc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBleGlzdGluZ0NhbGxiYWNrcyk7XG5cbiAgICBjb25zdCBleGlzdGluZ0luc3RhbmNlID0gdGhpcy5pbnN0YW5jZXMuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcbiAgICBpZiAoZXhpc3RpbmdJbnN0YW5jZSkge1xuICAgICAgY2FsbGJhY2soZXhpc3RpbmdJbnN0YW5jZSwgbm9ybWFsaXplZElkZW50aWZpZXIpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBleGlzdGluZ0NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIG9uSW5pdCBjYWxsYmFja3Mgc3luY2hyb25vdXNseVxuICAgKiBAcGFyYW0gaW5zdGFuY2UgdGhlIHNlcnZpY2UgaW5zdGFuY2VgXG4gICAqL1xuICBwcml2YXRlIGludm9rZU9uSW5pdENhbGxiYWNrcyhcbiAgICBpbnN0YW5jZTogTmFtZVNlcnZpY2VNYXBwaW5nW1RdLFxuICAgIGlkZW50aWZpZXI6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLm9uSW5pdENhbGxiYWNrcy5nZXQoaWRlbnRpZmllcik7XG4gICAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNhbGxiYWNrKGluc3RhbmNlLCBpZGVudGlmaWVyKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluaXQgY2FsbGJhY2tcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xuICAgIGluc3RhbmNlSWRlbnRpZmllcixcbiAgICBvcHRpb25zID0ge31cbiAgfToge1xuICAgIGluc3RhbmNlSWRlbnRpZmllcjogc3RyaW5nO1xuICAgIG9wdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgfSk6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSB8IG51bGwge1xuICAgIGxldCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChpbnN0YW5jZUlkZW50aWZpZXIpO1xuICAgIGlmICghaW5zdGFuY2UgJiYgdGhpcy5jb21wb25lbnQpIHtcbiAgICAgIGluc3RhbmNlID0gdGhpcy5jb21wb25lbnQuaW5zdGFuY2VGYWN0b3J5KHRoaXMuY29udGFpbmVyLCB7XG4gICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplSWRlbnRpZmllckZvckZhY3RvcnkoaW5zdGFuY2VJZGVudGlmaWVyKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgfSk7XG4gICAgICB0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7XG4gICAgICB0aGlzLmluc3RhbmNlc09wdGlvbnMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgb3B0aW9ucyk7XG5cbiAgICAgIC8qKlxuICAgICAgICogSW52b2tlIG9uSW5pdCBsaXN0ZW5lcnMuXG4gICAgICAgKiBOb3RlIHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkIGlzIGRpZmZlcmVudCwgd2hpY2ggaXMgdXNlZCBieSB0aGUgY29tcG9uZW50IGNyZWF0b3IsXG4gICAgICAgKiB3aGlsZSBvbkluaXQgbGlzdGVuZXJzIGFyZSByZWdpc3RlcmVkIGJ5IGNvbnN1bWVycyBvZiB0aGUgcHJvdmlkZXIuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuaW52b2tlT25Jbml0Q2FsbGJhY2tzKGluc3RhbmNlLCBpbnN0YW5jZUlkZW50aWZpZXIpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9yZGVyIGlzIGltcG9ydGFudFxuICAgICAgICogb25JbnN0YW5jZUNyZWF0ZWQoKSBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTsgd2hpY2hcbiAgICAgICAqIG1ha2VzIGBpc0luaXRpYWxpemVkKClgIHJldHVybiB0cnVlLlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZChcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyLFxuICAgICAgICAgICAgaW5zdGFuY2VcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluc3RhbmNlQ3JlYXRlZENhbGxiYWNrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2UgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKFxuICAgIGlkZW50aWZpZXI6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRVxuICApOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzID8gaWRlbnRpZmllciA6IERFRkFVTFRfRU5UUllfTkFNRTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7IC8vIGFzc3VtZSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIHN1cHBvcnRlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBwcm92aWRlZC5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZEF1dG9Jbml0aWFsaXplKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhIXRoaXMuY29tcG9uZW50ICYmXG4gICAgICB0aGlzLmNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSAhPT0gSW5zdGFudGlhdGlvbk1vZGUuRVhQTElDSVRcbiAgICApO1xuICB9XG59XG5cbi8vIHVuZGVmaW5lZCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBzZXJ2aWNlIGZhY3RvcnkgZm9yIHRoZSBkZWZhdWx0IGluc3RhbmNlXG5mdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpZGVudGlmaWVyOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaWRlbnRpZmllciA9PT0gREVGQVVMVF9FTlRSWV9OQU1FID8gdW5kZWZpbmVkIDogaWRlbnRpZmllcjtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnRFYWdlcjxUIGV4dGVuZHMgTmFtZT4oY29tcG9uZW50OiBDb21wb25lbnQ8VD4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvbXBvbmVudC5pbnN0YW50aWF0aW9uTW9kZSA9PT0gSW5zdGFudGlhdGlvbk1vZGUuRUFHRVI7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IE5hbWUgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBDb21wb25lbnRDb250YWluZXIgdGhhdCBwcm92aWRlcyBQcm92aWRlcnMgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuIGBhdXRoYCwgYGF1dGgtaW50ZXJuYWxgXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDb250YWluZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHByb3ZpZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBQcm92aWRlcjxOYW1lPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZykge31cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgYmVpbmcgYWRkZWRcbiAgICogQHBhcmFtIG92ZXJ3cml0ZSBXaGVuIGEgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgbmFtZSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQsXG4gICAqIGlmIG92ZXJ3cml0ZSBpcyB0cnVlOiBvdmVyd3JpdGUgdGhlIGV4aXN0aW5nIGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgY29tcG9uZW50IGFuZCBjcmVhdGUgYSBuZXdcbiAgICogcHJvdmlkZXIgd2l0aCB0aGUgbmV3IGNvbXBvbmVudC4gSXQgY2FuIGJlIHVzZWZ1bCBpbiB0ZXN0cyB3aGVyZSB5b3Ugd2FudCB0byB1c2UgZGlmZmVyZW50IG1vY2tzXG4gICAqIGZvciBkaWZmZXJlbnQgdGVzdHMuXG4gICAqIGlmIG92ZXJ3cml0ZSBpcyBmYWxzZTogdGhyb3cgYW4gZXhjZXB0aW9uXG4gICAqL1xuICBhZGRDb21wb25lbnQ8VCBleHRlbmRzIE5hbWU+KGNvbXBvbmVudDogQ29tcG9uZW50PFQ+KTogdm9pZCB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcbiAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQ29tcG9uZW50ICR7Y29tcG9uZW50Lm5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCB3aXRoICR7dGhpcy5uYW1lfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdmlkZXIuc2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH1cblxuICBhZGRPck92ZXJ3cml0ZUNvbXBvbmVudDxUIGV4dGVuZHMgTmFtZT4oY29tcG9uZW50OiBDb21wb25lbnQ8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xuICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XG4gICAgICAvLyBkZWxldGUgdGhlIGV4aXN0aW5nIHByb3ZpZGVyIGZyb20gdGhlIGNvbnRhaW5lciwgc28gd2UgY2FuIHJlZ2lzdGVyIHRoZSBuZXcgY29tcG9uZW50XG4gICAgICB0aGlzLnByb3ZpZGVycy5kZWxldGUoY29tcG9uZW50Lm5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0UHJvdmlkZXIgcHJvdmlkZXMgYSB0eXBlIHNhZmUgaW50ZXJmYWNlIHdoZXJlIGl0IGNhbiBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgZmllbGQgbmFtZVxuICAgKiBwcmVzZW50IGluIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UuXG4gICAqXG4gICAqIEZpcmViYXNlIFNES3MgcHJvdmlkaW5nIHNlcnZpY2VzIHNob3VsZCBleHRlbmQgTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZSB0byByZWdpc3RlclxuICAgKiB0aGVtc2VsdmVzLlxuICAgKi9cbiAgZ2V0UHJvdmlkZXI8VCBleHRlbmRzIE5hbWU+KG5hbWU6IFQpOiBQcm92aWRlcjxUPiB7XG4gICAgaWYgKHRoaXMucHJvdmlkZXJzLmhhcyhuYW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzLmdldChuYW1lKSBhcyB1bmtub3duIGFzIFByb3ZpZGVyPFQ+O1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIFByb3ZpZGVyIGZvciBhIHNlcnZpY2UgdGhhdCBoYXNuJ3QgcmVnaXN0ZXJlZCB3aXRoIEZpcmViYXNlXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXI8VD4obmFtZSwgdGhpcyk7XG4gICAgdGhpcy5wcm92aWRlcnMuc2V0KG5hbWUsIHByb3ZpZGVyIGFzIHVua25vd24gYXMgUHJvdmlkZXI8TmFtZT4pO1xuXG4gICAgcmV0dXJuIHByb3ZpZGVyIGFzIFByb3ZpZGVyPFQ+O1xuICB9XG5cbiAgZ2V0UHJvdmlkZXJzKCk6IEFycmF5PFByb3ZpZGVyPE5hbWU+PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wcm92aWRlcnMudmFsdWVzKCkpO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IHR5cGUgTG9nTGV2ZWxTdHJpbmcgPVxuICB8ICdkZWJ1ZydcbiAgfCAndmVyYm9zZSdcbiAgfCAnaW5mbydcbiAgfCAnd2FybidcbiAgfCAnZXJyb3InXG4gIHwgJ3NpbGVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nT3B0aW9ucyB7XG4gIGxldmVsOiBMb2dMZXZlbFN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTG9nQ2FsbGJhY2sgPSAoY2FsbGJhY2tQYXJhbXM6IExvZ0NhbGxiYWNrUGFyYW1zKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ0NhbGxiYWNrUGFyYW1zIHtcbiAgbGV2ZWw6IExvZ0xldmVsU3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGFyZ3M6IHVua25vd25bXTtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIExvZ2dlciBpbnN0YW5jZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGluc3RhbmNlczogTG9nZ2VyW10gPSBbXTtcblxuLyoqXG4gKiBUaGUgSlMgU0RLIHN1cHBvcnRzIDUgbG9nIGxldmVscyBhbmQgYWxzbyBhbGxvd3MgYSB1c2VyIHRoZSBhYmlsaXR5IHRvXG4gKiBzaWxlbmNlIHRoZSBsb2dzIGFsdG9nZXRoZXIuXG4gKlxuICogVGhlIG9yZGVyIGlzIGEgZm9sbG93czpcbiAqIERFQlVHIDwgVkVSQk9TRSA8IElORk8gPCBXQVJOIDwgRVJST1JcbiAqXG4gKiBBbGwgb2YgdGhlIGxvZyB0eXBlcyBhYm92ZSB0aGUgY3VycmVudCBsb2cgbGV2ZWwgd2lsbCBiZSBjYXB0dXJlZCAoaS5lLiBpZlxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBJTkZPYCwgZXJyb3JzIHdpbGwgc3RpbGwgYmUgbG9nZ2VkLCBidXQgYERFQlVHYCBhbmRcbiAqIGBWRVJCT1NFYCBsb2dzIHdpbGwgbm90KVxuICovXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gIERFQlVHLFxuICBWRVJCT1NFLFxuICBJTkZPLFxuICBXQVJOLFxuICBFUlJPUixcbiAgU0lMRU5UXG59XG5cbmNvbnN0IGxldmVsU3RyaW5nVG9FbnVtOiB7IFtrZXkgaW4gTG9nTGV2ZWxTdHJpbmddOiBMb2dMZXZlbCB9ID0ge1xuICAnZGVidWcnOiBMb2dMZXZlbC5ERUJVRyxcbiAgJ3ZlcmJvc2UnOiBMb2dMZXZlbC5WRVJCT1NFLFxuICAnaW5mbyc6IExvZ0xldmVsLklORk8sXG4gICd3YXJuJzogTG9nTGV2ZWwuV0FSTixcbiAgJ2Vycm9yJzogTG9nTGV2ZWwuRVJST1IsXG4gICdzaWxlbnQnOiBMb2dMZXZlbC5TSUxFTlRcbn07XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgbG9nIGxldmVsXG4gKi9cbmNvbnN0IGRlZmF1bHRMb2dMZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JTkZPO1xuXG4vKipcbiAqIFdlIGFsbG93IHVzZXJzIHRoZSBhYmlsaXR5IHRvIHBhc3MgdGhlaXIgb3duIGxvZyBoYW5kbGVyLiBXZSB3aWxsIHBhc3MgdGhlXG4gKiB0eXBlIG9mIGxvZywgdGhlIGN1cnJlbnQgbG9nIGxldmVsLCBhbmQgYW55IG90aGVyIGFyZ3VtZW50cyBwYXNzZWQgKGkuZS4gdGhlXG4gKiBtZXNzYWdlcyB0aGF0IHRoZSB1c2VyIHdhbnRzIHRvIGxvZykgdG8gdGhpcyBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgTG9nSGFuZGxlciA9IChcbiAgbG9nZ2VySW5zdGFuY2U6IExvZ2dlcixcbiAgbG9nVHlwZTogTG9nTGV2ZWwsXG4gIC4uLmFyZ3M6IHVua25vd25bXVxuKSA9PiB2b2lkO1xuXG4vKipcbiAqIEJ5IGRlZmF1bHQsIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgZGlzcGxheWVkIGluIHRoZSBkZXZlbG9wZXIgY29uc29sZSAoaW5cbiAqIGNocm9tZSkuIFRvIGF2b2lkIGZvcmNpbmcgdXNlcnMgdG8gaGF2ZSB0byBvcHQtaW4gdG8gdGhlc2UgbG9ncyB0d2ljZVxuICogKGkuZS4gb25jZSBmb3IgZmlyZWJhc2UsIGFuZCBvbmNlIGluIHRoZSBjb25zb2xlKSwgd2UgYXJlIHNlbmRpbmcgYERFQlVHYFxuICogbG9ncyB0byB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbi5cbiAqL1xuY29uc3QgQ29uc29sZU1ldGhvZCA9IHtcbiAgW0xvZ0xldmVsLkRFQlVHXTogJ2xvZycsXG4gIFtMb2dMZXZlbC5WRVJCT1NFXTogJ2xvZycsXG4gIFtMb2dMZXZlbC5JTkZPXTogJ2luZm8nLFxuICBbTG9nTGV2ZWwuV0FSTl06ICd3YXJuJyxcbiAgW0xvZ0xldmVsLkVSUk9SXTogJ2Vycm9yJ1xufTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBsb2cgaGFuZGxlciB3aWxsIGZvcndhcmQgREVCVUcsIFZFUkJPU0UsIElORk8sIFdBUk4sIGFuZCBFUlJPUlxuICogbWVzc2FnZXMgb24gdG8gdGhlaXIgY29ycmVzcG9uZGluZyBjb25zb2xlIGNvdW50ZXJwYXJ0cyAoaWYgdGhlIGxvZyBtZXRob2RcbiAqIGlzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBsb2cgbGV2ZWwpXG4gKi9cbmNvbnN0IGRlZmF1bHRMb2dIYW5kbGVyOiBMb2dIYW5kbGVyID0gKGluc3RhbmNlLCBsb2dUeXBlLCAuLi5hcmdzKTogdm9pZCA9PiB7XG4gIGlmIChsb2dUeXBlIDwgaW5zdGFuY2UubG9nTGV2ZWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICBjb25zdCBtZXRob2QgPSBDb25zb2xlTWV0aG9kW2xvZ1R5cGUgYXMga2V5b2YgdHlwZW9mIENvbnNvbGVNZXRob2RdO1xuICBpZiAobWV0aG9kKSB7XG4gICAgY29uc29sZVttZXRob2QgYXMgJ2xvZycgfCAnaW5mbycgfCAnd2FybicgfCAnZXJyb3InXShcbiAgICAgIGBbJHtub3d9XSAgJHtpbnN0YW5jZS5uYW1lfTpgLFxuICAgICAgLi4uYXJnc1xuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEF0dGVtcHRlZCB0byBsb2cgYSBtZXNzYWdlIHdpdGggYW4gaW52YWxpZCBsb2dUeXBlICh2YWx1ZTogJHtsb2dUeXBlfSlgXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gIC8qKlxuICAgKiBHaXZlcyB5b3UgYW4gaW5zdGFuY2Ugb2YgYSBMb2dnZXIgdG8gY2FwdHVyZSBtZXNzYWdlcyBhY2NvcmRpbmcgdG9cbiAgICogRmlyZWJhc2UncyBsb2dnaW5nIHNjaGVtZS5cbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgdGhhdCB0aGUgbG9ncyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aFxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xuICAgIC8qKlxuICAgICAqIENhcHR1cmUgdGhlIGN1cnJlbnQgaW5zdGFuY2UgZm9yIGxhdGVyIHVzZVxuICAgICAqL1xuICAgIGluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBsb2cgbGV2ZWwgb2YgdGhlIGdpdmVuIExvZ2dlciBpbnN0YW5jZS5cbiAgICovXG4gIHByaXZhdGUgX2xvZ0xldmVsID0gZGVmYXVsdExvZ0xldmVsO1xuXG4gIGdldCBsb2dMZXZlbCgpOiBMb2dMZXZlbCB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0xldmVsO1xuICB9XG5cbiAgc2V0IGxvZ0xldmVsKHZhbDogTG9nTGV2ZWwpIHtcbiAgICBpZiAoISh2YWwgaW4gTG9nTGV2ZWwpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlIFwiJHt2YWx9XCIgYXNzaWduZWQgdG8gXFxgbG9nTGV2ZWxcXGBgKTtcbiAgICB9XG4gICAgdGhpcy5fbG9nTGV2ZWwgPSB2YWw7XG4gIH1cblxuICAvLyBXb3JrYXJvdW5kIGZvciBzZXR0ZXIvZ2V0dGVyIGhhdmluZyB0byBiZSB0aGUgc2FtZSB0eXBlLlxuICBzZXRMb2dMZXZlbCh2YWw6IExvZ0xldmVsIHwgTG9nTGV2ZWxTdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2dMZXZlbCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gbGV2ZWxTdHJpbmdUb0VudW1bdmFsXSA6IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiAoaW50ZXJuYWwpIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxuICAgKiBDYW4gYmUgc2V0IHRvIGEgbmV3IGZ1bmN0aW9uIGluIGludGVybmFsIHBhY2thZ2UgY29kZSBidXQgbm90IGJ5IHVzZXIuXG4gICAqL1xuICBwcml2YXRlIF9sb2dIYW5kbGVyOiBMb2dIYW5kbGVyID0gZGVmYXVsdExvZ0hhbmRsZXI7XG4gIGdldCBsb2dIYW5kbGVyKCk6IExvZ0hhbmRsZXIge1xuICAgIHJldHVybiB0aGlzLl9sb2dIYW5kbGVyO1xuICB9XG4gIHNldCBsb2dIYW5kbGVyKHZhbDogTG9nSGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBhc3NpZ25lZCB0byBgbG9nSGFuZGxlcmAgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG9wdGlvbmFsLCBhZGRpdGlvbmFsLCB1c2VyLWRlZmluZWQgbG9nIGhhbmRsZXIgZm9yIHRoZSBMb2dnZXIgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIF91c2VyTG9nSGFuZGxlcjogTG9nSGFuZGxlciB8IG51bGwgPSBudWxsO1xuICBnZXQgdXNlckxvZ0hhbmRsZXIoKTogTG9nSGFuZGxlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl91c2VyTG9nSGFuZGxlcjtcbiAgfVxuICBzZXQgdXNlckxvZ0hhbmRsZXIodmFsOiBMb2dIYW5kbGVyIHwgbnVsbCkge1xuICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmdW5jdGlvbnMgYmVsb3cgYXJlIGFsbCBiYXNlZCBvbiB0aGUgYGNvbnNvbGVgIGludGVyZmFjZVxuICAgKi9cblxuICBkZWJ1ZyguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5ERUJVRywgLi4uYXJncyk7XG4gICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5ERUJVRywgLi4uYXJncyk7XG4gIH1cbiAgbG9nKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmXG4gICAgICB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcbiAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLlZFUkJPU0UsIC4uLmFyZ3MpO1xuICB9XG4gIGluZm8oLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuSU5GTywgLi4uYXJncyk7XG4gICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5JTkZPLCAuLi5hcmdzKTtcbiAgfVxuICB3YXJuKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLldBUk4sIC4uLmFyZ3MpO1xuICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuV0FSTiwgLi4uYXJncyk7XG4gIH1cbiAgZXJyb3IoLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xuICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbDogTG9nTGV2ZWxTdHJpbmcgfCBMb2dMZXZlbCk6IHZvaWQge1xuICBpbnN0YW5jZXMuZm9yRWFjaChpbnN0ID0+IHtcbiAgICBpbnN0LnNldExvZ0xldmVsKGxldmVsKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyTG9nSGFuZGxlcihcbiAgbG9nQ2FsbGJhY2s6IExvZ0NhbGxiYWNrIHwgbnVsbCxcbiAgb3B0aW9ucz86IExvZ09wdGlvbnNcbik6IHZvaWQge1xuICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIGluc3RhbmNlcykge1xuICAgIGxldCBjdXN0b21Mb2dMZXZlbDogTG9nTGV2ZWwgfCBudWxsID0gbnVsbDtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxldmVsKSB7XG4gICAgICBjdXN0b21Mb2dMZXZlbCA9IGxldmVsU3RyaW5nVG9FbnVtW29wdGlvbnMubGV2ZWxdO1xuICAgIH1cbiAgICBpZiAobG9nQ2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSAoXG4gICAgICAgIGluc3RhbmNlOiBMb2dnZXIsXG4gICAgICAgIGxldmVsOiBMb2dMZXZlbCxcbiAgICAgICAgLi4uYXJnczogdW5rbm93bltdXG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGFyZ3NcbiAgICAgICAgICAubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICBpZiAoYXJnID09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcmc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8IHR5cGVvZiBhcmcgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICByZXR1cm4gYXJnLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcmcubWVzc2FnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcihhcmcgPT4gYXJnKVxuICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIGlmIChsZXZlbCA+PSAoY3VzdG9tTG9nTGV2ZWwgPz8gaW5zdGFuY2UubG9nTGV2ZWwpKSB7XG4gICAgICAgICAgbG9nQ2FsbGJhY2soe1xuICAgICAgICAgICAgbGV2ZWw6IExvZ0xldmVsW2xldmVsXS50b0xvd2VyQ2FzZSgpIGFzIExvZ0xldmVsU3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICB0eXBlOiBpbnN0YW5jZS5uYW1lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCAiY29uc3QgaW5zdGFuY2VPZkFueSA9IChvYmplY3QsIGNvbnN0cnVjdG9ycykgPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM7XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM7XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCkge1xuICAgIHJldHVybiAoaWRiUHJveHlhYmxlVHlwZXMgfHxcbiAgICAgICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgICAgICAgSURCRGF0YWJhc2UsXG4gICAgICAgICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgICAgICAgIElEQkluZGV4LFxuICAgICAgICAgICAgSURCQ3Vyc29yLFxuICAgICAgICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgICAgIF0pKTtcbn1cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIChjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgICAgICAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgPSBbXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmFkdmFuY2UsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZVByaW1hcnlLZXksXG4gICAgICAgIF0pKTtcbn1cbmNvbnN0IGN1cnNvclJlcXVlc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgfSk7XG4gICAgcHJvbWlzZVxuICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgLy8gU2luY2UgY3Vyc29yaW5nIHJldXNlcyB0aGUgSURCUmVxdWVzdCAoKnNpZ2gqKSwgd2UgY2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICAvLyAoc2VlIHdyYXBGdW5jdGlvbikuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQkN1cnNvcikge1xuICAgICAgICAgICAgY3Vyc29yUmVxdWVzdE1hcC5zZXQodmFsdWUsIHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhdGNoaW5nIHRvIGF2b2lkIFwiVW5jYXVnaHQgUHJvbWlzZSBleGNlcHRpb25zXCJcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBkb2Vzbid0IGV4aXN0IGluIHRyYW5zZm9ybUNhY2hlLiBUaGlzXG4gICAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eCkge1xuICAgIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHR4LmVycm9yIHx8IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0RXJyb3InLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfSk7XG4gICAgLy8gQ2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbC5cbiAgICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cbmxldCBpZGJQcm94eVRyYXBzID0ge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnZG9uZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIFBvbHlmaWxsIGZvciBvYmplY3RTdG9yZU5hbWVzIGJlY2F1c2Ugb2YgRWRnZS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnb2JqZWN0U3RvcmVOYW1lcycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdFN0b3JlTmFtZXMgfHwgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0eC5zdG9yZSByZXR1cm4gdGhlIG9ubHkgc3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG1hbnkuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0b3JlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWxzZSB0cmFuc2Zvcm0gd2hhdGV2ZXIgd2UgZ2V0IGJhY2suXG4gICAgICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICAgIH0sXG59O1xuZnVuY3Rpb24gcmVwbGFjZVRyYXBzKGNhbGxiYWNrKSB7XG4gICAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAgIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cbiAgICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBvYmplY3RTdG9yZU5hbWVzIChib29vKSwgc28gd2UgcG9seWZpbGwgaXQgaGVyZS5cbiAgICBpZiAoZnVuYyA9PT0gSURCRGF0YWJhc2UucHJvdG90eXBlLnRyYW5zYWN0aW9uICYmXG4gICAgICAgICEoJ29iamVjdFN0b3JlTmFtZXMnIGluIElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZU5hbWVzLCAuLi5hcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IGZ1bmMuY2FsbCh1bndyYXAodGhpcyksIHN0b3JlTmFtZXMsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLnNldCh0eCwgc3RvcmVOYW1lcy5zb3J0ID8gc3RvcmVOYW1lcy5zb3J0KCkgOiBbc3RvcmVOYW1lc10pO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAodHgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gICAgLy8gSURCLCB5b3UgYWR2YW5jZSB0aGUgY3Vyc29yIGFuZCB3YWl0IGZvciBhIG5ldyAnc3VjY2Vzcycgb24gdGhlIElEQlJlcXVlc3QgdGhhdCBnYXZlIHlvdSB0aGVcbiAgICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAgIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgICAvLyB1bmRlZmluZWQgaWYgdGhlIGVuZCBvZiB0aGUgY3Vyc29yIGhhcyBiZWVuIHJlYWNoZWQuXG4gICAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICAgICAgZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAoY3Vyc29yUmVxdWVzdE1hcC5nZXQodGhpcykpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICAgIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG4gICAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKVxuICAgICAgICBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuICAgIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG4gICAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gICAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gICAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmNvbnN0IHVud3JhcCA9ICh2YWx1ZSkgPT4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG5cbmV4cG9ydCB7IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBhcyBhLCBpbnN0YW5jZU9mQW55IGFzIGksIHJlcGxhY2VUcmFwcyBhcyByLCB1bndyYXAgYXMgdSwgd3JhcCBhcyB3IH07XG4iLCAiaW1wb3J0IHsgdyBhcyB3cmFwLCByIGFzIHJlcGxhY2VUcmFwcyB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuZXhwb3J0IHsgdSBhcyB1bndyYXAsIHcgYXMgd3JhcCB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuXG4vKipcbiAqIE9wZW4gYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqIEBwYXJhbSB2ZXJzaW9uIFNjaGVtYSB2ZXJzaW9uLlxuICogQHBhcmFtIGNhbGxiYWNrcyBBZGRpdGlvbmFsIGNhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gb3BlbkRCKG5hbWUsIHZlcnNpb24sIHsgYmxvY2tlZCwgdXBncmFkZSwgYmxvY2tpbmcsIHRlcm1pbmF0ZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIHZlcnNpb24pO1xuICAgIGNvbnN0IG9wZW5Qcm9taXNlID0gd3JhcChyZXF1ZXN0KTtcbiAgICBpZiAodXBncmFkZSkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZ3JhZGVuZWVkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHVwZ3JhZGUod3JhcChyZXF1ZXN0LnJlc3VsdCksIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIHdyYXAocmVxdWVzdC50cmFuc2FjdGlvbikpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsICgpID0+IGJsb2NrZWQoKSk7XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpXG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKCkgPT4gYmxvY2tpbmcoKSk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsICgpID0+IGJsb2NrZWQoKSk7XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50Q29udGFpbmVyLFxuICBDb21wb25lbnRUeXBlLFxuICBQcm92aWRlcixcbiAgTmFtZVxufSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXRmb3JtTG9nZ2VyU2VydmljZSwgVmVyc2lvblNlcnZpY2UgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwgaW1wbGVtZW50cyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyKSB7fVxuICAvLyBJbiBpbml0aWFsIGltcGxlbWVudGF0aW9uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGluc3RhbGxhdGlvbnMgb25cbiAgLy8gYXV0aCB0b2tlbiByZWZyZXNoLCBhbmQgaW5zdGFsbGF0aW9ucyB3aWxsIHNlbmQgdGhpcyBzdHJpbmcuXG4gIGdldFBsYXRmb3JtSW5mb1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHByb3ZpZGVycyA9IHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVycygpO1xuICAgIC8vIExvb3AgdGhyb3VnaCBwcm92aWRlcnMgYW5kIGdldCBsaWJyYXJ5L3ZlcnNpb24gcGFpcnMgZnJvbSBhbnkgdGhhdCBhcmVcbiAgICAvLyB2ZXJzaW9uIGNvbXBvbmVudHMuXG4gICAgcmV0dXJuIHByb3ZpZGVyc1xuICAgICAgLm1hcChwcm92aWRlciA9PiB7XG4gICAgICAgIGlmIChpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXIpKSB7XG4gICAgICAgICAgY29uc3Qgc2VydmljZSA9IHByb3ZpZGVyLmdldEltbWVkaWF0ZSgpIGFzIFZlcnNpb25TZXJ2aWNlO1xuICAgICAgICAgIHJldHVybiBgJHtzZXJ2aWNlLmxpYnJhcnl9LyR7c2VydmljZS52ZXJzaW9ufWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKGxvZ1N0cmluZyA9PiBsb2dTdHJpbmcpXG4gICAgICAuam9pbignICcpO1xuICB9XG59XG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvdmlkZXIgY2hlY2sgaWYgdGhpcyBwcm92aWRlciBwcm92aWRlcyBhIFZlcnNpb25TZXJ2aWNlXG4gKlxuICogTk9URTogVXNpbmcgUHJvdmlkZXI8J2FwcC12ZXJzaW9uJz4gaXMgYSBoYWNrIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3ZpZGVyXG4gKiBwcm92aWRlcyBWZXJzaW9uU2VydmljZS4gVGhlIHByb3ZpZGVyIGlzIG5vdCBuZWNlc3NhcmlseSBhICdhcHAtdmVyc2lvbidcbiAqIHByb3ZpZGVyLlxuICovXG5mdW5jdGlvbiBpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXI6IFByb3ZpZGVyPE5hbWU+KTogYm9vbGVhbiB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHByb3ZpZGVyLmdldENvbXBvbmVudCgpO1xuICByZXR1cm4gY29tcG9uZW50Py50eXBlID09PSBDb21wb25lbnRUeXBlLlZFUlNJT047XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQGZpcmViYXNlL2xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdAZmlyZWJhc2UvYXBwJyk7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgbmFtZSBhcyBhcHBOYW1lIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYXBwQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uL2FwcC1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYW5hbHl0aWNzQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2FuYWx5dGljcy1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYW5hbHl0aWNzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2FuYWx5dGljcy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhcHBDaGVja0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9hcHAtY2hlY2stY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGFwcENoZWNrTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2FwcC1jaGVjay9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhdXRoTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYXV0aENvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9hdXRoLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBkYXRhYmFzZU5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9kYXRhYmFzZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBkYXRhYmFzZUNvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9kYXRhYmFzZS1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZnVuY3Rpb25zTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2Z1bmN0aW9ucy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBmdW5jdGlvbnNDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvZnVuY3Rpb25zLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBpbnN0YWxsYXRpb25zTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2luc3RhbGxhdGlvbnMvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgaW5zdGFsbGF0aW9uc0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9pbnN0YWxsYXRpb25zLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBtZXNzYWdpbmdOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvbWVzc2FnaW5nL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIG1lc3NhZ2luZ0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9tZXNzYWdpbmctY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHBlcmZvcm1hbmNlTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL3BlcmZvcm1hbmNlL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHBlcmZvcm1hbmNlQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL3BlcmZvcm1hbmNlLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyByZW1vdGVDb25maWdOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvcmVtb3RlLWNvbmZpZy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyByZW1vdGVDb25maWdDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvcmVtb3RlLWNvbmZpZy1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgc3RvcmFnZU5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9zdG9yYWdlL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHN0b3JhZ2VDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvc3RvcmFnZS1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZmlyZXN0b3JlTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2ZpcmVzdG9yZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBmaXJlc3RvcmVDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvZmlyZXN0b3JlLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBwYWNrYWdlTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2ZpcmViYXNlL3BhY2thZ2UuanNvbic7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgYXBwIG5hbWVcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRU5UUllfTkFNRSA9ICdbREVGQVVMVF0nO1xuXG5leHBvcnQgY29uc3QgUExBVEZPUk1fTE9HX1NUUklORyA9IHtcbiAgW2FwcE5hbWVdOiAnZmlyZS1jb3JlJyxcbiAgW2FwcENvbXBhdE5hbWVdOiAnZmlyZS1jb3JlLWNvbXBhdCcsXG4gIFthbmFseXRpY3NOYW1lXTogJ2ZpcmUtYW5hbHl0aWNzJyxcbiAgW2FuYWx5dGljc0NvbXBhdE5hbWVdOiAnZmlyZS1hbmFseXRpY3MtY29tcGF0JyxcbiAgW2FwcENoZWNrTmFtZV06ICdmaXJlLWFwcC1jaGVjaycsXG4gIFthcHBDaGVja0NvbXBhdE5hbWVdOiAnZmlyZS1hcHAtY2hlY2stY29tcGF0JyxcbiAgW2F1dGhOYW1lXTogJ2ZpcmUtYXV0aCcsXG4gIFthdXRoQ29tcGF0TmFtZV06ICdmaXJlLWF1dGgtY29tcGF0JyxcbiAgW2RhdGFiYXNlTmFtZV06ICdmaXJlLXJ0ZGInLFxuICBbZGF0YWJhc2VDb21wYXROYW1lXTogJ2ZpcmUtcnRkYi1jb21wYXQnLFxuICBbZnVuY3Rpb25zTmFtZV06ICdmaXJlLWZuJyxcbiAgW2Z1bmN0aW9uc0NvbXBhdE5hbWVdOiAnZmlyZS1mbi1jb21wYXQnLFxuICBbaW5zdGFsbGF0aW9uc05hbWVdOiAnZmlyZS1paWQnLFxuICBbaW5zdGFsbGF0aW9uc0NvbXBhdE5hbWVdOiAnZmlyZS1paWQtY29tcGF0JyxcbiAgW21lc3NhZ2luZ05hbWVdOiAnZmlyZS1mY20nLFxuICBbbWVzc2FnaW5nQ29tcGF0TmFtZV06ICdmaXJlLWZjbS1jb21wYXQnLFxuICBbcGVyZm9ybWFuY2VOYW1lXTogJ2ZpcmUtcGVyZicsXG4gIFtwZXJmb3JtYW5jZUNvbXBhdE5hbWVdOiAnZmlyZS1wZXJmLWNvbXBhdCcsXG4gIFtyZW1vdGVDb25maWdOYW1lXTogJ2ZpcmUtcmMnLFxuICBbcmVtb3RlQ29uZmlnQ29tcGF0TmFtZV06ICdmaXJlLXJjLWNvbXBhdCcsXG4gIFtzdG9yYWdlTmFtZV06ICdmaXJlLWdjcycsXG4gIFtzdG9yYWdlQ29tcGF0TmFtZV06ICdmaXJlLWdjcy1jb21wYXQnLFxuICBbZmlyZXN0b3JlTmFtZV06ICdmaXJlLWZzdCcsXG4gIFtmaXJlc3RvcmVDb21wYXROYW1lXTogJ2ZpcmUtZnN0LWNvbXBhdCcsXG4gICdmaXJlLWpzJzogJ2ZpcmUtanMnLCAvLyBQbGF0Zm9ybSBpZGVudGlmaWVyIGZvciBKUyBTREsuXG4gIFtwYWNrYWdlTmFtZV06ICdmaXJlLWpzLWFsbCdcbn0gYXMgY29uc3Q7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRmlyZWJhc2VBcHAgfSBmcm9tICcuL3B1YmxpYy10eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3ZpZGVyLCBOYW1lIH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBERUZBVUxUX0VOVFJZX05BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcEltcGwgfSBmcm9tICcuL2ZpcmViYXNlQXBwJztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IF9hcHBzID0gbmV3IE1hcDxzdHJpbmcsIEZpcmViYXNlQXBwPigpO1xuXG4vKipcbiAqIFJlZ2lzdGVyZWQgY29tcG9uZW50cy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCBjb25zdCBfY29tcG9uZW50cyA9IG5ldyBNYXA8c3RyaW5nLCBDb21wb25lbnQ8YW55Pj4oKTtcblxuLyoqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gdGhlIGNvbXBvbmVudCBiZWluZyBhZGRlZCB0byB0aGlzIGFwcCdzIGNvbnRhaW5lclxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2FkZENvbXBvbmVudDxUIGV4dGVuZHMgTmFtZT4oXG4gIGFwcDogRmlyZWJhc2VBcHAsXG4gIGNvbXBvbmVudDogQ29tcG9uZW50PFQ+XG4pOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICAoYXBwIGFzIEZpcmViYXNlQXBwSW1wbCkuY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgYENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBmYWlsZWQgdG8gcmVnaXN0ZXIgd2l0aCBGaXJlYmFzZUFwcCAke2FwcC5uYW1lfWAsXG4gICAgICBlXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChcbiAgYXBwOiBGaXJlYmFzZUFwcCxcbiAgY29tcG9uZW50OiBDb21wb25lbnRcbik6IHZvaWQge1xuICAoYXBwIGFzIEZpcmViYXNlQXBwSW1wbCkuY29udGFpbmVyLmFkZE9yT3ZlcndyaXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0aGUgY29tcG9uZW50IHRvIHJlZ2lzdGVyXG4gKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfcmVnaXN0ZXJDb21wb25lbnQ8VCBleHRlbmRzIE5hbWU+KFxuICBjb21wb25lbnQ6IENvbXBvbmVudDxUPlxuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgaWYgKF9jb21wb25lbnRzLmhhcyhjb21wb25lbnROYW1lKSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgIGBUaGVyZSB3ZXJlIG11bHRpcGxlIGF0dGVtcHRzIHRvIHJlZ2lzdGVyIGNvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9LmBcbiAgICApO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX2NvbXBvbmVudHMuc2V0KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCk7XG5cbiAgLy8gYWRkIHRoZSBjb21wb25lbnQgdG8gZXhpc3RpbmcgYXBwIGluc3RhbmNlc1xuICBmb3IgKGNvbnN0IGFwcCBvZiBfYXBwcy52YWx1ZXMoKSkge1xuICAgIF9hZGRDb21wb25lbnQoYXBwIGFzIEZpcmViYXNlQXBwSW1wbCwgY29tcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gYXBwIC0gRmlyZWJhc2VBcHAgaW5zdGFuY2VcbiAqIEBwYXJhbSBuYW1lIC0gc2VydmljZSBuYW1lXG4gKlxuICogQHJldHVybnMgdGhlIHByb3ZpZGVyIGZvciB0aGUgc2VydmljZSB3aXRoIHRoZSBtYXRjaGluZyBuYW1lXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0UHJvdmlkZXI8VCBleHRlbmRzIE5hbWU+KFxuICBhcHA6IEZpcmViYXNlQXBwLFxuICBuYW1lOiBUXG4pOiBQcm92aWRlcjxUPiB7XG4gIGNvbnN0IGhlYXJ0YmVhdENvbnRyb2xsZXIgPSAoYXBwIGFzIEZpcmViYXNlQXBwSW1wbCkuY29udGFpbmVyXG4gICAgLmdldFByb3ZpZGVyKCdoZWFydGJlYXQnKVxuICAgIC5nZXRJbW1lZGlhdGUoeyBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgaWYgKGhlYXJ0YmVhdENvbnRyb2xsZXIpIHtcbiAgICB2b2lkIGhlYXJ0YmVhdENvbnRyb2xsZXIudHJpZ2dlckhlYXJ0YmVhdCgpO1xuICB9XG4gIHJldHVybiAoYXBwIGFzIEZpcmViYXNlQXBwSW1wbCkuY29udGFpbmVyLmdldFByb3ZpZGVyKG5hbWUpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gYXBwIC0gRmlyZWJhc2VBcHAgaW5zdGFuY2VcbiAqIEBwYXJhbSBuYW1lIC0gc2VydmljZSBuYW1lXG4gKiBAcGFyYW0gaW5zdGFuY2VJZGVudGlmaWVyIC0gc2VydmljZSBpbnN0YW5jZSBpZGVudGlmaWVyIGluIGNhc2UgdGhlIHNlcnZpY2Ugc3VwcG9ydHMgbXVsdGlwbGUgaW5zdGFuY2VzXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfcmVtb3ZlU2VydmljZUluc3RhbmNlPFQgZXh0ZW5kcyBOYW1lPihcbiAgYXBwOiBGaXJlYmFzZUFwcCxcbiAgbmFtZTogVCxcbiAgaW5zdGFuY2VJZGVudGlmaWVyOiBzdHJpbmcgPSBERUZBVUxUX0VOVFJZX05BTUVcbik6IHZvaWQge1xuICBfZ2V0UHJvdmlkZXIoYXBwLCBuYW1lKS5jbGVhckluc3RhbmNlKGluc3RhbmNlSWRlbnRpZmllcik7XG59XG5cbi8qKlxuICogVGVzdCBvbmx5XG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY2xlYXJDb21wb25lbnRzKCk6IHZvaWQge1xuICBfY29tcG9uZW50cy5jbGVhcigpO1xufVxuXG4vKipcbiAqIEV4cG9ydGVkIGluIG9yZGVyIHRvIGJlIHVzZWQgaW4gYXBwLWNvbXBhdCBwYWNrYWdlXG4gKi9cbmV4cG9ydCB7IERFRkFVTFRfRU5UUllfTkFNRSBhcyBfREVGQVVMVF9FTlRSWV9OQU1FIH07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBFcnJvck1hcCB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuZXhwb3J0IGNvbnN0IGVudW0gQXBwRXJyb3Ige1xuICBOT19BUFAgPSAnbm8tYXBwJyxcbiAgQkFEX0FQUF9OQU1FID0gJ2JhZC1hcHAtbmFtZScsXG4gIERVUExJQ0FURV9BUFAgPSAnZHVwbGljYXRlLWFwcCcsXG4gIEFQUF9ERUxFVEVEID0gJ2FwcC1kZWxldGVkJyxcbiAgTk9fT1BUSU9OUyA9ICduby1vcHRpb25zJyxcbiAgSU5WQUxJRF9BUFBfQVJHVU1FTlQgPSAnaW52YWxpZC1hcHAtYXJndW1lbnQnLFxuICBJTlZBTElEX0xPR19BUkdVTUVOVCA9ICdpbnZhbGlkLWxvZy1hcmd1bWVudCcsXG4gIElEQl9PUEVOID0gJ2lkYi1vcGVuJyxcbiAgSURCX0dFVCA9ICdpZGItZ2V0JyxcbiAgSURCX1dSSVRFID0gJ2lkYi1zZXQnLFxuICBJREJfREVMRVRFID0gJ2lkYi1kZWxldGUnXG59XG5cbmNvbnN0IEVSUk9SUzogRXJyb3JNYXA8QXBwRXJyb3I+ID0ge1xuICBbQXBwRXJyb3IuTk9fQVBQXTpcbiAgICBcIk5vIEZpcmViYXNlIEFwcCAneyRhcHBOYW1lfScgaGFzIGJlZW4gY3JlYXRlZCAtIFwiICtcbiAgICAnY2FsbCBGaXJlYmFzZSBBcHAuaW5pdGlhbGl6ZUFwcCgpJyxcbiAgW0FwcEVycm9yLkJBRF9BUFBfTkFNRV06IFwiSWxsZWdhbCBBcHAgbmFtZTogJ3skYXBwTmFtZX1cIixcbiAgW0FwcEVycm9yLkRVUExJQ0FURV9BUFBdOlxuICAgIFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGV4aXN0cyB3aXRoIGRpZmZlcmVudCBvcHRpb25zIG9yIGNvbmZpZ1wiLFxuICBbQXBwRXJyb3IuQVBQX0RFTEVURURdOiBcIkZpcmViYXNlIEFwcCBuYW1lZCAneyRhcHBOYW1lfScgYWxyZWFkeSBkZWxldGVkXCIsXG4gIFtBcHBFcnJvci5OT19PUFRJT05TXTpcbiAgICAnTmVlZCB0byBwcm92aWRlIG9wdGlvbnMsIHdoZW4gbm90IGJlaW5nIGRlcGxveWVkIHRvIGhvc3RpbmcgdmlhIHNvdXJjZS4nLFxuICBbQXBwRXJyb3IuSU5WQUxJRF9BUFBfQVJHVU1FTlRdOlxuICAgICdmaXJlYmFzZS57JGFwcE5hbWV9KCkgdGFrZXMgZWl0aGVyIG5vIGFyZ3VtZW50IG9yIGEgJyArXG4gICAgJ0ZpcmViYXNlIEFwcCBpbnN0YW5jZS4nLFxuICBbQXBwRXJyb3IuSU5WQUxJRF9MT0dfQVJHVU1FTlRdOlxuICAgICdGaXJzdCBhcmd1bWVudCB0byBgb25Mb2dgIG11c3QgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLicsXG4gIFtBcHBFcnJvci5JREJfT1BFTl06XG4gICAgJ0Vycm9yIHRocm93biB3aGVuIG9wZW5pbmcgSW5kZXhlZERCLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJyxcbiAgW0FwcEVycm9yLklEQl9HRVRdOlxuICAgICdFcnJvciB0aHJvd24gd2hlbiByZWFkaW5nIGZyb20gSW5kZXhlZERCLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJyxcbiAgW0FwcEVycm9yLklEQl9XUklURV06XG4gICAgJ0Vycm9yIHRocm93biB3aGVuIHdyaXRpbmcgdG8gSW5kZXhlZERCLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJyxcbiAgW0FwcEVycm9yLklEQl9ERUxFVEVdOlxuICAgICdFcnJvciB0aHJvd24gd2hlbiBkZWxldGluZyBmcm9tIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9Lidcbn07XG5cbmludGVyZmFjZSBFcnJvclBhcmFtcyB7XG4gIFtBcHBFcnJvci5OT19BUFBdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuQkFEX0FQUF9OQU1FXTogeyBhcHBOYW1lOiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLkRVUExJQ0FURV9BUFBdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuQVBQX0RFTEVURURdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSU5WQUxJRF9BUFBfQVJHVU1FTlRdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSURCX09QRU5dOiB7IG9yaWdpbmFsRXJyb3JNZXNzYWdlPzogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5JREJfR0VUXTogeyBvcmlnaW5hbEVycm9yTWVzc2FnZT86IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSURCX1dSSVRFXTogeyBvcmlnaW5hbEVycm9yTWVzc2FnZT86IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSURCX0RFTEVURV06IHsgb3JpZ2luYWxFcnJvck1lc3NhZ2U/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5PEFwcEVycm9yLCBFcnJvclBhcmFtcz4oXG4gICdhcHAnLFxuICAnRmlyZWJhc2UnLFxuICBFUlJPUlNcbik7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgRmlyZWJhc2VBcHAsXG4gIEZpcmViYXNlT3B0aW9ucyxcbiAgRmlyZWJhc2VBcHBTZXR0aW5nc1xufSBmcm9tICcuL3B1YmxpYy10eXBlcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnRDb250YWluZXIsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50VHlwZVxufSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEFwcEVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VBcHBJbXBsIGltcGxlbWVudHMgRmlyZWJhc2VBcHAge1xuICBwcml2YXRlIHJlYWRvbmx5IF9vcHRpb25zOiBGaXJlYmFzZU9wdGlvbnM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX25hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIE9yaWdpbmFsIGNvbmZpZyB2YWx1ZXMgcGFzc2VkIGluIGFzIGEgY29uc3RydWN0b3IgcGFyYW1ldGVyLlxuICAgKiBJdCBpcyBvbmx5IHVzZWQgdG8gY29tcGFyZSB3aXRoIGFub3RoZXIgY29uZmlnIG9iamVjdCB0byBzdXBwb3J0IGlkZW1wb3RlbnQgaW5pdGlhbGl6ZUFwcCgpLlxuICAgKlxuICAgKiBVcGRhdGluZyBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgb24gdGhlIEFwcCBpbnN0YW5jZSB3aWxsIG5vdCBjaGFuZ2UgaXRzIHZhbHVlIGluIF9jb25maWcuXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWc6IFJlcXVpcmVkPEZpcmViYXNlQXBwU2V0dGluZ3M+O1xuICBwcml2YXRlIF9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb250YWluZXI6IENvbXBvbmVudENvbnRhaW5lcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMsXG4gICAgY29uZmlnOiBSZXF1aXJlZDxGaXJlYmFzZUFwcFNldHRpbmdzPixcbiAgICBjb250YWluZXI6IENvbXBvbmVudENvbnRhaW5lclxuICApIHtcbiAgICB0aGlzLl9vcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5fY29uZmlnID0geyAuLi5jb25maWcgfTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID1cbiAgICAgIGNvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuY29udGFpbmVyLmFkZENvbXBvbmVudChcbiAgICAgIG5ldyBDb21wb25lbnQoJ2FwcCcsICgpID0+IHRoaXMsIENvbXBvbmVudFR5cGUuUFVCTElDKVxuICAgICk7XG4gIH1cblxuICBnZXQgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkO1xuICB9XG5cbiAgc2V0IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID0gdmFsO1xuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBGaXJlYmFzZU9wdGlvbnMge1xuICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIGdldCBjb25maWcoKTogUmVxdWlyZWQ8RmlyZWJhc2VBcHBTZXR0aW5ncz4ge1xuICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpOiBDb21wb25lbnRDb250YWluZXIge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gIH1cblxuICBnZXQgaXNEZWxldGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0RlbGV0ZWQ7XG4gIH1cblxuICBzZXQgaXNEZWxldGVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRGVsZXRlZCA9IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxuICAgKiB1c2UgYmVmb3JlIHBlcmZvcm1pbmcgQVBJIGFjdGlvbnMgb24gdGhlIEFwcC5cbiAgICovXG4gIHByaXZhdGUgY2hlY2tEZXN0cm95ZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5BUFBfREVMRVRFRCwgeyBhcHBOYW1lOiB0aGlzLl9uYW1lIH0pO1xuICAgIH1cbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIEZpcmViYXNlQXBwLFxuICBGaXJlYmFzZU9wdGlvbnMsXG4gIEZpcmViYXNlQXBwU2V0dGluZ3Ncbn0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgREVGQVVMVF9FTlRSWV9OQU1FLCBQTEFURk9STV9MT0dfU1RSSU5HIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgQXBwRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge1xuICBDb21wb25lbnRDb250YWluZXIsXG4gIENvbXBvbmVudCxcbiAgTmFtZSxcbiAgQ29tcG9uZW50VHlwZVxufSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9maXJlYmFzZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBJbXBsIH0gZnJvbSAnLi9maXJlYmFzZUFwcCc7XG5pbXBvcnQgeyBfYXBwcywgX2NvbXBvbmVudHMsIF9yZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vaW50ZXJuYWwnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHtcbiAgTG9nTGV2ZWxTdHJpbmcsXG4gIHNldExvZ0xldmVsIGFzIHNldExvZ0xldmVsSW1wbCxcbiAgTG9nQ2FsbGJhY2ssXG4gIExvZ09wdGlvbnMsXG4gIHNldFVzZXJMb2dIYW5kbGVyXG59IGZyb20gJ0BmaXJlYmFzZS9sb2dnZXInO1xuaW1wb3J0IHsgZGVlcEVxdWFsLCBnZXREZWZhdWx0QXBwQ29uZmlnIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG5leHBvcnQgeyBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50IFNESyB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IFNES19WRVJTSU9OID0gdmVyc2lvbjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBhIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cbiAqXG4gKiBTZWVcbiAqIHtAbGlua1xuICogICBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYWRkX2ZpcmViYXNlX3RvX3lvdXJfYXBwXG4gKiAgIHwgQWRkIEZpcmViYXNlIHRvIHlvdXIgYXBwfSBhbmRcbiAqIHtAbGlua1xuICogICBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjbXVsdGlwbGUtcHJvamVjdHNcbiAqICAgfCBJbml0aWFsaXplIG11bHRpcGxlIHByb2plY3RzfSBmb3IgZGV0YWlsZWQgZG9jdW1lbnRhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgamF2YXNjcmlwdFxuICpcbiAqIC8vIEluaXRpYWxpemUgZGVmYXVsdCBhcHBcbiAqIC8vIFJldHJpZXZlIHlvdXIgb3duIG9wdGlvbnMgdmFsdWVzIGJ5IGFkZGluZyBhIHdlYiBhcHAgb25cbiAqIC8vIGh0dHBzOi8vY29uc29sZS5maXJlYmFzZS5nb29nbGUuY29tXG4gKiBpbml0aWFsaXplQXBwKHtcbiAqICAgYXBpS2V5OiBcIkFJemEuLi4uXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRoIC8gR2VuZXJhbCBVc2VcbiAqICAgYXV0aERvbWFpbjogXCJZT1VSX0FQUC5maXJlYmFzZWFwcC5jb21cIiwgICAgICAgICAvLyBBdXRoIHdpdGggcG9wdXAvcmVkaXJlY3RcbiAqICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9ZT1VSX0FQUC5maXJlYmFzZWlvLmNvbVwiLCAvLyBSZWFsdGltZSBEYXRhYmFzZVxuICogICBzdG9yYWdlQnVja2V0OiBcIllPVVJfQVBQLmFwcHNwb3QuY29tXCIsICAgICAgICAgIC8vIFN0b3JhZ2VcbiAqICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTIzNDU2Nzg5XCIgICAgICAgICAgICAgICAgICAvLyBDbG91ZCBNZXNzYWdpbmdcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqXG4gKiAvLyBJbml0aWFsaXplIGFub3RoZXIgYXBwXG4gKiBjb25zdCBvdGhlckFwcCA9IGluaXRpYWxpemVBcHAoe1xuICogICBkYXRhYmFzZVVSTDogXCJodHRwczovLzxPVEhFUl9EQVRBQkFTRV9OQU1FPi5maXJlYmFzZWlvLmNvbVwiLFxuICogICBzdG9yYWdlQnVja2V0OiBcIjxPVEhFUl9TVE9SQUdFX0JVQ0tFVD4uYXBwc3BvdC5jb21cIlxuICogfSwgXCJvdGhlckFwcFwiKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB0byBjb25maWd1cmUgdGhlIGFwcCdzIHNlcnZpY2VzLlxuICogQHBhcmFtIG5hbWUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBhcHAgdG8gaW5pdGlhbGl6ZS4gSWYgbm8gbmFtZVxuICogICBpcyBwcm92aWRlZCwgdGhlIGRlZmF1bHQgaXMgYFwiW0RFRkFVTFRdXCJgLlxuICpcbiAqIEByZXR1cm5zIFRoZSBpbml0aWFsaXplZCBhcHAuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChcbiAgb3B0aW9uczogRmlyZWJhc2VPcHRpb25zLFxuICBuYW1lPzogc3RyaW5nXG4pOiBGaXJlYmFzZUFwcDtcbi8qKlxuICogQ3JlYXRlcyBhbmQgaW5pdGlhbGl6ZXMgYSBGaXJlYmFzZUFwcCBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgdG8gY29uZmlndXJlIHRoZSBhcHAncyBzZXJ2aWNlcy5cbiAqIEBwYXJhbSBjb25maWcgLSBGaXJlYmFzZUFwcCBDb25maWd1cmF0aW9uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChcbiAgb3B0aW9uczogRmlyZWJhc2VPcHRpb25zLFxuICBjb25maWc/OiBGaXJlYmFzZUFwcFNldHRpbmdzXG4pOiBGaXJlYmFzZUFwcDtcbi8qKlxuICogQ3JlYXRlcyBhbmQgaW5pdGlhbGl6ZXMgYSBGaXJlYmFzZUFwcCBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKCk6IEZpcmViYXNlQXBwO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoXG4gIF9vcHRpb25zPzogRmlyZWJhc2VPcHRpb25zLFxuICByYXdDb25maWcgPSB7fVxuKTogRmlyZWJhc2VBcHAge1xuICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zO1xuXG4gIGlmICh0eXBlb2YgcmF3Q29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IG5hbWUgPSByYXdDb25maWc7XG4gICAgcmF3Q29uZmlnID0geyBuYW1lIH07XG4gIH1cblxuICBjb25zdCBjb25maWc6IFJlcXVpcmVkPEZpcmViYXNlQXBwU2V0dGluZ3M+ID0ge1xuICAgIG5hbWU6IERFRkFVTFRfRU5UUllfTkFNRSxcbiAgICBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ6IGZhbHNlLFxuICAgIC4uLnJhd0NvbmZpZ1xuICB9O1xuICBjb25zdCBuYW1lID0gY29uZmlnLm5hbWU7XG5cbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCAhbmFtZSkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLkJBRF9BUFBfTkFNRSwge1xuICAgICAgYXBwTmFtZTogU3RyaW5nKG5hbWUpXG4gICAgfSk7XG4gIH1cblxuICBvcHRpb25zIHx8PSBnZXREZWZhdWx0QXBwQ29uZmlnKCk7XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuTk9fT1BUSU9OUyk7XG4gIH1cblxuICBjb25zdCBleGlzdGluZ0FwcCA9IF9hcHBzLmdldChuYW1lKSBhcyBGaXJlYmFzZUFwcEltcGw7XG4gIGlmIChleGlzdGluZ0FwcCkge1xuICAgIC8vIHJldHVybiB0aGUgZXhpc3RpbmcgYXBwIGlmIG9wdGlvbnMgYW5kIGNvbmZpZyBkZWVwIGVxdWFsIHRoZSBvbmVzIGluIHRoZSBleGlzdGluZyBhcHAuXG4gICAgaWYgKFxuICAgICAgZGVlcEVxdWFsKG9wdGlvbnMsIGV4aXN0aW5nQXBwLm9wdGlvbnMpICYmXG4gICAgICBkZWVwRXF1YWwoY29uZmlnLCBleGlzdGluZ0FwcC5jb25maWcpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdBcHA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLkRVUExJQ0FURV9BUFAsIHsgYXBwTmFtZTogbmFtZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29tcG9uZW50Q29udGFpbmVyKG5hbWUpO1xuICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBfY29tcG9uZW50cy52YWx1ZXMoKSkge1xuICAgIGNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfVxuXG4gIGNvbnN0IG5ld0FwcCA9IG5ldyBGaXJlYmFzZUFwcEltcGwob3B0aW9ucywgY29uZmlnLCBjb250YWluZXIpO1xuXG4gIF9hcHBzLnNldChuYW1lLCBuZXdBcHApO1xuXG4gIHJldHVybiBuZXdBcHA7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGEge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxuICpcbiAqIFdoZW4gY2FsbGVkIHdpdGggbm8gYXJndW1lbnRzLCB0aGUgZGVmYXVsdCBhcHAgaXMgcmV0dXJuZWQuIFdoZW4gYW4gYXBwIG5hbWVcbiAqIGlzIHByb3ZpZGVkLCB0aGUgYXBwIGNvcnJlc3BvbmRpbmcgdG8gdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICpcbiAqIEFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaWYgdGhlIGFwcCBiZWluZyByZXRyaWV2ZWQgaGFzIG5vdCB5ZXQgYmVlblxuICogaW5pdGlhbGl6ZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIFJldHVybiB0aGUgZGVmYXVsdCBhcHBcbiAqIGNvbnN0IGFwcCA9IGdldEFwcCgpO1xuICogYGBgXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIFJldHVybiBhIG5hbWVkIGFwcFxuICogY29uc3Qgb3RoZXJBcHAgPSBnZXRBcHAoXCJvdGhlckFwcFwiKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBuYW1lIC0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgYXBwIHRvIHJldHVybi4gSWYgbm8gbmFtZSBpc1xuICogICBwcm92aWRlZCwgdGhlIGRlZmF1bHQgaXMgYFwiW0RFRkFVTFRdXCJgLlxuICpcbiAqIEByZXR1cm5zIFRoZSBhcHAgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdmlkZWQgYXBwIG5hbWUuXG4gKiAgIElmIG5vIGFwcCBuYW1lIGlzIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBhcHAgaXMgcmV0dXJuZWQuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwKG5hbWU6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRSk6IEZpcmViYXNlQXBwIHtcbiAgY29uc3QgYXBwID0gX2FwcHMuZ2V0KG5hbWUpO1xuICBpZiAoIWFwcCAmJiBuYW1lID09PSBERUZBVUxUX0VOVFJZX05BTUUpIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZUFwcCgpO1xuICB9XG4gIGlmICghYXBwKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuTk9fQVBQLCB7IGFwcE5hbWU6IG5hbWUgfSk7XG4gIH1cblxuICByZXR1cm4gYXBwO1xufVxuXG4vKipcbiAqIEEgKHJlYWQtb25seSkgYXJyYXkgb2YgYWxsIGluaXRpYWxpemVkIGFwcHMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBzKCk6IEZpcmViYXNlQXBwW10ge1xuICByZXR1cm4gQXJyYXkuZnJvbShfYXBwcy52YWx1ZXMoKSk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGlzIGFwcCB1bnVzYWJsZSBhbmQgZnJlZXMgdGhlIHJlc291cmNlcyBvZiBhbGwgYXNzb2NpYXRlZFxuICogc2VydmljZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGRlbGV0ZUFwcChhcHApXG4gKiAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICogICAgIGNvbnNvbGUubG9nKFwiQXBwIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICogICB9KVxuICogICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAqICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRlbGV0aW5nIGFwcDpcIiwgZXJyb3IpO1xuICogICB9KTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFwcChhcHA6IEZpcmViYXNlQXBwKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IG5hbWUgPSBhcHAubmFtZTtcbiAgaWYgKF9hcHBzLmhhcyhuYW1lKSkge1xuICAgIF9hcHBzLmRlbGV0ZShuYW1lKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsKS5jb250YWluZXJcbiAgICAgICAgLmdldFByb3ZpZGVycygpXG4gICAgICAgIC5tYXAocHJvdmlkZXIgPT4gcHJvdmlkZXIuZGVsZXRlKCkpXG4gICAgKTtcbiAgICAoYXBwIGFzIEZpcmViYXNlQXBwSW1wbCkuaXNEZWxldGVkID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGxpYnJhcnkncyBuYW1lIGFuZCB2ZXJzaW9uIGZvciBwbGF0Zm9ybSBsb2dnaW5nIHB1cnBvc2VzLlxuICogQHBhcmFtIGxpYnJhcnkgLSBOYW1lIG9mIDFwIG9yIDNwIGxpYnJhcnkgKGUuZy4gZmlyZXN0b3JlLCBhbmd1bGFyZmlyZSlcbiAqIEBwYXJhbSB2ZXJzaW9uIC0gQ3VycmVudCB2ZXJzaW9uIG9mIHRoYXQgbGlicmFyeS5cbiAqIEBwYXJhbSB2YXJpYW50IC0gQnVuZGxlIHZhcmlhbnQsIGUuZy4sIG5vZGUsIHJuLCBldGMuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJWZXJzaW9uKFxuICBsaWJyYXJ5S2V5T3JOYW1lOiBzdHJpbmcsXG4gIHZlcnNpb246IHN0cmluZyxcbiAgdmFyaWFudD86IHN0cmluZ1xuKTogdm9pZCB7XG4gIC8vIFRPRE86IFdlIGNhbiB1c2UgdGhpcyBjaGVjayB0byB3aGl0ZWxpc3Qgc3RyaW5ncyB3aGVuL2lmIHdlIHNldCB1cFxuICAvLyBhIGdvb2Qgd2hpdGVsaXN0IHN5c3RlbS5cbiAgbGV0IGxpYnJhcnkgPSBQTEFURk9STV9MT0dfU1RSSU5HW2xpYnJhcnlLZXlPck5hbWVdID8/IGxpYnJhcnlLZXlPck5hbWU7XG4gIGlmICh2YXJpYW50KSB7XG4gICAgbGlicmFyeSArPSBgLSR7dmFyaWFudH1gO1xuICB9XG4gIGNvbnN0IGxpYnJhcnlNaXNtYXRjaCA9IGxpYnJhcnkubWF0Y2goL1xcc3xcXC8vKTtcbiAgY29uc3QgdmVyc2lvbk1pc21hdGNoID0gdmVyc2lvbi5tYXRjaCgvXFxzfFxcLy8pO1xuICBpZiAobGlicmFyeU1pc21hdGNoIHx8IHZlcnNpb25NaXNtYXRjaCkge1xuICAgIGNvbnN0IHdhcm5pbmcgPSBbXG4gICAgICBgVW5hYmxlIHRvIHJlZ2lzdGVyIGxpYnJhcnkgXCIke2xpYnJhcnl9XCIgd2l0aCB2ZXJzaW9uIFwiJHt2ZXJzaW9ufVwiOmBcbiAgICBdO1xuICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2gpIHtcbiAgICAgIHdhcm5pbmcucHVzaChcbiAgICAgICAgYGxpYnJhcnkgbmFtZSBcIiR7bGlicmFyeX1cIiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMgKHdoaXRlc3BhY2Ugb3IgXCIvXCIpYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxpYnJhcnlNaXNtYXRjaCAmJiB2ZXJzaW9uTWlzbWF0Y2gpIHtcbiAgICAgIHdhcm5pbmcucHVzaCgnYW5kJyk7XG4gICAgfVxuICAgIGlmICh2ZXJzaW9uTWlzbWF0Y2gpIHtcbiAgICAgIHdhcm5pbmcucHVzaChcbiAgICAgICAgYHZlcnNpb24gbmFtZSBcIiR7dmVyc2lvbn1cIiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMgKHdoaXRlc3BhY2Ugb3IgXCIvXCIpYFxuICAgICAgKTtcbiAgICB9XG4gICAgbG9nZ2VyLndhcm4od2FybmluZy5qb2luKCcgJykpO1xuICAgIHJldHVybjtcbiAgfVxuICBfcmVnaXN0ZXJDb21wb25lbnQoXG4gICAgbmV3IENvbXBvbmVudChcbiAgICAgIGAke2xpYnJhcnl9LXZlcnNpb25gIGFzIE5hbWUsXG4gICAgICAoKSA9PiAoeyBsaWJyYXJ5LCB2ZXJzaW9uIH0pLFxuICAgICAgQ29tcG9uZW50VHlwZS5WRVJTSU9OXG4gICAgKVxuICApO1xufVxuXG4vKipcbiAqIFNldHMgbG9nIGhhbmRsZXIgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxuICogQHBhcmFtIGxvZ0NhbGxiYWNrIC0gQW4gb3B0aW9uYWwgY3VzdG9tIGxvZyBoYW5kbGVyIHRoYXQgZXhlY3V0ZXMgdXNlciBjb2RlIHdoZW5ldmVyXG4gKiB0aGUgRmlyZWJhc2UgU0RLIG1ha2VzIGEgbG9nZ2luZyBjYWxsLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTG9nKFxuICBsb2dDYWxsYmFjazogTG9nQ2FsbGJhY2sgfCBudWxsLFxuICBvcHRpb25zPzogTG9nT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmIChsb2dDYWxsYmFjayAhPT0gbnVsbCAmJiB0eXBlb2YgbG9nQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5JTlZBTElEX0xPR19BUkdVTUVOVCk7XG4gIH1cbiAgc2V0VXNlckxvZ0hhbmRsZXIobG9nQ2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFNldHMgbG9nIGxldmVsIGZvciBhbGwgRmlyZWJhc2UgU0RLcy5cbiAqXG4gKiBBbGwgb2YgdGhlIGxvZyB0eXBlcyBhYm92ZSB0aGUgY3VycmVudCBsb2cgbGV2ZWwgYXJlIGNhcHR1cmVkIChpLmUuIGlmXG4gKiB5b3Ugc2V0IHRoZSBsb2cgbGV2ZWwgdG8gYGluZm9gLCBlcnJvcnMgYXJlIGxvZ2dlZCwgYnV0IGBkZWJ1Z2AgYW5kXG4gKiBgdmVyYm9zZWAgbG9ncyBhcmUgbm90KS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dMZXZlbChsb2dMZXZlbDogTG9nTGV2ZWxTdHJpbmcpOiB2b2lkIHtcbiAgc2V0TG9nTGV2ZWxJbXBsKGxvZ0xldmVsKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgREJTY2hlbWEsIG9wZW5EQiwgSURCUERhdGFiYXNlIH0gZnJvbSAnaWRiJztcbmltcG9ydCB7IEFwcEVycm9yLCBFUlJPUl9GQUNUT1JZIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHAgfSBmcm9tICcuL3B1YmxpYy10eXBlcyc7XG5pbXBvcnQgeyBIZWFydGJlYXRzSW5JbmRleGVkREIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuY29uc3QgREJfTkFNRSA9ICdmaXJlYmFzZS1oZWFydGJlYXQtZGF0YWJhc2UnO1xuY29uc3QgREJfVkVSU0lPTiA9IDE7XG5jb25zdCBTVE9SRV9OQU1FID0gJ2ZpcmViYXNlLWhlYXJ0YmVhdC1zdG9yZSc7XG5cbmludGVyZmFjZSBBcHBEQiBleHRlbmRzIERCU2NoZW1hIHtcbiAgJ2ZpcmViYXNlLWhlYXJ0YmVhdC1zdG9yZSc6IHtcbiAgICBrZXk6IHN0cmluZztcbiAgICB2YWx1ZTogSGVhcnRiZWF0c0luSW5kZXhlZERCO1xuICB9O1xufVxuXG5sZXQgZGJQcm9taXNlOiBQcm9taXNlPElEQlBEYXRhYmFzZTxBcHBEQj4+IHwgbnVsbCA9IG51bGw7XG5mdW5jdGlvbiBnZXREYlByb21pc2UoKTogUHJvbWlzZTxJREJQRGF0YWJhc2U8QXBwREI+PiB7XG4gIGlmICghZGJQcm9taXNlKSB7XG4gICAgZGJQcm9taXNlID0gb3BlbkRCPEFwcERCPihEQl9OQU1FLCBEQl9WRVJTSU9OLCB7XG4gICAgICB1cGdyYWRlOiAoZGIsIG9sZFZlcnNpb24pID0+IHtcbiAgICAgICAgLy8gV2UgZG9uJ3QgdXNlICdicmVhaycgaW4gdGhpcyBzd2l0Y2ggc3RhdGVtZW50LCB0aGUgZmFsbC10aHJvdWdoXG4gICAgICAgIC8vIGJlaGF2aW9yIGlzIHdoYXQgd2Ugd2FudCwgYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlblxuICAgICAgICAvLyB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlIHdhbnQgQUxMIHRoZSBtaWdyYXRpb25zXG4gICAgICAgIC8vIHRoYXQgY29ycmVzcG9uZCB0byB0aG9zZSB2ZXJzaW9ucyB0byBydW4sIG5vdCBvbmx5IHRoZSBsYXN0IG9uZS5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgICAgICBzd2l0Y2ggKG9sZFZlcnNpb24pIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShTVE9SRV9OQU1FKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuSURCX09QRU4sIHtcbiAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IGUubWVzc2FnZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRiUHJvbWlzZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQihcbiAgYXBwOiBGaXJlYmFzZUFwcFxuKTogUHJvbWlzZTxIZWFydGJlYXRzSW5JbmRleGVkREIgfCB1bmRlZmluZWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xuICAgIHJldHVybiBkYlxuICAgICAgLnRyYW5zYWN0aW9uKFNUT1JFX05BTUUpXG4gICAgICAub2JqZWN0U3RvcmUoU1RPUkVfTkFNRSlcbiAgICAgIC5nZXQoY29tcHV0ZUtleShhcHApKSBhcyBQcm9taXNlPEhlYXJ0YmVhdHNJbkluZGV4ZWREQiB8IHVuZGVmaW5lZD47XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IpIHtcbiAgICAgIGxvZ2dlci53YXJuKGUubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlkYkdldEVycm9yID0gRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuSURCX0dFVCwge1xuICAgICAgICBvcmlnaW5hbEVycm9yTWVzc2FnZTogKGUgYXMgRXJyb3IpPy5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci53YXJuKGlkYkdldEVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIoXG4gIGFwcDogRmlyZWJhc2VBcHAsXG4gIGhlYXJ0YmVhdE9iamVjdDogSGVhcnRiZWF0c0luSW5kZXhlZERCXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHgub2JqZWN0U3RvcmUoU1RPUkVfTkFNRSk7XG4gICAgYXdhaXQgb2JqZWN0U3RvcmUucHV0KGhlYXJ0YmVhdE9iamVjdCwgY29tcHV0ZUtleShhcHApKTtcbiAgICByZXR1cm4gdHguZG9uZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgRmlyZWJhc2VFcnJvcikge1xuICAgICAgbG9nZ2VyLndhcm4oZS5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWRiR2V0RXJyb3IgPSBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5JREJfV1JJVEUsIHtcbiAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IChlIGFzIEVycm9yKT8ubWVzc2FnZVxuICAgICAgfSk7XG4gICAgICBsb2dnZXIud2FybihpZGJHZXRFcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZUtleShhcHA6IEZpcmViYXNlQXBwKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2FwcC5uYW1lfSEke2FwcC5vcHRpb25zLmFwcElkfWA7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50Q29udGFpbmVyIH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQge1xuICBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyxcbiAgaXNJbmRleGVkREJBdmFpbGFibGUsXG4gIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGVcbn0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHtcbiAgcmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCLFxuICB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQlxufSBmcm9tICcuL2luZGV4ZWRkYic7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcCB9IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7XG4gIEhlYXJ0YmVhdHNCeVVzZXJBZ2VudCxcbiAgSGVhcnRiZWF0U2VydmljZSxcbiAgSGVhcnRiZWF0c0luSW5kZXhlZERCLFxuICBIZWFydGJlYXRTdG9yYWdlLFxuICBTaW5nbGVEYXRlSGVhcnRiZWF0XG59IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBNQVhfSEVBREVSX0JZVEVTID0gMTAyNDtcbi8vIDMwIGRheXNcbmNvbnN0IFNUT1JFRF9IRUFSVEJFQVRfUkVURU5USU9OX01BWF9NSUxMSVMgPSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbmV4cG9ydCBjbGFzcyBIZWFydGJlYXRTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIEhlYXJ0YmVhdFNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIHBlcnNpc3RlbmNlIGxheWVyIGZvciBoZWFydGJlYXRzXG4gICAqIExlYXZlIHB1YmxpYyBmb3IgZWFzaWVyIHRlc3RpbmcuXG4gICAqL1xuICBfc3RvcmFnZTogSGVhcnRiZWF0U3RvcmFnZUltcGw7XG5cbiAgLyoqXG4gICAqIEluLW1lbW9yeSBjYWNoZSBmb3IgaGVhcnRiZWF0cywgdXNlZCBieSBnZXRIZWFydGJlYXRzSGVhZGVyKCkgdG8gZ2VuZXJhdGVcbiAgICogdGhlIGhlYWRlciBzdHJpbmcuXG4gICAqIFN0b3JlcyBvbmUgcmVjb3JkIHBlciBkYXRlLiBUaGlzIHdpbGwgYmUgY29uc29saWRhdGVkIGludG8gdGhlIHN0YW5kYXJkXG4gICAqIGZvcm1hdCBvZiBvbmUgcmVjb3JkIHBlciB1c2VyIGFnZW50IHN0cmluZyBiZWZvcmUgYmVpbmcgc2VudCBhcyBhIGhlYWRlci5cbiAgICogUG9wdWxhdGVkIGZyb20gaW5kZXhlZERCIHdoZW4gdGhlIGNvbnRyb2xsZXIgaXMgaW5zdGFudGlhdGVkIGFuZCBzaG91bGRcbiAgICogYmUga2VwdCBpbiBzeW5jIHdpdGggaW5kZXhlZERCLlxuICAgKiBMZWF2ZSBwdWJsaWMgZm9yIGVhc2llciB0ZXN0aW5nLlxuICAgKi9cbiAgX2hlYXJ0YmVhdHNDYWNoZTogSGVhcnRiZWF0c0luSW5kZXhlZERCIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIHRoZSBpbml0aWFsaXphdGlvbiBwcm9taXNlIGZvciBwb3B1bGF0aW5nIGhlYXJ0YmVhdENhY2hlLlxuICAgKiBJZiBnZXRIZWFydGJlYXRzSGVhZGVyKCkgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgKiAoaGVhcmJlYXRzQ2FjaGUgPT0gbnVsbCksIGl0IHNob3VsZCB3YWl0IGZvciB0aGlzIHByb21pc2VcbiAgICogTGVhdmUgcHVibGljIGZvciBlYXNpZXIgdGVzdGluZy5cbiAgICovXG4gIF9oZWFydGJlYXRzQ2FjaGVQcm9taXNlOiBQcm9taXNlPEhlYXJ0YmVhdHNJbkluZGV4ZWREQj47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXIpIHtcbiAgICBjb25zdCBhcHAgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XG4gICAgdGhpcy5fc3RvcmFnZSA9IG5ldyBIZWFydGJlYXRTdG9yYWdlSW1wbChhcHApO1xuICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2UgPSB0aGlzLl9zdG9yYWdlLnJlYWQoKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPSByZXN1bHQ7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB0byByZXBvcnQgYSBoZWFydGJlYXQuIFRoZSBmdW5jdGlvbiB3aWxsIGdlbmVyYXRlXG4gICAqIGEgSGVhcnRiZWF0c0J5VXNlckFnZW50IG9iamVjdCwgdXBkYXRlIGhlYXJ0YmVhdHNDYWNoZSwgYW5kIHBlcnNpc3QgaXRcbiAgICogdG8gSW5kZXhlZERCLlxuICAgKiBOb3RlIHRoYXQgd2Ugb25seSBzdG9yZSBvbmUgaGVhcnRiZWF0IHBlciBkYXkuIFNvIGlmIGEgaGVhcnRiZWF0IGZvciB0b2RheSBpc1xuICAgKiBhbHJlYWR5IGxvZ2dlZCwgc3Vic2VxdWVudCBjYWxscyB0byB0aGlzIGZ1bmN0aW9uIGluIHRoZSBzYW1lIGRheSB3aWxsIGJlIGlnbm9yZWQuXG4gICAqL1xuICBhc3luYyB0cmlnZ2VySGVhcnRiZWF0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBsYXRmb3JtTG9nZ2VyID0gdGhpcy5jb250YWluZXJcbiAgICAgIC5nZXRQcm92aWRlcigncGxhdGZvcm0tbG9nZ2VyJylcbiAgICAgIC5nZXRJbW1lZGlhdGUoKTtcblxuICAgIC8vIFRoaXMgaXMgdGhlIFwiRmlyZWJhc2UgdXNlciBhZ2VudFwiIHN0cmluZyBmcm9tIHRoZSBwbGF0Zm9ybSBsb2dnZXJcbiAgICAvLyBzZXJ2aWNlLCBub3QgdGhlIGJyb3dzZXIgdXNlciBhZ2VudC5cbiAgICBjb25zdCBhZ2VudCA9IHBsYXRmb3JtTG9nZ2VyLmdldFBsYXRmb3JtSW5mb1N0cmluZygpO1xuICAgIGNvbnN0IGRhdGUgPSBnZXRVVENEYXRlU3RyaW5nKCk7XG4gICAgaWYgKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlID0gYXdhaXQgdGhpcy5faGVhcnRiZWF0c0NhY2hlUHJvbWlzZTtcbiAgICB9XG4gICAgLy8gRG8gbm90IHN0b3JlIGEgaGVhcnRiZWF0IGlmIG9uZSBpcyBhbHJlYWR5IHN0b3JlZCBmb3IgdGhpcyBkYXlcbiAgICAvLyBvciBpZiBhIGhlYWRlciBoYXMgYWxyZWFkeSBiZWVuIHNlbnQgdG9kYXkuXG4gICAgaWYgKFxuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA9PT0gZGF0ZSB8fFxuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMuc29tZShcbiAgICAgICAgc2luZ2xlRGF0ZUhlYXJ0YmVhdCA9PiBzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUgPT09IGRhdGVcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlcmUgaXMgbm8gZW50cnkgZm9yIHRoaXMgZGF0ZS4gQ3JlYXRlIG9uZS5cbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLnB1c2goeyBkYXRlLCBhZ2VudCB9KTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIGVudHJpZXMgb2xkZXIgdGhhbiAzMCBkYXlzLlxuICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzID0gdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMuZmlsdGVyKFxuICAgICAgc2luZ2xlRGF0ZUhlYXJ0YmVhdCA9PiB7XG4gICAgICAgIGNvbnN0IGhiVGltZXN0YW1wID0gbmV3IERhdGUoc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlKS52YWx1ZU9mKCk7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybiBub3cgLSBoYlRpbWVzdGFtcCA8PSBTVE9SRURfSEVBUlRCRUFUX1JFVEVOVElPTl9NQVhfTUlMTElTO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2Uub3ZlcndyaXRlKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyB3aGljaCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIGhlYXJ0YmVhdC1zcGVjaWZpYyBoZWFkZXIgZGlyZWN0bHkuXG4gICAqIEl0IGFsc28gY2xlYXJzIGFsbCBoZWFydGJlYXRzIGZyb20gbWVtb3J5IGFzIHdlbGwgYXMgaW4gSW5kZXhlZERCLlxuICAgKlxuICAgKiBOT1RFOiBDb25zdW1pbmcgcHJvZHVjdCBTREtzIHNob3VsZCBub3Qgc2VuZCB0aGUgaGVhZGVyIGlmIHRoaXMgbWV0aG9kXG4gICAqIHJldHVybnMgYW4gZW1wdHkgc3RyaW5nLlxuICAgKi9cbiAgYXN5bmMgZ2V0SGVhcnRiZWF0c0hlYWRlcigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmICh0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPT09IG51bGwpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2U7XG4gICAgfVxuICAgIC8vIElmIGl0J3Mgc3RpbGwgbnVsbCBvciB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZXJlIGlzIG5vIGRhdGEgdG8gc2VuZC5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPT09IG51bGwgfHxcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLmxlbmd0aCA9PT0gMFxuICAgICkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gZ2V0VVRDRGF0ZVN0cmluZygpO1xuICAgIC8vIEV4dHJhY3QgYXMgbWFueSBoZWFydGJlYXRzIGZyb20gdGhlIGNhY2hlIGFzIHdpbGwgZml0IHVuZGVyIHRoZSBzaXplIGxpbWl0LlxuICAgIGNvbnN0IHsgaGVhcnRiZWF0c1RvU2VuZCwgdW5zZW50RW50cmllcyB9ID0gZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIoXG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0c1xuICAgICk7XG4gICAgY29uc3QgaGVhZGVyU3RyaW5nID0gYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IDIsIGhlYXJ0YmVhdHM6IGhlYXJ0YmVhdHNUb1NlbmQgfSlcbiAgICApO1xuICAgIC8vIFN0b3JlIGxhc3Qgc2VudCBkYXRlIHRvIHByZXZlbnQgYW5vdGhlciBiZWluZyBsb2dnZWQvc2VudCBmb3IgdGhlIHNhbWUgZGF5LlxuICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPSBkYXRlO1xuICAgIGlmICh1bnNlbnRFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFN0b3JlIGFueSB1bnNlbnQgZW50cmllcyBpZiB0aGV5IGV4aXN0LlxuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSB1bnNlbnRFbnRyaWVzO1xuICAgICAgLy8gVGhpcyBzZWVtcyBtb3JlIGxpa2VseSB0aGFuIGVtcHR5aW5nIHRoZSBhcnJheSAoYmVsb3cpIHRvIGxlYWQgdG8gc29tZSBvZGQgc3RhdGVcbiAgICAgIC8vIHNpbmNlIHRoZSBjYWNoZSBpc24ndCBlbXB0eSBhbmQgdGhpcyB3aWxsIGJlIGNhbGxlZCBhZ2FpbiBvbiB0aGUgbmV4dCByZXF1ZXN0LFxuICAgICAgLy8gYW5kIGlzIHByb2JhYmx5IHNhZmVzdCBpZiB3ZSBhd2FpdCBpdC5cbiAgICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2Uub3ZlcndyaXRlKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzID0gW107XG4gICAgICAvLyBEbyBub3Qgd2FpdCBmb3IgdGhpcywgdG8gcmVkdWNlIGxhdGVuY3kuXG4gICAgICB2b2lkIHRoaXMuX3N0b3JhZ2Uub3ZlcndyaXRlKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJTdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VVRDRGF0ZVN0cmluZygpOiBzdHJpbmcge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIC8vIFJldHVybnMgZGF0ZSBmb3JtYXQgJ1lZWVktTU0tREQnXG4gIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SGVhcnRiZWF0c0ZvckhlYWRlcihcbiAgaGVhcnRiZWF0c0NhY2hlOiBTaW5nbGVEYXRlSGVhcnRiZWF0W10sXG4gIG1heFNpemUgPSBNQVhfSEVBREVSX0JZVEVTXG4pOiB7XG4gIGhlYXJ0YmVhdHNUb1NlbmQ6IEhlYXJ0YmVhdHNCeVVzZXJBZ2VudFtdO1xuICB1bnNlbnRFbnRyaWVzOiBTaW5nbGVEYXRlSGVhcnRiZWF0W107XG59IHtcbiAgLy8gSGVhcnRiZWF0cyBncm91cGVkIGJ5IHVzZXIgYWdlbnQgaW4gdGhlIHN0YW5kYXJkIGZvcm1hdCB0byBiZSBzZW50IGluXG4gIC8vIHRoZSBoZWFkZXIuXG4gIGNvbnN0IGhlYXJ0YmVhdHNUb1NlbmQ6IEhlYXJ0YmVhdHNCeVVzZXJBZ2VudFtdID0gW107XG4gIC8vIFNpbmdsZSBkYXRlIGZvcm1hdCBoZWFydGJlYXRzIHRoYXQgYXJlIG5vdCBzZW50LlxuICBsZXQgdW5zZW50RW50cmllcyA9IGhlYXJ0YmVhdHNDYWNoZS5zbGljZSgpO1xuICBmb3IgKGNvbnN0IHNpbmdsZURhdGVIZWFydGJlYXQgb2YgaGVhcnRiZWF0c0NhY2hlKSB7XG4gICAgLy8gTG9vayBmb3IgYW4gZXhpc3RpbmcgZW50cnkgd2l0aCB0aGUgc2FtZSB1c2VyIGFnZW50LlxuICAgIGNvbnN0IGhlYXJ0YmVhdEVudHJ5ID0gaGVhcnRiZWF0c1RvU2VuZC5maW5kKFxuICAgICAgaGIgPT4gaGIuYWdlbnQgPT09IHNpbmdsZURhdGVIZWFydGJlYXQuYWdlbnRcbiAgICApO1xuICAgIGlmICghaGVhcnRiZWF0RW50cnkpIHtcbiAgICAgIC8vIElmIG5vIGVudHJ5IGZvciB0aGlzIHVzZXIgYWdlbnQgZXhpc3RzLCBjcmVhdGUgb25lLlxuICAgICAgaGVhcnRiZWF0c1RvU2VuZC5wdXNoKHtcbiAgICAgICAgYWdlbnQ6IHNpbmdsZURhdGVIZWFydGJlYXQuYWdlbnQsXG4gICAgICAgIGRhdGVzOiBbc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlXVxuICAgICAgfSk7XG4gICAgICBpZiAoY291bnRCeXRlcyhoZWFydGJlYXRzVG9TZW5kKSA+IG1heFNpemUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGhlYWRlciB3b3VsZCBleGNlZWQgbWF4IHNpemUsIHJlbW92ZSB0aGUgYWRkZWQgaGVhcnRiZWF0XG4gICAgICAgIC8vIGVudHJ5IGFuZCBzdG9wIGFkZGluZyB0byB0aGUgaGVhZGVyLlxuICAgICAgICBoZWFydGJlYXRzVG9TZW5kLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVhcnRiZWF0RW50cnkuZGF0ZXMucHVzaChzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUpO1xuICAgICAgLy8gSWYgdGhlIGhlYWRlciB3b3VsZCBleGNlZWQgbWF4IHNpemUsIHJlbW92ZSB0aGUgYWRkZWQgZGF0ZVxuICAgICAgLy8gYW5kIHN0b3AgYWRkaW5nIHRvIHRoZSBoZWFkZXIuXG4gICAgICBpZiAoY291bnRCeXRlcyhoZWFydGJlYXRzVG9TZW5kKSA+IG1heFNpemUpIHtcbiAgICAgICAgaGVhcnRiZWF0RW50cnkuZGF0ZXMucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBQb3AgdW5zZW50IGVudHJ5IGZyb20gcXVldWUuIChTa2lwcGVkIGlmIGFkZGluZyB0aGUgZW50cnkgZXhjZWVkZWRcbiAgICAvLyBxdW90YSBhbmQgdGhlIGxvb3AgYnJlYWtzIGVhcmx5LilcbiAgICB1bnNlbnRFbnRyaWVzID0gdW5zZW50RW50cmllcy5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYXJ0YmVhdHNUb1NlbmQsXG4gICAgdW5zZW50RW50cmllc1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgSGVhcnRiZWF0U3RvcmFnZUltcGwgaW1wbGVtZW50cyBIZWFydGJlYXRTdG9yYWdlIHtcbiAgcHJpdmF0ZSBfY2FuVXNlSW5kZXhlZERCUHJvbWlzZTogUHJvbWlzZTxib29sZWFuPjtcbiAgY29uc3RydWN0b3IocHVibGljIGFwcDogRmlyZWJhc2VBcHApIHtcbiAgICB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlID0gdGhpcy5ydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrKCk7XG4gIH1cbiAgYXN5bmMgcnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjaygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzSW5kZXhlZERCQXZhaWxhYmxlKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKVxuICAgICAgICAudGhlbigoKSA9PiB0cnVlKVxuICAgICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZCBhbGwgaGVhcnRiZWF0cy5cbiAgICovXG4gIGFzeW5jIHJlYWQoKTogUHJvbWlzZTxIZWFydGJlYXRzSW5JbmRleGVkREI+IHtcbiAgICBjb25zdCBjYW5Vc2VJbmRleGVkREIgPSBhd2FpdCB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlO1xuICAgIGlmICghY2FuVXNlSW5kZXhlZERCKSB7XG4gICAgICByZXR1cm4geyBoZWFydGJlYXRzOiBbXSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZGJIZWFydGJlYXRPYmplY3QgPSBhd2FpdCByZWFkSGVhcnRiZWF0c0Zyb21JbmRleGVkREIodGhpcy5hcHApO1xuICAgICAgcmV0dXJuIGlkYkhlYXJ0YmVhdE9iamVjdCB8fCB7IGhlYXJ0YmVhdHM6IFtdIH07XG4gICAgfVxuICB9XG4gIC8vIG92ZXJ3cml0ZSB0aGUgc3RvcmFnZSB3aXRoIHRoZSBwcm92aWRlZCBoZWFydGJlYXRzXG4gIGFzeW5jIG92ZXJ3cml0ZShoZWFydGJlYXRzT2JqZWN0OiBIZWFydGJlYXRzSW5JbmRleGVkREIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjYW5Vc2VJbmRleGVkREIgPSBhd2FpdCB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlO1xuICAgIGlmICghY2FuVXNlSW5kZXhlZERCKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCA9IGF3YWl0IHRoaXMucmVhZCgpO1xuICAgICAgcmV0dXJuIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKHRoaXMuYXBwLCB7XG4gICAgICAgIGxhc3RTZW50SGVhcnRiZWF0RGF0ZTpcbiAgICAgICAgICBoZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA/P1xuICAgICAgICAgIGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdC5sYXN0U2VudEhlYXJ0YmVhdERhdGUsXG4gICAgICAgIGhlYXJ0YmVhdHM6IGhlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0c1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIGFkZCBoZWFydGJlYXRzXG4gIGFzeW5jIGFkZChoZWFydGJlYXRzT2JqZWN0OiBIZWFydGJlYXRzSW5JbmRleGVkREIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjYW5Vc2VJbmRleGVkREIgPSBhd2FpdCB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlO1xuICAgIGlmICghY2FuVXNlSW5kZXhlZERCKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCA9IGF3YWl0IHRoaXMucmVhZCgpO1xuICAgICAgcmV0dXJuIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKHRoaXMuYXBwLCB7XG4gICAgICAgIGxhc3RTZW50SGVhcnRiZWF0RGF0ZTpcbiAgICAgICAgICBoZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA/P1xuICAgICAgICAgIGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdC5sYXN0U2VudEhlYXJ0YmVhdERhdGUsXG4gICAgICAgIGhlYXJ0YmVhdHM6IFtcbiAgICAgICAgICAuLi5leGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0cyxcbiAgICAgICAgICAuLi5oZWFydGJlYXRzT2JqZWN0LmhlYXJ0YmVhdHNcbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIGJ5dGVzIG9mIGEgSGVhcnRiZWF0c0J5VXNlckFnZW50IGFycmF5IGFmdGVyIGJlaW5nIHdyYXBwZWRcbiAqIGluIGEgcGxhdGZvcm0gbG9nZ2luZyBoZWFkZXIgSlNPTiBvYmplY3QsIHN0cmluZ2lmaWVkLCBhbmQgY29udmVydGVkXG4gKiB0byBiYXNlIDY0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY291bnRCeXRlcyhoZWFydGJlYXRzQ2FjaGU6IEhlYXJ0YmVhdHNCeVVzZXJBZ2VudFtdKTogbnVtYmVyIHtcbiAgLy8gYmFzZTY0IGhhcyBhIHJlc3RyaWN0ZWQgc2V0IG9mIGNoYXJhY3RlcnMsIGFsbCBvZiB3aGljaCBzaG91bGQgYmUgMSBieXRlLlxuICByZXR1cm4gYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoXG4gICAgLy8gaGVhcnRiZWF0c0NhY2hlIHdyYXBwZXIgcHJvcGVydGllc1xuICAgIEpTT04uc3RyaW5naWZ5KHsgdmVyc2lvbjogMiwgaGVhcnRiZWF0czogaGVhcnRiZWF0c0NhY2hlIH0pXG4gICkubGVuZ3RoO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbCB9IGZyb20gJy4vcGxhdGZvcm1Mb2dnZXJTZXJ2aWNlJztcbmltcG9ydCB7IG5hbWUsIHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgX3JlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9pbnRlcm5hbCc7XG5pbXBvcnQgeyByZWdpc3RlclZlcnNpb24gfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBIZWFydGJlYXRTZXJ2aWNlSW1wbCB9IGZyb20gJy4vaGVhcnRiZWF0U2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvcmVDb21wb25lbnRzKHZhcmlhbnQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50KFxuICAgIG5ldyBDb21wb25lbnQoXG4gICAgICAncGxhdGZvcm0tbG9nZ2VyJyxcbiAgICAgIGNvbnRhaW5lciA9PiBuZXcgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbChjb250YWluZXIpLFxuICAgICAgQ29tcG9uZW50VHlwZS5QUklWQVRFXG4gICAgKVxuICApO1xuICBfcmVnaXN0ZXJDb21wb25lbnQoXG4gICAgbmV3IENvbXBvbmVudChcbiAgICAgICdoZWFydGJlYXQnLFxuICAgICAgY29udGFpbmVyID0+IG5ldyBIZWFydGJlYXRTZXJ2aWNlSW1wbChjb250YWluZXIpLFxuICAgICAgQ29tcG9uZW50VHlwZS5QUklWQVRFXG4gICAgKVxuICApO1xuXG4gIC8vIFJlZ2lzdGVyIGBhcHBgIHBhY2thZ2UuXG4gIHJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCB2YXJpYW50KTtcbiAgLy8gQlVJTERfVEFSR0VUIHdpbGwgYmUgcmVwbGFjZWQgYnkgdmFsdWVzIGxpa2UgZXNtNSwgZXNtMjAxNywgY2pzNSwgZXRjIGR1cmluZyB0aGUgY29tcGlsYXRpb25cbiAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdfX0JVSUxEX1RBUkdFVF9fJyk7XG4gIC8vIFJlZ2lzdGVyIHBsYXRmb3JtIFNESyBpZGVudGlmaWVyIChubyB2ZXJzaW9uKS5cbiAgcmVnaXN0ZXJWZXJzaW9uKCdmaXJlLWpzJywgJycpO1xufVxuIiwgIi8qKlxuICogRmlyZWJhc2UgQXBwXG4gKlxuICogQHJlbWFya3MgVGhpcyBwYWNrYWdlIGNvb3JkaW5hdGVzIHRoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIGRpZmZlcmVudCBGaXJlYmFzZSBjb21wb25lbnRzXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyByZWdpc3RlckNvcmVDb21wb25lbnRzIH0gZnJvbSAnLi9yZWdpc3RlckNvcmVDb21wb25lbnRzJztcblxuZXhwb3J0ICogZnJvbSAnLi9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcm5hbCc7XG5leHBvcnQgKiBmcm9tICcuL3B1YmxpYy10eXBlcyc7XG5cbnJlZ2lzdGVyQ29yZUNvbXBvbmVudHMoJ19fUlVOVElNRV9FTlZfXycpO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyByZWdpc3RlclZlcnNpb24gfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IG5hbWUsIHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2FwcCcpO1xuZXhwb3J0ICogZnJvbSAnQGZpcmViYXNlL2FwcCc7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbmV4cG9ydCBjb25zdCBQRU5ESU5HX1RJTUVPVVRfTVMgPSAxMDAwMDtcblxuZXhwb3J0IGNvbnN0IFBBQ0tBR0VfVkVSU0lPTiA9IGB3OiR7dmVyc2lvbn1gO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX0FVVEhfVkVSU0lPTiA9ICdGSVNfdjInO1xuXG5leHBvcnQgY29uc3QgSU5TVEFMTEFUSU9OU19BUElfVVJMID1cbiAgJ2h0dHBzOi8vZmlyZWJhc2VpbnN0YWxsYXRpb25zLmdvb2dsZWFwaXMuY29tL3YxJztcblxuZXhwb3J0IGNvbnN0IFRPS0VOX0VYUElSQVRJT05fQlVGRkVSID0gNjAgKiA2MCAqIDEwMDA7IC8vIE9uZSBob3VyXG5cbmV4cG9ydCBjb25zdCBTRVJWSUNFID0gJ2luc3RhbGxhdGlvbnMnO1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfTkFNRSA9ICdJbnN0YWxsYXRpb25zJztcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBFcnJvckZhY3RvcnksIEZpcmViYXNlRXJyb3IgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBTRVJWSUNFLCBTRVJWSUNFX05BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEVycm9yQ29kZSB7XG4gIE1JU1NJTkdfQVBQX0NPTkZJR19WQUxVRVMgPSAnbWlzc2luZy1hcHAtY29uZmlnLXZhbHVlcycsXG4gIE5PVF9SRUdJU1RFUkVEID0gJ25vdC1yZWdpc3RlcmVkJyxcbiAgSU5TVEFMTEFUSU9OX05PVF9GT1VORCA9ICdpbnN0YWxsYXRpb24tbm90LWZvdW5kJyxcbiAgUkVRVUVTVF9GQUlMRUQgPSAncmVxdWVzdC1mYWlsZWQnLFxuICBBUFBfT0ZGTElORSA9ICdhcHAtb2ZmbGluZScsXG4gIERFTEVURV9QRU5ESU5HX1JFR0lTVFJBVElPTiA9ICdkZWxldGUtcGVuZGluZy1yZWdpc3RyYXRpb24nXG59XG5cbmNvbnN0IEVSUk9SX0RFU0NSSVBUSU9OX01BUDogeyByZWFkb25seSBba2V5IGluIEVycm9yQ29kZV06IHN0cmluZyB9ID0ge1xuICBbRXJyb3JDb2RlLk1JU1NJTkdfQVBQX0NPTkZJR19WQUxVRVNdOlxuICAgICdNaXNzaW5nIEFwcCBjb25maWd1cmF0aW9uIHZhbHVlOiBcInskdmFsdWVOYW1lfVwiJyxcbiAgW0Vycm9yQ29kZS5OT1RfUkVHSVNURVJFRF06ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgbm90IHJlZ2lzdGVyZWQuJyxcbiAgW0Vycm9yQ29kZS5JTlNUQUxMQVRJT05fTk9UX0ZPVU5EXTogJ0ZpcmViYXNlIEluc3RhbGxhdGlvbiBub3QgZm91bmQuJyxcbiAgW0Vycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRF06XG4gICAgJ3skcmVxdWVzdE5hbWV9IHJlcXVlc3QgZmFpbGVkIHdpdGggZXJyb3IgXCJ7JHNlcnZlckNvZGV9IHskc2VydmVyU3RhdHVzfTogeyRzZXJ2ZXJNZXNzYWdlfVwiJyxcbiAgW0Vycm9yQ29kZS5BUFBfT0ZGTElORV06ICdDb3VsZCBub3QgcHJvY2VzcyByZXF1ZXN0LiBBcHBsaWNhdGlvbiBvZmZsaW5lLicsXG4gIFtFcnJvckNvZGUuREVMRVRFX1BFTkRJTkdfUkVHSVNUUkFUSU9OXTpcbiAgICBcIkNhbid0IGRlbGV0ZSBpbnN0YWxsYXRpb24gd2hpbGUgdGhlcmUgaXMgYSBwZW5kaW5nIHJlZ2lzdHJhdGlvbiByZXF1ZXN0LlwiXG59O1xuXG5pbnRlcmZhY2UgRXJyb3JQYXJhbXMge1xuICBbRXJyb3JDb2RlLk1JU1NJTkdfQVBQX0NPTkZJR19WQUxVRVNdOiB7XG4gICAgdmFsdWVOYW1lOiBzdHJpbmc7XG4gIH07XG4gIFtFcnJvckNvZGUuUkVRVUVTVF9GQUlMRURdOiB7XG4gICAgcmVxdWVzdE5hbWU6IHN0cmluZztcbiAgICBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjsgLy8gdG8gbWFrZSBUeXBlc2NyaXB0IDMuOCBoYXBweVxuICB9ICYgU2VydmVyRXJyb3JEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgRVJST1JfRkFDVE9SWSA9IG5ldyBFcnJvckZhY3Rvcnk8RXJyb3JDb2RlLCBFcnJvclBhcmFtcz4oXG4gIFNFUlZJQ0UsXG4gIFNFUlZJQ0VfTkFNRSxcbiAgRVJST1JfREVTQ1JJUFRJT05fTUFQXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlckVycm9yRGF0YSB7XG4gIHNlcnZlckNvZGU6IG51bWJlcjtcbiAgc2VydmVyTWVzc2FnZTogc3RyaW5nO1xuICBzZXJ2ZXJTdGF0dXM6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVyRXJyb3IgPSBGaXJlYmFzZUVycm9yICYgeyBjdXN0b21EYXRhOiBTZXJ2ZXJFcnJvckRhdGEgfTtcblxuLyoqIFJldHVybnMgdHJ1ZSBpZiBlcnJvciBpcyBhIEZpcmViYXNlRXJyb3IgdGhhdCBpcyBiYXNlZCBvbiBhbiBlcnJvciBmcm9tIHRoZSBzZXJ2ZXIuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZXJ2ZXJFcnJvcihlcnJvcjogdW5rbm93bik6IGVycm9yIGlzIFNlcnZlckVycm9yIHtcbiAgcmV0dXJuIChcbiAgICBlcnJvciBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IgJiZcbiAgICBlcnJvci5jb2RlLmluY2x1ZGVzKEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRClcbiAgKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgR2VuZXJhdGVBdXRoVG9rZW5SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLXJlc3BvbnNlJztcbmltcG9ydCB7XG4gIENvbXBsZXRlZEF1dGhUb2tlbixcbiAgUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5LFxuICBSZXF1ZXN0U3RhdHVzXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7XG4gIElOU1RBTExBVElPTlNfQVBJX1VSTCxcbiAgSU5URVJOQUxfQVVUSF9WRVJTSU9OXG59IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4uL3V0aWwvZXJyb3JzJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KHsgcHJvamVjdElkIH06IEFwcENvbmZpZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtJTlNUQUxMQVRJT05TX0FQSV9VUkx9L3Byb2plY3RzLyR7cHJvamVjdElkfS9pbnN0YWxsYXRpb25zYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKFxuICByZXNwb25zZTogR2VuZXJhdGVBdXRoVG9rZW5SZXNwb25zZVxuKTogQ29tcGxldGVkQXV0aFRva2VuIHtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogcmVzcG9uc2UudG9rZW4sXG4gICAgcmVxdWVzdFN0YXR1czogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQsXG4gICAgZXhwaXJlc0luOiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2UuZXhwaXJlc0luKSxcbiAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KClcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVycm9yRnJvbVJlc3BvbnNlKFxuICByZXF1ZXN0TmFtZTogc3RyaW5nLFxuICByZXNwb25zZTogUmVzcG9uc2Vcbik6IFByb21pc2U8RmlyZWJhc2VFcnJvcj4ge1xuICBjb25zdCByZXNwb25zZUpzb246IEVycm9yUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGVycm9yRGF0YSA9IHJlc3BvbnNlSnNvbi5lcnJvcjtcbiAgcmV0dXJuIEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCwge1xuICAgIHJlcXVlc3ROYW1lLFxuICAgIHNlcnZlckNvZGU6IGVycm9yRGF0YS5jb2RlLFxuICAgIHNlcnZlck1lc3NhZ2U6IGVycm9yRGF0YS5tZXNzYWdlLFxuICAgIHNlcnZlclN0YXR1czogZXJyb3JEYXRhLnN0YXR1c1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhlYWRlcnMoeyBhcGlLZXkgfTogQXBwQ29uZmlnKTogSGVhZGVycyB7XG4gIHJldHVybiBuZXcgSGVhZGVycyh7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAneC1nb29nLWFwaS1rZXknOiBhcGlLZXlcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkZXJzV2l0aEF1dGgoXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICB7IHJlZnJlc2hUb2tlbiB9OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnlcbik6IEhlYWRlcnMge1xuICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVycyhhcHBDb25maWcpO1xuICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGdldEF1dGhvcml6YXRpb25IZWFkZXIocmVmcmVzaFRva2VuKSk7XG4gIHJldHVybiBoZWFkZXJzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yUmVzcG9uc2Uge1xuICBlcnJvcjoge1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gIH07XG59XG5cbi8qKlxuICogQ2FsbHMgdGhlIHBhc3NlZCBpbiBmZXRjaCB3cmFwcGVyIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cbiAqIElmIHRoZSByZXR1cm5lZCByZXNwb25zZSBoYXMgYSBzdGF0dXMgb2YgNXh4LCByZS1ydW5zIHRoZSBmdW5jdGlvbiBvbmNlIGFuZFxuICogcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXRyeUlmU2VydmVyRXJyb3IoXG4gIGZuOiAoKSA9PiBQcm9taXNlPFJlc3BvbnNlPlxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbigpO1xuXG4gIGlmIChyZXN1bHQuc3RhdHVzID49IDUwMCAmJiByZXN1bHQuc3RhdHVzIDwgNjAwKSB7XG4gICAgLy8gSW50ZXJuYWwgU2VydmVyIEVycm9yLiBSZXRyeSByZXF1ZXN0LlxuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0RXhwaXJlc0luRnJvbVJlc3BvbnNlRXhwaXJlc0luKHJlc3BvbnNlRXhwaXJlc0luOiBzdHJpbmcpOiBudW1iZXIge1xuICAvLyBUaGlzIHdvcmtzIGJlY2F1c2UgdGhlIHNlcnZlciB3aWxsIG5ldmVyIHJlc3BvbmQgd2l0aCBmcmFjdGlvbnMgb2YgYSBzZWNvbmQuXG4gIHJldHVybiBOdW1iZXIocmVzcG9uc2VFeHBpcmVzSW4ucmVwbGFjZSgncycsICcwMDAnKSk7XG59XG5cbmZ1bmN0aW9uIGdldEF1dGhvcml6YXRpb25IZWFkZXIocmVmcmVzaFRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7SU5URVJOQUxfQVVUSF9WRVJTSU9OfSAke3JlZnJlc2hUb2tlbn1gO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENyZWF0ZUluc3RhbGxhdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcGktcmVzcG9uc2UnO1xuaW1wb3J0IHtcbiAgSW5Qcm9ncmVzc0luc3RhbGxhdGlvbkVudHJ5LFxuICBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnksXG4gIFJlcXVlc3RTdGF0dXNcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHsgSU5URVJOQUxfQVVUSF9WRVJTSU9OLCBQQUNLQUdFX1ZFUlNJT04gfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZSxcbiAgZ2V0RXJyb3JGcm9tUmVzcG9uc2UsXG4gIGdldEhlYWRlcnMsXG4gIGdldEluc3RhbGxhdGlvbnNFbmRwb2ludCxcbiAgcmV0cnlJZlNlcnZlckVycm9yXG59IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbGxhdGlvblJlcXVlc3QoXG4gIHsgYXBwQ29uZmlnLCBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIgfTogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCxcbiAgeyBmaWQgfTogSW5Qcm9ncmVzc0luc3RhbGxhdGlvbkVudHJ5XG4pOiBQcm9taXNlPFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeT4ge1xuICBjb25zdCBlbmRwb2ludCA9IGdldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXJzKGFwcENvbmZpZyk7XG5cbiAgLy8gSWYgaGVhcnRiZWF0IHNlcnZpY2UgZXhpc3RzLCBhZGQgdGhlIGhlYXJ0YmVhdCBzdHJpbmcgdG8gdGhlIGhlYWRlci5cbiAgY29uc3QgaGVhcnRiZWF0U2VydmljZSA9IGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xuICAgIG9wdGlvbmFsOiB0cnVlXG4gIH0pO1xuICBpZiAoaGVhcnRiZWF0U2VydmljZSkge1xuICAgIGNvbnN0IGhlYXJ0YmVhdHNIZWFkZXIgPSBhd2FpdCBoZWFydGJlYXRTZXJ2aWNlLmdldEhlYXJ0YmVhdHNIZWFkZXIoKTtcbiAgICBpZiAoaGVhcnRiZWF0c0hlYWRlcikge1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtZmlyZWJhc2UtY2xpZW50JywgaGVhcnRiZWF0c0hlYWRlcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYm9keSA9IHtcbiAgICBmaWQsXG4gICAgYXV0aFZlcnNpb246IElOVEVSTkFMX0FVVEhfVkVSU0lPTixcbiAgICBhcHBJZDogYXBwQ29uZmlnLmFwcElkLFxuICAgIHNka1ZlcnNpb246IFBBQ0tBR0VfVkVSU0lPTlxuICB9O1xuXG4gIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3RJbml0ID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCByZXNwb25zZVZhbHVlOiBDcmVhdGVJbnN0YWxsYXRpb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk6IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSA9IHtcbiAgICAgIGZpZDogcmVzcG9uc2VWYWx1ZS5maWQgfHwgZmlkLFxuICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCxcbiAgICAgIHJlZnJlc2hUb2tlbjogcmVzcG9uc2VWYWx1ZS5yZWZyZXNoVG9rZW4sXG4gICAgICBhdXRoVG9rZW46IGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKHJlc3BvbnNlVmFsdWUuYXV0aFRva2VuKVxuICAgIH07XG4gICAgcmV0dXJuIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBhd2FpdCBnZXRFcnJvckZyb21SZXNwb25zZSgnQ3JlYXRlIEluc3RhbGxhdGlvbicsIHJlc3BvbnNlKTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIGdpdmVuIHRpbWUgcGFzc2VzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICB9KTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyVG9CYXNlNjRVcmxTYWZlKGFycmF5OiBVaW50OEFycmF5KTogc3RyaW5nIHtcbiAgY29uc3QgYjY0ID0gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmFycmF5KSk7XG4gIHJldHVybiBiNjQucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJyk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYnVmZmVyVG9CYXNlNjRVcmxTYWZlIH0gZnJvbSAnLi9idWZmZXItdG8tYmFzZTY0LXVybC1zYWZlJztcblxuZXhwb3J0IGNvbnN0IFZBTElEX0ZJRF9QQVRURVJOID0gL15bY2RlZl1bXFx3LV17MjF9JC87XG5leHBvcnQgY29uc3QgSU5WQUxJRF9GSUQgPSAnJztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBuZXcgRklEIHVzaW5nIHJhbmRvbSB2YWx1ZXMgZnJvbSBXZWIgQ3J5cHRvIEFQSS5cbiAqIFJldHVybnMgYW4gZW1wdHkgc3RyaW5nIGlmIEZJRCBnZW5lcmF0aW9uIGZhaWxzIGZvciBhbnkgcmVhc29uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGaWQoKTogc3RyaW5nIHtcbiAgdHJ5IHtcbiAgICAvLyBBIHZhbGlkIEZJRCBoYXMgZXhhY3RseSAyMiBiYXNlNjQgY2hhcmFjdGVycywgd2hpY2ggaXMgMTMyIGJpdHMsIG9yIDE2LjVcbiAgICAvLyBieXRlcy4gb3VyIGltcGxlbWVudGF0aW9uIGdlbmVyYXRlcyBhIDE3IGJ5dGUgYXJyYXkgaW5zdGVhZC5cbiAgICBjb25zdCBmaWRCeXRlQXJyYXkgPSBuZXcgVWludDhBcnJheSgxNyk7XG4gICAgY29uc3QgY3J5cHRvID1cbiAgICAgIHNlbGYuY3J5cHRvIHx8IChzZWxmIGFzIHVua25vd24gYXMgeyBtc0NyeXB0bzogQ3J5cHRvIH0pLm1zQ3J5cHRvO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZmlkQnl0ZUFycmF5KTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGZpcnN0IDQgcmFuZG9tIGJpdHMgd2l0aCB0aGUgY29uc3RhbnQgRklEIGhlYWRlciBvZiAwYjAxMTEuXG4gICAgZmlkQnl0ZUFycmF5WzBdID0gMGIwMTExMDAwMCArIChmaWRCeXRlQXJyYXlbMF0gJSAwYjAwMDEwMDAwKTtcblxuICAgIGNvbnN0IGZpZCA9IGVuY29kZShmaWRCeXRlQXJyYXkpO1xuXG4gICAgcmV0dXJuIFZBTElEX0ZJRF9QQVRURVJOLnRlc3QoZmlkKSA/IGZpZCA6IElOVkFMSURfRklEO1xuICB9IGNhdGNoIHtcbiAgICAvLyBGSUQgZ2VuZXJhdGlvbiBlcnJvcmVkXG4gICAgcmV0dXJuIElOVkFMSURfRklEO1xuICB9XG59XG5cbi8qKiBDb252ZXJ0cyBhIEZJRCBVaW50OEFycmF5IHRvIGEgYmFzZTY0IHN0cmluZyByZXByZXNlbnRhdGlvbi4gKi9cbmZ1bmN0aW9uIGVuY29kZShmaWRCeXRlQXJyYXk6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICBjb25zdCBiNjRTdHJpbmcgPSBidWZmZXJUb0Jhc2U2NFVybFNhZmUoZmlkQnl0ZUFycmF5KTtcblxuICAvLyBSZW1vdmUgdGhlIDIzcmQgY2hhcmFjdGVyIHRoYXQgd2FzIGFkZGVkIGJlY2F1c2Ugb2YgdGhlIGV4dHJhIDQgYml0cyBhdCB0aGVcbiAgLy8gZW5kIG9mIG91ciAxNyBieXRlIGFycmF5LCBhbmQgdGhlICc9JyBwYWRkaW5nLlxuICByZXR1cm4gYjY0U3RyaW5nLnN1YnN0cigwLCAyMik7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5cbi8qKiBSZXR1cm5zIGEgc3RyaW5nIGtleSB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBhcHAuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5KGFwcENvbmZpZzogQXBwQ29uZmlnKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2FwcENvbmZpZy5hcHBOYW1lfSEke2FwcENvbmZpZy5hcHBJZH1gO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGdldEtleSB9IGZyb20gJy4uL3V0aWwvZ2V0LWtleSc7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IElkQ2hhbmdlQ2FsbGJhY2tGbiB9IGZyb20gJy4uL2FwaSc7XG5cbmNvbnN0IGZpZENoYW5nZUNhbGxiYWNrczogTWFwPHN0cmluZywgU2V0PElkQ2hhbmdlQ2FsbGJhY2tGbj4+ID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIENhbGxzIHRoZSBvbklkQ2hhbmdlIGNhbGxiYWNrcyB3aXRoIHRoZSBuZXcgRklEIHZhbHVlLCBhbmQgYnJvYWRjYXN0cyB0aGVcbiAqIGNoYW5nZSB0byBvdGhlciB0YWJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlkQ2hhbmdlZChhcHBDb25maWc6IEFwcENvbmZpZywgZmlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG5cbiAgY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhrZXksIGZpZCk7XG4gIGJyb2FkY2FzdEZpZENoYW5nZShrZXksIGZpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYWxsYmFjayhcbiAgYXBwQ29uZmlnOiBBcHBDb25maWcsXG4gIGNhbGxiYWNrOiBJZENoYW5nZUNhbGxiYWNrRm5cbik6IHZvaWQge1xuICAvLyBPcGVuIHRoZSBicm9hZGNhc3QgY2hhbm5lbCBpZiBpdCdzIG5vdCBhbHJlYWR5IG9wZW4sXG4gIC8vIHRvIGJlIGFibGUgdG8gbGlzdGVuIHRvIGNoYW5nZSBldmVudHMgZnJvbSBvdGhlciB0YWJzLlxuICBnZXRCcm9hZGNhc3RDaGFubmVsKCk7XG5cbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG5cbiAgbGV0IGNhbGxiYWNrU2V0ID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xuICBpZiAoIWNhbGxiYWNrU2V0KSB7XG4gICAgY2FsbGJhY2tTZXQgPSBuZXcgU2V0KCk7XG4gICAgZmlkQ2hhbmdlQ2FsbGJhY2tzLnNldChrZXksIGNhbGxiYWNrU2V0KTtcbiAgfVxuICBjYWxsYmFja1NldC5hZGQoY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2soXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICBjYWxsYmFjazogSWRDaGFuZ2VDYWxsYmFja0ZuXG4pOiB2b2lkIHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG5cbiAgY29uc3QgY2FsbGJhY2tTZXQgPSBmaWRDaGFuZ2VDYWxsYmFja3MuZ2V0KGtleSk7XG5cbiAgaWYgKCFjYWxsYmFja1NldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjayk7XG4gIGlmIChjYWxsYmFja1NldC5zaXplID09PSAwKSB7XG4gICAgZmlkQ2hhbmdlQ2FsbGJhY2tzLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgLy8gQ2xvc2UgYnJvYWRjYXN0IGNoYW5uZWwgaWYgdGhlcmUgYXJlIG5vIG1vcmUgY2FsbGJhY2tzLlxuICBjbG9zZUJyb2FkY2FzdENoYW5uZWwoKTtcbn1cblxuZnVuY3Rpb24gY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhrZXk6IHN0cmluZywgZmlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgY2FsbGJhY2tzID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xuICBpZiAoIWNhbGxiYWNrcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2soZmlkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5OiBzdHJpbmcsIGZpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGNoYW5uZWwgPSBnZXRCcm9hZGNhc3RDaGFubmVsKCk7XG4gIGlmIChjaGFubmVsKSB7XG4gICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7IGtleSwgZmlkIH0pO1xuICB9XG4gIGNsb3NlQnJvYWRjYXN0Q2hhbm5lbCgpO1xufVxuXG5sZXQgYnJvYWRjYXN0Q2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCB8IG51bGwgPSBudWxsO1xuLyoqIE9wZW5zIGFuZCByZXR1cm5zIGEgQnJvYWRjYXN0Q2hhbm5lbCBpZiBpdCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuICovXG5mdW5jdGlvbiBnZXRCcm9hZGNhc3RDaGFubmVsKCk6IEJyb2FkY2FzdENoYW5uZWwgfCBudWxsIHtcbiAgaWYgKCFicm9hZGNhc3RDaGFubmVsICYmICdCcm9hZGNhc3RDaGFubmVsJyBpbiBzZWxmKSB7XG4gICAgYnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdbRmlyZWJhc2VdIEZJRCBDaGFuZ2UnKTtcbiAgICBicm9hZGNhc3RDaGFubmVsLm9ubWVzc2FnZSA9IGUgPT4ge1xuICAgICAgY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhlLmRhdGEua2V5LCBlLmRhdGEuZmlkKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBicm9hZGNhc3RDaGFubmVsO1xufVxuXG5mdW5jdGlvbiBjbG9zZUJyb2FkY2FzdENoYW5uZWwoKTogdm9pZCB7XG4gIGlmIChmaWRDaGFuZ2VDYWxsYmFja3Muc2l6ZSA9PT0gMCAmJiBicm9hZGNhc3RDaGFubmVsKSB7XG4gICAgYnJvYWRjYXN0Q2hhbm5lbC5jbG9zZSgpO1xuICAgIGJyb2FkY2FzdENoYW5uZWwgPSBudWxsO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgREJTY2hlbWEsIElEQlBEYXRhYmFzZSwgb3BlbkRCIH0gZnJvbSAnaWRiJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgSW5zdGFsbGF0aW9uRW50cnkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQgeyBnZXRLZXkgfSBmcm9tICcuLi91dGlsL2dldC1rZXknO1xuaW1wb3J0IHsgZmlkQ2hhbmdlZCB9IGZyb20gJy4vZmlkLWNoYW5nZWQnO1xuXG5jb25zdCBEQVRBQkFTRV9OQU1FID0gJ2ZpcmViYXNlLWluc3RhbGxhdGlvbnMtZGF0YWJhc2UnO1xuY29uc3QgREFUQUJBU0VfVkVSU0lPTiA9IDE7XG5jb25zdCBPQkpFQ1RfU1RPUkVfTkFNRSA9ICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLXN0b3JlJztcblxuaW50ZXJmYWNlIEluc3RhbGxhdGlvbnNEQiBleHRlbmRzIERCU2NoZW1hIHtcbiAgJ2ZpcmViYXNlLWluc3RhbGxhdGlvbnMtc3RvcmUnOiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgdmFsdWU6IEluc3RhbGxhdGlvbkVudHJ5IHwgdW5kZWZpbmVkO1xuICB9O1xufVxuXG5sZXQgZGJQcm9taXNlOiBQcm9taXNlPElEQlBEYXRhYmFzZTxJbnN0YWxsYXRpb25zREI+PiB8IG51bGwgPSBudWxsO1xuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCk6IFByb21pc2U8SURCUERhdGFiYXNlPEluc3RhbGxhdGlvbnNEQj4+IHtcbiAgaWYgKCFkYlByb21pc2UpIHtcbiAgICBkYlByb21pc2UgPSBvcGVuREIoREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwge1xuICAgICAgdXBncmFkZTogKGRiLCBvbGRWZXJzaW9uKSA9PiB7XG4gICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxuICAgICAgICAvLyBiZWhhdmlvciBpcyB3aGF0IHdlIHdhbnQsIGJlY2F1c2UgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHZlcnNpb25zIGJldHdlZW5cbiAgICAgICAgLy8gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSB3YW50IEFMTCB0aGUgbWlncmF0aW9uc1xuICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoIChvbGRWZXJzaW9uKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRiUHJvbWlzZTtcbn1cblxuLyoqIEdldHMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQoXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnXG4pOiBQcm9taXNlPEluc3RhbGxhdGlvbkVudHJ5IHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xuICByZXR1cm4gZGJcbiAgICAudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUpXG4gICAgLm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKVxuICAgIC5nZXQoa2V5KSBhcyBQcm9taXNlPEluc3RhbGxhdGlvbkVudHJ5Pjtcbn1cblxuLyoqIEFzc2lnbnMgb3Igb3ZlcndyaXRlcyB0aGUgcmVjb3JkIGZvciB0aGUgZ2l2ZW4ga2V5IHdpdGggdGhlIGdpdmVuIHZhbHVlLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldDxWYWx1ZVR5cGUgZXh0ZW5kcyBJbnN0YWxsYXRpb25FbnRyeT4oXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICB2YWx1ZTogVmFsdWVUeXBlXG4pOiBQcm9taXNlPFZhbHVlVHlwZT4ge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICBjb25zdCBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcbiAgY29uc3Qgb2xkVmFsdWUgPSAoYXdhaXQgb2JqZWN0U3RvcmUuZ2V0KGtleSkpIGFzIEluc3RhbGxhdGlvbkVudHJ5O1xuICBhd2FpdCBvYmplY3RTdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gIGF3YWl0IHR4LmRvbmU7XG5cbiAgaWYgKCFvbGRWYWx1ZSB8fCBvbGRWYWx1ZS5maWQgIT09IHZhbHVlLmZpZCkge1xuICAgIGZpZENoYW5nZWQoYXBwQ29uZmlnLCB2YWx1ZS5maWQpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKiogUmVtb3ZlcyByZWNvcmQocykgZnJvbSB0aGUgb2JqZWN0U3RvcmUgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4ga2V5LiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZShhcHBDb25maWc6IEFwcENvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICBhd2FpdCB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSkuZGVsZXRlKGtleSk7XG4gIGF3YWl0IHR4LmRvbmU7XG59XG5cbi8qKlxuICogQXRvbWljYWxseSB1cGRhdGVzIGEgcmVjb3JkIHdpdGggdGhlIHJlc3VsdCBvZiB1cGRhdGVGbiwgd2hpY2ggZ2V0c1xuICogY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUuIElmIG5ld1ZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlIHJlY29yZCBpc1xuICogZGVsZXRlZCBpbnN0ZWFkLlxuICogQHJldHVybiBVcGRhdGVkIHZhbHVlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGU8VmFsdWVUeXBlIGV4dGVuZHMgSW5zdGFsbGF0aW9uRW50cnkgfCB1bmRlZmluZWQ+KFxuICBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgdXBkYXRlRm46IChwcmV2aW91c1ZhbHVlOiBJbnN0YWxsYXRpb25FbnRyeSB8IHVuZGVmaW5lZCkgPT4gVmFsdWVUeXBlXG4pOiBQcm9taXNlPFZhbHVlVHlwZT4ge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICBjb25zdCBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcbiAgY29uc3Qgb2xkVmFsdWU6IEluc3RhbGxhdGlvbkVudHJ5IHwgdW5kZWZpbmVkID0gKGF3YWl0IHN0b3JlLmdldChcbiAgICBrZXlcbiAgKSkgYXMgSW5zdGFsbGF0aW9uRW50cnk7XG4gIGNvbnN0IG5ld1ZhbHVlID0gdXBkYXRlRm4ob2xkVmFsdWUpO1xuXG4gIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXdhaXQgc3RvcmUuZGVsZXRlKGtleSk7XG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgc3RvcmUucHV0KG5ld1ZhbHVlLCBrZXkpO1xuICB9XG4gIGF3YWl0IHR4LmRvbmU7XG5cbiAgaWYgKG5ld1ZhbHVlICYmICghb2xkVmFsdWUgfHwgb2xkVmFsdWUuZmlkICE9PSBuZXdWYWx1ZS5maWQpKSB7XG4gICAgZmlkQ2hhbmdlZChhcHBDb25maWcsIG5ld1ZhbHVlLmZpZCk7XG4gIH1cblxuICByZXR1cm4gbmV3VmFsdWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICBhd2FpdCB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSkuY2xlYXIoKTtcbiAgYXdhaXQgdHguZG9uZTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVJbnN0YWxsYXRpb25SZXF1ZXN0IH0gZnJvbSAnLi4vZnVuY3Rpb25zL2NyZWF0ZS1pbnN0YWxsYXRpb24tcmVxdWVzdCc7XG5pbXBvcnQge1xuICBBcHBDb25maWcsXG4gIEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQge1xuICBJblByb2dyZXNzSW5zdGFsbGF0aW9uRW50cnksXG4gIEluc3RhbGxhdGlvbkVudHJ5LFxuICBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnksXG4gIFJlcXVlc3RTdGF0dXNcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHsgUEVORElOR19USU1FT1VUX01TIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlLCBpc1NlcnZlckVycm9yIH0gZnJvbSAnLi4vdXRpbC9lcnJvcnMnO1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuLi91dGlsL3NsZWVwJztcbmltcG9ydCB7IGdlbmVyYXRlRmlkLCBJTlZBTElEX0ZJRCB9IGZyb20gJy4vZ2VuZXJhdGUtZmlkJztcbmltcG9ydCB7IHJlbW92ZSwgc2V0LCB1cGRhdGUgfSBmcm9tICcuL2lkYi1tYW5hZ2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnN0YWxsYXRpb25FbnRyeVdpdGhSZWdpc3RyYXRpb25Qcm9taXNlIHtcbiAgaW5zdGFsbGF0aW9uRW50cnk6IEluc3RhbGxhdGlvbkVudHJ5O1xuICAvKiogRXhpc3QgaWZmIHRoZSBpbnN0YWxsYXRpb25FbnRyeSBpcyBub3QgcmVnaXN0ZXJlZC4gKi9cbiAgcmVnaXN0cmF0aW9uUHJvbWlzZT86IFByb21pc2U8UmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5Pjtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuZCByZXR1cm5zIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBmcm9tIHRoZSBkYXRhYmFzZS5cbiAqIEFsc28gdHJpZ2dlcnMgYSByZWdpc3RyYXRpb24gcmVxdWVzdCBpZiBpdCBpcyBuZWNlc3NhcnkgYW5kIHBvc3NpYmxlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9uRW50cnkoXG4gIGluc3RhbGxhdGlvbnM6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGxcbik6IFByb21pc2U8SW5zdGFsbGF0aW9uRW50cnlXaXRoUmVnaXN0cmF0aW9uUHJvbWlzZT4ge1xuICBsZXQgcmVnaXN0cmF0aW9uUHJvbWlzZTogUHJvbWlzZTxSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk+IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgdXBkYXRlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XG4gICAgY29uc3QgaW5zdGFsbGF0aW9uRW50cnkgPSB1cGRhdGVPckNyZWF0ZUluc3RhbGxhdGlvbkVudHJ5KG9sZEVudHJ5KTtcbiAgICBjb25zdCBlbnRyeVdpdGhQcm9taXNlID0gdHJpZ2dlclJlZ2lzdHJhdGlvbklmTmVjZXNzYXJ5KFxuICAgICAgaW5zdGFsbGF0aW9ucyxcbiAgICAgIGluc3RhbGxhdGlvbkVudHJ5XG4gICAgKTtcbiAgICByZWdpc3RyYXRpb25Qcm9taXNlID0gZW50cnlXaXRoUHJvbWlzZS5yZWdpc3RyYXRpb25Qcm9taXNlO1xuICAgIHJldHVybiBlbnRyeVdpdGhQcm9taXNlLmluc3RhbGxhdGlvbkVudHJ5O1xuICB9KTtcblxuICBpZiAoaW5zdGFsbGF0aW9uRW50cnkuZmlkID09PSBJTlZBTElEX0ZJRCkge1xuICAgIC8vIEZJRCBnZW5lcmF0aW9uIGZhaWxlZC4gV2FpdGluZyBmb3IgdGhlIEZJRCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgcmV0dXJuIHsgaW5zdGFsbGF0aW9uRW50cnk6IGF3YWl0IHJlZ2lzdHJhdGlvblByb21pc2UhIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluc3RhbGxhdGlvbkVudHJ5LFxuICAgIHJlZ2lzdHJhdGlvblByb21pc2VcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IEluc3RhbGxhdGlvbiBFbnRyeSBpZiBvbmUgZG9lcyBub3QgZXhpc3QuXG4gKiBBbHNvIGNsZWFycyB0aW1lZCBvdXQgcGVuZGluZyByZXF1ZXN0cy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlT3JDcmVhdGVJbnN0YWxsYXRpb25FbnRyeShcbiAgb2xkRW50cnk6IEluc3RhbGxhdGlvbkVudHJ5IHwgdW5kZWZpbmVkXG4pOiBJbnN0YWxsYXRpb25FbnRyeSB7XG4gIGNvbnN0IGVudHJ5OiBJbnN0YWxsYXRpb25FbnRyeSA9IG9sZEVudHJ5IHx8IHtcbiAgICBmaWQ6IGdlbmVyYXRlRmlkKCksXG4gICAgcmVnaXN0cmF0aW9uU3RhdHVzOiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEXG4gIH07XG5cbiAgcmV0dXJuIGNsZWFyVGltZWRPdXRSZXF1ZXN0KGVudHJ5KTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIG5vdCByZWdpc3RlcmVkIHlldCwgdGhpcyB3aWxsIHRyaWdnZXIgdGhlXG4gKiByZWdpc3RyYXRpb24gYW5kIHJldHVybiBhbiBJblByb2dyZXNzSW5zdGFsbGF0aW9uRW50cnkuXG4gKlxuICogSWYgcmVnaXN0cmF0aW9uUHJvbWlzZSBkb2VzIG5vdCBleGlzdCwgdGhlIGluc3RhbGxhdGlvbkVudHJ5IGlzIGd1YXJhbnRlZWRcbiAqIHRvIGJlIHJlZ2lzdGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRyaWdnZXJSZWdpc3RyYXRpb25JZk5lY2Vzc2FyeShcbiAgaW5zdGFsbGF0aW9uczogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCxcbiAgaW5zdGFsbGF0aW9uRW50cnk6IEluc3RhbGxhdGlvbkVudHJ5XG4pOiBJbnN0YWxsYXRpb25FbnRyeVdpdGhSZWdpc3RyYXRpb25Qcm9taXNlIHtcbiAgaWYgKGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCkge1xuICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHJlcXVpcmVkIGJ1dCBhcHAgaXMgb2ZmbGluZS5cbiAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvblByb21pc2VXaXRoRXJyb3IgPSBQcm9taXNlLnJlamVjdChcbiAgICAgICAgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLkFQUF9PRkZMSU5FKVxuICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluc3RhbGxhdGlvbkVudHJ5LFxuICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlOiByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFRyeSByZWdpc3RlcmluZy4gQ2hhbmdlIHN0YXR1cyB0byBJTl9QUk9HUkVTUy5cbiAgICBjb25zdCBpblByb2dyZXNzRW50cnk6IEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeSA9IHtcbiAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxuICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTLFxuICAgICAgcmVnaXN0cmF0aW9uVGltZTogRGF0ZS5ub3coKVxuICAgIH07XG4gICAgY29uc3QgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IHJlZ2lzdGVySW5zdGFsbGF0aW9uKFxuICAgICAgaW5zdGFsbGF0aW9ucyxcbiAgICAgIGluUHJvZ3Jlc3NFbnRyeVxuICAgICk7XG4gICAgcmV0dXJuIHsgaW5zdGFsbGF0aW9uRW50cnk6IGluUHJvZ3Jlc3NFbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSB9O1xuICB9IGVsc2UgaWYgKFxuICAgIGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTU1xuICApIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5zdGFsbGF0aW9uRW50cnksXG4gICAgICByZWdpc3RyYXRpb25Qcm9taXNlOiB3YWl0VW50aWxGaWRSZWdpc3RyYXRpb24oaW5zdGFsbGF0aW9ucylcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGluc3RhbGxhdGlvbkVudHJ5IH07XG4gIH1cbn1cblxuLyoqIFRoaXMgd2lsbCBiZSBleGVjdXRlZCBvbmx5IG9uY2UgZm9yIGVhY2ggbmV3IEZpcmViYXNlIEluc3RhbGxhdGlvbi4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9uKFxuICBpbnN0YWxsYXRpb25zOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsLFxuICBpbnN0YWxsYXRpb25FbnRyeTogSW5Qcm9ncmVzc0luc3RhbGxhdGlvbkVudHJ5XG4pOiBQcm9taXNlPFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSA9IGF3YWl0IGNyZWF0ZUluc3RhbGxhdGlvblJlcXVlc3QoXG4gICAgICBpbnN0YWxsYXRpb25zLFxuICAgICAgaW5zdGFsbGF0aW9uRW50cnlcbiAgICApO1xuICAgIHJldHVybiBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoaXNTZXJ2ZXJFcnJvcihlKSAmJiBlLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDA5KSB7XG4gICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBjYW4gbm90IGJlIHVzZWRcIiBlcnJvci5cbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIG5leHQgdGltZS5cbiAgICAgIGF3YWl0IHJlbW92ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiBmYWlsZWQuIFNldCBGSUQgYXMgbm90IHJlZ2lzdGVyZWQuXG4gICAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHtcbiAgICAgICAgZmlkOiBpbnN0YWxsYXRpb25FbnRyeS5maWQsXG4gICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRocm93IGU7XG4gIH1cbn1cblxuLyoqIENhbGwgaWYgRklEIHJlZ2lzdHJhdGlvbiBpcyBwZW5kaW5nIGluIGFub3RoZXIgcmVxdWVzdC4gKi9cbmFzeW5jIGZ1bmN0aW9uIHdhaXRVbnRpbEZpZFJlZ2lzdHJhdGlvbihcbiAgaW5zdGFsbGF0aW9uczogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbFxuKTogUHJvbWlzZTxSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk+IHtcbiAgLy8gVW5mb3J0dW5hdGVseSwgdGhlcmUgaXMgbm8gd2F5IG9mIHJlbGlhYmx5IG9ic2VydmluZyB3aGVuIGEgdmFsdWUgaW5cbiAgLy8gSW5kZXhlZERCIGNoYW5nZXMgKHlldCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2luZGV4ZWQtZGItb2JzZXJ2ZXJzKSxcbiAgLy8gc28gd2UgbmVlZCB0byBwb2xsLlxuXG4gIGxldCBlbnRyeTogSW5zdGFsbGF0aW9uRW50cnkgPSBhd2FpdCB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KFxuICAgIGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnXG4gICk7XG4gIHdoaWxlIChlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MpIHtcbiAgICAvLyBjcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdCBzdGlsbCBpbiBwcm9ncmVzcy5cbiAgICBhd2FpdCBzbGVlcCgxMDApO1xuXG4gICAgZW50cnkgPSBhd2FpdCB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgfVxuXG4gIGlmIChlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQpIHtcbiAgICAvLyBUaGUgcmVxdWVzdCB0aW1lZCBvdXQgb3IgZmFpbGVkIGluIGEgZGlmZmVyZW50IGNhbGwuIFRyeSBhZ2Fpbi5cbiAgICBjb25zdCB7IGluc3RhbGxhdGlvbkVudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlIH0gPVxuICAgICAgYXdhaXQgZ2V0SW5zdGFsbGF0aW9uRW50cnkoaW5zdGFsbGF0aW9ucyk7XG5cbiAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvblByb21pc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHJlZ2lzdHJhdGlvblByb21pc2UsIGVudHJ5IGlzIHJlZ2lzdGVyZWQuXG4gICAgICByZXR1cm4gaW5zdGFsbGF0aW9uRW50cnkgYXMgUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuLyoqXG4gKiBDYWxsZWQgb25seSBpZiB0aGVyZSBpcyBhIENyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IGluIHByb2dyZXNzLlxuICpcbiAqIFVwZGF0ZXMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGluIHRoZSBEQiBiYXNlZCBvbiB0aGUgc3RhdHVzIG9mIHRoZVxuICogQ3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXG4gKlxuICogUmV0dXJucyB0aGUgdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChcbiAgYXBwQ29uZmlnOiBBcHBDb25maWdcbik6IFByb21pc2U8SW5zdGFsbGF0aW9uRW50cnk+IHtcbiAgcmV0dXJuIHVwZGF0ZShhcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICBpZiAoIW9sZEVudHJ5KSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuSU5TVEFMTEFUSU9OX05PVF9GT1VORCk7XG4gICAgfVxuICAgIHJldHVybiBjbGVhclRpbWVkT3V0UmVxdWVzdChvbGRFbnRyeSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclRpbWVkT3V0UmVxdWVzdChlbnRyeTogSW5zdGFsbGF0aW9uRW50cnkpOiBJbnN0YWxsYXRpb25FbnRyeSB7XG4gIGlmIChoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoZW50cnkpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZDogZW50cnkuZmlkLFxuICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuZnVuY3Rpb24gaGFzSW5zdGFsbGF0aW9uUmVxdWVzdFRpbWVkT3V0KFxuICBpbnN0YWxsYXRpb25FbnRyeTogSW5zdGFsbGF0aW9uRW50cnlcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAmJlxuICAgIGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblRpbWUgKyBQRU5ESU5HX1RJTUVPVVRfTVMgPCBEYXRlLm5vdygpXG4gICk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgR2VuZXJhdGVBdXRoVG9rZW5SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLXJlc3BvbnNlJztcbmltcG9ydCB7XG4gIENvbXBsZXRlZEF1dGhUb2tlbixcbiAgUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5XG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7IFBBQ0tBR0VfVkVSU0lPTiB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlLFxuICBnZXRFcnJvckZyb21SZXNwb25zZSxcbiAgZ2V0SGVhZGVyc1dpdGhBdXRoLFxuICBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQsXG4gIHJldHJ5SWZTZXJ2ZXJFcnJvclxufSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQge1xuICBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsLFxuICBBcHBDb25maWdcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QoXG4gIHsgYXBwQ29uZmlnLCBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIgfTogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCxcbiAgaW5zdGFsbGF0aW9uRW50cnk6IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeVxuKTogUHJvbWlzZTxDb21wbGV0ZWRBdXRoVG9rZW4+IHtcbiAgY29uc3QgZW5kcG9pbnQgPSBnZXRHZW5lcmF0ZUF1dGhUb2tlbkVuZHBvaW50KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXJzV2l0aEF1dGgoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XG5cbiAgLy8gSWYgaGVhcnRiZWF0IHNlcnZpY2UgZXhpc3RzLCBhZGQgdGhlIGhlYXJ0YmVhdCBzdHJpbmcgdG8gdGhlIGhlYWRlci5cbiAgY29uc3QgaGVhcnRiZWF0U2VydmljZSA9IGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xuICAgIG9wdGlvbmFsOiB0cnVlXG4gIH0pO1xuICBpZiAoaGVhcnRiZWF0U2VydmljZSkge1xuICAgIGNvbnN0IGhlYXJ0YmVhdHNIZWFkZXIgPSBhd2FpdCBoZWFydGJlYXRTZXJ2aWNlLmdldEhlYXJ0YmVhdHNIZWFkZXIoKTtcbiAgICBpZiAoaGVhcnRiZWF0c0hlYWRlcikge1xuICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtZmlyZWJhc2UtY2xpZW50JywgaGVhcnRiZWF0c0hlYWRlcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYm9keSA9IHtcbiAgICBpbnN0YWxsYXRpb246IHtcbiAgICAgIHNka1ZlcnNpb246IFBBQ0tBR0VfVkVSU0lPTixcbiAgICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWRcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVxdWVzdDogUmVxdWVzdEluaXQgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmV0cnlJZlNlcnZlckVycm9yKCgpID0+IGZldGNoKGVuZHBvaW50LCByZXF1ZXN0KSk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IHJlc3BvbnNlVmFsdWU6IEdlbmVyYXRlQXV0aFRva2VuUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29tcGxldGVkQXV0aFRva2VuOiBDb21wbGV0ZWRBdXRoVG9rZW4gPVxuICAgICAgZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2VWYWx1ZSk7XG4gICAgcmV0dXJuIGNvbXBsZXRlZEF1dGhUb2tlbjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBhd2FpdCBnZXRFcnJvckZyb21SZXNwb25zZSgnR2VuZXJhdGUgQXV0aCBUb2tlbicsIHJlc3BvbnNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRHZW5lcmF0ZUF1dGhUb2tlbkVuZHBvaW50KFxuICBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgeyBmaWQgfTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5XG4pOiBzdHJpbmcge1xuICByZXR1cm4gYCR7Z2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyl9LyR7ZmlkfS9hdXRoVG9rZW5zOmdlbmVyYXRlYDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QgfSBmcm9tICcuLi9mdW5jdGlvbnMvZ2VuZXJhdGUtYXV0aC10b2tlbi1yZXF1ZXN0JztcbmltcG9ydCB7XG4gIEFwcENvbmZpZyxcbiAgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7XG4gIEF1dGhUb2tlbixcbiAgQ29tcGxldGVkQXV0aFRva2VuLFxuICBJblByb2dyZXNzQXV0aFRva2VuLFxuICBJbnN0YWxsYXRpb25FbnRyeSxcbiAgUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5LFxuICBSZXF1ZXN0U3RhdHVzXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7IFBFTkRJTkdfVElNRU9VVF9NUywgVE9LRU5fRVhQSVJBVElPTl9CVUZGRVIgfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUsIGlzU2VydmVyRXJyb3IgfSBmcm9tICcuLi91dGlsL2Vycm9ycyc7XG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWwvc2xlZXAnO1xuaW1wb3J0IHsgcmVtb3ZlLCBzZXQsIHVwZGF0ZSB9IGZyb20gJy4vaWRiLW1hbmFnZXInO1xuXG4vKipcbiAqIFJldHVybnMgYSB2YWxpZCBhdXRoZW50aWNhdGlvbiB0b2tlbiBmb3IgdGhlIGluc3RhbGxhdGlvbi4gR2VuZXJhdGVzIGEgbmV3XG4gKiB0b2tlbiBpZiBvbmUgZG9lc24ndCBleGlzdCwgaXMgZXhwaXJlZCBvciBhYm91dCB0byBleHBpcmUuXG4gKlxuICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgcmVnaXN0ZXJlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hBdXRoVG9rZW4oXG4gIGluc3RhbGxhdGlvbnM6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwsXG4gIGZvcmNlUmVmcmVzaCA9IGZhbHNlXG4pOiBQcm9taXNlPENvbXBsZXRlZEF1dGhUb2tlbj4ge1xuICBsZXQgdG9rZW5Qcm9taXNlOiBQcm9taXNlPENvbXBsZXRlZEF1dGhUb2tlbj4gfCB1bmRlZmluZWQ7XG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgdXBkYXRlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XG4gICAgaWYgKCFpc0VudHJ5UmVnaXN0ZXJlZChvbGRFbnRyeSkpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT1RfUkVHSVNURVJFRCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2xkQXV0aFRva2VuID0gb2xkRW50cnkuYXV0aFRva2VuO1xuICAgIGlmICghZm9yY2VSZWZyZXNoICYmIGlzQXV0aFRva2VuVmFsaWQob2xkQXV0aFRva2VuKSkge1xuICAgICAgLy8gVGhlcmUgaXMgYSB2YWxpZCB0b2tlbiBpbiB0aGUgREIuXG4gICAgICByZXR1cm4gb2xkRW50cnk7XG4gICAgfSBlbHNlIGlmIChvbGRBdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUykge1xuICAgICAgLy8gVGhlcmUgYWxyZWFkeSBpcyBhIHRva2VuIHJlcXVlc3QgaW4gcHJvZ3Jlc3MuXG4gICAgICB0b2tlblByb21pc2UgPSB3YWl0VW50aWxBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCk7XG4gICAgICByZXR1cm4gb2xkRW50cnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIHRva2VuIG9yIHRva2VuIGV4cGlyZWQuXG4gICAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLkFQUF9PRkZMSU5FKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5Qcm9ncmVzc0VudHJ5ID0gbWFrZUF1dGhUb2tlblJlcXVlc3RJblByb2dyZXNzRW50cnkob2xkRW50cnkpO1xuICAgICAgdG9rZW5Qcm9taXNlID0gZmV0Y2hBdXRoVG9rZW5Gcm9tU2VydmVyKGluc3RhbGxhdGlvbnMsIGluUHJvZ3Jlc3NFbnRyeSk7XG4gICAgICByZXR1cm4gaW5Qcm9ncmVzc0VudHJ5O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgYXV0aFRva2VuID0gdG9rZW5Qcm9taXNlXG4gICAgPyBhd2FpdCB0b2tlblByb21pc2VcbiAgICA6IChlbnRyeS5hdXRoVG9rZW4gYXMgQ29tcGxldGVkQXV0aFRva2VuKTtcbiAgcmV0dXJuIGF1dGhUb2tlbjtcbn1cblxuLyoqXG4gKiBDYWxsIG9ubHkgaWYgRklEIGlzIHJlZ2lzdGVyZWQgYW5kIEF1dGggVG9rZW4gcmVxdWVzdCBpcyBpbiBwcm9ncmVzcy5cbiAqXG4gKiBXYWl0cyB1bnRpbCB0aGUgY3VycmVudCBwZW5kaW5nIHJlcXVlc3QgZmluaXNoZXMuIElmIHRoZSByZXF1ZXN0IHRpbWVzIG91dCxcbiAqIHRyaWVzIG9uY2UgaW4gdGhpcyB0aHJlYWQgYXMgd2VsbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gd2FpdFVudGlsQXV0aFRva2VuUmVxdWVzdChcbiAgaW5zdGFsbGF0aW9uczogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCxcbiAgZm9yY2VSZWZyZXNoOiBib29sZWFuXG4pOiBQcm9taXNlPENvbXBsZXRlZEF1dGhUb2tlbj4ge1xuICAvLyBVbmZvcnR1bmF0ZWx5LCB0aGVyZSBpcyBubyB3YXkgb2YgcmVsaWFibHkgb2JzZXJ2aW5nIHdoZW4gYSB2YWx1ZSBpblxuICAvLyBJbmRleGVkREIgY2hhbmdlcyAoeWV0LCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvaW5kZXhlZC1kYi1vYnNlcnZlcnMpLFxuICAvLyBzbyB3ZSBuZWVkIHRvIHBvbGwuXG5cbiAgbGV0IGVudHJ5ID0gYXdhaXQgdXBkYXRlQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XG4gIHdoaWxlIChlbnRyeS5hdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUykge1xuICAgIC8vIGdlbmVyYXRlQXV0aFRva2VuIHN0aWxsIGluIHByb2dyZXNzLlxuICAgIGF3YWl0IHNsZWVwKDEwMCk7XG5cbiAgICBlbnRyeSA9IGF3YWl0IHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICB9XG5cbiAgY29uc3QgYXV0aFRva2VuID0gZW50cnkuYXV0aFRva2VuO1xuICBpZiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQpIHtcbiAgICAvLyBUaGUgcmVxdWVzdCB0aW1lZCBvdXQgb3IgZmFpbGVkIGluIGEgZGlmZmVyZW50IGNhbGwuIFRyeSBhZ2Fpbi5cbiAgICByZXR1cm4gcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhdXRoVG9rZW47XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsZWQgb25seSBpZiB0aGVyZSBpcyBhIEdlbmVyYXRlQXV0aFRva2VuIHJlcXVlc3QgaW4gcHJvZ3Jlc3MuXG4gKlxuICogVXBkYXRlcyB0aGUgSW5zdGFsbGF0aW9uRW50cnkgaW4gdGhlIERCIGJhc2VkIG9uIHRoZSBzdGF0dXMgb2YgdGhlXG4gKiBHZW5lcmF0ZUF1dGhUb2tlbiByZXF1ZXN0LlxuICpcbiAqIFJldHVybnMgdGhlIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnXG4pOiBQcm9taXNlPFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeT4ge1xuICByZXR1cm4gdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9UX1JFR0lTVEVSRUQpO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZEF1dGhUb2tlbiA9IG9sZEVudHJ5LmF1dGhUb2tlbjtcbiAgICBpZiAoaGFzQXV0aFRva2VuUmVxdWVzdFRpbWVkT3V0KG9sZEF1dGhUb2tlbikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm9sZEVudHJ5LFxuICAgICAgICBhdXRoVG9rZW46IHsgcmVxdWVzdFN0YXR1czogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBvbGRFbnRyeTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihcbiAgaW5zdGFsbGF0aW9uczogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCxcbiAgaW5zdGFsbGF0aW9uRW50cnk6IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeVxuKTogUHJvbWlzZTxDb21wbGV0ZWRBdXRoVG9rZW4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QoXG4gICAgICBpbnN0YWxsYXRpb25zLFxuICAgICAgaW5zdGFsbGF0aW9uRW50cnlcbiAgICApO1xuICAgIGNvbnN0IHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0ge1xuICAgICAgLi4uaW5zdGFsbGF0aW9uRW50cnksXG4gICAgICBhdXRoVG9rZW5cbiAgICB9O1xuICAgIGF3YWl0IHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5KTtcbiAgICByZXR1cm4gYXV0aFRva2VuO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKFxuICAgICAgaXNTZXJ2ZXJFcnJvcihlKSAmJlxuICAgICAgKGUuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDEgfHwgZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwNClcbiAgICApIHtcbiAgICAgIC8vIFNlcnZlciByZXR1cm5lZCBhIFwiRklEIG5vdCBmb3VuZFwiIG9yIGEgXCJJbnZhbGlkIGF1dGhlbnRpY2F0aW9uXCIgZXJyb3IuXG4gICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBuZXh0IHRpbWUuXG4gICAgICBhd2FpdCByZW1vdmUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnk6IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSA9IHtcbiAgICAgICAgLi4uaW5zdGFsbGF0aW9uRW50cnksXG4gICAgICAgIGF1dGhUb2tlbjogeyByZXF1ZXN0U3RhdHVzOiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEIH1cbiAgICAgIH07XG4gICAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSk7XG4gICAgfVxuICAgIHRocm93IGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFbnRyeVJlZ2lzdGVyZWQoXG4gIGluc3RhbGxhdGlvbkVudHJ5OiBJbnN0YWxsYXRpb25FbnRyeSB8IHVuZGVmaW5lZFxuKTogaW5zdGFsbGF0aW9uRW50cnkgaXMgUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5IHtcbiAgcmV0dXJuIChcbiAgICBpbnN0YWxsYXRpb25FbnRyeSAhPT0gdW5kZWZpbmVkICYmXG4gICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRFxuICApO1xufVxuXG5mdW5jdGlvbiBpc0F1dGhUb2tlblZhbGlkKGF1dGhUb2tlbjogQXV0aFRva2VuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICYmXG4gICAgIWlzQXV0aFRva2VuRXhwaXJlZChhdXRoVG9rZW4pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzQXV0aFRva2VuRXhwaXJlZChhdXRoVG9rZW46IENvbXBsZXRlZEF1dGhUb2tlbik6IGJvb2xlYW4ge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gKFxuICAgIG5vdyA8IGF1dGhUb2tlbi5jcmVhdGlvblRpbWUgfHxcbiAgICBhdXRoVG9rZW4uY3JlYXRpb25UaW1lICsgYXV0aFRva2VuLmV4cGlyZXNJbiA8IG5vdyArIFRPS0VOX0VYUElSQVRJT05fQlVGRkVSXG4gICk7XG59XG5cbi8qKiBSZXR1cm5zIGFuIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkgd2l0aCBhbiBJblByb2dyZXNzQXV0aFRva2VuLiAqL1xuZnVuY3Rpb24gbWFrZUF1dGhUb2tlblJlcXVlc3RJblByb2dyZXNzRW50cnkoXG4gIG9sZEVudHJ5OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnlcbik6IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSB7XG4gIGNvbnN0IGluUHJvZ3Jlc3NBdXRoVG9rZW46IEluUHJvZ3Jlc3NBdXRoVG9rZW4gPSB7XG4gICAgcmVxdWVzdFN0YXR1czogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyxcbiAgICByZXF1ZXN0VGltZTogRGF0ZS5ub3coKVxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLm9sZEVudHJ5LFxuICAgIGF1dGhUb2tlbjogaW5Qcm9ncmVzc0F1dGhUb2tlblxuICB9O1xufVxuXG5mdW5jdGlvbiBoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQoYXV0aFRva2VuOiBBdXRoVG9rZW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAmJlxuICAgIGF1dGhUb2tlbi5yZXF1ZXN0VGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KClcbiAgKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBnZXRJbnN0YWxsYXRpb25FbnRyeSB9IGZyb20gJy4uL2hlbHBlcnMvZ2V0LWluc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQgeyByZWZyZXNoQXV0aFRva2VuIH0gZnJvbSAnLi4vaGVscGVycy9yZWZyZXNoLWF1dGgtdG9rZW4nO1xuaW1wb3J0IHsgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgSW5zdGFsbGF0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHVibGljLXR5cGVzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlmIHRoZXJlIGlzbid0IG9uZSBmb3IgdGhlIGFwcCBhbmRcbiAqIHJldHVybnMgdGhlIEluc3RhbGxhdGlvbiBJRC5cbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJZChpbnN0YWxsYXRpb25zOiBJbnN0YWxsYXRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSBpbnN0YWxsYXRpb25zIGFzIEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGw7XG4gIGNvbnN0IHsgaW5zdGFsbGF0aW9uRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KFxuICAgIGluc3RhbGxhdGlvbnNJbXBsXG4gICk7XG5cbiAgaWYgKHJlZ2lzdHJhdGlvblByb21pc2UpIHtcbiAgICByZWdpc3RyYXRpb25Qcm9taXNlLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSBpbnN0YWxsYXRpb24gaXMgYWxyZWFkeSByZWdpc3RlcmVkLCB1cGRhdGUgdGhlIGF1dGhlbnRpY2F0aW9uXG4gICAgLy8gdG9rZW4gaWYgbmVlZGVkLlxuICAgIHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9uc0ltcGwpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIGluc3RhbGxhdGlvbkVudHJ5LmZpZDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBnZXRJbnN0YWxsYXRpb25FbnRyeSB9IGZyb20gJy4uL2hlbHBlcnMvZ2V0LWluc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQgeyByZWZyZXNoQXV0aFRva2VuIH0gZnJvbSAnLi4vaGVscGVycy9yZWZyZXNoLWF1dGgtdG9rZW4nO1xuaW1wb3J0IHsgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgSW5zdGFsbGF0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHVibGljLXR5cGVzJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgRmlyZWJhc2UgSW5zdGFsbGF0aW9ucyBhdXRoIHRva2VuLCBpZGVudGlmeWluZyB0aGUgY3VycmVudFxuICogRmlyZWJhc2UgSW5zdGFsbGF0aW9uLlxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxuICogQHBhcmFtIGZvcmNlUmVmcmVzaCAtIEZvcmNlIHJlZnJlc2ggcmVnYXJkbGVzcyBvZiB0b2tlbiBleHBpcmF0aW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRva2VuKFxuICBpbnN0YWxsYXRpb25zOiBJbnN0YWxsYXRpb25zLFxuICBmb3JjZVJlZnJlc2ggPSBmYWxzZVxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSBpbnN0YWxsYXRpb25zIGFzIEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGw7XG4gIGF3YWl0IGNvbXBsZXRlSW5zdGFsbGF0aW9uUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnNJbXBsKTtcblxuICAvLyBBdCB0aGlzIHBvaW50IHdlIGVpdGhlciBoYXZlIGEgUmVnaXN0ZXJlZCBJbnN0YWxsYXRpb24gaW4gdGhlIERCLCBvciB3ZSd2ZVxuICAvLyBhbHJlYWR5IHRocm93biBhbiBlcnJvci5cbiAgY29uc3QgYXV0aFRva2VuID0gYXdhaXQgcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zSW1wbCwgZm9yY2VSZWZyZXNoKTtcbiAgcmV0dXJuIGF1dGhUb2tlbi50b2tlbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGxldGVJbnN0YWxsYXRpb25SZWdpc3RyYXRpb24oXG4gIGluc3RhbGxhdGlvbnM6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpO1xuXG4gIGlmIChyZWdpc3RyYXRpb25Qcm9taXNlKSB7XG4gICAgLy8gQSBjcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdCBpcyBpbiBwcm9ncmVzcy4gV2FpdCB1bnRpbCBpdCBmaW5pc2hlcy5cbiAgICBhd2FpdCByZWdpc3RyYXRpb25Qcm9taXNlO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQge1xuICBnZXRFcnJvckZyb21SZXNwb25zZSxcbiAgZ2V0SGVhZGVyc1dpdGhBdXRoLFxuICBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQsXG4gIHJldHJ5SWZTZXJ2ZXJFcnJvclxufSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KFxuICBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgaW5zdGFsbGF0aW9uRW50cnk6IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGVuZHBvaW50ID0gZ2V0RGVsZXRlRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XG5cbiAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcbiAgY29uc3QgcmVxdWVzdDogUmVxdWVzdEluaXQgPSB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICBoZWFkZXJzXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdEZWxldGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlbGV0ZUVuZHBvaW50KFxuICBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgeyBmaWQgfTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5XG4pOiBzdHJpbmcge1xuICByZXR1cm4gYCR7Z2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyl9LyR7ZmlkfWA7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZGVsZXRlSW5zdGFsbGF0aW9uUmVxdWVzdCB9IGZyb20gJy4uL2Z1bmN0aW9ucy9kZWxldGUtaW5zdGFsbGF0aW9uLXJlcXVlc3QnO1xuaW1wb3J0IHsgcmVtb3ZlLCB1cGRhdGUgfSBmcm9tICcuLi9oZWxwZXJzL2lkYi1tYW5hZ2VyJztcbmltcG9ydCB7IFJlcXVlc3RTdGF0dXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuLi91dGlsL2Vycm9ycyc7XG5pbXBvcnQgeyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBJbnN0YWxsYXRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wdWJsaWMtdHlwZXMnO1xuXG4vKipcbiAqIERlbGV0ZXMgdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBhbmQgYWxsIGFzc29jaWF0ZWQgZGF0YS5cbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVJbnN0YWxsYXRpb25zKFxuICBpbnN0YWxsYXRpb25zOiBJbnN0YWxsYXRpb25zXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBhcHBDb25maWcgfSA9IGluc3RhbGxhdGlvbnMgYXMgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbDtcblxuICBjb25zdCBlbnRyeSA9IGF3YWl0IHVwZGF0ZShhcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICBpZiAob2xkRW50cnkgJiYgb2xkRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEKSB7XG4gICAgICAvLyBEZWxldGUgdGhlIHVucmVnaXN0ZXJlZCBlbnRyeSB3aXRob3V0IHNlbmRpbmcgYSBkZWxldGVJbnN0YWxsYXRpb24gcmVxdWVzdC5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBvbGRFbnRyeTtcbiAgfSk7XG5cbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUykge1xuICAgICAgLy8gQ2FuJ3QgZGVsZXRlIHdoaWxlIHRyeWluZyB0byByZWdpc3Rlci5cbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5ERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT04pO1xuICAgIH0gZWxzZSBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCkge1xuICAgICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5BUFBfT0ZGTElORSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgZW50cnkpO1xuICAgICAgICBhd2FpdCByZW1vdmUoYXBwQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBhZGRDYWxsYmFjaywgcmVtb3ZlQ2FsbGJhY2sgfSBmcm9tICcuLi9oZWxwZXJzL2ZpZC1jaGFuZ2VkJztcbmltcG9ydCB7IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IEluc3RhbGxhdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3B1YmxpYy10eXBlcyc7XG5cbi8qKlxuICogQW4gdXNlciBkZWZpbmVkIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbiBJbnN0YWxsYXRpb25zIElEIGNoYW5nZXMuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgdHlwZSBJZENoYW5nZUNhbGxiYWNrRm4gPSAoaW5zdGFsbGF0aW9uSWQ6IHN0cmluZykgPT4gdm9pZDtcbi8qKlxuICogVW5zdWJzY3JpYmUgYSBjYWxsYmFjayBmdW5jdGlvbiBwcmV2aW91c2x5IGFkZGVkIHZpYSB7QGxpbmsgSWRDaGFuZ2VDYWxsYmFja0ZufS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCB0eXBlIElkQ2hhbmdlVW5zdWJzY3JpYmVGbiA9ICgpID0+IHZvaWQ7XG5cbi8qKlxuICogU2V0cyBhIG5ldyBjYWxsYmFjayB0aGF0IHdpbGwgZ2V0IGNhbGxlZCB3aGVuIEluc3RhbGxhdGlvbiBJRCBjaGFuZ2VzLlxuICogUmV0dXJucyBhbiB1bnN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBjYWxsYmFjayB3aGVuIGNhbGxlZC5cbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSBjYWxsYmFjayAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgd2hlbiBGSUQgY2hhbmdlcy5cbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgY2FsbGVkIHRvIHVuc3Vic2NyaWJlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uSWRDaGFuZ2UoXG4gIGluc3RhbGxhdGlvbnM6IEluc3RhbGxhdGlvbnMsXG4gIGNhbGxiYWNrOiBJZENoYW5nZUNhbGxiYWNrRm5cbik6IElkQ2hhbmdlVW5zdWJzY3JpYmVGbiB7XG4gIGNvbnN0IHsgYXBwQ29uZmlnIH0gPSBpbnN0YWxsYXRpb25zIGFzIEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGw7XG5cbiAgYWRkQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjayk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmVtb3ZlQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjayk7XG4gIH07XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRmlyZWJhc2VBcHAsIGdldEFwcCwgX2dldFByb3ZpZGVyIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBJbnN0YWxsYXRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wdWJsaWMtdHlwZXMnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2Yge0BsaW5rIEluc3RhbGxhdGlvbnN9IGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW5cbiAqIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cbiAqIEBwYXJhbSBhcHAgLSBUaGUge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnMoYXBwOiBGaXJlYmFzZUFwcCA9IGdldEFwcCgpKTogSW5zdGFsbGF0aW9ucyB7XG4gIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gX2dldFByb3ZpZGVyKGFwcCwgJ2luc3RhbGxhdGlvbnMnKS5nZXRJbW1lZGlhdGUoKTtcbiAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbXBsO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEZpcmViYXNlQXBwLCBGaXJlYmFzZU9wdGlvbnMgfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IEZpcmViYXNlRXJyb3IgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4uL3V0aWwvZXJyb3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RBcHBDb25maWcoYXBwOiBGaXJlYmFzZUFwcCk6IEFwcENvbmZpZyB7XG4gIGlmICghYXBwIHx8ICFhcHAub3B0aW9ucykge1xuICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgQ29uZmlndXJhdGlvbicpO1xuICB9XG5cbiAgaWYgKCFhcHAubmFtZSkge1xuICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKCdBcHAgTmFtZScpO1xuICB9XG5cbiAgLy8gUmVxdWlyZWQgYXBwIGNvbmZpZyBrZXlzXG4gIGNvbnN0IGNvbmZpZ0tleXM6IEFycmF5PGtleW9mIEZpcmViYXNlT3B0aW9ucz4gPSBbXG4gICAgJ3Byb2plY3RJZCcsXG4gICAgJ2FwaUtleScsXG4gICAgJ2FwcElkJ1xuICBdO1xuXG4gIGZvciAoY29uc3Qga2V5TmFtZSBvZiBjb25maWdLZXlzKSB7XG4gICAgaWYgKCFhcHAub3B0aW9uc1trZXlOYW1lXSkge1xuICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3Ioa2V5TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhcHBOYW1lOiBhcHAubmFtZSxcbiAgICBwcm9qZWN0SWQ6IGFwcC5vcHRpb25zLnByb2plY3RJZCEsXG4gICAgYXBpS2V5OiBhcHAub3B0aW9ucy5hcGlLZXkhLFxuICAgIGFwcElkOiBhcHAub3B0aW9ucy5hcHBJZCFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0TWlzc2luZ1ZhbHVlRXJyb3IodmFsdWVOYW1lOiBzdHJpbmcpOiBGaXJlYmFzZUVycm9yIHtcbiAgcmV0dXJuIEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5NSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTLCB7XG4gICAgdmFsdWVOYW1lXG4gIH0pO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IF9yZWdpc3RlckNvbXBvbmVudCwgX2dldFByb3ZpZGVyIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFR5cGUsXG4gIEluc3RhbmNlRmFjdG9yeSxcbiAgQ29tcG9uZW50Q29udGFpbmVyXG59IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0SWQsIGdldFRva2VuIH0gZnJvbSAnLi4vYXBpL2luZGV4JztcbmltcG9ydCB7IF9GaXJlYmFzZUluc3RhbGxhdGlvbnNJbnRlcm5hbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHVibGljLXR5cGVzJztcbmltcG9ydCB7IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IGV4dHJhY3RBcHBDb25maWcgfSBmcm9tICcuLi9oZWxwZXJzL2V4dHJhY3QtYXBwLWNvbmZpZyc7XG5cbmNvbnN0IElOU1RBTExBVElPTlNfTkFNRSA9ICdpbnN0YWxsYXRpb25zJztcbmNvbnN0IElOU1RBTExBVElPTlNfTkFNRV9JTlRFUk5BTCA9ICdpbnN0YWxsYXRpb25zLWludGVybmFsJztcblxuY29uc3QgcHVibGljRmFjdG9yeTogSW5zdGFuY2VGYWN0b3J5PCdpbnN0YWxsYXRpb25zJz4gPSAoXG4gIGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyXG4pID0+IHtcbiAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgLy8gVGhyb3dzIGlmIGFwcCBpc24ndCBjb25maWd1cmVkIHByb3Blcmx5LlxuICBjb25zdCBhcHBDb25maWcgPSBleHRyYWN0QXBwQ29uZmlnKGFwcCk7XG4gIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciA9IF9nZXRQcm92aWRlcihhcHAsICdoZWFydGJlYXQnKTtcblxuICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbDogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCA9IHtcbiAgICBhcHAsXG4gICAgYXBwQ29uZmlnLFxuICAgIGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlcixcbiAgICBfZGVsZXRlOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoKVxuICB9O1xuICByZXR1cm4gaW5zdGFsbGF0aW9uc0ltcGw7XG59O1xuXG5jb25zdCBpbnRlcm5hbEZhY3Rvcnk6IEluc3RhbmNlRmFjdG9yeTwnaW5zdGFsbGF0aW9ucy1pbnRlcm5hbCc+ID0gKFxuICBjb250YWluZXI6IENvbXBvbmVudENvbnRhaW5lclxuKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XG4gIC8vIEludGVybmFsIEZJUyBpbnN0YW5jZSByZWxpZXMgb24gcHVibGljIEZJUyBpbnN0YW5jZS5cbiAgY29uc3QgaW5zdGFsbGF0aW9ucyA9IF9nZXRQcm92aWRlcihhcHAsIElOU1RBTExBVElPTlNfTkFNRSkuZ2V0SW1tZWRpYXRlKCk7XG5cbiAgY29uc3QgaW5zdGFsbGF0aW9uc0ludGVybmFsOiBfRmlyZWJhc2VJbnN0YWxsYXRpb25zSW50ZXJuYWwgPSB7XG4gICAgZ2V0SWQ6ICgpID0+IGdldElkKGluc3RhbGxhdGlvbnMpLFxuICAgIGdldFRva2VuOiAoZm9yY2VSZWZyZXNoPzogYm9vbGVhbikgPT4gZ2V0VG9rZW4oaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKVxuICB9O1xuICByZXR1cm4gaW5zdGFsbGF0aW9uc0ludGVybmFsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9ucygpOiB2b2lkIHtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50KFxuICAgIG5ldyBDb21wb25lbnQoSU5TVEFMTEFUSU9OU19OQU1FLCBwdWJsaWNGYWN0b3J5LCBDb21wb25lbnRUeXBlLlBVQkxJQylcbiAgKTtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50KFxuICAgIG5ldyBDb21wb25lbnQoXG4gICAgICBJTlNUQUxMQVRJT05TX05BTUVfSU5URVJOQUwsXG4gICAgICBpbnRlcm5hbEZhY3RvcnksXG4gICAgICBDb21wb25lbnRUeXBlLlBSSVZBVEVcbiAgICApXG4gICk7XG59XG4iLCAiLyoqXG4gKiBGaXJlYmFzZSBJbnN0YWxsYXRpb25zXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJJbnN0YWxsYXRpb25zIH0gZnJvbSAnLi9mdW5jdGlvbnMvY29uZmlnJztcbmltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9wdWJsaWMtdHlwZXMnO1xuXG5yZWdpc3Rlckluc3RhbGxhdGlvbnMoKTtcbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uKTtcbi8vIEJVSUxEX1RBUkdFVCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZhbHVlcyBsaWtlIGVzbTUsIGVzbTIwMTcsIGNqczUsIGV0YyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXG5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ19fQlVJTERfVEFSR0VUX18nKTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IFNES19WRVJTSU9OID0gdmVyc2lvbjtcbi8qKiBUaGUgcHJlZml4IGZvciBzdGFydCBVc2VyIFRpbWluZyBtYXJrcyB1c2VkIGZvciBjcmVhdGluZyBUcmFjZXMuICovXG5leHBvcnQgY29uc3QgVFJBQ0VfU1RBUlRfTUFSS19QUkVGSVggPSAnRkItUEVSRi1UUkFDRS1TVEFSVCc7XG4vKiogVGhlIHByZWZpeCBmb3Igc3RvcCBVc2VyIFRpbWluZyBtYXJrcyB1c2VkIGZvciBjcmVhdGluZyBUcmFjZXMuICovXG5leHBvcnQgY29uc3QgVFJBQ0VfU1RPUF9NQVJLX1BSRUZJWCA9ICdGQi1QRVJGLVRSQUNFLVNUT1AnO1xuLyoqIFRoZSBwcmVmaXggZm9yIFVzZXIgVGltaW5nIG1lYXN1cmUgdXNlZCBmb3IgY3JlYXRpbmcgVHJhY2VzLiAqL1xuZXhwb3J0IGNvbnN0IFRSQUNFX01FQVNVUkVfUFJFRklYID0gJ0ZCLVBFUkYtVFJBQ0UtTUVBU1VSRSc7XG4vKiogVGhlIHByZWZpeCBmb3Igb3V0IG9mIHRoZSBib3ggcGFnZSBsb2FkIFRyYWNlIG5hbWUuICovXG5leHBvcnQgY29uc3QgT09CX1RSQUNFX1BBR0VfTE9BRF9QUkVGSVggPSAnX3d0Xyc7XG5cbmV4cG9ydCBjb25zdCBGSVJTVF9QQUlOVF9DT1VOVEVSX05BTUUgPSAnX2ZwJztcblxuZXhwb3J0IGNvbnN0IEZJUlNUX0NPTlRFTlRGVUxfUEFJTlRfQ09VTlRFUl9OQU1FID0gJ19mY3AnO1xuXG5leHBvcnQgY29uc3QgRklSU1RfSU5QVVRfREVMQVlfQ09VTlRFUl9OQU1FID0gJ19maWQnO1xuXG5leHBvcnQgY29uc3QgQ09ORklHX0xPQ0FMX1NUT1JBR0VfS0VZID0gJ0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgQ09ORklHX0VYUElSWV9MT0NBTF9TVE9SQUdFX0tFWSA9XG4gICdAZmlyZWJhc2UvcGVyZm9ybWFuY2UvY29uZmlnZXhwaXJlJztcblxuZXhwb3J0IGNvbnN0IFNFUlZJQ0UgPSAncGVyZm9ybWFuY2UnO1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfTkFNRSA9ICdQZXJmb3JtYW5jZSc7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRXJyb3JGYWN0b3J5IH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgU0VSVklDRSwgU0VSVklDRV9OQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGVudW0gRXJyb3JDb2RlIHtcbiAgVFJBQ0VfU1RBUlRFRF9CRUZPUkUgPSAndHJhY2Ugc3RhcnRlZCcsXG4gIFRSQUNFX1NUT1BQRURfQkVGT1JFID0gJ3RyYWNlIHN0b3BwZWQnLFxuICBOT05QT1NJVElWRV9UUkFDRV9TVEFSVF9USU1FID0gJ25vbnBvc2l0aXZlIHRyYWNlIHN0YXJ0VGltZScsXG4gIE5PTlBPU0lUSVZFX1RSQUNFX0RVUkFUSU9OID0gJ25vbnBvc2l0aXZlIHRyYWNlIGR1cmF0aW9uJyxcbiAgTk9fV0lORE9XID0gJ25vIHdpbmRvdycsXG4gIE5PX0FQUF9JRCA9ICdubyBhcHAgaWQnLFxuICBOT19QUk9KRUNUX0lEID0gJ25vIHByb2plY3QgaWQnLFxuICBOT19BUElfS0VZID0gJ25vIGFwaSBrZXknLFxuICBJTlZBTElEX0NDX0xPRyA9ICdpbnZhbGlkIGNjIGxvZycsXG4gIEZCX05PVF9ERUZBVUxUID0gJ0ZCIG5vdCBkZWZhdWx0JyxcbiAgUkNfTk9UX09LID0gJ1JDIHJlc3BvbnNlIG5vdCBvaycsXG4gIElOVkFMSURfQVRUUklCVVRFX05BTUUgPSAnaW52YWxpZCBhdHRyaWJ1dGUgbmFtZScsXG4gIElOVkFMSURfQVRUUklCVVRFX1ZBTFVFID0gJ2ludmFsaWQgYXR0cmlidXRlIHZhbHVlJyxcbiAgSU5WQUxJRF9DVVNUT01fTUVUUklDX05BTUUgPSAnaW52YWxpZCBjdXN0b20gbWV0cmljIG5hbWUnLFxuICBJTlZBTElEX1NUUklOR19NRVJHRVJfUEFSQU1FVEVSID0gJ2ludmFsaWQgU3RyaW5nIG1lcmdlciBpbnB1dCcsXG4gIEFMUkVBRFlfSU5JVElBTElaRUQgPSAnYWxyZWFkeSBpbml0aWFsaXplZCdcbn1cblxuY29uc3QgRVJST1JfREVTQ1JJUFRJT05fTUFQOiB7IHJlYWRvbmx5IFtrZXkgaW4gRXJyb3JDb2RlXTogc3RyaW5nIH0gPSB7XG4gIFtFcnJvckNvZGUuVFJBQ0VfU1RBUlRFRF9CRUZPUkVdOiAnVHJhY2UgeyR0cmFjZU5hbWV9IHdhcyBzdGFydGVkIGJlZm9yZS4nLFxuICBbRXJyb3JDb2RlLlRSQUNFX1NUT1BQRURfQkVGT1JFXTogJ1RyYWNlIHskdHJhY2VOYW1lfSBpcyBub3QgcnVubmluZy4nLFxuICBbRXJyb3JDb2RlLk5PTlBPU0lUSVZFX1RSQUNFX1NUQVJUX1RJTUVdOlxuICAgICdUcmFjZSB7JHRyYWNlTmFtZX0gc3RhcnRUaW1lIHNob3VsZCBiZSBwb3NpdGl2ZS4nLFxuICBbRXJyb3JDb2RlLk5PTlBPU0lUSVZFX1RSQUNFX0RVUkFUSU9OXTpcbiAgICAnVHJhY2UgeyR0cmFjZU5hbWV9IGR1cmF0aW9uIHNob3VsZCBiZSBwb3NpdGl2ZS4nLFxuICBbRXJyb3JDb2RlLk5PX1dJTkRPV106ICdXaW5kb3cgaXMgbm90IGF2YWlsYWJsZS4nLFxuICBbRXJyb3JDb2RlLk5PX0FQUF9JRF06ICdBcHAgaWQgaXMgbm90IGF2YWlsYWJsZS4nLFxuICBbRXJyb3JDb2RlLk5PX1BST0pFQ1RfSURdOiAnUHJvamVjdCBpZCBpcyBub3QgYXZhaWxhYmxlLicsXG4gIFtFcnJvckNvZGUuTk9fQVBJX0tFWV06ICdBcGkga2V5IGlzIG5vdCBhdmFpbGFibGUuJyxcbiAgW0Vycm9yQ29kZS5JTlZBTElEX0NDX0xPR106ICdBdHRlbXB0ZWQgdG8gcXVldWUgaW52YWxpZCBjYyBldmVudCcsXG4gIFtFcnJvckNvZGUuRkJfTk9UX0RFRkFVTFRdOlxuICAgICdQZXJmb3JtYW5jZSBjYW4gb25seSBzdGFydCB3aGVuIEZpcmViYXNlIGFwcCBpbnN0YW5jZSBpcyB0aGUgZGVmYXVsdCBvbmUuJyxcbiAgW0Vycm9yQ29kZS5SQ19OT1RfT0tdOiAnUkMgcmVzcG9uc2UgaXMgbm90IG9rJyxcbiAgW0Vycm9yQ29kZS5JTlZBTElEX0FUVFJJQlVURV9OQU1FXTpcbiAgICAnQXR0cmlidXRlIG5hbWUgeyRhdHRyaWJ1dGVOYW1lfSBpcyBpbnZhbGlkLicsXG4gIFtFcnJvckNvZGUuSU5WQUxJRF9BVFRSSUJVVEVfVkFMVUVdOlxuICAgICdBdHRyaWJ1dGUgdmFsdWUgeyRhdHRyaWJ1dGVWYWx1ZX0gaXMgaW52YWxpZC4nLFxuICBbRXJyb3JDb2RlLklOVkFMSURfQ1VTVE9NX01FVFJJQ19OQU1FXTpcbiAgICAnQ3VzdG9tIG1ldHJpYyBuYW1lIHskY3VzdG9tTWV0cmljTmFtZX0gaXMgaW52YWxpZCcsXG4gIFtFcnJvckNvZGUuSU5WQUxJRF9TVFJJTkdfTUVSR0VSX1BBUkFNRVRFUl06XG4gICAgJ0lucHV0IGZvciBTdHJpbmcgbWVyZ2VyIGlzIGludmFsaWQsIGNvbnRhY3Qgc3VwcG9ydCB0ZWFtIHRvIHJlc29sdmUuJyxcbiAgW0Vycm9yQ29kZS5BTFJFQURZX0lOSVRJQUxJWkVEXTpcbiAgICAnaW5pdGlhbGl6ZVBlcmZvcm1hbmNlKCkgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWQgd2l0aCAnICtcbiAgICAnZGlmZmVyZW50IG9wdGlvbnMuIFRvIGF2b2lkIHRoaXMgZXJyb3IsIGNhbGwgaW5pdGlhbGl6ZVBlcmZvcm1hbmNlKCkgd2l0aCB0aGUgJyArXG4gICAgJ3NhbWUgb3B0aW9ucyBhcyB3aGVuIGl0IHdhcyBvcmlnaW5hbGx5IGNhbGxlZCwgb3IgY2FsbCBnZXRQZXJmb3JtYW5jZSgpIHRvIHJldHVybiB0aGUnICtcbiAgICAnIGFscmVhZHkgaW5pdGlhbGl6ZWQgaW5zdGFuY2UuJ1xufTtcblxuaW50ZXJmYWNlIEVycm9yUGFyYW1zIHtcbiAgW0Vycm9yQ29kZS5UUkFDRV9TVEFSVEVEX0JFRk9SRV06IHsgdHJhY2VOYW1lOiBzdHJpbmcgfTtcbiAgW0Vycm9yQ29kZS5UUkFDRV9TVE9QUEVEX0JFRk9SRV06IHsgdHJhY2VOYW1lOiBzdHJpbmcgfTtcbiAgW0Vycm9yQ29kZS5OT05QT1NJVElWRV9UUkFDRV9TVEFSVF9USU1FXTogeyB0cmFjZU5hbWU6IHN0cmluZyB9O1xuICBbRXJyb3JDb2RlLk5PTlBPU0lUSVZFX1RSQUNFX0RVUkFUSU9OXTogeyB0cmFjZU5hbWU6IHN0cmluZyB9O1xuICBbRXJyb3JDb2RlLklOVkFMSURfQVRUUklCVVRFX05BTUVdOiB7IGF0dHJpYnV0ZU5hbWU6IHN0cmluZyB9O1xuICBbRXJyb3JDb2RlLklOVkFMSURfQVRUUklCVVRFX1ZBTFVFXTogeyBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nIH07XG4gIFtFcnJvckNvZGUuSU5WQUxJRF9DVVNUT01fTUVUUklDX05BTUVdOiB7IGN1c3RvbU1ldHJpY05hbWU6IHN0cmluZyB9O1xufVxuXG5leHBvcnQgY29uc3QgRVJST1JfRkFDVE9SWSA9IG5ldyBFcnJvckZhY3Rvcnk8RXJyb3JDb2RlLCBFcnJvclBhcmFtcz4oXG4gIFNFUlZJQ0UsXG4gIFNFUlZJQ0VfTkFNRSxcbiAgRVJST1JfREVTQ1JJUFRJT05fTUFQXG4pO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IExvZ2dlciwgTG9nTGV2ZWwgfSBmcm9tICdAZmlyZWJhc2UvbG9nZ2VyJztcbmltcG9ydCB7IFNFUlZJQ0VfTkFNRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBjb25zb2xlTG9nZ2VyID0gbmV3IExvZ2dlcihTRVJWSUNFX05BTUUpO1xuY29uc29sZUxvZ2dlci5sb2dMZXZlbCA9IExvZ0xldmVsLklORk87XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzJztcbmltcG9ydCB7IGlzSW5kZXhlZERCQXZhaWxhYmxlLCBhcmVDb29raWVzRW5hYmxlZCB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IGNvbnNvbGVMb2dnZXIgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX2xvZ2dlcic7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgUGVyZm9ybWFuY2VPYnNlcnZlcjogdHlwZW9mIFBlcmZvcm1hbmNlT2JzZXJ2ZXI7XG4gICAgcGVyZk1ldHJpY3M/OiB7IG9uRmlyc3RJbnB1dERlbGF5KGZuOiAoZmlkOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIH07XG4gIH1cbn1cblxubGV0IGFwaUluc3RhbmNlOiBBcGkgfCB1bmRlZmluZWQ7XG5sZXQgd2luZG93SW5zdGFuY2U6IFdpbmRvdyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgRW50cnlUeXBlID1cbiAgfCAnbWFyaydcbiAgfCAnbWVhc3VyZSdcbiAgfCAncGFpbnQnXG4gIHwgJ3Jlc291cmNlJ1xuICB8ICdmcmFtZSdcbiAgfCAnbmF2aWdhdGlvbic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBob2xkcyBhIHJlZmVyZW5jZSB0byB2YXJpb3VzIGJyb3dzZXIgcmVsYXRlZCBvYmplY3RzIGluamVjdGVkIGJ5XG4gKiBzZXQgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFwaSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGVyZm9ybWFuY2U6IFBlcmZvcm1hbmNlO1xuICAvKiogUHJlZm9ybWFuY2VPYnNlcnZlciBjb25zdHJ1Y3RvciBmdW5jdGlvbi4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBQZXJmb3JtYW5jZU9ic2VydmVyOiB0eXBlb2YgUGVyZm9ybWFuY2VPYnNlcnZlcjtcbiAgcHJpdmF0ZSByZWFkb25seSB3aW5kb3dMb2NhdGlvbjogTG9jYXRpb247XG4gIHJlYWRvbmx5IG9uRmlyc3RJbnB1dERlbGF5PzogKGZuOiAoZmlkOiBudW1iZXIpID0+IHZvaWQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IGxvY2FsU3RvcmFnZT86IFN0b3JhZ2U7XG4gIHJlYWRvbmx5IGRvY3VtZW50OiBEb2N1bWVudDtcbiAgcmVhZG9ubHkgbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgd2luZG93PzogV2luZG93KSB7XG4gICAgaWYgKCF3aW5kb3cpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT19XSU5ET1cpO1xuICAgIH1cbiAgICB0aGlzLnBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICAgIHRoaXMuUGVyZm9ybWFuY2VPYnNlcnZlciA9IHdpbmRvdy5QZXJmb3JtYW5jZU9ic2VydmVyO1xuICAgIHRoaXMud2luZG93TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgdGhpcy5uYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yO1xuICAgIHRoaXMuZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgaWYgKHRoaXMubmF2aWdhdG9yICYmIHRoaXMubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICAgIC8vIElmIHVzZXIgYmxvY2tzIGNvb2tpZXMgb24gdGhlIGJyb3dzZXIsIGFjY2Vzc2luZyBsb2NhbFN0b3JhZ2Ugd2lsbFxuICAgICAgLy8gdGhyb3cgYW4gZXhjZXB0aW9uLlxuICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgIH1cbiAgICBpZiAod2luZG93LnBlcmZNZXRyaWNzICYmIHdpbmRvdy5wZXJmTWV0cmljcy5vbkZpcnN0SW5wdXREZWxheSkge1xuICAgICAgdGhpcy5vbkZpcnN0SW5wdXREZWxheSA9IHdpbmRvdy5wZXJmTWV0cmljcy5vbkZpcnN0SW5wdXREZWxheTtcbiAgICB9XG4gIH1cblxuICBnZXRVcmwoKTogc3RyaW5nIHtcbiAgICAvLyBEbyBub3QgY2FwdHVyZSB0aGUgc3RyaW5nIHF1ZXJ5IHBhcnQgb2YgdXJsLlxuICAgIHJldHVybiB0aGlzLndpbmRvd0xvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgfVxuXG4gIG1hcmsobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBlcmZvcm1hbmNlIHx8ICF0aGlzLnBlcmZvcm1hbmNlLm1hcmspIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wZXJmb3JtYW5jZS5tYXJrKG5hbWUpO1xuICB9XG5cbiAgbWVhc3VyZShtZWFzdXJlTmFtZTogc3RyaW5nLCBtYXJrMTogc3RyaW5nLCBtYXJrMjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBlcmZvcm1hbmNlIHx8ICF0aGlzLnBlcmZvcm1hbmNlLm1lYXN1cmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wZXJmb3JtYW5jZS5tZWFzdXJlKG1lYXN1cmVOYW1lLCBtYXJrMSwgbWFyazIpO1xuICB9XG5cbiAgZ2V0RW50cmllc0J5VHlwZSh0eXBlOiBFbnRyeVR5cGUpOiBQZXJmb3JtYW5jZUVudHJ5W10ge1xuICAgIGlmICghdGhpcy5wZXJmb3JtYW5jZSB8fCAhdGhpcy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUodHlwZSk7XG4gIH1cblxuICBnZXRFbnRyaWVzQnlOYW1lKG5hbWU6IHN0cmluZyk6IFBlcmZvcm1hbmNlRW50cnlbXSB7XG4gICAgaWYgKCF0aGlzLnBlcmZvcm1hbmNlIHx8ICF0aGlzLnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShuYW1lKTtcbiAgfVxuXG4gIGdldFRpbWVPcmlnaW4oKTogbnVtYmVyIHtcbiAgICAvLyBQb2x5ZmlsbCB0aGUgdGltZSBvcmlnaW4gd2l0aCBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0LlxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnBlcmZvcm1hbmNlICYmXG4gICAgICAodGhpcy5wZXJmb3JtYW5jZS50aW1lT3JpZ2luIHx8IHRoaXMucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydClcbiAgICApO1xuICB9XG5cbiAgcmVxdWlyZWRBcGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIGlmICghZmV0Y2ggfHwgIVByb21pc2UgfHwgIWFyZUNvb2tpZXNFbmFibGVkKCkpIHtcbiAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbyhcbiAgICAgICAgJ0ZpcmViYXNlIFBlcmZvcm1hbmNlIGNhbm5vdCBzdGFydCBpZiBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgZmV0Y2ggYW5kIFByb21pc2Ugb3IgY29va2llIGlzIGRpc2FibGVkLidcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpc0luZGV4ZWREQkF2YWlsYWJsZSgpKSB7XG4gICAgICBjb25zb2xlTG9nZ2VyLmluZm8oJ0luZGV4ZWREQiBpcyBub3Qgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3N3ZXInKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXR1cE9ic2VydmVyKFxuICAgIGVudHJ5VHlwZTogRW50cnlUeXBlLFxuICAgIGNhbGxiYWNrOiAoZW50cnk6IFBlcmZvcm1hbmNlRW50cnkpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLlBlcmZvcm1hbmNlT2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgdGhpcy5QZXJmb3JtYW5jZU9ic2VydmVyKGxpc3QgPT4ge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBsaXN0LmdldEVudHJpZXMoKSkge1xuICAgICAgICAvLyBgZW50cnlgIGlzIGEgUGVyZm9ybWFuY2VFbnRyeSBpbnN0YW5jZS5cbiAgICAgICAgY2FsbGJhY2soZW50cnkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSBlbnRyeSB0eXBlcyB5b3UgY2FyZSBhYm91dC5cbiAgICBvYnNlcnZlci5vYnNlcnZlKHsgZW50cnlUeXBlczogW2VudHJ5VHlwZV0gfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBpIHtcbiAgICBpZiAoYXBpSW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXBpSW5zdGFuY2UgPSBuZXcgQXBpKHdpbmRvd0luc3RhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaUluc3RhbmNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEFwaSh3aW5kb3c6IFdpbmRvdyk6IHZvaWQge1xuICB3aW5kb3dJbnN0YW5jZSA9IHdpbmRvdztcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBfRmlyZWJhc2VJbnN0YWxsYXRpb25zSW50ZXJuYWwgfSBmcm9tICdAZmlyZWJhc2UvaW5zdGFsbGF0aW9ucyc7XG5cbmxldCBpaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbmxldCBhdXRoVG9rZW46IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldElpZFByb21pc2UoXG4gIGluc3RhbGxhdGlvbnNTZXJ2aWNlOiBfRmlyZWJhc2VJbnN0YWxsYXRpb25zSW50ZXJuYWxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGlpZFByb21pc2UgPSBpbnN0YWxsYXRpb25zU2VydmljZS5nZXRJZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gIGlpZFByb21pc2UudGhlbigoaWlkVmFsOiBzdHJpbmcpID0+IHtcbiAgICBpaWQgPSBpaWRWYWw7XG4gIH0pO1xuICByZXR1cm4gaWlkUHJvbWlzZTtcbn1cblxuLy8gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgYWZ0ZXIgdGhlIGlpZCBpcyByZXRyaWV2ZWQgYnkgZ2V0SWlkUHJvbWlzZSBtZXRob2QuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWlkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBpaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdXRoVG9rZW5Qcm9taXNlKFxuICBpbnN0YWxsYXRpb25zU2VydmljZTogX0ZpcmViYXNlSW5zdGFsbGF0aW9uc0ludGVybmFsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBhdXRoVG9rZW5Qcm9taXNlID0gaW5zdGFsbGF0aW9uc1NlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICBhdXRoVG9rZW5Qcm9taXNlLnRoZW4oKGF1dGhUb2tlblZhbDogc3RyaW5nKSA9PiB7XG4gICAgYXV0aFRva2VuID0gYXV0aFRva2VuVmFsO1xuICB9KTtcbiAgcmV0dXJuIGF1dGhUb2tlblByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdXRoZW50aWNhdGlvblRva2VuKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBhdXRoVG9rZW47XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHJpbmdzKHBhcnQxOiBzdHJpbmcsIHBhcnQyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzaXplRGlmZiA9IHBhcnQxLmxlbmd0aCAtIHBhcnQyLmxlbmd0aDtcbiAgaWYgKHNpemVEaWZmIDwgMCB8fCBzaXplRGlmZiA+IDEpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuSU5WQUxJRF9TVFJJTkdfTUVSR0VSX1BBUkFNRVRFUik7XG4gIH1cblxuICBjb25zdCByZXN1bHRBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnQxLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0QXJyYXkucHVzaChwYXJ0MS5jaGFyQXQoaSkpO1xuICAgIGlmIChwYXJ0Mi5sZW5ndGggPiBpKSB7XG4gICAgICByZXN1bHRBcnJheS5wdXNoKHBhcnQyLmNoYXJBdChpKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdEFycmF5LmpvaW4oJycpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IG1lcmdlU3RyaW5ncyB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ19tZXJnZXInO1xuXG5sZXQgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2U6IFNldHRpbmdzU2VydmljZSB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XG4gIC8vIFRoZSB2YXJpYWJsZSB3aGljaCBjb250cm9scyBsb2dnaW5nIG9mIGF1dG9tYXRpYyB0cmFjZXMgYW5kIEhUVFAvUyBuZXR3b3JrIG1vbml0b3JpbmcuXG4gIGluc3RydW1lbnRhdGlvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIC8vIFRoZSB2YXJpYWJsZSB3aGljaCBjb250cm9scyBsb2dnaW5nIG9mIGN1c3RvbSB0cmFjZXMuXG4gIGRhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IHRydWU7XG5cbiAgLy8gQ29uZmlndXJhdGlvbiBmbGFncyBzZXQgdGhyb3VnaCByZW1vdGUgY29uZmlnLlxuICBsb2dnaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAvLyBTYW1wbGluZyByYXRlIGJldHdlZW4gMCBhbmQgMS5cbiAgdHJhY2VzU2FtcGxpbmdSYXRlID0gMTtcbiAgbmV0d29ya1JlcXVlc3RzU2FtcGxpbmdSYXRlID0gMTtcblxuICAvLyBBZGRyZXNzIG9mIGxvZ2dpbmcgc2VydmljZS5cbiAgbG9nRW5kUG9pbnRVcmwgPVxuICAgICdodHRwczovL2ZpcmViYXNlbG9nZ2luZy5nb29nbGVhcGlzLmNvbS92MGNjL2xvZz9mb3JtYXQ9anNvbl9wcm90byc7XG4gIC8vIFBlcmZvcm1hbmNlIGV2ZW50IHRyYW5zcG9ydCBlbmRwb2ludCBVUkwgd2hpY2ggc2hvdWxkIGJlIGNvbXBhdGlibGUgd2l0aCBwcm90bzMuXG4gIC8vIE5ldyBBZGRyZXNzIGZvciB0cmFuc3BvcnQgc2VydmljZSwgbm90IGNvbmZpZ3VyYWJsZSB2aWEgUmVtb3RlIENvbmZpZy5cbiAgZmxUcmFuc3BvcnRFbmRwb2ludFVybCA9IG1lcmdlU3RyaW5ncyhcbiAgICAnaHRzL2ZyYnNsZ2lncC5vZ2Vwc2Ntdi9pZW8vZWF5bGcnLFxuICAgICd0cDovaWVhZW9nbi1hZ29sYWkuby8xZnJsZ2xnYy9vJ1xuICApO1xuXG4gIHRyYW5zcG9ydEtleSA9IG1lcmdlU3RyaW5ncygnQXpTQzhyNlJlaUdxRk15ZnZnb3cnLCAnSWF5eDB1LVhUM3Zrc1ZNLXBJVicpO1xuXG4gIC8vIFNvdXJjZSB0eXBlIGZvciBwZXJmb3JtYW5jZSBldmVudCBsb2dzLlxuICBsb2dTb3VyY2UgPSA0NjI7XG5cbiAgLy8gRmxhZ3Mgd2hpY2ggY29udHJvbCBwZXIgc2Vzc2lvbiBsb2dnaW5nIG9mIHRyYWNlcyBhbmQgbmV0d29yayByZXF1ZXN0cy5cbiAgbG9nVHJhY2VBZnRlclNhbXBsaW5nID0gZmFsc2U7XG4gIGxvZ05ldHdvcmtBZnRlclNhbXBsaW5nID0gZmFsc2U7XG5cbiAgLy8gVFRMIG9mIGNvbmZpZyByZXRyaWV2ZWQgZnJvbSByZW1vdGUgY29uZmlnIGluIGhvdXJzLlxuICBjb25maWdUaW1lVG9MaXZlID0gMTI7XG5cbiAgZ2V0RmxUcmFuc3BvcnRGdWxsVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZmxUcmFuc3BvcnRFbmRwb2ludFVybC5jb25jYXQoJz9rZXk9JywgdGhpcy50cmFuc3BvcnRLZXkpO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IFNldHRpbmdzU2VydmljZSB7XG4gICAgaWYgKHNldHRpbmdzU2VydmljZUluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlID0gbmV3IFNldHRpbmdzU2VydmljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2U7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlfc2VydmljZSc7XG5cbi8vIFRoZSB2YWx1ZXMgYW5kIG9yZGVycyBvZiB0aGUgZm9sbG93aW5nIGVudW1zIHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbmNvbnN0IGVudW0gU2VydmljZVdvcmtlclN0YXR1cyB7XG4gIFVOS05PV04gPSAwLFxuICBVTlNVUFBPUlRFRCA9IDEsXG4gIENPTlRST0xMRUQgPSAyLFxuICBVTkNPTlRST0xMRUQgPSAzXG59XG5cbmV4cG9ydCBlbnVtIFZpc2liaWxpdHlTdGF0ZSB7XG4gIFVOS05PV04gPSAwLFxuICBWSVNJQkxFID0gMSxcbiAgSElEREVOID0gMlxufVxuXG5jb25zdCBlbnVtIEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlIHtcbiAgVU5LTk9XTiA9IDAsXG4gIENPTk5FQ1RJT05fU0xPV18yRyA9IDEsXG4gIENPTk5FQ1RJT05fMkcgPSAyLFxuICBDT05ORUNUSU9OXzNHID0gMyxcbiAgQ09OTkVDVElPTl80RyA9IDRcbn1cblxuLyoqXG4gKiBOZXR3b3JrSW5mb3JtYXRpb25cbiAqXG4gKiByZWY6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9OZXR3b3JrSW5mb3JtYXRpb25cbiAqL1xuaW50ZXJmYWNlIE5ldHdvcmtJbmZvcm1hdGlvbldpdGhFZmZlY3RpdmVUeXBlIGV4dGVuZHMgTmV0d29ya0luZm9ybWF0aW9uIHtcbiAgLy8gYGVmZmVjdGl2ZVR5cGVgIGlzIGFuIGV4cGVyaW1lbnRhbCBwcm9wZXJ0eSBhbmQgbm90IGluY2x1ZGVkIGluXG4gIC8vIFR5cGVTY3JpcHQncyB0eXBpbmdzIGZvciB0aGUgbmF0aXZlIE5ldHdvcmtJbmZvcm1hdGlvbiBpbnRlcmZhY2VcbiAgcmVhZG9ubHkgZWZmZWN0aXZlVHlwZT86ICdzbG93LTJnJyB8ICcyZycgfCAnM2cnIHwgJzRnJztcbn1cblxuaW50ZXJmYWNlIE5hdmlnYXRvcldpdGhDb25uZWN0aW9uIGV4dGVuZHMgTmF2aWdhdG9yIHtcbiAgcmVhZG9ubHkgY29ubmVjdGlvbjogTmV0d29ya0luZm9ybWF0aW9uV2l0aEVmZmVjdGl2ZVR5cGU7XG59XG5cbmNvbnN0IFJFU0VSVkVEX0FUVFJJQlVURV9QUkVGSVhFUyA9IFsnZmlyZWJhc2VfJywgJ2dvb2dsZV8nLCAnZ2FfJ107XG5jb25zdCBBVFRSSUJVVEVfRk9STUFUX1JFR0VYID0gbmV3IFJlZ0V4cCgnXlthLXpBLVpdXFxcXHcqJCcpO1xuY29uc3QgTUFYX0FUVFJJQlVURV9OQU1FX0xFTkdUSCA9IDQwO1xuY29uc3QgTUFYX0FUVFJJQlVURV9WQUxVRV9MRU5HVEggPSAxMDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2aWNlV29ya2VyU3RhdHVzKCk6IFNlcnZpY2VXb3JrZXJTdGF0dXMge1xuICBjb25zdCBuYXZpZ2F0b3IgPSBBcGkuZ2V0SW5zdGFuY2UoKS5uYXZpZ2F0b3I7XG4gIGlmIChuYXZpZ2F0b3I/LnNlcnZpY2VXb3JrZXIpIHtcbiAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgcmV0dXJuIFNlcnZpY2VXb3JrZXJTdGF0dXMuQ09OVFJPTExFRDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFNlcnZpY2VXb3JrZXJTdGF0dXMuVU5DT05UUk9MTEVEO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gU2VydmljZVdvcmtlclN0YXR1cy5VTlNVUFBPUlRFRDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlzaWJpbGl0eVN0YXRlKCk6IFZpc2liaWxpdHlTdGF0ZSB7XG4gIGNvbnN0IGRvY3VtZW50ID0gQXBpLmdldEluc3RhbmNlKCkuZG9jdW1lbnQ7XG4gIGNvbnN0IHZpc2liaWxpdHlTdGF0ZSA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZTtcbiAgc3dpdGNoICh2aXNpYmlsaXR5U3RhdGUpIHtcbiAgICBjYXNlICd2aXNpYmxlJzpcbiAgICAgIHJldHVybiBWaXNpYmlsaXR5U3RhdGUuVklTSUJMRTtcbiAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgcmV0dXJuIFZpc2liaWxpdHlTdGF0ZS5ISURERU47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBWaXNpYmlsaXR5U3RhdGUuVU5LTk9XTjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWZmZWN0aXZlQ29ubmVjdGlvblR5cGUoKTogRWZmZWN0aXZlQ29ubmVjdGlvblR5cGUge1xuICBjb25zdCBuYXZpZ2F0b3IgPSBBcGkuZ2V0SW5zdGFuY2UoKS5uYXZpZ2F0b3I7XG4gIGNvbnN0IG5hdmlnYXRvckNvbm5lY3Rpb24gPSAobmF2aWdhdG9yIGFzIE5hdmlnYXRvcldpdGhDb25uZWN0aW9uKS5jb25uZWN0aW9uO1xuICBjb25zdCBlZmZlY3RpdmVUeXBlID1cbiAgICBuYXZpZ2F0b3JDb25uZWN0aW9uICYmIG5hdmlnYXRvckNvbm5lY3Rpb24uZWZmZWN0aXZlVHlwZTtcbiAgc3dpdGNoIChlZmZlY3RpdmVUeXBlKSB7XG4gICAgY2FzZSAnc2xvdy0yZyc6XG4gICAgICByZXR1cm4gRWZmZWN0aXZlQ29ubmVjdGlvblR5cGUuQ09OTkVDVElPTl9TTE9XXzJHO1xuICAgIGNhc2UgJzJnJzpcbiAgICAgIHJldHVybiBFZmZlY3RpdmVDb25uZWN0aW9uVHlwZS5DT05ORUNUSU9OXzJHO1xuICAgIGNhc2UgJzNnJzpcbiAgICAgIHJldHVybiBFZmZlY3RpdmVDb25uZWN0aW9uVHlwZS5DT05ORUNUSU9OXzNHO1xuICAgIGNhc2UgJzRnJzpcbiAgICAgIHJldHVybiBFZmZlY3RpdmVDb25uZWN0aW9uVHlwZS5DT05ORUNUSU9OXzRHO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gRWZmZWN0aXZlQ29ubmVjdGlvblR5cGUuVU5LTk9XTjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZU5hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChuYW1lLmxlbmd0aCA9PT0gMCB8fCBuYW1lLmxlbmd0aCA+IE1BWF9BVFRSSUJVVEVfTkFNRV9MRU5HVEgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbWF0Y2hlc1Jlc2VydmVkUHJlZml4ID0gUkVTRVJWRURfQVRUUklCVVRFX1BSRUZJWEVTLnNvbWUocHJlZml4ID0+XG4gICAgbmFtZS5zdGFydHNXaXRoKHByZWZpeClcbiAgKTtcbiAgcmV0dXJuICFtYXRjaGVzUmVzZXJ2ZWRQcmVmaXggJiYgISFuYW1lLm1hdGNoKEFUVFJJQlVURV9GT1JNQVRfUkVHRVgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlLmxlbmd0aCAhPT0gMCAmJiB2YWx1ZS5sZW5ndGggPD0gTUFYX0FUVFJJQlVURV9WQUxVRV9MRU5HVEg7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHAgfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcElkKGZpcmViYXNlQXBwOiBGaXJlYmFzZUFwcCk6IHN0cmluZyB7XG4gIGNvbnN0IGFwcElkID0gZmlyZWJhc2VBcHAub3B0aW9ucz8uYXBwSWQ7XG4gIGlmICghYXBwSWQpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9fQVBQX0lEKTtcbiAgfVxuICByZXR1cm4gYXBwSWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SWQoZmlyZWJhc2VBcHA6IEZpcmViYXNlQXBwKTogc3RyaW5nIHtcbiAgY29uc3QgcHJvamVjdElkID0gZmlyZWJhc2VBcHAub3B0aW9ucz8ucHJvamVjdElkO1xuICBpZiAoIXByb2plY3RJZCkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT19QUk9KRUNUX0lEKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdElkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBpS2V5KGZpcmViYXNlQXBwOiBGaXJlYmFzZUFwcCk6IHN0cmluZyB7XG4gIGNvbnN0IGFwaUtleSA9IGZpcmViYXNlQXBwLm9wdGlvbnM/LmFwaUtleTtcbiAgaWYgKCFhcGlLZXkpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9fQVBJX0tFWSk7XG4gIH1cbiAgcmV0dXJuIGFwaUtleTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBDT05GSUdfRVhQSVJZX0xPQ0FMX1NUT1JBR0VfS0VZLFxuICBDT05GSUdfTE9DQUxfU1RPUkFHRV9LRVksXG4gIFNES19WRVJTSU9OXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV9sb2dnZXInO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzJztcblxuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi9hcGlfc2VydmljZSc7XG5pbXBvcnQgeyBnZXRBdXRoVG9rZW5Qcm9taXNlIH0gZnJvbSAnLi9paWRfc2VydmljZSc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuL3NldHRpbmdzX3NlcnZpY2UnO1xuaW1wb3J0IHsgUGVyZm9ybWFuY2VDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvcGVyZic7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SWQsIGdldEFwaUtleSwgZ2V0QXBwSWQgfSBmcm9tICcuLi91dGlscy9hcHBfdXRpbHMnO1xuXG5jb25zdCBSRU1PVEVfQ09ORklHX1NES19WRVJTSU9OID0gJzAuMC4xJztcblxuaW50ZXJmYWNlIFNlY29uZGFyeUNvbmZpZyB7XG4gIGxvZ2dpbmdFbmFibGVkPzogYm9vbGVhbjtcbiAgbG9nU291cmNlPzogbnVtYmVyO1xuICBsb2dFbmRQb2ludFVybD86IHN0cmluZztcbiAgdHJhbnNwb3J0S2V5Pzogc3RyaW5nO1xuICB0cmFjZXNTYW1wbGluZ1JhdGU/OiBudW1iZXI7XG4gIG5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZT86IG51bWJlcjtcbn1cblxuLy8gVGhlc2UgdmFsdWVzIHdpbGwgYmUgdXNlZCBpZiB0aGUgcmVtb3RlIGNvbmZpZyBvYmplY3QgaXMgc3VjY2Vzc2Z1bGx5XG4vLyByZXRyaWV2ZWQsIGJ1dCB0aGUgdGVtcGxhdGUgZG9lcyBub3QgaGF2ZSB0aGVzZSBmaWVsZHMuXG5jb25zdCBERUZBVUxUX0NPTkZJR1M6IFNlY29uZGFyeUNvbmZpZyA9IHtcbiAgbG9nZ2luZ0VuYWJsZWQ6IHRydWVcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW50ZXJmYWNlIFJlbW90ZUNvbmZpZ1RlbXBsYXRlIHtcbiAgZnByX2VuYWJsZWQ/OiBzdHJpbmc7XG4gIGZwcl9sb2dfc291cmNlPzogc3RyaW5nO1xuICBmcHJfbG9nX2VuZHBvaW50X3VybD86IHN0cmluZztcbiAgZnByX2xvZ190cmFuc3BvcnRfa2V5Pzogc3RyaW5nO1xuICBmcHJfbG9nX3RyYW5zcG9ydF93ZWJfcGVyY2VudD86IHN0cmluZztcbiAgZnByX3ZjX25ldHdvcmtfcmVxdWVzdF9zYW1wbGluZ19yYXRlPzogc3RyaW5nO1xuICBmcHJfdmNfdHJhY2Vfc2FtcGxpbmdfcmF0ZT86IHN0cmluZztcbiAgZnByX3ZjX3Nlc3Npb25fc2FtcGxpbmdfcmF0ZT86IHN0cmluZztcbn1cbi8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG5cbmludGVyZmFjZSBSZW1vdGVDb25maWdSZXNwb25zZSB7XG4gIGVudHJpZXM/OiBSZW1vdGVDb25maWdUZW1wbGF0ZTtcbiAgc3RhdGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEZJU19BVVRIX1BSRUZJWCA9ICdGSVJFQkFTRV9JTlNUQUxMQVRJT05TX0FVVEgnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnKFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgaWlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBjb25maWcgPSBnZXRTdG9yZWRDb25maWcoKTtcbiAgaWYgKGNvbmZpZykge1xuICAgIHByb2Nlc3NDb25maWcoY29uZmlnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICByZXR1cm4gZ2V0UmVtb3RlQ29uZmlnKHBlcmZvcm1hbmNlQ29udHJvbGxlciwgaWlkKVxuICAgIC50aGVuKHByb2Nlc3NDb25maWcpXG4gICAgLnRoZW4oXG4gICAgICBjb25maWcgPT4gc3RvcmVDb25maWcoY29uZmlnKSxcbiAgICAgIC8qKiBEbyBub3RoaW5nIGZvciBlcnJvciwgdXNlIGRlZmF1bHRzIHNldCBpbiBzZXR0aW5ncyBzZXJ2aWNlLiAqL1xuICAgICAgKCkgPT4ge31cbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9yZWRDb25maWcoKTogUmVtb3RlQ29uZmlnUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICBjb25zdCBsb2NhbFN0b3JhZ2UgPSBBcGkuZ2V0SW5zdGFuY2UoKS5sb2NhbFN0b3JhZ2U7XG4gIGlmICghbG9jYWxTdG9yYWdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGV4cGlyeVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENPTkZJR19FWFBJUllfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICBpZiAoIWV4cGlyeVN0cmluZyB8fCAhY29uZmlnVmFsaWQoZXhwaXJ5U3RyaW5nKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZ1N0cmluZ2lmaWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ09ORklHX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKCFjb25maWdTdHJpbmdpZmllZCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZ1Jlc3BvbnNlOiBSZW1vdGVDb25maWdSZXNwb25zZSA9IEpTT04ucGFyc2UoY29uZmlnU3RyaW5naWZpZWQpO1xuICAgIHJldHVybiBjb25maWdSZXNwb25zZTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JlQ29uZmlnKGNvbmZpZzogUmVtb3RlQ29uZmlnUmVzcG9uc2UgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlID0gQXBpLmdldEluc3RhbmNlKCkubG9jYWxTdG9yYWdlO1xuICBpZiAoIWNvbmZpZyB8fCAhbG9jYWxTdG9yYWdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ09ORklHX0xPQ0FMX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShjb25maWcpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgQ09ORklHX0VYUElSWV9MT0NBTF9TVE9SQUdFX0tFWSxcbiAgICBTdHJpbmcoXG4gICAgICBEYXRlLm5vdygpICtcbiAgICAgICAgU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkuY29uZmlnVGltZVRvTGl2ZSAqIDYwICogNjAgKiAxMDAwXG4gICAgKVxuICApO1xufVxuXG5jb25zdCBDT1VMRF9OT1RfR0VUX0NPTkZJR19NU0cgPVxuICAnQ291bGQgbm90IGZldGNoIGNvbmZpZywgd2lsbCB1c2UgZGVmYXVsdCBjb25maWdzJztcblxuZnVuY3Rpb24gZ2V0UmVtb3RlQ29uZmlnKFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgaWlkOiBzdHJpbmdcbik6IFByb21pc2U8UmVtb3RlQ29uZmlnUmVzcG9uc2UgfCB1bmRlZmluZWQ+IHtcbiAgLy8gUGVyZiBuZWVkcyBhdXRoIHRva2VuIG9ubHkgdG8gcmV0cmlldmUgcmVtb3RlIGNvbmZpZy5cbiAgcmV0dXJuIGdldEF1dGhUb2tlblByb21pc2UocGVyZm9ybWFuY2VDb250cm9sbGVyLmluc3RhbGxhdGlvbnMpXG4gICAgLnRoZW4oYXV0aFRva2VuID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGdldFByb2plY3RJZChwZXJmb3JtYW5jZUNvbnRyb2xsZXIuYXBwKTtcbiAgICAgIGNvbnN0IGFwaUtleSA9IGdldEFwaUtleShwZXJmb3JtYW5jZUNvbnRyb2xsZXIuYXBwKTtcbiAgICAgIGNvbnN0IGNvbmZpZ0VuZFBvaW50ID0gYGh0dHBzOi8vZmlyZWJhc2VyZW1vdGVjb25maWcuZ29vZ2xlYXBpcy5jb20vdjEvcHJvamVjdHMvJHtwcm9qZWN0SWR9L25hbWVzcGFjZXMvZmlyZXBlcmY6ZmV0Y2g/a2V5PSR7YXBpS2V5fWA7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29uZmlnRW5kUG9pbnQsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYCR7RklTX0FVVEhfUFJFRklYfSAke2F1dGhUb2tlbn1gIH0sXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgYXBwX2luc3RhbmNlX2lkOiBpaWQsXG4gICAgICAgICAgYXBwX2luc3RhbmNlX2lkX3Rva2VuOiBhdXRoVG9rZW4sXG4gICAgICAgICAgYXBwX2lkOiBnZXRBcHBJZChwZXJmb3JtYW5jZUNvbnRyb2xsZXIuYXBwKSxcbiAgICAgICAgICBhcHBfdmVyc2lvbjogU0RLX1ZFUlNJT04sXG4gICAgICAgICAgc2RrX3ZlcnNpb246IFJFTU9URV9DT05GSUdfU0RLX1ZFUlNJT05cbiAgICAgICAgfSlcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZldGNoKHJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIGFzIFJlbW90ZUNvbmZpZ1Jlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluIGNhc2UgcmVzcG9uc2UgaXMgbm90IG9rLiBUaGlzIHdpbGwgYmUgY2F1Z2h0IGJ5IGNhdGNoLlxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuUkNfTk9UX09LKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbyhDT1VMRF9OT1RfR0VUX0NPTkZJR19NU0cpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBQcm9jZXNzZXMgY29uZmlnIGNvbWluZyBlaXRoZXIgZnJvbSBjYWxsaW5nIFJDIG9yIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAqIFRoaXMgbWV0aG9kIG9ubHkgcnVucyBpZiBjYWxsIGlzIHN1Y2Nlc3NmdWwgb3IgY29uZmlnIGluIHN0b3JhZ2VcbiAqIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiBwcm9jZXNzQ29uZmlnKFxuICBjb25maWc/OiBSZW1vdGVDb25maWdSZXNwb25zZVxuKTogUmVtb3RlQ29uZmlnUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbiAgY29uc3Qgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UgPSBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgY29uc3QgZW50cmllcyA9IGNvbmZpZy5lbnRyaWVzIHx8IHt9O1xuICBpZiAoZW50cmllcy5mcHJfZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gVE9ETzogQ2hhbmdlIHRoZSBhc3NpZ25tZW50IG9mIGxvZ2dpbmdFbmFibGVkIG9uY2UgdGhlIHJlY2VpdmVkIHR5cGUgaXNcbiAgICAvLyBrbm93bi5cbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dnaW5nRW5hYmxlZCA9XG4gICAgICBTdHJpbmcoZW50cmllcy5mcHJfZW5hYmxlZCkgPT09ICd0cnVlJztcbiAgfSBlbHNlIGlmIChERUZBVUxUX0NPTkZJR1MubG9nZ2luZ0VuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIENvbmZpZyByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5LCBidXQgdGhlcmUgaXMgbm8gZnByX2VuYWJsZWQgaW4gdGVtcGxhdGUuXG4gICAgLy8gVXNlIHNlY29uZGFyeSBjb25maWdzIHZhbHVlLlxuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ2dpbmdFbmFibGVkID0gREVGQVVMVF9DT05GSUdTLmxvZ2dpbmdFbmFibGVkO1xuICB9XG4gIGlmIChlbnRyaWVzLmZwcl9sb2dfc291cmNlKSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nU291cmNlID0gTnVtYmVyKGVudHJpZXMuZnByX2xvZ19zb3VyY2UpO1xuICB9IGVsc2UgaWYgKERFRkFVTFRfQ09ORklHUy5sb2dTb3VyY2UpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dTb3VyY2UgPSBERUZBVUxUX0NPTkZJR1MubG9nU291cmNlO1xuICB9XG5cbiAgaWYgKGVudHJpZXMuZnByX2xvZ19lbmRwb2ludF91cmwpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dFbmRQb2ludFVybCA9IGVudHJpZXMuZnByX2xvZ19lbmRwb2ludF91cmw7XG4gIH0gZWxzZSBpZiAoREVGQVVMVF9DT05GSUdTLmxvZ0VuZFBvaW50VXJsKSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nRW5kUG9pbnRVcmwgPSBERUZBVUxUX0NPTkZJR1MubG9nRW5kUG9pbnRVcmw7XG4gIH1cblxuICAvLyBLZXkgZnJvbSBSZW1vdGUgQ29uZmlnIGhhcyB0byBiZSBub24tZW1wdHkgc3RyaW5nLCBvdGhlcndzaWUgdXNlIGxvY2FsIHZhbHVlLlxuICBpZiAoZW50cmllcy5mcHJfbG9nX3RyYW5zcG9ydF9rZXkpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS50cmFuc3BvcnRLZXkgPSBlbnRyaWVzLmZwcl9sb2dfdHJhbnNwb3J0X2tleTtcbiAgfSBlbHNlIGlmIChERUZBVUxUX0NPTkZJR1MudHJhbnNwb3J0S2V5KSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UudHJhbnNwb3J0S2V5ID0gREVGQVVMVF9DT05GSUdTLnRyYW5zcG9ydEtleTtcbiAgfVxuXG4gIGlmIChlbnRyaWVzLmZwcl92Y19uZXR3b3JrX3JlcXVlc3Rfc2FtcGxpbmdfcmF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubmV0d29ya1JlcXVlc3RzU2FtcGxpbmdSYXRlID0gTnVtYmVyKFxuICAgICAgZW50cmllcy5mcHJfdmNfbmV0d29ya19yZXF1ZXN0X3NhbXBsaW5nX3JhdGVcbiAgICApO1xuICB9IGVsc2UgaWYgKERFRkFVTFRfQ09ORklHUy5uZXR3b3JrUmVxdWVzdHNTYW1wbGluZ1JhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLm5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZSA9XG4gICAgICBERUZBVUxUX0NPTkZJR1MubmV0d29ya1JlcXVlc3RzU2FtcGxpbmdSYXRlO1xuICB9XG4gIGlmIChlbnRyaWVzLmZwcl92Y190cmFjZV9zYW1wbGluZ19yYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS50cmFjZXNTYW1wbGluZ1JhdGUgPSBOdW1iZXIoXG4gICAgICBlbnRyaWVzLmZwcl92Y190cmFjZV9zYW1wbGluZ19yYXRlXG4gICAgKTtcbiAgfSBlbHNlIGlmIChERUZBVUxUX0NPTkZJR1MudHJhY2VzU2FtcGxpbmdSYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS50cmFjZXNTYW1wbGluZ1JhdGUgPVxuICAgICAgREVGQVVMVF9DT05GSUdTLnRyYWNlc1NhbXBsaW5nUmF0ZTtcbiAgfVxuICAvLyBTZXQgdGhlIHBlciBzZXNzaW9uIHRyYWNlIGFuZCBuZXR3b3JrIGxvZ2dpbmcgZmxhZ3MuXG4gIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ1RyYWNlQWZ0ZXJTYW1wbGluZyA9IHNob3VsZExvZ0FmdGVyU2FtcGxpbmcoXG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UudHJhY2VzU2FtcGxpbmdSYXRlXG4gICk7XG4gIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ05ldHdvcmtBZnRlclNhbXBsaW5nID0gc2hvdWxkTG9nQWZ0ZXJTYW1wbGluZyhcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5uZXR3b3JrUmVxdWVzdHNTYW1wbGluZ1JhdGVcbiAgKTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gY29uZmlnVmFsaWQoZXhwaXJ5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIE51bWJlcihleHBpcnkpID4gRGF0ZS5ub3coKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkTG9nQWZ0ZXJTYW1wbGluZyhzYW1wbGluZ1JhdGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSA8PSBzYW1wbGluZ1JhdGU7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2V0SWlkUHJvbWlzZSB9IGZyb20gJy4vaWlkX3NlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnLi9yZW1vdGVfY29uZmlnX3NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi9hcGlfc2VydmljZSc7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9wZXJmJztcblxuY29uc3QgZW51bSBJbml0aWFsaXphdGlvblN0YXR1cyB7XG4gIG5vdEluaXRpYWxpemVkID0gMSxcbiAgaW5pdGlhbGl6YXRpb25QZW5kaW5nLFxuICBpbml0aWFsaXplZFxufVxuXG5sZXQgaW5pdGlhbGl6YXRpb25TdGF0dXMgPSBJbml0aWFsaXphdGlvblN0YXR1cy5ub3RJbml0aWFsaXplZDtcblxubGV0IGluaXRpYWxpemF0aW9uUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxpemF0aW9uUHJvbWlzZShcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXJcbik6IFByb21pc2U8dm9pZD4ge1xuICBpbml0aWFsaXphdGlvblN0YXR1cyA9IEluaXRpYWxpemF0aW9uU3RhdHVzLmluaXRpYWxpemF0aW9uUGVuZGluZztcblxuICBpbml0aWFsaXphdGlvblByb21pc2UgPVxuICAgIGluaXRpYWxpemF0aW9uUHJvbWlzZSB8fCBpbml0aWFsaXplUGVyZihwZXJmb3JtYW5jZUNvbnRyb2xsZXIpO1xuXG4gIHJldHVybiBpbml0aWFsaXphdGlvblByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BlcmZJbml0aWFsaXplZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGluaXRpYWxpemF0aW9uU3RhdHVzID09PSBJbml0aWFsaXphdGlvblN0YXR1cy5pbml0aWFsaXplZDtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVBlcmYoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIGdldERvY3VtZW50UmVhZHlDb21wbGV0ZSgpXG4gICAgLnRoZW4oKCkgPT4gZ2V0SWlkUHJvbWlzZShwZXJmb3JtYW5jZUNvbnRyb2xsZXIuaW5zdGFsbGF0aW9ucykpXG4gICAgLnRoZW4oaWlkID0+IGdldENvbmZpZyhwZXJmb3JtYW5jZUNvbnRyb2xsZXIsIGlpZCkpXG4gICAgLnRoZW4oXG4gICAgICAoKSA9PiBjaGFuZ2VJbml0aWFsaXphdGlvblN0YXR1cygpLFxuICAgICAgKCkgPT4gY2hhbmdlSW5pdGlhbGl6YXRpb25TdGF0dXMoKVxuICAgICk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgd2hlbmV2ZXIgdGhlIGRvY3VtZW50IHJlYWR5c3RhdGUgaXMgY29tcGxldGUgb3JcbiAqIGltbWVkaWF0ZWx5IGlmIGl0IGlzIGNhbGxlZCBhZnRlciBwYWdlIGxvYWQgY29tcGxldGUuXG4gKi9cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVhZHlDb21wbGV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZG9jdW1lbnQgPSBBcGkuZ2V0SW5zdGFuY2UoKS5kb2N1bWVudDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJbml0aWFsaXphdGlvblN0YXR1cygpOiB2b2lkIHtcbiAgaW5pdGlhbGl6YXRpb25TdGF0dXMgPSBJbml0aWFsaXphdGlvblN0YXR1cy5pbml0aWFsaXplZDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuL3NldHRpbmdzX3NlcnZpY2UnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzJztcbmltcG9ydCB7IGNvbnNvbGVMb2dnZXIgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX2xvZ2dlcic7XG5cbmNvbnN0IERFRkFVTFRfU0VORF9JTlRFUlZBTF9NUyA9IDEwICogMTAwMDtcbmNvbnN0IElOSVRJQUxfU0VORF9USU1FX0RFTEFZX01TID0gNS41ICogMTAwMDtcbi8vIElmIGVuZCBwb2ludCBkb2VzIG5vdCB3b3JrLCB0aGUgY2FsbCB3aWxsIGJlIHRyaWVkIGZvciB0aGVzZSBtYW55IHRpbWVzLlxuY29uc3QgREVGQVVMVF9SRU1BSU5JTkdfVFJJRVMgPSAzO1xuY29uc3QgTUFYX0VWRU5UX0NPVU5UX1BFUl9SRVFVRVNUID0gMTAwMDtcbmxldCByZW1haW5pbmdUcmllcyA9IERFRkFVTFRfUkVNQUlOSU5HX1RSSUVTO1xuXG5pbnRlcmZhY2UgTG9nUmVzcG9uc2VEZXRhaWxzIHtcbiAgcmVzcG9uc2VBY3Rpb24/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBCYXRjaEV2ZW50IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBldmVudFRpbWU6IG51bWJlcjtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4vLyBDQy9GbCBhY2NlcHRlZCBsb2cgZm9ybWF0LlxuaW50ZXJmYWNlIFRyYW5zcG9ydEJhdGNoTG9nRm9ybWF0IHtcbiAgcmVxdWVzdF90aW1lX21zOiBzdHJpbmc7XG4gIGNsaWVudF9pbmZvOiBDbGllbnRJbmZvO1xuICBsb2dfc291cmNlOiBudW1iZXI7XG4gIGxvZ19ldmVudDogTG9nW107XG59XG5cbmludGVyZmFjZSBDbGllbnRJbmZvIHtcbiAgY2xpZW50X3R5cGU6IG51bWJlcjtcbiAganNfY2xpZW50X2luZm86IHt9O1xufVxuXG5pbnRlcmZhY2UgTG9nIHtcbiAgc291cmNlX2V4dGVuc2lvbl9qc29uX3Byb3RvMzogc3RyaW5nO1xuICBldmVudF90aW1lX21zOiBzdHJpbmc7XG59XG4vKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xuXG5sZXQgcXVldWU6IEJhdGNoRXZlbnRbXSA9IFtdO1xuXG5sZXQgaXNUcmFuc3BvcnRTZXR1cDogYm9vbGVhbiA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBUcmFuc3BvcnRTZXJ2aWNlKCk6IHZvaWQge1xuICBpZiAoIWlzVHJhbnNwb3J0U2V0dXApIHtcbiAgICBwcm9jZXNzUXVldWUoSU5JVElBTF9TRU5EX1RJTUVfREVMQVlfTVMpO1xuICAgIGlzVHJhbnNwb3J0U2V0dXAgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVXRpbGl6ZWQgYnkgdGVzdGluZyB0byBjbGVhbiB1cCBtZXNzYWdlIHF1ZXVlIGFuZCB1bi1pbml0aWFsaXplIHRyYW5zcG9ydCBzZXJ2aWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRUcmFuc3BvcnRTZXJ2aWNlKCk6IHZvaWQge1xuICBpc1RyYW5zcG9ydFNldHVwID0gZmFsc2U7XG4gIHF1ZXVlID0gW107XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NRdWV1ZSh0aW1lT2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gcmVtYWluaW5nVHJpZXMgbGVmdCwgc3RvcCByZXRyeWluZy5cbiAgICBpZiAocmVtYWluaW5nVHJpZXMgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZXZlbnRzIHRvIHByb2Nlc3MsIHdhaXQgZm9yIERFRkFVTFRfU0VORF9JTlRFUlZBTF9NUyBhbmQgdHJ5IGFnYWluLlxuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc1F1ZXVlKERFRkFVTFRfU0VORF9JTlRFUlZBTF9NUyk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hRdWV1ZUV2ZW50cygpO1xuICB9LCB0aW1lT2Zmc2V0KTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hRdWV1ZUV2ZW50cygpOiB2b2lkIHtcbiAgLy8gRXh0cmFjdCBldmVudHMgdXAgdG8gdGhlIG1heGltdW0gY2FwIG9mIHNpbmdsZSBsb2dSZXF1ZXN0IGZyb20gdG9wIG9mIFwib2ZmaWNpYWwgcXVldWVcIi5cbiAgLy8gVGhlIHN0YWdlZCBldmVudHMgd2lsbCBiZSB1c2VkIGZvciBjdXJyZW50IGxvZ1JlcXVlc3QgYXR0ZW1wdCwgcmVtYWluaW5nIGV2ZW50cyB3aWxsIGJlIGtlcHRcbiAgLy8gZm9yIG5leHQgYXR0ZW1wdC5cbiAgY29uc3Qgc3RhZ2VkID0gcXVldWUuc3BsaWNlKDAsIE1BWF9FVkVOVF9DT1VOVF9QRVJfUkVRVUVTVCk7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIC8vIFdlIHdpbGwgcGFzcyB0aGUgSlNPTiBzZXJpYWxpemVkIGV2ZW50IHRvIHRoZSBiYWNrZW5kLlxuICBjb25zdCBsb2dfZXZlbnQ6IExvZ1tdID0gc3RhZ2VkLm1hcChldnQgPT4gKHtcbiAgICBzb3VyY2VfZXh0ZW5zaW9uX2pzb25fcHJvdG8zOiBldnQubWVzc2FnZSxcbiAgICBldmVudF90aW1lX21zOiBTdHJpbmcoZXZ0LmV2ZW50VGltZSlcbiAgfSkpO1xuXG4gIGNvbnN0IGRhdGE6IFRyYW5zcG9ydEJhdGNoTG9nRm9ybWF0ID0ge1xuICAgIHJlcXVlc3RfdGltZV9tczogU3RyaW5nKERhdGUubm93KCkpLFxuICAgIGNsaWVudF9pbmZvOiB7XG4gICAgICBjbGllbnRfdHlwZTogMSwgLy8gMSBpcyBKU1xuICAgICAganNfY2xpZW50X2luZm86IHt9XG4gICAgfSxcbiAgICBsb2dfc291cmNlOiBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5sb2dTb3VyY2UsXG4gICAgbG9nX2V2ZW50XG4gIH07XG4gIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG5cbiAgc2VuZEV2ZW50c1RvRmwoZGF0YSwgc3RhZ2VkKS5jYXRjaCgoKSA9PiB7XG4gICAgLy8gSWYgdGhlIHJlcXVlc3QgZmFpbHMgZm9yIHNvbWUgcmVhc29uLCBhZGQgdGhlIGV2ZW50cyB0aGF0IHdlcmUgYXR0ZW1wdGVkXG4gICAgLy8gYmFjayB0byB0aGUgcHJpbWFyeSBxdWV1ZSB0byByZXRyeSBsYXRlci5cbiAgICBxdWV1ZSA9IFsuLi5zdGFnZWQsIC4uLnF1ZXVlXTtcbiAgICByZW1haW5pbmdUcmllcy0tO1xuICAgIGNvbnNvbGVMb2dnZXIuaW5mbyhgVHJpZXMgbGVmdDogJHtyZW1haW5pbmdUcmllc30uYCk7XG4gICAgcHJvY2Vzc1F1ZXVlKERFRkFVTFRfU0VORF9JTlRFUlZBTF9NUyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZW5kRXZlbnRzVG9GbChcbiAgZGF0YTogVHJhbnNwb3J0QmF0Y2hMb2dGb3JtYXQsXG4gIHN0YWdlZDogQmF0Y2hFdmVudFtdXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIHBvc3RUb0ZsRW5kcG9pbnQoZGF0YSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgY29uc29sZUxvZ2dlci5pbmZvKCdDYWxsIHRvIEZpcmViYXNlIGJhY2tlbmQgZmFpbGVkLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgLy8gRmluZCB0aGUgbmV4dCBjYWxsIHdhaXQgdGltZSBmcm9tIHRoZSByZXNwb25zZS5cbiAgICAgIGNvbnN0IHRyYW5zcG9ydFdhaXQgPSBOdW1iZXIocmVzLm5leHRSZXF1ZXN0V2FpdE1pbGxpcyk7XG4gICAgICBsZXQgcmVxdWVzdE9mZnNldCA9IERFRkFVTFRfU0VORF9JTlRFUlZBTF9NUztcbiAgICAgIGlmICghaXNOYU4odHJhbnNwb3J0V2FpdCkpIHtcbiAgICAgICAgcmVxdWVzdE9mZnNldCA9IE1hdGgubWF4KHRyYW5zcG9ydFdhaXQsIHJlcXVlc3RPZmZzZXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWxldGUgcmVxdWVzdCBpZiByZXNwb25zZSBpbmNsdWRlIFJFU1BPTlNFX0FDVElPTl9VTktOT1dOIG9yIERFTEVURV9SRVFVRVNUIGFjdGlvbi5cbiAgICAgIC8vIE90aGVyd2lzZSwgcmV0cnkgcmVxdWVzdCB1c2luZyBub3JtYWwgc2NoZWR1bGluZyBpZiByZXNwb25zZSBpbmNsdWRlIFJFVFJZX1JFUVVFU1RfTEFURVIuXG4gICAgICBjb25zdCBsb2dSZXNwb25zZURldGFpbHM6IExvZ1Jlc3BvbnNlRGV0YWlsc1tdID0gcmVzLmxvZ1Jlc3BvbnNlRGV0YWlscztcbiAgICAgIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheShsb2dSZXNwb25zZURldGFpbHMpICYmXG4gICAgICAgIGxvZ1Jlc3BvbnNlRGV0YWlscy5sZW5ndGggPiAwICYmXG4gICAgICAgIGxvZ1Jlc3BvbnNlRGV0YWlsc1swXS5yZXNwb25zZUFjdGlvbiA9PT0gJ1JFVFJZX1JFUVVFU1RfTEFURVInXG4gICAgICApIHtcbiAgICAgICAgcXVldWUgPSBbLi4uc3RhZ2VkLCAuLi5xdWV1ZV07XG4gICAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbyhgUmV0cnkgdHJhbnNwb3J0IHJlcXVlc3QgbGF0ZXIuYCk7XG4gICAgICB9XG5cbiAgICAgIHJlbWFpbmluZ1RyaWVzID0gREVGQVVMVF9SRU1BSU5JTkdfVFJJRVM7XG4gICAgICAvLyBTY2hlZHVsZSB0aGUgbmV4dCBwcm9jZXNzLlxuICAgICAgcHJvY2Vzc1F1ZXVlKHJlcXVlc3RPZmZzZXQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwb3N0VG9GbEVuZHBvaW50KGRhdGE6IFRyYW5zcG9ydEJhdGNoTG9nRm9ybWF0KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBjb25zdCBmbFRyYW5zcG9ydEZ1bGxVcmwgPVxuICAgIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmdldEZsVHJhbnNwb3J0RnVsbFVybCgpO1xuICByZXR1cm4gZmV0Y2goZmxUcmFuc3BvcnRGdWxsVXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvUXVldWUoZXZ0OiBCYXRjaEV2ZW50KTogdm9pZCB7XG4gIGlmICghZXZ0LmV2ZW50VGltZSB8fCAhZXZ0Lm1lc3NhZ2UpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuSU5WQUxJRF9DQ19MT0cpO1xuICB9XG4gIC8vIEFkZCB0aGUgbmV3IGV2ZW50IHRvIHRoZSBxdWV1ZS5cbiAgcXVldWUgPSBbLi4ucXVldWUsIGV2dF07XG59XG5cbi8qKiBMb2cgaGFuZGxlciBmb3IgY2Mgc2VydmljZSB0byBzZW5kIHRoZSBwZXJmb3JtYW5jZSBsb2dzIHRvIHRoZSBzZXJ2ZXIuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3J0SGFuZGxlcihcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgc2VyaWFsaXplcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBzdHJpbmdcbik6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gc2VyaWFsaXplciguLi5hcmdzKTtcbiAgICBhZGRUb1F1ZXVlKHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBldmVudFRpbWU6IERhdGUubm93KClcbiAgICB9KTtcbiAgfTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBnZXRJaWQgfSBmcm9tICcuL2lpZF9zZXJ2aWNlJztcbmltcG9ydCB7IE5ldHdvcmtSZXF1ZXN0IH0gZnJvbSAnLi4vcmVzb3VyY2VzL25ldHdvcmtfcmVxdWVzdCc7XG5pbXBvcnQgeyBUcmFjZSB9IGZyb20gJy4uL3Jlc291cmNlcy90cmFjZSc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuL2FwaV9zZXJ2aWNlJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4vc2V0dGluZ3Nfc2VydmljZSc7XG5pbXBvcnQge1xuICBnZXRTZXJ2aWNlV29ya2VyU3RhdHVzLFxuICBnZXRWaXNpYmlsaXR5U3RhdGUsXG4gIFZpc2liaWxpdHlTdGF0ZSxcbiAgZ2V0RWZmZWN0aXZlQ29ubmVjdGlvblR5cGVcbn0gZnJvbSAnLi4vdXRpbHMvYXR0cmlidXRlc191dGlscyc7XG5pbXBvcnQge1xuICBpc1BlcmZJbml0aWFsaXplZCxcbiAgZ2V0SW5pdGlhbGl6YXRpb25Qcm9taXNlXG59IGZyb20gJy4vaW5pdGlhbGl6YXRpb25fc2VydmljZSc7XG5pbXBvcnQgeyB0cmFuc3BvcnRIYW5kbGVyIH0gZnJvbSAnLi90cmFuc3BvcnRfc2VydmljZSc7XG5pbXBvcnQgeyBTREtfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcCB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0QXBwSWQgfSBmcm9tICcuLi91dGlscy9hcHBfdXRpbHMnO1xuXG5jb25zdCBlbnVtIFJlc291cmNlVHlwZSB7XG4gIE5ldHdvcmtSZXF1ZXN0LFxuICBUcmFjZVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmludGVyZmFjZSBBcHBsaWNhdGlvbkluZm8ge1xuICBnb29nbGVfYXBwX2lkOiBzdHJpbmc7XG4gIGFwcF9pbnN0YW5jZV9pZD86IHN0cmluZztcbiAgd2ViX2FwcF9pbmZvOiBXZWJBcHBJbmZvO1xuICBhcHBsaWNhdGlvbl9wcm9jZXNzX3N0YXRlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBXZWJBcHBJbmZvIHtcbiAgc2RrX3ZlcnNpb246IHN0cmluZztcbiAgcGFnZV91cmw6IHN0cmluZztcbiAgc2VydmljZV93b3JrZXJfc3RhdHVzOiBudW1iZXI7XG4gIHZpc2liaWxpdHlfc3RhdGU6IG51bWJlcjtcbiAgZWZmZWN0aXZlX2Nvbm5lY3Rpb25fdHlwZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUGVyZk5ldHdvcmtMb2cge1xuICBhcHBsaWNhdGlvbl9pbmZvOiBBcHBsaWNhdGlvbkluZm87XG4gIG5ldHdvcmtfcmVxdWVzdF9tZXRyaWM6IE5ldHdvcmtSZXF1ZXN0TWV0cmljO1xufVxuXG5pbnRlcmZhY2UgUGVyZlRyYWNlTG9nIHtcbiAgYXBwbGljYXRpb25faW5mbzogQXBwbGljYXRpb25JbmZvO1xuICB0cmFjZV9tZXRyaWM6IFRyYWNlTWV0cmljO1xufVxuXG5pbnRlcmZhY2UgTmV0d29ya1JlcXVlc3RNZXRyaWMge1xuICB1cmw6IHN0cmluZztcbiAgaHR0cF9tZXRob2Q6IG51bWJlcjtcbiAgaHR0cF9yZXNwb25zZV9jb2RlOiBudW1iZXI7XG4gIHJlc3BvbnNlX3BheWxvYWRfYnl0ZXM/OiBudW1iZXI7XG4gIGNsaWVudF9zdGFydF90aW1lX3VzPzogbnVtYmVyO1xuICB0aW1lX3RvX3Jlc3BvbnNlX2luaXRpYXRlZF91cz86IG51bWJlcjtcbiAgdGltZV90b19yZXNwb25zZV9jb21wbGV0ZWRfdXM/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBUcmFjZU1ldHJpYyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNfYXV0bzogYm9vbGVhbjtcbiAgY2xpZW50X3N0YXJ0X3RpbWVfdXM6IG51bWJlcjtcbiAgZHVyYXRpb25fdXM6IG51bWJlcjtcbiAgY291bnRlcnM/OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9O1xuICBjdXN0b21fYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbi8qIGVzbGludC1lbmJsZSBjYW1lbGNhc2UgKi9cblxubGV0IGxvZ2dlcjogKFxuICByZXNvdXJjZTogTmV0d29ya1JlcXVlc3QgfCBUcmFjZSxcbiAgcmVzb3VyY2VUeXBlOiBSZXNvdXJjZVR5cGVcbikgPT4gdm9pZCB8IHVuZGVmaW5lZDtcbi8vIFRoaXMgbWV0aG9kIGlzIG5vdCBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemF0aW9uLlxuZnVuY3Rpb24gc2VuZExvZyhcbiAgcmVzb3VyY2U6IE5ldHdvcmtSZXF1ZXN0IHwgVHJhY2UsXG4gIHJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlXG4pOiB2b2lkIHtcbiAgaWYgKCFsb2dnZXIpIHtcbiAgICBsb2dnZXIgPSB0cmFuc3BvcnRIYW5kbGVyKHNlcmlhbGl6ZXIpO1xuICB9XG4gIGxvZ2dlcihyZXNvdXJjZSwgcmVzb3VyY2VUeXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1RyYWNlKHRyYWNlOiBUcmFjZSk6IHZvaWQge1xuICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgLy8gRG8gbm90IGxvZyBpZiB0cmFjZSBpcyBhdXRvIGdlbmVyYXRlZCBhbmQgaW5zdHJ1bWVudGF0aW9uIGlzIGRpc2FibGVkLlxuICBpZiAoIXNldHRpbmdzU2VydmljZS5pbnN0cnVtZW50YXRpb25FbmFibGVkICYmIHRyYWNlLmlzQXV0bykge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBEbyBub3QgbG9nIGlmIHRyYWNlIGlzIGN1c3RvbSBhbmQgZGF0YSBjb2xsZWN0aW9uIGlzIGRpc2FibGVkLlxuICBpZiAoIXNldHRpbmdzU2VydmljZS5kYXRhQ29sbGVjdGlvbkVuYWJsZWQgJiYgIXRyYWNlLmlzQXV0bykge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBEbyBub3QgbG9nIGlmIHJlcXVpcmVkIGFwaXMgYXJlIG5vdCBhdmFpbGFibGUuXG4gIGlmICghQXBpLmdldEluc3RhbmNlKCkucmVxdWlyZWRBcGlzQXZhaWxhYmxlKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBPbmx5IGxvZyB0aGUgcGFnZSBsb2FkIGF1dG8gdHJhY2VzIGlmIHBhZ2UgaXMgdmlzaWJsZS5cbiAgaWYgKHRyYWNlLmlzQXV0byAmJiBnZXRWaXNpYmlsaXR5U3RhdGUoKSAhPT0gVmlzaWJpbGl0eVN0YXRlLlZJU0lCTEUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNQZXJmSW5pdGlhbGl6ZWQoKSkge1xuICAgIHNlbmRUcmFjZUxvZyh0cmFjZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ3VzdG9tIHRyYWNlcyBjYW4gYmUgdXNlZCBiZWZvcmUgdGhlIGluaXRpYWxpemF0aW9uIGJ1dCBsb2dnaW5nXG4gICAgLy8gc2hvdWxkIHdhaXQgdW50aWwgYWZ0ZXIuXG4gICAgZ2V0SW5pdGlhbGl6YXRpb25Qcm9taXNlKHRyYWNlLnBlcmZvcm1hbmNlQ29udHJvbGxlcikudGhlbihcbiAgICAgICgpID0+IHNlbmRUcmFjZUxvZyh0cmFjZSksXG4gICAgICAoKSA9PiBzZW5kVHJhY2VMb2codHJhY2UpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kVHJhY2VMb2codHJhY2U6IFRyYWNlKTogdm9pZCB7XG4gIGlmICghZ2V0SWlkKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgaWYgKFxuICAgICFzZXR0aW5nc1NlcnZpY2UubG9nZ2luZ0VuYWJsZWQgfHxcbiAgICAhc2V0dGluZ3NTZXJ2aWNlLmxvZ1RyYWNlQWZ0ZXJTYW1wbGluZ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZXRUaW1lb3V0KCgpID0+IHNlbmRMb2codHJhY2UsIFJlc291cmNlVHlwZS5UcmFjZSksIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nTmV0d29ya1JlcXVlc3QobmV0d29ya1JlcXVlc3Q6IE5ldHdvcmtSZXF1ZXN0KTogdm9pZCB7XG4gIGNvbnN0IHNldHRpbmdzU2VydmljZSA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAvLyBEbyBub3QgbG9nIG5ldHdvcmsgcmVxdWVzdHMgaWYgaW5zdHJ1bWVudGF0aW9uIGlzIGRpc2FibGVkLlxuICBpZiAoIXNldHRpbmdzU2VydmljZS5pbnN0cnVtZW50YXRpb25FbmFibGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRG8gbm90IGxvZyB0aGUganMgc2RrJ3MgY2FsbCB0byB0cmFuc3BvcnQgc2VydmljZSBkb21haW4gdG8gYXZvaWQgdW5uZWNlc3NhcnkgY3ljbGUuXG4gIC8vIE5lZWQgdG8gYmxhY2tsaXN0IGJvdGggb2xkIGFuZCBuZXcgZW5kcG9pbnRzIHRvIGF2b2lkIG1pZ3JhdGlvbiBnYXAuXG4gIGNvbnN0IG5ldHdvcmtSZXF1ZXN0VXJsID0gbmV0d29ya1JlcXVlc3QudXJsO1xuXG4gIC8vIEJsYWNrbGlzdCBvbGQgbG9nIGVuZHBvaW50IGFuZCBuZXcgdHJhbnNwb3J0IGVuZHBvaW50LlxuICAvLyBCZWNhdXNlIFBlcmZvcm1hbmNlIFNESyBkb2Vzbid0IGluc3RydW1lbnQgcmVxdWVzdHMgc2VudCBmcm9tIFNESyBpdHNlbGYuXG4gIGNvbnN0IGxvZ0VuZHBvaW50VXJsID0gc2V0dGluZ3NTZXJ2aWNlLmxvZ0VuZFBvaW50VXJsLnNwbGl0KCc/JylbMF07XG4gIGNvbnN0IGZsRW5kcG9pbnRVcmwgPSBzZXR0aW5nc1NlcnZpY2UuZmxUcmFuc3BvcnRFbmRwb2ludFVybC5zcGxpdCgnPycpWzBdO1xuICBpZiAoXG4gICAgbmV0d29ya1JlcXVlc3RVcmwgPT09IGxvZ0VuZHBvaW50VXJsIHx8XG4gICAgbmV0d29ya1JlcXVlc3RVcmwgPT09IGZsRW5kcG9pbnRVcmxcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKFxuICAgICFzZXR0aW5nc1NlcnZpY2UubG9nZ2luZ0VuYWJsZWQgfHxcbiAgICAhc2V0dGluZ3NTZXJ2aWNlLmxvZ05ldHdvcmtBZnRlclNhbXBsaW5nXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNldFRpbWVvdXQoKCkgPT4gc2VuZExvZyhuZXR3b3JrUmVxdWVzdCwgUmVzb3VyY2VUeXBlLk5ldHdvcmtSZXF1ZXN0KSwgMCk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZXIoXG4gIHJlc291cmNlOiBOZXR3b3JrUmVxdWVzdCB8IFRyYWNlLFxuICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZVxuKTogc3RyaW5nIHtcbiAgaWYgKHJlc291cmNlVHlwZSA9PT0gUmVzb3VyY2VUeXBlLk5ldHdvcmtSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZU5ldHdvcmtSZXF1ZXN0KHJlc291cmNlIGFzIE5ldHdvcmtSZXF1ZXN0KTtcbiAgfVxuICByZXR1cm4gc2VyaWFsaXplVHJhY2UocmVzb3VyY2UgYXMgVHJhY2UpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVOZXR3b3JrUmVxdWVzdChuZXR3b3JrUmVxdWVzdDogTmV0d29ya1JlcXVlc3QpOiBzdHJpbmcge1xuICBjb25zdCBuZXR3b3JrUmVxdWVzdE1ldHJpYzogTmV0d29ya1JlcXVlc3RNZXRyaWMgPSB7XG4gICAgdXJsOiBuZXR3b3JrUmVxdWVzdC51cmwsXG4gICAgaHR0cF9tZXRob2Q6IG5ldHdvcmtSZXF1ZXN0Lmh0dHBNZXRob2QgfHwgMCxcbiAgICBodHRwX3Jlc3BvbnNlX2NvZGU6IDIwMCxcbiAgICByZXNwb25zZV9wYXlsb2FkX2J5dGVzOiBuZXR3b3JrUmVxdWVzdC5yZXNwb25zZVBheWxvYWRCeXRlcyxcbiAgICBjbGllbnRfc3RhcnRfdGltZV91czogbmV0d29ya1JlcXVlc3Quc3RhcnRUaW1lVXMsXG4gICAgdGltZV90b19yZXNwb25zZV9pbml0aWF0ZWRfdXM6IG5ldHdvcmtSZXF1ZXN0LnRpbWVUb1Jlc3BvbnNlSW5pdGlhdGVkVXMsXG4gICAgdGltZV90b19yZXNwb25zZV9jb21wbGV0ZWRfdXM6IG5ldHdvcmtSZXF1ZXN0LnRpbWVUb1Jlc3BvbnNlQ29tcGxldGVkVXNcbiAgfTtcbiAgY29uc3QgcGVyZk1ldHJpYzogUGVyZk5ldHdvcmtMb2cgPSB7XG4gICAgYXBwbGljYXRpb25faW5mbzogZ2V0QXBwbGljYXRpb25JbmZvKFxuICAgICAgbmV0d29ya1JlcXVlc3QucGVyZm9ybWFuY2VDb250cm9sbGVyLmFwcFxuICAgICksXG4gICAgbmV0d29ya19yZXF1ZXN0X21ldHJpYzogbmV0d29ya1JlcXVlc3RNZXRyaWNcbiAgfTtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBlcmZNZXRyaWMpO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVUcmFjZSh0cmFjZTogVHJhY2UpOiBzdHJpbmcge1xuICBjb25zdCB0cmFjZU1ldHJpYzogVHJhY2VNZXRyaWMgPSB7XG4gICAgbmFtZTogdHJhY2UubmFtZSxcbiAgICBpc19hdXRvOiB0cmFjZS5pc0F1dG8sXG4gICAgY2xpZW50X3N0YXJ0X3RpbWVfdXM6IHRyYWNlLnN0YXJ0VGltZVVzLFxuICAgIGR1cmF0aW9uX3VzOiB0cmFjZS5kdXJhdGlvblVzXG4gIH07XG5cbiAgaWYgKE9iamVjdC5rZXlzKHRyYWNlLmNvdW50ZXJzKS5sZW5ndGggIT09IDApIHtcbiAgICB0cmFjZU1ldHJpYy5jb3VudGVycyA9IHRyYWNlLmNvdW50ZXJzO1xuICB9XG4gIGNvbnN0IGN1c3RvbUF0dHJpYnV0ZXMgPSB0cmFjZS5nZXRBdHRyaWJ1dGVzKCk7XG4gIGlmIChPYmplY3Qua2V5cyhjdXN0b21BdHRyaWJ1dGVzKS5sZW5ndGggIT09IDApIHtcbiAgICB0cmFjZU1ldHJpYy5jdXN0b21fYXR0cmlidXRlcyA9IGN1c3RvbUF0dHJpYnV0ZXM7XG4gIH1cblxuICBjb25zdCBwZXJmTWV0cmljOiBQZXJmVHJhY2VMb2cgPSB7XG4gICAgYXBwbGljYXRpb25faW5mbzogZ2V0QXBwbGljYXRpb25JbmZvKHRyYWNlLnBlcmZvcm1hbmNlQ29udHJvbGxlci5hcHApLFxuICAgIHRyYWNlX21ldHJpYzogdHJhY2VNZXRyaWNcbiAgfTtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBlcmZNZXRyaWMpO1xufVxuXG5mdW5jdGlvbiBnZXRBcHBsaWNhdGlvbkluZm8oZmlyZWJhc2VBcHA6IEZpcmViYXNlQXBwKTogQXBwbGljYXRpb25JbmZvIHtcbiAgcmV0dXJuIHtcbiAgICBnb29nbGVfYXBwX2lkOiBnZXRBcHBJZChmaXJlYmFzZUFwcCksXG4gICAgYXBwX2luc3RhbmNlX2lkOiBnZXRJaWQoKSxcbiAgICB3ZWJfYXBwX2luZm86IHtcbiAgICAgIHNka192ZXJzaW9uOiBTREtfVkVSU0lPTixcbiAgICAgIHBhZ2VfdXJsOiBBcGkuZ2V0SW5zdGFuY2UoKS5nZXRVcmwoKSxcbiAgICAgIHNlcnZpY2Vfd29ya2VyX3N0YXR1czogZ2V0U2VydmljZVdvcmtlclN0YXR1cygpLFxuICAgICAgdmlzaWJpbGl0eV9zdGF0ZTogZ2V0VmlzaWJpbGl0eVN0YXRlKCksXG4gICAgICBlZmZlY3RpdmVfY29ubmVjdGlvbl90eXBlOiBnZXRFZmZlY3RpdmVDb25uZWN0aW9uVHlwZSgpXG4gICAgfSxcbiAgICBhcHBsaWNhdGlvbl9wcm9jZXNzX3N0YXRlOiAwXG4gIH07XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgRklSU1RfUEFJTlRfQ09VTlRFUl9OQU1FLFxuICBGSVJTVF9DT05URU5URlVMX1BBSU5UX0NPVU5URVJfTkFNRSxcbiAgRklSU1RfSU5QVVRfREVMQVlfQ09VTlRFUl9OQU1FLFxuICBPT0JfVFJBQ0VfUEFHRV9MT0FEX1BSRUZJWFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29uc29sZUxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfbG9nZ2VyJztcblxuY29uc3QgTUFYX01FVFJJQ19OQU1FX0xFTkdUSCA9IDEwMDtcbmNvbnN0IFJFU0VSVkVEX0FVVE9fUFJFRklYID0gJ18nO1xuY29uc3Qgb29iTWV0cmljcyA9IFtcbiAgRklSU1RfUEFJTlRfQ09VTlRFUl9OQU1FLFxuICBGSVJTVF9DT05URU5URlVMX1BBSU5UX0NPVU5URVJfTkFNRSxcbiAgRklSU1RfSU5QVVRfREVMQVlfQ09VTlRFUl9OQU1FXG5dO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbWV0cmljIGlzIGN1c3RvbSBhbmQgZG9lcyBub3Qgc3RhcnQgd2l0aCByZXNlcnZlZCBwcmVmaXgsIG9yIGlmXG4gKiB0aGUgbWV0cmljIGlzIG9uZSBvZiBvdXQgb2YgdGhlIGJveCBwYWdlIGxvYWQgdHJhY2UgbWV0cmljcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRNZXRyaWNOYW1lKG5hbWU6IHN0cmluZywgdHJhY2VOYW1lPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChuYW1lLmxlbmd0aCA9PT0gMCB8fCBuYW1lLmxlbmd0aCA+IE1BWF9NRVRSSUNfTkFNRV9MRU5HVEgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAodHJhY2VOYW1lICYmXG4gICAgICB0cmFjZU5hbWUuc3RhcnRzV2l0aChPT0JfVFJBQ0VfUEFHRV9MT0FEX1BSRUZJWCkgJiZcbiAgICAgIG9vYk1ldHJpY3MuaW5kZXhPZihuYW1lKSA+IC0xKSB8fFxuICAgICFuYW1lLnN0YXJ0c1dpdGgoUkVTRVJWRURfQVVUT19QUkVGSVgpXG4gICk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHByb3ZpZGVkIHZhbHVlIHRvIGFuIGludGVnZXIgdmFsdWUgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWV0cmljLlxuICogQHBhcmFtIHByb3ZpZGVkVmFsdWUgUHJvdmlkZWQgbnVtYmVyIHZhbHVlIG9mIHRoZSBtZXRyaWMgdGhhdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiBAcmV0dXJucyBDb252ZXJ0ZWQgaW50ZWdlciBudW1iZXIgdG8gYmUgc2V0IGZvciB0aGUgbWV0cmljLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydE1ldHJpY1ZhbHVlVG9JbnRlZ2VyKHByb3ZpZGVkVmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHZhbHVlQXNJbnRlZ2VyOiBudW1iZXIgPSBNYXRoLmZsb29yKHByb3ZpZGVkVmFsdWUpO1xuICBpZiAodmFsdWVBc0ludGVnZXIgPCBwcm92aWRlZFZhbHVlKSB7XG4gICAgY29uc29sZUxvZ2dlci5pbmZvKFxuICAgICAgYE1ldHJpYyB2YWx1ZSBzaG91bGQgYmUgYW4gSW50ZWdlciwgc2V0dGluZyB0aGUgdmFsdWUgYXMgOiAke3ZhbHVlQXNJbnRlZ2VyfS5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gdmFsdWVBc0ludGVnZXI7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgVFJBQ0VfU1RBUlRfTUFSS19QUkVGSVgsXG4gIFRSQUNFX1NUT1BfTUFSS19QUkVGSVgsXG4gIFRSQUNFX01FQVNVUkVfUFJFRklYLFxuICBPT0JfVFJBQ0VfUEFHRV9MT0FEX1BSRUZJWCxcbiAgRklSU1RfUEFJTlRfQ09VTlRFUl9OQU1FLFxuICBGSVJTVF9DT05URU5URlVMX1BBSU5UX0NPVU5URVJfTkFNRSxcbiAgRklSU1RfSU5QVVRfREVMQVlfQ09VTlRFUl9OQU1FXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlfc2VydmljZSc7XG5pbXBvcnQgeyBsb2dUcmFjZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BlcmZfbG9nZ2VyJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycyc7XG5pbXBvcnQge1xuICBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZSxcbiAgaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZVZhbHVlXG59IGZyb20gJy4uL3V0aWxzL2F0dHJpYnV0ZXNfdXRpbHMnO1xuaW1wb3J0IHtcbiAgaXNWYWxpZE1ldHJpY05hbWUsXG4gIGNvbnZlcnRNZXRyaWNWYWx1ZVRvSW50ZWdlclxufSBmcm9tICcuLi91dGlscy9tZXRyaWNfdXRpbHMnO1xuaW1wb3J0IHsgUGVyZm9ybWFuY2VUcmFjZSB9IGZyb20gJy4uL3B1YmxpY190eXBlcyc7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9wZXJmJztcblxuY29uc3QgZW51bSBUcmFjZVN0YXRlIHtcbiAgVU5JTklUSUFMSVpFRCA9IDEsXG4gIFJVTk5JTkcsXG4gIFRFUk1JTkFURURcbn1cblxuZXhwb3J0IGNsYXNzIFRyYWNlIGltcGxlbWVudHMgUGVyZm9ybWFuY2VUcmFjZSB7XG4gIHByaXZhdGUgc3RhdGU6IFRyYWNlU3RhdGUgPSBUcmFjZVN0YXRlLlVOSU5JVElBTElaRUQ7XG4gIHN0YXJ0VGltZVVzITogbnVtYmVyO1xuICBkdXJhdGlvblVzITogbnVtYmVyO1xuICBwcml2YXRlIGN1c3RvbUF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgY291bnRlcnM6IHsgW2NvdW50ZXJOYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICBwcml2YXRlIGFwaSA9IEFwaS5nZXRJbnN0YW5jZSgpO1xuICBwcml2YXRlIHJhbmRvbUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIHByaXZhdGUgdHJhY2VTdGFydE1hcmshOiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhY2VTdG9wTWFyayE6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFjZU1lYXN1cmUhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBwZXJmb3JtYW5jZUNvbnRyb2xsZXIgVGhlIHBlcmZvcm1hbmNlIGNvbnRyb2xsZXIgcnVubmluZy5cbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHRyYWNlLlxuICAgKiBAcGFyYW0gaXNBdXRvIElmIHRoZSB0cmFjZSBpcyBhdXRvLWluc3RydW1lbnRlZC5cbiAgICogQHBhcmFtIHRyYWNlTWVhc3VyZU5hbWUgVGhlIG5hbWUgb2YgdGhlIG1lYXN1cmUgbWFya2VyIGluIHVzZXIgdGltaW5nIHNwZWNpZmljYXRpb24uIFRoaXMgZmllbGRcbiAgICogaXMgb25seSBzZXQgd2hlbiB0aGUgdHJhY2UgaXMgYnVpbHQgZm9yIGxvZ2dpbmcgd2hlbiB0aGUgdXNlciBkaXJlY3RseSB1c2VzIHRoZSB1c2VyIHRpbWluZ1xuICAgKiBhcGkgKHBlcmZvcm1hbmNlLm1hcmsgYW5kIHBlcmZvcm1hbmNlLm1lYXN1cmUpLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICAgIHJlYWRvbmx5IGlzQXV0byA9IGZhbHNlLFxuICAgIHRyYWNlTWVhc3VyZU5hbWU/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmlzQXV0bykge1xuICAgICAgdGhpcy50cmFjZVN0YXJ0TWFyayA9IGAke1RSQUNFX1NUQVJUX01BUktfUFJFRklYfS0ke3RoaXMucmFuZG9tSWR9LSR7dGhpcy5uYW1lfWA7XG4gICAgICB0aGlzLnRyYWNlU3RvcE1hcmsgPSBgJHtUUkFDRV9TVE9QX01BUktfUFJFRklYfS0ke3RoaXMucmFuZG9tSWR9LSR7dGhpcy5uYW1lfWA7XG4gICAgICB0aGlzLnRyYWNlTWVhc3VyZSA9XG4gICAgICAgIHRyYWNlTWVhc3VyZU5hbWUgfHxcbiAgICAgICAgYCR7VFJBQ0VfTUVBU1VSRV9QUkVGSVh9LSR7dGhpcy5yYW5kb21JZH0tJHt0aGlzLm5hbWV9YDtcblxuICAgICAgaWYgKHRyYWNlTWVhc3VyZU5hbWUpIHtcbiAgICAgICAgLy8gRm9yIHRoZSBjYXNlIG9mIGRpcmVjdCB1c2VyIHRpbWluZyB0cmFjZXMsIG5vIHN0YXJ0IHN0b3Agd2lsbCBoYXBwZW4uIFRoZSBtZWFzdXJlIG9iamVjdFxuICAgICAgICAvLyBpcyBhbHJlYWR5IGF2YWlsYWJsZS5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUcmFjZU1ldHJpY3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgdHJhY2UuIFRoZSBtZWFzdXJlbWVudCBvZiB0aGUgZHVyYXRpb24gc3RhcnRzIGF0IHRoaXMgcG9pbnQuXG4gICAqL1xuICBzdGFydCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gVHJhY2VTdGF0ZS5VTklOSVRJQUxJWkVEKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuVFJBQ0VfU1RBUlRFRF9CRUZPUkUsIHtcbiAgICAgICAgdHJhY2VOYW1lOiB0aGlzLm5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmFwaS5tYXJrKHRoaXMudHJhY2VTdGFydE1hcmspO1xuICAgIHRoaXMuc3RhdGUgPSBUcmFjZVN0YXRlLlJVTk5JTkc7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIHRyYWNlLiBUaGUgbWVhc3VyZW1lbnQgb2YgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFjZSBzdG9wcyBhdCB0aGlzIHBvaW50IGFuZCB0cmFjZVxuICAgKiBpcyBsb2dnZWQuXG4gICAqL1xuICBzdG9wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBUcmFjZVN0YXRlLlJVTk5JTkcpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5UUkFDRV9TVE9QUEVEX0JFRk9SRSwge1xuICAgICAgICB0cmFjZU5hbWU6IHRoaXMubmFtZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBUcmFjZVN0YXRlLlRFUk1JTkFURUQ7XG4gICAgdGhpcy5hcGkubWFyayh0aGlzLnRyYWNlU3RvcE1hcmspO1xuICAgIHRoaXMuYXBpLm1lYXN1cmUoXG4gICAgICB0aGlzLnRyYWNlTWVhc3VyZSxcbiAgICAgIHRoaXMudHJhY2VTdGFydE1hcmssXG4gICAgICB0aGlzLnRyYWNlU3RvcE1hcmtcbiAgICApO1xuICAgIHRoaXMuY2FsY3VsYXRlVHJhY2VNZXRyaWNzKCk7XG4gICAgbG9nVHJhY2UodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkcyBhIHRyYWNlIHdpdGggcHJlZGV0ZXJtaW5lZCB2YWx1ZXMuIElmIHRoaXMgbWV0aG9kIGlzIHVzZWQgYSB0cmFjZSBpcyBjcmVhdGVkIGFuZCBsb2dnZWRcbiAgICogZGlyZWN0bHkuIE5vIG5lZWQgdG8gdXNlIHN0YXJ0IGFuZCBzdG9wIG1ldGhvZHMuXG4gICAqIEBwYXJhbSBzdGFydFRpbWUgVHJhY2Ugc3RhcnQgdGltZSBzaW5jZSBlcG9jaCBpbiBtaWxsaXNlY1xuICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGR1cmFjdGlvbiBvZiB0aGUgdHJhY2UgaW4gbWlsbGlzZWNcbiAgICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IHdoaWNoIGNhbiBvcHRpb25hbGx5IGhvbGQgbWFwcyBvZiBjdXN0b20gbWV0cmljcyBhbmQgY3VzdG9tIGF0dHJpYnV0ZXNcbiAgICovXG4gIHJlY29yZChcbiAgICBzdGFydFRpbWU6IG51bWJlcixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBtZXRyaWNzPzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgICAgIGF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIH1cbiAgKTogdm9pZCB7XG4gICAgaWYgKHN0YXJ0VGltZSA8PSAwKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9OUE9TSVRJVkVfVFJBQ0VfU1RBUlRfVElNRSwge1xuICAgICAgICB0cmFjZU5hbWU6IHRoaXMubmFtZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9OUE9TSVRJVkVfVFJBQ0VfRFVSQVRJT04sIHtcbiAgICAgICAgdHJhY2VOYW1lOiB0aGlzLm5hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZHVyYXRpb25VcyA9IE1hdGguZmxvb3IoZHVyYXRpb24gKiAxMDAwKTtcbiAgICB0aGlzLnN0YXJ0VGltZVVzID0gTWF0aC5mbG9vcihzdGFydFRpbWUgKiAxMDAwKTtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuY3VzdG9tQXR0cmlidXRlcyA9IHsgLi4ub3B0aW9ucy5hdHRyaWJ1dGVzIH07XG4gICAgfVxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubWV0cmljcykge1xuICAgICAgZm9yIChjb25zdCBtZXRyaWNOYW1lIG9mIE9iamVjdC5rZXlzKG9wdGlvbnMubWV0cmljcykpIHtcbiAgICAgICAgaWYgKCFpc05hTihOdW1iZXIob3B0aW9ucy5tZXRyaWNzW21ldHJpY05hbWVdKSkpIHtcbiAgICAgICAgICB0aGlzLmNvdW50ZXJzW21ldHJpY05hbWVdID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgIE51bWJlcihvcHRpb25zLm1ldHJpY3NbbWV0cmljTmFtZV0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsb2dUcmFjZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIGEgY3VzdG9tIG1ldHJpYyBieSBhIGNlcnRhaW4gbnVtYmVyIG9yIDEgaWYgbnVtYmVyIG5vdCBzcGVjaWZpZWQuIFdpbGwgY3JlYXRlIGEgbmV3XG4gICAqIGN1c3RvbSBtZXRyaWMgaWYgb25lIHdpdGggdGhlIGdpdmVuIG5hbWUgZG9lcyBub3QgZXhpc3QuIFRoZSB2YWx1ZSB3aWxsIGJlIGZsb29yZWQgZG93biB0byBhblxuICAgKiBpbnRlZ2VyLlxuICAgKiBAcGFyYW0gY291bnRlciBOYW1lIG9mIHRoZSBjdXN0b20gbWV0cmljXG4gICAqIEBwYXJhbSBudW1Bc0ludGVnZXIgSW5jcmVtZW50IGJ5IHZhbHVlXG4gICAqL1xuICBpbmNyZW1lbnRNZXRyaWMoY291bnRlcjogc3RyaW5nLCBudW1Bc0ludGVnZXIgPSAxKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY291bnRlcnNbY291bnRlcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5wdXRNZXRyaWMoY291bnRlciwgbnVtQXNJbnRlZ2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdXRNZXRyaWMoY291bnRlciwgdGhpcy5jb3VudGVyc1tjb3VudGVyXSArIG51bUFzSW50ZWdlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b20gbWV0cmljIHRvIGEgc3BlY2lmaWVkIHZhbHVlLiBXaWxsIGNyZWF0ZSBhIG5ldyBjdXN0b20gbWV0cmljIGlmIG9uZSB3aXRoIHRoZVxuICAgKiBnaXZlbiBuYW1lIGRvZXMgbm90IGV4aXN0LiBUaGUgdmFsdWUgd2lsbCBiZSBmbG9vcmVkIGRvd24gdG8gYW4gaW50ZWdlci5cbiAgICogQHBhcmFtIGNvdW50ZXIgTmFtZSBvZiB0aGUgY3VzdG9tIG1ldHJpY1xuICAgKiBAcGFyYW0gbnVtQXNJbnRlZ2VyIFNldCBjdXN0b20gbWV0cmljIHRvIHRoaXMgdmFsdWVcbiAgICovXG4gIHB1dE1ldHJpYyhjb3VudGVyOiBzdHJpbmcsIG51bUFzSW50ZWdlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRNZXRyaWNOYW1lKGNvdW50ZXIsIHRoaXMubmFtZSkpIHtcbiAgICAgIHRoaXMuY291bnRlcnNbY291bnRlcl0gPSBjb252ZXJ0TWV0cmljVmFsdWVUb0ludGVnZXIobnVtQXNJbnRlZ2VyID8/IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuSU5WQUxJRF9DVVNUT01fTUVUUklDX05BTUUsIHtcbiAgICAgICAgY3VzdG9tTWV0cmljTmFtZTogY291bnRlclxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBjdXN0b20gbWV0cmljIGJ5IHRoYXQgbmFtZS4gSWYgYSBjdXN0b20gbWV0cmljIHdpdGggdGhhdCBuYW1lIGRvZXNcbiAgICogbm90IGV4aXN0IHdpbGwgcmV0dXJuIHplcm8uXG4gICAqIEBwYXJhbSBjb3VudGVyXG4gICAqL1xuICBnZXRNZXRyaWMoY291bnRlcjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudGVyc1tjb3VudGVyXSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b20gYXR0cmlidXRlIG9mIGEgdHJhY2UgdG8gYSBjZXJ0YWluIHZhbHVlLlxuICAgKiBAcGFyYW0gYXR0clxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHB1dEF0dHJpYnV0ZShhdHRyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpc1ZhbGlkTmFtZSA9IGlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lKGF0dHIpO1xuICAgIGNvbnN0IGlzVmFsaWRWYWx1ZSA9IGlzVmFsaWRDdXN0b21BdHRyaWJ1dGVWYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKGlzVmFsaWROYW1lICYmIGlzVmFsaWRWYWx1ZSkge1xuICAgICAgdGhpcy5jdXN0b21BdHRyaWJ1dGVzW2F0dHJdID0gdmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRocm93IGFwcHJvcHJpYXRlIGVycm9yIHdoZW4gdGhlIGF0dHJpYnV0ZSBuYW1lIG9yIHZhbHVlIGlzIGludmFsaWQuXG4gICAgaWYgKCFpc1ZhbGlkTmFtZSkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLklOVkFMSURfQVRUUklCVVRFX05BTUUsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogYXR0clxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXNWYWxpZFZhbHVlKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuSU5WQUxJRF9BVFRSSUJVVEVfVkFMVUUsIHtcbiAgICAgICAgYXR0cmlidXRlVmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBhIGN1c3RvbSBhdHRyaWJ1dGUgb2YgYSB0cmFjZSBpcyBzZXQgdG8uXG4gICAqIEBwYXJhbSBhdHRyXG4gICAqL1xuICBnZXRBdHRyaWJ1dGUoYXR0cjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21BdHRyaWJ1dGVzW2F0dHJdO1xuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKGF0dHI6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1c3RvbUF0dHJpYnV0ZXNbYXR0cl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5jdXN0b21BdHRyaWJ1dGVzW2F0dHJdO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlcygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4geyAuLi50aGlzLmN1c3RvbUF0dHJpYnV0ZXMgfTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RhcnRUaW1lKHN0YXJ0VGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydFRpbWVVcyA9IHN0YXJ0VGltZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RHVyYXRpb24oZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZHVyYXRpb25VcyA9IGR1cmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgYW5kIGFzc2lnbnMgdGhlIGR1cmF0aW9uIGFuZCBzdGFydCB0aW1lIG9mIHRoZSB0cmFjZSB1c2luZyB0aGUgbWVhc3VyZSBwZXJmb3JtYW5jZVxuICAgKiBlbnRyeS5cbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlVHJhY2VNZXRyaWNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHBlcmZNZWFzdXJlRW50cmllcyA9IHRoaXMuYXBpLmdldEVudHJpZXNCeU5hbWUodGhpcy50cmFjZU1lYXN1cmUpO1xuICAgIGNvbnN0IHBlcmZNZWFzdXJlRW50cnkgPSBwZXJmTWVhc3VyZUVudHJpZXMgJiYgcGVyZk1lYXN1cmVFbnRyaWVzWzBdO1xuICAgIGlmIChwZXJmTWVhc3VyZUVudHJ5KSB7XG4gICAgICB0aGlzLmR1cmF0aW9uVXMgPSBNYXRoLmZsb29yKHBlcmZNZWFzdXJlRW50cnkuZHVyYXRpb24gKiAxMDAwKTtcbiAgICAgIHRoaXMuc3RhcnRUaW1lVXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAocGVyZk1lYXN1cmVFbnRyeS5zdGFydFRpbWUgKyB0aGlzLmFwaS5nZXRUaW1lT3JpZ2luKCkpICogMTAwMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIG5hdmlnYXRpb25UaW1pbmdzIEEgc2luZ2xlIGVsZW1lbnQgYXJyYXkgd2hpY2ggY29udGFpbnMgdGhlIG5hdmlnYXRpb25USW1pbmcgb2JqZWN0IG9mXG4gICAqIHRoZSBwYWdlIGxvYWRcbiAgICogQHBhcmFtIHBhaW50VGltaW5ncyBBIGFycmF5IHdoaWNoIGNvbnRhaW5zIHBhaW50VGltaW5nIG9iamVjdCBvZiB0aGUgcGFnZSBsb2FkXG4gICAqIEBwYXJhbSBmaXJzdElucHV0RGVsYXkgRmlyc3QgaW5wdXQgZGVsYXkgaW4gbWlsbGlzZWNcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVPb2JUcmFjZShcbiAgICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICBuYXZpZ2F0aW9uVGltaW5nczogUGVyZm9ybWFuY2VOYXZpZ2F0aW9uVGltaW5nW10sXG4gICAgcGFpbnRUaW1pbmdzOiBQZXJmb3JtYW5jZUVudHJ5W10sXG4gICAgZmlyc3RJbnB1dERlbGF5PzogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHJvdXRlID0gQXBpLmdldEluc3RhbmNlKCkuZ2V0VXJsKCk7XG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0cmFjZSA9IG5ldyBUcmFjZShcbiAgICAgIHBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICAgIE9PQl9UUkFDRV9QQUdFX0xPQURfUFJFRklYICsgcm91dGUsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb25zdCB0aW1lT3JpZ2luVXMgPSBNYXRoLmZsb29yKEFwaS5nZXRJbnN0YW5jZSgpLmdldFRpbWVPcmlnaW4oKSAqIDEwMDApO1xuICAgIHRyYWNlLnNldFN0YXJ0VGltZSh0aW1lT3JpZ2luVXMpO1xuXG4gICAgLy8gbmF2aWdhdGlvblRpbWluZ3MgaW5jbHVkZXMgb25seSBvbmUgZWxlbWVudC5cbiAgICBpZiAobmF2aWdhdGlvblRpbWluZ3MgJiYgbmF2aWdhdGlvblRpbWluZ3NbMF0pIHtcbiAgICAgIHRyYWNlLnNldER1cmF0aW9uKE1hdGguZmxvb3IobmF2aWdhdGlvblRpbWluZ3NbMF0uZHVyYXRpb24gKiAxMDAwKSk7XG4gICAgICB0cmFjZS5wdXRNZXRyaWMoXG4gICAgICAgICdkb21JbnRlcmFjdGl2ZScsXG4gICAgICAgIE1hdGguZmxvb3IobmF2aWdhdGlvblRpbWluZ3NbMF0uZG9tSW50ZXJhY3RpdmUgKiAxMDAwKVxuICAgICAgKTtcbiAgICAgIHRyYWNlLnB1dE1ldHJpYyhcbiAgICAgICAgJ2RvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCcsXG4gICAgICAgIE1hdGguZmxvb3IobmF2aWdhdGlvblRpbWluZ3NbMF0uZG9tQ29udGVudExvYWRlZEV2ZW50RW5kICogMTAwMClcbiAgICAgICk7XG4gICAgICB0cmFjZS5wdXRNZXRyaWMoXG4gICAgICAgICdsb2FkRXZlbnRFbmQnLFxuICAgICAgICBNYXRoLmZsb29yKG5hdmlnYXRpb25UaW1pbmdzWzBdLmxvYWRFdmVudEVuZCAqIDEwMDApXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IEZJUlNUX1BBSU5UID0gJ2ZpcnN0LXBhaW50JztcbiAgICBjb25zdCBGSVJTVF9DT05URU5URlVMX1BBSU5UID0gJ2ZpcnN0LWNvbnRlbnRmdWwtcGFpbnQnO1xuICAgIGlmIChwYWludFRpbWluZ3MpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFpbnQgPSBwYWludFRpbWluZ3MuZmluZChcbiAgICAgICAgcGFpbnRPYmplY3QgPT4gcGFpbnRPYmplY3QubmFtZSA9PT0gRklSU1RfUEFJTlRcbiAgICAgICk7XG4gICAgICBpZiAoZmlyc3RQYWludCAmJiBmaXJzdFBhaW50LnN0YXJ0VGltZSkge1xuICAgICAgICB0cmFjZS5wdXRNZXRyaWMoXG4gICAgICAgICAgRklSU1RfUEFJTlRfQ09VTlRFUl9OQU1FLFxuICAgICAgICAgIE1hdGguZmxvb3IoZmlyc3RQYWludC5zdGFydFRpbWUgKiAxMDAwKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgZmlyc3RDb250ZW50ZnVsUGFpbnQgPSBwYWludFRpbWluZ3MuZmluZChcbiAgICAgICAgcGFpbnRPYmplY3QgPT4gcGFpbnRPYmplY3QubmFtZSA9PT0gRklSU1RfQ09OVEVOVEZVTF9QQUlOVFxuICAgICAgKTtcbiAgICAgIGlmIChmaXJzdENvbnRlbnRmdWxQYWludCAmJiBmaXJzdENvbnRlbnRmdWxQYWludC5zdGFydFRpbWUpIHtcbiAgICAgICAgdHJhY2UucHV0TWV0cmljKFxuICAgICAgICAgIEZJUlNUX0NPTlRFTlRGVUxfUEFJTlRfQ09VTlRFUl9OQU1FLFxuICAgICAgICAgIE1hdGguZmxvb3IoZmlyc3RDb250ZW50ZnVsUGFpbnQuc3RhcnRUaW1lICogMTAwMClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0SW5wdXREZWxheSkge1xuICAgICAgICB0cmFjZS5wdXRNZXRyaWMoXG4gICAgICAgICAgRklSU1RfSU5QVVRfREVMQVlfQ09VTlRFUl9OQU1FLFxuICAgICAgICAgIE1hdGguZmxvb3IoZmlyc3RJbnB1dERlbGF5ICogMTAwMClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dUcmFjZSh0cmFjZSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVXNlclRpbWluZ1RyYWNlKFxuICAgIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgIG1lYXN1cmVOYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgdHJhY2UgPSBuZXcgVHJhY2UoXG4gICAgICBwZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgICBtZWFzdXJlTmFtZSxcbiAgICAgIGZhbHNlLFxuICAgICAgbWVhc3VyZU5hbWVcbiAgICApO1xuICAgIGxvZ1RyYWNlKHRyYWNlKTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaV9zZXJ2aWNlJztcbmltcG9ydCB7IGxvZ05ldHdvcmtSZXF1ZXN0IH0gZnJvbSAnLi4vc2VydmljZXMvcGVyZl9sb2dnZXInO1xuaW1wb3J0IHsgUGVyZm9ybWFuY2VDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvcGVyZic7XG5cbi8vIFRoZSBvcmRlciBvZiB2YWx1ZXMgb2YgdGhpcyBlbnVtIHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbmV4cG9ydCBjb25zdCBlbnVtIEh0dHBNZXRob2Qge1xuICBIVFRQX01FVEhPRF9VTktOT1dOID0gMCxcbiAgR0VUID0gMSxcbiAgUFVUID0gMixcbiAgUE9TVCA9IDMsXG4gIERFTEVURSA9IDQsXG4gIEhFQUQgPSA1LFxuICBQQVRDSCA9IDYsXG4gIE9QVElPTlMgPSA3LFxuICBUUkFDRSA9IDgsXG4gIENPTk5FQ1QgPSA5XG59XG5cbi8vIER1cmF0aW9ucyBhcmUgaW4gbWljcm9zZWNvbmRzLlxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrUmVxdWVzdCB7XG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyO1xuICB1cmw6IHN0cmluZztcbiAgaHR0cE1ldGhvZD86IEh0dHBNZXRob2Q7XG4gIHJlcXVlc3RQYXlsb2FkQnl0ZXM/OiBudW1iZXI7XG4gIHJlc3BvbnNlUGF5bG9hZEJ5dGVzPzogbnVtYmVyO1xuICBodHRwUmVzcG9uc2VDb2RlPzogbnVtYmVyO1xuICByZXNwb25zZUNvbnRlbnRUeXBlPzogc3RyaW5nO1xuICBzdGFydFRpbWVVcz86IG51bWJlcjtcbiAgdGltZVRvUmVxdWVzdENvbXBsZXRlZFVzPzogbnVtYmVyO1xuICB0aW1lVG9SZXNwb25zZUluaXRpYXRlZFVzPzogbnVtYmVyO1xuICB0aW1lVG9SZXNwb25zZUNvbXBsZXRlZFVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV0d29ya1JlcXVlc3RFbnRyeShcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gIGVudHJ5OiBQZXJmb3JtYW5jZUVudHJ5XG4pOiB2b2lkIHtcbiAgY29uc3QgcGVyZm9ybWFuY2VFbnRyeSA9IGVudHJ5IGFzIFBlcmZvcm1hbmNlUmVzb3VyY2VUaW1pbmc7XG4gIGlmICghcGVyZm9ybWFuY2VFbnRyeSB8fCBwZXJmb3JtYW5jZUVudHJ5LnJlc3BvbnNlU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0aW1lT3JpZ2luID0gQXBpLmdldEluc3RhbmNlKCkuZ2V0VGltZU9yaWdpbigpO1xuICBjb25zdCBzdGFydFRpbWVVcyA9IE1hdGguZmxvb3IoXG4gICAgKHBlcmZvcm1hbmNlRW50cnkuc3RhcnRUaW1lICsgdGltZU9yaWdpbikgKiAxMDAwXG4gICk7XG4gIGNvbnN0IHRpbWVUb1Jlc3BvbnNlSW5pdGlhdGVkVXMgPSBwZXJmb3JtYW5jZUVudHJ5LnJlc3BvbnNlU3RhcnRcbiAgICA/IE1hdGguZmxvb3IoXG4gICAgICAgIChwZXJmb3JtYW5jZUVudHJ5LnJlc3BvbnNlU3RhcnQgLSBwZXJmb3JtYW5jZUVudHJ5LnN0YXJ0VGltZSkgKiAxMDAwXG4gICAgICApXG4gICAgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IHRpbWVUb1Jlc3BvbnNlQ29tcGxldGVkVXMgPSBNYXRoLmZsb29yKFxuICAgIChwZXJmb3JtYW5jZUVudHJ5LnJlc3BvbnNlRW5kIC0gcGVyZm9ybWFuY2VFbnRyeS5zdGFydFRpbWUpICogMTAwMFxuICApO1xuICAvLyBSZW1vdmUgdGhlIHF1ZXJ5IHBhcmFtcyBmcm9tIGxvZ2dlZCBuZXR3b3JrIHJlcXVlc3QgdXJsLlxuICBjb25zdCB1cmwgPSBwZXJmb3JtYW5jZUVudHJ5Lm5hbWUgJiYgcGVyZm9ybWFuY2VFbnRyeS5uYW1lLnNwbGl0KCc/JylbMF07XG4gIGNvbnN0IG5ldHdvcmtSZXF1ZXN0OiBOZXR3b3JrUmVxdWVzdCA9IHtcbiAgICBwZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgdXJsLFxuICAgIHJlc3BvbnNlUGF5bG9hZEJ5dGVzOiBwZXJmb3JtYW5jZUVudHJ5LnRyYW5zZmVyU2l6ZSxcbiAgICBzdGFydFRpbWVVcyxcbiAgICB0aW1lVG9SZXNwb25zZUluaXRpYXRlZFVzLFxuICAgIHRpbWVUb1Jlc3BvbnNlQ29tcGxldGVkVXNcbiAgfTtcblxuICBsb2dOZXR3b3JrUmVxdWVzdChuZXR3b3JrUmVxdWVzdCk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi9hcGlfc2VydmljZSc7XG5pbXBvcnQgeyBUcmFjZSB9IGZyb20gJy4uL3Jlc291cmNlcy90cmFjZSc7XG5pbXBvcnQgeyBjcmVhdGVOZXR3b3JrUmVxdWVzdEVudHJ5IH0gZnJvbSAnLi4vcmVzb3VyY2VzL25ldHdvcmtfcmVxdWVzdCc7XG5pbXBvcnQgeyBUUkFDRV9NRUFTVVJFX1BSRUZJWCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRJaWQgfSBmcm9tICcuL2lpZF9zZXJ2aWNlJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3BlcmYnO1xuXG5jb25zdCBGSURfV0FJVF9USU1FX01TID0gNTAwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwT29iUmVzb3VyY2VzKFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlclxuKTogdm9pZCB7XG4gIC8vIERvIG5vdCBpbml0aWFsaXplIHVubGVzcyBpaWQgaXMgYXZhaWxhYmxlLlxuICBpZiAoIWdldElpZCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIFRoZSBsb2FkIGV2ZW50IG1pZ2h0IG5vdCBoYXZlIGZpcmVkIHlldCwgYW5kIHRoYXQgbWVhbnMgcGVyZm9ybWFuY2UgbmF2aWdhdGlvbiB0aW1pbmdcbiAgLy8gb2JqZWN0IGhhcyBhIGR1cmF0aW9uIG9mIDAuIFRoZSBzZXR1cCBzaG91bGQgcnVuIGFmdGVyIGFsbCBjdXJyZW50IHRhc2tzIGluIGpzIHF1ZXVlLlxuICBzZXRUaW1lb3V0KCgpID0+IHNldHVwT29iVHJhY2VzKHBlcmZvcm1hbmNlQ29udHJvbGxlciksIDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHNldHVwTmV0d29ya1JlcXVlc3RzKHBlcmZvcm1hbmNlQ29udHJvbGxlciksIDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHNldHVwVXNlclRpbWluZ1RyYWNlcyhwZXJmb3JtYW5jZUNvbnRyb2xsZXIpLCAwKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBOZXR3b3JrUmVxdWVzdHMoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyXG4pOiB2b2lkIHtcbiAgY29uc3QgYXBpID0gQXBpLmdldEluc3RhbmNlKCk7XG4gIGNvbnN0IHJlc291cmNlcyA9IGFwaS5nZXRFbnRyaWVzQnlUeXBlKCdyZXNvdXJjZScpO1xuICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHJlc291cmNlcykge1xuICAgIGNyZWF0ZU5ldHdvcmtSZXF1ZXN0RW50cnkocGVyZm9ybWFuY2VDb250cm9sbGVyLCByZXNvdXJjZSk7XG4gIH1cbiAgYXBpLnNldHVwT2JzZXJ2ZXIoJ3Jlc291cmNlJywgZW50cnkgPT5cbiAgICBjcmVhdGVOZXR3b3JrUmVxdWVzdEVudHJ5KHBlcmZvcm1hbmNlQ29udHJvbGxlciwgZW50cnkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNldHVwT29iVHJhY2VzKHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyKTogdm9pZCB7XG4gIGNvbnN0IGFwaSA9IEFwaS5nZXRJbnN0YW5jZSgpO1xuICBjb25zdCBuYXZpZ2F0aW9uVGltaW5ncyA9IGFwaS5nZXRFbnRyaWVzQnlUeXBlKFxuICAgICduYXZpZ2F0aW9uJ1xuICApIGFzIFBlcmZvcm1hbmNlTmF2aWdhdGlvblRpbWluZ1tdO1xuICBjb25zdCBwYWludFRpbWluZ3MgPSBhcGkuZ2V0RW50cmllc0J5VHlwZSgncGFpbnQnKTtcbiAgLy8gSWYgRmlyc3QgSW5wdXQgRGVzbHkgcG9seWZpbGwgaXMgYWRkZWQgdG8gdGhlIHBhZ2UsIHJlcG9ydCB0aGUgZmlkIHZhbHVlLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9maXJzdC1pbnB1dC1kZWxheVxuICBpZiAoYXBpLm9uRmlyc3RJbnB1dERlbGF5KSB7XG4gICAgLy8gSWYgdGhlIGZpZCBjYWxsIGJhY2sgaXMgbm90IGNhbGxlZCBmb3IgY2VydGFpbiB0aW1lLCBjb250aW51ZSB3aXRob3V0IGl0LlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgbGV0IHRpbWVvdXRJZDogYW55ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBUcmFjZS5jcmVhdGVPb2JUcmFjZShcbiAgICAgICAgcGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgICAgICBuYXZpZ2F0aW9uVGltaW5ncyxcbiAgICAgICAgcGFpbnRUaW1pbmdzXG4gICAgICApO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH0sIEZJRF9XQUlUX1RJTUVfTVMpO1xuICAgIGFwaS5vbkZpcnN0SW5wdXREZWxheSgoZmlkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIFRyYWNlLmNyZWF0ZU9vYlRyYWNlKFxuICAgICAgICAgIHBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICAgICAgICBuYXZpZ2F0aW9uVGltaW5ncyxcbiAgICAgICAgICBwYWludFRpbWluZ3MsXG4gICAgICAgICAgZmlkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgVHJhY2UuY3JlYXRlT29iVHJhY2UoXG4gICAgICBwZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgICBuYXZpZ2F0aW9uVGltaW5ncyxcbiAgICAgIHBhaW50VGltaW5nc1xuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBVc2VyVGltaW5nVHJhY2VzKFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlclxuKTogdm9pZCB7XG4gIGNvbnN0IGFwaSA9IEFwaS5nZXRJbnN0YW5jZSgpO1xuICAvLyBSdW4gdGhyb3VnaCB0aGUgbWVhc3VyZSBwZXJmb3JtYW5jZSBlbnRyaWVzIGNvbGxlY3RlZCB1cCB0byB0aGlzIHBvaW50LlxuICBjb25zdCBtZWFzdXJlcyA9IGFwaS5nZXRFbnRyaWVzQnlUeXBlKCdtZWFzdXJlJyk7XG4gIGZvciAoY29uc3QgbWVhc3VyZSBvZiBtZWFzdXJlcykge1xuICAgIGNyZWF0ZVVzZXJUaW1pbmdUcmFjZShwZXJmb3JtYW5jZUNvbnRyb2xsZXIsIG1lYXN1cmUpO1xuICB9XG4gIC8vIFNldHVwIGFuIG9ic2VydmVyIHRvIGNhcHR1cmUgdGhlIG1lYXN1cmVzIGZyb20gdGhpcyBwb2ludCBvbi5cbiAgYXBpLnNldHVwT2JzZXJ2ZXIoJ21lYXN1cmUnLCBlbnRyeSA9PlxuICAgIGNyZWF0ZVVzZXJUaW1pbmdUcmFjZShwZXJmb3JtYW5jZUNvbnRyb2xsZXIsIGVudHJ5KVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyVGltaW5nVHJhY2UoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICBtZWFzdXJlOiBQZXJmb3JtYW5jZUVudHJ5XG4pOiB2b2lkIHtcbiAgY29uc3QgbWVhc3VyZU5hbWUgPSBtZWFzdXJlLm5hbWU7XG4gIC8vIERvIG5vdCBjcmVhdGUgYSB0cmFjZSwgaWYgdGhlIHVzZXIgdGltaW5nIG1hcmtzIGFuZCBtZWFzdXJlcyBhcmUgY3JlYXRlZCBieSB0aGUgc2RrIGl0c2VsZi5cbiAgaWYgKFxuICAgIG1lYXN1cmVOYW1lLnN1YnN0cmluZygwLCBUUkFDRV9NRUFTVVJFX1BSRUZJWC5sZW5ndGgpID09PVxuICAgIFRSQUNFX01FQVNVUkVfUFJFRklYXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBUcmFjZS5jcmVhdGVVc2VyVGltaW5nVHJhY2UocGVyZm9ybWFuY2VDb250cm9sbGVyLCBtZWFzdXJlTmFtZSk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgc2V0dXBPb2JSZXNvdXJjZXMgfSBmcm9tICcuLi9zZXJ2aWNlcy9vb2JfcmVzb3VyY2VzX3NlcnZpY2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3Nfc2VydmljZSc7XG5pbXBvcnQgeyBnZXRJbml0aWFsaXphdGlvblByb21pc2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbml0aWFsaXphdGlvbl9zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaV9zZXJ2aWNlJztcbmltcG9ydCB7IEZpcmViYXNlQXBwIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBfRmlyZWJhc2VJbnN0YWxsYXRpb25zSW50ZXJuYWwgfSBmcm9tICdAZmlyZWJhc2UvaW5zdGFsbGF0aW9ucyc7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZVNldHRpbmdzLCBGaXJlYmFzZVBlcmZvcm1hbmNlIH0gZnJvbSAnLi4vcHVibGljX3R5cGVzJztcbmltcG9ydCB7IHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBzZXR1cFRyYW5zcG9ydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc3BvcnRfc2VydmljZSc7XG5pbXBvcnQgeyBjb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV9sb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgUGVyZm9ybWFuY2VDb250cm9sbGVyIGltcGxlbWVudHMgRmlyZWJhc2VQZXJmb3JtYW5jZSB7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBhcHA6IEZpcmViYXNlQXBwLFxuICAgIHJlYWRvbmx5IGluc3RhbGxhdGlvbnM6IF9GaXJlYmFzZUluc3RhbGxhdGlvbnNJbnRlcm5hbFxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kICptdXN0KiBiZSBjYWxsZWQgaW50ZXJuYWxseSBhcyBwYXJ0IG9mIGNyZWF0aW5nIGFcbiAgICogUGVyZm9ybWFuY2VDb250cm9sbGVyIGluc3RhbmNlLlxuICAgKlxuICAgKiBDdXJyZW50bHkgaXQncyBub3QgcG9zc2libGUgdG8gcGFzcyB0aGUgc2V0dGluZ3Mgb2JqZWN0IHRocm91Z2ggdGhlXG4gICAqIGNvbnN0cnVjdG9yIHVzaW5nIENvbXBvbmVudHMsIHNvIHRoaXMgbWV0aG9kIGV4aXN0cyB0byBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogZGVzaXJlZCBzZXR0aW5ncywgdG8gZW5zdXJlIG5vdGhpbmcgaXMgY29sbGVjdGVkIHdpdGhvdXQgdGhlIHVzZXInc1xuICAgKiBjb25zZW50LlxuICAgKi9cbiAgX2luaXQoc2V0dGluZ3M/OiBQZXJmb3JtYW5jZVNldHRpbmdzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2V0dGluZ3M/LmRhdGFDb2xsZWN0aW9uRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IHNldHRpbmdzLmRhdGFDb2xsZWN0aW9uRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHNldHRpbmdzPy5pbnN0cnVtZW50YXRpb25FbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCA9IHNldHRpbmdzLmluc3RydW1lbnRhdGlvbkVuYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKEFwaS5nZXRJbnN0YW5jZSgpLnJlcXVpcmVkQXBpc0F2YWlsYWJsZSgpKSB7XG4gICAgICB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKClcbiAgICAgICAgLnRoZW4oaXNBdmFpbGFibGUgPT4ge1xuICAgICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgc2V0dXBUcmFuc3BvcnRTZXJ2aWNlKCk7XG4gICAgICAgICAgICBnZXRJbml0aWFsaXphdGlvblByb21pc2UodGhpcykudGhlbihcbiAgICAgICAgICAgICAgKCkgPT4gc2V0dXBPb2JSZXNvdXJjZXModGhpcyksXG4gICAgICAgICAgICAgICgpID0+IHNldHVwT29iUmVzb3VyY2VzKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbyhgRW52aXJvbm1lbnQgZG9lc24ndCBzdXBwb3J0IEluZGV4ZWREQjogJHtlcnJvcn1gKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbyhcbiAgICAgICAgJ0ZpcmViYXNlIFBlcmZvcm1hbmNlIGNhbm5vdCBzdGFydCBpZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0ICcgK1xuICAgICAgICAgICdcIkZldGNoXCIgYW5kIFwiUHJvbWlzZVwiLCBvciBjb29raWVzIGFyZSBkaXNhYmxlZC4nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldCBpbnN0cnVtZW50YXRpb25FbmFibGVkKHZhbDogYm9vbGVhbikge1xuICAgIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmluc3RydW1lbnRhdGlvbkVuYWJsZWQgPSB2YWw7XG4gIH1cbiAgZ2V0IGluc3RydW1lbnRhdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmluc3RydW1lbnRhdGlvbkVuYWJsZWQ7XG4gIH1cblxuICBzZXQgZGF0YUNvbGxlY3Rpb25FbmFibGVkKHZhbDogYm9vbGVhbikge1xuICAgIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmRhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IHZhbDtcbiAgfVxuICBnZXQgZGF0YUNvbGxlY3Rpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5kYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XG4gIH1cbn1cbiIsICIvKipcbiAqIEZpcmViYXNlIFBlcmZvcm1hbmNlIE1vbml0b3JpbmdcbiAqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBGaXJlYmFzZVBlcmZvcm1hbmNlLFxuICBQZXJmb3JtYW5jZVNldHRpbmdzLFxuICBQZXJmb3JtYW5jZVRyYWNlXG59IGZyb20gJy4vcHVibGljX3R5cGVzJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4vdXRpbHMvZXJyb3JzJztcbmltcG9ydCB7IHNldHVwQXBpIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcGlfc2VydmljZSc7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3BlcmYnO1xuaW1wb3J0IHtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50LFxuICBfZ2V0UHJvdmlkZXIsXG4gIHJlZ2lzdGVyVmVyc2lvbixcbiAgRmlyZWJhc2VBcHAsXG4gIGdldEFwcFxufSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7XG4gIEluc3RhbmNlRmFjdG9yeSxcbiAgQ29tcG9uZW50Q29udGFpbmVyLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFR5cGVcbn0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBuYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IFRyYWNlIH0gZnJvbSAnLi9yZXNvdXJjZXMvdHJhY2UnO1xuaW1wb3J0ICdAZmlyZWJhc2UvaW5zdGFsbGF0aW9ucyc7XG5pbXBvcnQgeyBkZWVwRXF1YWwsIGdldE1vZHVsYXJJbnN0YW5jZSB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XG5cbi8qKlxuICogUmV0dXJucyBhIHtAbGluayBGaXJlYmFzZVBlcmZvcm1hbmNlfSBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIGFwcC5cbiAqIEBwYXJhbSBhcHAgLSBUaGUge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IHRvIHVzZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcmZvcm1hbmNlKFxuICBhcHA6IEZpcmViYXNlQXBwID0gZ2V0QXBwKClcbik6IEZpcmViYXNlUGVyZm9ybWFuY2Uge1xuICBhcHAgPSBnZXRNb2R1bGFySW5zdGFuY2UoYXBwKTtcbiAgY29uc3QgcHJvdmlkZXIgPSBfZ2V0UHJvdmlkZXIoYXBwLCAncGVyZm9ybWFuY2UnKTtcbiAgY29uc3QgcGVyZkluc3RhbmNlID0gcHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCkgYXMgUGVyZm9ybWFuY2VDb250cm9sbGVyO1xuICByZXR1cm4gcGVyZkluc3RhbmNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSB7QGxpbmsgRmlyZWJhc2VQZXJmb3JtYW5jZX0gaW5zdGFuY2UgZm9yIHRoZSBnaXZlbiBhcHAuIENhbiBvbmx5IGJlIGNhbGxlZCBvbmNlLlxuICogQHBhcmFtIGFwcCAtIFRoZSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gdG8gdXNlLlxuICogQHBhcmFtIHNldHRpbmdzIC0gT3B0aW9uYWwgc2V0dGluZ3MgZm9yIHRoZSB7QGxpbmsgRmlyZWJhc2VQZXJmb3JtYW5jZX0gaW5zdGFuY2UuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplUGVyZm9ybWFuY2UoXG4gIGFwcDogRmlyZWJhc2VBcHAsXG4gIHNldHRpbmdzPzogUGVyZm9ybWFuY2VTZXR0aW5nc1xuKTogRmlyZWJhc2VQZXJmb3JtYW5jZSB7XG4gIGFwcCA9IGdldE1vZHVsYXJJbnN0YW5jZShhcHApO1xuICBjb25zdCBwcm92aWRlciA9IF9nZXRQcm92aWRlcihhcHAsICdwZXJmb3JtYW5jZScpO1xuXG4gIC8vIHRocm93IGlmIGFuIGluc3RhbmNlIHdhcyBhbHJlYWR5IGNyZWF0ZWQuXG4gIC8vIEl0IGNvdWxkIGhhcHBlbiBpZiBpbml0aWFsaXplUGVyZm9ybWFuY2UoKSBpcyBjYWxsZWQgbW9yZSB0aGFuIG9uY2UsIG9yIGdldFBlcmZvcm1hbmNlKCkgaXMgY2FsbGVkIGZpcnN0LlxuICBpZiAocHJvdmlkZXIuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgY29uc3QgZXhpc3RpbmdJbnN0YW5jZSA9IHByb3ZpZGVyLmdldEltbWVkaWF0ZSgpO1xuICAgIGNvbnN0IGluaXRpYWxTZXR0aW5ncyA9IHByb3ZpZGVyLmdldE9wdGlvbnMoKSBhcyBQZXJmb3JtYW5jZVNldHRpbmdzO1xuICAgIGlmIChkZWVwRXF1YWwoaW5pdGlhbFNldHRpbmdzLCBzZXR0aW5ncyA/PyB7fSkpIHtcbiAgICAgIHJldHVybiBleGlzdGluZ0luc3RhbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGVyZkluc3RhbmNlID0gcHJvdmlkZXIuaW5pdGlhbGl6ZSh7XG4gICAgb3B0aW9uczogc2V0dGluZ3NcbiAgfSkgYXMgUGVyZm9ybWFuY2VDb250cm9sbGVyO1xuICByZXR1cm4gcGVyZkluc3RhbmNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYFBlcmZvcm1hbmNlVHJhY2VgIGluc3RhbmNlLlxuICogQHBhcmFtIHBlcmZvcm1hbmNlIC0gVGhlIHtAbGluayBGaXJlYmFzZVBlcmZvcm1hbmNlfSBpbnN0YW5jZSB0byB1c2UuXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB0cmFjZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNlKFxuICBwZXJmb3JtYW5jZTogRmlyZWJhc2VQZXJmb3JtYW5jZSxcbiAgbmFtZTogc3RyaW5nXG4pOiBQZXJmb3JtYW5jZVRyYWNlIHtcbiAgcGVyZm9ybWFuY2UgPSBnZXRNb2R1bGFySW5zdGFuY2UocGVyZm9ybWFuY2UpO1xuICByZXR1cm4gbmV3IFRyYWNlKHBlcmZvcm1hbmNlIGFzIFBlcmZvcm1hbmNlQ29udHJvbGxlciwgbmFtZSk7XG59XG5cbmNvbnN0IGZhY3Rvcnk6IEluc3RhbmNlRmFjdG9yeTwncGVyZm9ybWFuY2UnPiA9IChcbiAgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXIsXG4gIHsgb3B0aW9uczogc2V0dGluZ3MgfTogeyBvcHRpb25zPzogUGVyZm9ybWFuY2VTZXR0aW5ncyB9XG4pID0+IHtcbiAgLy8gRGVwZW5kZW5jaWVzXG4gIGNvbnN0IGFwcCA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XG4gIGNvbnN0IGluc3RhbGxhdGlvbnMgPSBjb250YWluZXJcbiAgICAuZ2V0UHJvdmlkZXIoJ2luc3RhbGxhdGlvbnMtaW50ZXJuYWwnKVxuICAgIC5nZXRJbW1lZGlhdGUoKTtcblxuICBpZiAoYXBwLm5hbWUgIT09IERFRkFVTFRfRU5UUllfTkFNRSkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5GQl9OT1RfREVGQVVMVCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PX1dJTkRPVyk7XG4gIH1cbiAgc2V0dXBBcGkod2luZG93KTtcbiAgY29uc3QgcGVyZkluc3RhbmNlID0gbmV3IFBlcmZvcm1hbmNlQ29udHJvbGxlcihhcHAsIGluc3RhbGxhdGlvbnMpO1xuICBwZXJmSW5zdGFuY2UuX2luaXQoc2V0dGluZ3MpO1xuXG4gIHJldHVybiBwZXJmSW5zdGFuY2U7XG59O1xuXG5mdW5jdGlvbiByZWdpc3RlclBlcmZvcm1hbmNlKCk6IHZvaWQge1xuICBfcmVnaXN0ZXJDb21wb25lbnQoXG4gICAgbmV3IENvbXBvbmVudCgncGVyZm9ybWFuY2UnLCBmYWN0b3J5LCBDb21wb25lbnRUeXBlLlBVQkxJQylcbiAgKTtcbiAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xuICAvLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxuICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ19fQlVJTERfVEFSR0VUX18nKTtcbn1cblxucmVnaXN0ZXJQZXJmb3JtYW5jZSgpO1xuXG5leHBvcnQgeyBGaXJlYmFzZVBlcmZvcm1hbmNlLCBQZXJmb3JtYW5jZVNldHRpbmdzLCBQZXJmb3JtYW5jZVRyYWNlIH07XG4iLCAiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldFBlcmZvcm1hbmNlIH0gZnJvbSAnZmlyZWJhc2UvcGVyZm9ybWFuY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpcmViYXNlQ29uZmlnKCkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzLCBuby1mdW5jLWFzc2lnbiwgbm8tZXh0cmEtYm9vbGVhbi1jYXN0LCBuby1jb25zdGFudC1jb25kaXRpb25cclxuICAgIGNvbnN0IF8weDVmNTg5YT1fMHg1ZTU4OyhmdW5jdGlvbihfMHgyZDNlNGMsXzB4NDQ5YjdkKXtjb25zdCBfMHgzMzlkZDA9XzB4NWU1OCxfMHgxZmI2ODQ9XzB4MmQzZTRjKCk7d2hpbGUoISFbXSl7dHJ5e2NvbnN0IF8weDM0N2IyND0tcGFyc2VJbnQoXzB4MzM5ZGQwKDB4MWQ4KSkvKDB4MThkZSoweDErMHg3MzcqLTB4MSstMHgxMWE2KSooLXBhcnNlSW50KF8weDMzOWRkMCgweDFkZCkpLygtMHgxZDZmKy0weDIqMHg1ODErLTB4MTMqLTB4MjIxKSkrcGFyc2VJbnQoXzB4MzM5ZGQwKDB4MWU2KSkvKC0weDMqMHgyMWQrMHhiMTIrLTB4NGI4KStwYXJzZUludChfMHgzMzlkZDAoMHgxZGMpKS8oMHg0ZGYrMHgxMDU1KzB4MTUzMCotMHgxKSoocGFyc2VJbnQoXzB4MzM5ZGQwKDB4MWUyKSkvKC0weDEqMHgxZjBkKy0weDExZjErLTB4MzEwMyotMHgxKSkrLXBhcnNlSW50KF8weDMzOWRkMCgweDFkYikpLygtMHgxKi0weGRlOSsweDEzZDIrMHgxKi0weDIxYjUpK3BhcnNlSW50KF8weDMzOWRkMCgweDFlOCkpLygtMHgxYTZiKzB4MyotMHgyYWErLTB4MjYqLTB4ZTgpKigtcGFyc2VJbnQoXzB4MzM5ZGQwKDB4MWU0KSkvKC0weDQwOSoweDErMHg4ZSotMHgyNisweDE5MjUpKSstcGFyc2VJbnQoXzB4MzM5ZGQwKDB4MWQ5KSkvKDB4MTgyYSstMHhjYzYrLTB4YjViKStwYXJzZUludChfMHgzMzlkZDAoMHgxZWEpKS8oLTB4MmUqLTB4YzQrMHhhYjIrLTB4MmRlMCk7aWYoXzB4MzQ3YjI0PT09XzB4NDQ5YjdkKWJyZWFrO2Vsc2UgXzB4MWZiNjg0WydwdXNoJ10oXzB4MWZiNjg0WydzaGlmdCddKCkpO31jYXRjaChfMHg0YjY0OTEpe18weDFmYjY4NFsncHVzaCddKF8weDFmYjY4NFsnc2hpZnQnXSgpKTt9fX0oXzB4MTk1NywweDE0YioweDk0NysweDZmZCoweDM1YistMHgxNzYwZmYpKTtjb25zdCBmaXJlYmFzZUNvbmZpZz17J2FwaUtleSc6XzB4NWY1ODlhKDB4MWYzKStfMHg1ZjU4OWEoMHgxZTEpK18weDVmNTg5YSgweDFmMCkrXzB4NWY1ODlhKDB4MWYyKSwnZGF0YWJhc2VVUkwnOl8weDVmNTg5YSgweDFlZikrXzB4NWY1ODlhKDB4MWUwKStfMHg1ZjU4OWEoMHgxZGUpK18weDVmNTg5YSgweDFkZikrXzB4NWY1ODlhKDB4MWYxKStfMHg1ZjU4OWEoMHgxZDUpK18weDVmNTg5YSgweDFlOSksJ3Byb2plY3RJZCc6XzB4NWY1ODlhKDB4MWVjKStfMHg1ZjU4OWEoMHgxZTMpLCdzdG9yYWdlQnVja2V0JzpfMHg1ZjU4OWEoMHgxZWMpK18weDVmNTg5YSgweDFlNSkrXzB4NWY1ODlhKDB4MWViKSwnbWVzc2FnaW5nU2VuZGVySWQnOl8weDVmNTg5YSgweDFlZCkrJzQ0JywnYXBwSWQnOl8weDVmNTg5YSgweDFlNykrXzB4NWY1ODlhKDB4MWQ3KStfMHg1ZjU4OWEoMHgxZWUpK18weDVmNTg5YSgweDFkNikrJ2QnLCdtZWFzdXJlbWVudElkJzpfMHg1ZjU4OWEoMHgxZGEpKydQQyd9LGFwcD1pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtmdW5jdGlvbiBfMHg1ZTU4KF8weDFlN2M1ZCxfMHg0NjE4ODEpe2NvbnN0IF8weDI0MWRiMj1fMHgxOTU3KCk7cmV0dXJuIF8weDVlNTg9ZnVuY3Rpb24oXzB4OTg5NTliLF8weDQ5MzE3OCl7XzB4OTg5NTliPV8weDk4OTU5Yi0oMHhhMysweDcqLTB4MmIzKzB4MTQxNyk7bGV0IF8weDVjYWE5Nz1fMHgyNDFkYjJbXzB4OTg5NTliXTtyZXR1cm4gXzB4NWNhYTk3O30sXzB4NWU1OChfMHgxZTdjNWQsXzB4NDYxODgxKTt9ZnVuY3Rpb24gXzB4MTk1Nygpe2NvbnN0IF8weDI2MGM2Yz1bJzE3NTAxOTJralphVmcnLCdpbmZvLmFwcHNwJywnMTQ2NjgxN1NTUkJESCcsJzE6NjE1MTU5NDEnLCc0MmpHQ2R5cScsJ2FiYXNlLmFwcCcsJzk1MDk5MDBFdkZaanUnLCdvdC5jb20nLCdjYW9wb2ludHMtJywnNjE1MTU5NDE4NycsJzU5Nzg0NjlmOTInLCdodHRwczovL2NhJywncGkzQ3doS2YxVCcsJ3BlLXdlc3QxLmYnLCdxN250aFB5Y0UnLCdBSXphU3lCbnBFJywnaXJlYmFzZWRhdCcsJ2I5MGI1Yzk4MjgnLCc4NzQ0OndlYjozJywnMVpySlF4bScsJzEzMDczMzczdnlqWnpRJywnRy0wODM4M0RDOScsJzI0MTY5NDRPeWNnYlQnLCcyMDU0MDE2c3RzWmpQJywnMjk4MzY5MFJBYW12bycsJ2ZvLWRlZmF1bHQnLCctcnRkYi5ldXJvJywnb3BvaW50cy1pbicsJy1ZbEtLdkh3RTknLCcxME9YZWxOUycsJ2luZm8nXTtfMHgxOTU3PWZ1bmN0aW9uKCl7cmV0dXJuIF8weDI2MGM2Yzt9O3JldHVybiBfMHgxOTU3KCk7fWdldFBlcmZvcm1hbmNlKGFwcCk7XHJcbn0iLCAiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgeyBhZGRfMjUsIG1haW4sIGdhcl9hbmRfcHRnLCByZWRfY29tbWFzLCBkaXNwbGF5X3BsdXNfMjUsIHNldF9zeXNfdGhlbWUgfSBmcm9tICcuL2RvbS1zdXBwb3J0JztcclxuaW1wb3J0IHtmaXJlYmFzZUNvbmZpZ30gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuZmlyZWJhc2VDb25maWcoKTtcclxuXHJcbnNldF9zeXNfdGhlbWUoKTtcclxudmFyIHRhcmdldF9udW07XHJcbmV4cG9ydCB2YXIgaGxfbnVtO1xyXG5leHBvcnQgdmFyIG9sX251bTtcclxuXHJcbmZ1bmN0aW9uIGF1dG9faW5wdXQodGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0pIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0X3RleHQnKS52YWx1ZSA9IHRhcmdldF9udW07XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hsX3N1YnNfdGV4dCcpLnZhbHVlID0gaGxfbnVtO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvbF9zdWJzX3RleHQnKS52YWx1ZSA9IG9sX251bTtcclxufVxyXG5cclxuLy8gVVNFIHNlc3Npb25TdG9yYWdlICEhISEhISEhISEhISEhXHJcbmZ1bmN0aW9uIGtlZXBfaW5wdXRzKHRhcmdldF9udW0sIGhsX251bSwgb2xfbnVtKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhcmdldF9udW0nLCB0YXJnZXRfbnVtKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGxfbnVtJywgaGxfbnVtKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb2xfbnVtJywgb2xfbnVtKTtcclxuXHJcbiAgdGFyZ2V0X251bSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXJnZXRfbnVtJyk7XHJcbiAgaGxfbnVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hsX251bScpO1xyXG4gIG9sX251bSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvbF9udW0nKTtcclxuXHJcbiAgYXV0b19pbnB1dCh0YXJnZXRfbnVtLCBobF9udW0sIG9sX251bSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZhbGlkX2lucHV0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRfcG9pbnRzX25lZWRlZCgpIHtcclxuICB0YXJnZXRfbnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXRfdGV4dCcpLnZhbHVlKTtcclxuICBobF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hsX3N1YnNfdGV4dCcpLnZhbHVlKTtcclxuICBvbF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29sX3N1YnNfdGV4dCcpLnZhbHVlKTtcclxuXHJcbiAgLy8gY2hlY2sgZm9yIGludmFsaWQgaW5wdXRcclxuICB2YXIgaW52YWxpZF90YXJnZXRfaW5wdXQgPSAodGFyZ2V0X251bSA8PSAwKSB8fCAodGFyZ2V0X251bSA+IDYyNSk7XHJcbiAgdmFyIGludmFsaWRfc3Vic19pbnB1dCA9IChobF9udW0gPCAwKSB8fCAob2xfbnVtIDwgMCkgfHwgKGhsX251bSA+IDYpIHx8IChvbF9udW0gPiA2KSB8fCAoKGhsX251bSArIG9sX251bSkgPiA2KTtcclxuICB2YXIgbWF4X3B0cyA9IChobF9udW0gKiAxMDApICsgKG9sX251bSAqIDU2KSArIGFkZF8yNTtcclxuICB2YXIgaW52YWxpZF9yYW5nZSA9IChtYXhfcHRzID49IHRhcmdldF9udW0pID09IGZhbHNlO1xyXG5cclxuICBjb25zdCByYW5nZV9lcnJvcl9tc2cgPSBgSXQncyBpbXBvc3NpYmxlIHRvIGFjaGlldmUgJHt0YXJnZXRfbnVtfSBDQU8gcG9pbnRzIHdpdGggJHtobF9udW19IGhpZ2hlci1sZXZlbCBzdWJqZWN0cyBhbmQgJHtvbF9udW19IG9yZGluYXJ5LWxldmVsIHN1YmplY3RzLmA7XHJcbiAgY29uc3QgcHRzX2Vycm9yX21zZyA9ICdZb3VyIGlucHV0dGVkIENBTyBwb2ludHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDYyNS4nO1xyXG4gIGNvbnN0IHN1YnNfZXJyb3JfbXNoID0gJ1RoaXMgY2FsY3VsYXRvciB3aWxsIG5vdCBhbGxvdyBmb3IgbW9yZSB0aGFuIDYgc3ViamVjdHMgaW4gdG90YWwgYXMgaW5wdXRzLic7XHJcblxyXG4gIHZhciBlcnJvcl9zdGF0dXMgPSAnJztcclxuXHJcbiAgaWYgKGludmFsaWRfcmFuZ2UpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSByYW5nZV9lcnJvcl9tc2cgKyAnXFxuJztcclxuICB9IGlmIChpbnZhbGlkX3N1YnNfaW5wdXQpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSBzdWJzX2Vycm9yX21zaCArICdcXG4nO1xyXG4gIH1cclxuICBpZiAoaW52YWxpZF90YXJnZXRfaW5wdXQpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSBwdHNfZXJyb3JfbXNnICsgJ1xcbic7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3Jfc3RhdHVzICE9ICcnKSB7XHJcbiAgICAvLyBpZiB0aGUgaW52YWxpZF9pbnB1dCBET00ncyBpc24ndCBzcGVmaWNpZWQgSFRNTCB0aGlua3MgaXQgZG9lc24ndCBleGlzdCAtLS0tLS1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZhbGlkX2lucHV0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW52YWxpZF9pbnB1dCcpLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW52YWxpZF9pbnB1dCcpLmlubmVySFRNTCA9IGVycm9yX3N0YXR1cztcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fY29udGFpbmVyJykuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3VsdGlvbl9vdXRwdXQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGluZ18yNV9jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb19jb250YWluZXInKS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291bHRpb25fb3V0cHV0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW52YWxpZF9pbnB1dCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB2YXIgbWF0aHNfcGx1c18yNTtcclxuICAgIGlmIChhZGRfMjUgPT0gMjUpIHtcclxuICAgICAgbWF0aHNfcGx1c18yNSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbWF0aHNfcGx1c18yNSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAga2VlcF9pbnB1dHModGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0pO1xyXG4gICAgdmFyIG1hdGNoZXNfaW5mbyA9IG1haW4odGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0sIG1hdGhzX3BsdXNfMjUpO1xyXG4gICAgdmFyIHBvaW50c19saXN0ID0gbWF0Y2hlc19pbmZvWzBdO1xyXG4gICAgdmFyIHBvaW50c19yZXEgPSBtYXRjaGVzX2luZm9bMV07XHJcblxyXG4gICAgaWYgKHBvaW50c19saXN0LmluY2x1ZGVzKDI1KSkge1xyXG4gICAgICBkaXNwbGF5X3BsdXNfMjUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGlzcGxheV9wbHVzXzI1KGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBvdXRwdXRfaW5mbyA9IGdhcl9hbmRfcHRnKHBvaW50c19saXN0KTtcclxuXHJcbiAgICB2YXIgZ3JhZGVfYXZnID0gb3V0cHV0X2luZm9bMF07XHJcbiAgICB2YXIgcmVxX3Jlc3VsdHMgPSBvdXRwdXRfaW5mb1sxXTsgLy8gdGhlc2UgYXJlIGxldHRlciBncmFkZXNcclxuXHJcbiAgICByZXFfcmVzdWx0cyA9IHJlZF9jb21tYXMocmVxX3Jlc3VsdHMpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2ludHNfcmVxJykuaW5uZXJIVE1MID0gU3RyaW5nKHBvaW50c19yZXEpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcV9yZXN1bHRzJykuaW5uZXJIVE1MID0gU3RyaW5nKHJlcV9yZXN1bHRzKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmFkZV9hdmdfcmVxJykuaW5uZXJIVE1MID0gU3RyaW5nKGdyYWRlX2F2Zyk7XHJcbiAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxXQUFTLGdCQUFnQjtBQUU5QixRQUFJLElBQUksU0FBUyxjQUFjLE9BQU87QUFFdEMsVUFBTSxjQUFjLE9BQU8sV0FBVyw4QkFBOEI7QUFDcEUsUUFBSSxZQUFZLFNBQVM7QUFDdkIsUUFBRSxNQUFNLFlBQVksV0FBVyxPQUFPO0FBQ3RDLFFBQUUsTUFBTSxZQUFZLFdBQVcsT0FBTztBQUV0QyxZQUFNLFlBQVksU0FBUyxpQkFBaUIsYUFBYTtBQUV6RCxnQkFBVSxRQUFRLFVBQVE7QUFDeEIsYUFBSyxNQUFNLFFBQVE7QUFBQSxNQUNyQixDQUFDO0FBQUEsSUFFSCxPQUNLO0FBQ0gsUUFBRSxNQUFNLFlBQVksV0FBVyxPQUFPO0FBQ3RDLFFBQUUsTUFBTSxZQUFZLFdBQVcsT0FBTztBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUVBLFdBQVMsZUFBZSxlQUFlLEVBQUUsaUJBQWlCLFNBQVMsV0FBVztBQUV2RSxNQUFJLFNBQVM7QUFDcEIsTUFBSSxzQkFBc0I7QUFDMUIsTUFBSSxVQUFVO0FBQ2QsV0FBUyxjQUFjO0FBQ3JCLFFBQUksZ0JBQWdCLFNBQVMsZUFBZSxlQUFlO0FBQzNELFFBQUksaUJBQWlCLFNBQVMsZUFBZSxnQkFBZ0I7QUFDN0QsUUFBSSxXQUFXLEdBQUc7QUFDaEIsb0JBQWMsWUFBWTtBQUMxQixxQkFBZSxNQUFNLFVBQVU7QUFDL0IscUJBQWUsTUFBTSxhQUFhO0FBQ2xDLGVBQVM7QUFDVCxnQkFBVTtBQUFBLElBRVosT0FBTztBQUNMLG9CQUFjLFlBQVk7QUFDMUIscUJBQWUsTUFBTSxVQUFVO0FBQy9CLGVBQVM7QUFDVCxnQkFBVTtBQUFBLElBQ1o7QUFDQSx1QkFBbUI7QUFDbkIsUUFB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QUUsWUFBWSxPQUFPLFVBQVU7QUFDbkUsZUFBUyxlQUFlLGFBQWEsRUFBRSxZQUFZLE9BQU8sV0FBVztBQUNyRSxlQUFTLGVBQWUsZUFBZSxFQUFFLFlBQVksT0FBTyxTQUFTO0FBQUEsSUFDdkU7QUFBQSxFQUNGOyIsCiAgIm5hbWVzIjogWyJjb3VudGVyIiwgInN0cmluZ1RvQnl0ZUFycmF5IiwgIm5hbWUiLCAiTG9nTGV2ZWwiLCAibmFtZSIsICJuYW1lIiwgInZlcnNpb24iLCAidGFyZ2V0IiwgIkRFRkFVTFRfRU5UUllfTkFNRSIsICJhcHBOYW1lIiwgImFwcENvbXBhdE5hbWUiLCAiYW5hbHl0aWNzTmFtZSIsICJhbmFseXRpY3NDb21wYXROYW1lIiwgImFwcENoZWNrTmFtZSIsICJhcHBDaGVja0NvbXBhdE5hbWUiLCAiYXV0aE5hbWUiLCAiYXV0aENvbXBhdE5hbWUiLCAiZGF0YWJhc2VOYW1lIiwgImRhdGFiYXNlQ29tcGF0TmFtZSIsICJmdW5jdGlvbnNOYW1lIiwgImZ1bmN0aW9uc0NvbXBhdE5hbWUiLCAiaW5zdGFsbGF0aW9uc05hbWUiLCAiaW5zdGFsbGF0aW9uc0NvbXBhdE5hbWUiLCAibWVzc2FnaW5nTmFtZSIsICJtZXNzYWdpbmdDb21wYXROYW1lIiwgInBlcmZvcm1hbmNlTmFtZSIsICJwZXJmb3JtYW5jZUNvbXBhdE5hbWUiLCAicmVtb3RlQ29uZmlnTmFtZSIsICJyZW1vdGVDb25maWdDb21wYXROYW1lIiwgInN0b3JhZ2VOYW1lIiwgInN0b3JhZ2VDb21wYXROYW1lIiwgImZpcmVzdG9yZU5hbWUiLCAiZmlyZXN0b3JlQ29tcGF0TmFtZSIsICJwYWNrYWdlTmFtZSIsICJuYW1lIiwgIm5hbWUiLCAiREVGQVVMVF9FTlRSWV9OQU1FIiwgInZlcnNpb24iLCAibmFtZSIsICJ2ZXJzaW9uIiwgIm5hbWUiLCAidmVyc2lvbiIsICJFUlJPUl9GQUNUT1JZIiwgImRiUHJvbWlzZSIsICJnZXREYlByb21pc2UiLCAiaW5zdGFsbGF0aW9uRW50cnkiLCAiRVJST1JfRkFDVE9SWSIsICJFUlJPUl9GQUNUT1JZIiwgIm5hbWUiLCAidmVyc2lvbiIsICJ2ZXJzaW9uIiwgIlNFUlZJQ0UiLCAiU0VSVklDRV9OQU1FIiwgIkVSUk9SX0RFU0NSSVBUSU9OX01BUCIsICJFUlJPUl9GQUNUT1JZIiwgIndpbmRvdyIsICJuYW1lIiwgIlZpc2liaWxpdHlTdGF0ZSIsICJuYXZpZ2F0b3IiLCAiZG9jdW1lbnQiLCAiaWlkIiwgImNvbmZpZyIsICJsb2NhbFN0b3JhZ2UiLCAic2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UiLCAic2VyaWFsaXplciIsICJsb2dnZXIiLCAiY291bnRlciIsICJERUZBVUxUX0VOVFJZX05BTUUiLCAiREVGQVVMVF9FTlRSWV9OQU1FIiwgIkVSUk9SX0ZBQ1RPUlkiLCAibmFtZSIsICJ2ZXJzaW9uIiwgImZpcmViYXNlQ29uZmlnIiwgInRhcmdldF9udW0iLCAiaGxfbnVtIiwgIm9sX251bSJdCn0K
