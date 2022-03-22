import 'core-js/stable'
import 'regenerator-runtime/runtime'
// cookieconsent
import 'cookieconsent'
import 'cookieconsent/build/cookieconsent.min.css'
import Vue from 'vue/dist/vue.esm'
import store from '../store.js';
import FilterableTable from '@unep-wcmc/wcmc-components'
import '../stylesheets/application.scss';
// import TurbolinksAdapter from 'vue-turbolinks'

Vue.config.productionTip = false
Vue.use(FilterableTable, { store })
// Vue.use(TurbolinksAdapter)
import PageHome from '../components/PageHome.vue'

const images = require.context('../images', true)
require('../stylesheets/application.scss')

// document.addEventListener('turbolinks:load', () => {
document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('v-app')) {
    // new Vue({
    //   render: h => h(PageHome),
    // }).$mount('#v-app')

    new Vue({
      el: '#v-app',
      store,
      components: {
        PageHome
      }
    })
  }
})