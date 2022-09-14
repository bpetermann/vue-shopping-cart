<template>
  <section>
    <h2>JOIN OUR NEWSLETTER!</h2>
    <form @submit.prevent="emailInput">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        v-model.trim="email"
      />
      <h3>I'm mostly interested in</h3>
      <div>
        <input
          type="checkbox"
          id="wfashion"
          name="wfashion"
          value="wfashion"
          defaultChecked="checked"
        />
        <label htmlFor="wfashion">Women's Fahsion</label>
      </div>
      <div>
        <input type="checkbox" name="mfashion" value="mfashion" />
        <label htmlFor="mfashion">Men's Fashion</label>
      </div>
      <button type="submit">Add my Email</button>
    </form>
    <UserInfo v-if="popupInfo" @close="closeInfo">
      <h2>{{ infoMessage }}</h2>
      <h4>{{ email }}</h4>
      <button @click="closeInfo" :class="hasValidEmail">Close</button>
    </UserInfo>
  </section>
</template>

<script>
import UserInfo from "../ui/UserInfo.vue";

export default {
  name: "TheNewsletter",
  components: {
    UserInfo,
  },
  data() {
    return {
      email: "",
      validEmail: false,
      popupInfo: false,
    };
  },
  computed: {
    hasValidEmail() {
      return this.validEmail ? "close-info" : "close-info warning";
    },
    infoMessage() {
      return this.validEmail
        ? "Thank you for joining!"
        : "Please enter a valid email";
    },
  },
  methods: {
    emailInput() {
      if (this.email === "") {
        this.popupInfo = true;
      } else {
        this.validEmail = true;
        this.popupInfo = true;
      }
    },
    closeInfo() {
      this.email = "";
      this.validEmail = false;
      this.popupInfo = false;
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 4rem;
  height: 22rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  background-color: #efeff0;
  padding-left: 1rem;
  padding-right: 1rem;
}

#email {
  height: 2.5rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #d0d1d3;
}

button {
  background-color: black;
  color: #fff;
  font-size: 1rem;
  height: 2.5rem;
  outline: none;
  border: none;
  margin-top: 0.5rem;
}

button:hover {
  opacity: 0.8;
}

@media (min-width: 40rem) {
  #email {
    width: 20rem;
  }
  button {
    width: 20rem;
    margin-top: 0;
  }
  section {
    flex-direction: row;
    align-items: center;
  }
}

h2 {
  margin-bottom: 0rem;
}

h4 {
  font-weight: 100;
  text-decoration: underline;
  color: #3498db;
}

p {
  color: #818181;
}

.close-info {
  cursor: pointer;
  background-color: #41b883;
  width: 5rem;
}

.warning {
  cursor: pointer;
  background-color: #ff7a5d;
  width: 5rem;
}
</style>
