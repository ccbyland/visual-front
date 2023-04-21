import { defineComponent } from "vue";
import "./index.scss";
import bintu from "@/assets/images/canvas-module/bingtu.png";
import zhuzhuangtu from "@/assets/images/canvas-module/zhuzhuangtu.png";
import zhexiantu from "@/assets/images/canvas-module/zhexiantu.png";
import ditu from "@/assets/images/canvas-module/ditu.png";
import biaoge from "@/assets/images/canvas-module/biaoge.png";
import tupian from "@/assets/images/canvas-module/tupian.png";
import shipin from "@/assets/images/canvas-module/shipin.png";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div className="canvas-module">
          <div className="item">
            <div className="label">图表</div>
            <div className="options">
              <img src={zhuzhuangtu} />
              <img src={zhexiantu} />
              <img src={bintu} />
              <img src={ditu} />
              <img src={biaoge} />
            </div>
          </div>
          <div className="item">
            <div className="label">媒体</div>
            <div className="options">
              <img src={tupian} />
              <img src={shipin} />
            </div>
          </div>
        </div>
      );
    };
  },
});
