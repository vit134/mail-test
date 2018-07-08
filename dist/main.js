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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_sequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sequence */ \"./src/utils/sequence.js\");\n/* harmony import */ var _utils_double__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/double */ \"./src/utils/double.js\");\n/* eslint-disable no-console */\n\n\n\n\nvar thenable = Object(_utils_sequence__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([1,2,3], _utils_double__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconsole.log(thenable.listeners);\n\nthenable.on('iteration', function(event, index, value) {\n\tconsole.log(event.type === 'iteration', 'event.type === \\'iteration\\'');\n\n\tswitch (index) {\n\tcase 0:\n\t\tconsole.log(_utils_double__WEBPACK_IMPORTED_MODULE_1__[\"default\"].callCount === 1, 'double.callCount === 1');\n\t\tconsole.log(value === 2, 'value === 2');\n\t\tbreak;\n\n\tcase 1:\n\t\tconsole.log(_utils_double__WEBPACK_IMPORTED_MODULE_1__[\"default\"].callCount === 2, 'double.callCount === 2');\n\t\tconsole.log(value === 4, 'value === 4');\n\t\tbreak;\n\n\tcase 2:\n\t\tconsole.log(_utils_double__WEBPACK_IMPORTED_MODULE_1__[\"default\"].callCount === 3, 'double.callCount === 3');\n\t\tconsole.log(value === 6, 'value === 6');\n\t\tbreak;\n\t}\n});\n\nthenable.then(function(values) {\n\tconsole.log(values);\n\tconsole.log(values[0] === 2, 'values[0] === 2');\n\tconsole.log(values[1] === 4, 'values[1] === 4');\n\tconsole.log(values[2] === 6, 'values[2] === 6');\n\tconsole.log(_utils_double__WEBPACK_IMPORTED_MODULE_1__[\"default\"].callCount === 3, 'double.callCount === 3');\n});\n\nObject(_utils_sequence__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([1, 2, 3], function() {\n\tthrow new Error('test');\n}).catch(function(reason) {\n\tconsole.error(reason instanceof Error, 'reason instanceof Error');\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/double.js":
/*!*****************************!*\
  !*** ./src/utils/double.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return double; });\n/**\n * Асинхронно умножает число на 2.\n * @param {number} value\n * @returns {Promise}\n * @resolves {number}\n * @rejects {Error}\n */\nfunction double(value) {\n\tdouble.callCount++;\n\n\treturn new Promise(function(resolve) {\n\t\tsetTimeout(function() {\n\t\t\tresolve(value * 2);\n\t\t}, 500);\n\t});\n}\n\n/**\n * Счетчик вызовов функции double для тестов.\n * @type {number}\n */\ndouble.callCount = 0;\n\n//# sourceURL=webpack:///./src/utils/double.js?");

/***/ }),

/***/ "./src/utils/sequence.js":
/*!*******************************!*\
  !*** ./src/utils/sequence.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sequence; });\n/**\n * Последовательно выполняет функцию handler для каждого элемента iterable.\n * @param {Array} iterable – массив исходных данных.\n * @param {Function} handler – возвращает обещание с вычисленным значением.\n * @returns {Thenable}\n * @resolves {Array}\n * @rejects {Error}\n */\nfunction sequence(iterable, handler) {\n\tvar result = [];\n\tvar MyPromise = Promise.resolve();\n\n\titerable.forEach(function (item, index) {\n\t\tMyPromise = MyPromise\n\t\t\t.then(() => handler(item))\n\t\t\t.then((value) => {\n\t\t\t\tMyPromise.trigger('iteration', { index, value });\n\t\t\t\tresult.push(value);\n\t\t\t\treturn result;\n\t\t\t});\n\t});\n\n\tMyPromise.listeners = {};\n\n\tMyPromise.on = function (event, callback) {\n\t\t(MyPromise.listeners[event] = MyPromise.listeners[event] || []).push(callback);\n\t};\n\n\tMyPromise.trigger = function (event, data) {\n\t\tvar listeners = MyPromise.listeners[event];\n\n\t\tif (listeners !== undefined) {\n\t\t\t//data.event = new Event(event);\n\t\t\tdata.event = {type: event};\n\n\t\t\tfor (var key in listeners) {\n\t\t\t\tlisteners[key](data.event, data.index, data.value);\n\t\t\t}\n\t\t}\n\t};\n\n\treturn MyPromise;\n}\n\n//# sourceURL=webpack:///./src/utils/sequence.js?");

/***/ })

/******/ });