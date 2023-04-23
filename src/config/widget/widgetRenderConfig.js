import ComponentStyle from '@/utils/componentStyle'

export default {
  line: ({ props }) => {

    const { chartStyle } = ComponentStyle.getCardStyle(props)

    // const { prefixComponent, suffixComponent }

    return (
      <>
        <div className='g-card__chart' style={chartStyle}>
          <echart-line></echart-line>
        </div>
      </>
    )
  },
  bar: ({ props }) => {

    const { chartStyle } = ComponentStyle.getCardStyle(props)

    // const { prefixComponent, suffixComponent }

    return (
      <>
        <div className='g-card__chart' style={chartStyle}>
          <echart-bar></echart-bar>
        </div>
      </>
    )
  },
  pie: ({ props }) => {

    const { chartStyle } = ComponentStyle.getCardStyle(props)

    // const { prefixComponent, suffixComponent }

    return (
      <>
        <div className='g-card__chart' style={chartStyle}>
          <echart-pie></echart-pie>
        </div>
      </>
    )
  },
  map: ({ props }) => {

    const { chartStyle } = ComponentStyle.getCardStyle(props)

    // const { prefixComponent, suffixComponent }

    return (
      <>
        <div className='g-card__chart' style={chartStyle}>
          <echart-map></echart-map>
        </div>
      </>
    )
  }
}