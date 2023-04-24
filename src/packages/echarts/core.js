import EmptyImg from '@/assets/images/card/empty.png'
import { computed, getCurrentInstance, onMounted, onUnmounted, ref } from "vue"
import { useStore } from 'vuex'
import { events } from '@/utils/events'

export default {
  props: {
    id: { type: String }, // 图表ID
    type: { type: String }, // 图表类型
    componentStyle: { type: Object }, // 图表独立配置数据
  },
  setup(props) {

    const { proxy } = getCurrentInstance()
    const store = useStore()

    let offEvent = null
    let observer = null
    let chartInstance = null // 当前图表实例对象

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

    setTimeout(() => {
      store.dispatch('updateChartData', { [props.id]: { x: [1, 2, 3], y: [100, 200, 300] } })
    }, 2000)

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

    const chartDataChange = ({chartData  }) => {

      debugger

      // let data = null
      if(chartData){
        empty.value = false
      }
      if(chartData && chartData.data){
        // data = chartData.data
        // store
      }
    }

    const addEvent = () => {
      events.on(`chart_data_change_${props.id}`, chartDataChange)

      return () => {
        events.off(`chart_data_change_${props.id}`, chartDataChange)
      }
    }

    const renderChart = (data) => {
      if (data.value) {
        return
      }
      initChart()
      genChartOption()
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
      const rect = { width: 300, height: 300 }
      chartInstance && chartInstance.resize(rect)
    }
    const addResizeEvent = () => {
      const resizeObserver = window.ResizeObserver
      const callback = (domList) => {
        if (!domList[0]) return
        chartInstance && setSize()
      }
      observer = new resizeObserver(callback)
      const gridItemDom = document.getElementById(`grid_item__${props.id}`)
      observer.observe(gridItemDom)
    }
    // const addResizeEvent = () => {
    //   observer = new window.ResizeObserver((domList) => {
    //     if (!domList[0]) {
    //       return
    //     }
    //     chartInstance && setSize()
    //   })
    //   const gridItemDom = document.getAnimations(`grid-item__${props.id}`)
    //   observer.observe(gridItemDom)
    // }

    const genChartOption = () => {
      option = {
        "color": ["#8395fe", "#ffcf00", "#8b60f0", "#a791ff", "#53c5ff", "#ffd187"],
        "grid": {
          "left": 12,
          "right": 12,
          "bottom": 12,
          "top": 40,
          "containLabel": true
        },
        "effect": {},
        "legend": {
          "data": [{
            "name": "件数"
          }],
          "show": true,
          "textStyle": {
            "fontSize": 12,
            "fontWeight": "normal",
            "fontStyle": "normal",
            "color": "#666"
          },
          "right": "center",
          "top": "10",
          "orient": "horizontal"
        },
        "xAxis": {
          "type": "category",
          "data": ["辽阳市", "桂林市", "嘉义市", "张家界市", "营口市", "文山壮族苗族自治州", "泸州市", "十堰市", "衡阳市", "宜昌市", "固原市", "天津市", "上海市", "南充市", "梧州市", "安顺市", "随州市", "惠州市", "洛阳市", "重庆市", "本溪市", "赤峰市", "牡丹江市", "重庆市", "铁岭市", "安庆市", "七台河市", "台州市", "沧州市", "邵阳市", "天津市", "安康市", "荆州市", "山南地区", "南通市", "三明市", "绥化市", "佳木斯市", "锦州市", "澎湖县", "嘉峪关市", "赤峰市", "株洲市", "赤峰市", "南阳市", "金华市", "杭州市", "焦作市", "海外", "上海市", "张家口市", "石家庄市", "香港岛", "黔西南布依族苗族自治州", "巴中市", "三门峡市", "白山市", "黄石市", "石嘴山市", "茂名市", "晋中市", "吉安市", "铜仁市", "新界", "临沧市", "常德市", "辽阳市", "肇庆市", "咸宁市", "酒泉市", "泸州市", "赣州市", "固原市", "汉中市", "新北市", "石嘴山市", "普洱市", "芜湖市", "上海市", "信阳市", "长春市", "江门市", "芜湖市", "上海市", "唐山市", "宿州市", "上海市", "天津市", "德宏傣族景颇族自治州", "芜湖市", "三亚市", "通化市", "松原市", "泉州市", "永州市", "海南藏族自治州", "锡林郭勒盟", "秦皇岛市", "牡丹江市", "宝鸡市"],
          "boundaryGap": true,
          "show": true,
          "axisLabel": {
            "show": true,
            "fontSize": 12,
            "fontWeight": "normal",
            "color": "#666",
            "fontStyle": "normal"
          },
          "axisLine": {
            "show": true,
            "lineStyle": {
              "width": "1px",
              "color": "#666",
              "type": "solid"
            }
          },
          "splitLine": {
            "show": false,
            "lineStyle": {
              "color": "rgba(221, 221, 221, 1)"
            }
          },
          "axisTick": {
            "show": false
          },
          "nameTextStyle": {
            "fontSize": 14,
            "fontWeight": "normal",
            "color": "",
            "fontStyle": "normal",
            "align": "center",
            "verticalAlign": "top"
          },
          "nameLocation": "middle"
        },
        "yAxis": {
          "type": "value",
          "nameTextStyle": {
            "fontSize": 12,
            "fontWeight": "normal",
            "color": "#666",
            "fontStyle": "normal"
          },
          "axisLine": {
            "show": false,
            "lineStyle": {
              "width": "1",
              "color": "rgba(221, 221, 221, 1)"
            }
          },
          "axisLabel": {
            "show": true,
            "fontSize": 12,
            "fontWeight": "normal",
            "color": "#666",
            "fontStyle": "normal",
            "showMinLabel": false,
            "formatter": "{value}"
          },
          "splitLine": {
            "show": true,
            "lineStyle": {
              "color": "rgba(221, 221, 221, 1)",
              "type": "dashed"
            }
          },
          "axisTick": {
            "show": false
          },
          "name": "件数",
          "nameLocation": "end"
        },
        "series": [{
          "name": "件数",
          "type": "bar",
          "data": [130, 4845, 2709, 1011, 9036, 9909, 2306, 1252, 6496, 8806, 6308, 142, 2133, 3261, 4987, 4591, 3519, 5419, 1133, 9200, 3850, 7682, 6725, 2393, 8758, 7697, 307, 7423, 9663, 6136, 7470, 2583, 6452, 2610, 5833, 2705, 2176, 8758, 8642, 4190, 7733, 6882, 3171, 9130, 3799, 886, 8479, 457, 357, 2711, 5612, 4031, 3324, 5259, 1185, 3112, 1629, 893, 6089, 4057, 1635, 1651, 3874, 4715, 725, 5191, 8902, 6173, 6342, 6400, 4544, 7087, 1158, 5197, 697, 9678, 5991, 8726, 6506, 5954, 4706, 3408, 8598, 4010, 8552, 1167, 7734, 9205, 9946, 1870, 5813, 4428, 4829, 7169, 3275, 5710, 3423, 4966, 1463, 8309],
          "showSymbol": true,
          "symbolSize": 8,
          "areaStyle": null,
          "label": {
            "show": false,
            "position": "",
            "backgroundColor": "rgba(221, 221, 221, 0)",
            "fontSize": 12,
            "fontWeight": "normal",
            "fontStyle": "normal",
            "color": "#666",
            "formatter": "{c}"
          },
          "smooth": false,
          "symbol": "circle"
        }],
        "tooltip": {
          "show": true,
          "trigger": "axis",
          "backgroundColor": "#fff",
          "textStyle": {
            "color": "#666",
            "fontSize": 12,
            "fontWeight": "normal",
            "fontStyle": "normal"
          }
        },
        "textStyle": {
          "fontFamily": "Microsoft YaHei"
        },
        "dataZoom": [{
          "type": "slider",
          "show": false,
          "bottom": 20,
          "height": "20",
          "moveOnMouseMove": true,
          "borderColor": "none",
          "backgroundColor": "#f3f5f8",
          "handleColor": "#fff",
          "handleSize": 20,
          "handleStyle": {
            "backgroundColor": "#e2e4eb",
            "borderColor": "#fff",
            "shadowBlur": 4,
            "shadowOffsetX": 1,
            "shadowOffsetY": 1,
            "shadowColor": "#fff"
          },
          "start": 0,
          "end": 36
        }, {
          "type": "inside",
          "start": 0,
          "end": 35,
          "zoomOnMouseWheel": false,
          "moveOnMouseWheel": true,
          "moveOnMouseMove": true
        }]
      }
      chartInstance && setChartOption()
    }

    const setChartOption = () => {
      chartInstance && chartInstance.clear()
      chartInstance && chartInstance.setOption(option)
    }

    const renderTitle = () => {

      const titleStyle = {}
      const titleTextStyle = {}
      return (
        <div className='g-card__title' style={titleStyle}>
          <div className='g-card__title-text' style={titleTextStyle}>{props.card_title}</div>
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