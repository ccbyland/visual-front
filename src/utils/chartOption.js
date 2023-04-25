export const genCompleteChartOption = (options = {}) => {

    const chartOption = {
        xAxis: options.xAxis || {},
        yAxis: options.yAxis || { type: 'value' },
        legend: options.legend || {},
        series: options.series || [],
    }

    return chartOption
}