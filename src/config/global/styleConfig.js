/**
 * 全局样式配置
 * 
 * title：一级标题
 * content：配置内容，当只有一项时不显示项的标题，超过一项显示
 *    setters：对应设置器名称，映射详细配置内容
 * layout：布局希纳是，defalut平铺显示，collapse折叠显示
 */
export default [
  {
    title: '全局样式',
    layout: 'default',
    content: [
      {
        setters: [{ setterName: 'globalStyleSetter' }],
      }
    ]
  },
  {
    title: '页面布局',
    layout: 'default',
    content: [
      {
        setters: [{ setterName: 'globalLayoutSetter' }],
      }
    ]
  },
  {
    title: '页面背景',
    layout: 'default',
    content: [
      {
        setters: [{ setterName: 'globalBackgroundSetter' }],
      }
    ]
  },
  {
    title: '组件',
    layout: 'collapse',
    content: [
      {
        title: '标题',
        setters: [{ setterName: 'componentTitleSetter' }],
      },
      {
        title: '卡片',
        setters: [{ setterName: 'componentContainerSetter' }],
      }
    ]
  }
]