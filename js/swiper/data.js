import { toggleActiveEl } from "../modules/changeSwiper.js";

const MOUSE_WHEEL_CONFIG = {
  enabled: true,
  forceToAxis: true,
  sensitivity: 1,
  eventsTarget: "container",
};

export const SWIPERS = {
  STEPS_MAIN: {
    selector: ".steps .swiper--steps",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 5,
      spaceBetween: 48,
      mousewheel: MOUSE_WHEEL_CONFIG,
    },
  },
  DOCUMENTS_MAIN: {
    selector: ".documents .swiper--documents",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 5,
      spaceBetween: 24,
      mousewheel: MOUSE_WHEEL_CONFIG,
      navigation: {
        nextEl: ".documents .arrows-swiper__arrow.next",
        prevEl: ".documents .arrows-swiper__arrow.prev",
      },
    },
  },
  GALLERY_MAIN: {
    selector: ".gallery .swiper--gallery",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 4,
      spaceBetween: 20,
      mousewheel: MOUSE_WHEEL_CONFIG,
      navigation: {
        nextEl: ".gallery .arrows-swiper__arrow.next",
        prevEl: ".gallery .arrows-swiper__arrow.prev",
      },
    },
  },
  BREADCRUMBS: {
    selector: ".breadcrumbs .swiper--breadcrumbs",
    breakpoint: 122300000000,
    options: {
      slidesPerView: "auto",
      spaceBetween: 0,
      mousewheel: MOUSE_WHEEL_CONFIG,
    },
  },
  WORKSHOP: {
    selector: ".equipment .swiper--equipment",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1,
      spaceBetween: 20,
      mousewheel: MOUSE_WHEEL_CONFIG,
      navigation: {
        nextEl: ".equipment .arrows-swiper__arrow.next",
        prevEl: ".equipment .arrows-swiper__arrow.prev",
      },
    },
    events: {
      slideChange: (swiper) => {
        toggleActiveEl(swiper.realIndex, "swiper", swiper.el);
      },
      init: (swiper) => {
        toggleActiveEl(swiper.realIndex, "swiper", swiper.el);
      },
    },
  },
  SERVICES: {
    selector: ".services .swiper--services",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 3,
      spaceBetween: 24,
      mousewheel: MOUSE_WHEEL_CONFIG,
      navigation: {
        nextEl: ".services .arrows-swiper__arrow.next",
        prevEl: ".services .arrows-swiper__arrow.prev",
      },
    },
  },
};
