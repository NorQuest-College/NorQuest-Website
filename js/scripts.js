/**
 * -- helper function --
 */
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
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
let scrollpos = window.scrollY;
const header = document.querySelector("header");
const header_height = header.offsetHeight;
const add_class_on_scroll = () => header.classList.add("stick");
const remove_class_on_scroll = () => header.classList.remove("stick");
window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;
  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
// -- END -- header scroll class eventListener

/**
 * search icon toggle
 */
const searchBtn = document.querySelector(".header-search-icon-wrapper");
const searchInput = document.querySelector(".search-form");
const searchWrapper = document.querySelector(".header-search");
document.querySelector(".header-search-icon-wrapper").onclick =
  function searchIcon() {
    searchBtn.classList.toggle("active");
    searchInput.classList.toggle("active");
    searchWrapper.classList.toggle("active");
  };

// Detect all clicks on the document
document.addEventListener("click", function (event) {
  // If user clicks inside the element, do nothing
  if (event.target.closest(".active")) return;

  // If user clicks outside the element, hide it!
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  searchWrapper.classList.remove("active");
});
// -- END -- search icon toggle

/**
 * mobile hamburger toggle
 */
const mobileToggle = document.querySelector(".mobile_toggle");
const menuTopNav = document.querySelector(".menu-top-nav");
const navSearch = document.querySelector(".nav-search");
document.querySelector(".mobile_toggle").onclick = function mobileMenuToggle() {
  mobileToggle.classList.toggle("is-active");
  menuTopNav.classList.toggle("is-active");
  navSearch.classList.toggle("is-active");
};
// -- END -- mobile hamburger toggle

/**
 * Mobile sub nav toggle button
 */
const toggleSubNavs = document.getElementsByClassName("menu-close");
const toggleSubMenu = document.getElementsByClassName("lvl-2");

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
}
// -- END -- Mobile sub nav toggle button

/**
 * -- tab section --
 */
// event listener for the click on the tab item.
const tabs = document.querySelectorAll(".tabs li");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveTab(e.target);
    addActiveTab(tab);
  });
});

const removeActiveTab = (currentTab) => {
  // removes the .is-acive class on the nav list item
  var activeTab = currentTab.parentNode.parentNode.querySelectorAll("li");
  for (var i = 0, len = activeTab.length; i < len; i++) {
    activeTab[i].classList.remove("is-active");
  }

  // removes the .is-acive class on the section .tab-content item
  var activeSection = currentTab.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".tab-content");
  for (var i = 0, len = activeSection.length; i < len; i++) {
    activeSection[i].classList.remove("is-active");
  }
};

const addActiveTab = (tab) => {
  // adds .is-active class to list item and tab-content item
  tab.classList.add("is-active");
  const href = tab.querySelector("a").getAttribute("href");
  const matchingSection = document.querySelector(href);
  matchingSection.classList.add("is-active");
};
// -- END tab section --