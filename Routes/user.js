const express = require('express');
const app=express()
const bodyParser = require('body-parser');
const userController = require('../Controller/user',);






  

  

app.use(bodyParser.json())

app.post('/register',userController.registerUser)


module.exports = app;