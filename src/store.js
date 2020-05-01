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

    mutations: {
        CREATE_CART_ITEM (state, { product_id }) {
            if (cart && cart.id === product_id) {
                UPDATE_CART_ITEM(product_id)
            } else {
                cart.push({
                    id: product_id,
                    quantity: 1
                })
            }

        }
    }
})