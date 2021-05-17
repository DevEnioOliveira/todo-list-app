const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true)
//abaixo apenas para tirar a mensagem de deprecated 
mongoose.Promise = global.Promise


module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })