import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "g-setter-layout",
  props: {
    value: { type: String },
    panelType: { type: String },
    setter: { type: Object },
    currEditData: { type: Object },
  },
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const valueData = computed({
      get: () => {
        return props.value;
      },
      set: (val) => {
        emit("update:value", val);
      },
    });

    const textChange = () => {
      emit("change");
    };

    const getSetterLabel = () => {
      return <div className="g-label">{props.setter.label}</div>;
    };
    const getMapContent = (setter) => {
      if (setter) {
        if (setterComponentMap[setter.type]) {
          return setterComponentMap[setter.type](setter, valueData);
        }
      } else {
        if (setterComponentMap[props.setter.type]) {
          return setterComponentMap[props.setter.type](props, valueData);
        }
      }
      return null;
    };
    const setterComponentMap = {
      checkbox: (props, valueData) => {
        return (
          <div className="g-checkbox">
            <el-checkbox
              size="small"
              v-model={valueData.value}
              onChange={textChange}
            />
          </div>
        );
      },
      radio: (props, valueData) => {
        return (
          <div className="g-radio">
            <el-radio-group onChange={textChange} v-model={valueData.value}>
              {props.setter.options.map((option) => {
                return (
                  <el-radio size="small" label={option.value}>
                    {option.label}
                  </el-radio>
                );
              })}
            </el-radio-group>
          </div>
        );
      },
      select: (props, valueData) => {
        return (
          <div className="g-select">
            <el-select
              size="small"
              v-model={valueData.value}
              onChange={textChange}
            >
              {props.setter.options.map((option) => {
                return (
                  <el-option
                    label={option.label}
                    value={option.value}
                  ></el-option>
                );
              })}
            </el-select>
          </div>
        );
      },
      inputNumber: (props, valueData) => {
        return (
          <div className="g-input-number">
            <el-input-number
              v-model={valueData.value[props.name]}
              min={props.min}
              max={props.max}
              onChange={textChange}
              controls-position="right"
              size="small"
            />
          </div>
        );
      },
      input: (props, valueData) => {
        return (
          <div className="g-input">
            <el-input
              v-model={valueData.value[props.name]}
              onChange={textChange}
              size="small"
            />
          </div>
        );
      },
      fontColorPicker: (props, valueData) => {
        return (
          <div className="g-color-picker font-picker">
            <el-color-picker
              v-model={valueData.value[props.name]}
              size="small"
              onChange={textChange}
            />
          </div>
        );
      },
      backgroundColorPicker: (props, valueData) => {
        return (
          <div className="g-color-picker background-picker">
            <el-color-picker
              v-model={valueData.value[props.name]}
              size="small"
              onChange={textChange}
            />
          </div>
        );
      },
      textAlign: (props, valueData) => {
        const a = ref("#fff");
        // return (
        //   <div className="g-color-picker setter-item-node">
        //     <el-color-picker
        //       v-model={valueData.value[props.name]}
        //       onChange={textChange}
        //     />
        //   </div>
        // );
        return (
          <div className="g-text-align">
            <div className="node left"></div>
            <div className="node center"></div>
          </div>
        );
      },
      fontWeight: (props, valueData) => {
        const a = ref("#fff");
        // return (
        //   <div className="g-color-picker setter-item-node">
        //     <el-color-picker
        //       v-model={valueData.value[props.name]}
        //       onChange={textChange}
        //     />
        //   </div>
        // );
        return (
          <div className="g-font-weight">
            <div className="node bold"></div>
            <div className="node xt"></div>
          </div>
        );
      },
    };

    let getSetterContent = () => {
      if (Array.isArray(props.setter.children)) {
        return props.setter.children.map((setter) => {
          return getMapContent(setter);
        });
      } else {
        return getMapContent();
      }
    };

    return () => {
      let el = null;
      if (props.panelType === "global") {
        el = (
          <>
            <el-col span={6}>{getSetterLabel()}</el-col>
            <el-col span={18}>{getSetterContent()}</el-col>
          </>
        );
      } else {
        if (props.setter.type === "checkbox") {
          el = (
            <>
              <el-col span={2}>{getSetterContent()}</el-col>
              <el-col span={22}>{getSetterLabel()}</el-col>
            </>
          );
        } else {
          el = (
            <>
              <el-col span={3}></el-col>
              <el-col span={4}>{getSetterLabel()}</el-col>
              <el-col span={17}>{getSetterContent()}</el-col>
            </>
          );
        }
      }
      return <el-row className="g-row">{el}</el-row>;
    };
  },
});
