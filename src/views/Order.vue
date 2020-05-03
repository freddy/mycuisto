<template>
  <div class="order">
    <div class="container">
        <div class="row">
            <div class="col">
              <h2>Contenu de la commande:</h2>
              <p>Passez commande afin d'être livré dans les prochains jours</p>
              <CartProductItem :cart_product="cart_product" v-for="(cart_product, $cartItemIndex) of getCartProducts" :key="'cart-'+$cartItemIndex" />

              <template v-if="hasEmptyCart">
                <h3>Aucun produit sélectionné pour l'instant !</h3>
              </template>
              <template v-if="hasSuggestedProducts">
                <h3>Envie de vous régaler d'avantage ?</h3>
                <div class="row">
                <div class="col-sm-4" v-for="(product, $productIndex) of getNotInCartProducts" :key="'product-'+$productIndex" >
                  <ProductCard :product="product" />
                </div>
                </div>
              </template>
            </div>
            <div class="col-4">
              <h2>Finaliser la commande</h2>

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Produit</th>
                    <th scope="col">Qté</th>
                    <th scope="col">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :cart_product="cart_product" v-for="(cart_product, $cartItemIndex) of getCartProducts" :key="'total-'+$cartItemIndex">
                    <td scope="row">{{ cart_product.product.title }}</td>
                    <td>{{ cart_product.quantity }}</td>
                    <td>{{ cart_product.product.price * cart_product.quantity | currencyFormat }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Total</th>
                    <td></td>
                    <td>{{ totalPrice | currencyFormat }}</td>
                  </tr>
                </tfoot>
              </table>

              <div class="card">
                <div class="card-body">
                  <form
                    id="form-client"
                    @submit.prevent="saveClient"
                  >
                    <h3>Coordonnées</h3>
                    <div class="form-row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          id="firstname"
                          name="firstname"
                          v-model="firstname"
                          placeholder="Prénom"
                        >
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          id="lastname"
                          name="lastname"
                          v-model="lastname"
                          placeholder="Nom"
                        >
                      </div>
                    </div>
                    <div class="form-group mt-3">
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          v-model="phone"
                          name="phone"
                          placeholder="Téléphone"
                          required
                        >
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="email">@</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        aria-describedby="inputGroupPrepend2"
                        name="email"
                        v-model="email"
                        placeholder="Email"
                        required
                      >
                    </div>
                    <div class="form-group mt-3">
                        <textarea
                          class="form-control"
                          id="address"
                          rows="3"
                          name="address"
                          v-model="address"
                          placeholder="Adresse postale"
                        ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block"
                    >Valider la commande</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

import CartProductItem from '../components/CartProductItem.vue'
import ProductCard from '../components/ProductCard.vue'
export default {
  components: { CartProductItem, ProductCard },
  computed: {
    ...mapState(['cart', 'client']),
    ...mapGetters(['getCartProducts', 'getNotInCartProducts']),
    hasSuggestedProducts () {
      return this.$store.getters.getNotInCartProducts.length > 0
    },
    hasEmptyCart () {
      return this.$store.state.cart.length == 0
    },
    totalPrice () {
      return this.$store.getters.getCartProducts.reduce(
        (acc, cart_product) => {
          return acc + cart_product.quantity * cart_product.product.price
      }, 0)
    }

  },
  filters: {
    currencyFormat (value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' €'
    }
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      address: "",
    }
  },
  methods: {
    saveClient () {
      let client = {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        email: this.email,
        address: this.address,
      }

      this.firstname = null,
      this.lastname = null,
      this.phone = null,
      this.email = null,
      this.address = null,

      this.$store.commit(
        'SAVE_CLIENT',
        client
      );

      this.$router.push({ name: 'cart_validation' })
    }
  }
}
</script>

<style lang="css">
</style>