<template>
    <v-card outlined>
    <h3>Coordonnées</h3>
    <ValidationObserver ref="observer" v-slot="{ validate, reset }">
        <form id="form-client" @submit.prevent="saveClient">
        <ValidationProvider v-slot="{ errors }" name="firstname" rules="required|max:40">
            <v-text-field
            v-model="firstname"
            :error-messages="errors"
            label="Prénom"
            required
            ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="lastname" rules="required|max:40">
            <v-text-field
            v-model="lastname"
            :error-messages="errors"
            label="Nom"
            required
            ></v-text-field>
        </ValidationProvider>
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
            <v-text-field
            v-model="address"
            :error-messages="errors"
            label="Adresse"
            required
            ></v-text-field>
        </ValidationProvider>

        <v-btn class="mr-4" @click="submit">Valider la commande</v-btn>
        <v-btn @click="clear">clear</v-btn>
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
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
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
      clear () {
        this.name = ''
        this.lastname = ''
        this.phone = ''
        this.email = ''
        this.address = null
        this.$refs.observer.reset()
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