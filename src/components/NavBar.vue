<template>
  <nav>
    <router-link to="/" class="logoMP">MOVIE PREVIEW</router-link>
    <input
      type="button"
      value="Regresar"
      v-if="this.$route.path != '/'"
      @click="goToBack"
      class="btn btn-outline-success"
    />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      url: this.$route.path
    };
  },
  methods: {
    goToBack() {
      window.history.back();
    }
  }
};
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
  margin-bottom: 5%;
}

nav a {
  font-weight: bold;
  color: red;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
input {
  float: right;
  border-color: red;
}
@media (max-width: 900px) {
  .logoMP {
    font-size: 15px;
    float: left;
  }
}
</style>
