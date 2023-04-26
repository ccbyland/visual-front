import { computed, defineComponent } from "vue";
import "./index.scss";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    widget: { type: Object },
  },
  emits: ["update:widget"],
  setup(props, ctx) {
    const store = useStore();
    const editorWidgetConfig = store.state.editorWidgetConfig;

    const widgetData = computed({
      get: () => {
        return props.widget;
      },
      set: (val) => {
        ctx.emit("update:widget", val);
      },
    });

    return () => {

      let widget = null;
      let renderWidget = null;
      const chartStyle = widgetData.value.props
      const chartQuery =  widgetData.value.query
  
      if (widgetData.value.key) {
        widget = editorWidgetConfig.widgetMap[widgetData.value.key];
        renderWidget = widget.render({
          id: widgetData.value.i,
          key: widgetData.value.key,
          props: chartStyle,
          query: chartQuery
        });
      }

      return (
        <div
          class={[
            "g-card__widget-wrap",
            widgetData.value.focus ? "selected" : "",
          ]}
        >
          {renderWidget}
        </div>
      );
    };
  },
});
