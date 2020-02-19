/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./src/assets/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views/gutenberg-blocks/tainacan-terms/carousel-terms-list/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./src/views/gutenberg-blocks/js/axios.js":
/*!************************************************!*\
  !*** ./src/views/gutenberg-blocks/js/axios.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var tainacan = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: tainacan_blocks.root
});
tainacan.defaults.headers.common['X-WP-Nonce'] = tainacan_blocks.nonce;
/* harmony default export */ __webpack_exports__["default"] = (tainacan);

/***/ }),

/***/ "./src/views/gutenberg-blocks/tainacan-terms/carousel-terms-list/index.js":
/*!********************************************************************************!*\
  !*** ./src/views/gutenberg-blocks/tainacan-terms/carousel-terms-list/index.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terms_list_terms_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../terms-list/terms-modal.js */ "./src/views/gutenberg-blocks/tainacan-terms/terms-list/terms-modal.js");
/* harmony import */ var _js_axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/axios.js */ "./src/views/gutenberg-blocks/js/axios.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    Spinner = _wp$components.Spinner,
    Button = _wp$components.Button,
    BaseControl = _wp$components.BaseControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Placeholder = _wp$components.Placeholder,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody;
var InspectorControls = wp.editor.InspectorControls;




registerBlockType('tainacan/carousel-terms-list', {
  title: __('Tainacan Terms Carousel', 'tainacan'),
  icon: React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "24px",
    width: "24px"
  }, React.createElement("path", {
    fill: "#298596",
    d: "M21.43,14.64,19.32,17a2.57,2.57,0,0,1-2,1H12.05a6,6,0,0,0-6-6H6V10.64A2.59,2.59,0,0,1,8.59,8H17.3a2.57,2.57,0,0,1,2,1l2.11,2.38A2.59,2.59,0,0,1,21.43,14.64ZM4,4A2,2,0,0,0,2,6v7.63a5.74,5.74,0,0,1,2-1.2V6H16V4ZM7,15.05v6.06l3.06-3.06ZM5,21.11V15.05L1.94,18.11Z"
  })),
  category: 'tainacan-blocks',
  keywords: [__('terms', 'tainacan'), __('carousel', 'tainacan'), __('slider', 'tainacan'), __('taxonomy', 'tainacan')],
  description: __('List terms on a Carousel, showing their thumbnails or a preview of items.', 'tainacan'),
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'div'
    },
    terms: {
      type: Array,
      default: []
    },
    isModalOpen: {
      type: Boolean,
      default: false
    },
    selectedTerms: {
      type: Array,
      default: []
    },
    itemsRequestSource: {
      type: String,
      default: undefined
    },
    maxTermsNumber: {
      type: Number,
      value: undefined
    },
    isLoading: {
      type: Boolean,
      value: false
    },
    isLoadingTerm: {
      type: Boolean,
      value: false
    },
    arrowsPosition: {
      type: String,
      value: 'search'
    },
    autoPlay: {
      type: Boolean,
      value: false
    },
    autoPlaySpeed: {
      type: Number,
      value: 3
    },
    loopSlides: {
      type: Boolean,
      value: false
    },
    hideName: {
      type: Boolean,
      value: true
    },
    showTermThumbnail: {
      type: Boolean,
      value: false
    },
    term: {
      type: Object,
      value: undefined
    },
    blockId: {
      type: String,
      default: undefined
    },
    termBackgroundColor: {
      type: String,
      default: "#454647"
    },
    termTextColor: {
      type: String,
      default: "#ffffff"
    },
    taxonomyId: {
      type: String,
      default: undefined
    }
  },
  supports: {
    align: ['full', 'wide'],
    html: false,
    multiple: true
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className,
        isSelected = _ref.isSelected,
        clientId = _ref.clientId;
    var terms = attributes.terms,
        content = attributes.content,
        isModalOpen = attributes.isModalOpen,
        itemsRequestSource = attributes.itemsRequestSource,
        selectedTerms = attributes.selectedTerms,
        isLoading = attributes.isLoading,
        arrowsPosition = attributes.arrowsPosition,
        autoPlay = attributes.autoPlay,
        autoPlaySpeed = attributes.autoPlaySpeed,
        loopSlides = attributes.loopSlides,
        hideName = attributes.hideName,
        showTermThumbnail = attributes.showTermThumbnail,
        taxonomyId = attributes.taxonomyId; // Obtains block's client id to render it on save function

    setAttributes({
      blockId: clientId
    });

    function prepareItem(term, termItems) {
      return React.createElement("li", {
        key: term.id,
        className: 'term-list-item ' + (!showTermThumbnail ? 'term-list-item-grid' : '')
      }, React.createElement(IconButton, {
        onClick: function onClick() {
          return removeItemOfId(term.id);
        },
        icon: "no-alt",
        label: __('Remove', 'tainacan')
      }), React.createElement("a", {
        id: isNaN(term.id) ? term.id : 'term-id-' + term.id,
        href: term.url,
        target: "_blank"
      }, !showTermThumbnail ? React.createElement("div", {
        class: "term-items-grid"
      }, React.createElement("img", {
        src: termItems[0] && termItems[0].thumbnail && termItems[0].thumbnail['tainacan-medium'][0] && termItems[0].thumbnail['tainacan-medium'][0] ? termItems[0].thumbnail['tainacan-medium'][0] : termItems[0] && termItems[0].thumbnail && termItems[0].thumbnail['thumbnail'][0] && termItems[0].thumbnail['thumbnail'][0] ? termItems[0].thumbnail['thumbnail'][0] : "".concat(tainacan_blocks.base_url, "/assets/images/placeholder_square.png"),
        alt: termItems[0] && termItems[0].name ? termItems[0].name : __('Thumbnail', 'tainacan')
      }), React.createElement("img", {
        src: termItems[1] && termItems[1].thumbnail && termItems[1].thumbnail['tainacan-medium'][0] && termItems[1].thumbnail['tainacan-medium'][0] ? termItems[1].thumbnail['tainacan-medium'][0] : termItems[1] && termItems[1].thumbnail && termItems[1].thumbnail['thumbnail'][0] && termItems[1].thumbnail['thumbnail'][0] ? termItems[1].thumbnail['thumbnail'][0] : "".concat(tainacan_blocks.base_url, "/assets/images/placeholder_square.png"),
        alt: termItems[1] && termItems[1].name ? termItems[1].name : __('Thumbnail', 'tainacan')
      }), React.createElement("img", {
        src: termItems[2] && termItems[2].thumbnail && termItems[2].thumbnail['tainacan-medium'][0] && termItems[2].thumbnail['tainacan-medium'][0] ? termItems[2].thumbnail['tainacan-medium'][0] : termItems[2] && termItems[2].thumbnail && termItems[2].thumbnail['thumbnail'][0] && termItems[2].thumbnail['thumbnail'][0] ? termItems[2].thumbnail['thumbnail'][0] : "".concat(tainacan_blocks.base_url, "/assets/images/placeholder_square.png"),
        alt: termItems[2] && termItems[2].name ? termItems[2].name : __('Thumbnail', 'tainacan')
      })) : React.createElement("img", {
        src: term.header_image ? term.header_image : "".concat(tainacan_blocks.base_url, "/assets/images/placeholder_square.png"),
        alt: term.name ? term.name : __('Thumbnail', 'tainacan')
      }), !hideName ? React.createElement("span", null, term.name ? term.name : '') : null));
    }

    function setContent() {
      isLoading = true;
      setAttributes({
        isLoading: isLoading
      });
      if (itemsRequestSource != undefined && typeof itemsRequestSource == 'function') itemsRequestSource.cancel('Previous terms search canceled.');
      itemsRequestSource = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
      terms = [];
      var endpoint = '/taxonomy/' + taxonomyId + '/terms/?' + qs__WEBPACK_IMPORTED_MODULE_3___default.a.stringify({
        hideempty: 0,
        include: selectedTerms
      }) + '&order=asc&fetch_only=id,name,url,header_image';
      _js_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(endpoint, {
        cancelToken: itemsRequestSource.token
      }).then(function (response) {
        if (showTermThumbnail) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = response.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var term = _step.value;
              terms.push(prepareItem(term));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          setAttributes({
            content: React.createElement("div", null),
            terms: terms,
            isLoading: false,
            itemsRequestSource: itemsRequestSource
          });
        } else {
          var promises = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            var _loop = function _loop() {
              var term = _step2.value;
              promises.push(_js_axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('/items/?perpage=3&fetch_only=name,url,thumbnail&taxquery[0][taxonomy]=tnc_tax_' + taxonomyId + '&taxquery[0][terms][0]=' + term.id + '&taxquery[0][compare]=IN').then(function (response) {
                return {
                  term: term,
                  termItems: response.data.items
                };
              }).catch(function (error) {
                return console.log(error);
              }));
            };

            for (var _iterator2 = response.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          axios__WEBPACK_IMPORTED_MODULE_2___default.a.all(promises).then(function (results) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = results[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var result = _step3.value;
                terms.push(prepareItem(result.term, result.termItems));
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            setAttributes({
              content: React.createElement("div", null),
              terms: terms,
              isLoading: false,
              itemsRequestSource: itemsRequestSource
            });
          });
        }
      });
    }

    function openCarouselModal() {
      isModalOpen = true;
      setAttributes({
        isModalOpen: isModalOpen
      });
    }

    function removeItemOfId(itemId) {
      var existingItemIndex = terms.findIndex(function (existingItem) {
        return existingItem.key == itemId;
      });
      if (existingItemIndex >= 0) terms.splice(existingItemIndex, 1);
      var existingSelectedItemIndex = selectedTerms.findIndex(function (existingSelectedItem) {
        return existingSelectedItem == itemId;
      });
      if (existingSelectedItemIndex >= 0) selectedTerms.splice(existingSelectedItemIndex, 1);
      setAttributes({
        selectedTerms: selectedTerms,
        terms: terms,
        content: React.createElement("div", null)
      });
    } // Executed only on the first load of page


    if (content && content.length && content[0].type) setContent();
    return React.createElement("div", {
      className: className
    }, React.createElement("div", null, React.createElement(InspectorControls, null, React.createElement(PanelBody, {
      title: __('Carousel', 'tainacan'),
      initialOpen: true
    }, React.createElement("div", null, React.createElement(BaseControl, {
      id: "term-carousel-view-modes",
      label: __('Term layout', 'tainacan')
    }, React.createElement("div", {
      className: "term-carousel-view-modes"
    }, React.createElement("button", {
      onClick: function onClick() {
        showTermThumbnail = false;
        setAttributes({
          showTermThumbnail: showTermThumbnail
        });
        setContent();
      },
      className: 'term-carousel-view-mode-grid' + (showTermThumbnail ? '' : ' is-active')
    }, React.createElement("div", null, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null)), React.createElement("label", null, __('Items\'s grid', 'tainacan'))), React.createElement("button", {
      onClick: function onClick() {
        showTermThumbnail = true;
        setAttributes({
          showTermThumbnail: showTermThumbnail
        });
        setContent();
      },
      className: 'term-carousel-view-mode-thumbnail' + (showTermThumbnail ? ' is-active' : '')
    }, React.createElement("div", null), React.createElement("label", null, __('Thumbnail', 'tainacan'))))), React.createElement(ToggleControl, {
      label: __('Hide name', 'tainacan'),
      help: !hideName ? __('Toggle to hide term\'s name', 'tainacan') : __('Do not hide term\'s name', 'tainacan'),
      checked: hideName,
      onChange: function onChange(isChecked) {
        hideName = isChecked;
        setAttributes({
          hideName: hideName
        });
        setContent();
      }
    }), React.createElement(ToggleControl, {
      label: __('Loop slides', 'tainacan'),
      help: !loopSlides ? __('Toggle to make slides loop from first to last', 'tainacan') : __('Do not loop slides from first to last', 'tainacan'),
      checked: loopSlides,
      onChange: function onChange(isChecked) {
        loopSlides = isChecked;
        setAttributes({
          loopSlides: loopSlides
        });
      }
    }), React.createElement(ToggleControl, {
      label: __('Auto play', 'tainacan'),
      help: !autoPlay ? __('Toggle to automatically slide to next term', 'tainacan') : __('Do not automatically slide to next term', 'tainacan'),
      checked: autoPlay,
      onChange: function onChange(isChecked) {
        autoPlay = isChecked;
        setAttributes({
          autoPlay: autoPlay
        });
      }
    }), autoPlay ? React.createElement(RangeControl, {
      label: __('Seconds before translating to next', 'tainacan'),
      value: autoPlaySpeed ? autoPlaySpeed : 3,
      onChange: function onChange(aAutoPlaySpeed) {
        autoPlaySpeed = aAutoPlaySpeed;
        setAttributes({
          autoPlaySpeed: aAutoPlaySpeed
        });
      },
      min: 1,
      max: 5
    }) : null, React.createElement(SelectControl, {
      label: __('Arrows', 'tainacan'),
      value: arrowsPosition,
      options: [{
        label: __('Around', 'tainacan'),
        value: 'around'
      }, {
        label: __('Left', 'tainacan'),
        value: 'left'
      }, {
        label: __('Right', 'tainacan'),
        value: 'right'
      }],
      onChange: function onChange(aPosition) {
        arrowsPosition = aPosition;
        setAttributes({
          arrowsPosition: arrowsPosition
        });
      }
    }))))), isSelected ? React.createElement("div", null, isModalOpen ? React.createElement(_terms_list_terms_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      replaceTermId: false // The Terms modal adds `term-id-` string to terms ids. Here we dont' need it
      ,
      existingTaxonomyId: taxonomyId,
      selectedTermsObject: selectedTerms,
      onSelectTaxonomy: function onSelectTaxonomy(selectedTaxonomyId) {
        taxonomyId = selectedTaxonomyId;
        setAttributes({
          taxonomyId: taxonomyId
        });
      },
      onApplySelection: function onApplySelection(aSelectionOfTerms) {
        selectedTerms = selectedTerms.concat(aSelectionOfTerms.map(function (term) {
          return term.id;
        }));
        setAttributes({
          selectedTerms: selectedTerms,
          isModalOpen: false
        });
        setContent();
      },
      onCancelSelection: function onCancelSelection() {
        return setAttributes({
          isModalOpen: false
        });
      }
    }) : null, terms.length ? React.createElement("div", {
      className: "block-control"
    }, React.createElement("p", null, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      height: "24px",
      width: "24px"
    }, React.createElement("path", {
      d: "M21.43,14.64,19.32,17a2.57,2.57,0,0,1-2,1H12.05a6,6,0,0,0-6-6H6V10.64A2.59,2.59,0,0,1,8.59,8H17.3a2.57,2.57,0,0,1,2,1l2.11,2.38A2.59,2.59,0,0,1,21.43,14.64ZM4,4A2,2,0,0,0,2,6v7.63a5.74,5.74,0,0,1,2-1.2V6H16V4ZM7,15.05v6.06l3.06-3.06ZM5,21.11V15.05L1.94,18.11Z"
    })), __('List terms on a Carousel', 'tainacan')), React.createElement(Button, {
      isPrimary: true,
      type: "submit",
      onClick: function onClick() {
        return openCarouselModal();
      }
    }, __('Add more terms', 'tainacan'))) : null) : null, !terms.length && !isLoading ? React.createElement(Placeholder, {
      icon: React.createElement("img", {
        width: 148,
        src: "".concat(tainacan_blocks.base_url, "/assets/images/tainacan_logo_header.svg"),
        alt: "Tainacan Logo"
      })
    }, React.createElement("p", null, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      height: "24px",
      width: "24px"
    }, React.createElement("path", {
      d: "M21.43,14.64,19.32,17a2.57,2.57,0,0,1-2,1H12.05a6,6,0,0,0-6-6H6V10.64A2.59,2.59,0,0,1,8.59,8H17.3a2.57,2.57,0,0,1,2,1l2.11,2.38A2.59,2.59,0,0,1,21.43,14.64ZM4,4A2,2,0,0,0,2,6v7.63a5.74,5.74,0,0,1,2-1.2V6H16V4ZM7,15.05v6.06l3.06-3.06ZM5,21.11V15.05L1.94,18.11Z"
    })), __('List terms on a Carousel, showing their thumbnails or a preview of items.', 'tainacan')), React.createElement(Button, {
      isPrimary: true,
      type: "submit",
      onClick: function onClick() {
        return openCarouselModal();
      }
    }, __('Select Terms', 'tainacan'))) : null, isLoading ? React.createElement("div", {
      class: "spinner-container"
    }, React.createElement(Spinner, null)) : React.createElement("div", null, isSelected && terms.length ? React.createElement("div", {
      class: "preview-warning"
    }, __('Warning: this is just a demonstration. To see the carousel in action, either preview or publish your post.', 'tainacan')) : null, terms.length ? React.createElement("div", {
      className: 'terms-list-edit-container ' + (arrowsPosition ? 'has-arrows-' + arrowsPosition : '')
    }, React.createElement("button", {
      class: "swiper-button-prev",
      slot: "button-prev",
      style: {
        cursor: 'not-allowed'
      }
    }, React.createElement("svg", {
      width: "42",
      height: "42",
      viewBox: "0 0 24 24"
    }, React.createElement("path", {
      d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
    }), React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }))), React.createElement("ul", {
      className: 'terms-list-edit'
    }, terms), React.createElement("button", {
      class: "swiper-button-next",
      slot: "button-next",
      style: {
        cursor: 'not-allowed'
      }
    }, React.createElement("svg", {
      width: "42",
      height: "42",
      viewBox: "0 0 24 24"
    }, React.createElement("path", {
      d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    }), React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    })))) : null));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes,
        className = _ref2.className;
    var content = attributes.content,
        blockId = attributes.blockId,
        selectedTerms = attributes.selectedTerms,
        arrowsPosition = attributes.arrowsPosition,
        maxTermsNumber = attributes.maxTermsNumber,
        autoPlay = attributes.autoPlay,
        autoPlaySpeed = attributes.autoPlaySpeed,
        loopSlides = attributes.loopSlides,
        hideName = attributes.hideName,
        showTermThumbnail = attributes.showTermThumbnail,
        taxonomyId = attributes.taxonomyId;
    return React.createElement("div", {
      className: className,
      "selected-terms": JSON.stringify(selectedTerms),
      "arrows-position": arrowsPosition,
      "auto-play": '' + autoPlay,
      "auto-play-speed": autoPlaySpeed,
      "loop-slides": '' + loopSlides,
      "hide-name": '' + hideName,
      "max-terms-number": maxTermsNumber,
      "taxonomy-id": taxonomyId,
      "tainacan-api-root": tainacan_blocks.root,
      "tainacan-base-url": tainacan_blocks.base_url,
      "show-term-thumbnail": '' + showTermThumbnail,
      id: 'wp-block-tainacan-carousel-terms-list_' + blockId
    }, content);
  }
});

/***/ }),

/***/ "./src/views/gutenberg-blocks/tainacan-terms/terms-list/terms-modal.js":
/*!*****************************************************************************!*\
  !*** ./src/views/gutenberg-blocks/tainacan-terms/terms-list/terms-modal.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TermsModal; });
/* harmony import */ var _js_axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/axios.js */ "./src/views/gutenberg-blocks/js/axios.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var __ = wp.i18n.__;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    RadioControl = _wp$components.RadioControl,
    Spinner = _wp$components.Spinner;

var TermsModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TermsModal, _React$Component);

  function TermsModal(props) {
    var _this;

    _classCallCheck(this, TermsModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TermsModal).call(this, props)); // Initialize state

    _this.state = {
      modalTerms: [],
      totalModalTerms: 0,
      termsPerPage: 24,
      termOrder: 'asc',
      searchTermName: '',
      temporarySelectedTerms: [],
      terms: [],
      isLoadingTerms: false,
      taxonomyId: undefined,
      taxonomyName: '',
      isLoadingTaxonomies: false,
      modalTaxonomies: [],
      taxonomyOrderBy: 'date-desc',
      totalModalTaxonomies: 0,
      taxonomyPage: 1,
      temporaryTaxonomyId: '',
      searchTaxonomyName: '',
      taxonomies: []
    }; // Bind events

    _this.fetchTerms = _this.fetchTerms.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchModalTerms = _this.fetchModalTerms.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.isTemporaryTermSelected = _this.isTemporaryTermSelected.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleSelectTemporaryTerm = _this.toggleSelectTemporaryTerm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.selectTemporaryTerm = _this.selectTemporaryTerm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeTemporaryTermOfId = _this.removeTemporaryTermOfId.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.applySelectedTerms = _this.applySelectedTerms.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.resetTaxonomies = _this.resetTaxonomies.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.selectTaxonomy = _this.selectTaxonomy.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchTaxonomies = _this.fetchTaxonomies.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchModalTaxonomies = _this.fetchModalTaxonomies.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.fetchTaxonomy = _this.fetchTaxonomy.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TermsModal, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        taxonomyId: this.props.existingTaxonomyId,
        temporarySelectedTerms: JSON.parse(JSON.stringify(this.props.selectedTermsObject))
      });

      if (this.props.existingTaxonomyId != null && this.props.existingTaxonomyId != undefined) {
        this.fetchTaxonomy(this.props.existingTaxonomyId);
        this.fetchModalTerms(0, this.props.existingTaxonomyId);
      } else {
        this.setState({
          taxonomyPage: 1
        });
        this.fetchModalTaxonomies();
      }
    } // TERMS RELATED --------------------------------------------------

  }, {
    key: "selectTemporaryTerm",
    value: function selectTemporaryTerm(term) {
      var existingTermIndex = this.state.temporarySelectedTerms.findIndex(function (existingTerm) {
        return existingTerm.id == 'term-id-' + term.id || existingTerm.id == term.id;
      });

      if (existingTermIndex < 0) {
        var termId = this.props.replaceTermId ? isNaN(term.id) ? term.id : 'term-id-' + term.id : term.id;
        var aTemporarySelectedTerms = this.state.temporarySelectedTerms;
        aTemporarySelectedTerms.push({
          id: termId,
          name: term.name,
          url: term.url,
          header_image: term.header_image
        });
        this.setState({
          temporarySelectedTerms: aTemporarySelectedTerms
        });
      }
    }
  }, {
    key: "removeTemporaryTermOfId",
    value: function removeTemporaryTermOfId(termId) {
      var existingTermIndex = this.state.temporarySelectedTerms.findIndex(function (existingTerm) {
        return existingTerm.id == 'term-id-' + termId || existingTerm.id == termId;
      });

      if (existingTermIndex >= 0) {
        var aTemporarySelectedTerms = this.state.temporarySelectedTerms;
        aTemporarySelectedTerms.splice(existingTermIndex, 1);
        this.setState({
          temporarySelectedTerms: aTemporarySelectedTerms
        });
      }
    }
  }, {
    key: "applySelectedTerms",
    value: function applySelectedTerms() {
      var aSelectedTermsObject = JSON.parse(JSON.stringify(this.state.temporarySelectedTerms));
      this.props.onApplySelection(aSelectedTermsObject);
    }
  }, {
    key: "cancelSelection",
    value: function cancelSelection() {
      this.setState({
        modalTerms: [],
        modalTaxonomies: []
      });
      this.props.onCancelSelection();
    }
  }, {
    key: "isTemporaryTermSelected",
    value: function isTemporaryTermSelected(termId) {
      return this.state.temporarySelectedTerms.findIndex(function (term) {
        return term.id == termId || term.id == 'term-id-' + termId;
      }) >= 0;
    }
  }, {
    key: "toggleSelectTemporaryTerm",
    value: function toggleSelectTemporaryTerm(term, isChecked) {
      if (isChecked) this.selectTemporaryTerm(term);else this.removeTemporaryTermOfId(term.id);
      this.setState({
        temporarySelectedTerms: this.state.temporarySelectedTerms
      }); // setContent();
    }
  }, {
    key: "fetchTerms",
    value: function fetchTerms(name) {
      var _this2 = this;

      var endpoint = '/taxonomy/' + this.state.taxonomyId + '/terms/?order=' + this.state.termOrder + '&hideempty=0&number=' + this.state.termsPerPage;
      if (name != undefined && name != '') endpoint += '&searchterm=' + name;
      _js_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint).then(function (response) {
        var someTerms = response.data.map(function (term) {
          return {
            name: term.name,
            id: term.id,
            url: term.url,
            header_image: [{
              src: term.header_image,
              alt: term.name
            }]
          };
        });

        _this2.setState({
          isLoadingTerms: false,
          terms: someTerms
        });

        return someTerms;
      }).catch(function (error) {
        console.log('Error trying to fetch terms: ' + error);
      });
    }
  }, {
    key: "fetchModalTerms",
    value: function fetchModalTerms(offset, taxonomyId) {
      var _this3 = this;

      var someModalTerms = this.state.modalTerms;
      if (offset <= 0) someModalTerms = [];
      var endpoint = '/taxonomy/' + taxonomyId + '/terms/?order=' + this.state.termOrder + '&hideempty=0&number=' + this.state.termsPerPage + '&offset=' + offset;
      this.setState({
        isLoadingTerms: true,
        modalTerms: someModalTerms
      });
      _js_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint).then(function (response) {
        var otherModalTerms = _this3.state.modalTerms;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = response.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var term = _step.value;
            otherModalTerms.push({
              name: term.name,
              id: term.id,
              url: term.url,
              header_image: [{
                src: term.header_image,
                alt: term.name
              }]
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this3.setState({
          isLoadingTerms: false,
          modalTerms: otherModalTerms,
          totalModalTerms: response.headers['x-wp-total']
        });

        return otherModalTerms;
      }).catch(function (error) {
        console.log('Error trying to fetch terms: ' + error);
      });
    } // TAXONOMY RELATED --------------------------------------------------

  }, {
    key: "fetchModalTaxonomies",
    value: function fetchModalTaxonomies() {
      var _this4 = this;

      var someModalTaxonomies = this.state.modalTaxonomies;
      if (this.state.taxonomyPage <= 1) someModalTaxonomies = [];
      var endpoint = '/taxonomies/?perpage=' + this.state.termsPerPage + '&paged=' + this.state.taxonomyPage;
      if (this.state.taxonomyOrderBy == 'date') endpoint += '&orderby=date&order=asc';else if (this.state.taxonomyOrderBy == 'date-desc') endpoint += '&orderby=date&order=desc';else if (this.state.taxonomyOrderBy == 'title') endpoint += '&orderby=title&order=asc';else if (this.state.taxonomyOrderBy == 'title-desc') endpoint += '&orderby=title&order=desc';
      this.setState({
        isLoadingTaxonomies: true,
        taxonomyPage: this.state.taxonomyPage + 1,
        modalTaxonomies: someModalTaxonomies
      });
      _js_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint).then(function (response) {
        var otherModalTaxonomies = _this4.state.modalTaxonomies;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = response.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var taxonomy = _step2.value;
            otherModalTaxonomies.push({
              name: taxonomy.name,
              id: taxonomy.id
            });
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        _this4.setState({
          isLoadingTaxonomies: false,
          modalTaxonomies: otherModalTaxonomies,
          totalModalTaxonomies: response.headers['x-wp-total']
        });

        return otherModalTaxonomies;
      }).catch(function (error) {
        console.log('Error trying to fetch taxonomies: ' + error);
      });
    }
  }, {
    key: "fetchTaxonomy",
    value: function fetchTaxonomy(taxonomyId) {
      var _this5 = this;

      _js_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/taxonomies/' + taxonomyId).then(function (response) {
        _this5.setState({
          taxonomyName: response.data.name
        });
      }).catch(function (error) {
        console.log('Error trying to fetch taxonomy: ' + error);
      });
    }
  }, {
    key: "selectTaxonomy",
    value: function selectTaxonomy(selectedTaxonomyId) {
      this.setState({
        taxonomyId: selectedTaxonomyId
      });
      this.props.onSelectTaxonomy(selectedTaxonomyId);
      this.fetchTaxonomy(selectedTaxonomyId);
      this.fetchModalTerms(0, selectedTaxonomyId); //setContent();
    }
  }, {
    key: "fetchTaxonomies",
    value: function fetchTaxonomies(name) {
      var _this6 = this;

      this.setState({
        isLoadingTaxonomies: true,
        taxonomies: [],
        terms: []
      });
      var endpoint = '/taxonomies/?perpage=' + this.state.termsPerPage;
      if (name != undefined && name != '') endpoint += '&search=' + name;
      if (this.state.taxonomyOrderBy == 'date') endpoint += '&orderby=date&order=asc';else if (this.state.taxonomyOrderBy == 'date-desc') endpoint += '&orderby=date&order=desc';else if (this.state.taxonomyOrderBy == 'title') endpoint += '&orderby=title&order=asc';else if (this.state.taxonomyOrderBy == 'title-desc') endpoint += '&orderby=title&order=desc';
      _js_axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint).then(function (response) {
        var someTaxonomies = response.data.map(function (taxonomy) {
          return {
            name: taxonomy.name,
            id: taxonomy.id + ''
          };
        });

        _this6.setState({
          isLoadingTaxonomies: false,
          taxonomies: someTaxonomies
        });

        return someTaxonomies;
      }).catch(function (error) {
        console.log('Error trying to fetch taxonomies: ' + error);
      });
    }
  }, {
    key: "resetTaxonomies",
    value: function resetTaxonomies() {
      this.setState({
        taxonomyId: null,
        taxonomyPage: 1,
        modalTaxonomies: []
      });
      this.fetchModalTaxonomies();
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return this.state.taxonomyId != null && this.state.taxonomyId != undefined ? // Terms modal
      React.createElement(Modal, {
        className: "wp-block-tainacan-modal",
        title: __('Select the desired terms from taxonomy ' + this.state.taxonomyName, 'tainacan'),
        onRequestClose: function onRequestClose() {
          return _this7.cancelSelection();
        },
        contentLabel: __('Select terms', 'tainacan')
      }, React.createElement("div", null, React.createElement("div", {
        className: "modal-search-area"
      }, React.createElement(TextControl, {
        placeholder: __('Search by term\'s name', 'tainacan'),
        label: __('Search for a term', 'tainacan'),
        value: this.state.searchTermName,
        onChange: function onChange(value) {
          _this7.setState({
            searchTermName: value
          });

          _.debounce(_this7.fetchTerms(value), 300);
        }
      }), React.createElement(SelectControl, {
        label: __('Order', 'tainacan'),
        value: this.state.termOrder,
        options: [{
          label: __('Name (A-Z)', 'tainacan'),
          value: 'asc'
        }, {
          label: __('Name (Z-A)', 'tainacan'),
          value: 'desc'
        }],
        onChange: function onChange(atermOrder) {
          _this7.state.termOrder = atermOrder;

          _this7.setState({
            termOrder: _this7.state.termOrder
          });

          if (_this7.state.searchTermName && _this7.state.searchTermName != '') {
            _this7.fetchTerms(_this7.state.searchTermName);
          } else {
            _this7.fetchModalTerms(0, _this7.state.taxonomyId);
          }
        }
      })), this.state.searchTermName != '' ? this.state.terms.length > 0 ? React.createElement("div", null, React.createElement("ul", {
        className: "modal-checkbox-list"
      }, this.state.terms.map(function (term) {
        return React.createElement("li", {
          key: term.id,
          className: "modal-checkbox-list-item"
        }, term.header_image ? React.createElement("img", {
          "aria-hidden": true,
          src: term.header_image && term.header_image[0] && term.header_image[0].src ? term.header_image[0].src : "".concat(tainacan_blocks.base_url, "/assets/images/placeholder_square.png"),
          alt: term.header_image && term.header_image[0] ? term.header_image[0].alt : term.name
        }) : null, React.createElement(CheckboxControl, {
          label: term.name,
          checked: _this7.isTemporaryTermSelected(term.id),
          onChange: function onChange(isChecked) {
            _this7.toggleSelectTemporaryTerm(term, isChecked);
          }
        }));
      })), this.state.isLoadingTerms ? React.createElement("div", {
        class: "spinner-container"
      }, React.createElement(Spinner, null)) : null) : this.state.isLoadingTerms ? React.createElement("div", {
        class: "spinner-container"
      }, React.createElement(Spinner, null)) : React.createElement("div", {
        className: "modal-loadmore-section"
      }, React.createElement("p", null, __('Sorry, no terms found.', 'tainacan'))) : this.state.modalTerms.length > 0 ? React.createElement("div", null, React.createElement("ul", {
        className: "modal-checkbox-list"
      }, this.state.modalTerms.map(function (term) {
        return React.createElement("li", {
          key: term.id,
          className: "modal-checkbox-list-item"
        }, term.header_image ? React.createElement("img", {
          "aria-hidden": true,
          src: term.header_image && term.header_image[0] && term.header_image[0].src ? term.header_image[0].src : "".concat(tainacan_blocks.base_url, "/assets/images/placeholder_square.png"),
          alt: term.header_image && term.header_image[0] ? term.header_image[0].alt : term.name
        }) : null, React.createElement(CheckboxControl, {
          label: term.name,
          checked: _this7.isTemporaryTermSelected(term.id),
          onChange: function onChange(isChecked) {
            _this7.toggleSelectTemporaryTerm(term, isChecked);
          }
        }));
      })), this.state.isLoadingTerms ? React.createElement("div", {
        class: "spinner-container"
      }, React.createElement(Spinner, null)) : null, React.createElement("div", {
        className: "modal-loadmore-section"
      }, React.createElement("p", null, __('Showing', 'tainacan') + " " + this.state.modalTerms.length + " " + __('of', 'tainacan') + " " + this.state.totalModalTerms + " " + __('terms', 'tainacan') + "."), this.state.modalTerms.length < this.state.totalModalTerms ? React.createElement(Button, {
        isDefault: true,
        isSmall: true,
        onClick: function onClick() {
          return _this7.fetchModalTerms(_this7.state.modalTerms.length, _this7.state.taxonomyId);
        }
      }, __('Load more', 'tainacan')) : null)) : this.state.isLoadingTerms ? React.createElement("div", {
        class: "spinner-container"
      }, React.createElement(Spinner, null)) : React.createElement("div", {
        className: "modal-loadmore-section"
      }, React.createElement("p", null, __('Sorry, no terms found.', 'tainacan'))), React.createElement("div", {
        className: "modal-footer-area"
      }, React.createElement(Button, {
        isDefault: true,
        onClick: function onClick() {
          return _this7.resetTaxonomies();
        }
      }, __('Switch taxonomy', 'tainacan')), React.createElement(Button, {
        isPrimary: true,
        onClick: function onClick() {
          return _this7.applySelectedTerms();
        }
      }, __('Finish', 'tainacan'))))) : // Taxonomies modal
      React.createElement(Modal, {
        className: "wp-block-tainacan-modal",
        title: __('Select a taxonomy to fetch terms from', 'tainacan'),
        onRequestClose: function onRequestClose() {
          return _this7.cancelSelection();
        },
        contentLabel: __('Select terms', 'tainacan')
      }, React.createElement("div", null, React.createElement("div", {
        className: "modal-search-area"
      }, React.createElement(TextControl, {
        placeholder: __('Search by taxonomy name', 'tainacan'),
        label: __('Search for a taxonomy', 'tainacan'),
        value: this.state.searchTaxonomyName,
        onChange: function onChange(value) {
          _this7.setState({
            searchTaxonomyName: value
          });

          _.debounce(_this7.fetchTaxonomies(value), 300);
        }
      }), React.createElement(SelectControl, {
        label: __('Order by', 'tainacan'),
        value: this.state.taxonomyOrderBy,
        options: [{
          label: __('Latest', 'tainacan'),
          value: 'date-desc'
        }, {
          label: __('Oldest', 'tainacan'),
          value: 'date'
        }, {
          label: __('Name (A-Z)', 'tainacan'),
          value: 'title'
        }, {
          label: __('Name (Z-A)', 'tainacan'),
          value: 'title-desc'
        }],
        onChange: function onChange(ataxonomyOrderBy) {
          _this7.state.taxonomyOrderBy = ataxonomyOrderBy;
          _this7.state.taxonomyPage = 1;

          _this7.setState({
            taxonomyOrderBy: _this7.state.taxonomyOrderBy,
            taxonomyPage: _this7.state.taxonomyPage
          });

          if (_this7.state.searchTaxonomyName && _this7.state.searchTaxonomyName != '') {
            _this7.fetchTaxonomies(_this7.state.searchTaxonomyName);
          } else {
            _this7.fetchModalTaxonomies();
          }
        }
      })), this.state.searchTaxonomyName != '' ? this.state.taxonomies.length > 0 ? React.createElement("div", null, React.createElement("div", {
        className: "modal-radio-list"
      }, React.createElement(RadioControl, {
        selected: this.state.temporaryTaxonomyId,
        options: this.state.taxonomies.map(function (taxonomy) {
          return {
            label: taxonomy.name,
            value: '' + taxonomy.id
          };
        }),
        onChange: function onChange(aTaxonomyId) {
          _this7.setState({
            temporaryTaxonomyId: aTaxonomyId
          });
        }
      }))) : this.state.isLoadingTaxonomies ? React.createElement("div", {
        class: "spinner-container"
      }, React.createElement(Spinner, null)) : React.createElement("div", {
        className: "modal-loadmore-section"
      }, React.createElement("p", null, __('Sorry, no taxonomy found.', 'tainacan'))) : this.state.modalTaxonomies.length > 0 ? React.createElement("div", null, React.createElement("div", {
        className: "modal-radio-list"
      }, React.createElement(RadioControl, {
        selected: this.state.temporaryTaxonomyId,
        options: this.state.modalTaxonomies.map(function (taxonomy) {
          return {
            label: taxonomy.name,
            value: '' + taxonomy.id
          };
        }),
        onChange: function onChange(aTaxonomyId) {
          _this7.setState({
            temporaryTaxonomyId: aTaxonomyId
          });
        }
      })), React.createElement("div", {
        className: "modal-loadmore-section"
      }, React.createElement("p", null, __('Showing', 'tainacan') + " " + this.state.modalTaxonomies.length + " " + __('of', 'tainacan') + " " + this.state.totalModalTaxonomies + " " + __('taxonomies', 'tainacan') + "."), this.state.modalTaxonomies.length < this.state.totalModalTaxonomies ? React.createElement(Button, {
        isDefault: true,
        isSmall: true,
        onClick: function onClick() {
          return _this7.fetchModalTaxonomies();
        }
      }, __('Load more', 'tainacan')) : null)) : this.state.isLoadingTaxonomies ? React.createElement("div", {
        class: "spinner-container"
      }, React.createElement(Spinner, null)) : React.createElement("div", {
        className: "modal-loadmore-section"
      }, React.createElement("p", null, __('Sorry, no taxonomy found.', 'tainacan'))), React.createElement("div", {
        className: "modal-footer-area"
      }, React.createElement(Button, {
        isDefault: true,
        onClick: function onClick() {
          _this7.cancelSelection();
        }
      }, __('Cancel', 'tainacan')), React.createElement(Button, {
        isPrimary: true,
        disabled: this.state.temporaryTaxonomyId == undefined || this.state.temporaryTaxonomyId == null || this.state.temporaryTaxonomyId == '',
        onClick: function onClick() {
          return _this7.selectTaxonomy(_this7.state.temporaryTaxonomyId);
        }
      }, __('Select terms', 'tainacan')))));
    }
  }]);

  return TermsModal;
}(React.Component);



/***/ })

/******/ });