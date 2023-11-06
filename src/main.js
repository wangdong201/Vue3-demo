import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App";
import "ant-design-vue/dist/reset.css";
import Router from "./router";

import "./index.css";

const app = createApp(App);

app.use(Router).use(Antd);

app.mount("#app");
