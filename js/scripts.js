// header scroll class eventListener
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

// search icon toggle
const searchBtn = document.querySelector(".header-search-icon-wrapper");
const searchInput = document.querySelector(".search-form");
const searchWrapper = document.querySelector(".header-search");
document.querySelector(".header-search-icon-wrapper").onclick = function searchIcon() {
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

// mobile hamburger toggle
const mobileToggle = document.querySelector(".mobile_toggle");
const menuTopNav = document.querySelector(".menu-top-nav");
const navSearch = document.querySelector(".nav-search");
document.querySelector(".mobile_toggle").onclick = function mobileMenuToggle() {
  mobileToggle.classList.toggle("is-active");
  menuTopNav.classList.toggle("is-active");
  navSearch.classList.toggle("is-active");
};
// -- END -- mobile hamburger toggle

// Mobile sub nav toggle button
const toggleSubNavs = document.getElementsByClassName("menu-close");
const toggleSubMenu = document.getElementsByClassName("lvl-2");

for (var i = 0; i < toggleSubNavs.length; i++) {
  toggleSubNavs[i]
    .addEventListener("click", function (e) {
      subNavToggle(e),
      lvl2Toggle(e)
      lvl3Toggle(e)
    });
}
function subNavToggle(e) {
  e.target.classList.toggle("active");
}

function lvl2Toggle(e) {
  var toggleSibling = e.target.nextElementSibling;
  if (toggleSibling.classList.contains( 'lvl-2' )) {
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

// tab section
const tabs = document.querySelectorAll(".tabs-wrapper .tabs li");
const sections = document.querySelectorAll(".tabs-wrapper .tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveTab();
    addActiveTab(tab);
  });
});

const removeActiveTab = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("is-active");
  });
  sections.forEach((section) => {
    section.classList.remove("is-active");
  });
};

const addActiveTab = (tab) => {
  tab.classList.add("is-active");
  const href = tab.querySelector("a").getAttribute("href");
  const matchingSection = document.querySelector(href);
  matchingSection.classList.add("is-active");
};