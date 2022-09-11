<template>
  <div class="background">
    <div class="container">
      <nav class="nav-icons">
        <img src="/assets/images/website/twitter.png" alt="Twitter Icon" />
        <img src="/assets/images/website/spotify.png" alt="Spotify Icon" />
        <img src="/assets/images/website/facebook.png" alt="Facebook Icon" />
        <img src="/assets/images/website/instagram.png" alt="Instagram Icon" />
      </nav>
      <nav class="nav-links">
        <a href="https://github.com/bpetermann">Privacy Policy</a>
        <a href="https://github.com/bpetermann">Terms of Use</a>
        <a href="https://github.com/bpetermann">Cookie Preferences</a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.background {
  height: 20rem;
  background-color: #1a1a1a;
}

.container {
  width: 90%;
  max-width: 70rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  margin: auto;
}

.nav-icons {
  width: 75%;
  max-width: 37.5rem;
  align-self: center;
  display: flex;
  justify-content: space-between;
}

.nav-icons img {
  width: 3rem;
  height: 3rem;
  filter: invert(100%) sepia(65%) saturate(0%) hue-rotate(173deg)
    brightness(113%) contrast(100%);
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-links a {
  margin: 1rem 0;
  text-decoration: none;
  color: #fcfcfc;
}

@media (min-width: 60rem) {
  .nav-links {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
