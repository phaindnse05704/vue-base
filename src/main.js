import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

import "@/global/components.js";
import "@/global/directives.js";
import "@/global/mixins.js";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "production") {
  const d = new Date();
  // eslint-disable-next-line no-console
  console.log(`Built date: ${d}`);
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
