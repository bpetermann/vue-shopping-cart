<template>
  <ShopHeader />
  <ShopSearchbar />
  <HeroImage />
  <ProductHighlight />
</template>

<script>
import ShopHeader from "./components/layout/ShopHeader.vue";
import ShopSearchbar from "./components/layout/ShopSearchbar.vue";
import HeroImage from "./components/layout/HeroImage.vue";
import ProductHighlight from "./components/products/ProductHighlight.vue";

export default {
  components: {
    ShopHeader,
    ShopSearchbar,
    HeroImage,
    ProductHighlight,
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
