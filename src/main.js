import Vue from 'vue'
import App from './App.vue'

export function createApp () {
  const app = new Vue({ // eslint-disable-line
    el: '#app',
    created () {
      console.info('+++ creact project +++')
    },

    render: h => h(App)
  })
  return { app }
}
