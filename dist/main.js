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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Keys = {\n    RETURN: 13,\n    COMMA: 44,\n    COMMA2: 188,\n    SPACE: 32\n};\n\nvar Settings = function () {\n    function Settings(settings) {\n        _classCallCheck(this, Settings);\n\n        this.settings = settings;\n    }\n\n    _createClass(Settings, [{\n        key: 'hasAll',\n        value: function hasAll() {\n            var _this = this;\n\n            return Array.from(arguments).every(function (arg) {\n                return _this.settings.hasOwnProperty(arg);\n            });\n        }\n    }, {\n        key: 'hasAny',\n        value: function hasAny() {\n            var _this2 = this;\n\n            return Array.from(arguments).some(function (arg) {\n                return _this2.settings.hasOwnProperty(arg);\n            });\n        }\n    }, {\n        key: 'get',\n        value: function get(prop) {\n            return this.settings.hasOwnProperty(prop) ? this.settings[prop] : false;\n        }\n    }]);\n\n    return Settings;\n}();\n\nvar TagsJs = function () {\n    function TagsJs() {\n        var _this3 = this;\n\n        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n        _classCallCheck(this, TagsJs);\n\n        this.tags = [];\n        var defaultOptions = {\n            allowSpace: true\n        };\n        this.settings = new Settings(Object.assign(defaultOptions, options));\n        if (!this.settings.hasAny('ref', 'elm', 'selector')) {\n            console.error('You need to set either ref, elm or selector');\n            return false;\n        }\n\n        var elm = this.settings.get('elm');\n        elm.addEventListener('keyup', function (event) {\n            if (event.keyCode === Keys.RETURN || event.keyCode === Keys.COMMA || event.keyCode === Keys.COMMA2 || !_this3.settings.get('allowSpace') && event.keyCode === Keys.SPACE) {\n                _this3.addTag(elm.value);\n            }\n        });\n    }\n\n    _createClass(TagsJs, [{\n        key: 'tagify',\n        value: function tagify(text) {\n            return text;\n        }\n    }, {\n        key: 'addTag',\n        value: function addTag(tag) {\n            tag = this.tagify(tag);\n            if (this.settings.get('unique') && this.tags.includes(tag)) {\n                return;\n            }\n            this.tags.push(tag);\n        }\n    }]);\n\n    return TagsJs;\n}();\n\nexports.TagsJs = TagsJs;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });