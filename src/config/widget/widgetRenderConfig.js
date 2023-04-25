import ComponentStyle from '@/utils/componentStyle'

export default {
  line: ({ id, key, query, props }) => {
    const { chartStyle } = ComponentStyle.getGCardStyle(props)
    return (
      <>
        <div className='g-card__widget' style={chartStyle}>
          <echart-line id={id} type={key} query={query} componentStyle={props}></echart-line>
        </div>
      </>
    )
  },
  bar: ({ id, key, query, props }) => {

    const { chartStyle } = ComponentStyle.getGCardStyle(props)
    return (
      <>
        <div className='g-card__widget' style={chartStyle}>
          <echart-bar id={id} type={key} query={query} componentStyle={props}></echart-bar>
        </div>
      </>
    )
  },
  pie: ({ id, key, query, props }) => {

    const { chartStyle } = ComponentStyle.getGCardStyle(props)
    return (
      <>
        <div className='g-card__widget' style={chartStyle}>
          <echart-pie id={id} type={key} query={query} componentStyle={props}></echart-pie>
        </div>
      </>
    )
  },
  map: ({ id, key, query, props }) => {

    const { chartStyle } = ComponentStyle.getGCardStyle(props)
    return (
      <>
        <div className='g-card__widget' style={chartStyle}>
          <echart-map id={id} type={key} query={query} componentStyle={props}></echart-map>
        </div>
      </>
    )
  }
}