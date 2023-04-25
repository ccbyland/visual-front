import widgetRegisterConfig from "./widgetRegisterConfig"
import queryConfig from "./queryConfig"

function mergeQueryConfig(widget) {

  if (widget && widget.props && widget.props.query && widget.props.query.length) {
    const queryList = []
    for (let item of widget.props.query) {
      let queryName = item.queryName
      queryList.push(Object.assign({}, queryConfig.area[queryName], item))
    }
    widget.props.query = queryList
  }
}

function createWidgetConfig() {

  const widgetList = []
  const widgetMap = {}

  return {
    widgetList,
    widgetMap,
    register: (widget) => {
      widgetList.push(widget)
      widgetMap[widget.key] = widget

      mergeQueryConfig(widget)
    }
  }
}

const widgetConfig = createWidgetConfig()

widgetConfig.register(widgetRegisterConfig.line)
widgetConfig.register(widgetRegisterConfig.bar)
widgetConfig.register(widgetRegisterConfig.pie)
widgetConfig.register(widgetRegisterConfig.map)

export default widgetConfig