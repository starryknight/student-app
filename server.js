const express = require('express')
const app = express()
const controller = require('./controllers')
const hbs = require('hbs')

app.set("view engine","hbs")

app.get('/',controller.home)
app.get('/students', controller.index)
app.get('/students/:name', controller.show)


const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log("connected on port 3000")
})