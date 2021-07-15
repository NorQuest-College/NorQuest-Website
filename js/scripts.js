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
const searchInput = document.querySelector(".header-search-form");
const searchWrapper = document.querySelector(".header-search");
document.querySelector(".header-search-icon-wrapper").onclick = function searchIcon() {
  searchBtn.classList.toggle("active");
  searchInput.classList.toggle("active");
  searchWrapper.classList.toggle("active");
};
// -- END -- search icon toggle

// mobile hamburger toggle
const mobileToggle = document.querySelector(".mobile_toggle");
document.querySelector(".mobile_toggle").onclick = function mobileMenuToggle() {
  mobileToggle.classList.toggle("is-active");
};
// -- END -- mobile hamburger toggle

// Mobile sub nav toggle button
const toggleSubNavs = document.getElementsByClassName("menu-close");
for (var i = 0; i < toggleSubNavs.length; i++) {
  toggleSubNavs[i].addEventListener("click", subNavToggle);
}
function subNavToggle() {
  this.classList.toggle("active");
}
// -- END -- Mobile sub nav toggle button