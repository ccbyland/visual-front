import { UPDATE_EDITOR_WIDGET_DATA, UPDATE_WIDGET_CONFIG, UPDATE_CHART_DATA } from "./mutations-type"

export default {
    [UPDATE_EDITOR_WIDGET_DATA](state, payload) {
        state.editorWidget = payload
    },
    [UPDATE_WIDGET_CONFIG](state, payload) {
        state.widgetConfig = payload
    },
    [UPDATE_CHART_DATA](state, payload) {
        state.chartData = { ...state.chartData, ...payload }
    }
}