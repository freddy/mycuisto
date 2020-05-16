<template>
  <v-card outlined>
    <v-card-title><h4>Livraison</h4></v-card-title>
    <ValidationObserver ref="observer">
      <form id="form-client" @submit.prevent="saveClient">
        <v-container class="pt-0">
          <v-row class="py-0">
            <v-col
              cols="12"
              md="6"
              class="py-0"
              >
              <ValidationProvider v-slot="{ errors }" name="firstname" rules="required|max:40">
                <v-text-field
                v-model="customer.firstname"
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
              <ValidationProvider v-slot="{ errors }" name="lastname" rules="required|max:40">
                <v-text-field
                v-model="customer.lastname"
                :error-messages="errors"
                label="Nom"
                required
                ></v-text-field>
              </ValidationProvider>
                </v-col>
            </v-row>

          <ValidationProvider v-slot="{ errors }" name="phone" rules="required|max:12">
            <v-text-field
            v-model="customer.phone"
            :counter="12"
            :error-messages="errors"
            label="Téléphone"
            required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
            <v-text-field
            v-model="customer.email"
            :error-messages="errors"
            label="E-mail"
            required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="address" rules="required">
            <v-textarea
            auto-grow
            rows="2"
            v-model="customer.address"
            :error-messages="errors"
            label="Adresse"
            required
            ></v-textarea>
          </ValidationProvider>
          <v-chip-group
            v-model="order.deliveryDate"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-icon class="mr-3">mdi-calendar-clock</v-icon>
            <v-chip v-for="(day, $index) of days" :key="'day-'+$index">{{ day }}</v-chip>
          </v-chip-group>
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
          customer: {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            address: "",
          },
          order: {
            deliveryDate: "",
          },
          errors: []
        }
    },
    computed: {
      days: () => {
        let result = []
        let date = new Date()
        for (let i = 1; i < 4; i++) {
          date.setDate(date.getDate() + 1)
          let month = ('0' + (date.getMonth() + 1)).slice(-2)
          let day = ('0' + date.getDate()).slice(-2)
          let formattedDate = day + '/' + month

          result.push(formattedDate)
        }
        return result
      }
    },
    methods: {
      submit () {
        this.$refs.observer.validate()
        axios.post(`http://localhost:3000/orders`,
          this.customer
        )
        .then({})
        .catch(e => {
          this.errors.push(e)
        })
      },
      saveClient () {
        let client = {
            firstname: this.firstname,
            lastname: this.lastname,
            phone: this.phone,
            email: this.email,
            address: this.address,
        }

        this.firstname = null,
        this.lastname = null,
        this.phone = null,
        this.email = null,
        this.address = null,

        this.$store.commit(
            'SAVE_CLIENT',
            client
        );

        this.$router.push({ name: 'cart_validation' })
      }
    }
  }
</script>