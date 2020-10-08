import { createApp } from "vue";
import "./lib/gulu.scss";
import "./index.scss";
// @ts-ignore
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
