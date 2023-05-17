import { computed, defineComponent, ref } from "vue";
import "./index.scss";

export default defineComponent({
  props: {
    setters: { type: Array },
    panelType: { type: String },
    editData: { type: Object },
  },
  setup(props, ctx) {
    const propsEditData = computed(() => props.editData);

    // 当前激活的面板
    const styleCollapseActive = ref([0, 1, 2, 3]);
    const styleCollapseContentActive = ref([0, 1, 2, 3]);

    const editDataChange = () => {
      ctx.emit("updateEditData", propsEditData.value);
    };

    // 遍历三级设置器（单位：模块项）
    const renderSetter = (setter) => {
      return (
        propsEditData.value.props && (
          <g-setter-layout
            setter={setter}
            panelType={props.panelType}
            v-model:value={propsEditData.value.props[setter.name]}
            propsEditData={propsEditData.value.props}
            onChange={editDataChange}
          ></g-setter-layout>
        )
      );
    };

    // 遍历二级设置器（单位：模块面板）
    const renderSetters = (setterItem) => {
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
        return setterItem.content.map((item) => {
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
          className="g-props-style__collapse g-collapse"
          v-model={styleCollapseActive.value}
        >
          {settersComponents}
        </el-collapse>
      );
    };
  },
});
