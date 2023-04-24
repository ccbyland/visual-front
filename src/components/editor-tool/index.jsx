import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { randomStr } from "@/utils";
import useCommand from "../../hooks/useCommand.js";
import useWidgetDraggable from '../../hooks/useWidgetDraggable.js'
import "./index.scss";

export default defineComponent({
  setup() {
    return () => {

      const canvasRef = ref(null)

      const store = useStore();
      const widgetConfig = store.state.widgetConfig;
      const editorWidget = store.state.editorWidget;

      const { commands } = useCommand(editorWidget);

      const addWidget = (widget) => {
        const defaultData = widget.defaultData;
        const newWidget = reactive({
          i: randomStr(8),
          x: 0,
          y: 0,
          w: defaultData.layout ? defaultData.layout.w : 6,
          h: defaultData.layout ? defaultData.layout.h : 6,
          key: widget.key,
        });
        commands.addWidget(newWidget);
      };

      const { dragStartWidget, dragEndWidget} = useWidgetDraggable(canvasRef, editorWidget)

      return (
        <div className="editor-tool">
          <div className="item">
            <div className="label">图表</div>
            <div class="options">
              {widgetConfig.widgetList.map((widget) => {
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
