export default {
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
          label: '宋体',
          value: 'SimSun',
        },
        {
          label: '黑体',
          value: 'SimHei'
        },
        {
          label: '微软雅黑',
          value: 'Microsoft Yahei'
        }
      ]
    }
  ],
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
  componentTitleSetter: [
    {
      label: '文本',
      name: 'global_compontentTitle',
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
          type: 'fontColorPicker',
          value: '#333',
        },
      ]
    }, {
      label: '背景色',
      name: 'global_compontentTitleBackground',
      defaultShow: true,
      children: [
        {
          name: 'backgroundColor',
          type: 'backgroundColorPicker',
          value: '#000',
        },
      ]
    },
  ],
  componentBoxSetter: [
    {
      label: '边框',
      name: 'global_compontentBoxBorder',
      defaultShow: true,
      children: [
        {
          name: 'isShow',
          type: 'checkbox',
          value: false,
        },
        {
          name: 'color',
          type: 'colorPicker',
          value: '#000'
        }
      ]
    },
    {
      label: '背景色',
      name: 'global_compontentBoxBackground',
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
  globalContentChart: [
    {
      label: '轴标题',
      name: 'global_contentChart',
      defaultShow: true,
      children: [
        {
          name: 'isShow',
          type: 'checkbox',
          value: false,
        },
        {
          name: 'color',
          type: 'colorPicker',
          value: '#000'
        }
      ]
    },
    {
      label: 'X轴',
      name: 'global_contentChart',
      defaultShow: true,
      children: [
        {
          name: 'isShow',
          type: 'checkbox',
          value: false,
        },
        {
          name: 'color',
          type: 'colorPicker',
          value: '#000'
        }
      ]
    },
    {
      label: 'Y轴',
      name: 'global_contentChart',
      defaultShow: true,
      children: [
        {
          name: 'isShow',
          type: 'checkbox',
          value: false,
        },
        {
          name: 'color',
          type: 'colorPicker',
          value: '#000'
        }
      ]
    }
  ],
  globalContentTable: [
    {
      label: '样式设置',
      name: 'global_contentTable',
      defaultShow: true,
      children: [
        {
          name: 'backgroundColor',
          type: 'colorPicker',
          value: '#000',
        },
      ]
    }
  ]
}