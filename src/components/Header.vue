<template>
  <v-app-bar
    app
    dense
    color="#F1F1F1"
  >
    <v-toolbar-title>
      <v-btn
        link
        text
        exact
        :to="{ name: 'home' }"
      >
        <v-img
          class="float-left mr-3"
          width="24"
          :src="require('@/assets/images/logo-mycuisto.png')"
          alt="logo"
        />
        My Cuisto
      </v-btn>
    </v-toolbar-title>
    <v-spacer />
    <!-- <v-btn
      v-for="link in links"
      :key="`${link.name}-header-link`"
      text
      rounded
      :to="link.path"
    >
      {{ link.name }}
    </v-btn> -->
    <v-tooltip
      bottom
      eager
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <a
            style="text-decoration:none;color:currentColor;"
            href="tel:+336 12345678"
          >
            <v-icon>mdi-phone-outline</v-icon>
          </a>
        </v-btn>
      </template>
      <span>06 12345678</span>
    </v-tooltip>
    <v-tooltip
      bottom
      eager
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          :to="{ name: 'panier' }"
          v-on="on"
        >
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </template>
      <span>Mon Panier</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          light
          icon
          :to="{ name: 'dashboard' }"
          v-on="on"
        >
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </template>
      <span>Gestionnaire Administrateur</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
}
</script>

<style>
</style>
