import widgetRegisterConfig from "./widgetRegisterConfig"

function createWidgetConfig() {

  const widgetList = []
  const widgetMap = {}

  return {
    widgetList,
    widgetMap,
    register: (widget) => {
      widgetList.push(widget)
      widgetMap[widget.key] = widget
    }
  }
}

const widgetConfig = createWidgetConfig()

widgetConfig.register(widgetRegisterConfig.line)
widgetConfig.register(widgetRegisterConfig.bar)
widgetConfig.register(widgetRegisterConfig.pie)
widgetConfig.register(widgetRegisterConfig.map)

export default widgetConfig