import Vue from 'vue';
import Vuex from 'vuex';

import hello from './modules/hello';
import user from './modules/user';


Vue.use(Vuex);

const DEBUG = process.env.NODE_ENV === 'development';

export default new Vuex.Store({
  modules: {
    hello,
    user,
  },
  strict: DEBUG,
});
