import { computed, defineComponent, reactive, watch } from "vue";
import PropsQuery from "@/packages/props/propsQuery";
import "./index.scss";
import { useStore } from "vuex";
import useFocus from "@/hooks/useFocus";

export default defineComponent({
  props: {
    widget: { type: Object }, // 当前选中的元素
  },
  setup() {
    const store = useStore();

    const state = reactive({
      editData: {},
    });

    const editorData = computed(() => store.state.editorData);

    const { lastSelectWidget } = useFocus(editorData);

    watch(
      [lastSelectWidget, editorData],
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
    return () => {
      return (
        <div className="editor-operator">
          <PropsQuery editData={state.editData}></PropsQuery>
        </div>
      );
    };
  },
});
