<template>
    <div class="card">
        <img :src="getImgUrl(product.image_path)" class="card-img-top" :alt="product.image_alt">

        <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="badge badge-secondary price">{{ product.price | currencyFormat }}</p>
            <div class="mt-2">

            <span class="btn btn-primary"
                @click="addToCart($event, product.id)"
                >ajouter</span>
            </div>
        </div>
    </div>
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