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
