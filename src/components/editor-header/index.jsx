import { defineComponent } from "vue";
import "./index.scss";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div className="editor-header">
          <img className="logo" src={require(`@/assets/images/logo.png`)} />
          <div className="info">八爪鱼搭建平台</div>
          <div className="operate"></div>
        </div>
      );
    };
  },
});
