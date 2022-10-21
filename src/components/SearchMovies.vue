<template>
  <div class="ctnSearchButton">
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
.container {
  width: 100%;
  margin: auto;
}
.input-reset {
  background: red;
  border: none;
}
</style>
