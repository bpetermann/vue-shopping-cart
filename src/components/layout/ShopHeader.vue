<template>
  <header>
    <div>
      <span>
        <img class="logo" src="../../assets/logo.svg" alt="vue.logo" />
        shopping cart
      </span>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #d0d1d3;
  padding: 0 1rem;
}

div {
  width: 100%;
  margin: 0 auto;
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
</style>
