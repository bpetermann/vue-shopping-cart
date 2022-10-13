<template>
  <section>
    <div>
      <button
        :class="{ active: categoryActive === 'Shoes' }"
        @click="selectCategory('Shoes')"
      >
        Shoes
      </button>
      <button
        :class="{ active: categoryActive === 'Bags' }"
        @click="selectCategory('Bags')"
      >
        Bags
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheCategories",
  computed: {
    categoryActive() {
      return this.$store.getters["products/selectedCategory"];
    },
  },
  methods: {
    selectCategory(category) {
      this.$store.dispatch("products/selectCategoryHandler", { category });
    },
  },
};
</script>

<style scoped>
section {
  height: 3rem;
  background: #fff;
  border-bottom: 1px solid #d0d1d3;
}
div {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}
button {
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  border-bottom: 0.125rem solid transparent;
}

button:hover {
  border-bottom: 0.125rem solid #000;
}

.active {
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  border-bottom: 0.125rem solid transparent;
  border-bottom: 0.125rem solid #000;
}
</style>
