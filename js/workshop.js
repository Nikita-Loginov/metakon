import { handleAllSliders, slidersConfig } from "./modules/swiper.js";
import { SWIPERS } from "./swiper/data.js";
import {
  hiddenBlockChangeSwiper,
  clickChangeSwiperItem,
} from "./modules/changeSwiper.js";

const swipers = [
  {
    ...SWIPERS.WORKSHOP,
  },
  {
    ...SWIPERS.GALLERY_MAIN
  },
  {
    ...SWIPERS.SERVICES
  }
];

const handleGlobalClick = (e) => {
  clickChangeSwiperItem(e);
};

document.addEventListener("DOMContentLoaded", () => {
  hiddenBlockChangeSwiper();
  swipers.forEach((config) => {
    slidersConfig.push(config);
  });

  handleAllSliders();
});

document.addEventListener("click", handleGlobalClick);

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleAllSliders, 100);
});
