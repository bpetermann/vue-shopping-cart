<template>
  <div class="container">
    <div class="product">
      <img :src="`${this.imageUrl}${name}.png`" :alt="description" />
      <div class="product-info">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <p>€{{ price }}</p>
        <form>
          <select>
            <option value="one">One Size</option>
          </select>
          <button>Add To Cart</button>
        </form>
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
      return `${this.imageUrl}${this.name}.png`;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #ff85a4;
  padding: 1rem;
}

.product {
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.product-info {
  width: 20rem;
  height: 16rem;
  text-align: center;
  margin-left: 0.5rem;
}

@media (min-width: 40rem) {
  .product {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 61rem;
  }

  .product-info {
    text-align: left;
  }
}
img {
  width: 12rem;
  height: 16rem;
}
form {
  width: 100%;
}

form select {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 2;
  width: 100%;
  margin-bottom: 2rem;
  display: block;
  width: 100%;
  background-color: #ccc;
  border: 0.06rem solid #d0d1d3;
}

button {
  width: 100%;
  cursor: pointer;
  height: 2.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #1a1a1a;
  color: #fff;
  border: none;
}
</style>
