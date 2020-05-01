<template>
  <div class="home">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Contenu de la commande:</h2>
                <ProductItem :product="product" v-for="(product, $productIndex) of catalogue.products" :key="$productIndex" />
            </div>
            <div class="col-6">
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

import ProductItem from '../components/ProductItem.vue'
export default {
  components: { ProductItem },
  computed: {
    ...mapState(['catalogue'])
  },
  methods: {
      getProduct(catalogue, id_product) {
          return catalogue.products[id_product]
      }
  }
}
</script>

<style lang="css">
</style>