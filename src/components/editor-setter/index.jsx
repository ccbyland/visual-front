import { defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  setup() {
    return () => {
      return <div className="editor-setter"></div>;
    };
  },
});
