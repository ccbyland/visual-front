import { defineComponent, provide, ref } from "vue";
import data from "@/config/data.json";
import widgetConfig from "@/config/widgetConfig";
import Editor from "@/packages/editor/index.jsx";
import useDefaultData from "@/hooks/useDefaultData";
import "./index.scss";

export default defineComponent({
  setup() {
    const state = ref(data);

    // 全局注入组件配置对象
    provide("widgetConfig", widgetConfig);

    // 初始化data.json
    const { setCanvasProps } = useDefaultData(widgetConfig, state, {
      isCanvas: true,
    });

    // 更新画布props
    setCanvasProps();

    return () => {
      return <Editor v-model={state.value}></Editor>;
    };
  },
});
