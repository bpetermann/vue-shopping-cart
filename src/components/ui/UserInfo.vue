<template>
  <div>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
div {
  position: fixed;
  text-align: center;
  left: 5%;
  top: 25%;
  width: 90%;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

main {
  width: 90%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (min-width: 40rem) {
  div {
    left: 20%;
    width: 60%;
  }
}

@media (min-width: 60rem) {
  div {
    left: 30%;
    width: 40%;
  }
}
</style>
