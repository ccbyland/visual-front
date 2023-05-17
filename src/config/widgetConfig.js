import widgetRegisterConfig from "./widgetRegisterConfig"
import globalStyleConfig from '@/config/global/styleConfig'
import { setSetterNameMap } from '@/utils/setterTransform'
import queryConfig from "./queryConfig"

/**
 * 组件查询配置初始化
 * @param {*} widget
 * FORM：[{"queryName":"area_type"}, ...]
 * TO： [{"queryName":"area_type","id":"area_type","queryAxis":"row","label":"类别轴/维度","value":[],"rule":{"type":"dimension","required":true}}, ...]
 */
function initQueryConfig(widget) {
  if (widget && widget.props && widget.props.query && widget.props.query.length) {
    const queryList = []
    for (let item of widget.props.query) {
      let queryName = item.queryName
      queryList.push(Object.assign({}, queryConfig.area[queryName], item))
    }
    widget.props.query = queryList
  }
}

/**
 * 创建组件配置对象
 * @returns 
 */
function createWidgetConfig() {

  const widgetList = []
  const widgetMap = {}
  // 全局配置
  const globalConfig = {
    styles: globalStyleConfig
  }

  // 设置 设置器对应的映射配置
  setSetterNameMap(globalConfig, 'styles', { isGlobal: true })

  return {
    widgetList,
    widgetMap,
    globalConfig,
    register: (widget) => {

      widgetList.push(widget)
      widgetMap[widget.key] = widget

      
      setSetterNameMap(widget, 'styles')

      // 组件查询配置初始化
      initQueryConfig(widget)
    }
  }
}

const editorWidgetConfig = createWidgetConfig()

// 组件注册
editorWidgetConfig.register(widgetRegisterConfig.line)
editorWidgetConfig.register(widgetRegisterConfig.bar)
editorWidgetConfig.register(widgetRegisterConfig.pie)
// editorWidgetConfig.register(widgetRegisterConfig.map)

export default editorWidgetConfig