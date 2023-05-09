import { computed, defineComponent } from "vue";
import _ from "lodash";
import EditorHeader from "@/components/editor-header";
import EditorTool from "@/components/editor-tool";
import EditorCanvas from "@/components/editor-canvas";
import EditorOperator from "@/components/editor-operator";
import useCommand from "@/hooks/useCommand";
import GlobalStyle from "@/utils/globalStyle.js";
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

      const containerData = props.modelValue.container.props;
      const pageStyle = GlobalStyle.getPageStyle(containerData);
      const pageLayout = GlobalStyle.getPageLayout(containerData);

      const globalStyle = { ...pageStyle, ...pageLayout };
      return (
        <div className="g-editor">
          <div className="g-editor__header">
            <EditorHeader></EditorHeader>
          </div>
          <div className="g-editor__main">
            <div className="g-editor__main-left">
              <EditorTool v-model={data.value}></EditorTool>
            </div>
            <div className="g-editor__main-center">
              <div className="g-editor__main-center-page" style={globalStyle}>
                <EditorCanvas v-model={data.value}></EditorCanvas>
              </div>
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
