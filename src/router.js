import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
 
import Wiki from './views/Wiki.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/wiki',
      name: 'wiki',
      component: Wiki,
    },
  ]
})
