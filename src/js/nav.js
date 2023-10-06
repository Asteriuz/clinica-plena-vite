let prevScrollpos = window.scrollY

let nav = document.getElementById("navbar")

window.onscroll = function () {
  let currentScrollPos = window.scrollY
  if (prevScrollpos > currentScrollPos || currentScrollPos < 96) {
    nav.style.transform = "translateY(0)"
  } else {
    nav.style.transform = "translateY(-100%)"
  }
  prevScrollpos = currentScrollPos
}

function toggleNavbar() {
  const buttonOpen = document.getElementById("hamburger-open")
  const buttonClose = document.getElementById("hamburger-close")

  if (buttonOpen.classList.contains("hidden")) {
    buttonOpen.classList.remove("hidden")
    buttonClose.classList.add("hidden")
  } else {
    buttonOpen.classList.add("hidden")
    buttonClose.classList.remove("hidden")
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

document.addEventListener("click", function (e) {
  const menuBtn = document.querySelector("#navbar-toggle")
  if (
    (!e.target.closest("nav") && menuBtn.getAttribute("aria-expanded") == "true") ||
    (e.target.classList.contains("nav-link") && menuBtn.getAttribute("aria-expanded") == "true")
  ) {
    menuBtn.click()
  }
})

// Get the button
const mybutton = document.getElementById("btn-back-to-top")

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.classList.remove("opacity-0")
  } else {
    mybutton.classList.add("opacity-0")
  }
}
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop)

window.addEventListener("scroll", scrollFunction)
