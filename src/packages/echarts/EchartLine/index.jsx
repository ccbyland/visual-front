import { defineComponent } from "vue";
import core from "../core";

const component = Object.assign({}, core, {
  name: "echart-line",
});

export default defineComponent(component);
