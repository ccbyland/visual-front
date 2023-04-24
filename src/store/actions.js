import { UPDATE_EDITOR_WIDGET_DATA, UPDATE_WIDGET_CONFIG, UPDATE_CHART_DATA } from './mutations-type.js'

export default {
    updateEditorWidgetData({ commit }, data) {
        commit(UPDATE_EDITOR_WIDGET_DATA, data)
    },
    updateWidgetConfig({ commit }, data) {
        commit(UPDATE_WIDGET_CONFIG, data)
    },
    updateChartData({ commit }, data) {
        commit(UPDATE_CHART_DATA, data)
    }
}