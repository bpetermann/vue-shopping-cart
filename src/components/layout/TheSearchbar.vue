<template>
  <section>
    <button>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <input type="text" placeholder="Search" @input="search" />
  </section>
</template>

<script>
export default {
  name: "TheSearchbar",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search(e) {
      this.$store.dispatch("products/searchTermHandler", {
        searchTerm: e.target.value,
      });
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d0d1d3;
}

button {
  width: 3rem;
  border: none;
  cursor: pointer;
  border-right: 1px solid #d0d1d3;
  background-color: #fff;
  padding-top: 0;
  padding-bottom: 0;
  vertical-align: middle;
}

button:focus {
  outline: none;
}

button span {
  width: 60%;
  height: 0.1rem;
  background: #767676;
  display: block;
  margin: 0.6rem 0.4rem;
}

button span:nth-of-type(2) {
  width: 40%;
}

input {
  width: 100%;
  outline: none;
  border: none;
  text-align: start;
  padding-left: 1rem;
  font-size: 1rem;
}
</style>
