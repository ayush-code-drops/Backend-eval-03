const express = require('express');
const app=express()
const bodyParser = require('body-parser');
const userController = require('../Controller/user',);






  

  

app.use(bodyParser.json())

app.post('/register', userController.registerUser)
app.post('/createbook', userController.createBook)
app.post('/createcomment',userController.createComment)


module.exports = app;