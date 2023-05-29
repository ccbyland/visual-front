import { defineComponent, ref } from "vue";
import "./dataSet.scss";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    dataSetId: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  setup(props, ctx) {
    const store = useStore();
    const options = ref([{ label: "销售报表数据（测试）", value: "1" }]);

    const change = (datasetId) => {
      ctx.emit("change", datasetId);
    };
    return () => {
      return (
        <div class="g-data-set">
          <el-select
            v-model={props.dataSetId}
            placeholder="请选择数据集"
            size="small"
            popper-append-to-body={false}
            onChange={change}
          >
            {options.value.map((item) => {
              return (
                <el-option
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </el-select>
        </div>
      );
    };
  },
});
