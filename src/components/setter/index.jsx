import { defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <div className="setter">
            <div className="setter-header"></div>
          </div>
        </>
      );
    };
  },
});
