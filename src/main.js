import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

export function createApp () {
  const app = new Vue({ // eslint-disable-line
    el: '#app',
    router,
    store,
    created () {
      console.info('+++ creact project +++')
    },

    render: h => h(App)
  })
  return { app }
}
