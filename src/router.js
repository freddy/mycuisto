import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Order from './views/Order.vue'
import Faq from './views/Faq.vue'
import Cgu from './views/Cgu.vue'
import Apropos from './views/Apropos.vue'
import Confidentiel from './views/Confidentiel.vue'
import Sitemap from './views/Sitemap.vue'
import Contact from './views/Contact.vue'
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
      name: 'panier',
      component: Order
    },
    {
      path: '/a-propos',
      name: 'a propos',
      component: Apropos
    },
    {
      path: '/cgu',
      name: 'mentions legales',
      component: Cgu
    },
    {
      path: '/faq',
      name: 'consultez la faq',
      component: Faq
    },
    {
      path: '/confidentiel',
      name: 'politique de confidentialité',
      component: Confidentiel
    },
    {
      path: '/sitemap',
      name: 'plan du site',
      component: Sitemap
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/validation',
      name: 'cart_validation',
      component: CartValidation
    }
  ]
})
