const Vue = require('vue')
const express = require('express')
const server = express()
const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./index.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

server.use(express.static(__dirname + '/')) // eslint-disable-line

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // рекомендуется
  template,
  clientManifest
})

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    }
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Внутренняя ошибка сервера')
      return
    }
    res.end(html)
  })
})

server.listen(9091)
