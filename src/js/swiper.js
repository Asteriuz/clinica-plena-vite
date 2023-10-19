import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"
// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"

// change swiper var to this;
// :root {
//     --swiper-theme-color: #e93338;
//     --swiper-navigation-size: 44px;
//     --swiper-navigation-top-offset: 50%;
//     --swiper-navigation-sides-offset: 10px;
//     --swiper-navigation-color: var(--swiper-theme-color);
//   }

// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
