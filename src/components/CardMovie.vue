<template>
  <div class="row">
    <div class="containerMovie">
      <img :src="movies.poster_path" alt="s" class="card-img-top" />
      <div class="card-body">
        <h1 v-text="movies.title" class="card-title"></h1>
        <h6>
          <b>Language:</b>
          {{ movies.original_language }}
        </h6>
        <h6>
          <b>Release Date:</b>
          {{ movies.release_date }}
        </h6>
        <h6>
          <b>Vote Average:</b>
          {{ movies.vote_average }}
        </h6>
        <h6>
          <b>Vote count:</b>
          {{ movies.vote_count }}
        </h6>
        <p class="card-text">{{ movies.overview.substring(0, 100) + '...' }}</p>
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
  height: 660px;
  margin-top: 5%;
  box-shadow: 3px 0px 51px -20px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 3px 0px 51px -20px rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px 0px 51px -20px rgba(0, 0, 0, 1);
}
.containerMovie img {
  width: 100%;
}
.containerMovie {
  color: white;
}
</style>
