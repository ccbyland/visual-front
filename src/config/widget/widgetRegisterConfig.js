import renderConfig from './widgetRenderConfig'
import setterConfig from './widgetSetterConfig'

export default {
    line: {
        label: '折线图',
        key: 'line',
        defaultData: {
            layout: {
                w: 6,
                h: 8,
            }
        },
        render: renderConfig.line,
        props: setterConfig.line
    },
    bar: {
        label: '柱状图',
        key: 'bar',
        defaultData: {
            layout: {
                w: 6,
                h: 8,
            }
        },
        render: renderConfig.bar,
        props: setterConfig.bar
    },
    pie: {
        label: '饼图',
        key: 'pie',
        defaultData: {
            layout: {
                w: 6,
                h: 8,
            }
        },
        render: renderConfig.pie,
        props: setterConfig.pie
    },
    map: {
        label: '地图',
        key: 'map',
        defaultData: {
            layout: {
                w: 6,
                h: 8,
            }
        },
        render: renderConfig.map,
        props: setterConfig.map
    }
}