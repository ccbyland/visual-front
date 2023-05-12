export default class GlobalStyle {
  static getPageStyle(props) {
    return {
      "font-family": props.global_styleFontFamily,
    };
  }
  static getPageClass(props) {
    return  props.global_styleThemeMode === "dark" ? "theme-dark" : "theme-light"
  }
  static getPageLayout(props) {
    return {
      width: props.global_layoutPageWidth === "auto" ? "100%" : `1000px`,
      margin: props.global_layoutPageWidth === "auto" ? "" : "0 auto",
    };
  }
}
