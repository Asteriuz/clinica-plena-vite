const nextButton = document.querySelector("#testimony-next")
const prevButton = document.querySelector("#testimony-prev")
const testimonyNumber = document.querySelector("#testimony-number")
const testimonyContainer = document.querySelector("#testimony-container")

const testimonyName = document.querySelector("#testimony-name")
const testimonyText = document.querySelector("#testimony-text")
const testimonyImg = document.querySelector("#testimony-img")

const testimonyList = {
  0: {
    name: "Laura Kim (Local Guide)",
    testimony:
      "Melhor Doutora ginecologista da vida! Amorosa, super profissional, dedicada, entende do riscado, consulta de 1 hora, só posso recomendar a todas! Gratidão!",
    img: "testimony/person1.png",
  },
  1: {
    name: "Vanildes Bernardo",
    testimony:
      "Melhor Dra Angélica, melhor Dra  que já encontrei, muito atenciosa , e muito simpática, amiga , enfim uma fofaaaa Dr Orlando que é vascular tbm, um  excelente médico , muito profissional e bem humorado tbm !!! Esses dois são maravilhosos, tenho um carinho e admiração pelos 2 ❤️❤️",
    img: "testimony/person2.png",
  },
  2: {
    name: "Marcela Camargo",
    testimony:
      "Gostaria de expressar minha eterna gratidão a profissional Dra. Angelica Barcelos ,  otima profissional soube diagnosticar com rapidez e tomar as decisões rapidamente diante da minha situação. Recomendo a todos da minha familia, amigos e a quem eu puder falar.   Dra. Angelica obrigada por tudo!",
    img: "testimony/person3.png",
  },
  3: {
    name: "Rosa Maria (Local Guide)",
    testimony: "Educada, delicada e bem humorada😍 ...",
    img: "testimony/person4.png",
  },
}

let currentTestimony = 0

const updateTestimony = () => {
  testimonyContainer.style.opacity = 0
  setTimeout(() => {
    const { name, testimony, img } = testimonyList[currentTestimony]
    testimonyName.textContent = name
    testimonyText.textContent = testimony
    testimonyImg.src = img
    testimonyNumber.textContent = currentTestimony + 1 + " / " + Object.keys(testimonyList).length
    testimonyContainer.style.opacity = 1
  }, 500)
}

const nextTestimony = () => {
  currentTestimony = (currentTestimony + 1) % Object.keys(testimonyList).length
  updateTestimony()
}

const prevTestimony = () => {
  if (currentTestimony == 0) {
    currentTestimony = Object.keys(testimonyList).length - 1
  } else {
    currentTestimony = (currentTestimony - 1) % Object.keys(testimonyList).length
  }
  updateTestimony()
}

nextButton.addEventListener("click", nextTestimony)
prevButton.addEventListener("click", prevTestimony)

// add event listener to change testimony with arrow keys if testimony is visible in viewport
document.addEventListener("keydown", (e) => {
  if (testimonyContainer.getBoundingClientRect().top < window.innerHeight && testimonyContainer.getBoundingClientRect().bottom > 0) {
    if (e.key == "ArrowRight") {
      nextTestimony()
    } else if (e.key == "ArrowLeft") {
      prevTestimony()
    }
  }
})
