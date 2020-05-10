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
                        <th class="text-left">Qté</th>
                        <th class="text-left">Prix</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :cart_product="cart_product" v-for="(cart_product, $cartItemIndex) of cart_products" :key="'total-'+$cartItemIndex">
                        <td scope="row">{{ cart_product.product.title }}</td>
                        <td>{{ cart_product.quantity }}</td>
                        <td>{{ cart_product.product.price * cart_product.quantity | currencyFormat }}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th scope="row">Total</th>
                        <td></td>
                        <td>{{ totalPrice | currencyFormat }}</td>
                    </tr>
                    </tfoot>
                </template>
            </v-simple-table>
        </v-card>
    </div>
</template>

<script>
export default {
  props: ['cart_products'],
  filters: {
    currencyFormat (value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+' €'
    }
  },
  computed: {
    totalPrice () {
      return this.cart_products.reduce(
        (acc, cart_product) => {
          return acc + cart_product.quantity * cart_product.product.price
      }, 0)
    }
  }
}
</script>