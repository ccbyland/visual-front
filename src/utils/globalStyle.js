export default class GlobalStyle {

  static getPageStyle(props) {
    return {
      'font-family': props.global_styleFontFamily,
      'background-color': props.global_styleThemeMode === 'dark' ? '#000' : '#fff'
    }
  }

  static getPageLayout(props) {
    return {
      pageWidth: props.global_layoutPageWidth,
    }
  }
}