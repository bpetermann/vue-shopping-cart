<template>
  <div @click="toggleCartModal"></div>
</template>

<script>
export default {
  name: "CartBackdrop",
  methods: {
    toggleCartModal() {
      this.$store.dispatch("cart/toggleCartModal");
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
}
</style>
