import EmptyImg from '@/assets/images/card/empty.png'
import { computed, getCurrentInstance, onMounted, onUnmounted, ref } from "vue"
import { useStore } from 'vuex'
import deepcopy from 'deepcopy'
import { events } from '@/utils/events'
import { genCompleteChartOption } from '@/utils/chartOption'
import ComponentStyle from '@/utils/componentStyle'

export default {
  props: {
    id: { type: String }, // 图表ID
    type: { type: String }, // 图表类型
    query: { type: Object }, // 配置字段数据
    componentStyle: { type: Object }, // 图表独立配置数据
  },
  setup(props) {

    const { proxy } = getCurrentInstance()
    const store = useStore()

    let offEvent = null
    let observer = null
    let chartInstance = null // 当前图表实例对象
    let dimensionData = []
    let measureData = []
    let settings = {
      dimension: [], // 维度
      measure: [] // 度量
    }
    let option = {
      series: [],
      legend: {},
      xAxis: {
        type: 'category',
        data: []
      },
    }

    const empty = ref(false)
    const chartData = computed(() => store.state.chartData[props.id])
    onMounted(() => {
      if (chartData.value) {
        empty.value = false
        renderChart(chartData.value)
      } else {
        empty.value = true
      }
      offEvent = addEvent()
    })

    onUnmounted(() => {
      offEvent && offEvent()
    })

    const emptyImg = computed(() => Proxy.EmptyImg || EmptyImg)

    const chartDataChange = (options = {}) => {
      const { chartData } = options
      if (chartData) {
        empty.value = false
      }
      let data = null
      if (chartData && chartData.data) {
        data = chartData.data
        store.dispatch('updateChartData', {
          id: props.id,
          data
        })
      }
      setTimeout(() => {
        renderChart(data)
      }, 0)
    }

    const addEvent = () => {
      events.on(`chart_data_change_${props.id}`, chartDataChange)
      return () => {
        events.off(`chart_data_change_${props.id}`, chartDataChange)
      }
    }

    const renderChart = (data) => {
      if (!data || data.value) {
        return
      }
      initChart()
      genChartOption(data)
    }

    const initChart = () => {
      if (chartInstance) {
        return
      }
      const chartDom = document.getElementById(props.id)
      chartInstance = proxy.$echarts.init(chartDom)
      if (!chartInstance) {
        console.warn('[initChart] echarts 初始化DOM失败')
        return
      }
      addResizeEvent()
    }

    const setSize = () => {
      const rect = ComponentStyle.calChartClientRect(props.componentStyle, props.id)
      chartInstance && chartInstance.resize(rect)
    }
    const addResizeEvent = () => {
      const resizeObserver = window.ResizeObserver
      const callback = (domList) => {
        if (!domList[0]) return
        chartInstance && setSize()
      }
      observer = new resizeObserver(callback)
      const gridItemDom = document.getElementById(`grid-item__${props.id}`)
      observer.observe(gridItemDom)
    }
    const genOptionProps = () => {
      settings = {
        dimension: [],
        measure: []
      }
      props.query.area.forEach(item => {
        if (item.rule && item.rule.type) {
          if (item.queryName == 'area_type') {
            item.value = [
              { name: 'city', title: '城市' }]
          }
          if (item.queryName == 'area_value') {
            item.value = [
              { name: 'number', title: '件数' }]
          }
          if (item.queryName == 'area_type' || item.queryName == 'area_value') {
            item.value.forEach(valueItem => {
              settings[item.rule.type].push(valueItem.name)
            })
          }
          if (item.queryName == 'area_value') {
            let series = []
            let legendData = []
            item.value.forEach((valueItem, valueIndex) => {
              if (!series[valueIndex]) {
                series.push({ name: valueItem.title })
              }
              option.series = series.map(seriesItem => {
                return { ...seriesItem, type: props.type }
              })

              if (!legendData[valueIndex]) {
                legendData.push({ name: valueItem.name })
              }
              option.legend.data = legendData
            })
          }
        }
      })
    }
    const genOptionData = (chartData) => {
      if (!settings.dimension.length || !settings.measure.length) {
        empty.value = true
        return false
      }
      dimensionData = chartData.map(chartDataItem => {
        return chartDataItem[settings.dimension[0]]
      })
      settings.measure.forEach(measureItem => {
        let measureDataItem = []
        chartData.forEach(chartDataItem => {
          measureDataItem.push(chartDataItem[measureItem])
        })
        measureData.push(measureDataItem)
      })
      return true
    }

    const genChartOption = (data) => {
      let chartData = deepcopy(data)

      if (Array.isArray(chartData) && chartData.length) {
        genOptionProps()
        if (!genOptionData(chartData)) {
          return
        }
      }

      if (!option || !dimensionData.length || !measureData.length) {
        return
      }
      option = proxy.genCustomOption(option, dimensionData, measureData)

      chartInstance && setChartOption()
    }

    const setChartOption = () => {
      chartInstance && chartInstance.clear()
      option = genCompleteChartOption(option)
      chartInstance && chartInstance.setOption(option)
    }

    const renderTitle = () => {

      // const { card_compontentTitle, card_compontentTitleBackground } = props.componentStyle
      // const titleStyle = { 'background': card_compontentTitleBackground.backgroundColor }
      // const titleTextStyle = { 'color': card_compontentTitle.fontColor }

      return (
        <div className='g-card__title'>
          <div className='g-card__title-text'>123</div>
        </div>
      )
    }

    const renderEmpty = () => {
      return (
        <div className="g-card__empty">
          <img className="g-card__empty-icon" src={emptyImg.value}></img>
          <div className="g-card__empty-text">当前图表暂无数据</div>
        </div>
      )
    }

    const renderCanvas = () => {

      const chartStyle = {}
      return (
        <div className='g-card__chart' style={chartStyle}>
          <div className='g-card__chart-canvas' v-show={!empty.value}>
            <div id={props.id}></div>
          </div>
        </div>
      )
    }

    return () => {
      return <>
        {renderTitle()}
        {empty.value ? renderEmpty() : renderCanvas()}
      </>
    }

  }
}