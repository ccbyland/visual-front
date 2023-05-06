import { UPDATE_EDITOR_WIDGET_DATA, UPDATE_EDITOR_WIDGET_CONFIG, UPDATE_CHART_DATA } from "./mutations-type"

export default {
    [UPDATE_EDITOR_WIDGET_DATA](state, payload) {
        state.editorWidgetData = payload
    },
    [UPDATE_EDITOR_WIDGET_CONFIG](state, payload) {
        state.editorWidgetConfig = payload
    },
    [UPDATE_CHART_DATA](state, payload) {
        state.chartData[payload.id] = payload.data
    }
}