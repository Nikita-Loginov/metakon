import { handleAllSliders, slidersConfig } from "./modules/swiper.js";
import { SWIPERS } from "./swiper/data.js";
import { initFancybox } from "./modules/fancybox.js";

const swipers = [
  {
    ...SWIPERS.STEPS_MAIN,
  },
  {
    ...SWIPERS.DOCUMENTS_MAIN,
  },
  {
    ...SWIPERS.GALLERY_MAIN,
  },
];

const handleGlobalClick = (e) => {};

document.addEventListener("DOMContentLoaded", () => {
  initFancybox("documents");

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
