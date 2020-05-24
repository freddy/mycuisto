<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary py-4 text-center white--text">
        <strong class="subheading">Connectez-vous avec nous sur les réseaux sociaux!</strong>

        <v-spacer />

        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4"
          dark
          icon
          @click="goToSocial(icon.link)"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-container>
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
            md="4"
            sm="12"
          >
            <v-card
              class="black--text"
              light
              min-width="320"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="require('@/assets/images/massimo.jpg')" />
                </v-avatar>
                <div>
                  <v-card-title
                    class="headline"
                    v-text="owner_card.name"
                  />

                  <v-card-subtitle class="black--text">
                    <span v-html="owner_card.description" />
                  </v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-spacer />
          <v-col
            v-for="(conf) in column"
            :key="`${conf.key}-footer-column${conf.key}`"
            col="12"
            :md="`${conf.size}`"
            sm="6"
            style="pa-2"
          >
            <div
              v-for="link in conf.data"
              :key="`${link.path}-footer-column${conf.key}-link`"
              class="my-2"
            >
              <v-btn
                text
                large
                :to="link.path"
              >
                {{ link.name }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Copyright © My Cuisto</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["links"],
  data () {
    return {
      icons: [
        { 'icon': 'mdi-facebook', 'link': "https://www.facebook.com/comeprimaa" },
      ],
      owner_card: {
        'name': 'Massimo',
        'description': 'Cusinier depuis toujours. <br/>Je vous propose de gouter mes créations digne des plus grands restaurants gastronomique.<br/> Bonne Appétit!',
        'picture': '',
      },
      column: [
        {
          'key': '1',
          "size": "3",
          "data": this.links.slice(0, 3)
        },
        {
          'key': '2',
          "size": "4",
          "data": this.links.slice(3, 6)
        },
      ],
    }
  },
  methods: {
    goToSocial (link) {
      return window.open(link);
    }
  }
}
</script>

<style>
</style>