<template>
  <CartModal v-if="showCart" />
  <TheHeader />
  <TheSearchbar />
  <TheCategories />
  <TheHero />
  <template v-if="isLoading"> <BaseSpinner /></template>
  <template v-else-if="productsFetched">
    <ProductHighlight />
    <ProductsOverview />
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
      error: null,
      isLoading: false,
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
    showCart() {
      return this.$store.getters["cart/showCart"];
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
  },
};
</script>

<style scoped>
p {
  margin-top: 2rem;
  text-align: center;
}
</style>
