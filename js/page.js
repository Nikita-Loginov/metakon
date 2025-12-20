import { getHeightHeader, checkScrollY } from "./modules/header.js";
import { initModal, checkStartOpen } from "./modules/modal.js";
import { initFormValidation } from "./modules/validate.js";
import { toggleAccordeonItems } from "./modules/accordeon.js";
import { initMenu } from "./modules/menu.js";


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

document.addEventListener("DOMContentLoaded", () => {
  checkStartOpen();
  getHeightHeader();
  initValidate();

  document.addEventListener("click", handleGlobalClick);
});

window.addEventListener("resize", getHeightHeader);

document.addEventListener("scroll", checkScrollY);
