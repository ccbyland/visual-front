import { useStore } from "vuex"

export default function (data) {

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
        before: data.value.widgets,
        after: (() => {
          let widgets = [...data.value.widgets]
          let newWidgets = [...widgets, newWidget]
          return newWidgets
        })(),
      }
      return {
        forward: () => {
          data.value = { ...data.value, widgets: state.after }
        },
        back: () => {
          data.value = { ...data.value, widgets: state.before }
        }
      }
    }
  })

  registry({
    name: 'updateCanvas',
    execute(newValue) {
      let state = {
        before: data.value,
        after: newValue
      }
      return {
        forward: () => {
          data.value = state.after
        },
        back: () => {
          data.value = state.before
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
          data.value = { ...data.value, widgets: state.after }
        },
        back: () => {
          data.value = { ...data.value, widgets: state.before }
        }
      }
    }
  })

  return state
}