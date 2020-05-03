<template>
    <v-card
      class="mx-auto"
      max-width="320"
    >
      <v-img
        :src="getImgUrl(product.image_path)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="product.title"></v-card-title>
      </v-img>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          small
          raised
          color="primary"
          @click="addToCart($event, product.id)"
        >
          <v-icon class="mr-1" size="medium">mdi-cart</v-icon>
          Ajouter
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addToCart(e, product_id) {
        this.$store.commit('CREATE_CART_ITEM', { product_id })
        // redirect to order page
        if (this.$router.currentRoute.name != 'order') {
            this.$router.push({ name: 'order' })
        }
    },
    getImgUrl(pic) {
      return require('../assets/images/'+pic)
    }
  },
  filters: {
    currencyFormat (value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' €'
    }
  }
}
</script>

<style lang="css" scoped>
  .badge {
    font-size: 1em;
  }
</style>