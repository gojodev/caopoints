"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
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
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/darkreader/darkreader.js
  var require_darkreader = __commonJS({
    "node_modules/darkreader/darkreader.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.DarkReader = {}));
      })(exports, function(exports2) {
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
          const response = await fetch(url, {
            cache: "force-cache",
            credentials: "omit",
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
          scrollbarColor: isMacOS ? "" : "auto",
          selectionColor: "auto",
          styleSystemControls: !isCSSColorSchemePropSupported,
          lightColorScheme: "Default",
          darkColorScheme: "Default",
          immediateModify: false
        };
        ({
          schemeVersion: 0,
          enabled: true,
          fetchNews: true,
          theme: DEFAULT_THEME,
          presets: [],
          customThemes: [],
          enabledByDefault: true,
          enabledFor: [],
          disabledFor: [],
          changeBrowserTheme: false,
          syncSettings: true,
          syncSitesFixes: false,
          automation: {
            enabled: false,
            mode: AutomationMode.NONE,
            behavior: "OnOff"
          },
          time: {
            activation: "18:00",
            deactivation: "9:00"
          },
          location: {
            latitude: null,
            longitude: null
          },
          previewNewDesign: false,
          previewNewestDesign: false,
          enableForPDF: true,
          enableForProtectedPages: false,
          enableContextMenus: false,
          detectDarkTheme: false
        });
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
        function logInfo(...args) {
        }
        function logWarn(...args) {
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
        function removeNode(node) {
          node && node.parentNode && node.parentNode.removeChild(node);
        }
        function watchForNodePosition(node, mode, onRestore = Function.prototype) {
          const MAX_ATTEMPTS_COUNT = 10;
          const RETRY_TIMEOUT = getDuration({ seconds: 2 });
          const ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
          const prevSibling = node.previousSibling;
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
                stop();
                return;
              }
            }
            if (mode === "prev-sibling") {
              if (prevSibling.parentNode == null) {
                stop();
                return;
              }
              if (prevSibling.parentNode !== parent) {
                updateParent(prevSibling.parentNode);
              }
            }
            if (mode === "head" && !parent.isConnected) {
              parent = document.head;
            }
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
        function getMatches(regex, input, group = 0) {
          const matches = [];
          let m;
          while (m = regex.exec(input)) {
            matches.push(m[group]);
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
            } else
              ;
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
          color && rgbaParseCache.set($color, color);
          return color;
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
        function parse($color) {
          const c = $color.trim().toLowerCase();
          if (c.match(rgbMatch)) {
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
          if ($color === "transparent") {
            return { r: 0, g: 0, b: 0, a: 0 };
          }
          if ((c.startsWith("color(") || c.startsWith("color-mix(")) && c.endsWith(")")) {
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
          return { r, g, b, a };
        }
        const hslRange = [360, 1, 1, 1];
        const hslUnits = { "%": 100, "deg": 360, "rad": 2 * Math.PI, "turn": 1 };
        function parseHSL($hsl) {
          const [h, s, l, a = 1] = getNumbersFromString($hsl, hslRange, hslUnits);
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
              let sum2 = 0;
              for (let k = 0, len3 = m1[0].length; k < len3; k++) {
                sum2 += m1[i][k] * m2[k][j];
              }
              result[i][j] = sum2;
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
        function modifyBackgroundColor(rgb, theme2) {
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
        function modifyForegroundColor(rgb, theme2) {
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
        function modifyBorderColor(rgb, theme2) {
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
        function modifyShadowColor(rgb, theme2) {
          return modifyBackgroundColor(rgb, theme2);
        }
        function modifyGradientColor(rgb, theme2) {
          return modifyBackgroundColor(rgb, theme2);
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
        function toSVGMatrix(matrix) {
          return matrix.slice(0, 4).map((m) => m.map((m2) => m2.toFixed(3)).join(" ")).join(" ");
        }
        function getSVGFilterMatrixValue(config) {
          return toSVGMatrix(createFilterMatrix(config));
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
            lines.push("    color-scheme: initial;");
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
          if (theme2.scrollbarColor) {
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
          const lines = [];
          let colorTrack;
          let colorIcons;
          let colorThumb;
          let colorThumbHover;
          let colorThumbActive;
          let colorCorner;
          if (theme2.scrollbarColor === "auto") {
            colorTrack = modifyBackgroundColor({ r: 241, g: 241, b: 241 }, theme2);
            colorIcons = modifyForegroundColor({ r: 96, g: 96, b: 96 }, theme2);
            colorThumb = modifyBackgroundColor({ r: 176, g: 176, b: 176 }, theme2);
            colorThumbHover = modifyBackgroundColor(
              { r: 144, g: 144, b: 144 },
              theme2
            );
            colorThumbActive = modifyBackgroundColor(
              { r: 96, g: 96, b: 96 },
              theme2
            );
            colorCorner = modifyBackgroundColor(
              { r: 255, g: 255, b: 255 },
              theme2
            );
          } else {
            const rgb = parseColorWithCache(theme2.scrollbarColor);
            const hsl = rgbToHSL(rgb);
            const isLight = hsl.l > 0.5;
            const lighten = (lighter) => __spreadProps(__spreadValues({}, hsl), {
              l: clamp(hsl.l + lighter, 0, 1)
            });
            const darken = (darker) => __spreadProps(__spreadValues({}, hsl), {
              l: clamp(hsl.l - darker, 0, 1)
            });
            colorTrack = hslToString(darken(0.4));
            colorIcons = hslToString(isLight ? darken(0.4) : lighten(0.4));
            colorThumb = hslToString(hsl);
            colorThumbHover = hslToString(lighten(0.1));
            colorThumbActive = hslToString(lighten(0.2));
            colorCorner = hslToString(darken(0.5));
          }
          lines.push("::-webkit-scrollbar {");
          lines.push("    background-color: ".concat(colorTrack, ";"));
          lines.push("    color: ".concat(colorIcons, ";"));
          lines.push("}");
          lines.push("::-webkit-scrollbar-thumb {");
          lines.push("    background-color: ".concat(colorThumb, ";"));
          lines.push("}");
          lines.push("::-webkit-scrollbar-thumb:hover {");
          lines.push("    background-color: ".concat(colorThumbHover, ";"));
          lines.push("}");
          lines.push("::-webkit-scrollbar-thumb:active {");
          lines.push("    background-color: ".concat(colorThumbActive, ";"));
          lines.push("}");
          lines.push("::-webkit-scrollbar-corner {");
          lines.push("    background-color: ".concat(colorCorner, ";"));
          lines.push("}");
          if (isFirefox) {
            lines.push("* {");
            lines.push("    scrollbar-color: ".concat(colorThumb, " ").concat(colorTrack, ";"));
            lines.push("}");
          }
          return lines.join("\n");
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
            if (ruleSelectors.some((s) => s === ignoredSelector)) {
              return true;
            }
          }
          return false;
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
              let url = getCSSURLValue(urlValue);
              const isURLEmpty = url.length === 0;
              const { parentStyleSheet } = rule;
              const baseURL = parentStyleSheet && parentStyleSheet.href ? getCSSBaseBath(parentStyleSheet.href) : ((_a = parentStyleSheet == null ? void 0 : parentStyleSheet.ownerNode) == null ? void 0 : _a.baseURI) || location.origin;
              url = getAbsoluteURL(baseURL, url);
              return async (theme2) => {
                if (isURLEmpty) {
                  return "url('')";
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
                unparseableMatchesLength: notParsed,
                result: modified
              };
            };
          } catch (err) {
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
        }
        const VAR_TYPE_BGCOLOR = 1 << 0;
        const VAR_TYPE_TEXTCOLOR = 1 << 1;
        const VAR_TYPE_BORDERCOLOR = 1 << 2;
        const VAR_TYPE_BGIMG = 1 << 3;
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
                this.resolveVariableType(v, VAR_TYPE_BGCOLOR);
              } else if (this.isVarType(
                v,
                VAR_TYPE_BGCOLOR | VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR
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
                  VAR_TYPE_BGCOLOR | VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR
                );
              }) != null;
              if (hasColor) {
                this.iterateVarRefs(v, (ref) => {
                  this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                });
              } else if (this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
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
                        value = typeNum === VAR_TYPE_BGCOLOR ? "#ffffff" : "#000000";
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
                  VAR_TYPE_BGCOLOR,
                  wrapBgColorVariableName,
                  tryModifyBgColor
                );
                addModifiedValue(
                  VAR_TYPE_TEXTCOLOR,
                  wrapTextColorVariableName,
                  tryModifyTextColor
                );
                addModifiedValue(
                  VAR_TYPE_BORDERCOLOR,
                  wrapBorderColorVariableName,
                  tryModifyBorderColor
                );
                if (this.isVarType(varName, VAR_TYPE_BGIMG)) {
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
                      if (this.isVarType(v, VAR_TYPE_BGCOLOR)) {
                        return wrapBgColorVariableName(v);
                      }
                      if (this.isVarType(v, VAR_TYPE_BGIMG)) {
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
                    if (modifiedShadow.unparseableMatchesLength !== modifiedShadow.matchesLength) {
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
              this.resolveVariableType(varName, VAR_TYPE_BGIMG);
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
                (v) => this.resolveVariableType(v, VAR_TYPE_BGCOLOR)
              );
            } else if (isTextColorProperty(property)) {
              this.iterateVarDeps(
                value,
                (v) => this.resolveVariableType(v, VAR_TYPE_TEXTCOLOR)
              );
            } else if (property.startsWith("border") || property.startsWith("outline")) {
              this.iterateVarDeps(
                value,
                (v) => this.resolveVariableType(v, VAR_TYPE_BORDERCOLOR)
              );
            } else if (property === "background" || property === "background-image") {
              this.iterateVarDeps(value, (v) => {
                if (this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
                  return;
                }
                const isBgColor = this.findVarRef(v, (ref) => {
                  return this.unknownColorVars.has(ref) || this.isVarType(
                    ref,
                    VAR_TYPE_BGCOLOR | VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR
                  );
                }) != null;
                this.iterateVarRefs(v, (ref) => {
                  if (isBgColor) {
                    this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
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
                  if (this.isVarType(property, VAR_TYPE_BGCOLOR)) {
                    declarations.set(
                      wrapBgColorVariableName(property),
                      tryModifyBgColor(value, theme2)
                    );
                  }
                  if (this.isVarType(property, VAR_TYPE_TEXTCOLOR)) {
                    declarations.set(
                      wrapTextColorVariableName(property),
                      tryModifyTextColor(value, theme2)
                    );
                  }
                  if (this.isVarType(property, VAR_TYPE_BORDERCOLOR)) {
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
        function isTextColorProperty(property) {
          return property === "color" || property === "caret-color" || property === "-webkit-text-fill-color";
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
            const outputColor = modifyFunction(rgb, theme2);
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
        const overrides$1 = {
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
          background: {
            customProp: "--darkreader-inline-bg",
            cssProp: "background",
            dataAttr: "data-darkreader-inline-bg"
          }
        };
        const overridesList = Object.values(overrides$1);
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
          const unsetProps = new Set(Object.keys(overrides$1));
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
              const { customProp, dataAttr } = (_a2 = overrides$1[targetCSSProp]) != null ? _a2 : shorthandOverrides[targetCSSProp];
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
                element.removeAttribute(overrides$1[cssProp].dataAttr);
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
            if (overrides$1.hasOwnProperty(property) || property.startsWith("--") && !normalizedPropList[property]) {
              setCustomProp(property, property, value);
            } else if (property === "background" && value.includes("var(")) {
              setCustomProp("background", "background", value);
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
            element.removeAttribute(overrides$1[cssProp].dataAttr);
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
            return;
          }
          meta.content = modifyBackgroundColor(color, theme2);
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
        function createSheetWatcher(element, safeGetSheetRules, callback, isCancelled) {
          let rafSheetWatcher = null;
          function watchForSheetChanges() {
            watchForSheetChangesUsingProxy();
            if (!(canUseSheetProxy$1 && element.sheet)) {
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
            canUseSheetProxy$1 = true;
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
              if (cancelled || canUseSheetProxy$1 && element.sheet) {
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
        const hostsBreakingOnSVGStyleOverride = ["www.onet.pl"];
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
              if (isSafari && !element.sheet || !isSafari && !cssRules && !accessError || isStillLoadingError(accessError)) {
                try {
                  logInfo(
                    "Linkelement ".concat(loadingLinkId, " is not loaded yet and thus will be await for"),
                    element
                  );
                  await linkLoading(element, loadingLinkId);
                } catch (err) {
                  wasLoadingError = true;
                }
                if (cancelAsyncOperations) {
                  return null;
                }
                [cssRules, accessError] = getRulesOrError();
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
              return;
            }
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
          const parsedURL = new URL(url);
          if (parsedURL.origin === location.origin) {
            return await loadAsText(url, "text/css", location.origin);
          }
          return await bgFetch({
            url,
            responseType: "text",
            mimeType: "text/css",
            origin: location.origin
          });
        }
        async function replaceCSSImports(cssText, basePath, cache = /* @__PURE__ */ new Map()) {
          cssText = removeCSSComments(cssText);
          cssText = replaceCSSFontFace(cssText);
          cssText = replaceCSSRelativeURLsWithAbsolute(cssText, basePath);
          const importMatches = getMatches(cssImportRegex, cssText);
          for (const match of importMatches) {
            const importURL = getCSSImportURL(match);
            const absoluteURL = getAbsoluteURL(basePath, importURL);
            let importedCSS;
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
                importedCSS = "";
              }
            }
            cssText = cssText.split(match).join(importedCSS);
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
        const resolvers = /* @__PURE__ */ new Map();
        function handleIsDefined(e) {
          canOptimizeUsingProxy = true;
          const tag = e.detail.tag;
          definedCustomElements.add(tag);
          if (resolvers.has(tag)) {
            const r = resolvers.get(tag);
            resolvers.delete(tag);
            r.forEach((r2) => r2());
          }
        }
        async function customElementsWhenDefined(tag) {
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
          });
          document.addEventListener("__darkreader__isDefined", handleIsDefined);
          collectUndefinedElements(document);
        }
        function resetObservers() {
          observers.forEach((o) => o.disconnect());
          observers.splice(0, observers.length);
          observedRoots = /* @__PURE__ */ new WeakSet();
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
        let canUseSheetProxy = false;
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => canUseSheetProxy = true,
          { once: true }
        );
        const overrides = /* @__PURE__ */ new WeakSet();
        const overridesBySource = /* @__PURE__ */ new WeakMap();
        function canHaveAdoptedStyleSheets(node) {
          return Array.isArray(node.adoptedStyleSheets);
        }
        function createAdoptedStyleSheetOverride(node) {
          let cancelAsyncOperations = false;
          function iterateSourceSheets(iterator) {
            node.adoptedStyleSheets.forEach((sheet) => {
              if (!overrides.has(sheet)) {
                iterator(sheet);
              }
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
              if (overrides.has(sheet)) {
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
              if (overrides.has(sheet)) {
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
                overrides.add(override);
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
                (s) => !overrides.has(s)
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
              if (canUseSheetProxy) {
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
              canUseSheetProxy = true;
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
            if (canUseSheetProxy) {
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
          constructor(onChange) {
            this.cssRules = [];
            this.commands = [];
            this.onChange = onChange;
          }
          insertRule(cssText, index = 0) {
            this.commands.push({ type: "insert", index, cssText });
            this.cssRules.splice(
              index,
              0,
              new StyleSheetCommandBuilder(this.onChange)
            );
            this.onChange();
            return index;
          }
          deleteRule(index) {
            this.commands.push({ type: "delete", index });
            this.cssRules.splice(index, 1);
            this.onChange();
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
            this.onChange();
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
        function createAdoptedStyleSheetFallback(onChange) {
          let cancelAsyncOperations = false;
          let sourceCSSRules = [];
          let lastTheme;
          let lastIgnoreImageAnalysis;
          function updateCSS(cssRules) {
            sourceCSSRules = cssRules;
            if (lastTheme && lastIgnoreImageAnalysis) {
              render(lastTheme, lastIgnoreImageAnalysis);
            }
          }
          const builder = new StyleSheetCommandBuilder(onChange);
          function render(theme2, ignoreImageAnalysis) {
            lastTheme = theme2;
            lastIgnoreImageAnalysis = ignoreImageAnalysis;
            const prepareSheet = () => {
              builder.replaceSync("");
              return builder;
            };
            const sheetModifier = createStyleSheetModifier();
            sheetModifier.modifySheet({
              prepareSheet,
              sourceCSSRules,
              theme: theme2,
              ignoreImageAnalysis,
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
          return { render, destroy, updateCSS, commands };
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
          async function checkBlobURLSupport() {
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="transparent"/></svg>';
            const bytes = new Uint8Array(svg.length);
            for (let i = 0; i < svg.length; i++) {
              bytes[i] = svg.charCodeAt(i);
            }
            const blob = new Blob([bytes], { type: "image/svg+xml" });
            const objectURL = URL.createObjectURL(blob);
            let blobURLAllowed;
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
            checkBlobURLSupport,
            { once: true }
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
        const INSTANCE_ID = generateUID();
        const styleManagers = /* @__PURE__ */ new Map();
        const adoptedStyleManagers = [];
        const adoptedStyleFallbacks = /* @__PURE__ */ new Map();
        const adoptedStyleNodeIds = /* @__PURE__ */ new WeakMap();
        const adoptedStyleChangeTokens = /* @__PURE__ */ new WeakMap();
        let theme = null;
        let fixes = null;
        let isIFrame$1 = null;
        let ignoredImageAnalysisSelectors = [];
        let ignoredInlineSelectors = [];
        function createOrUpdateStyle(className, root = document.head || document) {
          let element = root.querySelector(".".concat(className));
          if (!element) {
            element = document.createElement("style");
            element.classList.add("darkreader");
            element.classList.add(className);
            element.media = "screen";
            element.textContent = "";
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
        function setupNodePositionWatcher(node, alias) {
          nodePositionWatchers.has(alias) && nodePositionWatchers.get(alias).stop();
          nodePositionWatchers.set(alias, watchForNodePosition(node, "head"));
        }
        function stopStylePositionWatchers() {
          forEach(nodePositionWatchers.values(), (watcher) => watcher.stop());
          nodePositionWatchers.clear();
        }
        function createStaticStyleOverrides() {
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
          const selectionColors = getSelectionColor(theme);
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
            "   --darkreader-selection-background: ".concat(selectionColors.backgroundColorSelection, ";"),
            "   --darkreader-selection-text: ".concat(selectionColors.foregroundColorSelection, ";"),
            "}"
          ].join("\n");
          document.head.insertBefore(variableStyle, inlineStyle.nextSibling);
          setupNodePositionWatcher(variableStyle, "variables");
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
            return $color;
          });
        }
        function cleanFallbackStyle() {
          const fallback = document.querySelector(".darkreader--fallback");
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
            const MATCH_VAR = Symbol();
            const onAdoptedCSSChange = (e) => {
              const { node, id, cssRules, entries } = e.detail;
              if (Array.isArray(entries)) {
                entries.forEach((e2) => {
                  const cssRules2 = e2[2];
                  variablesStore.addRulesForMatching(cssRules2);
                });
                variablesStore.matchVariablesAndDependents();
              } else if (cssRules) {
                variablesStore.addRulesForMatching(cssRules);
                requestAnimationFrameOnce(
                  MATCH_VAR,
                  () => variablesStore.matchVariablesAndDependents()
                );
              }
              const tuples = Array.isArray(entries) ? entries : node && cssRules ? [[node, id, cssRules]] : [];
              tuples.forEach(([node2, id2, cssRules2]) => {
                adoptedStyleNodeIds.set(node2, id2);
                const fallback = getAdoptedStyleSheetFallback(node2);
                fallback.updateCSS(cssRules2);
              });
            };
            document.addEventListener(
              "__darkreader__adoptedStyleSheetsChange",
              onAdoptedCSSChange
            );
            cleaners.push(
              () => document.removeEventListener(
                "__darkreader__adoptedStyleSheetsChange",
                onAdoptedCSSChange
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
              const fallbackStyle = document.querySelector(
                ".darkreader--fallback"
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
            const fallback = getAdoptedStyleSheetFallback(node);
            fallback.render(theme, ignoredImageAnalysisSelectors);
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
        function getAdoptedStyleChangeToken(node) {
          if (adoptedStyleChangeTokens.has(node)) {
            return adoptedStyleChangeTokens.get(node);
          }
          const token = Symbol();
          adoptedStyleChangeTokens.set(node, token);
          return token;
        }
        function getAdoptedStyleSheetFallback(node) {
          let fallback = adoptedStyleFallbacks.get(node);
          if (!fallback) {
            fallback = createAdoptedStyleSheetFallback(() => {
              const token = getAdoptedStyleChangeToken(node);
              requestAnimationFrameOnce(token, () => {
                const id = adoptedStyleNodeIds.get(node);
                const commands = fallback == null ? void 0 : fallback.commands();
                if (!id || !commands) {
                  return;
                }
                const data = { id, commands };
                document.dispatchEvent(
                  new CustomEvent(
                    "__darkreader__adoptedStyleSheetCommands",
                    { detail: JSON.stringify(data) }
                  )
                );
              });
            });
            adoptedStyleFallbacks.set(node, fallback);
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
        function createOrUpdateDynamicThemeInternal(themeConfig, dynamicThemeFixes, iframe) {
          theme = themeConfig;
          fixes = dynamicThemeFixes;
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
            const headObserver = new MutationObserver(() => {
              if (document.head) {
                headObserver.disconnect();
                ready();
              }
            });
            headObserver.observe(document, { childList: true, subtree: true });
          }
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
            restoreMetaThemeColor();
            removeNode(document.head.querySelector(".darkreader--user-agent"));
            removeNode(document.head.querySelector(".darkreader--text"));
            removeNode(document.head.querySelector(".darkreader--invert"));
            removeNode(document.head.querySelector(".darkreader--inline"));
            removeNode(document.head.querySelector(".darkreader--override"));
            removeNode(document.head.querySelector(".darkreader--variables"));
            removeNode(document.head.querySelector(".darkreader--root-vars"));
            removeNode(document.head.querySelector('meta[name="darkreader"]'));
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
        const darkScheme = matchMedia("(prefers-color-scheme: dark)");
        let store = {
          themeOptions: null,
          fixes: null
        };
        function handleColorScheme() {
          if (darkScheme.matches) {
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
              darkScheme.addEventListener("change", handleColorScheme);
            } else {
              darkScheme.addListener(handleColorScheme);
            }
          } else {
            if (isMatchMediaChangeEventListenerSupported) {
              darkScheme.removeEventListener("change", handleColorScheme);
            } else {
              darkScheme.removeListener(handleColorScheme);
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
      h5: "o1",
      h6: "o2",
      h7: "o3",
      o1: "h5",
      o2: "h6",
      o3: "h7"
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
        h4: 66,
        h6: 46,
        o2: 46,
        o4: 28
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
      h1: 90,
      h2: 80,
      h3: 70,
      h4: 60,
      h5: 56,
      h6: 46,
      h7: 37,
      Distinction: 66,
      Merit: 46,
      Pass: 28,
      o1: 56,
      o2: 46,
      o3: 37,
      o4: 28,
      o5: 20,
      o6: 12
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
    let inputElement = [
      "target_text",
      "hl_subs_text",
      "ol_subs_text",
      "bool_hl_maths",
      "lcvp"
    ];
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
  var DarkReader = require_darkreader();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2RhcmtyZWFkZXIvZGFya3JlYWRlci5qcyIsICJob21lLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogRGFyayBSZWFkZXIgdjQuOS44OVxyXG4gKiBodHRwczovL2RhcmtyZWFkZXIub3JnL1xyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgPyBmYWN0b3J5KGV4cG9ydHMpXHJcbiAgICAgICAgOiB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZFxyXG4gICAgICAgICAgPyBkZWZpbmUoW1wiZXhwb3J0c1wiXSwgZmFjdG9yeSlcclxuICAgICAgICAgIDogKChnbG9iYWwgPVxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGdsb2JhbFRoaXNcclxuICAgICAgICAgICAgICAgICAgICA6IGdsb2JhbCB8fCBzZWxmKSxcclxuICAgICAgICAgICAgZmFjdG9yeSgoZ2xvYmFsLkRhcmtSZWFkZXIgPSB7fSkpKTtcclxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHZhciBNZXNzYWdlVHlwZVVJdG9CRztcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVVSXRvQkcpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkdFVF9EQVRBXCJdID0gXCJ1aS1iZy1nZXQtZGF0YVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiR0VUX0RFVlRPT0xTX0RBVEFcIl0gPSBcInVpLWJnLWdldC1kZXZ0b29scy1kYXRhXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJTVUJTQ1JJQkVfVE9fQ0hBTkdFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctc3Vic2NyaWJlLXRvLWNoYW5nZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlVOU1VCU0NSSUJFX0ZST01fQ0hBTkdFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctdW5zdWJzY3JpYmUtZnJvbS1jaGFuZ2VzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJDSEFOR0VfU0VUVElOR1NcIl0gPSBcInVpLWJnLWNoYW5nZS1zZXR0aW5nc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiU0VUX1RIRU1FXCJdID0gXCJ1aS1iZy1zZXQtdGhlbWVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlRPR0dMRV9BQ1RJVkVfVEFCXCJdID0gXCJ1aS1iZy10b2dnbGUtYWN0aXZlLXRhYlwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiTUFSS19ORVdTX0FTX1JFQURcIl0gPSBcInVpLWJnLW1hcmstbmV3cy1hcy1yZWFkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJNQVJLX05FV1NfQVNfRElTUExBWUVEXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1tYXJrLW5ld3MtYXMtZGlzcGxheWVkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJMT0FEX0NPTkZJR1wiXSA9IFwidWktYmctbG9hZC1jb25maWdcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkFQUExZX0RFVl9EWU5BTUlDX1RIRU1FX0ZJWEVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1hcHBseS1kZXYtZHluYW1pYy10aGVtZS1maXhlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiUkVTRVRfREVWX0RZTkFNSUNfVEhFTUVfRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLXJlc2V0LWRldi1keW5hbWljLXRoZW1lLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJBUFBMWV9ERVZfSU5WRVJTSU9OX0ZJWEVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1hcHBseS1kZXYtaW52ZXJzaW9uLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJSRVNFVF9ERVZfSU5WRVJTSU9OX0ZJWEVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1yZXNldC1kZXYtaW52ZXJzaW9uLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJBUFBMWV9ERVZfU1RBVElDX1RIRU1FU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctYXBwbHktZGV2LXN0YXRpYy10aGVtZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlJFU0VUX0RFVl9TVEFUSUNfVEhFTUVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1yZXNldC1kZXYtc3RhdGljLXRoZW1lc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiQ09MT1JfU0NIRU1FX0NIQU5HRVwiXSA9IFwidWktYmctY29sb3Itc2NoZW1lLWNoYW5nZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiSElERV9ISUdITElHSFRTXCJdID0gXCJ1aS1iZy1oaWRlLWhpZ2hsaWdodHNcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlVUl0b0JHIHx8IChNZXNzYWdlVHlwZVVJdG9CRyA9IHt9KSk7XHJcbiAgICB2YXIgTWVzc2FnZVR5cGVCR3RvVUk7XHJcbiAgICAoZnVuY3Rpb24gKE1lc3NhZ2VUeXBlQkd0b1VJKSB7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvVUlbXCJDSEFOR0VTXCJdID0gXCJiZy11aS1jaGFuZ2VzXCI7XHJcbiAgICB9KShNZXNzYWdlVHlwZUJHdG9VSSB8fCAoTWVzc2FnZVR5cGVCR3RvVUkgPSB7fSkpO1xyXG4gICAgdmFyIERlYnVnTWVzc2FnZVR5cGVCR3RvVUk7XHJcbiAgICAoZnVuY3Rpb24gKERlYnVnTWVzc2FnZVR5cGVCR3RvVUkpIHtcclxuICAgICAgICBEZWJ1Z01lc3NhZ2VUeXBlQkd0b1VJW1wiQ1NTX1VQREFURVwiXSA9IFwiZGVidWctYmctdWktY3NzLXVwZGF0ZVwiO1xyXG4gICAgICAgIERlYnVnTWVzc2FnZVR5cGVCR3RvVUlbXCJVUERBVEVcIl0gPSBcImRlYnVnLWJnLXVpLXVwZGF0ZVwiO1xyXG4gICAgfSkoRGVidWdNZXNzYWdlVHlwZUJHdG9VSSB8fCAoRGVidWdNZXNzYWdlVHlwZUJHdG9VSSA9IHt9KSk7XHJcbiAgICB2YXIgTWVzc2FnZVR5cGVCR3RvQ1M7XHJcbiAgICAoZnVuY3Rpb24gKE1lc3NhZ2VUeXBlQkd0b0NTKSB7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJBRERfQ1NTX0ZJTFRFUlwiXSA9IFwiYmctY3MtYWRkLWNzcy1maWx0ZXJcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIkFERF9EWU5BTUlDX1RIRU1FXCJdID0gXCJiZy1jcy1hZGQtZHluYW1pYy10aGVtZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiQUREX1NUQVRJQ19USEVNRVwiXSA9IFwiYmctY3MtYWRkLXN0YXRpYy10aGVtZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiQUREX1NWR19GSUxURVJcIl0gPSBcImJnLWNzLWFkZC1zdmctZmlsdGVyXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJDTEVBTl9VUFwiXSA9IFwiYmctY3MtY2xlYW4tdXBcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIkZFVENIX1JFU1BPTlNFXCJdID0gXCJiZy1jcy1mZXRjaC1yZXNwb25zZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiVU5TVVBQT1JURURfU0VOREVSXCJdID0gXCJiZy1jcy11bnN1cHBvcnRlZC1zZW5kZXJcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlQkd0b0NTIHx8IChNZXNzYWdlVHlwZUJHdG9DUyA9IHt9KSk7XHJcbiAgICB2YXIgRGVidWdNZXNzYWdlVHlwZUJHdG9DUztcclxuICAgIChmdW5jdGlvbiAoRGVidWdNZXNzYWdlVHlwZUJHdG9DUykge1xyXG4gICAgICAgIERlYnVnTWVzc2FnZVR5cGVCR3RvQ1NbXCJSRUxPQURcIl0gPSBcImRlYnVnLWJnLWNzLXJlbG9hZFwiO1xyXG4gICAgfSkoRGVidWdNZXNzYWdlVHlwZUJHdG9DUyB8fCAoRGVidWdNZXNzYWdlVHlwZUJHdG9DUyA9IHt9KSk7XHJcbiAgICB2YXIgTWVzc2FnZVR5cGVDU3RvQkc7XHJcbiAgICAoZnVuY3Rpb24gKE1lc3NhZ2VUeXBlQ1N0b0JHKSB7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJDT0xPUl9TQ0hFTUVfQ0hBTkdFXCJdID0gXCJjcy1iZy1jb2xvci1zY2hlbWUtY2hhbmdlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJEQVJLX1RIRU1FX0RFVEVDVEVEXCJdID0gXCJjcy1iZy1kYXJrLXRoZW1lLWRldGVjdGVkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJEQVJLX1RIRU1FX05PVF9ERVRFQ1RFRFwiXSA9XHJcbiAgICAgICAgICAgIFwiY3MtYmctZGFyay10aGVtZS1ub3QtZGV0ZWN0ZWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkZFVENIXCJdID0gXCJjcy1iZy1mZXRjaFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiRE9DVU1FTlRfQ09OTkVDVFwiXSA9IFwiY3MtYmctZG9jdW1lbnQtY29ubmVjdFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiRE9DVU1FTlRfRk9SR0VUXCJdID0gXCJjcy1iZy1kb2N1bWVudC1mb3JnZXRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRPQ1VNRU5UX0ZSRUVaRVwiXSA9IFwiY3MtYmctZG9jdW1lbnQtZnJlZXplXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJET0NVTUVOVF9SRVNVTUVcIl0gPSBcImNzLWJnLWRvY3VtZW50LXJlc3VtZVwiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVDU3RvQkcgfHwgKE1lc3NhZ2VUeXBlQ1N0b0JHID0ge30pKTtcclxuICAgIHZhciBEZWJ1Z01lc3NhZ2VUeXBlQ1N0b0JHO1xyXG4gICAgKGZ1bmN0aW9uIChEZWJ1Z01lc3NhZ2VUeXBlQ1N0b0JHKSB7XHJcbiAgICAgICAgRGVidWdNZXNzYWdlVHlwZUNTdG9CR1tcIkxPR1wiXSA9IFwiZGVidWctY3MtYmctbG9nXCI7XHJcbiAgICB9KShEZWJ1Z01lc3NhZ2VUeXBlQ1N0b0JHIHx8IChEZWJ1Z01lc3NhZ2VUeXBlQ1N0b0JHID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZUNTdG9VSTtcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVDU3RvVUkpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9VSVtcIkVYUE9SVF9DU1NfUkVTUE9OU0VcIl0gPSBcImNzLXVpLWV4cG9ydC1jc3MtcmVzcG9uc2VcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlQ1N0b1VJIHx8IChNZXNzYWdlVHlwZUNTdG9VSSA9IHt9KSk7XHJcbiAgICB2YXIgTWVzc2FnZVR5cGVVSXRvQ1M7XHJcbiAgICAoZnVuY3Rpb24gKE1lc3NhZ2VUeXBlVUl0b0NTKSB7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQ1NbXCJFWFBPUlRfQ1NTXCJdID0gXCJ1aS1jcy1leHBvcnQtY3NzXCI7XHJcbiAgICB9KShNZXNzYWdlVHlwZVVJdG9DUyB8fCAoTWVzc2FnZVR5cGVVSXRvQ1MgPSB7fSkpO1xyXG5cclxuICAgIGNvbnN0IGlzTmF2aWdhdG9yRGVmaW5lZCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICBjb25zdCB1c2VyQWdlbnQgPSBpc05hdmlnYXRvckRlZmluZWRcclxuICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhICYmXHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KG5hdmlnYXRvci51c2VyQWdlbnREYXRhLmJyYW5kcylcclxuICAgICAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5icmFuZHNcclxuICAgICAgICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChicmFuZCkgPT4gYCR7YnJhbmQuYnJhbmQudG9Mb3dlckNhc2UoKX0gJHticmFuZC52ZXJzaW9ufWBcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAuam9pbihcIiBcIilcclxuICAgICAgICAgICAgOiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcclxuICAgICAgICA6IFwic29tZSB1c2VyYWdlbnRcIjtcclxuICAgIGNvbnN0IHBsYXRmb3JtID0gaXNOYXZpZ2F0b3JEZWZpbmVkXHJcbiAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YSAmJlxyXG4gICAgICAgICAgdHlwZW9mIG5hdmlnYXRvci51c2VyQWdlbnREYXRhLnBsYXRmb3JtID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEucGxhdGZvcm0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICA6IG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgOiBcInNvbWUgcGxhdGZvcm1cIjtcclxuICAgIGNvbnN0IGlzQ2hyb21pdW0gPVxyXG4gICAgICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcImNocm9tZVwiKSB8fCB1c2VyQWdlbnQuaW5jbHVkZXMoXCJjaHJvbWl1bVwiKTtcclxuICAgIGNvbnN0IGlzRmlyZWZveCA9XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwiZmlyZWZveFwiKSB8fFxyXG4gICAgICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcInRodW5kZXJiaXJkXCIpIHx8XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwibGlicmV3b2xmXCIpO1xyXG4gICAgY29uc3QgaXNTYWZhcmkgPSB1c2VyQWdlbnQuaW5jbHVkZXMoXCJzYWZhcmlcIikgJiYgIWlzQ2hyb21pdW07XHJcbiAgICBjb25zdCBpc1dpbmRvd3MgPSBwbGF0Zm9ybS5zdGFydHNXaXRoKFwid2luXCIpO1xyXG4gICAgY29uc3QgaXNNYWNPUyA9IHBsYXRmb3JtLnN0YXJ0c1dpdGgoXCJtYWNcIik7XHJcbiAgICBpc05hdmlnYXRvckRlZmluZWQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudERhdGFcclxuICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhLm1vYmlsZVxyXG4gICAgICAgIDogdXNlckFnZW50LmluY2x1ZGVzKFwibW9iaWxlXCIpO1xyXG4gICAgY29uc3QgaXNTaGFkb3dEb21TdXBwb3J0ZWQgPSB0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgY29uc3QgaXNNYXRjaE1lZGlhQ2hhbmdlRXZlbnRMaXN0ZW5lclN1cHBvcnRlZCA9XHJcbiAgICAgICAgdHlwZW9mIE1lZGlhUXVlcnlMaXN0ID09PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICAgICB0eXBlb2YgTWVkaWFRdWVyeUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIGNvbnN0IGlzTGF5ZXJSdWxlU3VwcG9ydGVkID0gdHlwZW9mIENTU0xheWVyQmxvY2tSdWxlID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG0gPSB1c2VyQWdlbnQubWF0Y2goL2Nocm9tKD86ZXxpdW0pKD86XFwvfCApKFteIF0rKS8pO1xyXG4gICAgICAgIGlmIChtICYmIG1bMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1bMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSkoKTtcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbSA9IHVzZXJBZ2VudC5tYXRjaCgvKD86ZmlyZWZveHxsaWJyZXdvbGYpKD86XFwvfCApKFteIF0rKS8pO1xyXG4gICAgICAgIGlmIChtICYmIG1bMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1bMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSkoKTtcclxuICAgIGNvbnN0IGlzRGVmaW5lZFNlbGVjdG9yU3VwcG9ydGVkID0gKCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIGNvbnN0IGlzQ1NTQ29sb3JTY2hlbWVQcm9wU3VwcG9ydGVkID0gKCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpZiAoIWVsIHx8IHR5cGVvZiBlbC5zdHlsZSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWwuc3R5bGUuY29sb3JTY2hlbWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3Itc2NoZW1lOiBkYXJrXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWwuc3R5bGUuY29sb3JTY2hlbWUgPT09IFwiZGFya1wiO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlLCBvcmlnaW4pIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJvbWl0XCIsXHJcbiAgICAgICAgICAgIHJlZmVycmVyOiBvcmlnaW5cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGlzRmlyZWZveCAmJlxyXG4gICAgICAgICAgICBtaW1lVHlwZSA9PT0gXCJ0ZXh0L2Nzc1wiICYmXHJcbiAgICAgICAgICAgIHVybC5zdGFydHNXaXRoKFwibW96LWV4dGVuc2lvbjovL1wiKSAmJlxyXG4gICAgICAgICAgICB1cmwuZW5kc1dpdGgoXCIuY3NzXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBtaW1lVHlwZSAmJlxyXG4gICAgICAgICAgICAhcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIikuc3RhcnRzV2l0aChtaW1lVHlwZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaW1lIHR5cGUgbWlzbWF0Y2ggd2hlbiBsb2FkaW5nICR7dXJsfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gbG9hZCAke3VybH0gJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRBc0RhdGFVUkwodXJsLCBtaW1lVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVhZFJlc3BvbnNlQXNEYXRhVVJMKHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRBc0Jsb2IodXJsLCBtaW1lVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVhZFJlc3BvbnNlQXNEYXRhVVJMKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICBjb25zdCBkYXRhVVJMID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhVVJMO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFzVGV4dCh1cmwsIG1pbWVUeXBlLCBvcmlnaW4pIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE9LUmVzcG9uc2UodXJsLCBtaW1lVHlwZSwgb3JpZ2luKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRocm93Q09SU0Vycm9yID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiRW1iZWRkZWQgRGFyayBSZWFkZXIgY2Fubm90IGFjY2VzcyBhIGNyb3NzLW9yaWdpbiByZXNvdXJjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgICAgICBcIk92ZXJ2aWV3IHlvdXIgVVJMcyBhbmQgQ09SUyBwb2xpY2llcyBvciB1c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImBEYXJrUmVhZGVyLnNldEZldGNoTWV0aG9kKGZldGNoOiAodXJsKSA9PiBQcm9taXNlPFJlc3BvbnNlPikpYC5cIixcclxuICAgICAgICAgICAgICAgICAgICBcIlNlZSBpZiB1c2luZyBgRGFya1JlYWRlci5zZXRGZXRjaE1ldGhvZCh3aW5kb3cuZmV0Y2gpYFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlIGBEYXJrUmVhZGVyLmVuYWJsZSgpYCB3b3Jrcy5cIlxyXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiIFwiKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbiAgICBsZXQgZmV0Y2hlciA9IHRocm93Q09SU0Vycm9yO1xyXG4gICAgZnVuY3Rpb24gc2V0RmV0Y2hNZXRob2QkMShmZXRjaCkge1xyXG4gICAgICAgIGlmIChmZXRjaCkge1xyXG4gICAgICAgICAgICBmZXRjaGVyID0gZmV0Y2g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmV0Y2hlciA9IHRocm93Q09SU0Vycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNhbGxGZXRjaE1ldGhvZCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2hlcih1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2luZG93LmNocm9tZSkge1xyXG4gICAgICAgIHdpbmRvdy5jaHJvbWUgPSB7fTtcclxuICAgIH1cclxuICAgIGlmICghY2hyb21lLnJ1bnRpbWUpIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWVzc2FnZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAoYXJnc1swXSAmJiBhcmdzWzBdLnR5cGUgPT09IE1lc3NhZ2VUeXBlQ1N0b0JHLkZFVENIKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtpZH0gPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3VybCwgcmVzcG9uc2VUeXBlfSA9IGFyZ3NbMF0uZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FsbEZldGNoTWV0aG9kKHVybCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dDtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09IFwiZGF0YS11cmxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBhd2FpdCByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RlbmVycy5mb3JFYWNoKChjYikgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlQkd0b0NTLkZFVENIX1JFU1BPTlNFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RlbmVycy5mb3JFYWNoKChjYikgPT5cclxuICAgICAgICAgICAgICAgICAgICBjYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlQkd0b0NTLkZFVENIX1JFU1BPTlNFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYWxsYmFjaykge1xyXG4gICAgICAgIG1lc3NhZ2VMaXN0ZW5lcnMuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGNvbnN0IG5hdGl2ZVNlbmRNZXNzYWdlID0gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2U7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZSguLi5hcmdzKTtcclxuICAgICAgICAgICAgbmF0aXZlU2VuZE1lc3NhZ2UuYXBwbHkoY2hyb21lLnJ1bnRpbWUsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID0gc2VuZE1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIWNocm9tZS5ydW50aW1lLm9uTWVzc2FnZSkge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGNvbnN0IG5hdGl2ZUFkZExpc3RlbmVyID0gY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyO1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcihhcmdzWzBdKTtcclxuICAgICAgICAgICAgbmF0aXZlQWRkTGlzdGVuZXIuYXBwbHkoY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSAoLi4uYXJncykgPT5cclxuICAgICAgICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyKGFyZ3NbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBUaGVtZUVuZ2luZTtcclxuICAgIChmdW5jdGlvbiAoVGhlbWVFbmdpbmUpIHtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcImNzc0ZpbHRlclwiXSA9IFwiY3NzRmlsdGVyXCI7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJzdmdGaWx0ZXJcIl0gPSBcInN2Z0ZpbHRlclwiO1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wic3RhdGljVGhlbWVcIl0gPSBcInN0YXRpY1RoZW1lXCI7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJkeW5hbWljVGhlbWVcIl0gPSBcImR5bmFtaWNUaGVtZVwiO1xyXG4gICAgfSkoVGhlbWVFbmdpbmUgfHwgKFRoZW1lRW5naW5lID0ge30pKTtcclxuXHJcbiAgICB2YXIgQXV0b21hdGlvbk1vZGU7XHJcbiAgICAoZnVuY3Rpb24gKEF1dG9tYXRpb25Nb2RlKSB7XHJcbiAgICAgICAgQXV0b21hdGlvbk1vZGVbXCJOT05FXCJdID0gXCJcIjtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIlRJTUVcIl0gPSBcInRpbWVcIjtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIlNZU1RFTVwiXSA9IFwic3lzdGVtXCI7XHJcbiAgICAgICAgQXV0b21hdGlvbk1vZGVbXCJMT0NBVElPTlwiXSA9IFwibG9jYXRpb25cIjtcclxuICAgIH0pKEF1dG9tYXRpb25Nb2RlIHx8IChBdXRvbWF0aW9uTW9kZSA9IHt9KSk7XHJcblxyXG4gICAgY29uc3QgREVGQVVMVF9DT0xPUlMgPSB7XHJcbiAgICAgICAgZGFya1NjaGVtZToge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMxODFhMWJcIixcclxuICAgICAgICAgICAgdGV4dDogXCIjZThlNmUzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpZ2h0U2NoZW1lOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2RjZGFkN1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiMxODFhMWJcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBERUZBVUxUX1RIRU1FID0ge1xyXG4gICAgICAgIG1vZGU6IDEsXHJcbiAgICAgICAgYnJpZ2h0bmVzczogMTAwLFxyXG4gICAgICAgIGNvbnRyYXN0OiAxMDAsXHJcbiAgICAgICAgZ3JheXNjYWxlOiAwLFxyXG4gICAgICAgIHNlcGlhOiAwLFxyXG4gICAgICAgIHVzZUZvbnQ6IGZhbHNlLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IGlzTWFjT1NcclxuICAgICAgICAgICAgPyBcIkhlbHZldGljYSBOZXVlXCJcclxuICAgICAgICAgICAgOiBpc1dpbmRvd3NcclxuICAgICAgICAgICAgICA/IFwiU2Vnb2UgVUlcIlxyXG4gICAgICAgICAgICAgIDogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICB0ZXh0U3Ryb2tlOiAwLFxyXG4gICAgICAgIGVuZ2luZTogVGhlbWVFbmdpbmUuZHluYW1pY1RoZW1lLFxyXG4gICAgICAgIHN0eWxlc2hlZXQ6IFwiXCIsXHJcbiAgICAgICAgZGFya1NjaGVtZUJhY2tncm91bmRDb2xvcjogREVGQVVMVF9DT0xPUlMuZGFya1NjaGVtZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIGRhcmtTY2hlbWVUZXh0Q29sb3I6IERFRkFVTFRfQ09MT1JTLmRhcmtTY2hlbWUudGV4dCxcclxuICAgICAgICBsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvcjogREVGQVVMVF9DT0xPUlMubGlnaHRTY2hlbWUuYmFja2dyb3VuZCxcclxuICAgICAgICBsaWdodFNjaGVtZVRleHRDb2xvcjogREVGQVVMVF9DT0xPUlMubGlnaHRTY2hlbWUudGV4dCxcclxuICAgICAgICBzY3JvbGxiYXJDb2xvcjogaXNNYWNPUyA/IFwiXCIgOiBcImF1dG9cIixcclxuICAgICAgICBzZWxlY3Rpb25Db2xvcjogXCJhdXRvXCIsXHJcbiAgICAgICAgc3R5bGVTeXN0ZW1Db250cm9sczogIWlzQ1NTQ29sb3JTY2hlbWVQcm9wU3VwcG9ydGVkLFxyXG4gICAgICAgIGxpZ2h0Q29sb3JTY2hlbWU6IFwiRGVmYXVsdFwiLFxyXG4gICAgICAgIGRhcmtDb2xvclNjaGVtZTogXCJEZWZhdWx0XCIsXHJcbiAgICAgICAgaW1tZWRpYXRlTW9kaWZ5OiBmYWxzZVxyXG4gICAgfTtcclxuICAgICh7XHJcbiAgICAgICAgc2NoZW1lVmVyc2lvbjogMCxcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGZldGNoTmV3czogdHJ1ZSxcclxuICAgICAgICB0aGVtZTogREVGQVVMVF9USEVNRSxcclxuICAgICAgICBwcmVzZXRzOiBbXSxcclxuICAgICAgICBjdXN0b21UaGVtZXM6IFtdLFxyXG4gICAgICAgIGVuYWJsZWRCeURlZmF1bHQ6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlZEZvcjogW10sXHJcbiAgICAgICAgZGlzYWJsZWRGb3I6IFtdLFxyXG4gICAgICAgIGNoYW5nZUJyb3dzZXJUaGVtZTogZmFsc2UsXHJcbiAgICAgICAgc3luY1NldHRpbmdzOiB0cnVlLFxyXG4gICAgICAgIHN5bmNTaXRlc0ZpeGVzOiBmYWxzZSxcclxuICAgICAgICBhdXRvbWF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RlOiBBdXRvbWF0aW9uTW9kZS5OT05FLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJPbk9mZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lOiB7XHJcbiAgICAgICAgICAgIGFjdGl2YXRpb246IFwiMTg6MDBcIixcclxuICAgICAgICAgICAgZGVhY3RpdmF0aW9uOiBcIjk6MDBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IG51bGwsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlld05ld0Rlc2lnbjogZmFsc2UsXHJcbiAgICAgICAgcHJldmlld05ld2VzdERlc2lnbjogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlRm9yUERGOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZUZvclByb3RlY3RlZFBhZ2VzOiBmYWxzZSxcclxuICAgICAgICBlbmFibGVDb250ZXh0TWVudXM6IGZhbHNlLFxyXG4gICAgICAgIGRldGVjdERhcmtUaGVtZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKGl0ZW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaChpdGVtcywgaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAoaXNBcnJheUxpa2UoaXRlbXMpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvcihpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHB1c2goYXJyYXksIGFkZGl0aW9uKSB7XHJcbiAgICAgICAgZm9yRWFjaChhZGRpdGlvbiwgKGEpID0+IGFycmF5LnB1c2goYSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9BcnJheShpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW1zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nSW5mbyguLi5hcmdzKSB7fVxyXG4gICAgZnVuY3Rpb24gbG9nV2FybiguLi5hcmdzKSB7fVxyXG5cclxuICAgIGZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGxhc3RBcmdzO1xyXG4gICAgICAgIGNvbnN0IHRocm90dGxlZCA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGxhc3RBcmdzID0gYXJncztcclxuICAgICAgICAgICAgaWYgKGZyYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soLi4ubGFzdEFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soLi4ubGFzdEFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aHJvdHRsZWQsIHtjYW5jZWx9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFzeW5jVGFza3NRdWV1ZSgpIHtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IFtdO1xyXG4gICAgICAgIGxldCBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBydW5UYXNrcygpIHtcclxuICAgICAgICAgICAgbGV0IHRhc2s7XHJcbiAgICAgICAgICAgIHdoaWxlICgodGFzayA9IHRhc2tzLnNoaWZ0KCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZCh0YXNrKSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIGlmICghZnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShydW5UYXNrcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsKCkge1xyXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xyXG4gICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHthZGQsIGNhbmNlbH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxheVRva2VucyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZU9uY2UodG9rZW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGRlbGF5VG9rZW5zLmhhcyh0b2tlbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheVRva2Vucy5hZGQodG9rZW4pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGF5VG9rZW5zLmRlbGV0ZSh0b2tlbik7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RHVyYXRpb24odGltZSkge1xyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgaWYgKHRpbWUuc2Vjb25kcykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLnNlY29uZHMgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZS5taW51dGVzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUubWludXRlcyAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWUuaG91cnMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5ob3VycyAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZS5kYXlzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUuZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcclxuICAgICAgICBub2RlICYmIG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvck5vZGVQb3NpdGlvbihub2RlLCBtb2RlLCBvblJlc3RvcmUgPSBGdW5jdGlvbi5wcm90b3R5cGUpIHtcclxuICAgICAgICBjb25zdCBNQVhfQVRURU1QVFNfQ09VTlQgPSAxMDtcclxuICAgICAgICBjb25zdCBSRVRSWV9USU1FT1VUID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDJ9KTtcclxuICAgICAgICBjb25zdCBBVFRFTVBUU19JTlRFUlZBTCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAxMH0pO1xyXG4gICAgICAgIGNvbnN0IHByZXZTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byB3YXRjaCBmb3Igbm9kZSBwb3NpdGlvbjogcGFyZW50IGVsZW1lbnQgbm90IGZvdW5kXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIgJiYgIXByZXZTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIHdhdGNoIGZvciBub2RlIHBvc2l0aW9uOiB0aGVyZSBpcyBubyBwcmV2aW91cyBzaWJsaW5nXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcclxuICAgICAgICBsZXQgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHJlc3RvcmUgPSB0aHJvdHRsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ZW1wdHMgPj0gTUFYX0FUVEVNUFRTX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gc3RhcnQgPCBBVFRFTVBUU19JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFJFVFJZX1RJTUVPVVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcImhlYWRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcmVudChwcmV2U2libGluZy5wYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJoZWFkXCIgJiYgIXBhcmVudC5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQuaGVhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgIHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLmlzQ29ubmVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwcmV2U2libGluZy5uZXh0U2libGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIDogcGFyZW50LmZpcnN0Q2hpbGRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICAgICAgb25SZXN0b3JlICYmIG9uUmVzdG9yZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAobW9kZSA9PT0gXCJoZWFkXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAobm9kZS5wYXJlbnROb2RlICE9PSBwYXJlbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW5vZGUucGFyZW50Tm9kZS5pc0Nvbm5lY3RlZCkpIHx8XHJcbiAgICAgICAgICAgICAgICAobW9kZSA9PT0gXCJwcmV2LXNpYmxpbmdcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHJldmlvdXNTaWJsaW5nICE9PSBwcmV2U2libGluZylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBydW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzdG9wID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZXN0b3JlLmNhbmNlbCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc2tpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVBhcmVudCA9IChwYXJlbnROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBydW4oKTtcclxuICAgICAgICByZXR1cm4ge3J1biwgc3RvcCwgc2tpcH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlU2hhZG93SG9zdHMocm9vdCwgaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcclxuICAgICAgICAgICAgcm9vdCxcclxuICAgICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY2VwdE5vZGUobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNoYWRvd1Jvb3QgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gcm9vdC5zaGFkb3dSb290ID8gd2Fsa2VyLmN1cnJlbnROb2RlIDogd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgICAgICAgICAgIG5vZGUgIT0gbnVsbDtcclxuICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInN1cmZpbmdrZXlzX2hpbnRzX2hvc3RcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdG9yKG5vZGUpO1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZS5zaGFkb3dSb290LCBpdGVyYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGlzRE9NUmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gc2V0SXNET01SZWFkeShuZXdGdW5jKSB7XHJcbiAgICAgICAgaXNET01SZWFkeSA9IG5ld0Z1bmM7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFkeVN0YXRlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gYWRkRE9NUmVhZHlMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIGlzRE9NUmVhZHkoKSA/IGxpc3RlbmVyKCkgOiByZWFkeVN0YXRlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVET01SZWFkeUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNSZWFkeVN0YXRlQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaXNSZWFkeVN0YXRlQ29tcGxldGUoKVxyXG4gICAgICAgICAgICA/IGxpc3RlbmVyKClcclxuICAgICAgICAgICAgOiByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICBjb25zdCBvblJlYWR5U3RhdGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVhZHlTdGF0ZUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWR5c3RhdGVjaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZWFkeVN0YXRlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBvblJlYWR5U3RhdGVDaGFuZ2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgSFVHRV9NVVRBVElPTlNfQ09VTlQgPSAxMDAwO1xyXG4gICAgZnVuY3Rpb24gaXNIdWdlTXV0YXRpb24obXV0YXRpb25zKSB7XHJcbiAgICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPiBIVUdFX01VVEFUSU9OU19DT1VOVCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFkZGVkTm9kZXNDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWRkZWROb2Rlc0NvdW50ICs9IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGFkZGVkTm9kZXNDb3VudCA+IEhVR0VfTVVUQVRJT05TX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50c1RyZWVPcGVyYXRpb25zKG11dGF0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBjb25zdCBkZWxldGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgY29uc3QgbW92ZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG0pID0+IHtcclxuICAgICAgICAgICAgZm9yRWFjaChtLmFkZGVkTm9kZXMsIChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3JFYWNoKG0ucmVtb3ZlZE5vZGVzLCAobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMuYWRkKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMuZGVsZXRlKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkdXBsaWNhdGVBZGRpdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBkdXBsaWNhdGVEZWxldGlvbnMgPSBbXTtcclxuICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWRkaXRpb25zLmhhcyhub2RlLnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVBZGRpdGlvbnMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGlvbnMuaGFzKG5vZGUucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZHVwbGljYXRlQWRkaXRpb25zLmZvckVhY2goKG5vZGUpID0+IGFkZGl0aW9ucy5kZWxldGUobm9kZSkpO1xyXG4gICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5mb3JFYWNoKChub2RlKSA9PiBkZWxldGlvbnMuZGVsZXRlKG5vZGUpKTtcclxuICAgICAgICByZXR1cm4ge2FkZGl0aW9ucywgbW92ZXMsIGRlbGV0aW9uc307XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3Qgb3B0aW1pemVkVHJlZUNhbGxiYWNrcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPcHRpbWl6ZWRUcmVlT2JzZXJ2ZXIocm9vdCwgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgbGV0IG9ic2VydmVyO1xyXG4gICAgICAgIGxldCBvYnNlcnZlckNhbGxiYWNrcztcclxuICAgICAgICBsZXQgZG9tUmVhZHlMaXN0ZW5lcjtcclxuICAgICAgICBpZiAob3B0aW1pemVkVHJlZU9ic2VydmVycy5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzLmdldChyb290KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MgPSBvcHRpbWl6ZWRUcmVlQ2FsbGJhY2tzLmdldChvYnNlcnZlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGhhZEh1Z2VNdXRhdGlvbnNCZWZvcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSHVnZU11dGF0aW9uKG11dGF0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhZEh1Z2VNdXRhdGlvbnNCZWZvcmUgfHwgaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmZvckVhY2goKHtvbkh1Z2VNdXRhdGlvbnN9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zKHJvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3Vic2NyaWJlZEZvclJlYWR5U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUmVhZHlMaXN0ZW5lciA9ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKCh7b25IdWdlTXV0YXRpb25zfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkh1Z2VNdXRhdGlvbnMocm9vdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZERPTVJlYWR5TGlzdGVuZXIoZG9tUmVhZHlMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFkSHVnZU11dGF0aW9uc0JlZm9yZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzT3BlcmF0aW9ucyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnRzVHJlZU9wZXJhdGlvbnMobXV0YXRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKCh7b25NaW5vck11dGF0aW9uc30pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnMocm9vdCwgZWxlbWVudHNPcGVyYXRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgICAgICAgICAgb3B0aW1pemVkVHJlZU9ic2VydmVycy5zZXQocm9vdCwgb2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5zZXQob2JzZXJ2ZXIsIG9ic2VydmVyQ2FsbGJhY2tzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuYWRkKGNhbGxiYWNrcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbVJlYWR5TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVET01SZWFkeUxpc3RlbmVyKGRvbVJlYWR5TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyQ2FsbGJhY2tzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXplZFRyZWVPYnNlcnZlcnMuZGVsZXRlKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNYXRjaGVzKHJlZ2V4LCBpbnB1dCwgZ3JvdXAgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgIGxldCBtO1xyXG4gICAgICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobVtncm91cF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2hlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEhhc2hDb2RlKHRleHQpIHtcclxuICAgICAgICBjb25zdCBsZW4gPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgaGFzaCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCArIGMpICYgNDI5NDk2NzI5NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHBTcGVjaWFsQ2hhcnMoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZUFsbCgvW1xcXiQuKis/XFwoXFwpXFxbXFxde318XFwtXFxcXF0vZywgXCJcXFxcJCZcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRoZXNlc1JhbmdlKGlucHV0LCBzZWFyY2hTdGFydEluZGV4ID0gMCkge1xyXG4gICAgICAgIHJldHVybiBnZXRPcGVuQ2xvc2VSYW5nZShpbnB1dCwgc2VhcmNoU3RhcnRJbmRleCwgXCIoXCIsIFwiKVwiLCBbXSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRPcGVuQ2xvc2VSYW5nZShcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBzZWFyY2hTdGFydEluZGV4LFxyXG4gICAgICAgIG9wZW5Ub2tlbixcclxuICAgICAgICBjbG9zZVRva2VuLFxyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICkge1xyXG4gICAgICAgIGxldCBpbmRleE9mO1xyXG4gICAgICAgIGlmIChleGNsdWRlUmFuZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpbmRleE9mID0gKHRva2VuLCBwb3MpID0+IGlucHV0LmluZGV4T2YodG9rZW4sIHBvcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5kZXhPZiA9ICh0b2tlbiwgcG9zKSA9PlxyXG4gICAgICAgICAgICAgICAgaW5kZXhPZkV4Y2x1ZGluZyhpbnB1dCwgdG9rZW4sIHBvcywgZXhjbHVkZVJhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gaW5wdXQ7XHJcbiAgICAgICAgbGV0IGRlcHRoID0gMDtcclxuICAgICAgICBsZXQgZmlyc3RPcGVuSW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc2VhcmNoU3RhcnRJbmRleDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlbkluZGV4ID0gaW5kZXhPZihvcGVuVG9rZW4sIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5JbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpcnN0T3BlbkluZGV4ID0gb3BlbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgZGVwdGgrKztcclxuICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUluZGV4ID0gaW5kZXhPZihjbG9zZVRva2VuLCBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZUluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlbkluZGV4ID0gaW5kZXhPZihvcGVuVG9rZW4sIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5JbmRleCA8IDAgfHwgY2xvc2VJbmRleCA8PSBvcGVuSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXJ0OiBmaXJzdE9wZW5JbmRleCwgZW5kOiBjbG9zZUluZGV4ICsgMX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBjbG9zZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbmRleE9mRXhjbHVkaW5nKGlucHV0LCBzZWFyY2gsIHBvc2l0aW9uLCBleGNsdWRlUmFuZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgaSA9IGlucHV0LmluZGV4T2Yoc2VhcmNoLCBwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZXhjbHVzaW9uID0gZXhjbHVkZVJhbmdlcy5maW5kKChyKSA9PiBpID49IHIuc3RhcnQgJiYgaSA8IHIuZW5kKTtcclxuICAgICAgICBpZiAoZXhjbHVzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleE9mRXhjbHVkaW5nKFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBleGNsdXNpb24uZW5kLFxyXG4gICAgICAgICAgICAgICAgZXhjbHVkZVJhbmdlc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNwbGl0RXhjbHVkaW5nKGlucHV0LCBzZXBhcmF0b3IsIGV4Y2x1ZGVSYW5nZXMpIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IFtdO1xyXG4gICAgICAgIGxldCBjb21tYUluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IGN1cnJJbmRleCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAoY29tbWFJbmRleCA9IGluZGV4T2ZFeGNsdWRpbmcoXHJcbiAgICAgICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcixcclxuICAgICAgICAgICAgICAgIGN1cnJJbmRleCxcclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICAgICAgICAgKSkgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJySW5kZXgsIGNvbW1hSW5kZXgpLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGN1cnJJbmRleCA9IGNvbW1hSW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJySW5kZXgpLnRyaW0oKSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhbmNob3I7XHJcbiAgICBjb25zdCBwYXJzZWRVUkxDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGZpeEJhc2VVUkwoJHVybCkge1xyXG4gICAgICAgIGlmICghYW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbmNob3IuaHJlZiA9ICR1cmw7XHJcbiAgICAgICAgcmV0dXJuIGFuY2hvci5ocmVmO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VVUkwoJHVybCwgJGJhc2UgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7JHVybH0keyRiYXNlID8gYDskeyRiYXNlfWAgOiBcIlwifWA7XHJcbiAgICAgICAgaWYgKHBhcnNlZFVSTENhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRVUkxDYWNoZS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRiYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IG5ldyBVUkwoJHVybCwgZml4QmFzZVVSTCgkYmFzZSkpO1xyXG4gICAgICAgICAgICBwYXJzZWRVUkxDYWNoZS5zZXQoa2V5LCBwYXJzZWRVUkwpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVVJMO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKGZpeEJhc2VVUkwoJHVybCkpO1xyXG4gICAgICAgIHBhcnNlZFVSTENhY2hlLnNldCgkdXJsLCBwYXJzZWRVUkwpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWRVUkw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRBYnNvbHV0ZVVSTCgkYmFzZSwgJHJlbGF0aXZlKSB7XHJcbiAgICAgICAgaWYgKCRyZWxhdGl2ZS5tYXRjaCgvXmRhdGFcXFxcP1xcOi8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgvXlxcL1xcLy8udGVzdCgkcmVsYXRpdmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtsb2NhdGlvbi5wcm90b2NvbH0keyRyZWxhdGl2ZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiID0gcGFyc2VVUkwoJGJhc2UpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBwYXJzZVVSTCgkcmVsYXRpdmUsIGIuaHJlZik7XHJcbiAgICAgICAgcmV0dXJuIGEuaHJlZjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUmVsYXRpdmVIcmVmT25BYnNvbHV0ZVBhdGgoaHJlZikge1xyXG4gICAgICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsID0gcGFyc2VVUkwoaHJlZik7XHJcbiAgICAgICAgaWYgKHVybC5wcm90b2NvbCAhPT0gbG9jYXRpb24ucHJvdG9jb2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cmwucG9ydCAhPT0gbG9jYXRpb24ucG9ydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgaXRlcmF0ZSwgb25JbXBvcnRFcnJvcikge1xyXG4gICAgICAgIGZvckVhY2gocnVsZXMsIChydWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1N0eWxlUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZShydWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0ltcG9ydFJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlU2hlZXQuY3NzUnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW1wb3J0RXJyb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbXBvcnRFcnJvcj8uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNNZWRpYVJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShydWxlLm1lZGlhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2NyZWVuT3JBbGxPclF1ZXJ5ID0gbWVkaWEuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAobSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5zdGFydHNXaXRoKFwic2NyZWVuXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc3RhcnRzV2l0aChcImFsbFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnN0YXJ0c1dpdGgoXCIoXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNQcmludE9yU3BlZWNoID0gbWVkaWEuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAobSkgPT4gbS5zdGFydHNXaXRoKFwicHJpbnRcIikgfHwgbS5zdGFydHNXaXRoKFwic3BlZWNoXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2NyZWVuT3JBbGxPclF1ZXJ5IHx8ICFpc1ByaW50T3JTcGVlY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZS5jc3NSdWxlcywgaXRlcmF0ZSwgb25JbXBvcnRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0c1J1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChDU1Muc3VwcG9ydHMocnVsZS5jb25kaXRpb25UZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlLmNzc1J1bGVzLCBpdGVyYXRlLCBvbkltcG9ydEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0xheWVyUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGUuY3NzUnVsZXMsIGl0ZXJhdGUsIG9uSW1wb3J0RXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiYm9yZGVyXCIsXHJcbiAgICAgICAgXCJib3JkZXItY29sb3JcIixcclxuICAgICAgICBcImJvcmRlci1ib3R0b21cIixcclxuICAgICAgICBcImJvcmRlci1sZWZ0XCIsXHJcbiAgICAgICAgXCJib3JkZXItcmlnaHRcIixcclxuICAgICAgICBcImJvcmRlci10b3BcIixcclxuICAgICAgICBcIm91dGxpbmVcIixcclxuICAgICAgICBcIm91dGxpbmUtY29sb3JcIlxyXG4gICAgXTtcclxuICAgIGNvbnN0IHNob3J0aGFuZFZhckRlcFByb3BSZWdleHBzID0gaXNTYWZhcmlcclxuICAgICAgICA/IHNob3J0aGFuZFZhckRlcGVuZGFudFByb3BlcnRpZXMubWFwKChwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChgJHtwcm9wfTpcXFxccyooLio/KVxcXFxzKjtgKTtcclxuICAgICAgICAgICAgICByZXR1cm4gW3Byb3AsIHJlZ2V4cF07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoc3R5bGUsIGl0ZXJhdGUpIHtcclxuICAgICAgICBmb3JFYWNoKHN0eWxlLCAocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY3NzVGV4dCA9IHN0eWxlLmNzc1RleHQ7XHJcbiAgICAgICAgaWYgKGNzc1RleHQuaW5jbHVkZXMoXCJ2YXIoXCIpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1NhZmFyaSkge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRoYW5kVmFyRGVwUHJvcFJlZ2V4cHMuZm9yRWFjaCgoW3Byb3AsIHJlZ2V4cF0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGNzc1RleHQubWF0Y2gocmVnZXhwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKHByb3AsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzLmZvckVhY2goKHByb3ApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgJiYgdmFsLmluY2x1ZGVzKFwidmFyKFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKHByb3AsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjc3NUZXh0LmluY2x1ZGVzKFwiYmFja2dyb3VuZC1jb2xvcjogO1wiKSAmJlxyXG4gICAgICAgICAgICAhc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImJhY2tncm91bmRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaGFuZGxlRW1wdHlTaG9ydGhhbmQoXCJiYWNrZ3JvdW5kXCIsIHN0eWxlLCBpdGVyYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjc3NUZXh0LmluY2x1ZGVzKFwiYm9yZGVyLVwiKSAmJlxyXG4gICAgICAgICAgICBjc3NUZXh0LmluY2x1ZGVzKFwiLWNvbG9yOiA7XCIpICYmXHJcbiAgICAgICAgICAgICFzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiYm9yZGVyXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUVtcHR5U2hvcnRoYW5kKFwiYm9yZGVyXCIsIHN0eWxlLCBpdGVyYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVFbXB0eVNob3J0aGFuZChzaG9ydGhhbmQsIHN0eWxlLCBpdGVyYXRlKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50UnVsZSA9IHN0eWxlLnBhcmVudFJ1bGU7XHJcbiAgICAgICAgaWYgKGlzU3R5bGVSdWxlKHBhcmVudFJ1bGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNTU1RleHQgPVxyXG4gICAgICAgICAgICAgICAgcGFyZW50UnVsZS5wYXJlbnRTdHlsZVNoZWV0Py5vd25lck5vZGU/LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAoc291cmNlQ1NTVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVzY2FwZWRTZWxlY3RvciA9IGVzY2FwZVJlZ0V4cFNwZWNpYWxDaGFycyhcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRSdWxlLnNlbGVjdG9yVGV4dFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGVzY2FwZWRTZWxlY3RvciA9IGVzY2FwZWRTZWxlY3Rvci5yZXBsYWNlQWxsKC9cXHMrL2csIFwiXFxcXHMqXCIpO1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlZFNlbGVjdG9yID0gZXNjYXBlZFNlbGVjdG9yLnJlcGxhY2VBbGwoLzo6L2csIFwiOjo/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgICAgICAgICBgJHtlc2NhcGVkU2VsZWN0b3J9XFxcXHMqe1tefV0qJHtzaG9ydGhhbmR9OlxcXFxzKihbXjt9XSspYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gc291cmNlQ1NTVGV4dC5tYXRjaChyZWdleHApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZShzaG9ydGhhbmQsIG1hdGNoWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG9ydGhhbmQgPT09IFwiYmFja2dyb3VuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiNmZmZmZmZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjc3NVUkxSZWdleCA9IC91cmxcXCgoKCcuKj8nKXwoXCIuKj9cIil8KFteXFwpXSo/KSlcXCkvZztcclxuICAgIGNvbnN0IGNzc0ltcG9ydFJlZ2V4ID1cclxuICAgICAgICAvQGltcG9ydFxccyoodXJsXFwoKT8oKCcuKz8nKXwoXCIuKz9cIil8KFteXFwpXSo/KSlcXCk/ID8oc2NyZWVuKT87Py9naTtcclxuICAgIGZ1bmN0aW9uIGdldENTU1VSTFZhbHVlKGNzc1VSTCkge1xyXG4gICAgICAgIHJldHVybiBjc3NVUkxcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcblxcclxcXFxdKy9nLCBcIlwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXnVybFxcKCguKilcXCkkLywgXCIkMVwiKVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXCIoLiopXCIkLywgXCIkMVwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXicoLiopJyQvLCBcIiQxXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oPzpcXFxcKC4pKS9nLCBcIiQxXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTQmFzZUJhdGgodXJsKSB7XHJcbiAgICAgICAgY29uc3QgY3NzVVJMID0gcGFyc2VVUkwodXJsKTtcclxuICAgICAgICByZXR1cm4gYCR7Y3NzVVJMLm9yaWdpbn0ke2Nzc1VSTC5wYXRobmFtZS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC8oXFwvKShbXlxcL10rKSQvaSwgXCIkMVwiKX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU1JlbGF0aXZlVVJMc1dpdGhBYnNvbHV0ZSgkY3NzLCBjc3NCYXNlUGF0aCkge1xyXG4gICAgICAgIHJldHVybiAkY3NzLnJlcGxhY2UoY3NzVVJMUmVnZXgsIChtYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZ2V0Q1NTVVJMVmFsdWUobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVVUkwgPSBnZXRBYnNvbHV0ZVVSTChjc3NCYXNlUGF0aCwgdXJsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVzY2FwZWRVUkwgPSBhYnNvbHV0ZVVSTC5yZXBsYWNlQWxsKFwiJ1wiLCBcIlxcXFwnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGB1cmwoJyR7ZXNjYXBlZFVSTH0nKWA7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmb250RmFjZVJlZ2V4ID0gL0Bmb250LWZhY2VcXHMqe1tefV0qfS9nO1xyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU0ZvbnRGYWNlKCRjc3MpIHtcclxuICAgICAgICByZXR1cm4gJGNzcy5yZXBsYWNlKGZvbnRGYWNlUmVnZXgsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVSdWxlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBpbXBvcnRSdWxlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBtZWRpYVJ1bGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IHN1cHBvcnRzUnVsZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgbGF5ZXJSdWxlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBpc1N0eWxlUnVsZShydWxlKSB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0eWxlUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnVsZS5zZWxlY3RvclRleHQpIHtcclxuICAgICAgICAgICAgc3R5bGVSdWxlcy5hZGQocnVsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0ltcG9ydFJ1bGUocnVsZSkge1xyXG4gICAgICAgIGlmICghcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHlsZVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbXBvcnRSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChydWxlLmhyZWYpIHtcclxuICAgICAgICAgICAgaW1wb3J0UnVsZXMuYWRkKHJ1bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNNZWRpYVJ1bGUocnVsZSkge1xyXG4gICAgICAgIGlmICghcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHlsZVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZWRpYVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJ1bGUubWVkaWEpIHtcclxuICAgICAgICAgICAgbWVkaWFSdWxlcy5hZGQocnVsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1N1cHBvcnRzUnVsZShydWxlKSB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0eWxlUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N1cHBvcnRzUnVsZSkge1xyXG4gICAgICAgICAgICBzdXBwb3J0c1J1bGVzLmFkZChydWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzTGF5ZXJSdWxlKHJ1bGUpIHtcclxuICAgICAgICBpZiAoIXJ1bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3R5bGVSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGF5ZXJSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xheWVyUnVsZVN1cHBvcnRlZCAmJiBydWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUpIHtcclxuICAgICAgICAgICAgbGF5ZXJSdWxlcy5hZGQocnVsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXZhbE1hdGgoZXhwcmVzc2lvbikge1xyXG4gICAgICAgIGNvbnN0IHJwblN0YWNrID0gW107XHJcbiAgICAgICAgY29uc3Qgd29ya2luZ1N0YWNrID0gW107XHJcbiAgICAgICAgbGV0IGxhc3RUb2tlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZXhwcmVzc2lvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGV4cHJlc3Npb25baV07XHJcbiAgICAgICAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4gPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3BlcmF0b3JzLmhhcyh0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gb3BlcmF0b3JzLmdldCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAod29ya2luZ1N0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRPcCA9IG9wZXJhdG9ycy5nZXQod29ya2luZ1N0YWNrWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRPcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wLmxlc3NPckVxdWFsVGhhbihjdXJyZW50T3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJwblN0YWNrLnB1c2god29ya2luZ1N0YWNrLnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdvcmtpbmdTdGFjay51bnNoaWZ0KHRva2VuKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghbGFzdFRva2VuIHx8IG9wZXJhdG9ycy5oYXMobGFzdFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgcnBuU3RhY2sucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBycG5TdGFja1tycG5TdGFjay5sZW5ndGggLSAxXSArPSB0b2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcnBuU3RhY2sucHVzaCguLi53b3JraW5nU3RhY2spO1xyXG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJwblN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wID0gb3BlcmF0b3JzLmdldChycG5TdGFja1tpXSk7XHJcbiAgICAgICAgICAgIGlmIChvcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHN0YWNrLnNwbGljZSgwLCAyKTtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gob3AuZXhlYyhhcmdzWzFdLCBhcmdzWzBdKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay51bnNoaWZ0KHBhcnNlRmxvYXQocnBuU3RhY2tbaV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhY2tbMF07XHJcbiAgICB9XHJcbiAgICBjbGFzcyBPcGVyYXRvciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlY2VkZW5jZSwgbWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlY2VuZGNlID0gcHJlY2VkZW5jZTtcclxuICAgICAgICAgICAgdGhpcy5leGVjTWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleGVjKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZWNNZXRob2QobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXNzT3JFcXVhbFRoYW4ob3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlY2VuZGNlIDw9IG9wLnByZWNlbmRjZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcGVyYXRvcnMgPSBuZXcgTWFwKFtcclxuICAgICAgICBbXCIrXCIsIG5ldyBPcGVyYXRvcigxLCAobGVmdCwgcmlnaHQpID0+IGxlZnQgKyByaWdodCldLFxyXG4gICAgICAgIFtcIi1cIiwgbmV3IE9wZXJhdG9yKDEsIChsZWZ0LCByaWdodCkgPT4gbGVmdCAtIHJpZ2h0KV0sXHJcbiAgICAgICAgW1wiKlwiLCBuZXcgT3BlcmF0b3IoMiwgKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0ICogcmlnaHQpXSxcclxuICAgICAgICBbXCIvXCIsIG5ldyBPcGVyYXRvcigyLCAobGVmdCwgcmlnaHQpID0+IGxlZnQgLyByaWdodCldXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBpc1N5c3RlbURhcmtNb2RlRW5hYmxlZCA9ICgpID0+XHJcbiAgICAgICAgbWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcztcclxuXHJcbiAgICBjb25zdCBoc2xhUGFyc2VDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IHJnYmFQYXJzZUNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gcGFyc2VDb2xvcldpdGhDYWNoZSgkY29sb3IpIHtcclxuICAgICAgICAkY29sb3IgPSAkY29sb3IudHJpbSgpO1xyXG4gICAgICAgIGlmIChyZ2JhUGFyc2VDYWNoZS5oYXMoJGNvbG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmdiYVBhcnNlQ2FjaGUuZ2V0KCRjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkY29sb3IuaW5jbHVkZXMoXCJjYWxjKFwiKSkge1xyXG4gICAgICAgICAgICAkY29sb3IgPSBsb3dlckNhbGNFeHByZXNzaW9uKCRjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gcGFyc2UoJGNvbG9yKTtcclxuICAgICAgICBjb2xvciAmJiByZ2JhUGFyc2VDYWNoZS5zZXQoJGNvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VUb0hTTFdpdGhDYWNoZShjb2xvcikge1xyXG4gICAgICAgIGlmIChoc2xhUGFyc2VDYWNoZS5oYXMoY29sb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoc2xhUGFyc2VDYWNoZS5nZXQoY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yKTtcclxuICAgICAgICBpZiAoIXJnYikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICBoc2xhUGFyc2VDYWNoZS5zZXQoY29sb3IsIGhzbCk7XHJcbiAgICAgICAgcmV0dXJuIGhzbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyQ29sb3JDYWNoZSgpIHtcclxuICAgICAgICBoc2xhUGFyc2VDYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIHJnYmFQYXJzZUNhY2hlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoc2xUb1JHQih7aCwgcywgbCwgYSA9IDF9KSB7XHJcbiAgICAgICAgaWYgKHMgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgW3IsIGIsIGddID0gW2wsIGwsIGxdLm1hcCgoeCkgPT4gTWF0aC5yb3VuZCh4ICogMjU1KSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7ciwgZywgYiwgYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGMgPSAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpICogcztcclxuICAgICAgICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSk7XHJcbiAgICAgICAgY29uc3QgbSA9IGwgLSBjIC8gMjtcclxuICAgICAgICBjb25zdCBbciwgZywgYl0gPSAoXHJcbiAgICAgICAgICAgIGggPCA2MFxyXG4gICAgICAgICAgICAgICAgPyBbYywgeCwgMF1cclxuICAgICAgICAgICAgICAgIDogaCA8IDEyMFxyXG4gICAgICAgICAgICAgICAgICA/IFt4LCBjLCAwXVxyXG4gICAgICAgICAgICAgICAgICA6IGggPCAxODBcclxuICAgICAgICAgICAgICAgICAgICA/IFswLCBjLCB4XVxyXG4gICAgICAgICAgICAgICAgICAgIDogaCA8IDI0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBbMCwgeCwgY11cclxuICAgICAgICAgICAgICAgICAgICAgIDogaCA8IDMwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFt4LCAwLCBjXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFtjLCAwLCB4XVxyXG4gICAgICAgICkubWFwKChuKSA9PiBNYXRoLnJvdW5kKChuICsgbSkgKiAyNTUpKTtcclxuICAgICAgICByZXR1cm4ge3IsIGcsIGIsIGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9IU0woe3I6IHIyNTUsIGc6IGcyNTUsIGI6IGIyNTUsIGEgPSAxfSkge1xyXG4gICAgICAgIGNvbnN0IHIgPSByMjU1IC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IGcgPSBnMjU1IC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IGIgPSBiMjU1IC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBtYXggLSBtaW47XHJcbiAgICAgICAgY29uc3QgbCA9IChtYXggKyBtaW4pIC8gMjtcclxuICAgICAgICBpZiAoYyA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge2g6IDAsIHM6IDAsIGwsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaCA9XHJcbiAgICAgICAgICAgIChtYXggPT09IHJcclxuICAgICAgICAgICAgICAgID8gKChnIC0gYikgLyBjKSAlIDZcclxuICAgICAgICAgICAgICAgIDogbWF4ID09PSBnXHJcbiAgICAgICAgICAgICAgICAgID8gKGIgLSByKSAvIGMgKyAyXHJcbiAgICAgICAgICAgICAgICAgIDogKHIgLSBnKSAvIGMgKyA0KSAqIDYwO1xyXG4gICAgICAgIGlmIChoIDwgMCkge1xyXG4gICAgICAgICAgICBoICs9IDM2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcyA9IGMgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xyXG4gICAgICAgIHJldHVybiB7aCwgcywgbCwgYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b0ZpeGVkKG4sIGRpZ2l0cyA9IDApIHtcclxuICAgICAgICBjb25zdCBmaXhlZCA9IG4udG9GaXhlZChkaWdpdHMpO1xyXG4gICAgICAgIGlmIChkaWdpdHMgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpeGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkb3QgPSBmaXhlZC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICBpZiAoZG90ID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgemVyb3NNYXRjaCA9IGZpeGVkLm1hdGNoKC8wKyQvKTtcclxuICAgICAgICAgICAgaWYgKHplcm9zTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGlmICh6ZXJvc01hdGNoLmluZGV4ID09PSBkb3QgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkLnN1YnN0cmluZygwLCBkb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkLnN1YnN0cmluZygwLCB6ZXJvc01hdGNoLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZml4ZWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZ2JUb1N0cmluZyhyZ2IpIHtcclxuICAgICAgICBjb25zdCB7ciwgZywgYiwgYX0gPSByZ2I7XHJcbiAgICAgICAgaWYgKGEgIT0gbnVsbCAmJiBhIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHt0b0ZpeGVkKHIpfSwgJHt0b0ZpeGVkKGcpfSwgJHt0b0ZpeGVkKGIpfSwgJHt0b0ZpeGVkKGEsIDIpfSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYHJnYigke3RvRml4ZWQocil9LCAke3RvRml4ZWQoZyl9LCAke3RvRml4ZWQoYil9KWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZ2JUb0hleFN0cmluZyh7ciwgZywgYiwgYX0pIHtcclxuICAgICAgICByZXR1cm4gYCMkeyhhICE9IG51bGwgJiYgYSA8IDFcclxuICAgICAgICAgICAgPyBbciwgZywgYiwgTWF0aC5yb3VuZChhICogMjU1KV1cclxuICAgICAgICAgICAgOiBbciwgZywgYl1cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt4IDwgMTYgPyBcIjBcIiA6IFwiXCJ9JHt4LnRvU3RyaW5nKDE2KX1gO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaHNsVG9TdHJpbmcoaHNsKSB7XHJcbiAgICAgICAgY29uc3Qge2gsIHMsIGwsIGF9ID0gaHNsO1xyXG4gICAgICAgIGlmIChhICE9IG51bGwgJiYgYSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBoc2xhKCR7dG9GaXhlZChoKX0sICR7dG9GaXhlZChzICogMTAwKX0lLCAke3RvRml4ZWQobCAqIDEwMCl9JSwgJHt0b0ZpeGVkKGEsIDIpfSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYGhzbCgke3RvRml4ZWQoaCl9LCAke3RvRml4ZWQocyAqIDEwMCl9JSwgJHt0b0ZpeGVkKGwgKiAxMDApfSUpYDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJnYk1hdGNoID0gL15yZ2JhP1xcKFteXFwoXFwpXStcXCkkLztcclxuICAgIGNvbnN0IGhzbE1hdGNoID0gL15oc2xhP1xcKFteXFwoXFwpXStcXCkkLztcclxuICAgIGNvbnN0IGhleE1hdGNoID0gL14jWzAtOWEtZl0rJC9pO1xyXG4gICAgZnVuY3Rpb24gcGFyc2UoJGNvbG9yKSB7XHJcbiAgICAgICAgY29uc3QgYyA9ICRjb2xvci50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoYy5tYXRjaChyZ2JNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlUkdCKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5tYXRjaChoc2xNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSFNMKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5tYXRjaChoZXhNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSGV4KGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa25vd25Db2xvcnMuaGFzKGMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDb2xvckJ5TmFtZShjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN5c3RlbUNvbG9ycy5oYXMoYykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFN5c3RlbUNvbG9yKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNvbG9yID09PSBcInRyYW5zcGFyZW50XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtyOiAwLCBnOiAwLCBiOiAwLCBhOiAwfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoYy5zdGFydHNXaXRoKFwiY29sb3IoXCIpIHx8IGMuc3RhcnRzV2l0aChcImNvbG9yLW1peChcIikpICYmXHJcbiAgICAgICAgICAgIGMuZW5kc1dpdGgoXCIpXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb21QYXJzZUNvbG9yKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5zdGFydHNXaXRoKFwibGlnaHQtZGFyayhcIikgJiYgYy5lbmRzV2l0aChcIilcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgL15saWdodC1kYXJrXFwoXFxzKihbYS16XSsoXFwoLipcXCkpPyksXFxzKihbYS16XSsoXFwoLipcXCkpPylcXHMqXFwpJC9cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2hlbWVDb2xvciA9IGlzU3lzdGVtRGFya01vZGVFbmFibGVkKClcclxuICAgICAgICAgICAgICAgICAgICA/IG1hdGNoWzNdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZShzY2hlbWVDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXROdW1iZXJzKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IG51bWJlcnMgPSBbXTtcclxuICAgICAgICBsZXQgcHJldlBvcyA9IDA7XHJcbiAgICAgICAgbGV0IGlzTWluaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9ICRjb2xvci5pbmRleE9mKFwiKFwiKTtcclxuICAgICAgICAkY29sb3IgPSAkY29sb3Iuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAxLCAkY29sb3IubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkY29sb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYyA9ICRjb2xvcltpXTtcclxuICAgICAgICAgICAgaWYgKChjID49IFwiMFwiICYmIGMgPD0gXCI5XCIpIHx8IGMgPT09IFwiLlwiIHx8IGMgPT09IFwiK1wiIHx8IGMgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpc01pbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNNaW5pbmcgJiYgKGMgPT09IFwiIFwiIHx8IGMgPT09IFwiLFwiIHx8IGMgPT09IFwiL1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVycy5wdXNoKCRjb2xvci5zdWJzdHJpbmcocHJldlBvcywgaSkpO1xyXG4gICAgICAgICAgICAgICAgaXNNaW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNNaW5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNNaW5pbmcpIHtcclxuICAgICAgICAgICAgbnVtYmVycy5wdXNoKCRjb2xvci5zdWJzdHJpbmcocHJldlBvcywgJGNvbG9yLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtYmVycztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE51bWJlcnNGcm9tU3RyaW5nKHN0ciwgcmFuZ2UsIHVuaXRzKSB7XHJcbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0TnVtYmVycyhzdHIpO1xyXG4gICAgICAgIGNvbnN0IHVuaXRzTGlzdCA9IE9iamVjdC5lbnRyaWVzKHVuaXRzKTtcclxuICAgICAgICBjb25zdCBudW1iZXJzID0gcmF3XHJcbiAgICAgICAgICAgIC5tYXAoKHIpID0+IHIudHJpbSgpKVxyXG4gICAgICAgICAgICAubWFwKChyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXQgPSB1bml0c0xpc3QuZmluZCgoW3VdKSA9PiByLmVuZHNXaXRoKHUpKTtcclxuICAgICAgICAgICAgICAgIGlmICh1bml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KHIuc3Vic3RyaW5nKDAsIHIubGVuZ3RoIC0gdW5pdFswXS5sZW5ndGgpKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0WzFdKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlW2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuID0gcGFyc2VGbG9hdChyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyYW5nZVtpXSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbnVtYmVycztcclxuICAgIH1cclxuICAgIGNvbnN0IHJnYlJhbmdlID0gWzI1NSwgMjU1LCAyNTUsIDFdO1xyXG4gICAgY29uc3QgcmdiVW5pdHMgPSB7XCIlXCI6IDEwMH07XHJcbiAgICBmdW5jdGlvbiBwYXJzZVJHQigkcmdiKSB7XHJcbiAgICAgICAgY29uc3QgW3IsIGcsIGIsIGEgPSAxXSA9IGdldE51bWJlcnNGcm9tU3RyaW5nKCRyZ2IsIHJnYlJhbmdlLCByZ2JVbml0cyk7XHJcbiAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhzbFJhbmdlID0gWzM2MCwgMSwgMSwgMV07XHJcbiAgICBjb25zdCBoc2xVbml0cyA9IHtcIiVcIjogMTAwLCBcImRlZ1wiOiAzNjAsIFwicmFkXCI6IDIgKiBNYXRoLlBJLCBcInR1cm5cIjogMX07XHJcbiAgICBmdW5jdGlvbiBwYXJzZUhTTCgkaHNsKSB7XHJcbiAgICAgICAgY29uc3QgW2gsIHMsIGwsIGEgPSAxXSA9IGdldE51bWJlcnNGcm9tU3RyaW5nKCRoc2wsIGhzbFJhbmdlLCBoc2xVbml0cyk7XHJcbiAgICAgICAgcmV0dXJuIGhzbFRvUkdCKHtoLCBzLCBsLCBhfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUhleCgkaGV4KSB7XHJcbiAgICAgICAgY29uc3QgaCA9ICRoZXguc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBjYXNlIDQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IFswLCAxLCAyXS5tYXAoKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYCR7aFtpXX0ke2hbaV19YCwgMTYpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9XHJcbiAgICAgICAgICAgICAgICAgICAgaC5sZW5ndGggPT09IDMgPyAxIDogcGFyc2VJbnQoYCR7aFszXX0ke2hbM119YCwgMTYpIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGNhc2UgODoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gWzAsIDIsIDRdLm1hcCgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMiksIDE2KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPVxyXG4gICAgICAgICAgICAgICAgICAgIGgubGVuZ3RoID09PSA2ID8gMSA6IHBhcnNlSW50KGguc3Vic3RyaW5nKDYsIDgpLCAxNikgLyAyNTU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3IsIGcsIGIsIGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JCeU5hbWUoJGNvbG9yKSB7XHJcbiAgICAgICAgY29uc3QgbiA9IGtub3duQ29sb3JzLmdldCgkY29sb3IpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IChuID4+IDE2KSAmIDI1NSxcclxuICAgICAgICAgICAgZzogKG4gPj4gOCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGI6IChuID4+IDApICYgMjU1LFxyXG4gICAgICAgICAgICBhOiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN5c3RlbUNvbG9yKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IG4gPSBzeXN0ZW1Db2xvcnMuZ2V0KCRjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogKG4gPj4gMTYpICYgMjU1LFxyXG4gICAgICAgICAgICBnOiAobiA+PiA4KSAmIDI1NSxcclxuICAgICAgICAgICAgYjogKG4gPj4gMCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGE6IDFcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG93ZXJDYWxjRXhwcmVzc2lvbihjb2xvcikge1xyXG4gICAgICAgIGxldCBzZWFyY2hJbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZUJldHdlZW5JbmRpY2VzID0gKHN0YXJ0LCBlbmQsIHJlcGxhY2VtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbG9yID1cclxuICAgICAgICAgICAgICAgIGNvbG9yLnN1YnN0cmluZygwLCBzdGFydCkgKyByZXBsYWNlbWVudCArIGNvbG9yLnN1YnN0cmluZyhlbmQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2hpbGUgKChzZWFyY2hJbmRleCA9IGNvbG9yLmluZGV4T2YoXCJjYWxjKFwiKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZ2V0UGFyZW50aGVzZXNSYW5nZShjb2xvciwgc2VhcmNoSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoIXJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc2xpY2UgPSBjb2xvci5zbGljZShyYW5nZS5zdGFydCArIDEsIHJhbmdlLmVuZCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmNsdWRlc1BlcmNlbnRhZ2UgPSBzbGljZS5pbmNsdWRlcyhcIiVcIik7XHJcbiAgICAgICAgICAgIHNsaWNlID0gc2xpY2Uuc3BsaXQoXCIlXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IE1hdGgucm91bmQoZXZhbE1hdGgoc2xpY2UpKTtcclxuICAgICAgICAgICAgcmVwbGFjZUJldHdlZW5JbmRpY2VzKFxyXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc3RhcnQgLSA0LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2UuZW5kLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICsgKGluY2x1ZGVzUGVyY2VudGFnZSA/IFwiJVwiIDogXCJcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga25vd25Db2xvcnMgPSBuZXcgTWFwKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgYWxpY2VibHVlOiAweGYwZjhmZixcclxuICAgICAgICAgICAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcclxuICAgICAgICAgICAgYXF1YTogMHgwMGZmZmYsXHJcbiAgICAgICAgICAgIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxyXG4gICAgICAgICAgICBhenVyZTogMHhmMGZmZmYsXHJcbiAgICAgICAgICAgIGJlaWdlOiAweGY1ZjVkYyxcclxuICAgICAgICAgICAgYmlzcXVlOiAweGZmZTRjNCxcclxuICAgICAgICAgICAgYmxhY2s6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXHJcbiAgICAgICAgICAgIGJsdWU6IDB4MDAwMGZmLFxyXG4gICAgICAgICAgICBibHVldmlvbGV0OiAweDhhMmJlMixcclxuICAgICAgICAgICAgYnJvd246IDB4YTUyYTJhLFxyXG4gICAgICAgICAgICBidXJseXdvb2Q6IDB4ZGViODg3LFxyXG4gICAgICAgICAgICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxyXG4gICAgICAgICAgICBjaGFydHJldXNlOiAweDdmZmYwMCxcclxuICAgICAgICAgICAgY2hvY29sYXRlOiAweGQyNjkxZSxcclxuICAgICAgICAgICAgY29yYWw6IDB4ZmY3ZjUwLFxyXG4gICAgICAgICAgICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXHJcbiAgICAgICAgICAgIGNvcm5zaWxrOiAweGZmZjhkYyxcclxuICAgICAgICAgICAgY3JpbXNvbjogMHhkYzE0M2MsXHJcbiAgICAgICAgICAgIGN5YW46IDB4MDBmZmZmLFxyXG4gICAgICAgICAgICBkYXJrYmx1ZTogMHgwMDAwOGIsXHJcbiAgICAgICAgICAgIGRhcmtjeWFuOiAweDAwOGI4YixcclxuICAgICAgICAgICAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXHJcbiAgICAgICAgICAgIGRhcmtncmF5OiAweGE5YTlhOSxcclxuICAgICAgICAgICAgZGFya2dyZXk6IDB4YTlhOWE5LFxyXG4gICAgICAgICAgICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxyXG4gICAgICAgICAgICBkYXJra2hha2k6IDB4YmRiNzZiLFxyXG4gICAgICAgICAgICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXHJcbiAgICAgICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcclxuICAgICAgICAgICAgZGFya29yYW5nZTogMHhmZjhjMDAsXHJcbiAgICAgICAgICAgIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxyXG4gICAgICAgICAgICBkYXJrcmVkOiAweDhiMDAwMCxcclxuICAgICAgICAgICAgZGFya3NhbG1vbjogMHhlOTk2N2EsXHJcbiAgICAgICAgICAgIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXHJcbiAgICAgICAgICAgIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxyXG4gICAgICAgICAgICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcclxuICAgICAgICAgICAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXHJcbiAgICAgICAgICAgIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxyXG4gICAgICAgICAgICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcclxuICAgICAgICAgICAgZGVlcHBpbms6IDB4ZmYxNDkzLFxyXG4gICAgICAgICAgICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXHJcbiAgICAgICAgICAgIGRpbWdyYXk6IDB4Njk2OTY5LFxyXG4gICAgICAgICAgICBkaW1ncmV5OiAweDY5Njk2OSxcclxuICAgICAgICAgICAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXHJcbiAgICAgICAgICAgIGZpcmVicmljazogMHhiMjIyMjIsXHJcbiAgICAgICAgICAgIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcclxuICAgICAgICAgICAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxyXG4gICAgICAgICAgICBmdWNoc2lhOiAweGZmMDBmZixcclxuICAgICAgICAgICAgZ2FpbnNib3JvOiAweGRjZGNkYyxcclxuICAgICAgICAgICAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXHJcbiAgICAgICAgICAgIGdvbGQ6IDB4ZmZkNzAwLFxyXG4gICAgICAgICAgICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxyXG4gICAgICAgICAgICBncmF5OiAweDgwODA4MCxcclxuICAgICAgICAgICAgZ3JleTogMHg4MDgwODAsXHJcbiAgICAgICAgICAgIGdyZWVuOiAweDAwODAwMCxcclxuICAgICAgICAgICAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxyXG4gICAgICAgICAgICBob25leWRldzogMHhmMGZmZjAsXHJcbiAgICAgICAgICAgIGhvdHBpbms6IDB4ZmY2OWI0LFxyXG4gICAgICAgICAgICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxyXG4gICAgICAgICAgICBpbmRpZ286IDB4NGIwMDgyLFxyXG4gICAgICAgICAgICBpdm9yeTogMHhmZmZmZjAsXHJcbiAgICAgICAgICAgIGtoYWtpOiAweGYwZTY4YyxcclxuICAgICAgICAgICAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxyXG4gICAgICAgICAgICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcclxuICAgICAgICAgICAgbGF3bmdyZWVuOiAweDdjZmMwMCxcclxuICAgICAgICAgICAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcclxuICAgICAgICAgICAgbGlnaHRibHVlOiAweGFkZDhlNixcclxuICAgICAgICAgICAgbGlnaHRjb3JhbDogMHhmMDgwODAsXHJcbiAgICAgICAgICAgIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXHJcbiAgICAgICAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcclxuICAgICAgICAgICAgbGlnaHRncmF5OiAweGQzZDNkMyxcclxuICAgICAgICAgICAgbGlnaHRncmV5OiAweGQzZDNkMyxcclxuICAgICAgICAgICAgbGlnaHRncmVlbjogMHg5MGVlOTAsXHJcbiAgICAgICAgICAgIGxpZ2h0cGluazogMHhmZmI2YzEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcclxuICAgICAgICAgICAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcclxuICAgICAgICAgICAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxyXG4gICAgICAgICAgICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXHJcbiAgICAgICAgICAgIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcclxuICAgICAgICAgICAgbGltZTogMHgwMGZmMDAsXHJcbiAgICAgICAgICAgIGxpbWVncmVlbjogMHgzMmNkMzIsXHJcbiAgICAgICAgICAgIGxpbmVuOiAweGZhZjBlNixcclxuICAgICAgICAgICAgbWFnZW50YTogMHhmZjAwZmYsXHJcbiAgICAgICAgICAgIG1hcm9vbjogMHg4MDAwMDAsXHJcbiAgICAgICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxyXG4gICAgICAgICAgICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcclxuICAgICAgICAgICAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcclxuICAgICAgICAgICAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcclxuICAgICAgICAgICAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxyXG4gICAgICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxyXG4gICAgICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXHJcbiAgICAgICAgICAgIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXHJcbiAgICAgICAgICAgIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXHJcbiAgICAgICAgICAgIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXHJcbiAgICAgICAgICAgIG1pbnRjcmVhbTogMHhmNWZmZmEsXHJcbiAgICAgICAgICAgIG1pc3R5cm9zZTogMHhmZmU0ZTEsXHJcbiAgICAgICAgICAgIG1vY2Nhc2luOiAweGZmZTRiNSxcclxuICAgICAgICAgICAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxyXG4gICAgICAgICAgICBuYXZ5OiAweDAwMDA4MCxcclxuICAgICAgICAgICAgb2xkbGFjZTogMHhmZGY1ZTYsXHJcbiAgICAgICAgICAgIG9saXZlOiAweDgwODAwMCxcclxuICAgICAgICAgICAgb2xpdmVkcmFiOiAweDZiOGUyMyxcclxuICAgICAgICAgICAgb3JhbmdlOiAweGZmYTUwMCxcclxuICAgICAgICAgICAgb3JhbmdlcmVkOiAweGZmNDUwMCxcclxuICAgICAgICAgICAgb3JjaGlkOiAweGRhNzBkNixcclxuICAgICAgICAgICAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXHJcbiAgICAgICAgICAgIHBhbGVncmVlbjogMHg5OGZiOTgsXHJcbiAgICAgICAgICAgIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxyXG4gICAgICAgICAgICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcclxuICAgICAgICAgICAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXHJcbiAgICAgICAgICAgIHBlYWNocHVmZjogMHhmZmRhYjksXHJcbiAgICAgICAgICAgIHBlcnU6IDB4Y2Q4NTNmLFxyXG4gICAgICAgICAgICBwaW5rOiAweGZmYzBjYixcclxuICAgICAgICAgICAgcGx1bTogMHhkZGEwZGQsXHJcbiAgICAgICAgICAgIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxyXG4gICAgICAgICAgICBwdXJwbGU6IDB4ODAwMDgwLFxyXG4gICAgICAgICAgICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcclxuICAgICAgICAgICAgcmVkOiAweGZmMDAwMCxcclxuICAgICAgICAgICAgcm9zeWJyb3duOiAweGJjOGY4ZixcclxuICAgICAgICAgICAgcm95YWxibHVlOiAweDQxNjllMSxcclxuICAgICAgICAgICAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxyXG4gICAgICAgICAgICBzYWxtb246IDB4ZmE4MDcyLFxyXG4gICAgICAgICAgICBzYW5keWJyb3duOiAweGY0YTQ2MCxcclxuICAgICAgICAgICAgc2VhZ3JlZW46IDB4MmU4YjU3LFxyXG4gICAgICAgICAgICBzZWFzaGVsbDogMHhmZmY1ZWUsXHJcbiAgICAgICAgICAgIHNpZW5uYTogMHhhMDUyMmQsXHJcbiAgICAgICAgICAgIHNpbHZlcjogMHhjMGMwYzAsXHJcbiAgICAgICAgICAgIHNreWJsdWU6IDB4ODdjZWViLFxyXG4gICAgICAgICAgICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxyXG4gICAgICAgICAgICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxyXG4gICAgICAgICAgICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxyXG4gICAgICAgICAgICBzbm93OiAweGZmZmFmYSxcclxuICAgICAgICAgICAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxyXG4gICAgICAgICAgICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxyXG4gICAgICAgICAgICB0YW46IDB4ZDJiNDhjLFxyXG4gICAgICAgICAgICB0ZWFsOiAweDAwODA4MCxcclxuICAgICAgICAgICAgdGhpc3RsZTogMHhkOGJmZDgsXHJcbiAgICAgICAgICAgIHRvbWF0bzogMHhmZjYzNDcsXHJcbiAgICAgICAgICAgIHR1cnF1b2lzZTogMHg0MGUwZDAsXHJcbiAgICAgICAgICAgIHZpb2xldDogMHhlZTgyZWUsXHJcbiAgICAgICAgICAgIHdoZWF0OiAweGY1ZGViMyxcclxuICAgICAgICAgICAgd2hpdGU6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcclxuICAgICAgICAgICAgeWVsbG93OiAweGZmZmYwMCxcclxuICAgICAgICAgICAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICBjb25zdCBzeXN0ZW1Db2xvcnMgPSBuZXcgTWFwKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgXCJBY3RpdmVCb3JkZXJcIjogMHgzYjk5ZmMsXHJcbiAgICAgICAgICAgIFwiQWN0aXZlQ2FwdGlvblwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJBcHBXb3Jrc3BhY2VcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiQmFja2dyb3VuZFwiOiAweDYzNjNjZSxcclxuICAgICAgICAgICAgXCJCdXR0b25GYWNlXCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIkJ1dHRvbkhpZ2hsaWdodFwiOiAweGU5ZTllOSxcclxuICAgICAgICAgICAgXCJCdXR0b25TaGFkb3dcIjogMHg5ZmEwOWYsXHJcbiAgICAgICAgICAgIFwiQnV0dG9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJDYXB0aW9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJHcmF5VGV4dFwiOiAweDdmN2Y3ZixcclxuICAgICAgICAgICAgXCJIaWdobGlnaHRcIjogMHhiMmQ3ZmYsXHJcbiAgICAgICAgICAgIFwiSGlnaGxpZ2h0VGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUJvcmRlclwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUNhcHRpb25cIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiSW5hY3RpdmVDYXB0aW9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJJbmZvQmFja2dyb3VuZFwiOiAweGZiZmNjNSxcclxuICAgICAgICAgICAgXCJJbmZvVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJNZW51XCI6IDB4ZjZmNmY2LFxyXG4gICAgICAgICAgICBcIk1lbnVUZXh0XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlNjcm9sbGJhclwiOiAweGFhYWFhYSxcclxuICAgICAgICAgICAgXCJUaHJlZUREYXJrU2hhZG93XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIlRocmVlREZhY2VcIjogMHhjMGMwYzAsXHJcbiAgICAgICAgICAgIFwiVGhyZWVESGlnaGxpZ2h0XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlRocmVlRExpZ2h0U2hhZG93XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlRocmVlRFNoYWRvd1wiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJXaW5kb3dcIjogMHhlY2VjZWMsXHJcbiAgICAgICAgICAgIFwiV2luZG93RnJhbWVcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiV2luZG93VGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCItd2Via2l0LWZvY3VzLXJpbmctY29sb3JcIjogMHhlNTk3MDBcclxuICAgICAgICB9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleS50b0xvd2VyQ2FzZSgpLCB2YWx1ZV0pXHJcbiAgICApO1xyXG4gICAgZnVuY3Rpb24gZ2V0U1JHQkxpZ2h0bmVzcyhyLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuICgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpIC8gMjU1O1xyXG4gICAgfVxyXG4gICAgbGV0IGNhbnZhcyQxO1xyXG4gICAgbGV0IGNvbnRleHQkMTtcclxuICAgIGZ1bmN0aW9uIGRvbVBhcnNlQ29sb3IoJGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZXh0JDEpIHtcclxuICAgICAgICAgICAgY2FudmFzJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgICBjYW52YXMkMS53aWR0aCA9IDE7XHJcbiAgICAgICAgICAgIGNhbnZhcyQxLmhlaWdodCA9IDE7XHJcbiAgICAgICAgICAgIGNvbnRleHQkMSA9IGNhbnZhcyQxLmdldENvbnRleHQoXCIyZFwiLCB7d2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQkMS5maWxsU3R5bGUgPSAkY29sb3I7XHJcbiAgICAgICAgY29udGV4dCQxLmZpbGxSZWN0KDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIGNvbnN0IGQgPSBjb250ZXh0JDEuZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBgcmdiYSgke2RbMF19LCAke2RbMV19LCAke2RbMl19LCAkeyhkWzNdIC8gMjU1KS50b0ZpeGVkKDIpfSlgO1xyXG4gICAgICAgIHJldHVybiBwYXJzZVJHQihjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XHJcbiAgICAgICAgcmV0dXJuICgoeCAtIGluTG93KSAqIChvdXRIaWdoIC0gb3V0TG93KSkgLyAoaW5IaWdoIC0gaW5Mb3cpICsgb3V0TG93O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xhbXAoeCwgbWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHgpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG11bHRpcGx5TWF0cmljZXMobTEsIG0yKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG0xLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgbGVuMiA9IG0yWzBdLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuMyA9IG0xWzBdLmxlbmd0aDsgayA8IGxlbjM7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBtMVtpXVtrXSAqIG0yW2tdW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldW2pdID0gc3VtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmlsdGVyTWF0cml4KGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtID0gTWF0cml4LmlkZW50aXR5KCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zZXBpYSAhPT0gMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguc2VwaWEoY29uZmlnLnNlcGlhIC8gMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuZ3JheXNjYWxlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5ncmF5c2NhbGUoY29uZmlnLmdyYXlzY2FsZSAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmNvbnRyYXN0ICE9PSAxMDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmNvbnRyYXN0KGNvbmZpZy5jb250cmFzdCAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmJyaWdodG5lc3MgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguYnJpZ2h0bmVzcyhjb25maWcuYnJpZ2h0bmVzcyAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmludmVydE5IdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXBwbHlDb2xvck1hdHJpeChbciwgZywgYl0sIG1hdHJpeCkge1xyXG4gICAgICAgIGNvbnN0IHJnYiA9IFtbciAvIDI1NV0sIFtnIC8gMjU1XSwgW2IgLyAyNTVdLCBbMV0sIFsxXV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbXVsdGlwbHlNYXRyaWNlcyhtYXRyaXgsIHJnYik7XHJcbiAgICAgICAgcmV0dXJuIFswLCAxLCAyXS5tYXAoKGkpID0+XHJcbiAgICAgICAgICAgIGNsYW1wKE1hdGgucm91bmQocmVzdWx0W2ldWzBdICogMjU1KSwgMCwgMjU1KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBNYXRyaXggPSB7XHJcbiAgICAgICAgaWRlbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludmVydE5IdWUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMC4zMzMsIC0wLjY2NywgLTAuNjY3LCAwLCAxXSxcclxuICAgICAgICAgICAgICAgIFstMC42NjcsIDAuMzMzLCAtMC42NjcsIDAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWy0wLjY2NywgLTAuNjY3LCAwLjMzMywgMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyaWdodG5lc3Modikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW3YsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIHYsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIHYsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cmFzdCh2KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSAoMSAtIHYpIC8gMjtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFt2LCAwLCAwLCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCB2LCAwLCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCB2LCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VwaWEodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMzkzICsgMC42MDcgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzY5IC0gMC43NjkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMTg5IC0gMC4xODkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjM0OSAtIDAuMzQ5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjY4NiArIDAuMzE0ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjE2OCAtIDAuMTY4ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yNzIgLSAwLjI3MiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC41MzQgLSAwLjUzNCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4xMzEgKyAwLjg2OSAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmF5c2NhbGUodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjEyNiArIDAuNzg3NCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC43MTUyIC0gMC43MTUyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjA3MjIgLSAwLjA3MjIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzE1MiArIDAuMjg0OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjcxNTIgLSAwLjcxNTIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMDcyMiArIDAuOTI3OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCZ1BvbGUodGhlbWUpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmtTY2hlbWUgPSB0aGVtZS5tb2RlID09PSAxO1xyXG4gICAgICAgIGNvbnN0IHByb3AgPSBpc0RhcmtTY2hlbWVcclxuICAgICAgICAgICAgPyBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIlxyXG4gICAgICAgICAgICA6IFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIjtcclxuICAgICAgICByZXR1cm4gdGhlbWVbcHJvcF07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRGZ1BvbGUodGhlbWUpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmtTY2hlbWUgPSB0aGVtZS5tb2RlID09PSAxO1xyXG4gICAgICAgIGNvbnN0IHByb3AgPSBpc0RhcmtTY2hlbWVcclxuICAgICAgICAgICAgPyBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIlxyXG4gICAgICAgICAgICA6IFwibGlnaHRTY2hlbWVUZXh0Q29sb3JcIjtcclxuICAgICAgICByZXR1cm4gdGhlbWVbcHJvcF07XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2xvck1vZGlmaWNhdGlvbkNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJDb2xvck1vZGlmaWNhdGlvbkNhY2hlKCkge1xyXG4gICAgICAgIGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJnYkNhY2hlS2V5cyA9IFtcInJcIiwgXCJnXCIsIFwiYlwiLCBcImFcIl07XHJcbiAgICBjb25zdCB0aGVtZUNhY2hlS2V5cyQxID0gW1xyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwiYnJpZ2h0bmVzc1wiLFxyXG4gICAgICAgIFwiY29udHJhc3RcIixcclxuICAgICAgICBcImdyYXlzY2FsZVwiLFxyXG4gICAgICAgIFwic2VwaWFcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZVRleHRDb2xvclwiXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FjaGVJZChyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdElkID0gXCJcIjtcclxuICAgICAgICByZ2JDYWNoZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdElkICs9IGAke3JnYltrZXldfTtgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoZW1lQ2FjaGVLZXlzJDEuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdElkICs9IGAke3RoZW1lW2tleV19O2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdElkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgcmdiLFxyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIG1vZGlmeUhTTCxcclxuICAgICAgICBwb2xlQ29sb3IsXHJcbiAgICAgICAgYW5vdGhlclBvbGVDb2xvclxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGZuQ2FjaGU7XHJcbiAgICAgICAgaWYgKGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuaGFzKG1vZGlmeUhTTCkpIHtcclxuICAgICAgICAgICAgZm5DYWNoZSA9IGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuZ2V0KG1vZGlmeUhTTCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm5DYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgY29sb3JNb2RpZmljYXRpb25DYWNoZS5zZXQobW9kaWZ5SFNMLCBmbkNhY2hlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSBnZXRDYWNoZUlkKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIGlmIChmbkNhY2hlLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuQ2FjaGUuZ2V0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICBjb25zdCBwb2xlID0gcG9sZUNvbG9yID09IG51bGwgPyBudWxsIDogcGFyc2VUb0hTTFdpdGhDYWNoZShwb2xlQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IGFub3RoZXJQb2xlID1cclxuICAgICAgICAgICAgYW5vdGhlclBvbGVDb2xvciA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogcGFyc2VUb0hTTFdpdGhDYWNoZShhbm90aGVyUG9sZUNvbG9yKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZCA9IG1vZGlmeUhTTChoc2wsIHBvbGUsIGFub3RoZXJQb2xlKTtcclxuICAgICAgICBjb25zdCB7ciwgZywgYiwgYX0gPSBoc2xUb1JHQihtb2RpZmllZCk7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gY3JlYXRlRmlsdGVyTWF0cml4KHRoZW1lKTtcclxuICAgICAgICBjb25zdCBbcmYsIGdmLCBiZl0gPSBhcHBseUNvbG9yTWF0cml4KFtyLCBnLCBiXSwgbWF0cml4KTtcclxuICAgICAgICBjb25zdCBjb2xvciA9XHJcbiAgICAgICAgICAgIGEgPT09IDFcclxuICAgICAgICAgICAgICAgID8gcmdiVG9IZXhTdHJpbmcoe3I6IHJmLCBnOiBnZiwgYjogYmZ9KVxyXG4gICAgICAgICAgICAgICAgOiByZ2JUb1N0cmluZyh7cjogcmYsIGc6IGdmLCBiOiBiZiwgYX0pO1xyXG4gICAgICAgIGZuQ2FjaGUuc2V0KGlkLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5TGlnaHRTY2hlbWVDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgcG9sZUJnID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICBjb25zdCBwb2xlRmcgPSBnZXRGZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgbW9kaWZ5TGlnaHRNb2RlSFNMLFxyXG4gICAgICAgICAgICBwb2xlRmcsXHJcbiAgICAgICAgICAgIHBvbGVCZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlMaWdodE1vZGVIU0woe2gsIHMsIGwsIGF9LCBwb2xlRmcsIHBvbGVCZykge1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgbGV0IGlzTmV1dHJhbDtcclxuICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgIGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMTI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaXNCbHVlID0gaCA+IDIwMCAmJiBoIDwgMjgwO1xyXG4gICAgICAgICAgICBpc05ldXRyYWwgPSBzIDwgMC4yNCB8fCAobCA+IDAuOCAmJiBpc0JsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaHggPSBoO1xyXG4gICAgICAgIGxldCBzeCA9IGw7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVGZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlRmcucztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUJnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVCZy5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGx4ID0gc2NhbGUobCwgMCwgMSwgcG9sZUZnLmwsIHBvbGVCZy5sKTtcclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgTUFYX0JHX0xJR0hUTkVTUyA9IDAuNDtcclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJnSFNMKHtoLCBzLCBsLCBhfSwgcG9sZSkge1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgY29uc3QgaXNCbHVlID0gaCA+IDIwMCAmJiBoIDwgMjgwO1xyXG4gICAgICAgIGNvbnN0IGlzTmV1dHJhbCA9IHMgPCAwLjEyIHx8IChsID4gMC44ICYmIGlzQmx1ZSk7XHJcbiAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IHNjYWxlKGwsIDAsIDAuNSwgMCwgTUFYX0JHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGh4ID0gcG9sZS5oO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7aCwgcywgbDogbHgsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbHggPSBzY2FsZShsLCAwLjUsIDEsIE1BWF9CR19MSUdIVE5FU1MsIHBvbGUubCk7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBjb25zdCBoeCA9IHBvbGUuaDtcclxuICAgICAgICAgICAgY29uc3Qgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoeCA9IGg7XHJcbiAgICAgICAgY29uc3QgaXNZZWxsb3cgPSBoID4gNjAgJiYgaCA8IDE4MDtcclxuICAgICAgICBpZiAoaXNZZWxsb3cpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNDbG9zZXJUb0dyZWVuID0gaCA+IDEyMDtcclxuICAgICAgICAgICAgaWYgKGlzQ2xvc2VyVG9HcmVlbikge1xyXG4gICAgICAgICAgICAgICAgaHggPSBzY2FsZShoLCAxMjAsIDE4MCwgMTM1LCAxODApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHggPSBzY2FsZShoLCA2MCwgMTIwLCA2MCwgMTA1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaHggPiA0MCAmJiBoeCA8IDgwKSB7XHJcbiAgICAgICAgICAgIGx4ICo9IDAuNzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHMsIGw6IGx4LCBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbGUgPSBnZXRCZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICB7Li4udGhlbWUsIG1vZGU6IDB9LFxyXG4gICAgICAgICAgICBtb2RpZnlCZ0hTTCxcclxuICAgICAgICAgICAgcG9sZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBNSU5fRkdfTElHSFRORVNTID0gMC41NTtcclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJsdWVGZ0h1ZShodWUpIHtcclxuICAgICAgICByZXR1cm4gc2NhbGUoaHVlLCAyMDUsIDI0NSwgMjA1LCAyMjApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5RmdIU0woe2gsIHMsIGwsIGF9LCBwb2xlKSB7XHJcbiAgICAgICAgY29uc3QgaXNMaWdodCA9IGwgPiAwLjU7XHJcbiAgICAgICAgY29uc3QgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4yNDtcclxuICAgICAgICBjb25zdCBpc0JsdWUgPSAhaXNOZXV0cmFsICYmIGggPiAyMDUgJiYgaCA8IDI0NTtcclxuICAgICAgICBpZiAoaXNMaWdodCkge1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IHNjYWxlKGwsIDAuNSwgMSwgTUlOX0ZHX0xJR0hUTkVTUywgcG9sZS5sKTtcclxuICAgICAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaHggPSBwb2xlLmg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGh4ID0gaDtcclxuICAgICAgICAgICAgaWYgKGlzQmx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaHggPSBtb2RpZnlCbHVlRmdIdWUoaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtoOiBoeCwgcywgbDogbHgsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh4ID0gcG9sZS5oO1xyXG4gICAgICAgICAgICBjb25zdCBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgY29uc3QgbHggPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTUlOX0ZHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoeCA9IGg7XHJcbiAgICAgICAgbGV0IGx4O1xyXG4gICAgICAgIGlmIChpc0JsdWUpIHtcclxuICAgICAgICAgICAgaHggPSBtb2RpZnlCbHVlRmdIdWUoaCk7XHJcbiAgICAgICAgICAgIGx4ID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1hdGgubWluKDEsIE1JTl9GR19MSUdIVE5FU1MgKyAwLjA1KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbHggPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTUlOX0ZHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHMsIGw6IGx4LCBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbGUgPSBnZXRGZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICB7Li4udGhlbWUsIG1vZGU6IDB9LFxyXG4gICAgICAgICAgICBtb2RpZnlGZ0hTTCxcclxuICAgICAgICAgICAgcG9sZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCb3JkZXJIU0woe2gsIHMsIGwsIGF9LCBwb2xlRmcsIHBvbGVCZykge1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgY29uc3QgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4yNDtcclxuICAgICAgICBsZXQgaHggPSBoO1xyXG4gICAgICAgIGxldCBzeCA9IHM7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVGZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlRmcucztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUJnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVCZy5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGx4ID0gc2NhbGUobCwgMCwgMSwgMC41LCAwLjIpO1xyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCb3JkZXJDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbGVGZyA9IGdldEZnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgY29uc3QgcG9sZUJnID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgey4uLnRoZW1lLCBtb2RlOiAwfSxcclxuICAgICAgICAgICAgbW9kaWZ5Qm9yZGVySFNMLFxyXG4gICAgICAgICAgICBwb2xlRmcsXHJcbiAgICAgICAgICAgIHBvbGVCZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlTaGFkb3dDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUdyYWRpZW50Q29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhjbHVkZWRTZWxlY3RvcnMgPSBbXHJcbiAgICAgICAgXCJwcmVcIixcclxuICAgICAgICBcInByZSAqXCIsXHJcbiAgICAgICAgXCJjb2RlXCIsXHJcbiAgICAgICAgJ1thcmlhLWhpZGRlbj1cInRydWVcIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwiZmEtXCJdJyxcclxuICAgICAgICBcIi5mYVwiLFxyXG4gICAgICAgIFwiLmZhYlwiLFxyXG4gICAgICAgIFwiLmZhZFwiLFxyXG4gICAgICAgIFwiLmZhbFwiLFxyXG4gICAgICAgIFwiLmZhclwiLFxyXG4gICAgICAgIFwiLmZhc1wiLFxyXG4gICAgICAgIFwiLmZhc3NcIixcclxuICAgICAgICBcIi5mYXNyXCIsXHJcbiAgICAgICAgXCIuZmF0XCIsXHJcbiAgICAgICAgXCIuaWNvZm9udFwiLFxyXG4gICAgICAgICdbc3R5bGUqPVwiZm9udC1cIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwiaWNvblwiXScsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJJY29uXCJdJyxcclxuICAgICAgICAnW2NsYXNzKj1cInN5bWJvbFwiXScsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJTeW1ib2xcIl0nLFxyXG4gICAgICAgIFwiLmdseXBoaWNvblwiLFxyXG4gICAgICAgICdbY2xhc3MqPVwibWF0ZXJpYWwtc3ltYm9sXCJdJyxcclxuICAgICAgICAnW2NsYXNzKj1cIm1hdGVyaWFsLWljb25cIl0nLFxyXG4gICAgICAgIFwibXVcIixcclxuICAgICAgICAnW2NsYXNzKj1cIm11LVwiXScsXHJcbiAgICAgICAgXCIudHlwY25cIixcclxuICAgICAgICAnW2NsYXNzKj1cInZqcy1cIl0nXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGV4dFN0eWxlKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICAgICAgbGluZXMucHVzaChgKjpub3QoJHtleGNsdWRlZFNlbGVjdG9ycy5qb2luKFwiLCBcIil9KSB7YCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy51c2VGb250ICYmIGNvbmZpZy5mb250RmFtaWx5KSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgZm9udC1mYW1pbHk6ICR7Y29uZmlnLmZvbnRGYW1pbHl9ICFpbXBvcnRhbnQ7YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcudGV4dFN0cm9rZSA+IDApIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIGAgIC13ZWJraXQtdGV4dC1zdHJva2U6ICR7Y29uZmlnLnRleHRTdHJva2V9cHggIWltcG9ydGFudDtgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgdGV4dC1zdHJva2U6ICR7Y29uZmlnLnRleHRTdHJva2V9cHggIWltcG9ydGFudDtgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIEZpbHRlck1vZGU7XHJcbiAgICAoZnVuY3Rpb24gKEZpbHRlck1vZGUpIHtcclxuICAgICAgICBGaWx0ZXJNb2RlWyhGaWx0ZXJNb2RlW1wibGlnaHRcIl0gPSAwKV0gPSBcImxpZ2h0XCI7XHJcbiAgICAgICAgRmlsdGVyTW9kZVsoRmlsdGVyTW9kZVtcImRhcmtcIl0gPSAxKV0gPSBcImRhcmtcIjtcclxuICAgIH0pKEZpbHRlck1vZGUgfHwgKEZpbHRlck1vZGUgPSB7fSkpO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTRmlsdGVyVmFsdWUoY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmIChjb25maWcubW9kZSA9PT0gRmlsdGVyTW9kZS5kYXJrKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChcImludmVydCgxMDAlKSBodWUtcm90YXRlKDE4MGRlZylcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuYnJpZ2h0bmVzcyAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChgYnJpZ2h0bmVzcygke2NvbmZpZy5icmlnaHRuZXNzfSUpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuY29udHJhc3QgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goYGNvbnRyYXN0KCR7Y29uZmlnLmNvbnRyYXN0fSUpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuZ3JheXNjYWxlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChgZ3JheXNjYWxlKCR7Y29uZmlnLmdyYXlzY2FsZX0lKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLnNlcGlhICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChgc2VwaWEoJHtjb25maWcuc2VwaWF9JSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsdGVycy5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b1NWR01hdHJpeChtYXRyaXgpIHtcclxuICAgICAgICByZXR1cm4gbWF0cml4XHJcbiAgICAgICAgICAgIC5zbGljZSgwLCA0KVxyXG4gICAgICAgICAgICAubWFwKChtKSA9PiBtLm1hcCgobSkgPT4gbS50b0ZpeGVkKDMpKS5qb2luKFwiIFwiKSlcclxuICAgICAgICAgICAgLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U1ZHRmlsdGVyTWF0cml4VmFsdWUoY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvU1ZHTWF0cml4KGNyZWF0ZUZpbHRlck1hdHJpeChjb25maWcpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoZXhpZnkobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChudW1iZXIgPCAxNiA/IFwiMFwiIDogXCJcIikgKyBudW1iZXIudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVVSUQoKSB7XHJcbiAgICAgICAgaWYgKFwicmFuZG9tVVVJRFwiIGluIGNyeXB0bykge1xyXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDAsIDgpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDksIDEzKSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygxNCwgMTgpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDE5LCAyMykgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMjQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcImdldFJhbmRvbVZhbHVlc1wiIGluIGNyeXB0bykge1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDE2KSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh4KSA9PiBoZXhpZnkoeCkpXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKiogNTUpLnRvU3RyaW5nKDM2KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNvbHZlcnMkMSA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IHJlamVjdG9ycyA9IG5ldyBNYXAoKTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGJnRmV0Y2gocmVxdWVzdCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuRGFya1JlYWRlcj8uUGx1Z2lucz8uZmV0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5EYXJrUmVhZGVyLlBsdWdpbnMuZmV0Y2gocmVxdWVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZ2VuZXJhdGVVSUQoKTtcclxuICAgICAgICAgICAgcmVzb2x2ZXJzJDEuc2V0KGlkLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgcmVqZWN0b3JzLnNldChpZCwgcmVqZWN0KTtcclxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVDU3RvQkcuRkVUQ0gsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHt0eXBlLCBkYXRhLCBlcnJvciwgaWR9KSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IE1lc3NhZ2VUeXBlQkd0b0NTLkZFVENIX1JFU1BPTlNFKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmUgPSByZXNvbHZlcnMkMS5nZXQoaWQpO1xyXG4gICAgICAgICAgICBjb25zdCByZWplY3QgPSByZWplY3RvcnMuZ2V0KGlkKTtcclxuICAgICAgICAgICAgcmVzb2x2ZXJzJDEuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgcmVqZWN0b3JzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0ICYmIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlICYmIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBNQVhfRlJBTUVfRFVSQVRJT04gPSAxMDAwIC8gNjA7XHJcbiAgICBjbGFzcyBBc3luY1F1ZXVlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlRnJhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY2hlZHVsZUZyYW1lKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcklkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50aW1lcklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2I7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGNiID0gdGhpcy5xdWV1ZS5zaGlmdCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+PSBNQVhfRlJBTUVfRFVSQVRJT04pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZUZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlTWFuYWdlciA9IG5ldyBBc3luY1F1ZXVlKCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZURldGFpbHModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFVUkwgPSB1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyB1cmxcclxuICAgICAgICAgICAgICAgICAgICA6IGF3YWl0IGdldERhdGFVUkwodXJsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeUNvbnZlcnREYXRhVVJMVG9CbG9iU3luYyhkYXRhVVJMKSA/P1xyXG4gICAgICAgICAgICAgICAgICAgIChhd2FpdCBsb2FkQXNCbG9iKHVybCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFVUkwuc3RhcnRzV2l0aChcImRhdGE6aW1hZ2Uvc3ZnK3htbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlID0gYXdhaXQgbG9hZEltYWdlKGRhdGFVUkwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhd2FpdCB0cnlDcmVhdGVJbWFnZUJpdG1hcChibG9iKSkgPz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKGF3YWl0IGxvYWRJbWFnZShkYXRhVVJMKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWFnZU1hbmFnZXIuYWRkVGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5hbHlzaXMgPSBhbmFseXplSW1hZ2UoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTDogYW5hbHlzaXMuaXNMYXJnZSA/IFwiXCIgOiBkYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5hbmFseXNpc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhVVJMKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IG5ldyBVUkwodXJsKTtcclxuICAgICAgICBpZiAocGFyc2VkVVJMLm9yaWdpbiA9PT0gbG9jYXRpb24ub3JpZ2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBsb2FkQXNEYXRhVVJMKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBiZ0ZldGNoKHt1cmwsIHJlc3BvbnNlVHlwZTogXCJkYXRhLXVybFwifSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiB0cnlDcmVhdGVJbWFnZUJpdG1hcChibG9iKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBsb2dXYXJuKFxyXG4gICAgICAgICAgICAgICAgYFVuYWJsZSB0byBjcmVhdGUgaW1hZ2UgYml0bWFwIGZvciB0eXBlICR7YmxvYi50eXBlfTogJHtTdHJpbmcoZXJyKX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IElOQ09NUExFVEVfRE9DX0xPQURJTkdfSU1BR0VfTElNSVQgPSAyNTY7XHJcbiAgICBsZXQgbG9hZGluZ0ltYWdlc0NvdW50ID0gMDtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgaW1hZ2UgJHt1cmx9YCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICsrbG9hZGluZ0ltYWdlc0NvdW50IDw9IElOQ09NUExFVEVfRE9DX0xPQURJTkdfSU1BR0VfTElNSVQgfHxcclxuICAgICAgICAgICAgICAgIGlzUmVhZHlTdGF0ZUNvbXBsZXRlKClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcigoKSA9PiAoaW1hZ2Uuc3JjID0gdXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IE1BWF9BTkFMWVNJU19QSVhFTFNfQ09VTlQgPSAzMiAqIDMyO1xyXG4gICAgbGV0IGNhbnZhcztcclxuICAgIGxldCBjb250ZXh0O1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIGNvbnN0IG1heFdpZHRoID0gTUFYX0FOQUxZU0lTX1BJWEVMU19DT1VOVDtcclxuICAgICAgICBjb25zdCBtYXhIZWlnaHQgPSBNQVhfQU5BTFlTSVNfUElYRUxTX0NPVU5UO1xyXG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gbWF4V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG1heEhlaWdodDtcclxuICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiLCB7d2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlfSk7XHJcbiAgICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNhbnZhcygpIHtcclxuICAgICAgICBjYW52YXMgPSBudWxsO1xyXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgTEFSR0VfSU1BR0VfUElYRUxTX0NPVU5UID0gNTEyICogNTEyO1xyXG4gICAgZnVuY3Rpb24gYW5hbHl6ZUltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdztcclxuICAgICAgICBsZXQgc2g7XHJcbiAgICAgICAgaWYgKGltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBzdyA9IGltYWdlLm5hdHVyYWxXaWR0aDtcclxuICAgICAgICAgICAgc2ggPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3ID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHNoID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3cgPT09IDAgfHwgc2ggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzRGFyazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMYXJnZTogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNMYXJnZSA9IHN3ICogc2ggPiBMQVJHRV9JTUFHRV9QSVhFTFNfQ09VTlQ7XHJcbiAgICAgICAgY29uc3Qgc291cmNlUGl4ZWxzQ291bnQgPSBzdyAqIHNoO1xyXG4gICAgICAgIGNvbnN0IGsgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgTWF0aC5zcXJ0KE1BWF9BTkFMWVNJU19QSVhFTFNfQ09VTlQgLyBzb3VyY2VQaXhlbHNDb3VudClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5jZWlsKHN3ICogayk7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKHNoICogayk7XHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHN3LCBzaCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgZCA9IGltYWdlRGF0YS5kYXRhO1xyXG4gICAgICAgIGNvbnN0IFRSQU5TUEFSRU5UX0FMUEhBX1RIUkVTSE9MRCA9IDAuMDU7XHJcbiAgICAgICAgY29uc3QgREFSS19MSUdIVE5FU1NfVEhSRVNIT0xEID0gMC40O1xyXG4gICAgICAgIGNvbnN0IExJR0hUX0xJR0hUTkVTU19USFJFU0hPTEQgPSAwLjc7XHJcbiAgICAgICAgbGV0IHRyYW5zcGFyZW50UGl4ZWxzQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBkYXJrUGl4ZWxzQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBsaWdodFBpeGVsc0NvdW50ID0gMDtcclxuICAgICAgICBsZXQgaSwgeCwgeTtcclxuICAgICAgICBsZXQgciwgZywgYiwgYTtcclxuICAgICAgICBsZXQgbDtcclxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGkgPSA0ICogKHkgKiB3aWR0aCArIHgpO1xyXG4gICAgICAgICAgICAgICAgciA9IGRbaSArIDBdO1xyXG4gICAgICAgICAgICAgICAgZyA9IGRbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgYiA9IGRbaSArIDJdO1xyXG4gICAgICAgICAgICAgICAgYSA9IGRbaSArIDNdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEgLyAyNTUgPCBUUkFOU1BBUkVOVF9BTFBIQV9USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFBpeGVsc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGwgPSBnZXRTUkdCTGlnaHRuZXNzKHIsIGcsIGIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsIDwgREFSS19MSUdIVE5FU1NfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtQaXhlbHNDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobCA+IExJR0hUX0xJR0hUTkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHRQaXhlbHNDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3RhbFBpeGVsc0NvdW50ID0gd2lkdGggKiBoZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgb3BhcXVlUGl4ZWxzQ291bnQgPSB0b3RhbFBpeGVsc0NvdW50IC0gdHJhbnNwYXJlbnRQaXhlbHNDb3VudDtcclxuICAgICAgICBjb25zdCBEQVJLX0lNQUdFX1RIUkVTSE9MRCA9IDAuNztcclxuICAgICAgICBjb25zdCBMSUdIVF9JTUFHRV9USFJFU0hPTEQgPSAwLjc7XHJcbiAgICAgICAgY29uc3QgVFJBTlNQQVJFTlRfSU1BR0VfVEhSRVNIT0xEID0gMC4xO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzRGFyazogZGFya1BpeGVsc0NvdW50IC8gb3BhcXVlUGl4ZWxzQ291bnQgPj0gREFSS19JTUFHRV9USFJFU0hPTEQsXHJcbiAgICAgICAgICAgIGlzTGlnaHQ6XHJcbiAgICAgICAgICAgICAgICBsaWdodFBpeGVsc0NvdW50IC8gb3BhcXVlUGl4ZWxzQ291bnQgPj0gTElHSFRfSU1BR0VfVEhSRVNIT0xELFxyXG4gICAgICAgICAgICBpc1RyYW5zcGFyZW50OlxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCAvIHRvdGFsUGl4ZWxzQ291bnQgPj1cclxuICAgICAgICAgICAgICAgIFRSQU5TUEFSRU5UX0lNQUdFX1RIUkVTSE9MRCxcclxuICAgICAgICAgICAgaXNMYXJnZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBsZXQgaXNCbG9iVVJMU3VwcG9ydGVkID0gbnVsbDtcclxuICAgIGxldCBjYW5Vc2VQcm94eSA9IGZhbHNlO1xyXG4gICAgbGV0IGJsb2JVUkxDaGVja1JlcXVlc3RlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgYmxvYlVSTENoZWNrQXdhaXRlcnMgPSBbXTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIsXHJcbiAgICAgICAgKCkgPT4gKGNhblVzZVByb3h5ID0gdHJ1ZSksXHJcbiAgICAgICAge29uY2U6IHRydWV9XHJcbiAgICApO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEJsb2JVUkxDaGVjaygpIHtcclxuICAgICAgICBpZiAoIWNhblVzZVByb3h5KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJsb2JVUkxDaGVja1JlcXVlc3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XHJcbiAgICAgICAgICAgICAgICBibG9iVVJMQ2hlY2tBd2FpdGVycy5wdXNoKHJlc29sdmUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJsb2JVUkxDaGVja1JlcXVlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19ibG9iVVJMQ2hlY2tSZXNwb25zZVwiLFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpc0Jsb2JVUkxTdXBwb3J0ZWQgPSBlLmRldGFpbC5ibG9iVVJMQWxsb3dlZDtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvYlVSTENoZWNrQXdhaXRlcnMuZm9yRWFjaCgocikgPT4gcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9iVVJMQ2hlY2tBd2FpdGVycy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge29uY2U6IHRydWV9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2Jsb2JVUkxDaGVja1JlcXVlc3RcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzQmxvYlVSTENoZWNrUmVzdWx0UmVhZHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQmxvYlVSTFN1cHBvcnRlZCAhPSBudWxsIHx8ICFjYW5Vc2VQcm94eTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uQ1NQRXJyb3IoZXJyKSB7XHJcbiAgICAgICAgaWYgKGVyci5ibG9ja2VkVVJJID09PSBcImJsb2JcIikge1xyXG4gICAgICAgICAgICBpc0Jsb2JVUkxTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlY3VyaXR5cG9saWN5dmlvbGF0aW9uXCIsIG9uQ1NQRXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWN1cml0eXBvbGljeXZpb2xhdGlvblwiLCBvbkNTUEVycm9yKTtcclxuICAgIGNvbnN0IG9iamVjdFVSTHMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBnZXRGaWx0ZXJlZEltYWdlVVJMKHtkYXRhVVJMLCB3aWR0aCwgaGVpZ2h0fSwgdGhlbWUpIHtcclxuICAgICAgICBpZiAoZGF0YVVSTC5zdGFydHNXaXRoKFwiZGF0YTppbWFnZS9zdmcreG1sXCIpKSB7XHJcbiAgICAgICAgICAgIGRhdGFVUkwgPSBlc2NhcGVYTUwoZGF0YVVSTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IGdldFNWR0ZpbHRlck1hdHJpeFZhbHVlKHRoZW1lKTtcclxuICAgICAgICBjb25zdCBzdmcgPSBbXHJcbiAgICAgICAgICAgIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCI+YCxcclxuICAgICAgICAgICAgXCI8ZGVmcz5cIixcclxuICAgICAgICAgICAgJzxmaWx0ZXIgaWQ9XCJkYXJrcmVhZGVyLWltYWdlLWZpbHRlclwiPicsXHJcbiAgICAgICAgICAgIGA8ZmVDb2xvck1hdHJpeCB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiJHttYXRyaXh9XCIgLz5gLFxyXG4gICAgICAgICAgICBcIjwvZmlsdGVyPlwiLFxyXG4gICAgICAgICAgICBcIjwvZGVmcz5cIixcclxuICAgICAgICAgICAgYDxpbWFnZSB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgZmlsdGVyPVwidXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcilcIiB4bGluazpocmVmPVwiJHtkYXRhVVJMfVwiIC8+YCxcclxuICAgICAgICAgICAgXCI8L3N2Zz5cIlxyXG4gICAgICAgIF0uam9pbihcIlwiKTtcclxuICAgICAgICBpZiAoIWlzQmxvYlVSTFN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtidG9hKHN2Zyl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShzdmcubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN2Zy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBieXRlc1tpXSA9IHN2Zy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J5dGVzXSwge3R5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwifSk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0VVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBvYmplY3RVUkxzLmFkZChvYmplY3RVUkwpO1xyXG4gICAgICAgIHJldHVybiBvYmplY3RVUkw7XHJcbiAgICB9XHJcbiAgICBjb25zdCB4bWxFc2NhcGVDaGFycyA9IHtcclxuICAgICAgICBcIjxcIjogXCImbHQ7XCIsXHJcbiAgICAgICAgXCI+XCI6IFwiJmd0O1wiLFxyXG4gICAgICAgIFwiJlwiOiBcIiZhbXA7XCIsXHJcbiAgICAgICAgXCInXCI6IFwiJmFwb3M7XCIsXHJcbiAgICAgICAgJ1wiJzogXCImcXVvdDtcIlxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGVzY2FwZVhNTChzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1s8PiYnXCJdL2csIChjKSA9PiB4bWxFc2NhcGVDaGFyc1tjXSA/PyBjKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGFVUkxCbG9iVVJMcyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHRyeUNvbnZlcnREYXRhVVJMVG9CbG9iU3luYyhkYXRhVVJMKSB7XHJcbiAgICAgICAgY29uc3QgY29sb25JbmRleCA9IGRhdGFVUkwuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgY29uc3Qgc2VtaWNvbG9uSW5kZXggPSBkYXRhVVJMLmluZGV4T2YoXCI7XCIsIGNvbG9uSW5kZXggKyAxKTtcclxuICAgICAgICBjb25zdCBjb21tYUluZGV4ID0gZGF0YVVSTC5pbmRleE9mKFwiLFwiLCBzZW1pY29sb25JbmRleCArIDEpO1xyXG4gICAgICAgIGNvbnN0IGVuY29kaW5nID0gZGF0YVVSTFxyXG4gICAgICAgICAgICAuc3Vic3RyaW5nKHNlbWljb2xvbkluZGV4ICsgMSwgY29tbWFJbmRleClcclxuICAgICAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gZGF0YVVSTC5zdWJzdHJpbmcoY29sb25JbmRleCArIDEsIHNlbWljb2xvbkluZGV4KTtcclxuICAgICAgICBpZiAoZW5jb2RpbmcgIT09IFwiYmFzZTY0XCIgfHwgIW1lZGlhVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IGF0b2IoZGF0YVVSTC5zdWJzdHJpbmcoY29tbWFJbmRleCArIDEpKTtcclxuICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGNoYXJhY3RlcnMubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYnl0ZXNbaV0gPSBjaGFyYWN0ZXJzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbYnl0ZXNdLCB7dHlwZTogbWVkaWFUeXBlfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiB0cnlDb252ZXJ0RGF0YVVSTFRvQmxvYlVSTChkYXRhVVJMKSB7XHJcbiAgICAgICAgaWYgKCFpc0Jsb2JVUkxTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhhc2ggPSBnZXRIYXNoQ29kZShkYXRhVVJMKTtcclxuICAgICAgICBsZXQgYmxvYlVSTCA9IGRhdGFVUkxCbG9iVVJMcy5nZXQoaGFzaCk7XHJcbiAgICAgICAgaWYgKGJsb2JVUkwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJsb2JVUkw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBibG9iID0gdHJ5Q29udmVydERhdGFVUkxUb0Jsb2JTeW5jKGRhdGFVUkwpO1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFVUkwpO1xyXG4gICAgICAgICAgICBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBibG9iVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBkYXRhVVJMQmxvYlVSTHMuc2V0KGhhc2gsIGJsb2JVUkwpO1xyXG4gICAgICAgIHJldHVybiBibG9iVVJMO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5JbWFnZVByb2Nlc3NpbmdDYWNoZSgpIHtcclxuICAgICAgICBpbWFnZU1hbmFnZXIgJiYgaW1hZ2VNYW5hZ2VyLnN0b3AoKTtcclxuICAgICAgICByZW1vdmVDYW52YXMoKTtcclxuICAgICAgICBvYmplY3RVUkxzLmZvckVhY2goKHUpID0+IFVSTC5yZXZva2VPYmplY3RVUkwodSkpO1xyXG4gICAgICAgIG9iamVjdFVSTHMuY2xlYXIoKTtcclxuICAgICAgICBkYXRhVVJMQmxvYlVSTHMuZm9yRWFjaCgodSkgPT4gVVJMLnJldm9rZU9iamVjdFVSTCh1KSk7XHJcbiAgICAgICAgZGF0YVVSTEJsb2JVUkxzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ3JhZGllbnRMZW5ndGggPSBcImdyYWRpZW50XCIubGVuZ3RoO1xyXG4gICAgY29uc3QgY29uaWNHcmFkaWVudCA9IFwiY29uaWMtXCI7XHJcbiAgICBjb25zdCBjb25pY0dyYWRpZW50TGVuZ3RoID0gY29uaWNHcmFkaWVudC5sZW5ndGg7XHJcbiAgICBjb25zdCByYWRpYWxHcmFkaWVudCA9IFwicmFkaWFsLVwiO1xyXG4gICAgY29uc3QgbGluZWFyR3JhZGllbnQgPSBcImxpbmVhci1cIjtcclxuICAgIGZ1bmN0aW9uIHBhcnNlR3JhZGllbnQodmFsdWUpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gY29uaWNHcmFkaWVudC5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKChpbmRleCA9IHZhbHVlLmluZGV4T2YoXCJncmFkaWVudFwiLCBzdGFydEluZGV4KSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCB0eXBlR3JhZGllbnQ7XHJcbiAgICAgICAgICAgIFtsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIGNvbmljR3JhZGllbnRdLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAocG9zc2libGVUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlR3JhZGllbnQgPSB2YWx1ZS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVHcmFkaWVudCA9PT0gcG9zc2libGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PT0gXCJyZXBlYXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50ID0gYHJlcGVhdGluZy0ke3Bvc3NpYmxlVHlwZX1ncmFkaWVudGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID09PSBcIi13ZWJraXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50ID0gYC13ZWJraXQtJHtwb3NzaWJsZVR5cGV9Z3JhZGllbnRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50ID0gYCR7cG9zc2libGVUeXBlfWdyYWRpZW50YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIXR5cGVHcmFkaWVudCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qge3N0YXJ0LCBlbmR9ID0gZ2V0UGFyZW50aGVzZXNSYW5nZShcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXggKyBncmFkaWVudExlbmd0aFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHZhbHVlLnN1YnN0cmluZyhzdGFydCArIDEsIGVuZCAtIDEpO1xyXG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZW5kICsgMSArIGNvbmljR3JhZGllbnRMZW5ndGg7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCxcclxuICAgICAgICAgICAgICAgIG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiB0eXBlR3JhZGllbnQubGVuZ3RoICsgMixcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCAtIHR5cGVHcmFkaWVudC5sZW5ndGggKyBncmFkaWVudExlbmd0aCxcclxuICAgICAgICAgICAgICAgIGhhc0NvbW1hOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLmhhc0NvbW1hID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdHkocnVsZVN0eWxlLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiBCb29sZWFuKHJ1bGVTdHlsZSAmJiBydWxlU3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShwcm9wZXJ0eSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpYWJsZUNTU0RlY2xhcmF0aW9uKFxyXG4gICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHJ1bGUsXHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIGxldCBtb2RpZmllciA9IG51bGw7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKSkge1xyXG4gICAgICAgICAgICBtb2RpZmllciA9IGdldFZhcmlhYmxlTW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoXCJ2YXIoXCIpKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0VmFyaWFibGVEZXBlbmRhbnRNb2RpZmllcihcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09IFwiY29sb3Itc2NoZW1lXCIpIHtcclxuICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRDb2xvclNjaGVtZU1vZGlmaWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gXCJzY3JvbGxiYXItY29sb3JcIikge1xyXG4gICAgICAgICAgICBtb2RpZmllciA9IGdldFNjcm9sbGJhckNvbG9yTW9kaWZpZXIodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIChwcm9wZXJ0eS5pbmNsdWRlcyhcImNvbG9yXCIpICYmXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPT0gXCItd2Via2l0LXByaW50LWNvbG9yLWFkanVzdFwiKSB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJmaWxsXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwic3Ryb2tlXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwic3RvcC1jb2xvclwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJib3JkZXJcIikgJiZcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9PSBcImJvcmRlci1jb2xvclwiICYmXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9PT0gXCJpbml0aWFsXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJTaWRlUHJvcCA9IHByb3BlcnR5LnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5Lmxlbmd0aCAtIDZcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3JkZXJTaWRlVmFsID1cclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoYm9yZGVyU2lkZVByb3ApO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclNpZGVWYWwuc3RhcnRzV2l0aChcIjBweFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclNpZGVWYWwgPT09IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IGJvcmRlclNpZGVQcm9wO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyID0gYm9yZGVyU2lkZVZhbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0Q29sb3JNb2RpZmllcihwcm9wZXJ0eSwgdmFsdWUsIHJ1bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImxpc3Qtc3R5bGUtaW1hZ2VcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBtb2RpZmllciA9IGdldEJnSW1hZ2VNb2RpZmllcihcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5LmluY2x1ZGVzKFwic2hhZG93XCIpKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0U2hhZG93TW9kaWZpZXIodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVyLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQ6IGdldFByaW9yaXR5KHJ1bGUuc3R5bGUsIHByb3BlcnR5KSxcclxuICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGpvaW5TZWxlY3RvcnMoLi4uc2VsZWN0b3JzKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoQm9vbGVhbikuam9pbihcIiwgXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRVc2VyQWdlbnRTdHlsZSh0aGVtZSwgaXNJRnJhbWUsIHN0eWxlU3lzdGVtQ29udHJvbHMpIHtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGlmICghaXNJRnJhbWUpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcImh0bWwge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ1NTQ29sb3JTY2hlbWVQcm9wU3VwcG9ydGVkICYmIHRoZW1lLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcImh0bWwge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgICAgIGNvbG9yLXNjaGVtZTogZGFyayAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcImlmcmFtZSB7XCIpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAgICAgY29sb3Itc2NoZW1lOiBpbml0aWFsO2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmdTZWxlY3RvcnMgPSBqb2luU2VsZWN0b3JzKFxyXG4gICAgICAgICAgICBpc0lGcmFtZSA/IFwiXCIgOiBcImh0bWwsIGJvZHlcIixcclxuICAgICAgICAgICAgc3R5bGVTeXN0ZW1Db250cm9scyA/IFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbiwgZGlhbG9nXCIgOiBcIlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoYmdTZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtiZ1NlbGVjdG9yc30ge2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke21vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sIHRoZW1lKX07YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCR7am9pblNlbGVjdG9ycyhcImh0bWwsIGJvZHlcIiwgc3R5bGVTeXN0ZW1Db250cm9scyA/IFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvblwiIDogXCJcIil9IHtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGJvcmRlci1jb2xvcjogJHttb2RpZnlCb3JkZXJDb2xvcih7cjogNzYsIGc6IDc2LCBiOiA3Nn0sIHRoZW1lKX07YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSl9O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJhIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDY0LCBiOiAyNTV9LCB0aGVtZSl9O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ0YWJsZSB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYm9yZGVyLWNvbG9yOiAke21vZGlmeUJvcmRlckNvbG9yKHtyOiAxMjgsIGc6IDEyOCwgYjogMTI4fSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwibWFyayB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjpwbGFjZWhvbGRlciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAxNjksIGc6IDE2OSwgYjogMTY5fSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcInRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1MCwgZzogMjU1LCBiOiAxODl9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgaWYgKHRoZW1lLnNjcm9sbGJhckNvbG9yKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goZ2V0TW9kaWZpZWRTY3JvbGxiYXJTdHlsZSh0aGVtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhlbWUuc2VsZWN0aW9uQ29sb3IpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChnZXRNb2RpZmllZFNlbGVjdGlvblN0eWxlKHRoZW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xheWVyUnVsZVN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICBsaW5lcy51bnNoaWZ0KFwiQGxheWVyIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdGlvbkNvbG9yKHRoZW1lKSB7XHJcbiAgICAgICAgbGV0IGJhY2tncm91bmRDb2xvclNlbGVjdGlvbjtcclxuICAgICAgICBsZXQgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIGlmICh0aGVtZS5zZWxlY3Rpb25Db2xvciA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDAsIGc6IDk2LCBiOiAyMTJ9LFxyXG4gICAgICAgICAgICAgICAgey4uLnRoZW1lLCBncmF5c2NhbGU6IDB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IG1vZGlmeUZvcmVncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSxcclxuICAgICAgICAgICAgICAgIHsuLi50aGVtZSwgZ3JheXNjYWxlOiAwfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodGhlbWUuc2VsZWN0aW9uQ29sb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBoc2wgPSByZ2JUb0hTTChyZ2IpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSB0aGVtZS5zZWxlY3Rpb25Db2xvcjtcclxuICAgICAgICAgICAgaWYgKGhzbC5sIDwgMC41KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBcIiNGRkZcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IFwiIzAwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7YmFja2dyb3VuZENvbG9yU2VsZWN0aW9uLCBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb259O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRTZWxlY3Rpb25TdHlsZSh0aGVtZSkge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRTZWxlY3Rpb25Db2xvciA9IGdldFNlbGVjdGlvbkNvbG9yKHRoZW1lKTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPVxyXG4gICAgICAgICAgICBtb2RpZmllZFNlbGVjdGlvbkNvbG9yLmJhY2tncm91bmRDb2xvclNlbGVjdGlvbjtcclxuICAgICAgICBjb25zdCBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPVxyXG4gICAgICAgICAgICBtb2RpZmllZFNlbGVjdGlvbkNvbG9yLmZvcmVncm91bmRDb2xvclNlbGVjdGlvbjtcclxuICAgICAgICBbXCI6OnNlbGVjdGlvblwiLCBcIjo6LW1vei1zZWxlY3Rpb25cIl0uZm9yRWFjaCgoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7c2VsZWN0aW9ufSB7YCk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG9yU2VsZWN0aW9ufSAhaW1wb3J0YW50O2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgICAgIGNvbG9yOiAke2ZvcmVncm91bmRDb2xvclNlbGVjdGlvbn0gIWltcG9ydGFudDtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZFNjcm9sbGJhclN0eWxlKHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBsZXQgY29sb3JUcmFjaztcclxuICAgICAgICBsZXQgY29sb3JJY29ucztcclxuICAgICAgICBsZXQgY29sb3JUaHVtYjtcclxuICAgICAgICBsZXQgY29sb3JUaHVtYkhvdmVyO1xyXG4gICAgICAgIGxldCBjb2xvclRodW1iQWN0aXZlO1xyXG4gICAgICAgIGxldCBjb2xvckNvcm5lcjtcclxuICAgICAgICBpZiAodGhlbWUuc2Nyb2xsYmFyQ29sb3IgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yVHJhY2sgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI0MSwgZzogMjQxLCBiOiAyNDF9LCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbG9ySWNvbnMgPSBtb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDk2LCBnOiA5NiwgYjogOTZ9LCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWIgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDE3NiwgZzogMTc2LCBiOiAxNzZ9LCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWJIb3ZlciA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiAxNDQsIGc6IDE0NCwgYjogMTQ0fSxcclxuICAgICAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWJBY3RpdmUgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogOTYsIGc6IDk2LCBiOiA5Nn0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb2xvckNvcm5lciA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSxcclxuICAgICAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh0aGVtZS5zY3JvbGxiYXJDb2xvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTGlnaHQgPSBoc2wubCA+IDAuNTtcclxuICAgICAgICAgICAgY29uc3QgbGlnaHRlbiA9IChsaWdodGVyKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uaHNsLFxyXG4gICAgICAgICAgICAgICAgbDogY2xhbXAoaHNsLmwgKyBsaWdodGVyLCAwLCAxKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZGFya2VuID0gKGRhcmtlcikgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLmhzbCxcclxuICAgICAgICAgICAgICAgIGw6IGNsYW1wKGhzbC5sIC0gZGFya2VyLCAwLCAxKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29sb3JUcmFjayA9IGhzbFRvU3RyaW5nKGRhcmtlbigwLjQpKTtcclxuICAgICAgICAgICAgY29sb3JJY29ucyA9IGhzbFRvU3RyaW5nKGlzTGlnaHQgPyBkYXJrZW4oMC40KSA6IGxpZ2h0ZW4oMC40KSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWIgPSBoc2xUb1N0cmluZyhoc2wpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iSG92ZXIgPSBoc2xUb1N0cmluZyhsaWdodGVuKDAuMSkpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iQWN0aXZlID0gaHNsVG9TdHJpbmcobGlnaHRlbigwLjIpKTtcclxuICAgICAgICAgICAgY29sb3JDb3JuZXIgPSBoc2xUb1N0cmluZyhkYXJrZW4oMC41KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JUcmFja307YCk7XHJcbiAgICAgICAgbGluZXMucHVzaChgICAgIGNvbG9yOiAke2NvbG9ySWNvbnN9O2ApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JUaHVtYn07YCk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvclRodW1iSG92ZXJ9O2ApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yVGh1bWJBY3RpdmV9O2ApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yQ29ybmVyfTtgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCIqIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgICBzY3JvbGxiYXItY29sb3I6ICR7Y29sb3JUaHVtYn0gJHtjb2xvclRyYWNrfTtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKHRoZW1lLCB7c3RyaWN0fSkge1xyXG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSBkZWZhdWx0RmFsbGJhY2tGYWN0b3J5O1xyXG4gICAgICAgIHJldHVybiBmYWN0b3J5KHRoZW1lLCB7c3RyaWN0fSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0RmFsbGJhY2tGYWN0b3J5KHRoZW1lLCB7c3RyaWN0fSkge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYGh0bWwsIGJvZHksICR7c3RyaWN0ID8gXCJib2R5IDpub3QoaWZyYW1lKVwiIDogXCJib2R5ID4gOm5vdChpZnJhbWUpXCJ9IHtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGJhY2tncm91bmQtY29sb3I6ICR7bW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSwgdGhlbWUpfSAhaW1wb3J0YW50O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYm9yZGVyLWNvbG9yOiAke21vZGlmeUJvcmRlckNvbG9yKHtyOiA2NCwgZzogNjQsIGI6IDY0fSwgdGhlbWUpfSAhaW1wb3J0YW50O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgdGhlbWUpfSAhaW1wb3J0YW50O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYGRpdltzdHlsZSo9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAxMzUsIDEzNSlcIl0ge2ApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc4Nzg3ICFpbXBvcnRhbnQ7YCk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1bnBhcnNhYmxlQ29sb3JzID0gbmV3IFNldChbXHJcbiAgICAgICAgXCJpbmhlcml0XCIsXHJcbiAgICAgICAgXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIFwiaW5pdGlhbFwiLFxyXG4gICAgICAgIFwiY3VycmVudGNvbG9yXCIsXHJcbiAgICAgICAgXCJub25lXCIsXHJcbiAgICAgICAgXCJ1bnNldFwiLFxyXG4gICAgICAgIFwiYXV0b1wiXHJcbiAgICBdKTtcclxuICAgIGZ1bmN0aW9uIGdldENvbG9yTW9kaWZpZXIocHJvcCwgdmFsdWUsIHJ1bGUpIHtcclxuICAgICAgICBpZiAodW5wYXJzYWJsZUNvbG9ycy5oYXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHZhbHVlKTtcclxuICAgICAgICBpZiAoIXJnYikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3AuaW5jbHVkZXMoXCJiYWNrZ3JvdW5kXCIpKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLndlYmtpdE1hc2tJbWFnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUud2Via2l0TWFza0ltYWdlICE9PSBcIm5vbmVcIikgfHxcclxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLndlYmtpdE1hc2sgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcnVsZS5zdHlsZS53ZWJraXRNYXNrLnN0YXJ0c1dpdGgoXCJub25lXCIpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUubWFzayAmJiBydWxlLnN0eWxlLm1hc2sgIT09IFwibm9uZVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1hc2staW1hZ2VcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtYXNrLWltYWdlXCIpICE9PSBcIm5vbmVcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcC5pbmNsdWRlcyhcImJvcmRlclwiKSB8fCBwcm9wLmluY2x1ZGVzKFwib3V0bGluZVwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBtb2RpZnlCb3JkZXJDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW1hZ2VEZXRhaWxzQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBhd2FpdGluZ0ZvckltYWdlTG9hZGluZyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHNob3VsZElnbm9yZUltYWdlKHNlbGVjdG9yVGV4dCwgc2VsZWN0b3JzKSB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RvclRleHQgfHwgc2VsZWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxlY3RvcnMuc29tZSgocykgPT4gcyA9PT0gXCIqXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBydWxlU2VsZWN0b3JzID0gc2VsZWN0b3JUZXh0LnNwbGl0KC8sXFxzKi9nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpZ25vcmVkU2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XHJcbiAgICAgICAgICAgIGlmIChydWxlU2VsZWN0b3JzLnNvbWUoKHMpID0+IHMgPT09IGlnbm9yZWRTZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEJnSW1hZ2VNb2RpZmllcihcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBydWxlLFxyXG4gICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlSW1hZ2UocnVsZS5zZWxlY3RvclRleHQsIGlnbm9yZUltYWdlU2VsZWN0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50cyA9IHBhcnNlR3JhZGllbnQodmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCB1cmxzID0gZ2V0TWF0Y2hlcyhjc3NVUkxSZWdleCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodXJscy5sZW5ndGggPT09IDAgJiYgZ3JhZGllbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGdldEluZGljZXMgPSAobWF0Y2hlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzLm1hcCgobWF0Y2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0gdmFsdWUuaW5kZXhPZihtYXRjaCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdmFsdWVJbmRleCArIG1hdGNoLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge21hdGNoLCBpbmRleDogdmFsdWVJbmRleH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGdyYWRpZW50c1xyXG4gICAgICAgICAgICAgICAgLm1hcCgoaSkgPT4gKHt0eXBlOiBcImdyYWRpZW50XCIsIC4uLml9KSlcclxuICAgICAgICAgICAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0SW5kaWNlcyh1cmxzKS5tYXAoKGkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXJsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLmluZGV4ID4gYi5pbmRleCA/IDEgOiAtMSkpO1xyXG4gICAgICAgICAgICBjb25zdCBnZXRHcmFkaWVudE1vZGlmaWVyID0gKGdyYWRpZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7dHlwZUdyYWRpZW50LCBtYXRjaCwgaGFzQ29tbWF9ID0gZ3JhZGllbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0c1JlZ2V4ID1cclxuICAgICAgICAgICAgICAgICAgICAvKFteXFwoXFwpLF0rKFxcKFteXFwoXFwpXSooXFwoW15cXChcXCldKlxcKSpbXlxcKFxcKV0qKT9cXCkpPyhbXlxcKFxcKSwgXXwoICg/IWNhbGMpKSkqKSw/L2c7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvclN0b3BSZWdleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgL14oZnJvbXxjb2xvci1zdG9wfHRvKVxcKChbXlxcKFxcKV0qPyxcXHMqKT8oLio/KVxcKSQvO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBnZXRNYXRjaGVzKHBhcnRzUmVnZXgsIG1hdGNoLCAxKS5tYXAoKHBhcnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUocGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBtb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFjZSA9IHBhcnQubGFzdEluZGV4T2YoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUocGFydC5zdWJzdHJpbmcoMCwgc3BhY2UpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHttb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgdGhlbWUpfSAke3BhcnQuc3Vic3RyaW5nKHNwYWNlICsgMSl9YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3JTdG9wTWF0Y2ggPSBwYXJ0Lm1hdGNoKGNvbG9yU3RvcFJlZ2V4KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3JTdG9wTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvclN0b3BNYXRjaFszXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29sb3JTdG9wTWF0Y2hbMV19KCR7Y29sb3JTdG9wTWF0Y2hbMl0gPyBgJHtjb2xvclN0b3BNYXRjaFsyXX0sIGAgOiBcIlwifSR7bW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIHRoZW1lKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gcGFydDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt0eXBlR3JhZGllbnR9KCR7cGFydHMubWFwKChtb2RpZnkpID0+IG1vZGlmeSh0aGVtZSkpLmpvaW4oXCIsIFwiKX0pJHtoYXNDb21tYSA/IFwiLCBcIiA6IFwiXCJ9YDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGdldFVSTE1vZGlmaWVyID0gKHVybFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gZ2V0Q1NTVVJMVmFsdWUodXJsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNVUkxFbXB0eSA9IHVybC5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7cGFyZW50U3R5bGVTaGVldH0gPSBydWxlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZVVSTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3R5bGVTaGVldCAmJiBwYXJlbnRTdHlsZVNoZWV0LmhyZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBnZXRDU1NCYXNlQmF0aChwYXJlbnRTdHlsZVNoZWV0LmhyZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyZW50U3R5bGVTaGVldD8ub3duZXJOb2RlPy5iYXNlVVJJIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gZ2V0QWJzb2x1dGVVUkwoYmFzZVVSTCwgdXJsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhc3luYyAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNVUkxFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1cmwoJycpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZURldGFpbHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZURldGFpbHNDYWNoZS5oYXModXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBpbWFnZURldGFpbHNDYWNoZS5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Jsb2JVUkxDaGVja1Jlc3VsdFJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByZXF1ZXN0QmxvYlVSTENoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhd2FpdGVycyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGVycy5wdXNoKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltYWdlRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLnNldCh1cmwsIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBhd2FpdCBnZXRJbWFnZURldGFpbHModXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHNDYWNoZS5zZXQodXJsLCBpbWFnZURldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgocmVzb2x2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2VEZXRhaWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FuY2VsbGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dXYXJuKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHJlc29sdmUpID0+IHJlc29sdmUobnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZURldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmdJbWFnZVZhbHVlID0gZ2V0QmdJbWFnZVZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJnSW1hZ2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJnSW1hZ2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iVVJMID0gYXdhaXQgdHJ5Q29udmVydERhdGFVUkxUb0Jsb2JVUkwodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2JVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgdXJsKFwiJHtibG9iVVJMfVwiKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB1cmwoXCIke3VybH1cIilgO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0QmdJbWFnZVZhbHVlID0gKGltYWdlRGV0YWlscywgdGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpc0RhcmssIGlzTGlnaHQsIGlzVHJhbnNwYXJlbnQsIGlzTGFyZ2UsIHdpZHRofSA9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ1NyYyA9IGltYWdlRGV0YWlscy5zcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImRhdGE6XCJcclxuICAgICAgICAgICAgICAgICAgICA6IGltYWdlRGV0YWlscy5zcmM7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMYXJnZSAmJiBpc0xpZ2h0ICYmICFpc1RyYW5zcGFyZW50ICYmIHRoZW1lLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKGBIaWRpbmcgbGFyZ2UgbGlnaHQgaW1hZ2UgJHtsb2dTcmN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGFyayAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5tb2RlID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPiAyXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKGBJbnZlcnRpbmcgZGFyayBpbWFnZSAke2xvZ1NyY31gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZlcnRlZCA9IGdldEZpbHRlcmVkSW1hZ2VVUkwoaW1hZ2VEZXRhaWxzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBpYTogY2xhbXAodGhlbWUuc2VwaWEgKyAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGB1cmwoXCIke2ludmVydGVkfVwiKWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzTGlnaHQgJiYgIWlzVHJhbnNwYXJlbnQgJiYgdGhlbWUubW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oYERpbW1pbmcgbGlnaHQgaW1hZ2UgJHtsb2dTcmN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGltbWVkID0gZ2V0RmlsdGVyZWRJbWFnZVVSTChpbWFnZURldGFpbHMsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBgdXJsKFwiJHtkaW1tZWR9XCIpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhlbWUubW9kZSA9PT0gMCAmJiBpc0xpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhgQXBwbHlpbmcgZmlsdGVyIHRvIGltYWdlICR7bG9nU3JjfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gZ2V0RmlsdGVyZWRJbWFnZVVSTChpbWFnZURldGFpbHMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWdodG5lc3M6IGNsYW1wKHRoZW1lLmJyaWdodG5lc3MgLSAxMCwgNSwgMjAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VwaWE6IGNsYW1wKHRoZW1lLnNlcGlhICsgMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBgdXJsKFwiJHtmaWx0ZXJlZH1cIilgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKGBOb3QgbW9kaWZ5aW5nIHRoZSBpbWFnZSAke2xvZ1NyY31gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgbW9kaWZpZXJzID0gW107XHJcbiAgICAgICAgICAgIGxldCBtYXRjaEluZGV4ID0gMDtcclxuICAgICAgICAgICAgbGV0IHByZXZIYXNDb21tYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtYXRjaGVzLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoe3R5cGUsIG1hdGNoLCBpbmRleCwgdHlwZUdyYWRpZW50LCBoYXNDb21tYSwgb2Zmc2V0fSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoU3RhcnQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXhTdGFydCA9IG1hdGNoSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hFbmQgPSBtYXRjaFN0YXJ0ICsgbWF0Y2gubGVuZ3RoICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoSW5kZXggPSBtYXRjaEVuZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZml4U3RhcnQgIT09IG1hdGNoU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZIYXNDb21tYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZXR3ZWVuVmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeFN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmV0d2VlblZhbHVlWzBdID09PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXR3ZWVuVmFsdWUgPSBiZXR3ZWVuVmFsdWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmV0d2VlblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN1YnN0cmluZyhwcmVmaXhTdGFydCwgbWF0Y2hTdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkhhc0NvbW1hID0gaGFzQ29tbWEgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwidXJsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goZ2V0VVJMTW9kaWZpZXIobWF0Y2gpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ3JhZGllbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEdyYWRpZW50TW9kaWZpZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudDogdHlwZUdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NvbW1hOiBoYXNDb21tYSB8fCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBtYXRjaGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goKCkgPT4gdmFsdWUuc3Vic3RyaW5nKG1hdGNoRW5kKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gbW9kaWZpZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG1vZGlmeSkgPT4gbW9kaWZ5KHRoZW1lKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5zb21lKChyKSA9PiByIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbigoYXN5bmNSZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3luY1Jlc3VsdHMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlc3VsdCA9IHJlc3VsdHMuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21iaW5lZFJlc3VsdC5lbmRzV2l0aChcIiwgaW5pdGlhbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlc3VsdC5zbGljZSgwLCAtOSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNoYWRvd01vZGlmaWVyV2l0aEluZm8odmFsdWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvck1hdGNoZXMgPSBnZXRNYXRjaGVzKFxyXG4gICAgICAgICAgICAgICAgLyhefFxccykoPyFjYWxjKShbYS16XStcXCguKz9cXCl8I1swLTlhLWZdK3xbYS16XSspKC4qPyhpbnNldHxvdXRzZXQpPygkfCwpKS9naSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgbm90UGFyc2VkID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbW9kaWZpZXJzID0gY29sb3JNYXRjaGVzLm1hcCgobWF0Y2gsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaEluZGV4ID0gdmFsdWUuaW5kZXhPZihtYXRjaCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hFbmQgPSBtYXRjaEluZGV4ICsgbWF0Y2gubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBtYXRjaEVuZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RQYXJzZWQrKztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gdmFsdWUuc3Vic3RyaW5nKHByZWZpeEluZGV4LCBtYXRjaEVuZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3ZhbHVlLnN1YnN0cmluZyhwcmVmaXhJbmRleCwgbWF0Y2hJbmRleCl9JHttb2RpZnlTaGFkb3dDb2xvcihyZ2IsIHRoZW1lKX0ke2kgPT09IGNvbG9yTWF0Y2hlcy5sZW5ndGggLSAxID8gdmFsdWUuc3Vic3RyaW5nKG1hdGNoRW5kKSA6IFwiXCJ9YDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkID0gbW9kaWZpZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgobW9kaWZ5KSA9PiBtb2RpZnkodGhlbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzTGVuZ3RoOiBjb2xvck1hdGNoZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHVucGFyc2VhYmxlTWF0Y2hlc0xlbmd0aDogbm90UGFyc2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogbW9kaWZpZWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNoYWRvd01vZGlmaWVyKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgc2hhZG93TW9kaWZpZXIgPSBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhbHVlKTtcclxuICAgICAgICBpZiAoIXNoYWRvd01vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBzaGFkb3dNb2RpZmllcih0aGVtZSkucmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyQ29sb3JNb2RpZmllcih2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yc01hdGNoID0gdmFsdWUubWF0Y2goXHJcbiAgICAgICAgICAgIC9eXFxzKihbYS16XSsoXFwoLipcXCkpPylcXHMrKFthLXpdKyhcXCguKlxcKSk/KVxccyokL1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCFjb2xvcnNNYXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRodW1iID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvcnNNYXRjaFsxXSk7XHJcbiAgICAgICAgY29uc3QgdHJhY2sgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yc01hdGNoWzNdKTtcclxuICAgICAgICBpZiAoIXRodW1iIHx8ICF0cmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgYCR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHRodW1iLCB0aGVtZSl9ICR7bW9kaWZ5QmFja2dyb3VuZENvbG9yKHRodW1iLCB0aGVtZSl9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yU2NoZW1lTW9kaWZpZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4gKHRoZW1lLm1vZGUgPT09IDAgPyBcImRhcmsgbGlnaHRcIiA6IFwiZGFya1wiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlTW9kaWZpZXIoXHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgcHJvcCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBydWxlLFxyXG4gICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybiB2YXJpYWJsZXNTdG9yZS5nZXRNb2RpZmllckZvclZhcmlhYmxlKHtcclxuICAgICAgICAgICAgdmFyTmFtZTogcHJvcCxcclxuICAgICAgICAgICAgc291cmNlVmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVEZXBlbmRhbnRNb2RpZmllcih2YXJpYWJsZXNTdG9yZSwgcHJvcCwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFyaWFibGVzU3RvcmUuZ2V0TW9kaWZpZXJGb3JWYXJEZXBlbmRhbnQocHJvcCwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5Nb2RpZmljYXRpb25DYWNoZSgpIHtcclxuICAgICAgICBjbGVhckNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUoKTtcclxuICAgICAgICBpbWFnZURldGFpbHNDYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIGNsZWFuSW1hZ2VQcm9jZXNzaW5nQ2FjaGUoKTtcclxuICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFZBUl9UWVBFX0JHQ09MT1IgPSAxIDw8IDA7XHJcbiAgICBjb25zdCBWQVJfVFlQRV9URVhUQ09MT1IgPSAxIDw8IDE7XHJcbiAgICBjb25zdCBWQVJfVFlQRV9CT1JERVJDT0xPUiA9IDEgPDwgMjtcclxuICAgIGNvbnN0IFZBUl9UWVBFX0JHSU1HID0gMSA8PCAzO1xyXG4gICAgY2xhc3MgVmFyaWFibGVzU3RvcmUge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhclR5cGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnZhclJlZnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy52YXJSZWZzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlcy5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1ZhclR5cGUodmFyTmFtZSwgdHlwZU51bSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJUeXBlcy5oYXModmFyTmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLnZhclR5cGVzLmdldCh2YXJOYW1lKSAmIHR5cGVOdW0pID4gMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRSdWxlc0Zvck1hdGNoaW5nKHJ1bGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5hZGQocnVsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRJbmxpbmVTdHlsZUZvck1hdGNoaW5nKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5wdXNoKHN0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuc2l6ZSA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVTdHlsZVF1ZXVlLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYXJUeXBlcyA9IG5ldyBNYXAodGhpcy52YXJUeXBlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJvb3RWYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0VmFyaWFibGVzQW5kVmFyRGVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFJvb3RWYXJEZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyUmVmcy5mb3JFYWNoKChyZWZzLCB2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWZzLmZvckVhY2goKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YXJUeXBlcy5oYXModikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHIsIHRoaXMudmFyVHlwZXMuZ2V0KHYpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bmtub3duQmdWYXJzLmhhcyh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYXJUeXBlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CR0NPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX1RFWFRDT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CT1JERVJDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycy5hZGQodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzQ29sb3IgPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZFZhclJlZih2LCAocmVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuaGFzKHJlZikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYXJUeXBlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CR0NPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVENPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQk9SREVSQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSAhPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyUmVmcyh2LCAocmVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZShyZWYsIFZBUl9UWVBFX0JHQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SIHwgVkFSX1RZUEVfQkdJTUcpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMuYWRkKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuZm9yRWFjaCgodmFyTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHZhck5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNb2RpZmllckZvclZhcmlhYmxlKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdldERlY2xhcmF0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRNb2RpZmllZFZhbHVlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlTnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJOYW1lV3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JNb2RpZmllclxyXG4gICAgICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWYXJUeXBlKHZhck5hbWUsIHR5cGVOdW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB2YXJOYW1lV3JhcHBlcih2YXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGlmaWVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChzb3VyY2VWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbnN0cnVjdGVkQ29sb3JWYXIoc291cmNlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gaW5zZXJ0VmFyVmFsdWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlTnVtID09PSBWQVJfVFlQRV9CR0NPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSBjb2xvck1vZGlmaWVyKHZhbHVlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodikgPT4gdmFyTmFtZVdyYXBwZXIodiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmYWxsYmFjaykgPT4gY29sb3JNb2RpZmllcihmYWxsYmFjaywgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSBjb2xvck1vZGlmaWVyKHNvdXJjZVZhbHVlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGlmaWVkVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JHQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCZ0NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNb2RpZmllZFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeVRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kaWZpZWRWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQk9SREVSQ09MT1IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5Qm9yZGVyQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZSh2YXJOYW1lLCBWQVJfVFlQRV9CR0lNRykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB3cmFwQmdJbWdWYXJpYWJsZU5hbWUodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RpZmllZFZhbHVlID0gc291cmNlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChzb3VyY2VWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHYpID0+IHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmYWxsYmFjaykgPT4gdHJ5TW9kaWZ5QmdDb2xvcihmYWxsYmFjaywgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnTW9kaWZpZXIgPSBnZXRCZ0ltYWdlTW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBiZ01vZGlmaWVyID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJnTW9kaWZpZXIodGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBiZ01vZGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZExpc3RlbmVyID0gKG9uVHlwZUNoYW5nZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWNzID0gZ2V0RGVjbGFyYXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZShkZWNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZSh2YXJOYW1lLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlTGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVZhcmlhYmxlVHlwZUNoYW5nZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZ2V0RGVjbGFyYXRpb25zKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlOiB7YWRkTGlzdGVuZXIsIHJlbW92ZUxpc3RlbmVyc31cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE1vZGlmaWVyRm9yVmFyRGVwZW5kYW50KHByb3BlcnR5LCBzb3VyY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0NvbnN0cnVjdGVkQ29sb3IgPSBzb3VyY2VWYWx1ZS5tYXRjaCgvXlxccyoocmdifGhzbClhP1xcKC8pO1xyXG4gICAgICAgICAgICBjb25zdCBpc1NpbXBsZUNvbnN0cnVjdGVkQ29sb3IgPSBzb3VyY2VWYWx1ZS5tYXRjaChcclxuICAgICAgICAgICAgICAgIC9ecmdiYT9cXCh2YXJcXCgtLVtcXC1fQS1aYS16MC05XStcXCkoXFxzKiw/XFwvP1xccyowP1xcLlxcZCspP1xcKSQvXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChpc0NvbnN0cnVjdGVkQ29sb3IgJiYgIWlzU2ltcGxlQ29uc3RydWN0ZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCZyA9IHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJiYWNrZ3JvdW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNUZXh0ID0gaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gaW5zZXJ0VmFyVmFsdWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGlzQmcgPyBcIiNmZmZmZmZcIiA6IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllciA9IGlzQmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnlNb2RpZnlCZ0NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXNUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnlNb2RpZnlUZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRyeU1vZGlmeUJvcmRlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllcih2YWx1ZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgfHxcclxuICAgICAgICAgICAgICAgIChpc1NpbXBsZUNvbnN0cnVjdGVkQ29sb3IgJiYgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0RmFsbGJhY2sgPSB0cnlNb2RpZnlCZ0NvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbnN0cnVjdGVkQ29sb3IgPyBcIjI1NSwgMjU1LCAyNTVcIiA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRGYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRGYWxsYmFjayA9IHRyeU1vZGlmeVRleHRDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb25zdHJ1Y3RlZENvbG9yID8gXCIwLCAwLCAwXCIgOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodikgPT4gd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZSh2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiB0cnlNb2RpZnlUZXh0Q29sb3IoZmFsbGJhY2ssIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEZhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJveC1zaGFkb3dcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmtub3duVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlUmVwbGFjZWQgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHSU1HKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcEJnSW1nVmFyaWFibGVOYW1lKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duVmFycy5hZGQodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImJveC1zaGFkb3dcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhZG93TW9kaWZpZXIgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNoYWRvd01vZGlmaWVyV2l0aEluZm8odmFyaWFibGVSZXBsYWNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllZFNoYWRvdyA9IHNoYWRvd01vZGlmaWVyKHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFNoYWRvdy51bnBhcnNlYWJsZU1hdGNoZXNMZW5ndGggIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTaGFkb3cubWF0Y2hlc0xlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkU2hhZG93LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFyaWFibGVSZXBsYWNlZDtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkID0gbW9kaWZ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVua25vd25WYXJzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRmFsbGJhY2tSZXNvbHZlZCA9IG1vZGlmaWVkLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgL152YXJcXCguKj8sICh2YXJcXCgtLWRhcmtyZWFkZXItYmctLS4qXFwpKXwoI1swLTlBLUZhLWZdKyl8KFthLXpdKyl8KHJnYmE/XFwoLitcXCkpfChoc2xhP1xcKC4rXFwpKVxcKSQvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ZhbGxiYWNrUmVzb2x2ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdW5rbm93blZhciBvZiB1bmtub3duVmFycy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVZhcmlhYmxlVHlwZUNoYW5nZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duVmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtb2RpZnkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVua25vd25WYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllZDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcImJvcmRlclwiKSB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcIm91dGxpbmVcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUodiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmYWxsYmFjaykgPT4gdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IoZmFsbGJhY2ssIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKHZhck5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuc2V0KHZhck5hbWUsIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgcm9vdFN0b3JlID0gdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5nZXQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghcm9vdFN0b3JlLmhhcyhjYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgICAgIHJvb3RTdG9yZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuc3Vic2NyaWJlRnJvbVZhcmlhYmxlVHlwZUNoYW5nZXModmFyTmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmdldCh2YXJOYW1lKS5kZWxldGUoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxlY3RWYXJpYWJsZXNBbmRWYXJEZXAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5mb3JFYWNoKChydWxlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGVzLCAocnVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLnN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdFZhcnNGcm9tQ1NTRGVjbGFyYXRpb25zKHJ1bGUuc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmVTdHlsZVF1ZXVlLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RWYXJzRnJvbUNTU0RlY2xhcmF0aW9ucyhzdHlsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmVTdHlsZVF1ZXVlLnNwbGljZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sbGVjdFZhcnNGcm9tQ1NTRGVjbGFyYXRpb25zKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoc3R5bGUsIChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdFZhcmlhYmxlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0VmFyRGVwZW5kYW50KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaG91bGRQcm9jZXNzUm9vdFZhcmlhYmxlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5zaXplID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpPy5pbmNsdWRlcyhcIi0tXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxlY3RSb290VmFyaWFibGVzKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkUHJvY2Vzc1Jvb3RWYXJpYWJsZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdFZhcmlhYmxlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnNwZWN0VmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy51bnN0YWJsZVZhclZhbHVlcy5zZXQodmFyTmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFsdWUpICYmIGlzQ29uc3RydWN0ZWRDb2xvclZhcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZpbmVkVmFycy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgaXNDb2xvciA9IEJvb2xlYW4oXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaChyYXdSR0JTcGFjZVJlZ2V4KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKHJhd1JHQkNvbW1hUmVnZXgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VDb2xvcldpdGhDYWNoZSh2YWx1ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGlzQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5pbmNsdWRlcyhcInVybChcIikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwibGluZWFyLWdyYWRpZW50KFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoXCJyYWRpYWwtZ3JhZGllbnQoXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHZhck5hbWUsIFZBUl9UWVBFX0JHSU1HKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlVmFyaWFibGVUeXBlKHZhck5hbWUsIHR5cGVOdW0pIHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFR5cGUgPSB0aGlzLmluaXRpYWxWYXJUeXBlcy5nZXQodmFyTmFtZSkgfHwgMDtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFR5cGUgPSB0aGlzLnZhclR5cGVzLmdldCh2YXJOYW1lKSB8fCAwO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUeXBlID0gY3VycmVudFR5cGUgfCB0eXBlTnVtO1xyXG4gICAgICAgICAgICB0aGlzLnZhclR5cGVzLnNldCh2YXJOYW1lLCBuZXdUeXBlKTtcclxuICAgICAgICAgICAgaWYgKG5ld1R5cGUgIT09IGluaXRpYWxUeXBlIHx8IHRoaXMudW5kZWZpbmVkVmFycy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycy5kZWxldGUodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmRlbGV0ZSh2YXJOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmRlbGV0ZSh2YXJOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sbGVjdFJvb3RWYXJEZXBlbmRlbnRzKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkUHJvY2Vzc1Jvb3RWYXJpYWJsZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3RWYXJEZXBlbmRhbnQocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3BlY3RWYXJEZXBlbmRhbnQocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy52YXJSZWZzLmhhcyhwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YXJSZWZzLnNldChwcm9wZXJ0eSwgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YXJSZWZzLmdldChwcm9wZXJ0eSkuYWRkKHJlZik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtY29sb3JcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYm94LXNoYWRvd1wiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgKHYpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAodikgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfVEVYVENPTE9SKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJib3JkZXJcIikgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJvdXRsaW5lXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgKHYpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX0JPUkRFUkNPTE9SKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmRcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUiB8IFZBUl9UWVBFX0JHSU1HKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQmdDb2xvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZFZhclJlZih2LCAocmVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5oYXMocmVmKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYXJUeXBlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JHQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVENPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JPUkRFUkNPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgIT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJSZWZzKHYsIChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQmdDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHJlZiwgVkFSX1RZUEVfQkdDT0xPUik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuYWRkKHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZXJhdGVWYXJEZXBzKHZhbHVlLCBpdGVyYXRvcikge1xyXG4gICAgICAgICAgICBjb25zdCB2YXJEZXBzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBpdGVyYXRlVmFyRGVwZW5kZW5jaWVzKHZhbHVlLCAodikgPT4gdmFyRGVwcy5hZGQodikpO1xyXG4gICAgICAgICAgICB2YXJEZXBzLmZvckVhY2goKHYpID0+IGl0ZXJhdG9yKHYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluZFZhclJlZih2YXJOYW1lLCBpdGVyYXRvciwgc3RhY2sgPSBuZXcgU2V0KCkpIHtcclxuICAgICAgICAgICAgaWYgKHN0YWNrLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhY2suYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBpdGVyYXRvcih2YXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhck5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVmcyA9IHRoaXMudmFyUmVmcy5nZXQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghcmVmcyB8fCByZWZzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVmIG9mIHJlZnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gdGhpcy5maW5kVmFyUmVmKHJlZiwgaXRlcmF0b3IsIHN0YWNrKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlcmF0ZVZhclJlZnModmFyTmFtZSwgaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kVmFyUmVmKHZhck5hbWUsIChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKHJlZik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRPblJvb3RWYXJpYWJsZUNoYW5nZShjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLm9uUm9vdFZhcmlhYmxlRGVmaW5lZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdXRSb290VmFycyhzdHlsZUVsZW1lbnQsIHRoZW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gc3R5bGVFbGVtZW50LnNoZWV0O1xyXG4gICAgICAgICAgICBpZiAoc2hlZXQuY3NzUnVsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2hlZXQuZGVsZXRlUnVsZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZShwcm9wZXJ0eSwgVkFSX1RZUEVfQkdDT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUocHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeUJnQ29sb3IodmFsdWUsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhclR5cGUocHJvcGVydHksIFZBUl9UWVBFX1RFWFRDT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZShwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5VGV4dENvbG9yKHZhbHVlLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHByb3BlcnR5LCBWQVJfVFlQRV9CT1JERVJDT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCb3JkZXJDb2xvcih2YWx1ZSwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJvb3RWYXJpYWJsZURlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc0xpbmVzID0gW107XHJcbiAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goXCI6cm9vdCB7XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIGRlY2xhcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgY3NzTGluZXMucHVzaChgICAgICR7cHJvcGVydHl9OiAke3ZhbHVlfTtgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY3NzVGV4dCA9IGNzc0xpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUoY3NzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFyaWFibGVzU3RvcmUgPSBuZXcgVmFyaWFibGVzU3RvcmUoKTtcclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlUmFuZ2UoaW5wdXQsIHNlYXJjaFN0YXJ0ID0gMCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5wdXQuaW5kZXhPZihcInZhcihcIiwgc2VhcmNoU3RhcnQpO1xyXG4gICAgICAgIGlmIChzdGFydCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZ2V0UGFyZW50aGVzZXNSYW5nZShpbnB1dCwgc3RhcnQgKyAzKTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXJ0LCBlbmQ6IHJhbmdlLmVuZH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZXNNYXRjaGVzKGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2VzID0gW107XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCByYW5nZTtcclxuICAgICAgICB3aGlsZSAoKHJhbmdlID0gZ2V0VmFyaWFibGVSYW5nZShpbnB1dCwgaSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IHJhbmdlO1xyXG4gICAgICAgICAgICByYW5nZXMucHVzaCh7c3RhcnQsIGVuZCwgdmFsdWU6IGlucHV0LnN1YnN0cmluZyhzdGFydCwgZW5kKX0pO1xyXG4gICAgICAgICAgICBpID0gcmFuZ2UuZW5kICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJhbmdlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VWYXJpYWJsZXNNYXRjaGVzKGlucHV0LCByZXBsYWNlcikge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBnZXRWYXJpYWJsZXNNYXRjaGVzKGlucHV0KTtcclxuICAgICAgICBjb25zdCBtYXRjaGVzQ291bnQgPSBtYXRjaGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobWF0Y2hlc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRzID0gbWF0Y2hlcy5tYXAoKG0pID0+XHJcbiAgICAgICAgICAgIHJlcGxhY2VyKG0udmFsdWUsIG1hdGNoZXMubGVuZ3RoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBbXTtcclxuICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZygwLCBtYXRjaGVzWzBdLnN0YXJ0KSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHJlcGxhY2VtZW50c1tpXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbWF0Y2hlc1tpXS5lbmQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9XHJcbiAgICAgICAgICAgICAgICBpIDwgbWF0Y2hlc0NvdW50IC0gMSA/IG1hdGNoZXNbaSArIDFdLnN0YXJ0IDogaW5wdXRMZW5ndGg7XHJcbiAgICAgICAgICAgIHBhcnRzLnB1c2goaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZU5hbWVBbmRGYWxsYmFjayhtYXRjaCkge1xyXG4gICAgICAgIGNvbnN0IGNvbW1hSW5kZXggPSBtYXRjaC5pbmRleE9mKFwiLFwiKTtcclxuICAgICAgICBsZXQgbmFtZTtcclxuICAgICAgICBsZXQgZmFsbGJhY2s7XHJcbiAgICAgICAgaWYgKGNvbW1hSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBuYW1lID0gbWF0Y2guc3Vic3RyaW5nKDQsIGNvbW1hSW5kZXgpLnRyaW0oKTtcclxuICAgICAgICAgICAgZmFsbGJhY2sgPSBtYXRjaC5zdWJzdHJpbmcoY29tbWFJbmRleCArIDEsIG1hdGNoLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYW1lID0gbWF0Y2guc3Vic3RyaW5nKDQsIG1hdGNoLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICAgICAgICAgICAgZmFsbGJhY2sgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge25hbWUsIGZhbGxiYWNrfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lUmVwbGFjZXIsXHJcbiAgICAgICAgZmFsbGJhY2tSZXBsYWNlcixcclxuICAgICAgICBmaW5hbEZhbGxiYWNrXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBtYXRjaFJlcGxhY2VyID0gKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBmYWxsYmFja30gPSBnZXRWYXJpYWJsZU5hbWVBbmRGYWxsYmFjayhtYXRjaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBuYW1lUmVwbGFjZXIobmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5hbEZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB2YXIoJHtuZXdOYW1lfSwgJHtmaW5hbEZhbGxiYWNrfSlgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGB2YXIoJHtuZXdOYW1lfSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBuZXdGYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KGZhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVJlcGxhY2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrUmVwbGFjZXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmFsbGJhY2tSZXBsYWNlcikge1xyXG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSBmYWxsYmFja1JlcGxhY2VyKGZhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZhbGxiYWNrID0gZmFsbGJhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGB2YXIoJHtuZXdOYW1lfSwgJHtuZXdGYWxsYmFja30pYDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyh2YWx1ZSwgbWF0Y2hSZXBsYWNlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlVmFyRGVwZW5kZW5jaWVzKHZhbHVlLCBpdGVyYXRvcikge1xyXG4gICAgICAgIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyh2YWx1ZSwgKHZhck5hbWUpID0+IHtcclxuICAgICAgICAgICAgaXRlcmF0b3IodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YXJOYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgLS1kYXJrcmVhZGVyLWJnJHtuYW1lfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYC0tZGFya3JlYWRlci10ZXh0JHtuYW1lfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgLS1kYXJrcmVhZGVyLWJvcmRlciR7bmFtZX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcEJnSW1nVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYC0tZGFya3JlYWRlci1iZ2ltZyR7bmFtZX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNWYXJpYWJsZShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1ZhckRlcGVuZGFudCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5pbmNsdWRlcyhcInZhcihcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0NvbnN0cnVjdGVkQ29sb3JWYXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlxccyoocmdifGhzbClhP1xcKC8pIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eKCgoXFxkezEsM30pfCh2YXJcXChbXFwtX0EtWmEtejAtOV0rXFwpKSksP1xccyo/KXszfSQvKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiY29sb3JcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJjYXJldC1jb2xvclwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcIi13ZWJraXQtdGV4dC1maWxsLWNvbG9yXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmF3UkdCU3BhY2VSZWdleCA9IC9eKFxcZHsxLDN9KVxccysoXFxkezEsM30pXFxzKyhcXGR7MSwzfSkkLztcclxuICAgIGNvbnN0IHJhd1JHQkNvbW1hUmVnZXggPSAvXihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSkkLztcclxuICAgIGZ1bmN0aW9uIHBhcnNlUmF3Q29sb3JWYWx1ZShpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID1cclxuICAgICAgICAgICAgaW5wdXQubWF0Y2gocmF3UkdCU3BhY2VSZWdleCkgPz8gaW5wdXQubWF0Y2gocmF3UkdCQ29tbWFSZWdleCk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYHJnYigke21hdGNoWzFdfSwgJHttYXRjaFsyXX0sICR7bWF0Y2hbM119KWA7XHJcbiAgICAgICAgICAgIHJldHVybiB7aXNSYXc6IHRydWUsIGNvbG9yfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtpc1JhdzogZmFsc2UsIGNvbG9yOiBpbnB1dH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSYXdDb2xvclZhbHVlKGlucHV0LCB0aGVtZSwgbW9kaWZ5RnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCB7aXNSYXcsIGNvbG9yfSA9IHBhcnNlUmF3Q29sb3JWYWx1ZShpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvcik7XHJcbiAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRDb2xvciA9IG1vZGlmeUZ1bmN0aW9uKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNSYXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dEluUkdCID0gcGFyc2VDb2xvcldpdGhDYWNoZShvdXRwdXRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0SW5SR0JcclxuICAgICAgICAgICAgICAgICAgICA/IGAke291dHB1dEluUkdCLnJ9LCAke291dHB1dEluUkdCLmd9LCAke291dHB1dEluUkdCLmJ9YFxyXG4gICAgICAgICAgICAgICAgICAgIDogb3V0cHV0Q29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cnlNb2RpZnlCZ0NvbG9yKGNvbG9yLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVSYXdDb2xvclZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5QmFja2dyb3VuZENvbG9yKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyeU1vZGlmeVRleHRDb2xvcihjb2xvciwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gaGFuZGxlUmF3Q29sb3JWYWx1ZShjb2xvciwgdGhlbWUsIG1vZGlmeUZvcmVncm91bmRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cnlNb2RpZnlCb3JkZXJDb2xvcihjb2xvciwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gaGFuZGxlUmF3Q29sb3JWYWx1ZShjb2xvciwgdGhlbWUsIG1vZGlmeUJvcmRlckNvbG9yKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluc2VydFZhclZhbHVlcyhzb3VyY2UsIHZhclZhbHVlcywgZnVsbFN0YWNrID0gbmV3IFNldCgpKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5zVW5yZXNvbHZlZFZhciA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoUmVwbGFjZXIgPSAobWF0Y2gsIGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBmYWxsYmFja30gPSBnZXRWYXJpYWJsZU5hbWVBbmRGYWxsYmFjayhtYXRjaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gY291bnQgPiAxID8gbmV3IFNldChmdWxsU3RhY2spIDogZnVsbFN0YWNrO1xyXG4gICAgICAgICAgICBpZiAoc3RhY2suaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluc1VucmVzb2x2ZWRWYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhY2suYWRkKG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCB2YXJWYWx1ZSA9IHZhclZhbHVlcy5nZXQobmFtZSkgfHwgZmFsbGJhY2s7XHJcbiAgICAgICAgICAgIGxldCBpbnNlcnRlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh2YXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhclZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gaW5zZXJ0VmFyVmFsdWVzKHZhclZhbHVlLCB2YXJWYWx1ZXMsIHN0YWNrKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSB2YXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWluc2VydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluc1VucmVzb2x2ZWRWYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluc2VydGVkO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZWQgPSByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyhzb3VyY2UsIG1hdGNoUmVwbGFjZXIpO1xyXG4gICAgICAgIGlmIChjb250YWluc1VucmVzb2x2ZWRWYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXBsYWNlZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdmVycmlkZXMkMSA9IHtcclxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYmdjb2xvclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJhY2tncm91bmQtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ2NvbG9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1iZ2ltYWdlXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYmFja2dyb3VuZC1pbWFnZVwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJnaW1hZ2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItYm90dG9tXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1ib3R0b21cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItbGVmdC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItbGVmdFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1sZWZ0LWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWxlZnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItcmlnaHQtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXJpZ2h0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLXRvcC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItdG9wXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLXRvcC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci10b3BcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3gtc2hhZG93XCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJveHNoYWRvd1wiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJveC1zaGFkb3dcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3hzaGFkb3dcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1jb2xvclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtY29sb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmaWxsXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWZpbGxcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJmaWxsXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtZmlsbFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1zdHJva2VcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJzdHJva2VcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1zdHJva2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvdXRsaW5lLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLW91dGxpbmVcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJvdXRsaW5lLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtb3V0bGluZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0b3AtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtc3RvcGNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwic3RvcC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLXN0b3Bjb2xvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNob3J0aGFuZE92ZXJyaWRlcyA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1iZ1wiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJhY2tncm91bmRcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG92ZXJyaWRlc0xpc3QgPSBPYmplY3QudmFsdWVzKG92ZXJyaWRlcyQxKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRQcm9wTGlzdCA9IHt9O1xyXG4gICAgb3ZlcnJpZGVzTGlzdC5mb3JFYWNoKFxyXG4gICAgICAgICh7Y3NzUHJvcCwgY3VzdG9tUHJvcH0pID0+IChub3JtYWxpemVkUHJvcExpc3RbY3VzdG9tUHJvcF0gPSBjc3NQcm9wKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IElOTElORV9TVFlMRV9BVFRSUyA9IFtcclxuICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgXCJmaWxsXCIsXHJcbiAgICAgICAgXCJzdG9wLWNvbG9yXCIsXHJcbiAgICAgICAgXCJzdHJva2VcIixcclxuICAgICAgICBcImJnY29sb3JcIixcclxuICAgICAgICBcImNvbG9yXCIsXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kXCJcclxuICAgIF07XHJcbiAgICBjb25zdCBJTkxJTkVfU1RZTEVfU0VMRUNUT1IgPSBJTkxJTkVfU1RZTEVfQVRUUlMubWFwKFxyXG4gICAgICAgIChhdHRyKSA9PiBgWyR7YXR0cn1dYFxyXG4gICAgKS5qb2luKFwiLCBcIik7XHJcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVPdmVycmlkZVN0eWxlKCkge1xyXG4gICAgICAgIGNvbnN0IGFsbE92ZXJyaWRlcyA9IG92ZXJyaWRlc0xpc3QuY29uY2F0KFxyXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHNob3J0aGFuZE92ZXJyaWRlcylcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBhbGxPdmVycmlkZXNcclxuICAgICAgICAgICAgLm1hcCgoe2RhdGFBdHRyLCBjdXN0b21Qcm9wLCBjc3NQcm9wfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICBgWyR7ZGF0YUF0dHJ9XSB7YCxcclxuICAgICAgICAgICAgICAgICAgICBgICAke2Nzc1Byb3B9OiB2YXIoJHtjdXN0b21Qcm9wfSkgIWltcG9ydGFudDtgLFxyXG4gICAgICAgICAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jb25jYXQoW1xyXG4gICAgICAgICAgICAgICAgXCJbZGF0YS1kYXJrcmVhZGVyLWlubGluZS1pbnZlcnRdIHtcIixcclxuICAgICAgICAgICAgICAgIFwiICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcIixcclxuICAgICAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIC5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0SW5saW5lU3R5bGVFbGVtZW50cyhyb290KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgIGlmIChyb290IGluc3RhbmNlb2YgRWxlbWVudCAmJiByb290Lm1hdGNoZXMoSU5MSU5FX1NUWUxFX1NFTEVDVE9SKSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQgfHxcclxuICAgICAgICAgICAgKGlzU2hhZG93RG9tU3VwcG9ydGVkICYmIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB8fFxyXG4gICAgICAgICAgICByb290IGluc3RhbmNlb2YgRG9jdW1lbnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcHVzaChyZXN1bHRzLCByb290LnF1ZXJ5U2VsZWN0b3JBbGwoSU5MSU5FX1NUWUxFX1NFTEVDVE9SKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHJlZU9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGF0dHJPYnNlcnZlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvcklubGluZVN0eWxlcyhlbGVtZW50U3R5bGVEaWRDaGFuZ2UsIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKSB7XHJcbiAgICAgICAgZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICBkb2N1bWVudCxcclxuICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgKGhvc3QpID0+IHtcclxuICAgICAgICAgICAgZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICAgICAgaG9zdC5zaGFkb3dSb290LFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICByb290LFxyXG4gICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSxcclxuICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHRyZWVPYnNlcnZlcnMuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgICAgIHRyZWVPYnNlcnZlcnMuZ2V0KHJvb3QpLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgYXR0ck9ic2VydmVycy5nZXQocm9vdCkuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaXNjb3ZlcmVkTm9kZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGRpc2NvdmVyTm9kZXMobm9kZSkge1xyXG4gICAgICAgICAgICBnZXRJbmxpbmVTdHlsZUVsZW1lbnRzKG5vZGUpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzY292ZXJlZE5vZGVzLmhhcyhlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNjb3ZlcmVkTm9kZXMuYWRkKGVsKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZShlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZSwgKG4pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXNjb3ZlcmVkTm9kZXMuaGFzKG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzY292ZXJlZE5vZGVzLmFkZChub2RlKTtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKG4uc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgICAgICBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgbi5zaGFkb3dSb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cmVlT2JzZXJ2ZXIgPSBjcmVhdGVPcHRpbWl6ZWRUcmVlT2JzZXJ2ZXIocm9vdCwge1xyXG4gICAgICAgICAgICBvbk1pbm9yTXV0YXRpb25zOiAoX3Jvb3QsIHthZGRpdGlvbnN9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaCgoYWRkZWQpID0+IGRpc2NvdmVyTm9kZXMoYWRkZWQpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNjb3Zlck5vZGVzKHJvb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJlZU9ic2VydmVycy5zZXQocm9vdCwgdHJlZU9ic2VydmVyKTtcclxuICAgICAgICBsZXQgYXR0ZW1wdENvdW50ID0gMDtcclxuICAgICAgICBsZXQgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IEFUVEVNUFRTX0lOVEVSVkFMID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDEwfSk7XHJcbiAgICAgICAgY29uc3QgUkVUUllfVElNRU9VVCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAyfSk7XHJcbiAgICAgICAgY29uc3QgTUFYX0FUVEVNUFRTX0NPVU5UID0gNTA7XHJcbiAgICAgICAgbGV0IGNhY2hlID0gW107XHJcbiAgICAgICAgbGV0IHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zID0gdGhyb3R0bGUoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVkVGFyZ2V0cyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG0udGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZWRUYXJnZXRzLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKElOTElORV9TVFlMRV9BVFRSUy5pbmNsdWRlcyhtLmF0dHJpYnV0ZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlZFRhcmdldHMuYWRkKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBhdHRyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgICAgIGNhY2hlLnB1c2goLi4ubXV0YXRpb25zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRlbXB0Q291bnQrKztcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGVtcHRDb3VudCA+PSBNQVhfQVRURU1QVFNfQ09VTlQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub3cgLSBzdGFydCA8IEFUVEVNUFRTX0lOVEVSVkFMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlQ2FjaGUgPSBjYWNoZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKGF0dHJpYnV0ZUNhY2hlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBSRVRSWV9USU1FT1VUKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKC4uLm11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgICAgICBhdHRlbXB0Q291bnQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyhtdXRhdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBJTkxJTkVfU1RZTEVfQVRUUlMuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzTGlzdC5tYXAoKHtkYXRhQXR0cn0pID0+IGRhdGFBdHRyKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVycy5zZXQocm9vdCwgYXR0ck9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvcklubGluZVN0eWxlcygpIHtcclxuICAgICAgICB0cmVlT2JzZXJ2ZXJzLmZvckVhY2goKG8pID0+IG8uZGlzY29ubmVjdCgpKTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXJzLmZvckVhY2goKG8pID0+IG8uZGlzY29ubmVjdCgpKTtcclxuICAgICAgICB0cmVlT2JzZXJ2ZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5saW5lU3R5bGVDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBjb25zdCBzdmdJbnZlcnNpb25DYWNoZSA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBzdmdBbmFseXNpc0NvbmRpdGlvbkNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGNvbnN0IHRoZW1lUHJvcHMgPSBbXCJicmlnaHRuZXNzXCIsIFwiY29udHJhc3RcIiwgXCJncmF5c2NhbGVcIiwgXCJzZXBpYVwiLCBcIm1vZGVcIl07XHJcbiAgICBmdW5jdGlvbiBzaG91bGRBbmFseXplU1ZHQXNJbWFnZShzdmcpIHtcclxuICAgICAgICBpZiAoc3ZnQW5hbHlzaXNDb25kaXRpb25DYWNoZS5oYXMoc3ZnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ZnQW5hbHlzaXNDb25kaXRpb25DYWNoZS5nZXQoc3ZnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkQW5hbHl6ZSA9IEJvb2xlYW4oXHJcbiAgICAgICAgICAgIHN2ZyAmJlxyXG4gICAgICAgICAgICAgICAgKHN2Zy5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKT8uaW5jbHVkZXMoXCJsb2dvXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpPy5pbmNsdWRlcyhcImxvZ29cIikpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzdmdBbmFseXNpc0NvbmRpdGlvbkNhY2hlLnNldChzdmcsIHNob3VsZEFuYWx5emUpO1xyXG4gICAgICAgIHJldHVybiBzaG91bGRBbmFseXplO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbCwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gSU5MSU5FX1NUWUxFX0FUVFJTLm1hcChcclxuICAgICAgICAgICAgKGF0dHIpID0+IGAke2F0dHJ9PVwiJHtlbC5nZXRBdHRyaWJ1dGUoYXR0cil9XCJgXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAuY29uY2F0KHRoZW1lUHJvcHMubWFwKChwcm9wKSA9PiBgJHtwcm9wfT1cIiR7dGhlbWVbcHJvcF19XCJgKSlcclxuICAgICAgICAgICAgLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvdWxkSWdub3JlSW5saW5lU3R5bGUoZWxlbWVudCwgc2VsZWN0b3JzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNlbGVjdG9ycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmdub3JlZFNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKGluZ25vcmVkU2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgaWdub3JlSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWxlbWVudCwgdGhlbWUpO1xyXG4gICAgICAgIGlmIChjYWNoZUtleSA9PT0gaW5saW5lU3R5bGVDYWNoZS5nZXQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1bnNldFByb3BzID0gbmV3IFNldChPYmplY3Qua2V5cyhvdmVycmlkZXMkMSkpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEN1c3RvbVByb3AodGFyZ2V0Q1NTUHJvcCwgbW9kaWZpZXJDU1NQcm9wLCBjc3NWYWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kID0gZ2V0TW9kaWZpYWJsZUNTU0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJDU1NQcm9wLFxyXG4gICAgICAgICAgICAgICAgY3NzVmFsLFxyXG4gICAgICAgICAgICAgICAge3N0eWxlOiBlbGVtZW50LnN0eWxlfSxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICghbW9kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0U3RhdGljVmFsdWUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtjdXN0b21Qcm9wLCBkYXRhQXR0cn0gPVxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlcyQxW3RhcmdldENTU1Byb3BdID8/XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRoYW5kT3ZlcnJpZGVzW3RhcmdldENTU1Byb3BdO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjdXN0b21Qcm9wLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGRhdGFBdHRyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGRhdGFBdHRyLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVuc2V0UHJvcHMuZGVsZXRlKHRhcmdldENTU1Byb3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhckRlY2xhcmF0aW9uKG1vZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXZEZWNsYXJhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldFByb3BzKGRlY2xhcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZEZWNsYXJhdGlvbnMuZm9yRWFjaCgoe3Byb3BlcnR5fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuZm9yRWFjaCgoe3Byb3BlcnR5LCB2YWx1ZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFByb3BzKG1vZC5kZWNsYXJhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgbW9kLm9uVHlwZUNoYW5nZS5hZGRMaXN0ZW5lcihzZXRQcm9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0QXN5bmNWYWx1ZShwcm9taXNlLCBzb3VyY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q1NTUHJvcCA9PT0gXCJiYWNrZ3JvdW5kXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc3RhcnRzV2l0aChcInZhcigtLWRhcmtyZWFkZXItYmctLVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0aWNWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0YXJnZXRDU1NQcm9wID09PSBcImJhY2tncm91bmQtaW1hZ2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID09PSBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGljVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZUNhY2hlLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbGVtZW50LCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIG1vZC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gbW9kLnZhbHVlKHRoZW1lKSA6IG1vZC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGljVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXN5bmNWYWx1ZSh2YWx1ZSwgY3NzVmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhckRlY2xhcmF0aW9uKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWdub3JlSW5saW5lU2VsZWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHNob3VsZElnbm9yZUlubGluZVN0eWxlKGVsZW1lbnQsIGlnbm9yZUlubGluZVNlbGVjdG9ycykpIHtcclxuICAgICAgICAgICAgICAgIHVuc2V0UHJvcHMuZm9yRWFjaCgoY3NzUHJvcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlcyQxW2Nzc1Byb3BdLmRhdGFBdHRyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzU1ZHRWxlbWVudCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGlzU1ZHRWxlbWVudFxyXG4gICAgICAgICAgICA/IChlbGVtZW50Lm93bmVyU1ZHRWxlbWVudCA/P1xyXG4gICAgICAgICAgICAgIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCA/IGVsZW1lbnQgOiBudWxsKSlcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGlmIChpc1NWR0VsZW1lbnQgJiYgdGhlbWUubW9kZSA9PT0gMSAmJiBzdmcpIHtcclxuICAgICAgICAgICAgaWYgKHN2Z0ludmVyc2lvbkNhY2hlLmhhcyhzdmcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZEFuYWx5emVTVkdBc0ltYWdlKHN2ZykpIHtcclxuICAgICAgICAgICAgICAgIHN2Z0ludmVyc2lvbkNhY2hlLmFkZChzdmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5hbHl6ZVNWR0FzSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN2Z1N0cmluZyA9IHN2Zy5vdXRlckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnU3RyaW5nID0gc3ZnU3RyaW5nLnJlcGxhY2VBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3R5bGUgY2xhc3M9XCJkYXJrcmVhZGVyIGRhcmtyZWFkZXItLXN5bmNcIiBtZWRpYT1cInNjcmVlblwiPjwvc3R5bGU+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVVSTCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7YnRvYShzdmdTdHJpbmcpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0SW1hZ2VEZXRhaWxzKGRhdGFVUkwpLnRoZW4oKGRldGFpbHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRldGFpbHMuaXNEYXJrICYmIGRldGFpbHMuaXNUcmFuc3BhcmVudCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZXRhaWxzLmlzTGFyZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzLmlzTGlnaHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZGV0YWlscy5pc1RyYW5zcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWludmVydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcucmVtb3ZlQXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1pbnZlcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGFuYWx5emVTVkdBc0ltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRE9NUmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZERPTVJlYWR5TGlzdGVuZXIoYW5hbHl6ZVNWR0FzSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImJnY29sb3JcIikpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJiZ2NvbG9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezN9JC9pKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXs2fSQvaSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGAjJHt2YWx1ZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmFja2dyb3VuZC1jb2xvclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJiYWNrZ3JvdW5kXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGdldEFic29sdXRlVVJMKFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYmFja2dyb3VuZFwiKSA/PyBcIlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYHVybChcIiR7dXJsfVwiKWA7XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImNvbG9yXCIpICYmIGVsZW1lbnQucmVsICE9PSBcIm1hc2staWNvblwiKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29sb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17M30kL2kpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezZ9JC9pKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gYCMke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImNvbG9yXCIsIFwiY29sb3JcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTVkdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImZpbGxcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNNQUxMX1NWR19MSU1JVCA9IDMyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImZpbGxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVTVkdFbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNCZyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPiBTTUFMTF9TVkdfTElNSVQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPiBTTUFMTF9TVkdfTElNSVQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmcgPyBcImJhY2tncm91bmQtY29sb3JcIiA6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVhZHlTdGF0ZUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNWR0VsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKGhhbmRsZVNWR0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImZpbGxcIiwgXCJjb2xvclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInN0b3AtY29sb3JcIikpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9wLWNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdG9wLWNvbG9yXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInN0cm9rZVwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3Ryb2tlXCIpO1xyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFxyXG4gICAgICAgICAgICAgICAgXCJzdHJva2VcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdMaW5lRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZSAmJlxyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKGVsZW1lbnQuc3R5bGUsIChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIgJiYgdmFsdWUuaW5jbHVkZXMoXCJ1cmxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AocHJvcGVydHksIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZXMkMS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAocHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpICYmICFub3JtYWxpemVkUHJvcExpc3RbcHJvcGVydHldKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChwcm9wZXJ0eSwgcHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoXCJ2YXIoXCIpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiYmFja2dyb3VuZFwiLCBcImJhY2tncm91bmRcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVycmlkZGVuUHJvcCA9IG5vcm1hbGl6ZWRQcm9wTGlzdFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZGVuUHJvcCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG92ZXJyaWRkZW5Qcm9wKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZWxlbWVudC5oYXNBdHRyaWJ1dGUob3ZlcnJpZGRlblByb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRkZW5Qcm9wID09PSBcImJhY2tncm91bmQtY29sb3JcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJiZ2NvbG9yXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCAmJlxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmZpbGxcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZmlsbFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKT8uaW5jbHVkZXMoXCItLVwiKSkge1xyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRJbmxpbmVTdHlsZUZvck1hdGNoaW5nKGVsZW1lbnQuc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JFYWNoKHVuc2V0UHJvcHMsIChjc3NQcm9wKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlcyQxW2Nzc1Byb3BdLmRhdGFBdHRyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbmxpbmVTdHlsZUNhY2hlLnNldChlbGVtZW50LCBnZXRJbmxpbmVTdHlsZUNhY2hlS2V5KGVsZW1lbnQsIHRoZW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWV0YVRoZW1lQ29sb3JOYW1lID0gXCJ0aGVtZS1jb2xvclwiO1xyXG4gICAgY29uc3QgbWV0YVRoZW1lQ29sb3JTZWxlY3RvciA9IGBtZXRhW25hbWU9XCIke21ldGFUaGVtZUNvbG9yTmFtZX1cIl1gO1xyXG4gICAgbGV0IHNyY01ldGFUaGVtZUNvbG9yID0gbnVsbDtcclxuICAgIGxldCBvYnNlcnZlciA9IG51bGw7XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZXRhVGhlbWVDb2xvcihtZXRhLCB0aGVtZSkge1xyXG4gICAgICAgIHNyY01ldGFUaGVtZUNvbG9yID0gc3JjTWV0YVRoZW1lQ29sb3IgfHwgbWV0YS5jb250ZW50O1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gcGFyc2VDb2xvcldpdGhDYWNoZShzcmNNZXRhVGhlbWVDb2xvcik7XHJcbiAgICAgICAgaWYgKCFjb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGEuY29udGVudCA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihjb2xvciwgdGhlbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTWV0YVRoZW1lQ29sb3JXaGVuQXZhaWxhYmxlKHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWV0YVRoZW1lQ29sb3JTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3IobWV0YSwgdGhlbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9vcDogZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7YWRkZWROb2Rlc30gPSBtdXRhdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBhZGRlZE5vZGVzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIGluc3RhbmNlb2YgSFRNTE1ldGFFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm5hbWUgPT09IG1ldGFUaGVtZUNvbG9yTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG5vZGUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGxvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHtjaGlsZExpc3Q6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXN0b3JlTWV0YVRoZW1lQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZXRhVGhlbWVDb2xvclNlbGVjdG9yKTtcclxuICAgICAgICBpZiAobWV0YSAmJiBzcmNNZXRhVGhlbWVDb2xvcikge1xyXG4gICAgICAgICAgICBtZXRhLmNvbnRlbnQgPSBzcmNNZXRhVGhlbWVDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3NzQ29tbWVudHNSZWdleCA9IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvL2c7XHJcbiAgICBmdW5jdGlvbiByZW1vdmVDU1NDb21tZW50cyhjc3NUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNzc1RleHQucmVwbGFjZShjc3NDb21tZW50c1JlZ2V4LCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aGVtZUNhY2hlS2V5cyA9IFtcclxuICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICBcImJyaWdodG5lc3NcIixcclxuICAgICAgICBcImNvbnRyYXN0XCIsXHJcbiAgICAgICAgXCJncmF5c2NhbGVcIixcclxuICAgICAgICBcInNlcGlhXCIsXHJcbiAgICAgICAgXCJkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJkYXJrU2NoZW1lVGV4dENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIFwibGlnaHRTY2hlbWVUZXh0Q29sb3JcIlxyXG4gICAgXTtcclxuICAgIGZ1bmN0aW9uIGdldFRoZW1lS2V5KHRoZW1lKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdEtleSA9IFwiXCI7XHJcbiAgICAgICAgdGhlbWVDYWNoZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdEtleSArPSBgJHtrZXl9OiR7dGhlbWVba2V5XX07YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0S2V5O1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXN5bmNRdWV1ZSA9IGNyZWF0ZUFzeW5jVGFza3NRdWV1ZSgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCkge1xyXG4gICAgICAgIGxldCByZW5kZXJJZCA9IDA7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3R5bGVSdWxlSGFzaChydWxlKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3NUZXh0ID0gcnVsZS5jc3NUZXh0O1xyXG4gICAgICAgICAgICBpZiAoaXNNZWRpYVJ1bGUocnVsZS5wYXJlbnRSdWxlKSkge1xyXG4gICAgICAgICAgICAgICAgY3NzVGV4dCA9IGAke3J1bGUucGFyZW50UnVsZS5tZWRpYS5tZWRpYVRleHR9IHsgJHtjc3NUZXh0fSB9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0SGFzaENvZGUoY3NzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJ1bGVzVGV4dENhY2hlID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGNvbnN0IHJ1bGVzTW9kQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uc3QgdmFyVHlwZUNoYW5nZUNsZWFuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCBwcmV2RmlsdGVyS2V5ID0gbnVsbDtcclxuICAgICAgICBsZXQgaGFzTm9uTG9hZGVkTGluayA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB3YXNSZWJ1aWx0ID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gc2hvdWxkUmVidWlsZFN0eWxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFzTm9uTG9hZGVkTGluayAmJiAhd2FzUmVidWlsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbW9kaWZ5U2hlZXQob3B0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IG9wdGlvbnMuc291cmNlQ1NTUnVsZXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgIGZvcmNlLFxyXG4gICAgICAgICAgICAgICAgcHJlcGFyZVNoZWV0LFxyXG4gICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZFxyXG4gICAgICAgICAgICB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgbGV0IHJ1bGVzQ2hhbmdlZCA9IHJ1bGVzTW9kQ2FjaGUuc2l6ZSA9PT0gMDtcclxuICAgICAgICAgICAgY29uc3Qgbm90Rm91bmRDYWNoZUtleXMgPSBuZXcgU2V0KHJ1bGVzTW9kQ2FjaGUua2V5cygpKTtcclxuICAgICAgICAgICAgY29uc3QgdGhlbWVLZXkgPSBnZXRUaGVtZUtleSh0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lQ2hhbmdlZCA9IHRoZW1lS2V5ICE9PSBwcmV2RmlsdGVyS2V5O1xyXG4gICAgICAgICAgICBpZiAoaGFzTm9uTG9hZGVkTGluaykge1xyXG4gICAgICAgICAgICAgICAgd2FzUmVidWlsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbW9kUnVsZXMgPSBbXTtcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKFxyXG4gICAgICAgICAgICAgICAgcnVsZXMsXHJcbiAgICAgICAgICAgICAgICAocnVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBnZXRTdHlsZVJ1bGVIYXNoKHJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0RGlmZmVyc0Zyb21QcmV2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRDYWNoZUtleXMuZGVsZXRlKGhhc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcnVsZXNUZXh0Q2FjaGUuaGFzKGhhc2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzVGV4dENhY2hlLmFkZChoYXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERpZmZlcnNGcm9tUHJldiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RGlmZmVyc0Zyb21QcmV2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUnVsZXMucHVzaChydWxlc01vZENhY2hlLmdldChoYXNoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUuc3R5bGUuYWxsID09PSBcInJldmVydFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kRGVjcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kID0gZ2V0TW9kaWZpYWJsZUNTU0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZERlY3MucHVzaChtb2QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kUnVsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZERlY3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRSdWxlID0gcnVsZS5wYXJlbnRSdWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RSdWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHJ1bGUuc2VsZWN0b3JUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBtb2REZWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UnVsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RSdWxlcy5wdXNoKG1vZFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydWxlc01vZENhY2hlLnNldChoYXNoLCBtb2RSdWxlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzTm9uTG9hZGVkTGluayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5vdEZvdW5kQ2FjaGVLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcnVsZXNUZXh0Q2FjaGUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBydWxlc01vZENhY2hlLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJldkZpbHRlcktleSA9IHRoZW1lS2V5O1xyXG4gICAgICAgICAgICBpZiAoIWZvcmNlICYmICFydWxlc0NoYW5nZWQgJiYgIXRoZW1lQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbmRlcklkKys7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3NlbGVjdG9yLCBkZWNsYXJhdGlvbnN9ID0gcnVsZTtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvclRleHQgPSBzZWxlY3RvcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5SXNXaGVyZVNlbGVjdG9yID1cclxuICAgICAgICAgICAgICAgICAgICBpc0Nocm9taXVtICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3Iuc3RhcnRzV2l0aChcIjppcyhcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0b3IuaW5jbHVkZXMoXCI6aXMoKVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvci5pbmNsdWRlcyhcIjp3aGVyZSgpXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3Rvci5pbmNsdWRlcyhcIjp3aGVyZShcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLmluY2x1ZGVzKFwiOi1tb3pcIikpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdUcmFuc2l0aW9uU2VsZWN0b3IgPVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLmluY2x1ZGVzKFwiOjp2aWV3LXRyYW5zaXRpb24tXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtcHR5SXNXaGVyZVNlbGVjdG9yIHx8IHZpZXdUcmFuc2l0aW9uU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBcIi5kYXJrcmVhZGVyLXVuc3VwcG9ydGVkLXNlbGVjdG9yXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcnVsZVRleHQgPSBgJHtzZWxlY3RvclRleHR9IHtgO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBkZWMgb2YgZGVjbGFyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge3Byb3BlcnR5LCB2YWx1ZSwgaW1wb3J0YW50fSA9IGRlYztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZVRleHQgKz0gYCAke3Byb3BlcnR5fTogJHt2YWx1ZX0ke2ltcG9ydGFudCA/IFwiICFpbXBvcnRhbnRcIiA6IFwiXCJ9O2A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVsZVRleHQgKz0gXCIgfVwiO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydFJ1bGUocnVsZVRleHQsIGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBhc3luY0RlY2xhcmF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgY29uc3QgdmFyRGVjbGFyYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICBsZXQgYXN5bmNEZWNsYXJhdGlvbkNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBsZXQgdmFyRGVjbGFyYXRpb25Db3VudGVyID0gMDtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdFJlYWR5R3JvdXAgPSB7cnVsZTogbnVsbCwgcnVsZXM6IFtdLCBpc0dyb3VwOiB0cnVlfTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBSZWZzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0R3JvdXAocnVsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290UmVhZHlHcm91cDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChncm91cFJlZnMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwUmVmcy5nZXQocnVsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IHtydWxlLCBydWxlczogW10sIGlzR3JvdXA6IHRydWV9O1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBSZWZzLnNldChydWxlLCBncm91cCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRHcm91cCA9IGdldEdyb3VwKHJ1bGUucGFyZW50UnVsZSk7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRHcm91cC5ydWxlcy5wdXNoKGdyb3VwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMuZm9yRWFjaCgoY2xlYXIpID0+IGNsZWFyKCkpO1xyXG4gICAgICAgICAgICB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgbW9kUnVsZXNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHIpID0+IHIpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoe3NlbGVjdG9yLCBkZWNsYXJhdGlvbnMsIHBhcmVudFJ1bGV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBnZXRHcm91cChwYXJlbnRSdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkeVN0eWxlUnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkeURlY2xhcmF0aW9ucyA9IHJlYWR5U3R5bGVSdWxlLmRlY2xhcmF0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICBncm91cC5ydWxlcy5wdXNoKHJlYWR5U3R5bGVSdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVBc3luY0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXN5bmNLZXkgPSArK2FzeW5jRGVjbGFyYXRpb25Db3VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc3luY0RlY2xhcmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaChhc3luY0RlY2xhcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlbmRlcklkID0gcmVuZGVySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLnRoZW4oKGFzeW5jVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYXN5bmNWYWx1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZW5kZXJJZCAhPT0gcmVuZGVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jRGVjbGFyYXRpb24udmFsdWUgPSBhc3luY1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNRdWV1ZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZCgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZW5kZXJJZCAhPT0gcmVuZGVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkQXN5bmNSdWxlKGFzeW5jS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlVmFyRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RlY2xhcmF0aW9uczogdmFyRGVjcywgb25UeXBlQ2hhbmdlfSA9IG1vZGlmaWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJLZXkgPSArK3ZhckRlY2xhcmF0aW9uQ291bnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJlbmRlcklkID0gcmVuZGVySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxJbmRleCA9IHJlYWR5RGVjbGFyYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZERlY3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhckRlY3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRGVjID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaCh0ZW1wRGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MgPSBbdGVtcERlY107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyRGVjcy5mb3JFYWNoKChtb2QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2QudmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXN5bmNEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2QudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkeURlYyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IG1vZC5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKHJlYWR5RGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzLnB1c2gocmVhZHlEZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlLmFkZExpc3RlbmVyKChuZXdEZWNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZCgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZHlWYXJEZWNzID0gbmV3RGVjcy5tYXAoKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtb2QucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2QudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmVhZHlEZWNsYXJhdGlvbnMuaW5kZXhPZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZWFkeVZhckRlY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzID0gcmVhZHlWYXJEZWNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZFZhclJ1bGUodmFyS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhclR5cGVDaGFuZ2VDbGVhbmVycy5hZGQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZS5yZW1vdmVMaXN0ZW5lcnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHtwcm9wZXJ0eSwgdmFsdWUsIGltcG9ydGFudCwgc291cmNlVmFsdWV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllZCA9IHZhbHVlKHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVWYXJEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gcHJlcGFyZVNoZWV0KCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJ1aWxkU3R5bGVTaGVldCgpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRhcmdldChncm91cCwgcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge3J1bGV9ID0gZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWVkaWFSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHttZWRpYX0gPSBydWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jc3NSdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRSdWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEBtZWRpYSAke21lZGlhLm1lZGlhVGV4dH0ge31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xheWVyUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7bmFtZX0gPSBydWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jc3NSdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRSdWxlKGBAbGF5ZXIgJHtuYW1lfSB7fWAsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpdGVyYXRlUmVhZHlSdWxlcyhncm91cCwgdGFyZ2V0LCBzdHlsZUl0ZXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAucnVsZXMuZm9yRWFjaCgocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gY3JlYXRlVGFyZ2V0KHIsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlUmVhZHlSdWxlcyhyLCB0LCBzdHlsZUl0ZXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlSXRlcmF0b3IociwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZVJlYWR5UnVsZXMocm9vdFJlYWR5R3JvdXAsIHNoZWV0LCAocnVsZSwgdGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLmZvckVhY2goKHthc3luY0tleSwgdmFyS2V5fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXN5bmNLZXkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNEZWNsYXJhdGlvbnMuc2V0KGFzeW5jS2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJLZXkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyRGVjbGFyYXRpb25zLnNldCh2YXJLZXksIHtydWxlLCB0YXJnZXQsIGluZGV4fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVidWlsZEFzeW5jUnVsZShrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtydWxlLCB0YXJnZXQsIGluZGV4fSA9IGFzeW5jRGVjbGFyYXRpb25zLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcclxuICAgICAgICAgICAgICAgIGFzeW5jRGVjbGFyYXRpb25zLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYnVpbGRWYXJSdWxlKGtleSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3J1bGUsIHRhcmdldCwgaW5kZXh9ID0gdmFyRGVjbGFyYXRpb25zLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWlsZFN0eWxlU2hlZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHttb2RpZnlTaGVldCwgc2hvdWxkUmVidWlsZFN0eWxlfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2FuVXNlU2hlZXRQcm94eSQxID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZFwiLFxyXG4gICAgICAgICgpID0+IChjYW5Vc2VTaGVldFByb3h5JDEgPSB0cnVlKSxcclxuICAgICAgICB7b25jZTogdHJ1ZX1cclxuICAgICk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTaGVldFdhdGNoZXIoXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBzYWZlR2V0U2hlZXRSdWxlcyxcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHJhZlNoZWV0V2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXMoKSB7XHJcbiAgICAgICAgICAgIHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpO1xyXG4gICAgICAgICAgICBpZiAoIShjYW5Vc2VTaGVldFByb3h5JDEgJiYgZWxlbWVudC5zaGVldCkpIHtcclxuICAgICAgICAgICAgICAgIHJhZlNoZWV0V2F0Y2hlciA9IGNyZWF0ZVJBRlNoZWV0V2F0Y2hlcihcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHNhZmVHZXRTaGVldFJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmFmU2hlZXRXYXRjaGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBvblNoZWV0Q2hhbmdlKCkge1xyXG4gICAgICAgICAgICBjYW5Vc2VTaGVldFByb3h5JDEgPSB0cnVlO1xyXG4gICAgICAgICAgICByYWZTaGVldFdhdGNoZXI/LnN0b3AoKTtcclxuICAgICAgICAgICAgaWYgKGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTaGVldENoYW5nZXMoKSB7XHJcbiAgICAgICAgICAgICAgICBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDYW5jZWxsZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJlU2hlZXRDaGFuZ2VzUGVuZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKGhhbmRsZVNoZWV0Q2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0XCIsXHJcbiAgICAgICAgICAgICAgICBvblNoZWV0Q2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX191cGRhdGVTaGVldFwiLFxyXG4gICAgICAgICAgICAgICAgb25TaGVldENoYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXMoKSB7XHJcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKTtcclxuICAgICAgICAgICAgcmFmU2hlZXRXYXRjaGVyPy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB3YXRjaEZvclNoZWV0Q2hhbmdlcyxcclxuICAgICAgICAgICAgc3RvcDogc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJBRlNoZWV0V2F0Y2hlcihcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIHNhZmVHZXRTaGVldFJ1bGVzLFxyXG4gICAgICAgIGNhbGxiYWNrLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgcnVsZXNDaGFuZ2VLZXkgPSBudWxsO1xyXG4gICAgICAgIGxldCBydWxlc0NoZWNrRnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNDaGFuZ2VLZXkoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gc2FmZUdldFNoZWV0UnVsZXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzID8gcnVsZXMubGVuZ3RoIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGlkUnVsZXNLZXlDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRSdWxlc0NoYW5nZUtleSgpICE9PSBydWxlc0NoYW5nZUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpIHtcclxuICAgICAgICAgICAgcnVsZXNDaGFuZ2VLZXkgPSBnZXRSdWxlc0NoYW5nZUtleSgpO1xyXG4gICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja0ZvclVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbGxlZCA9IGlzQ2FuY2VsbGVkKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCAmJiBkaWRSdWxlc0tleUNoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXNDaGFuZ2VLZXkgPSBnZXRSdWxlc0NoYW5nZUtleSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkIHx8IChjYW5Vc2VTaGVldFByb3h5JDEgJiYgZWxlbWVudC5zaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1bGVzQ2hlY2tGcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrRm9yVXBkYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2hlY2tGb3JVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKSB7XHJcbiAgICAgICAgICAgIHJ1bGVzQ2hlY2tGcmFtZUlkICYmIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJ1bGVzQ2hlY2tGcmFtZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnQ6IHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYsXHJcbiAgICAgICAgICAgIHN0b3A6IHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTVFlMRV9TRUxFQ1RPUiA9ICdzdHlsZSwgbGlua1tyZWwqPVwic3R5bGVzaGVldFwiIGldOm5vdChbZGlzYWJsZWRdKSc7XHJcbiAgICBmdW5jdGlvbiBpc0ZvbnRzR29vZ2xlQXBpU3R5bGUoZWxlbWVudCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudC5ocmVmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudFVSTCA9IG5ldyBVUkwoZWxlbWVudC5ocmVmKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRVUkwuaG9zdG5hbWUgPT09IFwiZm9udHMuZ29vZ2xlYXBpcy5jb21cIjtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbG9nSW5mbyhgQ291bGRuJ3QgY29uc3RydWN0ICR7ZWxlbWVudC5ocmVmfSBhcyBVUkxgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhvc3RzQnJlYWtpbmdPblNWR1N0eWxlT3ZlcnJpZGUgPSBbXCJ3d3cub25ldC5wbFwiXTtcclxuICAgIGZ1bmN0aW9uIHNob3VsZE1hbmFnZVN0eWxlKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgfHxcclxuICAgICAgICAgICAgICAgIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHU3R5bGVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWhvc3RzQnJlYWtpbmdPblNWR1N0eWxlT3ZlcnJpZGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKSkgfHxcclxuICAgICAgICAgICAgICAgIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihlbGVtZW50LnJlbCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic3R5bGVzaGVldFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oZWxlbWVudC5ocmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFlbGVtZW50LmRpc2FibGVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGlzRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICFlbGVtZW50LmhyZWYuc3RhcnRzV2l0aChcIm1vei1leHRlbnNpb246Ly9cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFpc0ZvbnRzR29vZ2xlQXBpU3R5bGUoZWxlbWVudCkpKSAmJlxyXG4gICAgICAgICAgICAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQubWVkaWEudG9Mb3dlckNhc2UoKSAhPT0gXCJwcmludFwiICYmXHJcbiAgICAgICAgICAgICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInN0eWx1c1wiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUsIHJlc3VsdHMgPSBbXSwgZGVlcCA9IHRydWUpIHtcclxuICAgICAgICBpZiAoc2hvdWxkTWFuYWdlU3R5bGUobm9kZSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50IHx8XHJcbiAgICAgICAgICAgIChpc1NoYWRvd0RvbVN1cHBvcnRlZCAmJiBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCkgfHxcclxuICAgICAgICAgICAgbm9kZSA9PT0gZG9jdW1lbnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZm9yRWFjaChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU1RZTEVfU0VMRUNUT1IpLCAoc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICBnZXRNYW5hZ2VhYmxlU3R5bGVzKHN0eWxlLCByZXN1bHRzLCBmYWxzZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGRlZXApIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhub2RlLCAoaG9zdCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBnZXRNYW5hZ2VhYmxlU3R5bGVzKGhvc3Quc2hhZG93Um9vdCwgcmVzdWx0cywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3luY1N0eWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IGNvcnNTdHlsZVNldCA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBsZXQgbG9hZGluZ0xpbmtDb3VudGVyID0gMDtcclxuICAgIGNvbnN0IHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGNsZWFuTG9hZGluZ0xpbmtzKCkge1xyXG4gICAgICAgIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWFuYWdlU3R5bGUoZWxlbWVudCwge3VwZGF0ZSwgbG9hZGluZ1N0YXJ0LCBsb2FkaW5nRW5kfSkge1xyXG4gICAgICAgIGNvbnN0IHByZXZTdHlsZXMgPSBbXTtcclxuICAgICAgICBsZXQgbmV4dCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAobmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nKSAmJlxyXG4gICAgICAgICAgICBuZXh0Lm1hdGNoZXMoXCIuZGFya3JlYWRlclwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVzLnB1c2gobmV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb3JzQ29weSA9XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChlbCkgPT4gZWwubWF0Y2hlcyhcIi5kYXJrcmVhZGVyLS1jb3JzXCIpICYmICFjb3JzU3R5bGVTZXQuaGFzKGVsKVxyXG4gICAgICAgICAgICApIHx8IG51bGw7XHJcbiAgICAgICAgbGV0IHN5bmNTdHlsZSA9XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMuZmluZChcclxuICAgICAgICAgICAgICAgIChlbCkgPT4gZWwubWF0Y2hlcyhcIi5kYXJrcmVhZGVyLS1zeW5jXCIpICYmICFzeW5jU3R5bGVTZXQuaGFzKGVsKVxyXG4gICAgICAgICAgICApIHx8IG51bGw7XHJcbiAgICAgICAgbGV0IGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyID0gbnVsbDtcclxuICAgICAgICBsZXQgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyID0gbnVsbDtcclxuICAgICAgICBsZXQgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzT3ZlcnJpZGVFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaXNBc3luY0NhbmNlbGxlZCA9ICgpID0+IGNhbmNlbEFzeW5jT3BlcmF0aW9ucztcclxuICAgICAgICBjb25zdCBzaGVldE1vZGlmaWVyID0gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCk7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG11dGF0aW9ucy5zb21lKChtKSA9PiBtLnR5cGUgPT09IFwiY2hhcmFjdGVyRGF0YVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgY29udGFpbnNDU1NJbXBvcnQoKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNzc1RleHQgPSAoZWxlbWVudC50ZXh0Q29udGVudCA/PyBcIlwiKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVPclVwZGF0ZUNPUlNDb3B5KGNzc1RleHQsIGxvY2F0aW9uLmhyZWYpLnRoZW4odXBkYXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbnRhaW5zQ1NTSW1wb3J0KCkge1xyXG4gICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjc3NUZXh0ID0gcmVtb3ZlQ1NTQ29tbWVudHMoZWxlbWVudC50ZXh0Q29udGVudCA/PyBcIlwiKS50cmltKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NUZXh0Lm1hdGNoKGNzc0ltcG9ydFJlZ2V4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFzSW1wb3J0cyhjc3NSdWxlcywgY2hlY2tDcm9zc09yaWdpbikge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJ1bGU7XHJcbiAgICAgICAgICAgICAgICBjc3NSdWxlc0xvb3A6IGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwLCBsZW4gPSBjc3NSdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA8IGxlbjtcclxuICAgICAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUgPSBjc3NSdWxlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5ocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0Nyb3NzT3JpZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJ1bGUuaHJlZi5zdGFydHNXaXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJ1bGUuaHJlZi5zdGFydHNXaXRoKGxvY2F0aW9uLm9yaWdpbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgY3NzUnVsZXNMb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGNzc1J1bGVzTG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc1N5bmMoKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcnNDb3B5LnNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb250YWluc0NTU0ltcG9ydCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjc3NSdWxlcyA9IHNhZmVHZXRTaGVldFJ1bGVzKCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICFpc1JlbGF0aXZlSHJlZk9uQWJzb2x1dGVQYXRoKGVsZW1lbnQuaHJlZikgJiZcclxuICAgICAgICAgICAgICAgIGhhc0ltcG9ydHMoY3NzUnVsZXMsIGZhbHNlKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoYXNJbXBvcnRzKGNzc1J1bGVzLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpbnNlcnRTdHlsZSgpIHtcclxuICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZyAhPT0gY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5uZXh0U2libGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29yc0NvcHkubmV4dFNpYmxpbmcgIT09IHN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHkubmV4dFNpYmxpbmdcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcgIT09IHN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzeW5jU3R5bGUsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVN5bmNTdHlsZSgpIHtcclxuICAgICAgICAgICAgc3luY1N0eWxlID1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdTdHlsZUVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZS5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyLS1zeW5jXCIpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUubWVkaWEgPSBcInNjcmVlblwiO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgc3luY1N0eWxlLnRpdGxlID0gZWxlbWVudC50aXRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzeW5jU3R5bGVTZXQuYWRkKHN5bmNTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpc0xvYWRpbmdSdWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB3YXNMb2FkaW5nRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBsb2FkaW5nTGlua0lkID0gKytsb2FkaW5nTGlua0NvdW50ZXI7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0UnVsZXNBc3luYygpIHtcclxuICAgICAgICAgICAgbGV0IGNzc1RleHQ7XHJcbiAgICAgICAgICAgIGxldCBjc3NCYXNlUGF0aDtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBbY3NzUnVsZXMsIGFjY2Vzc0Vycm9yXSA9IGdldFJ1bGVzT3JFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIChpc1NhZmFyaSAmJiAhZWxlbWVudC5zaGVldCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoIWlzU2FmYXJpICYmICFjc3NSdWxlcyAmJiAhYWNjZXNzRXJyb3IpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdGlsbExvYWRpbmdFcnJvcihhY2Nlc3NFcnJvcilcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGlua2VsZW1lbnQgJHtsb2FkaW5nTGlua0lkfSBpcyBub3QgbG9hZGVkIHlldCBhbmQgdGh1cyB3aWxsIGJlIGF3YWl0IGZvcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGxpbmtMb2FkaW5nKGVsZW1lbnQsIGxvYWRpbmdMaW5rSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXNMb2FkaW5nRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBbY3NzUnVsZXMsIGFjY2Vzc0Vycm9yXSA9IGdldFJ1bGVzT3JFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNJbXBvcnRzKGNzc1J1bGVzLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNzc1RleHQgPSBhd2FpdCBsb2FkVGV4dChlbGVtZW50LmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgY3NzQmFzZVBhdGggPSBnZXRDU1NCYXNlQmF0aChlbGVtZW50LmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbEFzeW5jT3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5zQ1NTSW1wb3J0KCkpIHtcclxuICAgICAgICAgICAgICAgIGNzc1RleHQgPSBlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGNzc0Jhc2VQYXRoID0gZ2V0Q1NTQmFzZUJhdGgobG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVPclVwZGF0ZUNPUlNDb3B5KGNzc1RleHQsIGNzc0Jhc2VQYXRoKTtcclxuICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yc0NvcHkuc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlQ09SU0NvcHkoY3NzVGV4dCwgY3NzQmFzZVBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnVsbENTU1RleHQgPSBhd2FpdCByZXBsYWNlQ1NTSW1wb3J0cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQmFzZVBhdGhcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29yc0NvcHkudGV4dENvbnRlbnQ/Lmxlbmd0aCA/PyAwKSA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsQ1NTVGV4dC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weS50ZXh0Q29udGVudCA9IGZ1bGxDU1NUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHkgPSBjcmVhdGVDT1JTQ29weShlbGVtZW50LCBmdWxsQ1NTVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgPSB3YXRjaEZvck5vZGVQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldi1zaWJsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRldGFpbHMob3B0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IGdldFJ1bGVzU3luYygpO1xyXG4gICAgICAgICAgICBpZiAoIXJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zZWNvbmRSb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZ1J1bGVzIHx8IHdhc0xvYWRpbmdFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nUnVsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1N0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBnZXRSdWxlc0FzeW5jKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdSdWxlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nUnVsZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtydWxlc307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmb3JjZVJlbmRlclN0eWxlID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHRoZW1lLCBpZ25vcmVJbWFnZUFuYWx5c2lzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gZ2V0UnVsZXNTeW5jKCk7XHJcbiAgICAgICAgICAgIGlmICghcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQ1NTUnVsZXNGcm9tU2hlZXQoc2hlZXQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2hlZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVldC5kZWxldGVSdWxlKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXBhcmVPdmVycmlkZXNTaGVldCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU3luY1N0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgJiYgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGluc2VydFN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3luY1N0eWxlLnNoZWV0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBzeW5jU3R5bGUuc2hlZXQ7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDU1NSdWxlc0Zyb21TaGVldChzaGVldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyLnJ1bigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgPSB3YXRjaEZvck5vZGVQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXYtc2libGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bmNTdHlsZS5zaGVldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBidWlsZE92ZXJyaWRlcygpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmNlID0gZm9yY2VSZW5kZXJTdHlsZTtcclxuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyU3R5bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNoZWV0TW9kaWZpZXIubW9kaWZ5U2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldDogcHJlcGFyZU92ZXJyaWRlc1NoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUNTU1J1bGVzOiBydWxlcyxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaXNPdmVycmlkZUVtcHR5ID0gc3luY1N0eWxlLnNoZWV0LmNzc1J1bGVzLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChzaGVldE1vZGlmaWVyLnNob3VsZFJlYnVpbGRTdHlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXIoKCkgPT4gdXBkYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1aWxkT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzT3JFcnJvcigpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnNoZWV0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW251bGwsIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtlbGVtZW50LnNoZWV0LmNzc1J1bGVzLCBudWxsXTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW251bGwsIGVycl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaXNTdGlsbExvYWRpbmdFcnJvcihlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IgJiYgZXJyb3IubWVzc2FnZSAmJiBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKFwibG9hZGluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2FmZUdldFNoZWV0UnVsZXMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtjc3NSdWxlcywgZXJyXSA9IGdldFJ1bGVzT3JFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNoZWV0Q2hhbmdlV2F0Y2hlciA9IGNyZWF0ZVNoZWV0V2F0Y2hlcihcclxuICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgc2FmZUdldFNoZWV0UnVsZXMsXHJcbiAgICAgICAgICAgIHVwZGF0ZSxcclxuICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZnVuY3Rpb24gcGF1c2UoKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgJiYgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgJiYgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgc2hlZXRDaGFuZ2VXYXRjaGVyLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgcGF1c2UoKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShjb3JzQ29weSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoc3luY1N0eWxlKTtcclxuICAgICAgICAgICAgbG9hZGluZ0VuZCgpO1xyXG4gICAgICAgICAgICBpZiAocmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmhhcyhsb2FkaW5nTGlua0lkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVqZWN0ID0gcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmdldChsb2FkaW5nTGlua0lkKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5kZWxldGUobG9hZGluZ0xpbmtJZCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2goKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzaGVldENoYW5nZVdhdGNoZXIuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXhNb3ZlQ291bnQgPSAxMDtcclxuICAgICAgICBsZXQgbW92ZUNvdW50ID0gMDtcclxuICAgICAgICBmdW5jdGlvbiByZXN0b3JlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vdmVDb3VudCsrO1xyXG4gICAgICAgICAgICBpZiAobW92ZUNvdW50ID4gbWF4TW92ZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5zZXJ0U3R5bGUoKTtcclxuICAgICAgICAgICAgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgJiYgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIuc2tpcCgpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgJiYgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyLnNraXAoKTtcclxuICAgICAgICAgICAgaWYgKCFpc092ZXJyaWRlRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyU3R5bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGV0YWlscyxcclxuICAgICAgICAgICAgcmVuZGVyLFxyXG4gICAgICAgICAgICBwYXVzZSxcclxuICAgICAgICAgICAgZGVzdHJveSxcclxuICAgICAgICAgICAgd2F0Y2gsXHJcbiAgICAgICAgICAgIHJlc3RvcmVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlua0xvYWRpbmcobGluaywgbG9hZGluZ0lkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xlYW5VcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbmsucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25Mb2FkKTtcclxuICAgICAgICAgICAgICAgIGxpbmsucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmRlbGV0ZShsb2FkaW5nSWQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBvbkxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhblVwKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhblVwKCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgYExpbmtlbGVtZW50ICR7bG9hZGluZ0lkfSBjb3VsZG4ndCBiZSBsb2FkZWQuICR7bGluay5ocmVmfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5zZXQobG9hZGluZ0lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhblVwKCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgb25Mb2FkLCB7cGFzc2l2ZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yLCB7cGFzc2l2ZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBpZiAoIWxpbmsuaHJlZikge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NJbXBvcnRVUkwoaW1wb3J0RGVjbGFyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q1NTVVJMVmFsdWUoXHJcbiAgICAgICAgICAgIGltcG9ydERlY2xhcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDcpXHJcbiAgICAgICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvOyQvLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL3NjcmVlbiQvLCBcIlwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVGV4dCh1cmwpIHtcclxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyc2VkVVJMID0gbmV3IFVSTCh1cmwpO1xyXG4gICAgICAgIGlmIChwYXJzZWRVUkwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGxvYWRBc1RleHQodXJsLCBcInRleHQvY3NzXCIsIGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBiZ0ZldGNoKHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBtaW1lVHlwZTogXCJ0ZXh0L2Nzc1wiLFxyXG4gICAgICAgICAgICBvcmlnaW46IGxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVwbGFjZUNTU0ltcG9ydHMoY3NzVGV4dCwgYmFzZVBhdGgsIGNhY2hlID0gbmV3IE1hcCgpKSB7XHJcbiAgICAgICAgY3NzVGV4dCA9IHJlbW92ZUNTU0NvbW1lbnRzKGNzc1RleHQpO1xyXG4gICAgICAgIGNzc1RleHQgPSByZXBsYWNlQ1NTRm9udEZhY2UoY3NzVGV4dCk7XHJcbiAgICAgICAgY3NzVGV4dCA9IHJlcGxhY2VDU1NSZWxhdGl2ZVVSTHNXaXRoQWJzb2x1dGUoY3NzVGV4dCwgYmFzZVBhdGgpO1xyXG4gICAgICAgIGNvbnN0IGltcG9ydE1hdGNoZXMgPSBnZXRNYXRjaGVzKGNzc0ltcG9ydFJlZ2V4LCBjc3NUZXh0KTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIGltcG9ydE1hdGNoZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1wb3J0VVJMID0gZ2V0Q1NTSW1wb3J0VVJMKG1hdGNoKTtcclxuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVVUkwgPSBnZXRBYnNvbHV0ZVVSTChiYXNlUGF0aCwgaW1wb3J0VVJMKTtcclxuICAgICAgICAgICAgbGV0IGltcG9ydGVkQ1NTO1xyXG4gICAgICAgICAgICBpZiAoY2FjaGUuaGFzKGFic29sdXRlVVJMKSkge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBjYWNoZS5nZXQoYWJzb2x1dGVVUkwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IGF3YWl0IGxvYWRUZXh0KGFic29sdXRlVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoYWJzb2x1dGVVUkwsIGltcG9ydGVkQ1NTKTtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IGF3YWl0IHJlcGxhY2VDU1NJbXBvcnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q1NTQmFzZUJhdGgoYWJzb2x1dGVVUkwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQuc3BsaXQobWF0Y2gpLmpvaW4oaW1wb3J0ZWRDU1MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuIGNzc1RleHQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDT1JTQ29weShzcmNFbGVtZW50LCBjc3NUZXh0KSB7XHJcbiAgICAgICAgaWYgKCFjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgIGNvcnMuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgY29ycy5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlci0tY29yc1wiKTtcclxuICAgICAgICBjb3JzLm1lZGlhID0gXCJzY3JlZW5cIjtcclxuICAgICAgICBjb3JzLnRleHRDb250ZW50ID0gY3NzVGV4dDtcclxuICAgICAgICBzcmNFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvcnMsIHNyY0VsZW1lbnQubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIGNvcnMuc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvcnNTdHlsZVNldC5hZGQoY29ycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVmaW5lZEN1c3RvbUVsZW1lbnRzID0gbmV3IFNldCgpO1xyXG4gICAgY29uc3QgdW5kZWZpbmVkR3JvdXBzID0gbmV3IE1hcCgpO1xyXG4gICAgbGV0IGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrO1xyXG4gICAgZnVuY3Rpb24gaXNDdXN0b21FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lLmluY2x1ZGVzKFwiLVwiKSB8fCBlbGVtZW50LmdldEF0dHJpYnV0ZShcImlzXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWNvcmRVbmRlZmluZWRFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgdGFnID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCF0YWcuaW5jbHVkZXMoXCItXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuZGVkVGFnID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpc1wiKTtcclxuICAgICAgICAgICAgaWYgKGV4dGVuZGVkVGFnKSB7XHJcbiAgICAgICAgICAgICAgICB0YWcgPSBleHRlbmRlZFRhZztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXVuZGVmaW5lZEdyb3Vwcy5oYXModGFnKSkge1xyXG4gICAgICAgICAgICB1bmRlZmluZWRHcm91cHMuc2V0KHRhZywgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHNXaGVuRGVmaW5lZCh0YWcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSB1bmRlZmluZWRHcm91cHMuZ2V0KHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkR3JvdXBzLmRlbGV0ZSh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrKEFycmF5LmZyb20oZWxlbWVudHMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5nZXQodGFnKS5hZGQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMocm9vdCkge1xyXG4gICAgICAgIGlmICghaXNEZWZpbmVkU2VsZWN0b3JTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JFYWNoKFxyXG4gICAgICAgICAgICByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6bm90KDpkZWZpbmVkKVwiKSxcclxuICAgICAgICAgICAgcmVjb3JkVW5kZWZpbmVkRWxlbWVudFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBsZXQgY2FuT3B0aW1pemVVc2luZ1Byb3h5ID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZFwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5ID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtvbmNlOiB0cnVlLCBwYXNzaXZlOiB0cnVlfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlc29sdmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUlzRGVmaW5lZChlKSB7XHJcbiAgICAgICAgY2FuT3B0aW1pemVVc2luZ1Byb3h5ID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0YWcgPSBlLmRldGFpbC50YWc7XHJcbiAgICAgICAgZGVmaW5lZEN1c3RvbUVsZW1lbnRzLmFkZCh0YWcpO1xyXG4gICAgICAgIGlmIChyZXNvbHZlcnMuaGFzKHRhZykpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHJlc29sdmVycy5nZXQodGFnKTtcclxuICAgICAgICAgICAgcmVzb2x2ZXJzLmRlbGV0ZSh0YWcpO1xyXG4gICAgICAgICAgICByLmZvckVhY2goKHIpID0+IHIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3VzdG9tRWxlbWVudHNXaGVuRGVmaW5lZCh0YWcpIHtcclxuICAgICAgICBpZiAoZGVmaW5lZEN1c3RvbUVsZW1lbnRzLmhhcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWcpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjYW5PcHRpbWl6ZVVzaW5nUHJveHkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlcnMuaGFzKHRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlcnMuZ2V0KHRhZykucHVzaChyZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJzLnNldCh0YWcsIFtyZXNvbHZlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fYWRkVW5kZWZpbmVkUmVzb2x2ZXJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0lmRGVmaW5lZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHVuZGVmaW5lZEdyb3Vwcy5nZXQodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMgJiYgZWxlbWVudHMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMudmFsdWVzKCkubmV4dCgpLnZhbHVlLm1hdGNoZXMoXCI6ZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0lmRGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrSWZEZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hXaGVuQ3VzdG9tRWxlbWVudHNEZWZpbmVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlRnJvbURlZmluZUN1c3RvbUVsZW1lbnRzKCkge1xyXG4gICAgICAgIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB1bmRlZmluZWRHcm91cHMuY2xlYXIoKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9faXNEZWZpbmVkXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZUlzRGVmaW5lZFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXJzID0gW107XHJcbiAgICBsZXQgb2JzZXJ2ZWRSb290cztcclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yU3R5bGVQb3NpdGlvbnMoXHJcbiAgICAgICAgY3VycmVudFN0eWxlcyxcclxuICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICkge1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclN0eWxlUG9zaXRpb25zKCk7XHJcbiAgICAgICAgY29uc3QgcHJldlN0eWxlc0J5Um9vdCA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgY29uc3QgZ2V0UHJldlN0eWxlcyA9IChyb290KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJldlN0eWxlc0J5Um9vdC5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgICAgIHByZXZTdHlsZXNCeVJvb3Quc2V0KHJvb3QsIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZTdHlsZXNCeVJvb3QuZ2V0KHJvb3QpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY3VycmVudFN0eWxlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb290ID0gbm9kZTtcclxuICAgICAgICAgICAgd2hpbGUgKChyb290ID0gcm9vdC5wYXJlbnROb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3QgPT09IGRvY3VtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2U3R5bGVzID0gZ2V0UHJldlN0eWxlcyhyb290KTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2U3R5bGVzLmFkZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHByZXZTdHlsZVNpYmxpbmdzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICBjb25zdCBuZXh0U3R5bGVTaWJsaW5ncyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gc2F2ZVN0eWxlUG9zaXRpb24oc3R5bGUpIHtcclxuICAgICAgICAgICAgcHJldlN0eWxlU2libGluZ3Muc2V0KHN0eWxlLCBzdHlsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICAgICAgbmV4dFN0eWxlU2libGluZ3Muc2V0KHN0eWxlLCBzdHlsZS5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBmb3JnZXRTdHlsZVBvc2l0aW9uKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZVNpYmxpbmdzLmRlbGV0ZShzdHlsZSk7XHJcbiAgICAgICAgICAgIG5leHRTdHlsZVNpYmxpbmdzLmRlbGV0ZShzdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRpZFN0eWxlUG9zaXRpb25DaGFuZ2Uoc3R5bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHN0eWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IHByZXZTdHlsZVNpYmxpbmdzLmdldChzdHlsZSkgfHxcclxuICAgICAgICAgICAgICAgIHN0eWxlLm5leHRFbGVtZW50U2libGluZyAhPT0gbmV4dFN0eWxlU2libGluZ3MuZ2V0KHN0eWxlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50U3R5bGVzLmZvckVhY2goc2F2ZVN0eWxlUG9zaXRpb24pO1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN0eWxlT3BlcmF0aW9ucyhyb290LCBvcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtjcmVhdGVkU3R5bGVzLCByZW1vdmVkU3R5bGVzLCBtb3ZlZFN0eWxlc30gPSBvcGVyYXRpb25zO1xyXG4gICAgICAgICAgICBjcmVhdGVkU3R5bGVzLmZvckVhY2goKHMpID0+IHNhdmVTdHlsZVBvc2l0aW9uKHMpKTtcclxuICAgICAgICAgICAgbW92ZWRTdHlsZXMuZm9yRWFjaCgocykgPT4gc2F2ZVN0eWxlUG9zaXRpb24ocykpO1xyXG4gICAgICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goKHMpID0+IGZvcmdldFN0eWxlUG9zaXRpb24ocykpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2U3R5bGVzID0gZ2V0UHJldlN0eWxlcyhyb290KTtcclxuICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5mb3JFYWNoKChzKSA9PiBwcmV2U3R5bGVzLmFkZChzKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuZm9yRWFjaCgocykgPT4gcHJldlN0eWxlcy5kZWxldGUocykpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLnNpemUgKyByZW1vdmVkU3R5bGVzLnNpemUgKyBtb3ZlZFN0eWxlcy5zaXplID5cclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IEFycmF5LmZyb20oY3JlYXRlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZDogQXJyYXkuZnJvbShyZW1vdmVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZDogQXJyYXkuZnJvbShtb3ZlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZDogW11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1pbm9yVHJlZU11dGF0aW9ucyhyb290LCB7YWRkaXRpb25zLCBtb3ZlcywgZGVsZXRpb25zfSkge1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgYWRkaXRpb25zLmZvckVhY2goKG5vZGUpID0+XHJcbiAgICAgICAgICAgICAgICBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goKHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuYWRkKHN0eWxlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkZWxldGlvbnMuZm9yRWFjaCgobm9kZSkgPT5cclxuICAgICAgICAgICAgICAgIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSkuZm9yRWFjaCgoc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5hZGQoc3R5bGUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1vdmVzLmZvckVhY2goKG5vZGUpID0+XHJcbiAgICAgICAgICAgICAgICBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goKHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzLmFkZChzdHlsZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaGFuZGxlU3R5bGVPcGVyYXRpb25zKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgbW92ZWRTdHlsZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWVwT2JzZXJ2ZShuKTtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhuKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKG5vZGUpID0+IGlzQ3VzdG9tRWxlbWVudChub2RlKSAmJiByZWNvcmRVbmRlZmluZWRFbGVtZW50KG5vZGUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUh1Z2VUcmVlTXV0YXRpb25zKHJvb3QpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gbmV3IFNldChnZXRNYW5hZ2VhYmxlU3R5bGVzKHJvb3QpKTtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZTdHlsZXMgPSBnZXRQcmV2U3R5bGVzKHJvb3QpO1xyXG4gICAgICAgICAgICBzdHlsZXMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2U3R5bGVzLmhhcyhzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJldlN0eWxlcy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMocykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLmFkZChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0eWxlcy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIWNyZWF0ZWRTdHlsZXMuaGFzKHMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXJlbW92ZWRTdHlsZXMuaGFzKHMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZGlkU3R5bGVQb3NpdGlvbkNoYW5nZShzKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGFuZGxlU3R5bGVPcGVyYXRpb25zKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgbW92ZWRTdHlsZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRlZXBPYnNlcnZlKHJvb3QpO1xyXG4gICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyhtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt0YXJnZXR9ID0gbTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTWFuYWdlU3R5bGUodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkU3R5bGVzLmFkZCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5hZGQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlZFN0eWxlcy5zaXplICsgcmVtb3ZlZFN0eWxlcy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiBBcnJheS5mcm9tKHVwZGF0ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IEFycmF5LmZyb20ocmVtb3ZlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWQ6IFtdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlKHJvb3QpIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVkUm9vdHMuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdHJlZU9ic2VydmVyID0gY3JlYXRlT3B0aW1pemVkVHJlZU9ic2VydmVyKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnM6IGhhbmRsZU1pbm9yVHJlZU11dGF0aW9ucyxcclxuICAgICAgICAgICAgICAgIG9uSHVnZU11dGF0aW9uczogaGFuZGxlSHVnZVRyZWVNdXRhdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgIGF0dHJPYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wicmVsXCIsIFwiZGlzYWJsZWRcIiwgXCJtZWRpYVwiLCBcImhyZWZcIl0sXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMucHVzaCh0cmVlT2JzZXJ2ZXIsIGF0dHJPYnNlcnZlcik7XHJcbiAgICAgICAgICAgIG9ic2VydmVkUm9vdHMuYWRkKHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyhub2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtzaGFkb3dSb290fSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGlmIChzaGFkb3dSb290ID09IG51bGwgfHwgb2JzZXJ2ZWRSb290cy5oYXMoc2hhZG93Um9vdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZlKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZChzaGFkb3dSb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGVlcE9ic2VydmUobm9kZSkge1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZSwgc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlKGRvY3VtZW50KTtcclxuICAgICAgICBkZWVwT2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG4gICAgICAgIHdhdGNoV2hlbkN1c3RvbUVsZW1lbnRzRGVmaW5lZCgoaG9zdHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U3R5bGVzID0gW107XHJcbiAgICAgICAgICAgIGhvc3RzLmZvckVhY2goKGhvc3QpID0+XHJcbiAgICAgICAgICAgICAgICBwdXNoKG5ld1N0eWxlcywgZ2V0TWFuYWdlYWJsZVN0eWxlcyhob3N0LnNoYWRvd1Jvb3QpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB1cGRhdGUoe2NyZWF0ZWQ6IG5ld1N0eWxlcywgdXBkYXRlZDogW10sIHJlbW92ZWQ6IFtdLCBtb3ZlZDogW119KTtcclxuICAgICAgICAgICAgaG9zdHMuZm9yRWFjaCgoaG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3NoYWRvd1Jvb3R9ID0gaG9zdDtcclxuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyhob3N0KTtcclxuICAgICAgICAgICAgICAgIGRlZXBPYnNlcnZlKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiX19kYXJrcmVhZGVyX19pc0RlZmluZWRcIiwgaGFuZGxlSXNEZWZpbmVkKTtcclxuICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMoZG9jdW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzZXRPYnNlcnZlcnMoKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2goKG8pID0+IG8uZGlzY29ubmVjdCgpKTtcclxuICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKDAsIG9ic2VydmVycy5sZW5ndGgpO1xyXG4gICAgICAgIG9ic2VydmVkUm9vdHMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU3R5bGVQb3NpdGlvbnMoKSB7XHJcbiAgICAgICAgcmVzZXRPYnNlcnZlcnMoKTtcclxuICAgICAgICB1bnN1YnNjcmliZUZyb21EZWZpbmVDdXN0b21FbGVtZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yU3R5bGVDaGFuZ2VzKGN1cnJlbnRTdHlsZXMsIHVwZGF0ZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcclxuICAgICAgICB3YXRjaEZvclN0eWxlUG9zaXRpb25zKGN1cnJlbnRTdHlsZXMsIHVwZGF0ZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU3R5bGVDaGFuZ2VzKCkge1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclN0eWxlUG9zaXRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNhblVzZVNoZWV0UHJveHkgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIsXHJcbiAgICAgICAgKCkgPT4gKGNhblVzZVNoZWV0UHJveHkgPSB0cnVlKSxcclxuICAgICAgICB7b25jZTogdHJ1ZX1cclxuICAgICk7XHJcbiAgICBjb25zdCBvdmVycmlkZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3Qgb3ZlcnJpZGVzQnlTb3VyY2UgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2FuSGF2ZUFkb3B0ZWRTdHlsZVNoZWV0cyhub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRvcHRlZFN0eWxlU2hlZXRPdmVycmlkZShub2RlKSB7XHJcbiAgICAgICAgbGV0IGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGl0ZXJhdGVTb3VyY2VTaGVldHMoaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuZm9yRWFjaCgoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghb3ZlcnJpZGVzLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcihzaGVldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpbmplY3RTaGVldChzaGVldCwgb3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2hlZXRzID0gWy4uLm5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzXTtcclxuICAgICAgICAgICAgY29uc3Qgc2hlZXRJbmRleCA9IG5ld1NoZWV0cy5pbmRleE9mKHNoZWV0KTtcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGVJbmRleCA9IG5ld1NoZWV0cy5pbmRleE9mKG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgaWYgKG92ZXJyaWRlSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U2hlZXRzLnNwbGljZShvdmVycmlkZUluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdTaGVldHMuc3BsaWNlKHNoZWV0SW5kZXggKyAxLCAwLCBvdmVycmlkZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gbmV3U2hlZXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjbGVhcigpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2hlZXRzID0gWy4uLm5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5ld1NoZWV0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXdTaGVldHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTaGVldHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5sZW5ndGggIT09IG5ld1NoZWV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gbmV3U2hlZXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvdXJjZVNoZWV0cyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgICAgIHNvdXJjZURlY2xhcmF0aW9ucyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsZWFuZXJzID0gW107XHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgY2xlYW5lcnMuZm9yRWFjaCgoYykgPT4gYygpKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICBjbGVhcigpO1xyXG4gICAgICAgICAgICBpZiAoZnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcnVsZXNDaGFuZ2VLZXkgPSAwO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzQ2hhbmdlS2V5KCkge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBpdGVyYXRlU291cmNlU2hlZXRzKChzaGVldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnQgKz0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlID0gbm9kZS5hZG9wdGVkU3R5bGVTaGVldHNbMF0uY3NzUnVsZXNbMF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSA/IHJ1bGUuc3R5bGUubGVuZ3RoIDogY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc291cmNlU2hlZXRzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICBsZXQgc291cmNlRGVjbGFyYXRpb25zID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICBmdW5jdGlvbiByZW5kZXIodGhlbWUsIGlnbm9yZUltYWdlQW5hbHlzaXMpIHtcclxuICAgICAgICAgICAgY2xlYXIoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VTaGVldHMuYWRkKHNoZWV0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5T3ZlcnJpZGUgPSBvdmVycmlkZXNCeVNvdXJjZS5nZXQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5T3ZlcnJpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlc0NoYW5nZUtleSA9IGdldFJ1bGVzQ2hhbmdlS2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5qZWN0U2hlZXQoc2hlZXQsIHJlYWR5T3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBzaGVldC5jc3NSdWxlcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJyaWRlID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcclxuICAgICAgICAgICAgICAgIG92ZXJyaWRlc0J5U291cmNlLnNldChzaGVldCwgb3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGVzLCAocnVsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VEZWNsYXJhdGlvbnMuYWRkKHJ1bGUuc3R5bGUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlcGFyZVNoZWV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBvdmVycmlkZS5jc3NSdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZS5kZWxldGVSdWxlKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZS5pbnNlcnRSdWxlKFwiI19fZGFya3JlYWRlcl9fYWRvcHRlZE92ZXJyaWRlIHt9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluamVjdFNoZWV0KHNoZWV0LCBvdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVzLmFkZChvdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0TW9kaWZpZXIgPSBjcmVhdGVTdHlsZVNoZWV0TW9kaWZpZXIoKTtcclxuICAgICAgICAgICAgICAgIHNoZWV0TW9kaWZpZXIubW9kaWZ5U2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VDU1NSdWxlczogcnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZDogKCkgPT4gY2FuY2VsQXN5bmNPcGVyYXRpb25zXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBydWxlc0NoYW5nZUtleSA9IGdldFJ1bGVzQ2hhbmdlS2V5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjYWxsYmFja1JlcXVlc3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUFycmF5Q2hhbmdlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja1JlcXVlc3RlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrUmVxdWVzdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0cyA9IG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAocykgPT4gIW92ZXJyaWRlcy5oYXMocylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzaGVldHMuZm9yRWFjaCgoc2hlZXQpID0+IG92ZXJyaWRlc0J5U291cmNlLmRlbGV0ZShzaGVldCkpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc2hlZXRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJ1bGVzQ2hhbmdlS2V5KCkgIT09IHJ1bGVzQ2hhbmdlS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hVc2luZ1JBRihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYW5Vc2VTaGVldFByb3h5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrRm9yVXBkYXRlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXJyYXlDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2F0Y2hVc2luZ1JBRihjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBhZGRTaGVldENoYW5nZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMucHVzaCgoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2goY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY29uc3Qgb25BZG9wdGVkU2hlZXRzQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FuVXNlU2hlZXRQcm94eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBcnJheUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGFkZFNoZWV0Q2hhbmdlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldHNDaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgIG9uQWRvcHRlZFNoZWV0c0NoYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhZGRTaGVldENoYW5nZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRDaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgIG9uQWRvcHRlZFNoZWV0c0NoYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhZGRTaGVldENoYW5nZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlRGVjbGFyYXRpb25DaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgIG9uQWRvcHRlZFNoZWV0c0NoYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoY2FuVXNlU2hlZXRQcm94eSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdhdGNoVXNpbmdSQUYoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZW5kZXIsXHJcbiAgICAgICAgICAgIGRlc3Ryb3ksXHJcbiAgICAgICAgICAgIHdhdGNoXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNsYXNzIFN0eWxlU2hlZXRDb21tYW5kQnVpbGRlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3Iob25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jc3NSdWxlcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zZXJ0UnVsZShjc3NUZXh0LCBpbmRleCA9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKHt0eXBlOiBcImluc2VydFwiLCBpbmRleCwgY3NzVGV4dH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNzc1J1bGVzLnNwbGljZShcclxuICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZVNoZWV0Q29tbWFuZEJ1aWxkZXIodGhpcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKHt0eXBlOiBcImRlbGV0ZVwiLCBpbmRleH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNzc1J1bGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVwbGFjZVN5bmMoY3NzVGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5wdXNoKHt0eXBlOiBcInJlcGxhY2VcIiwgY3NzVGV4dH0pO1xyXG4gICAgICAgICAgICBpZiAoY3NzVGV4dCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jc3NSdWxlcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdHlsZVNoZWV0Q29tbWFuZEJ1aWxkZXIucmVwbGFjZVN5bmMoKSBpcyBub3QgZnVsbHkgc3VwcG9ydGVkXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXREZWVwQ1NTQ29tbWFuZHMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZXAgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWVwLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbW1hbmQudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NUZXh0OiBjb21tYW5kLnR5cGUgIT09IFwiZGVsZXRlXCIgPyBjb21tYW5kLmNzc1RleHQgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGNvbW1hbmQudHlwZSA9PT0gXCJyZXBsYWNlXCIgPyBbXSA6IFtjb21tYW5kLmluZGV4XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNzc1J1bGVzLmZvckVhY2goKHJ1bGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tbWFuZHMgPSBydWxlLmdldERlZXBDU1NDb21tYW5kcygpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGRDb21tYW5kcy5mb3JFYWNoKChjKSA9PiBjLnBhdGgudW5zaGlmdChpKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVlcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJEZWVwQ1NTQ29tbWFuZHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmNzc1J1bGVzLmZvckVhY2goKHJ1bGUpID0+IHJ1bGUuY2xlYXJEZWVwQ1NTQ29tbWFuZHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRvcHRlZFN0eWxlU2hlZXRGYWxsYmFjayhvbkNoYW5nZSkge1xyXG4gICAgICAgIGxldCBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc291cmNlQ1NTUnVsZXMgPSBbXTtcclxuICAgICAgICBsZXQgbGFzdFRoZW1lO1xyXG4gICAgICAgIGxldCBsYXN0SWdub3JlSW1hZ2VBbmFseXNpcztcclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDU1MoY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgc291cmNlQ1NTUnVsZXMgPSBjc3NSdWxlcztcclxuICAgICAgICAgICAgaWYgKGxhc3RUaGVtZSAmJiBsYXN0SWdub3JlSW1hZ2VBbmFseXNpcykge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyKGxhc3RUaGVtZSwgbGFzdElnbm9yZUltYWdlQW5hbHlzaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgU3R5bGVTaGVldENvbW1hbmRCdWlsZGVyKG9uQ2hhbmdlKTtcclxuICAgICAgICBmdW5jdGlvbiByZW5kZXIodGhlbWUsIGlnbm9yZUltYWdlQW5hbHlzaXMpIHtcclxuICAgICAgICAgICAgbGFzdFRoZW1lID0gdGhlbWU7XHJcbiAgICAgICAgICAgIGxhc3RJZ25vcmVJbWFnZUFuYWx5c2lzID0gaWdub3JlSW1hZ2VBbmFseXNpcztcclxuICAgICAgICAgICAgY29uc3QgcHJlcGFyZVNoZWV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5yZXBsYWNlU3luYyhcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBzaGVldE1vZGlmaWVyID0gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCk7XHJcbiAgICAgICAgICAgIHNoZWV0TW9kaWZpZXIubW9kaWZ5U2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgcHJlcGFyZVNoZWV0LFxyXG4gICAgICAgICAgICAgICAgc291cmNlQ1NTUnVsZXMsXHJcbiAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICBmb3JjZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkOiAoKSA9PiBjYW5jZWxBc3luY09wZXJhdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNvbW1hbmRzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb21tYW5kcyA9IGJ1aWxkZXIuZ2V0RGVlcENTU0NvbW1hbmRzKCk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY2xlYXJEZWVwQ1NTQ29tbWFuZHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3JlbmRlciwgZGVzdHJveSwgdXBkYXRlQ1NTLCBjb21tYW5kc307XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5qZWN0UHJveHkoXHJcbiAgICAgICAgZW5hYmxlU3R5bGVTaGVldHNQcm94eSxcclxuICAgICAgICBlbmFibGVDdXN0b21FbGVtZW50UmVnaXN0cnlQcm94eVxyXG4gICAgKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY2xlYW5lcnMgPSBbXTtcclxuICAgICAgICBmdW5jdGlvbiBjbGVhblVwKCkge1xyXG4gICAgICAgICAgICBjbGVhbmVycy5mb3JFYWNoKChjbGVhbikgPT4gY2xlYW4oKSk7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLnNwbGljZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZG9jdW1lbnRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBjbGVhbmVycy5wdXNoKCgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGlzYWJsZUNvbmZsaWN0aW5nUGx1Z2lucygpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlzYWJsZVdQRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Py5XUERhcmtNb2RlPy5kZWFjdGl2YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LldQRGFya01vZGUuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkaXNhYmxlV1BEYXJrTW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudEV2ZW50TGlzdGVuZXIoXCJfX2RhcmtyZWFkZXJfX2NsZWFuVXBcIiwgY2xlYW5VcCk7XHJcbiAgICAgICAgZG9jdW1lbnRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fZGlzYWJsZUNvbmZsaWN0aW5nUGx1Z2luc1wiLFxyXG4gICAgICAgICAgICBkaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmdW5jdGlvbiBvdmVycmlkZVByb3BlcnR5KGNscywgcHJvcCwgb3ZlcnJpZGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3RvID0gY2xzLnByb3RvdHlwZTtcclxuICAgICAgICAgICAgY29uc3Qgb2xkRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIHByb3ApO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdG9yID0gey4uLm9sZERlc2NyaXB0b3J9O1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvdmVycmlkZXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFjdG9yeSA9IG92ZXJyaWRlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRvcltrZXldID0gZmFjdG9yeShvbGREZXNjcmlwdG9yW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBwcm9wLCBuZXdEZXNjcmlwdG9yKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMucHVzaCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBwcm9wLCBvbGREZXNjcmlwdG9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvdmVycmlkZShjbHMsIHByb3AsIGZhY3RvcnkpIHtcclxuICAgICAgICAgICAgb3ZlcnJpZGVQcm9wZXJ0eShjbHMsIHByb3AsIHt2YWx1ZTogZmFjdG9yeX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc0RSRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaXNEUlNoZWV0KHNoZWV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0RSRWxlbWVudChzaGVldC5vd25lck5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1cGRhdGVTaGVldEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX191cGRhdGVTaGVldFwiKTtcclxuICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRDaGFuZ2VFdmVudCA9IG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZVNoZWV0Q2hhbmdlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldE93bmVycyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgY29uc3QgYWRvcHRlZERlY2xhcmF0aW9uU2hlZXRzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICBmdW5jdGlvbiBvbkFkb3B0ZWRTaGVldENoYW5nZShzaGVldCkge1xyXG4gICAgICAgICAgICBjb25zdCBvd25lcnMgPSBhZG9wdGVkU2hlZXRPd25lcnMuZ2V0KHNoZWV0KTtcclxuICAgICAgICAgICAgb3duZXJzPy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChhZG9wdGVkU2hlZXRDaGFuZ2VFdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVycy5kZWxldGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiByZXBvcnRTaGVldENoYW5nZShzaGVldCkge1xyXG4gICAgICAgICAgICBpZiAoc2hlZXQub3duZXJOb2RlICYmICFpc0RSU2hlZXQoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBzaGVldC5vd25lck5vZGUuZGlzcGF0Y2hFdmVudCh1cGRhdGVTaGVldEV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWRvcHRlZFNoZWV0T3duZXJzLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgIG9uQWRvcHRlZFNoZWV0Q2hhbmdlKHNoZWV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiByZXBvcnRTaGVldENoYW5nZUFzeW5jKHNoZWV0LCBwcm9taXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtvd25lck5vZGV9ID0gc2hlZXQ7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG93bmVyTm9kZSAmJlxyXG4gICAgICAgICAgICAgICAgIWlzRFJTaGVldChzaGVldCkgJiZcclxuICAgICAgICAgICAgICAgIHByb21pc2UgJiZcclxuICAgICAgICAgICAgICAgIHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IG93bmVyTm9kZS5kaXNwYXRjaEV2ZW50KHVwZGF0ZVNoZWV0RXZlbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWRvcHRlZFNoZWV0T3duZXJzLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlICYmIHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IG9uQWRvcHRlZFNoZWV0Q2hhbmdlKHNoZWV0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwiYWRkUnVsZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHNlbGVjdG9yLCBzdHlsZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXRpdmUuY2FsbCh0aGlzLCBzZWxlY3Rvciwgc3R5bGUsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRTaGVldENoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBvdmVycmlkZShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldCxcclxuICAgICAgICAgICAgXCJpbnNlcnRSdWxlXCIsXHJcbiAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocnVsZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG5hdGl2ZS5jYWxsKHRoaXMsIHJ1bGUsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRTaGVldENoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBvdmVycmlkZShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldCxcclxuICAgICAgICAgICAgXCJkZWxldGVSdWxlXCIsXHJcbiAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXRpdmUuY2FsbCh0aGlzLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0U2hlZXRDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBvdmVycmlkZShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldCxcclxuICAgICAgICAgICAgXCJyZW1vdmVSdWxlXCIsXHJcbiAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXRpdmUuY2FsbCh0aGlzLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0U2hlZXRDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBvdmVycmlkZShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldCxcclxuICAgICAgICAgICAgXCJyZXBsYWNlXCIsXHJcbiAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY3NzVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gbmF0aXZlLmNhbGwodGhpcywgY3NzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0U2hlZXRDaGFuZ2VBc3luYyh0aGlzLCByZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwicmVwbGFjZVN5bmNcIixcclxuICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgY3NzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0U2hlZXRDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzaG91bGRXcmFwSFRNTEVsZW1lbnQgPVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJiYWlkdS5jb21cIiB8fFxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ob3N0bmFtZS5lbmRzV2l0aChcIi5iYWlkdS5jb21cIik7XHJcbiAgICAgICAgaWYgKHNob3VsZFdyYXBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICBvdmVycmlkZShcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YWdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lICE9PSBcInN0eWxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmUuY2FsbCh0aGlzLCB0YWdOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRDdXJyZW50RWxlbWVudFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBuYXRpdmUuY2FsbCh0aGlzLCB0YWdOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLmVsZW1lbnRzXS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlbGVtZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCAmJiAhaXNEUkVsZW1lbnQoZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0Q3VycmVudEVsZW1lbnRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlTGlzdEJlaGF2aW9yID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoXywgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudEVsZW1lbnRWYWx1ZSgpW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocHJvcGVydHkpIHx8IHByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMgPSBuZXcgUHJveHkoZWxlbWVudHMsIG5vZGVMaXN0QmVoYXZpb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaG91bGRQcm94eUNoaWxkTm9kZXMgPSBbXCJicmlsbGlhbnQub3JnXCIsIFwid3d3LnZ5Lm5vXCJdLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICBsb2NhdGlvbi5ob3N0bmFtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHNob3VsZFByb3h5Q2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICBvdmVycmlkZVByb3BlcnR5KE5vZGUsIFwiY2hpbGROb2Rlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbmF0aXZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4uY2hpbGROb2Rlc10uZmlsdGVyKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc0RSRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9kZUxpc3QucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZUN1c3RvbUVsZW1lbnQodGFnKSB7XHJcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9faXNEZWZpbmVkXCIsIHtkZXRhaWw6IHt0YWd9fSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudEV2ZW50TGlzdGVuZXIoXCJfX2RhcmtyZWFkZXJfX2FkZFVuZGVmaW5lZFJlc29sdmVyXCIsIChlKSA9PlxyXG4gICAgICAgICAgICByZXNvbHZlQ3VzdG9tRWxlbWVudChlLmRldGFpbC50YWcpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZW5hYmxlQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5UHJveHkpIHtcclxuICAgICAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgICAgICBDdXN0b21FbGVtZW50UmVnaXN0cnksXHJcbiAgICAgICAgICAgICAgICBcImRlZmluZVwiLFxyXG4gICAgICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUN1c3RvbUVsZW1lbnQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIG5hbWUsIGNvbnN0cnVjdG9yLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrQmxvYlVSTFN1cHBvcnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN2ZyA9XHJcbiAgICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiPjxyZWN0IHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIiBmaWxsPVwidHJhbnNwYXJlbnRcIi8+PC9zdmc+JztcclxuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShzdmcubGVuZ3RoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGJ5dGVzW2ldID0gc3ZnLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtieXRlc10sIHt0eXBlOiBcImltYWdlL3N2Zyt4bWxcIn0pO1xyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBsZXQgYmxvYlVSTEFsbG93ZWQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gb2JqZWN0VVJMO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBibG9iVVJMQWxsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgYmxvYlVSTEFsbG93ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19ibG9iVVJMQ2hlY2tSZXNwb25zZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7YmxvYlVSTEFsbG93ZWR9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19ibG9iVVJMQ2hlY2tSZXF1ZXN0XCIsXHJcbiAgICAgICAgICAgIGNoZWNrQmxvYlVSTFN1cHBvcnQsXHJcbiAgICAgICAgICAgIHtvbmNlOiB0cnVlfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGVuYWJsZVN0eWxlU2hlZXRzUHJveHkpIHtcclxuICAgICAgICAgICAgb3ZlcnJpZGVQcm9wZXJ0eShEb2N1bWVudCwgXCJzdHlsZVNoZWV0c1wiLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRDdXJyZW50VmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2NTaGVldHMgPSBuYXRpdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2hlZXRzID0gWy4uLmRvY1NoZWV0c10uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdHlsZVNoZWV0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0Lm93bmVyTm9kZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNEUlNoZWV0KHN0eWxlU2hlZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTaGVldHMuaXRlbSA9IChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkU2hlZXRzW2l0ZW1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNoZWV0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHlsZVNoZWV0TGlzdC5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IGdldEN1cnJlbnRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZVNoZWV0TGlzdEJlaGF2aW9yID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoXywgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFZhbHVlKClbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cyA9IG5ldyBQcm94eShlbGVtZW50cywgc3R5bGVTaGVldExpc3RCZWhhdmlvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldHNTb3VyY2VQcm94aWVzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0c1Byb3h5U291cmNlcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldHNDaGFuZ2VFdmVudCA9IG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldHNDaGFuZ2VcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRPdmVycmlkZUNhY2hlID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0c1NuYXBzaG90cyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRFJBZG9wdGVkU2hlZXRPdmVycmlkZSA9IChzaGVldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzaGVldCB8fCAhc2hlZXQuY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRvcHRlZFNoZWV0T3ZlcnJpZGVDYWNoZS5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQuY3NzUnVsZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LmNzc1J1bGVzWzBdLmNzc1RleHQuc3RhcnRzV2l0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIjX19kYXJrcmVhZGVyX19hZG9wdGVkT3ZlcnJpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRTaGVldE92ZXJyaWRlQ2FjaGUuYWRkKHNoZWV0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYXJlQXJyYXlzRXF1YWwgPSAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KCh4LCBpKSA9PiB4ID09PSBiW2ldKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgb25BZG9wdGVkU2hlZXRzQ2hhbmdlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXYgPSBhZG9wdGVkU2hlZXRzU25hcHNob3RzLmdldChub2RlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnIgPSAobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgfHwgW10pLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAocykgPT4gIWlzRFJBZG9wdGVkU2hlZXRPdmVycmlkZShzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGFkb3B0ZWRTaGVldHNTbmFwc2hvdHMuc2V0KG5vZGUsIGN1cnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2IHx8ICFhcmVBcnJheXNFcXVhbChwcmV2LCBjdXJyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnIuZm9yRWFjaCgoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZG9wdGVkU2hlZXRPd25lcnMuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRvcHRlZFNoZWV0T3duZXJzLnNldChzaGVldCwgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRPd25lcnMuZ2V0KHNoZWV0KS5hZGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBzaGVldC5jc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSBydWxlLnN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRvcHRlZERlY2xhcmF0aW9uU2hlZXRzLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoZWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChhZG9wdGVkU2hlZXRzQ2hhbmdlRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBwcm94eUFkb3B0ZWRTaGVldHNBcnJheSA9IChub2RlLCBzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhZG9wdGVkU2hlZXRzUHJveHlTb3VyY2VzLmhhcyhzb3VyY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZG9wdGVkU2hlZXRzU291cmNlUHJveGllcy5oYXMoc291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhZG9wdGVkU2hlZXRzU291cmNlUHJveGllcy5nZXQoc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHNvdXJjZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImxlbmd0aFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2Uobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRzU291cmNlUHJveGllcy5zZXQoc291cmNlLCBwcm94eSk7XHJcbiAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRzUHJveHlTb3VyY2VzLnNldChwcm94eSwgc291cmNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm94eTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgW0RvY3VtZW50LCBTaGFkb3dSb290XS5mb3JFYWNoKChjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZVByb3BlcnR5KGN0b3IsIFwiYWRvcHRlZFN0eWxlU2hlZXRzXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IG5hdGl2ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5QWRvcHRlZFNoZWV0c0FycmF5KHRoaXMsIHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRvcHRlZFNoZWV0c1Byb3h5U291cmNlcy5oYXMoc291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGFkb3B0ZWRTaGVldHNQcm94eVNvdXJjZXMuZ2V0KHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmUuY2FsbCh0aGlzLCBzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZG9wdGVkU2hlZXRzQ2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWREZWNsYXJhdGlvbkNoYW5nZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZURlY2xhcmF0aW9uQ2hhbmdlXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgW1wic2V0UHJvcGVydHlcIiwgXCJyZW1vdmVQcm9wZXJ0eVwiXS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIG92ZXJyaWRlKENTU1N0eWxlRGVjbGFyYXRpb24sIGtleSwgKG5hdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG5hdGl2ZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBhZG9wdGVkRGVjbGFyYXRpb25TaGVldHMuZ2V0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hlZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93bmVycyA9IGFkb3B0ZWRTaGVldE93bmVycy5nZXQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG93bmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVycy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkb3B0ZWREZWNsYXJhdGlvbkNoYW5nZUV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lciA9IG51bGw7XHJcbiAgICBsZXQgZG9jdW1lbnRJc1Zpc2libGVfID0gIWRvY3VtZW50LmhpZGRlbjtcclxuICAgIGNvbnN0IGxpc3RlbmVyT3B0aW9ucyA9IHtcclxuICAgICAgICBjYXB0dXJlOiB0cnVlLFxyXG4gICAgICAgIHBhc3NpdmU6IHRydWVcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvckRvY3VtZW50VmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcInZpc2liaWxpdHljaGFuZ2VcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwicGFnZXNob3dcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiZm9jdXNcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JEb2N1bWVudFZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcInBhZ2VzaG93XCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImZvY3VzXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0RG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBhbHJlYWR5V2F0Y2hpbmcgPSBCb29sZWFuKGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyKTtcclxuICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5oaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZURvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRJc1Zpc2libGVfID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCFhbHJlYWR5V2F0Y2hpbmcpIHtcclxuICAgICAgICAgICAgd2F0Y2hGb3JEb2N1bWVudFZpc2liaWxpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVEb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcigpIHtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JEb2N1bWVudFZpc2liaWxpdHkoKTtcclxuICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkb2N1bWVudElzVmlzaWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnRJc1Zpc2libGVfO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IElOU1RBTkNFX0lEID0gZ2VuZXJhdGVVSUQoKTtcclxuICAgIGNvbnN0IHN0eWxlTWFuYWdlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBhZG9wdGVkU3R5bGVNYW5hZ2VycyA9IFtdO1xyXG4gICAgY29uc3QgYWRvcHRlZFN0eWxlRmFsbGJhY2tzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgYWRvcHRlZFN0eWxlTm9kZUlkcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBjb25zdCBhZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgbGV0IHRoZW1lID0gbnVsbDtcclxuICAgIGxldCBmaXhlcyA9IG51bGw7XHJcbiAgICBsZXQgaXNJRnJhbWUkMSA9IG51bGw7XHJcbiAgICBsZXQgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMgPSBbXTtcclxuICAgIGxldCBpZ25vcmVkSW5saW5lU2VsZWN0b3JzID0gW107XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZVN0eWxlKGNsYXNzTmFtZSwgcm9vdCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQpIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHJvb3QucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgZWxlbWVudC5tZWRpYSA9IFwic2NyZWVuXCI7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlU2NyaXB0KGNsYXNzTmFtZSwgcm9vdCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQpIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHJvb3QucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9kZVBvc2l0aW9uV2F0Y2hlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIobm9kZSwgYWxpYXMpIHtcclxuICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5oYXMoYWxpYXMpICYmXHJcbiAgICAgICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLmdldChhbGlhcykuc3RvcCgpO1xyXG4gICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLnNldChhbGlhcywgd2F0Y2hGb3JOb2RlUG9zaXRpb24obm9kZSwgXCJoZWFkXCIpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BTdHlsZVBvc2l0aW9uV2F0Y2hlcnMoKSB7XHJcbiAgICAgICAgZm9yRWFjaChub2RlUG9zaXRpb25XYXRjaGVycy52YWx1ZXMoKSwgKHdhdGNoZXIpID0+IHdhdGNoZXIuc3RvcCgpKTtcclxuICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3RhdGljU3R5bGVPdmVycmlkZXMoKSB7XHJcbiAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXHJcbiAgICAgICAgICAgIFwiZGFya3JlYWRlci0tZmFsbGJhY2tcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUodGhlbWUsIHtcclxuICAgICAgICAgICAgc3RyaWN0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZmFsbGJhY2tTdHlsZSwgZG9jdW1lbnQuaGVhZC5maXJzdENoaWxkKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIoZmFsbGJhY2tTdHlsZSwgXCJmYWxsYmFja1wiKTtcclxuICAgICAgICBjb25zdCB1c2VyQWdlbnRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS11c2VyLWFnZW50XCIpO1xyXG4gICAgICAgIHVzZXJBZ2VudFN0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRVc2VyQWdlbnRTdHlsZShcclxuICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgIGlzSUZyYW1lJDEsXHJcbiAgICAgICAgICAgIHRoZW1lLnN0eWxlU3lzdGVtQ29udHJvbHNcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHVzZXJBZ2VudFN0eWxlLCBmYWxsYmFja1N0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodXNlckFnZW50U3R5bGUsIFwidXNlci1hZ2VudFwiKTtcclxuICAgICAgICBjb25zdCB0ZXh0U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tdGV4dFwiKTtcclxuICAgICAgICBpZiAodGhlbWUudXNlRm9udCB8fCB0aGVtZS50ZXh0U3Ryb2tlID4gMCkge1xyXG4gICAgICAgICAgICB0ZXh0U3R5bGUudGV4dENvbnRlbnQgPSBjcmVhdGVUZXh0U3R5bGUodGhlbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHRTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHRleHRTdHlsZSwgZmFsbGJhY2tTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKHRleHRTdHlsZSwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IGludmVydFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWludmVydFwiKTtcclxuICAgICAgICBpZiAoZml4ZXMgJiYgQXJyYXkuaXNBcnJheShmaXhlcy5pbnZlcnQpICYmIGZpeGVzLmludmVydC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICAgICAgYCR7Zml4ZXMuaW52ZXJ0LmpvaW4oXCIsIFwiKX0ge2AsXHJcbiAgICAgICAgICAgICAgICBgICAgIGZpbHRlcjogJHtnZXRDU1NGaWx0ZXJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJhc3Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLm1vZGUgPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUuY29udHJhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhbXAodGhlbWUuY29udHJhc3QgLSAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgfSl9ICFpbXBvcnRhbnQ7YCxcclxuICAgICAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGludmVydFN0eWxlLCB0ZXh0U3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihpbnZlcnRTdHlsZSwgXCJpbnZlcnRcIik7XHJcbiAgICAgICAgY29uc3QgaW5saW5lU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW5saW5lXCIpO1xyXG4gICAgICAgIGlubGluZVN0eWxlLnRleHRDb250ZW50ID0gZ2V0SW5saW5lT3ZlcnJpZGVTdHlsZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGlubGluZVN0eWxlLCBpbnZlcnRTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGlubGluZVN0eWxlLCBcImlubGluZVwiKTtcclxuICAgICAgICBjb25zdCBvdmVycmlkZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLW92ZXJyaWRlXCIpO1xyXG4gICAgICAgIG92ZXJyaWRlU3R5bGUudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBmaXhlcyAmJiBmaXhlcy5jc3MgPyByZXBsYWNlQ1NTVGVtcGxhdGVzKGZpeGVzLmNzcykgOiBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQob3ZlcnJpZGVTdHlsZSk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKG92ZXJyaWRlU3R5bGUsIFwib3ZlcnJpZGVcIik7XHJcbiAgICAgICAgY29uc3QgdmFyaWFibGVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS12YXJpYWJsZXNcIik7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ29sb3JzID0gZ2V0U2VsZWN0aW9uQ29sb3IodGhlbWUpO1xyXG4gICAgICAgIGNvbnN0IG5ldXRyYWxCYWNrZ3JvdW5kQ29sb3IgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgIHBhcnNlQ29sb3JXaXRoQ2FjaGUoXCIjZmZmZmZmXCIpLFxyXG4gICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbmV1dHJhbFRleHRDb2xvciA9IG1vZGlmeUZvcmVncm91bmRDb2xvcihcclxuICAgICAgICAgICAgcGFyc2VDb2xvcldpdGhDYWNoZShcIiMwMDAwMDBcIiksXHJcbiAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXJpYWJsZVN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICBgOnJvb3Qge2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItbmV1dHJhbC1iYWNrZ3JvdW5kOiAke25ldXRyYWxCYWNrZ3JvdW5kQ29sb3J9O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItbmV1dHJhbC10ZXh0OiAke25ldXRyYWxUZXh0Q29sb3J9O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItc2VsZWN0aW9uLWJhY2tncm91bmQ6ICR7c2VsZWN0aW9uQ29sb3JzLmJhY2tncm91bmRDb2xvclNlbGVjdGlvbn07YCxcclxuICAgICAgICAgICAgYCAgIC0tZGFya3JlYWRlci1zZWxlY3Rpb24tdGV4dDogJHtzZWxlY3Rpb25Db2xvcnMuZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9ufTtgLFxyXG4gICAgICAgICAgICBgfWBcclxuICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodmFyaWFibGVTdHlsZSwgaW5saW5lU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcih2YXJpYWJsZVN0eWxlLCBcInZhcmlhYmxlc1wiKTtcclxuICAgICAgICBjb25zdCByb290VmFyc1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShyb290VmFyc1N0eWxlLCB2YXJpYWJsZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBjb25zdCBlbmFibGVTdHlsZVNoZWV0c1Byb3h5ID0gIShcclxuICAgICAgICAgICAgZml4ZXMgJiYgZml4ZXMuZGlzYWJsZVN0eWxlU2hlZXRzUHJveHlcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGVuYWJsZUN1c3RvbUVsZW1lbnRSZWdpc3RyeVByb3h5ID0gIShcclxuICAgICAgICAgICAgZml4ZXMgJiYgZml4ZXMuZGlzYWJsZUN1c3RvbUVsZW1lbnRSZWdpc3RyeVByb3h5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fY2xlYW5VcFwiKSk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBwcm94eVNjcmlwdCA9IGNyZWF0ZU9yVXBkYXRlU2NyaXB0KFwiZGFya3JlYWRlci0tcHJveHlcIik7XHJcbiAgICAgICAgICAgIHByb3h5U2NyaXB0LmFwcGVuZChcclxuICAgICAgICAgICAgICAgIGAoJHtpbmplY3RQcm94eX0pKCR7ZW5hYmxlU3R5bGVTaGVldHNQcm94eX0sICR7ZW5hYmxlQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5UHJveHl9KWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUocHJveHlTY3JpcHQsIHJvb3RWYXJzU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgICAgICBwcm94eVNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlc0lubmVyKHJvb3QpIHtcclxuICAgICAgICBjb25zdCBpbmxpbmVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbmxpbmVcIiwgcm9vdCk7XHJcbiAgICAgICAgaW5saW5lU3R5bGUudGV4dENvbnRlbnQgPSBnZXRJbmxpbmVPdmVycmlkZVN0eWxlKCk7XHJcbiAgICAgICAgcm9vdC5pbnNlcnRCZWZvcmUoaW5saW5lU3R5bGUsIHJvb3QuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcnJpZGVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1vdmVycmlkZVwiLCByb290KTtcclxuICAgICAgICBvdmVycmlkZVN0eWxlLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgZml4ZXMgJiYgZml4ZXMuY3NzID8gcmVwbGFjZUNTU1RlbXBsYXRlcyhmaXhlcy5jc3MpIDogXCJcIjtcclxuICAgICAgICByb290Lmluc2VydEJlZm9yZShvdmVycmlkZVN0eWxlLCBpbmxpbmVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgY29uc3QgaW52ZXJ0U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW52ZXJ0XCIsIHJvb3QpO1xyXG4gICAgICAgIGlmIChmaXhlcyAmJiBBcnJheS5pc0FycmF5KGZpeGVzLmludmVydCkgJiYgZml4ZXMuaW52ZXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBbXHJcbiAgICAgICAgICAgICAgICBgJHtmaXhlcy5pbnZlcnQuam9pbihcIiwgXCIpfSB7YCxcclxuICAgICAgICAgICAgICAgIGAgICAgZmlsdGVyOiAke2dldENTU0ZpbHRlclZhbHVlKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFzdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUubW9kZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5jb250cmFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFtcCh0aGVtZS5jb250cmFzdCAtIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICB9KX0gIWltcG9ydGFudDtgLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9vdC5pbnNlcnRCZWZvcmUoaW52ZXJ0U3R5bGUsIG92ZXJyaWRlU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNoYWRvd1Jvb3RzV2l0aE92ZXJyaWRlcy5hZGQocm9vdCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxheWVkQ3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMocm9vdCkge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucywgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHt0eXBlLCByZW1vdmVkTm9kZXN9IG9mIG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHtub2RlTmFtZSwgY2xhc3NOYW1lfSBvZiByZW1vdmVkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU5hbWUgPT09IFwiU1RZTEVcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya3JlYWRlciBkYXJrcmVhZGVyLS1pbmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXIgZGFya3JlYWRlci0tb3ZlcnJpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXIgZGFya3JlYWRlci0taW52ZXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzSW5uZXIocm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtjaGlsZExpc3Q6IHRydWV9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHJvb3QpIHtcclxuICAgICAgICBjb25zdCBkZWxheWVkID0gcm9vdC5maXJzdENoaWxkID09PSBudWxsO1xyXG4gICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzSW5uZXIocm9vdCk7XHJcbiAgICAgICAgaWYgKGRlbGF5ZWQpIHtcclxuICAgICAgICAgICAgZGVsYXllZENyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NUZW1wbGF0ZXMoJGNzc1RleHQpIHtcclxuICAgICAgICByZXR1cm4gJGNzc1RleHQucmVwbGFjZSgvXFwkeyguKz8pfS9nLCAoXywgJGNvbG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gcGFyc2VDb2xvcldpdGhDYWNoZSgkY29sb3IpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZ2h0bmVzcyA9IGdldFNSR0JMaWdodG5lc3MoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlnaHRuZXNzID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihjb2xvciwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUZvcmVncm91bmRDb2xvcihjb2xvciwgdGhlbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAkY29sb3I7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkZhbGxiYWNrU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgZmFsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIpO1xyXG4gICAgICAgIGlmIChmYWxsYmFjaykge1xyXG4gICAgICAgICAgICBmYWxsYmFjay50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRHluYW1pY1N0eWxlT3ZlcnJpZGVzKCkge1xyXG4gICAgICAgIGNhbmNlbFJlbmRlcmluZygpO1xyXG4gICAgICAgIGNvbnN0IGFsbFN0eWxlcyA9IGdldE1hbmFnZWFibGVTdHlsZXMoZG9jdW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IG5ld01hbmFnZXJzID0gYWxsU3R5bGVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHN0eWxlKSA9PiAhc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpKVxyXG4gICAgICAgICAgICAubWFwKChzdHlsZSkgPT4gY3JlYXRlTWFuYWdlcihzdHlsZSkpO1xyXG4gICAgICAgIG5ld01hbmFnZXJzXHJcbiAgICAgICAgICAgIC5tYXAoKG1hbmFnZXIpID0+IG1hbmFnZXIuZGV0YWlscyh7c2Vjb25kUm91bmQ6IGZhbHNlfSkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGRldGFpbCkgPT4gZGV0YWlsICYmIGRldGFpbC5ydWxlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZGV0YWlsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGRldGFpbC5ydWxlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLnNldE9uUm9vdFZhcmlhYmxlQ2hhbmdlKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1yb290LXZhcnNcIik7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKHJvb3RWYXJzU3R5bGUsIHRoZW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByb290VmFyc1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5wdXRSb290VmFycyhyb290VmFyc1N0eWxlLCB0aGVtZSk7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PlxyXG4gICAgICAgICAgICBtYW5hZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAobG9hZGluZ1N0eWxlcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBtYW5hZ2VyLndhdGNoKCkpO1xyXG4gICAgICAgIGNvbnN0IGlubGluZVN0eWxlRWxlbWVudHMgPSB0b0FycmF5KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKElOTElORV9TVFlMRV9TRUxFQ1RPUilcclxuICAgICAgICApO1xyXG4gICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIChob3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKGhvc3Quc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gaG9zdC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICBJTkxJTkVfU1RZTEVfU0VMRUNUT1JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHB1c2goaW5saW5lU3R5bGVFbGVtZW50cywgZWxlbWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5saW5lU3R5bGVFbGVtZW50cy5mb3JFYWNoKChlbCkgPT5cclxuICAgICAgICAgICAgb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICAgICAgICAgIGVsLFxyXG4gICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKGRvY3VtZW50KTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IE1BVENIX1ZBUiA9IFN5bWJvbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvbkFkb3B0ZWRDU1NDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge25vZGUsIGlkLCBjc3NSdWxlcywgZW50cmllc30gPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJpZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNzc1J1bGVzID0gZVsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhjc3NSdWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhjc3NSdWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lT25jZShNQVRDSF9WQVIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR1cGxlcyA9IEFycmF5LmlzQXJyYXkoZW50cmllcylcclxuICAgICAgICAgICAgICAgICAgICA/IGVudHJpZXNcclxuICAgICAgICAgICAgICAgICAgICA6IG5vZGUgJiYgY3NzUnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAgID8gW1tub2RlLCBpZCwgY3NzUnVsZXNdXVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICAgICAgICAgIHR1cGxlcy5mb3JFYWNoKChbbm9kZSwgaWQsIGNzc1J1bGVzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRTdHlsZU5vZGVJZHMuc2V0KG5vZGUsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFjayA9IGdldEFkb3B0ZWRTdHlsZVNoZWV0RmFsbGJhY2sobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2sudXBkYXRlQ1NTKGNzc1J1bGVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZVNoZWV0c0NoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgb25BZG9wdGVkQ1NTQ2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLnB1c2goKCkgPT5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZVNoZWV0c0NoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQWRvcHRlZENTU0NoYW5nZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19zdGFydEFkb3B0ZWRTdHlsZVNoZWV0c1dhdGNoZXJcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbG9hZGluZ1N0eWxlc0NvdW50ZXIgPSAwO1xyXG4gICAgY29uc3QgbG9hZGluZ1N0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1hbmFnZXIoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmdTdHlsZUlkID0gKytsb2FkaW5nU3R5bGVzQ291bnRlcjtcclxuICAgICAgICBmdW5jdGlvbiBsb2FkaW5nU3RhcnQoKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNET01SZWFkeSgpIHx8ICFkb2N1bWVudElzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nU3R5bGVzLmFkZChsb2FkaW5nU3R5bGVJZCk7XHJcbiAgICAgICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIGBDdXJyZW50IGFtb3VudCBvZiBzdHlsZXMgbG9hZGluZzogJHtsb2FkaW5nU3R5bGVzLnNpemV9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFja1N0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmljdDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBsb2FkaW5nRW5kKCkge1xyXG4gICAgICAgICAgICBsb2FkaW5nU3R5bGVzLmRlbGV0ZShsb2FkaW5nU3R5bGVJZCk7XHJcbiAgICAgICAgICAgIGxvZ0luZm8oXHJcbiAgICAgICAgICAgICAgICBgUmVtb3ZlZCBsb2FkaW5nU3R5bGUgJHtsb2FkaW5nU3R5bGVJZH0sIG5vdyBhd2FpdGluZzogJHtsb2FkaW5nU3R5bGVzLnNpemV9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAobG9hZGluZ1N0eWxlcy5zaXplID09PSAwICYmIGlzRE9NUmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYW5GYWxsYmFja1N0eWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0gbWFuYWdlci5kZXRhaWxzKHtzZWNvbmRSb3VuZDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBpZiAoIWRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGRldGFpbHMucnVsZXMpO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWFuYWdlciA9IG1hbmFnZVN0eWxlKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgICAgICBsb2FkaW5nU3RhcnQsXHJcbiAgICAgICAgICAgIGxvYWRpbmdFbmRcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdHlsZU1hbmFnZXJzLnNldChlbGVtZW50LCBtYW5hZ2VyKTtcclxuICAgICAgICByZXR1cm4gbWFuYWdlcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1hbmFnZXIoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSBzdHlsZU1hbmFnZXJzLmdldChlbGVtZW50KTtcclxuICAgICAgICBpZiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICBtYW5hZ2VyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc3R5bGVNYW5hZ2Vycy5kZWxldGUoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdGhyb3R0bGVkUmVuZGVyQWxsU3R5bGVzID0gdGhyb3R0bGUoKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PlxyXG4gICAgICAgICAgICBtYW5hZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PlxyXG4gICAgICAgICAgICBtYW5hZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjYW5jZWxSZW5kZXJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhyb3R0bGVkUmVuZGVyQWxsU3R5bGVzLmNhbmNlbCgpO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIG9uRE9NUmVhZHkoKSB7XHJcbiAgICAgICAgaWYgKGxvYWRpbmdTdHlsZXMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjbGVhbkZhbGxiYWNrU3R5bGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJ1bkR5bmFtaWNTdHlsZSgpIHtcclxuICAgICAgICBjcmVhdGVEeW5hbWljU3R5bGVPdmVycmlkZXMoKTtcclxuICAgICAgICB3YXRjaEZvclVwZGF0ZXMoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRoZW1lQW5kV2F0Y2hGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgIGNyZWF0ZVN0YXRpY1N0eWxlT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudElzVmlzaWJsZSgpICYmICF0aGVtZS5pbW1lZGlhdGVNb2RpZnkpIHtcclxuICAgICAgICAgICAgc2V0RG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIocnVuRHluYW1pY1N0eWxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBydW5EeW5hbWljU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3JXaGVuQXZhaWxhYmxlKHRoZW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkb3B0ZWRTdHlsZVNoZWV0cyhub2RlKSB7XHJcbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xyXG4gICAgICAgICAgICBjb25zdCBmYWxsYmFjayA9IGdldEFkb3B0ZWRTdHlsZVNoZWV0RmFsbGJhY2sobm9kZSk7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYW5IYXZlQWRvcHRlZFN0eWxlU2hlZXRzKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcocy5jc3NSdWxlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNYW5nZXIgPSBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldE92ZXJyaWRlKG5vZGUpO1xyXG4gICAgICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5wdXNoKG5ld01hbmdlcik7XHJcbiAgICAgICAgICAgIG5ld01hbmdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICAgICAgbmV3TWFuZ2VyLndhdGNoKChzaGVldHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNoZWV0cy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhzLmNzc1J1bGVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNYW5nZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEFkb3B0ZWRTdHlsZUNoYW5nZVRva2VuKG5vZGUpIHtcclxuICAgICAgICBpZiAoYWRvcHRlZFN0eWxlQ2hhbmdlVG9rZW5zLmhhcyhub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWRvcHRlZFN0eWxlQ2hhbmdlVG9rZW5zLmdldChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBTeW1ib2woKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbnMuc2V0KG5vZGUsIHRva2VuKTtcclxuICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRBZG9wdGVkU3R5bGVTaGVldEZhbGxiYWNrKG5vZGUpIHtcclxuICAgICAgICBsZXQgZmFsbGJhY2sgPSBhZG9wdGVkU3R5bGVGYWxsYmFja3MuZ2V0KG5vZGUpO1xyXG4gICAgICAgIGlmICghZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgZmFsbGJhY2sgPSBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldEZhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gZ2V0QWRvcHRlZFN0eWxlQ2hhbmdlVG9rZW4obm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVPbmNlKHRva2VuLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBhZG9wdGVkU3R5bGVOb2RlSWRzLmdldChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21tYW5kcyA9IGZhbGxiYWNrPy5jb21tYW5kcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaWQgfHwgIWNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtpZCwgY29tbWFuZHN9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldENvbW1hbmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsOiBKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFkb3B0ZWRTdHlsZUZhbGxiYWNrcy5zZXQobm9kZSwgZmFsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsbGJhY2s7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgbWFuYWdlZFN0eWxlcyA9IEFycmF5LmZyb20oc3R5bGVNYW5hZ2Vycy5rZXlzKCkpO1xyXG4gICAgICAgIHdhdGNoRm9yU3R5bGVDaGFuZ2VzKFxyXG4gICAgICAgICAgICBtYW5hZ2VkU3R5bGVzLFxyXG4gICAgICAgICAgICAoe2NyZWF0ZWQsIHVwZGF0ZWQsIHJlbW92ZWQsIG1vdmVkfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzVG9SZW1vdmUgPSByZW1vdmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzVG9NYW5hZ2UgPSBjcmVhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCh1cGRhdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQobW92ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoc3R5bGUpID0+ICFzdHlsZU1hbmFnZXJzLmhhcyhzdHlsZSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzVG9SZXN0b3JlID0gbW92ZWQuZmlsdGVyKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZU1hbmFnZXJzLmhhcyhzdHlsZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXNUb1JlbW92ZS5mb3JFYWNoKChzdHlsZSkgPT4gcmVtb3ZlTWFuYWdlcihzdHlsZSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWFuYWdlcnMgPSBzdHlsZXNUb01hbmFnZS5tYXAoKHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZU1hbmFnZXIoc3R5bGUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuYWdlcnNcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChtYW5hZ2VyKSA9PiBtYW5hZ2VyLmRldGFpbHMoe3NlY29uZFJvdW5kOiBmYWxzZX0pKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGRldGFpbCkgPT4gZGV0YWlsICYmIGRldGFpbC5ydWxlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChkZXRhaWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWwucnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBuZXdNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBtYW5hZ2VyLndhdGNoKCkpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzVG9SZXN0b3JlLmZvckVhY2goKHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlTWFuYWdlcnMuZ2V0KHN0eWxlKS5yZXN0b3JlKClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChzaGFkb3dSb290KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUFkb3B0ZWRTdHlsZVNoZWV0cyhzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgd2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9yc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZUF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlQXR0ci5pbmNsdWRlcyhcIi0tXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb290VmFyc1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya3JlYWRlci0tcm9vdC12YXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUucHV0Um9vdFZhcnMocm9vdFZhcnNTdHlsZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJvb3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5saW5lU3R5bGVFbGVtZW50cyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICAgICBJTkxJTkVfU1RZTEVfU0VMRUNUT1JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5saW5lU3R5bGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yRWFjaChpbmxpbmVTdHlsZUVsZW1lbnRzLCAoZWwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBhZGRET01SZWFkeUxpc3RlbmVyKG9uRE9NUmVhZHkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yVXBkYXRlcygpIHtcclxuICAgICAgICBzdHlsZU1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG1hbmFnZXIucGF1c2UoKSk7XHJcbiAgICAgICAgc3RvcFN0eWxlUG9zaXRpb25XYXRjaGVycygpO1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclN0eWxlQ2hhbmdlcygpO1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvcklubGluZVN0eWxlcygpO1xyXG4gICAgICAgIHJlbW92ZURPTVJlYWR5TGlzdGVuZXIob25ET01SZWFkeSk7XHJcbiAgICAgICAgY2xlYW5SZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIGxldCBtZXRhT2JzZXJ2ZXI7XHJcbiAgICBmdW5jdGlvbiBhZGRNZXRhTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgbWV0YU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlci1sb2NrXCJdJykpIHtcclxuICAgICAgICAgICAgICAgIG1ldGFPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1ldGFPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhcmtSZWFkZXJJbnN0YW5jZU1hcmtlcigpIHtcclxuICAgICAgICBjb25zdCBtZXRhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xyXG4gICAgICAgIG1ldGFFbGVtZW50Lm5hbWUgPSBcImRhcmtyZWFkZXJcIjtcclxuICAgICAgICBtZXRhRWxlbWVudC5jb250ZW50ID0gSU5TVEFOQ0VfSUQ7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0RSTG9ja2VkKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyLWxvY2tcIl0nKSAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNBbm90aGVyRGFya1JlYWRlckluc3RhbmNlQWN0aXZlKCkge1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJyk7XHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGEuY29udGVudCAhPT0gSU5TVEFOQ0VfSUQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlRGFya1JlYWRlckluc3RhbmNlTWFya2VyKCk7XHJcbiAgICAgICAgYWRkTWV0YUxpc3RlbmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGludGVyY2VwdG9yQXR0ZW1wdHMgPSAyO1xyXG4gICAgZnVuY3Rpb24gaW50ZXJjZXB0T2xkU2NyaXB0KHtzdWNjZXNzLCBmYWlsdXJlfSkge1xyXG4gICAgICAgIGlmICgtLWludGVyY2VwdG9yQXR0ZW1wdHMgPD0gMCkge1xyXG4gICAgICAgICAgICBmYWlsdXJlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2xkTWV0YSA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlclwiXScpO1xyXG4gICAgICAgIGlmICghb2xkTWV0YSB8fCBvbGRNZXRhLmNvbnRlbnQgPT09IElOU1RBTkNFX0lEKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xyXG4gICAgICAgIGxvY2submFtZSA9IFwiZGFya3JlYWRlci1sb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobG9jayk7XHJcbiAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NrLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS13cC1kYXJrLW1vZGUtcHJlc2V0XCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVXUERhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2Rpc2FibGVDb25mbGljdGluZ1BsdWdpbnNcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgICAgICAgICAgICAgICAgICBcIndwLWRhcmstbW9kZS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXdwLWRhcmstbW9kZS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGlzYWJsZVdQRGFya01vZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3cC1kYXJrLW1vZGUtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXdwLWRhcmstbW9kZS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVXUERhcmtNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wiY2xhc3NcIiwgXCJkYXRhLXdwLWRhcmstbW9kZS1hY3RpdmVcIl1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVEeW5hbWljVGhlbWVJbnRlcm5hbChcclxuICAgICAgICB0aGVtZUNvbmZpZyxcclxuICAgICAgICBkeW5hbWljVGhlbWVGaXhlcyxcclxuICAgICAgICBpZnJhbWVcclxuICAgICkge1xyXG4gICAgICAgIHRoZW1lID0gdGhlbWVDb25maWc7XHJcbiAgICAgICAgZml4ZXMgPSBkeW5hbWljVGhlbWVGaXhlcztcclxuICAgICAgICBpZiAoZml4ZXMpIHtcclxuICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMgPSBBcnJheS5pc0FycmF5KFxyXG4gICAgICAgICAgICAgICAgZml4ZXMuaWdub3JlSW1hZ2VBbmFseXNpc1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IGZpeGVzLmlnbm9yZUltYWdlQW5hbHlzaXNcclxuICAgICAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBBcnJheS5pc0FycmF5KGZpeGVzLmlnbm9yZUlubGluZVN0eWxlKVxyXG4gICAgICAgICAgICAgICAgPyBmaXhlcy5pZ25vcmVJbmxpbmVTdHlsZVxyXG4gICAgICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IFtdO1xyXG4gICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGVtZS5pbW1lZGlhdGVNb2RpZnkpIHtcclxuICAgICAgICAgICAgc2V0SXNET01SZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzSUZyYW1lJDEgPSBpZnJhbWU7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1kYXJrcmVhZGVyLW1vZGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImR5bmFtaWNcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWRhcmtyZWFkZXItc2NoZW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUubW9kZSA/IFwiZGFya1wiIDogXCJkaW1tZWRcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRoZW1lQW5kV2F0Y2hGb3JVcGRhdGVzKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGZhaWx1cmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGlzRFJMb2NrZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Fub3RoZXJEYXJrUmVhZGVySW5zdGFuY2VBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJjZXB0T2xkU2NyaXB0KHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGVhZCkge1xyXG4gICAgICAgICAgICByZWFkeSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXItLWZhbGxiYWNrXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZmFsbGJhY2tTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBmYWxsYmFja1N0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKHRoZW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaWN0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBoZWFkT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuaGVhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGhlYWRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJveHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2NsZWFuVXBcIikpO1xyXG4gICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXByb3h5XCIpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFuZXJzID0gW107XHJcbiAgICBmdW5jdGlvbiByZW1vdmVEeW5hbWljVGhlbWUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1kYXJrcmVhZGVyLW1vZGVgKTtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWRhcmtyZWFkZXItc2NoZW1lYCk7XHJcbiAgICAgICAgY2xlYW5EeW5hbWljVGhlbWVDYWNoZSgpO1xyXG4gICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiKSk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmhlYWQpIHtcclxuICAgICAgICAgICAgcmVzdG9yZU1ldGFUaGVtZUNvbG9yKCk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXVzZXItYWdlbnRcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS10ZXh0XCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0taW52ZXJ0XCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0taW5saW5lXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tb3ZlcnJpZGVcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS12YXJpYWJsZXNcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1yb290LXZhcnNcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlclwiXScpKTtcclxuICAgICAgICAgICAgcmVtb3ZlUHJveHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzLmZvckVhY2goKHJvb3QpID0+IHtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShyb290LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0taW5saW5lXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShyb290LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tb3ZlcnJpZGVcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNoYWRvd1Jvb3RzV2l0aE92ZXJyaWRlcy5jbGVhcigpO1xyXG4gICAgICAgIGZvckVhY2goc3R5bGVNYW5hZ2Vycy5rZXlzKCksIChlbCkgPT4gcmVtb3ZlTWFuYWdlcihlbCkpO1xyXG4gICAgICAgIGxvYWRpbmdTdHlsZXMuY2xlYXIoKTtcclxuICAgICAgICBjbGVhbkxvYWRpbmdMaW5rcygpO1xyXG4gICAgICAgIGZvckVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrcmVhZGVyXCIpLCByZW1vdmVOb2RlKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBtYW5hZ2VyLmRlc3Ryb3koKSk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuc3BsaWNlKDApO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZUZhbGxiYWNrcy5mb3JFYWNoKChmYWxsYmFjaykgPT4gZmFsbGJhY2suZGVzdHJveSgpKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVGYWxsYmFja3MuY2xlYXIoKTtcclxuICAgICAgICBtZXRhT2JzZXJ2ZXIgJiYgbWV0YU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICBjbGVhbmVycy5mb3JFYWNoKChjbGVhbikgPT4gY2xlYW4oKSk7XHJcbiAgICAgICAgY2xlYW5lcnMuc3BsaWNlKDApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5EeW5hbWljVGhlbWVDYWNoZSgpIHtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5jbGVhcigpO1xyXG4gICAgICAgIHBhcnNlZFVSTENhY2hlLmNsZWFyKCk7XHJcbiAgICAgICAgcmVtb3ZlRG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIoKTtcclxuICAgICAgICBjYW5jZWxSZW5kZXJpbmcoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JVcGRhdGVzKCk7XHJcbiAgICAgICAgY2xlYW5Nb2RpZmljYXRpb25DYWNoZSgpO1xyXG4gICAgICAgIGNsZWFyQ29sb3JDYWNoZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlQ1NTKGNzc1RleHQpIHtcclxuICAgICAgICBjc3NUZXh0ID0gcmVtb3ZlQ1NTQ29tbWVudHMoY3NzVGV4dCk7XHJcbiAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQudHJpbSgpO1xyXG4gICAgICAgIGlmICghY3NzVGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJ1bGVzID0gW107XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZVJhbmdlcyA9IGdldFRva2VuRXhjbHVzaW9uUmFuZ2VzKGNzc1RleHQpO1xyXG4gICAgICAgIGNvbnN0IGJyYWNrZXRSYW5nZXMgPSBnZXRBbGxPcGVuQ2xvc2VSYW5nZXMoXHJcbiAgICAgICAgICAgIGNzc1RleHQsXHJcbiAgICAgICAgICAgIFwie1wiLFxyXG4gICAgICAgICAgICBcIn1cIixcclxuICAgICAgICAgICAgZXhjbHVkZVJhbmdlc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHJ1bGVTdGFydCA9IDA7XHJcbiAgICAgICAgYnJhY2tldFJhbmdlcy5mb3JFYWNoKChicmFja2V0cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBjc3NUZXh0LnN1YnN0cmluZyhydWxlU3RhcnQsIGJyYWNrZXRzLnN0YXJ0KS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjc3NUZXh0LnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgIGJyYWNrZXRzLnN0YXJ0ICsgMSxcclxuICAgICAgICAgICAgICAgIGJyYWNrZXRzLmVuZCAtIDFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwiQFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZUVuZEluZGV4ID0ga2V5LnNlYXJjaCgvW1xcc1xcKF0vKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUVuZEluZGV4IDwgMCA/IGtleSA6IGtleS5zdWJzdHJpbmcoMCwgdHlwZUVuZEluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUVuZEluZGV4IDwgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleS5zdWJzdHJpbmcodHlwZUVuZEluZGV4KS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IHBhcnNlQ1NTKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcnVsZXMucHVzaChydWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzOiBwYXJzZVNlbGVjdG9ycyhrZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogcGFyc2VEZWNsYXJhdGlvbnMoY29udGVudClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJ1bGVTdGFydCA9IGJyYWNrZXRzLmVuZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcnVsZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRBbGxPcGVuQ2xvc2VSYW5nZXMoXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgb3BlblRva2VuLFxyXG4gICAgICAgIGNsb3NlVG9rZW4sXHJcbiAgICAgICAgZXhjbHVkZVJhbmdlcyA9IFtdXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCByYW5nZXMgPSBbXTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IHJhbmdlO1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgKHJhbmdlID0gZ2V0T3BlbkNsb3NlUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICBvcGVuVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjbG9zZVRva2VuLFxyXG4gICAgICAgICAgICAgICAgZXhjbHVkZVJhbmdlc1xyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByYW5nZXMucHVzaChyYW5nZSk7XHJcbiAgICAgICAgICAgIGkgPSByYW5nZS5lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByYW5nZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRUb2tlbkV4Y2x1c2lvblJhbmdlcyhjc3NUZXh0KSB7XHJcbiAgICAgICAgY29uc3Qgc2luZ2xlUXVvdGVHb2VzRmlyc3QgPVxyXG4gICAgICAgICAgICBjc3NUZXh0LmluZGV4T2YoXCInXCIpIDwgY3NzVGV4dC5pbmRleE9mKCdcIicpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0UXVvdGUgPSBzaW5nbGVRdW90ZUdvZXNGaXJzdCA/IFwiJ1wiIDogJ1wiJztcclxuICAgICAgICBjb25zdCBzZWNvbmRRdW90ZSA9IHNpbmdsZVF1b3RlR29lc0ZpcnN0ID8gJ1wiJyA6IFwiJ1wiO1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVSYW5nZXMgPSBnZXRBbGxPcGVuQ2xvc2VSYW5nZXMoXHJcbiAgICAgICAgICAgIGNzc1RleHQsXHJcbiAgICAgICAgICAgIGZpcnN0UXVvdGUsXHJcbiAgICAgICAgICAgIGZpcnN0UXVvdGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXMucHVzaChcclxuICAgICAgICAgICAgLi4uZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKFxyXG4gICAgICAgICAgICAgICAgY3NzVGV4dCxcclxuICAgICAgICAgICAgICAgIHNlY29uZFF1b3RlLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kUXVvdGUsXHJcbiAgICAgICAgICAgICAgICBleGNsdWRlUmFuZ2VzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXMucHVzaChcclxuICAgICAgICAgICAgLi4uZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKGNzc1RleHQsIFwiW1wiLCBcIl1cIiwgZXhjbHVkZVJhbmdlcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXMucHVzaChcclxuICAgICAgICAgICAgLi4uZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKGNzc1RleHQsIFwiKFwiLCBcIilcIiwgZXhjbHVkZVJhbmdlcylcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBleGNsdWRlUmFuZ2VzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VTZWxlY3RvcnMoc2VsZWN0b3JUZXh0KSB7XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZVJhbmdlcyA9IGdldFRva2VuRXhjbHVzaW9uUmFuZ2VzKHNlbGVjdG9yVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHNwbGl0RXhjbHVkaW5nKHNlbGVjdG9yVGV4dCwgXCIsXCIsIGV4Y2x1ZGVSYW5nZXMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VEZWNsYXJhdGlvbnMoY3NzRGVjbGFyYXRpb25zVGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVSYW5nZXMgPSBnZXRUb2tlbkV4Y2x1c2lvblJhbmdlcyhjc3NEZWNsYXJhdGlvbnNUZXh0KTtcclxuICAgICAgICBzcGxpdEV4Y2x1ZGluZyhjc3NEZWNsYXJhdGlvbnNUZXh0LCBcIjtcIiwgZXhjbHVkZVJhbmdlcykuZm9yRWFjaChcclxuICAgICAgICAgICAgKHBhcnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9uSW5kZXggPSBwYXJ0LmluZGV4T2YoXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9uSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0YW50SW5kZXggPSBwYXJ0LmluZGV4T2YoXCIhaW1wb3J0YW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IHBhcnQuc3Vic3RyaW5nKDAsIGNvbG9uSW5kZXgpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb25JbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50SW5kZXggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaW1wb3J0YW50SW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJ0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50OiBpbXBvcnRhbnRJbmRleCA+IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUGFyc2VkU3R5bGVSdWxlKHJ1bGUpIHtcclxuICAgICAgICByZXR1cm4gXCJzZWxlY3RvcnNcIiBpbiBydWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdENTUyhjc3NUZXh0KSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VDU1MoY3NzVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFBhcnNlZENTUyhwYXJzZWQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0UGFyc2VkQ1NTKHBhcnNlZCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICAgICAgY29uc3QgdGFiID0gXCIgICAgXCI7XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0UnVsZShydWxlLCBpbmRlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGFyc2VkU3R5bGVSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRTdHlsZVJ1bGUocnVsZSwgaW5kZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdEF0UnVsZShydWxlLCBpbmRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdEF0UnVsZSh7dHlwZSwgcXVlcnksIHJ1bGVzfSwgaW5kZW50KSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7aW5kZW50fSR7dHlwZX0gJHtxdWVyeX0ge2ApO1xyXG4gICAgICAgICAgICBydWxlcy5mb3JFYWNoKChjaGlsZCkgPT4gZm9ybWF0UnVsZShjaGlsZCwgYCR7aW5kZW50fSR7dGFifWApKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtpbmRlbnR9fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRTdHlsZVJ1bGUoe3NlbGVjdG9ycywgZGVjbGFyYXRpb25zfSwgaW5kZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTZWxlY3RvckluZGV4ID0gc2VsZWN0b3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtzZWxlY3Rvcn0ke2kgPCBsYXN0U2VsZWN0b3JJbmRleCA/IFwiLFwiIDogXCIge1wifWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBzb3J0RGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucyk7XHJcbiAgICAgICAgICAgIHNvcnRlZC5mb3JFYWNoKCh7cHJvcGVydHksIHZhbHVlLCBpbXBvcnRhbnR9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RhYn0ke3Byb3BlcnR5fTogJHt2YWx1ZX0ke2ltcG9ydGFudCA/IFwiICFpbXBvcnRhbnRcIiA6IFwiXCJ9O2BcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAke2luZGVudH19YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyRW1wdHlSdWxlcyhwYXJzZWQpO1xyXG4gICAgICAgIHBhcnNlZC5mb3JFYWNoKChydWxlKSA9PiBmb3JtYXRSdWxlKHJ1bGUsIFwiXCIpKTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNvcnREZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgcHJlZml4UmVnZXggPSAvXi1bYS16XS0vO1xyXG4gICAgICAgIHJldHVybiBbLi4uZGVjbGFyYXRpb25zXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFQcm9wID0gYS5wcm9wZXJ0eTtcclxuICAgICAgICAgICAgY29uc3QgYlByb3AgPSBiLnByb3BlcnR5O1xyXG4gICAgICAgICAgICBjb25zdCBhUHJlZml4ID0gYVByb3AubWF0Y2gocHJlZml4UmVnZXgpPy5bMF0gPz8gXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgYlByZWZpeCA9IGJQcm9wLm1hdGNoKHByZWZpeFJlZ2V4KT8uWzBdID8/IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFOb3JtID0gYVByZWZpeCA/IGFQcm9wLnJlcGxhY2UocHJlZml4UmVnZXgsIFwiXCIpIDogYVByb3A7XHJcbiAgICAgICAgICAgIGNvbnN0IGJOb3JtID0gYlByZWZpeCA/IGJQcm9wLnJlcGxhY2UocHJlZml4UmVnZXgsIFwiXCIpIDogYlByb3A7XHJcbiAgICAgICAgICAgIGlmIChhTm9ybSA9PT0gYk5vcm0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhUHJlZml4LmxvY2FsZUNvbXBhcmUoYlByZWZpeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFOb3JtLmxvY2FsZUNvbXBhcmUoYk5vcm0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYXJFbXB0eVJ1bGVzKHJ1bGVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHJ1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlc1tpXTtcclxuICAgICAgICAgICAgaWYgKGlzUGFyc2VkU3R5bGVSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5kZWNsYXJhdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJFbXB0eVJ1bGVzKHJ1bGUucnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUucnVsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJsb2JSZWdleCA9IC91cmxcXChcXFwiKGJsb2JcXDouKj8pXFxcIlxcKS9nO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVwbGFjZUJsb2JzKHRleHQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGdldE1hdGNoZXMoYmxvYlJlZ2V4LCB0ZXh0LCAxKS5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGxvYWRBc0RhdGFVUkwodXJsKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoYmxvYlJlZ2V4LCAoKSA9PiBgdXJsKFwiJHtkYXRhLnNoaWZ0KCl9XCIpYCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiYW5uZXIgPSBgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19fX19fX1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8gICAgICAgXFxcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgLj09LiAgICAuPT0uXHJcbiAgICAgICAgICAgICAgICAgICAgICgoICApKT09KCggICkpXHJcbiAgICAgICAgICAgICAgICAgICAgLyBcIj09XCIgICAgXCI9PVwiXFxcXFxyXG4gICAgICAgICAgICAgICAgICAgL19fX198fCB8fCB8fF9fX1xcXFxcclxuICAgICAgIF9fX19fX19fICAgICBfX19fICAgIF9fX19fX19fICBfX18gICAgX19fXHJcbiAgICAgICB8ICBfX18gIFxcXFwgICAvICAgIFxcXFwgICB8ICBfX18gIFxcXFwgfCAgfCAgLyAgL1xyXG4gICAgICAgfCAgfCAgXFxcXCAgXFxcXCAvICAvXFxcXCAgXFxcXCAgfCAgfCAgXFxcXCAgXFxcXHwgIHxfLyAgL1xyXG4gICAgICAgfCAgfCAgICkgIC8gIC9fX1xcXFwgIFxcXFwgfCAgfF9fLyAgL3wgIF9fXyAgXFxcXFxyXG4gICAgICAgfCAgfF9fLyAgLyAgX19fX19fICBcXFxcfCAgX19fXyAgXFxcXHwgIHwgIFxcXFwgIFxcXFxcclxuX19fX19fX3xfX19fX19fL19fLyBfX19fIFxcXFxfX1xcXFxfX3xfX19cXFxcX19cXFxcX198X19fXFxcXF9fXFxcXF9fX19cclxufCAgX19fICBcXFxcIHwgIF9fX18vIC8gICAgXFxcXCAgIHwgIF9fXyAgXFxcXCB8ICBfX19ffCAgX19fICBcXFxcXHJcbnwgIHwgIFxcXFwgIFxcXFx8ICB8X19fIC8gIC9cXFxcICBcXFxcICB8ICB8ICBcXFxcICBcXFxcfCAgfF9fX3wgIHwgIFxcXFwgIFxcXFxcclxufCAgfF9fLyAgL3wgIF9fX18vICAvX19cXFxcICBcXFxcIHwgIHwgICApICB8ICBfX19ffCAgfF9fLyAgL1xyXG58ICBfX19fICBcXFxcfCAgfF9fLyAgX19fX19fICBcXFxcfCAgfF9fLyAgL3wgIHxfX198ICBfX19fICBcXFxcXHJcbnxfX3wgICBcXFxcX19cXFxcX19fXy9fXy8gICAgICBcXFxcX19cXFxcX19fX19fXy8gfF9fX19fX3xfX3wgICBcXFxcX19cXFxcXHJcbiAgICAgICAgICAgICAgICBodHRwczovL2RhcmtyZWFkZXIub3JnXHJcbiovXHJcblxyXG4vKiEgRGFyayByZWFkZXIgZ2VuZXJhdGVkIENTUyB8IExpY2Vuc2VkIHVuZGVyIE1JVCBodHRwczovL2dpdGh1Yi5jb20vZGFya3JlYWRlci9kYXJrcmVhZGVyL2Jsb2IvbWFpbi9MSUNFTlNFICovXHJcbmA7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBjb2xsZWN0Q1NTKCkge1xyXG4gICAgICAgIGNvbnN0IGNzcyA9IFtiYW5uZXJdO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFN0YXRpY0NTUyhzZWxlY3RvciwgY29tbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0aWNTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGljU3R5bGUgJiYgc3RhdGljU3R5bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNzcy5wdXNoKGAvKiAke2NvbW1lbnR9ICovYCk7XHJcbiAgICAgICAgICAgICAgICBjc3MucHVzaChzdGF0aWNTdHlsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBjc3MucHVzaChcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIiwgXCJGYWxsYmFjayBTdHlsZVwiKTtcclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tdXNlci1hZ2VudFwiLCBcIlVzZXItQWdlbnQgU3R5bGVcIik7XHJcbiAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLXRleHRcIiwgXCJUZXh0IFN0eWxlXCIpO1xyXG4gICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS1pbnZlcnRcIiwgXCJJbnZlcnQgU3R5bGVcIik7XHJcbiAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLXZhcmlhYmxlc1wiLCBcIlZhcmlhYmxlcyBTdHlsZVwiKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENTUyA9IFtdO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya3JlYWRlci0tc3luY1wiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGZvckVhY2goZWxlbWVudC5zaGVldC5jc3NSdWxlcywgKHJ1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJ1bGUgJiYgcnVsZS5jc3NUZXh0ICYmIG1vZGlmaWVkQ1NTLnB1c2gocnVsZS5jc3NUZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG1vZGlmaWVkQ1NTLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRDU1MgPSBmb3JtYXRDU1MobW9kaWZpZWRDU1Muam9pbihcIlxcblwiKSk7XHJcbiAgICAgICAgICAgIGNzcy5wdXNoKFwiLyogTW9kaWZpZWQgQ1NTICovXCIpO1xyXG4gICAgICAgICAgICBjc3MucHVzaChhd2FpdCByZXBsYWNlQmxvYnMoZm9ybWF0dGVkQ1NTKSk7XHJcbiAgICAgICAgICAgIGNzcy5wdXNoKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tb3ZlcnJpZGVcIiwgXCJPdmVycmlkZSBTdHlsZVwiKTtcclxuICAgICAgICByZXR1cm4gY3NzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlzRGFya1JlYWRlckVuYWJsZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGlzSUZyYW1lID0gKCgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgZnVuY3Rpb24gZW5hYmxlKHRoZW1lT3B0aW9ucyA9IHt9LCBmaXhlcyA9IG51bGwpIHtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IHsuLi5ERUZBVUxUX1RIRU1FLCAuLi50aGVtZU9wdGlvbnN9O1xyXG4gICAgICAgIGlmICh0aGVtZS5lbmdpbmUgIT09IFRoZW1lRW5naW5lLmR5bmFtaWNUaGVtZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVtZSBlbmdpbmUgaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZU9yVXBkYXRlRHluYW1pY1RoZW1lSW50ZXJuYWwodGhlbWUsIGZpeGVzLCBpc0lGcmFtZSk7XHJcbiAgICAgICAgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRGFya1JlYWRlckVuYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkaXNhYmxlKCkge1xyXG4gICAgICAgIHJlbW92ZUR5bmFtaWNUaGVtZSgpO1xyXG4gICAgICAgIGlzRGFya1JlYWRlckVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhcmtTY2hlbWUgPSBtYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcclxuICAgIGxldCBzdG9yZSA9IHtcclxuICAgICAgICB0aGVtZU9wdGlvbnM6IG51bGwsXHJcbiAgICAgICAgZml4ZXM6IG51bGxcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb2xvclNjaGVtZSgpIHtcclxuICAgICAgICBpZiAoZGFya1NjaGVtZS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIGVuYWJsZShzdG9yZS50aGVtZU9wdGlvbnMsIHN0b3JlLmZpeGVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXV0byh0aGVtZU9wdGlvbnMgPSB7fSwgZml4ZXMgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdG9yZSA9IHt0aGVtZU9wdGlvbnMsIGZpeGVzfTtcclxuICAgICAgICAgICAgaGFuZGxlQ29sb3JTY2hlbWUoKTtcclxuICAgICAgICAgICAgaWYgKGlzTWF0Y2hNZWRpYUNoYW5nZUV2ZW50TGlzdGVuZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDb2xvclNjaGVtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLmFkZExpc3RlbmVyKGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ29sb3JTY2hlbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGFya1NjaGVtZS5yZW1vdmVMaXN0ZW5lcihoYW5kbGVDb2xvclNjaGVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGV4cG9ydEdlbmVyYXRlZENTUygpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgY29sbGVjdENTUygpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0RmV0Y2hNZXRob2QgPSBzZXRGZXRjaE1ldGhvZCQxO1xyXG5cclxuICAgIGV4cG9ydHMuYXV0byA9IGF1dG87XHJcbiAgICBleHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xyXG4gICAgZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XHJcbiAgICBleHBvcnRzLmV4cG9ydEdlbmVyYXRlZENTUyA9IGV4cG9ydEdlbmVyYXRlZENTUztcclxuICAgIGV4cG9ydHMuaXNFbmFibGVkID0gaXNFbmFibGVkO1xyXG4gICAgZXhwb3J0cy5zZXRGZXRjaE1ldGhvZCA9IHNldEZldGNoTWV0aG9kO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiB0cnVlfSk7XHJcbn0pO1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vICEgR0xPQkFMXHJcbnZhciBhZGRfMjUgPSAyNTtcclxuLyoqXHJcbiAqIGRldGVybWluZXMgdGhlIHZhbHVlIG9mIHRoZSBhZGRfMjUgdmFyaWFibGVcclxuICogdG9nZ2xlcyBkaXNwbGF5IG9mIHRoZSBidXR0b25cclxuICovXHJcbmZ1bmN0aW9uIGlzX2hsX21hdGhzKCkge1xyXG4gIHZhciBib29sX2hsX21hdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29sX2hsX21hdGhzXCIpO1xyXG4gIHZhciBhZGRpbmdfMjVfdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X3RleHRcIik7XHJcbiAgdmFyIHZhbHVlID0gYm9vbF9obF9tYXRocy52YWx1ZTtcclxuICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgYm9vbF9obF9tYXRocy52YWx1ZSA9IDE7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS50cmFuc2l0aW9uID0gXCIwLjJzXCI7XHJcbiAgICB2YWx1ZSA9IDE7XHJcbiAgICBhZGRfMjUgPSAyNTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9vbF9obF9tYXRocy52YWx1ZSA9IDA7XHJcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICBhZGRfMjUgPSAwO1xyXG4gICAgdmFsdWUgPSAwO1xyXG4gIH1cclxuICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxufVxyXG5pc19obF9tYXRocygpO1xyXG5cclxuLy8gXCJsaXN0ZW5zXCIgZm9yIGEgY2xpY2sgZnJvbSB0aGUgaXNfaGxfbWF0aHMgZnVuY3Rpb25cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29sX2hsX21hdGhzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpc19obF9tYXRocyk7XHJcblxyXG4vKipcclxuICogZGV0ZXJtaW5lcyB0aGUgdmFsdWUgb2YgdGhlIGxjdnAgdmFyaWFibGVcclxuICogdG9nZ2xlcyBkaXNwbGF5IG9mIHRoZSBidXR0b25cclxuICovXHJcblxyXG52YXIgbGN2cDtcclxuZnVuY3Rpb24gaXNfbGN2cCgpIHtcclxuICB2YXIgbGN2cF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGN2cFwiKTtcclxuICB2YXIgdmFsdWUgPSBsY3ZwX2lucHV0LnZhbHVlO1xyXG4gIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICBsY3ZwID0gdHJ1ZTtcclxuICAgIGxjdnBfaW5wdXQudmFsdWUgPSAxO1xyXG4gICAgdmFsdWUgPSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YWx1ZSA9IDE7XHJcbiAgICBsY3ZwID0gZmFsc2U7XHJcbiAgICBsY3ZwX2lucHV0LnZhbHVlID0gMDtcclxuICB9XHJcbiAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgcmV0dXJuIGxjdnA7XHJcbn1cclxuXHJcbmlzX2xjdnAoKTtcclxuXHJcbi8vIFwibGlzdGVuc1wiIGZvciBhIGNsaWNrIGZyb20gdGhlIGlzX2xjdnAgZnVuY3Rpb25cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsY3ZwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpc19sY3ZwKTtcclxuXHJcbi8vIGhpZGVzIHRoZSBcIkFkZGluZyArMjVcIiB0ZXh0IGJlZm9yZSB0aGUgcGFnZSBsb2Fkc1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV9jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxudmFyIHRhcmdldF9udW07XHJcbnZhciBobF9udW07XHJcbnZhciBvbF9udW07XHJcblxyXG4vKipcclxuICogQWRqdXN0cyB0aGUgZ3JhZGVzIHRoYXQgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBpbiBvcmRpbmFyeSBsZXZlbCBhbmQgaGlnaGVyIGxldmVsIGZvciBjb3JyZWN0IG91dHB1dFxyXG4gKiBmb3IgZXhhbXBsZSBhIEg2IGFuZCBPMiBhcmUgYm90aCB3b3J0aCA0NiBwb2ludHNcclxuICogQHBhcmFtIHthcnJheX0gbGV0dGVyX2dyYWRlc1xyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gYWRqdXN0b3IobGV0dGVyX2dyYWRlcykge1xyXG4gIHZhciBDSEFOR0VBQkxFUyA9IFtcImg1XCIsIFwiaDZcIiwgXCJoN1wiLCBcIm8xXCIsIFwibzJcIiwgXCJvM1wiXTtcclxuICB2YXIgSExfU1VCUyA9IFtcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiLCBcImg3XCJdO1xyXG5cclxuICB2YXIgY291bnRlZF9obCA9IDA7XHJcbiAgdmFyIGNvdW50ZWRfb2wgPSAwO1xyXG5cclxuICB2YXIgZGljdF9jaGFuZ2VhYmxlcyA9IHtcclxuICAgIGg1OiBcIm8xXCIsXHJcbiAgICBoNjogXCJvMlwiLFxyXG4gICAgaDc6IFwibzNcIixcclxuICAgIG8xOiBcImg1XCIsXHJcbiAgICBvMjogXCJoNlwiLFxyXG4gICAgbzM6IFwiaDdcIixcclxuICB9O1xyXG5cclxuICB2YXIgaGxfaW5kZXhfY2hhbmdlYWJsZXMgPSBbXTtcclxuICB2YXIgb2xfaW5kZXhfY2hhbmdlYWJsZXMgPSBbXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZXR0ZXJfZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgY3VycmVudCA9IGxldHRlcl9ncmFkZXNbaV07XHJcbiAgICBpZiAoY3VycmVudCBpbiBkaWN0X2NoYW5nZWFibGVzKSB7XHJcbiAgICAgIGlmIChjdXJyZW50IGluIENIQU5HRUFCTEVTKSB7XHJcbiAgICAgICAgaGxfaW5kZXhfY2hhbmdlYWJsZXMucHVzaChpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvbF9pbmRleF9jaGFuZ2VhYmxlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEhMX1NVQlMuaW5jbHVkZXMoY3VycmVudCkpIHtcclxuICAgICAgY291bnRlZF9obCArPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY291bnRlZF9vbCArPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIG1pc3NfbWF0Y2hpbmdfY291bnRzID0gY291bnRlZF9obCAhPSBobF9udW0gJiYgY291bnRlZF9vbCAhPSBvbF9udW07XHJcblxyXG4gIGlmIChtaXNzX21hdGNoaW5nX2NvdW50cykge1xyXG4gICAgdmFyIG5lZWRlZF9obCA9IGhsX251bSAtIGNvdW50ZWRfaGw7XHJcbiAgICB2YXIgbmVlZGVkX29sID0gb2xfbnVtIC0gY291bnRlZF9vbDtcclxuXHJcbiAgICBpZiAobmVlZGVkX2hsIDwgMCkge1xyXG4gICAgICBuZWVkZWRfaGwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG5lZWRlZF9vbCA8IDApIHtcclxuICAgICAgbmVlZGVkX29sID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2hhcmdlc19uZWVkZWQgPSBNYXRoLm1heChuZWVkZWRfaGwsIG5lZWRlZF9vbCk7XHJcbiAgICB2YXIgb2dfZ3JhZGU7XHJcbiAgICB2YXIgY2hhbmdlZF9ncmFkZTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBjaGFyZ2VzX25lZWRlZDsgaSsrKSB7XHJcbiAgICAgIHZhciBpbmRleCA9IG9sX2luZGV4X2NoYW5nZWFibGVzW2ldO1xyXG4gICAgICBvZ19ncmFkZSA9IGxldHRlcl9ncmFkZXNbaW5kZXhdO1xyXG5cclxuICAgICAgY2hhbmdlZF9ncmFkZSA9IGRpY3RfY2hhbmdlYWJsZXNbb2dfZ3JhZGVdO1xyXG4gICAgICBsZXR0ZXJfZ3JhZGVzW2luZGV4XSA9IGNoYW5nZWRfZ3JhZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobGN2cCkge1xyXG4gICAgdmFyIGxjdnBfbW9kdWxlcyA9IHtcclxuICAgICAgNjY6IFwiRGlzdGluY3Rpb25cIixcclxuICAgICAgNDY6IFwiTWVyaXRcIixcclxuICAgICAgMjg6IFwiUGFzc1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbGN2cF9ncmFkZXMgPSBbXCJoNFwiLCBcImg2XCIsIFwibzJcIiwgXCJvNFwiXTtcclxuXHJcbiAgICB2YXIgbGN2cF9wb2ludHMgPSB7XHJcbiAgICAgIGg0OiA2NixcclxuICAgICAgaDY6IDQ2LFxyXG4gICAgICBvMjogNDYsXHJcbiAgICAgIG80OiAyOCxcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNvbGxlY3RlZF9sY3ZwX3BvaW50cyA9IFtdO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY3VycmVudCA9IGxldHRlcl9ncmFkZXNbaV07XHJcbiAgICAgIGlmIChsY3ZwX2dyYWRlcy5pbmNsdWRlcyhjdXJyZW50KSkge1xyXG4gICAgICAgIGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5wdXNoKGxjdnBfcG9pbnRzW2N1cnJlbnRdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2xsZWN0ZWRfbGN2cF9wb2ludHMucHVzaCg5OTkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgbWluX2xjdnBfcG9pbnQgPSBNYXRoLm1pbiguLi5jb2xsZWN0ZWRfbGN2cF9wb2ludHMpO1xyXG4gICAgdmFyIG1pbl9sY3ZwX2luZGV4ID0gY29sbGVjdGVkX2xjdnBfcG9pbnRzLmluZGV4T2YobWluX2xjdnBfcG9pbnQpO1xyXG4gICAgdmFyIHZhbGlkX2xjdnBfY2hhbmdlID0gbWluX2xjdnBfcG9pbnQgIT0gOTk5O1xyXG5cclxuICAgIGlmICh2YWxpZF9sY3ZwX2NoYW5nZSkge1xyXG4gICAgICBsZXR0ZXJfZ3JhZGVzW21pbl9sY3ZwX2luZGV4XSA9IGxjdnBfbW9kdWxlc1ttaW5fbGN2cF9wb2ludF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGV0dGVyX2dyYWRlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIHllYXJseSBqb2tlIHRoYXQgd2lsbCBiZSBhY3RpdmF0ZWQgaW4gbWF5IGFuZCBqdW5lXHJcbiAqL1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyXCIpLmlubmVySFRNTCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbmZ1bmN0aW9uIG1vdGl2YXRlKCkge1xyXG4gIHNlY29uZHMgKz0gMTtcclxuICBpZiAoNTkgPD0gc2Vjb25kcyAmJiBzZWNvbmRzIDw9IDYwKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pbmZvXCIpLnNyYyA9IFwiaW1hZ2VzL2pva2Uud2VicFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pbmZvXCIpLnNyYyA9IFwiaW1hZ2VzL3BvaW50cy1zeXN0ZW0ud2VicFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNlY29uZHMgPiA2MCkge1xyXG4gICAgc2Vjb25kcyA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgc2Vjb25kcyA9IDA7XHJcbnZhciBkdCA9IG5ldyBEYXRlKCk7XHJcbnZhciBtb250aCA9IGR0LmdldE1vbnRoKCkgKyAxOyAvLyBjYXVzZSBvZiAwIGluZGV4aW5nIG9mIHRoZSAxMiBtb250aHMgYmVjb21lcyAwIC0gMTFcclxuaWYgKFs0LCA1XS5pbmNsdWRlcyhtb250aCkpIHtcclxuICBzZXRJbnRlcnZhbChtb3RpdmF0ZSwgMTAwMCk7XHJcbiAgbW90aXZhdGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGdyYWRlIGF2ZXJhZ2UgYW5kIHBvaW50cyB0byBncmFkZXMgYXMgbGlzdCBvZiBudW1iZXJzXHJcbiAqIEBwYXJhbSB7YXJyYXl9IHBvaW50c19uZWVkZWRcclxuICogQHJldHVybnMgYXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIGdhcl9hbmRfcHRnKHBvaW50c19uZWVkZWQpIHtcclxuICBwb2ludHNfbmVlZGVkID0gcG9pbnRzX25lZWRlZC5zb3J0KCk7XHJcblxyXG4gIHZhciBtaXhlZF9yYW5rcyA9IHtcclxuICAgIDEwMDogXCJoMVwiLFxyXG4gICAgODg6IFwiaDJcIixcclxuICAgIDc3OiBcImgzXCIsXHJcbiAgICA2NjogXCJoNFwiLFxyXG5cclxuICAgIDU2OiBcImg1L28xXCIsXHJcbiAgICA0NjogXCJoNi9vMlwiLFxyXG4gICAgMzc6IFwiaDcvbzNcIixcclxuICAgIDI4OiBcIm80XCIsXHJcbiAgICAyMDogXCJvNVwiLFxyXG4gICAgMTI6IFwibzZcIixcclxuICB9O1xyXG5cclxuICBpZiAoaGxfbnVtID4gMCkge1xyXG4gICAgbWl4ZWRfcmFua3NbNTZdID0gXCJoNVwiO1xyXG4gICAgbWl4ZWRfcmFua3NbNDZdID0gXCJoNlwiO1xyXG4gICAgbWl4ZWRfcmFua3NbMzddID0gXCJoN1wiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9sX251bSA+IDApIHtcclxuICAgIG1peGVkX3JhbmtzWzU2XSA9IFwibzFcIjtcclxuICAgIG1peGVkX3JhbmtzWzQ2XSA9IFwibzJcIjtcclxuICAgIG1peGVkX3JhbmtzWzM3XSA9IFwibzNcIjtcclxuICB9XHJcblxyXG4gIHZhciByYW5rcyA9IHtcclxuICAgIGgxOiA5MCxcclxuICAgIGgyOiA4MCxcclxuICAgIGgzOiA3MCxcclxuICAgIGg0OiA2MCxcclxuICAgIGg1OiA1NixcclxuICAgIGg2OiA0NixcclxuICAgIGg3OiAzNyxcclxuXHJcbiAgICBEaXN0aW5jdGlvbjogNjYsXHJcbiAgICBNZXJpdDogNDYsXHJcbiAgICBQYXNzOiAyOCxcclxuXHJcbiAgICBvMTogNTYsXHJcbiAgICBvMjogNDYsXHJcbiAgICBvMzogMzcsXHJcbiAgICBvNDogMjgsXHJcbiAgICBvNTogMjAsXHJcbiAgICBvNjogMTIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKGhsX251bSA+IDApIHtcclxuICAgIHJhbmtzW1wiaDUvbzFcIl0gPSA1MDtcclxuICAgIHJhbmtzW1wiaDYvbzJcIl0gPSA0MDtcclxuICAgIHJhbmtzW1wiaDcvbzNcIl0gPSAzMDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmFua3NbXCJoNS9vMVwiXSA9IDkwO1xyXG4gICAgcmFua3NbXCJoNi9vMlwiXSA9IDgwO1xyXG4gICAgcmFua3NbXCJoNy9vM1wiXSA9IDcwO1xyXG4gIH1cclxuXHJcbiAgdmFyIGdyYWRlc19zb3VsdGlvbiA9IFtdO1xyXG4gIHZhciB0b3RhbCA9IDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHNfbmVlZGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocG9pbnRzX25lZWRlZFtpXSAhPSAyNSkge1xyXG4gICAgICBncmFkZXNfc291bHRpb24ucHVzaChtaXhlZF9yYW5rc1twb2ludHNfbmVlZGVkW2ldXSk7XHJcbiAgICAgIHRvdGFsICs9IHJhbmtzW21peGVkX3JhbmtzW3BvaW50c19uZWVkZWRbaV1dXTtcclxuICAgIH1cclxuICB9XHJcbiAgdG90YWwgPSB0b3RhbCAvIChobF9udW0gKyBvbF9udW0pO1xyXG4gIHZhciBwZXJjZW50YWdlX2F2ZyA9IFN0cmluZyhNYXRoLnJvdW5kKHRvdGFsKSkgKyBcIiVcIjtcclxuICBncmFkZXNfc291bHRpb24gPSBhZGp1c3RvcihncmFkZXNfc291bHRpb24pO1xyXG5cclxuICAvLyBwZXJjZW50YWdlIGFzIGEgc3RyaW5nLCBhbiBhcnJheSBvZiBncmFkZXMgYXMgbnVtYmVyc1xyXG4gIHJldHVybiBbcGVyY2VudGFnZV9hdmcsIGdyYWRlc19zb3VsdGlvbl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlfcGx1c18yNShib29sX2hsX21hdGhzKSB7XHJcbiAgdmFyIGFkZGluZ18yNV9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV9jb250YWluZXJcIik7XHJcbiAgaWYgKGJvb2xfaGxfbWF0aHMpIHtcclxuICAgIGFkZGluZ18yNV9jb250YWluZXIuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRpbmdfMjVfY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZF9jb21tYXMoZ3JhZGVzKSB7XHJcbiAgZ3JhZGVzID0gZ3JhZGVzLnRvU3RyaW5nKCk7XHJcbiAgZ3JhZGVzID0gZ3JhZGVzLnJlcGxhY2VBbGwoXCIsXCIsIFwiPHN0cm9uZyBjbGFzcz0ncmVkJz4sPC9zdHJvbmc+XCIpO1xyXG5cclxuICByZXR1cm4gZ3JhZGVzO1xyXG59XHJcblxyXG4vKipcclxuICogaW5jcmVtZW50cyBhIGdyYWRlJ3MgdmFsdWUgdG8gdGhlIG5leHQgb25lXHJcbiAqIGZvciBleGFtcGxlIGluY3JlbWVudCBhIGdyYWRlIHRoYXQgaGFzIHRoZSB2YWx1ZSBvZiA4OCB3aWxsIGJlIGluY3JlYXNlZCB0byAxMDBcclxuICogQHBhcmFtIHthcnJheX0gZ3JhZGVzXHJcbiAqIEBwYXJhbSB7aW50fSBpbmRleFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1hdGhzX3BsdXNfMjVcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIHNpbmdsZV9jaGFuZ2UoZ3JhZGVzLCBpbmRleCwgbWF0aHNfcGx1c18yNSkge1xyXG4gIGNvbnN0IGlzX2luX2RpY3QgPSBbMTIsIDIwLCAyOCwgMzcsIDQ2LCA1NiwgNjYsIDc3LCA4OCwgMTAwXTtcclxuICB2YXIgZGljdF9jaGFuZ2VhYmxlcyA9IHtcclxuICAgIDEyOiAyMCxcclxuICAgIDIwOiAyOCxcclxuICAgIDI4OiAzNyxcclxuICAgIDM3OiA0NixcclxuICAgIDQ2OiA1NixcclxuICAgIDU2OiA2NixcclxuICAgIDY2OiA3NyxcclxuICAgIDc3OiA4OCxcclxuICAgIDg4OiAxMDAsXHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzX2luX2RpY3QuaW5jbHVkZXMoZ3JhZGVzW2luZGV4XSkpIHtcclxuICAgIGdyYWRlc1tpbmRleF0gPSBkaWN0X2NoYW5nZWFibGVzW2dyYWRlc1tpbmRleF1dO1xyXG4gIH1cclxuICBpZiAobWF0aHNfcGx1c18yNSAmJiBncmFkZXMuaW5jbHVkZXMoMjUpID09IGZhbHNlKSB7XHJcbiAgICBncmFkZXMucHVzaCgyNSk7XHJcbiAgfVxyXG4gIHJldHVybiBncmFkZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bShhcnJheSkge1xyXG4gIHJldHVybiBhcnJheS5maWx0ZXIoKGVsKSA9PiArZWwpLnJlZHVjZSgoYWNjLCBjdikgPT4gYWNjICsgY3YsIDApO1xyXG59XHJcblxyXG4vKipcclxuICogZ2VuZXJhdGVzIGEgc3RhcnRpbmcgcG9pbnQgb2YgYW4gYXJyYXkgb2Ygd2hpY2ggaW5kaXZpZHVhbCB2YWx1ZXMgd2lsbCBiZSBpbmNyZWFzZWQgbGF0ZXJcclxuICogQHBhcmFtIHtpbnR9IGhsX3N1YnNcclxuICogQHBhcmFtIHtpbnR9IG9sX3N1YnNcclxuICogQHJldHVybnMgYXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKSB7XHJcbiAgdmFyIGdyYWRlcyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGxfc3ViczsgaSsrKSB7XHJcbiAgICBncmFkZXMucHVzaCgzNyk7XHJcbiAgfVxyXG4gIGZvciAoaSA9IDA7IGkgPCBvbF9zdWJzOyBpKyspIHtcclxuICAgIGdyYWRlcy5wdXNoKDEyKTtcclxuICB9XHJcbiAgcmV0dXJuIGdyYWRlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGVzdF9wb2ludHNfcG9zcyhobF9zdWJzLCBvbF9zdWJzLCBtYXRoc19wbHVzXzI1KSB7XHJcbiAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gIGNvdW50ZXIgKz0gMTAwICogaGxfc3VicyArIDU2ICogb2xfc3VicztcclxuICBpZiAobWF0aHNfcGx1c18yNSkge1xyXG4gICAgY291bnRlciArPSAyNTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudGVyO1xyXG59XHJcblxyXG4vKipcclxuICogdGhpcyBpcyB3aG9sZSBhbGdvcm90aGltIGJlaGluZCBnZW5lcmF0ZSBjb3JyZWN0IG91dHB1dFxyXG4gKiBpbiBzaG9ydCBpdCBjcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IGFyZSBncmFkdWFsbHkgaW5jcmVhc2VkIHVudGlsIGl0J3Mgb3ZlcmFsbCB2YWx1ZSBpcyBpbmNyZWFzZWRcclxuICogdW50aWwgaXQgXCJyZWFjaGVzXCIgdGhlIGNhbyBwb2ludHMgdGFyZ2V0XHJcbiAqIEBwYXJhbSB7dGFyZ2V0fSB0YXJnZXRcclxuICogQHBhcmFtIHtobF9zdWJzfSBobF9zdWJzXHJcbiAqIEBwYXJhbSB7b2xfc3Vic30gb2xfc3Vic1xyXG4gKiBAcGFyYW0ge21hdGhzX3BsdXNfMjV9IG1hdGhzX3BsdXNfMjVcclxuICogQHJldHVybnMgYXJyYXlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWluKHRhcmdldCwgaGxfc3Vicywgb2xfc3VicywgbWF0aHNfcGx1c18yNSkge1xyXG4gIHZhciB0b3RhbF9zdWJzID0gaGxfc3VicyArIG9sX3N1YnM7XHJcbiAgdmFyIGN1cnJlbnRfZ3JhZGVzID0gc3RhcnRpbmdfZ3JhZGVzKGhsX3N1YnMsIG9sX3N1YnMpO1xyXG4gIHZhciBjdXJyZW50X3BvaW50cyA9IHN1bShjdXJyZW50X2dyYWRlcyk7XHJcbiAgdmFyIGluZGV4ID0gMDtcclxuICB2YXIgbWF4X2xpbWl0ID0gaGlnaGVzdF9wb2ludHNfcG9zcyhobF9zdWJzLCBvbF9zdWJzLCBtYXRoc19wbHVzXzI1KTtcclxuICB2YXIgd2l0aGluX3JhbmdlID1cclxuICAgIGN1cnJlbnRfcG9pbnRzIDw9IG1heF9saW1pdCAmJlxyXG4gICAgdGFyZ2V0IDw9IG1heF9saW1pdCAmJlxyXG4gICAgY3VycmVudF9wb2ludHMgPCB0YXJnZXQ7XHJcblxyXG4gIHdoaWxlICh3aXRoaW5fcmFuZ2UpIHtcclxuICAgIGN1cnJlbnRfZ3JhZGVzID0gc2luZ2xlX2NoYW5nZShjdXJyZW50X2dyYWRlcywgaW5kZXgsIG1hdGhzX3BsdXNfMjUpO1xyXG4gICAgY3VycmVudF9wb2ludHMgPSBzdW0oY3VycmVudF9ncmFkZXMpO1xyXG4gICAgd2l0aGluX3JhbmdlID1cclxuICAgICAgY3VycmVudF9wb2ludHMgPD0gbWF4X2xpbWl0ICYmXHJcbiAgICAgIHRhcmdldCA8PSBtYXhfbGltaXQgJiZcclxuICAgICAgY3VycmVudF9wb2ludHMgPCB0YXJnZXQ7XHJcbiAgICBpbmRleCArPSAxO1xyXG5cclxuICAgIGlmIChpbmRleCA9PSB0b3RhbF9zdWJzKSB7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50X3BvaW50cyA8IHRhcmdldCkge1xyXG4gICAgY3VycmVudF9ncmFkZXMgPSBbXTtcclxuICAgIGN1cnJlbnRfcG9pbnRzID0gW107XHJcbiAgfVxyXG4gIHJldHVybiBbY3VycmVudF9ncmFkZXMsIGN1cnJlbnRfcG9pbnRzXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlX2lucHV0cygpIHtcclxuICB2YXIgdGFyZ2V0X2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRfdGV4dFwiKTtcclxuICB0YXJnZXRfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgaGxfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhsX3N1YnNfdGV4dFwiKTtcclxuICBobF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBvbF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xfc3Vic190ZXh0XCIpO1xyXG4gIG9sX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICB9KTtcclxufVxyXG5cclxudXBkYXRlX2lucHV0cygpO1xyXG5cclxuLy8gdG8gaGlkZSB0aGUgYm94IG9mIG91dHB1dCB3aGVuIHRoZSBwYWdlIGxvYWRlc1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdF9jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZF9pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG5mdW5jdGlvbiBwdWxzZUlucHV0cygpIHtcclxuICBsZXQgaW5wdXRFbGVtZW50ID0gW1xyXG4gICAgXCJ0YXJnZXRfdGV4dFwiLFxyXG4gICAgXCJobF9zdWJzX3RleHRcIixcclxuICAgIFwib2xfc3Vic190ZXh0XCIsXHJcbiAgICBcImJvb2xfaGxfbWF0aHNcIixcclxuICAgIFwibGN2cFwiLFxyXG4gIF07XHJcblxyXG4gIGlucHV0RWxlbWVudC5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJwdWxzZUFuaW1hdGlvblwiKTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0b3ItY29udGFpbmVyXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5yZW1vdmUoXCJwdWxzZUFuaW1hdGlvblwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxucHVsc2VJbnB1dHMoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbmRfcG9pbnRzX25lZWRlZCgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdF9jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRfY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG5cclxuICB0YXJnZXRfbnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0X3RleHRcIikudmFsdWUpO1xyXG4gIGhsX251bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhsX3N1YnNfdGV4dFwiKS52YWx1ZSk7XHJcbiAgb2xfbnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xfc3Vic190ZXh0XCIpLnZhbHVlKTtcclxuXHJcbiAgLy8gY2hlY2sgZm9yIGludmFsaWQgaW5wdXRcclxuICB2YXIgaW52YWxpZF90YXJnZXRfaW5wdXQgPSB0YXJnZXRfbnVtIDw9IDAgfHwgdGFyZ2V0X251bSA+IDYyNTtcclxuICB2YXIgaW52YWxpZF9zdWJzX2lucHV0ID0gaGxfbnVtIDwgMCB8fCBvbF9udW0gPCAwO1xyXG4gIHZhciBtYXhfcHRzID0gaGxfbnVtICogMTAwICsgb2xfbnVtICogNTYgKyBhZGRfMjU7XHJcbiAgdmFyIGludmFsaWRfcmFuZ2UgPSBtYXhfcHRzID49IHRhcmdldF9udW0gPT0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IHJhbmdlX2Vycm9yX21zZyA9IGBJdCdzIGltcG9zc2libGUgdG8gYWNoaWV2ZSAke3RhcmdldF9udW19IENBTyBwb2ludHMgd2l0aCAke2hsX251bX0gaGlnaGVyLWxldmVsIHN1YmplY3RzIGFuZCAke29sX251bX0gb3JkaW5hcnktbGV2ZWwgc3ViamVjdHMuYDtcclxuICBjb25zdCBwdHNfZXJyb3JfbXNnID0gXCJZb3VyIGlucHV0dGVkIENBTyBwb2ludHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDYyNS5cIjtcclxuICBjb25zdCBzdWJqZWN0c19lcnJvcl9tc2cgPSBcIllvdSBjYW4ndCBoYXZlIGEgbmVnYXRpdmUgYW1vdXQgb2Ygc3ViamVjdHNcIjtcclxuXHJcbiAgdmFyIGVycm9yX3N0YXR1cyA9IFwiXCI7XHJcblxyXG4gIGlmIChpbnZhbGlkX3JhbmdlKSB7XHJcbiAgICBlcnJvcl9zdGF0dXMgKz0gcmFuZ2VfZXJyb3JfbXNnICsgXCJcXG5cIjtcclxuICB9XHJcbiAgaWYgKGludmFsaWRfdGFyZ2V0X2lucHV0KSB7XHJcbiAgICBlcnJvcl9zdGF0dXMgKz0gcHRzX2Vycm9yX21zZyArIFwiXFxuXCI7XHJcbiAgfVxyXG4gIGlmIChpbnZhbGlkX3N1YnNfaW5wdXQpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSBzdWJqZWN0c19lcnJvcl9tc2cgKyBcIlxcblwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IGludmFsaWRfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIik7XHJcbiAgbGV0IGluZm9fY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX2NvbnRhaW5lclwiKTtcclxuICBsZXQgc291bHRpb25fb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VsdGlvbl9vdXRwdXRcIik7XHJcblxyXG4gIGlmIChlcnJvcl9zdGF0dXMgIT0gXCJcIikge1xyXG4gICAgaW52YWxpZF9pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZUluXCIpO1xyXG4gICAgaW52YWxpZF9pbnB1dC5vZmZzZXRXaWR0aGw7XHJcbiAgICBpbnZhbGlkX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJmYWRlSW5cIik7XHJcblxyXG4gICAgaW52YWxpZF9pbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaW52YWxpZF9pbnB1dC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICBpbnZhbGlkX2lucHV0LmlubmVySFRNTCA9IGVycm9yX3N0YXR1cztcclxuXHJcbiAgICBpbmZvX2NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBzb3VsdGlvbl9vdXRwdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpbmdfMjVfY29udGFpbmVyXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuXHJcbiAgICBpZiAodGFyZ2V0X251bSAhPSAwICYmIChobF9udW0gIT0gMCB8fCBvbF9udW0gIT0gMCkpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRfY29udGFpbmVyXCIpLnNjcm9sbEludG9WaWV3KCk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0b3ItY29udGFpbmVyXCIpLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpbmZvX2NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICBpbmZvX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgc291bHRpb25fb3V0cHV0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdmFyIG1hdGhzX3BsdXNfMjU7XHJcbiAgICBpZiAoYWRkXzI1ID09IDI1KSB7XHJcbiAgICAgIG1hdGhzX3BsdXNfMjUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWF0aHNfcGx1c18yNSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIG1hdGNoZXNfaW5mbyA9IG1haW4odGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0sIG1hdGhzX3BsdXNfMjUpO1xyXG4gICAgdmFyIHBvaW50c19saXN0ID0gbWF0Y2hlc19pbmZvWzBdO1xyXG4gICAgdmFyIHBvaW50c19yZXEgPSBtYXRjaGVzX2luZm9bMV07XHJcblxyXG4gICAgaWYgKHBvaW50c19saXN0LmluY2x1ZGVzKDI1KSkge1xyXG4gICAgICBkaXNwbGF5X3BsdXNfMjUodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwbGF5X3BsdXNfMjUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdmFyIG91dHB1dF9pbmZvID0gZ2FyX2FuZF9wdGcocG9pbnRzX2xpc3QpO1xyXG5cclxuICAgIHZhciBncmFkZV9hdmcgPSBvdXRwdXRfaW5mb1swXTtcclxuICAgIHZhciByZXFfcmVzdWx0cyA9IG91dHB1dF9pbmZvWzFdOyAvLyB0aGVzZSBhcmUgbGV0dGVyIGdyYWRlc1xyXG4gICAgcmVxX3Jlc3VsdHMgPSByZWRfY29tbWFzKHJlcV9yZXN1bHRzKTtcclxuXHJcbiAgICBsZXQgZWxlbV9yZXFfcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxX3Jlc3VsdHNcIik7XHJcblxyXG4gICAgaWYgKGVsZW1fcmVxX3Jlc3VsdHMudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvaW50c19yZXFcIikuaW5uZXJIVE1MID0gU3RyaW5nKHBvaW50c19yZXEpO1xyXG4gICAgICBlbGVtX3JlcV9yZXN1bHRzLmlubmVySFRNTCA9IFN0cmluZyhyZXFfcmVzdWx0cyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhZGVfYXZnX3JlcVwiKS5pbm5lckhUTUwgPSBTdHJpbmcoZ3JhZGVfYXZnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnZhciBnb2pvZGV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2pvZGV2XCIpO1xyXG5nb2pvZGV2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gIGdvam9kZXYuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVJblwiKTtcclxuICBnb2pvZGV2Lm9mZnNldFdpZHRoO1xyXG4gIGdvam9kZXYuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuXHJcbiAgZ29qb2Rldi5zcmMgPSBcImltYWdlcy9nb2pvZGV2LndlYnBcIjtcclxufSk7XHJcblxyXG5nb2pvZGV2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgZ29qb2Rldi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZUluXCIpO1xyXG4gIGdvam9kZXYub2Zmc2V0V2lkdGg7XHJcbiAgZ29qb2Rldi5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG5cclxuICBnb2pvZGV2LnNyYyA9IFwiaW1hZ2VzL2xvZ28ud2VicFwiO1xyXG59KTtcclxuXHJcbmNvbnN0IERhcmtSZWFkZXIgPSByZXF1aXJlKFwiZGFya3JlYWRlclwiKTtcclxudmFyIGRhcmtUaGVtZSA9IGZhbHNlO1xyXG5jb25zdCBkYXJrVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrVG9nZ2xlXCIpO1xyXG5kYXJrVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZGFya1RoZW1lID0gIWRhcmtUaGVtZTtcclxuXHJcbiAgaWYgKGRhcmtUaGVtZSkge1xyXG4gICAgRGFya1JlYWRlci5hdXRvKHtcclxuICAgICAgYnJpZ2h0bmVzczogMTAwLFxyXG4gICAgICBjb250cmFzdDogMTAwLFxyXG4gICAgICBkYXJrU2NoZW1lVGV4dENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgRGFya1JlYWRlci5kaXNhYmxlKCk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKFwiZGFya1RvZ2dsZTogXCIsIGRhcmtUaGVtZSk7XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBS0EsT0FBQyxTQUFVLFFBQVEsU0FBUztBQUN4QixlQUFPLFlBQVksWUFBWSxPQUFPLFdBQVcsY0FDM0MsUUFBUSxPQUFPLElBQ2YsT0FBTyxXQUFXLGNBQWMsT0FBTyxNQUNyQyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sS0FDekIsU0FDRSxPQUFPLGVBQWUsY0FDaEIsYUFDQSxVQUFVLE1BQ3BCLFFBQVMsT0FBTyxhQUFhLENBQUMsQ0FBRTtBQUFBLE1BQzVDLEdBQUcsU0FBTSxTQUFVQSxVQUFTO0FBQ3hCO0FBRUEsWUFBSTtBQUNKLFNBQUMsU0FBVUMsb0JBQW1CO0FBQzFCLFVBQUFBLG1CQUFrQixVQUFVLElBQUk7QUFDaEMsVUFBQUEsbUJBQWtCLG1CQUFtQixJQUFJO0FBQ3pDLFVBQUFBLG1CQUFrQixzQkFBc0IsSUFDcEM7QUFDSixVQUFBQSxtQkFBa0IsMEJBQTBCLElBQ3hDO0FBQ0osVUFBQUEsbUJBQWtCLGlCQUFpQixJQUFJO0FBQ3ZDLFVBQUFBLG1CQUFrQixXQUFXLElBQUk7QUFDakMsVUFBQUEsbUJBQWtCLG1CQUFtQixJQUFJO0FBQ3pDLFVBQUFBLG1CQUFrQixtQkFBbUIsSUFBSTtBQUN6QyxVQUFBQSxtQkFBa0Isd0JBQXdCLElBQ3RDO0FBQ0osVUFBQUEsbUJBQWtCLGFBQWEsSUFBSTtBQUNuQyxVQUFBQSxtQkFBa0IsK0JBQStCLElB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QUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLFlBQ1AsZ0JBQWdCO0FBQUEsWUFDaEIsVUFBVTtBQUFBLFlBQ1YsU0FBUztBQUFBLFlBQ1QsTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBLFlBQ1YsZUFBZTtBQUFBLFlBQ2YsVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBLFlBQ1YsV0FBVztBQUFBLFlBQ1gsV0FBVztBQUFBLFlBQ1gsYUFBYTtBQUFBLFlBQ2IsZ0JBQWdCO0FBQUEsWUFDaEIsWUFBWTtBQUFBLFlBQ1osWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsWUFBWTtBQUFBLFlBQ1osY0FBYztBQUFBLFlBQ2QsZUFBZTtBQUFBLFlBQ2YsZUFBZTtBQUFBLFlBQ2YsZUFBZTtBQUFBLFlBQ2YsZUFBZTtBQUFBLFlBQ2YsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLFlBQ1QsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsYUFBYTtBQUFBLFlBQ2IsYUFBYTtBQUFBLFlBQ2IsU0FBUztBQUFBLFlBQ1QsV0FBVztBQUFBLFlBQ1gsWUFBWTtBQUFBLFlBQ1osTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsYUFBYTtBQUFBLFlBQ2IsVUFBVTtBQUFBLFlBQ1YsU0FBUztBQUFBLFlBQ1QsV0FBVztBQUFBLFlBQ1gsUUFBUTtBQUFBLFlBQ1IsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFlBQ1AsVUFBVTtBQUFBLFlBQ1YsZUFBZTtBQUFBLFlBQ2YsV0FBVztBQUFBLFlBQ1gsY0FBYztBQUFBLFlBQ2QsV0FBVztBQUFBLFlBQ1gsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsc0JBQXNCO0FBQUEsWUFDdEIsV0FBVztBQUFBLFlBQ1gsV0FBVztBQUFBLFlBQ1gsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsYUFBYTtBQUFBLFlBQ2IsZUFBZTtBQUFBLFlBQ2YsY0FBYztBQUFBLFlBQ2QsZ0JBQWdCO0FBQUEsWUFDaEIsZ0JBQWdCO0FBQUEsWUFDaEIsZ0JBQWdCO0FBQUEsWUFDaEIsYUFBYTtBQUFBLFlBQ2IsTUFBTTtBQUFBLFlBQ04sV0FBVztBQUFBLFlBQ1gsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1Isa0JBQWtCO0FBQUEsWUFDbEIsWUFBWTtBQUFBLFlBQ1osY0FBYztBQUFBLFlBQ2QsY0FBYztBQUFBLFlBQ2QsZ0JBQWdCO0FBQUEsWUFDaEIsaUJBQWlCO0FBQUEsWUFDakIsbUJBQW1CO0FBQUEsWUFDbkIsaUJBQWlCO0FBQUEsWUFDakIsaUJBQWlCO0FBQUEsWUFDakIsY0FBYztBQUFBLFlBQ2QsV0FBVztBQUFBLFlBQ1gsV0FBVztBQUFBLFlBQ1gsVUFBVTtBQUFBLFlBQ1YsYUFBYTtBQUFBLFlBQ2IsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFlBQ1AsV0FBVztBQUFBLFlBQ1gsUUFBUTtBQUFBLFlBQ1IsV0FBVztBQUFBLFlBQ1gsUUFBUTtBQUFBLFlBQ1IsZUFBZTtBQUFBLFlBQ2YsV0FBVztBQUFBLFlBQ1gsZUFBZTtBQUFBLFlBQ2YsZUFBZTtBQUFBLFlBQ2YsWUFBWTtBQUFBLFlBQ1osV0FBVztBQUFBLFlBQ1gsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sWUFBWTtBQUFBLFlBQ1osUUFBUTtBQUFBLFlBQ1IsZUFBZTtBQUFBLFlBQ2YsS0FBSztBQUFBLFlBQ0wsV0FBVztBQUFBLFlBQ1gsV0FBVztBQUFBLFlBQ1gsYUFBYTtBQUFBLFlBQ2IsUUFBUTtBQUFBLFlBQ1IsWUFBWTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsVUFBVTtBQUFBLFlBQ1YsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFlBQ1IsU0FBUztBQUFBLFlBQ1QsV0FBVztBQUFBLFlBQ1gs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LFVBQVEsaUJBQWlCLFlBQVksTUFBTTtBQUN6QyxZQUFRLFVBQVUsT0FBTyxRQUFRO0FBQ2pDLFlBQVE7QUFDUixZQUFRLFVBQVUsSUFBSSxRQUFRO0FBRTlCLFlBQVEsTUFBTTtBQUFBLEVBQ2hCLENBQUM7QUFFRCxNQUFNLGFBQWE7QUFDbkIsTUFBSSxZQUFZO0FBQ2hCLE1BQU0sYUFBYSxTQUFTLGVBQWUsWUFBWTtBQUN2RCxhQUFXLGlCQUFpQixTQUFTLE1BQU07QUFDekMsZ0JBQVksQ0FBQztBQUViLFFBQUksV0FBVztBQUNiLGlCQUFXLEtBQUs7QUFBQSxRQUNkLFlBQVk7QUFBQSxRQUNaLFVBQVU7QUFBQSxRQUNWLHFCQUFxQjtBQUFBLE1BQ3ZCLENBQUM7QUFBQSxJQUNILE9BQU87QUFDTCxpQkFBVyxRQUFRO0FBQUEsSUFDckI7QUFDQSxZQUFRLElBQUksZ0JBQWdCLFNBQVM7QUFBQSxFQUN2QyxDQUFDOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIk1lc3NhZ2VUeXBlVUl0b0JHIiwgIk1lc3NhZ2VUeXBlQkd0b1VJIiwgIkRlYnVnTWVzc2FnZVR5cGVCR3RvVUkiLCAiTWVzc2FnZVR5cGVCR3RvQ1MiLCAiRGVidWdNZXNzYWdlVHlwZUJHdG9DUyIsICJNZXNzYWdlVHlwZUNTdG9CRyIsICJEZWJ1Z01lc3NhZ2VUeXBlQ1N0b0JHIiwgIk1lc3NhZ2VUeXBlQ1N0b1VJIiwgIk1lc3NhZ2VUeXBlVUl0b0NTIiwgImZldGNoIiwgIlRoZW1lRW5naW5lIiwgIkF1dG9tYXRpb25Nb2RlIiwgIm9ic2VydmVyIiwgInBhcnNlZFVSTCIsICJyIiwgImIiLCAiZyIsICJ4IiwgInN1bSIsICJ0aGVtZSIsICJseCIsICJoeCIsICJGaWx0ZXJNb2RlIiwgIm0iLCAidmFyaWFibGVzU3RvcmUiLCAiaXNJRnJhbWUiLCAibWF0Y2hlcyIsICJ2YWx1ZSIsICJfYSIsICJtb2QiLCAiY2xlYW5lcnMiLCAiaSIsICJjb21tYW5kcyIsICJkaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zIiwgIm92ZXJyaWRlcyIsICJlbGVtZW50cyIsICJyb290VmFyc1N0eWxlIiwgImUiLCAiY3NzUnVsZXMiLCAibm9kZSIsICJpZCIsICJmaXhlcyJdCn0K
