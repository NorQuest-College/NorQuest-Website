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
	"./norquest-logo-vertical.svg": "./images/sprites/norquest-logo-vertical.svg"
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

// header scroll class eventListener
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
// search icon toggle

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
// mobile hamburger toggle

var mobileToggle = document.querySelector(".mobile_toggle");
var menuTopNav = document.querySelector(".menu-top-nav");
var navSearch = document.querySelector(".nav-search");

document.querySelector(".mobile_toggle").onclick = function mobileMenuToggle() {
  mobileToggle.classList.toggle("is-active");
  menuTopNav.classList.toggle("is-active");
  navSearch.classList.toggle("is-active");
}; // -- END -- mobile hamburger toggle
// Mobile sub nav toggle button


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

  if (toggleSibling.classList.contains('lvl-2')) {
    e.target.nextElementSibling.classList.toggle("active");
  }
}

function lvl3Toggle(e) {
  var toggleSibling = e.target.nextElementSibling;

  if (toggleSibling.classList.contains("lvl-3")) {
    e.target.nextElementSibling.classList.toggle("active");
  }
} // -- END -- Mobile sub nav toggle button
// tab section


var tabs = document.querySelectorAll(".tabs-wrapper");
tabs.forEach(function (tab) {
  var tabButtons = tab.querySelectorAll(".tabs li");
  tabButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      removeActiveTab(tab);
      addActiveTab(button, tab);
    });
  });
});

var removeActiveTab = function removeActiveTab(tab) {
  var tabButtons = tab.querySelectorAll(".tabs li");
  tabButtons.forEach(function (button) {
    button.classList.remove("is-active");
  });
  var tabSections = tab.querySelectorAll(".tab-content");
  tabSections.forEach(function (section) {
    section.classList.remove("is-active");
  });
};

var addActiveTab = function addActiveTab(button, tab) {
  button.classList.add("is-active");
  var href = button.querySelector("a").getAttribute("href");
  var matchingSection = tab.querySelector(href);
  matchingSection.classList.add("is-active");
}; // dismiss alerts


var alerts = document.querySelectorAll(".alert-container");
alerts.forEach(function (alert) {
  var dismiss = alert.querySelector(".fa-times");

  if (dismiss) {
    alert.setAttribute("style", "max-height:" + alert.offsetHeight + "px");
    var alertContent = alert.querySelector(".alert");
    alertContent.setAttribute("style", "top: " + alert.offsetHeight + "px; transform: translateY(-" + alert.offsetHeight + "px)");
    dismiss.addEventListener("click", function (e) {
      e.preventDefault();
      dismissAlert(alert);
    });
  }
});

var dismissAlert = function dismissAlert(alert) {
  var alertContent = alert.querySelector(".alert");
  alert.classList.add("alert-container-slide-up");
  alert.setAttribute("style", "max-height:0px");
  alertContent.setAttribute("style", "top:0px; transform: translateY(-" + alert.offsetHeight + "px)");
  alertContent.classList.add("alert-content-slide-up");
}; // video player


var videos = document.querySelectorAll(".video-player");
console.log(videos);
/*
videos.forEach((video) => {
  let play = video.querySelector(".controls .play");
  let source = video.querySelector("video")
  play.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("video play")
  })
})
*/

/***/ }),

/***/ "./images/sprites/NorQuest-badge-colour.svg":
/*!**************************************************!*\
  !*** ./images/sprites/NorQuest-badge-colour.svg ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNTkuNiAxODYuNyIgdmlld0JveD0iMCAwIDE1OS42IDE4Ni43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNTAuMiAzMS40YzAgMTcuMi0xMy44IDMxLTMxIDMxLjFzLTMxLjEtMTMuOC0zMS4yLTMxYzAtMTcuMSAxNC0zMS4xIDMxLjEtMzEuMSAxNy4yIDAgMzEuMSAxMy45IDMxLjEgMzF6IiBmaWxsPSIjYWYyNzJmIi8+PHBhdGggZD0ibTE1OS42IDc3LjJjLTIxLjUgMS43LTQxLjUgMTAuOS01NS4yIDI0LjgtNyA3LjEtMTIuNSAxNS42LTE2LjEgMjUuMi00LjQgMTEuNi00LjggMjgtNC44IDM5djIwLjljMjMuOC0xMS43IDQwLjctMjQuMyA1Mi4yLTM2LjkgMTUuOS0xNy4zIDIyLjItMzcuNSAyMy4xLTU1LjIuNi0xMC4xLjgtMTcuOC44LTE3Ljh6IiBmaWxsPSIjZjY4YjJkIi8+PHBhdGggZD0ibTAgNzcuMmMyMS41IDEuNyA0MS41IDEwLjkgNTUuMiAyNC44IDcgNy4xIDEyLjUgMTUuNiAxNi4xIDI1LjIgNC40IDExLjYgNC44IDI4IDQuOCAzOXYyMC45Yy0yMy45LTExLjctNDAuNy0yNC4zLTUyLjMtMzYuOS0xNS44LTE3LjMtMjIuMi0zNy41LTIzLjEtNTUuMy0uNS0xMC0uNy0xNy43LS43LTE3Ljd6IiBmaWxsPSIjZmZiZDAwIi8+PHBhdGggZD0ibTcwLjkuNWgtNzAuOXY2OS44YzM2LjQtNC45IDY1LjQtMzMuNSA3MC45LTY5Ljh6IiBmaWxsPSIjZWYzMzQwIi8+PC9zdmc+");

/***/ }),

/***/ "./images/sprites/NorQuest-badge-light.svg":
/*!*************************************************!*\
  !*** ./images/sprites/NorQuest-badge-light.svg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNTkuNiAxODYuNyIgdmlld0JveD0iMCAwIDE1OS42IDE4Ni43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNTAuMiAzMS40YzAgMTcuMi0xMy44IDMxLTMxIDMxLjFzLTMxLjEtMTMuOC0zMS4yLTMxYzAtMTcuMSAxNC0zMS4xIDMxLjEtMzEuMSAxNy4yIDAgMzEuMSAxMy45IDMxLjEgMzF6IiBmaWxsPSIjZmZmN2U5Ii8+PHBhdGggZD0ibTE1OS42IDc3LjJjLTIxLjUgMS43LTQxLjUgMTAuOS01NS4yIDI0LjgtNyA3LjEtMTIuNSAxNS42LTE2LjEgMjUuMi00LjQgMTEuNi00LjggMjgtNC44IDM5djIwLjljMjMuOC0xMS43IDQwLjctMjQuMyA1Mi4yLTM2LjkgMTUuOS0xNy4zIDIyLjItMzcuNSAyMy4xLTU1LjIuNi0xMC4xLjgtMTcuOC44LTE3Ljh6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTAgNzcuMmMyMS41IDEuNyA0MS41IDEwLjkgNTUuMiAyNC44IDcgNy4xIDEyLjUgMTUuNiAxNi4xIDI1LjIgNC40IDExLjYgNC44IDI4IDQuOCAzOXYyMC45Yy0yMy45LTExLjctNDAuNy0yNC4zLTUyLjMtMzYuOS0xNS44LTE3LjMtMjIuMi0zNy41LTIzLjEtNTUuMy0uNS0xMC0uNy0xNy43LS43LTE3Ljd6IiBmaWxsPSIjZmZmN2U5Ii8+PHBhdGggZD0ibTcwLjkuNWgtNzAuOXY2OS44YzM2LjQtNC45IDY1LjQtMzMuNSA3MC45LTY5Ljh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+");

/***/ }),

/***/ "./images/sprites/NorQuest-badge-white.svg":
/*!*************************************************!*\
  !*** ./images/sprites/NorQuest-badge-white.svg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNTkuNiAxODYuNyIgdmlld0JveD0iMCAwIDE1OS42IDE4Ni43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0xNTAuMiAzMS40YzAgMTcuMi0xMy44IDMxLTMxIDMxLjFzLTMxLjEtMTMuOC0zMS4yLTMxYzAtMTcuMSAxNC0zMS4xIDMxLjEtMzEuMSAxNy4yIDAgMzEuMSAxMy45IDMxLjEgMzF6Ii8+PHBhdGggZD0ibTE1OS42IDc3LjJjLTIxLjUgMS43LTQxLjUgMTAuOS01NS4yIDI0LjgtNyA3LjEtMTIuNSAxNS42LTE2LjEgMjUuMi00LjQgMTEuNi00LjggMjgtNC44IDM5djIwLjljMjMuOC0xMS43IDQwLjctMjQuMyA1Mi4yLTM2LjkgMTUuOS0xNy4zIDIyLjItMzcuNSAyMy4xLTU1LjIuNi0xMC4xLjgtMTcuOC44LTE3Ljh6Ii8+PHBhdGggZD0ibTAgNzcuMmMyMS41IDEuNyA0MS41IDEwLjkgNTUuMiAyNC44IDcgNy4xIDEyLjUgMTUuNiAxNi4xIDI1LjIgNC40IDExLjYgNC44IDI4IDQuOCAzOXYyMC45Yy0yMy45LTExLjctNDAuNy0yNC4zLTUyLjMtMzYuOS0xNS44LTE3LjMtMjIuMi0zNy41LTIzLjEtNTUuMy0uNS0xMC0uNy0xNy43LS43LTE3Ljd6Ii8+PHBhdGggZD0ibTcwLjkuNWgtNzAuOXY2OS44YzM2LjQtNC45IDY1LjQtMzMuNSA3MC45LTY5Ljh6Ii8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./images/sprites/NorQuest-logo.svg":
/*!******************************************!*\
  !*** ./images/sprites/NorQuest-logo.svg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3NDkuMiAxODYuNyIgdmlld0JveD0iMCAwIDc0OS4yIDE4Ni43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNhZjI3MmYiPjxwYXRoIGQ9Im0yNjQuOSAzNS4yYzAgNC42IDAgMTAuMy4yIDE1LjQtNC00LjktOS42LTExLjEtMTMuNC0xNS4zbC0zMC44LTMzLjctLjEtLjJoLTguMXY3MS4yaDExLjd2LTM1LjdjMC01IDAtMTAuNi0uMi0xNi42IDYuMyA3LjQgMTEuMyAxMy4yIDE1LjUgMTcuN2wzMyAzNi4xaDMuOXYtNzIuN2gtMTEuN3oiLz48cGF0aCBkPSJtMzI2LjkgMGMtMTguNSAwLTM3LjcgMTMuOC0zNy43IDM2LjkgMCAyMy4yIDE5LjIgMzcgMzcuNyAzN3MzNy43LTEzLjggMzcuNy0zN2MwLTIzLjEtMTkuMi0zNi45LTM3LjctMzYuOXptMjUuOSAzNi45YzAgMTMuMi05LjcgMjYuOC0yNS45IDI2LjgtMTIuNiAwLTI1LjktOS40LTI1LjktMjYuOCAwLTE3LjMgMTMuMy0yNi43IDI1LjktMjYuNyAxNi4yIDAgMjUuOSAxMy42IDI1LjkgMjYuN3oiLz48cGF0aCBkPSJtNDA5LjUgMzkuOWM3LjctMy4zIDEyLTkuOSAxMi0xOC4zIDAtNy45LTMuOC0xMi42LTctMTUuMi0zLjktMy4yLTkuMi01LTE0LjYtNWgtMjIuN3Y3MS4yaDExLjZ2LTMwLjhoOS4xbDIyIDMwLjYuMS4yaDEzLjd6bS4yLTE4LjNjMCA3LjUtNi4yIDEwLjItMTEuNiAxMC4yaC05LjN2LTIwLjNoOS4zYzUuMyAwIDExLjYgMi42IDExLjYgMTAuMXoiLz48cGF0aCBkPSJtNTAyLjkgODYuOWMxLjEgMCAyLjItLjEgMy4xLS4zaC4ybDcuOC0xMC45LTEuNi42Yy0yLjggMS4xLTUuMiAxLjMtNy4zIDEuMy00LjMgMC04LjUtMS0xMy0zLjItMy40LTEuNi01LjctMi43LTcuNC0zLjMgMTIuMS00LjEgMjMuOS0xNiAyMy45LTM0LjIgMC0yMy4xLTE5LjItMzYuOS0zNy43LTM2LjlzLTM3LjcgMTMuOC0zNy43IDM2LjljMCAyMi4xIDE3IDM1LjMgMzMuOSAzNi44IDIuMSAxIDkuMSA0LjIgMTcuMSA4LjMgNi42IDMuNiAxMS42IDQuOSAxOC43IDQuOXptLTYuMS01MGMwIDEzLjItOS43IDI2LjgtMjUuOSAyNi44LTEyLjYgMC0yNS45LTkuNC0yNS45LTI2LjggMC0xNy4zIDEzLjMtMjYuNyAyNS45LTI2LjcgMTYuMiAwIDI1LjkgMTMuNiAyNS45IDI2Ljd6Ii8+PHBhdGggZD0ibTU0OC4xIDczLjljMTcuNCAwIDI5LjEtMTAuNyAyOS4xLTI2LjZ2LTQ1LjloLTExLjN2NDQuOGMwIDEwLjktNi40IDE3LjItMTcuNiAxNy4yLTExLjEgMC0xNy41LTYuMy0xNy41LTE3LjJ2LTQ0LjhoLTExLjh2NDUuOWMwIDE2IDExLjcgMjYuNiAyOS4xIDI2LjZ6Ii8+PHBhdGggZD0ibTYzMy4xIDYyLjVoLTMxdi0yMC42aDIyLjh2LTEwLjFoLTIyLjh2LTIwLjJoMjcuMnYtMTAuMmgtMzguOXY3MS4yaDQyLjd6Ii8+PHBhdGggZD0ibTY2Ny4xIDI5LjNjLTcuMi0yLjUtMTEtNi4xLTExLTEwLjQgMC01LjMgNC42LTkuMSAxMS05LjEgNS44IDAgMTEuMSAyLjQgMTMuMyA0bC42LjQgMi4zLTkuOS0uMy0uMmMtMi43LTItOC44LTQuMi0xNS42LTQuMi0xNS43IDAtMjIuNyA5LjktMjIuNyAxOS42czYuNyAxNy4xIDE5LjUgMjEuM2M4LjIgMi43IDExLjkgNi41IDExLjkgMTIuNCAwIDYuMi01IDEwLjQtMTIuNSAxMC40LTcuMyAwLTE0LjEtMi4zLTIwLjgtNy4xbC0xLS43IDIuNyAxMy4xLjIuMWMzLjMgMi4yIDEwLjIgNC44IDE4LjQgNC44IDE1LjUgMCAyNC43LTguMSAyNC43LTIxLjYuMS0xMC43LTYuNS0xOC4xLTIwLjctMjIuOXoiLz48cGF0aCBkPSJtNjkyLjQuNHYxMC4yaDIyLjZ2NjFoMTEuNnYtNjFoMjIuNnYtMTAuMnoiLz48cGF0aCBkPSJtMjQ1LjUgMTY3LjdjLTE5LjEgMC0yNy44LTEzLjgtMjcuOC0yNi43czguNy0yNi44IDI3LjgtMjYuOGM3LjEgMCAxMy45IDIuNCAxNy4zIDQuNWwuNi40IDIuMS0xMC4zLS4zLS4yYy0zLjgtMi4xLTEwLjUtNC43LTIwLjktNC43LTkuNCAwLTE4LjggMy40LTI1LjggOS4zLTUuNyA0LjgtMTIuNSAxMy41LTEyLjUgMjcuOCAwIDE0LjEgNi44IDIyLjggMTIuNSAyNy42IDcgNS45IDE2LjUgOS4zIDI1LjkgOS4zIDguNiAwIDEzLjgtMSAxOC42LTMuNWwuMi0uMSAyLjUtMTEuNi0xIC42Yy00LjggMi45LTExLjYgNC40LTE5LjIgNC40eiIvPjxwYXRoIGQ9Im0zMTMuNCAxMDRjLTE4LjUgMC0zNy43IDEzLjgtMzcuNyAzNi45IDAgMjMuMiAxOS4yIDM3IDM3LjcgMzdzMzcuNy0xMy44IDM3LjctMzdjMC0yMy4xLTE5LjEtMzYuOS0zNy43LTM2Ljl6bTI1LjkgMzYuOWMwIDEzLjItOS43IDI2LjgtMjUuOSAyNi44LTEyLjYgMC0yNS45LTkuNC0yNS45LTI2LjggMC0xNy4zIDEzLjMtMjYuNyAyNS45LTI2LjcgMTYuMyAwIDI1LjkgMTMuNiAyNS45IDI2Ljd6Ii8+PHBhdGggZD0ibTM3Mi4yIDEwNS40aC0xMS42djcxLjJoNDIuNnYtMTAuMWgtMzF6Ii8+PHBhdGggZD0ibTQyNyAxMDUuNGgtMTEuNnY3MS4yaDQyLjV2LTEwLjFoLTMwLjl6Ii8+PHBhdGggZD0ibTQ3OS42IDE0NS45aDIyLjh2LTEwLjFoLTIyLjh2LTIwLjJoMjcuMnYtMTAuMmgtMzguOXY3MS4yaDQyLjd2LTEwLjFoLTMxeiIvPjxwYXRoIGQ9Im01NTUuMyAxNTAuNGgxNi4ydjEzLjljLTMuMyAyLjItOC4zIDMuNC0xNC40IDMuNC0xMy40IDAtMjcuOS04LjMtMjcuOS0yNi42IDAtMTcuNyAxNC0yNi45IDI3LjgtMjYuOSA2LjcgMCAxMy43IDIgMTkuMiA1LjVsLjYuNCAyLjItMTAuMy0uMy0uMmMtNS43LTMuNy0xMy45LTUuNy0yMi45LTUuNy05LjQgMC0xOC44IDMuNC0yNS44IDkuMy01LjcgNC44LTEyLjUgMTMuNS0xMi41IDI3LjggMCAyNCAyMC4xIDM2LjkgMzkgMzYuOSAxMS4yIDAgMTkuNC0yLjQgMjUuOS03LjdsLjItLjJ2LTI5LjJoLTI3LjN6Ii8+PHBhdGggZD0ibTYwNC43IDE0NS45aDIyLjd2LTEwLjFoLTIyLjd2LTIwLjJoMjcuMXYtMTAuMmgtMzguOHY3MS4yaDQyLjd2LTEwLjFoLTMxeiIvPjxwYXRoIGQ9Im0xNTAuMiAzMS40YzAgMTcuMi0xMy44IDMxLTMxIDMxLjFzLTMxLjEtMTMuOC0zMS4yLTMxYzAtMTcuMSAxNC0zMS4xIDMxLjEtMzEuMSAxNy4yIDAgMzEuMSAxMy45IDMxLjEgMzF6Ii8+PC9nPjxwYXRoIGQ9Im0xNTkuNiA3Ny4yYy0yMS41IDEuNy00MS41IDEwLjktNTUuMiAyNC44LTcgNy4xLTEyLjUgMTUuNi0xNi4xIDI1LjItNC40IDExLjYtNC44IDI4LTQuOCAzOXYyMC45YzIzLjgtMTEuNyA0MC43LTI0LjMgNTIuMi0zNi45IDE1LjktMTcuMyAyMi4yLTM3LjUgMjMuMS01NS4yLjYtMTAuMS44LTE3LjguOC0xNy44eiIgZmlsbD0iI2Y2OGIyZCIvPjxwYXRoIGQ9Im0wIDc3LjJjMjEuNSAxLjcgNDEuNSAxMC45IDU1LjIgMjQuOCA3IDcuMSAxMi41IDE1LjYgMTYuMSAyNS4yIDQuNCAxMS42IDQuOCAyOCA0LjggMzl2MjAuOWMtMjMuOS0xMS43LTQwLjctMjQuMy01Mi4zLTM2LjktMTUuOC0xNy4zLTIyLjItMzcuNS0yMy4xLTU1LjMtLjUtMTAtLjctMTcuNy0uNy0xNy43eiIgZmlsbD0iI2ZmYmQwMCIvPjxwYXRoIGQ9Im03MC45LjVoLTcwLjl2NjkuOGMzNi40LTQuOSA2NS40LTMzLjUgNzAuOS02OS44eiIgZmlsbD0iI2VmMzM0MCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./images/sprites/contact-block.svg":
/*!******************************************!*\
  !*** ./images/sprites/contact-block.svg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzU0IDUxMiIgd2lkdGg9IjM1NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTAwIDYyMjFjMTAwLjAxMzE0MSA3LjkxOTkzIDE5My4wNDg2MiA1MC43ODA3MSAyNTYuNzc3OTI0IDExNS41Mzc3NiAzMi41NjI0MTggMzMuMDc3MzQgNTguMTQ3MTc1IDcyLjY3Njk4IDc0Ljg5MzU2MSAxMTcuNDAxMjggMjAuNDY3ODA1IDU0LjA0MTg1IDIyLjMyODUxNSAxMzAuNDQ1ODYgMjIuMzI4NTE1IDE4MS42OTI0NHY5Ny4zNjg1MmMtMTExLjE3NzM5OC01NC41MDc3My0xODkuMzI3MjAxLTExMy4yMDgzNy0yNDMuMjg3Nzc5LTE3MS45MDkwMS03My40OTgwMjktODAuNTk2OS0xMDMuMjY5MzgzLTE3NC43MDQyNy0xMDcuNDU1OTc5LTI1Ny42MzA1Ny0yLjMyNTg4Ny00Ni41ODc4MS0zLjI1NjI0Mi04Mi40NjA0Mi0zLjI1NjI0Mi04Mi40NjA0MnoiIGZpbGw9IiNmZmVmYzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDAgLTYyMjEpIi8+PC9zdmc+");

/***/ }),

/***/ "./images/sprites/header-search-icon.svg":
/*!***********************************************!*\
  !*** ./images/sprites/header-search-icon.svg ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEwLjkxIDMuODVhNS4wNiA1LjA2IDAgMCAwIC03LjA3IDAgNC44NyA0Ljg3IDAgMCAwIDAgNyA1IDUgMCAwIDAgNy4wNyAwIDQuODcgNC44NyAwIDAgMCAwLTdtNi41NyAxMy4zN2ExLjgyIDEuODIgMCAwIDEgLTIuNTEgMGwtMy42Ni0zLjU2YTcuNjEgNy42MSAwIDAgMSAtOS4xMy0xLjA2IDcuMTEgNy4xMSAwIDAgMSAwLTEwLjI1IDcuNjIgNy42MiAwIDAgMSAxMC41NSAwIDcuMDggNy4wOCAwIDAgMSAxLjA5IDguODdsMy42NiAzLjU2YTEuNyAxLjcgMCAwIDEgMCAyLjQ0IiBmaWxsPSIjNDI0MjQyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");

/***/ }),

/***/ "./images/sprites/menu-close.svg":
/*!***************************************!*\
  !*** ./images/sprites/menu-close.svg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMTIgMTIiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTYuNDI4NTcxNCA3NWMuNDczMzAxNSAwIC44NTcxNDI5LS4zODM4NDE0Ljg1NzE0MjktLjg1NzE0Mjl2LTMuODU3MTQyOGgzLjg1NzE0MjhjLjQ3MzMwMTUgMCAuODU3MTQyOS0uMzgzODQxNC44NTcxNDI5LS44NTcxNDI5di0uODU3MTQyOGMwLS40NzMzMDE1LS4zODM4NDE0LS44NTcxNDI5LS44NTcxNDI5LS44NTcxNDI5aC0zLjg1NzE0Mjh2LTMuODU3MTQyOGMwLS40NzMzMDE1LS4zODM4NDE0LS44NTcxNDI5LS44NTcxNDI5LS44NTcxNDI5aC0uODU3MTQyOGMtLjQ3MzMwMTUgMC0uODU3MTQyOS4zODM4NDE0LS44NTcxNDI5Ljg1NzE0Mjl2My44NTcxNDI4aC0zLjg1NzE0MjhjLS40NzMzMDE1IDAtLjg1NzE0MjkuMzgzODQxNC0uODU3MTQyOS44NTcxNDI5di44NTcxNDI4YzAgLjQ3MzMwMTUuMzgzODQxNC44NTcxNDI5Ljg1NzE0MjkuODU3MTQyOWgzLjg1NzE0Mjh2My44NTcxNDI4YzAgLjQ3MzMwMTUuMzgzODQxNC44NTcxNDI5Ljg1NzE0MjkuODU3MTQyOXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMCAtNjMpIi8+PC9zdmc+");

/***/ }),

/***/ "./images/sprites/menu-open.svg":
/*!**************************************!*\
  !*** ./images/sprites/menu-open.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE2LjQyODU3MTggMjIuMDAwMDAwNGMuNDczMzAxNSAwIC44NTcxNDI5LS4zODM4NDE0Ljg1NzE0MjktLjg1NzE0Mjl2LTMuODU3MTQyOGgzLjg1NzE0MjhjLjQ3MzMwMTUgMCAuODU3MTQyOS0uMzgzODQxNC44NTcxNDI5LS44NTcxNDI5di0uODU3MTQyOWMwLS40NzMzMDE0LS4zODM4NDE0LS44NTcxNDI4LS44NTcxNDI5LS44NTcxNDI4aC0zLjg1NzE0Mjh2LTMuODU3MTQyOWMwLS40NzMzMDE0LS4zODM4NDE0LS44NTcxNDI4LS44NTcxNDI5LS44NTcxNDI4aC0uODU3MTQyOWMtLjQ3MzMwMTQgMC0uODU3MTQyOC4zODM4NDE0LS44NTcxNDI4Ljg1NzE0Mjh2My44NTcxNDI5aC0zLjg1NzE0MjljLS40NzMzMDE0IDAtLjg1NzE0MjguMzgzODQxNC0uODU3MTQyOC44NTcxNDI4di44NTcxNDI5YzAgLjQ3MzMwMTUuMzgzODQxNC44NTcxNDI5Ljg1NzE0MjguODU3MTQyOWgzLjg1NzE0Mjl2My44NTcxNDI4YzAgLjQ3MzMwMTUuMzgzODQxNC44NTcxNDI5Ljg1NzE0MjguODU3MTQyOXoiIGZpbGw9IiNhZTI4MzAiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcxMDY3OCAuNzA3MTA2NzggLS43MDcxMDY3OCAuNzA3MTA2NzggNSAtMTcuNjI3NDE3KSIvPjwvc3ZnPg==");

/***/ }),

/***/ "./images/sprites/norquest-logo-horizontal-edit.svg":
/*!**********************************************************!*\
  !*** ./images/sprites/norquest-logo-horizontal-edit.svg ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjYWYyNzJmIj48cGF0aCBkPSJtMjY1LjE2IDM1LjI1YzAgNC42MyAwIDEwLjMuMTcgMTUuNDMtOS4xMy0xMS4xLTM0LjUzLTM4LjE5LTQ0LjMzLTQ5LjE1aC04LjA5djcxLjE4aDExLjY3Yy0uMDctMTIuMjIuMTctNDAuMi0uMTktNTIuMjcgMTEuNzYgMTQuMSAzNi41MyA0MC41NCA0OC40OSA1My44aDMuOTF2LTcyLjcxaC0xMS42M3oiLz48cGF0aCBkPSJtMzI3LjE2LjFjLTQ5LjczLjYzLTQ5LjYzIDczLjI1IDAgNzMuOTEgNDkuNjUtLjYzIDQ5LjcxLTczLjMzIDAtNzMuOTF6bTI1LjkgMzYuOWMxLjEzIDMyLjU2LTUwLjkzIDM3Ljc1LTUxLjggMCAuODUtMzcuNjUgNTIuOTQtMzIuMzggNTEuOCAweiIvPjxwYXRoIGQ9Im00MDkuNzkgNDBjMTMuNDYtNSAxNi4yOS0yNC43NyA1LTMzLjQ4LTgtNy42My0yNy40MS00LjM1LTM3LjMxLTV2NzEuMThoMTEuNTJ2LTMwLjhoOS4xNWMuMTUuMiAyMiAzMC42MiAyMi4xNSAzMC44aDEzLjd6bS4xNS0xOC4yNmMtLjM1IDEyLjA3LTEzLjA2IDEwLjA2LTIwLjk0IDEwLjE3di0yMC4zNmM3Ljg5LjA5IDIwLjYyLTEuODYgMjAuOTQgMTAuMTl6Ii8+PHBhdGggZD0ibTUwMy4xNiA4N2ExOCAxOCAwIDAgMCAzLjI3LS4zNGw3LjgyLTEwLjg5Yy05LjkxIDQuOTMtMjAuMTYtLjQ0LTI5LjI1LTQuNTcgMzkuODktMTQuNTEgMjUuMjEtNzIuNjUtMTMuODUtNzEuMTEtNDcuMzcuMTYtNTAuNzEgNjkuMzEtMy43NiA3My43IDYuNCAyLjMyIDI1LjA1IDE0LjYzIDM1Ljc3IDEzLjIxem0tNi4xMS01MGMxLjEzIDMyLjU2LTUwLjkyIDM3Ljc1LTUxLjggMCAuODYtMzcuNjYgNTIuOTQtMzIuMzggNTEuOCAweiIvPjxwYXRoIGQ9Im01NDguMzggNzRjNDAuNjcuNDkgMjYuODUtNDcuNSAyOS4xLTcyLjQ3aC0xMS4zNHY0NC44M2MwIDEwLjk0LTYuNDMgMTcuMjEtMTcuNjUgMTcuMjFzLTE3LjQ5LTYuMjctMTcuNDktMTcuMjF2LTQ0LjgzaC0xMS43MmMyLjE1IDI0LjgzLTExLjM4IDczLjE5IDI5LjEgNzIuNDd6Ii8+PHBhdGggZD0ibTYzMy4zNyA2Mi41OGgtMzF2LTIwLjU4aDIyLjc3di0xMC4xMWgtMjIuNzl2LTIwLjIzaDI3LjE3di0xMC4xM2gtMzguODR2NzEuMThoNDIuNjl6Ii8+PHBhdGggZD0ibTY2Ny4zNyAyOS4zOWMtMjUuNTMtMTAuMTktMS44NC0yNy43MiAxNC0xNWwyLjM0LTkuODVjLTMxLjM2LTE4Ljc3LTU4LjU1IDIzLjU2LTE5LjA4IDM2LjQ2IDI3IDkuODkgNC42MiAzNS43Ny0yMi40NSAxNWwyLjcyIDEzLjExYzM2LjQ2IDIwLjYxIDY1LjEtMjQuNjQgMjIuNDctMzkuNzJ6Ii8+PHBhdGggZD0ibTY5Mi42Ni41M3YxMC4xM2gyMi41NXY2MS4wNWgxMS42N3YtNjFoMjIuNTV2LTEwLjE4eiIvPjxwYXRoIGQ9Im0yNDUuNzEgMTY3Ljc5Yy01MC4yNS00LjI2LTI1LjczLTczLjMzIDE3Ljk0LTQ4LjUxbDIuMDktMTAuMjhjLTIxLjkzLTEyLjEtNjAuMDYtMS4zNi01OS41OCAzMi4xNS4xMSAzMi4yMSAzNCA0My40NCA1Ny4xNSAzMy4yOGwyLjQ5LTExLjU5Yy01LjIgMy4zMy0xMS44MSA0LjkyLTIwLjA5IDQuOTV6Ii8+PHBhdGggZD0ibTMxMy42OCAxMDQuMWMtNDkuNzMuNjQtNDkuNjIgNzMuMjIgMCA3My45IDQ5LjY0LS42MyA0OS43My03My4zMyAwLTczLjl6bTI1LjkgMzYuOWMxLjEzIDMyLjU2LTUwLjkyIDM3Ljc1LTUxLjggMCAuODYtMzcuNjYgNTIuOTQtMzIuMzggNTEuOCAweiIvPjxwYXRoIGQ9Im0zNzIuNDggMTA1LjUzaC0xMS42N3Y3MS4xOGg0Mi41OHYtMTAuMTNoLTMwLjkxeiIvPjxwYXRoIGQ9Im00MjcuMjYgMTA1LjUzaC0xMS42N3Y3MS4xOGg0Mi41OHYtMTAuMTNoLTMwLjkxeiIvPjxwYXRoIGQ9Im00NzkuODQgMTQ2aDIyLjc3di0xMC4xMWgtMjIuNzd2LTIwLjIzaDI3LjE2di0xMC4xM2gtMzguODN2NzEuMThoNDIuNjl2LTEwLjEzaC0zMXoiLz48cGF0aCBkPSJtNTU1LjUxIDE1MC41M2gxNi4xN3YxMy44N2MtMTUuOTQgOC43My00Mi40Ny45NS00Mi4yMy0yMy4xNy4zMS0yNi41NyAyOS43OC0zMy4wOCA0Ny41OC0yMWwyLjItMTAuMjhjLTIzLjYtMTMuODEtNjEuMzUtMy4xNC02MS41NiAzMS4xNC0uMyAzNS4xNyA0My4xNiA0Ni4yMiA2NS4xOCAyOS4wNnYtMjkuMTVoLTI3LjM0eiIvPjxwYXRoIGQ9Im02MDQuOSAxNDZoMjIuNzd2LTEwLjExaC0yMi43N3YtMjAuMjNoMjcuMTd2LTEwLjEzaC0zOC44NHY3MS4xOGg0Mi42OXYtMTAuMTNoLTMxeiIvPjxwYXRoIGQ9Im0xNTAuNDQgMzEuNTNjLS43IDQwLjgyLTYxLjQyIDQwLjgzLTYyLjEyIDAgLjY5LTQwLjg2IDYxLjUtNDAuOCA2Mi4xMiAweiIvPjwvZz48cGF0aCBkPSJtMTU5LjgxIDc3LjI5Yy0zMiAyLjctNjAuMjUgMjAuNjQtNzEuMzEgNTAtNi41NSAxOC44OC00LjM0IDQxLTQuNzYgNTkuODkgNDkuNC0yMi41NiA3OS41Mi01OS4zIDc2LjA3LTEwOS44NnoiIGZpbGw9IiNmNjhiMmQiLz48cGF0aCBkPSJtLjI4IDc3LjI5YzMyIDIuNyA2MC4yNiAyMC42MyA3MS4zIDUwIDYuNTYgMTguODggNC4zNCA0MSA0Ljc3IDU5Ljg5LTQ5LjQzLTIyLjU4LTc5LjQ0LTU5LjM0LTc2LjA3LTEwOS44OXoiIGZpbGw9IiNmZmJkMDAiLz48cGF0aCBkPSJtNzEuMDkuNjRoLTcwLjg1djY5Ljc4YTgzLjEzIDgzLjEzIDAgMCAwIDcwLjg1LTY5Ljc4eiIgZmlsbD0iI2VmMzM0MCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./images/sprites/norquest-logo-horizontal.svg":
/*!*****************************************************!*\
  !*** ./images/sprites/norquest-logo-horizontal.svg ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDE4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjYWYyNzJmIj48cGF0aCBkPSJtMjY1LjE2IDM1LjI1YzAgNC42MyAwIDEwLjMuMTcgMTUuNDMtOS4xMy0xMS4xLTM0LjUzLTM4LjE5LTQ0LjMzLTQ5LjE1aC04LjA5djcxLjE4aDExLjY3Yy0uMDctMTIuMjIuMTctNDAuMi0uMTktNTIuMjcgMTEuNzYgMTQuMSAzNi41MyA0MC41NCA0OC40OSA1My44aDMuOTF2LTcyLjcxaC0xMS42M3oiLz48cGF0aCBkPSJtMzI3LjE2LjFjLTQ5LjczLjYzLTQ5LjYzIDczLjI1IDAgNzMuOTEgNDkuNjUtLjYzIDQ5LjcxLTczLjMzIDAtNzMuOTF6bTI1LjkgMzYuOWMxLjEzIDMyLjU2LTUwLjkzIDM3Ljc1LTUxLjggMCAuODUtMzcuNjUgNTIuOTQtMzIuMzggNTEuOCAweiIvPjxwYXRoIGQ9Im00MDkuNzkgNDBjMTMuNDYtNSAxNi4yOS0yNC43NyA1LTMzLjQ4LTgtNy42My0yNy40MS00LjM1LTM3LjMxLTV2NzEuMThoMTEuNTJ2LTMwLjhoOS4xNWMuMTUuMiAyMiAzMC42MiAyMi4xNSAzMC44aDEzLjd6bS4xNS0xOC4yNmMtLjM1IDEyLjA3LTEzLjA2IDEwLjA2LTIwLjk0IDEwLjE3di0yMC4zNmM3Ljg5LjA5IDIwLjYyLTEuODYgMjAuOTQgMTAuMTl6Ii8+PHBhdGggZD0ibTUwMy4xNiA4N2ExOCAxOCAwIDAgMCAzLjI3LS4zNGw3LjgyLTEwLjg5Yy05LjkxIDQuOTMtMjAuMTYtLjQ0LTI5LjI1LTQuNTcgMzkuODktMTQuNTEgMjUuMjEtNzIuNjUtMTMuODUtNzEuMTEtNDcuMzcuMTYtNTAuNzEgNjkuMzEtMy43NiA3My43IDYuNCAyLjMyIDI1LjA1IDE0LjYzIDM1Ljc3IDEzLjIxem0tNi4xMS01MGMxLjEzIDMyLjU2LTUwLjkyIDM3Ljc1LTUxLjggMCAuODYtMzcuNjYgNTIuOTQtMzIuMzggNTEuOCAweiIvPjxwYXRoIGQ9Im01NDguMzggNzRjNDAuNjcuNDkgMjYuODUtNDcuNSAyOS4xLTcyLjQ3aC0xMS4zNHY0NC44M2MwIDEwLjk0LTYuNDMgMTcuMjEtMTcuNjUgMTcuMjFzLTE3LjQ5LTYuMjctMTcuNDktMTcuMjF2LTQ0LjgzaC0xMS43MmMyLjE1IDI0LjgzLTExLjM4IDczLjE5IDI5LjEgNzIuNDd6Ii8+PHBhdGggZD0ibTYzMy4zNyA2Mi41OGgtMzF2LTIwLjU4aDIyLjc3di0xMC4xMWgtMjIuNzl2LTIwLjIzaDI3LjE3di0xMC4xM2gtMzguODR2NzEuMThoNDIuNjl6Ii8+PHBhdGggZD0ibTY2Ny4zNyAyOS4zOWMtMjUuNTMtMTAuMTktMS44NC0yNy43MiAxNC0xNWwyLjM0LTkuODVjLTMxLjM2LTE4Ljc3LTU4LjU1IDIzLjU2LTE5LjA4IDM2LjQ2IDI3IDkuODkgNC42MiAzNS43Ny0yMi40NSAxNWwyLjcyIDEzLjExYzM2LjQ2IDIwLjYxIDY1LjEtMjQuNjQgMjIuNDctMzkuNzJ6Ii8+PHBhdGggZD0ibTY5Mi42Ni41M3YxMC4xM2gyMi41NXY2MS4wNWgxMS42N3YtNjFoMjIuNTV2LTEwLjE4eiIvPjxwYXRoIGQ9Im0yNDUuNzEgMTY3Ljc5Yy01MC4yNS00LjI2LTI1LjczLTczLjMzIDE3Ljk0LTQ4LjUxbDIuMDktMTAuMjhjLTIxLjkzLTEyLjEtNjAuMDYtMS4zNi01OS41OCAzMi4xNS4xMSAzMi4yMSAzNCA0My40NCA1Ny4xNSAzMy4yOGwyLjQ5LTExLjU5Yy01LjIgMy4zMy0xMS44MSA0LjkyLTIwLjA5IDQuOTV6Ii8+PHBhdGggZD0ibTMxMy42OCAxMDQuMWMtNDkuNzMuNjQtNDkuNjIgNzMuMjIgMCA3My45IDQ5LjY0LS42MyA0OS43My03My4zMyAwLTczLjl6bTI1LjkgMzYuOWMxLjEzIDMyLjU2LTUwLjkyIDM3Ljc1LTUxLjggMCAuODYtMzcuNjYgNTIuOTQtMzIuMzggNTEuOCAweiIvPjxwYXRoIGQ9Im0zNzIuNDggMTA1LjUzaC0xMS42N3Y3MS4xOGg0Mi41OHYtMTAuMTNoLTMwLjkxeiIvPjxwYXRoIGQ9Im00MjcuMjYgMTA1LjUzaC0xMS42N3Y3MS4xOGg0Mi41OHYtMTAuMTNoLTMwLjkxeiIvPjxwYXRoIGQ9Im00NzkuODQgMTQ2aDIyLjc3di0xMC4xMWgtMjIuNzd2LTIwLjIzaDI3LjE2di0xMC4xM2gtMzguODN2NzEuMThoNDIuNjl2LTEwLjEzaC0zMXoiLz48cGF0aCBkPSJtNTU1LjUxIDE1MC41M2gxNi4xN3YxMy44N2MtMTUuOTQgOC43My00Mi40Ny45NS00Mi4yMy0yMy4xNy4zMS0yNi41NyAyOS43OC0zMy4wOCA0Ny41OC0yMWwyLjItMTAuMjhjLTIzLjYtMTMuODEtNjEuMzUtMy4xNC02MS41NiAzMS4xNC0uMyAzNS4xNyA0My4xNiA0Ni4yMiA2NS4xOCAyOS4wNnYtMjkuMTVoLTI3LjM0eiIvPjxwYXRoIGQ9Im02MDQuOSAxNDZoMjIuNzd2LTEwLjExaC0yMi43N3YtMjAuMjNoMjcuMTd2LTEwLjEzaC0zOC44NHY3MS4xOGg0Mi42OXYtMTAuMTNoLTMxeiIvPjxwYXRoIGQ9Im0xNTAuNDQgMzEuNTNjLS43IDQwLjgyLTYxLjQyIDQwLjgzLTYyLjEyIDAgLjY5LTQwLjg2IDYxLjUtNDAuOCA2Mi4xMiAweiIvPjwvZz48cGF0aCBkPSJtMTU5LjgxIDc3LjI5Yy0zMiAyLjctNjAuMjUgMjAuNjQtNzEuMzEgNTAtNi41NSAxOC44OC00LjM0IDQxLTQuNzYgNTkuODkgNDkuNC0yMi41NiA3OS41Mi01OS4zIDc2LjA3LTEwOS44NnoiIGZpbGw9IiNmNjhiMmQiLz48cGF0aCBkPSJtLjI4IDc3LjI5YzMyIDIuNyA2MC4yNiAyMC42MyA3MS4zIDUwIDYuNTYgMTguODggNC4zNCA0MSA0Ljc3IDU5Ljg5LTQ5LjQzLTIyLjU4LTc5LjQ0LTU5LjM0LTc2LjA3LTEwOS44OXoiIGZpbGw9IiNmZmJkMDAiLz48cGF0aCBkPSJtNzEuMDkuNjRoLTcwLjg1djY5Ljc4YTgzLjEzIDgzLjEzIDAgMCAwIDcwLjg1LTY5Ljc4eiIgZmlsbD0iI2VmMzM0MCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./images/sprites/norquest-logo-vertical.svg":
/*!***************************************************!*\
  !*** ./images/sprites/norquest-logo-vertical.svg ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/norquest-logo-vertical.svg");

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
 // import "./customizer.js";
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