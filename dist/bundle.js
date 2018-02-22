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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


<<<<<<< HEAD
var _navbar = __webpack_require__(1);
=======
var _changeBgImg = __webpack_require__(1);

var _changeBgImg2 = _interopRequireDefault(_changeBgImg);

var _navbar = __webpack_require__(2);

var _navbar2 = _interopRequireDefault(_navbar);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// search the DOM
var wrapper = document.querySelector('.wrapper');

// scss
// javascript helpers
>>>>>>> master

var _navbar2 = _interopRequireDefault(_navbar);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// javascript helpers
var allSlides = document.querySelectorAll('.page');

// scss

var controllBtns = document.querySelectorAll('.control-btn li');

<<<<<<< HEAD
=======
_changeBgImg2.default.target(wrapper);

>>>>>>> master
var navbar = new _navbar2.default(allSlides, controllBtns);

// initiate the sliders
navbar.startFirstSlide();

// add click event all all control btn
controllBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    navbar.handleSlideMove(this);
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
=======
var path2Img = '../../../images/star-bg.png';
var changeBgImg = {
  target: function target(_target) {
    if (!_target) {
      return console.error('There is not target to change background');
    } else {
      _target.style.backgroundImage = 'url(' + path2Img + ')';
    }
  }
};

exports.default = changeBgImg;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
>>>>>>> master

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This is navbar helper
// It will set all pages, but homepage, to display none

var NavBar = function () {
  function NavBar(allSlides, controllBtns) {
    _classCallCheck(this, NavBar);

    this.allSlides = allSlides;
    this.controllBtns = controllBtns;
  }

  _createClass(NavBar, [{
    key: 'startFirstSlide',
    value: function startFirstSlide() {
      resetAllSlides.apply(this.allSlides);
      this.allSlides[0].style.display = 'block';
      addActiveStyle.apply(this.controllBtns[0]);
    }
  }, {
    key: 'handleSlideMove',
    value: function handleSlideMove(btn) {
      var target = btn.getAttribute('name');
      // remove and reset everything
      resetAllSlides.apply(this.allSlides);
      removeAllActiveClass.apply(this.controllBtns);
      // display right image and add active class to btn
      this.allSlides[target].style.display = 'block';
      addActiveStyle.apply(btn);
    }
  }]);

  return NavBar;
}();

function resetAllSlides() {
  this.forEach(function (slide) {
    slide.style.display = 'none';
  });
}

function addActiveStyle() {
  this.classList.add('active');
}

function removeAllActiveClass() {
  this.forEach(function (btn) {
    btn.classList.remove('active');
  });
}

exports.default = NavBar;

/***/ }),
<<<<<<< HEAD
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);
=======
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);
>>>>>>> master

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

<<<<<<< HEAD
var update = __webpack_require__(5)(content, options);
=======
var update = __webpack_require__(6)(content, options);
>>>>>>> master

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
<<<<<<< HEAD
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
=======
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
>>>>>>> master
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".navbar {\n  height: 100%;\n  width: 120px;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center; }\n  .navbar .container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    height: 70%;\n    width: 100%; }\n\n.rocket {\n  height: 100%;\n  width: 60px;\n  position: absolute;\n  left: 0;\n  text-align: center;\n  margin: 0; }\n  .rocket img {\n    width: 60px;\n    height: 60px;\n    position: absolute;\n    display: block;\n    z-index: 1;\n    left: 0;\n    top: 10px;\n    transform: rotate(180deg); }\n  .rocket div {\n    width: 1px;\n    background-color: #9E9E9E;\n    height: 100%;\n    z-index: -1;\n    margin: 0 auto; }\n\n.control-btn {\n  height: 80%;\n  right: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0; }\n  .control-btn li {\n    text-align: center;\n    padding: 2px;\n    width: 50px;\n    height: 20px;\n    color: #546E7A;\n    filter: grayscale(0%); }\n    .control-btn li:hover {\n      cursor: pointer;\n      color: white;\n      font-weight: 600; }\n  .control-btn .active {\n    color: white;\n    font-weight: 600; }\n\n.header {\n  margin: 0px 2%;\n  max-width: 800px; }\n  .header .logo {\n    width: 80%;\n    display: inline-block; }\n    .header .logo img {\n      padding-left: 3vh;\n      max-height: 200px; }\n\n.homepage {\n  text-align: center; }\n  .homepage img {\n    max-width: 100%;\n    width: 800px; }\n  .homepage .detail {\n    max-width: 800px;\n    margin: 0 auto; }\n    .homepage .detail h2 {\n      font-size: 2.6em;\n      color: #DAAA00; }\n      .homepage .detail h2 span {\n        margin: 5px 20px; }\n    .homepage .detail h3 {\n      white-space: pre-wrap;\n      color: white;\n      font-size: 2.1em;\n      -webkit-margin-before: 0; }\n    .homepage .detail div {\n      width: 90%;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end; }\n      .homepage .detail div button {\n        color: white;\n        background-color: transparent;\n        font-size: 1.6em;\n        padding: 5px 20px;\n        text-align: center;\n        border-radius: 20px;\n        margin: 0 20px;\n        border: 2px solid white; }\n        .homepage .detail div button:hover {\n          background-color: #DAAA00;\n          border: 2px solid #DAAA00;\n          cursor: pointer; }\n\n.about h1 {\n  color: white;\n  text-align: center;\n  font-size: 2.8em; }\n\n.about .detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .about .detail p {\n    max-width: 800px;\n    color: white;\n    font-size: 1.2em;\n    line-height: 1.6em; }\n\n.schedule {\n  text-align: center; }\n  .schedule h1 {\n    color: white;\n    font-size: 2.8em; }\n  .schedule h3 {\n    color: white;\n    font-size: 2.1em; }\n  .schedule .progress-box div {\n    margin: 0 auto;\n    height: 30px;\n    width: 600px;\n    border: 0.5px solid #DAAA00;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-items: flex-start; }\n    .schedule .progress-box div div {\n      margin: 0 0 0 5px;\n      height: 20px;\n      width: 70%;\n      background-color: #DAAA00; }\n  .schedule .progress-box p {\n    margin: 5px;\n    color: #DAAA00; }\n\n.FAQ {\n  text-align: center; }\n  .FAQ h1 {\n    color: white;\n    font-size: 2.8em; }\n  .FAQ .Q-and-A h3 {\n    color: yellow; }\n  .FAQ .Q-and-A p {\n    color: white; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.wrapper {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  background: url(\"/images/star-bg.png\");\n  background-attachment: fixed;\n  background-size: 100% 100vh; }\n", ""]);
=======
exports.push([module.i, ".navbar {\n  height: 100%;\n  width: 120px;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center; }\n  .navbar .container {\n    display: flex;\n    align-items: center;\n    position: relative;\n    height: 70%;\n    width: 100%; }\n\n.rocket {\n  height: 100%;\n  width: 60px;\n  position: absolute;\n  left: 0;\n  text-align: center;\n  margin: 0; }\n  .rocket img {\n    width: 60px;\n    height: 60px;\n    position: absolute;\n    display: block;\n    z-index: 1;\n    left: 0;\n    top: 10px;\n    transform: rotate(180deg); }\n  .rocket div {\n    width: 1px;\n    background-color: #9E9E9E;\n    height: 100%;\n    z-index: -1;\n    margin: 0 auto; }\n\n.control-btn {\n  height: 80%;\n  right: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0; }\n  .control-btn li {\n    text-align: center;\n    padding: 2px;\n    width: 50px;\n    height: 20px;\n    color: #546E7A;\n    filter: grayscale(0%); }\n    .control-btn li:hover {\n      cursor: pointer;\n      color: white;\n      font-weight: 600; }\n  .control-btn .active {\n    color: white;\n    font-weight: 600; }\n\n.header {\n  margin: 0px 2%;\n  max-width: 800px; }\n  .header .logo {\n    width: 80%;\n    display: inline-block; }\n    .header .logo img {\n      padding-left: 3vh;\n      max-height: 200px; }\n\n.homepage {\n  text-align: center; }\n  .homepage img {\n    max-width: 100%;\n    width: 800px; }\n  .homepage .detail {\n    max-width: 800px;\n    margin: 0 auto; }\n    .homepage .detail h2 {\n      font-size: 2.6em;\n      color: #DAAA00; }\n      .homepage .detail h2 span {\n        margin: 5px 20px; }\n    .homepage .detail h3 {\n      white-space: pre-wrap;\n      color: white;\n      font-size: 2.1em;\n      -webkit-margin-before: 0; }\n    .homepage .detail div {\n      width: 90%;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end; }\n      .homepage .detail div button {\n        color: white;\n        background-color: transparent;\n        font-size: 1.6em;\n        padding: 5px 20px;\n        text-align: center;\n        border-radius: 20px;\n        margin: 0 20px;\n        border: 2px solid white; }\n        .homepage .detail div button:hover {\n          background-color: #DAAA00;\n          border: 2px solid #DAAA00;\n          cursor: pointer; }\n\n.about h1 {\n  color: white;\n  text-align: center;\n  font-size: 2.8em; }\n\n.about .detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .about .detail p {\n    max-width: 800px;\n    color: white;\n    font-size: 1.2em;\n    line-height: 1.6em; }\n\n.schedule {\n  text-align: center; }\n  .schedule h1 {\n    color: white;\n    font-size: 2.8em; }\n  .schedule h3 {\n    color: white;\n    font-size: 2.1em; }\n  .schedule .progress-box div {\n    margin: 0 auto;\n    height: 30px;\n    width: 600px;\n    border: 0.5px solid #DAAA00;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-items: flex-start; }\n    .schedule .progress-box div div {\n      margin: 0 0 0 5px;\n      height: 20px;\n      width: 70%;\n      background-color: #DAAA00; }\n  .schedule .progress-box p {\n    margin: 5px;\n    color: #DAAA00; }\n\n.FAQ {\n  text-align: center; }\n  .FAQ h1 {\n    color: white;\n    font-size: 2.8em; }\n  .FAQ .Q-and-A h3 {\n    color: yellow; }\n  .FAQ .Q-and-A p {\n    color: white; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.wrapper {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  background-attachment: fixed;\n  background-size: 100% 100vh; }\n", ""]);
>>>>>>> master

// exports


/***/ }),
<<<<<<< HEAD
/* 4 */
=======
/* 5 */
>>>>>>> master
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
<<<<<<< HEAD
/* 5 */
=======
/* 6 */
>>>>>>> master
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

<<<<<<< HEAD
var	fixUrls = __webpack_require__(6);
=======
var	fixUrls = __webpack_require__(7);
>>>>>>> master

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
<<<<<<< HEAD
/* 6 */
=======
/* 7 */
>>>>>>> master
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);