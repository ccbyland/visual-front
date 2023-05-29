import { computed, defineComponent, inject, reactive, ref } from "vue";
import _ from "lodash";
import EditorWidget from "@/components/editor-widget";
import useFocus from "../../hooks/useFocus";
import "./index.scss";
import { events } from "@/utils/events";
import GlobalStyle from "@/utils/globalStyle";
import useCommand from "@/hooks/useCommand";
import useDefaultData from "@/hooks/useDefaultData";
import { randomStr } from "@/utils";
import useWidgetDragger from "@/hooks/useWidgetDragger";

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

    const widgetConfig = inject("widgetConfig");

    const { commands } = useCommand(data);
    const { mousedownCanvas, mousedownCanvasWidget } = useFocus(data);

    const canvasRef = ref(null);
    const gridLayoutRef = ref(null);
    const gridItemRef = ref([]);
    const forbidChildPointerEvents = ref(false);

    const setGridItemRef = (item) => {
      gridItemRef.value.push(item);
    };

    const gridItemOperated = () => {
      events.emit("dragend");
    };

    const addWidget = (widget) => {
      const defaultData = widget.defaultData;
      const { getProps, getQuery } = useDefaultData(widget);

      const newWidget = reactive({
        i: randomStr(8),
        x: 0,
        y: data.value.widgets.length * 2 * 5,
        w: defaultData.layout ? defaultData.layout.w : 6,
        h: defaultData.layout ? defaultData.layout.h : 6,
        key: widget.key,
        props: getProps("styles"),
        query: getQuery(),
        optionalConfig: {}
      });
      commands.addWidget(newWidget);
    };

    const { dragstartWidget, dragendWidget } = useWidgetDragger(
      canvasRef,
      data,
      gridLayoutRef,
      gridItemRef,
      forbidChildPointerEvents
    );

    return () => {
      console.info("[editor-canvas] render");

      const containerData = props.modelValue.container.props;
      const pageStyle = GlobalStyle.getPageStyle(containerData);
      const globalStyle = props.modelValue.container.props;
      const gridMarginArr = GlobalStyle.getGridMarginArr(containerData);

      const editorTool = (
        <div className="editor-tool">
          <div className="item">
            <div className="label">图表</div>
            <div class="options">
              {widgetConfig.widgetList.map((widget) => {
                return (
                  <div
                    class="node"
                    draggable
                    onDragstart={(e) => dragstartWidget(e, widget)}
                    onDragend={dragendWidget}
                    onClick={() => addWidget(widget)}
                  >
                    <img
                      className="icon"
                      src={require(`@/assets/images/canvas-module/${widget.key}.svg`)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );

      const pageClass = GlobalStyle.getPageClass(containerData);
      const pageLayout = GlobalStyle.getPageLayout(containerData);
      
      const editorCanvas = (
        <div
          id="canvas_content"
          ref={canvasRef}
          class={[
            pageClass,
            "editor-canvas",
            forbidChildPointerEvents.value ? "g-editor__forbid-pointer-events" : "",
          ]}
          style={{...pageStyle, ...pageLayout}}
          onMousedown={mousedownCanvas}
        >
          <grid-layout
            ref={gridLayoutRef}
            v-model:layout={data.value.widgets}
            col-num={12}
            row-height={20}
            is-draggable={true} // 是否可拖拽
            is-resizable={true} // 是否可设置大小
            vertical-compact={true} // 是否垂直紧凑布局
            margin={gridMarginArr}
            use-css-transforms={true}
          >
            {data.value.widgets.map((widget, widgetIndex) => {
              return (
                <grid-item
                  ref={setGridItemRef}
                  id={`grid-item__${widget.i}`}
                  x={widget.x}
                  y={widget.y}
                  w={widget.w}
                  h={widget.h}
                  i={widget.i}
                  onMoved={gridItemOperated}
                  onMousedown={(e) =>
                    mousedownCanvasWidget(e, widget, widgetIndex)
                  }
                >
                  <EditorWidget
                    v-model:widget={widget}
                    globalStyle={globalStyle}
                  ></EditorWidget>
                </grid-item>
              );
            })}
          </grid-layout>
        </div>
      );
      return (
        <div className="editor-main">
          {editorTool}
          {editorCanvas}
        </div>
      );
    };
  },
});
