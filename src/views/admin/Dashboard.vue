<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-spacer />
        <v-col cols="10">
          <h1 class="text-capitalize">
            Massimo Dashboard
          </h1>
        </v-col>
        <v-spacer />
      </v-row>
      <v-divider class="mb-3" />
      <v-row class="my-10">
        <v-col
          class="py-5"
          cols="12"
          sm="6"
          lg="3"
        >
          <StatsCard
            color="info"
            icon="mdi-facebook"
            title="Communauté"
            value="2 379"
            sub-icon="mdi-clock"
            sub-text="à jour"
          />
        </v-col>

        <v-col
          class="py-5"
          cols="12"
          sm="6"
          lg="3"
        >
          <StatsCard
            color="primary"
            icon="mdi-poll"
            title="Audiance"
            value="75.521"
            sub-icon="mdi-tag"
            sub-text="Suivi Google Analytics"
          />
        </v-col>

        <v-col
          class="py-5"
          cols="12"
          sm="6"
          lg="3"
        >
          <StatsCard
            color="success"
            icon="mdi-store"
            title="Revenue"
            value="5487,30 €"
            sub-icon="mdi-calendar"
            sub-text="Dernière 24h"
          />
        </v-col>

        <v-col
          class="py-5"
          cols="12"
          sm="6"
          lg="3"
        >
          <StatsCard
            color="orange"
            icon="mdi-basket"
            title="Commandes"
            value="4"
            sub-icon="mdi-alert"
            sub-icon-color="red"
            sub-text="Get More Space..."
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import StatsCard from '@/components/admin/StatsCard.vue'

export default {
  components: { StatsCard },
}
</script>

<style lang="css"></style>
