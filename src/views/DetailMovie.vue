<template>
  <div class="detail">
    <div
      class="containerMovieDeatil"
      :style="{
        'background-image':
          'linear-gradient(rgba(59, 168, 119, 0.45), rgba(59, 168, 119, 0)),url(https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
          movie.poster_path +
          ')'
      }"
    ></div>
    <div class="cardBodyDetail">
      <h1 v-text="movie.title" class="card-title"></h1>
      <h3 v-text="movie.tagline" class="card-title"></h3>
      <h6>
        <b>Idioma:</b>
        {{ movie.original_language }}
      </h6>
      <h6>
        <b>Fecha de lanzamiento:</b>
        {{ movie.release_date }}
      </h6>
      <h6>
        <b>Promedio de votos:</b>
        {{ movie.vote_average }}
      </h6>
      <h6>
        <b>Recuento de votos:</b>
        {{ movie.vote_count }}
      </h6>
      <p class="card-text col-md-6">
        {{ movie.overview ? movie.overview : 'No overview' }}
      </p>

      <ul>
        <b>Géneros:</b>
        <li v-for="(v, index) in movie.genres" :key="index">
          {{ v.name }}
        </li>
      </ul>

      <ul>
        <b>País donde se produjo:</b>
        <li v-for="(v, index) in movie.production_countries" :key="index">
          {{ v.name }}
        </li>
      </ul>

      <ul>
        <b>Compañia de producción:</b>
        <li v-for="(v, index) in movie.production_companies" :key="index">
          {{ v.name }}
        </li>
      </ul>

      <ul>
        <b>Idioma hablado:</b>
        <li v-for="(v, index) in movie.spoken_languages" :key="index">
          {{ v.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ApiServices from '@/services/APIServices.js';

export default {
  data() {
    return {
      movie: {},
      movieID: this.$route.params.id
    };
  },
  methods: {
    GetMoviesByID(id) {
      ApiServices.getMovieByID(id)
        .then(({ data }) => {
          this.movie = data;
          console.log('movie: ', data);
          window.scrollTo(0, 0);
        })
        .catch(error => {
          console.log(error);
          if (error.response.status == '304') {
            this.$router.push('/error-server');
          } else if (error.response.status == '404') {
            this.$router.push('/error-server');
          }
        });
    }
  },
  mounted() {
    this.GetMoviesByID(this.movieID);
  }
};
</script>
<style>
@import url(@/css/DetailMovie.css);
</style>
