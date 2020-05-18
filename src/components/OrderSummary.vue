<template>
    <div>
          <v-card outlined>
              <v-card-title>
                  <h4>Résumé</h4>
              </v-card-title>
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
                    <tr :cart_product="cart_product" v-for="(cart_product, $cartItemIndex) of getCartProducts" :key="'total-'+$cartItemIndex">
                        <td scope="row">{{ cart_product.product.title }}</td>
                        <td class="text-center">{{ cart_product.quantity }}</td>
                        <td class="text-center">{{ cart_product.product.price * cart_product.quantity | currencyFormat }}</td>
                    </tr>
                    <tr>
                        <th scope="row" class="subtitle-1 font-weight-bold">Total</th>
                        <td></td>
                        <th class="text-center subtitle-1 font-weight-bold">{{ getTotalAmount | currencyFormat }}</th>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  filters: {
    currencyFormat (value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' €'
    }
  },
  computed: {
    ...mapGetters(['getCartProducts', 'getTotalAmount'])
  }
}
</script>