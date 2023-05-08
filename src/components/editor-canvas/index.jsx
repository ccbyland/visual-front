import { computed, defineComponent, watch } from "vue";
import _ from "lodash";
import EditorGrid from "@/components/editor-grid";
import EditorWidget from "@/components/editor-widget";
import useFocus from "../../hooks/useFocus";
import "./index.scss";

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
    const { mousedownCanvas, mousedownCanvasWidget } = useFocus(data);

    return () => {
      console.error("[editor-canvas] render");

      return (
        <>
          <div className="editor-canvas" onMousedown={mousedownCanvas}>
            <grid-layout
              v-model:layout={data.value.widgets}
              col-num={12}
              row-height={20}
              is-draggable={true} // 是否可拖拽
              is-resizable={true} // 是否可设置大小
              vertical-compact={true} // 是否垂直紧凑布局
              margin={[10, 10]}
              use-css-transforms={true}
            >
              {data.value.widgets.map((widget, widgetIndex) => {
                return (
                  <grid-item
                    id={`grid-item__${widget.i}`}
                    x={widget.x}
                    y={widget.y}
                    w={widget.w}
                    h={widget.h}
                    i={widget.i}
                    onMousedown={(e) =>
                      mousedownCanvasWidget(e, widget, widgetIndex)
                    }
                  >
                    <EditorWidget v-model:widget={widget}></EditorWidget>
                  </grid-item>
                );
              })}
            </grid-layout>
          </div>
          {/* <EditorGrid></EditorGrid> */}
        </>
      );
    };
  },
});
