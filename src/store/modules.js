const modules = {};

const requireModule = require.context(
  // The relative path of the components folder
  "./",
  // Whether or not to look in open subfolders
  true,
  // /Base[A-Z]\w+\.(vue|js)$/
  /index\.js$/
);

requireModule.keys().forEach(fileName => {
  if (fileName == "./index.js") return;

  const _module = requireModule(fileName);
  const moduleName = fileName.replace("/index.js", "").replace("./", "");
  modules[moduleName] = {
    namespaced: true,
    ...(_module.default || _module)
  };
});

export default modules
