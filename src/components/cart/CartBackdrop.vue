<template>
  <div @click="$emit('toggleCart')"></div>
</template>

<script>
export default {
  emits: ["toggleCart"],
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
