import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { randomStr } from "@/utils";
import useCommand from "../../hooks/useCommand.js";
import useWidgetDraggable from "../../hooks/useWidgetDraggable.js";
import "./index.scss";
import useDefaultData from "@/hooks/useDefaultData.js";

export default defineComponent({
  setup() {
    return () => {
      const canvasRef = ref(null);

      const store = useStore();
      const editorWidgetConfig = store.state.editorWidgetConfig;
      const editorWidgetData = store.state.editorWidgetData;

      const { commands } = useCommand(editorWidgetData);

      const addWidget = (widget) => {
        const defaultData = widget.defaultData;
        const { getQuery } = useDefaultData(widget);
        const newWidget = reactive({
          i: randomStr(8),
          x: 0,
          y: 0,
          w: defaultData.layout ? defaultData.layout.w : 6,
          h: defaultData.layout ? defaultData.layout.h : 6,
          key: widget.key,
          props: {},
          query: getQuery(),
        });
        commands.addWidget(newWidget);
      };

      const { dragStartWidget, dragEndWidget } = useWidgetDraggable(
        canvasRef,
        editorWidgetData
      );

      return (
        <div className="editor-tool">
          <div className="item">
            <div className="label">图表</div>
            <div class="options">
              {editorWidgetConfig.widgetList.map((widget) => {
                return (
                  <div
                    draggable
                    onDragStart={(e) => dragStartWidget(e, widget)}
                    onDragEnd={dragEndWidget}
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
