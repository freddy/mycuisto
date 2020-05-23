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
        <v-col
          class="text-center"
          cols="12"
        >
          <h1
            style="text-shadow: 0 0 10px #000000;"
            class="display-2 font-weight-thin mb-4 font-weight-bold"
          >
            Bon Appétit !
          </h1>
          <h4
            style="text-shadow: 0 0 10px #000000;"
            class="subheading"
          >
            Chaque semaine, Massimo confectionne des spécialités italiennes à
            manger chez vous le soir
          </h4>
          <v-btn
            color="primary"
            class="mt-12"
            :to="{ name: 'panier' }"
          >
            Passer commande
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container fluid>
      <h2 class="display-1 text-center py-2 font-italic font-weight-light">
        Les suggestions du moment
      </h2>
      <v-row dense>
        <v-col
          v-for="(product, $productKey) of topProducts"
          :key="product.title"
          class="d-flex center"
          :cols="product.flex"
        >
          <ProductCard
            :key="$productKey"
            :product="product"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import ProductCard from '@/components/ProductCard.vue'

export default {
  components: { ProductCard },
  computed: {
    ...mapState(['catalogue']),
    ...mapGetters(['topProducts']),
  },
}
</script>

<style lang="css"></style>
