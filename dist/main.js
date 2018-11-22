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

/***/ "./node_modules/hexlet-pairs/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/hexlet-pairs/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.toString = exports.cdr = exports.car = exports.cons = exports.checkPair = exports.isPair = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * Check if something is pair\n * @example\n * const pair = cons(5, 'hello');\n * isPair(pair); // true\n * isPair(5); // false\n */\nvar isPair = function isPair(pair) {\n  return typeof pair === 'function' && pair.pair;\n};\n\nexports.isPair = isPair;\n\nvar checkPair = function checkPair(pair) {\n  if (!isPair(pair)) {\n    var value = _typeof(pair) === 'object' ? JSON.stringify(pair, null, 2) : String(pair);\n    throw new Error(\"Argument must be pair, but it was '\".concat(value, \"'\"));\n  }\n};\n/**\n * Build pair\n * @example\n * const pair = cons(5, 'hello');\n * @example\n * const pair = cons(cons(1, null), 'world');\n */\n\n\nexports.checkPair = checkPair;\n\nvar cons = function cons(a, b) {\n  var pair = function pair(message) {\n    switch (message) {\n      case 'car':\n        return a;\n\n      case 'cdr':\n        return b;\n\n      default:\n        throw new Error(\"Unknown message '\".concat(message, \"'\"));\n    }\n  };\n\n  pair.pair = true;\n  return pair;\n};\n/**\n * Get car (first element) from pair\n * @example\n * const pair = cons(5, 'hello');\n * car(pair); // 5\n */\n\n\nexports.cons = cons;\n\nvar car = function car(pair) {\n  checkPair(pair);\n  return pair('car');\n};\n/**\n * Get cdr (second element) from pair\n * @example\n * const pair = cons(5, 'hello');\n * cdr(pair); // hello\n */\n\n\nexports.car = car;\n\nvar cdr = function cdr(pair) {\n  checkPair(pair);\n  return pair('cdr');\n};\n/**\n * Convert pair to string (recursively)\n * @example\n * toString(cons('', 10)); // ('', 10)\n */\n\n\nexports.cdr = cdr;\n\nvar toString = function toString(pair) {\n  checkPair(pair);\n\n  var rec = function rec(p) {\n    if (!isPair(p)) {\n      return String(p);\n    }\n\n    var left = car(p);\n    var right = cdr(p);\n    return \"(\".concat(rec(left), \", \").concat(rec(right), \")\");\n  };\n\n  return rec(pair);\n};\n\nexports.toString = toString;\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQTs7Ozs7OztBQU9PLElBQU0sU0FBUyxTQUFULE1BQVMsQ0FBQyxJQUFEO0FBQUEsU0FBMEIsT0FBTyxJQUFQLEtBQWdCLFVBQWhCLElBQThCLEtBQUssSUFBN0Q7QUFBQSxDQUFmOzs7O0FBRUEsSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLElBQUQsRUFBdUI7QUFDOUMsTUFBSSxDQUFDLE9BQU8sSUFBUCxDQUFMLEVBQW1CO0FBQ2pCLFFBQU0sUUFBUSxRQUFPLElBQVAsTUFBZ0IsUUFBaEIsR0FBMkIsS0FBSyxTQUFMLENBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUEzQixHQUEyRCxPQUFPLElBQVAsQ0FBekU7QUFDQSxVQUFNLElBQUksS0FBSiw4Q0FBZ0QsS0FBaEQsT0FBTjtBQUNEO0FBQ0YsQ0FMTTtBQU9QOzs7Ozs7Ozs7OztBQU9PLElBQU0sT0FBTyxTQUFQLElBQU8sQ0FBQyxDQUFELEVBQVMsQ0FBVCxFQUEwQjtBQUM1QyxNQUFNLE9BQU8sU0FBUCxJQUFPLENBQUMsT0FBRCxFQUFzQjtBQUNqQyxZQUFRLE9BQVI7QUFDRSxXQUFLLEtBQUw7QUFDRSxlQUFPLENBQVA7O0FBQ0YsV0FBSyxLQUFMO0FBQ0UsZUFBTyxDQUFQOztBQUNGO0FBQ0UsY0FBTSxJQUFJLEtBQUosNEJBQThCLE9BQTlCLE9BQU47QUFOSjtBQVFELEdBVEQ7O0FBVUEsT0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQU8sSUFBUDtBQUNELENBYk07QUFlUDs7Ozs7Ozs7OztBQU1PLElBQU0sTUFBTSxTQUFOLEdBQU0sQ0FBQyxJQUFELEVBQXFCO0FBQ3RDLFlBQVUsSUFBVjtBQUNBLFNBQU8sS0FBSyxLQUFMLENBQVA7QUFDRCxDQUhNO0FBS1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNLE1BQU0sU0FBTixHQUFNLENBQUMsSUFBRCxFQUFxQjtBQUN0QyxZQUFVLElBQVY7QUFDQSxTQUFPLEtBQUssS0FBTCxDQUFQO0FBQ0QsQ0FITTtBQUtQOzs7Ozs7Ozs7QUFLTyxJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsSUFBRCxFQUF3QjtBQUM5QyxZQUFVLElBQVY7O0FBQ0EsTUFBTSxNQUFNLFNBQU4sR0FBTSxDQUFDLENBQUQsRUFBTztBQUNqQixRQUFJLENBQUMsT0FBTyxDQUFQLENBQUwsRUFBZ0I7QUFDZCxhQUFPLE9BQU8sQ0FBUCxDQUFQO0FBQ0Q7O0FBQ0QsUUFBTSxPQUFPLElBQUksQ0FBSixDQUFiO0FBQ0EsUUFBTSxRQUFRLElBQUksQ0FBSixDQUFkO0FBQ0Esc0JBQVcsSUFBSSxJQUFKLENBQVgsZUFBeUIsSUFBSSxLQUFKLENBQXpCO0FBQ0QsR0FQRDs7QUFTQSxTQUFPLElBQUksSUFBSixDQUFQO0FBQ0QsQ0FaTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbnR5cGUgTWVzc2FnZSA9ICdjYXInIHwgJ2Nkcic7XG5cbnR5cGUgUGFpciA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiBhbnk7XG5cbi8qKlxuICogQ2hlY2sgaWYgc29tZXRoaW5nIGlzIHBhaXJcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBwYWlyID0gY29ucyg1LCAnaGVsbG8nKTtcbiAqIGlzUGFpcihwYWlyKTsgLy8gdHJ1ZVxuICogaXNQYWlyKDUpOyAvLyBmYWxzZVxuICovXG5leHBvcnQgY29uc3QgaXNQYWlyID0gKHBhaXI6ID9QYWlyKTogYm9vbGVhbiA9PiB0eXBlb2YgcGFpciA9PT0gJ2Z1bmN0aW9uJyAmJiBwYWlyLnBhaXI7XG5cbmV4cG9ydCBjb25zdCBjaGVja1BhaXIgPSAocGFpcjogP1BhaXIpOiB2b2lkID0+IHtcbiAgaWYgKCFpc1BhaXIocGFpcikpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBwYWlyID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHBhaXIsIG51bGwsIDIpIDogU3RyaW5nKHBhaXIpO1xuICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgbXVzdCBiZSBwYWlyLCBidXQgaXQgd2FzICcke3ZhbHVlfSdgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCdWlsZCBwYWlyXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGFpciA9IGNvbnMoNSwgJ2hlbGxvJyk7XG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGFpciA9IGNvbnMoY29ucygxLCBudWxsKSwgJ3dvcmxkJyk7XG4gKi9cbmV4cG9ydCBjb25zdCBjb25zID0gKGE6IGFueSwgYjogYW55KTogUGFpciA9PiB7XG4gIGNvbnN0IHBhaXIgPSAobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xuICAgIHN3aXRjaCAobWVzc2FnZSkge1xuICAgICAgY2FzZSAnY2FyJzpcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICBjYXNlICdjZHInOlxuICAgICAgICByZXR1cm4gYjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtZXNzYWdlICcke21lc3NhZ2V9J2ApO1xuICAgIH1cbiAgfTtcbiAgcGFpci5wYWlyID0gdHJ1ZTtcbiAgcmV0dXJuIHBhaXI7XG59O1xuXG4vKipcbiAqIEdldCBjYXIgKGZpcnN0IGVsZW1lbnQpIGZyb20gcGFpclxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHBhaXIgPSBjb25zKDUsICdoZWxsbycpO1xuICogY2FyKHBhaXIpOyAvLyA1XG4gKi9cbmV4cG9ydCBjb25zdCBjYXIgPSAocGFpcjogUGFpcik6IGFueSA9PiB7XG4gIGNoZWNrUGFpcihwYWlyKTtcbiAgcmV0dXJuIHBhaXIoJ2NhcicpO1xufTtcblxuLyoqXG4gKiBHZXQgY2RyIChzZWNvbmQgZWxlbWVudCkgZnJvbSBwYWlyXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcGFpciA9IGNvbnMoNSwgJ2hlbGxvJyk7XG4gKiBjZHIocGFpcik7IC8vIGhlbGxvXG4gKi9cbmV4cG9ydCBjb25zdCBjZHIgPSAocGFpcjogUGFpcik6IGFueSA9PiB7XG4gIGNoZWNrUGFpcihwYWlyKTtcbiAgcmV0dXJuIHBhaXIoJ2NkcicpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHBhaXIgdG8gc3RyaW5nIChyZWN1cnNpdmVseSlcbiAqIEBleGFtcGxlXG4gKiB0b1N0cmluZyhjb25zKCcnLCAxMCkpOyAvLyAoJycsIDEwKVxuICovXG5leHBvcnQgY29uc3QgdG9TdHJpbmcgPSAocGFpcjogUGFpcik6IHN0cmluZyA9PiB7XG4gIGNoZWNrUGFpcihwYWlyKTtcbiAgY29uc3QgcmVjID0gKHApID0+IHtcbiAgICBpZiAoIWlzUGFpcihwKSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhwKTtcbiAgICB9XG4gICAgY29uc3QgbGVmdCA9IGNhcihwKTtcbiAgICBjb25zdCByaWdodCA9IGNkcihwKTtcbiAgICByZXR1cm4gYCgke3JlYyhsZWZ0KX0sICR7cmVjKHJpZ2h0KX0pYDtcbiAgfTtcblxuICByZXR1cm4gcmVjKHBhaXIpO1xufTtcbiJdfQ==\n\n//# sourceURL=webpack:///./node_modules/hexlet-pairs/dist/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hexlet_pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hexlet-pairs */ \"./node_modules/hexlet-pairs/dist/index.js\");\n/* harmony import */ var hexlet_pairs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hexlet_pairs__WEBPACK_IMPORTED_MODULE_0__);\n\nvar pair = Object(hexlet_pairs__WEBPACK_IMPORTED_MODULE_0__[\"cons\"])(3, 5);\nObject(hexlet_pairs__WEBPACK_IMPORTED_MODULE_0__[\"car\"])(pair); // 3\n\nconsole.log(Object(hexlet_pairs__WEBPACK_IMPORTED_MODULE_0__[\"cdr\"])(pair));\nconsole.log(Object(hexlet_pairs__WEBPACK_IMPORTED_MODULE_0__[\"toString\"])(pair)); // (3, 5)\n// console.log('hell1o')\n// let xss = 'asda'\n// console.log(xss)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });