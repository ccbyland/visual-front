import { computed, defineComponent, getCurrentInstance } from "vue";
import { Delete } from "@element-plus/icons-vue";
import "./index.scss";
import { VueDraggableNext } from "vue-draggable-next";
import { events } from "@/utils/events";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  props: {
    editData: { type: Object },
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const queryEditData = computed(() => props.editData);

    const updateQuery = () => {
      updateQueryData();
    };

    const updateQueryData = async () => {
      let res = await proxy.$api.getChartData();
      events.emit(`chart_data_change_${queryEditData.value.i}`, {
        chartData: res,
      });
    };

    const renderDraggableItem = (item) => {
      return (
        <div class="g-props-query__field-item">
          <div class="g-props-query__field-text">{item.title}</div>
          <div class="g-props-query__field-tool">
            <el-icon title="删除">
              <Delete />
            </el-icon>
          </div>
        </div>
      );
    };

    const renderQueryField = (queryItem) => {
      queryItem.value = [{ title: 111 }, { title: 222 }];
      const ruleType = queryItem.rule.type;
      return (
        <div class="g-props-query__field">
          <div class="g-props-query__field-bd">
            <div class="g-props-query__field-name">{queryItem.label}</div>
          </div>
          <div class="g-props-query__field-bd">
            <draggable
              class="g-props-query__field-draggable"
              v-model={queryItem}
              group={ruleType}
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
              return renderQueryField(queryItem);
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
