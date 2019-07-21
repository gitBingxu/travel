import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import SelectCity from '@/pages/select/SelectCity'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/select',
      name: 'SelectCity',
      component: SelectCity,
      children: [
        {
          path: 'cisborder',
          name: 'CisBorder',
          component: () => import(/* webpackChunkName: "CisBorder" */ 'src/pages/select/CisBorder.vue')
        },
        {
          path: 'abroad',
          name: 'Abroad',
          component: () => import(/* webpackChunkName: "Abroad" */ 'src/pages/select/Abroad.vue')
        }
      ]
    }
  ]
})
