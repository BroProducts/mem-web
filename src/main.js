// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store';
import { sync } from 'vuex-router-sync';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import firebaseConfig from '@/common/firebaseConfig'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$firebase = firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebaseui = new firebaseui.auth.AuthUI(firebase.auth())
Vue.use(VueMaterial);

// Sync the router with the vuex store. This registers `store.state.route`
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
