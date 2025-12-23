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
      slidesPerView: 1.2,
      spaceBetween: 48,
      mousewheel: MOUSE_WHEEL_CONFIG,
      breakpoints: {
        1280: {
          slidesPerView: 5,
          spaceBetween: 48,
        },
        1080 : {
          slidesPerView: 4.6,
        },
        800: {
          slidesPerView: 3.6,
        },
        560: {
          slidesPerView: 2.3,
        }
      }
    },
  },
  ABOUT_NUMBER: {
    selector: ".aboutNumber .swiper--about",
    breakpoint: 767,
    options: {
      slidesPerView: 1.2,
      spaceBetween: 12,
      mousewheel: MOUSE_WHEEL_CONFIG,
      breakpoints : {
        560: {
          slidesPerView: 2.1,
        }
      }
    },
  },
  DOCUMENTS_MAIN: {
    selector: ".documents .swiper--documents",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1.2,
      spaceBetween: 12,
      mousewheel: MOUSE_WHEEL_CONFIG,
      navigation: {
        nextEl: ".documents .arrows-swiper__arrow.next",
        prevEl: ".documents .arrows-swiper__arrow.prev",
      },
      breakpoints: {
        1280: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1080 : {
          slidesPerView: 4.6,
        },
        800: {
          slidesPerView: 3.6,
        },
        560: {
          slidesPerView: 2.3,
        }
      }
    },
  },
  GALLERY_MAIN: {
    selector: ".gallery .swiper--gallery",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1.2,
      spaceBetween: 12,
      mousewheel: MOUSE_WHEEL_CONFIG,
      navigation: {
        nextEl: ".gallery .arrows-swiper__arrow.next",
        prevEl: ".gallery .arrows-swiper__arrow.prev",
      },
      breakpoints: {
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1080 : {
          slidesPerView: 3.3,
        },
        800: {
          slidesPerView: 2.7,
        },
        560: {
          slidesPerView: 1.7,
        }
      }
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
      slidesPerView: 1.1,
      spaceBetween: 12,
      mousewheel: MOUSE_WHEEL_CONFIG,
      navigation: {
        nextEl: ".services .arrows-swiper__arrow.next",
        prevEl: ".services .arrows-swiper__arrow.prev",
      },
      breakpoints: {
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        800: {
          slidesPerView: 2.3,
        },
        500: {
          slidesPerView: 1.5,
        }
      }
    },
  },
  IMG_SWIPER_DETAIL: {
    selector: ".detail .swiper--detail",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".detail .arrows-swiper__arrow.next",
        prevEl: ".detail .arrows-swiper__arrow.prev",
      },
      pagination: {
        el: ".detail .swiper-pagination",
        type: "fraction",
      },
      mousewheel: MOUSE_WHEEL_CONFIG,
    },
  },
};
