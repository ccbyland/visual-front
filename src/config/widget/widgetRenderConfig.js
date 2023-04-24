import ComponentStyle from '@/utils/componentStyle'

export default {
  line: ({ id, key, props }) => {
    const { chartStyle } = ComponentStyle.getCardStyle(props)
    return (
      <>
        <div className='g-card__widget' style={chartStyle}>
          <echart-line id={id} type={key} componentStyle={props}></echart-line>
        </div>
      </>
    )
  },
  bar: ({ id, key, props }) => {

    const { chartStyle } = ComponentStyle.getCardStyle(props)
    return (
      <>
        <div className='g-card__widget' style={chartStyle}>
          <echart-bar id={id} type={key} componentStyle={props}></echart-bar>
        </div>
      </>
    )
  },
  pie: ({ id, key, props }) => {

    const { chartStyle } = ComponentStyle.getCardStyle(props)
    return (
      <>
        <div className='g-card__widget' style={chartStyle}>
          <echart-pie id={id} type={key} componentStyle={props}></echart-pie>
        </div>
      </>
    )
  },
  map: ({ id, key, props }) => {

    const { chartStyle } = ComponentStyle.getCardStyle(props)
    return (
      <>
        <div className='g-card__widget' style={chartStyle}>
          <echart-map id={id} type={key} componentStyle={props}></echart-map>
        </div>
      </>
    )
  }
}