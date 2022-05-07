const userModel = require('../Models/user');
const bookModel = require('../Models/book');
const publicationModel = require('../Models/publication');
const commentsModel=require('../Models/comments')
const { default: mongoose } = require('mongoose');
const JWTService = require('../CommonLib/JWTtoken');
const encryptDecrypt=require('../CommonLib/encryption-decryption')







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


async function createBook(req, res, next) {
    
    try {

        let bookDetail = req.body;
        let response = await bookModel.insertMany([bookDetail]);
         res.json(response)
    }
    catch (error) {
        res.json(error);
    }
}

async function createComment(req, res, next) {
    
    try {

        let commnentDetail = req.body;
        let response = await commentsModel.insertMany([commentDetail]);
         res.json(response)
    }
    catch (error) {
        res.json(error);
    }
}

async function login(req, res, next) {

    const userDetail = await userModel.findOne({ email: req.body.email });
    const isValidPassword = encryptDecrypt.decryptPassword(req.body.password, userDetail.password);

    if (isValidPassword) {
        let userData = {
            "email": req.body.email,
            "firstName": userDetail.firstName,
            "lastName": userDetail.lastName,
            "roleName": "ADMIN"
        }

        let JWTtoken = JWTService.generateToken(userData);
        res.json({
            status: 'success',
            token: JWTtoken
        })
    } else {
        res.json({ message: "password is not valid" });
    }

}




module.exports = {
    registerUser,
    createBook,
    createComment,
    login
}