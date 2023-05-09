export default {
  line: ({ id, key, query, props }) => {
    return (
      <>
        <echart-line id={id} type={key} query={query} componentStyle={props}></echart-line>
      </>
    )
  },
  bar: ({ id, key, query, props }) => {

    return (
      <>
        <echart-bar id={id} type={key} query={query} componentStyle={props}></echart-bar>
      </>
    )
  },
  pie: ({ id, key, query, props }) => {

    return (
      <>
        <echart-pie id={id} type={key} query={query} componentStyle={props}></echart-pie>
      </>
    )
  },
  map: ({ id, key, query, props }) => {

    return (
      <>
        <echart-map id={id} type={key} query={query} componentStyle={props}></echart-map>
      </>
    )
  }
}