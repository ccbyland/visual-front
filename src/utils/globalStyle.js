export default class GlobalStyle {
  static getPageStyle(props) {
    return {
      "font-family": props.global_styleFontFamily,
    };
  }
  static getGridMarginArr(props) {
    const { global_styleCardMangin } = props;
    let marginArr = [];
    switch (global_styleCardMangin) {
      case "compact":
        marginArr = [10, 10];
        break;
      case "convention":
        marginArr = [20, 20];
        break;
    }
    return marginArr;
  }
  static getPageClass(props) {
    return props.global_styleThemeMode === "dark"
      ? "theme-dark"
      : "theme-light";
  }
  static getPageLayout(props) {
    return {
      width: props.global_layoutPageWidth === "auto" ? "100%" : `1000px`,
      margin: props.global_layoutPageWidth === "auto" ? "" : "0 auto",
    };
  }
}
