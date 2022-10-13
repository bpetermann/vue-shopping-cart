import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";

import "./assets/main.css";

const app = createApp(App);

app.use(store);

app.mount("#app");
