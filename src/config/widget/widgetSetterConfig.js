export default {
  line: {
    styles: [{
      layout: 'collapse',
      title: '标题与卡片',
      content: [
        {
          title: '标题',
          setters: [
            { setterName: 'cardTitleSetter' },
            { setterName: 'cardLinkSetter' }

          ]
        },
        {
          title: '组件容器',
          setters: [
            { setterName: 'cardBorderSetter' }
          ]
        }
      ]
    }, {
      layout: 'default',
      title: '图表样式',
      content: [
        {
          title: '图表类型',
          setters: [
            { setterName: 'charLineSetter' },
            { setterName: 'charLineSignSetter' },
          ]
        }
      ]
    }],
    query: [
      { queryName: 'area_type' },
      { queryName: 'area_value' },
    ],
    analysis: []
  },
  bar: {
    styles: [],
    query: [
      { queryName: 'area_type' },
      { queryName: 'area_value' },
    ],
    analysis: []
  },
  pie: {
    styles: [],
    query: [
      { queryName: 'area_type' },
      { queryName: 'area_value' },
    ],
    analysis: []
  },
  map: {
    styles: [],
    query: [
      { queryName: 'area_type' },
      { queryName: 'area_value' },
    ],
    analysis: []
  }
}