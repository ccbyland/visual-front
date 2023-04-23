import { defineComponent } from "vue";
import core from "../core";

const component = Object.assign({}, core, {
  name: "echart-pie",
});

export default defineComponent(component);
