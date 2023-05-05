import { defineComponent } from "vue";
import EditorHeader from "@/components/editor-header";
import EditorTool from "@/components/editor-tool";
import EditorCanvas from "@/components/editor-canvas";
import EditorOperator from "@/components/editor-operator";
import GlobalStyle from "@/utils/globalStyle.js";
import "./index.scss";
import { useStore } from "vuex";
import useCommand from "@/hooks/useCommand";

export default defineComponent({
  setup() {
    const store = useStore();
    const editorWidgetData = store.state.editorWidgetData;
    const { commands } = useCommand(editorWidgetData);

    return () => {
      const containerData = editorWidgetData.container.props;
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
              <EditorTool></EditorTool>
            </div>
            <div className="g-editor__main-center">
              <div className="g-editor__main-center-page" style={globalStyle}>
                <EditorCanvas></EditorCanvas>
              </div>
            </div>
            <div className="g-editor__main-right">
              <EditorOperator
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
