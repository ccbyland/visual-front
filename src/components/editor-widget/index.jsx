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

    // const widgetData = computed({
    //   get: () => {
    //     return props.widget;
    //   },
    //   set: (val) => {
    //     ctx.emit("update:widget", val);
    //   },
    // });

    return () => {

      console.error('[editor-widget] render')

      let widget = null;
      let renderWidget = null;
      const chartStyle = props.widget.props
      const chartQuery =  props.widget.query

      if (props.widget.key) {
        widget = editorWidgetConfig.widgetMap[props.widget.key];
        renderWidget = widget.render({
          id: props.widget.i,
          key: props.widget.key,
          props: chartStyle,
          query: chartQuery
        });
      }

      return (
        <div
          class={[
            "g-card__widget-wrap",
            props.widget.focus ? "selected" : "",
          ]}
        >
          {renderWidget}-{chartStyle}
        </div>
      );
    };
  },
});
