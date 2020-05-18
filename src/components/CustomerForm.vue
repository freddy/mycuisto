<template>
  <v-card outlined>
    <v-card-title><h4>Livraison</h4></v-card-title>
    <ValidationObserver ref="observer">
      <form id="form-client">
        <v-container class="pt-0">
          <v-row class="py-0">
            <v-col
              cols="12"
              md="6"
              class="py-0"
              >
              <ValidationProvider v-slot="{ errors }" name="firstname" rules="required|max:40">
                <v-text-field
                v-model="order.customer.firstname"
                :error-messages="errors"
                label="Prénom"
                required
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="py-0"
              >
              <ValidationProvider v-slot="{ errors }" name="lastname">
                <v-text-field
                v-model="order.customer.lastname"
                :error-messages="errors"
                label="Nom"
                required
                ></v-text-field>
              </ValidationProvider>
                </v-col>
            </v-row>

          <ValidationProvider v-slot="{ errors }" name="phone" rules="required|max:12">
            <v-text-field
            v-model="order.customer.phone"
            :counter="12"
            :error-messages="errors"
            label="Téléphone"
            required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
            <v-text-field
            v-model="order.customer.email"
            :error-messages="errors"
            label="E-mail"
            required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="address" rules="required">
            <v-textarea
            auto-grow
            rows="2"
            v-model="order.customer.address"
            :error-messages="errors"
            label="Adresse"
            required
            ></v-textarea>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="deliveryDate">
            <v-select
              prepend-icon="mdi-calendar-clock"
              label="Date de livraison"
              :error-messages="errors"
              v-model="order.deliveryDate"
              :items="days"
              hint="Je vous contacte directement pour définir l'heure de livraison"
                        persistent-hint

            >
            </v-select>
          </ValidationProvider>
          <v-btn class="mt-5 success" x-large block @click="submit">Valider la commande</v-btn>
        </v-container>
      </form>
    </ValidationObserver>
  </v-card>
</template>

<script>
  import axios from 'axios';
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import { mapState } from 'vuex'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} ne peut être vide',
  })

  extend('max', {
    ...max,
    message: '{_field_} ne peut faire plus de  {length} caractères',
  })

  extend('email', {
    ...email,
    message: 'Email doit être valide',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data() {
        return {
          order: {
            customer: {
              firstname: "f",
              lastname: "l",
              phone: "1",
              email: "f@f.com",
              address: "address",
            },
            cart: this.$store.state.cart,
            deliveryDate: ""
          },
          errors: []
        }
    },
    computed: {
      ...mapState(['cart']),
      days: () => {
        let result = []
        let date = new Date()
        for (let i = 1; i < 5; i++) {
          date.setDate(date.getDate() + 1)
          // visible date
          let month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'][date.getMonth()]
          let dayNumber = ('0' + date.getDate()).slice(-2)
          let dayText = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'][date.getDay()]
          let relativeDay = ['demain', 'après-demain', 'dans deux jours', 'dans trois jours'][i-1]
          let formattedDate = dayText+', '+dayNumber + ' ' + month + ' ('+relativeDay+')'
          // saved date
          let savedDate = new Date(date).toISOString()

          result.push({
            text: formattedDate,
            value: savedDate
          })
        }
        return result
      }
    },
    methods: {
      submit () {
        if (this.$refs.observer.validate()) {
          axios.post('http://localhost:3000/orders', this.order)
          .then(
            this.$router.push({ name: 'cart_validation' })
          )
          .catch(e => {
            let errors = {}
            Object.values(e.response.data.errors).forEach((e) => {
              errors[e.path] = [e.message]
            })
            this.$refs.observer.setErrors(errors)
          })
        }
      }
    }
  }
</script>