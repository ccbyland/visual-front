import { defineComponent } from "vue";
import Header from "@/components/header/index";
import Canvas from "@/components/canvas/index";
import Setter from "@/components/setter/index";
import "./index.scss";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div className="editor">
          <Header></Header>
          <div className="main">
            <Canvas></Canvas>
            <Setter></Setter>
          </div>
        </div>
      );
    };
  },
});
