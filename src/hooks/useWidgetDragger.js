import { randomStr } from "@/utils";
import useDefaultData from "./useDefaultData";

export default (
  canvasRef,
  data,
  gridLayoutRef,
  gridItemRef,
  forbidChildPointerEvents
) => {
  let curWidget = null;
  let mouseXY = { x: null, y: null };
  let parentRect = {};
  let newPos = {};
  let dragPos = {};

  let w = 0;
  let h = 0;
  let id = 0;
  let defaultData = {};
  let props = {};
  let query = {};
  //   const dragenter = (e) => {
  //     console.error("dragenter");
  //     e.dataTransfer.dropEffect = "link";
  //   };

  const dragover = (e) => {
    console.error("dragover");
    e.dataTransfer.dropEffect = "move";
    e.preventDefault();
    // 返回元素的大小及其相对于视口的位置
    parentRect = document
      .getElementById("canvas_content")
      .getBoundingClientRect();
    // 存储当前鼠标位置
    mouseXY.x = e.clientX;
    mouseXY.y = e.clientY;
    // 获取当前小部件列表
    let widgets = data.value.widgets;
    // 查找尚未初始化的小部件
    let index = widgets.findIndex((item) => item.i === "");

    // 当前不存在未初始化的小部件
    if (index === -1) {
      data.value = {
        ...data.value,
        widgets: [
          ...widgets,
          {
            i: "",
            x: 0,
            y: 0,
            w,
            h,
            props,
            query,
          },
        ],
      };

      // 当前存在未初始化的小部件
    } else {
      // 获取该小部件
      let el = gridItemRef.value[index];

      /**
       * 将x和y坐标从像素转换为栅格单位。
       * @param｛Number｝top顶部位置（相对于父级）（以像素为单位）。
       * @param｛Number｝left左位置（相对于父级），以像素为单位。
       * @return｛Object｝x和y，以网格为单位。
       */
      newPos = el.calcXY(
        mouseXY.y - parentRect.top,
        mouseXY.x - parentRect.left
      );

      // 移动目标位置
      gridLayoutRef.value.dragEvent("dragstart", "", newPos.x, newPos.y, h, w);

      dragPos.x = newPos.x;
      dragPos.y = newPos.y;
    }
  };

  const dragleave = (e) => {
    e.preventDefault();
    console.error("dragleave");

    gridLayoutRef.value.dragEvent("dragend", "", newPos.x, newPos.y, h, w);
    let widgets = data.value.widgets.filter((obj) => obj.i !== "");
    data.value = { ...data.value, widgets: [...widgets] };
  };

  const drop = (e) => {
    console.error("drop");

    gridLayoutRef.value.dragEvent("dragend", "", dragPos.x, dragPos.y, h, w);
    let widgets = data.value.widgets.filter((obj) => obj.i !== "");
    data.value = {
      ...data.value,
      widgets: [
        ...widgets,
        {
          i: id,
          x: 0,
          y: 0,
          w,
          h,
          key: curWidget.key,
          props,
          query,
        },
      ],
    };
  };

  const checkWidgetAttr = (widget) => {
    forbidChildPointerEvents.value = true;
    defaultData = widget.defaultData;
    const { getProps, getQuery } = useDefaultData(widget);
    props = getProps("styles");
    query = getQuery();
    id = randomStr(8);
    w = defaultData.layout.w;
    h = defaultData.layout.h;
  };

  const dragstartWidget = (e, widget) => {
    forbidChildPointerEvents.value = false;
    console.error("dragstartWidget");
    // canvasRef.value.addEventListener("dragenter", dragenter);
    // 当在画布区移动时，添加草稿部件，并跟随鼠标位置异动
    canvasRef.value.addEventListener("dragover", dragover);
    // 离开画布区时，清空目标拖拽数据，避免产生半成品
    // canvasRef.value.addEventListener("dragleave", dragleave);
    // 当在画布区释放时，添加对应小部件
    canvasRef.value.addEventListener("drop", drop);
    curWidget = widget;

    checkWidgetAttr(widget);
  };

  const dragendWidget = () => {
    console.error("dragendWidget");
    // canvasRef.value.removeEventListener("dragenter", dragenter);
    canvasRef.value.removeEventListener("dragover", dragover);
    // canvasRef.value.removeEventListener("dragleave", dragleave);
    canvasRef.value.removeEventListener("drop", drop);
    curWidget = null;
  };

  return {
    dragstartWidget,
    dragendWidget,
  };
};
