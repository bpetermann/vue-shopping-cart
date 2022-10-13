<template>
  <div>
    <img
      :src="`${this.imageUrl}${product.name}.png`"
      :alt="product.description"
      @click="highlightedProduct"
    />
    <span>{{ product.description }}</span>
    <span>{{ product.price }} $</span>
    <button @click="addToCart" :class="buttonStyle">
      <span v-if="buttonStyle.includes('loading')">
        <img
          class="spinner"
          src="/assets/images/website/spinner.gif"
          alt="Loading..."
      /></span>
      <span v-else> Add To Cart</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductsOverviewItem",
  setup() {
    const imageUrl = "/vue-shopping-cart/assets/images/products/";
    return { imageUrl };
  },
  props: {
    product: { type: Object, required: true },
  },
  data() {
    return {
      buttonStyle: "add-btn",
    };
  },
  methods: {
    highlightedProduct() {
      this.$store.dispatch("products/selectHighlightedProduct", {
        prodId: this.product.id,
      });
    },
    addToCart() {
      this.$store.dispatch("cart/addToCartHandler", {
        shopItem: this.product,
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
div {
  padding: 1rem;
  width: 15rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

img {
  cursor: pointer;
  width: 10rem;
  height: 14rem;
}
.add-btn {
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: 0.02rem solid #000;
  width: 8rem;
  height: 3rem;
  font-size: 1rem;
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
