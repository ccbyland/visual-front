import { computed, defineComponent, getCurrentInstance } from "vue";
import "./index.scss";
import { events } from "@/utils/events";

export default defineComponent({
  setup(props) {
    const { proxy } = getCurrentInstance();
    const currEditData = computed(() => props.editData);
    const updateQuery = () => {
      updateQueryData();
    };

    const updateQueryData = async () => {
      let res = await proxy.$api.getChartData();
      events.emit(`chart_data_change_${currEditData.value.i}`, {
        chartData: res,
      });
    };

    return () => {
      return (
        <div className="g-props__query">
          <div className="g-props__query_btn" onClick={updateQuery}>
            更新
          </div>
        </div>
      );
    };
  },
});
