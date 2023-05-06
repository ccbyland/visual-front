import queryConfig from "@/config/widget/queryConfig"

export default function (widget, data, options = {}) {

  const { isCanvas } = options

  /**
   * 根据类型获取对应设置器配置
   * 遍历目标对象所有配置，扁平化处理，挂载到props对象上
   * @param {*} type analysis \ styles
   */
  const getProps = (type) => {

    let props = {}
    let widgetConfigPropsType = []

    // 画布
    if (isCanvas) {
      widgetConfigPropsType = widget.globalConfig[type]
      // 组件
    } else {
      if (!widget.props || !widget.props[type] || !Array.isArray(widget.props[type]) || !widget.props[type].length) {
        return
      }
      widgetConfigPropsType = widget.props[type]
    }

    if (!widgetConfigPropsType.length) {
      return
    }

    for (const typeItem of widgetConfigPropsType) {
      if (typeItem.content.length) {
        for (const typeItemContent of typeItem.content) {
          if (typeItemContent.setters && typeItemContent.setters.length) {
            for (const setter of typeItemContent.setters) {
              if (!setter.name) {
                continue
              }
              if (setter.children) {
                props[setter.name] = {}
                for (const subSetter of setter.children) {
                  if (!subSetter.name) {
                    continue
                  }
                  props[setter.name][subSetter.name] = subSetter.value
                }
              } else {
                props[setter.name] = setter.value
              }
            }
          }
        }
      }
    }
    return props
  }

  /**
   * 初始化组件查询字段
   * @returns 
   */
  const getQuery = () => {
    if (!widget.props || !widget.props.query) {
      return
    }
    let propsQuery = {
      ...queryConfig,
      area: widget.props.query
    }
    return propsQuery
  }

  const setCanvasProps = () => {
    let globalStyleConfig = getProps('styles')
    data.value = {
      ...data.value,
      container: {
        ...data.value.container,
        props: globalStyleConfig
      }
    }
  }

  return { getProps, getQuery, setCanvasProps }
}