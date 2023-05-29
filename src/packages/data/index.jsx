import { computed, defineComponent, ref } from "vue";
import DataSet from "./dataSet";
import DataArea from "./dataArea";
import "./index.scss";

export default defineComponent({
  props: {
    editData: { type: Object },
  },
  setup(props) {
    const propsEditData = computed({
      get: () => {
        return props.editData;
      },
      set: () => {
        return true;
      },
    });
    const dataSetId = computed(() => {
      return propsEditData.value?.optionalConfig?.datasetId;
    });
    const handleDataSetChange = (datasetId) => {
      propsEditData.value.optionalConfig.datasetId = datasetId;
    };
    return () => {
      return (
        <div class="g-data-index">
          <DataSet
            id={propsEditData.value.i}
            dataSetId={dataSetId.value}
            onChange={handleDataSetChange}
          ></DataSet>
          <DataArea
            dataSetId={dataSetId.value}
            key={dataSetId.value}
          ></DataArea>
        </div>
      );
    };
  },
});
