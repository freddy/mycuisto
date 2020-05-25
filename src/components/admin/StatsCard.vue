<template>
  <MaterialCard
    :icon="icon"
    class="v-card--material-stats"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:after-heading>
      <div class="ml-auto text-right">
        <div
          class="body-2 grey--text font-weight-light"
          v-text="title"
        />

        <h3 class="title font-weight-bold text--primary">
          {{ value }} <small>{{ smallValue }}</small>
        </h3>
      </div>
    </template>

    <v-col
      cols="12"
      class="px-0"
    >
      <v-divider />
    </v-col>

    <v-icon
      :color="subIconColor"
      size="16"
      class="ml-2 mr-1"
    >
      {{ subIcon }}
    </v-icon>

    <span
      :class="subTextColor"
      class="caption grey--text font-weight-light"
      v-text="subText"
    />
  </MaterialCard>
</template>

<script>
import MaterialCard from '@/components/admin/MaterialCard.vue'

export default {
  name: 'StatsCard',
  components: { MaterialCard },

  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      required: true,
    },
    subIcon: {
      type: String,
      default: undefined,
    },
    subIconColor: {
      type: String,
      default: undefined,
    },
    subTextColor: {
      type: String,
      default: undefined,
    },
    subText: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    value: {
      type: String,
      default: undefined,
    },
    smallValue: {
      type: String,
      default: undefined,
    },
  },
}
</script>

