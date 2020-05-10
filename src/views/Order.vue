<template>
  <div class="order">
    <div class="container">
        <h2>Contenu de la commande:</h2>
        <p>Passez commande afin d'être livré dans les prochains jours</p>
        <v-row>
          <v-col>
            <CartProductItem :cart_product="cart_product" v-for="(cart_product, $cartItemIndex) of getCartProducts" :key="'cart-'+$cartItemIndex" />

            <template v-if="hasEmptyCart">
              <h2 class="mb-3">Aucun produit sélectionné pour l'instant !</h2>
            </template>
            <template v-if="hasSuggestedProducts">
              <v-divider class="mb-3" />
              <h3>Envie de vous régaler d'avantage ?</h3>
              <div class="row">
              <div class="col-sm-4" v-for="(product, $productIndex) of getNotInCartProducts" :key="'product-'+$productIndex" >
                <ProductCard :product="product" />
              </div>
              </div>
            </template>
          </v-col>
          <v-col
            cols="12"
            md="6"
            v-if="!hasEmptyCart">
            <OrderSummary :cart_products="getCartProducts" />
            <div class="mb-5" />
            <CustomerForm />
          </v-col>
        </v-row>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

import CartProductItem from '@/components/CartProductItem.vue'
import ProductCard from '@/components/ProductCard.vue'
import OrderSummary from '@/components/OrderSummary.vue'
import CustomerForm from '@/components/CustomerForm.vue'

export default {
  components: { CartProductItem, ProductCard, OrderSummary, CustomerForm },
  computed: {
    ...mapState(['cart', 'client']),
    ...mapGetters(['getCartProducts', 'getNotInCartProducts']),
    hasSuggestedProducts () {
      return this.$store.getters.getNotInCartProducts.length > 0
    },
    hasEmptyCart () {
      return this.$store.state.cart.length == 0
    }
  }
}
</script>

<style lang="css">
</style>