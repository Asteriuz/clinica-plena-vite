import { Carousel } from "flowbite"

var arrowElement = document.querySelectorAll(".scroll-down-arrow-hero")

for (var i = 0; i < arrowElement.length; i++) {
  arrowElement[i].addEventListener("click", function () {
    window.scrollTo({
      top: window.innerHeight + 24,
      behavior: "smooth",
    })
  })
}

const items = [
  {
    position: 0,
    el: document.getElementById("carousel-item-1"),
  },
  {
    position: 1,
    el: document.getElementById("carousel-item-2"),
  },
  {
    position: 2,
    el: document.getElementById("carousel-item-3"),
  },
  {
    position: 3,
    el: document.getElementById("carousel-item-4"),
  },
]

const options = {
  defaultPosition: 0,
  interval: 6000,

  indicators: {
    activeClasses: "bg-vermelho-claro",
    inactiveClasses: "bg-white/50 hover:bg-vermelho-claro/50",
    items: [
      {
        position: 0,
        el: document.getElementById("carousel-indicator-1"),
      },
      {
        position: 1,
        el: document.getElementById("carousel-indicator-2"),
      },
      {
        position: 2,
        el: document.getElementById("carousel-indicator-3"),
      },
      {
        position: 3,
        el: document.getElementById("carousel-indicator-4"),
      },
    ],
  },
}

const carousel = new Carousel(items, options)
carousel.cycle()

let canSlide = true

const $prevButton = document.getElementById("data-carousel-prev")
const $nextButton = document.getElementById("data-carousel-next")

function slideNext() {
  if (canSlide) {
    carousel.next()
    canSlide = false
    setTimeout(() => {
      canSlide = true
    }, 1000)
  }
}

function slidePrev() {
  if (canSlide) {
    carousel.prev()
    canSlide = false
    setTimeout(() => {
      canSlide = true
    }, 1000)
  }
}

$prevButton.addEventListener("click", () => {
  slidePrev()
})

$nextButton.addEventListener("click", () => {
  slideNext()
})

const heroContainer = document.getElementById("hero-container")

document.addEventListener("keydown", function (event) {
  if (heroContainer.getBoundingClientRect().top < window.innerHeight && heroContainer.getBoundingClientRect().bottom > 0) {
    if (event.key === "ArrowLeft") {
      slidePrev()
    } else if (event.key === "ArrowRight") {
      slideNext()
    }
  }
})
