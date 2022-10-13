import { createStore } from "vuex";
import productsModule from "./products/index.js";

const store = createStore({
  modules: {
    products: productsModule,
  },
});

export default store;
