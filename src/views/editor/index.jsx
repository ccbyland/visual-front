import { defineComponent } from "vue";
import { useStore } from "vuex";
import widgetConfig from "@/config/widget/widgetConfig";
import Editor from "@/packages/editor/index.jsx";
import "./index.scss";

export default defineComponent({
  setup() {
    const store = useStore();

    store.dispatch("updateWidgetConfig", widgetConfig);
    store.dispatch("updateEditorWidgetData", {
      widgets: [],
      widgetSelectedIndex: -1 // 当前选择小部件index（初始化为页面-1）
    });

    return () => {
      return (
        <div class="g-page-editor">
          <Editor></Editor>
        </div>
      );
    };
  },
});
