import { defineComponent } from "vue";
import CanvasBackground from "@/components/canvas-background/index";
import CanvasModule from "@/components/canvas-module/index";
import CanvasContent from "@/components/canvas-content/index";
import "./index.scss";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div className="canvas">
          <CanvasModule></CanvasModule>
          <div className="canvas-main">
            <CanvasContent></CanvasContent>
            <CanvasBackground></CanvasBackground>
          </div>
        </div>
      );
    };
  },
});
