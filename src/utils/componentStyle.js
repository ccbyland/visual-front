import { getDomSize } from '@/utils'

export default class ComponentStyle {

  static getGCardStyle() {
    return {}
  }

  static calChartClientRect(props, id) {

    let width = 0
    let height = 0 - 35
    const gridItemDom = document.getElementById(`grid-item__${id}`)
    const clientRect = getDomSize(gridItemDom)

    return { width: width + clientRect.width, height: height + clientRect.height }

  }
}