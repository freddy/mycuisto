<template>
  <div>
    <AdminNav />
    <v-container fluid>
      <v-row justify="center">
        <v-spacer />
        <v-col cols="10">
          <v-data-table
            :headers="headers"
            :items="products"
            sort-by="title"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar
                flat
                color="white"
              >
                <v-toolbar-title>Mes produits</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                />
                <v-spacer />
                <v-dialog
                  v-model="dialog"
                  max-width="500px"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-on="on"
                    >
                      Ajouter
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.title"
                              label="Nom du produit"
                            />
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                              v-model="editedItem.description"
                              auto-grow
                              rows="2"
                              label="Description"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-text-field
                              v-model="editedItem.image_path"
                              label="Lien de l'image"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-text-field
                              v-model="editedItem.image_alt"
                              label="Description de l'image"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-text-field
                              v-model="editedItem.price"
                              label="Prix"
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-switch
                              v-model="editedItem.top"
                              label="Top produit"
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="red darken-1"
                        text
                        warning
                        @click="close"
                      >
                        Annuler
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="save"
                      >
                        Enregistrer
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.top="{ item }">
              <v-simple-checkbox
                v-model="item.top"
                disabled
              />
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item)"
              >
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn
                color="primary"
                @click="initialize"
              >
                Reset
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import AdminNav from '@/components/admin/Navigation.vue'

export default {
  components: { AdminNav },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Produits',
        align: 'start',
        sortable: false,
        value: 'title',
      },
      { text: 'Description', value: 'description', sortable: false },
      { text: 'Prix', value: 'price' },
      { text: 'Top produits', value: 'top' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      description: "",
      image_path: "",
      image_alt: "",
      price: 0,
      top: "true"
    },
    defaultItem: {
      title: "",
      description: "",
      image_path: "",
      image_alt: "",
      price: 0,
      top: true
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Ajouter un produit' : 'Editer un produit'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.products = [
        {
          id: 1,
          title: "Lasagne alla siciliana",
          description: "Sauce tomate, sauce bolognese, champignons, parmigiano, petits pois, œuf dur",
          image_path: "lasagnes.png",
          image_alt: "Plat de Lasagne",
          price: "7.50",
          top: true
        },
        {
          id: 2,
          title: "Arancini al ragù",
          description: "Spécialité sicilienne boule de riz panée farcie de viande petit pois ,œuf dur et provolone",
          image_path: "arancini.png",
          image_alt: "",
          price: "4.50",
          top: true
        },
        {
          id: 3,
          title: "Arancini spinaci",
          description: "Boule de riz farci aux épinards et provolone",
          image_path: "arancini.png",
          image_alt: "",
          price: "4.50",
          top: false
        },
        {
          id: 4,
          title: "Patons de pizza",
          description: "",
          image_path: "patons.png",
          image_alt: "",
          price: "2.50",
          top: true
        },
      ]
    },

    editItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.products.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.products.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem)
      } else {
        this.products.push(this.editedItem)
        axios.post('http://localhost:3000/products', this.editedItem)
          .then(
          )
          .catch()
      }
      this.close()
    },
  },
}
</script>