<template>
  <v-container fluid>
    <v-row justify="center">
      <v-spacer></v-spacer>
      <v-col cols="10">
        <h1 class="text-capitalize">site map</h1>
        <v-divider class="mb-3" />
        <v-treeview
            open-all
            dense
            :items="items"
        >
          <template slot="label" slot-scope="props">
            <v-icon class="mr-3">mdi-link-variant</v-icon>
            <router-link
              :to="props.item.path"
              v-if="props.item.path"
              class="text-capitalize black--text"
            >
              {{ props.item.name }}
            </router-link>
            <span v-else>{{ props.item.name }}</span>
          </template>
        </v-treeview>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>

export default {
  created() {
    this.$router.options.routes.forEach((route, index) => {
      this.items.push({
        id: index,
        name: route.name,
        path: route.path
      })
    })
  },
  data() {
    return {
      items: []
    }
  },
}
</script>

<style lang="css">
</style>