const port = 3003;

const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const allowCors = require('./cors')

/**
 * urlenconded trata todas as requisições no body
 * após isso usa o body parser convertendo pra json
 */
 app.use(bodyParser.urlencoded({ extended: true }))
 app.use(bodyParser.json())
 app.use(allowCors)

 app.listen(port, () => {
    console.log(`BACKEND RODANDO NA PORTA ${port}`)
})

module.exports = app;