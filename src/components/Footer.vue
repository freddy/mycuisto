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

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4"
          dark
          icon
          @click="goToSocial(icon.link)"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="4">
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
                  <v-img :src="require('@/assets/images/massimo.jpg')"></v-img>
                </v-avatar>
                <div>
                  <v-card-title
                    class="headline"
                    v-text="owner_card.name"
                  ></v-card-title>

                  <v-card-subtitle class="black--text" v-html="owner_card.description"></v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            v-for="(conf) in column"
            :key="`${conf.key}-footer-column${conf.key}`"
            :cols="`${conf.size}`"
          >
            <div
              class="my-2"
              v-for="link in conf.data"
              :key="`${link.path}-footer-column${conf.key}-link`"
            >
              <v-btn
                text large
                :to="link.path"
              >
                {{ link.title }}
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
  data() {
    return {
      icons: [
        {'icon': 'mdi-facebook', 'link': "https://www.facebook.com/comeprimaa"},
        {'icon': 'mdi-twitter', 'link': "https://twitter.com/PizzaPizzaLtd"},
        {'icon': 'mdi-instagram', 'link': "https://www.instagram.com/andpizza/"},
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
          "data": [
            {'title': 'À propos', 'path': "qui-sommes-nous"},
            {'title': 'Mentions legales', 'path': "cgu"},
            {'title': 'Consultez la FAQ', 'path': "faq"},
          ]
        },
        {
          'key': '2',
          "size": "4",
          "data": [
            {'title': 'Politique de confidentialité', 'path': "confidentialite"},
            {'title': 'Plan du site', 'path': "sitemap"},
            {'title': 'Contact', 'path': "contact"},
          ]
        },
      ],
    }
  },
  methods: {
    goToSocial(link) {
      return window.open(link);
    }
  }
}
</script>

<style>
</style>