<template>
<div class="card mb-3">
    <div class="row no-gutters">
        <div class="col-md-4">
        <img :src="cart_product.product.image_path" class="card-img" :alt="cart_product.product.image_alt">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">{{ cart_product.product.title }}</h5>
            <p class="card-text">{{ cart_product.product.description }}</p>
            <input type="number" @change="updateQuantity($event, cart_product.product.id)" :value="cart_product.quantity" />
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
        console.log(product_id)
      this.$store.commit('UPDATE_QUANTITY', { product_id, quantity: e.target.value });
    }
  }
}
</script>