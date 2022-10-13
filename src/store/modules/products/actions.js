export default {
  async loadProducts(context) {
    const response = await fetch(
      "https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems",
      {}
    );

    if (!response.ok) {
      this.isLoading = false;
      throw new Error("Something went wrong, please try again");
    }

    const data = await response.json();
    await context.commit("setProducts", data);
    await context.dispatch("selectCategoryHandler", {
      category: context.getters.selectedCategory,
    });
    context.dispatch("selectHighlightedProduct", {
      prodId: context.getters.selectedCategoryProducts[0].id,
    });
  },

  selectCategoryHandler(context, payload) {
    const selectedCategoryProducts = context.getters.products.filter((prod) => {
      return prod.category
        .toLowerCase()
        .includes(payload.category.toLowerCase());
    });

    context.commit("setSelectedCategoryProducts", selectedCategoryProducts);
    context.commit("setSelectedCategory", payload.category);
    context.dispatch("searchTermHandler", {
      searchTerm: context.getters.searchTerm,
    });
  },

  searchTermHandler(context, payload) {
    const searchTerm = payload.searchTerm;
    const filteredItems = context.getters.selectedCategoryProducts.filter(
      (prod) => {
        return prod.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
    );
    context.commit("setFilteredItems", filteredItems);
  },

  selectHighlightedProduct(context, payload) {
    const selectedProduct = context.getters.filteredItems.filter(
      (prod) => prod.id === payload.prodId
    );

    context.commit("setHighlightedProduct", selectedProduct[0]);
  },
};
