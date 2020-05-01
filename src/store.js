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
    getProduct (state) {
      return (id) => {
        for (const product of state.catalogue.products) {
          if (product.id === id) {
            return product
          }
        }
      }
    }
  },
  mutations: {
    CREATE_CART_ITEM (state, { product_id }) {

      let index = state.cart.findIndex((e) => e.product_id === product_id);

      if (index === -1) {
          state.cart.push({
            product_id: product_id,
            quantity: 1
          });
      } else {
          state.cart[index].quantity += 1;
      }
    }

  }
})