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
    const widgetConfig = store.state.widgetConfig;

    const widgetData = computed({
      get: () => {
        return props.widget;
      },
      set: (val) => {
        ctx.emit("update:widget", val);
      },
    });

    let widget = null;
    let renderWidget = null;
    if (widgetData.value.key) {
      widget = widgetConfig.widgetMap[widgetData.value.key];
      renderWidget = widget.render({ props: {} });
    }

    return () => {
      return <>{renderWidget}</>;
    };
  },
});
