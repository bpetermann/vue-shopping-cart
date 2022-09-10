<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <ProductsOverviewItem
          :product-name="product.name"
          :product-id="product.id"
          :product-description="product.description"
          :product-price="product.price"
          :product-amount="product.amount"
          :product-category="product.category"
          @selectHighlightedProduct="$emit('selectHighlightedProduct', $event)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductsOverviewItem from "./ProductsOverviewItem.vue";
export default {
  emits: ["selectHighlightedProduct"],
  components: {
    ProductsOverviewItem,
  },
  props: {
    products: Array,
  },
};
</script>

<style scoped>
div {
  background-color: #fff;
}

ul {
  width: 95%;
  margin: 0 auto;
  height: minmax(20rem, auto);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;
}

@media (min-width: 40rem) {
  ul {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
}

li {
  list-style: none;
}
</style>
