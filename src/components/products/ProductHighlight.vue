<template>
  <section>
    <div class="product">
      <img
        :src="`${this.imageUrl}${highlightedProduct.name}.png`"
        :alt="highlightedProduct.description"
      />
      <div class="product-info">
        <h2>{{ highlightedProduct.name }}</h2>
        <p>{{ highlightedProduct.description }}</p>
        <p>€{{ highlightedProduct.price }}</p>
        <form @submit.prevent="addToCart">
          <select>
            <option value="one">One Size</option>
          </select>
          <button :class="buttonStyle">
            <span v-if="buttonStyle.includes('loading')">
              <img
                class="spinner"
                src="/assets/images/website/spinner.gif"
                alt="Loading..."
            /></span>
            <span v-else> Add To Cart</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductHighlight",
  setup() {
    const imageUrl = "/vue-shopping-cart/assets/images/products/";
    return { imageUrl };
  },
  data() {
    return {
      buttonStyle: "add-btn",
    };
  },
  computed: {
    highlightedProduct() {
      return this.$store.getters["products/highlightedProduct"];
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCartHandler", {
        shopItem: this.highlightedProduct,
      });
      this.buttonStyle = "add-btn loading";
      setTimeout(() => {
        this.buttonStyle = "add-btn added";
        setTimeout(() => {
          this.buttonStyle = "add-btn ";
        }, 750);
      }, 500);
    },
  },
};
</script>

<style scoped>
section {
  background-color: #ffe4f8;
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

.add-btn {
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

.added {
  background-color: #009066;
  border-color: #009066;
  color: #fff;
}

.spinner {
  width: 1.5rem;
  height: 1.5rem;
  margin: auto;
  display: block;
}
</style>
