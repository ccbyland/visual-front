import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "g-setter-layout",
  props: {
    value: { type: String },
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
        // return (
        //   <el-checkbox-group
        //     className="g-checkbox"
        //     v-model={valueData.value}
        //     onChange={textChange}
        //   >
        //     {props.setter.options.map((option) => {
        //       return (
        //         <el-checkbox label={option.value}>{option.label}</el-checkbox>
        //       );
        //     })}
        //   </el-checkbox-group>
        // );
        return <el-checkbox size="small" />;
      },
      radio: (props, valueData) => {
        // return (
        //   <el-radio-group
        //     className="g-radio"
        //     v-model={valueData.value}
        //     onChange={textChange}
        //   >
        //     {props.setter.options.map((option) => {
        //       return <el-radio label={option.value}>{option.label}</el-radio>;
        //     })}
        //   </el-radio-group>
        // );
        return (
          <el-radio-group>
            <el-radio size="small">Option 1</el-radio>
            <el-radio size="small">Option 2</el-radio>
          </el-radio-group>
        );
      },
      select: (props, valueData) => {
        // return (
        //   <el-select
        //     className="g-select"
        //     v-model={valueData.value}
        //     onChange={textChange}
        //   >
        //     {props.setter.options.map((option) => {
        //       return (
        //         <el-option
        //           label={option.label}
        //           value={option.value}
        //         ></el-option>
        //       );
        //     })}
        //   </el-select>
        // );
        return (
          <el-select size="small">
            <el-option />
          </el-select>
        );
      },
      inputNumber: (props, valueData) => {
        // return (
        //   <div className="g-input-number setter-item-node">
        //     <el-input-number
        //       v-model={valueData.value[props.name]}
        //       min={props.min}
        //       max={props.max}
        //       onChange={textChange}
        //     ></el-input-number>
        //   </div>
        // );
        return <el-input-number size="small" />;
      },
      input: (props, valueData) => {
        // return (
        //   <div className="g-input setter-item-node">
        //     <el-input
        //       v-model={valueData.value[props.name]}
        //       onChange={textChange}
        //     ></el-input>
        //   </div>
        // );
        return <el-input size="small" />;
      },
      colorPicker: (props, valueData) => {
        // return (
        //   <div className="g-color-picker setter-item-node">
        //     <el-color-picker
        //       v-model={valueData.value[props.name]}
        //       onChange={textChange}
        //     />
        //   </div>
        // );
        return <el-color-picker size="small" />;
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
            <el-col span={2}></el-col>
            <el-col span={6}>{getSetterLabel()}</el-col>
            <el-col span={16}>{getSetterContent()}</el-col>
          </>
        );
      }
      return <el-row className="g-row">{el}</el-row>;
    };
  },
});
