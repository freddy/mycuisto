<template>
  <div class="home">
    <div class="container">
        <div class="row">
            <div class="col">
              <h2>Contenu de la commande:</h2>
              <CartProductItem :cart_product="cart_product" v-for="(cart_product, $cartItemIndex) of getCartProducts" :key="'cart-'+$cartItemIndex" />

              <template v-if="hasEmptyCart">
                <h3>Aucun produit sélectionné pour l'instant !</h3>
              </template>
              <template v-if="hasSuggestedProducts">
                <h3>Envie de vous régaler d'avantage ?</h3>
                <ProductCard :product="product" v-for="(product, $productIndex) of getNotInCartProducts" :key="'product-'+$productIndex" />
              </template>
            </div>
            <div class="col-6">
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
                    <td>{{ cart_product.product.price * cart_product.quantity }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Total</th>
                    <td></td>
                    <td>{{ totalPrice }}</td>
                  </tr>
                </tfoot>
              </table>

              <div class="card">
                <div class="card-body">
                  <form @submit="saveClient">
                    <div class="form-group">
                      <label for="firstname">Nom</label>
                        <input type="text" class="form-control" id="firstname" v-model="firstname">
                    </div>
                    <div class="form-group">
                      <label for="lastname">Prénom</label>
                        <input type="text" class="form-control" id="lastname" v-model="lastname">
                    </div>
                    <div class="form-group">
                      <label for="phone">Téléphone</label>
                        <input type="text" class="form-control" id="phone" v-model="phone" required>
                    </div>
                    <label for="email">Email</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="email">@</span>
                      </div>
                        <input type="text" class="form-control" id="email" aria-describedby="inputGroupPrepend2" v-model="email" required>
                    </div>
                    <div class="form-group">
                      <label for="address">Adresse Postale</label>
                        <textarea class="form-control" id="address" rows="3" v-model="address"></textarea>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block"
                      >Valider</button>
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
  methods: {
    saveClient: function (e) {
      console.log(e)
      this.$store.commit(
        'SAVE_CLIENT',
        {
          firstname: e.firstname,
          lastname: e.lastname,
          phone: e.phone,
          email: e.email,
          adresse: e.adresse,
        }
      );

    }
  }
}
</script>

<style lang="css">
</style>