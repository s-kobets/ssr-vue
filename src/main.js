import Vue from 'vue'
import App from './App.vue'

new Vue({ // eslint-disable-line
  el: '#app',
  created () {
    console.info('+++ creact project +++')
  },

  render: h => h(App)
})