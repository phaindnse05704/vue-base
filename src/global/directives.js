import Vue from "vue";
import lazyload from "@/plugins/lazyload"; //lazyload

// import clickaway from "./_directives/clickaway";


// Vue.directive("onclickaway", clickaway)

Vue.directive("clickaway", {
  bind: function(el, binding, vnode) {
    let stopPropagation = !(binding.modifiers && binding.modifiers.stop);
    el.clickawayEvent = function(event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    window.addEventListener("click", el.clickawayEvent, stopPropagation);
    window.addEventListener("touchstart", el.clickawayEvent, stopPropagation);
  },
  unbind: function(el) {
    window.removeEventListener("click", el.clickawayEvent);
    window.removeEventListener("touchstart", el.clickawayEvent);
  }
});

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});

Vue.use(lazyload);
