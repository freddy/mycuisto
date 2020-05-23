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
    <v-btn
      v-for="link in links"
      :key="`${link.name}-header-link`"
      text
      rounded
      :to="link.path"
    >
      {{ link.name }}
    </v-btn>
    <v-btn
      text
      rounded
    >
      <v-icon> mdi-phone </v-icon>
      06 12345678
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["links"]
}
</script>

<style>
</style>
