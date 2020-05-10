import Vue from 'vue'
import Vuex from 'vuex'

import catalogue from './products'
import { saveStatePlugin } from './utils'

Vue.use(Vuex)

const cart = JSON.parse(localStorage.getItem('cart')) || []
const client = JSON.parse(localStorage.getItem('client')) || []

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    catalogue,
    cart,
    client
  },
  getters: {
    topProducts: state => {
      return state.catalogue.products.filter(e => e.top === true)
    },
    getCartProducts: state => {
      return state.cart.map(c => {
        return {
          product: state.catalogue.products.find(p => p.id === c.product_id),
          quantity: c.quantity
        }
      })
    },
    /*getCartProduct: state => (id) => {
      return state.getters.getCartProducts.find(e => e.product.id == id)
    },*/
    getNotInCartProducts: state => {
      return state.catalogue.products.filter(e => state.cart.map(e => e.product_id).indexOf(e.id) === -1)
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
        state.cart[index].quantity = parseInt(state.cart[index].quantity) + 1;
      }
    },

    UPDATE_QUANTITY (state, { product_id, mode }) {
      let index = state.cart.findIndex((e) => e.product_id === product_id);

      if (index !== -1) {
        if (mode == 'decrease') {
          if (state.cart[index].quantity == 1) {
            // remove the product from the cart
            state.cart.splice(index, 1);
          } else {
            state.cart[index].quantity -= 1;
          }
        } else {
          state.cart[index].quantity += 1;
        }
      }
    },

    SAVE_CLIENT (state, { firstname, lastname, phone, email, address }) {
        state.client.push({
          firstname,
          lastname,
          phone,
          email,
          address
        });
    },

  }
})