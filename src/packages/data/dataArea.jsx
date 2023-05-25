import { defineComponent, onMounted, ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import "./dataArea.scss";

const columns = [
  { key: "日期", dimensionFlag: 1 },
  { key: "地区", dimensionFlag: 1 },
  { key: "产品类别", dimensionFlag: 1 },
  { key: "销售额", dimensionFlag: 2 },
  { key: "利润", dimensionFlag: 2 },
  { key: "销售数量", dimensionFlag: 2 },
];

export default defineComponent({
  props: {
    dataSetId: { type: String, default: "" },
  },
  components: {
    draggable: VueDraggableNext,
  },
  setup(props) {
    const dimensionList = ref([]);
    const measureList = ref([]);
    onMounted(() => {
      if (props.dataSetId) {
        dimensionList.value = columns
          .filter((item) => item.dimensionFlag === 1)
          .map((item) => ({
            ...item,
            name: item.key,
          }));
        measureList.value = columns
          .filter((item) => item.dimensionFlag === 2)
          .map((item) => ({
            ...item,
            name: item.key,
          }));
      }
    });

    const dimensionOption = { name: "dimension", pull: "clone", put: false };
    const measureOption = { name: "measure", pull: "clone", put: false };

    const renderItem = (item) => {
      return (
        <div class="g-props-area__field-item">
          <div class="g-props-area__field-text">{item.name}</div>
        </div>
      );
    };
    return () => {
      return (
        <div class="g-data-area">
          <div class="g-data-area__dimension-wrap">
            <div class="g-data-area__title">维度</div>
            <div class="g-data-area__scroll">
              <draggable v-model={dimensionList.value} group={dimensionOption}>
                {dimensionList.value.map((item) => {
                  return renderItem(item);
                })}
              </draggable>
            </div>
          </div>
          <div class="g-data-area__measure-wrap">
            <div class="g-data-area__title">度量</div>
            <div class="g-data-area__scroll">
              <draggable v-model={measureList.value} group={measureOption}>
                {measureList.value.map((item) => {
                  return renderItem(item);
                })}
              </draggable>
            </div>
          </div>
        </div>
      );
    };
  },
});
