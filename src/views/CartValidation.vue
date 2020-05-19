<template>
  <v-row>
    <v-spacer />
    <v-col col="10">
      <v-card class="my-5" tile>
        <v-card-title
          ><h1 class="display-1">Commande enregistrée</h1></v-card-title
        >
        <v-card-text>
          <p class="subtitle">Votre commande a bien été prise en compte.</p>
          <p>
            Bonjour {{ order.customer.firstname }} {{ order.customer.lastname }}
          </p>
          <p>
            Massimo va prendre contact avec vous
            <template v-if="order.customer.phone">
              par téléphone au {{ order.customer.phone }}</template
            >
            afin de la confirmer et vous proposer une heure de livraison.
          </p>
          <p>
            Votre commande sera livrée le {{ order.deliveryDate }} à l'adresse
            renseignée :<br />
            {{ order.customer.address }}
          </p>
          <p v-if="order.customer.email">
            Ce résumé de commande vous a été transmis à votre email
            {{ order.customer.email }}
          </p>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Produit</th>
                  <th class="text-center">Quantité</th>
                  <th class="text-center">Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  :cart_product="cart_product"
                  v-for="(cart_product, $cartItemIndex) of getCartProducts"
                  :key="'total-' + $cartItemIndex"
                >
                  <td scope="row">{{ cart_product.product.title }}</td>
                  <td class="text-center">{{ cart_product.quantity }}</td>
                  <td class="text-center">
                    {{
                      (cart_product.product.price * cart_product.quantity)
                        | currencyFormat
                    }}
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="subtitle-1 font-weight-bold">Total</th>
                  <td></td>
                  <th class="text-center subtitle-1 font-weight-bold">
                    {{ getTotalAmount | currencyFormat }}
                  </th>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
      <v-spacer />
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      order: {}
    }
  },
  created() {
    let orderId = '5ec2f835c0c7e7260871bc1c'
    axios
      .get(`http://localhost:3000/orders/${orderId}`)
      .then(response => {
        this.order = response.data
      })
      .catch()
  },
  filters: {
    currencyFormat(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €'
    }
  },
  computed: {
    ...mapGetters(['getCartProducts', 'getTotalAmount'])
  }
}
</script>
