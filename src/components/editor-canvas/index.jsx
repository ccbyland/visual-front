import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import EditorWidget from "@/components/editor-widget";
import "./index.scss";

export default defineComponent({
  setup() {
    const store = useStore();
    const editorWidget = computed(() => store.state.editorWidget);

    return () => {
      return (
        <div className="editor-canvas">
          <grid-layout
            v-model:layout={editorWidget.value.widgets}
            col-num={12}
            row-height={20}
            is-draggable={true}
            is-resizable={true}
            is-mirrored={false}
            vertical-compact={true}
            margin={[10, 10]}
            use-css-transforms={true}
          >
            {editorWidget.value.widgets.map((item) => {
              return (
                <grid-item
                  x={item.x}
                  y={item.y}
                  w={item.w}
                  h={item.h}
                  i={item.i}
                >
                  <EditorWidget v-model:widget={item}></EditorWidget>
                </grid-item>
              );
            })}
          </grid-layout>
        </div>
      );
    };
  },
});
