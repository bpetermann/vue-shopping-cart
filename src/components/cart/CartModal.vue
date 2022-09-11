<template>
  <CartBackdrop @toggleCart="$emit('toggleCart', $event)" />
  <div class="cart-modal">
    <button
      class="close-button"
      v-if="cart.length === 0"
      @click="$emit('toggleCart')"
    >
      No items (yet!)
    </button>
    <main v-else>
      <ul>
        <li v-for="product in cart" :key="product.productId">
          <div>
            <h4>{{ product.name }}</h4>
            <div class="product-detail">
              <span>{{ (product.amount * product.price).toFixed(2) }} $</span>
              <span>{{ product.amount }}X</span>
            </div>
          </div>
          <div class="quantity-control">
            <button @click="$emit('addProduct', product)">+</button>
            <button @click="$emit('removeProduct', product)">–</button>
          </div>
        </li>
      </ul>
      <div class="total-amuount">
        <span>Total Amount</span>
        <span>{{ totalPrice }} $</span>
      </div>
      <button class="order-button">Order</button>
    </main>
  </div>
</template>

<script>
import CartBackdrop from "./CartBackdrop.vue";

export default {
  components: {
    CartBackdrop,
  },
  emits: ["toggleCart", "addProduct", "removeProduct"],

  props: {
    cart: Array,
  },
  computed: {
    totalPrice() {
      const totalPrice = this.cart.reduce(function (acc, prod) {
        return acc + prod.amount * prod.price;
      }, 0);
      return totalPrice.toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart-modal {
  position: fixed;
  text-align: center;
  left: 5%;
  top: 25%;
  width: 90%;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

@media (min-width: 40rem) {
  .cart-modal {
    left: 20%;
    width: 60%;
  }
}

@media (min-width: 60rem) {
  .cart-modal {
    left: 30%;
    width: 40%;
  }
}

main {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close-button {
  margin: 1rem;
  width: 20rem;
  background-color: #41b883;
  color: #fff;
  font-size: 1rem;
  height: 2.5rem;
  outline: none;
  border: none;
}

.close-button:hover {
  opacity: 0.8;
}
ul {
  width: 75%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d0d1d3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

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

.total-amuount {
  width: 75%;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.order-button {
  margin: 1rem;
  width: 15rem;
  background-color: #41b883;
  color: #fff;
  font-size: 1rem;
  height: 2.5rem;
  outline: none;
  border: none;
}

@media (min-width: 40rem) {
  .order-button {
    width: 20rem;
  }
}

h4 {
  text-align: left;
}

.order-button:hover {
  opacity: 0.8;
}
</style>
