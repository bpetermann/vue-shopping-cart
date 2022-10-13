import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      highlightedProduct: null,
      selectedCategory: "Shoes",
      selectedCategoryProducts: null,
      searchTerm: "",
      filteredItems: null,
    };
  },
  mutations,
  actions,
  getters,
};
