export default {
  area: {
    area_type: {
      id: 'area_type',
      queryAxis: 'row',
      label: '类别轴/维度',
      value: [],
      rule: {
        type: 'dimension',
        required: true
      }
    },
    area_value: {
      id: 'area_value',
      queryAxis: 'column',
      label: '值轴/度量',
      value: [],
      rule: {
        type: 'measure',
        required: true
      }
    }
  }
}