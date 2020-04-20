var delayScollTo;

let scrollTo = (element, to, duration) => {
  clearTimeout(delayScollTo);
  var start = element.scrollTop,
    change = to-200 - start,
    currentTime = 0,
    increment = 20;
  Math.easeOutQuint = function(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  };

  var animateScroll = function() {
    currentTime += increment;
    var val = Math.easeOutQuint(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      delayScollTo = setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

let scrollToElementWithClassBody = ($el, className, duration) => {
  if ($el) {
    let $bodyScroll = document.querySelector(className);
    if ($bodyScroll) {
      var offsetEl = $el.getBoundingClientRect();
      if (offsetEl) {
        let windowHeight = $bodyScroll.clientHeight;
        let top = offsetEl.top + $bodyScroll.scrollTop - windowHeight / 4;
        scrollTo($bodyScroll, top, duration);
      }
    }
  }
};

export default scrollTo;

export { scrollToElementWithClassBody };
