<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: #fff;
  border: 1px solid #d0d1d3;
  padding: 1rem;
  text-align: center;
}
</style>
