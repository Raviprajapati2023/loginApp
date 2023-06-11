const toCamelCase = (text) => text.replace(/-\w/g, clearAndUpper);
const clearAndUpper = (text) => text.replace(/-/, "").toUpperCase();

const files = import.meta.globEager("../controls/*.vue");
const entries = Object.entries(files);
const temporaryModules = [];
entries.forEach((entry) => {
  let name = toCamelCase(entry[0].split("/")[2]);
  name = name.split(".vue")[0];
  const file = {};
  file[name] = entry[1].default;
  temporaryModules.push(file);
});

const modules = Object.assign({}, ...temporaryModules);

export default (app) => {
  for (const module in modules) {
    app.component(module, modules[module]);
  }
};
