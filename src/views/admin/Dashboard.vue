<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-spacer></v-spacer>
        <v-col cols="10">
          <h1 class="text-capitalize">Liste des commandes</h1>
          <v-divider class="mb-3" />
          <v-data-table
            :headers="headers"
            :items="orders"
            :sort-by="['date', 'address']"
            :sort-desc="[false, true]"
            multi-sort
            class="elevation-1"
          ></v-data-table>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      orders: [],
      errors: [],
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Date', value: 'date' },
        { text: 'Ville', value: 'address' },
        { text: 'Montant', value: 'amount' },
        { text: 'Etat', value: 'status' },
      ],
    }
  },
  created () {
    axios.get(`http://localhost:3000/orders`)
    .then((response) => {
      this.orders = response.data.map(
        e => {
          return {
            date: e.deliveryDate,
            address: e.customer.address,
            amount: '',
            status: 'New',
          }
        }
      )
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style lang="css">
</style>