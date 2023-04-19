import { Vue } from "vue";

const requireComponent = require.context(
  // The relative path of the components folder
  "./global",
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);
  // Get PascalCase name of component
  const componentName = Vue._.upperFirst(
    Vue._.camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});
