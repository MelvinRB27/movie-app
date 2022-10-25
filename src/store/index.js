import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberPage: 0,
    totalPages: 0
  },
  getters: {},
  mutations: {
    NUMBER_PAGE(state, client) {
      state = client;
    },
    TOTAL_PAGE(state, client) {
      state = client;
    }
  },
  actions: {
    numberPage({ commit }, numberPage) {
      commit('NUMBER_PAGE', numberPage);
    },
    totalPages({ commit }, totalPages) {
      commit('TOTAL_PAGE', totalPages);
    }
  },
  modules: {}
});
