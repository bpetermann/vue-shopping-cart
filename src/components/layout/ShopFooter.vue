<template>
  <div>
    <ul>
      <li>
        <a href="https://github.com/bpetermann">Home</a>
      </li>
      <li>
        <a href="https://github.com/bpetermann">Contact</a>
      </li>
      <li>
        <a href="https://github.com/bpetermann">About</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  height: 15rem;
  background-color: #000;
}

ul {
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: #fff;
  text-decoration: none;
}

@media (min-width: 40rem) {
  ul {
    flex-direction: row;
  }
}
</style>
