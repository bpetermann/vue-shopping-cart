import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

import "./assets/main.css";

const app = createApp(App);
app.use(store);

app.component("BaseSpinner", BaseSpinner);

app.mount("#app");
