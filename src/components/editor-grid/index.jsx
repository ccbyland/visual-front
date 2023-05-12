import { defineComponent } from "vue";
import GlobalStyle from "@/utils/globalStyle";
import "./index.scss";

export default defineComponent({
  props: {
    modelValue: { type: Object },
  },
  setup() {
    const list = [];
    for (let i = 0; i < 1000; i++) {
      list.push({});
    }
    return (props) => {
      const containerData = props.modelValue.container.props;
      const pageClass = GlobalStyle.getPageClass(containerData);

      return (
        <div className={pageClass + " editor-grid"}>
          {list.map(() => {
            return <div className="item"></div>;
          })}
        </div>
      );
    };
  },
});
