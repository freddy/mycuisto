<template>
<div class="card mb-3">
    <div class="row no-gutters">
        <div class="col-md-4">
        <img :src="product.image_path" class="card-img" :alt="product.image_alt">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['product']
}
</script>