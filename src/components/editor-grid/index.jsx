import { defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  setup() {
    const list = [];
    for (let i = 0; i < 1000; i++) {
      list.push({});
    }
    return () => {
      return (
        <div className="editor-grid">
          {list.map(() => {
            return <div className="item"></div>;
          })}
        </div>
      );
    };
  },
});
