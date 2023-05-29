import { computed, defineComponent } from "vue";
import _ from "lodash";
import EditorHeader from "@/components/editor-header";
import EditorMain from "@/components/editor-main";
import EditorOperator from "@/components/editor-operator";
import useCommand from "@/hooks/useCommand";
import EditorGrid from "@/components/editor-grid";
import "./index.scss";
import useFocus from "@/hooks/useFocus";

export default defineComponent({
  props: {
    modelValue: { type: Object },
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const data = computed({
      get() {
        console.error('props.modelValue', props.modelValue)
        return props.modelValue;
      },
      set(newValue) {
        ctx.emit("update:modelValue", _.cloneDeep(newValue));
      },
    });
    const { commands } = useCommand(data);
    const { lastSelectWidget } = useFocus(data);

    return () => {
      console.info("[editor] render");

      return (
        <div className="g-editor">
          <div className="g-editor__header">
            <EditorHeader v-model={data.value}></EditorHeader>
          </div>
          <div className="g-editor__main">
            <div className="g-editor__main-left">
              {/* <EditorGrid v-model={props.modelValue}></EditorGrid> */}
              <EditorMain v-model={data.value}></EditorMain>
            </div>
            <div className="g-editor__main-right">
              <EditorOperator
                widget={lastSelectWidget.value}
                data={data.value}
                updateCanvas={commands.updateCanvas}
                updateWidget={commands.updateWidget}
              ></EditorOperator>
            </div>
          </div>
        </div>
      );
    };
  },
});
