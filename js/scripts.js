

let scrollpos = window.scrollY;
const header = document.querySelector("header");
const header_height = header.offsetHeight;
// const header_height = ( parseFloat(header.offsetHeight) - 50 );

const add_class_on_scroll = () => header.classList.add("stick");
const remove_class_on_scroll = () => header.classList.remove("stick");

// console.log(header_height);
window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
  // console.log(scrollpos);
});