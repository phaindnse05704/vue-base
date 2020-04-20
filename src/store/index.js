/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);

let finalTypes = null;

const reader = modules => {
  for (const key in modules) {
    if (key !== "default") {
      const { types } = modules[key].default || modules[key];

      if (types !== undefined) {
        finalTypes = Object.assign({}, finalTypes, { [key]: types });
      }

      if (types === undefined) {
        reader(modules[key]);
      }
    }
  }
};

reader(modules);

export default new Vuex.Store({
  modules,
  state: {},
  mutations: {},
  actions: {}
});

export { modules, finalTypes as types };
