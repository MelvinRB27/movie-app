<template>
  <div class="search container">
    <form @submit.prevent="searchMovie">
      <div class="input-group md-form form-sm form-2 pl-0">
        <button
          @click="clearInput"
          v-on:click="$emit('homePage')"
          type="reset"
          class="input-reset fa-solid fa-house input-group-text"
        />
        <input
          v-model="query"
          class="input-group-text"
          type="text"
          placeholder="Search movies"
        />
        <button type="submit" class="input-group-text">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>

    <div v-if="total_pages > 1 && validate" class="containerButtons">
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
  </div>
</template>

<script>
import APIServices from '@/services/APIServices';
export default {
  data() {
    return {
      query: '',
      page: 1,
      total_pages: 0,
      validate: ''
    };
  },
  methods: {
    searchMovie(page) {
      APIServices.searchMovie(this.query, page)
        .then(({ data }) => {
          console.log(data);
          this.$emit('input', data);
          this.total_pages = data.total_pages;
          this.validate = this.page;
        })
        .catch(error => {
          console.log(error);
        });
    },
    clearInput() {
      this.query = '';
      this.validate = '';
      this.$emit('input', {});
    }
  }
};
</script>

<style>
@media (max-width: 900px) {
  .container {
    position: relative;
  }
}
.container {
  width: 100%;
  margin: auto;
}
.input-reset {
  background: red;
  border: none;
}
</style>
