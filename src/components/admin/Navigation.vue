<template>
  <div>
    <v-app-bar
      v-if="!drawer"
      color="color"
      light
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :color="color"
      app
      mobile-break-point="800"
      bottom
      light
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item
          two-line
          class="true && 'px-0'"
        >
          <v-list-item-avatar>
            <v-img
              :src="require('@/assets/images/logo-mycuisto.png')"
              alt="logo"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>My Cuisto</v-list-item-title>
            <v-list-item-subtitle>Admin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>
              CMS
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="c in cms"
          :key="c.title"
          link
          :to="c.path"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ c.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ c.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            block
            color="error"
          >
            Deconnexion
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [{
        title: 'Visite Website',
        icon: 'mdi-home-city',
        path: {
          name: 'home'
        }
      },
      {
        title: 'Dashboard',
        icon: 'mdi-view-dashboard',
        path: {
          name: 'dashboard'
        }
      },
      {
        title: 'Produits',
        icon: 'mdi-barcode',
        path: {
          name: 'manage_product'
        }
      },
      ],
      cms: [{
        title: 'Page d\'accueil',
        icon: 'mdi-home-edit-outline',
        path: {
          name: '?'
        }
      },
      {
        title: 'Mentions legales',
        icon: 'mdi-bank-outline',
        path: {
          name: '?'
        }
      },
      {
        title: 'FAQ',
        icon: 'mdi-map-marker-question-outline',
        path: {
          name: '?'
        }
      },
      ],
      color: 'blue lighten-5',
    }
  },
}
</script>