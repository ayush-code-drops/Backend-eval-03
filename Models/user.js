
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "firstName": { type: String, required: true ,minlength:3, maxlength:30},
    "lastName": { type: String },
    "age": { type: Number, required: true,min:1,max:150},
    "phoneNo": { type: Number, required: true },
    "gender": { type: String, required: true },
    "id": { type: String, required: true },
    "email": { type: String, required: true ,unique:true},
    "profileImages": [{ type: String }],
    "timeStamps":{type:Date,default:Date.now()}
});

module.exports = mongoose.model('user', user);