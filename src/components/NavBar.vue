<template>
  <nav>
    <router-link to="/" class="logoMP">MOVIE PREVIEW</router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Silkscreen&display=swap');

.logoMP {
  font-family: 'Silkscreen';
  font-size: 22px;
  float: left;
  text-decoration: none;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: red;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@media (max-width: 900px) {
  .logoMP {
    font-size: 15px;
    float: left;
  }
}
</style>
