<template>
  <div class="home">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Contenu de la commande:</h2>
                <CartProductItem :cart_product="getCartProduct(cart_product.product_id)" v-for="(cart_product, $cartItemIndex) of cart" :key="$cartItemIndex" />
            </div>
            <div class="col-6">
              <h2>Informations personnel:</h2>


                <div class="card">
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label for="firstname">Nom</label>
                        <input type="text" class="form-control" id="firstname" :value="client.firstname">
                      </div>
                      <div class="form-group">
                        <label for="lastname">Prénom</label>
                        <input type="text" class="form-control" id="lastname" :value="client.lastname">
                      </div>
                      <div class="form-group">
                        <label for="phone">Téléphono</label>
                        <input type="text" class="form-control" id="phone" :value="client.phone">
                      </div>
                      <label for="email">Email</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="email">@</span>
                        </div>
                        <input type="text" class="form-control" id="email" aria-describedby="inputGroupPrepend2" required>
                      </div>
                      <div class="form-group">
                        <label for="address">Adresse Postale</label>
                        <textarea class="form-control" id="address" rows="3" :value="client.address"></textarea>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary btn-lg btn-block"
                        @click="saveClient($event, client)"
                        >Valider</button>
                    </form>
                  </div>
                </div>

            </div>
        </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

import CartProductItem from '../components/CartProductItem.vue'
export default {
  components: { CartProductItem },
  computed: {
    ...mapState(['cart', 'client']),
    ...mapGetters(['getCartProduct'])
  },
  methods: {
    saveClient (e, client) {
      this.$store.commit(
        'SAVE_CLIENT',
        {
          firstname: client.firstname,
          lastname: client.lastname,
          phone: client.phone,
          email: client.email,
          adresse: client.adresse,
        }
      );

    }
  }
}
</script>

<style lang="css">
</style>