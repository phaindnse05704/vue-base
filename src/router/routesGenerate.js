const routes = [];

const requireComponent = require.context(
  // The relative path of the components folder
  "./modules",
  // Whether or not to look in open subfolders
  true,
  /^\.\/[A-Za-z]+\/$/
);

requireComponent.keys().forEach(fileName => {
  const _module = requireComponent(fileName);
  routes.push(..._module.routes.default);
});

export default routes;
