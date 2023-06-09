import { defineComponent, inject, reactive, ref, watch } from "vue";
import _ from "lodash";
import PropsStyle from "@/packages/props/propsStyle";
import propsQuery from "@/packages/props/propsQuery";
import dataSetPanel from "@/packages/data/index";
import "./index.scss";
import { events } from "@/utils/events";

export default defineComponent({
  props: {
    data: { type: Object },
    widget: { type: Object },
    updateCanvas: { type: Function },
    updateWidget: { type: Function },
  },
  setup(props) {
    const widgetConfig = inject("widgetConfig");
    const activeName = ref("0");

    const state = reactive({
      editData: {},
    });

    const update = () => {
      // 更新容器
      if (!props.widget) {
        props.updateCanvas({
          ...props.data,
          container: state.editData,
        });
        // 更新小部件
      } else {
        props.updateWidget({
          newWidget: state.editData,
          oldWidget: props.widget,
        });
      }
    };

    watch(
      () => [props.widget, props.data],
      () => {
        if (!props.widget) {
          state.editData = _.cloneDeep(props.data.container);
        } else {
          state.editData = _.cloneDeep(props.widget);
        }
      },
      { immediate: true }
    );

    const updateEditData = (newEditData, type) => {
      state.editData = newEditData;
      // 更新state数据
      update();

      if (type !== "field") {
        // 更新视图
        if (type === "page") {
          events.emit("global_page_change");
        } else {
          events.emit(`chart_data_change_${newEditData.i}`);
        }
      }
    };

    return () => {
      let operatorContent = null;

      if (!props.widget) {
        operatorContent = (
          <div class="g-editor-operator__props">
            <PropsStyle
              panelType="global"
              setters={widgetConfig.globalConfig.styles}
              editData={state.editData}
              onUpdateEditData={(value) => updateEditData(value, "style")}
            ></PropsStyle>
          </div>
        );
      } else {
        let styleSetters = [];
        let widget = widgetConfig.widgetMap[props.widget.key];
        if (widget && widget.props && widget.props.styles) {
          styleSetters = widget.props.styles;
        }

        operatorContent = (
          <el-tabs v-model={activeName.value} class="g-operator_tabs">
            <el-tab-pane label="样式" name="0">
              <PropsStyle
                panelType="widget"
                setters={styleSetters}
                editData={state.editData}
                onUpdateEditData={(value) => updateEditData(value, "style")}
              ></PropsStyle>
            </el-tab-pane>
            <el-tab-pane label="字段" name="1">
              <div class="g-editor-operator__props">
                <div class="g-editor-operator__query">
                  <propsQuery
                    editData={state.editData}
                    onUpdateEditData={(value) => updateEditData(value, "field")}
                  ></propsQuery>
                </div>
                <div class="g-editor-operator__data">
                  <dataSetPanel editData={state.editData}></dataSetPanel>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        );
      }

      return <div className="editor-operator">{operatorContent}</div>;
    };
  },
});
