export default class GlobalStyle {

  static getPageStyle(props) {
    return {
      'font-family': props.global_styleFontFamily,
      'background-color': props.global_styleThemeMode === 'dark' ? '#212a3e' : '#fff'
    }
  }
  static getPageLayout(props) {
    return {
      'width': props.global_layoutPageWidth === 'auto' ? '100%' : `1000px`,
      'margin': props.global_layoutPageWidth === 'auto' ? '' : '0 auto'
    }
  }
}