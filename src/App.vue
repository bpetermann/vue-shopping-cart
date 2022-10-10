<template>
  <CartModal
    v-if="showCart"
    :cart="cart"
    @toggleCart="toggleCartModal"
    @addProduct="addToCartHandler"
    @removeProduct="removeProductHandler"
  />
  <TheHeader
    @toggleCart="toggleCartModal"
    :totalCartProducts="totalCartProducts"
  />
  <TheSearchbar @searchTermHandler="searchTermHandler" />
  <TheCategories
    @selectCategory="selectCategoryHandler"
    :active="categoryActive"
  />
  <TheHero @selectCategory="selectCategoryHandler" />
  <span v-if="isLoading">
    <img
      class="loading"
      src="/assets/images/website/spinner.gif"
      alt="Loading..."
  /></span>
  <template v-else-if="!isLoading && products.length !== 0">
    <ProductHighlight
      :product="highlightedProduct"
      @addProduct="addToCartHandler"
    />
    <ProductsOverview
      :products="filteredItems"
      @selectHighlightedProduct="selectHighlightedProduct"
      @addProduct="addToCartHandler"
    />
  </template>
  <p v-else>Something went wrong, please try again</p>
  <TheFooter />
</template>

<script>
import CartModal from "./components/cart/CartModal.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheSearchbar from "./components/layout/TheSearchbar.vue";
import TheCategories from "./components/layout/TheCategories.vue";
import TheHero from "./components/layout/TheHero.vue";
import ProductHighlight from "./components/products/ProductHighlight.vue";
import ProductsOverview from "./components/products/ProductsOverview.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    CartModal,
    TheHeader,
    TheSearchbar,
    TheCategories,
    TheHero,
    ProductHighlight,
    ProductsOverview,
    TheFooter,
  },
  name: "app",
  data() {
    return {
      highlightedProduct: null,
      cart: [],
      isLoading: false,
      showCart: false,
      selectedCategory: "Shoes",
      selectedCategoryProducts: null,
      searchTerm: "",
      filteredItems: null,
      products: [],
    };
  },
  async mounted() {
    this.isLoading = true;
    const response = await fetch(
      "https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems",
      {}
    );

    if (!response.ok) {
      this.isLoading = false;
      throw new Error("Something went wrong, please try again");
    }

    const data = await response.json();
    this.products = data;
    this.selectCategoryHandler(this.selectedCategory);
    this.selectHighlightedProduct(this.selectedCategoryProducts[0].id);
    this.isLoading = false;
  },
  computed: {
    totalCartProducts() {
      return this.cart.reduce(function (acc, item) {
        return acc + item.amount;
      }, 0);
    },
    categoryActive() {
      return this.selectedCategory;
    },
  },
  methods: {
    selectHighlightedProduct(prodId) {
      const selectedProduct = this.filteredItems.filter(
        (prod) => prod.id === prodId
      );
      this.highlightedProduct = selectedProduct[0];
    },
    selectCategoryHandler(category) {
      this.selectedCategory = category;
      this.selectedCategoryProducts = this.products.filter((prod) => {
        return prod.category.toLowerCase().includes(category.toLowerCase());
      });
      this.searchTermHandler(this.searchTerm);
    },
    searchTermHandler(text) {
      this.searchTerm = text;
      this.filteredItems = this.selectedCategoryProducts.filter((prod) => {
        return prod.description.toLowerCase().includes(text.toLowerCase());
      });
    },
    addToCartHandler(shopItem) {
      const existingCartItemIndex = this.cart.findIndex(
        (item) => item.name === shopItem.name
      );
      const existingCartItem = this.cart[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems = [...this.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
        this.cart = updatedItems;
      } else {
        this.cart.push(shopItem);
      }
    },
    removeProductHandler(shopItem) {
      const existingCartItemIndex = this.cart.findIndex(
        (item) => item.name === shopItem.name
      );
      const existingCartItem = this.cart[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...this.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
        this.cart = updatedItems;
      } else {
        this.cart = this.cart.filter((item) => item.name !== shopItem.name);
      }
    },
    toggleCartModal() {
      this.showCart = !this.showCart;
    },
  },
};
</script>

<style scoped>
.loading {
  width: 2rem;
  height: 2rem;
  margin: auto;
  padding-top: 4rem;
  display: block;
}

p {
  margin-top: 2rem;
  text-align: center;
}
</style>
