import Vue from 'vue'
import App from './App.vue'
// import {createRenderer} from 'vue-server-renderer'

const renderer = require('vue-server-renderer').createRenderer()

const app = new Vue({ // eslint-disable-line
  el: '#app',
  created () {
    console.info('+++ creact project +++')
  },

  render: h => h(App)
})

console.log(renderer)
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
  // => <div data-server-rendered="true">hello world</div>
})
