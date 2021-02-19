(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DocGen"] = factory(require("vue"));
	else
		root["DocGen"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		3: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "DocGen.umd." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1,"1":1,"2":1,"4":1,"5":1,"6":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"0":"8fe632d1","1":"9dbf94ca","2":"10fe5a6b","4":"541fb6d4","5":"4f93f36d","6":"502968d0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpDocGen"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpDocGen"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var buildURL = __webpack_require__("30b5");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");
var mergeConfig = __webpack_require__("4a7b");

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

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

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
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0df6":
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

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "1d2b":
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

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1f2f":
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__("382f");
const Versions = __webpack_require__("ab25");
const MigrateCommons = __webpack_require__("4f10");

const extMap = {
    "cube": "datacube",
    "eo": "eo",
    "label": "label",
    "pc": "pointcloud",
    "proj": "projection",
    "sar": "sar",
    "sat": "sat",
    "sci": "scientific",
    "view": "view"
};

const fieldMap = {
    // Item to core
    'item:license': 'license',
    'item:providers': 'providers',
    // EO to core
    'eo:instrument': 'instruments',
    'eo:platform': 'platform',
    'eo:constellation': 'constellation',
    // EO to proj
    'eo:epsg': 'proj:epsg',
    // EO to view
    'eo:off_nadir': 'view:off_nadir',
    'eo:azimuth': 'view:azimuth',
    'eo:sun_azimuth': 'view:sun_azimuth',
    'eo:sun_elevation': 'view:sun_elevation',
    // Datetime Range to core
    'dtr:start_datetime': 'start_datetime',
    'dtr:end_datetime': 'end_datetime',
    // Point Cloud
    'pc:schema': 'pc:schemas',
    // SAR rename
    'sar:type': 'sar:product_type',
    'sar:polarization': 'sar:polarizations',
    // SAR to core
    'sar:instrument': 'instruments',
    'sar:platform': 'platform',
    'sar:constellation': 'constellation',
    // SAR to sat
    'sar:off_nadir': 'sat:off_nadir_angle',
    'sar:relative_orbit': 'sat:relative_orbit',
// The following four fields don't translate directly, see code below
    'sar:pass_direction': 'sat:orbit_state',
//   sar:resolution => sar:resolution_range, sar:resolution_azimuth
//   sar:pixel_spacing => sar:pixel_spacing_range, sar:pixel_spacing_azimuth
//   sar:looks => sar:looks_range, sar:looks_azimuth, sar:looks_equivalent_number (opt)
};

const moveToRoot = [
    'cube:dimensions',
    'sci:publications',
    'sci:doi',
    'sci:citation'
];

const DIMENSION_TYPES = [
    'spatial',
    'temporal',
    'bands',
    'other'
];


/** Migrate Collections related responses to the latest version. */
class MigrateCollections {

    /**
     * Converts a `GET /collections` response to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} response - The response to convert
     * @param {string} version - Version number of the API, which the response conforms to
     * @returns {object}
     */
    static convertCollectionsToLatestSpec(response, version) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }

        // Make sure we don't alter the original object
        response = Utils.deepClone(response);

        if (Array.isArray(response.collections)) {
            response.collections = response.collections
                .map(c => MigrateCollections.convertCollectionToLatestSpec(c, version))
                .filter(c => typeof c.id === 'string');
        }
        else {
            response.collections = [];
        }

        response.links = MigrateCommons.migrateLinks(response.links, version);

        return response;
    }

    /**
     * Converts a single collection to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} process - The collection to convert
     * @param {string} version - Version number of the API, which the collection conforms to
     * @returns {object}
     */
    static convertCollectionToLatestSpec(originalCollection, version) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }

        // Make sure we don't alter the original object
        let collection = Utils.deepClone(originalCollection);

        // If collection has no id => seems to be an invalid collection => abort
        if (typeof collection.id !== 'string' || collection.id.length === 0) {
            return {};
        }

        // Update stac_version
        if (!Versions.validate(collection.stac_version) || Versions.compare(collection.stac_version, "0.9.0", "<")) {
            collection.stac_version = "0.9.0";
        }

        // Add missing extent upfront. Makes the following code simpler as it works on the object.
        if (!Utils.isObject(collection.extent)) {
            collection.extent = {};
        }

        // convert v0.4 collections to latest version
        if (Versions.compare(version, "0.4.x", "=")) {
            // Restructure spatial extent
            if (Array.isArray(collection.extent.spatial)) {
                collection.extent.spatial = {
                    bbox: [
                        collection.extent.spatial
                    ]
                };
            }
            // Restructure temporal extent
            if (Array.isArray(collection.extent.temporal)) {
                collection.extent.temporal = {
                    interval: [
                        collection.extent.temporal
                    ]
                };
            }

            // move properties to other_properties
            if (Utils.isObject(collection.properties)) {
                if (!Utils.isObject(collection.other_properties)) {
                    collection.other_properties = {};
                }
                for(let key in collection.properties) {
                    collection.other_properties[key] = {
                        values: [
                            collection.properties[key]
                        ]
                    };
                }
            }
            delete collection.properties;

            // now we can work on all properties and migrate to summaries
            let props = Utils.isObject(collection.other_properties) ? collection.other_properties : {};
            for(let key in props) {
                let val = props[key];
                if (Utils.isObject(val) && (Array.isArray(val.extent) || Array.isArray(val.values))) {
                    if (Array.isArray(val.extent)) {
                        props[key] = {
                            min: val.extent[0],
                            max: val.extent[1]
                        };
                    }
                    else { // val.values is an array
                        if (val.values.findIndex(v => !Array.isArray(v)) === -1) {
                            if (val.values.length <= 1) {
                                props[key] = val.values[0];
                            }
                            else {
                                props[key] = val.values.reduce((a, b) => a.concat(b));
                            }
                        }
                        else {
                            props[key] = val.values;
                        }
                    }
                }
                else {
                    // If not valid, move to top-level
                    if (typeof collection[key] === 'undefined') {
                        collection[key] = val;
                    }
                    delete props[key];
                }
            }
            delete collection.other_properties;

            if (!Utils.isObject(collection.summaries)) {
                collection.summaries = {};
            }
            for(let key in props) {
                let val = props[key];

                if (key === 'sar:pass_direction') {
                    // Convert null to geostationary
                    val = val.map(v => v === null ? 'geostationary' : v);
                }

                // Convert arrays into separate fields as needed for some SAR fields
                if ((key === 'sar:resolution' || key === 'sar:pixel_spacing' || key === 'sar:looks') && Array.isArray(val) && val.length >= 2) {
                    collection.summaries[key + '_range'] = val.slice(0,1);
                    collection.summaries[key + '_azimuth'] = val.slice(1,2);
                    if (val.length > 2) {
                        collection.summaries[key + '_equivalent_number'] = val.slice(2,3);
                    }
                }
                // Do the renaming of fields
                else if (typeof fieldMap[key] === 'string') {
                    collection.summaries[fieldMap[key]] = val;
                }
                // Move invalid summaries to the top level
                else if (moveToRoot.includes(key) && Array.isArray(val) && val.length === 1) {
                    collection[key] = val[0];
                }
                // Do the general conversion
                else {
                    collection.summaries[key] = val;
                }
            }
        }

        // Add missing required fields
        if (typeof collection.description !== 'string') {
            collection.description = "";
        }
        if (!Utils.isObject(collection.extent.spatial)) {
            collection.extent.spatial = {};
        }
        if (!Utils.isObject(collection.extent.temporal)) {
            collection.extent.temporal = {};
        }
        if (typeof collection.license !== 'string') {
            collection.license = "proprietary";
        }
        if (!Utils.isObject(collection.summaries)) {
            collection.summaries = {};
        }
        if (!Utils.isObject(collection['cube:dimensions'])) {
            collection['cube:dimensions'] = {};
        }
        else {
            for(var name in collection['cube:dimensions']) {
                if (Utils.isObject(collection['cube:dimensions'][name]) && !DIMENSION_TYPES.includes(collection['cube:dimensions'][name].type)) {
                    collection['cube:dimensions'][name].type = 'other';
                }
            }
        }

        // Fix links
        collection.links = MigrateCommons.migrateLinks(collection.links);

        // Fix stac_extensions
        var extensions = Array.isArray(collection.stac_extensions) ? collection.stac_extensions : [];
        for(var key in collection) {
            let ext = null;
            let prefix = key.split(':', 1);
            if (key === 'deprecated' || key === 'version') {
                ext = 'version';
            }
            else if (typeof extMap[prefix] === 'string') {
                ext = extMap[prefix];
            }

            if (ext !== null && !extensions.includes(ext)) {
                extensions.push(ext);
            }
        }
        extensions.sort();
        collection.stac_extensions = extensions;

        return collection;
    }

}

module.exports = MigrateCollections;

/***/ }),

/***/ "226e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

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
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
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
  maxBodyLength: -1,

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "2447":
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__("382f");
const Versions = __webpack_require__("ab25");
const MigrateCommons = __webpack_require__("4f10");

const NO_VERSION = "0.0.0";

/** Migrate capabilities related responses to the latest version. */
class MigrateCapabilities {

    /**
     * Tries to determine the API version from the capabilities object.
     * 
     * Returns the version number, e.g. "0.4.2", "1.0.0" or "0.0.0" (if unknown).
     * 
     * @param {object} capabilities 
     * @returns {string}
     */
    static guessApiVersion(capabilities) {
        // No object passed
        if (!Utils.isObject(capabilities)) {
            return NO_VERSION;
        }

        // Get exact info from version fields
        if (Versions.validate(capabilities.api_version)) {
            return capabilities.api_version;
        }
        else if (Versions.validate(capabilities.version)) {
            return capabilities.version;
        }
        // Now we are really guessing
        else if (Array.isArray(capabilities.endpoints)) {
            if (capabilities.endpoints.find(e => e.path === '/file_formats' || e.path === '/conformance' || e.path === '/files')) {
                return "1.0.0";
            }
            else if (capabilities.endpoints.find(e => e.path === '/output_formats' || e.path === '/files/{user_id}')) {
                return "0.4.2";
            }
            else if (!capabilities.backend_version && !capabilities.title && !capabilities.description && !capabilities.links) {
                return "0.3.1";
            }
        }

        // Can't determine version
        return NO_VERSION;
    }

    /**
     * Converts a `GET /` response to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} response - The response to convert
     * @param {string|null} version - Version number of the API, which the response conforms to. If `null`, tries to guess the version with `guessApiVersion()`.
     * @param {boolean} updateVersionNumbers - Should version numbers in the response be updated?
     * @param {boolean} updateEndpointPaths - Should the endpoint paths be updated to their recent equivalents?
     * @param {string} id - If no id is set in the response, sets it to the value specified here. Defaults to `unknown`.
     * @param {string} title - If no title is set in the response, sets it to the value specified here. Defaults to `Unknown`.
     * @param {string} title - If no backend_version is set in the response, sets it to the value specified here. Defaults to `0.0.0`.
     * @returns {object}
     */
    static convertCapabilitiesToLatestSpec(originalCapabilities, version = null, updateVersionNumbers = true, updateEndpointPaths = true, id = "unknown", title = "Unknown", backend_version = "0.0.0") {
        if (version === null) {
            version = this.guessApiVersion(originalCapabilities);
        }
        // Return empty if version number is not available
        if (version === NO_VERSION) {
            return {};
        }

        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }

        let capabilities = Utils.deepClone(originalCapabilities);
        // Fill & Update version number
        if (!updateVersionNumbers) {
            capabilities.api_version = version;
        }
        else {
            capabilities.api_version = "1.0.0";
        }

        // Convert billing plans
        if (Utils.isObject(capabilities.billing)) {
            capabilities.billing = this.convertBillingToLatestSpec(capabilities.billing, version);
        }
        else {
            delete capabilities.billing;
        }

        // Convert endpoints
        capabilities.endpoints = this.convertEndpointsToLatestSpec(capabilities.endpoints, version, updateEndpointPaths);

        // Fill STAC Version field
        if (!updateVersionNumbers && Versions.compare(version, "0.4.x", "=")) {
            capabilities.stac_version = "0.6.2";
        }
        else if (updateVersionNumbers || typeof capabilities.stac_version !== 'string') {
            capabilities.stac_version = "0.9.0";
        }

        // Add missing fields with somewhat useful data
        if (typeof capabilities.production !== 'boolean') {
            capabilities.production = Versions.compare(version, "1.0.0-rc.1", "=") || Versions.compare(version, "1.0.0-rc.2", "=") ? true : false;
        }
        if (typeof capabilities.backend_version !== 'string') {
            capabilities.backend_version = backend_version;
        }
        if (typeof capabilities.id !== 'string') {
            capabilities.id = id;
        }
        if (typeof capabilities.title !== 'string') {
            capabilities.title = title;
        }
        if (typeof capabilities.description !== 'string') {
            capabilities.description = "";
        }
        capabilities.links = MigrateCommons.migrateLinks(capabilities.links, version);

        return capabilities;
    }

    /**
     * Converts the billing part of the `GET /` response to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} billing - The response to convert
     * @param {string} version - Version number of the API, which the response conforms to
     * @returns {object}
     */
    static convertBillingToLatestSpec(billing, version) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }
        if (Utils.isObject(billing)) {
            billing = Utils.deepClone(billing);
        }
        else {
            billing = {};
        }

        if (typeof billing.currency !== 'string') {
            billing.currency = null;
        }

        return billing;
    }

    /**
     * Converts the endpoints part of the `GET /` response to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {array} endpoints - The response to convert
     * @param {string} version - Version number of the API, which the response conforms to
     * @param {boolean} updatePaths - Should the endpoint paths be updated to their recent equivalents?
     * @returns {array}
     */
    static convertEndpointsToLatestSpec(endpoints, version, updatePaths = false) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }
        if (!Array.isArray(endpoints)) {
            return [];
        }
        endpoints = Utils.deepClone(endpoints);
        // convert v0.4 endpoints to v1.0
        if (updatePaths) {
            let isV04 = Versions.compare(version, "0.4.x", "=");
            let isLtV100RC2 = Versions.compare(version, "1.0.0-rc.2", "<");

            let addPutToPg = function(endpoints) {
                let newPgPath = '/process_graphs/{process_graph_id}';
                let i = endpoints.findIndex(e => e.path === newPgPath);
                if (i >= 0) {
                    if (endpoints[i].methods.indexOf('PUT') === -1) {
                        endpoints[i].methods.push('PUT');
                    }
                }
                else {
                    endpoints.push({
                        path: newPgPath,
                        methods: ['PUT']
                    });
                }
                return endpoints;
            };

            for(var i in endpoints) {
                let e = endpoints[i];
                if (isV04) {
                    switch (e.path) {
                        case '/output_formats':
                            e.path = '/file_formats';
                            break;
                        case '/files/{user_id}':
                            e.path = '/files';
                            break;
                        case '/files/{user_id}/{path}':
                            e.path = '/files/{path}';
                            break;
                    }
                }
                if (isLtV100RC2) {
                    switch (e.path) {
                        case '/process_graphs':
                            let post = e.methods.indexOf('POST');
                            if (post >= 0) {
                                e.methods.splice(post, 1);
                                addPutToPg(endpoints);
                            }
                            break;
                        case '/process_graphs/{process_graph_id}':
                            let patch = e.methods.indexOf('PATCH');
                            if (patch >= 0) {
                                e.methods.splice(patch, 1);
                                addPutToPg(endpoints);
                            }
                            break;
                    }
                }
            }
        }
        return endpoints;
    }

    /**
     * Alias for `convertFileFormatsToLatestSpec()`.
     * 
     * @alias MigrateCapabilities.convertFileFormatsToLatestSpec
     * @deprecated
     * @param {object} formats - The response to convert
     * @param {string} version - Version number of the API, which the response conforms to
     * @returns {object}
     */
    static convertOutputFormatsToLatestSpec(formats, version) {
        return this.convertFileFormatsToLatestSpec(formats, version);
    }

    /**
     * Converts a `GET /file_formats` response to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} formats - The response to convert
     * @param {string} version - Version number of the API, which the response conforms to
     * @returns {object}
     */
    static convertFileFormatsToLatestSpec(formats, version) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }
        if (Utils.isObject(formats)) {
            formats = Utils.deepClone(formats);
        }
        else {
            formats = {};
        }

        if (Versions.compare(version, "0.4.x", "=") && Utils.isObject(formats)) {
            formats = {
                output: formats
            };
        }

        formats.input = upgradeFileFormats(formats.input, version);
        formats.output = upgradeFileFormats(formats.output, version);

        return formats;
    }

    /**
     * Converts a `GET /service_types` response to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} types - The response to convert
     * @param {string} version - Version number of the API, which the response conforms to
     * @returns {object}
     */
    static convertServiceTypesToLatestSpec(types, version) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }
        if (!Utils.isObject(types)) {
            return {};
        }

        types = Utils.deepClone(types);
        for(let t in types) {
            if (!Utils.isObject(types[t])) {
                types[t] = {};
            }
            if (Versions.compare(version, "0.4.x", "=")) {
                // Remove attributes
                delete types[t].attributes;

                // Rename parameters to configuration
                if (Utils.isObject(types[t].parameters)) {
                    types[t].configuration = types[t].parameters;
                }
                delete types[t].parameters;

                // Rename variables to process_parameters
                if (Array.isArray(types[t].variables)) {
                    types[t].process_parameters = types[t].variables.map(v => {
                        let param = {
                            name: v.variable_id,
                            description: typeof v.description === 'string' ? v.description : "",
                            schema: {
                                type: [
                                    typeof v.type === 'string' ? v.type : "string",
                                    "null"
                                ]
                            }
                        };
                        if (typeof v.default !== 'undefined') {
                            param.default = v.default;
                        }
                        return param;
                    });
                }
                delete types[t].variables;
            }

            if (!Utils.isObject(types[t].configuration)) {
                types[t].configuration = {};
            }
            else {
                types[t].configuration = MigrateCommons.migrateDiscoveryParameters(types[t].configuration, version);
            }

            if (!Array.isArray(types[t].process_parameters)) {
                types[t].process_parameters = [];
            }

            if (typeof types[t].links !== 'undefined') { // links not required, so only apply if defined anyway
                types[t].links = MigrateCommons.migrateLinks(types[t].links, version);
            }
        }
        return types;
    }

    /**
     * Converts a `GET /udf_runtimes` response to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} runtimes - The response to convert
     * @param {string} version - Version number of the API, which the response conforms to
     * @returns {object}
     */
    static convertUdfRuntimesToLatestSpec(runtimes, version) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }
        if (!Utils.isObject(runtimes)) {
            return {};
        }

        runtimes = Utils.deepClone(runtimes);
        for(let r in runtimes) {
        // Nothing to do, was not supported in 0.3 and nothing changed in 0.4.
            if (Versions.compare(version, "0.4.x", "=")) {
                if (!Utils.isObject(runtimes[r])) {
                    delete runtimes[r];
                    continue;
                }

                // null is not allowed any longer, replace with empty string
                if (runtimes[r].description === null) {
                    runtimes[r].description = "";
                }
            }

            if (typeof runtimes[r].type !== 'string') {
                if (typeof runtimes[r].docker === 'string') {
                    runtimes[r].type = 'docker';
                }
                else {
                    runtimes[r].type = 'language';
                }
            }

            if (typeof runtimes[r].links !== 'undefined') { // links not required, so only apply if defined anyway
                runtimes[r].links = MigrateCommons.migrateLinks(runtimes[r].links, version);
            }
        }

        return runtimes;
    }

}

const GIS_DATA_TYPES = ['raster', 'vector', 'table', 'other'];

function upgradeFileFormats(formats, version) {
    if (!Utils.isObject(formats)) {
        formats = {};
    }
    for(let id in formats) {
        if (!Utils.isObject(formats[id].parameters)) {
            formats[id].parameters = {};
        }
        else {
            formats[id].parameters = MigrateCommons.migrateDiscoveryParameters(formats[id].parameters, version);
        }

        // Can be empty: https://github.com/Open-EO/openeo-api/issues/325
        if (!Array.isArray(formats[id].gis_data_types)) {
            formats[id].gis_data_types = [];
        }
        else {
            formats[id].gis_data_types = formats[id].gis_data_types.filter(t => GIS_DATA_TYPES.includes(t));
        }

        if (typeof formats[id].links !== 'undefined') { // links not required, so only apply if defined anyway
            formats[id].links = MigrateCommons.migrateLinks(formats[id].links, version);
        }
    }
    return formats;
}

module.exports = MigrateCapabilities;

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "2979":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/SearchBox.vue?vue&type=template&id=b6626b8e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-component search-box"},[_c('span',{staticClass:"icon"},[_vm._v("🔎")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchTerm),expression:"searchTerm"}],attrs:{"type":"search","placeholder":_vm.placeholder,"minlength":_vm.minLength,"title":_vm.searchHint},domProps:{"value":(_vm.searchTerm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchTerm=$event.target.value}}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/SearchBox.vue?vue&type=template&id=b6626b8e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/SearchBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SearchBoxvue_type_script_lang_js_ = ({
  name: 'SearchBox',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    minLength: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      searchTerm: this.value
    };
  },

  watch: {
    searchTerm(newValue, oldValue) {
      if (newValue.length < this.minLength) {
        newValue = '';
      }

      this.$emit('input', newValue);
    }

  },
  computed: {
    searchHint() {
      if (this.minLength > 1) {
        return `Searching requires at least ${this.minLength} characters.`;
      }

      return null;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/SearchBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchBoxvue_type_script_lang_js_ = (SearchBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/SearchBox.vue?vue&type=style&index=0&lang=css&
var SearchBoxvue_type_style_index_0_lang_css_ = __webpack_require__("f6f8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/SearchBox.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SearchBox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2b37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/Process.vue?vue&type=template&id=b0de83cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"vue-component process"},[_vm._t("title",[_c('a',{staticClass:"anchor",attrs:{"name":_vm.process.id}}),_c('h2',[_vm._v(_vm._s(_vm.process.id))])],{"vBind":_vm.$props}),(_vm.provideDownload || _vm.hasElements(_vm.process.categories))?[_c('div',{staticClass:"process-bar"},[(_vm.hasElements(_vm.process.categories))?_c('ul',{staticClass:"badges categories"},_vm._l((_vm.process.categories),function(value,key){return _c('li',{key:key,staticClass:"badge category",domProps:{"textContent":_vm._s(_vm.formatCategory(value))}})}),0):_vm._e(),(_vm.provideDownload)?_c('ul',{staticClass:"badges actions"},[_c('li',{staticClass:"badge action download"},[_c('a',{staticClass:"badge-fill",on:{"click":_vm.download}},[_vm._v("Download JSON")])])]):_vm._e()])]:_vm._e(),(_vm.process.summary || _vm.process.deprecated || _vm.process.experimental)?[_c('summary',[_vm._v(" "+_vm._s(_vm.process.summary)+" "),(_vm.process.deprecated || _vm.process.experimental)?[(_vm.process.summary)?[_vm._v(" — ")]:_vm._e(),(_vm.process.deprecated)?_c('strong',{staticClass:"deprecated"},[_vm._v("deprecated")]):_vm._e(),(_vm.process.experimental)?_c('strong',{staticClass:"experimental"},[_vm._v("experimental")]):_vm._e()]:_vm._e()],2)]:_vm._e(),_vm._t("before-description",null,{"vBind":_vm.$props}),(_vm.process.description)?_c('section',{staticClass:"description"},[_c('h3',[_vm._v("Description")]),_c('code',{staticClass:"signature",domProps:{"innerHTML":_vm._s(_vm.signature)}}),_c('Description',{attrs:{"description":_vm.process.description,"processUrl":_vm.processUrl}}),(_vm.process.deprecated)?_c('DeprecationNotice',{attrs:{"entity":"process"}}):_vm._e(),(_vm.process.experimental)?_c('ExperimentalNotice',{attrs:{"entity":"process"}}):_vm._e()],1):_vm._e(),_c('section',{staticClass:"parameters"},[_c('h3',[_vm._v("Parameters")]),_vm._l((_vm.parameters),function(param,i){return _c('ProcessParameter',{key:i,attrs:{"parameter":param,"processUrl":_vm.processUrl}})}),(_vm.parameters.length === 0)?_c('p',[_vm._v("This process has no parameters.")]):_vm._e()],2),_c('section',{staticClass:"returns"},[_c('h3',[_vm._v("Return Value")]),(_vm.returns.description)?_c('Description',{attrs:{"description":_vm.returns.description,"processUrl":_vm.processUrl}}):_vm._e(),(_vm.returns.schema)?_c('div',{staticClass:"json-schema-container"},[_c('JsonSchema',{attrs:{"schema":_vm.returns.schema}})],1):_vm._e()],1),(_vm.hasElements(_vm.process.exceptions))?_c('section',{staticClass:"exceptions"},[_c('h3',[_vm._v("Errors/Exceptions")]),_c('ul',_vm._l((_vm.process.exceptions),function(exception,name){return _c('li',{key:name,staticClass:"exception"},[_c('code',[_vm._v(_vm._s(name))]),(exception.http)?_c('span',{staticClass:"http-code"},[_vm._v(" — HTTP "+_vm._s(exception.http))]):_vm._e(),(exception.code)?_c('span',{staticClass:"error-code"},[_vm._v(" — "+_vm._s(exception.code))]):_vm._e(),(exception.description)?_c('Description',{attrs:{"description":exception.description,"processUrl":_vm.processUrl,"compact":true}}):_vm._e(),(exception.message)?_c('div',{staticClass:"message"},[_vm._v("Message: "),_c('em',[_vm._v(_vm._s(exception.message))])]):_vm._e()],1)}),0)]):_vm._e(),(_vm.hasElements(_vm.process.examples))?_c('section',{staticClass:"examples"},[_c('h3',[_vm._v("Examples")]),_vm._l((_vm.process.examples),function(example,key){return _c('ProcessExample',{key:key,attrs:{"id":key,"example":example,"processId":_vm.process.id,"processParameters":_vm.parameters,"processUrl":_vm.processUrl}})}),_c('LinkList',{attrs:{"links":_vm.exampleLinks,"heading":"Processes","headingTag":"h4"}})],2):_vm._e(),_c('section',{staticClass:"links"},[_c('LinkList',{attrs:{"links":_vm.process.links,"heading":"See Also","headingTag":"h3","ignoreRel":['self', 'example']}})],1),_vm._t("end",null,{"vBind":_vm.$props})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/Process.vue?vue&type=template&id=b0de83cc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/internal/ProcessExample.vue?vue&type=template&id=fac0ba80&
var ProcessExamplevue_type_template_id_fac0ba80_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-component process-example"},[_c('h4',[_vm._v(_vm._s(_vm.title))]),_c('div',{staticClass:"content"},[(_vm.example.description)?_c('Description',{attrs:{"description":_vm.example.description,"processUrl":_vm.processUrl}}):_vm._e(),(_vm.example.arguments)?_c('div',{staticClass:"arguments"},[_c('code',{domProps:{"innerHTML":_vm._s(_vm.renderedArguments)}})]):_vm._e()],1)])}
var ProcessExamplevue_type_template_id_fac0ba80_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/ProcessExample.vue?vue&type=template&id=fac0ba80&

// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/utils.js + 10 modules
var utils = __webpack_require__("60a2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/internal/ProcessExample.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProcessExamplevue_type_script_lang_js_ = ({
  name: 'ProcessExample',
  props: {
    id: Number,
    example: Object,
    processId: String,
    processParameters: Array,
    processUrl: String
  },
  components: {
    Description: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "8088"))
  },
  computed: {
    identifier() {
      return "#" + (this.id + 1);
    },

    title() {
      return this.example.title ? this.example.title + " (" + this.identifier + ")" : "Example " + this.identifier;
    },

    renderedArguments() {
      var params = [];

      for (var i in this.processParameters) {
        var param = this.processParameters[i];

        if (typeof this.example.arguments[param.name] !== 'undefined') {
          var arg = this.example.arguments[param.name];
          let displayValue;

          if (utils["a" /* default */].isObject(arg) && arg.from_parameter) {
            displayValue = '<em title="Variable">$' + utils["a" /* default */].htmlentities(arg.from_parameter) + '</em>';
          } else if (utils["a" /* default */].isObject(arg) && arg.from_node) {
            displayValue = '<em title="Result from other process">$' + utils["a" /* default */].htmlentities(arg.from_node) + '</em>';
            ;
          } else {
            displayValue = JSON.stringify(arg);
          }

          params.push('<span class="param-name">' + param.name + '</span> = <span class="argument">' + displayValue + '</span>');
        }
      }

      var returns = "";

      if (typeof this.example.returns !== 'undefined') {
        returns = ' => <span class="return-value">' + JSON.stringify(this.example.returns) + '</span>';
      }

      return '<span class="process-name">' + this.processId + '</span>' + "(" + params.join(", ") + ")" + returns;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/ProcessExample.vue?vue&type=script&lang=js&
 /* harmony default export */ var internal_ProcessExamplevue_type_script_lang_js_ = (ProcessExamplevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/internal/ProcessExample.vue?vue&type=style&index=0&lang=css&
var ProcessExamplevue_type_style_index_0_lang_css_ = __webpack_require__("73d4");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/ProcessExample.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  internal_ProcessExamplevue_type_script_lang_js_,
  ProcessExamplevue_type_template_id_fac0ba80_render,
  ProcessExamplevue_type_template_id_fac0ba80_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProcessExample = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/Process.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Processvue_type_script_lang_js_ = ({
  name: 'Process',
  components: {
    JsonSchema: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "6e45")),
    DeprecationNotice: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "5dc7")),
    Description: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "8088")),
    ExperimentalNotice: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "b581")),
    ProcessExample: ProcessExample,
    ProcessParameter: () => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "81dd")),
    LinkList: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "4845"))
  },
  props: {
    process: {
      type: Object,
      default: () => ({})
    },
    provideDownload: {
      type: Boolean,
      default: true
    },
    processUrl: String
  },
  computed: {
    parameters() {
      if (Array.isArray(this.process.parameters)) {
        return this.process.parameters;
      } else {
        return [];
      }
    },

    returns() {
      if (utils["a" /* default */].isObject(this.process.returns)) {
        return this.process.returns;
      } else {
        return {};
      }
    },

    signature(html = true) {
      let params = [];

      for (let i in this.parameters) {
        let p = this.parameters[i];
        let pType = utils["a" /* default */].dataType(p.schema, true);
        let req = p.optional ? '?' : '';
        let pStr;

        if (html) {
          pStr = '<span class="optional">' + req + '</span><span class="data-type">' + utils["a" /* default */].htmlentities(pType) + '</span> <span class="param-name">' + p.name + "</span>";
        } else {
          pStr = req + pType + " " + p.name;
        }

        params.push(pStr);
      }

      let returns = utils["a" /* default */].dataType(this.returns.schema, true);
      let paramStr = "(" + params.join(", ") + ") : ";

      if (html) {
        return '<span class="process-name">' + this.process.id + '</span>' + paramStr + '<span class="data-type">' + utils["a" /* default */].htmlentities(returns) + "</span>";
      } else {
        return this.process.id + paramStr + returns;
      }
    },

    exampleLinks() {
      if (Array.isArray(this.process.links)) {
        return this.process.links.filter(l => l.rel === 'example');
      }

      return [];
    }

  },

  beforeCreate() {
    utils["a" /* default */].enableHtmlProps(this);
  },

  methods: {
    hasElements(data) {
      return typeof data === 'object' && data !== null && Object.keys(data).length > 0;
    },

    formatCategory(name) {
      return name.replace('_', ' ');
    },

    download() {
      let dataStr = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.process, null, 2));
      let downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", this.process.id + ".json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/Process.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Processvue_type_script_lang_js_ = (Processvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/Process.vue?vue&type=style&index=0&lang=css&
var Processvue_type_style_index_0_lang_css_ = __webpack_require__("f17b");

// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/Process.vue






/* normalize component */

var Process_component = Object(componentNormalizer["a" /* default */])(
  components_Processvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Process = __webpack_exports__["default"] = (Process_component.exports);

/***/ }),

/***/ "2c72":
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__("382f");
const Versions = __webpack_require__("ab25");
const MigrateCommons = __webpack_require__("4f10");

/** Migrate processes related responses to the latest version. */
class MigrateProcesses {

    /**
     * Converts a `GET /process` response to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} response - The response to convert
     * @param {string} version - Version number of the API, which the response conforms to
     * @returns {object}
     */
    static convertProcessesToLatestSpec(response, version) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }

        // Make sure we don't alter the original object
        response = Utils.deepClone(response);

        if (Array.isArray(response.processes)) {
            response.processes = response.processes
                .map(p => MigrateProcesses.convertProcessToLatestSpec(p, version))
                .filter(p => typeof p.id === 'string');
        }
        else {
            response.processes = [];
        }

        response.links = MigrateCommons.migrateLinks(response.links, version);

        return response;
    }

    /**
     * Converts a single process to the latest version.
     * 
     * Always returns a deep copy of the input object.
     * 
     * @param {object} process - The process to convert
     * @param {string} version - Version number of the API, which the process conforms to
     * @returns {object}
     */
    static convertProcessToLatestSpec(process, version) {
        if (Versions.compare(version, "0.3.x", "<=")) {
            throw "Migrating from API version 0.3.0 and older is not supported.";
        }

        // Make sure we don't alter the original object
        process = Utils.deepClone(process);

        // If process has no id => seems to be an invalid process => abort
        if (typeof process.id !== 'string' || process.id.length === 0) {
            return {};
        }

        // Convert the parameters from object to array
        if (Versions.compare(version, "0.4.x", "=")) {
            // Determine the parameter order
            if (!Array.isArray(process.parameter_order) || process.parameter_order.length === 0) {
                process.parameter_order = [];
                for(let param in process.parameters) {
                    process.parameter_order.push(param);
                }
            }
    
            // Upgrade parameters and convert from array to object
            let params = [];
            for(let name of process.parameter_order) {
                // Add name 
                let obj = {name: name};
                if (Utils.isObject(process.parameters[name])) {
                    Object.assign(obj, process.parameters[name]);
                }

                // Migrate from required to optional
                if (!obj.required) {
                    obj.optional = true;
                }
                delete obj.required;

                // Add to list of ordered params
                params.push(obj);
            }
            delete process.parameter_order;
            process.parameters = params;
        }

        // Set required field description if not a string
        if (typeof process.description !== 'string') {
            process.description = "";
        }

        // Update parameters
        if (Array.isArray(process.parameters)) {
            for (var i = process.parameters.length-1; i >= 0; i--) {
                let param = process.parameters[i];
                if (!Utils.isObject(param)) {
                    process.parameters.splice(i, 1);
                    continue;
                }

                // Set required field description if not a string
                if (typeof param.description !== 'string') {
                    param.description = "";
                }

                // Upgrade parameter schema
                process.parameters[i] = upgradeSchema(param, version);
            }
        }
        else {
            process.parameters = [];
        }

        // Update return value
        if (!Utils.isObject(process.returns)) {
            process.returns = {};
        }
        process.returns = upgradeSchema(process.returns, version, false);

        // Remove process graphs from examples (and ensure there are arguments given)
        if (Array.isArray(process.examples)) {
            process.examples = process.examples.filter(example => Utils.isObject(example) && Utils.isObject(example.arguments));
        }

        if (typeof process.links !== 'undefined') { // links not required, so only apply if defined anyway
            process.links = MigrateCommons.migrateLinks(process.links, version);
        }

        // Update process graph -> nothing to do yet

        return process;
    }

}
    
function upgradeSchema(obj, version, isParam = true) {
    var schema = {};
    if (obj.schema && typeof obj.schema === 'object') { // array or object?
        schema = obj.schema;
    }

    if (Versions.compare(version, "0.4.x", "=")) {
        // Remove anyOf/oneOf wrapper
        for(let type of ['anyOf', 'oneOf']) {
            if (Array.isArray(schema[type])) {
                // Parameters only: Move default value to parameter-level
                if (isParam && typeof schema.default !== 'undefined') {
                    obj.default = schema.default;
                }
                // Move array one level up, removing anyOf and oneOf
                schema = schema[type];
                break;
            }
        }

        let moveMediaType = (Versions.compare(version, "0.4.x") <= 0 && typeof obj.media_type !== 'undefined');
        let schemas = Array.isArray(schema) ? schema : [schema];
        for(let subSchema of schemas) {
            // Rename format to subtype recursively
            subSchema = renameFormat(subSchema);

            // Parameters only: Move default value to parameter-level
            if (isParam && typeof subSchema.default !== 'undefined') {
                obj.default = subSchema.default;
                delete subSchema.default;
            }

            // Replace media_type field with contentMediaType from JSON Schemas
            if (moveMediaType) {
                subSchema.contentMediaType = obj.media_type;
            }
        }

        // Remove the media type
        if (moveMediaType) {
            delete obj.media_type;
        }
    }

    // Clients SHOULD automatically set `optional` to `true`, if a default value is specified.
    if (Versions.compare(version, "0.4.x", ">")) {
        if (typeof obj.default !== 'undefined') {
            obj.optional = true;
        }
    }

    obj.schema = schema;
    return obj;
}

function renameFormat(schema) {
    if (Utils.isObject(schema) && typeof schema.type !== 'undefined' && typeof schema.format === 'string') {
        switch(schema.format) {
            case 'url':
                schema.format = 'uri';
                break;
            case 'proj-definition':
                schema.deprecated = true;
                break;
            case 'callback':
                schema.format = 'process-graph';
                if (Utils.isObject(schema.parameters)) {
                    let params = [];
                    for(let name in schema.parameters) {
                        let paramSchema = schema.parameters[name];
                        let param = {
                            name: name,
                            description: typeof paramSchema.description === 'string' ? paramSchema.description : "",
                            schema: paramSchema
                        };
                        params.push(param);
                    }
                    schema.parameters = params;
                }
                break;
        }

        schema.subtype = schema.format;
        // Leave format for "well-known" formats defined in JSON Schema
        if (!['date-time', 'time', 'date', 'uri'].includes(schema.format)) {
            delete schema.format;
        }
    }
    for(let i in schema) {
        if (schema[i] && typeof schema[i] === 'object') {
            schema[i] = renameFormat(schema[i]);
        }
    }
    return schema;
}

module.exports = MigrateProcesses;

/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

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

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
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

/***/ "382f":
/***/ (function(module, exports, __webpack_require__) {

var equal = __webpack_require__("9f6a");


/**
 * General utilities
 * 
 * @class
 */
class Utils {

	/**
	 * Checks whether a variable is a real object or not.
	 * 
	 * This is a more strict version of `typeof x === 'object'` as this example would also succeeds for arrays and `null`.
	 * This function only returns `true` for real objects and not for arrays, `null` or any other data types.
	 * 
	 * @param {*} obj - A variable to check.
	 * @returns {boolean} - `true` is the given variable is an object, `false` otherwise.
	 */
	static isObject(obj) {
		return (typeof obj === 'object' && obj === Object(obj) && !Array.isArray(obj));
	}

	/**
	 * Performs a deep comparison between two values to determine if they are equivalent.
	 * 
	 * @param {*} x - The value to compare.
	 * @param {*} y - The other value to compare.
	 * @returns {boolean} - Returns true if the values are equivalent, else false.
	 */
	static equals(x, y) {
		return equal(x, y);
	}

	/**
	 * Creates an object composed of the picked object properties.
	 * 
	 * Returns a shallow copy!
	 * 
	 * @param {object} obj - The source object.
	 * @param {string|array} toPick - The properties to pick.
	 * @returns {object}
	 */
	static pickFromObject(obj, toPick) {
		obj = Object(obj);
		if (typeof toPick === 'string') {
			toPick = [toPick];
		}
		const copy = {};
		toPick.forEach(key => copy[key] = obj[key]);
		return copy;
	}

	/**
	 * This method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
	 * 
	 * Returns a shallow copy!
	 * 
	 * @param {object} obj - The source object.
	 * @param {string|array} toOmit - The properties to omit.
	 * @returns {object}
	 */
	static omitFromObject(obj, toOmit) {
		obj = Object(obj);
		if (typeof toOmit === 'string') {
			toOmit = [toOmit];
		}
		var copy = Object.assign({}, obj);
		for(let key of toOmit) {
			delete copy[key];
		}
		return copy;
	}

	/**
	 *  Creates an array of values by running each property of `object` thru function.
	 * 
	 * The function is invoked with three arguments: (value, key, object).
	 * 
	 * @param {object} obj 
	 * @param {function} func 
	 * @returns {object}
	 */
	static mapObject(obj, func) {
		// Taken from lodash, see https://github.com/lodash/lodash/blob/master/mapObject.js
		const props = Object.keys(obj);
		const result = new Array(props.length);
		props.forEach((key, index) => {
			result[index] = func(obj[key], key, obj);
		});
		return result;
	}

	/**
	 * Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru the function.
	 * 
	 * The function is invoked with three arguments: (value, key, object).
	 * 
	 * @param {object} obj 
	 * @param {function} func 
	 * @returns {object}
	 */
	static mapObjectValues(obj, func) {
		// Taken from lodash, see https://github.com/lodash/lodash/blob/master/mapValue.js
		obj = Object(obj);
		const result = {};
		Object.keys(obj).forEach((key) => {
			result[key] = func(obj[key], key, obj);
		});
		return result;
	}

	/**
	 * Creates a duplicate-free version of an array.
	 * 
	 * If useEquals is set to true, uses the `Utils.equals` function for comparison instead of 
	 * the JS === operator. Thus, if the array contains objects, you likely want to set 
	 * `useEquals` to `true`.
	 * 
	 * @param {array} array
	 * @param {boolean} useEquals
	 * @returns {array}
	 */
	static unique(array, useEquals = false) {
		if (useEquals) {
			return array.filter((s1, pos, arr) => arr.findIndex(s2 => Utils.equals(s1, s2)) === pos);
		}
		else {
			return [...new Set(array)];
		}
	}
	
	/**
	 * Computes the size of an array (number of array elements) or object (number of key-value-pairs).
	 * 
	 * Returns 0 for all other data types.
	 * 
	 * @param {*} obj 
	 * @returns {integer}
	 */
	static size(obj) {
		if (typeof obj === 'object' && obj !== null) {
			if (Array.isArray(obj)) {
				return obj.length;
			}
			else {
				return Object.keys(obj).length;
			}
		}
		return 0;
	}

	/**
	 * Checks whether a variable is numeric.
	 * 
	 * Numeric is every string with numeric data or a number, excluding NaN and finite numbers.
	 * 
	 * @param {*} n - A variable to check.
	 * @returns {boolean} - `true` is the given variable is numeric, `false` otherwise.
	 */
	static isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
    }
    
    /**
     * Deep clone for JSON-compatible data.
     * 
     * @param {*} x - The data to clone.
     * @returns {*} - The cloned data.
     */
    static deepClone(x) {
		return JSON.parse(JSON.stringify(x));
    }

	/**
	 * Normalize a URL (mostly handling leading and trailing slashes).
	 * 
	 * @static
	 * @param {string} baseUrl - The URL to normalize
	 * @param {string} path - An optional path to add to the URL
	 * @returns {string} Normalized URL.
	 */
	static normalizeUrl(baseUrl, path = null) {
		let url = baseUrl.replace(/\/$/, ""); // Remove trailing slash from base URL
		if (typeof path === 'string') {
			if (path.substr(0, 1) !== '/') {
				path = '/' + path; // Add leading slash to path
			}
			url = url + path.replace(/\/$/, ""); // Remove trailing slash from path
		}
		return url;
	}

	/**
	 * Replaces placeholders in this format: `{var}`.
	 * 
	 * This can be used for the placeholders/variables in the openEO API's errors.json file.
	 * 
	 * @param {string} message - The string to replace the placeholders in.
	 * @param {object} variables - A map with the placeholder names as keys and the replacement value as value.
	 */
	static replacePlaceholders(message, variables = {}) {
		if (typeof message === 'string' && Utils.isObject(variables)) {
			for(var placeholder in variables) {
				let vars = variables[placeholder];
				message = message.replace('{' + placeholder + '}', Array.isArray(vars) ? vars.join("; ") : vars);
			}
		}
		return message;
	}

	/**
	 * Compares two strings case-insensitive, including natural ordering for numbers.
	 * 
	 * @param {string} a 
	 * @param {string} b 
	 * @returns {integer} Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
	 */
    static compareStringCaseInsensitive(a, b) {
        if (typeof a !== 'string') {
            a = String(a);
        }
        if (typeof b !== 'string') {
            b = String(b);
        }
        return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
    }

	/**
	 * Tries to make a string more readable by capitalizing it.
	 * Only applies to words with more than two characters.
	 * 
	 * Supports converting from:
	 * - Snake Case (abc_def => Abc Def)
	 * - Kebab Case (abc-def => Abc Def)
	 * - Camel Case (abcDef => Abc Def)
	 * 
	 * Doesn't capitalize if the words are not in any of the casing formats above.
	 * 
	 * @param {*} strings - String(s) to make readable
	 * @param {string} arraySep - String to separate array elements with
	 * @returns {string}
	 */
    static prettifyString(strings, arraySep = '; ') {
		if (!Array.isArray(strings)) {
			strings = [String(strings)];
		}
		strings = strings.map(str => {
			if (str.length >= 3) {
				const replacer = (_,a,b) => a + ' ' + b.toUpperCase();
				if (str.includes('_')) {
					// Snake case converter
					str = str.replace(/([a-zA-Z\d])_([a-zA-Z\d])/g, replacer);
				}
				else if (str.includes('-')) {
					// Kebab case converter
					str = str.replace(/([a-zA-Z\d])-([a-zA-Z\d])/g, replacer);
				}
				else {
					// Camelcase converter
					str = str.replace(/([a-z])([A-Z])/g, replacer);
				}
				// Uppercase the first letter in the first word, too.
				return str.charAt(0).toUpperCase() + str.substr(1);
			}
			return str;
		});
		return strings.join(arraySep);	
    }

	/**
	 * Makes link lists from the openEO API more user-friendly.
	 * 
	 * Supports:
	 * - Set a reasonable title, if not available. Make title more readable.
	 * - Sorting by title (see `sort` parameter)
	 * - Removing given relation types (`rel` property, see `ignoreRel` parameter)
	 * 
	 * @param {array} linkList - List of links
	 * @param {boolean} sort - Enable/Disable sorting by title. Enabled (true) by default.
	 * @param {array} ignoreRel - A list of rel types to remove. By default, removes the self links (rel type = `self`).
	 * @returns {array}
	 */
    static friendlyLinks(linkList, sort = true, ignoreRel = ['self']) {
        let links = [];
        if (!Array.isArray(linkList)) {
            return links;
        }

        for(let link of linkList) {
            link = Object.assign({}, link); // Make sure to work on a copy
            if (typeof link.rel === 'string' && ignoreRel.includes(link.rel.toLowerCase())) {
                continue;
            }
            if (typeof link.title !== 'string' || link.title.length === 0) {
                if (typeof link.rel === 'string' && link.rel.length > 1) {
                    link.title = Utils.prettifyString(link.rel);
                }
                else {
                    link.title = link.href.replace(/^https?:\/\/(www.)?/i, '').replace(/\/$/i, '');
                }
            }
            links.push(link);
        }
        if (sort) {
            links.sort((a, b) => Utils.compareStringCaseInsensitive(a.title, b.title));
        }
        return links;
    }

}

module.exports = Utils;

/***/ }),

/***/ "387f":
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

  error.toJSON = function toJSON() {
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

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "423e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
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

/***/ "4845":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/LinkList.vue?vue&type=template&id=119a3aca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.friendlyLinks.length > 0)?_c('div',{staticClass:"vue-component link-list"},[(_vm.heading)?_c(_vm.headingTag,{tag:"component"},[_vm._v(_vm._s(_vm.heading))]):_vm._e(),_c('ul',_vm._l((_vm.friendlyLinks),function(link,key){return _c('li',{key:key},[_c('a',{attrs:{"href":link.href,"target":"_blank","rel":link.rel}},[_vm._v(_vm._s(link.title))]),(_vm.showRel && link.rel)?_c('span',{staticClass:"relation"},[_vm._v(" ("+_vm._s(link.rel)+")")]):_vm._e()])}),0)],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/LinkList.vue?vue&type=template&id=119a3aca&

// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/utils.js + 10 modules
var utils = __webpack_require__("60a2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/LinkList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LinkListvue_type_script_lang_js_ = ({
  name: 'LinkList',
  props: {
    links: {
      type: Array,
      default: () => []
    },
    sort: {
      type: Boolean,
      default: true
    },
    heading: {
      type: String,
      default: null
    },
    headingTag: {
      type: String,
      default: 'strong'
    },
    ignoreRel: {
      type: Array,
      default: () => ['self']
    },
    showRel: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    friendlyLinks() {
      return utils["a" /* default */].friendlyLinks(this.links, this.sort, this.ignoreRel);
    }

  },

  beforeCreate() {
    utils["a" /* default */].enableHtmlProps(this);
  }

});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/LinkList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LinkListvue_type_script_lang_js_ = (LinkListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/LinkList.vue?vue&type=style&index=0&lang=css&
var LinkListvue_type_style_index_0_lang_css_ = __webpack_require__("ab38");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/LinkList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LinkListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LinkList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  /* global Symbol -- required for testing */
  return !String(Symbol());
});


/***/ }),

/***/ "4a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4f10":
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__("382f");
const Versions = __webpack_require__("ab25");

class MigrateCommons {

	static migrateLinks(links, version, fallbackRel = 'related') {
		if (!Array.isArray(links)) {
			return [];
		}

		return links
			.filter(link => Utils.isObject(link) && typeof link.href === 'string')
			.map(link => {
				if (typeof link.rel !== 'string') {
					link.rel = fallbackRel;
				}
				return link;
			});
	}

	static migrateDiscoveryParameters(parameters, version) {
		if (Versions.compare(version, "1.0.0-rc.2", "<=")) {
			for(var name in parameters) {
				if (!Utils.isObject(parameters[name])) {
					delete parameters[name];
					continue;
				}

				let type = parameters[name].type;
				if (typeof type === 'string') {
					parameters[name].type = [type, "null"];
				}

				let example = parameters[name].example;
				if (typeof example !== 'undefined') {
					parameters[name].examples = [example];
					delete parameters[name].example;
				}
			}
		}

		return parameters;
	}

}

module.exports = MigrateCommons;

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");

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
    config.headers
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

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5f02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "60a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@openeo/js-commons/src/main.js
var main = __webpack_require__("fbda");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/internal/Loading.vue?vue&type=template&id=e3e49744&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-component loading-notice"},[_c('span',{staticClass:"loading"},[_vm._v("Loading")])])}]


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/Loading.vue?vue&type=template&id=e3e49744&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/internal/Loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  name: 'Loading'
});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/Loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var internal_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/internal/Loading.vue?vue&type=style&index=0&id=e3e49744&scoped=true&lang=css&
var Loadingvue_type_style_index_0_id_e3e49744_scoped_true_lang_css_ = __webpack_require__("92f3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/Loading.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  internal_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e3e49744",
  null
  
)

/* harmony default export */ var Loading = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/internal/Errored.vue?vue&type=template&id=5d748b24&
var Erroredvue_type_template_id_5d748b24_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"vue-component component-error-notice"},[_vm._v(" Sorry, could not load user interface from server. Please try again. ")])}
var Erroredvue_type_template_id_5d748b24_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/Errored.vue?vue&type=template&id=5d748b24&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/internal/Errored.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Erroredvue_type_script_lang_js_ = ({
  name: 'Errored'
});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/Errored.vue?vue&type=script&lang=js&
 /* harmony default export */ var internal_Erroredvue_type_script_lang_js_ = (Erroredvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/internal/Errored.vue





/* normalize component */

var Errored_component = Object(componentNormalizer["a" /* default */])(
  internal_Erroredvue_type_script_lang_js_,
  Erroredvue_type_template_id_5d748b24_render,
  Erroredvue_type_template_id_5d748b24_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Errored = (Errored_component.exports);
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/utils.js




class utils_Utils extends main["Utils"] {

    static kebabToCamelCase(str) {
        return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
    }

    static enableHtmlProps(vm) {
        // Don't execute if not in web-component mode (i.e. check for the shadow root)
        if (!utils_Utils.isObject(vm.$root) || !vm.$root.$options.shadowRoot) {
            return;
        }

        // Read the HTML props once the page is completely loaded and all props are completely available
        if(document.readyState !== 'loading') {
            utils_Utils.readHtmlProps(vm);
        }
        else {
            document.addEventListener('readystatechange', () => utils_Utils.enableHtmlProps(vm), {once: true});
        }
    }

    static readHtmlProps(vm) {
        if (!utils_Utils.isObject(vm) || !utils_Utils.isObject(vm.$slots) || !Array.isArray(vm.$slots.default)) {
            return;
        }

        // Read script tags
        let slots = vm.$slots.default.filter(slot => typeof slot.tag === 'string' && slot.tag.toUpperCase() === 'SCRIPT' && slot.data.attrs.type === 'application/json');
        for(let slot of slots) {
            let prop = null;
            try {
                if (typeof slot.data.attrs.prop === 'string' && slot.data.attrs.prop.length > 0) {
                    prop = utils_Utils.kebabToCamelCase(slot.data.attrs.prop);
                }
                let value = JSON.parse(slot.data.domProps.innerHTML);
                if (prop) {
                    utils_Utils.setProp(vm, prop, value); // Set a single prop
                }
                else if (utils_Utils.isObject(value)) {
                    for(let key in value) { // Set all props
                        utils_Utils.setProp(vm, key, value[key]);
                    }
                }
                else {
                    console.error(`Props passed via script tag must be contained in an object.`);
                }
            }
            catch (error) {
                if (prop) {
                    console.error(`Prop '${prop}' passed via script tag is invalid: ${error.message}`);
                }
                else {
                    console.error(`Props passed via script tag are invalid: ${error.message}`);
                }
            }
        }
    }

    static setProp(vm, prop, value) {
        // Depending on when during the page load this is executed, we
        // need either to populate propsData (initially available) or
        // $props (available after propsData has been read).
        let propsRef = utils_Utils.isObject(vm.$props) ? vm.$props : vm.$options.propsData;
        vm.$set(propsRef, utils_Utils.kebabToCamelCase(prop), value);
    }

    static loadAsyncComponent(importer) {
        return {
            component: importer,
            loading: Loading,
            error: Errored,
            delay: 0,
            timeout: 10000
        };
    }

    static dataType(schema, short = false, level = 0, type = undefined) {
        if (utils_Utils.isAnyType(schema)) {
            type = 'any';
        }
        if (typeof type === 'undefined') {
            type = schema.type;
        }
        if (typeof schema === 'object' && (Array.isArray(schema) || typeof schema.oneOf !== 'undefined' || typeof schema.anyOf !== 'undefined')) {
            if (short) {
                return 'mixed';
            }
            var choice;
            if (Array.isArray(schema)) {
                choice = schema;
            }
            else {
                choice = schema.oneOf || schema.anyOf;
            }
            var types = [];
            for(let i in choice) {
                types.push(utils_Utils.dataType(choice[i], short, level));
            }
            return types.join(', ');
        }
        else if (Array.isArray(type)) {
            var types = [];
            for(let i in type) {
                types.push(utils_Utils.dataType(schema, short, level, type[i]));
            }
            return types.join(short ? '|' : ', ');
        }
        else if (typeof type === 'string' && type.toLowerCase() === 'array' && typeof schema.items === 'object' && typeof schema.items.type !== 'undefined') {
            var arrType = "array<"+utils_Utils.dataType(schema.items, true, level+1)+">";
            if (typeof schema.subtype === 'string') {
                if (level == 0) {
                    return schema.subtype + (short ? ":" + arrType : " ("+arrType+")");
                }
                else {
                    return schema.subtype;
                }
            }
            else {
                return arrType;
            }
        }
        else if (typeof type === 'string' && typeof schema.subtype === 'string') {
            return schema.subtype + (short ? ":" + type : " ("+type+")");
        }
        return type;
    }

    static isAnyType(schema) {
		return (typeof schema !== 'object' || (!Array.isArray(schema) && typeof schema.type === 'undefined' && typeof schema.oneOf === 'undefined' && typeof schema.allOf === 'undefined' && typeof schema.anyOf === 'undefined'));
    }

    static htmlentities_decode(str) {
        if (typeof str !== 'string') {
            str = String(str);
        }
        return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
    }

    static htmlentities(str) {
        if (typeof str !== 'string') {
            str = String(str);
        }
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, '&apos;');
    }
    
    static countObjectKeys(data) {
        var count = {};
        for(var i in data) {
            var obj = data[i];
            if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
                return null;
            }
            for(var key in obj) {
                if (typeof count[key] === 'undefined') {
                    count[key] = 1;
                }
                else {
                    count[key]++;
                }
            }
        }
        return count;
    }

    static isTableLike(data, force = false) {
        if (typeof data !== 'object' || data === null) {
            return [];
        }

        var countedKeys = utils_Utils.countObjectKeys(data);
        if (countedKeys !== null) {
            if (force === true) {
                return Object.keys(countedKeys);
            }
            var num = 0;
            var sum = 0;
            for (var i in countedKeys) {
                num++;
                sum += countedKeys[i];
            }

            var avg = sum / num;
            var dataSize = Array.isArray(dataSize) ? data.length : Object.keys(data).length;
            if (avg > dataSize/2) {
                return Object.keys(countedKeys);
            }
        }

        return [];
    }

    static prettifyAbbreviation(str) {
        if (typeof str === 'string' && str.match(/[A-Z]+/) === null) {
            return str.toUpperCase();
        }
        return str;
    }

	static domBoundingBox(el) {
		var rect = el.getBoundingClientRect();
		rect.offsetTop = rect.top + document.body.scrollTop;
		rect.offsetLeft = rect.left + document.body.scrollLeft;
		return rect;
    }
    
	static ensurePoint(pt, fallback = null) {
		if (typeof fallback !== 'function') {
			fallback = () => [0,0];
		}
		if (!Array.isArray(pt)) {
			return fallback();
		}
		if (typeof pt[0] !== 'number') {
			pt[0] = fallback()[0] || 0;
		}
		if (typeof pt[1] !== 'number') {
			pt[1] = fallback()[1] || 0;
		}
		return pt;
    }
    
	static formatRef(value) {
		if (this.isRef(value)) {
			if (value.from_node) {
				return "#" + value.from_node;
			}
			else if (value.from_parameter) {
				return "$" + value.from_parameter;
			}
		}
		return value;
	}

	static isRef(obj) {
		return (utils_Utils.isObject(obj) && (obj.from_parameter || obj.from_node));
	}

	static isRefEqual(ref1, ref2) {
		if (!utils_Utils.isRef(ref1) || !utils_Utils.isRef(ref2)) {
			return false;
		}
		else if (ref1.from_parameter && ref1.from_parameter === ref2.from_parameter) {
			return true;
		}
		else if (ref1.from_node && ref1.from_node === ref2.from_node) {
			return true;
		}
		return false;
	}

	// A very rough GeoJSON detection, if no GeoJSON schema is available.
	static detectGeoJson(data) {
		if (!utils_Utils.isObject(data)) {
			return false;
		}
		else if (typeof data.type !== 'string') {
			return false;
		}

		switch(data.type) {
			case "Point":
			case "MultiPoint":
			case "LineString":
			case "MultiLineString":
			case "Polygon":
			case "MultiPolygon":
				if (!Array.isArray(data.coordinates)) {
					return false;
				}
				return true;
			case "GeometryCollection":
				if (!Array.isArray(data.geometries)) {
					return false;
				}
				return true;
			case "Feature":
				if (data.geometry !== null && !utils_Utils.isObject(data.geometry)) {
					return false;
				}
				if (data.properties !== null && !utils_Utils.isObject(data.properties)) {
					return false;
				}
				return true;
			case "FeatureCollection":
				if (!Array.isArray(data.features)) {
					return false;
				}
				return true;
			default:
				return false;
		}
    }
    
    static toProcessParameters(parameters) {
        if (utils_Utils.isObject(parameters)) {
            let processParameters = [];
            for(let name in parameters) {
                let param = parameters[name];
                let schema = utils_Utils.omitFromObject(param, ['description', 'required', 'default']);
                processParameters.push({
                    name,
                    description: param.description,
                    optional: !param.required,
                    default: param.default,
                    schema
                });
            }
            return processParameters.sort((a,b) => utils_Utils.compareStringCaseInsensitive(a.name, b.name));
        }
        else {
            return [];
        }
    }


};

/* harmony default export */ var utils = __webpack_exports__["a"] = (utils_Utils);

/***/ }),

/***/ "618e":
/***/ (function(module, exports, __webpack_require__) {

const Utils = __webpack_require__("382f");

/**
 * Utilities to parse process specs and JSON schemas.
 * 
 * @class
 */
class ProcessUtils {

	/**
	 * From a "complex" JSON Schema with allOf/anyOf/oneOf, make separate schemas.
	 * 
	 * So afterwards each schema has it's own array entry.
	 * It merges allOf, resolves anyOf/oneOf into separate schemas.
	 * May also split the JSON Schema type arrays into separate entries by setting `splitTypes` to `true`.
	 * 
	 * @param {object|array} schemas - The JSON Schema(s) to convert
	 * @returns {array}
	 */
	static normalizeJsonSchema(schemas, splitTypes = false) {
		// Make schemas always an array
		if (Utils.isObject(schemas)) {
			schemas = [schemas];
		}
		else if (Array.isArray(schemas)) {
			schemas = schemas;
		}
		else {
			schemas = [];
		}

		// Merge allOf, resolve anyOf/oneOf into separate schemas
		let normalized = [];
		for(let schema of schemas) {
			if (Array.isArray(schema.allOf)) {
				normalized.push(Object.assign({}, ...schema.allOf));
			}
			else if (Array.isArray(schema.oneOf) || Array.isArray(schema.anyOf)) {
				let copy = Utils.omitFromObject(schema, ['oneOf', 'anyOf']);
				let subSchemas = schema.oneOf || schema.anyOf;
				for(let subSchema of subSchemas) {
					normalized.push(Object.assign({}, copy, subSchema));
				}
			}
			else {
				normalized.push(schema);
			}
		}

		if (!splitTypes) {
			return normalized;
		}

		// Split type field into separate schemas
		schemas = [];
		for(let schema of normalized) {
			if (Array.isArray(schema.type)) {
				/* jshint ignore:start */
				schemas = schemas.concat(schema.type.map(type => Object.assign({}, schema, {type: type})));
				/* jshint ignore:end */
			}
			else {
				schemas.push(schema);
			}
		}

		return schemas;
	}

	/**
	 * Returns the callback parameters for a given process parameter.
	 * 
	 * @param {object} processParameter - The process parameter spec to parse.
	 * @returns {array}
	 * @throws {Error}
	 */
	static getCallbackParameters(processParameter, keyPath = []) {
		if (!Utils.isObject(processParameter) || !processParameter.schema) {
			return [];
		}

		let schemas = ProcessUtils.normalizeJsonSchema(processParameter.schema);
		let key;
		while(key = keyPath.shift()) { // jshint ignore:line
			schemas = schemas.map(schema => ProcessUtils.normalizeJsonSchema(ProcessUtils.getElementJsonSchema(schema, key))); // jshint ignore:line
			schemas = schemas.concat(...schemas);
		}


		let cbParams = [];
		for(let schema of schemas) {
			if (Array.isArray(schema.parameters)) {
				if (cbParams.length > 0 && !Utils.equals(cbParams, schema.parameters)) {
					throw new Error("Multiple schemas with different callback parameters found.");
				}
				cbParams = schema.parameters;
			}
		}

		return cbParams;
	}

	/**
	 * Returns the callback parameters for a given process parameter from a full process spec.
	 * 
	 * @param {object} process - The process to parse.
	 * @param {string} parameterName - The name of the parameter to get the callback parameters for.
	 * @returns {array}
	 * @throws {Error}
	 */
	static getCallbackParametersForProcess(process, parameterName, path = []) {
		if (!Utils.isObject(process) || !Array.isArray(process.parameters)) {
			return [];
		}

		let param = process.parameters.find(p => p.name === parameterName);
		return ProcessUtils.getCallbackParameters(param, path);
	}

	/**
	 * Returns *all* the native JSON data types allowed for the schema.
	 * 
	 * @param {object} schema 
	 * @param {boolean} anyIsEmpty
	 * @returns {array}
	 */
	static getNativeTypesForJsonSchema(schema, anyIsEmpty = false) {
		if (Utils.isObject(schema) && Array.isArray(schema.type)) {
			// Remove duplicate and invalid types
			let validTypes = Utils.unique(schema.type).filter(type => ProcessUtils.JSON_SCHEMA_TYPES.includes(type));
			if (validTypes.length > 0 && validTypes.length < ProcessUtils.JSON_SCHEMA_TYPES.length) {
				return validTypes;
			}
			else {
				return anyIsEmpty ? [] : ProcessUtils.JSON_SCHEMA_TYPES;
			}
		}
		else if (Utils.isObject(schema) && typeof schema.type === 'string' && ProcessUtils.JSON_SCHEMA_TYPES.includes(schema.type)) {
			return [schema.type];
		}
		else {
			return anyIsEmpty ? [] : ProcessUtils.JSON_SCHEMA_TYPES;
		}
	}

	/**
	 * Returns the schema for a property of an object or an element of an array.
	 * 
	 * If you want to retrieve the schema for a specific key, use the parameter `key`.
	 * 
	 * @param {object} schema - The JSON schema to parse.
	 * @param {string|integer|null} key - If you want to retrieve the schema for a specific key, otherwise null.
	 * @returns {object} - JSON Schema
	 */
	static getElementJsonSchema(schema, key = null) {
		let types = ProcessUtils.getNativeTypesForJsonSchema(schema);
		if (Utils.isObject(schema) && types.includes('array') && typeof key !== 'string') {
			if (Utils.isObject(schema.items)) {
				// Array with one schema for all items: https://json-schema.org/understanding-json-schema/reference/array.html#id5
				return schema.items;
			}
			else if (Array.isArray(schema.items)) {
				// Tuple validation: https://json-schema.org/understanding-json-schema/reference/array.html#id6
				if (key !== null && Utils.isObject(schema.items[key])) {
					return schema.items[key];
				}
				else if (Utils.isObject(schema.additionalItems)) {
					return schema.additionalItems;
				}
			}
		}
		if (Utils.isObject(schema) && types.includes('object')) {
			if (key !== null && Utils.isObject(schema.properties) && Utils.isObject(schema.properties[key])) {
				return schema.properties[key];
			}
			else if (Utils.isObject(schema.additionalProperties)) {
				return schema.additionalProperties;
			}
			// ToDo: No support for patternProperties yet
		}

		return {};
	}

}

/**
 * A list of all allowed JSON Schema type values.
 * 
 * @type {array}
 */
ProcessUtils.JSON_SCHEMA_TYPES = ['string', 'number', 'integer', 'boolean', 'array', 'object', 'null'];

module.exports = ProcessUtils;

/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "73d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ProcessExample_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("226e");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ProcessExample_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ProcessExample_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7862":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7a77":
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

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "83b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "8551":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocGen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7862");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocGen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocGen_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

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

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "92f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_e3e49744_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a932");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_e3e49744_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_e3e49744_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9f6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a600":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SearchableList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e13b");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SearchableList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SearchableList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a932":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ab25":
/***/ (function(module, exports, __webpack_require__) {

const VersionCompare = __webpack_require__("b697");

/** Version Number related methods */
class Versions {

  /**
   * Compare [semver](https://semver.org/) version strings.
   * 
   * @param {string} firstVersion First version to compare
   * @param {string} secondVersion Second version to compare
   * @param {string|null} operator Optional; Arithmetic operator to use (>, >=, =, <=, <, !=). Defaults to `null`.
   * @returns {boolean|integer} If operator is not `null`: true` if the comparison between the firstVersion and the secondVersion satisfies the operator, `false` otherwise. If operator is `null`: Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
   * ```
   */
    static compare(v1, v2, operator = null) {
		if (operator !== null) {
			return VersionCompare.compare(v1, v2, operator);
		}
		else {
			return VersionCompare(v1, v2);
		}
	}

  /**
   * Validate [semver](https://semver.org/) version strings.
   * 
   * @param {*} version - Version number to validate
   * @returns - `true` if the version number is a valid semver version number, `false` otherwise.
   */
	static validate(version) {
		return VersionCompare.validate(version);
	}

	/**
	 * Tries to determine the most suitable version from a well-known discovery document that software is compatible to.
	 * 
	 * @static
	 * @param {array} wkVersions - A well-known discovery document compliant to the API specification.
	 * @param {boolean} preferProduction - Set to `false` to make no difference between production and non-production versions.
	 * @param {string|null} minVersion - The minimum version that should be returned.
	 * @param {string|null} maxVersion - The maximum version that should be returned.
	 * @returns {object[]} - Gives a list that lists all compatible versions (as still API compliant objects) ordered from the most suitable to the least suitable.
	 */
	static findCompatible(wkVersions, preferProduction = true, minVersion = null, maxVersion = null) {
		if (!Array.isArray(wkVersions) || wkVersions.length === 0) {
			return [];
		}

		let compatible = wkVersions.filter(c => {
			if (typeof c.url === 'string' && Versions.validate(c.api_version)) {
				let hasMinVer = Versions.validate(minVersion);
				let hasMaxVer = Versions.validate(maxVersion);
				if (hasMinVer && hasMaxVer) {
					return Versions.compare(c.api_version, minVersion, ">=") && Versions.compare(c.api_version, maxVersion, "<=");
				}
				else if (hasMinVer) {
					return Versions.compare(c.api_version, minVersion, ">=");
				}
				else if (hasMaxVer) {
					return Versions.compare(c.api_version, maxVersion, "<=");
				}
				else {
					return true;
				}
			}
			return false;
		 });
		if (compatible.length === 0) {
			return [];
		}

		return compatible.sort((c1, c2) => {
			let p1 = c1.production === true;
			let p2 = c2.production === true;
			if (!preferProduction || p1 === p2) {
				return Versions.compare(c1.api_version, c2.api_version) * -1; // `* -1` to sort in descending order.
			}
			else if (p1) {
				return -1;
			}
			else {
				return 1;
			}
		});
	}

	/**
	 * Find the latest version from well-known discovery that applies to the specified rules.
	 * 
	 * This is basically the same as calling `findCompatible` and using the first element from the result.
	 * 
	 * @param {array} wkVersions - A well-known discovery document compliant to the API specification.
	 * @param {boolean} preferProduction - Set to `false` to make no difference between production and non-production versions.
	 * @param {string|null} minVersion - The minimum version that should be returned.
	 * @param {string|null} maxVersion - The maximum version that should be returned.
	 * @returns {object|null}
	 */
	static findLatest(wkVersions, preferProduction = true, minVersion = null, maxVersion = null) {
		let versions = Versions.findCompatible(wkVersions, preferProduction, minVersion, maxVersion);
		if (versions.length > 0) {
			return versions[0];
		}
		else {
			return null;
		}
	}
	
}

module.exports = Versions;

/***/ }),

/***/ "ab38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LinkList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("423e");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LinkList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LinkList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var cookies = __webpack_require__("7aac");
var buildURL = __webpack_require__("30b5");
var buildFullPath = __webpack_require__("83b9");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");

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
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

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
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
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
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
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

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b697":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
(function (root, factory) {
  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

  function indexOrEnd(str, q) {
    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
  }

  function split(v) {
    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
    var patchIndex = indexOrEnd(c, '-');
    var arr = c.substring(0, patchIndex).split('.');
    arr.push(c.substring(patchIndex + 1));
    return arr;
  }

  function tryParse(v) {
    return isNaN(Number(v)) ? v : Number(v);
  }

  function validate(version) {
    if (typeof version !== 'string') {
      throw new TypeError('Invalid argument expected string');
    }
    if (!semver.test(version)) {
      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
    }
  }

  function compareVersions(v1, v2) {
    [v1, v2].forEach(validate);

    var s1 = split(v1);
    var s2 = split(v2);

    for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
      var n1 = parseInt(s1[i] || 0, 10);
      var n2 = parseInt(s2[i] || 0, 10);

      if (n1 > n2) return 1;
      if (n2 > n1) return -1;
    }

    var sp1 = s1[s1.length - 1];
    var sp2 = s2[s2.length - 1];

    if (sp1 && sp2) {
      var p1 = sp1.split('.').map(tryParse);
      var p2 = sp2.split('.').map(tryParse);

      for (i = 0; i < Math.max(p1.length, p2.length); i++) {
        if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
        if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

        if (p1[i] > p2[i]) return 1;
        if (p2[i] > p1[i]) return -1;
      }
    } else if (sp1 || sp2) {
      return sp1 ? -1 : 1;
    }

    return 0;
  };

  var allowedOperators = [
    '>',
    '>=',
    '=',
    '<',
    '<='
  ];

  var operatorResMap = {
    '>': [1],
    '>=': [0, 1],
    '=': [0],
    '<=': [-1, 0],
    '<': [-1]
  };

  function validateOperator(op) {
    if (typeof op !== 'string') {
      throw new TypeError('Invalid operator type, expected string but got ' + typeof op);
    }
    if (allowedOperators.indexOf(op) === -1) {
      throw new TypeError('Invalid operator, expected one of ' + allowedOperators.join('|'));
    }
  }

  compareVersions.validate = function(version) {
    return typeof version === 'string' && semver.test(version);
  }

  compareVersions.compare = function (v1, v2, operator) {
    // Validate operator
    validateOperator(operator);

    // since result of compareVersions can only be -1 or 0 or 1
    // a simple map can be used to replace switch
    var res = compareVersions(v1, v2);
    return operatorResMap[operator].indexOf(res) > -1;
  }

  return compareVersions;
}));


/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");

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
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
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
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
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
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
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

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
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
  isPlainObject: isPlainObject,
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
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var mergeConfig = __webpack_require__("4a7b");
var defaults = __webpack_require__("2444");

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
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("5f02");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d79f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/SearchableList.vue?vue&type=template&id=774c8e9c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-component searchable-list",class:{expandable: _vm.collapsed !== null, expanded: _vm.showList, noResults: _vm.filteredCount === 0}},[_vm._t("heading",[(_vm.heading)?_c('h2',{staticClass:"heading",on:{"click":function($event){return _vm.toggleHeading(null)}}},[_vm._v(" "+_vm._s(_vm.heading)+" "),(_vm.filteredCount !== null)?[_vm._v("("+_vm._s(_vm.filteredCount)+"/"+_vm._s(_vm.totalCount)+")")]:[_vm._v("("+_vm._s(_vm.totalCount)+")")]],2):_vm._e()],{"filteredCount":_vm.filteredCount,"totalCount":_vm.totalCount}),(_vm.showList !== null)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showList === true),expression:"showList === true"}],staticClass:"body"},[(_vm.totalCount === 0)?[_c('p',[_vm._v("No data available.")])]:[(_vm.externalSearchTerm === null)?_c('SearchBox',{attrs:{"placeholder":_vm.searchPlaceholder,"minLength":_vm.searchMinLength},model:{value:(_vm.searchTerm),callback:function ($$v) {_vm.searchTerm=$$v},expression:"searchTerm"}}):_vm._e(),(_vm.filteredCount === 0)?_c('p',[_vm._v("No search results found.")]):_c('ul',{staticClass:"list",class:{expandable: _vm.offerDetails}},_vm._l((_vm.summaries),function(summary,i){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(summary.show),expression:"summary.show"}],key:i,class:{expanded: _vm.showDetails[i]}},[_c('summary',{staticClass:"summary",class:{experimental: summary.experimental, deprecated: summary.deprecated},on:{"click":function($event){return _vm.toggleDetails(i)}}},[_vm._t("summary",[_c('strong',[_vm._v(_vm._s(summary.identifier))]),(summary.summary)?_c('small',{class:{hideOnExpand: !_vm.showSummaryOnExpand}},[_vm._v(_vm._s(summary.summary))]):_vm._e()],{"summary":summary,"item":_vm.data[summary.index]})],2),(typeof _vm.showDetails[i] === 'boolean')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDetails[i] === true),expression:"showDetails[i] === true"}],staticClass:"details"},[_vm._t("details",[_vm._v(" No details available! ")],{"summary":summary,"item":_vm.data[summary.index]})],2):_vm._e()])}),0)]],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/SearchableList.vue?vue&type=template&id=774c8e9c&

// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/utils.js + 10 modules
var utils = __webpack_require__("60a2");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/SearchableList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SearchableListvue_type_script_lang_js_ = ({
  name: 'SearchableList',
  components: {
    SearchBox: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "2979"))
  },
  props: {
    data: {
      type: [Array, Object],
      default: () => []
    },
    identifierKey: {
      type: String,
      default: 'id'
    },
    summaryKey: {
      type: String,
      default: 'summary'
    },
    externalSearchTerm: {
      type: String,
      default: null
    },
    searchPlaceholder: {
      type: String,
      default: 'Search'
    },
    sort: {
      type: Boolean,
      default: true
    },
    offerDetails: {
      type: Boolean,
      default: true
    },
    showSummaryOnExpand: {
      type: Boolean,
      default: true
    },
    heading: {
      type: String,
      default: null
    },
    collapsed: {
      type: Boolean,
      default: null
    },
    searchMinLength: {
      type: Number,
      default: 2
    }
  },

  data() {
    return {
      searchTerm: '',
      // For showDetails / showList the following states are possible:
      // null = if allowed to collapse, null indicates it is collapsed and has not been expanded yet
      // false = collapsed, but has been expanded before
      // true = expanded
      // This allows with a combination of v-if and v-show to not render by default (=> null), but keep rendered versions in cache (=> false)
      showDetails: {},
      showList: this.collapsed ? null : true
    };
  },

  watch: {
    externalSearchTerm: {
      immediate: true,

      handler(value) {
        this.searchTerm = typeof value === 'string' ? value : '';
      }

    },
    searchTerm: {
      immediate: true,

      handler(value) {
        if (value.length >= this.searchMinLength) {
          this.summaries.forEach(item => {
            let searchable = (item.identifier + ' ' + item.summary).toLowerCase();
            let result = searchable.includes(this.searchTerm.toLowerCase());
            this.$set(item, 'show', result);
          });
        } else {
          this.summaries.forEach(item => this.$set(item, 'show', true));
        }
      }

    },

    collapsed(newState) {
      if (newState === false) {
        this.showList = true;
      } else if (this.showList !== null) {
        this.showList = false;
      } // else: Leave state as it is: null => don't render anything yet until expanded for the first time {

    }

  },
  computed: {
    totalCount() {
      return utils["a" /* default */].size(this.data);
    },

    filteredCount() {
      if (this.searchTerm.length >= this.searchMinLength) {
        return this.summaries.filter(item => item.show === true).length;
      }

      return null;
    },

    summaries() {
      let summaries = [];

      for (let index in this.data) {
        let entry = this.data[index];
        let summary = {
          identifier: index,
          summary: '',
          show: true,
          index: index,
          experimental: entry.experimental,
          deprecated: entry.deprecated
        };

        if (typeof entry[this.identifierKey] === 'string') {
          summary.identifier = entry[this.identifierKey];
        }

        if (typeof entry[this.summaryKey] === 'string') {
          summary.summary = entry[this.summaryKey];
        }

        summaries.push(external_commonjs_vue_commonjs2_vue_root_Vue_default.a.observable(summary));
      }

      if (this.sort) {
        if (utils["a" /* default */].isObject(this.data)) {
          summaries = Object.values(summaries);
        }

        summaries.sort((a, b) => utils["a" /* default */].compareStringCaseInsensitive(a.identifier, b.identifier));
      }

      return summaries;
    }

  },
  methods: {
    toggleHeading(show = null) {
      if (this.collapsed === null) {
        return;
      }

      this.showList = show === null ? !this.showList : show;
      this.$emit('headingToggled', this.showList);

      if (this.$parent) {
        this.$parent.$emit('headingToggled', this.showList);
      }
    },

    toggleDetails(id) {
      if (!this.offerDetails) {
        return;
      }

      let newState = !this.showDetails[id];
      this.$set(this.showDetails, id, newState);
      this.$emit('detailsToggled', newState, id);

      if (this.$parent) {
        this.$parent.$emit('detailsToggled', newState, id);
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/SearchableList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchableListvue_type_script_lang_js_ = (SearchableListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/SearchableList.vue?vue&type=style&index=0&lang=css&
var SearchableListvue_type_style_index_0_lang_css_ = __webpack_require__("a600");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/SearchableList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchableListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SearchableList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d925":
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

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e13b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e2f3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e683":
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

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e9b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f17b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e2f3");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

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

/***/ "f6f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e9b1");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DocGen.vue?vue&type=template&id=3fe66377&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"docgen"},[(_vm.isLocalDocument && !_vm.processes.length && !_vm.links.length)?_c('div',{staticClass:"fileChooser"},[_c('p',[_vm._v(" Sorry, can't automatically read files from the local file system. Please specify the file to load here: "),_c('input',{attrs:{"type":"file"},on:{"change":_vm.loadLocalFile}})])]):_c('div',{staticClass:"page-container"},[(_vm.showTableOfContents)?_c('aside',{staticClass:"menu-container"},[_c('section',{staticClass:"toc"},[_c('h2',[_vm._v(_vm._s(_vm.title))]),_c('SearchBox',{attrs:{"placeholder":"Search in processes"},model:{value:(_vm.searchTerm),callback:function ($$v) {_vm.searchTerm=$$v},expression:"searchTerm"}}),_c('ul',{staticClass:"controls"},[(_vm.showCategories)?_c('li',[_c('a',{attrs:{"title":"Expand all"},on:{"click":_vm.expandAll}},[_c('i',{staticClass:"fas fa-angle-double-down"})])]):_vm._e(),(_vm.showCategories)?_c('li',[_c('a',{attrs:{"title":"Collapse all"},on:{"click":_vm.collapseAll}},[_c('i',{staticClass:"fas fa-angle-double-up"})])]):_vm._e(),(_vm.showCategories)?_c('li',[_c('a',{attrs:{"title":"Hide Categories"},on:{"click":_vm.switchCategoryView}},[_c('i',{staticClass:"fas fa-list-ol"})])]):_c('li',[_c('a',{attrs:{"title":"Show Categories"},on:{"click":_vm.switchCategoryView}},[_c('i',{staticClass:"fas fa-folder"})])])]),(_vm.showCategories)?[_vm._l((_vm.categories),function(category){return _c('Processes',{key:category.id,ref:"categories",refInFor:true,staticClass:"categories",attrs:{"processes":category.processes,"searchTerm":_vm.searchTerm,"offerDetails":false,"heading":category.id,"collapsed":_vm.allCollapsedState},scopedSlots:_vm._u([{key:"summary",fn:function(ref){
var summary = ref.summary;
return [_c('a',{attrs:{"href":'#' + summary.identifier}},[_c('strong',[_vm._v(_vm._s(summary.identifier))])]),(summary.summary)?_c('small',[_vm._v(_vm._s(summary.summary))]):_vm._e()]}}],null,true)})}),(!_vm.hasResults)?_c('p',[_vm._v("No search results found.")]):_vm._e()]:_c('Processes',{attrs:{"processes":_vm.processes,"searchTerm":_vm.searchTerm,"offerDetails":false,"heading":null},scopedSlots:_vm._u([{key:"summary",fn:function(ref){
var summary = ref.summary;
return [_c('a',{attrs:{"href":'#' + summary.identifier}},[_c('strong',[_vm._v(_vm._s(summary.identifier))])]),(summary.summary)?_c('small',[_vm._v(_vm._s(summary.summary))]):_vm._e()]}}],null,false,3961841355)})],2),_c('section',{staticClass:"related-links"},[_c('LinkList',{attrs:{"links":_vm.links,"heading":"Related Links","headingTag":"h3"}})],1)]):_vm._e(),_c('main',{staticClass:"content-container",class:{toc: _vm.showTableOfContents}},_vm._l((_vm.processes),function(process){return _c('Process',{key:process.id,attrs:{"process":process,"provideDownload":_vm.provideDownload,"sort":false,"processUrl":"#${}"}})}),1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/DocGen.vue?vue&type=template&id=3fe66377&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/utils.js + 10 modules
var utils = __webpack_require__("60a2");

// CONCATENATED MODULE: ./src/config.js
/* harmony default export */ var config = ({
  // Either (1) a URL to the document as string
  // or (2) an array or object containing the processes.
  document: null,
  // Version of the openEO API
  apiVersion: null,
  // Title for the table of contents
  title: "Processes",
  // Sorts the processes by id if set to true, otherwise keeps order of the document
  sortProcessesById: true,
  // Categorize the processes in the menu if set to true, otherwise show a plain list
  categorize: true,
  // Set the category name for all processes without a category assigned
  uncategorizedName: 'Uncategorized',
  // Whether 'Download JSON' buttons are displayed or not
  provideDownload: true,
  // Show/Hide table of contents, links and search box
  showTableOfContents: true
});
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/LinkList.vue + 4 modules
var LinkList = __webpack_require__("4845");

// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/Process.vue + 9 modules
var Process = __webpack_require__("2b37");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/Processes.vue?vue&type=template&id=09d3fadc&
var Processesvue_type_template_id_09d3fadc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-component processes"},[_c('SearchableList',{attrs:{"data":_vm.processes,"showSummaryOnExpand":false,"externalSearchTerm":_vm.searchTerm,"sort":_vm.sort,"offerDetails":_vm.offerDetails,"heading":_vm.heading,"collapsed":_vm.collapsed},scopedSlots:_vm._u([{key:"heading",fn:function(scope){return [_vm._t("heading",null,null,scope)]}},{key:"summary",fn:function(scope){return [_vm._t("summary",null,null,scope)]}},{key:"details",fn:function(slot){return [_c('Process',{attrs:{"process":slot.item,"provideDownload":_vm.provideDownload,"processUrl":_vm.processUrl},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('span',{staticClass:"hidden"})]},proxy:true},{key:"before-description",fn:function(scope){return [_vm._t("process-before-description",null,null,scope)]}},{key:"end",fn:function(scope){return [_vm._t("process-end",null,null,scope)]}}],null,true)})]}}],null,true)})],1)}
var Processesvue_type_template_id_09d3fadc_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/Processes.vue?vue&type=template&id=09d3fadc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/Processes.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Processesvue_type_script_lang_js_ = ({
  name: 'Processes',
  components: {
    Process: () => utils["a" /* default */].loadAsyncComponent(Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "2b37"))),
    SearchableList: () => utils["a" /* default */].loadAsyncComponent(Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "d79f")))
  },
  props: {
    processes: {
      type: Array,
      default: () => []
    },
    provideDownload: {
      type: Boolean,
      default: true
    },
    processUrl: String,
    searchTerm: {
      type: String,
      default: null
    },
    sort: {
      type: Boolean,
      default: true
    },
    offerDetails: {
      type: Boolean,
      default: true
    },
    heading: {
      type: String,
      default: 'Processes'
    },
    collapsed: {
      type: Boolean,
      default: null
    }
  },

  beforeCreate() {
    utils["a" /* default */].enableHtmlProps(this);
  }

});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/Processes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Processesvue_type_script_lang_js_ = (Processesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/Processes.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Processesvue_type_script_lang_js_,
  Processesvue_type_template_id_09d3fadc_render,
  Processesvue_type_template_id_09d3fadc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Processes = (component.exports);
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/SearchableList.vue + 4 modules
var SearchableList = __webpack_require__("d79f");

// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/SearchBox.vue + 4 modules
var SearchBox = __webpack_require__("2979");

// EXTERNAL MODULE: ./node_modules/@openeo/js-commons/src/main.js
var main = __webpack_require__("fbda");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DocGen.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var DocGenvue_type_script_lang_js_ = ({
  name: 'DocGen',
  components: {
    LinkList: LinkList["default"],
    Process: Process["default"],
    Processes: Processes,
    SearchableList: SearchableList["default"],
    SearchBox: SearchBox["default"]
  },
  props: {
    title: {
      type: String,
      default: config.title
    },
    document: {
      type: [String, Array, Object],
      default: config.document
    },
    apiVersion: {
      type: String,
      default: config.apiVersion
    },
    sortProcessesById: {
      type: Boolean,
      default: config.sortProcessesById
    },
    categorize: {
      type: Boolean,
      default: config.categorize
    },
    provideDownload: {
      type: Boolean,
      default: config.provideDownload
    },
    showTableOfContents: {
      type: Boolean,
      default: config.showTableOfContents
    },
    uncategorizedName: {
      type: String,
      default: config.uncategorizedName
    }
  },

  data() {
    return {
      searchTerm: '',
      allCollapsedState: true,
      hasResults: true,
      showCategories: this.categorize,
      processes: [],
      categories: [],
      links: []
    };
  },

  watch: {
    document: {
      immediate: true,

      handler() {
        this.changeDocument();
      }

    },

    async processes() {
      await this.$nextTick();
      this.moveToAnchor();
    },

    searchTerm() {
      this.updateCategoryView();
    },

    showCategories() {
      this.updateCategoryView();
    }

  },
  computed: {
    isLocalDocument() {
      return window.location.protocol === 'file:' && !this.document.match(/^https?:/i);
    }

  },

  mounted() {
    document.title = this.title;
  },

  methods: {
    loadLocalFile(event) {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          this.setProcesses(JSON.parse(reader.result));
        } catch (error) {
          alert(error.message);
          console.error(error);
        }
      };

      reader.readAsText(event.target.files[0]);
    },

    changeDocument() {
      if (typeof this.document === 'string' && this.document.length > 0) {
        if (!this.isLocalDocument) {
          axios_default.a.get(this.document).then(response => this.setProcesses(response.data)).catch(error => console.error(error));
        }
      } else if (typeof this.document === 'object' && this.document !== null) {
        this.setProcesses(this.document);
      } else {
        console.error('Specified document is not a URL, array or object.');
      }
    },

    setProcesses(data) {
      data = main["MigrateProcesses"].convertProcessesToLatestSpec(data, this.apiVersion);
      this.links = [];

      if (Array.isArray(data)) {
        // Plain array with processes, convert to openEO API response object.
        this.processes = data;
      } else if (utils["a" /* default */].isObject(data) && Array.isArray(data.processes)) {
        this.processes = data.processes;

        if (Array.isArray(data.links)) {
          this.links = data.links;
        }
      } else {
        console.error("Invalid document specified, can't find processes.");
      } // Sort processes


      if (this.sortProcessesById === true) {
        this.processes.sort((a, b) => utils["a" /* default */].compareStringCaseInsensitive(a.id, b.id));
      } // Map by categories


      this.categories = [];

      for (let process of this.processes) {
        let processCategories = Array.isArray(process.categories) && process.categories.length > 0 ? process.categories : [this.uncategorizedName];

        for (let category of processCategories) {
          category = category.replace('_', ' ');
          let index = this.categories.findIndex(c => c.id === category);

          if (index >= 0) {
            this.categories[index].processes.push(process);
          } else {
            this.categories.push({
              id: category,
              processes: [process]
            });
          }
        }
      } // Sort categories


      this.categories.sort((a, b) => utils["a" /* default */].compareStringCaseInsensitive(a.id, b.id));
    },

    moveToAnchor() {
      if (typeof window.location.hash === 'string' && window.location.hash.length > 1) {
        var fragment = window.location.hash.substring(1);
        var element = this.$el.querySelector("a[name=" + fragment + "]");

        if (element) {
          element.scrollIntoView();
        }
      }
    },

    switchCategoryView() {
      this.showCategories = !this.showCategories;
    },

    expandAll() {
      this.toggleAll(true);
    },

    collapseAll() {
      this.toggleAll(false);
    },

    toggleAll(expand) {
      this.allCollapsedState = !expand;
    },

    async updateCategoryView() {
      await this.$nextTick();
      this.hasResults = true;
      this.toggleAll(this.searchTerm.length >= 2);

      if (this.searchTerm.length >= 2 && Array.isArray(this.$refs.categories)) {
        this.hasResults = !!this.$refs.categories.find(vm => !vm.$children[0].$el.classList.contains('noResults'));
      }
    }

  }
});
// CONCATENATED MODULE: ./src/DocGen.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DocGenvue_type_script_lang_js_ = (DocGenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/DocGen.vue?vue&type=style&index=0&lang=css&
var DocGenvue_type_style_index_0_lang_css_ = __webpack_require__("8551");

// CONCATENATED MODULE: ./src/DocGen.vue






/* normalize component */

var DocGen_component = Object(componentNormalizer["a" /* default */])(
  src_DocGenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DocGen = (DocGen_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (DocGen);



/***/ }),

/***/ "fbda":
/***/ (function(module, exports, __webpack_require__) {

// Migrations
const MigrateCapabilities = __webpack_require__("2447");
const MigrateCollections = __webpack_require__("1f2f");
const MigrateProcesses = __webpack_require__("2c72");
// Others
const ProcessUtils = __webpack_require__("618e");
const Versions = __webpack_require__("ab25");
const Utils = __webpack_require__("382f");

module.exports = {
	MigrateCapabilities,
	MigrateCollections,
	MigrateProcesses,
	ProcessUtils,
	Versions,
	Utils,
};

/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ })["default"];
});