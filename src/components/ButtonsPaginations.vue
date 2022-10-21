<template>
  <div>
    <div class="containerButtons">
      <button
        v-show="page > 1"
        @click="
          searchMovie(1);
          page = 1;
        "
        class="btn btn-dark btn-first"
      >
        1
      </button>
      <button
        v-show="page > 1"
        @click="searchMovie((page -= 1))"
        class="btn btn-dark btn-back"
      >
        Back page
      </button>
      <button
        v-show="page < total_pages"
        @click="searchMovie((page += 1))"
        class="btn btn-dark btn-next"
      >
        Next page
      </button>
      <button
        v-show="page != total_pages"
        @click="
          searchMovie(total_pages);
          page = total_pages;
        "
        class="btn btn-dark btn-last"
      >
        Last page
      </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>