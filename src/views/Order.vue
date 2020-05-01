<template>
  <div class="home">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Contenu de la commande:</h2>
                <CartProductItem :product="getProduct(cart_item.product_id)" v-for="(cart_item, $cartItemIndex) of cart" :key="$cartItemIndex" />
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
    ...mapState(['cart']),
    ...mapGetters(['getProduct'])
  }
}
</script>

<style lang="css">
</style>