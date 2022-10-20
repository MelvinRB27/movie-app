<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Vue from 'vue';

Vue.mixin({
  filters: {
    coverURL(url) {
      return `https://image.tmdb.org/t/p/w185_and_h278_bestv2${url}`;
    }
  }
});
export default {
  components: {
    NavBar
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: rgb(36, 35, 35);
}
</style>
