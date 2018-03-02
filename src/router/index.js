import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import store from '@/store'
import PageHome from '@/pages/PageHome'
import PageReleaseBuilds from '@/pages/PageReleaseBuilds'
import PageBetaBuilds from '@/pages/PageBetaBuilds'
import PageLogin from '@/pages/PageLogin'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/releaseBuilds',
      name: 'Release Builds',
      component: PageReleaseBuilds
    },
    {
      path: '/betaBuilds',
      name: 'Beta Builds',
      component: PageBetaBuilds
    },
    {
      path: '/login',
      name: 'Login',
      component: PageLogin,
      beforeEnter: (to, from, next) => {
        if (!store.state.user.isAnonymous) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter: (to, from, next) => {
        if (!store.state.user.isAnonymous) {
          firebase.auth().signOut()
          next('/')
        } else {
          next('/login')
        }
      }
    },
    {
      path: '*',
      name: 'Page Not Found',
      component: PageNotFound
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.user.isAnonymous) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

/* TODO: Setup Google Analytics
router.afterEach((to, from) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
})
*/

export default router
