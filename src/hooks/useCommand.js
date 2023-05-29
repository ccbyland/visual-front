import { events } from "@/utils/events";
import _ from "lodash";

export default function (data) {
  const state = {
    current: -1,
    queue: [],
    commands: {},
    commandArray: [],
  };

  const registry = (commanObj) => {
    state.commandArray.push(commanObj);
    state.commands[commanObj.name] = (...args) => {
      debugger
      const { forward, back } = commanObj.execute(...args);
      forward();

      // 历史记录队列，当前操作游标
      let { queue, current } = state;
      if (queue.length > 0) {
        queue = queue.slice(0, current + 1);
        state.queue = queue;
      }

      queue.push({ forward, back }); // 队列保存指令的前进后退功能
      state.current = current + 1;
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
        selectedIndex: data.value.widgetSelectedIndex,
      };
      return {
        forward: () => {
          data.value = {
            ...data.value,
            widgetSelectedIndex: state.selectedIndex,
            widgets: state.after,
          };
        },
        back: () => {
          data.value = {
            ...data.value,
            widgetSelectedIndex: state.selectedIndex,
            widgets: state.before,
          };
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
        selectedIndex: data.value.widgetSelectedIndex,
      };
      return {
        forward: () => {
          data.value = {
            ...data.value,
            widgetSelectedIndex: state.selectedIndex,
            widgets: state.after,
          };
        },
        back: () => {
          data.value = {
            ...data.value,
            widgetSelectedIndex: state.selectedIndex,
            widgets: state.before,
          };
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
      let selectedIndex = data.value.widgetSelectedIndex;
      return {
        forward: () => {
          data.value = {
            ...data.value,
            widgetSelectedIndex: selectedIndex,
            widgets: after,
          };
        },
        back: () => {
          data.value = {
            ...data.value,
            widgetSelectedIndex: selectedIndex,
            widgets: before,
          };
        },
      };
    },
  });

  // 前进
  registry({
    name: "forward",
    execute() {
      return {
        forward() {
          debugger
          let item = state.queue[state.current + 1];
          if (item) {
            item.forward && item.forward();
            state.current++;
          }
        },
      };
    },
  });

  // 撤销
  registry({
    name: "back",
    execute() {
      return {
        forward() {
          debugger
          if (state.current === -1) return; // 没有可撤销的了
          let item = state.queue[state.current];
          if (item) {
            item.back && item.back();
            state.current--;
          }
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
