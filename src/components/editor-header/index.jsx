import { defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div className="editor-header">
          <div className="info">可视化搭建</div>
          <div className="operate"></div>
        </div>
      );
    };
  },
});
