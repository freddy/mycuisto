<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="`${link.name}-header-link`"
      text
      rounded
      :to="link.path"
    >
      {{ link.name }}
    </v-btn>
    <v-btn @click="toggleTheme" text rounded>
      <v-icon mdi mdi-phone />
      06 12345678
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: ['links']
}
</script>

<style>
</style>
