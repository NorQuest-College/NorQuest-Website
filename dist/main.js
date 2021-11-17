/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./images/sprites sync recursive \\.svg$":
/*!*************************************!*\
  !*** ./images/sprites/ sync \.svg$ ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./NorQuest-badge-colour.svg": "./images/sprites/NorQuest-badge-colour.svg",
	"./NorQuest-badge-light.svg": "./images/sprites/NorQuest-badge-light.svg",
	"./NorQuest-badge-white.svg": "./images/sprites/NorQuest-badge-white.svg",
	"./NorQuest-logo.svg": "./images/sprites/NorQuest-logo.svg",
	"./contact-block.svg": "./images/sprites/contact-block.svg",
	"./header-search-icon.svg": "./images/sprites/header-search-icon.svg",
	"./menu-close.svg": "./images/sprites/menu-close.svg",
	"./menu-open.svg": "./images/sprites/menu-open.svg",
	"./norquest-logo-horizontal-edit.svg": "./images/sprites/norquest-logo-horizontal-edit.svg",
	"./norquest-logo-horizontal.svg": "./images/sprites/norquest-logo-horizontal.svg",
	"./norquest-logo-vertical.svg": "./images/sprites/norquest-logo-vertical.svg",
	"./play-button.svg": "./images/sprites/play-button.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./images/sprites sync recursive \\.svg$";

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ (function() {

/**
 * -- helper function --
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}
/**
 * --- end helper function ---
 */

/**
 * header scroll class eventListener
 */


var scrollpos = window.scrollY;
var header = document.querySelector("header");
var header_height = header.offsetHeight;

var add_class_on_scroll = function add_class_on_scroll() {
  return header.classList.add("stick");
};

var remove_class_on_scroll = function remove_class_on_scroll() {
  return header.classList.remove("stick");
};

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
}); // -- END -- header scroll class eventListener

/**
 * search icon toggle
 */

var searchBtn = document.querySelector(".header-search-icon-wrapper");
var searchInput = document.querySelector(".search-form");
var searchWrapper = document.querySelector(".header-search");

document.querySelector(".header-search-icon-wrapper").onclick = function searchIcon() {
  searchBtn.classList.toggle("active");
  searchInput.classList.toggle("active");
  searchWrapper.classList.toggle("active");
}; // Detect all clicks on the document


document.addEventListener("click", function (event) {
  // If user clicks inside the element, do nothing
  if (event.target.closest(".active")) return; // If user clicks outside the element, hide it!

  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  searchWrapper.classList.remove("active");
}); // -- END -- search icon toggle

/**
 * mobile hamburger toggle
 */

var mobileToggle = document.querySelector(".mobile_toggle");
var menuTopNav = document.querySelector(".menu-top-nav");
var navSearch = document.querySelector(".nav-search");

document.querySelector(".mobile_toggle").onclick = function mobileMenuToggle() {
  mobileToggle.classList.toggle("is-active");
  menuTopNav.classList.toggle("is-active");
  navSearch.classList.toggle("is-active");
}; // -- END -- mobile hamburger toggle

/**
 * hero nav program list mobile toggle
 * and startDateSelector toggle
 *
 */


var programNavlist = document.querySelector(".hero-nav ul");

if (programNavlist) {
  document.querySelector(".program-nav--title-wrap").onclick = function programNavlisting() {
    programNavlist.classList.toggle("is-active");
  };
}

var startDateSelector = document.querySelector(".startDateSelector");
var dateSelector = document.querySelector(".date-selector");

if (startDateSelector || dateSelector) {
  document.querySelector(".secondary-hero-nav").onclick = function startDateSelectors() {
    event.preventDefault();
    startDateSelector.classList.toggle("is-active");
    dateSelector.classList.toggle("is-active");
  };
}
/**
 * Mobile sub nav toggle button
 */


var toggleSubNavs = document.getElementsByClassName("menu-close");
var toggleSubMenu = document.getElementsByClassName("lvl-2");

for (var i = 0; i < toggleSubNavs.length; i++) {
  toggleSubNavs[i].addEventListener("click", function (e) {
    subNavToggle(e), lvl2Toggle(e);
    lvl3Toggle(e);
  });
}

function subNavToggle(e) {
  e.target.classList.toggle("active");
}

function lvl2Toggle(e) {
  var toggleSibling = e.target.nextElementSibling;

  if (toggleSibling.classList.contains("lvl-2")) {
    e.target.nextElementSibling.classList.toggle("active");
  }
}

function lvl3Toggle(e) {
  var toggleSibling = e.target.nextElementSibling;

  if (toggleSibling.classList.contains("lvl-3")) {
    e.target.nextElementSibling.classList.toggle("active");
  }
} // -- END -- Mobile sub nav toggle button

/**
 * -- tab section --
 */
// event listener for the click on the tab item.


var tabs = document.querySelectorAll(".tabs li");
tabs.forEach(function (tab) {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    removeActiveTab(e.target);
    addActiveTab(tab);
  });
});

var removeActiveTab = function removeActiveTab(currentTab) {
  // removes the .is-acive class on the nav list item
  var activeTab = currentTab.parentNode.parentNode.querySelectorAll("li");

  for (var i = 0, len = activeTab.length; i < len; i++) {
    activeTab[i].classList.remove("is-active");
  } // removes the .is-acive class on the section .tab-content item


  var activeSection = currentTab.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".tab-content");

  for (var i = 0, len = activeSection.length; i < len; i++) {
    activeSection[i].classList.remove("is-active");
  }
};

var addActiveTab = function addActiveTab(tab) {
  // adds .is-active class to list item and tab-content item
  tab.classList.add("is-active");
  var href = tab.querySelector("a").getAttribute("href");
  var matchingSection = document.querySelector(href);
  matchingSection.classList.add("is-active");
}; // -- END tab section --

/**
 * Show me the modal !
 */


var modal = document.getElementById("modal"); // When the user clicks on the button, open the modal

var modalBtn = document.querySelectorAll(".tuitionFeesModalBtn");
modalBtn.forEach(function (modalBtns) {
  modalBtns.addEventListener("click", function (e) {
    e.preventDefault();
    modalBtns.closest(".container--hasModal").querySelector(".modal").style.display = "block";
  });
}); // When the user clicks on <span> (x), close the modal
// Get the <span> element that closes the modal

var span = document.querySelectorAll(".close");
span.forEach(function (close) {
  close.addEventListener("click", function (e) {
    close.closest(".modal").style.display = "none";
  });
}); // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     console.log(event.target);
//     // event.target.style.display = "none";
//   }
// }

/**
 * Modal next-previous functions
 */

var nextBtn = document.querySelectorAll(".next-button");
nextBtn.forEach(function (nextBtns) {
  nextBtns.addEventListener("click", function (e) {
    event.preventDefault();
    var currentParent = nextBtns.closest(".modal-content");
    var selected = currentParent.querySelector(".current-panel");

    if (selected.nextElementSibling) {
      selected.classList.remove("current-panel");
      selected.nextElementSibling.classList.add("current-panel");
    }

    var indicator = currentParent.querySelector(".current-indicator");

    if (indicator.nextElementSibling) {
      indicator.classList.remove("current-indicator");
      indicator.nextElementSibling.classList.add("current-indicator");
      indicator.classList.add("done");
    }
  });
});
var prevBtn = document.querySelectorAll(".previous-button");
prevBtn.forEach(function (prevBtns) {
  prevBtns.addEventListener("click", function (e) {
    event.preventDefault();
    var currentParent = prevBtns.closest(".modal-content");
    var selected = currentParent.querySelector(".current-panel");

    if (selected.previousElementSibling) {
      selected.classList.remove("current-panel");
      selected.previousElementSibling.classList.add("current-panel");
    }

    var indicator = currentParent.querySelector(".current-indicator");

    if (indicator.previousElementSibling) {
      indicator.classList.remove("current-indicator");
      indicator.previousElementSibling.classList.add("current-indicator");
      indicator.classList.remove("done");
    }
  });
});

/***/ }),

/***/ "./images/sprites/NorQuest-badge-colour.svg":
/*!**************************************************!*\
  !*** ./images/sprites/NorQuest-badge-colour.svg ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "NorQuest-badge-colour-usage",
      viewBox: "0 0 159.6 186.7",
      url: __webpack_require__.p + "sprites.svg#NorQuest-badge-colour",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/NorQuest-badge-light.svg":
/*!*************************************************!*\
  !*** ./images/sprites/NorQuest-badge-light.svg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "NorQuest-badge-light-usage",
      viewBox: "0 0 159.6 186.7",
      url: __webpack_require__.p + "sprites.svg#NorQuest-badge-light",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/NorQuest-badge-white.svg":
/*!*************************************************!*\
  !*** ./images/sprites/NorQuest-badge-white.svg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "NorQuest-badge-white-usage",
      viewBox: "0 0 159.6 186.7",
      url: __webpack_require__.p + "sprites.svg#NorQuest-badge-white",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/NorQuest-logo.svg":
/*!******************************************!*\
  !*** ./images/sprites/NorQuest-logo.svg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "NorQuest-logo-usage",
      viewBox: "0 0 749.2 186.7",
      url: __webpack_require__.p + "sprites.svg#NorQuest-logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/contact-block.svg":
/*!******************************************!*\
  !*** ./images/sprites/contact-block.svg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "contact-block-usage",
      viewBox: "0 0 354 512",
      url: __webpack_require__.p + "sprites.svg#contact-block",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/header-search-icon.svg":
/*!***********************************************!*\
  !*** ./images/sprites/header-search-icon.svg ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "header-search-icon-usage",
      viewBox: "0 0 18 18",
      url: __webpack_require__.p + "sprites.svg#header-search-icon",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/menu-close.svg":
/*!***************************************!*\
  !*** ./images/sprites/menu-close.svg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "menu-close-usage",
      viewBox: "0 0 12 12",
      url: __webpack_require__.p + "sprites.svg#menu-close",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/menu-open.svg":
/*!**************************************!*\
  !*** ./images/sprites/menu-open.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "menu-open-usage",
      viewBox: "0 0 10 10",
      url: __webpack_require__.p + "sprites.svg#menu-open",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/norquest-logo-horizontal-edit.svg":
/*!**********************************************************!*\
  !*** ./images/sprites/norquest-logo-horizontal-edit.svg ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "norquest-logo-horizontal-edit-usage",
      viewBox: "0 0 750 188",
      url: __webpack_require__.p + "sprites.svg#norquest-logo-horizontal-edit",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/norquest-logo-horizontal.svg":
/*!*****************************************************!*\
  !*** ./images/sprites/norquest-logo-horizontal.svg ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "norquest-logo-horizontal-usage",
      viewBox: "0 0 750 188",
      url: __webpack_require__.p + "sprites.svg#norquest-logo-horizontal",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/norquest-logo-vertical.svg":
/*!***************************************************!*\
  !*** ./images/sprites/norquest-logo-vertical.svg ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "norquest-logo-vertical-usage",
      viewBox: "0 0 537 432",
      url: __webpack_require__.p + "sprites.svg#norquest-logo-vertical",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./images/sprites/play-button.svg":
/*!****************************************!*\
  !*** ./images/sprites/play-button.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "play-button-usage",
      viewBox: "0 0 88 88",
      url: __webpack_require__.p + "sprites.svg#play-button",
      toString: function () {
        return this.url;
      }
    });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts.js */ "./js/scripts.js");
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Javascript for the webiste
 */
// import "./plugins.jQuery.js";
 // import "./navigation.js";
// import "./skip-link-focus-fix.js";
// Import SVGs for sprites

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./images/sprites sync recursive \\.svg$"));
}();
/******/ })()
;
//# sourceMappingURL=main.js.map