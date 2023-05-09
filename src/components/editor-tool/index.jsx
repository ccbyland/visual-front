import { computed, defineComponent, inject, reactive, ref } from "vue";
import _ from "lodash";
import { randomStr } from "@/utils";
import useCommand from "../../hooks/useCommand.js";
// import useWidgetDraggable from "../../hooks/useWidgetDraggable.js";
import "./index.scss";
import useDefaultData from "@/hooks/useDefaultData.js";

export default defineComponent({
  props: {
    modelValue: { type: Object },
  },
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

    return () => {
      console.info("[editor-tool] render");

      // const canvasRef = ref(null);
      const { commands } = useCommand(data);

      const addWidget = (widget) => {
        const defaultData = widget.defaultData;
        const { getProps, getQuery } = useDefaultData(widget);

        const newWidget = reactive({
          i: randomStr(8),
          x: 0,
          y: 0,
          w: defaultData.layout ? defaultData.layout.w : 6,
          h: defaultData.layout ? defaultData.layout.h : 6,
          key: widget.key,
          props: getProps("styles"),
          query: getQuery(),
        });
        commands.addWidget(newWidget);
      };

      // const { dragStartWidget, dragEndWidget } = useWidgetDraggable(
      //   canvasRef,
      //   editorWidgetData
      // );

      return (
        <div className="editor-tool">
          <div className="item">
            <div className="label">图表</div>
            <div class="options">
              {widgetConfig.widgetList.map((widget) => {
                return (
                  <div
                    draggable
                    // onDragStart={(e) => dragStartWidget(e, widget)}
                    // onDragEnd={dragEndWidget}
                    className="node"
                    onClick={() => addWidget(widget)}
                  >
                    <img
                      className="icon"
                      src={require(`@/assets/images/canvas-module/${widget.key}.png`)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    };
  },
});
