<template>
  <header>
    <div>
      <span>
        <img class="logo" src="../../assets/logo.svg" alt="vue.logo" />
        shopping cart
      </span>
      <button>
        <img
          class="cart-icon"
          src="/assets/images/website/cart.png"
          alt="cart icon"
          @click="$emit('toggleCart')"
        />
        <span class="product-amount">{{ totalCartProducts }}</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["toggleCart"],
  props: {
    totalCartProducts: Number,
  },
};
</script>

<style scoped>
header {
  background: #fff;
  border-bottom: 1px solid #d0d1d3;
  padding: 0 1rem;
}

div {
  width: 95%;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  font-size: 1.5rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-decoration: none;
  color: #000;
}

.logo {
  height: 1.4rem;
  width: 1.4rem;
  margin-right: 0.2rem;
}

button {
  border: none;
  background-color: transparent;
  height: 1.4rem;
}

.cart-icon {
  height: 1.4rem;
  width: 1.4rem;
  filter: invert(52%) sepia(0%) saturate(0%) hue-rotate(17deg) brightness(88%)
    contrast(91%);
  cursor: pointer;
}

.product-amount {
  padding: 0 0.4rem;
  vertical-align: middle;
  position: relative;
  top: -3.1rem;
  left: 1rem;
  border-radius: 50%;
  background-color: #41b883;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
}
</style>
