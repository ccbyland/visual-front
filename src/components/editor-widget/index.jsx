import { defineComponent } from "vue";
import draggable from "vuedraggable";
import "./index.scss";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    return () => {
      const store = useStore();
      const widgetConfig = store.state.widgetConfig;
      return (
        <div className="editor-widget">
          <div className="item">
            <div className="label">图表</div>
            <div class="options">
              {widgetConfig.widgetList.map((widget) => {
                return (
                  <div className="node">
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
