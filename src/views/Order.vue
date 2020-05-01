<template>
  <div class="home">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Contenu de la commande:</h2>
                <CartProductItem :product="cart_product.product" v-for="(cart_product, $productIndex) of cartProducts" :key="$productIndex" />
            </div>
            <div class="col-6">
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
    ...mapState(['catalogue']),
    ...mapGetters(['cartProducts'])
  }
}
</script>

<style lang="css">
</style>