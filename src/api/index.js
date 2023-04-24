import API from './api.js'

export default function initAPI(app) {
    app.config.globalProperties.$api = API
}