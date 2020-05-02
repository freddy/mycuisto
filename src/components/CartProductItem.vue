<template>
<div class="card mb-3">
    <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="getImgUrl(cart_product.product.image_path)" class="card-img" :alt="cart_product.product.image_alt">
        </div>
        <div class="col-md-8">
          <div class="card-body">
              <h5 class="card-title">{{ cart_product.product.title }}</h5>
              <p class="card-text">{{ cart_product.product.description }}</p>

              <div class="row">
                <div class="col-sm-4">
                  <small class="card-text">{{ cart_product.product.price | currencyFormat }} / unit</small>
                </div>
                <div class="col-sm-4">
                  <p class="badge badge-secondary price">{{ cart_product.product.price * cart_product.quantity | currencyFormat }}</p>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label>Quantité
                      <input type="number" class="form-control form-control-sm" id="quantity" min="0" step="1" :value="cart_product.quantity" @change="updateQuantity($event, cart_product.product.id)" />

                    </label>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['cart_product'],
  methods: {
    updateQuantity(e, product_id) {
      this.$store.commit('UPDATE_QUANTITY', { product_id, quantity: parseInt(e.target.value) });
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
    font-size: 1.2em;
  }
</style>