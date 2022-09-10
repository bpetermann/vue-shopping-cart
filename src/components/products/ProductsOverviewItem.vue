<template>
  <div>
    <img
      :src="`${this.imageUrl}${productName}.png`"
      :alt="productDescription"
      @click="highlightedProduct"
    />
    <span class="description">{{ productDescription }}</span>
    <span class="price">{{ productPrice }} $</span>
    <button>Add To Cart</button>
  </div>
</template>

<script>
export default {
  emits: ["selectHighlightedProduct"],
  setup() {
    const imageUrl = new URL("../../assets/images/products/", import.meta.url)
      .href;
    return { imageUrl };
  },
  props: {
    productId: String,
    productName: String,
    productDescription: String,
    productPrice: Number,
    productAmount: Number,
    productCategory: String,
  },
  methods: {
    highlightedProduct() {
      this.$emit("selectHighlightedProduct", this.productId);
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
.price {
  margin: 0.6rem 0;
}
button {
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: 0.02rem solid #000;
  width: 8rem;
  height: 3rem;
  font-size: 1rem;
}
</style>
