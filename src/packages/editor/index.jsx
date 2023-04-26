import { defineComponent } from "vue";
import EditorHeader from "@/components/editor-header";
import EditorTool from "@/components/editor-tool";
import EditorCanvas from "@/components/editor-canvas";
import EditorGrid from "@/components/editor-grid";
import EditorOperator from "@/components/editor-operator";
import GlobalStyle from '@/utils/globalStyle.js'
import "./index.scss";
import { useStore } from "vuex";

export default defineComponent({
  setup() {

    const store = useStore();
    const editorWidgetData = store.state.editorWidgetData.container.props;
    const pageStyle = GlobalStyle.getPageStyle(editorWidgetData)
    const pageLayout = GlobalStyle.getPageLayout(editorWidgetData)
    return () => {
      return (
        <div className="g-editor" style={pageStyle}>
          <div className="g-editor__header">
            <EditorHeader></EditorHeader>
          </div>
          <div className="g-editor__main">
            <div className="g-editor__main-left">
              <EditorTool></EditorTool>
            </div>
            <div className="g-editor__main-center">
              <EditorCanvas></EditorCanvas>
              <EditorGrid></EditorGrid>
            </div>
            <div className="g-editor__main-right">
              <EditorOperator></EditorOperator>
            </div>
          </div>
        </div>
      );
    };
  },
});
