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
  function _addComponent(app2, component) {
    try {
      app2.container.addComponent(component);
    } catch (e) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app2 of _apps.values()) {
      _addComponent(app2, component);
    }
    return true;
  }
  function _getProvider(app2, name5) {
    const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
    if (heartbeatController) {
      void heartbeatController.triggerHeartbeat();
    }
    return app2.container.getProvider(name5);
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
    const app2 = _apps.get(name5);
    if (!app2 && name5 === DEFAULT_ENTRY_NAME2) {
      return initializeApp();
    }
    if (!app2) {
      throw ERROR_FACTORY.create("no-app", { appName: name5 });
    }
    return app2;
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
  async function readHeartbeatsFromIndexedDB(app2) {
    try {
      const db = await getDbPromise();
      return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app2));
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
  async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app2));
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
  function computeKey(app2) {
    return `${app2.name}!${app2.options.appId}`;
  }
  var MAX_HEADER_BYTES = 1024;
  var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
  var HeartbeatServiceImpl = class {
    constructor(container) {
      this.container = container;
      this._heartbeatsCache = null;
      const app2 = this.container.getProvider("app").getImmediate();
      this._storage = new HeartbeatStorageImpl(app2);
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
    constructor(app2) {
      this.app = app2;
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
  function extractAppConfig(app2) {
    if (!app2 || !app2.options) {
      throw getMissingValueError("App Configuration");
    }
    if (!app2.name) {
      throw getMissingValueError("App Name");
    }
    const configKeys = [
      "projectId",
      "apiKey",
      "appId"
    ];
    for (const keyName of configKeys) {
      if (!app2.options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
    return {
      appName: app2.name,
      projectId: app2.options.projectId,
      apiKey: app2.options.apiKey,
      appId: app2.options.appId
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
    const app2 = container.getProvider("app").getImmediate();
    const appConfig = extractAppConfig(app2);
    const heartbeatServiceProvider = _getProvider(app2, "heartbeat");
    const installationsImpl = {
      app: app2,
      appConfig,
      heartbeatServiceProvider,
      _delete: () => Promise.resolve()
    };
    return installationsImpl;
  };
  var internalFactory = (container) => {
    const app2 = container.getProvider("app").getImmediate();
    const installations = _getProvider(app2, INSTALLATIONS_NAME).getImmediate();
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
    constructor(app2, installations) {
      this.app = app2;
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
  function getPerformance(app2 = getApp()) {
    app2 = getModularInstance(app2);
    const provider = _getProvider(app2, "performance");
    const perfInstance = provider.getImmediate();
    return perfInstance;
  }
  var factory = (container, { options: settings }) => {
    const app2 = container.getProvider("app").getImmediate();
    const installations = container.getProvider("installations-internal").getImmediate();
    if (app2.name !== DEFAULT_ENTRY_NAME3) {
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
    const perfInstance = new PerformanceController(app2, installations);
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
    grades = grades.replaceAll(",", '<strong class="important-red">,</strong>');
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

  // public/home.js
  var firebaseConfig = {
    // tldr; there"s prob no need to tell me that my apikey is exposed (not that i don't like feedback or fan interaction..) 
    apiKey: "AIzaSyBnpE-YlKKvHwE9pi3CwhKf1Tq7nthPycE",
    // you there! even js obfuscation can"t fully hide this key and the client side needs access to this to correctly run and just having this key isn"t enough to cause any kind of damage because an imposter would need more than just the key to do anything of damage in my particular case or to be able to access any kind of sensitive information in addition it was been limited on the server side
    authDomain: "caopoints-info.firebaseapp.com",
    databaseURL: "https://caopoints-info-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "caopoints-info",
    storageBucket: "caopoints-info.appspot.com",
    messagingSenderId: "615159418744",
    appId: "1:615159418744:web:35978469f92b90b5c9828d",
    measurementId: "G-08383DC9PC"
  };
  var app = initializeApp(firebaseConfig);
  getPerformance(app);
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
    const range_error_msg = `It"s impossible to achieve ${target_num} CAO points with ${hl_num} higher-level subjects and ${ol_num} ordinary-level subjects.`;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9hc3NlcnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9jcnlwdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2RlZXBDb3B5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZW52aXJvbm1lbnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9kZWZhdWx0cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2RlZmVycmVkLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZW11bGF0b3IudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9qc29uLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvand0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvb2JqLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvcHJvbWlzZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3F1ZXJ5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvc2hhMS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3N1YnNjcmliZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3ZhbGlkYXRpb24udHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy91dGY4LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvdXVpZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2V4cG9uZW50aWFsX2JhY2tvZmYudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9mb3JtYXR0ZXJzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvY29tcGF0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvY29tcG9uZW50L3NyYy9jb21wb25lbnQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbnN0YW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9zcmMvcHJvdmlkZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbXBvbmVudF9jb250YWluZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvc3JjL2xvZ2dlci50cyIsICJub2RlX21vZHVsZXMvaWRiL2J1aWxkL3dyYXAtaWRiLXZhbHVlLmpzIiwgIm5vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3BsYXRmb3JtTG9nZ2VyU2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvbG9nZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ludGVybmFsLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ZpcmViYXNlQXBwLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9hcGkudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2luZGV4ZWRkYi50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaGVhcnRiZWF0U2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvcmVnaXN0ZXJDb3JlQ29tcG9uZW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXgudHMiLCAibm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9pbmRleC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvY29uc3RhbnRzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvdXRpbC9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9mdW5jdGlvbnMvY29tbW9uLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2NyZWF0ZS1pbnN0YWxsYXRpb24tcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvc2xlZXAudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2J1ZmZlci10by1iYXNlNjQtdXJsLXNhZmUudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2dlbmVyYXRlLWZpZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL3V0aWwvZ2V0LWtleS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvZmlkLWNoYW5nZWQudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9oZWxwZXJzL2lkYi1tYW5hZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvaGVscGVycy9nZXQtaW5zdGFsbGF0aW9uLWVudHJ5LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlLWF1dGgtdG9rZW4tcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvcmVmcmVzaC1hdXRoLXRva2VuLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2dldC1pZC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2FwaS9nZXQtdG9rZW4udHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL3NyYy9mdW5jdGlvbnMvZGVsZXRlLWluc3RhbGxhdGlvbi1yZXF1ZXN0LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL2RlbGV0ZS1pbnN0YWxsYXRpb25zLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvYXBpL29uLWlkLWNoYW5nZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2FwaS9nZXQtaW5zdGFsbGF0aW9ucy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2hlbHBlcnMvZXh0cmFjdC1hcHAtY29uZmlnLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9zcmMvZnVuY3Rpb25zL2NvbmZpZy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL2luc3RhbGxhdGlvbnMvc3JjL2luZGV4LnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL2NvbnN0YW50cy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy91dGlscy9lcnJvcnMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvY29uc29sZV9sb2dnZXIudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvc2VydmljZXMvYXBpX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvc2VydmljZXMvaWlkX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvc3RyaW5nX21lcmdlci50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9zZXR0aW5nc19zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3V0aWxzL2F0dHJpYnV0ZXNfdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvdXRpbHMvYXBwX3V0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3JlbW90ZV9jb25maWdfc2VydmljZS50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9pbml0aWFsaXphdGlvbl9zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3RyYW5zcG9ydF9zZXJ2aWNlLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3NlcnZpY2VzL3BlcmZfbG9nZ2VyLnRzIiwgIm5vZGVfbW9kdWxlcy9AZmlyZWJhc2UvcGVyZm9ybWFuY2Uvc3JjL3V0aWxzL21ldHJpY191dGlscy50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9yZXNvdXJjZXMvdHJhY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvcmVzb3VyY2VzL25ldHdvcmtfcmVxdWVzdC50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9zZXJ2aWNlcy9vb2JfcmVzb3VyY2VzX3NlcnZpY2UudHMiLCAibm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9wZXJmb3JtYW5jZS9zcmMvY29udHJvbGxlcnMvcGVyZi50cyIsICJub2RlX21vZHVsZXMvQGZpcmViYXNlL3BlcmZvcm1hbmNlL3NyYy9pbmRleC50cyIsICJkb20tc3VwcG9ydC5qcyIsICJob21lLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgRmlyZWJhc2UgY29uc3RhbnRzLiAgU29tZSBvZiB0aGVzZSAoQGRlZmluZXMpIGNhbiBiZSBvdmVycmlkZGVuIGF0IGNvbXBpbGUtdGltZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgQ09OU1RBTlRTID0ge1xuICAvKipcbiAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBjbGllbnQgTm9kZS5qcyBTREsuXG4gICAqL1xuICBOT0RFX0NMSUVOVDogZmFsc2UsXG4gIC8qKlxuICAgKiBAZGVmaW5lIHtib29sZWFufSBXaGV0aGVyIHRoaXMgaXMgdGhlIEFkbWluIE5vZGUuanMgU0RLLlxuICAgKi9cbiAgTk9ERV9BRE1JTjogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEZpcmViYXNlIFNESyBWZXJzaW9uXG4gICAqL1xuICBTREtfVkVSU0lPTjogJyR7SlNDT1JFX1ZFUlNJT059J1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBwcm92aWRlZCBhc3NlcnRpb24gaXMgZmFsc3lcbiAqL1xuZXhwb3J0IGNvbnN0IGFzc2VydCA9IGZ1bmN0aW9uIChhc3NlcnRpb246IHVua25vd24sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIWFzc2VydGlvbikge1xuICAgIHRocm93IGFzc2VydGlvbkVycm9yKG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gRXJyb3Igb2JqZWN0IHN1aXRhYmxlIGZvciB0aHJvd2luZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc2VydGlvbkVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2U6IHN0cmluZyk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAnRmlyZWJhc2UgRGF0YWJhc2UgKCcgK1xuICAgICAgQ09OU1RBTlRTLlNES19WRVJTSU9OICtcbiAgICAgICcpIElOVEVSTkFMIEFTU0VSVCBGQUlMRUQ6ICcgK1xuICAgICAgbWVzc2FnZVxuICApO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5jb25zdCBzdHJpbmdUb0J5dGVBcnJheSA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcbiAgY29uc3Qgb3V0OiBudW1iZXJbXSA9IFtdO1xuICBsZXQgcCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgb3V0W3ArK10gPSBjO1xuICAgIH0gZWxzZSBpZiAoYyA8IDIwNDgpIHtcbiAgICAgIG91dFtwKytdID0gKGMgPj4gNikgfCAxOTI7XG4gICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoYyAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJlxuICAgICAgaSArIDEgPCBzdHIubGVuZ3RoICYmXG4gICAgICAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmYzAwKSA9PT0gMHhkYzAwXG4gICAgKSB7XG4gICAgICAvLyBTdXJyb2dhdGUgUGFpclxuICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgJiAweDAzZmYpIDw8IDEwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHgwM2ZmKTtcbiAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xuICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xuICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XG4gICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcbiAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogVHVybnMgYW4gYXJyYXkgb2YgbnVtYmVycyBpbnRvIHRoZSBzdHJpbmcgZ2l2ZW4gYnkgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlXG4gKiBjaGFyYWN0ZXJzIHRvIHdoaWNoIHRoZSBudW1iZXJzIGNvcnJlc3BvbmQuXG4gKiBAcGFyYW0gYnl0ZXMgQXJyYXkgb2YgbnVtYmVycyByZXByZXNlbnRpbmcgY2hhcmFjdGVycy5cbiAqIEByZXR1cm4gU3RyaW5naWZpY2F0aW9uIG9mIHRoZSBhcnJheS5cbiAqL1xuY29uc3QgYnl0ZUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbiAoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcbiAgY29uc3Qgb3V0OiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgcG9zID0gMCxcbiAgICBjID0gMDtcbiAgd2hpbGUgKHBvcyA8IGJ5dGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGMxID0gYnl0ZXNbcG9zKytdO1xuICAgIGlmIChjMSA8IDEyOCkge1xuICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxKTtcbiAgICB9IGVsc2UgaWYgKGMxID4gMTkxICYmIGMxIDwgMjI0KSB7XG4gICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcbiAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcbiAgICB9IGVsc2UgaWYgKGMxID4gMjM5ICYmIGMxIDwgMzY1KSB7XG4gICAgICAvLyBTdXJyb2dhdGUgUGFpclxuICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XG4gICAgICBjb25zdCBjMyA9IGJ5dGVzW3BvcysrXTtcbiAgICAgIGNvbnN0IGM0ID0gYnl0ZXNbcG9zKytdO1xuICAgICAgY29uc3QgdSA9XG4gICAgICAgICgoKGMxICYgNykgPDwgMTgpIHwgKChjMiAmIDYzKSA8PCAxMikgfCAoKGMzICYgNjMpIDw8IDYpIHwgKGM0ICYgNjMpKSAtXG4gICAgICAgIDB4MTAwMDA7XG4gICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKHUgPj4gMTApKTtcbiAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGRjMDAgKyAodSAmIDEwMjMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XG4gICAgICBjb25zdCBjMyA9IGJ5dGVzW3BvcysrXTtcbiAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgKChjMSAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0LmpvaW4oJycpO1xufTtcblxuaW50ZXJmYWNlIEJhc2U2NCB7XG4gIGJ5dGVUb0NoYXJNYXBfOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9IHwgbnVsbDtcbiAgY2hhclRvQnl0ZU1hcF86IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gfCBudWxsO1xuICBieXRlVG9DaGFyTWFwV2ViU2FmZV86IHsgW2tleTogbnVtYmVyXTogc3RyaW5nIH0gfCBudWxsO1xuICBjaGFyVG9CeXRlTWFwV2ViU2FmZV86IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gfCBudWxsO1xuICBFTkNPREVEX1ZBTFNfQkFTRTogc3RyaW5nO1xuICByZWFkb25seSBFTkNPREVEX1ZBTFM6IHN0cmluZztcbiAgcmVhZG9ubHkgRU5DT0RFRF9WQUxTX1dFQlNBRkU6IHN0cmluZztcbiAgSEFTX05BVElWRV9TVVBQT1JUOiBib29sZWFuO1xuICBlbmNvZGVCeXRlQXJyYXkoaW5wdXQ6IG51bWJlcltdIHwgVWludDhBcnJheSwgd2ViU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIGVuY29kZVN0cmluZyhpbnB1dDogc3RyaW5nLCB3ZWJTYWZlPzogYm9vbGVhbik6IHN0cmluZztcbiAgZGVjb2RlU3RyaW5nKGlucHV0OiBzdHJpbmcsIHdlYlNhZmU6IGJvb2xlYW4pOiBzdHJpbmc7XG4gIGRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0OiBzdHJpbmcsIHdlYlNhZmU6IGJvb2xlYW4pOiBudW1iZXJbXTtcbiAgaW5pdF8oKTogdm9pZDtcbn1cblxuLy8gV2UgZGVmaW5lIGl0IGFzIGFuIG9iamVjdCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjbGFzcyBiZWNhdXNlIGEgY2xhc3MgY29tcGlsZWQgZG93biB0byBlczUgY2FuJ3Rcbi8vIGJlIHRyZWVzaGFrZWQuIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNjkxXG4vLyBTdGF0aWMgbG9va3VwIG1hcHMsIGxhemlseSBwb3B1bGF0ZWQgYnkgaW5pdF8oKVxuZXhwb3J0IGNvbnN0IGJhc2U2NDogQmFzZTY0ID0ge1xuICAvKipcbiAgICogTWFwcyBieXRlcyB0byBjaGFyYWN0ZXJzLlxuICAgKi9cbiAgYnl0ZVRvQ2hhck1hcF86IG51bGwsXG5cbiAgLyoqXG4gICAqIE1hcHMgY2hhcmFjdGVycyB0byBieXRlcy5cbiAgICovXG4gIGNoYXJUb0J5dGVNYXBfOiBudWxsLFxuXG4gIC8qKlxuICAgKiBNYXBzIGJ5dGVzIHRvIHdlYnNhZmUgY2hhcmFjdGVycy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ5dGVUb0NoYXJNYXBXZWJTYWZlXzogbnVsbCxcblxuICAvKipcbiAgICogTWFwcyB3ZWJzYWZlIGNoYXJhY3RlcnMgdG8gYnl0ZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjaGFyVG9CeXRlTWFwV2ViU2FmZV86IG51bGwsXG5cbiAgLyoqXG4gICAqIE91ciBkZWZhdWx0IGFscGhhYmV0LCBzaGFyZWQgYmV0d2VlblxuICAgKiBFTkNPREVEX1ZBTFMgYW5kIEVOQ09ERURfVkFMU19XRUJTQUZFXG4gICAqL1xuICBFTkNPREVEX1ZBTFNfQkFTRTpcbiAgICAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonICsgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyArICcwMTIzNDU2Nzg5JyxcblxuICAvKipcbiAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQuIFZhbHVlIDY0ICg9KSBpcyBzcGVjaWFsOyBpdCBtZWFucyBcIm5vdGhpbmcuXCJcbiAgICovXG4gIGdldCBFTkNPREVEX1ZBTFMoKSB7XG4gICAgcmV0dXJuIHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UgKyAnKy89JztcbiAgfSxcblxuICAvKipcbiAgICogT3VyIHdlYnNhZmUgYWxwaGFiZXQuXG4gICAqL1xuICBnZXQgRU5DT0RFRF9WQUxTX1dFQlNBRkUoKSB7XG4gICAgcmV0dXJuIHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UgKyAnLV8uJztcbiAgfSxcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGF0b2IgYW5kIGJ0b2EgZnVuY3Rpb25zLiBUaGlzIGV4dGVuc2lvblxuICAgKiBzdGFydGVkIGF0IE1vemlsbGEgYnV0IGlzIG5vdyBpbXBsZW1lbnRlZCBieSBtYW55IGJyb3dzZXJzLiBXZSB1c2UgdGhlXG4gICAqIEFTU1VNRV8qIHZhcmlhYmxlcyB0byBhdm9pZCBwdWxsaW5nIGluIHRoZSBmdWxsIHVzZXJhZ2VudCBkZXRlY3Rpb24gbGlicmFyeVxuICAgKiBidXQgc3RpbGwgYWxsb3dpbmcgdGhlIHN0YW5kYXJkIHBlci1icm93c2VyIGNvbXBpbGF0aW9ucy5cbiAgICpcbiAgICovXG4gIEhBU19OQVRJVkVfU1VQUE9SVDogdHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicsXG5cbiAgLyoqXG4gICAqIEJhc2U2NC1lbmNvZGUgYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dCBBbiBhcnJheSBvZiBieXRlcyAobnVtYmVycyB3aXRoXG4gICAqICAgICB2YWx1ZSBpbiBbMCwgMjU1XSkgdG8gZW5jb2RlLlxuICAgKiBAcGFyYW0gd2ViU2FmZSBCb29sZWFuIGluZGljYXRpbmcgd2Ugc2hvdWxkIHVzZSB0aGVcbiAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxuICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gICAqL1xuICBlbmNvZGVCeXRlQXJyYXkoaW5wdXQ6IG51bWJlcltdIHwgVWludDhBcnJheSwgd2ViU2FmZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgIHRocm93IEVycm9yKCdlbmNvZGVCeXRlQXJyYXkgdGFrZXMgYW4gYXJyYXkgYXMgYSBwYXJhbWV0ZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRfKCk7XG5cbiAgICBjb25zdCBieXRlVG9DaGFyTWFwID0gd2ViU2FmZVxuICAgICAgPyB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlXyFcbiAgICAgIDogdGhpcy5ieXRlVG9DaGFyTWFwXyE7XG5cbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgIGNvbnN0IGJ5dGUxID0gaW5wdXRbaV07XG4gICAgICBjb25zdCBoYXZlQnl0ZTIgPSBpICsgMSA8IGlucHV0Lmxlbmd0aDtcbiAgICAgIGNvbnN0IGJ5dGUyID0gaGF2ZUJ5dGUyID8gaW5wdXRbaSArIDFdIDogMDtcbiAgICAgIGNvbnN0IGhhdmVCeXRlMyA9IGkgKyAyIDwgaW5wdXQubGVuZ3RoO1xuICAgICAgY29uc3QgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBpbnB1dFtpICsgMl0gOiAwO1xuXG4gICAgICBjb25zdCBvdXRCeXRlMSA9IGJ5dGUxID4+IDI7XG4gICAgICBjb25zdCBvdXRCeXRlMiA9ICgoYnl0ZTEgJiAweDAzKSA8PCA0KSB8IChieXRlMiA+PiA0KTtcbiAgICAgIGxldCBvdXRCeXRlMyA9ICgoYnl0ZTIgJiAweDBmKSA8PCAyKSB8IChieXRlMyA+PiA2KTtcbiAgICAgIGxldCBvdXRCeXRlNCA9IGJ5dGUzICYgMHgzZjtcblxuICAgICAgaWYgKCFoYXZlQnl0ZTMpIHtcbiAgICAgICAgb3V0Qnl0ZTQgPSA2NDtcblxuICAgICAgICBpZiAoIWhhdmVCeXRlMikge1xuICAgICAgICAgIG91dEJ5dGUzID0gNjQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3V0cHV0LnB1c2goXG4gICAgICAgIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTFdLFxuICAgICAgICBieXRlVG9DaGFyTWFwW291dEJ5dGUyXSxcbiAgICAgICAgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlM10sXG4gICAgICAgIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTRdXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJhc2U2NC1lbmNvZGUgYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dCBBIHN0cmluZyB0byBlbmNvZGUuXG4gICAqIEBwYXJhbSB3ZWJTYWZlIElmIHRydWUsIHdlIHNob3VsZCB1c2UgdGhlXG4gICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cbiAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICAgKi9cbiAgZW5jb2RlU3RyaW5nKGlucHV0OiBzdHJpbmcsIHdlYlNhZmU/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxuICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcbiAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcbiAgICAgIHJldHVybiBidG9hKGlucHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZW5jb2RlQnl0ZUFycmF5KHN0cmluZ1RvQnl0ZUFycmF5KGlucHV0KSwgd2ViU2FmZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJhc2U2NC1kZWNvZGUgYSBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dCB0byBkZWNvZGUuXG4gICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGVcbiAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxuICAgKiBAcmV0dXJuIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGRlY29kZWQgdmFsdWUuXG4gICAqL1xuICBkZWNvZGVTdHJpbmcoaW5wdXQ6IHN0cmluZywgd2ViU2FmZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgLy8gU2hvcnRjdXQgZm9yIE1vemlsbGEgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnRcbiAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXG4gICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XG4gICAgICByZXR1cm4gYXRvYihpbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiBieXRlQXJyYXlUb1N0cmluZyh0aGlzLmRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJhc2U2NC1kZWNvZGUgYSBzdHJpbmcuXG4gICAqXG4gICAqIEluIGJhc2UtNjQgZGVjb2RpbmcsIGdyb3VwcyBvZiBmb3VyIGNoYXJhY3RlcnMgYXJlIGNvbnZlcnRlZCBpbnRvIHRocmVlXG4gICAqIGJ5dGVzLiAgSWYgdGhlIGVuY29kZXIgZGlkIG5vdCBhcHBseSBwYWRkaW5nLCB0aGUgaW5wdXQgbGVuZ3RoIG1heSBub3RcbiAgICogYmUgYSBtdWx0aXBsZSBvZiA0LlxuICAgKlxuICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBsYXN0IGdyb3VwIHdpbGwgaGF2ZSBmZXdlciB0aGFuIDQgY2hhcmFjdGVycywgYW5kXG4gICAqIHBhZGRpbmcgd2lsbCBiZSBpbmZlcnJlZC4gIElmIHRoZSBncm91cCBoYXMgb25lIG9yIHR3byBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzXG4gICAqIHRvIG9uZSBieXRlLiAgSWYgdGhlIGdyb3VwIGhhcyB0aHJlZSBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzIHRvIHR3byBieXRlcy5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0IElucHV0IHRvIGRlY29kZS5cbiAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZSB3ZWItc2FmZSBhbHBoYWJldC5cbiAgICogQHJldHVybiBieXRlcyByZXByZXNlbnRpbmcgdGhlIGRlY29kZWQgdmFsdWUuXG4gICAqL1xuICBkZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dDogc3RyaW5nLCB3ZWJTYWZlOiBib29sZWFuKTogbnVtYmVyW10ge1xuICAgIHRoaXMuaW5pdF8oKTtcblxuICAgIGNvbnN0IGNoYXJUb0J5dGVNYXAgPSB3ZWJTYWZlXG4gICAgICA/IHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfIVxuICAgICAgOiB0aGlzLmNoYXJUb0J5dGVNYXBfITtcblxuICAgIGNvbnN0IG91dHB1dDogbnVtYmVyW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyApIHtcbiAgICAgIGNvbnN0IGJ5dGUxID0gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSsrKV07XG5cbiAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgPCBpbnB1dC5sZW5ndGg7XG4gICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDA7XG4gICAgICArK2k7XG5cbiAgICAgIGNvbnN0IGhhdmVCeXRlMyA9IGkgPCBpbnB1dC5sZW5ndGg7XG4gICAgICBjb25zdCBieXRlMyA9IGhhdmVCeXRlMyA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xuICAgICAgKytpO1xuXG4gICAgICBjb25zdCBoYXZlQnl0ZTQgPSBpIDwgaW5wdXQubGVuZ3RoO1xuICAgICAgY29uc3QgYnl0ZTQgPSBoYXZlQnl0ZTQgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiA2NDtcbiAgICAgICsraTtcblxuICAgICAgaWYgKGJ5dGUxID09IG51bGwgfHwgYnl0ZTIgPT0gbnVsbCB8fCBieXRlMyA9PSBudWxsIHx8IGJ5dGU0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0Qnl0ZTEgPSAoYnl0ZTEgPDwgMikgfCAoYnl0ZTIgPj4gNCk7XG4gICAgICBvdXRwdXQucHVzaChvdXRCeXRlMSk7XG5cbiAgICAgIGlmIChieXRlMyAhPT0gNjQpIHtcbiAgICAgICAgY29uc3Qgb3V0Qnl0ZTIgPSAoKGJ5dGUyIDw8IDQpICYgMHhmMCkgfCAoYnl0ZTMgPj4gMik7XG4gICAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUyKTtcblxuICAgICAgICBpZiAoYnl0ZTQgIT09IDY0KSB7XG4gICAgICAgICAgY29uc3Qgb3V0Qnl0ZTMgPSAoKGJ5dGUzIDw8IDYpICYgMHhjMCkgfCBieXRlNDtcbiAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxuICAgKiBhY2Nlc3NpbmcgYW55IG9mIHRoZSBzdGF0aWMgbWFwIHZhcmlhYmxlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRfKCkge1xuICAgIGlmICghdGhpcy5ieXRlVG9DaGFyTWFwXykge1xuICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwXyA9IHt9O1xuICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwXyA9IHt9O1xuICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV8gPSB7fTtcbiAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfID0ge307XG5cbiAgICAgIC8vIFdlIHdhbnQgcXVpY2sgbWFwcGluZ3MgYmFjayBhbmQgZm9ydGgsIHNvIHdlIHByZWNvbXB1dGUgdHdvIG1hcHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRU5DT0RFRF9WQUxTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcF9baV0gPSB0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSk7XG4gICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5ieXRlVG9DaGFyTWFwX1tpXV0gPSBpO1xuICAgICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXSA9IHRoaXMuRU5DT0RFRF9WQUxTX1dFQlNBRkUuY2hhckF0KGkpO1xuICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXV0gPSBpO1xuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZyB3aGVuIGRlY29kaW5nIGFuZCBjb3JyZWN0bHkgZGVjb2RlIGJvdGggZW5jb2RpbmdzLlxuICAgICAgICBpZiAoaSA+PSB0aGlzLkVOQ09ERURfVkFMU19CQVNFLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSldID0gaTtcbiAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSldID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBVUkwtc2FmZSBiYXNlNjQgZW5jb2RpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGJhc2U2NEVuY29kZSA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHV0ZjhCeXRlcyA9IHN0cmluZ1RvQnl0ZUFycmF5KHN0cik7XG4gIHJldHVybiBiYXNlNjQuZW5jb2RlQnl0ZUFycmF5KHV0ZjhCeXRlcywgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFVSTC1zYWZlIGJhc2U2NCBlbmNvZGluZyAod2l0aG91dCBcIi5cIiBwYWRkaW5nIGluIHRoZSBlbmQpLlxuICogZS5nLiBVc2VkIGluIEpTT04gV2ViIFRva2VuIChKV1QpIHBhcnRzLlxuICovXG5leHBvcnQgY29uc3QgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBVc2UgYmFzZTY0dXJsIGVuY29kaW5nIGFuZCByZW1vdmUgcGFkZGluZyBpbiB0aGUgZW5kIChkb3QgY2hhcmFjdGVycykuXG4gIHJldHVybiBiYXNlNjRFbmNvZGUoc3RyKS5yZXBsYWNlKC9cXC4vZywgJycpO1xufTtcblxuLyoqXG4gKiBVUkwtc2FmZSBiYXNlNjQgZGVjb2RpbmdcbiAqXG4gKiBOT1RFOiBETyBOT1QgdXNlIHRoZSBnbG9iYWwgYXRvYigpIGZ1bmN0aW9uIC0gaXQgZG9lcyBOT1Qgc3VwcG9ydCB0aGVcbiAqIGJhc2U2NFVybCB2YXJpYW50IGVuY29kaW5nLlxuICpcbiAqIEBwYXJhbSBzdHIgVG8gYmUgZGVjb2RlZFxuICogQHJldHVybiBEZWNvZGVkIHJlc3VsdCwgaWYgcG9zc2libGVcbiAqL1xuZXhwb3J0IGNvbnN0IGJhc2U2NERlY29kZSA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICB0cnkge1xuICAgIHJldHVybiBiYXNlNjQuZGVjb2RlU3RyaW5nKHN0ciwgdHJ1ZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdiYXNlNjREZWNvZGUgZmFpbGVkOiAnLCBlKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBEbyBhIGRlZXAtY29weSBvZiBiYXNpYyBKYXZhU2NyaXB0IE9iamVjdHMgb3IgQXJyYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHk8VD4odmFsdWU6IFQpOiBUIHtcbiAgcmV0dXJuIGRlZXBFeHRlbmQodW5kZWZpbmVkLCB2YWx1ZSkgYXMgVDtcbn1cblxuLyoqXG4gKiBDb3B5IHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0IChyZWN1cnNpdmVseSBhbGxvd3MgZXh0ZW5zaW9uXG4gKiBvZiBPYmplY3RzIGFuZCBBcnJheXMpLiAgU2NhbGFyIHZhbHVlcyBpbiB0aGUgdGFyZ2V0IGFyZSBvdmVyLXdyaXR0ZW4uXG4gKiBJZiB0YXJnZXQgaXMgdW5kZWZpbmVkLCBhbiBvYmplY3Qgb2YgdGhlIGFwcHJvcHJpYXRlIHR5cGUgd2lsbCBiZSBjcmVhdGVkXG4gKiAoYW5kIHJldHVybmVkKS5cbiAqXG4gKiBXZSByZWN1cnNpdmVseSBjb3B5IGFsbCBjaGlsZCBwcm9wZXJ0aWVzIG9mIHBsYWluIE9iamVjdHMgaW4gdGhlIHNvdXJjZS0gc29cbiAqIHRoYXQgbmFtZXNwYWNlLSBsaWtlIGRpY3Rpb25hcmllcyBhcmUgbWVyZ2VkLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgdGFyZ2V0IGNhbiBiZSBhIGZ1bmN0aW9uLCBpbiB3aGljaCBjYXNlIHRoZSBwcm9wZXJ0aWVzIGluXG4gKiB0aGUgc291cmNlIE9iamVjdCBhcmUgY29waWVkIG9udG8gaXQgYXMgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhlIEZ1bmN0aW9uLlxuICpcbiAqIE5vdGU6IHdlIGRvbid0IG1lcmdlIF9fcHJvdG9fXyB0byBwcmV2ZW50IHByb3RvdHlwZSBwb2xsdXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFeHRlbmQodGFyZ2V0OiB1bmtub3duLCBzb3VyY2U6IHVua25vd24pOiB1bmtub3duIHtcbiAgaWYgKCEoc291cmNlIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBzd2l0Y2ggKHNvdXJjZS5jb25zdHJ1Y3Rvcikge1xuICAgIGNhc2UgRGF0ZTpcbiAgICAgIC8vIFRyZWF0IERhdGVzIGxpa2Ugc2NhbGFyczsgaWYgdGhlIHRhcmdldCBkYXRlIG9iamVjdCBoYWQgYW55IGNoaWxkXG4gICAgICAvLyBwcm9wZXJ0aWVzIC0gdGhleSB3aWxsIGJlIGxvc3QhXG4gICAgICBjb25zdCBkYXRlVmFsdWUgPSBzb3VyY2UgYXMgRGF0ZTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlVmFsdWUuZ2V0VGltZSgpKTtcblxuICAgIGNhc2UgT2JqZWN0OlxuICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhcmdldCA9IHt9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBBcnJheTpcbiAgICAgIC8vIEFsd2F5cyBjb3B5IHRoZSBhcnJheSBzb3VyY2UgYW5kIG92ZXJ3cml0ZSB0aGUgdGFyZ2V0LlxuICAgICAgdGFyZ2V0ID0gW107XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBOb3QgYSBwbGFpbiBPYmplY3QgLSB0cmVhdCBpdCBhcyBhIHNjYWxhci5cbiAgICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmb3IgKGNvbnN0IHByb3AgaW4gc291cmNlKSB7XG4gICAgLy8gdXNlIGlzVmFsaWRLZXkgdG8gZ3VhcmQgYWdhaW5zdCBwcm90b3R5cGUgcG9sbHV0aW9uLiBTZWUgaHR0cHM6Ly9zbnlrLmlvL3Z1bG4vU05ZSy1KUy1MT0RBU0gtNDUwMjAyXG4gICAgaWYgKCFzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkgfHwgIWlzVmFsaWRLZXkocHJvcCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICAodGFyZ2V0IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtwcm9wXSA9IGRlZXBFeHRlbmQoXG4gICAgICAodGFyZ2V0IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtwcm9wXSxcbiAgICAgIChzb3VyY2UgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW3Byb3BdXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGtleSAhPT0gJ19fcHJvdG9fXyc7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIFJldHVybnMgbmF2aWdhdG9yLnVzZXJBZ2VudCBzdHJpbmcgb3IgJycgaWYgaXQncyBub3QgZGVmaW5lZC5cbiAqIEByZXR1cm4gdXNlciBhZ2VudCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVBKCk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddID09PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yWyd1c2VyQWdlbnQnXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlY3QgQ29yZG92YSAvIFBob25lR2FwIC8gSW9uaWMgZnJhbWV3b3JrcyBvbiBhIG1vYmlsZSBkZXZpY2UuXG4gKlxuICogRGVsaWJlcmF0ZWx5IGRvZXMgbm90IHJlbHkgb24gY2hlY2tpbmcgYGZpbGU6Ly9gIFVSTHMgKGFzIHRoaXMgZmFpbHMgUGhvbmVHYXBcbiAqIGluIHRoZSBSaXBwbGUgZW11bGF0b3IpIG5vciBDb3Jkb3ZhIGBvbkRldmljZVJlYWR5YCwgd2hpY2ggd291bGQgbm9ybWFsbHlcbiAqIHdhaXQgZm9yIGEgY2FsbGJhY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZUNvcmRvdmEoKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvLyBAdHMtaWdub3JlIFNldHRpbmcgdXAgYW4gYnJvYWRseSBhcHBsaWNhYmxlIGluZGV4IHNpZ25hdHVyZSBmb3IgV2luZG93XG4gICAgLy8ganVzdCB0byBkZWFsIHdpdGggdGhpcyBjYXNlIHdvdWxkIHByb2JhYmx5IGJlIGEgYmFkIGlkZWEuXG4gICAgISEod2luZG93Wydjb3Jkb3ZhJ10gfHwgd2luZG93WydwaG9uZWdhcCddIHx8IHdpbmRvd1snUGhvbmVHYXAnXSkgJiZcbiAgICAvaW9zfGlwaG9uZXxpcG9kfGlwYWR8YW5kcm9pZHxibGFja2JlcnJ5fGllbW9iaWxlL2kudGVzdChnZXRVQSgpKVxuICApO1xufVxuXG4vKipcbiAqIERldGVjdCBOb2RlLmpzLlxuICpcbiAqIEByZXR1cm4gdHJ1ZSBpZiBOb2RlLmpzIGVudmlyb25tZW50IGlzIGRldGVjdGVkLlxuICovXG4vLyBOb2RlIGRldGVjdGlvbiBsb2dpYyBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vaWxpYWthbi9kZXRlY3Qtbm9kZS9cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUoKTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJ1xuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlY3QgQnJvd3NlciBFbnZpcm9ubWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZjtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYnJvd3NlciBleHRlbnNpb25zIChDaHJvbWUgYW5kIEZpcmVmb3ggYXQgbGVhc3QpLlxuICovXG5pbnRlcmZhY2UgQnJvd3NlclJ1bnRpbWUge1xuICBpZD86IHVua25vd247XG59XG5kZWNsYXJlIGNvbnN0IGNocm9tZTogeyBydW50aW1lPzogQnJvd3NlclJ1bnRpbWUgfTtcbmRlY2xhcmUgY29uc3QgYnJvd3NlcjogeyBydW50aW1lPzogQnJvd3NlclJ1bnRpbWUgfTtcbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXJFeHRlbnNpb24oKTogYm9vbGVhbiB7XG4gIGNvbnN0IHJ1bnRpbWUgPVxuICAgIHR5cGVvZiBjaHJvbWUgPT09ICdvYmplY3QnXG4gICAgICA/IGNocm9tZS5ydW50aW1lXG4gICAgICA6IHR5cGVvZiBicm93c2VyID09PSAnb2JqZWN0J1xuICAgICAgPyBicm93c2VyLnJ1bnRpbWVcbiAgICAgIDogdW5kZWZpbmVkO1xuICByZXR1cm4gdHlwZW9mIHJ1bnRpbWUgPT09ICdvYmplY3QnICYmIHJ1bnRpbWUuaWQgIT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBEZXRlY3QgUmVhY3QgTmF0aXZlLlxuICpcbiAqIEByZXR1cm4gdHJ1ZSBpZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yWydwcm9kdWN0J10gPT09ICdSZWFjdE5hdGl2ZSdcbiAgKTtcbn1cblxuLyoqIERldGVjdHMgRWxlY3Ryb24gYXBwcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZWN0cm9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdFbGVjdHJvbi8nKSA+PSAwO1xufVxuXG4vKiogRGV0ZWN0cyBJbnRlcm5ldCBFeHBsb3Jlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lFKCk6IGJvb2xlYW4ge1xuICBjb25zdCB1YSA9IGdldFVBKCk7XG4gIHJldHVybiB1YS5pbmRleE9mKCdNU0lFICcpID49IDAgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSA+PSAwO1xufVxuXG4vKiogRGV0ZWN0cyBVbml2ZXJzYWwgV2luZG93cyBQbGF0Zm9ybSBhcHBzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVVdQKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdNU0FwcEhvc3QvJykgPj0gMDtcbn1cblxuLyoqXG4gKiBEZXRlY3Qgd2hldGhlciB0aGUgY3VycmVudCBTREsgYnVpbGQgaXMgdGhlIE5vZGUgdmVyc2lvbi5cbiAqXG4gKiBAcmV0dXJuIHRydWUgaWYgaXQncyB0aGUgTm9kZSBTREsgYnVpbGQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVTZGsoKTogYm9vbGVhbiB7XG4gIHJldHVybiBDT05TVEFOVFMuTk9ERV9DTElFTlQgPT09IHRydWUgfHwgQ09OU1RBTlRTLk5PREVfQURNSU4gPT09IHRydWU7XG59XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gU2FmYXJpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgICFpc05vZGUoKSAmJlxuICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1NhZmFyaScpICYmXG4gICAgIW5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ0Nocm9tZScpXG4gICk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2hlY2tzIGlmIGluZGV4ZWREQiBpcyBzdXBwb3J0ZWQgYnkgY3VycmVudCBicm93c2VyL3NlcnZpY2Ugd29ya2VyIGNvbnRleHRcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luZGV4ZWREQkF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIGluZGV4ZWREQiA9PT0gJ29iamVjdCc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB2YWxpZGF0ZXMgYnJvd3Nlci9zdyBjb250ZXh0IGZvciBpbmRleGVkREIgYnkgb3BlbmluZyBhIGR1bW15IGluZGV4ZWREQiBkYXRhYmFzZSBhbmQgcmVqZWN0XG4gKiBpZiBlcnJvcnMgb2NjdXIgZHVyaW5nIHRoZSBkYXRhYmFzZSBvcGVuIG9wZXJhdGlvbi5cbiAqXG4gKiBAdGhyb3dzIGV4Y2VwdGlvbiBpZiBjdXJyZW50IGJyb3dzZXIvc3cgY29udGV4dCBjYW4ndCBydW4gaWRiLm9wZW4gKGV4OiBTYWZhcmkgaWZyYW1lLCBGaXJlZm94XG4gKiBwcml2YXRlIGJyb3dzaW5nKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHByZUV4aXN0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAgIGNvbnN0IERCX0NIRUNLX05BTUUgPVxuICAgICAgICAndmFsaWRhdGUtYnJvd3Nlci1jb250ZXh0LWZvci1pbmRleGVkZGItYW5hbHl0aWNzLW1vZHVsZSc7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gc2VsZi5pbmRleGVkREIub3BlbihEQl9DSEVDS19OQU1FKTtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICByZXF1ZXN0LnJlc3VsdC5jbG9zZSgpO1xuICAgICAgICAvLyBkZWxldGUgZGF0YWJhc2Ugb25seSB3aGVuIGl0IGRvZXNuJ3QgcHJlLWV4aXN0XG4gICAgICAgIGlmICghcHJlRXhpc3QpIHtcbiAgICAgICAgICBzZWxmLmluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShEQl9DSEVDS19OQU1FKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICBwcmVFeGlzdCA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcj8ubWVzc2FnZSB8fCAnJyk7XG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICpcbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyB3aGV0aGVyIGNvb2tpZSBpcyBlbmFibGVkIHdpdGhpbiBjdXJyZW50IGJyb3dzZXJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb29raWVzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8ICFuYXZpZ2F0b3IuY29va2llRW5hYmxlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgYGdsb2JhbFRoaXNgIG9iamVjdC5cbiAqIEByZXR1cm5zIHRoZSBgZ2xvYmFsVGhpc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWwoKTogdHlwZW9mIGdsb2JhbFRoaXMge1xuICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZ2xvYmFsO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0LicpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGJhc2U2NERlY29kZSB9IGZyb20gJy4vY3J5cHQnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsIH0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbi8qKlxuICogS2V5cyBmb3IgZXhwZXJpbWVudGFsIHByb3BlcnRpZXMgb24gdGhlIGBGaXJlYmFzZURlZmF1bHRzYCBvYmplY3QuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCB0eXBlIEV4cGVyaW1lbnRhbEtleSA9ICdhdXRoVG9rZW5TeW5jVVJMJyB8ICdhdXRoSWRUb2tlbk1heEFnZSc7XG5cbi8qKlxuICogQW4gb2JqZWN0IHRoYXQgY2FuIGJlIGluamVjdGVkIGludG8gdGhlIGVudmlyb25tZW50IGFzIF9fRklSRUJBU0VfREVGQVVMVFNfXyxcbiAqIGVpdGhlciBhcyBhIHByb3BlcnR5IG9mIGdsb2JhbFRoaXMsIGEgc2hlbGwgZW52aXJvbm1lbnQgdmFyaWFibGUsIG9yIGFcbiAqIGNvb2tpZS5cbiAqXG4gKiBUaGlzIG9iamVjdCBjYW4gYmUgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZSBhbmQgaW5pdGlhbGl6ZVxuICogYSBGaXJlYmFzZSBhcHAgYXMgd2VsbCBhcyBhbnkgZW11bGF0b3JzLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaXJlYmFzZURlZmF1bHRzIHtcbiAgY29uZmlnPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgZW11bGF0b3JIb3N0cz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIF9hdXRoVG9rZW5TeW5jVVJMPzogc3RyaW5nO1xuICBfYXV0aElkVG9rZW5NYXhBZ2U/OiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gTmVlZCBgdmFyYCBmb3IgdGhpcyB0byB3b3JrLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBfX0ZJUkVCQVNFX0RFRkFVTFRTX186IEZpcmViYXNlRGVmYXVsdHMgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IGdldERlZmF1bHRzRnJvbUdsb2JhbCA9ICgpOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkID0+XG4gIGdldEdsb2JhbCgpLl9fRklSRUJBU0VfREVGQVVMVFNfXztcblxuLyoqXG4gKiBBdHRlbXB0IHRvIHJlYWQgZGVmYXVsdHMgZnJvbSBhIEpTT04gc3RyaW5nIHByb3ZpZGVkIHRvXG4gKiBwcm9jZXNzLmVudi5fX0ZJUkVCQVNFX0RFRkFVTFRTX18gb3IgYSBKU09OIGZpbGUgd2hvc2UgcGF0aCBpcyBpblxuICogcHJvY2Vzcy5lbnYuX19GSVJFQkFTRV9ERUZBVUxUU19QQVRIX19cbiAqL1xuY29uc3QgZ2V0RGVmYXVsdHNGcm9tRW52VmFyaWFibGUgPSAoKTogRmlyZWJhc2VEZWZhdWx0cyB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHByb2Nlc3MuZW52ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkZWZhdWx0c0pzb25TdHJpbmcgPSBwcm9jZXNzLmVudi5fX0ZJUkVCQVNFX0RFRkFVTFRTX187XG4gIGlmIChkZWZhdWx0c0pzb25TdHJpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWZhdWx0c0pzb25TdHJpbmcpO1xuICB9XG59O1xuXG5jb25zdCBnZXREZWZhdWx0c0Zyb21Db29raWUgPSAoKTogRmlyZWJhc2VEZWZhdWx0cyB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBtYXRjaDtcbiAgdHJ5IHtcbiAgICBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaCgvX19GSVJFQkFTRV9ERUZBVUxUU19fPShbXjtdKykvKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFNvbWUgZW52aXJvbm1lbnRzIHN1Y2ggYXMgQW5ndWxhciBVbml2ZXJzYWwgU1NSIGhhdmUgYVxuICAgIC8vIGBkb2N1bWVudGAgb2JqZWN0IGJ1dCBlcnJvciBvbiBhY2Nlc3NpbmcgYGRvY3VtZW50LmNvb2tpZWAuXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRlY29kZWQgPSBtYXRjaCAmJiBiYXNlNjREZWNvZGUobWF0Y2hbMV0pO1xuICByZXR1cm4gZGVjb2RlZCAmJiBKU09OLnBhcnNlKGRlY29kZWQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3QuIEl0IGNoZWNrcyBpbiBvcmRlcjpcbiAqICgxKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgYXMgYSBwcm9wZXJ0eSBvZiBgZ2xvYmFsVGhpc2BcbiAqICgyKSBpZiBzdWNoIGFuIG9iamVjdCB3YXMgcHJvdmlkZWQgb24gYSBzaGVsbCBlbnZpcm9ubWVudCB2YXJpYWJsZVxuICogKDMpIGlmIHN1Y2ggYW4gb2JqZWN0IGV4aXN0cyBpbiBhIGNvb2tpZVxuICovXG5jb25zdCBnZXREZWZhdWx0cyA9ICgpOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2V0RGVmYXVsdHNGcm9tR2xvYmFsKCkgfHxcbiAgICAgIGdldERlZmF1bHRzRnJvbUVudlZhcmlhYmxlKCkgfHxcbiAgICAgIGdldERlZmF1bHRzRnJvbUNvb2tpZSgpXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qKlxuICAgICAqIENhdGNoLWFsbCBmb3IgYmVpbmcgdW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlXG4gICAgICogdG8gYW55IGVudmlyb25tZW50IGNhc2Ugd2UgaGF2ZSBub3QgYWNjb3VudGVkIGZvci4gTG9nIHRvXG4gICAgICogaW5mbyBpbnN0ZWFkIG9mIHN3YWxsb3dpbmcgc28gd2UgY2FuIGZpbmQgdGhlc2UgdW5rbm93biBjYXNlc1xuICAgICAqIGFuZCBhZGQgcGF0aHMgZm9yIHRoZW0gaWYgbmVlZGVkLlxuICAgICAqL1xuICAgIGNvbnNvbGUuaW5mbyhgVW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlIHRvOiAke2V9YCk7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgZW11bGF0b3IgaG9zdCBzdG9yZWQgaW4gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3RcbiAqIGZvciB0aGUgZ2l2ZW4gcHJvZHVjdC5cbiAqIEByZXR1cm5zIGEgVVJMIGhvc3QgZm9ybWF0dGVkIGxpa2UgYDEyNy4wLjAuMTo5OTk5YCBvciBgWzo6MV06NDAwMGAgaWYgYXZhaWxhYmxlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0RW11bGF0b3JIb3N0ID0gKFxuICBwcm9kdWN0TmFtZTogc3RyaW5nXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4gZ2V0RGVmYXVsdHMoKT8uZW11bGF0b3JIb3N0cz8uW3Byb2R1Y3ROYW1lXTtcblxuLyoqXG4gKiBSZXR1cm5zIGVtdWxhdG9yIGhvc3RuYW1lIGFuZCBwb3J0IHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdFxuICogZm9yIHRoZSBnaXZlbiBwcm9kdWN0LlxuICogQHJldHVybnMgYSBwYWlyIG9mIGhvc3RuYW1lIGFuZCBwb3J0IGxpa2UgYFtcIjo6MVwiLCA0MDAwXWAgaWYgYXZhaWxhYmxlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQgPSAoXG4gIHByb2R1Y3ROYW1lOiBzdHJpbmdcbik6IFtob3N0bmFtZTogc3RyaW5nLCBwb3J0OiBudW1iZXJdIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgaG9zdCA9IGdldERlZmF1bHRFbXVsYXRvckhvc3QocHJvZHVjdE5hbWUpO1xuICBpZiAoIWhvc3QpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHNlcGFyYXRvckluZGV4ID0gaG9zdC5sYXN0SW5kZXhPZignOicpOyAvLyBGaW5kaW5nIHRoZSBsYXN0IHNpbmNlIElQdjYgYWRkciBhbHNvIGhhcyBjb2xvbnMuXG4gIGlmIChzZXBhcmF0b3JJbmRleCA8PSAwIHx8IHNlcGFyYXRvckluZGV4ICsgMSA9PT0gaG9zdC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG9zdCAke2hvc3R9IHdpdGggbm8gc2VwYXJhdGUgaG9zdG5hbWUgYW5kIHBvcnQhYCk7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICBjb25zdCBwb3J0ID0gcGFyc2VJbnQoaG9zdC5zdWJzdHJpbmcoc2VwYXJhdG9ySW5kZXggKyAxKSwgMTApO1xuICBpZiAoaG9zdFswXSA9PT0gJ1snKSB7XG4gICAgLy8gQnJhY2tldC1xdW90ZWQgYFtpcHY2YWRkcl06cG9ydGAgPT4gcmV0dXJuIFwiaXB2NmFkZHJcIiAod2l0aG91dCBicmFja2V0cykuXG4gICAgcmV0dXJuIFtob3N0LnN1YnN0cmluZygxLCBzZXBhcmF0b3JJbmRleCAtIDEpLCBwb3J0XTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2hvc3Quc3Vic3RyaW5nKDAsIHNlcGFyYXRvckluZGV4KSwgcG9ydF07XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBGaXJlYmFzZSBhcHAgY29uZmlnIHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRBcHBDb25maWcgPSAoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZCA9PlxuICBnZXREZWZhdWx0cygpPy5jb25maWc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBleHBlcmltZW50YWwgc2V0dGluZyBvbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdCAocHJvcGVydGllc1xuICogcHJlZml4ZWQgYnkgXCJfXCIpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRFeHBlcmltZW50YWxTZXR0aW5nID0gPFQgZXh0ZW5kcyBFeHBlcmltZW50YWxLZXk+KFxuICBuYW1lOiBUXG4pOiBGaXJlYmFzZURlZmF1bHRzW2BfJHtUfWBdID0+XG4gIGdldERlZmF1bHRzKCk/LltgXyR7bmFtZX1gXSBhcyBGaXJlYmFzZURlZmF1bHRzW2BfJHtUfWBdO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjbGFzcyBEZWZlcnJlZDxSPiB7XG4gIHByb21pc2U6IFByb21pc2U8Uj47XG4gIHJlamVjdDogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCA9ICgpID0+IHt9O1xuICByZXNvbHZlOiAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmUgYXMgKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZDtcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0IGFzICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3VyIEFQSSBpbnRlcm5hbHMgYXJlIG5vdCBwcm9taXNlaWZpZWQgYW5kIGNhbm5vdCBiZWNhdXNlIG91ciBjYWxsYmFjayBBUElzIGhhdmUgc3VidGxlIGV4cGVjdGF0aW9ucyBhcm91bmRcbiAgICogaW52b2tpbmcgcHJvbWlzZXMgaW5saW5lLCB3aGljaCBQcm9taXNlcyBhcmUgZm9yYmlkZGVuIHRvIGRvLiBUaGlzIG1ldGhvZCBhY2NlcHRzIGFuIG9wdGlvbmFsIG5vZGUtc3R5bGUgY2FsbGJhY2tcbiAgICogYW5kIHJldHVybnMgYSBub2RlLXN0eWxlIGNhbGxiYWNrIHdoaWNoIHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIERlZmVycmVkJ3MgcHJvbWlzZS5cbiAgICovXG4gIHdyYXBDYWxsYmFjayhcbiAgICBjYWxsYmFjaz86IChlcnJvcj86IHVua25vd24sIHZhbHVlPzogdW5rbm93bikgPT4gdm9pZFxuICApOiAoZXJyb3I6IHVua25vd24sIHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCB7XG4gICAgcmV0dXJuIChlcnJvciwgdmFsdWU/KSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5yZWplY3QoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQXR0YWNoaW5nIG5vb3AgaGFuZGxlciBqdXN0IGluIGNhc2UgZGV2ZWxvcGVyIHdhc24ndCBleHBlY3RpbmdcbiAgICAgICAgLy8gcHJvbWlzZXNcbiAgICAgICAgdGhpcy5wcm9taXNlLmNhdGNoKCgpID0+IHt9KTtcblxuICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcbiAgICAgICAgLy8gYXNzZXJ0IHRoYXQgdGhlIHBhcmFtZXRlciBsZW5ndGggaXMgMVxuICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcgfSBmcm9tICcuL2NyeXB0JztcblxuLy8gRmlyZWJhc2UgQXV0aCB0b2tlbnMgY29udGFpbiBzbmFrZV9jYXNlIGNsYWltcyBmb2xsb3dpbmcgdGhlIEpXVCBzdGFuZGFyZCAvIGNvbnZlbnRpb24uXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cblxuZXhwb3J0IHR5cGUgRmlyZWJhc2VTaWduSW5Qcm92aWRlciA9XG4gIHwgJ2N1c3RvbSdcbiAgfCAnZW1haWwnXG4gIHwgJ3Bhc3N3b3JkJ1xuICB8ICdwaG9uZSdcbiAgfCAnYW5vbnltb3VzJ1xuICB8ICdnb29nbGUuY29tJ1xuICB8ICdmYWNlYm9vay5jb20nXG4gIHwgJ2dpdGh1Yi5jb20nXG4gIHwgJ3R3aXR0ZXIuY29tJ1xuICB8ICdtaWNyb3NvZnQuY29tJ1xuICB8ICdhcHBsZS5jb20nO1xuXG5pbnRlcmZhY2UgRmlyZWJhc2VJZFRva2VuIHtcbiAgLy8gQWx3YXlzIHNldCB0byBodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vUFJPSkVDVF9JRFxuICBpc3M6IHN0cmluZztcblxuICAvLyBBbHdheXMgc2V0IHRvIFBST0pFQ1RfSURcbiAgYXVkOiBzdHJpbmc7XG5cbiAgLy8gVGhlIHVzZXIncyB1bmlxdWUgSURcbiAgc3ViOiBzdHJpbmc7XG5cbiAgLy8gVGhlIHRva2VuIGlzc3VlIHRpbWUsIGluIHNlY29uZHMgc2luY2UgZXBvY2hcbiAgaWF0OiBudW1iZXI7XG5cbiAgLy8gVGhlIHRva2VuIGV4cGlyeSB0aW1lLCBub3JtYWxseSAnaWF0JyArIDM2MDBcbiAgZXhwOiBudW1iZXI7XG5cbiAgLy8gVGhlIHVzZXIncyB1bmlxdWUgSUQuIE11c3QgYmUgZXF1YWwgdG8gJ3N1YidcbiAgdXNlcl9pZDogc3RyaW5nO1xuXG4gIC8vIFRoZSB0aW1lIHRoZSB1c2VyIGF1dGhlbnRpY2F0ZWQsIG5vcm1hbGx5ICdpYXQnXG4gIGF1dGhfdGltZTogbnVtYmVyO1xuXG4gIC8vIFRoZSBzaWduIGluIHByb3ZpZGVyLCBvbmx5IHNldCB3aGVuIHRoZSBwcm92aWRlciBpcyAnYW5vbnltb3VzJ1xuICBwcm92aWRlcl9pZD86ICdhbm9ueW1vdXMnO1xuXG4gIC8vIFRoZSB1c2VyJ3MgcHJpbWFyeSBlbWFpbFxuICBlbWFpbD86IHN0cmluZztcblxuICAvLyBUaGUgdXNlcidzIGVtYWlsIHZlcmlmaWNhdGlvbiBzdGF0dXNcbiAgZW1haWxfdmVyaWZpZWQ/OiBib29sZWFuO1xuXG4gIC8vIFRoZSB1c2VyJ3MgcHJpbWFyeSBwaG9uZSBudW1iZXJcbiAgcGhvbmVfbnVtYmVyPzogc3RyaW5nO1xuXG4gIC8vIFRoZSB1c2VyJ3MgZGlzcGxheSBuYW1lXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgLy8gVGhlIHVzZXIncyBwcm9maWxlIHBob3RvIFVSTFxuICBwaWN0dXJlPzogc3RyaW5nO1xuXG4gIC8vIEluZm9ybWF0aW9uIG9uIGFsbCBpZGVudGl0aWVzIGxpbmtlZCB0byB0aGlzIHVzZXJcbiAgZmlyZWJhc2U6IHtcbiAgICAvLyBUaGUgcHJpbWFyeSBzaWduLWluIHByb3ZpZGVyXG4gICAgc2lnbl9pbl9wcm92aWRlcjogRmlyZWJhc2VTaWduSW5Qcm92aWRlcjtcblxuICAgIC8vIEEgbWFwIG9mIHByb3ZpZGVycyB0byB0aGUgdXNlcidzIGxpc3Qgb2YgdW5pcXVlIGlkZW50aWZpZXJzIGZyb21cbiAgICAvLyBlYWNoIHByb3ZpZGVyXG4gICAgaWRlbnRpdGllcz86IHsgW3Byb3ZpZGVyIGluIEZpcmViYXNlU2lnbkluUHJvdmlkZXJdPzogc3RyaW5nW10gfTtcbiAgfTtcblxuICAvLyBDdXN0b20gY2xhaW1zIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gIFtjbGFpbTogc3RyaW5nXTogdW5rbm93bjtcblxuICB1aWQ/OiBuZXZlcjsgLy8gVHJ5IHRvIGNhdGNoIGEgY29tbW9uIG1pc3Rha2Ugb2YgXCJ1aWRcIiAoc2hvdWxkIGJlIFwic3ViXCIgaW5zdGVhZCkuXG59XG5cbmV4cG9ydCB0eXBlIEVtdWxhdG9yTW9ja1Rva2VuT3B0aW9ucyA9ICh7IHVzZXJfaWQ6IHN0cmluZyB9IHwgeyBzdWI6IHN0cmluZyB9KSAmXG4gIFBhcnRpYWw8RmlyZWJhc2VJZFRva2VuPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vY2tVc2VyVG9rZW4oXG4gIHRva2VuOiBFbXVsYXRvck1vY2tUb2tlbk9wdGlvbnMsXG4gIHByb2plY3RJZD86IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgaWYgKHRva2VuLnVpZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdUaGUgXCJ1aWRcIiBmaWVsZCBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGJ5IG1vY2tVc2VyVG9rZW4uIFBsZWFzZSB1c2UgXCJzdWJcIiBpbnN0ZWFkIGZvciBGaXJlYmFzZSBBdXRoIFVzZXIgSUQuJ1xuICAgICk7XG4gIH1cbiAgLy8gVW5zZWN1cmVkIEpXVHMgdXNlIFwibm9uZVwiIGFzIHRoZSBhbGdvcml0aG0uXG4gIGNvbnN0IGhlYWRlciA9IHtcbiAgICBhbGc6ICdub25lJyxcbiAgICB0eXBlOiAnSldUJ1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SWQgfHwgJ2RlbW8tcHJvamVjdCc7XG4gIGNvbnN0IGlhdCA9IHRva2VuLmlhdCB8fCAwO1xuICBjb25zdCBzdWIgPSB0b2tlbi5zdWIgfHwgdG9rZW4udXNlcl9pZDtcbiAgaWYgKCFzdWIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2NrVXNlclRva2VuIG11c3QgY29udGFpbiAnc3ViJyBvciAndXNlcl9pZCcgZmllbGQhXCIpO1xuICB9XG5cbiAgY29uc3QgcGF5bG9hZDogRmlyZWJhc2VJZFRva2VuID0ge1xuICAgIC8vIFNldCBhbGwgcmVxdWlyZWQgZmllbGRzIHRvIGRlY2VudCBkZWZhdWx0c1xuICAgIGlzczogYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS8ke3Byb2plY3R9YCxcbiAgICBhdWQ6IHByb2plY3QsXG4gICAgaWF0LFxuICAgIGV4cDogaWF0ICsgMzYwMCxcbiAgICBhdXRoX3RpbWU6IGlhdCxcbiAgICBzdWIsXG4gICAgdXNlcl9pZDogc3ViLFxuICAgIGZpcmViYXNlOiB7XG4gICAgICBzaWduX2luX3Byb3ZpZGVyOiAnY3VzdG9tJyxcbiAgICAgIGlkZW50aXRpZXM6IHt9XG4gICAgfSxcblxuICAgIC8vIE92ZXJyaWRlIHdpdGggdXNlciBvcHRpb25zXG4gICAgLi4udG9rZW5cbiAgfTtcblxuICAvLyBVbnNlY3VyZWQgSldUcyB1c2UgdGhlIGVtcHR5IHN0cmluZyBhcyBhIHNpZ25hdHVyZS5cbiAgY29uc3Qgc2lnbmF0dXJlID0gJyc7XG4gIHJldHVybiBbXG4gICAgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkoaGVhZGVyKSksXG4gICAgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpLFxuICAgIHNpZ25hdHVyZVxuICBdLmpvaW4oJy4nKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFN0YW5kYXJkaXplZCBGaXJlYmFzZSBFcnJvci5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIC8vIFR5cGVzY3JpcHQgc3RyaW5nIGxpdGVyYWxzIGZvciB0eXBlLXNhZmUgY29kZXNcbiAqICAgdHlwZSBFcnIgPVxuICogICAgICd1bmtub3duJyB8XG4gKiAgICAgJ29iamVjdC1ub3QtZm91bmQnXG4gKiAgICAgO1xuICpcbiAqICAgLy8gQ2xvc3VyZSBlbnVtIGZvciB0eXBlLXNhZmUgZXJyb3IgY29kZXNcbiAqICAgLy8gYXQtZW51bSB7c3RyaW5nfVxuICogICB2YXIgRXJyID0ge1xuICogICAgIFVOS05PV046ICd1bmtub3duJyxcbiAqICAgICBPQkpFQ1RfTk9UX0ZPVU5EOiAnb2JqZWN0LW5vdC1mb3VuZCcsXG4gKiAgIH1cbiAqXG4gKiAgIGxldCBlcnJvcnM6IE1hcDxFcnIsIHN0cmluZz4gPSB7XG4gKiAgICAgJ2dlbmVyaWMtZXJyb3InOiBcIlVua25vd24gZXJyb3JcIixcbiAqICAgICAnZmlsZS1ub3QtZm91bmQnOiBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IHskZmlsZX1cIixcbiAqICAgfTtcbiAqXG4gKiAgIC8vIFR5cGUtc2FmZSBmdW5jdGlvbiAtIG11c3QgcGFzcyBhIHZhbGlkIGVycm9yIGNvZGUgYXMgcGFyYW0uXG4gKiAgIGxldCBlcnJvciA9IG5ldyBFcnJvckZhY3Rvcnk8RXJyPignc2VydmljZScsICdTZXJ2aWNlJywgZXJyb3JzKTtcbiAqXG4gKiAgIC4uLlxuICogICB0aHJvdyBlcnJvci5jcmVhdGUoRXJyLkdFTkVSSUMpO1xuICogICAuLi5cbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5GSUxFX05PVF9GT1VORCwgeydmaWxlJzogZmlsZU5hbWV9KTtcbiAqICAgLi4uXG4gKiAgIC8vIFNlcnZpY2U6IENvdWxkIG5vdCBmaWxlIGZpbGU6IGZvby50eHQgKHNlcnZpY2UvZmlsZS1ub3QtZm91bmQpLlxuICpcbiAqICAgY2F0Y2ggKGUpIHtcbiAqICAgICBhc3NlcnQoZS5tZXNzYWdlID09PSBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IGZvby50eHQuXCIpO1xuICogICAgIGlmICgoZSBhcyBGaXJlYmFzZUVycm9yKT8uY29kZSA9PT0gJ3NlcnZpY2UvZmlsZS1ub3QtZm91bmQnKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCByZWFkIGZpbGU6IFwiICsgZVsnZmlsZSddKTtcbiAqICAgICB9XG4gKiAgIH1cbiAqL1xuXG5leHBvcnQgdHlwZSBFcnJvck1hcDxFcnJvckNvZGUgZXh0ZW5kcyBzdHJpbmc+ID0ge1xuICByZWFkb25seSBbSyBpbiBFcnJvckNvZGVdOiBzdHJpbmc7XG59O1xuXG5jb25zdCBFUlJPUl9OQU1FID0gJ0ZpcmViYXNlRXJyb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ0xpa2Uge1xuICB0b1N0cmluZygpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JEYXRhIHtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuLy8gQmFzZWQgb24gY29kZSBmcm9tOlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjQ3VzdG9tX0Vycm9yX1R5cGVzXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyoqIFRoZSBjdXN0b20gbmFtZSBmb3IgYWxsIEZpcmViYXNlRXJyb3JzLiAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmcgPSBFUlJPUl9OQU1FO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBUaGUgZXJyb3IgY29kZSBmb3IgdGhpcyBlcnJvci4gKi9cbiAgICByZWFkb25seSBjb2RlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIC8qKiBDdXN0b20gZGF0YSBmb3IgdGhpcyBlcnJvci4gKi9cbiAgICBwdWJsaWMgY3VzdG9tRGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgLy8gRml4IEZvciBFUzVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBGaXJlYmFzZUVycm9yLnByb3RvdHlwZSk7XG5cbiAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93bi5cbiAgICAvLyBPbmx5IGF2YWlsYWJsZSBvbiBWOC5cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEVycm9yRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVycm9yRmFjdG9yeTxcbiAgRXJyb3JDb2RlIGV4dGVuZHMgc3RyaW5nLFxuICBFcnJvclBhcmFtcyBleHRlbmRzIHsgcmVhZG9ubHkgW0sgaW4gRXJyb3JDb2RlXT86IEVycm9yRGF0YSB9ID0ge31cbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2U6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlcnJvcnM6IEVycm9yTWFwPEVycm9yQ29kZT5cbiAgKSB7fVxuXG4gIGNyZWF0ZTxLIGV4dGVuZHMgRXJyb3JDb2RlPihcbiAgICBjb2RlOiBLLFxuICAgIC4uLmRhdGE6IEsgZXh0ZW5kcyBrZXlvZiBFcnJvclBhcmFtcyA/IFtFcnJvclBhcmFtc1tLXV0gOiBbXVxuICApOiBGaXJlYmFzZUVycm9yIHtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gKGRhdGFbMF0gYXMgRXJyb3JEYXRhKSB8fCB7fTtcbiAgICBjb25zdCBmdWxsQ29kZSA9IGAke3RoaXMuc2VydmljZX0vJHtjb2RlfWA7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmVycm9yc1tjb2RlXTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSB0ZW1wbGF0ZSA/IHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgY3VzdG9tRGF0YSkgOiAnRXJyb3InO1xuICAgIC8vIFNlcnZpY2UgTmFtZTogRXJyb3IgbWVzc2FnZSAoc2VydmljZS9jb2RlKS5cbiAgICBjb25zdCBmdWxsTWVzc2FnZSA9IGAke3RoaXMuc2VydmljZU5hbWV9OiAke21lc3NhZ2V9ICgke2Z1bGxDb2RlfSkuYDtcblxuICAgIGNvbnN0IGVycm9yID0gbmV3IEZpcmViYXNlRXJyb3IoZnVsbENvZGUsIGZ1bGxNZXNzYWdlLCBjdXN0b21EYXRhKTtcblxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZywgZGF0YTogRXJyb3JEYXRhKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoUEFUVEVSTiwgKF8sIGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldO1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gU3RyaW5nKHZhbHVlKSA6IGA8JHtrZXl9Pz5gO1xuICB9KTtcbn1cblxuY29uc3QgUEFUVEVSTiA9IC9cXHtcXCQoW159XSspfS9nO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogRXZhbHVhdGVzIGEgSlNPTiBzdHJpbmcgaW50byBhIGphdmFzY3JpcHQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQSBzdHJpbmcgY29udGFpbmluZyBKU09OLlxuICogQHJldHVybiB7Kn0gVGhlIGphdmFzY3JpcHQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIEpTT04uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqc29uRXZhbChzdHI6IHN0cmluZyk6IHVua25vd24ge1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgSlNPTiByZXByZXNlbnRpbmcgYSBqYXZhc2NyaXB0IG9iamVjdC5cbiAqIEBwYXJhbSB7Kn0gZGF0YSBKYXZhc2NyaXB0IG9iamVjdCB0byBiZSBzdHJpbmdpZmllZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEpTT04gY29udGVudHMgb2YgdGhlIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeShkYXRhOiB1bmtub3duKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGJhc2U2NERlY29kZSB9IGZyb20gJy4vY3J5cHQnO1xuaW1wb3J0IHsganNvbkV2YWwgfSBmcm9tICcuL2pzb24nO1xuXG5pbnRlcmZhY2UgQ2xhaW1zIHtcbiAgW2tleTogc3RyaW5nXToge307XG59XG5cbmludGVyZmFjZSBEZWNvZGVkVG9rZW4ge1xuICBoZWFkZXI6IG9iamVjdDtcbiAgY2xhaW1zOiBDbGFpbXM7XG4gIGRhdGE6IG9iamVjdDtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGludG8gY29uc3RpdHVlbnQgcGFydHMuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gd2l0aCBpbnZhbGlkIC8gaW5jb21wbGV0ZSBjbGFpbXMgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlID0gZnVuY3Rpb24gKHRva2VuOiBzdHJpbmcpOiBEZWNvZGVkVG9rZW4ge1xuICBsZXQgaGVhZGVyID0ge30sXG4gICAgY2xhaW1zOiBDbGFpbXMgPSB7fSxcbiAgICBkYXRhID0ge30sXG4gICAgc2lnbmF0dXJlID0gJyc7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XG4gICAgaGVhZGVyID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzBdKSB8fCAnJykgYXMgb2JqZWN0O1xuICAgIGNsYWltcyA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1sxXSkgfHwgJycpIGFzIENsYWltcztcbiAgICBzaWduYXR1cmUgPSBwYXJ0c1syXTtcbiAgICBkYXRhID0gY2xhaW1zWydkJ10gfHwge307XG4gICAgZGVsZXRlIGNsYWltc1snZCddO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyLFxuICAgIGNsYWltcyxcbiAgICBkYXRhLFxuICAgIHNpZ25hdHVyZVxuICB9O1xufTtcblxuaW50ZXJmYWNlIERlY29kZWRUb2tlbiB7XG4gIGhlYWRlcjogb2JqZWN0O1xuICBjbGFpbXM6IENsYWltcztcbiAgZGF0YTogb2JqZWN0O1xuICBzaWduYXR1cmU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIHRpbWUtYmFzZWQgY2xhaW1zLiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZVxuICogdG9rZW4gaXMgd2l0aGluIHRoZSB0aW1lIHdpbmRvdyBhdXRob3JpemVkIGJ5IHRoZSAnbmJmJyAobm90LWJlZm9yZSkgYW5kICdpYXQnIChpc3N1ZWQtYXQpIGNsYWltcy5cbiAqXG4gKiBOb3RlczpcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRUaW1lc3RhbXAgPSBmdW5jdGlvbiAodG9rZW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBjbGFpbXM6IENsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xuICBjb25zdCBub3c6IG51bWJlciA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgbGV0IHZhbGlkU2luY2U6IG51bWJlciA9IDAsXG4gICAgdmFsaWRVbnRpbDogbnVtYmVyID0gMDtcblxuICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCduYmYnKSkge1xuICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snbmJmJ10gYXMgbnVtYmVyO1xuICAgIH0gZWxzZSBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xuICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snaWF0J10gYXMgbnVtYmVyO1xuICAgIH1cblxuICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSB7XG4gICAgICB2YWxpZFVudGlsID0gY2xhaW1zWydleHAnXSBhcyBudW1iZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRva2VuIHdpbGwgZXhwaXJlIGFmdGVyIDI0aCBieSBkZWZhdWx0XG4gICAgICB2YWxpZFVudGlsID0gdmFsaWRTaW5jZSArIDg2NDAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgISFub3cgJiZcbiAgICAhIXZhbGlkU2luY2UgJiZcbiAgICAhIXZhbGlkVW50aWwgJiZcbiAgICBub3cgPj0gdmFsaWRTaW5jZSAmJlxuICAgIG5vdyA8PSB2YWxpZFVudGlsXG4gICk7XG59O1xuXG4vKipcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgcmV0dXJucyBpdHMgaXNzdWVkIGF0IHRpbWUgaWYgdmFsaWQsIG51bGwgb3RoZXJ3aXNlLlxuICpcbiAqIE5vdGVzOlxuICogLSBNYXkgcmV0dXJuIG51bGwgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgaXNzdWVkQXRUaW1lID0gZnVuY3Rpb24gKHRva2VuOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgY2xhaW1zOiBDbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcbiAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0JykpIHtcbiAgICByZXR1cm4gY2xhaW1zWydpYXQnXSBhcyBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgZm9ybWF0LiBFeHBlY3RzIGEgdmFsaWQgaXNzdWVkLWF0IHRpbWUuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRm9ybWF0ID0gZnVuY3Rpb24gKHRva2VuOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgZGVjb2RlZCA9IGRlY29kZSh0b2tlbiksXG4gICAgY2xhaW1zID0gZGVjb2RlZC5jbGFpbXM7XG5cbiAgcmV0dXJuICEhY2xhaW1zICYmIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0Jyk7XG59O1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIHBlZXIgaW50byBhbiBhdXRoIHRva2VuIGFuZCBkZXRlcm1pbmUgaWYgaXQncyBhbiBhZG1pbiBhdXRoIHRva2VuIGJ5IGxvb2tpbmcgYXQgdGhlIGNsYWltcyBwb3J0aW9uLlxuICpcbiAqIE5vdGVzOlxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgaXNBZG1pbiA9IGZ1bmN0aW9uICh0b2tlbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGNsYWltczogQ2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XG4gIHJldHVybiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXNbJ2FkbWluJ10gPT09IHRydWU7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluczxUIGV4dGVuZHMgb2JqZWN0PihvYmo6IFQsIGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZUdldDxUIGV4dGVuZHMgb2JqZWN0LCBLIGV4dGVuZHMga2V5b2YgVD4oXG4gIG9iajogVCxcbiAga2V5OiBLXG4pOiBUW0tdIHwgdW5kZWZpbmVkIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmo6IG9iamVjdCk6IG9iaiBpcyB7fSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwPEsgZXh0ZW5kcyBzdHJpbmcsIFYsIFU+KFxuICBvYmo6IHsgW2tleSBpbiBLXTogViB9LFxuICBmbjogKHZhbHVlOiBWLCBrZXk6IEssIG9iajogeyBba2V5IGluIEtdOiBWIH0pID0+IFUsXG4gIGNvbnRleHRPYmo/OiB1bmtub3duXG4pOiB7IFtrZXkgaW4gS106IFUgfSB7XG4gIGNvbnN0IHJlczogUGFydGlhbDx7IFtrZXkgaW4gS106IFUgfT4gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gZm4uY2FsbChjb250ZXh0T2JqLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzIGFzIHsgW2tleSBpbiBLXTogVSB9O1xufVxuXG4vKipcbiAqIERlZXAgZXF1YWwgdHdvIG9iamVjdHMuIFN1cHBvcnQgQXJyYXlzIGFuZCBPYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsKGE6IG9iamVjdCwgYjogb2JqZWN0KTogYm9vbGVhbiB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICBmb3IgKGNvbnN0IGsgb2YgYUtleXMpIHtcbiAgICBpZiAoIWJLZXlzLmluY2x1ZGVzKGspKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYVByb3AgPSAoYSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgY29uc3QgYlByb3AgPSAoYiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaWYgKGlzT2JqZWN0KGFQcm9wKSAmJiBpc09iamVjdChiUHJvcCkpIHtcbiAgICAgIGlmICghZGVlcEVxdWFsKGFQcm9wLCBiUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYVByb3AgIT09IGJQcm9wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBrIG9mIGJLZXlzKSB7XG4gICAgaWYgKCFhS2V5cy5pbmNsdWRlcyhrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodGhpbmc6IHVua25vd24pOiB0aGluZyBpcyBvYmplY3Qge1xuICByZXR1cm4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jztcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJy4vZGVmZXJyZWQnO1xuXG4vKipcbiAqIFJlamVjdHMgaWYgdGhlIGdpdmVuIHByb21pc2UgZG9lc24ndCByZXNvbHZlIGluIHRpbWVJbk1TIG1pbGxpc2Vjb25kcy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwcm9taXNlOiBQcm9taXNlPFQ+LFxuICB0aW1lSW5NUyA9IDIwMDBcbik6IFByb21pc2U8VD4ge1xuICBjb25zdCBkZWZlcnJlZFByb21pc2UgPSBuZXcgRGVmZXJyZWQ8VD4oKTtcbiAgc2V0VGltZW91dCgoKSA9PiBkZWZlcnJlZFByb21pc2UucmVqZWN0KCd0aW1lb3V0IScpLCB0aW1lSW5NUyk7XG4gIHByb21pc2UudGhlbihkZWZlcnJlZFByb21pc2UucmVzb2x2ZSwgZGVmZXJyZWRQcm9taXNlLnJlamVjdCk7XG4gIHJldHVybiBkZWZlcnJlZFByb21pc2UucHJvbWlzZTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBxdWVyeXN0cmluZy1mb3JtYXR0ZWQgc3RyaW5nIChlLmcuICZhcmc9dmFsJmFyZzI9dmFsMikgZnJvbSBhXG4gKiBwYXJhbXMgb2JqZWN0IChlLmcuIHthcmc6ICd2YWwnLCBhcmcyOiAndmFsMid9KVxuICogTm90ZTogWW91IG11c3QgcHJlcGVuZCBpdCB3aXRoID8gd2hlbiBhZGRpbmcgaXQgdG8gYSBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeXN0cmluZ1BhcmFtczoge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG59KTogc3RyaW5nIHtcbiAgY29uc3QgcGFyYW1zID0gW107XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHF1ZXJ5c3RyaW5nUGFyYW1zKSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaChhcnJheVZhbCA9PiB7XG4gICAgICAgIHBhcmFtcy5wdXNoKFxuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFycmF5VmFsKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJhbXMubGVuZ3RoID8gJyYnICsgcGFyYW1zLmpvaW4oJyYnKSA6ICcnO1xufVxuXG4vKipcbiAqIERlY29kZXMgYSBxdWVyeXN0cmluZyAoZS5nLiA/YXJnPXZhbCZhcmcyPXZhbDIpIGludG8gYSBwYXJhbXMgb2JqZWN0XG4gKiAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5c3RyaW5nRGVjb2RlKHF1ZXJ5c3RyaW5nOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgY29uc3Qgb2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGNvbnN0IHRva2VucyA9IHF1ZXJ5c3RyaW5nLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKTtcblxuICB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSB0b2tlbi5zcGxpdCgnPScpO1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHRoZSBxdWVyeSBzdHJpbmcgcGFydCBvZiBhIFVSTCwgaW5jbHVkaW5nIHRoZSBsZWFkaW5nIHF1ZXN0aW9uIG1hcmsgKGlmIHByZXNlbnQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5c3RyaW5nKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgcXVlcnlTdGFydCA9IHVybC5pbmRleE9mKCc/Jyk7XG4gIGlmICghcXVlcnlTdGFydCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBmcmFnbWVudFN0YXJ0ID0gdXJsLmluZGV4T2YoJyMnLCBxdWVyeVN0YXJ0KTtcbiAgcmV0dXJuIHVybC5zdWJzdHJpbmcoXG4gICAgcXVlcnlTdGFydCxcbiAgICBmcmFnbWVudFN0YXJ0ID4gMCA/IGZyYWdtZW50U3RhcnQgOiB1bmRlZmluZWRcbiAgKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoLlxuICogVmFyaWFibGUgbmFtZXMgZm9sbG93IHRoZSBub3RhdGlvbiBpbiBGSVBTIFBVQiAxODAtMzpcbiAqIGh0dHA6Ly9jc3JjLm5pc3QuZ292L3B1YmxpY2F0aW9ucy9maXBzL2ZpcHMxODAtMy9maXBzMTgwLTNfZmluYWwucGRmLlxuICpcbiAqIFVzYWdlOlxuICogICB2YXIgc2hhMSA9IG5ldyBzaGExKCk7XG4gKiAgIHNoYTEudXBkYXRlKGJ5dGVzKTtcbiAqICAgdmFyIGhhc2ggPSBzaGExLmRpZ2VzdCgpO1xuICpcbiAqIFBlcmZvcm1hbmNlOlxuICogICBDaHJvbWUgMjM6ICAgfjQwMCBNYml0L3NcbiAqICAgRmlyZWZveCAxNjogIH4yNTAgTWJpdC9zXG4gKlxuICovXG5cbi8qKlxuICogU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoIGNvbnN0cnVjdG9yLlxuICpcbiAqIFRoZSBwcm9wZXJ0aWVzIGRlY2xhcmVkIGhlcmUgYXJlIGRpc2N1c3NlZCBpbiB0aGUgYWJvdmUgYWxnb3JpdGhtIGRvY3VtZW50LlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZmluYWxcbiAqIEBzdHJ1Y3RcbiAqL1xuZXhwb3J0IGNsYXNzIFNoYTEge1xuICAvKipcbiAgICogSG9sZHMgdGhlIHByZXZpb3VzIHZhbHVlcyBvZiBhY2N1bXVsYXRlZCB2YXJpYWJsZXMgYS1lIGluIHRoZSBjb21wcmVzc19cbiAgICogZnVuY3Rpb24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGNoYWluXzogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQSBidWZmZXIgaG9sZGluZyB0aGUgcGFydGlhbGx5IGNvbXB1dGVkIGhhc2ggcmVzdWx0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBidWZfOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiA4MCBieXRlcywgZWFjaCBhIHBhcnQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgaGFzaGVkLiAgUmVmZXJyZWQgdG9cbiAgICogYXMgdGhlIG1lc3NhZ2Ugc2NoZWR1bGUgaW4gdGhlIGRvY3MuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIFdfOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyBkYXRhIG5lZWRlZCB0byBwYWQgbWVzc2FnZXMgbGVzcyB0aGFuIDY0IGJ5dGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBwYWRfOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgKi9cbiAgcHJpdmF0ZSBpbmJ1Zl86IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlIHtudW1iZXJ9XG4gICAqL1xuICBwcml2YXRlIHRvdGFsXzogbnVtYmVyID0gMDtcblxuICBibG9ja1NpemU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJsb2NrU2l6ZSA9IDUxMiAvIDg7XG5cbiAgICB0aGlzLnBhZF9bMF0gPSAxMjg7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJsb2NrU2l6ZTsgKytpKSB7XG4gICAgICB0aGlzLnBhZF9baV0gPSAwO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhaW5fWzBdID0gMHg2NzQ1MjMwMTtcbiAgICB0aGlzLmNoYWluX1sxXSA9IDB4ZWZjZGFiODk7XG4gICAgdGhpcy5jaGFpbl9bMl0gPSAweDk4YmFkY2ZlO1xuICAgIHRoaXMuY2hhaW5fWzNdID0gMHgxMDMyNTQ3NjtcbiAgICB0aGlzLmNoYWluX1s0XSA9IDB4YzNkMmUxZjA7XG5cbiAgICB0aGlzLmluYnVmXyA9IDA7XG4gICAgdGhpcy50b3RhbF8gPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIGNvbXByZXNzIGhlbHBlciBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGJ1ZiBCbG9jayB0byBjb21wcmVzcy5cbiAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgb2YgdGhlIGJsb2NrIGluIHRoZSBidWZmZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb21wcmVzc18oYnVmOiBudW1iZXJbXSB8IFVpbnQ4QXJyYXkgfCBzdHJpbmcsIG9mZnNldD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IFcgPSB0aGlzLldfO1xuXG4gICAgLy8gZ2V0IDE2IGJpZyBlbmRpYW4gd29yZHNcbiAgICBpZiAodHlwZW9mIGJ1ZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAvLyBUT0RPKHVzZXIpOiBbYnVnIDgxNDAxMjJdIFJlY2VudCB2ZXJzaW9ucyBvZiBTYWZhcmkgZm9yIE1hYyBPUyBhbmQgaU9TXG4gICAgICAgIC8vIGhhdmUgYSBidWcgdGhhdCB0dXJucyB0aGUgcG9zdC1pbmNyZW1lbnQgKysgb3BlcmF0b3IgaW50byBwcmUtaW5jcmVtZW50XG4gICAgICAgIC8vIGR1cmluZyBKSVQgY29tcGlsYXRpb24uICBXZSBoYXZlIGNvZGUgdGhhdCBkZXBlbmRzIGhlYXZpbHkgb24gU0hBLTEgZm9yXG4gICAgICAgIC8vIGNvcnJlY3RuZXNzIGFuZCB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIGJ1Zywgc28gSSd2ZSByZW1vdmVkIGFsbCB1c2VzXG4gICAgICAgIC8vIG9mIHBvc3QtaW5jcmVtZW50ICsrIGluIHdoaWNoIHRoZSByZXN1bHQgdmFsdWUgaXMgdXNlZC4gIFdlIGNhbiByZXZlcnRcbiAgICAgICAgLy8gdGhpcyBjaGFuZ2Ugb25jZSB0aGUgU2FmYXJpIGJ1Z1xuICAgICAgICAvLyAoaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEwOTAzNikgaGFzIGJlZW4gZml4ZWQgYW5kXG4gICAgICAgIC8vIG1vc3QgY2xpZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cbiAgICAgICAgV1tpXSA9XG4gICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCkgPDwgMjQpIHxcbiAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMSkgPDwgMTYpIHxcbiAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMikgPDwgOCkgfFxuICAgICAgICAgIGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDMpO1xuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIFdbaV0gPVxuICAgICAgICAgIChidWZbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICAgICAgIChidWZbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICAgICAoYnVmW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgICAgICBidWZbb2Zmc2V0ICsgM107XG4gICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV4cGFuZCB0byA4MCB3b3Jkc1xuICAgIGZvciAobGV0IGkgPSAxNjsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xuICAgICAgV1tpXSA9ICgodCA8PCAxKSB8ICh0ID4+PiAzMSkpICYgMHhmZmZmZmZmZjtcbiAgICB9XG5cbiAgICBsZXQgYSA9IHRoaXMuY2hhaW5fWzBdO1xuICAgIGxldCBiID0gdGhpcy5jaGFpbl9bMV07XG4gICAgbGV0IGMgPSB0aGlzLmNoYWluX1syXTtcbiAgICBsZXQgZCA9IHRoaXMuY2hhaW5fWzNdO1xuICAgIGxldCBlID0gdGhpcy5jaGFpbl9bNF07XG4gICAgbGV0IGYsIGs7XG5cbiAgICAvLyBUT0RPKHVzZXIpOiBUcnkgdG8gdW5yb2xsIHRoaXMgbG9vcCB0byBzcGVlZCB1cCB0aGUgY29tcHV0YXRpb24uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBpZiAoaSA8IDQwKSB7XG4gICAgICAgIGlmIChpIDwgMjApIHtcbiAgICAgICAgICBmID0gZCBeIChiICYgKGMgXiBkKSk7XG4gICAgICAgICAgayA9IDB4NWE4Mjc5OTk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZiA9IGIgXiBjIF4gZDtcbiAgICAgICAgICBrID0gMHg2ZWQ5ZWJhMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGkgPCA2MCkge1xuICAgICAgICAgIGYgPSAoYiAmIGMpIHwgKGQgJiAoYiB8IGMpKTtcbiAgICAgICAgICBrID0gMHg4ZjFiYmNkYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmID0gYiBeIGMgXiBkO1xuICAgICAgICAgIGsgPSAweGNhNjJjMWQ2O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHQgPSAoKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBmICsgZSArIGsgKyBXW2ldKSAmIDB4ZmZmZmZmZmY7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9ICgoYiA8PCAzMCkgfCAoYiA+Pj4gMikpICYgMHhmZmZmZmZmZjtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IHQ7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFpbl9bMF0gPSAodGhpcy5jaGFpbl9bMF0gKyBhKSAmIDB4ZmZmZmZmZmY7XG4gICAgdGhpcy5jaGFpbl9bMV0gPSAodGhpcy5jaGFpbl9bMV0gKyBiKSAmIDB4ZmZmZmZmZmY7XG4gICAgdGhpcy5jaGFpbl9bMl0gPSAodGhpcy5jaGFpbl9bMl0gKyBjKSAmIDB4ZmZmZmZmZmY7XG4gICAgdGhpcy5jaGFpbl9bM10gPSAodGhpcy5jaGFpbl9bM10gKyBkKSAmIDB4ZmZmZmZmZmY7XG4gICAgdGhpcy5jaGFpbl9bNF0gPSAodGhpcy5jaGFpbl9bNF0gKyBlKSAmIDB4ZmZmZmZmZmY7XG4gIH1cblxuICB1cGRhdGUoYnl0ZXM/OiBudW1iZXJbXSB8IFVpbnQ4QXJyYXkgfCBzdHJpbmcsIGxlbmd0aD86IG51bWJlcik6IHZvaWQge1xuICAgIC8vIFRPRE8oam9obmxlbnopOiB0aWdodGVuIHRoZSBmdW5jdGlvbiBzaWduYXR1cmUgYW5kIHJlbW92ZSB0aGlzIGNoZWNrXG4gICAgaWYgKGJ5dGVzID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxlbmd0aCA9IGJ5dGVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCBsZW5ndGhNaW51c0Jsb2NrID0gbGVuZ3RoIC0gdGhpcy5ibG9ja1NpemU7XG4gICAgbGV0IG4gPSAwO1xuICAgIC8vIFVzaW5nIGxvY2FsIGluc3RlYWQgb2YgbWVtYmVyIHZhcmlhYmxlcyBnaXZlcyB+NSUgc3BlZWR1cCBvbiBGaXJlZm94IDE2LlxuICAgIGNvbnN0IGJ1ZiA9IHRoaXMuYnVmXztcbiAgICBsZXQgaW5idWYgPSB0aGlzLmluYnVmXztcblxuICAgIC8vIFRoZSBvdXRlciB3aGlsZSBsb29wIHNob3VsZCBleGVjdXRlIGF0IG1vc3QgdHdpY2UuXG4gICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcbiAgICAgIC8vIFdoZW4gd2UgaGF2ZSBubyBkYXRhIGluIHRoZSBibG9jayB0byB0b3AgdXAsIHdlIGNhbiBkaXJlY3RseSBwcm9jZXNzIHRoZVxuICAgICAgLy8gaW5wdXQgYnVmZmVyIChhc3N1bWluZyBpdCBjb250YWlucyBzdWZmaWNpZW50IGRhdGEpLiBUaGlzIGdpdmVzIH4yNSVcbiAgICAgIC8vIHNwZWVkdXAgb24gQ2hyb21lIDIzIGFuZCB+MTUlIHNwZWVkdXAgb24gRmlyZWZveCAxNiwgYnV0IHJlcXVpcmVzIHRoYXRcbiAgICAgIC8vIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGluIGxhcmdlIGNodW5rcyAob3IgaW4gbXVsdGlwbGVzIG9mIDY0IGJ5dGVzKS5cbiAgICAgIGlmIChpbmJ1ZiA9PT0gMCkge1xuICAgICAgICB3aGlsZSAobiA8PSBsZW5ndGhNaW51c0Jsb2NrKSB7XG4gICAgICAgICAgdGhpcy5jb21wcmVzc18oYnl0ZXMsIG4pO1xuICAgICAgICAgIG4gKz0gdGhpcy5ibG9ja1NpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcbiAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXMuY2hhckNvZGVBdChuKTtcbiAgICAgICAgICArK2luYnVmO1xuICAgICAgICAgICsrbjtcbiAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xuICAgICAgICAgICAgaW5idWYgPSAwO1xuICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xuICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlc1tuXTtcbiAgICAgICAgICArK2luYnVmO1xuICAgICAgICAgICsrbjtcbiAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xuICAgICAgICAgICAgaW5idWYgPSAwO1xuICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbmJ1Zl8gPSBpbmJ1ZjtcbiAgICB0aGlzLnRvdGFsXyArPSBsZW5ndGg7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRpZ2VzdCgpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgZGlnZXN0OiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCB0b3RhbEJpdHMgPSB0aGlzLnRvdGFsXyAqIDg7XG5cbiAgICAvLyBBZGQgcGFkIDB4ODAgMHgwMCouXG4gICAgaWYgKHRoaXMuaW5idWZfIDwgNTYpIHtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgNTYgLSB0aGlzLmluYnVmXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgdGhpcy5ibG9ja1NpemUgLSAodGhpcy5pbmJ1Zl8gLSA1NikpO1xuICAgIH1cblxuICAgIC8vIEFkZCAjIGJpdHMuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuYmxvY2tTaXplIC0gMTsgaSA+PSA1NjsgaS0tKSB7XG4gICAgICB0aGlzLmJ1Zl9baV0gPSB0b3RhbEJpdHMgJiAyNTU7XG4gICAgICB0b3RhbEJpdHMgLz0gMjU2OyAvLyBEb24ndCB1c2UgYml0LXNoaWZ0aW5nIGhlcmUhXG4gICAgfVxuXG4gICAgdGhpcy5jb21wcmVzc18odGhpcy5idWZfKTtcblxuICAgIGxldCBuID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDI0OyBqID49IDA7IGogLT0gOCkge1xuICAgICAgICBkaWdlc3Rbbl0gPSAodGhpcy5jaGFpbl9baV0gPj4gaikgJiAyNTU7XG4gICAgICAgICsrbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpZ2VzdDtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgdHlwZSBOZXh0Rm48VD4gPSAodmFsdWU6IFQpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBFcnJvckZuID0gKGVycm9yOiBFcnJvcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIENvbXBsZXRlRm4gPSAoKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmVyPFQ+IHtcbiAgLy8gQ2FsbGVkIG9uY2UgZm9yIGVhY2ggdmFsdWUgaW4gYSBzdHJlYW0gb2YgdmFsdWVzLlxuICBuZXh0OiBOZXh0Rm48VD47XG5cbiAgLy8gQSBzdHJlYW0gdGVybWluYXRlcyBieSBhIHNpbmdsZSBjYWxsIHRvIEVJVEhFUiBlcnJvcigpIG9yIGNvbXBsZXRlKCkuXG4gIGVycm9yOiBFcnJvckZuO1xuXG4gIC8vIE5vIGV2ZW50cyB3aWxsIGJlIHNlbnQgdG8gbmV4dCgpIG9uY2UgY29tcGxldGUoKSBpcyBjYWxsZWQuXG4gIGNvbXBsZXRlOiBDb21wbGV0ZUZuO1xufVxuXG5leHBvcnQgdHlwZSBQYXJ0aWFsT2JzZXJ2ZXI8VD4gPSBQYXJ0aWFsPE9ic2VydmVyPFQ+PjtcblxuLy8gVE9ETzogU3VwcG9ydCBhbHNvIFVuc3Vic2NyaWJlLnVuc3Vic2NyaWJlP1xuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmUgPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoZSBTdWJzY3JpYmUgaW50ZXJmYWNlIGhhcyB0d28gZm9ybXMgLSBwYXNzaW5nIHRoZSBpbmxpbmUgZnVuY3Rpb25cbiAqIGNhbGxiYWNrcywgb3IgYSBvYmplY3QgaW50ZXJmYWNlIHdpdGggY2FsbGJhY2sgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpYmU8VD4ge1xuICAobmV4dD86IE5leHRGbjxUPiwgZXJyb3I/OiBFcnJvckZuLCBjb21wbGV0ZT86IENvbXBsZXRlRm4pOiBVbnN1YnNjcmliZTtcbiAgKG9ic2VydmVyOiBQYXJ0aWFsT2JzZXJ2ZXI8VD4pOiBVbnN1YnNjcmliZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZhYmxlPFQ+IHtcbiAgLy8gU3Vic2NyaWJlIG1ldGhvZFxuICBzdWJzY3JpYmU6IFN1YnNjcmliZTxUPjtcbn1cblxuZXhwb3J0IHR5cGUgRXhlY3V0b3I8VD4gPSAob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB2b2lkO1xuXG4vKipcbiAqIEhlbHBlciB0byBtYWtlIGEgU3Vic2NyaWJlIGZ1bmN0aW9uIChqdXN0IGxpa2UgUHJvbWlzZSBoZWxwcyBtYWtlIGFcbiAqIFRoZW5hYmxlKS5cbiAqXG4gKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcbiAqICAgICBhcyBhIHByb3h5LlxuICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3Vic2NyaWJlPFQ+KFxuICBleGVjdXRvcjogRXhlY3V0b3I8VD4sXG4gIG9uTm9PYnNlcnZlcnM/OiBFeGVjdXRvcjxUPlxuKTogU3Vic2NyaWJlPFQ+IHtcbiAgY29uc3QgcHJveHkgPSBuZXcgT2JzZXJ2ZXJQcm94eTxUPihleGVjdXRvciwgb25Ob09ic2VydmVycyk7XG4gIHJldHVybiBwcm94eS5zdWJzY3JpYmUuYmluZChwcm94eSk7XG59XG5cbi8qKlxuICogSW1wbGVtZW50IGZhbi1vdXQgZm9yIGFueSBudW1iZXIgb2YgT2JzZXJ2ZXJzIGF0dGFjaGVkIHZpYSBhIHN1YnNjcmliZVxuICogZnVuY3Rpb24uXG4gKi9cbmNsYXNzIE9ic2VydmVyUHJveHk8VD4gaW1wbGVtZW50cyBPYnNlcnZlcjxUPiB7XG4gIHByaXZhdGUgb2JzZXJ2ZXJzOiBBcnJheTxPYnNlcnZlcjxUPj4gfCB1bmRlZmluZWQgPSBbXTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZXM6IFVuc3Vic2NyaWJlW10gPSBbXTtcbiAgcHJpdmF0ZSBvbk5vT2JzZXJ2ZXJzOiBFeGVjdXRvcjxUPiB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBvYnNlcnZlckNvdW50ID0gMDtcbiAgLy8gTWljcm8tdGFzayBzY2hlZHVsaW5nIGJ5IGNhbGxpbmcgdGFzay50aGVuKCkuXG4gIHByaXZhdGUgdGFzayA9IFByb21pc2UucmVzb2x2ZSgpO1xuICBwcml2YXRlIGZpbmFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGZpbmFsRXJyb3I/OiBFcnJvcjtcblxuICAvKipcbiAgICogQHBhcmFtIGV4ZWN1dG9yIEZ1bmN0aW9uIHdoaWNoIGNhbiBtYWtlIGNhbGxzIHRvIGEgc2luZ2xlIE9ic2VydmVyXG4gICAqICAgICBhcyBhIHByb3h5LlxuICAgKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihleGVjdXRvcjogRXhlY3V0b3I8VD4sIG9uTm9PYnNlcnZlcnM/OiBFeGVjdXRvcjxUPikge1xuICAgIHRoaXMub25Ob09ic2VydmVycyA9IG9uTm9PYnNlcnZlcnM7XG4gICAgLy8gQ2FsbCB0aGUgZXhlY3V0b3IgYXN5bmNocm9ub3VzbHkgc28gc3Vic2NyaWJlcnMgdGhhdCBhcmUgY2FsbGVkXG4gICAgLy8gc3luY2hyb25vdXNseSBhZnRlciB0aGUgY3JlYXRpb24gb2YgdGhlIHN1YnNjcmliZSBmdW5jdGlvblxuICAgIC8vIGNhbiBzdGlsbCByZWNlaXZlIHRoZSB2ZXJ5IGZpcnN0IHZhbHVlIGdlbmVyYXRlZCBpbiB0aGUgZXhlY3V0b3IuXG4gICAgdGhpcy50YXNrXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGV4ZWN1dG9yKHRoaXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcihlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZXJyb3IoZXJyb3I6IEVycm9yKTogdm9pZCB7XG4gICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xvc2UoZXJyb3IpO1xuICB9XG5cbiAgY29tcGxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWRkIGFuIE9ic2VydmVyIHRvIHRoZSBmYW4tb3V0IGxpc3QuXG4gICAqXG4gICAqIC0gV2UgcmVxdWlyZSB0aGF0IG5vIGV2ZW50IGlzIHNlbnQgdG8gYSBzdWJzY3JpYmVyIHN5Y2hyb25vdXNseSB0byB0aGVpclxuICAgKiAgIGNhbGwgdG8gc3Vic2NyaWJlKCkuXG4gICAqL1xuICBzdWJzY3JpYmUoXG4gICAgbmV4dE9yT2JzZXJ2ZXI/OiBOZXh0Rm48VD4gfCBQYXJ0aWFsT2JzZXJ2ZXI8VD4sXG4gICAgZXJyb3I/OiBFcnJvckZuLFxuICAgIGNvbXBsZXRlPzogQ29tcGxldGVGblxuICApOiBVbnN1YnNjcmliZSB7XG4gICAgbGV0IG9ic2VydmVyOiBPYnNlcnZlcjxUPjtcblxuICAgIGlmIChcbiAgICAgIG5leHRPck9ic2VydmVyID09PSB1bmRlZmluZWQgJiZcbiAgICAgIGVycm9yID09PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbXBsZXRlID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBPYnNlcnZlci4nKTtcbiAgICB9XG5cbiAgICAvLyBBc3NlbWJsZSBhbiBPYnNlcnZlciBvYmplY3Qgd2hlbiBwYXNzZWQgYXMgY2FsbGJhY2sgZnVuY3Rpb25zLlxuICAgIGlmIChcbiAgICAgIGltcGxlbWVudHNBbnlNZXRob2RzKG5leHRPck9ic2VydmVyIGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LCBbXG4gICAgICAgICduZXh0JyxcbiAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgJ2NvbXBsZXRlJ1xuICAgICAgXSlcbiAgICApIHtcbiAgICAgIG9ic2VydmVyID0gbmV4dE9yT2JzZXJ2ZXIgYXMgT2JzZXJ2ZXI8VD47XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ic2VydmVyID0ge1xuICAgICAgICBuZXh0OiBuZXh0T3JPYnNlcnZlciBhcyBOZXh0Rm48VD4sXG4gICAgICAgIGVycm9yLFxuICAgICAgICBjb21wbGV0ZVxuICAgICAgfSBhcyBPYnNlcnZlcjxUPjtcbiAgICB9XG5cbiAgICBpZiAob2JzZXJ2ZXIubmV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYnNlcnZlci5uZXh0ID0gbm9vcCBhcyBOZXh0Rm48VD47XG4gICAgfVxuICAgIGlmIChvYnNlcnZlci5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYnNlcnZlci5lcnJvciA9IG5vb3AgYXMgRXJyb3JGbjtcbiAgICB9XG4gICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlID0gbm9vcCBhcyBDb21wbGV0ZUZuO1xuICAgIH1cblxuICAgIGNvbnN0IHVuc3ViID0gdGhpcy51bnN1YnNjcmliZU9uZS5iaW5kKHRoaXMsIHRoaXMub2JzZXJ2ZXJzIS5sZW5ndGgpO1xuXG4gICAgLy8gQXR0ZW1wdCB0byBzdWJzY3JpYmUgdG8gYSB0ZXJtaW5hdGVkIE9ic2VydmFibGUgLSB3ZVxuICAgIC8vIGp1c3QgcmVzcG9uZCB0byB0aGUgT2JzZXJ2ZXIgd2l0aCB0aGUgZmluYWwgZXJyb3Igb3IgY29tcGxldGVcbiAgICAvLyBldmVudC5cbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodGhpcy5maW5hbEVycm9yKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcih0aGlzLmZpbmFsRXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm9ic2VydmVycyEucHVzaChvYnNlcnZlciBhcyBPYnNlcnZlcjxUPik7XG5cbiAgICByZXR1cm4gdW5zdWI7XG4gIH1cblxuICAvLyBVbnN1YnNjcmliZSBpcyBzeW5jaHJvbm91cyAtIHdlIGd1YXJhbnRlZSB0aGF0IG5vIGV2ZW50cyBhcmUgc2VudCB0b1xuICAvLyBhbnkgdW5zdWJzY3JpYmVkIE9ic2VydmVyLlxuICBwcml2YXRlIHVuc3Vic2NyaWJlT25lKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLm9ic2VydmVycyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub2JzZXJ2ZXJzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy5vYnNlcnZlcnNbaV07XG5cbiAgICB0aGlzLm9ic2VydmVyQ291bnQgLT0gMTtcbiAgICBpZiAodGhpcy5vYnNlcnZlckNvdW50ID09PSAwICYmIHRoaXMub25Ob09ic2VydmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uTm9PYnNlcnZlcnModGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JFYWNoT2JzZXJ2ZXIoZm46IChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIC8vIEFscmVhZHkgY2xvc2VkIGJ5IHByZXZpb3VzIGV2ZW50Li4uLmp1c3QgZWF0IHRoZSBhZGRpdGlvbmFsIHZhbHVlcy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSBzZW5kT25lIGNhbGxzIGFzeW5jaHJvbm91c2x5IC0gdGhlcmUgaXMgbm8gY2hhbmNlIHRoYXRcbiAgICAvLyB0aGlzLm9ic2VydmVycyB3aWxsIGJlY29tZSB1bmRlZmluZWQuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9ic2VydmVycyEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2VuZE9uZShpLCBmbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsbCB0aGUgT2JzZXJ2ZXIgdmlhIG9uZSBvZiBpdCdzIGNhbGxiYWNrIGZ1bmN0aW9uLiBXZSBhcmUgY2FyZWZ1bCB0b1xuICAvLyBjb25maXJtIHRoYXQgdGhlIG9ic2VydmUgaGFzIG5vdCBiZWVuIHVuc3Vic2NyaWJlZCBzaW5jZSB0aGlzIGFzeW5jaHJvbm91c1xuICAvLyBmdW5jdGlvbiBoYWQgYmVlbiBxdWV1ZWQuXG4gIHByaXZhdGUgc2VuZE9uZShpOiBudW1iZXIsIGZuOiAob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgLy8gRXhlY3V0ZSB0aGUgY2FsbGJhY2sgYXN5bmNocm9ub3VzbHlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vYnNlcnZlcnNbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZuKHRoaXMub2JzZXJ2ZXJzW2ldKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIElnbm9yZSBleGNlcHRpb25zIHJhaXNlZCBpbiBPYnNlcnZlcnMgb3IgbWlzc2luZyBtZXRob2RzIG9mIGFuXG4gICAgICAgICAgLy8gT2JzZXJ2ZXIuXG4gICAgICAgICAgLy8gTG9nIGVycm9yIHRvIGNvbnNvbGUuIGIvMzE0MDQ4MDZcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKGVycj86IEVycm9yKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcbiAgICBpZiAoZXJyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZmluYWxFcnJvciA9IGVycjtcbiAgICB9XG4gICAgLy8gUHJveHkgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIGdhcmJhZ2UgY29sbGVjdCByZWZlcmVuY2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKiBUdXJuIHN5bmNocm9ub3VzIGZ1bmN0aW9uIGludG8gb25lIGNhbGxlZCBhc3luY2hyb25vdXNseS4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgZnVuY3Rpb24gYXN5bmMoZm46IEZ1bmN0aW9uLCBvbkVycm9yPzogRXJyb3JGbik6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuICguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZm4oLi4uYXJncyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIG9iamVjdCBwYXNzZWQgaW4gaW1wbGVtZW50cyBhbnkgb2YgdGhlIG5hbWVkIG1ldGhvZHMuXG4gKi9cbmZ1bmN0aW9uIGltcGxlbWVudHNBbnlNZXRob2RzKFxuICBvYmo6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LFxuICBtZXRob2RzOiBzdHJpbmdbXVxuKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XG4gICAgaWYgKG1ldGhvZCBpbiBvYmogJiYgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKTogdm9pZCB7XG4gIC8vIGRvIG5vdGhpbmdcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcHJvdmlkZWQgZm9yIGEgcHVibGljIGZ1bmN0aW9uLlxuICogVGhyb3dzIGFuIGVycm9yIGlmIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcbiAqIEBwYXJhbSBtaW5Db3VudCBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxuICogQHBhcmFtIG1heENvdW50IFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudCB0byBhbGxvdyBmb3IgdGhlIGZ1bmN0aW9uIGNhbGxcbiAqIEBwYXJhbSBhcmdDb3VudCBUaGUgYWN0dWFsIG51bWJlciBvZiBhcmd1bWVudHMgcHJvdmlkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUFyZ0NvdW50ID0gZnVuY3Rpb24gKFxuICBmbk5hbWU6IHN0cmluZyxcbiAgbWluQ291bnQ6IG51bWJlcixcbiAgbWF4Q291bnQ6IG51bWJlcixcbiAgYXJnQ291bnQ6IG51bWJlclxuKTogdm9pZCB7XG4gIGxldCBhcmdFcnJvcjtcbiAgaWYgKGFyZ0NvdW50IDwgbWluQ291bnQpIHtcbiAgICBhcmdFcnJvciA9ICdhdCBsZWFzdCAnICsgbWluQ291bnQ7XG4gIH0gZWxzZSBpZiAoYXJnQ291bnQgPiBtYXhDb3VudCkge1xuICAgIGFyZ0Vycm9yID0gbWF4Q291bnQgPT09IDAgPyAnbm9uZScgOiAnbm8gbW9yZSB0aGFuICcgKyBtYXhDb3VudDtcbiAgfVxuICBpZiAoYXJnRXJyb3IpIHtcbiAgICBjb25zdCBlcnJvciA9XG4gICAgICBmbk5hbWUgK1xuICAgICAgJyBmYWlsZWQ6IFdhcyBjYWxsZWQgd2l0aCAnICtcbiAgICAgIGFyZ0NvdW50ICtcbiAgICAgIChhcmdDb3VudCA9PT0gMSA/ICcgYXJndW1lbnQuJyA6ICcgYXJndW1lbnRzLicpICtcbiAgICAgICcgRXhwZWN0cyAnICtcbiAgICAgIGFyZ0Vycm9yICtcbiAgICAgICcuJztcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyB0byBwcmVmaXggYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBmYWlsZWQgYXJndW1lbnQgdmFsaWRhdGlvblxuICpcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcbiAqIEBwYXJhbSBhcmdOYW1lIFRoZSBuYW1lIG9mIHRoZSBhcmd1bWVudFxuICogQHJldHVybiBUaGUgcHJlZml4IHRvIGFkZCB0byB0aGUgZXJyb3IgdGhyb3duIGZvciB2YWxpZGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JQcmVmaXgoZm5OYW1lOiBzdHJpbmcsIGFyZ05hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtmbk5hbWV9IGZhaWxlZDogJHthcmdOYW1lfSBhcmd1bWVudCBgO1xufVxuXG4vKipcbiAqIEBwYXJhbSBmbk5hbWVcbiAqIEBwYXJhbSBhcmd1bWVudE51bWJlclxuICogQHBhcmFtIG5hbWVzcGFjZVxuICogQHBhcmFtIG9wdGlvbmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU5hbWVzcGFjZShcbiAgZm5OYW1lOiBzdHJpbmcsXG4gIG5hbWVzcGFjZTogc3RyaW5nLFxuICBvcHRpb25hbDogYm9vbGVhblxuKTogdm9pZCB7XG4gIGlmIChvcHRpb25hbCAmJiAhbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xuICAgIC8vVE9ETzogSSBzaG91bGQgZG8gbW9yZSB2YWxpZGF0aW9uIGhlcmUuIFdlIG9ubHkgYWxsb3cgY2VydGFpbiBjaGFycyBpbiBuYW1lc3BhY2VzLlxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGVycm9yUHJlZml4KGZuTmFtZSwgJ25hbWVzcGFjZScpICsgJ211c3QgYmUgYSB2YWxpZCBmaXJlYmFzZSBuYW1lc3BhY2UuJ1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2FsbGJhY2soXG4gIGZuTmFtZTogc3RyaW5nLFxuICBhcmd1bWVudE5hbWU6IHN0cmluZyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuICBvcHRpb25hbDogYm9vbGVhblxuKTogdm9pZCB7XG4gIGlmIChvcHRpb25hbCAmJiAhY2FsbGJhY2spIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uJ1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29udGV4dE9iamVjdChcbiAgZm5OYW1lOiBzdHJpbmcsXG4gIGFyZ3VtZW50TmFtZTogc3RyaW5nLFxuICBjb250ZXh0OiB1bmtub3duLFxuICBvcHRpb25hbDogYm9vbGVhblxuKTogdm9pZCB7XG4gIGlmIChvcHRpb25hbCAmJiAhY29udGV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIGNvbnRleHQgIT09ICdvYmplY3QnIHx8IGNvbnRleHQgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBlcnJvclByZWZpeChmbk5hbWUsIGFyZ3VtZW50TmFtZSkgKyAnbXVzdCBiZSBhIHZhbGlkIGNvbnRleHQgb2JqZWN0LidcbiAgICApO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9hc3NlcnQnO1xuXG4vLyBDb2RlIG9yaWdpbmFsbHkgY2FtZSBmcm9tIGdvb2cuY3J5cHQuc3RyaW5nVG9VdGY4Qnl0ZUFycmF5LCBidXQgZm9yIHNvbWUgcmVhc29uIHRoZXlcbi8vIGF1dG9tYXRpY2FsbHkgcmVwbGFjZWQgJ1xcclxcbicgd2l0aCAnXFxuJywgYW5kIHRoZXkgZGlkbid0IGhhbmRsZSBzdXJyb2dhdGUgcGFpcnMsXG4vLyBzbyBpdCdzIGJlZW4gbW9kaWZpZWQuXG5cbi8vIE5vdGUgdGhhdCBub3QgYWxsIFVuaWNvZGUgY2hhcmFjdGVycyBhcHBlYXIgYXMgc2luZ2xlIGNoYXJhY3RlcnMgaW4gSmF2YVNjcmlwdCBzdHJpbmdzLlxuLy8gZnJvbUNoYXJDb2RlIHJldHVybnMgdGhlIFVURi0xNiBlbmNvZGluZyBvZiBhIGNoYXJhY3RlciAtIHNvIHNvbWUgVW5pY29kZSBjaGFyYWN0ZXJzXG4vLyB1c2UgMiBjaGFyYWN0ZXJzIGluIEphdmFzY3JpcHQuICBBbGwgNC1ieXRlIFVURi04IGNoYXJhY3RlcnMgYmVnaW4gd2l0aCBhIGZpcnN0XG4vLyBjaGFyYWN0ZXIgaW4gdGhlIHJhbmdlIDB4RDgwMCAtIDB4REJGRiAodGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHNvLWNhbGxlZCBzdXJyb2dhdGVcbi8vIHBhaXIpLlxuLy8gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xNS4xLjNcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ1RvQnl0ZUFycmF5ID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKTogbnVtYmVyW10ge1xuICBjb25zdCBvdXQ6IG51bWJlcltdID0gW107XG4gIGxldCBwID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgLy8gSXMgdGhpcyB0aGUgbGVhZCBzdXJyb2dhdGUgaW4gYSBzdXJyb2dhdGUgcGFpcj9cbiAgICBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcbiAgICAgIGNvbnN0IGhpZ2ggPSBjIC0gMHhkODAwOyAvLyB0aGUgaGlnaCAxMCBiaXRzLlxuICAgICAgaSsrO1xuICAgICAgYXNzZXJ0KGkgPCBzdHIubGVuZ3RoLCAnU3Vycm9nYXRlIHBhaXIgbWlzc2luZyB0cmFpbCBzdXJyb2dhdGUuJyk7XG4gICAgICBjb25zdCBsb3cgPSBzdHIuY2hhckNvZGVBdChpKSAtIDB4ZGMwMDsgLy8gdGhlIGxvdyAxMCBiaXRzLlxuICAgICAgYyA9IDB4MTAwMDAgKyAoaGlnaCA8PCAxMCkgKyBsb3c7XG4gICAgfVxuXG4gICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgIG91dFtwKytdID0gYztcbiAgICB9IGVsc2UgaWYgKGMgPCAyMDQ4KSB7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9IGVsc2UgaWYgKGMgPCA2NTUzNikge1xuICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XG4gICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xuICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xuICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XG4gICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgbGVuZ3RoIHdpdGhvdXQgYWN0dWFsbHkgY29udmVydGluZzsgdXNlZnVsIGZvciBkb2luZyBjaGVhcGVyIHZhbGlkYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdMZW5ndGggPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICBsZXQgcCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICBwKys7XG4gICAgfSBlbHNlIGlmIChjIDwgMjA0OCkge1xuICAgICAgcCArPSAyO1xuICAgIH0gZWxzZSBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcbiAgICAgIC8vIExlYWQgc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXIuICBUaGUgcGFpciB0b2dldGhlciB3aWxsIHRha2UgNCBieXRlcyB0byByZXByZXNlbnQuXG4gICAgICBwICs9IDQ7XG4gICAgICBpKys7IC8vIHNraXAgdHJhaWwgc3Vycm9nYXRlLlxuICAgIH0gZWxzZSB7XG4gICAgICBwICs9IDM7XG4gICAgfVxuICB9XG4gIHJldHVybiBwO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIENvcGllZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzXG4gKiBHZW5lcmF0ZXMgYSBuZXcgdXVpZC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHV1aWR2NCA9IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xuICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBjID0+IHtcbiAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBleHBvbmVudGlhbGx5IGluY3JlYXNlLlxuICovXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMX01JTExJUyA9IDEwMDA7XG5cbi8qKlxuICogVGhlIGZhY3RvciB0byBiYWNrb2ZmIGJ5LlxuICogU2hvdWxkIGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxLlxuICovXG5jb25zdCBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SID0gMjtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBtaWxsaXNlY29uZHMgdG8gaW5jcmVhc2UgdG8uXG4gKlxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgY29uc3QgTUFYX1ZBTFVFX01JTExJUyA9IDQgKiA2MCAqIDYwICogMTAwMDsgLy8gRm91ciBob3VycywgbGlrZSBpT1MgYW5kIEFuZHJvaWQuXG5cbi8qKlxuICogVGhlIHBlcmNlbnRhZ2Ugb2YgYmFja29mZiB0aW1lIHRvIHJhbmRvbWl6ZSBieS5cbiAqIFNlZVxuICogaHR0cDovL2dvL3NhZmUtY2xpZW50LWJlaGF2aW9yI3N0ZXAtMS1kZXRlcm1pbmUtdGhlLWFwcHJvcHJpYXRlLXJldHJ5LWludGVydmFsLXRvLWhhbmRsZS1zcGlrZS10cmFmZmljXG4gKiBmb3IgY29udGV4dC5cbiAqXG4gKiA8cD5WaXNpYmxlIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBjb25zdCBSQU5ET01fRkFDVE9SID0gMC41O1xuXG4vKipcbiAqIEJhc2VkIG9uIHRoZSBiYWNrb2ZmIG1ldGhvZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtbGlicmFyeS9ibG9iL21hc3Rlci9jbG9zdXJlL2dvb2cvbWF0aC9leHBvbmVudGlhbGJhY2tvZmYuanMuXG4gKiBFeHRyYWN0ZWQgaGVyZSBzbyB3ZSBkb24ndCBuZWVkIHRvIHBhc3MgbWV0YWRhdGEgYW5kIGEgc3RhdGVmdWwgRXhwb25lbnRpYWxCYWNrb2ZmIG9iamVjdCBhcm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzKFxuICBiYWNrb2ZmQ291bnQ6IG51bWJlcixcbiAgaW50ZXJ2YWxNaWxsaXM6IG51bWJlciA9IERFRkFVTFRfSU5URVJWQUxfTUlMTElTLFxuICBiYWNrb2ZmRmFjdG9yOiBudW1iZXIgPSBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SXG4pOiBudW1iZXIge1xuICAvLyBDYWxjdWxhdGVzIGFuIGV4cG9uZW50aWFsbHkgaW5jcmVhc2luZyB2YWx1ZS5cbiAgLy8gRGV2aWF0aW9uOiBjYWxjdWxhdGVzIHZhbHVlIGZyb20gY291bnQgYW5kIGEgY29uc3RhbnQgaW50ZXJ2YWwsIHNvIHdlIG9ubHkgbmVlZCB0byBzYXZlIHZhbHVlXG4gIC8vIGFuZCBjb3VudCB0byByZXN0b3JlIHN0YXRlLlxuICBjb25zdCBjdXJyQmFzZVZhbHVlID0gaW50ZXJ2YWxNaWxsaXMgKiBNYXRoLnBvdyhiYWNrb2ZmRmFjdG9yLCBiYWNrb2ZmQ291bnQpO1xuXG4gIC8vIEEgcmFuZG9tIFwiZnV6elwiIHRvIGF2b2lkIHdhdmVzIG9mIHJldHJpZXMuXG4gIC8vIERldmlhdGlvbjogcmFuZG9tRmFjdG9yIGlzIHJlcXVpcmVkLlxuICBjb25zdCByYW5kb21XYWl0ID0gTWF0aC5yb3VuZChcbiAgICAvLyBBIGZyYWN0aW9uIG9mIHRoZSBiYWNrb2ZmIHZhbHVlIHRvIGFkZC9zdWJ0cmFjdC5cbiAgICAvLyBEZXZpYXRpb246IGNoYW5nZXMgbXVsdGlwbGljYXRpb24gb3JkZXIgdG8gaW1wcm92ZSByZWFkYWJpbGl0eS5cbiAgICBSQU5ET01fRkFDVE9SICpcbiAgICAgIGN1cnJCYXNlVmFsdWUgKlxuICAgICAgLy8gQSByYW5kb20gZmxvYXQgKHJvdW5kZWQgdG8gaW50IGJ5IE1hdGgucm91bmQgYWJvdmUpIGluIHRoZSByYW5nZSBbLTEsIDFdLiBEZXRlcm1pbmVzXG4gICAgICAvLyBpZiB3ZSBhZGQgb3Igc3VidHJhY3QuXG4gICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKlxuICAgICAgMlxuICApO1xuXG4gIC8vIExpbWl0cyBiYWNrb2ZmIHRvIG1heCB0byBhdm9pZCBlZmZlY3RpdmVseSBwZXJtYW5lbnQgYmFja29mZi5cbiAgcmV0dXJuIE1hdGgubWluKE1BWF9WQUxVRV9NSUxMSVMsIGN1cnJCYXNlVmFsdWUgKyByYW5kb21XYWl0KTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFByb3ZpZGUgRW5nbGlzaCBvcmRpbmFsIGxldHRlcnMgYWZ0ZXIgYSBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGluYWwoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaSkpIHtcbiAgICByZXR1cm4gYCR7aX1gO1xuICB9XG4gIHJldHVybiBpICsgaW5kaWNhdG9yKGkpO1xufVxuXG5mdW5jdGlvbiBpbmRpY2F0b3IoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaSA9IE1hdGguYWJzKGkpO1xuICBjb25zdCBjZW50ID0gaSAlIDEwMDtcbiAgaWYgKGNlbnQgPj0gMTAgJiYgY2VudCA8PSAyMCkge1xuICAgIHJldHVybiAndGgnO1xuICB9XG4gIGNvbnN0IGRlYyA9IGkgJSAxMDtcbiAgaWYgKGRlYyA9PT0gMSkge1xuICAgIHJldHVybiAnc3QnO1xuICB9XG4gIGlmIChkZWMgPT09IDIpIHtcbiAgICByZXR1cm4gJ25kJztcbiAgfVxuICBpZiAoZGVjID09PSAzKSB7XG4gICAgcmV0dXJuICdyZCc7XG4gIH1cbiAgcmV0dXJuICd0aCc7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBDb21wYXQ8VD4ge1xuICBfZGVsZWdhdGU6IFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGFySW5zdGFuY2U8RXhwU2VydmljZT4oXG4gIHNlcnZpY2U6IENvbXBhdDxFeHBTZXJ2aWNlPiB8IEV4cFNlcnZpY2Vcbik6IEV4cFNlcnZpY2Uge1xuICBpZiAoc2VydmljZSAmJiAoc2VydmljZSBhcyBDb21wYXQ8RXhwU2VydmljZT4pLl9kZWxlZ2F0ZSkge1xuICAgIHJldHVybiAoc2VydmljZSBhcyBDb21wYXQ8RXhwU2VydmljZT4pLl9kZWxlZ2F0ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2VydmljZSBhcyBFeHBTZXJ2aWNlO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7XG4gIEluc3RhbnRpYXRpb25Nb2RlLFxuICBJbnN0YW5jZUZhY3RvcnksXG4gIENvbXBvbmVudFR5cGUsXG4gIERpY3Rpb25hcnksXG4gIE5hbWUsXG4gIG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2tcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PFQgZXh0ZW5kcyBOYW1lID0gTmFtZT4ge1xuICBtdWx0aXBsZUluc3RhbmNlcyA9IGZhbHNlO1xuICAvKipcbiAgICogUHJvcGVydGllcyB0byBiZSBhZGRlZCB0byB0aGUgc2VydmljZSBuYW1lc3BhY2VcbiAgICovXG4gIHNlcnZpY2VQcm9wczogRGljdGlvbmFyeSA9IHt9O1xuXG4gIGluc3RhbnRpYXRpb25Nb2RlID0gSW5zdGFudGlhdGlvbk1vZGUuTEFaWTtcblxuICBvbkluc3RhbmNlQ3JlYXRlZDogb25JbnN0YW5jZUNyZWF0ZWRDYWxsYmFjazxUPiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgcHVibGljIHNlcnZpY2UgbmFtZSwgZS5nLiBhcHAsIGF1dGgsIGZpcmVzdG9yZSwgZGF0YWJhc2VcbiAgICogQHBhcmFtIGluc3RhbmNlRmFjdG9yeSBTZXJ2aWNlIGZhY3RvcnkgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBwdWJsaWMgaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB0eXBlIHdoZXRoZXIgdGhlIHNlcnZpY2UgcHJvdmlkZWQgYnkgdGhlIGNvbXBvbmVudCBpcyBwdWJsaWMgb3IgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgbmFtZTogVCxcbiAgICByZWFkb25seSBpbnN0YW5jZUZhY3Rvcnk6IEluc3RhbmNlRmFjdG9yeTxUPixcbiAgICByZWFkb25seSB0eXBlOiBDb21wb25lbnRUeXBlXG4gICkge31cblxuICBzZXRJbnN0YW50aWF0aW9uTW9kZShtb2RlOiBJbnN0YW50aWF0aW9uTW9kZSk6IHRoaXMge1xuICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBtb2RlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TXVsdGlwbGVJbnN0YW5jZXMobXVsdGlwbGVJbnN0YW5jZXM6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gbXVsdGlwbGVJbnN0YW5jZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTZXJ2aWNlUHJvcHMocHJvcHM6IERpY3Rpb25hcnkpOiB0aGlzIHtcbiAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHByb3BzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2soY2FsbGJhY2s6IG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2s8VD4pOiB0aGlzIHtcbiAgICB0aGlzLm9uSW5zdGFuY2VDcmVhdGVkID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBDb21wb25lbnRDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudF9jb250YWluZXInO1xuaW1wb3J0IHsgREVGQVVMVF9FTlRSWV9OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgSW5pdGlhbGl6ZU9wdGlvbnMsXG4gIEluc3RhbnRpYXRpb25Nb2RlLFxuICBOYW1lLFxuICBOYW1lU2VydmljZU1hcHBpbmcsXG4gIE9uSW5pdENhbGxCYWNrXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBpbnN0YW5jZSBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gJ2F1dGgnLCAnYXV0aC1pbnRlcm5hbCdcbiAqIE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSBpcyBhbiBhbGlhcyBmb3IgdGhlIHR5cGUgb2YgdGhlIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm92aWRlcjxUIGV4dGVuZHMgTmFtZT4ge1xuICBwcml2YXRlIGNvbXBvbmVudDogQ29tcG9uZW50PFQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5zdGFuY2VzOiBNYXA8c3RyaW5nLCBOYW1lU2VydmljZU1hcHBpbmdbVF0+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IGluc3RhbmNlc0RlZmVycmVkOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIERlZmVycmVkPE5hbWVTZXJ2aWNlTWFwcGluZ1tUXT5cbiAgPiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnN0YW5jZXNPcHRpb25zOiBNYXA8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4gPVxuICAgIG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBvbkluaXRDYWxsYmFja3M6IE1hcDxzdHJpbmcsIFNldDxPbkluaXRDYWxsQmFjazxUPj4+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogVCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyXG4gICkge31cblxuICAvKipcbiAgICogQHBhcmFtIGlkZW50aWZpZXIgQSBwcm92aWRlciBjYW4gcHJvdmlkZSBtdWxpdHBsZSBpbnN0YW5jZXMgb2YgYSBzZXJ2aWNlXG4gICAqIGlmIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzIGlzIHRydWUuXG4gICAqL1xuICBnZXQoaWRlbnRpZmllcj86IHN0cmluZyk6IFByb21pc2U8TmFtZVNlcnZpY2VNYXBwaW5nW1RdPiB7XG4gICAgLy8gaWYgbXVsdGlwbGVJbnN0YW5jZXMgaXMgbm90IHN1cHBvcnRlZCwgdXNlIHRoZSBkZWZhdWx0IG5hbWVcbiAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlc0RlZmVycmVkLmhhcyhub3JtYWxpemVkSWRlbnRpZmllcikpIHtcbiAgICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkPE5hbWVTZXJ2aWNlTWFwcGluZ1tUXT4oKTtcbiAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBkZWZlcnJlZCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxuICAgICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKClcbiAgICAgICkge1xuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBzZXJ2aWNlIGlmIGl0IGNhbiBiZSBhdXRvLWluaXRpYWxpemVkXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xuICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyBnZXQoKSwgaXQgc2hvdWxkIG5vdCBjYXVzZVxuICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IuIFdlIGp1c3QgcmV0dXJuIHRoZSB1bnJlc29sdmVkIHByb21pc2UgaW4gdGhpcyBjYXNlLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKSEucHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucy5pZGVudGlmaWVyIEEgcHJvdmlkZXIgY2FuIHByb3ZpZGUgbXVsaXRwbGUgaW5zdGFuY2VzIG9mIGEgc2VydmljZVxuICAgKiBpZiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyBpcyB0cnVlLlxuICAgKiBAcGFyYW0gb3B0aW9ucy5vcHRpb25hbCBJZiBvcHRpb25hbCBpcyBmYWxzZSBvciBub3QgcHJvdmlkZWQsIHRoZSBtZXRob2QgdGhyb3dzIGFuIGVycm9yIHdoZW5cbiAgICogdGhlIHNlcnZpY2UgaXMgbm90IGltbWVkaWF0ZWx5IGF2YWlsYWJsZS5cbiAgICogSWYgb3B0aW9uYWwgaXMgdHJ1ZSwgdGhlIG1ldGhvZCByZXR1cm5zIG51bGwgaWYgdGhlIHNlcnZpY2UgaXMgbm90IGltbWVkaWF0ZWx5IGF2YWlsYWJsZS5cbiAgICovXG4gIGdldEltbWVkaWF0ZShvcHRpb25zOiB7XG4gICAgaWRlbnRpZmllcj86IHN0cmluZztcbiAgICBvcHRpb25hbDogdHJ1ZTtcbiAgfSk6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSB8IG51bGw7XG4gIGdldEltbWVkaWF0ZShvcHRpb25zPzoge1xuICAgIGlkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgb3B0aW9uYWw/OiBmYWxzZTtcbiAgfSk6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXTtcbiAgZ2V0SW1tZWRpYXRlKG9wdGlvbnM/OiB7XG4gICAgaWRlbnRpZmllcj86IHN0cmluZztcbiAgICBvcHRpb25hbD86IGJvb2xlYW47XG4gIH0pOiBOYW1lU2VydmljZU1hcHBpbmdbVF0gfCBudWxsIHtcbiAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoXG4gICAgICBvcHRpb25zPy5pZGVudGlmaWVyXG4gICAgKTtcbiAgICBjb25zdCBvcHRpb25hbCA9IG9wdGlvbnM/Lm9wdGlvbmFsID8/IGZhbHNlO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxuICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpXG4gICAgKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcbiAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEluIGNhc2UgYSBjb21wb25lbnQgaXMgbm90IGluaXRpYWxpemVkIGFuZCBzaG91bGQvY2FuIG5vdCBiZSBhdXRvLWluaXRpYWxpemVkIGF0IHRoZSBtb21lbnQsIHJldHVybiBudWxsIGlmIHRoZSBvcHRpb25hbCBmbGFnIGlzIHNldCwgb3IgdGhyb3dcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKGBTZXJ2aWNlICR7dGhpcy5uYW1lfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29tcG9uZW50KCk6IENvbXBvbmVudDxUPiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIHNldENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudDxUPik6IHZvaWQge1xuICAgIGlmIChjb21wb25lbnQubmFtZSAhPT0gdGhpcy5uYW1lKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgYE1pc21hdGNoaW5nIENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBmb3IgUHJvdmlkZXIgJHt0aGlzLm5hbWV9LmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBFcnJvcihgQ29tcG9uZW50IGZvciAke3RoaXMubmFtZX0gaGFzIGFscmVhZHkgYmVlbiBwcm92aWRlZGApO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG4gICAgLy8gcmV0dXJuIGVhcmx5IHdpdGhvdXQgYXR0ZW1wdGluZyB0byBpbml0aWFsaXplIHRoZSBjb21wb25lbnQgaWYgdGhlIGNvbXBvbmVudCByZXF1aXJlcyBleHBsaWNpdCBpbml0aWFsaXphdGlvbiAoY2FsbGluZyBgUHJvdmlkZXIuaW5pdGlhbGl6ZSgpYClcbiAgICBpZiAoIXRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBzZXJ2aWNlIGlzIGVhZ2VyLCBpbml0aWFsaXplIHRoZSBkZWZhdWx0IGluc3RhbmNlXG4gICAgaWYgKGlzQ29tcG9uZW50RWFnZXIoY29tcG9uZW50KSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHsgaW5zdGFuY2VJZGVudGlmaWVyOiBERUZBVUxUX0VOVFJZX05BTUUgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgZm9yIGFuIGVhZ2VyIENvbXBvbmVudCB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyB0aGUgZWFnZXJcbiAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24sIGl0IHNob3VsZCBub3QgY2F1c2UgYSBmYXRhbCBlcnJvci5cbiAgICAgICAgLy8gVE9ETzogSW52ZXN0aWdhdGUgaWYgd2UgbmVlZCB0byBtYWtlIGl0IGNvbmZpZ3VyYWJsZSwgYmVjYXVzZSBzb21lIGNvbXBvbmVudCBtYXkgd2FudCB0byBjYXVzZVxuICAgICAgICAvLyBhIGZhdGFsIGVycm9yIGluIHRoaXMgY2FzZT9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc2VydmljZSBpbnN0YW5jZXMgZm9yIHRoZSBwZW5kaW5nIHByb21pc2VzIGFuZCByZXNvbHZlIHRoZW1cbiAgICAvLyBOT1RFOiBpZiB0aGlzLm11bHRpcGxlSW5zdGFuY2VzIGlzIGZhbHNlLCBvbmx5IHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZFxuICAgIC8vIGFuZCBhbGwgcHJvbWlzZXMgd2l0aCByZXNvbHZlIHdpdGggaXQgcmVnYXJkbGVzcyBvZiB0aGUgaWRlbnRpZmllci5cbiAgICBmb3IgKGNvbnN0IFtcbiAgICAgIGluc3RhbmNlSWRlbnRpZmllcixcbiAgICAgIGluc3RhbmNlRGVmZXJyZWRcbiAgICBdIG9mIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9XG4gICAgICAgIHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGluc3RhbmNlSWRlbnRpZmllcik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGBnZXRPckluaXRpYWxpemVTZXJ2aWNlKClgIHNob3VsZCBhbHdheXMgcmV0dXJuIGEgdmFsaWQgaW5zdGFuY2Ugc2luY2UgYSBjb21wb25lbnQgaXMgZ3VhcmFudGVlZC4gdXNlICEgdG8gbWFrZSB0eXBlc2NyaXB0IGhhcHB5LlxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxuICAgICAgICB9KSE7XG4gICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZVxuICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IGxlYXZlIHRoZSBwcm9taXNlIHVucmVzb2x2ZWQuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnN0YW5jZShpZGVudGlmaWVyOiBzdHJpbmcgPSBERUZBVUxUX0VOVFJZX05BTUUpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmRlbGV0ZShpZGVudGlmaWVyKTtcbiAgICB0aGlzLmluc3RhbmNlc09wdGlvbnMuZGVsZXRlKGlkZW50aWZpZXIpO1xuICAgIHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShpZGVudGlmaWVyKTtcbiAgfVxuXG4gIC8vIGFwcC5kZWxldGUoKSB3aWxsIGNhbGwgdGhpcyBtZXRob2Qgb24gZXZlcnkgcHJvdmlkZXIgdG8gZGVsZXRlIHRoZSBzZXJ2aWNlc1xuICAvLyBUT0RPOiBzaG91bGQgd2UgbWFyayB0aGUgcHJvdmlkZXIgYXMgZGVsZXRlZD9cbiAgYXN5bmMgZGVsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAuLi5zZXJ2aWNlc1xuICAgICAgICAuZmlsdGVyKHNlcnZpY2UgPT4gJ0lOVEVSTkFMJyBpbiBzZXJ2aWNlKSAvLyBsZWdhY3kgc2VydmljZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgLm1hcChzZXJ2aWNlID0+IChzZXJ2aWNlIGFzIGFueSkuSU5URVJOQUwhLmRlbGV0ZSgpKSxcbiAgICAgIC4uLnNlcnZpY2VzXG4gICAgICAgIC5maWx0ZXIoc2VydmljZSA9PiAnX2RlbGV0ZScgaW4gc2VydmljZSkgLy8gbW9kdWxhcml6ZWQgc2VydmljZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgLm1hcChzZXJ2aWNlID0+IChzZXJ2aWNlIGFzIGFueSkuX2RlbGV0ZSgpKVxuICAgIF0pO1xuICB9XG5cbiAgaXNDb21wb25lbnRTZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50ICE9IG51bGw7XG4gIH1cblxuICBpc0luaXRpYWxpemVkKGlkZW50aWZpZXI6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5oYXMoaWRlbnRpZmllcik7XG4gIH1cblxuICBnZXRPcHRpb25zKGlkZW50aWZpZXI6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNPcHRpb25zLmdldChpZGVudGlmaWVyKSB8fCB7fTtcbiAgfVxuXG4gIGluaXRpYWxpemUob3B0czogSW5pdGlhbGl6ZU9wdGlvbnMgPSB7fSk6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSB7XG4gICAgY29uc3QgeyBvcHRpb25zID0ge30gfSA9IG9wdHM7XG4gICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihcbiAgICAgIG9wdHMuaW5zdGFuY2VJZGVudGlmaWVyXG4gICAgKTtcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGAke3RoaXMubmFtZX0oJHtub3JtYWxpemVkSWRlbnRpZmllcn0pIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWRgXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0NvbXBvbmVudFNldCgpKSB7XG4gICAgICB0aHJvdyBFcnJvcihgQ29tcG9uZW50ICR7dGhpcy5uYW1lfSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB5ZXRgKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyLFxuICAgICAgb3B0aW9uc1xuICAgIH0pITtcblxuICAgIC8vIHJlc29sdmUgYW55IHBlbmRpbmcgcHJvbWlzZSB3YWl0aW5nIGZvciB0aGUgc2VydmljZSBpbnN0YW5jZVxuICAgIGZvciAoY29uc3QgW1xuICAgICAgaW5zdGFuY2VJZGVudGlmaWVyLFxuICAgICAgaW5zdGFuY2VEZWZlcnJlZFxuICAgIF0gb2YgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIgPVxuICAgICAgICB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xuICAgICAgaWYgKG5vcm1hbGl6ZWRJZGVudGlmaWVyID09PSBub3JtYWxpemVkRGVmZXJyZWRJZGVudGlmaWVyKSB7XG4gICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgIGFmdGVyIHRoZSBwcm92aWRlciBoYXMgYmVlbiBpbml0aWFsaXplZCBieSBjYWxsaW5nIHByb3ZpZGVyLmluaXRpYWxpemUoKS5cbiAgICogVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgU1lOQ0hST05PVVNMWSwgc28gaXQgc2hvdWxkIG5vdCBleGVjdXRlIGFueSBsb25ncnVubmluZyB0YXNrcyBpbiBvcmRlciB0byBub3QgYmxvY2sgdGhlIHByb2dyYW0uXG4gICAqXG4gICAqIEBwYXJhbSBpZGVudGlmaWVyIEFuIG9wdGlvbmFsIGluc3RhbmNlIGlkZW50aWZpZXJcbiAgICogQHJldHVybnMgYSBmdW5jdGlvbiB0byB1bnJlZ2lzdGVyIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgb25Jbml0KGNhbGxiYWNrOiBPbkluaXRDYWxsQmFjazxUPiwgaWRlbnRpZmllcj86IHN0cmluZyk6ICgpID0+IHZvaWQge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgY29uc3QgZXhpc3RpbmdDYWxsYmFja3MgPVxuICAgICAgdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKSA/P1xuICAgICAgbmV3IFNldDxPbkluaXRDYWxsQmFjazxUPj4oKTtcbiAgICBleGlzdGluZ0NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgIHRoaXMub25Jbml0Q2FsbGJhY2tzLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZXhpc3RpbmdDYWxsYmFja3MpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChub3JtYWxpemVkSWRlbnRpZmllcik7XG4gICAgaWYgKGV4aXN0aW5nSW5zdGFuY2UpIHtcbiAgICAgIGNhbGxiYWNrKGV4aXN0aW5nSW5zdGFuY2UsIG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZXhpc3RpbmdDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBvbkluaXQgY2FsbGJhY2tzIHN5bmNocm9ub3VzbHlcbiAgICogQHBhcmFtIGluc3RhbmNlIHRoZSBzZXJ2aWNlIGluc3RhbmNlYFxuICAgKi9cbiAgcHJpdmF0ZSBpbnZva2VPbkluaXRDYWxsYmFja3MoXG4gICAgaW5zdGFuY2U6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSxcbiAgICBpZGVudGlmaWVyOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KGlkZW50aWZpZXIpO1xuICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYWxsYmFjayhpbnN0YW5jZSwgaWRlbnRpZmllcik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gaWdub3JlIGVycm9ycyBpbiB0aGUgb25Jbml0IGNhbGxiYWNrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcbiAgICBpbnN0YW5jZUlkZW50aWZpZXIsXG4gICAgb3B0aW9ucyA9IHt9XG4gIH06IHtcbiAgICBpbnN0YW5jZUlkZW50aWZpZXI6IHN0cmluZztcbiAgICBvcHRpb25zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIH0pOiBOYW1lU2VydmljZU1hcHBpbmdbVF0gfCBudWxsIHtcbiAgICBsZXQgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQoaW5zdGFuY2VJZGVudGlmaWVyKTtcbiAgICBpZiAoIWluc3RhbmNlICYmIHRoaXMuY29tcG9uZW50KSB7XG4gICAgICBpbnN0YW5jZSA9IHRoaXMuY29tcG9uZW50Lmluc3RhbmNlRmFjdG9yeSh0aGlzLmNvbnRhaW5lciwge1xuICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5KGluc3RhbmNlSWRlbnRpZmllciksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpO1xuICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIG9wdGlvbnMpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEludm9rZSBvbkluaXQgbGlzdGVuZXJzLlxuICAgICAgICogTm90ZSB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCBpcyBkaWZmZXJlbnQsIHdoaWNoIGlzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBjcmVhdG9yLFxuICAgICAgICogd2hpbGUgb25Jbml0IGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZCBieSBjb25zdW1lcnMgb2YgdGhlIHByb3ZpZGVyLlxuICAgICAgICovXG4gICAgICB0aGlzLmludm9rZU9uSW5pdENhbGxiYWNrcyhpbnN0YW5jZSwgaW5zdGFuY2VJZGVudGlmaWVyKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcmRlciBpcyBpbXBvcnRhbnRcbiAgICAgICAqIG9uSW5zdGFuY2VDcmVhdGVkKCkgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7IHdoaWNoXG4gICAgICAgKiBtYWtlcyBgaXNJbml0aWFsaXplZCgpYCByZXR1cm4gdHJ1ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQoXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcixcbiAgICAgICAgICAgIGluc3RhbmNlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gaWdub3JlIGVycm9ycyBpbiB0aGUgb25JbnN0YW5jZUNyZWF0ZWRDYWxsYmFja1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihcbiAgICBpZGVudGlmaWVyOiBzdHJpbmcgPSBERUZBVUxUX0VOVFJZX05BTUVcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyA/IGlkZW50aWZpZXIgOiBERUZBVUxUX0VOVFJZX05BTUU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpZGVudGlmaWVyOyAvLyBhc3N1bWUgbXVsdGlwbGUgaW5zdGFuY2VzIGFyZSBzdXBwb3J0ZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcHJvdmlkZWQuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRBdXRvSW5pdGlhbGl6ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgISF0aGlzLmNvbXBvbmVudCAmJlxuICAgICAgdGhpcy5jb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgIT09IEluc3RhbnRpYXRpb25Nb2RlLkVYUExJQ0lUXG4gICAgKTtcbiAgfVxufVxuXG4vLyB1bmRlZmluZWQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgc2VydmljZSBmYWN0b3J5IGZvciB0aGUgZGVmYXVsdCBpbnN0YW5jZVxuZnVuY3Rpb24gbm9ybWFsaXplSWRlbnRpZmllckZvckZhY3RvcnkoaWRlbnRpZmllcjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIgPT09IERFRkFVTFRfRU5UUllfTkFNRSA/IHVuZGVmaW5lZCA6IGlkZW50aWZpZXI7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50RWFnZXI8VCBleHRlbmRzIE5hbWU+KGNvbXBvbmVudDogQ29tcG9uZW50PFQ+KTogYm9vbGVhbiB7XG4gIHJldHVybiBjb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgPT09IEluc3RhbnRpYXRpb25Nb2RlLkVBR0VSO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50Q29udGFpbmVyIHRoYXQgcHJvdmlkZXMgUHJvdmlkZXJzIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q29udGFpbmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwcm92aWRlcnMgPSBuZXcgTWFwPHN0cmluZywgUHJvdmlkZXI8TmFtZT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGJlaW5nIGFkZGVkXG4gICAqIEBwYXJhbSBvdmVyd3JpdGUgV2hlbiBhIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIG5hbWUgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkLFxuICAgKiBpZiBvdmVyd3JpdGUgaXMgdHJ1ZTogb3ZlcndyaXRlIHRoZSBleGlzdGluZyBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGNvbXBvbmVudCBhbmQgY3JlYXRlIGEgbmV3XG4gICAqIHByb3ZpZGVyIHdpdGggdGhlIG5ldyBjb21wb25lbnQuIEl0IGNhbiBiZSB1c2VmdWwgaW4gdGVzdHMgd2hlcmUgeW91IHdhbnQgdG8gdXNlIGRpZmZlcmVudCBtb2Nrc1xuICAgKiBmb3IgZGlmZmVyZW50IHRlc3RzLlxuICAgKiBpZiBvdmVyd3JpdGUgaXMgZmFsc2U6IHRocm93IGFuIGV4Y2VwdGlvblxuICAgKi9cbiAgYWRkQ29tcG9uZW50PFQgZXh0ZW5kcyBOYW1lPihjb21wb25lbnQ6IENvbXBvbmVudDxUPik6IHZvaWQge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5nZXRQcm92aWRlcihjb21wb25lbnQubmFtZSk7XG4gICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCAke3RoaXMubmFtZX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3ZpZGVyLnNldENvbXBvbmVudChjb21wb25lbnQpO1xuICB9XG5cbiAgYWRkT3JPdmVyd3JpdGVDb21wb25lbnQ8VCBleHRlbmRzIE5hbWU+KGNvbXBvbmVudDogQ29tcG9uZW50PFQ+KTogdm9pZCB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcbiAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xuICAgICAgLy8gZGVsZXRlIHRoZSBleGlzdGluZyBwcm92aWRlciBmcm9tIHRoZSBjb250YWluZXIsIHNvIHdlIGNhbiByZWdpc3RlciB0aGUgbmV3IGNvbXBvbmVudFxuICAgICAgdGhpcy5wcm92aWRlcnMuZGVsZXRlKGNvbXBvbmVudC5uYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldFByb3ZpZGVyIHByb3ZpZGVzIGEgdHlwZSBzYWZlIGludGVyZmFjZSB3aGVyZSBpdCBjYW4gb25seSBiZSBjYWxsZWQgd2l0aCBhIGZpZWxkIG5hbWVcbiAgICogcHJlc2VudCBpbiBOYW1lU2VydmljZU1hcHBpbmcgaW50ZXJmYWNlLlxuICAgKlxuICAgKiBGaXJlYmFzZSBTREtzIHByb3ZpZGluZyBzZXJ2aWNlcyBzaG91bGQgZXh0ZW5kIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UgdG8gcmVnaXN0ZXJcbiAgICogdGhlbXNlbHZlcy5cbiAgICovXG4gIGdldFByb3ZpZGVyPFQgZXh0ZW5kcyBOYW1lPihuYW1lOiBUKTogUHJvdmlkZXI8VD4ge1xuICAgIGlmICh0aGlzLnByb3ZpZGVycy5oYXMobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVycy5nZXQobmFtZSkgYXMgdW5rbm93biBhcyBQcm92aWRlcjxUPjtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgYSBQcm92aWRlciBmb3IgYSBzZXJ2aWNlIHRoYXQgaGFzbid0IHJlZ2lzdGVyZWQgd2l0aCBGaXJlYmFzZVxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFByb3ZpZGVyPFQ+KG5hbWUsIHRoaXMpO1xuICAgIHRoaXMucHJvdmlkZXJzLnNldChuYW1lLCBwcm92aWRlciBhcyB1bmtub3duIGFzIFByb3ZpZGVyPE5hbWU+KTtcblxuICAgIHJldHVybiBwcm92aWRlciBhcyBQcm92aWRlcjxUPjtcbiAgfVxuXG4gIGdldFByb3ZpZGVycygpOiBBcnJheTxQcm92aWRlcjxOYW1lPj4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucHJvdmlkZXJzLnZhbHVlcygpKTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCB0eXBlIExvZ0xldmVsU3RyaW5nID1cbiAgfCAnZGVidWcnXG4gIHwgJ3ZlcmJvc2UnXG4gIHwgJ2luZm8nXG4gIHwgJ3dhcm4nXG4gIHwgJ2Vycm9yJ1xuICB8ICdzaWxlbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ09wdGlvbnMge1xuICBsZXZlbDogTG9nTGV2ZWxTdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIExvZ0NhbGxiYWNrID0gKGNhbGxiYWNrUGFyYW1zOiBMb2dDYWxsYmFja1BhcmFtcykgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dDYWxsYmFja1BhcmFtcyB7XG4gIGxldmVsOiBMb2dMZXZlbFN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBhcmdzOiB1bmtub3duW107XG4gIHR5cGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBMb2dnZXIgaW5zdGFuY2VzXG4gKi9cbmV4cG9ydCBjb25zdCBpbnN0YW5jZXM6IExvZ2dlcltdID0gW107XG5cbi8qKlxuICogVGhlIEpTIFNESyBzdXBwb3J0cyA1IGxvZyBsZXZlbHMgYW5kIGFsc28gYWxsb3dzIGEgdXNlciB0aGUgYWJpbGl0eSB0b1xuICogc2lsZW5jZSB0aGUgbG9ncyBhbHRvZ2V0aGVyLlxuICpcbiAqIFRoZSBvcmRlciBpcyBhIGZvbGxvd3M6XG4gKiBERUJVRyA8IFZFUkJPU0UgPCBJTkZPIDwgV0FSTiA8IEVSUk9SXG4gKlxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIHdpbGwgYmUgY2FwdHVyZWQgKGkuZS4gaWZcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgSU5GT2AsIGVycm9ycyB3aWxsIHN0aWxsIGJlIGxvZ2dlZCwgYnV0IGBERUJVR2AgYW5kXG4gKiBgVkVSQk9TRWAgbG9ncyB3aWxsIG5vdClcbiAqL1xuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBERUJVRyxcbiAgVkVSQk9TRSxcbiAgSU5GTyxcbiAgV0FSTixcbiAgRVJST1IsXG4gIFNJTEVOVFxufVxuXG5jb25zdCBsZXZlbFN0cmluZ1RvRW51bTogeyBba2V5IGluIExvZ0xldmVsU3RyaW5nXTogTG9nTGV2ZWwgfSA9IHtcbiAgJ2RlYnVnJzogTG9nTGV2ZWwuREVCVUcsXG4gICd2ZXJib3NlJzogTG9nTGV2ZWwuVkVSQk9TRSxcbiAgJ2luZm8nOiBMb2dMZXZlbC5JTkZPLFxuICAnd2Fybic6IExvZ0xldmVsLldBUk4sXG4gICdlcnJvcic6IExvZ0xldmVsLkVSUk9SLFxuICAnc2lsZW50JzogTG9nTGV2ZWwuU0lMRU5UXG59O1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGxvZyBsZXZlbFxuICovXG5jb25zdCBkZWZhdWx0TG9nTGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSU5GTztcblxuLyoqXG4gKiBXZSBhbGxvdyB1c2VycyB0aGUgYWJpbGl0eSB0byBwYXNzIHRoZWlyIG93biBsb2cgaGFuZGxlci4gV2Ugd2lsbCBwYXNzIHRoZVxuICogdHlwZSBvZiBsb2csIHRoZSBjdXJyZW50IGxvZyBsZXZlbCwgYW5kIGFueSBvdGhlciBhcmd1bWVudHMgcGFzc2VkIChpLmUuIHRoZVxuICogbWVzc2FnZXMgdGhhdCB0aGUgdXNlciB3YW50cyB0byBsb2cpIHRvIHRoaXMgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCB0eXBlIExvZ0hhbmRsZXIgPSAoXG4gIGxvZ2dlckluc3RhbmNlOiBMb2dnZXIsXG4gIGxvZ1R5cGU6IExvZ0xldmVsLFxuICAuLi5hcmdzOiB1bmtub3duW11cbikgPT4gdm9pZDtcblxuLyoqXG4gKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXG4gKiBjaHJvbWUpLiBUbyBhdm9pZCBmb3JjaW5nIHVzZXJzIHRvIGhhdmUgdG8gb3B0LWluIHRvIHRoZXNlIGxvZ3MgdHdpY2VcbiAqIChpLmUuIG9uY2UgZm9yIGZpcmViYXNlLCBhbmQgb25jZSBpbiB0aGUgY29uc29sZSksIHdlIGFyZSBzZW5kaW5nIGBERUJVR2BcbiAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXG4gKi9cbmNvbnN0IENvbnNvbGVNZXRob2QgPSB7XG4gIFtMb2dMZXZlbC5ERUJVR106ICdsb2cnLFxuICBbTG9nTGV2ZWwuVkVSQk9TRV06ICdsb2cnLFxuICBbTG9nTGV2ZWwuSU5GT106ICdpbmZvJyxcbiAgW0xvZ0xldmVsLldBUk5dOiAnd2FybicsXG4gIFtMb2dMZXZlbC5FUlJPUl06ICdlcnJvcidcbn07XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgbG9nIGhhbmRsZXIgd2lsbCBmb3J3YXJkIERFQlVHLCBWRVJCT1NFLCBJTkZPLCBXQVJOLCBhbmQgRVJST1JcbiAqIG1lc3NhZ2VzIG9uIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uc29sZSBjb3VudGVycGFydHMgKGlmIHRoZSBsb2cgbWV0aG9kXG4gKiBpcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgbG9nIGxldmVsKVxuICovXG5jb25zdCBkZWZhdWx0TG9nSGFuZGxlcjogTG9nSGFuZGxlciA9IChpbnN0YW5jZSwgbG9nVHlwZSwgLi4uYXJncyk6IHZvaWQgPT4ge1xuICBpZiAobG9nVHlwZSA8IGluc3RhbmNlLmxvZ0xldmVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgY29uc3QgbWV0aG9kID0gQ29uc29sZU1ldGhvZFtsb2dUeXBlIGFzIGtleW9mIHR5cGVvZiBDb25zb2xlTWV0aG9kXTtcbiAgaWYgKG1ldGhvZCkge1xuICAgIGNvbnNvbGVbbWV0aG9kIGFzICdsb2cnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJ10oXG4gICAgICBgWyR7bm93fV0gICR7aW5zdGFuY2UubmFtZX06YCxcbiAgICAgIC4uLmFyZ3NcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBBdHRlbXB0ZWQgdG8gbG9nIGEgbWVzc2FnZSB3aXRoIGFuIGludmFsaWQgbG9nVHlwZSAodmFsdWU6ICR7bG9nVHlwZX0pYFxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAvKipcbiAgICogR2l2ZXMgeW91IGFuIGluc3RhbmNlIG9mIGEgTG9nZ2VyIHRvIGNhcHR1cmUgbWVzc2FnZXMgYWNjb3JkaW5nIHRvXG4gICAqIEZpcmViYXNlJ3MgbG9nZ2luZyBzY2hlbWUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIHRoYXQgdGhlIGxvZ3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGhcbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAvKipcbiAgICAgKiBDYXB0dXJlIHRoZSBjdXJyZW50IGluc3RhbmNlIGZvciBsYXRlciB1c2VcbiAgICAgKi9cbiAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbG9nIGxldmVsIG9mIHRoZSBnaXZlbiBMb2dnZXIgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIF9sb2dMZXZlbCA9IGRlZmF1bHRMb2dMZXZlbDtcblxuICBnZXQgbG9nTGV2ZWwoKTogTG9nTGV2ZWwge1xuICAgIHJldHVybiB0aGlzLl9sb2dMZXZlbDtcbiAgfVxuXG4gIHNldCBsb2dMZXZlbCh2YWw6IExvZ0xldmVsKSB7XG4gICAgaWYgKCEodmFsIGluIExvZ0xldmVsKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBcIiR7dmFsfVwiIGFzc2lnbmVkIHRvIFxcYGxvZ0xldmVsXFxgYCk7XG4gICAgfVxuICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3Igc2V0dGVyL2dldHRlciBoYXZpbmcgdG8gYmUgdGhlIHNhbWUgdHlwZS5cbiAgc2V0TG9nTGV2ZWwodmFsOiBMb2dMZXZlbCB8IExvZ0xldmVsU3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nTGV2ZWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IGxldmVsU3RyaW5nVG9FbnVtW3ZhbF0gOiB2YWw7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1haW4gKGludGVybmFsKSBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cbiAgICogQ2FuIGJlIHNldCB0byBhIG5ldyBmdW5jdGlvbiBpbiBpbnRlcm5hbCBwYWNrYWdlIGNvZGUgYnV0IG5vdCBieSB1c2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBfbG9nSGFuZGxlcjogTG9nSGFuZGxlciA9IGRlZmF1bHRMb2dIYW5kbGVyO1xuICBnZXQgbG9nSGFuZGxlcigpOiBMb2dIYW5kbGVyIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nSGFuZGxlcjtcbiAgfVxuICBzZXQgbG9nSGFuZGxlcih2YWw6IExvZ0hhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgYXNzaWduZWQgdG8gYGxvZ0hhbmRsZXJgIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLl9sb2dIYW5kbGVyID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb25hbCwgYWRkaXRpb25hbCwgdXNlci1kZWZpbmVkIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfdXNlckxvZ0hhbmRsZXI6IExvZ0hhbmRsZXIgfCBudWxsID0gbnVsbDtcbiAgZ2V0IHVzZXJMb2dIYW5kbGVyKCk6IExvZ0hhbmRsZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckxvZ0hhbmRsZXI7XG4gIH1cbiAgc2V0IHVzZXJMb2dIYW5kbGVyKHZhbDogTG9nSGFuZGxlciB8IG51bGwpIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciA9IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb25zIGJlbG93IGFyZSBhbGwgYmFzZWQgb24gdGhlIGBjb25zb2xlYCBpbnRlcmZhY2VcbiAgICovXG5cbiAgZGVidWcoLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xuICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xuICB9XG4gIGxvZyguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJlxuICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuVkVSQk9TRSwgLi4uYXJncyk7XG4gICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcbiAgfVxuICBpbmZvKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLklORk8sIC4uLmFyZ3MpO1xuICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuSU5GTywgLi4uYXJncyk7XG4gIH1cbiAgd2FybiguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5XQVJOLCAuLi5hcmdzKTtcbiAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLldBUk4sIC4uLmFyZ3MpO1xuICB9XG4gIGVycm9yKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcbiAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWw6IExvZ0xldmVsU3RyaW5nIHwgTG9nTGV2ZWwpOiB2b2lkIHtcbiAgaW5zdGFuY2VzLmZvckVhY2goaW5zdCA9PiB7XG4gICAgaW5zdC5zZXRMb2dMZXZlbChsZXZlbCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlckxvZ0hhbmRsZXIoXG4gIGxvZ0NhbGxiYWNrOiBMb2dDYWxsYmFjayB8IG51bGwsXG4gIG9wdGlvbnM/OiBMb2dPcHRpb25zXG4pOiB2b2lkIHtcbiAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiBpbnN0YW5jZXMpIHtcbiAgICBsZXQgY3VzdG9tTG9nTGV2ZWw6IExvZ0xldmVsIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCkge1xuICAgICAgY3VzdG9tTG9nTGV2ZWwgPSBsZXZlbFN0cmluZ1RvRW51bVtvcHRpb25zLmxldmVsXTtcbiAgICB9XG4gICAgaWYgKGxvZ0NhbGxiYWNrID09PSBudWxsKSB7XG4gICAgICBpbnN0YW5jZS51c2VyTG9nSGFuZGxlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gKFxuICAgICAgICBpbnN0YW5jZTogTG9nZ2VyLFxuICAgICAgICBsZXZlbDogTG9nTGV2ZWwsXG4gICAgICAgIC4uLmFyZ3M6IHVua25vd25bXVxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhcmdzXG4gICAgICAgICAgLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXR1cm4gYXJnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFyZy50b1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4gYXJnLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmcpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoYXJnID0+IGFyZylcbiAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICBpZiAobGV2ZWwgPj0gKGN1c3RvbUxvZ0xldmVsID8/IGluc3RhbmNlLmxvZ0xldmVsKSkge1xuICAgICAgICAgIGxvZ0NhbGxiYWNrKHtcbiAgICAgICAgICAgIGxldmVsOiBMb2dMZXZlbFtsZXZlbF0udG9Mb3dlckNhc2UoKSBhcyBMb2dMZXZlbFN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UubmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwgImNvbnN0IGluc3RhbmNlT2ZBbnkgPSAob2JqZWN0LCBjb25zdHJ1Y3RvcnMpID0+IGNvbnN0cnVjdG9ycy5zb21lKChjKSA9PiBvYmplY3QgaW5zdGFuY2VvZiBjKTtcblxubGV0IGlkYlByb3h5YWJsZVR5cGVzO1xubGV0IGN1cnNvckFkdmFuY2VNZXRob2RzO1xuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRJZGJQcm94eWFibGVUeXBlcygpIHtcbiAgICByZXR1cm4gKGlkYlByb3h5YWJsZVR5cGVzIHx8XG4gICAgICAgIChpZGJQcm94eWFibGVUeXBlcyA9IFtcbiAgICAgICAgICAgIElEQkRhdGFiYXNlLFxuICAgICAgICAgICAgSURCT2JqZWN0U3RvcmUsXG4gICAgICAgICAgICBJREJJbmRleCxcbiAgICAgICAgICAgIElEQkN1cnNvcixcbiAgICAgICAgICAgIElEQlRyYW5zYWN0aW9uLFxuICAgICAgICBdKSk7XG59XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkge1xuICAgIHJldHVybiAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgfHxcbiAgICAgICAgKGN1cnNvckFkdmFuY2VNZXRob2RzID0gW1xuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5hZHZhbmNlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWVQcmltYXJ5S2V5LFxuICAgICAgICBdKSk7XG59XG5jb25zdCBjdXJzb3JSZXF1ZXN0TWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uRG9uZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh3cmFwKHJlcXVlc3QucmVzdWx0KSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH0pO1xuICAgIHByb21pc2VcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFNpbmNlIGN1cnNvcmluZyByZXVzZXMgdGhlIElEQlJlcXVlc3QgKCpzaWdoKiksIHdlIGNhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWxcbiAgICAgICAgLy8gKHNlZSB3cmFwRnVuY3Rpb24pLlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJDdXJzb3IpIHtcbiAgICAgICAgICAgIGN1cnNvclJlcXVlc3RNYXAuc2V0KHZhbHVlLCByZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaGluZyB0byBhdm9pZCBcIlVuY2F1Z2h0IFByb21pc2UgZXhjZXB0aW9uc1wiXG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgLy8gVGhpcyBtYXBwaW5nIGV4aXN0cyBpbiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYnV0IGRvZXNuJ3QgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAgIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHgpIHtcbiAgICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gICAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAvLyBQb2x5ZmlsbCBmb3Igb2JqZWN0U3RvcmVOYW1lcyBiZWNhdXNlIG9mIEVkZ2UuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ29iamVjdFN0b3JlTmFtZXMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5vYmplY3RTdG9yZU5hbWVzIHx8IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdHguc3RvcmUgcmV0dXJuIHRoZSBvbmx5IHN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbiwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBtYW55LlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdG9yZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1sxXVxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6IHJlY2VpdmVyLm9iamVjdFN0b3JlKHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2UgdHJhbnNmb3JtIHdoYXRldmVyIHdlIGdldCBiYWNrLlxuICAgICAgICByZXR1cm4gd3JhcCh0YXJnZXRbcHJvcF0pO1xuICAgIH0sXG4gICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24gJiZcbiAgICAgICAgICAgIChwcm9wID09PSAnZG9uZScgfHwgcHJvcCA9PT0gJ3N0b3JlJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldDtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlcGxhY2VUcmFwcyhjYWxsYmFjaykge1xuICAgIGlkYlByb3h5VHJhcHMgPSBjYWxsYmFjayhpZGJQcm94eVRyYXBzKTtcbn1cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbihmdW5jKSB7XG4gICAgLy8gRHVlIHRvIGV4cGVjdGVkIG9iamVjdCBlcXVhbGl0eSAod2hpY2ggaXMgZW5mb3JjZWQgYnkgdGhlIGNhY2hpbmcgaW4gYHdyYXBgKSwgd2VcbiAgICAvLyBvbmx5IGNyZWF0ZSBvbmUgbmV3IGZ1bmMgcGVyIGZ1bmMuXG4gICAgLy8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgb2JqZWN0U3RvcmVOYW1lcyAoYm9vbyksIHNvIHdlIHBvbHlmaWxsIGl0IGhlcmUuXG4gICAgaWYgKGZ1bmMgPT09IElEQkRhdGFiYXNlLnByb3RvdHlwZS50cmFuc2FjdGlvbiAmJlxuICAgICAgICAhKCdvYmplY3RTdG9yZU5hbWVzJyBpbiBJREJUcmFuc2FjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RvcmVOYW1lcywgLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgdHggPSBmdW5jLmNhbGwodW53cmFwKHRoaXMpLCBzdG9yZU5hbWVzLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5zZXQodHgsIHN0b3JlTmFtZXMuc29ydCA/IHN0b3JlTmFtZXMuc29ydCgpIDogW3N0b3JlTmFtZXNdKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKHR4KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ3Vyc29yIG1ldGhvZHMgYXJlIHNwZWNpYWwsIGFzIHRoZSBiZWhhdmlvdXIgaXMgYSBsaXR0bGUgbW9yZSBkaWZmZXJlbnQgdG8gc3RhbmRhcmQgSURCLiBJblxuICAgIC8vIElEQiwgeW91IGFkdmFuY2UgdGhlIGN1cnNvciBhbmQgd2FpdCBmb3IgYSBuZXcgJ3N1Y2Nlc3MnIG9uIHRoZSBJREJSZXF1ZXN0IHRoYXQgZ2F2ZSB5b3UgdGhlXG4gICAgLy8gY3Vyc29yLiBJdCdzIGtpbmRhIGxpa2UgYSBwcm9taXNlIHRoYXQgY2FuIHJlc29sdmUgd2l0aCBtYW55IHZhbHVlcy4gVGhhdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAvLyB3aXRoIHJlYWwgcHJvbWlzZXMsIHNvIGVhY2ggYWR2YW5jZSBtZXRob2RzIHJldHVybnMgYSBuZXcgcHJvbWlzZSBmb3IgdGhlIGN1cnNvciBvYmplY3QsIG9yXG4gICAgLy8gdW5kZWZpbmVkIGlmIHRoZSBlbmQgb2YgdGhlIGN1cnNvciBoYXMgYmVlbiByZWFjaGVkLlxuICAgIGlmIChnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpLmluY2x1ZGVzKGZ1bmMpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgICAgIGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKGN1cnNvclJlcXVlc3RNYXAuZ2V0KHRoaXMpKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHdyYXAoZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiB3cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgIC8vIFRoaXMgZG9lc24ndCByZXR1cm4sIGl0IGp1c3QgY3JlYXRlcyBhICdkb25lJyBwcm9taXNlIGZvciB0aGUgdHJhbnNhY3Rpb24sXG4gICAgLy8gd2hpY2ggaXMgbGF0ZXIgcmV0dXJuZWQgZm9yIHRyYW5zYWN0aW9uLmRvbmUgKHNlZSBpZGJPYmplY3RIYW5kbGVyKS5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbilcbiAgICAgICAgY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHZhbHVlKTtcbiAgICBpZiAoaW5zdGFuY2VPZkFueSh2YWx1ZSwgZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSkpXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGlkYlByb3h5VHJhcHMpO1xuICAgIC8vIFJldHVybiB0aGUgc2FtZSB2YWx1ZSBiYWNrIGlmIHdlJ3JlIG5vdCBnb2luZyB0byB0cmFuc2Zvcm0gaXQuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gd3JhcCh2YWx1ZSkge1xuICAgIC8vIFdlIHNvbWV0aW1lcyBnZW5lcmF0ZSBtdWx0aXBsZSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QgKGVnIHdoZW4gY3Vyc29yaW5nKSwgYmVjYXVzZVxuICAgIC8vIElEQiBpcyB3ZWlyZCBhbmQgYSBzaW5nbGUgSURCUmVxdWVzdCBjYW4geWllbGQgbWFueSByZXNwb25zZXMsIHNvIHRoZXNlIGNhbid0IGJlIGNhY2hlZC5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJSZXF1ZXN0KVxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdCh2YWx1ZSk7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSB0cmFuc2Zvcm1lZCB0aGlzIHZhbHVlIGJlZm9yZSwgcmV1c2UgdGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgIC8vIFRoaXMgaXMgZmFzdGVyLCBidXQgaXQgYWxzbyBwcm92aWRlcyBvYmplY3QgZXF1YWxpdHkuXG4gICAgaWYgKHRyYW5zZm9ybUNhY2hlLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSk7XG4gICAgLy8gTm90IGFsbCB0eXBlcyBhcmUgdHJhbnNmb3JtZWQuXG4gICAgLy8gVGhlc2UgbWF5IGJlIHByaW1pdGl2ZSB0eXBlcywgc28gdGhleSBjYW4ndCBiZSBXZWFrTWFwIGtleXMuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0cmFuc2Zvcm1DYWNoZS5zZXQodmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5jb25zdCB1bndyYXAgPSAodmFsdWUpID0+IHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuXG5leHBvcnQgeyByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYXMgYSwgaW5zdGFuY2VPZkFueSBhcyBpLCByZXBsYWNlVHJhcHMgYXMgciwgdW53cmFwIGFzIHUsIHdyYXAgYXMgdyB9O1xuIiwgImltcG9ydCB7IHcgYXMgd3JhcCwgciBhcyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmV4cG9ydCB7IHUgYXMgdW53cmFwLCB3IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChibG9ja2VkKVxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoKSA9PiBibG9ja2VkKCkpO1xuICAgIG9wZW5Qcm9taXNlXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICBpZiAodGVybWluYXRlZClcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgICAgaWYgKGJsb2NraW5nKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcigndmVyc2lvbmNoYW5nZScsICgpID0+IGJsb2NraW5nKCkpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIHJldHVybiBvcGVuUHJvbWlzZTtcbn1cbi8qKlxuICogRGVsZXRlIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZURCKG5hbWUsIHsgYmxvY2tlZCB9ID0ge30pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKG5hbWUpO1xuICAgIGlmIChibG9ja2VkKVxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoKSA9PiBibG9ja2VkKCkpO1xuICAgIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSlcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICAgIGNvbnN0IHRhcmdldEZ1bmNOYW1lID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICAgIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gICAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG4gICAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAgICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoc3RvcmVOYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgICAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHR4LnN0b3JlO1xuICAgICAgICBpZiAodXNlSW5kZXgpXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcbiAgICAgICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAgICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgICAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAgICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRhcmdldFt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICAgIF0pKVswXTtcbiAgICB9O1xuICAgIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gICAgcmV0dXJuIG1ldGhvZDtcbn1cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gICAgLi4ub2xkVHJhcHMsXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICAgIGhhczogKHRhcmdldCwgcHJvcCkgPT4gISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXModGFyZ2V0LCBwcm9wKSxcbn0pKTtcblxuZXhwb3J0IHsgZGVsZXRlREIsIG9wZW5EQiB9O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudENvbnRhaW5lcixcbiAgQ29tcG9uZW50VHlwZSxcbiAgUHJvdmlkZXIsXG4gIE5hbWVcbn0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2UsIFZlcnNpb25TZXJ2aWNlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIGltcGxlbWVudHMgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbXBvbmVudENvbnRhaW5lcikge31cbiAgLy8gSW4gaW5pdGlhbCBpbXBsZW1lbnRhdGlvbiwgdGhpcyB3aWxsIGJlIGNhbGxlZCBieSBpbnN0YWxsYXRpb25zIG9uXG4gIC8vIGF1dGggdG9rZW4gcmVmcmVzaCwgYW5kIGluc3RhbGxhdGlvbnMgd2lsbCBzZW5kIHRoaXMgc3RyaW5nLlxuICBnZXRQbGF0Zm9ybUluZm9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBwcm92aWRlcnMgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKTtcbiAgICAvLyBMb29wIHRocm91Z2ggcHJvdmlkZXJzIGFuZCBnZXQgbGlicmFyeS92ZXJzaW9uIHBhaXJzIGZyb20gYW55IHRoYXQgYXJlXG4gICAgLy8gdmVyc2lvbiBjb21wb25lbnRzLlxuICAgIHJldHVybiBwcm92aWRlcnNcbiAgICAgIC5tYXAocHJvdmlkZXIgPT4ge1xuICAgICAgICBpZiAoaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyKHByb3ZpZGVyKSkge1xuICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBwcm92aWRlci5nZXRJbW1lZGlhdGUoKSBhcyBWZXJzaW9uU2VydmljZTtcbiAgICAgICAgICByZXR1cm4gYCR7c2VydmljZS5saWJyYXJ5fS8ke3NlcnZpY2UudmVyc2lvbn1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihsb2dTdHJpbmcgPT4gbG9nU3RyaW5nKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxufVxuLyoqXG4gKlxuICogQHBhcmFtIHByb3ZpZGVyIGNoZWNrIGlmIHRoaXMgcHJvdmlkZXIgcHJvdmlkZXMgYSBWZXJzaW9uU2VydmljZVxuICpcbiAqIE5PVEU6IFVzaW5nIFByb3ZpZGVyPCdhcHAtdmVyc2lvbic+IGlzIGEgaGFjayB0byBpbmRpY2F0ZSB0aGF0IHRoZSBwcm92aWRlclxuICogcHJvdmlkZXMgVmVyc2lvblNlcnZpY2UuIFRoZSBwcm92aWRlciBpcyBub3QgbmVjZXNzYXJpbHkgYSAnYXBwLXZlcnNpb24nXG4gKiBwcm92aWRlci5cbiAqL1xuZnVuY3Rpb24gaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyKHByb3ZpZGVyOiBQcm92aWRlcjxOYW1lPik6IGJvb2xlYW4ge1xuICBjb25zdCBjb21wb25lbnQgPSBwcm92aWRlci5nZXRDb21wb25lbnQoKTtcbiAgcmV0dXJuIGNvbXBvbmVudD8udHlwZSA9PT0gQ29tcG9uZW50VHlwZS5WRVJTSU9OO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ0BmaXJlYmFzZS9sb2dnZXInO1xuXG5leHBvcnQgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcignQGZpcmViYXNlL2FwcCcpO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IG5hbWUgYXMgYXBwTmFtZSB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGFwcENvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi9hcHAtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGFuYWx5dGljc0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9hbmFseXRpY3MtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGFuYWx5dGljc05hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9hbmFseXRpY3MvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYXBwQ2hlY2tDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvYXBwLWNoZWNrLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhcHBDaGVja05hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9hcHAtY2hlY2svcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYXV0aE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGF1dGhDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvYXV0aC1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZGF0YWJhc2VOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvZGF0YWJhc2UvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZGF0YWJhc2VDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvZGF0YWJhc2UtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGZ1bmN0aW9uc05hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9mdW5jdGlvbnMvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZnVuY3Rpb25zQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2Z1bmN0aW9ucy1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgaW5zdGFsbGF0aW9uc05hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9pbnN0YWxsYXRpb25zL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGluc3RhbGxhdGlvbnNDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvaW5zdGFsbGF0aW9ucy1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgbWVzc2FnaW5nTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL21lc3NhZ2luZy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBtZXNzYWdpbmdDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvbWVzc2FnaW5nLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBwZXJmb3JtYW5jZU5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9wZXJmb3JtYW5jZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBwZXJmb3JtYW5jZUNvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9wZXJmb3JtYW5jZS1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgcmVtb3RlQ29uZmlnTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL3JlbW90ZS1jb25maWcvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgcmVtb3RlQ29uZmlnQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL3JlbW90ZS1jb25maWctY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHN0b3JhZ2VOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvc3RvcmFnZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBzdG9yYWdlQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL3N0b3JhZ2UtY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGZpcmVzdG9yZU5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9maXJlc3RvcmUvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZmlyZXN0b3JlQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2ZpcmVzdG9yZS1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgcGFja2FnZU5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9maXJlYmFzZS9wYWNrYWdlLmpzb24nO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGFwcCBuYW1lXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0xPR19TVFJJTkcgPSB7XG4gIFthcHBOYW1lXTogJ2ZpcmUtY29yZScsXG4gIFthcHBDb21wYXROYW1lXTogJ2ZpcmUtY29yZS1jb21wYXQnLFxuICBbYW5hbHl0aWNzTmFtZV06ICdmaXJlLWFuYWx5dGljcycsXG4gIFthbmFseXRpY3NDb21wYXROYW1lXTogJ2ZpcmUtYW5hbHl0aWNzLWNvbXBhdCcsXG4gIFthcHBDaGVja05hbWVdOiAnZmlyZS1hcHAtY2hlY2snLFxuICBbYXBwQ2hlY2tDb21wYXROYW1lXTogJ2ZpcmUtYXBwLWNoZWNrLWNvbXBhdCcsXG4gIFthdXRoTmFtZV06ICdmaXJlLWF1dGgnLFxuICBbYXV0aENvbXBhdE5hbWVdOiAnZmlyZS1hdXRoLWNvbXBhdCcsXG4gIFtkYXRhYmFzZU5hbWVdOiAnZmlyZS1ydGRiJyxcbiAgW2RhdGFiYXNlQ29tcGF0TmFtZV06ICdmaXJlLXJ0ZGItY29tcGF0JyxcbiAgW2Z1bmN0aW9uc05hbWVdOiAnZmlyZS1mbicsXG4gIFtmdW5jdGlvbnNDb21wYXROYW1lXTogJ2ZpcmUtZm4tY29tcGF0JyxcbiAgW2luc3RhbGxhdGlvbnNOYW1lXTogJ2ZpcmUtaWlkJyxcbiAgW2luc3RhbGxhdGlvbnNDb21wYXROYW1lXTogJ2ZpcmUtaWlkLWNvbXBhdCcsXG4gIFttZXNzYWdpbmdOYW1lXTogJ2ZpcmUtZmNtJyxcbiAgW21lc3NhZ2luZ0NvbXBhdE5hbWVdOiAnZmlyZS1mY20tY29tcGF0JyxcbiAgW3BlcmZvcm1hbmNlTmFtZV06ICdmaXJlLXBlcmYnLFxuICBbcGVyZm9ybWFuY2VDb21wYXROYW1lXTogJ2ZpcmUtcGVyZi1jb21wYXQnLFxuICBbcmVtb3RlQ29uZmlnTmFtZV06ICdmaXJlLXJjJyxcbiAgW3JlbW90ZUNvbmZpZ0NvbXBhdE5hbWVdOiAnZmlyZS1yYy1jb21wYXQnLFxuICBbc3RvcmFnZU5hbWVdOiAnZmlyZS1nY3MnLFxuICBbc3RvcmFnZUNvbXBhdE5hbWVdOiAnZmlyZS1nY3MtY29tcGF0JyxcbiAgW2ZpcmVzdG9yZU5hbWVdOiAnZmlyZS1mc3QnLFxuICBbZmlyZXN0b3JlQ29tcGF0TmFtZV06ICdmaXJlLWZzdC1jb21wYXQnLFxuICAnZmlyZS1qcyc6ICdmaXJlLWpzJywgLy8gUGxhdGZvcm0gaWRlbnRpZmllciBmb3IgSlMgU0RLLlxuICBbcGFja2FnZU5hbWVdOiAnZmlyZS1qcy1hbGwnXG59IGFzIGNvbnN0O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEZpcmViYXNlQXBwIH0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm92aWRlciwgTmFtZSB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgREVGQVVMVF9FTlRSWV9OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBJbXBsIH0gZnJvbSAnLi9maXJlYmFzZUFwcCc7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBfYXBwcyA9IG5ldyBNYXA8c3RyaW5nLCBGaXJlYmFzZUFwcD4oKTtcblxuLyoqXG4gKiBSZWdpc3RlcmVkIGNvbXBvbmVudHMuXG4gKlxuICogQGludGVybmFsXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgY29uc3QgX2NvbXBvbmVudHMgPSBuZXcgTWFwPHN0cmluZywgQ29tcG9uZW50PGFueT4+KCk7XG5cbi8qKlxuICogQHBhcmFtIGNvbXBvbmVudCAtIHRoZSBjb21wb25lbnQgYmVpbmcgYWRkZWQgdG8gdGhpcyBhcHAncyBjb250YWluZXJcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9hZGRDb21wb25lbnQ8VCBleHRlbmRzIE5hbWU+KFxuICBhcHA6IEZpcmViYXNlQXBwLFxuICBjb21wb25lbnQ6IENvbXBvbmVudDxUPlxuKTogdm9pZCB7XG4gIHRyeSB7XG4gICAgKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgIGBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gZmFpbGVkIHRvIHJlZ2lzdGVyIHdpdGggRmlyZWJhc2VBcHAgJHthcHAubmFtZX1gLFxuICAgICAgZVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoXG4gIGFwcDogRmlyZWJhc2VBcHAsXG4gIGNvbXBvbmVudDogQ29tcG9uZW50XG4pOiB2b2lkIHtcbiAgKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmNvbnRhaW5lci5hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChjb21wb25lbnQpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gdGhlIGNvbXBvbmVudCB0byByZWdpc3RlclxuICogQHJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBpcyByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3JlZ2lzdGVyQ29tcG9uZW50PFQgZXh0ZW5kcyBOYW1lPihcbiAgY29tcG9uZW50OiBDb21wb25lbnQ8VD5cbik6IGJvb2xlYW4ge1xuICBjb25zdCBjb21wb25lbnROYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIGlmIChfY29tcG9uZW50cy5oYXMoY29tcG9uZW50TmFtZSkpIHtcbiAgICBsb2dnZXIuZGVidWcoXG4gICAgICBgVGhlcmUgd2VyZSBtdWx0aXBsZSBhdHRlbXB0cyB0byByZWdpc3RlciBjb21wb25lbnQgJHtjb21wb25lbnROYW1lfS5gXG4gICAgKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9jb21wb25lbnRzLnNldChjb21wb25lbnROYW1lLCBjb21wb25lbnQpO1xuXG4gIC8vIGFkZCB0aGUgY29tcG9uZW50IHRvIGV4aXN0aW5nIGFwcCBpbnN0YW5jZXNcbiAgZm9yIChjb25zdCBhcHAgb2YgX2FwcHMudmFsdWVzKCkpIHtcbiAgICBfYWRkQ29tcG9uZW50KGFwcCBhcyBGaXJlYmFzZUFwcEltcGwsIGNvbXBvbmVudCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXG4gKiBAcGFyYW0gbmFtZSAtIHNlcnZpY2UgbmFtZVxuICpcbiAqIEByZXR1cm5zIHRoZSBwcm92aWRlciBmb3IgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldFByb3ZpZGVyPFQgZXh0ZW5kcyBOYW1lPihcbiAgYXBwOiBGaXJlYmFzZUFwcCxcbiAgbmFtZTogVFxuKTogUHJvdmlkZXI8VD4ge1xuICBjb25zdCBoZWFydGJlYXRDb250cm9sbGVyID0gKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmNvbnRhaW5lclxuICAgIC5nZXRQcm92aWRlcignaGVhcnRiZWF0JylcbiAgICAuZ2V0SW1tZWRpYXRlKHsgb3B0aW9uYWw6IHRydWUgfSk7XG4gIGlmIChoZWFydGJlYXRDb250cm9sbGVyKSB7XG4gICAgdm9pZCBoZWFydGJlYXRDb250cm9sbGVyLnRyaWdnZXJIZWFydGJlYXQoKTtcbiAgfVxuICByZXR1cm4gKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmNvbnRhaW5lci5nZXRQcm92aWRlcihuYW1lKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXG4gKiBAcGFyYW0gbmFtZSAtIHNlcnZpY2UgbmFtZVxuICogQHBhcmFtIGluc3RhbmNlSWRlbnRpZmllciAtIHNlcnZpY2UgaW5zdGFuY2UgaWRlbnRpZmllciBpbiBjYXNlIHRoZSBzZXJ2aWNlIHN1cHBvcnRzIG11bHRpcGxlIGluc3RhbmNlc1xuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3JlbW92ZVNlcnZpY2VJbnN0YW5jZTxUIGV4dGVuZHMgTmFtZT4oXG4gIGFwcDogRmlyZWJhc2VBcHAsXG4gIG5hbWU6IFQsXG4gIGluc3RhbmNlSWRlbnRpZmllcjogc3RyaW5nID0gREVGQVVMVF9FTlRSWV9OQU1FXG4pOiB2b2lkIHtcbiAgX2dldFByb3ZpZGVyKGFwcCwgbmFtZSkuY2xlYXJJbnN0YW5jZShpbnN0YW5jZUlkZW50aWZpZXIpO1xufVxuXG4vKipcbiAqIFRlc3Qgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NsZWFyQ29tcG9uZW50cygpOiB2b2lkIHtcbiAgX2NvbXBvbmVudHMuY2xlYXIoKTtcbn1cblxuLyoqXG4gKiBFeHBvcnRlZCBpbiBvcmRlciB0byBiZSB1c2VkIGluIGFwcC1jb21wYXQgcGFja2FnZVxuICovXG5leHBvcnQgeyBERUZBVUxUX0VOVFJZX05BTUUgYXMgX0RFRkFVTFRfRU5UUllfTkFNRSB9O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgRXJyb3JNYXAgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEFwcEVycm9yIHtcbiAgTk9fQVBQID0gJ25vLWFwcCcsXG4gIEJBRF9BUFBfTkFNRSA9ICdiYWQtYXBwLW5hbWUnLFxuICBEVVBMSUNBVEVfQVBQID0gJ2R1cGxpY2F0ZS1hcHAnLFxuICBBUFBfREVMRVRFRCA9ICdhcHAtZGVsZXRlZCcsXG4gIE5PX09QVElPTlMgPSAnbm8tb3B0aW9ucycsXG4gIElOVkFMSURfQVBQX0FSR1VNRU5UID0gJ2ludmFsaWQtYXBwLWFyZ3VtZW50JyxcbiAgSU5WQUxJRF9MT0dfQVJHVU1FTlQgPSAnaW52YWxpZC1sb2ctYXJndW1lbnQnLFxuICBJREJfT1BFTiA9ICdpZGItb3BlbicsXG4gIElEQl9HRVQgPSAnaWRiLWdldCcsXG4gIElEQl9XUklURSA9ICdpZGItc2V0JyxcbiAgSURCX0RFTEVURSA9ICdpZGItZGVsZXRlJ1xufVxuXG5jb25zdCBFUlJPUlM6IEVycm9yTWFwPEFwcEVycm9yPiA9IHtcbiAgW0FwcEVycm9yLk5PX0FQUF06XG4gICAgXCJObyBGaXJlYmFzZSBBcHAgJ3skYXBwTmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQgLSBcIiArXG4gICAgJ2NhbGwgRmlyZWJhc2UgQXBwLmluaXRpYWxpemVBcHAoKScsXG4gIFtBcHBFcnJvci5CQURfQVBQX05BTUVdOiBcIklsbGVnYWwgQXBwIG5hbWU6ICd7JGFwcE5hbWV9XCIsXG4gIFtBcHBFcnJvci5EVVBMSUNBVEVfQVBQXTpcbiAgICBcIkZpcmViYXNlIEFwcCBuYW1lZCAneyRhcHBOYW1lfScgYWxyZWFkeSBleGlzdHMgd2l0aCBkaWZmZXJlbnQgb3B0aW9ucyBvciBjb25maWdcIixcbiAgW0FwcEVycm9yLkFQUF9ERUxFVEVEXTogXCJGaXJlYmFzZSBBcHAgbmFtZWQgJ3skYXBwTmFtZX0nIGFscmVhZHkgZGVsZXRlZFwiLFxuICBbQXBwRXJyb3IuTk9fT1BUSU9OU106XG4gICAgJ05lZWQgdG8gcHJvdmlkZSBvcHRpb25zLCB3aGVuIG5vdCBiZWluZyBkZXBsb3llZCB0byBob3N0aW5nIHZpYSBzb3VyY2UuJyxcbiAgW0FwcEVycm9yLklOVkFMSURfQVBQX0FSR1VNRU5UXTpcbiAgICAnZmlyZWJhc2UueyRhcHBOYW1lfSgpIHRha2VzIGVpdGhlciBubyBhcmd1bWVudCBvciBhICcgK1xuICAgICdGaXJlYmFzZSBBcHAgaW5zdGFuY2UuJyxcbiAgW0FwcEVycm9yLklOVkFMSURfTE9HX0FSR1VNRU5UXTpcbiAgICAnRmlyc3QgYXJndW1lbnQgdG8gYG9uTG9nYCBtdXN0IGJlIG51bGwgb3IgYSBmdW5jdGlvbi4nLFxuICBbQXBwRXJyb3IuSURCX09QRU5dOlxuICAgICdFcnJvciB0aHJvd24gd2hlbiBvcGVuaW5nIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gIFtBcHBFcnJvci5JREJfR0VUXTpcbiAgICAnRXJyb3IgdGhyb3duIHdoZW4gcmVhZGluZyBmcm9tIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gIFtBcHBFcnJvci5JREJfV1JJVEVdOlxuICAgICdFcnJvciB0aHJvd24gd2hlbiB3cml0aW5nIHRvIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gIFtBcHBFcnJvci5JREJfREVMRVRFXTpcbiAgICAnRXJyb3IgdGhyb3duIHdoZW4gZGVsZXRpbmcgZnJvbSBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nXG59O1xuXG5pbnRlcmZhY2UgRXJyb3JQYXJhbXMge1xuICBbQXBwRXJyb3IuTk9fQVBQXTogeyBhcHBOYW1lOiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLkJBRF9BUFBfTkFNRV06IHsgYXBwTmFtZTogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5EVVBMSUNBVEVfQVBQXTogeyBhcHBOYW1lOiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLkFQUF9ERUxFVEVEXTogeyBhcHBOYW1lOiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLklOVkFMSURfQVBQX0FSR1VNRU5UXTogeyBhcHBOYW1lOiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLklEQl9PUEVOXTogeyBvcmlnaW5hbEVycm9yTWVzc2FnZT86IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSURCX0dFVF06IHsgb3JpZ2luYWxFcnJvck1lc3NhZ2U/OiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLklEQl9XUklURV06IHsgb3JpZ2luYWxFcnJvck1lc3NhZ2U/OiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLklEQl9ERUxFVEVdOiB7IG9yaWdpbmFsRXJyb3JNZXNzYWdlPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeTxBcHBFcnJvciwgRXJyb3JQYXJhbXM+KFxuICAnYXBwJyxcbiAgJ0ZpcmViYXNlJyxcbiAgRVJST1JTXG4pO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIEZpcmViYXNlQXBwLFxuICBGaXJlYmFzZU9wdGlvbnMsXG4gIEZpcmViYXNlQXBwU2V0dGluZ3Ncbn0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50Q29udGFpbmVyLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFR5cGVcbn0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBBcHBFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQXBwSW1wbCBpbXBsZW1lbnRzIEZpcmViYXNlQXBwIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfb3B0aW9uczogRmlyZWJhc2VPcHRpb25zO1xuICBwcml2YXRlIHJlYWRvbmx5IF9uYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcmlnaW5hbCBjb25maWcgdmFsdWVzIHBhc3NlZCBpbiBhcyBhIGNvbnN0cnVjdG9yIHBhcmFtZXRlci5cbiAgICogSXQgaXMgb25seSB1c2VkIHRvIGNvbXBhcmUgd2l0aCBhbm90aGVyIGNvbmZpZyBvYmplY3QgdG8gc3VwcG9ydCBpZGVtcG90ZW50IGluaXRpYWxpemVBcHAoKS5cbiAgICpcbiAgICogVXBkYXRpbmcgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIG9uIHRoZSBBcHAgaW5zdGFuY2Ugd2lsbCBub3QgY2hhbmdlIGl0cyB2YWx1ZSBpbiBfY29uZmlnLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfY29uZmlnOiBSZXF1aXJlZDxGaXJlYmFzZUFwcFNldHRpbmdzPjtcbiAgcHJpdmF0ZSBfYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9uczogRmlyZWJhc2VPcHRpb25zLFxuICAgIGNvbmZpZzogUmVxdWlyZWQ8RmlyZWJhc2VBcHBTZXR0aW5ncz4sXG4gICAgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXJcbiAgKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4uY29uZmlnIH07XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9XG4gICAgICBjb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDb21wb25lbnQoXG4gICAgICBuZXcgQ29tcG9uZW50KCdhcHAnLCAoKSA9PiB0aGlzLCBDb21wb25lbnRUeXBlLlBVQkxJQylcbiAgICApO1xuICB9XG5cbiAgZ2V0IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDtcbiAgfVxuXG4gIHNldCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xuICAgIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IHZhbDtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKTogRmlyZWJhc2VPcHRpb25zIHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBnZXQgY29uZmlnKCk6IFJlcXVpcmVkPEZpcmViYXNlQXBwU2V0dGluZ3M+IHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKTogQ29tcG9uZW50Q29udGFpbmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IGlzRGVsZXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNEZWxldGVkO1xuICB9XG5cbiAgc2V0IGlzRGVsZXRlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0RlbGV0ZWQgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIEVycm9yIGlmIHRoZSBBcHAgaGFzIGFscmVhZHkgYmVlbiBkZWxldGVkIC1cbiAgICogdXNlIGJlZm9yZSBwZXJmb3JtaW5nIEFQSSBhY3Rpb25zIG9uIHRoZSBBcHAuXG4gICAqL1xuICBwcml2YXRlIGNoZWNrRGVzdHJveWVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuQVBQX0RFTEVURUQsIHsgYXBwTmFtZTogdGhpcy5fbmFtZSB9KTtcbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBGaXJlYmFzZUFwcCxcbiAgRmlyZWJhc2VPcHRpb25zLFxuICBGaXJlYmFzZUFwcFNldHRpbmdzXG59IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7IERFRkFVTFRfRU5UUllfTkFNRSwgUExBVEZPUk1fTE9HX1NUUklORyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEFwcEVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50Q29udGFpbmVyLFxuICBDb21wb25lbnQsXG4gIE5hbWUsXG4gIENvbXBvbmVudFR5cGVcbn0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IEZpcmViYXNlQXBwSW1wbCB9IGZyb20gJy4vZmlyZWJhc2VBcHAnO1xuaW1wb3J0IHsgX2FwcHMsIF9jb21wb25lbnRzLCBfcmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7XG4gIExvZ0xldmVsU3RyaW5nLFxuICBzZXRMb2dMZXZlbCBhcyBzZXRMb2dMZXZlbEltcGwsXG4gIExvZ0NhbGxiYWNrLFxuICBMb2dPcHRpb25zLFxuICBzZXRVc2VyTG9nSGFuZGxlclxufSBmcm9tICdAZmlyZWJhc2UvbG9nZ2VyJztcbmltcG9ydCB7IGRlZXBFcXVhbCwgZ2V0RGVmYXVsdEFwcENvbmZpZyB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuZXhwb3J0IHsgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuLyoqXG4gKiBUaGUgY3VycmVudCBTREsgdmVyc2lvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBTREtfVkVSU0lPTiA9IHZlcnNpb247XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgaW5pdGlhbGl6ZXMgYSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXG4gKlxuICogU2VlXG4gKiB7QGxpbmtcbiAqICAgaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2FkZF9maXJlYmFzZV90b195b3VyX2FwcFxuICogICB8IEFkZCBGaXJlYmFzZSB0byB5b3VyIGFwcH0gYW5kXG4gKiB7QGxpbmtcbiAqICAgaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI211bHRpcGxlLXByb2plY3RzXG4gKiAgIHwgSW5pdGlhbGl6ZSBtdWx0aXBsZSBwcm9qZWN0c30gZm9yIGRldGFpbGVkIGRvY3VtZW50YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqXG4gKiAvLyBJbml0aWFsaXplIGRlZmF1bHQgYXBwXG4gKiAvLyBSZXRyaWV2ZSB5b3VyIG93biBvcHRpb25zIHZhbHVlcyBieSBhZGRpbmcgYSB3ZWIgYXBwIG9uXG4gKiAvLyBodHRwczovL2NvbnNvbGUuZmlyZWJhc2UuZ29vZ2xlLmNvbVxuICogaW5pdGlhbGl6ZUFwcCh7XG4gKiAgIGFwaUtleTogXCJBSXphLi4uLlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXV0aCAvIEdlbmVyYWwgVXNlXG4gKiAgIGF1dGhEb21haW46IFwiWU9VUl9BUFAuZmlyZWJhc2VhcHAuY29tXCIsICAgICAgICAgLy8gQXV0aCB3aXRoIHBvcHVwL3JlZGlyZWN0XG4gKiAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vWU9VUl9BUFAuZmlyZWJhc2Vpby5jb21cIiwgLy8gUmVhbHRpbWUgRGF0YWJhc2VcbiAqICAgc3RvcmFnZUJ1Y2tldDogXCJZT1VSX0FQUC5hcHBzcG90LmNvbVwiLCAgICAgICAgICAvLyBTdG9yYWdlXG4gKiAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEyMzQ1Njc4OVwiICAgICAgICAgICAgICAgICAgLy8gQ2xvdWQgTWVzc2FnaW5nXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqYXZhc2NyaXB0XG4gKlxuICogLy8gSW5pdGlhbGl6ZSBhbm90aGVyIGFwcFxuICogY29uc3Qgb3RoZXJBcHAgPSBpbml0aWFsaXplQXBwKHtcbiAqICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly88T1RIRVJfREFUQUJBU0VfTkFNRT4uZmlyZWJhc2Vpby5jb21cIixcbiAqICAgc3RvcmFnZUJ1Y2tldDogXCI8T1RIRVJfU1RPUkFHRV9CVUNLRVQ+LmFwcHNwb3QuY29tXCJcbiAqIH0sIFwib3RoZXJBcHBcIik7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgdG8gY29uZmlndXJlIHRoZSBhcHAncyBzZXJ2aWNlcy5cbiAqIEBwYXJhbSBuYW1lIC0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgYXBwIHRvIGluaXRpYWxpemUuIElmIG5vIG5hbWVcbiAqICAgaXMgcHJvdmlkZWQsIHRoZSBkZWZhdWx0IGlzIGBcIltERUZBVUxUXVwiYC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgaW5pdGlhbGl6ZWQgYXBwLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoXG4gIG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucyxcbiAgbmFtZT86IHN0cmluZ1xuKTogRmlyZWJhc2VBcHA7XG4vKipcbiAqIENyZWF0ZXMgYW5kIGluaXRpYWxpemVzIGEgRmlyZWJhc2VBcHAgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIHRvIGNvbmZpZ3VyZSB0aGUgYXBwJ3Mgc2VydmljZXMuXG4gKiBAcGFyYW0gY29uZmlnIC0gRmlyZWJhc2VBcHAgQ29uZmlndXJhdGlvblxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoXG4gIG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucyxcbiAgY29uZmlnPzogRmlyZWJhc2VBcHBTZXR0aW5nc1xuKTogRmlyZWJhc2VBcHA7XG4vKipcbiAqIENyZWF0ZXMgYW5kIGluaXRpYWxpemVzIGEgRmlyZWJhc2VBcHAgaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCgpOiBGaXJlYmFzZUFwcDtcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKFxuICBfb3B0aW9ucz86IEZpcmViYXNlT3B0aW9ucyxcbiAgcmF3Q29uZmlnID0ge31cbik6IEZpcmViYXNlQXBwIHtcbiAgbGV0IG9wdGlvbnMgPSBfb3B0aW9ucztcblxuICBpZiAodHlwZW9mIHJhd0NvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBuYW1lID0gcmF3Q29uZmlnO1xuICAgIHJhd0NvbmZpZyA9IHsgbmFtZSB9O1xuICB9XG5cbiAgY29uc3QgY29uZmlnOiBSZXF1aXJlZDxGaXJlYmFzZUFwcFNldHRpbmdzPiA9IHtcbiAgICBuYW1lOiBERUZBVUxUX0VOVFJZX05BTUUsXG4gICAgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkOiBmYWxzZSxcbiAgICAuLi5yYXdDb25maWdcbiAgfTtcbiAgY29uc3QgbmFtZSA9IGNvbmZpZy5uYW1lO1xuXG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgIW5hbWUpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5CQURfQVBQX05BTUUsIHtcbiAgICAgIGFwcE5hbWU6IFN0cmluZyhuYW1lKVxuICAgIH0pO1xuICB9XG5cbiAgb3B0aW9ucyB8fD0gZ2V0RGVmYXVsdEFwcENvbmZpZygpO1xuXG4gIGlmICghb3B0aW9ucykge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLk5PX09QVElPTlMpO1xuICB9XG5cbiAgY29uc3QgZXhpc3RpbmdBcHAgPSBfYXBwcy5nZXQobmFtZSkgYXMgRmlyZWJhc2VBcHBJbXBsO1xuICBpZiAoZXhpc3RpbmdBcHApIHtcbiAgICAvLyByZXR1cm4gdGhlIGV4aXN0aW5nIGFwcCBpZiBvcHRpb25zIGFuZCBjb25maWcgZGVlcCBlcXVhbCB0aGUgb25lcyBpbiB0aGUgZXhpc3RpbmcgYXBwLlxuICAgIGlmIChcbiAgICAgIGRlZXBFcXVhbChvcHRpb25zLCBleGlzdGluZ0FwcC5vcHRpb25zKSAmJlxuICAgICAgZGVlcEVxdWFsKGNvbmZpZywgZXhpc3RpbmdBcHAuY29uZmlnKVxuICAgICkge1xuICAgICAgcmV0dXJuIGV4aXN0aW5nQXBwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5EVVBMSUNBVEVfQVBQLCB7IGFwcE5hbWU6IG5hbWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gbmV3IENvbXBvbmVudENvbnRhaW5lcihuYW1lKTtcbiAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgX2NvbXBvbmVudHMudmFsdWVzKCkpIHtcbiAgICBjb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH1cblxuICBjb25zdCBuZXdBcHAgPSBuZXcgRmlyZWJhc2VBcHBJbXBsKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKTtcblxuICBfYXBwcy5zZXQobmFtZSwgbmV3QXBwKTtcblxuICByZXR1cm4gbmV3QXBwO1xufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cbiAqXG4gKiBXaGVuIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50cywgdGhlIGRlZmF1bHQgYXBwIGlzIHJldHVybmVkLiBXaGVuIGFuIGFwcCBuYW1lXG4gKiBpcyBwcm92aWRlZCwgdGhlIGFwcCBjb3JyZXNwb25kaW5nIHRvIHRoYXQgbmFtZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBBbiBleGNlcHRpb24gaXMgdGhyb3duIGlmIHRoZSBhcHAgYmVpbmcgcmV0cmlldmVkIGhhcyBub3QgeWV0IGJlZW5cbiAqIGluaXRpYWxpemVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAvLyBSZXR1cm4gdGhlIGRlZmF1bHQgYXBwXG4gKiBjb25zdCBhcHAgPSBnZXRBcHAoKTtcbiAqIGBgYFxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAvLyBSZXR1cm4gYSBuYW1lZCBhcHBcbiAqIGNvbnN0IG90aGVyQXBwID0gZ2V0QXBwKFwib3RoZXJBcHBcIik7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbmFtZSAtIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGFwcCB0byByZXR1cm4uIElmIG5vIG5hbWUgaXNcbiAqICAgcHJvdmlkZWQsIHRoZSBkZWZhdWx0IGlzIGBcIltERUZBVUxUXVwiYC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgYXBwIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3ZpZGVkIGFwcCBuYW1lLlxuICogICBJZiBubyBhcHAgbmFtZSBpcyBwcm92aWRlZCwgdGhlIGRlZmF1bHQgYXBwIGlzIHJldHVybmVkLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcChuYW1lOiBzdHJpbmcgPSBERUZBVUxUX0VOVFJZX05BTUUpOiBGaXJlYmFzZUFwcCB7XG4gIGNvbnN0IGFwcCA9IF9hcHBzLmdldChuYW1lKTtcbiAgaWYgKCFhcHAgJiYgbmFtZSA9PT0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVBcHAoKTtcbiAgfVxuICBpZiAoIWFwcCkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLk5PX0FQUCwgeyBhcHBOYW1lOiBuYW1lIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFwcDtcbn1cblxuLyoqXG4gKiBBIChyZWFkLW9ubHkpIGFycmF5IG9mIGFsbCBpbml0aWFsaXplZCBhcHBzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwcygpOiBGaXJlYmFzZUFwcFtdIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oX2FwcHMudmFsdWVzKCkpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhpcyBhcHAgdW51c2FibGUgYW5kIGZyZWVzIHRoZSByZXNvdXJjZXMgb2YgYWxsIGFzc29jaWF0ZWRcbiAqIHNlcnZpY2VzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBkZWxldGVBcHAoYXBwKVxuICogICAudGhlbihmdW5jdGlvbigpIHtcbiAqICAgICBjb25zb2xlLmxvZyhcIkFwcCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAqICAgfSlcbiAqICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gKiAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZWxldGluZyBhcHA6XCIsIGVycm9yKTtcbiAqICAgfSk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBcHAoYXBwOiBGaXJlYmFzZUFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBuYW1lID0gYXBwLm5hbWU7XG4gIGlmIChfYXBwcy5oYXMobmFtZSkpIHtcbiAgICBfYXBwcy5kZWxldGUobmFtZSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAoYXBwIGFzIEZpcmViYXNlQXBwSW1wbCkuY29udGFpbmVyXG4gICAgICAgIC5nZXRQcm92aWRlcnMoKVxuICAgICAgICAubWFwKHByb3ZpZGVyID0+IHByb3ZpZGVyLmRlbGV0ZSgpKVxuICAgICk7XG4gICAgKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmlzRGVsZXRlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBsaWJyYXJ5J3MgbmFtZSBhbmQgdmVyc2lvbiBmb3IgcGxhdGZvcm0gbG9nZ2luZyBwdXJwb3Nlcy5cbiAqIEBwYXJhbSBsaWJyYXJ5IC0gTmFtZSBvZiAxcCBvciAzcCBsaWJyYXJ5IChlLmcuIGZpcmVzdG9yZSwgYW5ndWxhcmZpcmUpXG4gKiBAcGFyYW0gdmVyc2lvbiAtIEN1cnJlbnQgdmVyc2lvbiBvZiB0aGF0IGxpYnJhcnkuXG4gKiBAcGFyYW0gdmFyaWFudCAtIEJ1bmRsZSB2YXJpYW50LCBlLmcuLCBub2RlLCBybiwgZXRjLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVmVyc2lvbihcbiAgbGlicmFyeUtleU9yTmFtZTogc3RyaW5nLFxuICB2ZXJzaW9uOiBzdHJpbmcsXG4gIHZhcmlhbnQ/OiBzdHJpbmdcbik6IHZvaWQge1xuICAvLyBUT0RPOiBXZSBjYW4gdXNlIHRoaXMgY2hlY2sgdG8gd2hpdGVsaXN0IHN0cmluZ3Mgd2hlbi9pZiB3ZSBzZXQgdXBcbiAgLy8gYSBnb29kIHdoaXRlbGlzdCBzeXN0ZW0uXG4gIGxldCBsaWJyYXJ5ID0gUExBVEZPUk1fTE9HX1NUUklOR1tsaWJyYXJ5S2V5T3JOYW1lXSA/PyBsaWJyYXJ5S2V5T3JOYW1lO1xuICBpZiAodmFyaWFudCkge1xuICAgIGxpYnJhcnkgKz0gYC0ke3ZhcmlhbnR9YDtcbiAgfVxuICBjb25zdCBsaWJyYXJ5TWlzbWF0Y2ggPSBsaWJyYXJ5Lm1hdGNoKC9cXHN8XFwvLyk7XG4gIGNvbnN0IHZlcnNpb25NaXNtYXRjaCA9IHZlcnNpb24ubWF0Y2goL1xcc3xcXC8vKTtcbiAgaWYgKGxpYnJhcnlNaXNtYXRjaCB8fCB2ZXJzaW9uTWlzbWF0Y2gpIHtcbiAgICBjb25zdCB3YXJuaW5nID0gW1xuICAgICAgYFVuYWJsZSB0byByZWdpc3RlciBsaWJyYXJ5IFwiJHtsaWJyYXJ5fVwiIHdpdGggdmVyc2lvbiBcIiR7dmVyc2lvbn1cIjpgXG4gICAgXTtcbiAgICBpZiAobGlicmFyeU1pc21hdGNoKSB7XG4gICAgICB3YXJuaW5nLnB1c2goXG4gICAgICAgIGBsaWJyYXJ5IG5hbWUgXCIke2xpYnJhcnl9XCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFwiL1wiKWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2ggJiYgdmVyc2lvbk1pc21hdGNoKSB7XG4gICAgICB3YXJuaW5nLnB1c2goJ2FuZCcpO1xuICAgIH1cbiAgICBpZiAodmVyc2lvbk1pc21hdGNoKSB7XG4gICAgICB3YXJuaW5nLnB1c2goXG4gICAgICAgIGB2ZXJzaW9uIG5hbWUgXCIke3ZlcnNpb259XCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFwiL1wiKWBcbiAgICAgICk7XG4gICAgfVxuICAgIGxvZ2dlci53YXJuKHdhcm5pbmcuam9pbignICcpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgX3JlZ2lzdGVyQ29tcG9uZW50KFxuICAgIG5ldyBDb21wb25lbnQoXG4gICAgICBgJHtsaWJyYXJ5fS12ZXJzaW9uYCBhcyBOYW1lLFxuICAgICAgKCkgPT4gKHsgbGlicmFyeSwgdmVyc2lvbiB9KSxcbiAgICAgIENvbXBvbmVudFR5cGUuVkVSU0lPTlxuICAgIClcbiAgKTtcbn1cblxuLyoqXG4gKiBTZXRzIGxvZyBoYW5kbGVyIGZvciBhbGwgRmlyZWJhc2UgU0RLcy5cbiAqIEBwYXJhbSBsb2dDYWxsYmFjayAtIEFuIG9wdGlvbmFsIGN1c3RvbSBsb2cgaGFuZGxlciB0aGF0IGV4ZWN1dGVzIHVzZXIgY29kZSB3aGVuZXZlclxuICogdGhlIEZpcmViYXNlIFNESyBtYWtlcyBhIGxvZ2dpbmcgY2FsbC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkxvZyhcbiAgbG9nQ2FsbGJhY2s6IExvZ0NhbGxiYWNrIHwgbnVsbCxcbiAgb3B0aW9ucz86IExvZ09wdGlvbnNcbik6IHZvaWQge1xuICBpZiAobG9nQ2FsbGJhY2sgIT09IG51bGwgJiYgdHlwZW9mIGxvZ0NhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuSU5WQUxJRF9MT0dfQVJHVU1FTlQpO1xuICB9XG4gIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBTZXRzIGxvZyBsZXZlbCBmb3IgYWxsIEZpcmViYXNlIFNES3MuXG4gKlxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIGFyZSBjYXB0dXJlZCAoaS5lLiBpZlxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBpbmZvYCwgZXJyb3JzIGFyZSBsb2dnZWQsIGJ1dCBgZGVidWdgIGFuZFxuICogYHZlcmJvc2VgIGxvZ3MgYXJlIG5vdCkuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IExvZ0xldmVsU3RyaW5nKTogdm9pZCB7XG4gIHNldExvZ0xldmVsSW1wbChsb2dMZXZlbCk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IERCU2NoZW1hLCBvcGVuREIsIElEQlBEYXRhYmFzZSB9IGZyb20gJ2lkYic7XG5pbXBvcnQgeyBBcHBFcnJvciwgRVJST1JfRkFDVE9SWSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IEZpcmViYXNlQXBwIH0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgSGVhcnRiZWF0c0luSW5kZXhlZERCIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmNvbnN0IERCX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LWRhdGFiYXNlJztcbmNvbnN0IERCX1ZFUlNJT04gPSAxO1xuY29uc3QgU1RPUkVfTkFNRSA9ICdmaXJlYmFzZS1oZWFydGJlYXQtc3RvcmUnO1xuXG5pbnRlcmZhY2UgQXBwREIgZXh0ZW5kcyBEQlNjaGVtYSB7XG4gICdmaXJlYmFzZS1oZWFydGJlYXQtc3RvcmUnOiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgdmFsdWU6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQjtcbiAgfTtcbn1cblxubGV0IGRiUHJvbWlzZTogUHJvbWlzZTxJREJQRGF0YWJhc2U8QXBwREI+PiB8IG51bGwgPSBudWxsO1xuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCk6IFByb21pc2U8SURCUERhdGFiYXNlPEFwcERCPj4ge1xuICBpZiAoIWRiUHJvbWlzZSkge1xuICAgIGRiUHJvbWlzZSA9IG9wZW5EQjxBcHBEQj4oREJfTkFNRSwgREJfVkVSU0lPTiwge1xuICAgICAgdXBncmFkZTogKGRiLCBvbGRWZXJzaW9uKSA9PiB7XG4gICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxuICAgICAgICAvLyBiZWhhdmlvciBpcyB3aGF0IHdlIHdhbnQsIGJlY2F1c2UgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHZlcnNpb25zIGJldHdlZW5cbiAgICAgICAgLy8gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSB3YW50IEFMTCB0aGUgbWlncmF0aW9uc1xuICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoIChvbGRWZXJzaW9uKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfTkFNRSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLklEQl9PUEVOLCB7XG4gICAgICAgIG9yaWdpbmFsRXJyb3JNZXNzYWdlOiBlLm1lc3NhZ2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBkYlByb21pc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkSGVhcnRiZWF0c0Zyb21JbmRleGVkREIoXG4gIGFwcDogRmlyZWJhc2VBcHBcbik6IFByb21pc2U8SGVhcnRiZWF0c0luSW5kZXhlZERCIHwgdW5kZWZpbmVkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgICByZXR1cm4gZGJcbiAgICAgIC50cmFuc2FjdGlvbihTVE9SRV9OQU1FKVxuICAgICAgLm9iamVjdFN0b3JlKFNUT1JFX05BTUUpXG4gICAgICAuZ2V0KGNvbXB1dGVLZXkoYXBwKSkgYXMgUHJvbWlzZTxIZWFydGJlYXRzSW5JbmRleGVkREIgfCB1bmRlZmluZWQ+O1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBGaXJlYmFzZUVycm9yKSB7XG4gICAgICBsb2dnZXIud2FybihlLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZGJHZXRFcnJvciA9IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLklEQl9HRVQsIHtcbiAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IChlIGFzIEVycm9yKT8ubWVzc2FnZVxuICAgICAgfSk7XG4gICAgICBsb2dnZXIud2FybihpZGJHZXRFcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKFxuICBhcHA6IEZpcmViYXNlQXBwLFxuICBoZWFydGJlYXRPYmplY3Q6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQlxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFNUT1JFX05BTUUpO1xuICAgIGF3YWl0IG9iamVjdFN0b3JlLnB1dChoZWFydGJlYXRPYmplY3QsIGNvbXB1dGVLZXkoYXBwKSk7XG4gICAgcmV0dXJuIHR4LmRvbmU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IpIHtcbiAgICAgIGxvZ2dlci53YXJuKGUubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlkYkdldEVycm9yID0gRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuSURCX1dSSVRFLCB7XG4gICAgICAgIG9yaWdpbmFsRXJyb3JNZXNzYWdlOiAoZSBhcyBFcnJvcik/Lm1lc3NhZ2VcbiAgICAgIH0pO1xuICAgICAgbG9nZ2VyLndhcm4oaWRiR2V0RXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVLZXkoYXBwOiBGaXJlYmFzZUFwcCk6IHN0cmluZyB7XG4gIHJldHVybiBgJHthcHAubmFtZX0hJHthcHAub3B0aW9ucy5hcHBJZH1gO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudENvbnRhaW5lciB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcsXG4gIGlzSW5kZXhlZERCQXZhaWxhYmxlLFxuICB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlXG59IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7XG4gIHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQixcbiAgd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREJcbn0gZnJvbSAnLi9pbmRleGVkZGInO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHAgfSBmcm9tICcuL3B1YmxpYy10eXBlcyc7XG5pbXBvcnQge1xuICBIZWFydGJlYXRzQnlVc2VyQWdlbnQsXG4gIEhlYXJ0YmVhdFNlcnZpY2UsXG4gIEhlYXJ0YmVhdHNJbkluZGV4ZWREQixcbiAgSGVhcnRiZWF0U3RvcmFnZSxcbiAgU2luZ2xlRGF0ZUhlYXJ0YmVhdFxufSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgTUFYX0hFQURFUl9CWVRFUyA9IDEwMjQ7XG4vLyAzMCBkYXlzXG5jb25zdCBTVE9SRURfSEVBUlRCRUFUX1JFVEVOVElPTl9NQVhfTUlMTElTID0gMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG5leHBvcnQgY2xhc3MgSGVhcnRiZWF0U2VydmljZUltcGwgaW1wbGVtZW50cyBIZWFydGJlYXRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFRoZSBwZXJzaXN0ZW5jZSBsYXllciBmb3IgaGVhcnRiZWF0c1xuICAgKiBMZWF2ZSBwdWJsaWMgZm9yIGVhc2llciB0ZXN0aW5nLlxuICAgKi9cbiAgX3N0b3JhZ2U6IEhlYXJ0YmVhdFN0b3JhZ2VJbXBsO1xuXG4gIC8qKlxuICAgKiBJbi1tZW1vcnkgY2FjaGUgZm9yIGhlYXJ0YmVhdHMsIHVzZWQgYnkgZ2V0SGVhcnRiZWF0c0hlYWRlcigpIHRvIGdlbmVyYXRlXG4gICAqIHRoZSBoZWFkZXIgc3RyaW5nLlxuICAgKiBTdG9yZXMgb25lIHJlY29yZCBwZXIgZGF0ZS4gVGhpcyB3aWxsIGJlIGNvbnNvbGlkYXRlZCBpbnRvIHRoZSBzdGFuZGFyZFxuICAgKiBmb3JtYXQgb2Ygb25lIHJlY29yZCBwZXIgdXNlciBhZ2VudCBzdHJpbmcgYmVmb3JlIGJlaW5nIHNlbnQgYXMgYSBoZWFkZXIuXG4gICAqIFBvcHVsYXRlZCBmcm9tIGluZGV4ZWREQiB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCBhbmQgc2hvdWxkXG4gICAqIGJlIGtlcHQgaW4gc3luYyB3aXRoIGluZGV4ZWREQi5cbiAgICogTGVhdmUgcHVibGljIGZvciBlYXNpZXIgdGVzdGluZy5cbiAgICovXG4gIF9oZWFydGJlYXRzQ2FjaGU6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiB0aGUgaW5pdGlhbGl6YXRpb24gcHJvbWlzZSBmb3IgcG9wdWxhdGluZyBoZWFydGJlYXRDYWNoZS5cbiAgICogSWYgZ2V0SGVhcnRiZWF0c0hlYWRlcigpIGlzIGNhbGxlZCBiZWZvcmUgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICogKGhlYXJiZWF0c0NhY2hlID09IG51bGwpLCBpdCBzaG91bGQgd2FpdCBmb3IgdGhpcyBwcm9taXNlXG4gICAqIExlYXZlIHB1YmxpYyBmb3IgZWFzaWVyIHRlc3RpbmcuXG4gICAqL1xuICBfaGVhcnRiZWF0c0NhY2hlUHJvbWlzZTogUHJvbWlzZTxIZWFydGJlYXRzSW5JbmRleGVkREI+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3QgYXBwID0gdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xuICAgIHRoaXMuX3N0b3JhZ2UgPSBuZXcgSGVhcnRiZWF0U3RvcmFnZUltcGwoYXBwKTtcbiAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlID0gdGhpcy5fc3RvcmFnZS5yZWFkKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlID0gcmVzdWx0O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdG8gcmVwb3J0IGEgaGVhcnRiZWF0LiBUaGUgZnVuY3Rpb24gd2lsbCBnZW5lcmF0ZVxuICAgKiBhIEhlYXJ0YmVhdHNCeVVzZXJBZ2VudCBvYmplY3QsIHVwZGF0ZSBoZWFydGJlYXRzQ2FjaGUsIGFuZCBwZXJzaXN0IGl0XG4gICAqIHRvIEluZGV4ZWREQi5cbiAgICogTm90ZSB0aGF0IHdlIG9ubHkgc3RvcmUgb25lIGhlYXJ0YmVhdCBwZXIgZGF5LiBTbyBpZiBhIGhlYXJ0YmVhdCBmb3IgdG9kYXkgaXNcbiAgICogYWxyZWFkeSBsb2dnZWQsIHN1YnNlcXVlbnQgY2FsbHMgdG8gdGhpcyBmdW5jdGlvbiBpbiB0aGUgc2FtZSBkYXkgd2lsbCBiZSBpZ25vcmVkLlxuICAgKi9cbiAgYXN5bmMgdHJpZ2dlckhlYXJ0YmVhdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwbGF0Zm9ybUxvZ2dlciA9IHRoaXMuY29udGFpbmVyXG4gICAgICAuZ2V0UHJvdmlkZXIoJ3BsYXRmb3JtLWxvZ2dlcicpXG4gICAgICAuZ2V0SW1tZWRpYXRlKCk7XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBcIkZpcmViYXNlIHVzZXIgYWdlbnRcIiBzdHJpbmcgZnJvbSB0aGUgcGxhdGZvcm0gbG9nZ2VyXG4gICAgLy8gc2VydmljZSwgbm90IHRoZSBicm93c2VyIHVzZXIgYWdlbnQuXG4gICAgY29uc3QgYWdlbnQgPSBwbGF0Zm9ybUxvZ2dlci5nZXRQbGF0Zm9ybUluZm9TdHJpbmcoKTtcbiAgICBjb25zdCBkYXRlID0gZ2V0VVRDRGF0ZVN0cmluZygpO1xuICAgIGlmICh0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9IGF3YWl0IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZVByb21pc2U7XG4gICAgfVxuICAgIC8vIERvIG5vdCBzdG9yZSBhIGhlYXJ0YmVhdCBpZiBvbmUgaXMgYWxyZWFkeSBzdG9yZWQgZm9yIHRoaXMgZGF5XG4gICAgLy8gb3IgaWYgYSBoZWFkZXIgaGFzIGFscmVhZHkgYmVlbiBzZW50IHRvZGF5LlxuICAgIGlmIChcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPT09IGRhdGUgfHxcbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLnNvbWUoXG4gICAgICAgIHNpbmdsZURhdGVIZWFydGJlYXQgPT4gc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlID09PSBkYXRlXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZXJlIGlzIG5vIGVudHJ5IGZvciB0aGlzIGRhdGUuIENyZWF0ZSBvbmUuXG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5wdXNoKHsgZGF0ZSwgYWdlbnQgfSk7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBlbnRyaWVzIG9sZGVyIHRoYW4gMzAgZGF5cy5cbiAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cyA9IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLmZpbHRlcihcbiAgICAgIHNpbmdsZURhdGVIZWFydGJlYXQgPT4ge1xuICAgICAgICBjb25zdCBoYlRpbWVzdGFtcCA9IG5ldyBEYXRlKHNpbmdsZURhdGVIZWFydGJlYXQuZGF0ZSkudmFsdWVPZigpO1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm4gbm93IC0gaGJUaW1lc3RhbXAgPD0gU1RPUkVEX0hFQVJUQkVBVF9SRVRFTlRJT05fTUFYX01JTExJUztcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgd2hpY2ggY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBoZWFydGJlYXQtc3BlY2lmaWMgaGVhZGVyIGRpcmVjdGx5LlxuICAgKiBJdCBhbHNvIGNsZWFycyBhbGwgaGVhcnRiZWF0cyBmcm9tIG1lbW9yeSBhcyB3ZWxsIGFzIGluIEluZGV4ZWREQi5cbiAgICpcbiAgICogTk9URTogQ29uc3VtaW5nIHByb2R1Y3QgU0RLcyBzaG91bGQgbm90IHNlbmQgdGhlIGhlYWRlciBpZiB0aGlzIG1ldGhvZFxuICAgKiByZXR1cm5zIGFuIGVtcHR5IHN0cmluZy5cbiAgICovXG4gIGFzeW5jIGdldEhlYXJ0YmVhdHNIZWFkZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodGhpcy5faGVhcnRiZWF0c0NhY2hlID09PSBudWxsKSB7XG4gICAgICBhd2FpdCB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlO1xuICAgIH1cbiAgICAvLyBJZiBpdCdzIHN0aWxsIG51bGwgb3IgdGhlIGFycmF5IGlzIGVtcHR5LCB0aGVyZSBpcyBubyBkYXRhIHRvIHNlbmQuXG4gICAgaWYgKFxuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlID09PSBudWxsIHx8XG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgZGF0ZSA9IGdldFVUQ0RhdGVTdHJpbmcoKTtcbiAgICAvLyBFeHRyYWN0IGFzIG1hbnkgaGVhcnRiZWF0cyBmcm9tIHRoZSBjYWNoZSBhcyB3aWxsIGZpdCB1bmRlciB0aGUgc2l6ZSBsaW1pdC5cbiAgICBjb25zdCB7IGhlYXJ0YmVhdHNUb1NlbmQsIHVuc2VudEVudHJpZXMgfSA9IGV4dHJhY3RIZWFydGJlYXRzRm9ySGVhZGVyKFxuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHNcbiAgICApO1xuICAgIGNvbnN0IGhlYWRlclN0cmluZyA9IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAyLCBoZWFydGJlYXRzOiBoZWFydGJlYXRzVG9TZW5kIH0pXG4gICAgKTtcbiAgICAvLyBTdG9yZSBsYXN0IHNlbnQgZGF0ZSB0byBwcmV2ZW50IGFub3RoZXIgYmVpbmcgbG9nZ2VkL3NlbnQgZm9yIHRoZSBzYW1lIGRheS5cbiAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUubGFzdFNlbnRIZWFydGJlYXREYXRlID0gZGF0ZTtcbiAgICBpZiAodW5zZW50RW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBTdG9yZSBhbnkgdW5zZW50IGVudHJpZXMgaWYgdGhleSBleGlzdC5cbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzID0gdW5zZW50RW50cmllcztcbiAgICAgIC8vIFRoaXMgc2VlbXMgbW9yZSBsaWtlbHkgdGhhbiBlbXB0eWluZyB0aGUgYXJyYXkgKGJlbG93KSB0byBsZWFkIHRvIHNvbWUgb2RkIHN0YXRlXG4gICAgICAvLyBzaW5jZSB0aGUgY2FjaGUgaXNuJ3QgZW1wdHkgYW5kIHRoaXMgd2lsbCBiZSBjYWxsZWQgYWdhaW4gb24gdGhlIG5leHQgcmVxdWVzdCxcbiAgICAgIC8vIGFuZCBpcyBwcm9iYWJseSBzYWZlc3QgaWYgd2UgYXdhaXQgaXQuXG4gICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cyA9IFtdO1xuICAgICAgLy8gRG8gbm90IHdhaXQgZm9yIHRoaXMsIHRvIHJlZHVjZSBsYXRlbmN5LlxuICAgICAgdm9pZCB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVyU3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFVUQ0RhdGVTdHJpbmcoKTogc3RyaW5nIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAvLyBSZXR1cm5zIGRhdGUgZm9ybWF0ICdZWVlZLU1NLUREJ1xuICByZXR1cm4gdG9kYXkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIoXG4gIGhlYXJ0YmVhdHNDYWNoZTogU2luZ2xlRGF0ZUhlYXJ0YmVhdFtdLFxuICBtYXhTaXplID0gTUFYX0hFQURFUl9CWVRFU1xuKToge1xuICBoZWFydGJlYXRzVG9TZW5kOiBIZWFydGJlYXRzQnlVc2VyQWdlbnRbXTtcbiAgdW5zZW50RW50cmllczogU2luZ2xlRGF0ZUhlYXJ0YmVhdFtdO1xufSB7XG4gIC8vIEhlYXJ0YmVhdHMgZ3JvdXBlZCBieSB1c2VyIGFnZW50IGluIHRoZSBzdGFuZGFyZCBmb3JtYXQgdG8gYmUgc2VudCBpblxuICAvLyB0aGUgaGVhZGVyLlxuICBjb25zdCBoZWFydGJlYXRzVG9TZW5kOiBIZWFydGJlYXRzQnlVc2VyQWdlbnRbXSA9IFtdO1xuICAvLyBTaW5nbGUgZGF0ZSBmb3JtYXQgaGVhcnRiZWF0cyB0aGF0IGFyZSBub3Qgc2VudC5cbiAgbGV0IHVuc2VudEVudHJpZXMgPSBoZWFydGJlYXRzQ2FjaGUuc2xpY2UoKTtcbiAgZm9yIChjb25zdCBzaW5nbGVEYXRlSGVhcnRiZWF0IG9mIGhlYXJ0YmVhdHNDYWNoZSkge1xuICAgIC8vIExvb2sgZm9yIGFuIGV4aXN0aW5nIGVudHJ5IHdpdGggdGhlIHNhbWUgdXNlciBhZ2VudC5cbiAgICBjb25zdCBoZWFydGJlYXRFbnRyeSA9IGhlYXJ0YmVhdHNUb1NlbmQuZmluZChcbiAgICAgIGhiID0+IGhiLmFnZW50ID09PSBzaW5nbGVEYXRlSGVhcnRiZWF0LmFnZW50XG4gICAgKTtcbiAgICBpZiAoIWhlYXJ0YmVhdEVudHJ5KSB7XG4gICAgICAvLyBJZiBubyBlbnRyeSBmb3IgdGhpcyB1c2VyIGFnZW50IGV4aXN0cywgY3JlYXRlIG9uZS5cbiAgICAgIGhlYXJ0YmVhdHNUb1NlbmQucHVzaCh7XG4gICAgICAgIGFnZW50OiBzaW5nbGVEYXRlSGVhcnRiZWF0LmFnZW50LFxuICAgICAgICBkYXRlczogW3NpbmdsZURhdGVIZWFydGJlYXQuZGF0ZV1cbiAgICAgIH0pO1xuICAgICAgaWYgKGNvdW50Qnl0ZXMoaGVhcnRiZWF0c1RvU2VuZCkgPiBtYXhTaXplKSB7XG4gICAgICAgIC8vIElmIHRoZSBoZWFkZXIgd291bGQgZXhjZWVkIG1heCBzaXplLCByZW1vdmUgdGhlIGFkZGVkIGhlYXJ0YmVhdFxuICAgICAgICAvLyBlbnRyeSBhbmQgc3RvcCBhZGRpbmcgdG8gdGhlIGhlYWRlci5cbiAgICAgICAgaGVhcnRiZWF0c1RvU2VuZC5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYXJ0YmVhdEVudHJ5LmRhdGVzLnB1c2goc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlKTtcbiAgICAgIC8vIElmIHRoZSBoZWFkZXIgd291bGQgZXhjZWVkIG1heCBzaXplLCByZW1vdmUgdGhlIGFkZGVkIGRhdGVcbiAgICAgIC8vIGFuZCBzdG9wIGFkZGluZyB0byB0aGUgaGVhZGVyLlxuICAgICAgaWYgKGNvdW50Qnl0ZXMoaGVhcnRiZWF0c1RvU2VuZCkgPiBtYXhTaXplKSB7XG4gICAgICAgIGhlYXJ0YmVhdEVudHJ5LmRhdGVzLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUG9wIHVuc2VudCBlbnRyeSBmcm9tIHF1ZXVlLiAoU2tpcHBlZCBpZiBhZGRpbmcgdGhlIGVudHJ5IGV4Y2VlZGVkXG4gICAgLy8gcXVvdGEgYW5kIHRoZSBsb29wIGJyZWFrcyBlYXJseS4pXG4gICAgdW5zZW50RW50cmllcyA9IHVuc2VudEVudHJpZXMuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBoZWFydGJlYXRzVG9TZW5kLFxuICAgIHVuc2VudEVudHJpZXNcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIEhlYXJ0YmVhdFN0b3JhZ2VJbXBsIGltcGxlbWVudHMgSGVhcnRiZWF0U3RvcmFnZSB7XG4gIHByaXZhdGUgX2NhblVzZUluZGV4ZWREQlByb21pc2U6IFByb21pc2U8Ym9vbGVhbj47XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHA6IEZpcmViYXNlQXBwKSB7XG4gICAgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZSA9IHRoaXMucnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjaygpO1xuICB9XG4gIGFzeW5jIHJ1bkluZGV4ZWREQkVudmlyb25tZW50Q2hlY2soKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0luZGV4ZWREQkF2YWlsYWJsZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKClcbiAgICAgICAgLnRoZW4oKCkgPT4gdHJ1ZSlcbiAgICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlYWQgYWxsIGhlYXJ0YmVhdHMuXG4gICAqL1xuICBhc3luYyByZWFkKCk6IFByb21pc2U8SGVhcnRiZWF0c0luSW5kZXhlZERCPiB7XG4gICAgY29uc3QgY2FuVXNlSW5kZXhlZERCID0gYXdhaXQgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZTtcbiAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xuICAgICAgcmV0dXJuIHsgaGVhcnRiZWF0czogW10gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWRiSGVhcnRiZWF0T2JqZWN0ID0gYXdhaXQgcmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCKHRoaXMuYXBwKTtcbiAgICAgIHJldHVybiBpZGJIZWFydGJlYXRPYmplY3QgfHwgeyBoZWFydGJlYXRzOiBbXSB9O1xuICAgIH1cbiAgfVxuICAvLyBvdmVyd3JpdGUgdGhlIHN0b3JhZ2Ugd2l0aCB0aGUgcHJvdmlkZWQgaGVhcnRiZWF0c1xuICBhc3luYyBvdmVyd3JpdGUoaGVhcnRiZWF0c09iamVjdDogSGVhcnRiZWF0c0luSW5kZXhlZERCKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2FuVXNlSW5kZXhlZERCID0gYXdhaXQgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZTtcbiAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QgPSBhd2FpdCB0aGlzLnJlYWQoKTtcbiAgICAgIHJldHVybiB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQih0aGlzLmFwcCwge1xuICAgICAgICBsYXN0U2VudEhlYXJ0YmVhdERhdGU6XG4gICAgICAgICAgaGVhcnRiZWF0c09iamVjdC5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPz9cbiAgICAgICAgICBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlLFxuICAgICAgICBoZWFydGJlYXRzOiBoZWFydGJlYXRzT2JqZWN0LmhlYXJ0YmVhdHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyBhZGQgaGVhcnRiZWF0c1xuICBhc3luYyBhZGQoaGVhcnRiZWF0c09iamVjdDogSGVhcnRiZWF0c0luSW5kZXhlZERCKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2FuVXNlSW5kZXhlZERCID0gYXdhaXQgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZTtcbiAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QgPSBhd2FpdCB0aGlzLnJlYWQoKTtcbiAgICAgIHJldHVybiB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQih0aGlzLmFwcCwge1xuICAgICAgICBsYXN0U2VudEhlYXJ0YmVhdERhdGU6XG4gICAgICAgICAgaGVhcnRiZWF0c09iamVjdC5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPz9cbiAgICAgICAgICBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlLFxuICAgICAgICBoZWFydGJlYXRzOiBbXG4gICAgICAgICAgLi4uZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0LmhlYXJ0YmVhdHMsXG4gICAgICAgICAgLi4uaGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzXG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBieXRlcyBvZiBhIEhlYXJ0YmVhdHNCeVVzZXJBZ2VudCBhcnJheSBhZnRlciBiZWluZyB3cmFwcGVkXG4gKiBpbiBhIHBsYXRmb3JtIGxvZ2dpbmcgaGVhZGVyIEpTT04gb2JqZWN0LCBzdHJpbmdpZmllZCwgYW5kIGNvbnZlcnRlZFxuICogdG8gYmFzZSA2NC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50Qnl0ZXMoaGVhcnRiZWF0c0NhY2hlOiBIZWFydGJlYXRzQnlVc2VyQWdlbnRbXSk6IG51bWJlciB7XG4gIC8vIGJhc2U2NCBoYXMgYSByZXN0cmljdGVkIHNldCBvZiBjaGFyYWN0ZXJzLCBhbGwgb2Ygd2hpY2ggc2hvdWxkIGJlIDEgYnl0ZS5cbiAgcmV0dXJuIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKFxuICAgIC8vIGhlYXJ0YmVhdHNDYWNoZSB3cmFwcGVyIHByb3BlcnRpZXNcbiAgICBKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IDIsIGhlYXJ0YmVhdHM6IGhlYXJ0YmVhdHNDYWNoZSB9KVxuICApLmxlbmd0aDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudFR5cGUgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwgfSBmcm9tICcuL3BsYXRmb3JtTG9nZ2VyU2VydmljZSc7XG5pbXBvcnQgeyBuYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IF9yZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vaW50ZXJuYWwnO1xuaW1wb3J0IHsgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgSGVhcnRiZWF0U2VydmljZUltcGwgfSBmcm9tICcuL2hlYXJ0YmVhdFNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb3JlQ29tcG9uZW50cyh2YXJpYW50Pzogc3RyaW5nKTogdm9pZCB7XG4gIF9yZWdpc3RlckNvbXBvbmVudChcbiAgICBuZXcgQ29tcG9uZW50KFxuICAgICAgJ3BsYXRmb3JtLWxvZ2dlcicsXG4gICAgICBjb250YWluZXIgPT4gbmV3IFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwoY29udGFpbmVyKSxcbiAgICAgIENvbXBvbmVudFR5cGUuUFJJVkFURVxuICAgIClcbiAgKTtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50KFxuICAgIG5ldyBDb21wb25lbnQoXG4gICAgICAnaGVhcnRiZWF0JyxcbiAgICAgIGNvbnRhaW5lciA9PiBuZXcgSGVhcnRiZWF0U2VydmljZUltcGwoY29udGFpbmVyKSxcbiAgICAgIENvbXBvbmVudFR5cGUuUFJJVkFURVxuICAgIClcbiAgKTtcblxuICAvLyBSZWdpc3RlciBgYXBwYCBwYWNrYWdlLlxuICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgdmFyaWFudCk7XG4gIC8vIEJVSUxEX1RBUkdFVCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZhbHVlcyBsaWtlIGVzbTUsIGVzbTIwMTcsIGNqczUsIGV0YyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXG4gIHJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnX19CVUlMRF9UQVJHRVRfXycpO1xuICAvLyBSZWdpc3RlciBwbGF0Zm9ybSBTREsgaWRlbnRpZmllciAobm8gdmVyc2lvbikuXG4gIHJlZ2lzdGVyVmVyc2lvbignZmlyZS1qcycsICcnKTtcbn1cbiIsICIvKipcbiAqIEZpcmViYXNlIEFwcFxuICpcbiAqIEByZW1hcmtzIFRoaXMgcGFja2FnZSBjb29yZGluYXRlcyB0aGUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSBkaWZmZXJlbnQgRmlyZWJhc2UgY29tcG9uZW50c1xuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJDb3JlQ29tcG9uZW50cyB9IGZyb20gJy4vcmVnaXN0ZXJDb3JlQ29tcG9uZW50cyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJuYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuXG5yZWdpc3RlckNvcmVDb21wb25lbnRzKCdfX1JVTlRJTUVfRU5WX18nKTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBuYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdhcHAnKTtcbmV4cG9ydCAqIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgUEVORElOR19USU1FT1VUX01TID0gMTAwMDA7XG5cbmV4cG9ydCBjb25zdCBQQUNLQUdFX1ZFUlNJT04gPSBgdzoke3ZlcnNpb259YDtcbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9BVVRIX1ZFUlNJT04gPSAnRklTX3YyJztcblxuZXhwb3J0IGNvbnN0IElOU1RBTExBVElPTlNfQVBJX1VSTCA9XG4gICdodHRwczovL2ZpcmViYXNlaW5zdGFsbGF0aW9ucy5nb29nbGVhcGlzLmNvbS92MSc7XG5cbmV4cG9ydCBjb25zdCBUT0tFTl9FWFBJUkFUSU9OX0JVRkZFUiA9IDYwICogNjAgKiAxMDAwOyAvLyBPbmUgaG91clxuXG5leHBvcnQgY29uc3QgU0VSVklDRSA9ICdpbnN0YWxsYXRpb25zJztcbmV4cG9ydCBjb25zdCBTRVJWSUNFX05BTUUgPSAnSW5zdGFsbGF0aW9ucyc7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgU0VSVklDRSwgU0VSVklDRV9OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZW51bSBFcnJvckNvZGUge1xuICBNSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTID0gJ21pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXMnLFxuICBOT1RfUkVHSVNURVJFRCA9ICdub3QtcmVnaXN0ZXJlZCcsXG4gIElOU1RBTExBVElPTl9OT1RfRk9VTkQgPSAnaW5zdGFsbGF0aW9uLW5vdC1mb3VuZCcsXG4gIFJFUVVFU1RfRkFJTEVEID0gJ3JlcXVlc3QtZmFpbGVkJyxcbiAgQVBQX09GRkxJTkUgPSAnYXBwLW9mZmxpbmUnLFxuICBERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT04gPSAnZGVsZXRlLXBlbmRpbmctcmVnaXN0cmF0aW9uJ1xufVxuXG5jb25zdCBFUlJPUl9ERVNDUklQVElPTl9NQVA6IHsgcmVhZG9ubHkgW2tleSBpbiBFcnJvckNvZGVdOiBzdHJpbmcgfSA9IHtcbiAgW0Vycm9yQ29kZS5NSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTXTpcbiAgICAnTWlzc2luZyBBcHAgY29uZmlndXJhdGlvbiB2YWx1ZTogXCJ7JHZhbHVlTmFtZX1cIicsXG4gIFtFcnJvckNvZGUuTk9UX1JFR0lTVEVSRURdOiAnRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIG5vdCByZWdpc3RlcmVkLicsXG4gIFtFcnJvckNvZGUuSU5TVEFMTEFUSU9OX05PVF9GT1VORF06ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gbm90IGZvdW5kLicsXG4gIFtFcnJvckNvZGUuUkVRVUVTVF9GQUlMRURdOlxuICAgICd7JHJlcXVlc3ROYW1lfSByZXF1ZXN0IGZhaWxlZCB3aXRoIGVycm9yIFwieyRzZXJ2ZXJDb2RlfSB7JHNlcnZlclN0YXR1c306IHskc2VydmVyTWVzc2FnZX1cIicsXG4gIFtFcnJvckNvZGUuQVBQX09GRkxJTkVdOiAnQ291bGQgbm90IHByb2Nlc3MgcmVxdWVzdC4gQXBwbGljYXRpb24gb2ZmbGluZS4nLFxuICBbRXJyb3JDb2RlLkRFTEVURV9QRU5ESU5HX1JFR0lTVFJBVElPTl06XG4gICAgXCJDYW4ndCBkZWxldGUgaW5zdGFsbGF0aW9uIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyByZWdpc3RyYXRpb24gcmVxdWVzdC5cIlxufTtcblxuaW50ZXJmYWNlIEVycm9yUGFyYW1zIHtcbiAgW0Vycm9yQ29kZS5NSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTXToge1xuICAgIHZhbHVlTmFtZTogc3RyaW5nO1xuICB9O1xuICBbRXJyb3JDb2RlLlJFUVVFU1RfRkFJTEVEXToge1xuICAgIHJlcXVlc3ROYW1lOiBzdHJpbmc7XG4gICAgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7IC8vIHRvIG1ha2UgVHlwZXNjcmlwdCAzLjggaGFwcHlcbiAgfSAmIFNlcnZlckVycm9yRGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5PEVycm9yQ29kZSwgRXJyb3JQYXJhbXM+KFxuICBTRVJWSUNFLFxuICBTRVJWSUNFX05BTUUsXG4gIEVSUk9SX0RFU0NSSVBUSU9OX01BUFxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJFcnJvckRhdGEge1xuICBzZXJ2ZXJDb2RlOiBudW1iZXI7XG4gIHNlcnZlck1lc3NhZ2U6IHN0cmluZztcbiAgc2VydmVyU3RhdHVzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFNlcnZlckVycm9yID0gRmlyZWJhc2VFcnJvciAmIHsgY3VzdG9tRGF0YTogU2VydmVyRXJyb3JEYXRhIH07XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgZXJyb3IgaXMgYSBGaXJlYmFzZUVycm9yIHRoYXQgaXMgYmFzZWQgb24gYW4gZXJyb3IgZnJvbSB0aGUgc2VydmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2VydmVyRXJyb3IoZXJyb3I6IHVua25vd24pOiBlcnJvciBpcyBTZXJ2ZXJFcnJvciB7XG4gIHJldHVybiAoXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBGaXJlYmFzZUVycm9yICYmXG4gICAgZXJyb3IuY29kZS5pbmNsdWRlcyhFcnJvckNvZGUuUkVRVUVTVF9GQUlMRUQpXG4gICk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IEdlbmVyYXRlQXV0aFRva2VuUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FwaS1yZXNwb25zZSc7XG5pbXBvcnQge1xuICBDb21wbGV0ZWRBdXRoVG9rZW4sXG4gIFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSxcbiAgUmVxdWVzdFN0YXR1c1xufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQge1xuICBJTlNUQUxMQVRJT05TX0FQSV9VUkwsXG4gIElOVEVSTkFMX0FVVEhfVkVSU0lPTlxufSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuLi91dGlsL2Vycm9ycyc7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnNFbmRwb2ludCh7IHByb2plY3RJZCB9OiBBcHBDb25maWcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7SU5TVEFMTEFUSU9OU19BUElfVVJMfS9wcm9qZWN0cy8ke3Byb2plY3RJZH0vaW5zdGFsbGF0aW9uc2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShcbiAgcmVzcG9uc2U6IEdlbmVyYXRlQXV0aFRva2VuUmVzcG9uc2Vcbik6IENvbXBsZXRlZEF1dGhUb2tlbiB7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHJlc3BvbnNlLnRva2VuLFxuICAgIHJlcXVlc3RTdGF0dXM6IFJlcXVlc3RTdGF0dXMuQ09NUExFVEVELFxuICAgIGV4cGlyZXNJbjogZ2V0RXhwaXJlc0luRnJvbVJlc3BvbnNlRXhwaXJlc0luKHJlc3BvbnNlLmV4cGlyZXNJbiksXG4gICAgY3JlYXRpb25UaW1lOiBEYXRlLm5vdygpXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFcnJvckZyb21SZXNwb25zZShcbiAgcmVxdWVzdE5hbWU6IHN0cmluZyxcbiAgcmVzcG9uc2U6IFJlc3BvbnNlXG4pOiBQcm9taXNlPEZpcmViYXNlRXJyb3I+IHtcbiAgY29uc3QgcmVzcG9uc2VKc29uOiBFcnJvclJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBlcnJvckRhdGEgPSByZXNwb25zZUpzb24uZXJyb3I7XG4gIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuUkVRVUVTVF9GQUlMRUQsIHtcbiAgICByZXF1ZXN0TmFtZSxcbiAgICBzZXJ2ZXJDb2RlOiBlcnJvckRhdGEuY29kZSxcbiAgICBzZXJ2ZXJNZXNzYWdlOiBlcnJvckRhdGEubWVzc2FnZSxcbiAgICBzZXJ2ZXJTdGF0dXM6IGVycm9yRGF0YS5zdGF0dXNcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkZXJzKHsgYXBpS2V5IH06IEFwcENvbmZpZyk6IEhlYWRlcnMge1xuICByZXR1cm4gbmV3IEhlYWRlcnMoe1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ3gtZ29vZy1hcGkta2V5JzogYXBpS2V5XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVhZGVyc1dpdGhBdXRoKFxuICBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgeyByZWZyZXNoVG9rZW4gfTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5XG4pOiBIZWFkZXJzIHtcbiAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBwQ29uZmlnKTtcbiAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBnZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlZnJlc2hUb2tlbikpO1xuICByZXR1cm4gaGVhZGVycztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclJlc3BvbnNlIHtcbiAgZXJyb3I6IHtcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIENhbGxzIHRoZSBwYXNzZWQgaW4gZmV0Y2ggd3JhcHBlciBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gKiBJZiB0aGUgcmV0dXJuZWQgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIG9mIDV4eCwgcmUtcnVucyB0aGUgZnVuY3Rpb24gb25jZSBhbmRcbiAqIHJldHVybnMgdGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV0cnlJZlNlcnZlckVycm9yKFxuICBmbjogKCkgPT4gUHJvbWlzZTxSZXNwb25zZT5cbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKTtcblxuICBpZiAocmVzdWx0LnN0YXR1cyA+PSA1MDAgJiYgcmVzdWx0LnN0YXR1cyA8IDYwMCkge1xuICAgIC8vIEludGVybmFsIFNlcnZlciBFcnJvci4gUmV0cnkgcmVxdWVzdC5cbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldEV4cGlyZXNJbkZyb21SZXNwb25zZUV4cGlyZXNJbihyZXNwb25zZUV4cGlyZXNJbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgLy8gVGhpcyB3b3JrcyBiZWNhdXNlIHRoZSBzZXJ2ZXIgd2lsbCBuZXZlciByZXNwb25kIHdpdGggZnJhY3Rpb25zIG9mIGEgc2Vjb25kLlxuICByZXR1cm4gTnVtYmVyKHJlc3BvbnNlRXhwaXJlc0luLnJlcGxhY2UoJ3MnLCAnMDAwJykpO1xufVxuXG5mdW5jdGlvbiBnZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlZnJlc2hUb2tlbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke0lOVEVSTkFMX0FVVEhfVkVSU0lPTn0gJHtyZWZyZXNoVG9rZW59YDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDcmVhdGVJbnN0YWxsYXRpb25SZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLXJlc3BvbnNlJztcbmltcG9ydCB7XG4gIEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeSxcbiAgUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5LFxuICBSZXF1ZXN0U3RhdHVzXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7IElOVEVSTkFMX0FVVEhfVkVSU0lPTiwgUEFDS0FHRV9WRVJTSU9OIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZXh0cmFjdEF1dGhUb2tlbkluZm9Gcm9tUmVzcG9uc2UsXG4gIGdldEVycm9yRnJvbVJlc3BvbnNlLFxuICBnZXRIZWFkZXJzLFxuICBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQsXG4gIHJldHJ5SWZTZXJ2ZXJFcnJvclxufSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgeyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KFxuICB7IGFwcENvbmZpZywgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIH06IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwsXG4gIHsgZmlkIH06IEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeVxuKTogUHJvbWlzZTxSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk+IHtcbiAgY29uc3QgZW5kcG9pbnQgPSBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoYXBwQ29uZmlnKTtcblxuICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVycyhhcHBDb25maWcpO1xuXG4gIC8vIElmIGhlYXJ0YmVhdCBzZXJ2aWNlIGV4aXN0cywgYWRkIHRoZSBoZWFydGJlYXQgc3RyaW5nIHRvIHRoZSBoZWFkZXIuXG4gIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2UgPSBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHtcbiAgICBvcHRpb25hbDogdHJ1ZVxuICB9KTtcbiAgaWYgKGhlYXJ0YmVhdFNlcnZpY2UpIHtcbiAgICBjb25zdCBoZWFydGJlYXRzSGVhZGVyID0gYXdhaXQgaGVhcnRiZWF0U2VydmljZS5nZXRIZWFydGJlYXRzSGVhZGVyKCk7XG4gICAgaWYgKGhlYXJ0YmVhdHNIZWFkZXIpIHtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWZpcmViYXNlLWNsaWVudCcsIGhlYXJ0YmVhdHNIZWFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSB7XG4gICAgZmlkLFxuICAgIGF1dGhWZXJzaW9uOiBJTlRFUk5BTF9BVVRIX1ZFUlNJT04sXG4gICAgYXBwSWQ6IGFwcENvbmZpZy5hcHBJZCxcbiAgICBzZGtWZXJzaW9uOiBQQUNLQUdFX1ZFUlNJT05cbiAgfTtcblxuICBjb25zdCByZXF1ZXN0OiBSZXF1ZXN0SW5pdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2VWYWx1ZTogQ3JlYXRlSW5zdGFsbGF0aW9uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgPSB7XG4gICAgICBmaWQ6IHJlc3BvbnNlVmFsdWUuZmlkIHx8IGZpZCxcbiAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQsXG4gICAgICByZWZyZXNoVG9rZW46IHJlc3BvbnNlVmFsdWUucmVmcmVzaFRva2VuLFxuICAgICAgYXV0aFRva2VuOiBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlLmF1dGhUb2tlbilcbiAgICB9O1xuICAgIHJldHVybiByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgYXdhaXQgZ2V0RXJyb3JGcm9tUmVzcG9uc2UoJ0NyZWF0ZSBJbnN0YWxsYXRpb24nLCByZXNwb25zZSk7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciBnaXZlbiB0aW1lIHBhc3Nlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgfSk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlclRvQmFzZTY0VXJsU2FmZShhcnJheTogVWludDhBcnJheSk6IHN0cmluZyB7XG4gIGNvbnN0IGI2NCA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZSguLi5hcnJheSkpO1xuICByZXR1cm4gYjY0LnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGJ1ZmZlclRvQmFzZTY0VXJsU2FmZSB9IGZyb20gJy4vYnVmZmVyLXRvLWJhc2U2NC11cmwtc2FmZSc7XG5cbmV4cG9ydCBjb25zdCBWQUxJRF9GSURfUEFUVEVSTiA9IC9eW2NkZWZdW1xcdy1dezIxfSQvO1xuZXhwb3J0IGNvbnN0IElOVkFMSURfRklEID0gJyc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbmV3IEZJRCB1c2luZyByYW5kb20gdmFsdWVzIGZyb20gV2ViIENyeXB0byBBUEkuXG4gKiBSZXR1cm5zIGFuIGVtcHR5IHN0cmluZyBpZiBGSUQgZ2VuZXJhdGlvbiBmYWlscyBmb3IgYW55IHJlYXNvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmlkKCk6IHN0cmluZyB7XG4gIHRyeSB7XG4gICAgLy8gQSB2YWxpZCBGSUQgaGFzIGV4YWN0bHkgMjIgYmFzZTY0IGNoYXJhY3RlcnMsIHdoaWNoIGlzIDEzMiBiaXRzLCBvciAxNi41XG4gICAgLy8gYnl0ZXMuIG91ciBpbXBsZW1lbnRhdGlvbiBnZW5lcmF0ZXMgYSAxNyBieXRlIGFycmF5IGluc3RlYWQuXG4gICAgY29uc3QgZmlkQnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTcpO1xuICAgIGNvbnN0IGNyeXB0byA9XG4gICAgICBzZWxmLmNyeXB0byB8fCAoc2VsZiBhcyB1bmtub3duIGFzIHsgbXNDcnlwdG86IENyeXB0byB9KS5tc0NyeXB0bztcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGZpZEJ5dGVBcnJheSk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBmaXJzdCA0IHJhbmRvbSBiaXRzIHdpdGggdGhlIGNvbnN0YW50IEZJRCBoZWFkZXIgb2YgMGIwMTExLlxuICAgIGZpZEJ5dGVBcnJheVswXSA9IDBiMDExMTAwMDAgKyAoZmlkQnl0ZUFycmF5WzBdICUgMGIwMDAxMDAwMCk7XG5cbiAgICBjb25zdCBmaWQgPSBlbmNvZGUoZmlkQnl0ZUFycmF5KTtcblxuICAgIHJldHVybiBWQUxJRF9GSURfUEFUVEVSTi50ZXN0KGZpZCkgPyBmaWQgOiBJTlZBTElEX0ZJRDtcbiAgfSBjYXRjaCB7XG4gICAgLy8gRklEIGdlbmVyYXRpb24gZXJyb3JlZFxuICAgIHJldHVybiBJTlZBTElEX0ZJRDtcbiAgfVxufVxuXG4vKiogQ29udmVydHMgYSBGSUQgVWludDhBcnJheSB0byBhIGJhc2U2NCBzdHJpbmcgcmVwcmVzZW50YXRpb24uICovXG5mdW5jdGlvbiBlbmNvZGUoZmlkQnl0ZUFycmF5OiBVaW50OEFycmF5KTogc3RyaW5nIHtcbiAgY29uc3QgYjY0U3RyaW5nID0gYnVmZmVyVG9CYXNlNjRVcmxTYWZlKGZpZEJ5dGVBcnJheSk7XG5cbiAgLy8gUmVtb3ZlIHRoZSAyM3JkIGNoYXJhY3RlciB0aGF0IHdhcyBhZGRlZCBiZWNhdXNlIG9mIHRoZSBleHRyYSA0IGJpdHMgYXQgdGhlXG4gIC8vIGVuZCBvZiBvdXIgMTcgYnl0ZSBhcnJheSwgYW5kIHRoZSAnPScgcGFkZGluZy5cbiAgcmV0dXJuIGI2NFN0cmluZy5zdWJzdHIoMCwgMjIpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuXG4vKiogUmV0dXJucyBhIHN0cmluZyBrZXkgdGhhdCBjYW4gYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgYXBwLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEtleShhcHBDb25maWc6IEFwcENvbmZpZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHthcHBDb25maWcuYXBwTmFtZX0hJHthcHBDb25maWcuYXBwSWR9YDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBnZXRLZXkgfSBmcm9tICcuLi91dGlsL2dldC1rZXknO1xuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBJZENoYW5nZUNhbGxiYWNrRm4gfSBmcm9tICcuLi9hcGknO1xuXG5jb25zdCBmaWRDaGFuZ2VDYWxsYmFja3M6IE1hcDxzdHJpbmcsIFNldDxJZENoYW5nZUNhbGxiYWNrRm4+PiA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBDYWxscyB0aGUgb25JZENoYW5nZSBjYWxsYmFja3Mgd2l0aCB0aGUgbmV3IEZJRCB2YWx1ZSwgYW5kIGJyb2FkY2FzdHMgdGhlXG4gKiBjaGFuZ2UgdG8gb3RoZXIgdGFicy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpZENoYW5nZWQoYXBwQ29uZmlnOiBBcHBDb25maWcsIGZpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuXG4gIGNhbGxGaWRDaGFuZ2VDYWxsYmFja3Moa2V5LCBmaWQpO1xuICBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5LCBmaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbGJhY2soXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICBjYWxsYmFjazogSWRDaGFuZ2VDYWxsYmFja0ZuXG4pOiB2b2lkIHtcbiAgLy8gT3BlbiB0aGUgYnJvYWRjYXN0IGNoYW5uZWwgaWYgaXQncyBub3QgYWxyZWFkeSBvcGVuLFxuICAvLyB0byBiZSBhYmxlIHRvIGxpc3RlbiB0byBjaGFuZ2UgZXZlbnRzIGZyb20gb3RoZXIgdGFicy5cbiAgZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpO1xuXG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuXG4gIGxldCBjYWxsYmFja1NldCA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcbiAgaWYgKCFjYWxsYmFja1NldCkge1xuICAgIGNhbGxiYWNrU2V0ID0gbmV3IFNldCgpO1xuICAgIGZpZENoYW5nZUNhbGxiYWNrcy5zZXQoa2V5LCBjYWxsYmFja1NldCk7XG4gIH1cbiAgY2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKFxuICBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgY2FsbGJhY2s6IElkQ2hhbmdlQ2FsbGJhY2tGblxuKTogdm9pZCB7XG4gIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuXG4gIGNvbnN0IGNhbGxiYWNrU2V0ID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xuXG4gIGlmICghY2FsbGJhY2tTZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjYWxsYmFja1NldC5kZWxldGUoY2FsbGJhY2spO1xuICBpZiAoY2FsbGJhY2tTZXQuc2l6ZSA9PT0gMCkge1xuICAgIGZpZENoYW5nZUNhbGxiYWNrcy5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIC8vIENsb3NlIGJyb2FkY2FzdCBjaGFubmVsIGlmIHRoZXJlIGFyZSBubyBtb3JlIGNhbGxiYWNrcy5cbiAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XG59XG5cbmZ1bmN0aW9uIGNhbGxGaWRDaGFuZ2VDYWxsYmFja3Moa2V5OiBzdHJpbmcsIGZpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGNhbGxiYWNrcyA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrKGZpZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnJvYWRjYXN0RmlkQ2hhbmdlKGtleTogc3RyaW5nLCBmaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBjaGFubmVsID0gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpO1xuICBpZiAoY2hhbm5lbCkge1xuICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoeyBrZXksIGZpZCB9KTtcbiAgfVxuICBjbG9zZUJyb2FkY2FzdENoYW5uZWwoKTtcbn1cblxubGV0IGJyb2FkY2FzdENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgfCBudWxsID0gbnVsbDtcbi8qKiBPcGVucyBhbmQgcmV0dXJucyBhIEJyb2FkY2FzdENoYW5uZWwgaWYgaXQgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLiAqL1xuZnVuY3Rpb24gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpOiBCcm9hZGNhc3RDaGFubmVsIHwgbnVsbCB7XG4gIGlmICghYnJvYWRjYXN0Q2hhbm5lbCAmJiAnQnJvYWRjYXN0Q2hhbm5lbCcgaW4gc2VsZikge1xuICAgIGJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnW0ZpcmViYXNlXSBGSUQgQ2hhbmdlJyk7XG4gICAgYnJvYWRjYXN0Q2hhbm5lbC5vbm1lc3NhZ2UgPSBlID0+IHtcbiAgICAgIGNhbGxGaWRDaGFuZ2VDYWxsYmFja3MoZS5kYXRhLmtleSwgZS5kYXRhLmZpZCk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gYnJvYWRjYXN0Q2hhbm5lbDtcbn1cblxuZnVuY3Rpb24gY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk6IHZvaWQge1xuICBpZiAoZmlkQ2hhbmdlQ2FsbGJhY2tzLnNpemUgPT09IDAgJiYgYnJvYWRjYXN0Q2hhbm5lbCkge1xuICAgIGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcbiAgICBicm9hZGNhc3RDaGFubmVsID0gbnVsbDtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IERCU2NoZW1hLCBJREJQRGF0YWJhc2UsIG9wZW5EQiB9IGZyb20gJ2lkYic7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IEluc3RhbGxhdGlvbkVudHJ5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHsgZ2V0S2V5IH0gZnJvbSAnLi4vdXRpbC9nZXQta2V5JztcbmltcG9ydCB7IGZpZENoYW5nZWQgfSBmcm9tICcuL2ZpZC1jaGFuZ2VkJztcblxuY29uc3QgREFUQUJBU0VfTkFNRSA9ICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLWRhdGFiYXNlJztcbmNvbnN0IERBVEFCQVNFX1ZFUlNJT04gPSAxO1xuY29uc3QgT0JKRUNUX1NUT1JFX05BTUUgPSAnZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1zdG9yZSc7XG5cbmludGVyZmFjZSBJbnN0YWxsYXRpb25zREIgZXh0ZW5kcyBEQlNjaGVtYSB7XG4gICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLXN0b3JlJzoge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHZhbHVlOiBJbnN0YWxsYXRpb25FbnRyeSB8IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxubGV0IGRiUHJvbWlzZTogUHJvbWlzZTxJREJQRGF0YWJhc2U8SW5zdGFsbGF0aW9uc0RCPj4gfCBudWxsID0gbnVsbDtcbmZ1bmN0aW9uIGdldERiUHJvbWlzZSgpOiBQcm9taXNlPElEQlBEYXRhYmFzZTxJbnN0YWxsYXRpb25zREI+PiB7XG4gIGlmICghZGJQcm9taXNlKSB7XG4gICAgZGJQcm9taXNlID0gb3BlbkRCKERBVEFCQVNFX05BTUUsIERBVEFCQVNFX1ZFUlNJT04sIHtcbiAgICAgIHVwZ3JhZGU6IChkYiwgb2xkVmVyc2lvbikgPT4ge1xuICAgICAgICAvLyBXZSBkb24ndCB1c2UgJ2JyZWFrJyBpbiB0aGlzIHN3aXRjaCBzdGF0ZW1lbnQsIHRoZSBmYWxsLXRocm91Z2hcbiAgICAgICAgLy8gYmVoYXZpb3IgaXMgd2hhdCB3ZSB3YW50LCBiZWNhdXNlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSB2ZXJzaW9ucyBiZXR3ZWVuXG4gICAgICAgIC8vIHRoZSBvbGQgdmVyc2lvbiBhbmQgdGhlIGN1cnJlbnQgdmVyc2lvbiwgd2Ugd2FudCBBTEwgdGhlIG1pZ3JhdGlvbnNcbiAgICAgICAgLy8gdGhhdCBjb3JyZXNwb25kIHRvIHRob3NlIHZlcnNpb25zIHRvIHJ1biwgbm90IG9ubHkgdGhlIGxhc3Qgb25lLlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgICAgIHN3aXRjaCAob2xkVmVyc2lvbikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBkYlByb21pc2U7XG59XG5cbi8qKiBHZXRzIHJlY29yZChzKSBmcm9tIHRoZSBvYmplY3RTdG9yZSB0aGF0IG1hdGNoIHRoZSBnaXZlbiBrZXkuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KFxuICBhcHBDb25maWc6IEFwcENvbmZpZ1xuKTogUHJvbWlzZTxJbnN0YWxsYXRpb25FbnRyeSB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgcmV0dXJuIGRiXG4gICAgLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FKVxuICAgIC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSlcbiAgICAuZ2V0KGtleSkgYXMgUHJvbWlzZTxJbnN0YWxsYXRpb25FbnRyeT47XG59XG5cbi8qKiBBc3NpZ25zIG9yIG92ZXJ3cml0ZXMgdGhlIHJlY29yZCBmb3IgdGhlIGdpdmVuIGtleSB3aXRoIHRoZSBnaXZlbiB2YWx1ZS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXQ8VmFsdWVUeXBlIGV4dGVuZHMgSW5zdGFsbGF0aW9uRW50cnk+KFxuICBhcHBDb25maWc6IEFwcENvbmZpZyxcbiAgdmFsdWU6IFZhbHVlVHlwZVxuKTogUHJvbWlzZTxWYWx1ZVR5cGU+IHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcbiAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gIGNvbnN0IG9sZFZhbHVlID0gKGF3YWl0IG9iamVjdFN0b3JlLmdldChrZXkpKSBhcyBJbnN0YWxsYXRpb25FbnRyeTtcbiAgYXdhaXQgb2JqZWN0U3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICBhd2FpdCB0eC5kb25lO1xuXG4gIGlmICghb2xkVmFsdWUgfHwgb2xkVmFsdWUuZmlkICE9PSB2YWx1ZS5maWQpIHtcbiAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgdmFsdWUuZmlkKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqIFJlbW92ZXMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmUoYXBwQ29uZmlnOiBBcHBDb25maWcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcbiAgYXdhaXQgdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpLmRlbGV0ZShrZXkpO1xuICBhd2FpdCB0eC5kb25lO1xufVxuXG4vKipcbiAqIEF0b21pY2FsbHkgdXBkYXRlcyBhIHJlY29yZCB3aXRoIHRoZSByZXN1bHQgb2YgdXBkYXRlRm4sIHdoaWNoIGdldHNcbiAqIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlLiBJZiBuZXdWYWx1ZSBpcyB1bmRlZmluZWQsIHRoZSByZWNvcmQgaXNcbiAqIGRlbGV0ZWQgaW5zdGVhZC5cbiAqIEByZXR1cm4gVXBkYXRlZCB2YWx1ZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlPFZhbHVlVHlwZSBleHRlbmRzIEluc3RhbGxhdGlvbkVudHJ5IHwgdW5kZWZpbmVkPihcbiAgYXBwQ29uZmlnOiBBcHBDb25maWcsXG4gIHVwZGF0ZUZuOiAocHJldmlvdXNWYWx1ZTogSW5zdGFsbGF0aW9uRW50cnkgfCB1bmRlZmluZWQpID0+IFZhbHVlVHlwZVxuKTogUHJvbWlzZTxWYWx1ZVR5cGU+IHtcbiAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcbiAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gIGNvbnN0IG9sZFZhbHVlOiBJbnN0YWxsYXRpb25FbnRyeSB8IHVuZGVmaW5lZCA9IChhd2FpdCBzdG9yZS5nZXQoXG4gICAga2V5XG4gICkpIGFzIEluc3RhbGxhdGlvbkVudHJ5O1xuICBjb25zdCBuZXdWYWx1ZSA9IHVwZGF0ZUZuKG9sZFZhbHVlKTtcblxuICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGF3YWl0IHN0b3JlLmRlbGV0ZShrZXkpO1xuICB9IGVsc2Uge1xuICAgIGF3YWl0IHN0b3JlLnB1dChuZXdWYWx1ZSwga2V5KTtcbiAgfVxuICBhd2FpdCB0eC5kb25lO1xuXG4gIGlmIChuZXdWYWx1ZSAmJiAoIW9sZFZhbHVlIHx8IG9sZFZhbHVlLmZpZCAhPT0gbmV3VmFsdWUuZmlkKSkge1xuICAgIGZpZENoYW5nZWQoYXBwQ29uZmlnLCBuZXdWYWx1ZS5maWQpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcbiAgYXdhaXQgdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpLmNsZWFyKCk7XG4gIGF3YWl0IHR4LmRvbmU7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdCB9IGZyb20gJy4uL2Z1bmN0aW9ucy9jcmVhdGUtaW5zdGFsbGF0aW9uLXJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgQXBwQ29uZmlnLFxuICBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHtcbiAgSW5Qcm9ncmVzc0luc3RhbGxhdGlvbkVudHJ5LFxuICBJbnN0YWxsYXRpb25FbnRyeSxcbiAgUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5LFxuICBSZXF1ZXN0U3RhdHVzXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWVudHJ5JztcbmltcG9ydCB7IFBFTkRJTkdfVElNRU9VVF9NUyB9IGZyb20gJy4uL3V0aWwvY29uc3RhbnRzJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSwgaXNTZXJ2ZXJFcnJvciB9IGZyb20gJy4uL3V0aWwvZXJyb3JzJztcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbC9zbGVlcCc7XG5pbXBvcnQgeyBnZW5lcmF0ZUZpZCwgSU5WQUxJRF9GSUQgfSBmcm9tICcuL2dlbmVyYXRlLWZpZCc7XG5pbXBvcnQgeyByZW1vdmUsIHNldCwgdXBkYXRlIH0gZnJvbSAnLi9pZGItbWFuYWdlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFsbGF0aW9uRW50cnlXaXRoUmVnaXN0cmF0aW9uUHJvbWlzZSB7XG4gIGluc3RhbGxhdGlvbkVudHJ5OiBJbnN0YWxsYXRpb25FbnRyeTtcbiAgLyoqIEV4aXN0IGlmZiB0aGUgaW5zdGFsbGF0aW9uRW50cnkgaXMgbm90IHJlZ2lzdGVyZWQuICovXG4gIHJlZ2lzdHJhdGlvblByb21pc2U/OiBQcm9taXNlPFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeT47XG59XG5cbi8qKlxuICogVXBkYXRlcyBhbmQgcmV0dXJucyB0aGUgSW5zdGFsbGF0aW9uRW50cnkgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBBbHNvIHRyaWdnZXJzIGEgcmVnaXN0cmF0aW9uIHJlcXVlc3QgaWYgaXQgaXMgbmVjZXNzYXJ5IGFuZCBwb3NzaWJsZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbkVudHJ5KFxuICBpbnN0YWxsYXRpb25zOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsXG4pOiBQcm9taXNlPEluc3RhbGxhdGlvbkVudHJ5V2l0aFJlZ2lzdHJhdGlvblByb21pc2U+IHtcbiAgbGV0IHJlZ2lzdHJhdGlvblByb21pc2U6IFByb21pc2U8UmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5PiB8IHVuZGVmaW5lZDtcblxuICBjb25zdCBpbnN0YWxsYXRpb25FbnRyeSA9IGF3YWl0IHVwZGF0ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgIGNvbnN0IGluc3RhbGxhdGlvbkVudHJ5ID0gdXBkYXRlT3JDcmVhdGVJbnN0YWxsYXRpb25FbnRyeShvbGRFbnRyeSk7XG4gICAgY29uc3QgZW50cnlXaXRoUHJvbWlzZSA9IHRyaWdnZXJSZWdpc3RyYXRpb25JZk5lY2Vzc2FyeShcbiAgICAgIGluc3RhbGxhdGlvbnMsXG4gICAgICBpbnN0YWxsYXRpb25FbnRyeVxuICAgICk7XG4gICAgcmVnaXN0cmF0aW9uUHJvbWlzZSA9IGVudHJ5V2l0aFByb21pc2UucmVnaXN0cmF0aW9uUHJvbWlzZTtcbiAgICByZXR1cm4gZW50cnlXaXRoUHJvbWlzZS5pbnN0YWxsYXRpb25FbnRyeTtcbiAgfSk7XG5cbiAgaWYgKGluc3RhbGxhdGlvbkVudHJ5LmZpZCA9PT0gSU5WQUxJRF9GSUQpIHtcbiAgICAvLyBGSUQgZ2VuZXJhdGlvbiBmYWlsZWQuIFdhaXRpbmcgZm9yIHRoZSBGSUQgZnJvbSB0aGUgc2VydmVyLlxuICAgIHJldHVybiB7IGluc3RhbGxhdGlvbkVudHJ5OiBhd2FpdCByZWdpc3RyYXRpb25Qcm9taXNlISB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbnN0YWxsYXRpb25FbnRyeSxcbiAgICByZWdpc3RyYXRpb25Qcm9taXNlXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBJbnN0YWxsYXRpb24gRW50cnkgaWYgb25lIGRvZXMgbm90IGV4aXN0LlxuICogQWxzbyBjbGVhcnMgdGltZWQgb3V0IHBlbmRpbmcgcmVxdWVzdHMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZU9yQ3JlYXRlSW5zdGFsbGF0aW9uRW50cnkoXG4gIG9sZEVudHJ5OiBJbnN0YWxsYXRpb25FbnRyeSB8IHVuZGVmaW5lZFxuKTogSW5zdGFsbGF0aW9uRW50cnkge1xuICBjb25zdCBlbnRyeTogSW5zdGFsbGF0aW9uRW50cnkgPSBvbGRFbnRyeSB8fCB7XG4gICAgZmlkOiBnZW5lcmF0ZUZpZCgpLFxuICAgIHJlZ2lzdHJhdGlvblN0YXR1czogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRFxuICB9O1xuXG4gIHJldHVybiBjbGVhclRpbWVkT3V0UmVxdWVzdChlbnRyeSk7XG59XG5cbi8qKlxuICogSWYgdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCB5ZXQsIHRoaXMgd2lsbCB0cmlnZ2VyIHRoZVxuICogcmVnaXN0cmF0aW9uIGFuZCByZXR1cm4gYW4gSW5Qcm9ncmVzc0luc3RhbGxhdGlvbkVudHJ5LlxuICpcbiAqIElmIHJlZ2lzdHJhdGlvblByb21pc2UgZG9lcyBub3QgZXhpc3QsIHRoZSBpbnN0YWxsYXRpb25FbnRyeSBpcyBndWFyYW50ZWVkXG4gKiB0byBiZSByZWdpc3RlcmVkLlxuICovXG5mdW5jdGlvbiB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoXG4gIGluc3RhbGxhdGlvbnM6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwsXG4gIGluc3RhbGxhdGlvbkVudHJ5OiBJbnN0YWxsYXRpb25FbnRyeVxuKTogSW5zdGFsbGF0aW9uRW50cnlXaXRoUmVnaXN0cmF0aW9uUHJvbWlzZSB7XG4gIGlmIChpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQpIHtcbiAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiByZXF1aXJlZCBidXQgYXBwIGlzIG9mZmxpbmUuXG4gICAgICBjb25zdCByZWdpc3RyYXRpb25Qcm9taXNlV2l0aEVycm9yID0gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5BUFBfT0ZGTElORSlcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbnN0YWxsYXRpb25FbnRyeSxcbiAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogcmVnaXN0cmF0aW9uUHJvbWlzZVdpdGhFcnJvclxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgcmVnaXN0ZXJpbmcuIENoYW5nZSBzdGF0dXMgdG8gSU5fUFJPR1JFU1MuXG4gICAgY29uc3QgaW5Qcm9ncmVzc0VudHJ5OiBJblByb2dyZXNzSW5zdGFsbGF0aW9uRW50cnkgPSB7XG4gICAgICBmaWQ6IGluc3RhbGxhdGlvbkVudHJ5LmZpZCxcbiAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyxcbiAgICAgIHJlZ2lzdHJhdGlvblRpbWU6IERhdGUubm93KClcbiAgICB9O1xuICAgIGNvbnN0IHJlZ2lzdHJhdGlvblByb21pc2UgPSByZWdpc3Rlckluc3RhbGxhdGlvbihcbiAgICAgIGluc3RhbGxhdGlvbnMsXG4gICAgICBpblByb2dyZXNzRW50cnlcbiAgICApO1xuICAgIHJldHVybiB7IGluc3RhbGxhdGlvbkVudHJ5OiBpblByb2dyZXNzRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgfTtcbiAgfSBlbHNlIGlmIChcbiAgICBpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1NcbiAgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluc3RhbGxhdGlvbkVudHJ5LFxuICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogd2FpdFVudGlsRmlkUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnMpXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeSB9O1xuICB9XG59XG5cbi8qKiBUaGlzIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBvbmNlIGZvciBlYWNoIG5ldyBGaXJlYmFzZSBJbnN0YWxsYXRpb24uICovXG5hc3luYyBmdW5jdGlvbiByZWdpc3Rlckluc3RhbGxhdGlvbihcbiAgaW5zdGFsbGF0aW9uczogRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCxcbiAgaW5zdGFsbGF0aW9uRW50cnk6IEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeVxuKTogUHJvbWlzZTxSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgPSBhd2FpdCBjcmVhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KFxuICAgICAgaW5zdGFsbGF0aW9ucyxcbiAgICAgIGluc3RhbGxhdGlvbkVudHJ5XG4gICAgKTtcbiAgICByZXR1cm4gc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGlzU2VydmVyRXJyb3IoZSkgJiYgZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwOSkge1xuICAgICAgLy8gU2VydmVyIHJldHVybmVkIGEgXCJGSUQgY2FuIG5vdCBiZSB1c2VkXCIgZXJyb3IuXG4gICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBuZXh0IHRpbWUuXG4gICAgICBhd2FpdCByZW1vdmUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gZmFpbGVkLiBTZXQgRklEIGFzIG5vdCByZWdpc3RlcmVkLlxuICAgICAgYXdhaXQgc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCB7XG4gICAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxuICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURURcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKiBDYWxsIGlmIEZJRCByZWdpc3RyYXRpb24gaXMgcGVuZGluZyBpbiBhbm90aGVyIHJlcXVlc3QuICovXG5hc3luYyBmdW5jdGlvbiB3YWl0VW50aWxGaWRSZWdpc3RyYXRpb24oXG4gIGluc3RhbGxhdGlvbnM6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGxcbik6IFByb21pc2U8UmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5PiB7XG4gIC8vIFVuZm9ydHVuYXRlbHksIHRoZXJlIGlzIG5vIHdheSBvZiByZWxpYWJseSBvYnNlcnZpbmcgd2hlbiBhIHZhbHVlIGluXG4gIC8vIEluZGV4ZWREQiBjaGFuZ2VzICh5ZXQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9pbmRleGVkLWRiLW9ic2VydmVycyksXG4gIC8vIHNvIHdlIG5lZWQgdG8gcG9sbC5cblxuICBsZXQgZW50cnk6IEluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChcbiAgICBpbnN0YWxsYXRpb25zLmFwcENvbmZpZ1xuICApO1xuICB3aGlsZSAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTKSB7XG4gICAgLy8gY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3Qgc3RpbGwgaW4gcHJvZ3Jlc3MuXG4gICAgYXdhaXQgc2xlZXAoMTAwKTtcblxuICAgIGVudHJ5ID0gYXdhaXQgdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XG4gIH1cblxuICBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEKSB7XG4gICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0IG9yIGZhaWxlZCBpbiBhIGRpZmZlcmVudCBjYWxsLiBUcnkgYWdhaW4uXG4gICAgY29uc3QgeyBpbnN0YWxsYXRpb25FbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSB9ID1cbiAgICAgIGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpO1xuXG4gICAgaWYgKHJlZ2lzdHJhdGlvblByb21pc2UpIHtcbiAgICAgIHJldHVybiByZWdpc3RyYXRpb25Qcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBubyByZWdpc3RyYXRpb25Qcm9taXNlLCBlbnRyeSBpcyByZWdpc3RlcmVkLlxuICAgICAgcmV0dXJuIGluc3RhbGxhdGlvbkVudHJ5IGFzIFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW50cnk7XG59XG5cbi8qKlxuICogQ2FsbGVkIG9ubHkgaWYgdGhlcmUgaXMgYSBDcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdCBpbiBwcm9ncmVzcy5cbiAqXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcbiAqIENyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0LlxuICpcbiAqIFJldHVybnMgdGhlIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnXG4pOiBQcm9taXNlPEluc3RhbGxhdGlvbkVudHJ5PiB7XG4gIHJldHVybiB1cGRhdGUoYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XG4gICAgaWYgKCFvbGRFbnRyeSkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLklOU1RBTExBVElPTl9OT1RfRk9VTkQpO1xuICAgIH1cbiAgICByZXR1cm4gY2xlYXJUaW1lZE91dFJlcXVlc3Qob2xkRW50cnkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUaW1lZE91dFJlcXVlc3QoZW50cnk6IEluc3RhbGxhdGlvbkVudHJ5KTogSW5zdGFsbGF0aW9uRW50cnkge1xuICBpZiAoaGFzSW5zdGFsbGF0aW9uUmVxdWVzdFRpbWVkT3V0KGVudHJ5KSkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWQ6IGVudHJ5LmZpZCxcbiAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGhhc0luc3RhbGxhdGlvblJlcXVlc3RUaW1lZE91dChcbiAgaW5zdGFsbGF0aW9uRW50cnk6IEluc3RhbGxhdGlvbkVudHJ5XG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgJiZcbiAgICBpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25UaW1lICsgUEVORElOR19USU1FT1VUX01TIDwgRGF0ZS5ub3coKVxuICApO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEdlbmVyYXRlQXV0aFRva2VuUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FwaS1yZXNwb25zZSc7XG5pbXBvcnQge1xuICBDb21wbGV0ZWRBdXRoVG9rZW4sXG4gIFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeVxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQgeyBQQUNLQUdFX1ZFUlNJT04gfSBmcm9tICcuLi91dGlsL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZSxcbiAgZ2V0RXJyb3JGcm9tUmVzcG9uc2UsXG4gIGdldEhlYWRlcnNXaXRoQXV0aCxcbiAgZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50LFxuICByZXRyeUlmU2VydmVyRXJyb3Jcbn0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHtcbiAgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCxcbiAgQXBwQ29uZmlnXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVBdXRoVG9rZW5SZXF1ZXN0KFxuICB7IGFwcENvbmZpZywgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIH06IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwsXG4gIGluc3RhbGxhdGlvbkVudHJ5OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnlcbik6IFByb21pc2U8Q29tcGxldGVkQXV0aFRva2VuPiB7XG4gIGNvbnN0IGVuZHBvaW50ID0gZ2V0R2VuZXJhdGVBdXRoVG9rZW5FbmRwb2ludChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcblxuICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xuXG4gIC8vIElmIGhlYXJ0YmVhdCBzZXJ2aWNlIGV4aXN0cywgYWRkIHRoZSBoZWFydGJlYXQgc3RyaW5nIHRvIHRoZSBoZWFkZXIuXG4gIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2UgPSBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHtcbiAgICBvcHRpb25hbDogdHJ1ZVxuICB9KTtcbiAgaWYgKGhlYXJ0YmVhdFNlcnZpY2UpIHtcbiAgICBjb25zdCBoZWFydGJlYXRzSGVhZGVyID0gYXdhaXQgaGVhcnRiZWF0U2VydmljZS5nZXRIZWFydGJlYXRzSGVhZGVyKCk7XG4gICAgaWYgKGhlYXJ0YmVhdHNIZWFkZXIpIHtcbiAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWZpcmViYXNlLWNsaWVudCcsIGhlYXJ0YmVhdHNIZWFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSB7XG4gICAgaW5zdGFsbGF0aW9uOiB7XG4gICAgICBzZGtWZXJzaW9uOiBQQUNLQUdFX1ZFUlNJT04sXG4gICAgICBhcHBJZDogYXBwQ29uZmlnLmFwcElkXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3RJbml0ID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCByZXNwb25zZVZhbHVlOiBHZW5lcmF0ZUF1dGhUb2tlblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGNvbXBsZXRlZEF1dGhUb2tlbjogQ29tcGxldGVkQXV0aFRva2VuID1cbiAgICAgIGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKHJlc3BvbnNlVmFsdWUpO1xuICAgIHJldHVybiBjb21wbGV0ZWRBdXRoVG9rZW47XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgYXdhaXQgZ2V0RXJyb3JGcm9tUmVzcG9uc2UoJ0dlbmVyYXRlIEF1dGggVG9rZW4nLCByZXNwb25zZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0R2VuZXJhdGVBdXRoVG9rZW5FbmRwb2ludChcbiAgYXBwQ29uZmlnOiBBcHBDb25maWcsXG4gIHsgZmlkIH06IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeVxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2dldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpfS8ke2ZpZH0vYXV0aFRva2VuczpnZW5lcmF0ZWA7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2VuZXJhdGVBdXRoVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi4vZnVuY3Rpb25zL2dlbmVyYXRlLWF1dGgtdG9rZW4tcmVxdWVzdCc7XG5pbXBvcnQge1xuICBBcHBDb25maWcsXG4gIEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQge1xuICBBdXRoVG9rZW4sXG4gIENvbXBsZXRlZEF1dGhUb2tlbixcbiAgSW5Qcm9ncmVzc0F1dGhUb2tlbixcbiAgSW5zdGFsbGF0aW9uRW50cnksXG4gIFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSxcbiAgUmVxdWVzdFN0YXR1c1xufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1lbnRyeSc7XG5pbXBvcnQgeyBQRU5ESU5HX1RJTUVPVVRfTVMsIFRPS0VOX0VYUElSQVRJT05fQlVGRkVSIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudHMnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlLCBpc1NlcnZlckVycm9yIH0gZnJvbSAnLi4vdXRpbC9lcnJvcnMnO1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuLi91dGlsL3NsZWVwJztcbmltcG9ydCB7IHJlbW92ZSwgc2V0LCB1cGRhdGUgfSBmcm9tICcuL2lkYi1tYW5hZ2VyJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgdmFsaWQgYXV0aGVudGljYXRpb24gdG9rZW4gZm9yIHRoZSBpbnN0YWxsYXRpb24uIEdlbmVyYXRlcyBhIG5ld1xuICogdG9rZW4gaWYgb25lIGRvZXNuJ3QgZXhpc3QsIGlzIGV4cGlyZWQgb3IgYWJvdXQgdG8gZXhwaXJlLlxuICpcbiAqIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBpZiB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIHJlZ2lzdGVyZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQXV0aFRva2VuKFxuICBpbnN0YWxsYXRpb25zOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsLFxuICBmb3JjZVJlZnJlc2ggPSBmYWxzZVxuKTogUHJvbWlzZTxDb21wbGV0ZWRBdXRoVG9rZW4+IHtcbiAgbGV0IHRva2VuUHJvbWlzZTogUHJvbWlzZTxDb21wbGV0ZWRBdXRoVG9rZW4+IHwgdW5kZWZpbmVkO1xuICBjb25zdCBlbnRyeSA9IGF3YWl0IHVwZGF0ZShpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9UX1JFR0lTVEVSRUQpO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZEF1dGhUb2tlbiA9IG9sZEVudHJ5LmF1dGhUb2tlbjtcbiAgICBpZiAoIWZvcmNlUmVmcmVzaCAmJiBpc0F1dGhUb2tlblZhbGlkKG9sZEF1dGhUb2tlbikpIHtcbiAgICAgIC8vIFRoZXJlIGlzIGEgdmFsaWQgdG9rZW4gaW4gdGhlIERCLlxuICAgICAgcmV0dXJuIG9sZEVudHJ5O1xuICAgIH0gZWxzZSBpZiAob2xkQXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MpIHtcbiAgICAgIC8vIFRoZXJlIGFscmVhZHkgaXMgYSB0b2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxuICAgICAgdG9rZW5Qcm9taXNlID0gd2FpdFVudGlsQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpO1xuICAgICAgcmV0dXJuIG9sZEVudHJ5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyB0b2tlbiBvciB0b2tlbiBleHBpcmVkLlxuICAgICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5BUFBfT0ZGTElORSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluUHJvZ3Jlc3NFbnRyeSA9IG1ha2VBdXRoVG9rZW5SZXF1ZXN0SW5Qcm9ncmVzc0VudHJ5KG9sZEVudHJ5KTtcbiAgICAgIHRva2VuUHJvbWlzZSA9IGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihpbnN0YWxsYXRpb25zLCBpblByb2dyZXNzRW50cnkpO1xuICAgICAgcmV0dXJuIGluUHJvZ3Jlc3NFbnRyeTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGF1dGhUb2tlbiA9IHRva2VuUHJvbWlzZVxuICAgID8gYXdhaXQgdG9rZW5Qcm9taXNlXG4gICAgOiAoZW50cnkuYXV0aFRva2VuIGFzIENvbXBsZXRlZEF1dGhUb2tlbik7XG4gIHJldHVybiBhdXRoVG9rZW47XG59XG5cbi8qKlxuICogQ2FsbCBvbmx5IGlmIEZJRCBpcyByZWdpc3RlcmVkIGFuZCBBdXRoIFRva2VuIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MuXG4gKlxuICogV2FpdHMgdW50aWwgdGhlIGN1cnJlbnQgcGVuZGluZyByZXF1ZXN0IGZpbmlzaGVzLiBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsXG4gKiB0cmllcyBvbmNlIGluIHRoaXMgdGhyZWFkIGFzIHdlbGwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHdhaXRVbnRpbEF1dGhUb2tlblJlcXVlc3QoXG4gIGluc3RhbGxhdGlvbnM6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwsXG4gIGZvcmNlUmVmcmVzaDogYm9vbGVhblxuKTogUHJvbWlzZTxDb21wbGV0ZWRBdXRoVG9rZW4+IHtcbiAgLy8gVW5mb3J0dW5hdGVseSwgdGhlcmUgaXMgbm8gd2F5IG9mIHJlbGlhYmx5IG9ic2VydmluZyB3aGVuIGEgdmFsdWUgaW5cbiAgLy8gSW5kZXhlZERCIGNoYW5nZXMgKHlldCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2luZGV4ZWQtZGItb2JzZXJ2ZXJzKSxcbiAgLy8gc28gd2UgbmVlZCB0byBwb2xsLlxuXG4gIGxldCBlbnRyeSA9IGF3YWl0IHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICB3aGlsZSAoZW50cnkuYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MpIHtcbiAgICAvLyBnZW5lcmF0ZUF1dGhUb2tlbiBzdGlsbCBpbiBwcm9ncmVzcy5cbiAgICBhd2FpdCBzbGVlcCgxMDApO1xuXG4gICAgZW50cnkgPSBhd2FpdCB1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgfVxuXG4gIGNvbnN0IGF1dGhUb2tlbiA9IGVudHJ5LmF1dGhUb2tlbjtcbiAgaWYgKGF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEKSB7XG4gICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0IG9yIGZhaWxlZCBpbiBhIGRpZmZlcmVudCBjYWxsLiBUcnkgYWdhaW4uXG4gICAgcmV0dXJuIHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXV0aFRva2VuO1xuICB9XG59XG5cbi8qKlxuICogQ2FsbGVkIG9ubHkgaWYgdGhlcmUgaXMgYSBHZW5lcmF0ZUF1dGhUb2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxuICpcbiAqIFVwZGF0ZXMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGluIHRoZSBEQiBiYXNlZCBvbiB0aGUgc3RhdHVzIG9mIHRoZVxuICogR2VuZXJhdGVBdXRoVG9rZW4gcmVxdWVzdC5cbiAqXG4gKiBSZXR1cm5zIHRoZSB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5LlxuICovXG5mdW5jdGlvbiB1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0KFxuICBhcHBDb25maWc6IEFwcENvbmZpZ1xuKTogUHJvbWlzZTxSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnk+IHtcbiAgcmV0dXJuIHVwZGF0ZShhcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICBpZiAoIWlzRW50cnlSZWdpc3RlcmVkKG9sZEVudHJ5KSkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PVF9SRUdJU1RFUkVEKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRBdXRoVG9rZW4gPSBvbGRFbnRyeS5hdXRoVG9rZW47XG4gICAgaWYgKGhhc0F1dGhUb2tlblJlcXVlc3RUaW1lZE91dChvbGRBdXRoVG9rZW4pKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5vbGRFbnRyeSxcbiAgICAgICAgYXV0aFRva2VuOiB7IHJlcXVlc3RTdGF0dXM6IFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2xkRW50cnk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEF1dGhUb2tlbkZyb21TZXJ2ZXIoXG4gIGluc3RhbGxhdGlvbnM6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwsXG4gIGluc3RhbGxhdGlvbkVudHJ5OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnlcbik6IFByb21pc2U8Q29tcGxldGVkQXV0aFRva2VuPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXV0aFRva2VuID0gYXdhaXQgZ2VuZXJhdGVBdXRoVG9rZW5SZXF1ZXN0KFxuICAgICAgaW5zdGFsbGF0aW9ucyxcbiAgICAgIGluc3RhbGxhdGlvbkVudHJ5XG4gICAgKTtcbiAgICBjb25zdCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnk6IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSA9IHtcbiAgICAgIC4uLmluc3RhbGxhdGlvbkVudHJ5LFxuICAgICAgYXV0aFRva2VuXG4gICAgfTtcbiAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSk7XG4gICAgcmV0dXJuIGF1dGhUb2tlbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChcbiAgICAgIGlzU2VydmVyRXJyb3IoZSkgJiZcbiAgICAgIChlLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDAxIHx8IGUuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDQpXG4gICAgKSB7XG4gICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBub3QgZm91bmRcIiBvciBhIFwiSW52YWxpZCBhdXRoZW50aWNhdGlvblwiIGVycm9yLlxuICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxuICAgICAgYXdhaXQgcmVtb3ZlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgPSB7XG4gICAgICAgIC4uLmluc3RhbGxhdGlvbkVudHJ5LFxuICAgICAgICBhdXRoVG9rZW46IHsgcmVxdWVzdFN0YXR1czogUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCB9XG4gICAgICB9O1xuICAgICAgYXdhaXQgc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkpO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlSZWdpc3RlcmVkKFxuICBpbnN0YWxsYXRpb25FbnRyeTogSW5zdGFsbGF0aW9uRW50cnkgfCB1bmRlZmluZWRcbik6IGluc3RhbGxhdGlvbkVudHJ5IGlzIFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSB7XG4gIHJldHVybiAoXG4gICAgaW5zdGFsbGF0aW9uRW50cnkgIT09IHVuZGVmaW5lZCAmJlxuICAgIGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5DT01QTEVURURcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNBdXRoVG9rZW5WYWxpZChhdXRoVG9rZW46IEF1dGhUb2tlbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCAmJlxuICAgICFpc0F1dGhUb2tlbkV4cGlyZWQoYXV0aFRva2VuKVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0F1dGhUb2tlbkV4cGlyZWQoYXV0aFRva2VuOiBDb21wbGV0ZWRBdXRoVG9rZW4pOiBib29sZWFuIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIChcbiAgICBub3cgPCBhdXRoVG9rZW4uY3JlYXRpb25UaW1lIHx8XG4gICAgYXV0aFRva2VuLmNyZWF0aW9uVGltZSArIGF1dGhUb2tlbi5leHBpcmVzSW4gPCBub3cgKyBUT0tFTl9FWFBJUkFUSU9OX0JVRkZFUlxuICApO1xufVxuXG4vKiogUmV0dXJucyBhbiB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5IHdpdGggYW4gSW5Qcm9ncmVzc0F1dGhUb2tlbi4gKi9cbmZ1bmN0aW9uIG1ha2VBdXRoVG9rZW5SZXF1ZXN0SW5Qcm9ncmVzc0VudHJ5KFxuICBvbGRFbnRyeTogUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5XG4pOiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkge1xuICBjb25zdCBpblByb2dyZXNzQXV0aFRva2VuOiBJblByb2dyZXNzQXV0aFRva2VuID0ge1xuICAgIHJlcXVlc3RTdGF0dXM6IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MsXG4gICAgcmVxdWVzdFRpbWU6IERhdGUubm93KClcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAuLi5vbGRFbnRyeSxcbiAgICBhdXRoVG9rZW46IGluUHJvZ3Jlc3NBdXRoVG9rZW5cbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFzQXV0aFRva2VuUmVxdWVzdFRpbWVkT3V0KGF1dGhUb2tlbjogQXV0aFRva2VuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgJiZcbiAgICBhdXRoVG9rZW4ucmVxdWVzdFRpbWUgKyBQRU5ESU5HX1RJTUVPVVRfTVMgPCBEYXRlLm5vdygpXG4gICk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2V0SW5zdGFsbGF0aW9uRW50cnkgfSBmcm9tICcuLi9oZWxwZXJzL2dldC1pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHsgcmVmcmVzaEF1dGhUb2tlbiB9IGZyb20gJy4uL2hlbHBlcnMvcmVmcmVzaC1hdXRoLXRva2VuJztcbmltcG9ydCB7IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IEluc3RhbGxhdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3B1YmxpYy10eXBlcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpZiB0aGVyZSBpc24ndCBvbmUgZm9yIHRoZSBhcHAgYW5kXG4gKiByZXR1cm5zIHRoZSBJbnN0YWxsYXRpb24gSUQuXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SWQoaW5zdGFsbGF0aW9uczogSW5zdGFsbGF0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gaW5zdGFsbGF0aW9ucyBhcyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsO1xuICBjb25zdCB7IGluc3RhbGxhdGlvbkVudHJ5LCByZWdpc3RyYXRpb25Qcm9taXNlIH0gPSBhd2FpdCBnZXRJbnN0YWxsYXRpb25FbnRyeShcbiAgICBpbnN0YWxsYXRpb25zSW1wbFxuICApO1xuXG4gIGlmIChyZWdpc3RyYXRpb25Qcm9taXNlKSB7XG4gICAgcmVnaXN0cmF0aW9uUHJvbWlzZS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgaW5zdGFsbGF0aW9uIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCwgdXBkYXRlIHRoZSBhdXRoZW50aWNhdGlvblxuICAgIC8vIHRva2VuIGlmIG5lZWRlZC5cbiAgICByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnNJbXBsKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxuXG4gIHJldHVybiBpbnN0YWxsYXRpb25FbnRyeS5maWQ7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2V0SW5zdGFsbGF0aW9uRW50cnkgfSBmcm9tICcuLi9oZWxwZXJzL2dldC1pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHsgcmVmcmVzaEF1dGhUb2tlbiB9IGZyb20gJy4uL2hlbHBlcnMvcmVmcmVzaC1hdXRoLXRva2VuJztcbmltcG9ydCB7IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luc3RhbGxhdGlvbi1pbXBsJztcbmltcG9ydCB7IEluc3RhbGxhdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3B1YmxpYy10eXBlcyc7XG5cbi8qKlxuICogUmV0dXJucyBhIEZpcmViYXNlIEluc3RhbGxhdGlvbnMgYXV0aCB0b2tlbiwgaWRlbnRpZnlpbmcgdGhlIGN1cnJlbnRcbiAqIEZpcmViYXNlIEluc3RhbGxhdGlvbi5cbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSBmb3JjZVJlZnJlc2ggLSBGb3JjZSByZWZyZXNoIHJlZ2FyZGxlc3Mgb2YgdG9rZW4gZXhwaXJhdGlvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb2tlbihcbiAgaW5zdGFsbGF0aW9uczogSW5zdGFsbGF0aW9ucyxcbiAgZm9yY2VSZWZyZXNoID0gZmFsc2Vcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gaW5zdGFsbGF0aW9ucyBhcyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsO1xuICBhd2FpdCBjb21wbGV0ZUluc3RhbGxhdGlvblJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zSW1wbCk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB3ZSBlaXRoZXIgaGF2ZSBhIFJlZ2lzdGVyZWQgSW5zdGFsbGF0aW9uIGluIHRoZSBEQiwgb3Igd2UndmVcbiAgLy8gYWxyZWFkeSB0aHJvd24gYW4gZXJyb3IuXG4gIGNvbnN0IGF1dGhUb2tlbiA9IGF3YWl0IHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9uc0ltcGwsIGZvcmNlUmVmcmVzaCk7XG4gIHJldHVybiBhdXRoVG9rZW4udG9rZW47XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBsZXRlSW5zdGFsbGF0aW9uUmVnaXN0cmF0aW9uKFxuICBpbnN0YWxsYXRpb25zOiBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyByZWdpc3RyYXRpb25Qcm9taXNlIH0gPSBhd2FpdCBnZXRJbnN0YWxsYXRpb25FbnRyeShpbnN0YWxsYXRpb25zKTtcblxuICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xuICAgIC8vIEEgY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MuIFdhaXQgdW50aWwgaXQgZmluaXNoZXMuXG4gICAgYXdhaXQgcmVnaXN0cmF0aW9uUHJvbWlzZTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgUmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHtcbiAgZ2V0RXJyb3JGcm9tUmVzcG9uc2UsXG4gIGdldEhlYWRlcnNXaXRoQXV0aCxcbiAgZ2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50LFxuICByZXRyeUlmU2VydmVyRXJyb3Jcbn0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5zdGFsbGF0aW9uUmVxdWVzdChcbiAgYXBwQ29uZmlnOiBBcHBDb25maWcsXG4gIGluc3RhbGxhdGlvbkVudHJ5OiBSZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnlcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBlbmRwb2ludCA9IGdldERlbGV0ZUVuZHBvaW50KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXJzV2l0aEF1dGgoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XG4gIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3RJbml0ID0ge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgaGVhZGVyc1xuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmV0cnlJZlNlcnZlckVycm9yKCgpID0+IGZldGNoKGVuZHBvaW50LCByZXF1ZXN0KSk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBhd2FpdCBnZXRFcnJvckZyb21SZXNwb25zZSgnRGVsZXRlIEluc3RhbGxhdGlvbicsIHJlc3BvbnNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWxldGVFbmRwb2ludChcbiAgYXBwQ29uZmlnOiBBcHBDb25maWcsXG4gIHsgZmlkIH06IFJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeVxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2dldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpfS8ke2ZpZH1gO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGRlbGV0ZUluc3RhbGxhdGlvblJlcXVlc3QgfSBmcm9tICcuLi9mdW5jdGlvbnMvZGVsZXRlLWluc3RhbGxhdGlvbi1yZXF1ZXN0JztcbmltcG9ydCB7IHJlbW92ZSwgdXBkYXRlIH0gZnJvbSAnLi4vaGVscGVycy9pZGItbWFuYWdlcic7XG5pbXBvcnQgeyBSZXF1ZXN0U3RhdHVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24tZW50cnknO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgRXJyb3JDb2RlIH0gZnJvbSAnLi4vdXRpbC9lcnJvcnMnO1xuaW1wb3J0IHsgRmlyZWJhc2VJbnN0YWxsYXRpb25zSW1wbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5zdGFsbGF0aW9uLWltcGwnO1xuaW1wb3J0IHsgSW5zdGFsbGF0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHVibGljLXR5cGVzJztcblxuLyoqXG4gKiBEZWxldGVzIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gYW5kIGFsbCBhc3NvY2lhdGVkIGRhdGEuXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5zdGFsbGF0aW9ucyhcbiAgaW5zdGFsbGF0aW9uczogSW5zdGFsbGF0aW9uc1xuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgYXBwQ29uZmlnIH0gPSBpbnN0YWxsYXRpb25zIGFzIEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGw7XG5cbiAgY29uc3QgZW50cnkgPSBhd2FpdCB1cGRhdGUoYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XG4gICAgaWYgKG9sZEVudHJ5ICYmIG9sZEVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5OT1RfU1RBUlRFRCkge1xuICAgICAgLy8gRGVsZXRlIHRoZSB1bnJlZ2lzdGVyZWQgZW50cnkgd2l0aG91dCBzZW5kaW5nIGEgZGVsZXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gb2xkRW50cnk7XG4gIH0pO1xuXG4gIGlmIChlbnRyeSkge1xuICAgIGlmIChlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MpIHtcbiAgICAgIC8vIENhbid0IGRlbGV0ZSB3aGlsZSB0cnlpbmcgdG8gcmVnaXN0ZXIuXG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuREVMRVRFX1BFTkRJTkdfUkVHSVNUUkFUSU9OKTtcbiAgICB9IGVsc2UgaWYgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5DT01QTEVURUQpIHtcbiAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuQVBQX09GRkxJTkUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgZGVsZXRlSW5zdGFsbGF0aW9uUmVxdWVzdChhcHBDb25maWcsIGVudHJ5KTtcbiAgICAgICAgYXdhaXQgcmVtb3ZlKGFwcENvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYWRkQ2FsbGJhY2ssIHJlbW92ZUNhbGxiYWNrIH0gZnJvbSAnLi4vaGVscGVycy9maWQtY2hhbmdlZCc7XG5pbXBvcnQgeyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBJbnN0YWxsYXRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wdWJsaWMtdHlwZXMnO1xuXG4vKipcbiAqIEFuIHVzZXIgZGVmaW5lZCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW4gSW5zdGFsbGF0aW9ucyBJRCBjaGFuZ2VzLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IHR5cGUgSWRDaGFuZ2VDYWxsYmFja0ZuID0gKGluc3RhbGxhdGlvbklkOiBzdHJpbmcpID0+IHZvaWQ7XG4vKipcbiAqIFVuc3Vic2NyaWJlIGEgY2FsbGJhY2sgZnVuY3Rpb24gcHJldmlvdXNseSBhZGRlZCB2aWEge0BsaW5rIElkQ2hhbmdlQ2FsbGJhY2tGbn0uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgdHlwZSBJZENoYW5nZVVuc3Vic2NyaWJlRm4gPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFNldHMgYSBuZXcgY2FsbGJhY2sgdGhhdCB3aWxsIGdldCBjYWxsZWQgd2hlbiBJbnN0YWxsYXRpb24gSUQgY2hhbmdlcy5cbiAqIFJldHVybnMgYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbW92ZSB0aGUgY2FsbGJhY2sgd2hlbiBjYWxsZWQuXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gRklEIGNoYW5nZXMuXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZCB0byB1bnN1YnNjcmliZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbklkQ2hhbmdlKFxuICBpbnN0YWxsYXRpb25zOiBJbnN0YWxsYXRpb25zLFxuICBjYWxsYmFjazogSWRDaGFuZ2VDYWxsYmFja0ZuXG4pOiBJZENoYW5nZVVuc3Vic2NyaWJlRm4ge1xuICBjb25zdCB7IGFwcENvbmZpZyB9ID0gaW5zdGFsbGF0aW9ucyBhcyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsO1xuXG4gIGFkZENhbGxiYWNrKGFwcENvbmZpZywgY2FsbGJhY2spO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZUNhbGxiYWNrKGFwcENvbmZpZywgY2FsbGJhY2spO1xuICB9O1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEZpcmViYXNlQXBwLCBnZXRBcHAsIF9nZXRQcm92aWRlciB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgSW5zdGFsbGF0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHVibGljLXR5cGVzJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHtAbGluayBJbnN0YWxsYXRpb25zfSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuXG4gKiB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXG4gKiBAcGFyYW0gYXBwIC0gVGhlIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YWxsYXRpb25zKGFwcDogRmlyZWJhc2VBcHAgPSBnZXRBcHAoKSk6IEluc3RhbGxhdGlvbnMge1xuICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IF9nZXRQcm92aWRlcihhcHAsICdpbnN0YWxsYXRpb25zJykuZ2V0SW1tZWRpYXRlKCk7XG4gIHJldHVybiBpbnN0YWxsYXRpb25zSW1wbDtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBGaXJlYmFzZUFwcCwgRmlyZWJhc2VPcHRpb25zIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuLi91dGlsL2Vycm9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0QXBwQ29uZmlnKGFwcDogRmlyZWJhc2VBcHApOiBBcHBDb25maWcge1xuICBpZiAoIWFwcCB8fCAhYXBwLm9wdGlvbnMpIHtcbiAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcignQXBwIENvbmZpZ3VyYXRpb24nKTtcbiAgfVxuXG4gIGlmICghYXBwLm5hbWUpIHtcbiAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcignQXBwIE5hbWUnKTtcbiAgfVxuXG4gIC8vIFJlcXVpcmVkIGFwcCBjb25maWcga2V5c1xuICBjb25zdCBjb25maWdLZXlzOiBBcnJheTxrZXlvZiBGaXJlYmFzZU9wdGlvbnM+ID0gW1xuICAgICdwcm9qZWN0SWQnLFxuICAgICdhcGlLZXknLFxuICAgICdhcHBJZCdcbiAgXTtcblxuICBmb3IgKGNvbnN0IGtleU5hbWUgb2YgY29uZmlnS2V5cykge1xuICAgIGlmICghYXBwLm9wdGlvbnNba2V5TmFtZV0pIHtcbiAgICAgIHRocm93IGdldE1pc3NpbmdWYWx1ZUVycm9yKGtleU5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYXBwTmFtZTogYXBwLm5hbWUsXG4gICAgcHJvamVjdElkOiBhcHAub3B0aW9ucy5wcm9qZWN0SWQhLFxuICAgIGFwaUtleTogYXBwLm9wdGlvbnMuYXBpS2V5ISxcbiAgICBhcHBJZDogYXBwLm9wdGlvbnMuYXBwSWQhXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE1pc3NpbmdWYWx1ZUVycm9yKHZhbHVlTmFtZTogc3RyaW5nKTogRmlyZWJhc2VFcnJvciB7XG4gIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFUywge1xuICAgIHZhbHVlTmFtZVxuICB9KTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBfcmVnaXN0ZXJDb21wb25lbnQsIF9nZXRQcm92aWRlciB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRUeXBlLFxuICBJbnN0YW5jZUZhY3RvcnksXG4gIENvbXBvbmVudENvbnRhaW5lclxufSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGdldElkLCBnZXRUb2tlbiB9IGZyb20gJy4uL2FwaS9pbmRleCc7XG5pbXBvcnQgeyBfRmlyZWJhc2VJbnN0YWxsYXRpb25zSW50ZXJuYWwgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3B1YmxpYy10eXBlcyc7XG5pbXBvcnQgeyBGaXJlYmFzZUluc3RhbGxhdGlvbnNJbXBsIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnN0YWxsYXRpb24taW1wbCc7XG5pbXBvcnQgeyBleHRyYWN0QXBwQ29uZmlnIH0gZnJvbSAnLi4vaGVscGVycy9leHRyYWN0LWFwcC1jb25maWcnO1xuXG5jb25zdCBJTlNUQUxMQVRJT05TX05BTUUgPSAnaW5zdGFsbGF0aW9ucyc7XG5jb25zdCBJTlNUQUxMQVRJT05TX05BTUVfSU5URVJOQUwgPSAnaW5zdGFsbGF0aW9ucy1pbnRlcm5hbCc7XG5cbmNvbnN0IHB1YmxpY0ZhY3Rvcnk6IEluc3RhbmNlRmFjdG9yeTwnaW5zdGFsbGF0aW9ucyc+ID0gKFxuICBjb250YWluZXI6IENvbXBvbmVudENvbnRhaW5lclxuKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XG4gIC8vIFRocm93cyBpZiBhcHAgaXNuJ3QgY29uZmlndXJlZCBwcm9wZXJseS5cbiAgY29uc3QgYXBwQ29uZmlnID0gZXh0cmFjdEFwcENvbmZpZyhhcHApO1xuICBjb25zdCBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIgPSBfZ2V0UHJvdmlkZXIoYXBwLCAnaGVhcnRiZWF0Jyk7XG5cbiAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGw6IEZpcmViYXNlSW5zdGFsbGF0aW9uc0ltcGwgPSB7XG4gICAgYXBwLFxuICAgIGFwcENvbmZpZyxcbiAgICBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIsXG4gICAgX2RlbGV0ZTogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfTtcbiAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbXBsO1xufTtcblxuY29uc3QgaW50ZXJuYWxGYWN0b3J5OiBJbnN0YW5jZUZhY3Rvcnk8J2luc3RhbGxhdGlvbnMtaW50ZXJuYWwnPiA9IChcbiAgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXJcbikgPT4ge1xuICBjb25zdCBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xuICAvLyBJbnRlcm5hbCBGSVMgaW5zdGFuY2UgcmVsaWVzIG9uIHB1YmxpYyBGSVMgaW5zdGFuY2UuXG4gIGNvbnN0IGluc3RhbGxhdGlvbnMgPSBfZ2V0UHJvdmlkZXIoYXBwLCBJTlNUQUxMQVRJT05TX05BTUUpLmdldEltbWVkaWF0ZSgpO1xuXG4gIGNvbnN0IGluc3RhbGxhdGlvbnNJbnRlcm5hbDogX0ZpcmViYXNlSW5zdGFsbGF0aW9uc0ludGVybmFsID0ge1xuICAgIGdldElkOiAoKSA9PiBnZXRJZChpbnN0YWxsYXRpb25zKSxcbiAgICBnZXRUb2tlbjogKGZvcmNlUmVmcmVzaD86IGJvb2xlYW4pID0+IGdldFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaClcbiAgfTtcbiAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbnRlcm5hbDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckluc3RhbGxhdGlvbnMoKTogdm9pZCB7XG4gIF9yZWdpc3RlckNvbXBvbmVudChcbiAgICBuZXcgQ29tcG9uZW50KElOU1RBTExBVElPTlNfTkFNRSwgcHVibGljRmFjdG9yeSwgQ29tcG9uZW50VHlwZS5QVUJMSUMpXG4gICk7XG4gIF9yZWdpc3RlckNvbXBvbmVudChcbiAgICBuZXcgQ29tcG9uZW50KFxuICAgICAgSU5TVEFMTEFUSU9OU19OQU1FX0lOVEVSTkFMLFxuICAgICAgaW50ZXJuYWxGYWN0b3J5LFxuICAgICAgQ29tcG9uZW50VHlwZS5QUklWQVRFXG4gICAgKVxuICApO1xufVxuIiwgIi8qKlxuICogRmlyZWJhc2UgSW5zdGFsbGF0aW9uc1xuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHJlZ2lzdGVySW5zdGFsbGF0aW9ucyB9IGZyb20gJy4vZnVuY3Rpb25zL2NvbmZpZyc7XG5pbXBvcnQgeyByZWdpc3RlclZlcnNpb24gfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IG5hbWUsIHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvcHVibGljLXR5cGVzJztcblxucmVnaXN0ZXJJbnN0YWxsYXRpb25zKCk7XG5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbik7XG4vLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdfX0JVSUxEX1RBUkdFVF9fJyk7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cbmV4cG9ydCBjb25zdCBTREtfVkVSU0lPTiA9IHZlcnNpb247XG4vKiogVGhlIHByZWZpeCBmb3Igc3RhcnQgVXNlciBUaW1pbmcgbWFya3MgdXNlZCBmb3IgY3JlYXRpbmcgVHJhY2VzLiAqL1xuZXhwb3J0IGNvbnN0IFRSQUNFX1NUQVJUX01BUktfUFJFRklYID0gJ0ZCLVBFUkYtVFJBQ0UtU1RBUlQnO1xuLyoqIFRoZSBwcmVmaXggZm9yIHN0b3AgVXNlciBUaW1pbmcgbWFya3MgdXNlZCBmb3IgY3JlYXRpbmcgVHJhY2VzLiAqL1xuZXhwb3J0IGNvbnN0IFRSQUNFX1NUT1BfTUFSS19QUkVGSVggPSAnRkItUEVSRi1UUkFDRS1TVE9QJztcbi8qKiBUaGUgcHJlZml4IGZvciBVc2VyIFRpbWluZyBtZWFzdXJlIHVzZWQgZm9yIGNyZWF0aW5nIFRyYWNlcy4gKi9cbmV4cG9ydCBjb25zdCBUUkFDRV9NRUFTVVJFX1BSRUZJWCA9ICdGQi1QRVJGLVRSQUNFLU1FQVNVUkUnO1xuLyoqIFRoZSBwcmVmaXggZm9yIG91dCBvZiB0aGUgYm94IHBhZ2UgbG9hZCBUcmFjZSBuYW1lLiAqL1xuZXhwb3J0IGNvbnN0IE9PQl9UUkFDRV9QQUdFX0xPQURfUFJFRklYID0gJ193dF8nO1xuXG5leHBvcnQgY29uc3QgRklSU1RfUEFJTlRfQ09VTlRFUl9OQU1FID0gJ19mcCc7XG5cbmV4cG9ydCBjb25zdCBGSVJTVF9DT05URU5URlVMX1BBSU5UX0NPVU5URVJfTkFNRSA9ICdfZmNwJztcblxuZXhwb3J0IGNvbnN0IEZJUlNUX0lOUFVUX0RFTEFZX0NPVU5URVJfTkFNRSA9ICdfZmlkJztcblxuZXhwb3J0IGNvbnN0IENPTkZJR19MT0NBTF9TVE9SQUdFX0tFWSA9ICdAZmlyZWJhc2UvcGVyZm9ybWFuY2UvY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IENPTkZJR19FWFBJUllfTE9DQUxfU1RPUkFHRV9LRVkgPVxuICAnQGZpcmViYXNlL3BlcmZvcm1hbmNlL2NvbmZpZ2V4cGlyZSc7XG5cbmV4cG9ydCBjb25zdCBTRVJWSUNFID0gJ3BlcmZvcm1hbmNlJztcbmV4cG9ydCBjb25zdCBTRVJWSUNFX05BTUUgPSAnUGVyZm9ybWFuY2UnO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEVycm9yRmFjdG9yeSB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IFNFUlZJQ0UsIFNFUlZJQ0VfTkFNRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEVycm9yQ29kZSB7XG4gIFRSQUNFX1NUQVJURURfQkVGT1JFID0gJ3RyYWNlIHN0YXJ0ZWQnLFxuICBUUkFDRV9TVE9QUEVEX0JFRk9SRSA9ICd0cmFjZSBzdG9wcGVkJyxcbiAgTk9OUE9TSVRJVkVfVFJBQ0VfU1RBUlRfVElNRSA9ICdub25wb3NpdGl2ZSB0cmFjZSBzdGFydFRpbWUnLFxuICBOT05QT1NJVElWRV9UUkFDRV9EVVJBVElPTiA9ICdub25wb3NpdGl2ZSB0cmFjZSBkdXJhdGlvbicsXG4gIE5PX1dJTkRPVyA9ICdubyB3aW5kb3cnLFxuICBOT19BUFBfSUQgPSAnbm8gYXBwIGlkJyxcbiAgTk9fUFJPSkVDVF9JRCA9ICdubyBwcm9qZWN0IGlkJyxcbiAgTk9fQVBJX0tFWSA9ICdubyBhcGkga2V5JyxcbiAgSU5WQUxJRF9DQ19MT0cgPSAnaW52YWxpZCBjYyBsb2cnLFxuICBGQl9OT1RfREVGQVVMVCA9ICdGQiBub3QgZGVmYXVsdCcsXG4gIFJDX05PVF9PSyA9ICdSQyByZXNwb25zZSBub3Qgb2snLFxuICBJTlZBTElEX0FUVFJJQlVURV9OQU1FID0gJ2ludmFsaWQgYXR0cmlidXRlIG5hbWUnLFxuICBJTlZBTElEX0FUVFJJQlVURV9WQUxVRSA9ICdpbnZhbGlkIGF0dHJpYnV0ZSB2YWx1ZScsXG4gIElOVkFMSURfQ1VTVE9NX01FVFJJQ19OQU1FID0gJ2ludmFsaWQgY3VzdG9tIG1ldHJpYyBuYW1lJyxcbiAgSU5WQUxJRF9TVFJJTkdfTUVSR0VSX1BBUkFNRVRFUiA9ICdpbnZhbGlkIFN0cmluZyBtZXJnZXIgaW5wdXQnLFxuICBBTFJFQURZX0lOSVRJQUxJWkVEID0gJ2FscmVhZHkgaW5pdGlhbGl6ZWQnXG59XG5cbmNvbnN0IEVSUk9SX0RFU0NSSVBUSU9OX01BUDogeyByZWFkb25seSBba2V5IGluIEVycm9yQ29kZV06IHN0cmluZyB9ID0ge1xuICBbRXJyb3JDb2RlLlRSQUNFX1NUQVJURURfQkVGT1JFXTogJ1RyYWNlIHskdHJhY2VOYW1lfSB3YXMgc3RhcnRlZCBiZWZvcmUuJyxcbiAgW0Vycm9yQ29kZS5UUkFDRV9TVE9QUEVEX0JFRk9SRV06ICdUcmFjZSB7JHRyYWNlTmFtZX0gaXMgbm90IHJ1bm5pbmcuJyxcbiAgW0Vycm9yQ29kZS5OT05QT1NJVElWRV9UUkFDRV9TVEFSVF9USU1FXTpcbiAgICAnVHJhY2UgeyR0cmFjZU5hbWV9IHN0YXJ0VGltZSBzaG91bGQgYmUgcG9zaXRpdmUuJyxcbiAgW0Vycm9yQ29kZS5OT05QT1NJVElWRV9UUkFDRV9EVVJBVElPTl06XG4gICAgJ1RyYWNlIHskdHJhY2VOYW1lfSBkdXJhdGlvbiBzaG91bGQgYmUgcG9zaXRpdmUuJyxcbiAgW0Vycm9yQ29kZS5OT19XSU5ET1ddOiAnV2luZG93IGlzIG5vdCBhdmFpbGFibGUuJyxcbiAgW0Vycm9yQ29kZS5OT19BUFBfSURdOiAnQXBwIGlkIGlzIG5vdCBhdmFpbGFibGUuJyxcbiAgW0Vycm9yQ29kZS5OT19QUk9KRUNUX0lEXTogJ1Byb2plY3QgaWQgaXMgbm90IGF2YWlsYWJsZS4nLFxuICBbRXJyb3JDb2RlLk5PX0FQSV9LRVldOiAnQXBpIGtleSBpcyBub3QgYXZhaWxhYmxlLicsXG4gIFtFcnJvckNvZGUuSU5WQUxJRF9DQ19MT0ddOiAnQXR0ZW1wdGVkIHRvIHF1ZXVlIGludmFsaWQgY2MgZXZlbnQnLFxuICBbRXJyb3JDb2RlLkZCX05PVF9ERUZBVUxUXTpcbiAgICAnUGVyZm9ybWFuY2UgY2FuIG9ubHkgc3RhcnQgd2hlbiBGaXJlYmFzZSBhcHAgaW5zdGFuY2UgaXMgdGhlIGRlZmF1bHQgb25lLicsXG4gIFtFcnJvckNvZGUuUkNfTk9UX09LXTogJ1JDIHJlc3BvbnNlIGlzIG5vdCBvaycsXG4gIFtFcnJvckNvZGUuSU5WQUxJRF9BVFRSSUJVVEVfTkFNRV06XG4gICAgJ0F0dHJpYnV0ZSBuYW1lIHskYXR0cmlidXRlTmFtZX0gaXMgaW52YWxpZC4nLFxuICBbRXJyb3JDb2RlLklOVkFMSURfQVRUUklCVVRFX1ZBTFVFXTpcbiAgICAnQXR0cmlidXRlIHZhbHVlIHskYXR0cmlidXRlVmFsdWV9IGlzIGludmFsaWQuJyxcbiAgW0Vycm9yQ29kZS5JTlZBTElEX0NVU1RPTV9NRVRSSUNfTkFNRV06XG4gICAgJ0N1c3RvbSBtZXRyaWMgbmFtZSB7JGN1c3RvbU1ldHJpY05hbWV9IGlzIGludmFsaWQnLFxuICBbRXJyb3JDb2RlLklOVkFMSURfU1RSSU5HX01FUkdFUl9QQVJBTUVURVJdOlxuICAgICdJbnB1dCBmb3IgU3RyaW5nIG1lcmdlciBpcyBpbnZhbGlkLCBjb250YWN0IHN1cHBvcnQgdGVhbSB0byByZXNvbHZlLicsXG4gIFtFcnJvckNvZGUuQUxSRUFEWV9JTklUSUFMSVpFRF06XG4gICAgJ2luaXRpYWxpemVQZXJmb3JtYW5jZSgpIGhhcyBhbHJlYWR5IGJlZW4gY2FsbGVkIHdpdGggJyArXG4gICAgJ2RpZmZlcmVudCBvcHRpb25zLiBUbyBhdm9pZCB0aGlzIGVycm9yLCBjYWxsIGluaXRpYWxpemVQZXJmb3JtYW5jZSgpIHdpdGggdGhlICcgK1xuICAgICdzYW1lIG9wdGlvbnMgYXMgd2hlbiBpdCB3YXMgb3JpZ2luYWxseSBjYWxsZWQsIG9yIGNhbGwgZ2V0UGVyZm9ybWFuY2UoKSB0byByZXR1cm4gdGhlJyArXG4gICAgJyBhbHJlYWR5IGluaXRpYWxpemVkIGluc3RhbmNlLidcbn07XG5cbmludGVyZmFjZSBFcnJvclBhcmFtcyB7XG4gIFtFcnJvckNvZGUuVFJBQ0VfU1RBUlRFRF9CRUZPUkVdOiB7IHRyYWNlTmFtZTogc3RyaW5nIH07XG4gIFtFcnJvckNvZGUuVFJBQ0VfU1RPUFBFRF9CRUZPUkVdOiB7IHRyYWNlTmFtZTogc3RyaW5nIH07XG4gIFtFcnJvckNvZGUuTk9OUE9TSVRJVkVfVFJBQ0VfU1RBUlRfVElNRV06IHsgdHJhY2VOYW1lOiBzdHJpbmcgfTtcbiAgW0Vycm9yQ29kZS5OT05QT1NJVElWRV9UUkFDRV9EVVJBVElPTl06IHsgdHJhY2VOYW1lOiBzdHJpbmcgfTtcbiAgW0Vycm9yQ29kZS5JTlZBTElEX0FUVFJJQlVURV9OQU1FXTogeyBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcgfTtcbiAgW0Vycm9yQ29kZS5JTlZBTElEX0FUVFJJQlVURV9WQUxVRV06IHsgYXR0cmlidXRlVmFsdWU6IHN0cmluZyB9O1xuICBbRXJyb3JDb2RlLklOVkFMSURfQ1VTVE9NX01FVFJJQ19OQU1FXTogeyBjdXN0b21NZXRyaWNOYW1lOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5PEVycm9yQ29kZSwgRXJyb3JQYXJhbXM+KFxuICBTRVJWSUNFLFxuICBTRVJWSUNFX05BTUUsXG4gIEVSUk9SX0RFU0NSSVBUSU9OX01BUFxuKTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBMb2dnZXIsIExvZ0xldmVsIH0gZnJvbSAnQGZpcmViYXNlL2xvZ2dlcic7XG5pbXBvcnQgeyBTRVJWSUNFX05BTUUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgY29uc29sZUxvZ2dlciA9IG5ldyBMb2dnZXIoU0VSVklDRV9OQU1FKTtcbmNvbnNvbGVMb2dnZXIubG9nTGV2ZWwgPSBMb2dMZXZlbC5JTkZPO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycyc7XG5pbXBvcnQgeyBpc0luZGV4ZWREQkF2YWlsYWJsZSwgYXJlQ29va2llc0VuYWJsZWQgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBjb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV9sb2dnZXInO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIFBlcmZvcm1hbmNlT2JzZXJ2ZXI6IHR5cGVvZiBQZXJmb3JtYW5jZU9ic2VydmVyO1xuICAgIHBlcmZNZXRyaWNzPzogeyBvbkZpcnN0SW5wdXREZWxheShmbjogKGZpZDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB9O1xuICB9XG59XG5cbmxldCBhcGlJbnN0YW5jZTogQXBpIHwgdW5kZWZpbmVkO1xubGV0IHdpbmRvd0luc3RhbmNlOiBXaW5kb3cgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIEVudHJ5VHlwZSA9XG4gIHwgJ21hcmsnXG4gIHwgJ21lYXN1cmUnXG4gIHwgJ3BhaW50J1xuICB8ICdyZXNvdXJjZSdcbiAgfCAnZnJhbWUnXG4gIHwgJ25hdmlnYXRpb24nO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaG9sZHMgYSByZWZlcmVuY2UgdG8gdmFyaW91cyBicm93c2VyIHJlbGF0ZWQgb2JqZWN0cyBpbmplY3RlZCBieVxuICogc2V0IG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcGkge1xuICBwcml2YXRlIHJlYWRvbmx5IHBlcmZvcm1hbmNlOiBQZXJmb3JtYW5jZTtcbiAgLyoqIFByZWZvcm1hbmNlT2JzZXJ2ZXIgY29uc3RydWN0b3IgZnVuY3Rpb24uICovXG4gIHByaXZhdGUgcmVhZG9ubHkgUGVyZm9ybWFuY2VPYnNlcnZlcjogdHlwZW9mIFBlcmZvcm1hbmNlT2JzZXJ2ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgd2luZG93TG9jYXRpb246IExvY2F0aW9uO1xuICByZWFkb25seSBvbkZpcnN0SW5wdXREZWxheT86IChmbjogKGZpZDogbnVtYmVyKSA9PiB2b2lkKSA9PiB2b2lkO1xuICByZWFkb25seSBsb2NhbFN0b3JhZ2U/OiBTdG9yYWdlO1xuICByZWFkb25seSBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIHJlYWRvbmx5IG5hdmlnYXRvcjogTmF2aWdhdG9yO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHdpbmRvdz86IFdpbmRvdykge1xuICAgIGlmICghd2luZG93KSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9fV0lORE9XKTtcbiAgICB9XG4gICAgdGhpcy5wZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgICB0aGlzLlBlcmZvcm1hbmNlT2JzZXJ2ZXIgPSB3aW5kb3cuUGVyZm9ybWFuY2VPYnNlcnZlcjtcbiAgICB0aGlzLndpbmRvd0xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHRoaXMubmF2aWdhdG9yID0gd2luZG93Lm5hdmlnYXRvcjtcbiAgICB0aGlzLmRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIGlmICh0aGlzLm5hdmlnYXRvciAmJiB0aGlzLm5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XG4gICAgICAvLyBJZiB1c2VyIGJsb2NrcyBjb29raWVzIG9uIHRoZSBicm93c2VyLCBhY2Nlc3NpbmcgbG9jYWxTdG9yYWdlIHdpbGxcbiAgICAgIC8vIHRocm93IGFuIGV4Y2VwdGlvbi5cbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5wZXJmTWV0cmljcyAmJiB3aW5kb3cucGVyZk1ldHJpY3Mub25GaXJzdElucHV0RGVsYXkpIHtcbiAgICAgIHRoaXMub25GaXJzdElucHV0RGVsYXkgPSB3aW5kb3cucGVyZk1ldHJpY3Mub25GaXJzdElucHV0RGVsYXk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VXJsKCk6IHN0cmluZyB7XG4gICAgLy8gRG8gbm90IGNhcHR1cmUgdGhlIHN0cmluZyBxdWVyeSBwYXJ0IG9mIHVybC5cbiAgICByZXR1cm4gdGhpcy53aW5kb3dMb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gIH1cblxuICBtYXJrKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wZXJmb3JtYW5jZSB8fCAhdGhpcy5wZXJmb3JtYW5jZS5tYXJrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGVyZm9ybWFuY2UubWFyayhuYW1lKTtcbiAgfVxuXG4gIG1lYXN1cmUobWVhc3VyZU5hbWU6IHN0cmluZywgbWFyazE6IHN0cmluZywgbWFyazI6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wZXJmb3JtYW5jZSB8fCAhdGhpcy5wZXJmb3JtYW5jZS5tZWFzdXJlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGVyZm9ybWFuY2UubWVhc3VyZShtZWFzdXJlTmFtZSwgbWFyazEsIG1hcmsyKTtcbiAgfVxuXG4gIGdldEVudHJpZXNCeVR5cGUodHlwZTogRW50cnlUeXBlKTogUGVyZm9ybWFuY2VFbnRyeVtdIHtcbiAgICBpZiAoIXRoaXMucGVyZm9ybWFuY2UgfHwgIXRoaXMucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKHR5cGUpO1xuICB9XG5cbiAgZ2V0RW50cmllc0J5TmFtZShuYW1lOiBzdHJpbmcpOiBQZXJmb3JtYW5jZUVudHJ5W10ge1xuICAgIGlmICghdGhpcy5wZXJmb3JtYW5jZSB8fCAhdGhpcy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUobmFtZSk7XG4gIH1cblxuICBnZXRUaW1lT3JpZ2luKCk6IG51bWJlciB7XG4gICAgLy8gUG9seWZpbGwgdGhlIHRpbWUgb3JpZ2luIHdpdGggcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydC5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wZXJmb3JtYW5jZSAmJlxuICAgICAgKHRoaXMucGVyZm9ybWFuY2UudGltZU9yaWdpbiB8fCB0aGlzLnBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVpcmVkQXBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICBpZiAoIWZldGNoIHx8ICFQcm9taXNlIHx8ICFhcmVDb29raWVzRW5hYmxlZCgpKSB7XG4gICAgICBjb25zb2xlTG9nZ2VyLmluZm8oXG4gICAgICAgICdGaXJlYmFzZSBQZXJmb3JtYW5jZSBjYW5ub3Qgc3RhcnQgaWYgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGZldGNoIGFuZCBQcm9taXNlIG9yIGNvb2tpZSBpcyBkaXNhYmxlZC4nXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghaXNJbmRleGVkREJBdmFpbGFibGUoKSkge1xuICAgICAgY29uc29sZUxvZ2dlci5pbmZvKCdJbmRleGVkREIgaXMgbm90IHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzd2VyJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0dXBPYnNlcnZlcihcbiAgICBlbnRyeVR5cGU6IEVudHJ5VHlwZSxcbiAgICBjYWxsYmFjazogKGVudHJ5OiBQZXJmb3JtYW5jZUVudHJ5KSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGlmICghdGhpcy5QZXJmb3JtYW5jZU9ic2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IHRoaXMuUGVyZm9ybWFuY2VPYnNlcnZlcihsaXN0ID0+IHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgbGlzdC5nZXRFbnRyaWVzKCkpIHtcbiAgICAgICAgLy8gYGVudHJ5YCBpcyBhIFBlcmZvcm1hbmNlRW50cnkgaW5zdGFuY2UuXG4gICAgICAgIGNhbGxiYWNrKGVudHJ5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFN0YXJ0IG9ic2VydmluZyB0aGUgZW50cnkgdHlwZXMgeW91IGNhcmUgYWJvdXQuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh7IGVudHJ5VHlwZXM6IFtlbnRyeVR5cGVdIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IEFwaSB7XG4gICAgaWYgKGFwaUluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFwaUluc3RhbmNlID0gbmV3IEFwaSh3aW5kb3dJbnN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiBhcGlJbnN0YW5jZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBBcGkod2luZG93OiBXaW5kb3cpOiB2b2lkIHtcbiAgd2luZG93SW5zdGFuY2UgPSB3aW5kb3c7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgX0ZpcmViYXNlSW5zdGFsbGF0aW9uc0ludGVybmFsIH0gZnJvbSAnQGZpcmViYXNlL2luc3RhbGxhdGlvbnMnO1xuXG5sZXQgaWlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5sZXQgYXV0aFRva2VuOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJaWRQcm9taXNlKFxuICBpbnN0YWxsYXRpb25zU2VydmljZTogX0ZpcmViYXNlSW5zdGFsbGF0aW9uc0ludGVybmFsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBpaWRQcm9taXNlID0gaW5zdGFsbGF0aW9uc1NlcnZpY2UuZ2V0SWQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICBpaWRQcm9taXNlLnRoZW4oKGlpZFZhbDogc3RyaW5nKSA9PiB7XG4gICAgaWlkID0gaWlkVmFsO1xuICB9KTtcbiAgcmV0dXJuIGlpZFByb21pc2U7XG59XG5cbi8vIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIGFmdGVyIHRoZSBpaWQgaXMgcmV0cmlldmVkIGJ5IGdldElpZFByb21pc2UgbWV0aG9kLlxuZXhwb3J0IGZ1bmN0aW9uIGdldElpZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaWlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aFRva2VuUHJvbWlzZShcbiAgaW5zdGFsbGF0aW9uc1NlcnZpY2U6IF9GaXJlYmFzZUluc3RhbGxhdGlvbnNJbnRlcm5hbFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgYXV0aFRva2VuUHJvbWlzZSA9IGluc3RhbGxhdGlvbnNTZXJ2aWNlLmdldFRva2VuKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgYXV0aFRva2VuUHJvbWlzZS50aGVuKChhdXRoVG9rZW5WYWw6IHN0cmluZykgPT4ge1xuICAgIGF1dGhUb2tlbiA9IGF1dGhUb2tlblZhbDtcbiAgfSk7XG4gIHJldHVybiBhdXRoVG9rZW5Qcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aGVudGljYXRpb25Ub2tlbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gYXV0aFRva2VuO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4vZXJyb3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3RyaW5ncyhwYXJ0MTogc3RyaW5nLCBwYXJ0Mjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc2l6ZURpZmYgPSBwYXJ0MS5sZW5ndGggLSBwYXJ0Mi5sZW5ndGg7XG4gIGlmIChzaXplRGlmZiA8IDAgfHwgc2l6ZURpZmYgPiAxKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLklOVkFMSURfU1RSSU5HX01FUkdFUl9QQVJBTUVURVIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0QXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0MS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdEFycmF5LnB1c2gocGFydDEuY2hhckF0KGkpKTtcbiAgICBpZiAocGFydDIubGVuZ3RoID4gaSkge1xuICAgICAgcmVzdWx0QXJyYXkucHVzaChwYXJ0Mi5jaGFyQXQoaSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRBcnJheS5qb2luKCcnKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBtZXJnZVN0cmluZ3MgfSBmcm9tICcuLi91dGlscy9zdHJpbmdfbWVyZ2VyJztcblxubGV0IHNldHRpbmdzU2VydmljZUluc3RhbmNlOiBTZXR0aW5nc1NlcnZpY2UgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICAvLyBUaGUgdmFyaWFibGUgd2hpY2ggY29udHJvbHMgbG9nZ2luZyBvZiBhdXRvbWF0aWMgdHJhY2VzIGFuZCBIVFRQL1MgbmV0d29yayBtb25pdG9yaW5nLlxuICBpbnN0cnVtZW50YXRpb25FbmFibGVkID0gdHJ1ZTtcblxuICAvLyBUaGUgdmFyaWFibGUgd2hpY2ggY29udHJvbHMgbG9nZ2luZyBvZiBjdXN0b20gdHJhY2VzLlxuICBkYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIC8vIENvbmZpZ3VyYXRpb24gZmxhZ3Mgc2V0IHRocm91Z2ggcmVtb3RlIGNvbmZpZy5cbiAgbG9nZ2luZ0VuYWJsZWQgPSBmYWxzZTtcbiAgLy8gU2FtcGxpbmcgcmF0ZSBiZXR3ZWVuIDAgYW5kIDEuXG4gIHRyYWNlc1NhbXBsaW5nUmF0ZSA9IDE7XG4gIG5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZSA9IDE7XG5cbiAgLy8gQWRkcmVzcyBvZiBsb2dnaW5nIHNlcnZpY2UuXG4gIGxvZ0VuZFBvaW50VXJsID1cbiAgICAnaHR0cHM6Ly9maXJlYmFzZWxvZ2dpbmcuZ29vZ2xlYXBpcy5jb20vdjBjYy9sb2c/Zm9ybWF0PWpzb25fcHJvdG8nO1xuICAvLyBQZXJmb3JtYW5jZSBldmVudCB0cmFuc3BvcnQgZW5kcG9pbnQgVVJMIHdoaWNoIHNob3VsZCBiZSBjb21wYXRpYmxlIHdpdGggcHJvdG8zLlxuICAvLyBOZXcgQWRkcmVzcyBmb3IgdHJhbnNwb3J0IHNlcnZpY2UsIG5vdCBjb25maWd1cmFibGUgdmlhIFJlbW90ZSBDb25maWcuXG4gIGZsVHJhbnNwb3J0RW5kcG9pbnRVcmwgPSBtZXJnZVN0cmluZ3MoXG4gICAgJ2h0cy9mcmJzbGdpZ3Aub2dlcHNjbXYvaWVvL2VheWxnJyxcbiAgICAndHA6L2llYWVvZ24tYWdvbGFpLm8vMWZybGdsZ2MvbydcbiAgKTtcblxuICB0cmFuc3BvcnRLZXkgPSBtZXJnZVN0cmluZ3MoJ0F6U0M4cjZSZWlHcUZNeWZ2Z293JywgJ0lheXgwdS1YVDN2a3NWTS1wSVYnKTtcblxuICAvLyBTb3VyY2UgdHlwZSBmb3IgcGVyZm9ybWFuY2UgZXZlbnQgbG9ncy5cbiAgbG9nU291cmNlID0gNDYyO1xuXG4gIC8vIEZsYWdzIHdoaWNoIGNvbnRyb2wgcGVyIHNlc3Npb24gbG9nZ2luZyBvZiB0cmFjZXMgYW5kIG5ldHdvcmsgcmVxdWVzdHMuXG4gIGxvZ1RyYWNlQWZ0ZXJTYW1wbGluZyA9IGZhbHNlO1xuICBsb2dOZXR3b3JrQWZ0ZXJTYW1wbGluZyA9IGZhbHNlO1xuXG4gIC8vIFRUTCBvZiBjb25maWcgcmV0cmlldmVkIGZyb20gcmVtb3RlIGNvbmZpZyBpbiBob3Vycy5cbiAgY29uZmlnVGltZVRvTGl2ZSA9IDEyO1xuXG4gIGdldEZsVHJhbnNwb3J0RnVsbFVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZsVHJhbnNwb3J0RW5kcG9pbnRVcmwuY29uY2F0KCc/a2V5PScsIHRoaXMudHJhbnNwb3J0S2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTZXR0aW5nc1NlcnZpY2Uge1xuICAgIGlmIChzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZSA9IG5ldyBTZXR0aW5nc1NlcnZpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNldHRpbmdzU2VydmljZUluc3RhbmNlO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpX3NlcnZpY2UnO1xuXG4vLyBUaGUgdmFsdWVzIGFuZCBvcmRlcnMgb2YgdGhlIGZvbGxvd2luZyBlbnVtcyBzaG91bGQgbm90IGJlIGNoYW5nZWQuXG5jb25zdCBlbnVtIFNlcnZpY2VXb3JrZXJTdGF0dXMge1xuICBVTktOT1dOID0gMCxcbiAgVU5TVVBQT1JURUQgPSAxLFxuICBDT05UUk9MTEVEID0gMixcbiAgVU5DT05UUk9MTEVEID0gM1xufVxuXG5leHBvcnQgZW51bSBWaXNpYmlsaXR5U3RhdGUge1xuICBVTktOT1dOID0gMCxcbiAgVklTSUJMRSA9IDEsXG4gIEhJRERFTiA9IDJcbn1cblxuY29uc3QgZW51bSBFZmZlY3RpdmVDb25uZWN0aW9uVHlwZSB7XG4gIFVOS05PV04gPSAwLFxuICBDT05ORUNUSU9OX1NMT1dfMkcgPSAxLFxuICBDT05ORUNUSU9OXzJHID0gMixcbiAgQ09OTkVDVElPTl8zRyA9IDMsXG4gIENPTk5FQ1RJT05fNEcgPSA0XG59XG5cbi8qKlxuICogTmV0d29ya0luZm9ybWF0aW9uXG4gKlxuICogcmVmOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmV0d29ya0luZm9ybWF0aW9uXG4gKi9cbmludGVyZmFjZSBOZXR3b3JrSW5mb3JtYXRpb25XaXRoRWZmZWN0aXZlVHlwZSBleHRlbmRzIE5ldHdvcmtJbmZvcm1hdGlvbiB7XG4gIC8vIGBlZmZlY3RpdmVUeXBlYCBpcyBhbiBleHBlcmltZW50YWwgcHJvcGVydHkgYW5kIG5vdCBpbmNsdWRlZCBpblxuICAvLyBUeXBlU2NyaXB0J3MgdHlwaW5ncyBmb3IgdGhlIG5hdGl2ZSBOZXR3b3JrSW5mb3JtYXRpb24gaW50ZXJmYWNlXG4gIHJlYWRvbmx5IGVmZmVjdGl2ZVR5cGU/OiAnc2xvdy0yZycgfCAnMmcnIHwgJzNnJyB8ICc0Zyc7XG59XG5cbmludGVyZmFjZSBOYXZpZ2F0b3JXaXRoQ29ubmVjdGlvbiBleHRlbmRzIE5hdmlnYXRvciB7XG4gIHJlYWRvbmx5IGNvbm5lY3Rpb246IE5ldHdvcmtJbmZvcm1hdGlvbldpdGhFZmZlY3RpdmVUeXBlO1xufVxuXG5jb25zdCBSRVNFUlZFRF9BVFRSSUJVVEVfUFJFRklYRVMgPSBbJ2ZpcmViYXNlXycsICdnb29nbGVfJywgJ2dhXyddO1xuY29uc3QgQVRUUklCVVRFX0ZPUk1BVF9SRUdFWCA9IG5ldyBSZWdFeHAoJ15bYS16QS1aXVxcXFx3KiQnKTtcbmNvbnN0IE1BWF9BVFRSSUJVVEVfTkFNRV9MRU5HVEggPSA0MDtcbmNvbnN0IE1BWF9BVFRSSUJVVEVfVkFMVUVfTEVOR1RIID0gMTAwO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmljZVdvcmtlclN0YXR1cygpOiBTZXJ2aWNlV29ya2VyU3RhdHVzIHtcbiAgY29uc3QgbmF2aWdhdG9yID0gQXBpLmdldEluc3RhbmNlKCkubmF2aWdhdG9yO1xuICBpZiAobmF2aWdhdG9yPy5zZXJ2aWNlV29ya2VyKSB7XG4gICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgIHJldHVybiBTZXJ2aWNlV29ya2VyU3RhdHVzLkNPTlRST0xMRUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBTZXJ2aWNlV29ya2VyU3RhdHVzLlVOQ09OVFJPTExFRDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFNlcnZpY2VXb3JrZXJTdGF0dXMuVU5TVVBQT1JURUQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpc2liaWxpdHlTdGF0ZSgpOiBWaXNpYmlsaXR5U3RhdGUge1xuICBjb25zdCBkb2N1bWVudCA9IEFwaS5nZXRJbnN0YW5jZSgpLmRvY3VtZW50O1xuICBjb25zdCB2aXNpYmlsaXR5U3RhdGUgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGU7XG4gIHN3aXRjaCAodmlzaWJpbGl0eVN0YXRlKSB7XG4gICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICByZXR1cm4gVmlzaWJpbGl0eVN0YXRlLlZJU0lCTEU7XG4gICAgY2FzZSAnaGlkZGVuJzpcbiAgICAgIHJldHVybiBWaXNpYmlsaXR5U3RhdGUuSElEREVOO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gVmlzaWJpbGl0eVN0YXRlLlVOS05PV047XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlKCk6IEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlIHtcbiAgY29uc3QgbmF2aWdhdG9yID0gQXBpLmdldEluc3RhbmNlKCkubmF2aWdhdG9yO1xuICBjb25zdCBuYXZpZ2F0b3JDb25uZWN0aW9uID0gKG5hdmlnYXRvciBhcyBOYXZpZ2F0b3JXaXRoQ29ubmVjdGlvbikuY29ubmVjdGlvbjtcbiAgY29uc3QgZWZmZWN0aXZlVHlwZSA9XG4gICAgbmF2aWdhdG9yQ29ubmVjdGlvbiAmJiBuYXZpZ2F0b3JDb25uZWN0aW9uLmVmZmVjdGl2ZVR5cGU7XG4gIHN3aXRjaCAoZWZmZWN0aXZlVHlwZSkge1xuICAgIGNhc2UgJ3Nsb3ctMmcnOlxuICAgICAgcmV0dXJuIEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlLkNPTk5FQ1RJT05fU0xPV18yRztcbiAgICBjYXNlICcyZyc6XG4gICAgICByZXR1cm4gRWZmZWN0aXZlQ29ubmVjdGlvblR5cGUuQ09OTkVDVElPTl8yRztcbiAgICBjYXNlICczZyc6XG4gICAgICByZXR1cm4gRWZmZWN0aXZlQ29ubmVjdGlvblR5cGUuQ09OTkVDVElPTl8zRztcbiAgICBjYXNlICc0Zyc6XG4gICAgICByZXR1cm4gRWZmZWN0aXZlQ29ubmVjdGlvblR5cGUuQ09OTkVDVElPTl80RztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlLlVOS05PV047XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRDdXN0b21BdHRyaWJ1dGVOYW1lKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAobmFtZS5sZW5ndGggPT09IDAgfHwgbmFtZS5sZW5ndGggPiBNQVhfQVRUUklCVVRFX05BTUVfTEVOR1RIKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1hdGNoZXNSZXNlcnZlZFByZWZpeCA9IFJFU0VSVkVEX0FUVFJJQlVURV9QUkVGSVhFUy5zb21lKHByZWZpeCA9PlxuICAgIG5hbWUuc3RhcnRzV2l0aChwcmVmaXgpXG4gICk7XG4gIHJldHVybiAhbWF0Y2hlc1Jlc2VydmVkUHJlZml4ICYmICEhbmFtZS5tYXRjaChBVFRSSUJVVEVfRk9STUFUX1JFR0VYKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRDdXN0b21BdHRyaWJ1dGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZS5sZW5ndGggIT09IDAgJiYgdmFsdWUubGVuZ3RoIDw9IE1BWF9BVFRSSUJVVEVfVkFMVUVfTEVOR1RIO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IEZpcmViYXNlQXBwIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBJZChmaXJlYmFzZUFwcDogRmlyZWJhc2VBcHApOiBzdHJpbmcge1xuICBjb25zdCBhcHBJZCA9IGZpcmViYXNlQXBwLm9wdGlvbnM/LmFwcElkO1xuICBpZiAoIWFwcElkKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PX0FQUF9JRCk7XG4gIH1cbiAgcmV0dXJuIGFwcElkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdElkKGZpcmViYXNlQXBwOiBGaXJlYmFzZUFwcCk6IHN0cmluZyB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGZpcmViYXNlQXBwLm9wdGlvbnM/LnByb2plY3RJZDtcbiAgaWYgKCFwcm9qZWN0SWQpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuTk9fUFJPSkVDVF9JRCk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3RJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwaUtleShmaXJlYmFzZUFwcDogRmlyZWJhc2VBcHApOiBzdHJpbmcge1xuICBjb25zdCBhcGlLZXkgPSBmaXJlYmFzZUFwcC5vcHRpb25zPy5hcGlLZXk7XG4gIGlmICghYXBpS2V5KSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PX0FQSV9LRVkpO1xuICB9XG4gIHJldHVybiBhcGlLZXk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgQ09ORklHX0VYUElSWV9MT0NBTF9TVE9SQUdFX0tFWSxcbiAgQ09ORklHX0xPQ0FMX1NUT1JBR0VfS0VZLFxuICBTREtfVkVSU0lPTlxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29uc29sZUxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfbG9nZ2VyJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycyc7XG5cbmltcG9ydCB7IEFwaSB9IGZyb20gJy4vYXBpX3NlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0QXV0aFRva2VuUHJvbWlzZSB9IGZyb20gJy4vaWlkX3NlcnZpY2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXR0aW5nc19zZXJ2aWNlJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3BlcmYnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkLCBnZXRBcGlLZXksIGdldEFwcElkIH0gZnJvbSAnLi4vdXRpbHMvYXBwX3V0aWxzJztcblxuY29uc3QgUkVNT1RFX0NPTkZJR19TREtfVkVSU0lPTiA9ICcwLjAuMSc7XG5cbmludGVyZmFjZSBTZWNvbmRhcnlDb25maWcge1xuICBsb2dnaW5nRW5hYmxlZD86IGJvb2xlYW47XG4gIGxvZ1NvdXJjZT86IG51bWJlcjtcbiAgbG9nRW5kUG9pbnRVcmw/OiBzdHJpbmc7XG4gIHRyYW5zcG9ydEtleT86IHN0cmluZztcbiAgdHJhY2VzU2FtcGxpbmdSYXRlPzogbnVtYmVyO1xuICBuZXR3b3JrUmVxdWVzdHNTYW1wbGluZ1JhdGU/OiBudW1iZXI7XG59XG5cbi8vIFRoZXNlIHZhbHVlcyB3aWxsIGJlIHVzZWQgaWYgdGhlIHJlbW90ZSBjb25maWcgb2JqZWN0IGlzIHN1Y2Nlc3NmdWxseVxuLy8gcmV0cmlldmVkLCBidXQgdGhlIHRlbXBsYXRlIGRvZXMgbm90IGhhdmUgdGhlc2UgZmllbGRzLlxuY29uc3QgREVGQVVMVF9DT05GSUdTOiBTZWNvbmRhcnlDb25maWcgPSB7XG4gIGxvZ2dpbmdFbmFibGVkOiB0cnVlXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmludGVyZmFjZSBSZW1vdGVDb25maWdUZW1wbGF0ZSB7XG4gIGZwcl9lbmFibGVkPzogc3RyaW5nO1xuICBmcHJfbG9nX3NvdXJjZT86IHN0cmluZztcbiAgZnByX2xvZ19lbmRwb2ludF91cmw/OiBzdHJpbmc7XG4gIGZwcl9sb2dfdHJhbnNwb3J0X2tleT86IHN0cmluZztcbiAgZnByX2xvZ190cmFuc3BvcnRfd2ViX3BlcmNlbnQ/OiBzdHJpbmc7XG4gIGZwcl92Y19uZXR3b3JrX3JlcXVlc3Rfc2FtcGxpbmdfcmF0ZT86IHN0cmluZztcbiAgZnByX3ZjX3RyYWNlX3NhbXBsaW5nX3JhdGU/OiBzdHJpbmc7XG4gIGZwcl92Y19zZXNzaW9uX3NhbXBsaW5nX3JhdGU/OiBzdHJpbmc7XG59XG4vKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xuXG5pbnRlcmZhY2UgUmVtb3RlQ29uZmlnUmVzcG9uc2Uge1xuICBlbnRyaWVzPzogUmVtb3RlQ29uZmlnVGVtcGxhdGU7XG4gIHN0YXRlPzogc3RyaW5nO1xufVxuXG5jb25zdCBGSVNfQVVUSF9QUkVGSVggPSAnRklSRUJBU0VfSU5TVEFMTEFUSU9OU19BVVRIJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZyhcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gIGlpZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgY29uZmlnID0gZ2V0U3RvcmVkQ29uZmlnKCk7XG4gIGlmIChjb25maWcpIHtcbiAgICBwcm9jZXNzQ29uZmlnKGNvbmZpZyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIGdldFJlbW90ZUNvbmZpZyhwZXJmb3JtYW5jZUNvbnRyb2xsZXIsIGlpZClcbiAgICAudGhlbihwcm9jZXNzQ29uZmlnKVxuICAgIC50aGVuKFxuICAgICAgY29uZmlnID0+IHN0b3JlQ29uZmlnKGNvbmZpZyksXG4gICAgICAvKiogRG8gbm90aGluZyBmb3IgZXJyb3IsIHVzZSBkZWZhdWx0cyBzZXQgaW4gc2V0dGluZ3Mgc2VydmljZS4gKi9cbiAgICAgICgpID0+IHt9XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RvcmVkQ29uZmlnKCk6IFJlbW90ZUNvbmZpZ1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlID0gQXBpLmdldEluc3RhbmNlKCkubG9jYWxTdG9yYWdlO1xuICBpZiAoIWxvY2FsU3RvcmFnZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBleHBpcnlTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDT05GSUdfRVhQSVJZX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKCFleHBpcnlTdHJpbmcgfHwgIWNvbmZpZ1ZhbGlkKGV4cGlyeVN0cmluZykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjb25maWdTdHJpbmdpZmllZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENPTkZJR19MT0NBTF9TVE9SQUdFX0tFWSk7XG4gIGlmICghY29uZmlnU3RyaW5naWZpZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWdSZXNwb25zZTogUmVtb3RlQ29uZmlnUmVzcG9uc2UgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cmluZ2lmaWVkKTtcbiAgICByZXR1cm4gY29uZmlnUmVzcG9uc2U7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yZUNvbmZpZyhjb25maWc6IFJlbW90ZUNvbmZpZ1Jlc3BvbnNlIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZSA9IEFwaS5nZXRJbnN0YW5jZSgpLmxvY2FsU3RvcmFnZTtcbiAgaWYgKCFjb25maWcgfHwgIWxvY2FsU3RvcmFnZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENPTkZJR19MT0NBTF9TVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIENPTkZJR19FWFBJUllfTE9DQUxfU1RPUkFHRV9LRVksXG4gICAgU3RyaW5nKFxuICAgICAgRGF0ZS5ub3coKSArXG4gICAgICAgIFNldHRpbmdzU2VydmljZS5nZXRJbnN0YW5jZSgpLmNvbmZpZ1RpbWVUb0xpdmUgKiA2MCAqIDYwICogMTAwMFxuICAgIClcbiAgKTtcbn1cblxuY29uc3QgQ09VTERfTk9UX0dFVF9DT05GSUdfTVNHID1cbiAgJ0NvdWxkIG5vdCBmZXRjaCBjb25maWcsIHdpbGwgdXNlIGRlZmF1bHQgY29uZmlncyc7XG5cbmZ1bmN0aW9uIGdldFJlbW90ZUNvbmZpZyhcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gIGlpZDogc3RyaW5nXG4pOiBQcm9taXNlPFJlbW90ZUNvbmZpZ1Jlc3BvbnNlIHwgdW5kZWZpbmVkPiB7XG4gIC8vIFBlcmYgbmVlZHMgYXV0aCB0b2tlbiBvbmx5IHRvIHJldHJpZXZlIHJlbW90ZSBjb25maWcuXG4gIHJldHVybiBnZXRBdXRoVG9rZW5Qcm9taXNlKHBlcmZvcm1hbmNlQ29udHJvbGxlci5pbnN0YWxsYXRpb25zKVxuICAgIC50aGVuKGF1dGhUb2tlbiA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBnZXRQcm9qZWN0SWQocGVyZm9ybWFuY2VDb250cm9sbGVyLmFwcCk7XG4gICAgICBjb25zdCBhcGlLZXkgPSBnZXRBcGlLZXkocGVyZm9ybWFuY2VDb250cm9sbGVyLmFwcCk7XG4gICAgICBjb25zdCBjb25maWdFbmRQb2ludCA9IGBodHRwczovL2ZpcmViYXNlcmVtb3RlY29uZmlnLmdvb2dsZWFwaXMuY29tL3YxL3Byb2plY3RzLyR7cHJvamVjdElkfS9uYW1lc3BhY2VzL2ZpcmVwZXJmOmZldGNoP2tleT0ke2FwaUtleX1gO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGNvbmZpZ0VuZFBvaW50LCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGAke0ZJU19BVVRIX1BSRUZJWH0gJHthdXRoVG9rZW59YCB9LFxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGFwcF9pbnN0YW5jZV9pZDogaWlkLFxuICAgICAgICAgIGFwcF9pbnN0YW5jZV9pZF90b2tlbjogYXV0aFRva2VuLFxuICAgICAgICAgIGFwcF9pZDogZ2V0QXBwSWQocGVyZm9ybWFuY2VDb250cm9sbGVyLmFwcCksXG4gICAgICAgICAgYXBwX3ZlcnNpb246IFNES19WRVJTSU9OLFxuICAgICAgICAgIHNka192ZXJzaW9uOiBSRU1PVEVfQ09ORklHX1NES19WRVJTSU9OXG4gICAgICAgIH0pXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmZXRjaChyZXF1ZXN0KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBSZW1vdGVDb25maWdSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbiBjYXNlIHJlc3BvbnNlIGlzIG5vdCBvay4gVGhpcyB3aWxsIGJlIGNhdWdodCBieSBjYXRjaC5cbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLlJDX05PVF9PSyk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlTG9nZ2VyLmluZm8oQ09VTERfTk9UX0dFVF9DT05GSUdfTVNHKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5cbi8qKlxuICogUHJvY2Vzc2VzIGNvbmZpZyBjb21pbmcgZWl0aGVyIGZyb20gY2FsbGluZyBSQyBvciBmcm9tIGxvY2FsIHN0b3JhZ2UuXG4gKiBUaGlzIG1ldGhvZCBvbmx5IHJ1bnMgaWYgY2FsbCBpcyBzdWNjZXNzZnVsIG9yIGNvbmZpZyBpbiBzdG9yYWdlXG4gKiBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc0NvbmZpZyhcbiAgY29uZmlnPzogUmVtb3RlQ29uZmlnUmVzcG9uc2Vcbik6IFJlbW90ZUNvbmZpZ1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFjb25maWcpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGNvbnN0IHNldHRpbmdzU2VydmljZUluc3RhbmNlID0gU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIGNvbnN0IGVudHJpZXMgPSBjb25maWcuZW50cmllcyB8fCB7fTtcbiAgaWYgKGVudHJpZXMuZnByX2VuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIFRPRE86IENoYW5nZSB0aGUgYXNzaWdubWVudCBvZiBsb2dnaW5nRW5hYmxlZCBvbmNlIHRoZSByZWNlaXZlZCB0eXBlIGlzXG4gICAgLy8ga25vd24uXG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nZ2luZ0VuYWJsZWQgPVxuICAgICAgU3RyaW5nKGVudHJpZXMuZnByX2VuYWJsZWQpID09PSAndHJ1ZSc7XG4gIH0gZWxzZSBpZiAoREVGQVVMVF9DT05GSUdTLmxvZ2dpbmdFbmFibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBDb25maWcgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSwgYnV0IHRoZXJlIGlzIG5vIGZwcl9lbmFibGVkIGluIHRlbXBsYXRlLlxuICAgIC8vIFVzZSBzZWNvbmRhcnkgY29uZmlncyB2YWx1ZS5cbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dnaW5nRW5hYmxlZCA9IERFRkFVTFRfQ09ORklHUy5sb2dnaW5nRW5hYmxlZDtcbiAgfVxuICBpZiAoZW50cmllcy5mcHJfbG9nX3NvdXJjZSkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ1NvdXJjZSA9IE51bWJlcihlbnRyaWVzLmZwcl9sb2dfc291cmNlKTtcbiAgfSBlbHNlIGlmIChERUZBVUxUX0NPTkZJR1MubG9nU291cmNlKSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nU291cmNlID0gREVGQVVMVF9DT05GSUdTLmxvZ1NvdXJjZTtcbiAgfVxuXG4gIGlmIChlbnRyaWVzLmZwcl9sb2dfZW5kcG9pbnRfdXJsKSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubG9nRW5kUG9pbnRVcmwgPSBlbnRyaWVzLmZwcl9sb2dfZW5kcG9pbnRfdXJsO1xuICB9IGVsc2UgaWYgKERFRkFVTFRfQ09ORklHUy5sb2dFbmRQb2ludFVybCkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLmxvZ0VuZFBvaW50VXJsID0gREVGQVVMVF9DT05GSUdTLmxvZ0VuZFBvaW50VXJsO1xuICB9XG5cbiAgLy8gS2V5IGZyb20gUmVtb3RlIENvbmZpZyBoYXMgdG8gYmUgbm9uLWVtcHR5IHN0cmluZywgb3RoZXJ3c2llIHVzZSBsb2NhbCB2YWx1ZS5cbiAgaWYgKGVudHJpZXMuZnByX2xvZ190cmFuc3BvcnRfa2V5KSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UudHJhbnNwb3J0S2V5ID0gZW50cmllcy5mcHJfbG9nX3RyYW5zcG9ydF9rZXk7XG4gIH0gZWxzZSBpZiAoREVGQVVMVF9DT05GSUdTLnRyYW5zcG9ydEtleSkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLnRyYW5zcG9ydEtleSA9IERFRkFVTFRfQ09ORklHUy50cmFuc3BvcnRLZXk7XG4gIH1cblxuICBpZiAoZW50cmllcy5mcHJfdmNfbmV0d29ya19yZXF1ZXN0X3NhbXBsaW5nX3JhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLm5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZSA9IE51bWJlcihcbiAgICAgIGVudHJpZXMuZnByX3ZjX25ldHdvcmtfcmVxdWVzdF9zYW1wbGluZ19yYXRlXG4gICAgKTtcbiAgfSBlbHNlIGlmIChERUZBVUxUX0NPTkZJR1MubmV0d29ya1JlcXVlc3RzU2FtcGxpbmdSYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5uZXR3b3JrUmVxdWVzdHNTYW1wbGluZ1JhdGUgPVxuICAgICAgREVGQVVMVF9DT05GSUdTLm5ldHdvcmtSZXF1ZXN0c1NhbXBsaW5nUmF0ZTtcbiAgfVxuICBpZiAoZW50cmllcy5mcHJfdmNfdHJhY2Vfc2FtcGxpbmdfcmF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UudHJhY2VzU2FtcGxpbmdSYXRlID0gTnVtYmVyKFxuICAgICAgZW50cmllcy5mcHJfdmNfdHJhY2Vfc2FtcGxpbmdfcmF0ZVxuICAgICk7XG4gIH0gZWxzZSBpZiAoREVGQVVMVF9DT05GSUdTLnRyYWNlc1NhbXBsaW5nUmF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UudHJhY2VzU2FtcGxpbmdSYXRlID1cbiAgICAgIERFRkFVTFRfQ09ORklHUy50cmFjZXNTYW1wbGluZ1JhdGU7XG4gIH1cbiAgLy8gU2V0IHRoZSBwZXIgc2Vzc2lvbiB0cmFjZSBhbmQgbmV0d29yayBsb2dnaW5nIGZsYWdzLlxuICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dUcmFjZUFmdGVyU2FtcGxpbmcgPSBzaG91bGRMb2dBZnRlclNhbXBsaW5nKFxuICAgIHNldHRpbmdzU2VydmljZUluc3RhbmNlLnRyYWNlc1NhbXBsaW5nUmF0ZVxuICApO1xuICBzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZS5sb2dOZXR3b3JrQWZ0ZXJTYW1wbGluZyA9IHNob3VsZExvZ0FmdGVyU2FtcGxpbmcoXG4gICAgc2V0dGluZ3NTZXJ2aWNlSW5zdGFuY2UubmV0d29ya1JlcXVlc3RzU2FtcGxpbmdSYXRlXG4gICk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ1ZhbGlkKGV4cGlyeTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBOdW1iZXIoZXhwaXJ5KSA+IERhdGUubm93KCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZExvZ0FmdGVyU2FtcGxpbmcoc2FtcGxpbmdSYXRlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPD0gc2FtcGxpbmdSYXRlO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGdldElpZFByb21pc2UgfSBmcm9tICcuL2lpZF9zZXJ2aWNlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vcmVtb3RlX2NvbmZpZ19zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4vYXBpX3NlcnZpY2UnO1xuaW1wb3J0IHsgUGVyZm9ybWFuY2VDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvcGVyZic7XG5cbmNvbnN0IGVudW0gSW5pdGlhbGl6YXRpb25TdGF0dXMge1xuICBub3RJbml0aWFsaXplZCA9IDEsXG4gIGluaXRpYWxpemF0aW9uUGVuZGluZyxcbiAgaW5pdGlhbGl6ZWRcbn1cblxubGV0IGluaXRpYWxpemF0aW9uU3RhdHVzID0gSW5pdGlhbGl6YXRpb25TdGF0dXMubm90SW5pdGlhbGl6ZWQ7XG5cbmxldCBpbml0aWFsaXphdGlvblByb21pc2U6IFByb21pc2U8dm9pZD4gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsaXphdGlvblByb21pc2UoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaW5pdGlhbGl6YXRpb25TdGF0dXMgPSBJbml0aWFsaXphdGlvblN0YXR1cy5pbml0aWFsaXphdGlvblBlbmRpbmc7XG5cbiAgaW5pdGlhbGl6YXRpb25Qcm9taXNlID1cbiAgICBpbml0aWFsaXphdGlvblByb21pc2UgfHwgaW5pdGlhbGl6ZVBlcmYocGVyZm9ybWFuY2VDb250cm9sbGVyKTtcblxuICByZXR1cm4gaW5pdGlhbGl6YXRpb25Qcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQZXJmSW5pdGlhbGl6ZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBpbml0aWFsaXphdGlvblN0YXR1cyA9PT0gSW5pdGlhbGl6YXRpb25TdGF0dXMuaW5pdGlhbGl6ZWQ7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQZXJmKFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlclxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBnZXREb2N1bWVudFJlYWR5Q29tcGxldGUoKVxuICAgIC50aGVuKCgpID0+IGdldElpZFByb21pc2UocGVyZm9ybWFuY2VDb250cm9sbGVyLmluc3RhbGxhdGlvbnMpKVxuICAgIC50aGVuKGlpZCA9PiBnZXRDb25maWcocGVyZm9ybWFuY2VDb250cm9sbGVyLCBpaWQpKVxuICAgIC50aGVuKFxuICAgICAgKCkgPT4gY2hhbmdlSW5pdGlhbGl6YXRpb25TdGF0dXMoKSxcbiAgICAgICgpID0+IGNoYW5nZUluaXRpYWxpemF0aW9uU3RhdHVzKClcbiAgICApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHdoZW5ldmVyIHRoZSBkb2N1bWVudCByZWFkeXN0YXRlIGlzIGNvbXBsZXRlIG9yXG4gKiBpbW1lZGlhdGVseSBpZiBpdCBpcyBjYWxsZWQgYWZ0ZXIgcGFnZSBsb2FkIGNvbXBsZXRlLlxuICovXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlYWR5Q29tcGxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRvY3VtZW50ID0gQXBpLmdldEluc3RhbmNlKCkuZG9jdW1lbnQ7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgY29uc3QgaGFuZGxlciA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgaGFuZGxlcik7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlSW5pdGlhbGl6YXRpb25TdGF0dXMoKTogdm9pZCB7XG4gIGluaXRpYWxpemF0aW9uU3RhdHVzID0gSW5pdGlhbGl6YXRpb25TdGF0dXMuaW5pdGlhbGl6ZWQ7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXR0aW5nc19zZXJ2aWNlJztcbmltcG9ydCB7IEVSUk9SX0ZBQ1RPUlksIEVycm9yQ29kZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycyc7XG5pbXBvcnQgeyBjb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV9sb2dnZXInO1xuXG5jb25zdCBERUZBVUxUX1NFTkRfSU5URVJWQUxfTVMgPSAxMCAqIDEwMDA7XG5jb25zdCBJTklUSUFMX1NFTkRfVElNRV9ERUxBWV9NUyA9IDUuNSAqIDEwMDA7XG4vLyBJZiBlbmQgcG9pbnQgZG9lcyBub3Qgd29yaywgdGhlIGNhbGwgd2lsbCBiZSB0cmllZCBmb3IgdGhlc2UgbWFueSB0aW1lcy5cbmNvbnN0IERFRkFVTFRfUkVNQUlOSU5HX1RSSUVTID0gMztcbmNvbnN0IE1BWF9FVkVOVF9DT1VOVF9QRVJfUkVRVUVTVCA9IDEwMDA7XG5sZXQgcmVtYWluaW5nVHJpZXMgPSBERUZBVUxUX1JFTUFJTklOR19UUklFUztcblxuaW50ZXJmYWNlIExvZ1Jlc3BvbnNlRGV0YWlscyB7XG4gIHJlc3BvbnNlQWN0aW9uPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQmF0Y2hFdmVudCB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZXZlbnRUaW1lOiBudW1iZXI7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuLy8gQ0MvRmwgYWNjZXB0ZWQgbG9nIGZvcm1hdC5cbmludGVyZmFjZSBUcmFuc3BvcnRCYXRjaExvZ0Zvcm1hdCB7XG4gIHJlcXVlc3RfdGltZV9tczogc3RyaW5nO1xuICBjbGllbnRfaW5mbzogQ2xpZW50SW5mbztcbiAgbG9nX3NvdXJjZTogbnVtYmVyO1xuICBsb2dfZXZlbnQ6IExvZ1tdO1xufVxuXG5pbnRlcmZhY2UgQ2xpZW50SW5mbyB7XG4gIGNsaWVudF90eXBlOiBudW1iZXI7XG4gIGpzX2NsaWVudF9pbmZvOiB7fTtcbn1cblxuaW50ZXJmYWNlIExvZyB7XG4gIHNvdXJjZV9leHRlbnNpb25fanNvbl9wcm90bzM6IHN0cmluZztcbiAgZXZlbnRfdGltZV9tczogc3RyaW5nO1xufVxuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cblxubGV0IHF1ZXVlOiBCYXRjaEV2ZW50W10gPSBbXTtcblxubGV0IGlzVHJhbnNwb3J0U2V0dXA6IGJvb2xlYW4gPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwVHJhbnNwb3J0U2VydmljZSgpOiB2b2lkIHtcbiAgaWYgKCFpc1RyYW5zcG9ydFNldHVwKSB7XG4gICAgcHJvY2Vzc1F1ZXVlKElOSVRJQUxfU0VORF9USU1FX0RFTEFZX01TKTtcbiAgICBpc1RyYW5zcG9ydFNldHVwID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFV0aWxpemVkIGJ5IHRlc3RpbmcgdG8gY2xlYW4gdXAgbWVzc2FnZSBxdWV1ZSBhbmQgdW4taW5pdGlhbGl6ZSB0cmFuc3BvcnQgc2VydmljZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VHJhbnNwb3J0U2VydmljZSgpOiB2b2lkIHtcbiAgaXNUcmFuc3BvcnRTZXR1cCA9IGZhbHNlO1xuICBxdWV1ZSA9IFtdO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUodGltZU9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vIElmIHRoZXJlIGlzIG5vIHJlbWFpbmluZ1RyaWVzIGxlZnQsIHN0b3AgcmV0cnlpbmcuXG4gICAgaWYgKHJlbWFpbmluZ1RyaWVzID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGV2ZW50cyB0byBwcm9jZXNzLCB3YWl0IGZvciBERUZBVUxUX1NFTkRfSU5URVJWQUxfTVMgYW5kIHRyeSBhZ2Fpbi5cbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3NRdWV1ZShERUZBVUxUX1NFTkRfSU5URVJWQUxfTVMpO1xuICAgIH1cblxuICAgIGRpc3BhdGNoUXVldWVFdmVudHMoKTtcbiAgfSwgdGltZU9mZnNldCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoUXVldWVFdmVudHMoKTogdm9pZCB7XG4gIC8vIEV4dHJhY3QgZXZlbnRzIHVwIHRvIHRoZSBtYXhpbXVtIGNhcCBvZiBzaW5nbGUgbG9nUmVxdWVzdCBmcm9tIHRvcCBvZiBcIm9mZmljaWFsIHF1ZXVlXCIuXG4gIC8vIFRoZSBzdGFnZWQgZXZlbnRzIHdpbGwgYmUgdXNlZCBmb3IgY3VycmVudCBsb2dSZXF1ZXN0IGF0dGVtcHQsIHJlbWFpbmluZyBldmVudHMgd2lsbCBiZSBrZXB0XG4gIC8vIGZvciBuZXh0IGF0dGVtcHQuXG4gIGNvbnN0IHN0YWdlZCA9IHF1ZXVlLnNwbGljZSgwLCBNQVhfRVZFTlRfQ09VTlRfUEVSX1JFUVVFU1QpO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAvLyBXZSB3aWxsIHBhc3MgdGhlIEpTT04gc2VyaWFsaXplZCBldmVudCB0byB0aGUgYmFja2VuZC5cbiAgY29uc3QgbG9nX2V2ZW50OiBMb2dbXSA9IHN0YWdlZC5tYXAoZXZ0ID0+ICh7XG4gICAgc291cmNlX2V4dGVuc2lvbl9qc29uX3Byb3RvMzogZXZ0Lm1lc3NhZ2UsXG4gICAgZXZlbnRfdGltZV9tczogU3RyaW5nKGV2dC5ldmVudFRpbWUpXG4gIH0pKTtcblxuICBjb25zdCBkYXRhOiBUcmFuc3BvcnRCYXRjaExvZ0Zvcm1hdCA9IHtcbiAgICByZXF1ZXN0X3RpbWVfbXM6IFN0cmluZyhEYXRlLm5vdygpKSxcbiAgICBjbGllbnRfaW5mbzoge1xuICAgICAgY2xpZW50X3R5cGU6IDEsIC8vIDEgaXMgSlNcbiAgICAgIGpzX2NsaWVudF9pbmZvOiB7fVxuICAgIH0sXG4gICAgbG9nX3NvdXJjZTogU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkubG9nU291cmNlLFxuICAgIGxvZ19ldmVudFxuICB9O1xuICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xuXG4gIHNlbmRFdmVudHNUb0ZsKGRhdGEsIHN0YWdlZCkuY2F0Y2goKCkgPT4ge1xuICAgIC8vIElmIHRoZSByZXF1ZXN0IGZhaWxzIGZvciBzb21lIHJlYXNvbiwgYWRkIHRoZSBldmVudHMgdGhhdCB3ZXJlIGF0dGVtcHRlZFxuICAgIC8vIGJhY2sgdG8gdGhlIHByaW1hcnkgcXVldWUgdG8gcmV0cnkgbGF0ZXIuXG4gICAgcXVldWUgPSBbLi4uc3RhZ2VkLCAuLi5xdWV1ZV07XG4gICAgcmVtYWluaW5nVHJpZXMtLTtcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8oYFRyaWVzIGxlZnQ6ICR7cmVtYWluaW5nVHJpZXN9LmApO1xuICAgIHByb2Nlc3NRdWV1ZShERUZBVUxUX1NFTkRfSU5URVJWQUxfTVMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VuZEV2ZW50c1RvRmwoXG4gIGRhdGE6IFRyYW5zcG9ydEJhdGNoTG9nRm9ybWF0LFxuICBzdGFnZWQ6IEJhdGNoRXZlbnRbXVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBwb3N0VG9GbEVuZHBvaW50KGRhdGEpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGNvbnNvbGVMb2dnZXIuaW5mbygnQ2FsbCB0byBGaXJlYmFzZSBiYWNrZW5kIGZhaWxlZC4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIC8vIEZpbmQgdGhlIG5leHQgY2FsbCB3YWl0IHRpbWUgZnJvbSB0aGUgcmVzcG9uc2UuXG4gICAgICBjb25zdCB0cmFuc3BvcnRXYWl0ID0gTnVtYmVyKHJlcy5uZXh0UmVxdWVzdFdhaXRNaWxsaXMpO1xuICAgICAgbGV0IHJlcXVlc3RPZmZzZXQgPSBERUZBVUxUX1NFTkRfSU5URVJWQUxfTVM7XG4gICAgICBpZiAoIWlzTmFOKHRyYW5zcG9ydFdhaXQpKSB7XG4gICAgICAgIHJlcXVlc3RPZmZzZXQgPSBNYXRoLm1heCh0cmFuc3BvcnRXYWl0LCByZXF1ZXN0T2Zmc2V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHJlcXVlc3QgaWYgcmVzcG9uc2UgaW5jbHVkZSBSRVNQT05TRV9BQ1RJT05fVU5LTk9XTiBvciBERUxFVEVfUkVRVUVTVCBhY3Rpb24uXG4gICAgICAvLyBPdGhlcndpc2UsIHJldHJ5IHJlcXVlc3QgdXNpbmcgbm9ybWFsIHNjaGVkdWxpbmcgaWYgcmVzcG9uc2UgaW5jbHVkZSBSRVRSWV9SRVFVRVNUX0xBVEVSLlxuICAgICAgY29uc3QgbG9nUmVzcG9uc2VEZXRhaWxzOiBMb2dSZXNwb25zZURldGFpbHNbXSA9IHJlcy5sb2dSZXNwb25zZURldGFpbHM7XG4gICAgICBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkobG9nUmVzcG9uc2VEZXRhaWxzKSAmJlxuICAgICAgICBsb2dSZXNwb25zZURldGFpbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICBsb2dSZXNwb25zZURldGFpbHNbMF0ucmVzcG9uc2VBY3Rpb24gPT09ICdSRVRSWV9SRVFVRVNUX0xBVEVSJ1xuICAgICAgKSB7XG4gICAgICAgIHF1ZXVlID0gWy4uLnN0YWdlZCwgLi4ucXVldWVdO1xuICAgICAgICBjb25zb2xlTG9nZ2VyLmluZm8oYFJldHJ5IHRyYW5zcG9ydCByZXF1ZXN0IGxhdGVyLmApO1xuICAgICAgfVxuXG4gICAgICByZW1haW5pbmdUcmllcyA9IERFRkFVTFRfUkVNQUlOSU5HX1RSSUVTO1xuICAgICAgLy8gU2NoZWR1bGUgdGhlIG5leHQgcHJvY2Vzcy5cbiAgICAgIHByb2Nlc3NRdWV1ZShyZXF1ZXN0T2Zmc2V0KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcG9zdFRvRmxFbmRwb2ludChkYXRhOiBUcmFuc3BvcnRCYXRjaExvZ0Zvcm1hdCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgY29uc3QgZmxUcmFuc3BvcnRGdWxsVXJsID1cbiAgICBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5nZXRGbFRyYW5zcG9ydEZ1bGxVcmwoKTtcbiAgcmV0dXJuIGZldGNoKGZsVHJhbnNwb3J0RnVsbFVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUb1F1ZXVlKGV2dDogQmF0Y2hFdmVudCk6IHZvaWQge1xuICBpZiAoIWV2dC5ldmVudFRpbWUgfHwgIWV2dC5tZXNzYWdlKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLklOVkFMSURfQ0NfTE9HKTtcbiAgfVxuICAvLyBBZGQgdGhlIG5ldyBldmVudCB0byB0aGUgcXVldWUuXG4gIHF1ZXVlID0gWy4uLnF1ZXVlLCBldnRdO1xufVxuXG4vKiogTG9nIGhhbmRsZXIgZm9yIGNjIHNlcnZpY2UgdG8gc2VuZCB0aGUgcGVyZm9ybWFuY2UgbG9ncyB0byB0aGUgc2VydmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9ydEhhbmRsZXIoXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHNlcmlhbGl6ZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gc3RyaW5nXG4pOiAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHNlcmlhbGl6ZXIoLi4uYXJncyk7XG4gICAgYWRkVG9RdWV1ZSh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgZXZlbnRUaW1lOiBEYXRlLm5vdygpXG4gICAgfSk7XG4gIH07XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgZ2V0SWlkIH0gZnJvbSAnLi9paWRfc2VydmljZSc7XG5pbXBvcnQgeyBOZXR3b3JrUmVxdWVzdCB9IGZyb20gJy4uL3Jlc291cmNlcy9uZXR3b3JrX3JlcXVlc3QnO1xuaW1wb3J0IHsgVHJhY2UgfSBmcm9tICcuLi9yZXNvdXJjZXMvdHJhY2UnO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi9hcGlfc2VydmljZSc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuL3NldHRpbmdzX3NlcnZpY2UnO1xuaW1wb3J0IHtcbiAgZ2V0U2VydmljZVdvcmtlclN0YXR1cyxcbiAgZ2V0VmlzaWJpbGl0eVN0YXRlLFxuICBWaXNpYmlsaXR5U3RhdGUsXG4gIGdldEVmZmVjdGl2ZUNvbm5lY3Rpb25UeXBlXG59IGZyb20gJy4uL3V0aWxzL2F0dHJpYnV0ZXNfdXRpbHMnO1xuaW1wb3J0IHtcbiAgaXNQZXJmSW5pdGlhbGl6ZWQsXG4gIGdldEluaXRpYWxpemF0aW9uUHJvbWlzZVxufSBmcm9tICcuL2luaXRpYWxpemF0aW9uX3NlcnZpY2UnO1xuaW1wb3J0IHsgdHJhbnNwb3J0SGFuZGxlciB9IGZyb20gJy4vdHJhbnNwb3J0X3NlcnZpY2UnO1xuaW1wb3J0IHsgU0RLX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHAgfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldEFwcElkIH0gZnJvbSAnLi4vdXRpbHMvYXBwX3V0aWxzJztcblxuY29uc3QgZW51bSBSZXNvdXJjZVR5cGUge1xuICBOZXR3b3JrUmVxdWVzdCxcbiAgVHJhY2Vcbn1cblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbnRlcmZhY2UgQXBwbGljYXRpb25JbmZvIHtcbiAgZ29vZ2xlX2FwcF9pZDogc3RyaW5nO1xuICBhcHBfaW5zdGFuY2VfaWQ/OiBzdHJpbmc7XG4gIHdlYl9hcHBfaW5mbzogV2ViQXBwSW5mbztcbiAgYXBwbGljYXRpb25fcHJvY2Vzc19zdGF0ZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgV2ViQXBwSW5mbyB7XG4gIHNka192ZXJzaW9uOiBzdHJpbmc7XG4gIHBhZ2VfdXJsOiBzdHJpbmc7XG4gIHNlcnZpY2Vfd29ya2VyX3N0YXR1czogbnVtYmVyO1xuICB2aXNpYmlsaXR5X3N0YXRlOiBudW1iZXI7XG4gIGVmZmVjdGl2ZV9jb25uZWN0aW9uX3R5cGU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFBlcmZOZXR3b3JrTG9nIHtcbiAgYXBwbGljYXRpb25faW5mbzogQXBwbGljYXRpb25JbmZvO1xuICBuZXR3b3JrX3JlcXVlc3RfbWV0cmljOiBOZXR3b3JrUmVxdWVzdE1ldHJpYztcbn1cblxuaW50ZXJmYWNlIFBlcmZUcmFjZUxvZyB7XG4gIGFwcGxpY2F0aW9uX2luZm86IEFwcGxpY2F0aW9uSW5mbztcbiAgdHJhY2VfbWV0cmljOiBUcmFjZU1ldHJpYztcbn1cblxuaW50ZXJmYWNlIE5ldHdvcmtSZXF1ZXN0TWV0cmljIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGh0dHBfbWV0aG9kOiBudW1iZXI7XG4gIGh0dHBfcmVzcG9uc2VfY29kZTogbnVtYmVyO1xuICByZXNwb25zZV9wYXlsb2FkX2J5dGVzPzogbnVtYmVyO1xuICBjbGllbnRfc3RhcnRfdGltZV91cz86IG51bWJlcjtcbiAgdGltZV90b19yZXNwb25zZV9pbml0aWF0ZWRfdXM/OiBudW1iZXI7XG4gIHRpbWVfdG9fcmVzcG9uc2VfY29tcGxldGVkX3VzPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgVHJhY2VNZXRyaWMge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzX2F1dG86IGJvb2xlYW47XG4gIGNsaWVudF9zdGFydF90aW1lX3VzOiBudW1iZXI7XG4gIGR1cmF0aW9uX3VzOiBudW1iZXI7XG4gIGNvdW50ZXJzPzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgY3VzdG9tX2F0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG4vKiBlc2xpbnQtZW5ibGUgY2FtZWxjYXNlICovXG5cbmxldCBsb2dnZXI6IChcbiAgcmVzb3VyY2U6IE5ldHdvcmtSZXF1ZXN0IHwgVHJhY2UsXG4gIHJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlXG4pID0+IHZvaWQgfCB1bmRlZmluZWQ7XG4vLyBUaGlzIG1ldGhvZCBpcyBub3QgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXphdGlvbi5cbmZ1bmN0aW9uIHNlbmRMb2coXG4gIHJlc291cmNlOiBOZXR3b3JrUmVxdWVzdCB8IFRyYWNlLFxuICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZVxuKTogdm9pZCB7XG4gIGlmICghbG9nZ2VyKSB7XG4gICAgbG9nZ2VyID0gdHJhbnNwb3J0SGFuZGxlcihzZXJpYWxpemVyKTtcbiAgfVxuICBsb2dnZXIocmVzb3VyY2UsIHJlc291cmNlVHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dUcmFjZSh0cmFjZTogVHJhY2UpOiB2b2lkIHtcbiAgY29uc3Qgc2V0dGluZ3NTZXJ2aWNlID0gU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIC8vIERvIG5vdCBsb2cgaWYgdHJhY2UgaXMgYXV0byBnZW5lcmF0ZWQgYW5kIGluc3RydW1lbnRhdGlvbiBpcyBkaXNhYmxlZC5cbiAgaWYgKCFzZXR0aW5nc1NlcnZpY2UuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCAmJiB0cmFjZS5pc0F1dG8pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gRG8gbm90IGxvZyBpZiB0cmFjZSBpcyBjdXN0b20gYW5kIGRhdGEgY29sbGVjdGlvbiBpcyBkaXNhYmxlZC5cbiAgaWYgKCFzZXR0aW5nc1NlcnZpY2UuZGF0YUNvbGxlY3Rpb25FbmFibGVkICYmICF0cmFjZS5pc0F1dG8pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gRG8gbm90IGxvZyBpZiByZXF1aXJlZCBhcGlzIGFyZSBub3QgYXZhaWxhYmxlLlxuICBpZiAoIUFwaS5nZXRJbnN0YW5jZSgpLnJlcXVpcmVkQXBpc0F2YWlsYWJsZSgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gT25seSBsb2cgdGhlIHBhZ2UgbG9hZCBhdXRvIHRyYWNlcyBpZiBwYWdlIGlzIHZpc2libGUuXG4gIGlmICh0cmFjZS5pc0F1dG8gJiYgZ2V0VmlzaWJpbGl0eVN0YXRlKCkgIT09IFZpc2liaWxpdHlTdGF0ZS5WSVNJQkxFKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzUGVyZkluaXRpYWxpemVkKCkpIHtcbiAgICBzZW5kVHJhY2VMb2codHJhY2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIEN1c3RvbSB0cmFjZXMgY2FuIGJlIHVzZWQgYmVmb3JlIHRoZSBpbml0aWFsaXphdGlvbiBidXQgbG9nZ2luZ1xuICAgIC8vIHNob3VsZCB3YWl0IHVudGlsIGFmdGVyLlxuICAgIGdldEluaXRpYWxpemF0aW9uUHJvbWlzZSh0cmFjZS5wZXJmb3JtYW5jZUNvbnRyb2xsZXIpLnRoZW4oXG4gICAgICAoKSA9PiBzZW5kVHJhY2VMb2codHJhY2UpLFxuICAgICAgKCkgPT4gc2VuZFRyYWNlTG9nKHRyYWNlKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZFRyYWNlTG9nKHRyYWNlOiBUcmFjZSk6IHZvaWQge1xuICBpZiAoIWdldElpZCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc2V0dGluZ3NTZXJ2aWNlID0gU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIGlmIChcbiAgICAhc2V0dGluZ3NTZXJ2aWNlLmxvZ2dpbmdFbmFibGVkIHx8XG4gICAgIXNldHRpbmdzU2VydmljZS5sb2dUcmFjZUFmdGVyU2FtcGxpbmdcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2V0VGltZW91dCgoKSA9PiBzZW5kTG9nKHRyYWNlLCBSZXNvdXJjZVR5cGUuVHJhY2UpLCAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ05ldHdvcmtSZXF1ZXN0KG5ldHdvcmtSZXF1ZXN0OiBOZXR3b3JrUmVxdWVzdCk6IHZvaWQge1xuICBjb25zdCBzZXR0aW5nc1NlcnZpY2UgPSBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgLy8gRG8gbm90IGxvZyBuZXR3b3JrIHJlcXVlc3RzIGlmIGluc3RydW1lbnRhdGlvbiBpcyBkaXNhYmxlZC5cbiAgaWYgKCFzZXR0aW5nc1NlcnZpY2UuaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERvIG5vdCBsb2cgdGhlIGpzIHNkaydzIGNhbGwgdG8gdHJhbnNwb3J0IHNlcnZpY2UgZG9tYWluIHRvIGF2b2lkIHVubmVjZXNzYXJ5IGN5Y2xlLlxuICAvLyBOZWVkIHRvIGJsYWNrbGlzdCBib3RoIG9sZCBhbmQgbmV3IGVuZHBvaW50cyB0byBhdm9pZCBtaWdyYXRpb24gZ2FwLlxuICBjb25zdCBuZXR3b3JrUmVxdWVzdFVybCA9IG5ldHdvcmtSZXF1ZXN0LnVybDtcblxuICAvLyBCbGFja2xpc3Qgb2xkIGxvZyBlbmRwb2ludCBhbmQgbmV3IHRyYW5zcG9ydCBlbmRwb2ludC5cbiAgLy8gQmVjYXVzZSBQZXJmb3JtYW5jZSBTREsgZG9lc24ndCBpbnN0cnVtZW50IHJlcXVlc3RzIHNlbnQgZnJvbSBTREsgaXRzZWxmLlxuICBjb25zdCBsb2dFbmRwb2ludFVybCA9IHNldHRpbmdzU2VydmljZS5sb2dFbmRQb2ludFVybC5zcGxpdCgnPycpWzBdO1xuICBjb25zdCBmbEVuZHBvaW50VXJsID0gc2V0dGluZ3NTZXJ2aWNlLmZsVHJhbnNwb3J0RW5kcG9pbnRVcmwuc3BsaXQoJz8nKVswXTtcbiAgaWYgKFxuICAgIG5ldHdvcmtSZXF1ZXN0VXJsID09PSBsb2dFbmRwb2ludFVybCB8fFxuICAgIG5ldHdvcmtSZXF1ZXN0VXJsID09PSBmbEVuZHBvaW50VXJsXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChcbiAgICAhc2V0dGluZ3NTZXJ2aWNlLmxvZ2dpbmdFbmFibGVkIHx8XG4gICAgIXNldHRpbmdzU2VydmljZS5sb2dOZXR3b3JrQWZ0ZXJTYW1wbGluZ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZXRUaW1lb3V0KCgpID0+IHNlbmRMb2cobmV0d29ya1JlcXVlc3QsIFJlc291cmNlVHlwZS5OZXR3b3JrUmVxdWVzdCksIDApO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVyKFxuICByZXNvdXJjZTogTmV0d29ya1JlcXVlc3QgfCBUcmFjZSxcbiAgcmVzb3VyY2VUeXBlOiBSZXNvdXJjZVR5cGVcbik6IHN0cmluZyB7XG4gIGlmIChyZXNvdXJjZVR5cGUgPT09IFJlc291cmNlVHlwZS5OZXR3b3JrUmVxdWVzdCkge1xuICAgIHJldHVybiBzZXJpYWxpemVOZXR3b3JrUmVxdWVzdChyZXNvdXJjZSBhcyBOZXR3b3JrUmVxdWVzdCk7XG4gIH1cbiAgcmV0dXJuIHNlcmlhbGl6ZVRyYWNlKHJlc291cmNlIGFzIFRyYWNlKTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplTmV0d29ya1JlcXVlc3QobmV0d29ya1JlcXVlc3Q6IE5ldHdvcmtSZXF1ZXN0KTogc3RyaW5nIHtcbiAgY29uc3QgbmV0d29ya1JlcXVlc3RNZXRyaWM6IE5ldHdvcmtSZXF1ZXN0TWV0cmljID0ge1xuICAgIHVybDogbmV0d29ya1JlcXVlc3QudXJsLFxuICAgIGh0dHBfbWV0aG9kOiBuZXR3b3JrUmVxdWVzdC5odHRwTWV0aG9kIHx8IDAsXG4gICAgaHR0cF9yZXNwb25zZV9jb2RlOiAyMDAsXG4gICAgcmVzcG9uc2VfcGF5bG9hZF9ieXRlczogbmV0d29ya1JlcXVlc3QucmVzcG9uc2VQYXlsb2FkQnl0ZXMsXG4gICAgY2xpZW50X3N0YXJ0X3RpbWVfdXM6IG5ldHdvcmtSZXF1ZXN0LnN0YXJ0VGltZVVzLFxuICAgIHRpbWVfdG9fcmVzcG9uc2VfaW5pdGlhdGVkX3VzOiBuZXR3b3JrUmVxdWVzdC50aW1lVG9SZXNwb25zZUluaXRpYXRlZFVzLFxuICAgIHRpbWVfdG9fcmVzcG9uc2VfY29tcGxldGVkX3VzOiBuZXR3b3JrUmVxdWVzdC50aW1lVG9SZXNwb25zZUNvbXBsZXRlZFVzXG4gIH07XG4gIGNvbnN0IHBlcmZNZXRyaWM6IFBlcmZOZXR3b3JrTG9nID0ge1xuICAgIGFwcGxpY2F0aW9uX2luZm86IGdldEFwcGxpY2F0aW9uSW5mbyhcbiAgICAgIG5ldHdvcmtSZXF1ZXN0LnBlcmZvcm1hbmNlQ29udHJvbGxlci5hcHBcbiAgICApLFxuICAgIG5ldHdvcmtfcmVxdWVzdF9tZXRyaWM6IG5ldHdvcmtSZXF1ZXN0TWV0cmljXG4gIH07XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShwZXJmTWV0cmljKTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplVHJhY2UodHJhY2U6IFRyYWNlKTogc3RyaW5nIHtcbiAgY29uc3QgdHJhY2VNZXRyaWM6IFRyYWNlTWV0cmljID0ge1xuICAgIG5hbWU6IHRyYWNlLm5hbWUsXG4gICAgaXNfYXV0bzogdHJhY2UuaXNBdXRvLFxuICAgIGNsaWVudF9zdGFydF90aW1lX3VzOiB0cmFjZS5zdGFydFRpbWVVcyxcbiAgICBkdXJhdGlvbl91czogdHJhY2UuZHVyYXRpb25Vc1xuICB9O1xuXG4gIGlmIChPYmplY3Qua2V5cyh0cmFjZS5jb3VudGVycykubGVuZ3RoICE9PSAwKSB7XG4gICAgdHJhY2VNZXRyaWMuY291bnRlcnMgPSB0cmFjZS5jb3VudGVycztcbiAgfVxuICBjb25zdCBjdXN0b21BdHRyaWJ1dGVzID0gdHJhY2UuZ2V0QXR0cmlidXRlcygpO1xuICBpZiAoT2JqZWN0LmtleXMoY3VzdG9tQXR0cmlidXRlcykubGVuZ3RoICE9PSAwKSB7XG4gICAgdHJhY2VNZXRyaWMuY3VzdG9tX2F0dHJpYnV0ZXMgPSBjdXN0b21BdHRyaWJ1dGVzO1xuICB9XG5cbiAgY29uc3QgcGVyZk1ldHJpYzogUGVyZlRyYWNlTG9nID0ge1xuICAgIGFwcGxpY2F0aW9uX2luZm86IGdldEFwcGxpY2F0aW9uSW5mbyh0cmFjZS5wZXJmb3JtYW5jZUNvbnRyb2xsZXIuYXBwKSxcbiAgICB0cmFjZV9tZXRyaWM6IHRyYWNlTWV0cmljXG4gIH07XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShwZXJmTWV0cmljKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXBwbGljYXRpb25JbmZvKGZpcmViYXNlQXBwOiBGaXJlYmFzZUFwcCk6IEFwcGxpY2F0aW9uSW5mbyB7XG4gIHJldHVybiB7XG4gICAgZ29vZ2xlX2FwcF9pZDogZ2V0QXBwSWQoZmlyZWJhc2VBcHApLFxuICAgIGFwcF9pbnN0YW5jZV9pZDogZ2V0SWlkKCksXG4gICAgd2ViX2FwcF9pbmZvOiB7XG4gICAgICBzZGtfdmVyc2lvbjogU0RLX1ZFUlNJT04sXG4gICAgICBwYWdlX3VybDogQXBpLmdldEluc3RhbmNlKCkuZ2V0VXJsKCksXG4gICAgICBzZXJ2aWNlX3dvcmtlcl9zdGF0dXM6IGdldFNlcnZpY2VXb3JrZXJTdGF0dXMoKSxcbiAgICAgIHZpc2liaWxpdHlfc3RhdGU6IGdldFZpc2liaWxpdHlTdGF0ZSgpLFxuICAgICAgZWZmZWN0aXZlX2Nvbm5lY3Rpb25fdHlwZTogZ2V0RWZmZWN0aXZlQ29ubmVjdGlvblR5cGUoKVxuICAgIH0sXG4gICAgYXBwbGljYXRpb25fcHJvY2Vzc19zdGF0ZTogMFxuICB9O1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIEZJUlNUX1BBSU5UX0NPVU5URVJfTkFNRSxcbiAgRklSU1RfQ09OVEVOVEZVTF9QQUlOVF9DT1VOVEVSX05BTUUsXG4gIEZJUlNUX0lOUFVUX0RFTEFZX0NPVU5URVJfTkFNRSxcbiAgT09CX1RSQUNFX1BBR0VfTE9BRF9QUkVGSVhcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbnNvbGVMb2dnZXIgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX2xvZ2dlcic7XG5cbmNvbnN0IE1BWF9NRVRSSUNfTkFNRV9MRU5HVEggPSAxMDA7XG5jb25zdCBSRVNFUlZFRF9BVVRPX1BSRUZJWCA9ICdfJztcbmNvbnN0IG9vYk1ldHJpY3MgPSBbXG4gIEZJUlNUX1BBSU5UX0NPVU5URVJfTkFNRSxcbiAgRklSU1RfQ09OVEVOVEZVTF9QQUlOVF9DT1VOVEVSX05BTUUsXG4gIEZJUlNUX0lOUFVUX0RFTEFZX0NPVU5URVJfTkFNRVxuXTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG1ldHJpYyBpcyBjdXN0b20gYW5kIGRvZXMgbm90IHN0YXJ0IHdpdGggcmVzZXJ2ZWQgcHJlZml4LCBvciBpZlxuICogdGhlIG1ldHJpYyBpcyBvbmUgb2Ygb3V0IG9mIHRoZSBib3ggcGFnZSBsb2FkIHRyYWNlIG1ldHJpY3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTWV0cmljTmFtZShuYW1lOiBzdHJpbmcsIHRyYWNlTmFtZT86IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAobmFtZS5sZW5ndGggPT09IDAgfHwgbmFtZS5sZW5ndGggPiBNQVhfTUVUUklDX05BTUVfTEVOR1RIKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgKHRyYWNlTmFtZSAmJlxuICAgICAgdHJhY2VOYW1lLnN0YXJ0c1dpdGgoT09CX1RSQUNFX1BBR0VfTE9BRF9QUkVGSVgpICYmXG4gICAgICBvb2JNZXRyaWNzLmluZGV4T2YobmFtZSkgPiAtMSkgfHxcbiAgICAhbmFtZS5zdGFydHNXaXRoKFJFU0VSVkVEX0FVVE9fUFJFRklYKVxuICApO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBwcm92aWRlZCB2YWx1ZSB0byBhbiBpbnRlZ2VyIHZhbHVlIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1ldHJpYy5cbiAqIEBwYXJhbSBwcm92aWRlZFZhbHVlIFByb3ZpZGVkIG51bWJlciB2YWx1ZSBvZiB0aGUgbWV0cmljIHRoYXQgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIuXG4gKlxuICogQHJldHVybnMgQ29udmVydGVkIGludGVnZXIgbnVtYmVyIHRvIGJlIHNldCBmb3IgdGhlIG1ldHJpYy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRNZXRyaWNWYWx1ZVRvSW50ZWdlcihwcm92aWRlZFZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCB2YWx1ZUFzSW50ZWdlcjogbnVtYmVyID0gTWF0aC5mbG9vcihwcm92aWRlZFZhbHVlKTtcbiAgaWYgKHZhbHVlQXNJbnRlZ2VyIDwgcHJvdmlkZWRWYWx1ZSkge1xuICAgIGNvbnNvbGVMb2dnZXIuaW5mbyhcbiAgICAgIGBNZXRyaWMgdmFsdWUgc2hvdWxkIGJlIGFuIEludGVnZXIsIHNldHRpbmcgdGhlIHZhbHVlIGFzIDogJHt2YWx1ZUFzSW50ZWdlcn0uYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlQXNJbnRlZ2VyO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIFRSQUNFX1NUQVJUX01BUktfUFJFRklYLFxuICBUUkFDRV9TVE9QX01BUktfUFJFRklYLFxuICBUUkFDRV9NRUFTVVJFX1BSRUZJWCxcbiAgT09CX1RSQUNFX1BBR0VfTE9BRF9QUkVGSVgsXG4gIEZJUlNUX1BBSU5UX0NPVU5URVJfTkFNRSxcbiAgRklSU1RfQ09OVEVOVEZVTF9QQUlOVF9DT1VOVEVSX05BTUUsXG4gIEZJUlNUX0lOUFVUX0RFTEFZX0NPVU5URVJfTkFNRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpX3NlcnZpY2UnO1xuaW1wb3J0IHsgbG9nVHJhY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wZXJmX2xvZ2dlcic7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuLi91dGlscy9lcnJvcnMnO1xuaW1wb3J0IHtcbiAgaXNWYWxpZEN1c3RvbUF0dHJpYnV0ZU5hbWUsXG4gIGlzVmFsaWRDdXN0b21BdHRyaWJ1dGVWYWx1ZVxufSBmcm9tICcuLi91dGlscy9hdHRyaWJ1dGVzX3V0aWxzJztcbmltcG9ydCB7XG4gIGlzVmFsaWRNZXRyaWNOYW1lLFxuICBjb252ZXJ0TWV0cmljVmFsdWVUb0ludGVnZXJcbn0gZnJvbSAnLi4vdXRpbHMvbWV0cmljX3V0aWxzJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlVHJhY2UgfSBmcm9tICcuLi9wdWJsaWNfdHlwZXMnO1xuaW1wb3J0IHsgUGVyZm9ybWFuY2VDb250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvcGVyZic7XG5cbmNvbnN0IGVudW0gVHJhY2VTdGF0ZSB7XG4gIFVOSU5JVElBTElaRUQgPSAxLFxuICBSVU5OSU5HLFxuICBURVJNSU5BVEVEXG59XG5cbmV4cG9ydCBjbGFzcyBUcmFjZSBpbXBsZW1lbnRzIFBlcmZvcm1hbmNlVHJhY2Uge1xuICBwcml2YXRlIHN0YXRlOiBUcmFjZVN0YXRlID0gVHJhY2VTdGF0ZS5VTklOSVRJQUxJWkVEO1xuICBzdGFydFRpbWVVcyE6IG51bWJlcjtcbiAgZHVyYXRpb25VcyE6IG51bWJlcjtcbiAgcHJpdmF0ZSBjdXN0b21BdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIGNvdW50ZXJzOiB7IFtjb3VudGVyTmFtZTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgcHJpdmF0ZSBhcGkgPSBBcGkuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSByYW5kb21JZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICBwcml2YXRlIHRyYWNlU3RhcnRNYXJrITogc3RyaW5nO1xuICBwcml2YXRlIHRyYWNlU3RvcE1hcmshOiBzdHJpbmc7XG4gIHByaXZhdGUgdHJhY2VNZWFzdXJlITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gcGVyZm9ybWFuY2VDb250cm9sbGVyIFRoZSBwZXJmb3JtYW5jZSBjb250cm9sbGVyIHJ1bm5pbmcuXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0cmFjZS5cbiAgICogQHBhcmFtIGlzQXV0byBJZiB0aGUgdHJhY2UgaXMgYXV0by1pbnN0cnVtZW50ZWQuXG4gICAqIEBwYXJhbSB0cmFjZU1lYXN1cmVOYW1lIFRoZSBuYW1lIG9mIHRoZSBtZWFzdXJlIG1hcmtlciBpbiB1c2VyIHRpbWluZyBzcGVjaWZpY2F0aW9uLiBUaGlzIGZpZWxkXG4gICAqIGlzIG9ubHkgc2V0IHdoZW4gdGhlIHRyYWNlIGlzIGJ1aWx0IGZvciBsb2dnaW5nIHdoZW4gdGhlIHVzZXIgZGlyZWN0bHkgdXNlcyB0aGUgdXNlciB0aW1pbmdcbiAgICogYXBpIChwZXJmb3JtYW5jZS5tYXJrIGFuZCBwZXJmb3JtYW5jZS5tZWFzdXJlKS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICByZWFkb25seSBpc0F1dG8gPSBmYWxzZSxcbiAgICB0cmFjZU1lYXN1cmVOYW1lPzogc3RyaW5nXG4gICkge1xuICAgIGlmICghdGhpcy5pc0F1dG8pIHtcbiAgICAgIHRoaXMudHJhY2VTdGFydE1hcmsgPSBgJHtUUkFDRV9TVEFSVF9NQVJLX1BSRUZJWH0tJHt0aGlzLnJhbmRvbUlkfS0ke3RoaXMubmFtZX1gO1xuICAgICAgdGhpcy50cmFjZVN0b3BNYXJrID0gYCR7VFJBQ0VfU1RPUF9NQVJLX1BSRUZJWH0tJHt0aGlzLnJhbmRvbUlkfS0ke3RoaXMubmFtZX1gO1xuICAgICAgdGhpcy50cmFjZU1lYXN1cmUgPVxuICAgICAgICB0cmFjZU1lYXN1cmVOYW1lIHx8XG4gICAgICAgIGAke1RSQUNFX01FQVNVUkVfUFJFRklYfS0ke3RoaXMucmFuZG9tSWR9LSR7dGhpcy5uYW1lfWA7XG5cbiAgICAgIGlmICh0cmFjZU1lYXN1cmVOYW1lKSB7XG4gICAgICAgIC8vIEZvciB0aGUgY2FzZSBvZiBkaXJlY3QgdXNlciB0aW1pbmcgdHJhY2VzLCBubyBzdGFydCBzdG9wIHdpbGwgaGFwcGVuLiBUaGUgbWVhc3VyZSBvYmplY3RcbiAgICAgICAgLy8gaXMgYWxyZWFkeSBhdmFpbGFibGUuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVHJhY2VNZXRyaWNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIHRyYWNlLiBUaGUgbWVhc3VyZW1lbnQgb2YgdGhlIGR1cmF0aW9uIHN0YXJ0cyBhdCB0aGlzIHBvaW50LlxuICAgKi9cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IFRyYWNlU3RhdGUuVU5JTklUSUFMSVpFRCkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLlRSQUNFX1NUQVJURURfQkVGT1JFLCB7XG4gICAgICAgIHRyYWNlTmFtZTogdGhpcy5uYW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5hcGkubWFyayh0aGlzLnRyYWNlU3RhcnRNYXJrKTtcbiAgICB0aGlzLnN0YXRlID0gVHJhY2VTdGF0ZS5SVU5OSU5HO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSB0cmFjZS4gVGhlIG1lYXN1cmVtZW50IG9mIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhY2Ugc3RvcHMgYXQgdGhpcyBwb2ludCBhbmQgdHJhY2VcbiAgICogaXMgbG9nZ2VkLlxuICAgKi9cbiAgc3RvcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gVHJhY2VTdGF0ZS5SVU5OSU5HKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuVFJBQ0VfU1RPUFBFRF9CRUZPUkUsIHtcbiAgICAgICAgdHJhY2VOYW1lOiB0aGlzLm5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gVHJhY2VTdGF0ZS5URVJNSU5BVEVEO1xuICAgIHRoaXMuYXBpLm1hcmsodGhpcy50cmFjZVN0b3BNYXJrKTtcbiAgICB0aGlzLmFwaS5tZWFzdXJlKFxuICAgICAgdGhpcy50cmFjZU1lYXN1cmUsXG4gICAgICB0aGlzLnRyYWNlU3RhcnRNYXJrLFxuICAgICAgdGhpcy50cmFjZVN0b3BNYXJrXG4gICAgKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVRyYWNlTWV0cmljcygpO1xuICAgIGxvZ1RyYWNlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY29yZHMgYSB0cmFjZSB3aXRoIHByZWRldGVybWluZWQgdmFsdWVzLiBJZiB0aGlzIG1ldGhvZCBpcyB1c2VkIGEgdHJhY2UgaXMgY3JlYXRlZCBhbmQgbG9nZ2VkXG4gICAqIGRpcmVjdGx5LiBObyBuZWVkIHRvIHVzZSBzdGFydCBhbmQgc3RvcCBtZXRob2RzLlxuICAgKiBAcGFyYW0gc3RhcnRUaW1lIFRyYWNlIHN0YXJ0IHRpbWUgc2luY2UgZXBvY2ggaW4gbWlsbGlzZWNcbiAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBkdXJhY3Rpb24gb2YgdGhlIHRyYWNlIGluIG1pbGxpc2VjXG4gICAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB3aGljaCBjYW4gb3B0aW9uYWxseSBob2xkIG1hcHMgb2YgY3VzdG9tIG1ldHJpY3MgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzXG4gICAqL1xuICByZWNvcmQoXG4gICAgc3RhcnRUaW1lOiBudW1iZXIsXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBvcHRpb25zPzoge1xuICAgICAgbWV0cmljcz86IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XG4gICAgICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICB9XG4gICk6IHZvaWQge1xuICAgIGlmIChzdGFydFRpbWUgPD0gMCkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PTlBPU0lUSVZFX1RSQUNFX1NUQVJUX1RJTUUsIHtcbiAgICAgICAgdHJhY2VOYW1lOiB0aGlzLm5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLk5PTlBPU0lUSVZFX1RSQUNFX0RVUkFUSU9OLCB7XG4gICAgICAgIHRyYWNlTmFtZTogdGhpcy5uYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmR1cmF0aW9uVXMgPSBNYXRoLmZsb29yKGR1cmF0aW9uICogMTAwMCk7XG4gICAgdGhpcy5zdGFydFRpbWVVcyA9IE1hdGguZmxvb3Ioc3RhcnRUaW1lICogMTAwMCk7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5hdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLmN1c3RvbUF0dHJpYnV0ZXMgPSB7IC4uLm9wdGlvbnMuYXR0cmlidXRlcyB9O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm1ldHJpY3MpIHtcbiAgICAgIGZvciAoY29uc3QgbWV0cmljTmFtZSBvZiBPYmplY3Qua2V5cyhvcHRpb25zLm1ldHJpY3MpKSB7XG4gICAgICAgIGlmICghaXNOYU4oTnVtYmVyKG9wdGlvbnMubWV0cmljc1ttZXRyaWNOYW1lXSkpKSB7XG4gICAgICAgICAgdGhpcy5jb3VudGVyc1ttZXRyaWNOYW1lXSA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICBOdW1iZXIob3B0aW9ucy5tZXRyaWNzW21ldHJpY05hbWVdKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbG9nVHJhY2UodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVtZW50cyBhIGN1c3RvbSBtZXRyaWMgYnkgYSBjZXJ0YWluIG51bWJlciBvciAxIGlmIG51bWJlciBub3Qgc3BlY2lmaWVkLiBXaWxsIGNyZWF0ZSBhIG5ld1xuICAgKiBjdXN0b20gbWV0cmljIGlmIG9uZSB3aXRoIHRoZSBnaXZlbiBuYW1lIGRvZXMgbm90IGV4aXN0LiBUaGUgdmFsdWUgd2lsbCBiZSBmbG9vcmVkIGRvd24gdG8gYW5cbiAgICogaW50ZWdlci5cbiAgICogQHBhcmFtIGNvdW50ZXIgTmFtZSBvZiB0aGUgY3VzdG9tIG1ldHJpY1xuICAgKiBAcGFyYW0gbnVtQXNJbnRlZ2VyIEluY3JlbWVudCBieSB2YWx1ZVxuICAgKi9cbiAgaW5jcmVtZW50TWV0cmljKGNvdW50ZXI6IHN0cmluZywgbnVtQXNJbnRlZ2VyID0gMSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvdW50ZXJzW2NvdW50ZXJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucHV0TWV0cmljKGNvdW50ZXIsIG51bUFzSW50ZWdlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHV0TWV0cmljKGNvdW50ZXIsIHRoaXMuY291bnRlcnNbY291bnRlcl0gKyBudW1Bc0ludGVnZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgY3VzdG9tIG1ldHJpYyB0byBhIHNwZWNpZmllZCB2YWx1ZS4gV2lsbCBjcmVhdGUgYSBuZXcgY3VzdG9tIG1ldHJpYyBpZiBvbmUgd2l0aCB0aGVcbiAgICogZ2l2ZW4gbmFtZSBkb2VzIG5vdCBleGlzdC4gVGhlIHZhbHVlIHdpbGwgYmUgZmxvb3JlZCBkb3duIHRvIGFuIGludGVnZXIuXG4gICAqIEBwYXJhbSBjb3VudGVyIE5hbWUgb2YgdGhlIGN1c3RvbSBtZXRyaWNcbiAgICogQHBhcmFtIG51bUFzSW50ZWdlciBTZXQgY3VzdG9tIG1ldHJpYyB0byB0aGlzIHZhbHVlXG4gICAqL1xuICBwdXRNZXRyaWMoY291bnRlcjogc3RyaW5nLCBudW1Bc0ludGVnZXI6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpc1ZhbGlkTWV0cmljTmFtZShjb3VudGVyLCB0aGlzLm5hbWUpKSB7XG4gICAgICB0aGlzLmNvdW50ZXJzW2NvdW50ZXJdID0gY29udmVydE1ldHJpY1ZhbHVlVG9JbnRlZ2VyKG51bUFzSW50ZWdlciA/PyAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLklOVkFMSURfQ1VTVE9NX01FVFJJQ19OQU1FLCB7XG4gICAgICAgIGN1c3RvbU1ldHJpY05hbWU6IGNvdW50ZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIG1ldHJpYyBieSB0aGF0IG5hbWUuIElmIGEgY3VzdG9tIG1ldHJpYyB3aXRoIHRoYXQgbmFtZSBkb2VzXG4gICAqIG5vdCBleGlzdCB3aWxsIHJldHVybiB6ZXJvLlxuICAgKiBAcGFyYW0gY291bnRlclxuICAgKi9cbiAgZ2V0TWV0cmljKGNvdW50ZXI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRlcnNbY291bnRlcl0gfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgY3VzdG9tIGF0dHJpYnV0ZSBvZiBhIHRyYWNlIHRvIGEgY2VydGFpbiB2YWx1ZS5cbiAgICogQHBhcmFtIGF0dHJcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBwdXRBdHRyaWJ1dGUoYXR0cjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaXNWYWxpZE5hbWUgPSBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlTmFtZShhdHRyKTtcbiAgICBjb25zdCBpc1ZhbGlkVmFsdWUgPSBpc1ZhbGlkQ3VzdG9tQXR0cmlidXRlVmFsdWUodmFsdWUpO1xuICAgIGlmIChpc1ZhbGlkTmFtZSAmJiBpc1ZhbGlkVmFsdWUpIHtcbiAgICAgIHRoaXMuY3VzdG9tQXR0cmlidXRlc1thdHRyXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUaHJvdyBhcHByb3ByaWF0ZSBlcnJvciB3aGVuIHRoZSBhdHRyaWJ1dGUgbmFtZSBvciB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgIGlmICghaXNWYWxpZE5hbWUpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5JTlZBTElEX0FUVFJJQlVURV9OQU1FLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6IGF0dHJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWlzVmFsaWRWYWx1ZSkge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLklOVkFMSURfQVRUUklCVVRFX1ZBTFVFLCB7XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgYSBjdXN0b20gYXR0cmlidXRlIG9mIGEgdHJhY2UgaXMgc2V0IHRvLlxuICAgKiBAcGFyYW0gYXR0clxuICAgKi9cbiAgZ2V0QXR0cmlidXRlKGF0dHI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tQXR0cmlidXRlc1thdHRyXTtcbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShhdHRyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXN0b21BdHRyaWJ1dGVzW2F0dHJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuY3VzdG9tQXR0cmlidXRlc1thdHRyXTtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5jdXN0b21BdHRyaWJ1dGVzIH07XG4gIH1cblxuICBwcml2YXRlIHNldFN0YXJ0VGltZShzdGFydFRpbWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRUaW1lVXMgPSBzdGFydFRpbWU7XG4gIH1cblxuICBwcml2YXRlIHNldER1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmR1cmF0aW9uVXMgPSBkdXJhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIGFuZCBhc3NpZ25zIHRoZSBkdXJhdGlvbiBhbmQgc3RhcnQgdGltZSBvZiB0aGUgdHJhY2UgdXNpbmcgdGhlIG1lYXN1cmUgcGVyZm9ybWFuY2VcbiAgICogZW50cnkuXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZVRyYWNlTWV0cmljcygpOiB2b2lkIHtcbiAgICBjb25zdCBwZXJmTWVhc3VyZUVudHJpZXMgPSB0aGlzLmFwaS5nZXRFbnRyaWVzQnlOYW1lKHRoaXMudHJhY2VNZWFzdXJlKTtcbiAgICBjb25zdCBwZXJmTWVhc3VyZUVudHJ5ID0gcGVyZk1lYXN1cmVFbnRyaWVzICYmIHBlcmZNZWFzdXJlRW50cmllc1swXTtcbiAgICBpZiAocGVyZk1lYXN1cmVFbnRyeSkge1xuICAgICAgdGhpcy5kdXJhdGlvblVzID0gTWF0aC5mbG9vcihwZXJmTWVhc3VyZUVudHJ5LmR1cmF0aW9uICogMTAwMCk7XG4gICAgICB0aGlzLnN0YXJ0VGltZVVzID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHBlcmZNZWFzdXJlRW50cnkuc3RhcnRUaW1lICsgdGhpcy5hcGkuZ2V0VGltZU9yaWdpbigpKSAqIDEwMDBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBuYXZpZ2F0aW9uVGltaW5ncyBBIHNpbmdsZSBlbGVtZW50IGFycmF5IHdoaWNoIGNvbnRhaW5zIHRoZSBuYXZpZ2F0aW9uVEltaW5nIG9iamVjdCBvZlxuICAgKiB0aGUgcGFnZSBsb2FkXG4gICAqIEBwYXJhbSBwYWludFRpbWluZ3MgQSBhcnJheSB3aGljaCBjb250YWlucyBwYWludFRpbWluZyBvYmplY3Qgb2YgdGhlIHBhZ2UgbG9hZFxuICAgKiBAcGFyYW0gZmlyc3RJbnB1dERlbGF5IEZpcnN0IGlucHV0IGRlbGF5IGluIG1pbGxpc2VjXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlT29iVHJhY2UoXG4gICAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgbmF2aWdhdGlvblRpbWluZ3M6IFBlcmZvcm1hbmNlTmF2aWdhdGlvblRpbWluZ1tdLFxuICAgIHBhaW50VGltaW5nczogUGVyZm9ybWFuY2VFbnRyeVtdLFxuICAgIGZpcnN0SW5wdXREZWxheT86IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb25zdCByb3V0ZSA9IEFwaS5nZXRJbnN0YW5jZSgpLmdldFVybCgpO1xuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHJhY2UgPSBuZXcgVHJhY2UoXG4gICAgICBwZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgICBPT0JfVFJBQ0VfUEFHRV9MT0FEX1BSRUZJWCArIHJvdXRlLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgY29uc3QgdGltZU9yaWdpblVzID0gTWF0aC5mbG9vcihBcGkuZ2V0SW5zdGFuY2UoKS5nZXRUaW1lT3JpZ2luKCkgKiAxMDAwKTtcbiAgICB0cmFjZS5zZXRTdGFydFRpbWUodGltZU9yaWdpblVzKTtcblxuICAgIC8vIG5hdmlnYXRpb25UaW1pbmdzIGluY2x1ZGVzIG9ubHkgb25lIGVsZW1lbnQuXG4gICAgaWYgKG5hdmlnYXRpb25UaW1pbmdzICYmIG5hdmlnYXRpb25UaW1pbmdzWzBdKSB7XG4gICAgICB0cmFjZS5zZXREdXJhdGlvbihNYXRoLmZsb29yKG5hdmlnYXRpb25UaW1pbmdzWzBdLmR1cmF0aW9uICogMTAwMCkpO1xuICAgICAgdHJhY2UucHV0TWV0cmljKFxuICAgICAgICAnZG9tSW50ZXJhY3RpdmUnLFxuICAgICAgICBNYXRoLmZsb29yKG5hdmlnYXRpb25UaW1pbmdzWzBdLmRvbUludGVyYWN0aXZlICogMTAwMClcbiAgICAgICk7XG4gICAgICB0cmFjZS5wdXRNZXRyaWMoXG4gICAgICAgICdkb21Db250ZW50TG9hZGVkRXZlbnRFbmQnLFxuICAgICAgICBNYXRoLmZsb29yKG5hdmlnYXRpb25UaW1pbmdzWzBdLmRvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCAqIDEwMDApXG4gICAgICApO1xuICAgICAgdHJhY2UucHV0TWV0cmljKFxuICAgICAgICAnbG9hZEV2ZW50RW5kJyxcbiAgICAgICAgTWF0aC5mbG9vcihuYXZpZ2F0aW9uVGltaW5nc1swXS5sb2FkRXZlbnRFbmQgKiAxMDAwKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBGSVJTVF9QQUlOVCA9ICdmaXJzdC1wYWludCc7XG4gICAgY29uc3QgRklSU1RfQ09OVEVOVEZVTF9QQUlOVCA9ICdmaXJzdC1jb250ZW50ZnVsLXBhaW50JztcbiAgICBpZiAocGFpbnRUaW1pbmdzKSB7XG4gICAgICBjb25zdCBmaXJzdFBhaW50ID0gcGFpbnRUaW1pbmdzLmZpbmQoXG4gICAgICAgIHBhaW50T2JqZWN0ID0+IHBhaW50T2JqZWN0Lm5hbWUgPT09IEZJUlNUX1BBSU5UXG4gICAgICApO1xuICAgICAgaWYgKGZpcnN0UGFpbnQgJiYgZmlyc3RQYWludC5zdGFydFRpbWUpIHtcbiAgICAgICAgdHJhY2UucHV0TWV0cmljKFxuICAgICAgICAgIEZJUlNUX1BBSU5UX0NPVU5URVJfTkFNRSxcbiAgICAgICAgICBNYXRoLmZsb29yKGZpcnN0UGFpbnQuc3RhcnRUaW1lICogMTAwMClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpcnN0Q29udGVudGZ1bFBhaW50ID0gcGFpbnRUaW1pbmdzLmZpbmQoXG4gICAgICAgIHBhaW50T2JqZWN0ID0+IHBhaW50T2JqZWN0Lm5hbWUgPT09IEZJUlNUX0NPTlRFTlRGVUxfUEFJTlRcbiAgICAgICk7XG4gICAgICBpZiAoZmlyc3RDb250ZW50ZnVsUGFpbnQgJiYgZmlyc3RDb250ZW50ZnVsUGFpbnQuc3RhcnRUaW1lKSB7XG4gICAgICAgIHRyYWNlLnB1dE1ldHJpYyhcbiAgICAgICAgICBGSVJTVF9DT05URU5URlVMX1BBSU5UX0NPVU5URVJfTkFNRSxcbiAgICAgICAgICBNYXRoLmZsb29yKGZpcnN0Q29udGVudGZ1bFBhaW50LnN0YXJ0VGltZSAqIDEwMDApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdElucHV0RGVsYXkpIHtcbiAgICAgICAgdHJhY2UucHV0TWV0cmljKFxuICAgICAgICAgIEZJUlNUX0lOUFVUX0RFTEFZX0NPVU5URVJfTkFNRSxcbiAgICAgICAgICBNYXRoLmZsb29yKGZpcnN0SW5wdXREZWxheSAqIDEwMDApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nVHJhY2UodHJhY2UpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVVzZXJUaW1pbmdUcmFjZShcbiAgICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICBtZWFzdXJlTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHRyYWNlID0gbmV3IFRyYWNlKFxuICAgICAgcGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgICAgbWVhc3VyZU5hbWUsXG4gICAgICBmYWxzZSxcbiAgICAgIG1lYXN1cmVOYW1lXG4gICAgKTtcbiAgICBsb2dUcmFjZSh0cmFjZSk7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlfc2VydmljZSc7XG5pbXBvcnQgeyBsb2dOZXR3b3JrUmVxdWVzdCB9IGZyb20gJy4uL3NlcnZpY2VzL3BlcmZfbG9nZ2VyJztcbmltcG9ydCB7IFBlcmZvcm1hbmNlQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3BlcmYnO1xuXG4vLyBUaGUgb3JkZXIgb2YgdmFsdWVzIG9mIHRoaXMgZW51bSBzaG91bGQgbm90IGJlIGNoYW5nZWQuXG5leHBvcnQgY29uc3QgZW51bSBIdHRwTWV0aG9kIHtcbiAgSFRUUF9NRVRIT0RfVU5LTk9XTiA9IDAsXG4gIEdFVCA9IDEsXG4gIFBVVCA9IDIsXG4gIFBPU1QgPSAzLFxuICBERUxFVEUgPSA0LFxuICBIRUFEID0gNSxcbiAgUEFUQ0ggPSA2LFxuICBPUFRJT05TID0gNyxcbiAgVFJBQ0UgPSA4LFxuICBDT05ORUNUID0gOVxufVxuXG4vLyBEdXJhdGlvbnMgYXJlIGluIG1pY3Jvc2Vjb25kcy5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya1JlcXVlc3Qge1xuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcjtcbiAgdXJsOiBzdHJpbmc7XG4gIGh0dHBNZXRob2Q/OiBIdHRwTWV0aG9kO1xuICByZXF1ZXN0UGF5bG9hZEJ5dGVzPzogbnVtYmVyO1xuICByZXNwb25zZVBheWxvYWRCeXRlcz86IG51bWJlcjtcbiAgaHR0cFJlc3BvbnNlQ29kZT86IG51bWJlcjtcbiAgcmVzcG9uc2VDb250ZW50VHlwZT86IHN0cmluZztcbiAgc3RhcnRUaW1lVXM/OiBudW1iZXI7XG4gIHRpbWVUb1JlcXVlc3RDb21wbGV0ZWRVcz86IG51bWJlcjtcbiAgdGltZVRvUmVzcG9uc2VJbml0aWF0ZWRVcz86IG51bWJlcjtcbiAgdGltZVRvUmVzcG9uc2VDb21wbGV0ZWRVcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ldHdvcmtSZXF1ZXN0RW50cnkoXG4gIHBlcmZvcm1hbmNlQ29udHJvbGxlcjogUGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICBlbnRyeTogUGVyZm9ybWFuY2VFbnRyeVxuKTogdm9pZCB7XG4gIGNvbnN0IHBlcmZvcm1hbmNlRW50cnkgPSBlbnRyeSBhcyBQZXJmb3JtYW5jZVJlc291cmNlVGltaW5nO1xuICBpZiAoIXBlcmZvcm1hbmNlRW50cnkgfHwgcGVyZm9ybWFuY2VFbnRyeS5yZXNwb25zZVN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdGltZU9yaWdpbiA9IEFwaS5nZXRJbnN0YW5jZSgpLmdldFRpbWVPcmlnaW4oKTtcbiAgY29uc3Qgc3RhcnRUaW1lVXMgPSBNYXRoLmZsb29yKFxuICAgIChwZXJmb3JtYW5jZUVudHJ5LnN0YXJ0VGltZSArIHRpbWVPcmlnaW4pICogMTAwMFxuICApO1xuICBjb25zdCB0aW1lVG9SZXNwb25zZUluaXRpYXRlZFVzID0gcGVyZm9ybWFuY2VFbnRyeS5yZXNwb25zZVN0YXJ0XG4gICAgPyBNYXRoLmZsb29yKFxuICAgICAgICAocGVyZm9ybWFuY2VFbnRyeS5yZXNwb25zZVN0YXJ0IC0gcGVyZm9ybWFuY2VFbnRyeS5zdGFydFRpbWUpICogMTAwMFxuICAgICAgKVxuICAgIDogdW5kZWZpbmVkO1xuICBjb25zdCB0aW1lVG9SZXNwb25zZUNvbXBsZXRlZFVzID0gTWF0aC5mbG9vcihcbiAgICAocGVyZm9ybWFuY2VFbnRyeS5yZXNwb25zZUVuZCAtIHBlcmZvcm1hbmNlRW50cnkuc3RhcnRUaW1lKSAqIDEwMDBcbiAgKTtcbiAgLy8gUmVtb3ZlIHRoZSBxdWVyeSBwYXJhbXMgZnJvbSBsb2dnZWQgbmV0d29yayByZXF1ZXN0IHVybC5cbiAgY29uc3QgdXJsID0gcGVyZm9ybWFuY2VFbnRyeS5uYW1lICYmIHBlcmZvcm1hbmNlRW50cnkubmFtZS5zcGxpdCgnPycpWzBdO1xuICBjb25zdCBuZXR3b3JrUmVxdWVzdDogTmV0d29ya1JlcXVlc3QgPSB7XG4gICAgcGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgIHVybCxcbiAgICByZXNwb25zZVBheWxvYWRCeXRlczogcGVyZm9ybWFuY2VFbnRyeS50cmFuc2ZlclNpemUsXG4gICAgc3RhcnRUaW1lVXMsXG4gICAgdGltZVRvUmVzcG9uc2VJbml0aWF0ZWRVcyxcbiAgICB0aW1lVG9SZXNwb25zZUNvbXBsZXRlZFVzXG4gIH07XG5cbiAgbG9nTmV0d29ya1JlcXVlc3QobmV0d29ya1JlcXVlc3QpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFwaSB9IGZyb20gJy4vYXBpX3NlcnZpY2UnO1xuaW1wb3J0IHsgVHJhY2UgfSBmcm9tICcuLi9yZXNvdXJjZXMvdHJhY2UnO1xuaW1wb3J0IHsgY3JlYXRlTmV0d29ya1JlcXVlc3RFbnRyeSB9IGZyb20gJy4uL3Jlc291cmNlcy9uZXR3b3JrX3JlcXVlc3QnO1xuaW1wb3J0IHsgVFJBQ0VfTUVBU1VSRV9QUkVGSVggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0SWlkIH0gZnJvbSAnLi9paWRfc2VydmljZSc7XG5pbXBvcnQgeyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9wZXJmJztcblxuY29uc3QgRklEX1dBSVRfVElNRV9NUyA9IDUwMDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cE9vYlJlc291cmNlcyhcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXJcbik6IHZvaWQge1xuICAvLyBEbyBub3QgaW5pdGlhbGl6ZSB1bmxlc3MgaWlkIGlzIGF2YWlsYWJsZS5cbiAgaWYgKCFnZXRJaWQoKSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBUaGUgbG9hZCBldmVudCBtaWdodCBub3QgaGF2ZSBmaXJlZCB5ZXQsIGFuZCB0aGF0IG1lYW5zIHBlcmZvcm1hbmNlIG5hdmlnYXRpb24gdGltaW5nXG4gIC8vIG9iamVjdCBoYXMgYSBkdXJhdGlvbiBvZiAwLiBUaGUgc2V0dXAgc2hvdWxkIHJ1biBhZnRlciBhbGwgY3VycmVudCB0YXNrcyBpbiBqcyBxdWV1ZS5cbiAgc2V0VGltZW91dCgoKSA9PiBzZXR1cE9vYlRyYWNlcyhwZXJmb3JtYW5jZUNvbnRyb2xsZXIpLCAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiBzZXR1cE5ldHdvcmtSZXF1ZXN0cyhwZXJmb3JtYW5jZUNvbnRyb2xsZXIpLCAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiBzZXR1cFVzZXJUaW1pbmdUcmFjZXMocGVyZm9ybWFuY2VDb250cm9sbGVyKSwgMCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwTmV0d29ya1JlcXVlc3RzKFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlclxuKTogdm9pZCB7XG4gIGNvbnN0IGFwaSA9IEFwaS5nZXRJbnN0YW5jZSgpO1xuICBjb25zdCByZXNvdXJjZXMgPSBhcGkuZ2V0RW50cmllc0J5VHlwZSgncmVzb3VyY2UnKTtcbiAgZm9yIChjb25zdCByZXNvdXJjZSBvZiByZXNvdXJjZXMpIHtcbiAgICBjcmVhdGVOZXR3b3JrUmVxdWVzdEVudHJ5KHBlcmZvcm1hbmNlQ29udHJvbGxlciwgcmVzb3VyY2UpO1xuICB9XG4gIGFwaS5zZXR1cE9ic2VydmVyKCdyZXNvdXJjZScsIGVudHJ5ID0+XG4gICAgY3JlYXRlTmV0d29ya1JlcXVlc3RFbnRyeShwZXJmb3JtYW5jZUNvbnRyb2xsZXIsIGVudHJ5KVxuICApO1xufVxuXG5mdW5jdGlvbiBzZXR1cE9vYlRyYWNlcyhwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcik6IHZvaWQge1xuICBjb25zdCBhcGkgPSBBcGkuZ2V0SW5zdGFuY2UoKTtcbiAgY29uc3QgbmF2aWdhdGlvblRpbWluZ3MgPSBhcGkuZ2V0RW50cmllc0J5VHlwZShcbiAgICAnbmF2aWdhdGlvbidcbiAgKSBhcyBQZXJmb3JtYW5jZU5hdmlnYXRpb25UaW1pbmdbXTtcbiAgY29uc3QgcGFpbnRUaW1pbmdzID0gYXBpLmdldEVudHJpZXNCeVR5cGUoJ3BhaW50Jyk7XG4gIC8vIElmIEZpcnN0IElucHV0IERlc2x5IHBvbHlmaWxsIGlzIGFkZGVkIHRvIHRoZSBwYWdlLCByZXBvcnQgdGhlIGZpZCB2YWx1ZS5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvZmlyc3QtaW5wdXQtZGVsYXlcbiAgaWYgKGFwaS5vbkZpcnN0SW5wdXREZWxheSkge1xuICAgIC8vIElmIHRoZSBmaWQgY2FsbCBiYWNrIGlzIG5vdCBjYWxsZWQgZm9yIGNlcnRhaW4gdGltZSwgY29udGludWUgd2l0aG91dCBpdC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCB0aW1lb3V0SWQ6IGFueSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgVHJhY2UuY3JlYXRlT29iVHJhY2UoXG4gICAgICAgIHBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgICAgICAgbmF2aWdhdGlvblRpbWluZ3MsXG4gICAgICAgIHBhaW50VGltaW5nc1xuICAgICAgKTtcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9LCBGSURfV0FJVF9USU1FX01TKTtcbiAgICBhcGkub25GaXJzdElucHV0RGVsYXkoKGZpZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGltZW91dElkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICBUcmFjZS5jcmVhdGVPb2JUcmFjZShcbiAgICAgICAgICBwZXJmb3JtYW5jZUNvbnRyb2xsZXIsXG4gICAgICAgICAgbmF2aWdhdGlvblRpbWluZ3MsXG4gICAgICAgICAgcGFpbnRUaW1pbmdzLFxuICAgICAgICAgIGZpZFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIFRyYWNlLmNyZWF0ZU9vYlRyYWNlKFxuICAgICAgcGVyZm9ybWFuY2VDb250cm9sbGVyLFxuICAgICAgbmF2aWdhdGlvblRpbWluZ3MsXG4gICAgICBwYWludFRpbWluZ3NcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwVXNlclRpbWluZ1RyYWNlcyhcbiAgcGVyZm9ybWFuY2VDb250cm9sbGVyOiBQZXJmb3JtYW5jZUNvbnRyb2xsZXJcbik6IHZvaWQge1xuICBjb25zdCBhcGkgPSBBcGkuZ2V0SW5zdGFuY2UoKTtcbiAgLy8gUnVuIHRocm91Z2ggdGhlIG1lYXN1cmUgcGVyZm9ybWFuY2UgZW50cmllcyBjb2xsZWN0ZWQgdXAgdG8gdGhpcyBwb2ludC5cbiAgY29uc3QgbWVhc3VyZXMgPSBhcGkuZ2V0RW50cmllc0J5VHlwZSgnbWVhc3VyZScpO1xuICBmb3IgKGNvbnN0IG1lYXN1cmUgb2YgbWVhc3VyZXMpIHtcbiAgICBjcmVhdGVVc2VyVGltaW5nVHJhY2UocGVyZm9ybWFuY2VDb250cm9sbGVyLCBtZWFzdXJlKTtcbiAgfVxuICAvLyBTZXR1cCBhbiBvYnNlcnZlciB0byBjYXB0dXJlIHRoZSBtZWFzdXJlcyBmcm9tIHRoaXMgcG9pbnQgb24uXG4gIGFwaS5zZXR1cE9ic2VydmVyKCdtZWFzdXJlJywgZW50cnkgPT5cbiAgICBjcmVhdGVVc2VyVGltaW5nVHJhY2UocGVyZm9ybWFuY2VDb250cm9sbGVyLCBlbnRyeSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlclRpbWluZ1RyYWNlKFxuICBwZXJmb3JtYW5jZUNvbnRyb2xsZXI6IFBlcmZvcm1hbmNlQ29udHJvbGxlcixcbiAgbWVhc3VyZTogUGVyZm9ybWFuY2VFbnRyeVxuKTogdm9pZCB7XG4gIGNvbnN0IG1lYXN1cmVOYW1lID0gbWVhc3VyZS5uYW1lO1xuICAvLyBEbyBub3QgY3JlYXRlIGEgdHJhY2UsIGlmIHRoZSB1c2VyIHRpbWluZyBtYXJrcyBhbmQgbWVhc3VyZXMgYXJlIGNyZWF0ZWQgYnkgdGhlIHNkayBpdHNlbGYuXG4gIGlmIChcbiAgICBtZWFzdXJlTmFtZS5zdWJzdHJpbmcoMCwgVFJBQ0VfTUVBU1VSRV9QUkVGSVgubGVuZ3RoKSA9PT1cbiAgICBUUkFDRV9NRUFTVVJFX1BSRUZJWFxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgVHJhY2UuY3JlYXRlVXNlclRpbWluZ1RyYWNlKHBlcmZvcm1hbmNlQ29udHJvbGxlciwgbWVhc3VyZU5hbWUpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHNldHVwT29iUmVzb3VyY2VzIH0gZnJvbSAnLi4vc2VydmljZXMvb29iX3Jlc291cmNlc19zZXJ2aWNlJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzX3NlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0SW5pdGlhbGl6YXRpb25Qcm9taXNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5pdGlhbGl6YXRpb25fc2VydmljZSc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlfc2VydmljZSc7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcCB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgX0ZpcmViYXNlSW5zdGFsbGF0aW9uc0ludGVybmFsIH0gZnJvbSAnQGZpcmViYXNlL2luc3RhbGxhdGlvbnMnO1xuaW1wb3J0IHsgUGVyZm9ybWFuY2VTZXR0aW5ncywgRmlyZWJhc2VQZXJmb3JtYW5jZSB9IGZyb20gJy4uL3B1YmxpY190eXBlcyc7XG5pbXBvcnQgeyB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgc2V0dXBUcmFuc3BvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNwb3J0X3NlcnZpY2UnO1xuaW1wb3J0IHsgY29uc29sZUxvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFBlcmZvcm1hbmNlQ29udHJvbGxlciBpbXBsZW1lbnRzIEZpcmViYXNlUGVyZm9ybWFuY2Uge1xuICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgYXBwOiBGaXJlYmFzZUFwcCxcbiAgICByZWFkb25seSBpbnN0YWxsYXRpb25zOiBfRmlyZWJhc2VJbnN0YWxsYXRpb25zSW50ZXJuYWxcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCAqbXVzdCogYmUgY2FsbGVkIGludGVybmFsbHkgYXMgcGFydCBvZiBjcmVhdGluZyBhXG4gICAqIFBlcmZvcm1hbmNlQ29udHJvbGxlciBpbnN0YW5jZS5cbiAgICpcbiAgICogQ3VycmVudGx5IGl0J3Mgbm90IHBvc3NpYmxlIHRvIHBhc3MgdGhlIHNldHRpbmdzIG9iamVjdCB0aHJvdWdoIHRoZVxuICAgKiBjb25zdHJ1Y3RvciB1c2luZyBDb21wb25lbnRzLCBzbyB0aGlzIG1ldGhvZCBleGlzdHMgdG8gYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGRlc2lyZWQgc2V0dGluZ3MsIHRvIGVuc3VyZSBub3RoaW5nIGlzIGNvbGxlY3RlZCB3aXRob3V0IHRoZSB1c2VyJ3NcbiAgICogY29uc2VudC5cbiAgICovXG4gIF9pbml0KHNldHRpbmdzPzogUGVyZm9ybWFuY2VTZXR0aW5ncyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzPy5kYXRhQ29sbGVjdGlvbkVuYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSBzZXR0aW5ncy5kYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XG4gICAgfVxuICAgIGlmIChzZXR0aW5ncz8uaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RydW1lbnRhdGlvbkVuYWJsZWQgPSBzZXR0aW5ncy5pbnN0cnVtZW50YXRpb25FbmFibGVkO1xuICAgIH1cblxuICAgIGlmIChBcGkuZ2V0SW5zdGFuY2UoKS5yZXF1aXJlZEFwaXNBdmFpbGFibGUoKSkge1xuICAgICAgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpXG4gICAgICAgIC50aGVuKGlzQXZhaWxhYmxlID0+IHtcbiAgICAgICAgICBpZiAoaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHNldHVwVHJhbnNwb3J0U2VydmljZSgpO1xuICAgICAgICAgICAgZ2V0SW5pdGlhbGl6YXRpb25Qcm9taXNlKHRoaXMpLnRoZW4oXG4gICAgICAgICAgICAgICgpID0+IHNldHVwT29iUmVzb3VyY2VzKHRoaXMpLFxuICAgICAgICAgICAgICAoKSA9PiBzZXR1cE9vYlJlc291cmNlcyh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlTG9nZ2VyLmluZm8oYEVudmlyb25tZW50IGRvZXNuJ3Qgc3VwcG9ydCBJbmRleGVkREI6ICR7ZXJyb3J9YCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlTG9nZ2VyLmluZm8oXG4gICAgICAgICdGaXJlYmFzZSBQZXJmb3JtYW5jZSBjYW5ub3Qgc3RhcnQgaWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCAnICtcbiAgICAgICAgICAnXCJGZXRjaFwiIGFuZCBcIlByb21pc2VcIiwgb3IgY29va2llcyBhcmUgZGlzYWJsZWQuJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQgaW5zdHJ1bWVudGF0aW9uRW5hYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5pbnN0cnVtZW50YXRpb25FbmFibGVkID0gdmFsO1xuICB9XG4gIGdldCBpbnN0cnVtZW50YXRpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5pbnN0cnVtZW50YXRpb25FbmFibGVkO1xuICB9XG5cbiAgc2V0IGRhdGFDb2xsZWN0aW9uRW5hYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBTZXR0aW5nc1NlcnZpY2UuZ2V0SW5zdGFuY2UoKS5kYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSB2YWw7XG4gIH1cbiAgZ2V0IGRhdGFDb2xsZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gU2V0dGluZ3NTZXJ2aWNlLmdldEluc3RhbmNlKCkuZGF0YUNvbGxlY3Rpb25FbmFibGVkO1xuICB9XG59XG4iLCAiLyoqXG4gKiBGaXJlYmFzZSBQZXJmb3JtYW5jZSBNb25pdG9yaW5nXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgRmlyZWJhc2VQZXJmb3JtYW5jZSxcbiAgUGVyZm9ybWFuY2VTZXR0aW5ncyxcbiAgUGVyZm9ybWFuY2VUcmFjZVxufSBmcm9tICcuL3B1YmxpY190eXBlcyc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBFcnJvckNvZGUgfSBmcm9tICcuL3V0aWxzL2Vycm9ycyc7XG5pbXBvcnQgeyBzZXR1cEFwaSB9IGZyb20gJy4vc2VydmljZXMvYXBpX3NlcnZpY2UnO1xuaW1wb3J0IHsgUGVyZm9ybWFuY2VDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9wZXJmJztcbmltcG9ydCB7XG4gIF9yZWdpc3RlckNvbXBvbmVudCxcbiAgX2dldFByb3ZpZGVyLFxuICByZWdpc3RlclZlcnNpb24sXG4gIEZpcmViYXNlQXBwLFxuICBnZXRBcHBcbn0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQge1xuICBJbnN0YW5jZUZhY3RvcnksXG4gIENvbXBvbmVudENvbnRhaW5lcixcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRUeXBlXG59IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBUcmFjZSB9IGZyb20gJy4vcmVzb3VyY2VzL3RyYWNlJztcbmltcG9ydCAnQGZpcmViYXNlL2luc3RhbGxhdGlvbnMnO1xuaW1wb3J0IHsgZGVlcEVxdWFsLCBnZXRNb2R1bGFySW5zdGFuY2UgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5cbmNvbnN0IERFRkFVTFRfRU5UUllfTkFNRSA9ICdbREVGQVVMVF0nO1xuXG4vKipcbiAqIFJldHVybnMgYSB7QGxpbmsgRmlyZWJhc2VQZXJmb3JtYW5jZX0gaW5zdGFuY2UgZm9yIHRoZSBnaXZlbiBhcHAuXG4gKiBAcGFyYW0gYXBwIC0gVGhlIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSB0byB1c2UuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXJmb3JtYW5jZShcbiAgYXBwOiBGaXJlYmFzZUFwcCA9IGdldEFwcCgpXG4pOiBGaXJlYmFzZVBlcmZvcm1hbmNlIHtcbiAgYXBwID0gZ2V0TW9kdWxhckluc3RhbmNlKGFwcCk7XG4gIGNvbnN0IHByb3ZpZGVyID0gX2dldFByb3ZpZGVyKGFwcCwgJ3BlcmZvcm1hbmNlJyk7XG4gIGNvbnN0IHBlcmZJbnN0YW5jZSA9IHByb3ZpZGVyLmdldEltbWVkaWF0ZSgpIGFzIFBlcmZvcm1hbmNlQ29udHJvbGxlcjtcbiAgcmV0dXJuIHBlcmZJbnN0YW5jZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEge0BsaW5rIEZpcmViYXNlUGVyZm9ybWFuY2V9IGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gYXBwLiBDYW4gb25seSBiZSBjYWxsZWQgb25jZS5cbiAqIEBwYXJhbSBhcHAgLSBUaGUge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IHRvIHVzZS5cbiAqIEBwYXJhbSBzZXR0aW5ncyAtIE9wdGlvbmFsIHNldHRpbmdzIGZvciB0aGUge0BsaW5rIEZpcmViYXNlUGVyZm9ybWFuY2V9IGluc3RhbmNlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVBlcmZvcm1hbmNlKFxuICBhcHA6IEZpcmViYXNlQXBwLFxuICBzZXR0aW5ncz86IFBlcmZvcm1hbmNlU2V0dGluZ3Ncbik6IEZpcmViYXNlUGVyZm9ybWFuY2Uge1xuICBhcHAgPSBnZXRNb2R1bGFySW5zdGFuY2UoYXBwKTtcbiAgY29uc3QgcHJvdmlkZXIgPSBfZ2V0UHJvdmlkZXIoYXBwLCAncGVyZm9ybWFuY2UnKTtcblxuICAvLyB0aHJvdyBpZiBhbiBpbnN0YW5jZSB3YXMgYWxyZWFkeSBjcmVhdGVkLlxuICAvLyBJdCBjb3VsZCBoYXBwZW4gaWYgaW5pdGlhbGl6ZVBlcmZvcm1hbmNlKCkgaXMgY2FsbGVkIG1vcmUgdGhhbiBvbmNlLCBvciBnZXRQZXJmb3JtYW5jZSgpIGlzIGNhbGxlZCBmaXJzdC5cbiAgaWYgKHByb3ZpZGVyLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgIGNvbnN0IGV4aXN0aW5nSW5zdGFuY2UgPSBwcm92aWRlci5nZXRJbW1lZGlhdGUoKTtcbiAgICBjb25zdCBpbml0aWFsU2V0dGluZ3MgPSBwcm92aWRlci5nZXRPcHRpb25zKCkgYXMgUGVyZm9ybWFuY2VTZXR0aW5ncztcbiAgICBpZiAoZGVlcEVxdWFsKGluaXRpYWxTZXR0aW5ncywgc2V0dGluZ3MgPz8ge30pKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdJbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoRXJyb3JDb2RlLkFMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBlcmZJbnN0YW5jZSA9IHByb3ZpZGVyLmluaXRpYWxpemUoe1xuICAgIG9wdGlvbnM6IHNldHRpbmdzXG4gIH0pIGFzIFBlcmZvcm1hbmNlQ29udHJvbGxlcjtcbiAgcmV0dXJuIHBlcmZJbnN0YW5jZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGBQZXJmb3JtYW5jZVRyYWNlYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSBwZXJmb3JtYW5jZSAtIFRoZSB7QGxpbmsgRmlyZWJhc2VQZXJmb3JtYW5jZX0gaW5zdGFuY2UgdG8gdXNlLlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdHJhY2UuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFjZShcbiAgcGVyZm9ybWFuY2U6IEZpcmViYXNlUGVyZm9ybWFuY2UsXG4gIG5hbWU6IHN0cmluZ1xuKTogUGVyZm9ybWFuY2VUcmFjZSB7XG4gIHBlcmZvcm1hbmNlID0gZ2V0TW9kdWxhckluc3RhbmNlKHBlcmZvcm1hbmNlKTtcbiAgcmV0dXJuIG5ldyBUcmFjZShwZXJmb3JtYW5jZSBhcyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIsIG5hbWUpO1xufVxuXG5jb25zdCBmYWN0b3J5OiBJbnN0YW5jZUZhY3Rvcnk8J3BlcmZvcm1hbmNlJz4gPSAoXG4gIGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyLFxuICB7IG9wdGlvbnM6IHNldHRpbmdzIH06IHsgb3B0aW9ucz86IFBlcmZvcm1hbmNlU2V0dGluZ3MgfVxuKSA9PiB7XG4gIC8vIERlcGVuZGVuY2llc1xuICBjb25zdCBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xuICBjb25zdCBpbnN0YWxsYXRpb25zID0gY29udGFpbmVyXG4gICAgLmdldFByb3ZpZGVyKCdpbnN0YWxsYXRpb25zLWludGVybmFsJylcbiAgICAuZ2V0SW1tZWRpYXRlKCk7XG5cbiAgaWYgKGFwcC5uYW1lICE9PSBERUZBVUxUX0VOVFJZX05BTUUpIHtcbiAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShFcnJvckNvZGUuRkJfTk9UX0RFRkFVTFQpO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEVycm9yQ29kZS5OT19XSU5ET1cpO1xuICB9XG4gIHNldHVwQXBpKHdpbmRvdyk7XG4gIGNvbnN0IHBlcmZJbnN0YW5jZSA9IG5ldyBQZXJmb3JtYW5jZUNvbnRyb2xsZXIoYXBwLCBpbnN0YWxsYXRpb25zKTtcbiAgcGVyZkluc3RhbmNlLl9pbml0KHNldHRpbmdzKTtcblxuICByZXR1cm4gcGVyZkluc3RhbmNlO1xufTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJQZXJmb3JtYW5jZSgpOiB2b2lkIHtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50KFxuICAgIG5ldyBDb21wb25lbnQoJ3BlcmZvcm1hbmNlJywgZmFjdG9yeSwgQ29tcG9uZW50VHlwZS5QVUJMSUMpXG4gICk7XG4gIHJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uKTtcbiAgLy8gQlVJTERfVEFSR0VUIHdpbGwgYmUgcmVwbGFjZWQgYnkgdmFsdWVzIGxpa2UgZXNtNSwgZXNtMjAxNywgY2pzNSwgZXRjIGR1cmluZyB0aGUgY29tcGlsYXRpb25cbiAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdfX0JVSUxEX1RBUkdFVF9fJyk7XG59XG5cbnJlZ2lzdGVyUGVyZm9ybWFuY2UoKTtcblxuZXhwb3J0IHsgRmlyZWJhc2VQZXJmb3JtYW5jZSwgUGVyZm9ybWFuY2VTZXR0aW5ncywgUGVyZm9ybWFuY2VUcmFjZSB9O1xuIiwgImltcG9ydCB7IGZpbmRfcG9pbnRzX25lZWRlZCwgaGxfbnVtLCBvbF9udW0gfSBmcm9tIFwiLi9ob21lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRfc3lzX3RoZW1lKCkge1xuXG4gIHZhciByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuXG4gIGNvbnN0IGRhcmtUaGVtZU1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xuICBpZiAoZGFya1RoZW1lTXEubWF0Y2hlcykge1xuICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdoaXRlXCIsIFwiYmxhY2tcIik7XG4gICAgci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmxhY2tcIiwgXCJ3aGl0ZVwiKTtcblxuICAgIGNvbnN0IGN5YW5fdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbmZvX291dHB1dFwiKTtcblxuICAgIGN5YW5fdGV4dC5mb3JFYWNoKHRleHQgPT4ge1xuICAgICAgdGV4dC5zdHlsZS5jb2xvciA9IFwiY3lhblwiO1xuICAgIH0pO1xuXG4gIH1cbiAgZWxzZSB7XG4gICAgci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0td2hpdGVcIiwgXCJ3aGl0ZVwiKTtcbiAgICByLnN0eWxlLnNldFByb3BlcnR5KFwiLS1ibGFja1wiLCBcImJsYWNrXCIpO1xuICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vbF9obF9tYXRoc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaXNfaGxfbWF0aHMpO1xuXG5leHBvcnQgdmFyIGFkZF8yNSA9IDI1O1xudmFyIGlzX2hsX21hdGhzX2NvdW50ZXIgPSAxO1xudmFyIGNvdW50ZXIgPSAxO1xuZnVuY3Rpb24gaXNfaGxfbWF0aHMoKSB7XG4gIHZhciBib29sX2hsX21hdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29sX2hsX21hdGhzXCIpO1xuICB2YXIgYWRkaW5nXzI1X3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV90ZXh0XCIpO1xuICBpZiAoY291bnRlciA9PSAwKSB7XG4gICAgYm9vbF9obF9tYXRocy5pbm5lckhUTUwgPSBcIlllc1wiO1xuICAgIGFkZGluZ18yNV90ZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS50cmFuc2l0aW9uID0gXCIwLjJzXCI7XG4gICAgYWRkXzI1ID0gMjU7XG4gICAgY291bnRlciA9IDE7XG5cbiAgfSBlbHNlIHtcbiAgICBib29sX2hsX21hdGhzLmlubmVySFRNTCA9IFwiTm9cIjtcbiAgICBhZGRpbmdfMjVfdGV4dC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgYWRkXzI1ID0gMDtcbiAgICBjb3VudGVyID0gMDtcbiAgfVxuICBmaW5kX3BvaW50c19uZWVkZWQoKTtcbiAgaWYgKGlzX2hsX21hdGhzX2NvdW50ZXIgPiAxKSB7XG4gICAgYm9vbF9obF9tYXRocy5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWQtYnV0dG9uXCIpO1xuICB9XG4gIGlzX2hsX21hdGhzX2NvdW50ZXIgKz0gMTtcbn1cbmlzX2hsX21hdGhzKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGN2cFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaXNfbGN2cCk7XG52YXIgaXNfbGN2cF9jb3VudGVyID0gMTtcbnZhciBsY3ZwX2NvdW50ZXIgPSAxO1xudmFyIGxjdnA7XG5mdW5jdGlvbiBpc19sY3ZwKCkge1xuICB2YXIgbGN2cF9idXR0b25fdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGN2cFwiKTtcbiAgdmFyIGxjdnBfdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGN2cF90ZXh0XCIpO1xuICBpZiAobGN2cF9jb3VudGVyID09IDApIHtcbiAgICBsY3ZwX2J1dHRvbl90ZXh0LmlubmVySFRNTCA9IFwiWWVzXCI7XG4gICAgbGN2cF90ZXh0LmlubmVySFRNTCA9IFwiRG9pbmcgTENWUCBtb2R1bGVzXCI7XG4gICAgbGN2cF90ZXh0LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICBsY3ZwX3RleHQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMC4yc1wiO1xuICAgIGxjdnBfY291bnRlciA9IDE7XG4gICAgbGN2cCA9IHRydWU7XG5cbiAgICBsY3ZwX2J1dHRvbl90ZXh0LmNsYXNzTGlzdC50b2dnbGUoXCJyZWQtYm9yZGVyc1wiKTtcbiAgfSBlbHNlIHtcbiAgICBsY3ZwX2J1dHRvbl90ZXh0LmlubmVySFRNTCA9IFwiTm9cIjtcbiAgICBsY3ZwX3RleHQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGxjdnBfY291bnRlciA9IDA7XG4gICAgbGN2cCA9IGZhbHNlO1xuICB9XG5cbiAgZmluZF9wb2ludHNfbmVlZGVkKCk7XG4gIGlmIChpc19sY3ZwX2NvdW50ZXIgPiAxKSB7XG4gICAgbGN2cF9idXR0b25fdGV4dC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWQtYnV0dG9uXCIpO1xuICB9XG4gIGlzX2xjdnBfY291bnRlciArPSAxO1xuICByZXR1cm4gbGN2cDtcbn1cblxuaXNfbGN2cCgpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGluZ18yNV9jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5mdW5jdGlvbiBhZGp1c3RvcihsZXR0ZXJfZ3JhZGVzKSB7XG4gIHZhciBDSEFOR0VBQkxFUyA9IFtcImg1XCIsIFwiaDZcIiwgXCJoN1wiLCBcIm8xXCIsIFwibzJcIiwgXCJvM1wiXTtcbiAgdmFyIEhMX1NVQlMgPSBbXCJoMVwiLCBcImgyXCIsIFwiaDNcIiwgXCJoNFwiLCBcImg1XCIsIFwiaDZcIiwgXCJoN1wiXTtcblxuICB2YXIgY291bnRlZF9obCA9IDA7XG4gIHZhciBjb3VudGVkX29sID0gMDtcblxuICB2YXIgZGljdF9jaGFuZ2VhYmxlcyA9IHtcbiAgICBcImg1XCI6IFwibzFcIixcbiAgICBcImg2XCI6IFwibzJcIixcbiAgICBcImg3XCI6IFwibzNcIixcbiAgICBcIm8xXCI6IFwiaDVcIixcbiAgICBcIm8yXCI6IFwiaDZcIixcbiAgICBcIm8zXCI6IFwiaDdcIixcbiAgfTtcblxuICB2YXIgaGxfaW5kZXhfY2hhbmdlYWJsZXMgPSBbXTtcbiAgdmFyIG9sX2luZGV4X2NoYW5nZWFibGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZXR0ZXJfZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBsZXR0ZXJfZ3JhZGVzW2ldO1xuICAgIGlmIChjdXJyZW50IGluIGRpY3RfY2hhbmdlYWJsZXMpIHtcbiAgICAgIGlmIChjdXJyZW50IGluIENIQU5HRUFCTEVTKSB7XG4gICAgICAgIGhsX2luZGV4X2NoYW5nZWFibGVzLnB1c2goaSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb2xfaW5kZXhfY2hhbmdlYWJsZXMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoSExfU1VCUy5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgY291bnRlZF9obCArPSAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvdW50ZWRfb2wgKz0gMTtcbiAgICB9XG4gIH1cblxuICB2YXIgbWlzc19tYXRjaGluZ19jb3VudHMgPSBjb3VudGVkX2hsICE9IGhsX251bSAmJiBjb3VudGVkX29sICE9IG9sX251bTtcblxuICBpZiAobWlzc19tYXRjaGluZ19jb3VudHMpIHtcbiAgICB2YXIgbmVlZGVkX2hsID0gaGxfbnVtIC0gY291bnRlZF9obDtcbiAgICB2YXIgbmVlZGVkX29sID0gb2xfbnVtIC0gY291bnRlZF9vbDtcblxuICAgIGlmIChuZWVkZWRfaGwgPCAwKSB7XG4gICAgICBuZWVkZWRfaGwgPSAwO1xuICAgIH1cbiAgICBpZiAobmVlZGVkX29sIDwgMCkge1xuICAgICAgbmVlZGVkX29sID0gMDtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmdlc19uZWVkZWQgPSBNYXRoLm1heChuZWVkZWRfaGwsIG5lZWRlZF9vbCk7XG4gICAgdmFyIG9nX2dyYWRlO1xuICAgIHZhciBjaGFuZ2VkX2dyYWRlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBjaGFyZ2VzX25lZWRlZDsgaSsrKSB7XG5cbiAgICAgIHZhciBpbmRleCA9IG9sX2luZGV4X2NoYW5nZWFibGVzW2ldO1xuICAgICAgb2dfZ3JhZGUgPSBsZXR0ZXJfZ3JhZGVzW2luZGV4XTtcblxuICAgICAgY2hhbmdlZF9ncmFkZSA9IGRpY3RfY2hhbmdlYWJsZXNbb2dfZ3JhZGVdO1xuICAgICAgbGV0dGVyX2dyYWRlc1tpbmRleF0gPSBjaGFuZ2VkX2dyYWRlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsY3ZwKSB7XG4gICAgdmFyIGxjdnBfbW9kdWxlcyA9IHtcbiAgICAgIDY2OiBcIkRpc3RpbmN0aW9uXCIsXG4gICAgICA0NjogXCJNZXJpdFwiLFxuICAgICAgMjg6IFwiUGFzc1wiXG4gICAgfTtcblxuICAgIHZhciBsY3ZwX2dyYWRlcyA9IFtcImg0XCIsIFwiaDZcIiwgXCJvMlwiLCBcIm80XCJdO1xuXG4gICAgdmFyIGxjdnBfcG9pbnRzID0ge1xuICAgICAgXCJoNFwiOiA2NixcbiAgICAgIFwiaDZcIjogNDYsXG4gICAgICBcIm8yXCI6IDQ2LFxuICAgICAgXCJvNFwiOiAyOFxuICAgIH07XG5cbiAgICB2YXIgY29sbGVjdGVkX2xjdnBfcG9pbnRzID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IGxldHRlcl9ncmFkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBsZXR0ZXJfZ3JhZGVzW2ldO1xuICAgICAgaWYgKGxjdnBfZ3JhZGVzLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5wdXNoKGxjdnBfcG9pbnRzW2N1cnJlbnRdKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb2xsZWN0ZWRfbGN2cF9wb2ludHMucHVzaCg5OTkpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbWluX2xjdnBfcG9pbnQgPSBNYXRoLm1pbiguLi5jb2xsZWN0ZWRfbGN2cF9wb2ludHMpO1xuICAgIHZhciBtaW5fbGN2cF9pbmRleCA9IGNvbGxlY3RlZF9sY3ZwX3BvaW50cy5pbmRleE9mKG1pbl9sY3ZwX3BvaW50KTtcbiAgICB2YXIgdmFsaWRfbGN2cF9jaGFuZ2UgPSBtaW5fbGN2cF9wb2ludCAhPSA5OTk7XG5cbiAgICBpZiAodmFsaWRfbGN2cF9jaGFuZ2UpIHtcbiAgICAgIGxldHRlcl9ncmFkZXNbbWluX2xjdnBfaW5kZXhdID0gbGN2cF9tb2R1bGVzW21pbl9sY3ZwX3BvaW50XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGV0dGVyX2dyYWRlcztcbn1cblxuLy8gZ3JhZGUgYXZlcmFnZSBhbmQgcG9pbnRzIHRvIGdyYWRlcyBhcyBsaXN0IG9mIG51bWJlcnNcbmV4cG9ydCBmdW5jdGlvbiBnYXJfYW5kX3B0Zyhwb2ludHNfbmVlZGVkKSB7XG5cbiAgcG9pbnRzX25lZWRlZCA9IHBvaW50c19uZWVkZWQuc29ydCgpO1xuXG4gIHZhciBtaXhlZF9yYW5rcyA9IHtcbiAgICAxMDA6IFwiaDFcIixcbiAgICA4ODogXCJoMlwiLFxuICAgIDc3OiBcImgzXCIsXG4gICAgNjY6IFwiaDRcIixcblxuICAgIDU2OiBcImg1L28xXCIsXG4gICAgNDY6IFwiaDYvbzJcIixcbiAgICAzNzogXCJoNy9vM1wiLFxuICAgIDI4OiBcIm80XCIsXG4gICAgMjA6IFwibzVcIixcbiAgICAxMjogXCJvNlwiLFxuICB9O1xuXG4gIGlmIChobF9udW0gPiAwKSB7XG4gICAgbWl4ZWRfcmFua3NbNTZdID0gXCJoNVwiO1xuICAgIG1peGVkX3JhbmtzWzQ2XSA9IFwiaDZcIjtcbiAgICBtaXhlZF9yYW5rc1szN10gPSBcImg3XCI7XG4gIH1cblxuICBpZiAob2xfbnVtID4gMCkge1xuICAgIG1peGVkX3JhbmtzWzU2XSA9IFwibzFcIjtcbiAgICBtaXhlZF9yYW5rc1s0Nl0gPSBcIm8yXCI7XG4gICAgbWl4ZWRfcmFua3NbMzddID0gXCJvM1wiO1xuICB9XG5cbiAgdmFyIHJhbmtzID0ge1xuICAgIFwiaDFcIjogOTAsXG4gICAgXCJoMlwiOiA4MCxcbiAgICBcImgzXCI6IDcwLFxuICAgIFwiaDRcIjogNjAsXG4gICAgXCJoNVwiOiA1NixcbiAgICBcImg2XCI6IDQ2LFxuICAgIFwiaDdcIjogMzcsXG5cbiAgICBcIkRpc3RpbmN0aW9uXCI6IDY2LFxuICAgIFwiTWVyaXRcIjogNDYsXG4gICAgXCJQYXNzXCI6IDI4LFxuXG4gICAgXCJvMVwiOiA1NixcbiAgICBcIm8yXCI6IDQ2LFxuICAgIFwibzNcIjogMzcsXG4gICAgXCJvNFwiOiAyOCxcbiAgICBcIm81XCI6IDIwLFxuICAgIFwibzZcIjogMTIsXG4gIH07XG5cbiAgaWYgKGhsX251bSA+IDApIHtcbiAgICByYW5rc1tcImg1L28xXCJdID0gNTA7XG4gICAgcmFua3NbXCJoNi9vMlwiXSA9IDQwO1xuICAgIHJhbmtzW1wiaDcvbzNcIl0gPSAzMDtcbiAgfSBlbHNlIHtcbiAgICByYW5rc1tcImg1L28xXCJdID0gOTA7XG4gICAgcmFua3NbXCJoNi9vMlwiXSA9IDgwO1xuICAgIHJhbmtzW1wiaDcvbzNcIl0gPSA3MDtcbiAgfVxuXG4gIHZhciBncmFkZXNfc291bHRpb24gPSBbXTtcbiAgdmFyIHRvdGFsID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHNfbmVlZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50c19uZWVkZWRbaV0gIT0gMjUpIHtcbiAgICAgIGdyYWRlc19zb3VsdGlvbi5wdXNoKG1peGVkX3JhbmtzW3BvaW50c19uZWVkZWRbaV1dKTtcbiAgICAgIHRvdGFsICs9IHJhbmtzW21peGVkX3JhbmtzW3BvaW50c19uZWVkZWRbaV1dXTtcbiAgICB9XG4gIH1cbiAgdG90YWwgPSB0b3RhbCAvIChobF9udW0gKyBvbF9udW0pO1xuICB2YXIgcGVyY2VudGFnZV9hdmcgPSBTdHJpbmcoTWF0aC5yb3VuZCh0b3RhbCkpICsgXCIlXCI7XG4gIGdyYWRlc19zb3VsdGlvbiA9IGFkanVzdG9yKGdyYWRlc19zb3VsdGlvbik7XG5cbiAgcmV0dXJuIFtwZXJjZW50YWdlX2F2ZywgZ3JhZGVzX3NvdWx0aW9uXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlfcGx1c18yNShib29sX2hsX21hdGhzKSB7XG4gIHZhciBhZGRpbmdfMjVfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpbmdfMjVfY29udGFpbmVyXCIpO1xuICBpZiAoYm9vbF9obF9tYXRocykge1xuICAgIGFkZGluZ18yNV9jb250YWluZXIuc3R5bGUgPSBcImRpc3BsYXk6IGJsb2NrO2NvbG9yOiAjMDA2NmZmXCI7XG4gIH0gZWxzZSB7XG4gICAgYWRkaW5nXzI1X2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZF9jb21tYXMoZ3JhZGVzKSB7XG4gIGdyYWRlcyA9IGdyYWRlcy50b1N0cmluZygpO1xuICBncmFkZXMgPSBncmFkZXMucmVwbGFjZUFsbChcIixcIiwgXCI8c3Ryb25nIGNsYXNzPVxcXCJpbXBvcnRhbnQtcmVkXFxcIj4sPC9zdHJvbmc+XCIpO1xuXG4gIHJldHVybiBncmFkZXM7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZV9jaGFuZ2UoZ3JhZGVzLCBpbmRleCwgbWF0aHNfcGx1c18yNSkge1xuICBjb25zdCBpc19pbl9kaWN0ID0gWzEyLCAyMCwgMjgsIDM3LCA0NiwgNTYsIDY2LCA3NywgODgsIDEwMF07XG4gIHZhciBkaWN0X2NoYW5nZWFibGVzID0ge1xuICAgIDEyOiAyMCxcbiAgICAyMDogMjgsXG4gICAgMjg6IDM3LFxuICAgIDM3OiA0NixcbiAgICA0NjogNTYsXG4gICAgNTY6IDY2LFxuICAgIDY2OiA3NyxcbiAgICA3NzogODgsXG4gICAgODg6IDEwMFxuICB9O1xuXG4gIGlmIChpc19pbl9kaWN0LmluY2x1ZGVzKGdyYWRlc1tpbmRleF0pKSB7XG4gICAgZ3JhZGVzW2luZGV4XSA9IGRpY3RfY2hhbmdlYWJsZXNbZ3JhZGVzW2luZGV4XV07XG4gIH1cbiAgaWYgKG1hdGhzX3BsdXNfMjUgJiYgKGdyYWRlcy5pbmNsdWRlcygyNSkpID09IGZhbHNlKSB7XG4gICAgZ3JhZGVzLnB1c2goMjUpO1xuICB9XG4gIHJldHVybiBncmFkZXM7XG59XG5cbmZ1bmN0aW9uIHN1bShhcnJheSkge1xuICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsID0+ICtlbCkucmVkdWNlKChhY2MsIGN2KSA9PiBhY2MgKyBjdiwgMCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKSB7XG4gIHZhciBncmFkZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBobF9zdWJzOyBpKyspIHtcbiAgICBncmFkZXMucHVzaCgzNyk7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IG9sX3N1YnM7IGkrKykge1xuICAgIGdyYWRlcy5wdXNoKDEyKTtcbiAgfVxuICByZXR1cm4gZ3JhZGVzO1xufVxuXG5mdW5jdGlvbiBoaWdoZXN0X3BvaW50c19wb3NzKGhsX3N1YnMsIG9sX3N1YnMsIG1hdGhzX3BsdXNfMjUpIHtcbiAgdmFyIGNvdW50ZXIgPSAwO1xuICBjb3VudGVyICs9ICgxMDAgKiBobF9zdWJzKSArICg1NiAqIG9sX3N1YnMpO1xuICBpZiAobWF0aHNfcGx1c18yNSkge1xuICAgIGNvdW50ZXIgKz0gMjU7XG4gIH1cblxuICByZXR1cm4gY291bnRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4odGFyZ2V0LCBobF9zdWJzLCBvbF9zdWJzLCBtYXRoc19wbHVzXzI1KSB7XG4gIHZhciB0b3RhbF9zdWJzID0gaGxfc3VicyArIG9sX3N1YnM7XG4gIHZhciBjdXJyZW50X2dyYWRlcyA9IHN0YXJ0aW5nX2dyYWRlcyhobF9zdWJzLCBvbF9zdWJzKTtcbiAgdmFyIGN1cnJlbnRfcG9pbnRzID0gc3VtKGN1cnJlbnRfZ3JhZGVzKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIG1heF9saW1pdCA9IGhpZ2hlc3RfcG9pbnRzX3Bvc3MoaGxfc3Vicywgb2xfc3VicywgbWF0aHNfcGx1c18yNSk7XG4gIHZhciB3aXRoaW5fcmFuZ2UgPSBjdXJyZW50X3BvaW50cyA8PSBtYXhfbGltaXQgJiYgdGFyZ2V0IDw9IG1heF9saW1pdCAmJiAoY3VycmVudF9wb2ludHMgPCB0YXJnZXQpO1xuXG4gIHdoaWxlICh3aXRoaW5fcmFuZ2UpIHtcbiAgICBjdXJyZW50X2dyYWRlcyA9IHNpbmdsZV9jaGFuZ2UoY3VycmVudF9ncmFkZXMsIGluZGV4LCBtYXRoc19wbHVzXzI1KTtcbiAgICBjdXJyZW50X3BvaW50cyA9IHN1bShjdXJyZW50X2dyYWRlcyk7XG4gICAgd2l0aGluX3JhbmdlID0gY3VycmVudF9wb2ludHMgPD0gbWF4X2xpbWl0ICYmIHRhcmdldCA8PSBtYXhfbGltaXQgJiYgKGN1cnJlbnRfcG9pbnRzIDwgdGFyZ2V0KTtcbiAgICBpbmRleCArPSAxO1xuXG4gICAgaWYgKGluZGV4ID09IHRvdGFsX3N1YnMpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBpZiAoY3VycmVudF9wb2ludHMgPCB0YXJnZXQpIHtcbiAgICBjdXJyZW50X2dyYWRlcyA9IFtdO1xuICAgIGN1cnJlbnRfcG9pbnRzID0gW107XG4gIH1cbiAgcmV0dXJuIFtjdXJyZW50X2dyYWRlcywgY3VycmVudF9wb2ludHNdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVfaW5wdXRzKCkge1xuICB2YXIgdGFyZ2V0X2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRfdGV4dFwiKTtcbiAgdGFyZ2V0X2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmluZF9wb2ludHNfbmVlZGVkKCk7XG4gIH0pO1xuXG4gIHZhciBobF9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGxfc3Vic190ZXh0XCIpO1xuICBobF9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbmRfcG9pbnRzX25lZWRlZCgpO1xuICB9KTtcblxuICB2YXIgb2xfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sX3N1YnNfdGV4dFwiKTtcbiAgb2xfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmaW5kX3BvaW50c19uZWVkZWQoKTtcbiAgfSk7XG59XG5cbnVwZGF0ZV9pbnB1dHMoKTtcblxuZnVuY3Rpb24gbW90aXZhdGUoKSB7XG4gIHNlY29uZHMgKz0gMTtcbiAgaWYgKDU5IDw9IHNlY29uZHMgJiYgc2Vjb25kcyA8PSA2MCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWluZm9cIikuc3JjID0gXCJpbWFnZXMvam9rZS53ZWJwXCI7XG4gIH1cbiAgZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctaW5mb1wiKS5zcmMgPSBcImltYWdlcy9wb2ludHMtc3lzdGVtLndlYnBcIjtcbiAgfVxuXG4gIGlmIChzZWNvbmRzID4gNjApIHtcbiAgICBzZWNvbmRzID0gMDtcbiAgfVxufVxuXG52YXIgc2Vjb25kcyA9IDA7XG52YXIgZHQgPSBuZXcgRGF0ZSgpO1xudmFyIG1vbnRoID0gZHQuZ2V0TW9udGgoKSArIDE7IC8vIGNhdXNlIG9mIDAgaW5kZXhpbmcgb2YgdGhlIDEyIG1vbnRocyBiZWNvbWVzIDAgLSAxMVxuLy8gdGhpcyB3aWxsIG9ubHkgYWN0aXZhdGUgaW4gbWF5IG5leHQgeWVhciBpJ2xsIHNldCBpdCB0byBtYXkgYW5kIGp1bmVcbmlmIChbNSwgNl0uaW5jbHVkZXMobW9udGgpKSB7XG4gIHNldEludGVydmFsKG1vdGl2YXRlLCAxMDAwKTtcbiAgbW90aXZhdGUoKTtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldFBlcmZvcm1hbmNlIH0gZnJvbSBcImZpcmViYXNlL3BlcmZvcm1hbmNlXCI7XHJcbmltcG9ydCB7IGFkZF8yNSwgbWFpbiwgZ2FyX2FuZF9wdGcsIHJlZF9jb21tYXMsIGRpc3BsYXlfcGx1c18yNSwgc2V0X3N5c190aGVtZSB9IGZyb20gXCIuL2RvbS1zdXBwb3J0XCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAvLyB0bGRyOyB0aGVyZVwicyBwcm9iIG5vIG5lZWQgdG8gdGVsbCBtZSB0aGF0IG15IGFwaWtleSBpcyBleHBvc2VkIChub3QgdGhhdCBpIGRvbid0IGxpa2UgZmVlZGJhY2sgb3IgZmFuIGludGVyYWN0aW9uLi4pIFxyXG4gIGFwaUtleTogXCJBSXphU3lCbnBFLVlsS0t2SHdFOXBpM0N3aEtmMVRxN250aFB5Y0VcIiwgLy8geW91IHRoZXJlISBldmVuIGpzIG9iZnVzY2F0aW9uIGNhblwidCBmdWxseSBoaWRlIHRoaXMga2V5IGFuZCB0aGUgY2xpZW50IHNpZGUgbmVlZHMgYWNjZXNzIHRvIHRoaXMgdG8gY29ycmVjdGx5IHJ1biBhbmQganVzdCBoYXZpbmcgdGhpcyBrZXkgaXNuXCJ0IGVub3VnaCB0byBjYXVzZSBhbnkga2luZCBvZiBkYW1hZ2UgYmVjYXVzZSBhbiBpbXBvc3RlciB3b3VsZCBuZWVkIG1vcmUgdGhhbiBqdXN0IHRoZSBrZXkgdG8gZG8gYW55dGhpbmcgb2YgZGFtYWdlIGluIG15IHBhcnRpY3VsYXIgY2FzZSBvciB0byBiZSBhYmxlIHRvIGFjY2VzcyBhbnkga2luZCBvZiBzZW5zaXRpdmUgaW5mb3JtYXRpb24gaW4gYWRkaXRpb24gaXQgd2FzIGJlZW4gbGltaXRlZCBvbiB0aGUgc2VydmVyIHNpZGVcclxuICBhdXRoRG9tYWluOiBcImNhb3BvaW50cy1pbmZvLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY2FvcG9pbnRzLWluZm8tZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxyXG4gIHByb2plY3RJZDogXCJjYW9wb2ludHMtaW5mb1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiY2FvcG9pbnRzLWluZm8uYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2MTUxNTk0MTg3NDRcIixcclxuICBhcHBJZDogXCIxOjYxNTE1OTQxODc0NDp3ZWI6MzU5Nzg0NjlmOTJiOTBiNWM5ODI4ZFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy0wODM4M0RDOVBDXCJcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5nZXRQZXJmb3JtYW5jZShhcHApO1xyXG5cclxuc2V0X3N5c190aGVtZSgpO1xyXG52YXIgdGFyZ2V0X251bTtcclxuZXhwb3J0IHZhciBobF9udW07XHJcbmV4cG9ydCB2YXIgb2xfbnVtO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGF1dG9faW5wdXQodGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0pIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldF90ZXh0XCIpLnZhbHVlID0gdGFyZ2V0X251bTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhsX3N1YnNfdGV4dFwiKS52YWx1ZSA9IGhsX251bTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sX3N1YnNfdGV4dFwiKS52YWx1ZSA9IG9sX251bTtcclxufVxyXG5cclxuLy8gVVNFIHNlc3Npb25TdG9yYWdlICEhISEhISEhISEhISEhXHJcbmZ1bmN0aW9uIGtlZXBfaW5wdXRzKHRhcmdldF9udW0sIGhsX251bSwgb2xfbnVtKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXJnZXRfbnVtXCIsIHRhcmdldF9udW0pO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGxfbnVtXCIsIGhsX251bSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvbF9udW1cIiwgb2xfbnVtKTtcclxuXHJcbiAgdGFyZ2V0X251bSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFyZ2V0X251bVwiKTtcclxuICBobF9udW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhsX251bVwiKTtcclxuICBvbF9udW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm9sX251bVwiKTtcclxuXHJcbiAgYXV0b19pbnB1dCh0YXJnZXRfbnVtLCBobF9udW0sIG9sX251bSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZF9pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kX3BvaW50c19uZWVkZWQoKSB7XHJcbiAgdGFyZ2V0X251bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldF90ZXh0XCIpLnZhbHVlKTtcclxuICBobF9udW0gPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJobF9zdWJzX3RleHRcIikudmFsdWUpO1xyXG4gIG9sX251bSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sX3N1YnNfdGV4dFwiKS52YWx1ZSk7XHJcblxyXG4gIC8vIGNoZWNrIGZvciBpbnZhbGlkIGlucHV0XHJcbiAgdmFyIGludmFsaWRfdGFyZ2V0X2lucHV0ID0gKHRhcmdldF9udW0gPD0gMCkgfHwgKHRhcmdldF9udW0gPiA2MjUpO1xyXG4gIHZhciBpbnZhbGlkX3N1YnNfaW5wdXQgPSAoaGxfbnVtIDwgMCkgfHwgKG9sX251bSA8IDApIHx8IChobF9udW0gPiA2KSB8fCAob2xfbnVtID4gNikgfHwgKChobF9udW0gKyBvbF9udW0pID4gNik7XHJcbiAgdmFyIG1heF9wdHMgPSAoaGxfbnVtICogMTAwKSArIChvbF9udW0gKiA1NikgKyBhZGRfMjU7XHJcbiAgdmFyIGludmFsaWRfcmFuZ2UgPSAobWF4X3B0cyA+PSB0YXJnZXRfbnVtKSA9PSBmYWxzZTtcclxuXHJcbiAgY29uc3QgcmFuZ2VfZXJyb3JfbXNnID0gYEl0XCJzIGltcG9zc2libGUgdG8gYWNoaWV2ZSAke3RhcmdldF9udW19IENBTyBwb2ludHMgd2l0aCAke2hsX251bX0gaGlnaGVyLWxldmVsIHN1YmplY3RzIGFuZCAke29sX251bX0gb3JkaW5hcnktbGV2ZWwgc3ViamVjdHMuYDtcclxuICBjb25zdCBwdHNfZXJyb3JfbXNnID0gXCJZb3VyIGlucHV0dGVkIENBTyBwb2ludHMgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDYyNS5cIjtcclxuICBjb25zdCBzdWJzX2Vycm9yX21zaCA9IFwiVGhpcyBjYWxjdWxhdG9yIHdpbGwgbm90IGFsbG93IGZvciBtb3JlIHRoYW4gNiBzdWJqZWN0cyBpbiB0b3RhbCBhcyBpbnB1dHMuXCI7XHJcblxyXG4gIHZhciBlcnJvcl9zdGF0dXMgPSBcIlwiO1xyXG5cclxuICBpZiAoaW52YWxpZF9yYW5nZSkge1xyXG4gICAgZXJyb3Jfc3RhdHVzICs9IHJhbmdlX2Vycm9yX21zZyArIFwiXFxuXCI7XHJcbiAgfSBpZiAoaW52YWxpZF9zdWJzX2lucHV0KSB7XHJcbiAgICBlcnJvcl9zdGF0dXMgKz0gc3Vic19lcnJvcl9tc2ggKyBcIlxcblwiO1xyXG4gIH1cclxuICBpZiAoaW52YWxpZF90YXJnZXRfaW5wdXQpIHtcclxuICAgIGVycm9yX3N0YXR1cyArPSBwdHNfZXJyb3JfbXNnICsgXCJcXG5cIjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcl9zdGF0dXMgIT0gXCJcIikge1xyXG4gICAgLy8gaWYgdGhlIGludmFsaWRfaW5wdXQgRE9NJ3MgaXNuJ3Qgc3BlZmljaWVkIEhUTUwgdGhpbmtzIGl0IGRvZXNuJ3QgZXhpc3QgLS0tLS0tXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZF9pbnB1dFwiKS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmFsaWRfaW5wdXRcIikuaW5uZXJIVE1MID0gZXJyb3Jfc3RhdHVzO1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9fY29udGFpbmVyXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291bHRpb25fb3V0cHV0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaW5nXzI1X2NvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxuICBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb19jb250YWluZXJcIikuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvX2NvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VsdGlvbl9vdXRwdXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52YWxpZF9pbnB1dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB2YXIgbWF0aHNfcGx1c18yNTtcclxuICAgIGlmIChhZGRfMjUgPT0gMjUpIHtcclxuICAgICAgbWF0aHNfcGx1c18yNSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbWF0aHNfcGx1c18yNSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAga2VlcF9pbnB1dHModGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0pO1xyXG4gICAgdmFyIG1hdGNoZXNfaW5mbyA9IG1haW4odGFyZ2V0X251bSwgaGxfbnVtLCBvbF9udW0sIG1hdGhzX3BsdXNfMjUpO1xyXG4gICAgdmFyIHBvaW50c19saXN0ID0gbWF0Y2hlc19pbmZvWzBdO1xyXG4gICAgdmFyIHBvaW50c19yZXEgPSBtYXRjaGVzX2luZm9bMV07XHJcblxyXG4gICAgaWYgKHBvaW50c19saXN0LmluY2x1ZGVzKDI1KSkge1xyXG4gICAgICBkaXNwbGF5X3BsdXNfMjUodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGlzcGxheV9wbHVzXzI1KGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBvdXRwdXRfaW5mbyA9IGdhcl9hbmRfcHRnKHBvaW50c19saXN0KTtcclxuXHJcbiAgICB2YXIgZ3JhZGVfYXZnID0gb3V0cHV0X2luZm9bMF07XHJcbiAgICB2YXIgcmVxX3Jlc3VsdHMgPSBvdXRwdXRfaW5mb1sxXTsgLy8gdGhlc2UgYXJlIGxldHRlciBncmFkZXNcclxuXHJcbiAgICByZXFfcmVzdWx0cyA9IHJlZF9jb21tYXMocmVxX3Jlc3VsdHMpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9pbnRzX3JlcVwiKS5pbm5lckhUTUwgPSBTdHJpbmcocG9pbnRzX3JlcSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcV9yZXN1bHRzXCIpLmlubmVySFRNTCA9IFN0cmluZyhyZXFfcmVzdWx0cyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYWRlX2F2Z19yZXFcIikuaW5uZXJIVE1MID0gU3RyaW5nKGdyYWRlX2F2Zyk7XHJcbiAgfVxyXG59Il0sCiAg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RUFBRSxHQUFHO0FBQzVCLHdCQUFnQixJQUFJO0FBQUEsTUFDdEIsT0FDSztBQUNILHdCQUFnQixLQUFLO0FBQUEsTUFDdkI7QUFDQSxVQUFJLGNBQWMsWUFBWSxXQUFXO0FBRXpDLFVBQUksWUFBWSxZQUFZLENBQUM7QUFDN0IsVUFBSSxjQUFjLFlBQVksQ0FBQztBQUUvQixvQkFBYyxXQUFXLFdBQVc7QUFFcEMsZUFBUyxlQUFlLFlBQVksRUFBRSxZQUFZLE9BQU8sVUFBVTtBQUNuRSxlQUFTLGVBQWUsYUFBYSxFQUFFLFlBQVksT0FBTyxXQUFXO0FBQ3JFLGVBQVMsZUFBZSxlQUFlLEVBQUUsWUFBWSxPQUFPLFNBQVM7QUFBQSxJQUN2RTtBQUFBLEVBQ0Y7IiwKICAibmFtZXMiOiBbInN0cmluZ1RvQnl0ZUFycmF5IiwgIm5hbWUiLCAiTG9nTGV2ZWwiLCAibmFtZSIsICJuYW1lIiwgInZlcnNpb24iLCAidGFyZ2V0IiwgIkRFRkFVTFRfRU5UUllfTkFNRSIsICJhcHBOYW1lIiwgImFwcENvbXBhdE5hbWUiLCAiYW5hbHl0aWNzTmFtZSIsICJhbmFseXRpY3NDb21wYXROYW1lIiwgImFwcENoZWNrTmFtZSIsICJhcHBDaGVja0NvbXBhdE5hbWUiLCAiYXV0aE5hbWUiLCAiYXV0aENvbXBhdE5hbWUiLCAiZGF0YWJhc2VOYW1lIiwgImRhdGFiYXNlQ29tcGF0TmFtZSIsICJmdW5jdGlvbnNOYW1lIiwgImZ1bmN0aW9uc0NvbXBhdE5hbWUiLCAiaW5zdGFsbGF0aW9uc05hbWUiLCAiaW5zdGFsbGF0aW9uc0NvbXBhdE5hbWUiLCAibWVzc2FnaW5nTmFtZSIsICJtZXNzYWdpbmdDb21wYXROYW1lIiwgInBlcmZvcm1hbmNlTmFtZSIsICJwZXJmb3JtYW5jZUNvbXBhdE5hbWUiLCAicmVtb3RlQ29uZmlnTmFtZSIsICJyZW1vdGVDb25maWdDb21wYXROYW1lIiwgInN0b3JhZ2VOYW1lIiwgInN0b3JhZ2VDb21wYXROYW1lIiwgImZpcmVzdG9yZU5hbWUiLCAiZmlyZXN0b3JlQ29tcGF0TmFtZSIsICJwYWNrYWdlTmFtZSIsICJhcHAiLCAiYXBwIiwgIm5hbWUiLCAibmFtZSIsICJERUZBVUxUX0VOVFJZX05BTUUiLCAiYXBwIiwgInZlcnNpb24iLCAiYXBwIiwgIm5hbWUiLCAidmVyc2lvbiIsICJuYW1lIiwgInZlcnNpb24iLCAiRVJST1JfRkFDVE9SWSIsICJkYlByb21pc2UiLCAiZ2V0RGJQcm9taXNlIiwgImluc3RhbGxhdGlvbkVudHJ5IiwgIkVSUk9SX0ZBQ1RPUlkiLCAiYXBwIiwgIkVSUk9SX0ZBQ1RPUlkiLCAibmFtZSIsICJ2ZXJzaW9uIiwgInZlcnNpb24iLCAiU0VSVklDRSIsICJTRVJWSUNFX05BTUUiLCAiRVJST1JfREVTQ1JJUFRJT05fTUFQIiwgIkVSUk9SX0ZBQ1RPUlkiLCAid2luZG93IiwgIm5hbWUiLCAiVmlzaWJpbGl0eVN0YXRlIiwgIm5hdmlnYXRvciIsICJkb2N1bWVudCIsICJpaWQiLCAiY29uZmlnIiwgImxvY2FsU3RvcmFnZSIsICJzZXR0aW5nc1NlcnZpY2VJbnN0YW5jZSIsICJzZXJpYWxpemVyIiwgImxvZ2dlciIsICJjb3VudGVyIiwgImFwcCIsICJERUZBVUxUX0VOVFJZX05BTUUiLCAiYXBwIiwgIkRFRkFVTFRfRU5UUllfTkFNRSIsICJFUlJPUl9GQUNUT1JZIiwgIm5hbWUiLCAidmVyc2lvbiIsICJjb3VudGVyIiwgInRhcmdldF9udW0iLCAiaGxfbnVtIiwgIm9sX251bSJdCn0K
