import { defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  setup() {
    const list = [];
    for (let i = 0; i < 1000; i++) {
      list.push({});
    }
    console.error(list);
    return () => {
      return (
        <div className="canvas-background">
          <div className="container">
            {list.map(() => {
              return <div className="item"></div>;
            })}
          </div>
        </div>
      );
    };
  },
});
