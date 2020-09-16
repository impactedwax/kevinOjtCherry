import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.prototype.$http = axios;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
