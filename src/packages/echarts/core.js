import EmptyImg from "@/assets/images/card/empty.png";
import { computed, getCurrentInstance, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import { events } from "@/utils/events";
import { genCompleteChartOption } from "@/utils/chartOption";
import ComponentStyle from "@/utils/componentStyle";
import _ from "lodash";

export default {
  props: {
    id: { type: String }, // 图表ID
    type: { type: String }, // 图表类型
    query: { type: Object }, // 配置字段数据
    globalStyle: { type: Object }, // 图表全局配置数据
    componentStyle: { type: Object }, // 图表独立配置数据
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const store = useStore();

    let offEvent = null;
    let observer = null;
    let chartInstance = null; // 当前图表实例对象
    let dimensionData = [];
    let measureData = [];
    let data = null;
    let fields = {
      dimension: [], // 维度
      measure: [], // 度量
    };
    let option = {
      series: [],
      legend: {},
      xAxis: {
        type: "category",
        data: [],
      },
    };

    const empty = ref(false);
    const chartData = computed(() => store.state.chartData[props.id]);

    const emptyImg = computed(() => Proxy.EmptyImg || EmptyImg);

    /**
     * 添加resize事件
     */
    const addResizeEvent = () => {
      const resizeObserver = window.ResizeObserver;
      const callback = (domList) => {
        if (!domList[0]) return;
        chartInstance && setSize();
      };
      observer = new resizeObserver(callback);
      const gridItemDom = document.getElementById(`grid-item__${props.id}`);
      observer.observe(gridItemDom);
    };

    /**
     * 图表数据更新
     * @param {*} options
     */
    const chartDataChange = (options = {}) => {
      // 图表数据
      const { chartData } = options;

      console.error('chartData', chartData)

      // 关闭无数据状态
      if (chartData) {
        empty.value = false;
      }
      // 解析图表数据
      if (chartData && chartData.data) {
        data = chartData.data;
        // store.dispatch("updateChartData", {
        //   id: props.id,
        //   data,
        // });
      }
      // 不存在数据则终止更新
      if (!data) {
        return;
      }
      // 更新图表
      setTimeout(() => {
        initMaterial(data);
      }, 0);
    };

    /**
     * 绑定事件
     * @returns
     */
    const addEvent = () => {
      /**
       * 图表数据更新
       */
      events.on(`chart_data_change_${props.id}`, chartDataChange);
      return () => {
        events.off(`chart_data_change_${props.id}`, chartDataChange);
      };
    };

    /**
     * 检测字段是否有效
     * @returns
     */
    const checkQueryValid = () => {
      // 该小部件对应的 字段-领域 是否有配置
      if (!props.query.area || !props.query.area.length) {
        return false;
      }
      // 遍历所有领域
      for (const item of props.query.area) {
        // 必填 且 没有填值
        if (item.rule && item.rule.required && !item.value.length) {
          return false;
        }
        return true;
      }
    };

    /**
     * 转换图表需要的维度、度量格式数据
     * @param {*} chartData
     * @returns
     */
    const genOptionData = (chartData) => {
      // 数据为空
      if (!Array.isArray(chartData) || !chartData.length) {
        return;
      }
      // 维度数据 TODO
      if (fields.dimension.length) {
        dimensionData = chartData.map((item) => item[fields.dimension[0]]);
      }
      // 度量数据
      if (fields.measure.length) {
        measureData = fields.measure.reduce((result, cur) => {
          // 获取该度量的值列表数据，并以度量name为key存储
          result[cur] = chartData.map((item) => item[cur]);
          return result;
        }, {});
      }
    };

    /**
     * 生成图表字段数据（维度、度量 对应的名称）
     * @returns
     */
    const genOptionFields = () => {
      // 该小部件对应的 字段-领域 是否有配置
      if (!props.query.area || !props.query.area.length) {
        return;
      }
      // 初始化数据容器
      fields = {
        dimension: [],
        measure: [],
      };
      // 遍历该配置
      props.query.area.forEach((item) => {
        // 当前领域是否配置type（对应：dimension、measure等）
        if (item.rule && item.rule.type) {
          // 领域 为 类目轴 或 值轴
          if (item.queryName == "area_type" || item.queryName == "area_value") {
            // 遍历用户选择的的字段
            item.value.forEach((valueItem) => {
              // 把 字段 放到对应领域的容器中去
              fields[item.rule.type].push(valueItem.name);
            });
          }
        }
      });
    };

    /**
     * 生成该图表options参数（series、legend）
     * @returns
     */
    const genOptionProps = () => {
      // 该小部件对应的 字段-领域 是否有配置
      if (!props.query.area || !props.query.area.length) {
        return;
      }
      // 遍历该配置
      props.query.area.forEach((item) => {
        // 当前领域是否配置type（对应：dimension、measure等）
        if (item.rule && item.rule.type) {
          // 领域 为值轴
          if (item.queryName == "area_value") {
            let series = [];
            let legendData = [];
            // 遍历当前值列表
            item.value.forEach((valueItem, valueIndex) => {
              // 将标准化后的值放入series中
              if (!series[valueIndex]) {
                series.push({ name: valueItem.name });
              }
              //
              if (!legendData[valueIndex]) {
                legendData.push({ name: valueItem.name });
              }
            });
            // 给每个值添加type属性，同时放入option.series中
            option.series = series.map((seriesItem) => {
              return { ...seriesItem, type: props.type };
            });
            option.legendData = legendData
          }
        }
      });
    };

    /**
     * 生成报表参数
     * @param {*} chartData
     * @returns
     */
    const genOption = (chartData) => {
      // 检测字段是否有效
      if (!checkQueryValid()) {
        empty.value = true;
        return;
      }
      // 生成图表字段数据（维度、度量 对应的名称）
      genOptionFields();
      // 生成该图表options参数（series、legend）
      genOptionProps();
      // 转换图表需要的维度、度量格式数据
      genOptionData(chartData);
      // 获取图表option数据
      if (option && dimensionData.length && Object.keys(measureData).length) {
        option = proxy.genCustomOption(option, dimensionData, measureData);
      } else {
        option = proxy.defaultOption;
      }
      // 更新图表大小
      setSize();
      if (!empty.value && chartInstance) {
        // 设置option
        setOption();
      }
    };

    /**
     * 设置option
     */
    const setOption = () => {
      chartInstance && chartInstance.clear();
      option = genCompleteChartOption(option);
      chartInstance && chartInstance.setOption(option);
    };

    /**
     * 更新图表大小
     */
    const setSize = () => {
      const rect = ComponentStyle.calChartClientRect(
        props.componentStyle,
        props.id
      );
      if (!empty.value && chartInstance) {
        chartInstance.resize(rect);
      }
    };
    /**
     * 初始化容器
     * @returns
     */
    const init = () => {
      if (chartInstance) {
        return;
      }
      // 获取图表容器
      const chartDom = document.getElementById(props.id);
      if (!chartDom) {
        return;
      }
      // 图表初始化
      chartInstance = proxy.$echarts.init(chartDom);
      if (!chartInstance) {
        console.warn("[init] echarts 初始化DOM失败");
        return;
      }
      // 事件绑定
      addResizeEvent();
    };

    /**
     * 销毁图表
     * @returns
     */
    const destroyChart = () => {
      if (proxy.render) return;
      observer && observer.disconnect();
      chartInstance && chartInstance.dispose();
      chartInstance = null;
    };

    /**
     * 初始化图表
     * @param {*} data
     * @returns
     */
    const initMaterial = (chartData) => {
      if (empty.value) {
        return;
      }
      let cloneChartData = _.cloneDeep(chartData);
      // 初始化容器
      init();
      // 初始化option
      genOption(cloneChartData);
    };

    onMounted(() => {
      if (chartData.value) {
        empty.value = false;
        initMaterial(chartData.value);
      } else {
        empty.value = true;
      }
      offEvent = addEvent();
    });

    onUnmounted(() => {
      destroyChart();
      offEvent && offEvent();
    });

    const renderTitle = () => {
      const componentStyle = props.componentStyle;
      const {
        card_titleVisible,
        card_titleText,
        card_titleStyle,
        card_backgroundStyle,
        card_dividerVisible,
        card_dividerStyle,
      } = componentStyle;

      if (!card_titleVisible) {
        return null;
      }
      const titleStyle = {};
      if (card_backgroundStyle.backgroundColor) {
        titleStyle.background = card_backgroundStyle.backgroundColor;
      }
      if (card_dividerVisible && card_dividerStyle.color) {
        titleStyle.borderBottom = `${card_dividerStyle.width}px solid ${card_dividerStyle.color}`;
      }
      const titleTextStyle = {
        color: card_titleStyle.colorPicker,
        fontSize: card_titleStyle.fontSize + "px",
        fontWeight:
          card_titleStyle.fontStyle.indexOf("bold") > -1 ? "bold" : "",
        fontStyle:
          card_titleStyle.fontStyle.indexOf("italic") > -1 ? "italic" : "",
        textAlign: card_titleStyle.textAlign,
      };

      return (
        <div className="g-card__title" style={titleStyle}>
          <div className="g-card__title-text" style={titleTextStyle}>
            {card_titleText.text}
          </div>
        </div>
      );
    };

    const renderEmpty = () => {
      return (
        <div className="g-card__empty">
          <img className="g-card__empty-icon" src={emptyImg.value}></img>
          <div className="g-card__empty-text">当前图表暂无数据</div>
        </div>
      );
    };

    const renderCanvas = () => {
      const chartStyle = {};
      return (
        <div className="g-card__chart" style={chartStyle}>
          <div className="g-card__chart-canvas" v-show={!empty.value}>
            <div id={props.id}></div>
          </div>
        </div>
      );
    };

    return () => {
      const componentStyle = props.componentStyle;
      const globalStyle = props.globalStyle;
      const { global_styleCardRadius } = globalStyle;
      const {
        card_containerBackgroundVisible,
        card_containerBackgroundStyle,
        card_containerBorderVisible,
        card_containerBorderStyle,
      } = componentStyle;

      const containerStyle = {};
      if (
        card_containerBackgroundVisible &&
        card_containerBackgroundStyle.color
      ) {
        containerStyle.background = card_containerBackgroundStyle.color;
      }
      if (card_containerBorderVisible && card_containerBorderStyle.color) {
        containerStyle.border = `${card_containerBorderStyle.width}px solid ${card_containerBorderStyle.color}`;
      }

      switch (global_styleCardRadius) {
        case "none":
          containerStyle["borderRadius"] = "0";
          break;
        case "min":
          containerStyle["borderRadius"] = "5px";
          break;
        case "max":
          containerStyle["borderRadius"] = "10px";
          break;
      }

      return (
        <div className="g-card__widget" style={containerStyle}>
          {renderTitle()}
          {empty.value ? renderEmpty() : renderCanvas()}
        </div>
      );
    };
  },
};
