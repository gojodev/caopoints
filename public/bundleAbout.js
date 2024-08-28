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

  // public/about.js
  document.getElementById("year").innerHTML = (/* @__PURE__ */ new Date()).getFullYear();
  function about_me() {
    var bday = /* @__PURE__ */ new Date("06/08/2004");
    var today = /* @__PURE__ */ new Date();
    var time_diff = today.getTime() - bday.getTime();
    time_diff = time_diff / 1e3 / 31556952;
    let age = time_diff.toFixed(3);
    document.getElementById("founder-name").innerHTML = "Emmanuel Koledoye (~".concat(age, ")");
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
  var DarkReader = require_darkreader();
  DarkReader.auto({
    brightness: 100,
    contrast: 100,
    darkSchemeTextColor: "white"
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2RhcmtyZWFkZXIvZGFya3JlYWRlci5qcyIsICJhYm91dC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIERhcmsgUmVhZGVyIHY0LjkuODlcclxuICogaHR0cHM6Ly9kYXJrcmVhZGVyLm9yZy9cclxuICovXHJcblxyXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gICAgdHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgID8gZmFjdG9yeShleHBvcnRzKVxyXG4gICAgICAgIDogdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWRcclxuICAgICAgICAgID8gZGVmaW5lKFtcImV4cG9ydHNcIl0sIGZhY3RvcnkpXHJcbiAgICAgICAgICA6ICgoZ2xvYmFsID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBnbG9iYWxUaGlzXHJcbiAgICAgICAgICAgICAgICAgICAgOiBnbG9iYWwgfHwgc2VsZiksXHJcbiAgICAgICAgICAgIGZhY3RvcnkoKGdsb2JhbC5EYXJrUmVhZGVyID0ge30pKSk7XHJcbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgTWVzc2FnZVR5cGVVSXRvQkc7XHJcbiAgICAoZnVuY3Rpb24gKE1lc3NhZ2VUeXBlVUl0b0JHKSB7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJHRVRfREFUQVwiXSA9IFwidWktYmctZ2V0LWRhdGFcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkdFVF9ERVZUT09MU19EQVRBXCJdID0gXCJ1aS1iZy1nZXQtZGV2dG9vbHMtZGF0YVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiU1VCU0NSSUJFX1RPX0NIQU5HRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLXN1YnNjcmliZS10by1jaGFuZ2VzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJVTlNVQlNDUklCRV9GUk9NX0NIQU5HRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLXVuc3Vic2NyaWJlLWZyb20tY2hhbmdlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiQ0hBTkdFX1NFVFRJTkdTXCJdID0gXCJ1aS1iZy1jaGFuZ2Utc2V0dGluZ3NcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlNFVF9USEVNRVwiXSA9IFwidWktYmctc2V0LXRoZW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJUT0dHTEVfQUNUSVZFX1RBQlwiXSA9IFwidWktYmctdG9nZ2xlLWFjdGl2ZS10YWJcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIk1BUktfTkVXU19BU19SRUFEXCJdID0gXCJ1aS1iZy1tYXJrLW5ld3MtYXMtcmVhZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiTUFSS19ORVdTX0FTX0RJU1BMQVlFRFwiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctbWFyay1uZXdzLWFzLWRpc3BsYXllZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiTE9BRF9DT05GSUdcIl0gPSBcInVpLWJnLWxvYWQtY29uZmlnXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJBUFBMWV9ERVZfRFlOQU1JQ19USEVNRV9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctYXBwbHktZGV2LWR5bmFtaWMtdGhlbWUtZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlJFU0VUX0RFVl9EWU5BTUlDX1RIRU1FX0ZJWEVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1yZXNldC1kZXYtZHluYW1pYy10aGVtZS1maXhlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiQVBQTFlfREVWX0lOVkVSU0lPTl9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctYXBwbHktZGV2LWludmVyc2lvbi1maXhlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiUkVTRVRfREVWX0lOVkVSU0lPTl9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctcmVzZXQtZGV2LWludmVyc2lvbi1maXhlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiQVBQTFlfREVWX1NUQVRJQ19USEVNRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLWFwcGx5LWRldi1zdGF0aWMtdGhlbWVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJSRVNFVF9ERVZfU1RBVElDX1RIRU1FU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctcmVzZXQtZGV2LXN0YXRpYy10aGVtZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkNPTE9SX1NDSEVNRV9DSEFOR0VcIl0gPSBcInVpLWJnLWNvbG9yLXNjaGVtZS1jaGFuZ2VcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkhJREVfSElHSExJR0hUU1wiXSA9IFwidWktYmctaGlkZS1oaWdobGlnaHRzXCI7XHJcbiAgICB9KShNZXNzYWdlVHlwZVVJdG9CRyB8fCAoTWVzc2FnZVR5cGVVSXRvQkcgPSB7fSkpO1xyXG4gICAgdmFyIE1lc3NhZ2VUeXBlQkd0b1VJO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZUJHdG9VSSkge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b1VJW1wiQ0hBTkdFU1wiXSA9IFwiYmctdWktY2hhbmdlc1wiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVCR3RvVUkgfHwgKE1lc3NhZ2VUeXBlQkd0b1VJID0ge30pKTtcclxuICAgIHZhciBEZWJ1Z01lc3NhZ2VUeXBlQkd0b1VJO1xyXG4gICAgKGZ1bmN0aW9uIChEZWJ1Z01lc3NhZ2VUeXBlQkd0b1VJKSB7XHJcbiAgICAgICAgRGVidWdNZXNzYWdlVHlwZUJHdG9VSVtcIkNTU19VUERBVEVcIl0gPSBcImRlYnVnLWJnLXVpLWNzcy11cGRhdGVcIjtcclxuICAgICAgICBEZWJ1Z01lc3NhZ2VUeXBlQkd0b1VJW1wiVVBEQVRFXCJdID0gXCJkZWJ1Zy1iZy11aS11cGRhdGVcIjtcclxuICAgIH0pKERlYnVnTWVzc2FnZVR5cGVCR3RvVUkgfHwgKERlYnVnTWVzc2FnZVR5cGVCR3RvVUkgPSB7fSkpO1xyXG4gICAgdmFyIE1lc3NhZ2VUeXBlQkd0b0NTO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZUJHdG9DUykge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiQUREX0NTU19GSUxURVJcIl0gPSBcImJnLWNzLWFkZC1jc3MtZmlsdGVyXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJBRERfRFlOQU1JQ19USEVNRVwiXSA9IFwiYmctY3MtYWRkLWR5bmFtaWMtdGhlbWVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIkFERF9TVEFUSUNfVEhFTUVcIl0gPSBcImJnLWNzLWFkZC1zdGF0aWMtdGhlbWVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIkFERF9TVkdfRklMVEVSXCJdID0gXCJiZy1jcy1hZGQtc3ZnLWZpbHRlclwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiQ0xFQU5fVVBcIl0gPSBcImJnLWNzLWNsZWFuLXVwXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJGRVRDSF9SRVNQT05TRVwiXSA9IFwiYmctY3MtZmV0Y2gtcmVzcG9uc2VcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIlVOU1VQUE9SVEVEX1NFTkRFUlwiXSA9IFwiYmctY3MtdW5zdXBwb3J0ZWQtc2VuZGVyXCI7XHJcbiAgICB9KShNZXNzYWdlVHlwZUJHdG9DUyB8fCAoTWVzc2FnZVR5cGVCR3RvQ1MgPSB7fSkpO1xyXG4gICAgdmFyIERlYnVnTWVzc2FnZVR5cGVCR3RvQ1M7XHJcbiAgICAoZnVuY3Rpb24gKERlYnVnTWVzc2FnZVR5cGVCR3RvQ1MpIHtcclxuICAgICAgICBEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTW1wiUkVMT0FEXCJdID0gXCJkZWJ1Zy1iZy1jcy1yZWxvYWRcIjtcclxuICAgIH0pKERlYnVnTWVzc2FnZVR5cGVCR3RvQ1MgfHwgKERlYnVnTWVzc2FnZVR5cGVCR3RvQ1MgPSB7fSkpO1xyXG4gICAgdmFyIE1lc3NhZ2VUeXBlQ1N0b0JHO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZUNTdG9CRykge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiQ09MT1JfU0NIRU1FX0NIQU5HRVwiXSA9IFwiY3MtYmctY29sb3Itc2NoZW1lLWNoYW5nZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiREFSS19USEVNRV9ERVRFQ1RFRFwiXSA9IFwiY3MtYmctZGFyay10aGVtZS1kZXRlY3RlZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiREFSS19USEVNRV9OT1RfREVURUNURURcIl0gPVxyXG4gICAgICAgICAgICBcImNzLWJnLWRhcmstdGhlbWUtbm90LWRldGVjdGVkXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJGRVRDSFwiXSA9IFwiY3MtYmctZmV0Y2hcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRPQ1VNRU5UX0NPTk5FQ1RcIl0gPSBcImNzLWJnLWRvY3VtZW50LWNvbm5lY3RcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRPQ1VNRU5UX0ZPUkdFVFwiXSA9IFwiY3MtYmctZG9jdW1lbnQtZm9yZ2V0XCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJET0NVTUVOVF9GUkVFWkVcIl0gPSBcImNzLWJnLWRvY3VtZW50LWZyZWV6ZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiRE9DVU1FTlRfUkVTVU1FXCJdID0gXCJjcy1iZy1kb2N1bWVudC1yZXN1bWVcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlQ1N0b0JHIHx8IChNZXNzYWdlVHlwZUNTdG9CRyA9IHt9KSk7XHJcbiAgICB2YXIgRGVidWdNZXNzYWdlVHlwZUNTdG9CRztcclxuICAgIChmdW5jdGlvbiAoRGVidWdNZXNzYWdlVHlwZUNTdG9CRykge1xyXG4gICAgICAgIERlYnVnTWVzc2FnZVR5cGVDU3RvQkdbXCJMT0dcIl0gPSBcImRlYnVnLWNzLWJnLWxvZ1wiO1xyXG4gICAgfSkoRGVidWdNZXNzYWdlVHlwZUNTdG9CRyB8fCAoRGVidWdNZXNzYWdlVHlwZUNTdG9CRyA9IHt9KSk7XHJcbiAgICB2YXIgTWVzc2FnZVR5cGVDU3RvVUk7XHJcbiAgICAoZnVuY3Rpb24gKE1lc3NhZ2VUeXBlQ1N0b1VJKSB7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvVUlbXCJFWFBPUlRfQ1NTX1JFU1BPTlNFXCJdID0gXCJjcy11aS1leHBvcnQtY3NzLXJlc3BvbnNlXCI7XHJcbiAgICB9KShNZXNzYWdlVHlwZUNTdG9VSSB8fCAoTWVzc2FnZVR5cGVDU3RvVUkgPSB7fSkpO1xyXG4gICAgdmFyIE1lc3NhZ2VUeXBlVUl0b0NTO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZVVJdG9DUykge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0NTW1wiRVhQT1JUX0NTU1wiXSA9IFwidWktY3MtZXhwb3J0LWNzc1wiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVVSXRvQ1MgfHwgKE1lc3NhZ2VUeXBlVUl0b0NTID0ge30pKTtcclxuXHJcbiAgICBjb25zdCBpc05hdmlnYXRvckRlZmluZWQgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgY29uc3QgdXNlckFnZW50ID0gaXNOYXZpZ2F0b3JEZWZpbmVkXHJcbiAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YSAmJlxyXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5icmFuZHMpXHJcbiAgICAgICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEuYnJhbmRzXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYnJhbmQpID0+IGAke2JyYW5kLmJyYW5kLnRvTG93ZXJDYXNlKCl9ICR7YnJhbmQudmVyc2lvbn1gXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgLmpvaW4oXCIgXCIpXHJcbiAgICAgICAgICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgOiBcInNvbWUgdXNlcmFnZW50XCI7XHJcbiAgICBjb25zdCBwbGF0Zm9ybSA9IGlzTmF2aWdhdG9yRGVmaW5lZFxyXG4gICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgJiZcclxuICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5wbGF0Zm9ybSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhLnBsYXRmb3JtLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgOiBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIDogXCJzb21lIHBsYXRmb3JtXCI7XHJcbiAgICBjb25zdCBpc0Nocm9taXVtID1cclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJjaHJvbWVcIikgfHwgdXNlckFnZW50LmluY2x1ZGVzKFwiY2hyb21pdW1cIik7XHJcbiAgICBjb25zdCBpc0ZpcmVmb3ggPVxyXG4gICAgICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcImZpcmVmb3hcIikgfHxcclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJ0aHVuZGVyYmlyZFwiKSB8fFxyXG4gICAgICAgIHVzZXJBZ2VudC5pbmNsdWRlcyhcImxpYnJld29sZlwiKTtcclxuICAgIGNvbnN0IGlzU2FmYXJpID0gdXNlckFnZW50LmluY2x1ZGVzKFwic2FmYXJpXCIpICYmICFpc0Nocm9taXVtO1xyXG4gICAgY29uc3QgaXNXaW5kb3dzID0gcGxhdGZvcm0uc3RhcnRzV2l0aChcIndpblwiKTtcclxuICAgIGNvbnN0IGlzTWFjT1MgPSBwbGF0Zm9ybS5zdGFydHNXaXRoKFwibWFjXCIpO1xyXG4gICAgaXNOYXZpZ2F0b3JEZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnREYXRhXHJcbiAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5tb2JpbGVcclxuICAgICAgICA6IHVzZXJBZ2VudC5pbmNsdWRlcyhcIm1vYmlsZVwiKTtcclxuICAgIGNvbnN0IGlzU2hhZG93RG9tU3VwcG9ydGVkID0gdHlwZW9mIFNoYWRvd1Jvb3QgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIGNvbnN0IGlzTWF0Y2hNZWRpYUNoYW5nZUV2ZW50TGlzdGVuZXJTdXBwb3J0ZWQgPVxyXG4gICAgICAgIHR5cGVvZiBNZWRpYVF1ZXJ5TGlzdCA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgdHlwZW9mIE1lZGlhUXVlcnlMaXN0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICBjb25zdCBpc0xheWVyUnVsZVN1cHBvcnRlZCA9IHR5cGVvZiBDU1NMYXllckJsb2NrUnVsZSA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBtID0gdXNlckFnZW50Lm1hdGNoKC9jaHJvbSg/OmV8aXVtKSg/OlxcL3wgKShbXiBdKykvKTtcclxuICAgICAgICBpZiAobSAmJiBtWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH0pKCk7XHJcbiAgICAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG0gPSB1c2VyQWdlbnQubWF0Y2goLyg/OmZpcmVmb3h8bGlicmV3b2xmKSg/OlxcL3wgKShbXiBdKykvKTtcclxuICAgICAgICBpZiAobSAmJiBtWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH0pKCk7XHJcbiAgICBjb25zdCBpc0RlZmluZWRTZWxlY3RvclN1cHBvcnRlZCA9ICgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgICBjb25zdCBpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCA9ICgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaWYgKCFlbCB8fCB0eXBlb2YgZWwuc3R5bGUgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsLnN0eWxlLmNvbG9yU2NoZW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yLXNjaGVtZTogZGFya1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsLnN0eWxlLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIjtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE9LUmVzcG9uc2UodXJsLCBtaW1lVHlwZSwgb3JpZ2luKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgY2FjaGU6IFwiZm9yY2UtY2FjaGVcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwib21pdFwiLFxyXG4gICAgICAgICAgICByZWZlcnJlcjogb3JpZ2luXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBpc0ZpcmVmb3ggJiZcclxuICAgICAgICAgICAgbWltZVR5cGUgPT09IFwidGV4dC9jc3NcIiAmJlxyXG4gICAgICAgICAgICB1cmwuc3RhcnRzV2l0aChcIm1vei1leHRlbnNpb246Ly9cIikgJiZcclxuICAgICAgICAgICAgdXJsLmVuZHNXaXRoKFwiLmNzc1wiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbWltZVR5cGUgJiZcclxuICAgICAgICAgICAgIXJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpLnN0YXJ0c1dpdGgobWltZVR5cGUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWltZSB0eXBlIG1pc21hdGNoIHdoZW4gbG9hZGluZyAke3VybH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBgVW5hYmxlIHRvIGxvYWQgJHt1cmx9ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQXNEYXRhVVJMKHVybCwgbWltZVR5cGUpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE9LUmVzcG9uc2UodXJsLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlYWRSZXNwb25zZUFzRGF0YVVSTChyZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQXNCbG9iKHVybCwgbWltZVR5cGUpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldE9LUmVzcG9uc2UodXJsLCBtaW1lVHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlYWRSZXNwb25zZUFzRGF0YVVSTChyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YVVSTCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGF0YVVSTDtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRBc1RleHQodXJsLCBtaW1lVHlwZSwgb3JpZ2luKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUsIG9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aHJvd0NPUlNFcnJvciA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgIG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIkVtYmVkZGVkIERhcmsgUmVhZGVyIGNhbm5vdCBhY2Nlc3MgYSBjcm9zcy1vcmlnaW4gcmVzb3VyY2VcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJPdmVydmlldyB5b3VyIFVSTHMgYW5kIENPUlMgcG9saWNpZXMgb3IgdXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJgRGFya1JlYWRlci5zZXRGZXRjaE1ldGhvZChmZXRjaDogKHVybCkgPT4gUHJvbWlzZTxSZXNwb25zZT4pKWAuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTZWUgaWYgdXNpbmcgYERhcmtSZWFkZXIuc2V0RmV0Y2hNZXRob2Qod2luZG93LmZldGNoKWBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJlZm9yZSBgRGFya1JlYWRlci5lbmFibGUoKWAgd29ya3MuXCJcclxuICAgICAgICAgICAgICAgIF0uam9pbihcIiBcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgbGV0IGZldGNoZXIgPSB0aHJvd0NPUlNFcnJvcjtcclxuICAgIGZ1bmN0aW9uIHNldEZldGNoTWV0aG9kJDEoZmV0Y2gpIHtcclxuICAgICAgICBpZiAoZmV0Y2gpIHtcclxuICAgICAgICAgICAgZmV0Y2hlciA9IGZldGNoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZldGNoZXIgPSB0aHJvd0NPUlNFcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBjYWxsRmV0Y2hNZXRob2QodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoZXIodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdpbmRvdy5jaHJvbWUpIHtcclxuICAgICAgICB3aW5kb3cuY2hyb21lID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAoIWNocm9tZS5ydW50aW1lKSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUgPSB7fTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1lc3NhZ2VMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZSguLi5hcmdzKSB7XHJcbiAgICAgICAgaWYgKGFyZ3NbMF0gJiYgYXJnc1swXS50eXBlID09PSBNZXNzYWdlVHlwZUNTdG9CRy5GRVRDSCkge1xyXG4gICAgICAgICAgICBjb25zdCB7aWR9ID0gYXJnc1swXTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt1cmwsIHJlc3BvbnNlVHlwZX0gPSBhcmdzWzBdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhbGxGZXRjaE1ldGhvZCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUeXBlID09PSBcImRhdGEtdXJsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gYXdhaXQgcmVhZFJlc3BvbnNlQXNEYXRhVVJMKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcnMuZm9yRWFjaCgoY2IpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZUJHdG9DUy5GRVRDSF9SRVNQT05TRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcnMuZm9yRWFjaCgoY2IpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY2Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZUJHdG9DUy5GRVRDSF9SRVNQT05TRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNZXNzYWdlTGlzdGVuZXIoY2FsbGJhY2spIHtcclxuICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBjb25zdCBuYXRpdmVTZW5kTWVzc2FnZSA9IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlO1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIG5hdGl2ZVNlbmRNZXNzYWdlLmFwcGx5KGNocm9tZS5ydW50aW1lLCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSA9IHNlbmRNZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UpIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UgPSB7fTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBjb25zdCBuYXRpdmVBZGRMaXN0ZW5lciA9IGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcjtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBhZGRNZXNzYWdlTGlzdGVuZXIoYXJnc1swXSk7XHJcbiAgICAgICAgICAgIG5hdGl2ZUFkZExpc3RlbmVyLmFwcGx5KGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZSwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID0gKC4uLmFyZ3MpID0+XHJcbiAgICAgICAgICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcihhcmdzWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgVGhlbWVFbmdpbmU7XHJcbiAgICAoZnVuY3Rpb24gKFRoZW1lRW5naW5lKSB7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJjc3NGaWx0ZXJcIl0gPSBcImNzc0ZpbHRlclwiO1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wic3ZnRmlsdGVyXCJdID0gXCJzdmdGaWx0ZXJcIjtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcInN0YXRpY1RoZW1lXCJdID0gXCJzdGF0aWNUaGVtZVwiO1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wiZHluYW1pY1RoZW1lXCJdID0gXCJkeW5hbWljVGhlbWVcIjtcclxuICAgIH0pKFRoZW1lRW5naW5lIHx8IChUaGVtZUVuZ2luZSA9IHt9KSk7XHJcblxyXG4gICAgdmFyIEF1dG9tYXRpb25Nb2RlO1xyXG4gICAgKGZ1bmN0aW9uIChBdXRvbWF0aW9uTW9kZSkge1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiTk9ORVwiXSA9IFwiXCI7XHJcbiAgICAgICAgQXV0b21hdGlvbk1vZGVbXCJUSU1FXCJdID0gXCJ0aW1lXCI7XHJcbiAgICAgICAgQXV0b21hdGlvbk1vZGVbXCJTWVNURU1cIl0gPSBcInN5c3RlbVwiO1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiTE9DQVRJT05cIl0gPSBcImxvY2F0aW9uXCI7XHJcbiAgICB9KShBdXRvbWF0aW9uTW9kZSB8fCAoQXV0b21hdGlvbk1vZGUgPSB7fSkpO1xyXG5cclxuICAgIGNvbnN0IERFRkFVTFRfQ09MT1JTID0ge1xyXG4gICAgICAgIGRhcmtTY2hlbWU6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMTgxYTFiXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiI2U4ZTZlM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaWdodFNjaGVtZToge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNkY2RhZDdcIixcclxuICAgICAgICAgICAgdGV4dDogXCIjMTgxYTFiXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgREVGQVVMVF9USEVNRSA9IHtcclxuICAgICAgICBtb2RlOiAxLFxyXG4gICAgICAgIGJyaWdodG5lc3M6IDEwMCxcclxuICAgICAgICBjb250cmFzdDogMTAwLFxyXG4gICAgICAgIGdyYXlzY2FsZTogMCxcclxuICAgICAgICBzZXBpYTogMCxcclxuICAgICAgICB1c2VGb250OiBmYWxzZSxcclxuICAgICAgICBmb250RmFtaWx5OiBpc01hY09TXHJcbiAgICAgICAgICAgID8gXCJIZWx2ZXRpY2EgTmV1ZVwiXHJcbiAgICAgICAgICAgIDogaXNXaW5kb3dzXHJcbiAgICAgICAgICAgICAgPyBcIlNlZ29lIFVJXCJcclxuICAgICAgICAgICAgICA6IFwiT3BlbiBTYW5zXCIsXHJcbiAgICAgICAgdGV4dFN0cm9rZTogMCxcclxuICAgICAgICBlbmdpbmU6IFRoZW1lRW5naW5lLmR5bmFtaWNUaGVtZSxcclxuICAgICAgICBzdHlsZXNoZWV0OiBcIlwiLFxyXG4gICAgICAgIGRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3I6IERFRkFVTFRfQ09MT1JTLmRhcmtTY2hlbWUuYmFja2dyb3VuZCxcclxuICAgICAgICBkYXJrU2NoZW1lVGV4dENvbG9yOiBERUZBVUxUX0NPTE9SUy5kYXJrU2NoZW1lLnRleHQsXHJcbiAgICAgICAgbGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3I6IERFRkFVTFRfQ09MT1JTLmxpZ2h0U2NoZW1lLmJhY2tncm91bmQsXHJcbiAgICAgICAgbGlnaHRTY2hlbWVUZXh0Q29sb3I6IERFRkFVTFRfQ09MT1JTLmxpZ2h0U2NoZW1lLnRleHQsXHJcbiAgICAgICAgc2Nyb2xsYmFyQ29sb3I6IGlzTWFjT1MgPyBcIlwiIDogXCJhdXRvXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uQ29sb3I6IFwiYXV0b1wiLFxyXG4gICAgICAgIHN0eWxlU3lzdGVtQ29udHJvbHM6ICFpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCxcclxuICAgICAgICBsaWdodENvbG9yU2NoZW1lOiBcIkRlZmF1bHRcIixcclxuICAgICAgICBkYXJrQ29sb3JTY2hlbWU6IFwiRGVmYXVsdFwiLFxyXG4gICAgICAgIGltbWVkaWF0ZU1vZGlmeTogZmFsc2VcclxuICAgIH07XHJcbiAgICAoe1xyXG4gICAgICAgIHNjaGVtZVZlcnNpb246IDAsXHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBmZXRjaE5ld3M6IHRydWUsXHJcbiAgICAgICAgdGhlbWU6IERFRkFVTFRfVEhFTUUsXHJcbiAgICAgICAgcHJlc2V0czogW10sXHJcbiAgICAgICAgY3VzdG9tVGhlbWVzOiBbXSxcclxuICAgICAgICBlbmFibGVkQnlEZWZhdWx0OiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZWRGb3I6IFtdLFxyXG4gICAgICAgIGRpc2FibGVkRm9yOiBbXSxcclxuICAgICAgICBjaGFuZ2VCcm93c2VyVGhlbWU6IGZhbHNlLFxyXG4gICAgICAgIHN5bmNTZXR0aW5nczogdHJ1ZSxcclxuICAgICAgICBzeW5jU2l0ZXNGaXhlczogZmFsc2UsXHJcbiAgICAgICAgYXV0b21hdGlvbjoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9kZTogQXV0b21hdGlvbk1vZGUuTk9ORSxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwiT25PZmZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICBhY3RpdmF0aW9uOiBcIjE4OjAwXCIsXHJcbiAgICAgICAgICAgIGRlYWN0aXZhdGlvbjogXCI5OjAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBudWxsLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZpZXdOZXdEZXNpZ246IGZhbHNlLFxyXG4gICAgICAgIHByZXZpZXdOZXdlc3REZXNpZ246IGZhbHNlLFxyXG4gICAgICAgIGVuYWJsZUZvclBERjogdHJ1ZSxcclxuICAgICAgICBlbmFibGVGb3JQcm90ZWN0ZWRQYWdlczogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlQ29udGV4dE1lbnVzOiBmYWxzZSxcclxuICAgICAgICBkZXRlY3REYXJrVGhlbWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0FycmF5TGlrZShpdGVtcykge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5sZW5ndGggIT0gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvckVhY2goaXRlbXMsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGl0ZW1zKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGl0ZW1zW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwdXNoKGFycmF5LCBhZGRpdGlvbikge1xyXG4gICAgICAgIGZvckVhY2goYWRkaXRpb24sIChhKSA9PiBhcnJheS5wdXNoKGEpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvQXJyYXkoaXRlbXMpIHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ0luZm8oLi4uYXJncykge31cclxuICAgIGZ1bmN0aW9uIGxvZ1dhcm4oLi4uYXJncykge31cclxuXHJcbiAgICBmdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBsYXN0QXJncztcclxuICAgICAgICBjb25zdCB0aHJvdHRsZWQgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBsYXN0QXJncyA9IGFyZ3M7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKC4uLmxhc3RBcmdzKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKC4uLmxhc3RBcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xyXG4gICAgICAgICAgICBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhyb3R0bGVkLCB7Y2FuY2VsfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBc3luY1Rhc2tzUXVldWUoKSB7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBbXTtcclxuICAgICAgICBsZXQgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgZnVuY3Rpb24gcnVuVGFza3MoKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXNrO1xyXG4gICAgICAgICAgICB3aGlsZSAoKHRhc2sgPSB0YXNrcy5zaGlmdCgpKSkge1xyXG4gICAgICAgICAgICAgICAgdGFzaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBhZGQodGFzaykge1xyXG4gICAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICBpZiAoIWZyYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuVGFza3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbCgpIHtcclxuICAgICAgICAgICAgdGFza3Muc3BsaWNlKDApO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcclxuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7YWRkLCBjYW5jZWx9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsYXlUb2tlbnMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVPbmNlKHRva2VuLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChkZWxheVRva2Vucy5oYXModG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXlUb2tlbnMuYWRkKHRva2VuKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWxheVRva2Vucy5kZWxldGUodG9rZW4pO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldER1cmF0aW9uKHRpbWUpIHtcclxuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xyXG4gICAgICAgIGlmICh0aW1lLnNlY29uZHMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5zZWNvbmRzICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWUubWludXRlcykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLm1pbnV0ZXMgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lLmhvdXJzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUuaG91cnMgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWUuZGF5cykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLmRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XHJcbiAgICAgICAgbm9kZSAmJiBub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JOb2RlUG9zaXRpb24obm9kZSwgbW9kZSwgb25SZXN0b3JlID0gRnVuY3Rpb24ucHJvdG90eXBlKSB7XHJcbiAgICAgICAgY29uc3QgTUFYX0FUVEVNUFRTX0NPVU5UID0gMTA7XHJcbiAgICAgICAgY29uc3QgUkVUUllfVElNRU9VVCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAyfSk7XHJcbiAgICAgICAgY29uc3QgQVRURU1QVFNfSU5URVJWQUwgPSBnZXREdXJhdGlvbih7c2Vjb25kczogMTB9KTtcclxuICAgICAgICBjb25zdCBwcmV2U2libGluZyA9IG5vZGUucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gd2F0Y2ggZm9yIG5vZGUgcG9zaXRpb246IHBhcmVudCBlbGVtZW50IG5vdCBmb3VuZFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlID09PSBcInByZXYtc2libGluZ1wiICYmICFwcmV2U2libGluZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byB3YXRjaCBmb3Igbm9kZSBwb3NpdGlvbjogdGhlcmUgaXMgbm8gcHJldmlvdXMgc2libGluZ1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICBsZXQgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICBjb25zdCByZXN0b3JlID0gdGhyb3R0bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dGVtcHRzID49IE1BWF9BVFRFTVBUU19DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdyAtIHN0YXJ0IDwgQVRURU1QVFNfSU5URVJWQUwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBSRVRSWV9USU1FT1VUKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5vdztcclxuICAgICAgICAgICAgICAgIGF0dGVtcHRzID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJoZWFkXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZyAmJiBwcmV2U2libGluZy5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcInByZXYtc2libGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlNpYmxpbmcucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJlbnQocHJldlNpYmxpbmcucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwiaGVhZFwiICYmICFwYXJlbnQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IGRvY3VtZW50LmhlYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShcclxuICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICBwcmV2U2libGluZyAmJiBwcmV2U2libGluZy5pc0Nvbm5lY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgID8gcHJldlNpYmxpbmcubmV4dFNpYmxpbmdcclxuICAgICAgICAgICAgICAgICAgICA6IHBhcmVudC5maXJzdENoaWxkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnRha2VSZWNvcmRzKCk7XHJcbiAgICAgICAgICAgIG9uUmVzdG9yZSAmJiBvblJlc3RvcmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKG1vZGUgPT09IFwiaGVhZFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKG5vZGUucGFyZW50Tm9kZSAhPT0gcGFyZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFub2RlLnBhcmVudE5vZGUuaXNDb25uZWN0ZWQpKSB8fFxyXG4gICAgICAgICAgICAgICAgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnByZXZpb3VzU2libGluZyAhPT0gcHJldlNpYmxpbmcpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcnVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHBhcmVudCwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc3RvcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVzdG9yZS5jYW5jZWwoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNraXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnRha2VSZWNvcmRzKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1cGRhdGVQYXJlbnQgPSAocGFyZW50Tm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgIHJ1bigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgcmV0dXJuIHtydW4sIHN0b3AsIHNraXB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXRlcmF0ZVNoYWRvd0hvc3RzKHJvb3QsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgaWYgKHJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXHJcbiAgICAgICAgICAgIHJvb3QsXHJcbiAgICAgICAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhY2NlcHROb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5zaGFkb3dSb290ID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHJvb3Quc2hhZG93Um9vdCA/IHdhbGtlci5jdXJyZW50Tm9kZSA6IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gICAgICAgICAgICBub2RlICE9IG51bGw7XHJcbiAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdXJmaW5na2V5c19oaW50c19ob3N0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRvcihub2RlKTtcclxuICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUuc2hhZG93Um9vdCwgaXRlcmF0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBpc0RPTVJlYWR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fFxyXG4gICAgICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCJcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHNldElzRE9NUmVhZHkobmV3RnVuYykge1xyXG4gICAgICAgIGlzRE9NUmVhZHkgPSBuZXdGdW5jO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVhZHlTdGF0ZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGFkZERPTVJlYWR5TGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICBpc0RPTVJlYWR5KCkgPyBsaXN0ZW5lcigpIDogcmVhZHlTdGF0ZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRE9NUmVhZHlMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHJlYWR5U3RhdGVMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUmVhZHlTdGF0ZUNvbXBsZXRlKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIGlzUmVhZHlTdGF0ZUNvbXBsZXRlKClcclxuICAgICAgICAgICAgPyBsaXN0ZW5lcigpXHJcbiAgICAgICAgICAgIDogcmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhblJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycygpIHtcclxuICAgICAgICByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGlmICghaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgY29uc3Qgb25SZWFkeVN0YXRlQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkeVN0YXRlTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcclxuICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1JlYWR5U3RhdGVDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkeXN0YXRlY2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVhZHlTdGF0ZUNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcigpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgb25SZWFkeVN0YXRlQ2hhbmdlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IEhVR0VfTVVUQVRJT05TX0NPVU5UID0gMTAwMDtcclxuICAgIGZ1bmN0aW9uIGlzSHVnZU11dGF0aW9uKG11dGF0aW9ucykge1xyXG4gICAgICAgIGlmIChtdXRhdGlvbnMubGVuZ3RoID4gSFVHRV9NVVRBVElPTlNfQ09VTlQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhZGRlZE5vZGVzQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFkZGVkTm9kZXNDb3VudCArPSBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChhZGRlZE5vZGVzQ291bnQgPiBIVUdFX01VVEFUSU9OU19DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudHNUcmVlT3BlcmF0aW9ucyhtdXRhdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRpb25zID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGNvbnN0IG1vdmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtKSA9PiB7XHJcbiAgICAgICAgICAgIGZvckVhY2gobS5hZGRlZE5vZGVzLCAobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBFbGVtZW50ICYmIG4uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMuYWRkKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yRWFjaChtLnJlbW92ZWROb2RlcywgKG4pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChuIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVzLmFkZChuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25zLmRlbGV0ZShuKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGlvbnMuYWRkKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZHVwbGljYXRlQWRkaXRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgZHVwbGljYXRlRGVsZXRpb25zID0gW107XHJcbiAgICAgICAgYWRkaXRpb25zLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFkZGl0aW9ucy5oYXMobm9kZS5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlQWRkaXRpb25zLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkZWxldGlvbnMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGVsZXRpb25zLmhhcyhub2RlLnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVEZWxldGlvbnMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGR1cGxpY2F0ZUFkZGl0aW9ucy5mb3JFYWNoKChub2RlKSA9PiBhZGRpdGlvbnMuZGVsZXRlKG5vZGUpKTtcclxuICAgICAgICBkdXBsaWNhdGVEZWxldGlvbnMuZm9yRWFjaCgobm9kZSkgPT4gZGVsZXRpb25zLmRlbGV0ZShub2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIHthZGRpdGlvbnMsIG1vdmVzLCBkZWxldGlvbnN9O1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0aW1pemVkVHJlZU9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IG9wdGltaXplZFRyZWVDYWxsYmFja3MgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3B0aW1pemVkVHJlZU9ic2VydmVyKHJvb3QsIGNhbGxiYWNrcykge1xyXG4gICAgICAgIGxldCBvYnNlcnZlcjtcclxuICAgICAgICBsZXQgb2JzZXJ2ZXJDYWxsYmFja3M7XHJcbiAgICAgICAgbGV0IGRvbVJlYWR5TGlzdGVuZXI7XHJcbiAgICAgICAgaWYgKG9wdGltaXplZFRyZWVPYnNlcnZlcnMuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gb3B0aW1pemVkVHJlZU9ic2VydmVycy5nZXQocm9vdCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzID0gb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5nZXQob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBoYWRIdWdlTXV0YXRpb25zQmVmb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBzdWJzY3JpYmVkRm9yUmVhZHlTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0h1Z2VNdXRhdGlvbihtdXRhdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYWRIdWdlTXV0YXRpb25zQmVmb3JlIHx8IGlzRE9NUmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKCh7b25IdWdlTXV0YXRpb25zfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSHVnZU11dGF0aW9ucyhyb290KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN1YnNjcmliZWRGb3JSZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVJlYWR5TGlzdGVuZXIgPSAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuZm9yRWFjaCgoe29uSHVnZU11dGF0aW9uc30pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zKHJvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRET01SZWFkeUxpc3RlbmVyKGRvbVJlYWR5TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVkRm9yUmVhZHlTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhZEh1Z2VNdXRhdGlvbnNCZWZvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50c09wZXJhdGlvbnMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50c1RyZWVPcGVyYXRpb25zKG11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuZm9yRWFjaCgoe29uTWlub3JNdXRhdGlvbnN9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1pbm9yTXV0YXRpb25zKHJvb3QsIGVsZW1lbnRzT3BlcmF0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIG9wdGltaXplZFRyZWVPYnNlcnZlcnMuc2V0KHJvb3QsIG9ic2VydmVyKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIG9wdGltaXplZFRyZWVDYWxsYmFja3Muc2V0KG9ic2VydmVyLCBvYnNlcnZlckNhbGxiYWNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmFkZChjYWxsYmFja3MpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2tzKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb21SZWFkeUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRE9NUmVhZHlMaXN0ZW5lcihkb21SZWFkeUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlckNhbGxiYWNrcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXplZFRyZWVDYWxsYmFja3MuZGVsZXRlKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzLmRlbGV0ZShyb290KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWF0Y2hlcyhyZWdleCwgaW5wdXQsIGdyb3VwID0gMCkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcclxuICAgICAgICBsZXQgbTtcclxuICAgICAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKGlucHV0KSkpIHtcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1bZ3JvdXBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRIYXNoQ29kZSh0ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgbGVuID0gdGV4dC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGhhc2ggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYyA9IHRleHQuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2ggKyBjKSAmIDQyOTQ5NjcyOTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoYXNoO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwU3BlY2lhbENoYXJzKGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2VBbGwoL1tcXF4kLiorP1xcKFxcKVxcW1xcXXt9fFxcLVxcXFxdL2csIFwiXFxcXCQmXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50aGVzZXNSYW5nZShpbnB1dCwgc2VhcmNoU3RhcnRJbmRleCA9IDApIHtcclxuICAgICAgICByZXR1cm4gZ2V0T3BlbkNsb3NlUmFuZ2UoaW5wdXQsIHNlYXJjaFN0YXJ0SW5kZXgsIFwiKFwiLCBcIilcIiwgW10pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0T3BlbkNsb3NlUmFuZ2UoXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgc2VhcmNoU3RhcnRJbmRleCxcclxuICAgICAgICBvcGVuVG9rZW4sXHJcbiAgICAgICAgY2xvc2VUb2tlbixcclxuICAgICAgICBleGNsdWRlUmFuZ2VzXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgaW5kZXhPZjtcclxuICAgICAgICBpZiAoZXhjbHVkZVJhbmdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaW5kZXhPZiA9ICh0b2tlbiwgcG9zKSA9PiBpbnB1dC5pbmRleE9mKHRva2VuLCBwb3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluZGV4T2YgPSAodG9rZW4sIHBvcykgPT5cclxuICAgICAgICAgICAgICAgIGluZGV4T2ZFeGNsdWRpbmcoaW5wdXQsIHRva2VuLCBwb3MsIGV4Y2x1ZGVSYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7bGVuZ3RofSA9IGlucHV0O1xyXG4gICAgICAgIGxldCBkZXB0aCA9IDA7XHJcbiAgICAgICAgbGV0IGZpcnN0T3BlbkluZGV4ID0gLTE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHNlYXJjaFN0YXJ0SW5kZXg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5JbmRleCA9IGluZGV4T2Yob3BlblRva2VuLCBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVuSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaXJzdE9wZW5JbmRleCA9IG9wZW5JbmRleDtcclxuICAgICAgICAgICAgICAgIGRlcHRoKys7XHJcbiAgICAgICAgICAgICAgICBpID0gb3BlbkluZGV4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VJbmRleCA9IGluZGV4T2YoY2xvc2VUb2tlbiwgaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5JbmRleCA9IGluZGV4T2Yob3BlblRva2VuLCBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVuSW5kZXggPCAwIHx8IGNsb3NlSW5kZXggPD0gb3BlbkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGgtLTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtzdGFydDogZmlyc3RPcGVuSW5kZXgsIGVuZDogY2xvc2VJbmRleCArIDF9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpID0gY2xvc2VJbmRleDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGgrKztcclxuICAgICAgICAgICAgICAgICAgICBpID0gb3BlbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5kZXhPZkV4Y2x1ZGluZyhpbnB1dCwgc2VhcmNoLCBwb3NpdGlvbiwgZXhjbHVkZVJhbmdlcykge1xyXG4gICAgICAgIGNvbnN0IGkgPSBpbnB1dC5pbmRleE9mKHNlYXJjaCwgcG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1c2lvbiA9IGV4Y2x1ZGVSYW5nZXMuZmluZCgocikgPT4gaSA+PSByLnN0YXJ0ICYmIGkgPCByLmVuZCk7XHJcbiAgICAgICAgaWYgKGV4Y2x1c2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXhPZkV4Y2x1ZGluZyhcclxuICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgZXhjbHVzaW9uLmVuZCxcclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzcGxpdEV4Y2x1ZGluZyhpbnB1dCwgc2VwYXJhdG9yLCBleGNsdWRlUmFuZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBbXTtcclxuICAgICAgICBsZXQgY29tbWFJbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBjdXJySW5kZXggPSAwO1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgKGNvbW1hSW5kZXggPSBpbmRleE9mRXhjbHVkaW5nKFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3IsXHJcbiAgICAgICAgICAgICAgICBjdXJySW5kZXgsXHJcbiAgICAgICAgICAgICAgICBleGNsdWRlUmFuZ2VzXHJcbiAgICAgICAgICAgICkpID49IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcGFydHMucHVzaChpbnB1dC5zdWJzdHJpbmcoY3VyckluZGV4LCBjb21tYUluZGV4KS50cmltKCkpO1xyXG4gICAgICAgICAgICBjdXJySW5kZXggPSBjb21tYUluZGV4ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFydHMucHVzaChpbnB1dC5zdWJzdHJpbmcoY3VyckluZGV4KS50cmltKCkpO1xyXG4gICAgICAgIHJldHVybiBwYXJ0cztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYW5jaG9yO1xyXG4gICAgY29uc3QgcGFyc2VkVVJMQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBmaXhCYXNlVVJMKCR1cmwpIHtcclxuICAgICAgICBpZiAoIWFuY2hvcikge1xyXG4gICAgICAgICAgICBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYW5jaG9yLmhyZWYgPSAkdXJsO1xyXG4gICAgICAgIHJldHVybiBhbmNob3IuaHJlZjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlVVJMKCR1cmwsICRiYXNlID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGAkeyR1cmx9JHskYmFzZSA/IGA7JHskYmFzZX1gIDogXCJcIn1gO1xyXG4gICAgICAgIGlmIChwYXJzZWRVUkxDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVVJMQ2FjaGUuZ2V0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkYmFzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKCR1cmwsIGZpeEJhc2VVUkwoJGJhc2UpKTtcclxuICAgICAgICAgICAgcGFyc2VkVVJMQ2FjaGUuc2V0KGtleSwgcGFyc2VkVVJMKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFVSTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyc2VkVVJMID0gbmV3IFVSTChmaXhCYXNlVVJMKCR1cmwpKTtcclxuICAgICAgICBwYXJzZWRVUkxDYWNoZS5zZXQoJHVybCwgcGFyc2VkVVJMKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkVVJMO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0QWJzb2x1dGVVUkwoJGJhc2UsICRyZWxhdGl2ZSkge1xyXG4gICAgICAgIGlmICgkcmVsYXRpdmUubWF0Y2goL15kYXRhXFxcXD9cXDovKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoL15cXC9cXC8vLnRlc3QoJHJlbGF0aXZlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7bG9jYXRpb24ucHJvdG9jb2x9JHskcmVsYXRpdmV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlVVJMKCRiYXNlKTtcclxuICAgICAgICBjb25zdCBhID0gcGFyc2VVUkwoJHJlbGF0aXZlLCBiLmhyZWYpO1xyXG4gICAgICAgIHJldHVybiBhLmhyZWY7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1JlbGF0aXZlSHJlZk9uQWJzb2x1dGVQYXRoKGhyZWYpIHtcclxuICAgICAgICBpZiAoaHJlZi5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVybCA9IHBhcnNlVVJMKGhyZWYpO1xyXG4gICAgICAgIGlmICh1cmwucHJvdG9jb2wgIT09IGxvY2F0aW9uLnByb3RvY29sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybC5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsLnBvcnQgIT09IGxvY2F0aW9uLnBvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsLnBhdGhuYW1lID09PSBsb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlQ1NTUnVsZXMocnVsZXMsIGl0ZXJhdGUsIG9uSW1wb3J0RXJyb3IpIHtcclxuICAgICAgICBmb3JFYWNoKHJ1bGVzLCAocnVsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHlsZVJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGUocnVsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNJbXBvcnRSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZVNoZWV0LmNzc1J1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkltcG9ydEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSW1wb3J0RXJyb3I/LigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTWVkaWFSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20ocnVsZS5tZWRpYSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NjcmVlbk9yQWxsT3JRdWVyeSA9IG1lZGlhLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgKG0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc3RhcnRzV2l0aChcInNjcmVlblwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnN0YXJ0c1dpdGgoXCJhbGxcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5zdGFydHNXaXRoKFwiKFwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJpbnRPclNwZWVjaCA9IG1lZGlhLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgKG0pID0+IG0uc3RhcnRzV2l0aChcInByaW50XCIpIHx8IG0uc3RhcnRzV2l0aChcInNwZWVjaFwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NjcmVlbk9yQWxsT3JRdWVyeSB8fCAhaXNQcmludE9yU3BlZWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGUuY3NzUnVsZXMsIGl0ZXJhdGUsIG9uSW1wb3J0RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzU3VwcG9ydHNSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ1NTLnN1cHBvcnRzKHJ1bGUuY29uZGl0aW9uVGV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZS5jc3NSdWxlcywgaXRlcmF0ZSwgb25JbXBvcnRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNMYXllclJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlLmNzc1J1bGVzLCBpdGVyYXRlLCBvbkltcG9ydEVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvcnRoYW5kVmFyRGVwZW5kYW50UHJvcGVydGllcyA9IFtcclxuICAgICAgICBcImJhY2tncm91bmRcIixcclxuICAgICAgICBcImJvcmRlclwiLFxyXG4gICAgICAgIFwiYm9yZGVyLWNvbG9yXCIsXHJcbiAgICAgICAgXCJib3JkZXItYm90dG9tXCIsXHJcbiAgICAgICAgXCJib3JkZXItbGVmdFwiLFxyXG4gICAgICAgIFwiYm9yZGVyLXJpZ2h0XCIsXHJcbiAgICAgICAgXCJib3JkZXItdG9wXCIsXHJcbiAgICAgICAgXCJvdXRsaW5lXCIsXHJcbiAgICAgICAgXCJvdXRsaW5lLWNvbG9yXCJcclxuICAgIF07XHJcbiAgICBjb25zdCBzaG9ydGhhbmRWYXJEZXBQcm9wUmVnZXhwcyA9IGlzU2FmYXJpXHJcbiAgICAgICAgPyBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzLm1hcCgocHJvcCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYCR7cHJvcH06XFxcXHMqKC4qPylcXFxccyo7YCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtwcm9wLCByZWdleHBdO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IG51bGw7XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKHN0eWxlLCBpdGVyYXRlKSB7XHJcbiAgICAgICAgZm9yRWFjaChzdHlsZSwgKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0O1xyXG4gICAgICAgIGlmIChjc3NUZXh0LmluY2x1ZGVzKFwidmFyKFwiKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTYWZhcmkpIHtcclxuICAgICAgICAgICAgICAgIHNob3J0aGFuZFZhckRlcFByb3BSZWdleHBzLmZvckVhY2goKFtwcm9wLCByZWdleHBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjc3NUZXh0Lm1hdGNoKHJlZ2V4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IG1hdGNoWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZShwcm9wLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRoYW5kVmFyRGVwZW5kYW50UHJvcGVydGllcy5mb3JFYWNoKChwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsICYmIHZhbC5pbmNsdWRlcyhcInZhcihcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZShwcm9wLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3NzVGV4dC5pbmNsdWRlcyhcImJhY2tncm91bmQtY29sb3I6IDtcIikgJiZcclxuICAgICAgICAgICAgIXN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUVtcHR5U2hvcnRoYW5kKFwiYmFja2dyb3VuZFwiLCBzdHlsZSwgaXRlcmF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3NzVGV4dC5pbmNsdWRlcyhcImJvcmRlci1cIikgJiZcclxuICAgICAgICAgICAgY3NzVGV4dC5pbmNsdWRlcyhcIi1jb2xvcjogO1wiKSAmJlxyXG4gICAgICAgICAgICAhc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImJvcmRlclwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBoYW5kbGVFbXB0eVNob3J0aGFuZChcImJvcmRlclwiLCBzdHlsZSwgaXRlcmF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRW1wdHlTaG9ydGhhbmQoc2hvcnRoYW5kLCBzdHlsZSwgaXRlcmF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudFJ1bGUgPSBzdHlsZS5wYXJlbnRSdWxlO1xyXG4gICAgICAgIGlmIChpc1N0eWxlUnVsZShwYXJlbnRSdWxlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VDU1NUZXh0ID1cclxuICAgICAgICAgICAgICAgIHBhcmVudFJ1bGUucGFyZW50U3R5bGVTaGVldD8ub3duZXJOb2RlPy50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZUNTU1RleHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlc2NhcGVkU2VsZWN0b3IgPSBlc2NhcGVSZWdFeHBTcGVjaWFsQ2hhcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50UnVsZS5zZWxlY3RvclRleHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBlc2NhcGVkU2VsZWN0b3IgPSBlc2NhcGVkU2VsZWN0b3IucmVwbGFjZUFsbCgvXFxzKy9nLCBcIlxcXFxzKlwiKTtcclxuICAgICAgICAgICAgICAgIGVzY2FwZWRTZWxlY3RvciA9IGVzY2FwZWRTZWxlY3Rvci5yZXBsYWNlQWxsKC86Oi9nLCBcIjo6P1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7ZXNjYXBlZFNlbGVjdG9yfVxcXFxzKntbXn1dKiR7c2hvcnRoYW5kfTpcXFxccyooW147fV0rKWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHNvdXJjZUNTU1RleHQubWF0Y2gocmVnZXhwKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUoc2hvcnRoYW5kLCBtYXRjaFsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvcnRoYW5kID09PSBcImJhY2tncm91bmRcIikge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZShcImJhY2tncm91bmQtY29sb3JcIiwgXCIjZmZmZmZmXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY3NzVVJMUmVnZXggPSAvdXJsXFwoKCgnLio/Jyl8KFwiLio/XCIpfChbXlxcKV0qPykpXFwpL2c7XHJcbiAgICBjb25zdCBjc3NJbXBvcnRSZWdleCA9XHJcbiAgICAgICAgL0BpbXBvcnRcXHMqKHVybFxcKCk/KCgnLis/Jyl8KFwiLis/XCIpfChbXlxcKV0qPykpXFwpPyA/KHNjcmVlbik/Oz8vZ2k7XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NVUkxWYWx1ZShjc3NVUkwpIHtcclxuICAgICAgICByZXR1cm4gY3NzVVJMXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXG5cXHJcXFxcXSsvZywgXCJcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL151cmxcXCgoLiopXFwpJC8sIFwiJDFcIilcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXlwiKC4qKVwiJC8sIFwiJDFcIilcclxuICAgICAgICAgICAgLnJlcGxhY2UoL14nKC4qKSckLywgXCIkMVwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvKD86XFxcXCguKSkvZywgXCIkMVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENTU0Jhc2VCYXRoKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGNzc1VSTCA9IHBhcnNlVVJMKHVybCk7XHJcbiAgICAgICAgcmV0dXJuIGAke2Nzc1VSTC5vcmlnaW59JHtjc3NVUkwucGF0aG5hbWUucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvKFxcLykoW15cXC9dKykkL2ksIFwiJDFcIil9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NSZWxhdGl2ZVVSTHNXaXRoQWJzb2x1dGUoJGNzcywgY3NzQmFzZVBhdGgpIHtcclxuICAgICAgICByZXR1cm4gJGNzcy5yZXBsYWNlKGNzc1VSTFJlZ2V4LCAobWF0Y2gpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGdldENTU1VSTFZhbHVlKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFic29sdXRlVVJMID0gZ2V0QWJzb2x1dGVVUkwoY3NzQmFzZVBhdGgsIHVybCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlc2NhcGVkVVJMID0gYWJzb2x1dGVVUkwucmVwbGFjZUFsbChcIidcIiwgXCJcXFxcJ1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgdXJsKCcke2VzY2FwZWRVUkx9JylgO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9udEZhY2VSZWdleCA9IC9AZm9udC1mYWNlXFxzKntbXn1dKn0vZztcclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VDU1NGb250RmFjZSgkY3NzKSB7XHJcbiAgICAgICAgcmV0dXJuICRjc3MucmVwbGFjZShmb250RmFjZVJlZ2V4LCBcIlwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlUnVsZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgaW1wb3J0UnVsZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgbWVkaWFSdWxlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBzdXBwb3J0c1J1bGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IGxheWVyUnVsZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgZnVuY3Rpb24gaXNTdHlsZVJ1bGUocnVsZSkge1xyXG4gICAgICAgIGlmICghcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHlsZVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JUZXh0KSB7XHJcbiAgICAgICAgICAgIHN0eWxlUnVsZXMuYWRkKHJ1bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNJbXBvcnRSdWxlKHJ1bGUpIHtcclxuICAgICAgICBpZiAoIXJ1bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3R5bGVSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW1wb3J0UnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnVsZS5ocmVmKSB7XHJcbiAgICAgICAgICAgIGltcG9ydFJ1bGVzLmFkZChydWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzTWVkaWFSdWxlKHJ1bGUpIHtcclxuICAgICAgICBpZiAoIXJ1bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3R5bGVSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVkaWFSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChydWxlLm1lZGlhKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUnVsZXMuYWRkKHJ1bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNTdXBwb3J0c1J1bGUocnVsZSkge1xyXG4gICAgICAgIGlmICghcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHlsZVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdXBwb3J0c1J1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDU1NTdXBwb3J0c1J1bGUpIHtcclxuICAgICAgICAgICAgc3VwcG9ydHNSdWxlcy5hZGQocnVsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0xheWVyUnVsZShydWxlKSB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0eWxlUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxheWVyUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNMYXllclJ1bGVTdXBwb3J0ZWQgJiYgcnVsZSBpbnN0YW5jZW9mIENTU0xheWVyQmxvY2tSdWxlKSB7XHJcbiAgICAgICAgICAgIGxheWVyUnVsZXMuYWRkKHJ1bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV2YWxNYXRoKGV4cHJlc3Npb24pIHtcclxuICAgICAgICBjb25zdCBycG5TdGFjayA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmdTdGFjayA9IFtdO1xyXG4gICAgICAgIGxldCBsYXN0VG9rZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGV4cHJlc3Npb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBleHByZXNzaW9uW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuIHx8IHRva2VuID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wZXJhdG9ycy5oYXModG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IG9wZXJhdG9ycy5nZXQodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdvcmtpbmdTdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50T3AgPSBvcGVyYXRvcnMuZ2V0KHdvcmtpbmdTdGFja1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50T3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcC5sZXNzT3JFcXVhbFRoYW4oY3VycmVudE9wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBycG5TdGFjay5wdXNoKHdvcmtpbmdTdGFjay5zaGlmdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3b3JraW5nU3RhY2sudW5zaGlmdCh0b2tlbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxhc3RUb2tlbiB8fCBvcGVyYXRvcnMuaGFzKGxhc3RUb2tlbikpIHtcclxuICAgICAgICAgICAgICAgIHJwblN0YWNrLnB1c2godG9rZW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcnBuU3RhY2tbcnBuU3RhY2subGVuZ3RoIC0gMV0gKz0gdG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJwblN0YWNrLnB1c2goLi4ud29ya2luZ1N0YWNrKTtcclxuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBycG5TdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvcCA9IG9wZXJhdG9ycy5nZXQocnBuU3RhY2tbaV0pO1xyXG4gICAgICAgICAgICBpZiAob3ApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBzdGFjay5zcGxpY2UoMCwgMik7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG9wLmV4ZWMoYXJnc1sxXSwgYXJnc1swXSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sudW5zaGlmdChwYXJzZUZsb2F0KHJwblN0YWNrW2ldKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrWzBdO1xyXG4gICAgfVxyXG4gICAgY2xhc3MgT3BlcmF0b3Ige1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWNlZGVuY2UsIG1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZWNlbmRjZSA9IHByZWNlZGVuY2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY01ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhlYyhsZWZ0LCByaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leGVjTWV0aG9kKGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGVzc09yRXF1YWxUaGFuKG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZWNlbmRjZSA8PSBvcC5wcmVjZW5kY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3BlcmF0b3JzID0gbmV3IE1hcChbXHJcbiAgICAgICAgW1wiK1wiLCBuZXcgT3BlcmF0b3IoMSwgKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0ICsgcmlnaHQpXSxcclxuICAgICAgICBbXCItXCIsIG5ldyBPcGVyYXRvcigxLCAobGVmdCwgcmlnaHQpID0+IGxlZnQgLSByaWdodCldLFxyXG4gICAgICAgIFtcIipcIiwgbmV3IE9wZXJhdG9yKDIsIChsZWZ0LCByaWdodCkgPT4gbGVmdCAqIHJpZ2h0KV0sXHJcbiAgICAgICAgW1wiL1wiLCBuZXcgT3BlcmF0b3IoMiwgKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0IC8gcmlnaHQpXVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgaXNTeXN0ZW1EYXJrTW9kZUVuYWJsZWQgPSAoKSA9PlxyXG4gICAgICAgIG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXM7XHJcblxyXG4gICAgY29uc3QgaHNsYVBhcnNlQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCByZ2JhUGFyc2VDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHBhcnNlQ29sb3JXaXRoQ2FjaGUoJGNvbG9yKSB7XHJcbiAgICAgICAgJGNvbG9yID0gJGNvbG9yLnRyaW0oKTtcclxuICAgICAgICBpZiAocmdiYVBhcnNlQ2FjaGUuaGFzKCRjb2xvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJnYmFQYXJzZUNhY2hlLmdldCgkY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNvbG9yLmluY2x1ZGVzKFwiY2FsYyhcIikpIHtcclxuICAgICAgICAgICAgJGNvbG9yID0gbG93ZXJDYWxjRXhwcmVzc2lvbigkY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb2xvciA9IHBhcnNlKCRjb2xvcik7XHJcbiAgICAgICAgY29sb3IgJiYgcmdiYVBhcnNlQ2FjaGUuc2V0KCRjb2xvciwgY29sb3IpO1xyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlVG9IU0xXaXRoQ2FjaGUoY29sb3IpIHtcclxuICAgICAgICBpZiAoaHNsYVBhcnNlQ2FjaGUuaGFzKGNvbG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaHNsYVBhcnNlQ2FjaGUuZ2V0KGNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvcik7XHJcbiAgICAgICAgaWYgKCFyZ2IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgaHNsYVBhcnNlQ2FjaGUuc2V0KGNvbG9yLCBoc2wpO1xyXG4gICAgICAgIHJldHVybiBoc2w7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhckNvbG9yQ2FjaGUoKSB7XHJcbiAgICAgICAgaHNsYVBhcnNlQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICByZ2JhUGFyc2VDYWNoZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaHNsVG9SR0Ioe2gsIHMsIGwsIGEgPSAxfSkge1xyXG4gICAgICAgIGlmIChzID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtyLCBiLCBnXSA9IFtsLCBsLCBsXS5tYXAoKHgpID0+IE1hdGgucm91bmQoeCAqIDI1NSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge3IsIGcsIGIsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHM7XHJcbiAgICAgICAgY29uc3QgeCA9IGMgKiAoMSAtIE1hdGguYWJzKCgoaCAvIDYwKSAlIDIpIC0gMSkpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBsIC0gYyAvIDI7XHJcbiAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gKFxyXG4gICAgICAgICAgICBoIDwgNjBcclxuICAgICAgICAgICAgICAgID8gW2MsIHgsIDBdXHJcbiAgICAgICAgICAgICAgICA6IGggPCAxMjBcclxuICAgICAgICAgICAgICAgICAgPyBbeCwgYywgMF1cclxuICAgICAgICAgICAgICAgICAgOiBoIDwgMTgwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbMCwgYywgeF1cclxuICAgICAgICAgICAgICAgICAgICA6IGggPCAyNDBcclxuICAgICAgICAgICAgICAgICAgICAgID8gWzAsIHgsIGNdXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGggPCAzMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbeCwgMCwgY11cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbYywgMCwgeF1cclxuICAgICAgICApLm1hcCgobikgPT4gTWF0aC5yb3VuZCgobiArIG0pICogMjU1KSk7XHJcbiAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJnYlRvSFNMKHtyOiByMjU1LCBnOiBnMjU1LCBiOiBiMjU1LCBhID0gMX0pIHtcclxuICAgICAgICBjb25zdCByID0gcjI1NSAvIDI1NTtcclxuICAgICAgICBjb25zdCBnID0gZzI1NSAvIDI1NTtcclxuICAgICAgICBjb25zdCBiID0gYjI1NSAvIDI1NTtcclxuICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcclxuICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuICAgICAgICBjb25zdCBjID0gbWF4IC0gbWluO1xyXG4gICAgICAgIGNvbnN0IGwgPSAobWF4ICsgbWluKSAvIDI7XHJcbiAgICAgICAgaWYgKGMgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtoOiAwLCBzOiAwLCBsLCBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGggPVxyXG4gICAgICAgICAgICAobWF4ID09PSByXHJcbiAgICAgICAgICAgICAgICA/ICgoZyAtIGIpIC8gYykgJSA2XHJcbiAgICAgICAgICAgICAgICA6IG1heCA9PT0gZ1xyXG4gICAgICAgICAgICAgICAgICA/IChiIC0gcikgLyBjICsgMlxyXG4gICAgICAgICAgICAgICAgICA6IChyIC0gZykgLyBjICsgNCkgKiA2MDtcclxuICAgICAgICBpZiAoaCA8IDApIHtcclxuICAgICAgICAgICAgaCArPSAzNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHMgPSBjIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcclxuICAgICAgICByZXR1cm4ge2gsIHMsIGwsIGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9GaXhlZChuLCBkaWdpdHMgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgZml4ZWQgPSBuLnRvRml4ZWQoZGlnaXRzKTtcclxuICAgICAgICBpZiAoZGlnaXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXhlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZG90ID0gZml4ZWQuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgaWYgKGRvdCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHplcm9zTWF0Y2ggPSBmaXhlZC5tYXRjaCgvMCskLyk7XHJcbiAgICAgICAgICAgIGlmICh6ZXJvc01hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoemVyb3NNYXRjaC5pbmRleCA9PT0gZG90ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZC5zdWJzdHJpbmcoMCwgZG90KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXhlZC5zdWJzdHJpbmcoMCwgemVyb3NNYXRjaC5pbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpeGVkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9TdHJpbmcocmdiKSB7XHJcbiAgICAgICAgY29uc3Qge3IsIGcsIGIsIGF9ID0gcmdiO1xyXG4gICAgICAgIGlmIChhICE9IG51bGwgJiYgYSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKCR7dG9GaXhlZChyKX0sICR7dG9GaXhlZChnKX0sICR7dG9GaXhlZChiKX0sICR7dG9GaXhlZChhLCAyKX0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGByZ2IoJHt0b0ZpeGVkKHIpfSwgJHt0b0ZpeGVkKGcpfSwgJHt0b0ZpeGVkKGIpfSlgO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9IZXhTdHJpbmcoe3IsIGcsIGIsIGF9KSB7XHJcbiAgICAgICAgcmV0dXJuIGAjJHsoYSAhPSBudWxsICYmIGEgPCAxXHJcbiAgICAgICAgICAgID8gW3IsIGcsIGIsIE1hdGgucm91bmQoYSAqIDI1NSldXHJcbiAgICAgICAgICAgIDogW3IsIGcsIGJdXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKCh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7eCA8IDE2ID8gXCIwXCIgOiBcIlwifSR7eC50b1N0cmluZygxNil9YDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcIil9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhzbFRvU3RyaW5nKGhzbCkge1xyXG4gICAgICAgIGNvbnN0IHtoLCBzLCBsLCBhfSA9IGhzbDtcclxuICAgICAgICBpZiAoYSAhPSBudWxsICYmIGEgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgaHNsYSgke3RvRml4ZWQoaCl9LCAke3RvRml4ZWQocyAqIDEwMCl9JSwgJHt0b0ZpeGVkKGwgKiAxMDApfSUsICR7dG9GaXhlZChhLCAyKX0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBoc2woJHt0b0ZpeGVkKGgpfSwgJHt0b0ZpeGVkKHMgKiAxMDApfSUsICR7dG9GaXhlZChsICogMTAwKX0lKWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZ2JNYXRjaCA9IC9ecmdiYT9cXChbXlxcKFxcKV0rXFwpJC87XHJcbiAgICBjb25zdCBoc2xNYXRjaCA9IC9eaHNsYT9cXChbXlxcKFxcKV0rXFwpJC87XHJcbiAgICBjb25zdCBoZXhNYXRjaCA9IC9eI1swLTlhLWZdKyQvaTtcclxuICAgIGZ1bmN0aW9uIHBhcnNlKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IGMgPSAkY29sb3IudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGMubWF0Y2gocmdiTWF0Y2gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVJHQihjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMubWF0Y2goaHNsTWF0Y2gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUhTTChjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMubWF0Y2goaGV4TWF0Y2gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUhleChjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtub3duQ29sb3JzLmhhcyhjKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29sb3JCeU5hbWUoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzeXN0ZW1Db2xvcnMuaGFzKGMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRTeXN0ZW1Db2xvcihjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRjb2xvciA9PT0gXCJ0cmFuc3BhcmVudFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7cjogMCwgZzogMCwgYjogMCwgYTogMH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGMuc3RhcnRzV2l0aChcImNvbG9yKFwiKSB8fCBjLnN0YXJ0c1dpdGgoXCJjb2xvci1taXgoXCIpKSAmJlxyXG4gICAgICAgICAgICBjLmVuZHNXaXRoKFwiKVwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9tUGFyc2VDb2xvcihjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMuc3RhcnRzV2l0aChcImxpZ2h0LWRhcmsoXCIpICYmIGMuZW5kc1dpdGgoXCIpXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChcclxuICAgICAgICAgICAgICAgIC9ebGlnaHQtZGFya1xcKFxccyooW2Etel0rKFxcKC4qXFwpKT8pLFxccyooW2Etel0rKFxcKC4qXFwpKT8pXFxzKlxcKSQvXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NoZW1lQ29sb3IgPSBpc1N5c3RlbURhcmtNb2RlRW5hYmxlZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBtYXRjaFszXVxyXG4gICAgICAgICAgICAgICAgICAgIDogbWF0Y2hbMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2Uoc2NoZW1lQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TnVtYmVycygkY29sb3IpIHtcclxuICAgICAgICBjb25zdCBudW1iZXJzID0gW107XHJcbiAgICAgICAgbGV0IHByZXZQb3MgPSAwO1xyXG4gICAgICAgIGxldCBpc01pbmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAkY29sb3IuaW5kZXhPZihcIihcIik7XHJcbiAgICAgICAgJGNvbG9yID0gJGNvbG9yLnN1YnN0cmluZyhzdGFydEluZGV4ICsgMSwgJGNvbG9yLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJGNvbG9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSAkY29sb3JbaV07XHJcbiAgICAgICAgICAgIGlmICgoYyA+PSBcIjBcIiAmJiBjIDw9IFwiOVwiKSB8fCBjID09PSBcIi5cIiB8fCBjID09PSBcIitcIiB8fCBjID09PSBcIi1cIikge1xyXG4gICAgICAgICAgICAgICAgaXNNaW5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTWluaW5nICYmIChjID09PSBcIiBcIiB8fCBjID09PSBcIixcIiB8fCBjID09PSBcIi9cIikpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlcnMucHVzaCgkY29sb3Iuc3Vic3RyaW5nKHByZXZQb3MsIGkpKTtcclxuICAgICAgICAgICAgICAgIGlzTWluaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBwcmV2UG9zID0gaSArIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTWluaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2UG9zID0gaSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTWluaW5nKSB7XHJcbiAgICAgICAgICAgIG51bWJlcnMucHVzaCgkY29sb3Iuc3Vic3RyaW5nKHByZXZQb3MsICRjb2xvci5sZW5ndGgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcnM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXROdW1iZXJzRnJvbVN0cmluZyhzdHIsIHJhbmdlLCB1bml0cykge1xyXG4gICAgICAgIGNvbnN0IHJhdyA9IGdldE51bWJlcnMoc3RyKTtcclxuICAgICAgICBjb25zdCB1bml0c0xpc3QgPSBPYmplY3QuZW50cmllcyh1bml0cyk7XHJcbiAgICAgICAgY29uc3QgbnVtYmVycyA9IHJhd1xyXG4gICAgICAgICAgICAubWFwKChyKSA9PiByLnRyaW0oKSlcclxuICAgICAgICAgICAgLm1hcCgociwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG47XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1bml0ID0gdW5pdHNMaXN0LmZpbmQoKFt1XSkgPT4gci5lbmRzV2l0aCh1KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VGbG9hdChyLnN1YnN0cmluZygwLCByLmxlbmd0aCAtIHVuaXRbMF0ubGVuZ3RoKSkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFsxXSkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZVtpXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9IHBhcnNlRmxvYXQocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VbaV0gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcnM7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZ2JSYW5nZSA9IFsyNTUsIDI1NSwgMjU1LCAxXTtcclxuICAgIGNvbnN0IHJnYlVuaXRzID0ge1wiJVwiOiAxMDB9O1xyXG4gICAgZnVuY3Rpb24gcGFyc2VSR0IoJHJnYikge1xyXG4gICAgICAgIGNvbnN0IFtyLCBnLCBiLCBhID0gMV0gPSBnZXROdW1iZXJzRnJvbVN0cmluZygkcmdiLCByZ2JSYW5nZSwgcmdiVW5pdHMpO1xyXG4gICAgICAgIHJldHVybiB7ciwgZywgYiwgYX07XHJcbiAgICB9XHJcbiAgICBjb25zdCBoc2xSYW5nZSA9IFszNjAsIDEsIDEsIDFdO1xyXG4gICAgY29uc3QgaHNsVW5pdHMgPSB7XCIlXCI6IDEwMCwgXCJkZWdcIjogMzYwLCBcInJhZFwiOiAyICogTWF0aC5QSSwgXCJ0dXJuXCI6IDF9O1xyXG4gICAgZnVuY3Rpb24gcGFyc2VIU0woJGhzbCkge1xyXG4gICAgICAgIGNvbnN0IFtoLCBzLCBsLCBhID0gMV0gPSBnZXROdW1iZXJzRnJvbVN0cmluZygkaHNsLCBoc2xSYW5nZSwgaHNsVW5pdHMpO1xyXG4gICAgICAgIHJldHVybiBoc2xUb1JHQih7aCwgcywgbCwgYX0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VIZXgoJGhleCkge1xyXG4gICAgICAgIGNvbnN0IGggPSAkaGV4LnN1YnN0cmluZygxKTtcclxuICAgICAgICBzd2l0Y2ggKGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbciwgZywgYl0gPSBbMCwgMSwgMl0ubWFwKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGAke2hbaV19JHtoW2ldfWAsIDE2KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPVxyXG4gICAgICAgICAgICAgICAgICAgIGgubGVuZ3RoID09PSAzID8gMSA6IHBhcnNlSW50KGAke2hbM119JHtoWzNdfWAsIDE2KSAvIDI1NTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7ciwgZywgYiwgYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICBjYXNlIDg6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IFswLCAyLCA0XS5tYXAoKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSwgaSArIDIpLCAxNilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhID1cclxuICAgICAgICAgICAgICAgICAgICBoLmxlbmd0aCA9PT0gNiA/IDEgOiBwYXJzZUludChoLnN1YnN0cmluZyg2LCA4KSwgMTYpIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yQnlOYW1lKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IG4gPSBrbm93bkNvbG9ycy5nZXQoJGNvbG9yKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiAobiA+PiAxNikgJiAyNTUsXHJcbiAgICAgICAgICAgIGc6IChuID4+IDgpICYgMjU1LFxyXG4gICAgICAgICAgICBiOiAobiA+PiAwKSAmIDI1NSxcclxuICAgICAgICAgICAgYTogMVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTeXN0ZW1Db2xvcigkY29sb3IpIHtcclxuICAgICAgICBjb25zdCBuID0gc3lzdGVtQ29sb3JzLmdldCgkY29sb3IpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IChuID4+IDE2KSAmIDI1NSxcclxuICAgICAgICAgICAgZzogKG4gPj4gOCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGI6IChuID4+IDApICYgMjU1LFxyXG4gICAgICAgICAgICBhOiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxvd2VyQ2FsY0V4cHJlc3Npb24oY29sb3IpIHtcclxuICAgICAgICBsZXQgc2VhcmNoSW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VCZXR3ZWVuSW5kaWNlcyA9IChzdGFydCwgZW5kLCByZXBsYWNlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb2xvciA9XHJcbiAgICAgICAgICAgICAgICBjb2xvci5zdWJzdHJpbmcoMCwgc3RhcnQpICsgcmVwbGFjZW1lbnQgKyBjb2xvci5zdWJzdHJpbmcoZW5kKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdoaWxlICgoc2VhcmNoSW5kZXggPSBjb2xvci5pbmRleE9mKFwiY2FsYyhcIikpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IGdldFBhcmVudGhlc2VzUmFuZ2UoY29sb3IsIHNlYXJjaEluZGV4KTtcclxuICAgICAgICAgICAgaWYgKCFyYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNsaWNlID0gY29sb3Iuc2xpY2UocmFuZ2Uuc3RhcnQgKyAxLCByYW5nZS5lbmQgLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgaW5jbHVkZXNQZXJjZW50YWdlID0gc2xpY2UuaW5jbHVkZXMoXCIlXCIpO1xyXG4gICAgICAgICAgICBzbGljZSA9IHNsaWNlLnNwbGl0KFwiJVwiKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBNYXRoLnJvdW5kKGV2YWxNYXRoKHNsaWNlKSk7XHJcbiAgICAgICAgICAgIHJlcGxhY2VCZXR3ZWVuSW5kaWNlcyhcclxuICAgICAgICAgICAgICAgIHJhbmdlLnN0YXJ0IC0gNCxcclxuICAgICAgICAgICAgICAgIHJhbmdlLmVuZCxcclxuICAgICAgICAgICAgICAgIG91dHB1dCArIChpbmNsdWRlc1BlcmNlbnRhZ2UgPyBcIiVcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuICAgIGNvbnN0IGtub3duQ29sb3JzID0gbmV3IE1hcChcclxuICAgICAgICBPYmplY3QuZW50cmllcyh7XHJcbiAgICAgICAgICAgIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXHJcbiAgICAgICAgICAgIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXHJcbiAgICAgICAgICAgIGFxdWE6IDB4MDBmZmZmLFxyXG4gICAgICAgICAgICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcclxuICAgICAgICAgICAgYXp1cmU6IDB4ZjBmZmZmLFxyXG4gICAgICAgICAgICBiZWlnZTogMHhmNWY1ZGMsXHJcbiAgICAgICAgICAgIGJpc3F1ZTogMHhmZmU0YzQsXHJcbiAgICAgICAgICAgIGJsYWNrOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxyXG4gICAgICAgICAgICBibHVlOiAweDAwMDBmZixcclxuICAgICAgICAgICAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXHJcbiAgICAgICAgICAgIGJyb3duOiAweGE1MmEyYSxcclxuICAgICAgICAgICAgYnVybHl3b29kOiAweGRlYjg4NyxcclxuICAgICAgICAgICAgY2FkZXRibHVlOiAweDVmOWVhMCxcclxuICAgICAgICAgICAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXHJcbiAgICAgICAgICAgIGNob2NvbGF0ZTogMHhkMjY5MWUsXHJcbiAgICAgICAgICAgIGNvcmFsOiAweGZmN2Y1MCxcclxuICAgICAgICAgICAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxyXG4gICAgICAgICAgICBjb3Juc2lsazogMHhmZmY4ZGMsXHJcbiAgICAgICAgICAgIGNyaW1zb246IDB4ZGMxNDNjLFxyXG4gICAgICAgICAgICBjeWFuOiAweDAwZmZmZixcclxuICAgICAgICAgICAgZGFya2JsdWU6IDB4MDAwMDhiLFxyXG4gICAgICAgICAgICBkYXJrY3lhbjogMHgwMDhiOGIsXHJcbiAgICAgICAgICAgIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxyXG4gICAgICAgICAgICBkYXJrZ3JheTogMHhhOWE5YTksXHJcbiAgICAgICAgICAgIGRhcmtncmV5OiAweGE5YTlhOSxcclxuICAgICAgICAgICAgZGFya2dyZWVuOiAweDAwNjQwMCxcclxuICAgICAgICAgICAgZGFya2toYWtpOiAweGJkYjc2YixcclxuICAgICAgICAgICAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxyXG4gICAgICAgICAgICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXHJcbiAgICAgICAgICAgIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxyXG4gICAgICAgICAgICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcclxuICAgICAgICAgICAgZGFya3JlZDogMHg4YjAwMDAsXHJcbiAgICAgICAgICAgIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxyXG4gICAgICAgICAgICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxyXG4gICAgICAgICAgICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcclxuICAgICAgICAgICAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXHJcbiAgICAgICAgICAgIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxyXG4gICAgICAgICAgICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcclxuICAgICAgICAgICAgZGFya3Zpb2xldDogMHg5NDAwZDMsXHJcbiAgICAgICAgICAgIGRlZXBwaW5rOiAweGZmMTQ5MyxcclxuICAgICAgICAgICAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxyXG4gICAgICAgICAgICBkaW1ncmF5OiAweDY5Njk2OSxcclxuICAgICAgICAgICAgZGltZ3JleTogMHg2OTY5NjksXHJcbiAgICAgICAgICAgIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxyXG4gICAgICAgICAgICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxyXG4gICAgICAgICAgICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXHJcbiAgICAgICAgICAgIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcclxuICAgICAgICAgICAgZnVjaHNpYTogMHhmZjAwZmYsXHJcbiAgICAgICAgICAgIGdhaW5zYm9ybzogMHhkY2RjZGMsXHJcbiAgICAgICAgICAgIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxyXG4gICAgICAgICAgICBnb2xkOiAweGZmZDcwMCxcclxuICAgICAgICAgICAgZ29sZGVucm9kOiAweGRhYTUyMCxcclxuICAgICAgICAgICAgZ3JheTogMHg4MDgwODAsXHJcbiAgICAgICAgICAgIGdyZXk6IDB4ODA4MDgwLFxyXG4gICAgICAgICAgICBncmVlbjogMHgwMDgwMDAsXHJcbiAgICAgICAgICAgIGdyZWVueWVsbG93OiAweGFkZmYyZixcclxuICAgICAgICAgICAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxyXG4gICAgICAgICAgICBob3RwaW5rOiAweGZmNjliNCxcclxuICAgICAgICAgICAgaW5kaWFucmVkOiAweGNkNWM1YyxcclxuICAgICAgICAgICAgaW5kaWdvOiAweDRiMDA4MixcclxuICAgICAgICAgICAgaXZvcnk6IDB4ZmZmZmYwLFxyXG4gICAgICAgICAgICBraGFraTogMHhmMGU2OGMsXHJcbiAgICAgICAgICAgIGxhdmVuZGVyOiAweGU2ZTZmYSxcclxuICAgICAgICAgICAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXHJcbiAgICAgICAgICAgIGxhd25ncmVlbjogMHg3Y2ZjMDAsXHJcbiAgICAgICAgICAgIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXHJcbiAgICAgICAgICAgIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXHJcbiAgICAgICAgICAgIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxyXG4gICAgICAgICAgICBsaWdodGN5YW46IDB4ZTBmZmZmLFxyXG4gICAgICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXHJcbiAgICAgICAgICAgIGxpZ2h0Z3JheTogMHhkM2QzZDMsXHJcbiAgICAgICAgICAgIGxpZ2h0Z3JleTogMHhkM2QzZDMsXHJcbiAgICAgICAgICAgIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxyXG4gICAgICAgICAgICBsaWdodHBpbms6IDB4ZmZiNmMxLFxyXG4gICAgICAgICAgICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXHJcbiAgICAgICAgICAgIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxyXG4gICAgICAgICAgICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxyXG4gICAgICAgICAgICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXHJcbiAgICAgICAgICAgIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcclxuICAgICAgICAgICAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxyXG4gICAgICAgICAgICBsaWdodHllbGxvdzogMHhmZmZmZTAsXHJcbiAgICAgICAgICAgIGxpbWU6IDB4MDBmZjAwLFxyXG4gICAgICAgICAgICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxyXG4gICAgICAgICAgICBsaW5lbjogMHhmYWYwZTYsXHJcbiAgICAgICAgICAgIG1hZ2VudGE6IDB4ZmYwMGZmLFxyXG4gICAgICAgICAgICBtYXJvb246IDB4ODAwMDAwLFxyXG4gICAgICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcclxuICAgICAgICAgICAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXHJcbiAgICAgICAgICAgIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXHJcbiAgICAgICAgICAgIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXHJcbiAgICAgICAgICAgIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcclxuICAgICAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcclxuICAgICAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxyXG4gICAgICAgICAgICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxyXG4gICAgICAgICAgICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxyXG4gICAgICAgICAgICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxyXG4gICAgICAgICAgICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxyXG4gICAgICAgICAgICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxyXG4gICAgICAgICAgICBtb2NjYXNpbjogMHhmZmU0YjUsXHJcbiAgICAgICAgICAgIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcclxuICAgICAgICAgICAgbmF2eTogMHgwMDAwODAsXHJcbiAgICAgICAgICAgIG9sZGxhY2U6IDB4ZmRmNWU2LFxyXG4gICAgICAgICAgICBvbGl2ZTogMHg4MDgwMDAsXHJcbiAgICAgICAgICAgIG9saXZlZHJhYjogMHg2YjhlMjMsXHJcbiAgICAgICAgICAgIG9yYW5nZTogMHhmZmE1MDAsXHJcbiAgICAgICAgICAgIG9yYW5nZXJlZDogMHhmZjQ1MDAsXHJcbiAgICAgICAgICAgIG9yY2hpZDogMHhkYTcwZDYsXHJcbiAgICAgICAgICAgIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxyXG4gICAgICAgICAgICBwYWxlZ3JlZW46IDB4OThmYjk4LFxyXG4gICAgICAgICAgICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcclxuICAgICAgICAgICAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXHJcbiAgICAgICAgICAgIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxyXG4gICAgICAgICAgICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxyXG4gICAgICAgICAgICBwZXJ1OiAweGNkODUzZixcclxuICAgICAgICAgICAgcGluazogMHhmZmMwY2IsXHJcbiAgICAgICAgICAgIHBsdW06IDB4ZGRhMGRkLFxyXG4gICAgICAgICAgICBwb3dkZXJibHVlOiAweGIwZTBlNixcclxuICAgICAgICAgICAgcHVycGxlOiAweDgwMDA4MCxcclxuICAgICAgICAgICAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXHJcbiAgICAgICAgICAgIHJlZDogMHhmZjAwMDAsXHJcbiAgICAgICAgICAgIHJvc3licm93bjogMHhiYzhmOGYsXHJcbiAgICAgICAgICAgIHJveWFsYmx1ZTogMHg0MTY5ZTEsXHJcbiAgICAgICAgICAgIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcclxuICAgICAgICAgICAgc2FsbW9uOiAweGZhODA3MixcclxuICAgICAgICAgICAgc2FuZHlicm93bjogMHhmNGE0NjAsXHJcbiAgICAgICAgICAgIHNlYWdyZWVuOiAweDJlOGI1NyxcclxuICAgICAgICAgICAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxyXG4gICAgICAgICAgICBzaWVubmE6IDB4YTA1MjJkLFxyXG4gICAgICAgICAgICBzaWx2ZXI6IDB4YzBjMGMwLFxyXG4gICAgICAgICAgICBza3libHVlOiAweDg3Y2VlYixcclxuICAgICAgICAgICAgc2xhdGVibHVlOiAweDZhNWFjZCxcclxuICAgICAgICAgICAgc2xhdGVncmF5OiAweDcwODA5MCxcclxuICAgICAgICAgICAgc2xhdGVncmV5OiAweDcwODA5MCxcclxuICAgICAgICAgICAgc25vdzogMHhmZmZhZmEsXHJcbiAgICAgICAgICAgIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcclxuICAgICAgICAgICAgc3RlZWxibHVlOiAweDQ2ODJiNCxcclxuICAgICAgICAgICAgdGFuOiAweGQyYjQ4YyxcclxuICAgICAgICAgICAgdGVhbDogMHgwMDgwODAsXHJcbiAgICAgICAgICAgIHRoaXN0bGU6IDB4ZDhiZmQ4LFxyXG4gICAgICAgICAgICB0b21hdG86IDB4ZmY2MzQ3LFxyXG4gICAgICAgICAgICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxyXG4gICAgICAgICAgICB2aW9sZXQ6IDB4ZWU4MmVlLFxyXG4gICAgICAgICAgICB3aGVhdDogMHhmNWRlYjMsXHJcbiAgICAgICAgICAgIHdoaXRlOiAweGZmZmZmZixcclxuICAgICAgICAgICAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXHJcbiAgICAgICAgICAgIHllbGxvdzogMHhmZmZmMDAsXHJcbiAgICAgICAgICAgIHllbGxvd2dyZWVuOiAweDlhY2QzMlxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3lzdGVtQ29sb3JzID0gbmV3IE1hcChcclxuICAgICAgICBPYmplY3QuZW50cmllcyh7XHJcbiAgICAgICAgICAgIFwiQWN0aXZlQm9yZGVyXCI6IDB4M2I5OWZjLFxyXG4gICAgICAgICAgICBcIkFjdGl2ZUNhcHRpb25cIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiQXBwV29ya3NwYWNlXCI6IDB4YWFhYWFhLFxyXG4gICAgICAgICAgICBcIkJhY2tncm91bmRcIjogMHg2MzYzY2UsXHJcbiAgICAgICAgICAgIFwiQnV0dG9uRmFjZVwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJCdXR0b25IaWdobGlnaHRcIjogMHhlOWU5ZTksXHJcbiAgICAgICAgICAgIFwiQnV0dG9uU2hhZG93XCI6IDB4OWZhMDlmLFxyXG4gICAgICAgICAgICBcIkJ1dHRvblRleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiQ2FwdGlvblRleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiR3JheVRleHRcIjogMHg3ZjdmN2YsXHJcbiAgICAgICAgICAgIFwiSGlnaGxpZ2h0XCI6IDB4YjJkN2ZmLFxyXG4gICAgICAgICAgICBcIkhpZ2hsaWdodFRleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiSW5hY3RpdmVCb3JkZXJcIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiSW5hY3RpdmVDYXB0aW9uXCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIkluYWN0aXZlQ2FwdGlvblRleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiSW5mb0JhY2tncm91bmRcIjogMHhmYmZjYzUsXHJcbiAgICAgICAgICAgIFwiSW5mb1RleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiTWVudVwiOiAweGY2ZjZmNixcclxuICAgICAgICAgICAgXCJNZW51VGV4dFwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJTY3JvbGxiYXJcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiVGhyZWVERGFya1NoYWRvd1wiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJUaHJlZURGYWNlXCI6IDB4YzBjMGMwLFxyXG4gICAgICAgICAgICBcIlRocmVlREhpZ2hsaWdodFwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJUaHJlZURMaWdodFNoYWRvd1wiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJUaHJlZURTaGFkb3dcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiV2luZG93XCI6IDB4ZWNlY2VjLFxyXG4gICAgICAgICAgICBcIldpbmRvd0ZyYW1lXCI6IDB4YWFhYWFhLFxyXG4gICAgICAgICAgICBcIldpbmRvd1RleHRcIjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgIFwiLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yXCI6IDB4ZTU5NzAwXHJcbiAgICAgICAgfSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXkudG9Mb3dlckNhc2UoKSwgdmFsdWVdKVxyXG4gICAgKTtcclxuICAgIGZ1bmN0aW9uIGdldFNSR0JMaWdodG5lc3MociwgZywgYikge1xyXG4gICAgICAgIHJldHVybiAoMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiKSAvIDI1NTtcclxuICAgIH1cclxuICAgIGxldCBjYW52YXMkMTtcclxuICAgIGxldCBjb250ZXh0JDE7XHJcbiAgICBmdW5jdGlvbiBkb21QYXJzZUNvbG9yKCRjb2xvcikge1xyXG4gICAgICAgIGlmICghY29udGV4dCQxKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcyQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICAgICAgY2FudmFzJDEud2lkdGggPSAxO1xyXG4gICAgICAgICAgICBjYW52YXMkMS5oZWlnaHQgPSAxO1xyXG4gICAgICAgICAgICBjb250ZXh0JDEgPSBjYW52YXMkMS5nZXRDb250ZXh0KFwiMmRcIiwge3dpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0JDEuZmlsbFN0eWxlID0gJGNvbG9yO1xyXG4gICAgICAgIGNvbnRleHQkMS5maWxsUmVjdCgwLCAwLCAxLCAxKTtcclxuICAgICAgICBjb25zdCBkID0gY29udGV4dCQxLmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gYHJnYmEoJHtkWzBdfSwgJHtkWzFdfSwgJHtkWzJdfSwgJHsoZFszXSAvIDI1NSkudG9GaXhlZCgyKX0pYDtcclxuICAgICAgICByZXR1cm4gcGFyc2VSR0IoY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjYWxlKHgsIGluTG93LCBpbkhpZ2gsIG91dExvdywgb3V0SGlnaCkge1xyXG4gICAgICAgIHJldHVybiAoKHggLSBpbkxvdykgKiAob3V0SGlnaCAtIG91dExvdykpIC8gKGluSGlnaCAtIGluTG93KSArIG91dExvdztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsYW1wKHgsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB4KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseU1hdHJpY2VzKG0xLCBtMikge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtMS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHRbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbjIgPSBtMlswXS5sZW5ndGg7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGxlbjMgPSBtMVswXS5sZW5ndGg7IGsgPCBsZW4zOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gbTFbaV1ba10gKiBtMltrXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXVtqXSA9IHN1bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlck1hdHJpeChjb25maWcpIHtcclxuICAgICAgICBsZXQgbSA9IE1hdHJpeC5pZGVudGl0eSgpO1xyXG4gICAgICAgIGlmIChjb25maWcuc2VwaWEgIT09IDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LnNlcGlhKGNvbmZpZy5zZXBpYSAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmdyYXlzY2FsZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguZ3JheXNjYWxlKGNvbmZpZy5ncmF5c2NhbGUgLyAxMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5jb250cmFzdCAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5jb250cmFzdChjb25maWcuY29udHJhc3QgLyAxMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5icmlnaHRuZXNzICE9PSAxMDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmJyaWdodG5lc3MoY29uZmlnLmJyaWdodG5lc3MgLyAxMDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5tb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5pbnZlcnROSHVlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFwcGx5Q29sb3JNYXRyaXgoW3IsIGcsIGJdLCBtYXRyaXgpIHtcclxuICAgICAgICBjb25zdCByZ2IgPSBbW3IgLyAyNTVdLCBbZyAvIDI1NV0sIFtiIC8gMjU1XSwgWzFdLCBbMV1dO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG11bHRpcGx5TWF0cmljZXMobWF0cml4LCByZ2IpO1xyXG4gICAgICAgIHJldHVybiBbMCwgMSwgMl0ubWFwKChpKSA9PlxyXG4gICAgICAgICAgICBjbGFtcChNYXRoLnJvdW5kKHJlc3VsdFtpXVswXSAqIDI1NSksIDAsIDI1NSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgTWF0cml4ID0ge1xyXG4gICAgICAgIGlkZW50aXR5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnZlcnROSHVlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgWzAuMzMzLCAtMC42NjcsIC0wLjY2NywgMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbLTAuNjY3LCAwLjMzMywgLTAuNjY3LCAwLCAxXSxcclxuICAgICAgICAgICAgICAgIFstMC42NjcsIC0wLjY2NywgMC4zMzMsIDAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBicmlnaHRuZXNzKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFt2LCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCB2LCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCB2LCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJhc3Qodikge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gKDEgLSB2KSAvIDI7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbdiwgMCwgMCwgMCwgdF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgdiwgMCwgMCwgdF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgdiwgMCwgdF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcGlhKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjM5MyArIDAuNjA3ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjc2OSAtIDAuNzY5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjE4OSAtIDAuMTg5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4zNDkgLSAwLjM0OSAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC42ODYgKyAwLjMxNCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4xNjggLSAwLjE2OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjcyIC0gMC4yNzIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNTM0IC0gMC41MzQgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMTMxICsgMC44NjkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JheXNjYWxlKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjIxMjYgKyAwLjc4NzQgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzE1MiAtIDAuNzE1MiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjcxNTIgKyAwLjI4NDggKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMDcyMiAtIDAuMDcyMiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjEyNiAtIDAuMjEyNiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC43MTUyIC0gMC43MTUyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjA3MjIgKyAwLjkyNzggKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QmdQb2xlKHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgaXNEYXJrU2NoZW1lID0gdGhlbWUubW9kZSA9PT0gMTtcclxuICAgICAgICBjb25zdCBwcm9wID0gaXNEYXJrU2NoZW1lXHJcbiAgICAgICAgICAgID8gXCJkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yXCJcclxuICAgICAgICAgICAgOiBcImxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoZW1lW3Byb3BdO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RmdQb2xlKHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgaXNEYXJrU2NoZW1lID0gdGhlbWUubW9kZSA9PT0gMTtcclxuICAgICAgICBjb25zdCBwcm9wID0gaXNEYXJrU2NoZW1lXHJcbiAgICAgICAgICAgID8gXCJkYXJrU2NoZW1lVGV4dENvbG9yXCJcclxuICAgICAgICAgICAgOiBcImxpZ2h0U2NoZW1lVGV4dENvbG9yXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoZW1lW3Byb3BdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29sb3JNb2RpZmljYXRpb25DYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGNsZWFyQ29sb3JNb2RpZmljYXRpb25DYWNoZSgpIHtcclxuICAgICAgICBjb2xvck1vZGlmaWNhdGlvbkNhY2hlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZ2JDYWNoZUtleXMgPSBbXCJyXCIsIFwiZ1wiLCBcImJcIiwgXCJhXCJdO1xyXG4gICAgY29uc3QgdGhlbWVDYWNoZUtleXMkMSA9IFtcclxuICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICBcImJyaWdodG5lc3NcIixcclxuICAgICAgICBcImNvbnRyYXN0XCIsXHJcbiAgICAgICAgXCJncmF5c2NhbGVcIixcclxuICAgICAgICBcInNlcGlhXCIsXHJcbiAgICAgICAgXCJkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJkYXJrU2NoZW1lVGV4dENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIFwibGlnaHRTY2hlbWVUZXh0Q29sb3JcIlxyXG4gICAgXTtcclxuICAgIGZ1bmN0aW9uIGdldENhY2hlSWQocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGxldCByZXN1bHRJZCA9IFwiXCI7XHJcbiAgICAgICAgcmdiQ2FjaGVLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHRJZCArPSBgJHtyZ2Jba2V5XX07YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGVtZUNhY2hlS2V5cyQxLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHRJZCArPSBgJHt0aGVtZVtrZXldfTtgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRJZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUNvbG9yV2l0aENhY2hlKFxyXG4gICAgICAgIHJnYixcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBtb2RpZnlIU0wsXHJcbiAgICAgICAgcG9sZUNvbG9yLFxyXG4gICAgICAgIGFub3RoZXJQb2xlQ29sb3JcclxuICAgICkge1xyXG4gICAgICAgIGxldCBmbkNhY2hlO1xyXG4gICAgICAgIGlmIChjb2xvck1vZGlmaWNhdGlvbkNhY2hlLmhhcyhtb2RpZnlIU0wpKSB7XHJcbiAgICAgICAgICAgIGZuQ2FjaGUgPSBjb2xvck1vZGlmaWNhdGlvbkNhY2hlLmdldChtb2RpZnlIU0wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZuQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuc2V0KG1vZGlmeUhTTCwgZm5DYWNoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkID0gZ2V0Q2FjaGVJZChyZ2IsIHRoZW1lKTtcclxuICAgICAgICBpZiAoZm5DYWNoZS5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmbkNhY2hlLmdldChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgY29uc3QgcG9sZSA9IHBvbGVDb2xvciA9PSBudWxsID8gbnVsbCA6IHBhcnNlVG9IU0xXaXRoQ2FjaGUocG9sZUNvbG9yKTtcclxuICAgICAgICBjb25zdCBhbm90aGVyUG9sZSA9XHJcbiAgICAgICAgICAgIGFub3RoZXJQb2xlQ29sb3IgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICA6IHBhcnNlVG9IU0xXaXRoQ2FjaGUoYW5vdGhlclBvbGVDb2xvcik7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWQgPSBtb2RpZnlIU0woaHNsLCBwb2xlLCBhbm90aGVyUG9sZSk7XHJcbiAgICAgICAgY29uc3Qge3IsIGcsIGIsIGF9ID0gaHNsVG9SR0IobW9kaWZpZWQpO1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IGNyZWF0ZUZpbHRlck1hdHJpeCh0aGVtZSk7XHJcbiAgICAgICAgY29uc3QgW3JmLCBnZiwgYmZdID0gYXBwbHlDb2xvck1hdHJpeChbciwgZywgYl0sIG1hdHJpeCk7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPVxyXG4gICAgICAgICAgICBhID09PSAxXHJcbiAgICAgICAgICAgICAgICA/IHJnYlRvSGV4U3RyaW5nKHtyOiByZiwgZzogZ2YsIGI6IGJmfSlcclxuICAgICAgICAgICAgICAgIDogcmdiVG9TdHJpbmcoe3I6IHJmLCBnOiBnZiwgYjogYmYsIGF9KTtcclxuICAgICAgICBmbkNhY2hlLnNldChpZCwgY29sb3IpO1xyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGNvbnN0IHBvbGVCZyA9IGdldEJnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgY29uc3QgcG9sZUZnID0gZ2V0RmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgIG1vZGlmeUxpZ2h0TW9kZUhTTCxcclxuICAgICAgICAgICAgcG9sZUZnLFxyXG4gICAgICAgICAgICBwb2xlQmdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5TGlnaHRNb2RlSFNMKHtoLCBzLCBsLCBhfSwgcG9sZUZnLCBwb2xlQmcpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmsgPSBsIDwgMC41O1xyXG4gICAgICAgIGxldCBpc05ldXRyYWw7XHJcbiAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICBpc05ldXRyYWwgPSBsIDwgMC4yIHx8IHMgPCAwLjEyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQmx1ZSA9IGggPiAyMDAgJiYgaCA8IDI4MDtcclxuICAgICAgICAgICAgaXNOZXV0cmFsID0gcyA8IDAuMjQgfHwgKGwgPiAwLjggJiYgaXNCbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGh4ID0gaDtcclxuICAgICAgICBsZXQgc3ggPSBsO1xyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICAgICAgaHggPSBwb2xlRmcuaDtcclxuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUZnLnM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVCZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlQmcucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBseCA9IHNjYWxlKGwsIDAsIDEsIHBvbGVGZy5sLCBwb2xlQmcubCk7XHJcbiAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogc3gsIGw6IGx4LCBhfTtcclxuICAgIH1cclxuICAgIGNvbnN0IE1BWF9CR19MSUdIVE5FU1MgPSAwLjQ7XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCZ0hTTCh7aCwgcywgbCwgYX0sIHBvbGUpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmsgPSBsIDwgMC41O1xyXG4gICAgICAgIGNvbnN0IGlzQmx1ZSA9IGggPiAyMDAgJiYgaCA8IDI4MDtcclxuICAgICAgICBjb25zdCBpc05ldXRyYWwgPSBzIDwgMC4xMiB8fCAobCA+IDAuOCAmJiBpc0JsdWUpO1xyXG4gICAgICAgIGlmIChpc0RhcmspIHtcclxuICAgICAgICAgICAgY29uc3QgbHggPSBzY2FsZShsLCAwLCAwLjUsIDAsIE1BWF9CR19MSUdIVE5FU1MpO1xyXG4gICAgICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoeCA9IHBvbGUuaDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN4ID0gcG9sZS5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtoOiBoeCwgczogc3gsIGw6IGx4LCBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge2gsIHMsIGw6IGx4LCBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGx4ID0gc2NhbGUobCwgMC41LCAxLCBNQVhfQkdfTElHSFRORVNTLCBwb2xlLmwpO1xyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgY29uc3QgaHggPSBwb2xlLmg7XHJcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gcG9sZS5zO1xyXG4gICAgICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaHggPSBoO1xyXG4gICAgICAgIGNvbnN0IGlzWWVsbG93ID0gaCA+IDYwICYmIGggPCAxODA7XHJcbiAgICAgICAgaWYgKGlzWWVsbG93KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VyVG9HcmVlbiA9IGggPiAxMjA7XHJcbiAgICAgICAgICAgIGlmIChpc0Nsb3NlclRvR3JlZW4pIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gc2NhbGUoaCwgMTIwLCAxODAsIDEzNSwgMTgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gc2NhbGUoaCwgNjAsIDEyMCwgNjAsIDEwNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGh4ID4gNDAgJiYgaHggPCA4MCkge1xyXG4gICAgICAgICAgICBseCAqPSAwLjc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzLCBsOiBseCwgYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGlmICh0aGVtZS5tb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2xlID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgey4uLnRoZW1lLCBtb2RlOiAwfSxcclxuICAgICAgICAgICAgbW9kaWZ5QmdIU0wsXHJcbiAgICAgICAgICAgIHBvbGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgTUlOX0ZHX0xJR0hUTkVTUyA9IDAuNTU7XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCbHVlRmdIdWUoaHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNjYWxlKGh1ZSwgMjA1LCAyNDUsIDIwNSwgMjIwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUZnSFNMKHtoLCBzLCBsLCBhfSwgcG9sZSkge1xyXG4gICAgICAgIGNvbnN0IGlzTGlnaHQgPSBsID4gMC41O1xyXG4gICAgICAgIGNvbnN0IGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMjQ7XHJcbiAgICAgICAgY29uc3QgaXNCbHVlID0gIWlzTmV1dHJhbCAmJiBoID4gMjA1ICYmIGggPCAyNDU7XHJcbiAgICAgICAgaWYgKGlzTGlnaHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbHggPSBzY2FsZShsLCAwLjUsIDEsIE1JTl9GR19MSUdIVE5FU1MsIHBvbGUubCk7XHJcbiAgICAgICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGh4ID0gcG9sZS5oO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoeCA9IGg7XHJcbiAgICAgICAgICAgIGlmIChpc0JsdWUpIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gbW9kaWZ5Qmx1ZUZnSHVlKGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHMsIGw6IGx4LCBhfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBjb25zdCBoeCA9IHBvbGUuaDtcclxuICAgICAgICAgICAgY29uc3Qgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgIGNvbnN0IGx4ID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1JTl9GR19MSUdIVE5FU1MpO1xyXG4gICAgICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaHggPSBoO1xyXG4gICAgICAgIGxldCBseDtcclxuICAgICAgICBpZiAoaXNCbHVlKSB7XHJcbiAgICAgICAgICAgIGh4ID0gbW9kaWZ5Qmx1ZUZnSHVlKGgpO1xyXG4gICAgICAgICAgICBseCA9IHNjYWxlKGwsIDAsIDAuNSwgcG9sZS5sLCBNYXRoLm1pbigxLCBNSU5fRkdfTElHSFRORVNTICsgMC4wNSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGx4ID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1JTl9GR19MSUdIVE5FU1MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzLCBsOiBseCwgYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGlmICh0aGVtZS5tb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2xlID0gZ2V0RmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgey4uLnRoZW1lLCBtb2RlOiAwfSxcclxuICAgICAgICAgICAgbW9kaWZ5RmdIU0wsXHJcbiAgICAgICAgICAgIHBvbGVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Qm9yZGVySFNMKHtoLCBzLCBsLCBhfSwgcG9sZUZnLCBwb2xlQmcpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmsgPSBsIDwgMC41O1xyXG4gICAgICAgIGNvbnN0IGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMjQ7XHJcbiAgICAgICAgbGV0IGh4ID0gaDtcclxuICAgICAgICBsZXQgc3ggPSBzO1xyXG4gICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICAgICAgaHggPSBwb2xlRmcuaDtcclxuICAgICAgICAgICAgICAgIHN4ID0gcG9sZUZnLnM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVCZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlQmcucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBseCA9IHNjYWxlKGwsIDAsIDEsIDAuNSwgMC4yKTtcclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Qm9yZGVyQ29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIGlmICh0aGVtZS5tb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RpZnlMaWdodFNjaGVtZUNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2xlRmcgPSBnZXRGZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIGNvbnN0IHBvbGVCZyA9IGdldEJnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUNvbG9yV2l0aENhY2hlKFxyXG4gICAgICAgICAgICByZ2IsXHJcbiAgICAgICAgICAgIHsuLi50aGVtZSwgbW9kZTogMH0sXHJcbiAgICAgICAgICAgIG1vZGlmeUJvcmRlckhTTCxcclxuICAgICAgICAgICAgcG9sZUZnLFxyXG4gICAgICAgICAgICBwb2xlQmdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5U2hhZG93Q29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4Y2x1ZGVkU2VsZWN0b3JzID0gW1xyXG4gICAgICAgIFwicHJlXCIsXHJcbiAgICAgICAgXCJwcmUgKlwiLFxyXG4gICAgICAgIFwiY29kZVwiLFxyXG4gICAgICAgICdbYXJpYS1oaWRkZW49XCJ0cnVlXCJdJyxcclxuICAgICAgICAnW2NsYXNzKj1cImZhLVwiXScsXHJcbiAgICAgICAgXCIuZmFcIixcclxuICAgICAgICBcIi5mYWJcIixcclxuICAgICAgICBcIi5mYWRcIixcclxuICAgICAgICBcIi5mYWxcIixcclxuICAgICAgICBcIi5mYXJcIixcclxuICAgICAgICBcIi5mYXNcIixcclxuICAgICAgICBcIi5mYXNzXCIsXHJcbiAgICAgICAgXCIuZmFzclwiLFxyXG4gICAgICAgIFwiLmZhdFwiLFxyXG4gICAgICAgIFwiLmljb2ZvbnRcIixcclxuICAgICAgICAnW3N0eWxlKj1cImZvbnQtXCJdJyxcclxuICAgICAgICAnW2NsYXNzKj1cImljb25cIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwiSWNvblwiXScsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJzeW1ib2xcIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwiU3ltYm9sXCJdJyxcclxuICAgICAgICBcIi5nbHlwaGljb25cIixcclxuICAgICAgICAnW2NsYXNzKj1cIm1hdGVyaWFsLXN5bWJvbFwiXScsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJtYXRlcmlhbC1pY29uXCJdJyxcclxuICAgICAgICBcIm11XCIsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJtdS1cIl0nLFxyXG4gICAgICAgIFwiLnR5cGNuXCIsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJ2anMtXCJdJ1xyXG4gICAgXTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHRTdHlsZShjb25maWcpIHtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYCo6bm90KCR7ZXhjbHVkZWRTZWxlY3RvcnMuam9pbihcIiwgXCIpfSkge2ApO1xyXG4gICAgICAgIGlmIChjb25maWcudXNlRm9udCAmJiBjb25maWcuZm9udEZhbWlseSkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAgIGZvbnQtZmFtaWx5OiAke2NvbmZpZy5mb250RmFtaWx5fSAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLnRleHRTdHJva2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAke2NvbmZpZy50ZXh0U3Ryb2tlfXB4ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAgIHRleHQtc3Ryb2tlOiAke2NvbmZpZy50ZXh0U3Ryb2tlfXB4ICFpbXBvcnRhbnQ7YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBGaWx0ZXJNb2RlO1xyXG4gICAgKGZ1bmN0aW9uIChGaWx0ZXJNb2RlKSB7XHJcbiAgICAgICAgRmlsdGVyTW9kZVsoRmlsdGVyTW9kZVtcImxpZ2h0XCJdID0gMCldID0gXCJsaWdodFwiO1xyXG4gICAgICAgIEZpbHRlck1vZGVbKEZpbHRlck1vZGVbXCJkYXJrXCJdID0gMSldID0gXCJkYXJrXCI7XHJcbiAgICB9KShGaWx0ZXJNb2RlIHx8IChGaWx0ZXJNb2RlID0ge30pKTtcclxuICAgIGZ1bmN0aW9uIGdldENTU0ZpbHRlclZhbHVlKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAoY29uZmlnLm1vZGUgPT09IEZpbHRlck1vZGUuZGFyaykge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCJpbnZlcnQoMTAwJSkgaHVlLXJvdGF0ZSgxODBkZWcpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmJyaWdodG5lc3MgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goYGJyaWdodG5lc3MoJHtjb25maWcuYnJpZ2h0bmVzc30lKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmNvbnRyYXN0ICE9PSAxMDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKGBjb250cmFzdCgke2NvbmZpZy5jb250cmFzdH0lKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmdyYXlzY2FsZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goYGdyYXlzY2FsZSgke2NvbmZpZy5ncmF5c2NhbGV9JSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zZXBpYSAhPT0gMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goYHNlcGlhKCR7Y29uZmlnLnNlcGlhfSUpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcnMuam9pbihcIiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9TVkdNYXRyaXgobWF0cml4KSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeFxyXG4gICAgICAgICAgICAuc2xpY2UoMCwgNClcclxuICAgICAgICAgICAgLm1hcCgobSkgPT4gbS5tYXAoKG0pID0+IG0udG9GaXhlZCgzKSkuam9pbihcIiBcIikpXHJcbiAgICAgICAgICAgIC5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNWR0ZpbHRlck1hdHJpeFZhbHVlKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0b1NWR01hdHJpeChjcmVhdGVGaWx0ZXJNYXRyaXgoY29uZmlnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGV4aWZ5KG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAobnVtYmVyIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgbnVtYmVyLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVUlEKCkge1xyXG4gICAgICAgIGlmIChcInJhbmRvbVVVSURcIiBpbiBjcnlwdG8pIHtcclxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygwLCA4KSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZyg5LCAxMykgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMTQsIDE4KSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygxOSwgMjMpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDI0KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXCJnZXRSYW5kb21WYWx1ZXNcIiBpbiBjcnlwdG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxNikpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4gaGV4aWZ5KHgpKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICoqIDU1KS50b1N0cmluZygzNik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzb2x2ZXJzJDEgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCByZWplY3RvcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBiZ0ZldGNoKHJlcXVlc3QpIHtcclxuICAgICAgICBpZiAod2luZG93LkRhcmtSZWFkZXI/LlBsdWdpbnM/LmZldGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuRGFya1JlYWRlci5QbHVnaW5zLmZldGNoKHJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGdlbmVyYXRlVUlEKCk7XHJcbiAgICAgICAgICAgIHJlc29sdmVycyQxLnNldChpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIHJlamVjdG9ycy5zZXQoaWQsIHJlamVjdCk7XHJcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlQ1N0b0JHLkZFVENILFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKCh7dHlwZSwgZGF0YSwgZXJyb3IsIGlkfSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBNZXNzYWdlVHlwZUJHdG9DUy5GRVRDSF9SRVNQT05TRSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvbHZlID0gcmVzb2x2ZXJzJDEuZ2V0KGlkKTtcclxuICAgICAgICAgICAgY29uc3QgcmVqZWN0ID0gcmVqZWN0b3JzLmdldChpZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmVycyQxLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIHJlamVjdG9ycy5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCAmJiByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgTUFYX0ZSQU1FX0RVUkFUSU9OID0gMTAwMCAvIDYwO1xyXG4gICAgY2xhc3MgQXN5bmNRdWV1ZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZUZyYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3AoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVySWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NoZWR1bGVGcmFtZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNiO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKChjYiA9IHRoaXMucXVldWUuc2hpZnQoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPj0gTUFYX0ZSQU1FX0RVUkFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVGcmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZU1hbmFnZXIgPSBuZXcgQXN5bmNRdWV1ZSgpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VEZXRhaWxzKHVybCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVVJMID0gdXJsLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKVxyXG4gICAgICAgICAgICAgICAgICAgID8gdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhd2FpdCBnZXREYXRhVVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID1cclxuICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0RGF0YVVSTFRvQmxvYlN5bmMoZGF0YVVSTCkgPz9cclxuICAgICAgICAgICAgICAgICAgICAoYXdhaXQgbG9hZEFzQmxvYih1cmwpKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhVVJMLnN0YXJ0c1dpdGgoXCJkYXRhOmltYWdlL3N2Zyt4bWxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShkYXRhVVJMKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXdhaXQgdHJ5Q3JlYXRlSW1hZ2VCaXRtYXAoYmxvYikpID8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhd2FpdCBsb2FkSW1hZ2UoZGF0YVVSTCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2VNYW5hZ2VyLmFkZFRhc2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuYWx5c2lzID0gYW5hbHl6ZUltYWdlKGltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVUkw6IGFuYWx5c2lzLmlzTGFyZ2UgPyBcIlwiIDogZGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uYW5hbHlzaXNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YVVSTCh1cmwpIHtcclxuICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKHVybCk7XHJcbiAgICAgICAgaWYgKHBhcnNlZFVSTC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbG9hZEFzRGF0YVVSTCh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgYmdGZXRjaCh7dXJsLCByZXNwb25zZVR5cGU6IFwiZGF0YS11cmxcIn0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdHJ5Q3JlYXRlSW1hZ2VCaXRtYXAoYmxvYikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbG9nV2FybihcclxuICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gY3JlYXRlIGltYWdlIGJpdG1hcCBmb3IgdHlwZSAke2Jsb2IudHlwZX06ICR7U3RyaW5nKGVycil9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBJTkNPTVBMRVRFX0RPQ19MT0FESU5HX0lNQUdFX0xJTUlUID0gMjU2O1xyXG4gICAgbGV0IGxvYWRpbmdJbWFnZXNDb3VudCA9IDA7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkSW1hZ2UodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYFVuYWJsZSB0byBsb2FkIGltYWdlICR7dXJsfWApO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICArK2xvYWRpbmdJbWFnZXNDb3VudCA8PSBJTkNPTVBMRVRFX0RPQ19MT0FESU5HX0lNQUdFX0xJTUlUIHx8XHJcbiAgICAgICAgICAgICAgICBpc1JlYWR5U3RhdGVDb21wbGV0ZSgpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXIoKCkgPT4gKGltYWdlLnNyYyA9IHVybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBNQVhfQU5BTFlTSVNfUElYRUxTX0NPVU5UID0gMzIgKiAzMjtcclxuICAgIGxldCBjYW52YXM7XHJcbiAgICBsZXQgY29udGV4dDtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IE1BWF9BTkFMWVNJU19QSVhFTFNfQ09VTlQ7XHJcbiAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gTUFYX0FOQUxZU0lTX1BJWEVMU19DT1VOVDtcclxuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiwge3dpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZX0pO1xyXG4gICAgICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVDYW52YXMoKSB7XHJcbiAgICAgICAgY2FudmFzID0gbnVsbDtcclxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IExBUkdFX0lNQUdFX1BJWEVMU19DT1VOVCA9IDUxMiAqIDUxMjtcclxuICAgIGZ1bmN0aW9uIGFuYWx5emVJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNhbnZhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3c7XHJcbiAgICAgICAgbGV0IHNoO1xyXG4gICAgICAgIGlmIChpbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgc3cgPSBpbWFnZS5uYXR1cmFsV2lkdGg7XHJcbiAgICAgICAgICAgIHNoID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdyA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgICAgICBzaCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN3ID09PSAwIHx8IHNoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc0Rhcms6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1RyYW5zcGFyZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTGFyZ2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzTGFyZ2UgPSBzdyAqIHNoID4gTEFSR0VfSU1BR0VfUElYRUxTX0NPVU5UO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVBpeGVsc0NvdW50ID0gc3cgKiBzaDtcclxuICAgICAgICBjb25zdCBrID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIE1hdGguc3FydChNQVhfQU5BTFlTSVNfUElYRUxTX0NPVU5UIC8gc291cmNlUGl4ZWxzQ291bnQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGguY2VpbChzdyAqIGspO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguY2VpbChzaCAqIGspO1xyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBzdywgc2gsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGQgPSBpbWFnZURhdGEuZGF0YTtcclxuICAgICAgICBjb25zdCBUUkFOU1BBUkVOVF9BTFBIQV9USFJFU0hPTEQgPSAwLjA1O1xyXG4gICAgICAgIGNvbnN0IERBUktfTElHSFRORVNTX1RIUkVTSE9MRCA9IDAuNDtcclxuICAgICAgICBjb25zdCBMSUdIVF9MSUdIVE5FU1NfVEhSRVNIT0xEID0gMC43O1xyXG4gICAgICAgIGxldCB0cmFuc3BhcmVudFBpeGVsc0NvdW50ID0gMDtcclxuICAgICAgICBsZXQgZGFya1BpeGVsc0NvdW50ID0gMDtcclxuICAgICAgICBsZXQgbGlnaHRQaXhlbHNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGksIHgsIHk7XHJcbiAgICAgICAgbGV0IHIsIGcsIGIsIGE7XHJcbiAgICAgICAgbGV0IGw7XHJcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gNCAqICh5ICogd2lkdGggKyB4KTtcclxuICAgICAgICAgICAgICAgIHIgPSBkW2kgKyAwXTtcclxuICAgICAgICAgICAgICAgIGcgPSBkW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIGIgPSBkW2kgKyAyXTtcclxuICAgICAgICAgICAgICAgIGEgPSBkW2kgKyAzXTtcclxuICAgICAgICAgICAgICAgIGlmIChhIC8gMjU1IDwgVFJBTlNQQVJFTlRfQUxQSEFfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsID0gZ2V0U1JHQkxpZ2h0bmVzcyhyLCBnLCBiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCA8IERBUktfTElHSFRORVNTX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrUGl4ZWxzQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwgPiBMSUdIVF9MSUdIVE5FU1NfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0UGl4ZWxzQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG90YWxQaXhlbHNDb3VudCA9IHdpZHRoICogaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG9wYXF1ZVBpeGVsc0NvdW50ID0gdG90YWxQaXhlbHNDb3VudCAtIHRyYW5zcGFyZW50UGl4ZWxzQ291bnQ7XHJcbiAgICAgICAgY29uc3QgREFSS19JTUFHRV9USFJFU0hPTEQgPSAwLjc7XHJcbiAgICAgICAgY29uc3QgTElHSFRfSU1BR0VfVEhSRVNIT0xEID0gMC43O1xyXG4gICAgICAgIGNvbnN0IFRSQU5TUEFSRU5UX0lNQUdFX1RIUkVTSE9MRCA9IDAuMTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc0Rhcms6IGRhcmtQaXhlbHNDb3VudCAvIG9wYXF1ZVBpeGVsc0NvdW50ID49IERBUktfSU1BR0VfVEhSRVNIT0xELFxyXG4gICAgICAgICAgICBpc0xpZ2h0OlxyXG4gICAgICAgICAgICAgICAgbGlnaHRQaXhlbHNDb3VudCAvIG9wYXF1ZVBpeGVsc0NvdW50ID49IExJR0hUX0lNQUdFX1RIUkVTSE9MRCxcclxuICAgICAgICAgICAgaXNUcmFuc3BhcmVudDpcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50UGl4ZWxzQ291bnQgLyB0b3RhbFBpeGVsc0NvdW50ID49XHJcbiAgICAgICAgICAgICAgICBUUkFOU1BBUkVOVF9JTUFHRV9USFJFU0hPTEQsXHJcbiAgICAgICAgICAgIGlzTGFyZ2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbGV0IGlzQmxvYlVSTFN1cHBvcnRlZCA9IG51bGw7XHJcbiAgICBsZXQgY2FuVXNlUHJveHkgPSBmYWxzZTtcclxuICAgIGxldCBibG9iVVJMQ2hlY2tSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGJsb2JVUkxDaGVja0F3YWl0ZXJzID0gW107XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZFwiLFxyXG4gICAgICAgICgpID0+IChjYW5Vc2VQcm94eSA9IHRydWUpLFxyXG4gICAgICAgIHtvbmNlOiB0cnVlfVxyXG4gICAgKTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RCbG9iVVJMQ2hlY2soKSB7XHJcbiAgICAgICAgaWYgKCFjYW5Vc2VQcm94eSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChibG9iVVJMQ2hlY2tSZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PlxyXG4gICAgICAgICAgICAgICAgYmxvYlVSTENoZWNrQXdhaXRlcnMucHVzaChyZXNvbHZlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBibG9iVVJMQ2hlY2tSZXF1ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYmxvYlVSTENoZWNrUmVzcG9uc2VcIixcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNCbG9iVVJMU3VwcG9ydGVkID0gZS5kZXRhaWwuYmxvYlVSTEFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2JVUkxDaGVja0F3YWl0ZXJzLmZvckVhY2goKHIpID0+IHIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvYlVSTENoZWNrQXdhaXRlcnMuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtvbmNlOiB0cnVlfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19ibG9iVVJMQ2hlY2tSZXF1ZXN0XCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0Jsb2JVUkxDaGVja1Jlc3VsdFJlYWR5KCkge1xyXG4gICAgICAgIHJldHVybiBpc0Jsb2JVUkxTdXBwb3J0ZWQgIT0gbnVsbCB8fCAhY2FuVXNlUHJveHk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbkNTUEVycm9yKGVycikge1xyXG4gICAgICAgIGlmIChlcnIuYmxvY2tlZFVSSSA9PT0gXCJibG9iXCIpIHtcclxuICAgICAgICAgICAgaXNCbG9iVVJMU3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWN1cml0eXBvbGljeXZpb2xhdGlvblwiLCBvbkNTUEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VjdXJpdHlwb2xpY3l2aW9sYXRpb25cIiwgb25DU1BFcnJvcik7XHJcbiAgICBjb25zdCBvYmplY3RVUkxzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gZ2V0RmlsdGVyZWRJbWFnZVVSTCh7ZGF0YVVSTCwgd2lkdGgsIGhlaWdodH0sIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKGRhdGFVUkwuc3RhcnRzV2l0aChcImRhdGE6aW1hZ2Uvc3ZnK3htbFwiKSkge1xyXG4gICAgICAgICAgICBkYXRhVVJMID0gZXNjYXBlWE1MKGRhdGFVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXRyaXggPSBnZXRTVkdGaWx0ZXJNYXRyaXhWYWx1ZSh0aGVtZSk7XHJcbiAgICAgICAgY29uc3Qgc3ZnID0gW1xyXG4gICAgICAgICAgICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiPmAsXHJcbiAgICAgICAgICAgIFwiPGRlZnM+XCIsXHJcbiAgICAgICAgICAgICc8ZmlsdGVyIGlkPVwiZGFya3JlYWRlci1pbWFnZS1maWx0ZXJcIj4nLFxyXG4gICAgICAgICAgICBgPGZlQ29sb3JNYXRyaXggdHlwZT1cIm1hdHJpeFwiIHZhbHVlcz1cIiR7bWF0cml4fVwiIC8+YCxcclxuICAgICAgICAgICAgXCI8L2ZpbHRlcj5cIixcclxuICAgICAgICAgICAgXCI8L2RlZnM+XCIsXHJcbiAgICAgICAgICAgIGA8aW1hZ2Ugd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIGZpbHRlcj1cInVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpXCIgeGxpbms6aHJlZj1cIiR7ZGF0YVVSTH1cIiAvPmAsXHJcbiAgICAgICAgICAgIFwiPC9zdmc+XCJcclxuICAgICAgICBdLmpvaW4oXCJcIik7XHJcbiAgICAgICAgaWYgKCFpc0Jsb2JVUkxTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7YnRvYShzdmcpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3ZnLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYnl0ZXNbaV0gPSBzdmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtieXRlc10sIHt0eXBlOiBcImltYWdlL3N2Zyt4bWxcIn0pO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgb2JqZWN0VVJMcy5hZGQob2JqZWN0VVJMKTtcclxuICAgICAgICByZXR1cm4gb2JqZWN0VVJMO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeG1sRXNjYXBlQ2hhcnMgPSB7XHJcbiAgICAgICAgXCI8XCI6IFwiJmx0O1wiLFxyXG4gICAgICAgIFwiPlwiOiBcIiZndDtcIixcclxuICAgICAgICBcIiZcIjogXCImYW1wO1wiLFxyXG4gICAgICAgIFwiJ1wiOiBcIiZhcG9zO1wiLFxyXG4gICAgICAgICdcIic6IFwiJnF1b3Q7XCJcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBlc2NhcGVYTUwoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bPD4mJ1wiXS9nLCAoYykgPT4geG1sRXNjYXBlQ2hhcnNbY10gPz8gYyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhVVJMQmxvYlVSTHMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiB0cnlDb252ZXJ0RGF0YVVSTFRvQmxvYlN5bmMoZGF0YVVSTCkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9uSW5kZXggPSBkYXRhVVJMLmluZGV4T2YoXCI6XCIpO1xyXG4gICAgICAgIGNvbnN0IHNlbWljb2xvbkluZGV4ID0gZGF0YVVSTC5pbmRleE9mKFwiO1wiLCBjb2xvbkluZGV4ICsgMSk7XHJcbiAgICAgICAgY29uc3QgY29tbWFJbmRleCA9IGRhdGFVUkwuaW5kZXhPZihcIixcIiwgc2VtaWNvbG9uSW5kZXggKyAxKTtcclxuICAgICAgICBjb25zdCBlbmNvZGluZyA9IGRhdGFVUkxcclxuICAgICAgICAgICAgLnN1YnN0cmluZyhzZW1pY29sb25JbmRleCArIDEsIGNvbW1hSW5kZXgpXHJcbiAgICAgICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IGRhdGFVUkwuc3Vic3RyaW5nKGNvbG9uSW5kZXggKyAxLCBzZW1pY29sb25JbmRleCk7XHJcbiAgICAgICAgaWYgKGVuY29kaW5nICE9PSBcImJhc2U2NFwiIHx8ICFtZWRpYVR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBhdG9iKGRhdGFVUkwuc3Vic3RyaW5nKGNvbW1hSW5kZXggKyAxKSk7XHJcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShjaGFyYWN0ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFyYWN0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzW2ldID0gY2hhcmFjdGVycy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2J5dGVzXSwge3R5cGU6IG1lZGlhVHlwZX0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdHJ5Q29udmVydERhdGFVUkxUb0Jsb2JVUkwoZGF0YVVSTCkge1xyXG4gICAgICAgIGlmICghaXNCbG9iVVJMU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBoYXNoID0gZ2V0SGFzaENvZGUoZGF0YVVSTCk7XHJcbiAgICAgICAgbGV0IGJsb2JVUkwgPSBkYXRhVVJMQmxvYlVSTHMuZ2V0KGhhc2gpO1xyXG4gICAgICAgIGlmIChibG9iVVJMKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBibG9iVVJMO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmxvYiA9IHRyeUNvbnZlcnREYXRhVVJMVG9CbG9iU3luYyhkYXRhVVJMKTtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhVVJMKTtcclxuICAgICAgICAgICAgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmxvYlVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgZGF0YVVSTEJsb2JVUkxzLnNldChoYXNoLCBibG9iVVJMKTtcclxuICAgICAgICByZXR1cm4gYmxvYlVSTDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuSW1hZ2VQcm9jZXNzaW5nQ2FjaGUoKSB7XHJcbiAgICAgICAgaW1hZ2VNYW5hZ2VyICYmIGltYWdlTWFuYWdlci5zdG9wKCk7XHJcbiAgICAgICAgcmVtb3ZlQ2FudmFzKCk7XHJcbiAgICAgICAgb2JqZWN0VVJMcy5mb3JFYWNoKCh1KSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHUpKTtcclxuICAgICAgICBvYmplY3RVUkxzLmNsZWFyKCk7XHJcbiAgICAgICAgZGF0YVVSTEJsb2JVUkxzLmZvckVhY2goKHUpID0+IFVSTC5yZXZva2VPYmplY3RVUkwodSkpO1xyXG4gICAgICAgIGRhdGFVUkxCbG9iVVJMcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50TGVuZ3RoID0gXCJncmFkaWVudFwiLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbmljR3JhZGllbnQgPSBcImNvbmljLVwiO1xyXG4gICAgY29uc3QgY29uaWNHcmFkaWVudExlbmd0aCA9IGNvbmljR3JhZGllbnQubGVuZ3RoO1xyXG4gICAgY29uc3QgcmFkaWFsR3JhZGllbnQgPSBcInJhZGlhbC1cIjtcclxuICAgIGNvbnN0IGxpbmVhckdyYWRpZW50ID0gXCJsaW5lYXItXCI7XHJcbiAgICBmdW5jdGlvbiBwYXJzZUdyYWRpZW50KHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IGNvbmljR3JhZGllbnQubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICgoaW5kZXggPSB2YWx1ZS5pbmRleE9mKFwiZ3JhZGllbnRcIiwgc3RhcnRJbmRleCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdHlwZUdyYWRpZW50O1xyXG4gICAgICAgICAgICBbbGluZWFyR3JhZGllbnQsIHJhZGlhbEdyYWRpZW50LCBjb25pY0dyYWRpZW50XS5maW5kKFxyXG4gICAgICAgICAgICAgICAgKHBvc3NpYmxlVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZUdyYWRpZW50ID0gdmFsdWUuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlR3JhZGllbnQgPT09IHBvc3NpYmxlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IFwicmVwZWF0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IGByZXBlYXRpbmctJHtwb3NzaWJsZVR5cGV9Z3JhZGllbnRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAtIHBvc3NpYmxlVHlwZS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PT0gXCItd2Via2l0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IGAtd2Via2l0LSR7cG9zc2libGVUeXBlfWdyYWRpZW50YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVHcmFkaWVudCA9IGAke3Bvc3NpYmxlVHlwZX1ncmFkaWVudGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKCF0eXBlR3JhZGllbnQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IGdldFBhcmVudGhlc2VzUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGluZGV4ICsgZ3JhZGllbnRMZW5ndGhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB2YWx1ZS5zdWJzdHJpbmcoc3RhcnQgKyAxLCBlbmQgLSAxKTtcclxuICAgICAgICAgICAgc3RhcnRJbmRleCA9IGVuZCArIDEgKyBjb25pY0dyYWRpZW50TGVuZ3RoO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQsXHJcbiAgICAgICAgICAgICAgICBtYXRjaCxcclxuICAgICAgICAgICAgICAgIG9mZnNldDogdHlwZUdyYWRpZW50Lmxlbmd0aCArIDIsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXggLSB0eXBlR3JhZGllbnQubGVuZ3RoICsgZ3JhZGllbnRMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBoYXNDb21tYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXS5oYXNDb21tYSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByaW9yaXR5KHJ1bGVTdHlsZSwgcHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihydWxlU3R5bGUgJiYgcnVsZVN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkocHJvcGVydHkpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWFibGVDU1NEZWNsYXJhdGlvbihcclxuICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBydWxlLFxyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgbW9kaWZpZXIgPSBudWxsO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRWYXJpYWJsZU1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKFwidmFyKFwiKSkge1xyXG4gICAgICAgICAgICBtb2RpZmllciA9IGdldFZhcmlhYmxlRGVwZW5kYW50TW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSBcImNvbG9yLXNjaGVtZVwiKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0Q29sb3JTY2hlbWVNb2RpZmllcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09IFwic2Nyb2xsYmFyLWNvbG9yXCIpIHtcclxuICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRTY3JvbGxiYXJDb2xvck1vZGlmaWVyKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAocHJvcGVydHkuaW5jbHVkZXMoXCJjb2xvclwiKSAmJlxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgIT09IFwiLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3RcIikgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiZmlsbFwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcInN0cm9rZVwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcInN0b3AtY29sb3JcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiYm9yZGVyXCIpICYmXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPT0gXCJib3JkZXItY29sb3JcIiAmJlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPT09IFwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyU2lkZVByb3AgPSBwcm9wZXJ0eS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5sZW5ndGggLSA2XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyU2lkZVZhbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGJvcmRlclNpZGVQcm9wKTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJTaWRlVmFsLnN0YXJ0c1dpdGgoXCIwcHhcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJTaWRlVmFsID09PSBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBib3JkZXJTaWRlUHJvcDtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllciA9IGJvcmRlclNpZGVWYWw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtb2RpZmllciA9IGdldENvbG9yTW9kaWZpZXIocHJvcGVydHksIHZhbHVlLCBydWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJsaXN0LXN0eWxlLWltYWdlXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRCZ0ltYWdlTW9kaWZpZXIoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS5pbmNsdWRlcyhcInNoYWRvd1wiKSkge1xyXG4gICAgICAgICAgICBtb2RpZmllciA9IGdldFNoYWRvd01vZGlmaWVyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtb2RpZmllcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllcixcclxuICAgICAgICAgICAgaW1wb3J0YW50OiBnZXRQcmlvcml0eShydWxlLnN0eWxlLCBwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBqb2luU2VsZWN0b3JzKC4uLnNlbGVjdG9ycykge1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIsIFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkVXNlckFnZW50U3R5bGUodGhlbWUsIGlzSUZyYW1lLCBzdHlsZVN5c3RlbUNvbnRyb2xzKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBpZiAoIWlzSUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJodG1sIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBgICAgIGJhY2tncm91bmQtY29sb3I6ICR7bW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSwgdGhlbWUpfSAhaW1wb3J0YW50O2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCAmJiB0aGVtZS5tb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJodG1sIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgICBjb2xvci1zY2hlbWU6IGRhcmsgIWltcG9ydGFudDtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJpZnJhbWUge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgICAgIGNvbG9yLXNjaGVtZTogaW5pdGlhbDtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJnU2VsZWN0b3JzID0gam9pblNlbGVjdG9ycyhcclxuICAgICAgICAgICAgaXNJRnJhbWUgPyBcIlwiIDogXCJodG1sLCBib2R5XCIsXHJcbiAgICAgICAgICAgIHN0eWxlU3lzdGVtQ29udHJvbHMgPyBcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24sIGRpYWxvZ1wiIDogXCJcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGJnU2VsZWN0b3JzKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7YmdTZWxlY3RvcnN9IHtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LCB0aGVtZSl9O2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAke2pvaW5TZWxlY3RvcnMoXCJodG1sLCBib2R5XCIsIHN0eWxlU3lzdGVtQ29udHJvbHMgPyBcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b25cIiA6IFwiXCIpfSB7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBib3JkZXItY29sb3I6ICR7bW9kaWZ5Qm9yZGVyQ29sb3Ioe3I6IDc2LCBnOiA3NiwgYjogNzZ9LCB0aGVtZSl9O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiYSB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiA2NCwgYjogMjU1fSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwidGFibGUge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGJvcmRlci1jb2xvcjogJHttb2RpZnlCb3JkZXJDb2xvcih7cjogMTI4LCBnOiAxMjgsIGI6IDEyOH0sIHRoZW1lKX07YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIm1hcmsge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGNvbG9yOiAke21vZGlmeUZvcmVncm91bmRDb2xvcih7cjogMCwgZzogMCwgYjogMH0sIHRoZW1lKX07YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcIjo6cGxhY2Vob2xkZXIge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGNvbG9yOiAke21vZGlmeUZvcmVncm91bmRDb2xvcih7cjogMTY5LCBnOiAxNjksIGI6IDE2OX0sIHRoZW1lKX07YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcImlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLFwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwic2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGJhY2tncm91bmQtY29sb3I6ICR7bW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTAsIGc6IDI1NSwgYjogMTg5fSwgdGhlbWUpfSAhaW1wb3J0YW50O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgdGhlbWUpfSAhaW1wb3J0YW50O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGlmICh0aGVtZS5zY3JvbGxiYXJDb2xvcikge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGdldE1vZGlmaWVkU2Nyb2xsYmFyU3R5bGUodGhlbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoZW1lLnNlbGVjdGlvbkNvbG9yKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goZ2V0TW9kaWZpZWRTZWxlY3Rpb25TdHlsZSh0aGVtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNMYXllclJ1bGVTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgbGluZXMudW5zaGlmdChcIkBsYXllciB7XCIpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTZWxlY3Rpb25Db2xvcih0aGVtZSkge1xyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgbGV0IGZvcmVncm91bmRDb2xvclNlbGVjdGlvbjtcclxuICAgICAgICBpZiAodGhlbWUuc2VsZWN0aW9uQ29sb3IgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiA9IG1vZGlmeUJhY2tncm91bmRDb2xvcihcclxuICAgICAgICAgICAgICAgIHtyOiAwLCBnOiA5NiwgYjogMjEyfSxcclxuICAgICAgICAgICAgICAgIHsuLi50aGVtZSwgZ3JheXNjYWxlOiAwfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sXHJcbiAgICAgICAgICAgICAgICB7Li4udGhlbWUsIGdyYXlzY2FsZTogMH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHRoZW1lLnNlbGVjdGlvbkNvbG9yKTtcclxuICAgICAgICAgICAgY29uc3QgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uID0gdGhlbWUuc2VsZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgICAgIGlmIChoc2wubCA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID0gXCIjRkZGXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBcIiMwMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2JhY2tncm91bmRDb2xvclNlbGVjdGlvbiwgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9ufTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkU2VsZWN0aW9uU3R5bGUodGhlbWUpIHtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IgPSBnZXRTZWxlY3Rpb25Db2xvcih0aGVtZSk7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uID1cclxuICAgICAgICAgICAgbW9kaWZpZWRTZWxlY3Rpb25Db2xvci5iYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgY29uc3QgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID1cclxuICAgICAgICAgICAgbW9kaWZpZWRTZWxlY3Rpb25Db2xvci5mb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgW1wiOjpzZWxlY3Rpb25cIiwgXCI6Oi1tb3otc2VsZWN0aW9uXCJdLmZvckVhY2goKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAke3NlbGVjdGlvbn0ge2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvclNlbGVjdGlvbn0gIWltcG9ydGFudDtgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgICBjb2xvcjogJHtmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb259ICFpbXBvcnRhbnQ7YCk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TW9kaWZpZWRTY3JvbGxiYXJTdHlsZSh0aGVtZSkge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICAgICAgbGV0IGNvbG9yVHJhY2s7XHJcbiAgICAgICAgbGV0IGNvbG9ySWNvbnM7XHJcbiAgICAgICAgbGV0IGNvbG9yVGh1bWI7XHJcbiAgICAgICAgbGV0IGNvbG9yVGh1bWJIb3ZlcjtcclxuICAgICAgICBsZXQgY29sb3JUaHVtYkFjdGl2ZTtcclxuICAgICAgICBsZXQgY29sb3JDb3JuZXI7XHJcbiAgICAgICAgaWYgKHRoZW1lLnNjcm9sbGJhckNvbG9yID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBjb2xvclRyYWNrID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNDEsIGc6IDI0MSwgYjogMjQxfSwgdGhlbWUpO1xyXG4gICAgICAgICAgICBjb2xvckljb25zID0gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiA5NiwgZzogOTYsIGI6IDk2fSwgdGhlbWUpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAxNzYsIGc6IDE3NiwgYjogMTc2fSwgdGhlbWUpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iSG92ZXIgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMTQ0LCBnOiAxNDQsIGI6IDE0NH0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iQWN0aXZlID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDk2LCBnOiA5NiwgYjogOTZ9LFxyXG4gICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29sb3JDb3JuZXIgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodGhlbWUuc2Nyb2xsYmFyQ29sb3IpO1xyXG4gICAgICAgICAgICBjb25zdCBoc2wgPSByZ2JUb0hTTChyZ2IpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0xpZ2h0ID0gaHNsLmwgPiAwLjU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0ZW4gPSAobGlnaHRlcikgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLmhzbCxcclxuICAgICAgICAgICAgICAgIGw6IGNsYW1wKGhzbC5sICsgbGlnaHRlciwgMCwgMSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhcmtlbiA9IChkYXJrZXIpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5oc2wsXHJcbiAgICAgICAgICAgICAgICBsOiBjbGFtcChoc2wubCAtIGRhcmtlciwgMCwgMSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbG9yVHJhY2sgPSBoc2xUb1N0cmluZyhkYXJrZW4oMC40KSk7XHJcbiAgICAgICAgICAgIGNvbG9ySWNvbnMgPSBoc2xUb1N0cmluZyhpc0xpZ2h0ID8gZGFya2VuKDAuNCkgOiBsaWdodGVuKDAuNCkpO1xyXG4gICAgICAgICAgICBjb2xvclRodW1iID0gaHNsVG9TdHJpbmcoaHNsKTtcclxuICAgICAgICAgICAgY29sb3JUaHVtYkhvdmVyID0gaHNsVG9TdHJpbmcobGlnaHRlbigwLjEpKTtcclxuICAgICAgICAgICAgY29sb3JUaHVtYkFjdGl2ZSA9IGhzbFRvU3RyaW5nKGxpZ2h0ZW4oMC4yKSk7XHJcbiAgICAgICAgICAgIGNvbG9yQ29ybmVyID0gaHNsVG9TdHJpbmcoZGFya2VuKDAuNSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yVHJhY2t9O2ApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYCAgICBjb2xvcjogJHtjb2xvckljb25zfTtgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yVGh1bWJ9O2ApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JUaHVtYkhvdmVyfTtgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvclRodW1iQWN0aXZlfTtgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1wiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvckNvcm5lcn07YCk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwiKiB7XCIpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAgICAgc2Nyb2xsYmFyLWNvbG9yOiAke2NvbG9yVGh1bWJ9ICR7Y29sb3JUcmFja307YCk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZSh0aGVtZSwge3N0cmljdH0pIHtcclxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gZGVmYXVsdEZhbGxiYWNrRmFjdG9yeTtcclxuICAgICAgICByZXR1cm4gZmFjdG9yeSh0aGVtZSwge3N0cmljdH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdEZhbGxiYWNrRmFjdG9yeSh0aGVtZSwge3N0cmljdH0pIHtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGBodG1sLCBib2R5LCAke3N0cmljdCA/IFwiYm9keSA6bm90KGlmcmFtZSlcIiA6IFwiYm9keSA+IDpub3QoaWZyYW1lKVwifSB7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke21vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sIHRoZW1lKX0gIWltcG9ydGFudDtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGJvcmRlci1jb2xvcjogJHttb2RpZnlCb3JkZXJDb2xvcih7cjogNjQsIGc6IDY0LCBiOiA2NH0sIHRoZW1lKX0gIWltcG9ydGFudDtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGNvbG9yOiAke21vZGlmeUZvcmVncm91bmRDb2xvcih7cjogMCwgZzogMCwgYjogMH0sIHRoZW1lKX0gIWltcG9ydGFudDtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKGBkaXZbc3R5bGUqPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMTM1LCAxMzUpXCJdIHtgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKGAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg3ODc4NyAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdW5wYXJzYWJsZUNvbG9ycyA9IG5ldyBTZXQoW1xyXG4gICAgICAgIFwiaW5oZXJpdFwiLFxyXG4gICAgICAgIFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICBcImluaXRpYWxcIixcclxuICAgICAgICBcImN1cnJlbnRjb2xvclwiLFxyXG4gICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIFwidW5zZXRcIixcclxuICAgICAgICBcImF1dG9cIlxyXG4gICAgXSk7XHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvck1vZGlmaWVyKHByb3AsIHZhbHVlLCBydWxlKSB7XHJcbiAgICAgICAgaWYgKHVucGFyc2FibGVDb2xvcnMuaGFzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFyZ2IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wLmluY2x1ZGVzKFwiYmFja2dyb3VuZFwiKSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS53ZWJraXRNYXNrSW1hZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLndlYmtpdE1hc2tJbWFnZSAhPT0gXCJub25lXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS53ZWJraXRNYXNrICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXJ1bGUuc3R5bGUud2Via2l0TWFzay5zdGFydHNXaXRoKFwibm9uZVwiKSkgfHxcclxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLm1hc2sgJiYgcnVsZS5zdHlsZS5tYXNrICE9PSBcIm5vbmVcIikgfHxcclxuICAgICAgICAgICAgICAgIChydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtYXNrLWltYWdlXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFzay1pbWFnZVwiKSAhPT0gXCJub25lXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3AuaW5jbHVkZXMoXCJib3JkZXJcIikgfHwgcHJvcC5pbmNsdWRlcyhcIm91dGxpbmVcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4gbW9kaWZ5Qm9yZGVyQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhlbWUpID0+IG1vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGltYWdlRGV0YWlsc0NhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBzaG91bGRJZ25vcmVJbWFnZShzZWxlY3RvclRleHQsIHNlbGVjdG9ycykge1xyXG4gICAgICAgIGlmICghc2VsZWN0b3JUZXh0IHx8IHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0b3JzLnNvbWUoKHMpID0+IHMgPT09IFwiKlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcnVsZVNlbGVjdG9ycyA9IHNlbGVjdG9yVGV4dC5zcGxpdCgvLFxccyovZyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWdub3JlZFNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xyXG4gICAgICAgICAgICBpZiAocnVsZVNlbGVjdG9ycy5zb21lKChzKSA9PiBzID09PSBpZ25vcmVkU2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRCZ0ltYWdlTW9kaWZpZXIoXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHNob3VsZElnbm9yZUltYWdlKHJ1bGUuc2VsZWN0b3JUZXh0LCBpZ25vcmVJbWFnZVNlbGVjdG9ycykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudHMgPSBwYXJzZUdyYWRpZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgdXJscyA9IGdldE1hdGNoZXMoY3NzVVJMUmVnZXgsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHVybHMubGVuZ3RoID09PSAwICYmIGdyYWRpZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBnZXRJbmRpY2VzID0gKG1hdGNoZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IHZhbHVlLmluZGV4T2YobWF0Y2gsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbHVlSW5kZXggKyBtYXRjaC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHttYXRjaCwgaW5kZXg6IHZhbHVlSW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBncmFkaWVudHNcclxuICAgICAgICAgICAgICAgIC5tYXAoKGkpID0+ICh7dHlwZTogXCJncmFkaWVudFwiLCAuLi5pfSkpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEluZGljZXModXJscykubWFwKChpKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmlcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5pbmRleCA+IGIuaW5kZXggPyAxIDogLTEpKTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0R3JhZGllbnRNb2RpZmllciA9IChncmFkaWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3R5cGVHcmFkaWVudCwgbWF0Y2gsIGhhc0NvbW1hfSA9IGdyYWRpZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydHNSZWdleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgLyhbXlxcKFxcKSxdKyhcXChbXlxcKFxcKV0qKFxcKFteXFwoXFwpXSpcXCkqW15cXChcXCldKik/XFwpKT8oW15cXChcXCksIF18KCAoPyFjYWxjKSkpKiksPy9nO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JTdG9wUmVnZXggPVxyXG4gICAgICAgICAgICAgICAgICAgIC9eKGZyb218Y29sb3Itc3RvcHx0bylcXCgoW15cXChcXCldKj8sXFxzKik/KC4qPylcXCkkLztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gZ2V0TWF0Y2hlcyhwYXJ0c1JlZ2V4LCBtYXRjaCwgMSkubWFwKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHBhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4gbW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBwYXJ0Lmxhc3RJbmRleE9mKFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHBhcnQuc3Vic3RyaW5nKDAsIHNwYWNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7bW9kaWZ5R3JhZGllbnRDb2xvcihyZ2IsIHRoZW1lKX0gJHtwYXJ0LnN1YnN0cmluZyhzcGFjZSArIDEpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yU3RvcE1hdGNoID0gcGFydC5tYXRjaChjb2xvclN0b3BSZWdleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yU3RvcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoY29sb3JTdG9wTWF0Y2hbM10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbG9yU3RvcE1hdGNoWzFdfSgke2NvbG9yU3RvcE1hdGNoWzJdID8gYCR7Y29sb3JTdG9wTWF0Y2hbMl19LCBgIDogXCJcIn0ke21vZGlmeUdyYWRpZW50Q29sb3IocmdiLCB0aGVtZSl9KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHBhcnQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7dHlwZUdyYWRpZW50fSgke3BhcnRzLm1hcCgobW9kaWZ5KSA9PiBtb2RpZnkodGhlbWUpKS5qb2luKFwiLCBcIil9KSR7aGFzQ29tbWEgPyBcIiwgXCIgOiBcIlwifWA7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBnZXRVUkxNb2RpZmllciA9ICh1cmxWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldENTU1VSTFZhbHVlKHVybFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzVVJMRW1wdHkgPSB1cmwubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3BhcmVudFN0eWxlU2hlZXR9ID0gcnVsZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VVUkwgPVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFN0eWxlU2hlZXQgJiYgcGFyZW50U3R5bGVTaGVldC5ocmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZ2V0Q1NTQmFzZUJhdGgocGFyZW50U3R5bGVTaGVldC5ocmVmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcmVudFN0eWxlU2hlZXQ/Lm93bmVyTm9kZT8uYmFzZVVSSSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLm9yaWdpbjtcclxuICAgICAgICAgICAgICAgIHVybCA9IGdldEFic29sdXRlVVJMKGJhc2VVUkwsIHVybCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXN5bmMgKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVVJMRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidXJsKCcnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEZXRhaWxzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VEZXRhaWxzQ2FjaGUuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzID0gaW1hZ2VEZXRhaWxzQ2FjaGUuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNCbG9iVVJMQ2hlY2tSZXN1bHRSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVxdWVzdEJsb2JVUkxDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXdhaXRlcnMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5nZXQodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRlcnMucHVzaChyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWFnZURldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5zZXQodXJsLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzID0gYXdhaXQgZ2V0SW1hZ2VEZXRhaWxzKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzQ2FjaGUuc2V0KHVybCwgaW1hZ2VEZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKHJlc29sdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlRGV0YWlscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5kZWxldGUodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NhbmNlbGxlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nV2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChyZXNvbHZlKSA9PiByZXNvbHZlKG51bGwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5kZWxldGUodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VEZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnSW1hZ2VWYWx1ZSA9IGdldEJnSW1hZ2VWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZ0ltYWdlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZ0ltYWdlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYlVSTCA9IGF3YWl0IHRyeUNvbnZlcnREYXRhVVJMVG9CbG9iVVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9iVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHVybChcIiR7YmxvYlVSTH1cIilgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgdXJsKFwiJHt1cmx9XCIpYDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGdldEJnSW1hZ2VWYWx1ZSA9IChpbWFnZURldGFpbHMsIHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7aXNEYXJrLCBpc0xpZ2h0LCBpc1RyYW5zcGFyZW50LCBpc0xhcmdlLCB3aWR0aH0gPVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscztcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dTcmMgPSBpbWFnZURldGFpbHMuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJkYXRhOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBpbWFnZURldGFpbHMuc3JjO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGFyZ2UgJiYgaXNMaWdodCAmJiAhaXNUcmFuc3BhcmVudCAmJiB0aGVtZS5tb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhgSGlkaW5nIGxhcmdlIGxpZ2h0IGltYWdlICR7bG9nU3JjfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBpc0RhcmsgJiZcclxuICAgICAgICAgICAgICAgICAgICBpc1RyYW5zcGFyZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUubW9kZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID4gMlxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhgSW52ZXJ0aW5nIGRhcmsgaW1hZ2UgJHtsb2dTcmN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52ZXJ0ZWQgPSBnZXRGaWx0ZXJlZEltYWdlVVJMKGltYWdlRGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VwaWE6IGNsYW1wKHRoZW1lLnNlcGlhICsgMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBgdXJsKFwiJHtpbnZlcnRlZH1cIilgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0xpZ2h0ICYmICFpc1RyYW5zcGFyZW50ICYmIHRoZW1lLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKGBEaW1taW5nIGxpZ2h0IGltYWdlICR7bG9nU3JjfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpbW1lZCA9IGdldEZpbHRlcmVkSW1hZ2VVUkwoaW1hZ2VEZXRhaWxzLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gYHVybChcIiR7ZGltbWVkfVwiKWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoZW1lLm1vZGUgPT09IDAgJiYgaXNMaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oYEFwcGx5aW5nIGZpbHRlciB0byBpbWFnZSAke2xvZ1NyY31gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IGdldEZpbHRlcmVkSW1hZ2VVUkwoaW1hZ2VEZXRhaWxzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmlnaHRuZXNzOiBjbGFtcCh0aGVtZS5icmlnaHRuZXNzIC0gMTAsIDUsIDIwMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGlhOiBjbGFtcCh0aGVtZS5zZXBpYSArIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gYHVybChcIiR7ZmlsdGVyZWR9XCIpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhgTm90IG1vZGlmeWluZyB0aGUgaW1hZ2UgJHtsb2dTcmN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVycyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBwcmV2SGFzQ29tbWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKHt0eXBlLCBtYXRjaCwgaW5kZXgsIHR5cGVHcmFkaWVudCwgaGFzQ29tbWEsIG9mZnNldH0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFN0YXJ0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZml4U3RhcnQgPSBtYXRjaEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIG1hdGNoLmxlbmd0aCArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaEluZGV4ID0gbWF0Y2hFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZpeFN0YXJ0ICE9PSBtYXRjaFN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2SGFzQ29tbWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmV0d2VlblZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXhTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hTdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJldHdlZW5WYWx1ZVswXSA9PT0gXCIsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmV0d2VlblZhbHVlID0gYmV0d2VlblZhbHVlLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJldHdlZW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zdWJzdHJpbmcocHJlZml4U3RhcnQsIG1hdGNoU3RhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZIYXNDb21tYSA9IGhhc0NvbW1hIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInVybFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKGdldFVSTE1vZGlmaWVyKG1hdGNoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImdyYWRpZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRHcmFkaWVudE1vZGlmaWVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQ6IHR5cGVHcmFkaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDb21tYTogaGFzQ29tbWEgfHwgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gbWF0Y2hlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCgpID0+IHZhbHVlLnN1YnN0cmluZyhtYXRjaEVuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IG1vZGlmaWVyc1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChtb2RpZnkpID0+IG1vZGlmeSh0aGVtZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMuc29tZSgocikgPT4gciBpbnN0YW5jZW9mIFByb21pc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oKGFzeW5jUmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXN5bmNSZXN1bHRzLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRSZXN1bHQgPSByZXN1bHRzLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tYmluZWRSZXN1bHQuZW5kc1dpdGgoXCIsIGluaXRpYWxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZXN1bHQuc2xpY2UoMCwgLTkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhbHVlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JNYXRjaGVzID0gZ2V0TWF0Y2hlcyhcclxuICAgICAgICAgICAgICAgIC8oXnxcXHMpKD8hY2FsYykoW2Etel0rXFwoLis/XFwpfCNbMC05YS1mXSt8W2Etel0rKSguKj8oaW5zZXR8b3V0c2V0KT8oJHwsKSkvZ2ksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IG5vdFBhcnNlZCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVycyA9IGNvbG9yTWF0Y2hlcy5tYXAoKG1hdGNoLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXhJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hJbmRleCA9IHZhbHVlLmluZGV4T2YobWF0Y2gsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoRW5kID0gbWF0Y2hJbmRleCArIG1hdGNoLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gbWF0Y2hFbmQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90UGFyc2VkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHZhbHVlLnN1YnN0cmluZyhwcmVmaXhJbmRleCwgbWF0Y2hFbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBgJHt2YWx1ZS5zdWJzdHJpbmcocHJlZml4SW5kZXgsIG1hdGNoSW5kZXgpfSR7bW9kaWZ5U2hhZG93Q29sb3IocmdiLCB0aGVtZSl9JHtpID09PSBjb2xvck1hdGNoZXMubGVuZ3RoIC0gMSA/IHZhbHVlLnN1YnN0cmluZyhtYXRjaEVuZCkgOiBcIlwifWA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllZCA9IG1vZGlmaWVyc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG1vZGlmeSkgPT4gbW9kaWZ5KHRoZW1lKSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc0xlbmd0aDogY29sb3JNYXRjaGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB1bnBhcnNlYWJsZU1hdGNoZXNMZW5ndGg6IG5vdFBhcnNlZCxcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IG1vZGlmaWVkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTaGFkb3dNb2RpZmllcih2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNoYWRvd01vZGlmaWVyID0gZ2V0U2hhZG93TW9kaWZpZXJXaXRoSW5mbyh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFzaGFkb3dNb2RpZmllcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4gc2hhZG93TW9kaWZpZXIodGhlbWUpLnJlc3VsdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbGJhckNvbG9yTW9kaWZpZXIodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjb2xvcnNNYXRjaCA9IHZhbHVlLm1hdGNoKFxyXG4gICAgICAgICAgICAvXlxccyooW2Etel0rKFxcKC4qXFwpKT8pXFxzKyhbYS16XSsoXFwoLipcXCkpPylcXHMqJC9cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghY29sb3JzTWF0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0aHVtYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoY29sb3JzTWF0Y2hbMV0pO1xyXG4gICAgICAgIGNvbnN0IHRyYWNrID0gcGFyc2VDb2xvcldpdGhDYWNoZShjb2xvcnNNYXRjaFszXSk7XHJcbiAgICAgICAgaWYgKCF0aHVtYiB8fCAhdHJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgIGAke21vZGlmeUZvcmVncm91bmRDb2xvcih0aHVtYiwgdGhlbWUpfSAke21vZGlmeUJhY2tncm91bmRDb2xvcih0aHVtYiwgdGhlbWUpfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvclNjaGVtZU1vZGlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiAodGhlbWUpID0+ICh0aGVtZS5tb2RlID09PSAwID8gXCJkYXJrIGxpZ2h0XCIgOiBcImRhcmtcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZU1vZGlmaWVyKFxyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgIHByb3AsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gdmFyaWFibGVzU3RvcmUuZ2V0TW9kaWZpZXJGb3JWYXJpYWJsZSh7XHJcbiAgICAgICAgICAgIHZhck5hbWU6IHByb3AsXHJcbiAgICAgICAgICAgIHNvdXJjZVZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlRGVwZW5kYW50TW9kaWZpZXIodmFyaWFibGVzU3RvcmUsIHByb3AsIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlc1N0b3JlLmdldE1vZGlmaWVyRm9yVmFyRGVwZW5kYW50KHByb3AsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuTW9kaWZpY2F0aW9uQ2FjaGUoKSB7XHJcbiAgICAgICAgY2xlYXJDb2xvck1vZGlmaWNhdGlvbkNhY2hlKCk7XHJcbiAgICAgICAgaW1hZ2VEZXRhaWxzQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICBjbGVhbkltYWdlUHJvY2Vzc2luZ0NhY2hlKCk7XHJcbiAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBWQVJfVFlQRV9CR0NPTE9SID0gMSA8PCAwO1xyXG4gICAgY29uc3QgVkFSX1RZUEVfVEVYVENPTE9SID0gMSA8PCAxO1xyXG4gICAgY29uc3QgVkFSX1RZUEVfQk9SREVSQ09MT1IgPSAxIDw8IDI7XHJcbiAgICBjb25zdCBWQVJfVFlQRV9CR0lNRyA9IDEgPDwgMztcclxuICAgIGNsYXNzIFZhcmlhYmxlc1N0b3JlIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy52YXJUeXBlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZVN0eWxlUXVldWUgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy52YXJSZWZzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYXJUeXBlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhclR5cGVzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZVN0eWxlUXVldWUuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluZWRWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyUmVmcy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYXJUeXBlcy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXMuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNWYXJUeXBlKHZhck5hbWUsIHR5cGVOdW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuaGFzKHZhck5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAodGhpcy52YXJUeXBlcy5nZXQodmFyTmFtZSkgJiB0eXBlTnVtKSA+IDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkUnVsZXNGb3JNYXRjaGluZyhydWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuYWRkKHJ1bGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkSW5saW5lU3R5bGVGb3JNYXRjaGluZyhzdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZVN0eWxlUXVldWUucHVzaChzdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLnNpemUgPT09IDAgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFyVHlwZXMgPSBuZXcgTWFwKHRoaXMudmFyVHlwZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RSb290VmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFZhcmlhYmxlc0FuZFZhckRlcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RSb290VmFyRGVwZW5kZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLnZhclJlZnMuZm9yRWFjaCgocmVmcywgdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmcy5mb3JFYWNoKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFyVHlwZXMuaGFzKHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZShyLCB0aGlzLnZhclR5cGVzLmdldCh2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5rbm93bkJnVmFycy5oYXModikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFyVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdDT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQk9SREVSQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMuYWRkKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0NvbG9yID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRWYXJSZWYodiwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmhhcyhyZWYpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFyVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdDT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX1RFWFRDT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JPUkRFUkNPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgIT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhclJlZnModiwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUocmVmLCBWQVJfVFlQRV9CR0NPTE9SKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUiB8IFZBUl9UWVBFX0JHSU1HKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmZvckVhY2goKHZhck5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh2YXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TW9kaWZpZXJGb3JWYXJpYWJsZShvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgfSA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXREZWNsYXJhdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkTW9kaWZpZWRWYWx1ZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZU51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyTmFtZVdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTW9kaWZpZXJcclxuICAgICAgICAgICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFyVHlwZSh2YXJOYW1lLCB0eXBlTnVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdmFyTmFtZVdyYXBwZXIodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RpZmllZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQoc291cmNlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb25zdHJ1Y3RlZENvbG9yVmFyKHNvdXJjZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGluc2VydFZhclZhbHVlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZU51bSA9PT0gVkFSX1RZUEVfQkdDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gY29sb3JNb2RpZmllcih2YWx1ZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHYpID0+IHZhck5hbWVXcmFwcGVyKHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmFsbGJhY2spID0+IGNvbG9yTW9kaWZpZXIoZmFsbGJhY2ssIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gY29sb3JNb2RpZmllcihzb3VyY2VWYWx1ZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVkVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNb2RpZmllZFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CR0NPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5QmdDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kaWZpZWRWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVENPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlUZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGlmaWVkVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JPUkRFUkNPTE9SLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeUJvcmRlckNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhclR5cGUodmFyTmFtZSwgVkFSX1RZUEVfQkdJTUcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gd3JhcEJnSW1nVmFyaWFibGVOYW1lKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kaWZpZWRWYWx1ZSA9IHNvdXJjZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQoc291cmNlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFZhbHVlID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZSh2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmFsbGJhY2spID0+IHRyeU1vZGlmeUJnQ29sb3IoZmFsbGJhY2ssIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiZ01vZGlmaWVyID0gZ2V0QmdJbWFnZU1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1nU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYmdNb2RpZmllciA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBiZ01vZGlmaWVyKHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYmdNb2RpZmllcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRMaXN0ZW5lciA9IChvblR5cGVDaGFuZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjcyA9IGdldERlY2xhcmF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UoZGVjcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UodmFyTmFtZSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUxpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGdldERlY2xhcmF0aW9ucygpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZToge2FkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lcnN9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNb2RpZmllckZvclZhckRlcGVuZGFudChwcm9wZXJ0eSwgc291cmNlVmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNDb25zdHJ1Y3RlZENvbG9yID0gc291cmNlVmFsdWUubWF0Y2goL15cXHMqKHJnYnxoc2wpYT9cXCgvKTtcclxuICAgICAgICAgICAgY29uc3QgaXNTaW1wbGVDb25zdHJ1Y3RlZENvbG9yID0gc291cmNlVmFsdWUubWF0Y2goXHJcbiAgICAgICAgICAgICAgICAvXnJnYmE/XFwodmFyXFwoLS1bXFwtX0EtWmEtejAtOV0rXFwpKFxccyosP1xcLz9cXHMqMD9cXC5cXGQrKT9cXCkkL1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoaXNDb25zdHJ1Y3RlZENvbG9yICYmICFpc1NpbXBsZUNvbnN0cnVjdGVkQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQmcgPSBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiYmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzVGV4dCA9IGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGluc2VydFZhclZhbHVlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpc0JnID8gXCIjZmZmZmZmXCIgOiBcIiMwMDAwMDBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZXIgPSBpc0JnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ5TW9kaWZ5QmdDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGlzVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ5TW9kaWZ5VGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnlNb2RpZnlCb3JkZXJDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZXIodmFsdWUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1jb2xvclwiIHx8XHJcbiAgICAgICAgICAgICAgICAoaXNTaW1wbGVDb25zdHJ1Y3RlZENvbG9yICYmIHByb3BlcnR5ID09PSBcImJhY2tncm91bmRcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEZhbGxiYWNrID0gdHJ5TW9kaWZ5QmdDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb25zdHJ1Y3RlZENvbG9yID8gXCIyNTUsIDI1NSwgMjU1XCIgOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodikgPT4gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUodiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmYWxsYmFjaykgPT4gdHJ5TW9kaWZ5QmdDb2xvcihmYWxsYmFjaywgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RmFsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0RmFsbGJhY2sgPSB0cnlNb2RpZnlUZXh0Q29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29uc3RydWN0ZWRDb2xvciA/IFwiMCwgMCwgMFwiIDogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHYpID0+IHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUodiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmYWxsYmFjaykgPT4gdHJ5TW9kaWZ5VGV4dENvbG9yKGZhbGxiYWNrLCB0aGVtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRGYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmRcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJib3gtc2hhZG93XCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5rbm93blZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZ5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZVJlcGxhY2VkID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0lNRykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBCZ0ltZ1ZhcmlhYmxlTmFtZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93blZhcnMuYWRkKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmYWxsYmFjaykgPT4gdHJ5TW9kaWZ5QmdDb2xvcihmYWxsYmFjaywgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJib3gtc2hhZG93XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd01vZGlmaWVyID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTaGFkb3dNb2RpZmllcldpdGhJbmZvKHZhcmlhYmxlUmVwbGFjZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZWRTaGFkb3cgPSBzaGFkb3dNb2RpZmllcih0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTaGFkb3cudW5wYXJzZWFibGVNYXRjaGVzTGVuZ3RoICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU2hhZG93Lm1hdGNoZXNMZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllZFNoYWRvdy5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlUmVwbGFjZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RpZmllZCA9IG1vZGlmeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bmtub3duVmFycy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0ZhbGxiYWNrUmVzb2x2ZWQgPSBtb2RpZmllZC5tYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9edmFyXFwoLio/LCAodmFyXFwoLS1kYXJrcmVhZGVyLWJnLS0uKlxcKSl8KCNbMC05QS1GYS1mXSspfChbYS16XSspfChyZ2JhP1xcKC4rXFwpKXwoaHNsYT9cXCguK1xcKSlcXCkkL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGYWxsYmFja1Jlc29sdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVua25vd25WYXIgb2YgdW5rbm93blZhcnMudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93blZhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbW9kaWZ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmtub3duVmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZWQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJib3JkZXJcIikgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJvdXRsaW5lXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodikgPT4gd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmFsbGJhY2spID0+IHRyeU1vZGlmeUJvcmRlckNvbG9yKGZhbGxiYWNrLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZSh2YXJOYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLnNldCh2YXJOYW1lLCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3RTdG9yZSA9IHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuZ2V0KHZhck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIXJvb3RTdG9yZS5oYXMoY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgICAgICByb290U3RvcmUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1bnN1YnNjcmliZUZyb21WYXJpYWJsZVR5cGVDaGFuZ2VzKHZhck5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5nZXQodmFyTmFtZSkuZGVsZXRlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsZWN0VmFyaWFibGVzQW5kVmFyRGVwKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuZm9yRWFjaCgocnVsZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgKHJ1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5zdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxlY3RWYXJzRnJvbUNTU0RlY2xhcmF0aW9ucyhydWxlLnN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0VmFyc0Zyb21DU1NEZWNsYXJhdGlvbnMoc3R5bGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lU3R5bGVRdWV1ZS5zcGxpY2UoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxlY3RWYXJzRnJvbUNTU0RlY2xhcmF0aW9ucyhzdHlsZSkge1xyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKHN0eWxlLCAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3RWYXJpYWJsZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdFZhckRlcGVuZGFudChwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvdWxkUHJvY2Vzc1Jvb3RWYXJpYWJsZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuc2l6ZSA+IDAgJiZcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKT8uaW5jbHVkZXMoXCItLVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsZWN0Um9vdFZhcmlhYmxlcygpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFByb2Nlc3NSb290VmFyaWFibGVzKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3RWYXJpYWJsZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zcGVjdFZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zdGFibGVWYXJWYWx1ZXMuc2V0KHZhck5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHZhbHVlKSAmJiBpc0NvbnN0cnVjdGVkQ29sb3JWYXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmaW5lZFZhcnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ29sb3IgPSBCb29sZWFuKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2gocmF3UkdCU3BhY2VSZWdleCkgfHxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaChyYXdSR0JDb21tYVJlZ2V4KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlQ29sb3JXaXRoQ2FjaGUodmFsdWUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChpc0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoXCJ1cmwoXCIpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5pbmNsdWRlcyhcImxpbmVhci1ncmFkaWVudChcIikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwicmFkaWFsLWdyYWRpZW50KFwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2YXJOYW1lLCBWQVJfVFlQRV9CR0lNRyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZVZhcmlhYmxlVHlwZSh2YXJOYW1lLCB0eXBlTnVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxUeXBlID0gdGhpcy5pbml0aWFsVmFyVHlwZXMuZ2V0KHZhck5hbWUpIHx8IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUeXBlID0gdGhpcy52YXJUeXBlcy5nZXQodmFyTmFtZSkgfHwgMDtcclxuICAgICAgICAgICAgY29uc3QgbmV3VHlwZSA9IGN1cnJlbnRUeXBlIHwgdHlwZU51bTtcclxuICAgICAgICAgICAgdGhpcy52YXJUeXBlcy5zZXQodmFyTmFtZSwgbmV3VHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChuZXdUeXBlICE9PSBpbml0aWFsVHlwZSB8fCB0aGlzLnVuZGVmaW5lZFZhcnMuaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMuZGVsZXRlKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5kZWxldGUodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5kZWxldGUodmFyTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxlY3RSb290VmFyRGVwZW5kZW50cygpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNob3VsZFByb2Nlc3NSb290VmFyaWFibGVzKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0VmFyRGVwZW5kYW50KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnNwZWN0VmFyRGVwZW5kYW50KHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsIChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFyUmVmcy5oYXMocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFyUmVmcy5zZXQocHJvcGVydHksIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFyUmVmcy5nZXQocHJvcGVydHkpLmFkZChyZWYpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJveC1zaGFkb3dcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyRGVwcyh2YWx1ZSwgKHYpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHYsIFZBUl9UWVBFX1RFWFRDT0xPUilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiYm9yZGVyXCIpIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwib3V0bGluZVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9CT1JERVJDT0xPUilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IgfCBWQVJfVFlQRV9CR0lNRykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0JnQ29sb3IgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmRWYXJSZWYodiwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuaGFzKHJlZikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFyVHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CR0NPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX1RFWFRDT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CT1JERVJDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pICE9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRlVmFyUmVmcyh2LCAocmVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0JnQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZShyZWYsIFZBUl9UWVBFX0JHQ09MT1IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQmdWYXJzLmFkZChyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVyYXRlVmFyRGVwcyh2YWx1ZSwgaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFyRGVwcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgaXRlcmF0ZVZhckRlcGVuZGVuY2llcyh2YWx1ZSwgKHYpID0+IHZhckRlcHMuYWRkKHYpKTtcclxuICAgICAgICAgICAgdmFyRGVwcy5mb3JFYWNoKCh2KSA9PiBpdGVyYXRvcih2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmRWYXJSZWYodmFyTmFtZSwgaXRlcmF0b3IsIHN0YWNrID0gbmV3IFNldCgpKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFjay5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YWNrLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaXRlcmF0b3IodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YXJOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZnMgPSB0aGlzLnZhclJlZnMuZ2V0KHZhck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIXJlZnMgfHwgcmVmcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlZiBvZiByZWZzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZCA9IHRoaXMuZmluZFZhclJlZihyZWYsIGl0ZXJhdG9yLCBzdGFjayk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZXJhdGVWYXJSZWZzKHZhck5hbWUsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZFZhclJlZih2YXJOYW1lLCAocmVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvcihyZWYpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T25Sb290VmFyaWFibGVDaGFuZ2UoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5vblJvb3RWYXJpYWJsZURlZmluZWQgPSBjYWxsYmFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHV0Um9vdFZhcnMoc3R5bGVFbGVtZW50LCB0aGVtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IHN0eWxlRWxlbWVudC5zaGVldDtcclxuICAgICAgICAgICAgaWYgKHNoZWV0LmNzc1J1bGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhcmlhYmxlKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhclR5cGUocHJvcGVydHksIFZBUl9UWVBFX0JHQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCZ0NvbG9yKHZhbHVlLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHByb3BlcnR5LCBWQVJfVFlQRV9URVhUQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUocHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeVRleHRDb2xvcih2YWx1ZSwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZShwcm9wZXJ0eSwgVkFSX1RZUEVfQk9SREVSQ09MT1IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZShwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IodmFsdWUsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Sb290VmFyaWFibGVEZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NMaW5lcyA9IFtdO1xyXG4gICAgICAgICAgICBjc3NMaW5lcy5wdXNoKFwiOnJvb3Qge1wiKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbcHJvcGVydHksIHZhbHVlXSBvZiBkZWNsYXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goYCAgICAke3Byb3BlcnR5fTogJHt2YWx1ZX07YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3NzTGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1RleHQgPSBjc3NMaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKGNzc1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHZhcmlhYmxlc1N0b3JlID0gbmV3IFZhcmlhYmxlc1N0b3JlKCk7XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZVJhbmdlKGlucHV0LCBzZWFyY2hTdGFydCA9IDApIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IGlucHV0LmluZGV4T2YoXCJ2YXIoXCIsIHNlYXJjaFN0YXJ0KTtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IGdldFBhcmVudGhlc2VzUmFuZ2UoaW5wdXQsIHN0YXJ0ICsgMyk7XHJcbiAgICAgICAgICAgIGlmIChyYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGFydCwgZW5kOiByYW5nZS5lbmR9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVzTWF0Y2hlcyhpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmdlcyA9IFtdO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgcmFuZ2U7XHJcbiAgICAgICAgd2hpbGUgKChyYW5nZSA9IGdldFZhcmlhYmxlUmFuZ2UoaW5wdXQsIGkpKSkge1xyXG4gICAgICAgICAgICBjb25zdCB7c3RhcnQsIGVuZH0gPSByYW5nZTtcclxuICAgICAgICAgICAgcmFuZ2VzLnB1c2goe3N0YXJ0LCBlbmQsIHZhbHVlOiBpbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCl9KTtcclxuICAgICAgICAgICAgaSA9IHJhbmdlLmVuZCArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByYW5nZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlVmFyaWFibGVzTWF0Y2hlcyhpbnB1dCwgcmVwbGFjZXIpIHtcclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gZ2V0VmFyaWFibGVzTWF0Y2hlcyhpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlc0NvdW50ID0gbWF0Y2hlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG1hdGNoZXNDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50cyA9IG1hdGNoZXMubWFwKChtKSA9PlxyXG4gICAgICAgICAgICByZXBsYWNlcihtLnZhbHVlLCBtYXRjaGVzLmxlbmd0aClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gW107XHJcbiAgICAgICAgcGFydHMucHVzaChpbnB1dC5zdWJzdHJpbmcoMCwgbWF0Y2hlc1swXS5zdGFydCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgcGFydHMucHVzaChyZXBsYWNlbWVudHNbaV0pO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG1hdGNoZXNbaV0uZW5kO1xyXG4gICAgICAgICAgICBjb25zdCBlbmQgPVxyXG4gICAgICAgICAgICAgICAgaSA8IG1hdGNoZXNDb3VudCAtIDEgPyBtYXRjaGVzW2kgKyAxXS5zdGFydCA6IGlucHV0TGVuZ3RoO1xyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZyhzdGFydCwgZW5kKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVOYW1lQW5kRmFsbGJhY2sobWF0Y2gpIHtcclxuICAgICAgICBjb25zdCBjb21tYUluZGV4ID0gbWF0Y2guaW5kZXhPZihcIixcIik7XHJcbiAgICAgICAgbGV0IG5hbWU7XHJcbiAgICAgICAgbGV0IGZhbGxiYWNrO1xyXG4gICAgICAgIGlmIChjb21tYUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgbmFtZSA9IG1hdGNoLnN1YnN0cmluZyg0LCBjb21tYUluZGV4KS50cmltKCk7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrID0gbWF0Y2guc3Vic3RyaW5nKGNvbW1hSW5kZXggKyAxLCBtYXRjaC5sZW5ndGggLSAxKS50cmltKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmFtZSA9IG1hdGNoLnN1YnN0cmluZyg0LCBtYXRjaC5sZW5ndGggLSAxKS50cmltKCk7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lLCBmYWxsYmFja307XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXMoXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbmFtZVJlcGxhY2VyLFxyXG4gICAgICAgIGZhbGxiYWNrUmVwbGFjZXIsXHJcbiAgICAgICAgZmluYWxGYWxsYmFja1xyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hSZXBsYWNlciA9IChtYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgZmFsbGJhY2t9ID0gZ2V0VmFyaWFibGVOYW1lQW5kRmFsbGJhY2sobWF0Y2gpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gbmFtZVJlcGxhY2VyKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluYWxGYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgdmFyKCR7bmV3TmFtZX0sICR7ZmluYWxGYWxsYmFja30pYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBgdmFyKCR7bmV3TmFtZX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbmV3RmFsbGJhY2s7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudChmYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZhbGxiYWNrID0gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVSZXBsYWNlcixcclxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFja1JlcGxhY2VyXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZhbGxiYWNrUmVwbGFjZXIpIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZhbGxiYWNrID0gZmFsbGJhY2tSZXBsYWNlcihmYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGYWxsYmFjayA9IGZhbGxiYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBgdmFyKCR7bmV3TmFtZX0sICR7bmV3RmFsbGJhY2t9KWA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVwbGFjZVZhcmlhYmxlc01hdGNoZXModmFsdWUsIG1hdGNoUmVwbGFjZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXRlcmF0ZVZhckRlcGVuZGVuY2llcyh2YWx1ZSwgaXRlcmF0b3IpIHtcclxuICAgICAgICByZXBsYWNlQ1NTVmFyaWFibGVzTmFtZXModmFsdWUsICh2YXJOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZXJhdG9yKHZhck5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFyTmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYC0tZGFya3JlYWRlci1iZyR7bmFtZX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGAtLWRhcmtyZWFkZXItdGV4dCR7bmFtZX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYC0tZGFya3JlYWRlci1ib3JkZXIke25hbWV9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBCZ0ltZ1ZhcmlhYmxlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGAtLWRhcmtyZWFkZXItYmdpbWcke25hbWV9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzVmFyaWFibGUocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gcHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNWYXJEZXBlbmRhbnQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUuaW5jbHVkZXMoXCJ2YXIoXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNDb25zdHJ1Y3RlZENvbG9yVmFyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdmFsdWUubWF0Y2goL15cXHMqKHJnYnxoc2wpYT9cXCgvKSB8fFxyXG4gICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXigoKFxcZHsxLDN9KXwodmFyXFwoW1xcLV9BLVphLXowLTldK1xcKSkpLD9cXHMqPyl7M30kLylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImNvbG9yXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiY2FyZXQtY29sb3JcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCItd2Via2l0LXRleHQtZmlsbC1jb2xvclwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJhd1JHQlNwYWNlUmVnZXggPSAvXihcXGR7MSwzfSlcXHMrKFxcZHsxLDN9KVxccysoXFxkezEsM30pJC87XHJcbiAgICBjb25zdCByYXdSR0JDb21tYVJlZ2V4ID0gL14oXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pJC87XHJcbiAgICBmdW5jdGlvbiBwYXJzZVJhd0NvbG9yVmFsdWUoaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9XHJcbiAgICAgICAgICAgIGlucHV0Lm1hdGNoKHJhd1JHQlNwYWNlUmVnZXgpID8/IGlucHV0Lm1hdGNoKHJhd1JHQkNvbW1hUmVnZXgpO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGByZ2IoJHttYXRjaFsxXX0sICR7bWF0Y2hbMl19LCAke21hdGNoWzNdfSlgO1xyXG4gICAgICAgICAgICByZXR1cm4ge2lzUmF3OiB0cnVlLCBjb2xvcn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aXNSYXc6IGZhbHNlLCBjb2xvcjogaW5wdXR9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmF3Q29sb3JWYWx1ZShpbnB1dCwgdGhlbWUsIG1vZGlmeUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qge2lzUmF3LCBjb2xvcn0gPSBwYXJzZVJhd0NvbG9yVmFsdWUoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoY29sb3IpO1xyXG4gICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0Q29sb3IgPSBtb2RpZnlGdW5jdGlvbihyZ2IsIHRoZW1lKTtcclxuICAgICAgICAgICAgaWYgKGlzUmF3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRJblJHQiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUob3V0cHV0Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dEluUkdCXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtvdXRwdXRJblJHQi5yfSwgJHtvdXRwdXRJblJHQi5nfSwgJHtvdXRwdXRJblJHQi5ifWBcclxuICAgICAgICAgICAgICAgICAgICA6IG91dHB1dENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5QmdDb2xvcihjb2xvciwgdGhlbWUpIHtcclxuICAgICAgICByZXR1cm4gaGFuZGxlUmF3Q29sb3JWYWx1ZShjb2xvciwgdGhlbWUsIG1vZGlmeUJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cnlNb2RpZnlUZXh0Q29sb3IoY29sb3IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd0NvbG9yVmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5Qm9yZGVyQ29sb3IoY29sb3IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd0NvbG9yVmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbnNlcnRWYXJWYWx1ZXMoc291cmNlLCB2YXJWYWx1ZXMsIGZ1bGxTdGFjayA9IG5ldyBTZXQoKSkge1xyXG4gICAgICAgIGxldCBjb250YWluc1VucmVzb2x2ZWRWYXIgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBtYXRjaFJlcGxhY2VyID0gKG1hdGNoLCBjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgZmFsbGJhY2t9ID0gZ2V0VmFyaWFibGVOYW1lQW5kRmFsbGJhY2sobWF0Y2gpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFjayA9IGNvdW50ID4gMSA/IG5ldyBTZXQoZnVsbFN0YWNrKSA6IGZ1bGxTdGFjaztcclxuICAgICAgICAgICAgaWYgKHN0YWNrLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNVbnJlc29sdmVkVmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YWNrLmFkZChuYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgdmFyVmFsdWUgPSB2YXJWYWx1ZXMuZ2V0KG5hbWUpIHx8IGZhbGxiYWNrO1xyXG4gICAgICAgICAgICBsZXQgaW5zZXJ0ZWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodmFyVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YXJWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IGluc2VydFZhclZhbHVlcyh2YXJWYWx1ZSwgdmFyVmFsdWVzLCBzdGFjayk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkID0gdmFyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpbnNlcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNVbnJlc29sdmVkVmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbnNlcnRlZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VkID0gcmVwbGFjZVZhcmlhYmxlc01hdGNoZXMoc291cmNlLCBtYXRjaFJlcGxhY2VyKTtcclxuICAgICAgICBpZiAoY29udGFpbnNVbnJlc29sdmVkVmFyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVwbGFjZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3ZlcnJpZGVzJDEgPSB7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJnY29sb3JcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYmdjb2xvclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYmdpbWFnZVwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJhY2tncm91bmQtaW1hZ2VcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1iZ2ltYWdlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci1ib3R0b20tY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWJvdHRvbVwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1ib3R0b20tY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItYm90dG9tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLWxlZnQtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWxlZnRcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItbGVmdC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1sZWZ0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1yaWdodFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci1yaWdodC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1yaWdodFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci10b3AtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXRvcFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImJvcmRlci10b3AtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItdG9wXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm94LXNoYWRvd1wiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3hzaGFkb3dcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3gtc2hhZG93XCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm94c2hhZG93XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtY29sb3JcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWNvbG9yXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmlsbFwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1maWxsXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWZpbGxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdHJva2VcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtc3Ryb2tlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib3V0bGluZS1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1vdXRsaW5lXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwib3V0bGluZS1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLW91dGxpbmVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdG9wLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLXN0b3Bjb2xvclwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcInN0b3AtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1zdG9wY29sb3JcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzaG9ydGhhbmRPdmVycmlkZXMgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYmdcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYmdcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvdmVycmlkZXNMaXN0ID0gT2JqZWN0LnZhbHVlcyhvdmVycmlkZXMkMSk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkUHJvcExpc3QgPSB7fTtcclxuICAgIG92ZXJyaWRlc0xpc3QuZm9yRWFjaChcclxuICAgICAgICAoe2Nzc1Byb3AsIGN1c3RvbVByb3B9KSA9PiAobm9ybWFsaXplZFByb3BMaXN0W2N1c3RvbVByb3BdID0gY3NzUHJvcClcclxuICAgICk7XHJcbiAgICBjb25zdCBJTkxJTkVfU1RZTEVfQVRUUlMgPSBbXHJcbiAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgIFwic3RvcC1jb2xvclwiLFxyXG4gICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgXCJiZ2NvbG9yXCIsXHJcbiAgICAgICAgXCJjb2xvclwiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZFwiXHJcbiAgICBdO1xyXG4gICAgY29uc3QgSU5MSU5FX1NUWUxFX1NFTEVDVE9SID0gSU5MSU5FX1NUWUxFX0FUVFJTLm1hcChcclxuICAgICAgICAoYXR0cikgPT4gYFske2F0dHJ9XWBcclxuICAgICkuam9pbihcIiwgXCIpO1xyXG4gICAgZnVuY3Rpb24gZ2V0SW5saW5lT3ZlcnJpZGVTdHlsZSgpIHtcclxuICAgICAgICBjb25zdCBhbGxPdmVycmlkZXMgPSBvdmVycmlkZXNMaXN0LmNvbmNhdChcclxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhzaG9ydGhhbmRPdmVycmlkZXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gYWxsT3ZlcnJpZGVzXHJcbiAgICAgICAgICAgIC5tYXAoKHtkYXRhQXR0ciwgY3VzdG9tUHJvcCwgY3NzUHJvcH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgYFske2RhdGFBdHRyfV0ge2AsXHJcbiAgICAgICAgICAgICAgICAgICAgYCAgJHtjc3NQcm9wfTogdmFyKCR7Y3VzdG9tUHJvcH0pICFpbXBvcnRhbnQ7YCxcclxuICAgICAgICAgICAgICAgICAgICBcIn1cIlxyXG4gICAgICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY29uY2F0KFtcclxuICAgICAgICAgICAgICAgIFwiW2RhdGEtZGFya3JlYWRlci1pbmxpbmUtaW52ZXJ0XSB7XCIsXHJcbiAgICAgICAgICAgICAgICBcIiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBodWUtcm90YXRlKDE4MGRlZyk7XCIsXHJcbiAgICAgICAgICAgICAgICBcIn1cIlxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldElubGluZVN0eWxlRWxlbWVudHMocm9vdCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBpZiAocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgcm9vdC5tYXRjaGVzKElOTElORV9TVFlMRV9TRUxFQ1RPUikpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50IHx8XHJcbiAgICAgICAgICAgIChpc1NoYWRvd0RvbVN1cHBvcnRlZCAmJiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCkgfHxcclxuICAgICAgICAgICAgcm9vdCBpbnN0YW5jZW9mIERvY3VtZW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHB1c2gocmVzdWx0cywgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKElOTElORV9TVFlMRV9TRUxFQ1RPUikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuICAgIGNvbnN0IHRyZWVPYnNlcnZlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBhdHRyT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JJbmxpbmVTdHlsZXMoZWxlbWVudFN0eWxlRGlkQ2hhbmdlLCBzaGFkb3dSb290RGlzY292ZXJlZCkge1xyXG4gICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSxcclxuICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIChob3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgICAgIGhvc3Quc2hhZG93Um9vdCxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgcm9vdCxcclxuICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICkge1xyXG4gICAgICAgIGlmICh0cmVlT2JzZXJ2ZXJzLmhhcyhyb290KSkge1xyXG4gICAgICAgICAgICB0cmVlT2JzZXJ2ZXJzLmdldChyb290KS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGF0dHJPYnNlcnZlcnMuZ2V0KHJvb3QpLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGlzY292ZXJlZE5vZGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICBmdW5jdGlvbiBkaXNjb3Zlck5vZGVzKG5vZGUpIHtcclxuICAgICAgICAgICAgZ2V0SW5saW5lU3R5bGVFbGVtZW50cyhub2RlKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc2NvdmVyZWROb2Rlcy5oYXMoZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzY292ZXJlZE5vZGVzLmFkZChlbCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UoZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUsIChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzY292ZXJlZE5vZGVzLmhhcyhub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyZWROb2Rlcy5hZGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZChuLnNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICAgICAgICAgIG4uc2hhZG93Um9vdCxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJlZU9ic2VydmVyID0gY3JlYXRlT3B0aW1pemVkVHJlZU9ic2VydmVyKHJvb3QsIHtcclxuICAgICAgICAgICAgb25NaW5vck11dGF0aW9uczogKF9yb290LCB7YWRkaXRpb25zfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkaXRpb25zLmZvckVhY2goKGFkZGVkKSA9PiBkaXNjb3Zlck5vZGVzKGFkZGVkKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSHVnZU11dGF0aW9uczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzY292ZXJOb2Rlcyhyb290KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyZWVPYnNlcnZlcnMuc2V0KHJvb3QsIHRyZWVPYnNlcnZlcik7XHJcbiAgICAgICAgbGV0IGF0dGVtcHRDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICBjb25zdCBBVFRFTVBUU19JTlRFUlZBTCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAxMH0pO1xyXG4gICAgICAgIGNvbnN0IFJFVFJZX1RJTUVPVVQgPSBnZXREdXJhdGlvbih7c2Vjb25kczogMn0pO1xyXG4gICAgICAgIGNvbnN0IE1BWF9BVFRFTVBUU19DT1VOVCA9IDUwO1xyXG4gICAgICAgIGxldCBjYWNoZSA9IFtdO1xyXG4gICAgICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyA9IHRocm90dGxlKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlZFRhcmdldHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVkVGFyZ2V0cy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChJTkxJTkVfU1RZTEVfQVRUUlMuaW5jbHVkZXMobS5hdHRyaWJ1dGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZWRUYXJnZXRzLmFkZCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZURpZENoYW5nZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYXR0ck9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKC4uLm11dGF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0ZW1wdENvdW50Kys7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5vdztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRlbXB0Q291bnQgPj0gTUFYX0FUVEVNUFRTX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gc3RhcnQgPCBBVFRFTVBUU19JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUNhY2hlID0gY2FjaGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUF0dHJpYnV0ZU11dGF0aW9ucyhhdHRyaWJ1dGVDYWNoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgUkVUUllfVElNRU9VVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaCguLi5tdXRhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdENvdW50ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMobXV0YXRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogSU5MSU5FX1NUWUxFX0FUVFJTLmNvbmNhdChcclxuICAgICAgICAgICAgICAgIG92ZXJyaWRlc0xpc3QubWFwKCh7ZGF0YUF0dHJ9KSA9PiBkYXRhQXR0cilcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlcnMuc2V0KHJvb3QsIGF0dHJPYnNlcnZlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JJbmxpbmVTdHlsZXMoKSB7XHJcbiAgICAgICAgdHJlZU9ic2VydmVycy5mb3JFYWNoKChvKSA9PiBvLmRpc2Nvbm5lY3QoKSk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVycy5mb3JFYWNoKChvKSA9PiBvLmRpc2Nvbm5lY3QoKSk7XHJcbiAgICAgICAgdHJlZU9ic2VydmVycy5jbGVhcigpO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlubGluZVN0eWxlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgY29uc3Qgc3ZnSW52ZXJzaW9uQ2FjaGUgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3Qgc3ZnQW5hbHlzaXNDb25kaXRpb25DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBjb25zdCB0aGVtZVByb3BzID0gW1wiYnJpZ2h0bmVzc1wiLCBcImNvbnRyYXN0XCIsIFwiZ3JheXNjYWxlXCIsIFwic2VwaWFcIiwgXCJtb2RlXCJdO1xyXG4gICAgZnVuY3Rpb24gc2hvdWxkQW5hbHl6ZVNWR0FzSW1hZ2Uoc3ZnKSB7XHJcbiAgICAgICAgaWYgKHN2Z0FuYWx5c2lzQ29uZGl0aW9uQ2FjaGUuaGFzKHN2ZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN2Z0FuYWx5c2lzQ29uZGl0aW9uQ2FjaGUuZ2V0KHN2Zyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNob3VsZEFuYWx5emUgPSBCb29sZWFuKFxyXG4gICAgICAgICAgICBzdmcgJiZcclxuICAgICAgICAgICAgICAgIChzdmcuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik/LmluY2x1ZGVzKFwibG9nb1wiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHN2Zy5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKT8uaW5jbHVkZXMoXCJsb2dvXCIpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3ZnQW5hbHlzaXNDb25kaXRpb25DYWNoZS5zZXQoc3ZnLCBzaG91bGRBbmFseXplKTtcclxuICAgICAgICByZXR1cm4gc2hvdWxkQW5hbHl6ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWwsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIElOTElORV9TVFlMRV9BVFRSUy5tYXAoXHJcbiAgICAgICAgICAgIChhdHRyKSA9PiBgJHthdHRyfT1cIiR7ZWwuZ2V0QXR0cmlidXRlKGF0dHIpfVwiYFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLmNvbmNhdCh0aGVtZVByb3BzLm1hcCgocHJvcCkgPT4gYCR7cHJvcH09XCIke3RoZW1lW3Byb3BdfVwiYCkpXHJcbiAgICAgICAgICAgIC5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3VsZElnbm9yZUlubGluZVN0eWxlKGVsZW1lbnQsIHNlbGVjdG9ycykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaW5nbm9yZWRTZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhpbmdub3JlZFNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIGlnbm9yZUlubGluZVNlbGVjdG9ycyxcclxuICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9yc1xyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRJbmxpbmVTdHlsZUNhY2hlS2V5KGVsZW1lbnQsIHRoZW1lKTtcclxuICAgICAgICBpZiAoY2FjaGVLZXkgPT09IGlubGluZVN0eWxlQ2FjaGUuZ2V0KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdW5zZXRQcm9wcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMob3ZlcnJpZGVzJDEpKTtcclxuICAgICAgICBmdW5jdGlvbiBzZXRDdXN0b21Qcm9wKHRhcmdldENTU1Byb3AsIG1vZGlmaWVyQ1NTUHJvcCwgY3NzVmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IGdldE1vZGlmaWFibGVDU1NEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgIG1vZGlmaWVyQ1NTUHJvcCxcclxuICAgICAgICAgICAgICAgIGNzc1ZhbCxcclxuICAgICAgICAgICAgICAgIHtzdHlsZTogZWxlbWVudC5zdHlsZX0sXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIW1vZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFN0YXRpY1ZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7Y3VzdG9tUHJvcCwgZGF0YUF0dHJ9ID1cclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZXMkMVt0YXJnZXRDU1NQcm9wXSA/P1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3J0aGFuZE92ZXJyaWRlc1t0YXJnZXRDU1NQcm9wXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY3VzdG9tUHJvcCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShkYXRhQXR0cikpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShkYXRhQXR0ciwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bnNldFByb3BzLmRlbGV0ZSh0YXJnZXRDU1NQcm9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRWYXJEZWNsYXJhdGlvbihtb2QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmV2RGVjbGFyYXRpb25zID0gW107XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXRQcm9wcyhkZWNsYXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2RGVjbGFyYXRpb25zLmZvckVhY2goKHtwcm9wZXJ0eX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLmZvckVhY2goKHtwcm9wZXJ0eSwgdmFsdWV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZEZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9wcyhtb2QuZGVjbGFyYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIG1vZC5vblR5cGVDaGFuZ2UuYWRkTGlzdGVuZXIoc2V0UHJvcHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldEFzeW5jVmFsdWUocHJvbWlzZSwgc291cmNlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldENTU1Byb3AgPT09IFwiYmFja2dyb3VuZFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN0YXJ0c1dpdGgoXCJ2YXIoLS1kYXJrcmVhZGVyLWJnLS1cIilcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGljVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdGFyZ2V0Q1NTUHJvcCA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9PT0gc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRpY1ZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lU3R5bGVDYWNoZS5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWxlbWVudCwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBtb2QudmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IG1vZC52YWx1ZSh0aGVtZSkgOiBtb2QudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRpY1ZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIHNldEFzeW5jVmFsdWUodmFsdWUsIGNzc1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYXJEZWNsYXJhdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlnbm9yZUlubGluZVNlbGVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmVJbmxpbmVTdHlsZShlbGVtZW50LCBpZ25vcmVJbmxpbmVTZWxlY3RvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldFByb3BzLmZvckVhY2goKGNzc1Byb3ApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZXMkMVtjc3NQcm9wXS5kYXRhQXR0cik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc1NWR0VsZW1lbnQgPSBlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcclxuICAgICAgICBjb25zdCBzdmcgPSBpc1NWR0VsZW1lbnRcclxuICAgICAgICAgICAgPyAoZWxlbWVudC5vd25lclNWR0VsZW1lbnQgPz9cclxuICAgICAgICAgICAgICAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQgPyBlbGVtZW50IDogbnVsbCkpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBpZiAoaXNTVkdFbGVtZW50ICYmIHRoZW1lLm1vZGUgPT09IDEgJiYgc3ZnKSB7XHJcbiAgICAgICAgICAgIGlmIChzdmdJbnZlcnNpb25DYWNoZS5oYXMoc3ZnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRBbmFseXplU1ZHQXNJbWFnZShzdmcpKSB7XHJcbiAgICAgICAgICAgICAgICBzdmdJbnZlcnNpb25DYWNoZS5hZGQoc3ZnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuYWx5emVTVkdBc0ltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdmdTdHJpbmcgPSBzdmcub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIHN2Z1N0cmluZyA9IHN2Z1N0cmluZy5yZXBsYWNlQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHN0eWxlIGNsYXNzPVwiZGFya3JlYWRlciBkYXJrcmVhZGVyLS1zeW5jXCIgbWVkaWE9XCJzY3JlZW5cIj48L3N0eWxlPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFVUkwgPSBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2J0b2Eoc3ZnU3RyaW5nKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEltYWdlRGV0YWlscyhkYXRhVVJMKS50aGVuKChkZXRhaWxzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZXRhaWxzLmlzRGFyayAmJiBkZXRhaWxzLmlzVHJhbnNwYXJlbnQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGV0YWlscy5pc0xhcmdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5pc0xpZ2h0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRldGFpbHMuaXNUcmFuc3BhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1pbnZlcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnJlbW92ZUF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtaW52ZXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhbmFseXplU1ZHQXNJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRET01SZWFkeUxpc3RlbmVyKGFuYWx5emVTVkdBc0ltYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJiZ2NvbG9yXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYmdjb2xvclwiKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXszfSQvaSkgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17Nn0kL2kpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgIyR7dmFsdWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJhY2tncm91bmQtY29sb3JcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChlbGVtZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYmFja2dyb3VuZFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBnZXRBYnNvbHV0ZVVSTChcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZShcImJhY2tncm91bmRcIikgPz8gXCJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGB1cmwoXCIke3VybH1cIilgO1xyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcImJhY2tncm91bmQtaW1hZ2VcIiwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJjb2xvclwiKSAmJiBlbGVtZW50LnJlbCAhPT0gXCJtYXNrLWljb25cIikge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImNvbG9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezN9JC9pKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXs2fSQvaSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGAjJHt2YWx1ZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXCJjb2xvclwiLCBcImNvbG9yXCIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU1ZHRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJmaWxsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBTTUFMTF9TVkdfTElNSVQgPSAzMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJmaWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdUZXh0RWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlU1ZHRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID4gU01BTExfU1ZHX0xJTUlUIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID4gU01BTExfU1ZHX0xJTUlUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JnID8gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1JlYWR5U3RhdGVDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTVkdFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcihoYW5kbGVTVkdFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXCJmaWxsXCIsIFwiY29sb3JcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJzdG9wLWNvbG9yXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcC1jb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3RvcC1jb2xvclwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJzdHJva2VcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0cm9rZVwiKTtcclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHTGluZUVsZW1lbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUgJiZcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhlbGVtZW50LnN0eWxlLCAocHJvcGVydHksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiICYmIHZhbHVlLmluY2x1ZGVzKFwidXJsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKHByb3BlcnR5LCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVzJDEuaGFzT3duUHJvcGVydHkocHJvcGVydHkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKSAmJiAhbm9ybWFsaXplZFByb3BMaXN0W3Byb3BlcnR5XSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AocHJvcGVydHksIHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwidmFyKFwiKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImJhY2tncm91bmRcIiwgXCJiYWNrZ3JvdW5kXCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGRlblByb3AgPSBub3JtYWxpemVkUHJvcExpc3RbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGRlblByb3AgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShvdmVycmlkZGVuUHJvcCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuaGFzQXR0cmlidXRlKG92ZXJyaWRkZW5Qcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZGVuUHJvcCA9PT0gXCJiYWNrZ3JvdW5kLWNvbG9yXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYmdjb2xvclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5maWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICBcImZpbGxcIixcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImZpbGxcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik/LmluY2x1ZGVzKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkSW5saW5lU3R5bGVGb3JNYXRjaGluZyhlbGVtZW50LnN0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yRWFjaCh1bnNldFByb3BzLCAoY3NzUHJvcCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZXMkMVtjc3NQcm9wXS5kYXRhQXR0cik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5saW5lU3R5bGVDYWNoZS5zZXQoZWxlbWVudCwgZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbGVtZW50LCB0aGVtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ldGFUaGVtZUNvbG9yTmFtZSA9IFwidGhlbWUtY29sb3JcIjtcclxuICAgIGNvbnN0IG1ldGFUaGVtZUNvbG9yU2VsZWN0b3IgPSBgbWV0YVtuYW1lPVwiJHttZXRhVGhlbWVDb2xvck5hbWV9XCJdYDtcclxuICAgIGxldCBzcmNNZXRhVGhlbWVDb2xvciA9IG51bGw7XHJcbiAgICBsZXQgb2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgZnVuY3Rpb24gY2hhbmdlTWV0YVRoZW1lQ29sb3IobWV0YSwgdGhlbWUpIHtcclxuICAgICAgICBzcmNNZXRhVGhlbWVDb2xvciA9IHNyY01ldGFUaGVtZUNvbG9yIHx8IG1ldGEuY29udGVudDtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoc3JjTWV0YVRoZW1lQ29sb3IpO1xyXG4gICAgICAgIGlmICghY29sb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRhLmNvbnRlbnQgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoY29sb3IsIHRoZW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1ldGFUaGVtZUNvbG9yV2hlbkF2YWlsYWJsZSh0aGVtZSkge1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1ldGFUaGVtZUNvbG9yU2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChtZXRhKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG1ldGEsIHRoZW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvb3A6IGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2FkZGVkTm9kZXN9ID0gbXV0YXRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWRkZWROb2Rlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gYWRkZWROb2Rlc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5uYW1lID09PSBtZXRhVGhlbWVDb2xvck5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNZXRhVGhlbWVDb2xvcihub2RlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBsb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5oZWFkLCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzdG9yZU1ldGFUaGVtZUNvbG9yKCkge1xyXG4gICAgICAgIGlmIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWV0YVRoZW1lQ29sb3JTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKG1ldGEgJiYgc3JjTWV0YVRoZW1lQ29sb3IpIHtcclxuICAgICAgICAgICAgbWV0YS5jb250ZW50ID0gc3JjTWV0YVRoZW1lQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzc0NvbW1lbnRzUmVnZXggPSAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy9nO1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ1NTQ29tbWVudHMoY3NzVGV4dCkge1xyXG4gICAgICAgIHJldHVybiBjc3NUZXh0LnJlcGxhY2UoY3NzQ29tbWVudHNSZWdleCwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGhlbWVDYWNoZUtleXMgPSBbXHJcbiAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgXCJicmlnaHRuZXNzXCIsXHJcbiAgICAgICAgXCJjb250cmFzdFwiLFxyXG4gICAgICAgIFwiZ3JheXNjYWxlXCIsXHJcbiAgICAgICAgXCJzZXBpYVwiLFxyXG4gICAgICAgIFwiZGFya1NjaGVtZUJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgICAgIFwiZGFya1NjaGVtZVRleHRDb2xvclwiLFxyXG4gICAgICAgIFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lVGV4dENvbG9yXCJcclxuICAgIF07XHJcbiAgICBmdW5jdGlvbiBnZXRUaGVtZUtleSh0aGVtZSkge1xyXG4gICAgICAgIGxldCByZXN1bHRLZXkgPSBcIlwiO1xyXG4gICAgICAgIHRoZW1lQ2FjaGVLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHRLZXkgKz0gYCR7a2V5fToke3RoZW1lW2tleV19O2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdEtleTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFzeW5jUXVldWUgPSBjcmVhdGVBc3luY1Rhc2tzUXVldWUoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpIHtcclxuICAgICAgICBsZXQgcmVuZGVySWQgPSAwO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0eWxlUnVsZUhhc2gocnVsZSkge1xyXG4gICAgICAgICAgICBsZXQgY3NzVGV4dCA9IHJ1bGUuY3NzVGV4dDtcclxuICAgICAgICAgICAgaWYgKGlzTWVkaWFSdWxlKHJ1bGUucGFyZW50UnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNzc1RleHQgPSBgJHtydWxlLnBhcmVudFJ1bGUubWVkaWEubWVkaWFUZXh0fSB7ICR7Y3NzVGV4dH0gfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdldEhhc2hDb2RlKGNzc1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBydWxlc1RleHRDYWNoZSA9IG5ldyBTZXQoKTtcclxuICAgICAgICBjb25zdCBydWxlc01vZENhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IHZhclR5cGVDaGFuZ2VDbGVhbmVycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgcHJldkZpbHRlcktleSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGhhc05vbkxvYWRlZExpbmsgPSBmYWxzZTtcclxuICAgICAgICBsZXQgd2FzUmVidWlsdCA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNob3VsZFJlYnVpbGRTdHlsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc05vbkxvYWRlZExpbmsgJiYgIXdhc1JlYnVpbHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG1vZGlmeVNoZWV0KG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBvcHRpb25zLnNvdXJjZUNTU1J1bGVzO1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICBmb3JjZSxcclxuICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldCxcclxuICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWRcclxuICAgICAgICAgICAgfSA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIGxldCBydWxlc0NoYW5nZWQgPSBydWxlc01vZENhY2hlLnNpemUgPT09IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdEZvdW5kQ2FjaGVLZXlzID0gbmV3IFNldChydWxlc01vZENhY2hlLmtleXMoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lS2V5ID0gZ2V0VGhlbWVLZXkodGhlbWUpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGVtZUNoYW5nZWQgPSB0aGVtZUtleSAhPT0gcHJldkZpbHRlcktleTtcclxuICAgICAgICAgICAgaWYgKGhhc05vbkxvYWRlZExpbmspIHtcclxuICAgICAgICAgICAgICAgIHdhc1JlYnVpbHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZFJ1bGVzID0gW107XHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhcclxuICAgICAgICAgICAgICAgIHJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNoID0gZ2V0U3R5bGVSdWxlSGFzaChydWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dERpZmZlcnNGcm9tUHJldiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kQ2FjaGVLZXlzLmRlbGV0ZShoYXNoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJ1bGVzVGV4dENhY2hlLmhhcyhoYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlc1RleHRDYWNoZS5hZGQoaGFzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHREaWZmZXJzRnJvbVByZXYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dERpZmZlcnNGcm9tUHJldikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZFJ1bGVzLnB1c2gocnVsZXNNb2RDYWNoZS5nZXQoaGFzaCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLnN0eWxlLmFsbCA9PT0gXCJyZXZlcnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZERlY3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZCA9IGdldE1vZGlmaWFibGVDU1NEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2REZWNzLnB1c2gobW9kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZFJ1bGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2REZWNzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50UnVsZSA9IHJ1bGUucGFyZW50UnVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBydWxlLnNlbGVjdG9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogbW9kRGVjcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFJ1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUnVsZXMucHVzaChtb2RSdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXNNb2RDYWNoZS5zZXQoaGFzaCwgbW9kUnVsZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc05vbkxvYWRlZExpbmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBub3RGb3VuZENhY2hlS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzVGV4dENhY2hlLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgcnVsZXNNb2RDYWNoZS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByZXZGaWx0ZXJLZXkgPSB0aGVtZUtleTtcclxuICAgICAgICAgICAgaWYgKCFmb3JjZSAmJiAhcnVsZXNDaGFuZ2VkICYmICF0aGVtZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW5kZXJJZCsrO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtzZWxlY3RvciwgZGVjbGFyYXRpb25zfSA9IHJ1bGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUlzV2hlcmVTZWxlY3RvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNDaHJvbWl1bSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLnN0YXJ0c1dpdGgoXCI6aXMoXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbGVjdG9yLmluY2x1ZGVzKFwiOmlzKClcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IuaW5jbHVkZXMoXCI6d2hlcmUoKVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0b3IuaW5jbHVkZXMoXCI6d2hlcmUoXCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvci5pbmNsdWRlcyhcIjotbW96XCIpKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWV3VHJhbnNpdGlvblNlbGVjdG9yID1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvci5pbmNsdWRlcyhcIjo6dmlldy10cmFuc2l0aW9uLVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbXB0eUlzV2hlcmVTZWxlY3RvciB8fCB2aWV3VHJhbnNpdGlvblNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gXCIuZGFya3JlYWRlci11bnN1cHBvcnRlZC1zZWxlY3RvclwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHJ1bGVUZXh0ID0gYCR7c2VsZWN0b3JUZXh0fSB7YDtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGVjIG9mIGRlY2xhcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtwcm9wZXJ0eSwgdmFsdWUsIGltcG9ydGFudH0gPSBkZWM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVUZXh0ICs9IGAgJHtwcm9wZXJ0eX06ICR7dmFsdWV9JHtpbXBvcnRhbnQgPyBcIiAhaW1wb3J0YW50XCIgOiBcIlwifTtgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1bGVUZXh0ICs9IFwiIH1cIjtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRSdWxlKHJ1bGVUZXh0LCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYXN5bmNEZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhckRlY2xhcmF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgbGV0IGFzeW5jRGVjbGFyYXRpb25Db3VudGVyID0gMDtcclxuICAgICAgICAgICAgbGV0IHZhckRlY2xhcmF0aW9uQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3RSZWFkeUdyb3VwID0ge3J1bGU6IG51bGwsIHJ1bGVzOiBbXSwgaXNHcm91cDogdHJ1ZX07XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwUmVmcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHJ1bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFJlYWR5R3JvdXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSZWZzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cFJlZnMuZ2V0KHJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSB7cnVsZSwgcnVsZXM6IFtdLCBpc0dyb3VwOiB0cnVlfTtcclxuICAgICAgICAgICAgICAgIGdyb3VwUmVmcy5zZXQocnVsZSwgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50R3JvdXAgPSBnZXRHcm91cChydWxlLnBhcmVudFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50R3JvdXAucnVsZXMucHVzaChncm91cCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmZvckVhY2goKGNsZWFyKSA9PiBjbGVhcigpKTtcclxuICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIG1vZFJ1bGVzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChyKSA9PiByKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHtzZWxlY3RvciwgZGVjbGFyYXRpb25zLCBwYXJlbnRSdWxlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZ2V0R3JvdXAocGFyZW50UnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZHlTdHlsZVJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dyb3VwOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZHlEZWNsYXJhdGlvbnMgPSByZWFkeVN0eWxlUnVsZS5kZWNsYXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAucnVsZXMucHVzaChyZWFkeVN0eWxlUnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQXN5bmNEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzeW5jS2V5ID0gKythc3luY0RlY2xhcmF0aW9uQ291bnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXN5bmNEZWNsYXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goYXN5bmNEZWNsYXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZW5kZXJJZCA9IHJlbmRlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZC50aGVuKChhc3luY1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFzeW5jVmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVySWQgIT09IHJlbmRlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9uLnZhbHVlID0gYXN5bmNWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jUXVldWUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVySWQgIT09IHJlbmRlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZEFzeW5jUnVsZShhc3luY0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVZhckRlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtkZWNsYXJhdGlvbnM6IHZhckRlY3MsIG9uVHlwZUNoYW5nZX0gPSBtb2RpZmllZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyS2V5ID0gKyt2YXJEZWNsYXJhdGlvbkNvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZW5kZXJJZCA9IHJlbmRlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsSW5kZXggPSByZWFkeURlY2xhcmF0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGREZWNzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJEZWNzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcERlYyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2godGVtcERlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGREZWNzID0gW3RlbXBEZWNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhckRlY3MuZm9yRWFjaCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kLnZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZC5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZHlEZWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtb2QucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2QudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcktleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaChyZWFkeURlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcy5wdXNoKHJlYWR5RGVjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVHlwZUNoYW5nZS5hZGRMaXN0ZW5lcigobmV3RGVjcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZW5kZXJJZCAhPT0gcmVuZGVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5VmFyRGVjcyA9IG5ld0RlY3MubWFwKChtb2QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbW9kLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHJlYWR5RGVjbGFyYXRpb25zLmluZGV4T2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVhZHlWYXJEZWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcyA9IHJlYWR5VmFyRGVjcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRWYXJSdWxlKHZhcktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMuYWRkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UucmVtb3ZlTGlzdGVuZXJzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh7cHJvcGVydHksIHZhbHVlLCBpbXBvcnRhbnQsIHNvdXJjZVZhbHVlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZWQgPSB2YWx1ZSh0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBc3luY0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVmFyRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IHByZXBhcmVTaGVldCgpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBidWlsZFN0eWxlU2hlZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXJnZXQoZ3JvdXAsIHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtydWxlfSA9IGdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01lZGlhUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7bWVkaWF9ID0gcnVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0UnVsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBAbWVkaWEgJHttZWRpYS5tZWRpYVRleHR9IHt9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMYXllclJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge25hbWV9ID0gcnVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0UnVsZShgQGxheWVyICR7bmFtZX0ge31gLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZVJlYWR5UnVsZXMoZ3JvdXAsIHRhcmdldCwgc3R5bGVJdGVyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnJ1bGVzLmZvckVhY2goKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGNyZWF0ZVRhcmdldChyLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZVJlYWR5UnVsZXMociwgdCwgc3R5bGVJdGVyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUl0ZXJhdG9yKHIsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVSZWFkeVJ1bGVzKHJvb3RSZWFkeUdyb3VwLCBzaGVldCwgKHJ1bGUsIHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBydWxlLmRlY2xhcmF0aW9ucy5mb3JFYWNoKCh7YXN5bmNLZXksIHZhcktleX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFzeW5jS2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jRGVjbGFyYXRpb25zLnNldChhc3luY0tleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyS2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhckRlY2xhcmF0aW9ucy5zZXQodmFyS2V5LCB7cnVsZSwgdGFyZ2V0LCBpbmRleH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYnVpbGRBc3luY1J1bGUoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7cnVsZSwgdGFyZ2V0LCBpbmRleH0gPSBhc3luY0RlY2xhcmF0aW9ucy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kZWxldGVSdWxlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSk7XHJcbiAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9ucy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWJ1aWxkVmFyUnVsZShrZXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtydWxlLCB0YXJnZXQsIGluZGV4fSA9IHZhckRlY2xhcmF0aW9ucy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kZWxldGVSdWxlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVpbGRTdHlsZVNoZWV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7bW9kaWZ5U2hlZXQsIHNob3VsZFJlYnVpbGRTdHlsZX07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNhblVzZVNoZWV0UHJveHkkMSA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIixcclxuICAgICAgICAoKSA9PiAoY2FuVXNlU2hlZXRQcm94eSQxID0gdHJ1ZSksXHJcbiAgICAgICAge29uY2U6IHRydWV9XHJcbiAgICApO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hlZXRXYXRjaGVyKFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgc2FmZUdldFNoZWV0UnVsZXMsXHJcbiAgICAgICAgY2FsbGJhY2ssXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIGxldCByYWZTaGVldFdhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoRm9yU2hlZXRDaGFuZ2VzKCkge1xyXG4gICAgICAgICAgICB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKTtcclxuICAgICAgICAgICAgaWYgKCEoY2FuVXNlU2hlZXRQcm94eSQxICYmIGVsZW1lbnQuc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByYWZTaGVldFdhdGNoZXIgPSBjcmVhdGVSQUZTaGVldFdhdGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBzYWZlR2V0U2hlZXRSdWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJhZlNoZWV0V2F0Y2hlci5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TaGVldENoYW5nZSgpIHtcclxuICAgICAgICAgICAgY2FuVXNlU2hlZXRQcm94eSQxID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmFmU2hlZXRXYXRjaGVyPy5zdG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChhcmVTaGVldENoYW5nZXNQZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU2hlZXRDaGFuZ2VzKCkge1xyXG4gICAgICAgICAgICAgICAgYXJlU2hlZXRDaGFuZ2VzUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQ2FuY2VsbGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBxdWV1ZU1pY3JvdGFzayhoYW5kbGVTaGVldENoYW5nZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUHJveHkoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX191cGRhdGVTaGVldFwiLFxyXG4gICAgICAgICAgICAgICAgb25TaGVldENoYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fdXBkYXRlU2hlZXRcIixcclxuICAgICAgICAgICAgICAgIG9uU2hlZXRDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzKCkge1xyXG4gICAgICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCk7XHJcbiAgICAgICAgICAgIHJhZlNoZWV0V2F0Y2hlcj8uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGFydDogd2F0Y2hGb3JTaGVldENoYW5nZXMsXHJcbiAgICAgICAgICAgIHN0b3A6IHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSQUZTaGVldFdhdGNoZXIoXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBzYWZlR2V0U2hlZXRSdWxlcyxcclxuICAgICAgICBjYWxsYmFjayxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHJ1bGVzQ2hhbmdlS2V5ID0gbnVsbDtcclxuICAgICAgICBsZXQgcnVsZXNDaGVja0ZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzQ2hhbmdlS2V5KCkge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IHNhZmVHZXRTaGVldFJ1bGVzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBydWxlcyA/IHJ1bGVzLmxlbmd0aCA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRpZFJ1bGVzS2V5Q2hhbmdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UnVsZXNDaGFuZ2VLZXkoKSAhPT0gcnVsZXNDaGFuZ2VLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKSB7XHJcbiAgICAgICAgICAgIHJ1bGVzQ2hhbmdlS2V5ID0gZ2V0UnVsZXNDaGFuZ2VLZXkoKTtcclxuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tGb3JVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxsZWQgPSBpc0NhbmNlbGxlZCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQgJiYgZGlkUnVsZXNLZXlDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzQ2hhbmdlS2V5ID0gZ2V0UnVsZXNDaGFuZ2VLZXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCB8fCAoY2FuVXNlU2hlZXRQcm94eSQxICYmIGVsZW1lbnQuc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUYoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydWxlc0NoZWNrRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0ZvclVwZGF0ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNoZWNrRm9yVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCkge1xyXG4gICAgICAgICAgICBydWxlc0NoZWNrRnJhbWVJZCAmJiBjYW5jZWxBbmltYXRpb25GcmFtZShydWxlc0NoZWNrRnJhbWVJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGLFxyXG4gICAgICAgICAgICBzdG9wOiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU1RZTEVfU0VMRUNUT1IgPSAnc3R5bGUsIGxpbmtbcmVsKj1cInN0eWxlc2hlZXRcIiBpXTpub3QoW2Rpc2FibGVkXSknO1xyXG4gICAgZnVuY3Rpb24gaXNGb250c0dvb2dsZUFwaVN0eWxlKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuaHJlZikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRVUkwgPSBuZXcgVVJMKGVsZW1lbnQuaHJlZik7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50VVJMLmhvc3RuYW1lID09PSBcImZvbnRzLmdvb2dsZWFwaXMuY29tXCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGxvZ0luZm8oYENvdWxkbid0IGNvbnN0cnVjdCAke2VsZW1lbnQuaHJlZn0gYXMgVVJMYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBob3N0c0JyZWFraW5nT25TVkdTdHlsZU92ZXJyaWRlID0gW1wid3d3Lm9uZXQucGxcIl07XHJcbiAgICBmdW5jdGlvbiBzaG91bGRNYW5hZ2VTdHlsZShlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR1N0eWxlRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFob3N0c0JyZWFraW5nT25TVkdTdHlsZU92ZXJyaWRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ob3N0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICkpIHx8XHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oZWxlbWVudC5yZWwpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInN0eWxlc2hlZXRcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGVsZW1lbnQuaHJlZikgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZWxlbWVudC5kaXNhYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChpc0ZpcmVmb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAhZWxlbWVudC5ocmVmLnN0YXJ0c1dpdGgoXCJtb3otZXh0ZW5zaW9uOi8vXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAhaXNGb250c0dvb2dsZUFwaVN0eWxlKGVsZW1lbnQpKSkgJiZcclxuICAgICAgICAgICAgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya3JlYWRlclwiKSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50Lm1lZGlhLnRvTG93ZXJDYXNlKCkgIT09IFwicHJpbnRcIiAmJlxyXG4gICAgICAgICAgICAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdHlsdXNcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlLCByZXN1bHRzID0gW10sIGRlZXAgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKHNob3VsZE1hbmFnZVN0eWxlKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChub2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBub2RlIGluc3RhbmNlb2YgRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAoaXNTaGFkb3dEb21TdXBwb3J0ZWQgJiYgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHx8XHJcbiAgICAgICAgICAgIG5vZGUgPT09IGRvY3VtZW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGZvckVhY2gobm9kZS5xdWVyeVNlbGVjdG9yQWxsKFNUWUxFX1NFTEVDVE9SKSwgKHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgZ2V0TWFuYWdlYWJsZVN0eWxlcyhzdHlsZSwgcmVzdWx0cywgZmFsc2UpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZSwgKGhvc3QpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TWFuYWdlYWJsZVN0eWxlcyhob3N0LnNoYWRvd1Jvb3QsIHJlc3VsdHMsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuICAgIGNvbnN0IHN5bmNTdHlsZVNldCA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBjb3JzU3R5bGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgbGV0IGxvYWRpbmdMaW5rQ291bnRlciA9IDA7XHJcbiAgICBjb25zdCByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBjbGVhbkxvYWRpbmdMaW5rcygpIHtcclxuICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1hbmFnZVN0eWxlKGVsZW1lbnQsIHt1cGRhdGUsIGxvYWRpbmdTdGFydCwgbG9hZGluZ0VuZH0pIHtcclxuICAgICAgICBjb25zdCBwcmV2U3R5bGVzID0gW107XHJcbiAgICAgICAgbGV0IG5leHQgPSBlbGVtZW50O1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgKG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZykgJiZcclxuICAgICAgICAgICAgbmV4dC5tYXRjaGVzKFwiLmRhcmtyZWFkZXJcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcHJldlN0eWxlcy5wdXNoKG5leHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29yc0NvcHkgPVxyXG4gICAgICAgICAgICBwcmV2U3R5bGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZWwpID0+IGVsLm1hdGNoZXMoXCIuZGFya3JlYWRlci0tY29yc1wiKSAmJiAhY29yc1N0eWxlU2V0LmhhcyhlbClcclxuICAgICAgICAgICAgKSB8fCBudWxsO1xyXG4gICAgICAgIGxldCBzeW5jU3R5bGUgPVxyXG4gICAgICAgICAgICBwcmV2U3R5bGVzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoZWwpID0+IGVsLm1hdGNoZXMoXCIuZGFya3JlYWRlci0tc3luY1wiKSAmJiAhc3luY1N0eWxlU2V0LmhhcyhlbClcclxuICAgICAgICAgICAgKSB8fCBudWxsO1xyXG4gICAgICAgIGxldCBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc092ZXJyaWRlRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGlzQXN5bmNDYW5jZWxsZWQgPSAoKSA9PiBjYW5jZWxBc3luY09wZXJhdGlvbnM7XHJcbiAgICAgICAgY29uc3Qgc2hlZXRNb2RpZmllciA9IGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpO1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMuc29tZSgobSkgPT4gbS50eXBlID09PSBcImNoYXJhY3RlckRhdGFcIikgJiZcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zQ1NTSW1wb3J0KClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3NUZXh0ID0gKGVsZW1lbnQudGV4dENvbnRlbnQgPz8gXCJcIikudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlT3JVcGRhdGVDT1JTQ29weShjc3NUZXh0LCBsb2NhdGlvbi5ocmVmKS50aGVuKHVwZGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmdW5jdGlvbiBjb250YWluc0NTU0ltcG9ydCgpIHtcclxuICAgICAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY3NzVGV4dCA9IHJlbW92ZUNTU0NvbW1lbnRzKGVsZW1lbnQudGV4dENvbnRlbnQgPz8gXCJcIikudHJpbSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3NzVGV4dC5tYXRjaChjc3NJbXBvcnRSZWdleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhc0ltcG9ydHMoY3NzUnVsZXMsIGNoZWNrQ3Jvc3NPcmlnaW4pIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBydWxlO1xyXG4gICAgICAgICAgICAgICAgY3NzUnVsZXNMb29wOiBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMCwgbGVuID0gY3NzUnVsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPCBsZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlID0gY3NzUnVsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUuaHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDcm9zc09yaWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFydWxlLmhyZWYuc3RhcnRzV2l0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaHJlZi5zdGFydHNXaXRoKFwiaHR0cFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFydWxlLmhyZWYuc3RhcnRzV2l0aChsb2NhdGlvbi5vcmlnaW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGNzc1J1bGVzTG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBjc3NSdWxlc0xvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNTeW5jKCkge1xyXG4gICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3JzQ29weS5zaGVldC5jc3NSdWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29udGFpbnNDU1NJbXBvcnQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY3NzUnVsZXMgPSBzYWZlR2V0U2hlZXRSdWxlcygpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAhaXNSZWxhdGl2ZUhyZWZPbkFic29sdXRlUGF0aChlbGVtZW50LmhyZWYpICYmXHJcbiAgICAgICAgICAgICAgICBoYXNJbXBvcnRzKGNzc1J1bGVzLCBmYWxzZSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGFzSW1wb3J0cyhjc3NSdWxlcywgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NSdWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaW5zZXJ0U3R5bGUoKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcgIT09IGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubmV4dFNpYmxpbmdcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvcnNDb3B5Lm5leHRTaWJsaW5nICE9PSBzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5Lm5leHRTaWJsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nICE9PSBzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3luY1N0eWxlLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTeW5jU3R5bGUoKSB7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZSA9XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgU1ZHU3R5bGVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZS5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlci0tc3luY1wiKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlLm1lZGlhID0gXCJzY3JlZW5cIjtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHN5bmNTdHlsZS50aXRsZSA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3luY1N0eWxlU2V0LmFkZChzeW5jU3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXNMb2FkaW5nUnVsZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgd2FzTG9hZGluZ0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbG9hZGluZ0xpbmtJZCA9ICsrbG9hZGluZ0xpbmtDb3VudGVyO1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldFJ1bGVzQXN5bmMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3NUZXh0O1xyXG4gICAgICAgICAgICBsZXQgY3NzQmFzZVBhdGg7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW2Nzc1J1bGVzLCBhY2Nlc3NFcnJvcl0gPSBnZXRSdWxlc09yRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAoaXNTYWZhcmkgJiYgIWVsZW1lbnQuc2hlZXQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCFpc1NhZmFyaSAmJiAhY3NzUnVsZXMgJiYgIWFjY2Vzc0Vycm9yKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU3RpbGxMb2FkaW5nRXJyb3IoYWNjZXNzRXJyb3IpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYExpbmtlbGVtZW50ICR7bG9hZGluZ0xpbmtJZH0gaXMgbm90IGxvYWRlZCB5ZXQgYW5kIHRodXMgd2lsbCBiZSBhd2FpdCBmb3JgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBsaW5rTG9hZGluZyhlbGVtZW50LCBsb2FkaW5nTGlua0lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FzTG9hZGluZ0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbmNlbEFzeW5jT3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgW2Nzc1J1bGVzLCBhY2Nlc3NFcnJvcl0gPSBnZXRSdWxlc09yRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzSW1wb3J0cyhjc3NSdWxlcywgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3NSdWxlcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjc3NUZXh0ID0gYXdhaXQgbG9hZFRleHQoZWxlbWVudC5ocmVmKTtcclxuICAgICAgICAgICAgICAgIGNzc0Jhc2VQYXRoID0gZ2V0Q1NTQmFzZUJhdGgoZWxlbWVudC5ocmVmKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxBc3luY09wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluc0NTU0ltcG9ydCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjc3NUZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBjc3NCYXNlUGF0aCA9IGdldENTU0Jhc2VCYXRoKGxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlT3JVcGRhdGVDT1JTQ29weShjc3NUZXh0LCBjc3NCYXNlUGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvcnNDb3B5LnNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZUNPUlNDb3B5KGNzc1RleHQsIGNzc0Jhc2VQYXRoKSB7XHJcbiAgICAgICAgICAgIGlmIChjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxDU1NUZXh0ID0gYXdhaXQgcmVwbGFjZUNTU0ltcG9ydHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Jhc2VQYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvcnNDb3B5LnRleHRDb250ZW50Py5sZW5ndGggPz8gMCkgPFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbENTU1RleHQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yc0NvcHkudGV4dENvbnRlbnQgPSBmdWxsQ1NTVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5ID0gY3JlYXRlQ09SU0NvcHkoZWxlbWVudCwgZnVsbENTU1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cclxuICAgICAgICAgICAgICAgIGlmIChjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyID0gd2F0Y2hGb3JOb2RlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXYtc2libGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZXRhaWxzKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBnZXRSdWxlc1N5bmMoKTtcclxuICAgICAgICAgICAgaWYgKCFydWxlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2Vjb25kUm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmdSdWxlcyB8fCB3YXNMb2FkaW5nRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgZ2V0UnVsZXNBc3luYygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nUnVsZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7cnVsZXN9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZm9yY2VSZW5kZXJTdHlsZSA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcih0aGVtZSwgaWdub3JlSW1hZ2VBbmFseXNpcykge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlcyA9IGdldFJ1bGVzU3luYygpO1xyXG4gICAgICAgICAgICBpZiAoIXJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNTU1J1bGVzRnJvbVNoZWV0KHNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQuZGVsZXRlUnVsZShpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmVwYXJlT3ZlcnJpZGVzU2hlZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN5bmNTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVN5bmNTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN5bmNTdHlsZS5zaGVldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gc3luY1N0eWxlLnNoZWV0O1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ1NTUnVsZXNGcm9tU2hlZXQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5ydW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyID0gd2F0Y2hGb3JOb2RlUG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2LXNpYmxpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VSZW5kZXJTdHlsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZE92ZXJyaWRlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzeW5jU3R5bGUuc2hlZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gYnVpbGRPdmVycmlkZXMoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JjZSA9IGZvcmNlUmVuZGVyU3R5bGU7XHJcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaGVldE1vZGlmaWVyLm1vZGlmeVNoZWV0KHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQ6IHByZXBhcmVPdmVycmlkZXNTaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VDU1NSdWxlczogcnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlzT3ZlcnJpZGVFbXB0eSA9IHN5bmNTdHlsZS5zaGVldC5jc3NSdWxlcy5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRNb2RpZmllci5zaG91bGRSZWJ1aWxkU3R5bGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHVwZGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWlsZE92ZXJyaWRlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc09yRXJyb3IoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zaGVldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBudWxsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbZWxlbWVudC5zaGVldC5jc3NSdWxlcywgbnVsbF07XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBlcnJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzU3RpbGxMb2FkaW5nRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yICYmIGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcImxvYWRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNhZmVHZXRTaGVldFJ1bGVzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBbY3NzUnVsZXMsIGVycl0gPSBnZXRSdWxlc09yRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNzc1J1bGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaGVldENoYW5nZVdhdGNoZXIgPSBjcmVhdGVTaGVldFdhdGNoZXIoXHJcbiAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgIHNhZmVHZXRTaGVldFJ1bGVzLFxyXG4gICAgICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGZ1bmN0aW9uIHBhdXNlKCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyICYmIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNoZWV0Q2hhbmdlV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIHBhdXNlKCk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoY29yc0NvcHkpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHN5bmNTdHlsZSk7XHJcbiAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgaWYgKHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5oYXMobG9hZGluZ0xpbmtJZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlamVjdCA9IHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5nZXQobG9hZGluZ0xpbmtJZCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZGVsZXRlKGxvYWRpbmdMaW5rSWQpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0ICYmIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoKCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc2hlZXRDaGFuZ2VXYXRjaGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF4TW92ZUNvdW50ID0gMTA7XHJcbiAgICAgICAgbGV0IG1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzdG9yZSgpIHtcclxuICAgICAgICAgICAgaWYgKCFzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb3ZlQ291bnQrKztcclxuICAgICAgICAgICAgaWYgKG1vdmVDb3VudCA+IG1heE1vdmVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluc2VydFN0eWxlKCk7XHJcbiAgICAgICAgICAgIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyICYmIGNvcnNDb3B5UG9zaXRpb25XYXRjaGVyLnNraXAoKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlUG9zaXRpb25XYXRjaGVyICYmIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlci5za2lwKCk7XHJcbiAgICAgICAgICAgIGlmICghaXNPdmVycmlkZUVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclN0eWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRldGFpbHMsXHJcbiAgICAgICAgICAgIHJlbmRlcixcclxuICAgICAgICAgICAgcGF1c2UsXHJcbiAgICAgICAgICAgIGRlc3Ryb3ksXHJcbiAgICAgICAgICAgIHdhdGNoLFxyXG4gICAgICAgICAgICByZXN0b3JlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxpbmtMb2FkaW5nKGxpbmssIGxvYWRpbmdJZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uTG9hZCk7XHJcbiAgICAgICAgICAgICAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdG9yc0ZvckxvYWRpbmdMaW5rcy5kZWxldGUobG9hZGluZ0lkKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBvbkVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIGBMaW5rZWxlbWVudCAke2xvYWRpbmdJZH0gY291bGRuJ3QgYmUgbG9hZGVkLiAke2xpbmsuaHJlZn1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3Muc2V0KGxvYWRpbmdJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG9uTG9hZCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvciwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgICAgICAgICAgaWYgKCFsaW5rLmhyZWYpIHtcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTSW1wb3J0VVJMKGltcG9ydERlY2xhcmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldENTU1VSTFZhbHVlKFxyXG4gICAgICAgICAgICBpbXBvcnREZWNsYXJhdGlvblxyXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZyg3KVxyXG4gICAgICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLzskLywgXCJcIilcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9zY3JlZW4kLywgXCJcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFRleHQodXJsKSB7XHJcbiAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IChhd2FpdCBmZXRjaCh1cmwpKS50ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IG5ldyBVUkwodXJsKTtcclxuICAgICAgICBpZiAocGFyc2VkVVJMLm9yaWdpbiA9PT0gbG9jYXRpb24ub3JpZ2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBsb2FkQXNUZXh0KHVybCwgXCJ0ZXh0L2Nzc1wiLCBsb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgYmdGZXRjaCh7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgbWltZVR5cGU6IFwidGV4dC9jc3NcIixcclxuICAgICAgICAgICAgb3JpZ2luOiBsb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcGxhY2VDU1NJbXBvcnRzKGNzc1RleHQsIGJhc2VQYXRoLCBjYWNoZSA9IG5ldyBNYXAoKSkge1xyXG4gICAgICAgIGNzc1RleHQgPSByZW1vdmVDU1NDb21tZW50cyhjc3NUZXh0KTtcclxuICAgICAgICBjc3NUZXh0ID0gcmVwbGFjZUNTU0ZvbnRGYWNlKGNzc1RleHQpO1xyXG4gICAgICAgIGNzc1RleHQgPSByZXBsYWNlQ1NTUmVsYXRpdmVVUkxzV2l0aEFic29sdXRlKGNzc1RleHQsIGJhc2VQYXRoKTtcclxuICAgICAgICBjb25zdCBpbXBvcnRNYXRjaGVzID0gZ2V0TWF0Y2hlcyhjc3NJbXBvcnRSZWdleCwgY3NzVGV4dCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXRjaCBvZiBpbXBvcnRNYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydFVSTCA9IGdldENTU0ltcG9ydFVSTChtYXRjaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlVVJMID0gZ2V0QWJzb2x1dGVVUkwoYmFzZVBhdGgsIGltcG9ydFVSTCk7XHJcbiAgICAgICAgICAgIGxldCBpbXBvcnRlZENTUztcclxuICAgICAgICAgICAgaWYgKGNhY2hlLmhhcyhhYnNvbHV0ZVVSTCkpIHtcclxuICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gY2FjaGUuZ2V0KGFic29sdXRlVVJMKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBhd2FpdCBsb2FkVGV4dChhYnNvbHV0ZVVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGFic29sdXRlVVJMLCBpbXBvcnRlZENTUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBhd2FpdCByZXBsYWNlQ1NTSW1wb3J0cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENTU0Jhc2VCYXRoKGFic29sdXRlVVJMKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRDU1MgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnNwbGl0KG1hdGNoKS5qb2luKGltcG9ydGVkQ1NTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQudHJpbSgpO1xyXG4gICAgICAgIHJldHVybiBjc3NUZXh0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ09SU0NvcHkoc3JjRWxlbWVudCwgY3NzVGV4dCkge1xyXG4gICAgICAgIGlmICghY3NzVGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29ycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBjb3JzLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgIGNvcnMuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXItLWNvcnNcIik7XHJcbiAgICAgICAgY29ycy5tZWRpYSA9IFwic2NyZWVuXCI7XHJcbiAgICAgICAgY29ycy50ZXh0Q29udGVudCA9IGNzc1RleHQ7XHJcbiAgICAgICAgc3JjRWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb3JzLCBzcmNFbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICBjb3JzLnNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjb3JzU3R5bGVTZXQuYWRkKGNvcnMpO1xyXG4gICAgICAgIHJldHVybiBjb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlZmluZWRDdXN0b21FbGVtZW50cyA9IG5ldyBTZXQoKTtcclxuICAgIGNvbnN0IHVuZGVmaW5lZEdyb3VwcyA9IG5ldyBNYXAoKTtcclxuICAgIGxldCBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjaztcclxuICAgIGZ1bmN0aW9uIGlzQ3VzdG9tRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS5pbmNsdWRlcyhcIi1cIikgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpc1wiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVjb3JkVW5kZWZpbmVkRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHRhZyA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICghdGFnLmluY2x1ZGVzKFwiLVwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbmRlZFRhZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaXNcIik7XHJcbiAgICAgICAgICAgIGlmIChleHRlbmRlZFRhZykge1xyXG4gICAgICAgICAgICAgICAgdGFnID0gZXh0ZW5kZWRUYWc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF1bmRlZmluZWRHcm91cHMuaGFzKHRhZykpIHtcclxuICAgICAgICAgICAgdW5kZWZpbmVkR3JvdXBzLnNldCh0YWcsIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzV2hlbkRlZmluZWQodGFnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5kZWxldGUodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjayhBcnJheS5mcm9tKGVsZW1lbnRzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bmRlZmluZWRHcm91cHMuZ2V0KHRhZykuYWRkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKHJvb3QpIHtcclxuICAgICAgICBpZiAoIWlzRGVmaW5lZFNlbGVjdG9yU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yRWFjaChcclxuICAgICAgICAgICAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiOm5vdCg6ZGVmaW5lZClcIiksXHJcbiAgICAgICAgICAgIHJlY29yZFVuZGVmaW5lZEVsZW1lbnRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgbGV0IGNhbk9wdGltaXplVXNpbmdQcm94eSA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbk9wdGltaXplVXNpbmdQcm94eSA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7b25jZTogdHJ1ZSwgcGFzc2l2ZTogdHJ1ZX1cclxuICAgICk7XHJcbiAgICBjb25zdCByZXNvbHZlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJc0RlZmluZWQoZSkge1xyXG4gICAgICAgIGNhbk9wdGltaXplVXNpbmdQcm94eSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdGFnID0gZS5kZXRhaWwudGFnO1xyXG4gICAgICAgIGRlZmluZWRDdXN0b21FbGVtZW50cy5hZGQodGFnKTtcclxuICAgICAgICBpZiAocmVzb2x2ZXJzLmhhcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSByZXNvbHZlcnMuZ2V0KHRhZyk7XHJcbiAgICAgICAgICAgIHJlc29sdmVycy5kZWxldGUodGFnKTtcclxuICAgICAgICAgICAgci5mb3JFYWNoKChyKSA9PiByKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGN1c3RvbUVsZW1lbnRzV2hlbkRlZmluZWQodGFnKSB7XHJcbiAgICAgICAgaWYgKGRlZmluZWRDdXN0b21FbGVtZW50cy5oYXModGFnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMgJiZcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnKS50aGVuKCgpID0+IHJlc29sdmUoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FuT3B0aW1pemVVc2luZ1Byb3h5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZXJzLmhhcyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJzLmdldCh0YWcpLnB1c2gocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVycy5zZXQodGFnLCBbcmVzb2x2ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2FkZFVuZGVmaW5lZFJlc29sdmVyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tJZkRlZmluZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSB1bmRlZmluZWRHcm91cHMuZ2V0KHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzICYmIGVsZW1lbnRzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnZhbHVlcygpLm5leHQoKS52YWx1ZS5tYXRjaGVzKFwiOmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tJZkRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0lmRGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhdGNoV2hlbkN1c3RvbUVsZW1lbnRzRGVmaW5lZChjYWxsYmFjaykge1xyXG4gICAgICAgIGVsZW1lbnRzRGVmaW5pdGlvbkNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZUZyb21EZWZpbmVDdXN0b21FbGVtZW50cygpIHtcclxuICAgICAgICBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdW5kZWZpbmVkR3JvdXBzLmNsZWFyKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZFwiLFxyXG4gICAgICAgICAgICBoYW5kbGVJc0RlZmluZWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9ic2VydmVycyA9IFtdO1xyXG4gICAgbGV0IG9ic2VydmVkUm9vdHM7XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvclN0eWxlUG9zaXRpb25zKFxyXG4gICAgICAgIGN1cnJlbnRTdHlsZXMsXHJcbiAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICApIHtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTdHlsZVBvc2l0aW9ucygpO1xyXG4gICAgICAgIGNvbnN0IHByZXZTdHlsZXNCeVJvb3QgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGNvbnN0IGdldFByZXZTdHlsZXMgPSAocm9vdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXByZXZTdHlsZXNCeVJvb3QuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3R5bGVzQnlSb290LnNldChyb290LCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2U3R5bGVzQnlSb290LmdldChyb290KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGN1cnJlbnRTdHlsZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm9vdCA9IG5vZGU7XHJcbiAgICAgICAgICAgIHdoaWxlICgocm9vdCA9IHJvb3QucGFyZW50Tm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICByb290ID09PSBkb2N1bWVudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Qubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlN0eWxlcyA9IGdldFByZXZTdHlsZXMocm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0eWxlcy5hZGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwcmV2U3R5bGVTaWJsaW5ncyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0eWxlU2libGluZ3MgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHNhdmVTdHlsZVBvc2l0aW9uKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZVNpYmxpbmdzLnNldChzdHlsZSwgc3R5bGUucHJldmlvdXNFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgICAgIG5leHRTdHlsZVNpYmxpbmdzLnNldChzdHlsZSwgc3R5bGUubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZm9yZ2V0U3R5bGVQb3NpdGlvbihzdHlsZSkge1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVTaWJsaW5ncy5kZWxldGUoc3R5bGUpO1xyXG4gICAgICAgICAgICBuZXh0U3R5bGVTaWJsaW5ncy5kZWxldGUoc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaWRTdHlsZVBvc2l0aW9uQ2hhbmdlKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSBwcmV2U3R5bGVTaWJsaW5ncy5nZXQoc3R5bGUpIHx8XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG5leHRTdHlsZVNpYmxpbmdzLmdldChzdHlsZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFN0eWxlcy5mb3JFYWNoKHNhdmVTdHlsZVBvc2l0aW9uKTtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdHlsZU9wZXJhdGlvbnMocm9vdCwgb3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCB7Y3JlYXRlZFN0eWxlcywgcmVtb3ZlZFN0eWxlcywgbW92ZWRTdHlsZXN9ID0gb3BlcmF0aW9ucztcclxuICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5mb3JFYWNoKChzKSA9PiBzYXZlU3R5bGVQb3NpdGlvbihzKSk7XHJcbiAgICAgICAgICAgIG1vdmVkU3R5bGVzLmZvckVhY2goKHMpID0+IHNhdmVTdHlsZVBvc2l0aW9uKHMpKTtcclxuICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzKSA9PiBmb3JnZXRTdHlsZVBvc2l0aW9uKHMpKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldlN0eWxlcyA9IGdldFByZXZTdHlsZXMocm9vdCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuZm9yRWFjaCgocykgPT4gcHJldlN0eWxlcy5hZGQocykpO1xyXG4gICAgICAgICAgICByZW1vdmVkU3R5bGVzLmZvckVhY2goKHMpID0+IHByZXZTdHlsZXMuZGVsZXRlKHMpKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5zaXplICsgcmVtb3ZlZFN0eWxlcy5zaXplICsgbW92ZWRTdHlsZXMuc2l6ZSA+XHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBBcnJheS5mcm9tKGNyZWF0ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IEFycmF5LmZyb20ocmVtb3ZlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWQ6IEFycmF5LmZyb20obW92ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IFtdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVNaW5vclRyZWVNdXRhdGlvbnMocm9vdCwge2FkZGl0aW9ucywgbW92ZXMsIGRlbGV0aW9uc30pIHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKChub2RlKSA9PlxyXG4gICAgICAgICAgICAgICAgZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlKS5mb3JFYWNoKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLmFkZChzdHlsZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGVsZXRpb25zLmZvckVhY2goKG5vZGUpID0+XHJcbiAgICAgICAgICAgICAgICBnZXRNYW5hZ2VhYmxlU3R5bGVzKG5vZGUpLmZvckVhY2goKHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuYWRkKHN0eWxlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtb3Zlcy5mb3JFYWNoKChub2RlKSA9PlxyXG4gICAgICAgICAgICAgICAgZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlKS5mb3JFYWNoKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlcy5hZGQoc3R5bGUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlT3BlcmF0aW9ucyhyb290LCB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaCgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVlcE9ic2VydmUobik7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMobik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIChub2RlKSA9PiBpc0N1c3RvbUVsZW1lbnQobm9kZSkgJiYgcmVjb3JkVW5kZWZpbmVkRWxlbWVudChub2RlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVIdWdlVHJlZU11dGF0aW9ucyhyb290KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IG5ldyBTZXQoZ2V0TWFuYWdlYWJsZVN0eWxlcyhyb290KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2U3R5bGVzID0gZ2V0UHJldlN0eWxlcyhyb290KTtcclxuICAgICAgICAgICAgc3R5bGVzLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcHJldlN0eWxlcy5oYXMocykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLmFkZChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHlsZXMuaGFzKHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5hZGQocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdHlsZXMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICFjcmVhdGVkU3R5bGVzLmhhcyhzKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFyZW1vdmVkU3R5bGVzLmhhcyhzKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRpZFN0eWxlUG9zaXRpb25DaGFuZ2UocylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzLmFkZChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlT3BlcmF0aW9ucyhyb290LCB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkU3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIG1vdmVkU3R5bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkZWVwT2JzZXJ2ZShyb290KTtcclxuICAgICAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKHJvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMobXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7dGFyZ2V0fSA9IG07XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZE1hbmFnZVN0eWxlKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFN0eWxlcy5hZGQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuYWRkKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWRTdHlsZXMuc2l6ZSArIHJlbW92ZWRTdHlsZXMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZDogQXJyYXkuZnJvbSh1cGRhdGVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBBcnJheS5mcm9tKHJlbW92ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkOiBbXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZShyb290KSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZlZFJvb3RzLmhhcyhyb290KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRyZWVPYnNlcnZlciA9IGNyZWF0ZU9wdGltaXplZFRyZWVPYnNlcnZlcihyb290LCB7XHJcbiAgICAgICAgICAgICAgICBvbk1pbm9yTXV0YXRpb25zOiBoYW5kbGVNaW5vclRyZWVNdXRhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBvbkh1Z2VNdXRhdGlvbnM6IGhhbmRsZUh1Z2VUcmVlTXV0YXRpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMpO1xyXG4gICAgICAgICAgICBhdHRyT2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcInJlbFwiLCBcImRpc2FibGVkXCIsIFwibWVkaWFcIiwgXCJocmVmXCJdLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJzLnB1c2godHJlZU9ic2VydmVyLCBhdHRyT2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICBvYnNlcnZlZFJvb3RzLmFkZChyb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMobm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7c2hhZG93Um9vdH0gPSBub2RlO1xyXG4gICAgICAgICAgICBpZiAoc2hhZG93Um9vdCA9PSBudWxsIHx8IG9ic2VydmVkUm9vdHMuaGFzKHNoYWRvd1Jvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2ZShzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWQoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRlZXBPYnNlcnZlKG5vZGUpIHtcclxuICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUsIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZShkb2N1bWVudCk7XHJcbiAgICAgICAgZGVlcE9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuICAgICAgICB3YXRjaFdoZW5DdXN0b21FbGVtZW50c0RlZmluZWQoKGhvc3RzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IFtdO1xyXG4gICAgICAgICAgICBob3N0cy5mb3JFYWNoKChob3N0KSA9PlxyXG4gICAgICAgICAgICAgICAgcHVzaChuZXdTdHlsZXMsIGdldE1hbmFnZWFibGVTdHlsZXMoaG9zdC5zaGFkb3dSb290KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdXBkYXRlKHtjcmVhdGVkOiBuZXdTdHlsZXMsIHVwZGF0ZWQ6IFtdLCByZW1vdmVkOiBbXSwgbW92ZWQ6IFtdfSk7XHJcbiAgICAgICAgICAgIGhvc3RzLmZvckVhY2goKGhvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtzaGFkb3dSb290fSA9IGhvc3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93Um9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlRm9yU2hhZG93Um9vdENoYW5nZXMoaG9zdCk7XHJcbiAgICAgICAgICAgICAgICBkZWVwT2JzZXJ2ZShzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhzaGFkb3dSb290KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIl9fZGFya3JlYWRlcl9faXNEZWZpbmVkXCIsIGhhbmRsZUlzRGVmaW5lZCk7XHJcbiAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKGRvY3VtZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc2V0T2JzZXJ2ZXJzKCkge1xyXG4gICAgICAgIG9ic2VydmVycy5mb3JFYWNoKChvKSA9PiBvLmRpc2Nvbm5lY3QoKSk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZSgwLCBvYnNlcnZlcnMubGVuZ3RoKTtcclxuICAgICAgICBvYnNlcnZlZFJvb3RzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclN0eWxlUG9zaXRpb25zKCkge1xyXG4gICAgICAgIHJlc2V0T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgdW5zdWJzY3JpYmVGcm9tRGVmaW5lQ3VzdG9tRWxlbWVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvclN0eWxlQ2hhbmdlcyhjdXJyZW50U3R5bGVzLCB1cGRhdGUsIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKSB7XHJcbiAgICAgICAgd2F0Y2hGb3JTdHlsZVBvc2l0aW9ucyhjdXJyZW50U3R5bGVzLCB1cGRhdGUsIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclN0eWxlQ2hhbmdlcygpIHtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTdHlsZVBvc2l0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjYW5Vc2VTaGVldFByb3h5ID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiX19kYXJrcmVhZGVyX19pbmxpbmVTY3JpcHRzQWxsb3dlZFwiLFxyXG4gICAgICAgICgpID0+IChjYW5Vc2VTaGVldFByb3h5ID0gdHJ1ZSksXHJcbiAgICAgICAge29uY2U6IHRydWV9XHJcbiAgICApO1xyXG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IG92ZXJyaWRlc0J5U291cmNlID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGNhbkhhdmVBZG9wdGVkU3R5bGVTaGVldHMobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkb3B0ZWRTdHlsZVNoZWV0T3ZlcnJpZGUobm9kZSkge1xyXG4gICAgICAgIGxldCBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBpdGVyYXRlU291cmNlU2hlZXRzKGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmZvckVhY2goKHNoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW92ZXJyaWRlcy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3Ioc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0U2hlZXQoc2hlZXQsIG92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoZWV0cyA9IFsuLi5ub2RlLmFkb3B0ZWRTdHlsZVNoZWV0c107XHJcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0SW5kZXggPSBuZXdTaGVldHMuaW5kZXhPZihzaGVldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJyaWRlSW5kZXggPSBuZXdTaGVldHMuaW5kZXhPZihvdmVycmlkZSk7XHJcbiAgICAgICAgICAgIGlmIChvdmVycmlkZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1NoZWV0cy5zcGxpY2Uob3ZlcnJpZGVJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3U2hlZXRzLnNwbGljZShzaGVldEluZGV4ICsgMSwgMCwgb3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5ld1NoZWV0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoZWV0cyA9IFsuLi5ub2RlLmFkb3B0ZWRTdHlsZVNoZWV0c107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBuZXdTaGVldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3U2hlZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hlZXRzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS5hZG9wdGVkU3R5bGVTaGVldHMubGVuZ3RoICE9PSBuZXdTaGVldHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IG5ld1NoZWV0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzb3VyY2VTaGVldHMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgICAgICAgICBzb3VyY2VEZWNsYXJhdGlvbnMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGVhbmVycyA9IFtdO1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLmZvckVhY2goKGMpID0+IGMoKSk7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2xlYXIoKTtcclxuICAgICAgICAgICAgaWYgKGZyYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJ1bGVzQ2hhbmdlS2V5ID0gMDtcclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc0NoYW5nZUtleSgpIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgaXRlcmF0ZVNvdXJjZVNoZWV0cygoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ICs9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzWzBdLmNzc1J1bGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUgPyBydWxlLnN0eWxlLmxlbmd0aCA6IGNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNvdXJjZVNoZWV0cyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgbGV0IHNvdXJjZURlY2xhcmF0aW9ucyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHRoZW1lLCBpZ25vcmVJbWFnZUFuYWx5c2lzKSB7XHJcbiAgICAgICAgICAgIGNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc291cmNlU2hlZXRzLmFkZChzaGVldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkeU92ZXJyaWRlID0gb3ZlcnJpZGVzQnlTb3VyY2UuZ2V0KHNoZWV0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWFkeU92ZXJyaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXNDaGFuZ2VLZXkgPSBnZXRSdWxlc0NoYW5nZUtleSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluamVjdFNoZWV0KHNoZWV0LCByZWFkeU92ZXJyaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVycmlkZSA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZXNCeVNvdXJjZS5zZXQoc2hlZXQsIG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgKHJ1bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlRGVjbGFyYXRpb25zLmFkZChydWxlLnN0eWxlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXBhcmVTaGVldCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gb3ZlcnJpZGUuY3NzUnVsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGUuZGVsZXRlUnVsZShpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGUuaW5zZXJ0UnVsZShcIiNfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRPdmVycmlkZSB7fVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmplY3RTaGVldChzaGVldCwgb3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlcy5hZGQob3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdmVycmlkZTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldE1vZGlmaWVyID0gY3JlYXRlU3R5bGVTaGVldE1vZGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICBzaGVldE1vZGlmaWVyLm1vZGlmeVNoZWV0KHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlQ1NTUnVsZXM6IHJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQ6ICgpID0+IGNhbmNlbEFzeW5jT3BlcmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcnVsZXNDaGFuZ2VLZXkgPSBnZXRSdWxlc0NoYW5nZUtleSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FsbGJhY2tSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVBcnJheUNoYW5nZShjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tSZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFja1JlcXVlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldHMgPSBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKHMpID0+ICFvdmVycmlkZXMuaGFzKHMpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2hlZXRzLmZvckVhY2goKHNoZWV0KSA9PiBvdmVycmlkZXNCeVNvdXJjZS5kZWxldGUoc2hlZXQpKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNoZWV0cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjaGVja0ZvclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRSdWxlc0NoYW5nZUtleSgpICE9PSBydWxlc0NoYW5nZUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoVXNpbmdSQUYoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuVXNlU2hlZXRQcm94eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0ZvclVwZGF0ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFycmF5Q2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdhdGNoVXNpbmdSQUYoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gYWRkU2hlZXRDaGFuZ2VFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLnB1c2goKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9uQWRvcHRlZFNoZWV0c0NoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhblVzZVNoZWV0UHJveHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQXJyYXlDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBhZGRTaGVldENoYW5nZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRzQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYWRkU2hlZXRDaGFuZ2VFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZVNoZWV0Q2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYWRkU2hlZXRDaGFuZ2VFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZURlY2xhcmF0aW9uQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGNhblVzZVNoZWV0UHJveHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3YXRjaFVzaW5nUkFGKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVuZGVyLFxyXG4gICAgICAgICAgICBkZXN0cm95LFxyXG4gICAgICAgICAgICB3YXRjaFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjbGFzcyBTdHlsZVNoZWV0Q29tbWFuZEJ1aWxkZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc2VydFJ1bGUoY3NzVGV4dCwgaW5kZXggPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaCh7dHlwZTogXCJpbnNlcnRcIiwgaW5kZXgsIGNzc1RleHR9KTtcclxuICAgICAgICAgICAgdGhpcy5jc3NSdWxlcy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGVTaGVldENvbW1hbmRCdWlsZGVyKHRoaXMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGVSdWxlKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaCh7dHlwZTogXCJkZWxldGVcIiwgaW5kZXh9KTtcclxuICAgICAgICAgICAgdGhpcy5jc3NSdWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcGxhY2VTeW5jKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaCh7dHlwZTogXCJyZXBsYWNlXCIsIGNzc1RleHR9KTtcclxuICAgICAgICAgICAgaWYgKGNzc1RleHQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3R5bGVTaGVldENvbW1hbmRCdWlsZGVyLnJlcGxhY2VTeW5jKCkgaXMgbm90IGZ1bGx5IHN1cHBvcnRlZFwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0RGVlcENTU0NvbW1hbmRzKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWVwID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVlcC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb21tYW5kLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzVGV4dDogY29tbWFuZC50eXBlICE9PSBcImRlbGV0ZVwiID8gY29tbWFuZC5jc3NUZXh0IDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBjb21tYW5kLnR5cGUgPT09IFwicmVwbGFjZVwiID8gW10gOiBbY29tbWFuZC5pbmRleF1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jc3NSdWxlcy5mb3JFYWNoKChydWxlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZENvbW1hbmRzID0gcnVsZS5nZXREZWVwQ1NTQ29tbWFuZHMoKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkQ29tbWFuZHMuZm9yRWFjaCgoYykgPT4gYy5wYXRoLnVuc2hpZnQoaSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyRGVlcENTU0NvbW1hbmRzKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5jc3NSdWxlcy5mb3JFYWNoKChydWxlKSA9PiBydWxlLmNsZWFyRGVlcENTU0NvbW1hbmRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkb3B0ZWRTdHlsZVNoZWV0RmFsbGJhY2sob25DaGFuZ2UpIHtcclxuICAgICAgICBsZXQgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNvdXJjZUNTU1J1bGVzID0gW107XHJcbiAgICAgICAgbGV0IGxhc3RUaGVtZTtcclxuICAgICAgICBsZXQgbGFzdElnbm9yZUltYWdlQW5hbHlzaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ1NTKGNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZUNTU1J1bGVzID0gY3NzUnVsZXM7XHJcbiAgICAgICAgICAgIGlmIChsYXN0VGhlbWUgJiYgbGFzdElnbm9yZUltYWdlQW5hbHlzaXMpIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcihsYXN0VGhlbWUsIGxhc3RJZ25vcmVJbWFnZUFuYWx5c2lzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidWlsZGVyID0gbmV3IFN0eWxlU2hlZXRDb21tYW5kQnVpbGRlcihvbkNoYW5nZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHRoZW1lLCBpZ25vcmVJbWFnZUFuYWx5c2lzKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaGVtZSA9IHRoZW1lO1xyXG4gICAgICAgICAgICBsYXN0SWdub3JlSW1hZ2VBbmFseXNpcyA9IGlnbm9yZUltYWdlQW5hbHlzaXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXBhcmVTaGVldCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIucmVwbGFjZVN5bmMoXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgc2hlZXRNb2RpZmllciA9IGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpO1xyXG4gICAgICAgICAgICBzaGVldE1vZGlmaWVyLm1vZGlmeVNoZWV0KHtcclxuICAgICAgICAgICAgICAgIHByZXBhcmVTaGVldCxcclxuICAgICAgICAgICAgICAgIHNvdXJjZUNTU1J1bGVzLFxyXG4gICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgZm9yY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZDogKCkgPT4gY2FuY2VsQXN5bmNPcGVyYXRpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjb21tYW5kcygpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tbWFuZHMgPSBidWlsZGVyLmdldERlZXBDU1NDb21tYW5kcygpO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNsZWFyRGVlcENTU0NvbW1hbmRzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21tYW5kcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICAgICAgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtyZW5kZXIsIGRlc3Ryb3ksIHVwZGF0ZUNTUywgY29tbWFuZHN9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluamVjdFByb3h5KFxyXG4gICAgICAgIGVuYWJsZVN0eWxlU2hlZXRzUHJveHksXHJcbiAgICAgICAgZW5hYmxlQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5UHJveHlcclxuICAgICkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuZXJzID0gW107XHJcbiAgICAgICAgZnVuY3Rpb24gY2xlYW5VcCgpIHtcclxuICAgICAgICAgICAgY2xlYW5lcnMuZm9yRWFjaCgoY2xlYW4pID0+IGNsZWFuKCkpO1xyXG4gICAgICAgICAgICBjbGVhbmVycy5zcGxpY2UoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50RXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMucHVzaCgoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVDb25mbGljdGluZ1BsdWdpbnMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVXUERhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdz8uV1BEYXJrTW9kZT8uZGVhY3RpdmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5XUERhcmtNb2RlLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGlzYWJsZVdQRGFya01vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnRFdmVudExpc3RlbmVyKFwiX19kYXJrcmVhZGVyX19jbGVhblVwXCIsIGNsZWFuVXApO1xyXG4gICAgICAgIGRvY3VtZW50RXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Rpc2FibGVDb25mbGljdGluZ1BsdWdpbnNcIixcclxuICAgICAgICAgICAgZGlzYWJsZUNvbmZsaWN0aW5nUGx1Z2luc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZnVuY3Rpb24gb3ZlcnJpZGVQcm9wZXJ0eShjbHMsIHByb3AsIG92ZXJyaWRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm90byA9IGNscy5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRvciA9IHsuLi5vbGREZXNjcmlwdG9yfTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3ZlcnJpZGVzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSBvdmVycmlkZXNba2V5XTtcclxuICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0b3Jba2V5XSA9IGZhY3Rvcnkob2xkRGVzY3JpcHRvcltrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgcHJvcCwgbmV3RGVzY3JpcHRvcik7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLnB1c2goKCkgPT5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgcHJvcCwgb2xkRGVzY3JpcHRvcilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gb3ZlcnJpZGUoY2xzLCBwcm9wLCBmYWN0b3J5KSB7XHJcbiAgICAgICAgICAgIG92ZXJyaWRlUHJvcGVydHkoY2xzLCBwcm9wLCB7dmFsdWU6IGZhY3Rvcnl9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaXNEUkVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucyhcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzRFJTaGVldChzaGVldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNEUkVsZW1lbnQoc2hlZXQub3duZXJOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXBkYXRlU2hlZXRFdmVudCA9IG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fdXBkYXRlU2hlZXRcIik7XHJcbiAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0Q2hhbmdlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldENoYW5nZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRPd25lcnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGNvbnN0IGFkb3B0ZWREZWNsYXJhdGlvblNoZWV0cyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gb25BZG9wdGVkU2hlZXRDaGFuZ2Uoc2hlZXQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3duZXJzID0gYWRvcHRlZFNoZWV0T3duZXJzLmdldChzaGVldCk7XHJcbiAgICAgICAgICAgIG93bmVycz8uZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoYWRvcHRlZFNoZWV0Q2hhbmdlRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lcnMuZGVsZXRlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVwb3J0U2hlZXRDaGFuZ2Uoc2hlZXQpIHtcclxuICAgICAgICAgICAgaWYgKHNoZWV0Lm93bmVyTm9kZSAmJiAhaXNEUlNoZWV0KHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgc2hlZXQub3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFkb3B0ZWRTaGVldE93bmVycy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldENoYW5nZShzaGVldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVwb3J0U2hlZXRDaGFuZ2VBc3luYyhzaGVldCwgcHJvbWlzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7b3duZXJOb2RlfSA9IHNoZWV0O1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBvd25lck5vZGUgJiZcclxuICAgICAgICAgICAgICAgICFpc0RSU2hlZXQoc2hlZXQpICYmXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlICYmXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiBvd25lck5vZGUuZGlzcGF0Y2hFdmVudCh1cGRhdGVTaGVldEV2ZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFkb3B0ZWRTaGVldE93bmVycy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiBvbkFkb3B0ZWRTaGVldENoYW5nZShzaGVldCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LFxyXG4gICAgICAgICAgICBcImFkZFJ1bGVcIixcclxuICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChzZWxlY3Rvciwgc3R5bGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgc2VsZWN0b3IsIHN0eWxlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0U2hlZXRDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwiaW5zZXJ0UnVsZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJ1bGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuYXRpdmUuY2FsbCh0aGlzLCBydWxlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0U2hlZXRDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlUnVsZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwicmVtb3ZlUnVsZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgIENTU1N0eWxlU2hlZXQsXHJcbiAgICAgICAgICAgIFwicmVwbGFjZVwiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IG5hdGl2ZS5jYWxsKHRoaXMsIGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlQXN5bmModGhpcywgcmV0dXJuVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LFxyXG4gICAgICAgICAgICBcInJlcGxhY2VTeW5jXCIsXHJcbiAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY3NzVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIGNzc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkV3JhcEhUTUxFbGVtZW50ID1cclxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUgPT09IFwiYmFpZHUuY29tXCIgfHxcclxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUuZW5kc1dpdGgoXCIuYmFpZHUuY29tXCIpO1xyXG4gICAgICAgIGlmIChzaG91bGRXcmFwSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgb3ZlcnJpZGUoXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgXCJnZXRFbGVtZW50c0J5VGFnTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFnTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSAhPT0gXCJzdHlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlLmNhbGwodGhpcywgdGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0Q3VycmVudEVsZW1lbnRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbmF0aXZlLmNhbGwodGhpcywgdGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsuLi5lbGVtZW50c10uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWxlbWVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgJiYgIWlzRFJFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb2RlTGlzdC5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IGdldEN1cnJlbnRFbGVtZW50VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxpc3RCZWhhdmlvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF8sIHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRFbGVtZW50VmFsdWUoKVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb3BlcnR5KSB8fCBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gbmV3IFByb3h5KGVsZW1lbnRzLCBub2RlTGlzdEJlaGF2aW9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJveHlDaGlsZE5vZGVzID0gW1wiYnJpbGxpYW50Lm9yZ1wiLCBcInd3dy52eS5ub1wiXS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzaG91bGRQcm94eUNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgb3ZlcnJpZGVQcm9wZXJ0eShOb2RlLCBcImNoaWxkTm9kZXNcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5hdGl2ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLmNoaWxkTm9kZXNdLmZpbHRlcigoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNEUkVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVDdXN0b21FbGVtZW50KHRhZykge1xyXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCh0YWcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZFwiLCB7ZGV0YWlsOiB7dGFnfX0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnRFdmVudExpc3RlbmVyKFwiX19kYXJrcmVhZGVyX19hZGRVbmRlZmluZWRSZXNvbHZlclwiLCAoZSkgPT5cclxuICAgICAgICAgICAgcmVzb2x2ZUN1c3RvbUVsZW1lbnQoZS5kZXRhaWwudGFnKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGVuYWJsZUN1c3RvbUVsZW1lbnRSZWdpc3RyeVByb3h5KSB7XHJcbiAgICAgICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LFxyXG4gICAgICAgICAgICAgICAgXCJkZWZpbmVcIixcclxuICAgICAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG5hbWUsIGNvbnN0cnVjdG9yLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVDdXN0b21FbGVtZW50KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmUuY2FsbCh0aGlzLCBuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBjaGVja0Jsb2JVUkxTdXBwb3J0KCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdmcgPVxyXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIj48cmVjdCB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIgZmlsbD1cInRyYW5zcGFyZW50XCIvPjwvc3ZnPic7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3ZnLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ZnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBieXRlc1tpXSA9IHN2Zy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnl0ZXNdLCB7dHlwZTogXCJpbWFnZS9zdmcreG1sXCJ9KTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0VVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgbGV0IGJsb2JVUkxBbGxvd2VkO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IG9iamVjdFVSTDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYmxvYlVSTEFsbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGJsb2JVUkxBbGxvd2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fYmxvYlVSTENoZWNrUmVzcG9uc2VcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDoge2Jsb2JVUkxBbGxvd2VkfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYmxvYlVSTENoZWNrUmVxdWVzdFwiLFxyXG4gICAgICAgICAgICBjaGVja0Jsb2JVUkxTdXBwb3J0LFxyXG4gICAgICAgICAgICB7b25jZTogdHJ1ZX1cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChlbmFibGVTdHlsZVNoZWV0c1Byb3h5KSB7XHJcbiAgICAgICAgICAgIG92ZXJyaWRlUHJvcGVydHkoRG9jdW1lbnQsIFwic3R5bGVTaGVldHNcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0Q3VycmVudFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jU2hlZXRzID0gbmF0aXZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNoZWV0cyA9IFsuLi5kb2NTaGVldHNdLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3R5bGVTaGVldCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldC5vd25lck5vZGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRFJTaGVldChzdHlsZVNoZWV0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkU2hlZXRzLml0ZW0gPSAoaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNoZWV0c1tpdGVtXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTaGVldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3R5bGVTaGVldExpc3QucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRDdXJyZW50VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVTaGVldExpc3RCZWhhdmlvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF8sIHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRWYWx1ZSgpW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMgPSBuZXcgUHJveHkoZWxlbWVudHMsIHN0eWxlU2hlZXRMaXN0QmVoYXZpb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRzU291cmNlUHJveGllcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldHNQcm94eVNvdXJjZXMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRzQ2hhbmdlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRzQ2hhbmdlXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0T3ZlcnJpZGVDYWNoZSA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldHNTbmFwc2hvdHMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0RSQWRvcHRlZFNoZWV0T3ZlcnJpZGUgPSAoc2hlZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghc2hlZXQgfHwgIXNoZWV0LmNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFkb3B0ZWRTaGVldE92ZXJyaWRlQ2FjaGUuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBzaGVldC5jc3NSdWxlc1swXS5jc3NUZXh0LnN0YXJ0c1dpdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiI19fZGFya3JlYWRlcl9fYWRvcHRlZE92ZXJyaWRlXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRPdmVycmlkZUNhY2hlLmFkZChzaGVldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZUFycmF5c0VxdWFsID0gKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeSgoeCwgaSkgPT4geCA9PT0gYltpXSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG9uQWRvcHRlZFNoZWV0c0NoYW5nZSA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2ID0gYWRvcHRlZFNoZWV0c1NuYXBzaG90cy5nZXQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyID0gKG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzIHx8IFtdKS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKHMpID0+ICFpc0RSQWRvcHRlZFNoZWV0T3ZlcnJpZGUocylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRzU25hcHNob3RzLnNldChub2RlLCBjdXJyKTtcclxuICAgICAgICAgICAgICAgIGlmICghcHJldiB8fCAhYXJlQXJyYXlzRXF1YWwocHJldiwgY3VycikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyLmZvckVhY2goKHNoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWRvcHRlZFNoZWV0T3duZXJzLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRTaGVldE93bmVycy5zZXQoc2hlZXQsIG5ldyBTZXQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRvcHRlZFNoZWV0T3duZXJzLmdldChzaGVldCkuYWRkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2Ygc2hlZXQuY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gcnVsZS5zdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWNsYXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkb3B0ZWREZWNsYXJhdGlvblNoZWV0cy5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGVldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoYWRvcHRlZFNoZWV0c0NoYW5nZUV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgcHJveHlBZG9wdGVkU2hlZXRzQXJyYXkgPSAobm9kZSwgc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRvcHRlZFNoZWV0c1Byb3h5U291cmNlcy5oYXMoc291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRvcHRlZFNoZWV0c1NvdXJjZVByb3hpZXMuaGFzKHNvdXJjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRvcHRlZFNoZWV0c1NvdXJjZVByb3hpZXMuZ2V0KHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShzb3VyY2UsIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJsZW5ndGhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZG9wdGVkU2hlZXRzQ2hhbmdlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYWRvcHRlZFNoZWV0c1NvdXJjZVByb3hpZXMuc2V0KHNvdXJjZSwgcHJveHkpO1xyXG4gICAgICAgICAgICAgICAgYWRvcHRlZFNoZWV0c1Byb3h5U291cmNlcy5zZXQocHJveHksIHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJveHk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFtEb2N1bWVudCwgU2hhZG93Um9vdF0uZm9yRWFjaCgoY3RvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVQcm9wZXJ0eShjdG9yLCBcImFkb3B0ZWRTdHlsZVNoZWV0c1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBuYXRpdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm94eUFkb3B0ZWRTaGVldHNBcnJheSh0aGlzLCBzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldDogKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkb3B0ZWRTaGVldHNQcm94eVNvdXJjZXMuaGFzKHNvdXJjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBhZG9wdGVkU2hlZXRzUHJveHlTb3VyY2VzLmdldChzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRvcHRlZFNoZWV0c0NoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBhZG9wdGVkRGVjbGFyYXRpb25DaGFuZ2VFdmVudCA9IG5ldyBDdXN0b21FdmVudChcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVEZWNsYXJhdGlvbkNoYW5nZVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFtcInNldFByb3BlcnR5XCIsIFwicmVtb3ZlUHJvcGVydHlcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZShDU1NTdHlsZURlY2xhcmF0aW9uLCBrZXksIChuYXRpdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuYXRpdmUuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gYWRvcHRlZERlY2xhcmF0aW9uU2hlZXRzLmdldCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lcnMgPSBhZG9wdGVkU2hlZXRPd25lcnMuZ2V0KHNoZWV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvd25lcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcnMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZG9wdGVkRGVjbGFyYXRpb25DaGFuZ2VFdmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgbGV0IGRvY3VtZW50SXNWaXNpYmxlXyA9ICFkb2N1bWVudC5oaWRkZW47XHJcbiAgICBjb25zdCBsaXN0ZW5lck9wdGlvbnMgPSB7XHJcbiAgICAgICAgY2FwdHVyZTogdHJ1ZSxcclxuICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JEb2N1bWVudFZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcInBhZ2VzaG93XCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImZvY3VzXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyLFxyXG4gICAgICAgICAgICBsaXN0ZW5lck9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eWNoYW5nZVwiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJwYWdlc2hvd1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJmb2N1c1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldERvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYWxyZWFkeVdhdGNoaW5nID0gQm9vbGVhbihkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVEb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50SXNWaXNpYmxlXyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghYWxyZWFkeVdhdGNoaW5nKSB7XHJcbiAgICAgICAgICAgIHdhdGNoRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZG9jdW1lbnRJc1Zpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50SXNWaXNpYmxlXztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBJTlNUQU5DRV9JRCA9IGdlbmVyYXRlVUlEKCk7XHJcbiAgICBjb25zdCBzdHlsZU1hbmFnZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgYWRvcHRlZFN0eWxlTWFuYWdlcnMgPSBbXTtcclxuICAgIGNvbnN0IGFkb3B0ZWRTdHlsZUZhbGxiYWNrcyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGFkb3B0ZWRTdHlsZU5vZGVJZHMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgY29uc3QgYWRvcHRlZFN0eWxlQ2hhbmdlVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGxldCB0aGVtZSA9IG51bGw7XHJcbiAgICBsZXQgZml4ZXMgPSBudWxsO1xyXG4gICAgbGV0IGlzSUZyYW1lJDEgPSBudWxsO1xyXG4gICAgbGV0IGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzID0gW107XHJcbiAgICBsZXQgaWdub3JlZElubGluZVNlbGVjdG9ycyA9IFtdO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVTdHlsZShjbGFzc05hbWUsIHJvb3QgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50KSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQubWVkaWEgPSBcInNjcmVlblwiO1xyXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZVNjcmlwdChjbGFzc05hbWUsIHJvb3QgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50KSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vZGVQb3NpdGlvbldhdGNoZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKG5vZGUsIGFsaWFzKSB7XHJcbiAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuaGFzKGFsaWFzKSAmJlxyXG4gICAgICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5nZXQoYWxpYXMpLnN0b3AoKTtcclxuICAgICAgICBub2RlUG9zaXRpb25XYXRjaGVycy5zZXQoYWxpYXMsIHdhdGNoRm9yTm9kZVBvc2l0aW9uKG5vZGUsIFwiaGVhZFwiKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wU3R5bGVQb3NpdGlvbldhdGNoZXJzKCkge1xyXG4gICAgICAgIGZvckVhY2gobm9kZVBvc2l0aW9uV2F0Y2hlcnMudmFsdWVzKCksICh3YXRjaGVyKSA9PiB3YXRjaGVyLnN0b3AoKSk7XHJcbiAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0YXRpY1N0eWxlT3ZlcnJpZGVzKCkge1xyXG4gICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFxyXG4gICAgICAgICAgICBcImRhcmtyZWFkZXItLWZhbGxiYWNrXCIsXHJcbiAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBmYWxsYmFja1N0eWxlLnRleHRDb250ZW50ID0gZ2V0TW9kaWZpZWRGYWxsYmFja1N0eWxlKHRoZW1lLCB7XHJcbiAgICAgICAgICAgIHN0cmljdDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGZhbGxiYWNrU3R5bGUsIGRvY3VtZW50LmhlYWQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGZhbGxiYWNrU3R5bGUsIFwiZmFsbGJhY2tcIik7XHJcbiAgICAgICAgY29uc3QgdXNlckFnZW50U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tdXNlci1hZ2VudFwiKTtcclxuICAgICAgICB1c2VyQWdlbnRTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkVXNlckFnZW50U3R5bGUoXHJcbiAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICBpc0lGcmFtZSQxLFxyXG4gICAgICAgICAgICB0aGVtZS5zdHlsZVN5c3RlbUNvbnRyb2xzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh1c2VyQWdlbnRTdHlsZSwgZmFsbGJhY2tTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKHVzZXJBZ2VudFN0eWxlLCBcInVzZXItYWdlbnRcIik7XHJcbiAgICAgICAgY29uc3QgdGV4dFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXRleHRcIik7XHJcbiAgICAgICAgaWYgKHRoZW1lLnVzZUZvbnQgfHwgdGhlbWUudGV4dFN0cm9rZSA+IDApIHtcclxuICAgICAgICAgICAgdGV4dFN0eWxlLnRleHRDb250ZW50ID0gY3JlYXRlVGV4dFN0eWxlKHRoZW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0U3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh0ZXh0U3R5bGUsIGZhbGxiYWNrU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcih0ZXh0U3R5bGUsIFwidGV4dFwiKTtcclxuICAgICAgICBjb25zdCBpbnZlcnRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbnZlcnRcIik7XHJcbiAgICAgICAgaWYgKGZpeGVzICYmIEFycmF5LmlzQXJyYXkoZml4ZXMuaW52ZXJ0KSAmJiBmaXhlcy5pbnZlcnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFtcclxuICAgICAgICAgICAgICAgIGAke2ZpeGVzLmludmVydC5qb2luKFwiLCBcIil9IHtgLFxyXG4gICAgICAgICAgICAgICAgYCAgICBmaWx0ZXI6ICR7Z2V0Q1NTRmlsdGVyVmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5tb2RlID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLmNvbnRyYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYW1wKHRoZW1lLmNvbnRyYXN0IC0gMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgIH0pfSAhaW1wb3J0YW50O2AsXHJcbiAgICAgICAgICAgICAgICBcIn1cIlxyXG4gICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShpbnZlcnRTdHlsZSwgdGV4dFN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIoaW52ZXJ0U3R5bGUsIFwiaW52ZXJ0XCIpO1xyXG4gICAgICAgIGNvbnN0IGlubGluZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWlubGluZVwiKTtcclxuICAgICAgICBpbmxpbmVTdHlsZS50ZXh0Q29udGVudCA9IGdldElubGluZU92ZXJyaWRlU3R5bGUoKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShpbmxpbmVTdHlsZSwgaW52ZXJ0U3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihpbmxpbmVTdHlsZSwgXCJpbmxpbmVcIik7XHJcbiAgICAgICAgY29uc3Qgb3ZlcnJpZGVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1vdmVycmlkZVwiKTtcclxuICAgICAgICBvdmVycmlkZVN0eWxlLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgZml4ZXMgJiYgZml4ZXMuY3NzID8gcmVwbGFjZUNTU1RlbXBsYXRlcyhmaXhlcy5jc3MpIDogXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG92ZXJyaWRlU3R5bGUpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihvdmVycmlkZVN0eWxlLCBcIm92ZXJyaWRlXCIpO1xyXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tdmFyaWFibGVzXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkNvbG9ycyA9IGdldFNlbGVjdGlvbkNvbG9yKHRoZW1lKTtcclxuICAgICAgICBjb25zdCBuZXV0cmFsQmFja2dyb3VuZENvbG9yID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICBwYXJzZUNvbG9yV2l0aENhY2hlKFwiI2ZmZmZmZlwiKSxcclxuICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG5ldXRyYWxUZXh0Q29sb3IgPSBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgIHBhcnNlQ29sb3JXaXRoQ2FjaGUoXCIjMDAwMDAwXCIpLFxyXG4gICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyaWFibGVTdHlsZS50ZXh0Q29udGVudCA9IFtcclxuICAgICAgICAgICAgYDpyb290IHtgLFxyXG4gICAgICAgICAgICBgICAgLS1kYXJrcmVhZGVyLW5ldXRyYWwtYmFja2dyb3VuZDogJHtuZXV0cmFsQmFja2dyb3VuZENvbG9yfTtgLFxyXG4gICAgICAgICAgICBgICAgLS1kYXJrcmVhZGVyLW5ldXRyYWwtdGV4dDogJHtuZXV0cmFsVGV4dENvbG9yfTtgLFxyXG4gICAgICAgICAgICBgICAgLS1kYXJrcmVhZGVyLXNlbGVjdGlvbi1iYWNrZ3JvdW5kOiAke3NlbGVjdGlvbkNvbG9ycy5iYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb259O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItc2VsZWN0aW9uLXRleHQ6ICR7c2VsZWN0aW9uQ29sb3JzLmZvcmVncm91bmRDb2xvclNlbGVjdGlvbn07YCxcclxuICAgICAgICAgICAgYH1gXHJcbiAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHZhcmlhYmxlU3R5bGUsIGlubGluZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodmFyaWFibGVTdHlsZSwgXCJ2YXJpYWJsZXNcIik7XHJcbiAgICAgICAgY29uc3Qgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1yb290LXZhcnNcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUocm9vdFZhcnNTdHlsZSwgdmFyaWFibGVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgY29uc3QgZW5hYmxlU3R5bGVTaGVldHNQcm94eSA9ICEoXHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmRpc2FibGVTdHlsZVNoZWV0c1Byb3h5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBlbmFibGVDdXN0b21FbGVtZW50UmVnaXN0cnlQcm94eSA9ICEoXHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmRpc2FibGVDdXN0b21FbGVtZW50UmVnaXN0cnlQcm94eVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2NsZWFuVXBcIikpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgcHJveHlTY3JpcHQgPSBjcmVhdGVPclVwZGF0ZVNjcmlwdChcImRhcmtyZWFkZXItLXByb3h5XCIpO1xyXG4gICAgICAgICAgICBwcm94eVNjcmlwdC5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICBgKCR7aW5qZWN0UHJveHl9KSgke2VuYWJsZVN0eWxlU2hlZXRzUHJveHl9LCAke2VuYWJsZUN1c3RvbUVsZW1lbnRSZWdpc3RyeVByb3h5fSlgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHByb3h5U2NyaXB0LCByb290VmFyc1N0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgcHJveHlTY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXNJbm5lcihyb290KSB7XHJcbiAgICAgICAgY29uc3QgaW5saW5lU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW5saW5lXCIsIHJvb3QpO1xyXG4gICAgICAgIGlubGluZVN0eWxlLnRleHRDb250ZW50ID0gZ2V0SW5saW5lT3ZlcnJpZGVTdHlsZSgpO1xyXG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKGlubGluZVN0eWxlLCByb290LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJyaWRlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tb3ZlcnJpZGVcIiwgcm9vdCk7XHJcbiAgICAgICAgb3ZlcnJpZGVTdHlsZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmNzcyA/IHJlcGxhY2VDU1NUZW1wbGF0ZXMoZml4ZXMuY3NzKSA6IFwiXCI7XHJcbiAgICAgICAgcm9vdC5pbnNlcnRCZWZvcmUob3ZlcnJpZGVTdHlsZSwgaW5saW5lU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIGNvbnN0IGludmVydFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWludmVydFwiLCByb290KTtcclxuICAgICAgICBpZiAoZml4ZXMgJiYgQXJyYXkuaXNBcnJheShmaXhlcy5pbnZlcnQpICYmIGZpeGVzLmludmVydC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICAgICAgYCR7Zml4ZXMuaW52ZXJ0LmpvaW4oXCIsIFwiKX0ge2AsXHJcbiAgICAgICAgICAgICAgICBgICAgIGZpbHRlcjogJHtnZXRDU1NGaWx0ZXJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJhc3Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLm1vZGUgPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhlbWUuY29udHJhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhbXAodGhlbWUuY29udHJhc3QgLSAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgfSl9ICFpbXBvcnRhbnQ7YCxcclxuICAgICAgICAgICAgICAgIFwifVwiXHJcbiAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKGludmVydFN0eWxlLCBvdmVycmlkZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuYWRkKHJvb3QpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVsYXllZENyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHJvb3QpIHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB7dHlwZSwgcmVtb3ZlZE5vZGVzfSBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB7bm9kZU5hbWUsIGNsYXNzTmFtZX0gb2YgcmVtb3ZlZE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lID09PSBcIlNUWUxFXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXIgZGFya3JlYWRlci0taW5saW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyIGRhcmtyZWFkZXItLW92ZXJyaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyIGRhcmtyZWFkZXItLWludmVydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKGNsYXNzTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlc0lubmVyKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KSB7XHJcbiAgICAgICAgY29uc3QgZGVsYXllZCA9IHJvb3QuZmlyc3RDaGlsZCA9PT0gbnVsbDtcclxuICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlc0lubmVyKHJvb3QpO1xyXG4gICAgICAgIGlmIChkZWxheWVkKSB7XHJcbiAgICAgICAgICAgIGRlbGF5ZWRDcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlQ1NTVGVtcGxhdGVzKCRjc3NUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuICRjc3NUZXh0LnJlcGxhY2UoL1xcJHsoLis/KX0vZywgKF8sICRjb2xvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoJGNvbG9yKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaWdodG5lc3MgPSBnZXRTUkdCTGlnaHRuZXNzKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpZ2h0bmVzcyA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoY29sb3IsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IoY29sb3IsIHRoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJGNvbG9yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYW5GYWxsYmFja1N0eWxlKCkge1xyXG4gICAgICAgIGNvbnN0IGZhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiKTtcclxuICAgICAgICBpZiAoZmFsbGJhY2spIHtcclxuICAgICAgICAgICAgZmFsbGJhY2sudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUR5bmFtaWNTdHlsZU92ZXJyaWRlcygpIHtcclxuICAgICAgICBjYW5jZWxSZW5kZXJpbmcoKTtcclxuICAgICAgICBjb25zdCBhbGxTdHlsZXMgPSBnZXRNYW5hZ2VhYmxlU3R5bGVzKGRvY3VtZW50KTtcclxuICAgICAgICBjb25zdCBuZXdNYW5hZ2VycyA9IGFsbFN0eWxlc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChzdHlsZSkgPT4gIXN0eWxlTWFuYWdlcnMuaGFzKHN0eWxlKSlcclxuICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IGNyZWF0ZU1hbmFnZXIoc3R5bGUpKTtcclxuICAgICAgICBuZXdNYW5hZ2Vyc1xyXG4gICAgICAgICAgICAubWFwKChtYW5hZ2VyKSA9PiBtYW5hZ2VyLmRldGFpbHMoe3NlY29uZFJvdW5kOiBmYWxzZX0pKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChkZXRhaWwpID0+IGRldGFpbCAmJiBkZXRhaWwucnVsZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgLmZvckVhY2goKGRldGFpbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWwucnVsZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZS5zZXRPblJvb3RWYXJpYWJsZUNoYW5nZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3RWYXJzU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tcm9vdC12YXJzXCIpO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5wdXRSb290VmFycyhyb290VmFyc1N0eWxlLCB0aGVtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1yb290LXZhcnNcIik7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUucHV0Um9vdFZhcnMocm9vdFZhcnNTdHlsZSwgdGhlbWUpO1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT5cclxuICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGxvYWRpbmdTdHlsZXMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjbGVhbkZhbGxiYWNrU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gbWFuYWdlci53YXRjaCgpKTtcclxuICAgICAgICBjb25zdCBpbmxpbmVTdHlsZUVsZW1lbnRzID0gdG9BcnJheShcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChJTkxJTkVfU1RZTEVfU0VMRUNUT1IpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAoaG9zdCkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhob3N0LnNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGhvc3Quc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgSU5MSU5FX1NUWUxFX1NFTEVDVE9SXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwdXNoKGlubGluZVN0eWxlRWxlbWVudHMsIGVsZW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlubGluZVN0eWxlRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+XHJcbiAgICAgICAgICAgIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgICAgICAgICBlbCxcclxuICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGhhbmRsZUFkb3B0ZWRTdHlsZVNoZWV0cyhkb2N1bWVudCk7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgaWYgKGlzRmlyZWZveCkge1xyXG4gICAgICAgICAgICBjb25zdCBNQVRDSF9WQVIgPSBTeW1ib2woKTtcclxuICAgICAgICAgICAgY29uc3Qgb25BZG9wdGVkQ1NTQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtub2RlLCBpZCwgY3NzUnVsZXMsIGVudHJpZXN9ID0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbnRyaWVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NSdWxlcyA9IGVbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoY3NzUnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoY3NzUnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZU9uY2UoTUFUQ0hfVkFSLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0dXBsZXMgPSBBcnJheS5pc0FycmF5KGVudHJpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBlbnRyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgOiBub2RlICYmIGNzc1J1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFtbbm9kZSwgaWQsIGNzc1J1bGVzXV1cclxuICAgICAgICAgICAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgICAgICAgICB0dXBsZXMuZm9yRWFjaCgoW25vZGUsIGlkLCBjc3NSdWxlc10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU3R5bGVOb2RlSWRzLnNldChub2RlLCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2sgPSBnZXRBZG9wdGVkU3R5bGVTaGVldEZhbGxiYWNrKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrLnVwZGF0ZUNTUyhjc3NSdWxlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldHNDaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgIG9uQWRvcHRlZENTU0NoYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbGVhbmVycy5wdXNoKCgpID0+XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldHNDaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBvbkFkb3B0ZWRDU1NDaGFuZ2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fc3RhcnRBZG9wdGVkU3R5bGVTaGVldHNXYXRjaGVyXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGxvYWRpbmdTdHlsZXNDb3VudGVyID0gMDtcclxuICAgIGNvbnN0IGxvYWRpbmdTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNYW5hZ2VyKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBsb2FkaW5nU3R5bGVJZCA9ICsrbG9hZGluZ1N0eWxlc0NvdW50ZXI7XHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZGluZ1N0YXJ0KCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzRE9NUmVhZHkoKSB8fCAhZG9jdW1lbnRJc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1N0eWxlcy5hZGQobG9hZGluZ1N0eWxlSWQpO1xyXG4gICAgICAgICAgICAgICAgbG9nSW5mbyhcclxuICAgICAgICAgICAgICAgICAgICBgQ3VycmVudCBhbW91bnQgb2Ygc3R5bGVzIGxvYWRpbmc6ICR7bG9hZGluZ1N0eWxlcy5zaXplfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICBcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmYWxsYmFja1N0eWxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpY3Q6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZGluZ0VuZCgpIHtcclxuICAgICAgICAgICAgbG9hZGluZ1N0eWxlcy5kZWxldGUobG9hZGluZ1N0eWxlSWQpO1xyXG4gICAgICAgICAgICBsb2dJbmZvKFxyXG4gICAgICAgICAgICAgICAgYFJlbW92ZWQgbG9hZGluZ1N0eWxlICR7bG9hZGluZ1N0eWxlSWR9LCBub3cgYXdhaXRpbmc6ICR7bG9hZGluZ1N0eWxlcy5zaXplfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGxvYWRpbmdTdHlsZXMuc2l6ZSA9PT0gMCAmJiBpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IG1hbmFnZXIuZGV0YWlscyh7c2Vjb25kUm91bmQ6IHRydWV9KTtcclxuICAgICAgICAgICAgaWYgKCFkZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhkZXRhaWxzLnJ1bGVzKTtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgIG1hbmFnZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSBtYW5hZ2VTdHlsZShlbGVtZW50LCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZSxcclxuICAgICAgICAgICAgbG9hZGluZ1N0YXJ0LFxyXG4gICAgICAgICAgICBsb2FkaW5nRW5kXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5zZXQoZWxlbWVudCwgbWFuYWdlcik7XHJcbiAgICAgICAgcmV0dXJuIG1hbmFnZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVNYW5hZ2VyKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBtYW5hZ2VyID0gc3R5bGVNYW5hZ2Vycy5nZXQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKG1hbmFnZXIpIHtcclxuICAgICAgICAgICAgbWFuYWdlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0eWxlTWFuYWdlcnMuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHRocm90dGxlZFJlbmRlckFsbFN0eWxlcyA9IHRocm90dGxlKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT5cclxuICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT5cclxuICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2FuY2VsUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRocm90dGxlZFJlbmRlckFsbFN0eWxlcy5jYW5jZWwoKTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBvbkRPTVJlYWR5KCkge1xyXG4gICAgICAgIGlmIChsb2FkaW5nU3R5bGVzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgY2xlYW5GYWxsYmFja1N0eWxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBydW5EeW5hbWljU3R5bGUoKSB7XHJcbiAgICAgICAgY3JlYXRlRHluYW1pY1N0eWxlT3ZlcnJpZGVzKCk7XHJcbiAgICAgICAgd2F0Y2hGb3JVcGRhdGVzKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUaGVtZUFuZFdhdGNoRm9yVXBkYXRlcygpIHtcclxuICAgICAgICBjcmVhdGVTdGF0aWNTdHlsZU92ZXJyaWRlcygpO1xyXG4gICAgICAgIGlmICghZG9jdW1lbnRJc1Zpc2libGUoKSAmJiAhdGhlbWUuaW1tZWRpYXRlTW9kaWZ5KSB7XHJcbiAgICAgICAgICAgIHNldERvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyKHJ1bkR5bmFtaWNTdHlsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcnVuRHluYW1pY1N0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoYW5nZU1ldGFUaGVtZUNvbG9yV2hlbkF2YWlsYWJsZSh0aGVtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVBZG9wdGVkU3R5bGVTaGVldHMobm9kZSkge1xyXG4gICAgICAgIGlmIChpc0ZpcmVmb3gpIHtcclxuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2sgPSBnZXRBZG9wdGVkU3R5bGVTaGVldEZhbGxiYWNrKG5vZGUpO1xyXG4gICAgICAgICAgICBmYWxsYmFjay5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FuSGF2ZUFkb3B0ZWRTdHlsZVNoZWV0cyhub2RlKSkge1xyXG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKHMuY3NzUnVsZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TWFuZ2VyID0gY3JlYXRlQWRvcHRlZFN0eWxlU2hlZXRPdmVycmlkZShub2RlKTtcclxuICAgICAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMucHVzaChuZXdNYW5nZXIpO1xyXG4gICAgICAgICAgICBuZXdNYW5nZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgICAgIG5ld01hbmdlci53YXRjaCgoc2hlZXRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaGVldHMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcocy5jc3NSdWxlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRBZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbihub2RlKSB7XHJcbiAgICAgICAgaWYgKGFkb3B0ZWRTdHlsZUNoYW5nZVRva2Vucy5oYXMobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFkb3B0ZWRTdHlsZUNoYW5nZVRva2Vucy5nZXQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gU3ltYm9sKCk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlQ2hhbmdlVG9rZW5zLnNldChub2RlLCB0b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0QWRvcHRlZFN0eWxlU2hlZXRGYWxsYmFjayhub2RlKSB7XHJcbiAgICAgICAgbGV0IGZhbGxiYWNrID0gYWRvcHRlZFN0eWxlRmFsbGJhY2tzLmdldChub2RlKTtcclxuICAgICAgICBpZiAoIWZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrID0gY3JlYXRlQWRvcHRlZFN0eWxlU2hlZXRGYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGdldEFkb3B0ZWRTdHlsZUNoYW5nZVRva2VuKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lT25jZSh0b2tlbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYWRvcHRlZFN0eWxlTm9kZUlkcy5nZXQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZHMgPSBmYWxsYmFjaz8uY29tbWFuZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlkIHx8ICFjb21tYW5kcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7aWQsIGNvbW1hbmRzfTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRDb21tYW5kc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RldGFpbDogSlNPTi5zdHJpbmdpZnkoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZG9wdGVkU3R5bGVGYWxsYmFja3Muc2V0KG5vZGUsIGZhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IG1hbmFnZWRTdHlsZXMgPSBBcnJheS5mcm9tKHN0eWxlTWFuYWdlcnMua2V5cygpKTtcclxuICAgICAgICB3YXRjaEZvclN0eWxlQ2hhbmdlcyhcclxuICAgICAgICAgICAgbWFuYWdlZFN0eWxlcyxcclxuICAgICAgICAgICAgKHtjcmVhdGVkLCB1cGRhdGVkLCByZW1vdmVkLCBtb3ZlZH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlc1RvUmVtb3ZlID0gcmVtb3ZlZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlc1RvTWFuYWdlID0gY3JlYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb25jYXQodXBkYXRlZClcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KG1vdmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHN0eWxlKSA9PiAhc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlc1RvUmVzdG9yZSA9IG1vdmVkLmZpbHRlcigoc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVNYW5hZ2Vycy5oYXMoc3R5bGUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzVG9SZW1vdmUuZm9yRWFjaCgoc3R5bGUpID0+IHJlbW92ZU1hbmFnZXIoc3R5bGUpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01hbmFnZXJzID0gc3R5bGVzVG9NYW5hZ2UubWFwKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVNYW5hZ2VyKHN0eWxlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIG5ld01hbmFnZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgobWFuYWdlcikgPT4gbWFuYWdlci5kZXRhaWxzKHtzZWNvbmRSb3VuZDogZmFsc2V9KSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChkZXRhaWwpID0+IGRldGFpbCAmJiBkZXRhaWwucnVsZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZGV0YWlsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoZGV0YWlsLnJ1bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbmV3TWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gbWFuYWdlci53YXRjaCgpKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlc1RvUmVzdG9yZS5mb3JFYWNoKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZU1hbmFnZXJzLmdldChzdHlsZSkucmVzdG9yZSgpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoc2hhZG93Um9vdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBZG9wdGVkU3R5bGVTaGVldHMoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgICAgICAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZUF0dHIuaW5jbHVkZXMoXCItLVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vdFZhcnNTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtyZWFkZXItLXJvb3QtdmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKHJvb3RWYXJzU3R5bGUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChyb290KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlubGluZVN0eWxlRWxlbWVudHMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgSU5MSU5FX1NUWUxFX1NFTEVDVE9SXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlubGluZVN0eWxlRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvckVhY2goaW5saW5lU3R5bGVFbGVtZW50cywgKGVsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYWRkRE9NUmVhZHlMaXN0ZW5lcihvbkRPTVJlYWR5KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgc3R5bGVNYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiBtYW5hZ2VyLnBhdXNlKCkpO1xyXG4gICAgICAgIHN0b3BTdHlsZVBvc2l0aW9uV2F0Y2hlcnMoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JTdHlsZUNoYW5nZXMoKTtcclxuICAgICAgICBzdG9wV2F0Y2hpbmdGb3JJbmxpbmVTdHlsZXMoKTtcclxuICAgICAgICByZW1vdmVET01SZWFkeUxpc3RlbmVyKG9uRE9NUmVhZHkpO1xyXG4gICAgICAgIGNsZWFuUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgbWV0YU9ic2VydmVyO1xyXG4gICAgZnVuY3Rpb24gYWRkTWV0YUxpc3RlbmVyKCkge1xyXG4gICAgICAgIG1ldGFPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXItbG9ja1wiXScpKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRhT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRHluYW1pY1RoZW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtZXRhT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5oZWFkLCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEYXJrUmVhZGVySW5zdGFuY2VNYXJrZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbWV0YUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcclxuICAgICAgICBtZXRhRWxlbWVudC5uYW1lID0gXCJkYXJrcmVhZGVyXCI7XHJcbiAgICAgICAgbWV0YUVsZW1lbnQuY29udGVudCA9IElOU1RBTkNFX0lEO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNEUkxvY2tlZCgpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlci1sb2NrXCJdJykgIT0gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzQW5vdGhlckRhcmtSZWFkZXJJbnN0YW5jZUFjdGl2ZSgpIHtcclxuICAgICAgICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiZGFya3JlYWRlclwiXScpO1xyXG4gICAgICAgIGlmIChtZXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRhLmNvbnRlbnQgIT09IElOU1RBTkNFX0lEKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZURhcmtSZWFkZXJJbnN0YW5jZU1hcmtlcigpO1xyXG4gICAgICAgIGFkZE1ldGFMaXN0ZW5lcigpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBpbnRlcmNlcHRvckF0dGVtcHRzID0gMjtcclxuICAgIGZ1bmN0aW9uIGludGVyY2VwdE9sZFNjcmlwdCh7c3VjY2VzcywgZmFpbHVyZX0pIHtcclxuICAgICAgICBpZiAoLS1pbnRlcmNlcHRvckF0dGVtcHRzIDw9IDApIHtcclxuICAgICAgICAgICAgZmFpbHVyZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9sZE1ldGEgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXJcIl0nKTtcclxuICAgICAgICBpZiAoIW9sZE1ldGEgfHwgb2xkTWV0YS5jb250ZW50ID09PSBJTlNUQU5DRV9JRCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcclxuICAgICAgICBsb2NrLm5hbWUgPSBcImRhcmtyZWFkZXItbG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGxvY2spO1xyXG4gICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcclxuICAgICAgICAgICAgbG9jay5yZW1vdmUoKTtcclxuICAgICAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZUNvbmZsaWN0aW5nUGx1Z2lucygpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtd3AtZGFyay1tb2RlLXByZXNldFwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlV1BEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19kaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3cC1kYXJrLW1vZGUtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS13cC1kYXJrLW1vZGUtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRpc2FibGVXUERhcmtNb2RlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid3AtZGFyay1tb2RlLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS13cC1kYXJrLW1vZGUtYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlV1BEYXJrTW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCIsIFwiZGF0YS13cC1kYXJrLW1vZGUtYWN0aXZlXCJdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlRHluYW1pY1RoZW1lSW50ZXJuYWwoXHJcbiAgICAgICAgdGhlbWVDb25maWcsXHJcbiAgICAgICAgZHluYW1pY1RoZW1lRml4ZXMsXHJcbiAgICAgICAgaWZyYW1lXHJcbiAgICApIHtcclxuICAgICAgICB0aGVtZSA9IHRoZW1lQ29uZmlnO1xyXG4gICAgICAgIGZpeGVzID0gZHluYW1pY1RoZW1lRml4ZXM7XHJcbiAgICAgICAgaWYgKGZpeGVzKSB7XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzID0gQXJyYXkuaXNBcnJheShcclxuICAgICAgICAgICAgICAgIGZpeGVzLmlnbm9yZUltYWdlQW5hbHlzaXNcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyBmaXhlcy5pZ25vcmVJbWFnZUFuYWx5c2lzXHJcbiAgICAgICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzID0gQXJyYXkuaXNBcnJheShmaXhlcy5pZ25vcmVJbmxpbmVTdHlsZSlcclxuICAgICAgICAgICAgICAgID8gZml4ZXMuaWdub3JlSW5saW5lU3R5bGVcclxuICAgICAgICAgICAgICAgIDogW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMgPSBbXTtcclxuICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhlbWUuaW1tZWRpYXRlTW9kaWZ5KSB7XHJcbiAgICAgICAgICAgIHNldElzRE9NUmVhZHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0lGcmFtZSQxID0gaWZyYW1lO1xyXG4gICAgICAgIGNvbnN0IHJlYWR5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUNvbmZsaWN0aW5nUGx1Z2lucygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtZGFya3JlYWRlci1tb2RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkeW5hbWljXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1kYXJrcmVhZGVyLXNjaGVtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLm1vZGUgPyBcImRhcmtcIiA6IFwiZGltbWVkXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUaGVtZUFuZFdhdGNoRm9yVXBkYXRlcygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBmYWlsdXJlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRHluYW1pY1RoZW1lKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChpc0RSTG9ja2VkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbm90aGVyRGFya1JlYWRlckluc3RhbmNlQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIGludGVyY2VwdE9sZFNjcmlwdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmhlYWQpIHtcclxuICAgICAgICAgICAgcmVhZHkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWlzRmlyZWZveCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyLS1mYWxsYmFja1wiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGZhbGxiYWNrU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZSh0aGVtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmljdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaGVhZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmhlYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoZWFkT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb3h5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19jbGVhblVwXCIpKTtcclxuICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1wcm94eVwiKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhbmVycyA9IFtdO1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRHluYW1pY1RoZW1lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtZGFya3JlYWRlci1tb2RlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1kYXJrcmVhZGVyLXNjaGVtZWApO1xyXG4gICAgICAgIGNsZWFuRHluYW1pY1RoZW1lQ2FjaGUoKTtcclxuICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIikpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XHJcbiAgICAgICAgICAgIHJlc3RvcmVNZXRhVGhlbWVDb2xvcigpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS11c2VyLWFnZW50XCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tdGV4dFwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWludmVydFwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWlubGluZVwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLW92ZXJyaWRlXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tdmFyaWFibGVzXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tcm9vdC12YXJzXCIpKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXJcIl0nKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZVByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoYWRvd1Jvb3RzV2l0aE92ZXJyaWRlcy5mb3JFYWNoKChyb290KSA9PiB7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUocm9vdC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWlubGluZVwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUocm9vdC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLW92ZXJyaWRlXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuY2xlYXIoKTtcclxuICAgICAgICBmb3JFYWNoKHN0eWxlTWFuYWdlcnMua2V5cygpLCAoZWwpID0+IHJlbW92ZU1hbmFnZXIoZWwpKTtcclxuICAgICAgICBsb2FkaW5nU3R5bGVzLmNsZWFyKCk7XHJcbiAgICAgICAgY2xlYW5Mb2FkaW5nTGlua3MoKTtcclxuICAgICAgICBmb3JFYWNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya3JlYWRlclwiKSwgcmVtb3ZlTm9kZSk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlTWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gbWFuYWdlci5kZXN0cm95KCkpO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLnNwbGljZSgwKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVGYWxsYmFja3MuZm9yRWFjaCgoZmFsbGJhY2spID0+IGZhbGxiYWNrLmRlc3Ryb3koKSk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlRmFsbGJhY2tzLmNsZWFyKCk7XHJcbiAgICAgICAgbWV0YU9ic2VydmVyICYmIG1ldGFPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgY2xlYW5lcnMuZm9yRWFjaCgoY2xlYW4pID0+IGNsZWFuKCkpO1xyXG4gICAgICAgIGNsZWFuZXJzLnNwbGljZSgwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuRHluYW1pY1RoZW1lQ2FjaGUoKSB7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUuY2xlYXIoKTtcclxuICAgICAgICBwYXJzZWRVUkxDYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIHJlbW92ZURvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyKCk7XHJcbiAgICAgICAgY2FuY2VsUmVuZGVyaW5nKCk7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yVXBkYXRlcygpO1xyXG4gICAgICAgIGNsZWFuTW9kaWZpY2F0aW9uQ2FjaGUoKTtcclxuICAgICAgICBjbGVhckNvbG9yQ2FjaGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUNTUyhjc3NUZXh0KSB7XHJcbiAgICAgICAgY3NzVGV4dCA9IHJlbW92ZUNTU0NvbW1lbnRzKGNzc1RleHQpO1xyXG4gICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnRyaW0oKTtcclxuICAgICAgICBpZiAoIWNzc1RleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBydWxlcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVSYW5nZXMgPSBnZXRUb2tlbkV4Y2x1c2lvblJhbmdlcyhjc3NUZXh0KTtcclxuICAgICAgICBjb25zdCBicmFja2V0UmFuZ2VzID0gZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKFxyXG4gICAgICAgICAgICBjc3NUZXh0LFxyXG4gICAgICAgICAgICBcIntcIixcclxuICAgICAgICAgICAgXCJ9XCIsXHJcbiAgICAgICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBydWxlU3RhcnQgPSAwO1xyXG4gICAgICAgIGJyYWNrZXRSYW5nZXMuZm9yRWFjaCgoYnJhY2tldHMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gY3NzVGV4dC5zdWJzdHJpbmcocnVsZVN0YXJ0LCBicmFja2V0cy5zdGFydCkudHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY3NzVGV4dC5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICBicmFja2V0cy5zdGFydCArIDEsXHJcbiAgICAgICAgICAgICAgICBicmFja2V0cy5lbmQgLSAxXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIkBcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVFbmRJbmRleCA9IGtleS5zZWFyY2goL1tcXHNcXChdLyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVFbmRJbmRleCA8IDAgPyBrZXkgOiBrZXkuc3Vic3RyaW5nKDAsIHR5cGVFbmRJbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVFbmRJbmRleCA8IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBrZXkuc3Vic3RyaW5nKHR5cGVFbmRJbmRleCkudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBwYXJzZUNTUyhjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2gocnVsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yczogcGFyc2VTZWxlY3RvcnMoa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IHBhcnNlRGVjbGFyYXRpb25zKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcnVsZXMucHVzaChydWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBydWxlU3RhcnQgPSBicmFja2V0cy5lbmQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKFxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIG9wZW5Ub2tlbixcclxuICAgICAgICBjbG9zZVRva2VuLFxyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXMgPSBbXVxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2VzID0gW107XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCByYW5nZTtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIChyYW5nZSA9IGdldE9wZW5DbG9zZVJhbmdlKFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgb3BlblRva2VuLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VUb2tlbixcclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmFuZ2VzLnB1c2gocmFuZ2UpO1xyXG4gICAgICAgICAgICBpID0gcmFuZ2UuZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmFuZ2VzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW5FeGNsdXNpb25SYW5nZXMoY3NzVGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHNpbmdsZVF1b3RlR29lc0ZpcnN0ID1cclxuICAgICAgICAgICAgY3NzVGV4dC5pbmRleE9mKFwiJ1wiKSA8IGNzc1RleHQuaW5kZXhPZignXCInKTtcclxuICAgICAgICBjb25zdCBmaXJzdFF1b3RlID0gc2luZ2xlUXVvdGVHb2VzRmlyc3QgPyBcIidcIiA6ICdcIic7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kUXVvdGUgPSBzaW5nbGVRdW90ZUdvZXNGaXJzdCA/ICdcIicgOiBcIidcIjtcclxuICAgICAgICBjb25zdCBleGNsdWRlUmFuZ2VzID0gZ2V0QWxsT3BlbkNsb3NlUmFuZ2VzKFxyXG4gICAgICAgICAgICBjc3NUZXh0LFxyXG4gICAgICAgICAgICBmaXJzdFF1b3RlLFxyXG4gICAgICAgICAgICBmaXJzdFF1b3RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBleGNsdWRlUmFuZ2VzLnB1c2goXHJcbiAgICAgICAgICAgIC4uLmdldEFsbE9wZW5DbG9zZVJhbmdlcyhcclxuICAgICAgICAgICAgICAgIGNzc1RleHQsXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRRdW90ZSxcclxuICAgICAgICAgICAgICAgIHNlY29uZFF1b3RlLFxyXG4gICAgICAgICAgICAgICAgZXhjbHVkZVJhbmdlc1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBleGNsdWRlUmFuZ2VzLnB1c2goXHJcbiAgICAgICAgICAgIC4uLmdldEFsbE9wZW5DbG9zZVJhbmdlcyhjc3NUZXh0LCBcIltcIiwgXCJdXCIsIGV4Y2x1ZGVSYW5nZXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBleGNsdWRlUmFuZ2VzLnB1c2goXHJcbiAgICAgICAgICAgIC4uLmdldEFsbE9wZW5DbG9zZVJhbmdlcyhjc3NUZXh0LCBcIihcIiwgXCIpXCIsIGV4Y2x1ZGVSYW5nZXMpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gZXhjbHVkZVJhbmdlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlU2VsZWN0b3JzKHNlbGVjdG9yVGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVSYW5nZXMgPSBnZXRUb2tlbkV4Y2x1c2lvblJhbmdlcyhzZWxlY3RvclRleHQpO1xyXG4gICAgICAgIHJldHVybiBzcGxpdEV4Y2x1ZGluZyhzZWxlY3RvclRleHQsIFwiLFwiLCBleGNsdWRlUmFuZ2VzKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlRGVjbGFyYXRpb25zKGNzc0RlY2xhcmF0aW9uc1RleHQpIHtcclxuICAgICAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBleGNsdWRlUmFuZ2VzID0gZ2V0VG9rZW5FeGNsdXNpb25SYW5nZXMoY3NzRGVjbGFyYXRpb25zVGV4dCk7XHJcbiAgICAgICAgc3BsaXRFeGNsdWRpbmcoY3NzRGVjbGFyYXRpb25zVGV4dCwgXCI7XCIsIGV4Y2x1ZGVSYW5nZXMpLmZvckVhY2goXHJcbiAgICAgICAgICAgIChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvbkluZGV4ID0gcGFydC5pbmRleE9mKFwiOlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvbkluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydGFudEluZGV4ID0gcGFydC5pbmRleE9mKFwiIWltcG9ydGFudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwYXJ0LnN1YnN0cmluZygwLCBjb2xvbkluZGV4KS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9uSW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudEluZGV4ID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGltcG9ydGFudEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFydC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50SW5kZXggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1BhcnNlZFN0eWxlUnVsZShydWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwic2VsZWN0b3JzXCIgaW4gcnVsZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRDU1MoY3NzVGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlQ1NTKGNzc1RleHQpO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXRQYXJzZWRDU1MocGFyc2VkKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFBhcnNlZENTUyhwYXJzZWQpIHtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IFwiICAgIFwiO1xyXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdFJ1bGUocnVsZSwgaW5kZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChpc1BhcnNlZFN0eWxlUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0U3R5bGVSdWxlKHJ1bGUsIGluZGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRBdFJ1bGUocnVsZSwgaW5kZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRBdFJ1bGUoe3R5cGUsIHF1ZXJ5LCBydWxlc30sIGluZGVudCkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAke2luZGVudH0ke3R5cGV9ICR7cXVlcnl9IHtgKTtcclxuICAgICAgICAgICAgcnVsZXMuZm9yRWFjaCgoY2hpbGQpID0+IGZvcm1hdFJ1bGUoY2hpbGQsIGAke2luZGVudH0ke3RhYn1gKSk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7aW5kZW50fX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0U3R5bGVSdWxlKHtzZWxlY3RvcnMsIGRlY2xhcmF0aW9uc30sIGluZGVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0U2VsZWN0b3JJbmRleCA9IHNlbGVjdG9ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7c2VsZWN0b3J9JHtpIDwgbGFzdFNlbGVjdG9ySW5kZXggPyBcIixcIiA6IFwiIHtcIn1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gc29ydERlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpO1xyXG4gICAgICAgICAgICBzb3J0ZWQuZm9yRWFjaCgoe3Byb3BlcnR5LCB2YWx1ZSwgaW1wb3J0YW50fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0YWJ9JHtwcm9wZXJ0eX06ICR7dmFsdWV9JHtpbXBvcnRhbnQgPyBcIiAhaW1wb3J0YW50XCIgOiBcIlwifTtgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtpbmRlbnR9fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhckVtcHR5UnVsZXMocGFyc2VkKTtcclxuICAgICAgICBwYXJzZWQuZm9yRWFjaCgocnVsZSkgPT4gZm9ybWF0UnVsZShydWxlLCBcIlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzb3J0RGVjbGFyYXRpb25zKGRlY2xhcmF0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHByZWZpeFJlZ2V4ID0gL14tW2Etel0tLztcclxuICAgICAgICByZXR1cm4gWy4uLmRlY2xhcmF0aW9uc10uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhUHJvcCA9IGEucHJvcGVydHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJQcm9wID0gYi5wcm9wZXJ0eTtcclxuICAgICAgICAgICAgY29uc3QgYVByZWZpeCA9IGFQcm9wLm1hdGNoKHByZWZpeFJlZ2V4KT8uWzBdID8/IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGJQcmVmaXggPSBiUHJvcC5tYXRjaChwcmVmaXhSZWdleCk/LlswXSA/PyBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBhTm9ybSA9IGFQcmVmaXggPyBhUHJvcC5yZXBsYWNlKHByZWZpeFJlZ2V4LCBcIlwiKSA6IGFQcm9wO1xyXG4gICAgICAgICAgICBjb25zdCBiTm9ybSA9IGJQcmVmaXggPyBiUHJvcC5yZXBsYWNlKHByZWZpeFJlZ2V4LCBcIlwiKSA6IGJQcm9wO1xyXG4gICAgICAgICAgICBpZiAoYU5vcm0gPT09IGJOb3JtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYVByZWZpeC5sb2NhbGVDb21wYXJlKGJQcmVmaXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhTm9ybS5sb2NhbGVDb21wYXJlKGJOb3JtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyRW1wdHlSdWxlcyhydWxlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBydWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChpc1BhcnNlZFN0eWxlUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUuZGVjbGFyYXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyRW1wdHlSdWxlcyhydWxlLnJ1bGVzKTtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlLnJ1bGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBibG9iUmVnZXggPSAvdXJsXFwoXFxcIihibG9iXFw6Lio/KVxcXCJcXCkvZztcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcGxhY2VCbG9icyh0ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBnZXRNYXRjaGVzKGJsb2JSZWdleCwgdGV4dCwgMSkuZm9yRWFjaCgodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBsb2FkQXNEYXRhVVJMKHVybCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKGJsb2JSZWdleCwgKCkgPT4gYHVybChcIiR7ZGF0YS5zaGlmdCgpfVwiKWApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYmFubmVyID0gYC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fX19fX19cclxuICAgICAgICAgICAgICAgICAgICAgICAvICAgICAgIFxcXFxcclxuICAgICAgICAgICAgICAgICAgICAgIC49PS4gICAgLj09LlxyXG4gICAgICAgICAgICAgICAgICAgICAoKCAgKSk9PSgoICApKVxyXG4gICAgICAgICAgICAgICAgICAgIC8gXCI9PVwiICAgIFwiPT1cIlxcXFxcclxuICAgICAgICAgICAgICAgICAgIC9fX19ffHwgfHwgfHxfX19cXFxcXHJcbiAgICAgICBfX19fX19fXyAgICAgX19fXyAgICBfX19fX19fXyAgX19fICAgIF9fX1xyXG4gICAgICAgfCAgX19fICBcXFxcICAgLyAgICBcXFxcICAgfCAgX19fICBcXFxcIHwgIHwgIC8gIC9cclxuICAgICAgIHwgIHwgIFxcXFwgIFxcXFwgLyAgL1xcXFwgIFxcXFwgIHwgIHwgIFxcXFwgIFxcXFx8ICB8Xy8gIC9cclxuICAgICAgIHwgIHwgICApICAvICAvX19cXFxcICBcXFxcIHwgIHxfXy8gIC98ICBfX18gIFxcXFxcclxuICAgICAgIHwgIHxfXy8gIC8gIF9fX19fXyAgXFxcXHwgIF9fX18gIFxcXFx8ICB8ICBcXFxcICBcXFxcXHJcbl9fX19fX198X19fX19fXy9fXy8gX19fXyBcXFxcX19cXFxcX198X19fXFxcXF9fXFxcXF9ffF9fX1xcXFxfX1xcXFxfX19fXHJcbnwgIF9fXyAgXFxcXCB8ICBfX19fLyAvICAgIFxcXFwgICB8ICBfX18gIFxcXFwgfCAgX19fX3wgIF9fXyAgXFxcXFxyXG58ICB8ICBcXFxcICBcXFxcfCAgfF9fXyAvICAvXFxcXCAgXFxcXCAgfCAgfCAgXFxcXCAgXFxcXHwgIHxfX198ICB8ICBcXFxcICBcXFxcXHJcbnwgIHxfXy8gIC98ICBfX19fLyAgL19fXFxcXCAgXFxcXCB8ICB8ICAgKSAgfCAgX19fX3wgIHxfXy8gIC9cclxufCAgX19fXyAgXFxcXHwgIHxfXy8gIF9fX19fXyAgXFxcXHwgIHxfXy8gIC98ICB8X19ffCAgX19fXyAgXFxcXFxyXG58X198ICAgXFxcXF9fXFxcXF9fX18vX18vICAgICAgXFxcXF9fXFxcXF9fX19fX18vIHxfX19fX198X198ICAgXFxcXF9fXFxcXFxyXG4gICAgICAgICAgICAgICAgaHR0cHM6Ly9kYXJrcmVhZGVyLm9yZ1xyXG4qL1xyXG5cclxuLyohIERhcmsgcmVhZGVyIGdlbmVyYXRlZCBDU1MgfCBMaWNlbnNlZCB1bmRlciBNSVQgaHR0cHM6Ly9naXRodWIuY29tL2RhcmtyZWFkZXIvZGFya3JlYWRlci9ibG9iL21haW4vTElDRU5TRSAqL1xyXG5gO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gY29sbGVjdENTUygpIHtcclxuICAgICAgICBjb25zdCBjc3MgPSBbYmFubmVyXTtcclxuICAgICAgICBmdW5jdGlvbiBhZGRTdGF0aWNDU1Moc2VsZWN0b3IsIGNvbW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGljU3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRpY1N0eWxlICYmIHN0YXRpY1N0eWxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjc3MucHVzaChgLyogJHtjb21tZW50fSAqL2ApO1xyXG4gICAgICAgICAgICAgICAgY3NzLnB1c2goc3RhdGljU3R5bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgY3NzLnB1c2goXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIsIFwiRmFsbGJhY2sgU3R5bGVcIik7XHJcbiAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLXVzZXItYWdlbnRcIiwgXCJVc2VyLUFnZW50IFN0eWxlXCIpO1xyXG4gICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS10ZXh0XCIsIFwiVGV4dCBTdHlsZVwiKTtcclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0taW52ZXJ0XCIsIFwiSW52ZXJ0IFN0eWxlXCIpO1xyXG4gICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS12YXJpYWJsZXNcIiwgXCJWYXJpYWJsZXMgU3R5bGVcIik7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRDU1MgPSBbXTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmtyZWFkZXItLXN5bmNcIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JFYWNoKGVsZW1lbnQuc2hlZXQuY3NzUnVsZXMsIChydWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBydWxlICYmIHJ1bGUuY3NzVGV4dCAmJiBtb2RpZmllZENTUy5wdXNoKHJ1bGUuY3NzVGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChtb2RpZmllZENTUy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkQ1NTID0gZm9ybWF0Q1NTKG1vZGlmaWVkQ1NTLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgICAgICAgICBjc3MucHVzaChcIi8qIE1vZGlmaWVkIENTUyAqL1wiKTtcclxuICAgICAgICAgICAgY3NzLnB1c2goYXdhaXQgcmVwbGFjZUJsb2JzKGZvcm1hdHRlZENTUykpO1xyXG4gICAgICAgICAgICBjc3MucHVzaChcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLW92ZXJyaWRlXCIsIFwiT3ZlcnJpZGUgU3R5bGVcIik7XHJcbiAgICAgICAgcmV0dXJuIGNzcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpc0RhcmtSZWFkZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBpc0lGcmFtZSA9ICgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuICAgIGZ1bmN0aW9uIGVuYWJsZSh0aGVtZU9wdGlvbnMgPSB7fSwgZml4ZXMgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSB7Li4uREVGQVVMVF9USEVNRSwgLi4udGhlbWVPcHRpb25zfTtcclxuICAgICAgICBpZiAodGhlbWUuZW5naW5lICE9PSBUaGVtZUVuZ2luZS5keW5hbWljVGhlbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlbWUgZW5naW5lIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVPclVwZGF0ZUR5bmFtaWNUaGVtZUludGVybmFsKHRoZW1lLCBmaXhlcywgaXNJRnJhbWUpO1xyXG4gICAgICAgIGlzRGFya1JlYWRlckVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiBpc0RhcmtSZWFkZXJFbmFibGVkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcclxuICAgICAgICByZW1vdmVEeW5hbWljVGhlbWUoKTtcclxuICAgICAgICBpc0RhcmtSZWFkZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXJrU2NoZW1lID0gbWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XHJcbiAgICBsZXQgc3RvcmUgPSB7XHJcbiAgICAgICAgdGhlbWVPcHRpb25zOiBudWxsLFxyXG4gICAgICAgIGZpeGVzOiBudWxsXHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29sb3JTY2hlbWUoKSB7XHJcbiAgICAgICAgaWYgKGRhcmtTY2hlbWUubWF0Y2hlcykge1xyXG4gICAgICAgICAgICBlbmFibGUoc3RvcmUudGhlbWVPcHRpb25zLCBzdG9yZS5maXhlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF1dG8odGhlbWVPcHRpb25zID0ge30sIGZpeGVzID0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGVtZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3RvcmUgPSB7dGhlbWVPcHRpb25zLCBmaXhlc307XHJcbiAgICAgICAgICAgIGhhbmRsZUNvbG9yU2NoZW1lKCk7XHJcbiAgICAgICAgICAgIGlmIChpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ29sb3JTY2hlbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGFya1NjaGVtZS5hZGRMaXN0ZW5lcihoYW5kbGVDb2xvclNjaGVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNNYXRjaE1lZGlhQ2hhbmdlRXZlbnRMaXN0ZW5lclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgZGFya1NjaGVtZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUucmVtb3ZlTGlzdGVuZXIoaGFuZGxlQ29sb3JTY2hlbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBleHBvcnRHZW5lcmF0ZWRDU1MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNvbGxlY3RDU1MoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEZldGNoTWV0aG9kID0gc2V0RmV0Y2hNZXRob2QkMTtcclxuXHJcbiAgICBleHBvcnRzLmF1dG8gPSBhdXRvO1xyXG4gICAgZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcclxuICAgIGV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xyXG4gICAgZXhwb3J0cy5leHBvcnRHZW5lcmF0ZWRDU1MgPSBleHBvcnRHZW5lcmF0ZWRDU1M7XHJcbiAgICBleHBvcnRzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcclxuICAgIGV4cG9ydHMuc2V0RmV0Y2hNZXRob2QgPSBzZXRGZXRjaE1ldGhvZDtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xyXG59KTtcclxuIiwgImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhclwiKS5pbm5lckhUTUwgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gYWJvdXRfbWUoKSB7XHJcbiAgdmFyIGJkYXkgPSBuZXcgRGF0ZShcIjA2LzA4LzIwMDRcIik7XHJcbiAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgLy8gVG8gY2FsY3VsYXRlIHRoZSB0aW1lIGRpZmZlcmVuY2Ugb2YgdHdvIGRhdGVzIFxyXG4gIHZhciB0aW1lX2RpZmYgPSB0b2RheS5nZXRUaW1lKCkgLSBiZGF5LmdldFRpbWUoKTtcclxuICB0aW1lX2RpZmYgPSAodGltZV9kaWZmIC8gMTAwMCkgLyAzMTU1Njk1MjtcclxuXHJcbiAgbGV0IGFnZSA9IHRpbWVfZGlmZi50b0ZpeGVkKDMpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm91bmRlci1uYW1lXCIpLmlubmVySFRNTCA9IGBFbW1hbnVlbCBLb2xlZG95ZSAofiR7YWdlfSlgO1xyXG59XHJcblxyXG5hYm91dF9tZSgpO1xyXG5cclxudmFyIGdvam9kZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29qb2RldicpO1xyXG5nb2pvZGV2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuXHJcbiAgZ29qb2Rldi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZUluXCIpO1xyXG4gIGdvam9kZXYub2Zmc2V0V2lkdGg7XHJcbiAgZ29qb2Rldi5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xyXG5cclxuICBnb2pvZGV2LnNyYyA9IFwiaW1hZ2VzL2dvam9kZXYud2VicFwiO1xyXG59KTtcclxuXHJcbmdvam9kZXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcblxyXG4gIGdvam9kZXYuY2xhc3NMaXN0LnJlbW92ZShcImZhZGVJblwiKTtcclxuICBnb2pvZGV2Lm9mZnNldFdpZHRoO1xyXG4gIGdvam9kZXYuY2xhc3NMaXN0LmFkZChcImZhZGVJblwiKTtcclxuXHJcbiAgZ29qb2Rldi5zcmMgPSBcImltYWdlcy9sb2dvLndlYnBcIjtcclxufSk7XHJcblxyXG5jb25zdCBEYXJrUmVhZGVyID0gcmVxdWlyZSgnZGFya3JlYWRlcicpO1xyXG5EYXJrUmVhZGVyLmF1dG8oe1xyXG4gIGJyaWdodG5lc3M6IDEwMCxcclxuICBjb250cmFzdDogMTAwLFxyXG4gIGRhcmtTY2hlbWVUZXh0Q29sb3I6ICd3aGl0ZScsXHJcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUtBLE9BQUMsU0FBVSxRQUFRLFNBQVM7QUFDeEIsZUFBTyxZQUFZLFlBQVksT0FBTyxXQUFXLGNBQzNDLFFBQVEsT0FBTyxJQUNmLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFDckMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLEtBQ3pCLFNBQ0UsT0FBTyxlQUFlLGNBQ2hCLGFBQ0EsVUFBVSxNQUNwQixRQUFTLE9BQU8sYUFBYSxDQUFDLENBQUU7QUFBQSxNQUM1QyxHQUFHLFNBQU0sU0FBVUEsVUFBUztBQUN4QjtBQUVBLFlBQUk7QUFDSixTQUFDLFNBQVVDLG9CQUFtQjtBQUMxQixVQUFBQSxtQkFBa0IsVUFBVSxJQUFJO0FBQ2hDLFVBQUFBLG1CQUFrQixtQkFBbUIsSUFBSTtBQUN6QyxVQUFBQSxtQkFBa0Isc0JBQXNCLElBQ3BDO0FBQ0osVUFBQUEs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QUFBQSxZQUNYLFdBQVc7QUFBQSxZQUNYLGNBQWM7QUFBQSxZQUNkLE1BQU07QUFBQSxZQUNOLFlBQVk7QUFBQSxZQUNaLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLE9BQU87QUFBQSxZQUNQLGdCQUFnQjtBQUFBLFlBQ2hCLE1BQU07QUFBQSxZQUNOLFlBQVk7QUFBQSxZQUNaLE9BQU87QUFBQSxZQUNQLFdBQVc7QUFBQSxZQUNYLFdBQVc7QUFBQSxZQUNYLFlBQVk7QUFBQSxZQUNaLFdBQVc7QUFBQSxZQUNYLE9BQU87QUFBQSxZQUNQLGdCQUFnQjtBQUFBLFlBQ2hCLFVBQVU7QUFBQSxZQUNWLFNBQVM7QUFBQSxZQUNULE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQSxZQUNWLGVBQWU7QUFBQSxZQUNmLFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQSxZQUNWLFdBQVc7QUFBQSxZQUNYLFdBQVc7QUFBQSxZQUNYLGFBQWE7QUFBQSxZQUNiLGdCQUFnQjtBQUFBLFlBQ2hCLFlBQVk7QUFBQSxZQUNaLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFlBQVk7QUFBQSxZQUNaLGNBQWM7QUFBQSxZQUNkLGVBQWU7QUFBQSxZQUNmLGVBQWU7QUFBQSxZQUNmLGVBQWU7QUFBQSxZQUNmLGVBQWU7QUFBQSxZQUNmLFlBQVk7QUFBQSxZQUNaLFVBQVU7QUFBQSxZQUNWLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxZQUNULFlBQVk7QUFBQSxZQUNaLFdBQVc7QUFBQSxZQUNYLGFBQWE7QUFBQSxZQUNiLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxZQUNULFdBQVc7QUFBQSxZQUNYLFlBQVk7QUFBQSxZQUNaLE1BQU07QUFBQSxZQUNOLFdBQVc7QUFBQSxZQUNYLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxZQUNQLGFBQWE7QUFBQSxZQUNiLFVBQVU7QUFBQSxZQUNWLFNBQVM7QUFBQSxZ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ZUFBZUEsVUFBUyxjQUFjLEVBQUMsT0FBTyxLQUFJLENBQUM7QUFBQSxNQUM5RCxDQUFDO0FBQUE7QUFBQTs7O0FDaHFQRCxXQUFTLGVBQWUsTUFBTSxFQUFFLGFBQVksb0JBQUksS0FBSyxHQUFFLFlBQVk7QUFHbkUsV0FBUyxXQUFXO0FBQ2xCLFFBQUksT0FBTyxvQkFBSSxLQUFLLFlBQVk7QUFDaEMsUUFBSSxRQUFRLG9CQUFJLEtBQUs7QUFHckIsUUFBSSxZQUFZLE1BQU0sUUFBUSxJQUFJLEtBQUssUUFBUTtBQUMvQyxnQkFBYSxZQUFZLE1BQVE7QUFFakMsUUFBSSxNQUFNLFVBQVUsUUFBUSxDQUFDO0FBQzdCLGFBQVMsZUFBZSxjQUFjLEVBQUUsWUFBWSx1QkFBdUIsWUFBRztBQUFBLEVBQ2hGO0FBRUEsV0FBUztBQUVULE1BQUksVUFBVSxTQUFTLGVBQWUsU0FBUztBQUMvQyxVQUFRLGlCQUFpQixhQUFhLE1BQU07QUFFMUMsWUFBUSxVQUFVLE9BQU8sUUFBUTtBQUNqQyxZQUFRO0FBQ1IsWUFBUSxVQUFVLElBQUksUUFBUTtBQUU5QixZQUFRLE1BQU07QUFBQSxFQUNoQixDQUFDO0FBRUQsVUFBUSxpQkFBaUIsWUFBWSxNQUFNO0FBRXpDLFlBQVEsVUFBVSxPQUFPLFFBQVE7QUFDakMsWUFBUTtBQUNSLFlBQVEsVUFBVSxJQUFJLFFBQVE7QUFFOUIsWUFBUSxNQUFNO0FBQUEsRUFDaEIsQ0FBQztBQUVELE1BQU0sYUFBYTtBQUNuQixhQUFXLEtBQUs7QUFBQSxJQUNkLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxJQUNWLHFCQUFxQjtBQUFBLEVBQ3ZCLENBQUM7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAiTWVzc2FnZVR5cGVVSXRvQkciLCAiTWVzc2FnZVR5cGVCR3RvVUkiLCAiRGVidWdNZXNzYWdlVHlwZUJHdG9VSSIsICJNZXNzYWdlVHlwZUJHdG9DUyIsICJEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTIiwgIk1lc3NhZ2VUeXBlQ1N0b0JHIiwgIkRlYnVnTWVzc2FnZVR5cGVDU3RvQkciLCAiTWVzc2FnZVR5cGVDU3RvVUkiLCAiTWVzc2FnZVR5cGVVSXRvQ1MiLCAiZmV0Y2giLCAiVGhlbWVFbmdpbmUiLCAiQXV0b21hdGlvbk1vZGUiLCAib2JzZXJ2ZXIiLCAicGFyc2VkVVJMIiwgInIiLCAiYiIsICJnIiwgIngiLCAidGhlbWUiLCAibHgiLCAiaHgiLCAiRmlsdGVyTW9kZSIsICJtIiwgInZhcmlhYmxlc1N0b3JlIiwgImlzSUZyYW1lIiwgIm1hdGNoZXMiLCAidmFsdWUiLCAiX2EiLCAibW9kIiwgImNsZWFuZXJzIiwgImkiLCAiY29tbWFuZHMiLCAiZGlzYWJsZUNvbmZsaWN0aW5nUGx1Z2lucyIsICJvdmVycmlkZXMiLCAiZWxlbWVudHMiLCAicm9vdFZhcnNTdHlsZSIsICJlIiwgImNzc1J1bGVzIiwgIm5vZGUiLCAiaWQiLCAiZml4ZXMiXQp9Cg==
