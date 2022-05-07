
const mongoose = require('mongoose');

const book = new mongoose.Schema({
    "authorId": { type: mongoose.Types.ObjectId, ref: 'user' },
    "publicationId": { type: mongoose.Types.ObjectId, ref: 'publication' },
    "likes": { type: Number, required: true, min:0,default:0 },
    "coverImage": { type: String ,required:true},
    "content": { type: String, required: true },
    "timeStamps":{type:Date,default:Date.now()}
});

module.exports = mongoose.model('book', book);