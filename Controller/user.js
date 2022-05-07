const userModel = require('../Models/user');
const bookModel = require('../Models/book');
const publicationModel = require('../Models/publication');
const commentsModel=require('../Models/comments')
const { default: mongoose } = require('mongoose');









async function registerUser(req, res, next) {
    let userDetail = req.body;
    console.log(userDetail)
    const encryptPassword = encryptDecrypt.encryptPassword(userDetail.password);
    console.log(encryptPassword);
    userDetail.password = encryptPassword;
    console.log(userDetail);
    const response = await userModel.insertMany([userDetail]);
    res.json(response);
    //console.log("hi");
}


async function createbook(req, res, next) {
    
    try {

        let bookDetail = req.body;
        let response = await bookModel.insertMany([bookDetail]);
         res.json(response)
    }
    catch (error) {
        res.json(error);
    }
}






module.exports = {
  registerUser 
}