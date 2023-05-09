import { events } from "@/utils/events";
import _ from "lodash";
import { useStore } from "vuex";

export default function (data) {
  const state = {
    commands: {},
    commandArray: [],
  };

  const registry = (commanObj) => {
    state.commandArray.push(commanObj);
    state.commands[commanObj.name] = (...args) => {
      const { forward } = commanObj.execute(...args);
      forward();
    };
  };

  registry({
    name: "addWidget",
    execute(newWidget) {
      let state = {
        before: data.value.widgets,
        after: (() => {
          let widgets = [...data.value.widgets];
          let newWidgets = [...widgets, newWidget];
          return newWidgets;
        })(),
      };
      return {
        forward: () => {
          data.value = { ...data.value, widgets: state.after };
        },
        back: () => {
          data.value = { ...data.value, widgets: state.before };
        },
      };
    },
  });

  registry({
    name: "updateCanvas",
    execute(newValue) {
      let state = {
        before: data.value,
        after: newValue,
      };
      return {
        forward: () => {
          data.value = state.after;
        },
        back: () => {
          data.value = state.before;
        },
      };
    },
  });

  registry({
    name: "updateWidget",
    execute({ newWidget, oldWidget }) {
      let state = {
        before: data.value.widgets,
        after: (() => {
          let widgets = [...data.value.widgets];
          const index = data.value.widgets.indexOf(oldWidget);
          if (index > -1) {
            widgets.splice(index, 1, newWidget);
          }
          return widgets;
        })(),
      };
      return {
        forward: () => {
          data.value = { ...data.value, widgets: state.after };
        },
        back: () => {
          data.value = { ...data.value, widgets: state.before };
        },
      };
    },
  });

  registry({
    name: "drag",
    init() {
      this.before = null;
      const start = () => (this.before = _.cloneDeep(data.value.widgets));
      const end = () => state.commands.drag();
      events.on("dragstart", start);
      events.on("dragend", end);
    },
    execute() {
      let before = this.before;
      let after = data.value.widgets;
      return {
        forward: () => {
          data.value = { ...data.value, widgets: after };
        },
        back: () => {
          data.value = { ...data.value, widgets: before };
        },
      };
    },
  });

  (() => {
    state.commandArray.forEach((command) => {
      if (command.init) {
        command.init();
      }
    });
  })();

  return state;
}
