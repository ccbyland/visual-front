import SetterLayout from "./setterLayout";
import ColorScheme from "./colorScheme";

const components = [SetterLayout, ColorScheme];

export default {
  install: (app) => {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  },
};
