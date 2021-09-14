/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./js/plugins.jQuery.js ***!
  \******************************/
$(document).ready(function () {
  console.log("document loaded");
});
$(window).on("load", function () {
  console.log("window loaded");
}); // select2 jQuery calls

$(document).ready(function () {
  $("select").select2({
    placeholder: {
      id: "-1",
      // the value of the option
      text: "– Select –"
    },
    theme: "norQuest"
  });
  $(".js-example-basic-multiple1").select2({
    placeholder: "- Select Multiple -",
    theme: "norQuest"
  });
  $(".js-example-basic-single1").select2({
    placeholder: "- Select one -",
    theme: "norQuest"
  });
  $(".js-example-basic-multiple2").select2({
    placeholder: "- Select Multiple -",
    theme: "norQuest-dark"
  });
  $(".js-example-basic-single2").select2({
    placeholder: "- Select one -",
    theme: "norQuest-dark"
  });
});
/******/ })()
;
//# sourceMappingURL=plugins.js.map