import { defineComponent } from "vue";
import { useStore } from "vuex";
import widgetConfig from "@/config/widget/widgetConfig";
import Editor from "@/packages/editor/index.jsx";
import "./index.scss";

export default defineComponent({
  setup() {
    const initState = () => {
      const store = useStore();
      // 共享所有小部件
      store.dispatch("updateWidgetConfig", widgetConfig);
      // 编辑器相关数据
      store.dispatch("updateEditorWidgetData", {
        container: {}, // 画布容器
        widgets: [], // 小部件列表
        widgetSelectedIndex: -1, // 当前选择小部件index（初始化为画布容器:-1）
      });
    };

    initState();

    return () => {
      return (
        <div class="g-page-editor">
          <Editor></Editor>
        </div>
      );
    };
  },
});
