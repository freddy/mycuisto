<template>
    <div class="card">
        <img :src="product.image_path" class="card-img-top" :alt="product.image_alt">
        <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <span
            class="btn btn-primary"
            @click="addToCart($event, product_id)">
                {{ product.price }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
  props: ['product','product_id'],
  methods: {
    addToCart(e, product_id) {
        this.$store.commit('CREATE_CART_ITEM', { product_id })
        // redirect to order page
        this.$router.push({ name: 'order' })
    }
  }
}
</script>