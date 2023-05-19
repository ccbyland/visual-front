import { defineComponent, ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import "./index.scss";

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const dimensionList = ref([{ title: 555 }]);
    const measureList = ref([{ title: 666 }, { title: 777 }]);
    const dimensionOption = { name: "dimension", pull: "clone", put: false };
    const measureOption = { name: "measure", pull: "clone", put: false };

    const renderItem = (item) => {
      return (
        <div class="g-props-area__field-item">
          <div class="g-props-area__field-text">{item.title}</div>
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
