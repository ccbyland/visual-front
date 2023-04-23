import { defineComponent } from "vue";
import { useStore } from "vuex";
import widgetConfig from "@/config/widget/widgetConfig";
import Editor from "@/packages/editor/index.jsx";
import "./index.scss";

export default defineComponent({
  setup() {
    const store = useStore();

    store.dispatch("updateWidgetConfig", widgetConfig);
    store.dispatch("updateEditorWidgetData", [12, 2, 3]);

    return () => {
      return (
        <div class="g-page-editor">
          <Editor></Editor>
        </div>
      );
    };
  },
});
