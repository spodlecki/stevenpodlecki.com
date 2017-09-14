const path              = require('path')
const express           = require('express')
const expressStaticGzip = require("express-static-gzip")

module.exports = {
  app: function () {
    const app         = express()
    const publicPath  = path.join(__dirname, '../public')
    const indexPath   = path.join(__dirname, '/../app/index.html')

    app.use('/public', expressStaticGzip(publicPath, {enableBrotli: true}))
    app.get('/', function (_, res) { res.sendFile(indexPath) })
    return app
  }
}
