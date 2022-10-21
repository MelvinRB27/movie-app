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
body::-webkit-scrollbar {
  width: 8px; /* Tamaño del scroll en vertical */
  height: 8px; /* Tamaño del scroll en horizontal */
  /* display: none; Ocultar scroll */
}
.contenedor::-webkit-scrollbar:horizontal {
  width: 8px; /* Tamaño del scroll en vertical */
  height: 8px;
}
body::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
body::-webkit-scrollbar-thumb:hover {
  background: #42b983;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
body::-webkit-scrollbar-thumb:active {
  background-color: #42b983;
}
</style>
