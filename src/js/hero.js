const prevButton = document.getElementById("default-carousel-prev")
const nextButton = document.getElementById("default-carousel-next")
const heroContainer = document.getElementById("hero-container")

let canSlide = true
let slideInterval

function resetSlideInterval() {
  clearInterval(slideInterval)
  slideInterval = setInterval(() => {
    if (canSlide) {
      nextButton.click()
    }
  }, 4000) // Adjust the interval as needed (e.g., 5000ms for a 5-second interval)
}

document.addEventListener("keydown", function (event) {
  if (heroContainer.getBoundingClientRect().top < window.innerHeight && heroContainer.getBoundingClientRect().bottom > 0) {
    if (!canSlide) {
      return
    }
    if (event.key === "ArrowLeft") {
      prevButton.click()
    } else if (event.key === "ArrowRight") {
      nextButton.click()
    }
    canSlide = false
    setTimeout(() => {
      canSlide = true
      resetSlideInterval()
    }, 700)
  }
})

prevButton.addEventListener("click", resetSlideInterval)
nextButton.addEventListener("click", resetSlideInterval)

resetSlideInterval()


// Scroll down arrow
var arrowElement = document.querySelectorAll(".scroll-down-arrow-hero")

for (var i = 0; i < arrowElement.length; i++) {
  arrowElement[i].addEventListener("click", function () {
    window.scrollTo({
      top: window.innerHeight + 24,
      behavior: "smooth",
    })
  })
}