import { computed } from "vue";

export default function (data) {

    const lastSelectWidget = computed(() => data.value.widgets[data.value.widgetSelectedIndex])

    /**
     * 重置所有组件为未选中
     */
    const clearAllWidgetFocus = () => {
        data.value.widgets.forEach(widget => {
            widget.focus = false
        });
    }

    /**
     * 选中某个组件
     * @param {*} e 
     * @param {*} widget 
     * @param {*} widgetIndex 
     */
    const mousedownCanvasWidget = (e, widget, widgetIndex) => {
        e.preventDefault()
        e.stopPropagation()
        clearAllWidgetFocus()
        data.value.widgets[widgetIndex] = { ...widget, focus: true }

        data.value = { ...data.value, widgetSelectedIndex: widgetIndex }
    }

    /**
     * 选中画布
     */
    const mousedownCanvas = () => {
        clearAllWidgetFocus()
        data.value = { ...data.value, widgetSelectedIndex: -1 }
    }

    return { mousedownCanvas, mousedownCanvasWidget, lastSelectWidget }
}