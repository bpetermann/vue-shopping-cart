export default {
  setProducts(state, payload) {
    state.products = payload;
  },
  setHighlightedProduct(state, payload) {
    state.highlightedProduct = payload;
  },
  setSelectedCategory(state, payload) {
    state.selectedCategory = payload;
  },
  setSelectedCategoryProducts(state, payload) {
    state.selectedCategoryProducts = payload;
  },
  setFilteredItems(state, payload) {
    state.filteredItems = payload;
  },
};
