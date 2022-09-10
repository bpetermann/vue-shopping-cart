<template>
  <ShopHeader />
  <ShopSearchbar />
  <HeroImage />
  <ProductHighlight
    :name="products[1].name"
    :description="products[1].description"
    :price="products[1].price"
    :category="products[1].category"
  />
  <ProductsOverview :products="products" />
</template>

<script>
import ShopHeader from "./components/layout/ShopHeader.vue";
import ShopSearchbar from "./components/layout/ShopSearchbar.vue";
import HeroImage from "./components/layout/HeroImage.vue";
import ProductHighlight from "./components/products/ProductHighlight.vue";
import ProductsOverview from "./components/products/ProductsOverview.vue";

export default {
  components: {
    ShopHeader,
    ShopSearchbar,
    HeroImage,
    ProductHighlight,
    ProductsOverview,
  },
  name: "app",
  data() {
    return {
      products: [
        {
          id: "i1",
          name: "Sandals",
          description: "Maroon sandals",
          price: 24.99,
          amount: 1,
          category: "Shoes",
        },
        {
          id: "i2",
          name: "Brogues",
          description: "Mint green lace up brogues",
          price: 85.99,
          amount: 1,
          category: "Shoes",
        },
        {
          id: "i3",
          name: "Sneakers",
          description: "Multi-coloured Sneakers",
          price: 69.99,
          amount: 1,
          category: "Shoes",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
