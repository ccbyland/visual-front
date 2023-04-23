import { defineComponent, inject, ref } from "vue";
import draggable from "vuedraggable";
import "./index.scss";

export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    
    const widgetConfig = inject('widgetConfig')
    console.error('widgetConfig', widgetConfig)

    const state = ref([
      { x: 0, y: 0, w: 6, h: 1, i: "0" },
      { x: 6, y: 0, w: 6, h: 2, i: "1" },
      { x: 4, y: 0, w: 2, h: 5, i: "2" },
      { x: 6, y: 0, w: 2, h: 3, i: "3" },
      { x: 8, y: 0, w: 2, h: 3, i: "4" },
      { x: 10, y: 0, w: 2, h: 3, i: "5" },
    ]);
    // const aaa = ref([]);
    // const draggableSlots = {
    //   item: () => {
    //     return null;
    //   },
    // };
    return () => {
      return (
        <div className="editor-canvas">
          {/* <draggable
            v-model={aaa.value}
            v-slots={draggableSlots}
            class="options"
            group={{ name: "tb-item" }}
            sort={false}
          > */}
          <grid-layout
            v-model:layout={state.value}
            col-num={12}
            row-height={20}
            is-draggable={true}
            is-resizable={true}
            is-mirrored={false}
            vertical-compact={true}
            margin={[10, 10]}
            use-css-transforms={true}
          >
            {state.value.map((item) => {
              return (
                <grid-item
                  className="aaa"
                  x={item.x}
                  y={item.y}
                  w={item.w}
                  h={item.h}
                  i={item.i}
                >
                  {item.i}
                </grid-item>
              );
            })}
          </grid-layout>
          {/* </draggable> */}
        </div>
      );
    };
  },
});
