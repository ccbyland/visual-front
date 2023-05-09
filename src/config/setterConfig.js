export default {
  /**
   * 页面样式
   */
  globalStyleSetter: [
    {
      label: "主题模式",
      type: "radio",
      name: "global_styleThemeMode",
      value: "light",
      defaultShow: true,
      options: [
        {
          label: "浅色模式",
          value: "light",
        },
        {
          label: "深色模式",
          value: "dark",
        },
      ],
    },
    {
      label: "页面字体",
      type: "select",
      name: "global_styleFontFamily",
      value: "Microsoft YaHei",
      defaultShow: true,
      options: [
        {
          label: "微软雅黑",
          value: "Microsoft YaHei",
        },
        {
          label: "宋体",
          value: "SimSun",
        },
        {
          label: "黑体",
          value: "SimHei",
        },
      ],
    },
  ],
  /**
   * 页面布局
   */
  globalLayoutSetter: [
    {
      label: "页面宽度",
      type: "radio",
      name: "global_layoutPageWidth",
      value: "auto",
      defaultShow: true,
      options: [
        {
          label: "自适应",
          value: "auto",
        },
        {
          label: "固定宽度",
          value: "fixed",
        },
      ],
    },
  ],
  /**
   * 卡片-标题-标题
   */
  cardTitleSetter: [
    {
      label: "显示标题",
      type: "checkbox",
      name: "card_titleVisible",
      value: true,
    },
    {
      label: "文案",
      name: "card_titleText",
      defaultShow: true,
      children: [
        {
          name: "text",
          type: "input",
          value: "基础折线趋势图",
        }
      ],
    },
    {
      label: "样式",
      name: "card_titleStyle",
      defaultShow: true,
      children: [
        {
          name: "fontSize",
          type: "inputNumber",
          value: 12,
          min: 12,
          max: 32,
        },
        {
          name: "fontStyle",
          type: "fontStyle",
          multiple: true,
          value: ["bold"],
          options: [
            {
              icon: "bold",
              value: "bold",
            },
            {
              icon: "italic",
              value: "italic",
            },
          ],
        },
        {
          name: "textAlign",
          type: "textAlign",
          value: ["left"],
          options: [
            {
              icon: "left",
              value: "left",
            },
            {
              icon: "center",
              value: "center",
            },
          ],
        },
        {
          name: "colorPicker",
          type: "fontColorPicker",
          value: "#fff",
        },
        {
          name: "backgroundColor",
          type: "backgroundColorPicker",
          value: "#999",
        },
      ],
    }
  ],
  /**
   * 卡片-标题-分割线
   */
  cardDividerSetter: [
    {
      label: "显示分割线",
      type: "checkbox",
      name: "card_dividerVisible",
      value: true,
    },
    {
      label: "样式",
      name: "card_dividerStyle",
      defaultShow: true,
      children: [
        {
          name: "width",
          type: "inputNumber",
          value: 1,
          min: 1,
          max: 5,
        },
        {
          name: "color",
          type: "backgroundColorPicker",
          value: "#000",
        }
      ],
    }
  ],
  /**
   * 卡片-组件容器-边框
   */
  cardContainerBorderSetter: [
    {
      label: "显示卡片边框",
      type: "checkbox",
      name: "card_containerBorderVisible",
      value: true,
    },
    {
      label: "样式",
      name: "card_containerBorderStyle",
      defaultShow: true,
      children: [
        {
          name: "width",
          type: "inputNumber",
          value: 1,
          min: 1,
          max: 5,
        },
        {
          name: "color",
          type: "backgroundColorPicker",
          value: "#000",
        }
      ],
    }
  ],
  /**
   * 卡片-组件容器-背景
   */
  cardContainerBackgroundSetter: [
    {
      label: "自定义背景填充",
      type: "checkbox",
      name: "card_containerBackgroundVisible",
      value: true,
    },
    {
      label: "样式",
      name: "card_containerBackgroundStyle",
      defaultShow: true,
      children: [
        {
          name: "color",
          type: "backgroundColorPicker",
          value: "#fff",
        }
      ],
    }
  ]
};
