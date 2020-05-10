<template>
  <v-app>
    <Header :links="header_links" />
    <v-content>
      <v-container
        class="pa-0"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer :links="footer_links" />
    <!-- <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-flex primary lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} — <strong>My Cuisto</strong>
        </v-flex>
      </v-layout>
    </v-footer> -->
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: { Header, Footer },
  created() {
    this.$router.options.routes.forEach(route => {
      if (this.header.includes(route.name)) {
        this.header_links.push({
          name: route.name,
          path: route.path
        })
      }
      else if (this.footer.includes(route.name)) {
        this.footer_links.push({
          name: route.name,
          path: route.path
        })
      }
    })
  },
  data() {
    return {
      header: ['panier'],
      footer: ['a propos', 'mentions legales', 'consultez la faq', 'politique de confidentialité', 'plan du site', 'contact'],
      header_links: [],
      footer_links: []
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = '#41B883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
