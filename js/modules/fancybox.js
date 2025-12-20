export function initFancybox(name = "gallery", config = {}) {
  if (typeof Fancybox === "undefined") {
    return;
  }

  Fancybox.bind(`[data-fancybox=${name}]`, { ...config });
}
