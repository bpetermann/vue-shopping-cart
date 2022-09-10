<template>
  <div class="container">
    <div class="hero">
      <div class="info">
        <h2>DROP 02 SUMMER 2022</h2>
        <p>The 3 Pairs of Shoes You Need for this Summer</p>
      </div>
      <img src="/assets/images/website/model.png" alt="Sneaker Model" />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #c44f70;
}

.hero {
  margin: 0 auto;
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
  padding-right: 1rem;
}

@media (min-width: 40rem) {
  .hero {
    width: 80%;
  }
  img {
    height: 22rem;
    margin-bottom: 2rem;
  }
}
</style>
