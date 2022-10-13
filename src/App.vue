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
  <TheSearchbar />
  <TheCategories />
  <TheHero />
  <span v-if="isLoading"> <BaseSpinner /></span>
  <template v-else-if="productsFetched">
    <ProductHighlight @addProduct="addToCartHandler" />
    <ProductsOverview @addProduct="addToCartHandler" />
  </template>
  <p v-else>{{ error }}</p>
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
      cart: [],
      error: null,
      isLoading: false,
      showCart: false,
    };
  },
  async mounted() {
    this.loadProducts();
  },
  computed: {
    products() {
      return this.$store.getters["products/products"];
    },
    productsFetched() {
      return !this.isLoading && this.products.length !== 0;
    },
    totalCartProducts() {
      return this.cart.reduce(function (acc, item) {
        return acc + item.amount;
      }, 0);
    },
  },
  methods: {
    async loadProducts() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("products/loadProducts");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
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
p {
  margin-top: 2rem;
  text-align: center;
}
</style>
