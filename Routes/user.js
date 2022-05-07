const express = require('express');
const app=express()
const bodyParser = require('body-parser');
const userController = require('../Controller/user',);






  

  

app.use(bodyParser.json())

app.post('/register', userController.registerUser)
app.post('/createbook', userController.createBook)
app.post('/createcomment',userController.createComment)
app.post('/login', userController.login)
app.post('/likePost',userController.likePost)

module.exports = app;