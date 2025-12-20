import { classAction } from "./classActions.js";

const swiperInstances = {};

export const slidersConfig = [];

function removeAllElementsActiveClass(items, className) {
  items?.forEach((item) => {
    classAction(item, className, "remove");
  });
}

function initSwiper(config) {
  const elements = document.querySelectorAll(config.selector);
  if (!elements.length) return null;

  destroySwipersBySelector(config.selector);

  const swiperOptions = {
    ...config.options,
    ...(config.events ? { on: config.events } : {}),
  };

  // console.log(element)

  elements.forEach((element, index) => {
    const instanceKey = `${config.selector}--${index}`;
    swiperInstances[instanceKey] = new Swiper(element, swiperOptions);

    // showDetailsSlider(swiperInstances[instanceKey]);
  });

  return getSwipersBySelector(config.selector);
}

function destroySwiper(instanceKey) {
  if (swiperInstances[instanceKey]) {
    swiperInstances[instanceKey].destroy(true, true);
    delete swiperInstances[instanceKey];
  }
}

function destroySwipersBySelector(selector) {
  Object.keys(swiperInstances)
    .filter((key) => key.startsWith(`${selector}--`))
    .forEach((key) => destroySwiper(key));
}

function getSwipersBySelector(selector) {
  return Object.keys(swiperInstances)
    .filter((key) => key.startsWith(`${selector}--`))
    .map((key) => swiperInstances[key]);
}

function checkBreakpoint(breakpoint) {
  return window.innerWidth < breakpoint;
}

export function handleAllSliders() {
  slidersConfig.forEach((config) => {
    if (config.breakpointMax && checkBreakpoint(config.breakpointMax)) {
      destroySwipersBySelector(config.selector);
      return;
    }

    if (checkBreakpoint(config.breakpoint)) {
      const existingInstances = getSwipersBySelector(config.selector);

      if (!existingInstances.length) {
        initSwiper(config);
      }
    } else {
      destroySwipersBySelector(config.selector);
    }
  });
}

export const showDetailsSlider = (swiper, mediaPaddingBottom) => {
  const swiperEl = swiper.el;


  // console.log(swiperEl)

  if (!swiperEl) return;

  const swiperBox = swiperEl.closest("section, .swiper-box");
  // const swiperBoxHiddenArrow = swiperBox.closest(".hideenArrow");

  // const arrowsPrev = swiperBox.querySelectorAll(".arrow-slider.prev");
  // const arrowsNext = swiperBox.querySelectorAll(".arrow-slider.next");
  // const swiperArrowsPosition = swiperBox.querySelector(
  //   ".swiper-arrows-position"
  // );
  // const swiperDetails = swiperBox.querySelector(".swiper-details");
  const swiperDetailsBottom = swiperBox.querySelector(".swiper-details-bottom");
  const swiperWrapper = swiperBox.querySelector(".swiper-wrapper");

  if (swiper.isBeginning && swiper.isEnd) {
    if (swiperDetailsBottom) {
      const paginaton = swiperDetailsBottom.querySelector(".swiper-pagination");

      swiperWrapper.style.paddingBottom = "0";
      paginaton.style.display = "none";
    }

    return;
  } else {
    if (swiperDetailsBottom) {
      const paginaton = swiperDetailsBottom.querySelector(".swiper-pagination");

      if (swiperDetailsBottom.classList.contains('swiper-details-bottom--media')) {
        if (window.innerWidth < 1223) {
          paginaton.style.display = "flex";
        } else {
          paginaton.style.display = "none";
        }
      } else if (paginaton.classList.contains('swiper-pagination-progressbar')) {
        paginaton.style.display = "block";
      }

     
    }
    //  swiperWrapper.style.paddingBottom = "20px";
  }
};

const toggleStyle = (items, key, style) => {
  items.forEach((item) => {
    // item.style[key] = `${style}`

    if (style === "none") {
      classAction(item, "show", "remove");
    }

    if (style === "flex") {
      classAction(item, "show", "add");
    }
  });
};

export const toggleInnerInfo = (options) => {
  const {
    renderHtml = () => "<p>slide 1</p>",
    swiperBoxSelector = ".swiper-box",
  } = options;

  const boxSwiper = document.querySelector(`${swiperBoxSelector}`);

  if (!boxSwiper) return;

  const boxContent = boxSwiper.querySelector(".swiper-box-details");

  if (!boxContent) return;

  boxContent.innerHTML = "";

  boxContent.insertAdjacentHTML("beforeend", renderHtml());
};
