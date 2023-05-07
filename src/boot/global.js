import { boot } from "quasar/wrappers";
import controls from "../controls/control";

export default boot(({ app }) => {
  controls(app);
});
