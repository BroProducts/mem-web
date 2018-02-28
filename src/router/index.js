import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ReleaseBuilds from '@/pages/ReleaseBuilds'
import BetaBuilds from '@/pages/BetaBuilds'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/releaseBuilds',
      name: 'Release Builds',
      component: ReleaseBuilds
    },
    {
      path: '/betaBuilds',
      name: 'Beta Builds',
      component: BetaBuilds
    },
  ]
})
