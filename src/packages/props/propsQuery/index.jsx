import { computed, defineComponent, getCurrentInstance } from "vue";
import { Delete } from "@element-plus/icons-vue";
import "./index.scss";
import { VueDraggableNext } from "vue-draggable-next";
import { events } from "@/utils/events";
import { ElMessage } from "element-plus";
import { datasetExcuteByColumn } from "@/api/dataSet";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  props: {
    editData: { type: Object },
  },
  emits: ["updateEditData"],
  setup(props, ctx) {
    const { proxy } = getCurrentInstance();
    const queryEditData = computed(() => props.editData);
    const queryDataArea = computed(() => queryEditData.value.query.area);

    const updateQuery = () => {
      let unvalidQueryItem = getUnvalidQuery();
      if (unvalidQueryItem) {
        ElMessage.warning(`${unvalidQueryItem.label}缺少必填字段`);
        return false;
      }
      updateQueryData();
    };

    /**
     * 获取无效字段
     * @param {*} data
     * @returns
     */
    const getUnvalidQuery = (data) => {
      let queryAreaList = queryDataArea.value;
      if (data) {
        let widget = data.value.widgets[data.value.widgetSelectedIndex];
        queryAreaList = widget.query.area;
      }

      if (!queryAreaList.length) return;
      for (let item of queryAreaList) {
        if (item.rule && item.rule.required) {
          if (!item.value.length) {
            return item;
          }
        }
      }
      return false;
    };

    const updateQueryData = async () => {
      let res = null;
      const queryAreaList = queryEditData.value.query.area || [];
      const groupAreaList = queryAreaList[0]?.value ?? [];
      const countAreaList = queryAreaList[1]?.value ?? [];

      const groupList = groupAreaList.map((item) => ({
        key: item.key,
        condition: "group",
      }));
      const countList = countAreaList.map((item) => ({
        key: item.key,
        condition: "sum",
      }));
      const dimensions = [...groupList, ...countList];

      res = await datasetExcuteByColumn({
        id: queryEditData.value.optionalConfig.datasetId,
        dimensions: dimensions,
      });
      events.emit(`chart_data_change_${queryEditData.value.i}`, {
        chartData: {
          data: res,
        },
      });
    };

    // 删除数据
    const deleteQueryField = (queryItem, index) => {
      if (!queryItem.value.length) return;
      queryItem.value.splice(index, 1);
      updateQueryEditData();
    };

    const renderDraggableItem = (queryItemValue, index, queryItem) => {
      return (
        <div class="g-props-query__field-item">
          <div class="g-props-query__field-text">{queryItemValue.name}</div>
          <div class="g-props-query__field-tool">
            <el-icon
              title="删除"
              onClick={(e) => deleteQueryField(queryItem, index)}
            >
              <Delete />
            </el-icon>
          </div>
        </div>
      );
    };
    function unique(arr) {
      let arrSet = new Set(arr.map((i) => i.name));
      if (arrSet.size < arr.length) {
        // ElMessage.warning('已存在该对象')
      }
      const res = new Map();
      return arr.filter((arr) => !res.has(arr.name) && res.set(arr.name, 1));
    }
    const draggableChange = (queryItem) => {
      queryItem.value = unique(queryItem.value);
      // TODO 维度当前仅支持一个
      if (queryItem.rule.type === "dimension" && queryItem.value.length > 1) {
        queryItem.value = queryItem.value.slice(0, 1);
        ElMessage.warning("维度当前仅支持一个");
      }
      updateQueryEditData();
    };
    const updateQueryEditData = () => {
      ctx.emit("updateEditData", queryEditData.value);
    };
    const renderQueryField = (queryItem) => {
      return (
        <div class="g-props-query__field">
          <div class="g-props-query__field-bd">
            <div class="g-props-query__field-name">{queryItem.label}</div>
          </div>
          <div class="g-props-query__field-bd">
            <draggable
              class="g-props-query__field-draggable"
              v-model={queryItem.value}
              onChange={(e) => draggableChange(queryItem)}
              group={queryItem.rule.type}
            >
              {queryItem.value.map((item, index) => {
                return renderDraggableItem(item, index, queryItem);
              })}
            </draggable>
          </div>
        </div>
      );
    };

    return () => {
      const query = queryEditData.value.query;
      return (
        <div className="g-props__query">
          <div class="g-props-query__area-wrap">
            {query.area.map((queryItem, queryIndex) => {
              console.error("queryItem", queryItem);
              return renderQueryField(queryItem, queryIndex);
            })}
          </div>
          <div class="g-props-query__update-wrap">
            <div class="g-props-query__update" onClick={updateQuery}>
              更新
            </div>
          </div>
        </div>
      );
    };
  },
});
