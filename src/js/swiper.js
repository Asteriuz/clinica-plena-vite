import Swiper from "swiper"
import { Navigation, Pagination, Thumbs, EffectFade, FreeMode, Keyboard, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"

// change swiper var to this;
// :root {
//     --swiper-theme-color: #e93338;
//     --swiper-navigation-size: 44px;
//     --swiper-navigation-top-offset: 50%;
//     --swiper-navigation-sides-offset: 10px;
//     --swiper-navigation-color: var(--swiper-theme-color);
//   }

// init Swiper:
const swiperThumbs = new Swiper(".swiper-thumbs", {
  modules: [FreeMode, Thumbs],
  loop: true,
  spaceBetween: 10,
  freeMode: true,
  autoScrollOffset: 1,
  watchSlidesProgress: true,
  breakpoints: {
    // 3, 4, 5
    320: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
})

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Thumbs, EffectFade, Keyboard, Autoplay],
  effect: "fade",
  speed: 700,
  grabCursor: true,
  spaceBetween: 10,
  fadeEffect: {
    crossFade: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: swiperThumbs,
  },
  on: {
    slideChange: function () {
      swiperThumbs.slideToLoop(this.realIndex, 700, false)
    },
  },
})
