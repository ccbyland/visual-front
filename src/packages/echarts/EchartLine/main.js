export default {
  methods: {
    genCustomOption(option, dimensionData, measureData) {
      // xAxis 设值
      for (let key in option) {
        if (key == 'xAxis') {
          option[key]['data'] = dimensionData
        }
      }
      // series 设置
      option.series && option.series.forEach((seriesItem, seriesIndex) => {
        if (!seriesItem.data) {
          seriesItem.data = measureData[seriesItem.name]
        }
      });

      // // yAxis 设值
      // if(option.yAxis){
        
      // }

      return option
    }
  }
}