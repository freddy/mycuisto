<template>
  <v-container fluid>
    <v-row justify="center">
      <v-spacer></v-spacer>
      <v-col cols="10">
        <h1 class="pa-5">Foire aux questions</h1>
        <v-expansion-panels
          inset
          focusable
          hover
        >
          <v-expansion-panel
            v-for="(item,i) in items"
            :key="`${i}-faq`"
          >
            <v-expansion-panel-header class="justify-self-start">
              <div>
                <v-icon>mdi-map-marker-question-outline</v-icon>
                <span class="pa-2">{{ item.title }}</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.description }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    items: [
      {title: "Toto", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at pharetra eros. Fusce posuere porttitor condimentum. Nunc quis felis nec erat cursus ornare. Nulla vestibulum quis metus nec bibendum. Nam nisl velit, placerat id interdum id, imperdiet quis purus. Sed eget pulvinar augue. Phasellus ornare leo quis eleifend dapibus. Curabitur iaculis, libero id porttitor feugiat, felis justo auctor ligula, at pulvinar tortor velit vel nunc. Fusce sed nisi arcu. Maecenas ac metus leo."},
      {title: "Titi", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at pharetra eros. Fusce posuere porttitor condimentum. Nunc quis felis nec erat cursus ornare. Nulla vestibulum quis metus nec bibendum. Nam nisl velit, placerat id interdum id, imperdiet quis purus. Sed eget pulvinar augue. Phasellus ornare leo quis eleifend dapibus. Curabitur iaculis, libero id porttitor feugiat, felis justo auctor ligula, at pulvinar tortor velit vel nunc. Fusce sed nisi arcu. Maecenas ac metus leo."},
      {title: "Tata", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at pharetra eros. Fusce posuere porttitor condimentum. Nunc quis felis nec erat cursus ornare. Nulla vestibulum quis metus nec bibendum. Nam nisl velit, placerat id interdum id, imperdiet quis purus. Sed eget pulvinar augue. Phasellus ornare leo quis eleifend dapibus. Curabitur iaculis, libero id porttitor feugiat, felis justo auctor ligula, at pulvinar tortor velit vel nunc. Fusce sed nisi arcu. Maecenas ac metus leo."},
      {title: "Tutu", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at pharetra eros. Fusce posuere porttitor condimentum. Nunc quis felis nec erat cursus ornare. Nulla vestibulum quis metus nec bibendum. Nam nisl velit, placerat id interdum id, imperdiet quis purus. Sed eget pulvinar augue. Phasellus ornare leo quis eleifend dapibus. Curabitur iaculis, libero id porttitor feugiat, felis justo auctor ligula, at pulvinar tortor velit vel nunc. Fusce sed nisi arcu. Maecenas ac metus leo."},
      {title: "Tete", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at pharetra eros. Fusce posuere porttitor condimentum. Nunc quis felis nec erat cursus ornare. Nulla vestibulum quis metus nec bibendum. Nam nisl velit, placerat id interdum id, imperdiet quis purus. Sed eget pulvinar augue. Phasellus ornare leo quis eleifend dapibus. Curabitur iaculis, libero id porttitor feugiat, felis justo auctor ligula, at pulvinar tortor velit vel nunc. Fusce sed nisi arcu. Maecenas ac metus leo."},
      {title: "Tuitui", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at pharetra eros. Fusce posuere porttitor condimentum. Nunc quis felis nec erat cursus ornare. Nulla vestibulum quis metus nec bibendum. Nam nisl velit, placerat id interdum id, imperdiet quis purus. Sed eget pulvinar augue. Phasellus ornare leo quis eleifend dapibus. Curabitur iaculis, libero id porttitor feugiat, felis justo auctor ligula, at pulvinar tortor velit vel nunc. Fusce sed nisi arcu. Maecenas ac metus leo."},
    ]
  }),
}
</script>

<style lang="css">
</style>