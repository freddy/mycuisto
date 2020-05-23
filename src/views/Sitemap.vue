<template>
  <v-container fluid>
    <v-row justify="center">
      <v-spacer />
      <v-col cols="10">
        <h1 class="text-capitalize">
          site map
        </h1>
        <v-divider class="mb-3" />
        <v-treeview
          slot="label"
          slot-scope="props"
          open
          all
          dense
          :items="items"
          ot="label"
        >
          <v-icon class="mr-3">
            mdi-link-variant
          </v-icon>
          <router-link
            v-if="props.item.path"
            :to="props.item.path"
            class="text-capitalize black--text"
          >
            {{ props.item.name }}
          </router-link>
          <span v-else>{{ props.item.name }}</span>
        </v-treeview>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [],
    }
  },
  created () {
    this.$router.options.routes.forEach((route, index) => {
      this.items.push({
        id: index,
        name: route.name,
        path: route.path,
      })
    })
  },
}
</script>

<style lang="css"></style>
