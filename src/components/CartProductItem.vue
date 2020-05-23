<template>
  <v-card
    tile
    elevation="4"
    class="mb-5"
  >
    <div class="d-flex flex-no-wrap">
      <v-img
        max-width="150"
        :src="getImgUrl(cartProduct.product.image_path)"
        :alt="cartProduct.product.image_alt"
      />
      <div>
        <v-card-title v-text="cartProduct.product.title" />
        <v-card-actions>
          <v-btn
            class="mx-2"
            fab
            x-small
            color="primary"
            @click.prevent="updateQuantity(cartProduct.product.id, 'decrease')"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          {{ cartProduct.quantity }}
          <v-btn
            class="mx-2"
            fab
            x-small
            color="primary"
            @click.prevent="updateQuantity(cartProduct.product.id, 'increase')"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  filters: {
    currencyFormat (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €'
    }
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['cartProduct'],
  methods: {
    updateQuantity (product_id, mode) {
      this.$store.commit('UPDATE_QUANTITY', { product_id, mode });
    },
    getImgUrl (pic) {
      // eslint-disable-next-line no-undef
      return require('@/assets/images/' + pic)
    }
  }
}
</script>


<style lang="css" scoped>
.badge {
  font-size: 1.2em;
}
</style>