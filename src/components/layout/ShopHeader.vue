<template>
  <header>
    <div>
      <span>
        <img class="logo" src="../../assets/logo.svg" alt="vue.logo" />
        shopping cart
      </span>
      <img
        class="cart-icon"
        src="@/assets/images/website/cart.png"
        alt="cart icon"
        @click="$emit('toggleCart')"
      />
    </div>
  </header>
</template>

<script>
export default {
  emits: ["toggleCart"],
};
</script>

<style scoped>
header {
  background: #fff;
  border-bottom: 1px solid #d0d1d3;
  padding: 0 1rem;
}

div {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 40rem) {
  div {
    width: 75%;
  }
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

.cart-icon {
  height: 1.4rem;
  width: 1.4rem;
  filter: invert(52%) sepia(0%) saturate(0%) hue-rotate(17deg) brightness(88%)
    contrast(91%);
}
</style>
