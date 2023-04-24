import axios from 'axios'

const baseDomain = '/api'

const http = axios.create({
    baseURL: baseDomain + '/',
    method: 'post',
    headers: {}
})

const requestResolve = async (config) => {
    return config
}

const requestReject = (error) => {
    console.warn('requestReject: ', error)
    return Promise.reject(error)
}

const responseResolve = (response) => {
    if (response.config.responseType !== 'blob') {
        let code = response.data.code
        if (code !== 0) {
            console.warn('请求报错: ', response)
            throw response.data?.msg || '接口错误'
        } else {
            return response.data
        }
    } else {
        return response
    }
}

const responseReject = (error) => {
    console.warn('responseReject: ', error)
    return Promise.reject(error)
}

http.interceptors.request.use(requestResolve, requestReject)
http.interceptors.response.use(responseResolve, responseReject)

export default http