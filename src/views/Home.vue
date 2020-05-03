<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/images/highlight.jpg')"
      height="300"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Bon Appétit !</h1>
          <h4 class="subheading"> Massimo confectionne chaque week-ends des spécialités italiennes pratiques pour manger chez vous le soir</h4>
          <v-btn
            color="white"
            text
            rounded
            class="my-2"
            to="/order"
          >
          Passer commande
        </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container fluid>
      <v-row dense>
         <v-col
          class="d-flex center"
          v-for="(product, $productKey) of catalogue.products"
          :key="product.title"
          :cols="product.flex"
        >
          <ProductCard :key=$productKey :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ProductCard from '@/components/ProductCard.vue'

export default {
  components: { ProductCard },
  computed: {
    ...mapState(['catalogue'])
  }
}
</script>

<style lang="css">
</style>