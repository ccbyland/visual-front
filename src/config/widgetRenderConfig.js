export default {
  line: ({ id, key, query, props, globalStyle }) => {
    return (
      <>
        <echart-line
          id={id}
          type={key}
          query={query}
          globalStyle={globalStyle}
          componentStyle={props}
        ></echart-line>
      </>
    );
  },
  bar: ({ id, key, query, props, globalStyle }) => {
    return (
      <>
        <echart-bar
          id={id}
          type={key}
          query={query}
          globalStyle={globalStyle}
          componentStyle={props}
        ></echart-bar>
      </>
    );
  },
  pie: ({ id, key, query, props, globalStyle }) => {
    return (
      <>
        <echart-pie
          id={id}
          type={key}
          query={query}
          globalStyle={globalStyle}
          componentStyle={props}
        ></echart-pie>
      </>
    );
  },
  map: ({ id, key, query, props, globalStyle }) => {
    return (
      <>
        <echart-map
          id={id}
          type={key}
          query={query}
          globalStyle={globalStyle}
          componentStyle={props}
        ></echart-map>
      </>
    );
  },
};
