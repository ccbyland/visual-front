import { defineComponent } from "vue";
import GlobalStyle from "@/utils/globalStyle";
import "./index.scss";

export default defineComponent({
  props: {
    modelValue: { type: Object },
  },
  setup(props) {
    const list = [];
    for (let i = 0; i < 1000; i++) {
      list.push({});
    }
    return () => {
      const containerData = props.modelValue.container.props;
      const pageClass = GlobalStyle.getPageClass(containerData);
      const gridMarginArr = GlobalStyle.getGridMarginArr(containerData);
      const gridSytle = {
        padding: `${gridMarginArr[0]}px`,
        gridGap: `${gridMarginArr[0]}px`,
      };

      return (
        <div className={pageClass + " editor-grid"} style={gridSytle}>
          {list.map(() => {
            return <div className="item"></div>;
          })}
        </div>
      );
    };
  },
});
