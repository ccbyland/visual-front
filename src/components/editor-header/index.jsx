import { computed, defineComponent } from "vue";
import { $dialog } from "@/components/myDiaglog";
import "./index.scss";
import useCommand from "@/hooks/useCommand";
import _ from "lodash";

export default defineComponent({
  props: {
    modelValue: { type: Object },
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const data = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        ctx.emit("update:modelValue", _.cloneDeep(newValue));
      },
    });

    const { commands } = useCommand(data);

    const exportJSON = () => {
      $dialog({
        title: "导出json使用",
        content: JSON.stringify(data.value),
        footer: true,
      });
    };

    const importJSON = () => {
      $dialog({
        title: "导入json使用",
        content: "",
        footer: true,
        onConfirm(text) {
          commands.updateCanvas(JSON.parse(text));
        },
      });
    };

    // const commandBtn = computed(() => {
    //   return [
    //     // { type: 'icon', label: '撤销', icon: IconBack, disabled: isBackDisabled.value, handler: () => commands.back() },
    //     // { type: 'icon', label: '恢复', icon: IconForward, disabled: isForwardDisabled.value, handler: () => commands.forward() },
    //     {
    //       type: "button",
    //       label: "导出",
    //       icon: <Upload />,
    //       handler: () => {
    //         $dialog({
    //           title: "导出json使用",
    //           content: JSON.stringify(props.data.value),
    //           footer: true,
    //         });
    //       },
    //     },
    //     {
    //       type: "button",
    //       label: "导入",
    //       icon: <Download />,
    //       handler: () => {
    //         $dialog({
    //           title: "导入json使用",
    //           content: "",
    //           footer: true,
    //           onConfirm(text) {
    //             commands.updateCanvas(JSON.parse(text));
    //           },
    //         });
    //       },
    //     },
    //   ];
    // });

    return () => {
      return (
        <div className="editor-header">
          <img className="logo" src={require(`@/assets/images/logo.png`)} />
          <div className="info">八爪鱼搭建平台</div>
          <div className="operate">
            <el-button onClick={() => commands.back()}>撤销</el-button>
            <el-button onClick={() => commands.forward()}>恢复</el-button>
            <el-button onClick={exportJSON}>导出JSON</el-button>
            <el-button onClick={importJSON}>导入JSON</el-button>
          </div>
        </div>
      );
    };
  },
});
