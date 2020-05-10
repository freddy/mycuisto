<template>
<v-card tile elevation="4" class="mb-5">
  <div class="d-flex flex-no-wrap">
    <v-img max-width="150" :src="getImgUrl(cart_product.product.image_path)" :alt="cart_product.product.image_alt"></v-img>
    <div>
      <v-card-title
        v-text="cart_product.product.title"
      ></v-card-title>
      <v-card-actions>
        <v-btn
          class="mx-2"
          fab
          x-small
          color="primary"
          @click.prevent="updateQuantity(cart_product.product.id, 'decrease')"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        {{ cart_product.quantity }}
        <v-btn
          class="mx-2"
          fab
          x-small
          color="primary"
          @click.prevent="updateQuantity(cart_product.product.id, 'increase')"
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
  props: ['cart_product'],
  methods: {
    updateQuantity(product_id, mode) {
      this.$store.commit('UPDATE_QUANTITY', { product_id, mode });
    },
    getImgUrl(pic) {
      return require('@/assets/images/'+pic)
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
    font-size: 1.2em;
  }
</style>