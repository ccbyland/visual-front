import setterConfig from '@/config/setterConfig'

/**
 * 根据设置名称，挂载对应配置
 * @param {*} widget 
 * @param {*} type 
 * @param {*} param2 
 */
export const setSetterNameMap = (widget, type, { isGlobal }) => {

  let configList = []

  // 全局设置器
  if (isGlobal && widget[type]) {
    configList = widget[type]
    // 组件设置
  } else if (widget.props && widget.props[type]) {
    configList = widget.props[type]
  }

  // 对应名称没有配置设置器名称
  if (!configList.length) {
    return
  }

  // 循环遍历设置器名称，并替换为对应的配置项
  for (let configItem of configList) {
    if (Array.isArray(configItem.content) && configItem.content.length) {
      for (let configContentItem of configItem.content) {
        if (Array.isArray(configContentItem.setters) && configContentItem.setters.length) {
          configContentItem.setters = replaceSetterName(configContentItem.setters, setterConfig)
        }
      }
    }
  }
}

/**
 * 根据设置器名称，并替换为对应的配置项
 * setters内可能包含多个setter，故这里使用了递归配置
 * FORM：[A,B]
 * TO：[{a:xxx},{b:xxx},{c:xxx}]
 * @param {*} setter
 * @param {*} setterConfig 
 * @param {*} startIndex 
 */
function replaceSetterName(setters, setterConfig, startIndex = 0) {

  // 获取当前setter
  const setter = setters[startIndex]
  if (setter) {
    if (setter.setterName && setterConfig[setter.setterName]) {
      const setterItemConfig = setterConfig[setter.setterName]
      setters.splice(startIndex, 1, ...setterItemConfig)
      startIndex = startIndex + setterItemConfig.length
    }
    return replaceSetterName(setters, setterConfig, startIndex)
  }
  return setters
}