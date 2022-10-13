<template>
  <section>
    <ul>
      <li v-for="product in filteredItems" :key="product.id">
        <ProductsOverviewItem
          :product="product"
          @addProduct="$emit('addProduct', $event)"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import ProductsOverviewItem from "./ProductsOverviewItem.vue";
export default {
  name: "ProductsOverview",
  emits: ["addProduct"],
  components: {
    ProductsOverviewItem,
  },
  computed: {
    filteredItems() {
      return this.$store.getters["products/filteredItems"];
    },
  },
};
</script>

<style scoped>
section {
  background-color: #fff;
}

ul {
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
