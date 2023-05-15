import { computed, defineComponent, inject } from "vue";
import "./index.scss";

export default defineComponent({
  props: {
    widget: { type: Object },
    globalStyle: { type: Object },
  },
  emits: ["update:widget"],
  setup(props, ctx) {
    const widgetData = computed({
      get: () => {
        return props.widget;
      },
      set: (val) => {
        ctx.emit("update:widget", val);
      },
    });

    const widgetConfig = inject("widgetConfig");

    return () => {
      console.info("[editor-widget] render");

      let widget = null;
      let renderWidget = null;
      const chartStyle = widgetData.value.props;
      const chartQuery = widgetData.value.query;

      if (widgetData.value.key) {
        widget = widgetConfig.widgetMap[widgetData.value.key];
        renderWidget = widget.render({
          id: widgetData.value.i,
          key: widgetData.value.key,
          props: chartStyle,
          query: chartQuery,
          globalStyle: props.globalStyle,
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
