<template>
  <div class="container">
    <header>
      <h3>{{ name }}</h3>
    </header>
    <div class="product">
      <img :src="`${this.imageUrl}${name}.png`" :alt="description" />
      <div>
        <p>{{ name }}</p>
        <p>{{ description }}</p>
        <p>{{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const imageUrl = new URL("../../assets/images/products/", import.meta.url)
      .href;
    return { imageUrl };
  },
  props: {
    name: String,
    description: String,
    price: Number,
    category: String,
  },
  methods: {
    imagePath() {
      console.log(`${this.imageUrl}${this.name}.png`);
      return `${this.imageUrl}${this.name}.png`;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
  text-align: center;
}

.product {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 40rem) {
  .product {
    flex-direction: row;
    max-width: 71rem;
  }
}
img {
  height: 12rem;
}
</style>
