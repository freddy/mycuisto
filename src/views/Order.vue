<template>
  <div class="home">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Contenu de la commande:</h2>
                <CartProductItem :cart_product="getCartProduct(cart_product.product_id)" v-for="(cart_product, $cartItemIndex) of cart" :key="$cartItemIndex" />
            </div>
            <div class="col-8">
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

import CartProductItem from '../components/CartProductItem.vue'
export default {
  components: { CartProductItem },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['getCartProduct'])
  }
}
</script>

<style lang="css">
</style>