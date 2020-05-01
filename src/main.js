import Vue from 'vue'
import './plugins/fontawesome'
import './assets/styles/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header'

Vue.component('Header', Header)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
