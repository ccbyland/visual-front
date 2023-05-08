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
   * 卡片标题栏
   */
  cardTitleSetter: [
    {
      label: "显示主标题",
      type: "checkbox",
      name: "card_mainTitleVisible",
      value: true,
    },
    {
      label: "文本",
      name: "card_compontentTitle",
      defaultShow: true,
      children: [
        {
          name: "text",
          type: "input",
          value: "基础折线趋势图",
        },
        {
          name: "fontSize",
          type: "inputNumber",
          value: 12,
          min: 12,
          max: 32,
        },
        {
          name: "fontWeight",
          type: "fontWeight",
          value: "bold",
          options: [
            {
              icon: "initial",
              value: "initial",
            },
            {
              icon: "bold",
              value: "bold",
            },
          ],
        },
        {
          name: "textAlign",
          type: "textAlign",
          value: "center",
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
          value: "#212A3E",
        },
        {
          name: "backgroundColor",
          type: "backgroundColorPicker",
          value: "#F1F6F9",
        },
      ],
    }
  ],
  /**
   * 卡片标题栏
   */
  cardLinkSetter: [
    {
      label: "显示主标题",
      type: "checkbox",
      name: "card_mainTitleVisible",
      value: true,
    },
    {
      label: "文本",
      name: "card_compontentTitle",
      defaultShow: true,
      children: [
        {
          name: "text",
          type: "input",
          value: "基础折线趋势图",
        },
        {
          name: "fontSize",
          type: "inputNumber",
          value: 12,
          min: 12,
          max: 32,
        },
        {
          name: "fontWeight",
          type: "fontWeight",
          value: "bold",
          options: [
            {
              icon: "initial",
              value: "initial",
            },
            {
              icon: "bold",
              value: "bold",
            },
          ],
        },
        {
          name: "textAlign",
          type: "textAlign",
          value: "center",
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
          value: "#212A3E",
        },
        {
          name: "backgroundColor",
          type: "backgroundColorPicker",
          value: "#F1F6F9",
        }
      ],
    }
    ,
    {
      label: "文本",
      name: "card_compontentTitle",
      defaultShow: true,
      children: [
        {
          name: "text",
          type: "input",
          value: "基础折线趋势图",
        },
        {
          name: "fontSize",
          type: "inputNumber",
          value: 12,
          min: 12,
          max: 32,
        },
        {
          name: "fontWeight",
          type: "fontWeight",
          value: "bold",
          options: [
            {
              icon: "initial",
              value: "initial",
            },
            {
              icon: "bold",
              value: "bold",
            },
          ],
        },
        {
          name: "textAlign",
          type: "textAlign",
          value: "center",
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
          value: "#212A3E",
        },
        {
          name: "backgroundColor",
          type: "backgroundColorPicker",
          value: "#F1F6F9",
        },
      ],
    }
  ]
};
