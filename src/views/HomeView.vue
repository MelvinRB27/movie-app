<template>
  <div class="home container">
    <div class="input-search">
      <SearchMovies
        ref="searchMethod"
        v-on:homePage="
          GetMoviesPopular(1);
          page = 1;
        "
        v-model="inputMovie"
      />
    </div>

    <div class="cntRow" v-show="!Object.keys(inputMovie).length">
      <div class="numberPage">
        <h1 v-text="page"></h1>
      </div>
      <h1 class="titlePage">Películas más populares</h1>
      <div class="row3">
        <div class="col-6 col-sm-2" v-for="(v, index) in movies" :key="index">
          <CardMovie :movies="v" />
        </div>
      </div>

      <div class="containerButtons">
        <button
          v-show="page > 5"
          @click="
            GetMoviesPopular(page - page + 1);
            page = 1;
          "
          class="btn btn-dark btn-first"
        >
          1
        </button>

        <div>
          <button
            v-show="page > 1"
            @click="GetMoviesPopular((page -= 1))"
            class="btn btn-dark btn-back"
          >
            <i class="fa-solid fa-arrow-left"></i>
            Página
          </button>
          <button
            v-show="page < total_Pages"
            @click="GetMoviesPopular((page += 1))"
            class="btn btn-dark btn-next"
          >
            <i class="fa-solid fa-arrow-right"></i>
            Página
          </button>
        </div>

        <button
          v-show="page != total_Pages"
          @click="
            GetMoviesPopular(total_Pages);
            page = total_Pages;
          "
          class="btn btn-dark btn-last"
        >
          <i class="fa-solid fa-forward-fast"></i>
          Last page
        </button>
      </div>
    </div>

    <div class="row" v-if="inputMovie.results < 1">
      <h1>No hay resultados de su busqueda</h1>
    </div>

    <div
      class="cntRow"
      v-show="
        Object.keys(inputMovie).length &&
        Object.keys(inputMovie.results).length > 1
      "
    >
      <div class="numberPage">
        <h1 v-text="inputMovie.page"></h1>
      </div>
      <h1 class="titlePage">Resultados</h1>
      <div class="row3">
        <div
          class="col-6 col-sm-2"
          v-for="(v, index) in inputMovie.results"
          :key="index"
          v-if="v.poster_path"
        >
          <CardMovie :movies="v" />
        </div>
      </div>
      <div v-if="this.inputMovie.total_pages > 1" class="containerButtons">
        <button
          v-show="this.inputMovie.page > 1"
          v-on:click="firstPage"
          class="btn btn-dark btn-first"
        >
          1
        </button>
        <button
          v-show="this.inputMovie.page > 1"
          v-on:click="backPage"
          class="btn btn-dark btn-back"
        >
          Back page
        </button>
        <button
          v-show="this.inputMovie.page < this.inputMovie.total_pages"
          v-on:click="nextPage"
          class="btn btn-dark btn-next"
        >
          Next page
        </button>
        <button
          v-show="page != total_Pages"
          v-on:click="lastPage"
          class="btn btn-dark btn-last"
        >
          Last page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardMovie from '@/components/CardMovie.vue';
import ApiServices from '@/services/APIServices.js';
import SearchMovies from '@/components/SearchMovies.vue';

export default {
  name: 'HomeView',
  components: {
    CardMovie,
    SearchMovies
  },
  data() {
    return {
      movies: [],
      page: 1,
      total_Pages: 500,
      inputMovie: {}
    };
  },
  methods: {
    GetMoviesPopular(numberPage) {
      ApiServices.getMovieMostPopular(numberPage)
        .then(({ data }) => {
          this.movies = data.results;
        })
        .catch(error => {
          console.log(error);
        });
    },
    firstPage() {
      this.$refs.searchMethod.searchMovie(1);
    },
    nextPage() {
      this.$refs.searchMethod.searchMovie((this.inputMovie.page += 1));
    },
    backPage() {
      this.$refs.searchMethod.searchMovie((this.inputMovie.page -= 1));
    },
    lastPage() {
      this.$refs.searchMethod.searchMovie(this.inputMovie.total_pages);
    }
  },
  mounted() {
    this.GetMoviesPopular(this.page);
  }
};
</script>
<style>
@import url('@/css/Home.css');
</style>
