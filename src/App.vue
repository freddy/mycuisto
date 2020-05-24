<template>
  <v-app>
    <Header
      v-if="!this.$route.path.match('/cuisine/*')"
      :links="header_links"
    />
    <AdminNav v-if="this.$route.path.match('/cuisine/*')" />
    <v-content>
      <v-container
        class="pa-0"
        fluid
      >
        <router-view />
      </v-container>
    </v-content>
    <Footer
      v-if="!this.$route.path.match('/cuisine/*')"
      :links="footer_links"
    />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AdminNav from '@/components/admin/Navigation.vue'

export default {
  name: 'App',
  components: { Header, Footer, AdminNav },
  data () {
    return {
      header: ['panier', 'dashboard'],
      footer: ['a propos', 'mentions legales', 'consultez la faq', 'politique de confidentialité', 'plan du site', 'contact'],
      header_links: [],
      footer_links: []
    }
  },
  created () {
    console.log(this.$route.path)
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
  methods: {
    toggleTheme () {
      this.$vuetify.theme.themes.dark.anchor = '#41B883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
