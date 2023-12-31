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
      console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));
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
  var FirebaseError = class _FirebaseError extends Error {
    constructor(code, message, customData) {
      super(message);
      this.code = code;
      this.customData = customData;
      this.name = ERROR_NAME;
      Object.setPrototypeOf(this, _FirebaseError.prototype);
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
      const fullCode = "".concat(this.service, "/").concat(code);
      const template = this.errors[code];
      const message = template ? replaceTemplate(template, customData) : "Error";
      const fullMessage = "".concat(this.serviceName, ": ").concat(message, " (").concat(fullCode, ").");
      const error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  };
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
      const value = data[key];
      return value != null ? String(value) : "<".concat(key, "?>");
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
          throw Error("Service ".concat(this.name, " is not available"));
        }
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(component) {
      if (component.name !== this.name) {
        throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
      }
      if (this.component) {
        throw Error("Component for ".concat(this.name, " has already been provided"));
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
        throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
      }
      if (!this.isComponentSet()) {
        throw Error("Component ".concat(this.name, " has not been registered yet"));
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
        throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
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
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
      console[method]("[".concat(now, "]  ").concat(instance.name, ":"), ...args);
    } else {
      throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
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
        throw new TypeError('Invalid value "'.concat(val, '" assigned to `logLevel`'));
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
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
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
          return "".concat(service.library, "/").concat(service.version);
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
      logger.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
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
      library += "-".concat(variant);
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version4.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        'Unable to register library "'.concat(library, '" with version "').concat(version4, '":')
      ];
      if (libraryMismatch) {
        warning.push('library name "'.concat(library, '" contains illegal characters (whitespace or "/")'));
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push('version name "'.concat(version4, '" contains illegal characters (whitespace or "/")'));
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(
      "".concat(library, "-version"),
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
    return "".concat(app.name, "!").concat(app.options.appId);
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
    const today = /* @__PURE__ */ new Date();
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
  var PACKAGE_VERSION = "w:".concat(version2);
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
    return "".concat(INSTALLATIONS_API_URL, "/projects/").concat(projectId, "/installations");
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
    return "".concat(INTERNAL_AUTH_VERSION, " ").concat(refreshToken);
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
    return "".concat(appConfig.appName, "!").concat(appConfig.appId);
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
    return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid, "/authTokens:generate");
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
  var Api = class _Api {
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
        apiInstance = new _Api(windowInstance);
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
  var SettingsService = class _SettingsService {
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
        settingsServiceInstance = new _SettingsService();
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
    const localStorage = Api.getInstance().localStorage;
    if (!localStorage) {
      return;
    }
    const expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);
    if (!expiryString || !configValid(expiryString)) {
      return;
    }
    const configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);
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
    const localStorage = Api.getInstance().localStorage;
    if (!config || !localStorage) {
      return;
    }
    localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
    localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() + SettingsService.getInstance().configTimeToLive * 60 * 60 * 1e3));
  }
  var COULD_NOT_GET_CONFIG_MSG = "Could not fetch config, will use default configs";
  function getRemoteConfig(performanceController, iid2) {
    return getAuthTokenPromise(performanceController.installations).then((authToken) => {
      const projectId = getProjectId(performanceController.app);
      const apiKey = getApiKey(performanceController.app);
      const configEndPoint = "https://firebaseremoteconfig.googleapis.com/v1/projects/".concat(projectId, "/namespaces/fireperf:fetch?key=").concat(apiKey);
      const request = new Request(configEndPoint, {
        method: "POST",
        headers: { Authorization: "".concat(FIS_AUTH_PREFIX, " ").concat(authToken) },
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
      consoleLogger.info("Tries left: ".concat(remainingTries, "."));
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
        consoleLogger.info("Retry transport request later.");
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
      consoleLogger.info("Metric value should be an Integer, setting the value as : ".concat(valueAsInteger, "."));
    }
    return valueAsInteger;
  }
  var Trace = class _Trace {
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
        this.traceStartMark = "".concat(TRACE_START_MARK_PREFIX, "-").concat(this.randomId, "-").concat(this.name);
        this.traceStopMark = "".concat(TRACE_STOP_MARK_PREFIX, "-").concat(this.randomId, "-").concat(this.name);
        this.traceMeasure = traceMeasureName || "".concat(TRACE_MEASURE_PREFIX, "-").concat(this.randomId, "-").concat(this.name);
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
    incrementMetric(counter, numAsInteger = 1) {
      if (this.counters[counter] === void 0) {
        this.putMetric(counter, numAsInteger);
      } else {
        this.putMetric(counter, this.counters[counter] + numAsInteger);
      }
    }
    /**
     * Sets a custom metric to a specified value. Will create a new custom metric if one with the
     * given name does not exist. The value will be floored down to an integer.
     * @param counter Name of the custom metric
     * @param numAsInteger Set custom metric to this value
     */
    putMetric(counter, numAsInteger) {
      if (isValidMetricName(counter, this.name)) {
        this.counters[counter] = convertMetricValueToInteger(numAsInteger !== null && numAsInteger !== void 0 ? numAsInteger : 0);
      } else {
        throw ERROR_FACTORY3.create("invalid custom metric name", {
          customMetricName: counter
        });
      }
    }
    /**
     * Returns the value of the custom metric by that name. If a custom metric with that name does
     * not exist will return zero.
     * @param counter
     */
    getMetric(counter) {
      return this.counters[counter] || 0;
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
      const trace = new _Trace(performanceController, OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
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
      const trace = new _Trace(performanceController, measureName, false, measureName);
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
          consoleLogger.info("Environment doesn't support IndexedDB: ".concat(error));
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
  document.getElementById("result_container").classList.add("hide");
  document.getElementById("invalid_input").style.display = "none";
  async function find_points_needed() {
    document.getElementById("result_container").classList.add("show");
    document.getElementById("result_container").classList.remove("hide");
    target_num = Number(document.getElementById("target_text").value);
    hl_num = Number(document.getElementById("hl_subs_text").value);
    ol_num = Number(document.getElementById("ol_subs_text").value);
    var invalid_target_input = target_num <= 0 || target_num > 625;
    var invalid_subs_input = hl_num < 0 || ol_num < 0 || hl_num > 6 || ol_num > 6 || hl_num + ol_num > 6;
    var max_pts = hl_num * 100 + ol_num * 56 + add_25;
    var invalid_range = max_pts >= target_num == false;
    const range_error_msg = "It's impossible to achieve ".concat(target_num, " CAO points with ").concat(hl_num, " higher-level subjects and ").concat(ol_num, " ordinary-level subjects.");
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
      document.getElementById("adding_25_container").style.opacity = "0";
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
  if ([3, 4, 5].includes(month)) {
    setInterval(motivate, 1e3);
    motivate();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9hc3NlcnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9jcnlwdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2RlZXBDb3B5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZW52aXJvbm1lbnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9kZWZhdWx0cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2RlZmVycmVkLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZW11bGF0b3IudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9qc29uLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvand0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvb2JqLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvcHJvbWlzZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3F1ZXJ5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvc2hhMS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3N1YnNjcmliZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3ZhbGlkYXRpb24udHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy91dGY4LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvdXVpZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2V4cG9uZW50aWFsX2JhY2tvZmYudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9mb3JtYXR0ZXJzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvY29tcGF0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvY29tcG9uZW50L3NyYy9jb21wb25lbnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbnN0YW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9zcmMvcHJvdmlkZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbXBvbmVudF9jb250YWluZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvc3JjL2xvZ2dlci50cyIsICJub2RlX21vZHVsZXMvaWRiL2J1aWxkL3dyYXAtaWRiLXZhbHVlLmpzIiwgIm5vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3BsYXRmb3JtTG9nZ2VyU2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvbG9nZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ludGVybmFsLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ZpcmViYXNlQXBwLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9hcGkudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2luZGV4ZWRkYi50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaGVhcnRiZWF0U2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvcmVnaXN0ZXJDb3JlQ29tcG9uZW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXgudHMiLCAibm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9pbmRleC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvY29uc3RhbnRzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvdXRpbC9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9mdW5jdGlvbnMvY29tbW9uLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2NyZWF0ZS1pbnN0YWxsYXRpb24tcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvc2xlZXAudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2J1ZmZlci10by1iYXNlNjQtdXJsLXNhZmUudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2dlbmVyYXRlLWZpZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvZ2V0LWtleS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvZmlkLWNoYW5nZWQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2lkYi1tYW5hZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvaGVscGVycy9nZXQtaW5zdGFsbGF0aW9uLWVudHJ5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlLWF1dGgtdG9rZW4tcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvcmVmcmVzaC1hdXRoLXRva2VuLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2dldC1pZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2FwaS9nZXQtdG9rZW4udHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9mdW5jdGlvbnMvZGVsZXRlLWluc3RhbGxhdGlvbi1yZXF1ZXN0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2RlbGV0ZS1pbnN0YWxsYXRpb25zLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL29uLWlkLWNoYW5nZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2FwaS9nZXQtaW5zdGFsbGF0aW9ucy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvZXh0cmFjdC1hcHAtY29uZmlnLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2NvbmZpZy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2luZGV4LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL2NvbnN0YW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy91dGlscy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvY29uc29sZV9sb2dnZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvc2VydmljZXMvYXBpX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvc2VydmljZXMvaWlkX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvc3RyaW5nX21lcmdlci50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9zZXR0aW5nc19zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3V0aWxzL2F0dHJpYnV0ZXNfdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvYXBwX3V0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3JlbW90ZV9jb25maWdfc2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9pbml0aWFsaXphdGlvbl9zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3RyYW5zcG9ydF9zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3BlcmZfbG9nZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3V0aWxzL21ldHJpY191dGlscy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9yZXNvdXJjZXMvdHJhY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvcmVzb3VyY2VzL25ldHdvcmtfcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9vb2JfcmVzb3VyY2VzX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvY29udHJvbGxlcnMvcGVyZi50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9pbmRleC50cyIsICJjb25maWcuanMiLCAiaG9tZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEZpcmViYXNlIGNvbnN0YW50cy4gIFNvbWUgb2YgdGhlc2UgKEBkZWZpbmVzKSBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBjb21waWxlLXRpbWUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IENPTlNUQU5UUyA9IHtcbiAgLyoqXG4gICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgY2xpZW50IE5vZGUuanMgU0RLLlxuICAgKi9cbiAgTk9ERV9DTElFTlQ6IGZhbHNlLFxuICAvKipcbiAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBBZG1pbiBOb2RlLmpzIFNESy5cbiAgICovXG4gIE5PREVfQURNSU46IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBGaXJlYmFzZSBTREsgVmVyc2lvblxuICAgKi9cbiAgU0RLX1ZFUlNJT046ICcke0pTQ09SRV9WRVJTSU9OfSdcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcHJvdmlkZWQgYXNzZXJ0aW9uIGlzIGZhbHN5XG4gKi9cbmV4cG9ydCBjb25zdCBhc3NlcnQgPSBmdW5jdGlvbiAoYXNzZXJ0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICB0aHJvdyBhc3NlcnRpb25FcnJvcihtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIEVycm9yIG9iamVjdCBzdWl0YWJsZSBmb3IgdGhyb3dpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlOiBzdHJpbmcpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoXG4gICAgJ0ZpcmViYXNlIERhdGFiYXNlICgnICtcbiAgICAgIENPTlNUQU5UUy5TREtfVkVSU0lPTiArXG4gICAgICAnKSBJTlRFUk5BTCBBU1NFUlQgRkFJTEVEOiAnICtcbiAgICAgIG1lc3NhZ2VcbiAgKTtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuY29uc3Qgc3RyaW5nVG9CeXRlQXJyYXkgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXG4gIGNvbnN0IG91dDogbnVtYmVyW10gPSBbXTtcbiAgbGV0IHAgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgIG91dFtwKytdID0gYztcbiAgICB9IGVsc2UgaWYgKGMgPCAyMDQ4KSB7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiZcbiAgICAgIGkgKyAxIDwgc3RyLmxlbmd0aCAmJlxuICAgICAgKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmMwMCkgPT09IDB4ZGMwMFxuICAgICkge1xuICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcbiAgICAgIGMgPSAweDEwMDAwICsgKChjICYgMHgwM2ZmKSA8PCAxMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4MDNmZik7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDE4KSB8IDI0MDtcbiAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XG4gICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFR1cm5zIGFuIGFycmF5IG9mIG51bWJlcnMgaW50byB0aGUgc3RyaW5nIGdpdmVuIGJ5IHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZVxuICogY2hhcmFjdGVycyB0byB3aGljaCB0aGUgbnVtYmVycyBjb3JyZXNwb25kLlxuICogQHBhcmFtIGJ5dGVzIEFycmF5IG9mIG51bWJlcnMgcmVwcmVzZW50aW5nIGNoYXJhY3RlcnMuXG4gKiBAcmV0dXJuIFN0cmluZ2lmaWNhdGlvbiBvZiB0aGUgYXJyYXkuXG4gKi9cbmNvbnN0IGJ5dGVBcnJheVRvU3RyaW5nID0gZnVuY3Rpb24gKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXG4gIGNvbnN0IG91dDogc3RyaW5nW10gPSBbXTtcbiAgbGV0IHBvcyA9IDAsXG4gICAgYyA9IDA7XG4gIHdoaWxlIChwb3MgPCBieXRlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBjMSA9IGJ5dGVzW3BvcysrXTtcbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSk7XG4gICAgfSBlbHNlIGlmIChjMSA+IDE5MSAmJiBjMSA8IDIyNCkge1xuICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XG4gICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjMSAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XG4gICAgfSBlbHNlIGlmIChjMSA+IDIzOSAmJiBjMSA8IDM2NSkge1xuICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcbiAgICAgIGNvbnN0IGMyID0gYnl0ZXNbcG9zKytdO1xuICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XG4gICAgICBjb25zdCBjNCA9IGJ5dGVzW3BvcysrXTtcbiAgICAgIGNvbnN0IHUgPVxuICAgICAgICAoKChjMSAmIDcpIDw8IDE4KSB8ICgoYzIgJiA2MykgPDwgMTIpIHwgKChjMyAmIDYzKSA8PCA2KSB8IChjNCAmIDYzKSkgLVxuICAgICAgICAweDEwMDAwO1xuICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCArICh1ID4+IDEwKSk7XG4gICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkYzAwICsgKHUgJiAxMDIzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGMyID0gYnl0ZXNbcG9zKytdO1xuICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XG4gICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICgoYzEgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dC5qb2luKCcnKTtcbn07XG5cbmludGVyZmFjZSBCYXNlNjQge1xuICBieXRlVG9DaGFyTWFwXzogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSB8IG51bGw7XG4gIGNoYXJUb0J5dGVNYXBfOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbDtcbiAgYnl0ZVRvQ2hhck1hcFdlYlNhZmVfOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9IHwgbnVsbDtcbiAgY2hhclRvQnl0ZU1hcFdlYlNhZmVfOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbDtcbiAgRU5DT0RFRF9WQUxTX0JBU0U6IHN0cmluZztcbiAgcmVhZG9ubHkgRU5DT0RFRF9WQUxTOiBzdHJpbmc7XG4gIHJlYWRvbmx5IEVOQ09ERURfVkFMU19XRUJTQUZFOiBzdHJpbmc7XG4gIEhBU19OQVRJVkVfU1VQUE9SVDogYm9vbGVhbjtcbiAgZW5jb2RlQnl0ZUFycmF5KGlucHV0OiBudW1iZXJbXSB8IFVpbnQ4QXJyYXksIHdlYlNhZmU/OiBib29sZWFuKTogc3RyaW5nO1xuICBlbmNvZGVTdHJpbmcoaW5wdXQ6IHN0cmluZywgd2ViU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIGRlY29kZVN0cmluZyhpbnB1dDogc3RyaW5nLCB3ZWJTYWZlOiBib29sZWFuKTogc3RyaW5nO1xuICBkZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dDogc3RyaW5nLCB3ZWJTYWZlOiBib29sZWFuKTogbnVtYmVyW107XG4gIGluaXRfKCk6IHZvaWQ7XG59XG5cbi8vIFdlIGRlZmluZSBpdCBhcyBhbiBvYmplY3QgbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY2xhc3MgYmVjYXVzZSBhIGNsYXNzIGNvbXBpbGVkIGRvd24gdG8gZXM1IGNhbid0XG4vLyBiZSB0cmVlc2hha2VkLiBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTY5MVxuLy8gU3RhdGljIGxvb2t1cCBtYXBzLCBsYXppbHkgcG9wdWxhdGVkIGJ5IGluaXRfKClcbmV4cG9ydCBjb25zdCBiYXNlNjQ6IEJhc2U2NCA9IHtcbiAgLyoqXG4gICAqIE1hcHMgYnl0ZXMgdG8gY2hhcmFjdGVycy5cbiAgICovXG4gIGJ5dGVUb0NoYXJNYXBfOiBudWxsLFxuXG4gIC8qKlxuICAgKiBNYXBzIGNoYXJhY3RlcnMgdG8gYnl0ZXMuXG4gICAqL1xuICBjaGFyVG9CeXRlTWFwXzogbnVsbCxcblxuICAvKipcbiAgICogTWFwcyBieXRlcyB0byB3ZWJzYWZlIGNoYXJhY3RlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBieXRlVG9DaGFyTWFwV2ViU2FmZV86IG51bGwsXG5cbiAgLyoqXG4gICAqIE1hcHMgd2Vic2FmZSBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hhclRvQnl0ZU1hcFdlYlNhZmVfOiBudWxsLFxuXG4gIC8qKlxuICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldCwgc2hhcmVkIGJldHdlZW5cbiAgICogRU5DT0RFRF9WQUxTIGFuZCBFTkNPREVEX1ZBTFNfV0VCU0FGRVxuICAgKi9cbiAgRU5DT0RFRF9WQUxTX0JBU0U6XG4gICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJyArICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgKyAnMDEyMzQ1Njc4OScsXG5cbiAgLyoqXG4gICAqIE91ciBkZWZhdWx0IGFscGhhYmV0LiBWYWx1ZSA2NCAoPSkgaXMgc3BlY2lhbDsgaXQgbWVhbnMgXCJub3RoaW5nLlwiXG4gICAqL1xuICBnZXQgRU5DT0RFRF9WQUxTKCkge1xuICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJysvPSc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE91ciB3ZWJzYWZlIGFscGhhYmV0LlxuICAgKi9cbiAgZ2V0IEVOQ09ERURfVkFMU19XRUJTQUZFKCkge1xuICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJy1fLic7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHRoZSBhdG9iIGFuZCBidG9hIGZ1bmN0aW9ucy4gVGhpcyBleHRlbnNpb25cbiAgICogc3RhcnRlZCBhdCBNb3ppbGxhIGJ1dCBpcyBub3cgaW1wbGVtZW50ZWQgYnkgbWFueSBicm93c2Vycy4gV2UgdXNlIHRoZVxuICAgKiBBU1NVTUVfKiB2YXJpYWJsZXMgdG8gYXZvaWQgcHVsbGluZyBpbiB0aGUgZnVsbCB1c2VyYWdlbnQgZGV0ZWN0aW9uIGxpYnJhcnlcbiAgICogYnV0IHN0aWxsIGFsbG93aW5nIHRoZSBzdGFuZGFyZCBwZXItYnJvd3NlciBjb21waWxhdGlvbnMuXG4gICAqXG4gICAqL1xuICBIQVNfTkFUSVZFX1NVUFBPUlQ6IHR5cGVvZiBhdG9iID09PSAnZnVuY3Rpb24nLFxuXG4gIC8qKlxuICAgKiBCYXNlNjQtZW5jb2RlIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXQgQW4gYXJyYXkgb2YgYnl0ZXMgKG51bWJlcnMgd2l0aFxuICAgKiAgICAgdmFsdWUgaW4gWzAsIDI1NV0pIHRvIGVuY29kZS5cbiAgICogQHBhcmFtIHdlYlNhZmUgQm9vbGVhbiBpbmRpY2F0aW5nIHdlIHNob3VsZCB1c2UgdGhlXG4gICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cbiAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICAgKi9cbiAgZW5jb2RlQnl0ZUFycmF5KGlucHV0OiBudW1iZXJbXSB8IFVpbnQ4QXJyYXksIHdlYlNhZmU/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICB0aHJvdyBFcnJvcignZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0XygpO1xuXG4gICAgY29uc3QgYnl0ZVRvQ2hhck1hcCA9IHdlYlNhZmVcbiAgICAgID8gdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV8hXG4gICAgICA6IHRoaXMuYnl0ZVRvQ2hhck1hcF8hO1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICBjb25zdCBieXRlMSA9IGlucHV0W2ldO1xuICAgICAgY29uc3QgaGF2ZUJ5dGUyID0gaSArIDEgPCBpbnB1dC5sZW5ndGg7XG4gICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGlucHV0W2kgKyAxXSA6IDA7XG4gICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpICsgMiA8IGlucHV0Lmxlbmd0aDtcbiAgICAgIGNvbnN0IGJ5dGUzID0gaGF2ZUJ5dGUzID8gaW5wdXRbaSArIDJdIDogMDtcblxuICAgICAgY29uc3Qgb3V0Qnl0ZTEgPSBieXRlMSA+PiAyO1xuICAgICAgY29uc3Qgb3V0Qnl0ZTIgPSAoKGJ5dGUxICYgMHgwMykgPDwgNCkgfCAoYnl0ZTIgPj4gNCk7XG4gICAgICBsZXQgb3V0Qnl0ZTMgPSAoKGJ5dGUyICYgMHgwZikgPDwgMikgfCAoYnl0ZTMgPj4gNik7XG4gICAgICBsZXQgb3V0Qnl0ZTQgPSBieXRlMyAmIDB4M2Y7XG5cbiAgICAgIGlmICghaGF2ZUJ5dGUzKSB7XG4gICAgICAgIG91dEJ5dGU0ID0gNjQ7XG5cbiAgICAgICAgaWYgKCFoYXZlQnl0ZTIpIHtcbiAgICAgICAgICBvdXRCeXRlMyA9IDY0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG91dHB1dC5wdXNoKFxuICAgICAgICBieXRlVG9DaGFyTWFwW291dEJ5dGUxXSxcbiAgICAgICAgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMl0sXG4gICAgICAgIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTNdLFxuICAgICAgICBieXRlVG9DaGFyTWFwW291dEJ5dGU0XVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCYXNlNjQtZW5jb2RlIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXQgQSBzdHJpbmcgdG8gZW5jb2RlLlxuICAgKiBAcGFyYW0gd2ViU2FmZSBJZiB0cnVlLCB3ZSBzaG91bGQgdXNlIHRoZVxuICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXG4gICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cbiAgICovXG4gIGVuY29kZVN0cmluZyhpbnB1dDogc3RyaW5nLCB3ZWJTYWZlPzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgLy8gU2hvcnRjdXQgZm9yIE1vemlsbGEgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnRcbiAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXG4gICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XG4gICAgICByZXR1cm4gYnRvYShpbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuY29kZUJ5dGVBcnJheShzdHJpbmdUb0J5dGVBcnJheShpbnB1dCksIHdlYlNhZmUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCYXNlNjQtZGVjb2RlIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxuICAgKiBAcGFyYW0gd2ViU2FmZSBUcnVlIGlmIHdlIHNob3VsZCB1c2UgdGhlXG4gICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cbiAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxuICAgKi9cbiAgZGVjb2RlU3RyaW5nKGlucHV0OiBzdHJpbmcsIHdlYlNhZmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XG4gICAgLy8gYSBuYXRpdmUgYmFzZTY0IGVuY29kZXIgaW4gdGhlIGZvcm0gb2YgXCJidG9hL2F0b2JcIlxuICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xuICAgICAgcmV0dXJuIGF0b2IoaW5wdXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZUFycmF5VG9TdHJpbmcodGhpcy5kZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dCwgd2ViU2FmZSkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCYXNlNjQtZGVjb2RlIGEgc3RyaW5nLlxuICAgKlxuICAgKiBJbiBiYXNlLTY0IGRlY29kaW5nLCBncm91cHMgb2YgZm91ciBjaGFyYWN0ZXJzIGFyZSBjb252ZXJ0ZWQgaW50byB0aHJlZVxuICAgKiBieXRlcy4gIElmIHRoZSBlbmNvZGVyIGRpZCBub3QgYXBwbHkgcGFkZGluZywgdGhlIGlucHV0IGxlbmd0aCBtYXkgbm90XG4gICAqIGJlIGEgbXVsdGlwbGUgb2YgNC5cbiAgICpcbiAgICogSW4gdGhpcyBjYXNlLCB0aGUgbGFzdCBncm91cCB3aWxsIGhhdmUgZmV3ZXIgdGhhbiA0IGNoYXJhY3RlcnMsIGFuZFxuICAgKiBwYWRkaW5nIHdpbGwgYmUgaW5mZXJyZWQuICBJZiB0aGUgZ3JvdXAgaGFzIG9uZSBvciB0d28gY2hhcmFjdGVycywgaXQgZGVjb2Rlc1xuICAgKiB0byBvbmUgYnl0ZS4gIElmIHRoZSBncm91cCBoYXMgdGhyZWUgY2hhcmFjdGVycywgaXQgZGVjb2RlcyB0byB0d28gYnl0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dCBJbnB1dCB0byBkZWNvZGUuXG4gICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGUgd2ViLXNhZmUgYWxwaGFiZXQuXG4gICAqIEByZXR1cm4gYnl0ZXMgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxuICAgKi9cbiAgZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQ6IHN0cmluZywgd2ViU2FmZTogYm9vbGVhbik6IG51bWJlcltdIHtcbiAgICB0aGlzLmluaXRfKCk7XG5cbiAgICBjb25zdCBjaGFyVG9CeXRlTWFwID0gd2ViU2FmZVxuICAgICAgPyB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlXyFcbiAgICAgIDogdGhpcy5jaGFyVG9CeXRlTWFwXyE7XG5cbiAgICBjb25zdCBvdXRwdXQ6IG51bWJlcltdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgKSB7XG4gICAgICBjb25zdCBieXRlMSA9IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkrKyldO1xuXG4gICAgICBjb25zdCBoYXZlQnl0ZTIgPSBpIDwgaW5wdXQubGVuZ3RoO1xuICAgICAgY29uc3QgYnl0ZTIgPSBoYXZlQnl0ZTIgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiAwO1xuICAgICAgKytpO1xuXG4gICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpIDwgaW5wdXQubGVuZ3RoO1xuICAgICAgY29uc3QgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiA2NDtcbiAgICAgICsraTtcblxuICAgICAgY29uc3QgaGF2ZUJ5dGU0ID0gaSA8IGlucHV0Lmxlbmd0aDtcbiAgICAgIGNvbnN0IGJ5dGU0ID0gaGF2ZUJ5dGU0ID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XG4gICAgICArK2k7XG5cbiAgICAgIGlmIChieXRlMSA9PSBudWxsIHx8IGJ5dGUyID09IG51bGwgfHwgYnl0ZTMgPT0gbnVsbCB8fCBieXRlNCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG91dEJ5dGUxID0gKGJ5dGUxIDw8IDIpIHwgKGJ5dGUyID4+IDQpO1xuICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTEpO1xuXG4gICAgICBpZiAoYnl0ZTMgIT09IDY0KSB7XG4gICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMiA8PCA0KSAmIDB4ZjApIHwgKGJ5dGUzID4+IDIpO1xuICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMik7XG5cbiAgICAgICAgaWYgKGJ5dGU0ICE9PSA2NCkge1xuICAgICAgICAgIGNvbnN0IG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XG4gICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfSxcblxuICAvKipcbiAgICogTGF6eSBzdGF0aWMgaW5pdGlhbGl6YXRpb24gZnVuY3Rpb24uIENhbGxlZCBiZWZvcmVcbiAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0XygpIHtcbiAgICBpZiAoIXRoaXMuYnl0ZVRvQ2hhck1hcF8pIHtcbiAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcF8gPSB7fTtcbiAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF8gPSB7fTtcbiAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfID0ge307XG4gICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlXyA9IHt9O1xuXG4gICAgICAvLyBXZSB3YW50IHF1aWNrIG1hcHBpbmdzIGJhY2sgYW5kIGZvcnRoLCBzbyB3ZSBwcmVjb21wdXRlIHR3byBtYXBzLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVOQ09ERURfVkFMUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFMuY2hhckF0KGkpO1xuICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuYnl0ZVRvQ2hhck1hcF9baV1dID0gaTtcbiAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV9baV0gPSB0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKTtcbiAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV9bdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV9baV1dID0gaTtcblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcgd2hlbiBkZWNvZGluZyBhbmQgY29ycmVjdGx5IGRlY29kZSBib3RoIGVuY29kaW5ncy5cbiAgICAgICAgaWYgKGkgPj0gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuRU5DT0RFRF9WQUxTX1dFQlNBRkUuY2hhckF0KGkpXSA9IGk7XG4gICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV9bdGhpcy5FTkNPREVEX1ZBTFMuY2hhckF0KGkpXSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBiYXNlNjRFbmNvZGUgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB1dGY4Qnl0ZXMgPSBzdHJpbmdUb0J5dGVBcnJheShzdHIpO1xuICByZXR1cm4gYmFzZTY0LmVuY29kZUJ5dGVBcnJheSh1dGY4Qnl0ZXMsIHRydWUpO1xufTtcblxuLyoqXG4gKiBVUkwtc2FmZSBiYXNlNjQgZW5jb2RpbmcgKHdpdGhvdXQgXCIuXCIgcGFkZGluZyBpbiB0aGUgZW5kKS5cbiAqIGUuZy4gVXNlZCBpbiBKU09OIFdlYiBUb2tlbiAoSldUKSBwYXJ0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gVXNlIGJhc2U2NHVybCBlbmNvZGluZyBhbmQgcmVtb3ZlIHBhZGRpbmcgaW4gdGhlIGVuZCAoZG90IGNoYXJhY3RlcnMpLlxuICByZXR1cm4gYmFzZTY0RW5jb2RlKHN0cikucmVwbGFjZSgvXFwuL2csICcnKTtcbn07XG5cbi8qKlxuICogVVJMLXNhZmUgYmFzZTY0IGRlY29kaW5nXG4gKlxuICogTk9URTogRE8gTk9UIHVzZSB0aGUgZ2xvYmFsIGF0b2IoKSBmdW5jdGlvbiAtIGl0IGRvZXMgTk9UIHN1cHBvcnQgdGhlXG4gKiBiYXNlNjRVcmwgdmFyaWFudCBlbmNvZGluZy5cbiAqXG4gKiBAcGFyYW0gc3RyIFRvIGJlIGRlY29kZWRcbiAqIEByZXR1cm4gRGVjb2RlZCByZXN1bHQsIGlmIHBvc3NpYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBiYXNlNjREZWNvZGUgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYmFzZTY0LmRlY29kZVN0cmluZyhzdHIsIHRydWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignYmFzZTY0RGVjb2RlIGZhaWxlZDogJywgZSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogRG8gYSBkZWVwLWNvcHkgb2YgYmFzaWMgSmF2YVNjcmlwdCBPYmplY3RzIG9yIEFycmF5cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5PFQ+KHZhbHVlOiBUKTogVCB7XG4gIHJldHVybiBkZWVwRXh0ZW5kKHVuZGVmaW5lZCwgdmFsdWUpIGFzIFQ7XG59XG5cbi8qKlxuICogQ29weSBwcm9wZXJ0aWVzIGZyb20gc291cmNlIHRvIHRhcmdldCAocmVjdXJzaXZlbHkgYWxsb3dzIGV4dGVuc2lvblxuICogb2YgT2JqZWN0cyBhbmQgQXJyYXlzKS4gIFNjYWxhciB2YWx1ZXMgaW4gdGhlIHRhcmdldCBhcmUgb3Zlci13cml0dGVuLlxuICogSWYgdGFyZ2V0IGlzIHVuZGVmaW5lZCwgYW4gb2JqZWN0IG9mIHRoZSBhcHByb3ByaWF0ZSB0eXBlIHdpbGwgYmUgY3JlYXRlZFxuICogKGFuZCByZXR1cm5lZCkuXG4gKlxuICogV2UgcmVjdXJzaXZlbHkgY29weSBhbGwgY2hpbGQgcHJvcGVydGllcyBvZiBwbGFpbiBPYmplY3RzIGluIHRoZSBzb3VyY2UtIHNvXG4gKiB0aGF0IG5hbWVzcGFjZS0gbGlrZSBkaWN0aW9uYXJpZXMgYXJlIG1lcmdlZC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIHRhcmdldCBjYW4gYmUgYSBmdW5jdGlvbiwgaW4gd2hpY2ggY2FzZSB0aGUgcHJvcGVydGllcyBpblxuICogdGhlIHNvdXJjZSBPYmplY3QgYXJlIGNvcGllZCBvbnRvIGl0IGFzIHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoZSBGdW5jdGlvbi5cbiAqXG4gKiBOb3RlOiB3ZSBkb24ndCBtZXJnZSBfX3Byb3RvX18gdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXh0ZW5kKHRhcmdldDogdW5rbm93biwgc291cmNlOiB1bmtub3duKTogdW5rbm93biB7XG4gIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgc3dpdGNoIChzb3VyY2UuY29uc3RydWN0b3IpIHtcbiAgICBjYXNlIERhdGU6XG4gICAgICAvLyBUcmVhdCBEYXRlcyBsaWtlIHNjYWxhcnM7IGlmIHRoZSB0YXJnZXQgZGF0ZSBvYmplY3QgaGFkIGFueSBjaGlsZFxuICAgICAgLy8gcHJvcGVydGllcyAtIHRoZXkgd2lsbCBiZSBsb3N0IVxuICAgICAgY29uc3QgZGF0ZVZhbHVlID0gc291cmNlIGFzIERhdGU7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVZhbHVlLmdldFRpbWUoKSk7XG5cbiAgICBjYXNlIE9iamVjdDpcbiAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXJnZXQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQXJyYXk6XG4gICAgICAvLyBBbHdheXMgY29weSB0aGUgYXJyYXkgc291cmNlIGFuZCBvdmVyd3JpdGUgdGhlIHRhcmdldC5cbiAgICAgIHRhcmdldCA9IFtdO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gTm90IGEgcGxhaW4gT2JqZWN0IC0gdHJlYXQgaXQgYXMgYSBzY2FsYXIuXG4gICAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZm9yIChjb25zdCBwcm9wIGluIHNvdXJjZSkge1xuICAgIC8vIHVzZSBpc1ZhbGlkS2V5IHRvIGd1YXJkIGFnYWluc3QgcHJvdG90eXBlIHBvbGx1dGlvbi4gU2VlIGh0dHBzOi8vc255ay5pby92dWxuL1NOWUstSlMtTE9EQVNILTQ1MDIwMlxuICAgIGlmICghc291cmNlLmhhc093blByb3BlcnR5KHByb3ApIHx8ICFpc1ZhbGlkS2V5KHByb3ApKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgKHRhcmdldCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbcHJvcF0gPSBkZWVwRXh0ZW5kKFxuICAgICAgKHRhcmdldCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbcHJvcF0sXG4gICAgICAoc291cmNlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtwcm9wXVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBrZXkgIT09ICdfX3Byb3RvX18nO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBSZXR1cm5zIG5hdmlnYXRvci51c2VyQWdlbnQgc3RyaW5nIG9yICcnIGlmIGl0J3Mgbm90IGRlZmluZWQuXG4gKiBAcmV0dXJuIHVzZXIgYWdlbnQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVQSgpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgbmF2aWdhdG9yWyd1c2VyQWdlbnQnXSA9PT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvclsndXNlckFnZW50J107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZWN0IENvcmRvdmEgLyBQaG9uZUdhcCAvIElvbmljIGZyYW1ld29ya3Mgb24gYSBtb2JpbGUgZGV2aWNlLlxuICpcbiAqIERlbGliZXJhdGVseSBkb2VzIG5vdCByZWx5IG9uIGNoZWNraW5nIGBmaWxlOi8vYCBVUkxzIChhcyB0aGlzIGZhaWxzIFBob25lR2FwXG4gKiBpbiB0aGUgUmlwcGxlIGVtdWxhdG9yKSBub3IgQ29yZG92YSBgb25EZXZpY2VSZWFkeWAsIHdoaWNoIHdvdWxkIG5vcm1hbGx5XG4gKiB3YWl0IGZvciBhIGNhbGxiYWNrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGVDb3Jkb3ZhKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgLy8gQHRzLWlnbm9yZSBTZXR0aW5nIHVwIGFuIGJyb2FkbHkgYXBwbGljYWJsZSBpbmRleCBzaWduYXR1cmUgZm9yIFdpbmRvd1xuICAgIC8vIGp1c3QgdG8gZGVhbCB3aXRoIHRoaXMgY2FzZSB3b3VsZCBwcm9iYWJseSBiZSBhIGJhZCBpZGVhLlxuICAgICEhKHdpbmRvd1snY29yZG92YSddIHx8IHdpbmRvd1sncGhvbmVnYXAnXSB8fCB3aW5kb3dbJ1Bob25lR2FwJ10pICYmXG4gICAgL2lvc3xpcGhvbmV8aXBvZHxpcGFkfGFuZHJvaWR8YmxhY2tiZXJyeXxpZW1vYmlsZS9pLnRlc3QoZ2V0VUEoKSlcbiAgKTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgTm9kZS5qcy5cbiAqXG4gKiBAcmV0dXJuIHRydWUgaWYgTm9kZS5qcyBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cbiAqL1xuLy8gTm9kZSBkZXRlY3Rpb24gbG9naWMgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2lsaWFrYW4vZGV0ZWN0LW5vZGUvXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSdcbiAgICApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZWN0IEJyb3dzZXIgRW52aXJvbm1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlcigpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGY7XG59XG5cbi8qKlxuICogRGV0ZWN0IGJyb3dzZXIgZXh0ZW5zaW9ucyAoQ2hyb21lIGFuZCBGaXJlZm94IGF0IGxlYXN0KS5cbiAqL1xuaW50ZXJmYWNlIEJyb3dzZXJSdW50aW1lIHtcbiAgaWQ/OiB1bmtub3duO1xufVxuZGVjbGFyZSBjb25zdCBjaHJvbWU6IHsgcnVudGltZT86IEJyb3dzZXJSdW50aW1lIH07XG5kZWNsYXJlIGNvbnN0IGJyb3dzZXI6IHsgcnVudGltZT86IEJyb3dzZXJSdW50aW1lIH07XG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyRXh0ZW5zaW9uKCk6IGJvb2xlYW4ge1xuICBjb25zdCBydW50aW1lID1cbiAgICB0eXBlb2YgY2hyb21lID09PSAnb2JqZWN0J1xuICAgICAgPyBjaHJvbWUucnVudGltZVxuICAgICAgOiB0eXBlb2YgYnJvd3NlciA9PT0gJ29iamVjdCdcbiAgICAgID8gYnJvd3Nlci5ydW50aW1lXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIHR5cGVvZiBydW50aW1lID09PSAnb2JqZWN0JyAmJiBydW50aW1lLmlkICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogRGV0ZWN0IFJlYWN0IE5hdGl2ZS5cbiAqXG4gKiBAcmV0dXJuIHRydWUgaWYgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnQgaXMgZGV0ZWN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWN0TmF0aXZlKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIG5hdmlnYXRvclsncHJvZHVjdCddID09PSAnUmVhY3ROYXRpdmUnXG4gICk7XG59XG5cbi8qKiBEZXRlY3RzIEVsZWN0cm9uIGFwcHMuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVjdHJvbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignRWxlY3Ryb24vJykgPj0gMDtcbn1cblxuLyoqIERldGVjdHMgSW50ZXJuZXQgRXhwbG9yZXIuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJRSgpOiBib29sZWFuIHtcbiAgY29uc3QgdWEgPSBnZXRVQSgpO1xuICByZXR1cm4gdWEuaW5kZXhPZignTVNJRSAnKSA+PSAwIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgPj0gMDtcbn1cblxuLyoqIERldGVjdHMgVW5pdmVyc2FsIFdpbmRvd3MgUGxhdGZvcm0gYXBwcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1VXUCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldFVBKCkuaW5kZXhPZignTVNBcHBIb3N0LycpID49IDA7XG59XG5cbi8qKlxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIGN1cnJlbnQgU0RLIGJ1aWxkIGlzIHRoZSBOb2RlIHZlcnNpb24uXG4gKlxuICogQHJldHVybiB0cnVlIGlmIGl0J3MgdGhlIE5vZGUgU0RLIGJ1aWxkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlU2RrKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gQ09OU1RBTlRTLk5PREVfQ0xJRU5UID09PSB0cnVlIHx8IENPTlNUQU5UUy5OT0RFX0FETUlOID09PSB0cnVlO1xufVxuXG4vKiogUmV0dXJucyB0cnVlIGlmIHdlIGFyZSBydW5uaW5nIGluIFNhZmFyaS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhZmFyaSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAhaXNOb2RlKCkgJiZcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdTYWZhcmknKSAmJlxuICAgICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdDaHJvbWUnKVxuICApO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XG4gKiBAcmV0dXJuIHRydWUgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbmRleGVkREJBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbmRleGVkREIgPT09ICdvYmplY3QnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgdmFsaWRhdGVzIGJyb3dzZXIvc3cgY29udGV4dCBmb3IgaW5kZXhlZERCIGJ5IG9wZW5pbmcgYSBkdW1teSBpbmRleGVkREIgZGF0YWJhc2UgYW5kIHJlamVjdFxuICogaWYgZXJyb3JzIG9jY3VyIGR1cmluZyB0aGUgZGF0YWJhc2Ugb3BlbiBvcGVyYXRpb24uXG4gKlxuICogQHRocm93cyBleGNlcHRpb24gaWYgY3VycmVudCBicm93c2VyL3N3IGNvbnRleHQgY2FuJ3QgcnVuIGlkYi5vcGVuIChleDogU2FmYXJpIGlmcmFtZSwgRmlyZWZveFxuICogcHJpdmF0ZSBicm93c2luZylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwcmVFeGlzdDogYm9vbGVhbiA9IHRydWU7XG4gICAgICBjb25zdCBEQl9DSEVDS19OQU1FID1cbiAgICAgICAgJ3ZhbGlkYXRlLWJyb3dzZXItY29udGV4dC1mb3ItaW5kZXhlZGRiLWFuYWx5dGljcy1tb2R1bGUnO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IHNlbGYuaW5kZXhlZERCLm9wZW4oREJfQ0hFQ0tfTkFNRSk7XG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgcmVxdWVzdC5yZXN1bHQuY2xvc2UoKTtcbiAgICAgICAgLy8gZGVsZXRlIGRhdGFiYXNlIG9ubHkgd2hlbiBpdCBkb2Vzbid0IHByZS1leGlzdFxuICAgICAgICBpZiAoIXByZUV4aXN0KSB7XG4gICAgICAgICAgc2VsZi5pbmRleGVkREIuZGVsZXRlRGF0YWJhc2UoREJfQ0hFQ0tfTkFNRSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH07XG4gICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgcHJlRXhpc3QgPSBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3I/Lm1lc3NhZ2UgfHwgJycpO1xuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqXG4gKiBUaGlzIG1ldGhvZCBjaGVja3Mgd2hldGhlciBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXG4gKiBAcmV0dXJuIHRydWUgaWYgY29va2llIGlzIGVuYWJsZWQgd2l0aGluIGN1cnJlbnQgYnJvd3NlclxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29va2llc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCAhbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIGBnbG9iYWxUaGlzYCBvYmplY3QuXG4gKiBAcmV0dXJucyB0aGUgYGdsb2JhbFRoaXNgIG9iamVjdCBmb3IgdGhlIGdpdmVuIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsKCk6IHR5cGVvZiBnbG9iYWxUaGlzIHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGdsb2JhbDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdC4nKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBiYXNlNjREZWNvZGUgfSBmcm9tICcuL2NyeXB0JztcbmltcG9ydCB7IGdldEdsb2JhbCB9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG4vKipcbiAqIEtleXMgZm9yIGV4cGVyaW1lbnRhbCBwcm9wZXJ0aWVzIG9uIHRoZSBgRmlyZWJhc2VEZWZhdWx0c2Agb2JqZWN0LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgdHlwZSBFeHBlcmltZW50YWxLZXkgPSAnYXV0aFRva2VuU3luY1VSTCcgfCAnYXV0aElkVG9rZW5NYXhBZ2UnO1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IGNhbiBiZSBpbmplY3RlZCBpbnRvIHRoZSBlbnZpcm9ubWVudCBhcyBfX0ZJUkVCQVNFX0RFRkFVTFRTX18sXG4gKiBlaXRoZXIgYXMgYSBwcm9wZXJ0eSBvZiBnbG9iYWxUaGlzLCBhIHNoZWxsIGVudmlyb25tZW50IHZhcmlhYmxlLCBvciBhXG4gKiBjb29raWUuXG4gKlxuICogVGhpcyBvYmplY3QgY2FuIGJlIHVzZWQgdG8gYXV0b21hdGljYWxseSBjb25maWd1cmUgYW5kIGluaXRpYWxpemVcbiAqIGEgRmlyZWJhc2UgYXBwIGFzIHdlbGwgYXMgYW55IGVtdWxhdG9ycy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlyZWJhc2VEZWZhdWx0cyB7XG4gIGNvbmZpZz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIGVtdWxhdG9ySG9zdHM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBfYXV0aFRva2VuU3luY1VSTD86IHN0cmluZztcbiAgX2F1dGhJZFRva2VuTWF4QWdlPzogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIE5lZWQgYHZhcmAgZm9yIHRoaXMgdG8gd29yay5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuICB2YXIgX19GSVJFQkFTRV9ERUZBVUxUU19fOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBnZXREZWZhdWx0c0Zyb21HbG9iYWwgPSAoKTogRmlyZWJhc2VEZWZhdWx0cyB8IHVuZGVmaW5lZCA9PlxuICBnZXRHbG9iYWwoKS5fX0ZJUkVCQVNFX0RFRkFVTFRTX187XG5cbi8qKlxuICogQXR0ZW1wdCB0byByZWFkIGRlZmF1bHRzIGZyb20gYSBKU09OIHN0cmluZyBwcm92aWRlZCB0b1xuICogcHJvY2Vzcy5lbnYuX19GSVJFQkFTRV9ERUZBVUxUU19fIG9yIGEgSlNPTiBmaWxlIHdob3NlIHBhdGggaXMgaW5cbiAqIHByb2Nlc3MuZW52Ll9fRklSRUJBU0VfREVGQVVMVFNfUEFUSF9fXG4gKi9cbmNvbnN0IGdldERlZmF1bHRzRnJvbUVudlZhcmlhYmxlID0gKCk6IEZpcmViYXNlRGVmYXVsdHMgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBwcm9jZXNzLmVudiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGVmYXVsdHNKc29uU3RyaW5nID0gcHJvY2Vzcy5lbnYuX19GSVJFQkFTRV9ERUZBVUxUU19fO1xuICBpZiAoZGVmYXVsdHNKc29uU3RyaW5nKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVmYXVsdHNKc29uU3RyaW5nKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RGVmYXVsdHNGcm9tQ29va2llID0gKCk6IEZpcmViYXNlRGVmYXVsdHMgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgbWF0Y2g7XG4gIHRyeSB7XG4gICAgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2goL19fRklSRUJBU0VfREVGQVVMVFNfXz0oW147XSspLyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBTb21lIGVudmlyb25tZW50cyBzdWNoIGFzIEFuZ3VsYXIgVW5pdmVyc2FsIFNTUiBoYXZlIGFcbiAgICAvLyBgZG9jdW1lbnRgIG9iamVjdCBidXQgZXJyb3Igb24gYWNjZXNzaW5nIGBkb2N1bWVudC5jb29raWVgLlxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkZWNvZGVkID0gbWF0Y2ggJiYgYmFzZTY0RGVjb2RlKG1hdGNoWzFdKTtcbiAgcmV0dXJuIGRlY29kZWQgJiYgSlNPTi5wYXJzZShkZWNvZGVkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0LiBJdCBjaGVja3MgaW4gb3JkZXI6XG4gKiAoMSkgaWYgc3VjaCBhbiBvYmplY3QgZXhpc3RzIGFzIGEgcHJvcGVydHkgb2YgYGdsb2JhbFRoaXNgXG4gKiAoMikgaWYgc3VjaCBhbiBvYmplY3Qgd2FzIHByb3ZpZGVkIG9uIGEgc2hlbGwgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAqICgzKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgaW4gYSBjb29raWVcbiAqL1xuY29uc3QgZ2V0RGVmYXVsdHMgPSAoKTogRmlyZWJhc2VEZWZhdWx0cyB8IHVuZGVmaW5lZCA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGdldERlZmF1bHRzRnJvbUdsb2JhbCgpIHx8XG4gICAgICBnZXREZWZhdWx0c0Zyb21FbnZWYXJpYWJsZSgpIHx8XG4gICAgICBnZXREZWZhdWx0c0Zyb21Db29raWUoKVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvKipcbiAgICAgKiBDYXRjaC1hbGwgZm9yIGJlaW5nIHVuYWJsZSB0byBnZXQgX19GSVJFQkFTRV9ERUZBVUxUU19fIGR1ZVxuICAgICAqIHRvIGFueSBlbnZpcm9ubWVudCBjYXNlIHdlIGhhdmUgbm90IGFjY291bnRlZCBmb3IuIExvZyB0b1xuICAgICAqIGluZm8gaW5zdGVhZCBvZiBzd2FsbG93aW5nIHNvIHdlIGNhbiBmaW5kIHRoZXNlIHVua25vd24gY2FzZXNcbiAgICAgKiBhbmQgYWRkIHBhdGhzIGZvciB0aGVtIGlmIG5lZWRlZC5cbiAgICAgKi9cbiAgICBjb25zb2xlLmluZm8oYFVuYWJsZSB0byBnZXQgX19GSVJFQkFTRV9ERUZBVUxUU19fIGR1ZSB0bzogJHtlfWApO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGVtdWxhdG9yIGhvc3Qgc3RvcmVkIGluIHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0XG4gKiBmb3IgdGhlIGdpdmVuIHByb2R1Y3QuXG4gKiBAcmV0dXJucyBhIFVSTCBob3N0IGZvcm1hdHRlZCBsaWtlIGAxMjcuMC4wLjE6OTk5OWAgb3IgYFs6OjFdOjQwMDBgIGlmIGF2YWlsYWJsZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdCA9IChcbiAgcHJvZHVjdE5hbWU6IHN0cmluZ1xuKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IGdldERlZmF1bHRzKCk/LmVtdWxhdG9ySG9zdHM/Lltwcm9kdWN0TmFtZV07XG5cbi8qKlxuICogUmV0dXJucyBlbXVsYXRvciBob3N0bmFtZSBhbmQgcG9ydCBzdG9yZWQgaW4gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3RcbiAqIGZvciB0aGUgZ2l2ZW4gcHJvZHVjdC5cbiAqIEByZXR1cm5zIGEgcGFpciBvZiBob3N0bmFtZSBhbmQgcG9ydCBsaWtlIGBbXCI6OjFcIiwgNDAwMF1gIGlmIGF2YWlsYWJsZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdG5hbWVBbmRQb3J0ID0gKFxuICBwcm9kdWN0TmFtZTogc3RyaW5nXG4pOiBbaG9zdG5hbWU6IHN0cmluZywgcG9ydDogbnVtYmVyXSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGhvc3QgPSBnZXREZWZhdWx0RW11bGF0b3JIb3N0KHByb2R1Y3ROYW1lKTtcbiAgaWYgKCFob3N0KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBzZXBhcmF0b3JJbmRleCA9IGhvc3QubGFzdEluZGV4T2YoJzonKTsgLy8gRmluZGluZyB0aGUgbGFzdCBzaW5jZSBJUHY2IGFkZHIgYWxzbyBoYXMgY29sb25zLlxuICBpZiAoc2VwYXJhdG9ySW5kZXggPD0gMCB8fCBzZXBhcmF0b3JJbmRleCArIDEgPT09IGhvc3QubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhvc3QgJHtob3N0fSB3aXRoIG5vIHNlcGFyYXRlIGhvc3RuYW1lIGFuZCBwb3J0IWApO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgY29uc3QgcG9ydCA9IHBhcnNlSW50KGhvc3Quc3Vic3RyaW5nKHNlcGFyYXRvckluZGV4ICsgMSksIDEwKTtcbiAgaWYgKGhvc3RbMF0gPT09ICdbJykge1xuICAgIC8vIEJyYWNrZXQtcXVvdGVkIGBbaXB2NmFkZHJdOnBvcnRgID0+IHJldHVybiBcImlwdjZhZGRyXCIgKHdpdGhvdXQgYnJhY2tldHMpLlxuICAgIHJldHVybiBbaG9zdC5zdWJzdHJpbmcoMSwgc2VwYXJhdG9ySW5kZXggLSAxKSwgcG9ydF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtob3N0LnN1YnN0cmluZygwLCBzZXBhcmF0b3JJbmRleCksIHBvcnRdO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgRmlyZWJhc2UgYXBwIGNvbmZpZyBzdG9yZWQgaW4gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3QuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QXBwQ29uZmlnID0gKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCB1bmRlZmluZWQgPT5cbiAgZ2V0RGVmYXVsdHMoKT8uY29uZmlnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gZXhwZXJpbWVudGFsIHNldHRpbmcgb24gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3QgKHByb3BlcnRpZXNcbiAqIHByZWZpeGVkIGJ5IFwiX1wiKVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZ2V0RXhwZXJpbWVudGFsU2V0dGluZyA9IDxUIGV4dGVuZHMgRXhwZXJpbWVudGFsS2V5PihcbiAgbmFtZTogVFxuKTogRmlyZWJhc2VEZWZhdWx0c1tgXyR7VH1gXSA9PlxuICBnZXREZWZhdWx0cygpPy5bYF8ke25hbWV9YF0gYXMgRmlyZWJhc2VEZWZhdWx0c1tgXyR7VH1gXTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgY2xhc3MgRGVmZXJyZWQ8Uj4ge1xuICBwcm9taXNlOiBQcm9taXNlPFI+O1xuICByZWplY3Q6ICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcmVzb2x2ZTogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlIGFzICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQ7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlamVjdCBhcyAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzZWlmaWVkIGFuZCBjYW5ub3QgYmVjYXVzZSBvdXIgY2FsbGJhY2sgQVBJcyBoYXZlIHN1YnRsZSBleHBlY3RhdGlvbnMgYXJvdW5kXG4gICAqIGludm9raW5nIHByb21pc2VzIGlubGluZSwgd2hpY2ggUHJvbWlzZXMgYXJlIGZvcmJpZGRlbiB0byBkby4gVGhpcyBtZXRob2QgYWNjZXB0cyBhbiBvcHRpb25hbCBub2RlLXN0eWxlIGNhbGxiYWNrXG4gICAqIGFuZCByZXR1cm5zIGEgbm9kZS1zdHlsZSBjYWxsYmFjayB3aGljaCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0IHRoZSBEZWZlcnJlZCdzIHByb21pc2UuXG4gICAqL1xuICB3cmFwQ2FsbGJhY2soXG4gICAgY2FsbGJhY2s/OiAoZXJyb3I/OiB1bmtub3duLCB2YWx1ZT86IHVua25vd24pID0+IHZvaWRcbiAgKTogKGVycm9yOiB1bmtub3duLCB2YWx1ZT86IHVua25vd24pID0+IHZvaWQge1xuICAgIHJldHVybiAoZXJyb3IsIHZhbHVlPykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRoaXMucmVqZWN0KGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEF0dGFjaGluZyBub29wIGhhbmRsZXIganVzdCBpbiBjYXNlIGRldmVsb3BlciB3YXNuJ3QgZXhwZWN0aW5nXG4gICAgICAgIC8vIHByb21pc2VzXG4gICAgICAgIHRoaXMucHJvbWlzZS5jYXRjaCgoKSA9PiB7fSk7XG5cbiAgICAgICAgLy8gU29tZSBvZiBvdXIgY2FsbGJhY2tzIGRvbid0IGV4cGVjdCBhIHZhbHVlIGFuZCBvdXIgb3duIHRlc3RzXG4gICAgICAgIC8vIGFzc2VydCB0aGF0IHRoZSBwYXJhbWV0ZXIgbGVuZ3RoIGlzIDFcbiAgICAgICAgaWYgKGNhbGxiYWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nIH0gZnJvbSAnLi9jcnlwdCc7XG5cbi8vIEZpcmViYXNlIEF1dGggdG9rZW5zIGNvbnRhaW4gc25ha2VfY2FzZSBjbGFpbXMgZm9sbG93aW5nIHRoZSBKV1Qgc3RhbmRhcmQgLyBjb252ZW50aW9uLlxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbmV4cG9ydCB0eXBlIEZpcmViYXNlU2lnbkluUHJvdmlkZXIgPVxuICB8ICdjdXN0b20nXG4gIHwgJ2VtYWlsJ1xuICB8ICdwYXNzd29yZCdcbiAgfCAncGhvbmUnXG4gIHwgJ2Fub255bW91cydcbiAgfCAnZ29vZ2xlLmNvbSdcbiAgfCAnZmFjZWJvb2suY29tJ1xuICB8ICdnaXRodWIuY29tJ1xuICB8ICd0d2l0dGVyLmNvbSdcbiAgfCAnbWljcm9zb2Z0LmNvbSdcbiAgfCAnYXBwbGUuY29tJztcblxuaW50ZXJmYWNlIEZpcmViYXNlSWRUb2tlbiB7XG4gIC8vIEFsd2F5cyBzZXQgdG8gaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL1BST0pFQ1RfSURcbiAgaXNzOiBzdHJpbmc7XG5cbiAgLy8gQWx3YXlzIHNldCB0byBQUk9KRUNUX0lEXG4gIGF1ZDogc3RyaW5nO1xuXG4gIC8vIFRoZSB1c2VyJ3MgdW5pcXVlIElEXG4gIHN1Yjogc3RyaW5nO1xuXG4gIC8vIFRoZSB0b2tlbiBpc3N1ZSB0aW1lLCBpbiBzZWNvbmRzIHNpbmNlIGVwb2NoXG4gIGlhdDogbnVtYmVyO1xuXG4gIC8vIFRoZSB0b2tlbiBleHBpcnkgdGltZSwgbm9ybWFsbHkgJ2lhdCcgKyAzNjAwXG4gIGV4cDogbnVtYmVyO1xuXG4gIC8vIFRoZSB1c2VyJ3MgdW5pcXVlIElELiBNdXN0IGJlIGVxdWFsIHRvICdzdWInXG4gIHVzZXJfaWQ6IHN0cmluZztcblxuICAvLyBUaGUgdGltZSB0aGUgdXNlciBhdXRoZW50aWNhdGVkLCBub3JtYWxseSAnaWF0J1xuICBhdXRoX3RpbWU6IG51bWJlcjtcblxuICAvLyBUaGUgc2lnbiBpbiBwcm92aWRlciwgb25seSBzZXQgd2hlbiB0aGUgcHJvdmlkZXIgaXMgJ2Fub255bW91cydcbiAgcHJvdmlkZXJfaWQ/OiAnYW5vbnltb3VzJztcblxuICAvLyBUaGUgdXNlcidzIHByaW1hcnkgZW1haWxcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgLy8gVGhlIHVzZXIncyBlbWFpbCB2ZXJpZmljYXRpb24gc3RhdHVzXG4gIGVtYWlsX3ZlcmlmaWVkPzogYm9vbGVhbjtcblxuICAvLyBUaGUgdXNlcidzIHByaW1hcnkgcGhvbmUgbnVtYmVyXG4gIHBob25lX251bWJlcj86IHN0cmluZztcblxuICAvLyBUaGUgdXNlcidzIGRpc3BsYXkgbmFtZVxuICBuYW1lPzogc3RyaW5nO1xuXG4gIC8vIFRoZSB1c2VyJ3MgcHJvZmlsZSBwaG90byBVUkxcbiAgcGljdHVyZT86IHN0cmluZztcblxuICAvLyBJbmZvcm1hdGlvbiBvbiBhbGwgaWRlbnRpdGllcyBsaW5rZWQgdG8gdGhpcyB1c2VyXG4gIGZpcmViYXNlOiB7XG4gICAgLy8gVGhlIHByaW1hcnkgc2lnbi1pbiBwcm92aWRlclxuICAgIHNpZ25faW5fcHJvdmlkZXI6IEZpcmViYXNlU2lnbkluUHJvdmlkZXI7XG5cbiAgICAvLyBBIG1hcCBvZiBwcm92aWRlcnMgdG8gdGhlIHVzZXIncyBsaXN0IG9mIHVuaXF1ZSBpZGVudGlmaWVycyBmcm9tXG4gICAgLy8gZWFjaCBwcm92aWRlclxuICAgIGlkZW50aXRpZXM/OiB7IFtwcm92aWRlciBpbiBGaXJlYmFzZVNpZ25JblByb3ZpZGVyXT86IHN0cmluZ1tdIH07XG4gIH07XG5cbiAgLy8gQ3VzdG9tIGNsYWltcyBzZXQgYnkgdGhlIGRldmVsb3BlclxuICBbY2xhaW06IHN0cmluZ106IHVua25vd247XG5cbiAgdWlkPzogbmV2ZXI7IC8vIFRyeSB0byBjYXRjaCBhIGNvbW1vbiBtaXN0YWtlIG9mIFwidWlkXCIgKHNob3VsZCBiZSBcInN1YlwiIGluc3RlYWQpLlxufVxuXG5leHBvcnQgdHlwZSBFbXVsYXRvck1vY2tUb2tlbk9wdGlvbnMgPSAoeyB1c2VyX2lkOiBzdHJpbmcgfSB8IHsgc3ViOiBzdHJpbmcgfSkgJlxuICBQYXJ0aWFsPEZpcmViYXNlSWRUb2tlbj47XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2NrVXNlclRva2VuKFxuICB0b2tlbjogRW11bGF0b3JNb2NrVG9rZW5PcHRpb25zLFxuICBwcm9qZWN0SWQ/OiBzdHJpbmdcbik6IHN0cmluZyB7XG4gIGlmICh0b2tlbi51aWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnVGhlIFwidWlkXCIgZmllbGQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBieSBtb2NrVXNlclRva2VuLiBQbGVhc2UgdXNlIFwic3ViXCIgaW5zdGVhZCBmb3IgRmlyZWJhc2UgQXV0aCBVc2VyIElELidcbiAgICApO1xuICB9XG4gIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSBcIm5vbmVcIiBhcyB0aGUgYWxnb3JpdGhtLlxuICBjb25zdCBoZWFkZXIgPSB7XG4gICAgYWxnOiAnbm9uZScsXG4gICAgdHlwZTogJ0pXVCdcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdElkIHx8ICdkZW1vLXByb2plY3QnO1xuICBjb25zdCBpYXQgPSB0b2tlbi5pYXQgfHwgMDtcbiAgY29uc3Qgc3ViID0gdG9rZW4uc3ViIHx8IHRva2VuLnVzZXJfaWQ7XG4gIGlmICghc3ViKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibW9ja1VzZXJUb2tlbiBtdXN0IGNvbnRhaW4gJ3N1Yicgb3IgJ3VzZXJfaWQnIGZpZWxkIVwiKTtcbiAgfVxuXG4gIGNvbnN0IHBheWxvYWQ6IEZpcmViYXNlSWRUb2tlbiA9IHtcbiAgICAvLyBTZXQgYWxsIHJlcXVpcmVkIGZpZWxkcyB0byBkZWNlbnQgZGVmYXVsdHNcbiAgICBpc3M6IGBodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vJHtwcm9qZWN0fWAsXG4gICAgYXVkOiBwcm9qZWN0LFxuICAgIGlhdCxcbiAgICBleHA6IGlhdCArIDM2MDAsXG4gICAgYXV0aF90aW1lOiBpYXQsXG4gICAgc3ViLFxuICAgIHVzZXJfaWQ6IHN1YixcbiAgICBmaXJlYmFzZToge1xuICAgICAgc2lnbl9pbl9wcm92aWRlcjogJ2N1c3RvbScsXG4gICAgICBpZGVudGl0aWVzOiB7fVxuICAgIH0sXG5cbiAgICAvLyBPdmVycmlkZSB3aXRoIHVzZXIgb3B0aW9uc1xuICAgIC4uLnRva2VuXG4gIH07XG5cbiAgLy8gVW5zZWN1cmVkIEpXVHMgdXNlIHRoZSBlbXB0eSBzdHJpbmcgYXMgYSBzaWduYXR1cmUuXG4gIGNvbnN0IHNpZ25hdHVyZSA9ICcnO1xuICByZXR1cm4gW1xuICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpLFxuICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKSxcbiAgICBzaWduYXR1cmVcbiAgXS5qb2luKCcuJyk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBTdGFuZGFyZGl6ZWQgRmlyZWJhc2UgRXJyb3IuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogICAvLyBUeXBlc2NyaXB0IHN0cmluZyBsaXRlcmFscyBmb3IgdHlwZS1zYWZlIGNvZGVzXG4gKiAgIHR5cGUgRXJyID1cbiAqICAgICAndW5rbm93bicgfFxuICogICAgICdvYmplY3Qtbm90LWZvdW5kJ1xuICogICAgIDtcbiAqXG4gKiAgIC8vIENsb3N1cmUgZW51bSBmb3IgdHlwZS1zYWZlIGVycm9yIGNvZGVzXG4gKiAgIC8vIGF0LWVudW0ge3N0cmluZ31cbiAqICAgdmFyIEVyciA9IHtcbiAqICAgICBVTktOT1dOOiAndW5rbm93bicsXG4gKiAgICAgT0JKRUNUX05PVF9GT1VORDogJ29iamVjdC1ub3QtZm91bmQnLFxuICogICB9XG4gKlxuICogICBsZXQgZXJyb3JzOiBNYXA8RXJyLCBzdHJpbmc+ID0ge1xuICogICAgICdnZW5lcmljLWVycm9yJzogXCJVbmtub3duIGVycm9yXCIsXG4gKiAgICAgJ2ZpbGUtbm90LWZvdW5kJzogXCJDb3VsZCBub3QgZmluZCBmaWxlOiB7JGZpbGV9XCIsXG4gKiAgIH07XG4gKlxuICogICAvLyBUeXBlLXNhZmUgZnVuY3Rpb24gLSBtdXN0IHBhc3MgYSB2YWxpZCBlcnJvciBjb2RlIGFzIHBhcmFtLlxuICogICBsZXQgZXJyb3IgPSBuZXcgRXJyb3JGYWN0b3J5PEVycj4oJ3NlcnZpY2UnLCAnU2VydmljZScsIGVycm9ycyk7XG4gKlxuICogICAuLi5cbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5HRU5FUklDKTtcbiAqICAgLi4uXG4gKiAgIHRocm93IGVycm9yLmNyZWF0ZShFcnIuRklMRV9OT1RfRk9VTkQsIHsnZmlsZSc6IGZpbGVOYW1lfSk7XG4gKiAgIC4uLlxuICogICAvLyBTZXJ2aWNlOiBDb3VsZCBub3QgZmlsZSBmaWxlOiBmb28udHh0IChzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kKS5cbiAqXG4gKiAgIGNhdGNoIChlKSB7XG4gKiAgICAgYXNzZXJ0KGUubWVzc2FnZSA9PT0gXCJDb3VsZCBub3QgZmluZCBmaWxlOiBmb28udHh0LlwiKTtcbiAqICAgICBpZiAoKGUgYXMgRmlyZWJhc2VFcnJvcik/LmNvZGUgPT09ICdzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kJykge1xuICogICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgcmVhZCBmaWxlOiBcIiArIGVbJ2ZpbGUnXSk7XG4gKiAgICAgfVxuICogICB9XG4gKi9cblxuZXhwb3J0IHR5cGUgRXJyb3JNYXA8RXJyb3JDb2RlIGV4dGVuZHMgc3RyaW5nPiA9IHtcbiAgcmVhZG9ubHkgW0sgaW4gRXJyb3JDb2RlXTogc3RyaW5nO1xufTtcblxuY29uc3QgRVJST1JfTkFNRSA9ICdGaXJlYmFzZUVycm9yJztcblxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdMaWtlIHtcbiAgdG9TdHJpbmcoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbi8vIEJhc2VkIG9uIGNvZGUgZnJvbTpcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yI0N1c3RvbV9FcnJvcl9UeXBlc1xuZXhwb3J0IGNsYXNzIEZpcmViYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKiBUaGUgY3VzdG9tIG5hbWUgZm9yIGFsbCBGaXJlYmFzZUVycm9ycy4gKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gRVJST1JfTkFNRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvKiogVGhlIGVycm9yIGNvZGUgZm9yIHRoaXMgZXJyb3IuICovXG4gICAgcmVhZG9ubHkgY29kZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICAvKiogQ3VzdG9tIGRhdGEgZm9yIHRoaXMgZXJyb3IuICovXG4gICAgcHVibGljIGN1c3RvbURhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICApIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIC8vIEZpeCBGb3IgRVM1XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0LXdpa2kvYmxvYi9tYXN0ZXIvQnJlYWtpbmctQ2hhbmdlcy5tZCNleHRlbmRpbmctYnVpbHQtaW5zLWxpa2UtZXJyb3ItYXJyYXktYW5kLW1hcC1tYXktbm8tbG9uZ2VyLXdvcmtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgRmlyZWJhc2VFcnJvci5wcm90b3R5cGUpO1xuXG4gICAgLy8gTWFpbnRhaW5zIHByb3BlciBzdGFjayB0cmFjZSBmb3Igd2hlcmUgb3VyIGVycm9yIHdhcyB0aHJvd24uXG4gICAgLy8gT25seSBhdmFpbGFibGUgb24gVjguXG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFcnJvckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFcnJvckZhY3Rvcnk8XG4gIEVycm9yQ29kZSBleHRlbmRzIHN0cmluZyxcbiAgRXJyb3JQYXJhbXMgZXh0ZW5kcyB7IHJlYWRvbmx5IFtLIGluIEVycm9yQ29kZV0/OiBFcnJvckRhdGEgfSA9IHt9XG4+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZXJ2aWNlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXJyb3JzOiBFcnJvck1hcDxFcnJvckNvZGU+XG4gICkge31cblxuICBjcmVhdGU8SyBleHRlbmRzIEVycm9yQ29kZT4oXG4gICAgY29kZTogSyxcbiAgICAuLi5kYXRhOiBLIGV4dGVuZHMga2V5b2YgRXJyb3JQYXJhbXMgPyBbRXJyb3JQYXJhbXNbS11dIDogW11cbiAgKTogRmlyZWJhc2VFcnJvciB7XG4gICAgY29uc3QgY3VzdG9tRGF0YSA9IChkYXRhWzBdIGFzIEVycm9yRGF0YSkgfHwge307XG4gICAgY29uc3QgZnVsbENvZGUgPSBgJHt0aGlzLnNlcnZpY2V9LyR7Y29kZX1gO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5lcnJvcnNbY29kZV07XG5cbiAgICBjb25zdCBtZXNzYWdlID0gdGVtcGxhdGUgPyByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGUsIGN1c3RvbURhdGEpIDogJ0Vycm9yJztcbiAgICAvLyBTZXJ2aWNlIE5hbWU6IEVycm9yIG1lc3NhZ2UgKHNlcnZpY2UvY29kZSkuXG4gICAgY29uc3QgZnVsbE1lc3NhZ2UgPSBgJHt0aGlzLnNlcnZpY2VOYW1lfTogJHttZXNzYWdlfSAoJHtmdWxsQ29kZX0pLmA7XG5cbiAgICBjb25zdCBlcnJvciA9IG5ldyBGaXJlYmFzZUVycm9yKGZ1bGxDb2RlLCBmdWxsTWVzc2FnZSwgY3VzdG9tRGF0YSk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcsIGRhdGE6IEVycm9yRGF0YSk6IHN0cmluZyB7XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKFBBVFRFUk4sIChfLCBrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IFN0cmluZyh2YWx1ZSkgOiBgPCR7a2V5fT8+YDtcbiAgfSk7XG59XG5cbmNvbnN0IFBBVFRFUk4gPSAvXFx7XFwkKFtefV0rKX0vZztcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEV2YWx1YXRlcyBhIEpTT04gc3RyaW5nIGludG8gYSBqYXZhc2NyaXB0IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIEEgc3RyaW5nIGNvbnRhaW5pbmcgSlNPTi5cbiAqIEByZXR1cm4geyp9IFRoZSBqYXZhc2NyaXB0IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBKU09OLlxuICovXG5leHBvcnQgZnVuY3Rpb24ganNvbkV2YWwoc3RyOiBzdHJpbmcpOiB1bmtub3duIHtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIEpTT04gcmVwcmVzZW50aW5nIGEgamF2YXNjcmlwdCBvYmplY3QuXG4gKiBAcGFyYW0geyp9IGRhdGEgSmF2YXNjcmlwdCBvYmplY3QgdG8gYmUgc3RyaW5naWZpZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBKU09OIGNvbnRlbnRzIG9mIHRoZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkoZGF0YTogdW5rbm93bik6IHN0cmluZyB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBiYXNlNjREZWNvZGUgfSBmcm9tICcuL2NyeXB0JztcbmltcG9ydCB7IGpzb25FdmFsIH0gZnJvbSAnLi9qc29uJztcblxuaW50ZXJmYWNlIENsYWltcyB7XG4gIFtrZXk6IHN0cmluZ106IHt9O1xufVxuXG5pbnRlcmZhY2UgRGVjb2RlZFRva2VuIHtcbiAgaGVhZGVyOiBvYmplY3Q7XG4gIGNsYWltczogQ2xhaW1zO1xuICBkYXRhOiBvYmplY3Q7XG4gIHNpZ25hdHVyZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBpbnRvIGNvbnN0aXR1ZW50IHBhcnRzLlxuICpcbiAqIE5vdGVzOlxuICogLSBNYXkgcmV0dXJuIHdpdGggaW52YWxpZCAvIGluY29tcGxldGUgY2xhaW1zIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlY29kZSA9IGZ1bmN0aW9uICh0b2tlbjogc3RyaW5nKTogRGVjb2RlZFRva2VuIHtcbiAgbGV0IGhlYWRlciA9IHt9LFxuICAgIGNsYWltczogQ2xhaW1zID0ge30sXG4gICAgZGF0YSA9IHt9LFxuICAgIHNpZ25hdHVyZSA9ICcnO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcGFydHMgPSB0b2tlbi5zcGxpdCgnLicpO1xuICAgIGhlYWRlciA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1swXSkgfHwgJycpIGFzIG9iamVjdDtcbiAgICBjbGFpbXMgPSBqc29uRXZhbChiYXNlNjREZWNvZGUocGFydHNbMV0pIHx8ICcnKSBhcyBDbGFpbXM7XG4gICAgc2lnbmF0dXJlID0gcGFydHNbMl07XG4gICAgZGF0YSA9IGNsYWltc1snZCddIHx8IHt9O1xuICAgIGRlbGV0ZSBjbGFpbXNbJ2QnXTtcbiAgfSBjYXRjaCAoZSkge31cblxuICByZXR1cm4ge1xuICAgIGhlYWRlcixcbiAgICBjbGFpbXMsXG4gICAgZGF0YSxcbiAgICBzaWduYXR1cmVcbiAgfTtcbn07XG5cbmludGVyZmFjZSBEZWNvZGVkVG9rZW4ge1xuICBoZWFkZXI6IG9iamVjdDtcbiAgY2xhaW1zOiBDbGFpbXM7XG4gIGRhdGE6IG9iamVjdDtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyB0aW1lLWJhc2VkIGNsYWltcy4gV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGVcbiAqIHRva2VuIGlzIHdpdGhpbiB0aGUgdGltZSB3aW5kb3cgYXV0aG9yaXplZCBieSB0aGUgJ25iZicgKG5vdC1iZWZvcmUpIGFuZCAnaWF0JyAoaXNzdWVkLWF0KSBjbGFpbXMuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkVGltZXN0YW1wID0gZnVuY3Rpb24gKHRva2VuOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgY2xhaW1zOiBDbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcbiAgY29uc3Qgbm93OiBudW1iZXIgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gIGxldCB2YWxpZFNpbmNlOiBudW1iZXIgPSAwLFxuICAgIHZhbGlkVW50aWw6IG51bWJlciA9IDA7XG5cbiAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnbmJmJykpIHtcbiAgICAgIHZhbGlkU2luY2UgPSBjbGFpbXNbJ25iZiddIGFzIG51bWJlcjtcbiAgICB9IGVsc2UgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0JykpIHtcbiAgICAgIHZhbGlkU2luY2UgPSBjbGFpbXNbJ2lhdCddIGFzIG51bWJlcjtcbiAgICB9XG5cbiAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdleHAnKSkge1xuICAgICAgdmFsaWRVbnRpbCA9IGNsYWltc1snZXhwJ10gYXMgbnVtYmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0b2tlbiB3aWxsIGV4cGlyZSBhZnRlciAyNGggYnkgZGVmYXVsdFxuICAgICAgdmFsaWRVbnRpbCA9IHZhbGlkU2luY2UgKyA4NjQwMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgICEhbm93ICYmXG4gICAgISF2YWxpZFNpbmNlICYmXG4gICAgISF2YWxpZFVudGlsICYmXG4gICAgbm93ID49IHZhbGlkU2luY2UgJiZcbiAgICBub3cgPD0gdmFsaWRVbnRpbFxuICApO1xufTtcblxuLyoqXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIHJldHVybnMgaXRzIGlzc3VlZCBhdCB0aW1lIGlmIHZhbGlkLCBudWxsIG90aGVyd2lzZS5cbiAqXG4gKiBOb3RlczpcbiAqIC0gTWF5IHJldHVybiBudWxsIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzc3VlZEF0VGltZSA9IGZ1bmN0aW9uICh0b2tlbjogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gIGNvbnN0IGNsYWltczogQ2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XG4gIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XG4gICAgcmV0dXJuIGNsYWltc1snaWF0J10gYXMgbnVtYmVyO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIGZvcm1hdC4gRXhwZWN0cyBhIHZhbGlkIGlzc3VlZC1hdCB0aW1lLlxuICpcbiAqIE5vdGVzOlxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZEZvcm1hdCA9IGZ1bmN0aW9uICh0b2tlbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRlY29kZWQgPSBkZWNvZGUodG9rZW4pLFxuICAgIGNsYWltcyA9IGRlY29kZWQuY2xhaW1zO1xuXG4gIHJldHVybiAhIWNsYWltcyAmJiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpO1xufTtcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBwZWVyIGludG8gYW4gYXV0aCB0b2tlbiBhbmQgZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWRtaW4gYXV0aCB0b2tlbiBieSBsb29raW5nIGF0IHRoZSBjbGFpbXMgcG9ydGlvbi5cbiAqXG4gKiBOb3RlczpcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQWRtaW4gPSBmdW5jdGlvbiAodG9rZW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBjbGFpbXM6IENsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xuICByZXR1cm4gdHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zWydhZG1pbiddID09PSB0cnVlO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnM8VCBleHRlbmRzIG9iamVjdD4ob2JqOiBULCBrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVHZXQ8VCBleHRlbmRzIG9iamVjdCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuICBvYmo6IFQsXG4gIGtleTogS1xuKTogVFtLXSB8IHVuZGVmaW5lZCB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqOiBvYmplY3QpOiBvYmogaXMge30ge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxLIGV4dGVuZHMgc3RyaW5nLCBWLCBVPihcbiAgb2JqOiB7IFtrZXkgaW4gS106IFYgfSxcbiAgZm46ICh2YWx1ZTogViwga2V5OiBLLCBvYmo6IHsgW2tleSBpbiBLXTogViB9KSA9PiBVLFxuICBjb250ZXh0T2JqPzogdW5rbm93blxuKTogeyBba2V5IGluIEtdOiBVIH0ge1xuICBjb25zdCByZXM6IFBhcnRpYWw8eyBba2V5IGluIEtdOiBVIH0+ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGZuLmNhbGwoY29udGV4dE9iaiwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcyBhcyB7IFtrZXkgaW4gS106IFUgfTtcbn1cblxuLyoqXG4gKiBEZWVwIGVxdWFsIHR3byBvYmplY3RzLiBTdXBwb3J0IEFycmF5cyBhbmQgT2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbChhOiBvYmplY3QsIGI6IG9iamVjdCk6IGJvb2xlYW4ge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgZm9yIChjb25zdCBrIG9mIGFLZXlzKSB7XG4gICAgaWYgKCFiS2V5cy5pbmNsdWRlcyhrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGFQcm9wID0gKGEgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICAgIGNvbnN0IGJQcm9wID0gKGIgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW2tdO1xuICAgIGlmIChpc09iamVjdChhUHJvcCkgJiYgaXNPYmplY3QoYlByb3ApKSB7XG4gICAgICBpZiAoIWRlZXBFcXVhbChhUHJvcCwgYlByb3ApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFQcm9wICE9PSBiUHJvcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgayBvZiBiS2V5cykge1xuICAgIGlmICghYUtleXMuaW5jbHVkZXMoaykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nOiB1bmtub3duKTogdGhpbmcgaXMgb2JqZWN0IHtcbiAgcmV0dXJuIHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICcuL2RlZmVycmVkJztcblxuLyoqXG4gKiBSZWplY3RzIGlmIHRoZSBnaXZlbiBwcm9taXNlIGRvZXNuJ3QgcmVzb2x2ZSBpbiB0aW1lSW5NUyBtaWxsaXNlY29uZHMuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcHJvbWlzZTogUHJvbWlzZTxUPixcbiAgdGltZUluTVMgPSAyMDAwXG4pOiBQcm9taXNlPFQ+IHtcbiAgY29uc3QgZGVmZXJyZWRQcm9taXNlID0gbmV3IERlZmVycmVkPFQ+KCk7XG4gIHNldFRpbWVvdXQoKCkgPT4gZGVmZXJyZWRQcm9taXNlLnJlamVjdCgndGltZW91dCEnKSwgdGltZUluTVMpO1xuICBwcm9taXNlLnRoZW4oZGVmZXJyZWRQcm9taXNlLnJlc29sdmUsIGRlZmVycmVkUHJvbWlzZS5yZWplY3QpO1xuICByZXR1cm4gZGVmZXJyZWRQcm9taXNlLnByb21pc2U7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgcXVlcnlzdHJpbmctZm9ybWF0dGVkIHN0cmluZyAoZS5nLiAmYXJnPXZhbCZhcmcyPXZhbDIpIGZyb20gYVxuICogcGFyYW1zIG9iamVjdCAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcbiAqIE5vdGU6IFlvdSBtdXN0IHByZXBlbmQgaXQgd2l0aCA/IHdoZW4gYWRkaW5nIGl0IHRvIGEgVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlzdHJpbmcocXVlcnlzdHJpbmdQYXJhbXM6IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xufSk6IHN0cmluZyB7XG4gIGNvbnN0IHBhcmFtcyA9IFtdO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhxdWVyeXN0cmluZ1BhcmFtcykpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goYXJyYXlWYWwgPT4ge1xuICAgICAgICBwYXJhbXMucHVzaChcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChhcnJheVZhbClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyYW1zLmxlbmd0aCA/ICcmJyArIHBhcmFtcy5qb2luKCcmJykgOiAnJztcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgcXVlcnlzdHJpbmcgKGUuZy4gP2FyZz12YWwmYXJnMj12YWwyKSBpbnRvIGEgcGFyYW1zIG9iamVjdFxuICogKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeXN0cmluZ0RlY29kZShxdWVyeXN0cmluZzogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gIGNvbnN0IG9iajogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBjb25zdCB0b2tlbnMgPSBxdWVyeXN0cmluZy5yZXBsYWNlKC9eXFw/LywgJycpLnNwbGl0KCcmJyk7XG5cbiAgdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuICAgIGlmICh0b2tlbikge1xuICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gdG9rZW4uc3BsaXQoJz0nKTtcbiAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQoa2V5KV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogRXh0cmFjdCB0aGUgcXVlcnkgc3RyaW5nIHBhcnQgb2YgYSBVUkwsIGluY2x1ZGluZyB0aGUgbGVhZGluZyBxdWVzdGlvbiBtYXJrIChpZiBwcmVzZW50KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RRdWVyeXN0cmluZyh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHF1ZXJ5U3RhcnQgPSB1cmwuaW5kZXhPZignPycpO1xuICBpZiAoIXF1ZXJ5U3RhcnQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgZnJhZ21lbnRTdGFydCA9IHVybC5pbmRleE9mKCcjJywgcXVlcnlTdGFydCk7XG4gIHJldHVybiB1cmwuc3Vic3RyaW5nKFxuICAgIHF1ZXJ5U3RhcnQsXG4gICAgZnJhZ21lbnRTdGFydCA+IDAgPyBmcmFnbWVudFN0YXJ0IDogdW5kZWZpbmVkXG4gICk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaC5cbiAqIFZhcmlhYmxlIG5hbWVzIGZvbGxvdyB0aGUgbm90YXRpb24gaW4gRklQUyBQVUIgMTgwLTM6XG4gKiBodHRwOi8vY3NyYy5uaXN0Lmdvdi9wdWJsaWNhdGlvbnMvZmlwcy9maXBzMTgwLTMvZmlwczE4MC0zX2ZpbmFsLnBkZi5cbiAqXG4gKiBVc2FnZTpcbiAqICAgdmFyIHNoYTEgPSBuZXcgc2hhMSgpO1xuICogICBzaGExLnVwZGF0ZShieXRlcyk7XG4gKiAgIHZhciBoYXNoID0gc2hhMS5kaWdlc3QoKTtcbiAqXG4gKiBQZXJmb3JtYW5jZTpcbiAqICAgQ2hyb21lIDIzOiAgIH40MDAgTWJpdC9zXG4gKiAgIEZpcmVmb3ggMTY6ICB+MjUwIE1iaXQvc1xuICpcbiAqL1xuXG4vKipcbiAqIFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBUaGUgcHJvcGVydGllcyBkZWNsYXJlZCBoZXJlIGFyZSBkaXNjdXNzZWQgaW4gdGhlIGFib3ZlIGFsZ29yaXRobSBkb2N1bWVudC5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGZpbmFsXG4gKiBAc3RydWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBTaGExIHtcbiAgLyoqXG4gICAqIEhvbGRzIHRoZSBwcmV2aW91cyB2YWx1ZXMgb2YgYWNjdW11bGF0ZWQgdmFyaWFibGVzIGEtZSBpbiB0aGUgY29tcHJlc3NfXG4gICAqIGZ1bmN0aW9uLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBjaGFpbl86IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEEgYnVmZmVyIGhvbGRpbmcgdGhlIHBhcnRpYWxseSBjb21wdXRlZCBoYXNoIHJlc3VsdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgYnVmXzogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgODAgYnl0ZXMsIGVhY2ggYSBwYXJ0IG9mIHRoZSBtZXNzYWdlIHRvIGJlIGhhc2hlZC4gIFJlZmVycmVkIHRvXG4gICAqIGFzIHRoZSBtZXNzYWdlIHNjaGVkdWxlIGluIHRoZSBkb2NzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBXXzogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQ29udGFpbnMgZGF0YSBuZWVkZWQgdG8gcGFkIG1lc3NhZ2VzIGxlc3MgdGhhbiA2NCBieXRlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgcGFkXzogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQHByaXZhdGUge251bWJlcn1cbiAgICovXG4gIHByaXZhdGUgaW5idWZfOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgKi9cbiAgcHJpdmF0ZSB0b3RhbF86IG51bWJlciA9IDA7XG5cbiAgYmxvY2tTaXplOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ibG9ja1NpemUgPSA1MTIgLyA4O1xuXG4gICAgdGhpcy5wYWRfWzBdID0gMTI4O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5ibG9ja1NpemU7ICsraSkge1xuICAgICAgdGhpcy5wYWRfW2ldID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYWluX1swXSA9IDB4Njc0NTIzMDE7XG4gICAgdGhpcy5jaGFpbl9bMV0gPSAweGVmY2RhYjg5O1xuICAgIHRoaXMuY2hhaW5fWzJdID0gMHg5OGJhZGNmZTtcbiAgICB0aGlzLmNoYWluX1szXSA9IDB4MTAzMjU0NzY7XG4gICAgdGhpcy5jaGFpbl9bNF0gPSAweGMzZDJlMWYwO1xuXG4gICAgdGhpcy5pbmJ1Zl8gPSAwO1xuICAgIHRoaXMudG90YWxfID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBjb21wcmVzcyBoZWxwZXIgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBidWYgQmxvY2sgdG8gY29tcHJlc3MuXG4gICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IG9mIHRoZSBibG9jayBpbiB0aGUgYnVmZmVyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29tcHJlc3NfKGJ1ZjogbnVtYmVyW10gfCBVaW50OEFycmF5IHwgc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBjb25zdCBXID0gdGhpcy5XXztcblxuICAgIC8vIGdldCAxNiBiaWcgZW5kaWFuIHdvcmRzXG4gICAgaWYgKHR5cGVvZiBidWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgLy8gVE9ETyh1c2VyKTogW2J1ZyA4MTQwMTIyXSBSZWNlbnQgdmVyc2lvbnMgb2YgU2FmYXJpIGZvciBNYWMgT1MgYW5kIGlPU1xuICAgICAgICAvLyBoYXZlIGEgYnVnIHRoYXQgdHVybnMgdGhlIHBvc3QtaW5jcmVtZW50ICsrIG9wZXJhdG9yIGludG8gcHJlLWluY3JlbWVudFxuICAgICAgICAvLyBkdXJpbmcgSklUIGNvbXBpbGF0aW9uLiAgV2UgaGF2ZSBjb2RlIHRoYXQgZGVwZW5kcyBoZWF2aWx5IG9uIFNIQS0xIGZvclxuICAgICAgICAvLyBjb3JyZWN0bmVzcyBhbmQgd2hpY2ggaXMgYWZmZWN0ZWQgYnkgdGhpcyBidWcsIHNvIEkndmUgcmVtb3ZlZCBhbGwgdXNlc1xuICAgICAgICAvLyBvZiBwb3N0LWluY3JlbWVudCArKyBpbiB3aGljaCB0aGUgcmVzdWx0IHZhbHVlIGlzIHVzZWQuICBXZSBjYW4gcmV2ZXJ0XG4gICAgICAgIC8vIHRoaXMgY2hhbmdlIG9uY2UgdGhlIFNhZmFyaSBidWdcbiAgICAgICAgLy8gKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDkwMzYpIGhhcyBiZWVuIGZpeGVkIGFuZFxuICAgICAgICAvLyBtb3N0IGNsaWVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXG4gICAgICAgIFdbaV0gPVxuICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQpIDw8IDI0KSB8XG4gICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDEpIDw8IDE2KSB8XG4gICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDIpIDw8IDgpIHxcbiAgICAgICAgICBidWYuY2hhckNvZGVBdChvZmZzZXQgKyAzKTtcbiAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBXW2ldID1cbiAgICAgICAgICAoYnVmW29mZnNldF0gPDwgMjQpIHxcbiAgICAgICAgICAoYnVmW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAgICAgKGJ1ZltvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICAgICAgYnVmW29mZnNldCArIDNdO1xuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBleHBhbmQgdG8gODAgd29yZHNcbiAgICBmb3IgKGxldCBpID0gMTY7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gV1tpIC0gM10gXiBXW2kgLSA4XSBeIFdbaSAtIDE0XSBeIFdbaSAtIDE2XTtcbiAgICAgIFdbaV0gPSAoKHQgPDwgMSkgfCAodCA+Pj4gMzEpKSAmIDB4ZmZmZmZmZmY7XG4gICAgfVxuXG4gICAgbGV0IGEgPSB0aGlzLmNoYWluX1swXTtcbiAgICBsZXQgYiA9IHRoaXMuY2hhaW5fWzFdO1xuICAgIGxldCBjID0gdGhpcy5jaGFpbl9bMl07XG4gICAgbGV0IGQgPSB0aGlzLmNoYWluX1szXTtcbiAgICBsZXQgZSA9IHRoaXMuY2hhaW5fWzRdO1xuICAgIGxldCBmLCBrO1xuXG4gICAgLy8gVE9ETyh1c2VyKTogVHJ5IHRvIHVucm9sbCB0aGlzIGxvb3AgdG8gc3BlZWQgdXAgdGhlIGNvbXB1dGF0aW9uLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xuICAgICAgaWYgKGkgPCA0MCkge1xuICAgICAgICBpZiAoaSA8IDIwKSB7XG4gICAgICAgICAgZiA9IGQgXiAoYiAmIChjIF4gZCkpO1xuICAgICAgICAgIGsgPSAweDVhODI3OTk5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGYgPSBiIF4gYyBeIGQ7XG4gICAgICAgICAgayA9IDB4NmVkOWViYTE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpIDwgNjApIHtcbiAgICAgICAgICBmID0gKGIgJiBjKSB8IChkICYgKGIgfCBjKSk7XG4gICAgICAgICAgayA9IDB4OGYxYmJjZGM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZiA9IGIgXiBjIF4gZDtcbiAgICAgICAgICBrID0gMHhjYTYyYzFkNjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0ID0gKCgoYSA8PCA1KSB8IChhID4+PiAyNykpICsgZiArIGUgKyBrICsgV1tpXSkgJiAweGZmZmZmZmZmO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSAoKGIgPDwgMzApIHwgKGIgPj4+IDIpKSAmIDB4ZmZmZmZmZmY7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSB0O1xuICAgIH1cblxuICAgIHRoaXMuY2hhaW5fWzBdID0gKHRoaXMuY2hhaW5fWzBdICsgYSkgJiAweGZmZmZmZmZmO1xuICAgIHRoaXMuY2hhaW5fWzFdID0gKHRoaXMuY2hhaW5fWzFdICsgYikgJiAweGZmZmZmZmZmO1xuICAgIHRoaXMuY2hhaW5fWzJdID0gKHRoaXMuY2hhaW5fWzJdICsgYykgJiAweGZmZmZmZmZmO1xuICAgIHRoaXMuY2hhaW5fWzNdID0gKHRoaXMuY2hhaW5fWzNdICsgZCkgJiAweGZmZmZmZmZmO1xuICAgIHRoaXMuY2hhaW5fWzRdID0gKHRoaXMuY2hhaW5fWzRdICsgZSkgJiAweGZmZmZmZmZmO1xuICB9XG5cbiAgdXBkYXRlKGJ5dGVzPzogbnVtYmVyW10gfCBVaW50OEFycmF5IHwgc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBUT0RPKGpvaG5sZW56KTogdGlnaHRlbiB0aGUgZnVuY3Rpb24gc2lnbmF0dXJlIGFuZCByZW1vdmUgdGhpcyBjaGVja1xuICAgIGlmIChieXRlcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZW5ndGggPSBieXRlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29uc3QgbGVuZ3RoTWludXNCbG9jayA9IGxlbmd0aCAtIHRoaXMuYmxvY2tTaXplO1xuICAgIGxldCBuID0gMDtcbiAgICAvLyBVc2luZyBsb2NhbCBpbnN0ZWFkIG9mIG1lbWJlciB2YXJpYWJsZXMgZ2l2ZXMgfjUlIHNwZWVkdXAgb24gRmlyZWZveCAxNi5cbiAgICBjb25zdCBidWYgPSB0aGlzLmJ1Zl87XG4gICAgbGV0IGluYnVmID0gdGhpcy5pbmJ1Zl87XG5cbiAgICAvLyBUaGUgb3V0ZXIgd2hpbGUgbG9vcCBzaG91bGQgZXhlY3V0ZSBhdCBtb3N0IHR3aWNlLlxuICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XG4gICAgICAvLyBXaGVuIHdlIGhhdmUgbm8gZGF0YSBpbiB0aGUgYmxvY2sgdG8gdG9wIHVwLCB3ZSBjYW4gZGlyZWN0bHkgcHJvY2VzcyB0aGVcbiAgICAgIC8vIGlucHV0IGJ1ZmZlciAoYXNzdW1pbmcgaXQgY29udGFpbnMgc3VmZmljaWVudCBkYXRhKS4gVGhpcyBnaXZlcyB+MjUlXG4gICAgICAvLyBzcGVlZHVwIG9uIENocm9tZSAyMyBhbmQgfjE1JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYsIGJ1dCByZXF1aXJlcyB0aGF0XG4gICAgICAvLyB0aGUgZGF0YSBpcyBwcm92aWRlZCBpbiBsYXJnZSBjaHVua3MgKG9yIGluIG11bHRpcGxlcyBvZiA2NCBieXRlcykuXG4gICAgICBpZiAoaW5idWYgPT09IDApIHtcbiAgICAgICAgd2hpbGUgKG4gPD0gbGVuZ3RoTWludXNCbG9jaykge1xuICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ5dGVzLCBuKTtcbiAgICAgICAgICBuICs9IHRoaXMuYmxvY2tTaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgYnVmW2luYnVmXSA9IGJ5dGVzLmNoYXJDb2RlQXQobik7XG4gICAgICAgICAgKytpbmJ1ZjtcbiAgICAgICAgICArK247XG4gICAgICAgICAgaWYgKGluYnVmID09PSB0aGlzLmJsb2NrU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wcmVzc18oYnVmKTtcbiAgICAgICAgICAgIGluYnVmID0gMDtcbiAgICAgICAgICAgIC8vIEp1bXAgdG8gdGhlIG91dGVyIGxvb3Agc28gd2UgdXNlIHRoZSBmdWxsLWJsb2NrIG9wdGltaXphdGlvbi5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcbiAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXNbbl07XG4gICAgICAgICAgKytpbmJ1ZjtcbiAgICAgICAgICArK247XG4gICAgICAgICAgaWYgKGluYnVmID09PSB0aGlzLmJsb2NrU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wcmVzc18oYnVmKTtcbiAgICAgICAgICAgIGluYnVmID0gMDtcbiAgICAgICAgICAgIC8vIEp1bXAgdG8gdGhlIG91dGVyIGxvb3Agc28gd2UgdXNlIHRoZSBmdWxsLWJsb2NrIG9wdGltaXphdGlvbi5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5idWZfID0gaW5idWY7XG4gICAgdGhpcy50b3RhbF8gKz0gbGVuZ3RoO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkaWdlc3QoKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGRpZ2VzdDogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgdG90YWxCaXRzID0gdGhpcy50b3RhbF8gKiA4O1xuXG4gICAgLy8gQWRkIHBhZCAweDgwIDB4MDAqLlxuICAgIGlmICh0aGlzLmluYnVmXyA8IDU2KSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLnBhZF8sIDU2IC0gdGhpcy5pbmJ1Zl8pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLnBhZF8sIHRoaXMuYmxvY2tTaXplIC0gKHRoaXMuaW5idWZfIC0gNTYpKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgIyBiaXRzLlxuICAgIGZvciAobGV0IGkgPSB0aGlzLmJsb2NrU2l6ZSAtIDE7IGkgPj0gNTY7IGktLSkge1xuICAgICAgdGhpcy5idWZfW2ldID0gdG90YWxCaXRzICYgMjU1O1xuICAgICAgdG90YWxCaXRzIC89IDI1NjsgLy8gRG9uJ3QgdXNlIGJpdC1zaGlmdGluZyBoZXJlIVxuICAgIH1cblxuICAgIHRoaXMuY29tcHJlc3NfKHRoaXMuYnVmXyk7XG5cbiAgICBsZXQgbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAyNDsgaiA+PSAwOyBqIC09IDgpIHtcbiAgICAgICAgZGlnZXN0W25dID0gKHRoaXMuY2hhaW5fW2ldID4+IGopICYgMjU1O1xuICAgICAgICArK247XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaWdlc3Q7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEZuPFQ+ID0gKHZhbHVlOiBUKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgRXJyb3JGbiA9IChlcnJvcjogRXJyb3IpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBDb21wbGV0ZUZuID0gKCkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZlcjxUPiB7XG4gIC8vIENhbGxlZCBvbmNlIGZvciBlYWNoIHZhbHVlIGluIGEgc3RyZWFtIG9mIHZhbHVlcy5cbiAgbmV4dDogTmV4dEZuPFQ+O1xuXG4gIC8vIEEgc3RyZWFtIHRlcm1pbmF0ZXMgYnkgYSBzaW5nbGUgY2FsbCB0byBFSVRIRVIgZXJyb3IoKSBvciBjb21wbGV0ZSgpLlxuICBlcnJvcjogRXJyb3JGbjtcblxuICAvLyBObyBldmVudHMgd2lsbCBiZSBzZW50IHRvIG5leHQoKSBvbmNlIGNvbXBsZXRlKCkgaXMgY2FsbGVkLlxuICBjb21wbGV0ZTogQ29tcGxldGVGbjtcbn1cblxuZXhwb3J0IHR5cGUgUGFydGlhbE9ic2VydmVyPFQ+ID0gUGFydGlhbDxPYnNlcnZlcjxUPj47XG5cbi8vIFRPRE86IFN1cHBvcnQgYWxzbyBVbnN1YnNjcmliZS51bnN1YnNjcmliZT9cbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlID0gKCkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGUgU3Vic2NyaWJlIGludGVyZmFjZSBoYXMgdHdvIGZvcm1zIC0gcGFzc2luZyB0aGUgaW5saW5lIGZ1bmN0aW9uXG4gKiBjYWxsYmFja3MsIG9yIGEgb2JqZWN0IGludGVyZmFjZSB3aXRoIGNhbGxiYWNrIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3Vic2NyaWJlPFQ+IHtcbiAgKG5leHQ/OiBOZXh0Rm48VD4sIGVycm9yPzogRXJyb3JGbiwgY29tcGxldGU/OiBDb21wbGV0ZUZuKTogVW5zdWJzY3JpYmU7XG4gIChvYnNlcnZlcjogUGFydGlhbE9ic2VydmVyPFQ+KTogVW5zdWJzY3JpYmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2YWJsZTxUPiB7XG4gIC8vIFN1YnNjcmliZSBtZXRob2RcbiAgc3Vic2NyaWJlOiBTdWJzY3JpYmU8VD47XG59XG5cbmV4cG9ydCB0eXBlIEV4ZWN1dG9yPFQ+ID0gKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4gdm9pZDtcblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFrZSBhIFN1YnNjcmliZSBmdW5jdGlvbiAoanVzdCBsaWtlIFByb21pc2UgaGVscHMgbWFrZSBhXG4gKiBUaGVuYWJsZSkuXG4gKlxuICogQHBhcmFtIGV4ZWN1dG9yIEZ1bmN0aW9uIHdoaWNoIGNhbiBtYWtlIGNhbGxzIHRvIGEgc2luZ2xlIE9ic2VydmVyXG4gKiAgICAgYXMgYSBwcm94eS5cbiAqIEBwYXJhbSBvbk5vT2JzZXJ2ZXJzIENhbGxiYWNrIHdoZW4gY291bnQgb2YgT2JzZXJ2ZXJzIGdvZXMgdG8gemVyby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmliZTxUPihcbiAgZXhlY3V0b3I6IEV4ZWN1dG9yPFQ+LFxuICBvbk5vT2JzZXJ2ZXJzPzogRXhlY3V0b3I8VD5cbik6IFN1YnNjcmliZTxUPiB7XG4gIGNvbnN0IHByb3h5ID0gbmV3IE9ic2VydmVyUHJveHk8VD4oZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpO1xuICByZXR1cm4gcHJveHkuc3Vic2NyaWJlLmJpbmQocHJveHkpO1xufVxuXG4vKipcbiAqIEltcGxlbWVudCBmYW4tb3V0IGZvciBhbnkgbnVtYmVyIG9mIE9ic2VydmVycyBhdHRhY2hlZCB2aWEgYSBzdWJzY3JpYmVcbiAqIGZ1bmN0aW9uLlxuICovXG5jbGFzcyBPYnNlcnZlclByb3h5PFQ+IGltcGxlbWVudHMgT2JzZXJ2ZXI8VD4ge1xuICBwcml2YXRlIG9ic2VydmVyczogQXJyYXk8T2JzZXJ2ZXI8VD4+IHwgdW5kZWZpbmVkID0gW107XG4gIHByaXZhdGUgdW5zdWJzY3JpYmVzOiBVbnN1YnNjcmliZVtdID0gW107XG4gIHByaXZhdGUgb25Ob09ic2VydmVyczogRXhlY3V0b3I8VD4gfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgb2JzZXJ2ZXJDb3VudCA9IDA7XG4gIC8vIE1pY3JvLXRhc2sgc2NoZWR1bGluZyBieSBjYWxsaW5nIHRhc2sudGhlbigpLlxuICBwcml2YXRlIHRhc2sgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgcHJpdmF0ZSBmaW5hbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmaW5hbEVycm9yPzogRXJyb3I7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBleGVjdXRvciBGdW5jdGlvbiB3aGljaCBjYW4gbWFrZSBjYWxscyB0byBhIHNpbmdsZSBPYnNlcnZlclxuICAgKiAgICAgYXMgYSBwcm94eS5cbiAgICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZXhlY3V0b3I6IEV4ZWN1dG9yPFQ+LCBvbk5vT2JzZXJ2ZXJzPzogRXhlY3V0b3I8VD4pIHtcbiAgICB0aGlzLm9uTm9PYnNlcnZlcnMgPSBvbk5vT2JzZXJ2ZXJzO1xuICAgIC8vIENhbGwgdGhlIGV4ZWN1dG9yIGFzeW5jaHJvbm91c2x5IHNvIHN1YnNjcmliZXJzIHRoYXQgYXJlIGNhbGxlZFxuICAgIC8vIHN5bmNocm9ub3VzbHkgYWZ0ZXIgdGhlIGNyZWF0aW9uIG9mIHRoZSBzdWJzY3JpYmUgZnVuY3Rpb25cbiAgICAvLyBjYW4gc3RpbGwgcmVjZWl2ZSB0aGUgdmVyeSBmaXJzdCB2YWx1ZSBnZW5lcmF0ZWQgaW4gdGhlIGV4ZWN1dG9yLlxuICAgIHRoaXMudGFza1xuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBleGVjdXRvcih0aGlzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IoZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVycm9yKGVycm9yOiBFcnJvcik6IHZvaWQge1xuICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsb3NlKGVycm9yKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBhbiBPYnNlcnZlciB0byB0aGUgZmFuLW91dCBsaXN0LlxuICAgKlxuICAgKiAtIFdlIHJlcXVpcmUgdGhhdCBubyBldmVudCBpcyBzZW50IHRvIGEgc3Vic2NyaWJlciBzeWNocm9ub3VzbHkgdG8gdGhlaXJcbiAgICogICBjYWxsIHRvIHN1YnNjcmliZSgpLlxuICAgKi9cbiAgc3Vic2NyaWJlKFxuICAgIG5leHRPck9ic2VydmVyPzogTmV4dEZuPFQ+IHwgUGFydGlhbE9ic2VydmVyPFQ+LFxuICAgIGVycm9yPzogRXJyb3JGbixcbiAgICBjb21wbGV0ZT86IENvbXBsZXRlRm5cbiAgKTogVW5zdWJzY3JpYmUge1xuICAgIGxldCBvYnNlcnZlcjogT2JzZXJ2ZXI8VD47XG5cbiAgICBpZiAoXG4gICAgICBuZXh0T3JPYnNlcnZlciA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBlcnJvciA9PT0gdW5kZWZpbmVkICYmXG4gICAgICBjb21wbGV0ZSA9PT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgT2JzZXJ2ZXIuJyk7XG4gICAgfVxuXG4gICAgLy8gQXNzZW1ibGUgYW4gT2JzZXJ2ZXIgb2JqZWN0IHdoZW4gcGFzc2VkIGFzIGNhbGxiYWNrIGZ1bmN0aW9ucy5cbiAgICBpZiAoXG4gICAgICBpbXBsZW1lbnRzQW55TWV0aG9kcyhuZXh0T3JPYnNlcnZlciBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSwgW1xuICAgICAgICAnbmV4dCcsXG4gICAgICAgICdlcnJvcicsXG4gICAgICAgICdjb21wbGV0ZSdcbiAgICAgIF0pXG4gICAgKSB7XG4gICAgICBvYnNlcnZlciA9IG5leHRPck9ic2VydmVyIGFzIE9ic2VydmVyPFQ+O1xuICAgIH0gZWxzZSB7XG4gICAgICBvYnNlcnZlciA9IHtcbiAgICAgICAgbmV4dDogbmV4dE9yT2JzZXJ2ZXIgYXMgTmV4dEZuPFQ+LFxuICAgICAgICBlcnJvcixcbiAgICAgICAgY29tcGxldGVcbiAgICAgIH0gYXMgT2JzZXJ2ZXI8VD47XG4gICAgfVxuXG4gICAgaWYgKG9ic2VydmVyLm5leHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JzZXJ2ZXIubmV4dCA9IG5vb3AgYXMgTmV4dEZuPFQ+O1xuICAgIH1cbiAgICBpZiAob2JzZXJ2ZXIuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JzZXJ2ZXIuZXJyb3IgPSBub29wIGFzIEVycm9yRm47XG4gICAgfVxuICAgIGlmIChvYnNlcnZlci5jb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSA9IG5vb3AgYXMgQ29tcGxldGVGbjtcbiAgICB9XG5cbiAgICBjb25zdCB1bnN1YiA9IHRoaXMudW5zdWJzY3JpYmVPbmUuYmluZCh0aGlzLCB0aGlzLm9ic2VydmVycyEubGVuZ3RoKTtcblxuICAgIC8vIEF0dGVtcHQgdG8gc3Vic2NyaWJlIHRvIGEgdGVybWluYXRlZCBPYnNlcnZhYmxlIC0gd2VcbiAgICAvLyBqdXN0IHJlc3BvbmQgdG8gdGhlIE9ic2VydmVyIHdpdGggdGhlIGZpbmFsIGVycm9yIG9yIGNvbXBsZXRlXG4gICAgLy8gZXZlbnQuXG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHRoaXMuZmluYWxFcnJvcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IodGhpcy5maW5hbEVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5vYnNlcnZlcnMhLnB1c2gob2JzZXJ2ZXIgYXMgT2JzZXJ2ZXI8VD4pO1xuXG4gICAgcmV0dXJuIHVuc3ViO1xuICB9XG5cbiAgLy8gVW5zdWJzY3JpYmUgaXMgc3luY2hyb25vdXMgLSB3ZSBndWFyYW50ZWUgdGhhdCBubyBldmVudHMgYXJlIHNlbnQgdG9cbiAgLy8gYW55IHVuc3Vic2NyaWJlZCBPYnNlcnZlci5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZU9uZShpOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlcnMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm9ic2VydmVyc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2ldO1xuXG4gICAgdGhpcy5vYnNlcnZlckNvdW50IC09IDE7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJDb3VudCA9PT0gMCAmJiB0aGlzLm9uTm9PYnNlcnZlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9yRWFjaE9ic2VydmVyKGZuOiAob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICAvLyBBbHJlYWR5IGNsb3NlZCBieSBwcmV2aW91cyBldmVudC4uLi5qdXN0IGVhdCB0aGUgYWRkaXRpb25hbCB2YWx1ZXMuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2luY2Ugc2VuZE9uZSBjYWxscyBhc3luY2hyb25vdXNseSAtIHRoZXJlIGlzIG5vIGNoYW5jZSB0aGF0XG4gICAgLy8gdGhpcy5vYnNlcnZlcnMgd2lsbCBiZWNvbWUgdW5kZWZpbmVkLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vYnNlcnZlcnMhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNlbmRPbmUoaSwgZm4pO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGwgdGhlIE9ic2VydmVyIHZpYSBvbmUgb2YgaXQncyBjYWxsYmFjayBmdW5jdGlvbi4gV2UgYXJlIGNhcmVmdWwgdG9cbiAgLy8gY29uZmlybSB0aGF0IHRoZSBvYnNlcnZlIGhhcyBub3QgYmVlbiB1bnN1YnNjcmliZWQgc2luY2UgdGhpcyBhc3luY2hyb25vdXNcbiAgLy8gZnVuY3Rpb24gaGFkIGJlZW4gcXVldWVkLlxuICBwcml2YXRlIHNlbmRPbmUoaTogbnVtYmVyLCBmbjogKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4gdm9pZCk6IHZvaWQge1xuICAgIC8vIEV4ZWN1dGUgdGhlIGNhbGxiYWNrIGFzeW5jaHJvbm91c2x5XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMub2JzZXJ2ZXJzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmbih0aGlzLm9ic2VydmVyc1tpXSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBJZ25vcmUgZXhjZXB0aW9ucyByYWlzZWQgaW4gT2JzZXJ2ZXJzIG9yIG1pc3NpbmcgbWV0aG9kcyBvZiBhblxuICAgICAgICAgIC8vIE9ic2VydmVyLlxuICAgICAgICAgIC8vIExvZyBlcnJvciB0byBjb25zb2xlLiBiLzMxNDA0ODA2XG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZShlcnI/OiBFcnJvcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XG4gICAgaWYgKGVyciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZpbmFsRXJyb3IgPSBlcnI7XG4gICAgfVxuICAgIC8vIFByb3h5IGlzIG5vIGxvbmdlciBuZWVkZWQgLSBnYXJiYWdlIGNvbGxlY3QgcmVmZXJlbmNlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVycyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMub25Ob09ic2VydmVycyA9IHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgfVxufVxuXG4vKiogVHVybiBzeW5jaHJvbm91cyBmdW5jdGlvbiBpbnRvIG9uZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jKGZuOiBGdW5jdGlvbiwgb25FcnJvcj86IEVycm9yRm4pOiBGdW5jdGlvbiB7XG4gIHJldHVybiAoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIHRoZSBvYmplY3QgcGFzc2VkIGluIGltcGxlbWVudHMgYW55IG9mIHRoZSBuYW1lZCBtZXRob2RzLlxuICovXG5mdW5jdGlvbiBpbXBsZW1lbnRzQW55TWV0aG9kcyhcbiAgb2JqOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSxcbiAgbWV0aG9kczogc3RyaW5nW11cbik6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChjb25zdCBtZXRob2Qgb2YgbWV0aG9kcykge1xuICAgIGlmIChtZXRob2QgaW4gb2JqICYmIHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBub29wKCk6IHZvaWQge1xuICAvLyBkbyBub3RoaW5nXG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBDaGVjayB0byBtYWtlIHN1cmUgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIGZvciBhIHB1YmxpYyBmdW5jdGlvbi5cbiAqIFRocm93cyBhbiBlcnJvciBpZiBpdCBmYWlscy5cbiAqXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXG4gKiBAcGFyYW0gbWluQ291bnQgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBhbGxvdyBmb3IgdGhlIGZ1bmN0aW9uIGNhbGxcbiAqIEBwYXJhbSBtYXhDb3VudCBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnQgdG8gYWxsb3cgZm9yIHRoZSBmdW5jdGlvbiBjYWxsXG4gKiBAcGFyYW0gYXJnQ291bnQgVGhlIGFjdHVhbCBudW1iZXIgb2YgYXJndW1lbnRzIHByb3ZpZGVkLlxuICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGVBcmdDb3VudCA9IGZ1bmN0aW9uIChcbiAgZm5OYW1lOiBzdHJpbmcsXG4gIG1pbkNvdW50OiBudW1iZXIsXG4gIG1heENvdW50OiBudW1iZXIsXG4gIGFyZ0NvdW50OiBudW1iZXJcbik6IHZvaWQge1xuICBsZXQgYXJnRXJyb3I7XG4gIGlmIChhcmdDb3VudCA8IG1pbkNvdW50KSB7XG4gICAgYXJnRXJyb3IgPSAnYXQgbGVhc3QgJyArIG1pbkNvdW50O1xuICB9IGVsc2UgaWYgKGFyZ0NvdW50ID4gbWF4Q291bnQpIHtcbiAgICBhcmdFcnJvciA9IG1heENvdW50ID09PSAwID8gJ25vbmUnIDogJ25vIG1vcmUgdGhhbiAnICsgbWF4Q291bnQ7XG4gIH1cbiAgaWYgKGFyZ0Vycm9yKSB7XG4gICAgY29uc3QgZXJyb3IgPVxuICAgICAgZm5OYW1lICtcbiAgICAgICcgZmFpbGVkOiBXYXMgY2FsbGVkIHdpdGggJyArXG4gICAgICBhcmdDb3VudCArXG4gICAgICAoYXJnQ291bnQgPT09IDEgPyAnIGFyZ3VtZW50LicgOiAnIGFyZ3VtZW50cy4nKSArXG4gICAgICAnIEV4cGVjdHMgJyArXG4gICAgICBhcmdFcnJvciArXG4gICAgICAnLic7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgdG8gcHJlZml4IGFuIGVycm9yIG1lc3NhZ2UgYWJvdXQgZmFpbGVkIGFyZ3VtZW50IHZhbGlkYXRpb25cbiAqXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXG4gKiBAcGFyYW0gYXJnTmFtZSBUaGUgbmFtZSBvZiB0aGUgYXJndW1lbnRcbiAqIEByZXR1cm4gVGhlIHByZWZpeCB0byBhZGQgdG8gdGhlIGVycm9yIHRocm93biBmb3IgdmFsaWRhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yUHJlZml4KGZuTmFtZTogc3RyaW5nLCBhcmdOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7Zm5OYW1lfSBmYWlsZWQ6ICR7YXJnTmFtZX0gYXJndW1lbnQgYDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gZm5OYW1lXG4gKiBAcGFyYW0gYXJndW1lbnROdW1iZXJcbiAqIEBwYXJhbSBuYW1lc3BhY2VcbiAqIEBwYXJhbSBvcHRpb25hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UoXG4gIGZuTmFtZTogc3RyaW5nLFxuICBuYW1lc3BhY2U6IHN0cmluZyxcbiAgb3B0aW9uYWw6IGJvb2xlYW5cbik6IHZvaWQge1xuICBpZiAob3B0aW9uYWwgJiYgIW5hbWVzcGFjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIG5hbWVzcGFjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAvL1RPRE86IEkgc2hvdWxkIGRvIG1vcmUgdmFsaWRhdGlvbiBoZXJlLiBXZSBvbmx5IGFsbG93IGNlcnRhaW4gY2hhcnMgaW4gbmFtZXNwYWNlcy5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBlcnJvclByZWZpeChmbk5hbWUsICduYW1lc3BhY2UnKSArICdtdXN0IGJlIGEgdmFsaWQgZmlyZWJhc2UgbmFtZXNwYWNlLidcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNhbGxiYWNrKFxuICBmbk5hbWU6IHN0cmluZyxcbiAgYXJndW1lbnROYW1lOiBzdHJpbmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIGNhbGxiYWNrOiBGdW5jdGlvbixcbiAgb3B0aW9uYWw6IGJvb2xlYW5cbik6IHZvaWQge1xuICBpZiAob3B0aW9uYWwgJiYgIWNhbGxiYWNrKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBlcnJvclByZWZpeChmbk5hbWUsIGFyZ3VtZW50TmFtZSkgKyAnbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLidcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbnRleHRPYmplY3QoXG4gIGZuTmFtZTogc3RyaW5nLFxuICBhcmd1bWVudE5hbWU6IHN0cmluZyxcbiAgY29udGV4dDogdW5rbm93bixcbiAgb3B0aW9uYWw6IGJvb2xlYW5cbik6IHZvaWQge1xuICBpZiAob3B0aW9uYWwgJiYgIWNvbnRleHQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSAnb2JqZWN0JyB8fCBjb250ZXh0ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE5hbWUpICsgJ211c3QgYmUgYSB2YWxpZCBjb250ZXh0IG9iamVjdC4nXG4gICAgKTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vYXNzZXJ0JztcblxuLy8gQ29kZSBvcmlnaW5hbGx5IGNhbWUgZnJvbSBnb29nLmNyeXB0LnN0cmluZ1RvVXRmOEJ5dGVBcnJheSwgYnV0IGZvciBzb21lIHJlYXNvbiB0aGV5XG4vLyBhdXRvbWF0aWNhbGx5IHJlcGxhY2VkICdcXHJcXG4nIHdpdGggJ1xcbicsIGFuZCB0aGV5IGRpZG4ndCBoYW5kbGUgc3Vycm9nYXRlIHBhaXJzLFxuLy8gc28gaXQncyBiZWVuIG1vZGlmaWVkLlxuXG4vLyBOb3RlIHRoYXQgbm90IGFsbCBVbmljb2RlIGNoYXJhY3RlcnMgYXBwZWFyIGFzIHNpbmdsZSBjaGFyYWN0ZXJzIGluIEphdmFTY3JpcHQgc3RyaW5ncy5cbi8vIGZyb21DaGFyQ29kZSByZXR1cm5zIHRoZSBVVEYtMTYgZW5jb2Rpbmcgb2YgYSBjaGFyYWN0ZXIgLSBzbyBzb21lIFVuaWNvZGUgY2hhcmFjdGVyc1xuLy8gdXNlIDIgY2hhcmFjdGVycyBpbiBKYXZhc2NyaXB0LiAgQWxsIDQtYnl0ZSBVVEYtOCBjaGFyYWN0ZXJzIGJlZ2luIHdpdGggYSBmaXJzdFxuLy8gY2hhcmFjdGVyIGluIHRoZSByYW5nZSAweEQ4MDAgLSAweERCRkYgKHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzby1jYWxsZWQgc3Vycm9nYXRlXG4vLyBwYWlyKS5cbi8vIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtMTUuMS4zXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdUb0J5dGVBcnJheSA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgY29uc3Qgb3V0OiBudW1iZXJbXSA9IFtdO1xuICBsZXQgcCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgIC8vIElzIHRoaXMgdGhlIGxlYWQgc3Vycm9nYXRlIGluIGEgc3Vycm9nYXRlIHBhaXI/XG4gICAgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XG4gICAgICBjb25zdCBoaWdoID0gYyAtIDB4ZDgwMDsgLy8gdGhlIGhpZ2ggMTAgYml0cy5cbiAgICAgIGkrKztcbiAgICAgIGFzc2VydChpIDwgc3RyLmxlbmd0aCwgJ1N1cnJvZ2F0ZSBwYWlyIG1pc3NpbmcgdHJhaWwgc3Vycm9nYXRlLicpO1xuICAgICAgY29uc3QgbG93ID0gc3RyLmNoYXJDb2RlQXQoaSkgLSAweGRjMDA7IC8vIHRoZSBsb3cgMTAgYml0cy5cbiAgICAgIGMgPSAweDEwMDAwICsgKGhpZ2ggPDwgMTApICsgbG93O1xuICAgIH1cblxuICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICBvdXRbcCsrXSA9IGM7XG4gICAgfSBlbHNlIGlmIChjIDwgMjA0OCkge1xuICAgICAgb3V0W3ArK10gPSAoYyA+PiA2KSB8IDE5MjtcbiAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIGlmIChjIDwgNjU1MzYpIHtcbiAgICAgIG91dFtwKytdID0gKGMgPj4gMTIpIHwgMjI0O1xuICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XG4gICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDE4KSB8IDI0MDtcbiAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlIGxlbmd0aCB3aXRob3V0IGFjdHVhbGx5IGNvbnZlcnRpbmc7IHVzZWZ1bCBmb3IgZG9pbmcgY2hlYXBlciB2YWxpZGF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nTGVuZ3RoID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgbGV0IHAgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgcCsrO1xuICAgIH0gZWxzZSBpZiAoYyA8IDIwNDgpIHtcbiAgICAgIHAgKz0gMjtcbiAgICB9IGVsc2UgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XG4gICAgICAvLyBMZWFkIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyLiAgVGhlIHBhaXIgdG9nZXRoZXIgd2lsbCB0YWtlIDQgYnl0ZXMgdG8gcmVwcmVzZW50LlxuICAgICAgcCArPSA0O1xuICAgICAgaSsrOyAvLyBza2lwIHRyYWlsIHN1cnJvZ2F0ZS5cbiAgICB9IGVsc2Uge1xuICAgICAgcCArPSAzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcDtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBDb3BpZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xuICogR2VuZXJhdGVzIGEgbmV3IHV1aWQuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1dWlkdjQgPSBmdW5jdGlvbiAoKTogc3RyaW5nIHtcbiAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgYyA9PiB7XG4gICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcbiAgICAgIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gZXhwb25lbnRpYWxseSBpbmNyZWFzZS5cbiAqL1xuY29uc3QgREVGQVVMVF9JTlRFUlZBTF9NSUxMSVMgPSAxMDAwO1xuXG4vKipcbiAqIFRoZSBmYWN0b3IgdG8gYmFja29mZiBieS5cbiAqIFNob3VsZCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMS5cbiAqL1xuY29uc3QgREVGQVVMVF9CQUNLT0ZGX0ZBQ1RPUiA9IDI7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbWlsbGlzZWNvbmRzIHRvIGluY3JlYXNlIHRvLlxuICpcbiAqIDxwPlZpc2libGUgZm9yIHRlc3RpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IE1BWF9WQUxVRV9NSUxMSVMgPSA0ICogNjAgKiA2MCAqIDEwMDA7IC8vIEZvdXIgaG91cnMsIGxpa2UgaU9TIGFuZCBBbmRyb2lkLlxuXG4vKipcbiAqIFRoZSBwZXJjZW50YWdlIG9mIGJhY2tvZmYgdGltZSB0byByYW5kb21pemUgYnkuXG4gKiBTZWVcbiAqIGh0dHA6Ly9nby9zYWZlLWNsaWVudC1iZWhhdmlvciNzdGVwLTEtZGV0ZXJtaW5lLXRoZS1hcHByb3ByaWF0ZS1yZXRyeS1pbnRlcnZhbC10by1oYW5kbGUtc3Bpa2UtdHJhZmZpY1xuICogZm9yIGNvbnRleHQuXG4gKlxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgY29uc3QgUkFORE9NX0ZBQ1RPUiA9IDAuNTtcblxuLyoqXG4gKiBCYXNlZCBvbiB0aGUgYmFja29mZiBtZXRob2QgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWxpYnJhcnkvYmxvYi9tYXN0ZXIvY2xvc3VyZS9nb29nL21hdGgvZXhwb25lbnRpYWxiYWNrb2ZmLmpzLlxuICogRXh0cmFjdGVkIGhlcmUgc28gd2UgZG9uJ3QgbmVlZCB0byBwYXNzIG1ldGFkYXRhIGFuZCBhIHN0YXRlZnVsIEV4cG9uZW50aWFsQmFja29mZiBvYmplY3QgYXJvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQmFja29mZk1pbGxpcyhcbiAgYmFja29mZkNvdW50OiBudW1iZXIsXG4gIGludGVydmFsTWlsbGlzOiBudW1iZXIgPSBERUZBVUxUX0lOVEVSVkFMX01JTExJUyxcbiAgYmFja29mZkZhY3RvcjogbnVtYmVyID0gREVGQVVMVF9CQUNLT0ZGX0ZBQ1RPUlxuKTogbnVtYmVyIHtcbiAgLy8gQ2FsY3VsYXRlcyBhbiBleHBvbmVudGlhbGx5IGluY3JlYXNpbmcgdmFsdWUuXG4gIC8vIERldmlhdGlvbjogY2FsY3VsYXRlcyB2YWx1ZSBmcm9tIGNvdW50IGFuZCBhIGNvbnN0YW50IGludGVydmFsLCBzbyB3ZSBvbmx5IG5lZWQgdG8gc2F2ZSB2YWx1ZVxuICAvLyBhbmQgY291bnQgdG8gcmVzdG9yZSBzdGF0ZS5cbiAgY29uc3QgY3VyckJhc2VWYWx1ZSA9IGludGVydmFsTWlsbGlzICogTWF0aC5wb3coYmFja29mZkZhY3RvciwgYmFja29mZkNvdW50KTtcblxuICAvLyBBIHJhbmRvbSBcImZ1enpcIiB0byBhdm9pZCB3YXZlcyBvZiByZXRyaWVzLlxuICAvLyBEZXZpYXRpb246IHJhbmRvbUZhY3RvciBpcyByZXF1aXJlZC5cbiAgY29uc3QgcmFuZG9tV2FpdCA9IE1hdGgucm91bmQoXG4gICAgLy8gQSBmcmFjdGlvbiBvZiB0aGUgYmFja29mZiB2YWx1ZSB0byBhZGQvc3VidHJhY3QuXG4gICAgLy8gRGV2aWF0aW9uOiBjaGFuZ2VzIG11bHRpcGxpY2F0aW9uIG9yZGVyIHRvIGltcHJvdmUgcmVhZGFiaWxpdHkuXG4gICAgUkFORE9NX0ZBQ1RPUiAqXG4gICAgICBjdXJyQmFzZVZhbHVlICpcbiAgICAgIC8vIEEgcmFuZG9tIGZsb2F0IChyb3VuZGVkIHRvIGludCBieSBNYXRoLnJvdW5kIGFib3ZlKSBpbiB0aGUgcmFuZ2UgWy0xLCAxXS4gRGV0ZXJtaW5lc1xuICAgICAgLy8gaWYgd2UgYWRkIG9yIHN1YnRyYWN0LlxuICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICpcbiAgICAgIDJcbiAgKTtcblxuICAvLyBMaW1pdHMgYmFja29mZiB0byBtYXggdG8gYXZvaWQgZWZmZWN0aXZlbHkgcGVybWFuZW50IGJhY2tvZmYuXG4gIHJldHVybiBNYXRoLm1pbihNQVhfVkFMVUVfTUlMTElTLCBjdXJyQmFzZVZhbHVlICsgcmFuZG9tV2FpdCk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlIEVuZ2xpc2ggb3JkaW5hbCBsZXR0ZXJzIGFmdGVyIGEgbnVtYmVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRpbmFsKGk6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKGkpKSB7XG4gICAgcmV0dXJuIGAke2l9YDtcbiAgfVxuICByZXR1cm4gaSArIGluZGljYXRvcihpKTtcbn1cblxuZnVuY3Rpb24gaW5kaWNhdG9yKGk6IG51bWJlcik6IHN0cmluZyB7XG4gIGkgPSBNYXRoLmFicyhpKTtcbiAgY29uc3QgY2VudCA9IGkgJSAxMDA7XG4gIGlmIChjZW50ID49IDEwICYmIGNlbnQgPD0gMjApIHtcbiAgICByZXR1cm4gJ3RoJztcbiAgfVxuICBjb25zdCBkZWMgPSBpICUgMTA7XG4gIGlmIChkZWMgPT09IDEpIHtcbiAgICByZXR1cm4gJ3N0JztcbiAgfVxuICBpZiAoZGVjID09PSAyKSB7XG4gICAgcmV0dXJuICduZCc7XG4gIH1cbiAgaWYgKGRlYyA9PT0gMykge1xuICAgIHJldHVybiAncmQnO1xuICB9XG4gIHJldHVybiAndGgnO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGF0PFQ+IHtcbiAgX2RlbGVnYXRlOiBUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kdWxhckluc3RhbmNlPEV4cFNlcnZpY2U+KFxuICBzZXJ2aWNlOiBDb21wYXQ8RXhwU2VydmljZT4gfCBFeHBTZXJ2aWNlXG4pOiBFeHBTZXJ2aWNlIHtcbiAgaWYgKHNlcnZpY2UgJiYgKHNlcnZpY2UgYXMgQ29tcGF0PEV4cFNlcnZpY2U+KS5fZGVsZWdhdGUpIHtcbiAgICByZXR1cm4gKHNlcnZpY2UgYXMgQ29tcGF0PEV4cFNlcnZpY2U+KS5fZGVsZWdhdGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNlcnZpY2UgYXMgRXhwU2VydmljZTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQge1xuICBJbnN0YW50aWF0aW9uTW9kZSxcbiAgSW5zdGFuY2VGYWN0b3J5LFxuICBDb21wb25lbnRUeXBlLFxuICBEaWN0aW9uYXJ5LFxuICBOYW1lLFxuICBvbkluc3RhbmNlQ3JlYXRlZENhbGxiYWNrXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxUIGV4dGVuZHMgTmFtZSA9IE5hbWU+IHtcbiAgbXVsdGlwbGVJbnN0YW5jZXMgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFByb3BlcnRpZXMgdG8gYmUgYWRkZWQgdG8gdGhlIHNlcnZpY2UgbmFtZXNwYWNlXG4gICAqL1xuICBzZXJ2aWNlUHJvcHM6IERpY3Rpb25hcnkgPSB7fTtcblxuICBpbnN0YW50aWF0aW9uTW9kZSA9IEluc3RhbnRpYXRpb25Nb2RlLkxBWlk7XG5cbiAgb25JbnN0YW5jZUNyZWF0ZWQ6IG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2s8VD4gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG5hbWUgVGhlIHB1YmxpYyBzZXJ2aWNlIG5hbWUsIGUuZy4gYXBwLCBhdXRoLCBmaXJlc3RvcmUsIGRhdGFiYXNlXG4gICAqIEBwYXJhbSBpbnN0YW5jZUZhY3RvcnkgU2VydmljZSBmYWN0b3J5IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgcHVibGljIGludGVyZmFjZVxuICAgKiBAcGFyYW0gdHlwZSB3aGV0aGVyIHRoZSBzZXJ2aWNlIHByb3ZpZGVkIGJ5IHRoZSBjb21wb25lbnQgaXMgcHVibGljIG9yIHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IG5hbWU6IFQsXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VGYWN0b3J5OiBJbnN0YW5jZUZhY3Rvcnk8VD4sXG4gICAgcmVhZG9ubHkgdHlwZTogQ29tcG9uZW50VHlwZVxuICApIHt9XG5cbiAgc2V0SW5zdGFudGlhdGlvbk1vZGUobW9kZTogSW5zdGFudGlhdGlvbk1vZGUpOiB0aGlzIHtcbiAgICB0aGlzLmluc3RhbnRpYXRpb25Nb2RlID0gbW9kZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE11bHRpcGxlSW5zdGFuY2VzKG11bHRpcGxlSW5zdGFuY2VzOiBib29sZWFuKTogdGhpcyB7XG4gICAgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyA9IG11bHRpcGxlSW5zdGFuY2VzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U2VydmljZVByb3BzKHByb3BzOiBEaWN0aW9uYXJ5KTogdGhpcyB7XG4gICAgdGhpcy5zZXJ2aWNlUHJvcHMgPSBwcm9wcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrKGNhbGxiYWNrOiBvbkluc3RhbmNlQ3JlYXRlZENhbGxiYWNrPFQ+KTogdGhpcyB7XG4gICAgdGhpcy5vbkluc3RhbmNlQ3JlYXRlZCA9IGNhbGxiYWNrO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRU5UUllfTkFNRSA9ICdbREVGQVVMVF0nO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IERlZmVycmVkIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRfY29udGFpbmVyJztcbmltcG9ydCB7IERFRkFVTFRfRU5UUllfTkFNRSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIEluaXRpYWxpemVPcHRpb25zLFxuICBJbnN0YW50aWF0aW9uTW9kZSxcbiAgTmFtZSxcbiAgTmFtZVNlcnZpY2VNYXBwaW5nLFxuICBPbkluaXRDYWxsQmFja1xufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcblxuLyoqXG4gKiBQcm92aWRlciBmb3IgaW5zdGFuY2UgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuICdhdXRoJywgJ2F1dGgtaW50ZXJuYWwnXG4gKiBOYW1lU2VydmljZU1hcHBpbmdbVF0gaXMgYW4gYWxpYXMgZm9yIHRoZSB0eXBlIG9mIHRoZSBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgUHJvdmlkZXI8VCBleHRlbmRzIE5hbWU+IHtcbiAgcHJpdmF0ZSBjb21wb25lbnQ6IENvbXBvbmVudDxUPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHJlYWRvbmx5IGluc3RhbmNlczogTWFwPHN0cmluZywgTmFtZVNlcnZpY2VNYXBwaW5nW1RdPiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnN0YW5jZXNEZWZlcnJlZDogTWFwPFxuICAgIHN0cmluZyxcbiAgICBEZWZlcnJlZDxOYW1lU2VydmljZU1hcHBpbmdbVF0+XG4gID4gPSBuZXcgTWFwKCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5zdGFuY2VzT3B0aW9uczogTWFwPHN0cmluZywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+ID1cbiAgICBuZXcgTWFwKCk7XG4gIHByaXZhdGUgb25Jbml0Q2FsbGJhY2tzOiBNYXA8c3RyaW5nLCBTZXQ8T25Jbml0Q2FsbEJhY2s8VD4+PiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5hbWU6IFQsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbXBvbmVudENvbnRhaW5lclxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBpZGVudGlmaWVyIEEgcHJvdmlkZXIgY2FuIHByb3ZpZGUgbXVsaXRwbGUgaW5zdGFuY2VzIG9mIGEgc2VydmljZVxuICAgKiBpZiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyBpcyB0cnVlLlxuICAgKi9cbiAgZ2V0KGlkZW50aWZpZXI/OiBzdHJpbmcpOiBQcm9taXNlPE5hbWVTZXJ2aWNlTWFwcGluZ1tUXT4ge1xuICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXG4gICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5oYXMobm9ybWFsaXplZElkZW50aWZpZXIpKSB7XG4gICAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZDxOYW1lU2VydmljZU1hcHBpbmdbVF0+KCk7XG4gICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZGVmZXJyZWQpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZChub3JtYWxpemVkSWRlbnRpZmllcikgfHxcbiAgICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpXG4gICAgICApIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2VydmljZSBpZiBpdCBjYW4gYmUgYXV0by1pbml0aWFsaXplZFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcbiAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgZ2V0KCksIGl0IHNob3VsZCBub3QgY2F1c2VcbiAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IHJldHVybiB0aGUgdW5yZXNvbHZlZCBwcm9taXNlIGluIHRoaXMgY2FzZS5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmdldChub3JtYWxpemVkSWRlbnRpZmllcikhLnByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMuaWRlbnRpZmllciBBIHByb3ZpZGVyIGNhbiBwcm92aWRlIG11bGl0cGxlIGluc3RhbmNlcyBvZiBhIHNlcnZpY2VcbiAgICogaWYgdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgaXMgdHJ1ZS5cbiAgICogQHBhcmFtIG9wdGlvbnMub3B0aW9uYWwgSWYgb3B0aW9uYWwgaXMgZmFsc2Ugb3Igbm90IHByb3ZpZGVkLCB0aGUgbWV0aG9kIHRocm93cyBhbiBlcnJvciB3aGVuXG4gICAqIHRoZSBzZXJ2aWNlIGlzIG5vdCBpbW1lZGlhdGVseSBhdmFpbGFibGUuXG4gICAqIElmIG9wdGlvbmFsIGlzIHRydWUsIHRoZSBtZXRob2QgcmV0dXJucyBudWxsIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCBpbW1lZGlhdGVseSBhdmFpbGFibGUuXG4gICAqL1xuICBnZXRJbW1lZGlhdGUob3B0aW9uczoge1xuICAgIGlkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgb3B0aW9uYWw6IHRydWU7XG4gIH0pOiBOYW1lU2VydmljZU1hcHBpbmdbVF0gfCBudWxsO1xuICBnZXRJbW1lZGlhdGUob3B0aW9ucz86IHtcbiAgICBpZGVudGlmaWVyPzogc3RyaW5nO1xuICAgIG9wdGlvbmFsPzogZmFsc2U7XG4gIH0pOiBOYW1lU2VydmljZU1hcHBpbmdbVF07XG4gIGdldEltbWVkaWF0ZShvcHRpb25zPzoge1xuICAgIGlkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgb3B0aW9uYWw/OiBib29sZWFuO1xuICB9KTogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIHwgbnVsbCB7XG4gICAgLy8gaWYgbXVsdGlwbGVJbnN0YW5jZXMgaXMgbm90IHN1cHBvcnRlZCwgdXNlIHRoZSBkZWZhdWx0IG5hbWVcbiAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKFxuICAgICAgb3B0aW9ucz8uaWRlbnRpZmllclxuICAgICk7XG4gICAgY29uc3Qgb3B0aW9uYWwgPSBvcHRpb25zPy5vcHRpb25hbCA/PyBmYWxzZTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuaXNJbml0aWFsaXplZChub3JtYWxpemVkSWRlbnRpZmllcikgfHxcbiAgICAgIHRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKVxuICAgICkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJbiBjYXNlIGEgY29tcG9uZW50IGlzIG5vdCBpbml0aWFsaXplZCBhbmQgc2hvdWxkL2NhbiBub3QgYmUgYXV0by1pbml0aWFsaXplZCBhdCB0aGUgbW9tZW50LCByZXR1cm4gbnVsbCBpZiB0aGUgb3B0aW9uYWwgZmxhZyBpcyBzZXQsIG9yIHRocm93XG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihgU2VydmljZSAke3RoaXMubmFtZX0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbXBvbmVudCgpOiBDb21wb25lbnQ8VD4gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICBzZXRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQ8VD4pOiB2b2lkIHtcbiAgICBpZiAoY29tcG9uZW50Lm5hbWUgIT09IHRoaXMubmFtZSkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGBNaXNtYXRjaGluZyBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gZm9yIFByb3ZpZGVyICR7dGhpcy5uYW1lfS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgdGhyb3cgRXJyb3IoYENvbXBvbmVudCBmb3IgJHt0aGlzLm5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlkZWRgKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuICAgIC8vIHJldHVybiBlYXJseSB3aXRob3V0IGF0dGVtcHRpbmcgdG8gaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGlmIHRoZSBjb21wb25lbnQgcmVxdWlyZXMgZXhwbGljaXQgaW5pdGlhbGl6YXRpb24gKGNhbGxpbmcgYFByb3ZpZGVyLmluaXRpYWxpemUoKWApXG4gICAgaWYgKCF0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgc2VydmljZSBpcyBlYWdlciwgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZVxuICAgIGlmIChpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7IGluc3RhbmNlSWRlbnRpZmllcjogREVGQVVMVF9FTlRSWV9OQU1FIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IGZvciBhbiBlYWdlciBDb21wb25lbnQgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgdGhlIGVhZ2VyXG4gICAgICAgIC8vIGluaXRpYWxpemF0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlIGEgZmF0YWwgZXJyb3IuXG4gICAgICAgIC8vIFRPRE86IEludmVzdGlnYXRlIGlmIHdlIG5lZWQgdG8gbWFrZSBpdCBjb25maWd1cmFibGUsIGJlY2F1c2Ugc29tZSBjb21wb25lbnQgbWF5IHdhbnQgdG8gY2F1c2VcbiAgICAgICAgLy8gYSBmYXRhbCBlcnJvciBpbiB0aGlzIGNhc2U/XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHNlcnZpY2UgaW5zdGFuY2VzIGZvciB0aGUgcGVuZGluZyBwcm9taXNlcyBhbmQgcmVzb2x2ZSB0aGVtXG4gICAgLy8gTk9URTogaWYgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyBpcyBmYWxzZSwgb25seSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB3aWxsIGJlIGNyZWF0ZWRcbiAgICAvLyBhbmQgYWxsIHByb21pc2VzIHdpdGggcmVzb2x2ZSB3aXRoIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGlkZW50aWZpZXIuXG4gICAgZm9yIChjb25zdCBbXG4gICAgICBpbnN0YW5jZUlkZW50aWZpZXIsXG4gICAgICBpbnN0YW5jZURlZmVycmVkXG4gICAgXSBvZiB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmVudHJpZXMoKSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPVxuICAgICAgICB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBgZ2V0T3JJbml0aWFsaXplU2VydmljZSgpYCBzaG91bGQgYWx3YXlzIHJldHVybiBhIHZhbGlkIGluc3RhbmNlIHNpbmNlIGEgY29tcG9uZW50IGlzIGd1YXJhbnRlZWQuIHVzZSAhIHRvIG1ha2UgdHlwZXNjcmlwdCBoYXBweS5cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xuICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcbiAgICAgICAgfSkhO1xuICAgICAgICBpbnN0YW5jZURlZmVycmVkLnJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IHRocm93cyBhbiBleGNlcHRpb24sIGl0IHNob3VsZCBub3QgY2F1c2VcbiAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCBsZWF2ZSB0aGUgcHJvbWlzZSB1bnJlc29sdmVkLlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5zdGFuY2UoaWRlbnRpZmllcjogc3RyaW5nID0gREVGQVVMVF9FTlRSWV9OQU1FKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5kZWxldGUoaWRlbnRpZmllcik7XG4gICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLmRlbGV0ZShpZGVudGlmaWVyKTtcbiAgICB0aGlzLmluc3RhbmNlcy5kZWxldGUoaWRlbnRpZmllcik7XG4gIH1cblxuICAvLyBhcHAuZGVsZXRlKCkgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIG9uIGV2ZXJ5IHByb3ZpZGVyIHRvIGRlbGV0ZSB0aGUgc2VydmljZXNcbiAgLy8gVE9ETzogc2hvdWxkIHdlIG1hcmsgdGhlIHByb3ZpZGVyIGFzIGRlbGV0ZWQ/XG4gIGFzeW5jIGRlbGV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IEFycmF5LmZyb20odGhpcy5pbnN0YW5jZXMudmFsdWVzKCkpO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgLi4uc2VydmljZXNcbiAgICAgICAgLmZpbHRlcihzZXJ2aWNlID0+ICdJTlRFUk5BTCcgaW4gc2VydmljZSkgLy8gbGVnYWN5IHNlcnZpY2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIC5tYXAoc2VydmljZSA9PiAoc2VydmljZSBhcyBhbnkpLklOVEVSTkFMIS5kZWxldGUoKSksXG4gICAgICAuLi5zZXJ2aWNlc1xuICAgICAgICAuZmlsdGVyKHNlcnZpY2UgPT4gJ19kZWxldGUnIGluIHNlcnZpY2UpIC8vIG1vZHVsYXJpemVkIHNlcnZpY2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIC5tYXAoc2VydmljZSA9PiAoc2VydmljZSBhcyBhbnkpLl9kZWxldGUoKSlcbiAgICBdKTtcbiAgfVxuXG4gIGlzQ29tcG9uZW50U2V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudCAhPSBudWxsO1xuICB9XG5cbiAgaXNJbml0aWFsaXplZChpZGVudGlmaWVyOiBzdHJpbmcgPSBERUZBVUxUX0VOVFJZX05BTUUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuaGFzKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgZ2V0T3B0aW9ucyhpZGVudGlmaWVyOiBzdHJpbmcgPSBERUZBVUxUX0VOVFJZX05BTUUpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzT3B0aW9ucy5nZXQoaWRlbnRpZmllcikgfHwge307XG4gIH1cblxuICBpbml0aWFsaXplKG9wdHM6IEluaXRpYWxpemVPcHRpb25zID0ge30pOiBOYW1lU2VydmljZU1hcHBpbmdbVF0ge1xuICAgIGNvbnN0IHsgb3B0aW9ucyA9IHt9IH0gPSBvcHRzO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoXG4gICAgICBvcHRzLmluc3RhbmNlSWRlbnRpZmllclxuICAgICk7XG4gICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZChub3JtYWxpemVkSWRlbnRpZmllcikpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgJHt0aGlzLm5hbWV9KCR7bm9ybWFsaXplZElkZW50aWZpZXJ9KSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNDb21wb25lbnRTZXQoKSkge1xuICAgICAgdGhyb3cgRXJyb3IoYENvbXBvbmVudCAke3RoaXMubmFtZX0gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgeWV0YCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xuICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllcixcbiAgICAgIG9wdGlvbnNcbiAgICB9KSE7XG5cbiAgICAvLyByZXNvbHZlIGFueSBwZW5kaW5nIHByb21pc2Ugd2FpdGluZyBmb3IgdGhlIHNlcnZpY2UgaW5zdGFuY2VcbiAgICBmb3IgKGNvbnN0IFtcbiAgICAgIGluc3RhbmNlSWRlbnRpZmllcixcbiAgICAgIGluc3RhbmNlRGVmZXJyZWRcbiAgICBdIG9mIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkRGVmZXJyZWRJZGVudGlmaWVyID1cbiAgICAgICAgdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcbiAgICAgIGlmIChub3JtYWxpemVkSWRlbnRpZmllciA9PT0gbm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllcikge1xuICAgICAgICBpbnN0YW5jZURlZmVycmVkLnJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkICBhZnRlciB0aGUgcHJvdmlkZXIgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYnkgY2FsbGluZyBwcm92aWRlci5pbml0aWFsaXplKCkuXG4gICAqIFRoZSBmdW5jdGlvbiBpcyBpbnZva2VkIFNZTkNIUk9OT1VTTFksIHNvIGl0IHNob3VsZCBub3QgZXhlY3V0ZSBhbnkgbG9uZ3J1bm5pbmcgdGFza3MgaW4gb3JkZXIgdG8gbm90IGJsb2NrIHRoZSBwcm9ncmFtLlxuICAgKlxuICAgKiBAcGFyYW0gaWRlbnRpZmllciBBbiBvcHRpb25hbCBpbnN0YW5jZSBpZGVudGlmaWVyXG4gICAqIEByZXR1cm5zIGEgZnVuY3Rpb24gdG8gdW5yZWdpc3RlciB0aGUgY2FsbGJhY2tcbiAgICovXG4gIG9uSW5pdChjYWxsYmFjazogT25Jbml0Q2FsbEJhY2s8VD4sIGlkZW50aWZpZXI/OiBzdHJpbmcpOiAoKSA9PiB2b2lkIHtcbiAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FsbGJhY2tzID1cbiAgICAgIHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChub3JtYWxpemVkSWRlbnRpZmllcikgPz9cbiAgICAgIG5ldyBTZXQ8T25Jbml0Q2FsbEJhY2s8VD4+KCk7XG4gICAgZXhpc3RpbmdDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICB0aGlzLm9uSW5pdENhbGxiYWNrcy5zZXQobm9ybWFsaXplZElkZW50aWZpZXIsIGV4aXN0aW5nQ2FsbGJhY2tzKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpO1xuICAgIGlmIChleGlzdGluZ0luc3RhbmNlKSB7XG4gICAgICBjYWxsYmFjayhleGlzdGluZ0luc3RhbmNlLCBub3JtYWxpemVkSWRlbnRpZmllcik7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGV4aXN0aW5nQ2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFjayk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2Ugb25Jbml0IGNhbGxiYWNrcyBzeW5jaHJvbm91c2x5XG4gICAqIEBwYXJhbSBpbnN0YW5jZSB0aGUgc2VydmljZSBpbnN0YW5jZWBcbiAgICovXG4gIHByaXZhdGUgaW52b2tlT25Jbml0Q2FsbGJhY2tzKFxuICAgIGluc3RhbmNlOiBOYW1lU2VydmljZU1hcHBpbmdbVF0sXG4gICAgaWRlbnRpZmllcjogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChpZGVudGlmaWVyKTtcbiAgICBpZiAoIWNhbGxiYWNrcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FsbGJhY2soaW5zdGFuY2UsIGlkZW50aWZpZXIpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIGlnbm9yZSBlcnJvcnMgaW4gdGhlIG9uSW5pdCBjYWxsYmFja1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgaW5zdGFuY2VJZGVudGlmaWVyLFxuICAgIG9wdGlvbnMgPSB7fVxuICB9OiB7XG4gICAgaW5zdGFuY2VJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgb3B0aW9ucz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICB9KTogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIHwgbnVsbCB7XG4gICAgbGV0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXMuZ2V0KGluc3RhbmNlSWRlbnRpZmllcik7XG4gICAgaWYgKCFpbnN0YW5jZSAmJiB0aGlzLmNvbXBvbmVudCkge1xuICAgICAgaW5zdGFuY2UgPSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZUZhY3RvcnkodGhpcy5jb250YWluZXIsIHtcbiAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpbnN0YW5jZUlkZW50aWZpZXIpLFxuICAgICAgICBvcHRpb25zXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTtcbiAgICAgIHRoaXMuaW5zdGFuY2VzT3B0aW9ucy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBvcHRpb25zKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBJbnZva2Ugb25Jbml0IGxpc3RlbmVycy5cbiAgICAgICAqIE5vdGUgdGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQgaXMgZGlmZmVyZW50LCB3aGljaCBpcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgY3JlYXRvcixcbiAgICAgICAqIHdoaWxlIG9uSW5pdCBsaXN0ZW5lcnMgYXJlIHJlZ2lzdGVyZWQgYnkgY29uc3VtZXJzIG9mIHRoZSBwcm92aWRlci5cbiAgICAgICAqL1xuICAgICAgdGhpcy5pbnZva2VPbkluaXRDYWxsYmFja3MoaW5zdGFuY2UsIGluc3RhbmNlSWRlbnRpZmllcik7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3JkZXIgaXMgaW1wb3J0YW50XG4gICAgICAgKiBvbkluc3RhbmNlQ3JlYXRlZCgpIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpOyB3aGljaFxuICAgICAgICogbWFrZXMgYGlzSW5pdGlhbGl6ZWQoKWAgcmV0dXJuIHRydWUuXG4gICAgICAgKi9cbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKFxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXIsXG4gICAgICAgICAgICBpbnN0YW5jZVxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIGlnbm9yZSBlcnJvcnMgaW4gdGhlIG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2tcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZSB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoXG4gICAgaWRlbnRpZmllcjogc3RyaW5nID0gREVGQVVMVF9FTlRSWV9OQU1FXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgPyBpZGVudGlmaWVyIDogREVGQVVMVF9FTlRSWV9OQU1FO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaWRlbnRpZmllcjsgLy8gYXNzdW1lIG11bHRpcGxlIGluc3RhbmNlcyBhcmUgc3VwcG9ydGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHByb3ZpZGVkLlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkQXV0b0luaXRpYWxpemUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICEhdGhpcy5jb21wb25lbnQgJiZcbiAgICAgIHRoaXMuY29tcG9uZW50Lmluc3RhbnRpYXRpb25Nb2RlICE9PSBJbnN0YW50aWF0aW9uTW9kZS5FWFBMSUNJVFxuICAgICk7XG4gIH1cbn1cblxuLy8gdW5kZWZpbmVkIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIHNlcnZpY2UgZmFjdG9yeSBmb3IgdGhlIGRlZmF1bHQgaW5zdGFuY2VcbmZ1bmN0aW9uIG5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5KGlkZW50aWZpZXI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBpZGVudGlmaWVyID09PSBERUZBVUxUX0VOVFJZX05BTUUgPyB1bmRlZmluZWQgOiBpZGVudGlmaWVyO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBvbmVudEVhZ2VyPFQgZXh0ZW5kcyBOYW1lPihjb21wb25lbnQ6IENvbXBvbmVudDxUPik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29tcG9uZW50Lmluc3RhbnRpYXRpb25Nb2RlID09PSBJbnN0YW50aWF0aW9uTW9kZS5FQUdFUjtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgTmFtZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIENvbXBvbmVudENvbnRhaW5lciB0aGF0IHByb3ZpZGVzIFByb3ZpZGVycyBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudENvbnRhaW5lciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcHJvdmlkZXJzID0gbmV3IE1hcDxzdHJpbmcsIFByb3ZpZGVyPE5hbWU+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nKSB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBiZWluZyBhZGRlZFxuICAgKiBAcGFyYW0gb3ZlcndyaXRlIFdoZW4gYSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBuYW1lIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCxcbiAgICogaWYgb3ZlcndyaXRlIGlzIHRydWU6IG92ZXJ3cml0ZSB0aGUgZXhpc3RpbmcgY29tcG9uZW50IHdpdGggdGhlIG5ldyBjb21wb25lbnQgYW5kIGNyZWF0ZSBhIG5ld1xuICAgKiBwcm92aWRlciB3aXRoIHRoZSBuZXcgY29tcG9uZW50LiBJdCBjYW4gYmUgdXNlZnVsIGluIHRlc3RzIHdoZXJlIHlvdSB3YW50IHRvIHVzZSBkaWZmZXJlbnQgbW9ja3NcbiAgICogZm9yIGRpZmZlcmVudCB0ZXN0cy5cbiAgICogaWYgb3ZlcndyaXRlIGlzIGZhbHNlOiB0aHJvdyBhbiBleGNlcHRpb25cbiAgICovXG4gIGFkZENvbXBvbmVudDxUIGV4dGVuZHMgTmFtZT4oY29tcG9uZW50OiBDb21wb25lbnQ8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xuICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIHdpdGggJHt0aGlzLm5hbWV9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm92aWRlci5zZXRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfVxuXG4gIGFkZE9yT3ZlcndyaXRlQ29tcG9uZW50PFQgZXh0ZW5kcyBOYW1lPihjb21wb25lbnQ6IENvbXBvbmVudDxUPik6IHZvaWQge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5nZXRQcm92aWRlcihjb21wb25lbnQubmFtZSk7XG4gICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcbiAgICAgIC8vIGRlbGV0ZSB0aGUgZXhpc3RpbmcgcHJvdmlkZXIgZnJvbSB0aGUgY29udGFpbmVyLCBzbyB3ZSBjYW4gcmVnaXN0ZXIgdGhlIG5ldyBjb21wb25lbnRcbiAgICAgIHRoaXMucHJvdmlkZXJzLmRlbGV0ZShjb21wb25lbnQubmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRQcm92aWRlciBwcm92aWRlcyBhIHR5cGUgc2FmZSBpbnRlcmZhY2Ugd2hlcmUgaXQgY2FuIG9ubHkgYmUgY2FsbGVkIHdpdGggYSBmaWVsZCBuYW1lXG4gICAqIHByZXNlbnQgaW4gTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZS5cbiAgICpcbiAgICogRmlyZWJhc2UgU0RLcyBwcm92aWRpbmcgc2VydmljZXMgc2hvdWxkIGV4dGVuZCBOYW1lU2VydmljZU1hcHBpbmcgaW50ZXJmYWNlIHRvIHJlZ2lzdGVyXG4gICAqIHRoZW1zZWx2ZXMuXG4gICAqL1xuICBnZXRQcm92aWRlcjxUIGV4dGVuZHMgTmFtZT4obmFtZTogVCk6IFByb3ZpZGVyPFQ+IHtcbiAgICBpZiAodGhpcy5wcm92aWRlcnMuaGFzKG5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm92aWRlcnMuZ2V0KG5hbWUpIGFzIHVua25vd24gYXMgUHJvdmlkZXI8VD47XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGEgUHJvdmlkZXIgZm9yIGEgc2VydmljZSB0aGF0IGhhc24ndCByZWdpc3RlcmVkIHdpdGggRmlyZWJhc2VcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBQcm92aWRlcjxUPihuYW1lLCB0aGlzKTtcbiAgICB0aGlzLnByb3ZpZGVycy5zZXQobmFtZSwgcHJvdmlkZXIgYXMgdW5rbm93biBhcyBQcm92aWRlcjxOYW1lPik7XG5cbiAgICByZXR1cm4gcHJvdmlkZXIgYXMgUHJvdmlkZXI8VD47XG4gIH1cblxuICBnZXRQcm92aWRlcnMoKTogQXJyYXk8UHJvdmlkZXI8TmFtZT4+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnByb3ZpZGVycy52YWx1ZXMoKSk7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgdHlwZSBMb2dMZXZlbFN0cmluZyA9XG4gIHwgJ2RlYnVnJ1xuICB8ICd2ZXJib3NlJ1xuICB8ICdpbmZvJ1xuICB8ICd3YXJuJ1xuICB8ICdlcnJvcidcbiAgfCAnc2lsZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBMb2dPcHRpb25zIHtcbiAgbGV2ZWw6IExvZ0xldmVsU3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBMb2dDYWxsYmFjayA9IChjYWxsYmFja1BhcmFtczogTG9nQ2FsbGJhY2tQYXJhbXMpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nQ2FsbGJhY2tQYXJhbXMge1xuICBsZXZlbDogTG9nTGV2ZWxTdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgYXJnczogdW5rbm93bltdO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgTG9nZ2VyIGluc3RhbmNlc1xuICovXG5leHBvcnQgY29uc3QgaW5zdGFuY2VzOiBMb2dnZXJbXSA9IFtdO1xuXG4vKipcbiAqIFRoZSBKUyBTREsgc3VwcG9ydHMgNSBsb2cgbGV2ZWxzIGFuZCBhbHNvIGFsbG93cyBhIHVzZXIgdGhlIGFiaWxpdHkgdG9cbiAqIHNpbGVuY2UgdGhlIGxvZ3MgYWx0b2dldGhlci5cbiAqXG4gKiBUaGUgb3JkZXIgaXMgYSBmb2xsb3dzOlxuICogREVCVUcgPCBWRVJCT1NFIDwgSU5GTyA8IFdBUk4gPCBFUlJPUlxuICpcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCB3aWxsIGJlIGNhcHR1cmVkIChpLmUuIGlmXG4gKiB5b3Ugc2V0IHRoZSBsb2cgbGV2ZWwgdG8gYElORk9gLCBlcnJvcnMgd2lsbCBzdGlsbCBiZSBsb2dnZWQsIGJ1dCBgREVCVUdgIGFuZFxuICogYFZFUkJPU0VgIGxvZ3Mgd2lsbCBub3QpXG4gKi9cbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgREVCVUcsXG4gIFZFUkJPU0UsXG4gIElORk8sXG4gIFdBUk4sXG4gIEVSUk9SLFxuICBTSUxFTlRcbn1cblxuY29uc3QgbGV2ZWxTdHJpbmdUb0VudW06IHsgW2tleSBpbiBMb2dMZXZlbFN0cmluZ106IExvZ0xldmVsIH0gPSB7XG4gICdkZWJ1Zyc6IExvZ0xldmVsLkRFQlVHLFxuICAndmVyYm9zZSc6IExvZ0xldmVsLlZFUkJPU0UsXG4gICdpbmZvJzogTG9nTGV2ZWwuSU5GTyxcbiAgJ3dhcm4nOiBMb2dMZXZlbC5XQVJOLFxuICAnZXJyb3InOiBMb2dMZXZlbC5FUlJPUixcbiAgJ3NpbGVudCc6IExvZ0xldmVsLlNJTEVOVFxufTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBsb2cgbGV2ZWxcbiAqL1xuY29uc3QgZGVmYXVsdExvZ0xldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLklORk87XG5cbi8qKlxuICogV2UgYWxsb3cgdXNlcnMgdGhlIGFiaWxpdHkgdG8gcGFzcyB0aGVpciBvd24gbG9nIGhhbmRsZXIuIFdlIHdpbGwgcGFzcyB0aGVcbiAqIHR5cGUgb2YgbG9nLCB0aGUgY3VycmVudCBsb2cgbGV2ZWwsIGFuZCBhbnkgb3RoZXIgYXJndW1lbnRzIHBhc3NlZCAoaS5lLiB0aGVcbiAqIG1lc3NhZ2VzIHRoYXQgdGhlIHVzZXIgd2FudHMgdG8gbG9nKSB0byB0aGlzIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgdHlwZSBMb2dIYW5kbGVyID0gKFxuICBsb2dnZXJJbnN0YW5jZTogTG9nZ2VyLFxuICBsb2dUeXBlOiBMb2dMZXZlbCxcbiAgLi4uYXJnczogdW5rbm93bltdXG4pID0+IHZvaWQ7XG5cbi8qKlxuICogQnkgZGVmYXVsdCwgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIGRldmVsb3BlciBjb25zb2xlIChpblxuICogY2hyb21lKS4gVG8gYXZvaWQgZm9yY2luZyB1c2VycyB0byBoYXZlIHRvIG9wdC1pbiB0byB0aGVzZSBsb2dzIHR3aWNlXG4gKiAoaS5lLiBvbmNlIGZvciBmaXJlYmFzZSwgYW5kIG9uY2UgaW4gdGhlIGNvbnNvbGUpLCB3ZSBhcmUgc2VuZGluZyBgREVCVUdgXG4gKiBsb2dzIHRvIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uLlxuICovXG5jb25zdCBDb25zb2xlTWV0aG9kID0ge1xuICBbTG9nTGV2ZWwuREVCVUddOiAnbG9nJyxcbiAgW0xvZ0xldmVsLlZFUkJPU0VdOiAnbG9nJyxcbiAgW0xvZ0xldmVsLklORk9dOiAnaW5mbycsXG4gIFtMb2dMZXZlbC5XQVJOXTogJ3dhcm4nLFxuICBbTG9nTGV2ZWwuRVJST1JdOiAnZXJyb3InXG59O1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGxvZyBoYW5kbGVyIHdpbGwgZm9yd2FyZCBERUJVRywgVkVSQk9TRSwgSU5GTywgV0FSTiwgYW5kIEVSUk9SXG4gKiBtZXNzYWdlcyBvbiB0byB0aGVpciBjb3JyZXNwb25kaW5nIGNvbnNvbGUgY291bnRlcnBhcnRzIChpZiB0aGUgbG9nIG1ldGhvZFxuICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IGxvZyBsZXZlbClcbiAqL1xuY29uc3QgZGVmYXVsdExvZ0hhbmRsZXI6IExvZ0hhbmRsZXIgPSAoaW5zdGFuY2UsIGxvZ1R5cGUsIC4uLmFyZ3MpOiB2b2lkID0+IHtcbiAgaWYgKGxvZ1R5cGUgPCBpbnN0YW5jZS5sb2dMZXZlbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gIGNvbnN0IG1ldGhvZCA9IENvbnNvbGVNZXRob2RbbG9nVHlwZSBhcyBrZXlvZiB0eXBlb2YgQ29uc29sZU1ldGhvZF07XG4gIGlmIChtZXRob2QpIHtcbiAgICBjb25zb2xlW21ldGhvZCBhcyAnbG9nJyB8ICdpbmZvJyB8ICd3YXJuJyB8ICdlcnJvciddKFxuICAgICAgYFske25vd31dICAke2luc3RhbmNlLm5hbWV9OmAsXG4gICAgICAuLi5hcmdzXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgQXR0ZW1wdGVkIHRvIGxvZyBhIG1lc3NhZ2Ugd2l0aCBhbiBpbnZhbGlkIGxvZ1R5cGUgKHZhbHVlOiAke2xvZ1R5cGV9KWBcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgLyoqXG4gICAqIEdpdmVzIHlvdSBhbiBpbnN0YW5jZSBvZiBhIExvZ2dlciB0byBjYXB0dXJlIG1lc3NhZ2VzIGFjY29yZGluZyB0b1xuICAgKiBGaXJlYmFzZSdzIGxvZ2dpbmcgc2NoZW1lLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSB0aGF0IHRoZSBsb2dzIHdpbGwgYmUgYXNzb2NpYXRlZCB3aXRoXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XG4gICAgLyoqXG4gICAgICogQ2FwdHVyZSB0aGUgY3VycmVudCBpbnN0YW5jZSBmb3IgbGF0ZXIgdXNlXG4gICAgICovXG4gICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGxvZyBsZXZlbCBvZiB0aGUgZ2l2ZW4gTG9nZ2VyIGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfbG9nTGV2ZWwgPSBkZWZhdWx0TG9nTGV2ZWw7XG5cbiAgZ2V0IGxvZ0xldmVsKCk6IExvZ0xldmVsIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nTGV2ZWw7XG4gIH1cblxuICBzZXQgbG9nTGV2ZWwodmFsOiBMb2dMZXZlbCkge1xuICAgIGlmICghKHZhbCBpbiBMb2dMZXZlbCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgdmFsdWUgXCIke3ZhbH1cIiBhc3NpZ25lZCB0byBcXGBsb2dMZXZlbFxcYGApO1xuICAgIH1cbiAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbDtcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIHNldHRlci9nZXR0ZXIgaGF2aW5nIHRvIGJlIHRoZSBzYW1lIHR5cGUuXG4gIHNldExvZ0xldmVsKHZhbDogTG9nTGV2ZWwgfCBMb2dMZXZlbFN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2xvZ0xldmVsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBsZXZlbFN0cmluZ1RvRW51bVt2YWxdIDogdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIChpbnRlcm5hbCkgbG9nIGhhbmRsZXIgZm9yIHRoZSBMb2dnZXIgaW5zdGFuY2UuXG4gICAqIENhbiBiZSBzZXQgdG8gYSBuZXcgZnVuY3Rpb24gaW4gaW50ZXJuYWwgcGFja2FnZSBjb2RlIGJ1dCBub3QgYnkgdXNlci5cbiAgICovXG4gIHByaXZhdGUgX2xvZ0hhbmRsZXI6IExvZ0hhbmRsZXIgPSBkZWZhdWx0TG9nSGFuZGxlcjtcbiAgZ2V0IGxvZ0hhbmRsZXIoKTogTG9nSGFuZGxlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0hhbmRsZXI7XG4gIH1cbiAgc2V0IGxvZ0hhbmRsZXIodmFsOiBMb2dIYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIGFzc2lnbmVkIHRvIGBsb2dIYW5kbGVyYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fbG9nSGFuZGxlciA9IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uYWwsIGFkZGl0aW9uYWwsIHVzZXItZGVmaW5lZCBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cbiAgICovXG4gIHByaXZhdGUgX3VzZXJMb2dIYW5kbGVyOiBMb2dIYW5kbGVyIHwgbnVsbCA9IG51bGw7XG4gIGdldCB1c2VyTG9nSGFuZGxlcigpOiBMb2dIYW5kbGVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJMb2dIYW5kbGVyO1xuICB9XG4gIHNldCB1c2VyTG9nSGFuZGxlcih2YWw6IExvZ0hhbmRsZXIgfCBudWxsKSB7XG4gICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9ucyBiZWxvdyBhcmUgYWxsIGJhc2VkIG9uIHRoZSBgY29uc29sZWAgaW50ZXJmYWNlXG4gICAqL1xuXG4gIGRlYnVnKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkRFQlVHLCAuLi5hcmdzKTtcbiAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkRFQlVHLCAuLi5hcmdzKTtcbiAgfVxuICBsb2coLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiZcbiAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLlZFUkJPU0UsIC4uLmFyZ3MpO1xuICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuVkVSQk9TRSwgLi4uYXJncyk7XG4gIH1cbiAgaW5mbyguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5JTkZPLCAuLi5hcmdzKTtcbiAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLklORk8sIC4uLmFyZ3MpO1xuICB9XG4gIHdhcm4oLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuV0FSTiwgLi4uYXJncyk7XG4gICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5XQVJOLCAuLi5hcmdzKTtcbiAgfVxuICBlcnJvciguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5FUlJPUiwgLi4uYXJncyk7XG4gICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5FUlJPUiwgLi4uYXJncyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsOiBMb2dMZXZlbFN0cmluZyB8IExvZ0xldmVsKTogdm9pZCB7XG4gIGluc3RhbmNlcy5mb3JFYWNoKGluc3QgPT4ge1xuICAgIGluc3Quc2V0TG9nTGV2ZWwobGV2ZWwpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJMb2dIYW5kbGVyKFxuICBsb2dDYWxsYmFjazogTG9nQ2FsbGJhY2sgfCBudWxsLFxuICBvcHRpb25zPzogTG9nT3B0aW9uc1xuKTogdm9pZCB7XG4gIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgaW5zdGFuY2VzKSB7XG4gICAgbGV0IGN1c3RvbUxvZ0xldmVsOiBMb2dMZXZlbCB8IG51bGwgPSBudWxsO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGV2ZWwpIHtcbiAgICAgIGN1c3RvbUxvZ0xldmVsID0gbGV2ZWxTdHJpbmdUb0VudW1bb3B0aW9ucy5sZXZlbF07XG4gICAgfVxuICAgIGlmIChsb2dDYWxsYmFjayA9PT0gbnVsbCkge1xuICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS51c2VyTG9nSGFuZGxlciA9IChcbiAgICAgICAgaW5zdGFuY2U6IExvZ2dlcixcbiAgICAgICAgbGV2ZWw6IExvZ0xldmVsLFxuICAgICAgICAuLi5hcmdzOiB1bmtub3duW11cbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXJnc1xuICAgICAgICAgIC5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIGlmIChhcmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFyZztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcmcudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFyZy5tZXNzYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsdGVyKGFyZyA9PiBhcmcpXG4gICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgICAgaWYgKGxldmVsID49IChjdXN0b21Mb2dMZXZlbCA/PyBpbnN0YW5jZS5sb2dMZXZlbCkpIHtcbiAgICAgICAgICBsb2dDYWxsYmFjayh7XG4gICAgICAgICAgICBsZXZlbDogTG9nTGV2ZWxbbGV2ZWxdLnRvTG93ZXJDYXNlKCkgYXMgTG9nTGV2ZWxTdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIHR5cGU6IGluc3RhbmNlLm5hbWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsICJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldCh2YWx1ZSwgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICAgIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAgICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuZXhwb3J0IHsgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGFzIGEsIGluc3RhbmNlT2ZBbnkgYXMgaSwgcmVwbGFjZVRyYXBzIGFzIHIsIHVud3JhcCBhcyB1LCB3cmFwIGFzIHcgfTtcbiIsICJpbXBvcnQgeyB3IGFzIHdyYXAsIHIgYXMgcmVwbGFjZVRyYXBzIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5leHBvcnQgeyB1IGFzIHVud3JhcCwgdyBhcyB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5mdW5jdGlvbiBvcGVuREIobmFtZSwgdmVyc2lvbiwgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gICAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICAgIGlmICh1cGdyYWRlKSB7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBncmFkZSh3cmFwKHJlcXVlc3QucmVzdWx0KSwgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZClcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKCkgPT4gYmxvY2tlZCgpKTtcbiAgICBvcGVuUHJvbWlzZVxuICAgICAgICAudGhlbigoZGIpID0+IHtcbiAgICAgICAgaWYgKHRlcm1pbmF0ZWQpXG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHRlcm1pbmF0ZWQoKSk7XG4gICAgICAgIGlmIChibG9ja2luZylcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoKSA9PiBibG9ja2luZygpKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZClcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKCkgPT4gYmxvY2tlZCgpKTtcbiAgICByZXR1cm4gd3JhcChyZXF1ZXN0KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG59XG5cbmNvbnN0IHJlYWRNZXRob2RzID0gWydnZXQnLCAnZ2V0S2V5JywgJ2dldEFsbCcsICdnZXRBbGxLZXlzJywgJ2NvdW50J107XG5jb25zdCB3cml0ZU1ldGhvZHMgPSBbJ3B1dCcsICdhZGQnLCAnZGVsZXRlJywgJ2NsZWFyJ107XG5jb25zdCBjYWNoZWRNZXRob2RzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkge1xuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIElEQkRhdGFiYXNlICYmXG4gICAgICAgICEocHJvcCBpbiB0YXJnZXQpICYmXG4gICAgICAgIHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FjaGVkTWV0aG9kcy5nZXQocHJvcCkpXG4gICAgICAgIHJldHVybiBjYWNoZWRNZXRob2RzLmdldChwcm9wKTtcbiAgICBjb25zdCB0YXJnZXRGdW5jTmFtZSA9IHByb3AucmVwbGFjZSgvRnJvbUluZGV4JC8sICcnKTtcbiAgICBjb25zdCB1c2VJbmRleCA9IHByb3AgIT09IHRhcmdldEZ1bmNOYW1lO1xuICAgIGNvbnN0IGlzV3JpdGUgPSB3cml0ZU1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpO1xuICAgIGlmIChcbiAgICAvLyBCYWlsIGlmIHRoZSB0YXJnZXQgZG9lc24ndCBleGlzdCBvbiB0aGUgdGFyZ2V0LiBFZywgZ2V0QWxsIGlzbid0IGluIEVkZ2UuXG4gICAgISh0YXJnZXRGdW5jTmFtZSBpbiAodXNlSW5kZXggPyBJREJJbmRleCA6IElEQk9iamVjdFN0b3JlKS5wcm90b3R5cGUpIHx8XG4gICAgICAgICEoaXNXcml0ZSB8fCByZWFkTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gYXN5bmMgZnVuY3Rpb24gKHN0b3JlTmFtZSwgLi4uYXJncykge1xuICAgICAgICAvLyBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiB1bmRlZmluZWQgZ3ppcHBzIGJldHRlciwgYnV0IGZhaWxzIGluIEVkZ2UgOihcbiAgICAgICAgY29uc3QgdHggPSB0aGlzLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogJ3JlYWRvbmx5Jyk7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0eC5zdG9yZTtcbiAgICAgICAgaWYgKHVzZUluZGV4KVxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LmluZGV4KGFyZ3Muc2hpZnQoKSk7XG4gICAgICAgIC8vIE11c3QgcmVqZWN0IGlmIG9wIHJlamVjdHMuXG4gICAgICAgIC8vIElmIGl0J3MgYSB3cml0ZSBvcGVyYXRpb24sIG11c3QgcmVqZWN0IGlmIHR4LmRvbmUgcmVqZWN0cy5cbiAgICAgICAgLy8gTXVzdCByZWplY3Qgd2l0aCBvcCByZWplY3Rpb24gZmlyc3QuXG4gICAgICAgIC8vIE11c3QgcmVzb2x2ZSB3aXRoIG9wIHZhbHVlLlxuICAgICAgICAvLyBNdXN0IGhhbmRsZSBib3RoIHByb21pc2VzIChubyB1bmhhbmRsZWQgcmVqZWN0aW9ucylcbiAgICAgICAgcmV0dXJuIChhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0YXJnZXRbdGFyZ2V0RnVuY05hbWVdKC4uLmFyZ3MpLFxuICAgICAgICAgICAgaXNXcml0ZSAmJiB0eC5kb25lLFxuICAgICAgICBdKSlbMF07XG4gICAgfTtcbiAgICBjYWNoZWRNZXRob2RzLnNldChwcm9wLCBtZXRob2QpO1xuICAgIHJldHVybiBtZXRob2Q7XG59XG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAgIC4uLm9sZFRyYXBzLFxuICAgIGdldDogKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpID0+IGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSxcbiAgICBoYXM6ICh0YXJnZXQsIHByb3ApID0+ICEhZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcCksXG59KSk7XG5cbmV4cG9ydCB7IGRlbGV0ZURCLCBvcGVuREIgfTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRDb250YWluZXIsXG4gIENvbXBvbmVudFR5cGUsXG4gIFByb3ZpZGVyLFxuICBOYW1lXG59IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlLCBWZXJzaW9uU2VydmljZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIFBsYXRmb3JtTG9nZ2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXIpIHt9XG4gIC8vIEluIGluaXRpYWwgaW1wbGVtZW50YXRpb24sIHRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgaW5zdGFsbGF0aW9ucyBvblxuICAvLyBhdXRoIHRva2VuIHJlZnJlc2gsIGFuZCBpbnN0YWxsYXRpb25zIHdpbGwgc2VuZCB0aGlzIHN0cmluZy5cbiAgZ2V0UGxhdGZvcm1JbmZvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXJzKCk7XG4gICAgLy8gTG9vcCB0aHJvdWdoIHByb3ZpZGVycyBhbmQgZ2V0IGxpYnJhcnkvdmVyc2lvbiBwYWlycyBmcm9tIGFueSB0aGF0IGFyZVxuICAgIC8vIHZlcnNpb24gY29tcG9uZW50cy5cbiAgICByZXR1cm4gcHJvdmlkZXJzXG4gICAgICAubWFwKHByb3ZpZGVyID0+IHtcbiAgICAgICAgaWYgKGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikpIHtcbiAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gcHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCkgYXMgVmVyc2lvblNlcnZpY2U7XG4gICAgICAgICAgcmV0dXJuIGAke3NlcnZpY2UubGlicmFyeX0vJHtzZXJ2aWNlLnZlcnNpb259YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIobG9nU3RyaW5nID0+IGxvZ1N0cmluZylcbiAgICAgIC5qb2luKCcgJyk7XG4gIH1cbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBwcm92aWRlciBjaGVjayBpZiB0aGlzIHByb3ZpZGVyIHByb3ZpZGVzIGEgVmVyc2lvblNlcnZpY2VcbiAqXG4gKiBOT1RFOiBVc2luZyBQcm92aWRlcjwnYXBwLXZlcnNpb24nPiBpcyBhIGhhY2sgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcHJvdmlkZXJcbiAqIHByb3ZpZGVzIFZlcnNpb25TZXJ2aWNlLiBUaGUgcHJvdmlkZXIgaXMgbm90IG5lY2Vzc2FyaWx5IGEgJ2FwcC12ZXJzaW9uJ1xuICogcHJvdmlkZXIuXG4gKi9cbmZ1bmN0aW9uIGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcjogUHJvdmlkZXI8TmFtZT4pOiBib29sZWFuIHtcbiAgY29uc3QgY29tcG9uZW50ID0gcHJvdmlkZXIuZ2V0Q29tcG9uZW50KCk7XG4gIHJldHVybiBjb21wb25lbnQ/LnR5cGUgPT09IENvbXBvbmVudFR5cGUuVkVSU0lPTjtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAZmlyZWJhc2UvbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0BmaXJlYmFzZS9hcHAnKTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBuYW1lIGFzIGFwcE5hbWUgfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhcHBDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vYXBwLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhbmFseXRpY3NDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvYW5hbHl0aWNzLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhbmFseXRpY3NOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvYW5hbHl0aWNzL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGFwcENoZWNrQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2FwcC1jaGVjay1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYXBwQ2hlY2tOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvYXBwLWNoZWNrL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGF1dGhOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhdXRoQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGRhdGFiYXNlTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2RhdGFiYXNlL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGRhdGFiYXNlQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2RhdGFiYXNlLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBmdW5jdGlvbnNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvZnVuY3Rpb25zL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGZ1bmN0aW9uc0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9mdW5jdGlvbnMtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGluc3RhbGxhdGlvbnNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvaW5zdGFsbGF0aW9ucy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBpbnN0YWxsYXRpb25zQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2luc3RhbGxhdGlvbnMtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIG1lc3NhZ2luZ05hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9tZXNzYWdpbmcvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgbWVzc2FnaW5nQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL21lc3NhZ2luZy1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgcGVyZm9ybWFuY2VOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvcGVyZm9ybWFuY2UvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgcGVyZm9ybWFuY2VDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvcGVyZm9ybWFuY2UtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHJlbW90ZUNvbmZpZ05hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9yZW1vdGUtY29uZmlnL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHJlbW90ZUNvbmZpZ0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9yZW1vdGUtY29uZmlnLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBzdG9yYWdlTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JhZ2UvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgc3RvcmFnZUNvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9zdG9yYWdlLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBmaXJlc3RvcmVOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvZmlyZXN0b3JlL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGZpcmVzdG9yZUNvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9maXJlc3RvcmUtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHBhY2thZ2VOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvZmlyZWJhc2UvcGFja2FnZS5qc29uJztcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBhcHAgbmFtZVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XG5cbmV4cG9ydCBjb25zdCBQTEFURk9STV9MT0dfU1RSSU5HID0ge1xuICBbYXBwTmFtZV06ICdmaXJlLWNvcmUnLFxuICBbYXBwQ29tcGF0TmFtZV06ICdmaXJlLWNvcmUtY29tcGF0JyxcbiAgW2FuYWx5dGljc05hbWVdOiAnZmlyZS1hbmFseXRpY3MnLFxuICBbYW5hbHl0aWNzQ29tcGF0TmFtZV06ICdmaXJlLWFuYWx5dGljcy1jb21wYXQnLFxuICBbYXBwQ2hlY2tOYW1lXTogJ2ZpcmUtYXBwLWNoZWNrJyxcbiAgW2FwcENoZWNrQ29tcGF0TmFtZV06ICdmaXJlLWFwcC1jaGVjay1jb21wYXQnLFxuICBbYXV0aE5hbWVdOiAnZmlyZS1hdXRoJyxcbiAgW2F1dGhDb21wYXROYW1lXTogJ2ZpcmUtYXV0aC1jb21wYXQnLFxuICBbZGF0YWJhc2VOYW1lXTogJ2ZpcmUtcnRkYicsXG4gIFtkYXRhYmFzZUNvbXBhdE5hbWVdOiAnZmlyZS1ydGRiLWNvbXBhdCcsXG4gIFtmdW5jdGlvbnNOYW1lXTogJ2ZpcmUtZm4nLFxuICBbZnVuY3Rpb25zQ29tcGF0TmFtZV06ICdmaXJlLWZuLWNvbXBhdCcsXG4gIFtpbnN0YWxsYXRpb25zTmFtZV06ICdmaXJlLWlpZCcsXG4gIFtpbnN0YWxsYXRpb25zQ29tcGF0TmFtZV06ICdmaXJlLWlpZC1jb21wYXQnLFxuICBbbWVzc2FnaW5nTmFtZV06ICdmaXJlLWZjbScsXG4gIFttZXNzYWdpbmdDb21wYXROYW1lXTogJ2ZpcmUtZmNtLWNvbXBhdCcsXG4gIFtwZXJmb3JtYW5jZU5hbWVdOiAnZmlyZS1wZXJmJyxcbiAgW3BlcmZvcm1hbmNlQ29tcGF0TmFtZV06ICdmaXJlLXBlcmYtY29tcGF0JyxcbiAgW3JlbW90ZUNvbmZpZ05hbWVdOiAnZmlyZS1yYycsXG4gIFtyZW1vdGVDb25maWdDb21wYXROYW1lXTogJ2ZpcmUtcmMtY29tcGF0JyxcbiAgW3N0b3JhZ2VOYW1lXTogJ2ZpcmUtZ2NzJyxcbiAgW3N0b3JhZ2VDb21wYXROYW1lXTogJ2ZpcmUtZ2NzLWNvbXBhdCcsXG4gIFtmaXJlc3RvcmVOYW1lXTogJ2ZpcmUtZnN0JyxcbiAgW2ZpcmVzdG9yZUNvbXBhdE5hbWVdOiAnZmlyZS1mc3QtY29tcGF0JyxcbiAgJ2ZpcmUtanMnOiAnZmlyZS1qcycsIC8vIFBsYXRmb3JtIGlkZW50aWZpZXIgZm9yIEpTIFNESy5cbiAgW3BhY2thZ2VOYW1lXTogJ2ZpcmUtanMtYWxsJ1xufSBhcyBjb25zdDtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBGaXJlYmFzZUFwcCB9IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgUHJvdmlkZXIsIE5hbWUgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IERFRkFVTFRfRU5UUllfTkFNRSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZpcmViYXNlQXBwSW1wbCB9IGZyb20gJy4vZmlyZWJhc2VBcHAnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgX2FwcHMgPSBuZXcgTWFwPHN0cmluZywgRmlyZWJhc2VBcHA+KCk7XG5cbi8qKlxuICogUmVnaXN0ZXJlZCBjb21wb25lbnRzLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IGNvbnN0IF9jb21wb25lbnRzID0gbmV3IE1hcDxzdHJpbmcsIENvbXBvbmVudDxhbnk+PigpO1xuXG4vKipcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfYWRkQ29tcG9uZW50PFQgZXh0ZW5kcyBOYW1lPihcbiAgYXBwOiBGaXJlYmFzZUFwcCxcbiAgY29tcG9uZW50OiBDb21wb25lbnQ8VD5cbik6IHZvaWQge1xuICB0cnkge1xuICAgIChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsKS5jb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBsb2dnZXIuZGVidWcoXG4gICAgICBgQ29tcG9uZW50ICR7Y29tcG9uZW50Lm5hbWV9IGZhaWxlZCB0byByZWdpc3RlciB3aXRoIEZpcmViYXNlQXBwICR7YXBwLm5hbWV9YCxcbiAgICAgIGVcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50KFxuICBhcHA6IEZpcmViYXNlQXBwLFxuICBjb21wb25lbnQ6IENvbXBvbmVudFxuKTogdm9pZCB7XG4gIChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsKS5jb250YWluZXIuYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoY29tcG9uZW50KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudCAtIHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXJcbiAqIEByZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaXMgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZWdpc3RlckNvbXBvbmVudDxUIGV4dGVuZHMgTmFtZT4oXG4gIGNvbXBvbmVudDogQ29tcG9uZW50PFQ+XG4pOiBib29sZWFuIHtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICBpZiAoX2NvbXBvbmVudHMuaGFzKGNvbXBvbmVudE5hbWUpKSB7XG4gICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgYFRoZXJlIHdlcmUgbXVsdGlwbGUgYXR0ZW1wdHMgdG8gcmVnaXN0ZXIgY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX0uYFxuICAgICk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfY29tcG9uZW50cy5zZXQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcblxuICAvLyBhZGQgdGhlIGNvbXBvbmVudCB0byBleGlzdGluZyBhcHAgaW5zdGFuY2VzXG4gIGZvciAoY29uc3QgYXBwIG9mIF9hcHBzLnZhbHVlcygpKSB7XG4gICAgX2FkZENvbXBvbmVudChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsLCBjb21wb25lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBhcHAgLSBGaXJlYmFzZUFwcCBpbnN0YW5jZVxuICogQHBhcmFtIG5hbWUgLSBzZXJ2aWNlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB0aGUgcHJvdmlkZXIgZm9yIHRoZSBzZXJ2aWNlIHdpdGggdGhlIG1hdGNoaW5nIG5hbWVcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRQcm92aWRlcjxUIGV4dGVuZHMgTmFtZT4oXG4gIGFwcDogRmlyZWJhc2VBcHAsXG4gIG5hbWU6IFRcbik6IFByb3ZpZGVyPFQ+IHtcbiAgY29uc3QgaGVhcnRiZWF0Q29udHJvbGxlciA9IChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsKS5jb250YWluZXJcbiAgICAuZ2V0UHJvdmlkZXIoJ2hlYXJ0YmVhdCcpXG4gICAgLmdldEltbWVkaWF0ZSh7IG9wdGlvbmFsOiB0cnVlIH0pO1xuICBpZiAoaGVhcnRiZWF0Q29udHJvbGxlcikge1xuICAgIHZvaWQgaGVhcnRiZWF0Q29udHJvbGxlci50cmlnZ2VySGVhcnRiZWF0KCk7XG4gIH1cbiAgcmV0dXJuIChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsKS5jb250YWluZXIuZ2V0UHJvdmlkZXIobmFtZSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBhcHAgLSBGaXJlYmFzZUFwcCBpbnN0YW5jZVxuICogQHBhcmFtIG5hbWUgLSBzZXJ2aWNlIG5hbWVcbiAqIEBwYXJhbSBpbnN0YW5jZUlkZW50aWZpZXIgLSBzZXJ2aWNlIGluc3RhbmNlIGlkZW50aWZpZXIgaW4gY2FzZSB0aGUgc2VydmljZSBzdXBwb3J0cyBtdWx0aXBsZSBpbnN0YW5jZXNcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZW1vdmVTZXJ2aWNlSW5zdGFuY2U8VCBleHRlbmRzIE5hbWU+KFxuICBhcHA6IEZpcmViYXNlQXBwLFxuICBuYW1lOiBULFxuICBpbnN0YW5jZUlkZW50aWZpZXI6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRVxuKTogdm9pZCB7XG4gIF9nZXRQcm92aWRlcihhcHAsIG5hbWUpLmNsZWFySW5zdGFuY2UoaW5zdGFuY2VJZGVudGlmaWVyKTtcbn1cblxuLyoqXG4gKiBUZXN0IG9ubHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jbGVhckNvbXBvbmVudHMoKTogdm9pZCB7XG4gIF9jb21wb25lbnRzLmNsZWFyKCk7XG59XG5cbi8qKlxuICogRXhwb3J0ZWQgaW4gb3JkZXIgdG8gYmUgdXNlZCBpbiBhcHAtY29tcGF0IHBhY2thZ2VcbiAqL1xuZXhwb3J0IHsgREVGQVVMVF9FTlRSWV9OQU1FIGFzIF9ERUZBVUxUX0VOVFJZX05BTUUgfTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBFcnJvckZhY3RvcnksIEVycm9yTWFwIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgZW51bSBBcHBFcnJvciB7XG4gIE5PX0FQUCA9ICduby1hcHAnLFxuICBCQURfQVBQX05BTUUgPSAnYmFkLWFwcC1uYW1lJyxcbiAgRFVQTElDQVRFX0FQUCA9ICdkdXBsaWNhdGUtYXBwJyxcbiAgQVBQX0RFTEVURUQgPSAnYXBwLWRlbGV0ZWQnLFxuICBOT19PUFRJT05TID0gJ25vLW9wdGlvbnMnLFxuICBJTlZBTElEX0FQUF9BUkdVTUVOVCA9ICdpbnZhbGlkLWFwcC1hcmd1bWVudCcsXG4gIElOVkFMSURfTE9HX0FSR1VNRU5UID0gJ2ludmFsaWQtbG9nLWFyZ3VtZW50JyxcbiAgSURCX09QRU4gPSAnaWRiLW9wZW4nLFxuICBJREJfR0VUID0gJ2lkYi1nZXQnLFxuICBJREJfV1JJVEUgPSAnaWRiLXNldCcsXG4gIElEQl9ERUxFVEUgPSAnaWRiLWRlbGV0ZSdcbn1cblxuY29uc3QgRVJST1JTOiBFcnJvck1hcDxBcHBFcnJvcj4gPSB7XG4gIFtBcHBFcnJvci5OT19BUFBdOlxuICAgIFwiTm8gRmlyZWJhc2UgQXBwICd7JGFwcE5hbWV9JyBoYXMgYmVlbiBjcmVhdGVkIC0gXCIgK1xuICAgICdjYWxsIEZpcmViYXNlIEFwcC5pbml0aWFsaXplQXBwKCknLFxuICBbQXBwRXJyb3IuQkFEX0FQUF9OQU1FXTogXCJJbGxlZ2FsIEFwcCBuYW1lOiAneyRhcHBOYW1lfVwiLFxuICBbQXBwRXJyb3IuRFVQTElDQVRFX0FQUF06XG4gICAgXCJGaXJlYmFzZSBBcHAgbmFtZWQgJ3skYXBwTmFtZX0nIGFscmVhZHkgZXhpc3RzIHdpdGggZGlmZmVyZW50IG9wdGlvbnMgb3IgY29uZmlnXCIsXG4gIFtBcHBFcnJvci5BUFBfREVMRVRFRF06IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGRlbGV0ZWRcIixcbiAgW0FwcEVycm9yLk5PX09QVElPTlNdOlxuICAgICdOZWVkIHRvIHByb3ZpZGUgb3B0aW9ucywgd2hlbiBub3QgYmVpbmcgZGVwbG95ZWQgdG8gaG9zdGluZyB2aWEgc291cmNlLicsXG4gIFtBcHBFcnJvci5JTlZBTElEX0FQUF9BUkdVTUVOVF06XG4gICAgJ2ZpcmViYXNlLnskYXBwTmFtZX0oKSB0YWtlcyBlaXRoZXIgbm8gYXJndW1lbnQgb3IgYSAnICtcbiAgICAnRmlyZWJhc2UgQXBwIGluc3RhbmNlLicsXG4gIFtBcHBFcnJvci5JTlZBTElEX0xPR19BUkdVTUVOVF06XG4gICAgJ0ZpcnN0IGFyZ3VtZW50IHRvIGBvbkxvZ2AgbXVzdCBiZSBudWxsIG9yIGEgZnVuY3Rpb24uJyxcbiAgW0FwcEVycm9yLklEQl9PUEVOXTpcbiAgICAnRXJyb3IgdGhyb3duIHdoZW4gb3BlbmluZyBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxuICBbQXBwRXJyb3IuSURCX0dFVF06XG4gICAgJ0Vycm9yIHRocm93biB3aGVuIHJlYWRpbmcgZnJvbSBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxuICBbQXBwRXJyb3IuSURCX1dSSVRFXTpcbiAgICAnRXJyb3IgdGhyb3duIHdoZW4gd3JpdGluZyB0byBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxuICBbQXBwRXJyb3IuSURCX0RFTEVURV06XG4gICAgJ0Vycm9yIHRocm93biB3aGVuIGRlbGV0aW5nIGZyb20gSW5kZXhlZERCLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJ1xufTtcblxuaW50ZXJmYWNlIEVycm9yUGFyYW1zIHtcbiAgW0FwcEVycm9yLk5PX0FQUF06IHsgYXBwTmFtZTogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5CQURfQVBQX05BTUVdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuRFVQTElDQVRFX0FQUF06IHsgYXBwTmFtZTogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5BUFBfREVMRVRFRF06IHsgYXBwTmFtZTogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5JTlZBTElEX0FQUF9BUkdVTUVOVF06IHsgYXBwTmFtZTogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5JREJfT1BFTl06IHsgb3JpZ2luYWxFcnJvck1lc3NhZ2U/OiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLklEQl9HRVRdOiB7IG9yaWdpbmFsRXJyb3JNZXNzYWdlPzogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5JREJfV1JJVEVdOiB7IG9yaWdpbmFsRXJyb3JNZXNzYWdlPzogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5JREJfREVMRVRFXTogeyBvcmlnaW5hbEVycm9yTWVzc2FnZT86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgY29uc3QgRVJST1JfRkFDVE9SWSA9IG5ldyBFcnJvckZhY3Rvcnk8QXBwRXJyb3IsIEVycm9yUGFyYW1zPihcbiAgJ2FwcCcsXG4gICdGaXJlYmFzZScsXG4gIEVSUk9SU1xuKTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBGaXJlYmFzZUFwcCxcbiAgRmlyZWJhc2VPcHRpb25zLFxuICBGaXJlYmFzZUFwcFNldHRpbmdzXG59IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudENvbnRhaW5lcixcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRUeXBlXG59IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgQXBwRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5cbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUFwcEltcGwgaW1wbGVtZW50cyBGaXJlYmFzZUFwcCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX29wdGlvbnM6IEZpcmViYXNlT3B0aW9ucztcbiAgcHJpdmF0ZSByZWFkb25seSBfbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogT3JpZ2luYWwgY29uZmlnIHZhbHVlcyBwYXNzZWQgaW4gYXMgYSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIuXG4gICAqIEl0IGlzIG9ubHkgdXNlZCB0byBjb21wYXJlIHdpdGggYW5vdGhlciBjb25maWcgb2JqZWN0IHRvIHN1cHBvcnQgaWRlbXBvdGVudCBpbml0aWFsaXplQXBwKCkuXG4gICAqXG4gICAqIFVwZGF0aW5nIGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCBvbiB0aGUgQXBwIGluc3RhbmNlIHdpbGwgbm90IGNoYW5nZSBpdHMgdmFsdWUgaW4gX2NvbmZpZy5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbmZpZzogUmVxdWlyZWQ8RmlyZWJhc2VBcHBTZXR0aW5ncz47XG4gIHByaXZhdGUgX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNEZWxldGVkID0gZmFsc2U7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucyxcbiAgICBjb25maWc6IFJlcXVpcmVkPEZpcmViYXNlQXBwU2V0dGluZ3M+LFxuICAgIGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyXG4gICkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZyB9O1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPVxuICAgICAgY29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb250YWluZXIuYWRkQ29tcG9uZW50KFxuICAgICAgbmV3IENvbXBvbmVudCgnYXBwJywgKCkgPT4gdGhpcywgQ29tcG9uZW50VHlwZS5QVUJMSUMpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xuICAgIHJldHVybiB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XG4gIH1cblxuICBzZXQgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSB2YWw7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCk6IEZpcmViYXNlT3B0aW9ucyB7XG4gICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpOiBSZXF1aXJlZDxGaXJlYmFzZUFwcFNldHRpbmdzPiB7XG4gICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCk6IENvbXBvbmVudENvbnRhaW5lciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBpc0RlbGV0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGVsZXRlZDtcbiAgfVxuXG4gIHNldCBpc0RlbGV0ZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNEZWxldGVkID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCB0aHJvdyBhbiBFcnJvciBpZiB0aGUgQXBwIGhhcyBhbHJlYWR5IGJlZW4gZGVsZXRlZCAtXG4gICAqIHVzZSBiZWZvcmUgcGVyZm9ybWluZyBBUEkgYWN0aW9ucyBvbiB0aGUgQXBwLlxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0Rlc3Ryb3llZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0RlbGV0ZWQpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLkFQUF9ERUxFVEVELCB7IGFwcE5hbWU6IHRoaXMuX25hbWUgfSk7XG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgRmlyZWJhc2VBcHAsXG4gIEZpcmViYXNlT3B0aW9ucyxcbiAgRmlyZWJhc2VBcHBTZXR0aW5nc1xufSBmcm9tICcuL3B1YmxpYy10eXBlcyc7XG5pbXBvcnQgeyBERUZBVUxUX0VOVFJZX05BTUUsIFBMQVRGT1JNX0xPR19TVFJJTkcgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBBcHBFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudENvbnRhaW5lcixcbiAgQ29tcG9uZW50LFxuICBOYW1lLFxuICBDb21wb25lbnRUeXBlXG59IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL2ZpcmViYXNlL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcEltcGwgfSBmcm9tICcuL2ZpcmViYXNlQXBwJztcbmltcG9ydCB7IF9hcHBzLCBfY29tcG9uZW50cywgX3JlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9pbnRlcm5hbCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQge1xuICBMb2dMZXZlbFN0cmluZyxcbiAgc2V0TG9nTGV2ZWwgYXMgc2V0TG9nTGV2ZWxJbXBsLFxuICBMb2dDYWxsYmFjayxcbiAgTG9nT3B0aW9ucyxcbiAgc2V0VXNlckxvZ0hhbmRsZXJcbn0gZnJvbSAnQGZpcmViYXNlL2xvZ2dlcic7XG5pbXBvcnQgeyBkZWVwRXF1YWwsIGdldERlZmF1bHRBcHBDb25maWcgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5cbmV4cG9ydCB7IEZpcmViYXNlRXJyb3IgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5cbi8qKlxuICogVGhlIGN1cnJlbnQgU0RLIHZlcnNpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgU0RLX1ZFUlNJT04gPSB2ZXJzaW9uO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIGluaXRpYWxpemVzIGEge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxuICpcbiAqIFNlZVxuICoge0BsaW5rXG4gKiAgIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhZGRfZmlyZWJhc2VfdG9feW91cl9hcHBcbiAqICAgfCBBZGQgRmlyZWJhc2UgdG8geW91ciBhcHB9IGFuZFxuICoge0BsaW5rXG4gKiAgIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNtdWx0aXBsZS1wcm9qZWN0c1xuICogICB8IEluaXRpYWxpemUgbXVsdGlwbGUgcHJvamVjdHN9IGZvciBkZXRhaWxlZCBkb2N1bWVudGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqYXZhc2NyaXB0XG4gKlxuICogLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IGFwcFxuICogLy8gUmV0cmlldmUgeW91ciBvd24gb3B0aW9ucyB2YWx1ZXMgYnkgYWRkaW5nIGEgd2ViIGFwcCBvblxuICogLy8gaHR0cHM6Ly9jb25zb2xlLmZpcmViYXNlLmdvb2dsZS5jb21cbiAqIGluaXRpYWxpemVBcHAoe1xuICogICBhcGlLZXk6IFwiQUl6YS4uLi5cIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dGggLyBHZW5lcmFsIFVzZVxuICogICBhdXRoRG9tYWluOiBcIllPVVJfQVBQLmZpcmViYXNlYXBwLmNvbVwiLCAgICAgICAgIC8vIEF1dGggd2l0aCBwb3B1cC9yZWRpcmVjdFxuICogICBkYXRhYmFzZVVSTDogXCJodHRwczovL1lPVVJfQVBQLmZpcmViYXNlaW8uY29tXCIsIC8vIFJlYWx0aW1lIERhdGFiYXNlXG4gKiAgIHN0b3JhZ2VCdWNrZXQ6IFwiWU9VUl9BUFAuYXBwc3BvdC5jb21cIiwgICAgICAgICAgLy8gU3RvcmFnZVxuICogICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMjM0NTY3ODlcIiAgICAgICAgICAgICAgICAgIC8vIENsb3VkIE1lc3NhZ2luZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgamF2YXNjcmlwdFxuICpcbiAqIC8vIEluaXRpYWxpemUgYW5vdGhlciBhcHBcbiAqIGNvbnN0IG90aGVyQXBwID0gaW5pdGlhbGl6ZUFwcCh7XG4gKiAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vPE9USEVSX0RBVEFCQVNFX05BTUU+LmZpcmViYXNlaW8uY29tXCIsXG4gKiAgIHN0b3JhZ2VCdWNrZXQ6IFwiPE9USEVSX1NUT1JBR0VfQlVDS0VUPi5hcHBzcG90LmNvbVwiXG4gKiB9LCBcIm90aGVyQXBwXCIpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIHRvIGNvbmZpZ3VyZSB0aGUgYXBwJ3Mgc2VydmljZXMuXG4gKiBAcGFyYW0gbmFtZSAtIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGFwcCB0byBpbml0aWFsaXplLiBJZiBubyBuYW1lXG4gKiAgIGlzIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBpcyBgXCJbREVGQVVMVF1cImAuXG4gKlxuICogQHJldHVybnMgVGhlIGluaXRpYWxpemVkIGFwcC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKFxuICBvcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMsXG4gIG5hbWU/OiBzdHJpbmdcbik6IEZpcmViYXNlQXBwO1xuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBhIEZpcmViYXNlQXBwIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB0byBjb25maWd1cmUgdGhlIGFwcCdzIHNlcnZpY2VzLlxuICogQHBhcmFtIGNvbmZpZyAtIEZpcmViYXNlQXBwIENvbmZpZ3VyYXRpb25cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKFxuICBvcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMsXG4gIGNvbmZpZz86IEZpcmViYXNlQXBwU2V0dGluZ3Ncbik6IEZpcmViYXNlQXBwO1xuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBhIEZpcmViYXNlQXBwIGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoKTogRmlyZWJhc2VBcHA7XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChcbiAgX29wdGlvbnM/OiBGaXJlYmFzZU9wdGlvbnMsXG4gIHJhd0NvbmZpZyA9IHt9XG4pOiBGaXJlYmFzZUFwcCB7XG4gIGxldCBvcHRpb25zID0gX29wdGlvbnM7XG5cbiAgaWYgKHR5cGVvZiByYXdDb25maWcgIT09ICdvYmplY3QnKSB7XG4gICAgY29uc3QgbmFtZSA9IHJhd0NvbmZpZztcbiAgICByYXdDb25maWcgPSB7IG5hbWUgfTtcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZzogUmVxdWlyZWQ8RmlyZWJhc2VBcHBTZXR0aW5ncz4gPSB7XG4gICAgbmFtZTogREVGQVVMVF9FTlRSWV9OQU1FLFxuICAgIGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDogZmFsc2UsXG4gICAgLi4ucmF3Q29uZmlnXG4gIH07XG4gIGNvbnN0IG5hbWUgPSBjb25maWcubmFtZTtcblxuICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8ICFuYW1lKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuQkFEX0FQUF9OQU1FLCB7XG4gICAgICBhcHBOYW1lOiBTdHJpbmcobmFtZSlcbiAgICB9KTtcbiAgfVxuXG4gIG9wdGlvbnMgfHw9IGdldERlZmF1bHRBcHBDb25maWcoKTtcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5OT19PUFRJT05TKTtcbiAgfVxuXG4gIGNvbnN0IGV4aXN0aW5nQXBwID0gX2FwcHMuZ2V0KG5hbWUpIGFzIEZpcmViYXNlQXBwSW1wbDtcbiAgaWYgKGV4aXN0aW5nQXBwKSB7XG4gICAgLy8gcmV0dXJuIHRoZSBleGlzdGluZyBhcHAgaWYgb3B0aW9ucyBhbmQgY29uZmlnIGRlZXAgZXF1YWwgdGhlIG9uZXMgaW4gdGhlIGV4aXN0aW5nIGFwcC5cbiAgICBpZiAoXG4gICAgICBkZWVwRXF1YWwob3B0aW9ucywgZXhpc3RpbmdBcHAub3B0aW9ucykgJiZcbiAgICAgIGRlZXBFcXVhbChjb25maWcsIGV4aXN0aW5nQXBwLmNvbmZpZylcbiAgICApIHtcbiAgICAgIHJldHVybiBleGlzdGluZ0FwcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuRFVQTElDQVRFX0FQUCwgeyBhcHBOYW1lOiBuYW1lIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb21wb25lbnRDb250YWluZXIobmFtZSk7XG4gIGZvciAoY29uc3QgY29tcG9uZW50IG9mIF9jb21wb25lbnRzLnZhbHVlcygpKSB7XG4gICAgY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICB9XG5cbiAgY29uc3QgbmV3QXBwID0gbmV3IEZpcmViYXNlQXBwSW1wbChvcHRpb25zLCBjb25maWcsIGNvbnRhaW5lcik7XG5cbiAgX2FwcHMuc2V0KG5hbWUsIG5ld0FwcCk7XG5cbiAgcmV0dXJuIG5ld0FwcDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXG4gKlxuICogV2hlbiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudHMsIHRoZSBkZWZhdWx0IGFwcCBpcyByZXR1cm5lZC4gV2hlbiBhbiBhcHAgbmFtZVxuICogaXMgcHJvdmlkZWQsIHRoZSBhcHAgY29ycmVzcG9uZGluZyB0byB0aGF0IG5hbWUgaXMgcmV0dXJuZWQuXG4gKlxuICogQW4gZXhjZXB0aW9uIGlzIHRocm93biBpZiB0aGUgYXBwIGJlaW5nIHJldHJpZXZlZCBoYXMgbm90IHlldCBiZWVuXG4gKiBpbml0aWFsaXplZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgamF2YXNjcmlwdFxuICogLy8gUmV0dXJuIHRoZSBkZWZhdWx0IGFwcFxuICogY29uc3QgYXBwID0gZ2V0QXBwKCk7XG4gKiBgYGBcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgamF2YXNjcmlwdFxuICogLy8gUmV0dXJuIGEgbmFtZWQgYXBwXG4gKiBjb25zdCBvdGhlckFwcCA9IGdldEFwcChcIm90aGVyQXBwXCIpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIG5hbWUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBhcHAgdG8gcmV0dXJuLiBJZiBubyBuYW1lIGlzXG4gKiAgIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBpcyBgXCJbREVGQVVMVF1cImAuXG4gKlxuICogQHJldHVybnMgVGhlIGFwcCBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm92aWRlZCBhcHAgbmFtZS5cbiAqICAgSWYgbm8gYXBwIG5hbWUgaXMgcHJvdmlkZWQsIHRoZSBkZWZhdWx0IGFwcCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHAobmFtZTogc3RyaW5nID0gREVGQVVMVF9FTlRSWV9OQU1FKTogRmlyZWJhc2VBcHAge1xuICBjb25zdCBhcHAgPSBfYXBwcy5nZXQobmFtZSk7XG4gIGlmICghYXBwICYmIG5hbWUgPT09IERFRkFVTFRfRU5UUllfTkFNRSkge1xuICAgIHJldHVybiBpbml0aWFsaXplQXBwKCk7XG4gIH1cbiAgaWYgKCFhcHApIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5OT19BUFAsIHsgYXBwTmFtZTogbmFtZSB9KTtcbiAgfVxuXG4gIHJldHVybiBhcHA7XG59XG5cbi8qKlxuICogQSAocmVhZC1vbmx5KSBhcnJheSBvZiBhbGwgaW5pdGlhbGl6ZWQgYXBwcy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcHMoKTogRmlyZWJhc2VBcHBbXSB7XG4gIHJldHVybiBBcnJheS5mcm9tKF9hcHBzLnZhbHVlcygpKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoaXMgYXBwIHVudXNhYmxlIGFuZCBmcmVlcyB0aGUgcmVzb3VyY2VzIG9mIGFsbCBhc3NvY2lhdGVkXG4gKiBzZXJ2aWNlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgamF2YXNjcmlwdFxuICogZGVsZXRlQXBwKGFwcClcbiAqICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gKiAgICAgY29uc29sZS5sb2coXCJBcHAgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XG4gKiAgIH0pXG4gKiAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICogICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZGVsZXRpbmcgYXBwOlwiLCBlcnJvcik7XG4gKiAgIH0pO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXBwKGFwcDogRmlyZWJhc2VBcHApOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgbmFtZSA9IGFwcC5uYW1lO1xuICBpZiAoX2FwcHMuaGFzKG5hbWUpKSB7XG4gICAgX2FwcHMuZGVsZXRlKG5hbWUpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmNvbnRhaW5lclxuICAgICAgICAuZ2V0UHJvdmlkZXJzKClcbiAgICAgICAgLm1hcChwcm92aWRlciA9PiBwcm92aWRlci5kZWxldGUoKSlcbiAgICApO1xuICAgIChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsKS5pc0RlbGV0ZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgbGlicmFyeSdzIG5hbWUgYW5kIHZlcnNpb24gZm9yIHBsYXRmb3JtIGxvZ2dpbmcgcHVycG9zZXMuXG4gKiBAcGFyYW0gbGlicmFyeSAtIE5hbWUgb2YgMXAgb3IgM3AgbGlicmFyeSAoZS5nLiBmaXJlc3RvcmUsIGFuZ3VsYXJmaXJlKVxuICogQHBhcmFtIHZlcnNpb24gLSBDdXJyZW50IHZlcnNpb24gb2YgdGhhdCBsaWJyYXJ5LlxuICogQHBhcmFtIHZhcmlhbnQgLSBCdW5kbGUgdmFyaWFudCwgZS5nLiwgbm9kZSwgcm4sIGV0Yy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclZlcnNpb24oXG4gIGxpYnJhcnlLZXlPck5hbWU6IHN0cmluZyxcbiAgdmVyc2lvbjogc3RyaW5nLFxuICB2YXJpYW50Pzogc3RyaW5nXG4pOiB2b2lkIHtcbiAgLy8gVE9ETzogV2UgY2FuIHVzZSB0aGlzIGNoZWNrIHRvIHdoaXRlbGlzdCBzdHJpbmdzIHdoZW4vaWYgd2Ugc2V0IHVwXG4gIC8vIGEgZ29vZCB3aGl0ZWxpc3Qgc3lzdGVtLlxuICBsZXQgbGlicmFyeSA9IFBMQVRGT1JNX0xPR19TVFJJTkdbbGlicmFyeUtleU9yTmFtZV0gPz8gbGlicmFyeUtleU9yTmFtZTtcbiAgaWYgKHZhcmlhbnQpIHtcbiAgICBsaWJyYXJ5ICs9IGAtJHt2YXJpYW50fWA7XG4gIH1cbiAgY29uc3QgbGlicmFyeU1pc21hdGNoID0gbGlicmFyeS5tYXRjaCgvXFxzfFxcLy8pO1xuICBjb25zdCB2ZXJzaW9uTWlzbWF0Y2ggPSB2ZXJzaW9uLm1hdGNoKC9cXHN8XFwvLyk7XG4gIGlmIChsaWJyYXJ5TWlzbWF0Y2ggfHwgdmVyc2lvbk1pc21hdGNoKSB7XG4gICAgY29uc3Qgd2FybmluZyA9IFtcbiAgICAgIGBVbmFibGUgdG8gcmVnaXN0ZXIgbGlicmFyeSBcIiR7bGlicmFyeX1cIiB3aXRoIHZlcnNpb24gXCIke3ZlcnNpb259XCI6YFxuICAgIF07XG4gICAgaWYgKGxpYnJhcnlNaXNtYXRjaCkge1xuICAgICAgd2FybmluZy5wdXNoKFxuICAgICAgICBgbGlicmFyeSBuYW1lIFwiJHtsaWJyYXJ5fVwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcIi9cIilgXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobGlicmFyeU1pc21hdGNoICYmIHZlcnNpb25NaXNtYXRjaCkge1xuICAgICAgd2FybmluZy5wdXNoKCdhbmQnKTtcbiAgICB9XG4gICAgaWYgKHZlcnNpb25NaXNtYXRjaCkge1xuICAgICAgd2FybmluZy5wdXNoKFxuICAgICAgICBgdmVyc2lvbiBuYW1lIFwiJHt2ZXJzaW9ufVwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcIi9cIilgXG4gICAgICApO1xuICAgIH1cbiAgICBsb2dnZXIud2Fybih3YXJuaW5nLmpvaW4oJyAnKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIF9yZWdpc3RlckNvbXBvbmVudChcbiAgICBuZXcgQ29tcG9uZW50KFxuICAgICAgYCR7bGlicmFyeX0tdmVyc2lvbmAgYXMgTmFtZSxcbiAgICAgICgpID0+ICh7IGxpYnJhcnksIHZlcnNpb24gfSksXG4gICAgICBDb21wb25lbnRUeXBlLlZFUlNJT05cbiAgICApXG4gICk7XG59XG5cbi8qKlxuICogU2V0cyBsb2cgaGFuZGxlciBmb3IgYWxsIEZpcmViYXNlIFNES3MuXG4gKiBAcGFyYW0gbG9nQ2FsbGJhY2sgLSBBbiBvcHRpb25hbCBjdXN0b20gbG9nIGhhbmRsZXIgdGhhdCBleGVjdXRlcyB1c2VyIGNvZGUgd2hlbmV2ZXJcbiAqIHRoZSBGaXJlYmFzZSBTREsgbWFrZXMgYSBsb2dnaW5nIGNhbGwuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gb25Mb2coXG4gIGxvZ0NhbGxiYWNrOiBMb2dDYWxsYmFjayB8IG51bGwsXG4gIG9wdGlvbnM/OiBMb2dPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKGxvZ0NhbGxiYWNrICE9PSBudWxsICYmIHR5cGVvZiBsb2dDYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLklOVkFMSURfTE9HX0FSR1VNRU5UKTtcbiAgfVxuICBzZXRVc2VyTG9nSGFuZGxlcihsb2dDYWxsYmFjaywgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogU2V0cyBsb2cgbGV2ZWwgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxuICpcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCBhcmUgY2FwdHVyZWQgKGkuZS4gaWZcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgaW5mb2AsIGVycm9ycyBhcmUgbG9nZ2VkLCBidXQgYGRlYnVnYCBhbmRcbiAqIGB2ZXJib3NlYCBsb2dzIGFyZSBub3QpLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ0xldmVsKGxvZ0xldmVsOiBMb2dMZXZlbFN0cmluZyk6IHZvaWQge1xuICBzZXRMb2dMZXZlbEltcGwobG9nTGV2ZWwpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEZpcmViYXNlRXJyb3IgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBEQlNjaGVtYSwgb3BlbkRCLCBJREJQRGF0YWJhc2UgfSBmcm9tICdpZGInO1xuaW1wb3J0IHsgQXBwRXJyb3IsIEVSUk9SX0ZBQ1RPUlkgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcCB9IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7IEhlYXJ0YmVhdHNJbkluZGV4ZWREQiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5jb25zdCBEQl9OQU1FID0gJ2ZpcmViYXNlLWhlYXJ0YmVhdC1kYXRhYmFzZSc7XG5jb25zdCBEQl9WRVJTSU9OID0gMTtcbmNvbnN0IFNUT1JFX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LXN0b3JlJztcblxuaW50ZXJmYWNlIEFwcERCIGV4dGVuZHMgREJTY2hlbWEge1xuICAnZmlyZWJhc2UtaGVhcnRiZWF0LXN0b3JlJzoge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHZhbHVlOiBIZWFydGJlYXRzSW5JbmRleGVkREI7XG4gIH07XG59XG5cbmxldCBkYlByb21pc2U6IFByb21pc2U8SURCUERhdGFiYXNlPEFwcERCPj4gfCBudWxsID0gbnVsbDtcbmZ1bmN0aW9uIGdldERiUHJvbWlzZSgpOiBQcm9taXNlPElEQlBEYXRhYmFzZTxBcHBEQj4+IHtcbiAgaWYgKCFkYlByb21pc2UpIHtcbiAgICBkYlByb21pc2UgPSBvcGVuREI8QXBwREI+KERCX05BTUUsIERCX1ZFUlNJT04sIHtcbiAgICAgIHVwZ3JhZGU6IChkYiwgb2xkVmVyc2lvbikgPT4ge1xuICAgICAgICAvLyBXZSBkb24ndCB1c2UgJ2JyZWFrJyBpbiB0aGlzIHN3aXRjaCBzdGF0ZW1lbnQsIHRoZSBmYWxsLXRocm91Z2hcbiAgICAgICAgLy8gYmVoYXZpb3IgaXMgd2hhdCB3ZSB3YW50LCBiZWNhdXNlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSB2ZXJzaW9ucyBiZXR3ZWVuXG4gICAgICAgIC8vIHRoZSBvbGQgdmVyc2lvbiBhbmQgdGhlIGN1cnJlbnQgdmVyc2lvbiwgd2Ugd2FudCBBTEwgdGhlIG1pZ3JhdGlvbnNcbiAgICAgICAgLy8gdGhhdCBjb3JyZXNwb25kIHRvIHRob3NlIHZlcnNpb25zIHRvIHJ1biwgbm90IG9ubHkgdGhlIGxhc3Qgb25lLlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgICAgIHN3aXRjaCAob2xkVmVyc2lvbikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX05BTUUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5JREJfT1BFTiwge1xuICAgICAgICBvcmlnaW5hbEVycm9yTWVzc2FnZTogZS5tZXNzYWdlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZGJQcm9taXNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCKFxuICBhcHA6IEZpcmViYXNlQXBwXG4pOiBQcm9taXNlPEhlYXJ0YmVhdHNJbkluZGV4ZWREQiB8IHVuZGVmaW5lZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gICAgcmV0dXJuIGRiXG4gICAgICAudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSlcbiAgICAgIC5vYmplY3RTdG9yZShTVE9SRV9OQU1FKVxuICAgICAgLmdldChjb21wdXRlS2V5KGFwcCkpIGFzIFByb21pc2U8SGVhcnRiZWF0c0luSW5kZXhlZERCIHwgdW5kZWZpbmVkPjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgRmlyZWJhc2VFcnJvcikge1xuICAgICAgbG9nZ2VyLndhcm4oZS5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWRiR2V0RXJyb3IgPSBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5JREJfR0VULCB7XG4gICAgICAgIG9yaWdpbmFsRXJyb3JNZXNzYWdlOiAoZSBhcyBFcnJvcik/Lm1lc3NhZ2VcbiAgICAgIH0pO1xuICAgICAgbG9nZ2VyLndhcm4oaWRiR2V0RXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQihcbiAgYXBwOiBGaXJlYmFzZUFwcCxcbiAgaGVhcnRiZWF0T2JqZWN0OiBIZWFydGJlYXRzSW5JbmRleGVkREJcbik6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0eC5vYmplY3RTdG9yZShTVE9SRV9OQU1FKTtcbiAgICBhd2FpdCBvYmplY3RTdG9yZS5wdXQoaGVhcnRiZWF0T2JqZWN0LCBjb21wdXRlS2V5KGFwcCkpO1xuICAgIHJldHVybiB0eC5kb25lO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBGaXJlYmFzZUVycm9yKSB7XG4gICAgICBsb2dnZXIud2FybihlLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZGJHZXRFcnJvciA9IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLklEQl9XUklURSwge1xuICAgICAgICBvcmlnaW5hbEVycm9yTWVzc2FnZTogKGUgYXMgRXJyb3IpPy5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIGxvZ2dlci53YXJuKGlkYkdldEVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlS2V5KGFwcDogRmlyZWJhc2VBcHApOiBzdHJpbmcge1xuICByZXR1cm4gYCR7YXBwLm5hbWV9ISR7YXBwLm9wdGlvbnMuYXBwSWR9YDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRDb250YWluZXIgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7XG4gIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nLFxuICBpc0luZGV4ZWREQkF2YWlsYWJsZSxcbiAgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZVxufSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQge1xuICByZWFkSGVhcnRiZWF0c0Zyb21JbmRleGVkREIsXG4gIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCXG59IGZyb20gJy4vaW5kZXhlZGRiJztcbmltcG9ydCB7IEZpcmViYXNlQXBwIH0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHtcbiAgSGVhcnRiZWF0c0J5VXNlckFnZW50LFxuICBIZWFydGJlYXRTZXJ2aWNlLFxuICBIZWFydGJlYXRzSW5JbmRleGVkREIsXG4gIEhlYXJ0YmVhdFN0b3JhZ2UsXG4gIFNpbmdsZURhdGVIZWFydGJlYXRcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IE1BWF9IRUFERVJfQllURVMgPSAxMDI0O1xuLy8gMzAgZGF5c1xuY29uc3QgU1RPUkVEX0hFQVJUQkVBVF9SRVRFTlRJT05fTUFYX01JTExJUyA9IDMwICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuZXhwb3J0IGNsYXNzIEhlYXJ0YmVhdFNlcnZpY2VJbXBsIGltcGxlbWVudHMgSGVhcnRiZWF0U2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGUgcGVyc2lzdGVuY2UgbGF5ZXIgZm9yIGhlYXJ0YmVhdHNcbiAgICogTGVhdmUgcHVibGljIGZvciBlYXNpZXIgdGVzdGluZy5cbiAgICovXG4gIF9zdG9yYWdlOiBIZWFydGJlYXRTdG9yYWdlSW1wbDtcblxuICAvKipcbiAgICogSW4tbWVtb3J5IGNhY2hlIGZvciBoZWFydGJlYXRzLCB1c2VkIGJ5IGdldEhlYXJ0YmVhdHNIZWFkZXIoKSB0byBnZW5lcmF0ZVxuICAgKiB0aGUgaGVhZGVyIHN0cmluZy5cbiAgICogU3RvcmVzIG9uZSByZWNvcmQgcGVyIGRhdGUuIFRoaXMgd2lsbCBiZSBjb25zb2xpZGF0ZWQgaW50byB0aGUgc3RhbmRhcmRcbiAgICogZm9ybWF0IG9mIG9uZSByZWNvcmQgcGVyIHVzZXIgYWdlbnQgc3RyaW5nIGJlZm9yZSBiZWluZyBzZW50IGFzIGEgaGVhZGVyLlxuICAgKiBQb3B1bGF0ZWQgZnJvbSBpbmRleGVkREIgd2hlbiB0aGUgY29udHJvbGxlciBpcyBpbnN0YW50aWF0ZWQgYW5kIHNob3VsZFxuICAgKiBiZSBrZXB0IGluIHN5bmMgd2l0aCBpbmRleGVkREIuXG4gICAqIExlYXZlIHB1YmxpYyBmb3IgZWFzaWVyIHRlc3RpbmcuXG4gICAqL1xuICBfaGVhcnRiZWF0c0NhY2hlOiBIZWFydGJlYXRzSW5JbmRleGVkREIgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogdGhlIGluaXRpYWxpemF0aW9uIHByb21pc2UgZm9yIHBvcHVsYXRpbmcgaGVhcnRiZWF0Q2FjaGUuXG4gICAqIElmIGdldEhlYXJ0YmVhdHNIZWFkZXIoKSBpcyBjYWxsZWQgYmVmb3JlIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAqIChoZWFyYmVhdHNDYWNoZSA9PSBudWxsKSwgaXQgc2hvdWxkIHdhaXQgZm9yIHRoaXMgcHJvbWlzZVxuICAgKiBMZWF2ZSBwdWJsaWMgZm9yIGVhc2llciB0ZXN0aW5nLlxuICAgKi9cbiAgX2hlYXJ0YmVhdHNDYWNoZVByb21pc2U6IFByb21pc2U8SGVhcnRiZWF0c0luSW5kZXhlZERCPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbXBvbmVudENvbnRhaW5lcikge1xuICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgICB0aGlzLl9zdG9yYWdlID0gbmV3IEhlYXJ0YmVhdFN0b3JhZ2VJbXBsKGFwcCk7XG4gICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlUHJvbWlzZSA9IHRoaXMuX3N0b3JhZ2UucmVhZCgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9IHJlc3VsdDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHRvIHJlcG9ydCBhIGhlYXJ0YmVhdC4gVGhlIGZ1bmN0aW9uIHdpbGwgZ2VuZXJhdGVcbiAgICogYSBIZWFydGJlYXRzQnlVc2VyQWdlbnQgb2JqZWN0LCB1cGRhdGUgaGVhcnRiZWF0c0NhY2hlLCBhbmQgcGVyc2lzdCBpdFxuICAgKiB0byBJbmRleGVkREIuXG4gICAqIE5vdGUgdGhhdCB3ZSBvbmx5IHN0b3JlIG9uZSBoZWFydGJlYXQgcGVyIGRheS4gU28gaWYgYSBoZWFydGJlYXQgZm9yIHRvZGF5IGlzXG4gICAqIGFscmVhZHkgbG9nZ2VkLCBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoaXMgZnVuY3Rpb24gaW4gdGhlIHNhbWUgZGF5IHdpbGwgYmUgaWdub3JlZC5cbiAgICovXG4gIGFzeW5jIHRyaWdnZXJIZWFydGJlYXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGxhdGZvcm1Mb2dnZXIgPSB0aGlzLmNvbnRhaW5lclxuICAgICAgLmdldFByb3ZpZGVyKCdwbGF0Zm9ybS1sb2dnZXInKVxuICAgICAgLmdldEltbWVkaWF0ZSgpO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgXCJGaXJlYmFzZSB1c2VyIGFnZW50XCIgc3RyaW5nIGZyb20gdGhlIHBsYXRmb3JtIGxvZ2dlclxuICAgIC8vIHNlcnZpY2UsIG5vdCB0aGUgYnJvd3NlciB1c2VyIGFnZW50LlxuICAgIGNvbnN0IGFnZW50ID0gcGxhdGZvcm1Mb2dnZXIuZ2V0UGxhdGZvcm1JbmZvU3RyaW5nKCk7XG4gICAgY29uc3QgZGF0ZSA9IGdldFVUQ0RhdGVTdHJpbmcoKTtcbiAgICBpZiAodGhpcy5faGVhcnRiZWF0c0NhY2hlID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPSBhd2FpdCB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlO1xuICAgIH1cbiAgICAvLyBEbyBub3Qgc3RvcmUgYSBoZWFydGJlYXQgaWYgb25lIGlzIGFscmVhZHkgc3RvcmVkIGZvciB0aGlzIGRheVxuICAgIC8vIG9yIGlmIGEgaGVhZGVyIGhhcyBhbHJlYWR5IGJlZW4gc2VudCB0b2RheS5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUubGFzdFNlbnRIZWFydGJlYXREYXRlID09PSBkYXRlIHx8XG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5zb21lKFxuICAgICAgICBzaW5nbGVEYXRlSGVhcnRiZWF0ID0+IHNpbmdsZURhdGVIZWFydGJlYXQuZGF0ZSA9PT0gZGF0ZVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGVyZSBpcyBubyBlbnRyeSBmb3IgdGhpcyBkYXRlLiBDcmVhdGUgb25lLlxuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMucHVzaCh7IGRhdGUsIGFnZW50IH0pO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgZW50cmllcyBvbGRlciB0aGFuIDMwIGRheXMuXG4gICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5maWx0ZXIoXG4gICAgICBzaW5nbGVEYXRlSGVhcnRiZWF0ID0+IHtcbiAgICAgICAgY29uc3QgaGJUaW1lc3RhbXAgPSBuZXcgRGF0ZShzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUpLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuIG5vdyAtIGhiVGltZXN0YW1wIDw9IFNUT1JFRF9IRUFSVEJFQVRfUkVURU5USU9OX01BWF9NSUxMSVM7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZS5vdmVyd3JpdGUodGhpcy5faGVhcnRiZWF0c0NhY2hlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHdoaWNoIGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgaGVhcnRiZWF0LXNwZWNpZmljIGhlYWRlciBkaXJlY3RseS5cbiAgICogSXQgYWxzbyBjbGVhcnMgYWxsIGhlYXJ0YmVhdHMgZnJvbSBtZW1vcnkgYXMgd2VsbCBhcyBpbiBJbmRleGVkREIuXG4gICAqXG4gICAqIE5PVEU6IENvbnN1bWluZyBwcm9kdWN0IFNES3Mgc2hvdWxkIG5vdCBzZW5kIHRoZSBoZWFkZXIgaWYgdGhpcyBtZXRob2RcbiAgICogcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcuXG4gICAqL1xuICBhc3luYyBnZXRIZWFydGJlYXRzSGVhZGVyKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgaWYgKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9PT0gbnVsbCkge1xuICAgICAgYXdhaXQgdGhpcy5faGVhcnRiZWF0c0NhY2hlUHJvbWlzZTtcbiAgICB9XG4gICAgLy8gSWYgaXQncyBzdGlsbCBudWxsIG9yIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlcmUgaXMgbm8gZGF0YSB0byBzZW5kLlxuICAgIGlmIChcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9PT0gbnVsbCB8fFxuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMubGVuZ3RoID09PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBnZXRVVENEYXRlU3RyaW5nKCk7XG4gICAgLy8gRXh0cmFjdCBhcyBtYW55IGhlYXJ0YmVhdHMgZnJvbSB0aGUgY2FjaGUgYXMgd2lsbCBmaXQgdW5kZXIgdGhlIHNpemUgbGltaXQuXG4gICAgY29uc3QgeyBoZWFydGJlYXRzVG9TZW5kLCB1bnNlbnRFbnRyaWVzIH0gPSBleHRyYWN0SGVhcnRiZWF0c0ZvckhlYWRlcihcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzXG4gICAgKTtcbiAgICBjb25zdCBoZWFkZXJTdHJpbmcgPSBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgdmVyc2lvbjogMiwgaGVhcnRiZWF0czogaGVhcnRiZWF0c1RvU2VuZCB9KVxuICAgICk7XG4gICAgLy8gU3RvcmUgbGFzdCBzZW50IGRhdGUgdG8gcHJldmVudCBhbm90aGVyIGJlaW5nIGxvZ2dlZC9zZW50IGZvciB0aGUgc2FtZSBkYXkuXG4gICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA9IGRhdGU7XG4gICAgaWYgKHVuc2VudEVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gU3RvcmUgYW55IHVuc2VudCBlbnRyaWVzIGlmIHRoZXkgZXhpc3QuXG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cyA9IHVuc2VudEVudHJpZXM7XG4gICAgICAvLyBUaGlzIHNlZW1zIG1vcmUgbGlrZWx5IHRoYW4gZW1wdHlpbmcgdGhlIGFycmF5IChiZWxvdykgdG8gbGVhZCB0byBzb21lIG9kZCBzdGF0ZVxuICAgICAgLy8gc2luY2UgdGhlIGNhY2hlIGlzbid0IGVtcHR5IGFuZCB0aGlzIHdpbGwgYmUgY2FsbGVkIGFnYWluIG9uIHRoZSBuZXh0IHJlcXVlc3QsXG4gICAgICAvLyBhbmQgaXMgcHJvYmFibHkgc2FmZXN0IGlmIHdlIGF3YWl0IGl0LlxuICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZS5vdmVyd3JpdGUodGhpcy5faGVhcnRiZWF0c0NhY2hlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSBbXTtcbiAgICAgIC8vIERvIG5vdCB3YWl0IGZvciB0aGlzLCB0byByZWR1Y2UgbGF0ZW5jeS5cbiAgICAgIHZvaWQgdGhpcy5fc3RvcmFnZS5vdmVyd3JpdGUodGhpcy5faGVhcnRiZWF0c0NhY2hlKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlclN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRVVENEYXRlU3RyaW5nKCk6IHN0cmluZyB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgLy8gUmV0dXJucyBkYXRlIGZvcm1hdCAnWVlZWS1NTS1ERCdcbiAgcmV0dXJuIHRvZGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RIZWFydGJlYXRzRm9ySGVhZGVyKFxuICBoZWFydGJlYXRzQ2FjaGU6IFNpbmdsZURhdGVIZWFydGJlYXRbXSxcbiAgbWF4U2l6ZSA9IE1BWF9IRUFERVJfQllURVNcbik6IHtcbiAgaGVhcnRiZWF0c1RvU2VuZDogSGVhcnRiZWF0c0J5VXNlckFnZW50W107XG4gIHVuc2VudEVudHJpZXM6IFNpbmdsZURhdGVIZWFydGJlYXRbXTtcbn0ge1xuICAvLyBIZWFydGJlYXRzIGdyb3VwZWQgYnkgdXNlciBhZ2VudCBpbiB0aGUgc3RhbmRhcmQgZm9ybWF0IHRvIGJlIHNlbnQgaW5cbiAgLy8gdGhlIGhlYWRlci5cbiAgY29uc3QgaGVhcnRiZWF0c1RvU2VuZDogSGVhcnRiZWF0c0J5VXNlckFnZW50W10gPSBbXTtcbiAgLy8gU2luZ2xlIGRhdGUgZm9ybWF0IGhlYXJ0YmVhdHMgdGhhdCBhcmUgbm90IHNlbnQuXG4gIGxldCB1bnNlbnRFbnRyaWVzID0gaGVhcnRiZWF0c0NhY2hlLnNsaWNlKCk7XG4gIGZvciAoY29uc3Qgc2luZ2xlRGF0ZUhlYXJ0YmVhdCBvZiBoZWFydGJlYXRzQ2FjaGUpIHtcbiAgICAvLyBMb29rIGZvciBhbiBleGlzdGluZyBlbnRyeSB3aXRoIHRoZSBzYW1lIHVzZXIgYWdlbnQuXG4gICAgY29uc3QgaGVhcnRiZWF0RW50cnkgPSBoZWFydGJlYXRzVG9TZW5kLmZpbmQoXG4gICAgICBoYiA9PiBoYi5hZ2VudCA9PT0gc2luZ2xlRGF0ZUhlYXJ0YmVhdC5hZ2VudFxuICAgICk7XG4gICAgaWYgKCFoZWFydGJlYXRFbnRyeSkge1xuICAgICAgLy8gSWYgbm8gZW50cnkgZm9yIHRoaXMgdXNlciBhZ2VudCBleGlzdHMsIGNyZWF0ZSBvbmUuXG4gICAgICBoZWFydGJlYXRzVG9TZW5kLnB1c2goe1xuICAgICAgICBhZ2VudDogc2luZ2xlRGF0ZUhlYXJ0YmVhdC5hZ2VudCxcbiAgICAgICAgZGF0ZXM6IFtzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGVdXG4gICAgICB9KTtcbiAgICAgIGlmIChjb3VudEJ5dGVzKGhlYXJ0YmVhdHNUb1NlbmQpID4gbWF4U2l6ZSkge1xuICAgICAgICAvLyBJZiB0aGUgaGVhZGVyIHdvdWxkIGV4Y2VlZCBtYXggc2l6ZSwgcmVtb3ZlIHRoZSBhZGRlZCBoZWFydGJlYXRcbiAgICAgICAgLy8gZW50cnkgYW5kIHN0b3AgYWRkaW5nIHRvIHRoZSBoZWFkZXIuXG4gICAgICAgIGhlYXJ0YmVhdHNUb1NlbmQucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoZWFydGJlYXRFbnRyeS5kYXRlcy5wdXNoKHNpbmdsZURhdGVIZWFydGJlYXQuZGF0ZSk7XG4gICAgICAvLyBJZiB0aGUgaGVhZGVyIHdvdWxkIGV4Y2VlZCBtYXggc2l6ZSwgcmVtb3ZlIHRoZSBhZGRlZCBkYXRlXG4gICAgICAvLyBhbmQgc3RvcCBhZGRpbmcgdG8gdGhlIGhlYWRlci5cbiAgICAgIGlmIChjb3VudEJ5dGVzKGhlYXJ0YmVhdHNUb1NlbmQpID4gbWF4U2l6ZSkge1xuICAgICAgICBoZWFydGJlYXRFbnRyeS5kYXRlcy5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFBvcCB1bnNlbnQgZW50cnkgZnJvbSBxdWV1ZS4gKFNraXBwZWQgaWYgYWRkaW5nIHRoZSBlbnRyeSBleGNlZWRlZFxuICAgIC8vIHF1b3RhIGFuZCB0aGUgbG9vcCBicmVha3MgZWFybHkuKVxuICAgIHVuc2VudEVudHJpZXMgPSB1bnNlbnRFbnRyaWVzLnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGVhcnRiZWF0c1RvU2VuZCxcbiAgICB1bnNlbnRFbnRyaWVzXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFydGJlYXRTdG9yYWdlSW1wbCBpbXBsZW1lbnRzIEhlYXJ0YmVhdFN0b3JhZ2Uge1xuICBwcml2YXRlIF9jYW5Vc2VJbmRleGVkREJQcm9taXNlOiBQcm9taXNlPGJvb2xlYW4+O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwOiBGaXJlYmFzZUFwcCkge1xuICAgIHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2UgPSB0aGlzLnJ1bkluZGV4ZWREQkVudmlyb25tZW50Q2hlY2soKTtcbiAgfVxuICBhc3luYyBydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNJbmRleGVkREJBdmFpbGFibGUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHRydWUpXG4gICAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkIGFsbCBoZWFydGJlYXRzLlxuICAgKi9cbiAgYXN5bmMgcmVhZCgpOiBQcm9taXNlPEhlYXJ0YmVhdHNJbkluZGV4ZWREQj4ge1xuICAgIGNvbnN0IGNhblVzZUluZGV4ZWREQiA9IGF3YWl0IHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2U7XG4gICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcbiAgICAgIHJldHVybiB7IGhlYXJ0YmVhdHM6IFtdIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlkYkhlYXJ0YmVhdE9iamVjdCA9IGF3YWl0IHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQih0aGlzLmFwcCk7XG4gICAgICByZXR1cm4gaWRiSGVhcnRiZWF0T2JqZWN0IHx8IHsgaGVhcnRiZWF0czogW10gfTtcbiAgICB9XG4gIH1cbiAgLy8gb3ZlcndyaXRlIHRoZSBzdG9yYWdlIHdpdGggdGhlIHByb3ZpZGVkIGhlYXJ0YmVhdHNcbiAgYXN5bmMgb3ZlcndyaXRlKGhlYXJ0YmVhdHNPYmplY3Q6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNhblVzZUluZGV4ZWREQiA9IGF3YWl0IHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2U7XG4gICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0ID0gYXdhaXQgdGhpcy5yZWFkKCk7XG4gICAgICByZXR1cm4gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIodGhpcy5hcHAsIHtcbiAgICAgICAgbGFzdFNlbnRIZWFydGJlYXREYXRlOlxuICAgICAgICAgIGhlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlID8/XG4gICAgICAgICAgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSxcbiAgICAgICAgaGVhcnRiZWF0czogaGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkIGhlYXJ0YmVhdHNcbiAgYXN5bmMgYWRkKGhlYXJ0YmVhdHNPYmplY3Q6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNhblVzZUluZGV4ZWREQiA9IGF3YWl0IHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2U7XG4gICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0ID0gYXdhaXQgdGhpcy5yZWFkKCk7XG4gICAgICByZXR1cm4gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIodGhpcy5hcHAsIHtcbiAgICAgICAgbGFzdFNlbnRIZWFydGJlYXREYXRlOlxuICAgICAgICAgIGhlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlID8/XG4gICAgICAgICAgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSxcbiAgICAgICAgaGVhcnRiZWF0czogW1xuICAgICAgICAgIC4uLmV4aXN0aW5nSGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzLFxuICAgICAgICAgIC4uLmhlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0c1xuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgYnl0ZXMgb2YgYSBIZWFydGJlYXRzQnlVc2VyQWdlbnQgYXJyYXkgYWZ0ZXIgYmVpbmcgd3JhcHBlZFxuICogaW4gYSBwbGF0Zm9ybSBsb2dnaW5nIGhlYWRlciBKU09OIG9iamVjdCwgc3RyaW5naWZpZWQsIGFuZCBjb252ZXJ0ZWRcbiAqIHRvIGJhc2UgNjQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudEJ5dGVzKGhlYXJ0YmVhdHNDYWNoZTogSGVhcnRiZWF0c0J5VXNlckFnZW50W10pOiBudW1iZXIge1xuICAvLyBiYXNlNjQgaGFzIGEgcmVzdHJpY3RlZCBzZXQgb2YgY2hhcmFjdGVycywgYWxsIG9mIHdoaWNoIHNob3VsZCBiZSAxIGJ5dGUuXG4gIHJldHVybiBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhcbiAgICAvLyBoZWFydGJlYXRzQ2FjaGUgd3JhcHBlciBwcm9wZXJ0aWVzXG4gICAgSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAyLCBoZWFydGJlYXRzOiBoZWFydGJlYXRzQ2FjaGUgfSlcbiAgKS5sZW5ndGg7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIH0gZnJvbSAnLi9wbGF0Zm9ybUxvZ2dlclNlcnZpY2UnO1xuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBfcmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsJztcbmltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IEhlYXJ0YmVhdFNlcnZpY2VJbXBsIH0gZnJvbSAnLi9oZWFydGJlYXRTZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29yZUNvbXBvbmVudHModmFyaWFudD86IHN0cmluZyk6IHZvaWQge1xuICBfcmVnaXN0ZXJDb21wb25lbnQoXG4gICAgbmV3IENvbXBvbmVudChcbiAgICAgICdwbGF0Zm9ybS1sb2dnZXInLFxuICAgICAgY29udGFpbmVyID0+IG5ldyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsKGNvbnRhaW5lciksXG4gICAgICBDb21wb25lbnRUeXBlLlBSSVZBVEVcbiAgICApXG4gICk7XG4gIF9yZWdpc3RlckNvbXBvbmVudChcbiAgICBuZXcgQ29tcG9uZW50KFxuICAgICAgJ2hlYXJ0YmVhdCcsXG4gICAgICBjb250YWluZXIgPT4gbmV3IEhlYXJ0YmVhdFNlcnZpY2VJbXBsKGNvbnRhaW5lciksXG4gICAgICBDb21wb25lbnRUeXBlLlBSSVZBVEVcbiAgICApXG4gICk7XG5cbiAgLy8gUmVnaXN0ZXIgYGFwcGAgcGFja2FnZS5cbiAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sIHZhcmlhbnQpO1xuICAvLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxuICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ19fQlVJTERfVEFSR0VUX18nKTtcbiAgLy8gUmVnaXN0ZXIgcGxhdGZvcm0gU0RLIGlkZW50aWZpZXIgKG5vIHZlcnNpb24pLlxuICByZWdpc3RlclZlcnNpb24oJ2ZpcmUtanMnLCAnJyk7XG59XG4iLCAiLyoqXG4gKiBGaXJlYmFzZSBBcHBcbiAqXG4gKiBAcmVtYXJrcyBUaGlzIHBhY2thZ2UgY29vcmRpbmF0ZXMgdGhlIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgZGlmZmVyZW50IEZpcmViYXNlIGNvbXBvbmVudHNcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHJlZ2lzdGVyQ29yZUNvbXBvbmVudHMgfSBmcm9tICcuL3JlZ2lzdGVyQ29yZUNvbXBvbmVudHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVybmFsJztcbmV4cG9ydCAqIGZyb20gJy4vcHVibGljLXR5cGVzJztcblxucmVnaXN0ZXJDb3JlQ29tcG9uZW50cygnX19SVU5USU1FX0VOVl9fJyk7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnYXBwJyk7XG5leHBvcnQgKiBmcm9tICdAZmlyZWJhc2UvYXBwJztcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IFBFTkRJTkdfVElNRU9VVF9NUyA9IDEwMDAwO1xuXG5leHBvcnQgY29uc3QgUEFDS0FHRV9WRVJTSU9OID0gYHc6JHt2ZXJzaW9ufWA7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfQVVUSF9WRVJTSU9OID0gJ0ZJU192Mic7XG5cbmV4cG9ydCBjb25zdCBJTlNUQUxMQVRJT05TX0FQSV9VUkwgPVxuICAnaHR0cHM6Ly9maXJlYmFzZWluc3RhbGxhdGlvbnMuZ29vZ2xlYXBpcy5jb20vdjEnO1xuXG5leHBvcnQgY29uc3QgVE9LRU5fRVhQSVJBVElPTl9CVUZGRVIgPSA2MCAqIDYwICogMTAwMDsgLy8gT25lIGhvdXJcblxuZXhwb3J0IGNvbnN0IFNFUlZJQ0UgPSAnaW5zdGFsbGF0aW9ucyc7XG5leHBvcnQgY29uc3QgU0VSVklDRV9OQU1FID0gJ0luc3RhbGxhdGlvbnMnO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IFNFUlZJQ0UsIFNFUlZJQ0VfTkFNRSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGVudW0gRXJyb3JDb2RlIHtcbiAgTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFUyA9ICdtaXNzaW5nLWFwcC1jb25maWctdmFsdWVzJyxcbiAgTk9UX1JFR0lTVEVSRUQgPSAnbm90LXJlZ2lzdGVyZWQnLFxuICBJTlNUQUxMQVRJT05fTk9UX0ZPVU5EID0gJ2luc3RhbGxhdGlvbi1ub3QtZm91bmQnLFxuICBSRVFVRVNUX0ZBSUxFRCA9ICdyZXF1ZXN0LWZhaWxlZCcsXG4gIEFQUF9PRkZMSU5FID0gJ2FwcC1vZmZsaW5lJyxcbiAgREVMRVRFX1BFTkRJTkdfUkVHSVNUUkFUSU9OID0gJ2RlbGV0ZS1wZW5kaW5nLXJlZ2lzdHJhdGlvbidcbn1cblxuY29uc3QgRVJST1JfREVTQ1JJUFRJT05fTUFQOiB7IHJlYWRvbmx5IFtrZXkgaW4gRXJyb3JDb2RlXTogc3RyaW5nIH0gPSB7XG4gIFtFcnJvckNvZGUuTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFU106XG4gICAgJ01pc3NpbmcgQXBwIGNvbmZpZ3VyYXRpb24gdmFsdWU6IFwieyR2YWx1ZU5hbWV9XCInLFxuICBbRXJyb3JDb2RlLk5PVF9SRUdJU1RFUkVEXTogJ0ZpcmViYXNlIEluc3RhbGxhdGlvbiBpcyBub3QgcmVnaXN0ZXJlZC4nLFxuICBbRXJyb3JDb2RlLklOU1RBTExBVElPTl9OT1RfRk9VTkRdOiAnRmlyZWJhc2UgSW5zdGFsbGF0aW9uIG5vdCBmb3VuZC4nLFxuICBbRXJyb3JDb2RlLlJFUVVFU1RfRkFJTEVEXTpcbiAgICAneyRyZXF1ZXN0TmFtZX0gcmVxdWVzdCBmYWlsZWQgd2l0aCBlcnJvciBcInskc2VydmVyQ29kZX0geyRzZXJ2ZXJTdGF0dXN9OiB7JHNlcnZlck1lc3NhZ2V9XCInLFxuICBbRXJyb3JDb2RlLkFQUF9PRkZMSU5FXTogJ0NvdWxkIG5vdCBwcm9jZXNzIHJlcXVlc3QuIEFwcGxpY2F0aW9uIG9mZmxpbmUuJyxcbiAgW0Vycm9yQ29kZS5ERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT05dOlxuICAgIFwiQ2FuJ3QgZGVsZXRlIGluc3RhbGxhdGlvbiB3aGlsZSB0aGVyZSBpcyBhIHBlbmRpbmcgcmVnaXN0cmF0aW9uIHJlcXVlc3QuXCJcbn07XG5cbmludGVyZmFjZSBFcnJvclBhcmFtcyB7XG4gIFtFcnJvckNvZGUuTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFU106IHtcbiAgICB2YWx1ZU5hbWU6IHN0cmluZztcbiAgfTtcbiAgW0Vycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRF06IHtcbiAgICByZXF1ZXN0TmFtZTogc3RyaW5nO1xuICAgIFtpbmRleDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyOyAvLyB0byBtYWtlIFR5cGVzY3JpcHQgMy44IGhhcHB5XG4gIH0gJiBTZXJ2ZXJFcnJvckRhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeTxFcnJvckNvZGUsIEVycm9yUGFyYW1zPihcbiAgU0VSVklDRSxcbiAgU0VSVklDRV9OQU1FLFxuICBFUlJPUl9ERVNDUklQVElPTl9NQVBcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmVyRXJyb3JEYXRhIHtcbiAgc2VydmVyQ29kZTogbnVtYmVyO1xuICBzZXJ2ZXJNZXNzYWdlOiBzdHJpbmc7XG4gIHNlcnZlclN0YXR1czogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJFcnJvciA9IEZpcmViYXNlRXJyb3IgJiB7IGN1c3RvbURhdGE6IFNlcnZlckVycm9yRGF0YSB9O1xuXG4vKiogUmV0dXJucyB0cnVlIGlmIGVycm9yIGlzIGEgRmlyZWJhc2VFcnJvciB0aGF0IGlzIGJhc2VkIG9uIGFuIGVycm9yIGZyb20gdGhlIHNlcnZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NlcnZlckVycm9yKGVycm9yOiB1bmtub3duKTogZXJyb3IgaXMgU2VydmVyRXJyb3Ige1xuICByZXR1cm4gKFxuICAgIGVycm9yIGluc3RhbmNlb2YgRmlyZWJhc2VFcnJvciAmJlxuICAgIGVycm9yLmNvZGUuaW5jbHVkZXMoRXJyb3JDb2RlLlJFUVVFU1RfRkFJTEVEKVxuICApO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEZpcmViYXNlRXJyb3IgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBHZW5lcmF0ZUF1dGhUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcGktcmVzcG9uc2UnO1xuaW1wb3J0IHtcbiAgQ29tcGxldGVkQXV0aFRva2VuLFxuICBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnksXG4gIFJlcXVlc3RTdGF0dXNcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHtcbiAgSU5TVEFMTEFUSU9OU19BUElfVVJMLFxuICBJTlRFUk5BTF9BVVRIX1ZFUlNJT05cbn0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi4vdXRpbC9lcnJvcnMnO1xuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoeyBwcm9qZWN0SWQgfTogQXBwQ29uZmlnKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke0lOU1RBTExBVElPTlNfQVBJX1VSTH0vcHJvamVjdHMvJHtwcm9qZWN0SWR9L2luc3RhbGxhdGlvbnNgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UoXG4gIHJlc3BvbnNlOiBHZW5lcmF0ZUF1dGhUb2tlblJlc3BvbnNlXG4pOiBDb21wbGV0ZWRBdXRoVG9rZW4ge1xuICByZXR1cm4ge1xuICAgIHRva2VuOiByZXNwb25zZS50b2tlbixcbiAgICByZXF1ZXN0U3RhdHVzOiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCxcbiAgICBleHBpcmVzSW46IGdldEV4cGlyZXNJbkZyb21SZXNwb25zZUV4cGlyZXNJbihyZXNwb25zZS5leHBpcmVzSW4pLFxuICAgIGNyZWF0aW9uVGltZTogRGF0ZS5ub3coKVxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXJyb3JGcm9tUmVzcG9uc2UoXG4gIHJlcXVlc3ROYW1lOiBzdHJpbmcsXG4gIHJlc3BvbnNlOiBSZXNwb25zZVxuKTogUHJvbWlzZTxGaXJlYmFzZUVycm9yPiB7XG4gIGNvbnN0IHJlc3BvbnNlSnNvbjogRXJyb3JSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgZXJyb3JEYXRhID0gcmVzcG9uc2VKc29uLmVycm9yO1xuICByZXR1cm4gRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLlJFUVVFU1RfRkFJTEVELCB7XG4gICAgcmVxdWVzdE5hbWUsXG4gICAgc2VydmVyQ29kZTogZXJyb3JEYXRhLmNvZGUsXG4gICAgc2VydmVyTWVzc2FnZTogZXJyb3JEYXRhLm1lc3NhZ2UsXG4gICAgc2VydmVyU3RhdHVzOiBlcnJvckRhdGEuc3RhdHVzXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVhZGVycyh7IGFwaUtleSB9OiBBcHBDb25maWcpOiBIZWFkZXJzIHtcbiAgcmV0dXJuIG5ldyBIZWFkZXJzKHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICd4LWdvb2ctYXBpLWtleSc6IGFwaUtleVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhlYWRlcnNXaXRoQXV0aChcbiAgYXBwQ29uZmlnOiBBcHBDb25maWcsXG4gIHsgcmVmcmVzaFRva2VuIH06IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeVxuKTogSGVhZGVycyB7XG4gIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXJzKGFwcENvbmZpZyk7XG4gIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pKTtcbiAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JSZXNwb25zZSB7XG4gIGVycm9yOiB7XG4gICAgY29kZTogbnVtYmVyO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgfTtcbn1cblxuLyoqXG4gKiBDYWxscyB0aGUgcGFzc2VkIGluIGZldGNoIHdyYXBwZXIgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxuICogSWYgdGhlIHJldHVybmVkIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBvZiA1eHgsIHJlLXJ1bnMgdGhlIGZ1bmN0aW9uIG9uY2UgYW5kXG4gKiByZXR1cm5zIHRoZSByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldHJ5SWZTZXJ2ZXJFcnJvcihcbiAgZm46ICgpID0+IFByb21pc2U8UmVzcG9uc2U+XG4pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKCk7XG5cbiAgaWYgKHJlc3VsdC5zdGF0dXMgPj0gNTAwICYmIHJlc3VsdC5zdGF0dXMgPCA2MDApIHtcbiAgICAvLyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IuIFJldHJ5IHJlcXVlc3QuXG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRFeHBpcmVzSW5Gcm9tUmVzcG9uc2VFeHBpcmVzSW4ocmVzcG9uc2VFeHBpcmVzSW46IHN0cmluZyk6IG51bWJlciB7XG4gIC8vIFRoaXMgd29ya3MgYmVjYXVzZSB0aGUgc2VydmVyIHdpbGwgbmV2ZXIgcmVzcG9uZCB3aXRoIGZyYWN0aW9ucyBvZiBhIHNlY29uZC5cbiAgcmV0dXJuIE51bWJlcihyZXNwb25zZUV4cGlyZXNJbi5yZXBsYWNlKCdzJywgJzAwMCcpKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW46IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtJTlRFUk5BTF9BVVRIX1ZFUlNJT059ICR7cmVmcmVzaFRva2VufWA7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ3JlYXRlSW5zdGFsbGF0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FwaS1yZXNwb25zZSc7XG5pbXBvcnQge1xuICBJblByb2dyZXNzSW5zdGFsbGF0aW9uRW50cnksXG4gIFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSxcbiAgUmVxdWVzdFN0YXR1c1xufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQgeyBJTlRFUk5BTF9BVVRIX1ZFUlNJT04sIFBBQ0tBR0VfVkVSU0lPTiB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlLFxuICBnZXRFcnJvckZyb21SZXNwb25zZSxcbiAgZ2V0SGVhZGVycyxcbiAgZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50LFxuICByZXRyeUlmU2VydmVyRXJyb3Jcbn0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHsgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChcbiAgeyBhcHBDb25maWcsIGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciB9OiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsLFxuICB7IGZpZCB9OiBJblByb2dyZXNzSW5zdGFsbGF0aW9uRW50cnlcbik6IFByb21pc2U8UmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5PiB7XG4gIGNvbnN0IGVuZHBvaW50ID0gZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyk7XG5cbiAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBwQ29uZmlnKTtcblxuICAvLyBJZiBoZWFydGJlYXQgc2VydmljZSBleGlzdHMsIGFkZCB0aGUgaGVhcnRiZWF0IHN0cmluZyB0byB0aGUgaGVhZGVyLlxuICBjb25zdCBoZWFydGJlYXRTZXJ2aWNlID0gaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyLmdldEltbWVkaWF0ZSh7XG4gICAgb3B0aW9uYWw6IHRydWVcbiAgfSk7XG4gIGlmIChoZWFydGJlYXRTZXJ2aWNlKSB7XG4gICAgY29uc3QgaGVhcnRiZWF0c0hlYWRlciA9IGF3YWl0IGhlYXJ0YmVhdFNlcnZpY2UuZ2V0SGVhcnRiZWF0c0hlYWRlcigpO1xuICAgIGlmIChoZWFydGJlYXRzSGVhZGVyKSB7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgneC1maXJlYmFzZS1jbGllbnQnLCBoZWFydGJlYXRzSGVhZGVyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBib2R5ID0ge1xuICAgIGZpZCxcbiAgICBhdXRoVmVyc2lvbjogSU5URVJOQUxfQVVUSF9WRVJTSU9OLFxuICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWQsXG4gICAgc2RrVmVyc2lvbjogUEFDS0FHRV9WRVJTSU9OXG4gIH07XG5cbiAgY29uc3QgcmVxdWVzdDogUmVxdWVzdEluaXQgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmV0cnlJZlNlcnZlckVycm9yKCgpID0+IGZldGNoKGVuZHBvaW50LCByZXF1ZXN0KSk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IHJlc3BvbnNlVmFsdWU6IENyZWF0ZUluc3RhbGxhdGlvblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0ge1xuICAgICAgZmlkOiByZXNwb25zZVZhbHVlLmZpZCB8fCBmaWQsXG4gICAgICByZWdpc3RyYXRpb25TdGF0dXM6IFJlcXVlc3RTdGF0dXMuQ09NUExFVEVELFxuICAgICAgcmVmcmVzaFRva2VuOiByZXNwb25zZVZhbHVlLnJlZnJlc2hUb2tlbixcbiAgICAgIGF1dGhUb2tlbjogZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UocmVzcG9uc2VWYWx1ZS5hdXRoVG9rZW4pXG4gICAgfTtcbiAgICByZXR1cm4gcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5O1xuICB9IGVsc2Uge1xuICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdDcmVhdGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgZ2l2ZW4gdGltZSBwYXNzZXMuICovXG5leHBvcnQgZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gIH0pO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXJUb0Jhc2U2NFVybFNhZmUoYXJyYXk6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICBjb25zdCBiNjQgPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uYXJyYXkpKTtcbiAgcmV0dXJuIGI2NC5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBidWZmZXJUb0Jhc2U2NFVybFNhZmUgfSBmcm9tICcuL2J1ZmZlci10by1iYXNlNjQtdXJsLXNhZmUnO1xuXG5leHBvcnQgY29uc3QgVkFMSURfRklEX1BBVFRFUk4gPSAvXltjZGVmXVtcXHctXXsyMX0kLztcbmV4cG9ydCBjb25zdCBJTlZBTElEX0ZJRCA9ICcnO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG5ldyBGSUQgdXNpbmcgcmFuZG9tIHZhbHVlcyBmcm9tIFdlYiBDcnlwdG8gQVBJLlxuICogUmV0dXJucyBhbiBlbXB0eSBzdHJpbmcgaWYgRklEIGdlbmVyYXRpb24gZmFpbHMgZm9yIGFueSByZWFzb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUZpZCgpOiBzdHJpbmcge1xuICB0cnkge1xuICAgIC8vIEEgdmFsaWQgRklEIGhhcyBleGFjdGx5IDIyIGJhc2U2NCBjaGFyYWN0ZXJzLCB3aGljaCBpcyAxMzIgYml0cywgb3IgMTYuNVxuICAgIC8vIGJ5dGVzLiBvdXIgaW1wbGVtZW50YXRpb24gZ2VuZXJhdGVzIGEgMTcgYnl0ZSBhcnJheSBpbnN0ZWFkLlxuICAgIGNvbnN0IGZpZEJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KDE3KTtcbiAgICBjb25zdCBjcnlwdG8gPVxuICAgICAgc2VsZi5jcnlwdG8gfHwgKHNlbGYgYXMgdW5rbm93biBhcyB7IG1zQ3J5cHRvOiBDcnlwdG8gfSkubXNDcnlwdG87XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhmaWRCeXRlQXJyYXkpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgZmlyc3QgNCByYW5kb20gYml0cyB3aXRoIHRoZSBjb25zdGFudCBGSUQgaGVhZGVyIG9mIDBiMDExMS5cbiAgICBmaWRCeXRlQXJyYXlbMF0gPSAwYjAxMTEwMDAwICsgKGZpZEJ5dGVBcnJheVswXSAlIDBiMDAwMTAwMDApO1xuXG4gICAgY29uc3QgZmlkID0gZW5jb2RlKGZpZEJ5dGVBcnJheSk7XG5cbiAgICByZXR1cm4gVkFMSURfRklEX1BBVFRFUk4udGVzdChmaWQpID8gZmlkIDogSU5WQUxJRF9GSUQ7XG4gIH0gY2F0Y2gge1xuICAgIC8vIEZJRCBnZW5lcmF0aW9uIGVycm9yZWRcbiAgICByZXR1cm4gSU5WQUxJRF9GSUQ7XG4gIH1cbn1cblxuLyoqIENvbnZlcnRzIGEgRklEIFVpbnQ4QXJyYXkgdG8gYSBiYXNlNjQgc3RyaW5nIHJlcHJlc2VudGF0aW9uLiAqL1xuZnVuY3Rpb24gZW5jb2RlKGZpZEJ5dGVBcnJheTogVWludDhBcnJheSk6IHN0cmluZyB7XG4gIGNvbnN0IGI2NFN0cmluZyA9IGJ1ZmZlclRvQmFzZTY0VXJsU2FmZShmaWRCeXRlQXJyYXkpO1xuXG4gIC8vIFJlbW92ZSB0aGUgMjNyZCBjaGFyYWN0ZXIgdGhhdCB3YXMgYWRkZWQgYmVjYXVzZSBvZiB0aGUgZXh0cmEgNCBiaXRzIGF0IHRoZVxuICAvLyBlbmQgb2Ygb3VyIDE3IGJ5dGUgYXJyYXksIGFuZCB0aGUgJz0nIHBhZGRpbmcuXG4gIHJldHVybiBiNjRTdHJpbmcuc3Vic3RyKDAsIDIyKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcblxuLyoqIFJldHVybnMgYSBzdHJpbmcga2V5IHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhlIGFwcC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXkoYXBwQ29uZmlnOiBBcHBDb25maWcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7YXBwQ29uZmlnLmFwcE5hbWV9ISR7YXBwQ29uZmlnLmFwcElkfWA7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2V0S2V5IH0gZnJvbSAnLi4vdXRpbC9nZXQta2V5JztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgSWRDaGFuZ2VDYWxsYmFja0ZuIH0gZnJvbSAnLi4vYXBpJztcblxuY29uc3QgZmlkQ2hhbmdlQ2FsbGJhY2tzOiBNYXA8c3RyaW5nLCBTZXQ8SWRDaGFuZ2VDYWxsYmFja0ZuPj4gPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogQ2FsbHMgdGhlIG9uSWRDaGFuZ2UgY2FsbGJhY2tzIHdpdGggdGhlIG5ldyBGSUQgdmFsdWUsIGFuZCBicm9hZGNhc3RzIHRoZVxuICogY2hhbmdlIHRvIG90aGVyIHRhYnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWRDaGFuZ2VkKGFwcENvbmZpZzogQXBwQ29uZmlnLCBmaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcblxuICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleSwgZmlkKTtcbiAgYnJvYWRjYXN0RmlkQ2hhbmdlKGtleSwgZmlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxiYWNrKFxuICBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgY2FsbGJhY2s6IElkQ2hhbmdlQ2FsbGJhY2tGblxuKTogdm9pZCB7XG4gIC8vIE9wZW4gdGhlIGJyb2FkY2FzdCBjaGFubmVsIGlmIGl0J3Mgbm90IGFscmVhZHkgb3BlbixcbiAgLy8gdG8gYmUgYWJsZSB0byBsaXN0ZW4gdG8gY2hhbmdlIGV2ZW50cyBmcm9tIG90aGVyIHRhYnMuXG4gIGdldEJyb2FkY2FzdENoYW5uZWwoKTtcblxuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcblxuICBsZXQgY2FsbGJhY2tTZXQgPSBmaWRDaGFuZ2VDYWxsYmFja3MuZ2V0KGtleSk7XG4gIGlmICghY2FsbGJhY2tTZXQpIHtcbiAgICBjYWxsYmFja1NldCA9IG5ldyBTZXQoKTtcbiAgICBmaWRDaGFuZ2VDYWxsYmFja3Muc2V0KGtleSwgY2FsbGJhY2tTZXQpO1xuICB9XG4gIGNhbGxiYWNrU2V0LmFkZChjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYWxsYmFjayhcbiAgYXBwQ29uZmlnOiBBcHBDb25maWcsXG4gIGNhbGxiYWNrOiBJZENoYW5nZUNhbGxiYWNrRm5cbik6IHZvaWQge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcblxuICBjb25zdCBjYWxsYmFja1NldCA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcblxuICBpZiAoIWNhbGxiYWNrU2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2FsbGJhY2tTZXQuZGVsZXRlKGNhbGxiYWNrKTtcbiAgaWYgKGNhbGxiYWNrU2V0LnNpemUgPT09IDApIHtcbiAgICBmaWRDaGFuZ2VDYWxsYmFja3MuZGVsZXRlKGtleSk7XG4gIH1cblxuICAvLyBDbG9zZSBicm9hZGNhc3QgY2hhbm5lbCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjYWxsYmFja3MuXG4gIGNsb3NlQnJvYWRjYXN0Q2hhbm5lbCgpO1xufVxuXG5mdW5jdGlvbiBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleTogc3RyaW5nLCBmaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBjYWxsYmFja3MgPSBmaWRDaGFuZ2VDYWxsYmFja3MuZ2V0KGtleSk7XG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFjayhmaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJyb2FkY2FzdEZpZENoYW5nZShrZXk6IHN0cmluZywgZmlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgY2hhbm5lbCA9IGdldEJyb2FkY2FzdENoYW5uZWwoKTtcbiAgaWYgKGNoYW5uZWwpIHtcbiAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHsga2V5LCBmaWQgfSk7XG4gIH1cbiAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XG59XG5cbmxldCBicm9hZGNhc3RDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsIHwgbnVsbCA9IG51bGw7XG4vKiogT3BlbnMgYW5kIHJldHVybnMgYSBCcm9hZGNhc3RDaGFubmVsIGlmIGl0IGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cbmZ1bmN0aW9uIGdldEJyb2FkY2FzdENoYW5uZWwoKTogQnJvYWRjYXN0Q2hhbm5lbCB8IG51bGwge1xuICBpZiAoIWJyb2FkY2FzdENoYW5uZWwgJiYgJ0Jyb2FkY2FzdENoYW5uZWwnIGluIHNlbGYpIHtcbiAgICBicm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1tGaXJlYmFzZV0gRklEIENoYW5nZScpO1xuICAgIGJyb2FkY2FzdENoYW5uZWwub25tZXNzYWdlID0gZSA9PiB7XG4gICAgICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGUuZGF0YS5rZXksIGUuZGF0YS5maWQpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGJyb2FkY2FzdENoYW5uZWw7XG59XG5cbmZ1bmN0aW9uIGNsb3NlQnJvYWRjYXN0Q2hhbm5lbCgpOiB2b2lkIHtcbiAgaWYgKGZpZENoYW5nZUNhbGxiYWNrcy5zaXplID09PSAwICYmIGJyb2FkY2FzdENoYW5uZWwpIHtcbiAgICBicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG4gICAgYnJvYWRjYXN0Q2hhbm5lbCA9IG51bGw7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBEQlNjaGVtYSwgSURCUERhdGFiYXNlLCBvcGVuREIgfSBmcm9tICdpZGInO1xuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBJbnN0YWxsYXRpb25FbnRyeSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7IGdldEtleSB9IGZyb20gJy4uL3V0aWwvZ2V0LWtleSc7XG5pbXBvcnQgeyBmaWRDaGFuZ2VkIH0gZnJvbSAnLi9maWQtY2hhbmdlZCc7XG5cbmNvbnN0IERBVEFCQVNFX05BTUUgPSAnZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1kYXRhYmFzZSc7XG5jb25zdCBEQVRBQkFTRV9WRVJTSU9OID0gMTtcbmNvbnN0IE9CSkVDVF9TVE9SRV9OQU1FID0gJ2ZpcmViYXNlLWluc3RhbGxhdGlvbnMtc3RvcmUnO1xuXG5pbnRlcmZhY2UgSW5zdGFsbGF0aW9uc0RCIGV4dGVuZHMgREJTY2hlbWEge1xuICAnZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1zdG9yZSc6IHtcbiAgICBrZXk6IHN0cmluZztcbiAgICB2YWx1ZTogSW5zdGFsbGF0aW9uRW50cnkgfCB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmxldCBkYlByb21pc2U6IFByb21pc2U8SURCUERhdGFiYXNlPEluc3RhbGxhdGlvbnNEQj4+IHwgbnVsbCA9IG51bGw7XG5mdW5jdGlvbiBnZXREYlByb21pc2UoKTogUHJvbWlzZTxJREJQRGF0YWJhc2U8SW5zdGFsbGF0aW9uc0RCPj4ge1xuICBpZiAoIWRiUHJvbWlzZSkge1xuICAgIGRiUHJvbWlzZSA9IG9wZW5EQihEQVRBQkFTRV9OQU1FLCBEQVRBQkFTRV9WRVJTSU9OLCB7XG4gICAgICB1cGdyYWRlOiAoZGIsIG9sZFZlcnNpb24pID0+IHtcbiAgICAgICAgLy8gV2UgZG9uJ3QgdXNlICdicmVhaycgaW4gdGhpcyBzd2l0Y2ggc3RhdGVtZW50LCB0aGUgZmFsbC10aHJvdWdoXG4gICAgICAgIC8vIGJlaGF2aW9yIGlzIHdoYXQgd2Ugd2FudCwgYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlblxuICAgICAgICAvLyB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlIHdhbnQgQUxMIHRoZSBtaWdyYXRpb25zXG4gICAgICAgIC8vIHRoYXQgY29ycmVzcG9uZCB0byB0aG9zZSB2ZXJzaW9ucyB0byBydW4sIG5vdCBvbmx5IHRoZSBsYXN0IG9uZS5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgICAgICBzd2l0Y2ggKG9sZFZlcnNpb24pIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZGJQcm9taXNlO1xufVxuXG4vKiogR2V0cyByZWNvcmQocykgZnJvbSB0aGUgb2JqZWN0U3RvcmUgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4ga2V5LiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChcbiAgYXBwQ29uZmlnOiBBcHBDb25maWdcbik6IFByb21pc2U8SW5zdGFsbGF0aW9uRW50cnkgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gIHJldHVybiBkYlxuICAgIC50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSlcbiAgICAub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpXG4gICAgLmdldChrZXkpIGFzIFByb21pc2U8SW5zdGFsbGF0aW9uRW50cnk+O1xufVxuXG4vKiogQXNzaWducyBvciBvdmVyd3JpdGVzIHRoZSByZWNvcmQgZm9yIHRoZSBnaXZlbiBrZXkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0PFZhbHVlVHlwZSBleHRlbmRzIEluc3RhbGxhdGlvbkVudHJ5PihcbiAgYXBwQ29uZmlnOiBBcHBDb25maWcsXG4gIHZhbHVlOiBWYWx1ZVR5cGVcbik6IFByb21pc2U8VmFsdWVUeXBlPiB7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xuICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gIGNvbnN0IG9iamVjdFN0b3JlID0gdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpO1xuICBjb25zdCBvbGRWYWx1ZSA9IChhd2FpdCBvYmplY3RTdG9yZS5nZXQoa2V5KSkgYXMgSW5zdGFsbGF0aW9uRW50cnk7XG4gIGF3YWl0IG9iamVjdFN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgYXdhaXQgdHguZG9uZTtcblxuICBpZiAoIW9sZFZhbHVlIHx8IG9sZFZhbHVlLmZpZCAhPT0gdmFsdWUuZmlkKSB7XG4gICAgZmlkQ2hhbmdlZChhcHBDb25maWcsIHZhbHVlLmZpZCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKiBSZW1vdmVzIHJlY29yZChzKSBmcm9tIHRoZSBvYmplY3RTdG9yZSB0aGF0IG1hdGNoIHRoZSBnaXZlbiBrZXkuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKGFwcENvbmZpZzogQXBwQ29uZmlnKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xuICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gIGF3YWl0IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKS5kZWxldGUoa2V5KTtcbiAgYXdhaXQgdHguZG9uZTtcbn1cblxuLyoqXG4gKiBBdG9taWNhbGx5IHVwZGF0ZXMgYSByZWNvcmQgd2l0aCB0aGUgcmVzdWx0IG9mIHVwZGF0ZUZuLCB3aGljaCBnZXRzXG4gKiBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB2YWx1ZS4gSWYgbmV3VmFsdWUgaXMgdW5kZWZpbmVkLCB0aGUgcmVjb3JkIGlzXG4gKiBkZWxldGVkIGluc3RlYWQuXG4gKiBAcmV0dXJuIFVwZGF0ZWQgdmFsdWVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZTxWYWx1ZVR5cGUgZXh0ZW5kcyBJbnN0YWxsYXRpb25FbnRyeSB8IHVuZGVmaW5lZD4oXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICB1cGRhdGVGbjogKHByZXZpb3VzVmFsdWU6IEluc3RhbGxhdGlvbkVudHJ5IHwgdW5kZWZpbmVkKSA9PiBWYWx1ZVR5cGVcbik6IFByb21pc2U8VmFsdWVUeXBlPiB7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xuICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpO1xuICBjb25zdCBvbGRWYWx1ZTogSW5zdGFsbGF0aW9uRW50cnkgfCB1bmRlZmluZWQgPSAoYXdhaXQgc3RvcmUuZ2V0KFxuICAgIGtleVxuICApKSBhcyBJbnN0YWxsYXRpb25FbnRyeTtcbiAgY29uc3QgbmV3VmFsdWUgPSB1cGRhdGVGbihvbGRWYWx1ZSk7XG5cbiAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBhd2FpdCBzdG9yZS5kZWxldGUoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBzdG9yZS5wdXQobmV3VmFsdWUsIGtleSk7XG4gIH1cbiAgYXdhaXQgdHguZG9uZTtcblxuICBpZiAobmV3VmFsdWUgJiYgKCFvbGRWYWx1ZSB8fCBvbGRWYWx1ZS5maWQgIT09IG5ld1ZhbHVlLmZpZCkpIHtcbiAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgbmV3VmFsdWUuZmlkKTtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xuICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gIGF3YWl0IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKS5jbGVhcigpO1xuICBhd2FpdCB0eC5kb25lO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNyZWF0ZUluc3RhbGxhdGlvblJlcXVlc3QgfSBmcm9tICcuLi9mdW5jdGlvbnMvY3JlYXRlLWluc3RhbGxhdGlvbi1yZXF1ZXN0JztcbmltcG9ydCB7XG4gIEFwcENvbmZpZyxcbiAgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7XG4gIEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeSxcbiAgSW5zdGFsbGF0aW9uRW50cnksXG4gIFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSxcbiAgUmVxdWVzdFN0YXR1c1xufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQgeyBQRU5ESU5HX1RJTUVPVVRfTVMgfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUsIGlzU2VydmVyRXJyb3IgfSBmcm9tICcuLi91dGlsL2Vycm9ycyc7XG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWwvc2xlZXAnO1xuaW1wb3J0IHsgZ2VuZXJhdGVGaWQsIElOVkFMSURfRklEIH0gZnJvbSAnLi9nZW5lcmF0ZS1maWQnO1xuaW1wb3J0IHsgcmVtb3ZlLCBzZXQsIHVwZGF0ZSB9IGZyb20gJy4vaWRiLW1hbmFnZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbGxhdGlvbkVudHJ5V2l0aFJlZ2lzdHJhdGlvblByb21pc2Uge1xuICBpbnN0YWxsYXRpb25FbnRyeTogSW5zdGFsbGF0aW9uRW50cnk7XG4gIC8qKiBFeGlzdCBpZmYgdGhlIGluc3RhbGxhdGlvbkVudHJ5IGlzIG5vdCByZWdpc3RlcmVkLiAqL1xuICByZWdpc3RyYXRpb25Qcm9taXNlPzogUHJvbWlzZTxSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk+O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgYW5kIHJldHVybnMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGZyb20gdGhlIGRhdGFiYXNlLlxuICogQWxzbyB0cmlnZ2VycyBhIHJlZ2lzdHJhdGlvbiByZXF1ZXN0IGlmIGl0IGlzIG5lY2Vzc2FyeSBhbmQgcG9zc2libGUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0YWxsYXRpb25FbnRyeShcbiAgaW5zdGFsbGF0aW9uczogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbFxuKTogUHJvbWlzZTxJbnN0YWxsYXRpb25FbnRyeVdpdGhSZWdpc3RyYXRpb25Qcm9taXNlPiB7XG4gIGxldCByZWdpc3RyYXRpb25Qcm9taXNlOiBQcm9taXNlPFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeT4gfCB1bmRlZmluZWQ7XG5cbiAgY29uc3QgaW5zdGFsbGF0aW9uRW50cnkgPSBhd2FpdCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICBjb25zdCBpbnN0YWxsYXRpb25FbnRyeSA9IHVwZGF0ZU9yQ3JlYXRlSW5zdGFsbGF0aW9uRW50cnkob2xkRW50cnkpO1xuICAgIGNvbnN0IGVudHJ5V2l0aFByb21pc2UgPSB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoXG4gICAgICBpbnN0YWxsYXRpb25zLFxuICAgICAgaW5zdGFsbGF0aW9uRW50cnlcbiAgICApO1xuICAgIHJlZ2lzdHJhdGlvblByb21pc2UgPSBlbnRyeVdpdGhQcm9taXNlLnJlZ2lzdHJhdGlvblByb21pc2U7XG4gICAgcmV0dXJuIGVudHJ5V2l0aFByb21pc2UuaW5zdGFsbGF0aW9uRW50cnk7XG4gIH0pO1xuXG4gIGlmIChpbnN0YWxsYXRpb25FbnRyeS5maWQgPT09IElOVkFMSURfRklEKSB7XG4gICAgLy8gRklEIGdlbmVyYXRpb24gZmFpbGVkLiBXYWl0aW5nIGZvciB0aGUgRklEIGZyb20gdGhlIHNlcnZlci5cbiAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeTogYXdhaXQgcmVnaXN0cmF0aW9uUHJvbWlzZSEgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5zdGFsbGF0aW9uRW50cnksXG4gICAgcmVnaXN0cmF0aW9uUHJvbWlzZVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgSW5zdGFsbGF0aW9uIEVudHJ5IGlmIG9uZSBkb2VzIG5vdCBleGlzdC5cbiAqIEFsc28gY2xlYXJzIHRpbWVkIG91dCBwZW5kaW5nIHJlcXVlc3RzLlxuICovXG5mdW5jdGlvbiB1cGRhdGVPckNyZWF0ZUluc3RhbGxhdGlvbkVudHJ5KFxuICBvbGRFbnRyeTogSW5zdGFsbGF0aW9uRW50cnkgfCB1bmRlZmluZWRcbik6IEluc3RhbGxhdGlvbkVudHJ5IHtcbiAgY29uc3QgZW50cnk6IEluc3RhbGxhdGlvbkVudHJ5ID0gb2xkRW50cnkgfHwge1xuICAgIGZpZDogZ2VuZXJhdGVGaWQoKSxcbiAgICByZWdpc3RyYXRpb25TdGF0dXM6IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURURcbiAgfTtcblxuICByZXR1cm4gY2xlYXJUaW1lZE91dFJlcXVlc3QoZW50cnkpO1xufVxuXG4vKipcbiAqIElmIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgbm90IHJlZ2lzdGVyZWQgeWV0LCB0aGlzIHdpbGwgdHJpZ2dlciB0aGVcbiAqIHJlZ2lzdHJhdGlvbiBhbmQgcmV0dXJuIGFuIEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeS5cbiAqXG4gKiBJZiByZWdpc3RyYXRpb25Qcm9taXNlIGRvZXMgbm90IGV4aXN0LCB0aGUgaW5zdGFsbGF0aW9uRW50cnkgaXMgZ3VhcmFudGVlZFxuICogdG8gYmUgcmVnaXN0ZXJlZC5cbiAqL1xuZnVuY3Rpb24gdHJpZ2dlclJlZ2lzdHJhdGlvbklmTmVjZXNzYXJ5KFxuICBpbnN0YWxsYXRpb25zOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsLFxuICBpbnN0YWxsYXRpb25FbnRyeTogSW5zdGFsbGF0aW9uRW50cnlcbik6IEluc3RhbGxhdGlvbkVudHJ5V2l0aFJlZ2lzdHJhdGlvblByb21pc2Uge1xuICBpZiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEKSB7XG4gICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gcmVxdWlyZWQgYnV0IGFwcCBpcyBvZmZsaW5lLlxuICAgICAgY29uc3QgcmVnaXN0cmF0aW9uUHJvbWlzZVdpdGhFcnJvciA9IFByb21pc2UucmVqZWN0KFxuICAgICAgICBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuQVBQX09GRkxJTkUpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnksXG4gICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2U6IHJlZ2lzdHJhdGlvblByb21pc2VXaXRoRXJyb3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVHJ5IHJlZ2lzdGVyaW5nLiBDaGFuZ2Ugc3RhdHVzIHRvIElOX1BST0dSRVNTLlxuICAgIGNvbnN0IGluUHJvZ3Jlc3NFbnRyeTogSW5Qcm9ncmVzc0luc3RhbGxhdGlvbkVudHJ5ID0ge1xuICAgICAgZmlkOiBpbnN0YWxsYXRpb25FbnRyeS5maWQsXG4gICAgICByZWdpc3RyYXRpb25TdGF0dXM6IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MsXG4gICAgICByZWdpc3RyYXRpb25UaW1lOiBEYXRlLm5vdygpXG4gICAgfTtcbiAgICBjb25zdCByZWdpc3RyYXRpb25Qcm9taXNlID0gcmVnaXN0ZXJJbnN0YWxsYXRpb24oXG4gICAgICBpbnN0YWxsYXRpb25zLFxuICAgICAgaW5Qcm9ncmVzc0VudHJ5XG4gICAgKTtcbiAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeTogaW5Qcm9ncmVzc0VudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlIH07XG4gIH0gZWxzZSBpZiAoXG4gICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTXG4gICkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnN0YWxsYXRpb25FbnRyeSxcbiAgICAgIHJlZ2lzdHJhdGlvblByb21pc2U6IHdhaXRVbnRpbEZpZFJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zKVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgaW5zdGFsbGF0aW9uRW50cnkgfTtcbiAgfVxufVxuXG4vKiogVGhpcyB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgb25jZSBmb3IgZWFjaCBuZXcgRmlyZWJhc2UgSW5zdGFsbGF0aW9uLiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJJbnN0YWxsYXRpb24oXG4gIGluc3RhbGxhdGlvbnM6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwsXG4gIGluc3RhbGxhdGlvbkVudHJ5OiBJblByb2dyZXNzSW5zdGFsbGF0aW9uRW50cnlcbik6IFByb21pc2U8UmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChcbiAgICAgIGluc3RhbGxhdGlvbnMsXG4gICAgICBpbnN0YWxsYXRpb25FbnRyeVxuICAgICk7XG4gICAgcmV0dXJuIHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChpc1NlcnZlckVycm9yKGUpICYmIGUuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDkpIHtcbiAgICAgIC8vIFNlcnZlciByZXR1cm5lZCBhIFwiRklEIGNhbiBub3QgYmUgdXNlZFwiIGVycm9yLlxuICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxuICAgICAgYXdhaXQgcmVtb3ZlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZC4gU2V0IEZJRCBhcyBub3QgcmVnaXN0ZXJlZC5cbiAgICAgIGF3YWl0IHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywge1xuICAgICAgICBmaWQ6IGluc3RhbGxhdGlvbkVudHJ5LmZpZCxcbiAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG4vKiogQ2FsbCBpZiBGSUQgcmVnaXN0cmF0aW9uIGlzIHBlbmRpbmcgaW4gYW5vdGhlciByZXF1ZXN0LiAqL1xuYXN5bmMgZnVuY3Rpb24gd2FpdFVudGlsRmlkUmVnaXN0cmF0aW9uKFxuICBpbnN0YWxsYXRpb25zOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsXG4pOiBQcm9taXNlPFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeT4ge1xuICAvLyBVbmZvcnR1bmF0ZWx5LCB0aGVyZSBpcyBubyB3YXkgb2YgcmVsaWFibHkgb2JzZXJ2aW5nIHdoZW4gYSB2YWx1ZSBpblxuICAvLyBJbmRleGVkREIgY2hhbmdlcyAoeWV0LCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvaW5kZXhlZC1kYi1vYnNlcnZlcnMpLFxuICAvLyBzbyB3ZSBuZWVkIHRvIHBvbGwuXG5cbiAgbGV0IGVudHJ5OiBJbnN0YWxsYXRpb25FbnRyeSA9IGF3YWl0IHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoXG4gICAgaW5zdGFsbGF0aW9ucy5hcHBDb25maWdcbiAgKTtcbiAgd2hpbGUgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUykge1xuICAgIC8vIGNyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IHN0aWxsIGluIHByb2dyZXNzLlxuICAgIGF3YWl0IHNsZWVwKDEwMCk7XG5cbiAgICBlbnRyeSA9IGF3YWl0IHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICB9XG5cbiAgaWYgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCkge1xuICAgIC8vIFRoZSByZXF1ZXN0IHRpbWVkIG91dCBvciBmYWlsZWQgaW4gYSBkaWZmZXJlbnQgY2FsbC4gVHJ5IGFnYWluLlxuICAgIGNvbnN0IHsgaW5zdGFsbGF0aW9uRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgfSA9XG4gICAgICBhd2FpdCBnZXRJbnN0YWxsYXRpb25FbnRyeShpbnN0YWxsYXRpb25zKTtcblxuICAgIGlmIChyZWdpc3RyYXRpb25Qcm9taXNlKSB7XG4gICAgICByZXR1cm4gcmVnaXN0cmF0aW9uUHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gcmVnaXN0cmF0aW9uUHJvbWlzZSwgZW50cnkgaXMgcmVnaXN0ZXJlZC5cbiAgICAgIHJldHVybiBpbnN0YWxsYXRpb25FbnRyeSBhcyBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG4vKipcbiAqIENhbGxlZCBvbmx5IGlmIHRoZXJlIGlzIGEgQ3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MuXG4gKlxuICogVXBkYXRlcyB0aGUgSW5zdGFsbGF0aW9uRW50cnkgaW4gdGhlIERCIGJhc2VkIG9uIHRoZSBzdGF0dXMgb2YgdGhlXG4gKiBDcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdC5cbiAqXG4gKiBSZXR1cm5zIHRoZSB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5LlxuICovXG5mdW5jdGlvbiB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KFxuICBhcHBDb25maWc6IEFwcENvbmZpZ1xuKTogUHJvbWlzZTxJbnN0YWxsYXRpb25FbnRyeT4ge1xuICByZXR1cm4gdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgIGlmICghb2xkRW50cnkpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5JTlNUQUxMQVRJT05fTk9UX0ZPVU5EKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZWFyVGltZWRPdXRSZXF1ZXN0KG9sZEVudHJ5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGltZWRPdXRSZXF1ZXN0KGVudHJ5OiBJbnN0YWxsYXRpb25FbnRyeSk6IEluc3RhbGxhdGlvbkVudHJ5IHtcbiAgaWYgKGhhc0luc3RhbGxhdGlvblJlcXVlc3RUaW1lZE91dChlbnRyeSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlkOiBlbnRyeS5maWQsXG4gICAgICByZWdpc3RyYXRpb25TdGF0dXM6IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURURcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoXG4gIGluc3RhbGxhdGlvbkVudHJ5OiBJbnN0YWxsYXRpb25FbnRyeVxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICYmXG4gICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uVGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KClcbiAgKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBHZW5lcmF0ZUF1dGhUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcGktcmVzcG9uc2UnO1xuaW1wb3J0IHtcbiAgQ29tcGxldGVkQXV0aFRva2VuLFxuICBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnlcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHsgUEFDS0FHRV9WRVJTSU9OIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UsXG4gIGdldEVycm9yRnJvbVJlc3BvbnNlLFxuICBnZXRIZWFkZXJzV2l0aEF1dGgsXG4gIGdldEluc3RhbGxhdGlvbnNFbmRwb2ludCxcbiAgcmV0cnlJZlNlcnZlckVycm9yXG59IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7XG4gIEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwsXG4gIEFwcENvbmZpZ1xufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQXV0aFRva2VuUmVxdWVzdChcbiAgeyBhcHBDb25maWcsIGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciB9OiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsLFxuICBpbnN0YWxsYXRpb25FbnRyeTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5XG4pOiBQcm9taXNlPENvbXBsZXRlZEF1dGhUb2tlbj4ge1xuICBjb25zdCBlbmRwb2ludCA9IGdldEdlbmVyYXRlQXV0aFRva2VuRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XG5cbiAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcblxuICAvLyBJZiBoZWFydGJlYXQgc2VydmljZSBleGlzdHMsIGFkZCB0aGUgaGVhcnRiZWF0IHN0cmluZyB0byB0aGUgaGVhZGVyLlxuICBjb25zdCBoZWFydGJlYXRTZXJ2aWNlID0gaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyLmdldEltbWVkaWF0ZSh7XG4gICAgb3B0aW9uYWw6IHRydWVcbiAgfSk7XG4gIGlmIChoZWFydGJlYXRTZXJ2aWNlKSB7XG4gICAgY29uc3QgaGVhcnRiZWF0c0hlYWRlciA9IGF3YWl0IGhlYXJ0YmVhdFNlcnZpY2UuZ2V0SGVhcnRiZWF0c0hlYWRlcigpO1xuICAgIGlmIChoZWFydGJlYXRzSGVhZGVyKSB7XG4gICAgICBoZWFkZXJzLmFwcGVuZCgneC1maXJlYmFzZS1jbGllbnQnLCBoZWFydGJlYXRzSGVhZGVyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBib2R5ID0ge1xuICAgIGluc3RhbGxhdGlvbjoge1xuICAgICAgc2RrVmVyc2lvbjogUEFDS0FHRV9WRVJTSU9OLFxuICAgICAgYXBwSWQ6IGFwcENvbmZpZy5hcHBJZFxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXF1ZXN0OiBSZXF1ZXN0SW5pdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2VWYWx1ZTogR2VuZXJhdGVBdXRoVG9rZW5SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjb21wbGV0ZWRBdXRoVG9rZW46IENvbXBsZXRlZEF1dGhUb2tlbiA9XG4gICAgICBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlKTtcbiAgICByZXR1cm4gY29tcGxldGVkQXV0aFRva2VuO1xuICB9IGVsc2Uge1xuICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdHZW5lcmF0ZSBBdXRoIFRva2VuJywgcmVzcG9uc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEdlbmVyYXRlQXV0aFRva2VuRW5kcG9pbnQoXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICB7IGZpZCB9OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnlcbik6IHN0cmluZyB7XG4gIHJldHVybiBgJHtnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoYXBwQ29uZmlnKX0vJHtmaWR9L2F1dGhUb2tlbnM6Z2VuZXJhdGVgO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGdlbmVyYXRlQXV0aFRva2VuUmVxdWVzdCB9IGZyb20gJy4uL2Z1bmN0aW9ucy9nZW5lcmF0ZS1hdXRoLXRva2VuLXJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgQXBwQ29uZmlnLFxuICBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHtcbiAgQXV0aFRva2VuLFxuICBDb21wbGV0ZWRBdXRoVG9rZW4sXG4gIEluUHJvZ3Jlc3NBdXRoVG9rZW4sXG4gIEluc3RhbGxhdGlvbkVudHJ5LFxuICBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnksXG4gIFJlcXVlc3RTdGF0dXNcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHsgUEVORElOR19USU1FT1VUX01TLCBUT0tFTl9FWFBJUkFUSU9OX0JVRkZFUiB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSwgaXNTZXJ2ZXJFcnJvciB9IGZyb20gJy4uL3V0aWwvZXJyb3JzJztcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbC9zbGVlcCc7XG5pbXBvcnQgeyByZW1vdmUsIHNldCwgdXBkYXRlIH0gZnJvbSAnLi9pZGItbWFuYWdlcic7XG5cbi8qKlxuICogUmV0dXJucyBhIHZhbGlkIGF1dGhlbnRpY2F0aW9uIHRva2VuIGZvciB0aGUgaW5zdGFsbGF0aW9uLiBHZW5lcmF0ZXMgYSBuZXdcbiAqIHRva2VuIGlmIG9uZSBkb2Vzbid0IGV4aXN0LCBpcyBleHBpcmVkIG9yIGFib3V0IHRvIGV4cGlyZS5cbiAqXG4gKiBTaG91bGQgb25seSBiZSBjYWxsZWQgaWYgdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpcyByZWdpc3RlcmVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEF1dGhUb2tlbihcbiAgaW5zdGFsbGF0aW9uczogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCxcbiAgZm9yY2VSZWZyZXNoID0gZmFsc2Vcbik6IFByb21pc2U8Q29tcGxldGVkQXV0aFRva2VuPiB7XG4gIGxldCB0b2tlblByb21pc2U6IFByb21pc2U8Q29tcGxldGVkQXV0aFRva2VuPiB8IHVuZGVmaW5lZDtcbiAgY29uc3QgZW50cnkgPSBhd2FpdCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICBpZiAoIWlzRW50cnlSZWdpc3RlcmVkKG9sZEVudHJ5KSkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PVF9SRUdJU1RFUkVEKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRBdXRoVG9rZW4gPSBvbGRFbnRyeS5hdXRoVG9rZW47XG4gICAgaWYgKCFmb3JjZVJlZnJlc2ggJiYgaXNBdXRoVG9rZW5WYWxpZChvbGRBdXRoVG9rZW4pKSB7XG4gICAgICAvLyBUaGVyZSBpcyBhIHZhbGlkIHRva2VuIGluIHRoZSBEQi5cbiAgICAgIHJldHVybiBvbGRFbnRyeTtcbiAgICB9IGVsc2UgaWYgKG9sZEF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTKSB7XG4gICAgICAvLyBUaGVyZSBhbHJlYWR5IGlzIGEgdG9rZW4gcmVxdWVzdCBpbiBwcm9ncmVzcy5cbiAgICAgIHRva2VuUHJvbWlzZSA9IHdhaXRVbnRpbEF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKTtcbiAgICAgIHJldHVybiBvbGRFbnRyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gdG9rZW4gb3IgdG9rZW4gZXhwaXJlZC5cbiAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuQVBQX09GRkxJTkUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpblByb2dyZXNzRW50cnkgPSBtYWtlQXV0aFRva2VuUmVxdWVzdEluUHJvZ3Jlc3NFbnRyeShvbGRFbnRyeSk7XG4gICAgICB0b2tlblByb21pc2UgPSBmZXRjaEF1dGhUb2tlbkZyb21TZXJ2ZXIoaW5zdGFsbGF0aW9ucywgaW5Qcm9ncmVzc0VudHJ5KTtcbiAgICAgIHJldHVybiBpblByb2dyZXNzRW50cnk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBhdXRoVG9rZW4gPSB0b2tlblByb21pc2VcbiAgICA/IGF3YWl0IHRva2VuUHJvbWlzZVxuICAgIDogKGVudHJ5LmF1dGhUb2tlbiBhcyBDb21wbGV0ZWRBdXRoVG9rZW4pO1xuICByZXR1cm4gYXV0aFRva2VuO1xufVxuXG4vKipcbiAqIENhbGwgb25seSBpZiBGSUQgaXMgcmVnaXN0ZXJlZCBhbmQgQXV0aCBUb2tlbiByZXF1ZXN0IGlzIGluIHByb2dyZXNzLlxuICpcbiAqIFdhaXRzIHVudGlsIHRoZSBjdXJyZW50IHBlbmRpbmcgcmVxdWVzdCBmaW5pc2hlcy4gSWYgdGhlIHJlcXVlc3QgdGltZXMgb3V0LFxuICogdHJpZXMgb25jZSBpbiB0aGlzIHRocmVhZCBhcyB3ZWxsLlxuICovXG5hc3luYyBmdW5jdGlvbiB3YWl0VW50aWxBdXRoVG9rZW5SZXF1ZXN0KFxuICBpbnN0YWxsYXRpb25zOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsLFxuICBmb3JjZVJlZnJlc2g6IGJvb2xlYW5cbik6IFByb21pc2U8Q29tcGxldGVkQXV0aFRva2VuPiB7XG4gIC8vIFVuZm9ydHVuYXRlbHksIHRoZXJlIGlzIG5vIHdheSBvZiByZWxpYWJseSBvYnNlcnZpbmcgd2hlbiBhIHZhbHVlIGluXG4gIC8vIEluZGV4ZWREQiBjaGFuZ2VzICh5ZXQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9pbmRleGVkLWRiLW9ic2VydmVycyksXG4gIC8vIHNvIHdlIG5lZWQgdG8gcG9sbC5cblxuICBsZXQgZW50cnkgPSBhd2FpdCB1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgd2hpbGUgKGVudHJ5LmF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTKSB7XG4gICAgLy8gZ2VuZXJhdGVBdXRoVG9rZW4gc3RpbGwgaW4gcHJvZ3Jlc3MuXG4gICAgYXdhaXQgc2xlZXAoMTAwKTtcblxuICAgIGVudHJ5ID0gYXdhaXQgdXBkYXRlQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XG4gIH1cblxuICBjb25zdCBhdXRoVG9rZW4gPSBlbnRyeS5hdXRoVG9rZW47XG4gIGlmIChhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCkge1xuICAgIC8vIFRoZSByZXF1ZXN0IHRpbWVkIG91dCBvciBmYWlsZWQgaW4gYSBkaWZmZXJlbnQgY2FsbC4gVHJ5IGFnYWluLlxuICAgIHJldHVybiByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF1dGhUb2tlbjtcbiAgfVxufVxuXG4vKipcbiAqIENhbGxlZCBvbmx5IGlmIHRoZXJlIGlzIGEgR2VuZXJhdGVBdXRoVG9rZW4gcmVxdWVzdCBpbiBwcm9ncmVzcy5cbiAqXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcbiAqIEdlbmVyYXRlQXV0aFRva2VuIHJlcXVlc3QuXG4gKlxuICogUmV0dXJucyB0aGUgdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQXV0aFRva2VuUmVxdWVzdChcbiAgYXBwQ29uZmlnOiBBcHBDb25maWdcbik6IFByb21pc2U8UmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5PiB7XG4gIHJldHVybiB1cGRhdGUoYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XG4gICAgaWYgKCFpc0VudHJ5UmVnaXN0ZXJlZChvbGRFbnRyeSkpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT1RfUkVHSVNURVJFRCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2xkQXV0aFRva2VuID0gb2xkRW50cnkuYXV0aFRva2VuO1xuICAgIGlmIChoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQob2xkQXV0aFRva2VuKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2xkRW50cnksXG4gICAgICAgIGF1dGhUb2tlbjogeyByZXF1ZXN0U3RhdHVzOiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9sZEVudHJ5O1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBdXRoVG9rZW5Gcm9tU2VydmVyKFxuICBpbnN0YWxsYXRpb25zOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsLFxuICBpbnN0YWxsYXRpb25FbnRyeTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5XG4pOiBQcm9taXNlPENvbXBsZXRlZEF1dGhUb2tlbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGF3YWl0IGdlbmVyYXRlQXV0aFRva2VuUmVxdWVzdChcbiAgICAgIGluc3RhbGxhdGlvbnMsXG4gICAgICBpbnN0YWxsYXRpb25FbnRyeVxuICAgICk7XG4gICAgY29uc3QgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgPSB7XG4gICAgICAuLi5pbnN0YWxsYXRpb25FbnRyeSxcbiAgICAgIGF1dGhUb2tlblxuICAgIH07XG4gICAgYXdhaXQgc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkpO1xuICAgIHJldHVybiBhdXRoVG9rZW47XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoXG4gICAgICBpc1NlcnZlckVycm9yKGUpICYmXG4gICAgICAoZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwMSB8fCBlLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDA0KVxuICAgICkge1xuICAgICAgLy8gU2VydmVyIHJldHVybmVkIGEgXCJGSUQgbm90IGZvdW5kXCIgb3IgYSBcIkludmFsaWQgYXV0aGVudGljYXRpb25cIiBlcnJvci5cbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIG5leHQgdGltZS5cbiAgICAgIGF3YWl0IHJlbW92ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0ge1xuICAgICAgICAuLi5pbnN0YWxsYXRpb25FbnRyeSxcbiAgICAgICAgYXV0aFRva2VuOiB7IHJlcXVlc3RTdGF0dXM6IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgfVxuICAgICAgfTtcbiAgICAgIGF3YWl0IHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5KTtcbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0VudHJ5UmVnaXN0ZXJlZChcbiAgaW5zdGFsbGF0aW9uRW50cnk6IEluc3RhbGxhdGlvbkVudHJ5IHwgdW5kZWZpbmVkXG4pOiBpbnN0YWxsYXRpb25FbnRyeSBpcyBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkge1xuICByZXR1cm4gKFxuICAgIGluc3RhbGxhdGlvbkVudHJ5ICE9PSB1bmRlZmluZWQgJiZcbiAgICBpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzQXV0aFRva2VuVmFsaWQoYXV0aFRva2VuOiBBdXRoVG9rZW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgJiZcbiAgICAhaXNBdXRoVG9rZW5FeHBpcmVkKGF1dGhUb2tlbilcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNBdXRoVG9rZW5FeHBpcmVkKGF1dGhUb2tlbjogQ29tcGxldGVkQXV0aFRva2VuKTogYm9vbGVhbiB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIHJldHVybiAoXG4gICAgbm93IDwgYXV0aFRva2VuLmNyZWF0aW9uVGltZSB8fFxuICAgIGF1dGhUb2tlbi5jcmVhdGlvblRpbWUgKyBhdXRoVG9rZW4uZXhwaXJlc0luIDwgbm93ICsgVE9LRU5fRVhQSVJBVElPTl9CVUZGRVJcbiAgKTtcbn1cblxuLyoqIFJldHVybnMgYW4gdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeSB3aXRoIGFuIEluUHJvZ3Jlc3NBdXRoVG9rZW4uICovXG5mdW5jdGlvbiBtYWtlQXV0aFRva2VuUmVxdWVzdEluUHJvZ3Jlc3NFbnRyeShcbiAgb2xkRW50cnk6IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeVxuKTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5IHtcbiAgY29uc3QgaW5Qcm9ncmVzc0F1dGhUb2tlbjogSW5Qcm9ncmVzc0F1dGhUb2tlbiA9IHtcbiAgICByZXF1ZXN0U3RhdHVzOiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTLFxuICAgIHJlcXVlc3RUaW1lOiBEYXRlLm5vdygpXG4gIH07XG4gIHJldHVybiB7XG4gICAgLi4ub2xkRW50cnksXG4gICAgYXV0aFRva2VuOiBpblByb2dyZXNzQXV0aFRva2VuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhc0F1dGhUb2tlblJlcXVlc3RUaW1lZE91dChhdXRoVG9rZW46IEF1dGhUb2tlbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICYmXG4gICAgYXV0aFRva2VuLnJlcXVlc3RUaW1lICsgUEVORElOR19USU1FT1VUX01TIDwgRGF0ZS5ub3coKVxuICApO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGdldEluc3RhbGxhdGlvbkVudHJ5IH0gZnJvbSAnLi4vaGVscGVycy9nZXQtaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7IHJlZnJlc2hBdXRoVG9rZW4gfSBmcm9tICcuLi9oZWxwZXJzL3JlZnJlc2gtYXV0aC10b2tlbic7XG5pbXBvcnQgeyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBJbnN0YWxsYXRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wdWJsaWMtdHlwZXMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaWYgdGhlcmUgaXNuJ3Qgb25lIGZvciB0aGUgYXBwIGFuZFxuICogcmV0dXJucyB0aGUgSW5zdGFsbGF0aW9uIElELlxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldElkKGluc3RhbGxhdGlvbnM6IEluc3RhbGxhdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IGluc3RhbGxhdGlvbnMgYXMgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbDtcbiAgY29uc3QgeyBpbnN0YWxsYXRpb25FbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSB9ID0gYXdhaXQgZ2V0SW5zdGFsbGF0aW9uRW50cnkoXG4gICAgaW5zdGFsbGF0aW9uc0ltcGxcbiAgKTtcblxuICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xuICAgIHJlZ2lzdHJhdGlvblByb21pc2UuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdGhlIGluc3RhbGxhdGlvbiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQsIHVwZGF0ZSB0aGUgYXV0aGVudGljYXRpb25cbiAgICAvLyB0b2tlbiBpZiBuZWVkZWQuXG4gICAgcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zSW1wbCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH1cblxuICByZXR1cm4gaW5zdGFsbGF0aW9uRW50cnkuZmlkO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGdldEluc3RhbGxhdGlvbkVudHJ5IH0gZnJvbSAnLi4vaGVscGVycy9nZXQtaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7IHJlZnJlc2hBdXRoVG9rZW4gfSBmcm9tICcuLi9oZWxwZXJzL3JlZnJlc2gtYXV0aC10b2tlbic7XG5pbXBvcnQgeyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBJbnN0YWxsYXRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wdWJsaWMtdHlwZXMnO1xuXG4vKipcbiAqIFJldHVybnMgYSBGaXJlYmFzZSBJbnN0YWxsYXRpb25zIGF1dGggdG9rZW4sIGlkZW50aWZ5aW5nIHRoZSBjdXJyZW50XG4gKiBGaXJlYmFzZSBJbnN0YWxsYXRpb24uXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXG4gKiBAcGFyYW0gZm9yY2VSZWZyZXNoIC0gRm9yY2UgcmVmcmVzaCByZWdhcmRsZXNzIG9mIHRva2VuIGV4cGlyYXRpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4oXG4gIGluc3RhbGxhdGlvbnM6IEluc3RhbGxhdGlvbnMsXG4gIGZvcmNlUmVmcmVzaCA9IGZhbHNlXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IGluc3RhbGxhdGlvbnMgYXMgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbDtcbiAgYXdhaXQgY29tcGxldGVJbnN0YWxsYXRpb25SZWdpc3RyYXRpb24oaW5zdGFsbGF0aW9uc0ltcGwpO1xuXG4gIC8vIEF0IHRoaXMgcG9pbnQgd2UgZWl0aGVyIGhhdmUgYSBSZWdpc3RlcmVkIEluc3RhbGxhdGlvbiBpbiB0aGUgREIsIG9yIHdlJ3ZlXG4gIC8vIGFscmVhZHkgdGhyb3duIGFuIGVycm9yLlxuICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnNJbXBsLCBmb3JjZVJlZnJlc2gpO1xuICByZXR1cm4gYXV0aFRva2VuLnRva2VuO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21wbGV0ZUluc3RhbGxhdGlvblJlZ2lzdHJhdGlvbihcbiAgaW5zdGFsbGF0aW9uczogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgcmVnaXN0cmF0aW9uUHJvbWlzZSB9ID0gYXdhaXQgZ2V0SW5zdGFsbGF0aW9uRW50cnkoaW5zdGFsbGF0aW9ucyk7XG5cbiAgaWYgKHJlZ2lzdHJhdGlvblByb21pc2UpIHtcbiAgICAvLyBBIGNyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IGlzIGluIHByb2dyZXNzLiBXYWl0IHVudGlsIGl0IGZpbmlzaGVzLlxuICAgIGF3YWl0IHJlZ2lzdHJhdGlvblByb21pc2U7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7XG4gIGdldEVycm9yRnJvbVJlc3BvbnNlLFxuICBnZXRIZWFkZXJzV2l0aEF1dGgsXG4gIGdldEluc3RhbGxhdGlvbnNFbmRwb2ludCxcbiAgcmV0cnlJZlNlcnZlckVycm9yXG59IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxhdGlvblJlcXVlc3QoXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICBpbnN0YWxsYXRpb25FbnRyeTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5XG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZW5kcG9pbnQgPSBnZXREZWxldGVFbmRwb2ludChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcblxuICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xuICBjb25zdCByZXF1ZXN0OiBSZXF1ZXN0SW5pdCA9IHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnNcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgYXdhaXQgZ2V0RXJyb3JGcm9tUmVzcG9uc2UoJ0RlbGV0ZSBJbnN0YWxsYXRpb24nLCByZXNwb25zZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVsZXRlRW5kcG9pbnQoXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICB7IGZpZCB9OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnlcbik6IHN0cmluZyB7XG4gIHJldHVybiBgJHtnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoYXBwQ29uZmlnKX0vJHtmaWR9YDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0IH0gZnJvbSAnLi4vZnVuY3Rpb25zL2RlbGV0ZS1pbnN0YWxsYXRpb24tcmVxdWVzdCc7XG5pbXBvcnQgeyByZW1vdmUsIHVwZGF0ZSB9IGZyb20gJy4uL2hlbHBlcnMvaWRiLW1hbmFnZXInO1xuaW1wb3J0IHsgUmVxdWVzdFN0YXR1cyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4uL3V0aWwvZXJyb3JzJztcbmltcG9ydCB7IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IEluc3RhbGxhdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3B1YmxpYy10eXBlcyc7XG5cbi8qKlxuICogRGVsZXRlcyB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGFuZCBhbGwgYXNzb2NpYXRlZCBkYXRhLlxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxhdGlvbnMoXG4gIGluc3RhbGxhdGlvbnM6IEluc3RhbGxhdGlvbnNcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IGFwcENvbmZpZyB9ID0gaW5zdGFsbGF0aW9ucyBhcyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsO1xuXG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQpIHtcbiAgICAgIC8vIERlbGV0ZSB0aGUgdW5yZWdpc3RlcmVkIGVudHJ5IHdpdGhvdXQgc2VuZGluZyBhIGRlbGV0ZUluc3RhbGxhdGlvbiByZXF1ZXN0LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG9sZEVudHJ5O1xuICB9KTtcblxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTKSB7XG4gICAgICAvLyBDYW4ndCBkZWxldGUgd2hpbGUgdHJ5aW5nIHRvIHJlZ2lzdGVyLlxuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLkRFTEVURV9QRU5ESU5HX1JFR0lTVFJBVElPTik7XG4gICAgfSBlbHNlIGlmIChlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEKSB7XG4gICAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLkFQUF9PRkZMSU5FKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUluc3RhbGxhdGlvblJlcXVlc3QoYXBwQ29uZmlnLCBlbnRyeSk7XG4gICAgICAgIGF3YWl0IHJlbW92ZShhcHBDb25maWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGFkZENhbGxiYWNrLCByZW1vdmVDYWxsYmFjayB9IGZyb20gJy4uL2hlbHBlcnMvZmlkLWNoYW5nZWQnO1xuaW1wb3J0IHsgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgSW5zdGFsbGF0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHVibGljLXR5cGVzJztcblxuLyoqXG4gKiBBbiB1c2VyIGRlZmluZWQgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIEluc3RhbGxhdGlvbnMgSUQgY2hhbmdlcy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCB0eXBlIElkQ2hhbmdlQ2FsbGJhY2tGbiA9IChpbnN0YWxsYXRpb25JZDogc3RyaW5nKSA9PiB2b2lkO1xuLyoqXG4gKiBVbnN1YnNjcmliZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIHByZXZpb3VzbHkgYWRkZWQgdmlhIHtAbGluayBJZENoYW5nZUNhbGxiYWNrRm59LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IHR5cGUgSWRDaGFuZ2VVbnN1YnNjcmliZUZuID0gKCkgPT4gdm9pZDtcblxuLyoqXG4gKiBTZXRzIGEgbmV3IGNhbGxiYWNrIHRoYXQgd2lsbCBnZXQgY2FsbGVkIHdoZW4gSW5zdGFsbGF0aW9uIElEIGNoYW5nZXMuXG4gKiBSZXR1cm5zIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uIHRoYXQgd2lsbCByZW1vdmUgdGhlIGNhbGxiYWNrIHdoZW4gY2FsbGVkLlxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxuICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCB3aGVuIEZJRCBjaGFuZ2VzLlxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBjYWxsZWQgdG8gdW5zdWJzY3JpYmUuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gb25JZENoYW5nZShcbiAgaW5zdGFsbGF0aW9uczogSW5zdGFsbGF0aW9ucyxcbiAgY2FsbGJhY2s6IElkQ2hhbmdlQ2FsbGJhY2tGblxuKTogSWRDaGFuZ2VVbnN1YnNjcmliZUZuIHtcbiAgY29uc3QgeyBhcHBDb25maWcgfSA9IGluc3RhbGxhdGlvbnMgYXMgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbDtcblxuICBhZGRDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcbiAgfTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBGaXJlYmFzZUFwcCwgZ2V0QXBwLCBfZ2V0UHJvdmlkZXIgfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IEluc3RhbGxhdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3B1YmxpYy10eXBlcyc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB7QGxpbmsgSW5zdGFsbGF0aW9uc30gYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlblxuICoge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxuICogQHBhcmFtIGFwcCAtIFRoZSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9ucyhhcHA6IEZpcmViYXNlQXBwID0gZ2V0QXBwKCkpOiBJbnN0YWxsYXRpb25zIHtcbiAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSBfZ2V0UHJvdmlkZXIoYXBwLCAnaW5zdGFsbGF0aW9ucycpLmdldEltbWVkaWF0ZSgpO1xuICByZXR1cm4gaW5zdGFsbGF0aW9uc0ltcGw7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRmlyZWJhc2VBcHAsIEZpcmViYXNlT3B0aW9ucyB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi4vdXRpbC9lcnJvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEFwcENvbmZpZyhhcHA6IEZpcmViYXNlQXBwKTogQXBwQ29uZmlnIHtcbiAgaWYgKCFhcHAgfHwgIWFwcC5vcHRpb25zKSB7XG4gICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBDb25maWd1cmF0aW9uJyk7XG4gIH1cblxuICBpZiAoIWFwcC5uYW1lKSB7XG4gICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBOYW1lJyk7XG4gIH1cblxuICAvLyBSZXF1aXJlZCBhcHAgY29uZmlnIGtleXNcbiAgY29uc3QgY29uZmlnS2V5czogQXJyYXk8a2V5b2YgRmlyZWJhc2VPcHRpb25zPiA9IFtcbiAgICAncHJvamVjdElkJyxcbiAgICAnYXBpS2V5JyxcbiAgICAnYXBwSWQnXG4gIF07XG5cbiAgZm9yIChjb25zdCBrZXlOYW1lIG9mIGNvbmZpZ0tleXMpIHtcbiAgICBpZiAoIWFwcC5vcHRpb25zW2tleU5hbWVdKSB7XG4gICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcihrZXlOYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFwcE5hbWU6IGFwcC5uYW1lLFxuICAgIHByb2plY3RJZDogYXBwLm9wdGlvbnMucHJvamVjdElkISxcbiAgICBhcGlLZXk6IGFwcC5vcHRpb25zLmFwaUtleSEsXG4gICAgYXBwSWQ6IGFwcC5vcHRpb25zLmFwcElkIVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRNaXNzaW5nVmFsdWVFcnJvcih2YWx1ZU5hbWU6IHN0cmluZyk6IEZpcmViYXNlRXJyb3Ige1xuICByZXR1cm4gRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk1JU1NJTkdfQVBQX0NPTkZJR19WQUxVRVMsIHtcbiAgICB2YWx1ZU5hbWVcbiAgfSk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgX3JlZ2lzdGVyQ29tcG9uZW50LCBfZ2V0UHJvdmlkZXIgfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50VHlwZSxcbiAgSW5zdGFuY2VGYWN0b3J5LFxuICBDb21wb25lbnRDb250YWluZXJcbn0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRJZCwgZ2V0VG9rZW4gfSBmcm9tICcuLi9hcGkvaW5kZXgnO1xuaW1wb3J0IHsgX0ZpcmViYXNlSW5zdGFsbGF0aW9uc0ludGVybmFsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgZXh0cmFjdEFwcENvbmZpZyB9IGZyb20gJy4uL2hlbHBlcnMvZXh0cmFjdC1hcHAtY29uZmlnJztcblxuY29uc3QgSU5TVEFMTEFUSU9OU19OQU1FID0gJ2luc3RhbGxhdGlvbnMnO1xuY29uc3QgSU5TVEFMTEFUSU9OU19OQU1FX0lOVEVSTkFMID0gJ2luc3RhbGxhdGlvbnMtaW50ZXJuYWwnO1xuXG5jb25zdCBwdWJsaWNGYWN0b3J5OiBJbnN0YW5jZUZhY3Rvcnk8J2luc3RhbGxhdGlvbnMnPiA9IChcbiAgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXJcbikgPT4ge1xuICBjb25zdCBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xuICAvLyBUaHJvd3MgaWYgYXBwIGlzbid0IGNvbmZpZ3VyZWQgcHJvcGVybHkuXG4gIGNvbnN0IGFwcENvbmZpZyA9IGV4dHJhY3RBcHBDb25maWcoYXBwKTtcbiAgY29uc3QgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyID0gX2dldFByb3ZpZGVyKGFwcCwgJ2hlYXJ0YmVhdCcpO1xuXG4gIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsID0ge1xuICAgIGFwcCxcbiAgICBhcHBDb25maWcsXG4gICAgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyLFxuICAgIF9kZWxldGU6ICgpID0+IFByb21pc2UucmVzb2x2ZSgpXG4gIH07XG4gIHJldHVybiBpbnN0YWxsYXRpb25zSW1wbDtcbn07XG5cbmNvbnN0IGludGVybmFsRmFjdG9yeTogSW5zdGFuY2VGYWN0b3J5PCdpbnN0YWxsYXRpb25zLWludGVybmFsJz4gPSAoXG4gIGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyXG4pID0+IHtcbiAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgLy8gSW50ZXJuYWwgRklTIGluc3RhbmNlIHJlbGllcyBvbiBwdWJsaWMgRklTIGluc3RhbmNlLlxuICBjb25zdCBpbnN0YWxsYXRpb25zID0gX2dldFByb3ZpZGVyKGFwcCwgSU5TVEFMTEFUSU9OU19OQU1FKS5nZXRJbW1lZGlhdGUoKTtcblxuICBjb25zdCBpbnN0YWxsYXRpb25zSW50ZXJuYWw6IF9GaXJlYmFzZUluc3RhbGxhdGlvbnNJbnRlcm5hbCA9IHtcbiAgICBnZXRJZDogKCkgPT4gZ2V0SWQoaW5zdGFsbGF0aW9ucyksXG4gICAgZ2V0VG9rZW46IChmb3JjZVJlZnJlc2g/OiBib29sZWFuKSA9PiBnZXRUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpXG4gIH07XG4gIHJldHVybiBpbnN0YWxsYXRpb25zSW50ZXJuYWw7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJJbnN0YWxsYXRpb25zKCk6IHZvaWQge1xuICBfcmVnaXN0ZXJDb21wb25lbnQoXG4gICAgbmV3IENvbXBvbmVudChJTlNUQUxMQVRJT05TX05BTUUsIHB1YmxpY0ZhY3RvcnksIENvbXBvbmVudFR5cGUuUFVCTElDKVxuICApO1xuICBfcmVnaXN0ZXJDb21wb25lbnQoXG4gICAgbmV3IENvbXBvbmVudChcbiAgICAgIElOU1RBTExBVElPTlNfTkFNRV9JTlRFUk5BTCxcbiAgICAgIGludGVybmFsRmFjdG9yeSxcbiAgICAgIENvbXBvbmVudFR5cGUuUFJJVkFURVxuICAgIClcbiAgKTtcbn1cbiIsICIvKipcbiAqIEZpcmViYXNlIEluc3RhbGxhdGlvbnNcbiAqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyByZWdpc3Rlckluc3RhbGxhdGlvbnMgfSBmcm9tICcuL2Z1bmN0aW9ucy9jb25maWcnO1xuaW1wb3J0IHsgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBuYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0ICogZnJvbSAnLi9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3B1YmxpYy10eXBlcyc7XG5cbnJlZ2lzdGVySW5zdGFsbGF0aW9ucygpO1xucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xuLy8gQlVJTERfVEFSR0VUIHdpbGwgYmUgcmVwbGFjZWQgYnkgdmFsdWVzIGxpa2UgZXNtNSwgZXNtMjAxNywgY2pzNSwgZXRjIGR1cmluZyB0aGUgY29tcGlsYXRpb25cbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnX19CVUlMRF9UQVJHRVRfXycpO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgU0RLX1ZFUlNJT04gPSB2ZXJzaW9uO1xuLyoqIFRoZSBwcmVmaXggZm9yIHN0YXJ0IFVzZXIgVGltaW5nIG1hcmtzIHVzZWQgZm9yIGNyZWF0aW5nIFRyYWNlcy4gKi9cbmV4cG9ydCBjb25zdCBUUkFDRV9TVEFSVF9NQVJLX1BSRUZJWCA9ICdGQi1QRVJGLVRSQUNFLVNUQVJUJztcbi8qKiBUaGUgcHJlZml4IGZvciBzdG9wIFVzZXIgVGltaW5nIG1hcmtzIHVzZWQgZm9yIGNyZWF0aW5nIFRyYWNlcy4gKi9cbmV4cG9ydCBjb25zdCBUUkFDRV9TVE9QX01BUktfUFJFRklYID0gJ0ZCLVBFUkYtVFJBQ0UtU1RPUCc7XG4vKiogVGhlIHByZWZpeCBmb3IgVXNlciBUaW1pbmcgbWVhc3VyZSB1c2VkIGZvciBjcmVhdGluZyBUcmFjZXMuICovXG5leHBvcnQgY29uc3QgVFJBQ0VfTUVBU1VSRV9QUkVGSVggPSAnRkItUEVSRi1UUkFDRS1NRUFTVVJFJztcbi8qKiBUaGUgcHJlZml4IGZvciBvdXQgb2YgdGhlIGJveCBwYWdlIGxvYWQgVHJhY2UgbmFtZS4gKi9cbmV4cG9ydCBjb25zdCBPT0JfVFJBQ0VfUEFHRV9MT0FEX1BSRUZJWCA9ICdfd3RfJztcblxuZXhwb3J0IGNvbnN0IEZJUlNUX1BBSU5UX0NPVU5URVJfTkFNRSA9ICdfZnAnO1xuXG5leHBvcnQgY29uc3QgRklSU1RfQ09OVEVOVEZVTF9QQUlOVF9DT1VOVEVSX05BTUUgPSAnX2ZjcCc7XG5cbmV4cG9ydCBjb25zdCBGSVJTVF9JTlBVVF9ERUxBWV9DT1VOVEVSX05BTUUgPSAnX2ZpZCc7XG5cbmV4cG9ydCBjb25zdCBDT05GSUdfTE9DQUxfU1RPUkFHRV9LRVkgPSAnQGZpcmViYXNlL3BlcmZvcm1hbmNlL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBDT05GSUdfRVhQSVJZX0xPQ0FMX1NUT1JBR0VfS0VZID1cbiAgJ0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9jb25maWdleHBpcmUnO1xuXG5leHBvcnQgY29uc3QgU0VSVklDRSA9ICdwZXJmb3JtYW5jZSc7XG5leHBvcnQgY29uc3QgU0VSVklDRV9OQU1FID0gJ1BlcmZvcm1hbmNlJztcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBFcnJvckZhY3RvcnkgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBTRVJWSUNFLCBTRVJWSUNFX05BTUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZW51bSBFcnJvckNvZGUge1xuICBUUkFDRV9TVEFSVEVEX0JFRk9SRSA9ICd0cmFjZSBzdGFydGVkJyxcbiAgVFJBQ0VfU1RPUFBFRF9CRUZPUkUgPSAndHJhY2Ugc3RvcHBlZCcsXG4gIE5PTlBPU0lUSVZFX1RSQUNFX1NUQVJUX1RJTUUgPSAnbm9ucG9zaXRpdmUgdHJhY2Ugc3RhcnRUaW1lJyxcbiAgTk9OUE9TSVRJVkVfVFJBQ0VfRFVSQVRJT04gPSAnbm9ucG9zaXRpdmUgdHJhY2UgZHVyYXRpb24nLFxuICBOT19XSU5ET1cgPSAnbm8gd2luZG93JyxcbiAgTk9fQVBQX0lEID0gJ25vIGFwcCBpZCcsXG4gIE5PX1BST0pFQ1RfSUQgPSAnbm8gcHJvamVjdCBpZCcsXG4gIE5PX0FQSV9LRVkgPSAnbm8gYXBpIGtleScsXG4gIElOVkFMSURfQ0NfTE9HID0gJ2ludmFsaWQgY2MgbG9nJyxcbiAgRkJfTk9UX0RFRkFVTFQgPSAnRkIgbm90IGRlZmF1bHQnLFxuICBSQ19OT1RfT0sgPSAnUkMgcmVzcG9uc2Ugbm90IG9rJyxcbiAgSU5WQUxJRF9BVFRSSUJVVEVfTkFNRSA9ICdpbnZhbGlkIGF0dHJpYnV0ZSBuYW1lJyxcbiAgSU5WQUxJRF9BVFRSSUJVVEVfVkFMVUUgPSAnaW52YWxpZCBhdHRyaWJ1dGUgdmFsdWUnLFxuICBJTlZBTElEX0NVU1RPTV9NRVRSSUNfTkFNRSA9ICdpbnZhbGlkIGN1c3RvbSBtZXRyaWMgbmFtZScsXG4gIElOVkFMSURfU1RSSU5HX01FUkdFUl9QQVJBTUVURVIgPSAnaW52YWxpZCBTdHJpbmcgbWVyZ2VyIGlucHV0JyxcbiAgQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdhbHJlYWR5IGluaXRpYWxpemVkJ1xufVxuXG5jb25zdCBFUlJPUl9ERVNDUklQVElPTl9NQVA6IHsgcmVhZG9ubHkgW2tleSBpbiBFcnJvckNvZGVdOiBzdHJpbmcgfSA9IHtcbiAgW0Vycm9yQ29kZS5UUkFDRV9TVEFSVEVEX0JFRk9SRV06ICdUcmFjZSB7JHRyYWNlTmFtZX0gd2FzIHN0YXJ0ZWQgYmVmb3JlLicsXG4gIFtFcnJvckNvZGUuVFJBQ0VfU1RPUFBFRF9CRUZPUkVdOiAnVHJhY2UgeyR0cmFjZU5hbWV9IGlzIG5vdCBydW5uaW5nLicsXG4gIFtFcnJvckNvZGUuTk9OUE9TSVRJVkVfVFJBQ0VfU1RBUlRfVElNRV06XG4gICAgJ1RyYWNlIHskdHJhY2VOYW1lfSBzdGFydFRpbWUgc2hvdWxkIGJlIHBvc2l0aXZlLicsXG4gIFtFcnJvckNvZGUuTk9OUE9TSVRJVkVfVFJBQ0VfRFVSQVRJT05dOlxuICAgICdUcmFjZSB7JHRyYWNlTmFtZX0gZHVyYXRpb24gc2hvdWxkIGJlIHBvc2l0aXZlLicsXG4gIFtFcnJvckNvZGUuTk9fV0lORE9XXTogJ1dpbmRvdyBpcyBub3QgYXZhaWxhYmxlLicsXG4gIFtFcnJvckNvZGUuTk9fQVBQX0lEXTogJ0FwcCBpZCBpcyBub3QgYXZhaWxhYmxlLicsXG4gIFtFcnJvckNvZGUuTk9fUFJPSkVDVF9JRF06ICdQcm9qZWN0IGlkIGlzIG5vdCBhdmFpbGFibGUuJyxcbiAgW0Vycm9yQ29kZS5OT19BUElfS0VZXTogJ0FwaSBrZXkgaXMgbm90IGF2YWlsYWJsZS4nLFxuICBbRXJyb3JDb2RlLklOVkFMSURfQ0NfTE9HXTogJ0F0dGVtcHRlZCB0byBxdWV1ZSBpbnZhbGlkIGNjIGV2ZW50JyxcbiAgW0Vycm9yQ29kZS5GQl9OT1RfREVGQVVMVF06XG4gICAgJ1BlcmZvcm1hbmNlIGNhbiBvbmx5IHN0YXJ0IHdoZW4gRmlyZWJhc2UgYXBwIGluc3RhbmNlIGlzIHRoZSBkZWZhdWx0IG9uZS4nLFxuICBbRXJyb3JDb2RlLlJDX05PVF9PS106ICdSQyByZXNwb25zZSBpcyBub3Qgb2snLFxuICBbRXJyb3JDb2RlLklOVkFMSURfQVRUUklCVVRFX05BTUVdOlxuICAgICdBdHRyaWJ1dGUgbmFtZSB7JGF0dHJpYnV0ZU5hbWV9IGlzIGludmFsaWQuJyxcbiAgW0Vycm9yQ29kZS5JTlZBTElEX0FUVFJJQlVURV9WQUxVRV06XG4gICAgJ0F0dHJpYnV0ZSB2YWx1ZSB7JGF0dHJpYnV0ZVZhbHVlfSBpcyBpbnZhbGlkLicsXG4gIFtFcnJvckNvZGUuSU5WQUxJRF9DVVNUT01fTUVUUklDX05BTUVdOlxuICAgICdDdXN0b20gbWV0cmljIG5hbWUgeyRjdXN0b21NZXRyaWNOYW1lfSBpcyBpbnZhbGlkJyxcbiAgW0Vycm9yQ29kZS5JTlZBTElEX1NUUklOR19NRVJHRVJfUEFSQU1FVEVSXTpcbiAgICAnSW5wdXQgZm9yIFN0cmluZyBtZXJnZXIgaXMgaW52YWxpZCwgY29udGFjdCBzdXBwb3J0IHRlYW0gdG8gcmVzb2x2ZS4nLFxuICBbRXJyb3JDb2RlLkFMUkVBRFlfSU5JVElBTElaRURdOlxuICAgICdpbml0aWFsaXplUGVyZm9ybWFuY2UoKSBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZCB3aXRoICcgK1xuICAgICdkaWZmZXJlbnQgb3B0aW9ucy4gVG8gYXZvaWQgdGhpcyBlcnJvciwgY2FsbCBpbml0aWFsaXplUGVyZm9ybWFuY2UoKSB3aXRoIHRoZSAnICtcbiAgICAnc2FtZSBvcHRpb25zIGFzIHdoZW4gaXQgd2FzIG9yaWdpbmFsbHkgY2FsbGVkLCBvciBjYWxsIGdldFBlcmZvcm1hbmNlKCkgdG8gcmV0dXJuIHRoZScgK1xuICAgICcgYWxyZWFkeSBpbml0aWFsaXplZCBpbnN0YW5jZS4nXG59O1xuXG5pbnRlcmZhY2UgRXJyb3JQYXJhbXMge1xuICBbRXJyb3JDb2RlLlRSQUNFX1NUQVJURURfQkVGT1JFXTogeyB0cmFjZU5hbWU6IHN0cmluZyB9O1xuICBbRXJyb3JDb2RlLlRSQUNFX1NUT1BQRURfQkVGT1JFXTogeyB0cmFjZU5hbWU6IHN0cmluZyB9O1xuICBbRXJyb3JDb2RlLk5PTlBPU0lUSVZFX1RSQUNFX1NUQVJUX1RJTUVdOiB7IHRyYWNlTmFtZTogc3RyaW5nIH07XG4gIFtFcnJvckNvZGUuTk9OUE9TSVRJVkVfVFJBQ0VfRFVSQVRJT05dOiB7IHRyYWNlTmFtZTogc3RyaW5nIH07XG4gIFtFcnJvckNvZGUuSU5WQUxJRF9BVFRSSUJVVEVfTkFNRV06IHsgYXR0cmlidXRlTmFtZTogc3RyaW5nIH07XG4gIFtFcnJvckNvZGUuSU5WQUxJRF9BVFRSSUJVVEVfVkFMVUVdOiB7IGF0dHJpYnV0ZVZhbHVlOiBzdHJpbmcgfTtcbiAgW0Vycm9yQ29kZS5JTlZBTElEX0NVU1RPTV9NRVRSSUNfTkFNRV06IHsgY3VzdG9tTWV0cmljTmFtZTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeTxFcnJvckNvZGUsIEVycm9yUGFyYW1zPihcbiAgU0VSVklDRSxcbiAgU0VSVklDRV9OQU1FLFxuICBFUlJPUl9ERVNDUklQVElPTl9NQVBcbik7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgTG9nZ2VyLCBMb2dMZXZlbCB9IGZyb20gJ0BmaXJlYmFzZS9sb2dnZXInO1xuaW1wb3J0IHsgU0VSVklDRV9OQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGNvbnNvbGVMb2dnZXIgPSBuZXcgTG9nZ2VyKFNFUlZJQ0VfTkFNRSk7XG5jb25zb2xlTG9nZ2VyLmxvZ0xldmVsID0gTG9nTGV2ZWwuSU5GTztcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuLi91dGlscy9lcnJvcnMnO1xuaW1wb3J0IHsgaXNJbmRleGVkREJBdmFpbGFibGUsIGFyZUNvb2tpZXNFbmFibGVkIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgY29uc29sZUxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfbG9nZ2VyJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBQZXJmb3JtYW5jZU9ic2VydmVyOiB0eXBlb2YgUGVyZm9ybWFuY2VPYnNlcnZlcjtcbiAgICBwZXJmTWV0cmljcz86IHsgb25GaXJzdElucHV0RGVsYXkoZm46IChmaWQ6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQgfTtcbiAgfVxufVxuXG5sZXQgYXBpSW5zdGFuY2U6IEFwaSB8IHVuZGVmaW5lZDtcbmxldCB3aW5kb3dJbnN0YW5jZTogV2luZG93IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBFbnRyeVR5cGUgPVxuICB8ICdtYXJrJ1xuICB8ICdtZWFzdXJlJ1xuICB8ICdwYWludCdcbiAgfCAncmVzb3VyY2UnXG4gIHwgJ2ZyYW1lJ1xuICB8ICduYXZpZ2F0aW9uJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGhvbGRzIGEgcmVmZXJlbmNlIHRvIHZhcmlvdXMgYnJvd3NlciByZWxhdGVkIG9iamVjdHMgaW5qZWN0ZWQgYnlcbiAqIHNldCBtZXRob2RzLlxuICovXG5leHBvcnQgY2xhc3MgQXBpIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZXJmb3JtYW5jZTogUGVyZm9ybWFuY2U7XG4gIC8qKiBQcmVmb3JtYW5jZU9ic2VydmVyIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IFBlcmZvcm1hbmNlT2JzZXJ2ZXI6IHR5cGVvZiBQZXJmb3JtYW5jZU9ic2VydmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IHdpbmRvd0xvY2F0aW9uOiBMb2NhdGlvbjtcbiAgcmVhZG9ubHkgb25GaXJzdElucHV0RGVsYXk/OiAoZm46IChmaWQ6IG51bWJlcikgPT4gdm9pZCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgbG9jYWxTdG9yYWdlPzogU3RvcmFnZTtcbiAgcmVhZG9ubHkgZG9jdW1lbnQ6IERvY3VtZW50O1xuICByZWFkb25seSBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSB3aW5kb3c/OiBXaW5kb3cpIHtcbiAgICBpZiAoIXdpbmRvdykge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PX1dJTkRPVyk7XG4gICAgfVxuICAgIHRoaXMucGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XG4gICAgdGhpcy5QZXJmb3JtYW5jZU9ic2VydmVyID0gd2luZG93LlBlcmZvcm1hbmNlT2JzZXJ2ZXI7XG4gICAgdGhpcy53aW5kb3dMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB0aGlzLm5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3I7XG4gICAgdGhpcy5kb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICBpZiAodGhpcy5uYXZpZ2F0b3IgJiYgdGhpcy5uYXZpZ2F0b3IuY29va2llRW5hYmxlZCkge1xuICAgICAgLy8gSWYgdXNlciBibG9ja3MgY29va2llcyBvbiB0aGUgYnJvd3NlciwgYWNjZXNzaW5nIGxvY2FsU3RvcmFnZSB3aWxsXG4gICAgICAvLyB0aHJvdyBhbiBleGNlcHRpb24uXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgfVxuICAgIGlmICh3aW5kb3cucGVyZk1ldHJpY3MgJiYgd2luZG93LnBlcmZNZXRyaWNzLm9uRmlyc3RJbnB1dERlbGF5KSB7XG4gICAgICB0aGlzLm9uRmlyc3RJbnB1dERlbGF5ID0gd2luZG93LnBlcmZNZXRyaWNzLm9uRmlyc3RJbnB1dERlbGF5O1xuICAgIH1cbiAgfVxuXG4gIGdldFVybCgpOiBzdHJpbmcge1xuICAgIC8vIERvIG5vdCBjYXB0dXJlIHRoZSBzdHJpbmcgcXVlcnkgcGFydCBvZiB1cmwuXG4gICAgcmV0dXJuIHRoaXMud2luZG93TG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICB9XG5cbiAgbWFyayhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGVyZm9ybWFuY2UgfHwgIXRoaXMucGVyZm9ybWFuY2UubWFyaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBlcmZvcm1hbmNlLm1hcmsobmFtZSk7XG4gIH1cblxuICBtZWFzdXJlKG1lYXN1cmVOYW1lOiBzdHJpbmcsIG1hcmsxOiBzdHJpbmcsIG1hcmsyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGVyZm9ybWFuY2UgfHwgIXRoaXMucGVyZm9ybWFuY2UubWVhc3VyZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBlcmZvcm1hbmNlLm1lYXN1cmUobWVhc3VyZU5hbWUsIG1hcmsxLCBtYXJrMik7XG4gIH1cblxuICBnZXRFbnRyaWVzQnlUeXBlKHR5cGU6IEVudHJ5VHlwZSk6IFBlcmZvcm1hbmNlRW50cnlbXSB7XG4gICAgaWYgKCF0aGlzLnBlcmZvcm1hbmNlIHx8ICF0aGlzLnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZSh0eXBlKTtcbiAgfVxuXG4gIGdldEVudHJpZXNCeU5hbWUobmFtZTogc3RyaW5nKTogUGVyZm9ybWFuY2VFbnRyeVtdIHtcbiAgICBpZiAoIXRoaXMucGVyZm9ybWFuY2UgfHwgIXRoaXMucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKG5hbWUpO1xuICB9XG5cbiAgZ2V0VGltZU9yaWdpbigpOiBudW1iZXIge1xuICAgIC8vIFBvbHlmaWxsIHRoZSB0aW1lIG9yaWdpbiB3aXRoIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucGVyZm9ybWFuY2UgJiZcbiAgICAgICh0aGlzLnBlcmZvcm1hbmNlLnRpbWVPcmlnaW4gfHwgdGhpcy5wZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KVxuICAgICk7XG4gIH1cblxuICByZXF1aXJlZEFwaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKCFmZXRjaCB8fCAhUHJvbWlzZSB8fCAhYXJlQ29va2llc0VuYWJsZWQoKSkge1xuICAgICAgY29uc29sZUxvZ2dlci5pbmZvKFxuICAgICAgICAnRmlyZWJhc2UgUGVyZm9ybWFuY2UgY2Fubm90IHN0YXJ0IGlmIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBmZXRjaCBhbmQgUHJvbWlzZSBvciBjb29raWUgaXMgZGlzYWJsZWQuJ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzSW5kZXhlZERCQXZhaWxhYmxlKCkpIHtcbiAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbygnSW5kZXhlZERCIGlzIG5vdCBzdXBwb3J0ZWQgYnkgY3VycmVudCBicm93c3dlcicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldHVwT2JzZXJ2ZXIoXG4gICAgZW50cnlUeXBlOiBFbnRyeVR5cGUsXG4gICAgY2FsbGJhY2s6IChlbnRyeTogUGVyZm9ybWFuY2VFbnRyeSkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuUGVyZm9ybWFuY2VPYnNlcnZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyB0aGlzLlBlcmZvcm1hbmNlT2JzZXJ2ZXIobGlzdCA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGxpc3QuZ2V0RW50cmllcygpKSB7XG4gICAgICAgIC8vIGBlbnRyeWAgaXMgYSBQZXJmb3JtYW5jZUVudHJ5IGluc3RhbmNlLlxuICAgICAgICBjYWxsYmFjayhlbnRyeSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTdGFydCBvYnNlcnZpbmcgdGhlIGVudHJ5IHR5cGVzIHlvdSBjYXJlIGFib3V0LlxuICAgIG9ic2VydmVyLm9ic2VydmUoeyBlbnRyeVR5cGVzOiBbZW50cnlUeXBlXSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBcGkge1xuICAgIGlmIChhcGlJbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhcGlJbnN0YW5jZSA9IG5ldyBBcGkod2luZG93SW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gYXBpSW5zdGFuY2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwQXBpKHdpbmRvdzogV2luZG93KTogdm9pZCB7XG4gIHdpbmRvd0luc3RhbmNlID0gd2luZG93O1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IF9GaXJlYmFzZUluc3RhbGxhdGlvbnNJbnRlcm5hbCB9IGZyb20gJ0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zJztcblxubGV0IGlpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xubGV0IGF1dGhUb2tlbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWlkUHJvbWlzZShcbiAgaW5zdGFsbGF0aW9uc1NlcnZpY2U6IF9GaXJlYmFzZUluc3RhbGxhdGlvbnNJbnRlcm5hbFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgaWlkUHJvbWlzZSA9IGluc3RhbGxhdGlvbnNTZXJ2aWNlLmdldElkKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgaWlkUHJvbWlzZS50aGVuKChpaWRWYWw6IHN0cmluZykgPT4ge1xuICAgIGlpZCA9IGlpZFZhbDtcbiAgfSk7XG4gIHJldHVybiBpaWRQcm9taXNlO1xufVxuXG4vLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCBhZnRlciB0aGUgaWlkIGlzIHJldHJpZXZlZCBieSBnZXRJaWRQcm9taXNlIG1ldGhvZC5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJaWQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGhUb2tlblByb21pc2UoXG4gIGluc3RhbGxhdGlvbnNTZXJ2aWNlOiBfRmlyZWJhc2VJbnN0YWxsYXRpb25zSW50ZXJuYWxcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGF1dGhUb2tlblByb21pc2UgPSBpbnN0YWxsYXRpb25zU2VydmljZS5nZXRUb2tlbigpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gIGF1dGhUb2tlblByb21pc2UudGhlbigoYXV0aFRva2VuVmFsOiBzdHJpbmcpID0+IHtcbiAgICBhdXRoVG9rZW4gPSBhdXRoVG9rZW5WYWw7XG4gIH0pO1xuICByZXR1cm4gYXV0aFRva2VuUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0aW9uVG9rZW4oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGF1dGhUb2tlbjtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuL2Vycm9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0cmluZ3MocGFydDE6IHN0cmluZywgcGFydDI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNpemVEaWZmID0gcGFydDEubGVuZ3RoIC0gcGFydDIubGVuZ3RoO1xuICBpZiAoc2l6ZURpZmYgPCAwIHx8IHNpemVEaWZmID4gMSkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5JTlZBTElEX1NUUklOR19NRVJHRVJfUEFSQU1FVEVSKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdEFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydDEubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRBcnJheS5wdXNoKHBhcnQxLmNoYXJBdChpKSk7XG4gICAgaWYgKHBhcnQyLmxlbmd0aCA+IGkpIHtcbiAgICAgIHJlc3VsdEFycmF5LnB1c2gocGFydDIuY2hhckF0KGkpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0QXJyYXkuam9pbignJyk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgbWVyZ2VTdHJpbmdzIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5nX21lcmdlcic7XG5cbmxldCBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZTogU2V0dGluZ3NTZXJ2aWNlIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcbiAgLy8gVGhlIHZhcmlhYmxlIHdoaWNoIGNvbnRyb2xzIGxvZ2dpbmcgb2YgYXV0b21hdGljIHRyYWNlcyBhbmQgSFRUUC9TIG5ldHdvcmsgbW9uaXRvcmluZy5cbiAgaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCA9IHRydWU7XG5cbiAgLy8gVGhlIHZhcmlhYmxlIHdoaWNoIGNvbnRyb2xzIGxvZ2dpbmcgb2YgY3VzdG9tIHRyYWNlcy5cbiAgZGF0YUNvbGxlY3Rpb25FbmFibGVkID0gdHJ1ZTtcblxuICAvLyBDb25maWd1cmF0aW9uIGZsYWdzIHNldCB0aHJvdWdoIHJlbW90ZSBjb25maWcuXG4gIGxvZ2dpbmdFbmFibGVkID0gZmFsc2U7XG4gIC8vIFNhbXBsaW5nIHJhdGUgYmV0d2VlbiAwIGFuZCAxLlxuICB0cmFjZXNTYW1wbGluZ1JhdGUgPSAxO1xuICBuZXR3b3JrUmVxdWVzdHNTYW1wbGluZ1JhdGUgPSAxO1xuXG4gIC8vIEFkZHJlc3Mgb2YgbG9nZ2luZyBzZXJ2aWNlLlxuICBsb2dFbmRQb2ludFVybCA9XG4gICAgJ2h0dHBzOi8vZmlyZWJhc2Vsb2dnaW5nLmdvb2dsZWFwaXMuY29tL3YwY2MvbG9nP2Zvcm1hdD1qc29uX3Byb3RvJztcbiAgLy8gUGVyZm9ybWFuY2UgZXZlbnQgdHJhbnNwb3J0IGVuZHBvaW50IFVSTCB3aGljaCBzaG91bGQgYmUgY29tcGF0aWJsZSB3aXRoIHByb3RvMy5cbiAgLy8gTmV3IEFkZHJlc3MgZm9yIHRyYW5zcG9ydCBzZXJ2aWNlLCBub3QgY29uZmlndXJhYmxlIHZpYSBSZW1vdGUgQ29uZmlnLlxuICBmbFRyYW5zcG9ydEVuZHBvaW50VXJsID0gbWVyZ2VTdHJpbmdzKFxuICAgICdodHMvZnJic2xnaWdwLm9nZXBzY212L2llby9lYXlsZycsXG4gICAgJ3RwOi9pZWFlb2duLWFnb2xhaS5vLzFmcmxnbGdjL28nXG4gICk7XG5cbiAgdHJhbnNwb3J0S2V5ID0gbWVyZ2VTdHJpbmdzKCdBelNDOHI2UmVpR3FGTXlmdmdvdycsICdJYXl4MHUtWFQzdmtzVk0tcElWJyk7XG5cbiAgLy8gU291cmNlIHR5cGUgZm9yIHBlcmZvcm1hbmNlIGV2ZW50IGxvZ3MuXG4gIGxvZ1NvdXJjZSA9IDQ2MjtcblxuICAvLyBGbGFncyB3aGljaCBjb250cm9sIHBlciBzZXNzaW9uIGxvZ2dpbmcgb2YgdHJhY2VzIGFuZCBuZXR3b3JrIHJlcXVlc3RzLlxuICBsb2dUcmFjZUFmdGVyU2FtcGxpbmcgPSBmYWxzZTtcbiAgbG9nTmV0d29ya0FmdGVyU2FtcGxpbmcgPSBmYWxzZTtcblxuICAvLyBUVEwgb2YgY29uZmlnIHJldHJpZXZlZCBmcm9tIHJlbW90ZSBjb25maWcgaW4gaG91cnMuXG4gIGNvbmZpZ1RpbWVUb0xpdmUgPSAxMjtcblxuICBnZXRGbFRyYW5zcG9ydEZ1bGxVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mbFRyYW5zcG9ydEVuZHBvaW50VXJsLmNvbmNhdCgnP2tleT0nLCB0aGlzLnRyYW5zcG9ydEtleSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU2V0dGluZ3NTZXJ2aWNlIHtcbiAgICBpZiAoc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UgPSBuZXcgU2V0dGluZ3NTZXJ2aWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaV9zZXJ2aWNlJztcblxuLy8gVGhlIHZhbHVlcyBhbmQgb3JkZXJzIG9mIHRoZSBmb2xsb3dpbmcgZW51bXMgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuY29uc3QgZW51bSBTZXJ2aWNlV29ya2VyU3RhdHVzIHtcbiAgVU5LTk9XTiA9IDAsXG4gIFVOU1VQUE9SVEVEID0gMSxcbiAgQ09OVFJPTExFRCA9IDIsXG4gIFVOQ09OVFJPTExFRCA9IDNcbn1cblxuZXhwb3J0IGVudW0gVmlzaWJpbGl0eVN0YXRlIHtcbiAgVU5LTk9XTiA9IDAsXG4gIFZJU0lCTEUgPSAxLFxuICBISURERU4gPSAyXG59XG5cbmNvbnN0IGVudW0gRWZmZWN0aXZlQ29ubmVjdGlvblR5cGUge1xuICBVTktOT1dOID0gMCxcbiAgQ09OTkVDVElPTl9TTE9XXzJHID0gMSxcbiAgQ09OTkVDVElPTl8yRyA9IDIsXG4gIENPTk5FQ1RJT05fM0cgPSAzLFxuICBDT05ORUNUSU9OXzRHID0gNFxufVxuXG4vKipcbiAqIE5ldHdvcmtJbmZvcm1hdGlvblxuICpcbiAqIHJlZjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05ldHdvcmtJbmZvcm1hdGlvblxuICovXG5pbnRlcmZhY2UgTmV0d29ya0luZm9ybWF0aW9uV2l0aEVmZmVjdGl2ZVR5cGUgZXh0ZW5kcyBOZXR3b3JrSW5mb3JtYXRpb24ge1xuICAvLyBgZWZmZWN0aXZlVHlwZWAgaXMgYW4gZXhwZXJpbWVudGFsIHByb3BlcnR5IGFuZCBub3QgaW5jbHVkZWQgaW5cbiAgLy8gVHlwZVNjcmlwdCdzIHR5cGluZ3MgZm9yIHRoZSBuYXRpdmUgTmV0d29ya0luZm9ybWF0aW9uIGludGVyZmFjZVxuICByZWFkb25seSBlZmZlY3RpdmVUeXBlPzogJ3Nsb3ctMmcnIHwgJzJnJyB8ICczZycgfCAnNGcnO1xufVxuXG5pbnRlcmZhY2UgTmF2aWdhdG9yV2l0aENvbm5lY3Rpb24gZXh0ZW5kcyBOYXZpZ2F0b3Ige1xuICByZWFkb25seSBjb25uZWN0aW9uOiBOZXR3b3JrSW5mb3JtYXRpb25XaXRoRWZmZWN0aXZlVHlwZTtcbn1cblxuY29uc3QgUkVTRVJWRURfQVRUUklCVVRFX1BSRUZJWEVTID0gWydmaXJlYmFzZV8nLCAnZ29vZ2xlXycsICdnYV8nXTtcbmNvbnN0IEFUVFJJQlVURV9GT1JNQVRfUkVHRVggPSBuZXcgUmVnRXhwKCdeW2EtekEtWl1cXFxcdyokJyk7XG5jb25zdCBNQVhfQVRUUklCVVRFX05BTUVfTEVOR1RIID0gNDA7XG5jb25zdCBNQVhfQVRUUklCVVRFX1ZBTFVFX0xFTkdUSCA9IDEwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZpY2VXb3JrZXJTdGF0dXMoKTogU2VydmljZVdvcmtlclN0YXR1cyB7XG4gIGNvbnN0IG5hdmlnYXRvciA9IEFwaS5nZXRJbnN0YW5jZSgpLm5hdmlnYXRvcjtcbiAgaWYgKG5hdmlnYXRvcj8uc2VydmljZVdvcmtlcikge1xuICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICByZXR1cm4gU2VydmljZVdvcmtlclN0YXR1cy5DT05UUk9MTEVEO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU2VydmljZVdvcmtlclN0YXR1cy5VTkNPTlRST0xMRUQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBTZXJ2aWNlV29ya2VyU3RhdHVzLlVOU1VQUE9SVEVEO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXNpYmlsaXR5U3RhdGUoKTogVmlzaWJpbGl0eVN0YXRlIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBBcGkuZ2V0SW5zdGFuY2UoKS5kb2N1bWVudDtcbiAgY29uc3QgdmlzaWJpbGl0eVN0YXRlID0gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlO1xuICBzd2l0Y2ggKHZpc2liaWxpdHlTdGF0ZSkge1xuICAgIGNhc2UgJ3Zpc2libGUnOlxuICAgICAgcmV0dXJuIFZpc2liaWxpdHlTdGF0ZS5WSVNJQkxFO1xuICAgIGNhc2UgJ2hpZGRlbic6XG4gICAgICByZXR1cm4gVmlzaWJpbGl0eVN0YXRlLkhJRERFTjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFZpc2liaWxpdHlTdGF0ZS5VTktOT1dOO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3RpdmVDb25uZWN0aW9uVHlwZSgpOiBFZmZlY3RpdmVDb25uZWN0aW9uVHlwZSB7XG4gIGNvbnN0IG5hdmlnYXRvciA9IEFwaS5nZXRJbnN0YW5jZSgpLm5hdmlnYXRvcjtcbiAgY29uc3QgbmF2aWdhdG9yQ29ubmVjdGlvbiA9IChuYXZpZ2F0b3IgYXMgTmF2aWdhdG9yV2l0aENvbm5lY3Rpb24pLmNvbm5lY3Rpb247XG4gIGNvbnN0IGVmZmVjdGl2ZVR5cGUgPVxuICAgIG5hdmlnYXRvckNvbm5lY3Rpb24gJiYgbmF2aWdhdG9yQ29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlO1xuICBzd2l0Y2ggKGVmZmVjdGl2ZVR5cGUpIHtcbiAgICBjYXNlICdzbG93LTJnJzpcbiAgICAgIHJldHVybiBFZmZlY3RpdmVDb25uZWN0aW9uVHlwZS5DT05ORUNUSU9OX1NMT1dfMkc7XG4gICAgY2FzZSAnMmcnOlxuICAgICAgcmV0dXJuIEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlLkNPTk5FQ1RJT05fMkc7XG4gICAgY2FzZSAnM2cnOlxuICAgICAgcmV0dXJuIEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlLkNPTk5FQ1RJT05fM0c7XG4gICAgY2FzZSAnNGcnOlxuICAgICAgcmV0dXJuIEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlLkNPTk5FQ1RJT05fNEc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBFZmZlY3RpdmVDb25uZWN0aW9uVHlwZS5VTktOT1dOO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKG5hbWUubGVuZ3RoID09PSAwIHx8IG5hbWUubGVuZ3RoID4gTUFYX0FUVFJJQlVURV9OQU1FX0xFTkdUSCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtYXRjaGVzUmVzZXJ2ZWRQcmVmaXggPSBSRVNFUlZFRF9BVFRSSUJVVEVfUFJFRklYRVMuc29tZShwcmVmaXggPT5cbiAgICBuYW1lLnN0YXJ0c1dpdGgocHJlZml4KVxuICApO1xuICByZXR1cm4gIW1hdGNoZXNSZXNlcnZlZFByZWZpeCAmJiAhIW5hbWUubWF0Y2goQVRUUklCVVRFX0ZPUk1BVF9SRUdFWCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUubGVuZ3RoICE9PSAwICYmIHZhbHVlLmxlbmd0aCA8PSBNQVhfQVRUUklCVVRFX1ZBTFVFX0xFTkdUSDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcCB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwSWQoZmlyZWJhc2VBcHA6IEZpcmViYXNlQXBwKTogc3RyaW5nIHtcbiAgY29uc3QgYXBwSWQgPSBmaXJlYmFzZUFwcC5vcHRpb25zPy5hcHBJZDtcbiAgaWYgKCFhcHBJZCkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT19BUFBfSUQpO1xuICB9XG4gIHJldHVybiBhcHBJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RJZChmaXJlYmFzZUFwcDogRmlyZWJhc2VBcHApOiBzdHJpbmcge1xuICBjb25zdCBwcm9qZWN0SWQgPSBmaXJlYmFzZUFwcC5vcHRpb25zPy5wcm9qZWN0SWQ7XG4gIGlmICghcHJvamVjdElkKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PX1BST0pFQ1RfSUQpO1xuICB9XG4gIHJldHVybiBwcm9qZWN0SWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcGlLZXkoZmlyZWJhc2VBcHA6IEZpcmViYXNlQXBwKTogc3RyaW5nIHtcbiAgY29uc3QgYXBpS2V5ID0gZmlyZWJhc2VBcHAub3B0aW9ucz8uYXBpS2V5O1xuICBpZiAoIWFwaUtleSkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT19BUElfS0VZKTtcbiAgfVxuICByZXR1cm4gYXBpS2V5O1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIENPTkZJR19FWFBJUllfTE9DQUxfU1RPUkFHRV9LRVksXG4gIENPTkZJR19MT0NBTF9TVE9SQUdFX0tFWSxcbiAgU0RLX1ZFUlNJT05cbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbnNvbGVMb2dnZXIgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX2xvZ2dlcic7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuLi91dGlscy9lcnJvcnMnO1xuXG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuL2FwaV9zZXJ2aWNlJztcbmltcG9ydCB7IGdldEF1dGhUb2tlblByb21pc2UgfSBmcm9tICcuL2lpZF9zZXJ2aWNlJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4vc2V0dGluZ3Nfc2VydmljZSc7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9wZXJmJztcbmltcG9ydCB7IGdldFByb2plY3RJZCwgZ2V0QXBpS2V5LCBnZXRBcHBJZCB9IGZyb20gJy4uL3V0aWxzL2FwcF91dGlscyc7XG5cbmNvbnN0IFJFTU9URV9DT05GSUdfU0RLX1ZFUlNJT04gPSAnMC4wLjEnO1xuXG5pbnRlcmZhY2UgU2Vjb25kYXJ5Q29uZmlnIHtcbiAgbG9nZ2luZ0VuYWJsZWQ/OiBib29sZWFuO1xuICBsb2dTb3VyY2U/OiBudW1iZXI7XG4gIGxvZ0VuZFBvaW50VXJsPzogc3RyaW5nO1xuICB0cmFuc3BvcnRLZXk/OiBzdHJpbmc7XG4gIHRyYWNlc1NhbXBsaW5nUmF0ZT86IG51bWJlcjtcbiAgbmV0d29ya1JlcXVlc3RzU2FtcGxpbmdSYXRlPzogbnVtYmVyO1xufVxuXG4vLyBUaGVzZSB2YWx1ZXMgd2lsbCBiZSB1c2VkIGlmIHRoZSByZW1vdGUgY29uZmlnIG9iamVjdCBpcyBzdWNjZXNzZnVsbHlcbi8vIHJldHJpZXZlZCwgYnV0IHRoZSB0ZW1wbGF0ZSBkb2VzIG5vdCBoYXZlIHRoZXNlIGZpZWxkcy5cbmNvbnN0IERFRkFVTFRfQ09ORklHUzogU2Vjb25kYXJ5Q29uZmlnID0ge1xuICBsb2dnaW5nRW5hYmxlZDogdHJ1ZVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbnRlcmZhY2UgUmVtb3RlQ29uZmlnVGVtcGxhdGUge1xuICBmcHJfZW5hYmxlZD86IHN0cmluZztcbiAgZnByX2xvZ19zb3VyY2U/OiBzdHJpbmc7XG4gIGZwcl9sb2dfZW5kcG9pbnRfdXJsPzogc3RyaW5nO1xuICBmcHJfbG9nX3RyYW5zcG9ydF9rZXk/OiBzdHJpbmc7XG4gIGZwcl9sb2dfdHJhbnNwb3J0X3dlYl9wZXJjZW50Pzogc3RyaW5nO1xuICBmcHJfdmNfbmV0d29ya19yZXF1ZXN0X3NhbXBsaW5nX3JhdGU/OiBzdHJpbmc7XG4gIGZwcl92Y190cmFjZV9zYW1wbGluZ19yYXRlPzogc3RyaW5nO1xuICBmcHJfdmNfc2Vzc2lvbl9zYW1wbGluZ19yYXRlPzogc3RyaW5nO1xufVxuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cblxuaW50ZXJmYWNlIFJlbW90ZUNvbmZpZ1Jlc3BvbnNlIHtcbiAgZW50cmllcz86IFJlbW90ZUNvbmZpZ1RlbXBsYXRlO1xuICBzdGF0ZT86IHN0cmluZztcbn1cblxuY29uc3QgRklTX0FVVEhfUFJFRklYID0gJ0ZJUkVCQVNFX0lOU1RBTExBVElPTlNfQVVUSCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWcoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICBpaWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldFN0b3JlZENvbmZpZygpO1xuICBpZiAoY29uZmlnKSB7XG4gICAgcHJvY2Vzc0NvbmZpZyhjb25maWcpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHJldHVybiBnZXRSZW1vdGVDb25maWcocGVyZm9ybWFuY2VDb250cm9sbGVyLCBpaWQpXG4gICAgLnRoZW4ocHJvY2Vzc0NvbmZpZylcbiAgICAudGhlbihcbiAgICAgIGNvbmZpZyA9PiBzdG9yZUNvbmZpZyhjb25maWcpLFxuICAgICAgLyoqIERvIG5vdGhpbmcgZm9yIGVycm9yLCB1c2UgZGVmYXVsdHMgc2V0IGluIHNldHRpbmdzIHNlcnZpY2UuICovXG4gICAgICAoKSA9PiB7fVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3JlZENvbmZpZygpOiBSZW1vdGVDb25maWdSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZSA9IEFwaS5nZXRJbnN0YW5jZSgpLmxvY2FsU3RvcmFnZTtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZXhwaXJ5U3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ09ORklHX0VYUElSWV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gIGlmICghZXhwaXJ5U3RyaW5nIHx8ICFjb25maWdWYWxpZChleHBpcnlTdHJpbmcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29uZmlnU3RyaW5naWZpZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDT05GSUdfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICBpZiAoIWNvbmZpZ1N0cmluZ2lmaWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgY29uZmlnUmVzcG9uc2U6IFJlbW90ZUNvbmZpZ1Jlc3BvbnNlID0gSlNPTi5wYXJzZShjb25maWdTdHJpbmdpZmllZCk7XG4gICAgcmV0dXJuIGNvbmZpZ1Jlc3BvbnNlO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmVDb25maWcoY29uZmlnOiBSZW1vdGVDb25maWdSZXNwb25zZSB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICBjb25zdCBsb2NhbFN0b3JhZ2UgPSBBcGkuZ2V0SW5zdGFuY2UoKS5sb2NhbFN0b3JhZ2U7XG4gIGlmICghY29uZmlnIHx8ICFsb2NhbFN0b3JhZ2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDT05GSUdfTE9DQUxfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGNvbmZpZykpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICBDT05GSUdfRVhQSVJZX0xPQ0FMX1NUT1JBR0VfS0VZLFxuICAgIFN0cmluZyhcbiAgICAgIERhdGUubm93KCkgK1xuICAgICAgICBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5jb25maWdUaW1lVG9MaXZlICogNjAgKiA2MCAqIDEwMDBcbiAgICApXG4gICk7XG59XG5cbmNvbnN0IENPVUxEX05PVF9HRVRfQ09ORklHX01TRyA9XG4gICdDb3VsZCBub3QgZmV0Y2ggY29uZmlnLCB3aWxsIHVzZSBkZWZhdWx0IGNvbmZpZ3MnO1xuXG5mdW5jdGlvbiBnZXRSZW1vdGVDb25maWcoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICBpaWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxSZW1vdGVDb25maWdSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICAvLyBQZXJmIG5lZWRzIGF1dGggdG9rZW4gb25seSB0byByZXRyaWV2ZSByZW1vdGUgY29uZmlnLlxuICByZXR1cm4gZ2V0QXV0aFRva2VuUHJvbWlzZShwZXJmb3JtYW5jZUNvbnRyb2xsZXIuaW5zdGFsbGF0aW9ucylcbiAgICAudGhlbihhdXRoVG9rZW4gPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZ2V0UHJvamVjdElkKHBlcmZvcm1hbmNlQ29udHJvbGxlci5hcHApO1xuICAgICAgY29uc3QgYXBpS2V5ID0gZ2V0QXBpS2V5KHBlcmZvcm1hbmNlQ29udHJvbGxlci5hcHApO1xuICAgICAgY29uc3QgY29uZmlnRW5kUG9pbnQgPSBgaHR0cHM6Ly9maXJlYmFzZXJlbW90ZWNvbmZpZy5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy8ke3Byb2plY3RJZH0vbmFtZXNwYWNlcy9maXJlcGVyZjpmZXRjaD9rZXk9JHthcGlLZXl9YDtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChjb25maWdFbmRQb2ludCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgJHtGSVNfQVVUSF9QUkVGSVh9ICR7YXV0aFRva2VufWAgfSxcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBhcHBfaW5zdGFuY2VfaWQ6IGlpZCxcbiAgICAgICAgICBhcHBfaW5zdGFuY2VfaWRfdG9rZW46IGF1dGhUb2tlbixcbiAgICAgICAgICBhcHBfaWQ6IGdldEFwcElkKHBlcmZvcm1hbmNlQ29udHJvbGxlci5hcHApLFxuICAgICAgICAgIGFwcF92ZXJzaW9uOiBTREtfVkVSU0lPTixcbiAgICAgICAgICBzZGtfdmVyc2lvbjogUkVNT1RFX0NPTkZJR19TREtfVkVSU0lPTlxuICAgICAgICB9KVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmV0Y2gocmVxdWVzdCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgUmVtb3RlQ29uZmlnUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW4gY2FzZSByZXNwb25zZSBpcyBub3Qgb2suIFRoaXMgd2lsbCBiZSBjYXVnaHQgYnkgY2F0Y2guXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5SQ19OT1RfT0spO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZUxvZ2dlci5pbmZvKENPVUxEX05PVF9HRVRfQ09ORklHX01TRyk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFByb2Nlc3NlcyBjb25maWcgY29taW5nIGVpdGhlciBmcm9tIGNhbGxpbmcgUkMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICogVGhpcyBtZXRob2Qgb25seSBydW5zIGlmIGNhbGwgaXMgc3VjY2Vzc2Z1bCBvciBjb25maWcgaW4gc3RvcmFnZVxuICogaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NDb25maWcoXG4gIGNvbmZpZz86IFJlbW90ZUNvbmZpZ1Jlc3BvbnNlXG4pOiBSZW1vdGVDb25maWdSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuICBjb25zdCBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZSA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICBjb25zdCBlbnRyaWVzID0gY29uZmlnLmVudHJpZXMgfHwge307XG4gIGlmIChlbnRyaWVzLmZwcl9lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBUT0RPOiBDaGFuZ2UgdGhlIGFzc2lnbm1lbnQgb2YgbG9nZ2luZ0VuYWJsZWQgb25jZSB0aGUgcmVjZWl2ZWQgdHlwZSBpc1xuICAgIC8vIGtub3duLlxuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ2dpbmdFbmFibGVkID1cbiAgICAgIFN0cmluZyhlbnRyaWVzLmZwcl9lbmFibGVkKSA9PT0gJ3RydWUnO1xuICB9IGVsc2UgaWYgKERFRkFVTFRfQ09ORklHUy5sb2dnaW5nRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gQ29uZmlnIHJldHJpZXZlZCBzdWNjZXNzZnVsbHksIGJ1dCB0aGVyZSBpcyBubyBmcHJfZW5hYmxlZCBpbiB0ZW1wbGF0ZS5cbiAgICAvLyBVc2Ugc2Vjb25kYXJ5IGNvbmZpZ3MgdmFsdWUuXG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nZ2luZ0VuYWJsZWQgPSBERUZBVUxUX0NPTkZJR1MubG9nZ2luZ0VuYWJsZWQ7XG4gIH1cbiAgaWYgKGVudHJpZXMuZnByX2xvZ19zb3VyY2UpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dTb3VyY2UgPSBOdW1iZXIoZW50cmllcy5mcHJfbG9nX3NvdXJjZSk7XG4gIH0gZWxzZSBpZiAoREVGQVVMVF9DT05GSUdTLmxvZ1NvdXJjZSkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ1NvdXJjZSA9IERFRkFVTFRfQ09ORklHUy5sb2dTb3VyY2U7XG4gIH1cblxuICBpZiAoZW50cmllcy5mcHJfbG9nX2VuZHBvaW50X3VybCkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ0VuZFBvaW50VXJsID0gZW50cmllcy5mcHJfbG9nX2VuZHBvaW50X3VybDtcbiAgfSBlbHNlIGlmIChERUZBVUxUX0NPTkZJR1MubG9nRW5kUG9pbnRVcmwpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dFbmRQb2ludFVybCA9IERFRkFVTFRfQ09ORklHUy5sb2dFbmRQb2ludFVybDtcbiAgfVxuXG4gIC8vIEtleSBmcm9tIFJlbW90ZSBDb25maWcgaGFzIHRvIGJlIG5vbi1lbXB0eSBzdHJpbmcsIG90aGVyd3NpZSB1c2UgbG9jYWwgdmFsdWUuXG4gIGlmIChlbnRyaWVzLmZwcl9sb2dfdHJhbnNwb3J0X2tleSkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLnRyYW5zcG9ydEtleSA9IGVudHJpZXMuZnByX2xvZ190cmFuc3BvcnRfa2V5O1xuICB9IGVsc2UgaWYgKERFRkFVTFRfQ09ORklHUy50cmFuc3BvcnRLZXkpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS50cmFuc3BvcnRLZXkgPSBERUZBVUxUX0NPTkZJR1MudHJhbnNwb3J0S2V5O1xuICB9XG5cbiAgaWYgKGVudHJpZXMuZnByX3ZjX25ldHdvcmtfcmVxdWVzdF9zYW1wbGluZ19yYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5uZXR3b3JrUmVxdWVzdHNTYW1wbGluZ1JhdGUgPSBOdW1iZXIoXG4gICAgICBlbnRyaWVzLmZwcl92Y19uZXR3b3JrX3JlcXVlc3Rfc2FtcGxpbmdfcmF0ZVxuICAgICk7XG4gIH0gZWxzZSBpZiAoREVGQVVMVF9DT05GSUdTLm5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubmV0d29ya1JlcXVlc3RzU2FtcGxpbmdSYXRlID1cbiAgICAgIERFRkFVTFRfQ09ORklHUy5uZXR3b3JrUmVxdWVzdHNTYW1wbGluZ1JhdGU7XG4gIH1cbiAgaWYgKGVudHJpZXMuZnByX3ZjX3RyYWNlX3NhbXBsaW5nX3JhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLnRyYWNlc1NhbXBsaW5nUmF0ZSA9IE51bWJlcihcbiAgICAgIGVudHJpZXMuZnByX3ZjX3RyYWNlX3NhbXBsaW5nX3JhdGVcbiAgICApO1xuICB9IGVsc2UgaWYgKERFRkFVTFRfQ09ORklHUy50cmFjZXNTYW1wbGluZ1JhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLnRyYWNlc1NhbXBsaW5nUmF0ZSA9XG4gICAgICBERUZBVUxUX0NPTkZJR1MudHJhY2VzU2FtcGxpbmdSYXRlO1xuICB9XG4gIC8vIFNldCB0aGUgcGVyIHNlc3Npb24gdHJhY2UgYW5kIG5ldHdvcmsgbG9nZ2luZyBmbGFncy5cbiAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nVHJhY2VBZnRlclNhbXBsaW5nID0gc2hvdWxkTG9nQWZ0ZXJTYW1wbGluZyhcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS50cmFjZXNTYW1wbGluZ1JhdGVcbiAgKTtcbiAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nTmV0d29ya0FmdGVyU2FtcGxpbmcgPSBzaG91bGRMb2dBZnRlclNhbXBsaW5nKFxuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLm5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZVxuICApO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiBjb25maWdWYWxpZChleHBpcnk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gTnVtYmVyKGV4cGlyeSkgPiBEYXRlLm5vdygpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRMb2dBZnRlclNhbXBsaW5nKHNhbXBsaW5nUmF0ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpIDw9IHNhbXBsaW5nUmF0ZTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBnZXRJaWRQcm9taXNlIH0gZnJvbSAnLi9paWRfc2VydmljZSc7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICcuL3JlbW90ZV9jb25maWdfc2VydmljZSc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuL2FwaV9zZXJ2aWNlJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3BlcmYnO1xuXG5jb25zdCBlbnVtIEluaXRpYWxpemF0aW9uU3RhdHVzIHtcbiAgbm90SW5pdGlhbGl6ZWQgPSAxLFxuICBpbml0aWFsaXphdGlvblBlbmRpbmcsXG4gIGluaXRpYWxpemVkXG59XG5cbmxldCBpbml0aWFsaXphdGlvblN0YXR1cyA9IEluaXRpYWxpemF0aW9uU3RhdHVzLm5vdEluaXRpYWxpemVkO1xuXG5sZXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhbGl6YXRpb25Qcm9taXNlKFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlclxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGluaXRpYWxpemF0aW9uU3RhdHVzID0gSW5pdGlhbGl6YXRpb25TdGF0dXMuaW5pdGlhbGl6YXRpb25QZW5kaW5nO1xuXG4gIGluaXRpYWxpemF0aW9uUHJvbWlzZSA9XG4gICAgaW5pdGlhbGl6YXRpb25Qcm9taXNlIHx8IGluaXRpYWxpemVQZXJmKHBlcmZvcm1hbmNlQ29udHJvbGxlcik7XG5cbiAgcmV0dXJuIGluaXRpYWxpemF0aW9uUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGVyZkluaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaW5pdGlhbGl6YXRpb25TdGF0dXMgPT09IEluaXRpYWxpemF0aW9uU3RhdHVzLmluaXRpYWxpemVkO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUGVyZihcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXJcbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gZ2V0RG9jdW1lbnRSZWFkeUNvbXBsZXRlKClcbiAgICAudGhlbigoKSA9PiBnZXRJaWRQcm9taXNlKHBlcmZvcm1hbmNlQ29udHJvbGxlci5pbnN0YWxsYXRpb25zKSlcbiAgICAudGhlbihpaWQgPT4gZ2V0Q29uZmlnKHBlcmZvcm1hbmNlQ29udHJvbGxlciwgaWlkKSlcbiAgICAudGhlbihcbiAgICAgICgpID0+IGNoYW5nZUluaXRpYWxpemF0aW9uU3RhdHVzKCksXG4gICAgICAoKSA9PiBjaGFuZ2VJbml0aWFsaXphdGlvblN0YXR1cygpXG4gICAgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB3aGljaCByZXNvbHZlcyB3aGVuZXZlciB0aGUgZG9jdW1lbnQgcmVhZHlzdGF0ZSBpcyBjb21wbGV0ZSBvclxuICogaW1tZWRpYXRlbHkgaWYgaXQgaXMgY2FsbGVkIGFmdGVyIHBhZ2UgbG9hZCBjb21wbGV0ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWFkeUNvbXBsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBkb2N1bWVudCA9IEFwaS5nZXRJbnN0YW5jZSgpLmRvY3VtZW50O1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGhhbmRsZXIpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUluaXRpYWxpemF0aW9uU3RhdHVzKCk6IHZvaWQge1xuICBpbml0aWFsaXphdGlvblN0YXR1cyA9IEluaXRpYWxpemF0aW9uU3RhdHVzLmluaXRpYWxpemVkO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4vc2V0dGluZ3Nfc2VydmljZSc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuLi91dGlscy9lcnJvcnMnO1xuaW1wb3J0IHsgY29uc29sZUxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfbG9nZ2VyJztcblxuY29uc3QgREVGQVVMVF9TRU5EX0lOVEVSVkFMX01TID0gMTAgKiAxMDAwO1xuY29uc3QgSU5JVElBTF9TRU5EX1RJTUVfREVMQVlfTVMgPSA1LjUgKiAxMDAwO1xuLy8gSWYgZW5kIHBvaW50IGRvZXMgbm90IHdvcmssIHRoZSBjYWxsIHdpbGwgYmUgdHJpZWQgZm9yIHRoZXNlIG1hbnkgdGltZXMuXG5jb25zdCBERUZBVUxUX1JFTUFJTklOR19UUklFUyA9IDM7XG5jb25zdCBNQVhfRVZFTlRfQ09VTlRfUEVSX1JFUVVFU1QgPSAxMDAwO1xubGV0IHJlbWFpbmluZ1RyaWVzID0gREVGQVVMVF9SRU1BSU5JTkdfVFJJRVM7XG5cbmludGVyZmFjZSBMb2dSZXNwb25zZURldGFpbHMge1xuICByZXNwb25zZUFjdGlvbj86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEJhdGNoRXZlbnQge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGV2ZW50VGltZTogbnVtYmVyO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbi8vIENDL0ZsIGFjY2VwdGVkIGxvZyBmb3JtYXQuXG5pbnRlcmZhY2UgVHJhbnNwb3J0QmF0Y2hMb2dGb3JtYXQge1xuICByZXF1ZXN0X3RpbWVfbXM6IHN0cmluZztcbiAgY2xpZW50X2luZm86IENsaWVudEluZm87XG4gIGxvZ19zb3VyY2U6IG51bWJlcjtcbiAgbG9nX2V2ZW50OiBMb2dbXTtcbn1cblxuaW50ZXJmYWNlIENsaWVudEluZm8ge1xuICBjbGllbnRfdHlwZTogbnVtYmVyO1xuICBqc19jbGllbnRfaW5mbzoge307XG59XG5cbmludGVyZmFjZSBMb2cge1xuICBzb3VyY2VfZXh0ZW5zaW9uX2pzb25fcHJvdG8zOiBzdHJpbmc7XG4gIGV2ZW50X3RpbWVfbXM6IHN0cmluZztcbn1cbi8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG5cbmxldCBxdWV1ZTogQmF0Y2hFdmVudFtdID0gW107XG5cbmxldCBpc1RyYW5zcG9ydFNldHVwOiBib29sZWFuID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFRyYW5zcG9ydFNlcnZpY2UoKTogdm9pZCB7XG4gIGlmICghaXNUcmFuc3BvcnRTZXR1cCkge1xuICAgIHByb2Nlc3NRdWV1ZShJTklUSUFMX1NFTkRfVElNRV9ERUxBWV9NUyk7XG4gICAgaXNUcmFuc3BvcnRTZXR1cCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBVdGlsaXplZCBieSB0ZXN0aW5nIHRvIGNsZWFuIHVwIG1lc3NhZ2UgcXVldWUgYW5kIHVuLWluaXRpYWxpemUgdHJhbnNwb3J0IHNlcnZpY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRyYW5zcG9ydFNlcnZpY2UoKTogdm9pZCB7XG4gIGlzVHJhbnNwb3J0U2V0dXAgPSBmYWxzZTtcbiAgcXVldWUgPSBbXTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKHRpbWVPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyBJZiB0aGVyZSBpcyBubyByZW1haW5pbmdUcmllcyBsZWZ0LCBzdG9wIHJldHJ5aW5nLlxuICAgIGlmIChyZW1haW5pbmdUcmllcyA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBldmVudHMgdG8gcHJvY2Vzcywgd2FpdCBmb3IgREVGQVVMVF9TRU5EX0lOVEVSVkFMX01TIGFuZCB0cnkgYWdhaW4uXG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzUXVldWUoREVGQVVMVF9TRU5EX0lOVEVSVkFMX01TKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaFF1ZXVlRXZlbnRzKCk7XG4gIH0sIHRpbWVPZmZzZXQpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaFF1ZXVlRXZlbnRzKCk6IHZvaWQge1xuICAvLyBFeHRyYWN0IGV2ZW50cyB1cCB0byB0aGUgbWF4aW11bSBjYXAgb2Ygc2luZ2xlIGxvZ1JlcXVlc3QgZnJvbSB0b3Agb2YgXCJvZmZpY2lhbCBxdWV1ZVwiLlxuICAvLyBUaGUgc3RhZ2VkIGV2ZW50cyB3aWxsIGJlIHVzZWQgZm9yIGN1cnJlbnQgbG9nUmVxdWVzdCBhdHRlbXB0LCByZW1haW5pbmcgZXZlbnRzIHdpbGwgYmUga2VwdFxuICAvLyBmb3IgbmV4dCBhdHRlbXB0LlxuICBjb25zdCBzdGFnZWQgPSBxdWV1ZS5zcGxpY2UoMCwgTUFYX0VWRU5UX0NPVU5UX1BFUl9SRVFVRVNUKTtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgLy8gV2Ugd2lsbCBwYXNzIHRoZSBKU09OIHNlcmlhbGl6ZWQgZXZlbnQgdG8gdGhlIGJhY2tlbmQuXG4gIGNvbnN0IGxvZ19ldmVudDogTG9nW10gPSBzdGFnZWQubWFwKGV2dCA9PiAoe1xuICAgIHNvdXJjZV9leHRlbnNpb25fanNvbl9wcm90bzM6IGV2dC5tZXNzYWdlLFxuICAgIGV2ZW50X3RpbWVfbXM6IFN0cmluZyhldnQuZXZlbnRUaW1lKVxuICB9KSk7XG5cbiAgY29uc3QgZGF0YTogVHJhbnNwb3J0QmF0Y2hMb2dGb3JtYXQgPSB7XG4gICAgcmVxdWVzdF90aW1lX21zOiBTdHJpbmcoRGF0ZS5ub3coKSksXG4gICAgY2xpZW50X2luZm86IHtcbiAgICAgIGNsaWVudF90eXBlOiAxLCAvLyAxIGlzIEpTXG4gICAgICBqc19jbGllbnRfaW5mbzoge31cbiAgICB9LFxuICAgIGxvZ19zb3VyY2U6IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmxvZ1NvdXJjZSxcbiAgICBsb2dfZXZlbnRcbiAgfTtcbiAgLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cblxuICBzZW5kRXZlbnRzVG9GbChkYXRhLCBzdGFnZWQpLmNhdGNoKCgpID0+IHtcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCBmYWlscyBmb3Igc29tZSByZWFzb24sIGFkZCB0aGUgZXZlbnRzIHRoYXQgd2VyZSBhdHRlbXB0ZWRcbiAgICAvLyBiYWNrIHRvIHRoZSBwcmltYXJ5IHF1ZXVlIHRvIHJldHJ5IGxhdGVyLlxuICAgIHF1ZXVlID0gWy4uLnN0YWdlZCwgLi4ucXVldWVdO1xuICAgIHJlbWFpbmluZ1RyaWVzLS07XG4gICAgY29uc29sZUxvZ2dlci5pbmZvKGBUcmllcyBsZWZ0OiAke3JlbWFpbmluZ1RyaWVzfS5gKTtcbiAgICBwcm9jZXNzUXVldWUoREVGQVVMVF9TRU5EX0lOVEVSVkFMX01TKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRFdmVudHNUb0ZsKFxuICBkYXRhOiBUcmFuc3BvcnRCYXRjaExvZ0Zvcm1hdCxcbiAgc3RhZ2VkOiBCYXRjaEV2ZW50W11cbik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gcG9zdFRvRmxFbmRwb2ludChkYXRhKVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBjb25zb2xlTG9nZ2VyLmluZm8oJ0NhbGwgdG8gRmlyZWJhc2UgYmFja2VuZCBmYWlsZWQuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAvLyBGaW5kIHRoZSBuZXh0IGNhbGwgd2FpdCB0aW1lIGZyb20gdGhlIHJlc3BvbnNlLlxuICAgICAgY29uc3QgdHJhbnNwb3J0V2FpdCA9IE51bWJlcihyZXMubmV4dFJlcXVlc3RXYWl0TWlsbGlzKTtcbiAgICAgIGxldCByZXF1ZXN0T2Zmc2V0ID0gREVGQVVMVF9TRU5EX0lOVEVSVkFMX01TO1xuICAgICAgaWYgKCFpc05hTih0cmFuc3BvcnRXYWl0KSkge1xuICAgICAgICByZXF1ZXN0T2Zmc2V0ID0gTWF0aC5tYXgodHJhbnNwb3J0V2FpdCwgcmVxdWVzdE9mZnNldCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERlbGV0ZSByZXF1ZXN0IGlmIHJlc3BvbnNlIGluY2x1ZGUgUkVTUE9OU0VfQUNUSU9OX1VOS05PV04gb3IgREVMRVRFX1JFUVVFU1QgYWN0aW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlLCByZXRyeSByZXF1ZXN0IHVzaW5nIG5vcm1hbCBzY2hlZHVsaW5nIGlmIHJlc3BvbnNlIGluY2x1ZGUgUkVUUllfUkVRVUVTVF9MQVRFUi5cbiAgICAgIGNvbnN0IGxvZ1Jlc3BvbnNlRGV0YWlsczogTG9nUmVzcG9uc2VEZXRhaWxzW10gPSByZXMubG9nUmVzcG9uc2VEZXRhaWxzO1xuICAgICAgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGxvZ1Jlc3BvbnNlRGV0YWlscykgJiZcbiAgICAgICAgbG9nUmVzcG9uc2VEZXRhaWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgbG9nUmVzcG9uc2VEZXRhaWxzWzBdLnJlc3BvbnNlQWN0aW9uID09PSAnUkVUUllfUkVRVUVTVF9MQVRFUidcbiAgICAgICkge1xuICAgICAgICBxdWV1ZSA9IFsuLi5zdGFnZWQsIC4uLnF1ZXVlXTtcbiAgICAgICAgY29uc29sZUxvZ2dlci5pbmZvKGBSZXRyeSB0cmFuc3BvcnQgcmVxdWVzdCBsYXRlci5gKTtcbiAgICAgIH1cblxuICAgICAgcmVtYWluaW5nVHJpZXMgPSBERUZBVUxUX1JFTUFJTklOR19UUklFUztcbiAgICAgIC8vIFNjaGVkdWxlIHRoZSBuZXh0IHByb2Nlc3MuXG4gICAgICBwcm9jZXNzUXVldWUocmVxdWVzdE9mZnNldCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvc3RUb0ZsRW5kcG9pbnQoZGF0YTogVHJhbnNwb3J0QmF0Y2hMb2dGb3JtYXQpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gIGNvbnN0IGZsVHJhbnNwb3J0RnVsbFVybCA9XG4gICAgU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkuZ2V0RmxUcmFuc3BvcnRGdWxsVXJsKCk7XG4gIHJldHVybiBmZXRjaChmbFRyYW5zcG9ydEZ1bGxVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVG9RdWV1ZShldnQ6IEJhdGNoRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFldnQuZXZlbnRUaW1lIHx8ICFldnQubWVzc2FnZSkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5JTlZBTElEX0NDX0xPRyk7XG4gIH1cbiAgLy8gQWRkIHRoZSBuZXcgZXZlbnQgdG8gdGhlIHF1ZXVlLlxuICBxdWV1ZSA9IFsuLi5xdWV1ZSwgZXZ0XTtcbn1cblxuLyoqIExvZyBoYW5kbGVyIGZvciBjYyBzZXJ2aWNlIHRvIHNlbmQgdGhlIHBlcmZvcm1hbmNlIGxvZ3MgdG8gdGhlIHNlcnZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3BvcnRIYW5kbGVyKFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBzZXJpYWxpemVyOiAoLi4uYXJnczogYW55W10pID0+IHN0cmluZ1xuKTogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZCB7XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBzZXJpYWxpemVyKC4uLmFyZ3MpO1xuICAgIGFkZFRvUXVldWUoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGV2ZW50VGltZTogRGF0ZS5ub3coKVxuICAgIH0pO1xuICB9O1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGdldElpZCB9IGZyb20gJy4vaWlkX3NlcnZpY2UnO1xuaW1wb3J0IHsgTmV0d29ya1JlcXVlc3QgfSBmcm9tICcuLi9yZXNvdXJjZXMvbmV0d29ya19yZXF1ZXN0JztcbmltcG9ydCB7IFRyYWNlIH0gZnJvbSAnLi4vcmVzb3VyY2VzL3RyYWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4vYXBpX3NlcnZpY2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXR0aW5nc19zZXJ2aWNlJztcbmltcG9ydCB7XG4gIGdldFNlcnZpY2VXb3JrZXJTdGF0dXMsXG4gIGdldFZpc2liaWxpdHlTdGF0ZSxcbiAgVmlzaWJpbGl0eVN0YXRlLFxuICBnZXRFZmZlY3RpdmVDb25uZWN0aW9uVHlwZVxufSBmcm9tICcuLi91dGlscy9hdHRyaWJ1dGVzX3V0aWxzJztcbmltcG9ydCB7XG4gIGlzUGVyZkluaXRpYWxpemVkLFxuICBnZXRJbml0aWFsaXphdGlvblByb21pc2Vcbn0gZnJvbSAnLi9pbml0aWFsaXphdGlvbl9zZXJ2aWNlJztcbmltcG9ydCB7IHRyYW5zcG9ydEhhbmRsZXIgfSBmcm9tICcuL3RyYW5zcG9ydF9zZXJ2aWNlJztcbmltcG9ydCB7IFNES19WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZpcmViYXNlQXBwIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRBcHBJZCB9IGZyb20gJy4uL3V0aWxzL2FwcF91dGlscyc7XG5cbmNvbnN0IGVudW0gUmVzb3VyY2VUeXBlIHtcbiAgTmV0d29ya1JlcXVlc3QsXG4gIFRyYWNlXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW50ZXJmYWNlIEFwcGxpY2F0aW9uSW5mbyB7XG4gIGdvb2dsZV9hcHBfaWQ6IHN0cmluZztcbiAgYXBwX2luc3RhbmNlX2lkPzogc3RyaW5nO1xuICB3ZWJfYXBwX2luZm86IFdlYkFwcEluZm87XG4gIGFwcGxpY2F0aW9uX3Byb2Nlc3Nfc3RhdGU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFdlYkFwcEluZm8ge1xuICBzZGtfdmVyc2lvbjogc3RyaW5nO1xuICBwYWdlX3VybDogc3RyaW5nO1xuICBzZXJ2aWNlX3dvcmtlcl9zdGF0dXM6IG51bWJlcjtcbiAgdmlzaWJpbGl0eV9zdGF0ZTogbnVtYmVyO1xuICBlZmZlY3RpdmVfY29ubmVjdGlvbl90eXBlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBQZXJmTmV0d29ya0xvZyB7XG4gIGFwcGxpY2F0aW9uX2luZm86IEFwcGxpY2F0aW9uSW5mbztcbiAgbmV0d29ya19yZXF1ZXN0X21ldHJpYzogTmV0d29ya1JlcXVlc3RNZXRyaWM7XG59XG5cbmludGVyZmFjZSBQZXJmVHJhY2VMb2cge1xuICBhcHBsaWNhdGlvbl9pbmZvOiBBcHBsaWNhdGlvbkluZm87XG4gIHRyYWNlX21ldHJpYzogVHJhY2VNZXRyaWM7XG59XG5cbmludGVyZmFjZSBOZXR3b3JrUmVxdWVzdE1ldHJpYyB7XG4gIHVybDogc3RyaW5nO1xuICBodHRwX21ldGhvZDogbnVtYmVyO1xuICBodHRwX3Jlc3BvbnNlX2NvZGU6IG51bWJlcjtcbiAgcmVzcG9uc2VfcGF5bG9hZF9ieXRlcz86IG51bWJlcjtcbiAgY2xpZW50X3N0YXJ0X3RpbWVfdXM/OiBudW1iZXI7XG4gIHRpbWVfdG9fcmVzcG9uc2VfaW5pdGlhdGVkX3VzPzogbnVtYmVyO1xuICB0aW1lX3RvX3Jlc3BvbnNlX2NvbXBsZXRlZF91cz86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFRyYWNlTWV0cmljIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpc19hdXRvOiBib29sZWFuO1xuICBjbGllbnRfc3RhcnRfdGltZV91czogbnVtYmVyO1xuICBkdXJhdGlvbl91czogbnVtYmVyO1xuICBjb3VudGVycz86IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XG4gIGN1c3RvbV9hdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuLyogZXNsaW50LWVuYmxlIGNhbWVsY2FzZSAqL1xuXG5sZXQgbG9nZ2VyOiAoXG4gIHJlc291cmNlOiBOZXR3b3JrUmVxdWVzdCB8IFRyYWNlLFxuICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZVxuKSA9PiB2b2lkIHwgdW5kZWZpbmVkO1xuLy8gVGhpcyBtZXRob2QgaXMgbm90IGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6YXRpb24uXG5mdW5jdGlvbiBzZW5kTG9nKFxuICByZXNvdXJjZTogTmV0d29ya1JlcXVlc3QgfCBUcmFjZSxcbiAgcmVzb3VyY2VUeXBlOiBSZXNvdXJjZVR5cGVcbik6IHZvaWQge1xuICBpZiAoIWxvZ2dlcikge1xuICAgIGxvZ2dlciA9IHRyYW5zcG9ydEhhbmRsZXIoc2VyaWFsaXplcik7XG4gIH1cbiAgbG9nZ2VyKHJlc291cmNlLCByZXNvdXJjZVR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVHJhY2UodHJhY2U6IFRyYWNlKTogdm9pZCB7XG4gIGNvbnN0IHNldHRpbmdzU2VydmljZSA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAvLyBEbyBub3QgbG9nIGlmIHRyYWNlIGlzIGF1dG8gZ2VuZXJhdGVkIGFuZCBpbnN0cnVtZW50YXRpb24gaXMgZGlzYWJsZWQuXG4gIGlmICghc2V0dGluZ3NTZXJ2aWNlLmluc3RydW1lbnRhdGlvbkVuYWJsZWQgJiYgdHJhY2UuaXNBdXRvKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIERvIG5vdCBsb2cgaWYgdHJhY2UgaXMgY3VzdG9tIGFuZCBkYXRhIGNvbGxlY3Rpb24gaXMgZGlzYWJsZWQuXG4gIGlmICghc2V0dGluZ3NTZXJ2aWNlLmRhdGFDb2xsZWN0aW9uRW5hYmxlZCAmJiAhdHJhY2UuaXNBdXRvKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIERvIG5vdCBsb2cgaWYgcmVxdWlyZWQgYXBpcyBhcmUgbm90IGF2YWlsYWJsZS5cbiAgaWYgKCFBcGkuZ2V0SW5zdGFuY2UoKS5yZXF1aXJlZEFwaXNBdmFpbGFibGUoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIE9ubHkgbG9nIHRoZSBwYWdlIGxvYWQgYXV0byB0cmFjZXMgaWYgcGFnZSBpcyB2aXNpYmxlLlxuICBpZiAodHJhY2UuaXNBdXRvICYmIGdldFZpc2liaWxpdHlTdGF0ZSgpICE9PSBWaXNpYmlsaXR5U3RhdGUuVklTSUJMRSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc1BlcmZJbml0aWFsaXplZCgpKSB7XG4gICAgc2VuZFRyYWNlTG9nKHRyYWNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBDdXN0b20gdHJhY2VzIGNhbiBiZSB1c2VkIGJlZm9yZSB0aGUgaW5pdGlhbGl6YXRpb24gYnV0IGxvZ2dpbmdcbiAgICAvLyBzaG91bGQgd2FpdCB1bnRpbCBhZnRlci5cbiAgICBnZXRJbml0aWFsaXphdGlvblByb21pc2UodHJhY2UucGVyZm9ybWFuY2VDb250cm9sbGVyKS50aGVuKFxuICAgICAgKCkgPT4gc2VuZFRyYWNlTG9nKHRyYWNlKSxcbiAgICAgICgpID0+IHNlbmRUcmFjZUxvZyh0cmFjZSlcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbmRUcmFjZUxvZyh0cmFjZTogVHJhY2UpOiB2b2lkIHtcbiAgaWYgKCFnZXRJaWQoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNldHRpbmdzU2VydmljZSA9IFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICBpZiAoXG4gICAgIXNldHRpbmdzU2VydmljZS5sb2dnaW5nRW5hYmxlZCB8fFxuICAgICFzZXR0aW5nc1NlcnZpY2UubG9nVHJhY2VBZnRlclNhbXBsaW5nXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNldFRpbWVvdXQoKCkgPT4gc2VuZExvZyh0cmFjZSwgUmVzb3VyY2VUeXBlLlRyYWNlKSwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dOZXR3b3JrUmVxdWVzdChuZXR3b3JrUmVxdWVzdDogTmV0d29ya1JlcXVlc3QpOiB2b2lkIHtcbiAgY29uc3Qgc2V0dGluZ3NTZXJ2aWNlID0gU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIC8vIERvIG5vdCBsb2cgbmV0d29yayByZXF1ZXN0cyBpZiBpbnN0cnVtZW50YXRpb24gaXMgZGlzYWJsZWQuXG4gIGlmICghc2V0dGluZ3NTZXJ2aWNlLmluc3RydW1lbnRhdGlvbkVuYWJsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEbyBub3QgbG9nIHRoZSBqcyBzZGsncyBjYWxsIHRvIHRyYW5zcG9ydCBzZXJ2aWNlIGRvbWFpbiB0byBhdm9pZCB1bm5lY2Vzc2FyeSBjeWNsZS5cbiAgLy8gTmVlZCB0byBibGFja2xpc3QgYm90aCBvbGQgYW5kIG5ldyBlbmRwb2ludHMgdG8gYXZvaWQgbWlncmF0aW9uIGdhcC5cbiAgY29uc3QgbmV0d29ya1JlcXVlc3RVcmwgPSBuZXR3b3JrUmVxdWVzdC51cmw7XG5cbiAgLy8gQmxhY2tsaXN0IG9sZCBsb2cgZW5kcG9pbnQgYW5kIG5ldyB0cmFuc3BvcnQgZW5kcG9pbnQuXG4gIC8vIEJlY2F1c2UgUGVyZm9ybWFuY2UgU0RLIGRvZXNuJ3QgaW5zdHJ1bWVudCByZXF1ZXN0cyBzZW50IGZyb20gU0RLIGl0c2VsZi5cbiAgY29uc3QgbG9nRW5kcG9pbnRVcmwgPSBzZXR0aW5nc1NlcnZpY2UubG9nRW5kUG9pbnRVcmwuc3BsaXQoJz8nKVswXTtcbiAgY29uc3QgZmxFbmRwb2ludFVybCA9IHNldHRpbmdzU2VydmljZS5mbFRyYW5zcG9ydEVuZHBvaW50VXJsLnNwbGl0KCc/JylbMF07XG4gIGlmIChcbiAgICBuZXR3b3JrUmVxdWVzdFVybCA9PT0gbG9nRW5kcG9pbnRVcmwgfHxcbiAgICBuZXR3b3JrUmVxdWVzdFVybCA9PT0gZmxFbmRwb2ludFVybFxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoXG4gICAgIXNldHRpbmdzU2VydmljZS5sb2dnaW5nRW5hYmxlZCB8fFxuICAgICFzZXR0aW5nc1NlcnZpY2UubG9nTmV0d29ya0FmdGVyU2FtcGxpbmdcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2V0VGltZW91dCgoKSA9PiBzZW5kTG9nKG5ldHdvcmtSZXF1ZXN0LCBSZXNvdXJjZVR5cGUuTmV0d29ya1JlcXVlc3QpLCAwKTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplcihcbiAgcmVzb3VyY2U6IE5ldHdvcmtSZXF1ZXN0IHwgVHJhY2UsXG4gIHJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlXG4pOiBzdHJpbmcge1xuICBpZiAocmVzb3VyY2VUeXBlID09PSBSZXNvdXJjZVR5cGUuTmV0d29ya1JlcXVlc3QpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplTmV0d29ya1JlcXVlc3QocmVzb3VyY2UgYXMgTmV0d29ya1JlcXVlc3QpO1xuICB9XG4gIHJldHVybiBzZXJpYWxpemVUcmFjZShyZXNvdXJjZSBhcyBUcmFjZSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZU5ldHdvcmtSZXF1ZXN0KG5ldHdvcmtSZXF1ZXN0OiBOZXR3b3JrUmVxdWVzdCk6IHN0cmluZyB7XG4gIGNvbnN0IG5ldHdvcmtSZXF1ZXN0TWV0cmljOiBOZXR3b3JrUmVxdWVzdE1ldHJpYyA9IHtcbiAgICB1cmw6IG5ldHdvcmtSZXF1ZXN0LnVybCxcbiAgICBodHRwX21ldGhvZDogbmV0d29ya1JlcXVlc3QuaHR0cE1ldGhvZCB8fCAwLFxuICAgIGh0dHBfcmVzcG9uc2VfY29kZTogMjAwLFxuICAgIHJlc3BvbnNlX3BheWxvYWRfYnl0ZXM6IG5ldHdvcmtSZXF1ZXN0LnJlc3BvbnNlUGF5bG9hZEJ5dGVzLFxuICAgIGNsaWVudF9zdGFydF90aW1lX3VzOiBuZXR3b3JrUmVxdWVzdC5zdGFydFRpbWVVcyxcbiAgICB0aW1lX3RvX3Jlc3BvbnNlX2luaXRpYXRlZF91czogbmV0d29ya1JlcXVlc3QudGltZVRvUmVzcG9uc2VJbml0aWF0ZWRVcyxcbiAgICB0aW1lX3RvX3Jlc3BvbnNlX2NvbXBsZXRlZF91czogbmV0d29ya1JlcXVlc3QudGltZVRvUmVzcG9uc2VDb21wbGV0ZWRVc1xuICB9O1xuICBjb25zdCBwZXJmTWV0cmljOiBQZXJmTmV0d29ya0xvZyA9IHtcbiAgICBhcHBsaWNhdGlvbl9pbmZvOiBnZXRBcHBsaWNhdGlvbkluZm8oXG4gICAgICBuZXR3b3JrUmVxdWVzdC5wZXJmb3JtYW5jZUNvbnRyb2xsZXIuYXBwXG4gICAgKSxcbiAgICBuZXR3b3JrX3JlcXVlc3RfbWV0cmljOiBuZXR3b3JrUmVxdWVzdE1ldHJpY1xuICB9O1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGVyZk1ldHJpYyk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVRyYWNlKHRyYWNlOiBUcmFjZSk6IHN0cmluZyB7XG4gIGNvbnN0IHRyYWNlTWV0cmljOiBUcmFjZU1ldHJpYyA9IHtcbiAgICBuYW1lOiB0cmFjZS5uYW1lLFxuICAgIGlzX2F1dG86IHRyYWNlLmlzQXV0byxcbiAgICBjbGllbnRfc3RhcnRfdGltZV91czogdHJhY2Uuc3RhcnRUaW1lVXMsXG4gICAgZHVyYXRpb25fdXM6IHRyYWNlLmR1cmF0aW9uVXNcbiAgfTtcblxuICBpZiAoT2JqZWN0LmtleXModHJhY2UuY291bnRlcnMpLmxlbmd0aCAhPT0gMCkge1xuICAgIHRyYWNlTWV0cmljLmNvdW50ZXJzID0gdHJhY2UuY291bnRlcnM7XG4gIH1cbiAgY29uc3QgY3VzdG9tQXR0cmlidXRlcyA9IHRyYWNlLmdldEF0dHJpYnV0ZXMoKTtcbiAgaWYgKE9iamVjdC5rZXlzKGN1c3RvbUF0dHJpYnV0ZXMpLmxlbmd0aCAhPT0gMCkge1xuICAgIHRyYWNlTWV0cmljLmN1c3RvbV9hdHRyaWJ1dGVzID0gY3VzdG9tQXR0cmlidXRlcztcbiAgfVxuXG4gIGNvbnN0IHBlcmZNZXRyaWM6IFBlcmZUcmFjZUxvZyA9IHtcbiAgICBhcHBsaWNhdGlvbl9pbmZvOiBnZXRBcHBsaWNhdGlvbkluZm8odHJhY2UucGVyZm9ybWFuY2VDb250cm9sbGVyLmFwcCksXG4gICAgdHJhY2VfbWV0cmljOiB0cmFjZU1ldHJpY1xuICB9O1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGVyZk1ldHJpYyk7XG59XG5cbmZ1bmN0aW9uIGdldEFwcGxpY2F0aW9uSW5mbyhmaXJlYmFzZUFwcDogRmlyZWJhc2VBcHApOiBBcHBsaWNhdGlvbkluZm8ge1xuICByZXR1cm4ge1xuICAgIGdvb2dsZV9hcHBfaWQ6IGdldEFwcElkKGZpcmViYXNlQXBwKSxcbiAgICBhcHBfaW5zdGFuY2VfaWQ6IGdldElpZCgpLFxuICAgIHdlYl9hcHBfaW5mbzoge1xuICAgICAgc2RrX3ZlcnNpb246IFNES19WRVJTSU9OLFxuICAgICAgcGFnZV91cmw6IEFwaS5nZXRJbnN0YW5jZSgpLmdldFVybCgpLFxuICAgICAgc2VydmljZV93b3JrZXJfc3RhdHVzOiBnZXRTZXJ2aWNlV29ya2VyU3RhdHVzKCksXG4gICAgICB2aXNpYmlsaXR5X3N0YXRlOiBnZXRWaXNpYmlsaXR5U3RhdGUoKSxcbiAgICAgIGVmZmVjdGl2ZV9jb25uZWN0aW9uX3R5cGU6IGdldEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlKClcbiAgICB9LFxuICAgIGFwcGxpY2F0aW9uX3Byb2Nlc3Nfc3RhdGU6IDBcbiAgfTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBGSVJTVF9QQUlOVF9DT1VOVEVSX05BTUUsXG4gIEZJUlNUX0NPTlRFTlRGVUxfUEFJTlRfQ09VTlRFUl9OQU1FLFxuICBGSVJTVF9JTlBVVF9ERUxBWV9DT1VOVEVSX05BTUUsXG4gIE9PQl9UUkFDRV9QQUdFX0xPQURfUFJFRklYXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV9sb2dnZXInO1xuXG5jb25zdCBNQVhfTUVUUklDX05BTUVfTEVOR1RIID0gMTAwO1xuY29uc3QgUkVTRVJWRURfQVVUT19QUkVGSVggPSAnXyc7XG5jb25zdCBvb2JNZXRyaWNzID0gW1xuICBGSVJTVF9QQUlOVF9DT1VOVEVSX05BTUUsXG4gIEZJUlNUX0NPTlRFTlRGVUxfUEFJTlRfQ09VTlRFUl9OQU1FLFxuICBGSVJTVF9JTlBVVF9ERUxBWV9DT1VOVEVSX05BTUVcbl07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBtZXRyaWMgaXMgY3VzdG9tIGFuZCBkb2VzIG5vdCBzdGFydCB3aXRoIHJlc2VydmVkIHByZWZpeCwgb3IgaWZcbiAqIHRoZSBtZXRyaWMgaXMgb25lIG9mIG91dCBvZiB0aGUgYm94IHBhZ2UgbG9hZCB0cmFjZSBtZXRyaWNzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZE1ldHJpY05hbWUobmFtZTogc3RyaW5nLCB0cmFjZU5hbWU/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKG5hbWUubGVuZ3RoID09PSAwIHx8IG5hbWUubGVuZ3RoID4gTUFYX01FVFJJQ19OQU1FX0xFTkdUSCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgICh0cmFjZU5hbWUgJiZcbiAgICAgIHRyYWNlTmFtZS5zdGFydHNXaXRoKE9PQl9UUkFDRV9QQUdFX0xPQURfUFJFRklYKSAmJlxuICAgICAgb29iTWV0cmljcy5pbmRleE9mKG5hbWUpID4gLTEpIHx8XG4gICAgIW5hbWUuc3RhcnRzV2l0aChSRVNFUlZFRF9BVVRPX1BSRUZJWClcbiAgKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgcHJvdmlkZWQgdmFsdWUgdG8gYW4gaW50ZWdlciB2YWx1ZSB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZXRyaWMuXG4gKiBAcGFyYW0gcHJvdmlkZWRWYWx1ZSBQcm92aWRlZCBudW1iZXIgdmFsdWUgb2YgdGhlIG1ldHJpYyB0aGF0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqIEByZXR1cm5zIENvbnZlcnRlZCBpbnRlZ2VyIG51bWJlciB0byBiZSBzZXQgZm9yIHRoZSBtZXRyaWMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TWV0cmljVmFsdWVUb0ludGVnZXIocHJvdmlkZWRWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgdmFsdWVBc0ludGVnZXI6IG51bWJlciA9IE1hdGguZmxvb3IocHJvdmlkZWRWYWx1ZSk7XG4gIGlmICh2YWx1ZUFzSW50ZWdlciA8IHByb3ZpZGVkVmFsdWUpIHtcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8oXG4gICAgICBgTWV0cmljIHZhbHVlIHNob3VsZCBiZSBhbiBJbnRlZ2VyLCBzZXR0aW5nIHRoZSB2YWx1ZSBhcyA6ICR7dmFsdWVBc0ludGVnZXJ9LmBcbiAgICApO1xuICB9XG4gIHJldHVybiB2YWx1ZUFzSW50ZWdlcjtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBUUkFDRV9TVEFSVF9NQVJLX1BSRUZJWCxcbiAgVFJBQ0VfU1RPUF9NQVJLX1BSRUZJWCxcbiAgVFJBQ0VfTUVBU1VSRV9QUkVGSVgsXG4gIE9PQl9UUkFDRV9QQUdFX0xPQURfUFJFRklYLFxuICBGSVJTVF9QQUlOVF9DT1VOVEVSX05BTUUsXG4gIEZJUlNUX0NPTlRFTlRGVUxfUEFJTlRfQ09VTlRFUl9OQU1FLFxuICBGSVJTVF9JTlBVVF9ERUxBWV9DT1VOVEVSX05BTUVcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaV9zZXJ2aWNlJztcbmltcG9ydCB7IGxvZ1RyYWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGVyZl9sb2dnZXInO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzJztcbmltcG9ydCB7XG4gIGlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lLFxuICBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlVmFsdWVcbn0gZnJvbSAnLi4vdXRpbHMvYXR0cmlidXRlc191dGlscyc7XG5pbXBvcnQge1xuICBpc1ZhbGlkTWV0cmljTmFtZSxcbiAgY29udmVydE1ldHJpY1ZhbHVlVG9JbnRlZ2VyXG59IGZyb20gJy4uL3V0aWxzL21ldHJpY191dGlscyc7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZVRyYWNlIH0gZnJvbSAnLi4vcHVibGljX3R5cGVzJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3BlcmYnO1xuXG5jb25zdCBlbnVtIFRyYWNlU3RhdGUge1xuICBVTklOSVRJQUxJWkVEID0gMSxcbiAgUlVOTklORyxcbiAgVEVSTUlOQVRFRFxufVxuXG5leHBvcnQgY2xhc3MgVHJhY2UgaW1wbGVtZW50cyBQZXJmb3JtYW5jZVRyYWNlIHtcbiAgcHJpdmF0ZSBzdGF0ZTogVHJhY2VTdGF0ZSA9IFRyYWNlU3RhdGUuVU5JTklUSUFMSVpFRDtcbiAgc3RhcnRUaW1lVXMhOiBudW1iZXI7XG4gIGR1cmF0aW9uVXMhOiBudW1iZXI7XG4gIHByaXZhdGUgY3VzdG9tQXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBjb3VudGVyczogeyBbY291bnRlck5hbWU6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIHByaXZhdGUgYXBpID0gQXBpLmdldEluc3RhbmNlKCk7XG4gIHByaXZhdGUgcmFuZG9tSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcbiAgcHJpdmF0ZSB0cmFjZVN0YXJ0TWFyayE6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFjZVN0b3BNYXJrITogc3RyaW5nO1xuICBwcml2YXRlIHRyYWNlTWVhc3VyZSE6IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIHBlcmZvcm1hbmNlQ29udHJvbGxlciBUaGUgcGVyZm9ybWFuY2UgY29udHJvbGxlciBydW5uaW5nLlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHJhY2UuXG4gICAqIEBwYXJhbSBpc0F1dG8gSWYgdGhlIHRyYWNlIGlzIGF1dG8taW5zdHJ1bWVudGVkLlxuICAgKiBAcGFyYW0gdHJhY2VNZWFzdXJlTmFtZSBUaGUgbmFtZSBvZiB0aGUgbWVhc3VyZSBtYXJrZXIgaW4gdXNlciB0aW1pbmcgc3BlY2lmaWNhdGlvbi4gVGhpcyBmaWVsZFxuICAgKiBpcyBvbmx5IHNldCB3aGVuIHRoZSB0cmFjZSBpcyBidWlsdCBmb3IgbG9nZ2luZyB3aGVuIHRoZSB1c2VyIGRpcmVjdGx5IHVzZXMgdGhlIHVzZXIgdGltaW5nXG4gICAqIGFwaSAocGVyZm9ybWFuY2UubWFyayBhbmQgcGVyZm9ybWFuY2UubWVhc3VyZSkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgaXNBdXRvID0gZmFsc2UsXG4gICAgdHJhY2VNZWFzdXJlTmFtZT86IHN0cmluZ1xuICApIHtcbiAgICBpZiAoIXRoaXMuaXNBdXRvKSB7XG4gICAgICB0aGlzLnRyYWNlU3RhcnRNYXJrID0gYCR7VFJBQ0VfU1RBUlRfTUFSS19QUkVGSVh9LSR7dGhpcy5yYW5kb21JZH0tJHt0aGlzLm5hbWV9YDtcbiAgICAgIHRoaXMudHJhY2VTdG9wTWFyayA9IGAke1RSQUNFX1NUT1BfTUFSS19QUkVGSVh9LSR7dGhpcy5yYW5kb21JZH0tJHt0aGlzLm5hbWV9YDtcbiAgICAgIHRoaXMudHJhY2VNZWFzdXJlID1cbiAgICAgICAgdHJhY2VNZWFzdXJlTmFtZSB8fFxuICAgICAgICBgJHtUUkFDRV9NRUFTVVJFX1BSRUZJWH0tJHt0aGlzLnJhbmRvbUlkfS0ke3RoaXMubmFtZX1gO1xuXG4gICAgICBpZiAodHJhY2VNZWFzdXJlTmFtZSkge1xuICAgICAgICAvLyBGb3IgdGhlIGNhc2Ugb2YgZGlyZWN0IHVzZXIgdGltaW5nIHRyYWNlcywgbm8gc3RhcnQgc3RvcCB3aWxsIGhhcHBlbi4gVGhlIG1lYXN1cmUgb2JqZWN0XG4gICAgICAgIC8vIGlzIGFscmVhZHkgYXZhaWxhYmxlLlxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRyYWNlTWV0cmljcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSB0cmFjZS4gVGhlIG1lYXN1cmVtZW50IG9mIHRoZSBkdXJhdGlvbiBzdGFydHMgYXQgdGhpcyBwb2ludC5cbiAgICovXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBUcmFjZVN0YXRlLlVOSU5JVElBTElaRUQpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5UUkFDRV9TVEFSVEVEX0JFRk9SRSwge1xuICAgICAgICB0cmFjZU5hbWU6IHRoaXMubmFtZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuYXBpLm1hcmsodGhpcy50cmFjZVN0YXJ0TWFyayk7XG4gICAgdGhpcy5zdGF0ZSA9IFRyYWNlU3RhdGUuUlVOTklORztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0aGUgdHJhY2UuIFRoZSBtZWFzdXJlbWVudCBvZiB0aGUgZHVyYXRpb24gb2YgdGhlIHRyYWNlIHN0b3BzIGF0IHRoaXMgcG9pbnQgYW5kIHRyYWNlXG4gICAqIGlzIGxvZ2dlZC5cbiAgICovXG4gIHN0b3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IFRyYWNlU3RhdGUuUlVOTklORykge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLlRSQUNFX1NUT1BQRURfQkVGT1JFLCB7XG4gICAgICAgIHRyYWNlTmFtZTogdGhpcy5uYW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IFRyYWNlU3RhdGUuVEVSTUlOQVRFRDtcbiAgICB0aGlzLmFwaS5tYXJrKHRoaXMudHJhY2VTdG9wTWFyayk7XG4gICAgdGhpcy5hcGkubWVhc3VyZShcbiAgICAgIHRoaXMudHJhY2VNZWFzdXJlLFxuICAgICAgdGhpcy50cmFjZVN0YXJ0TWFyayxcbiAgICAgIHRoaXMudHJhY2VTdG9wTWFya1xuICAgICk7XG4gICAgdGhpcy5jYWxjdWxhdGVUcmFjZU1ldHJpY3MoKTtcbiAgICBsb2dUcmFjZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvcmRzIGEgdHJhY2Ugd2l0aCBwcmVkZXRlcm1pbmVkIHZhbHVlcy4gSWYgdGhpcyBtZXRob2QgaXMgdXNlZCBhIHRyYWNlIGlzIGNyZWF0ZWQgYW5kIGxvZ2dlZFxuICAgKiBkaXJlY3RseS4gTm8gbmVlZCB0byB1c2Ugc3RhcnQgYW5kIHN0b3AgbWV0aG9kcy5cbiAgICogQHBhcmFtIHN0YXJ0VGltZSBUcmFjZSBzdGFydCB0aW1lIHNpbmNlIGVwb2NoIGluIG1pbGxpc2VjXG4gICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgZHVyYWN0aW9uIG9mIHRoZSB0cmFjZSBpbiBtaWxsaXNlY1xuICAgKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3Qgd2hpY2ggY2FuIG9wdGlvbmFsbHkgaG9sZCBtYXBzIG9mIGN1c3RvbSBtZXRyaWNzIGFuZCBjdXN0b20gYXR0cmlidXRlc1xuICAgKi9cbiAgcmVjb3JkKFxuICAgIHN0YXJ0VGltZTogbnVtYmVyLFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG1ldHJpY3M/OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9O1xuICAgICAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgfVxuICApOiB2b2lkIHtcbiAgICBpZiAoc3RhcnRUaW1lIDw9IDApIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT05QT1NJVElWRV9UUkFDRV9TVEFSVF9USU1FLCB7XG4gICAgICAgIHRyYWNlTmFtZTogdGhpcy5uYW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT05QT1NJVElWRV9UUkFDRV9EVVJBVElPTiwge1xuICAgICAgICB0cmFjZU5hbWU6IHRoaXMubmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kdXJhdGlvblVzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAqIDEwMDApO1xuICAgIHRoaXMuc3RhcnRUaW1lVXMgPSBNYXRoLmZsb29yKHN0YXJ0VGltZSAqIDEwMDApO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuYXR0cmlidXRlcykge1xuICAgICAgdGhpcy5jdXN0b21BdHRyaWJ1dGVzID0geyAuLi5vcHRpb25zLmF0dHJpYnV0ZXMgfTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5tZXRyaWNzKSB7XG4gICAgICBmb3IgKGNvbnN0IG1ldHJpY05hbWUgb2YgT2JqZWN0LmtleXMob3B0aW9ucy5tZXRyaWNzKSkge1xuICAgICAgICBpZiAoIWlzTmFOKE51bWJlcihvcHRpb25zLm1ldHJpY3NbbWV0cmljTmFtZV0pKSkge1xuICAgICAgICAgIHRoaXMuY291bnRlcnNbbWV0cmljTmFtZV0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTnVtYmVyKG9wdGlvbnMubWV0cmljc1ttZXRyaWNOYW1lXSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxvZ1RyYWNlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudHMgYSBjdXN0b20gbWV0cmljIGJ5IGEgY2VydGFpbiBudW1iZXIgb3IgMSBpZiBudW1iZXIgbm90IHNwZWNpZmllZC4gV2lsbCBjcmVhdGUgYSBuZXdcbiAgICogY3VzdG9tIG1ldHJpYyBpZiBvbmUgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBkb2VzIG5vdCBleGlzdC4gVGhlIHZhbHVlIHdpbGwgYmUgZmxvb3JlZCBkb3duIHRvIGFuXG4gICAqIGludGVnZXIuXG4gICAqIEBwYXJhbSBjb3VudGVyIE5hbWUgb2YgdGhlIGN1c3RvbSBtZXRyaWNcbiAgICogQHBhcmFtIG51bUFzSW50ZWdlciBJbmNyZW1lbnQgYnkgdmFsdWVcbiAgICovXG4gIGluY3JlbWVudE1ldHJpYyhjb3VudGVyOiBzdHJpbmcsIG51bUFzSW50ZWdlciA9IDEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb3VudGVyc1tjb3VudGVyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnB1dE1ldHJpYyhjb3VudGVyLCBudW1Bc0ludGVnZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1dE1ldHJpYyhjb3VudGVyLCB0aGlzLmNvdW50ZXJzW2NvdW50ZXJdICsgbnVtQXNJbnRlZ2VyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGN1c3RvbSBtZXRyaWMgdG8gYSBzcGVjaWZpZWQgdmFsdWUuIFdpbGwgY3JlYXRlIGEgbmV3IGN1c3RvbSBtZXRyaWMgaWYgb25lIHdpdGggdGhlXG4gICAqIGdpdmVuIG5hbWUgZG9lcyBub3QgZXhpc3QuIFRoZSB2YWx1ZSB3aWxsIGJlIGZsb29yZWQgZG93biB0byBhbiBpbnRlZ2VyLlxuICAgKiBAcGFyYW0gY291bnRlciBOYW1lIG9mIHRoZSBjdXN0b20gbWV0cmljXG4gICAqIEBwYXJhbSBudW1Bc0ludGVnZXIgU2V0IGN1c3RvbSBtZXRyaWMgdG8gdGhpcyB2YWx1ZVxuICAgKi9cbiAgcHV0TWV0cmljKGNvdW50ZXI6IHN0cmluZywgbnVtQXNJbnRlZ2VyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZE1ldHJpY05hbWUoY291bnRlciwgdGhpcy5uYW1lKSkge1xuICAgICAgdGhpcy5jb3VudGVyc1tjb3VudGVyXSA9IGNvbnZlcnRNZXRyaWNWYWx1ZVRvSW50ZWdlcihudW1Bc0ludGVnZXIgPz8gMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5JTlZBTElEX0NVU1RPTV9NRVRSSUNfTkFNRSwge1xuICAgICAgICBjdXN0b21NZXRyaWNOYW1lOiBjb3VudGVyXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbSBtZXRyaWMgYnkgdGhhdCBuYW1lLiBJZiBhIGN1c3RvbSBtZXRyaWMgd2l0aCB0aGF0IG5hbWUgZG9lc1xuICAgKiBub3QgZXhpc3Qgd2lsbCByZXR1cm4gemVyby5cbiAgICogQHBhcmFtIGNvdW50ZXJcbiAgICovXG4gIGdldE1ldHJpYyhjb3VudGVyOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvdW50ZXJzW2NvdW50ZXJdIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGN1c3RvbSBhdHRyaWJ1dGUgb2YgYSB0cmFjZSB0byBhIGNlcnRhaW4gdmFsdWUuXG4gICAqIEBwYXJhbSBhdHRyXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgcHV0QXR0cmlidXRlKGF0dHI6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGlzVmFsaWROYW1lID0gaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZU5hbWUoYXR0cik7XG4gICAgY29uc3QgaXNWYWxpZFZhbHVlID0gaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZVZhbHVlKHZhbHVlKTtcbiAgICBpZiAoaXNWYWxpZE5hbWUgJiYgaXNWYWxpZFZhbHVlKSB7XG4gICAgICB0aGlzLmN1c3RvbUF0dHJpYnV0ZXNbYXR0cl0gPSB2YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVGhyb3cgYXBwcm9wcmlhdGUgZXJyb3Igd2hlbiB0aGUgYXR0cmlidXRlIG5hbWUgb3IgdmFsdWUgaXMgaW52YWxpZC5cbiAgICBpZiAoIWlzVmFsaWROYW1lKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuSU5WQUxJRF9BVFRSSUJVVEVfTkFNRSwge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiBhdHRyXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkVmFsdWUpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5JTlZBTElEX0FUVFJJQlVURV9WQUxVRSwge1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGEgY3VzdG9tIGF0dHJpYnV0ZSBvZiBhIHRyYWNlIGlzIHNldCB0by5cbiAgICogQHBhcmFtIGF0dHJcbiAgICovXG4gIGdldEF0dHJpYnV0ZShhdHRyOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUF0dHJpYnV0ZXNbYXR0cl07XG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGUoYXR0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VzdG9tQXR0cmlidXRlc1thdHRyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmN1c3RvbUF0dHJpYnV0ZXNbYXR0cl07XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVzKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7IC4uLnRoaXMuY3VzdG9tQXR0cmlidXRlcyB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdGFydFRpbWUoc3RhcnRUaW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0VGltZVVzID0gc3RhcnRUaW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kdXJhdGlvblVzID0gZHVyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBhbmQgYXNzaWducyB0aGUgZHVyYXRpb24gYW5kIHN0YXJ0IHRpbWUgb2YgdGhlIHRyYWNlIHVzaW5nIHRoZSBtZWFzdXJlIHBlcmZvcm1hbmNlXG4gICAqIGVudHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVUcmFjZU1ldHJpY3MoKTogdm9pZCB7XG4gICAgY29uc3QgcGVyZk1lYXN1cmVFbnRyaWVzID0gdGhpcy5hcGkuZ2V0RW50cmllc0J5TmFtZSh0aGlzLnRyYWNlTWVhc3VyZSk7XG4gICAgY29uc3QgcGVyZk1lYXN1cmVFbnRyeSA9IHBlcmZNZWFzdXJlRW50cmllcyAmJiBwZXJmTWVhc3VyZUVudHJpZXNbMF07XG4gICAgaWYgKHBlcmZNZWFzdXJlRW50cnkpIHtcbiAgICAgIHRoaXMuZHVyYXRpb25VcyA9IE1hdGguZmxvb3IocGVyZk1lYXN1cmVFbnRyeS5kdXJhdGlvbiAqIDEwMDApO1xuICAgICAgdGhpcy5zdGFydFRpbWVVcyA9IE1hdGguZmxvb3IoXG4gICAgICAgIChwZXJmTWVhc3VyZUVudHJ5LnN0YXJ0VGltZSArIHRoaXMuYXBpLmdldFRpbWVPcmlnaW4oKSkgKiAxMDAwXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbmF2aWdhdGlvblRpbWluZ3MgQSBzaW5nbGUgZWxlbWVudCBhcnJheSB3aGljaCBjb250YWlucyB0aGUgbmF2aWdhdGlvblRJbWluZyBvYmplY3Qgb2ZcbiAgICogdGhlIHBhZ2UgbG9hZFxuICAgKiBAcGFyYW0gcGFpbnRUaW1pbmdzIEEgYXJyYXkgd2hpY2ggY29udGFpbnMgcGFpbnRUaW1pbmcgb2JqZWN0IG9mIHRoZSBwYWdlIGxvYWRcbiAgICogQHBhcmFtIGZpcnN0SW5wdXREZWxheSBGaXJzdCBpbnB1dCBkZWxheSBpbiBtaWxsaXNlY1xuICAgKi9cbiAgc3RhdGljIGNyZWF0ZU9vYlRyYWNlKFxuICAgIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgIG5hdmlnYXRpb25UaW1pbmdzOiBQZXJmb3JtYW5jZU5hdmlnYXRpb25UaW1pbmdbXSxcbiAgICBwYWludFRpbWluZ3M6IFBlcmZvcm1hbmNlRW50cnlbXSxcbiAgICBmaXJzdElucHV0RGVsYXk/OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgcm91dGUgPSBBcGkuZ2V0SW5zdGFuY2UoKS5nZXRVcmwoKTtcbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRyYWNlID0gbmV3IFRyYWNlKFxuICAgICAgcGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgICAgT09CX1RSQUNFX1BBR0VfTE9BRF9QUkVGSVggKyByb3V0ZSxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIGNvbnN0IHRpbWVPcmlnaW5VcyA9IE1hdGguZmxvb3IoQXBpLmdldEluc3RhbmNlKCkuZ2V0VGltZU9yaWdpbigpICogMTAwMCk7XG4gICAgdHJhY2Uuc2V0U3RhcnRUaW1lKHRpbWVPcmlnaW5Vcyk7XG5cbiAgICAvLyBuYXZpZ2F0aW9uVGltaW5ncyBpbmNsdWRlcyBvbmx5IG9uZSBlbGVtZW50LlxuICAgIGlmIChuYXZpZ2F0aW9uVGltaW5ncyAmJiBuYXZpZ2F0aW9uVGltaW5nc1swXSkge1xuICAgICAgdHJhY2Uuc2V0RHVyYXRpb24oTWF0aC5mbG9vcihuYXZpZ2F0aW9uVGltaW5nc1swXS5kdXJhdGlvbiAqIDEwMDApKTtcbiAgICAgIHRyYWNlLnB1dE1ldHJpYyhcbiAgICAgICAgJ2RvbUludGVyYWN0aXZlJyxcbiAgICAgICAgTWF0aC5mbG9vcihuYXZpZ2F0aW9uVGltaW5nc1swXS5kb21JbnRlcmFjdGl2ZSAqIDEwMDApXG4gICAgICApO1xuICAgICAgdHJhY2UucHV0TWV0cmljKFxuICAgICAgICAnZG9tQ29udGVudExvYWRlZEV2ZW50RW5kJyxcbiAgICAgICAgTWF0aC5mbG9vcihuYXZpZ2F0aW9uVGltaW5nc1swXS5kb21Db250ZW50TG9hZGVkRXZlbnRFbmQgKiAxMDAwKVxuICAgICAgKTtcbiAgICAgIHRyYWNlLnB1dE1ldHJpYyhcbiAgICAgICAgJ2xvYWRFdmVudEVuZCcsXG4gICAgICAgIE1hdGguZmxvb3IobmF2aWdhdGlvblRpbWluZ3NbMF0ubG9hZEV2ZW50RW5kICogMTAwMClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgRklSU1RfUEFJTlQgPSAnZmlyc3QtcGFpbnQnO1xuICAgIGNvbnN0IEZJUlNUX0NPTlRFTlRGVUxfUEFJTlQgPSAnZmlyc3QtY29udGVudGZ1bC1wYWludCc7XG4gICAgaWYgKHBhaW50VGltaW5ncykge1xuICAgICAgY29uc3QgZmlyc3RQYWludCA9IHBhaW50VGltaW5ncy5maW5kKFxuICAgICAgICBwYWludE9iamVjdCA9PiBwYWludE9iamVjdC5uYW1lID09PSBGSVJTVF9QQUlOVFxuICAgICAgKTtcbiAgICAgIGlmIChmaXJzdFBhaW50ICYmIGZpcnN0UGFpbnQuc3RhcnRUaW1lKSB7XG4gICAgICAgIHRyYWNlLnB1dE1ldHJpYyhcbiAgICAgICAgICBGSVJTVF9QQUlOVF9DT1VOVEVSX05BTUUsXG4gICAgICAgICAgTWF0aC5mbG9vcihmaXJzdFBhaW50LnN0YXJ0VGltZSAqIDEwMDApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBmaXJzdENvbnRlbnRmdWxQYWludCA9IHBhaW50VGltaW5ncy5maW5kKFxuICAgICAgICBwYWludE9iamVjdCA9PiBwYWludE9iamVjdC5uYW1lID09PSBGSVJTVF9DT05URU5URlVMX1BBSU5UXG4gICAgICApO1xuICAgICAgaWYgKGZpcnN0Q29udGVudGZ1bFBhaW50ICYmIGZpcnN0Q29udGVudGZ1bFBhaW50LnN0YXJ0VGltZSkge1xuICAgICAgICB0cmFjZS5wdXRNZXRyaWMoXG4gICAgICAgICAgRklSU1RfQ09OVEVOVEZVTF9QQUlOVF9DT1VOVEVSX05BTUUsXG4gICAgICAgICAgTWF0aC5mbG9vcihmaXJzdENvbnRlbnRmdWxQYWludC5zdGFydFRpbWUgKiAxMDAwKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RJbnB1dERlbGF5KSB7XG4gICAgICAgIHRyYWNlLnB1dE1ldHJpYyhcbiAgICAgICAgICBGSVJTVF9JTlBVVF9ERUxBWV9DT1VOVEVSX05BTUUsXG4gICAgICAgICAgTWF0aC5mbG9vcihmaXJzdElucHV0RGVsYXkgKiAxMDAwKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvZ1RyYWNlKHRyYWNlKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVVc2VyVGltaW5nVHJhY2UoXG4gICAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgbWVhc3VyZU5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCB0cmFjZSA9IG5ldyBUcmFjZShcbiAgICAgIHBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICAgIG1lYXN1cmVOYW1lLFxuICAgICAgZmFsc2UsXG4gICAgICBtZWFzdXJlTmFtZVxuICAgICk7XG4gICAgbG9nVHJhY2UodHJhY2UpO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpX3NlcnZpY2UnO1xuaW1wb3J0IHsgbG9nTmV0d29ya1JlcXVlc3QgfSBmcm9tICcuLi9zZXJ2aWNlcy9wZXJmX2xvZ2dlcic7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9wZXJmJztcblxuLy8gVGhlIG9yZGVyIG9mIHZhbHVlcyBvZiB0aGlzIGVudW0gc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuZXhwb3J0IGNvbnN0IGVudW0gSHR0cE1ldGhvZCB7XG4gIEhUVFBfTUVUSE9EX1VOS05PV04gPSAwLFxuICBHRVQgPSAxLFxuICBQVVQgPSAyLFxuICBQT1NUID0gMyxcbiAgREVMRVRFID0gNCxcbiAgSEVBRCA9IDUsXG4gIFBBVENIID0gNixcbiAgT1BUSU9OUyA9IDcsXG4gIFRSQUNFID0gOCxcbiAgQ09OTkVDVCA9IDlcbn1cblxuLy8gRHVyYXRpb25zIGFyZSBpbiBtaWNyb3NlY29uZHMuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtSZXF1ZXN0IHtcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXI7XG4gIHVybDogc3RyaW5nO1xuICBodHRwTWV0aG9kPzogSHR0cE1ldGhvZDtcbiAgcmVxdWVzdFBheWxvYWRCeXRlcz86IG51bWJlcjtcbiAgcmVzcG9uc2VQYXlsb2FkQnl0ZXM/OiBudW1iZXI7XG4gIGh0dHBSZXNwb25zZUNvZGU/OiBudW1iZXI7XG4gIHJlc3BvbnNlQ29udGVudFR5cGU/OiBzdHJpbmc7XG4gIHN0YXJ0VGltZVVzPzogbnVtYmVyO1xuICB0aW1lVG9SZXF1ZXN0Q29tcGxldGVkVXM/OiBudW1iZXI7XG4gIHRpbWVUb1Jlc3BvbnNlSW5pdGlhdGVkVXM/OiBudW1iZXI7XG4gIHRpbWVUb1Jlc3BvbnNlQ29tcGxldGVkVXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXR3b3JrUmVxdWVzdEVudHJ5KFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgZW50cnk6IFBlcmZvcm1hbmNlRW50cnlcbik6IHZvaWQge1xuICBjb25zdCBwZXJmb3JtYW5jZUVudHJ5ID0gZW50cnkgYXMgUGVyZm9ybWFuY2VSZXNvdXJjZVRpbWluZztcbiAgaWYgKCFwZXJmb3JtYW5jZUVudHJ5IHx8IHBlcmZvcm1hbmNlRW50cnkucmVzcG9uc2VTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRpbWVPcmlnaW4gPSBBcGkuZ2V0SW5zdGFuY2UoKS5nZXRUaW1lT3JpZ2luKCk7XG4gIGNvbnN0IHN0YXJ0VGltZVVzID0gTWF0aC5mbG9vcihcbiAgICAocGVyZm9ybWFuY2VFbnRyeS5zdGFydFRpbWUgKyB0aW1lT3JpZ2luKSAqIDEwMDBcbiAgKTtcbiAgY29uc3QgdGltZVRvUmVzcG9uc2VJbml0aWF0ZWRVcyA9IHBlcmZvcm1hbmNlRW50cnkucmVzcG9uc2VTdGFydFxuICAgID8gTWF0aC5mbG9vcihcbiAgICAgICAgKHBlcmZvcm1hbmNlRW50cnkucmVzcG9uc2VTdGFydCAtIHBlcmZvcm1hbmNlRW50cnkuc3RhcnRUaW1lKSAqIDEwMDBcbiAgICAgIClcbiAgICA6IHVuZGVmaW5lZDtcbiAgY29uc3QgdGltZVRvUmVzcG9uc2VDb21wbGV0ZWRVcyA9IE1hdGguZmxvb3IoXG4gICAgKHBlcmZvcm1hbmNlRW50cnkucmVzcG9uc2VFbmQgLSBwZXJmb3JtYW5jZUVudHJ5LnN0YXJ0VGltZSkgKiAxMDAwXG4gICk7XG4gIC8vIFJlbW92ZSB0aGUgcXVlcnkgcGFyYW1zIGZyb20gbG9nZ2VkIG5ldHdvcmsgcmVxdWVzdCB1cmwuXG4gIGNvbnN0IHVybCA9IHBlcmZvcm1hbmNlRW50cnkubmFtZSAmJiBwZXJmb3JtYW5jZUVudHJ5Lm5hbWUuc3BsaXQoJz8nKVswXTtcbiAgY29uc3QgbmV0d29ya1JlcXVlc3Q6IE5ldHdvcmtSZXF1ZXN0ID0ge1xuICAgIHBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICB1cmwsXG4gICAgcmVzcG9uc2VQYXlsb2FkQnl0ZXM6IHBlcmZvcm1hbmNlRW50cnkudHJhbnNmZXJTaXplLFxuICAgIHN0YXJ0VGltZVVzLFxuICAgIHRpbWVUb1Jlc3BvbnNlSW5pdGlhdGVkVXMsXG4gICAgdGltZVRvUmVzcG9uc2VDb21wbGV0ZWRVc1xuICB9O1xuXG4gIGxvZ05ldHdvcmtSZXF1ZXN0KG5ldHdvcmtSZXF1ZXN0KTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuL2FwaV9zZXJ2aWNlJztcbmltcG9ydCB7IFRyYWNlIH0gZnJvbSAnLi4vcmVzb3VyY2VzL3RyYWNlJztcbmltcG9ydCB7IGNyZWF0ZU5ldHdvcmtSZXF1ZXN0RW50cnkgfSBmcm9tICcuLi9yZXNvdXJjZXMvbmV0d29ya19yZXF1ZXN0JztcbmltcG9ydCB7IFRSQUNFX01FQVNVUkVfUFJFRklYIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldElpZCB9IGZyb20gJy4vaWlkX3NlcnZpY2UnO1xuaW1wb3J0IHsgUGVyZm9ybWFuY2VDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvcGVyZic7XG5cbmNvbnN0IEZJRF9XQUlUX1RJTUVfTVMgPSA1MDAwO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBPb2JSZXNvdXJjZXMoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyXG4pOiB2b2lkIHtcbiAgLy8gRG8gbm90IGluaXRpYWxpemUgdW5sZXNzIGlpZCBpcyBhdmFpbGFibGUuXG4gIGlmICghZ2V0SWlkKCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gVGhlIGxvYWQgZXZlbnQgbWlnaHQgbm90IGhhdmUgZmlyZWQgeWV0LCBhbmQgdGhhdCBtZWFucyBwZXJmb3JtYW5jZSBuYXZpZ2F0aW9uIHRpbWluZ1xuICAvLyBvYmplY3QgaGFzIGEgZHVyYXRpb24gb2YgMC4gVGhlIHNldHVwIHNob3VsZCBydW4gYWZ0ZXIgYWxsIGN1cnJlbnQgdGFza3MgaW4ganMgcXVldWUuXG4gIHNldFRpbWVvdXQoKCkgPT4gc2V0dXBPb2JUcmFjZXMocGVyZm9ybWFuY2VDb250cm9sbGVyKSwgMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4gc2V0dXBOZXR3b3JrUmVxdWVzdHMocGVyZm9ybWFuY2VDb250cm9sbGVyKSwgMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4gc2V0dXBVc2VyVGltaW5nVHJhY2VzKHBlcmZvcm1hbmNlQ29udHJvbGxlciksIDApO1xufVxuXG5mdW5jdGlvbiBzZXR1cE5ldHdvcmtSZXF1ZXN0cyhcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXJcbik6IHZvaWQge1xuICBjb25zdCBhcGkgPSBBcGkuZ2V0SW5zdGFuY2UoKTtcbiAgY29uc3QgcmVzb3VyY2VzID0gYXBpLmdldEVudHJpZXNCeVR5cGUoJ3Jlc291cmNlJyk7XG4gIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgcmVzb3VyY2VzKSB7XG4gICAgY3JlYXRlTmV0d29ya1JlcXVlc3RFbnRyeShwZXJmb3JtYW5jZUNvbnRyb2xsZXIsIHJlc291cmNlKTtcbiAgfVxuICBhcGkuc2V0dXBPYnNlcnZlcigncmVzb3VyY2UnLCBlbnRyeSA9PlxuICAgIGNyZWF0ZU5ldHdvcmtSZXF1ZXN0RW50cnkocGVyZm9ybWFuY2VDb250cm9sbGVyLCBlbnRyeSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBPb2JUcmFjZXMocGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIpOiB2b2lkIHtcbiAgY29uc3QgYXBpID0gQXBpLmdldEluc3RhbmNlKCk7XG4gIGNvbnN0IG5hdmlnYXRpb25UaW1pbmdzID0gYXBpLmdldEVudHJpZXNCeVR5cGUoXG4gICAgJ25hdmlnYXRpb24nXG4gICkgYXMgUGVyZm9ybWFuY2VOYXZpZ2F0aW9uVGltaW5nW107XG4gIGNvbnN0IHBhaW50VGltaW5ncyA9IGFwaS5nZXRFbnRyaWVzQnlUeXBlKCdwYWludCcpO1xuICAvLyBJZiBGaXJzdCBJbnB1dCBEZXNseSBwb2x5ZmlsbCBpcyBhZGRlZCB0byB0aGUgcGFnZSwgcmVwb3J0IHRoZSBmaWQgdmFsdWUuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL2ZpcnN0LWlucHV0LWRlbGF5XG4gIGlmIChhcGkub25GaXJzdElucHV0RGVsYXkpIHtcbiAgICAvLyBJZiB0aGUgZmlkIGNhbGwgYmFjayBpcyBub3QgY2FsbGVkIGZvciBjZXJ0YWluIHRpbWUsIGNvbnRpbnVlIHdpdGhvdXQgaXQuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBsZXQgdGltZW91dElkOiBhbnkgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIFRyYWNlLmNyZWF0ZU9vYlRyYWNlKFxuICAgICAgICBwZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgICAgIG5hdmlnYXRpb25UaW1pbmdzLFxuICAgICAgICBwYWludFRpbWluZ3NcbiAgICAgICk7XG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfSwgRklEX1dBSVRfVElNRV9NUyk7XG4gICAgYXBpLm9uRmlyc3RJbnB1dERlbGF5KChmaWQ6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgVHJhY2UuY3JlYXRlT29iVHJhY2UoXG4gICAgICAgICAgcGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgICAgICAgIG5hdmlnYXRpb25UaW1pbmdzLFxuICAgICAgICAgIHBhaW50VGltaW5ncyxcbiAgICAgICAgICBmaWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBUcmFjZS5jcmVhdGVPb2JUcmFjZShcbiAgICAgIHBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICAgIG5hdmlnYXRpb25UaW1pbmdzLFxuICAgICAgcGFpbnRUaW1pbmdzXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cFVzZXJUaW1pbmdUcmFjZXMoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyXG4pOiB2b2lkIHtcbiAgY29uc3QgYXBpID0gQXBpLmdldEluc3RhbmNlKCk7XG4gIC8vIFJ1biB0aHJvdWdoIHRoZSBtZWFzdXJlIHBlcmZvcm1hbmNlIGVudHJpZXMgY29sbGVjdGVkIHVwIHRvIHRoaXMgcG9pbnQuXG4gIGNvbnN0IG1lYXN1cmVzID0gYXBpLmdldEVudHJpZXNCeVR5cGUoJ21lYXN1cmUnKTtcbiAgZm9yIChjb25zdCBtZWFzdXJlIG9mIG1lYXN1cmVzKSB7XG4gICAgY3JlYXRlVXNlclRpbWluZ1RyYWNlKHBlcmZvcm1hbmNlQ29udHJvbGxlciwgbWVhc3VyZSk7XG4gIH1cbiAgLy8gU2V0dXAgYW4gb2JzZXJ2ZXIgdG8gY2FwdHVyZSB0aGUgbWVhc3VyZXMgZnJvbSB0aGlzIHBvaW50IG9uLlxuICBhcGkuc2V0dXBPYnNlcnZlcignbWVhc3VyZScsIGVudHJ5ID0+XG4gICAgY3JlYXRlVXNlclRpbWluZ1RyYWNlKHBlcmZvcm1hbmNlQ29udHJvbGxlciwgZW50cnkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJUaW1pbmdUcmFjZShcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gIG1lYXN1cmU6IFBlcmZvcm1hbmNlRW50cnlcbik6IHZvaWQge1xuICBjb25zdCBtZWFzdXJlTmFtZSA9IG1lYXN1cmUubmFtZTtcbiAgLy8gRG8gbm90IGNyZWF0ZSBhIHRyYWNlLCBpZiB0aGUgdXNlciB0aW1pbmcgbWFya3MgYW5kIG1lYXN1cmVzIGFyZSBjcmVhdGVkIGJ5IHRoZSBzZGsgaXRzZWxmLlxuICBpZiAoXG4gICAgbWVhc3VyZU5hbWUuc3Vic3RyaW5nKDAsIFRSQUNFX01FQVNVUkVfUFJFRklYLmxlbmd0aCkgPT09XG4gICAgVFJBQ0VfTUVBU1VSRV9QUkVGSVhcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFRyYWNlLmNyZWF0ZVVzZXJUaW1pbmdUcmFjZShwZXJmb3JtYW5jZUNvbnRyb2xsZXIsIG1lYXN1cmVOYW1lKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBzZXR1cE9vYlJlc291cmNlcyB9IGZyb20gJy4uL3NlcnZpY2VzL29vYl9yZXNvdXJjZXNfc2VydmljZSc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5nc19zZXJ2aWNlJztcbmltcG9ydCB7IGdldEluaXRpYWxpemF0aW9uUHJvbWlzZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luaXRpYWxpemF0aW9uX3NlcnZpY2UnO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpX3NlcnZpY2UnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHAgfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IF9GaXJlYmFzZUluc3RhbGxhdGlvbnNJbnRlcm5hbCB9IGZyb20gJ0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlU2V0dGluZ3MsIEZpcmViYXNlUGVyZm9ybWFuY2UgfSBmcm9tICcuLi9wdWJsaWNfdHlwZXMnO1xuaW1wb3J0IHsgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IHNldHVwVHJhbnNwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zcG9ydF9zZXJ2aWNlJztcbmltcG9ydCB7IGNvbnNvbGVMb2dnZXIgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX2xvZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIgaW1wbGVtZW50cyBGaXJlYmFzZVBlcmZvcm1hbmNlIHtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IGFwcDogRmlyZWJhc2VBcHAsXG4gICAgcmVhZG9ubHkgaW5zdGFsbGF0aW9uczogX0ZpcmViYXNlSW5zdGFsbGF0aW9uc0ludGVybmFsXG4gICkge31cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgKm11c3QqIGJlIGNhbGxlZCBpbnRlcm5hbGx5IGFzIHBhcnQgb2YgY3JlYXRpbmcgYVxuICAgKiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIgaW5zdGFuY2UuXG4gICAqXG4gICAqIEN1cnJlbnRseSBpdCdzIG5vdCBwb3NzaWJsZSB0byBwYXNzIHRoZSBzZXR0aW5ncyBvYmplY3QgdGhyb3VnaCB0aGVcbiAgICogY29uc3RydWN0b3IgdXNpbmcgQ29tcG9uZW50cywgc28gdGhpcyBtZXRob2QgZXhpc3RzIHRvIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBkZXNpcmVkIHNldHRpbmdzLCB0byBlbnN1cmUgbm90aGluZyBpcyBjb2xsZWN0ZWQgd2l0aG91dCB0aGUgdXNlcidzXG4gICAqIGNvbnNlbnQuXG4gICAqL1xuICBfaW5pdChzZXR0aW5ncz86IFBlcmZvcm1hbmNlU2V0dGluZ3MpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncz8uZGF0YUNvbGxlY3Rpb25FbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGF0YUNvbGxlY3Rpb25FbmFibGVkID0gc2V0dGluZ3MuZGF0YUNvbGxlY3Rpb25FbmFibGVkO1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3M/Lmluc3RydW1lbnRhdGlvbkVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnN0cnVtZW50YXRpb25FbmFibGVkID0gc2V0dGluZ3MuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZDtcbiAgICB9XG5cbiAgICBpZiAoQXBpLmdldEluc3RhbmNlKCkucmVxdWlyZWRBcGlzQXZhaWxhYmxlKCkpIHtcbiAgICAgIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKVxuICAgICAgICAudGhlbihpc0F2YWlsYWJsZSA9PiB7XG4gICAgICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBzZXR1cFRyYW5zcG9ydFNlcnZpY2UoKTtcbiAgICAgICAgICAgIGdldEluaXRpYWxpemF0aW9uUHJvbWlzZSh0aGlzKS50aGVuKFxuICAgICAgICAgICAgICAoKSA9PiBzZXR1cE9vYlJlc291cmNlcyh0aGlzKSxcbiAgICAgICAgICAgICAgKCkgPT4gc2V0dXBPb2JSZXNvdXJjZXModGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZUxvZ2dlci5pbmZvKGBFbnZpcm9ubWVudCBkb2Vzbid0IHN1cHBvcnQgSW5kZXhlZERCOiAke2Vycm9yfWApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZUxvZ2dlci5pbmZvKFxuICAgICAgICAnRmlyZWJhc2UgUGVyZm9ybWFuY2UgY2Fubm90IHN0YXJ0IGlmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgJyArXG4gICAgICAgICAgJ1wiRmV0Y2hcIiBhbmQgXCJQcm9taXNlXCIsIG9yIGNvb2tpZXMgYXJlIGRpc2FibGVkLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGluc3RydW1lbnRhdGlvbkVuYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCA9IHZhbDtcbiAgfVxuICBnZXQgaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZDtcbiAgfVxuXG4gIHNldCBkYXRhQ29sbGVjdGlvbkVuYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkuZGF0YUNvbGxlY3Rpb25FbmFibGVkID0gdmFsO1xuICB9XG4gIGdldCBkYXRhQ29sbGVjdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmRhdGFDb2xsZWN0aW9uRW5hYmxlZDtcbiAgfVxufVxuIiwgIi8qKlxuICogRmlyZWJhc2UgUGVyZm9ybWFuY2UgTW9uaXRvcmluZ1xuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIEZpcmViYXNlUGVyZm9ybWFuY2UsXG4gIFBlcmZvcm1hbmNlU2V0dGluZ3MsXG4gIFBlcmZvcm1hbmNlVHJhY2Vcbn0gZnJvbSAnLi9wdWJsaWNfdHlwZXMnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi91dGlscy9lcnJvcnMnO1xuaW1wb3J0IHsgc2V0dXBBcGkgfSBmcm9tICcuL3NlcnZpY2VzL2FwaV9zZXJ2aWNlJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvcGVyZic7XG5pbXBvcnQge1xuICBfcmVnaXN0ZXJDb21wb25lbnQsXG4gIF9nZXRQcm92aWRlcixcbiAgcmVnaXN0ZXJWZXJzaW9uLFxuICBGaXJlYmFzZUFwcCxcbiAgZ2V0QXBwXG59IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtcbiAgSW5zdGFuY2VGYWN0b3J5LFxuICBDb21wb25lbnRDb250YWluZXIsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50VHlwZVxufSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IG5hbWUsIHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgVHJhY2UgfSBmcm9tICcuL3Jlc291cmNlcy90cmFjZSc7XG5pbXBvcnQgJ0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zJztcbmltcG9ydCB7IGRlZXBFcXVhbCwgZ2V0TW9kdWxhckluc3RhbmNlIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG5jb25zdCBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuLyoqXG4gKiBSZXR1cm5zIGEge0BsaW5rIEZpcmViYXNlUGVyZm9ybWFuY2V9IGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gYXBwLlxuICogQHBhcmFtIGFwcCAtIFRoZSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gdG8gdXNlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyZm9ybWFuY2UoXG4gIGFwcDogRmlyZWJhc2VBcHAgPSBnZXRBcHAoKVxuKTogRmlyZWJhc2VQZXJmb3JtYW5jZSB7XG4gIGFwcCA9IGdldE1vZHVsYXJJbnN0YW5jZShhcHApO1xuICBjb25zdCBwcm92aWRlciA9IF9nZXRQcm92aWRlcihhcHAsICdwZXJmb3JtYW5jZScpO1xuICBjb25zdCBwZXJmSW5zdGFuY2UgPSBwcm92aWRlci5nZXRJbW1lZGlhdGUoKSBhcyBQZXJmb3JtYW5jZUNvbnRyb2xsZXI7XG4gIHJldHVybiBwZXJmSW5zdGFuY2U7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHtAbGluayBGaXJlYmFzZVBlcmZvcm1hbmNlfSBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIGFwcC4gQ2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UuXG4gKiBAcGFyYW0gYXBwIC0gVGhlIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSB0byB1c2UuXG4gKiBAcGFyYW0gc2V0dGluZ3MgLSBPcHRpb25hbCBzZXR0aW5ncyBmb3IgdGhlIHtAbGluayBGaXJlYmFzZVBlcmZvcm1hbmNlfSBpbnN0YW5jZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVQZXJmb3JtYW5jZShcbiAgYXBwOiBGaXJlYmFzZUFwcCxcbiAgc2V0dGluZ3M/OiBQZXJmb3JtYW5jZVNldHRpbmdzXG4pOiBGaXJlYmFzZVBlcmZvcm1hbmNlIHtcbiAgYXBwID0gZ2V0TW9kdWxhckluc3RhbmNlKGFwcCk7XG4gIGNvbnN0IHByb3ZpZGVyID0gX2dldFByb3ZpZGVyKGFwcCwgJ3BlcmZvcm1hbmNlJyk7XG5cbiAgLy8gdGhyb3cgaWYgYW4gaW5zdGFuY2Ugd2FzIGFscmVhZHkgY3JlYXRlZC5cbiAgLy8gSXQgY291bGQgaGFwcGVuIGlmIGluaXRpYWxpemVQZXJmb3JtYW5jZSgpIGlzIGNhbGxlZCBtb3JlIHRoYW4gb25jZSwgb3IgZ2V0UGVyZm9ybWFuY2UoKSBpcyBjYWxsZWQgZmlyc3QuXG4gIGlmIChwcm92aWRlci5pc0luaXRpYWxpemVkKCkpIHtcbiAgICBjb25zdCBleGlzdGluZ0luc3RhbmNlID0gcHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCk7XG4gICAgY29uc3QgaW5pdGlhbFNldHRpbmdzID0gcHJvdmlkZXIuZ2V0T3B0aW9ucygpIGFzIFBlcmZvcm1hbmNlU2V0dGluZ3M7XG4gICAgaWYgKGRlZXBFcXVhbChpbml0aWFsU2V0dGluZ3MsIHNldHRpbmdzID8/IHt9KSkge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nSW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwZXJmSW5zdGFuY2UgPSBwcm92aWRlci5pbml0aWFsaXplKHtcbiAgICBvcHRpb25zOiBzZXR0aW5nc1xuICB9KSBhcyBQZXJmb3JtYW5jZUNvbnRyb2xsZXI7XG4gIHJldHVybiBwZXJmSW5zdGFuY2U7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBgUGVyZm9ybWFuY2VUcmFjZWAgaW5zdGFuY2UuXG4gKiBAcGFyYW0gcGVyZm9ybWFuY2UgLSBUaGUge0BsaW5rIEZpcmViYXNlUGVyZm9ybWFuY2V9IGluc3RhbmNlIHRvIHVzZS5cbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRyYWNlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2UoXG4gIHBlcmZvcm1hbmNlOiBGaXJlYmFzZVBlcmZvcm1hbmNlLFxuICBuYW1lOiBzdHJpbmdcbik6IFBlcmZvcm1hbmNlVHJhY2Uge1xuICBwZXJmb3JtYW5jZSA9IGdldE1vZHVsYXJJbnN0YW5jZShwZXJmb3JtYW5jZSk7XG4gIHJldHVybiBuZXcgVHJhY2UocGVyZm9ybWFuY2UgYXMgUGVyZm9ybWFuY2VDb250cm9sbGVyLCBuYW1lKTtcbn1cblxuY29uc3QgZmFjdG9yeTogSW5zdGFuY2VGYWN0b3J5PCdwZXJmb3JtYW5jZSc+ID0gKFxuICBjb250YWluZXI6IENvbXBvbmVudENvbnRhaW5lcixcbiAgeyBvcHRpb25zOiBzZXR0aW5ncyB9OiB7IG9wdGlvbnM/OiBQZXJmb3JtYW5jZVNldHRpbmdzIH1cbikgPT4ge1xuICAvLyBEZXBlbmRlbmNpZXNcbiAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgY29uc3QgaW5zdGFsbGF0aW9ucyA9IGNvbnRhaW5lclxuICAgIC5nZXRQcm92aWRlcignaW5zdGFsbGF0aW9ucy1pbnRlcm5hbCcpXG4gICAgLmdldEltbWVkaWF0ZSgpO1xuXG4gIGlmIChhcHAubmFtZSAhPT0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLkZCX05PVF9ERUZBVUxUKTtcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9fV0lORE9XKTtcbiAgfVxuICBzZXR1cEFwaSh3aW5kb3cpO1xuICBjb25zdCBwZXJmSW5zdGFuY2UgPSBuZXcgUGVyZm9ybWFuY2VDb250cm9sbGVyKGFwcCwgaW5zdGFsbGF0aW9ucyk7XG4gIHBlcmZJbnN0YW5jZS5faW5pdChzZXR0aW5ncyk7XG5cbiAgcmV0dXJuIHBlcmZJbnN0YW5jZTtcbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyUGVyZm9ybWFuY2UoKTogdm9pZCB7XG4gIF9yZWdpc3RlckNvbXBvbmVudChcbiAgICBuZXcgQ29tcG9uZW50KCdwZXJmb3JtYW5jZScsIGZhY3RvcnksIENvbXBvbmVudFR5cGUuUFVCTElDKVxuICApO1xuICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbik7XG4gIC8vIEJVSUxEX1RBUkdFVCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZhbHVlcyBsaWtlIGVzbTUsIGVzbTIwMTcsIGNqczUsIGV0YyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXG4gIHJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnX19CVUlMRF9UQVJHRVRfXycpO1xufVxuXG5yZWdpc3RlclBlcmZvcm1hbmNlKCk7XG5cbmV4cG9ydCB7IEZpcmViYXNlUGVyZm9ybWFuY2UsIFBlcmZvcm1hbmNlU2V0dGluZ3MsIFBlcmZvcm1hbmNlVHJhY2UgfTtcbiIsICIvLyAhIHRoZSBmaWxlIGlzIGhlcmUgY2F1c2UgaSBubyBsb25nZXIgd2FubmEgaGF2ZSBteSBrZXlzIGV4cG9zZWQgdG8gdGhlIHB1YmxpYyBldmVuIGlmIGl0IGlzIGhhcm1sZXNzXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldFBlcmZvcm1hbmNlIH0gZnJvbSBcImZpcmViYXNlL3BlcmZvcm1hbmNlXCI7XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHNlcGVyYXRlcyB0aGUgZmlyZWJhc2UgY29uZmlnIGRhdGEgYXdheSBmcm9tIHRoZSBvdGhlciBqcyBmaWxlc1xyXG5leHBvcnQgZnVuY3Rpb24gZmlyZWJhc2VDb25maWcoKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLWZ1bmMtYXNzaWduLCBuby1leHRyYS1ib29sZWFuLWNhc3QsIG5vLWNvbnN0YW50LWNvbmRpdGlvblxyXG4gICAgY29uc3QgXzB4NWY1ODlhPV8weDVlNTg7KGZ1bmN0aW9uKF8weDJkM2U0YyxfMHg0NDliN2Qpe2NvbnN0IF8weDMzOWRkMD1fMHg1ZTU4LF8weDFmYjY4ND1fMHgyZDNlNGMoKTt3aGlsZSghIVtdKXt0cnl7Y29uc3QgXzB4MzQ3YjI0PS1wYXJzZUludChfMHgzMzlkZDAoMHgxZDgpKS8oMHgxOGRlKjB4MSsweDczNyotMHgxKy0weDExYTYpKigtcGFyc2VJbnQoXzB4MzM5ZGQwKDB4MWRkKSkvKC0weDFkNmYrLTB4MioweDU4MSstMHgxMyotMHgyMjEpKStwYXJzZUludChfMHgzMzlkZDAoMHgxZTYpKS8oLTB4MyoweDIxZCsweGIxMistMHg0YjgpK3BhcnNlSW50KF8weDMzOWRkMCgweDFkYykpLygweDRkZisweDEwNTUrMHgxNTMwKi0weDEpKihwYXJzZUludChfMHgzMzlkZDAoMHgxZTIpKS8oLTB4MSoweDFmMGQrLTB4MTFmMSstMHgzMTAzKi0weDEpKSstcGFyc2VJbnQoXzB4MzM5ZGQwKDB4MWRiKSkvKC0weDEqLTB4ZGU5KzB4MTNkMisweDEqLTB4MjFiNSkrcGFyc2VJbnQoXzB4MzM5ZGQwKDB4MWU4KSkvKC0weDFhNmIrMHgzKi0weDJhYSstMHgyNiotMHhlOCkqKC1wYXJzZUludChfMHgzMzlkZDAoMHgxZTQpKS8oLTB4NDA5KjB4MSsweDhlKi0weDI2KzB4MTkyNSkpKy1wYXJzZUludChfMHgzMzlkZDAoMHgxZDkpKS8oMHgxODJhKy0weGNjNistMHhiNWIpK3BhcnNlSW50KF8weDMzOWRkMCgweDFlYSkpLygtMHgyZSotMHhjNCsweGFiMistMHgyZGUwKTtpZihfMHgzNDdiMjQ9PT1fMHg0NDliN2QpYnJlYWs7ZWxzZSBfMHgxZmI2ODRbXCJwdXNoXCJdKF8weDFmYjY4NFtcInNoaWZ0XCJdKCkpO31jYXRjaChfMHg0YjY0OTEpe18weDFmYjY4NFtcInB1c2hcIl0oXzB4MWZiNjg0W1wic2hpZnRcIl0oKSk7fX19KF8weDE5NTcsMHgxNGIqMHg5NDcrMHg2ZmQqMHgzNWIrLTB4MTc2MGZmKSk7Y29uc3QgZmlyZWJhc2VDb25maWc9e1wiYXBpS2V5XCI6XzB4NWY1ODlhKDB4MWYzKStfMHg1ZjU4OWEoMHgxZTEpK18weDVmNTg5YSgweDFmMCkrXzB4NWY1ODlhKDB4MWYyKSxcImRhdGFiYXNlVVJMXCI6XzB4NWY1ODlhKDB4MWVmKStfMHg1ZjU4OWEoMHgxZTApK18weDVmNTg5YSgweDFkZSkrXzB4NWY1ODlhKDB4MWRmKStfMHg1ZjU4OWEoMHgxZjEpK18weDVmNTg5YSgweDFkNSkrXzB4NWY1ODlhKDB4MWU5KSxcInByb2plY3RJZFwiOl8weDVmNTg5YSgweDFlYykrXzB4NWY1ODlhKDB4MWUzKSxcInN0b3JhZ2VCdWNrZXRcIjpfMHg1ZjU4OWEoMHgxZWMpK18weDVmNTg5YSgweDFlNSkrXzB4NWY1ODlhKDB4MWViKSxcIm1lc3NhZ2luZ1NlbmRlcklkXCI6XzB4NWY1ODlhKDB4MWVkKStcIjQ0XCIsXCJhcHBJZFwiOl8weDVmNTg5YSgweDFlNykrXzB4NWY1ODlhKDB4MWQ3KStfMHg1ZjU4OWEoMHgxZWUpK18weDVmNTg5YSgweDFkNikrXCJkXCIsXCJtZWFzdXJlbWVudElkXCI6XzB4NWY1ODlhKDB4MWRhKStcIlBDXCJ9LGFwcD1pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtmdW5jdGlvbiBfMHg1ZTU4KF8weDFlN2M1ZCxfMHg0NjE4ODEpe2NvbnN0IF8weDI0MWRiMj1fMHgxOTU3KCk7cmV0dXJuIF8weDVlNTg9ZnVuY3Rpb24oXzB4OTg5NTliLF8weDQ5MzE3OCl7XzB4OTg5NTliPV8weDk4OTU5Yi0oMHhhMysweDcqLTB4MmIzKzB4MTQxNyk7bGV0IF8weDVjYWE5Nz1fMHgyNDFkYjJbXzB4OTg5NTliXTtyZXR1cm4gXzB4NWNhYTk3O30sXzB4NWU1OChfMHgxZTdjNWQsXzB4NDYxODgxKTt9ZnVuY3Rpb24gXzB4MTk1Nygpe2NvbnN0IF8weDI2MGM2Yz1bXCIxNzUwMTkya2paYVZnXCIsXCJpbmZvLmFwcHNwXCIsXCIxNDY2ODE3U1NSQkRIXCIsXCIxOjYxNTE1OTQxXCIsXCI0MmpHQ2R5cVwiLFwiYWJhc2UuYXBwXCIsXCI5NTA5OTAwRXZGWmp1XCIsXCJvdC5jb21cIixcImNhb3BvaW50cy1cIixcIjYxNTE1OTQxODdcIixcIjU5Nzg0NjlmOTJcIixcImh0dHBzOi8vY2FcIixcInBpM0N3aEtmMVRcIixcInBlLXdlc3QxLmZcIixcInE3bnRoUHljRVwiLFwiQUl6YVN5Qm5wRVwiLFwiaXJlYmFzZWRhdFwiLFwiYjkwYjVjOTgyOFwiLFwiODc0NDp3ZWI6M1wiLFwiMVpySlF4bVwiLFwiMTMwNzMzNzN2eWpaelFcIixcIkctMDgzODNEQzlcIixcIjI0MTY5NDRPeWNnYlRcIixcIjIwNTQwMTZzdHNaalBcIixcIjI5ODM2OTBSQWFtdm9cIixcImZvLWRlZmF1bHRcIixcIi1ydGRiLmV1cm9cIixcIm9wb2ludHMtaW5cIixcIi1ZbEtLdkh3RTlcIixcIjEwT1hlbE5TXCIsXCJpbmZvXCJdO18weDE5NTc9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjYwYzZjO307cmV0dXJuIF8weDE5NTcoKTt9Z2V0UGVyZm9ybWFuY2UoYXBwKTtcclxufSIsICJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHsgZmlyZWJhc2VDb25maWcgfSBmcm9tIFwiLi9jb25maWcuanNcIjtcclxuXHJcbmZpcmViYXNlQ29uZmlnKCk7XHJcblxyXG4vLyAhIHRoaXMgdmFsdWUgaXMgZ2xvYmFsIGFuZCB3aWxsIGJlIGFjY2Vzc2VkIGJ5IG90aGVyIGZ1bmN0aW9uc1xyXG52YXIgYWRkXzI1ID0gMjU7XHJcbi8qKlxyXG4gKiBkZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgYWRkXzI1IHZhcmlhYmxlXHJcbiAqIHRvZ2dsZXMgZGlzcGxheSBvZiB0aGUgYnV0dG9uXHJcbiAqL1xyXG5mdW5jdGlvbiBpc19obF9tYXRocygpIHtcclxuICB2YXIgYm9vbF9obF9tYXRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vbF9obF9tYXRoc1wiKTtcclxuICB2YXIgYWRkaW5nXzI1X3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV90ZXh0XCIpO1xyXG4gIHZhciB2YWx1ZSA9IGJvb2xfaGxfbWF0aHMudmFsdWU7XHJcbiAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgIGJvb2xfaGxfbWF0aHMudmFsdWUgPSAxO1xyXG4gICAgYWRkaW5nXzI1X3RleHQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgYWRkaW5nXzI1X3RleHQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMC4yc1wiO1xyXG4gICAgdmFsdWUgPSAxO1xyXG4gICAgYWRkXzI1ID0gMjU7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBib29sX2hsX21hdGhzLnZhbHVlID0gMDtcclxuICAgIGFkZGluZ18yNV90ZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIGFkZF8yNSA9IDA7XHJcbiAgICB2YWx1ZSA9IDA7XHJcbiAgfVxyXG4gIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xyXG59XHJcbmlzX2hsX21hdGhzKCk7XHJcblxyXG4vLyBcImxpc3RlbnNcIiBmb3IgYSBjbGljayBmcm9tIHRoZSBpc19obF9tYXRocyBmdW5jdGlvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2xfaGxfbWF0aHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGlzX2hsX21hdGhzKTtcclxuXHJcbi8qKlxyXG4gKiBkZXRlcm1pbmVzIHRoZSB2YWx1ZSBvZiB0aGUgbGN2cCB2YXJpYWJsZVxyXG4gKiB0b2dnbGVzIGRpc3BsYXkgb2YgdGhlIGJ1dHRvblxyXG4gKi9cclxuXHJcbnZhciBsY3ZwO1xyXG5mdW5jdGlvbiBpc19sY3ZwKCkge1xyXG4gIHZhciBsY3ZwX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsY3ZwXCIpO1xyXG4gIHZhciB2YWx1ZSA9IGxjdnBfaW5wdXQudmFsdWU7XHJcbiAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgIGxjdnAgPSB0cnVlO1xyXG4gICAgbGN2cF9pbnB1dC52YWx1ZSA9IDE7XHJcbiAgICB2YWx1ZSA9IDA7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YWx1ZSA9IDE7XHJcbiAgICBsY3ZwID0gZmFsc2U7XHJcbiAgICBsY3ZwX2lucHV0LnZhbHVlID0gMDtcclxuICB9XHJcbiAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgcmV0dXJuIGxjdnA7XHJcbn1cclxuXHJcbmlzX2xjdnAoKTtcclxuXHJcbi8vIFwibGlzdGVuc1wiIGZvciBhIGNsaWNrIGZyb20gdGhlIGlzX2xjdnAgZnVuY3Rpb25cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsY3ZwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpc19sY3ZwKTtcclxuXHJcbi8vIGhpZGVzIHRoZSBcIkFkZGluZyArMjVcIiB0ZXh0IGJlZm9yZSB0aGUgcGFnZSBsb2Fkc1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV9jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxudmFyIHRhcmdldF9udW07XHJcbnZhciBobF9udW07XHJcbnZhciBvbF9udW07XHJcblxyXG4vKipcclxuICogQWRqdXN0cyB0aGUgZ3JhZGVzIHRoYXQgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBpbiBvcmRpbmFyeSBsZXZlbCBhbmQgaGlnaGVyIGxldmVsIGZvciBjb3JyZWN0IG91dHB1dFxyXG4gKiBmb3IgZXhhbXBsZSBhIEg2IGFuZCBPMiBhcmUgYm90aCB3b3J0aCA0NiBwb2ludHNcclxuICogQHBhcmFtIHthcnJheX0gbGV0dGVyX2dyYWRlc1xyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gYWRqdXN0b3IobGV0dGVyX2dyYWRlcykge1xyXG4gIHZhciBDSEFOR0VBQkxFUyA9IFtcImg1XCIsIFwiaDZcIiwgXCJoN1wiLCBcIm8xXCIsIFwibzJcIiwgXCJvM1wiXTtcclxuICB2YXIgSExfU1VCUyA9IFtcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiLCBcImg3XCJdO1xyXG5cclxuICB2YXIgY291bnRlZF9obCA9IDA7XHJcbiAgdmFyIGNvdW50ZWRfb2wgPSAwO1xyXG5cclxuICB2YXIgZGljdF9jaGFuZ2VhYmxlcyA9IHtcclxuICAgIFwiaDVcIjogXCJvMVwiLFxyXG4gICAgXCJoNlwiOiBcIm8yXCIsXHJcbiAgICBcImg3XCI6IFwibzNcIixcclxuICAgIFwibzFcIjogXCJoNVwiLFxyXG4gICAgXCJvMlwiOiBcImg2XCIsXHJcbiAgICBcIm8zXCI6IFwiaDdcIixcclxuICB9O1xyXG5cclxuICB2YXIgaGxfaW5kZXhfY2hhbmdlYWJsZXMgPSBbXTtcclxuICB2YXIgb2xfaW5kZXhfY2hhbmdlYWJsZXMgPSBbXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZXR0ZXJfZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgY3VycmVudCA9IGxldHRlcl9ncmFkZXNbaV07XHJcbiAgICBpZiAoY3VycmVudCBpbiBkaWN0X2NoYW5nZWFibGVzKSB7XHJcbiAgICAgIGlmIChjdXJyZW50IGluIENIQU5HRUFCTEVTKSB7XHJcbiAgICAgICAgaGxfaW5kZXhfY2hhbmdlYWJsZXMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBvbF9pbmRleF9jaGFuZ2VhYmxlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEhMX1NVQlMuaW5jbHVkZXMoY3VycmVudCkpIHtcclxuICAgICAgY291bnRlZF9obCArPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvdW50ZWRfb2wgKz0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBtaXNzX21hdGNoaW5nX2NvdW50cyA9IGNvdW50ZWRfaGwgIT0gaGxfbnVtICYmIGNvdW50ZWRfb2wgIT0gb2xfbnVtO1xyXG5cclxuICBpZiAobWlzc19tYXRjaGluZ19jb3VudHMpIHtcclxuICAgIHZhciBuZWVkZWRfaGwgPSBobF9udW0gLSBjb3VudGVkX2hsO1xyXG4gICAgdmFyIG5lZWRlZF9vbCA9IG9sX251bSAtIGNvdW50ZWRfb2w7XHJcblxyXG4gICAgaWYgKG5lZWRlZF9obCA8IDApIHtcclxuICAgICAgbmVlZGVkX2hsID0gMDtcclxuICAgIH1cclxuICAgIGlmIChuZWVkZWRfb2wgPCAwKSB7XHJcbiAgICAgIG5lZWRlZF9vbCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNoYXJnZXNfbmVlZGVkID0gTWF0aC5tYXgobmVlZGVkX2hsLCBuZWVkZWRfb2wpO1xyXG4gICAgdmFyIG9nX2dyYWRlO1xyXG4gICAgdmFyIGNoYW5nZWRfZ3JhZGU7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2hhcmdlc19uZWVkZWQ7IGkrKykge1xyXG5cclxuICAgICAgdmFyIGluZGV4ID0gb2xfaW5kZXhfY2hhbmdlYWJsZXNbaV07XHJcbiAgICAgIG9nX2dyYWRlID0gbGV0dGVyX2dyYWRlc1tpbmRleF07XHJcblxyXG4gICAgICBjaGFuZ2VkX2dyYWRlID0gZGljdF9jaGFuZ2VhYmxlc1tvZ19ncmFkZV07XHJcbiAgICAgIGxldHRlcl9ncmFkZXNbaW5kZXhdID0gY2hhbmdlZF9ncmFkZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsY3ZwKSB7XHJcbiAgICB2YXIgbGN2cF9tb2R1bGVzID0ge1xyXG4gICAgICA2NjogXCJEaXN0aW5jdGlvblwiLFxyXG4gICAgICA0NjogXCJNZXJpdFwiLFxyXG4gICAgICAyODogXCJQYXNzXCJcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGxjdnBfZ3JhZGVzID0gW1wiaDRcIiwgXCJoNlwiLCBcIm8yXCIsIFwibzRcIl07XHJcblxyXG4gICAgdmFyIGxjdnBfcG9pbnRzID0ge1xyXG4gICAgICBcImg0XCI6IDY2LFxyXG4gICAgICBcImg2XCI6IDQ2LFxyXG4gICAgICBcIm8yXCI6IDQ2LFxyXG4gICAgICBcIm80XCI6IDI4XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjb2xsZWN0ZWRfbGN2cF9wb2ludHMgPSBbXTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBsZXR0ZXJfZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBsZXR0ZXJfZ3JhZGVzW2ldO1xyXG4gICAgICBpZiAobGN2cF9ncmFkZXMuaW5jbHVkZXMoY3VycmVudCkpIHtcclxuICAgICAgICBjb2xsZWN0ZWRfbGN2cF9wb2ludHMucHVzaChsY3ZwX3BvaW50c1tjdXJyZW50XSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgY29sbGVjdGVkX2xjdnBfcG9pbnRzLnB1c2goOTk5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIG1pbl9sY3ZwX3BvaW50ID0gTWF0aC5taW4oLi4uY29sbGVjdGVkX2xjdnBfcG9pbnRzKTtcclxuICAgIHZhciBtaW5fbGN2cF9pbmRleCA9IGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5pbmRleE9mKG1pbl9sY3ZwX3BvaW50KTtcclxuICAgIHZhciB2YWxpZF9sY3ZwX2NoYW5nZSA9IG1pbl9sY3ZwX3BvaW50ICE9IDk5OTtcclxuXHJcbiAgICBpZiAodmFsaWRfbGN2cF9jaGFuZ2UpIHtcclxuICAgICAgbGV0dGVyX2dyYWRlc1ttaW5fbGN2cF9pbmRleF0gPSBsY3ZwX21vZHVsZXNbbWluX2xjdnBfcG9pbnRdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxldHRlcl9ncmFkZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBncmFkZSBhdmVyYWdlIGFuZCBwb2ludHMgdG8gZ3JhZGVzIGFzIGxpc3Qgb2YgbnVtYmVyc1xyXG4gKiBAcGFyYW0ge2FycmF5fSBwb2ludHNfbmVlZGVkIFxyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gZ2FyX2FuZF9wdGcocG9pbnRzX25lZWRlZCkge1xyXG5cclxuICBwb2ludHNfbmVlZGVkID0gcG9pbnRzX25lZWRlZC5zb3J0KCk7XHJcblxyXG4gIHZhciBtaXhlZF9yYW5rcyA9IHtcclxuICAgIDEwMDogXCJoMVwiLFxyXG4gICAgODg6IFwiaDJcIixcclxuICAgIDc3OiBcImgzXCIsXHJcbiAgICA2NjogXCJoNFwiLFxyXG5cclxuICAgIDU2OiBcImg1L28xXCIsXHJcbiAgICA0NjogXCJoNi9vMlwiLFxyXG4gICAgMzc6IFwiaDcvbzNcIixcclxuICAgIDI4OiBcIm80XCIsXHJcbiAgICAyMDogXCJvNVwiLFxyXG4gICAgMTI6IFwibzZcIixcclxuICB9O1xyXG5cclxuICBpZiAoaGxfbnVtID4gMCkge1xyXG4gICAgbWl4ZWRfcmFua3NbNTZdID0gXCJoNVwiO1xyXG4gICAgbWl4ZWRfcmFua3NbNDZdID0gXCJoNlwiO1xyXG4gICAgbWl4ZWRfcmFua3NbMzddID0gXCJoN1wiO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9sX251bSA+IDApIHtcclxuICAgIG1peGVkX3JhbmtzWzU2XSA9IFwibzFcIjtcclxuICAgIG1peGVkX3JhbmtzWzQ2XSA9IFwibzJcIjtcclxuICAgIG1peGVkX3JhbmtzWzM3XSA9IFwibzNcIjtcclxuICB9XHJcblxyXG4gIHZhciByYW5rcyA9IHtcclxuICAgIFwiaDFcIjogOTAsXHJcbiAgICBcImgyXCI6IDgwLFxyXG4gICAgXCJoM1wiOiA3MCxcclxuICAgIFwiaDRcIjogNjAsXHJcbiAgICBcImg1XCI6IDU2LFxyXG4gICAgXCJoNlwiOiA0NixcclxuICAgIFwiaDdcIjogMzcsXHJcblxyXG4gICAgXCJEaXN0aW5jdGlvblwiOiA2NixcclxuICAgIFwiTWVyaXRcIjogNDYsXHJcbiAgICBcIlBhc3NcIjogMjgsXHJcblxyXG4gICAgXCJvMVwiOiA1NixcclxuICAgIFwibzJcIjogNDYsXHJcbiAgICBcIm8zXCI6IDM3LFxyXG4gICAgXCJvNFwiOiAyOCxcclxuICAgIFwibzVcIjogMjAsXHJcbiAgICBcIm82XCI6IDEyLFxyXG4gIH07XHJcblxyXG4gIGlmIChobF9udW0gPiAwKSB7XHJcbiAgICByYW5rc1tcImg1L28xXCJdID0gNTA7XHJcbiAgICByYW5rc1tcImg2L28yXCJdID0gNDA7XHJcbiAgICByYW5rc1tcImg3L28zXCJdID0gMzA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJhbmtzW1wiaDUvbzFcIl0gPSA5MDtcclxuICAgIHJhbmtzW1wiaDYvbzJcIl0gPSA4MDtcclxuICAgIHJhbmtzW1wiaDcvbzNcIl0gPSA3MDtcclxuICB9XHJcblxyXG4gIHZhciBncmFkZXNfc291bHRpb24gPSBbXTtcclxuICB2YXIgdG90YWwgPSAwO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzX25lZWRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHBvaW50c19uZWVkZWRbaV0gIT0gMjUpIHtcclxuICAgICAgZ3JhZGVzX3NvdWx0aW9uLnB1c2gobWl4ZWRfcmFua3NbcG9pbnRzX25lZWRlZFtpXV0pO1xyXG4gICAgICB0b3RhbCArPSByYW5rc1ttaXhlZF9yYW5rc1twb2ludHNfbmVlZGVkW2ldXV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRvdGFsID0gdG90YWwgLyAoaGxfbnVtICsgb2xfbnVtKTtcclxuICB2YXIgcGVyY2VudGFnZV9hdmcgPSBTdHJpbmcoTWF0aC5yb3VuZCh0b3RhbCkpICsgXCIlXCI7XHJcbiAgZ3JhZGVzX3NvdWx0aW9uID0gYWRqdXN0b3IoZ3JhZGVzX3NvdWx0aW9uKTtcclxuXHJcbiAgcmV0dXJuIFtwZXJjZW50YWdlX2F2ZywgZ3JhZGVzX3NvdWx0aW9uXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheV9wbHVzXzI1KGJvb2xfaGxfbWF0aHMpIHtcclxuICB2YXIgYWRkaW5nXzI1X2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X2NvbnRhaW5lclwiKTtcclxuICBpZiAoYm9vbF9obF9tYXRocykge1xyXG4gICAgYWRkaW5nXzI1X2NvbnRhaW5lci5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2s7Y29sb3I6ICMwMDY2ZmZcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkaW5nXzI1X2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWRfY29tbWFzKGdyYWRlcykge1xyXG4gIGdyYWRlcyA9IGdyYWRlcy50b1N0cmluZygpO1xyXG4gIGdyYWRlcyA9IGdyYWRlcy5yZXBsYWNlQWxsKFwiLFwiLCBcIjxzdHJvbmcgY2xhc3M9J2ltcG9ydGFudC1yZWQnPiw8L3N0cm9uZz5cIik7XHJcblxyXG4gIHJldHVybiBncmFkZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpbmNyZW1lbnRzIGEgZ3JhZGUncyB2YWx1ZSB0byB0aGUgbmV4dCBvbmVcclxuICogZm9yIGV4YW1wbGUgaW5jcmVtZW50IGEgZ3JhZGUgdGhhdCBoYXMgdGhlIHZhbHVlIG9mIDg4IHdpbGwgYmUgaW5jcmVhc2VkIHRvIDEwMFxyXG4gKiBAcGFyYW0ge2FycmF5fSBncmFkZXMgXHJcbiAqIEBwYXJhbSB7aW50fSBpbmRleCBcclxuICogQHBhcmFtIHtib29sZWFufSBtYXRoc19wbHVzXzI1IFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIHNpbmdsZV9jaGFuZ2UoZ3JhZGVzLCBpbmRleCwgbWF0aHNfcGx1c18yNSkge1xyXG4gIGNvbnN0IGlzX2luX2RpY3QgPSBbMTIsIDIwLCAyOCwgMzcsIDQ2LCA1NiwgNjYsIDc3LCA4OCwgMTAwXTtcclxuICB2YXIgZGljdF9jaGFuZ2VhYmxlcyA9IHtcclxuICAgIDEyOiAyMCxcclxuICAgIDIwOiAyOCxcclxuICAgIDI4OiAzNyxcclxuICAgIDM3OiA0NixcclxuICAgIDQ2OiA1NixcclxuICAgIDU2OiA2NixcclxuICAgIDY2OiA3NyxcclxuICAgIDc3OiA4OCxcclxuICAgIDg4OiAxMDBcclxuICB9O1xyXG5cclxuICBpZiAoaXNfaW5fZGljdC5pbmNsdWRlcyhncmFkZXNbaW5kZXhdKSkge1xyXG4gICAgZ3JhZGVzW2luZGV4XSA9IGRpY3RfY2hhbmdlYWJsZXNbZ3JhZGVzW2luZGV4XV07XHJcbiAgfVxyXG4gIGlmIChtYXRoc19wbHVzXzI1ICYmIChncmFkZXMuaW5jbHVkZXMoMjUpKSA9PSBmYWxzZSkge1xyXG4gICAgZ3JhZGVzLnB1c2goMjUpO1xyXG4gIH1cclxuICByZXR1cm4gZ3JhZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdW0oYXJyYXkpIHtcclxuICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsID0+ICtlbCkucmVkdWNlKChhY2MsIGN2KSA9PiBhY2MgKyBjdiwgMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnZW5lcmF0ZXMgYSBzdGFydGluZyBwb2ludCBvZiBhbiBhcnJheSBvZiB3aGljaCBpbmRpdmlkdWFsIHZhbHVlcyB3aWxsIGJlIGluY3JlYXNlZCBsYXRlciBcclxuICogQHBhcmFtIHtpbnR9IGhsX3N1YnMgXHJcbiAqIEBwYXJhbSB7aW50fSBvbF9zdWJzIFxyXG4gKiBAcmV0dXJucyBhcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnRpbmdfZ3JhZGVzKGhsX3N1YnMsIG9sX3N1YnMpIHtcclxuICB2YXIgZ3JhZGVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBobF9zdWJzOyBpKyspIHtcclxuICAgIGdyYWRlcy5wdXNoKDM3KTtcclxuICB9XHJcbiAgZm9yIChpID0gMDsgaSA8IG9sX3N1YnM7IGkrKykge1xyXG4gICAgZ3JhZGVzLnB1c2goMTIpO1xyXG4gIH1cclxuICByZXR1cm4gZ3JhZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdoZXN0X3BvaW50c19wb3NzKGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpIHtcclxuICB2YXIgY291bnRlciA9IDA7XHJcbiAgY291bnRlciArPSAoMTAwICogaGxfc3VicykgKyAoNTYgKiBvbF9zdWJzKTtcclxuICBpZiAobWF0aHNfcGx1c18yNSkge1xyXG4gICAgY291bnRlciArPSAyNTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3VudGVyO1xyXG59XHJcblxyXG4vKipcclxuICogdGhpcyBpcyB3aG9sZSBhbGdvcm90aGltIGJlaGluZCBnZW5lcmF0ZSBjb3JyZWN0IG91dHB1dFxyXG4gKiBpbiBzaG9ydCBpdCBjcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyB0aGF0IGFyZSBncmFkdWFsbHkgaW5jcmVhc2VkIHVudGlsIGl0J3Mgb3ZlcmFsbCB2YWx1ZSBpcyBpbmNyZWFzZWRcclxuICogdW50aWwgaXQgXCJyZWFjaGVzXCIgdGhlIGNhbyBwb2ludHMgdGFyZ2V0XHJcbiAqIEBwYXJhbSB7dGFyZ2V0fSB0YXJnZXQgXHJcbiAqIEBwYXJhbSB7aGxfc3Vic30gaGxfc3VicyBcclxuICogQHBhcmFtIHtvbF9zdWJzfSBvbF9zdWJzIFxyXG4gKiBAcGFyYW0ge21hdGhzX3BsdXNfMjV9IG1hdGhzX3BsdXNfMjUgXHJcbiAqIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFpbih0YXJnZXQsIGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpIHtcclxuICB2YXIgdG90YWxfc3VicyA9IGhsX3N1YnMgKyBvbF9zdWJzO1xyXG4gIHZhciBjdXJyZW50X2dyYWRlcyA9IHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKTtcclxuICB2YXIgY3VycmVudF9wb2ludHMgPSBzdW0oY3VycmVudF9ncmFkZXMpO1xyXG4gIHZhciBpbmRleCA9IDA7XHJcbiAgdmFyIG1heF9saW1pdCA9IGhpZ2hlc3RfcG9pbnRzX3Bvc3MoaGxfc3Vicywgb2xfc3VicywgbWF0aHNfcGx1c18yNSk7XHJcbiAgdmFyIHdpdGhpbl9yYW5nZSA9IGN1cnJlbnRfcG9pbnRzIDw9IG1heF9saW1pdCAmJiB0YXJnZXQgPD0gbWF4X2xpbWl0ICYmIChjdXJyZW50X3BvaW50cyA8IHRhcmdldCk7XHJcblxyXG4gIHdoaWxlICh3aXRoaW5fcmFuZ2UpIHtcclxuICAgIGN1cnJlbnRfZ3JhZGVzID0gc2luZ2xlX2NoYW5nZShjdXJyZW50X2dyYWRlcywgaW5kZXgsIG1hdGhzX3BsdXNfMjUpO1xyXG4gICAgY3VycmVudF9wb2ludHMgPSBzdW0oY3VycmVudF9ncmFkZXMpO1xyXG4gICAgd2l0aGluX3JhbmdlID0gY3VycmVudF9wb2ludHMgPD0gbWF4X2xpbWl0ICYmIHRhcmdldCA8PSBtYXhfbGltaXQgJiYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KTtcclxuICAgIGluZGV4ICs9IDE7XHJcblxyXG4gICAgaWYgKGluZGV4ID09IHRvdGFsX3N1YnMpIHtcclxuICAgICAgaW5kZXggPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KSB7XHJcbiAgICBjdXJyZW50X2dyYWRlcyA9IFtdO1xyXG4gICAgY3VycmVudF9wb2ludHMgPSBbXTtcclxuICB9XHJcbiAgcmV0dXJuIFtjdXJyZW50X2dyYWRlcywgY3VycmVudF9wb2ludHNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVfaW5wdXRzKCkge1xyXG4gIHZhciB0YXJnZXRfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldF90ZXh0XCIpO1xyXG4gIHRhcmdldF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZmluZF9wb2ludHNfbmVlZGVkKCk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBobF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGxfc3Vic190ZXh0XCIpO1xyXG4gIGhsX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcclxuICB9KTtcclxuXHJcbiAgdmFyIG9sX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbF9zdWJzX3RleHRcIik7XHJcbiAgb2xfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG51cGRhdGVfaW5wdXRzKCk7XHJcblxyXG4vLyB0byBoaWRlIHRoZSBib3ggb2Ygb3V0cHV0IHdoZW4gdGhlIHBhZ2UgbG9hZGVzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0X2NvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuXHJcbi8qKlxyXG4gKiBjb2xsZWN0cyB0aGUgZGF0YSB2YWx1ZXMgZnJvbSB0aGUgSFRNTCAodGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0pXHJcbiAqIGhhbmRsZXMgZXJyb3IgY2FzZXMgYW5kIHN1Y2Nlc3NmdWxsIG91dHB1dFxyXG4gKi9cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuYXN5bmMgZnVuY3Rpb24gZmluZF9wb2ludHNfbmVlZGVkKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0X2NvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdF9jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcblxyXG4gIHRhcmdldF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRfdGV4dFwiKS52YWx1ZSk7XHJcbiAgaGxfbnVtID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGxfc3Vic190ZXh0XCIpLnZhbHVlKTtcclxuICBvbF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbF9zdWJzX3RleHRcIikudmFsdWUpO1xyXG5cclxuICAvLyBjaGVjayBmb3IgaW52YWxpZCBpbnB1dFxyXG4gIHZhciBpbnZhbGlkX3RhcmdldF9pbnB1dCA9ICh0YXJnZXRfbnVtIDw9IDApIHx8ICh0YXJnZXRfbnVtID4gNjI1KTtcclxuICB2YXIgaW52YWxpZF9zdWJzX2lucHV0ID0gKGhsX251bSA8IDApIHx8IChvbF9udW0gPCAwKSB8fCAoaGxfbnVtID4gNikgfHwgKG9sX251bSA+IDYpIHx8ICgoaGxfbnVtICsgb2xfbnVtKSA+IDYpO1xyXG4gIHZhciBtYXhfcHRzID0gKGhsX251bSAqIDEwMCkgKyAob2xfbnVtICogNTYpICsgYWRkXzI1O1xyXG4gIHZhciBpbnZhbGlkX3JhbmdlID0gKG1heF9wdHMgPj0gdGFyZ2V0X251bSkgPT0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IHJhbmdlX2Vycm9yX21zZyA9IGBJdCdzIGltcG9zc2libGUgdG8gYWNoaWV2ZSAke3RhcmdldF9udW19IENBTyBwb2ludHMgd2l0aCAke2hsX251bX0gaGlnaGVyLWxldmVsIHN1YmplY3RzIGFuZCAke29sX251bX0gb3JkaW5hcnktbGV2ZWwgc3ViamVjdHMuYDtcclxuICBjb25zdCBwdHNfZXJyb3JfbXNnID0gXCJZb3VyIGlucHV0dGVkIENBTyBwb2ludHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDYyNS5cIjtcclxuICBjb25zdCBzdWJzX2Vycm9yX21zaCA9IFwiVGhpcyBjYWxjdWxhdG9yIHdpbGwgbm90IGFsbG93IGZvciBtb3JlIHRoYW4gNiBzdWJqZWN0cyBpbiB0b3RhbCBhcyBpbnB1dHMuXCI7XHJcblxyXG4gIHZhciBlcnJvcl9zdGF0dXMgPSBcIlwiO1xyXG5cclxuICBpZiAoaW52YWxpZF9yYW5nZSkge1xyXG4gICAgZXJyb3Jfc3RhdHVzICs9IHJhbmdlX2Vycm9yX21zZyArIFwiXFxuXCI7XHJcbiAgfSBpZiAoaW52YWxpZF9zdWJzX2lucHV0KSB7XHJcbiAgICBlcnJvcl9zdGF0dXMgKz0gc3Vic19lcnJvcl9tc2ggKyBcIlxcblwiO1xyXG4gIH1cclxuICBpZiAoaW52YWxpZF90YXJnZXRfaW5wdXQpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSBwdHNfZXJyb3JfbXNnICsgXCJcXG5cIjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcl9zdGF0dXMgIT0gXCJcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIikuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZhbGlkX2lucHV0XCIpLmlubmVySFRNTCA9IGVycm9yX3N0YXR1cztcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fY29udGFpbmVyXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291bHRpb25fb3V0cHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X2NvbnRhaW5lclwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgfVxyXG5cclxuICBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb19jb250YWluZXJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX2NvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VsdGlvbl9vdXRwdXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZF9pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB2YXIgbWF0aHNfcGx1c18yNTtcclxuICAgIGlmIChhZGRfMjUgPT0gMjUpIHtcclxuICAgICAgbWF0aHNfcGx1c18yNSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbWF0aHNfcGx1c18yNSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdmFyIG1hdGNoZXNfaW5mbyA9IG1haW4odGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0sIG1hdGhzX3BsdXNfMjUpO1xyXG4gICAgdmFyIHBvaW50c19saXN0ID0gbWF0Y2hlc19pbmZvWzBdO1xyXG4gICAgdmFyIHBvaW50c19yZXEgPSBtYXRjaGVzX2luZm9bMV07XHJcblxyXG4gICAgaWYgKHBvaW50c19saXN0LmluY2x1ZGVzKDI1KSkge1xyXG4gICAgICBkaXNwbGF5X3BsdXNfMjUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGlzcGxheV9wbHVzXzI1KGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBvdXRwdXRfaW5mbyA9IGdhcl9hbmRfcHRnKHBvaW50c19saXN0KTtcclxuXHJcbiAgICB2YXIgZ3JhZGVfYXZnID0gb3V0cHV0X2luZm9bMF07XHJcbiAgICB2YXIgcmVxX3Jlc3VsdHMgPSBvdXRwdXRfaW5mb1sxXTsgLy8gdGhlc2UgYXJlIGxldHRlciBncmFkZXNcclxuXHJcbiAgICByZXFfcmVzdWx0cyA9IHJlZF9jb21tYXMocmVxX3Jlc3VsdHMpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9pbnRzX3JlcVwiKS5pbm5lckhUTUwgPSBTdHJpbmcocG9pbnRzX3JlcSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcV9yZXN1bHRzXCIpLmlubmVySFRNTCA9IFN0cmluZyhyZXFfcmVzdWx0cyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYWRlX2F2Z19yZXFcIikuaW5uZXJIVE1MID0gU3RyaW5nKGdyYWRlX2F2Zyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogeWVhcmx5IGpva2UgdGhhdCB3aWxsIGJlIGFjdGl2YXRlZCBpbiBtYXkgYW5kIGp1bmVcclxuICovXHJcbmZ1bmN0aW9uIG1vdGl2YXRlKCkge1xyXG4gIHNlY29uZHMgKz0gMTtcclxuICBpZiAoNTkgPD0gc2Vjb25kcyAmJiBzZWNvbmRzIDw9IDYwKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1pbmZvXCIpLnNyYyA9IFwiaW1hZ2VzL2pva2Uud2VicFwiO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWluZm9cIikuc3JjID0gXCJpbWFnZXMvcG9pbnRzLXN5c3RlbS53ZWJwXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoc2Vjb25kcyA+IDYwKSB7XHJcbiAgICBzZWNvbmRzID0gMDtcclxuICB9XHJcbn1cclxuXHJcbnZhciBzZWNvbmRzID0gMDtcclxudmFyIGR0ID0gbmV3IERhdGUoKTtcclxudmFyIG1vbnRoID0gZHQuZ2V0TW9udGgoKSArIDE7IC8vIGNhdXNlIG9mIDAgaW5kZXhpbmcgb2YgdGhlIDEyIG1vbnRocyBiZWNvbWVzIDAgLSAxMVxyXG5pZiAoWzMsIDQsIDVdLmluY2x1ZGVzKG1vbnRoKSkge1xyXG4gIHNldEludGVydmFsKG1vdGl2YXRlLCAxMDAwKTtcclxuICBtb3RpdmF0ZSgpO1xyXG59XHJcblxyXG4vLyBpZiAobG9jYXRpb24uaHJlZiAhPSBcImh0dHBzOi8vY2FvcG9pbnRzLmNvbVwiKSB7XHJcbi8vICAgbG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9jYW9wb2ludHMuY29tXCI7XHJcbi8vIH0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRWlCQSxNQUFNQSxzQkFBb0IsU0FBVSxLQUFXO0FBRTdDLFVBQU0sTUFBZ0IsQ0FBQTtBQUN0QixRQUFJLElBQUk7QUFDUixhQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxLQUFLO0FBQ25DLFVBQUksSUFBSSxJQUFJLFdBQVcsQ0FBQztBQUN4QixVQUFJLElBQUksS0FBSztBQUNYLFlBQUksR0FBRyxJQUFJO01BQ1osV0FBVSxJQUFJLE1BQU07QUFDbkIsWUFBSSxHQUFHLElBQUssS0FBSyxJQUFLO0FBQ3RCLFlBQUksR0FBRyxJQUFLLElBQUksS0FBTTtNQUN2QixZQUNFLElBQUksV0FBWSxTQUNqQixJQUFJLElBQUksSUFBSSxXQUNYLElBQUksV0FBVyxJQUFJLENBQUMsSUFBSSxXQUFZLE9BQ3JDO0FBRUEsWUFBSSxVQUFZLElBQUksU0FBVyxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsSUFBSTtBQUM1RCxZQUFJLEdBQUcsSUFBSyxLQUFLLEtBQU07QUFDdkIsWUFBSSxHQUFHLElBQU0sS0FBSyxLQUFNLEtBQU07QUFDOUIsWUFBSSxHQUFHLElBQU0sS0FBSyxJQUFLLEtBQU07QUFDN0Is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V0FBVztBQUVwQyxlQUFTLGVBQWUsWUFBWSxFQUFFLFlBQVksT0FBTyxVQUFVO0FBQ25FLGVBQVMsZUFBZSxhQUFhLEVBQUUsWUFBWSxPQUFPLFdBQVc7QUFDckUsZUFBUyxlQUFlLGVBQWUsRUFBRSxZQUFZLE9BQU8sU0FBUztBQUFBLElBQ3ZFO0FBQUEsRUFDRjtBQUtBLFdBQVMsV0FBVztBQUNsQixlQUFXO0FBQ1gsUUFBSSxNQUFNLFdBQVcsV0FBVyxJQUFJO0FBQ2xDLGVBQVMsZUFBZSxVQUFVLEVBQUUsTUFBTTtBQUFBLElBQzVDLE9BQ0s7QUFDSCxlQUFTLGVBQWUsVUFBVSxFQUFFLE1BQU07QUFBQSxJQUM1QztBQUVBLFFBQUksVUFBVSxJQUFJO0FBQ2hCLGdCQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLFVBQVU7QUFDZCxNQUFJLEtBQUssb0JBQUksS0FBSztBQUNsQixNQUFJLFFBQVEsR0FBRyxTQUFTLElBQUk7QUFDNUIsTUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsU0FBUyxLQUFLLEdBQUc7QUFDN0IsZ0JBQVksVUFBVSxHQUFJO0FBQzFCLGFBQVM7QUFBQSxFQUNYOyIsCiAgIm5hbWVzIjogWyJzdHJpbmdUb0J5dGVBcnJheSIsICJuYW1lIiwgIkxvZ0xldmVsIiwgIm5hbWUiLCAibmFtZSIsICJ2ZXJzaW9uIiwgInRhcmdldCIsICJERUZBVUxUX0VOVFJZX05BTUUiLCAiYXBwTmFtZSIsICJhcHBDb21wYXROYW1lIiwgImFuYWx5dGljc05hbWUiLCAiYW5hbHl0aWNzQ29tcGF0TmFtZSIsICJhcHBDaGVja05hbWUiLCAiYXBwQ2hlY2tDb21wYXROYW1lIiwgImF1dGhOYW1lIiwgImF1dGhDb21wYXROYW1lIiwgImRhdGFiYXNlTmFtZSIsICJkYXRhYmFzZUNvbXBhdE5hbWUiLCAiZnVuY3Rpb25zTmFtZSIsICJmdW5jdGlvbnNDb21wYXROYW1lIiwgImluc3RhbGxhdGlvbnNOYW1lIiwgImluc3RhbGxhdGlvbnNDb21wYXROYW1lIiwgIm1lc3NhZ2luZ05hbWUiLCAibWVzc2FnaW5nQ29tcGF0TmFtZSIsICJwZXJmb3JtYW5jZU5hbWUiLCAicGVyZm9ybWFuY2VDb21wYXROYW1lIiwgInJlbW90ZUNvbmZpZ05hbWUiLCAicmVtb3RlQ29uZmlnQ29tcGF0TmFtZSIsICJzdG9yYWdlTmFtZSIsICJzdG9yYWdlQ29tcGF0TmFtZSIsICJmaXJlc3RvcmVOYW1lIiwgImZpcmVzdG9yZUNvbXBhdE5hbWUiLCAicGFja2FnZU5hbWUiLCAibmFtZSIsICJuYW1lIiwgIkRFRkFVTFRfRU5UUllfTkFNRSIsICJ2ZXJzaW9uIiwgIm5hbWUiLCAidmVyc2lvbiIsICJuYW1lIiwgInZlcnNpb24iLCAiRVJST1JfRkFDVE9SWSIsICJkYlByb21pc2UiLCAiZ2V0RGJQcm9taXNlIiwgImluc3RhbGxhdGlvbkVudHJ5IiwgIkVSUk9SX0ZBQ1RPUlkiLCAiRVJST1JfRkFDVE9SWSIsICJuYW1lIiwgInZlcnNpb24iLCAidmVyc2lvbiIsICJTRVJWSUNFIiwgIlNFUlZJQ0VfTkFNRSIsICJFUlJPUl9ERVNDUklQVElPTl9NQVAiLCAiRVJST1JfRkFDVE9SWSIsICJ3aW5kb3ciLCAibmFtZSIsICJWaXNpYmlsaXR5U3RhdGUiLCAibmF2aWdhdG9yIiwgImRvY3VtZW50IiwgImlpZCIsICJjb25maWciLCAic2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UiLCAic2VyaWFsaXplciIsICJsb2dnZXIiLCAiREVGQVVMVF9FTlRSWV9OQU1FIiwgIkRFRkFVTFRfRU5UUllfTkFNRSIsICJFUlJPUl9GQUNUT1JZIiwgIm5hbWUiLCAidmVyc2lvbiIsICJmaXJlYmFzZUNvbmZpZyJdCn0K
