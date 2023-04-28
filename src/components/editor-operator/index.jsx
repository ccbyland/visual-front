import { computed, defineComponent, reactive, watch } from "vue";
import PropsStyle from "@/packages/props/propsStyle";
import "./index.scss";
import { useStore } from "vuex";
import useFocus from "@/hooks/useFocus";

export default defineComponent({
  setup() {
    const store = useStore();

    const state = reactive({
      editData: {},
    });

    const editorwidgetConfig = computed(() => store.state.editorWidgetConfig);
    const editorWidgetData = computed(() => store.state.editorWidgetData);
    const { lastSelectWidget } = useFocus(editorWidgetData);

    watch(
      [lastSelectWidget, editorWidgetData],
      ([newLastSelectWidget, newEditorData]) => {
        if (!newLastSelectWidget) {
          state.editData = newEditorData.container;
        } else {
          state.editData = newLastSelectWidget;
        }
      },
      { immediate: true }
    );
    watch();

    const updateEditData = (newEditData, type) => {
      state.editData = newEditData;
      // 更新
    };

    return () => {
      return (
        <div className="editor-operator">
          {lastSelectWidget.value ? (
            <>
              <div>123</div>
            </>
          ) : (
            <PropsStyle
              setters={editorwidgetConfig.value.globalConfig.styles}
              editData={state.editData}
              onUpdateEditData={(value) => updateEditData(value, "style")}
            ></PropsStyle>
          )}
        </div>
      );
    };
  },
});