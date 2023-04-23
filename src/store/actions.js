import { UPDATE_EDITOR_WIDGET_DATA, UPDATE_WIDGET_CONFIG } from './mutations-type.js'

export default {
    updateEditorWidgetData({ commit }, data) {
        commit(UPDATE_EDITOR_WIDGET_DATA, data)
    },
    updateWidgetConfig({ commit }, data) {
        commit(UPDATE_WIDGET_CONFIG, data)
    }
}