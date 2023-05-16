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
      label: "图表色系",
      type: "colorScheme",
      name: "global_styleColorScheme",
      value: "",
      defaultShow: true,
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
    {
      label: "卡片圆角",
      type: "radio",
      name: "global_styleCardRadius",
      value: "none",
      defaultShow: true,
      options: [
        {
          label: "无",
          value: "none",
        },
        {
          label: "小",
          value: "min",
        },
        {
          label: "大",
          value: "max",
        },
      ],
    },
    {
      label: "卡片间距",
      type: "radio",
      name: "global_styleCardMangin",
      value: "compact",
      defaultShow: true,
      options: [
        {
          label: "紧凑",
          value: "compact",
        },
        {
          label: "常规",
          value: "convention",
        },
        // {
        //   label: "自定义",
        //   value: "custom",
        // },
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
    // {
    //   label: "页面边距",
    //   type: "selectMargin",
    //   name: "global_layoutPageMargin",
    //   value: "auto",
    //   defaultShow: true,
    // },
  ],
  /**
   * 页面背景
   */
  globalBackgroundSetter: [
    {
      label: "页面背景",
      type: "backgroundPicker",
      name: "pagebackground",
      value: "auto",
      defaultShow: true,
    },
    {
      label: "顶部图片",
      type: "imagePicker",
      name: "topImage",
      value: "",
      defaultShow: true,
    },
    {
      label: "底部图片",
      type: "imagePicker",
      name: "bottomImage",
      value: "",
      defaultShow: true,
    },
  ],
  /**
   * 全局-组件标题
   */
  componentTitleSetter: [
    {
      label: "文本",
      name: "card_textStyle",
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
          name: "colorPicker",
          type: "fontColorPicker",
          value: "#000",
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
      ],
    },
    {
      label: "背景填充",
      name: "card_backgroundStyle",
      defaultShow: true,
      children: [
        {
          name: "backgroundColor",
          type: "backgroundColorPicker",
          value: "#999",
        },
      ],
    },
    {
      label: "区域位置",
      type: "radio",
      name: "card_titleRegionalLocation",
      value: "auto",
      defaultShow: true,
      options: [
        {
          label: "图表内部",
          value: "auto",
        },
        {
          label: "图表上方",
          value: "fixed",
        },
      ],
    },
    {
      label: "分割线",
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
        },
      ],
    },
  ],
  /**
   * 全局-组件卡片
   */
  componentContainerSetter: [
    {
      label: "背景填充",
      name: "card_containerBackgroundStyle",
      defaultShow: true,
      children: [
        {
          name: "color",
          type: "backgroundColorPicker",
          value: "#fff",
        },
      ],
    },
    {
      label: "卡片边框",
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
      label: "标题",
      name: "card_titleText",
      defaultShow: true,
      children: [
        {
          name: "text",
          type: "input",
          value: "基础折线趋势图",
        },
      ],
    },
    {
      label: "文本",
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
          name: "colorPicker",
          type: "fontColorPicker",
          value: "#000",
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
      ],
    },
    {
      label: "背景填充",
      name: "card_backgroundStyle",
      defaultShow: true,
      children: [
        {
          name: "backgroundColor",
          type: "backgroundColorPicker",
          value: "#999",
        },
      ],
    },
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
        },
      ],
    },
  ],
  /**
   * 卡片-组件容器-背景
   */
  cardContainerBackgroundSetter: [
    {
      label: "显示背景填充",
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
        },
      ],
    },
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
        },
      ],
    },
  ],
};
