import { useStore } from "vuex"

export default function (data) {

  const store = useStore()

  const state = {
    commands: {}
  }

  const registry = (commanObj) => {
    state.commands[commanObj.name] = (...args) => {
      const { forward } = commanObj.execute(...args)
      forward()
    }
  }

  registry({
    name: 'addWidget',
    execute(newWidget) {
      let state = {
        before: data.widgets,
        after: (() => {
          let widgets = [...data.widgets]
          let newWidgets = [...widgets, newWidget]
          return newWidgets
        })(),
      }
      return {
        forward: () => {
          data = { ...data, widgets: state.after }
          store.dispatch("updateEditorWidgetData", data);
        },
        back: () => {
          data = { ...data, widgets: state.before }
          store.dispatch("updateEditorWidgetData", data);
        }
      }
    }
  })

  registry({
    name: 'updateWidget',
    execute({ newWidget, oldWidget }) {
      let state = {
        before: data.value.widgets,
        after: (() => {
          let widgets = [...data.value.widgets]
          const index = data.value.widgets.indexOf(oldWidget)
          if (index > -1) {
            widgets.splice(index, 1, newWidget)
          }
          return widgets
        })()
      }
      return {
        forward: () => {
          data = { ...data, widgets: state.after }
          store.dispatch("updateEditorWidgetData", data);
        },
        back: () => {
          data = { ...data, widgets: state.before }
          store.dispatch("updateEditorWidgetData", data);
        }
      }
    }
  })

  return state
}