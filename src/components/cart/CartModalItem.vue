<template>
  <div>
    <h4>{{ product.name }}</h4>
    <div class="product-detail">
      <span>{{ (product.amount * product.price).toFixed(2) }} $</span>
      <span>{{ product.amount }}X</span>
    </div>
  </div>
  <div class="quantity-control">
    <button @click="addProduct">+</button>
    <button @click="removeProduct">–</button>
  </div>
</template>

<script>
export default {
  name: "CartModalItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addProduct() {
      this.$store.dispatch("cart/addToCartHandler", {
        shopItem: this.product,
      });
    },
    removeProduct() {
      this.$store.dispatch("cart/removeProductHandler", {
        shopItem: this.product,
      });
    },
  },
};
</script>

<style scoped>
.product-detail {
  display: flex;
  width: 8rem;
  justify-content: space-between;
}

.quantity-control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}

.quantity-control button {
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  outline: none;
  border: 1px solid #000;
  font-size: 1rem;
}

.quantity-control button:hover {
  border: 2px solid #000;
  opacity: 0.8;
}

h4 {
  text-align: left;
}
</style>
