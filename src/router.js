import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Order from './views/Order.vue'
import Faq from './views/Faq.vue'
import CartValidation from './views/CartValidation.vue'

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
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/validation',
      name: 'cart_validation',
      component: CartValidation
    }
  ]
})
