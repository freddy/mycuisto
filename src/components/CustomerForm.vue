<template>
  <v-card outlined>
<<<<<<< HEAD
    <v-card-title><h4>Coordonnées</h4></v-card-title>
    <ValidationObserver ref="observer">
      <form id="form-client" @submit.prevent="saveClient">
        <v-container class="pt-0">
          <v-row class="py-0">
            <v-col
              cols="12"
              md="6"
              class="py-0"
=======
    <v-card-title class="pb-0"><h4>Coordonnées</h4></v-card-title>
    <ValidationObserver ref="observer">
      <form id="form-client" @submit.prevent="saveClient">
        <v-container class="pt-0">
          <v-row>
            <v-col
              cols="12"
              md="6"
>>>>>>> master
              >
              <ValidationProvider v-slot="{ errors }" name="firstname" rules="required|max:40">
                <v-text-field
                v-model="firstname"
                :error-messages="errors"
                label="Prénom"
                required
                ></v-text-field>
              </ValidationProvider>
            </v-col>
            <v-col
              cols="12"
              md="6"
<<<<<<< HEAD
              class="py-0"
=======
>>>>>>> master
              >
              <ValidationProvider v-slot="{ errors }" name="lastname" rules="required|max:40">
                <v-text-field
                v-model="lastname"
                :error-messages="errors"
                label="Nom"
                required
                ></v-text-field>
              </ValidationProvider>
                </v-col>
            </v-row>

          <ValidationProvider v-slot="{ errors }" name="phone" rules="required|max:12">
            <v-text-field
            v-model="phone"
            :counter="12"
            :error-messages="errors"
            label="Téléphone"
            required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
            <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="address" rules="required">
            <v-textarea
            auto-grow
            rows="2"
            v-model="address"
            :error-messages="errors"
            label="Adresse"
            required
            ></v-textarea>
          </ValidationProvider>
          <v-btn class="mt-5 success" x-large block @click="submit">Valider la commande</v-btn>
        </v-container>
      </form>
    </ValidationObserver>
  </v-card>
</template>

<script>
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
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            address: "",
        }
    },
    methods: {
      submit () {
        this.$refs.observer.validate()
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