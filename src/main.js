import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import axios from 'axios';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

axios.defaults.baseURL = process.env.FIRABASE_URL;
axios.defaults.headers.get['Accepts'] = 'application/json';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
