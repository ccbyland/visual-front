export default class GlobalStyle {

  static getPageStyle(props) {
    return {
      'font-family': props.global_styleFontFamily,
      'background-color': props.global_styleThemeMode === 'dark' ? 'rgba(45,58,92,0.8)' : 'rgba(0,0,0,0)'
    }
  }

  static getPageLayout(props) {
    return {
      pageWidth: props.global_layoutPageWidth,
    }
  }
}