<template>
   <!-- Fixed navbar -->
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <router-link
      :to="{ name: 'home' }"
      class="navbar-brand"
      >
        My Cuisto
      </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"
          :class="{ active: true }" >
          <router-link
          :to="{ name: 'order' }"
          class="nav-link"
          >
            Order
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
</style>
