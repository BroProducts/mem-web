import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageReleaseBuilds from '@/pages/PageReleaseBuilds'
import PageBetaBuilds from '@/pages/PageBetaBuilds'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
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
      path: '*',
      name: 'Page Not Found',
      component: PageNotFound
    },
  ]
})
