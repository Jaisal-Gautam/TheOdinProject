let menuClick = document.querySelector(".menuImg");

menuClick.addEventListener("click", () => {
  let menuShow = document.querySelector(".menu");
  let currentDisplay = window.getComputedStyle(menuShow).display;

  if (currentDisplay === "none") {
    menuShow.style.display = "block";
  } else {
    menuShow.style.display = "none";
  }
});