export const hiddenBlockChangeSwiper = () => {
  const boxs = document.querySelectorAll('[data-block="change-swiper"]');

  boxs.forEach((box) => {
    const itemsBox = box.querySelector('[data-block="change-swiper__items"]');
    const swiperBox = box.querySelector('[data-block="change-swiper__box"]');

    if (!itemsBox || !swiperBox) {
      box.remove();

      return;
    }

    if (itemsBox.children.length !== swiperBox.children.length) {
      box.remove();

      return;
    }
  });
};

export const toggleActiveEl = (index, value = "", el) => {
  if (value === "swiper" || value === "item") {
    const { itemsBox, swiperRelative } = findElemntsChangeSwiper(el);

    if (!itemsBox) return;

    const success = changeActiveItem(itemsBox, index);

    if (success && value === "item" && swiperRelative) {
      changeActiveSlide(swiperRelative, index);
    }
  }
};

export const findElemntsChangeSwiper = (el) => {
  const relativeBox = el.closest('[data-block="change-swiper"]');

  if (!relativeBox) return {};

  const itemsBox = relativeBox.querySelector(
    '[data-block="change-swiper__items"]'
  );
  const swiperBox = relativeBox.querySelector(
    '[data-block="change-swiper__box"]'
  );
  const swiperRelative = relativeBox.querySelector(".swiper");

  return { relativeBox, itemsBox, swiperBox, swiperRelative };
};

export const changeActiveItem = (itemsBox, index) => {
  if (!itemsBox || index < 0 || index >= itemsBox.children.length) {
    return false;
  }

  const activePrev = itemsBox.querySelector(
    '[data-block="change-swiper__item"].active'
  );
  const activeNext = itemsBox.children[index];

  if (activePrev) activePrev.classList.remove("active");
  activeNext.classList.add("active");

  return true;
};

export const clickChangeSwiperItem = (e) => {
  const { target } = e;

  const itemEl = target.closest('[data-block="change-swiper__item"]');
  if (!itemEl) return;

  const { itemsBox } = findElemntsChangeSwiper(itemEl);
  if (!itemsBox) return;

  const children = Array.from(itemsBox.children);
  const activeIndex = children.indexOf(itemEl);

  if (activeIndex !== -1) {
    toggleActiveEl(activeIndex, "item", itemEl);
  }
};

export const changeActiveSlide = (swiperRelative, index) => {
  const swiperInstance = swiperRelative.swiper;

  if (swiperInstance && typeof swiperInstance.slideTo === "function") {
    swiperInstance.slideTo(index);
  }
};
