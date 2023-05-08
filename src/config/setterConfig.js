export default {
  /**
   * 页面样式
   */
  globalStyleSetter: [
    {
      label: '主题模式',
      type: 'radio',
      name: 'global_styleThemeMode',
      value: 'light',
      defaultShow: true,
      options: [
        {
          label: '浅色模式',
          value: 'light'
        },
        {
          label: '深色模式',
          value: 'dark'
        }
      ]
    },
    {
      label: '页面字体',
      type: 'select',
      name: 'global_styleFontFamily',
      value: 'Microsoft YaHei',
      defaultShow: true,
      options: [
        {
          label: '微软雅黑',
          value: 'Microsoft YaHei'
        },
        {
          label: '宋体',
          value: 'SimSun',
        },
        {
          label: '黑体',
          value: 'SimHei'
        }
      ]
    }
  ],
  /**
   * 页面布局
   */
  globalLayoutSetter: [
    {
      label: '页面宽度',
      type: 'radio',
      name: 'global_layoutPageWidth',
      value: 'auto',
      defaultShow: true,
      options: [
        {
          label: '自适应',
          value: 'auto'
        },
        {
          label: '固定宽度',
          value: 'fixed'
        }
      ]
    },
  ],
  /**
   * 组件标题栏
   */
  componentTitleSetter: [
    {
      label: '文本',
      name: 'card_compontentTitle',
      defaultShow: true,
      children: [
        {
          name: 'fontSize',
          type: 'inputNumber',
          value: 12,
          min: 12,
          max: 32
        },
        {
          name: 'fontColor',
          type: 'colorPicker',
          value: '#333',
        },
      ]
    }, {
      label: '背景色',
      name: 'card_compontentTitleBackground',
      defaultShow: true,
      children: [
        {
          name: 'backgroundColor',
          type: 'colorPicker',
          value: '#000',
        },
      ]
    },
  ],
  /**
   * 组件盒子
   */
  componentBoxSetter: [
    {
      label: '边框',
      name: 'card_compontentBoxBorder',
      defaultShow: true,
      children: [
        {
          name: 'color',
          type: 'colorPicker',
          value: '#000'
        }
      ]
    },
    {
      label: '背景色',
      name: 'card_compontentBoxBackground',
      defaultShow: true,
      children: [
        {
          name: 'backgroundColor',
          type: 'colorPicker',
          value: '#000',
        },
      ]
    }
  ],
  /**
   * 卡片标题栏
   */
  cardTitleSetter: [
    {
      label: '显示主标题',
      type: 'checkbox',
      name: 'card_mainTitleVisible',
      value: [1],
      options: [
        {
          label: '',
          value: 1
        }
      ]
    },
    {
      label: '文本',
      name: 'card_compontentTitle',
      defaultShow: true,
      children: [
        {
          name: 'text',
          type: 'input',
          value: '基础折线趋势图',
        },
        {
          name: 'fontSize',
          type: 'inputNumber',
          value: 12,
          min: 12,
          max: 32
        },
        {
          name: 'fontColor',
          type: 'colorPicker',
          value: '#fff',
        },
      ]
    }, {
      label: '背景色',
      name: 'card_compontentTitleBackground',
      defaultShow: true,
      children: [
        {
          name: 'backgroundColor',
          type: 'colorPicker',
          value: '#666',
        },
      ]
    },
  ],
  cardLinkSetter: [
    {
      label: '显示分割线',
      type: 'checkbox',
      name: 'card_mainTitleVisible1',
      value: [1],
      options: [
        {
          label: '',
          value: 1
        }
      ]
    }
  ],
  cardBorderSetter: [
    {
      label: '显示主标题',
      type: 'input',
      name: 'card_mainTitleVisible2',
      value: true,
    }
  ],
  charLineSetter: [
    {
      label: '显示主标题',
      type: 'input',
      name: 'card_mainTitleVisible3',
      value: true,
    }
  ],
  charLineSignSetter: [
    {
      label: '显示主标题',
      type: 'input',
      name: 'card_mainTitleVisible4',
      value: true,
    }
  ]
}