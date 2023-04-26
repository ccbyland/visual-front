import { defineComponent } from "vue";
import { useStore } from "vuex";
import editorWidgetConfig from "@/config/widget/editorWidgetConfig";
import Editor from "@/packages/editor/index.jsx";
import "./index.scss";
import useDefaultData from "@/hooks/useDefaultData";

export default defineComponent({
  setup() {
    const store = useStore();

    // 编辑器初始化数据
    let editorWidgetData = {
      container: {}, // 画布容器
      widgets: [], // 小部件列表
      widgetSelectedIndex: -1, // 当前选择小部件index（初始化为画布容器:-1）
    };

    // 初始化画布props
    const { setCanvasProps } = useDefaultData(
      editorWidgetConfig,
      editorWidgetData,
      {
        isCanvas: true,
      }
    );

    // 更新画布props
    editorWidgetData = setCanvasProps();

    // 共享编辑器配置对象（画布+组件+操作下标）
    store.dispatch("updateEditorWidgetConfig", editorWidgetConfig);
    // 共享编辑器数据
    store.dispatch("updateEditorWidgetData", editorWidgetData);

    return () => {
      return (
        <div class="g-page-editor">
          <Editor></Editor>
        </div>
      );
    };
  },
});
