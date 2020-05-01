import Vue from 'vue'
import Vuex from 'vuex'

import catalogue from './products'
import { saveStatePlugin } from './utils'

Vue.use(Vuex)

const cart = JSON.parse(localStorage.getItem('cart')) || []

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    catalogue,
    cart
  },
  getters: {
    cartProducts: (state) => {
      let cart_products = []
      /*
      state.cart.forEach((quantity, product_id) => {
        if (product_id != null) {
          cart_products.push({
            product: state.catalogue.products[product_id],
            quantity: quantity
          })
        }
      })*/

      return cart_products;
    }
  },
  mutations: {
    CREATE_CART_ITEM (state, { product_id }) {
      if (cart[product_id] == undefined) {
        cart[product_id] = 1;
      } else {
        cart[product_id] += 1;
      }
    }
  }
})