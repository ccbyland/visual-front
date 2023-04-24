import { defineComponent, reactive, watch } from "vue";
import PropsQuery from "@/packages/props/propsQuery";
import "./index.scss";

export default defineComponent({
  props: {
    widget: { type: Object }, // 当前选中的元素
  },
  setup() {
    const state = reactive({
      editData: {},
    });
    watch()
    return () => {
      return (
        <div className="editor-operator">
          <PropsQuery editData={state.editData}></PropsQuery>
        </div>
      );
    };
  },
});
