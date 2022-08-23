// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// navToggle.addEventListener("click", function (e) {
//   links.classList.value.includes("show-links")
//     ? links.classList.remove("show-links")
//     : links.classList.add("show-links");
//   console.log(links.classList.value);
// });

navToggle.addEventListener("click", function (e) {
  links.classList.toggle("show-links");
  console.log(links.classList.value);
});
