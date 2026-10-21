(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
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
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/darkreader/darkreader.js
  var darkreader_exports = {};
  var init_darkreader = __esm({
    "node_modules/darkreader/darkreader.js"() {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.DarkReader = {}));
      })(void 0, function(exports2) {
        "use strict";
        var MessageTypeUItoBG;
        (function(MessageTypeUItoBG2) {
          MessageTypeUItoBG2["GET_DATA"] = "ui-bg-get-data";
          MessageTypeUItoBG2["GET_DEVTOOLS_DATA"] = "ui-bg-get-devtools-data";
          MessageTypeUItoBG2["SUBSCRIBE_TO_CHANGES"] = "ui-bg-subscribe-to-changes";
          MessageTypeUItoBG2["UNSUBSCRIBE_FROM_CHANGES"] = "ui-bg-unsubscribe-from-changes";
          MessageTypeUItoBG2["CHANGE_SETTINGS"] = "ui-bg-change-settings";
          MessageTypeUItoBG2["SET_THEME"] = "ui-bg-set-theme";
          MessageTypeUItoBG2["TOGGLE_ACTIVE_TAB"] = "ui-bg-toggle-active-tab";
          MessageTypeUItoBG2["MARK_NEWS_AS_READ"] = "ui-bg-mark-news-as-read";
          MessageTypeUItoBG2["MARK_NEWS_AS_DISPLAYED"] = "ui-bg-mark-news-as-displayed";
          MessageTypeUItoBG2["LOAD_CONFIG"] = "ui-bg-load-config";
          MessageTypeUItoBG2["APPLY_DEV_DYNAMIC_THEME_FIXES"] = "ui-bg-apply-dev-dynamic-theme-fixes";
          MessageTypeUItoBG2["RESET_DEV_DYNAMIC_THEME_FIXES"] = "ui-bg-reset-dev-dynamic-theme-fixes";
          MessageTypeUItoBG2["APPLY_DEV_INVERSION_FIXES"] = "ui-bg-apply-dev-inversion-fixes";
          MessageTypeUItoBG2["RESET_DEV_INVERSION_FIXES"] = "ui-bg-reset-dev-inversion-fixes";
          MessageTypeUItoBG2["APPLY_DEV_STATIC_THEMES"] = "ui-bg-apply-dev-static-themes";
          MessageTypeUItoBG2["RESET_DEV_STATIC_THEMES"] = "ui-bg-reset-dev-static-themes";
          MessageTypeUItoBG2["COLOR_SCHEME_CHANGE"] = "ui-bg-color-scheme-change";
          MessageTypeUItoBG2["HIDE_HIGHLIGHTS"] = "ui-bg-hide-highlights";
        })(MessageTypeUItoBG || (MessageTypeUItoBG = {}));
        var MessageTypeBGtoUI;
        (function(MessageTypeBGtoUI2) {
          MessageTypeBGtoUI2["CHANGES"] = "bg-ui-changes";
        })(MessageTypeBGtoUI || (MessageTypeBGtoUI = {}));
        var DebugMessageTypeBGtoUI;
        (function(DebugMessageTypeBGtoUI2) {
          DebugMessageTypeBGtoUI2["CSS_UPDATE"] = "debug-bg-ui-css-update";
          DebugMessageTypeBGtoUI2["UPDATE"] = "debug-bg-ui-update";
        })(DebugMessageTypeBGtoUI || (DebugMessageTypeBGtoUI = {}));
        var MessageTypeBGtoCS;
        (function(MessageTypeBGtoCS2) {
          MessageTypeBGtoCS2["ADD_CSS_FILTER"] = "bg-cs-add-css-filter";
          MessageTypeBGtoCS2["ADD_DYNAMIC_THEME"] = "bg-cs-add-dynamic-theme";
          MessageTypeBGtoCS2["ADD_STATIC_THEME"] = "bg-cs-add-static-theme";
          MessageTypeBGtoCS2["ADD_SVG_FILTER"] = "bg-cs-add-svg-filter";
          MessageTypeBGtoCS2["CLEAN_UP"] = "bg-cs-clean-up";
          MessageTypeBGtoCS2["FETCH_RESPONSE"] = "bg-cs-fetch-response";
          MessageTypeBGtoCS2["UNSUPPORTED_SENDER"] = "bg-cs-unsupported-sender";
        })(MessageTypeBGtoCS || (MessageTypeBGtoCS = {}));
        var DebugMessageTypeBGtoCS;
        (function(DebugMessageTypeBGtoCS2) {
          DebugMessageTypeBGtoCS2["RELOAD"] = "debug-bg-cs-reload";
        })(DebugMessageTypeBGtoCS || (DebugMessageTypeBGtoCS = {}));
        var MessageTypeCStoBG;
        (function(MessageTypeCStoBG2) {
          MessageTypeCStoBG2["COLOR_SCHEME_CHANGE"] = "cs-bg-color-scheme-change";
          MessageTypeCStoBG2["DARK_THEME_DETECTED"] = "cs-bg-dark-theme-detected";
          MessageTypeCStoBG2["DARK_THEME_NOT_DETECTED"] = "cs-bg-dark-theme-not-detected";
          MessageTypeCStoBG2["FETCH"] = "cs-bg-fetch";
          MessageTypeCStoBG2["DOCUMENT_CONNECT"] = "cs-bg-document-connect";
          MessageTypeCStoBG2["DOCUMENT_FORGET"] = "cs-bg-document-forget";
          MessageTypeCStoBG2["DOCUMENT_FREEZE"] = "cs-bg-document-freeze";
          MessageTypeCStoBG2["DOCUMENT_RESUME"] = "cs-bg-document-resume";
        })(MessageTypeCStoBG || (MessageTypeCStoBG = {}));
        var DebugMessageTypeCStoBG;
        (function(DebugMessageTypeCStoBG2) {
          DebugMessageTypeCStoBG2["LOG"] = "debug-cs-bg-log";
        })(DebugMessageTypeCStoBG || (DebugMessageTypeCStoBG = {}));
        var MessageTypeCStoUI;
        (function(MessageTypeCStoUI2) {
          MessageTypeCStoUI2["EXPORT_CSS_RESPONSE"] = "cs-ui-export-css-response";
        })(MessageTypeCStoUI || (MessageTypeCStoUI = {}));
        var MessageTypeUItoCS;
        (function(MessageTypeUItoCS2) {
          MessageTypeUItoCS2["EXPORT_CSS"] = "ui-cs-export-css";
        })(MessageTypeUItoCS || (MessageTypeUItoCS = {}));
        const isNavigatorDefined = typeof navigator !== "undefined";
        const userAgent = isNavigatorDefined ? navigator.userAgentData && Array.isArray(navigator.userAgentData.brands) ? navigator.userAgentData.brands.map(
          (brand) => "".concat(brand.brand.toLowerCase(), " ").concat(brand.version)
        ).join(" ") : navigator.userAgent.toLowerCase() : "some useragent";
        const platform = isNavigatorDefined ? navigator.userAgentData && typeof navigator.userAgentData.platform === "string" ? navigator.userAgentData.platform.toLowerCase() : navigator.platform.toLowerCase() : "some platform";
        const isChromium = userAgent.includes("chrome") || userAgent.includes("chromium");
        const isFirefox = userAgent.includes("firefox") || userAgent.includes("thunderbird") || userAgent.includes("librewolf");
        const isSafari = userAgent.includes("safari") && !isChromium;
        const isWindows = platform.startsWith("win");
        const isMacOS = platform.startsWith("mac");
        isNavigatorDefined && navigator.userAgentData ? navigator.userAgentData.mobile : userAgent.includes("mobile");
        const isShadowDomSupported = typeof ShadowRoot === "function";
        const isMatchMediaChangeEventListenerSupported = typeof MediaQueryList === "function" && typeof MediaQueryList.prototype.addEventListener === "function";
        const isLayerRuleSupported = typeof CSSLayerBlockRule === "function";
        (() => {
          const m = userAgent.match(/chrom(?:e|ium)(?:\/| )([^ ]+)/);
          if (m && m[1]) {
            return m[1];
          }
          return "";
        })();
        (() => {
          const m = userAgent.match(/(?:firefox|librewolf)(?:\/| )([^ ]+)/);
          if (m && m[1]) {
            return m[1];
          }
          return "";
        })();
        const isDefinedSelectorSupported = (() => {
          try {
            document.querySelector(":defined");
            return true;
          } catch (err) {
            return false;
          }
        })();
        const isCSSColorSchemePropSupported = (() => {
          try {
            if (typeof document === "undefined") {
              return false;
            }
            const el = document.createElement("div");
            if (!el || typeof el.style !== "object") {
              return false;
            }
            if (typeof el.style.colorScheme === "string") {
              return true;
            }
            el.setAttribute("style", "color-scheme: dark");
            return el.style.colorScheme === "dark";
          } catch (e) {
            return false;
          }
        })();
        async function getOKResponse(url, mimeType, origin) {
          const credentials = origin && url.startsWith("".concat(origin, "/")) ? void 0 : "omit";
          const response = await fetch(url, {
            cache: "force-cache",
            credentials,
            referrer: origin
          });
          if (isFirefox && mimeType === "text/css" && url.startsWith("moz-extension://") && url.endsWith(".css")) {
            return response;
          }
          if (mimeType && !response.headers.get("Content-Type").startsWith(mimeType)) {
            throw new Error("Mime type mismatch when loading ".concat(url));
          }
          if (!response.ok) {
            throw new Error(
              "Unable to load ".concat(url, " ").concat(response.status, " ").concat(response.statusText)
            );
          }
          return response;
        }
        async function loadAsDataURL(url, mimeType) {
          const response = await getOKResponse(url, mimeType);
          return await readResponseAsDataURL(response);
        }
        async function loadAsBlob(url, mimeType) {
          const response = await getOKResponse(url, mimeType);
          return await response.blob();
        }
        async function readResponseAsDataURL(response) {
          const blob = await response.blob();
          const dataURL = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
          return dataURL;
        }
        async function loadAsText(url, mimeType, origin) {
          const response = await getOKResponse(url, mimeType, origin);
          return await response.text();
        }
        const throwCORSError = async (url) => {
          return Promise.reject(
            new Error(
              [
                "Embedded Dark Reader cannot access a cross-origin resource",
                url,
                "Overview your URLs and CORS policies or use",
                "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.",
                "See if using `DarkReader.setFetchMethod(window.fetch)`",
                "before `DarkReader.enable()` works."
              ].join(" ")
            )
          );
        };
        let fetcher = throwCORSError;
        function setFetchMethod$1(fetch2) {
          if (fetch2) {
            fetcher = fetch2;
          } else {
            fetcher = throwCORSError;
          }
        }
        async function callFetchMethod(url) {
          return await fetcher(url);
        }
        if (!window.chrome) {
          window.chrome = {};
        }
        if (!chrome.runtime) {
          chrome.runtime = {};
        }
        const messageListeners = /* @__PURE__ */ new Set();
        async function sendMessage(...args) {
          if (args[0] && args[0].type === MessageTypeCStoBG.FETCH) {
            const { id } = args[0];
            try {
              const { url, responseType } = args[0].data;
              const response = await callFetchMethod(url);
              let text;
              if (responseType === "data-url") {
                text = await readResponseAsDataURL(response);
              } else {
                text = await response.text();
              }
              messageListeners.forEach(
                (cb) => cb({
                  type: MessageTypeBGtoCS.FETCH_RESPONSE,
                  data: text,
                  error: null,
                  id
                })
              );
            } catch (error) {
              console.error(error);
              messageListeners.forEach(
                (cb) => cb({
                  type: MessageTypeBGtoCS.FETCH_RESPONSE,
                  data: null,
                  error,
                  id
                })
              );
            }
          }
        }
        function addMessageListener(callback) {
          messageListeners.add(callback);
        }
        if (typeof chrome.runtime.sendMessage === "function") {
          const nativeSendMessage = chrome.runtime.sendMessage;
          chrome.runtime.sendMessage = (...args) => {
            sendMessage(...args);
            nativeSendMessage.apply(chrome.runtime, args);
          };
        } else {
          chrome.runtime.sendMessage = sendMessage;
        }
        if (!chrome.runtime.onMessage) {
          chrome.runtime.onMessage = {};
        }
        if (typeof chrome.runtime.onMessage.addListener === "function") {
          const nativeAddListener = chrome.runtime.onMessage.addListener;
          chrome.runtime.onMessage.addListener = (...args) => {
            addMessageListener(args[0]);
            nativeAddListener.apply(chrome.runtime.onMessage, args);
          };
        } else {
          chrome.runtime.onMessage.addListener = (...args) => addMessageListener(args[0]);
        }
        var ThemeEngine;
        (function(ThemeEngine2) {
          ThemeEngine2["cssFilter"] = "cssFilter";
          ThemeEngine2["svgFilter"] = "svgFilter";
          ThemeEngine2["staticTheme"] = "staticTheme";
          ThemeEngine2["dynamicTheme"] = "dynamicTheme";
        })(ThemeEngine || (ThemeEngine = {}));
        var AutomationMode;
        (function(AutomationMode2) {
          AutomationMode2["NONE"] = "";
          AutomationMode2["TIME"] = "time";
          AutomationMode2["SYSTEM"] = "system";
          AutomationMode2["LOCATION"] = "location";
        })(AutomationMode || (AutomationMode = {}));
        const DEFAULT_COLORS = {
          darkScheme: {
            background: "#181a1b",
            text: "#e8e6e3"
          },
          lightScheme: {
            background: "#dcdad7",
            text: "#181a1b"
          }
        };
        const DEFAULT_THEME = {
          mode: 1,
          brightness: 100,
          contrast: 100,
          grayscale: 0,
          sepia: 0,
          useFont: false,
          fontFamily: isMacOS ? "Helvetica Neue" : isWindows ? "Segoe UI" : "Open Sans",
          textStroke: 0,
          engine: ThemeEngine.dynamicTheme,
          stylesheet: "",
          darkSchemeBackgroundColor: DEFAULT_COLORS.darkScheme.background,
          darkSchemeTextColor: DEFAULT_COLORS.darkScheme.text,
          lightSchemeBackgroundColor: DEFAULT_COLORS.lightScheme.background,
          lightSchemeTextColor: DEFAULT_COLORS.lightScheme.text,
          scrollbarColor: "",
          selectionColor: "auto",
          styleSystemControls: !isCSSColorSchemePropSupported,
          lightColorScheme: "Default",
          darkColorScheme: "Default",
          immediateModify: false
        };
        const filterModeSites = [
          "*.officeapps.live.com",
          "*.sharepoint.com",
          "docs.google.com",
          "onedrive.live.com"
        ];
        ({
          customThemes: filterModeSites.map((url) => {
            const engine = isChromium ? ThemeEngine.svgFilter : ThemeEngine.cssFilter;
            return {
              url: [url],
              theme: __spreadProps(__spreadValues({}, DEFAULT_THEME), { engine }),
              builtIn: true
            };
          }),
          automation: {
            mode: AutomationMode.NONE
          }
        });
        function getMatches(regex, input, group = 0) {
          const matches = [];
          let m;
          while (m = regex.exec(input)) {
            matches.push(m[group]);
          }
          return matches;
        }
        function getMatchesWithOffsets(regex, input, group = 0) {
          const matches = [];
          let m;
          while (m = regex.exec(input)) {
            matches.push({ text: m[group], offset: m.index });
          }
          return matches;
        }
        function getHashCode(text) {
          const len = text.length;
          let hash = 0;
          for (let i = 0; i < len; i++) {
            const c = text.charCodeAt(i);
            hash = (hash << 5) - hash + c & 4294967295;
          }
          return hash;
        }
        function escapeRegExpSpecialChars(input) {
          return input.replaceAll(/[\^$.*+?\(\)\[\]{}|\-\\]/g, "\\$&");
        }
        function getParenthesesRange(input, searchStartIndex = 0) {
          return getOpenCloseRange(input, searchStartIndex, "(", ")", []);
        }
        function getOpenCloseRange(input, searchStartIndex, openToken, closeToken, excludeRanges) {
          let indexOf;
          if (excludeRanges.length === 0) {
            indexOf = (token, pos) => input.indexOf(token, pos);
          } else {
            indexOf = (token, pos) => indexOfExcluding(input, token, pos, excludeRanges);
          }
          const { length } = input;
          let depth = 0;
          let firstOpenIndex = -1;
          for (let i = searchStartIndex; i < length; i++) {
            if (depth === 0) {
              const openIndex = indexOf(openToken, i);
              if (openIndex < 0) {
                break;
              }
              firstOpenIndex = openIndex;
              depth++;
              i = openIndex;
            } else {
              const closeIndex = indexOf(closeToken, i);
              if (closeIndex < 0) {
                break;
              }
              const openIndex = indexOf(openToken, i);
              if (openIndex < 0 || closeIndex <= openIndex) {
                depth--;
                if (depth === 0) {
                  return { start: firstOpenIndex, end: closeIndex + 1 };
                }
                i = closeIndex;
              } else {
                depth++;
                i = openIndex;
              }
            }
          }
          return null;
        }
        function indexOfExcluding(input, search, position, excludeRanges) {
          const i = input.indexOf(search, position);
          const exclusion = excludeRanges.find((r) => i >= r.start && i < r.end);
          if (exclusion) {
            return indexOfExcluding(
              input,
              search,
              exclusion.end,
              excludeRanges
            );
          }
          return i;
        }
        function splitExcluding(input, separator, excludeRanges) {
          const parts = [];
          let commaIndex = -1;
          let currIndex = 0;
          while ((commaIndex = indexOfExcluding(
            input,
            separator,
            currIndex,
            excludeRanges
          )) >= 0) {
            parts.push(input.substring(currIndex, commaIndex).trim());
            currIndex = commaIndex + 1;
          }
          parts.push(input.substring(currIndex).trim());
          return parts;
        }
        let anchor;
        const parsedURLCache = /* @__PURE__ */ new Map();
        function fixBaseURL($url) {
          if (!anchor) {
            anchor = document.createElement("a");
          }
          anchor.href = $url;
          return anchor.href;
        }
        function parseURL($url, $base = null) {
          const key = "".concat($url).concat($base ? ";".concat($base) : "");
          if (parsedURLCache.has(key)) {
            return parsedURLCache.get(key);
          }
          if ($base) {
            const parsedURL2 = new URL($url, fixBaseURL($base));
            parsedURLCache.set(key, parsedURL2);
            return parsedURL2;
          }
          const parsedURL = new URL(fixBaseURL($url));
          parsedURLCache.set($url, parsedURL);
          return parsedURL;
        }
        function getAbsoluteURL($base, $relative) {
          if ($relative.match(/^data\\?\:/)) {
            return $relative;
          }
          if (/^\/\//.test($relative)) {
            return "".concat(location.protocol).concat($relative);
          }
          const b = parseURL($base);
          const a = parseURL($relative, b.href);
          return a.href;
        }
        function isRelativeHrefOnAbsolutePath(href) {
          if (href.startsWith("data:")) {
            return true;
          }
          const url = parseURL(href);
          if (url.protocol !== location.protocol) {
            return false;
          }
          if (url.hostname !== location.hostname) {
            return false;
          }
          if (url.port !== location.port) {
            return false;
          }
          return url.pathname === location.pathname;
        }
        const excludedSelectors = [
          "pre",
          "pre *",
          "code",
          '[aria-hidden="true"]',
          '[class*="fa-"]',
          ".fa",
          ".fab",
          ".fad",
          ".fal",
          ".far",
          ".fas",
          ".fass",
          ".fasr",
          ".fat",
          ".icofont",
          '[style*="font-"]',
          '[class*="icon"]',
          '[class*="Icon"]',
          '[class*="symbol"]',
          '[class*="Symbol"]',
          ".glyphicon",
          '[class*="material-symbol"]',
          '[class*="material-icon"]',
          "mu",
          '[class*="mu-"]',
          ".typcn",
          '[class*="vjs-"]'
        ];
        function createTextStyle(config) {
          const lines = [];
          lines.push("*:not(".concat(excludedSelectors.join(", "), ") {"));
          if (config.useFont && config.fontFamily) {
            lines.push("  font-family: ".concat(config.fontFamily, " !important;"));
          }
          if (config.textStroke > 0) {
            lines.push(
              "  -webkit-text-stroke: ".concat(config.textStroke, "px !important;")
            );
            lines.push("  text-stroke: ".concat(config.textStroke, "px !important;"));
          }
          lines.push("}");
          return lines.join("\n");
        }
        function isArrayLike(items) {
          return items.length != null;
        }
        function forEach(items, iterator) {
          if (isArrayLike(items)) {
            for (let i = 0, len = items.length; i < len; i++) {
              iterator(items[i]);
            }
          } else {
            for (const item of items) {
              iterator(item);
            }
          }
        }
        function push(array, addition) {
          forEach(addition, (a) => array.push(a));
        }
        function toArray(items) {
          const results = [];
          for (let i = 0, len = items.length; i < len; i++) {
            results.push(items[i]);
          }
          return results;
        }
        function scale(x, inLow, inHigh, outLow, outHigh) {
          return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
        }
        function clamp(x, min, max) {
          return Math.min(max, Math.max(min, x));
        }
        function multiplyMatrices(m1, m2) {
          const result = [];
          for (let i = 0, len = m1.length; i < len; i++) {
            result[i] = [];
            for (let j = 0, len2 = m2[0].length; j < len2; j++) {
              let sum = 0;
              for (let k = 0, len3 = m1[0].length; k < len3; k++) {
                sum += m1[i][k] * m2[k][j];
              }
              result[i][j] = sum;
            }
          }
          return result;
        }
        function createFilterMatrix(config) {
          let m = Matrix.identity();
          if (config.sepia !== 0) {
            m = multiplyMatrices(m, Matrix.sepia(config.sepia / 100));
          }
          if (config.grayscale !== 0) {
            m = multiplyMatrices(m, Matrix.grayscale(config.grayscale / 100));
          }
          if (config.contrast !== 100) {
            m = multiplyMatrices(m, Matrix.contrast(config.contrast / 100));
          }
          if (config.brightness !== 100) {
            m = multiplyMatrices(m, Matrix.brightness(config.brightness / 100));
          }
          if (config.mode === 1) {
            m = multiplyMatrices(m, Matrix.invertNHue());
          }
          return m;
        }
        function applyColorMatrix([r, g, b], matrix) {
          const rgb = [[r / 255], [g / 255], [b / 255], [1], [1]];
          const result = multiplyMatrices(matrix, rgb);
          return [0, 1, 2].map(
            (i) => clamp(Math.round(result[i][0] * 255), 0, 255)
          );
        }
        const Matrix = {
          identity() {
            return [
              [1, 0, 0, 0, 0],
              [0, 1, 0, 0, 0],
              [0, 0, 1, 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          invertNHue() {
            return [
              [0.333, -0.667, -0.667, 0, 1],
              [-0.667, 0.333, -0.667, 0, 1],
              [-0.667, -0.667, 0.333, 0, 1],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          brightness(v) {
            return [
              [v, 0, 0, 0, 0],
              [0, v, 0, 0, 0],
              [0, 0, v, 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          contrast(v) {
            const t = (1 - v) / 2;
            return [
              [v, 0, 0, 0, t],
              [0, v, 0, 0, t],
              [0, 0, v, 0, t],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          sepia(v) {
            return [
              [
                0.393 + 0.607 * (1 - v),
                0.769 - 0.769 * (1 - v),
                0.189 - 0.189 * (1 - v),
                0,
                0
              ],
              [
                0.349 - 0.349 * (1 - v),
                0.686 + 0.314 * (1 - v),
                0.168 - 0.168 * (1 - v),
                0,
                0
              ],
              [
                0.272 - 0.272 * (1 - v),
                0.534 - 0.534 * (1 - v),
                0.131 + 0.869 * (1 - v),
                0,
                0
              ],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          grayscale(v) {
            return [
              [
                0.2126 + 0.7874 * (1 - v),
                0.7152 - 0.7152 * (1 - v),
                0.0722 - 0.0722 * (1 - v),
                0,
                0
              ],
              [
                0.2126 - 0.2126 * (1 - v),
                0.7152 + 0.2848 * (1 - v),
                0.0722 - 0.0722 * (1 - v),
                0,
                0
              ],
              [
                0.2126 - 0.2126 * (1 - v),
                0.7152 - 0.7152 * (1 - v),
                0.0722 + 0.9278 * (1 - v),
                0,
                0
              ],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          }
        };
        var FilterMode;
        (function(FilterMode2) {
          FilterMode2[FilterMode2["light"] = 0] = "light";
          FilterMode2[FilterMode2["dark"] = 1] = "dark";
        })(FilterMode || (FilterMode = {}));
        function getCSSFilterValue(config) {
          const filters = [];
          if (config.mode === FilterMode.dark) {
            filters.push("invert(100%) hue-rotate(180deg)");
          }
          if (config.brightness !== 100) {
            filters.push("brightness(".concat(config.brightness, "%)"));
          }
          if (config.contrast !== 100) {
            filters.push("contrast(".concat(config.contrast, "%)"));
          }
          if (config.grayscale !== 0) {
            filters.push("grayscale(".concat(config.grayscale, "%)"));
          }
          if (config.sepia !== 0) {
            filters.push("sepia(".concat(config.sepia, "%)"));
          }
          if (filters.length === 0) {
            return null;
          }
          return filters.join(" ");
        }
        function evalMath(expression) {
          const rpnStack = [];
          const workingStack = [];
          let lastToken;
          for (let i = 0, len = expression.length; i < len; i++) {
            const token = expression[i];
            if (!token || token === " ") {
              continue;
            }
            if (operators.has(token)) {
              const op = operators.get(token);
              while (workingStack.length) {
                const currentOp = operators.get(workingStack[0]);
                if (!currentOp) {
                  break;
                }
                if (op.lessOrEqualThan(currentOp)) {
                  rpnStack.push(workingStack.shift());
                } else {
                  break;
                }
              }
              workingStack.unshift(token);
            } else if (!lastToken || operators.has(lastToken)) {
              rpnStack.push(token);
            } else {
              rpnStack[rpnStack.length - 1] += token;
            }
            lastToken = token;
          }
          rpnStack.push(...workingStack);
          const stack = [];
          for (let i = 0, len = rpnStack.length; i < len; i++) {
            const op = operators.get(rpnStack[i]);
            if (op) {
              const args = stack.splice(0, 2);
              stack.push(op.exec(args[1], args[0]));
            } else {
              stack.unshift(parseFloat(rpnStack[i]));
            }
          }
          return stack[0];
        }
        class Operator {
          constructor(precedence, method) {
            this.precendce = precedence;
            this.execMethod = method;
          }
          exec(left, right) {
            return this.execMethod(left, right);
          }
          lessOrEqualThan(op) {
            return this.precendce <= op.precendce;
          }
        }
        const operators = /* @__PURE__ */ new Map([
          ["+", new Operator(1, (left, right) => left + right)],
          ["-", new Operator(1, (left, right) => left - right)],
          ["*", new Operator(2, (left, right) => left * right)],
          ["/", new Operator(2, (left, right) => left / right)]
        ]);
        const isSystemDarkModeEnabled = () => matchMedia("(prefers-color-scheme: dark)").matches;
        const hslaParseCache = /* @__PURE__ */ new Map();
        const rgbaParseCache = /* @__PURE__ */ new Map();
        function parseColorWithCache($color) {
          $color = $color.trim();
          if (rgbaParseCache.has($color)) {
            return rgbaParseCache.get($color);
          }
          if ($color.includes("calc(")) {
            $color = lowerCalcExpression($color);
          }
          const color = parse($color);
          if (color) {
            rgbaParseCache.set($color, color);
            return color;
          }
          return null;
        }
        function parseToHSLWithCache(color) {
          if (hslaParseCache.has(color)) {
            return hslaParseCache.get(color);
          }
          const rgb = parseColorWithCache(color);
          if (!rgb) {
            return null;
          }
          const hsl = rgbToHSL(rgb);
          hslaParseCache.set(color, hsl);
          return hsl;
        }
        function clearColorCache() {
          hslaParseCache.clear();
          rgbaParseCache.clear();
        }
        function hslToRGB({ h, s, l, a = 1 }) {
          if (s === 0) {
            const [r2, b2, g2] = [l, l, l].map((x2) => Math.round(x2 * 255));
            return { r: r2, g: g2, b: b2, a };
          }
          const c = (1 - Math.abs(2 * l - 1)) * s;
          const x = c * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - c / 2;
          const [r, g, b] = (h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x]).map((n) => Math.round((n + m) * 255));
          return { r, g, b, a };
        }
        function rgbToHSL({ r: r255, g: g255, b: b255, a = 1 }) {
          const r = r255 / 255;
          const g = g255 / 255;
          const b = b255 / 255;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const c = max - min;
          const l = (max + min) / 2;
          if (c === 0) {
            return { h: 0, s: 0, l, a };
          }
          let h = (max === r ? (g - b) / c % 6 : max === g ? (b - r) / c + 2 : (r - g) / c + 4) * 60;
          if (h < 0) {
            h += 360;
          }
          const s = c / (1 - Math.abs(2 * l - 1));
          return { h, s, l, a };
        }
        function toFixed(n, digits = 0) {
          const fixed = n.toFixed(digits);
          if (digits === 0) {
            return fixed;
          }
          const dot = fixed.indexOf(".");
          if (dot >= 0) {
            const zerosMatch = fixed.match(/0+$/);
            if (zerosMatch) {
              if (zerosMatch.index === dot + 1) {
                return fixed.substring(0, dot);
              }
              return fixed.substring(0, zerosMatch.index);
            }
          }
          return fixed;
        }
        function rgbToString(rgb) {
          const { r, g, b, a } = rgb;
          if (a != null && a < 1) {
            return "rgba(".concat(toFixed(r), ", ").concat(toFixed(g), ", ").concat(toFixed(b), ", ").concat(toFixed(a, 2), ")");
          }
          return "rgb(".concat(toFixed(r), ", ").concat(toFixed(g), ", ").concat(toFixed(b), ")");
        }
        function rgbToHexString({ r, g, b, a }) {
          return "#".concat((a != null && a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b]).map((x) => {
            return "".concat(x < 16 ? "0" : "").concat(x.toString(16));
          }).join(""));
        }
        function hslToString(hsl) {
          const { h, s, l, a } = hsl;
          if (a != null && a < 1) {
            return "hsla(".concat(toFixed(h), ", ").concat(toFixed(s * 100), "%, ").concat(toFixed(l * 100), "%, ").concat(toFixed(a, 2), ")");
          }
          return "hsl(".concat(toFixed(h), ", ").concat(toFixed(s * 100), "%, ").concat(toFixed(l * 100), "%)");
        }
        const rgbMatch = /^rgba?\([^\(\)]+\)$/;
        const hslMatch = /^hsla?\([^\(\)]+\)$/;
        const hexMatch = /^#[0-9a-f]+$/i;
        const supportedColorFuncs = [
          "color",
          "color-mix",
          "hwb",
          "lab",
          "lch",
          "oklab",
          "oklch"
        ];
        function parse($color) {
          const c = $color.trim().toLowerCase();
          if (c.includes("(from ")) {
            return domParseColor(c);
          }
          if (c.match(rgbMatch)) {
            if (c.startsWith("rgb(#") || c.startsWith("rgba(#")) {
              return domParseColor(c);
            }
            return parseRGB(c);
          }
          if (c.match(hslMatch)) {
            return parseHSL(c);
          }
          if (c.match(hexMatch)) {
            return parseHex(c);
          }
          if (knownColors.has(c)) {
            return getColorByName(c);
          }
          if (systemColors.has(c)) {
            return getSystemColor(c);
          }
          if (c === "transparent") {
            return { r: 0, g: 0, b: 0, a: 0 };
          }
          if (c.endsWith(")") && supportedColorFuncs.some(
            (fn) => c.startsWith(fn) && c[fn.length] === "("
          )) {
            return domParseColor(c);
          }
          if (c.startsWith("light-dark(") && c.endsWith(")")) {
            const match = c.match(
              /^light-dark\(\s*([a-z]+(\(.*\))?),\s*([a-z]+(\(.*\))?)\s*\)$/
            );
            if (match) {
              const schemeColor = isSystemDarkModeEnabled() ? match[3] : match[1];
              return parse(schemeColor);
            }
          }
          return null;
        }
        function getNumbers($color) {
          const numbers = [];
          let prevPos = 0;
          let isMining = false;
          const startIndex = $color.indexOf("(");
          $color = $color.substring(startIndex + 1, $color.length - 1);
          for (let i = 0; i < $color.length; i++) {
            const c = $color[i];
            if (c >= "0" && c <= "9" || c === "." || c === "+" || c === "-") {
              isMining = true;
            } else if (isMining && (c === " " || c === "," || c === "/")) {
              numbers.push($color.substring(prevPos, i));
              isMining = false;
              prevPos = i + 1;
            } else if (!isMining) {
              prevPos = i + 1;
            }
          }
          if (isMining) {
            numbers.push($color.substring(prevPos, $color.length));
          }
          return numbers;
        }
        function getNumbersFromString(str, range, units) {
          const raw = getNumbers(str);
          const unitsList = Object.entries(units);
          const numbers = raw.map((r) => r.trim()).map((r, i) => {
            let n;
            const unit = unitsList.find(([u]) => r.endsWith(u));
            if (unit) {
              n = parseFloat(r.substring(0, r.length - unit[0].length)) / unit[1] * range[i];
            } else {
              n = parseFloat(r);
            }
            if (range[i] > 1) {
              return Math.round(n);
            }
            return n;
          });
          return numbers;
        }
        const rgbRange = [255, 255, 255, 1];
        const rgbUnits = { "%": 100 };
        function parseRGB($rgb) {
          const [r, g, b, a = 1] = getNumbersFromString($rgb, rgbRange, rgbUnits);
          if (r == null || g == null || b == null || a == null) {
            return null;
          }
          return { r, g, b, a };
        }
        const hslRange = [360, 1, 1, 1];
        const hslUnits = { "%": 100, "deg": 360, "rad": 2 * Math.PI, "turn": 1 };
        function parseHSL($hsl) {
          const [h, s, l, a = 1] = getNumbersFromString($hsl, hslRange, hslUnits);
          if (h == null || s == null || l == null || a == null) {
            return null;
          }
          return hslToRGB({ h, s, l, a });
        }
        function parseHex($hex) {
          const h = $hex.substring(1);
          switch (h.length) {
            case 3:
            case 4: {
              const [r, g, b] = [0, 1, 2].map(
                (i) => parseInt("".concat(h[i]).concat(h[i]), 16)
              );
              const a = h.length === 3 ? 1 : parseInt("".concat(h[3]).concat(h[3]), 16) / 255;
              return { r, g, b, a };
            }
            case 6:
            case 8: {
              const [r, g, b] = [0, 2, 4].map(
                (i) => parseInt(h.substring(i, i + 2), 16)
              );
              const a = h.length === 6 ? 1 : parseInt(h.substring(6, 8), 16) / 255;
              return { r, g, b, a };
            }
          }
          return null;
        }
        function getColorByName($color) {
          const n = knownColors.get($color);
          return {
            r: n >> 16 & 255,
            g: n >> 8 & 255,
            b: n >> 0 & 255,
            a: 1
          };
        }
        function getSystemColor($color) {
          const n = systemColors.get($color);
          return {
            r: n >> 16 & 255,
            g: n >> 8 & 255,
            b: n >> 0 & 255,
            a: 1
          };
        }
        function lowerCalcExpression(color) {
          let searchIndex = 0;
          const replaceBetweenIndices = (start, end, replacement) => {
            color = color.substring(0, start) + replacement + color.substring(end);
          };
          while ((searchIndex = color.indexOf("calc(")) !== -1) {
            const range = getParenthesesRange(color, searchIndex);
            if (!range) {
              break;
            }
            let slice = color.slice(range.start + 1, range.end - 1);
            const includesPercentage = slice.includes("%");
            slice = slice.split("%").join("");
            const output = Math.round(evalMath(slice));
            replaceBetweenIndices(
              range.start - 4,
              range.end,
              output + (includesPercentage ? "%" : "")
            );
          }
          return color;
        }
        const knownColors = new Map(
          Object.entries({
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgrey: 11119017,
            darkgreen: 25600,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            grey: 8421504,
            green: 32768,
            greenyellow: 11403055,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgrey: 13882323,
            lightgreen: 9498256,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
          })
        );
        const systemColors = new Map(
          Object.entries({
            "ActiveBorder": 3906044,
            "ActiveCaption": 0,
            "AppWorkspace": 11184810,
            "Background": 6513614,
            "ButtonFace": 16777215,
            "ButtonHighlight": 15329769,
            "ButtonShadow": 10461343,
            "ButtonText": 0,
            "CaptionText": 0,
            "GrayText": 8355711,
            "Highlight": 11720703,
            "HighlightText": 0,
            "InactiveBorder": 16777215,
            "InactiveCaption": 16777215,
            "InactiveCaptionText": 0,
            "InfoBackground": 16514245,
            "InfoText": 0,
            "Menu": 16185078,
            "MenuText": 16777215,
            "Scrollbar": 11184810,
            "ThreeDDarkShadow": 0,
            "ThreeDFace": 12632256,
            "ThreeDHighlight": 16777215,
            "ThreeDLightShadow": 16777215,
            "ThreeDShadow": 0,
            "Window": 15527148,
            "WindowFrame": 11184810,
            "WindowText": 0,
            "-webkit-focus-ring-color": 15046400
          }).map(([key, value]) => [key.toLowerCase(), value])
        );
        function getSRGBLightness(r, g, b) {
          return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        }
        let canvas$1;
        let context$1;
        function domParseColor($color) {
          if (!context$1) {
            canvas$1 = document.createElement("canvas");
            canvas$1.width = 1;
            canvas$1.height = 1;
            context$1 = canvas$1.getContext("2d", { willReadFrequently: true });
          }
          context$1.fillStyle = $color;
          context$1.fillRect(0, 0, 1, 1);
          const d = context$1.getImageData(0, 0, 1, 1).data;
          const color = "rgba(".concat(d[0], ", ").concat(d[1], ", ").concat(d[2], ", ").concat((d[3] / 255).toFixed(2), ")");
          return parseRGB(color);
        }
        function throttle(callback) {
          let pending = false;
          let frameId = null;
          let lastArgs;
          const throttled = (...args) => {
            lastArgs = args;
            if (frameId) {
              pending = true;
            } else {
              callback(...lastArgs);
              frameId = requestAnimationFrame(() => {
                frameId = null;
                if (pending) {
                  callback(...lastArgs);
                  pending = false;
                }
              });
            }
          };
          const cancel = () => {
            cancelAnimationFrame(frameId);
            pending = false;
            frameId = null;
          };
          return Object.assign(throttled, { cancel });
        }
        function createAsyncTasksQueue() {
          const tasks = [];
          let frameId = null;
          function runTasks() {
            let task;
            while (task = tasks.shift()) {
              task();
            }
            frameId = null;
          }
          function add(task) {
            tasks.push(task);
            if (!frameId) {
              frameId = requestAnimationFrame(runTasks);
            }
          }
          function cancel() {
            tasks.splice(0);
            cancelAnimationFrame(frameId);
            frameId = null;
          }
          return { add, cancel };
        }
        const delayTokens = /* @__PURE__ */ new Set();
        function requestAnimationFrameOnce(token, callback) {
          if (delayTokens.has(token)) {
            return;
          }
          delayTokens.add(token);
          requestAnimationFrame(() => {
            delayTokens.delete(token);
            callback();
          });
        }
        function hexify(number) {
          return (number < 16 ? "0" : "") + number.toString(16);
        }
        function generateUID() {
          if ("randomUUID" in crypto) {
            const uuid = crypto.randomUUID();
            return uuid.substring(0, 8) + uuid.substring(9, 13) + uuid.substring(14, 18) + uuid.substring(19, 23) + uuid.substring(24);
          }
          if ("getRandomValues" in crypto) {
            return Array.from(crypto.getRandomValues(new Uint8Array(16))).map((x) => hexify(x)).join("");
          }
          return Math.floor(Math.random() * 2 ** 55).toString(36);
        }
        let documentVisibilityListener = null;
        let documentIsVisible_ = !document.hidden;
        const listenerOptions = {
          capture: true,
          passive: true
        };
        function watchForDocumentVisibility() {
          document.addEventListener(
            "visibilitychange",
            documentVisibilityListener,
            listenerOptions
          );
          window.addEventListener(
            "pageshow",
            documentVisibilityListener,
            listenerOptions
          );
          window.addEventListener(
            "focus",
            documentVisibilityListener,
            listenerOptions
          );
        }
        function stopWatchingForDocumentVisibility() {
          document.removeEventListener(
            "visibilitychange",
            documentVisibilityListener,
            listenerOptions
          );
          window.removeEventListener(
            "pageshow",
            documentVisibilityListener,
            listenerOptions
          );
          window.removeEventListener(
            "focus",
            documentVisibilityListener,
            listenerOptions
          );
        }
        function setDocumentVisibilityListener(callback) {
          const alreadyWatching = Boolean(documentVisibilityListener);
          documentVisibilityListener = () => {
            if (!document.hidden) {
              removeDocumentVisibilityListener();
              callback();
              documentIsVisible_ = true;
            }
          };
          if (!alreadyWatching) {
            watchForDocumentVisibility();
          }
        }
        function removeDocumentVisibilityListener() {
          stopWatchingForDocumentVisibility();
          documentVisibilityListener = null;
        }
        function documentIsVisible() {
          return documentIsVisible_;
        }
        function getDuration(time) {
          let duration = 0;
          if (time.seconds) {
            duration += time.seconds * 1e3;
          }
          if (time.minutes) {
            duration += time.minutes * 60 * 1e3;
          }
          if (time.hours) {
            duration += time.hours * 60 * 60 * 1e3;
          }
          if (time.days) {
            duration += time.days * 24 * 60 * 60 * 1e3;
          }
          return duration;
        }
        function logInfo(...args) {
        }
        function logWarn(...args) {
        }
        function logAssert(...args) {
        }
        function ASSERT(description, condition) {
          if (!condition) {
            logAssert(description);
          }
        }
        function removeNode(node) {
          node && node.parentNode && node.parentNode.removeChild(node);
        }
        function watchForNodePosition(node, mode, onRestore = Function.prototype) {
          const MAX_ATTEMPTS_COUNT = 10;
          const RETRY_TIMEOUT = getDuration({ seconds: 2 });
          const ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
          let prevSibling = node.previousSibling;
          let parent = node.parentNode;
          if (!parent) {
            throw new Error(
              "Unable to watch for node position: parent element not found"
            );
          }
          if (mode === "prev-sibling" && !prevSibling) {
            throw new Error(
              "Unable to watch for node position: there is no previous sibling"
            );
          }
          let attempts = 0;
          let start = null;
          let timeoutId = null;
          const restore = throttle(() => {
            if (timeoutId) {
              return;
            }
            attempts++;
            const now = Date.now();
            if (start == null) {
              start = now;
            } else if (attempts >= MAX_ATTEMPTS_COUNT) {
              if (now - start < ATTEMPTS_INTERVAL) {
                logWarn(
                  "Node position watcher paused: retry in ".concat(RETRY_TIMEOUT, "ms"),
                  node,
                  prevSibling
                );
                timeoutId = setTimeout(() => {
                  start = null;
                  attempts = 0;
                  timeoutId = null;
                  restore();
                }, RETRY_TIMEOUT);
                return;
              }
              start = now;
              attempts = 1;
            }
            if (mode === "head") {
              if (prevSibling && prevSibling.parentNode !== parent) {
                logWarn(
                  "Sibling moved, moving node to the head end",
                  node,
                  prevSibling,
                  parent
                );
                prevSibling = document.head.lastChild;
              }
            }
            if (mode === "prev-sibling") {
              if (prevSibling.parentNode == null) {
                logWarn(
                  "Unable to restore node position: sibling was removed",
                  node,
                  prevSibling,
                  parent
                );
                stop();
                return;
              }
              if (prevSibling.parentNode !== parent) {
                logWarn(
                  "Style was moved to another parent",
                  node,
                  prevSibling,
                  parent
                );
                updateParent(prevSibling.parentNode);
              }
            }
            if (mode === "head" && !parent.isConnected) {
              parent = document.head;
            }
            logWarn("Restoring node position", node, prevSibling, parent);
            parent.insertBefore(
              node,
              prevSibling && prevSibling.isConnected ? prevSibling.nextSibling : parent.firstChild
            );
            observer2.takeRecords();
            onRestore && onRestore();
          });
          const observer2 = new MutationObserver(() => {
            if (mode === "head" && (node.parentNode !== parent || !node.parentNode.isConnected) || mode === "prev-sibling" && node.previousSibling !== prevSibling) {
              restore();
            }
          });
          const run = () => {
            observer2.observe(parent, { childList: true });
          };
          const stop = () => {
            clearTimeout(timeoutId);
            observer2.disconnect();
            restore.cancel();
          };
          const skip = () => {
            observer2.takeRecords();
          };
          const updateParent = (parentNode) => {
            parent = parentNode;
            stop();
            run();
          };
          run();
          return { run, stop, skip };
        }
        function iterateShadowHosts(root, iterator) {
          if (root == null) {
            return;
          }
          const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_ELEMENT,
            {
              acceptNode(node) {
                return node.shadowRoot == null ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
              }
            }
          );
          for (let node = root.shadowRoot ? walker.currentNode : walker.nextNode(); node != null; node = walker.nextNode()) {
            if (node.classList.contains("surfingkeys_hints_host")) {
              continue;
            }
            iterator(node);
            iterateShadowHosts(node.shadowRoot, iterator);
          }
        }
        let isDOMReady = () => {
          return document.readyState === "complete" || document.readyState === "interactive";
        };
        function setIsDOMReady(newFunc) {
          isDOMReady = newFunc;
        }
        const readyStateListeners = /* @__PURE__ */ new Set();
        function addDOMReadyListener(listener) {
          isDOMReady() ? listener() : readyStateListeners.add(listener);
        }
        function removeDOMReadyListener(listener) {
          readyStateListeners.delete(listener);
        }
        function isReadyStateComplete() {
          return document.readyState === "complete";
        }
        const readyStateCompleteListeners = /* @__PURE__ */ new Set();
        function addReadyStateCompleteListener(listener) {
          isReadyStateComplete() ? listener() : readyStateCompleteListeners.add(listener);
        }
        function cleanReadyStateCompleteListeners() {
          readyStateCompleteListeners.clear();
        }
        if (!isDOMReady()) {
          const onReadyStateChange = () => {
            if (isDOMReady()) {
              readyStateListeners.forEach((listener) => listener());
              readyStateListeners.clear();
              if (isReadyStateComplete()) {
                document.removeEventListener(
                  "readystatechange",
                  onReadyStateChange
                );
                readyStateCompleteListeners.forEach(
                  (listener) => listener()
                );
                readyStateCompleteListeners.clear();
              }
            }
          };
          document.addEventListener("readystatechange", onReadyStateChange);
        }
        const HUGE_MUTATIONS_COUNT = 1e3;
        function isHugeMutation(mutations) {
          if (mutations.length > HUGE_MUTATIONS_COUNT) {
            return true;
          }
          let addedNodesCount = 0;
          for (let i = 0; i < mutations.length; i++) {
            addedNodesCount += mutations[i].addedNodes.length;
            if (addedNodesCount > HUGE_MUTATIONS_COUNT) {
              return true;
            }
          }
          return false;
        }
        function getElementsTreeOperations(mutations) {
          const additions = /* @__PURE__ */ new Set();
          const deletions = /* @__PURE__ */ new Set();
          const moves = /* @__PURE__ */ new Set();
          mutations.forEach((m) => {
            forEach(m.addedNodes, (n) => {
              if (n instanceof Element && n.isConnected) {
                additions.add(n);
              }
            });
            forEach(m.removedNodes, (n) => {
              if (n instanceof Element) {
                if (n.isConnected) {
                  moves.add(n);
                  additions.delete(n);
                } else {
                  deletions.add(n);
                }
              }
            });
          });
          const duplicateAdditions = [];
          const duplicateDeletions = [];
          additions.forEach((node) => {
            if (additions.has(node.parentElement)) {
              duplicateAdditions.push(node);
            }
          });
          deletions.forEach((node) => {
            if (deletions.has(node.parentElement)) {
              duplicateDeletions.push(node);
            }
          });
          duplicateAdditions.forEach((node) => additions.delete(node));
          duplicateDeletions.forEach((node) => deletions.delete(node));
          return { additions, moves, deletions };
        }
        const optimizedTreeObservers = /* @__PURE__ */ new Map();
        const optimizedTreeCallbacks = /* @__PURE__ */ new WeakMap();
        function createOptimizedTreeObserver(root, callbacks) {
          let observer2;
          let observerCallbacks;
          let domReadyListener;
          if (optimizedTreeObservers.has(root)) {
            observer2 = optimizedTreeObservers.get(root);
            observerCallbacks = optimizedTreeCallbacks.get(observer2);
          } else {
            let hadHugeMutationsBefore = false;
            let subscribedForReadyState = false;
            observer2 = new MutationObserver((mutations) => {
              if (isHugeMutation(mutations)) {
                if (!hadHugeMutationsBefore || isDOMReady()) {
                  observerCallbacks.forEach(
                    ({ onHugeMutations }) => onHugeMutations(root)
                  );
                } else if (!subscribedForReadyState) {
                  domReadyListener = () => observerCallbacks.forEach(
                    ({ onHugeMutations }) => onHugeMutations(root)
                  );
                  addDOMReadyListener(domReadyListener);
                  subscribedForReadyState = true;
                }
                hadHugeMutationsBefore = true;
              } else {
                const elementsOperations = getElementsTreeOperations(mutations);
                observerCallbacks.forEach(
                  ({ onMinorMutations }) => onMinorMutations(root, elementsOperations)
                );
              }
            });
            observer2.observe(root, { childList: true, subtree: true });
            optimizedTreeObservers.set(root, observer2);
            observerCallbacks = /* @__PURE__ */ new Set();
            optimizedTreeCallbacks.set(observer2, observerCallbacks);
          }
          observerCallbacks.add(callbacks);
          return {
            disconnect() {
              observerCallbacks.delete(callbacks);
              if (domReadyListener) {
                removeDOMReadyListener(domReadyListener);
              }
              if (observerCallbacks.size === 0) {
                observer2.disconnect();
                optimizedTreeCallbacks.delete(observer2);
                optimizedTreeObservers.delete(root);
              }
            }
          };
        }
        function iterateCSSRules(rules, iterate, onImportError) {
          forEach(rules, (rule) => {
            if (isStyleRule(rule)) {
              iterate(rule);
            } else if (isImportRule(rule)) {
              try {
                iterateCSSRules(
                  rule.styleSheet.cssRules,
                  iterate,
                  onImportError
                );
              } catch (err) {
                onImportError == null ? void 0 : onImportError();
              }
            } else if (isMediaRule(rule)) {
              const media = Array.from(rule.media);
              const isScreenOrAllOrQuery = media.some(
                (m) => m.startsWith("screen") || m.startsWith("all") || m.startsWith("(")
              );
              const isPrintOrSpeech = media.some(
                (m) => m.startsWith("print") || m.startsWith("speech")
              );
              if (isScreenOrAllOrQuery || !isPrintOrSpeech) {
                iterateCSSRules(rule.cssRules, iterate, onImportError);
              }
            } else if (isSupportsRule(rule)) {
              if (CSS.supports(rule.conditionText)) {
                iterateCSSRules(rule.cssRules, iterate, onImportError);
              }
            } else if (isLayerRule(rule)) {
              iterateCSSRules(rule.cssRules, iterate, onImportError);
            } else {
              logWarn("CSSRule type not supported", rule);
            }
          });
        }
        const shorthandVarDependantProperties = [
          "background",
          "border",
          "border-color",
          "border-bottom",
          "border-left",
          "border-right",
          "border-top",
          "outline",
          "outline-color"
        ];
        const shorthandVarDepPropRegexps = isSafari ? shorthandVarDependantProperties.map((prop) => {
          const regexp = new RegExp("".concat(prop, ":\\s*(.*?)\\s*;"));
          return [prop, regexp];
        }) : null;
        function iterateCSSDeclarations(style, iterate) {
          forEach(style, (property) => {
            const value = style.getPropertyValue(property).trim();
            if (!value) {
              return;
            }
            iterate(property, value);
          });
          const cssText = style.cssText;
          if (cssText.includes("var(")) {
            if (isSafari) {
              shorthandVarDepPropRegexps.forEach(([prop, regexp]) => {
                const match = cssText.match(regexp);
                if (match && match[1]) {
                  const val = match[1].trim();
                  iterate(prop, val);
                }
              });
            } else {
              shorthandVarDependantProperties.forEach((prop) => {
                const val = style.getPropertyValue(prop);
                if (val && val.includes("var(")) {
                  iterate(prop, val);
                }
              });
            }
          }
          if (cssText.includes("background-color: ;") && !style.getPropertyValue("background")) {
            handleEmptyShorthand("background", style, iterate);
          }
          if (cssText.includes("border-") && cssText.includes("-color: ;") && !style.getPropertyValue("border")) {
            handleEmptyShorthand("border", style, iterate);
          }
        }
        function handleEmptyShorthand(shorthand, style, iterate) {
          var _a, _b;
          const parentRule = style.parentRule;
          if (isStyleRule(parentRule)) {
            const sourceCSSText = (_b = (_a = parentRule.parentStyleSheet) == null ? void 0 : _a.ownerNode) == null ? void 0 : _b.textContent;
            if (sourceCSSText) {
              let escapedSelector = escapeRegExpSpecialChars(
                parentRule.selectorText
              );
              escapedSelector = escapedSelector.replaceAll(/\s+/g, "\\s*");
              escapedSelector = escapedSelector.replaceAll(/::/g, "::?");
              const regexp = new RegExp(
                "".concat(escapedSelector, "\\s*{[^}]*").concat(shorthand, ":\\s*([^;}]+)")
              );
              const match = sourceCSSText.match(regexp);
              if (match) {
                iterate(shorthand, match[1]);
              }
            } else if (shorthand === "background") {
              iterate("background-color", "#ffffff");
            }
          }
        }
        const cssURLRegex = /url\((('.*?')|(".*?")|([^\)]*?))\)/g;
        const cssImportRegex = /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)? ?(screen)?;?/gi;
        function getCSSURLValue(cssURL) {
          return cssURL.trim().replace(/[\n\r\\]+/g, "").replace(/^url\((.*)\)$/, "$1").trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1").replace(/(?:\\(.))/g, "$1");
        }
        function getCSSBaseBath(url) {
          const cssURL = parseURL(url);
          return "".concat(cssURL.origin).concat(cssURL.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1"));
        }
        function replaceCSSRelativeURLsWithAbsolute($css, cssBasePath) {
          return $css.replace(cssURLRegex, (match) => {
            try {
              const url = getCSSURLValue(match);
              const absoluteURL = getAbsoluteURL(cssBasePath, url);
              const escapedURL = absoluteURL.replaceAll("'", "\\'");
              return "url('".concat(escapedURL, "')");
            } catch (err) {
              logWarn(
                "Not able to replace relative URL with Absolute URL, skipping"
              );
              return match;
            }
          });
        }
        const fontFaceRegex = /@font-face\s*{[^}]*}/g;
        function replaceCSSFontFace($css) {
          return $css.replace(fontFaceRegex, "");
        }
        const styleRules = /* @__PURE__ */ new WeakSet();
        const importRules = /* @__PURE__ */ new WeakSet();
        const mediaRules = /* @__PURE__ */ new WeakSet();
        const supportsRules = /* @__PURE__ */ new WeakSet();
        const layerRules = /* @__PURE__ */ new WeakSet();
        function isStyleRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return true;
          }
          if (rule.selectorText) {
            styleRules.add(rule);
            return true;
          }
          return false;
        }
        function isImportRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return false;
          }
          if (importRules.has(rule)) {
            return true;
          }
          if (rule.href) {
            importRules.add(rule);
            return true;
          }
          return false;
        }
        function isMediaRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return false;
          }
          if (mediaRules.has(rule)) {
            return true;
          }
          if (rule.media) {
            mediaRules.add(rule);
            return true;
          }
          return false;
        }
        function isSupportsRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return false;
          }
          if (supportsRules.has(rule)) {
            return true;
          }
          if (rule instanceof CSSSupportsRule) {
            supportsRules.add(rule);
            return true;
          }
          return false;
        }
        function isLayerRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return false;
          }
          if (layerRules.has(rule)) {
            return true;
          }
          if (isLayerRuleSupported && rule instanceof CSSLayerBlockRule) {
            layerRules.add(rule);
            return true;
          }
          return false;
        }
        const sheetsScopes = /* @__PURE__ */ new WeakMap();
        function defineSheetScope(sheet, node) {
          sheetsScopes.set(sheet, node);
        }
        function getSheetScope(sheet) {
          if (!sheet.ownerNode) {
            return null;
          }
          if (sheetsScopes.has(sheet)) {
            return sheetsScopes.get(sheet);
          }
          let node = sheet.ownerNode;
          while (node) {
            if (node instanceof ShadowRoot || node instanceof Document) {
              defineSheetScope(sheet, node);
              return node;
            }
            node = node.parentNode;
          }
          return null;
        }
        const gradientLength = "gradient".length;
        const conicGradient = "conic-";
        const conicGradientLength = conicGradient.length;
        const radialGradient = "radial-";
        const linearGradient = "linear-";
        function parseGradient(value) {
          const result = [];
          let index = 0;
          let startIndex = conicGradient.length;
          while ((index = value.indexOf("gradient", startIndex)) !== -1) {
            let typeGradient;
            [linearGradient, radialGradient, conicGradient].find(
              (possibleType) => {
                if (index - possibleType.length >= 0) {
                  const possibleGradient = value.substring(
                    index - possibleType.length,
                    index
                  );
                  if (possibleGradient === possibleType) {
                    if (value.slice(
                      index - possibleType.length - 10,
                      index - possibleType.length - 1
                    ) === "repeating") {
                      typeGradient = "repeating-".concat(possibleType, "gradient");
                      return true;
                    }
                    if (value.slice(
                      index - possibleType.length - 8,
                      index - possibleType.length - 1
                    ) === "-webkit") {
                      typeGradient = "-webkit-".concat(possibleType, "gradient");
                      return true;
                    }
                    typeGradient = "".concat(possibleType, "gradient");
                    return true;
                  }
                }
              }
            );
            if (!typeGradient) {
              break;
            }
            const { start, end } = getParenthesesRange(
              value,
              index + gradientLength
            );
            const match = value.substring(start + 1, end - 1);
            startIndex = end + 1 + conicGradientLength;
            result.push({
              typeGradient,
              match,
              offset: typeGradient.length + 2,
              index: index - typeGradient.length + gradientLength,
              hasComma: true
            });
          }
          if (result.length) {
            result[result.length - 1].hasComma = false;
          }
          return result;
        }
        const STORAGE_KEY_IMAGE_DETAILS_LIST = "__darkreader__imageDetails_v2_list";
        const STORAGE_KEY_IMAGE_DETAILS_PREFIX = "__darkreader__imageDetails_v2_";
        const STORAGE_KEY_CSS_FETCH_PREFIX = "__darkreader__cssFetch_";
        let imageCacheTimeout = 0;
        const imageDetailsCacheQueue = /* @__PURE__ */ new Map();
        const cachedImageUrls = [];
        function writeImageDetailsQueue() {
          imageDetailsCacheQueue.forEach((details, url) => {
            if (url && url.startsWith("https://")) {
              try {
                const json = JSON.stringify(details);
                sessionStorage.setItem(
                  "".concat(STORAGE_KEY_IMAGE_DETAILS_PREFIX).concat(url),
                  json
                );
                cachedImageUrls.push(url);
              } catch (err) {
              }
            }
          });
          imageDetailsCacheQueue.clear();
          sessionStorage.setItem(
            STORAGE_KEY_IMAGE_DETAILS_LIST,
            JSON.stringify(cachedImageUrls)
          );
        }
        function writeImageDetailsCache(url, imageDetails) {
          if (!url || !url.startsWith("https://")) {
            return;
          }
          imageDetailsCacheQueue.set(url, imageDetails);
          clearTimeout(imageCacheTimeout);
          imageCacheTimeout = setTimeout(writeImageDetailsQueue, 1e3);
        }
        function readImageDetailsCache(targetMap) {
          try {
            const jsonList = sessionStorage.getItem(
              STORAGE_KEY_IMAGE_DETAILS_LIST
            );
            if (!jsonList) {
              return;
            }
            const list = JSON.parse(jsonList);
            list.forEach((url) => {
              const json = sessionStorage.getItem(
                "".concat(STORAGE_KEY_IMAGE_DETAILS_PREFIX).concat(url)
              );
              if (json) {
                const details = JSON.parse(json);
                targetMap.set(url, details);
              }
            });
          } catch (err) {
          }
        }
        function writeCSSFetchCache(url, cssText) {
          const key = "".concat(STORAGE_KEY_CSS_FETCH_PREFIX).concat(url);
          try {
            sessionStorage.setItem(key, cssText);
          } catch (err) {
          }
        }
        function readCSSFetchCache(url) {
          var _a;
          const key = "".concat(STORAGE_KEY_CSS_FETCH_PREFIX).concat(url);
          try {
            return (_a = sessionStorage.getItem(key)) != null ? _a : null;
          } catch (err) {
          }
          return null;
        }
        function toSVGMatrix(matrix) {
          return matrix.slice(0, 4).map((m) => m.map((m2) => m2.toFixed(3)).join(" ")).join(" ");
        }
        function getSVGFilterMatrixValue(config) {
          return toSVGMatrix(createFilterMatrix(config));
        }
        const MAX_FRAME_DURATION = 1e3 / 60;
        class AsyncQueue {
          constructor() {
            this.queue = [];
            this.timerId = null;
          }
          addTask(task) {
            this.queue.push(task);
            this.scheduleFrame();
          }
          stop() {
            if (this.timerId !== null) {
              cancelAnimationFrame(this.timerId);
              this.timerId = null;
            }
            this.queue = [];
          }
          scheduleFrame() {
            if (this.timerId) {
              return;
            }
            this.timerId = requestAnimationFrame(() => {
              this.timerId = null;
              const start = Date.now();
              let cb;
              while (cb = this.queue.shift()) {
                cb();
                if (Date.now() - start >= MAX_FRAME_DURATION) {
                  this.scheduleFrame();
                  break;
                }
              }
            });
          }
        }
        const resolvers$1 = /* @__PURE__ */ new Map();
        const rejectors = /* @__PURE__ */ new Map();
        async function bgFetch(request) {
          var _a, _b;
          if ((_b = (_a = window.DarkReader) == null ? void 0 : _a.Plugins) == null ? void 0 : _b.fetch) {
            return window.DarkReader.Plugins.fetch(request);
          }
          return new Promise((resolve, reject) => {
            const id = generateUID();
            resolvers$1.set(id, resolve);
            rejectors.set(id, reject);
            chrome.runtime.sendMessage({
              type: MessageTypeCStoBG.FETCH,
              data: request,
              id
            });
          });
        }
        chrome.runtime.onMessage.addListener(({ type, data, error, id }) => {
          if (type === MessageTypeBGtoCS.FETCH_RESPONSE) {
            const resolve = resolvers$1.get(id);
            const reject = rejectors.get(id);
            resolvers$1.delete(id);
            rejectors.delete(id);
            if (error) {
              reject && reject(error);
            } else {
              resolve && resolve(data);
            }
          }
        });
        const imageManager = new AsyncQueue();
        async function getImageDetails(url) {
          return new Promise(async (resolve, reject) => {
            var _a, _b;
            try {
              const dataURL = url.startsWith("data:") ? url : await getDataURL(url);
              const blob = (_a = tryConvertDataURLToBlobSync(dataURL)) != null ? _a : await loadAsBlob(url);
              let image;
              if (dataURL.startsWith("data:image/svg+xml")) {
                image = await loadImage(dataURL);
              } else {
                image = (_b = await tryCreateImageBitmap(blob)) != null ? _b : await loadImage(dataURL);
              }
              imageManager.addTask(() => {
                const analysis = analyzeImage(image);
                resolve(__spreadValues({
                  src: url,
                  dataURL: analysis.isLarge ? "" : dataURL,
                  width: image.width,
                  height: image.height
                }, analysis));
              });
            } catch (error) {
              reject(error);
            }
          });
        }
        async function getDataURL(url) {
          const parsedURL = new URL(url);
          if (parsedURL.origin === location.origin) {
            return await loadAsDataURL(url);
          }
          return await bgFetch({ url, responseType: "data-url" });
        }
        async function tryCreateImageBitmap(blob) {
          try {
            return await createImageBitmap(blob);
          } catch (err) {
            logWarn(
              "Unable to create image bitmap for type ".concat(blob.type, ": ").concat(String(err))
            );
            return null;
          }
        }
        const INCOMPLETE_DOC_LOADING_IMAGE_LIMIT = 256;
        let loadingImagesCount = 0;
        async function loadImage(url) {
          return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject("Unable to load image ".concat(url));
            if (++loadingImagesCount <= INCOMPLETE_DOC_LOADING_IMAGE_LIMIT || isReadyStateComplete()) {
              image.src = url;
            } else {
              addReadyStateCompleteListener(() => image.src = url);
            }
          });
        }
        const MAX_ANALYSIS_PIXELS_COUNT = 32 * 32;
        let canvas;
        let context;
        function createCanvas() {
          const maxWidth = MAX_ANALYSIS_PIXELS_COUNT;
          const maxHeight = MAX_ANALYSIS_PIXELS_COUNT;
          canvas = document.createElement("canvas");
          canvas.width = maxWidth;
          canvas.height = maxHeight;
          context = canvas.getContext("2d", { willReadFrequently: true });
          context.imageSmoothingEnabled = false;
        }
        function removeCanvas() {
          canvas = null;
          context = null;
        }
        const LARGE_IMAGE_PIXELS_COUNT = 512 * 512;
        function analyzeImage(image) {
          if (!canvas) {
            createCanvas();
          }
          let sw;
          let sh;
          if (image instanceof HTMLImageElement) {
            sw = image.naturalWidth;
            sh = image.naturalHeight;
          } else {
            sw = image.width;
            sh = image.height;
          }
          if (sw === 0 || sh === 0) {
            logWarn("Image is empty");
            return {
              isDark: false,
              isLight: false,
              isTransparent: false,
              isLarge: false
            };
          }
          const isLarge = sw * sh > LARGE_IMAGE_PIXELS_COUNT;
          const sourcePixelsCount = sw * sh;
          const k = Math.min(
            1,
            Math.sqrt(MAX_ANALYSIS_PIXELS_COUNT / sourcePixelsCount)
          );
          const width = Math.ceil(sw * k);
          const height = Math.ceil(sh * k);
          context.clearRect(0, 0, width, height);
          context.drawImage(image, 0, 0, sw, sh, 0, 0, width, height);
          const imageData = context.getImageData(0, 0, width, height);
          const d = imageData.data;
          const TRANSPARENT_ALPHA_THRESHOLD = 0.05;
          const DARK_LIGHTNESS_THRESHOLD = 0.4;
          const LIGHT_LIGHTNESS_THRESHOLD = 0.7;
          let transparentPixelsCount = 0;
          let darkPixelsCount = 0;
          let lightPixelsCount = 0;
          let i, x, y;
          let r, g, b, a;
          let l;
          for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
              i = 4 * (y * width + x);
              r = d[i + 0];
              g = d[i + 1];
              b = d[i + 2];
              a = d[i + 3];
              if (a / 255 < TRANSPARENT_ALPHA_THRESHOLD) {
                transparentPixelsCount++;
              } else {
                l = getSRGBLightness(r, g, b);
                if (l < DARK_LIGHTNESS_THRESHOLD) {
                  darkPixelsCount++;
                }
                if (l > LIGHT_LIGHTNESS_THRESHOLD) {
                  lightPixelsCount++;
                }
              }
            }
          }
          const totalPixelsCount = width * height;
          const opaquePixelsCount = totalPixelsCount - transparentPixelsCount;
          const DARK_IMAGE_THRESHOLD = 0.7;
          const LIGHT_IMAGE_THRESHOLD = 0.7;
          const TRANSPARENT_IMAGE_THRESHOLD = 0.1;
          return {
            isDark: darkPixelsCount / opaquePixelsCount >= DARK_IMAGE_THRESHOLD,
            isLight: lightPixelsCount / opaquePixelsCount >= LIGHT_IMAGE_THRESHOLD,
            isTransparent: transparentPixelsCount / totalPixelsCount >= TRANSPARENT_IMAGE_THRESHOLD,
            isLarge
          };
        }
        let isBlobURLSupported = null;
        let canUseProxy = false;
        let blobURLCheckRequested = false;
        const blobURLCheckAwaiters = [];
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => canUseProxy = true,
          { once: true }
        );
        async function requestBlobURLCheck() {
          if (!canUseProxy) {
            return;
          }
          if (blobURLCheckRequested) {
            return await new Promise(
              (resolve) => blobURLCheckAwaiters.push(resolve)
            );
          }
          blobURLCheckRequested = true;
          await new Promise((resolve) => {
            document.addEventListener(
              "__darkreader__blobURLCheckResponse",
              (e) => {
                isBlobURLSupported = e.detail.blobURLAllowed;
                resolve();
                blobURLCheckAwaiters.forEach((r) => r());
                blobURLCheckAwaiters.splice(0);
              },
              { once: true }
            );
            document.dispatchEvent(
              new CustomEvent("__darkreader__blobURLCheckRequest")
            );
          });
        }
        function isBlobURLCheckResultReady() {
          return isBlobURLSupported != null || !canUseProxy;
        }
        function onCSPError(err) {
          if (err.blockedURI === "blob") {
            isBlobURLSupported = false;
            document.removeEventListener("securitypolicyviolation", onCSPError);
          }
        }
        document.addEventListener("securitypolicyviolation", onCSPError);
        const objectURLs = /* @__PURE__ */ new Set();
        function getFilteredImageURL({ dataURL, width, height }, theme2) {
          if (dataURL.startsWith("data:image/svg+xml")) {
            dataURL = escapeXML(dataURL);
          }
          const matrix = getSVGFilterMatrixValue(theme2);
          const svg = [
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.concat(width, '" height="').concat(height, '">'),
            "<defs>",
            '<filter id="darkreader-image-filter">',
            '<feColorMatrix type="matrix" values="'.concat(matrix, '" />'),
            "</filter>",
            "</defs>",
            '<image width="'.concat(width, '" height="').concat(height, '" filter="url(#darkreader-image-filter)" xlink:href="').concat(dataURL, '" />'),
            "</svg>"
          ].join("");
          if (!isBlobURLSupported) {
            return "data:image/svg+xml;base64,".concat(btoa(svg));
          }
          const bytes = new Uint8Array(svg.length);
          for (let i = 0; i < svg.length; i++) {
            bytes[i] = svg.charCodeAt(i);
          }
          const blob = new Blob([bytes], { type: "image/svg+xml" });
          const objectURL = URL.createObjectURL(blob);
          objectURLs.add(objectURL);
          return objectURL;
        }
        const xmlEscapeChars = {
          "<": "&lt;",
          ">": "&gt;",
          "&": "&amp;",
          "'": "&apos;",
          '"': "&quot;"
        };
        function escapeXML(str) {
          return str.replace(/[<>&'"]/g, (c) => {
            var _a;
            return (_a = xmlEscapeChars[c]) != null ? _a : c;
          });
        }
        const dataURLBlobURLs = /* @__PURE__ */ new Map();
        function tryConvertDataURLToBlobSync(dataURL) {
          const colonIndex = dataURL.indexOf(":");
          const semicolonIndex = dataURL.indexOf(";", colonIndex + 1);
          const commaIndex = dataURL.indexOf(",", semicolonIndex + 1);
          const encoding = dataURL.substring(semicolonIndex + 1, commaIndex).toLocaleLowerCase();
          const mediaType = dataURL.substring(colonIndex + 1, semicolonIndex);
          if (encoding !== "base64" || !mediaType) {
            return null;
          }
          const characters = atob(dataURL.substring(commaIndex + 1));
          const bytes = new Uint8Array(characters.length);
          for (let i = 0; i < characters.length; i++) {
            bytes[i] = characters.charCodeAt(i);
          }
          return new Blob([bytes], { type: mediaType });
        }
        async function tryConvertDataURLToBlobURL(dataURL) {
          if (!isBlobURLSupported) {
            return null;
          }
          const hash = getHashCode(dataURL);
          let blobURL = dataURLBlobURLs.get(hash);
          if (blobURL) {
            return blobURL;
          }
          let blob = tryConvertDataURLToBlobSync(dataURL);
          if (!blob) {
            const response = await fetch(dataURL);
            blob = await response.blob();
          }
          blobURL = URL.createObjectURL(blob);
          dataURLBlobURLs.set(hash, blobURL);
          return blobURL;
        }
        function cleanImageProcessingCache() {
          imageManager && imageManager.stop();
          removeCanvas();
          objectURLs.forEach((u) => URL.revokeObjectURL(u));
          objectURLs.clear();
          dataURLBlobURLs.forEach((u) => URL.revokeObjectURL(u));
          dataURLBlobURLs.clear();
        }
        let variablesSheet;
        const registeredColors = /* @__PURE__ */ new Map();
        function registerVariablesSheet(sheet) {
          variablesSheet = sheet;
          const types = ["background", "text", "border"];
          registeredColors.forEach((registered) => {
            types.forEach((type) => {
              if (registered[type]) {
                const { variable, value } = registered[type];
                variablesSheet == null ? void 0 : variablesSheet.cssRules[0].style.setProperty(
                  variable,
                  value
                );
              }
            });
          });
        }
        function releaseVariablesSheet() {
          variablesSheet = null;
          clearColorPalette();
        }
        function getRegisteredVariableValue(type, registered) {
          return "var(".concat(registered[type].variable, ", ").concat(registered[type].value, ")");
        }
        function getRegisteredColor(type, parsed) {
          const hex = rgbToHexString(parsed);
          const registered = registeredColors.get(hex);
          if (registered == null ? void 0 : registered[type]) {
            return getRegisteredVariableValue(type, registered);
          }
          return null;
        }
        function registerColor(type, parsed, value) {
          var _a;
          const hex = rgbToHexString(parsed);
          let registered;
          if (registeredColors.has(hex)) {
            registered = registeredColors.get(hex);
          } else {
            const parsed2 = parseColorWithCache(hex);
            registered = { parsed: parsed2 };
            registeredColors.set(hex, registered);
          }
          const variable = "--darkreader-".concat(type, "-").concat(hex.replace("#", ""));
          registered[type] = { variable, value };
          if ((_a = variablesSheet == null ? void 0 : variablesSheet.cssRules[0]) == null ? void 0 : _a.style) {
            variablesSheet == null ? void 0 : variablesSheet.cssRules[0].style.setProperty(variable, value);
          }
          return getRegisteredVariableValue(type, registered);
        }
        function getColorPalette() {
          const background = [];
          const border = [];
          const text = [];
          registeredColors.forEach((registered) => {
            if (registered.background) {
              background.push(registered.parsed);
            }
            if (registered.border) {
              border.push(registered.parsed);
            }
            if (registered.text) {
              text.push(registered.parsed);
            }
          });
          return { background, border, text };
        }
        function clearColorPalette() {
          registeredColors.clear();
        }
        function getBgPole(theme2) {
          const isDarkScheme = theme2.mode === 1;
          const prop = isDarkScheme ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor";
          return theme2[prop];
        }
        function getFgPole(theme2) {
          const isDarkScheme = theme2.mode === 1;
          const prop = isDarkScheme ? "darkSchemeTextColor" : "lightSchemeTextColor";
          return theme2[prop];
        }
        const colorModificationCache = /* @__PURE__ */ new Map();
        function clearColorModificationCache() {
          colorModificationCache.clear();
        }
        const rgbCacheKeys = ["r", "g", "b", "a"];
        const themeCacheKeys$1 = [
          "mode",
          "brightness",
          "contrast",
          "grayscale",
          "sepia",
          "darkSchemeBackgroundColor",
          "darkSchemeTextColor",
          "lightSchemeBackgroundColor",
          "lightSchemeTextColor"
        ];
        function getCacheId(rgb, theme2) {
          let resultId = "";
          rgbCacheKeys.forEach((key) => {
            resultId += "".concat(rgb[key], ";");
          });
          themeCacheKeys$1.forEach((key) => {
            resultId += "".concat(theme2[key], ";");
          });
          return resultId;
        }
        function modifyColorWithCache(rgb, theme2, modifyHSL, poleColor, anotherPoleColor) {
          let fnCache;
          if (colorModificationCache.has(modifyHSL)) {
            fnCache = colorModificationCache.get(modifyHSL);
          } else {
            fnCache = /* @__PURE__ */ new Map();
            colorModificationCache.set(modifyHSL, fnCache);
          }
          const id = getCacheId(rgb, theme2);
          if (fnCache.has(id)) {
            return fnCache.get(id);
          }
          const hsl = rgbToHSL(rgb);
          const pole = poleColor == null ? null : parseToHSLWithCache(poleColor);
          const anotherPole = anotherPoleColor == null ? null : parseToHSLWithCache(anotherPoleColor);
          const modified = modifyHSL(hsl, pole, anotherPole);
          const { r, g, b, a } = hslToRGB(modified);
          const matrix = createFilterMatrix(theme2);
          const [rf, gf, bf] = applyColorMatrix([r, g, b], matrix);
          const color = a === 1 ? rgbToHexString({ r: rf, g: gf, b: bf }) : rgbToString({ r: rf, g: gf, b: bf, a });
          fnCache.set(id, color);
          return color;
        }
        function modifyAndRegisterColor(type, rgb, theme2, modifier) {
          const registered = getRegisteredColor(type, rgb);
          if (registered) {
            return registered;
          }
          const value = modifier(rgb, theme2);
          return registerColor(type, rgb, value);
        }
        function modifyLightSchemeColor(rgb, theme2) {
          const poleBg = getBgPole(theme2);
          const poleFg = getFgPole(theme2);
          return modifyColorWithCache(
            rgb,
            theme2,
            modifyLightModeHSL,
            poleFg,
            poleBg
          );
        }
        function modifyLightModeHSL({ h, s, l, a }, poleFg, poleBg) {
          const isDark = l < 0.5;
          let isNeutral;
          if (isDark) {
            isNeutral = l < 0.2 || s < 0.12;
          } else {
            const isBlue = h > 200 && h < 280;
            isNeutral = s < 0.24 || l > 0.8 && isBlue;
          }
          let hx = h;
          let sx = l;
          if (isNeutral) {
            if (isDark) {
              hx = poleFg.h;
              sx = poleFg.s;
            } else {
              hx = poleBg.h;
              sx = poleBg.s;
            }
          }
          const lx = scale(l, 0, 1, poleFg.l, poleBg.l);
          return { h: hx, s: sx, l: lx, a };
        }
        const MAX_BG_LIGHTNESS = 0.4;
        function modifyBgHSL({ h, s, l, a }, pole) {
          const isDark = l < 0.5;
          const isBlue = h > 200 && h < 280;
          const isNeutral = s < 0.12 || l > 0.8 && isBlue;
          if (isDark) {
            const lx2 = scale(l, 0, 0.5, 0, MAX_BG_LIGHTNESS);
            if (isNeutral) {
              const hx2 = pole.h;
              const sx = pole.s;
              return { h: hx2, s: sx, l: lx2, a };
            }
            return { h, s, l: lx2, a };
          }
          let lx = scale(l, 0.5, 1, MAX_BG_LIGHTNESS, pole.l);
          if (isNeutral) {
            const hx2 = pole.h;
            const sx = pole.s;
            return { h: hx2, s: sx, l: lx, a };
          }
          let hx = h;
          const isYellow = h > 60 && h < 180;
          if (isYellow) {
            const isCloserToGreen = h > 120;
            if (isCloserToGreen) {
              hx = scale(h, 120, 180, 135, 180);
            } else {
              hx = scale(h, 60, 120, 60, 105);
            }
          }
          if (hx > 40 && hx < 80) {
            lx *= 0.75;
          }
          return { h: hx, s, l: lx, a };
        }
        function _modifyBackgroundColor(rgb, theme2) {
          if (theme2.mode === 0) {
            return modifyLightSchemeColor(rgb, theme2);
          }
          const pole = getBgPole(theme2);
          return modifyColorWithCache(
            rgb,
            __spreadProps(__spreadValues({}, theme2), { mode: 0 }),
            modifyBgHSL,
            pole
          );
        }
        function modifyBackgroundColor(rgb, theme2, shouldRegisterColorVariable = true) {
          if (!shouldRegisterColorVariable) {
            return _modifyBackgroundColor(rgb, theme2);
          }
          return modifyAndRegisterColor(
            "background",
            rgb,
            theme2,
            _modifyBackgroundColor
          );
        }
        const MIN_FG_LIGHTNESS = 0.55;
        function modifyBlueFgHue(hue) {
          return scale(hue, 205, 245, 205, 220);
        }
        function modifyFgHSL({ h, s, l, a }, pole) {
          const isLight = l > 0.5;
          const isNeutral = l < 0.2 || s < 0.24;
          const isBlue = !isNeutral && h > 205 && h < 245;
          if (isLight) {
            const lx2 = scale(l, 0.5, 1, MIN_FG_LIGHTNESS, pole.l);
            if (isNeutral) {
              const hx3 = pole.h;
              const sx = pole.s;
              return { h: hx3, s: sx, l: lx2, a };
            }
            let hx2 = h;
            if (isBlue) {
              hx2 = modifyBlueFgHue(h);
            }
            return { h: hx2, s, l: lx2, a };
          }
          if (isNeutral) {
            const hx2 = pole.h;
            const sx = pole.s;
            const lx2 = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
            return { h: hx2, s: sx, l: lx2, a };
          }
          let hx = h;
          let lx;
          if (isBlue) {
            hx = modifyBlueFgHue(h);
            lx = scale(l, 0, 0.5, pole.l, Math.min(1, MIN_FG_LIGHTNESS + 0.05));
          } else {
            lx = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
          }
          return { h: hx, s, l: lx, a };
        }
        function _modifyForegroundColor(rgb, theme2) {
          if (theme2.mode === 0) {
            return modifyLightSchemeColor(rgb, theme2);
          }
          const pole = getFgPole(theme2);
          return modifyColorWithCache(
            rgb,
            __spreadProps(__spreadValues({}, theme2), { mode: 0 }),
            modifyFgHSL,
            pole
          );
        }
        function modifyForegroundColor(rgb, theme2, shouldRegisterColorVariable = true) {
          if (!shouldRegisterColorVariable) {
            return _modifyForegroundColor(rgb, theme2);
          }
          return modifyAndRegisterColor(
            "text",
            rgb,
            theme2,
            _modifyForegroundColor
          );
        }
        function modifyBorderHSL({ h, s, l, a }, poleFg, poleBg) {
          const isDark = l < 0.5;
          const isNeutral = l < 0.2 || s < 0.24;
          let hx = h;
          let sx = s;
          if (isNeutral) {
            if (isDark) {
              hx = poleFg.h;
              sx = poleFg.s;
            } else {
              hx = poleBg.h;
              sx = poleBg.s;
            }
          }
          const lx = scale(l, 0, 1, 0.5, 0.2);
          return { h: hx, s: sx, l: lx, a };
        }
        function _modifyBorderColor(rgb, theme2) {
          if (theme2.mode === 0) {
            return modifyLightSchemeColor(rgb, theme2);
          }
          const poleFg = getFgPole(theme2);
          const poleBg = getBgPole(theme2);
          return modifyColorWithCache(
            rgb,
            __spreadProps(__spreadValues({}, theme2), { mode: 0 }),
            modifyBorderHSL,
            poleFg,
            poleBg
          );
        }
        function modifyBorderColor(rgb, theme2, shouldRegisterColorVariable = true) {
          if (!shouldRegisterColorVariable) {
            return _modifyBorderColor(rgb, theme2);
          }
          return modifyAndRegisterColor("border", rgb, theme2, _modifyBorderColor);
        }
        function modifyShadowColor(rgb, theme2) {
          return modifyBackgroundColor(rgb, theme2);
        }
        function modifyGradientColor(rgb, theme2) {
          return modifyBackgroundColor(rgb, theme2);
        }
        function getPriority(ruleStyle, property) {
          return Boolean(ruleStyle && ruleStyle.getPropertyPriority(property));
        }
        function getModifiableCSSDeclaration(property, value, rule, variablesStore2, ignoreImageSelectors, isCancelled) {
          let modifier = null;
          if (property.startsWith("--")) {
            modifier = getVariableModifier(
              variablesStore2,
              property,
              value,
              rule,
              ignoreImageSelectors,
              isCancelled
            );
          } else if (value.includes("var(")) {
            modifier = getVariableDependantModifier(
              variablesStore2,
              property,
              value
            );
          } else if (property === "color-scheme") {
            modifier = getColorSchemeModifier();
          } else if (property === "scrollbar-color") {
            modifier = getScrollbarColorModifier(value);
          } else if (property.includes("color") && property !== "-webkit-print-color-adjust" || property === "fill" || property === "stroke" || property === "stop-color") {
            if (property.startsWith("border") && property !== "border-color" && value === "initial") {
              const borderSideProp = property.substring(
                0,
                property.length - 6
              );
              const borderSideVal = rule.style.getPropertyValue(borderSideProp);
              if (borderSideVal.startsWith("0px") || borderSideVal === "none") {
                property = borderSideProp;
                modifier = borderSideVal;
              } else {
                modifier = value;
              }
            } else {
              modifier = getColorModifier(property, value, rule);
            }
          } else if (property === "background-image" || property === "list-style-image") {
            modifier = getBgImageModifier(
              value,
              rule,
              ignoreImageSelectors,
              isCancelled
            );
          } else if (property.includes("shadow")) {
            modifier = getShadowModifier(value);
          }
          if (!modifier) {
            return null;
          }
          return {
            property,
            value: modifier,
            important: getPriority(rule.style, property),
            sourceValue: value
          };
        }
        function joinSelectors(...selectors) {
          return selectors.filter(Boolean).join(", ");
        }
        const hostsWithOddScrollbars = ["calendar.google.com"];
        function getModifiedUserAgentStyle(theme2, isIFrame2, styleSystemControls) {
          const lines = [];
          if (!isIFrame2) {
            lines.push("html {");
            lines.push(
              "    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme2), " !important;")
            );
            lines.push("}");
          }
          if (isCSSColorSchemePropSupported && theme2.mode === 1) {
            lines.push("html {");
            lines.push("    color-scheme: dark !important;");
            lines.push("}");
            lines.push("iframe {");
            lines.push("    color-scheme: dark !important;");
            lines.push("}");
          }
          const bgSelectors = joinSelectors(
            isIFrame2 ? "" : "html, body",
            styleSystemControls ? "input, textarea, select, button, dialog" : ""
          );
          if (bgSelectors) {
            lines.push("".concat(bgSelectors, " {"));
            lines.push(
              "    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme2), ";")
            );
            lines.push("}");
          }
          lines.push(
            "".concat(joinSelectors("html, body", styleSystemControls ? "input, textarea, select, button" : ""), " {")
          );
          lines.push(
            "    border-color: ".concat(modifyBorderColor({ r: 76, g: 76, b: 76 }, theme2), ";")
          );
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme2), ";")
          );
          lines.push("}");
          lines.push("a {");
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 64, b: 255 }, theme2), ";")
          );
          lines.push("}");
          lines.push("table {");
          lines.push(
            "    border-color: ".concat(modifyBorderColor({ r: 128, g: 128, b: 128 }, theme2), ";")
          );
          lines.push("}");
          lines.push("mark {");
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme2), ";")
          );
          lines.push("}");
          lines.push("::placeholder {");
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 169, g: 169, b: 169 }, theme2), ";")
          );
          lines.push("}");
          lines.push("input:-webkit-autofill,");
          lines.push("textarea:-webkit-autofill,");
          lines.push("select:-webkit-autofill {");
          lines.push(
            "    background-color: ".concat(modifyBackgroundColor({ r: 250, g: 255, b: 189 }, theme2), " !important;")
          );
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme2), " !important;")
          );
          lines.push("}");
          if (theme2.scrollbarColor && !hostsWithOddScrollbars.includes(location.hostname)) {
            lines.push(getModifiedScrollbarStyle(theme2));
          }
          if (theme2.selectionColor) {
            lines.push(getModifiedSelectionStyle(theme2));
          }
          if (isLayerRuleSupported) {
            lines.unshift("@layer {");
            lines.push("}");
          }
          return lines.join("\n");
        }
        function getSelectionColor(theme2) {
          let backgroundColorSelection;
          let foregroundColorSelection;
          if (theme2.selectionColor === "auto") {
            backgroundColorSelection = modifyBackgroundColor(
              { r: 0, g: 96, b: 212 },
              __spreadProps(__spreadValues({}, theme2), { grayscale: 0 })
            );
            foregroundColorSelection = modifyForegroundColor(
              { r: 255, g: 255, b: 255 },
              __spreadProps(__spreadValues({}, theme2), { grayscale: 0 })
            );
          } else {
            const rgb = parseColorWithCache(theme2.selectionColor);
            const hsl = rgbToHSL(rgb);
            backgroundColorSelection = theme2.selectionColor;
            if (hsl.l < 0.5) {
              foregroundColorSelection = "#FFF";
            } else {
              foregroundColorSelection = "#000";
            }
          }
          return { backgroundColorSelection, foregroundColorSelection };
        }
        function getModifiedSelectionStyle(theme2) {
          const lines = [];
          const modifiedSelectionColor = getSelectionColor(theme2);
          const backgroundColorSelection = modifiedSelectionColor.backgroundColorSelection;
          const foregroundColorSelection = modifiedSelectionColor.foregroundColorSelection;
          ["::selection", "::-moz-selection"].forEach((selection) => {
            lines.push("".concat(selection, " {"));
            lines.push(
              "    background-color: ".concat(backgroundColorSelection, " !important;")
            );
            lines.push("    color: ".concat(foregroundColorSelection, " !important;"));
            lines.push("}");
          });
          return lines.join("\n");
        }
        function getModifiedScrollbarStyle(theme2) {
          let colorTrack;
          let colorThumb;
          if (theme2.scrollbarColor === "auto") {
            colorTrack = modifyBackgroundColor({ r: 241, g: 241, b: 241 }, theme2);
            colorThumb = modifyBackgroundColor({ r: 176, g: 176, b: 176 }, theme2);
          } else {
            const rgb = parseColorWithCache(theme2.scrollbarColor);
            const hsl = rgbToHSL(rgb);
            const darken = (darker) => __spreadProps(__spreadValues({}, hsl), {
              l: clamp(hsl.l - darker, 0, 1)
            });
            colorTrack = hslToString(darken(0.4));
            colorThumb = hslToString(hsl);
          }
          return [
            "* {",
            "    scrollbar-color: ".concat(colorThumb, " ").concat(colorTrack, ";"),
            "}"
          ].join("\n");
        }
        function getModifiedFallbackStyle(theme2, { strict }) {
          const factory = defaultFallbackFactory;
          return factory(theme2, { strict });
        }
        function defaultFallbackFactory(theme2, { strict }) {
          const lines = [];
          lines.push(
            "html, body, ".concat(strict ? "body :not(iframe)" : "body > :not(iframe)", " {")
          );
          lines.push(
            "    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme2), " !important;")
          );
          lines.push(
            "    border-color: ".concat(modifyBorderColor({ r: 64, g: 64, b: 64 }, theme2), " !important;")
          );
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme2), " !important;")
          );
          lines.push("}");
          lines.push('div[style*="background-color: rgb(135, 135, 135)"] {');
          lines.push("    background-color: #878787 !important;");
          lines.push("}");
          return lines.join("\n");
        }
        const unparsableColors = /* @__PURE__ */ new Set([
          "inherit",
          "transparent",
          "initial",
          "currentcolor",
          "none",
          "unset",
          "auto"
        ]);
        function getColorModifier(prop, value, rule) {
          if (unparsableColors.has(value.toLowerCase())) {
            return value;
          }
          const rgb = parseColorWithCache(value);
          if (!rgb) {
            logWarn("Couldn't parse color", value);
            return null;
          }
          if (prop.includes("background")) {
            if (rule.style.webkitMaskImage && rule.style.webkitMaskImage !== "none" || rule.style.webkitMask && !rule.style.webkitMask.startsWith("none") || rule.style.mask && rule.style.mask !== "none" || rule.style.getPropertyValue("mask-image") && rule.style.getPropertyValue("mask-image") !== "none") {
              return (theme2) => modifyForegroundColor(rgb, theme2);
            }
            return (theme2) => modifyBackgroundColor(rgb, theme2);
          }
          if (prop.includes("border") || prop.includes("outline")) {
            return (theme2) => modifyBorderColor(rgb, theme2);
          }
          return (theme2) => modifyForegroundColor(rgb, theme2);
        }
        const imageDetailsCache = /* @__PURE__ */ new Map();
        const awaitingForImageLoading = /* @__PURE__ */ new Map();
        let didTryLoadCache = false;
        function shouldIgnoreImage(selectorText, selectors) {
          if (!selectorText || selectors.length === 0) {
            return false;
          }
          if (selectors.some((s) => s === "*")) {
            return true;
          }
          const ruleSelectors = selectorText.split(/,\s*/g);
          for (let i = 0; i < selectors.length; i++) {
            const ignoredSelector = selectors[i];
            if (ignoredSelector.startsWith("^")) {
              const beginning = ignoredSelector.slice(1);
              if (ruleSelectors.some((s) => s.startsWith(beginning))) {
                return true;
              }
            } else if (ignoredSelector.endsWith("$")) {
              const ending = ignoredSelector.slice(
                0,
                ignoredSelector.length - 1
              );
              if (ruleSelectors.some((s) => s.endsWith(ending))) {
                return true;
              }
            } else if (ruleSelectors.some((s) => s === ignoredSelector)) {
              return true;
            }
          }
          return false;
        }
        const imageSelectorQueue = /* @__PURE__ */ new Map();
        const imageSelectorValues = /* @__PURE__ */ new Map();
        const imageSelectorNodeQueue = /* @__PURE__ */ new Set();
        let imageSelectorQueueFrameId = null;
        let classObserver = null;
        function checkImageSelectors(node) {
          for (const [selector, callbacks] of imageSelectorQueue) {
            if (node.querySelector(selector) || node instanceof Element && node.matches(selector)) {
              imageSelectorQueue.delete(selector);
              callbacks.forEach((cb) => cb());
            }
          }
          if (!classObserver) {
            classObserver = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                imageSelectorNodeQueue.add(mutation.target);
                if (!imageSelectorQueueFrameId) {
                  imageSelectorQueueFrameId = requestAnimationFrame(
                    () => {
                      imageSelectorNodeQueue.forEach((element) => {
                        checkImageSelectors(element);
                      });
                      imageSelectorNodeQueue.clear();
                      imageSelectorQueueFrameId = null;
                    }
                  );
                }
              });
            });
            classObserver.observe(document.documentElement, {
              attributes: true,
              attributeFilter: ["class"],
              subtree: true
            });
          }
        }
        function getBgImageModifier(value, rule, ignoreImageSelectors, isCancelled) {
          try {
            if (shouldIgnoreImage(rule.selectorText, ignoreImageSelectors)) {
              return value;
            }
            const gradients = parseGradient(value);
            const urls = getMatches(cssURLRegex, value);
            if (urls.length === 0 && gradients.length === 0) {
              return value;
            }
            const getIndices = (matches2) => {
              let index = 0;
              return matches2.map((match) => {
                const valueIndex = value.indexOf(match, index);
                index = valueIndex + match.length;
                return { match, index: valueIndex };
              });
            };
            const matches = gradients.map((i) => __spreadValues({ type: "gradient" }, i)).concat(
              getIndices(urls).map((i) => __spreadValues({
                type: "url",
                offset: 0
              }, i))
            ).sort((a, b) => a.index > b.index ? 1 : -1);
            const getGradientModifier = (gradient) => {
              const { typeGradient, match, hasComma } = gradient;
              const partsRegex = /([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?([^\(\), ]|( (?!calc)))*),?/g;
              const colorStopRegex = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/;
              const parts = getMatches(partsRegex, match, 1).map((part) => {
                part = part.trim();
                let rgb = parseColorWithCache(part);
                if (rgb) {
                  return (theme2) => modifyGradientColor(rgb, theme2);
                }
                const space = part.lastIndexOf(" ");
                rgb = parseColorWithCache(part.substring(0, space));
                if (rgb) {
                  return (theme2) => "".concat(modifyGradientColor(rgb, theme2), " ").concat(part.substring(space + 1));
                }
                const colorStopMatch = part.match(colorStopRegex);
                if (colorStopMatch) {
                  rgb = parseColorWithCache(colorStopMatch[3]);
                  if (rgb) {
                    return (theme2) => "".concat(colorStopMatch[1], "(").concat(colorStopMatch[2] ? "".concat(colorStopMatch[2], ", ") : "").concat(modifyGradientColor(rgb, theme2), ")");
                  }
                }
                return () => part;
              });
              return (theme2) => {
                return "".concat(typeGradient, "(").concat(parts.map((modify) => modify(theme2)).join(", "), ")").concat(hasComma ? ", " : "");
              };
            };
            const getURLModifier = (urlValue) => {
              var _a;
              if (!didTryLoadCache) {
                didTryLoadCache = true;
                readImageDetailsCache(imageDetailsCache);
              }
              let url = getCSSURLValue(urlValue);
              const isURLEmpty = url.length === 0;
              const { parentStyleSheet } = rule;
              const ownerNode = parentStyleSheet == null ? void 0 : parentStyleSheet.ownerNode;
              const scope = (_a = parentStyleSheet && getSheetScope(parentStyleSheet)) != null ? _a : document;
              const baseURL = parentStyleSheet && parentStyleSheet.href ? getCSSBaseBath(parentStyleSheet.href) : (ownerNode == null ? void 0 : ownerNode.baseURI) || location.origin;
              url = getAbsoluteURL(baseURL, url);
              return async (theme2) => {
                if (isURLEmpty) {
                  return "url('')";
                }
                let selector = rule.selectorText;
                if (selector) {
                  if (selector.includes("::before")) {
                    selector = selector.replaceAll("::before", "");
                  }
                  if (selector.includes("::after")) {
                    selector = selector.replaceAll("::after", "");
                  }
                  if (!scope.querySelector(selector)) {
                    await new Promise((resolve) => {
                      if (imageSelectorQueue.has(selector)) {
                        imageSelectorQueue.get(selector).push(resolve);
                      } else {
                        imageSelectorQueue.set(selector, [resolve]);
                        imageSelectorValues.set(selector, urlValue);
                      }
                    });
                  }
                }
                let imageDetails = null;
                if (imageDetailsCache.has(url)) {
                  imageDetails = imageDetailsCache.get(url);
                } else {
                  try {
                    if (!isBlobURLCheckResultReady()) {
                      await requestBlobURLCheck();
                    }
                    if (awaitingForImageLoading.has(url)) {
                      const awaiters = awaitingForImageLoading.get(url);
                      imageDetails = await new Promise(
                        (resolve) => awaiters.push(resolve)
                      );
                      if (!imageDetails) {
                        return null;
                      }
                    } else {
                      awaitingForImageLoading.set(url, []);
                      imageDetails = await getImageDetails(url);
                      imageDetailsCache.set(url, imageDetails);
                      writeImageDetailsCache(url, imageDetails);
                      awaitingForImageLoading.get(url).forEach(
                        (resolve) => resolve(imageDetails)
                      );
                      awaitingForImageLoading.delete(url);
                    }
                    if (isCancelled()) {
                      return null;
                    }
                  } catch (err) {
                    logWarn(err);
                    if (awaitingForImageLoading.has(url)) {
                      awaitingForImageLoading.get(url).forEach((resolve) => resolve(null));
                      awaitingForImageLoading.delete(url);
                    }
                  }
                }
                if (imageDetails) {
                  const bgImageValue = getBgImageValue(
                    imageDetails,
                    theme2
                  );
                  if (bgImageValue) {
                    return bgImageValue;
                  }
                }
                if (url.startsWith("data:")) {
                  const blobURL = await tryConvertDataURLToBlobURL(url);
                  if (blobURL) {
                    return 'url("'.concat(blobURL, '")');
                  }
                }
                return 'url("'.concat(url, '")');
              };
            };
            const getBgImageValue = (imageDetails, theme2) => {
              const { isDark, isLight, isTransparent, isLarge, width } = imageDetails;
              let result;
              const logSrc = imageDetails.src.startsWith("data:") ? "data:" : imageDetails.src;
              if (isLarge && isLight && !isTransparent && theme2.mode === 1) {
                logInfo("Hiding large light image ".concat(logSrc));
                result = "none";
              } else if (isDark && isTransparent && theme2.mode === 1 && width > 2) {
                logInfo("Inverting dark image ".concat(logSrc));
                const inverted = getFilteredImageURL(imageDetails, __spreadProps(__spreadValues({}, theme2), {
                  sepia: clamp(theme2.sepia + 10, 0, 100)
                }));
                result = 'url("'.concat(inverted, '")');
              } else if (isLight && !isTransparent && theme2.mode === 1) {
                logInfo("Dimming light image ".concat(logSrc));
                const dimmed = getFilteredImageURL(imageDetails, theme2);
                result = 'url("'.concat(dimmed, '")');
              } else if (theme2.mode === 0 && isLight) {
                logInfo("Applying filter to image ".concat(logSrc));
                const filtered = getFilteredImageURL(imageDetails, __spreadProps(__spreadValues({}, theme2), {
                  brightness: clamp(theme2.brightness - 10, 5, 200),
                  sepia: clamp(theme2.sepia + 10, 0, 100)
                }));
                result = 'url("'.concat(filtered, '")');
              } else {
                logInfo("Not modifying the image ".concat(logSrc));
                result = null;
              }
              return result;
            };
            const modifiers = [];
            let matchIndex = 0;
            let prevHasComma = false;
            matches.forEach(
              ({ type, match, index, typeGradient, hasComma, offset }, i) => {
                const matchStart = index;
                const prefixStart = matchIndex;
                const matchEnd = matchStart + match.length + offset;
                matchIndex = matchEnd;
                if (prefixStart !== matchStart) {
                  if (prevHasComma) {
                    modifiers.push(() => {
                      let betweenValue = value.substring(
                        prefixStart,
                        matchStart
                      );
                      if (betweenValue[0] === ",") {
                        betweenValue = betweenValue.substring(1);
                      }
                      return betweenValue;
                    });
                  } else {
                    modifiers.push(
                      () => value.substring(prefixStart, matchStart)
                    );
                  }
                }
                prevHasComma = hasComma || false;
                if (type === "url") {
                  modifiers.push(getURLModifier(match));
                } else if (type === "gradient") {
                  modifiers.push(
                    getGradientModifier({
                      match,
                      index,
                      typeGradient,
                      hasComma: hasComma || false,
                      offset
                    })
                  );
                }
                if (i === matches.length - 1) {
                  modifiers.push(() => value.substring(matchEnd));
                }
              }
            );
            return (theme2) => {
              const results = modifiers.filter(Boolean).map((modify) => modify(theme2));
              if (results.some((r) => r instanceof Promise)) {
                return Promise.all(results).then((asyncResults) => {
                  return asyncResults.filter(Boolean).join("");
                });
              }
              const combinedResult = results.join("");
              if (combinedResult.endsWith(", initial")) {
                return combinedResult.slice(0, -9);
              }
              return combinedResult;
            };
          } catch (err) {
            logWarn("Unable to parse gradient ".concat(value), err);
            return null;
          }
        }
        function getShadowModifierWithInfo(value) {
          try {
            let index = 0;
            const colorMatches = getMatches(
              /(^|\s)(?!calc)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi,
              value,
              2
            );
            let notParsed = 0;
            const modifiers = colorMatches.map((match, i) => {
              const prefixIndex = index;
              const matchIndex = value.indexOf(match, index);
              const matchEnd = matchIndex + match.length;
              index = matchEnd;
              const rgb = parseColorWithCache(match);
              if (!rgb) {
                notParsed++;
                return () => value.substring(prefixIndex, matchEnd);
              }
              return (theme2) => "".concat(value.substring(prefixIndex, matchIndex)).concat(modifyShadowColor(rgb, theme2)).concat(i === colorMatches.length - 1 ? value.substring(matchEnd) : "");
            });
            return (theme2) => {
              const modified = modifiers.map((modify) => modify(theme2)).join("");
              return {
                matchesLength: colorMatches.length,
                unparsableMatchesLength: notParsed,
                result: modified
              };
            };
          } catch (err) {
            logWarn("Unable to parse shadow ".concat(value), err);
            return null;
          }
        }
        function getShadowModifier(value) {
          const shadowModifier = getShadowModifierWithInfo(value);
          if (!shadowModifier) {
            return null;
          }
          return (theme2) => shadowModifier(theme2).result;
        }
        function getScrollbarColorModifier(value) {
          const colorsMatch = value.match(
            /^\s*([a-z]+(\(.*\))?)\s+([a-z]+(\(.*\))?)\s*$/
          );
          if (!colorsMatch) {
            return value;
          }
          const thumb = parseColorWithCache(colorsMatch[1]);
          const track = parseColorWithCache(colorsMatch[3]);
          if (!thumb || !track) {
            logWarn(
              "Couldn't parse color",
              ...[thumb, track].filter((c) => !c)
            );
            return null;
          }
          return (theme2) => "".concat(modifyForegroundColor(thumb, theme2), " ").concat(modifyBackgroundColor(thumb, theme2));
        }
        function getColorSchemeModifier() {
          return (theme2) => theme2.mode === 0 ? "dark light" : "dark";
        }
        function getVariableModifier(variablesStore2, prop, value, rule, ignoredImgSelectors, isCancelled) {
          return variablesStore2.getModifierForVariable({
            varName: prop,
            sourceValue: value,
            rule,
            ignoredImgSelectors,
            isCancelled
          });
        }
        function getVariableDependantModifier(variablesStore2, prop, value) {
          return variablesStore2.getModifierForVarDependant(prop, value);
        }
        function cleanModificationCache() {
          clearColorModificationCache();
          imageDetailsCache.clear();
          cleanImageProcessingCache();
          awaitingForImageLoading.clear();
          imageSelectorQueue.clear();
          classObserver == null ? void 0 : classObserver.disconnect();
          classObserver = null;
        }
        const VAR_TYPE_BG_COLOR = 1 << 0;
        const VAR_TYPE_TEXT_COLOR = 1 << 1;
        const VAR_TYPE_BORDER_COLOR = 1 << 2;
        const VAR_TYPE_BG_IMG = 1 << 3;
        class VariablesStore {
          constructor() {
            this.varTypes = /* @__PURE__ */ new Map();
            this.rulesQueue = /* @__PURE__ */ new Set();
            this.inlineStyleQueue = [];
            this.definedVars = /* @__PURE__ */ new Set();
            this.varRefs = /* @__PURE__ */ new Map();
            this.unknownColorVars = /* @__PURE__ */ new Set();
            this.unknownBgVars = /* @__PURE__ */ new Set();
            this.undefinedVars = /* @__PURE__ */ new Set();
            this.initialVarTypes = /* @__PURE__ */ new Map();
            this.changedTypeVars = /* @__PURE__ */ new Set();
            this.typeChangeSubscriptions = /* @__PURE__ */ new Map();
            this.unstableVarValues = /* @__PURE__ */ new Map();
          }
          clear() {
            this.varTypes.clear();
            this.rulesQueue.clear();
            this.inlineStyleQueue.splice(0);
            this.definedVars.clear();
            this.varRefs.clear();
            this.unknownColorVars.clear();
            this.unknownBgVars.clear();
            this.undefinedVars.clear();
            this.initialVarTypes.clear();
            this.changedTypeVars.clear();
            this.typeChangeSubscriptions.clear();
            this.unstableVarValues.clear();
          }
          isVarType(varName, typeNum) {
            return this.varTypes.has(varName) && (this.varTypes.get(varName) & typeNum) > 0;
          }
          addRulesForMatching(rules) {
            this.rulesQueue.add(rules);
          }
          addInlineStyleForMatching(style) {
            this.inlineStyleQueue.push(style);
          }
          matchVariablesAndDependents() {
            if (this.rulesQueue.size === 0 && this.inlineStyleQueue.length === 0) {
              return;
            }
            this.changedTypeVars.clear();
            this.initialVarTypes = new Map(this.varTypes);
            this.collectRootVariables();
            this.collectVariablesAndVarDep();
            this.collectRootVarDependents();
            this.varRefs.forEach((refs, v) => {
              refs.forEach((r) => {
                if (this.varTypes.has(v)) {
                  this.resolveVariableType(r, this.varTypes.get(v));
                }
              });
            });
            this.unknownColorVars.forEach((v) => {
              if (this.unknownBgVars.has(v)) {
                this.unknownColorVars.delete(v);
                this.unknownBgVars.delete(v);
                this.resolveVariableType(v, VAR_TYPE_BG_COLOR);
              } else if (this.isVarType(
                v,
                VAR_TYPE_BG_COLOR | VAR_TYPE_TEXT_COLOR | VAR_TYPE_BORDER_COLOR
              )) {
                this.unknownColorVars.delete(v);
              } else {
                this.undefinedVars.add(v);
              }
            });
            this.unknownBgVars.forEach((v) => {
              const hasColor = this.findVarRef(v, (ref) => {
                return this.unknownColorVars.has(ref) || this.isVarType(
                  ref,
                  VAR_TYPE_BG_COLOR | VAR_TYPE_TEXT_COLOR | VAR_TYPE_BORDER_COLOR
                );
              }) != null;
              if (hasColor) {
                this.iterateVarRefs(v, (ref) => {
                  this.resolveVariableType(ref, VAR_TYPE_BG_COLOR);
                });
              } else if (this.isVarType(v, VAR_TYPE_BG_COLOR | VAR_TYPE_BG_IMG)) {
                this.unknownBgVars.delete(v);
              } else {
                this.undefinedVars.add(v);
              }
            });
            this.changedTypeVars.forEach((varName) => {
              if (this.typeChangeSubscriptions.has(varName)) {
                this.typeChangeSubscriptions.get(varName).forEach((callback) => {
                  callback();
                });
              }
            });
            this.changedTypeVars.clear();
          }
          getModifierForVariable(options) {
            return (theme2) => {
              const {
                varName,
                sourceValue,
                rule,
                ignoredImgSelectors,
                isCancelled
              } = options;
              const getDeclarations = () => {
                const declarations = [];
                const addModifiedValue = (typeNum, varNameWrapper, colorModifier) => {
                  if (!this.isVarType(varName, typeNum)) {
                    return;
                  }
                  const property = varNameWrapper(varName);
                  let modifiedValue;
                  if (isVarDependant(sourceValue)) {
                    if (isConstructedColorVar(sourceValue)) {
                      let value = insertVarValues(
                        sourceValue,
                        this.unstableVarValues
                      );
                      if (!value) {
                        value = typeNum === VAR_TYPE_BG_COLOR ? "#ffffff" : "#000000";
                      }
                      modifiedValue = colorModifier(value, theme2);
                    } else {
                      modifiedValue = replaceCSSVariablesNames(
                        sourceValue,
                        (v) => varNameWrapper(v),
                        (fallback) => colorModifier(fallback, theme2)
                      );
                    }
                  } else {
                    modifiedValue = colorModifier(sourceValue, theme2);
                  }
                  declarations.push({
                    property,
                    value: modifiedValue
                  });
                };
                addModifiedValue(
                  VAR_TYPE_BG_COLOR,
                  wrapBgColorVariableName,
                  tryModifyBgColor
                );
                addModifiedValue(
                  VAR_TYPE_TEXT_COLOR,
                  wrapTextColorVariableName,
                  tryModifyTextColor
                );
                addModifiedValue(
                  VAR_TYPE_BORDER_COLOR,
                  wrapBorderColorVariableName,
                  tryModifyBorderColor
                );
                if (this.isVarType(varName, VAR_TYPE_BG_IMG)) {
                  const property = wrapBgImgVariableName(varName);
                  let modifiedValue = sourceValue;
                  if (isVarDependant(sourceValue)) {
                    modifiedValue = replaceCSSVariablesNames(
                      sourceValue,
                      (v) => wrapBgColorVariableName(v),
                      (fallback) => tryModifyBgColor(fallback, theme2)
                    );
                  }
                  const bgModifier = getBgImageModifier(
                    modifiedValue,
                    rule,
                    ignoredImgSelectors,
                    isCancelled
                  );
                  modifiedValue = typeof bgModifier === "function" ? bgModifier(theme2) : bgModifier;
                  declarations.push({
                    property,
                    value: modifiedValue
                  });
                }
                return declarations;
              };
              const callbacks = /* @__PURE__ */ new Set();
              const addListener = (onTypeChange) => {
                const callback = () => {
                  const decs = getDeclarations();
                  onTypeChange(decs);
                };
                callbacks.add(callback);
                this.subscribeForVarTypeChange(varName, callback);
              };
              const removeListeners = () => {
                callbacks.forEach((callback) => {
                  this.unsubscribeFromVariableTypeChanges(
                    varName,
                    callback
                  );
                });
              };
              return {
                declarations: getDeclarations(),
                onTypeChange: { addListener, removeListeners }
              };
            };
          }
          getModifierForVarDependant(property, sourceValue) {
            const isConstructedColor = sourceValue.match(/^\s*(rgb|hsl)a?\(/);
            const isSimpleConstructedColor = sourceValue.match(
              /^rgba?\(var\(--[\-_A-Za-z0-9]+\)(\s*,?\/?\s*0?\.\d+)?\)$/
            );
            if (isConstructedColor && !isSimpleConstructedColor) {
              const isBg = property.startsWith("background");
              const isText = isTextColorProperty(property);
              return (theme2) => {
                let value = insertVarValues(
                  sourceValue,
                  this.unstableVarValues
                );
                if (!value) {
                  value = isBg ? "#ffffff" : "#000000";
                }
                const modifier = isBg ? tryModifyBgColor : isText ? tryModifyTextColor : tryModifyBorderColor;
                return modifier(value, theme2);
              };
            }
            if (property === "background-color" || isSimpleConstructedColor && property === "background") {
              return (theme2) => {
                const defaultFallback = tryModifyBgColor(
                  isConstructedColor ? "255, 255, 255" : "#ffffff",
                  theme2
                );
                return replaceCSSVariablesNames(
                  sourceValue,
                  (v) => wrapBgColorVariableName(v),
                  (fallback) => tryModifyBgColor(fallback, theme2),
                  defaultFallback
                );
              };
            }
            if (isTextColorProperty(property)) {
              return (theme2) => {
                const defaultFallback = tryModifyTextColor(
                  isConstructedColor ? "0, 0, 0" : "#000000",
                  theme2
                );
                return replaceCSSVariablesNames(
                  sourceValue,
                  (v) => wrapTextColorVariableName(v),
                  (fallback) => tryModifyTextColor(fallback, theme2),
                  defaultFallback
                );
              };
            }
            if (property === "background" || property === "background-image" || property === "box-shadow") {
              return (theme2) => {
                const unknownVars = /* @__PURE__ */ new Set();
                const modify = () => {
                  const variableReplaced = replaceCSSVariablesNames(
                    sourceValue,
                    (v) => {
                      if (this.isVarType(v, VAR_TYPE_BG_COLOR)) {
                        return wrapBgColorVariableName(v);
                      }
                      if (this.isVarType(v, VAR_TYPE_BG_IMG)) {
                        return wrapBgImgVariableName(v);
                      }
                      unknownVars.add(v);
                      return v;
                    },
                    (fallback) => tryModifyBgColor(fallback, theme2)
                  );
                  if (property === "box-shadow") {
                    const shadowModifier = getShadowModifierWithInfo(variableReplaced);
                    const modifiedShadow = shadowModifier(theme2);
                    if (modifiedShadow.unparsableMatchesLength !== modifiedShadow.matchesLength) {
                      return modifiedShadow.result;
                    }
                  }
                  return variableReplaced;
                };
                const modified = modify();
                if (unknownVars.size > 0) {
                  const isFallbackResolved = modified.match(
                    /^var\(.*?, (var\(--darkreader-bg--.*\))|(#[0-9A-Fa-f]+)|([a-z]+)|(rgba?\(.+\))|(hsla?\(.+\))\)$/
                  );
                  if (isFallbackResolved) {
                    return modified;
                  }
                  return new Promise((resolve) => {
                    for (const unknownVar of unknownVars.values()) {
                      const callback = () => {
                        this.unsubscribeFromVariableTypeChanges(
                          unknownVar,
                          callback
                        );
                        const newValue = modify();
                        resolve(newValue);
                      };
                      this.subscribeForVarTypeChange(
                        unknownVar,
                        callback
                      );
                    }
                  });
                }
                return modified;
              };
            }
            if (property.startsWith("border") || property.startsWith("outline")) {
              return (theme2) => {
                return replaceCSSVariablesNames(
                  sourceValue,
                  (v) => wrapBorderColorVariableName(v),
                  (fallback) => tryModifyBorderColor(fallback, theme2)
                );
              };
            }
            return null;
          }
          subscribeForVarTypeChange(varName, callback) {
            if (!this.typeChangeSubscriptions.has(varName)) {
              this.typeChangeSubscriptions.set(varName, /* @__PURE__ */ new Set());
            }
            const rootStore = this.typeChangeSubscriptions.get(varName);
            if (!rootStore.has(callback)) {
              rootStore.add(callback);
            }
          }
          unsubscribeFromVariableTypeChanges(varName, callback) {
            if (this.typeChangeSubscriptions.has(varName)) {
              this.typeChangeSubscriptions.get(varName).delete(callback);
            }
          }
          collectVariablesAndVarDep() {
            this.rulesQueue.forEach((rules) => {
              iterateCSSRules(rules, (rule) => {
                if (rule.style) {
                  this.collectVarsFromCSSDeclarations(rule.style);
                }
              });
            });
            this.inlineStyleQueue.forEach((style) => {
              this.collectVarsFromCSSDeclarations(style);
            });
            this.rulesQueue.clear();
            this.inlineStyleQueue.splice(0);
          }
          collectVarsFromCSSDeclarations(style) {
            iterateCSSDeclarations(style, (property, value) => {
              if (isVariable(property)) {
                this.inspectVariable(property, value);
              }
              if (isVarDependant(value)) {
                this.inspectVarDependant(property, value);
              }
            });
          }
          shouldProcessRootVariables() {
            var _a;
            return this.rulesQueue.size > 0 && ((_a = document.documentElement.getAttribute("style")) == null ? void 0 : _a.includes("--"));
          }
          collectRootVariables() {
            if (!this.shouldProcessRootVariables()) {
              return;
            }
            iterateCSSDeclarations(
              document.documentElement.style,
              (property, value) => {
                if (isVariable(property)) {
                  this.inspectVariable(property, value);
                }
              }
            );
          }
          inspectVariable(varName, value) {
            this.unstableVarValues.set(varName, value);
            if (isVarDependant(value) && isConstructedColorVar(value)) {
              this.unknownColorVars.add(varName);
              this.definedVars.add(varName);
            }
            if (this.definedVars.has(varName)) {
              return;
            }
            this.definedVars.add(varName);
            const isColor = Boolean(
              value.match(rawRGBSpaceRegex) || value.match(rawRGBCommaRegex) || parseColorWithCache(value)
            );
            if (isColor) {
              this.unknownColorVars.add(varName);
            } else if (value.includes("url(") || value.includes("linear-gradient(") || value.includes("radial-gradient(")) {
              this.resolveVariableType(varName, VAR_TYPE_BG_IMG);
            }
          }
          resolveVariableType(varName, typeNum) {
            const initialType = this.initialVarTypes.get(varName) || 0;
            const currentType = this.varTypes.get(varName) || 0;
            const newType = currentType | typeNum;
            this.varTypes.set(varName, newType);
            if (newType !== initialType || this.undefinedVars.has(varName)) {
              this.changedTypeVars.add(varName);
              this.undefinedVars.delete(varName);
            }
            this.unknownColorVars.delete(varName);
            this.unknownBgVars.delete(varName);
          }
          collectRootVarDependents() {
            if (!this.shouldProcessRootVariables()) {
              return;
            }
            iterateCSSDeclarations(
              document.documentElement.style,
              (property, value) => {
                if (isVarDependant(value)) {
                  this.inspectVarDependant(property, value);
                }
              }
            );
          }
          inspectVarDependant(property, value) {
            if (isVariable(property)) {
              this.iterateVarDeps(value, (ref) => {
                if (!this.varRefs.has(property)) {
                  this.varRefs.set(property, /* @__PURE__ */ new Set());
                }
                this.varRefs.get(property).add(ref);
              });
            } else if (property === "background-color" || property === "box-shadow") {
              this.iterateVarDeps(
                value,
                (v) => this.resolveVariableType(v, VAR_TYPE_BG_COLOR)
              );
            } else if (isTextColorProperty(property)) {
              this.iterateVarDeps(
                value,
                (v) => this.resolveVariableType(v, VAR_TYPE_TEXT_COLOR)
              );
            } else if (property.startsWith("border") || property.startsWith("outline")) {
              this.iterateVarDeps(
                value,
                (v) => this.resolveVariableType(v, VAR_TYPE_BORDER_COLOR)
              );
            } else if (property === "background" || property === "background-image") {
              this.iterateVarDeps(value, (v) => {
                if (this.isVarType(v, VAR_TYPE_BG_COLOR | VAR_TYPE_BG_IMG)) {
                  return;
                }
                const isBgColor = this.findVarRef(v, (ref) => {
                  return this.unknownColorVars.has(ref) || this.isVarType(
                    ref,
                    VAR_TYPE_BG_COLOR | VAR_TYPE_TEXT_COLOR | VAR_TYPE_BORDER_COLOR
                  );
                }) != null;
                this.iterateVarRefs(v, (ref) => {
                  if (isBgColor) {
                    this.resolveVariableType(ref, VAR_TYPE_BG_COLOR);
                  } else {
                    this.unknownBgVars.add(ref);
                  }
                });
              });
            }
          }
          iterateVarDeps(value, iterator) {
            const varDeps = /* @__PURE__ */ new Set();
            iterateVarDependencies(value, (v) => varDeps.add(v));
            varDeps.forEach((v) => iterator(v));
          }
          findVarRef(varName, iterator, stack = /* @__PURE__ */ new Set()) {
            if (stack.has(varName)) {
              return null;
            }
            stack.add(varName);
            const result = iterator(varName);
            if (result) {
              return varName;
            }
            const refs = this.varRefs.get(varName);
            if (!refs || refs.size === 0) {
              return null;
            }
            for (const ref of refs) {
              const found = this.findVarRef(ref, iterator, stack);
              if (found) {
                return found;
              }
            }
            return null;
          }
          iterateVarRefs(varName, iterator) {
            this.findVarRef(varName, (ref) => {
              iterator(ref);
              return false;
            });
          }
          setOnRootVariableChange(callback) {
            this.onRootVariableDefined = callback;
          }
          putRootVars(styleElement, theme2) {
            const sheet = styleElement.sheet;
            if (sheet.cssRules.length > 0) {
              sheet.deleteRule(0);
            }
            const declarations = /* @__PURE__ */ new Map();
            iterateCSSDeclarations(
              document.documentElement.style,
              (property, value) => {
                if (isVariable(property)) {
                  if (this.isVarType(property, VAR_TYPE_BG_COLOR)) {
                    declarations.set(
                      wrapBgColorVariableName(property),
                      tryModifyBgColor(value, theme2)
                    );
                  }
                  if (this.isVarType(property, VAR_TYPE_TEXT_COLOR)) {
                    declarations.set(
                      wrapTextColorVariableName(property),
                      tryModifyTextColor(value, theme2)
                    );
                  }
                  if (this.isVarType(property, VAR_TYPE_BORDER_COLOR)) {
                    declarations.set(
                      wrapBorderColorVariableName(property),
                      tryModifyBorderColor(value, theme2)
                    );
                  }
                  this.subscribeForVarTypeChange(
                    property,
                    this.onRootVariableDefined
                  );
                }
              }
            );
            const cssLines = [];
            cssLines.push(":root {");
            for (const [property, value] of declarations) {
              cssLines.push("    ".concat(property, ": ").concat(value, ";"));
            }
            cssLines.push("}");
            const cssText = cssLines.join("\n");
            sheet.insertRule(cssText);
          }
        }
        const variablesStore = new VariablesStore();
        function getVariableRange(input, searchStart = 0) {
          const start = input.indexOf("var(", searchStart);
          if (start >= 0) {
            const range = getParenthesesRange(input, start + 3);
            if (range) {
              return { start, end: range.end };
            }
          }
          return null;
        }
        function getVariablesMatches(input) {
          const ranges = [];
          let i = 0;
          let range;
          while (range = getVariableRange(input, i)) {
            const { start, end } = range;
            ranges.push({ start, end, value: input.substring(start, end) });
            i = range.end + 1;
          }
          return ranges;
        }
        function replaceVariablesMatches(input, replacer) {
          const matches = getVariablesMatches(input);
          const matchesCount = matches.length;
          if (matchesCount === 0) {
            return input;
          }
          const inputLength = input.length;
          const replacements = matches.map(
            (m) => replacer(m.value, matches.length)
          );
          const parts = [];
          parts.push(input.substring(0, matches[0].start));
          for (let i = 0; i < matchesCount; i++) {
            parts.push(replacements[i]);
            const start = matches[i].end;
            const end = i < matchesCount - 1 ? matches[i + 1].start : inputLength;
            parts.push(input.substring(start, end));
          }
          return parts.join("");
        }
        function getVariableNameAndFallback(match) {
          const commaIndex = match.indexOf(",");
          let name;
          let fallback;
          if (commaIndex >= 0) {
            name = match.substring(4, commaIndex).trim();
            fallback = match.substring(commaIndex + 1, match.length - 1).trim();
          } else {
            name = match.substring(4, match.length - 1).trim();
            fallback = "";
          }
          return { name, fallback };
        }
        function replaceCSSVariablesNames(value, nameReplacer, fallbackReplacer, finalFallback) {
          const matchReplacer = (match) => {
            const { name, fallback } = getVariableNameAndFallback(match);
            const newName = nameReplacer(name);
            if (!fallback) {
              if (finalFallback) {
                return "var(".concat(newName, ", ").concat(finalFallback, ")");
              }
              return "var(".concat(newName, ")");
            }
            let newFallback;
            if (isVarDependant(fallback)) {
              newFallback = replaceCSSVariablesNames(
                fallback,
                nameReplacer,
                fallbackReplacer
              );
            } else if (fallbackReplacer) {
              newFallback = fallbackReplacer(fallback);
            } else {
              newFallback = fallback;
            }
            return "var(".concat(newName, ", ").concat(newFallback, ")");
          };
          return replaceVariablesMatches(value, matchReplacer);
        }
        function iterateVarDependencies(value, iterator) {
          replaceCSSVariablesNames(value, (varName) => {
            iterator(varName);
            return varName;
          });
        }
        function wrapBgColorVariableName(name) {
          return "--darkreader-bg".concat(name);
        }
        function wrapTextColorVariableName(name) {
          return "--darkreader-text".concat(name);
        }
        function wrapBorderColorVariableName(name) {
          return "--darkreader-border".concat(name);
        }
        function wrapBgImgVariableName(name) {
          return "--darkreader-bgimg".concat(name);
        }
        function isVariable(property) {
          return property.startsWith("--");
        }
        function isVarDependant(value) {
          return value.includes("var(");
        }
        function isConstructedColorVar(value) {
          return value.match(/^\s*(rgb|hsl)a?\(/) || value.match(/^(((\d{1,3})|(var\([\-_A-Za-z0-9]+\))),?\s*?){3}$/);
        }
        const textColorProps = [
          "color",
          "caret-color",
          "-webkit-text-fill-color",
          "fill",
          "stroke"
        ];
        function isTextColorProperty(property) {
          return textColorProps.includes(property);
        }
        const rawRGBSpaceRegex = /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})$/;
        const rawRGBCommaRegex = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;
        function parseRawColorValue(input) {
          var _a;
          const match = (_a = input.match(rawRGBSpaceRegex)) != null ? _a : input.match(rawRGBCommaRegex);
          if (match) {
            const color = "rgb(".concat(match[1], ", ").concat(match[2], ", ").concat(match[3], ")");
            return { isRaw: true, color };
          }
          return { isRaw: false, color: input };
        }
        function handleRawColorValue(input, theme2, modifyFunction) {
          const { isRaw, color } = parseRawColorValue(input);
          const rgb = parseColorWithCache(color);
          if (rgb) {
            const outputColor = modifyFunction(rgb, theme2, !isRaw);
            if (isRaw) {
              const outputInRGB = parseColorWithCache(outputColor);
              return outputInRGB ? "".concat(outputInRGB.r, ", ").concat(outputInRGB.g, ", ").concat(outputInRGB.b) : outputColor;
            }
            return outputColor;
          }
          return color;
        }
        function tryModifyBgColor(color, theme2) {
          return handleRawColorValue(color, theme2, modifyBackgroundColor);
        }
        function tryModifyTextColor(color, theme2) {
          return handleRawColorValue(color, theme2, modifyForegroundColor);
        }
        function tryModifyBorderColor(color, theme2) {
          return handleRawColorValue(color, theme2, modifyBorderColor);
        }
        function insertVarValues(source, varValues, fullStack = /* @__PURE__ */ new Set()) {
          let containsUnresolvedVar = false;
          const matchReplacer = (match, count) => {
            const { name, fallback } = getVariableNameAndFallback(match);
            const stack = count > 1 ? new Set(fullStack) : fullStack;
            if (stack.has(name)) {
              containsUnresolvedVar = true;
              return null;
            }
            stack.add(name);
            const varValue = varValues.get(name) || fallback;
            let inserted = null;
            if (varValue) {
              if (isVarDependant(varValue)) {
                inserted = insertVarValues(varValue, varValues, stack);
              } else {
                inserted = varValue;
              }
            }
            if (!inserted) {
              containsUnresolvedVar = true;
              return null;
            }
            return inserted;
          };
          const replaced = replaceVariablesMatches(source, matchReplacer);
          if (containsUnresolvedVar) {
            return null;
          }
          return replaced;
        }
        const themeCacheKeys = [
          "mode",
          "brightness",
          "contrast",
          "grayscale",
          "sepia",
          "darkSchemeBackgroundColor",
          "darkSchemeTextColor",
          "lightSchemeBackgroundColor",
          "lightSchemeTextColor"
        ];
        function getThemeKey(theme2) {
          let resultKey = "";
          themeCacheKeys.forEach((key) => {
            resultKey += "".concat(key, ":").concat(theme2[key], ";");
          });
          return resultKey;
        }
        const asyncQueue = createAsyncTasksQueue();
        function createStyleSheetModifier() {
          let renderId = 0;
          function getStyleRuleHash(rule) {
            let cssText = rule.cssText;
            if (isMediaRule(rule.parentRule)) {
              cssText = "".concat(rule.parentRule.media.mediaText, " { ").concat(cssText, " }");
            }
            return getHashCode(cssText);
          }
          const rulesTextCache = /* @__PURE__ */ new Set();
          const rulesModCache = /* @__PURE__ */ new Map();
          const varTypeChangeCleaners = /* @__PURE__ */ new Set();
          let prevFilterKey = null;
          let hasNonLoadedLink = false;
          let wasRebuilt = false;
          function shouldRebuildStyle() {
            return hasNonLoadedLink && !wasRebuilt;
          }
          function modifySheet(options) {
            const rules = options.sourceCSSRules;
            const {
              theme: theme2,
              ignoreImageAnalysis,
              force,
              prepareSheet,
              isAsyncCancelled
            } = options;
            let rulesChanged = rulesModCache.size === 0;
            const notFoundCacheKeys = new Set(rulesModCache.keys());
            const themeKey = getThemeKey(theme2);
            const themeChanged = themeKey !== prevFilterKey;
            if (hasNonLoadedLink) {
              wasRebuilt = true;
            }
            const modRules = [];
            iterateCSSRules(
              rules,
              (rule) => {
                const hash = getStyleRuleHash(rule);
                let textDiffersFromPrev = false;
                notFoundCacheKeys.delete(hash);
                if (!rulesTextCache.has(hash)) {
                  rulesTextCache.add(hash);
                  textDiffersFromPrev = true;
                }
                if (textDiffersFromPrev) {
                  rulesChanged = true;
                } else {
                  modRules.push(rulesModCache.get(hash));
                  return;
                }
                if (rule.style.all === "revert") {
                  return;
                }
                const modDecs = [];
                rule.style && iterateCSSDeclarations(
                  rule.style,
                  (property, value) => {
                    const mod = getModifiableCSSDeclaration(
                      property,
                      value,
                      rule,
                      variablesStore,
                      ignoreImageAnalysis,
                      isAsyncCancelled
                    );
                    if (mod) {
                      modDecs.push(mod);
                    }
                  }
                );
                let modRule = null;
                if (modDecs.length > 0) {
                  const parentRule = rule.parentRule;
                  modRule = {
                    selector: rule.selectorText,
                    declarations: modDecs,
                    parentRule
                  };
                  modRules.push(modRule);
                }
                rulesModCache.set(hash, modRule);
              },
              () => {
                hasNonLoadedLink = true;
              }
            );
            notFoundCacheKeys.forEach((key) => {
              rulesTextCache.delete(key);
              rulesModCache.delete(key);
            });
            prevFilterKey = themeKey;
            if (!force && !rulesChanged && !themeChanged) {
              return;
            }
            renderId++;
            function setRule(target, index, rule) {
              const { selector, declarations } = rule;
              let selectorText = selector;
              const emptyIsWhereSelector = isChromium && selector.startsWith(":is(") && (selector.includes(":is()") || selector.includes(":where()") || selector.includes(":where(") && selector.includes(":-moz"));
              const viewTransitionSelector = selector.includes("::view-transition-");
              if (emptyIsWhereSelector || viewTransitionSelector) {
                selectorText = ".darkreader-unsupported-selector";
              }
              let ruleText = "".concat(selectorText, " {");
              for (const dec of declarations) {
                const { property, value, important } = dec;
                if (value) {
                  ruleText += " ".concat(property, ": ").concat(value).concat(important ? " !important" : "", ";");
                }
              }
              ruleText += " }";
              target.insertRule(ruleText, index);
            }
            const asyncDeclarations = /* @__PURE__ */ new Map();
            const varDeclarations = /* @__PURE__ */ new Map();
            let asyncDeclarationCounter = 0;
            let varDeclarationCounter = 0;
            const rootReadyGroup = { rule: null, rules: [], isGroup: true };
            const groupRefs = /* @__PURE__ */ new WeakMap();
            function getGroup(rule) {
              if (rule == null) {
                return rootReadyGroup;
              }
              if (groupRefs.has(rule)) {
                return groupRefs.get(rule);
              }
              const group = { rule, rules: [], isGroup: true };
              groupRefs.set(rule, group);
              const parentGroup = getGroup(rule.parentRule);
              parentGroup.rules.push(group);
              return group;
            }
            varTypeChangeCleaners.forEach((clear) => clear());
            varTypeChangeCleaners.clear();
            modRules.filter((r) => r).forEach(({ selector, declarations, parentRule }) => {
              const group = getGroup(parentRule);
              const readyStyleRule = {
                selector,
                declarations: [],
                isGroup: false
              };
              const readyDeclarations = readyStyleRule.declarations;
              group.rules.push(readyStyleRule);
              function handleAsyncDeclaration(property, modified, important, sourceValue) {
                const asyncKey = ++asyncDeclarationCounter;
                const asyncDeclaration = {
                  property,
                  value: null,
                  important,
                  asyncKey,
                  sourceValue
                };
                readyDeclarations.push(asyncDeclaration);
                const currentRenderId = renderId;
                modified.then((asyncValue) => {
                  if (!asyncValue || isAsyncCancelled() || currentRenderId !== renderId) {
                    return;
                  }
                  asyncDeclaration.value = asyncValue;
                  asyncQueue.add(() => {
                    if (isAsyncCancelled() || currentRenderId !== renderId) {
                      return;
                    }
                    rebuildAsyncRule(asyncKey);
                  });
                });
              }
              function handleVarDeclarations(property, modified, important, sourceValue) {
                const { declarations: varDecs, onTypeChange } = modified;
                const varKey = ++varDeclarationCounter;
                const currentRenderId = renderId;
                const initialIndex = readyDeclarations.length;
                let oldDecs = [];
                if (varDecs.length === 0) {
                  const tempDec = {
                    property,
                    value: sourceValue,
                    important,
                    sourceValue,
                    varKey
                  };
                  readyDeclarations.push(tempDec);
                  oldDecs = [tempDec];
                }
                varDecs.forEach((mod) => {
                  if (mod.value instanceof Promise) {
                    handleAsyncDeclaration(
                      mod.property,
                      mod.value,
                      important,
                      sourceValue
                    );
                  } else {
                    const readyDec = {
                      property: mod.property,
                      value: mod.value,
                      important,
                      sourceValue,
                      varKey
                    };
                    readyDeclarations.push(readyDec);
                    oldDecs.push(readyDec);
                  }
                });
                onTypeChange.addListener((newDecs) => {
                  if (isAsyncCancelled() || currentRenderId !== renderId) {
                    return;
                  }
                  const readyVarDecs = newDecs.map((mod) => {
                    return {
                      property: mod.property,
                      value: mod.value,
                      important,
                      sourceValue,
                      varKey
                    };
                  });
                  const index = readyDeclarations.indexOf(
                    oldDecs[0],
                    initialIndex
                  );
                  readyDeclarations.splice(
                    index,
                    oldDecs.length,
                    ...readyVarDecs
                  );
                  oldDecs = readyVarDecs;
                  rebuildVarRule(varKey);
                });
                varTypeChangeCleaners.add(
                  () => onTypeChange.removeListeners()
                );
              }
              declarations.forEach(
                ({ property, value, important, sourceValue }) => {
                  if (typeof value === "function") {
                    const modified = value(theme2);
                    if (modified instanceof Promise) {
                      handleAsyncDeclaration(
                        property,
                        modified,
                        important,
                        sourceValue
                      );
                    } else if (property.startsWith("--")) {
                      handleVarDeclarations(
                        property,
                        modified,
                        important,
                        sourceValue
                      );
                    } else {
                      readyDeclarations.push({
                        property,
                        value: modified,
                        important,
                        sourceValue
                      });
                    }
                  } else {
                    readyDeclarations.push({
                      property,
                      value,
                      important,
                      sourceValue
                    });
                  }
                }
              );
            });
            const sheet = prepareSheet();
            function buildStyleSheet() {
              function createTarget(group, parent) {
                const { rule } = group;
                if (isMediaRule(rule)) {
                  const { media } = rule;
                  const index = parent.cssRules.length;
                  parent.insertRule(
                    "@media ".concat(media.mediaText, " {}"),
                    index
                  );
                  return parent.cssRules[index];
                }
                if (isLayerRule(rule)) {
                  const { name } = rule;
                  const index = parent.cssRules.length;
                  parent.insertRule("@layer ".concat(name, " {}"), index);
                  return parent.cssRules[index];
                }
                return parent;
              }
              function iterateReadyRules(group, target, styleIterator) {
                group.rules.forEach((r) => {
                  if (r.isGroup) {
                    const t = createTarget(r, target);
                    iterateReadyRules(r, t, styleIterator);
                  } else {
                    styleIterator(r, target);
                  }
                });
              }
              iterateReadyRules(rootReadyGroup, sheet, (rule, target) => {
                const index = target.cssRules.length;
                rule.declarations.forEach(({ asyncKey, varKey }) => {
                  if (asyncKey != null) {
                    asyncDeclarations.set(asyncKey, {
                      rule,
                      target,
                      index
                    });
                  }
                  if (varKey != null) {
                    varDeclarations.set(varKey, { rule, target, index });
                  }
                });
                setRule(target, index, rule);
              });
            }
            function rebuildAsyncRule(key) {
              const { rule, target, index } = asyncDeclarations.get(key);
              target.deleteRule(index);
              setRule(target, index, rule);
              asyncDeclarations.delete(key);
            }
            function rebuildVarRule(key) {
              const { rule, target, index } = varDeclarations.get(key);
              target.deleteRule(index);
              setRule(target, index, rule);
            }
            buildStyleSheet();
          }
          return { modifySheet, shouldRebuildStyle };
        }
        let canUseSheetProxy$1 = false;
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => canUseSheetProxy$1 = true,
          { once: true }
        );
        const overrides$1 = /* @__PURE__ */ new WeakSet();
        const overridesBySource = /* @__PURE__ */ new WeakMap();
        function canHaveAdoptedStyleSheets(node) {
          return Array.isArray(node.adoptedStyleSheets);
        }
        function createAdoptedStyleSheetOverride(node) {
          let cancelAsyncOperations = false;
          function iterateSourceSheets(iterator) {
            node.adoptedStyleSheets.forEach((sheet) => {
              if (!overrides$1.has(sheet)) {
                iterator(sheet);
              }
              defineSheetScope(sheet, node);
            });
          }
          function injectSheet(sheet, override) {
            const newSheets = [...node.adoptedStyleSheets];
            const sheetIndex = newSheets.indexOf(sheet);
            const overrideIndex = newSheets.indexOf(override);
            if (overrideIndex >= 0) {
              newSheets.splice(overrideIndex, 1);
            }
            newSheets.splice(sheetIndex + 1, 0, override);
            node.adoptedStyleSheets = newSheets;
          }
          function clear() {
            const newSheets = [...node.adoptedStyleSheets];
            for (let i = newSheets.length - 1; i >= 0; i--) {
              const sheet = newSheets[i];
              if (overrides$1.has(sheet)) {
                newSheets.splice(i, 1);
              }
            }
            if (node.adoptedStyleSheets.length !== newSheets.length) {
              node.adoptedStyleSheets = newSheets;
            }
            sourceSheets = /* @__PURE__ */ new WeakSet();
            sourceDeclarations = /* @__PURE__ */ new WeakSet();
          }
          const cleaners2 = [];
          function destroy() {
            cleaners2.forEach((c) => c());
            cleaners2.splice(0);
            cancelAsyncOperations = true;
            clear();
            if (frameId) {
              cancelAnimationFrame(frameId);
              frameId = null;
            }
          }
          let rulesChangeKey = 0;
          function getRulesChangeKey() {
            let count = 0;
            iterateSourceSheets((sheet) => {
              count += sheet.cssRules.length;
            });
            if (count === 1) {
              const rule = node.adoptedStyleSheets[0].cssRules[0];
              return rule instanceof CSSStyleRule ? rule.style.length : count;
            }
            return count;
          }
          let sourceSheets = /* @__PURE__ */ new WeakSet();
          let sourceDeclarations = /* @__PURE__ */ new WeakSet();
          function render(theme2, ignoreImageAnalysis) {
            clear();
            for (let i = node.adoptedStyleSheets.length - 1; i >= 0; i--) {
              const sheet = node.adoptedStyleSheets[i];
              if (overrides$1.has(sheet)) {
                continue;
              }
              sourceSheets.add(sheet);
              const readyOverride = overridesBySource.get(sheet);
              if (readyOverride) {
                rulesChangeKey = getRulesChangeKey();
                injectSheet(sheet, readyOverride);
                continue;
              }
              const rules = sheet.cssRules;
              const override = new CSSStyleSheet();
              overridesBySource.set(sheet, override);
              iterateCSSRules(
                rules,
                (rule) => sourceDeclarations.add(rule.style)
              );
              const prepareSheet = () => {
                for (let i2 = override.cssRules.length - 1; i2 >= 0; i2--) {
                  override.deleteRule(i2);
                }
                override.insertRule("#__darkreader__adoptedOverride {}");
                injectSheet(sheet, override);
                overrides$1.add(override);
                return override;
              };
              const sheetModifier = createStyleSheetModifier();
              sheetModifier.modifySheet({
                prepareSheet,
                sourceCSSRules: rules,
                theme: theme2,
                ignoreImageAnalysis,
                force: false,
                isAsyncCancelled: () => cancelAsyncOperations
              });
            }
            rulesChangeKey = getRulesChangeKey();
          }
          let callbackRequested = false;
          function handleArrayChange(callback) {
            if (callbackRequested) {
              return;
            }
            callbackRequested = true;
            queueMicrotask(() => {
              callbackRequested = false;
              const sheets = node.adoptedStyleSheets.filter(
                (s) => !overrides$1.has(s)
              );
              sheets.forEach((sheet) => overridesBySource.delete(sheet));
              callback(sheets);
            });
          }
          function checkForUpdates() {
            return getRulesChangeKey() !== rulesChangeKey;
          }
          let frameId = null;
          function watchUsingRAF(callback) {
            frameId = requestAnimationFrame(() => {
              if (canUseSheetProxy$1) {
                return;
              }
              if (checkForUpdates()) {
                handleArrayChange(callback);
              }
              watchUsingRAF(callback);
            });
          }
          function addSheetChangeEventListener(type, listener) {
            node.addEventListener(type, listener);
            cleaners2.push(() => node.removeEventListener(type, listener));
          }
          function watch(callback) {
            const onAdoptedSheetsChange = () => {
              canUseSheetProxy$1 = true;
              handleArrayChange(callback);
            };
            addSheetChangeEventListener(
              "__darkreader__adoptedStyleSheetsChange",
              onAdoptedSheetsChange
            );
            addSheetChangeEventListener(
              "__darkreader__adoptedStyleSheetChange",
              onAdoptedSheetsChange
            );
            addSheetChangeEventListener(
              "__darkreader__adoptedStyleDeclarationChange",
              onAdoptedSheetsChange
            );
            if (canUseSheetProxy$1) {
              return;
            }
            watchUsingRAF(callback);
          }
          return {
            render,
            destroy,
            watch
          };
        }
        class StyleSheetCommandBuilder {
          constructor() {
            this.cssRules = [];
            this.commands = [];
          }
          insertRule(cssText, index = 0) {
            this.commands.push({ type: "insert", index, cssText });
            this.cssRules.splice(index, 0, new StyleSheetCommandBuilder());
            return index;
          }
          deleteRule(index) {
            this.commands.push({ type: "delete", index });
            this.cssRules.splice(index, 1);
          }
          replaceSync(cssText) {
            this.commands.splice(0);
            this.commands.push({ type: "replace", cssText });
            if (cssText === "") {
              this.cssRules.splice(0);
            } else {
              throw new Error(
                "StyleSheetCommandBuilder.replaceSync() is not fully supported"
              );
            }
          }
          getDeepCSSCommands() {
            const deep = [];
            this.commands.forEach((command) => {
              deep.push({
                type: command.type,
                cssText: command.type !== "delete" ? command.cssText : "",
                path: command.type === "replace" ? [] : [command.index]
              });
            });
            this.cssRules.forEach((rule, i) => {
              const childCommands = rule.getDeepCSSCommands();
              childCommands.forEach((c) => c.path.unshift(i));
            });
            return deep;
          }
          clearDeepCSSCommands() {
            this.commands.splice(0);
            this.cssRules.forEach((rule) => rule.clearDeepCSSCommands());
          }
        }
        function createAdoptedStyleSheetFallback() {
          let cancelAsyncOperations = false;
          const builder = new StyleSheetCommandBuilder();
          function render(options) {
            const prepareSheet = () => {
              builder.replaceSync("");
              return builder;
            };
            const sheetModifier = createStyleSheetModifier();
            sheetModifier.modifySheet({
              prepareSheet,
              sourceCSSRules: options.cssRules,
              theme: options.theme,
              ignoreImageAnalysis: options.ignoreImageAnalysis,
              force: false,
              isAsyncCancelled: () => cancelAsyncOperations
            });
          }
          function commands() {
            const commands2 = builder.getDeepCSSCommands();
            builder.clearDeepCSSCommands();
            return commands2;
          }
          function destroy() {
            cancelAsyncOperations = true;
          }
          return { render, destroy, commands };
        }
        const overrides = {
          "background-color": {
            customProp: "--darkreader-inline-bgcolor",
            cssProp: "background-color",
            dataAttr: "data-darkreader-inline-bgcolor"
          },
          "background-image": {
            customProp: "--darkreader-inline-bgimage",
            cssProp: "background-image",
            dataAttr: "data-darkreader-inline-bgimage"
          },
          "border-color": {
            customProp: "--darkreader-inline-border",
            cssProp: "border-color",
            dataAttr: "data-darkreader-inline-border"
          },
          "border-bottom-color": {
            customProp: "--darkreader-inline-border-bottom",
            cssProp: "border-bottom-color",
            dataAttr: "data-darkreader-inline-border-bottom"
          },
          "border-left-color": {
            customProp: "--darkreader-inline-border-left",
            cssProp: "border-left-color",
            dataAttr: "data-darkreader-inline-border-left"
          },
          "border-right-color": {
            customProp: "--darkreader-inline-border-right",
            cssProp: "border-right-color",
            dataAttr: "data-darkreader-inline-border-right"
          },
          "border-top-color": {
            customProp: "--darkreader-inline-border-top",
            cssProp: "border-top-color",
            dataAttr: "data-darkreader-inline-border-top"
          },
          "box-shadow": {
            customProp: "--darkreader-inline-boxshadow",
            cssProp: "box-shadow",
            dataAttr: "data-darkreader-inline-boxshadow"
          },
          "color": {
            customProp: "--darkreader-inline-color",
            cssProp: "color",
            dataAttr: "data-darkreader-inline-color"
          },
          "fill": {
            customProp: "--darkreader-inline-fill",
            cssProp: "fill",
            dataAttr: "data-darkreader-inline-fill"
          },
          "stroke": {
            customProp: "--darkreader-inline-stroke",
            cssProp: "stroke",
            dataAttr: "data-darkreader-inline-stroke"
          },
          "outline-color": {
            customProp: "--darkreader-inline-outline",
            cssProp: "outline-color",
            dataAttr: "data-darkreader-inline-outline"
          },
          "stop-color": {
            customProp: "--darkreader-inline-stopcolor",
            cssProp: "stop-color",
            dataAttr: "data-darkreader-inline-stopcolor"
          }
        };
        const shorthandOverrides = {
          "background": {
            customProp: "--darkreader-inline-bg",
            cssProp: "background",
            dataAttr: "data-darkreader-inline-bg"
          },
          "border": {
            customProp: "--darkreader-inline-border-short",
            cssProp: "border",
            dataAttr: "data-darkreader-inline-border-short"
          },
          "border-bottom": {
            customProp: "--darkreader-inline-border-bottom-short",
            cssProp: "border-bottom",
            dataAttr: "data-darkreader-inline-border-bottom-short"
          },
          "border-left": {
            customProp: "--darkreader-inline-border-left-short",
            cssProp: "border-left",
            dataAttr: "data-darkreader-inline-border-left-short"
          },
          "border-right": {
            customProp: "--darkreader-inline-border-right-short",
            cssProp: "border-right",
            dataAttr: "data-darkreader-inline-border-right-short"
          },
          "border-top": {
            customProp: "--darkreader-inline-border-top-short",
            cssProp: "border-top",
            dataAttr: "data-darkreader-inline-border-top-short"
          }
        };
        const overridesList = Object.values(overrides);
        const normalizedPropList = {};
        overridesList.forEach(
          ({ cssProp, customProp }) => normalizedPropList[customProp] = cssProp
        );
        const INLINE_STYLE_ATTRS = [
          "style",
          "fill",
          "stop-color",
          "stroke",
          "bgcolor",
          "color",
          "background"
        ];
        const INLINE_STYLE_SELECTOR = INLINE_STYLE_ATTRS.map(
          (attr) => "[".concat(attr, "]")
        ).join(", ");
        function getInlineOverrideStyle() {
          const allOverrides = overridesList.concat(
            Object.values(shorthandOverrides)
          );
          return allOverrides.map(({ dataAttr, customProp, cssProp }) => {
            return [
              "[".concat(dataAttr, "] {"),
              "  ".concat(cssProp, ": var(").concat(customProp, ") !important;"),
              "}"
            ].join("\n");
          }).concat([
            "[data-darkreader-inline-invert] {",
            "    filter: invert(100%) hue-rotate(180deg);",
            "}"
          ]).join("\n");
        }
        function getInlineStyleElements(root) {
          const results = [];
          if (root instanceof Element && root.matches(INLINE_STYLE_SELECTOR)) {
            results.push(root);
          }
          if (root instanceof Element || isShadowDomSupported && root instanceof ShadowRoot || root instanceof Document) {
            push(results, root.querySelectorAll(INLINE_STYLE_SELECTOR));
          }
          return results;
        }
        const treeObservers = /* @__PURE__ */ new Map();
        const attrObservers = /* @__PURE__ */ new Map();
        function watchForInlineStyles(elementStyleDidChange, shadowRootDiscovered) {
          deepWatchForInlineStyles(
            document,
            elementStyleDidChange,
            shadowRootDiscovered
          );
          iterateShadowHosts(document.documentElement, (host) => {
            deepWatchForInlineStyles(
              host.shadowRoot,
              elementStyleDidChange,
              shadowRootDiscovered
            );
          });
        }
        function deepWatchForInlineStyles(root, elementStyleDidChange, shadowRootDiscovered) {
          if (treeObservers.has(root)) {
            treeObservers.get(root).disconnect();
            attrObservers.get(root).disconnect();
          }
          const discoveredNodes = /* @__PURE__ */ new WeakSet();
          function discoverNodes(node) {
            getInlineStyleElements(node).forEach((el) => {
              if (discoveredNodes.has(el)) {
                return;
              }
              discoveredNodes.add(el);
              elementStyleDidChange(el);
            });
            iterateShadowHosts(node, (n) => {
              if (discoveredNodes.has(node)) {
                return;
              }
              discoveredNodes.add(node);
              shadowRootDiscovered(n.shadowRoot);
              deepWatchForInlineStyles(
                n.shadowRoot,
                elementStyleDidChange,
                shadowRootDiscovered
              );
            });
            variablesStore.matchVariablesAndDependents();
          }
          const treeObserver = createOptimizedTreeObserver(root, {
            onMinorMutations: (_root, { additions }) => {
              additions.forEach((added) => discoverNodes(added));
            },
            onHugeMutations: () => {
              discoverNodes(root);
            }
          });
          treeObservers.set(root, treeObserver);
          let attemptCount = 0;
          let start = null;
          const ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
          const RETRY_TIMEOUT = getDuration({ seconds: 2 });
          const MAX_ATTEMPTS_COUNT = 50;
          let cache = [];
          let timeoutId = null;
          const handleAttributeMutations = throttle((mutations) => {
            const handledTargets = /* @__PURE__ */ new Set();
            mutations.forEach((m) => {
              const target = m.target;
              if (handledTargets.has(target)) {
                return;
              }
              if (INLINE_STYLE_ATTRS.includes(m.attributeName)) {
                handledTargets.add(target);
                elementStyleDidChange(target);
              }
            });
            variablesStore.matchVariablesAndDependents();
          });
          const attrObserver = new MutationObserver((mutations) => {
            if (timeoutId) {
              cache.push(...mutations);
              return;
            }
            attemptCount++;
            const now = Date.now();
            if (start == null) {
              start = now;
            } else if (attemptCount >= MAX_ATTEMPTS_COUNT) {
              if (now - start < ATTEMPTS_INTERVAL) {
                timeoutId = setTimeout(() => {
                  start = null;
                  attemptCount = 0;
                  timeoutId = null;
                  const attributeCache = cache;
                  cache = [];
                  handleAttributeMutations(attributeCache);
                }, RETRY_TIMEOUT);
                cache.push(...mutations);
                return;
              }
              start = now;
              attemptCount = 1;
            }
            handleAttributeMutations(mutations);
          });
          attrObserver.observe(root, {
            attributes: true,
            attributeFilter: INLINE_STYLE_ATTRS.concat(
              overridesList.map(({ dataAttr }) => dataAttr)
            ),
            subtree: true
          });
          attrObservers.set(root, attrObserver);
        }
        function stopWatchingForInlineStyles() {
          treeObservers.forEach((o) => o.disconnect());
          attrObservers.forEach((o) => o.disconnect());
          treeObservers.clear();
          attrObservers.clear();
        }
        const inlineStyleCache = /* @__PURE__ */ new WeakMap();
        const svgInversionCache = /* @__PURE__ */ new WeakSet();
        const svgAnalysisConditionCache = /* @__PURE__ */ new WeakMap();
        const themeProps = ["brightness", "contrast", "grayscale", "sepia", "mode"];
        function shouldAnalyzeSVGAsImage(svg) {
          var _a, _b, _c;
          if (svgAnalysisConditionCache.has(svg)) {
            return svgAnalysisConditionCache.get(svg);
          }
          const shouldAnalyze = Boolean(
            svg && (((_a = svg.getAttribute("class")) == null ? void 0 : _a.includes("logo")) || ((_c = (_b = svg.parentElement) == null ? void 0 : _b.getAttribute("class")) == null ? void 0 : _c.includes("logo")))
          );
          svgAnalysisConditionCache.set(svg, shouldAnalyze);
          return shouldAnalyze;
        }
        function getInlineStyleCacheKey(el, theme2) {
          return INLINE_STYLE_ATTRS.map(
            (attr) => "".concat(attr, '="').concat(el.getAttribute(attr), '"')
          ).concat(themeProps.map((prop) => "".concat(prop, '="').concat(theme2[prop], '"'))).join(" ");
        }
        function shouldIgnoreInlineStyle(element, selectors) {
          for (let i = 0, len = selectors.length; i < len; i++) {
            const ingnoredSelector = selectors[i];
            if (element.matches(ingnoredSelector)) {
              return true;
            }
          }
          return false;
        }
        function overrideInlineStyle(element, theme2, ignoreInlineSelectors, ignoreImageSelectors) {
          var _a, _b, _c;
          const cacheKey = getInlineStyleCacheKey(element, theme2);
          if (cacheKey === inlineStyleCache.get(element)) {
            return;
          }
          const unsetProps = new Set(Object.keys(overrides));
          function setCustomProp(targetCSSProp, modifierCSSProp, cssVal) {
            const mod = getModifiableCSSDeclaration(
              modifierCSSProp,
              cssVal,
              { style: element.style },
              variablesStore,
              ignoreImageSelectors,
              null
            );
            if (!mod) {
              return;
            }
            function setStaticValue(value2) {
              var _a2;
              const { customProp, dataAttr } = (_a2 = overrides[targetCSSProp]) != null ? _a2 : shorthandOverrides[targetCSSProp];
              element.style.setProperty(customProp, value2);
              if (!element.hasAttribute(dataAttr)) {
                element.setAttribute(dataAttr, "");
              }
              unsetProps.delete(targetCSSProp);
            }
            function setVarDeclaration(mod2) {
              let prevDeclarations = [];
              function setProps(declarations) {
                prevDeclarations.forEach(({ property }) => {
                  element.style.removeProperty(property);
                });
                declarations.forEach(({ property, value: value2 }) => {
                  if (!(value2 instanceof Promise)) {
                    element.style.setProperty(property, value2);
                  }
                });
                prevDeclarations = declarations;
              }
              setProps(mod2.declarations);
              mod2.onTypeChange.addListener(setProps);
            }
            function setAsyncValue(promise, sourceValue) {
              promise.then((value2) => {
                if (value2 && targetCSSProp === "background" && value2.startsWith("var(--darkreader-bg--")) {
                  setStaticValue(value2);
                }
                if (value2 && targetCSSProp === "background-image") {
                  if ((element === document.documentElement || element === document.body) && value2 === sourceValue) {
                    value2 = "none";
                  }
                  setStaticValue(value2);
                }
                inlineStyleCache.set(
                  element,
                  getInlineStyleCacheKey(element, theme2)
                );
              });
            }
            const value = typeof mod.value === "function" ? mod.value(theme2) : mod.value;
            if (typeof value === "string") {
              setStaticValue(value);
            } else if (value instanceof Promise) {
              setAsyncValue(value, cssVal);
            } else if (typeof value === "object") {
              setVarDeclaration(value);
            }
          }
          if (ignoreInlineSelectors.length > 0) {
            if (shouldIgnoreInlineStyle(element, ignoreInlineSelectors)) {
              unsetProps.forEach((cssProp) => {
                element.removeAttribute(overrides[cssProp].dataAttr);
              });
              return;
            }
          }
          const isSVGElement = element instanceof SVGElement;
          const svg = isSVGElement ? (_a = element.ownerSVGElement) != null ? _a : element instanceof SVGSVGElement ? element : null : null;
          if (isSVGElement && theme2.mode === 1 && svg) {
            if (svgInversionCache.has(svg)) {
              return;
            }
            if (shouldAnalyzeSVGAsImage(svg)) {
              svgInversionCache.add(svg);
              const analyzeSVGAsImage = () => {
                let svgString = svg.outerHTML;
                svgString = svgString.replaceAll(
                  '<style class="darkreader darkreader--sync" media="screen"></style>',
                  ""
                );
                const dataURL = "data:image/svg+xml;base64,".concat(btoa(svgString));
                getImageDetails(dataURL).then((details) => {
                  if (details.isDark && details.isTransparent || details.isLarge && details.isLight && !details.isTransparent) {
                    svg.setAttribute(
                      "data-darkreader-inline-invert",
                      ""
                    );
                  } else {
                    svg.removeAttribute(
                      "data-darkreader-inline-invert"
                    );
                  }
                });
              };
              analyzeSVGAsImage();
              if (!isDOMReady()) {
                addDOMReadyListener(analyzeSVGAsImage);
              }
              return;
            }
          }
          if (element.hasAttribute("bgcolor")) {
            let value = element.getAttribute("bgcolor");
            if (value.match(/^[0-9a-f]{3}$/i) || value.match(/^[0-9a-f]{6}$/i)) {
              value = "#".concat(value);
            }
            setCustomProp("background-color", "background-color", value);
          }
          if ((element === document.documentElement || element === document.body) && element.hasAttribute("background")) {
            const url = getAbsoluteURL(
              location.href,
              (_b = element.getAttribute("background")) != null ? _b : ""
            );
            const value = 'url("'.concat(url, '")');
            setCustomProp("background-image", "background-image", value);
          }
          if (element.hasAttribute("color") && element.rel !== "mask-icon") {
            let value = element.getAttribute("color");
            if (value.match(/^[0-9a-f]{3}$/i) || value.match(/^[0-9a-f]{6}$/i)) {
              value = "#".concat(value);
            }
            setCustomProp("color", "color", value);
          }
          if (isSVGElement) {
            if (element.hasAttribute("fill")) {
              const SMALL_SVG_LIMIT = 32;
              const value = element.getAttribute("fill");
              if (value !== "none") {
                if (!(element instanceof SVGTextElement)) {
                  const handleSVGElement = () => {
                    const { width, height } = element.getBoundingClientRect();
                    const isBg = width > SMALL_SVG_LIMIT || height > SMALL_SVG_LIMIT;
                    setCustomProp(
                      "fill",
                      isBg ? "background-color" : "color",
                      value
                    );
                  };
                  if (isReadyStateComplete()) {
                    handleSVGElement();
                  } else {
                    addReadyStateCompleteListener(handleSVGElement);
                  }
                } else {
                  setCustomProp("fill", "color", value);
                }
              }
            }
            if (element.hasAttribute("stop-color")) {
              setCustomProp(
                "stop-color",
                "background-color",
                element.getAttribute("stop-color")
              );
            }
          }
          if (element.hasAttribute("stroke")) {
            const value = element.getAttribute("stroke");
            setCustomProp(
              "stroke",
              element instanceof SVGLineElement || element instanceof SVGTextElement ? "border-color" : "color",
              value
            );
          }
          element.style && iterateCSSDeclarations(element.style, (property, value) => {
            if (property === "background-image" && value.includes("url")) {
              if (element === document.documentElement || element === document.body) {
                setCustomProp(property, property, value);
              }
              return;
            }
            if (overrides.hasOwnProperty(property) || property.startsWith("--") && !normalizedPropList[property]) {
              setCustomProp(property, property, value);
            } else if (shorthandOverrides[property] && value.includes("var(")) {
              setCustomProp(property, property, value);
            } else {
              const overriddenProp = normalizedPropList[property];
              if (overriddenProp && !element.style.getPropertyValue(overriddenProp) && !element.hasAttribute(overriddenProp)) {
                if (overriddenProp === "background-color" && element.hasAttribute("bgcolor")) {
                  return;
                }
                element.style.setProperty(property, "");
              }
            }
          });
          if (element.style && element instanceof SVGTextElement && element.style.fill) {
            setCustomProp(
              "fill",
              "color",
              element.style.getPropertyValue("fill")
            );
          }
          if ((_c = element.getAttribute("style")) == null ? void 0 : _c.includes("--")) {
            variablesStore.addInlineStyleForMatching(element.style);
          }
          forEach(unsetProps, (cssProp) => {
            element.removeAttribute(overrides[cssProp].dataAttr);
          });
          inlineStyleCache.set(element, getInlineStyleCacheKey(element, theme2));
        }
        const metaThemeColorName = "theme-color";
        const metaThemeColorSelector = 'meta[name="'.concat(metaThemeColorName, '"]');
        let srcMetaThemeColor = null;
        let observer = null;
        function changeMetaThemeColor(meta, theme2) {
          srcMetaThemeColor = srcMetaThemeColor || meta.content;
          const color = parseColorWithCache(srcMetaThemeColor);
          if (!color) {
            logWarn("Invalid meta color", color);
            return;
          }
          meta.content = modifyBackgroundColor(color, theme2, false);
        }
        function changeMetaThemeColorWhenAvailable(theme2) {
          const meta = document.querySelector(metaThemeColorSelector);
          if (meta) {
            changeMetaThemeColor(meta, theme2);
          } else {
            if (observer) {
              observer.disconnect();
            }
            observer = new MutationObserver((mutations) => {
              loop:
                for (let i = 0; i < mutations.length; i++) {
                  const { addedNodes } = mutations[i];
                  for (let j = 0; j < addedNodes.length; j++) {
                    const node = addedNodes[j];
                    if (node instanceof HTMLMetaElement && node.name === metaThemeColorName) {
                      observer.disconnect();
                      observer = null;
                      changeMetaThemeColor(node, theme2);
                      break loop;
                    }
                  }
                }
            });
            observer.observe(document.head, { childList: true });
          }
        }
        function restoreMetaThemeColor() {
          if (observer) {
            observer.disconnect();
            observer = null;
          }
          const meta = document.querySelector(metaThemeColorSelector);
          if (meta && srcMetaThemeColor) {
            meta.content = srcMetaThemeColor;
          }
        }
        const cssCommentsRegex = /\/\*[\s\S]*?\*\//g;
        function removeCSSComments(cssText) {
          return cssText.replace(cssCommentsRegex, "");
        }
        let canUseSheetProxy = false;
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => canUseSheetProxy = true,
          { once: true }
        );
        function createSheetWatcher(element, safeGetSheetRules, callback, isCancelled) {
          let rafSheetWatcher = null;
          function watchForSheetChanges() {
            watchForSheetChangesUsingProxy();
            if (!(canUseSheetProxy && element.sheet)) {
              rafSheetWatcher = createRAFSheetWatcher(
                element,
                safeGetSheetRules,
                callback,
                isCancelled
              );
              rafSheetWatcher.start();
            }
          }
          let areSheetChangesPending = false;
          function onSheetChange() {
            canUseSheetProxy = true;
            rafSheetWatcher == null ? void 0 : rafSheetWatcher.stop();
            if (areSheetChangesPending) {
              return;
            }
            function handleSheetChanges() {
              areSheetChangesPending = false;
              if (isCancelled()) {
                return;
              }
              callback();
            }
            areSheetChangesPending = true;
            queueMicrotask(handleSheetChanges);
          }
          function watchForSheetChangesUsingProxy() {
            element.addEventListener(
              "__darkreader__updateSheet",
              onSheetChange
            );
          }
          function stopWatchingForSheetChangesUsingProxy() {
            element.removeEventListener(
              "__darkreader__updateSheet",
              onSheetChange
            );
          }
          function stopWatchingForSheetChanges() {
            stopWatchingForSheetChangesUsingProxy();
            rafSheetWatcher == null ? void 0 : rafSheetWatcher.stop();
          }
          return {
            start: watchForSheetChanges,
            stop: stopWatchingForSheetChanges
          };
        }
        function createRAFSheetWatcher(element, safeGetSheetRules, callback, isCancelled) {
          let rulesChangeKey = null;
          let rulesCheckFrameId = null;
          function getRulesChangeKey() {
            const rules = safeGetSheetRules();
            return rules ? rules.length : null;
          }
          function didRulesKeyChange() {
            return getRulesChangeKey() !== rulesChangeKey;
          }
          function watchForSheetChangesUsingRAF() {
            rulesChangeKey = getRulesChangeKey();
            stopWatchingForSheetChangesUsingRAF();
            const checkForUpdate = () => {
              const cancelled = isCancelled();
              if (!cancelled && didRulesKeyChange()) {
                rulesChangeKey = getRulesChangeKey();
                callback();
              }
              if (cancelled || canUseSheetProxy && element.sheet) {
                stopWatchingForSheetChangesUsingRAF();
                return;
              }
              rulesCheckFrameId = requestAnimationFrame(checkForUpdate);
            };
            checkForUpdate();
          }
          function stopWatchingForSheetChangesUsingRAF() {
            rulesCheckFrameId && cancelAnimationFrame(rulesCheckFrameId);
          }
          return {
            start: watchForSheetChangesUsingRAF,
            stop: stopWatchingForSheetChangesUsingRAF
          };
        }
        const STYLE_SELECTOR = 'style, link[rel*="stylesheet" i]:not([disabled])';
        function isFontsGoogleApiStyle(element) {
          if (!element.href) {
            return false;
          }
          try {
            const elementURL = new URL(element.href);
            return elementURL.hostname === "fonts.googleapis.com";
          } catch (err) {
            logInfo("Couldn't construct ".concat(element.href, " as URL"));
            return false;
          }
        }
        const hostsBreakingOnSVGStyleOverride = [
          "account.containerstore.com",
          "containerstore.com",
          "www.onet.pl"
        ];
        function shouldManageStyle(element) {
          return (element instanceof HTMLStyleElement || element instanceof SVGStyleElement && !hostsBreakingOnSVGStyleOverride.includes(
            location.hostname
          ) || element instanceof HTMLLinkElement && Boolean(element.rel) && element.rel.toLowerCase().includes("stylesheet") && Boolean(element.href) && !element.disabled && (isFirefox ? !element.href.startsWith("moz-extension://") : true) && !isFontsGoogleApiStyle(element)) && !element.classList.contains("darkreader") && element.media.toLowerCase() !== "print" && !element.classList.contains("stylus");
        }
        function getManageableStyles(node, results = [], deep = true) {
          if (shouldManageStyle(node)) {
            results.push(node);
          } else if (node instanceof Element || isShadowDomSupported && node instanceof ShadowRoot || node === document) {
            forEach(
              node.querySelectorAll(STYLE_SELECTOR),
              (style) => getManageableStyles(style, results, false)
            );
            if (deep) {
              iterateShadowHosts(
                node,
                (host) => getManageableStyles(host.shadowRoot, results, false)
              );
            }
          }
          return results;
        }
        const syncStyleSet = /* @__PURE__ */ new WeakSet();
        const corsStyleSet = /* @__PURE__ */ new WeakSet();
        let loadingLinkCounter = 0;
        const rejectorsForLoadingLinks = /* @__PURE__ */ new Map();
        function cleanLoadingLinks() {
          rejectorsForLoadingLinks.clear();
        }
        function manageStyle(element, { update, loadingStart, loadingEnd }) {
          const prevStyles = [];
          let next = element;
          while ((next = next.nextElementSibling) && next.matches(".darkreader")) {
            prevStyles.push(next);
          }
          let corsCopy = prevStyles.find(
            (el) => el.matches(".darkreader--cors") && !corsStyleSet.has(el)
          ) || null;
          let syncStyle = prevStyles.find(
            (el) => el.matches(".darkreader--sync") && !syncStyleSet.has(el)
          ) || null;
          let corsCopyPositionWatcher = null;
          let syncStylePositionWatcher = null;
          let cancelAsyncOperations = false;
          let isOverrideEmpty = true;
          const isAsyncCancelled = () => cancelAsyncOperations;
          const sheetModifier = createStyleSheetModifier();
          const observer2 = new MutationObserver((mutations) => {
            var _a;
            if (mutations.some((m) => m.type === "characterData") && containsCSSImport()) {
              const cssText = ((_a = element.textContent) != null ? _a : "").trim();
              createOrUpdateCORSCopy(cssText, location.href).then(update);
            } else {
              update();
            }
          });
          const observerOptions = {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
          };
          function containsCSSImport() {
            var _a;
            if (!(element instanceof HTMLStyleElement)) {
              return false;
            }
            const cssText = removeCSSComments((_a = element.textContent) != null ? _a : "").trim();
            return cssText.match(cssImportRegex);
          }
          function hasImports(cssRules, checkCrossOrigin) {
            let result = false;
            if (cssRules) {
              let rule;
              cssRulesLoop:
                for (let i = 0, len = cssRules.length; i < len; i++) {
                  rule = cssRules[i];
                  if (rule.href) {
                    if (checkCrossOrigin) {
                      if (!rule.href.startsWith(
                        "https://fonts.googleapis.com/"
                      ) && rule.href.startsWith("http") && !rule.href.startsWith(location.origin)) {
                        result = true;
                        break cssRulesLoop;
                      }
                    } else {
                      result = true;
                      break cssRulesLoop;
                    }
                  }
                }
            }
            return result;
          }
          function getRulesSync() {
            if (corsCopy) {
              return corsCopy.sheet.cssRules;
            }
            if (containsCSSImport()) {
              return null;
            }
            const cssRules = safeGetSheetRules();
            if (element instanceof HTMLLinkElement && !isRelativeHrefOnAbsolutePath(element.href) && hasImports(cssRules, false)) {
              return null;
            }
            if (hasImports(cssRules, true)) {
              return null;
            }
            !cssRules && logWarn("[getRulesSync] cssRules is null, trying again.");
            return cssRules;
          }
          function insertStyle() {
            if (corsCopy) {
              if (element.nextSibling !== corsCopy) {
                element.parentNode.insertBefore(
                  corsCopy,
                  element.nextSibling
                );
              }
              if (corsCopy.nextSibling !== syncStyle) {
                element.parentNode.insertBefore(
                  syncStyle,
                  corsCopy.nextSibling
                );
              }
            } else if (element.nextSibling !== syncStyle) {
              element.parentNode.insertBefore(syncStyle, element.nextSibling);
            }
          }
          function createSyncStyle() {
            syncStyle = element instanceof SVGStyleElement ? document.createElementNS(
              "http://www.w3.org/2000/svg",
              "style"
            ) : document.createElement("style");
            syncStyle.classList.add("darkreader");
            syncStyle.classList.add("darkreader--sync");
            syncStyle.media = "screen";
            if (element.title) {
              syncStyle.title = element.title;
            }
            syncStyleSet.add(syncStyle);
          }
          let isLoadingRules = false;
          let wasLoadingError = false;
          const loadingLinkId = ++loadingLinkCounter;
          async function getRulesAsync() {
            let cssText;
            let cssBasePath;
            if (element instanceof HTMLLinkElement) {
              let [cssRules, accessError] = getRulesOrError();
              if (accessError) {
                logWarn(accessError);
              }
              if (isSafari && !element.sheet || !isSafari && !cssRules && !accessError || isStillLoadingError(accessError)) {
                try {
                  logInfo(
                    "Linkelement ".concat(loadingLinkId, " is not loaded yet and thus will be await for"),
                    element
                  );
                  await linkLoading(element, loadingLinkId);
                } catch (err) {
                  logWarn(err);
                  wasLoadingError = true;
                }
                if (cancelAsyncOperations) {
                  return null;
                }
                [cssRules, accessError] = getRulesOrError();
                if (accessError) {
                  logWarn(accessError);
                }
              }
              if (cssRules) {
                if (!hasImports(cssRules, false)) {
                  return cssRules;
                }
              }
              cssText = await loadText(element.href);
              cssBasePath = getCSSBaseBath(element.href);
              if (cancelAsyncOperations) {
                return null;
              }
            } else if (containsCSSImport()) {
              cssText = element.textContent.trim();
              cssBasePath = getCSSBaseBath(location.href);
            } else {
              return null;
            }
            await createOrUpdateCORSCopy(cssText, cssBasePath);
            if (corsCopy) {
              return corsCopy.sheet.cssRules;
            }
            return null;
          }
          async function createOrUpdateCORSCopy(cssText, cssBasePath) {
            var _a, _b;
            if (cssText) {
              try {
                const fullCSSText = await replaceCSSImports(
                  cssText,
                  cssBasePath
                );
                if (corsCopy) {
                  if (((_b = (_a = corsCopy.textContent) == null ? void 0 : _a.length) != null ? _b : 0) < fullCSSText.length) {
                    corsCopy.textContent = fullCSSText;
                  }
                } else {
                  corsCopy = createCORSCopy(element, fullCSSText);
                }
              } catch (err) {
                logWarn(err);
              }
              if (corsCopy) {
                corsCopyPositionWatcher = watchForNodePosition(
                  corsCopy,
                  "prev-sibling"
                );
              }
            }
          }
          function details(options) {
            const rules = getRulesSync();
            if (!rules) {
              if (options.secondRound) {
                logWarn(
                  "Detected dead-lock at details(), returning early to prevent it."
                );
                return null;
              }
              if (isLoadingRules || wasLoadingError) {
                return null;
              }
              isLoadingRules = true;
              loadingStart();
              getRulesAsync().then((results) => {
                isLoadingRules = false;
                loadingEnd();
                if (results) {
                  update();
                }
              }).catch((err) => {
                logWarn(err);
                isLoadingRules = false;
                loadingEnd();
              });
              return null;
            }
            return { rules };
          }
          let forceRenderStyle = false;
          function render(theme2, ignoreImageAnalysis) {
            const rules = getRulesSync();
            if (!rules) {
              return;
            }
            cancelAsyncOperations = false;
            function removeCSSRulesFromSheet(sheet) {
              if (!sheet) {
                return;
              }
              for (let i = sheet.cssRules.length - 1; i >= 0; i--) {
                sheet.deleteRule(i);
              }
            }
            function prepareOverridesSheet() {
              if (!syncStyle) {
                createSyncStyle();
              }
              syncStylePositionWatcher && syncStylePositionWatcher.stop();
              insertStyle();
              if (syncStyle.sheet == null) {
                syncStyle.textContent = "";
              }
              const sheet = syncStyle.sheet;
              removeCSSRulesFromSheet(sheet);
              if (syncStylePositionWatcher) {
                syncStylePositionWatcher.run();
              } else {
                syncStylePositionWatcher = watchForNodePosition(
                  syncStyle,
                  "prev-sibling",
                  () => {
                    forceRenderStyle = true;
                    buildOverrides();
                  }
                );
              }
              return syncStyle.sheet;
            }
            function buildOverrides() {
              const force = forceRenderStyle;
              forceRenderStyle = false;
              sheetModifier.modifySheet({
                prepareSheet: prepareOverridesSheet,
                sourceCSSRules: rules,
                theme: theme2,
                ignoreImageAnalysis,
                force,
                isAsyncCancelled
              });
              isOverrideEmpty = syncStyle.sheet.cssRules.length === 0;
              if (sheetModifier.shouldRebuildStyle()) {
                addReadyStateCompleteListener(() => update());
              }
            }
            buildOverrides();
          }
          function getRulesOrError() {
            try {
              if (element.sheet == null) {
                return [null, null];
              }
              return [element.sheet.cssRules, null];
            } catch (err) {
              return [null, err];
            }
          }
          function isStillLoadingError(error) {
            return error && error.message && error.message.includes("loading");
          }
          function safeGetSheetRules() {
            const [cssRules, err] = getRulesOrError();
            if (err) {
              logWarn(err);
              return null;
            }
            return cssRules;
          }
          const sheetChangeWatcher = createSheetWatcher(
            element,
            safeGetSheetRules,
            update,
            isAsyncCancelled
          );
          function pause() {
            observer2.disconnect();
            cancelAsyncOperations = true;
            corsCopyPositionWatcher && corsCopyPositionWatcher.stop();
            syncStylePositionWatcher && syncStylePositionWatcher.stop();
            sheetChangeWatcher.stop();
          }
          function destroy() {
            pause();
            removeNode(corsCopy);
            removeNode(syncStyle);
            loadingEnd();
            if (rejectorsForLoadingLinks.has(loadingLinkId)) {
              const reject = rejectorsForLoadingLinks.get(loadingLinkId);
              rejectorsForLoadingLinks.delete(loadingLinkId);
              reject && reject();
            }
          }
          function watch() {
            observer2.observe(element, observerOptions);
            if (element instanceof HTMLStyleElement) {
              sheetChangeWatcher.start();
            }
          }
          const maxMoveCount = 10;
          let moveCount = 0;
          function restore() {
            if (!syncStyle) {
              return;
            }
            moveCount++;
            if (moveCount > maxMoveCount) {
              logWarn("Style sheet was moved multiple times", element);
              return;
            }
            logWarn("Restore style", syncStyle, element);
            insertStyle();
            corsCopyPositionWatcher && corsCopyPositionWatcher.skip();
            syncStylePositionWatcher && syncStylePositionWatcher.skip();
            if (!isOverrideEmpty) {
              forceRenderStyle = true;
              update();
            }
          }
          return {
            details,
            render,
            pause,
            destroy,
            watch,
            restore
          };
        }
        async function linkLoading(link, loadingId) {
          return new Promise((resolve, reject) => {
            const cleanUp = () => {
              link.removeEventListener("load", onLoad);
              link.removeEventListener("error", onError);
              rejectorsForLoadingLinks.delete(loadingId);
            };
            const onLoad = () => {
              cleanUp();
              resolve();
            };
            const onError = () => {
              cleanUp();
              reject(
                "Linkelement ".concat(loadingId, " couldn't be loaded. ").concat(link.href)
              );
            };
            rejectorsForLoadingLinks.set(loadingId, () => {
              cleanUp();
              reject();
            });
            link.addEventListener("load", onLoad, { passive: true });
            link.addEventListener("error", onError, { passive: true });
            if (!link.href) {
              onError();
            }
          });
        }
        function getCSSImportURL(importDeclaration) {
          return getCSSURLValue(
            importDeclaration.substring(7).trim().replace(/;$/, "").replace(/screen$/, "")
          );
        }
        async function loadText(url) {
          if (url.startsWith("data:")) {
            return await (await fetch(url)).text();
          }
          const cache = readCSSFetchCache(url);
          if (cache) {
            return cache;
          }
          const parsedURL = new URL(url);
          let text;
          if (parsedURL.origin === location.origin) {
            text = await loadAsText(url, "text/css", location.origin);
          } else {
            text = await bgFetch({
              url,
              responseType: "text",
              mimeType: "text/css",
              origin: location.origin
            });
          }
          writeCSSFetchCache(url, text);
          return text;
        }
        async function replaceCSSImports(cssText, basePath, cache = /* @__PURE__ */ new Map()) {
          cssText = removeCSSComments(cssText);
          cssText = replaceCSSFontFace(cssText);
          cssText = replaceCSSRelativeURLsWithAbsolute(cssText, basePath);
          const importMatches = getMatchesWithOffsets(cssImportRegex, cssText);
          let prev = null;
          let shouldIgnoreImportsInBetween = false;
          let diff = 0;
          for (const match of importMatches) {
            let importedCSS;
            const prevImportEnd = prev ? prev.offset + prev.text.length : 0;
            const nextImportStart = match.offset;
            const openBraceIndex = cssText.indexOf("{", prevImportEnd);
            const closeBraceIndex = cssText.indexOf("}", prevImportEnd);
            if (shouldIgnoreImportsInBetween || openBraceIndex >= 0 && openBraceIndex < nextImportStart && closeBraceIndex >= 0 && closeBraceIndex < nextImportStart) {
              shouldIgnoreImportsInBetween = true;
              importedCSS = "";
            } else {
              const importURL = getCSSImportURL(match.text);
              const absoluteURL = getAbsoluteURL(basePath, importURL);
              if (cache.has(absoluteURL)) {
                importedCSS = cache.get(absoluteURL);
              } else {
                try {
                  importedCSS = await loadText(absoluteURL);
                  cache.set(absoluteURL, importedCSS);
                  importedCSS = await replaceCSSImports(
                    importedCSS,
                    getCSSBaseBath(absoluteURL),
                    cache
                  );
                } catch (err) {
                  logWarn(err);
                  importedCSS = "";
                }
              }
            }
            cssText = cssText.substring(0, match.offset + diff) + importedCSS + cssText.substring(match.offset + match.text.length + diff);
            diff += importedCSS.length - match.text.length;
            prev = match;
          }
          cssText = cssText.trim();
          return cssText;
        }
        function createCORSCopy(srcElement, cssText) {
          if (!cssText) {
            return null;
          }
          const cors = document.createElement("style");
          cors.classList.add("darkreader");
          cors.classList.add("darkreader--cors");
          cors.media = "screen";
          cors.textContent = cssText;
          srcElement.parentNode.insertBefore(cors, srcElement.nextSibling);
          cors.sheet.disabled = true;
          corsStyleSet.add(cors);
          return cors;
        }
        function injectProxy(enableStyleSheetsProxy, enableCustomElementRegistryProxy) {
          document.dispatchEvent(
            new CustomEvent("__darkreader__inlineScriptsAllowed")
          );
          const cleaners2 = [];
          function cleanUp() {
            cleaners2.forEach((clean) => clean());
            cleaners2.splice(0);
          }
          function documentEventListener(type, listener, options) {
            document.addEventListener(type, listener, options);
            cleaners2.push(() => document.removeEventListener(type, listener));
          }
          function disableConflictingPlugins2() {
            const disableWPDarkMode = () => {
              var _a;
              if ((_a = window == null ? void 0 : window.WPDarkMode) == null ? void 0 : _a.deactivate) {
                window.WPDarkMode.deactivate();
              }
            };
            disableWPDarkMode();
          }
          documentEventListener("__darkreader__cleanUp", cleanUp);
          documentEventListener(
            "__darkreader__disableConflictingPlugins",
            disableConflictingPlugins2
          );
          function overrideProperty(cls, prop, overrides2) {
            const proto = cls.prototype;
            const oldDescriptor = Object.getOwnPropertyDescriptor(proto, prop);
            if (!oldDescriptor) {
              return;
            }
            const newDescriptor = __spreadValues({}, oldDescriptor);
            Object.keys(overrides2).forEach((key) => {
              const factory = overrides2[key];
              newDescriptor[key] = factory(oldDescriptor[key]);
            });
            Object.defineProperty(proto, prop, newDescriptor);
            cleaners2.push(
              () => Object.defineProperty(proto, prop, oldDescriptor)
            );
          }
          function override(cls, prop, factory) {
            overrideProperty(cls, prop, { value: factory });
          }
          function isDRElement(element) {
            var _a;
            return (_a = element == null ? void 0 : element.classList) == null ? void 0 : _a.contains("darkreader");
          }
          function isDRSheet(sheet) {
            return isDRElement(sheet.ownerNode);
          }
          const updateSheetEvent = new CustomEvent("__darkreader__updateSheet");
          const adoptedSheetChangeEvent = new CustomEvent(
            "__darkreader__adoptedStyleSheetChange"
          );
          const shadowDomAttachingEvent = new CustomEvent(
            "__darkreader__shadowDomAttaching",
            { bubbles: true }
          );
          const adoptedSheetOwners = /* @__PURE__ */ new WeakMap();
          const adoptedDeclarationSheets = /* @__PURE__ */ new WeakMap();
          function onAdoptedSheetChange(sheet) {
            const owners = adoptedSheetOwners.get(sheet);
            owners == null ? void 0 : owners.forEach((node) => {
              if (node.isConnected) {
                node.dispatchEvent(adoptedSheetChangeEvent);
              } else {
                owners.delete(node);
              }
            });
          }
          function reportSheetChange(sheet) {
            if (sheet.ownerNode && !isDRSheet(sheet)) {
              sheet.ownerNode.dispatchEvent(updateSheetEvent);
            }
            if (adoptedSheetOwners.has(sheet)) {
              onAdoptedSheetChange(sheet);
            }
          }
          function reportSheetChangeAsync(sheet, promise) {
            const { ownerNode } = sheet;
            if (ownerNode && !isDRSheet(sheet) && promise && promise instanceof Promise) {
              promise.then(() => ownerNode.dispatchEvent(updateSheetEvent));
            }
            if (adoptedSheetOwners.has(sheet)) {
              if (promise && promise instanceof Promise) {
                promise.then(() => onAdoptedSheetChange(sheet));
              }
            }
          }
          override(
            CSSStyleSheet,
            "addRule",
            (native) => function(selector, style, index) {
              native.call(this, selector, style, index);
              reportSheetChange(this);
              return -1;
            }
          );
          override(
            CSSStyleSheet,
            "insertRule",
            (native) => function(rule, index) {
              const returnValue = native.call(this, rule, index);
              reportSheetChange(this);
              return returnValue;
            }
          );
          override(
            CSSStyleSheet,
            "deleteRule",
            (native) => function(index) {
              native.call(this, index);
              reportSheetChange(this);
            }
          );
          override(
            CSSStyleSheet,
            "removeRule",
            (native) => function(index) {
              native.call(this, index);
              reportSheetChange(this);
            }
          );
          override(
            CSSStyleSheet,
            "replace",
            (native) => function(cssText) {
              const returnValue = native.call(this, cssText);
              reportSheetChangeAsync(this, returnValue);
              return returnValue;
            }
          );
          override(
            CSSStyleSheet,
            "replaceSync",
            (native) => function(cssText) {
              native.call(this, cssText);
              reportSheetChange(this);
            }
          );
          override(
            Element,
            "attachShadow",
            (native) => function(options) {
              this.dispatchEvent(shadowDomAttachingEvent);
              return native.call(this, options);
            }
          );
          const shouldWrapHTMLElement = location.hostname === "baidu.com" || location.hostname.endsWith(".baidu.com");
          if (shouldWrapHTMLElement) {
            override(
              Element,
              "getElementsByTagName",
              (native) => function(tagName) {
                if (tagName !== "style") {
                  return native.call(this, tagName);
                }
                const getCurrentElementValue = () => {
                  const elements2 = native.call(this, tagName);
                  return Object.setPrototypeOf(
                    [...elements2].filter(
                      (element) => element && !isDRElement(element)
                    ),
                    NodeList.prototype
                  );
                };
                let elements = getCurrentElementValue();
                const nodeListBehavior = {
                  get: function(_, property) {
                    return getCurrentElementValue()[Number(property) || property];
                  }
                };
                elements = new Proxy(elements, nodeListBehavior);
                return elements;
              }
            );
          }
          const shouldProxyChildNodes = ["brilliant.org", "www.vy.no"].includes(
            location.hostname
          );
          if (shouldProxyChildNodes) {
            overrideProperty(Node, "childNodes", {
              get: (native) => function() {
                const childNodes = native.call(this);
                return Object.setPrototypeOf(
                  [...childNodes].filter((element) => {
                    return !isDRElement(element);
                  }),
                  NodeList.prototype
                );
              }
            });
          }
          function resolveCustomElement(tag) {
            customElements.whenDefined(tag).then(() => {
              document.dispatchEvent(
                new CustomEvent("__darkreader__isDefined", { detail: { tag } })
              );
            });
          }
          documentEventListener(
            "__darkreader__addUndefinedResolver",
            (e) => resolveCustomElement(e.detail.tag)
          );
          if (enableCustomElementRegistryProxy) {
            override(
              CustomElementRegistry,
              "define",
              (native) => function(name, constructor, options) {
                resolveCustomElement(name);
                native.call(this, name, constructor, options);
              }
            );
          }
          let blobURLAllowed = null;
          async function checkBlobURLSupport() {
            if (blobURLAllowed != null) {
              document.dispatchEvent(
                new CustomEvent("__darkreader__blobURLCheckResponse", {
                  detail: { blobURLAllowed }
                })
              );
              return;
            }
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="transparent"/></svg>';
            const bytes = new Uint8Array(svg.length);
            for (let i = 0; i < svg.length; i++) {
              bytes[i] = svg.charCodeAt(i);
            }
            const blob = new Blob([bytes], { type: "image/svg+xml" });
            const objectURL = URL.createObjectURL(blob);
            try {
              const image = new Image();
              await new Promise((resolve, reject) => {
                image.onload = () => resolve();
                image.onerror = () => reject();
                image.src = objectURL;
              });
              blobURLAllowed = true;
            } catch (err) {
              blobURLAllowed = false;
            }
            document.dispatchEvent(
              new CustomEvent("__darkreader__blobURLCheckResponse", {
                detail: { blobURLAllowed }
              })
            );
          }
          documentEventListener(
            "__darkreader__blobURLCheckRequest",
            checkBlobURLSupport
          );
          if (enableStyleSheetsProxy) {
            overrideProperty(Document, "styleSheets", {
              get: (native) => function() {
                const getCurrentValue = () => {
                  const docSheets = native.call(this);
                  const filteredSheets = [...docSheets].filter(
                    (styleSheet) => styleSheet.ownerNode && !isDRSheet(styleSheet)
                  );
                  filteredSheets.item = (item) => filteredSheets[item];
                  return Object.setPrototypeOf(
                    filteredSheets,
                    StyleSheetList.prototype
                  );
                };
                let elements = getCurrentValue();
                const styleSheetListBehavior = {
                  get: function(_, property) {
                    return getCurrentValue()[property];
                  }
                };
                elements = new Proxy(elements, styleSheetListBehavior);
                return elements;
              }
            });
          }
          {
            const adoptedSheetsSourceProxies = /* @__PURE__ */ new WeakMap();
            const adoptedSheetsProxySources = /* @__PURE__ */ new WeakMap();
            const adoptedSheetsChangeEvent = new CustomEvent(
              "__darkreader__adoptedStyleSheetsChange"
            );
            const adoptedSheetOverrideCache = /* @__PURE__ */ new WeakSet();
            const adoptedSheetsSnapshots = /* @__PURE__ */ new WeakMap();
            const isDRAdoptedSheetOverride = (sheet) => {
              if (!sheet || !sheet.cssRules) {
                return false;
              }
              if (adoptedSheetOverrideCache.has(sheet)) {
                return true;
              }
              if (sheet.cssRules.length > 0 && sheet.cssRules[0].cssText.startsWith(
                "#__darkreader__adoptedOverride"
              )) {
                adoptedSheetOverrideCache.add(sheet);
                return true;
              }
              return false;
            };
            const areArraysEqual = (a, b) => {
              return a.length === b.length && a.every((x, i) => x === b[i]);
            };
            const onAdoptedSheetsChange = (node) => {
              const prev = adoptedSheetsSnapshots.get(node);
              const curr = (node.adoptedStyleSheets || []).filter(
                (s) => !isDRAdoptedSheetOverride(s)
              );
              adoptedSheetsSnapshots.set(node, curr);
              if (!prev || !areArraysEqual(prev, curr)) {
                curr.forEach((sheet) => {
                  if (!adoptedSheetOwners.has(sheet)) {
                    adoptedSheetOwners.set(sheet, /* @__PURE__ */ new Set());
                  }
                  adoptedSheetOwners.get(sheet).add(node);
                  for (const rule of sheet.cssRules) {
                    const declaration = rule.style;
                    if (declaration) {
                      adoptedDeclarationSheets.set(
                        declaration,
                        sheet
                      );
                    }
                  }
                });
                node.dispatchEvent(adoptedSheetsChangeEvent);
              }
            };
            const proxyAdoptedSheetsArray = (node, source) => {
              if (adoptedSheetsProxySources.has(source)) {
                return source;
              }
              if (adoptedSheetsSourceProxies.has(source)) {
                return adoptedSheetsSourceProxies.get(source);
              }
              const proxy = new Proxy(source, {
                deleteProperty(target, property) {
                  delete target[property];
                  return true;
                },
                set(target, property, value) {
                  target[property] = value;
                  if (property === "length") {
                    onAdoptedSheetsChange(node);
                  }
                  return true;
                }
              });
              adoptedSheetsSourceProxies.set(source, proxy);
              adoptedSheetsProxySources.set(proxy, source);
              return proxy;
            };
            [Document, ShadowRoot].forEach((ctor) => {
              overrideProperty(ctor, "adoptedStyleSheets", {
                get: (native) => function() {
                  const source = native.call(this);
                  return proxyAdoptedSheetsArray(this, source);
                },
                set: (native) => function(source) {
                  if (adoptedSheetsProxySources.has(source)) {
                    source = adoptedSheetsProxySources.get(source);
                  }
                  native.call(this, source);
                  onAdoptedSheetsChange(this);
                }
              });
            });
            const adoptedDeclarationChangeEvent = new CustomEvent(
              "__darkreader__adoptedStyleDeclarationChange"
            );
            ["setProperty", "removeProperty"].forEach((key) => {
              override(CSSStyleDeclaration, key, (native) => {
                return function(...args) {
                  const returnValue = native.apply(this, args);
                  const sheet = adoptedDeclarationSheets.get(this);
                  if (sheet) {
                    const owners = adoptedSheetOwners.get(sheet);
                    if (owners) {
                      owners.forEach((node) => {
                        node.dispatchEvent(
                          adoptedDeclarationChangeEvent
                        );
                      });
                    }
                  }
                  return returnValue;
                };
              });
            });
          }
        }
        const definedCustomElements = /* @__PURE__ */ new Set();
        const undefinedGroups = /* @__PURE__ */ new Map();
        let elementsDefinitionCallback;
        function isCustomElement(element) {
          if (element.tagName.includes("-") || element.getAttribute("is")) {
            return true;
          }
          return false;
        }
        function recordUndefinedElement(element) {
          let tag = element.tagName.toLowerCase();
          if (!tag.includes("-")) {
            const extendedTag = element.getAttribute("is");
            if (extendedTag) {
              tag = extendedTag;
            } else {
              return;
            }
          }
          if (!undefinedGroups.has(tag)) {
            undefinedGroups.set(tag, /* @__PURE__ */ new Set());
            customElementsWhenDefined(tag).then(() => {
              if (elementsDefinitionCallback) {
                const elements = undefinedGroups.get(tag);
                ASSERT(
                  "recordUndefinedElement() undefined groups should not be empty",
                  elements
                );
                undefinedGroups.delete(tag);
                elementsDefinitionCallback(Array.from(elements));
              }
            });
          }
          undefinedGroups.get(tag).add(element);
        }
        function collectUndefinedElements(root) {
          if (!isDefinedSelectorSupported) {
            return;
          }
          forEach(
            root.querySelectorAll(":not(:defined)"),
            recordUndefinedElement
          );
        }
        let canOptimizeUsingProxy = false;
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => {
            canOptimizeUsingProxy = true;
          },
          { once: true, passive: true }
        );
        const unhandledShadowHosts = /* @__PURE__ */ new Set();
        document.addEventListener("__darkreader__shadowDomAttaching", (e) => {
          const host = e.target;
          if (unhandledShadowHosts.size === 0) {
            queueMicrotask(() => {
              const hosts = [...unhandledShadowHosts].filter(
                (el) => el.shadowRoot
              );
              elementsDefinitionCallback == null ? void 0 : elementsDefinitionCallback(hosts);
              unhandledShadowHosts.clear();
            });
          }
          unhandledShadowHosts.add(host);
        });
        const resolvers = /* @__PURE__ */ new Map();
        function handleIsDefined(e) {
          canOptimizeUsingProxy = true;
          const tag = e.detail.tag;
          ASSERT(
            "handleIsDefined() expects lower-case node names",
            () => tag.toLowerCase() === tag
          );
          definedCustomElements.add(tag);
          if (resolvers.has(tag)) {
            const r = resolvers.get(tag);
            resolvers.delete(tag);
            r.forEach((r2) => r2());
          }
        }
        async function customElementsWhenDefined(tag) {
          ASSERT(
            "customElementsWhenDefined() expects lower-case node names",
            () => tag.toLowerCase() === tag
          );
          if (definedCustomElements.has(tag)) {
            return;
          }
          return new Promise((resolve) => {
            if (window.customElements && typeof customElements.whenDefined === "function") {
              customElements.whenDefined(tag).then(() => resolve());
            } else if (canOptimizeUsingProxy) {
              if (resolvers.has(tag)) {
                resolvers.get(tag).push(resolve);
              } else {
                resolvers.set(tag, [resolve]);
              }
              document.dispatchEvent(
                new CustomEvent("__darkreader__addUndefinedResolver", {
                  detail: { tag }
                })
              );
            } else {
              const checkIfDefined = () => {
                const elements = undefinedGroups.get(tag);
                if (elements && elements.size > 0) {
                  if (elements.values().next().value.matches(":defined")) {
                    resolve();
                  } else {
                    requestAnimationFrame(checkIfDefined);
                  }
                }
              };
              requestAnimationFrame(checkIfDefined);
            }
          });
        }
        function watchWhenCustomElementsDefined(callback) {
          elementsDefinitionCallback = callback;
        }
        function unsubscribeFromDefineCustomElements() {
          elementsDefinitionCallback = null;
          undefinedGroups.clear();
          document.removeEventListener(
            "__darkreader__isDefined",
            handleIsDefined
          );
        }
        const observers = [];
        let observedRoots;
        let handledShadowHosts;
        function watchForStylePositions(currentStyles, update, shadowRootDiscovered) {
          stopWatchingForStylePositions();
          const prevStylesByRoot = /* @__PURE__ */ new WeakMap();
          const getPrevStyles = (root) => {
            if (!prevStylesByRoot.has(root)) {
              prevStylesByRoot.set(root, /* @__PURE__ */ new Set());
            }
            return prevStylesByRoot.get(root);
          };
          currentStyles.forEach((node) => {
            let root = node;
            while (root = root.parentNode) {
              if (root === document || root.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                const prevStyles = getPrevStyles(root);
                prevStyles.add(node);
                break;
              }
            }
          });
          const prevStyleSiblings = /* @__PURE__ */ new WeakMap();
          const nextStyleSiblings = /* @__PURE__ */ new WeakMap();
          function saveStylePosition(style) {
            prevStyleSiblings.set(style, style.previousElementSibling);
            nextStyleSiblings.set(style, style.nextElementSibling);
          }
          function forgetStylePosition(style) {
            prevStyleSiblings.delete(style);
            nextStyleSiblings.delete(style);
          }
          function didStylePositionChange(style) {
            return style.previousElementSibling !== prevStyleSiblings.get(style) || style.nextElementSibling !== nextStyleSiblings.get(style);
          }
          currentStyles.forEach(saveStylePosition);
          function handleStyleOperations(root, operations) {
            const { createdStyles, removedStyles, movedStyles } = operations;
            createdStyles.forEach((s) => saveStylePosition(s));
            movedStyles.forEach((s) => saveStylePosition(s));
            removedStyles.forEach((s) => forgetStylePosition(s));
            const prevStyles = getPrevStyles(root);
            createdStyles.forEach((s) => prevStyles.add(s));
            removedStyles.forEach((s) => prevStyles.delete(s));
            if (createdStyles.size + removedStyles.size + movedStyles.size > 0) {
              update({
                created: Array.from(createdStyles),
                removed: Array.from(removedStyles),
                moved: Array.from(movedStyles),
                updated: []
              });
            }
          }
          function handleMinorTreeMutations(root, { additions, moves, deletions }) {
            const createdStyles = /* @__PURE__ */ new Set();
            const removedStyles = /* @__PURE__ */ new Set();
            const movedStyles = /* @__PURE__ */ new Set();
            additions.forEach(
              (node) => getManageableStyles(node).forEach(
                (style) => createdStyles.add(style)
              )
            );
            deletions.forEach(
              (node) => getManageableStyles(node).forEach(
                (style) => removedStyles.add(style)
              )
            );
            moves.forEach(
              (node) => getManageableStyles(node).forEach(
                (style) => movedStyles.add(style)
              )
            );
            handleStyleOperations(root, {
              createdStyles,
              removedStyles,
              movedStyles
            });
            additions.forEach((n) => {
              deepObserve(n);
              collectUndefinedElements(n);
            });
            additions.forEach(
              (node) => isCustomElement(node) && recordUndefinedElement(node)
            );
            additions.forEach((node) => checkImageSelectors(node));
          }
          function handleHugeTreeMutations(root) {
            const styles = new Set(getManageableStyles(root));
            const createdStyles = /* @__PURE__ */ new Set();
            const removedStyles = /* @__PURE__ */ new Set();
            const movedStyles = /* @__PURE__ */ new Set();
            const prevStyles = getPrevStyles(root);
            styles.forEach((s) => {
              if (!prevStyles.has(s)) {
                createdStyles.add(s);
              }
            });
            prevStyles.forEach((s) => {
              if (!styles.has(s)) {
                removedStyles.add(s);
              }
            });
            styles.forEach((s) => {
              if (!createdStyles.has(s) && !removedStyles.has(s) && didStylePositionChange(s)) {
                movedStyles.add(s);
              }
            });
            handleStyleOperations(root, {
              createdStyles,
              removedStyles,
              movedStyles
            });
            deepObserve(root);
            collectUndefinedElements(root);
            checkImageSelectors(root);
          }
          function handleAttributeMutations(mutations) {
            const updatedStyles = /* @__PURE__ */ new Set();
            const removedStyles = /* @__PURE__ */ new Set();
            mutations.forEach((m) => {
              const { target } = m;
              if (target.isConnected) {
                if (shouldManageStyle(target)) {
                  updatedStyles.add(target);
                } else if (target instanceof HTMLLinkElement && target.disabled) {
                  removedStyles.add(target);
                }
              }
            });
            if (updatedStyles.size + removedStyles.size > 0) {
              update({
                updated: Array.from(updatedStyles),
                created: [],
                removed: Array.from(removedStyles),
                moved: []
              });
            }
          }
          function observe(root) {
            if (observedRoots.has(root)) {
              return;
            }
            const treeObserver = createOptimizedTreeObserver(root, {
              onMinorMutations: handleMinorTreeMutations,
              onHugeMutations: handleHugeTreeMutations
            });
            const attrObserver = new MutationObserver(handleAttributeMutations);
            attrObserver.observe(root, {
              attributeFilter: ["rel", "disabled", "media", "href"],
              subtree: true
            });
            observers.push(treeObserver, attrObserver);
            observedRoots.add(root);
          }
          function subscribeForShadowRootChanges(node) {
            const { shadowRoot } = node;
            if (shadowRoot == null || observedRoots.has(shadowRoot)) {
              return;
            }
            observe(shadowRoot);
            shadowRootDiscovered(shadowRoot);
          }
          function deepObserve(node) {
            iterateShadowHosts(node, subscribeForShadowRootChanges);
          }
          observe(document);
          deepObserve(document.documentElement);
          watchWhenCustomElementsDefined((hosts) => {
            hosts = hosts.filter((node) => !handledShadowHosts.has(node));
            const newStyles = [];
            hosts.forEach(
              (host) => push(newStyles, getManageableStyles(host.shadowRoot))
            );
            update({ created: newStyles, updated: [], removed: [], moved: [] });
            hosts.forEach((host) => {
              const { shadowRoot } = host;
              if (shadowRoot == null) {
                return;
              }
              subscribeForShadowRootChanges(host);
              deepObserve(shadowRoot);
              collectUndefinedElements(shadowRoot);
            });
            hosts.forEach((node) => handledShadowHosts.add(node));
          });
          document.addEventListener("__darkreader__isDefined", handleIsDefined);
          collectUndefinedElements(document);
        }
        function resetObservers() {
          observers.forEach((o) => o.disconnect());
          observers.splice(0, observers.length);
          observedRoots = /* @__PURE__ */ new WeakSet();
          handledShadowHosts = /* @__PURE__ */ new WeakSet();
        }
        function stopWatchingForStylePositions() {
          resetObservers();
          unsubscribeFromDefineCustomElements();
        }
        function watchForStyleChanges(currentStyles, update, shadowRootDiscovered) {
          watchForStylePositions(currentStyles, update, shadowRootDiscovered);
        }
        function stopWatchingForStyleChanges() {
          stopWatchingForStylePositions();
        }
        const INSTANCE_ID = generateUID();
        const styleManagers = /* @__PURE__ */ new Map();
        const adoptedStyleManagers = [];
        const adoptedStyleFallbacks = /* @__PURE__ */ new Map();
        const adoptedStyleChangeTokens = /* @__PURE__ */ new WeakMap();
        let theme = null;
        let fixes = null;
        let isIFrame$1 = null;
        let ignoredImageAnalysisSelectors = [];
        let ignoredInlineSelectors = [];
        const staticStyleMap = /* @__PURE__ */ new Map();
        function createOrUpdateStyle(className, root = document.head || document) {
          let element = root.querySelector(".".concat(className));
          if (element) {
            staticStyleMap.set(className, element);
          } else if (staticStyleMap.has(className)) {
            element = staticStyleMap.get(className);
          } else {
            element = document.createElement("style");
            element.classList.add("darkreader");
            element.classList.add(className);
            element.media = "screen";
            element.textContent = "";
            staticStyleMap.set(className, element);
          }
          return element;
        }
        function createOrUpdateScript(className, root = document.head || document) {
          let element = root.querySelector(".".concat(className));
          if (!element) {
            element = document.createElement("script");
            element.classList.add("darkreader");
            element.classList.add(className);
          }
          return element;
        }
        const nodePositionWatchers = /* @__PURE__ */ new Map();
        function setupNodePositionWatcher(node, alias, callback) {
          nodePositionWatchers.has(alias) && nodePositionWatchers.get(alias).stop();
          nodePositionWatchers.set(
            alias,
            watchForNodePosition(node, "head", callback)
          );
        }
        function stopStylePositionWatchers() {
          forEach(nodePositionWatchers.values(), (watcher) => watcher.stop());
          nodePositionWatchers.clear();
        }
        function createStaticStyleOverrides() {
          var _a, _b;
          const fallbackStyle = createOrUpdateStyle(
            "darkreader--fallback",
            document
          );
          fallbackStyle.textContent = getModifiedFallbackStyle(theme, {
            strict: true
          });
          document.head.insertBefore(fallbackStyle, document.head.firstChild);
          setupNodePositionWatcher(fallbackStyle, "fallback");
          const userAgentStyle = createOrUpdateStyle("darkreader--user-agent");
          userAgentStyle.textContent = getModifiedUserAgentStyle(
            theme,
            isIFrame$1,
            theme.styleSystemControls
          );
          document.head.insertBefore(userAgentStyle, fallbackStyle.nextSibling);
          setupNodePositionWatcher(userAgentStyle, "user-agent");
          const textStyle = createOrUpdateStyle("darkreader--text");
          if (theme.useFont || theme.textStroke > 0) {
            textStyle.textContent = createTextStyle(theme);
          } else {
            textStyle.textContent = "";
          }
          document.head.insertBefore(textStyle, fallbackStyle.nextSibling);
          setupNodePositionWatcher(textStyle, "text");
          const invertStyle = createOrUpdateStyle("darkreader--invert");
          if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
              "".concat(fixes.invert.join(", "), " {"),
              "    filter: ".concat(getCSSFilterValue(__spreadProps(__spreadValues({}, theme), {
                contrast: theme.mode === 0 ? theme.contrast : clamp(theme.contrast - 10, 0, 100)
              })), " !important;"),
              "}"
            ].join("\n");
          } else {
            invertStyle.textContent = "";
          }
          document.head.insertBefore(invertStyle, textStyle.nextSibling);
          setupNodePositionWatcher(invertStyle, "invert");
          const inlineStyle = createOrUpdateStyle("darkreader--inline");
          inlineStyle.textContent = getInlineOverrideStyle();
          document.head.insertBefore(inlineStyle, invertStyle.nextSibling);
          setupNodePositionWatcher(inlineStyle, "inline");
          const overrideStyle = createOrUpdateStyle("darkreader--override");
          overrideStyle.textContent = fixes && fixes.css ? replaceCSSTemplates(fixes.css) : "";
          document.head.appendChild(overrideStyle);
          setupNodePositionWatcher(overrideStyle, "override");
          const variableStyle = createOrUpdateStyle("darkreader--variables");
          const selectionColors = (theme == null ? void 0 : theme.selectionColor) ? getSelectionColor(theme) : null;
          const neutralBackgroundColor = modifyBackgroundColor(
            parseColorWithCache("#ffffff"),
            theme
          );
          const neutralTextColor = modifyForegroundColor(
            parseColorWithCache("#000000"),
            theme
          );
          variableStyle.textContent = [
            ":root {",
            "   --darkreader-neutral-background: ".concat(neutralBackgroundColor, ";"),
            "   --darkreader-neutral-text: ".concat(neutralTextColor, ";"),
            "   --darkreader-selection-background: ".concat((_a = selectionColors == null ? void 0 : selectionColors.backgroundColorSelection) != null ? _a : "initial", ";"),
            "   --darkreader-selection-text: ".concat((_b = selectionColors == null ? void 0 : selectionColors.foregroundColorSelection) != null ? _b : "initial", ";"),
            "}"
          ].join("\n");
          document.head.insertBefore(variableStyle, inlineStyle.nextSibling);
          setupNodePositionWatcher(
            variableStyle,
            "variables",
            () => registerVariablesSheet(variableStyle.sheet)
          );
          registerVariablesSheet(variableStyle.sheet);
          const rootVarsStyle = createOrUpdateStyle("darkreader--root-vars");
          document.head.insertBefore(rootVarsStyle, variableStyle.nextSibling);
          const enableStyleSheetsProxy = !(fixes && fixes.disableStyleSheetsProxy);
          const enableCustomElementRegistryProxy = !(fixes && fixes.disableCustomElementRegistryProxy);
          document.dispatchEvent(new CustomEvent("__darkreader__cleanUp"));
          {
            const proxyScript = createOrUpdateScript("darkreader--proxy");
            proxyScript.append(
              "(".concat(injectProxy, ")(").concat(enableStyleSheetsProxy, ", ").concat(enableCustomElementRegistryProxy, ")")
            );
            document.head.insertBefore(proxyScript, rootVarsStyle.nextSibling);
            proxyScript.remove();
          }
        }
        const shadowRootsWithOverrides = /* @__PURE__ */ new Set();
        function createShadowStaticStyleOverridesInner(root) {
          const inlineStyle = createOrUpdateStyle("darkreader--inline", root);
          inlineStyle.textContent = getInlineOverrideStyle();
          root.insertBefore(inlineStyle, root.firstChild);
          const overrideStyle = createOrUpdateStyle("darkreader--override", root);
          overrideStyle.textContent = fixes && fixes.css ? replaceCSSTemplates(fixes.css) : "";
          root.insertBefore(overrideStyle, inlineStyle.nextSibling);
          const invertStyle = createOrUpdateStyle("darkreader--invert", root);
          if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
              "".concat(fixes.invert.join(", "), " {"),
              "    filter: ".concat(getCSSFilterValue(__spreadProps(__spreadValues({}, theme), {
                contrast: theme.mode === 0 ? theme.contrast : clamp(theme.contrast - 10, 0, 100)
              })), " !important;"),
              "}"
            ].join("\n");
          } else {
            invertStyle.textContent = "";
          }
          root.insertBefore(invertStyle, overrideStyle.nextSibling);
          shadowRootsWithOverrides.add(root);
        }
        function delayedCreateShadowStaticStyleOverrides(root) {
          const observer2 = new MutationObserver((mutations, observer3) => {
            observer3.disconnect();
            for (const { type, removedNodes } of mutations) {
              if (type === "childList") {
                for (const { nodeName, className } of removedNodes) {
                  if (nodeName === "STYLE" && [
                    "darkreader darkreader--inline",
                    "darkreader darkreader--override",
                    "darkreader darkreader--invert"
                  ].includes(className)) {
                    createShadowStaticStyleOverridesInner(root);
                    return;
                  }
                }
              }
            }
          });
          observer2.observe(root, { childList: true });
        }
        function createShadowStaticStyleOverrides(root) {
          const delayed = root.firstChild === null;
          createShadowStaticStyleOverridesInner(root);
          if (delayed) {
            delayedCreateShadowStaticStyleOverrides(root);
          }
        }
        function replaceCSSTemplates($cssText) {
          return $cssText.replace(/\${(.+?)}/g, (_, $color) => {
            const color = parseColorWithCache($color);
            if (color) {
              const lightness = getSRGBLightness(color.r, color.g, color.b);
              if (lightness > 0.5) {
                return modifyBackgroundColor(color, theme);
              }
              return modifyForegroundColor(color, theme);
            }
            logWarn("Couldn't parse CSSTemplate's color.");
            return $color;
          });
        }
        function cleanFallbackStyle() {
          const fallback = staticStyleMap.get("darkreader--fallback") || document.querySelector(".darkreader--fallback");
          if (fallback) {
            fallback.textContent = "";
          }
        }
        function createDynamicStyleOverrides() {
          cancelRendering();
          const allStyles = getManageableStyles(document);
          const newManagers = allStyles.filter((style) => !styleManagers.has(style)).map((style) => createManager(style));
          newManagers.map((manager) => manager.details({ secondRound: false })).filter((detail) => detail && detail.rules.length > 0).forEach((detail) => {
            variablesStore.addRulesForMatching(detail.rules);
          });
          variablesStore.matchVariablesAndDependents();
          variablesStore.setOnRootVariableChange(() => {
            const rootVarsStyle2 = createOrUpdateStyle("darkreader--root-vars");
            variablesStore.putRootVars(rootVarsStyle2, theme);
          });
          const rootVarsStyle = createOrUpdateStyle("darkreader--root-vars");
          variablesStore.putRootVars(rootVarsStyle, theme);
          styleManagers.forEach(
            (manager) => manager.render(theme, ignoredImageAnalysisSelectors)
          );
          if (loadingStyles.size === 0) {
            cleanFallbackStyle();
          }
          newManagers.forEach((manager) => manager.watch());
          const inlineStyleElements = toArray(
            document.querySelectorAll(INLINE_STYLE_SELECTOR)
          );
          iterateShadowHosts(document.documentElement, (host) => {
            createShadowStaticStyleOverrides(host.shadowRoot);
            const elements = host.shadowRoot.querySelectorAll(
              INLINE_STYLE_SELECTOR
            );
            if (elements.length > 0) {
              push(inlineStyleElements, elements);
            }
          });
          inlineStyleElements.forEach(
            (el) => overrideInlineStyle(
              el,
              theme,
              ignoredInlineSelectors,
              ignoredImageAnalysisSelectors
            )
          );
          handleAdoptedStyleSheets(document);
          variablesStore.matchVariablesAndDependents();
          if (isFirefox) {
            const onAdoptedCssChange = (e) => {
              const { sheets } = e.detail;
              if (!Array.isArray(sheets) || sheets.length === 0) {
                return;
              }
              sheets.forEach(({ sheet }) => {
                const { cssRules } = sheet;
                variablesStore.addRulesForMatching(cssRules);
              });
              variablesStore.matchVariablesAndDependents();
              const response = [];
              sheets.forEach(({ sheetId, sheet }) => {
                const fallback = getAdoptedStyleSheetFallback(sheet);
                const cssRules = sheet.cssRules;
                fallback.render({
                  theme,
                  ignoreImageAnalysis: ignoredImageAnalysisSelectors,
                  cssRules
                });
                const commands = fallback.commands();
                response.push({ sheetId, commands });
              });
              requestAnimationFrameOnce(
                getAdoptedStyleChangeToken(sheets[0].sheet),
                () => {
                  document.dispatchEvent(
                    new CustomEvent(
                      "__darkreader__adoptedStyleSheetCommands",
                      { detail: JSON.stringify(response) }
                    )
                  );
                }
              );
            };
            document.addEventListener(
              "__darkreader__adoptedStyleSheetsChange",
              onAdoptedCssChange
            );
            cleaners.push(
              () => document.removeEventListener(
                "__darkreader__adoptedStyleSheetsChange",
                onAdoptedCssChange
              )
            );
            document.dispatchEvent(
              new CustomEvent("__darkreader__startAdoptedStyleSheetsWatcher")
            );
          }
        }
        let loadingStylesCounter = 0;
        const loadingStyles = /* @__PURE__ */ new Set();
        function createManager(element) {
          const loadingStyleId = ++loadingStylesCounter;
          function loadingStart() {
            if (!isDOMReady() || !documentIsVisible()) {
              loadingStyles.add(loadingStyleId);
              logInfo(
                "Current amount of styles loading: ".concat(loadingStyles.size)
              );
              const fallbackStyle = createOrUpdateStyle(
                "darkreader--fallback"
              );
              if (!fallbackStyle.textContent) {
                fallbackStyle.textContent = getModifiedFallbackStyle(
                  theme,
                  { strict: false }
                );
              }
            }
          }
          function loadingEnd() {
            loadingStyles.delete(loadingStyleId);
            logInfo(
              "Removed loadingStyle ".concat(loadingStyleId, ", now awaiting: ").concat(loadingStyles.size)
            );
            if (loadingStyles.size === 0 && isDOMReady()) {
              cleanFallbackStyle();
            }
          }
          function update() {
            const details = manager.details({ secondRound: true });
            if (!details) {
              return;
            }
            variablesStore.addRulesForMatching(details.rules);
            variablesStore.matchVariablesAndDependents();
            manager.render(theme, ignoredImageAnalysisSelectors);
          }
          const manager = manageStyle(element, {
            update,
            loadingStart,
            loadingEnd
          });
          styleManagers.set(element, manager);
          return manager;
        }
        function removeManager(element) {
          const manager = styleManagers.get(element);
          if (manager) {
            manager.destroy();
            styleManagers.delete(element);
          }
        }
        const throttledRenderAllStyles = throttle((callback) => {
          styleManagers.forEach(
            (manager) => manager.render(theme, ignoredImageAnalysisSelectors)
          );
          adoptedStyleManagers.forEach(
            (manager) => manager.render(theme, ignoredImageAnalysisSelectors)
          );
          callback && callback();
        });
        const cancelRendering = function() {
          throttledRenderAllStyles.cancel();
        };
        function onDOMReady() {
          if (loadingStyles.size === 0) {
            cleanFallbackStyle();
            return;
          }
          logWarn(
            "DOM is ready, but still have styles being loaded.",
            loadingStyles
          );
        }
        function runDynamicStyle() {
          createDynamicStyleOverrides();
          watchForUpdates();
        }
        function createThemeAndWatchForUpdates() {
          createStaticStyleOverrides();
          if (!documentIsVisible() && !theme.immediateModify) {
            setDocumentVisibilityListener(runDynamicStyle);
          } else {
            runDynamicStyle();
          }
          changeMetaThemeColorWhenAvailable(theme);
        }
        function handleAdoptedStyleSheets(node) {
          if (isFirefox) {
            return;
          }
          if (canHaveAdoptedStyleSheets(node)) {
            node.adoptedStyleSheets.forEach((s) => {
              variablesStore.addRulesForMatching(s.cssRules);
            });
            const newManger = createAdoptedStyleSheetOverride(node);
            adoptedStyleManagers.push(newManger);
            newManger.render(theme, ignoredImageAnalysisSelectors);
            newManger.watch((sheets) => {
              sheets.forEach((s) => {
                variablesStore.addRulesForMatching(s.cssRules);
              });
              variablesStore.matchVariablesAndDependents();
              newManger.render(theme, ignoredImageAnalysisSelectors);
            });
          }
        }
        function getAdoptedStyleChangeToken(sheet) {
          if (adoptedStyleChangeTokens.has(sheet)) {
            return adoptedStyleChangeTokens.get(sheet);
          }
          const token = Symbol();
          adoptedStyleChangeTokens.set(sheet, token);
          return token;
        }
        function getAdoptedStyleSheetFallback(sheet) {
          let fallback = adoptedStyleFallbacks.get(sheet);
          if (!fallback) {
            fallback = createAdoptedStyleSheetFallback();
            adoptedStyleFallbacks.set(sheet, fallback);
          }
          return fallback;
        }
        function watchForUpdates() {
          const managedStyles = Array.from(styleManagers.keys());
          watchForStyleChanges(
            managedStyles,
            ({ created, updated, removed, moved }) => {
              const stylesToRemove = removed;
              const stylesToManage = created.concat(updated).concat(moved).filter((style) => !styleManagers.has(style));
              const stylesToRestore = moved.filter(
                (style) => styleManagers.has(style)
              );
              stylesToRemove.forEach((style) => removeManager(style));
              const newManagers = stylesToManage.map(
                (style) => createManager(style)
              );
              newManagers.map((manager) => manager.details({ secondRound: false })).filter((detail) => detail && detail.rules.length > 0).forEach((detail) => {
                variablesStore.addRulesForMatching(detail.rules);
              });
              variablesStore.matchVariablesAndDependents();
              newManagers.forEach(
                (manager) => manager.render(theme, ignoredImageAnalysisSelectors)
              );
              newManagers.forEach((manager) => manager.watch());
              stylesToRestore.forEach(
                (style) => styleManagers.get(style).restore()
              );
            },
            (shadowRoot) => {
              createShadowStaticStyleOverrides(shadowRoot);
              handleAdoptedStyleSheets(shadowRoot);
            }
          );
          watchForInlineStyles(
            (element) => {
              overrideInlineStyle(
                element,
                theme,
                ignoredInlineSelectors,
                ignoredImageAnalysisSelectors
              );
              if (element === document.documentElement) {
                const styleAttr = element.getAttribute("style") || "";
                if (styleAttr.includes("--")) {
                  variablesStore.matchVariablesAndDependents();
                  const rootVarsStyle = createOrUpdateStyle(
                    "darkreader--root-vars"
                  );
                  variablesStore.putRootVars(rootVarsStyle, theme);
                }
              }
            },
            (root) => {
              createShadowStaticStyleOverrides(root);
              const inlineStyleElements = root.querySelectorAll(
                INLINE_STYLE_SELECTOR
              );
              if (inlineStyleElements.length > 0) {
                forEach(
                  inlineStyleElements,
                  (el) => overrideInlineStyle(
                    el,
                    theme,
                    ignoredInlineSelectors,
                    ignoredImageAnalysisSelectors
                  )
                );
              }
            }
          );
          addDOMReadyListener(onDOMReady);
        }
        function stopWatchingForUpdates() {
          styleManagers.forEach((manager) => manager.pause());
          stopStylePositionWatchers();
          stopWatchingForStyleChanges();
          stopWatchingForInlineStyles();
          removeDOMReadyListener(onDOMReady);
          cleanReadyStateCompleteListeners();
        }
        let metaObserver;
        let headObserver = null;
        function addMetaListener() {
          metaObserver = new MutationObserver(() => {
            if (document.querySelector('meta[name="darkreader-lock"]')) {
              metaObserver.disconnect();
              removeDynamicTheme();
            }
          });
          metaObserver.observe(document.head, { childList: true, subtree: true });
        }
        function createDarkReaderInstanceMarker() {
          const metaElement = document.createElement("meta");
          metaElement.name = "darkreader";
          metaElement.content = INSTANCE_ID;
          document.head.appendChild(metaElement);
        }
        function isDRLocked() {
          return document.querySelector('meta[name="darkreader-lock"]') != null;
        }
        function isAnotherDarkReaderInstanceActive() {
          const meta = document.querySelector('meta[name="darkreader"]');
          if (meta) {
            if (meta.content !== INSTANCE_ID) {
              return true;
            }
            return false;
          }
          createDarkReaderInstanceMarker();
          addMetaListener();
          return false;
        }
        let interceptorAttempts = 2;
        function interceptOldScript({ success, failure }) {
          if (--interceptorAttempts <= 0) {
            failure();
            return;
          }
          const oldMeta = document.head.querySelector('meta[name="darkreader"]');
          if (!oldMeta || oldMeta.content === INSTANCE_ID) {
            return;
          }
          const lock = document.createElement("meta");
          lock.name = "darkreader-lock";
          document.head.append(lock);
          queueMicrotask(() => {
            lock.remove();
            success();
          });
        }
        function disableConflictingPlugins() {
          if (document.documentElement.hasAttribute("data-wp-dark-mode-preset")) {
            const disableWPDarkMode = () => {
              document.dispatchEvent(
                new CustomEvent("__darkreader__disableConflictingPlugins")
              );
              document.documentElement.classList.remove(
                "wp-dark-mode-active"
              );
              document.documentElement.removeAttribute(
                "data-wp-dark-mode-active"
              );
            };
            disableWPDarkMode();
            const observer2 = new MutationObserver(() => {
              if (document.documentElement.classList.contains(
                "wp-dark-mode-active"
              ) || document.documentElement.hasAttribute(
                "data-wp-dark-mode-active"
              )) {
                disableWPDarkMode();
              }
            });
            observer2.observe(document.documentElement, {
              attributes: true,
              attributeFilter: ["class", "data-wp-dark-mode-active"]
            });
          }
        }
        let prevTheme = null;
        let prevFixes = null;
        function createOrUpdateDynamicThemeInternal(themeConfig, dynamicThemeFixes, iframe) {
          theme = themeConfig;
          fixes = dynamicThemeFixes;
          const colorAffectingKeys = [
            "brightness",
            "contrast",
            "darkSchemeBackgroundColor",
            "darkSchemeTextColor",
            "grayscale",
            "lightSchemeBackgroundColor",
            "lightSchemeTextColor",
            "sepia"
          ];
          if (prevTheme && prevFixes) {
            const themeKeys = /* @__PURE__ */ new Set([
              ...Object.keys(theme),
              ...Object.keys(prevTheme)
            ]);
            let onlyColorsChanged = true;
            for (const key of themeKeys) {
              if (theme[key] !== prevTheme[key] && !colorAffectingKeys.includes(key)) {
                onlyColorsChanged = false;
                break;
              }
            }
            if (onlyColorsChanged && JSON.stringify(fixes) !== JSON.stringify(prevFixes)) {
              onlyColorsChanged = false;
            }
            if (onlyColorsChanged) {
              const palette = getColorPalette();
              clearColorPalette();
              palette.background.forEach(
                (color) => modifyBackgroundColor(color, theme)
              );
              palette.text.forEach(
                (color) => modifyForegroundColor(color, theme)
              );
              palette.border.forEach(
                (color) => modifyBorderColor(color, theme)
              );
              return;
            }
            clearColorPalette();
          }
          if (fixes) {
            ignoredImageAnalysisSelectors = Array.isArray(
              fixes.ignoreImageAnalysis
            ) ? fixes.ignoreImageAnalysis : [];
            ignoredInlineSelectors = Array.isArray(fixes.ignoreInlineStyle) ? fixes.ignoreInlineStyle : [];
          } else {
            ignoredImageAnalysisSelectors = [];
            ignoredInlineSelectors = [];
          }
          if (theme.immediateModify) {
            setIsDOMReady(() => {
              return true;
            });
          }
          isIFrame$1 = iframe;
          const ready = () => {
            const success = () => {
              disableConflictingPlugins();
              document.documentElement.setAttribute(
                "data-darkreader-mode",
                "dynamic"
              );
              document.documentElement.setAttribute(
                "data-darkreader-scheme",
                theme.mode ? "dark" : "dimmed"
              );
              createThemeAndWatchForUpdates();
            };
            const failure = () => {
              removeDynamicTheme();
            };
            if (isDRLocked()) {
              removeNode(document.querySelector(".darkreader--fallback"));
            } else if (isAnotherDarkReaderInstanceActive()) {
              interceptOldScript({
                success,
                failure
              });
            } else {
              success();
            }
          };
          if (document.head) {
            ready();
          } else {
            if (!isFirefox) {
              const fallbackStyle = createOrUpdateStyle(
                "darkreader--fallback"
              );
              document.documentElement.appendChild(fallbackStyle);
              fallbackStyle.textContent = getModifiedFallbackStyle(theme, {
                strict: true
              });
            }
            headObserver == null ? void 0 : headObserver.disconnect();
            headObserver = new MutationObserver(() => {
              if (document.head) {
                headObserver == null ? void 0 : headObserver.disconnect();
                ready();
              }
            });
            cleaners.push(() => {
              headObserver == null ? void 0 : headObserver.disconnect();
              headObserver = null;
            });
            headObserver.observe(document, { childList: true, subtree: true });
          }
          prevTheme = theme;
          prevFixes = fixes;
        }
        function removeProxy() {
          document.dispatchEvent(new CustomEvent("__darkreader__cleanUp"));
          removeNode(document.head.querySelector(".darkreader--proxy"));
        }
        const cleaners = [];
        function removeDynamicTheme() {
          document.documentElement.removeAttribute("data-darkreader-mode");
          document.documentElement.removeAttribute("data-darkreader-scheme");
          cleanDynamicThemeCache();
          removeNode(document.querySelector(".darkreader--fallback"));
          if (document.head) {
            const selectors = [
              ".darkreader--user-agent",
              ".darkreader--text",
              ".darkreader--invert",
              ".darkreader--inline",
              ".darkreader--override",
              ".darkreader--variables",
              ".darkreader--root-vars",
              'meta[name="darkreader"]'
            ];
            restoreMetaThemeColor();
            selectors.forEach(
              (selector) => removeNode(document.head.querySelector(selector))
            );
            staticStyleMap.clear();
            removeProxy();
          }
          shadowRootsWithOverrides.forEach((root) => {
            removeNode(root.querySelector(".darkreader--inline"));
            removeNode(root.querySelector(".darkreader--override"));
          });
          shadowRootsWithOverrides.clear();
          forEach(styleManagers.keys(), (el) => removeManager(el));
          loadingStyles.clear();
          cleanLoadingLinks();
          forEach(document.querySelectorAll(".darkreader"), removeNode);
          adoptedStyleManagers.forEach((manager) => manager.destroy());
          adoptedStyleManagers.splice(0);
          adoptedStyleFallbacks.forEach((fallback) => fallback.destroy());
          adoptedStyleFallbacks.clear();
          metaObserver && metaObserver.disconnect();
          cleaners.forEach((clean) => clean());
          cleaners.splice(0);
        }
        function cleanDynamicThemeCache() {
          variablesStore.clear();
          parsedURLCache.clear();
          removeDocumentVisibilityListener();
          cancelRendering();
          stopWatchingForUpdates();
          cleanModificationCache();
          clearColorCache();
          releaseVariablesSheet();
          prevTheme = null;
          prevFixes = null;
        }
        function parseCSS(cssText) {
          cssText = removeCSSComments(cssText);
          cssText = cssText.trim();
          if (!cssText) {
            return [];
          }
          const rules = [];
          const excludeRanges = getTokenExclusionRanges(cssText);
          const bracketRanges = getAllOpenCloseRanges(
            cssText,
            "{",
            "}",
            excludeRanges
          );
          let ruleStart = 0;
          bracketRanges.forEach((brackets) => {
            const key = cssText.substring(ruleStart, brackets.start).trim();
            const content = cssText.substring(
              brackets.start + 1,
              brackets.end - 1
            );
            if (key.startsWith("@")) {
              const typeEndIndex = key.search(/[\s\(]/);
              const rule = {
                type: typeEndIndex < 0 ? key : key.substring(0, typeEndIndex),
                query: typeEndIndex < 0 ? "" : key.substring(typeEndIndex).trim(),
                rules: parseCSS(content)
              };
              rules.push(rule);
            } else {
              const rule = {
                selectors: parseSelectors(key),
                declarations: parseDeclarations(content)
              };
              rules.push(rule);
            }
            ruleStart = brackets.end;
          });
          return rules;
        }
        function getAllOpenCloseRanges(input, openToken, closeToken, excludeRanges = []) {
          const ranges = [];
          let i = 0;
          let range;
          while (range = getOpenCloseRange(
            input,
            i,
            openToken,
            closeToken,
            excludeRanges
          )) {
            ranges.push(range);
            i = range.end;
          }
          return ranges;
        }
        function getTokenExclusionRanges(cssText) {
          const singleQuoteGoesFirst = cssText.indexOf("'") < cssText.indexOf('"');
          const firstQuote = singleQuoteGoesFirst ? "'" : '"';
          const secondQuote = singleQuoteGoesFirst ? '"' : "'";
          const excludeRanges = getAllOpenCloseRanges(
            cssText,
            firstQuote,
            firstQuote
          );
          excludeRanges.push(
            ...getAllOpenCloseRanges(
              cssText,
              secondQuote,
              secondQuote,
              excludeRanges
            )
          );
          excludeRanges.push(
            ...getAllOpenCloseRanges(cssText, "[", "]", excludeRanges)
          );
          excludeRanges.push(
            ...getAllOpenCloseRanges(cssText, "(", ")", excludeRanges)
          );
          return excludeRanges;
        }
        function parseSelectors(selectorText) {
          const excludeRanges = getTokenExclusionRanges(selectorText);
          return splitExcluding(selectorText, ",", excludeRanges);
        }
        function parseDeclarations(cssDeclarationsText) {
          const declarations = [];
          const excludeRanges = getTokenExclusionRanges(cssDeclarationsText);
          splitExcluding(cssDeclarationsText, ";", excludeRanges).forEach(
            (part) => {
              const colonIndex = part.indexOf(":");
              if (colonIndex > 0) {
                const importantIndex = part.indexOf("!important");
                declarations.push({
                  property: part.substring(0, colonIndex).trim(),
                  value: part.substring(
                    colonIndex + 1,
                    importantIndex > 0 ? importantIndex : part.length
                  ).trim(),
                  important: importantIndex > 0
                });
              }
            }
          );
          return declarations;
        }
        function isParsedStyleRule(rule) {
          return "selectors" in rule;
        }
        function formatCSS(cssText) {
          const parsed = parseCSS(cssText);
          return formatParsedCSS(parsed);
        }
        function formatParsedCSS(parsed) {
          const lines = [];
          const tab = "    ";
          function formatRule(rule, indent) {
            if (isParsedStyleRule(rule)) {
              formatStyleRule(rule, indent);
            } else {
              formatAtRule(rule, indent);
            }
          }
          function formatAtRule({ type, query, rules }, indent) {
            lines.push("".concat(indent).concat(type, " ").concat(query, " {"));
            rules.forEach((child) => formatRule(child, "".concat(indent).concat(tab)));
            lines.push("".concat(indent, "}"));
          }
          function formatStyleRule({ selectors, declarations }, indent) {
            const lastSelectorIndex = selectors.length - 1;
            selectors.forEach((selector, i) => {
              lines.push(
                "".concat(indent).concat(selector).concat(i < lastSelectorIndex ? "," : " {")
              );
            });
            const sorted = sortDeclarations(declarations);
            sorted.forEach(({ property, value, important }) => {
              lines.push(
                "".concat(indent).concat(tab).concat(property, ": ").concat(value).concat(important ? " !important" : "", ";")
              );
            });
            lines.push("".concat(indent, "}"));
          }
          clearEmptyRules(parsed);
          parsed.forEach((rule) => formatRule(rule, ""));
          return lines.join("\n");
        }
        function sortDeclarations(declarations) {
          const prefixRegex = /^-[a-z]-/;
          return [...declarations].sort((a, b) => {
            var _a, _b, _c, _d;
            const aProp = a.property;
            const bProp = b.property;
            const aPrefix = (_b = (_a = aProp.match(prefixRegex)) == null ? void 0 : _a[0]) != null ? _b : "";
            const bPrefix = (_d = (_c = bProp.match(prefixRegex)) == null ? void 0 : _c[0]) != null ? _d : "";
            const aNorm = aPrefix ? aProp.replace(prefixRegex, "") : aProp;
            const bNorm = bPrefix ? bProp.replace(prefixRegex, "") : bProp;
            if (aNorm === bNorm) {
              return aPrefix.localeCompare(bPrefix);
            }
            return aNorm.localeCompare(bNorm);
          });
        }
        function clearEmptyRules(rules) {
          for (let i = rules.length - 1; i >= 0; i--) {
            const rule = rules[i];
            if (isParsedStyleRule(rule)) {
              if (rule.declarations.length === 0) {
                rules.splice(i, 1);
              }
            } else {
              clearEmptyRules(rule.rules);
              if (rule.rules.length === 0) {
                rules.splice(i, 1);
              }
            }
          }
        }
        const blobRegex = /url\(\"(blob\:.*?)\"\)/g;
        async function replaceBlobs(text) {
          const promises = [];
          getMatches(blobRegex, text, 1).forEach((url) => {
            const promise = loadAsDataURL(url);
            promises.push(promise);
          });
          const data = await Promise.all(promises);
          return text.replace(blobRegex, () => 'url("'.concat(data.shift(), '")'));
        }
        const banner = '/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/\n\n/*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/main/LICENSE */\n';
        async function collectCSS() {
          const css = [banner];
          function addStaticCSS(selector, comment) {
            const staticStyle = document.querySelector(selector);
            if (staticStyle && staticStyle.textContent) {
              css.push("/* ".concat(comment, " */"));
              css.push(staticStyle.textContent);
              css.push("");
            }
          }
          addStaticCSS(".darkreader--fallback", "Fallback Style");
          addStaticCSS(".darkreader--user-agent", "User-Agent Style");
          addStaticCSS(".darkreader--text", "Text Style");
          addStaticCSS(".darkreader--invert", "Invert Style");
          addStaticCSS(".darkreader--variables", "Variables Style");
          const modifiedCSS = [];
          document.querySelectorAll(".darkreader--sync").forEach((element) => {
            forEach(element.sheet.cssRules, (rule) => {
              rule && rule.cssText && modifiedCSS.push(rule.cssText);
            });
          });
          if (modifiedCSS.length) {
            const formattedCSS = formatCSS(modifiedCSS.join("\n"));
            css.push("/* Modified CSS */");
            css.push(await replaceBlobs(formattedCSS));
            css.push("");
          }
          addStaticCSS(".darkreader--override", "Override Style");
          return css.join("\n");
        }
        let isDarkReaderEnabled = false;
        const isIFrame = (() => {
          try {
            return window.self !== window.top;
          } catch (err) {
            console.warn(err);
            return true;
          }
        })();
        function enable(themeOptions = {}, fixes2 = null) {
          const theme2 = __spreadValues(__spreadValues({}, DEFAULT_THEME), themeOptions);
          if (theme2.engine !== ThemeEngine.dynamicTheme) {
            throw new Error("Theme engine is not supported.");
          }
          createOrUpdateDynamicThemeInternal(theme2, fixes2, isIFrame);
          isDarkReaderEnabled = true;
        }
        function isEnabled() {
          return isDarkReaderEnabled;
        }
        function disable() {
          removeDynamicTheme();
          isDarkReaderEnabled = false;
        }
        const darkScheme = typeof matchMedia === "function" ? matchMedia("(prefers-color-scheme: dark)") : void 0;
        let store = {
          themeOptions: null,
          fixes: null
        };
        function handleColorScheme() {
          if (darkScheme == null ? void 0 : darkScheme.matches) {
            enable(store.themeOptions, store.fixes);
          } else {
            disable();
          }
        }
        function auto(themeOptions = {}, fixes2 = null) {
          if (themeOptions) {
            store = { themeOptions, fixes: fixes2 };
            handleColorScheme();
            if (isMatchMediaChangeEventListenerSupported) {
              darkScheme == null ? void 0 : darkScheme.addEventListener("change", handleColorScheme);
            } else {
              darkScheme == null ? void 0 : darkScheme.addListener(handleColorScheme);
            }
          } else {
            if (isMatchMediaChangeEventListenerSupported) {
              darkScheme == null ? void 0 : darkScheme.removeEventListener("change", handleColorScheme);
            } else {
              darkScheme == null ? void 0 : darkScheme.removeListener(handleColorScheme);
            }
            disable();
          }
        }
        async function exportGeneratedCSS() {
          return await collectCSS();
        }
        const setFetchMethod = setFetchMethod$1;
        exports2.auto = auto;
        exports2.disable = disable;
        exports2.enable = enable;
        exports2.exportGeneratedCSS = exportGeneratedCSS;
        exports2.isEnabled = isEnabled;
        exports2.setFetchMethod = setFetchMethod;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // public/about.js
  function about_me() {
    var bday = /* @__PURE__ */ new Date("06/08/2004");
    var today = /* @__PURE__ */ new Date();
    var time_diff = today.getTime() - bday.getTime();
    time_diff = time_diff / 1e3 / 31556952;
    let age = time_diff.toFixed(3);
    document.getElementById(
      "founder-name"
    ).innerHTML = "Emmanuel Koledoye (~".concat(age, ")");
  }
  about_me();
  var gojodev = document.getElementById("gojodev");
  gojodev.addEventListener("mouseover", () => {
    gojodev.classList.remove("fadeIn");
    gojodev.offsetWidth;
    gojodev.classList.add("fadeIn");
    gojodev.src = "images/gojodev.webp";
  });
  gojodev.addEventListener("mouseout", () => {
    gojodev.classList.remove("fadeIn");
    gojodev.offsetWidth;
    gojodev.classList.add("fadeIn");
    gojodev.src = "images/logo.webp";
  });
  var DarkReader = (init_darkreader(), __toCommonJS(darkreader_exports));
  var darkTheme = false;
  var darkToggle = document.getElementById("darkToggle");
  darkToggle.addEventListener("click", () => {
    darkTheme = !darkTheme;
    if (darkTheme) {
      DarkReader.auto({
        brightness: 100,
        contrast: 100,
        darkSchemeTextColor: "white"
      });
    } else {
      DarkReader.disable();
    }
    console.log("darkToggle: ", darkTheme);
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2RhcmtyZWFkZXIvZGFya3JlYWRlci5qcyIsICJhYm91dC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIERhcmsgUmVhZGVyIHY0LjkuMTA0XHJcbiAqIGh0dHBzOi8vZGFya3JlYWRlci5vcmcvXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICAgIHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICA/IGZhY3RvcnkoZXhwb3J0cylcclxuICAgICAgICA6IHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kXHJcbiAgICAgICAgICA/IGRlZmluZShbXCJleHBvcnRzXCJdLCBmYWN0b3J5KVxyXG4gICAgICAgICAgOiAoKGdsb2JhbCA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gZ2xvYmFsVGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIDogZ2xvYmFsIHx8IHNlbGYpLFxyXG4gICAgICAgICAgICBmYWN0b3J5KChnbG9iYWwuRGFya1JlYWRlciA9IHt9KSkpO1xyXG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgdmFyIE1lc3NhZ2VUeXBlVUl0b0JHO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZVVJdG9CRykge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiR0VUX0RBVEFcIl0gPSBcInVpLWJnLWdldC1kYXRhXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJHRVRfREVWVE9PTFNfREFUQVwiXSA9IFwidWktYmctZ2V0LWRldnRvb2xzLWRhdGFcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlNVQlNDUklCRV9UT19DSEFOR0VTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1zdWJzY3JpYmUtdG8tY2hhbmdlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiVU5TVUJTQ1JJQkVfRlJPTV9DSEFOR0VTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy11bnN1YnNjcmliZS1mcm9tLWNoYW5nZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkNIQU5HRV9TRVRUSU5HU1wiXSA9IFwidWktYmctY2hhbmdlLXNldHRpbmdzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJTRVRfVEhFTUVcIl0gPSBcInVpLWJnLXNldC10aGVtZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiVE9HR0xFX0FDVElWRV9UQUJcIl0gPSBcInVpLWJnLXRvZ2dsZS1hY3RpdmUtdGFiXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJNQVJLX05FV1NfQVNfUkVBRFwiXSA9IFwidWktYmctbWFyay1uZXdzLWFzLXJlYWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIk1BUktfTkVXU19BU19ESVNQTEFZRURcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLW1hcmstbmV3cy1hcy1kaXNwbGF5ZWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkxPQURfQ09ORklHXCJdID0gXCJ1aS1iZy1sb2FkLWNvbmZpZ1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiQVBQTFlfREVWX0RZTkFNSUNfVEhFTUVfRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLWFwcGx5LWRldi1keW5hbWljLXRoZW1lLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJSRVNFVF9ERVZfRFlOQU1JQ19USEVNRV9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctcmVzZXQtZGV2LWR5bmFtaWMtdGhlbWUtZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkFQUExZX0RFVl9JTlZFUlNJT05fRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLWFwcGx5LWRldi1pbnZlcnNpb24tZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlJFU0VUX0RFVl9JTlZFUlNJT05fRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLXJlc2V0LWRldi1pbnZlcnNpb24tZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkFQUExZX0RFVl9TVEFUSUNfVEhFTUVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1hcHBseS1kZXYtc3RhdGljLXRoZW1lc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiUkVTRVRfREVWX1NUQVRJQ19USEVNRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLXJlc2V0LWRldi1zdGF0aWMtdGhlbWVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJDT0xPUl9TQ0hFTUVfQ0hBTkdFXCJdID0gXCJ1aS1iZy1jb2xvci1zY2hlbWUtY2hhbmdlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJISURFX0hJR0hMSUdIVFNcIl0gPSBcInVpLWJnLWhpZGUtaGlnaGxpZ2h0c1wiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVVSXRvQkcgfHwgKE1lc3NhZ2VUeXBlVUl0b0JHID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZUJHdG9VSTtcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVCR3RvVUkpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9VSVtcIkNIQU5HRVNcIl0gPSBcImJnLXVpLWNoYW5nZXNcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlQkd0b1VJIHx8IChNZXNzYWdlVHlwZUJHdG9VSSA9IHt9KSk7XHJcbiAgICB2YXIgRGVidWdNZXNzYWdlVHlwZUJHdG9VSTtcclxuICAgIChmdW5jdGlvbiAoRGVidWdNZXNzYWdlVHlwZUJHdG9VSSkge1xyXG4gICAgICAgIERlYnVnTWVzc2FnZVR5cGVCR3RvVUlbXCJDU1NfVVBEQVRFXCJdID0gXCJkZWJ1Zy1iZy11aS1jc3MtdXBkYXRlXCI7XHJcbiAgICAgICAgRGVidWdNZXNzYWdlVHlwZUJHdG9VSVtcIlVQREFURVwiXSA9IFwiZGVidWctYmctdWktdXBkYXRlXCI7XHJcbiAgICB9KShEZWJ1Z01lc3NhZ2VUeXBlQkd0b1VJIHx8IChEZWJ1Z01lc3NhZ2VUeXBlQkd0b1VJID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZUJHdG9DUztcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVCR3RvQ1MpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIkFERF9DU1NfRklMVEVSXCJdID0gXCJiZy1jcy1hZGQtY3NzLWZpbHRlclwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiQUREX0RZTkFNSUNfVEhFTUVcIl0gPSBcImJnLWNzLWFkZC1keW5hbWljLXRoZW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJBRERfU1RBVElDX1RIRU1FXCJdID0gXCJiZy1jcy1hZGQtc3RhdGljLXRoZW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJBRERfU1ZHX0ZJTFRFUlwiXSA9IFwiYmctY3MtYWRkLXN2Zy1maWx0ZXJcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIkNMRUFOX1VQXCJdID0gXCJiZy1jcy1jbGVhbi11cFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiRkVUQ0hfUkVTUE9OU0VcIl0gPSBcImJnLWNzLWZldGNoLXJlc3BvbnNlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJVTlNVUFBPUlRFRF9TRU5ERVJcIl0gPSBcImJnLWNzLXVuc3VwcG9ydGVkLXNlbmRlclwiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVCR3RvQ1MgfHwgKE1lc3NhZ2VUeXBlQkd0b0NTID0ge30pKTtcclxuICAgIHZhciBEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTO1xyXG4gICAgKGZ1bmN0aW9uIChEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTKSB7XHJcbiAgICAgICAgRGVidWdNZXNzYWdlVHlwZUJHdG9DU1tcIlJFTE9BRFwiXSA9IFwiZGVidWctYmctY3MtcmVsb2FkXCI7XHJcbiAgICB9KShEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTIHx8IChEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZUNTdG9CRztcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVDU3RvQkcpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkNPTE9SX1NDSEVNRV9DSEFOR0VcIl0gPSBcImNzLWJnLWNvbG9yLXNjaGVtZS1jaGFuZ2VcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRBUktfVEhFTUVfREVURUNURURcIl0gPSBcImNzLWJnLWRhcmstdGhlbWUtZGV0ZWN0ZWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRBUktfVEhFTUVfTk9UX0RFVEVDVEVEXCJdID1cclxuICAgICAgICAgICAgXCJjcy1iZy1kYXJrLXRoZW1lLW5vdC1kZXRlY3RlZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiRkVUQ0hcIl0gPSBcImNzLWJnLWZldGNoXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJET0NVTUVOVF9DT05ORUNUXCJdID0gXCJjcy1iZy1kb2N1bWVudC1jb25uZWN0XCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJET0NVTUVOVF9GT1JHRVRcIl0gPSBcImNzLWJnLWRvY3VtZW50LWZvcmdldFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiRE9DVU1FTlRfRlJFRVpFXCJdID0gXCJjcy1iZy1kb2N1bWVudC1mcmVlemVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRPQ1VNRU5UX1JFU1VNRVwiXSA9IFwiY3MtYmctZG9jdW1lbnQtcmVzdW1lXCI7XHJcbiAgICB9KShNZXNzYWdlVHlwZUNTdG9CRyB8fCAoTWVzc2FnZVR5cGVDU3RvQkcgPSB7fSkpO1xyXG4gICAgdmFyIERlYnVnTWVzc2FnZVR5cGVDU3RvQkc7XHJcbiAgICAoZnVuY3Rpb24gKERlYnVnTWVzc2FnZVR5cGVDU3RvQkcpIHtcclxuICAgICAgICBEZWJ1Z01lc3NhZ2VUeXBlQ1N0b0JHW1wiTE9HXCJdID0gXCJkZWJ1Zy1jcy1iZy1sb2dcIjtcclxuICAgIH0pKERlYnVnTWVzc2FnZVR5cGVDU3RvQkcgfHwgKERlYnVnTWVzc2FnZVR5cGVDU3RvQkcgPSB7fSkpO1xyXG4gICAgdmFyIE1lc3NhZ2VUeXBlQ1N0b1VJO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZUNTdG9VSSkge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b1VJW1wiRVhQT1JUX0NTU19SRVNQT05TRVwiXSA9IFwiY3MtdWktZXhwb3J0LWNzcy1yZXNwb25zZVwiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVDU3RvVUkgfHwgKE1lc3NhZ2VUeXBlQ1N0b1VJID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZVVJdG9DUztcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVVSXRvQ1MpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9DU1tcIkVYUE9SVF9DU1NcIl0gPSBcInVpLWNzLWV4cG9ydC1jc3NcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlVUl0b0NTIHx8IChNZXNzYWdlVHlwZVVJdG9DUyA9IHt9KSk7XHJcblxyXG4gICAgY29uc3QgaXNOYXZpZ2F0b3JEZWZpbmVkID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIGNvbnN0IHVzZXJBZ2VudCA9IGlzTmF2aWdhdG9yRGVmaW5lZFxyXG4gICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgJiZcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkobmF2aWdhdG9yLnVzZXJBZ2VudERhdGEuYnJhbmRzKVxyXG4gICAgICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhLmJyYW5kc1xyXG4gICAgICAgICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGJyYW5kKSA9PiBgJHticmFuZC5icmFuZC50b0xvd2VyQ2FzZSgpfSAke2JyYW5kLnZlcnNpb259YFxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKVxyXG4gICAgICAgICAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIDogXCJzb21lIHVzZXJhZ2VudFwiO1xyXG4gICAgY29uc3QgcGxhdGZvcm0gPSBpc05hdmlnYXRvckRlZmluZWRcclxuICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhICYmXHJcbiAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEucGxhdGZvcm0gPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIDogbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKClcclxuICAgICAgICA6IFwic29tZSBwbGF0Zm9ybVwiO1xyXG4gICAgY29uc3QgaXNDaHJvbWl1bSA9XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwiY2hyb21lXCIpIHx8IHVzZXJBZ2VudC5pbmNsdWRlcyhcImNocm9taXVtXCIpO1xyXG4gICAgY29uc3QgaXNGaXJlZm94ID1cclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJmaXJlZm94XCIpIHx8XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwidGh1bmRlcmJpcmRcIikgfHxcclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJsaWJyZXdvbGZcIik7XHJcbiAgICBjb25zdCBpc1NhZmFyaSA9IHVzZXJBZ2VudC5pbmNsdWRlcyhcInNhZmFyaVwiKSAmJiAhaXNDaHJvbWl1bTtcclxuICAgIGNvbnN0IGlzV2luZG93cyA9IHBsYXRmb3JtLnN0YXJ0c1dpdGgoXCJ3aW5cIik7XHJcbiAgICBjb25zdCBpc01hY09TID0gcGxhdGZvcm0uc3RhcnRzV2l0aChcIm1hY1wiKTtcclxuICAgIGlzTmF2aWdhdG9yRGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YVxyXG4gICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEubW9iaWxlXHJcbiAgICAgICAgOiB1c2VyQWdlbnQuaW5jbHVkZXMoXCJtb2JpbGVcIik7XHJcbiAgICBjb25zdCBpc1NoYWRvd0RvbVN1cHBvcnRlZCA9IHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICBjb25zdCBpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkID1cclxuICAgICAgICB0eXBlb2YgTWVkaWFRdWVyeUxpc3QgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgIHR5cGVvZiBNZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgY29uc3QgaXNMYXllclJ1bGVTdXBwb3J0ZWQgPSB0eXBlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbSA9IHVzZXJBZ2VudC5tYXRjaCgvY2hyb20oPzplfGl1bSkoPzpcXC98ICkoW14gXSspLyk7XHJcbiAgICAgICAgaWYgKG0gJiYgbVsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9KSgpO1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBtID0gdXNlckFnZW50Lm1hdGNoKC8oPzpmaXJlZm94fGxpYnJld29sZikoPzpcXC98ICkoW14gXSspLyk7XHJcbiAgICAgICAgaWYgKG0gJiYgbVsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9KSgpO1xyXG4gICAgY29uc3QgaXNEZWZpbmVkU2VsZWN0b3JTdXBwb3J0ZWQgPSAoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6ZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgY29uc3QgaXNDU1NDb2xvclNjaGVtZVByb3BTdXBwb3J0ZWQgPSAoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGlmICghZWwgfHwgdHlwZW9mIGVsLnN0eWxlICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbC5zdHlsZS5jb2xvclNjaGVtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvci1zY2hlbWU6IGRhcmtcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBlbC5zdHlsZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUsIG9yaWdpbikge1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID1cclxuICAgICAgICAgICAgb3JpZ2luICYmIHVybC5zdGFydHNXaXRoKGAke29yaWdpbn0vYCkgPyB1bmRlZmluZWQgOiBcIm9taXRcIjtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFscyxcclxuICAgICAgICAgICAgcmVmZXJyZXI6IG9yaWdpblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgaXNGaXJlZm94ICYmXHJcbiAgICAgICAgICAgIG1pbWVUeXBlID09PSBcInRleHQvY3NzXCIgJiZcclxuICAgICAgICAgICAgdXJsLnN0YXJ0c1dpdGgoXCJtb3otZXh0ZW5zaW9uOi8vXCIpICYmXHJcbiAgICAgICAgICAgIHVybC5lbmRzV2l0aChcIi5jc3NcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG1pbWVUeXBlICYmXHJcbiAgICAgICAgICAgICFyZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKS5zdGFydHNXaXRoKG1pbWVUeXBlKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pbWUgdHlwZSBtaXNtYXRjaCB3aGVuIGxvYWRpbmcgJHt1cmx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgYFVuYWJsZSB0byBsb2FkICR7dXJsfSAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFzRGF0YVVSTCh1cmwsIG1pbWVUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFzQmxvYih1cmwsIG1pbWVUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFVUkwgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFVUkw7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQXNUZXh0KHVybCwgbWltZVR5cGUsIG9yaWdpbikge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlLCBvcmlnaW4pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGhyb3dDT1JTRXJyb3IgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFbWJlZGRlZCBEYXJrIFJlYWRlciBjYW5ub3QgYWNjZXNzIGEgY3Jvc3Mtb3JpZ2luIHJlc291cmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT3ZlcnZpZXcgeW91ciBVUkxzIGFuZCBDT1JTIHBvbGljaWVzIG9yIHVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYERhcmtSZWFkZXIuc2V0RmV0Y2hNZXRob2QoZmV0Y2g6ICh1cmwpID0+IFByb21pc2U8UmVzcG9uc2U+KSlgLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VlIGlmIHVzaW5nIGBEYXJrUmVhZGVyLnNldEZldGNoTWV0aG9kKHdpbmRvdy5mZXRjaClgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmUgYERhcmtSZWFkZXIuZW5hYmxlKClgIHdvcmtzLlwiXHJcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGxldCBmZXRjaGVyID0gdGhyb3dDT1JTRXJyb3I7XHJcbiAgICBmdW5jdGlvbiBzZXRGZXRjaE1ldGhvZCQxKGZldGNoKSB7XHJcbiAgICAgICAgaWYgKGZldGNoKSB7XHJcbiAgICAgICAgICAgIGZldGNoZXIgPSBmZXRjaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmZXRjaGVyID0gdGhyb3dDT1JTRXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FsbEZldGNoTWV0aG9kKHVybCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaGVyKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3aW5kb3cuY2hyb21lKSB7XHJcbiAgICAgICAgd2luZG93LmNocm9tZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFjaHJvbWUucnVudGltZSkge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lID0ge307XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXNzYWdlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoLi4uYXJncykge1xyXG4gICAgICAgIGlmIChhcmdzWzBdICYmIGFyZ3NbMF0udHlwZSA9PT0gTWVzc2FnZVR5cGVDU3RvQkcuRkVUQ0gpIHtcclxuICAgICAgICAgICAgY29uc3Qge2lkfSA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7dXJsLCByZXNwb25zZVR5cGV9ID0gYXJnc1swXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWxsRmV0Y2hNZXRob2QodXJsKTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gXCJkYXRhLXVybFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGF3YWl0IHJlYWRSZXNwb25zZUFzRGF0YVVSTChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmZvckVhY2goKGNiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVCR3RvQ1MuRkVUQ0hfUkVTUE9OU0UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmZvckVhY2goKGNiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVCR3RvQ1MuRkVUQ0hfUkVTUE9OU0UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbWVzc2FnZUxpc3RlbmVycy5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgY29uc3QgbmF0aXZlU2VuZE1lc3NhZ2UgPSBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZTtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICBuYXRpdmVTZW5kTWVzc2FnZS5hcHBseShjaHJvbWUucnVudGltZSwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSBzZW5kTWVzc2FnZTtcclxuICAgIH1cclxuICAgIGlmICghY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlKSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgY29uc3QgbmF0aXZlQWRkTGlzdGVuZXIgPSBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXI7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyKGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICBuYXRpdmVBZGRMaXN0ZW5lci5hcHBseShjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9ICguLi5hcmdzKSA9PlxyXG4gICAgICAgICAgICBhZGRNZXNzYWdlTGlzdGVuZXIoYXJnc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFRoZW1lRW5naW5lO1xyXG4gICAgKGZ1bmN0aW9uIChUaGVtZUVuZ2luZSkge1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wiY3NzRmlsdGVyXCJdID0gXCJjc3NGaWx0ZXJcIjtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcInN2Z0ZpbHRlclwiXSA9IFwic3ZnRmlsdGVyXCI7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJzdGF0aWNUaGVtZVwiXSA9IFwic3RhdGljVGhlbWVcIjtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcImR5bmFtaWNUaGVtZVwiXSA9IFwiZHluYW1pY1RoZW1lXCI7XHJcbiAgICB9KShUaGVtZUVuZ2luZSB8fCAoVGhlbWVFbmdpbmUgPSB7fSkpO1xyXG5cclxuICAgIHZhciBBdXRvbWF0aW9uTW9kZTtcclxuICAgIChmdW5jdGlvbiAoQXV0b21hdGlvbk1vZGUpIHtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIk5PTkVcIl0gPSBcIlwiO1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiVElNRVwiXSA9IFwidGltZVwiO1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiU1lTVEVNXCJdID0gXCJzeXN0ZW1cIjtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIkxPQ0FUSU9OXCJdID0gXCJsb2NhdGlvblwiO1xyXG4gICAgfSkoQXV0b21hdGlvbk1vZGUgfHwgKEF1dG9tYXRpb25Nb2RlID0ge30pKTtcclxuXHJcbiAgICBjb25zdCBERUZBVUxUX0NPTE9SUyA9IHtcclxuICAgICAgICBkYXJrU2NoZW1lOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzE4MWExYlwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiNlOGU2ZTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlnaHRTY2hlbWU6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZGNkYWQ3XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiIzE4MWExYlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IERFRkFVTFRfVEhFTUUgPSB7XHJcbiAgICAgICAgbW9kZTogMSxcclxuICAgICAgICBicmlnaHRuZXNzOiAxMDAsXHJcbiAgICAgICAgY29udHJhc3Q6IDEwMCxcclxuICAgICAgICBncmF5c2NhbGU6IDAsXHJcbiAgICAgICAgc2VwaWE6IDAsXHJcbiAgICAgICAgdXNlRm9udDogZmFsc2UsXHJcbiAgICAgICAgZm9udEZhbWlseTogaXNNYWNPU1xyXG4gICAgICAgICAgICA/IFwiSGVsdmV0aWNhIE5ldWVcIlxyXG4gICAgICAgICAgICA6IGlzV2luZG93c1xyXG4gICAgICAgICAgICAgID8gXCJTZWdvZSBVSVwiXHJcbiAgICAgICAgICAgICAgOiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgIHRleHRTdHJva2U6IDAsXHJcbiAgICAgICAgZW5naW5lOiBUaGVtZUVuZ2luZS5keW5hbWljVGhlbWUsXHJcbiAgICAgICAgc3R5bGVzaGVldDogXCJcIixcclxuICAgICAgICBkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yOiBERUZBVUxUX0NPTE9SUy5kYXJrU2NoZW1lLmJhY2tncm91bmQsXHJcbiAgICAgICAgZGFya1NjaGVtZVRleHRDb2xvcjogREVGQVVMVF9DT0xPUlMuZGFya1NjaGVtZS50ZXh0LFxyXG4gICAgICAgIGxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yOiBERUZBVUxUX0NPTE9SUy5saWdodFNjaGVtZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIGxpZ2h0U2NoZW1lVGV4dENvbG9yOiBERUZBVUxUX0NPTE9SUy5saWdodFNjaGVtZS50ZXh0LFxyXG4gICAgICAgIHNjcm9sbGJhckNvbG9yOiBcIlwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcImF1dG9cIixcclxuICAgICAgICBzdHlsZVN5c3RlbUNvbnRyb2xzOiAhaXNDU1NDb2xvclNjaGVtZVByb3BTdXBwb3J0ZWQsXHJcbiAgICAgICAgbGlnaHRDb2xvclNjaGVtZTogXCJEZWZhdWx0XCIsXHJcbiAgICAgICAgZGFya0NvbG9yU2NoZW1lOiBcIkRlZmF1bHRcIixcclxuICAgICAgICBpbW1lZGlhdGVNb2RpZnk6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsdGVyTW9kZVNpdGVzID0gW1xyXG4gICAgICAgIFwiKi5vZmZpY2VhcHBzLmxpdmUuY29tXCIsXHJcbiAgICAgICAgXCIqLnNoYXJlcG9pbnQuY29tXCIsXHJcbiAgICAgICAgXCJkb2NzLmdvb2dsZS5jb21cIixcclxuICAgICAgICBcIm9uZWRyaXZlLmxpdmUuY29tXCJcclxuICAgIF07XHJcbiAgICAoe1xyXG4gICAgICAgIGN1c3RvbVRoZW1lczogZmlsdGVyTW9kZVNpdGVzLm1hcCgodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZ2luZSA9IGlzQ2hyb21pdW1cclxuICAgICAgICAgICAgICAgID8gVGhlbWVFbmdpbmUuc3ZnRmlsdGVyXHJcbiAgICAgICAgICAgICAgICA6IFRoZW1lRW5naW5lLmNzc0ZpbHRlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVybDogW3VybF0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogey4uLkRFRkFVTFRfVEhFTUUsIGVuZ2luZX0sXHJcbiAgICAgICAgICAgICAgICBidWlsdEluOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgYXV0b21hdGlvbjoge1xyXG4gICAgICAgICAgICBtb2RlOiBBdXRvbWF0aW9uTW9kZS5OT05FXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWF0Y2hlcyhyZWdleCwgaW5wdXQsIGdyb3VwID0gMCkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcclxuICAgICAgICBsZXQgbTtcclxuICAgICAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKGlucHV0KSkpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1bZ3JvdXBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNYXRjaGVzV2l0aE9mZnNldHMocmVnZXgsIGlucHV0LCBncm91cCA9IDApIHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gW107XHJcbiAgICAgICAgbGV0IG07XHJcbiAgICAgICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhpbnB1dCkpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaCh7dGV4dDogbVtncm91cF0sIG9mZnNldDogbS5pbmRleH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2hlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEhhc2hDb2RlKHRleHQpIHtcclxuICAgICAgICBjb25zdCBsZW4gPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgaGFzaCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCArIGMpICYgNDI5NDk2NzI5NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHBTcGVjaWFsQ2hhcnMoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZUFsbCgvW1xcXiQuKis/XFwoXFwpXFxbXFxde318XFwtXFxcXF0vZywgXCJcXFxcJCZcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRoZXNlc1JhbmdlKGlucHV0LCBzZWFyY2hTdGFydEluZGV4ID0gMCkge1xyXG4gICAgICAgIHJldHVybiBnZXRPcGVuQ2xvc2VSYW5nZShpbnB1dCwgc2VhcmNoU3RhcnRJbmRleCwgXCIoXCIsIFwiKVwiLCBbXSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRPcGVuQ2xvc2VSYW5nZShcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBzZWFyY2hTdGFydEluZGV4LFxyXG4gICAgICAgIG9wZW5Ub2tlbixcclxuICAgICAgICBjbG9zZVRva2VuLFxyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICkge1xyXG4gICAgICAgIGxldCBpbmRleE9mO1xyXG4gICAgICAgIGlmIChleGNsdWRlUmFuZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpbmRleE9mID0gKHRva2VuLCBwb3MpID0+IGlucHV0LmluZGV4T2YodG9rZW4sIHBvcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5kZXhPZiA9ICh0b2tlbiwgcG9zKSA9PlxyXG4gICAgICAgICAgICAgICAgaW5kZXhPZkV4Y2x1ZGluZyhpbnB1dCwgdG9rZW4sIHBvcywgZXhjbHVkZVJhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gaW5wdXQ7XHJcbiAgICAgICAgbGV0IGRlcHRoID0gMDtcclxuICAgICAgICBsZXQgZmlyc3RPcGVuSW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc2VhcmNoU3RhcnRJbmRleDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlbkluZGV4ID0gaW5kZXhPZihvcGVuVG9rZW4sIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5JbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpcnN0T3BlbkluZGV4ID0gb3BlbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgZGVwdGgrKztcclxuICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUluZGV4ID0gaW5kZXhPZihjbG9zZVRva2VuLCBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZUluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlbkluZGV4ID0gaW5kZXhPZihvcGVuVG9rZW4sIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5JbmRleCA8IDAgfHwgY2xvc2VJbmRleCA8PSBvcGVuSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXJ0OiBmaXJzdE9wZW5JbmRleCwgZW5kOiBjbG9zZUluZGV4ICsgMX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBjbG9zZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbmRleE9mRXhjbHVkaW5nKGlucHV0LCBzZWFyY2gsIHBvc2l0aW9uLCBleGNsdWRlUmFuZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgaSA9IGlucHV0LmluZGV4T2Yoc2VhcmNoLCBwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZXhjbHVzaW9uID0gZXhjbHVkZVJhbmdlcy5maW5kKChyKSA9PiBpID49IHIuc3RhcnQgJiYgaSA8IHIuZW5kKTtcclxuICAgICAgICBpZiAoZXhjbHVzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleE9mRXhjbHVkaW5nKFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBleGNsdXNpb24uZW5kLFxyXG4gICAgICAgICAgICAgICAgZXhjbHVkZVJhbmdlc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNwbGl0RXhjbHVkaW5nKGlucHV0LCBzZXBhcmF0b3IsIGV4Y2x1ZGVSYW5nZXMpIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IFtdO1xyXG4gICAgICAgIGxldCBjb21tYUluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IGN1cnJJbmRleCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAoY29tbWFJbmRleCA9IGluZGV4T2ZFeGNsdWRpbmcoXHJcbiAgICAgICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcixcclxuICAgICAgICAgICAgICAgIGN1cnJJbmRleCxcclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICAgICAgICAgKSkgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJySW5kZXgsIGNvbW1hSW5kZXgpLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGN1cnJJbmRleCA9IGNvbW1hSW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJySW5kZXgpLnRyaW0oKSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhbmNob3I7XHJcbiAgICBjb25zdCBwYXJzZWRVUkxDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGZpeEJhc2VVUkwoJHVybCkge1xyXG4gICAgICAgIGlmICghYW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbmNob3IuaHJlZiA9ICR1cmw7XHJcbiAgICAgICAgcmV0dXJuIGFuY2hvci5ocmVmO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VVUkwoJHVybCwgJGJhc2UgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7JHVybH0keyRiYXNlID8gYDskeyRiYXNlfWAgOiBcIlwifWA7XHJcbiAgICAgICAgaWYgKHBhcnNlZFVSTENhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRVUkxDYWNoZS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRiYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IG5ldyBVUkwoJHVybCwgZml4QmFzZVVSTCgkYmFzZSkpO1xyXG4gICAgICAgICAgICBwYXJzZWRVUkxDYWNoZS5zZXQoa2V5LCBwYXJzZWRVUkwpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVVJMO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKGZpeEJhc2VVUkwoJHVybCkpO1xyXG4gICAgICAgIHBhcnNlZFVSTENhY2hlLnNldCgkdXJsLCBwYXJzZWRVUkwpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWRVUkw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRBYnNvbHV0ZVVSTCgkYmFzZSwgJHJlbGF0aXZlKSB7XHJcbiAgICAgICAgaWYgKCRyZWxhdGl2ZS5tYXRjaCgvXmRhdGFcXFxcP1xcOi8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgvXlxcL1xcLy8udGVzdCgkcmVsYXRpdmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtsb2NhdGlvbi5wcm90b2NvbH0keyRyZWxhdGl2ZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiID0gcGFyc2VVUkwoJGJhc2UpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBwYXJzZVVSTCgkcmVsYXRpdmUsIGIuaHJlZik7XHJcbiAgICAgICAgcmV0dXJuIGEuaHJlZjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUmVsYXRpdmVIcmVmT25BYnNvbHV0ZVBhdGgoaHJlZikge1xyXG4gICAgICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsID0gcGFyc2VVUkwoaHJlZik7XHJcbiAgICAgICAgaWYgKHVybC5wcm90b2NvbCAhPT0gbG9jYXRpb24ucHJvdG9jb2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cmwucG9ydCAhPT0gbG9jYXRpb24ucG9ydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4Y2x1ZGVkU2VsZWN0b3JzID0gW1xyXG4gICAgICAgIFwicHJlXCIsXHJcbiAgICAgICAgXCJwcmUgKlwiLFxyXG4gICAgICAgIFwiY29kZVwiLFxyXG4gICAgICAgICdbYXJpYS1oaWRkZW49XCJ0cnVlXCJdJyxcclxuICAgICAgICAnW2NsYXNzKj1cImZhLVwiXScsXHJcbiAgICAgICAgXCIuZmFcIixcclxuICAgICAgICBcIi5mYWJcIixcclxuICAgICAgICBcIi5mYWRcIixcclxuICAgICAgICBcIi5mYWxcIixcclxuICAgICAgICBcIi5mYXJcIixcclxuICAgICAgICBcIi5mYXNcIixcclxuICAgICAgICBcIi5mYXNzXCIsXHJcbiAgICAgICAgXCIuZmFzclwiLFxyXG4gICAgICAgIFwiLmZhdFwiLFxyXG4gICAgICAgIFwiLmljb2ZvbnRcIixcclxuICAgICAgICAnW3N0eWxlKj1cImZvbnQtXCJdJyxcclxuICAgICAgICAnW2NsYXNzKj1cImljb25cIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwiSWNvblwiXScsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJzeW1ib2xcIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwiU3ltYm9sXCJdJyxcclxuICAgICAgICBcIi5nbHlwaGljb25cIixcclxuICAgICAgICAnW2NsYXNzKj1cIm1hdGVyaWFsLXN5bWJvbFwiXScsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJtYXRlcmlhbC1pY29uXCJdJyxcclxuICAgICAgICBcIm11XCIsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJtdS1cIl0nLFxyXG4gICAgICAgIFwiLnR5cGNuXCIsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJ2anMtXCJdJ1xyXG4gICAgXTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHRTdHlsZShjb25maWcpIHtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYCo6bm90KCR7ZXhjbHVkZWRTZWxlY3RvcnMuam9pbihcIiwgXCIpfSkge2ApO1xyXG4gICAgICAgIGlmIChjb25maWcudXNlRm9udCAmJiBjb25maWcuZm9udEZhbWlseSkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAgIGZvbnQtZmFtaWx5OiAke2NvbmZpZy5mb250RmFtaWx5fSAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLnRleHRTdHJva2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAke2NvbmZpZy50ZXh0U3Ryb2tlfXB4ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAgIHRleHQtc3Ryb2tlOiAke2NvbmZpZy50ZXh0U3Ryb2tlfXB4ICFpbXBvcnRhbnQ7YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKGl0ZW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaChpdGVtcywgaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAoaXNBcnJheUxpa2UoaXRlbXMpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvcihpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHB1c2goYXJyYXksIGFkZGl0aW9uKSB7XHJcbiAgICAgICAgZm9yRWFjaChhZGRpdGlvbiwgKGEpID0+IGFycmF5LnB1c2goYSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9BcnJheShpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW1zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XHJcbiAgICAgICAgcmV0dXJuICgoeCAtIGluTG93KSAqIChvdXRIaWdoIC0gb3V0TG93KSkgLyAoaW5IaWdoIC0gaW5Mb3cpICsgb3V0TG93O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xhbXAoeCwgbWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHgpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG11bHRpcGx5TWF0cmljZXMobTEsIG0yKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG0xLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgbGVuMiA9IG0yWzBdLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuMyA9IG0xWzBdLmxlbmd0aDsgayA8IGxlbjM7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBtMVtpXVtrXSAqIG0yW2tdW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldW2pdID0gc3VtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmlsdGVyTWF0cml4KGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtID0gTWF0cml4LmlkZW50aXR5KCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zZXBpYSAhPT0gMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguc2VwaWEoY29uZmlnLnNlcGlhIC8gMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuZ3JheXNjYWxlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5ncmF5c2NhbGUoY29uZmlnLmdyYXlzY2FsZSAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmNvbnRyYXN0ICE9PSAxMDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmNvbnRyYXN0KGNvbmZpZy5jb250cmFzdCAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmJyaWdodG5lc3MgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguYnJpZ2h0bmVzcyhjb25maWcuYnJpZ2h0bmVzcyAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmludmVydE5IdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXBwbHlDb2xvck1hdHJpeChbciwgZywgYl0sIG1hdHJpeCkge1xyXG4gICAgICAgIGNvbnN0IHJnYiA9IFtbciAvIDI1NV0sIFtnIC8gMjU1XSwgW2IgLyAyNTVdLCBbMV0sIFsxXV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbXVsdGlwbHlNYXRyaWNlcyhtYXRyaXgsIHJnYik7XHJcbiAgICAgICAgcmV0dXJuIFswLCAxLCAyXS5tYXAoKGkpID0+XHJcbiAgICAgICAgICAgIGNsYW1wKE1hdGgucm91bmQocmVzdWx0W2ldWzBdICogMjU1KSwgMCwgMjU1KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBNYXRyaXggPSB7XHJcbiAgICAgICAgaWRlbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludmVydE5IdWUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMC4zMzMsIC0wLjY2NywgLTAuNjY3LCAwLCAxXSxcclxuICAgICAgICAgICAgICAgIFstMC42NjcsIDAuMzMzLCAtMC42NjcsIDAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWy0wLjY2NywgLTAuNjY3LCAwLjMzMywgMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyaWdodG5lc3Modikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW3YsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIHYsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIHYsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cmFzdCh2KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSAoMSAtIHYpIC8gMjtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFt2LCAwLCAwLCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCB2LCAwLCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCB2LCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VwaWEodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMzkzICsgMC42MDcgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzY5IC0gMC43NjkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMTg5IC0gMC4xODkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjM0OSAtIDAuMzQ5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjY4NiArIDAuMzE0ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjE2OCAtIDAuMTY4ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yNzIgLSAwLjI3MiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC41MzQgLSAwLjUzNCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4xMzEgKyAwLjg2OSAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmF5c2NhbGUodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjEyNiArIDAuNzg3NCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC43MTUyIC0gMC43MTUyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjA3MjIgLSAwLjA3MjIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzE1MiArIDAuMjg0OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjcxNTIgLSAwLjcxNTIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMDcyMiArIDAuOTI3OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgRmlsdGVyTW9kZTtcclxuICAgIChmdW5jdGlvbiAoRmlsdGVyTW9kZSkge1xyXG4gICAgICAgIEZpbHRlck1vZGVbKEZpbHRlck1vZGVbXCJsaWdodFwiXSA9IDApXSA9IFwibGlnaHRcIjtcclxuICAgICAgICBGaWx0ZXJNb2RlWyhGaWx0ZXJNb2RlW1wiZGFya1wiXSA9IDEpXSA9IFwiZGFya1wiO1xyXG4gICAgfSkoRmlsdGVyTW9kZSB8fCAoRmlsdGVyTW9kZSA9IHt9KSk7XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NGaWx0ZXJWYWx1ZShjb25maWcpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKGNvbmZpZy5tb2RlID09PSBGaWx0ZXJNb2RlLmRhcmspIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKFwiaW52ZXJ0KDEwMCUpIGh1ZS1yb3RhdGUoMTgwZGVnKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5icmlnaHRuZXNzICE9PSAxMDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKGBicmlnaHRuZXNzKCR7Y29uZmlnLmJyaWdodG5lc3N9JSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5jb250cmFzdCAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChgY29udHJhc3QoJHtjb25maWcuY29udHJhc3R9JSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5ncmF5c2NhbGUgIT09IDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKGBncmF5c2NhbGUoJHtjb25maWcuZ3JheXNjYWxlfSUpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuc2VwaWEgIT09IDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKGBzZXBpYSgke2NvbmZpZy5zZXBpYX0lKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWx0ZXJzLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV2YWxNYXRoKGV4cHJlc3Npb24pIHtcclxuICAgICAgICBjb25zdCBycG5TdGFjayA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmdTdGFjayA9IFtdO1xyXG4gICAgICAgIGxldCBsYXN0VG9rZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGV4cHJlc3Npb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBleHByZXNzaW9uW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuIHx8IHRva2VuID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wZXJhdG9ycy5oYXModG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IG9wZXJhdG9ycy5nZXQodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdvcmtpbmdTdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50T3AgPSBvcGVyYXRvcnMuZ2V0KHdvcmtpbmdTdGFja1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50T3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcC5sZXNzT3JFcXVhbFRoYW4oY3VycmVudE9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBycG5TdGFjay5wdXNoKHdvcmtpbmdTdGFjay5zaGlmdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3b3JraW5nU3RhY2sudW5zaGlmdCh0b2tlbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxhc3RUb2tlbiB8fCBvcGVyYXRvcnMuaGFzKGxhc3RUb2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJwblN0YWNrLnB1c2godG9rZW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcnBuU3RhY2tbcnBuU3RhY2subGVuZ3RoIC0gMV0gKz0gdG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJwblN0YWNrLnB1c2goLi4ud29ya2luZ1N0YWNrKTtcclxuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBycG5TdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvcCA9IG9wZXJhdG9ycy5nZXQocnBuU3RhY2tbaV0pO1xyXG4gICAgICAgICAgICBpZiAob3ApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBzdGFjay5zcGxpY2UoMCwgMik7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG9wLmV4ZWMoYXJnc1sxXSwgYXJnc1swXSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sudW5zaGlmdChwYXJzZUZsb2F0KHJwblN0YWNrW2ldKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrWzBdO1xyXG4gICAgfVxyXG4gICAgY2xhc3MgT3BlcmF0b3Ige1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWNlZGVuY2UsIG1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZWNlbmRjZSA9IHByZWNlZGVuY2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY01ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhlYyhsZWZ0LCByaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVjTWV0aG9kKGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGVzc09yRXF1YWxUaGFuKG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZWNlbmRjZSA8PSBvcC5wcmVjZW5kY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3BlcmF0b3JzID0gbmV3IE1hcChbXHJcbiAgICAgICAgW1wiK1wiLCBuZXcgT3BlcmF0b3IoMSwgKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0ICsgcmlnaHQpXSxcclxuICAgICAgICBbXCItXCIsIG5ldyBPcGVyYXRvcigxLCAobGVmdCwgcmlnaHQpID0+IGxlZnQgLSByaWdodCldLFxyXG4gICAgICAgIFtcIipcIiwgbmV3IE9wZXJhdG9yKDIsIChsZWZ0LCByaWdodCkgPT4gbGVmdCAqIHJpZ2h0KV0sXHJcbiAgICAgICAgW1wiL1wiLCBuZXcgT3BlcmF0b3IoMiwgKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0IC8gcmlnaHQpXVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgaXNTeXN0ZW1EYXJrTW9kZUVuYWJsZWQgPSAoKSA9PlxyXG4gICAgICAgIG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXM7XHJcblxyXG4gICAgY29uc3QgaHNsYVBhcnNlQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCByZ2JhUGFyc2VDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHBhcnNlQ29sb3JXaXRoQ2FjaGUoJGNvbG9yKSB7XHJcbiAgICAgICAgJGNvbG9yID0gJGNvbG9yLnRyaW0oKTtcclxuICAgICAgICBpZiAocmdiYVBhcnNlQ2FjaGUuaGFzKCRjb2xvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJnYmFQYXJzZUNhY2hlLmdldCgkY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNvbG9yLmluY2x1ZGVzKFwiY2FsYyhcIikpIHtcclxuICAgICAgICAgICAgJGNvbG9yID0gbG93ZXJDYWxjRXhwcmVzc2lvbigkY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb2xvciA9IHBhcnNlKCRjb2xvcik7XHJcbiAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHJnYmFQYXJzZUNhY2hlLnNldCgkY29sb3IsIGNvbG9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlVG9IU0xXaXRoQ2FjaGUoY29sb3IpIHtcclxuICAgICAgICBpZiAoaHNsYVBhcnNlQ2FjaGUuaGFzKGNvbG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaHNsYVBhcnNlQ2FjaGUuZ2V0KGNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvcik7XHJcbiAgICAgICAgaWYgKCFyZ2IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgaHNsYVBhcnNlQ2FjaGUuc2V0KGNvbG9yLCBoc2wpO1xyXG4gICAgICAgIHJldHVybiBoc2w7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhckNvbG9yQ2FjaGUoKSB7XHJcbiAgICAgICAgaHNsYVBhcnNlQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICByZ2JhUGFyc2VDYWNoZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaHNsVG9SR0Ioe2gsIHMsIGwsIGEgPSAxfSkge1xyXG4gICAgICAgIGlmIChzID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyLCBiLCBnXSA9IFtsLCBsLCBsXS5tYXAoKHgpID0+IE1hdGgucm91bmQoeCAqIDI1NSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge3IsIGcsIGIsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHM7XHJcbiAgICAgICAgY29uc3QgeCA9IGMgKiAoMSAtIE1hdGguYWJzKCgoaCAvIDYwKSAlIDIpIC0gMSkpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBsIC0gYyAvIDI7XHJcbiAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gKFxyXG4gICAgICAgICAgICBoIDwgNjBcclxuICAgICAgICAgICAgICAgID8gW2MsIHgsIDBdXHJcbiAgICAgICAgICAgICAgICA6IGggPCAxMjBcclxuICAgICAgICAgICAgICAgICAgPyBbeCwgYywgMF1cclxuICAgICAgICAgICAgICAgICAgOiBoIDwgMTgwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbMCwgYywgeF1cclxuICAgICAgICAgICAgICAgICAgICA6IGggPCAyNDBcclxuICAgICAgICAgICAgICAgICAgICAgID8gWzAsIHgsIGNdXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGggPCAzMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbeCwgMCwgY11cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbYywgMCwgeF1cclxuICAgICAgICApLm1hcCgobikgPT4gTWF0aC5yb3VuZCgobiArIG0pICogMjU1KSk7XHJcbiAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJnYlRvSFNMKHtyOiByMjU1LCBnOiBnMjU1LCBiOiBiMjU1LCBhID0gMX0pIHtcclxuICAgICAgICBjb25zdCByID0gcjI1NSAvIDI1NTtcclxuICAgICAgICBjb25zdCBnID0gZzI1NSAvIDI1NTtcclxuICAgICAgICBjb25zdCBiID0gYjI1NSAvIDI1NTtcclxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuICAgICAgICBjb25zdCBjID0gbWF4IC0gbWluO1xyXG4gICAgICAgIGNvbnN0IGwgPSAobWF4ICsgbWluKSAvIDI7XHJcbiAgICAgICAgaWYgKGMgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtoOiAwLCBzOiAwLCBsLCBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGggPVxyXG4gICAgICAgICAgICAobWF4ID09PSByXHJcbiAgICAgICAgICAgICAgICA/ICgoZyAtIGIpIC8gYykgJSA2XHJcbiAgICAgICAgICAgICAgICA6IG1heCA9PT0gZ1xyXG4gICAgICAgICAgICAgICAgICA/IChiIC0gcikgLyBjICsgMlxyXG4gICAgICAgICAgICAgICAgICA6IChyIC0gZykgLyBjICsgNCkgKiA2MDtcclxuICAgICAgICBpZiAoaCA8IDApIHtcclxuICAgICAgICAgICAgaCArPSAzNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHMgPSBjIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcclxuICAgICAgICByZXR1cm4ge2gsIHMsIGwsIGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9GaXhlZChuLCBkaWdpdHMgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgZml4ZWQgPSBuLnRvRml4ZWQoZGlnaXRzKTtcclxuICAgICAgICBpZiAoZGlnaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXhlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZG90ID0gZml4ZWQuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgaWYgKGRvdCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHplcm9zTWF0Y2ggPSBmaXhlZC5tYXRjaCgvMCskLyk7XHJcbiAgICAgICAgICAgIGlmICh6ZXJvc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoemVyb3NNYXRjaC5pbmRleCA9PT0gZG90ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZC5zdWJzdHJpbmcoMCwgZG90KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZC5zdWJzdHJpbmcoMCwgemVyb3NNYXRjaC5pbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpeGVkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9TdHJpbmcocmdiKSB7XHJcbiAgICAgICAgY29uc3Qge3IsIGcsIGIsIGF9ID0gcmdiO1xyXG4gICAgICAgIGlmIChhICE9IG51bGwgJiYgYSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7dG9GaXhlZChyKX0sICR7dG9GaXhlZChnKX0sICR7dG9GaXhlZChiKX0sICR7dG9GaXhlZChhLCAyKX0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGByZ2IoJHt0b0ZpeGVkKHIpfSwgJHt0b0ZpeGVkKGcpfSwgJHt0b0ZpeGVkKGIpfSlgO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9IZXhTdHJpbmcoe3IsIGcsIGIsIGF9KSB7XHJcbiAgICAgICAgcmV0dXJuIGAjJHsoYSAhPSBudWxsICYmIGEgPCAxXHJcbiAgICAgICAgICAgID8gW3IsIGcsIGIsIE1hdGgucm91bmQoYSAqIDI1NSldXHJcbiAgICAgICAgICAgIDogW3IsIGcsIGJdXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKCh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7eCA8IDE2ID8gXCIwXCIgOiBcIlwifSR7eC50b1N0cmluZygxNil9YDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcIil9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhzbFRvU3RyaW5nKGhzbCkge1xyXG4gICAgICAgIGNvbnN0IHtoLCBzLCBsLCBhfSA9IGhzbDtcclxuICAgICAgICBpZiAoYSAhPSBudWxsICYmIGEgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgaHNsYSgke3RvRml4ZWQoaCl9LCAke3RvRml4ZWQocyAqIDEwMCl9JSwgJHt0b0ZpeGVkKGwgKiAxMDApfSUsICR7dG9GaXhlZChhLCAyKX0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBoc2woJHt0b0ZpeGVkKGgpfSwgJHt0b0ZpeGVkKHMgKiAxMDApfSUsICR7dG9GaXhlZChsICogMTAwKX0lKWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZ2JNYXRjaCA9IC9ecmdiYT9cXChbXlxcKFxcKV0rXFwpJC87XHJcbiAgICBjb25zdCBoc2xNYXRjaCA9IC9eaHNsYT9cXChbXlxcKFxcKV0rXFwpJC87XHJcbiAgICBjb25zdCBoZXhNYXRjaCA9IC9eI1swLTlhLWZdKyQvaTtcclxuICAgIGNvbnN0IHN1cHBvcnRlZENvbG9yRnVuY3MgPSBbXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIFwiY29sb3ItbWl4XCIsXHJcbiAgICAgICAgXCJod2JcIixcclxuICAgICAgICBcImxhYlwiLFxyXG4gICAgICAgIFwibGNoXCIsXHJcbiAgICAgICAgXCJva2xhYlwiLFxyXG4gICAgICAgIFwib2tsY2hcIlxyXG4gICAgXTtcclxuICAgIGZ1bmN0aW9uIHBhcnNlKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IGMgPSAkY29sb3IudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGMuaW5jbHVkZXMoXCIoZnJvbSBcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvbVBhcnNlQ29sb3IoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLm1hdGNoKHJnYk1hdGNoKSkge1xyXG4gICAgICAgICAgICBpZiAoYy5zdGFydHNXaXRoKFwicmdiKCNcIikgfHwgYy5zdGFydHNXaXRoKFwicmdiYSgjXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9tUGFyc2VDb2xvcihjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VSR0IoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLm1hdGNoKGhzbE1hdGNoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VIU0woYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjLm1hdGNoKGhleE1hdGNoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VIZXgoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrbm93bkNvbG9ycy5oYXMoYykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldENvbG9yQnlOYW1lKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3lzdGVtQ29sb3JzLmhhcyhjKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0U3lzdGVtQ29sb3IoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjID09PSBcInRyYW5zcGFyZW50XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtyOiAwLCBnOiAwLCBiOiAwLCBhOiAwfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjLmVuZHNXaXRoKFwiKVwiKSAmJlxyXG4gICAgICAgICAgICBzdXBwb3J0ZWRDb2xvckZ1bmNzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAoZm4pID0+IGMuc3RhcnRzV2l0aChmbikgJiYgY1tmbi5sZW5ndGhdID09PSBcIihcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb21QYXJzZUNvbG9yKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5zdGFydHNXaXRoKFwibGlnaHQtZGFyayhcIikgJiYgYy5lbmRzV2l0aChcIilcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgL15saWdodC1kYXJrXFwoXFxzKihbYS16XSsoXFwoLipcXCkpPyksXFxzKihbYS16XSsoXFwoLipcXCkpPylcXHMqXFwpJC9cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2hlbWVDb2xvciA9IGlzU3lzdGVtRGFya01vZGVFbmFibGVkKClcclxuICAgICAgICAgICAgICAgICAgICA/IG1hdGNoWzNdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZShzY2hlbWVDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXROdW1iZXJzKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IG51bWJlcnMgPSBbXTtcclxuICAgICAgICBsZXQgcHJldlBvcyA9IDA7XHJcbiAgICAgICAgbGV0IGlzTWluaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9ICRjb2xvci5pbmRleE9mKFwiKFwiKTtcclxuICAgICAgICAkY29sb3IgPSAkY29sb3Iuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAxLCAkY29sb3IubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkY29sb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYyA9ICRjb2xvcltpXTtcclxuICAgICAgICAgICAgaWYgKChjID49IFwiMFwiICYmIGMgPD0gXCI5XCIpIHx8IGMgPT09IFwiLlwiIHx8IGMgPT09IFwiK1wiIHx8IGMgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpc01pbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNNaW5pbmcgJiYgKGMgPT09IFwiIFwiIHx8IGMgPT09IFwiLFwiIHx8IGMgPT09IFwiL1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVycy5wdXNoKCRjb2xvci5zdWJzdHJpbmcocHJldlBvcywgaSkpO1xyXG4gICAgICAgICAgICAgICAgaXNNaW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNNaW5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNNaW5pbmcpIHtcclxuICAgICAgICAgICAgbnVtYmVycy5wdXNoKCRjb2xvci5zdWJzdHJpbmcocHJldlBvcywgJGNvbG9yLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtYmVycztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE51bWJlcnNGcm9tU3RyaW5nKHN0ciwgcmFuZ2UsIHVuaXRzKSB7XHJcbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0TnVtYmVycyhzdHIpO1xyXG4gICAgICAgIGNvbnN0IHVuaXRzTGlzdCA9IE9iamVjdC5lbnRyaWVzKHVuaXRzKTtcclxuICAgICAgICBjb25zdCBudW1iZXJzID0gcmF3XHJcbiAgICAgICAgICAgIC5tYXAoKHIpID0+IHIudHJpbSgpKVxyXG4gICAgICAgICAgICAubWFwKChyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXQgPSB1bml0c0xpc3QuZmluZCgoW3VdKSA9PiByLmVuZHNXaXRoKHUpKTtcclxuICAgICAgICAgICAgICAgIGlmICh1bml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KHIuc3Vic3RyaW5nKDAsIHIubGVuZ3RoIC0gdW5pdFswXS5sZW5ndGgpKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0WzFdKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlW2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuID0gcGFyc2VGbG9hdChyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyYW5nZVtpXSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbnVtYmVycztcclxuICAgIH1cclxuICAgIGNvbnN0IHJnYlJhbmdlID0gWzI1NSwgMjU1LCAyNTUsIDFdO1xyXG4gICAgY29uc3QgcmdiVW5pdHMgPSB7XCIlXCI6IDEwMH07XHJcbiAgICBmdW5jdGlvbiBwYXJzZVJHQigkcmdiKSB7XHJcbiAgICAgICAgY29uc3QgW3IsIGcsIGIsIGEgPSAxXSA9IGdldE51bWJlcnNGcm9tU3RyaW5nKCRyZ2IsIHJnYlJhbmdlLCByZ2JVbml0cyk7XHJcbiAgICAgICAgaWYgKHIgPT0gbnVsbCB8fCBnID09IG51bGwgfHwgYiA9PSBudWxsIHx8IGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhzbFJhbmdlID0gWzM2MCwgMSwgMSwgMV07XHJcbiAgICBjb25zdCBoc2xVbml0cyA9IHtcIiVcIjogMTAwLCBcImRlZ1wiOiAzNjAsIFwicmFkXCI6IDIgKiBNYXRoLlBJLCBcInR1cm5cIjogMX07XHJcbiAgICBmdW5jdGlvbiBwYXJzZUhTTCgkaHNsKSB7XHJcbiAgICAgICAgY29uc3QgW2gsIHMsIGwsIGEgPSAxXSA9IGdldE51bWJlcnNGcm9tU3RyaW5nKCRoc2wsIGhzbFJhbmdlLCBoc2xVbml0cyk7XHJcbiAgICAgICAgaWYgKGggPT0gbnVsbCB8fCBzID09IG51bGwgfHwgbCA9PSBudWxsIHx8IGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhzbFRvUkdCKHtoLCBzLCBsLCBhfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUhleCgkaGV4KSB7XHJcbiAgICAgICAgY29uc3QgaCA9ICRoZXguc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBjYXNlIDQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IFswLCAxLCAyXS5tYXAoKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYCR7aFtpXX0ke2hbaV19YCwgMTYpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9XHJcbiAgICAgICAgICAgICAgICAgICAgaC5sZW5ndGggPT09IDMgPyAxIDogcGFyc2VJbnQoYCR7aFszXX0ke2hbM119YCwgMTYpIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGNhc2UgODoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gWzAsIDIsIDRdLm1hcCgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMiksIDE2KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPVxyXG4gICAgICAgICAgICAgICAgICAgIGgubGVuZ3RoID09PSA2ID8gMSA6IHBhcnNlSW50KGguc3Vic3RyaW5nKDYsIDgpLCAxNikgLyAyNTU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3IsIGcsIGIsIGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JCeU5hbWUoJGNvbG9yKSB7XHJcbiAgICAgICAgY29uc3QgbiA9IGtub3duQ29sb3JzLmdldCgkY29sb3IpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IChuID4+IDE2KSAmIDI1NSxcclxuICAgICAgICAgICAgZzogKG4gPj4gOCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGI6IChuID4+IDApICYgMjU1LFxyXG4gICAgICAgICAgICBhOiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN5c3RlbUNvbG9yKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IG4gPSBzeXN0ZW1Db2xvcnMuZ2V0KCRjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogKG4gPj4gMTYpICYgMjU1LFxyXG4gICAgICAgICAgICBnOiAobiA+PiA4KSAmIDI1NSxcclxuICAgICAgICAgICAgYjogKG4gPj4gMCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGE6IDFcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG93ZXJDYWxjRXhwcmVzc2lvbihjb2xvcikge1xyXG4gICAgICAgIGxldCBzZWFyY2hJbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZUJldHdlZW5JbmRpY2VzID0gKHN0YXJ0LCBlbmQsIHJlcGxhY2VtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbG9yID1cclxuICAgICAgICAgICAgICAgIGNvbG9yLnN1YnN0cmluZygwLCBzdGFydCkgKyByZXBsYWNlbWVudCArIGNvbG9yLnN1YnN0cmluZyhlbmQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2hpbGUgKChzZWFyY2hJbmRleCA9IGNvbG9yLmluZGV4T2YoXCJjYWxjKFwiKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZ2V0UGFyZW50aGVzZXNSYW5nZShjb2xvciwgc2VhcmNoSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoIXJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc2xpY2UgPSBjb2xvci5zbGljZShyYW5nZS5zdGFydCArIDEsIHJhbmdlLmVuZCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmNsdWRlc1BlcmNlbnRhZ2UgPSBzbGljZS5pbmNsdWRlcyhcIiVcIik7XHJcbiAgICAgICAgICAgIHNsaWNlID0gc2xpY2Uuc3BsaXQoXCIlXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IE1hdGgucm91bmQoZXZhbE1hdGgoc2xpY2UpKTtcclxuICAgICAgICAgICAgcmVwbGFjZUJldHdlZW5JbmRpY2VzKFxyXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc3RhcnQgLSA0LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2UuZW5kLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICsgKGluY2x1ZGVzUGVyY2VudGFnZSA/IFwiJVwiIDogXCJcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga25vd25Db2xvcnMgPSBuZXcgTWFwKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgYWxpY2VibHVlOiAweGYwZjhmZixcclxuICAgICAgICAgICAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcclxuICAgICAgICAgICAgYXF1YTogMHgwMGZmZmYsXHJcbiAgICAgICAgICAgIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxyXG4gICAgICAgICAgICBhenVyZTogMHhmMGZmZmYsXHJcbiAgICAgICAgICAgIGJlaWdlOiAweGY1ZjVkYyxcclxuICAgICAgICAgICAgYmlzcXVlOiAweGZmZTRjNCxcclxuICAgICAgICAgICAgYmxhY2s6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXHJcbiAgICAgICAgICAgIGJsdWU6IDB4MDAwMGZmLFxyXG4gICAgICAgICAgICBibHVldmlvbGV0OiAweDhhMmJlMixcclxuICAgICAgICAgICAgYnJvd246IDB4YTUyYTJhLFxyXG4gICAgICAgICAgICBidXJseXdvb2Q6IDB4ZGViODg3LFxyXG4gICAgICAgICAgICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxyXG4gICAgICAgICAgICBjaGFydHJldXNlOiAweDdmZmYwMCxcclxuICAgICAgICAgICAgY2hvY29sYXRlOiAweGQyNjkxZSxcclxuICAgICAgICAgICAgY29yYWw6IDB4ZmY3ZjUwLFxyXG4gICAgICAgICAgICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXHJcbiAgICAgICAgICAgIGNvcm5zaWxrOiAweGZmZjhkYyxcclxuICAgICAgICAgICAgY3JpbXNvbjogMHhkYzE0M2MsXHJcbiAgICAgICAgICAgIGN5YW46IDB4MDBmZmZmLFxyXG4gICAgICAgICAgICBkYXJrYmx1ZTogMHgwMDAwOGIsXHJcbiAgICAgICAgICAgIGRhcmtjeWFuOiAweDAwOGI4YixcclxuICAgICAgICAgICAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXHJcbiAgICAgICAgICAgIGRhcmtncmF5OiAweGE5YTlhOSxcclxuICAgICAgICAgICAgZGFya2dyZXk6IDB4YTlhOWE5LFxyXG4gICAgICAgICAgICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxyXG4gICAgICAgICAgICBkYXJra2hha2k6IDB4YmRiNzZiLFxyXG4gICAgICAgICAgICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXHJcbiAgICAgICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcclxuICAgICAgICAgICAgZGFya29yYW5nZTogMHhmZjhjMDAsXHJcbiAgICAgICAgICAgIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxyXG4gICAgICAgICAgICBkYXJrcmVkOiAweDhiMDAwMCxcclxuICAgICAgICAgICAgZGFya3NhbG1vbjogMHhlOTk2N2EsXHJcbiAgICAgICAgICAgIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXHJcbiAgICAgICAgICAgIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxyXG4gICAgICAgICAgICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcclxuICAgICAgICAgICAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXHJcbiAgICAgICAgICAgIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxyXG4gICAgICAgICAgICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcclxuICAgICAgICAgICAgZGVlcHBpbms6IDB4ZmYxNDkzLFxyXG4gICAgICAgICAgICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXHJcbiAgICAgICAgICAgIGRpbWdyYXk6IDB4Njk2OTY5LFxyXG4gICAgICAgICAgICBkaW1ncmV5OiAweDY5Njk2OSxcclxuICAgICAgICAgICAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXHJcbiAgICAgICAgICAgIGZpcmVicmljazogMHhiMjIyMjIsXHJcbiAgICAgICAgICAgIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcclxuICAgICAgICAgICAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxyXG4gICAgICAgICAgICBmdWNoc2lhOiAweGZmMDBmZixcclxuICAgICAgICAgICAgZ2FpbnNib3JvOiAweGRjZGNkYyxcclxuICAgICAgICAgICAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXHJcbiAgICAgICAgICAgIGdvbGQ6IDB4ZmZkNzAwLFxyXG4gICAgICAgICAgICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxyXG4gICAgICAgICAgICBncmF5OiAweDgwODA4MCxcclxuICAgICAgICAgICAgZ3JleTogMHg4MDgwODAsXHJcbiAgICAgICAgICAgIGdyZWVuOiAweDAwODAwMCxcclxuICAgICAgICAgICAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxyXG4gICAgICAgICAgICBob25leWRldzogMHhmMGZmZjAsXHJcbiAgICAgICAgICAgIGhvdHBpbms6IDB4ZmY2OWI0LFxyXG4gICAgICAgICAgICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxyXG4gICAgICAgICAgICBpbmRpZ286IDB4NGIwMDgyLFxyXG4gICAgICAgICAgICBpdm9yeTogMHhmZmZmZjAsXHJcbiAgICAgICAgICAgIGtoYWtpOiAweGYwZTY4YyxcclxuICAgICAgICAgICAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxyXG4gICAgICAgICAgICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcclxuICAgICAgICAgICAgbGF3bmdyZWVuOiAweDdjZmMwMCxcclxuICAgICAgICAgICAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcclxuICAgICAgICAgICAgbGlnaHRibHVlOiAweGFkZDhlNixcclxuICAgICAgICAgICAgbGlnaHRjb3JhbDogMHhmMDgwODAsXHJcbiAgICAgICAgICAgIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXHJcbiAgICAgICAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcclxuICAgICAgICAgICAgbGlnaHRncmF5OiAweGQzZDNkMyxcclxuICAgICAgICAgICAgbGlnaHRncmV5OiAweGQzZDNkMyxcclxuICAgICAgICAgICAgbGlnaHRncmVlbjogMHg5MGVlOTAsXHJcbiAgICAgICAgICAgIGxpZ2h0cGluazogMHhmZmI2YzEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcclxuICAgICAgICAgICAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcclxuICAgICAgICAgICAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxyXG4gICAgICAgICAgICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXHJcbiAgICAgICAgICAgIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcclxuICAgICAgICAgICAgbGltZTogMHgwMGZmMDAsXHJcbiAgICAgICAgICAgIGxpbWVncmVlbjogMHgzMmNkMzIsXHJcbiAgICAgICAgICAgIGxpbmVuOiAweGZhZjBlNixcclxuICAgICAgICAgICAgbWFnZW50YTogMHhmZjAwZmYsXHJcbiAgICAgICAgICAgIG1hcm9vbjogMHg4MDAwMDAsXHJcbiAgICAgICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxyXG4gICAgICAgICAgICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcclxuICAgICAgICAgICAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcclxuICAgICAgICAgICAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcclxuICAgICAgICAgICAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxyXG4gICAgICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxyXG4gICAgICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXHJcbiAgICAgICAgICAgIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXHJcbiAgICAgICAgICAgIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXHJcbiAgICAgICAgICAgIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXHJcbiAgICAgICAgICAgIG1pbnRjcmVhbTogMHhmNWZmZmEsXHJcbiAgICAgICAgICAgIG1pc3R5cm9zZTogMHhmZmU0ZTEsXHJcbiAgICAgICAgICAgIG1vY2Nhc2luOiAweGZmZTRiNSxcclxuICAgICAgICAgICAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxyXG4gICAgICAgICAgICBuYXZ5OiAweDAwMDA4MCxcclxuICAgICAgICAgICAgb2xkbGFjZTogMHhmZGY1ZTYsXHJcbiAgICAgICAgICAgIG9saXZlOiAweDgwODAwMCxcclxuICAgICAgICAgICAgb2xpdmVkcmFiOiAweDZiOGUyMyxcclxuICAgICAgICAgICAgb3JhbmdlOiAweGZmYTUwMCxcclxuICAgICAgICAgICAgb3JhbmdlcmVkOiAweGZmNDUwMCxcclxuICAgICAgICAgICAgb3JjaGlkOiAweGRhNzBkNixcclxuICAgICAgICAgICAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXHJcbiAgICAgICAgICAgIHBhbGVncmVlbjogMHg5OGZiOTgsXHJcbiAgICAgICAgICAgIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxyXG4gICAgICAgICAgICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcclxuICAgICAgICAgICAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXHJcbiAgICAgICAgICAgIHBlYWNocHVmZjogMHhmZmRhYjksXHJcbiAgICAgICAgICAgIHBlcnU6IDB4Y2Q4NTNmLFxyXG4gICAgICAgICAgICBwaW5rOiAweGZmYzBjYixcclxuICAgICAgICAgICAgcGx1bTogMHhkZGEwZGQsXHJcbiAgICAgICAgICAgIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxyXG4gICAgICAgICAgICBwdXJwbGU6IDB4ODAwMDgwLFxyXG4gICAgICAgICAgICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcclxuICAgICAgICAgICAgcmVkOiAweGZmMDAwMCxcclxuICAgICAgICAgICAgcm9zeWJyb3duOiAweGJjOGY4ZixcclxuICAgICAgICAgICAgcm95YWxibHVlOiAweDQxNjllMSxcclxuICAgICAgICAgICAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxyXG4gICAgICAgICAgICBzYWxtb246IDB4ZmE4MDcyLFxyXG4gICAgICAgICAgICBzYW5keWJyb3duOiAweGY0YTQ2MCxcclxuICAgICAgICAgICAgc2VhZ3JlZW46IDB4MmU4YjU3LFxyXG4gICAgICAgICAgICBzZWFzaGVsbDogMHhmZmY1ZWUsXHJcbiAgICAgICAgICAgIHNpZW5uYTogMHhhMDUyMmQsXHJcbiAgICAgICAgICAgIHNpbHZlcjogMHhjMGMwYzAsXHJcbiAgICAgICAgICAgIHNreWJsdWU6IDB4ODdjZWViLFxyXG4gICAgICAgICAgICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxyXG4gICAgICAgICAgICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxyXG4gICAgICAgICAgICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxyXG4gICAgICAgICAgICBzbm93OiAweGZmZmFmYSxcclxuICAgICAgICAgICAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxyXG4gICAgICAgICAgICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxyXG4gICAgICAgICAgICB0YW46IDB4ZDJiNDhjLFxyXG4gICAgICAgICAgICB0ZWFsOiAweDAwODA4MCxcclxuICAgICAgICAgICAgdGhpc3RsZTogMHhkOGJmZDgsXHJcbiAgICAgICAgICAgIHRvbWF0bzogMHhmZjYzNDcsXHJcbiAgICAgICAgICAgIHR1cnF1b2lzZTogMHg0MGUwZDAsXHJcbiAgICAgICAgICAgIHZpb2xldDogMHhlZTgyZWUsXHJcbiAgICAgICAgICAgIHdoZWF0OiAweGY1ZGViMyxcclxuICAgICAgICAgICAgd2hpdGU6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcclxuICAgICAgICAgICAgeWVsbG93OiAweGZmZmYwMCxcclxuICAgICAgICAgICAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICBjb25zdCBzeXN0ZW1Db2xvcnMgPSBuZXcgTWFwKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgXCJBY3RpdmVCb3JkZXJcIjogMHgzYjk5ZmMsXHJcbiAgICAgICAgICAgIFwiQWN0aXZlQ2FwdGlvblwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJBcHBXb3Jrc3BhY2VcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiQmFja2dyb3VuZFwiOiAweDYzNjNjZSxcclxuICAgICAgICAgICAgXCJCdXR0b25GYWNlXCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIkJ1dHRvbkhpZ2hsaWdodFwiOiAweGU5ZTllOSxcclxuICAgICAgICAgICAgXCJCdXR0b25TaGFkb3dcIjogMHg5ZmEwOWYsXHJcbiAgICAgICAgICAgIFwiQnV0dG9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJDYXB0aW9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJHcmF5VGV4dFwiOiAweDdmN2Y3ZixcclxuICAgICAgICAgICAgXCJIaWdobGlnaHRcIjogMHhiMmQ3ZmYsXHJcbiAgICAgICAgICAgIFwiSGlnaGxpZ2h0VGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUJvcmRlclwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUNhcHRpb25cIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiSW5hY3RpdmVDYXB0aW9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJJbmZvQmFja2dyb3VuZFwiOiAweGZiZmNjNSxcclxuICAgICAgICAgICAgXCJJbmZvVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJNZW51XCI6IDB4ZjZmNmY2LFxyXG4gICAgICAgICAgICBcIk1lbnVUZXh0XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlNjcm9sbGJhclwiOiAweGFhYWFhYSxcclxuICAgICAgICAgICAgXCJUaHJlZUREYXJrU2hhZG93XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIlRocmVlREZhY2VcIjogMHhjMGMwYzAsXHJcbiAgICAgICAgICAgIFwiVGhyZWVESGlnaGxpZ2h0XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlRocmVlRExpZ2h0U2hhZG93XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlRocmVlRFNoYWRvd1wiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJXaW5kb3dcIjogMHhlY2VjZWMsXHJcbiAgICAgICAgICAgIFwiV2luZG93RnJhbWVcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiV2luZG93VGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCItd2Via2l0LWZvY3VzLXJpbmctY29sb3JcIjogMHhlNTk3MDBcclxuICAgICAgICB9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleS50b0xvd2VyQ2FzZSgpLCB2YWx1ZV0pXHJcbiAgICApO1xyXG4gICAgZnVuY3Rpb24gZ2V0U1JHQkxpZ2h0bmVzcyhyLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuICgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpIC8gMjU1O1xyXG4gICAgfVxyXG4gICAgbGV0IGNhbnZhcyQxO1xyXG4gICAgbGV0IGNvbnRleHQkMTtcclxuICAgIGZ1bmN0aW9uIGRvbVBhcnNlQ29sb3IoJGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZXh0JDEpIHtcclxuICAgICAgICAgICAgY2FudmFzJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgICBjYW52YXMkMS53aWR0aCA9IDE7XHJcbiAgICAgICAgICAgIGNhbnZhcyQxLmhlaWdodCA9IDE7XHJcbiAgICAgICAgICAgIGNvbnRleHQkMSA9IGNhbnZhcyQxLmdldENvbnRleHQoXCIyZFwiLCB7d2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQkMS5maWxsU3R5bGUgPSAkY29sb3I7XHJcbiAgICAgICAgY29udGV4dCQxLmZpbGxSZWN0KDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIGNvbnN0IGQgPSBjb250ZXh0JDEuZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBgcmdiYSgke2RbMF19LCAke2RbMV19LCAke2RbMl19LCAkeyhkWzNdIC8gMjU1KS50b0ZpeGVkKDIpfSlgO1xyXG4gICAgICAgIHJldHVybiBwYXJzZVJHQihjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICBsZXQgbGFzdEFyZ3M7XHJcbiAgICAgICAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgbGFzdEFyZ3MgPSBhcmdzO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayguLi5sYXN0QXJncyk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayguLi5sYXN0QXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcclxuICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRocm90dGxlZCwge2NhbmNlbH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQXN5bmNUYXNrc1F1ZXVlKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gW107XHJcbiAgICAgICAgbGV0IGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJ1blRhc2tzKCkge1xyXG4gICAgICAgICAgICBsZXQgdGFzaztcclxuICAgICAgICAgICAgd2hpbGUgKCh0YXNrID0gdGFza3Muc2hpZnQoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRhc2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gYWRkKHRhc2spIHtcclxuICAgICAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgaWYgKCFmcmFtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1blRhc2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjYW5jZWwoKSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2FkZCwgY2FuY2VsfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGF5VG9rZW5zID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lT25jZSh0b2tlbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoZGVsYXlUb2tlbnMuaGFzKHRva2VuKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5VG9rZW5zLmFkZCh0b2tlbik7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgZGVsYXlUb2tlbnMuZGVsZXRlKHRva2VuKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoZXhpZnkobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChudW1iZXIgPCAxNiA/IFwiMFwiIDogXCJcIikgKyBudW1iZXIudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVVSUQoKSB7XHJcbiAgICAgICAgaWYgKFwicmFuZG9tVVVJRFwiIGluIGNyeXB0bykge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDAsIDgpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDksIDEzKSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygxNCwgMTgpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDE5LCAyMykgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMjQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcImdldFJhbmRvbVZhbHVlc1wiIGluIGNyeXB0bykge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDE2KSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh4KSA9PiBoZXhpZnkoeCkpXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKiogNTUpLnRvU3RyaW5nKDM2KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgbGV0IGRvY3VtZW50SXNWaXNpYmxlXyA9ICFkb2N1bWVudC5oaWRkZW47XHJcbiAgICBjb25zdCBsaXN0ZW5lck9wdGlvbnMgPSB7XHJcbiAgICAgICAgY2FwdHVyZTogdHJ1ZSxcclxuICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JEb2N1bWVudFZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcInBhZ2VzaG93XCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImZvY3VzXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eWNoYW5nZVwiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJwYWdlc2hvd1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJmb2N1c1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldERvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYWxyZWFkeVdhdGNoaW5nID0gQm9vbGVhbihkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50SXNWaXNpYmxlXyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghYWxyZWFkeVdhdGNoaW5nKSB7XHJcbiAgICAgICAgICAgIHdhdGNoRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZG9jdW1lbnRJc1Zpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50SXNWaXNpYmxlXztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdXJhdGlvbih0aW1lKSB7XHJcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcclxuICAgICAgICBpZiAodGltZS5zZWNvbmRzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUuc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lLm1pbnV0ZXMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5taW51dGVzICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZS5ob3Vycykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLmhvdXJzICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lLmRheXMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5kYXlzICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ0luZm8oLi4uYXJncykge31cclxuICAgIGZ1bmN0aW9uIGxvZ1dhcm4oLi4uYXJncykge31cclxuICAgIGZ1bmN0aW9uIGxvZ0Fzc2VydCguLi5hcmdzKSB7fVxyXG4gICAgZnVuY3Rpb24gQVNTRVJUKGRlc2NyaXB0aW9uLCBjb25kaXRpb24pIHtcclxuICAgICAgICBpZiAoIWNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICBsb2dBc3NlcnQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcclxuICAgICAgICBub2RlICYmIG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvck5vZGVQb3NpdGlvbihub2RlLCBtb2RlLCBvblJlc3RvcmUgPSBGdW5jdGlvbi5wcm90b3R5cGUpIHtcclxuICAgICAgICBjb25zdCBNQVhfQVRURU1QVFNfQ09VTlQgPSAxMDtcclxuICAgICAgICBjb25zdCBSRVRSWV9USU1FT1VUID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDJ9KTtcclxuICAgICAgICBjb25zdCBBVFRFTVBUU19JTlRFUlZBTCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAxMH0pO1xyXG4gICAgICAgIGxldCBwcmV2U2libGluZyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gd2F0Y2ggZm9yIG5vZGUgcG9zaXRpb246IHBhcmVudCBlbGVtZW50IG5vdCBmb3VuZFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlID09PSBcInByZXYtc2libGluZ1wiICYmICFwcmV2U2libGluZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byB3YXRjaCBmb3Igbm9kZSBwb3NpdGlvbjogdGhlcmUgaXMgbm8gcHJldmlvdXMgc2libGluZ1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICBsZXQgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICBjb25zdCByZXN0b3JlID0gdGhyb3R0bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGVtcHRzID49IE1BWF9BVFRFTVBUU19DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdyAtIHN0YXJ0IDwgQVRURU1QVFNfSU5URVJWQUwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgTm9kZSBwb3NpdGlvbiB3YXRjaGVyIHBhdXNlZDogcmV0cnkgaW4gJHtSRVRSWV9USU1FT1VUfW1zYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNpYmxpbmdcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFJFVFJZX1RJTUVPVVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcImhlYWRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ1dhcm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU2libGluZyBtb3ZlZCwgbW92aW5nIG5vZGUgdG8gdGhlIGhlYWQgZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTaWJsaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZTaWJsaW5nID0gZG9jdW1lbnQuaGVhZC5sYXN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byByZXN0b3JlIG5vZGUgcG9zaXRpb246IHNpYmxpbmcgd2FzIHJlbW92ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNpYmxpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0eWxlIHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2U2libGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJlbnQocHJldlNpYmxpbmcucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiaGVhZFwiICYmICFwYXJlbnQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IGRvY3VtZW50LmhlYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9nV2FybihcIlJlc3RvcmluZyBub2RlIHBvc2l0aW9uXCIsIG5vZGUsIHByZXZTaWJsaW5nLCBwYXJlbnQpO1xyXG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgIHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLmlzQ29ubmVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwcmV2U2libGluZy5uZXh0U2libGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIDogcGFyZW50LmZpcnN0Q2hpbGRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICAgICAgb25SZXN0b3JlICYmIG9uUmVzdG9yZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAobW9kZSA9PT0gXCJoZWFkXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAobm9kZS5wYXJlbnROb2RlICE9PSBwYXJlbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW5vZGUucGFyZW50Tm9kZS5pc0Nvbm5lY3RlZCkpIHx8XHJcbiAgICAgICAgICAgICAgICAobW9kZSA9PT0gXCJwcmV2LXNpYmxpbmdcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHJldmlvdXNTaWJsaW5nICE9PSBwcmV2U2libGluZylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBydW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzdG9wID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZXN0b3JlLmNhbmNlbCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc2tpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVBhcmVudCA9IChwYXJlbnROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBydW4oKTtcclxuICAgICAgICByZXR1cm4ge3J1biwgc3RvcCwgc2tpcH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlU2hhZG93SG9zdHMocm9vdCwgaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcclxuICAgICAgICAgICAgcm9vdCxcclxuICAgICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY2VwdE5vZGUobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNoYWRvd1Jvb3QgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gcm9vdC5zaGFkb3dSb290ID8gd2Fsa2VyLmN1cnJlbnROb2RlIDogd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgICAgICAgICAgIG5vZGUgIT0gbnVsbDtcclxuICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInN1cmZpbmdrZXlzX2hpbnRzX2hvc3RcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdG9yKG5vZGUpO1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZS5zaGFkb3dSb290LCBpdGVyYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGlzRE9NUmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gc2V0SXNET01SZWFkeShuZXdGdW5jKSB7XHJcbiAgICAgICAgaXNET01SZWFkeSA9IG5ld0Z1bmM7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFkeVN0YXRlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gYWRkRE9NUmVhZHlMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIGlzRE9NUmVhZHkoKSA/IGxpc3RlbmVyKCkgOiByZWFkeVN0YXRlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVET01SZWFkeUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNSZWFkeVN0YXRlQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaXNSZWFkeVN0YXRlQ29tcGxldGUoKVxyXG4gICAgICAgICAgICA/IGxpc3RlbmVyKClcclxuICAgICAgICAgICAgOiByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICBjb25zdCBvblJlYWR5U3RhdGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVhZHlTdGF0ZUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWR5c3RhdGVjaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZWFkeVN0YXRlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBvblJlYWR5U3RhdGVDaGFuZ2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgSFVHRV9NVVRBVElPTlNfQ09VTlQgPSAxMDAwO1xyXG4gICAgZnVuY3Rpb24gaXNIdWdlTXV0YXRpb24obXV0YXRpb25zKSB7XHJcbiAgICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPiBIVUdFX01VVEFUSU9OU19DT1VOVCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFkZGVkTm9kZXNDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWRkZWROb2Rlc0NvdW50ICs9IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGFkZGVkTm9kZXNDb3VudCA+IEhVR0VfTVVUQVRJT05TX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50c1RyZWVPcGVyYXRpb25zKG11dGF0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBjb25zdCBkZWxldGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgY29uc3QgbW92ZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG0pID0+IHtcclxuICAgICAgICAgICAgZm9yRWFjaChtLmFkZGVkTm9kZXMsIChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3JFYWNoKG0ucmVtb3ZlZE5vZGVzLCAobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMuYWRkKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMuZGVsZXRlKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkdXBsaWNhdGVBZGRpdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBkdXBsaWNhdGVEZWxldGlvbnMgPSBbXTtcclxuICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWRkaXRpb25zLmhhcyhub2RlLnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVBZGRpdGlvbnMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGlvbnMuaGFzKG5vZGUucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZHVwbGljYXRlQWRkaXRpb25zLmZvckVhY2goKG5vZGUpID0+IGFkZGl0aW9ucy5kZWxldGUobm9kZSkpO1xyXG4gICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5mb3JFYWNoKChub2RlKSA9PiBkZWxldGlvbnMuZGVsZXRlKG5vZGUpKTtcclxuICAgICAgICByZXR1cm4ge2FkZGl0aW9ucywgbW92ZXMsIGRlbGV0aW9uc307XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3Qgb3B0aW1pemVkVHJlZUNhbGxiYWNrcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPcHRpbWl6ZWRUcmVlT2JzZXJ2ZXIocm9vdCwgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgbGV0IG9ic2VydmVyO1xyXG4gICAgICAgIGxldCBvYnNlcnZlckNhbGxiYWNrcztcclxuICAgICAgICBsZXQgZG9tUmVhZHlMaXN0ZW5lcjtcclxuICAgICAgICBpZiAob3B0aW1pemVkVHJlZU9ic2VydmVycy5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzLmdldChyb290KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MgPSBvcHRpbWl6ZWRUcmVlQ2FsbGJhY2tzLmdldChvYnNlcnZlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGhhZEh1Z2VNdXRhdGlvbnNCZWZvcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSHVnZU11dGF0aW9uKG11dGF0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhZEh1Z2VNdXRhdGlvbnNCZWZvcmUgfHwgaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmZvckVhY2goKHtvbkh1Z2VNdXRhdGlvbnN9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zKHJvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3Vic2NyaWJlZEZvclJlYWR5U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUmVhZHlMaXN0ZW5lciA9ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKCh7b25IdWdlTXV0YXRpb25zfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkh1Z2VNdXRhdGlvbnMocm9vdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZERPTVJlYWR5TGlzdGVuZXIoZG9tUmVhZHlMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFkSHVnZU11dGF0aW9uc0JlZm9yZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzT3BlcmF0aW9ucyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnRzVHJlZU9wZXJhdGlvbnMobXV0YXRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKCh7b25NaW5vck11dGF0aW9uc30pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnMocm9vdCwgZWxlbWVudHNPcGVyYXRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgICAgICAgICAgb3B0aW1pemVkVHJlZU9ic2VydmVycy5zZXQocm9vdCwgb2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5zZXQob2JzZXJ2ZXIsIG9ic2VydmVyQ2FsbGJhY2tzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuYWRkKGNhbGxiYWNrcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbVJlYWR5TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVET01SZWFkeUxpc3RlbmVyKGRvbVJlYWR5TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyQ2FsbGJhY2tzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXplZFRyZWVPYnNlcnZlcnMuZGVsZXRlKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlQ1NTUnVsZXMocnVsZXMsIGl0ZXJhdGUsIG9uSW1wb3J0RXJyb3IpIHtcclxuICAgICAgICBmb3JFYWNoKHJ1bGVzLCAocnVsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHlsZVJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGUocnVsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNJbXBvcnRSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZVNoZWV0LmNzc1J1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkltcG9ydEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSW1wb3J0RXJyb3I/LigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTWVkaWFSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20ocnVsZS5tZWRpYSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NjcmVlbk9yQWxsT3JRdWVyeSA9IG1lZGlhLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgKG0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc3RhcnRzV2l0aChcInNjcmVlblwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnN0YXJ0c1dpdGgoXCJhbGxcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5zdGFydHNXaXRoKFwiKFwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJpbnRPclNwZWVjaCA9IG1lZGlhLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgKG0pID0+IG0uc3RhcnRzV2l0aChcInByaW50XCIpIHx8IG0uc3RhcnRzV2l0aChcInNwZWVjaFwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NjcmVlbk9yQWxsT3JRdWVyeSB8fCAhaXNQcmludE9yU3BlZWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGUuY3NzUnVsZXMsIGl0ZXJhdGUsIG9uSW1wb3J0RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzU3VwcG9ydHNSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ1NTLnN1cHBvcnRzKHJ1bGUuY29uZGl0aW9uVGV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZS5jc3NSdWxlcywgaXRlcmF0ZSwgb25JbXBvcnRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNMYXllclJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlLmNzc1J1bGVzLCBpdGVyYXRlLCBvbkltcG9ydEVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvZ1dhcm4oYENTU1J1bGUgdHlwZSBub3Qgc3VwcG9ydGVkYCwgcnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNob3J0aGFuZFZhckRlcGVuZGFudFByb3BlcnRpZXMgPSBbXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJib3JkZXJcIixcclxuICAgICAgICBcImJvcmRlci1jb2xvclwiLFxyXG4gICAgICAgIFwiYm9yZGVyLWJvdHRvbVwiLFxyXG4gICAgICAgIFwiYm9yZGVyLWxlZnRcIixcclxuICAgICAgICBcImJvcmRlci1yaWdodFwiLFxyXG4gICAgICAgIFwiYm9yZGVyLXRvcFwiLFxyXG4gICAgICAgIFwib3V0bGluZVwiLFxyXG4gICAgICAgIFwib3V0bGluZS1jb2xvclwiXHJcbiAgICBdO1xyXG4gICAgY29uc3Qgc2hvcnRoYW5kVmFyRGVwUHJvcFJlZ2V4cHMgPSBpc1NhZmFyaVxyXG4gICAgICAgID8gc2hvcnRoYW5kVmFyRGVwZW5kYW50UHJvcGVydGllcy5tYXAoKHByb3ApID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGAke3Byb3B9OlxcXFxzKiguKj8pXFxcXHMqO2ApO1xyXG4gICAgICAgICAgICAgIHJldHVybiBbcHJvcCwgcmVnZXhwXTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgZnVuY3Rpb24gaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhzdHlsZSwgaXRlcmF0ZSkge1xyXG4gICAgICAgIGZvckVhY2goc3R5bGUsIChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdGUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dDtcclxuICAgICAgICBpZiAoY3NzVGV4dC5pbmNsdWRlcyhcInZhcihcIikpIHtcclxuICAgICAgICAgICAgaWYgKGlzU2FmYXJpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGhhbmRWYXJEZXBQcm9wUmVnZXhwcy5mb3JFYWNoKChbcHJvcCwgcmVnZXhwXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gY3NzVGV4dC5tYXRjaChyZWdleHApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBtYXRjaFsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUocHJvcCwgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3J0aGFuZFZhckRlcGVuZGFudFByb3BlcnRpZXMuZm9yRWFjaCgocHJvcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWwuaW5jbHVkZXMoXCJ2YXIoXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUocHJvcCwgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGNzc1RleHQuaW5jbHVkZXMoXCJiYWNrZ3JvdW5kLWNvbG9yOiA7XCIpICYmXHJcbiAgICAgICAgICAgICFzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBoYW5kbGVFbXB0eVNob3J0aGFuZChcImJhY2tncm91bmRcIiwgc3R5bGUsIGl0ZXJhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGNzc1RleHQuaW5jbHVkZXMoXCJib3JkZXItXCIpICYmXHJcbiAgICAgICAgICAgIGNzc1RleHQuaW5jbHVkZXMoXCItY29sb3I6IDtcIikgJiZcclxuICAgICAgICAgICAgIXN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJib3JkZXJcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaGFuZGxlRW1wdHlTaG9ydGhhbmQoXCJib3JkZXJcIiwgc3R5bGUsIGl0ZXJhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUVtcHR5U2hvcnRoYW5kKHNob3J0aGFuZCwgc3R5bGUsIGl0ZXJhdGUpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRSdWxlID0gc3R5bGUucGFyZW50UnVsZTtcclxuICAgICAgICBpZiAoaXNTdHlsZVJ1bGUocGFyZW50UnVsZSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlQ1NTVGV4dCA9XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRSdWxlLnBhcmVudFN0eWxlU2hlZXQ/Lm93bmVyTm9kZT8udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGlmIChzb3VyY2VDU1NUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXNjYXBlZFNlbGVjdG9yID0gZXNjYXBlUmVnRXhwU3BlY2lhbENoYXJzKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFJ1bGUuc2VsZWN0b3JUZXh0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlZFNlbGVjdG9yID0gZXNjYXBlZFNlbGVjdG9yLnJlcGxhY2VBbGwoL1xccysvZywgXCJcXFxccypcIik7XHJcbiAgICAgICAgICAgICAgICBlc2NhcGVkU2VsZWN0b3IgPSBlc2NhcGVkU2VsZWN0b3IucmVwbGFjZUFsbCgvOjovZywgXCI6Oj9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAgICAgICAgIGAke2VzY2FwZWRTZWxlY3Rvcn1cXFxccyp7W159XSoke3Nob3J0aGFuZH06XFxcXHMqKFteO31dKylgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBzb3VyY2VDU1NUZXh0Lm1hdGNoKHJlZ2V4cCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKHNob3J0aGFuZCwgbWF0Y2hbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3J0aGFuZCA9PT0gXCJiYWNrZ3JvdW5kXCIpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiI2ZmZmZmZlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNzc1VSTFJlZ2V4ID0gL3VybFxcKCgoJy4qPycpfChcIi4qP1wiKXwoW15cXCldKj8pKVxcKS9nO1xyXG4gICAgY29uc3QgY3NzSW1wb3J0UmVnZXggPVxyXG4gICAgICAgIC9AaW1wb3J0XFxzKih1cmxcXCgpPygoJy4rPycpfChcIi4rP1wiKXwoW15cXCldKj8pKVxcKT8gPyhzY3JlZW4pPzs/L2dpO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTVVJMVmFsdWUoY3NzVVJMKSB7XHJcbiAgICAgICAgcmV0dXJuIGNzc1VSTFxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxuXFxyXFxcXF0rL2csIFwiXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9edXJsXFwoKC4qKVxcKSQvLCBcIiQxXCIpXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoL15cIiguKilcIiQvLCBcIiQxXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eJyguKiknJC8sIFwiJDFcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyg/OlxcXFwoLikpL2csIFwiJDFcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NCYXNlQmF0aCh1cmwpIHtcclxuICAgICAgICBjb25zdCBjc3NVUkwgPSBwYXJzZVVSTCh1cmwpO1xyXG4gICAgICAgIHJldHVybiBgJHtjc3NVUkwub3JpZ2lufSR7Y3NzVVJMLnBhdGhuYW1lLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoLyhcXC8pKFteXFwvXSspJC9pLCBcIiQxXCIpfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTUmVsYXRpdmVVUkxzV2l0aEFic29sdXRlKCRjc3MsIGNzc0Jhc2VQYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuICRjc3MucmVwbGFjZShjc3NVUkxSZWdleCwgKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBnZXRDU1NVUkxWYWx1ZShtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhYnNvbHV0ZVVSTCA9IGdldEFic29sdXRlVVJMKGNzc0Jhc2VQYXRoLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXNjYXBlZFVSTCA9IGFic29sdXRlVVJMLnJlcGxhY2VBbGwoXCInXCIsIFwiXFxcXCdcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHVybCgnJHtlc2NhcGVkVVJMfScpYDtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dXYXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTm90IGFibGUgdG8gcmVwbGFjZSByZWxhdGl2ZSBVUkwgd2l0aCBBYnNvbHV0ZSBVUkwsIHNraXBwaW5nXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZvbnRGYWNlUmVnZXggPSAvQGZvbnQtZmFjZVxccyp7W159XSp9L2c7XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTRm9udEZhY2UoJGNzcykge1xyXG4gICAgICAgIHJldHVybiAkY3NzLnJlcGxhY2UoZm9udEZhY2VSZWdleCwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZVJ1bGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IGltcG9ydFJ1bGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IG1lZGlhUnVsZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3Qgc3VwcG9ydHNSdWxlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBsYXllclJ1bGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGlzU3R5bGVSdWxlKHJ1bGUpIHtcclxuICAgICAgICBpZiAoIXJ1bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3R5bGVSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChydWxlLnNlbGVjdG9yVGV4dCkge1xyXG4gICAgICAgICAgICBzdHlsZVJ1bGVzLmFkZChydWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzSW1wb3J0UnVsZShydWxlKSB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0eWxlUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGltcG9ydFJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJ1bGUuaHJlZikge1xyXG4gICAgICAgICAgICBpbXBvcnRSdWxlcy5hZGQocnVsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc01lZGlhUnVsZShydWxlKSB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0eWxlUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lZGlhUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnVsZS5tZWRpYSkge1xyXG4gICAgICAgICAgICBtZWRpYVJ1bGVzLmFkZChydWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzU3VwcG9ydHNSdWxlKHJ1bGUpIHtcclxuICAgICAgICBpZiAoIXJ1bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3R5bGVSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VwcG9ydHNSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChydWxlIGluc3RhbmNlb2YgQ1NTU3VwcG9ydHNSdWxlKSB7XHJcbiAgICAgICAgICAgIHN1cHBvcnRzUnVsZXMuYWRkKHJ1bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNMYXllclJ1bGUocnVsZSkge1xyXG4gICAgICAgIGlmICghcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHlsZVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYXllclJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTGF5ZXJSdWxlU3VwcG9ydGVkICYmIHJ1bGUgaW5zdGFuY2VvZiBDU1NMYXllckJsb2NrUnVsZSkge1xyXG4gICAgICAgICAgICBsYXllclJ1bGVzLmFkZChydWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGVldHNTY29wZXMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgZnVuY3Rpb24gZGVmaW5lU2hlZXRTY29wZShzaGVldCwgbm9kZSkge1xyXG4gICAgICAgIHNoZWV0c1Njb3Blcy5zZXQoc2hlZXQsIG5vZGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hlZXRTY29wZShzaGVldCkge1xyXG4gICAgICAgIGlmICghc2hlZXQub3duZXJOb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hlZXRzU2NvcGVzLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNoZWV0c1Njb3Blcy5nZXQoc2hlZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbm9kZSA9IHNoZWV0Lm93bmVyTm9kZTtcclxuICAgICAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgbm9kZSBpbnN0YW5jZW9mIERvY3VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkZWZpbmVTaGVldFNjb3BlKHNoZWV0LCBub2RlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50TGVuZ3RoID0gXCJncmFkaWVudFwiLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbmljR3JhZGllbnQgPSBcImNvbmljLVwiO1xyXG4gICAgY29uc3QgY29uaWNHcmFkaWVudExlbmd0aCA9IGNvbmljR3JhZGllbnQubGVuZ3RoO1xyXG4gICAgY29uc3QgcmFkaWFsR3JhZGllbnQgPSBcInJhZGlhbC1cIjtcclxuICAgIGNvbnN0IGxpbmVhckdyYWRpZW50ID0gXCJsaW5lYXItXCI7XHJcbiAgICBmdW5jdGlvbiBwYXJzZUdyYWRpZW50KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IGNvbmljR3JhZGllbnQubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICgoaW5kZXggPSB2YWx1ZS5pbmRleE9mKFwiZ3JhZGllbnRcIiwgc3RhcnRJbmRleCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdHlwZUdyYWRpZW50O1xyXG4gICAgICAgICAgICBbbGluZWFyR3JhZGllbnQsIHJhZGlhbEdyYWRpZW50LCBjb25pY0dyYWRpZW50XS5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHBvc3NpYmxlVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZUdyYWRpZW50ID0gdmFsdWUuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlR3JhZGllbnQgPT09IHBvc3NpYmxlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IFwicmVwZWF0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IGByZXBlYXRpbmctJHtwb3NzaWJsZVR5cGV9Z3JhZGllbnRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PT0gXCItd2Via2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IGAtd2Via2l0LSR7cG9zc2libGVUeXBlfWdyYWRpZW50YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IGAke3Bvc3NpYmxlVHlwZX1ncmFkaWVudGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKCF0eXBlR3JhZGllbnQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IGdldFBhcmVudGhlc2VzUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgZ3JhZGllbnRMZW5ndGhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB2YWx1ZS5zdWJzdHJpbmcoc3RhcnQgKyAxLCBlbmQgLSAxKTtcclxuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZCArIDEgKyBjb25pY0dyYWRpZW50TGVuZ3RoO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQsXHJcbiAgICAgICAgICAgICAgICBtYXRjaCxcclxuICAgICAgICAgICAgICAgIG9mZnNldDogdHlwZUdyYWRpZW50Lmxlbmd0aCArIDIsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXggLSB0eXBlR3JhZGllbnQubGVuZ3RoICsgZ3JhZGllbnRMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBoYXNDb21tYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXS5oYXNDb21tYSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNUT1JBR0VfS0VZX0lNQUdFX0RFVEFJTFNfTElTVCA9IFwiX19kYXJrcmVhZGVyX19pbWFnZURldGFpbHNfdjJfbGlzdFwiO1xyXG4gICAgY29uc3QgU1RPUkFHRV9LRVlfSU1BR0VfREVUQUlMU19QUkVGSVggPSBcIl9fZGFya3JlYWRlcl9faW1hZ2VEZXRhaWxzX3YyX1wiO1xyXG4gICAgY29uc3QgU1RPUkFHRV9LRVlfQ1NTX0ZFVENIX1BSRUZJWCA9IFwiX19kYXJrcmVhZGVyX19jc3NGZXRjaF9cIjtcclxuICAgIGxldCBpbWFnZUNhY2hlVGltZW91dCA9IDA7XHJcbiAgICBjb25zdCBpbWFnZURldGFpbHNDYWNoZVF1ZXVlID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgY2FjaGVkSW1hZ2VVcmxzID0gW107XHJcbiAgICBmdW5jdGlvbiB3cml0ZUltYWdlRGV0YWlsc1F1ZXVlKCkge1xyXG4gICAgICAgIGltYWdlRGV0YWlsc0NhY2hlUXVldWUuZm9yRWFjaCgoZGV0YWlscywgdXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgJiYgdXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoZGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7U1RPUkFHRV9LRVlfSU1BR0VfREVUQUlMU19QUkVGSVh9JHt1cmx9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkSW1hZ2VVcmxzLnB1c2godXJsKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltYWdlRGV0YWlsc0NhY2hlUXVldWUuY2xlYXIoKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICBTVE9SQUdFX0tFWV9JTUFHRV9ERVRBSUxTX0xJU1QsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNhY2hlZEltYWdlVXJscylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JpdGVJbWFnZURldGFpbHNDYWNoZSh1cmwsIGltYWdlRGV0YWlscykge1xyXG4gICAgICAgIGlmICghdXJsIHx8ICF1cmwuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2VEZXRhaWxzQ2FjaGVRdWV1ZS5zZXQodXJsLCBpbWFnZURldGFpbHMpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dChpbWFnZUNhY2hlVGltZW91dCk7XHJcbiAgICAgICAgaW1hZ2VDYWNoZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHdyaXRlSW1hZ2VEZXRhaWxzUXVldWUsIDEwMDApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVhZEltYWdlRGV0YWlsc0NhY2hlKHRhcmdldE1hcCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25MaXN0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICAgICAgICAgIFNUT1JBR0VfS0VZX0lNQUdFX0RFVEFJTFNfTElTVFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIWpzb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IEpTT04ucGFyc2UoanNvbkxpc3QpO1xyXG4gICAgICAgICAgICBsaXN0LmZvckVhY2goKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7U1RPUkFHRV9LRVlfSU1BR0VfREVUQUlMU19QUkVGSVh9JHt1cmx9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWFwLnNldCh1cmwsIGRldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cml0ZUNTU0ZldGNoQ2FjaGUodXJsLCBjc3NUZXh0KSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7U1RPUkFHRV9LRVlfQ1NTX0ZFVENIX1BSRUZJWH0ke3VybH1gO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBjc3NUZXh0KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWFkQ1NTRmV0Y2hDYWNoZSh1cmwpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBgJHtTVE9SQUdFX0tFWV9DU1NfRkVUQ0hfUFJFRklYfSR7dXJsfWA7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KSA/PyBudWxsO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b1NWR01hdHJpeChtYXRyaXgpIHtcclxuICAgICAgICByZXR1cm4gbWF0cml4XHJcbiAgICAgICAgICAgIC5zbGljZSgwLCA0KVxyXG4gICAgICAgICAgICAubWFwKChtKSA9PiBtLm1hcCgobSkgPT4gbS50b0ZpeGVkKDMpKS5qb2luKFwiIFwiKSlcclxuICAgICAgICAgICAgLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U1ZHRmlsdGVyTWF0cml4VmFsdWUoY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvU1ZHTWF0cml4KGNyZWF0ZUZpbHRlck1hdHJpeChjb25maWcpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBNQVhfRlJBTUVfRFVSQVRJT04gPSAxMDAwIC8gNjA7XHJcbiAgICBjbGFzcyBBc3luY1F1ZXVlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlRnJhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY2hlZHVsZUZyYW1lKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcklkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50aW1lcklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2I7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGNiID0gdGhpcy5xdWV1ZS5zaGlmdCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+PSBNQVhfRlJBTUVfRFVSQVRJT04pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZUZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc29sdmVycyQxID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgcmVqZWN0b3JzID0gbmV3IE1hcCgpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gYmdGZXRjaChyZXF1ZXN0KSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5EYXJrUmVhZGVyPy5QbHVnaW5zPy5mZXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LkRhcmtSZWFkZXIuUGx1Z2lucy5mZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBnZW5lcmF0ZVVJRCgpO1xyXG4gICAgICAgICAgICByZXNvbHZlcnMkMS5zZXQoaWQsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICByZWplY3RvcnMuc2V0KGlkLCByZWplY3QpO1xyXG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZUNTdG9CRy5GRVRDSCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoe3R5cGUsIGRhdGEsIGVycm9yLCBpZH0pID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gTWVzc2FnZVR5cGVCR3RvQ1MuRkVUQ0hfUkVTUE9OU0UpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZSA9IHJlc29sdmVycyQxLmdldChpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlamVjdCA9IHJlamVjdG9ycy5nZXQoaWQpO1xyXG4gICAgICAgICAgICByZXNvbHZlcnMkMS5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICByZWplY3RvcnMuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGltYWdlTWFuYWdlciA9IG5ldyBBc3luY1F1ZXVlKCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZURldGFpbHModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFVUkwgPSB1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyB1cmxcclxuICAgICAgICAgICAgICAgICAgICA6IGF3YWl0IGdldERhdGFVUkwodXJsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeUNvbnZlcnREYXRhVVJMVG9CbG9iU3luYyhkYXRhVVJMKSA/P1xyXG4gICAgICAgICAgICAgICAgICAgIChhd2FpdCBsb2FkQXNCbG9iKHVybCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFVUkwuc3RhcnRzV2l0aChcImRhdGE6aW1hZ2Uvc3ZnK3htbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0gYXdhaXQgbG9hZEltYWdlKGRhdGFVUkwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhd2FpdCB0cnlDcmVhdGVJbWFnZUJpdG1hcChibG9iKSkgPz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKGF3YWl0IGxvYWRJbWFnZShkYXRhVVJMKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZU1hbmFnZXIuYWRkVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5hbHlzaXMgPSBhbmFseXplSW1hZ2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTDogYW5hbHlzaXMuaXNMYXJnZSA/IFwiXCIgOiBkYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5hbmFseXNpc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhVVJMKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IG5ldyBVUkwodXJsKTtcclxuICAgICAgICBpZiAocGFyc2VkVVJMLm9yaWdpbiA9PT0gbG9jYXRpb24ub3JpZ2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBsb2FkQXNEYXRhVVJMKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBiZ0ZldGNoKHt1cmwsIHJlc3BvbnNlVHlwZTogXCJkYXRhLXVybFwifSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiB0cnlDcmVhdGVJbWFnZUJpdG1hcChibG9iKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBsb2dXYXJuKFxyXG4gICAgICAgICAgICAgICAgYFVuYWJsZSB0byBjcmVhdGUgaW1hZ2UgYml0bWFwIGZvciB0eXBlICR7YmxvYi50eXBlfTogJHtTdHJpbmcoZXJyKX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IElOQ09NUExFVEVfRE9DX0xPQURJTkdfSU1BR0VfTElNSVQgPSAyNTY7XHJcbiAgICBsZXQgbG9hZGluZ0ltYWdlc0NvdW50ID0gMDtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgaW1hZ2UgJHt1cmx9YCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICsrbG9hZGluZ0ltYWdlc0NvdW50IDw9IElOQ09NUExFVEVfRE9DX0xPQURJTkdfSU1BR0VfTElNSVQgfHxcclxuICAgICAgICAgICAgICAgIGlzUmVhZHlTdGF0ZUNvbXBsZXRlKClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcigoKSA9PiAoaW1hZ2Uuc3JjID0gdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IE1BWF9BTkFMWVNJU19QSVhFTFNfQ09VTlQgPSAzMiAqIDMyO1xyXG4gICAgbGV0IGNhbnZhcztcclxuICAgIGxldCBjb250ZXh0O1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIGNvbnN0IG1heFdpZHRoID0gTUFYX0FOQUxZU0lTX1BJWEVMU19DT1VOVDtcclxuICAgICAgICBjb25zdCBtYXhIZWlnaHQgPSBNQVhfQU5BTFlTSVNfUElYRUxTX0NPVU5UO1xyXG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gbWF4V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG1heEhlaWdodDtcclxuICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7d2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlfSk7XHJcbiAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNhbnZhcygpIHtcclxuICAgICAgICBjYW52YXMgPSBudWxsO1xyXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgTEFSR0VfSU1BR0VfUElYRUxTX0NPVU5UID0gNTEyICogNTEyO1xyXG4gICAgZnVuY3Rpb24gYW5hbHl6ZUltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdztcclxuICAgICAgICBsZXQgc2g7XHJcbiAgICAgICAgaWYgKGltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBzdyA9IGltYWdlLm5hdHVyYWxXaWR0aDtcclxuICAgICAgICAgICAgc2ggPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3ID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHNoID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3cgPT09IDAgfHwgc2ggPT09IDApIHtcclxuICAgICAgICAgICAgbG9nV2FybihcIkltYWdlIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNEYXJrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTGlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFuc3BhcmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xhcmdlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0xhcmdlID0gc3cgKiBzaCA+IExBUkdFX0lNQUdFX1BJWEVMU19DT1VOVDtcclxuICAgICAgICBjb25zdCBzb3VyY2VQaXhlbHNDb3VudCA9IHN3ICogc2g7XHJcbiAgICAgICAgY29uc3QgayA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICBNYXRoLnNxcnQoTUFYX0FOQUxZU0lTX1BJWEVMU19DT1VOVCAvIHNvdXJjZVBpeGVsc0NvdW50KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLmNlaWwoc3cgKiBrKTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoc2ggKiBrKTtcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgc3csIHNoLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBkID0gaW1hZ2VEYXRhLmRhdGE7XHJcbiAgICAgICAgY29uc3QgVFJBTlNQQVJFTlRfQUxQSEFfVEhSRVNIT0xEID0gMC4wNTtcclxuICAgICAgICBjb25zdCBEQVJLX0xJR0hUTkVTU19USFJFU0hPTEQgPSAwLjQ7XHJcbiAgICAgICAgY29uc3QgTElHSFRfTElHSFRORVNTX1RIUkVTSE9MRCA9IDAuNztcclxuICAgICAgICBsZXQgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGRhcmtQaXhlbHNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGxpZ2h0UGl4ZWxzQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpLCB4LCB5O1xyXG4gICAgICAgIGxldCByLCBnLCBiLCBhO1xyXG4gICAgICAgIGxldCBsO1xyXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaSA9IDQgKiAoeSAqIHdpZHRoICsgeCk7XHJcbiAgICAgICAgICAgICAgICByID0gZFtpICsgMF07XHJcbiAgICAgICAgICAgICAgICBnID0gZFtpICsgMV07XHJcbiAgICAgICAgICAgICAgICBiID0gZFtpICsgMl07XHJcbiAgICAgICAgICAgICAgICBhID0gZFtpICsgM107XHJcbiAgICAgICAgICAgICAgICBpZiAoYSAvIDI1NSA8IFRSQU5TUEFSRU5UX0FMUEhBX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50UGl4ZWxzQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbCA9IGdldFNSR0JMaWdodG5lc3MociwgZywgYik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwgPCBEQVJLX0xJR0hUTkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFya1BpeGVsc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsID4gTElHSFRfTElHSFRORVNTX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFBpeGVsc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvdGFsUGl4ZWxzQ291bnQgPSB3aWR0aCAqIGhlaWdodDtcclxuICAgICAgICBjb25zdCBvcGFxdWVQaXhlbHNDb3VudCA9IHRvdGFsUGl4ZWxzQ291bnQgLSB0cmFuc3BhcmVudFBpeGVsc0NvdW50O1xyXG4gICAgICAgIGNvbnN0IERBUktfSU1BR0VfVEhSRVNIT0xEID0gMC43O1xyXG4gICAgICAgIGNvbnN0IExJR0hUX0lNQUdFX1RIUkVTSE9MRCA9IDAuNztcclxuICAgICAgICBjb25zdCBUUkFOU1BBUkVOVF9JTUFHRV9USFJFU0hPTEQgPSAwLjE7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNEYXJrOiBkYXJrUGl4ZWxzQ291bnQgLyBvcGFxdWVQaXhlbHNDb3VudCA+PSBEQVJLX0lNQUdFX1RIUkVTSE9MRCxcclxuICAgICAgICAgICAgaXNMaWdodDpcclxuICAgICAgICAgICAgICAgIGxpZ2h0UGl4ZWxzQ291bnQgLyBvcGFxdWVQaXhlbHNDb3VudCA+PSBMSUdIVF9JTUFHRV9USFJFU0hPTEQsXHJcbiAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQ6XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFBpeGVsc0NvdW50IC8gdG90YWxQaXhlbHNDb3VudCA+PVxyXG4gICAgICAgICAgICAgICAgVFJBTlNQQVJFTlRfSU1BR0VfVEhSRVNIT0xELFxyXG4gICAgICAgICAgICBpc0xhcmdlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGxldCBpc0Jsb2JVUkxTdXBwb3J0ZWQgPSBudWxsO1xyXG4gICAgbGV0IGNhblVzZVByb3h5ID0gZmFsc2U7XHJcbiAgICBsZXQgYmxvYlVSTENoZWNrUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBibG9iVVJMQ2hlY2tBd2FpdGVycyA9IFtdO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIixcclxuICAgICAgICAoKSA9PiAoY2FuVXNlUHJveHkgPSB0cnVlKSxcclxuICAgICAgICB7b25jZTogdHJ1ZX1cclxuICAgICk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0QmxvYlVSTENoZWNrKCkge1xyXG4gICAgICAgIGlmICghY2FuVXNlUHJveHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmxvYlVSTENoZWNrUmVxdWVzdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGJsb2JVUkxDaGVja0F3YWl0ZXJzLnB1c2gocmVzb2x2ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmxvYlVSTENoZWNrUmVxdWVzdGVkID0gdHJ1ZTtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Jsb2JVUkxDaGVja1Jlc3BvbnNlXCIsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQmxvYlVSTFN1cHBvcnRlZCA9IGUuZGV0YWlsLmJsb2JVUkxBbGxvd2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9iVVJMQ2hlY2tBd2FpdGVycy5mb3JFYWNoKChyKSA9PiByKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2JVUkxDaGVja0F3YWl0ZXJzLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7b25jZTogdHJ1ZX1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fYmxvYlVSTENoZWNrUmVxdWVzdFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNCbG9iVVJMQ2hlY2tSZXN1bHRSZWFkeSgpIHtcclxuICAgICAgICByZXR1cm4gaXNCbG9iVVJMU3VwcG9ydGVkICE9IG51bGwgfHwgIWNhblVzZVByb3h5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25DU1BFcnJvcihlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmJsb2NrZWRVUkkgPT09IFwiYmxvYlwiKSB7XHJcbiAgICAgICAgICAgIGlzQmxvYlVSTFN1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VjdXJpdHlwb2xpY3l2aW9sYXRpb25cIiwgb25DU1BFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlY3VyaXR5cG9saWN5dmlvbGF0aW9uXCIsIG9uQ1NQRXJyb3IpO1xyXG4gICAgY29uc3Qgb2JqZWN0VVJMcyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGdldEZpbHRlcmVkSW1hZ2VVUkwoe2RhdGFVUkwsIHdpZHRoLCBoZWlnaHR9LCB0aGVtZSkge1xyXG4gICAgICAgIGlmIChkYXRhVVJMLnN0YXJ0c1dpdGgoXCJkYXRhOmltYWdlL3N2Zyt4bWxcIikpIHtcclxuICAgICAgICAgICAgZGF0YVVSTCA9IGVzY2FwZVhNTChkYXRhVVJMKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gZ2V0U1ZHRmlsdGVyTWF0cml4VmFsdWUodGhlbWUpO1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IFtcclxuICAgICAgICAgICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIj5gLFxyXG4gICAgICAgICAgICBcIjxkZWZzPlwiLFxyXG4gICAgICAgICAgICAnPGZpbHRlciBpZD1cImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyXCI+JyxcclxuICAgICAgICAgICAgYDxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIke21hdHJpeH1cIiAvPmAsXHJcbiAgICAgICAgICAgIFwiPC9maWx0ZXI+XCIsXHJcbiAgICAgICAgICAgIFwiPC9kZWZzPlwiLFxyXG4gICAgICAgICAgICBgPGltYWdlIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiBmaWx0ZXI9XCJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKVwiIHhsaW5rOmhyZWY9XCIke2RhdGFVUkx9XCIgLz5gLFxyXG4gICAgICAgICAgICBcIjwvc3ZnPlwiXHJcbiAgICAgICAgXS5qb2luKFwiXCIpO1xyXG4gICAgICAgIGlmICghaXNCbG9iVVJMU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2J0b2Eoc3ZnKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHN2Zy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ZnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzW2ldID0gc3ZnLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnl0ZXNdLCB7dHlwZTogXCJpbWFnZS9zdmcreG1sXCJ9KTtcclxuICAgICAgICBjb25zdCBvYmplY3RVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIG9iamVjdFVSTHMuYWRkKG9iamVjdFVSTCk7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdFVSTDtcclxuICAgIH1cclxuICAgIGNvbnN0IHhtbEVzY2FwZUNoYXJzID0ge1xyXG4gICAgICAgIFwiPFwiOiBcIiZsdDtcIixcclxuICAgICAgICBcIj5cIjogXCImZ3Q7XCIsXHJcbiAgICAgICAgXCImXCI6IFwiJmFtcDtcIixcclxuICAgICAgICBcIidcIjogXCImYXBvcztcIixcclxuICAgICAgICAnXCInOiBcIiZxdW90O1wiXHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gZXNjYXBlWE1MKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvWzw+JidcIl0vZywgKGMpID0+IHhtbEVzY2FwZUNoYXJzW2NdID8/IGMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YVVSTEJsb2JVUkxzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gdHJ5Q29udmVydERhdGFVUkxUb0Jsb2JTeW5jKGRhdGFVUkwpIHtcclxuICAgICAgICBjb25zdCBjb2xvbkluZGV4ID0gZGF0YVVSTC5pbmRleE9mKFwiOlwiKTtcclxuICAgICAgICBjb25zdCBzZW1pY29sb25JbmRleCA9IGRhdGFVUkwuaW5kZXhPZihcIjtcIiwgY29sb25JbmRleCArIDEpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1hSW5kZXggPSBkYXRhVVJMLmluZGV4T2YoXCIsXCIsIHNlbWljb2xvbkluZGV4ICsgMSk7XHJcbiAgICAgICAgY29uc3QgZW5jb2RpbmcgPSBkYXRhVVJMXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoc2VtaWNvbG9uSW5kZXggKyAxLCBjb21tYUluZGV4KVxyXG4gICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBtZWRpYVR5cGUgPSBkYXRhVVJMLnN1YnN0cmluZyhjb2xvbkluZGV4ICsgMSwgc2VtaWNvbG9uSW5kZXgpO1xyXG4gICAgICAgIGlmIChlbmNvZGluZyAhPT0gXCJiYXNlNjRcIiB8fCAhbWVkaWFUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gYXRvYihkYXRhVVJMLnN1YnN0cmluZyhjb21tYUluZGV4ICsgMSkpO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoY2hhcmFjdGVycy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBieXRlc1tpXSA9IGNoYXJhY3RlcnMuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtieXRlc10sIHt0eXBlOiBtZWRpYVR5cGV9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyeUNvbnZlcnREYXRhVVJMVG9CbG9iVVJMKGRhdGFVUkwpIHtcclxuICAgICAgICBpZiAoIWlzQmxvYlVSTFN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IGdldEhhc2hDb2RlKGRhdGFVUkwpO1xyXG4gICAgICAgIGxldCBibG9iVVJMID0gZGF0YVVSTEJsb2JVUkxzLmdldChoYXNoKTtcclxuICAgICAgICBpZiAoYmxvYlVSTCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYmxvYlVSTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJsb2IgPSB0cnlDb252ZXJ0RGF0YVVSTFRvQmxvYlN5bmMoZGF0YVVSTCk7XHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVSTCk7XHJcbiAgICAgICAgICAgIGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJsb2JVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIGRhdGFVUkxCbG9iVVJMcy5zZXQoaGFzaCwgYmxvYlVSTCk7XHJcbiAgICAgICAgcmV0dXJuIGJsb2JVUkw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkltYWdlUHJvY2Vzc2luZ0NhY2hlKCkge1xyXG4gICAgICAgIGltYWdlTWFuYWdlciAmJiBpbWFnZU1hbmFnZXIuc3RvcCgpO1xyXG4gICAgICAgIHJlbW92ZUNhbnZhcygpO1xyXG4gICAgICAgIG9iamVjdFVSTHMuZm9yRWFjaCgodSkgPT4gVVJMLnJldm9rZU9iamVjdFVSTCh1KSk7XHJcbiAgICAgICAgb2JqZWN0VVJMcy5jbGVhcigpO1xyXG4gICAgICAgIGRhdGFVUkxCbG9iVVJMcy5mb3JFYWNoKCh1KSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHUpKTtcclxuICAgICAgICBkYXRhVVJMQmxvYlVSTHMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdmFyaWFibGVzU2hlZXQ7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkQ29sb3JzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJWYXJpYWJsZXNTaGVldChzaGVldCkge1xyXG4gICAgICAgIHZhcmlhYmxlc1NoZWV0ID0gc2hlZXQ7XHJcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXCJiYWNrZ3JvdW5kXCIsIFwidGV4dFwiLCBcImJvcmRlclwiXTtcclxuICAgICAgICByZWdpc3RlcmVkQ29sb3JzLmZvckVhY2goKHJlZ2lzdGVyZWQpID0+IHtcclxuICAgICAgICAgICAgdHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWRbdHlwZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7dmFyaWFibGUsIHZhbHVlfSA9IHJlZ2lzdGVyZWRbdHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU2hlZXQ/LmNzc1J1bGVzWzBdLnN0eWxlLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbGVhc2VWYXJpYWJsZXNTaGVldCgpIHtcclxuICAgICAgICB2YXJpYWJsZXNTaGVldCA9IG51bGw7XHJcbiAgICAgICAgY2xlYXJDb2xvclBhbGV0dGUoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRWYXJpYWJsZVZhbHVlKHR5cGUsIHJlZ2lzdGVyZWQpIHtcclxuICAgICAgICByZXR1cm4gYHZhcigke3JlZ2lzdGVyZWRbdHlwZV0udmFyaWFibGV9LCAke3JlZ2lzdGVyZWRbdHlwZV0udmFsdWV9KWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRSZWdpc3RlcmVkQ29sb3IodHlwZSwgcGFyc2VkKSB7XHJcbiAgICAgICAgY29uc3QgaGV4ID0gcmdiVG9IZXhTdHJpbmcocGFyc2VkKTtcclxuICAgICAgICBjb25zdCByZWdpc3RlcmVkID0gcmVnaXN0ZXJlZENvbG9ycy5nZXQoaGV4KTtcclxuICAgICAgICBpZiAocmVnaXN0ZXJlZD8uW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRSZWdpc3RlcmVkVmFyaWFibGVWYWx1ZSh0eXBlLCByZWdpc3RlcmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckNvbG9yKHR5cGUsIHBhcnNlZCwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCBoZXggPSByZ2JUb0hleFN0cmluZyhwYXJzZWQpO1xyXG4gICAgICAgIGxldCByZWdpc3RlcmVkO1xyXG4gICAgICAgIGlmIChyZWdpc3RlcmVkQ29sb3JzLmhhcyhoZXgpKSB7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyZWQgPSByZWdpc3RlcmVkQ29sb3JzLmdldChoZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoaGV4KTtcclxuICAgICAgICAgICAgcmVnaXN0ZXJlZCA9IHtwYXJzZWR9O1xyXG4gICAgICAgICAgICByZWdpc3RlcmVkQ29sb3JzLnNldChoZXgsIHJlZ2lzdGVyZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGAtLWRhcmtyZWFkZXItJHt0eXBlfS0ke2hleC5yZXBsYWNlKFwiI1wiLCBcIlwiKX1gO1xyXG4gICAgICAgIHJlZ2lzdGVyZWRbdHlwZV0gPSB7dmFyaWFibGUsIHZhbHVlfTtcclxuICAgICAgICBpZiAodmFyaWFibGVzU2hlZXQ/LmNzc1J1bGVzWzBdPy5zdHlsZSkge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXNTaGVldD8uY3NzUnVsZXNbMF0uc3R5bGUuc2V0UHJvcGVydHkodmFyaWFibGUsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdldFJlZ2lzdGVyZWRWYXJpYWJsZVZhbHVlKHR5cGUsIHJlZ2lzdGVyZWQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JQYWxldHRlKCkge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBbXTtcclxuICAgICAgICBjb25zdCBib3JkZXIgPSBbXTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gW107XHJcbiAgICAgICAgcmVnaXN0ZXJlZENvbG9ycy5mb3JFYWNoKChyZWdpc3RlcmVkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkLmJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQucHVzaChyZWdpc3RlcmVkLnBhcnNlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWQuYm9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIucHVzaChyZWdpc3RlcmVkLnBhcnNlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWQudGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC5wdXNoKHJlZ2lzdGVyZWQucGFyc2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7YmFja2dyb3VuZCwgYm9yZGVyLCB0ZXh0fTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyQ29sb3JQYWxldHRlKCkge1xyXG4gICAgICAgIHJlZ2lzdGVyZWRDb2xvcnMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCZ1BvbGUodGhlbWUpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmtTY2hlbWUgPSB0aGVtZS5tb2RlID09PSAxO1xyXG4gICAgICAgIGNvbnN0IHByb3AgPSBpc0RhcmtTY2hlbWVcclxuICAgICAgICAgICAgPyBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIlxyXG4gICAgICAgICAgICA6IFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIjtcclxuICAgICAgICByZXR1cm4gdGhlbWVbcHJvcF07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRGZ1BvbGUodGhlbWUpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmtTY2hlbWUgPSB0aGVtZS5tb2RlID09PSAxO1xyXG4gICAgICAgIGNvbnN0IHByb3AgPSBpc0RhcmtTY2hlbWVcclxuICAgICAgICAgICAgPyBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIlxyXG4gICAgICAgICAgICA6IFwibGlnaHRTY2hlbWVUZXh0Q29sb3JcIjtcclxuICAgICAgICByZXR1cm4gdGhlbWVbcHJvcF07XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2xvck1vZGlmaWNhdGlvbkNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJDb2xvck1vZGlmaWNhdGlvbkNhY2hlKCkge1xyXG4gICAgICAgIGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJnYkNhY2hlS2V5cyA9IFtcInJcIiwgXCJnXCIsIFwiYlwiLCBcImFcIl07XHJcbiAgICBjb25zdCB0aGVtZUNhY2hlS2V5cyQxID0gW1xyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwiYnJpZ2h0bmVzc1wiLFxyXG4gICAgICAgIFwiY29udHJhc3RcIixcclxuICAgICAgICBcImdyYXlzY2FsZVwiLFxyXG4gICAgICAgIFwic2VwaWFcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZVRleHRDb2xvclwiXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FjaGVJZChyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdElkID0gXCJcIjtcclxuICAgICAgICByZ2JDYWNoZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdElkICs9IGAke3JnYltrZXldfTtgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoZW1lQ2FjaGVLZXlzJDEuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdElkICs9IGAke3RoZW1lW2tleV19O2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdElkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgcmdiLFxyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIG1vZGlmeUhTTCxcclxuICAgICAgICBwb2xlQ29sb3IsXHJcbiAgICAgICAgYW5vdGhlclBvbGVDb2xvclxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGZuQ2FjaGU7XHJcbiAgICAgICAgaWYgKGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuaGFzKG1vZGlmeUhTTCkpIHtcclxuICAgICAgICAgICAgZm5DYWNoZSA9IGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuZ2V0KG1vZGlmeUhTTCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm5DYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgY29sb3JNb2RpZmljYXRpb25DYWNoZS5zZXQobW9kaWZ5SFNMLCBmbkNhY2hlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSBnZXRDYWNoZUlkKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIGlmIChmbkNhY2hlLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuQ2FjaGUuZ2V0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICBjb25zdCBwb2xlID0gcG9sZUNvbG9yID09IG51bGwgPyBudWxsIDogcGFyc2VUb0hTTFdpdGhDYWNoZShwb2xlQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IGFub3RoZXJQb2xlID1cclxuICAgICAgICAgICAgYW5vdGhlclBvbGVDb2xvciA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogcGFyc2VUb0hTTFdpdGhDYWNoZShhbm90aGVyUG9sZUNvbG9yKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZCA9IG1vZGlmeUhTTChoc2wsIHBvbGUsIGFub3RoZXJQb2xlKTtcclxuICAgICAgICBjb25zdCB7ciwgZywgYiwgYX0gPSBoc2xUb1JHQihtb2RpZmllZCk7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gY3JlYXRlRmlsdGVyTWF0cml4KHRoZW1lKTtcclxuICAgICAgICBjb25zdCBbcmYsIGdmLCBiZl0gPSBhcHBseUNvbG9yTWF0cml4KFtyLCBnLCBiXSwgbWF0cml4KTtcclxuICAgICAgICBjb25zdCBjb2xvciA9XHJcbiAgICAgICAgICAgIGEgPT09IDFcclxuICAgICAgICAgICAgICAgID8gcmdiVG9IZXhTdHJpbmcoe3I6IHJmLCBnOiBnZiwgYjogYmZ9KVxyXG4gICAgICAgICAgICAgICAgOiByZ2JUb1N0cmluZyh7cjogcmYsIGc6IGdmLCBiOiBiZiwgYX0pO1xyXG4gICAgICAgIGZuQ2FjaGUuc2V0KGlkLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5QW5kUmVnaXN0ZXJDb2xvcih0eXBlLCByZ2IsIHRoZW1lLCBtb2RpZmllcikge1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyZWQgPSBnZXRSZWdpc3RlcmVkQ29sb3IodHlwZSwgcmdiKTtcclxuICAgICAgICBpZiAocmVnaXN0ZXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtb2RpZmllcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJDb2xvcih0eXBlLCByZ2IsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGNvbnN0IHBvbGVCZyA9IGdldEJnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgY29uc3QgcG9sZUZnID0gZ2V0RmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgIG1vZGlmeUxpZ2h0TW9kZUhTTCxcclxuICAgICAgICAgICAgcG9sZUZnLFxyXG4gICAgICAgICAgICBwb2xlQmdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5TGlnaHRNb2RlSFNMKHtoLCBzLCBsLCBhfSwgcG9sZUZnLCBwb2xlQmcpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmsgPSBsIDwgMC41O1xyXG4gICAgICAgIGxldCBpc05ldXRyYWw7XHJcbiAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICBpc05ldXRyYWwgPSBsIDwgMC4yIHx8IHMgPCAwLjEyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmx1ZSA9IGggPiAyMDAgJiYgaCA8IDI4MDtcclxuICAgICAgICAgICAgaXNOZXV0cmFsID0gcyA8IDAuMjQgfHwgKGwgPiAwLjggJiYgaXNCbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGh4ID0gaDtcclxuICAgICAgICBsZXQgc3ggPSBsO1xyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICAgICAgaHggPSBwb2xlRmcuaDtcclxuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUZnLnM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVCZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlQmcucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBseCA9IHNjYWxlKGwsIDAsIDEsIHBvbGVGZy5sLCBwb2xlQmcubCk7XHJcbiAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogc3gsIGw6IGx4LCBhfTtcclxuICAgIH1cclxuICAgIGNvbnN0IE1BWF9CR19MSUdIVE5FU1MgPSAwLjQ7XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCZ0hTTCh7aCwgcywgbCwgYX0sIHBvbGUpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmsgPSBsIDwgMC41O1xyXG4gICAgICAgIGNvbnN0IGlzQmx1ZSA9IGggPiAyMDAgJiYgaCA8IDI4MDtcclxuICAgICAgICBjb25zdCBpc05ldXRyYWwgPSBzIDwgMC4xMiB8fCAobCA+IDAuOCAmJiBpc0JsdWUpO1xyXG4gICAgICAgIGlmIChpc0RhcmspIHtcclxuICAgICAgICAgICAgY29uc3QgbHggPSBzY2FsZShsLCAwLCAwLjUsIDAsIE1BWF9CR19MSUdIVE5FU1MpO1xyXG4gICAgICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoeCA9IHBvbGUuaDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN4ID0gcG9sZS5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogc3gsIGw6IGx4LCBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge2gsIHMsIGw6IGx4LCBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGx4ID0gc2NhbGUobCwgMC41LCAxLCBNQVhfQkdfTElHSFRORVNTLCBwb2xlLmwpO1xyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgY29uc3QgaHggPSBwb2xlLmg7XHJcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gcG9sZS5zO1xyXG4gICAgICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaHggPSBoO1xyXG4gICAgICAgIGNvbnN0IGlzWWVsbG93ID0gaCA+IDYwICYmIGggPCAxODA7XHJcbiAgICAgICAgaWYgKGlzWWVsbG93KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VyVG9HcmVlbiA9IGggPiAxMjA7XHJcbiAgICAgICAgICAgIGlmIChpc0Nsb3NlclRvR3JlZW4pIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gc2NhbGUoaCwgMTIwLCAxODAsIDEzNSwgMTgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gc2NhbGUoaCwgNjAsIDEyMCwgNjAsIDEwNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGh4ID4gNDAgJiYgaHggPCA4MCkge1xyXG4gICAgICAgICAgICBseCAqPSAwLjc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzLCBsOiBseCwgYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBfbW9kaWZ5QmFja2dyb3VuZENvbG9yKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICBpZiAodGhlbWUubW9kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kaWZ5TGlnaHRTY2hlbWVDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9sZSA9IGdldEJnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKFxyXG4gICAgICAgICAgICByZ2IsXHJcbiAgICAgICAgICAgIHsuLi50aGVtZSwgbW9kZTogMH0sXHJcbiAgICAgICAgICAgIG1vZGlmeUJnSFNMLFxyXG4gICAgICAgICAgICBwb2xlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICByZ2IsXHJcbiAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgc2hvdWxkUmVnaXN0ZXJDb2xvclZhcmlhYmxlID0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKCFzaG91bGRSZWdpc3RlckNvbG9yVmFyaWFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9tb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtb2RpZnlBbmRSZWdpc3RlckNvbG9yKFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRcIixcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgX21vZGlmeUJhY2tncm91bmRDb2xvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBNSU5fRkdfTElHSFRORVNTID0gMC41NTtcclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJsdWVGZ0h1ZShodWUpIHtcclxuICAgICAgICByZXR1cm4gc2NhbGUoaHVlLCAyMDUsIDI0NSwgMjA1LCAyMjApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5RmdIU0woe2gsIHMsIGwsIGF9LCBwb2xlKSB7XHJcbiAgICAgICAgY29uc3QgaXNMaWdodCA9IGwgPiAwLjU7XHJcbiAgICAgICAgY29uc3QgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4yNDtcclxuICAgICAgICBjb25zdCBpc0JsdWUgPSAhaXNOZXV0cmFsICYmIGggPiAyMDUgJiYgaCA8IDI0NTtcclxuICAgICAgICBpZiAoaXNMaWdodCkge1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IHNjYWxlKGwsIDAuNSwgMSwgTUlOX0ZHX0xJR0hUTkVTUywgcG9sZS5sKTtcclxuICAgICAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaHggPSBwb2xlLmg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGh4ID0gaDtcclxuICAgICAgICAgICAgaWYgKGlzQmx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaHggPSBtb2RpZnlCbHVlRmdIdWUoaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtoOiBoeCwgcywgbDogbHgsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh4ID0gcG9sZS5oO1xyXG4gICAgICAgICAgICBjb25zdCBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgY29uc3QgbHggPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTUlOX0ZHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoeCA9IGg7XHJcbiAgICAgICAgbGV0IGx4O1xyXG4gICAgICAgIGlmIChpc0JsdWUpIHtcclxuICAgICAgICAgICAgaHggPSBtb2RpZnlCbHVlRmdIdWUoaCk7XHJcbiAgICAgICAgICAgIGx4ID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1hdGgubWluKDEsIE1JTl9GR19MSUdIVE5FU1MgKyAwLjA1KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbHggPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTUlOX0ZHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHMsIGw6IGx4LCBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF9tb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGlmICh0aGVtZS5tb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2xlID0gZ2V0RmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgey4uLnRoZW1lLCBtb2RlOiAwfSxcclxuICAgICAgICAgICAgbW9kaWZ5RmdIU0wsXHJcbiAgICAgICAgICAgIHBvbGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKFxyXG4gICAgICAgIHJnYixcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBzaG91bGRSZWdpc3RlckNvbG9yVmFyaWFibGUgPSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIXNob3VsZFJlZ2lzdGVyQ29sb3JWYXJpYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX21vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUFuZFJlZ2lzdGVyQ29sb3IoXHJcbiAgICAgICAgICAgIFwidGV4dFwiLFxyXG4gICAgICAgICAgICByZ2IsXHJcbiAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICBfbW9kaWZ5Rm9yZWdyb3VuZENvbG9yXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJvcmRlckhTTCh7aCwgcywgbCwgYX0sIHBvbGVGZywgcG9sZUJnKSB7XHJcbiAgICAgICAgY29uc3QgaXNEYXJrID0gbCA8IDAuNTtcclxuICAgICAgICBjb25zdCBpc05ldXRyYWwgPSBsIDwgMC4yIHx8IHMgPCAwLjI0O1xyXG4gICAgICAgIGxldCBoeCA9IGg7XHJcbiAgICAgICAgbGV0IHN4ID0gcztcclxuICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0RhcmspIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUZnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVGZy5zO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHggPSBwb2xlQmcuaDtcclxuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUJnLnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbHggPSBzY2FsZShsLCAwLCAxLCAwLjUsIDAuMik7XHJcbiAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogc3gsIGw6IGx4LCBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF9tb2RpZnlCb3JkZXJDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbGVGZyA9IGdldEZnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgY29uc3QgcG9sZUJnID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgey4uLnRoZW1lLCBtb2RlOiAwfSxcclxuICAgICAgICAgICAgbW9kaWZ5Qm9yZGVySFNMLFxyXG4gICAgICAgICAgICBwb2xlRmcsXHJcbiAgICAgICAgICAgIHBvbGVCZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCb3JkZXJDb2xvcihyZ2IsIHRoZW1lLCBzaG91bGRSZWdpc3RlckNvbG9yVmFyaWFibGUgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCFzaG91bGRSZWdpc3RlckNvbG9yVmFyaWFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9tb2RpZnlCb3JkZXJDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUFuZFJlZ2lzdGVyQ29sb3IoXCJib3JkZXJcIiwgcmdiLCB0aGVtZSwgX21vZGlmeUJvcmRlckNvbG9yKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeVNoYWRvd0NvbG9yKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eShydWxlU3R5bGUsIHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVsZVN0eWxlICYmIHJ1bGVTdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KHByb3BlcnR5KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmlhYmxlQ1NTRGVjbGFyYXRpb24oXHJcbiAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IG1vZGlmaWVyID0gbnVsbDtcclxuICAgICAgICBpZiAocHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0VmFyaWFibGVNb2RpZmllcihcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcyhcInZhcihcIikpIHtcclxuICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRWYXJpYWJsZURlcGVuZGFudE1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gXCJjb2xvci1zY2hlbWVcIikge1xyXG4gICAgICAgICAgICBtb2RpZmllciA9IGdldENvbG9yU2NoZW1lTW9kaWZpZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSBcInNjcm9sbGJhci1jb2xvclwiKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0U2Nyb2xsYmFyQ29sb3JNb2RpZmllcih2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgKHByb3BlcnR5LmluY2x1ZGVzKFwiY29sb3JcIikgJiZcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9PSBcIi13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0XCIpIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImZpbGxcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJzdHJva2VcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJzdG9wLWNvbG9yXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcImJvcmRlclwiKSAmJlxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgIT09IFwiYm9yZGVyLWNvbG9yXCIgJiZcclxuICAgICAgICAgICAgICAgIHZhbHVlID09PSBcImluaXRpYWxcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlclNpZGVQcm9wID0gcHJvcGVydHkuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkubGVuZ3RoIC0gNlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlclNpZGVWYWwgPVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShib3JkZXJTaWRlUHJvcCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyU2lkZVZhbC5zdGFydHNXaXRoKFwiMHB4XCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyU2lkZVZhbCA9PT0gXCJub25lXCJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gYm9yZGVyU2lkZVByb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXIgPSBib3JkZXJTaWRlVmFsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRDb2xvck1vZGlmaWVyKHByb3BlcnR5LCB2YWx1ZSwgcnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwibGlzdC1zdHlsZS1pbWFnZVwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0QmdJbWFnZU1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkuaW5jbHVkZXMoXCJzaGFkb3dcIikpIHtcclxuICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRTaGFkb3dNb2RpZmllcih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICB2YWx1ZTogbW9kaWZpZXIsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZ2V0UHJpb3JpdHkocnVsZS5zdHlsZSwgcHJvcGVydHkpLFxyXG4gICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gam9pblNlbGVjdG9ycyguLi5zZWxlY3RvcnMpIHtcclxuICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLCBcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBob3N0c1dpdGhPZGRTY3JvbGxiYXJzID0gW1wiY2FsZW5kYXIuZ29vZ2xlLmNvbVwiXTtcclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkVXNlckFnZW50U3R5bGUodGhlbWUsIGlzSUZyYW1lLCBzdHlsZVN5c3RlbUNvbnRyb2xzKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBpZiAoIWlzSUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJodG1sIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBgICAgIGJhY2tncm91bmQtY29sb3I6ICR7bW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSwgdGhlbWUpfSAhaW1wb3J0YW50O2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCAmJiB0aGVtZS5tb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJodG1sIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgICBjb2xvci1zY2hlbWU6IGRhcmsgIWltcG9ydGFudDtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJpZnJhbWUge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgICAgIGNvbG9yLXNjaGVtZTogZGFyayAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmdTZWxlY3RvcnMgPSBqb2luU2VsZWN0b3JzKFxyXG4gICAgICAgICAgICBpc0lGcmFtZSA/IFwiXCIgOiBcImh0bWwsIGJvZHlcIixcclxuICAgICAgICAgICAgc3R5bGVTeXN0ZW1Db250cm9scyA/IFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbiwgZGlhbG9nXCIgOiBcIlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoYmdTZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtiZ1NlbGVjdG9yc30ge2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke21vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sIHRoZW1lKX07YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCR7am9pblNlbGVjdG9ycyhcImh0bWwsIGJvZHlcIiwgc3R5bGVTeXN0ZW1Db250cm9scyA/IFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvblwiIDogXCJcIil9IHtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGJvcmRlci1jb2xvcjogJHttb2RpZnlCb3JkZXJDb2xvcih7cjogNzYsIGc6IDc2LCBiOiA3Nn0sIHRoZW1lKX07YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSl9O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJhIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDY0LCBiOiAyNTV9LCB0aGVtZSl9O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ0YWJsZSB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYm9yZGVyLWNvbG9yOiAke21vZGlmeUJvcmRlckNvbG9yKHtyOiAxMjgsIGc6IDEyOCwgYjogMTI4fSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwibWFyayB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjpwbGFjZWhvbGRlciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAxNjksIGc6IDE2OSwgYjogMTY5fSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcInRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1MCwgZzogMjU1LCBiOiAxODl9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGVtZS5zY3JvbGxiYXJDb2xvciAmJlxyXG4gICAgICAgICAgICAhaG9zdHNXaXRoT2RkU2Nyb2xsYmFycy5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChnZXRNb2RpZmllZFNjcm9sbGJhclN0eWxlKHRoZW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGVtZS5zZWxlY3Rpb25Db2xvcikge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGdldE1vZGlmaWVkU2VsZWN0aW9uU3R5bGUodGhlbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTGF5ZXJSdWxlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnVuc2hpZnQoXCJAbGF5ZXIge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uQ29sb3IodGhlbWUpIHtcclxuICAgICAgICBsZXQgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIGxldCBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgaWYgKHRoZW1lLnNlbGVjdGlvbkNvbG9yID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMCwgZzogOTYsIGI6IDIxMn0sXHJcbiAgICAgICAgICAgICAgICB7Li4udGhlbWUsIGdyYXlzY2FsZTogMH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID0gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LFxyXG4gICAgICAgICAgICAgICAgey4uLnRoZW1lLCBncmF5c2NhbGU6IDB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh0aGVtZS5zZWxlY3Rpb25Db2xvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiA9IHRoZW1lLnNlbGVjdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICBpZiAoaHNsLmwgPCAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IFwiI0ZGRlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID0gXCIjMDAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24sIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbn07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZFNlbGVjdGlvblN0eWxlKHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFNlbGVjdGlvbkNvbG9yID0gZ2V0U2VsZWN0aW9uQ29sb3IodGhlbWUpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IuYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIGNvbnN0IGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IuZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIFtcIjo6c2VsZWN0aW9uXCIsIFwiOjotbW96LXNlbGVjdGlvblwiXS5mb3JFYWNoKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtzZWxlY3Rpb259IHtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb259ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAgICAgY29sb3I6ICR7Zm9yZWdyb3VuZENvbG9yU2VsZWN0aW9ufSAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkU2Nyb2xsYmFyU3R5bGUodGhlbWUpIHtcclxuICAgICAgICBsZXQgY29sb3JUcmFjaztcclxuICAgICAgICBsZXQgY29sb3JUaHVtYjtcclxuICAgICAgICBpZiAodGhlbWUuc2Nyb2xsYmFyQ29sb3IgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yVHJhY2sgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI0MSwgZzogMjQxLCBiOiAyNDF9LCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWIgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDE3NiwgZzogMTc2LCBiOiAxNzZ9LCB0aGVtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh0aGVtZS5zY3JvbGxiYXJDb2xvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhcmtlbiA9IChkYXJrZXIpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5oc2wsXHJcbiAgICAgICAgICAgICAgICBsOiBjbGFtcChoc2wubCAtIGRhcmtlciwgMCwgMSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbG9yVHJhY2sgPSBoc2xUb1N0cmluZyhkYXJrZW4oMC40KSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWIgPSBoc2xUb1N0cmluZyhoc2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBgKiB7YCxcclxuICAgICAgICAgICAgYCAgICBzY3JvbGxiYXItY29sb3I6ICR7Y29sb3JUaHVtYn0gJHtjb2xvclRyYWNrfTtgLFxyXG4gICAgICAgICAgICBgfWBcclxuICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUodGhlbWUsIHtzdHJpY3R9KSB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IGRlZmF1bHRGYWxsYmFja0ZhY3Rvcnk7XHJcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkodGhlbWUsIHtzdHJpY3R9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRGYWxsYmFja0ZhY3RvcnkodGhlbWUsIHtzdHJpY3R9KSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgaHRtbCwgYm9keSwgJHtzdHJpY3QgPyBcImJvZHkgOm5vdChpZnJhbWUpXCIgOiBcImJvZHkgPiA6bm90KGlmcmFtZSlcIn0ge2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBib3JkZXItY29sb3I6ICR7bW9kaWZ5Qm9yZGVyQ29sb3Ioe3I6IDY0LCBnOiA2NCwgYjogNjR9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChgZGl2W3N0eWxlKj1cImJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDEzNSwgMTM1KVwiXSB7YCk7XHJcbiAgICAgICAgbGluZXMucHVzaChgICAgIGJhY2tncm91bmQtY29sb3I6ICM4Nzg3ODcgIWltcG9ydGFudDtgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVucGFyc2FibGVDb2xvcnMgPSBuZXcgU2V0KFtcclxuICAgICAgICBcImluaGVyaXRcIixcclxuICAgICAgICBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgXCJpbml0aWFsXCIsXHJcbiAgICAgICAgXCJjdXJyZW50Y29sb3JcIixcclxuICAgICAgICBcIm5vbmVcIixcclxuICAgICAgICBcInVuc2V0XCIsXHJcbiAgICAgICAgXCJhdXRvXCJcclxuICAgIF0pO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JNb2RpZmllcihwcm9wLCB2YWx1ZSwgcnVsZSkge1xyXG4gICAgICAgIGlmICh1bnBhcnNhYmxlQ29sb3JzLmhhcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodmFsdWUpO1xyXG4gICAgICAgIGlmICghcmdiKSB7XHJcbiAgICAgICAgICAgIGxvZ1dhcm4oXCJDb3VsZG4ndCBwYXJzZSBjb2xvclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcC5pbmNsdWRlcyhcImJhY2tncm91bmRcIikpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUud2Via2l0TWFza0ltYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS53ZWJraXRNYXNrSW1hZ2UgIT09IFwibm9uZVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUud2Via2l0TWFzayAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFydWxlLnN0eWxlLndlYmtpdE1hc2suc3RhcnRzV2l0aChcIm5vbmVcIikpIHx8XHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS5tYXNrICYmIHJ1bGUuc3R5bGUubWFzayAhPT0gXCJub25lXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFzay1pbWFnZVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1hc2staW1hZ2VcIikgIT09IFwibm9uZVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IG1vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wLmluY2x1ZGVzKFwiYm9yZGVyXCIpIHx8IHByb3AuaW5jbHVkZXMoXCJvdXRsaW5lXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IG1vZGlmeUJvcmRlckNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbWFnZURldGFpbHNDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nID0gbmV3IE1hcCgpO1xyXG4gICAgbGV0IGRpZFRyeUxvYWRDYWNoZSA9IGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gc2hvdWxkSWdub3JlSW1hZ2Uoc2VsZWN0b3JUZXh0LCBzZWxlY3RvcnMpIHtcclxuICAgICAgICBpZiAoIXNlbGVjdG9yVGV4dCB8fCBzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdG9ycy5zb21lKChzKSA9PiBzID09PSBcIipcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJ1bGVTZWxlY3RvcnMgPSBzZWxlY3RvclRleHQuc3BsaXQoLyxcXHMqL2cpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlnbm9yZWRTZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcclxuICAgICAgICAgICAgaWYgKGlnbm9yZWRTZWxlY3Rvci5zdGFydHNXaXRoKFwiXlwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmVnaW5uaW5nID0gaWdub3JlZFNlbGVjdG9yLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVTZWxlY3RvcnMuc29tZSgocykgPT4gcy5zdGFydHNXaXRoKGJlZ2lubmluZykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWdub3JlZFNlbGVjdG9yLmVuZHNXaXRoKFwiJFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kaW5nID0gaWdub3JlZFNlbGVjdG9yLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZFNlbGVjdG9yLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZVNlbGVjdG9ycy5zb21lKChzKSA9PiBzLmVuZHNXaXRoKGVuZGluZykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocnVsZVNlbGVjdG9ycy5zb21lKChzKSA9PiBzID09PSBpZ25vcmVkU2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbWFnZVNlbGVjdG9yUXVldWUgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBpbWFnZVNlbGVjdG9yVmFsdWVzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgaW1hZ2VTZWxlY3Rvck5vZGVRdWV1ZSA9IG5ldyBTZXQoKTtcclxuICAgIGxldCBpbWFnZVNlbGVjdG9yUXVldWVGcmFtZUlkID0gbnVsbDtcclxuICAgIGxldCBjbGFzc09ic2VydmVyID0gbnVsbDtcclxuICAgIGZ1bmN0aW9uIGNoZWNrSW1hZ2VTZWxlY3RvcnMobm9kZSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBjYWxsYmFja3NdIG9mIGltYWdlU2VsZWN0b3JRdWV1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHx8XHJcbiAgICAgICAgICAgICAgICAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbm9kZS5tYXRjaGVzKHNlbGVjdG9yKSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVNlbGVjdG9yUXVldWUuZGVsZXRlKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjbGFzc09ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIGNsYXNzT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNlbGVjdG9yTm9kZVF1ZXVlLmFkZChtdXRhdGlvbi50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2VTZWxlY3RvclF1ZXVlRnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNlbGVjdG9yUXVldWVGcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU2VsZWN0b3JOb2RlUXVldWUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0ltYWdlU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU2VsZWN0b3JOb2RlUXVldWUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNlbGVjdG9yUXVldWVGcmFtZUlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNsYXNzT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRCZ0ltYWdlTW9kaWZpZXIoXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHNob3VsZElnbm9yZUltYWdlKHJ1bGUuc2VsZWN0b3JUZXh0LCBpZ25vcmVJbWFnZVNlbGVjdG9ycykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudHMgPSBwYXJzZUdyYWRpZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgdXJscyA9IGdldE1hdGNoZXMoY3NzVVJMUmVnZXgsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHVybHMubGVuZ3RoID09PSAwICYmIGdyYWRpZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBnZXRJbmRpY2VzID0gKG1hdGNoZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IHZhbHVlLmluZGV4T2YobWF0Y2gsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbHVlSW5kZXggKyBtYXRjaC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHttYXRjaCwgaW5kZXg6IHZhbHVlSW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBncmFkaWVudHNcclxuICAgICAgICAgICAgICAgIC5tYXAoKGkpID0+ICh7dHlwZTogXCJncmFkaWVudFwiLCAuLi5pfSkpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEluZGljZXModXJscykubWFwKChpKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmlcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5pbmRleCA+IGIuaW5kZXggPyAxIDogLTEpKTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0R3JhZGllbnRNb2RpZmllciA9IChncmFkaWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3R5cGVHcmFkaWVudCwgbWF0Y2gsIGhhc0NvbW1hfSA9IGdyYWRpZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydHNSZWdleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgLyhbXlxcKFxcKSxdKyhcXChbXlxcKFxcKV0qKFxcKFteXFwoXFwpXSpcXCkqW15cXChcXCldKik/XFwpKT8oW15cXChcXCksIF18KCAoPyFjYWxjKSkpKiksPy9nO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JTdG9wUmVnZXggPVxyXG4gICAgICAgICAgICAgICAgICAgIC9eKGZyb218Y29sb3Itc3RvcHx0bylcXCgoW15cXChcXCldKj8sXFxzKik/KC4qPylcXCkkLztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gZ2V0TWF0Y2hlcyhwYXJ0c1JlZ2V4LCBtYXRjaCwgMSkubWFwKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHBhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4gbW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBwYXJ0Lmxhc3RJbmRleE9mKFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHBhcnQuc3Vic3RyaW5nKDAsIHNwYWNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7bW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIHRoZW1lKX0gJHtwYXJ0LnN1YnN0cmluZyhzcGFjZSArIDEpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yU3RvcE1hdGNoID0gcGFydC5tYXRjaChjb2xvclN0b3BSZWdleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yU3RvcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoY29sb3JTdG9wTWF0Y2hbM10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbG9yU3RvcE1hdGNoWzFdfSgke2NvbG9yU3RvcE1hdGNoWzJdID8gYCR7Y29sb3JTdG9wTWF0Y2hbMl19LCBgIDogXCJcIn0ke21vZGlmeUdyYWRpZW50Q29sb3IocmdiLCB0aGVtZSl9KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHBhcnQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7dHlwZUdyYWRpZW50fSgke3BhcnRzLm1hcCgobW9kaWZ5KSA9PiBtb2RpZnkodGhlbWUpKS5qb2luKFwiLCBcIil9KSR7aGFzQ29tbWEgPyBcIiwgXCIgOiBcIlwifWA7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBnZXRVUkxNb2RpZmllciA9ICh1cmxWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkaWRUcnlMb2FkQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWRUcnlMb2FkQ2FjaGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRJbWFnZURldGFpbHNDYWNoZShpbWFnZURldGFpbHNDYWNoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gZ2V0Q1NTVVJMVmFsdWUodXJsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNVUkxFbXB0eSA9IHVybC5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7cGFyZW50U3R5bGVTaGVldH0gPSBydWxlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3duZXJOb2RlID0gcGFyZW50U3R5bGVTaGVldD8ub3duZXJOb2RlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcGUgPVxyXG4gICAgICAgICAgICAgICAgICAgIChwYXJlbnRTdHlsZVNoZWV0ICYmIGdldFNoZWV0U2NvcGUocGFyZW50U3R5bGVTaGVldCkpID8/XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlVVJMID1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRTdHlsZVNoZWV0ICYmIHBhcmVudFN0eWxlU2hlZXQuaHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGdldENTU0Jhc2VCYXRoKHBhcmVudFN0eWxlU2hlZXQuaHJlZilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBvd25lck5vZGU/LmJhc2VVUkkgfHwgbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gZ2V0QWJzb2x1dGVVUkwoYmFzZVVSTCwgdXJsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhc3luYyAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNVUkxFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1cmwoJycpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvciA9IHJ1bGUuc2VsZWN0b3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IuaW5jbHVkZXMoXCI6OmJlZm9yZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlQWxsKFwiOjpiZWZvcmVcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yLmluY2x1ZGVzKFwiOjphZnRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlQWxsKFwiOjphZnRlclwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNlbGVjdG9yUXVldWUuaGFzKHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNlbGVjdG9yUXVldWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHVzaChyZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNlbGVjdG9yUXVldWUuc2V0KHNlbGVjdG9yLCBbcmVzb2x2ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNlbGVjdG9yVmFsdWVzLnNldChzZWxlY3RvciwgdXJsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZURldGFpbHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZURldGFpbHNDYWNoZS5oYXModXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBpbWFnZURldGFpbHNDYWNoZS5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Jsb2JVUkxDaGVja1Jlc3VsdFJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByZXF1ZXN0QmxvYlVSTENoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhd2FpdGVycyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGVycy5wdXNoKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltYWdlRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLnNldCh1cmwsIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBhd2FpdCBnZXRJbWFnZURldGFpbHModXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHNDYWNoZS5zZXQodXJsLCBpbWFnZURldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlSW1hZ2VEZXRhaWxzQ2FjaGUodXJsLCBpbWFnZURldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgocmVzb2x2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2VEZXRhaWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FuY2VsbGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHJlc29sdmUpID0+IHJlc29sdmUobnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZURldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmdJbWFnZVZhbHVlID0gZ2V0QmdJbWFnZVZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJnSW1hZ2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJnSW1hZ2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iVVJMID0gYXdhaXQgdHJ5Q29udmVydERhdGFVUkxUb0Jsb2JVUkwodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2JVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgdXJsKFwiJHtibG9iVVJMfVwiKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB1cmwoXCIke3VybH1cIilgO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0QmdJbWFnZVZhbHVlID0gKGltYWdlRGV0YWlscywgdGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpc0RhcmssIGlzTGlnaHQsIGlzVHJhbnNwYXJlbnQsIGlzTGFyZ2UsIHdpZHRofSA9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ1NyYyA9IGltYWdlRGV0YWlscy5zcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImRhdGE6XCJcclxuICAgICAgICAgICAgICAgICAgICA6IGltYWdlRGV0YWlscy5zcmM7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZSAmJiBpc0xpZ2h0ICYmICFpc1RyYW5zcGFyZW50ICYmIHRoZW1lLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKGBIaWRpbmcgbGFyZ2UgbGlnaHQgaW1hZ2UgJHtsb2dTcmN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGFyayAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5tb2RlID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPiAyXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKGBJbnZlcnRpbmcgZGFyayBpbWFnZSAke2xvZ1NyY31gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZlcnRlZCA9IGdldEZpbHRlcmVkSW1hZ2VVUkwoaW1hZ2VEZXRhaWxzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBpYTogY2xhbXAodGhlbWUuc2VwaWEgKyAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGB1cmwoXCIke2ludmVydGVkfVwiKWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzTGlnaHQgJiYgIWlzVHJhbnNwYXJlbnQgJiYgdGhlbWUubW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oYERpbW1pbmcgbGlnaHQgaW1hZ2UgJHtsb2dTcmN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGltbWVkID0gZ2V0RmlsdGVyZWRJbWFnZVVSTChpbWFnZURldGFpbHMsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBgdXJsKFwiJHtkaW1tZWR9XCIpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhlbWUubW9kZSA9PT0gMCAmJiBpc0xpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhgQXBwbHlpbmcgZmlsdGVyIHRvIGltYWdlICR7bG9nU3JjfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gZ2V0RmlsdGVyZWRJbWFnZVVSTChpbWFnZURldGFpbHMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWdodG5lc3M6IGNsYW1wKHRoZW1lLmJyaWdodG5lc3MgLSAxMCwgNSwgMjAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VwaWE6IGNsYW1wKHRoZW1lLnNlcGlhICsgMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBgdXJsKFwiJHtmaWx0ZXJlZH1cIilgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKGBOb3QgbW9kaWZ5aW5nIHRoZSBpbWFnZSAke2xvZ1NyY31gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgbW9kaWZpZXJzID0gW107XHJcbiAgICAgICAgICAgIGxldCBtYXRjaEluZGV4ID0gMDtcclxuICAgICAgICAgICAgbGV0IHByZXZIYXNDb21tYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtYXRjaGVzLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoe3R5cGUsIG1hdGNoLCBpbmRleCwgdHlwZUdyYWRpZW50LCBoYXNDb21tYSwgb2Zmc2V0fSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoU3RhcnQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXhTdGFydCA9IG1hdGNoSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hFbmQgPSBtYXRjaFN0YXJ0ICsgbWF0Y2gubGVuZ3RoICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoSW5kZXggPSBtYXRjaEVuZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZml4U3RhcnQgIT09IG1hdGNoU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZIYXNDb21tYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZXR3ZWVuVmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeFN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmV0d2VlblZhbHVlWzBdID09PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXR3ZWVuVmFsdWUgPSBiZXR3ZWVuVmFsdWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmV0d2VlblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN1YnN0cmluZyhwcmVmaXhTdGFydCwgbWF0Y2hTdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkhhc0NvbW1hID0gaGFzQ29tbWEgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwidXJsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goZ2V0VVJMTW9kaWZpZXIobWF0Y2gpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhZGllbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEdyYWRpZW50TW9kaWZpZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudDogdHlwZUdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NvbW1hOiBoYXNDb21tYSB8fCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBtYXRjaGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goKCkgPT4gdmFsdWUuc3Vic3RyaW5nKG1hdGNoRW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gbW9kaWZpZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG1vZGlmeSkgPT4gbW9kaWZ5KHRoZW1lKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5zb21lKChyKSA9PiByIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbigoYXN5bmNSZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3luY1Jlc3VsdHMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlc3VsdCA9IHJlc3VsdHMuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21iaW5lZFJlc3VsdC5lbmRzV2l0aChcIiwgaW5pdGlhbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlc3VsdC5zbGljZSgwLCAtOSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGxvZ1dhcm4oYFVuYWJsZSB0byBwYXJzZSBncmFkaWVudCAke3ZhbHVlfWAsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNoYWRvd01vZGlmaWVyV2l0aEluZm8odmFsdWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvck1hdGNoZXMgPSBnZXRNYXRjaGVzKFxyXG4gICAgICAgICAgICAgICAgLyhefFxccykoPyFjYWxjKShbYS16XStcXCguKz9cXCl8I1swLTlhLWZdK3xbYS16XSspKC4qPyhpbnNldHxvdXRzZXQpPygkfCwpKS9naSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgbm90UGFyc2VkID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbW9kaWZpZXJzID0gY29sb3JNYXRjaGVzLm1hcCgobWF0Y2gsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaEluZGV4ID0gdmFsdWUuaW5kZXhPZihtYXRjaCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hFbmQgPSBtYXRjaEluZGV4ICsgbWF0Y2gubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBtYXRjaEVuZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RQYXJzZWQrKztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gdmFsdWUuc3Vic3RyaW5nKHByZWZpeEluZGV4LCBtYXRjaEVuZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3ZhbHVlLnN1YnN0cmluZyhwcmVmaXhJbmRleCwgbWF0Y2hJbmRleCl9JHttb2RpZnlTaGFkb3dDb2xvcihyZ2IsIHRoZW1lKX0ke2kgPT09IGNvbG9yTWF0Y2hlcy5sZW5ndGggLSAxID8gdmFsdWUuc3Vic3RyaW5nKG1hdGNoRW5kKSA6IFwiXCJ9YDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkID0gbW9kaWZpZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgobW9kaWZ5KSA9PiBtb2RpZnkodGhlbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzTGVuZ3RoOiBjb2xvck1hdGNoZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHVucGFyc2FibGVNYXRjaGVzTGVuZ3RoOiBub3RQYXJzZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBtb2RpZmllZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbG9nV2FybihgVW5hYmxlIHRvIHBhcnNlIHNoYWRvdyAke3ZhbHVlfWAsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNoYWRvd01vZGlmaWVyKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgc2hhZG93TW9kaWZpZXIgPSBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhbHVlKTtcclxuICAgICAgICBpZiAoIXNoYWRvd01vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBzaGFkb3dNb2RpZmllcih0aGVtZSkucmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyQ29sb3JNb2RpZmllcih2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yc01hdGNoID0gdmFsdWUubWF0Y2goXHJcbiAgICAgICAgICAgIC9eXFxzKihbYS16XSsoXFwoLipcXCkpPylcXHMrKFthLXpdKyhcXCguKlxcKSk/KVxccyokL1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCFjb2xvcnNNYXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRodW1iID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvcnNNYXRjaFsxXSk7XHJcbiAgICAgICAgY29uc3QgdHJhY2sgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yc01hdGNoWzNdKTtcclxuICAgICAgICBpZiAoIXRodW1iIHx8ICF0cmFjaykge1xyXG4gICAgICAgICAgICBsb2dXYXJuKFxyXG4gICAgICAgICAgICAgICAgXCJDb3VsZG4ndCBwYXJzZSBjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgLi4uW3RodW1iLCB0cmFja10uZmlsdGVyKChjKSA9PiAhYylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgIGAke21vZGlmeUZvcmVncm91bmRDb2xvcih0aHVtYiwgdGhlbWUpfSAke21vZGlmeUJhY2tncm91bmRDb2xvcih0aHVtYiwgdGhlbWUpfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvclNjaGVtZU1vZGlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiAodGhlbWUpID0+ICh0aGVtZS5tb2RlID09PSAwID8gXCJkYXJrIGxpZ2h0XCIgOiBcImRhcmtcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZU1vZGlmaWVyKFxyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgIHByb3AsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gdmFyaWFibGVzU3RvcmUuZ2V0TW9kaWZpZXJGb3JWYXJpYWJsZSh7XHJcbiAgICAgICAgICAgIHZhck5hbWU6IHByb3AsXHJcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlRGVwZW5kYW50TW9kaWZpZXIodmFyaWFibGVzU3RvcmUsIHByb3AsIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlc1N0b3JlLmdldE1vZGlmaWVyRm9yVmFyRGVwZW5kYW50KHByb3AsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuTW9kaWZpY2F0aW9uQ2FjaGUoKSB7XHJcbiAgICAgICAgY2xlYXJDb2xvck1vZGlmaWNhdGlvbkNhY2hlKCk7XHJcbiAgICAgICAgaW1hZ2VEZXRhaWxzQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICBjbGVhbkltYWdlUHJvY2Vzc2luZ0NhY2hlKCk7XHJcbiAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuY2xlYXIoKTtcclxuICAgICAgICBpbWFnZVNlbGVjdG9yUXVldWUuY2xlYXIoKTtcclxuICAgICAgICBjbGFzc09ic2VydmVyPy5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgY2xhc3NPYnNlcnZlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVkFSX1RZUEVfQkdfQ09MT1IgPSAxIDw8IDA7XHJcbiAgICBjb25zdCBWQVJfVFlQRV9URVhUX0NPTE9SID0gMSA8PCAxO1xyXG4gICAgY29uc3QgVkFSX1RZUEVfQk9SREVSX0NPTE9SID0gMSA8PCAyO1xyXG4gICAgY29uc3QgVkFSX1RZUEVfQkdfSU1HID0gMSA8PCAzO1xyXG4gICAgY2xhc3MgVmFyaWFibGVzU3RvcmUge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhclR5cGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnZhclJlZnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy52YXJSZWZzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlcy5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1ZhclR5cGUodmFyTmFtZSwgdHlwZU51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJUeXBlcy5oYXModmFyTmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLnZhclR5cGVzLmdldCh2YXJOYW1lKSAmIHR5cGVOdW0pID4gMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRSdWxlc0Zvck1hdGNoaW5nKHJ1bGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5hZGQocnVsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRJbmxpbmVTdHlsZUZvck1hdGNoaW5nKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5wdXNoKHN0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuc2l6ZSA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVTdHlsZVF1ZXVlLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYXJUeXBlcyA9IG5ldyBNYXAodGhpcy52YXJUeXBlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJvb3RWYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0VmFyaWFibGVzQW5kVmFyRGVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJvb3RWYXJEZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyUmVmcy5mb3JFYWNoKChyZWZzLCB2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWZzLmZvckVhY2goKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YXJUeXBlcy5oYXModikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHIsIHRoaXMudmFyVHlwZXMuZ2V0KHYpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bmtub3duQmdWYXJzLmhhcyh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfQkdfQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFyVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdfQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVF9DT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CT1JERVJfQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMuYWRkKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0NvbG9yID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRWYXJSZWYodiwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmhhcyhyZWYpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFyVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdfQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUX0NPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQk9SREVSX0NPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgIT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhclJlZnModiwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUocmVmLCBWQVJfVFlQRV9CR19DT0xPUik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHX0NPTE9SIHwgVkFSX1RZUEVfQkdfSU1HKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmZvckVhY2goKHZhck5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh2YXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TW9kaWZpZXJGb3JWYXJpYWJsZShvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgfSA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXREZWNsYXJhdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkTW9kaWZpZWRWYWx1ZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZU51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyTmFtZVdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFyVHlwZSh2YXJOYW1lLCB0eXBlTnVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdmFyTmFtZVdyYXBwZXIodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RpZmllZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQoc291cmNlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb25zdHJ1Y3RlZENvbG9yVmFyKHNvdXJjZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGluc2VydFZhclZhbHVlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZU51bSA9PT0gVkFSX1RZUEVfQkdfQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiMwMDAwMDBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IGNvbG9yTW9kaWZpZXIodmFsdWUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB2YXJOYW1lV3JhcHBlcih2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiBjb2xvck1vZGlmaWVyKGZhbGxiYWNrLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IGNvbG9yTW9kaWZpZXIoc291cmNlVmFsdWUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kaWZpZWRWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdfQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCZ0NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNb2RpZmllZFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUX0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlUZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGlmaWVkVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JPUkRFUl9DT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCb3JkZXJDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHZhck5hbWUsIFZBUl9UWVBFX0JHX0lNRykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB3cmFwQmdJbWdWYXJpYWJsZU5hbWUodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RpZmllZFZhbHVlID0gc291cmNlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChzb3VyY2VWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHYpID0+IHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmYWxsYmFjaykgPT4gdHJ5TW9kaWZ5QmdDb2xvcihmYWxsYmFjaywgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnTW9kaWZpZXIgPSBnZXRCZ0ltYWdlTW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBiZ01vZGlmaWVyID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJnTW9kaWZpZXIodGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBiZ01vZGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZExpc3RlbmVyID0gKG9uVHlwZUNoYW5nZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWNzID0gZ2V0RGVjbGFyYXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZShkZWNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZSh2YXJOYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlTGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVZhcmlhYmxlVHlwZUNoYW5nZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZ2V0RGVjbGFyYXRpb25zKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlOiB7YWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyc31cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE1vZGlmaWVyRm9yVmFyRGVwZW5kYW50KHByb3BlcnR5LCBzb3VyY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0NvbnN0cnVjdGVkQ29sb3IgPSBzb3VyY2VWYWx1ZS5tYXRjaCgvXlxccyoocmdifGhzbClhP1xcKC8pO1xyXG4gICAgICAgICAgICBjb25zdCBpc1NpbXBsZUNvbnN0cnVjdGVkQ29sb3IgPSBzb3VyY2VWYWx1ZS5tYXRjaChcclxuICAgICAgICAgICAgICAgIC9ecmdiYT9cXCh2YXJcXCgtLVtcXC1fQS1aYS16MC05XStcXCkoXFxzKiw/XFwvP1xccyowP1xcLlxcZCspP1xcKSQvXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChpc0NvbnN0cnVjdGVkQ29sb3IgJiYgIWlzU2ltcGxlQ29uc3RydWN0ZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZyA9IHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJiYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNUZXh0ID0gaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gaW5zZXJ0VmFyVmFsdWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGlzQmcgPyBcIiNmZmZmZmZcIiA6IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllciA9IGlzQmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnlNb2RpZnlCZ0NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXNUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnlNb2RpZnlUZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRyeU1vZGlmeUJvcmRlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllcih2YWx1ZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgfHxcclxuICAgICAgICAgICAgICAgIChpc1NpbXBsZUNvbnN0cnVjdGVkQ29sb3IgJiYgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0RmFsbGJhY2sgPSB0cnlNb2RpZnlCZ0NvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbnN0cnVjdGVkQ29sb3IgPyBcIjI1NSwgMjU1LCAyNTVcIiA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRGYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRGYWxsYmFjayA9IHRyeU1vZGlmeVRleHRDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb25zdHJ1Y3RlZENvbG9yID8gXCIwLCAwLCAwXCIgOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodikgPT4gd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZSh2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiB0cnlNb2RpZnlUZXh0Q29sb3IoZmFsbGJhY2ssIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEZhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJveC1zaGFkb3dcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmtub3duVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlUmVwbGFjZWQgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHX0NPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR19JTUcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQmdJbWdWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVua25vd25WYXJzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmFsbGJhY2spID0+IHRyeU1vZGlmeUJnQ29sb3IoZmFsbGJhY2ssIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiYm94LXNoYWRvd1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dNb2RpZmllciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2hhZG93TW9kaWZpZXJXaXRoSW5mbyh2YXJpYWJsZVJlcGxhY2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkU2hhZG93ID0gc2hhZG93TW9kaWZpZXIodGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU2hhZG93LnVucGFyc2FibGVNYXRjaGVzTGVuZ3RoICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU2hhZG93Lm1hdGNoZXNMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllZFNoYWRvdy5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlUmVwbGFjZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllZCA9IG1vZGlmeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bmtub3duVmFycy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0ZhbGxiYWNrUmVzb2x2ZWQgPSBtb2RpZmllZC5tYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9edmFyXFwoLio/LCAodmFyXFwoLS1kYXJrcmVhZGVyLWJnLS0uKlxcKSl8KCNbMC05QS1GYS1mXSspfChbYS16XSspfChyZ2JhP1xcKC4rXFwpKXwoaHNsYT9cXCguK1xcKSlcXCkkL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGYWxsYmFja1Jlc29sdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVua25vd25WYXIgb2YgdW5rbm93blZhcnMudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93blZhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbW9kaWZ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duVmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZWQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJib3JkZXJcIikgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJvdXRsaW5lXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodikgPT4gd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmFsbGJhY2spID0+IHRyeU1vZGlmeUJvcmRlckNvbG9yKGZhbGxiYWNrLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZSh2YXJOYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLnNldCh2YXJOYW1lLCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3RTdG9yZSA9IHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuZ2V0KHZhck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIXJvb3RTdG9yZS5oYXMoY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgICAgICByb290U3RvcmUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzKHZhck5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5nZXQodmFyTmFtZSkuZGVsZXRlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsZWN0VmFyaWFibGVzQW5kVmFyRGVwKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuZm9yRWFjaCgocnVsZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgKHJ1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5zdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RWYXJzRnJvbUNTU0RlY2xhcmF0aW9ucyhydWxlLnN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0VmFyc0Zyb21DU1NEZWNsYXJhdGlvbnMoc3R5bGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5zcGxpY2UoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxlY3RWYXJzRnJvbUNTU0RlY2xhcmF0aW9ucyhzdHlsZSkge1xyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKHN0eWxlLCAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3RWYXJpYWJsZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdFZhckRlcGVuZGFudChwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvdWxkUHJvY2Vzc1Jvb3RWYXJpYWJsZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuc2l6ZSA+IDAgJiZcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKT8uaW5jbHVkZXMoXCItLVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsZWN0Um9vdFZhcmlhYmxlcygpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFByb2Nlc3NSb290VmFyaWFibGVzKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3RWYXJpYWJsZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zcGVjdFZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXMuc2V0KHZhck5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSAmJiBpc0NvbnN0cnVjdGVkQ29sb3JWYXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmaW5lZFZhcnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ29sb3IgPSBCb29sZWFuKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2gocmF3UkdCU3BhY2VSZWdleCkgfHxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaChyYXdSR0JDb21tYVJlZ2V4KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlQ29sb3JXaXRoQ2FjaGUodmFsdWUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChpc0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoXCJ1cmwoXCIpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5pbmNsdWRlcyhcImxpbmVhci1ncmFkaWVudChcIikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwicmFkaWFsLWdyYWRpZW50KFwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2YXJOYW1lLCBWQVJfVFlQRV9CR19JTUcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmVWYXJpYWJsZVR5cGUodmFyTmFtZSwgdHlwZU51bSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVHlwZSA9IHRoaXMuaW5pdGlhbFZhclR5cGVzLmdldCh2YXJOYW1lKSB8fCAwO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VHlwZSA9IHRoaXMudmFyVHlwZXMuZ2V0KHZhck5hbWUpIHx8IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1R5cGUgPSBjdXJyZW50VHlwZSB8IHR5cGVOdW07XHJcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuc2V0KHZhck5hbWUsIG5ld1R5cGUpO1xyXG4gICAgICAgICAgICBpZiAobmV3VHlwZSAhPT0gaW5pdGlhbFR5cGUgfHwgdGhpcy51bmRlZmluZWRWYXJzLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmRlbGV0ZSh2YXJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuZGVsZXRlKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHZhck5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsZWN0Um9vdFZhckRlcGVuZGVudHMoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRQcm9jZXNzUm9vdFZhcmlhYmxlcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICAgICAgICAgICAgICAgIChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdFZhckRlcGVuZGFudChwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zcGVjdFZhckRlcGVuZGFudChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAocmVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhclJlZnMuaGFzKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhclJlZnMuc2V0KHByb3BlcnR5LCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhclJlZnMuZ2V0KHByb3BlcnR5KS5hZGQocmVmKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1jb2xvclwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJib3gtc2hhZG93XCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAodikgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfQkdfQ09MT1IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAodikgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfVEVYVF9DT0xPUilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiYm9yZGVyXCIpIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwib3V0bGluZVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9CT1JERVJfQ09MT1IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdfQ09MT1IgfCBWQVJfVFlQRV9CR19JTUcpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNCZ0NvbG9yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kVmFyUmVmKHYsIChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmhhcyhyZWYpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhclR5cGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdfQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVF9DT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CT1JERVJfQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAhPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhclJlZnModiwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCZ0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUocmVmLCBWQVJfVFlQRV9CR19DT0xPUik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuYWRkKHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZXJhdGVWYXJEZXBzKHZhbHVlLCBpdGVyYXRvcikge1xyXG4gICAgICAgICAgICBjb25zdCB2YXJEZXBzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBpdGVyYXRlVmFyRGVwZW5kZW5jaWVzKHZhbHVlLCAodikgPT4gdmFyRGVwcy5hZGQodikpO1xyXG4gICAgICAgICAgICB2YXJEZXBzLmZvckVhY2goKHYpID0+IGl0ZXJhdG9yKHYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluZFZhclJlZih2YXJOYW1lLCBpdGVyYXRvciwgc3RhY2sgPSBuZXcgU2V0KCkpIHtcclxuICAgICAgICAgICAgaWYgKHN0YWNrLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhY2suYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBpdGVyYXRvcih2YXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhck5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVmcyA9IHRoaXMudmFyUmVmcy5nZXQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghcmVmcyB8fCByZWZzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVmIG9mIHJlZnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gdGhpcy5maW5kVmFyUmVmKHJlZiwgaXRlcmF0b3IsIHN0YWNrKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlcmF0ZVZhclJlZnModmFyTmFtZSwgaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kVmFyUmVmKHZhck5hbWUsIChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKHJlZik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRPblJvb3RWYXJpYWJsZUNoYW5nZShjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLm9uUm9vdFZhcmlhYmxlRGVmaW5lZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdXRSb290VmFycyhzdHlsZUVsZW1lbnQsIHRoZW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gc3R5bGVFbGVtZW50LnNoZWV0O1xyXG4gICAgICAgICAgICBpZiAoc2hlZXQuY3NzUnVsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2hlZXQuZGVsZXRlUnVsZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZShwcm9wZXJ0eSwgVkFSX1RZUEVfQkdfQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCZ0NvbG9yKHZhbHVlLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHByb3BlcnR5LCBWQVJfVFlQRV9URVhUX0NPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlUZXh0Q29sb3IodmFsdWUsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhclR5cGUocHJvcGVydHksIFZBUl9UWVBFX0JPUkRFUl9DT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCb3JkZXJDb2xvcih2YWx1ZSwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJvb3RWYXJpYWJsZURlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc0xpbmVzID0gW107XHJcbiAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goXCI6cm9vdCB7XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIGRlY2xhcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgY3NzTGluZXMucHVzaChgICAgICR7cHJvcGVydHl9OiAke3ZhbHVlfTtgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY3NzVGV4dCA9IGNzc0xpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUoY3NzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFyaWFibGVzU3RvcmUgPSBuZXcgVmFyaWFibGVzU3RvcmUoKTtcclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlUmFuZ2UoaW5wdXQsIHNlYXJjaFN0YXJ0ID0gMCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5wdXQuaW5kZXhPZihcInZhcihcIiwgc2VhcmNoU3RhcnQpO1xyXG4gICAgICAgIGlmIChzdGFydCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZ2V0UGFyZW50aGVzZXNSYW5nZShpbnB1dCwgc3RhcnQgKyAzKTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXJ0LCBlbmQ6IHJhbmdlLmVuZH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZXNNYXRjaGVzKGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2VzID0gW107XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCByYW5nZTtcclxuICAgICAgICB3aGlsZSAoKHJhbmdlID0gZ2V0VmFyaWFibGVSYW5nZShpbnB1dCwgaSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IHJhbmdlO1xyXG4gICAgICAgICAgICByYW5nZXMucHVzaCh7c3RhcnQsIGVuZCwgdmFsdWU6IGlucHV0LnN1YnN0cmluZyhzdGFydCwgZW5kKX0pO1xyXG4gICAgICAgICAgICBpID0gcmFuZ2UuZW5kICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJhbmdlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VWYXJpYWJsZXNNYXRjaGVzKGlucHV0LCByZXBsYWNlcikge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBnZXRWYXJpYWJsZXNNYXRjaGVzKGlucHV0KTtcclxuICAgICAgICBjb25zdCBtYXRjaGVzQ291bnQgPSBtYXRjaGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobWF0Y2hlc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRzID0gbWF0Y2hlcy5tYXAoKG0pID0+XHJcbiAgICAgICAgICAgIHJlcGxhY2VyKG0udmFsdWUsIG1hdGNoZXMubGVuZ3RoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBbXTtcclxuICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZygwLCBtYXRjaGVzWzBdLnN0YXJ0KSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHJlcGxhY2VtZW50c1tpXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbWF0Y2hlc1tpXS5lbmQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9XHJcbiAgICAgICAgICAgICAgICBpIDwgbWF0Y2hlc0NvdW50IC0gMSA/IG1hdGNoZXNbaSArIDFdLnN0YXJ0IDogaW5wdXRMZW5ndGg7XHJcbiAgICAgICAgICAgIHBhcnRzLnB1c2goaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZU5hbWVBbmRGYWxsYmFjayhtYXRjaCkge1xyXG4gICAgICAgIGNvbnN0IGNvbW1hSW5kZXggPSBtYXRjaC5pbmRleE9mKFwiLFwiKTtcclxuICAgICAgICBsZXQgbmFtZTtcclxuICAgICAgICBsZXQgZmFsbGJhY2s7XHJcbiAgICAgICAgaWYgKGNvbW1hSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBuYW1lID0gbWF0Y2guc3Vic3RyaW5nKDQsIGNvbW1hSW5kZXgpLnRyaW0oKTtcclxuICAgICAgICAgICAgZmFsbGJhY2sgPSBtYXRjaC5zdWJzdHJpbmcoY29tbWFJbmRleCArIDEsIG1hdGNoLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYW1lID0gbWF0Y2guc3Vic3RyaW5nKDQsIG1hdGNoLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICAgICAgICAgICAgZmFsbGJhY2sgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge25hbWUsIGZhbGxiYWNrfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lUmVwbGFjZXIsXHJcbiAgICAgICAgZmFsbGJhY2tSZXBsYWNlcixcclxuICAgICAgICBmaW5hbEZhbGxiYWNrXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBtYXRjaFJlcGxhY2VyID0gKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBmYWxsYmFja30gPSBnZXRWYXJpYWJsZU5hbWVBbmRGYWxsYmFjayhtYXRjaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBuYW1lUmVwbGFjZXIobmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5hbEZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB2YXIoJHtuZXdOYW1lfSwgJHtmaW5hbEZhbGxiYWNrfSlgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGB2YXIoJHtuZXdOYW1lfSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBuZXdGYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KGZhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVJlcGxhY2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrUmVwbGFjZXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmFsbGJhY2tSZXBsYWNlcikge1xyXG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSBmYWxsYmFja1JlcGxhY2VyKGZhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZhbGxiYWNrID0gZmFsbGJhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGB2YXIoJHtuZXdOYW1lfSwgJHtuZXdGYWxsYmFja30pYDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyh2YWx1ZSwgbWF0Y2hSZXBsYWNlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlVmFyRGVwZW5kZW5jaWVzKHZhbHVlLCBpdGVyYXRvcikge1xyXG4gICAgICAgIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyh2YWx1ZSwgKHZhck5hbWUpID0+IHtcclxuICAgICAgICAgICAgaXRlcmF0b3IodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YXJOYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgLS1kYXJrcmVhZGVyLWJnJHtuYW1lfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYC0tZGFya3JlYWRlci10ZXh0JHtuYW1lfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgLS1kYXJrcmVhZGVyLWJvcmRlciR7bmFtZX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcEJnSW1nVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYC0tZGFya3JlYWRlci1iZ2ltZyR7bmFtZX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNWYXJpYWJsZShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1ZhckRlcGVuZGFudCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5pbmNsdWRlcyhcInZhcihcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0NvbnN0cnVjdGVkQ29sb3JWYXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlxccyoocmdifGhzbClhP1xcKC8pIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eKCgoXFxkezEsM30pfCh2YXJcXChbXFwtX0EtWmEtejAtOV0rXFwpKSksP1xccyo/KXszfSQvKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0Q29sb3JQcm9wcyA9IFtcclxuICAgICAgICBcImNvbG9yXCIsXHJcbiAgICAgICAgXCJjYXJldC1jb2xvclwiLFxyXG4gICAgICAgIFwiLXdlYmtpdC10ZXh0LWZpbGwtY29sb3JcIixcclxuICAgICAgICBcImZpbGxcIixcclxuICAgICAgICBcInN0cm9rZVwiXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiB0ZXh0Q29sb3JQcm9wcy5pbmNsdWRlcyhwcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByYXdSR0JTcGFjZVJlZ2V4ID0gL14oXFxkezEsM30pXFxzKyhcXGR7MSwzfSlcXHMrKFxcZHsxLDN9KSQvO1xyXG4gICAgY29uc3QgcmF3UkdCQ29tbWFSZWdleCA9IC9eKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSQvO1xyXG4gICAgZnVuY3Rpb24gcGFyc2VSYXdDb2xvclZhbHVlKGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPVxyXG4gICAgICAgICAgICBpbnB1dC5tYXRjaChyYXdSR0JTcGFjZVJlZ2V4KSA/PyBpbnB1dC5tYXRjaChyYXdSR0JDb21tYVJlZ2V4KTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBgcmdiKCR7bWF0Y2hbMV19LCAke21hdGNoWzJdfSwgJHttYXRjaFszXX0pYDtcclxuICAgICAgICAgICAgcmV0dXJuIHtpc1JhdzogdHJ1ZSwgY29sb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2lzUmF3OiBmYWxzZSwgY29sb3I6IGlucHV0fTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJhd0NvbG9yVmFsdWUoaW5wdXQsIHRoZW1lLCBtb2RpZnlGdW5jdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHtpc1JhdywgY29sb3J9ID0gcGFyc2VSYXdDb2xvclZhbHVlKGlucHV0KTtcclxuICAgICAgICBjb25zdCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yKTtcclxuICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dENvbG9yID0gbW9kaWZ5RnVuY3Rpb24ocmdiLCB0aGVtZSwgIWlzUmF3KTtcclxuICAgICAgICAgICAgaWYgKGlzUmF3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRJblJHQiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUob3V0cHV0Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dEluUkdCXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtvdXRwdXRJblJHQi5yfSwgJHtvdXRwdXRJblJHQi5nfSwgJHtvdXRwdXRJblJHQi5ifWBcclxuICAgICAgICAgICAgICAgICAgICA6IG91dHB1dENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5QmdDb2xvcihjb2xvciwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gaGFuZGxlUmF3Q29sb3JWYWx1ZShjb2xvciwgdGhlbWUsIG1vZGlmeUJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cnlNb2RpZnlUZXh0Q29sb3IoY29sb3IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd0NvbG9yVmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IoY29sb3IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd0NvbG9yVmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbnNlcnRWYXJWYWx1ZXMoc291cmNlLCB2YXJWYWx1ZXMsIGZ1bGxTdGFjayA9IG5ldyBTZXQoKSkge1xyXG4gICAgICAgIGxldCBjb250YWluc1VucmVzb2x2ZWRWYXIgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBtYXRjaFJlcGxhY2VyID0gKG1hdGNoLCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgZmFsbGJhY2t9ID0gZ2V0VmFyaWFibGVOYW1lQW5kRmFsbGJhY2sobWF0Y2gpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IGNvdW50ID4gMSA/IG5ldyBTZXQoZnVsbFN0YWNrKSA6IGZ1bGxTdGFjaztcclxuICAgICAgICAgICAgaWYgKHN0YWNrLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNVbnJlc29sdmVkVmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YWNrLmFkZChuYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgdmFyVmFsdWUgPSB2YXJWYWx1ZXMuZ2V0KG5hbWUpIHx8IGZhbGxiYWNrO1xyXG4gICAgICAgICAgICBsZXQgaW5zZXJ0ZWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodmFyVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YXJWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGluc2VydFZhclZhbHVlcyh2YXJWYWx1ZSwgdmFyVmFsdWVzLCBzdGFjayk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gdmFyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpbnNlcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNVbnJlc29sdmVkVmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbnNlcnRlZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VkID0gcmVwbGFjZVZhcmlhYmxlc01hdGNoZXMoc291cmNlLCBtYXRjaFJlcGxhY2VyKTtcclxuICAgICAgICBpZiAoY29udGFpbnNVbnJlc29sdmVkVmFyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVwbGFjZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGhlbWVDYWNoZUtleXMgPSBbXHJcbiAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgXCJicmlnaHRuZXNzXCIsXHJcbiAgICAgICAgXCJjb250cmFzdFwiLFxyXG4gICAgICAgIFwiZ3JheXNjYWxlXCIsXHJcbiAgICAgICAgXCJzZXBpYVwiLFxyXG4gICAgICAgIFwiZGFya1NjaGVtZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIFwiZGFya1NjaGVtZVRleHRDb2xvclwiLFxyXG4gICAgICAgIFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lVGV4dENvbG9yXCJcclxuICAgIF07XHJcbiAgICBmdW5jdGlvbiBnZXRUaGVtZUtleSh0aGVtZSkge1xyXG4gICAgICAgIGxldCByZXN1bHRLZXkgPSBcIlwiO1xyXG4gICAgICAgIHRoZW1lQ2FjaGVLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHRLZXkgKz0gYCR7a2V5fToke3RoZW1lW2tleV19O2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdEtleTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFzeW5jUXVldWUgPSBjcmVhdGVBc3luY1Rhc2tzUXVldWUoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpIHtcclxuICAgICAgICBsZXQgcmVuZGVySWQgPSAwO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0eWxlUnVsZUhhc2gocnVsZSkge1xyXG4gICAgICAgICAgICBsZXQgY3NzVGV4dCA9IHJ1bGUuY3NzVGV4dDtcclxuICAgICAgICAgICAgaWYgKGlzTWVkaWFSdWxlKHJ1bGUucGFyZW50UnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNzc1RleHQgPSBgJHtydWxlLnBhcmVudFJ1bGUubWVkaWEubWVkaWFUZXh0fSB7ICR7Y3NzVGV4dH0gfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdldEhhc2hDb2RlKGNzc1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBydWxlc1RleHRDYWNoZSA9IG5ldyBTZXQoKTtcclxuICAgICAgICBjb25zdCBydWxlc01vZENhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IHZhclR5cGVDaGFuZ2VDbGVhbmVycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgcHJldkZpbHRlcktleSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGhhc05vbkxvYWRlZExpbmsgPSBmYWxzZTtcclxuICAgICAgICBsZXQgd2FzUmVidWlsdCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNob3VsZFJlYnVpbGRTdHlsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc05vbkxvYWRlZExpbmsgJiYgIXdhc1JlYnVpbHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG1vZGlmeVNoZWV0KG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBvcHRpb25zLnNvdXJjZUNTU1J1bGVzO1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICBmb3JjZSxcclxuICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldCxcclxuICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWRcclxuICAgICAgICAgICAgfSA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIGxldCBydWxlc0NoYW5nZWQgPSBydWxlc01vZENhY2hlLnNpemUgPT09IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdEZvdW5kQ2FjaGVLZXlzID0gbmV3IFNldChydWxlc01vZENhY2hlLmtleXMoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lS2V5ID0gZ2V0VGhlbWVLZXkodGhlbWUpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGVtZUNoYW5nZWQgPSB0aGVtZUtleSAhPT0gcHJldkZpbHRlcktleTtcclxuICAgICAgICAgICAgaWYgKGhhc05vbkxvYWRlZExpbmspIHtcclxuICAgICAgICAgICAgICAgIHdhc1JlYnVpbHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZFJ1bGVzID0gW107XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhcclxuICAgICAgICAgICAgICAgIHJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNoID0gZ2V0U3R5bGVSdWxlSGFzaChydWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dERpZmZlcnNGcm9tUHJldiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kQ2FjaGVLZXlzLmRlbGV0ZShoYXNoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJ1bGVzVGV4dENhY2hlLmhhcyhoYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlc1RleHRDYWNoZS5hZGQoaGFzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaWZmZXJzRnJvbVByZXYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dERpZmZlcnNGcm9tUHJldikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZFJ1bGVzLnB1c2gocnVsZXNNb2RDYWNoZS5nZXQoaGFzaCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLnN0eWxlLmFsbCA9PT0gXCJyZXZlcnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZERlY3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IGdldE1vZGlmaWFibGVDU1NEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2REZWNzLnB1c2gobW9kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZFJ1bGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2REZWNzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50UnVsZSA9IHJ1bGUucGFyZW50UnVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBydWxlLnNlbGVjdG9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogbW9kRGVjcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFJ1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUnVsZXMucHVzaChtb2RSdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXNNb2RDYWNoZS5zZXQoaGFzaCwgbW9kUnVsZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc05vbkxvYWRlZExpbmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBub3RGb3VuZENhY2hlS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzVGV4dENhY2hlLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgcnVsZXNNb2RDYWNoZS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByZXZGaWx0ZXJLZXkgPSB0aGVtZUtleTtcclxuICAgICAgICAgICAgaWYgKCFmb3JjZSAmJiAhcnVsZXNDaGFuZ2VkICYmICF0aGVtZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW5kZXJJZCsrO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtzZWxlY3RvciwgZGVjbGFyYXRpb25zfSA9IHJ1bGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUlzV2hlcmVTZWxlY3RvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNDaHJvbWl1bSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCI6aXMoXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdG9yLmluY2x1ZGVzKFwiOmlzKClcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IuaW5jbHVkZXMoXCI6d2hlcmUoKVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0b3IuaW5jbHVkZXMoXCI6d2hlcmUoXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvci5pbmNsdWRlcyhcIjotbW96XCIpKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3VHJhbnNpdGlvblNlbGVjdG9yID1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvci5pbmNsdWRlcyhcIjo6dmlldy10cmFuc2l0aW9uLVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbXB0eUlzV2hlcmVTZWxlY3RvciB8fCB2aWV3VHJhbnNpdGlvblNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gXCIuZGFya3JlYWRlci11bnN1cHBvcnRlZC1zZWxlY3RvclwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHJ1bGVUZXh0ID0gYCR7c2VsZWN0b3JUZXh0fSB7YDtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGVjIG9mIGRlY2xhcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwcm9wZXJ0eSwgdmFsdWUsIGltcG9ydGFudH0gPSBkZWM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVUZXh0ICs9IGAgJHtwcm9wZXJ0eX06ICR7dmFsdWV9JHtpbXBvcnRhbnQgPyBcIiAhaW1wb3J0YW50XCIgOiBcIlwifTtgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1bGVUZXh0ICs9IFwiIH1cIjtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRSdWxlKHJ1bGVUZXh0LCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYXN5bmNEZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhckRlY2xhcmF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgbGV0IGFzeW5jRGVjbGFyYXRpb25Db3VudGVyID0gMDtcclxuICAgICAgICAgICAgbGV0IHZhckRlY2xhcmF0aW9uQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3RSZWFkeUdyb3VwID0ge3J1bGU6IG51bGwsIHJ1bGVzOiBbXSwgaXNHcm91cDogdHJ1ZX07XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwUmVmcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFJlYWR5R3JvdXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSZWZzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cFJlZnMuZ2V0KHJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSB7cnVsZSwgcnVsZXM6IFtdLCBpc0dyb3VwOiB0cnVlfTtcclxuICAgICAgICAgICAgICAgIGdyb3VwUmVmcy5zZXQocnVsZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50R3JvdXAgPSBnZXRHcm91cChydWxlLnBhcmVudFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50R3JvdXAucnVsZXMucHVzaChncm91cCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmZvckVhY2goKGNsZWFyKSA9PiBjbGVhcigpKTtcclxuICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIG1vZFJ1bGVzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChyKSA9PiByKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHtzZWxlY3RvciwgZGVjbGFyYXRpb25zLCBwYXJlbnRSdWxlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZ2V0R3JvdXAocGFyZW50UnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZHlTdHlsZVJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyb3VwOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZHlEZWNsYXJhdGlvbnMgPSByZWFkeVN0eWxlUnVsZS5kZWNsYXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAucnVsZXMucHVzaChyZWFkeVN0eWxlUnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQXN5bmNEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzeW5jS2V5ID0gKythc3luY0RlY2xhcmF0aW9uQ291bnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXN5bmNEZWNsYXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goYXN5bmNEZWNsYXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZW5kZXJJZCA9IHJlbmRlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZC50aGVuKChhc3luY1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFzeW5jVmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVySWQgIT09IHJlbmRlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9uLnZhbHVlID0gYXN5bmNWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jUXVldWUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVySWQgIT09IHJlbmRlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZEFzeW5jUnVsZShhc3luY0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVZhckRlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtkZWNsYXJhdGlvbnM6IHZhckRlY3MsIG9uVHlwZUNoYW5nZX0gPSBtb2RpZmllZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyS2V5ID0gKyt2YXJEZWNsYXJhdGlvbkNvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZW5kZXJJZCA9IHJlbmRlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsSW5kZXggPSByZWFkeURlY2xhcmF0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGREZWNzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJEZWNzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcERlYyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2godGVtcERlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzID0gW3RlbXBEZWNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhckRlY3MuZm9yRWFjaCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kLnZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZHlEZWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtb2QucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2QudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaChyZWFkeURlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcy5wdXNoKHJlYWR5RGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZS5hZGRMaXN0ZW5lcigobmV3RGVjcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZW5kZXJJZCAhPT0gcmVuZGVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5VmFyRGVjcyA9IG5ld0RlY3MubWFwKChtb2QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbW9kLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHJlYWR5RGVjbGFyYXRpb25zLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVhZHlWYXJEZWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcyA9IHJlYWR5VmFyRGVjcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRWYXJSdWxlKHZhcktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMuYWRkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UucmVtb3ZlTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7cHJvcGVydHksIHZhbHVlLCBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZWQgPSB2YWx1ZSh0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBc3luY0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVmFyRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IHByZXBhcmVTaGVldCgpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBidWlsZFN0eWxlU2hlZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXJnZXQoZ3JvdXAsIHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtydWxlfSA9IGdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01lZGlhUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7bWVkaWF9ID0gcnVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0UnVsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBAbWVkaWEgJHttZWRpYS5tZWRpYVRleHR9IHt9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMYXllclJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge25hbWV9ID0gcnVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0UnVsZShgQGxheWVyICR7bmFtZX0ge31gLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZVJlYWR5UnVsZXMoZ3JvdXAsIHRhcmdldCwgc3R5bGVJdGVyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnJ1bGVzLmZvckVhY2goKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGNyZWF0ZVRhcmdldChyLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZVJlYWR5UnVsZXMociwgdCwgc3R5bGVJdGVyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUl0ZXJhdG9yKHIsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVSZWFkeVJ1bGVzKHJvb3RSZWFkeUdyb3VwLCBzaGVldCwgKHJ1bGUsIHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBydWxlLmRlY2xhcmF0aW9ucy5mb3JFYWNoKCh7YXN5bmNLZXksIHZhcktleX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFzeW5jS2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jRGVjbGFyYXRpb25zLnNldChhc3luY0tleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyS2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhckRlY2xhcmF0aW9ucy5zZXQodmFyS2V5LCB7cnVsZSwgdGFyZ2V0LCBpbmRleH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYnVpbGRBc3luY1J1bGUoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7cnVsZSwgdGFyZ2V0LCBpbmRleH0gPSBhc3luY0RlY2xhcmF0aW9ucy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kZWxldGVSdWxlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSk7XHJcbiAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9ucy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWJ1aWxkVmFyUnVsZShrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtydWxlLCB0YXJnZXQsIGluZGV4fSA9IHZhckRlY2xhcmF0aW9ucy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kZWxldGVSdWxlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVpbGRTdHlsZVNoZWV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7bW9kaWZ5U2hlZXQsIHNob3VsZFJlYnVpbGRTdHlsZX07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNhblVzZVNoZWV0UHJveHkkMSA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIixcclxuICAgICAgICAoKSA9PiAoY2FuVXNlU2hlZXRQcm94eSQxID0gdHJ1ZSksXHJcbiAgICAgICAge29uY2U6IHRydWV9XHJcbiAgICApO1xyXG4gICAgY29uc3Qgb3ZlcnJpZGVzJDEgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3Qgb3ZlcnJpZGVzQnlTb3VyY2UgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2FuSGF2ZUFkb3B0ZWRTdHlsZVNoZWV0cyhub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRvcHRlZFN0eWxlU2hlZXRPdmVycmlkZShub2RlKSB7XHJcbiAgICAgICAgbGV0IGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGl0ZXJhdGVTb3VyY2VTaGVldHMoaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuZm9yRWFjaCgoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghb3ZlcnJpZGVzJDEuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKHNoZWV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmluZVNoZWV0U2NvcGUoc2hlZXQsIG5vZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0U2hlZXQoc2hlZXQsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoZWV0cyA9IFsuLi5ub2RlLmFkb3B0ZWRTdHlsZVNoZWV0c107XHJcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0SW5kZXggPSBuZXdTaGVldHMuaW5kZXhPZihzaGVldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJyaWRlSW5kZXggPSBuZXdTaGVldHMuaW5kZXhPZihvdmVycmlkZSk7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1NoZWV0cy5zcGxpY2Uob3ZlcnJpZGVJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3U2hlZXRzLnNwbGljZShzaGVldEluZGV4ICsgMSwgMCwgb3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5ld1NoZWV0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoZWV0cyA9IFsuLi5ub2RlLmFkb3B0ZWRTdHlsZVNoZWV0c107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdTaGVldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3U2hlZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcyQxLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGVldHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5sZW5ndGggIT09IG5ld1NoZWV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gbmV3U2hlZXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvdXJjZVNoZWV0cyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgICAgIHNvdXJjZURlY2xhcmF0aW9ucyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsZWFuZXJzID0gW107XHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgY2xlYW5lcnMuZm9yRWFjaCgoYykgPT4gYygpKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICBjbGVhcigpO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcnVsZXNDaGFuZ2VLZXkgPSAwO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzQ2hhbmdlS2V5KCkge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBpdGVyYXRlU291cmNlU2hlZXRzKChzaGVldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnQgKz0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlID0gbm9kZS5hZG9wdGVkU3R5bGVTaGVldHNbMF0uY3NzUnVsZXNbMF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSA/IHJ1bGUuc3R5bGUubGVuZ3RoIDogY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc291cmNlU2hlZXRzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICBsZXQgc291cmNlRGVjbGFyYXRpb25zID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICBmdW5jdGlvbiByZW5kZXIodGhlbWUsIGlnbm9yZUltYWdlQW5hbHlzaXMpIHtcclxuICAgICAgICAgICAgY2xlYXIoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcyQxLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNvdXJjZVNoZWV0cy5hZGQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZHlPdmVycmlkZSA9IG92ZXJyaWRlc0J5U291cmNlLmdldChzaGVldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVhZHlPdmVycmlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzQ2hhbmdlS2V5ID0gZ2V0UnVsZXNDaGFuZ2VLZXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmplY3RTaGVldChzaGVldCwgcmVhZHlPdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlcyA9IHNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzQnlTb3VyY2Uuc2V0KHNoZWV0LCBvdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZXMsIChydWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZURlY2xhcmF0aW9ucy5hZGQocnVsZS5zdHlsZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVwYXJlU2hlZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG92ZXJyaWRlLmNzc1J1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlLmRlbGV0ZVJ1bGUoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlLmluc2VydFJ1bGUoXCIjX19kYXJrcmVhZGVyX19hZG9wdGVkT3ZlcnJpZGUge31cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5qZWN0U2hlZXQoc2hlZXQsIG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZXMkMS5hZGQob3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdmVycmlkZTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldE1vZGlmaWVyID0gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICBzaGVldE1vZGlmaWVyLm1vZGlmeVNoZWV0KHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlQ1NTUnVsZXM6IHJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQ6ICgpID0+IGNhbmNlbEFzeW5jT3BlcmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcnVsZXNDaGFuZ2VLZXkgPSBnZXRSdWxlc0NoYW5nZUtleSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FsbGJhY2tSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVBcnJheUNoYW5nZShjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tSZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFja1JlcXVlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldHMgPSBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKHMpID0+ICFvdmVycmlkZXMkMS5oYXMocylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzaGVldHMuZm9yRWFjaCgoc2hlZXQpID0+IG92ZXJyaWRlc0J5U291cmNlLmRlbGV0ZShzaGVldCkpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc2hlZXRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJ1bGVzQ2hhbmdlS2V5KCkgIT09IHJ1bGVzQ2hhbmdlS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hVc2luZ1JBRihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYW5Vc2VTaGVldFByb3h5JDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JVcGRhdGVzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBcnJheUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3YXRjaFVzaW5nUkFGKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNoZWV0Q2hhbmdlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBjbGVhbmVycy5wdXNoKCgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjb25zdCBvbkFkb3B0ZWRTaGVldHNDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW5Vc2VTaGVldFByb3h5JDEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQXJyYXlDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBhZGRTaGVldENoYW5nZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRzQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYWRkU2hlZXRDaGFuZ2VFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZVNoZWV0Q2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYWRkU2hlZXRDaGFuZ2VFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZURlY2xhcmF0aW9uQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGNhblVzZVNoZWV0UHJveHkkMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdhdGNoVXNpbmdSQUYoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZW5kZXIsXHJcbiAgICAgICAgICAgIGRlc3Ryb3ksXHJcbiAgICAgICAgICAgIHdhdGNoXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNsYXNzIFN0eWxlU2hlZXRDb21tYW5kQnVpbGRlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnNlcnRSdWxlKGNzc1RleHQsIGluZGV4ID0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goe3R5cGU6IFwiaW5zZXJ0XCIsIGluZGV4LCBjc3NUZXh0fSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuc3BsaWNlKGluZGV4LCAwLCBuZXcgU3R5bGVTaGVldENvbW1hbmRCdWlsZGVyKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKHt0eXBlOiBcImRlbGV0ZVwiLCBpbmRleH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNzc1J1bGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcGxhY2VTeW5jKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaCh7dHlwZTogXCJyZXBsYWNlXCIsIGNzc1RleHR9KTtcclxuICAgICAgICAgICAgaWYgKGNzc1RleHQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3R5bGVTaGVldENvbW1hbmRCdWlsZGVyLnJlcGxhY2VTeW5jKCkgaXMgbm90IGZ1bGx5IHN1cHBvcnRlZFwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldERlZXBDU1NDb21tYW5kcygpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVlcCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlZXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogY29tbWFuZC50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc1RleHQ6IGNvbW1hbmQudHlwZSAhPT0gXCJkZWxldGVcIiA/IGNvbW1hbmQuY3NzVGV4dCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY29tbWFuZC50eXBlID09PSBcInJlcGxhY2VcIiA/IFtdIDogW2NvbW1hbmQuaW5kZXhdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuZm9yRWFjaCgocnVsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDb21tYW5kcyA9IHJ1bGUuZ2V0RGVlcENTU0NvbW1hbmRzKCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZENvbW1hbmRzLmZvckVhY2goKGMpID0+IGMucGF0aC51bnNoaWZ0KGkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWVwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhckRlZXBDU1NDb21tYW5kcygpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuZm9yRWFjaCgocnVsZSkgPT4gcnVsZS5jbGVhckRlZXBDU1NDb21tYW5kcygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldEZhbGxiYWNrKCkge1xyXG4gICAgICAgIGxldCBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBidWlsZGVyID0gbmV3IFN0eWxlU2hlZXRDb21tYW5kQnVpbGRlcigpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcihvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXBhcmVTaGVldCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIucmVwbGFjZVN5bmMoXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgc2hlZXRNb2RpZmllciA9IGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpO1xyXG4gICAgICAgICAgICBzaGVldE1vZGlmaWVyLm1vZGlmeVNoZWV0KHtcclxuICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldCxcclxuICAgICAgICAgICAgICAgIHNvdXJjZUNTU1J1bGVzOiBvcHRpb25zLmNzc1J1bGVzLFxyXG4gICAgICAgICAgICAgICAgdGhlbWU6IG9wdGlvbnMudGhlbWUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzOiBvcHRpb25zLmlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICBmb3JjZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkOiAoKSA9PiBjYW5jZWxBc3luY09wZXJhdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNvbW1hbmRzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb21tYW5kcyA9IGJ1aWxkZXIuZ2V0RGVlcENTU0NvbW1hbmRzKCk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY2xlYXJEZWVwQ1NTQ29tbWFuZHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3JlbmRlciwgZGVzdHJveSwgY29tbWFuZHN9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG92ZXJyaWRlcyA9IHtcclxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYmdjb2xvclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJhY2tncm91bmQtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ2NvbG9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1iZ2ltYWdlXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYmFja2dyb3VuZC1pbWFnZVwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJnaW1hZ2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItYm90dG9tXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1ib3R0b21cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItbGVmdC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItbGVmdFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1sZWZ0LWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWxlZnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItcmlnaHQtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXJpZ2h0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLXRvcC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItdG9wXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLXRvcC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci10b3BcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3gtc2hhZG93XCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJveHNoYWRvd1wiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJveC1zaGFkb3dcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3hzaGFkb3dcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1jb2xvclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmaWxsXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWZpbGxcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJmaWxsXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1zdHJva2VcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJzdHJva2VcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1zdHJva2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvdXRsaW5lLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLW91dGxpbmVcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJvdXRsaW5lLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtb3V0bGluZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0b3AtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtc3RvcGNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwic3RvcC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLXN0b3Bjb2xvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNob3J0aGFuZE92ZXJyaWRlcyA9IHtcclxuICAgICAgICBcImJhY2tncm91bmRcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYmdcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXJcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXNob3J0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXNob3J0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLWJvdHRvbVwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItYm90dG9tLXNob3J0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWJvdHRvbVwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1ib3R0b20tc2hvcnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItbGVmdFwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItbGVmdC1zaG9ydFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1sZWZ0XCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWxlZnQtc2hvcnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItcmlnaHRcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXJpZ2h0LXNob3J0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXJpZ2h0LXNob3J0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLXRvcFwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItdG9wLXNob3J0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLXRvcFwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci10b3Atc2hvcnRcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvdmVycmlkZXNMaXN0ID0gT2JqZWN0LnZhbHVlcyhvdmVycmlkZXMpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFByb3BMaXN0ID0ge307XHJcbiAgICBvdmVycmlkZXNMaXN0LmZvckVhY2goXHJcbiAgICAgICAgKHtjc3NQcm9wLCBjdXN0b21Qcm9wfSkgPT4gKG5vcm1hbGl6ZWRQcm9wTGlzdFtjdXN0b21Qcm9wXSA9IGNzc1Byb3ApXHJcbiAgICApO1xyXG4gICAgY29uc3QgSU5MSU5FX1NUWUxFX0FUVFJTID0gW1xyXG4gICAgICAgIFwic3R5bGVcIixcclxuICAgICAgICBcImZpbGxcIixcclxuICAgICAgICBcInN0b3AtY29sb3JcIixcclxuICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgIFwiYmdjb2xvclwiLFxyXG4gICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICBcImJhY2tncm91bmRcIlxyXG4gICAgXTtcclxuICAgIGNvbnN0IElOTElORV9TVFlMRV9TRUxFQ1RPUiA9IElOTElORV9TVFlMRV9BVFRSUy5tYXAoXHJcbiAgICAgICAgKGF0dHIpID0+IGBbJHthdHRyfV1gXHJcbiAgICApLmpvaW4oXCIsIFwiKTtcclxuICAgIGZ1bmN0aW9uIGdldElubGluZU92ZXJyaWRlU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsT3ZlcnJpZGVzID0gb3ZlcnJpZGVzTGlzdC5jb25jYXQoXHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoc2hvcnRoYW5kT3ZlcnJpZGVzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGFsbE92ZXJyaWRlc1xyXG4gICAgICAgICAgICAubWFwKCh7ZGF0YUF0dHIsIGN1c3RvbVByb3AsIGNzc1Byb3B9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIGBbJHtkYXRhQXR0cn1dIHtgLFxyXG4gICAgICAgICAgICAgICAgICAgIGAgICR7Y3NzUHJvcH06IHZhcigke2N1c3RvbVByb3B9KSAhaW1wb3J0YW50O2AsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNvbmNhdChbXHJcbiAgICAgICAgICAgICAgICBcIltkYXRhLWRhcmtyZWFkZXItaW5saW5lLWludmVydF0ge1wiLFxyXG4gICAgICAgICAgICAgICAgXCIgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgaHVlLXJvdGF0ZSgxODBkZWcpO1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVTdHlsZUVsZW1lbnRzKHJvb3QpIHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICAgICAgaWYgKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHJvb3QubWF0Y2hlcyhJTkxJTkVfU1RZTEVfU0VMRUNUT1IpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICByb290IGluc3RhbmNlb2YgRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAoaXNTaGFkb3dEb21TdXBwb3J0ZWQgJiYgcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHx8XHJcbiAgICAgICAgICAgIHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwdXNoKHJlc3VsdHMsIHJvb3QucXVlcnlTZWxlY3RvckFsbChJTkxJTkVfU1RZTEVfU0VMRUNUT1IpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmVlT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgYXR0ck9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9ySW5saW5lU3R5bGVzKGVsZW1lbnRTdHlsZURpZENoYW5nZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcclxuICAgICAgICBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAoaG9zdCkgPT4ge1xyXG4gICAgICAgICAgICBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgICAgICBob3N0LnNoYWRvd1Jvb3QsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgIHJvb3QsXHJcbiAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodHJlZU9ic2VydmVycy5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgdHJlZU9ic2VydmVycy5nZXQocm9vdCkuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBhdHRyT2JzZXJ2ZXJzLmdldChyb290KS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpc2NvdmVyZWROb2RlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgZnVuY3Rpb24gZGlzY292ZXJOb2Rlcyhub2RlKSB7XHJcbiAgICAgICAgICAgIGdldElubGluZVN0eWxlRWxlbWVudHMobm9kZSkuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXNjb3ZlcmVkTm9kZXMuaGFzKGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyZWROb2Rlcy5hZGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlKGVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhub2RlLCAobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc2NvdmVyZWROb2Rlcy5oYXMobm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNjb3ZlcmVkTm9kZXMuYWRkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWQobi5zaGFkb3dSb290KTtcclxuICAgICAgICAgICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgICAgICAgICBuLnNoYWRvd1Jvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyZWVPYnNlcnZlciA9IGNyZWF0ZU9wdGltaXplZFRyZWVPYnNlcnZlcihyb290LCB7XHJcbiAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnM6IChfcm9vdCwge2FkZGl0aW9uc30pID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKChhZGRlZCkgPT4gZGlzY292ZXJOb2RlcyhhZGRlZCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkh1Z2VNdXRhdGlvbnM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyTm9kZXMocm9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0cmVlT2JzZXJ2ZXJzLnNldChyb290LCB0cmVlT2JzZXJ2ZXIpO1xyXG4gICAgICAgIGxldCBhdHRlbXB0Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgQVRURU1QVFNfSU5URVJWQUwgPSBnZXREdXJhdGlvbih7c2Vjb25kczogMTB9KTtcclxuICAgICAgICBjb25zdCBSRVRSWV9USU1FT1VUID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDJ9KTtcclxuICAgICAgICBjb25zdCBNQVhfQVRURU1QVFNfQ09VTlQgPSA1MDtcclxuICAgICAgICBsZXQgY2FjaGUgPSBbXTtcclxuICAgICAgICBsZXQgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICBjb25zdCBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMgPSB0aHJvdHRsZSgobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZWRUYXJnZXRzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZFRhcmdldHMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoSU5MSU5FX1NUWUxFX0FUVFJTLmluY2x1ZGVzKG0uYXR0cmlidXRlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVkVGFyZ2V0cy5hZGQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGF0dHJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGUucHVzaCguLi5tdXRhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF0dGVtcHRDb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ZW1wdENvdW50ID49IE1BWF9BVFRFTVBUU19DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdyAtIHN0YXJ0IDwgQVRURU1QVFNfSU5URVJWQUwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0Q291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVDYWNoZSA9IGNhY2hlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMoYXR0cmlidXRlQ2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFJFVFJZX1RJTUVPVVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2goLi4ubXV0YXRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5vdztcclxuICAgICAgICAgICAgICAgIGF0dGVtcHRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKG11dGF0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVyLm9ic2VydmUocm9vdCwge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IElOTElORV9TVFlMRV9BVFRSUy5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZXNMaXN0Lm1hcCgoe2RhdGFBdHRyfSkgPT4gZGF0YUF0dHIpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXJzLnNldChyb290LCBhdHRyT2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9ySW5saW5lU3R5bGVzKCkge1xyXG4gICAgICAgIHRyZWVPYnNlcnZlcnMuZm9yRWFjaCgobykgPT4gby5kaXNjb25uZWN0KCkpO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlcnMuZm9yRWFjaCgobykgPT4gby5kaXNjb25uZWN0KCkpO1xyXG4gICAgICAgIHRyZWVPYnNlcnZlcnMuY2xlYXIoKTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbmxpbmVTdHlsZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGNvbnN0IHN2Z0ludmVyc2lvbkNhY2hlID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IHN2Z0FuYWx5c2lzQ29uZGl0aW9uQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgY29uc3QgdGhlbWVQcm9wcyA9IFtcImJyaWdodG5lc3NcIiwgXCJjb250cmFzdFwiLCBcImdyYXlzY2FsZVwiLCBcInNlcGlhXCIsIFwibW9kZVwiXTtcclxuICAgIGZ1bmN0aW9uIHNob3VsZEFuYWx5emVTVkdBc0ltYWdlKHN2Zykge1xyXG4gICAgICAgIGlmIChzdmdBbmFseXNpc0NvbmRpdGlvbkNhY2hlLmhhcyhzdmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdmdBbmFseXNpc0NvbmRpdGlvbkNhY2hlLmdldChzdmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaG91bGRBbmFseXplID0gQm9vbGVhbihcclxuICAgICAgICAgICAgc3ZnICYmXHJcbiAgICAgICAgICAgICAgICAoc3ZnLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpPy5pbmNsdWRlcyhcImxvZ29cIikgfHxcclxuICAgICAgICAgICAgICAgICAgICBzdmcucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik/LmluY2x1ZGVzKFwibG9nb1wiKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHN2Z0FuYWx5c2lzQ29uZGl0aW9uQ2FjaGUuc2V0KHN2Zywgc2hvdWxkQW5hbHl6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHNob3VsZEFuYWx5emU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVTdHlsZUNhY2hlS2V5KGVsLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBJTkxJTkVfU1RZTEVfQVRUUlMubWFwKFxyXG4gICAgICAgICAgICAoYXR0cikgPT4gYCR7YXR0cn09XCIke2VsLmdldEF0dHJpYnV0ZShhdHRyKX1cImBcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5jb25jYXQodGhlbWVQcm9wcy5tYXAoKHByb3ApID0+IGAke3Byb3B9PVwiJHt0aGVtZVtwcm9wXX1cImApKVxyXG4gICAgICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG91bGRJZ25vcmVJbmxpbmVTdHlsZShlbGVtZW50LCBzZWxlY3RvcnMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZ25vcmVkU2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoaW5nbm9yZWRTZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBpZ25vcmVJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnNcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbGVtZW50LCB0aGVtZSk7XHJcbiAgICAgICAgaWYgKGNhY2hlS2V5ID09PSBpbmxpbmVTdHlsZUNhY2hlLmdldChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVuc2V0UHJvcHMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKG92ZXJyaWRlcykpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEN1c3RvbVByb3AodGFyZ2V0Q1NTUHJvcCwgbW9kaWZpZXJDU1NQcm9wLCBjc3NWYWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kID0gZ2V0TW9kaWZpYWJsZUNTU0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJDU1NQcm9wLFxyXG4gICAgICAgICAgICAgICAgY3NzVmFsLFxyXG4gICAgICAgICAgICAgICAge3N0eWxlOiBlbGVtZW50LnN0eWxlfSxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICghbW9kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0U3RhdGljVmFsdWUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtjdXN0b21Qcm9wLCBkYXRhQXR0cn0gPVxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlc1t0YXJnZXRDU1NQcm9wXSA/P1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3J0aGFuZE92ZXJyaWRlc1t0YXJnZXRDU1NQcm9wXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY3VzdG9tUHJvcCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShkYXRhQXR0cikpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShkYXRhQXR0ciwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bnNldFByb3BzLmRlbGV0ZSh0YXJnZXRDU1NQcm9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRWYXJEZWNsYXJhdGlvbihtb2QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmV2RGVjbGFyYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRQcm9wcyhkZWNsYXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2RGVjbGFyYXRpb25zLmZvckVhY2goKHtwcm9wZXJ0eX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLmZvckVhY2goKHtwcm9wZXJ0eSwgdmFsdWV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZEZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9wcyhtb2QuZGVjbGFyYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIG1vZC5vblR5cGVDaGFuZ2UuYWRkTGlzdGVuZXIoc2V0UHJvcHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldEFzeW5jVmFsdWUocHJvbWlzZSwgc291cmNlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldENTU1Byb3AgPT09IFwiYmFja2dyb3VuZFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN0YXJ0c1dpdGgoXCJ2YXIoLS1kYXJrcmVhZGVyLWJnLS1cIilcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGljVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdGFyZ2V0Q1NTUHJvcCA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9PT0gc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRpY1ZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lU3R5bGVDYWNoZS5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWxlbWVudCwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBtb2QudmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IG1vZC52YWx1ZSh0aGVtZSkgOiBtb2QudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRpY1ZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIHNldEFzeW5jVmFsdWUodmFsdWUsIGNzc1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYXJEZWNsYXJhdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlnbm9yZUlubGluZVNlbGVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmVJbmxpbmVTdHlsZShlbGVtZW50LCBpZ25vcmVJbmxpbmVTZWxlY3RvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldFByb3BzLmZvckVhY2goKGNzc1Byb3ApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZXNbY3NzUHJvcF0uZGF0YUF0dHIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNTVkdFbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc3ZnID0gaXNTVkdFbGVtZW50XHJcbiAgICAgICAgICAgID8gKGVsZW1lbnQub3duZXJTVkdFbGVtZW50ID8/XHJcbiAgICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50ID8gZWxlbWVudCA6IG51bGwpKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKGlzU1ZHRWxlbWVudCAmJiB0aGVtZS5tb2RlID09PSAxICYmIHN2Zykge1xyXG4gICAgICAgICAgICBpZiAoc3ZnSW52ZXJzaW9uQ2FjaGUuaGFzKHN2ZykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQW5hbHl6ZVNWR0FzSW1hZ2Uoc3ZnKSkge1xyXG4gICAgICAgICAgICAgICAgc3ZnSW52ZXJzaW9uQ2FjaGUuYWRkKHN2Zyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmFseXplU1ZHQXNJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ZnU3RyaW5nID0gc3ZnLm91dGVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICBzdmdTdHJpbmcgPSBzdmdTdHJpbmcucmVwbGFjZUFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzdHlsZSBjbGFzcz1cImRhcmtyZWFkZXIgZGFya3JlYWRlci0tc3luY1wiIG1lZGlhPVwic2NyZWVuXCI+PC9zdHlsZT4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhVVJMID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtidG9hKHN2Z1N0cmluZyl9YDtcclxuICAgICAgICAgICAgICAgICAgICBnZXRJbWFnZURldGFpbHMoZGF0YVVSTCkudGhlbigoZGV0YWlscykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGV0YWlscy5pc0RhcmsgJiYgZGV0YWlscy5pc1RyYW5zcGFyZW50KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRldGFpbHMuaXNMYXJnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHMuaXNMaWdodCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkZXRhaWxzLmlzVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtaW52ZXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5yZW1vdmVBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWludmVydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYW5hbHl6ZVNWR0FzSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRE9NUmVhZHlMaXN0ZW5lcihhbmFseXplU1ZHQXNJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYmdjb2xvclwiKSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImJnY29sb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17M30kL2kpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezZ9JC9pKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gYCMke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImJhY2tncm91bmQtY29sb3JcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImJhY2tncm91bmRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gZ2V0QWJzb2x1dGVVUkwoXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJiYWNrZ3JvdW5kXCIpID8/IFwiXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBgdXJsKFwiJHt1cmx9XCIpYDtcclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiY29sb3JcIikgJiYgZWxlbWVudC5yZWwgIT09IFwibWFzay1pY29uXCIpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb2xvclwiKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXszfSQvaSkgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17Nn0kL2kpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgIyR7dmFsdWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiY29sb3JcIiwgXCJjb2xvclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1NWR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZmlsbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgU01BTExfU1ZHX0xJTUlUID0gMzI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZmlsbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZVNWR0VsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0JnID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA+IFNNQUxMX1NWR19MSU1JVCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA+IFNNQUxMX1NWR19MSU1JVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCZyA/IFwiYmFja2dyb3VuZC1jb2xvclwiIDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZWFkeVN0YXRlQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU1ZHRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXIoaGFuZGxlU1ZHRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiZmlsbFwiLCBcImNvbG9yXCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwic3RvcC1jb2xvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgICAgICBcInN0b3AtY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0b3AtY29sb3JcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwic3Ryb2tlXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHJva2VcIik7XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR0xpbmVFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnN0eWxlICYmXHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoZWxlbWVudC5zdHlsZSwgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIiAmJiB2YWx1ZS5pbmNsdWRlcyhcInVybFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChwcm9wZXJ0eSwgcHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAocHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpICYmICFub3JtYWxpemVkUHJvcExpc3RbcHJvcGVydHldKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChwcm9wZXJ0eSwgcHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRoYW5kT3ZlcnJpZGVzW3Byb3BlcnR5XSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwidmFyKFwiKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChwcm9wZXJ0eSwgcHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGRlblByb3AgPSBub3JtYWxpemVkUHJvcExpc3RbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGRlblByb3AgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShvdmVycmlkZGVuUHJvcCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuaGFzQXR0cmlidXRlKG92ZXJyaWRkZW5Qcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZGVuUHJvcCA9PT0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYmdjb2xvclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5maWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICBcImZpbGxcIixcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZpbGxcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik/LmluY2x1ZGVzKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkSW5saW5lU3R5bGVGb3JNYXRjaGluZyhlbGVtZW50LnN0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yRWFjaCh1bnNldFByb3BzLCAoY3NzUHJvcCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZXNbY3NzUHJvcF0uZGF0YUF0dHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlubGluZVN0eWxlQ2FjaGUuc2V0KGVsZW1lbnQsIGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWxlbWVudCwgdGhlbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXRhVGhlbWVDb2xvck5hbWUgPSBcInRoZW1lLWNvbG9yXCI7XHJcbiAgICBjb25zdCBtZXRhVGhlbWVDb2xvclNlbGVjdG9yID0gYG1ldGFbbmFtZT1cIiR7bWV0YVRoZW1lQ29sb3JOYW1lfVwiXWA7XHJcbiAgICBsZXQgc3JjTWV0YVRoZW1lQ29sb3IgPSBudWxsO1xyXG4gICAgbGV0IG9ic2VydmVyID0gbnVsbDtcclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG1ldGEsIHRoZW1lKSB7XHJcbiAgICAgICAgc3JjTWV0YVRoZW1lQ29sb3IgPSBzcmNNZXRhVGhlbWVDb2xvciB8fCBtZXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHNyY01ldGFUaGVtZUNvbG9yKTtcclxuICAgICAgICBpZiAoIWNvbG9yKSB7XHJcbiAgICAgICAgICAgIGxvZ1dhcm4oXCJJbnZhbGlkIG1ldGEgY29sb3JcIiwgY29sb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGEuY29udGVudCA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihjb2xvciwgdGhlbWUsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1ldGFUaGVtZUNvbG9yV2hlbkF2YWlsYWJsZSh0aGVtZSkge1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1ldGFUaGVtZUNvbG9yU2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChtZXRhKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG1ldGEsIHRoZW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvb3A6IGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2FkZGVkTm9kZXN9ID0gbXV0YXRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWRkZWROb2Rlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gYWRkZWROb2Rlc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5uYW1lID09PSBtZXRhVGhlbWVDb2xvck5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNZXRhVGhlbWVDb2xvcihub2RlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5oZWFkLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzdG9yZU1ldGFUaGVtZUNvbG9yKCkge1xyXG4gICAgICAgIGlmIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWV0YVRoZW1lQ29sb3JTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKG1ldGEgJiYgc3JjTWV0YVRoZW1lQ29sb3IpIHtcclxuICAgICAgICAgICAgbWV0YS5jb250ZW50ID0gc3JjTWV0YVRoZW1lQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzc0NvbW1lbnRzUmVnZXggPSAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy9nO1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ1NTQ29tbWVudHMoY3NzVGV4dCkge1xyXG4gICAgICAgIHJldHVybiBjc3NUZXh0LnJlcGxhY2UoY3NzQ29tbWVudHNSZWdleCwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNhblVzZVNoZWV0UHJveHkgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIsXHJcbiAgICAgICAgKCkgPT4gKGNhblVzZVNoZWV0UHJveHkgPSB0cnVlKSxcclxuICAgICAgICB7b25jZTogdHJ1ZX1cclxuICAgICk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTaGVldFdhdGNoZXIoXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBzYWZlR2V0U2hlZXRSdWxlcyxcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHJhZlNoZWV0V2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXMoKSB7XHJcbiAgICAgICAgICAgIHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpO1xyXG4gICAgICAgICAgICBpZiAoIShjYW5Vc2VTaGVldFByb3h5ICYmIGVsZW1lbnQuc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByYWZTaGVldFdhdGNoZXIgPSBjcmVhdGVSQUZTaGVldFdhdGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBzYWZlR2V0U2hlZXRSdWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJhZlNoZWV0V2F0Y2hlci5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TaGVldENoYW5nZSgpIHtcclxuICAgICAgICAgICAgY2FuVXNlU2hlZXRQcm94eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJhZlNoZWV0V2F0Y2hlcj8uc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAoYXJlU2hlZXRDaGFuZ2VzUGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNoZWV0Q2hhbmdlcygpIHtcclxuICAgICAgICAgICAgICAgIGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0NhbmNlbGxlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soaGFuZGxlU2hlZXRDaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fdXBkYXRlU2hlZXRcIixcclxuICAgICAgICAgICAgICAgIG9uU2hlZXRDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0XCIsXHJcbiAgICAgICAgICAgICAgICBvblNoZWV0Q2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlcygpIHtcclxuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpO1xyXG4gICAgICAgICAgICByYWZTaGVldFdhdGNoZXI/LnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnQ6IHdhdGNoRm9yU2hlZXRDaGFuZ2VzLFxyXG4gICAgICAgICAgICBzdG9wOiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUkFGU2hlZXRXYXRjaGVyKFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgc2FmZUdldFNoZWV0UnVsZXMsXHJcbiAgICAgICAgY2FsbGJhY2ssXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIGxldCBydWxlc0NoYW5nZUtleSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJ1bGVzQ2hlY2tGcmFtZUlkID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc0NoYW5nZUtleSgpIHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBzYWZlR2V0U2hlZXRSdWxlcygpO1xyXG4gICAgICAgICAgICByZXR1cm4gcnVsZXMgPyBydWxlcy5sZW5ndGggOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaWRSdWxlc0tleUNoYW5nZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJ1bGVzQ2hhbmdlS2V5KCkgIT09IHJ1bGVzQ2hhbmdlS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCkge1xyXG4gICAgICAgICAgICBydWxlc0NoYW5nZUtleSA9IGdldFJ1bGVzQ2hhbmdlS2V5KCk7XHJcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRm9yVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsbGVkID0gaXNDYW5jZWxsZWQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkICYmIGRpZFJ1bGVzS2V5Q2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlc0NoYW5nZUtleSA9IGdldFJ1bGVzQ2hhbmdlS2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxsZWQgfHwgKGNhblVzZVNoZWV0UHJveHkgJiYgZWxlbWVudC5zaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1bGVzQ2hlY2tGcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrRm9yVXBkYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2hlY2tGb3JVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKSB7XHJcbiAgICAgICAgICAgIHJ1bGVzQ2hlY2tGcmFtZUlkICYmIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJ1bGVzQ2hlY2tGcmFtZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnQ6IHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYsXHJcbiAgICAgICAgICAgIHN0b3A6IHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTVFlMRV9TRUxFQ1RPUiA9ICdzdHlsZSwgbGlua1tyZWwqPVwic3R5bGVzaGVldFwiIGldOm5vdChbZGlzYWJsZWRdKSc7XHJcbiAgICBmdW5jdGlvbiBpc0ZvbnRzR29vZ2xlQXBpU3R5bGUoZWxlbWVudCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudC5ocmVmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudFVSTCA9IG5ldyBVUkwoZWxlbWVudC5ocmVmKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRVUkwuaG9zdG5hbWUgPT09IFwiZm9udHMuZ29vZ2xlYXBpcy5jb21cIjtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbG9nSW5mbyhgQ291bGRuJ3QgY29uc3RydWN0ICR7ZWxlbWVudC5ocmVmfSBhcyBVUkxgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhvc3RzQnJlYWtpbmdPblNWR1N0eWxlT3ZlcnJpZGUgPSBbXHJcbiAgICAgICAgXCJhY2NvdW50LmNvbnRhaW5lcnN0b3JlLmNvbVwiLFxyXG4gICAgICAgIFwiY29udGFpbmVyc3RvcmUuY29tXCIsXHJcbiAgICAgICAgXCJ3d3cub25ldC5wbFwiXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gc2hvdWxkTWFuYWdlU3R5bGUoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdTdHlsZUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhaG9zdHNCcmVha2luZ09uU1ZHU3R5bGVPdmVycmlkZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICApKSB8fFxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGVsZW1lbnQucmVsKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzdHlsZXNoZWV0XCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihlbGVtZW50LmhyZWYpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuZGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAoaXNGaXJlZm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gIWVsZW1lbnQuaHJlZi5zdGFydHNXaXRoKFwibW96LWV4dGVuc2lvbjovL1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWlzRm9udHNHb29nbGVBcGlTdHlsZShlbGVtZW50KSkpICYmXHJcbiAgICAgICAgICAgICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtyZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5tZWRpYS50b0xvd2VyQ2FzZSgpICE9PSBcInByaW50XCIgJiZcclxuICAgICAgICAgICAgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3R5bHVzXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSwgcmVzdWx0cyA9IFtdLCBkZWVwID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChzaG91bGRNYW5hZ2VTdHlsZShub2RlKSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgfHxcclxuICAgICAgICAgICAgKGlzU2hhZG93RG9tU3VwcG9ydGVkICYmIG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB8fFxyXG4gICAgICAgICAgICBub2RlID09PSBkb2N1bWVudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBmb3JFYWNoKG5vZGUucXVlcnlTZWxlY3RvckFsbChTVFlMRV9TRUxFQ1RPUiksIChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgIGdldE1hbmFnZWFibGVTdHlsZXMoc3R5bGUsIHJlc3VsdHMsIGZhbHNlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUsIChob3N0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGdldE1hbmFnZWFibGVTdHlsZXMoaG9zdC5zaGFkb3dSb290LCByZXN1bHRzLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzeW5jU3R5bGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgY29yc1N0eWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGxldCBsb2FkaW5nTGlua0NvdW50ZXIgPSAwO1xyXG4gICAgY29uc3QgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2xlYW5Mb2FkaW5nTGlua3MoKSB7XHJcbiAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtYW5hZ2VTdHlsZShlbGVtZW50LCB7dXBkYXRlLCBsb2FkaW5nU3RhcnQsIGxvYWRpbmdFbmR9KSB7XHJcbiAgICAgICAgY29uc3QgcHJldlN0eWxlcyA9IFtdO1xyXG4gICAgICAgIGxldCBuZXh0ID0gZWxlbWVudDtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIChuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmcpICYmXHJcbiAgICAgICAgICAgIG5leHQubWF0Y2hlcyhcIi5kYXJrcmVhZGVyXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMucHVzaChuZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvcnNDb3B5ID1cclxuICAgICAgICAgICAgcHJldlN0eWxlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5tYXRjaGVzKFwiLmRhcmtyZWFkZXItLWNvcnNcIikgJiYgIWNvcnNTdHlsZVNldC5oYXMoZWwpXHJcbiAgICAgICAgICAgICkgfHwgbnVsbDtcclxuICAgICAgICBsZXQgc3luY1N0eWxlID1cclxuICAgICAgICAgICAgcHJldlN0eWxlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5tYXRjaGVzKFwiLmRhcmtyZWFkZXItLXN5bmNcIikgJiYgIXN5bmNTdHlsZVNldC5oYXMoZWwpXHJcbiAgICAgICAgICAgICkgfHwgbnVsbDtcclxuICAgICAgICBsZXQgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNPdmVycmlkZUVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBpc0FzeW5jQ2FuY2VsbGVkID0gKCkgPT4gY2FuY2VsQXN5bmNPcGVyYXRpb25zO1xyXG4gICAgICAgIGNvbnN0IHNoZWV0TW9kaWZpZXIgPSBjcmVhdGVTdHlsZVNoZWV0TW9kaWZpZXIoKTtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbXV0YXRpb25zLnNvbWUoKG0pID0+IG0udHlwZSA9PT0gXCJjaGFyYWN0ZXJEYXRhXCIpICYmXHJcbiAgICAgICAgICAgICAgICBjb250YWluc0NTU0ltcG9ydCgpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3NzVGV4dCA9IChlbGVtZW50LnRleHRDb250ZW50ID8/IFwiXCIpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZU9yVXBkYXRlQ09SU0NvcHkoY3NzVGV4dCwgbG9jYXRpb24uaHJlZikudGhlbih1cGRhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gY29udGFpbnNDU1NJbXBvcnQoKSB7XHJcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1RleHQgPSByZW1vdmVDU1NDb21tZW50cyhlbGVtZW50LnRleHRDb250ZW50ID8/IFwiXCIpLnRyaW0oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNzc1RleHQubWF0Y2goY3NzSW1wb3J0UmVnZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYXNJbXBvcnRzKGNzc1J1bGVzLCBjaGVja0Nyb3NzT3JpZ2luKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcnVsZTtcclxuICAgICAgICAgICAgICAgIGNzc1J1bGVzTG9vcDogZm9yIChcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDAsIGxlbiA9IGNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpIDwgbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZSA9IGNzc1J1bGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLmhyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ3Jvc3NPcmlnaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcnVsZS5ocmVmLnN0YXJ0c1dpdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmhyZWYuc3RhcnRzV2l0aChcImh0dHBcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcnVsZS5ocmVmLnN0YXJ0c1dpdGgobG9jYXRpb24ub3JpZ2luKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBjc3NSdWxlc0xvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgY3NzUnVsZXNMb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzU3luYygpIHtcclxuICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yc0NvcHkuc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zQ1NTSW1wb3J0KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1J1bGVzID0gc2FmZUdldFNoZWV0UnVsZXMoKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgIWlzUmVsYXRpdmVIcmVmT25BYnNvbHV0ZVBhdGgoZWxlbWVudC5ocmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgaGFzSW1wb3J0cyhjc3NSdWxlcywgZmFsc2UpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhhc0ltcG9ydHMoY3NzUnVsZXMsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAhY3NzUnVsZXMgJiZcclxuICAgICAgICAgICAgICAgIGxvZ1dhcm4oXCJbZ2V0UnVsZXNTeW5jXSBjc3NSdWxlcyBpcyBudWxsLCB0cnlpbmcgYWdhaW4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGluc2VydFN0eWxlKCkge1xyXG4gICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nICE9PSBjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5leHRTaWJsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3JzQ29weS5uZXh0U2libGluZyAhPT0gc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weS5uZXh0U2libGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5uZXh0U2libGluZyAhPT0gc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN5bmNTdHlsZSwgZWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3luY1N0eWxlKCkge1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUgPVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1N0eWxlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXItLXN5bmNcIik7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZS5tZWRpYSA9IFwic2NyZWVuXCI7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBzeW5jU3R5bGUudGl0bGUgPSBlbGVtZW50LnRpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZVNldC5hZGQoc3luY1N0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHdhc0xvYWRpbmdFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmdMaW5rSWQgPSArK2xvYWRpbmdMaW5rQ291bnRlcjtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRSdWxlc0FzeW5jKCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzVGV4dDtcclxuICAgICAgICAgICAgbGV0IGNzc0Jhc2VQYXRoO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtjc3NSdWxlcywgYWNjZXNzRXJyb3JdID0gZ2V0UnVsZXNPckVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKGFjY2Vzc0Vycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAoaXNTYWZhcmkgJiYgIWVsZW1lbnQuc2hlZXQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCFpc1NhZmFyaSAmJiAhY3NzUnVsZXMgJiYgIWFjY2Vzc0Vycm9yKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU3RpbGxMb2FkaW5nRXJyb3IoYWNjZXNzRXJyb3IpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYExpbmtlbGVtZW50ICR7bG9hZGluZ0xpbmtJZH0gaXMgbm90IGxvYWRlZCB5ZXQgYW5kIHRodXMgd2lsbCBiZSBhd2FpdCBmb3JgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBsaW5rTG9hZGluZyhlbGVtZW50LCBsb2FkaW5nTGlua0lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nV2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNMb2FkaW5nRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBbY3NzUnVsZXMsIGFjY2Vzc0Vycm9yXSA9IGdldFJ1bGVzT3JFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2Nlc3NFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKGFjY2Vzc0Vycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0ltcG9ydHMoY3NzUnVsZXMsIGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3NzVGV4dCA9IGF3YWl0IGxvYWRUZXh0KGVsZW1lbnQuaHJlZik7XHJcbiAgICAgICAgICAgICAgICBjc3NCYXNlUGF0aCA9IGdldENTU0Jhc2VCYXRoKGVsZW1lbnQuaHJlZik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbnNDU1NJbXBvcnQoKSkge1xyXG4gICAgICAgICAgICAgICAgY3NzVGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgY3NzQmFzZVBhdGggPSBnZXRDU1NCYXNlQmF0aChsb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZU9yVXBkYXRlQ09SU0NvcHkoY3NzVGV4dCwgY3NzQmFzZVBhdGgpO1xyXG4gICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3JzQ29weS5zaGVldC5jc3NSdWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVDT1JTQ29weShjc3NUZXh0LCBjc3NCYXNlUGF0aCkge1xyXG4gICAgICAgICAgICBpZiAoY3NzVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmdWxsQ1NTVGV4dCA9IGF3YWl0IHJlcGxhY2VDU1NJbXBvcnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NCYXNlUGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb3JzQ29weS50ZXh0Q29udGVudD8ubGVuZ3RoID8/IDApIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxDU1NUZXh0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5LnRleHRDb250ZW50ID0gZnVsbENTU1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weSA9IGNyZWF0ZUNPUlNDb3B5KGVsZW1lbnQsIGZ1bGxDU1NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciA9IHdhdGNoRm9yTm9kZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2LXNpYmxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGV0YWlscyhvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gZ2V0UnVsZXNTeW5jKCk7XHJcbiAgICAgICAgICAgIGlmICghcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlY29uZFJvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nV2FybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJEZXRlY3RlZCBkZWFkLWxvY2sgYXQgZGV0YWlscygpLCByZXR1cm5pbmcgZWFybHkgdG8gcHJldmVudCBpdC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nUnVsZXMgfHwgd2FzTG9hZGluZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdSdWxlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nU3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGdldFJ1bGVzQXN5bmMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7cnVsZXN9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZm9yY2VSZW5kZXJTdHlsZSA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcih0aGVtZSwgaWdub3JlSW1hZ2VBbmFseXNpcykge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IGdldFJ1bGVzU3luYygpO1xyXG4gICAgICAgICAgICBpZiAoIXJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNTU1J1bGVzRnJvbVNoZWV0KHNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQuZGVsZXRlUnVsZShpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmVwYXJlT3ZlcnJpZGVzU2hlZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVN5bmNTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN5bmNTdHlsZS5zaGVldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gc3luY1N0eWxlLnNoZWV0O1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ1NTUnVsZXNGcm9tU2hlZXQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyID0gd2F0Y2hGb3JOb2RlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2LXNpYmxpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VSZW5kZXJTdHlsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZE92ZXJyaWRlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzeW5jU3R5bGUuc2hlZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gYnVpbGRPdmVycmlkZXMoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JjZSA9IGZvcmNlUmVuZGVyU3R5bGU7XHJcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaGVldE1vZGlmaWVyLm1vZGlmeVNoZWV0KHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQ6IHByZXBhcmVPdmVycmlkZXNTaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VDU1NSdWxlczogcnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlzT3ZlcnJpZGVFbXB0eSA9IHN5bmNTdHlsZS5zaGVldC5jc3NSdWxlcy5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRNb2RpZmllci5zaG91bGRSZWJ1aWxkU3R5bGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHVwZGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWlsZE92ZXJyaWRlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc09yRXJyb3IoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zaGVldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBudWxsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbZWxlbWVudC5zaGVldC5jc3NSdWxlcywgbnVsbF07XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBlcnJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzU3RpbGxMb2FkaW5nRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yICYmIGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcImxvYWRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNhZmVHZXRTaGVldFJ1bGVzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBbY3NzUnVsZXMsIGVycl0gPSBnZXRSdWxlc09yRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgbG9nV2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaGVldENoYW5nZVdhdGNoZXIgPSBjcmVhdGVTaGVldFdhdGNoZXIoXHJcbiAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgIHNhZmVHZXRTaGVldFJ1bGVzLFxyXG4gICAgICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBhdXNlKCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyICYmIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNoZWV0Q2hhbmdlV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIHBhdXNlKCk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoY29yc0NvcHkpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHN5bmNTdHlsZSk7XHJcbiAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgaWYgKHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5oYXMobG9hZGluZ0xpbmtJZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlamVjdCA9IHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5nZXQobG9hZGluZ0xpbmtJZCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZGVsZXRlKGxvYWRpbmdMaW5rSWQpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0ICYmIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoKCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc2hlZXRDaGFuZ2VXYXRjaGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF4TW92ZUNvdW50ID0gMTA7XHJcbiAgICAgICAgbGV0IG1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzdG9yZSgpIHtcclxuICAgICAgICAgICAgaWYgKCFzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb3ZlQ291bnQrKztcclxuICAgICAgICAgICAgaWYgKG1vdmVDb3VudCA+IG1heE1vdmVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgbG9nV2FybihcIlN0eWxlIHNoZWV0IHdhcyBtb3ZlZCBtdWx0aXBsZSB0aW1lc1wiLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dXYXJuKFwiUmVzdG9yZSBzdHlsZVwiLCBzeW5jU3R5bGUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpbnNlcnRTdHlsZSgpO1xyXG4gICAgICAgICAgICBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciAmJiBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlci5za2lwKCk7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciAmJiBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIuc2tpcCgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzT3ZlcnJpZGVFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXJTdHlsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzLFxyXG4gICAgICAgICAgICByZW5kZXIsXHJcbiAgICAgICAgICAgIHBhdXNlLFxyXG4gICAgICAgICAgICBkZXN0cm95LFxyXG4gICAgICAgICAgICB3YXRjaCxcclxuICAgICAgICAgICAgcmVzdG9yZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaW5rTG9hZGluZyhsaW5rLCBsb2FkaW5nSWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbGVhblVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluay5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgbGluay5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZGVsZXRlKGxvYWRpbmdJZCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICBgTGlua2VsZW1lbnQgJHtsb2FkaW5nSWR9IGNvdWxkbid0IGJlIGxvYWRlZC4gJHtsaW5rLmhyZWZ9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLnNldChsb2FkaW5nSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWQsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGlmICghbGluay5ocmVmKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENTU0ltcG9ydFVSTChpbXBvcnREZWNsYXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBnZXRDU1NVUkxWYWx1ZShcclxuICAgICAgICAgICAgaW1wb3J0RGVjbGFyYXRpb25cclxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoNylcclxuICAgICAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC87JC8sIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvc2NyZWVuJC8sIFwiXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUZXh0KHVybCkge1xyXG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZmV0Y2godXJsKSkudGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYWNoZSA9IHJlYWRDU1NGZXRjaENhY2hlKHVybCk7XHJcbiAgICAgICAgaWYgKGNhY2hlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyc2VkVVJMID0gbmV3IFVSTCh1cmwpO1xyXG4gICAgICAgIGxldCB0ZXh0O1xyXG4gICAgICAgIGlmIChwYXJzZWRVUkwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW4pIHtcclxuICAgICAgICAgICAgdGV4dCA9IGF3YWl0IGxvYWRBc1RleHQodXJsLCBcInRleHQvY3NzXCIsIGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCA9IGF3YWl0IGJnRmV0Y2goe1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBcInRleHQvY3NzXCIsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IGxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JpdGVDU1NGZXRjaENhY2hlKHVybCwgdGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZXBsYWNlQ1NTSW1wb3J0cyhjc3NUZXh0LCBiYXNlUGF0aCwgY2FjaGUgPSBuZXcgTWFwKCkpIHtcclxuICAgICAgICBjc3NUZXh0ID0gcmVtb3ZlQ1NTQ29tbWVudHMoY3NzVGV4dCk7XHJcbiAgICAgICAgY3NzVGV4dCA9IHJlcGxhY2VDU1NGb250RmFjZShjc3NUZXh0KTtcclxuICAgICAgICBjc3NUZXh0ID0gcmVwbGFjZUNTU1JlbGF0aXZlVVJMc1dpdGhBYnNvbHV0ZShjc3NUZXh0LCBiYXNlUGF0aCk7XHJcbiAgICAgICAgY29uc3QgaW1wb3J0TWF0Y2hlcyA9IGdldE1hdGNoZXNXaXRoT2Zmc2V0cyhjc3NJbXBvcnRSZWdleCwgY3NzVGV4dCk7XHJcbiAgICAgICAgbGV0IHByZXYgPSBudWxsO1xyXG4gICAgICAgIGxldCBzaG91bGRJZ25vcmVJbXBvcnRzSW5CZXR3ZWVuID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRpZmYgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgaW1wb3J0TWF0Y2hlcykge1xyXG4gICAgICAgICAgICBsZXQgaW1wb3J0ZWRDU1M7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZJbXBvcnRFbmQgPSBwcmV2ID8gcHJldi5vZmZzZXQgKyBwcmV2LnRleHQubGVuZ3RoIDogMDtcclxuICAgICAgICAgICAgY29uc3QgbmV4dEltcG9ydFN0YXJ0ID0gbWF0Y2gub2Zmc2V0O1xyXG4gICAgICAgICAgICBjb25zdCBvcGVuQnJhY2VJbmRleCA9IGNzc1RleHQuaW5kZXhPZihcIntcIiwgcHJldkltcG9ydEVuZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnJhY2VJbmRleCA9IGNzc1RleHQuaW5kZXhPZihcIn1cIiwgcHJldkltcG9ydEVuZCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNob3VsZElnbm9yZUltcG9ydHNJbkJldHdlZW4gfHxcclxuICAgICAgICAgICAgICAgIChvcGVuQnJhY2VJbmRleCA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkJyYWNlSW5kZXggPCBuZXh0SW1wb3J0U3RhcnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJyYWNlSW5kZXggPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnJhY2VJbmRleCA8IG5leHRJbXBvcnRTdGFydClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRJZ25vcmVJbXBvcnRzSW5CZXR3ZWVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydFVSTCA9IGdldENTU0ltcG9ydFVSTChtYXRjaC50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFic29sdXRlVVJMID0gZ2V0QWJzb2x1dGVVUkwoYmFzZVBhdGgsIGltcG9ydFVSTCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaGFzKGFic29sdXRlVVJMKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gY2FjaGUuZ2V0KGFic29sdXRlVVJMKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBhd2FpdCBsb2FkVGV4dChhYnNvbHV0ZVVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChhYnNvbHV0ZVVSTCwgaW1wb3J0ZWRDU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IGF3YWl0IHJlcGxhY2VDU1NJbXBvcnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDU1NCYXNlQmF0aChhYnNvbHV0ZVVSTCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3NzVGV4dCA9XHJcbiAgICAgICAgICAgICAgICBjc3NUZXh0LnN1YnN0cmluZygwLCBtYXRjaC5vZmZzZXQgKyBkaWZmKSArXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyArXHJcbiAgICAgICAgICAgICAgICBjc3NUZXh0LnN1YnN0cmluZyhtYXRjaC5vZmZzZXQgKyBtYXRjaC50ZXh0Lmxlbmd0aCArIGRpZmYpO1xyXG4gICAgICAgICAgICBkaWZmICs9IGltcG9ydGVkQ1NTLmxlbmd0aCAtIG1hdGNoLnRleHQubGVuZ3RoO1xyXG4gICAgICAgICAgICBwcmV2ID0gbWF0Y2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gY3NzVGV4dDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNPUlNDb3B5KHNyY0VsZW1lbnQsIGNzc1RleHQpIHtcclxuICAgICAgICBpZiAoIWNzc1RleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgY29ycy5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICBjb3JzLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyLS1jb3JzXCIpO1xyXG4gICAgICAgIGNvcnMubWVkaWEgPSBcInNjcmVlblwiO1xyXG4gICAgICAgIGNvcnMudGV4dENvbnRlbnQgPSBjc3NUZXh0O1xyXG4gICAgICAgIHNyY0VsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29ycywgc3JjRWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgY29ycy5zaGVldC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29yc1N0eWxlU2V0LmFkZChjb3JzKTtcclxuICAgICAgICByZXR1cm4gY29ycztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbmplY3RQcm94eShcclxuICAgICAgICBlbmFibGVTdHlsZVNoZWV0c1Byb3h5LFxyXG4gICAgICAgIGVuYWJsZUN1c3RvbUVsZW1lbnRSZWdpc3RyeVByb3h5XHJcbiAgICApIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjbGVhbmVycyA9IFtdO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFuVXAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLmZvckVhY2goKGNsZWFuKSA9PiBjbGVhbigpKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMuc3BsaWNlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkb2N1bWVudEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLnB1c2goKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlV1BEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3c/LldQRGFya01vZGU/LmRlYWN0aXZhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuV1BEYXJrTW9kZS5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRpc2FibGVXUERhcmtNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50RXZlbnRMaXN0ZW5lcihcIl9fZGFya3JlYWRlcl9fY2xlYW5VcFwiLCBjbGVhblVwKTtcclxuICAgICAgICBkb2N1bWVudEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19kaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zXCIsXHJcbiAgICAgICAgICAgIGRpc2FibGVDb25mbGljdGluZ1BsdWdpbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIGZ1bmN0aW9uIG92ZXJyaWRlUHJvcGVydHkoY2xzLCBwcm9wLCBvdmVycmlkZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvdG8gPSBjbHMucHJvdG90eXBlO1xyXG4gICAgICAgICAgICBjb25zdCBvbGREZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgcHJvcCk7XHJcbiAgICAgICAgICAgIGlmICghb2xkRGVzY3JpcHRvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0b3IgPSB7Li4ub2xkRGVzY3JpcHRvcn07XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG92ZXJyaWRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gb3ZlcnJpZGVzW2tleV07XHJcbiAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdG9yW2tleV0gPSBmYWN0b3J5KG9sZERlc2NyaXB0b3Jba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIHByb3AsIG5ld0Rlc2NyaXB0b3IpO1xyXG4gICAgICAgICAgICBjbGVhbmVycy5wdXNoKCgpID0+XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIHByb3AsIG9sZERlc2NyaXB0b3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG92ZXJyaWRlKGNscywgcHJvcCwgZmFjdG9yeSkge1xyXG4gICAgICAgICAgICBvdmVycmlkZVByb3BlcnR5KGNscywgcHJvcCwge3ZhbHVlOiBmYWN0b3J5fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzRFJFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc0RSU2hlZXQoc2hlZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRFJFbGVtZW50KHNoZWV0Lm93bmVyTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVNoZWV0RXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0XCIpO1xyXG4gICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldENoYW5nZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRDaGFuZ2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2hhZG93RG9tQXR0YWNoaW5nRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19zaGFkb3dEb21BdHRhY2hpbmdcIixcclxuICAgICAgICAgICAge2J1YmJsZXM6IHRydWV9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRPd25lcnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGNvbnN0IGFkb3B0ZWREZWNsYXJhdGlvblNoZWV0cyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gb25BZG9wdGVkU2hlZXRDaGFuZ2Uoc2hlZXQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3duZXJzID0gYWRvcHRlZFNoZWV0T3duZXJzLmdldChzaGVldCk7XHJcbiAgICAgICAgICAgIG93bmVycz8uZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoYWRvcHRlZFNoZWV0Q2hhbmdlRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lcnMuZGVsZXRlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVwb3J0U2hlZXRDaGFuZ2Uoc2hlZXQpIHtcclxuICAgICAgICAgICAgaWYgKHNoZWV0Lm93bmVyTm9kZSAmJiAhaXNEUlNoZWV0KHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgc2hlZXQub3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFkb3B0ZWRTaGVldE93bmVycy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldENoYW5nZShzaGVldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVwb3J0U2hlZXRDaGFuZ2VBc3luYyhzaGVldCwgcHJvbWlzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7b3duZXJOb2RlfSA9IHNoZWV0O1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBvd25lck5vZGUgJiZcclxuICAgICAgICAgICAgICAgICFpc0RSU2hlZXQoc2hlZXQpICYmXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlICYmXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiBvd25lck5vZGUuZGlzcGF0Y2hFdmVudCh1cGRhdGVTaGVldEV2ZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFkb3B0ZWRTaGVldE93bmVycy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiBvbkFkb3B0ZWRTaGVldENoYW5nZShzaGVldCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LFxyXG4gICAgICAgICAgICBcImFkZFJ1bGVcIixcclxuICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChzZWxlY3Rvciwgc3R5bGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgc2VsZWN0b3IsIHN0eWxlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0U2hlZXRDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwiaW5zZXJ0UnVsZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJ1bGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuYXRpdmUuY2FsbCh0aGlzLCBydWxlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0U2hlZXRDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlUnVsZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwicmVtb3ZlUnVsZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwicmVwbGFjZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG5hdGl2ZS5jYWxsKHRoaXMsIGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlQXN5bmModGhpcywgcmV0dXJuVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LFxyXG4gICAgICAgICAgICBcInJlcGxhY2VTeW5jXCIsXHJcbiAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY3NzVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIEVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwiYXR0YWNoU2hhZG93XCIsXHJcbiAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChzaGFkb3dEb21BdHRhY2hpbmdFdmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkV3JhcEhUTUxFbGVtZW50ID1cclxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUgPT09IFwiYmFpZHUuY29tXCIgfHxcclxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUuZW5kc1dpdGgoXCIuYmFpZHUuY29tXCIpO1xyXG4gICAgICAgIGlmIChzaG91bGRXcmFwSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgXCJnZXRFbGVtZW50c0J5VGFnTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFnTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSAhPT0gXCJzdHlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlLmNhbGwodGhpcywgdGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0Q3VycmVudEVsZW1lbnRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbmF0aXZlLmNhbGwodGhpcywgdGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsuLi5lbGVtZW50c10uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWxlbWVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgJiYgIWlzRFJFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb2RlTGlzdC5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IGdldEN1cnJlbnRFbGVtZW50VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxpc3RCZWhhdmlvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF8sIHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRFbGVtZW50VmFsdWUoKVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb3BlcnR5KSB8fCBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gbmV3IFByb3h5KGVsZW1lbnRzLCBub2RlTGlzdEJlaGF2aW9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJveHlDaGlsZE5vZGVzID0gW1wiYnJpbGxpYW50Lm9yZ1wiLCBcInd3dy52eS5ub1wiXS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzaG91bGRQcm94eUNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgb3ZlcnJpZGVQcm9wZXJ0eShOb2RlLCBcImNoaWxkTm9kZXNcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5hdGl2ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLmNoaWxkTm9kZXNdLmZpbHRlcigoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNEUkVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVDdXN0b21FbGVtZW50KHRhZykge1xyXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZFwiLCB7ZGV0YWlsOiB7dGFnfX0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnRFdmVudExpc3RlbmVyKFwiX19kYXJrcmVhZGVyX19hZGRVbmRlZmluZWRSZXNvbHZlclwiLCAoZSkgPT5cclxuICAgICAgICAgICAgcmVzb2x2ZUN1c3RvbUVsZW1lbnQoZS5kZXRhaWwudGFnKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGVuYWJsZUN1c3RvbUVsZW1lbnRSZWdpc3RyeVByb3h5KSB7XHJcbiAgICAgICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LFxyXG4gICAgICAgICAgICAgICAgXCJkZWZpbmVcIixcclxuICAgICAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG5hbWUsIGNvbnN0cnVjdG9yLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVDdXN0b21FbGVtZW50KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmUuY2FsbCh0aGlzLCBuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmxvYlVSTEFsbG93ZWQgPSBudWxsO1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrQmxvYlVSTFN1cHBvcnQoKSB7XHJcbiAgICAgICAgICAgIGlmIChibG9iVVJMQWxsb3dlZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fYmxvYlVSTENoZWNrUmVzcG9uc2VcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtibG9iVVJMQWxsb3dlZH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdmcgPVxyXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIj48cmVjdCB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIgZmlsbD1cInRyYW5zcGFyZW50XCIvPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3ZnLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ZnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBieXRlc1tpXSA9IHN2Zy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnl0ZXNdLCB7dHlwZTogXCJpbWFnZS9zdmcreG1sXCJ9KTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0VVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBvYmplY3RVUkw7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJsb2JVUkxBbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBibG9iVVJMQWxsb3dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2Jsb2JVUkxDaGVja1Jlc3BvbnNlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtibG9iVVJMQWxsb3dlZH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50RXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Jsb2JVUkxDaGVja1JlcXVlc3RcIixcclxuICAgICAgICAgICAgY2hlY2tCbG9iVVJMU3VwcG9ydFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGVuYWJsZVN0eWxlU2hlZXRzUHJveHkpIHtcclxuICAgICAgICAgICAgb3ZlcnJpZGVQcm9wZXJ0eShEb2N1bWVudCwgXCJzdHlsZVNoZWV0c1wiLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRDdXJyZW50VmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2NTaGVldHMgPSBuYXRpdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2hlZXRzID0gWy4uLmRvY1NoZWV0c10uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdHlsZVNoZWV0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0Lm93bmVyTm9kZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNEUlNoZWV0KHN0eWxlU2hlZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTaGVldHMuaXRlbSA9IChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkU2hlZXRzW2l0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNoZWV0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHlsZVNoZWV0TGlzdC5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IGdldEN1cnJlbnRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZVNoZWV0TGlzdEJlaGF2aW9yID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoXywgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFZhbHVlKClbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cyA9IG5ldyBQcm94eShlbGVtZW50cywgc3R5bGVTaGVldExpc3RCZWhhdmlvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldHNTb3VyY2VQcm94aWVzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0c1Byb3h5U291cmNlcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldHNDaGFuZ2VFdmVudCA9IG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldHNDaGFuZ2VcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRPdmVycmlkZUNhY2hlID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0c1NuYXBzaG90cyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRFJBZG9wdGVkU2hlZXRPdmVycmlkZSA9IChzaGVldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzaGVldCB8fCAhc2hlZXQuY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRvcHRlZFNoZWV0T3ZlcnJpZGVDYWNoZS5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQuY3NzUnVsZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LmNzc1J1bGVzWzBdLmNzc1RleHQuc3RhcnRzV2l0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIjX19kYXJrcmVhZGVyX19hZG9wdGVkT3ZlcnJpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRTaGVldE92ZXJyaWRlQ2FjaGUuYWRkKHNoZWV0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYXJlQXJyYXlzRXF1YWwgPSAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KCh4LCBpKSA9PiB4ID09PSBiW2ldKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgb25BZG9wdGVkU2hlZXRzQ2hhbmdlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXYgPSBhZG9wdGVkU2hlZXRzU25hcHNob3RzLmdldChub2RlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnIgPSAobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgfHwgW10pLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAocykgPT4gIWlzRFJBZG9wdGVkU2hlZXRPdmVycmlkZShzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGFkb3B0ZWRTaGVldHNTbmFwc2hvdHMuc2V0KG5vZGUsIGN1cnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2IHx8ICFhcmVBcnJheXNFcXVhbChwcmV2LCBjdXJyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnIuZm9yRWFjaCgoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZG9wdGVkU2hlZXRPd25lcnMuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRvcHRlZFNoZWV0T3duZXJzLnNldChzaGVldCwgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRPd25lcnMuZ2V0KHNoZWV0KS5hZGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBzaGVldC5jc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBydWxlLnN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRvcHRlZERlY2xhcmF0aW9uU2hlZXRzLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoZWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChhZG9wdGVkU2hlZXRzQ2hhbmdlRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBwcm94eUFkb3B0ZWRTaGVldHNBcnJheSA9IChub2RlLCBzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhZG9wdGVkU2hlZXRzUHJveHlTb3VyY2VzLmhhcyhzb3VyY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZG9wdGVkU2hlZXRzU291cmNlUHJveGllcy5oYXMoc291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZG9wdGVkU2hlZXRzU291cmNlUHJveGllcy5nZXQoc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHNvdXJjZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImxlbmd0aFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2Uobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRzU291cmNlUHJveGllcy5zZXQoc291cmNlLCBwcm94eSk7XHJcbiAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRzUHJveHlTb3VyY2VzLnNldChwcm94eSwgc291cmNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm94eTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgW0RvY3VtZW50LCBTaGFkb3dSb290XS5mb3JFYWNoKChjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZVByb3BlcnR5KGN0b3IsIFwiYWRvcHRlZFN0eWxlU2hlZXRzXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IG5hdGl2ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5QWRvcHRlZFNoZWV0c0FycmF5KHRoaXMsIHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRvcHRlZFNoZWV0c1Byb3h5U291cmNlcy5oYXMoc291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGFkb3B0ZWRTaGVldHNQcm94eVNvdXJjZXMuZ2V0KHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmUuY2FsbCh0aGlzLCBzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZG9wdGVkU2hlZXRzQ2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWREZWNsYXJhdGlvbkNoYW5nZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZURlY2xhcmF0aW9uQ2hhbmdlXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgW1wic2V0UHJvcGVydHlcIiwgXCJyZW1vdmVQcm9wZXJ0eVwiXS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIG92ZXJyaWRlKENTU1N0eWxlRGVjbGFyYXRpb24sIGtleSwgKG5hdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG5hdGl2ZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBhZG9wdGVkRGVjbGFyYXRpb25TaGVldHMuZ2V0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hlZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVycyA9IGFkb3B0ZWRTaGVldE93bmVycy5nZXQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG93bmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVycy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkb3B0ZWREZWNsYXJhdGlvbkNoYW5nZUV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlZmluZWRDdXN0b21FbGVtZW50cyA9IG5ldyBTZXQoKTtcclxuICAgIGNvbnN0IHVuZGVmaW5lZEdyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgIGxldCBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjaztcclxuICAgIGZ1bmN0aW9uIGlzQ3VzdG9tRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS5pbmNsdWRlcyhcIi1cIikgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpc1wiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVjb3JkVW5kZWZpbmVkRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHRhZyA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICghdGFnLmluY2x1ZGVzKFwiLVwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbmRlZFRhZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaXNcIik7XHJcbiAgICAgICAgICAgIGlmIChleHRlbmRlZFRhZykge1xyXG4gICAgICAgICAgICAgICAgdGFnID0gZXh0ZW5kZWRUYWc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF1bmRlZmluZWRHcm91cHMuaGFzKHRhZykpIHtcclxuICAgICAgICAgICAgdW5kZWZpbmVkR3JvdXBzLnNldCh0YWcsIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzV2hlbkRlZmluZWQodGFnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFTU0VSVChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNvcmRVbmRlZmluZWRFbGVtZW50KCkgdW5kZWZpbmVkIGdyb3VwcyBzaG91bGQgbm90IGJlIGVtcHR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRHcm91cHMuZGVsZXRlKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2soQXJyYXkuZnJvbShlbGVtZW50cykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpLmFkZChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhyb290KSB7XHJcbiAgICAgICAgaWYgKCFpc0RlZmluZWRTZWxlY3RvclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvckVhY2goXHJcbiAgICAgICAgICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbChcIjpub3QoOmRlZmluZWQpXCIpLFxyXG4gICAgICAgICAgICByZWNvcmRVbmRlZmluZWRFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGxldCBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge29uY2U6IHRydWUsIHBhc3NpdmU6IHRydWV9XHJcbiAgICApO1xyXG4gICAgY29uc3QgdW5oYW5kbGVkU2hhZG93SG9zdHMgPSBuZXcgU2V0KCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiX19kYXJrcmVhZGVyX19zaGFkb3dEb21BdHRhY2hpbmdcIiwgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBob3N0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHVuaGFuZGxlZFNoYWRvd0hvc3RzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG9zdHMgPSBbLi4udW5oYW5kbGVkU2hhZG93SG9zdHNdLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAoZWwpID0+IGVsLnNoYWRvd1Jvb3RcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjaz8uKGhvc3RzKTtcclxuICAgICAgICAgICAgICAgIHVuaGFuZGxlZFNoYWRvd0hvc3RzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bmhhbmRsZWRTaGFkb3dIb3N0cy5hZGQoaG9zdCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlc29sdmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlzRGVmaW5lZChlKSB7XHJcbiAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5ID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0YWcgPSBlLmRldGFpbC50YWc7XHJcbiAgICAgICAgQVNTRVJUKFxyXG4gICAgICAgICAgICBcImhhbmRsZUlzRGVmaW5lZCgpIGV4cGVjdHMgbG93ZXItY2FzZSBub2RlIG5hbWVzXCIsXHJcbiAgICAgICAgICAgICgpID0+IHRhZy50b0xvd2VyQ2FzZSgpID09PSB0YWdcclxuICAgICAgICApO1xyXG4gICAgICAgIGRlZmluZWRDdXN0b21FbGVtZW50cy5hZGQodGFnKTtcclxuICAgICAgICBpZiAocmVzb2x2ZXJzLmhhcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSByZXNvbHZlcnMuZ2V0KHRhZyk7XHJcbiAgICAgICAgICAgIHJlc29sdmVycy5kZWxldGUodGFnKTtcclxuICAgICAgICAgICAgci5mb3JFYWNoKChyKSA9PiByKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGN1c3RvbUVsZW1lbnRzV2hlbkRlZmluZWQodGFnKSB7XHJcbiAgICAgICAgQVNTRVJUKFxyXG4gICAgICAgICAgICBcImN1c3RvbUVsZW1lbnRzV2hlbkRlZmluZWQoKSBleHBlY3RzIGxvd2VyLWNhc2Ugbm9kZSBuYW1lc1wiLFxyXG4gICAgICAgICAgICAoKSA9PiB0YWcudG9Mb3dlckNhc2UoKSA9PT0gdGFnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZGVmaW5lZEN1c3RvbUVsZW1lbnRzLmhhcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWcpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjYW5PcHRpbWl6ZVVzaW5nUHJveHkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlcnMuaGFzKHRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlcnMuZ2V0KHRhZykucHVzaChyZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJzLnNldCh0YWcsIFtyZXNvbHZlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fYWRkVW5kZWZpbmVkUmVzb2x2ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0lmRGVmaW5lZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHVuZGVmaW5lZEdyb3Vwcy5nZXQodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMudmFsdWVzKCkubmV4dCgpLnZhbHVlLm1hdGNoZXMoXCI6ZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0lmRGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrSWZEZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hXaGVuQ3VzdG9tRWxlbWVudHNEZWZpbmVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlRnJvbURlZmluZUN1c3RvbUVsZW1lbnRzKCkge1xyXG4gICAgICAgIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB1bmRlZmluZWRHcm91cHMuY2xlYXIoKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9faXNEZWZpbmVkXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZUlzRGVmaW5lZFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXJzID0gW107XHJcbiAgICBsZXQgb2JzZXJ2ZWRSb290cztcclxuICAgIGxldCBoYW5kbGVkU2hhZG93SG9zdHM7XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvclN0eWxlUG9zaXRpb25zKFxyXG4gICAgICAgIGN1cnJlbnRTdHlsZXMsXHJcbiAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICApIHtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTdHlsZVBvc2l0aW9ucygpO1xyXG4gICAgICAgIGNvbnN0IHByZXZTdHlsZXNCeVJvb3QgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGNvbnN0IGdldFByZXZTdHlsZXMgPSAocm9vdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXByZXZTdHlsZXNCeVJvb3QuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3R5bGVzQnlSb290LnNldChyb290LCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2U3R5bGVzQnlSb290LmdldChyb290KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGN1cnJlbnRTdHlsZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm9vdCA9IG5vZGU7XHJcbiAgICAgICAgICAgIHdoaWxlICgocm9vdCA9IHJvb3QucGFyZW50Tm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICByb290ID09PSBkb2N1bWVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Qubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlN0eWxlcyA9IGdldFByZXZTdHlsZXMocm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0eWxlcy5hZGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwcmV2U3R5bGVTaWJsaW5ncyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0eWxlU2libGluZ3MgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVTdHlsZVBvc2l0aW9uKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZVNpYmxpbmdzLnNldChzdHlsZSwgc3R5bGUucHJldmlvdXNFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgICAgIG5leHRTdHlsZVNpYmxpbmdzLnNldChzdHlsZSwgc3R5bGUubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZm9yZ2V0U3R5bGVQb3NpdGlvbihzdHlsZSkge1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVTaWJsaW5ncy5kZWxldGUoc3R5bGUpO1xyXG4gICAgICAgICAgICBuZXh0U3R5bGVTaWJsaW5ncy5kZWxldGUoc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaWRTdHlsZVBvc2l0aW9uQ2hhbmdlKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSBwcmV2U3R5bGVTaWJsaW5ncy5nZXQoc3R5bGUpIHx8XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG5leHRTdHlsZVNpYmxpbmdzLmdldChzdHlsZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFN0eWxlcy5mb3JFYWNoKHNhdmVTdHlsZVBvc2l0aW9uKTtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdHlsZU9wZXJhdGlvbnMocm9vdCwgb3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCB7Y3JlYXRlZFN0eWxlcywgcmVtb3ZlZFN0eWxlcywgbW92ZWRTdHlsZXN9ID0gb3BlcmF0aW9ucztcclxuICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5mb3JFYWNoKChzKSA9PiBzYXZlU3R5bGVQb3NpdGlvbihzKSk7XHJcbiAgICAgICAgICAgIG1vdmVkU3R5bGVzLmZvckVhY2goKHMpID0+IHNhdmVTdHlsZVBvc2l0aW9uKHMpKTtcclxuICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzKSA9PiBmb3JnZXRTdHlsZVBvc2l0aW9uKHMpKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldlN0eWxlcyA9IGdldFByZXZTdHlsZXMocm9vdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuZm9yRWFjaCgocykgPT4gcHJldlN0eWxlcy5hZGQocykpO1xyXG4gICAgICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goKHMpID0+IHByZXZTdHlsZXMuZGVsZXRlKHMpKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5zaXplICsgcmVtb3ZlZFN0eWxlcy5zaXplICsgbW92ZWRTdHlsZXMuc2l6ZSA+XHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBBcnJheS5mcm9tKGNyZWF0ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IEFycmF5LmZyb20ocmVtb3ZlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWQ6IEFycmF5LmZyb20obW92ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IFtdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaW5vclRyZWVNdXRhdGlvbnMocm9vdCwge2FkZGl0aW9ucywgbW92ZXMsIGRlbGV0aW9uc30pIHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKChub2RlKSA9PlxyXG4gICAgICAgICAgICAgICAgZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlKS5mb3JFYWNoKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLmFkZChzdHlsZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2goKG5vZGUpID0+XHJcbiAgICAgICAgICAgICAgICBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goKHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuYWRkKHN0eWxlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtb3Zlcy5mb3JFYWNoKChub2RlKSA9PlxyXG4gICAgICAgICAgICAgICAgZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlKS5mb3JFYWNoKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlcy5hZGQoc3R5bGUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlT3BlcmF0aW9ucyhyb290LCB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaCgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVlcE9ic2VydmUobik7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMobik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIChub2RlKSA9PiBpc0N1c3RvbUVsZW1lbnQobm9kZSkgJiYgcmVjb3JkVW5kZWZpbmVkRWxlbWVudChub2RlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaCgobm9kZSkgPT4gY2hlY2tJbWFnZVNlbGVjdG9ycyhub2RlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUh1Z2VUcmVlTXV0YXRpb25zKHJvb3QpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gbmV3IFNldChnZXRNYW5hZ2VhYmxlU3R5bGVzKHJvb3QpKTtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZTdHlsZXMgPSBnZXRQcmV2U3R5bGVzKHJvb3QpO1xyXG4gICAgICAgICAgICBzdHlsZXMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2U3R5bGVzLmhhcyhzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJldlN0eWxlcy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMocykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLmFkZChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0eWxlcy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIWNyZWF0ZWRTdHlsZXMuaGFzKHMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXJlbW92ZWRTdHlsZXMuaGFzKHMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZGlkU3R5bGVQb3NpdGlvbkNoYW5nZShzKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGFuZGxlU3R5bGVPcGVyYXRpb25zKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgbW92ZWRTdHlsZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRlZXBPYnNlcnZlKHJvb3QpO1xyXG4gICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMocm9vdCk7XHJcbiAgICAgICAgICAgIGNoZWNrSW1hZ2VTZWxlY3RvcnMocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyhtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt0YXJnZXR9ID0gbTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTWFuYWdlU3R5bGUodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkU3R5bGVzLmFkZCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5hZGQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlZFN0eWxlcy5zaXplICsgcmVtb3ZlZFN0eWxlcy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiBBcnJheS5mcm9tKHVwZGF0ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IEFycmF5LmZyb20ocmVtb3ZlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWQ6IFtdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlKHJvb3QpIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVkUm9vdHMuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdHJlZU9ic2VydmVyID0gY3JlYXRlT3B0aW1pemVkVHJlZU9ic2VydmVyKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnM6IGhhbmRsZU1pbm9yVHJlZU11dGF0aW9ucyxcclxuICAgICAgICAgICAgICAgIG9uSHVnZU11dGF0aW9uczogaGFuZGxlSHVnZVRyZWVNdXRhdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgIGF0dHJPYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wicmVsXCIsIFwiZGlzYWJsZWRcIiwgXCJtZWRpYVwiLCBcImhyZWZcIl0sXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMucHVzaCh0cmVlT2JzZXJ2ZXIsIGF0dHJPYnNlcnZlcik7XHJcbiAgICAgICAgICAgIG9ic2VydmVkUm9vdHMuYWRkKHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyhub2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtzaGFkb3dSb290fSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGlmIChzaGFkb3dSb290ID09IG51bGwgfHwgb2JzZXJ2ZWRSb290cy5oYXMoc2hhZG93Um9vdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZlKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZChzaGFkb3dSb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGVlcE9ic2VydmUobm9kZSkge1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZSwgc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlKGRvY3VtZW50KTtcclxuICAgICAgICBkZWVwT2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG4gICAgICAgIHdhdGNoV2hlbkN1c3RvbUVsZW1lbnRzRGVmaW5lZCgoaG9zdHMpID0+IHtcclxuICAgICAgICAgICAgaG9zdHMgPSBob3N0cy5maWx0ZXIoKG5vZGUpID0+ICFoYW5kbGVkU2hhZG93SG9zdHMuaGFzKG5vZGUpKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3U3R5bGVzID0gW107XHJcbiAgICAgICAgICAgIGhvc3RzLmZvckVhY2goKGhvc3QpID0+XHJcbiAgICAgICAgICAgICAgICBwdXNoKG5ld1N0eWxlcywgZ2V0TWFuYWdlYWJsZVN0eWxlcyhob3N0LnNoYWRvd1Jvb3QpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB1cGRhdGUoe2NyZWF0ZWQ6IG5ld1N0eWxlcywgdXBkYXRlZDogW10sIHJlbW92ZWQ6IFtdLCBtb3ZlZDogW119KTtcclxuICAgICAgICAgICAgaG9zdHMuZm9yRWFjaCgoaG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3NoYWRvd1Jvb3R9ID0gaG9zdDtcclxuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyhob3N0KTtcclxuICAgICAgICAgICAgICAgIGRlZXBPYnNlcnZlKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaG9zdHMuZm9yRWFjaCgobm9kZSkgPT4gaGFuZGxlZFNoYWRvd0hvc3RzLmFkZChub2RlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIl9fZGFya3JlYWRlcl9faXNEZWZpbmVkXCIsIGhhbmRsZUlzRGVmaW5lZCk7XHJcbiAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKGRvY3VtZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc2V0T2JzZXJ2ZXJzKCkge1xyXG4gICAgICAgIG9ic2VydmVycy5mb3JFYWNoKChvKSA9PiBvLmRpc2Nvbm5lY3QoKSk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZSgwLCBvYnNlcnZlcnMubGVuZ3RoKTtcclxuICAgICAgICBvYnNlcnZlZFJvb3RzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICBoYW5kbGVkU2hhZG93SG9zdHMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU3R5bGVQb3NpdGlvbnMoKSB7XHJcbiAgICAgICAgcmVzZXRPYnNlcnZlcnMoKTtcclxuICAgICAgICB1bnN1YnNjcmliZUZyb21EZWZpbmVDdXN0b21FbGVtZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yU3R5bGVDaGFuZ2VzKGN1cnJlbnRTdHlsZXMsIHVwZGF0ZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcclxuICAgICAgICB3YXRjaEZvclN0eWxlUG9zaXRpb25zKGN1cnJlbnRTdHlsZXMsIHVwZGF0ZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU3R5bGVDaGFuZ2VzKCkge1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclN0eWxlUG9zaXRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSU5TVEFOQ0VfSUQgPSBnZW5lcmF0ZVVJRCgpO1xyXG4gICAgY29uc3Qgc3R5bGVNYW5hZ2VycyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGFkb3B0ZWRTdHlsZU1hbmFnZXJzID0gW107XHJcbiAgICBjb25zdCBhZG9wdGVkU3R5bGVGYWxsYmFja3MgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBhZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgbGV0IHRoZW1lID0gbnVsbDtcclxuICAgIGxldCBmaXhlcyA9IG51bGw7XHJcbiAgICBsZXQgaXNJRnJhbWUkMSA9IG51bGw7XHJcbiAgICBsZXQgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMgPSBbXTtcclxuICAgIGxldCBpZ25vcmVkSW5saW5lU2VsZWN0b3JzID0gW107XHJcbiAgICBjb25zdCBzdGF0aWNTdHlsZU1hcCA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlU3R5bGUoY2xhc3NOYW1lLCByb290ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudCkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gcm9vdC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgc3RhdGljU3R5bGVNYXAuc2V0KGNsYXNzTmFtZSwgZWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0aWNTdHlsZU1hcC5oYXMoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc3RhdGljU3R5bGVNYXAuZ2V0KGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQubWVkaWEgPSBcInNjcmVlblwiO1xyXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgc3RhdGljU3R5bGVNYXAuc2V0KGNsYXNzTmFtZSwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVTY3JpcHQoY2xhc3NOYW1lLCByb290ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudCkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gcm9vdC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBub2RlUG9zaXRpb25XYXRjaGVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihub2RlLCBhbGlhcywgY2FsbGJhY2spIHtcclxuICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5oYXMoYWxpYXMpICYmXHJcbiAgICAgICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLmdldChhbGlhcykuc3RvcCgpO1xyXG4gICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLnNldChcclxuICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgICAgIHdhdGNoRm9yTm9kZVBvc2l0aW9uKG5vZGUsIFwiaGVhZFwiLCBjYWxsYmFjaylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFN0eWxlUG9zaXRpb25XYXRjaGVycygpIHtcclxuICAgICAgICBmb3JFYWNoKG5vZGVQb3NpdGlvbldhdGNoZXJzLnZhbHVlcygpLCAod2F0Y2hlcikgPT4gd2F0Y2hlci5zdG9wKCkpO1xyXG4gICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdGF0aWNTdHlsZU92ZXJyaWRlcygpIHtcclxuICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcclxuICAgICAgICAgICAgXCJkYXJrcmVhZGVyLS1mYWxsYmFja1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZSh0aGVtZSwge1xyXG4gICAgICAgICAgICBzdHJpY3Q6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShmYWxsYmFja1N0eWxlLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihmYWxsYmFja1N0eWxlLCBcImZhbGxiYWNrXCIpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXVzZXItYWdlbnRcIik7XHJcbiAgICAgICAgdXNlckFnZW50U3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZFVzZXJBZ2VudFN0eWxlKFxyXG4gICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgaXNJRnJhbWUkMSxcclxuICAgICAgICAgICAgdGhlbWUuc3R5bGVTeXN0ZW1Db250cm9sc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodXNlckFnZW50U3R5bGUsIGZhbGxiYWNrU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcih1c2VyQWdlbnRTdHlsZSwgXCJ1c2VyLWFnZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS10ZXh0XCIpO1xyXG4gICAgICAgIGlmICh0aGVtZS51c2VGb250IHx8IHRoZW1lLnRleHRTdHJva2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHRleHRTdHlsZS50ZXh0Q29udGVudCA9IGNyZWF0ZVRleHRTdHlsZSh0aGVtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dFN0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodGV4dFN0eWxlLCBmYWxsYmFja1N0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodGV4dFN0eWxlLCBcInRleHRcIik7XHJcbiAgICAgICAgY29uc3QgaW52ZXJ0U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW52ZXJ0XCIpO1xyXG4gICAgICAgIGlmIChmaXhlcyAmJiBBcnJheS5pc0FycmF5KGZpeGVzLmludmVydCkgJiYgZml4ZXMuaW52ZXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBbXHJcbiAgICAgICAgICAgICAgICBgJHtmaXhlcy5pbnZlcnQuam9pbihcIiwgXCIpfSB7YCxcclxuICAgICAgICAgICAgICAgIGAgICAgZmlsdGVyOiAke2dldENTU0ZpbHRlclZhbHVlKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFzdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUubW9kZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5jb250cmFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFtcCh0aGVtZS5jb250cmFzdCAtIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICB9KX0gIWltcG9ydGFudDtgLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaW52ZXJ0U3R5bGUsIHRleHRTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGludmVydFN0eWxlLCBcImludmVydFwiKTtcclxuICAgICAgICBjb25zdCBpbmxpbmVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbmxpbmVcIik7XHJcbiAgICAgICAgaW5saW5lU3R5bGUudGV4dENvbnRlbnQgPSBnZXRJbmxpbmVPdmVycmlkZVN0eWxlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaW5saW5lU3R5bGUsIGludmVydFN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIoaW5saW5lU3R5bGUsIFwiaW5saW5lXCIpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJyaWRlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tb3ZlcnJpZGVcIik7XHJcbiAgICAgICAgb3ZlcnJpZGVTdHlsZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmNzcyA/IHJlcGxhY2VDU1NUZW1wbGF0ZXMoZml4ZXMuY3NzKSA6IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChvdmVycmlkZVN0eWxlKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIob3ZlcnJpZGVTdHlsZSwgXCJvdmVycmlkZVwiKTtcclxuICAgICAgICBjb25zdCB2YXJpYWJsZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXZhcmlhYmxlc1wiKTtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25Db2xvcnMgPSB0aGVtZT8uc2VsZWN0aW9uQ29sb3JcclxuICAgICAgICAgICAgPyBnZXRTZWxlY3Rpb25Db2xvcih0aGVtZSlcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG5ldXRyYWxCYWNrZ3JvdW5kQ29sb3IgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgIHBhcnNlQ29sb3JXaXRoQ2FjaGUoXCIjZmZmZmZmXCIpLFxyXG4gICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbmV1dHJhbFRleHRDb2xvciA9IG1vZGlmeUZvcmVncm91bmRDb2xvcihcclxuICAgICAgICAgICAgcGFyc2VDb2xvcldpdGhDYWNoZShcIiMwMDAwMDBcIiksXHJcbiAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXJpYWJsZVN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICBgOnJvb3Qge2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItbmV1dHJhbC1iYWNrZ3JvdW5kOiAke25ldXRyYWxCYWNrZ3JvdW5kQ29sb3J9O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItbmV1dHJhbC10ZXh0OiAke25ldXRyYWxUZXh0Q29sb3J9O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItc2VsZWN0aW9uLWJhY2tncm91bmQ6ICR7c2VsZWN0aW9uQ29sb3JzPy5iYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPz8gXCJpbml0aWFsXCJ9O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItc2VsZWN0aW9uLXRleHQ6ICR7c2VsZWN0aW9uQ29sb3JzPy5mb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPz8gXCJpbml0aWFsXCJ9O2AsXHJcbiAgICAgICAgICAgIGB9YFxyXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh2YXJpYWJsZVN0eWxlLCBpbmxpbmVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKHZhcmlhYmxlU3R5bGUsIFwidmFyaWFibGVzXCIsICgpID0+XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyVmFyaWFibGVzU2hlZXQodmFyaWFibGVTdHlsZS5zaGVldClcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlZ2lzdGVyVmFyaWFibGVzU2hlZXQodmFyaWFibGVTdHlsZS5zaGVldCk7XHJcbiAgICAgICAgY29uc3Qgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1yb290LXZhcnNcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUocm9vdFZhcnNTdHlsZSwgdmFyaWFibGVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgY29uc3QgZW5hYmxlU3R5bGVTaGVldHNQcm94eSA9ICEoXHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmRpc2FibGVTdHlsZVNoZWV0c1Byb3h5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBlbmFibGVDdXN0b21FbGVtZW50UmVnaXN0cnlQcm94eSA9ICEoXHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmRpc2FibGVDdXN0b21FbGVtZW50UmVnaXN0cnlQcm94eVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2NsZWFuVXBcIikpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcHJveHlTY3JpcHQgPSBjcmVhdGVPclVwZGF0ZVNjcmlwdChcImRhcmtyZWFkZXItLXByb3h5XCIpO1xyXG4gICAgICAgICAgICBwcm94eVNjcmlwdC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICBgKCR7aW5qZWN0UHJveHl9KSgke2VuYWJsZVN0eWxlU2hlZXRzUHJveHl9LCAke2VuYWJsZUN1c3RvbUVsZW1lbnRSZWdpc3RyeVByb3h5fSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHByb3h5U2NyaXB0LCByb290VmFyc1N0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgcHJveHlTY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXNJbm5lcihyb290KSB7XHJcbiAgICAgICAgY29uc3QgaW5saW5lU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW5saW5lXCIsIHJvb3QpO1xyXG4gICAgICAgIGlubGluZVN0eWxlLnRleHRDb250ZW50ID0gZ2V0SW5saW5lT3ZlcnJpZGVTdHlsZSgpO1xyXG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKGlubGluZVN0eWxlLCByb290LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJyaWRlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tb3ZlcnJpZGVcIiwgcm9vdCk7XHJcbiAgICAgICAgb3ZlcnJpZGVTdHlsZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmNzcyA/IHJlcGxhY2VDU1NUZW1wbGF0ZXMoZml4ZXMuY3NzKSA6IFwiXCI7XHJcbiAgICAgICAgcm9vdC5pbnNlcnRCZWZvcmUob3ZlcnJpZGVTdHlsZSwgaW5saW5lU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIGNvbnN0IGludmVydFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWludmVydFwiLCByb290KTtcclxuICAgICAgICBpZiAoZml4ZXMgJiYgQXJyYXkuaXNBcnJheShmaXhlcy5pbnZlcnQpICYmIGZpeGVzLmludmVydC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICAgICAgYCR7Zml4ZXMuaW52ZXJ0LmpvaW4oXCIsIFwiKX0ge2AsXHJcbiAgICAgICAgICAgICAgICBgICAgIGZpbHRlcjogJHtnZXRDU1NGaWx0ZXJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJhc3Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLm1vZGUgPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUuY29udHJhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhbXAodGhlbWUuY29udHJhc3QgLSAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgfSl9ICFpbXBvcnRhbnQ7YCxcclxuICAgICAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKGludmVydFN0eWxlLCBvdmVycmlkZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuYWRkKHJvb3QpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVsYXllZENyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHJvb3QpIHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB7dHlwZSwgcmVtb3ZlZE5vZGVzfSBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB7bm9kZU5hbWUsIGNsYXNzTmFtZX0gb2YgcmVtb3ZlZE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lID09PSBcIlNUWUxFXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXIgZGFya3JlYWRlci0taW5saW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyIGRhcmtyZWFkZXItLW92ZXJyaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyIGRhcmtyZWFkZXItLWludmVydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKGNsYXNzTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlc0lubmVyKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KSB7XHJcbiAgICAgICAgY29uc3QgZGVsYXllZCA9IHJvb3QuZmlyc3RDaGlsZCA9PT0gbnVsbDtcclxuICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlc0lubmVyKHJvb3QpO1xyXG4gICAgICAgIGlmIChkZWxheWVkKSB7XHJcbiAgICAgICAgICAgIGRlbGF5ZWRDcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTVGVtcGxhdGVzKCRjc3NUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuICRjc3NUZXh0LnJlcGxhY2UoL1xcJHsoLis/KX0vZywgKF8sICRjb2xvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoJGNvbG9yKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaWdodG5lc3MgPSBnZXRTUkdCTGlnaHRuZXNzKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpZ2h0bmVzcyA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoY29sb3IsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IoY29sb3IsIHRoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2dXYXJuKFwiQ291bGRuJ3QgcGFyc2UgQ1NTVGVtcGxhdGUncyBjb2xvci5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiAkY29sb3I7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkZhbGxiYWNrU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgZmFsbGJhY2sgPVxyXG4gICAgICAgICAgICBzdGF0aWNTdHlsZU1hcC5nZXQoXCJkYXJrcmVhZGVyLS1mYWxsYmFja1wiKSB8fFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIpO1xyXG4gICAgICAgIGlmIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICBmYWxsYmFjay50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRHluYW1pY1N0eWxlT3ZlcnJpZGVzKCkge1xyXG4gICAgICAgIGNhbmNlbFJlbmRlcmluZygpO1xyXG4gICAgICAgIGNvbnN0IGFsbFN0eWxlcyA9IGdldE1hbmFnZWFibGVTdHlsZXMoZG9jdW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IG5ld01hbmFnZXJzID0gYWxsU3R5bGVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHN0eWxlKSA9PiAhc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpKVxyXG4gICAgICAgICAgICAubWFwKChzdHlsZSkgPT4gY3JlYXRlTWFuYWdlcihzdHlsZSkpO1xyXG4gICAgICAgIG5ld01hbmFnZXJzXHJcbiAgICAgICAgICAgIC5tYXAoKG1hbmFnZXIpID0+IG1hbmFnZXIuZGV0YWlscyh7c2Vjb25kUm91bmQ6IGZhbHNlfSkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGRldGFpbCkgPT4gZGV0YWlsICYmIGRldGFpbC5ydWxlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZGV0YWlsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGRldGFpbC5ydWxlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLnNldE9uUm9vdFZhcmlhYmxlQ2hhbmdlKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1yb290LXZhcnNcIik7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKHJvb3RWYXJzU3R5bGUsIHRoZW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByb290VmFyc1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5wdXRSb290VmFycyhyb290VmFyc1N0eWxlLCB0aGVtZSk7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PlxyXG4gICAgICAgICAgICBtYW5hZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAobG9hZGluZ1N0eWxlcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBtYW5hZ2VyLndhdGNoKCkpO1xyXG4gICAgICAgIGNvbnN0IGlubGluZVN0eWxlRWxlbWVudHMgPSB0b0FycmF5KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKElOTElORV9TVFlMRV9TRUxFQ1RPUilcclxuICAgICAgICApO1xyXG4gICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIChob3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKGhvc3Quc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gaG9zdC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICBJTkxJTkVfU1RZTEVfU0VMRUNUT1JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHB1c2goaW5saW5lU3R5bGVFbGVtZW50cywgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5saW5lU3R5bGVFbGVtZW50cy5mb3JFYWNoKChlbCkgPT5cclxuICAgICAgICAgICAgb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICAgICAgICAgIGVsLFxyXG4gICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKGRvY3VtZW50KTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9uQWRvcHRlZENzc0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7c2hlZXRzfSA9IGUuZGV0YWlsO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoZWV0cykgfHwgc2hlZXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNoZWV0cy5mb3JFYWNoKCh7c2hlZXR9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2Nzc1J1bGVzfSA9IHNoZWV0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoY3NzUnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gW107XHJcbiAgICAgICAgICAgICAgICBzaGVldHMuZm9yRWFjaCgoe3NoZWV0SWQsIHNoZWV0fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrID0gZ2V0QWRvcHRlZFN0eWxlU2hlZXRGYWxsYmFjayhzaGVldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzUnVsZXMgPSBzaGVldC5jc3NSdWxlcztcclxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFjay5yZW5kZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXM6IGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NSdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmRzID0gZmFsbGJhY2suY29tbWFuZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wdXNoKHtzaGVldElkLCBjb21tYW5kc30pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVPbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEFkb3B0ZWRTdHlsZUNoYW5nZVRva2VuKHNoZWV0c1swXS5zaGVldCksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldENvbW1hbmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbDogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRzQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRDc3NDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMucHVzaCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRzQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb25BZG9wdGVkQ3NzQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX3N0YXJ0QWRvcHRlZFN0eWxlU2hlZXRzV2F0Y2hlclwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBsb2FkaW5nU3R5bGVzQ291bnRlciA9IDA7XHJcbiAgICBjb25zdCBsb2FkaW5nU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFuYWdlcihlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGluZ1N0eWxlSWQgPSArK2xvYWRpbmdTdHlsZXNDb3VudGVyO1xyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRpbmdTdGFydCgpIHtcclxuICAgICAgICAgICAgaWYgKCFpc0RPTVJlYWR5KCkgfHwgIWRvY3VtZW50SXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdTdHlsZXMuYWRkKGxvYWRpbmdTdHlsZUlkKTtcclxuICAgICAgICAgICAgICAgIGxvZ0luZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgYEN1cnJlbnQgYW1vdW50IG9mIHN0eWxlcyBsb2FkaW5nOiAke2xvYWRpbmdTdHlsZXMuc2l6ZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyLS1mYWxsYmFja1wiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmYWxsYmFja1N0eWxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpY3Q6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZGluZ0VuZCgpIHtcclxuICAgICAgICAgICAgbG9hZGluZ1N0eWxlcy5kZWxldGUobG9hZGluZ1N0eWxlSWQpO1xyXG4gICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgYFJlbW92ZWQgbG9hZGluZ1N0eWxlICR7bG9hZGluZ1N0eWxlSWR9LCBub3cgYXdhaXRpbmc6ICR7bG9hZGluZ1N0eWxlcy5zaXplfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGxvYWRpbmdTdHlsZXMuc2l6ZSA9PT0gMCAmJiBpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IG1hbmFnZXIuZGV0YWlscyh7c2Vjb25kUm91bmQ6IHRydWV9KTtcclxuICAgICAgICAgICAgaWYgKCFkZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWxzLnJ1bGVzKTtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgIG1hbmFnZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSBtYW5hZ2VTdHlsZShlbGVtZW50LCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZSxcclxuICAgICAgICAgICAgbG9hZGluZ1N0YXJ0LFxyXG4gICAgICAgICAgICBsb2FkaW5nRW5kXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5zZXQoZWxlbWVudCwgbWFuYWdlcik7XHJcbiAgICAgICAgcmV0dXJuIG1hbmFnZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVNYW5hZ2VyKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBtYW5hZ2VyID0gc3R5bGVNYW5hZ2Vycy5nZXQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgbWFuYWdlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0eWxlTWFuYWdlcnMuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHRocm90dGxlZFJlbmRlckFsbFN0eWxlcyA9IHRocm90dGxlKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT5cclxuICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT5cclxuICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2FuY2VsUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRocm90dGxlZFJlbmRlckFsbFN0eWxlcy5jYW5jZWwoKTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBvbkRPTVJlYWR5KCkge1xyXG4gICAgICAgIGlmIChsb2FkaW5nU3R5bGVzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgY2xlYW5GYWxsYmFja1N0eWxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nV2FybihcclxuICAgICAgICAgICAgYERPTSBpcyByZWFkeSwgYnV0IHN0aWxsIGhhdmUgc3R5bGVzIGJlaW5nIGxvYWRlZC5gLFxyXG4gICAgICAgICAgICBsb2FkaW5nU3R5bGVzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJ1bkR5bmFtaWNTdHlsZSgpIHtcclxuICAgICAgICBjcmVhdGVEeW5hbWljU3R5bGVPdmVycmlkZXMoKTtcclxuICAgICAgICB3YXRjaEZvclVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRoZW1lQW5kV2F0Y2hGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgIGNyZWF0ZVN0YXRpY1N0eWxlT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudElzVmlzaWJsZSgpICYmICF0aGVtZS5pbW1lZGlhdGVNb2RpZnkpIHtcclxuICAgICAgICAgICAgc2V0RG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIocnVuRHluYW1pY1N0eWxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBydW5EeW5hbWljU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3JXaGVuQXZhaWxhYmxlKHRoZW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkb3B0ZWRTdHlsZVNoZWV0cyhub2RlKSB7XHJcbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYW5IYXZlQWRvcHRlZFN0eWxlU2hlZXRzKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcocy5jc3NSdWxlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNYW5nZXIgPSBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldE92ZXJyaWRlKG5vZGUpO1xyXG4gICAgICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5wdXNoKG5ld01hbmdlcik7XHJcbiAgICAgICAgICAgIG5ld01hbmdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICAgICAgbmV3TWFuZ2VyLndhdGNoKChzaGVldHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNoZWV0cy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhzLmNzc1J1bGVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNYW5nZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEFkb3B0ZWRTdHlsZUNoYW5nZVRva2VuKHNoZWV0KSB7XHJcbiAgICAgICAgaWYgKGFkb3B0ZWRTdHlsZUNoYW5nZVRva2Vucy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbnMuZ2V0KHNoZWV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBTeW1ib2woKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbnMuc2V0KHNoZWV0LCB0b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0QWRvcHRlZFN0eWxlU2hlZXRGYWxsYmFjayhzaGVldCkge1xyXG4gICAgICAgIGxldCBmYWxsYmFjayA9IGFkb3B0ZWRTdHlsZUZhbGxiYWNrcy5nZXQoc2hlZXQpO1xyXG4gICAgICAgIGlmICghZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgZmFsbGJhY2sgPSBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldEZhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIGFkb3B0ZWRTdHlsZUZhbGxiYWNrcy5zZXQoc2hlZXQsIGZhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IG1hbmFnZWRTdHlsZXMgPSBBcnJheS5mcm9tKHN0eWxlTWFuYWdlcnMua2V5cygpKTtcclxuICAgICAgICB3YXRjaEZvclN0eWxlQ2hhbmdlcyhcclxuICAgICAgICAgICAgbWFuYWdlZFN0eWxlcyxcclxuICAgICAgICAgICAgKHtjcmVhdGVkLCB1cGRhdGVkLCByZW1vdmVkLCBtb3ZlZH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlc1RvUmVtb3ZlID0gcmVtb3ZlZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlc1RvTWFuYWdlID0gY3JlYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQodXBkYXRlZClcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG1vdmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHN0eWxlKSA9PiAhc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlc1RvUmVzdG9yZSA9IG1vdmVkLmZpbHRlcigoc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzVG9SZW1vdmUuZm9yRWFjaCgoc3R5bGUpID0+IHJlbW92ZU1hbmFnZXIoc3R5bGUpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01hbmFnZXJzID0gc3R5bGVzVG9NYW5hZ2UubWFwKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVNYW5hZ2VyKHN0eWxlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIG5ld01hbmFnZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgobWFuYWdlcikgPT4gbWFuYWdlci5kZXRhaWxzKHtzZWNvbmRSb3VuZDogZmFsc2V9KSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChkZXRhaWwpID0+IGRldGFpbCAmJiBkZXRhaWwucnVsZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZGV0YWlsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoZGV0YWlsLnJ1bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gbWFuYWdlci53YXRjaCgpKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlc1RvUmVzdG9yZS5mb3JFYWNoKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZU1hbmFnZXJzLmdldChzdHlsZSkucmVzdG9yZSgpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoc2hhZG93Um9vdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBZG9wdGVkU3R5bGVTaGVldHMoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZUF0dHIuaW5jbHVkZXMoXCItLVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXItLXJvb3QtdmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKHJvb3RWYXJzU3R5bGUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChyb290KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlubGluZVN0eWxlRWxlbWVudHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgSU5MSU5FX1NUWUxFX1NFTEVDVE9SXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlubGluZVN0eWxlRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvckVhY2goaW5saW5lU3R5bGVFbGVtZW50cywgKGVsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYWRkRE9NUmVhZHlMaXN0ZW5lcihvbkRPTVJlYWR5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBtYW5hZ2VyLnBhdXNlKCkpO1xyXG4gICAgICAgIHN0b3BTdHlsZVBvc2l0aW9uV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTdHlsZUNoYW5nZXMoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JJbmxpbmVTdHlsZXMoKTtcclxuICAgICAgICByZW1vdmVET01SZWFkeUxpc3RlbmVyKG9uRE9NUmVhZHkpO1xyXG4gICAgICAgIGNsZWFuUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgbWV0YU9ic2VydmVyO1xyXG4gICAgbGV0IGhlYWRPYnNlcnZlciA9IG51bGw7XHJcbiAgICBmdW5jdGlvbiBhZGRNZXRhTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgbWV0YU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlci1sb2NrXCJdJykpIHtcclxuICAgICAgICAgICAgICAgIG1ldGFPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1ldGFPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhcmtSZWFkZXJJbnN0YW5jZU1hcmtlcigpIHtcclxuICAgICAgICBjb25zdCBtZXRhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xyXG4gICAgICAgIG1ldGFFbGVtZW50Lm5hbWUgPSBcImRhcmtyZWFkZXJcIjtcclxuICAgICAgICBtZXRhRWxlbWVudC5jb250ZW50ID0gSU5TVEFOQ0VfSUQ7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0RSTG9ja2VkKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyLWxvY2tcIl0nKSAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNBbm90aGVyRGFya1JlYWRlckluc3RhbmNlQWN0aXZlKCkge1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJyk7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGEuY29udGVudCAhPT0gSU5TVEFOQ0VfSUQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlRGFya1JlYWRlckluc3RhbmNlTWFya2VyKCk7XHJcbiAgICAgICAgYWRkTWV0YUxpc3RlbmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGludGVyY2VwdG9yQXR0ZW1wdHMgPSAyO1xyXG4gICAgZnVuY3Rpb24gaW50ZXJjZXB0T2xkU2NyaXB0KHtzdWNjZXNzLCBmYWlsdXJlfSkge1xyXG4gICAgICAgIGlmICgtLWludGVyY2VwdG9yQXR0ZW1wdHMgPD0gMCkge1xyXG4gICAgICAgICAgICBmYWlsdXJlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2xkTWV0YSA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlclwiXScpO1xyXG4gICAgICAgIGlmICghb2xkTWV0YSB8fCBvbGRNZXRhLmNvbnRlbnQgPT09IElOU1RBTkNFX0lEKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xyXG4gICAgICAgIGxvY2submFtZSA9IFwiZGFya3JlYWRlci1sb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobG9jayk7XHJcbiAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NrLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS13cC1kYXJrLW1vZGUtcHJlc2V0XCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVXUERhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2Rpc2FibGVDb25mbGljdGluZ1BsdWdpbnNcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgICAgICAgICBcIndwLWRhcmstbW9kZS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXdwLWRhcmstbW9kZS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGlzYWJsZVdQRGFya01vZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3cC1kYXJrLW1vZGUtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXdwLWRhcmstbW9kZS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVXUERhcmtNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wiY2xhc3NcIiwgXCJkYXRhLXdwLWRhcmstbW9kZS1hY3RpdmVcIl1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHByZXZUaGVtZSA9IG51bGw7XHJcbiAgICBsZXQgcHJldkZpeGVzID0gbnVsbDtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlRHluYW1pY1RoZW1lSW50ZXJuYWwoXHJcbiAgICAgICAgdGhlbWVDb25maWcsXHJcbiAgICAgICAgZHluYW1pY1RoZW1lRml4ZXMsXHJcbiAgICAgICAgaWZyYW1lXHJcbiAgICApIHtcclxuICAgICAgICB0aGVtZSA9IHRoZW1lQ29uZmlnO1xyXG4gICAgICAgIGZpeGVzID0gZHluYW1pY1RoZW1lRml4ZXM7XHJcbiAgICAgICAgY29uc3QgY29sb3JBZmZlY3RpbmdLZXlzID0gW1xyXG4gICAgICAgICAgICBcImJyaWdodG5lc3NcIixcclxuICAgICAgICAgICAgXCJjb250cmFzdFwiLFxyXG4gICAgICAgICAgICBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICAgICAgXCJkYXJrU2NoZW1lVGV4dENvbG9yXCIsXHJcbiAgICAgICAgICAgIFwiZ3JheXNjYWxlXCIsXHJcbiAgICAgICAgICAgIFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICAgICAgXCJsaWdodFNjaGVtZVRleHRDb2xvclwiLFxyXG4gICAgICAgICAgICBcInNlcGlhXCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIGlmIChwcmV2VGhlbWUgJiYgcHJldkZpeGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lS2V5cyA9IG5ldyBTZXQoW1xyXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXModGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMocHJldlRoZW1lKVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgbGV0IG9ubHlDb2xvcnNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhlbWVLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWVba2V5XSAhPT0gcHJldlRoZW1lW2tleV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAhY29sb3JBZmZlY3RpbmdLZXlzLmluY2x1ZGVzKGtleSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ubHlDb2xvcnNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgb25seUNvbG9yc0NoYW5nZWQgJiZcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGZpeGVzKSAhPT0gSlNPTi5zdHJpbmdpZnkocHJldkZpeGVzKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIG9ubHlDb2xvcnNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9ubHlDb2xvcnNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYWxldHRlID0gZ2V0Q29sb3JQYWxldHRlKCk7XHJcbiAgICAgICAgICAgICAgICBjbGVhckNvbG9yUGFsZXR0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcGFsZXR0ZS5iYWNrZ3JvdW5kLmZvckVhY2goKGNvbG9yKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmeUJhY2tncm91bmRDb2xvcihjb2xvciwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcGFsZXR0ZS50ZXh0LmZvckVhY2goKGNvbG9yKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmeUZvcmVncm91bmRDb2xvcihjb2xvciwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcGFsZXR0ZS5ib3JkZXIuZm9yRWFjaCgoY29sb3IpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZ5Qm9yZGVyQ29sb3IoY29sb3IsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGVhckNvbG9yUGFsZXR0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZml4ZXMpIHtcclxuICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMgPSBBcnJheS5pc0FycmF5KFxyXG4gICAgICAgICAgICAgICAgZml4ZXMuaWdub3JlSW1hZ2VBbmFseXNpc1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IGZpeGVzLmlnbm9yZUltYWdlQW5hbHlzaXNcclxuICAgICAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBBcnJheS5pc0FycmF5KGZpeGVzLmlnbm9yZUlubGluZVN0eWxlKVxyXG4gICAgICAgICAgICAgICAgPyBmaXhlcy5pZ25vcmVJbmxpbmVTdHlsZVxyXG4gICAgICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IFtdO1xyXG4gICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGVtZS5pbW1lZGlhdGVNb2RpZnkpIHtcclxuICAgICAgICAgICAgc2V0SXNET01SZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzSUZyYW1lJDEgPSBpZnJhbWU7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1kYXJrcmVhZGVyLW1vZGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImR5bmFtaWNcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWRhcmtyZWFkZXItc2NoZW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUubW9kZSA/IFwiZGFya1wiIDogXCJkaW1tZWRcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRoZW1lQW5kV2F0Y2hGb3JVcGRhdGVzKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGZhaWx1cmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGlzRFJMb2NrZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Fub3RoZXJEYXJrUmVhZGVySW5zdGFuY2VBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJjZXB0T2xkU2NyaXB0KHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGVhZCkge1xyXG4gICAgICAgICAgICByZWFkeSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXItLWZhbGxiYWNrXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFsbGJhY2tTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBmYWxsYmFja1N0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKHRoZW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaWN0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoZWFkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgaGVhZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmhlYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkeSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2xlYW5lcnMucHVzaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIGhlYWRPYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoZWFkT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2VGhlbWUgPSB0aGVtZTtcclxuICAgICAgICBwcmV2Rml4ZXMgPSBmaXhlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb3h5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19jbGVhblVwXCIpKTtcclxuICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1wcm94eVwiKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhbmVycyA9IFtdO1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRHluYW1pY1RoZW1lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtZGFya3JlYWRlci1tb2RlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1kYXJrcmVhZGVyLXNjaGVtZWApO1xyXG4gICAgICAgIGNsZWFuRHluYW1pY1RoZW1lQ2FjaGUoKTtcclxuICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIikpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IFtcclxuICAgICAgICAgICAgICAgIFwiLmRhcmtyZWFkZXItLXVzZXItYWdlbnRcIixcclxuICAgICAgICAgICAgICAgIFwiLmRhcmtyZWFkZXItLXRleHRcIixcclxuICAgICAgICAgICAgICAgIFwiLmRhcmtyZWFkZXItLWludmVydFwiLFxyXG4gICAgICAgICAgICAgICAgXCIuZGFya3JlYWRlci0taW5saW5lXCIsXHJcbiAgICAgICAgICAgICAgICBcIi5kYXJrcmVhZGVyLS1vdmVycmlkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCIuZGFya3JlYWRlci0tdmFyaWFibGVzXCIsXHJcbiAgICAgICAgICAgICAgICBcIi5kYXJrcmVhZGVyLS1yb290LXZhcnNcIixcclxuICAgICAgICAgICAgICAgICdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJ1xyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICByZXN0b3JlTWV0YVRoZW1lQ29sb3IoKTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PlxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzdGF0aWNTdHlsZU1hcC5jbGVhcigpO1xyXG4gICAgICAgICAgICByZW1vdmVQcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuZm9yRWFjaCgocm9vdCkgPT4ge1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHJvb3QucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1pbmxpbmVcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHJvb3QucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1vdmVycmlkZVwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzLmNsZWFyKCk7XHJcbiAgICAgICAgZm9yRWFjaChzdHlsZU1hbmFnZXJzLmtleXMoKSwgKGVsKSA9PiByZW1vdmVNYW5hZ2VyKGVsKSk7XHJcbiAgICAgICAgbG9hZGluZ1N0eWxlcy5jbGVhcigpO1xyXG4gICAgICAgIGNsZWFuTG9hZGluZ0xpbmtzKCk7XHJcbiAgICAgICAgZm9yRWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmtyZWFkZXJcIiksIHJlbW92ZU5vZGUpO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG1hbmFnZXIuZGVzdHJveSgpKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5zcGxpY2UoMCk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlRmFsbGJhY2tzLmZvckVhY2goKGZhbGxiYWNrKSA9PiBmYWxsYmFjay5kZXN0cm95KCkpO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZUZhbGxiYWNrcy5jbGVhcigpO1xyXG4gICAgICAgIG1ldGFPYnNlcnZlciAmJiBtZXRhT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIGNsZWFuZXJzLmZvckVhY2goKGNsZWFuKSA9PiBjbGVhbigpKTtcclxuICAgICAgICBjbGVhbmVycy5zcGxpY2UoMCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkR5bmFtaWNUaGVtZUNhY2hlKCkge1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLmNsZWFyKCk7XHJcbiAgICAgICAgcGFyc2VkVVJMQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICByZW1vdmVEb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcigpO1xyXG4gICAgICAgIGNhbmNlbFJlbmRlcmluZygpO1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclVwZGF0ZXMoKTtcclxuICAgICAgICBjbGVhbk1vZGlmaWNhdGlvbkNhY2hlKCk7XHJcbiAgICAgICAgY2xlYXJDb2xvckNhY2hlKCk7XHJcbiAgICAgICAgcmVsZWFzZVZhcmlhYmxlc1NoZWV0KCk7XHJcbiAgICAgICAgcHJldlRoZW1lID0gbnVsbDtcclxuICAgICAgICBwcmV2Rml4ZXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlQ1NTKGNzc1RleHQpIHtcclxuICAgICAgICBjc3NUZXh0ID0gcmVtb3ZlQ1NTQ29tbWVudHMoY3NzVGV4dCk7XHJcbiAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQudHJpbSgpO1xyXG4gICAgICAgIGlmICghY3NzVGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gW107XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZVJhbmdlcyA9IGdldFRva2VuRXhjbHVzaW9uUmFuZ2VzKGNzc1RleHQpO1xyXG4gICAgICAgIGNvbnN0IGJyYWNrZXRSYW5nZXMgPSBnZXRBbGxPcGVuQ2xvc2VSYW5nZXMoXHJcbiAgICAgICAgICAgIGNzc1RleHQsXHJcbiAgICAgICAgICAgIFwie1wiLFxyXG4gICAgICAgICAgICBcIn1cIixcclxuICAgICAgICAgICAgZXhjbHVkZVJhbmdlc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHJ1bGVTdGFydCA9IDA7XHJcbiAgICAgICAgYnJhY2tldFJhbmdlcy5mb3JFYWNoKChicmFja2V0cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBjc3NUZXh0LnN1YnN0cmluZyhydWxlU3RhcnQsIGJyYWNrZXRzLnN0YXJ0KS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjc3NUZXh0LnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgIGJyYWNrZXRzLnN0YXJ0ICsgMSxcclxuICAgICAgICAgICAgICAgIGJyYWNrZXRzLmVuZCAtIDFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwiQFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZUVuZEluZGV4ID0ga2V5LnNlYXJjaCgvW1xcc1xcKF0vKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUVuZEluZGV4IDwgMCA/IGtleSA6IGtleS5zdWJzdHJpbmcoMCwgdHlwZUVuZEluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUVuZEluZGV4IDwgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleS5zdWJzdHJpbmcodHlwZUVuZEluZGV4KS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IHBhcnNlQ1NTKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcnVsZXMucHVzaChydWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzOiBwYXJzZVNlbGVjdG9ycyhrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogcGFyc2VEZWNsYXJhdGlvbnMoY29udGVudClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJ1bGVTdGFydCA9IGJyYWNrZXRzLmVuZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcnVsZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRBbGxPcGVuQ2xvc2VSYW5nZXMoXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgb3BlblRva2VuLFxyXG4gICAgICAgIGNsb3NlVG9rZW4sXHJcbiAgICAgICAgZXhjbHVkZVJhbmdlcyA9IFtdXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCByYW5nZXMgPSBbXTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IHJhbmdlO1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgKHJhbmdlID0gZ2V0T3BlbkNsb3NlUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICBvcGVuVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjbG9zZVRva2VuLFxyXG4gICAgICAgICAgICAgICAgZXhjbHVkZVJhbmdlc1xyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByYW5nZXMucHVzaChyYW5nZSk7XHJcbiAgICAgICAgICAgIGkgPSByYW5nZS5lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByYW5nZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRUb2tlbkV4Y2x1c2lvblJhbmdlcyhjc3NUZXh0KSB7XHJcbiAgICAgICAgY29uc3Qgc2luZ2xlUXVvdGVHb2VzRmlyc3QgPVxyXG4gICAgICAgICAgICBjc3NUZXh0LmluZGV4T2YoXCInXCIpIDwgY3NzVGV4dC5pbmRleE9mKCdcIicpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0UXVvdGUgPSBzaW5nbGVRdW90ZUdvZXNGaXJzdCA/IFwiJ1wiIDogJ1wiJztcclxuICAgICAgICBjb25zdCBzZWNvbmRRdW90ZSA9IHNpbmdsZVF1b3RlR29lc0ZpcnN0ID8gJ1wiJyA6IFwiJ1wiO1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVSYW5nZXMgPSBnZXRBbGxPcGVuQ2xvc2VSYW5nZXMoXHJcbiAgICAgICAgICAgIGNzc1RleHQsXHJcbiAgICAgICAgICAgIGZpcnN0UXVvdGUsXHJcbiAgICAgICAgICAgIGZpcnN0UXVvdGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXMucHVzaChcclxuICAgICAgICAgICAgLi4uZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKFxyXG4gICAgICAgICAgICAgICAgY3NzVGV4dCxcclxuICAgICAgICAgICAgICAgIHNlY29uZFF1b3RlLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kUXVvdGUsXHJcbiAgICAgICAgICAgICAgICBleGNsdWRlUmFuZ2VzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXMucHVzaChcclxuICAgICAgICAgICAgLi4uZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKGNzc1RleHQsIFwiW1wiLCBcIl1cIiwgZXhjbHVkZVJhbmdlcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXMucHVzaChcclxuICAgICAgICAgICAgLi4uZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKGNzc1RleHQsIFwiKFwiLCBcIilcIiwgZXhjbHVkZVJhbmdlcylcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBleGNsdWRlUmFuZ2VzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VTZWxlY3RvcnMoc2VsZWN0b3JUZXh0KSB7XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZVJhbmdlcyA9IGdldFRva2VuRXhjbHVzaW9uUmFuZ2VzKHNlbGVjdG9yVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHNwbGl0RXhjbHVkaW5nKHNlbGVjdG9yVGV4dCwgXCIsXCIsIGV4Y2x1ZGVSYW5nZXMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VEZWNsYXJhdGlvbnMoY3NzRGVjbGFyYXRpb25zVGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVSYW5nZXMgPSBnZXRUb2tlbkV4Y2x1c2lvblJhbmdlcyhjc3NEZWNsYXJhdGlvbnNUZXh0KTtcclxuICAgICAgICBzcGxpdEV4Y2x1ZGluZyhjc3NEZWNsYXJhdGlvbnNUZXh0LCBcIjtcIiwgZXhjbHVkZVJhbmdlcykuZm9yRWFjaChcclxuICAgICAgICAgICAgKHBhcnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9uSW5kZXggPSBwYXJ0LmluZGV4T2YoXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9uSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0YW50SW5kZXggPSBwYXJ0LmluZGV4T2YoXCIhaW1wb3J0YW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHBhcnQuc3Vic3RyaW5nKDAsIGNvbG9uSW5kZXgpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb25JbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50SW5kZXggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaW1wb3J0YW50SW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJ0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBpbXBvcnRhbnRJbmRleCA+IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUGFyc2VkU3R5bGVSdWxlKHJ1bGUpIHtcclxuICAgICAgICByZXR1cm4gXCJzZWxlY3RvcnNcIiBpbiBydWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdENTUyhjc3NUZXh0KSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VDU1MoY3NzVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFBhcnNlZENTUyhwYXJzZWQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0UGFyc2VkQ1NTKHBhcnNlZCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICAgICAgY29uc3QgdGFiID0gXCIgICAgXCI7XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0UnVsZShydWxlLCBpbmRlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGFyc2VkU3R5bGVSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRTdHlsZVJ1bGUocnVsZSwgaW5kZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdEF0UnVsZShydWxlLCBpbmRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdEF0UnVsZSh7dHlwZSwgcXVlcnksIHJ1bGVzfSwgaW5kZW50KSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7aW5kZW50fSR7dHlwZX0gJHtxdWVyeX0ge2ApO1xyXG4gICAgICAgICAgICBydWxlcy5mb3JFYWNoKChjaGlsZCkgPT4gZm9ybWF0UnVsZShjaGlsZCwgYCR7aW5kZW50fSR7dGFifWApKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtpbmRlbnR9fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRTdHlsZVJ1bGUoe3NlbGVjdG9ycywgZGVjbGFyYXRpb25zfSwgaW5kZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTZWxlY3RvckluZGV4ID0gc2VsZWN0b3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzZWxlY3Rvcn0ke2kgPCBsYXN0U2VsZWN0b3JJbmRleCA/IFwiLFwiIDogXCIge1wifWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBzb3J0RGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XHJcbiAgICAgICAgICAgIHNvcnRlZC5mb3JFYWNoKCh7cHJvcGVydHksIHZhbHVlLCBpbXBvcnRhbnR9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RhYn0ke3Byb3BlcnR5fTogJHt2YWx1ZX0ke2ltcG9ydGFudCA/IFwiICFpbXBvcnRhbnRcIiA6IFwiXCJ9O2BcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAke2luZGVudH19YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyRW1wdHlSdWxlcyhwYXJzZWQpO1xyXG4gICAgICAgIHBhcnNlZC5mb3JFYWNoKChydWxlKSA9PiBmb3JtYXRSdWxlKHJ1bGUsIFwiXCIpKTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNvcnREZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgcHJlZml4UmVnZXggPSAvXi1bYS16XS0vO1xyXG4gICAgICAgIHJldHVybiBbLi4uZGVjbGFyYXRpb25zXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFQcm9wID0gYS5wcm9wZXJ0eTtcclxuICAgICAgICAgICAgY29uc3QgYlByb3AgPSBiLnByb3BlcnR5O1xyXG4gICAgICAgICAgICBjb25zdCBhUHJlZml4ID0gYVByb3AubWF0Y2gocHJlZml4UmVnZXgpPy5bMF0gPz8gXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgYlByZWZpeCA9IGJQcm9wLm1hdGNoKHByZWZpeFJlZ2V4KT8uWzBdID8/IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFOb3JtID0gYVByZWZpeCA/IGFQcm9wLnJlcGxhY2UocHJlZml4UmVnZXgsIFwiXCIpIDogYVByb3A7XHJcbiAgICAgICAgICAgIGNvbnN0IGJOb3JtID0gYlByZWZpeCA/IGJQcm9wLnJlcGxhY2UocHJlZml4UmVnZXgsIFwiXCIpIDogYlByb3A7XHJcbiAgICAgICAgICAgIGlmIChhTm9ybSA9PT0gYk5vcm0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhUHJlZml4LmxvY2FsZUNvbXBhcmUoYlByZWZpeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFOb3JtLmxvY2FsZUNvbXBhcmUoYk5vcm0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYXJFbXB0eVJ1bGVzKHJ1bGVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHJ1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlc1tpXTtcclxuICAgICAgICAgICAgaWYgKGlzUGFyc2VkU3R5bGVSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5kZWNsYXJhdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJFbXB0eVJ1bGVzKHJ1bGUucnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUucnVsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJsb2JSZWdleCA9IC91cmxcXChcXFwiKGJsb2JcXDouKj8pXFxcIlxcKS9nO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVwbGFjZUJsb2JzKHRleHQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGdldE1hdGNoZXMoYmxvYlJlZ2V4LCB0ZXh0LCAxKS5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGxvYWRBc0RhdGFVUkwodXJsKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoYmxvYlJlZ2V4LCAoKSA9PiBgdXJsKFwiJHtkYXRhLnNoaWZ0KCl9XCIpYCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiYW5uZXIgPSBgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19fX19fX1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8gICAgICAgXFxcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgLj09LiAgICAuPT0uXHJcbiAgICAgICAgICAgICAgICAgICAgICgoICApKT09KCggICkpXHJcbiAgICAgICAgICAgICAgICAgICAgLyBcIj09XCIgICAgXCI9PVwiXFxcXFxyXG4gICAgICAgICAgICAgICAgICAgL19fX198fCB8fCB8fF9fX1xcXFxcclxuICAgICAgIF9fX19fX19fICAgICBfX19fICAgIF9fX19fX19fICBfX18gICAgX19fXHJcbiAgICAgICB8ICBfX18gIFxcXFwgICAvICAgIFxcXFwgICB8ICBfX18gIFxcXFwgfCAgfCAgLyAgL1xyXG4gICAgICAgfCAgfCAgXFxcXCAgXFxcXCAvICAvXFxcXCAgXFxcXCAgfCAgfCAgXFxcXCAgXFxcXHwgIHxfLyAgL1xyXG4gICAgICAgfCAgfCAgICkgIC8gIC9fX1xcXFwgIFxcXFwgfCAgfF9fLyAgL3wgIF9fXyAgXFxcXFxyXG4gICAgICAgfCAgfF9fLyAgLyAgX19fX19fICBcXFxcfCAgX19fXyAgXFxcXHwgIHwgIFxcXFwgIFxcXFxcclxuX19fX19fX3xfX19fX19fL19fLyBfX19fIFxcXFxfX1xcXFxfX3xfX19cXFxcX19cXFxcX198X19fXFxcXF9fXFxcXF9fX19cclxufCAgX19fICBcXFxcIHwgIF9fX18vIC8gICAgXFxcXCAgIHwgIF9fXyAgXFxcXCB8ICBfX19ffCAgX19fICBcXFxcXHJcbnwgIHwgIFxcXFwgIFxcXFx8ICB8X19fIC8gIC9cXFxcICBcXFxcICB8ICB8ICBcXFxcICBcXFxcfCAgfF9fX3wgIHwgIFxcXFwgIFxcXFxcclxufCAgfF9fLyAgL3wgIF9fX18vICAvX19cXFxcICBcXFxcIHwgIHwgICApICB8ICBfX19ffCAgfF9fLyAgL1xyXG58ICBfX19fICBcXFxcfCAgfF9fLyAgX19fX19fICBcXFxcfCAgfF9fLyAgL3wgIHxfX198ICBfX19fICBcXFxcXHJcbnxfX3wgICBcXFxcX19cXFxcX19fXy9fXy8gICAgICBcXFxcX19cXFxcX19fX19fXy8gfF9fX19fX3xfX3wgICBcXFxcX19cXFxcXHJcbiAgICAgICAgICAgICAgICBodHRwczovL2RhcmtyZWFkZXIub3JnXHJcbiovXHJcblxyXG4vKiEgRGFyayByZWFkZXIgZ2VuZXJhdGVkIENTUyB8IExpY2Vuc2VkIHVuZGVyIE1JVCBodHRwczovL2dpdGh1Yi5jb20vZGFya3JlYWRlci9kYXJrcmVhZGVyL2Jsb2IvbWFpbi9MSUNFTlNFICovXHJcbmA7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBjb2xsZWN0Q1NTKCkge1xyXG4gICAgICAgIGNvbnN0IGNzcyA9IFtiYW5uZXJdO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFN0YXRpY0NTUyhzZWxlY3RvciwgY29tbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0aWNTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGljU3R5bGUgJiYgc3RhdGljU3R5bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNzcy5wdXNoKGAvKiAke2NvbW1lbnR9ICovYCk7XHJcbiAgICAgICAgICAgICAgICBjc3MucHVzaChzdGF0aWNTdHlsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBjc3MucHVzaChcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIiwgXCJGYWxsYmFjayBTdHlsZVwiKTtcclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tdXNlci1hZ2VudFwiLCBcIlVzZXItQWdlbnQgU3R5bGVcIik7XHJcbiAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLXRleHRcIiwgXCJUZXh0IFN0eWxlXCIpO1xyXG4gICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS1pbnZlcnRcIiwgXCJJbnZlcnQgU3R5bGVcIik7XHJcbiAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLXZhcmlhYmxlc1wiLCBcIlZhcmlhYmxlcyBTdHlsZVwiKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENTUyA9IFtdO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya3JlYWRlci0tc3luY1wiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGZvckVhY2goZWxlbWVudC5zaGVldC5jc3NSdWxlcywgKHJ1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJ1bGUgJiYgcnVsZS5jc3NUZXh0ICYmIG1vZGlmaWVkQ1NTLnB1c2gocnVsZS5jc3NUZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG1vZGlmaWVkQ1NTLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRDU1MgPSBmb3JtYXRDU1MobW9kaWZpZWRDU1Muam9pbihcIlxcblwiKSk7XHJcbiAgICAgICAgICAgIGNzcy5wdXNoKFwiLyogTW9kaWZpZWQgQ1NTICovXCIpO1xyXG4gICAgICAgICAgICBjc3MucHVzaChhd2FpdCByZXBsYWNlQmxvYnMoZm9ybWF0dGVkQ1NTKSk7XHJcbiAgICAgICAgICAgIGNzcy5wdXNoKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tb3ZlcnJpZGVcIiwgXCJPdmVycmlkZSBTdHlsZVwiKTtcclxuICAgICAgICByZXR1cm4gY3NzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlzRGFya1JlYWRlckVuYWJsZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlzSUZyYW1lID0gKCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgZnVuY3Rpb24gZW5hYmxlKHRoZW1lT3B0aW9ucyA9IHt9LCBmaXhlcyA9IG51bGwpIHtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IHsuLi5ERUZBVUxUX1RIRU1FLCAuLi50aGVtZU9wdGlvbnN9O1xyXG4gICAgICAgIGlmICh0aGVtZS5lbmdpbmUgIT09IFRoZW1lRW5naW5lLmR5bmFtaWNUaGVtZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVtZSBlbmdpbmUgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZU9yVXBkYXRlRHluYW1pY1RoZW1lSW50ZXJuYWwodGhlbWUsIGZpeGVzLCBpc0lGcmFtZSk7XHJcbiAgICAgICAgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRGFya1JlYWRlckVuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlKCkge1xyXG4gICAgICAgIHJlbW92ZUR5bmFtaWNUaGVtZSgpO1xyXG4gICAgICAgIGlzRGFya1JlYWRlckVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhcmtTY2hlbWUgPVxyXG4gICAgICAgIHR5cGVvZiBtYXRjaE1lZGlhID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgPyBtYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKVxyXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgIGxldCBzdG9yZSA9IHtcclxuICAgICAgICB0aGVtZU9wdGlvbnM6IG51bGwsXHJcbiAgICAgICAgZml4ZXM6IG51bGxcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb2xvclNjaGVtZSgpIHtcclxuICAgICAgICBpZiAoZGFya1NjaGVtZT8ubWF0Y2hlcykge1xyXG4gICAgICAgICAgICBlbmFibGUoc3RvcmUudGhlbWVPcHRpb25zLCBzdG9yZS5maXhlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF1dG8odGhlbWVPcHRpb25zID0ge30sIGZpeGVzID0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGVtZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3RvcmUgPSB7dGhlbWVPcHRpb25zLCBmaXhlc307XHJcbiAgICAgICAgICAgIGhhbmRsZUNvbG9yU2NoZW1lKCk7XHJcbiAgICAgICAgICAgIGlmIChpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lPy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWU/LmFkZExpc3RlbmVyKGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lPy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWU/LnJlbW92ZUxpc3RlbmVyKGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZXhwb3J0R2VuZXJhdGVkQ1NTKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBjb2xsZWN0Q1NTKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRGZXRjaE1ldGhvZCA9IHNldEZldGNoTWV0aG9kJDE7XHJcblxyXG4gICAgZXhwb3J0cy5hdXRvID0gYXV0bztcclxuICAgIGV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XHJcbiAgICBleHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcclxuICAgIGV4cG9ydHMuZXhwb3J0R2VuZXJhdGVkQ1NTID0gZXhwb3J0R2VuZXJhdGVkQ1NTO1xyXG4gICAgZXhwb3J0cy5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XHJcbiAgICBleHBvcnRzLnNldEZldGNoTWV0aG9kID0gc2V0RmV0Y2hNZXRob2Q7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcclxufSk7XHJcbiIsICJmdW5jdGlvbiBhYm91dF9tZSgpIHtcclxuICB2YXIgYmRheSA9IG5ldyBEYXRlKFwiMDYvMDgvMjAwNFwiKTtcclxuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAvLyBUbyBjYWxjdWxhdGUgdGhlIHRpbWUgZGlmZmVyZW5jZSBvZiB0d28gZGF0ZXNcclxuICB2YXIgdGltZV9kaWZmID0gdG9kYXkuZ2V0VGltZSgpIC0gYmRheS5nZXRUaW1lKCk7XHJcbiAgdGltZV9kaWZmID0gdGltZV9kaWZmIC8gMTAwMCAvIDMxNTU2OTUyO1xyXG5cclxuICBsZXQgYWdlID0gdGltZV9kaWZmLnRvRml4ZWQoMyk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImZvdW5kZXItbmFtZVwiXHJcbiAgKS5pbm5lckhUTUwgPSBgRW1tYW51ZWwgS29sZWRveWUgKH4ke2FnZX0pYDtcclxufVxyXG5cclxuYWJvdXRfbWUoKTtcclxuXHJcbnZhciBnb2pvZGV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2pvZGV2XCIpO1xyXG5nb2pvZGV2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gIGdvam9kZXYuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVJblwiKTtcclxuICBnb2pvZGV2Lm9mZnNldFdpZHRoO1xyXG4gIGdvam9kZXYuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuXHJcbiAgZ29qb2Rldi5zcmMgPSBcImltYWdlcy9nb2pvZGV2LndlYnBcIjtcclxufSk7XHJcblxyXG5nb2pvZGV2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgZ29qb2Rldi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZUluXCIpO1xyXG4gIGdvam9kZXYub2Zmc2V0V2lkdGg7XHJcbiAgZ29qb2Rldi5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG5cclxuICBnb2pvZGV2LnNyYyA9IFwiaW1hZ2VzL2xvZ28ud2VicFwiO1xyXG59KTtcclxuXHJcbmNvbnN0IERhcmtSZWFkZXIgPSByZXF1aXJlKFwiZGFya3JlYWRlclwiKTtcclxudmFyIGRhcmtUaGVtZSA9IGZhbHNlO1xyXG5jb25zdCBkYXJrVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrVG9nZ2xlXCIpO1xyXG5kYXJrVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZGFya1RoZW1lID0gIWRhcmtUaGVtZTtcclxuXHJcbiAgaWYgKGRhcmtUaGVtZSkge1xyXG4gICAgRGFya1JlYWRlci5hdXRvKHtcclxuICAgICAgYnJpZ2h0bmVzczogMTAwLFxyXG4gICAgICBjb250cmFzdDogMTAwLFxyXG4gICAgICBkYXJrU2NoZW1lVGV4dENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgRGFya1JlYWRlci5kaXNhYmxlKCk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwiZGFya1RvZ2dsZTogXCIsIGRhcmtUaGVtZSk7XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7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UUFDWDtBQUNBLGNBQU0sY0FBYyxJQUFJO0FBQUEsVUFDcEIsT0FBTyxRQUFRO0FBQUEsWUFDWCxXQUFXO0FBQUEsWUFDWCxjQUFjO0FBQUEsWUFDZCxNQUFNO0FBQUEsWUFDTixZQUFZO0FBQUEsWUFDWixPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixPQUFPO0FBQUEsWUFDUCxnQkFBZ0I7QUFBQSxZQUNoQixNQUFNO0FBQUEsWUFDTixZQUFZO0FBQUEsWUFDWixPQUFPO0FBQUEsWUFDUCxXQUFXO0FBQUEsWUFDWCxXQUFXO0FBQUEsWUFDWCxZQUFZO0FBQUEsWUFDWixXQUFXO0FBQUEsWUFDWCxPQUFPO0FBQUEsWUFDUCxnQkFBZ0I7QUFBQSxZQUNoQixVQUFVO0FBQUEsWUFDVixTQUFTO0FBQUEsWUFDVCxNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUEsWUFDVixlQUFlO0FBQUEsWUFDZixVQUFVO0FBQUEsWUFDVixVQUFVO0FBQUEsWUFDVixXQUFXO0FBQUEsWUFDWCxXQUFXO0FBQUEsWUFDWCxhQUFhO0FBQUEsWUFDYixnQkFBZ0I7QUFBQSxZQUNoQixZQUFZO0FBQUEsWUFDWixZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxZQUFZO0FBQUEsWUFDWixjQUFjO0FBQUEsWUFDZCxlQUFlO0FBQUEsWUFDZixlQUFlO0FBQUEsWUFDZixlQUFlO0FBQUEsWUFDZixlQUFlO0FBQUEsWUFDZixZQUFZO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsWUFDVCxZQUFZO0FBQUEsWUFDWixXQUFXO0FBQUEsWUFDWCxhQUFhO0FBQUEsWUFDYixhQUFhO0FBQUEsWUFDYixTQUFTO0FBQUEsWUFDVCxXQUFXO0FBQUEsWUFDWCxZQUFZO0FBQUEsWUFDWixNQUFNO0FBQUEsWUFDTixXQUFXO0FBQUEsWUFDWCxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxhQUFhO0FBQUEsWUFDYixVQUFVO0FBQUEsWUFDVixTQUFTO0FBQUEsWUFDVCxXQUFXO0FBQUEsWUFDWCxRQUFRO0FBQUEsWUFDUixPQUFPO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxVQUFVO0FBQUEsWUFDVixlQUFlO0FBQUEsWUFDZixXQUFXO0FBQUEsWUFDWCxjQUFjO0FBQUEsWUFDZCxXQUFXO0FBQUEsWUFDWCxZQUFZO0FBQUEsWUFDWixXQUFXO0FBQUEsWUFDWCxzQkFBc0I7QUFBQSxZQUN0QixXQUFXO0FBQUEsWUFDWCxXQUFXO0FBQUEsWUFDWCxZQUFZO0FBQUEsWUFDWixXQUFXO0FBQUEsWUFDWCxhQUFhO0FBQUEsWUFDYixlQUFlO0FBQUEsWUFDZixjQUFjO0FBQUEsWUFDZCxnQkFBZ0I7QUFBQSxZQUNoQixnQkFBZ0I7QUFBQSxZQUNoQixnQkFBZ0I7QUFBQSxZQUNoQixhQUFhO0FBQUEsWUFDYixNQUFNO0FBQUEsWUFDTixXQUFXO0FBQUEsWUFDWCxPQUFPO0FBQUEsWUFDUCxTQUFTO0FBQUEsWUFDVCxRQUFRO0FBQUEsWUFDUixrQkFBa0I7QUFBQSxZQUNsQixZQUFZO0FBQUEsWUFDWixjQUFjO0FBQUEsWUFDZCxjQUFjO0FBQUEsWUFDZCxnQkFBZ0I7QUFBQSxZQUNoQixpQkFBaUI7QUFBQSxZQUNqQixtQkFBbUI7QUFBQSxZQUNuQixpQkFBaUI7QUFBQSxZQUNqQixpQkFBaUI7QUFBQSxZQUNqQixjQUFjO0FBQUEsWUFDZCxXQUFXO0FBQUEsWUFDWCxXQUFXO0FBQUEsWUFDWCxVQUFVO0FBQUEsWUFDVixhQUFhO0FBQUEsWUFDYixNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsWUFDVCxPQUFPO0FBQUEsWUFDUCxXQUFXO0FBQUEsWUFDWCxRQUFRO0FBQUEsWUFDUixXQUFXO0FBQUEsWUFDWCxRQUFRO0FBQUEsWUFDUixlQUFlO0FBQUEsWUFDZixXQUFXO0FBQUEsWUFDWCxlQUFlO0FBQUEsWUFDZixlQUFlO0FBQUEsWUFDZixZQUFZO0FBQUEsWUFDWixXQUFXO0FBQUEs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QztBQUFBLElBQ0gsT0FBTztBQUNMLGlCQUFXLFFBQVE7QUFBQSxJQUNyQjtBQUNBLFlBQVEsSUFBSSxnQkFBZ0IsU0FBUztBQUFBLEVBQ3ZDLENBQUM7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAiTWVzc2FnZVR5cGVVSXRvQkciLCAiTWVzc2FnZVR5cGVCR3RvVUkiLCAiRGVidWdNZXNzYWdlVHlwZUJHdG9VSSIsICJNZXNzYWdlVHlwZUJHdG9DUyIsICJEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTIiwgIk1lc3NhZ2VUeXBlQ1N0b0JHIiwgIkRlYnVnTWVzc2FnZVR5cGVDU3RvQkciLCAiTWVzc2FnZVR5cGVDU3RvVUkiLCAiTWVzc2FnZVR5cGVVSXRvQ1MiLCAiZmV0Y2giLCAiVGhlbWVFbmdpbmUiLCAiQXV0b21hdGlvbk1vZGUiLCAicGFyc2VkVVJMIiwgIkZpbHRlck1vZGUiLCAiciIsICJiIiwgImciLCAieCIsICJvYnNlcnZlciIsICJtIiwgInRoZW1lIiwgInBhcnNlZCIsICJseCIsICJoeCIsICJ2YXJpYWJsZXNTdG9yZSIsICJpc0lGcmFtZSIsICJtYXRjaGVzIiwgImNsZWFuZXJzIiwgImkiLCAiY29tbWFuZHMiLCAidmFsdWUiLCAiX2EiLCAibW9kIiwgImRpc2FibGVDb25mbGljdGluZ1BsdWdpbnMiLCAib3ZlcnJpZGVzIiwgImVsZW1lbnRzIiwgInJvb3RWYXJzU3R5bGUiLCAiZml4ZXMiXQp9Cg==
