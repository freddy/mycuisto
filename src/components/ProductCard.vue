<template>
  <v-card
    class="mx-auto"
    width="320"
  >
    <v-img
      :src="getImgUrl(product.image_path)"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="product.title" />
    </v-img>

    <v-card-actions>
      <v-btn
        small
        left
        disabled
      >
        {{ product.price | currencyFormat }} / unit
      </v-btn>
      <v-spacer />
      <v-btn
        small
        raised
        color="primary"
        @click.prevent="addToCart($event, product.id)"
      >
        <v-icon
          class="mr-1"
          size="medium"
        >
          mdi-cart
        </v-icon>
        <span class="d-md-none d-lg-flex">Ajouter</span>
      </v-btn>
    </v-card-actions>
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
  props: ['product'],
  methods: {
    addToCart (e, product_id) {
      this.$store.commit('CREATE_CART_ITEM', { product_id })
      // redirect to order page
      if (this.$router.currentRoute.name != 'panier') {
        this.$router.push({ name: 'panier' })
      }
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
  font-size: 1em;
}
</style>