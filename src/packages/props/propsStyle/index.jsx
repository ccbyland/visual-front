import { computed, defineComponent, getCurrentInstance, ref } from "vue";
import "./index.scss";

export default defineComponent({
  props: {
    setters: { type: Array },
    editData: { type: Object },
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const currEditData = computed(() => props.editData);

    // 当前激活的面板
    const styleCollapseActive = ref([0, 1, 2]);

    const renderSetters = (setterItem, setterIndex) => {
      return (
        <div>
          {setterIndex}-{setterItem.title}
          {setterItem.content.map((item) => {
            return (
              <>
                {item.setters.map((i) => {
                  return <div>{i.label}</div>;
                })}
              </>
            );
          })}
        </div>
      );
    };
    const setterComponents = props.setters.map((setterItem, setterIndex) => {
      return (
        <el-collpse-item title={setterItem.title} name={setterIndex}>
          {styleCollapseActive.value.indexOf(setterIndex) > -1 &&
            renderSetters(setterItem, setterIndex)}
        </el-collpse-item>
      );
    });

    return () => {
      return (
        <div className="g-props__style">
          <el-collapse v-model={styleCollapseActive.value}>
            {setterComponents}
          </el-collapse>
        </div>
      );
    };
  },
});
