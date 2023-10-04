let prevScrollpos = window.scrollY;

let nav = document.getElementById("navbar");

window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 96) {
    nav.style.transform = "translateY(0)";
  } else {
    nav.style.transform = "translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;
};

function toggleNavbar() {
  const buttonOpen = document.getElementById("hamburger-open");
  const buttonClose = document.getElementById("hamburger-close");

  if (buttonOpen.classList.contains("hidden")) {
    buttonOpen.classList.remove("hidden");
    buttonClose.classList.add("hidden");
  } else {
    buttonOpen.classList.add("hidden");
    buttonClose.classList.remove("hidden");
  }
}
