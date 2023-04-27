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
    const styleCollapseContentActive = ref(0);

    // 遍历三级设置器（单位：模块项）
    const renderSetter = (setter) => {
      return (
        currEditData.value.props && (
          <g-setter-layout
            setter={setter}
            v-model:value={currEditData.value.props[setter.name]}
            currEditData={currEditData.value.props}
          ></g-setter-layout>
        )
      );
    };

    // 遍历二级设置器（单位：模块面板）
    const renderSetters = (setterItem, setterIndex) => {
      if (!setterItem.content.length) {
        return;
      }
      if (setterItem.layout === "collapse") {
        return setterItem.content.map((item, index) => {
          return (
            <el-collapse
              className="g-collapse__sub"
              v-model={styleCollapseContentActive.value}
            >
              <el-collapse-item title={item.title} name={index}>
                {item.setters.length &&
                  item.setters.map((setter) => {
                    return renderSetter(setter);
                  })}
              </el-collapse-item>
            </el-collapse>
          );
        });
      } else {
        return setterItem.content.map((item, index) => {
          return (
            item.setters.length &&
            item.setters.map((setter) => {
              return renderSetter(setter);
            })
          );
        });
      }
    };

    // 遍历一级设置器（单位：板块面板）
    const settersComponents = props.setters.map((setterItem, setterIndex) => {
      return (
        <el-collapse-item title={setterItem.title} name={setterIndex}>
          {styleCollapseActive.value.indexOf(setterIndex) >= 0 &&
            renderSetters(setterItem, setterIndex)}
        </el-collapse-item>
      );
    });

    return () => {
      return (
        <el-collapse
          className="g-props-style__collapse"
          v-model={styleCollapseActive.value}
        >
          {settersComponents}
        </el-collapse>
      );
    };
  },
});
