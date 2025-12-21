import { getHeightHeader, checkScrollY } from "./modules/header.js";
import { initModal, checkStartOpen } from "./modules/modal.js";
import { initFormValidation } from "./modules/validate.js";
import { toggleAccordeonItems } from "./modules/accordeon.js";
import { initMenu } from "./modules/menu.js";
import { handleAllSliders, slidersConfig } from "./modules/swiper.js";
import { SWIPERS } from "./swiper/data.js";

const swipers = [
  {
    ...SWIPERS.BREADCRUMBS,
  },
];

const handleGlobalClick = (e) => {
  initModal(e);
  toggleAccordeonItems(e);
  initMenu(e);
};

const initValidate = () => {
  const forms = document.querySelectorAll("form.form");

  forms.forEach((form) => {
    initFormValidation(form);
  });
};

const initGlobalSwiper = () => {
  swipers.forEach((config) => {
    const box = document.querySelector(config.selector);

    if (box) {
      slidersConfig.push(config);
    }
  });

  handleAllSliders();
};

document.addEventListener("DOMContentLoaded", () => {
  checkStartOpen();
  getHeightHeader();
  initValidate();
  initGlobalSwiper();

  document.addEventListener("click", handleGlobalClick);
});

window.addEventListener("resize", getHeightHeader);

document.addEventListener("scroll", checkScrollY);

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleAllSliders, 100);
});
