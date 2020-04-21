import Vue from "vue";
import PortalVue from "portal-vue";
import camelCase from "@/plugins/lodash/camelCase.js";
import upperFirst from "@/plugins/lodash/upperFirst.js";

const requireComponent = require.context(
  // The relative path of the components folder
  "@/core/base",
  // Whether or not to look in open subfolders
  false,
  // /Base[A-Z]\w+\.(vue|js)$/
  /[\w-]+\.vue$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
      .split("/")
      .pop()
      .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.use(PortalVue);
