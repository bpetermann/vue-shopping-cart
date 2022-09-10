<template>
  <ShopHeader />
  <ShopSearchbar @searchTermHandler="searchTermHandler" />
  <HeroImage />
  <ProductHighlight
    :name="highlightedProduct.name"
    :description="highlightedProduct.description"
    :price="highlightedProduct.price"
    :category="highlightedProduct.category"
  />
  <ProductsOverview
    :products="filteredItems"
    @selectHighlightedProduct="selectHighlightedProduct"
  />
  <ShopNewsletter />
  <ShopFooter />
</template>

<script>
import ShopHeader from "./components/layout/ShopHeader.vue";
import ShopSearchbar from "./components/layout/ShopSearchbar.vue";
import HeroImage from "./components/layout/HeroImage.vue";
import ProductHighlight from "./components/products/ProductHighlight.vue";
import ProductsOverview from "./components/products/ProductsOverview.vue";
import ShopNewsletter from "./components/layout/ShopNewsletter.vue";
import ShopFooter from "./components/layout/ShopFooter.vue";

export default {
  components: {
    ShopHeader,
    ShopSearchbar,
    HeroImage,
    ProductHighlight,
    ProductsOverview,
    ShopNewsletter,
    ShopFooter,
  },
  name: "app",
  data() {
    return {
      highlightedProduct: {
        id: "i1",
        name: "Sandals",
        description: "Maroon sandals",
        price: 24.99,
        amount: 1,
        category: "Shoes",
      },
      filteredItems: [
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
  methods: {
    selectHighlightedProduct(prodId) {
      const selectedProduct = this.products.filter(
        (prod) => prod.id === prodId
      );
      this.highlightedProduct = selectedProduct[0];
    },
    searchTermHandler(text) {
      this.filteredItems = this.products.filter((prod) => {
        return prod.description.toLowerCase().includes(text.toLowerCase());
      });
    },
  },
};
</script>

<style scoped></style>
