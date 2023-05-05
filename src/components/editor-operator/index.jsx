import { computed, defineComponent, reactive, watch } from "vue";
import PropsStyle from "@/packages/props/propsStyle";
import "./index.scss";
import { useStore } from "vuex";
import useFocus from "@/hooks/useFocus";
import { events } from "@/utils/events";

export default defineComponent({
  props: {
    updateCanvas: { type: Function },
    updateWidget: { type: Function },
  },
  setup(props) {
    const store = useStore();

    const state = reactive({
      editData: {},
    });

    const editorwidgetConfig = computed(() => store.state.editorWidgetConfig);
    const editorWidgetData = computed(() => store.state.editorWidgetData);
    const { lastSelectWidget } = useFocus(editorWidgetData);

    watch(
      [lastSelectWidget, editorWidgetData],
      ([newLastSelectWidget, newEditorData]) => {
        if (!newLastSelectWidget) {
          state.editData = newEditorData.container;
        } else {
          state.editData = newLastSelectWidget;
        }
      },
      { immediate: true }
    );

    const update = () => {
      // 更新容器
      if (!props.widget) {
        props.updateCanvas({
          ...editorWidgetData.value,
          container: state.editData,
        });
        // 更新小部件
      } else {
        props.updateWidget();
      }
    };

    const updateEditData = (newEditData, type) => {
      state.editData = newEditData;
      // 更新state数据
      update();
      // 更新视图
      if (type === "page") {
        events.emit("global_page_change");
      } else {
        events.emit(`chart_data_change_${newEditData.i}`);
      }
    };

    return () => {
      let operatorContent = null;

      if (!lastSelectWidget.value) {
        operatorContent = (
          <PropsStyle
            setters={editorwidgetConfig.value.globalConfig.styles}
            editData={state.editData}
            onUpdateEditData={(value) => updateEditData(value, "style")}
          ></PropsStyle>
        );
      } else {
        let styleSetters = [];
        let widget =
          editorwidgetConfig.value.widgetMap[lastSelectWidget.value.key];
        if (widget && widget.props && widget.props.styles) {
          styleSetters = widget.props.styles;
        }
        operatorContent = (
          <>
            <PropsStyle
              setters={styleSetters}
              editData={state.editData}
              onUpdateEditData={(value) => updateEditData(value, "style")}
            ></PropsStyle>
          </>
        );
      }
      return operatorContent;
    };
  },
});
