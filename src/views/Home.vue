<template>
  <div class="home">
    <div class="container">
      <div class="row">

        <div class="jumbotron mt-3 mb-3">
          <h1 class="display-4">Bon Appétit !</h1>
          <p class="lead">
            Massimo confectionne chaque week-ends des spécialités italiennes pratiques pour manger chez vous le soir
          </p>
          <a class="btn btn-primary btn-lg" href="#" role="button">Passer commande</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm" v-for="(product, $productIndex) of catalogue.products" :key="$productIndex">
          <ProductCard :product="product" />
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

import ProductCard from '../components/ProductCard.vue'
export default {
  components: { ProductCard },
  computed: {
    ...mapState(['catalogue'])
  }
}
</script>

<style lang="css">
</style>