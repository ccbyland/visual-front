import { defineComponent } from "vue";

export default defineComponent({
  name: "g-setter-layout",
  props: {
    value: { type: String },
    setter: { type: Object },
    currEditData: { type: Object },
  },
  setup(props) {
    const getSetterLabel = () => {
      return <div className="g-label">{props.setter.label}</div>;
    };
    return () => {
      return (
        <el-row gutter={10}>
          <el-col span={6}>{getSetterLabel()}</el-col>
          <el-col span={18}>123</el-col>
        </el-row>
      );
    };
  },
});
