export function randomStr(length, chars) {
    length = length || 6
    chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
}

export function getDomSize(dom) {

    if (!dom) {
        return
    }
    return { width: dom.offsetWidth, height: dom.offsetHeight }
}