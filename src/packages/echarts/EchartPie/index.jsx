import { defineComponent } from "vue";
import core from "../core";
import main from './main'

const component = Object.assign({}, core, {
  name: "echart-pie",
  mixins: [ main ]
});

export default defineComponent(component);
