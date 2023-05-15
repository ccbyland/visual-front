import { computed, defineComponent } from "vue";

const colorsList = [
  {
    label: "八爪鱼",
    value: ["#7b7dff", "#ffcf00", "#61a0a8", "#d48265", "#91c7ae", "#749f83"],
  },
  {
    label: "智能",
    value: ["#2E74FF", "#58CAF4", "#867EEC", "#FCBC3D", "#45D0B5", "#5B7BBA"],
  },
  {
    label: "鲜明",
    value: ["#2E88FF", "#FE8433", "#1FD3CD", "#6D6DF2", "#4CA2DC", "#FFB70A"],
  },
  {
    label: "舒适",
    value: ["#40BFBF", "#3F5A8F", "#998FCC", "#FDAC33", "#538EB6", "#72BCFA"],
  },
  {
    label: "简约",
    value: ["#4786FF", "#14C7C7", "#FFB266", "#8B8AE6", "#49B0F5", "#FFA299"],
  },
  {
    label: "色盲无障碍",
    value: ["#527ACC", "#FF9F40", "#3E4D99", "#A3CCE9", "#636E82", "#E6710F"],
  },
  {
    label: "数据之美",
    value: ["#3D71FF", "#40D4C6", "#7961F4", "#F69173", "#38AE9A", "#A66BE5"],
  },
  {
    label: "节日",
    value: ["#FF7C1F", "#FFB521", "#7D8FEA", "#67ADF2", "#78DB91", "#37AF91"],
  },
  {
    label: "商务",
    value: ["#697CD9", "#45BCFF", "#52CCB8", "#74D1DA", "#5288D3", "#F7CE36"],
  },
  {
    label: "时尚",
    value: ["#8A6EFA", "#48BAFF", "#F17FDE", "#F3B7FF", "#58CE93", "#A8E79A"],
  },
  {
    label: "制造",
    value: ["#0F8299", "#12B3B3", "#6CD99F", "#ACE673", "#FFDB4D", "#4C993D"],
  },
  {
    label: "理性蓝",
    value: ["#4476DA", "#49D6C1", "#35A2D8", "#5ED9E6", "#58B3B3", "#4E69B2"],
  },
  {
    label: "热情红",
    value: ["#E86675", "#FF9F7A", "#CC7A9D", "#D999D9", "#BC6ACC", "#955989"],
  },
  {
    label: "金融",
    value: ["#FDB937", "#4CB890", "#74AFF3", "#4F77C5", "#FF8F43", "#BDABD3"],
  },
  {
    label: "快消",
    value: ["#FF735A", "#5BCCB6", "#4782B3", "#EB7BC0", "#FFAA33", "#FED840"],
  },
  {
    label: "星月夜",
    value: ["#5465C6", "#4E90E5", "#FCD229", "#E98800", "#42588F", "#C09AD0"],
  },
  {
    label: "日出印象",
    value: ["#C58C6D", "#D95E52", "#EEBA60", "#758D99", "#3A5C67", "#A2AB90"],
  },
  {
    label: "经典色盘",
    value: ["#2D84DD", "#34A6DB", "#17CEDD", "#3BC397", "#84D377", "#B7DB70"],
  },
  {
    label: "高级灰调",
    value: ["#5A638A", "#93B8D3", "#5262AD", "#85A7E8", "#A2A2F7", "#54759A"],
  },
  {
    label: "灵动",
    value: ["#7F63DA", "#FFC237", "#49B4B6", "#76D0E6", "#F9945F", "#9E94DC"],
  },
  {
    label: "国风复古",
    value: ["#276567", "#F65E40", "#F7BE27", "#BD7E5B", "#F18366", "#7B6F74"],
  },
];

export default defineComponent({
  name: "g-color-scheme",
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["update:value", "change"],
  setup(props, ctx) {
    const valueData = computed({
      get: () => {
        return props.value ? props.value : colorsList[0];
      },
      set: (val) => {
        ctx.emit("update:value", val);
      },
    });
    const handleValueChange = (value) => {
      ctx.emit("change", value);
    };
    return () => {
      return (
        <div className="g-color-scheme">
          <div className="g-color-scheme-value">
            <div className="g-color-scheme-option">
              <div className="g-color-scheme-colors">
                {valueData.value.value.map((color) => {
                  return (
                    <span
                      className="g-color-scheme-colors-item"
                      style={{ backgroundColor: color }}
                    ></span>
                  );
                })}
              </div>
              <div className="g-color-scheme-label">
                {valueData.value.label}
              </div>
            </div>
          </div>
          <el-select
            size="small"
            className="g-color-scheme-select"
            v-model={valueData.value}
            onChange={handleValueChange}
          >
            {colorsList.map((colors) => {
              return (
                <el-option key={colors} value={colors}>
                  <div className="g-color-scheme-option">
                    <div className="g-color-scheme-colors">
                      {colors.value.map((color) => {
                        return (
                          <span
                            className="g-color-scheme-colors-item"
                            style={{ backgroundColor: color }}
                          ></span>
                        );
                      })}
                    </div>
                    <div className="g-color-scheme-label">{colors.label}</div>
                  </div>
                </el-option>
              );
            })}
          </el-select>
        </div>
      );
    };
  },
});
