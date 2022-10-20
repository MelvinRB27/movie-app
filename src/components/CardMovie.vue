<template>
  <div class="row">
    <div class="containerMovie">
      <img :src="movies.poster_path | coverURL" alt="s" class="card-img-top" />
      <div class="card-body">
        <h1 v-text="movies.title" class="card-title"></h1>
        <h6>
          <b>Idioma:</b>
          {{ movies.original_language }}
        </h6>
        <h6>
          <b>Fecha de lanzamiento:</b>
          {{ movies.release_date }}
        </h6>
        <h6>
          <b>Promedio de votos:</b>
          {{ movies.vote_average }}
        </h6>
        <h6>
          <b>Recuento de votos:</b>
          {{ movies.vote_count }}
        </h6>
        <p class="card-text">
          {{
            movies.overview
              ? movies.overview.substring(0, 100) + '...'
              : 'No overview'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: Object
  }
};
</script>

<style>
.card-title {
  font-size: 25px;
  color: rgb(246, 8, 8);
  margin-bottom: 1%;
}
.containerMovie {
  height: auto;
  margin-top: 5%;
  box-shadow: 3px 0px 0px -20px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 3px 0px 30px -20px rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px 0px 51px -20px rgba(0, 0, 0, 1);
}
.containerMovie:hover {
  background-color: rgb(45, 45, 45);
  color: rgb(219, 214, 214);
  cursor: pointer;
}
.containerMovie img {
  width: 100%;
}
.containerMovie {
  color: white;
}
@media (max-width: 1500px) {
  .containerMovie p {
    display: none;
  }
}
@media (max-width: 900px) {
  .containerMovie {
    width: 150px;
  }
}
</style>
