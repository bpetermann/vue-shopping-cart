<template>
  <div class="container">
    <div class="hero">
      <div class="info">
        <h2>DROP 02 SUMMER 2022</h2>
        <p>The 3 Pairs of Shoes You Need for this Summer</p>
        <button @click="selectCategory('Shoes')">Shop now -></button>
      </div>
      <img src="/assets/images/website/model.png" alt="Sneaker Model" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHero",
  methods: {
    selectCategory(category) {
      this.$store.dispatch("products/selectCategoryHandler", { category });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #da97b5;
}

.hero {
  margin: 0 auto;
  height: 20rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
}

img {
  height: 12rem;
}
@media (min-width: 40rem) {
  .hero {
    width: 80%;
  }
  img {
    height: 22rem;
    margin-bottom: 2rem;
  }
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-right: 1rem;
}
button {
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  border-bottom: 0.125rem solid transparent;
  margin: 1rem 0;
  cursor: pointer;
}

button:hover {
  border-color: #000;
}
</style>
