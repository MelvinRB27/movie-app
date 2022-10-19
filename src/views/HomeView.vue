<template>
  <div class="home container">
    <div class="numberPage">
      <h1 v-text="page"></h1>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-2"
        v-for="(v, index) in movies"
        :key="index"
      >
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
      <button
        v-show="page > 1"
        @click="GetMoviesPopular(page--)"
        class="btn btn-dark btn-back"
      >
        Back page
      </button>
      <button
        v-show="page < total_Pages"
        @click="GetMoviesPopular(page++)"
        class="btn btn-dark btn-next"
      >
        Next page
      </button>
      <button
        v-show="page != total_Pages"
        @click="
          GetMoviesPopular(total_Pages);
          page = total_Pages;
        "
        class="btn btn-dark btn-last"
      >
        Last page
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardMovie from '@/components/CardMovie.vue';
import ApiServices from '@/services/APIServices.js';

export default {
  name: 'HomeView',
  components: {
    CardMovie
  },
  data() {
    return {
      movies: [],
      page: 1,
      total_Pages: 500
    };
  },
  methods: {
    GetMoviesPopular(numberPage) {
      ApiServices.getMovieMostPopular(numberPage)
        .then(({ data }) => {
          // this.total_Pages = data.total_pages;
          this.movies = data.results.map(m => {
            m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`;
            return m;
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.GetMoviesPopular(this.page);
  }
};
</script>
<style>
.btn-last {
  float: right;
  background-color: brown;
  border-color: black;
  margin-left: 5px;
}
.btn-next {
  margin-left: 5px;
}
.numberPage {
  width: auto;
  height: 50px;
  padding-left: 1%;
  padding-right: 1%;
  border-radius: 50%;
  color: white;
  position: fixed;
  left: 4%;
}
.containerButtons {
  height: 50px;
  background: black;
  border-radius: 5px;
  position: fixed;
  padding: 10px;
  left: 5px;
  bottom: 1%;
}
.containerButtons button {
  font-size: 12px;
}
.btn-first {
  background: blue;
}
</style>
