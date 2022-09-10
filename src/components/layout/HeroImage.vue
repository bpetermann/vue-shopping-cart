<template>
  <div class="hero">
    <div class="info">
      <h2>DROP 02 SUMMER 2022</h2>
      <p>The 3 Pairs of Shoes You Need for this Summer</p>
    </div>
    <img src="../../images/website/model.png" alt="Sneaker Model" />
  </div>
</template>

<style scoped>
.hero {
  background-color: #0aa59d;
  height: 20rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
}

img {
  height: 12rem;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

@media (min-width: 40rem) {
  img {
    height: 22rem;
    margin-bottom: 2rem;
  }
}
</style>
