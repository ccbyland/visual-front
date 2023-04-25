import queryConfig from "@/config/widget/queryConfig"

export default function (widget) {

    /**
     * 初始化组件查询字段
     * @returns 
     */
    const getQuery = () => {
        if (!widget.props || !widget.props.query) {
            return
        }
        let propsQuery = {
            ...queryConfig,
            area: widget.props.query
        }
        return propsQuery
    }

    const setCanvasProps = () => {

    }

    return { getQuery, setCanvasProps }
}