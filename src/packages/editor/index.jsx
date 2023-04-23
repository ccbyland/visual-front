import { defineComponent } from "vue";
import EditorHeader from "@/components/editor-header";
import EditorTool from "@/components/editor-tool";
import EditorCanvas from "@/components/editor-canvas";
import EditorGrid from "@/components/editor-grid";
import EditorSetter from "@/components/editor-setter";
import "./index.scss";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div className="g-editor">
          <div className="g-editor__header">
            <EditorHeader></EditorHeader>
          </div>
          <div className="g-editor__main">
            <div className="g-editor__main-left">
              <div className="g-editor__main-left-top">
                <EditorTool></EditorTool>
              </div>
              <div className="g-editor__main-left-bottom">
                <EditorCanvas></EditorCanvas>
                <EditorGrid></EditorGrid>
              </div>
            </div>
            <div className="g-editor__main-right">
              <EditorSetter></EditorSetter>
            </div>
          </div>
        </div>
      );
    };
  },
});
