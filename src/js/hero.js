var arrowElement = document.querySelectorAll(".scroll-down-arrow-hero")

for (var i = 0; i < arrowElement.length; i++) {
  arrowElement[i].addEventListener("click", function () {
    window.scrollTo({
      top: window.innerHeight + 24,
      behavior: "smooth",
    })
  })
}
